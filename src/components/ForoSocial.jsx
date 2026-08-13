import React, { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';
import './ForoSocial.css';
import { HeartIcon, CommentIcon, BookmarkIcon, TrashIcon, ImageIcon } from './Icons';
import { SkeletonPost } from './SkeletonPost';

// -----------------------------------------------------------------------------
// CONFIGURACIÓN Y SERVICIOS (Idealmente en archivos separados)
// -----------------------------------------------------------------------------
const ENV = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  SOCKET_URL: process.env.REACT_APP_SOCKET_URL || 'http://localhost:3000'
};

// Instancia global de Axios
const apiClient = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000, // Timeout de 10s
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Hook de Debounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

// -----------------------------------------------------------------------------
// COMPONENTE PRINCIPAL
// -----------------------------------------------------------------------------
export default function ForoSocial() {
  // --- ESTADOS ---
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState('Todo');
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const token = localStorage.getItem('token');
  
  // Manejo seguro del usuario (sin fallbacks inseguros)
  const currentUser = useMemo(() => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }, []);

  // --- REFS ---
  const observer = useRef();
  const socketRef = useRef(null);

  // --- NOTIFICACIONES ---
  const addNotification = useCallback((msg, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 4000);
  }, []);

  // --- SOCKET.IO ---
  useEffect(() => {
    if (!token) return;

    socketRef.current = io(ENV.SOCKET_URL, { 
      auth: { token },
      transports: ['websocket'],
      reconnectionAttempts: 5
    });

    const socket = socketRef.current;

    socket.on('connect_error', () => addNotification('Error de conexión en tiempo real', 'error'));

    socket.on('nueva_publicacion', (post) => {
      setPosts(prev => {
        if (prev.some(p => p.id === post.id)) return prev;
        return [post, ...prev];
      });
      addNotification('Nueva publicación en el muro');
    });

    socket.on('nuevo_like', ({ postId, likesCount }) => {
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, total_likes: likesCount } : p));
    });

    socket.on('nuevo_comentario', ({ postId, comment }) => {
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, comentarios: [...(p.comentarios || []), comment] } : p));
    });

    return () => {
      socket.disconnect();
    };
  }, [token, addNotification]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Asumiendo que tienes una ruta GET en /api/usuarios para traer a todos
        const res = await apiClient.get('/usuarios');
        
        // Filtramos para que no te sugiera a ti mismo
        const currentUserId = currentUser?.id_usuario || currentUser?.id;
        const otrosUsuarios = res.data.filter(u => 
          (u.id_usuario || u.id) !== currentUserId
        );
        
        setSuggestedUsers(otrosUsuarios);
      } catch (err) {
        console.error("Error al cargar sugerencias de usuarios", err);
      }
    };

    if (currentUser) fetchUsers();
  }, [currentUser]);

  // Filtramos la lista en vivo según lo que el usuario escriba en la lupa
  const filteredUsers = suggestedUsers.filter(u => {
    const nombreUsuario = u.username || u.nombre || '';
    return nombreUsuario.toLowerCase().includes(userSearch.toLowerCase());
  });
  // --- FETCH POSTS ---
  const fetchPosts = useCallback(async (isNewSearch = false, abortSignal) => {
    try {
      setLoading(true);
      setError(null);
      const currentPage = isNewSearch ? 1 : page;
      
      const res = await apiClient.get('/publicaciones/muro', {
        params: { 
          page: currentPage, 
          limit: 10, 
          category: category !== 'Todo' ? category : undefined, 
          search: debouncedSearch || undefined 
        },
        signal: abortSignal
      });

      console.log(res.data);
      
      setPosts(prev => isNewSearch ? res.data : [...prev, ...res.data]);
      setHasMore(res.data.length === 10);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setError('No se pudieron cargar las publicaciones. Intenta de nuevo.');
        addNotification('Error de conexión', 'error');
      }
    } finally {
      setLoading(false);
    }
  }, [page, category, debouncedSearch, addNotification]);

  // Efecto para cambios de página
  useEffect(() => {
    const controller = new AbortController();
    fetchPosts(false, controller.signal);
    return () => controller.abort();
  }, [page]); // Solo reacciona a 'page'

  // Efecto para filtros (Reset de página)
  useEffect(() => {
    const controller = new AbortController();
    setPage(1); // Reset de página
    fetchPosts(true, controller.signal);
    return () => controller.abort();
  }, [category, debouncedSearch]); // Reacciona a filtros

  // --- INFINITE SCROLL ---
  const lastPostElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) setPage(prev => prev + 1);
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // --- ACCIONES ---
  const handleLike = useCallback(async (postId, isLiked) => {
    // Optimistic Update
    setPosts(prev => prev.map(p => 
      p.id === postId ? { ...p, like_usuario: !isLiked, total_likes: p.total_likes + (isLiked ? -1 : 1) } : p
    ));

    try {
      await apiClient.post('/publicaciones/like', { postId });
    } catch (err) {
      // Revertir en caso de error
      setPosts(prev => prev.map(p => 
        p.id === postId ? { ...p, like_usuario: isLiked, total_likes: p.total_likes + (isLiked ? 1 : -1) } : p
      ));
      addNotification('Error al procesar el like', 'error');
    }
  }, [addNotification]);

  const handleComment = useCallback(async (postId, texto) => {
    try {
      await apiClient.post('/publicaciones/comentar', { postId, texto });
      addNotification('Comentario publicado', 'success');
    } catch (err) {
      addNotification('Error al publicar comentario', 'error');
    }
  }, [addNotification]);

  const handleDelete = useCallback(async (postId) => {
    if (!window.confirm('¿Seguro que deseas eliminar esta publicación?')) return;
    try {
      await apiClient.delete(`/publicaciones/eliminar/${postId}`);
      setPosts(prev => prev.filter(p => p.id !== postId));
      addNotification('Publicación eliminada', 'success');
    } catch (err) {
      addNotification('Error al eliminar', 'error');
    }
  }, [addNotification]);

  const handleCreatePost = useCallback(async (formData) => {
    try {
      await apiClient.post('/publicaciones/crear', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setShowModal(false);
      addNotification('Publicación creada con éxito', 'success');
      // Forzamos un fetch inicial para actualizar o confiamos en el socket
      // setPage(1); fetchPosts(true); 
    } catch (err) {
      addNotification('Error al crear la publicación', 'error');
      throw err; // Lanza para que el modal maneje su estado de loading
    }
  }, [addNotification]);

  if (!currentUser) return <div className="text-center p-5 text-white">Por favor inicia sesión.</div>;

  return (
    <main className="container-fluid py-4" style={{ maxWidth: '1200px' }}>
      {/* Toast Notifications */}
      <div aria-live="polite" className="toast-container">
        <AnimatePresence>
          {notifications.map(n => (
            <motion.div key={n.id} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 }}
              className={`toast-panel glass-panel p-3 mb-2 d-flex align-items-center gap-2 ${n.type === 'error' ? 'toast-error' : ''}`}>
              <span>{n.type === 'error' ? '⚠️' : '🔔'}</span>
              <span className="text-white text-sm">{n.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    <div className="row g-4">
        {/* Left Sidebar */}
        <aside className="col-lg-3 d-none d-lg-block">
          <div className="glass-panel p-4 text-center sticky-top sidebar-sticky">
            
            {/* Calculamos el nombre correcto antes de imprimirlo */}
            {(() => {
              const nombreMostrar = currentUser.username || currentUser.nombre || 'usuario';
              const handle = nombreMostrar.toLowerCase().replace(/\s+/g, '');
              
              return (
                <>
                  <div className="skeleton-avatar mx-auto mb-3 premium-avatar">
                    {nombreMostrar[0]?.toUpperCase()}
                  </div>
                  <h1 className="text-white fw-bold mb-1 h5">{nombreMostrar}</h1>
                  <p className="text-muted small">@{handle}</p>
                </>
              );
            })()}

          </div>
        </aside>
     
        {/* Main Feed */}
        <section className="col-lg-6 col-md-8">
          {/* Filters */}
          <div className="glass-panel p-3 mb-4 d-flex flex-column gap-3">
            <input 
              type="search" 
              aria-label="Buscar publicaciones"
              className="premium-input" 
              placeholder="Buscar publicaciones..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <nav aria-label="Categorías" className="d-flex gap-2 overflow-auto no-scrollbar pb-1">
              {['Todo', 'Mecánica', 'Rutas', 'Eventos'].map(cat => (
                <button 
                  key={cat}
                  aria-pressed={category === cat}
                  className={`btn rounded-pill px-4 py-1 border-0 transition-all ${category === cat ? 'bg-gold-gradient text-dark fw-bold' : 'glass-panel text-white'}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {/* Posts Feed */}
          <div className="d-flex flex-column gap-4" role="feed">
            {error && <div className="glass-panel p-4 text-center text-danger">{error}</div>}
            
            {posts.map((post, index) => {
              const isLast = posts.length === index + 1;
              return (
                <article ref={isLast ? lastPostElementRef : null} key={post.id}>
                  <PostCard 
                    post={post} 
                    currentUser={currentUser} 
                    onLike={handleLike} 
                    onComment={handleComment} 
                    onDelete={handleDelete} 
                  />
                </article>
              );
            })}
            
            {loading && (
              <>
                <SkeletonPost />
                <SkeletonPost />
              </>
            )}
            
            {!loading && posts.length === 0 && (
              <div className="text-center text-muted p-5 glass-panel">
                <h4>No hay publicaciones</h4>
                <p>Intenta con otra búsqueda o sé el primero en compartir algo.</p>
              </div>
            )}
          </div>
        </section>

       {/* Right Sidebar - Sugerencias y Búsqueda */}
        <aside className="col-lg-3 col-md-4 d-none d-md-block">
          <div className="glass-panel p-4 sticky-top sidebar-sticky">
            <h2 className="text-gold-gradient fw-bold mb-4 h6">Descubrir Usuarios</h2>
            
            {/* Lupa / Buscador */}
            <div className="position-relative mb-4">
              <span className="position-absolute top-50 translate-middle-y ms-3 text-muted" aria-hidden="true">
                🔍
              </span>
              <input 
                type="search" 
                className="premium-input w-100 py-2 ps-5 pe-3 text-sm" 
                placeholder="Buscar personas..." 
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
              />
            </div>

            {/* Lista dinámica de usuarios */}
            <div className="d-flex flex-column gap-3 overflow-auto no-scrollbar" style={{ maxHeight: '350px' }}>
              {filteredUsers.length === 0 && (
                <div className="text-center text-muted small p-2">
                  No se encontraron usuarios.
                </div>
              )}
              
              {filteredUsers.map(user => {
                const nombreMostrar = user.username || user.nombre || 'Usuario';
                const idUsuario = user.id_usuario || user.id;
                
                return (
                  <div key={idUsuario} className="d-flex align-items-center gap-3 mb-1">
                    <div className="skeleton-avatar bg-dark-muted d-flex align-items-center justify-content-center text-white fw-bold small">
                      {nombreMostrar[0]?.toUpperCase()}
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <div className="text-white text-sm fw-bold text-truncate">{nombreMostrar}</div>
                      <div className="text-muted small-text">
                        @{nombreMostrar.toLowerCase().replace(/\s+/g, '')}
                      </div>
                    </div>
                    <button className="btn p-0 border-0 text-gold-gradient text-sm fw-bold hover-scale">
                      Seguir
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div> {/*
      {/* FAB */}
      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => setShowModal(true)}
        aria-label="Crear nueva publicación"
        className="btn bg-gold-gradient fab-button shadow-lg"
      >
        <span>+</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {showModal && <CreatePostModal onClose={() => setShowModal(false)} onSubmit={handleCreatePost} />}
      </AnimatePresence>
    </main>
  );
}

// -----------------------------------------------------------------------------
// POST CARD COMPONENT (Memoizado para Rendimiento)
// -----------------------------------------------------------------------------
const PostCard = memo(({ post, currentUser, onLike, onComment, onDelete }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [showPopHeart, setShowPopHeart] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleDoubleClick = useCallback(() => {
    if (!post.like_usuario) onLike(post.id, false);
    setShowPopHeart(true);
    setTimeout(() => setShowPopHeart(false), 800);
  }, [post.like_usuario, post.id, onLike]);

  const submitComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || isSubmittingComment) return;
    setIsSubmittingComment(true);
    await onComment(post.id, commentText);
    setCommentText('');
    setIsSubmittingComment(false);
  };

  const isOwner = currentUser.id === post.usuario_id;

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass-panel">
      {/* Header */}
      <header className="p-3 d-flex justify-content-between align-items-center border-bottom border-glass">
        <div className="d-flex align-items-center gap-3">
          <div className="skeleton-avatar bg-gold-gradient d-flex align-items-center justify-content-center fw-bold text-dark">
            {post.usuario_nombre?.[0]?.toUpperCase() || 'U'}
          </div>
          <div>
            <h3 className="text-white mb-0 fw-bold h6">{post.usuario_nombre}</h3>
            <span className="text-muted small-text">
              {new Date(post.fecha).toLocaleDateString()} • {post.categoria}
            </span>
          </div>
        </div>
        {isOwner && (
          <button className="btn-icon text-danger hover-bg-danger" aria-label="Eliminar publicación" onClick={() => onDelete(post.id)}>
            <TrashIcon />
          </button>
        )}
      </header>

      {/* Content */}
      <div className="p-3">
        <p className="text-white mb-2 pre-wrap-text">{post.contenido}</p>
      </div>

      {/* Image */}
      {post.imagen_url && (
        <figure className="post-image-container m-0" onDoubleClick={handleDoubleClick}>
          <img src={`${ENV.API_URL.replace('/api', '')}${post.imagen_url}`} alt="Contenido de la publicación" className="post-image" loading="lazy" />
          {showPopHeart && (
            <div className="double-click-heart pop-animation" aria-hidden="true">❤️</div>
          )}
        </figure>
      )}

      {/* Actions */}
      <footer className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex gap-3">
            <motion.button whileTap={{ scale: 0.8 }} aria-label={post.like_usuario ? "Quitar me gusta" : "Me gusta"} 
              className={`btn-icon ${post.like_usuario ? 'active-gold' : ''}`} onClick={() => onLike(post.id, post.like_usuario)}>
              <HeartIcon filled={post.like_usuario} />
            </motion.button>
            <button className="btn-icon" aria-expanded={showComments} aria-label="Ver comentarios" onClick={() => setShowComments(prev => !prev)}>
              <CommentIcon />
            </button>
          </div>
          <motion.button whileTap={{ scale: 0.8 }} aria-label="Guardar publicación" className={`btn-icon ${isBookmarked ? 'active-gold' : ''}`} onClick={() => setIsBookmarked(!isBookmarked)}>
            <BookmarkIcon filled={isBookmarked} />
          </motion.button>
        </div>
        
        <strong className="text-white d-block mb-1 small-text">{post.total_likes} Me gusta</strong>

        {/* Comments Section */}
        <AnimatePresence>
          {showComments && (
            <motion.section initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-3 overflow-hidden">
              <div className="comments-scroll d-flex flex-column gap-2 mb-3 pe-2">
                {(post.comentarios || []).length === 0 && <span className="text-muted small-text">No hay comentarios aún.</span>}
                {(post.comentarios || []).map((c, i) => (
                  <div key={i} className="text-sm">
                    <strong className="text-white me-2">{c.usuario_nombre}</strong>
                    <span className="text-muted">{c.texto}</span>
                  </div>
                ))}
              </div>
              <form onSubmit={submitComment} className="d-flex gap-2">
                <input type="text" className="premium-input py-1 px-3 text-sm" placeholder="Añade un comentario..." 
                  value={commentText} onChange={e => setCommentText(e.target.value)} disabled={isSubmittingComment} />
                <button type="submit" className="btn text-gold-gradient fw-bold p-0 px-2 border-0 hover-scale" disabled={!commentText.trim() || isSubmittingComment}>
                  {isSubmittingComment ? '...' : 'Publicar'}
                </button>
              </form>
            </motion.section>
          )}
        </AnimatePresence>
      </footer>
    </motion.div>
  );
}, (prevProps, nextProps) => {
  // Memoización profunda para evitar renders innecesarios.
  return (
    prevProps.post.id === nextProps.post.id &&
    prevProps.post.total_likes === nextProps.post.total_likes &&
    prevProps.post.like_usuario === nextProps.post.like_usuario &&
    (prevProps.post.comentarios?.length || 0) === (nextProps.post.comentarios?.length || 0)
  );
});

// -----------------------------------------------------------------------------
// CREATE POST MODAL COMPONENT
// -----------------------------------------------------------------------------
const CreatePostModal = memo(({ onClose, onSubmit }) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Evitar scroll en el body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) return alert('La imagen es muy grande (Max 5MB)');
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() && !image) return;
    
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('contenido', content);
    formData.append('categoria', category);
    if (image) formData.append('imagen', image);
    
    try {
      await onSubmit(formData);
    } catch {
      setIsSubmitting(false); // Restaura en caso de error
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <motion.div initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }}
        className="glass-panel modal-content" onClick={e => e.stopPropagation()}>
        
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h2 id="modal-title" className="text-white fw-bold mb-0 h5">Crear Publicación</h2>
          <button className="btn-icon" aria-label="Cerrar modal" onClick={onClose}>
            <span aria-hidden="true" style={{ fontSize: '1.5rem', lineHeight: 1 }}>&times;</span>
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <textarea className="premium-input mb-3" rows="4" placeholder="¿Qué tienes en mente?" 
            value={content} onChange={e => setContent(e.target.value)} style={{ resize: 'none' }} autoFocus></textarea>
          
          {preview && (
            <figure className="upload-preview mb-3">
              <img src={preview} alt="Vista previa" />
              <button type="button" className="remove-btn" aria-label="Quitar imagen" onClick={() => { setImage(null); setPreview(''); }}>&times;</button>
            </figure>
          )}

          <div className="d-flex gap-3 mb-4 flex-wrap">
            <select aria-label="Categoría" className="premium-input flex-grow-1" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="General">General</option>
              <option value="Mecánica">Mecánica</option>
              <option value="Rutas">Rutas</option>
              <option value="Eventos">Eventos</option>
            </select>
            
            <label className="btn-icon border border-glass rounded p-2" title="Añadir imagen" style={{ cursor: 'pointer' }}>
              <input type="file" accept="image/png, image/jpeg, image/webp" className="d-none" onChange={handleImageChange} />
              <ImageIcon />
            </label>
          </div>

          <button type="submit" className="btn bg-gold-gradient w-100 fw-bold py-2 rounded-pill shadow" disabled={(!content.trim() && !image) || isSubmitting}>
            {isSubmitting ? 'Publicando...' : 'Publicar'}
          </button>
        </form>
      </motion.div>
    </div>
  );
});
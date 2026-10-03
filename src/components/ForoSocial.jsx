import React, { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';
import './ForoSocial.css';
import { HeartIcon, CommentIcon, BookmarkIcon, TrashIcon, ImageIcon } from './Icons';
import { SkeletonPost } from './SkeletonPost';

// -----------------------------------------------------------------------------
// CONFIGURACIÓN Y SERVICIOS
// -----------------------------------------------------------------------------
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jox-f0u1.onrender.com';
const CLEAN_DOMAIN = API_BASE_URL.endsWith('/api') ? API_BASE_URL.replace('/api', '') : API_BASE_URL;

const ENV = {
  API_URL: `${CLEAN_DOMAIN}/api`,
  SOCKET_URL: process.env.REACT_APP_SOCKET_URL || CLEAN_DOMAIN
};
// Instancia global de Axios
const apiClient = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Helper para formatear la URL de imágenes de forma segura
const getMediaUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = ENV.API_URL.replace('/api', '');
  return path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
};

// -----------------------------------------------------------------------------
// HOOK DE DEBOUNCE
// -----------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // ESTADOS
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // USUARIO ACTUAL
  // ---------------------------------------------------------------------------
  const currentUser = useMemo(() => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }, []);

  // ---------------------------------------------------------------------------
  // REFS
  // ---------------------------------------------------------------------------
  const observer = useRef();
  const socketRef = useRef(null);

  // ---------------------------------------------------------------------------
  // NOTIFICACIONES
  // ---------------------------------------------------------------------------
  const addNotification = useCallback((msg, type = 'info') => {
    const id = Date.now();

    setNotifications(prev => [
      ...prev,
      {
        id,
        msg,
        type
      }
    ]);

    setTimeout(() => {
      setNotifications(prev =>
        prev.filter(n => n.id !== id)
      );
    }, 4000);
  }, []);

  // SOCKET.IO
 
  useEffect(() => {
    if (!token) return;

    socketRef.current = io(ENV.SOCKET_URL, {
      auth: { token },
      transports: ['websocket'],
      reconnectionAttempts: 5
    });

    const socket = socketRef.current;

    socket.on('connect_error', () => {
      addNotification(
        'Error de conexión en tiempo real',
        'error'
      );
    });

    socket.on('nueva_publicacion', (post) => {
      setPosts(prev => {
        if (prev.some(p => p.id === post.id)) {
          return prev;
        }

        return [post, ...prev];
      });

      addNotification('Nueva publicación en el muro');
    });

    socket.on('nuevo_like', ({ postId, likesCount }) => {
      setPosts(prev =>
        prev.map(p =>
          p.id === postId
            ? {
                ...p,
                total_likes: likesCount
              }
            : p
        )
      );
    });

    socket.on('nuevo_comentario', ({ postId, comment }) => {
      setPosts(prev =>
        prev.map(p =>
          p.id === postId
            ? {
                ...p,
                comentarios: [
                  ...(p.comentarios || []),
                  comment
                ]
              }
            : p
        )
      );
    });

    return () => {
      socket.disconnect();
    };

  }, [token, addNotification]);

  // USUARIOS
  useEffect(() => {

    const fetchUsers = async () => {
      try {

        const res = await apiClient.get('/usuarios');

        const currentUserId =
          currentUser?.id_usuario ||
          currentUser?.id;

        const otrosUsuarios = res.data.filter(u =>
          (u.id_usuario || u.id) !== currentUserId
        );

        setSuggestedUsers(otrosUsuarios);

      } catch (err) {

        console.error(
          "Error al cargar sugerencias de usuarios",
          err
        );

      }
    };

    if (currentUser) {
      fetchUsers();
    }

  }, [currentUser]);

  // FILTRO DE USUARIOS

  const filteredUsers = suggestedUsers.filter(u => {

    const nombreUsuario =
      u.username ||
      u.nombre ||
      '';

    return nombreUsuario
      .toLowerCase()
      .includes(userSearch.toLowerCase());

  });

  // FETCH POSTS

  const fetchPosts = useCallback(async (
    isNewSearch = false,
    abortSignal
  ) => {

    try {

      setLoading(true);
      setError(null);

      const currentPage =
        isNewSearch
          ? 1
          : page;

      const res = await apiClient.get(
        '/publicaciones/muro',
        {
          params: {
            page: currentPage,
            limit: 10,
            category:
              category !== 'Todo'
                ? category
                : undefined,
            search:
              debouncedSearch ||
              undefined
          },
          signal: abortSignal
        }
      );

      console.log(res.data);

      setPosts(prev =>
        isNewSearch
          ? res.data
          : [...prev, ...res.data]
      );

      setHasMore(
        res.data.length === 10
      );

    } catch (err) {

      if (!axios.isCancel(err)) {

        setError(
          'No se pudieron cargar las publicaciones. Intenta de nuevo.'
        );

        addNotification(
          'Error de conexión',
          'error'
        );
      }

    } finally {

      setLoading(false);

    }

  }, [
    page,
    category,
    debouncedSearch,
    addNotification
  ]);

  // EFECTO CAMBIO DE PÁGINA

  useEffect(() => {

    const controller =
      new AbortController();

    fetchPosts(
      false,
      controller.signal
    );

    return () =>
      controller.abort();

  }, [page, fetchPosts]);

  // EFECTO FILTROS
 
  useEffect(() => {

    const controller =
      new AbortController();

    setPage(1);

    fetchPosts(
      true,
      controller.signal
    );

    return () =>
      controller.abort();

  }, [
    category,
    debouncedSearch,
    fetchPosts
  ]);

  // INFINITE SCROLL
 
  const lastPostElementRef = useCallback(node => {

    if (loading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current =
      new IntersectionObserver(entries => {

        if (
          entries[0].isIntersecting &&
          hasMore
        ) {
          setPage(prev => prev + 1);
        }

      });

    if (node) {
      observer.current.observe(node);
    }

  }, [loading, hasMore]);

  // LIKE

  const handleLike = useCallback(async (
    postId,
    isLiked
  ) => {

    setPosts(prev =>
      prev.map(p =>
        p.id === postId
          ? {
              ...p,
              like_usuario: !isLiked,
              total_likes:
                p.total_likes +
                (isLiked ? -1 : 1)
            }
          : p
      )
    );

    try {

      await apiClient.post(
        '/publicaciones/like',
        {
          postId
        }
      );

    } catch (err) {

      setPosts(prev =>
        prev.map(p =>
          p.id === postId
            ? {
                ...p,
                like_usuario: isLiked,
                total_likes:
                  p.total_likes +
                  (isLiked ? 1 : -1)
              }
            : p
        )
      );

      addNotification(
        'Error al procesar el like',
        'error'
      );
    }

  }, [addNotification]);

  // COMENTARIO
 
  const handleComment = useCallback(async (
    postId,
    texto
  ) => {

    try {

      await apiClient.post(
        '/publicaciones/comentar',
        {
          postId,
          texto
        }
      );

      addNotification(
        'Comentario publicado',
        'success'
      );

    } catch (err) {

      addNotification(
        'Error al publicar comentario',
        'error'
      );

    }

  }, [addNotification]);

  // ELIMINAR
  const handleDelete = useCallback(async (
    postId
  ) => {

    if (
      !window.confirm(
        '¿Seguro que deseas eliminar esta publicación?'
      )
    ) {
      return;
    }

    try {

      await apiClient.delete(
        `/publicaciones/eliminar/${postId}`
      );

      setPosts(prev =>
        prev.filter(p => p.id !== postId)
      );

      addNotification(
        'Publicación eliminada',
        'success'
      );

    } catch (err) {

      addNotification(
        'Error al eliminar',
        'error'
      );

    }

  }, [addNotification]);

  // CREAR PUBLICACIÓN
  const handleCreatePost = useCallback(async (
    formData
  ) => {

    try {

      await apiClient.post(
        '/publicaciones/crear',
        formData,
        {
          headers: {
            'Content-Type':
              'multipart/form-data'
          }
        }
      );

      setShowModal(false);

      addNotification(
        'Publicación creada con éxito',
        'success'
      );

    } catch (err) {

      addNotification(
        'Error al crear la publicación',
        'error'
      );

      throw err;
    }

  }, [addNotification]);

  // SEGURIDAD
  if (!currentUser) {

    return (
      <div className="text-center p-5 text-white">
        Por favor inicia sesión.
      </div>
    );

  }

  // INFORMACIÓN DEL USUARIO
  const nombreUsuario =
    currentUser.username ||
    currentUser.nombre ||
    'usuario';

  const handleUsuario =
    nombreUsuario
      .toLowerCase()
      .replace(/\s+/g, '');

  // ESTADÍSTICAS VISUALES
  const totalPublicaciones =
    posts.length;

  const totalLikes =
    posts.reduce(
      (total, post) =>
        total +
        Number(post.total_likes || 0),
      0
    );

  const totalComentarios =
    posts.reduce(
      (total, post) =>
        total +
        Number(
          post.comentarios?.length || 0
        ),
      0
    );

  return (

    <main
      className="container-fluid py-4"
      style={{
        maxWidth: '1200px'
      }}
    >

      {/* NOTIFICACIONES*/}

      <div
        aria-live="polite"
        className="toast-container"
      >

        <AnimatePresence>

          {notifications.map(n => (

            <motion.div
              key={n.id}
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              exit={{
                x: 100,
                opacity: 0
              }}
              className={`
                toast-panel
                glass-panel
                p-3
                mb-2
                d-flex
                align-items-center
                gap-2
                ${n.type === 'error'
                  ? 'toast-error'
                  : ''
                }
              `}
            >

              <span>
                {n.type === 'error'
                  ? '⚠️'
                  : '🔔'
                }
              </span>

              <span className="text-white text-sm">
                {n.msg}
              </span>

            </motion.div>

          ))}

        </AnimatePresence>

      </div>

      {/* HERO EMPRESARIAL*/}

      <section
        className="glass-panel p-4 mb-4"
        style={{
          background:
            'linear-gradient(135deg, rgba(212,175,55,0.14), rgba(15,15,15,0.85))',
          border:
            '1px solid rgba(212,175,55,0.25)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >

        <div
          style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background:
              'rgba(212,175,55,0.08)',
            right: '-80px',
            top: '-100px'
          }}
        />

        <div
          className="row align-items-center"
        >

          <div className="col-lg-8">

            <div
              className="d-flex align-items-center gap-2 mb-2"
            >

              <span
                className="text-gold-gradient fw-bold"
                style={{
                  letterSpacing: '2px',
                  fontSize: '0.75rem'
                }}
              >
                COMUNIDAD PROFESIONAL
              </span>

              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#28a745',
                  display: 'inline-block',
                  boxShadow:
                    '0 0 10px rgba(40,167,69,.7)'
                }}
              />

              <span className="text-muted small">
                Comunidad activa
              </span>

            </div>

            <h2
              className="text-white fw-bold mb-2"
              style={{
                fontSize:
                  'clamp(1.5rem, 4vw, 2.2rem)'
              }}
            >
              Bienvenido a nuestra comunidad
            </h2>

            <p
              className="text-muted mb-3"
              style={{
                maxWidth: '720px',
                lineHeight: 1.7
              }}
            >
              Un espacio diseñado para conectar profesionales,
              entusiastas y miembros de la comunidad. Comparte
              conocimientos, descubre nuevas oportunidades,
              participa en conversaciones y mantente informado
              sobre las principales novedades.
            </p>

            <div
              className="d-flex flex-wrap gap-2"
            >

              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  background:
                    'rgba(212,175,55,0.12)',
                  color: '#d4af37',
                  border:
                    '1px solid rgba(212,175,55,0.25)'
                }}
              >
                ✓ Comunidad verificada
              </span>

              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  background:
                    'rgba(255,255,255,0.05)',
                  color: '#ddd',
                  border:
                    '1px solid rgba(255,255,255,0.1)'
                }}
              >
                ⚡ Interacción en tiempo real
              </span>

              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  background:
                    'rgba(255,255,255,0.05)',
                  color: '#ddd',
                  border:
                    '1px solid rgba(255,255,255,0.1)'
                }}
              >
                🛡️ Espacio seguro
              </span>

            </div>

          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">

            <div
              className="row g-2"
            >

              <div className="col-4">
                <div
                  className="text-center p-3"
                  style={{
                    background:
                      'rgba(255,255,255,0.035)',
                    borderRadius: '14px',
                    border:
                      '1px solid rgba(255,255,255,0.06)'
                  }}
                >

                  <div
                    className="text-gold-gradient fw-bold"
                    style={{
                      fontSize: '1.4rem'
                    }}
                  >
                    {totalPublicaciones}
                  </div>

                  <div className="text-muted small">
                    Posts
                  </div>

                </div>
              </div>

              <div className="col-4">

                <div
                  className="text-center p-3"
                  style={{
                    background:
                      'rgba(255,255,255,0.035)',
                    borderRadius: '14px',
                    border:
                      '1px solid rgba(255,255,255,0.06)'
                  }}
                >

                  <div
                    className="text-gold-gradient fw-bold"
                    style={{
                      fontSize: '1.4rem'
                    }}
                  >
                    {totalLikes}
                  </div>

                  <div className="text-muted small">
                    Likes
                  </div>

                </div>

              </div>

              <div className="col-4">

                <div
                  className="text-center p-3"
                  style={{
                    background:
                      'rgba(255,255,255,0.035)',
                    borderRadius: '14px',
                    border:
                      '1px solid rgba(255,255,255,0.06)'
                  }}
                >

                  <div
                    className="text-gold-gradient fw-bold"
                    style={{
                      fontSize: '1.4rem'
                    }}
                  >
                    {totalComentarios}
                  </div>

                  <div className="text-muted small">
                    Comentarios
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INFORMACIÓN EMPRESARIAL */}

      <section className="row g-3 mb-4">

        <div className="col-md-4">

          <div
            className="glass-panel p-4 h-100"
          >

            <div
              className="d-flex align-items-center gap-3 mb-3"
            >

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background:
                    'rgba(212,175,55,0.12)',
                  color: '#d4af37',
                  fontSize: '1.2rem'
                }}
              >
                🤝
              </div>

              <div>

                <h3
                  className="text-white fw-bold h6 mb-1"
                >
                  Conecta
                </h3>

                <span className="text-muted small">
                  Amplía tu red
                </span>

              </div>

            </div>

            <p
              className="text-muted small mb-0"
              style={{
                lineHeight: 1.7
              }}
            >
              Encuentra personas con intereses similares,
              profesionales del sector y miembros activos
              de la comunidad.
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div
            className="glass-panel p-4 h-100"
          >

            <div
              className="d-flex align-items-center gap-3 mb-3"
            >

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background:
                    'rgba(212,175,55,0.12)',
                  color: '#d4af37',
                  fontSize: '1.2rem'
                }}
              >
                💡
              </div>

              <div>

                <h3
                  className="text-white fw-bold h6 mb-1"
                >
                  Comparte
                </h3>

                <span className="text-muted small">
                  Conocimiento y experiencias
                </span>

              </div>

            </div>

            <p
              className="text-muted small mb-0"
              style={{
                lineHeight: 1.7
              }}
            >
              Publica experiencias, consejos, fotografías,
              novedades y contenido útil para toda la comunidad.
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div
            className="glass-panel p-4 h-100"
          >

            <div
              className="d-flex align-items-center gap-3 mb-3"
            >

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background:
                    'rgba(212,175,55,0.12)',
                  color: '#d4af37',
                  fontSize: '1.2rem'
                }}
              >
                📈
              </div>

              <div>

                <h3
                  className="text-white fw-bold h6 mb-1"
                >
                  Crece
                </h3>

                <span className="text-muted small">
                  Construye reputación
                </span>

              </div>

            </div>

            <p
              className="text-muted small mb-0"
              style={{
                lineHeight: 1.7
              }}
            >
              Participa activamente, aporta valor y construye
              una presencia reconocida dentro de la comunidad.
            </p>

          </div>

        </div>

      </section>

      {/*CONTENIDO PRINCIPAL*/}

      <div className="row g-4">

        {/*LEFT SIDEBAR */}

<aside className="col-lg-3 d-none d-lg-block">

  <div className="glass-panel p-4 text-center sticky-top sidebar-sticky">

    <img 
      src={
        currentUser?.avatar_url 
          ? getMediaUrl(currentUser.avatar_url) 
          : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      } 
      alt={nombreUsuario} 
      className="rounded-circle mx-auto mb-3 object-fit-cover"
      style={{ width: '80px', height: '80px', border: '2px solid var(--border-glass)' }}
    />

            <h1
              className="text-white fw-bold mb-1 h5"
            >
              {nombreUsuario}
            </h1>

            <p className="text-muted small">
              @{handleUsuario}
            </p>

            {/* Estado */}
            <div
              className="d-flex justify-content-center align-items-center gap-2 mb-4"
            >

              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#28a745',
                  display: 'inline-block'
                }}
              />

              <span className="text-muted small">
                Miembro activo
              </span>

            </div>

            {/* Separador */}
            <div
              style={{
                height: '1px',
                background:
                  'rgba(255,255,255,0.08)',
                marginBottom: '20px'
              }}
            />

            {/* Perfil empresarial */}
            <div className="text-start">

              <div className="mb-3">

                <span
                  className="text-gold-gradient"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '1px'
                  }}
                >
                  TU ESPACIO
                </span>

                <p
                  className="text-muted small mt-2 mb-0"
                  style={{
                    lineHeight: 1.6
                  }}
                >
                  Gestiona tu participación dentro de la
                  comunidad y mantente conectado con otros
                  miembros.
                </p>

              </div>

              <div
                className="p-3 rounded"
                style={{
                  background:
                    'rgba(255,255,255,0.03)',
                  border:
                    '1px solid rgba(255,255,255,0.06)'
                }}
              >

                <div
                  className="d-flex justify-content-between mb-2"
                >

                  <span className="text-muted small">
                    Publicaciones
                  </span>

                  <span className="text-white small fw-bold">
                    {totalPublicaciones}
                  </span>

                </div>

                <div
                  className="d-flex justify-content-between mb-2"
                >

                  <span className="text-muted small">
                    Interacciones
                  </span>

                  <span className="text-white small fw-bold">
                    {totalLikes + totalComentarios}
                  </span>

                </div>

                <div
                  className="d-flex justify-content-between"
                >

                  <span className="text-muted small">
                    Estado
                  </span>

                  <span
                    className="small fw-bold"
                    style={{
                      color: '#28a745'
                    }}
                  >
                    Activo
                  </span>

                </div>

              </div>

            </div>

            {/* Mensaje corporativo */}
            <div
              className="mt-4 pt-3"
              style={{
                borderTop:
                  '1px solid rgba(255,255,255,0.07)'
              }}
            >

              <p
                className="text-muted"
                style={{
                  fontSize: '0.72rem',
                  lineHeight: 1.6
                }}
              >
                Una comunidad crece cuando sus miembros
                comparten conocimiento, experiencias y
                oportunidades.
              </p>

            </div>

          </div>

        </aside>

        {/* MAIN FEED*/}

        <section className="col-lg-6 col-md-8">

          {/* Encabezado del feed */}

          <div
            className="d-flex justify-content-between align-items-center mb-3"
          >

            <div>

              <h2
                className="text-white fw-bold h5 mb-1"
              >
                Comunidad
              </h2>

              <p
                className="text-muted small mb-0"
              >
                Descubre las últimas publicaciones
              </p>

            </div>

            <div
              className="d-flex align-items-center gap-2"
            >

              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#28a745'
                }}
              />

              <span className="text-muted small">
                En línea
              </span>

            </div>

          </div>

          {/*FILTROS */}

          <div
            className="glass-panel p-3 mb-4 d-flex flex-column gap-3"
          >

            <input
              type="search"
              aria-label="Buscar publicaciones"
              className="premium-input"
              placeholder="Buscar publicaciones..."
              value={search}
              onChange={e =>
                setSearch(e.target.value)
              }
            />

            <nav
              aria-label="Categorías"
              className="d-flex gap-2 overflow-auto no-scrollbar pb-1"
            >

              {[
                'Todo',
                'Mecánica',
                'Rutas',
                'Eventos'
              ].map(cat => (

                <button
                  key={cat}
                  aria-pressed={
                    category === cat
                  }
                  className={`
                    btn
                    rounded-pill
                    px-4
                    py-1
                    border-0
                    transition-all
                    ${
                      category === cat
                        ? 'bg-gold-gradient text-dark fw-bold'
                        : 'glass-panel text-white'
                    }
                  `}
                  onClick={() =>
                    setCategory(cat)
                  }
                >
                  {cat}
                </button>

              ))}

            </nav>

          </div>

          {/* BANNER INFORMATIVO*/}

          <div
            className="glass-panel p-3 mb-4"
            style={{
              borderLeft:
                '3px solid #d4af37'
            }}
          >

            <div
              className="d-flex gap-3 align-items-start"
            >

              <div
                style={{
                  fontSize: '1.3rem'
                }}
              >
                💬
              </div>

              <div>

                <h3
                  className="text-white fw-bold h6 mb-1"
                >
                  Comparte contenido de valor
                </h3>

                <p
                  className="text-muted small mb-0"
                  style={{
                    lineHeight: 1.6
                  }}
                >
                  Las mejores comunidades se construyen
                  con conversaciones útiles, respeto y
                  conocimiento compartido.
                </p>

              </div>

            </div>

          </div>

          {/*POSTS*/}

          <div
            className="d-flex flex-column gap-4"
            role="feed"
          >

            {error && (

              <div
                className="glass-panel p-4 text-center text-danger"
              >
                {error}
              </div>

            )}

            {posts.map((post, index) => {

              const isLast =
                posts.length === index + 1;

              return (

                <article
                  ref={
                    isLast
                      ? lastPostElementRef
                      : null
                  }
                  key={post.id}
                >

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

            {!loading &&
              posts.length === 0 && (

                <div
                  className="text-center text-muted p-5 glass-panel"
                >

                  <div
                    style={{
                      fontSize: '2rem',
                      marginBottom: '10px'
                    }}
                  >
                    🔎
                  </div>

                  <h4>
                    No hay publicaciones
                  </h4>

                  <p>
                    Intenta con otra búsqueda o sé
                    el primero en compartir algo.
                  </p>

                </div>

              )}

          </div>

        </section>

        {/*RIGHT SIDEBAR*/}

        <aside className="col-lg-3 col-md-4 d-none d-md-block">

          <div
            className="glass-panel p-4 sticky-top sidebar-sticky"
          >

            <h2
              className="text-gold-gradient fw-bold mb-1 h6"
            >
              Descubrir Usuarios
            </h2>

            <p
              className="text-muted small mb-4"
            >
              Conecta con miembros de la comunidad
            </p>

            {/* Buscador */}

            <div
              className="position-relative mb-4"
            >

              <span
                className="position-absolute top-50 translate-middle-y ms-3 text-muted"
                aria-hidden="true"
              >
                🔍
              </span>

              <input
                type="search"
                className="premium-input w-100 py-2 ps-5 pe-3 text-sm"
                placeholder="Buscar personas..."
                value={userSearch}
                onChange={e =>
                  setUserSearch(e.target.value)
                }
              />

            </div>

            {/* Lista */}

            <div
              className="d-flex flex-column gap-3 overflow-auto no-scrollbar"
              style={{
                maxHeight: '350px'
              }}
            >

              {filteredUsers.length === 0 && (

                <div
                  className="text-center text-muted small p-2"
                >
                  No se encontraron usuarios.
                </div>

              )}

              {filteredUsers.map(user => {

                const nombreMostrar =
                  user.username ||
                  user.nombre ||
                  'Usuario';

                const idUsuario =
                  user.id_usuario ||
                  user.id;

                return (

                  <div
                    key={idUsuario}
                    className="d-flex align-items-center gap-3 mb-1"
                  >

                    {user.avatar_url ? (
                      <img 
                        src={getMediaUrl(user.avatar_url)} 
                        alt={nombreMostrar} 
                        className="rounded-circle object-fit-cover"
                        style={{ width: '36px', height: '36px' }}
                      />
                    ) : (
                      <div className="skeleton-avatar bg-dark-muted d-flex align-items-center justify-content-center text-white fw-bold small">
                        {nombreMostrar[0]?.toUpperCase()}
                      </div>
                    )}

                    <div
                      className="flex-grow-1 overflow-hidden"
                    >

                      <div
                        className="text-white text-sm fw-bold text-truncate"
                      >
                        {nombreMostrar}
                      </div>

                      <div
                        className="text-muted small-text"
                      >
                        @{
                          nombreMostrar
                            .toLowerCase()
                            .replace(/\s+/g, '')
                        }
                      </div>

                    </div>

                    <button
                      className="btn p-0 border-0 text-gold-gradient text-sm fw-bold hover-scale"
                    >
                      Seguir
                    </button>

                  </div>

                );

              })}

            </div>

            {/*INFORMACIÓN DE LA PLATAFORMA*/}

            <div
              className="mt-4 pt-4"
              style={{
                borderTop:
                  '1px solid rgba(255,255,255,0.08)'
              }}
            >

              <div
                className="d-flex align-items-center gap-2 mb-3"
              >

                <span
                  style={{
                    fontSize: '1rem'
                  }}
                >
                  🛡️
                </span>

                <h3
                  className="text-white fw-bold h6 mb-0"
                >
                  Comunidad responsable
                </h3>

              </div>

              <p
                className="text-muted small mb-3"
                style={{
                  lineHeight: 1.6
                }}
              >
                Promovemos conversaciones respetuosas,
                contenido de calidad y colaboración entre
                todos los miembros.
              </p>

              <div
                className="d-flex flex-column gap-2"
              >

                <div
                  className="d-flex align-items-center gap-2"
                >

                  <span
                    style={{
                      color: '#28a745'
                    }}
                  >
                    ✓
                  </span>

                  <span className="text-muted small">
                    Participación activa
                  </span>

                </div>

                <div
                  className="d-flex align-items-center gap-2"
                >

                  <span
                    style={{
                      color: '#28a745'
                    }}
                  >
                    ✓
                  </span>

                  <span className="text-muted small">
                    Contenido organizado
                  </span>

                </div>

                <div
                  className="d-flex align-items-center gap-2"
                >

                  <span
                    style={{
                      color: '#28a745'
                    }}
                  >
                    ✓
                  </span>

                  <span className="text-muted small">
                    Comunicación en tiempo real
                  </span>

                </div>

              </div>

            </div>

          </div>

        </aside>

      </div>

      {/*SECCIÓN CORPORATIVA INFERIOR*/}

      <section
        className="glass-panel mt-5 p-4"
        style={{
          borderTop:
            '1px solid rgba(212,175,55,0.25)'
        }}
      >

        <div className="row g-4">

          <div className="col-lg-5">

            <div
              className="d-flex align-items-center gap-3 mb-3"
            >

              <div
                className="premium-avatar d-flex align-items-center justify-content-center"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px'
                }}
              >
                C
              </div>

              <div>

                <h3
                  className="text-white fw-bold h5 mb-1"
                >
                  Comunidad Profesional
                </h3>

                <span
                  className="text-gold-gradient small fw-bold"
                >
                  CONECTAR · COMPARTIR · CRECER
                </span>

              </div>

            </div>

            <p
              className="text-muted small"
              style={{
                lineHeight: 1.7,
                maxWidth: '500px'
              }}
            >
              Nuestra plataforma está diseñada para
              facilitar la comunicación entre personas,
              fomentar el intercambio de conocimientos y
              crear conexiones de valor dentro de una
              comunidad moderna y dinámica.
            </p>

          </div>

          <div className="col-sm-4 col-lg-2">

            <h4
              className="text-white fw-bold h6 mb-3"
            >
              Comunidad
            </h4>

            <div
              className="d-flex flex-column gap-2"
            >

              <span className="text-muted small">
                Publicaciones
              </span>

              <span className="text-muted small">
                Categorías
              </span>

              <span className="text-muted small">
                Usuarios
              </span>

              <span className="text-muted small">
                Eventos
              </span>

            </div>

          </div>

          <div className="col-sm-4 col-lg-2">

            <h4
              className="text-white fw-bold h6 mb-3"
            >
              Participa
            </h4>

            <div
              className="d-flex flex-column gap-2"
            >

              <span className="text-muted small">
                Comparte contenido
              </span>

              <span className="text-muted small">
                Comenta
              </span>

              <span className="text-muted small">
                Conecta
              </span>

              <span className="text-muted small">
                Descubre
              </span>

            </div>

          </div>

          <div className="col-sm-4 col-lg-3">

            <h4
              className="text-white fw-bold h6 mb-3"
            >
              Compromiso
            </h4>

            <p
              className="text-muted small"
              style={{
                lineHeight: 1.6
              }}
            >
              Construimos un entorno donde la información,
              las experiencias y las conexiones puedan
              convertirse en oportunidades reales.
            </p>

            <div
              className="d-flex align-items-center gap-2"
            >

              <span
                style={{
                  color: '#28a745',
                  fontSize: '0.8rem'
                }}
              >
                ●
              </span>

              <span className="text-muted small">
                Plataforma activa
              </span>

            </div>

          </div>

        </div>

        <div
          className="mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between gap-2"
          style={{
            borderTop:
              '1px solid rgba(255,255,255,0.06)'
          }}
        >

          <span
            className="text-muted"
            style={{
              fontSize: '0.7rem'
            }}
          >
            © {new Date().getFullYear()} Comunidad Profesional.
            Todos los derechos reservados.
          </span>

          <span
            className="text-muted"
            style={{
              fontSize: '0.7rem'
            }}
          >
            Plataforma digital · Comunidad · Networking
          </span>

        </div>

      </section>

      {/*FAB*/}

      <motion.button
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() =>
          setShowModal(true)
        }
        aria-label="Crear nueva publicación"
        className="btn bg-gold-gradient fab-button shadow-lg"
      >

        <span>
          +
        </span>

      </motion.button>

      {/* MODAL*/}

      <AnimatePresence>

        {showModal && (

          <CreatePostModal
            onClose={() =>
              setShowModal(false)
            }
            onSubmit={handleCreatePost}
          />

        )}

      </AnimatePresence>

    </main>
  );
}


// POST CARD COMPONENT
const PostCard = memo(({
  post,
  currentUser,
  onLike,
  onComment,
  onDelete
}) => {

  const [
    showComments,
    setShowComments
  ] = useState(false);

  const [
    commentText,
    setCommentText
  ] = useState('');

  const [
    isSubmittingComment,
    setIsSubmittingComment
  ] = useState(false);

  const [
    showPopHeart,
    setShowPopHeart
  ] = useState(false);

  const [
    isBookmarked,
    setIsBookmarked
  ] = useState(false);

  
  // DOBLE CLICK

  const handleDoubleClick = useCallback(() => {

    if (!post.like_usuario) {
      onLike(
        post.id,
        false
      );
    }

    setShowPopHeart(true);

    setTimeout(() => {
      setShowPopHeart(false);
    }, 800);

  }, [
    post.like_usuario,
    post.id,
    onLike
  ]);

  
  // COMENTARIO
  const submitComment = async (e) => {

    e.preventDefault();

    if (
      !commentText.trim() ||
      isSubmittingComment
    ) {
      return;
    }

    setIsSubmittingComment(true);

    await onComment(
      post.id,
      commentText
    );

    setCommentText('');

    setIsSubmittingComment(false);
  };

  const isOwner =
    currentUser.id === post.usuario_id;

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 15
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      className="glass-panel"
    >

      {/*HEADER*/}

      <header
        className="p-3 d-flex justify-content-between align-items-center border-bottom border-glass"
      >

        <div
          className="d-flex align-items-center gap-3"
        >

          {post.usuario_avatar ? (
            <img 
              src={getMediaUrl(post.usuario_avatar)} 
              alt={post.usuario_nombre} 
              className="rounded-circle object-fit-cover"
              style={{ width: '40px', height: '40px', border: '1px solid var(--border-glass)' }}
            />
          ) : (
            <div className="skeleton-avatar bg-gold-gradient d-flex align-items-center justify-content-center fw-bold text-dark">
              {post.usuario_nombre?.[0]?.toUpperCase() || 'U'}
            </div>
          )}

          <div>

            <h3
              className="text-white mb-0 fw-bold h6"
            >
              {post.usuario_nombre}
            </h3>

            <span
              className="text-muted small-text"
            >
              {new Date(
                post.fecha
              ).toLocaleDateString()}
              {' • '}
              {post.categoria}
            </span>

          </div>

        </div>

        {isOwner && (

          <button
            className="btn-icon text-danger hover-bg-danger"
            aria-label="Eliminar publicación"
            onClick={() =>
              onDelete(post.id)
            }
          >
            <TrashIcon />
          </button>

        )}

      </header>

      {/* CONTENT */}

      <div className="p-3">

        <p
          className="text-white mb-2 pre-wrap-text"
        >
          {post.contenido}
        </p>

      </div>

      {/* IMAGE */}

      {post.imagen_url && (

        <figure
          className="post-image-container m-0"
          onDoubleClick={
            handleDoubleClick
          }
        >

          <img
            src={getMediaUrl(post.imagen_url)}
            alt="Contenido de la publicación"
            className="post-image"
            loading="lazy"
          />

          {showPopHeart && (

            <div
              className="double-click-heart pop-animation"
              aria-hidden="true"
            >
              ❤️
            </div>

          )}

        </figure>

      )}

      {/* ACTIONS */}

      <footer className="p-3">

        <div
          className="d-flex justify-content-between align-items-center mb-2"
        >

          <div
            className="d-flex gap-3"
          >

            <motion.button
              whileTap={{
                scale: 0.8
              }}
              aria-label={
                post.like_usuario
                  ? "Quitar me gusta"
                  : "Me gusta"
              }
              className={`
                btn-icon
                ${
                  post.like_usuario
                    ? 'active-gold'
                    : ''
                }
              `}
              onClick={() =>
                onLike(
                  post.id,
                  post.like_usuario
                )
              }
            >

              <HeartIcon
                filled={
                  post.like_usuario
                }
              />

            </motion.button>

            <button
              className="btn-icon"
              aria-expanded={
                showComments
              }
              aria-label="Ver comentarios"
              onClick={() =>
                setShowComments(
                  prev => !prev
                )
              }
            >

              <CommentIcon />

            </button>

          </div>

          <motion.button
            whileTap={{
              scale: 0.8
            }}
            aria-label="Guardar publicación"
            className={`
              btn-icon
              ${
                isBookmarked
                  ? 'active-gold'
                  : ''
              }
            `}
            onClick={() =>
              setIsBookmarked(
                !isBookmarked
              )
            }
          >

            <BookmarkIcon
              filled={
                isBookmarked
              }
            />

          </motion.button>

        </div>

        <strong
          className="text-white d-block mb-1 small-text"
        >
          {post.total_likes} Me gusta
        </strong>

        {/* COMMENTS*/}

        <AnimatePresence>

          {showComments && (

            <motion.section
              initial={{
                height: 0,
                opacity: 0
              }}
              animate={{
                height: 'auto',
                opacity: 1
              }}
              exit={{
                height: 0,
                opacity: 0
              }}
              className="mt-3 overflow-hidden"
            >

              <div
                className="comments-scroll d-flex flex-column gap-2 mb-3 pe-2"
              >

                {(post.comentarios || [])
                  .length === 0 && (

                  <span
                    className="text-muted small-text"
                  >
                    No hay comentarios aún.
                  </span>

                )}

                {(post.comentarios || [])
                  .map((c, i) => (

                    <div
                      key={i}
                      className="text-sm"
                    >

                      <strong
                        className="text-white me-2"
                      >
                        {c.usuario_nombre}
                      </strong>

                      <span className="text-muted">
                        {c.texto}
                      </span>

                    </div>

                  ))}

              </div>

              <form
                onSubmit={
                  submitComment
                }
                className="d-flex gap-2"
              >

                <input
                  type="text"
                  className="premium-input py-1 px-3 text-sm"
                  placeholder="Añade un comentario..."
                  value={
                    commentText
                  }
                  onChange={e =>
                    setCommentText(
                      e.target.value
                    )
                  }
                  disabled={
                    isSubmittingComment
                  }
                />

                <button
                  type="submit"
                  className="btn text-gold-gradient fw-bold p-0 px-2 border-0 hover-scale"
                  disabled={
                    !commentText.trim() ||
                    isSubmittingComment
                  }
                >

                  {isSubmittingComment
                    ? '...'
                    : 'Publicar'}

                </button>

              </form>

            </motion.section>

          )}

        </AnimatePresence>

      </footer>

    </motion.div>
  );

}, (
  prevProps,
  nextProps
) => {

  return (

    prevProps.post.id ===
      nextProps.post.id &&

    prevProps.post.total_likes ===
      nextProps.post.total_likes &&

    prevProps.post.like_usuario ===
      nextProps.post.like_usuario &&

    (
      prevProps.post.comentarios?.length ||
      0
    ) === (
      nextProps.post.comentarios?.length ||
      0
    )

  );

});

// CREATE POST MODAL
const CreatePostModal = memo(({
  onClose,
  onSubmit
}) => {

  const [
    content,
    setContent
  ] = useState('');

  const [
    category,
    setCategory
  ] = useState('General');

  const [
    image,
    setImage
  ] = useState(null);

  const [
    preview,
    setPreview
  ] = useState('');

  const [
    isSubmitting,
    setIsSubmitting
  ] = useState(false);

  // BLOQUEAR SCROLL
  useEffect(() => {

    document.body.style.overflow =
      'hidden';

    return () => {
      document.body.style.overflow =
        'auto';
    };

  }, []);


  // ESC
  
  useEffect(() => {

    const handleEsc = (e) => {

      if (
        e.key === 'Escape'
      ) {
        onClose();
      }

    };

    window.addEventListener(
      'keydown',
      handleEsc
    );

    return () => {

      window.removeEventListener(
        'keydown',
        handleEsc
      );

    };

  }, [onClose]);

  // IMAGEN
  const handleImageChange = (e) => {

    const file =
      e.target.files[0];

    if (!file) return;

    if (
      file.size >
      5 * 1024 * 1024
    ) {

      return alert(
        'La imagen es muy grande (Max 5MB)'
      );

    }

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );

  };

  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !content.trim() &&
      !image
    ) {
      return;
    }

    setIsSubmitting(true);

    const formData =
      new FormData();

    formData.append(
      'contenido',
      content
    );

    formData.append(
      'categoria',
      category
    );

    if (image) {

      formData.append(
        'imagen',
        image
      );

    }

    try {

      await onSubmit(
        formData
      );

    } catch {

      setIsSubmitting(false);

    }

  };

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >

      <motion.div
        initial={{
          scale: 0.95,
          opacity: 0,
          y: 10
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }}
        exit={{
          scale: 0.95,
          opacity: 0,
          y: 10
        }}
        className="glass-panel modal-content"
        onClick={e =>
          e.stopPropagation()
        }
      >

        {/* MODAL HEADER */}

        <header
          className="d-flex justify-content-between align-items-center mb-4"
        >

          <div>

            <h2
              id="modal-title"
              className="text-white fw-bold mb-1 h5"
            >
              Crear Publicación
            </h2>

            <p
              className="text-muted small mb-0"
            >
              Comparte contenido con la comunidad
            </p>

          </div>

          <button
            className="btn-icon"
            aria-label="Cerrar modal"
            onClick={onClose}
          >

            <span
              aria-hidden="true"
              style={{
                fontSize: '1.5rem',
                lineHeight: 1
              }}
            >
              &times;
            </span>

          </button>

        </header>

        {/* FORM */}

        <form
          onSubmit={
            handleSubmit
          }
        >

          <textarea
            className="premium-input mb-3"
            rows="4"
            placeholder="¿Qué tienes en mente?"
            value={content}
            onChange={e =>
              setContent(
                e.target.value
              )
            }
            style={{
              resize: 'none'
            }}
            autoFocus
          />

          {/* PREVIEW */}

          {preview && (

            <figure
              className="upload-preview mb-3"
            >

              <img
                src={preview}
                alt="Vista previa"
              />

              <button
                type="button"
                className="remove-btn"
                aria-label="Quitar imagen"
                onClick={() => {

                  setImage(null);
                  setPreview('');

                }}
              >
                &times;
              </button>

            </figure>

          )}

          {/* OPTIONS */}

          <div
            className="d-flex gap-3 mb-4 flex-wrap"
          >

            <select
              aria-label="Categoría"
              className="premium-input flex-grow-1"
              value={category}
              onChange={e =>
                setCategory(
                  e.target.value
                )
              }
            >

              <option value="General">
                General
              </option>

              <option value="Mecánica">
                Mecánica
              </option>

              <option value="Rutas">
                Rutas
              </option>

              <option value="Eventos">
                Eventos
              </option>

            </select>

            <label
              className="btn-icon border border-glass rounded p-2"
              title="Añadir imagen"
              style={{
                cursor: 'pointer'
              }}
            >

              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                className="d-none"
                onChange={
                  handleImageChange
                }
              />

              <ImageIcon />

            </label>

          </div>

          {/* AVISO */}

          <div
            className="mb-3 p-3 rounded"
            style={{
              background:
                'rgba(212,175,55,0.06)',
              border:
                '1px solid rgba(212,175,55,0.12)'
            }}
          >

            <div
              className="d-flex gap-2"
            >

              <span>
                💡
              </span>

              <span
                className="text-muted small"
                style={{
                  lineHeight: 1.5
                }}
              >
                Comparte información útil y mantén
                siempre una comunicación respetuosa
                con los demás miembros.
              </span>

            </div>

          </div>

          <button
            type="submit"
            className="btn bg-gold-gradient w-100 fw-bold py-2 rounded-pill shadow"
            disabled={
              (!content.trim() &&
                !image) ||
              isSubmitting
            }
          >

            {isSubmitting
              ? 'Publicando...'
              : 'Publicar'}

          </button>

        </form>

      </motion.div>

    </div>

  );

});
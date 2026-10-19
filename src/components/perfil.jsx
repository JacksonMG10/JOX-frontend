import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './Dashboard.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jox-f0u1.onrender.com';

export default function Perfil() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [username, setUsername] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fotoFile, setFotoFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

    useEffect(() => {
        const obtenerPerfil = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }
            try {
                const res = await axios.get(`${API_BASE_URL}/api/usuarios/perfil`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsuario(res.data);
                setUsername(res.data.username || res.data.nombre || '');
                setNombre(res.data.nombre || '');
                setApellido(res.data.apellido || '');
                if (res.data.avatar_url) {
                    const url = res.data.avatar_url.startsWith('http') 
                        ? res.data.avatar_url 
                        : `${API_BASE_URL}/${res.data.avatar_url}`;
                    setPreviewUrl(url);
                }
            } catch (err) {
                console.error("Error al cargar perfil:", err);
            }
        };
        obtenerPerfil();
    }, [navigate]);

    const handleFotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setMensaje({ texto: 'La imagen debe ser menor a 5MB', tipo: 'danger' });
                return;
            }
            setFotoFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje({ texto: '', tipo: '' });

        if (!username.trim()) {
            setMensaje({ texto: 'El nombre de usuario no puede estar vacío', tipo: 'danger' });
            return;
        }

        setCargando(true);
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('username', username.trim());
        formData.append('nombre', nombre.trim());
        formData.append('apellido', apellido.trim());
        if (fotoFile) {
            formData.append('avatar', fotoFile);
        }

        try {
            const res = await axios.put(`${API_BASE_URL}/api/usuarios/perfil`, formData, {
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.data.usuario) {
                localStorage.setItem('user', JSON.stringify(res.data.usuario));
            }

            setMensaje({ texto: '✨ ¡Perfil actualizado exitosamente!', tipo: 'success' });
        } catch (err) {
            console.error("Error al actualizar perfil:", err);
            const msg = err.response?.data?.mensaje || 'El nombre de usuario ya está registrado por otra persona. Elige otro.';
            setMensaje({ texto: msg, tipo: 'danger' });
        } finally {
            setCargando(false);
        }
    };

    if (!usuario) {
        return (
            <div className="dash-layout d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#0d0d0d' }}>
                <div className="text-center">
                    <div className="spinner-border text-warning mb-3" role="status" style={{ width: '3rem', height: '3rem' }}></div>
                    <h4 className="text-gold fw-bold">Cargando tu Perfil...</h4>
                </div>
            </div>
        );
    }

    return (
        <div className="dash-layout fade-in" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#e0e0e0' }}>
            
            {/* NAVBAR */}
            <nav className="dash-nav px-4 py-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#121212', borderBottom: '1px solid rgba(212, 175, 55, 0.25)' }}>
                <div className="d-flex align-items-center cursor-pointer" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="JOX" className="dash-logo" style={{ height: '40px' }} />
                    <h4 className="text-gold fw-bold mb-0 ms-2 dash-logo-text" style={{ color: '#D4AF37', letterSpacing: '1px' }}>JOX</h4>
                </div>
                <button onClick={() => navigate('/dashboard')} className="btn btn-outline-warning btn-sm rounded-pill px-3 fw-bold" style={{ borderColor: '#D4AF37', color: '#D4AF37' }}>
                    ❮ Volver al Dashboard
                </button>
            </nav>

            {/* CONTENIDO PRINCIPAL DE PERFIL */}
            <div className="dash-content container py-5 d-flex justify-content-center">
                <div className="col-12 col-md-10 col-lg-7">
                    
                    <div className="card border-0 shadow-lg" style={{ backgroundColor: '#141414', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden' }}>
                        
                        {/* BANNER SUPERIOR DECORATIVO */}
                        <div style={{ height: '120px', background: 'linear-gradient(135deg, #1f1a0a 0%, #3a2e0b 50%, #141414 100%)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', position: 'relative' }}>
                            <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                                <span className="badge bg-dark text-warning border border-warning px-3 py-1 rounded-pill fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                                    PERFIL DE USUARIO JOX
                                </span>
                            </div>
                        </div>

                        <div className="card-body px-4 px-md-5 pb-5 position-relative" style={{ marginTop: '-60px' }}>
                            
                            {/* FOTO DE PERFIL / AVATAR */}
                            <div className="text-center mb-4">
                                <div className="position-relative d-inline-block">
                                    {previewUrl ? (
                                        <img 
                                            src={previewUrl} 
                                            alt="Avatar" 
                                            className="rounded-circle object-fit-cover shadow"
                                            style={{ width: '120px', height: '120px', border: '4px solid #D4AF37', backgroundColor: '#1a1a1a' }}
                                        />
                                    ) : (
                                        <div 
                                            className="rounded-circle fw-bold d-flex align-items-center justify-content-center mx-auto shadow"
                                            style={{ width: '120px', height: '120px', fontSize: '2.8rem', backgroundColor: '#D4AF37', color: '#000', border: '4px solid #fff' }}
                                        >
                                            {usuario.nombre ? usuario.nombre.charAt(0).toUpperCase() : 'U'}
                                        </div>
                                    )}

                                    <label 
                                        htmlFor="avatar-upload" 
                                        className="position-absolute bottom-0 end-0 bg-warning text-dark rounded-circle p-2 shadow cursor-pointer"
                                        style={{ width: '38px', height: '38px', cursor: 'pointer', border: '2px solid #000' }}
                                        title="Cambiar Foto"
                                    >
                                        📷
                                    </label>
                                    <input 
                                        id="avatar-upload"
                                        type="file" 
                                        accept="image/png, image/jpeg, image/webp" 
                                        className="d-none" 
                                        onChange={handleFotoChange} 
                                    />
                                </div>

                                <h3 className="text-white fw-bold mt-3 mb-0">
                                    {nombre} {apellido}
                                </h3>
                                <p className="text-muted small">@{username || 'usuario'}</p>
                            </div>

                            {/* ESTADÍSTICAS RÁPIDAS DEL PERFIL */}
                            <div className="row g-2 mb-4 text-center">
                                <div className="col-6">
                                    <div className="p-2 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                        <small className="text-muted d-block style-sm">Tipo de Cuenta</small>
                                        <span className="text-warning fw-bold text-uppercase">{usuario.tipo_usuario || 'Común'}</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-2 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                        <small className="text-muted d-block style-sm">Estado</small>
                                        <span className="text-success fw-bold">Active ✓</span>
                                    </div>
                                </div>
                            </div>

                            {/* MENSAJES DE ALERTA */}
                            {mensaje.texto && (
                                <div className={`alert alert-${mensaje.tipo === 'success' ? 'success' : 'danger'} mb-4 text-center rounded-3 border-0 py-2`} style={{ backgroundColor: mensaje.tipo === 'success' ? 'rgba(25, 135, 84, 0.2)' : 'rgba(220, 53, 69, 0.2)', color: mensaje.tipo === 'success' ? '#2ec4b6' : '#ff6b6b' }}>
                                    {mensaje.texto}
                                </div>
                            )}

                            {/* FORMULARIO DE EDICIÓN */}
                            <form onSubmit={handleSubmit}>
                                
                                <div className="mb-4">
                                    <label className="form-label text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.5px' }}>
                                        Nombre de Usuario <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-warning text-warning fw-bold">@</span>
                                        <input 
                                            type="text" 
                                            className="form-control bg-dark text-white border-warning py-2" 
                                            placeholder="ej: prueba_jox"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            style={{ backgroundColor: '#1a1a1a', borderLeft: 'none' }}
                                            required
                                        />
                                    </div>
                                    <small className="text-muted style-sm mt-1 d-block">Identificador único dentro de la comunidad JOX.</small>
                                </div>

                                <div className="row g-3 mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label text-light fw-bold small text-uppercase">Nombre:</label>
                                        <input 
                                            type="text" 
                                            className="form-control bg-dark text-white border-secondary py-2" 
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            style={{ backgroundColor: '#1a1a1a' }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-light fw-bold small text-uppercase">Apellido:</label>
                                        <input 
                                            type="text" 
                                            className="form-control bg-dark text-white border-secondary py-2" 
                                            value={apellido}
                                            onChange={(e) => setApellido(e.target.value)}
                                            style={{ backgroundColor: '#1a1a1a' }}
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn w-100 py-3 fw-bold rounded-pill text-dark shadow mt-2"
                                    style={{ backgroundColor: '#D4AF37', border: 'none', transition: 'all 0.3s' }}
                                    disabled={cargando}
                                >
                                    {cargando ? (
                                        <span>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Guardando cambios...
                                        </span>
                                    ) : (
                                        '💾 Guardar Cambios del Perfil'
                                    )}
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
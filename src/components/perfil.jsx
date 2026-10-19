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

            // Actualizar datos de usuario en sesión
            if (res.data.usuario) {
                localStorage.setItem('user', JSON.stringify(res.data.usuario));
            }

            setMensaje({ texto: '¡Perfil actualizado exitosamente!', tipo: 'success' });
        } catch (err) {
            console.error("Error al actualizar perfil:", err);
            // El backend retorna un status 400 o 409 si el username ya está en uso
            const msg = err.response?.data?.mensaje || 'El nombre de usuario ya está registrado por otra persona. Elige otro.';
            setMensaje({ texto: msg, tipo: 'danger' });
        } finally {
            setCargando(false);
        }
    };

    if (!usuario) {
        return (
            <div className="dash-layout d-flex justify-content-center align-items-center">
                <h4 className="text-gold">Cargando perfil...</h4>
            </div>
        );
    }

    return (
        <div className="dash-layout fade-in">
            <nav className="dash-nav">
                <div className="d-flex align-items-center cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <img src={logo} alt="JOX" className="dash-logo" />
                    <h4 className="text-gold fw-bold mb-0 dash-logo-text">JOX</h4>
                </div>
                <button onClick={() => navigate('/dashboard')} className="btn-outline-gold btn-sm">
                    ⬅ Volver al Dashboard
                </button>
            </nav>

            <div className="dash-content d-flex justify-content-center">
                <div className="dash-card col-md-8 col-lg-6 mt-4 p-4">
                    <h2 className="text-gold fw-bold mb-4 text-center">⚙️ Editar Mi Perfil</h2>

                    {mensaje.texto && (
                        <div className={`alert alert-${mensaje.tipo} mb-4 text-center`}>
                            {mensaje.texto}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* FOTO DE PERFIL */}
                        <div className="text-center mb-4">
                            <div className="position-relative d-inline-block">
                                {previewUrl ? (
                                    <img 
                                        src={previewUrl} 
                                        alt="Avatar" 
                                        className="rounded-circle object-fit-cover shadow-lg"
                                        style={{ width: '110px', height: '110px', border: '3px solid #D4AF37' }}
                                    />
                                ) : (
                                    <div 
                                        className="rounded-circle bg-warning text-dark fw-bold d-flex align-items-center justify-content-center mx-auto shadow-lg"
                                        style={{ width: '110px', height: '110px', fontSize: '2.5rem' }}
                                    >
                                        {usuario.nombre ? usuario.nombre.charAt(0).toUpperCase() : 'U'}
                                    </div>
                                )}
                            </div>
                            <div className="mt-3">
                                <label className="btn btn-sm btn-outline-warning rounded-pill">
                                    📷 Cambiar Foto de Perfil
                                    <input 
                                        type="file" 
                                        accept="image/png, image/jpeg, image/webp" 
                                        className="d-none" 
                                        onChange={handleFotoChange} 
                                    />
                                </label>
                            </div>
                        </div>

                        {/* NOMBRE DE USUARIO (ÚNICO) */}
                        <div className="mb-3">
                            <label className="form-label text-light fw-bold">
                                Nombre de Usuario <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                                <span className="input-group-text bg-dark text-gold border-warning">@</span>
                                <input 
                                    type="text" 
                                    className="form-control bg-dark text-white border-warning" 
                                    placeholder="ej: prueba_jox"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <small className="text-muted">Este nombre debe ser único en la plataforma.</small>
                        </div>

                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <label className="form-label text-light fw-bold">Nombre:</label>
                                <input 
                                    type="text" 
                                    className="form-control bg-dark text-white border-warning" 
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-light fw-bold">Apellido:</label>
                                <input 
                                    type="text" 
                                    className="form-control bg-dark text-white border-warning" 
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-solid-gold w-100 py-2 fw-bold"
                            disabled={cargando}
                        >
                            {cargando ? 'Guardando cambios...' : '💾 Guardar Cambios'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
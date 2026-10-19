import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/Logo.png';
import './Login.css';
import API_BASE_URL from '../config';

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Estados para Recuperar Contraseña
    const [mostrarModalModal, setMostrarModal] = useState(false);
    const [pasoRecuperacion, setPasoRecuperacion] = useState(1); // 1: Pedir Correo, 2: Pedir Código y Clave
    const [correoRecuperacion, setCorreoRecuperacion] = useState('');
    const [codigoRecuperacion, setCodigoRecuperacion] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [mensajeRecuperacion, setMensajeRecuperacion] = useState({ texto: '', tipo: '' });
    const [cargandoRecuperacion, setCargandoRecuperacion] = useState(false);

    const manejarLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        try {
            const response = await axios.post(`${API_BASE_URL}/api/usuarios/login`, {
                correo,
                contraseña
            });

            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.usuario));
                navigate('/dashboard');
            } else {
                alert('Respuesta inválida del servidor: No se recibió token de autenticación.');
            }

        } catch (error) {
            console.error("Error en manejarLogin:", error);
            const mensajeError = error.response?.data?.mensaje || 'No se pudo conectar al servidor';
            alert('Error al iniciar sesión: ' + mensajeError);
        } finally {
            setLoading(false);
        }
    };

    const solicitarCodigo = async (e) => {
        e.preventDefault();
        setMensajeRecuperacion({ texto: '', tipo: '' });
        setCargandoRecuperacion(true);

        try {
            const res = await axios.post(`${API_BASE_URL}/api/usuarios/solicitar-recuperacion`, {
                correo: correoRecuperacion
            });
            setMensajeRecuperacion({ texto: res.data.mensaje, tipo: 'success' });
            setPasoRecuperacion(2);
        } catch (error) {
            const msg = error.response?.data?.mensaje || 'Error al enviar el código de recuperación';
            setMensajeRecuperacion({ texto: msg, tipo: 'danger' });
        } finally {
            setCargandoRecuperacion(false);
        }
    };

    const restablecerClave = async (e) => {
        e.preventDefault();
        setMensajeRecuperacion({ texto: '', tipo: '' });
        setCargandoRecuperacion(true);

        try {
            const res = await axios.post(`${API_BASE_URL}/api/usuarios/restablecer-contrasena`, {
                correo: correoRecuperacion,
                codigo: codigoRecuperacion,
                nuevaContrasena
            });
            alert(res.data.mensaje);
            setMostrarModal(false);
            setPasoRecuperacion(1);
            setCorreoRecuperacion('');
            setCodigoRecuperacion('');
            setNuevaContrasena('');
        } catch (error) {
            const msg = error.response?.data?.mensaje || 'Error al restablecer la contraseña';
            setMensajeRecuperacion({ texto: msg, tipo: 'danger' });
        } finally {
            setCargandoRecuperacion(false);
        }
    };

    return (
        <div className="login-layout">
            <div className="login-card">
                
                <div className="text-center">
                    <img 
                        src={logoImg} 
                        alt="Logo JOX" 
                        style={{ width: '160px', filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))', marginBottom: '10px' }}
                        onError={(e) => e.target.style.display = 'none'}
                    />
                    <p className="login-subtitle fw-bold">GESTIÓN DE MANTENIMIENTO</p>
                </div>
                
                <form onSubmit={manejarLogin}>
                    <div className="login-input-group">
                        <label className="login-label">CORREO ELECTRÓNICO</label>
                        <input 
                            type="email" 
                            className="login-input" 
                            placeholder="usuario@jox.com"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="login-input-group mb-2">
                        <label className="login-label">CONTRASEÑA</label>
                        <input 
                            type="password" 
                            className="login-input" 
                            placeholder="••••••••"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="text-end mb-3">
                        <span 
                            onClick={() => {
                                setMostrarModal(true);
                                setMensajeRecuperacion({ texto: '', tipo: '' });
                                setPasoRecuperacion(1);
                            }} 
                            className="login-link small"
                            style={{ fontSize: '0.8rem' }}
                        >
                            ¿Olvidaste tu contraseña?
                        </span>
                    </div>

                    <button type="submit" className="btn-login" disabled={loading}>
                        {loading ? <span className="spinner-border spinner-border-sm"></span> : 'INICIAR SESIÓN'}
                    </button>
                </form>

                <div className="mt-4">
                    <p className="small mb-0" style={{ color: '#aaa' }}>
                        ¿Nuevo en JOX?{' '}
                        <span onClick={() => navigate('/registro')} className="login-link">
                            Crea una cuenta premium
                        </span>
                    </p>
                </div>
            </div>

            {/* MODAL DE RECUPERACIÓN DE CONTRASEÑA */}
            {mostrarModalModal && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999 }}>
                    <div className="login-card p-4 position-relative" style={{ maxWidth: '440px', border: '1px solid #D4AF37' }}>
                        <button 
                            type="button" 
                            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                            onClick={() => setMostrarModal(false)}
                        ></button>

                        <h4 className="text-gold fw-bold mb-3">🔐 Recuperar Contraseña</h4>

                        {mensajeRecuperacion.texto && (
                            <div className={`alert alert-${mensajeRecuperacion.tipo} py-2 style-sm`}>
                                {mensajeRecuperacion.texto}
                            </div>
                        )}

                        {pasoRecuperacion === 1 ? (
                            <form onSubmit={solicitarCodigo}>
                                <p className="text-light-gray style-sm mb-3">
                                    Ingresa tu correo registrado y te enviaremos un código de 6 dígitos para restablecer tu contraseña.
                                </p>
                                <div className="login-input-group mb-3">
                                    <label className="login-label">CORREO ELECTRÓNICO</label>
                                    <input 
                                        type="email" 
                                        className="login-input" 
                                        placeholder="ejemplo@jox.com" 
                                        value={correoRecuperacion}
                                        onChange={(e) => setCorreoRecuperacion(e.target.value)}
                                        required 
                                    />
                                </div>
                                <button type="submit" className="btn-login w-100" disabled={cargandoRecuperacion}>
                                    {cargandoRecuperacion ? 'Enviando...' : '📩 Enviar Código al Correo'}
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={restablecerClave}>
                                <p className="text-light-gray style-sm mb-3">
                                    Ingresa el código que enviamos a <strong>{correoRecuperacion}</strong> y define tu nueva contraseña.
                                </p>
                                <div className="login-input-group mb-2">
                                    <label className="login-label">CÓDIGO (6 DÍGITOS)</label>
                                    <input 
                                        type="text" 
                                        className="login-input text-center fw-bold text-gold" 
                                        placeholder="123456" 
                                        maxLength="6"
                                        value={codigoRecuperacion}
                                        onChange={(e) => setCodigoRecuperacion(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="login-input-group mb-3">
                                    <label className="login-label">NUEVA CONTRASEÑA</label>
                                    <input 
                                        type="password" 
                                        className="login-input" 
                                        placeholder="••••••••" 
                                        value={nuevaContrasena}
                                        onChange={(e) => setNuevaContrasena(e.target.value)}
                                        required 
                                    />
                                </div>
                                <button type="submit" className="btn-login w-100" disabled={cargandoRecuperacion}>
                                    {cargandoRecuperacion ? 'Restableciendo...' : '💾 Guardar Nueva Contraseña'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
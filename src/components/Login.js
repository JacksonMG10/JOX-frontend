import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/Logo.png';
import './Login.css';

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const manejarLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        const response = await axios.post('API_BASE_URL/api/usuarios/login', {
            correo,
            contraseña
        });

        console.log(response.data);

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.usuario));

        navigate('/dashboard');

    } catch (error) {
        alert('Error: ' + (error.response?.data?.mensaje || 'No se pudo conectar al servidor'));
    } finally {
        setLoading(false);
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

                    <div className="login-input-group">
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
        </div>
    );
};

export default Login;
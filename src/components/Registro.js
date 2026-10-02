import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registro.css'; // Asegúrate de que esta línea esté aquí

const Registro = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
        tipo_usuario: 'comun',
        documento_dueno: '',
        nit_empresa: '',
        direccion_taller: ''
    });
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const manejarCambio = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    const manejarRegistro = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('API_BASE_URL/api/usuarios/registro', datos);
            alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
            navigate('/login');
        } catch (error) {
            alert('Error: ' + (error.response?.data?.mensaje || 'No se pudo registrar'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registro-layout">
            <div className="registro-card">
                
                <div className="text-center mb-4">
                    <h2 className="registro-title">CREAR CUENTA</h2>
                    <p className="registro-subtitle">Únete a la plataforma JOX</p>
                </div>

                <form onSubmit={manejarRegistro}>
                    {/* NOMBRES Y APELLIDOS EN DOS COLUMNAS */}
                    <div className="row mb-1">
                        <div className="col-md-6 text-start registro-input-group">
                            <label className="registro-label">NOMBRE</label>
                            <input type="text" name="nombre" className="registro-input" placeholder="Tu nombre" onChange={manejarCambio} required />
                        </div>
                        <div className="col-md-6 text-start registro-input-group">
                            <label className="registro-label">APELLIDO</label>
                            <input type="text" name="apellido" className="registro-input" placeholder="Tu apellido" onChange={manejarCambio} required />
                        </div>
                    </div>

                    <div className="registro-input-group">
                        <label className="registro-label">CORREO ELECTRÓNICO</label>
                        <input type="email" name="correo" className="registro-input" placeholder="ejemplo@correo.com" onChange={manejarCambio} required />
                    </div>

                    <div className="registro-input-group">
                        <label className="registro-label">CONTRASEÑA</label>
                        <input type="password" name="contraseña" className="registro-input" placeholder="••••••••" onChange={manejarCambio} required />
                    </div>

                    <div className="registro-input-group">
                        <label className="registro-label">TIPO DE USUARIO</label>
                        <select name="tipo_usuario" className="registro-input" style={{ cursor: 'pointer' }} onChange={manejarCambio} value={datos.tipo_usuario}>
                            <option value="comun">Usuario Común</option>
                            <option value="dueno_taller">Dueño de Taller</option>
                        </select>
                    </div>

                    {/* CAMPOS CONDICIONALES PARA DUEÑO DE TALLER */}
                    {datos.tipo_usuario === 'dueno_taller' && (
                        <div className="taller-box">
                            <h6 className="text-white mb-3 small fw-bold text-center border-bottom border-secondary pb-2">DATOS DEL NEGOCIO</h6>
                            <div className="registro-input-group">
                                <label className="registro-label" style={{color: '#a0a0a0'}}>DOCUMENTO DUEÑO</label>
                                <input type="text" name="documento_dueno" className="registro-input" placeholder="Ej. 123456789" onChange={manejarCambio} required />
                            </div>
                            <div className="registro-input-group">
                                <label className="registro-label" style={{color: '#a0a0a0'}}>NIT DE LA EMPRESA</label>
                                <input type="text" name="nit_empresa" className="registro-input" placeholder="Número de NIT" onChange={manejarCambio} required />
                            </div>
                            <div className="registro-input-group mb-0">
                                <label className="registro-label" style={{color: '#a0a0a0'}}>DIRECCIÓN DEL TALLER</label>
                                <input type="text" name="direccion_taller" className="registro-input" placeholder="Dirección completa" onChange={manejarCambio} required />
                            </div>
                        </div>
                    )}

                    <button type="submit" className="btn-registro" disabled={loading}>
                        {loading ? (
                            <span className="spinner-border spinner-border-sm"></span>
                        ) : (
                            'REGISTRARME AHORA'
                        )}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="mb-0 text-light-gray small" style={{ color: '#a0a0a0' }}>
                        ¿Ya tienes una cuenta?{' '}
                        <span 
                            onClick={() => navigate('/login')} 
                            className="registro-link" 
                            style={{ cursor: 'pointer' }}
                        >
                            Inicia sesión aquí
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registro;
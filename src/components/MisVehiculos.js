import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './MisVehiculos.css'; // Asegúrate de tener esta línea

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jox-f0u1.onrender.com';
const MisVehiculos = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        obtenerVehiculos();
    }, []);

    const obtenerVehiculos = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            // Llamada a tu backend para traer los vehículos del usuario
            const res = await axios.get(`${API_BASE_URL}/api/vehiculos`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            setVehiculos(res.data);
        } catch (error) {
            console.error('Error al cargar vehículos:', error);
            // Si el token expiró, lo mandamos al login
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="garaje-layout">
            
            {/* Barra de Navegación */}
            <nav className="garaje-nav">
                <button onClick={() => navigate('/dashboard')} className="btn-nav">
                    ⬅ Dashboard
                </button>
                <h4 className="text-gold fw-bold mb-0 d-none d-md-block">MI GARAJE</h4>
                <Link to="/registrar-vehiculo" className="btn-nav btn-nav-primary">
                    + Añadir Vehículo
                </Link>
            </nav>

            {/* Encabezado */}
            <div className="garaje-header">
                <h1 className="garaje-title">Mis Vehículos</h1>
                <p className="text-light-gray">Gestiona tu flota y revisa el historial de mantenimientos</p>
            </div>

            {/* Contenido Principal */}
            {cargando ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-warning" style={{width: '3rem', height: '3rem'}} role="status"></div>
                    <h5 className="mt-3 text-gold">Cargando tu garaje...</h5>
                </div>
            ) : vehiculos.length === 0 ? (
                // ESTADO VACÍO: Si no tiene vehículos
                <div className="empty-state">
                    <div className="empty-icon">🕸️</div>
                    <h3 className="text-white fw-bold mb-3">Tu garaje está vacío</h3>
                    <p className="text-light-gray mb-4">Aún no has registrado ningún automóvil o motocicleta en JOX.</p>
                    <button 
                        onClick={() => navigate('/registrar-vehiculo')}
                        className="btn-registro w-auto px-5 py-3"
                    >
                        REGISTRAR MI PRIMER VEHÍCULO
                    </button>
                </div>
            ) : (
                // CUADRÍCULA DE VEHÍCULOS
                <div className="vehiculos-grid">
                    {vehiculos.map((vehiculo) => (
                        <div className="vehiculo-card" key={vehiculo.id_vehiculo}>
                            
                            {/* Marca de agua de fondo */}
                            <div className="vehiculo-watermark">
                                {vehiculo.tipo === 'Motocicleta' ? '🏍️' : '🚘'}
                            </div>

                            <span className="vehiculo-tipo-badge">
                                {vehiculo.tipo === 'Motocicleta' ? '🏍️ Moto' : '🚗 Auto'}
                            </span>

                            {/* Mostrar Alias (si tiene) o Marca por defecto */}
                            <h3 className="vehiculo-alias">
                                {vehiculo.alias ? vehiculo.alias : vehiculo.marca}
                            </h3>
                            <p className="vehiculo-modelo">
                                {vehiculo.marca} {vehiculo.modelo} ({vehiculo.año})
                            </p>

                            <div className="vehiculo-detalles">
                                <div className="detalle-item">
                                    <span className="detalle-label">Kilometraje</span>
                                    <span className="detalle-valor">{vehiculo.kilometraje.toLocaleString()} km</span>
                                </div>
                                <div className="detalle-item">
                                    <span className="detalle-label">Combustible</span>
                                    <span className="detalle-valor">{vehiculo.tipo_combustible || 'Gasolina'}</span>
                                </div>
                            </div>

                            <div className="placa-box mb-4">
                                {vehiculo.placa}
                            </div>

                            <div className="vehiculo-acciones">
                                {/* Este botón a futuro llevará a ver el historial de mantenimiento */}
                                <button className="btn-accion btn-mantenimiento">
                                    🔧 Ver Historial
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MisVehiculos;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Principal.css';
import imagenCarro from '../assets/carro.png'; 
import imagenMoto from '../assets/moto.png';
import logo from '../assets/Logo.png';

function Introduccion() {
    const navigate = useNavigate();

    return (
        <main className="intro-container">
            {/* Sección de texto y llamadas a la acción */}
            <section className="intro-content">
                <header className="intro-header">
                    <div className="logo-jox">
                        <img src={logo} className="logo-icon" alt="JOX Logo" />
                        JOX
                    </div>
                </header>

                <div className="intro-text-wrap">
                    <h1 className="intro-title">
                        Gestión inteligente de <br />
                        <span className="text-gradient">Mantenimiento</span>
                    </h1>

                    <p className="intro-description">
                        Administra tu flota de vehículos de forma eficiente. Consulta información en tiempo real, programa revisiones, aprende sobre mecánica y únete a nuestra red de expertos.
                    </p>

                    <div className="intro-actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('/login')}
                        >
                            Iniciar sesión
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate('/registro')}
                        >
                            Crear cuenta
                        </button>
                    </div>
                </div>
            </section>

            {/* Sección visual con la Moto y el Carro */}
            <section className="intro-visual">
                <div className="vehicles-showcase">
                    <img 
                        src={imagenMoto} 
                        alt="Motocicleta moderna" 
                        className="vehicle-image moto-float" 
                    />
                    <img 
                        src={imagenCarro} 
                        alt="Automóvil gris" 
                        className="vehicle-image carro-float" 
                    />
                </div>
            </section>
        </main>
    );
}

export default Introduccion;
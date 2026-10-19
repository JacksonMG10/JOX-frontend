import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Principal.css';
import imagenCarro from '../assets/carro.png'; 
import imagenMoto from '../assets/moto.png';
import logo from '../assets/Logo.png';

function Introduccion() {
    const navigate = useNavigate();

    return (
        <div className="landing-wrapper">
            {/* BARRA DE NAVEGACIÓN FIJA */}
            <nav className="navbar-fixed">
                <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="JOX Logo" className="nav-logo-icon" />
                    <span className="nav-logo-text">JOX</span>
                </div>
                
                <div className="nav-links">
                    <a href="#caracteristicas">Características</a>
                    <a href="#ia-section">Asistente AISHA</a>
                    <a href="#talleres">Para Talleres</a>
                    <a href="#testimonios">Comunidad</a>
                </div>

                <div className="nav-actions">
                    <button className="btn btn-outline" onClick={() => navigate('/login')}>
                        Iniciar sesión
                    </button>
                    <button className="btn btn-primary" onClick={() => navigate('/registro')}>
                        Crear cuenta
                    </button>
                </div>
            </nav>

            {/* SECCIÓN HERO (PORTADA PRINCIPAL) */}
            <header className="hero-section">
                <div className="hero-container">
                    <div className="hero-text">
                        <div className="badge-pill">
                            ✨ Revolucionando el mantenimiento vehicular
                        </div>
                        <h1 className="hero-title">
                            Gestión Inteligente y Preventiva para tu <br />
                            <span className="text-gradient">Vehículo y Taller</span>
                        </h1>

                        <p className="hero-description">
                            Evita varadas, controla tus gastos, predice cambios de aceite y conecta directamente con talleres certificados y la comunidad automotriz más activa.
                        </p>

                        <div className="hero-actions">
                            <button className="btn btn-primary btn-lg" onClick={() => navigate('/registro')}>
                                Registrar mi Vehículo Gratis ➔
                            </button>
                            <button className="btn btn-secondary btn-lg" onClick={() => navigate('/login')}>
                                Acceso Talleres
                            </button>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number"></span>
                                <span className="stat-label"></span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">99.8%</span>
                                <span className="stat-label">Alertas a tiempo</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Asistencia SOS y IA</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="glow-effect"></div>
                        <div className="vehicles-showcase">
                            <img 
                                src={imagenMoto} 
                                alt="Motocicleta moderna" 
                                className="vehicle-image moto-float" 
                            />
                            <img 
                                src={imagenCarro} 
                                alt="Automóvil deportivo" 
                                className="vehicle-image carro-float" 
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* SECCIÓN 1: CARACTERÍSTICAS Y MÓDULOS */}
            <section id="caracteristicas" className="features-section">
                <div className="section-header text-center">
                    <span className="section-subtitle">TODO EN UN SOLO LUGAR</span>
                    <h2 className="section-title">Herramientas diseñadas para conductores exigentes</h2>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚙️</div>
                        <h3>Mantenimiento por Kilometraje</h3>
                        <p>Calcula y predice exactamente cuándo cambiar aceite, pastillas de freno, correa de distribución o bujías de acuerdo al tipo de vehículo y lubricante.</p>
                    </div>

                    <div className="feature-card highlighted">
                        <div className="feature-icon">📄</div>
                        <h3>Control de Documentos</h3>
                        <p>Notificaciones inteligentes antes del vencimiento de tu SOAT y Tecnomecánica para evitar multas de tránsito.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Soporte Eléctrico & Térmico</h3>
                        <p>Lógica ajustada tanto para carros y motos a gasolina, como para vehículos eléctricos (salud de batería SOH, líquido dieléctrico y regenerativos).</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🚨</div>
                        <h3>Asistencia Rápida SOS</h3>
                        <p>Botón de emergencia directo para solicitar grúa, auxilio mecánico o asistencia médica en carretera al instante.</p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 2: DESTACADO DE LA IA (AISHA) */}
            <section id="ia-section" className="ai-showcase-section">
                <div className="ai-container">
                    <div className="ai-content">
                        <span className="badge-gold">INTELIGENCIA ARTIFICIAL DE JOX</span>
                        <h2>Conoce a AISHA, tu copiloto mecánico virtual 🤖</h2>
                        <p>
                            ¿Tienes un ruido extraño en el motor o dudas sobre cuál aceite usar? AISHA diagnostica síntomas, interpreta kilometrajes y te aconseja en tiempo real.
                        </p>
                        <ul className="ai-list">
                            <li>✓ Diagnóstico preventivo según fallas comunes de tu modelo.</li>
                            <li>✓ Recomendaciones exactas de lubricantes y repuestos.</li>
                            <li>✓ Historial conversacional guardado para tu garaje.</li>
                        </ul>
                    </div>

                    <div className="ai-mockup">
                        <div className="chat-window-demo">
                            <div className="chat-header-demo">
                                <span className="status-dot"></span>
                                <span>AISHA - Asistente Virtual JOX</span>
                            </div>
                            <div className="chat-body-demo">
                                <div className="chat-msg user-msg">Mi carro tiene 45,000 KM. ¿Qué mantenimiento le toca?</div>
                                <div className="chat-msg ai-msg">
                                    ✨ De acuerdo a tu kilometraje y si usas aceite sintético, debes realizar cambio de aceite, rotación de llantas y revisión de fluido de frenos.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: PARA TALLERES MECÁNICOS */}
            <section id="talleres" className="workshop-section">
                <div className="workshop-container">
                    <div className="workshop-text">
                        <span className="section-subtitle">¿TIENES UN TALLER O SERVICIO MECÁNICO?</span>
                        <h2>Digitaliza tu taller con la plataforma JOX Taller 🛠️</h2>
                        <p>
                            Gestiona órdenes de trabajo, controla inventario de repuestos, emite cotizaciones a tus clientes y lleva el registro financiero de tu negocio en una sola pantalla.
                        </p>
                        <button className="btn btn-gold btn-lg" onClick={() => navigate('/registro')}>
                            Registrar mi Taller
                        </button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: TESTIMONIOS Y COMUNIDAD */}
            <section id="testimonios" className="testimonials-section">
                <div className="section-header text-center">
                    <span className="section-subtitle">COMUNIDAD AUTOMOTRIZ</span>
                    <h2 className="section-title">Lo que dicen los miembros de JOX</h2>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>"Gracias al control por kilometraje de JOX nunca más se me pasó el cambio de aceite de mi Duster. Todo súper claro."</p>
                        <div className="user-info">
                            <div className="avatar">C</div>
                            <div>
                                <h4>Carlos Mendoza</h4>
                                <span>Conductor de Bogotá</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p>"AISHA me ayudó a identificar un sonido en los frenos de mi moto antes de hacer un viaje largo. Una herramienta imprescindible."</p>
                        <div className="user-info">
                            <div className="avatar">M</div>
                            <div>
                                <h4>Mariana Gómez</h4>
                                <span>Motera activa</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p>"Organizar las órdenes de trabajo de mi taller ahora toma minutos. Mis clientes reciben sus reportes directo en su cuenta."</p>
                        <div className="user-info">
                            <div className="avatar">T</div>
                            <div>
                                <h4>Taller AutoServicio Pro</h4>
                                <span>Aliado Comercial JOX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BANNER CTA FINAL */}
            <section className="cta-banner">
                <div className="cta-content text-center">
                    <h2>¿Listo para llevar el control total de tu vehículo?</h2>
                    <p>Únete hoy gratis a la plataforma de gestión vehicular más inteligente de Colombia.</p>
                    <button className="btn btn-primary btn-lg mt-3" onClick={() => navigate('/registro')}>
                        Comenzar Ahora Gratis
                    </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer-landing">
                <div className="footer-container">
                    <div className="footer-brand">
                        <img src={logo} alt="JOX Logo" className="footer-logo" />
                        <span className="footer-title">JOX</span>
                        <p>© 2026 JOX - Gestión Inteligente de Mantenimiento. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Introduccion;
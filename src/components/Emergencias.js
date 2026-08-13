import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Heredamos los estilos de tu plataforma

const Emergencias = () => {
    const navigate = useNavigate();

    return (
        <div className="dash-layout fade-in p-4 p-md-5">
            
            {/* Botón para volver */}
            <button 
                className="btn btn-outline-light mb-4" 
                onClick={() => navigate(-1)}
            >
                ❮ Volver al Dashboard
            </button>

            <div className="dash-card border border-danger">
                {/* 🚨 EMERGENCIA INMEDIATA */}
                <div className="text-center mb-5 pb-3 border-bottom border-danger">
                    <h1 className="text-danger fw-bold tracking-wide">🚨 EMERGENCIA INMEDIATA</h1>
                    <h2 className="text-white fw-bold mt-3">123 — LÍNEA ÚNICA DE EMERGENCIAS</h2>
                    <p className="text-light-gray fs-5 mb-2">Policía · Bomberos · Ambulancia · Emergencias</p>
                    <span className="badge bg-danger p-2 fs-6">🇨🇴 Disponible para cualquier tipo de emergencia en todo el territorio de Colombia.</span>
                </div>

                <div className="row g-4">
                    {/* 🚑 SALUD Y RESCATE */}
                    <div className="col-md-4">
                        <h4 className="text-white fw-bold mb-3 border-bottom pb-2">🚑 SALUD Y RESCATE</h4>
                        <ul className="list-unstyled text-light-gray">
                            <li className="mb-3">
                                <strong className="text-gold fs-5">125 — Ambulancia</strong><br/>
                                Atención de emergencias médicas y solicitud de traslados.
                            </li>
                            <li className="mb-3">
                                <strong className="text-gold fs-5">119 — Bomberos</strong><br/>
                                Control de incendios, rescates y atención de emergencias.
                            </li>
                            <li className="mb-3">
                                <strong className="text-gold fs-5">132 — Cruz Roja</strong><br/>
                                Asistencia en primeros auxilios y emergencias médicas.
                            </li>
                            <li className="mb-3">
                                <strong className="text-gold fs-5">144 — Defensa Civil</strong><br/>
                                Atención de desastres, rescates y emergencias humanitarias.
                            </li>
                        </ul>
                    </div>

                    {/* 🚓 SEGURIDAD */}
                    <div className="col-md-4">
                        <h4 className="text-white fw-bold mb-3 border-bottom pb-2">🚓 SEGURIDAD</h4>
                        <ul className="list-unstyled text-light-gray">
                            <li className="mb-3">
                                <strong className="text-gold fs-5">112 — Policía Nacional</strong><br/>
                                Reporte de delitos y situaciones que alteren la seguridad pública.
                            </li>
                            <li className="mb-3">
                                <strong className="text-gold fs-5">165 — GAULA</strong><br/>
                                Denuncias sobre casos de secuestro y extorsión.
                            </li>
                            <li className="mb-3">
                                <strong className="text-gold fs-5">767 — Seguridad Vial</strong><br/>
                                Reporte de accidentes, estado de vías y situaciones de seguridad en carretera.
                            </li>
                        </ul>
                    </div>

                    {/* 🛡️ PROTECCIÓN Y DENUNCIAS */}
                    <div className="col-md-4">
                        <h4 className="text-white fw-bold mb-3 border-bottom pb-2">🛡️ PROTECCIÓN</h4>
                        <ul className="list-unstyled text-light-gray">
                            <li className="mb-3">
                                <strong className="text-gold fs-5">141 — ICBF</strong><br/>
                                Protección y restablecimiento de derechos de niños, niñas y adolescentes. (Línea nacional 24 horas).
                            </li>
                            <li className="mb-3">
                                <strong className="text-gold fs-5">155 — Línea Púrpura</strong><br/>
                                Orientación y atención frente a casos de violencia contra las mujeres.
                            </li>
                            <li className="mb-3">
                                <strong className="text-gold fs-5">122 — Fiscalía General</strong><br/>
                                Recepción de denuncias y orientación general sobre delitos. (Disponible 24 horas desde celular).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergencias;
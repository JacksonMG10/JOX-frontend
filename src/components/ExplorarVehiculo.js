import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { baseDatosVehiculos } from '../data/vehiculos';

const ExplorarVehiculo = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // 1. Obtener vehículo desde la base de datos
    let vehiculoActivo = baseDatosVehiculos[id];

    if (!vehiculoActivo) {
        vehiculoActivo = {
            marca: 'Vehículo No Encontrado', 
            modelo: 'Comprueba el ID', 
            tipo: 'Moto',
            imagen: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop', 
            descripcion: 'El vehículo seleccionado no se encuentra registrado.',
            aniosDisponibles: [2024] // Año por defecto en caso de error
        };
    }

    // 2. Extraer los años exclusivos de este vehículo
    const anosDisponibles = vehiculoActivo.aniosDisponibles || [new Date().getFullYear()];

    // --- ESTADOS DEL SISTEMA ---
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [subCategoriaSeleccionada, setSubCategoriaSeleccionada] = useState(null);
    const [sintomaSeleccionado, setSintomaSeleccionado] = useState(null);
    
    // Iniciar el estado con el primer año disponible del vehículo activo
    const [anioSeleccionado, setAnioSeleccionado] = useState(anosDisponibles[0]);

    // 3. Obtener diagnóstico basado en el año
    const infoDiagnostico = vehiculoActivo.obtenerDiagnosticoPorAnio
        ? vehiculoActivo.obtenerDiagnosticoPorAnio(anioSeleccionado)
        : { tecnologia: 'Estándar', arbolProblemas: vehiculoActivo.arbolProblemas || {} };

    const arbolProblemas = infoDiagnostico.arbolProblemas || {};

    const reiniciarDiagnostico = () => {
        setCategoriaSeleccionada(null);
        setSubCategoriaSeleccionada(null);
        setSintomaSeleccionado(null);
    };

    const volverAtras = () => {
        if (sintomaSeleccionado) setSintomaSeleccionado(null);
        else if (subCategoriaSeleccionada) setSubCategoriaSeleccionada(null);
        else setCategoriaSeleccionada(null);
    };

    // Efecto cuando se cambia de vehículo (URL)
    useEffect(() => {
        if (vehiculoActivo.aniosDisponibles) {
            setAnioSeleccionado(vehiculoActivo.aniosDisponibles[0]);
        }
        reiniciarDiagnostico();
    }, [id]);

    // Efecto cuando se cambia el año en el selector
    useEffect(() => {
        reiniciarDiagnostico();
    }, [anioSeleccionado]);

    return (
        <div className="dash-layout fade-in" style={{ paddingBottom: '50px' }}>
            <nav className="dash-nav d-flex align-items-center mb-4">
                <button onClick={() => navigate(-1)} className="btn btn-outline-light me-3">❮ Volver al Garaje</button>
                <h4 className="text-gold fw-bold mb-0">Sistema de Diagnóstico Dinámico por Año</h4>
            </nav>

            <div className="dash-content">
                <div className="row g-4">
                    {/* PANEL IZQUIERDO */}
                    <div className="col-lg-4">
                        <div className="dash-card h-100 p-4" style={{ background: '#111', borderRadius: '15px', border: '1px solid #333' }}>
                            <div style={{ borderRadius: '10px', padding: '10px', marginBottom: '15px' }}>
                                <img 
                                    src={vehiculoActivo.imagen} 
                                    alt={`${vehiculoActivo.marca} ${vehiculoActivo.modelo}`} 
                                    style={{ width: '100%', height: '220px', objectFit: 'contain' }} 
                                />
                            </div>
                            
                            <div>
                                <span className="badge bg-secondary mb-2 px-3 py-2 fs-6">
                                    Tipo: {vehiculoActivo.tipo} {vehiculoActivo.tipo === 'Moto' ? '🏍️' : '🚗'}
                                </span>
                                <h2 className="text-gold fw-bold mb-0">{vehiculoActivo.marca}</h2>
                                <h3 className="text-white mb-3">{vehiculoActivo.modelo}</h3>
                                <p className="text-light-gray">{vehiculoActivo.descripcion}</p>
                                
                                <div className="mt-4 p-3 bg-dark rounded border border-warning">
                                    <label className="form-label text-gold fw-bold mb-2">📅 Selecciona el Año de la Moto</label>
                                    <select 
                                        className="form-select bg-black text-white border-secondary"
                                        value={anioSeleccionado}
                                        onChange={(e) => setAnioSeleccionado(parseInt(e.target.value))}
                                    >
                                        {anosDisponibles.map(anio => (
                                            <option key={anio} value={anio}>{anio}</option>
                                        ))}
                                    </select>
                                    <small className="text-info mt-2 d-block">
                                        ℹ️ Cambiar el año actualizará las fallas y componentes.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PANEL DERECHO */}
                    <div className="col-lg-8">
                        <div className="dash-card h-100 p-4 position-relative" style={{ background: '#1c1c1c', borderRadius: '15px', border: '1px solid #333' }}>
                            
                            <div className="badge bg-dark text-gold border border-warning p-2 mb-3 d-inline-block">
                                ⚙️ {infoDiagnostico.tecnologia}
                            </div>

                            {categoriaSeleccionada && (
                                <div className="d-flex justify-content-between align-items-center mb-4 bg-black p-2 rounded border border-secondary">
                                    <button onClick={volverAtras} className="btn btn-sm btn-outline-light">❮ Atrás</button>
                                    <span className="text-gold small fw-bold">
                                        {arbolProblemas[categoriaSeleccionada]?.titulo} 
                                        {subCategoriaSeleccionada && ` ➔ ${subCategoriaSeleccionada.nombre}`}
                                    </span>
                                    <button onClick={reiniciarDiagnostico} className="btn btn-sm btn-outline-danger">🔄 Reiniciar</button>
                                </div>
                            )}

                            {/* PASO 1: CATEGORÍAS */}
                            {!categoriaSeleccionada && (
                                <div className="fade-in">
                                    <h4 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">
                                        1. Diagnóstico para {vehiculoActivo.marca} {vehiculoActivo.modelo} ({anioSeleccionado}):
                                    </h4>
                                    <div className="d-flex gap-3 flex-wrap">
                                        {Object.keys(arbolProblemas).length > 0 ? (
                                            Object.keys(arbolProblemas).map((key) => (
                                                <button
                                                    key={key}
                                                    onClick={() => setCategoriaSeleccionada(key)}
                                                    className="btn flex-grow-1 p-4 btn-outline-secondary text-white interact-card text-center"
                                                    style={{ borderRadius: '15px', border: '1px solid #444', backgroundColor: '#222' }}
                                                >
                                                    <span className="fs-1 d-block mb-2">{arbolProblemas[key].icono}</span>
                                                    <h5 className="fw-bold mb-0">{arbolProblemas[key].titulo}</h5>
                                                </button>
                                            ))
                                        ) : (
                                            <p className="text-muted">No hay diagnósticos cargados para el año {anioSeleccionado}.</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* PASO 2: SUBCATEGORÍAS */}
                            {categoriaSeleccionada && !subCategoriaSeleccionada && (
                                <div className="fade-in">
                                    <h4 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">2. Selecciona el área afectada:</h4>
                                    <div className="row g-3">
                                        {arbolProblemas[categoriaSeleccionada]?.subcategorias?.map((subcat, index) => (
                                            <div className="col-md-6" key={index}>
                                                <button 
                                                    onClick={() => setSubCategoriaSeleccionada(subcat)}
                                                    className="btn btn-dark w-100 text-start p-3 border-secondary h-100 shadow-sm d-flex align-items-center justify-content-between"
                                                >
                                                    <span className="text-light fw-bold">{subcat.nombre}</span>
                                                    <span className="text-gold fs-5">❯</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* PASO 3: SÍNTOMA */}
                            {subCategoriaSeleccionada && !sintomaSeleccionado && (
                                <div className="fade-in">
                                    <h4 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">3. Selecciona el síntoma exacto:</h4>
                                    <div className="d-flex flex-column gap-2">
                                        {subCategoriaSeleccionada.sintomas?.map((sintomaObj, index) => (
                                            <button 
                                                key={index}
                                                onClick={() => setSintomaSeleccionado(sintomaObj)}
                                                className="btn text-start text-light p-3 border-secondary fw-bold"
                                                style={{ borderRadius: '8px', background: 'rgba(212, 175, 55, 0.05)', borderLeft: '4px solid #D4AF37' }}
                                            >
                                                <span className="text-gold me-2">➔</span> {sintomaObj.titulo}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* PASO 4: SOLUCIÓN */}
                            {sintomaSeleccionado && (
                                <div className="fade-in">
                                    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-warning pb-3">
                                        <h3 className="text-gold fw-bold mb-0">🛠️ Solución Específica ({anioSeleccionado})</h3>
                                        <span className="badge bg-black border border-secondary fs-6 py-2 px-3">
                                            Dificultad: {sintomaSeleccionado.dificultad}
                                        </span>
                                    </div>

                                    <div className="mb-4 bg-black p-3 rounded border border-secondary">
                                        <h6 className="text-white fw-bold mb-2">🔹 Descripción del Problema</h6>
                                        <p className="text-light-gray mb-0">{sintomaSeleccionado.descripcion}</p>
                                    </div>

                                    {sintomaSeleccionado.notaEspecial && (
                                        <div className="mb-4 alert alert-info bg-dark text-info border-info">
                                            <h6 className="fw-bold mb-1">💡 Especificación Técnica:</h6>
                                            <p className="mb-0 small">{sintomaSeleccionado.notaEspecial}</p>
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <h6 className="text-white fw-bold mb-2">🔧 Herramientas Recomendadas:</h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {sintomaSeleccionado.herramientas?.map((h, i) => (
                                                <span key={i} className="badge bg-secondary text-light p-2">{h}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h6 className="text-white fw-bold mb-3">📋 Procedimiento Paso a Paso:</h6>
                                        {sintomaSeleccionado.pasos?.map((paso, i) => (
                                            <div key={i} className="d-flex mb-2 p-2 rounded" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                <p className="text-light-gray mb-0">{paso}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorarVehiculo;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../RegistroVehiculos.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jox-f0u1.onrender.com';
const RegistroVehiculos = () => {
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

    const [vehiculo, setVehiculo] = useState({
        tipo: 'Automóvil',
        placa: '',
        alias: '',
        marca: '',
        modelo: '',
        anio: '',
        color: '',
        fecha_compra: '',
        kilometraje: '',
        tipo_combustible: 'Gasolina Corriente',
        transmision: 'Manual',
        cilindraje: '',
        vin: '',
        vencimiento_soat: '',              
        vencimiento_tecnomecanica: ''     
    });

    const formatPlaca = (value) => {
        let limpia = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        if (limpia.length > 3) {
            limpia = limpia.substring(0, 3) + '-' + limpia.substring(3, 6);
        }
        return limpia;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'placa') {
            // La placa tiene su propio formato
            setVehiculo({ ...vehiculo, placa: formatPlaca(value) });
        } else if (name === 'tipo_combustible' || name === 'transmision') {
            // Los selectores (Combustible y Transmisión) NO los pasamos a mayúsculas
            setVehiculo({ ...vehiculo, [name]: value });
        } else {
            // Todo lo demás (marca, modelo, color, etc.) sí va en mayúsculas
            setVehiculo({
                ...vehiculo,
                [name]: typeof value === 'string' ? value.toUpperCase() : value
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setCargando(true);
        setMensaje({ texto: '', tipo: '' });

        const token = localStorage.getItem('token');
        
        try {
            await axios.post(`${API_BASE_URL}/api/vehiculos/registrar`, vehiculo, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            setMensaje({ texto: '¡Vehículo registrado con éxito! Llevándote a tu garaje...', tipo: 'success' });
            
            setTimeout(() => {
                navigate('/mis-vehiculos');
            }, 2000);

        } catch (error) {
            setMensaje({ 
                texto: error.response?.data?.mensaje || 'Error al registrar el vehículo.', 
                tipo: 'danger' 
            });
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="reg-vehiculo-layout fade-in">
            <nav className="reg-nav">
                <button onClick={() => navigate('/dashboard')} className="btn-volver">
                    ⬅ Volver al Dashboard
                </button>
                <h4 className="text-gold fw-bold mb-0 d-none d-md-block">JOX GARAGE</h4>
            </nav>

            <div className="container d-flex justify-content-center align-items-center py-5">
                <div className="reg-card">
                    <div className="text-center mb-4">
                        <span className="reg-icon">{vehiculo.tipo === 'Motocicleta' ? '🏍️' : '🚘'}</span>
                        <h2 className="fw-bold text-white">Registrar Nuevo Vehículo</h2>
                        <p className="text-light-gray">Ingresa los datos técnicos y legales</p>
                    </div>

                    {mensaje.texto && (
                        <div className={`alert alert-${mensaje.tipo} fade show`}>
                            {mensaje.texto}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="row g-3">
                        
                        <div className="col-12 mb-3">
                            <label className="form-label text-gold fw-bold d-block text-center">¿Qué tipo de vehículo vas a registrar?</label>
                            <div className="d-flex justify-content-center gap-3">
                                <button type="button" className={`btn ${vehiculo.tipo === 'Automóvil' ? 'btn-warning' : 'btn-outline-secondary'} px-4 py-2 fw-bold`} onClick={() => setVehiculo({...vehiculo, tipo: 'Automóvil'})}>
                                    🚗 Automóvil
                                </button>
                                <button type="button" className={`btn ${vehiculo.tipo === 'Motocicleta' ? 'btn-warning' : 'btn-outline-secondary'} px-4 py-2 fw-bold`} onClick={() => setVehiculo({...vehiculo, tipo: 'Motocicleta'})}>
                                    🏍️ Motocicleta
                                </button>
                            </div>
                        </div>

                        {/* SECCIÓN 1 */}
                        <div className="col-12 mt-4 mb-2">
                            <h5 className="text-gold border-bottom border-secondary pb-2">1. Identificación Principal</h5>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-light">Placa / Matrícula *</label>
                            <input type="text" name="placa" className="reg-input placa-input text-center fs-5 fw-bold" placeholder={vehiculo.tipo === 'Motocicleta' ? 'ABC-12D' : 'ABC-123'} required value={vehiculo.placa} onChange={handleChange} maxLength="7" />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-light">Alias o Apodo (Opcional)</label>
                            <input type="text" name="alias" className="reg-input" placeholder="Ej: La consentida" value={vehiculo.alias} onChange={handleChange} />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label text-light">Marca *</label>
                            <input list="marcas" name="marca" className="reg-input" placeholder="Ej: Yamaha" required value={vehiculo.marca} onChange={handleChange} />
                            <datalist id="marcas">
                                <option value="TOYOTA" /><option value="CHEVROLET" /><option value="YAMAHA" /><option value="SUZUKI" />
                            </datalist>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label text-light">Modelo *</label>
                            <input type="text" name="modelo" className="reg-input" placeholder="Ej: MT-09" required value={vehiculo.modelo} onChange={handleChange} />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label text-light">Año *</label>
                            <input type="number" name="anio" className="reg-input" placeholder="2024" min="1950" required value={vehiculo.anio} onChange={handleChange} />
                        </div>

                        {/* SECCIÓN 2 */}
                        <div className="col-12 mt-4 mb-2">
                            <h5 className="text-gold border-bottom border-secondary pb-2">2. Detalles Técnicos</h5>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label text-light">Color</label>
                            <input type="text" name="color" className="reg-input" required value={vehiculo.color} onChange={handleChange} />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label text-light">Kilometraje (Km) *</label>
                            <input type="number" name="kilometraje" className="reg-input" required value={vehiculo.kilometraje} onChange={handleChange} />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label text-light">Cilindraje (cc)</label>
                            <input type="number" name="cilindraje" className="reg-input" value={vehiculo.cilindraje} onChange={handleChange} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-light">Transmisión</label>
                            <select name="transmision" className="reg-input" value={vehiculo.transmision} onChange={handleChange}>
                                <option value="Manual">Manual</option>
                                <option value="Automática">Automática</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-light">Combustible</label>
                            <select name="tipo_combustible" className="reg-input" value={vehiculo.tipo_combustible} onChange={handleChange}>
                                <option value="Gasolina Corriente">Gasolina Corriente</option>
                                <option value="Gasolina Extra">Gasolina Extra</option>
                                <option value="Gas GNV">Gas GNV</option>
                                <option value="Gas GLP">Gas GLP</option>
                                <option value="Diesel/ACPM">Diesel/ACPM</option>
                                <option value="Eléctrico">Eléctrico</option>
                                <option value="Híbrido">Híbrido</option>

                            </select>
                        </div>

                        {/* SECCIÓN 3: DOCUMENTOS LEGALES */}
                        <div className="col-12 mt-4 mb-2">
                            <h5 className="text-gold border-bottom border-secondary pb-2">3. Documentos Legales (Opcional)</h5>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-light">Vencimiento del SOAT</label>
                            <input 
                                type="date" 
                                name="vencimiento_soat" 
                                className="reg-input" 
                                value={vehiculo.vencimiento_soat} 
                                onChange={handleChange} 
                                style={{ colorScheme: 'dark' }} // Hace que el calendario se vea oscuro
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-light">Vencimiento Tecnomecánica</label>
                            <input 
                                type="date" 
                                name="vencimiento_tecnomecanica" 
                                className="reg-input" 
                                value={vehiculo.vencimiento_tecnomecanica} 
                                onChange={handleChange} 
                                style={{ colorScheme: 'dark' }} 
                            />
                        </div>
                            <div className="col-md-6">
                        <label className="form-label text-light">Fecha de Compra</label>
                        <input 
                            type="date" 
                            name="fecha_compra" 
                            className="reg-input" 
                            value={vehiculo.fecha_compra} 
                            onChange={handleChange} 
                            style={{ colorScheme: 'dark' }} 
                        />
                    </div>
                        {/* BOTÓN DE ENVÍO */}
                        <div className="col-12 mt-5">
                            <button type="submit" className="btn-reg-submit" disabled={cargando}>
                                {cargando ? 'Guardando Vehículo...' : 'Finalizar Registro'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistroVehiculos;
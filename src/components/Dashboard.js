import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './Dashboard.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jox-f0u1.onrender.com';
const Dashboard = () => {
    const [usuario, setUsuario] = useState(null);
    const [busqueda, setBusqueda] = useState('');
    
    const [imagenAmpliada, setImagenAmpliada] = useState(null);
    const [listaVehiculos, setListaVehiculos] = useState([]);
    const [indiceVehiculo, setIndiceVehiculo] = useState(0);

    const [listaSoat, setListaSoat] = useState([]);
    const [indiceSoat, setIndiceSoat] = useState(0);
    const [listaTecno, setListaTecno] = useState([]);
    const [indiceTecno, setIndiceTecno] = useState(0);
    
    const [metricas, setMetricas] = useState({
        vehiculosRegistrados: 0,
        proximoMantenimiento: null,
        gastosAno: 0
    });

    const [metricasTaller, setMetricasTaller] = useState({
        ingresosMes: 0,
        vehiculosEnTaller: 0,
        ordenesListas: 0,
        cotizacionesPendientes: 0
    });

    const [historialChat, setHistorialChat] = useState([
        { role: 'ai', text: '¡Hola! Soy tu asistente AISHA. Estoy temporalmente fuera de servicio por temas de mantenimiento' }
    ]);
    const [inputChat, setInputChat] = useState('');
    const [escribiendoAI, setEscribiendoAI] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [historialChat, escribiendoAI]);

    const reiniciarChatPorVehiculo = (vehiculo) => {
        setHistorialChat([
            { role: 'ai', text: `¡Hola! Soy tu asistente IA. ¿Qué dudas tienes sobre el estado de tu ${vehiculo?.marca || 'vehículo'}?` }
        ]);
    };
    
    const enviarMensajeIA = async (e) => {
        e.preventDefault();
        if (!inputChat.trim() || escribiendoAI) return;

        const mensajeUsuario = inputChat;
        const nuevosMensajes = [...historialChat, { role: 'user', text: mensajeUsuario }];
        setHistorialChat(nuevosMensajes);
        setInputChat('');
        setEscribiendoAI(true);

        try {
            const vehiculoActual = listaVehiculos.length > 0 ? listaVehiculos[indiceVehiculo] : null;

            const response = await axios.post('API_BASE_URL/api/ia/consultar', {
                mensaje: mensajeUsuario,
                vehiculo: vehiculoActual,
                historial: historialChat
            });

            setHistorialChat([...nuevosMensajes, { role: 'ai', text: response.data.respuesta }]);
            
        } catch (error) {
            console.error("Error al consultar la IA:", error);
            setHistorialChat([...nuevosMensajes, { role: 'ai', text: "Me gustaria ayudarte pero estoy en mantenimiento" }]);
        } finally {
            setEscribiendoAI(false);
        }
    };

    const topCarros = [
        { id: 'c1', marca: 'Renault', modelo: 'Duster', imagen: 'https://cdn-strapi.patiotuerca.com/cdn-cgi/image/trim=0;0;0;720/1440x500_duster_Ikonic_2d8f4d89a8.png' },
        { id: 'c2', marca: 'Chevrolet', modelo: 'Onix', imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2025/08/20250812-CHEVROLET-ONIX-2026-VERSIONES-PRECIO-PORTADA.jpg' },
        { id: 'c3', marca: 'Mazda', modelo: 'CX-30', imagen: 'https://es.mazda-press.com/globalassets/generic-cms-images/02-heroes/2025/2025-mazda-cx-30/hero-2025-mazda-cx-30-02-mob.jpg/highdefinitionhalfsize?token=vULvPL3Kp38VAOmPrbF_sLBH7xnV2Mk9mHK3AC6_t_M1' },
        { id: 'c4', marca: 'Suzuki', modelo: 'Swift', imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_c9912243e7b44043a063235a8eb5d04d.jpg' },
        { id: 'c5', marca: 'Kia', modelo: 'Picanto', imagen: 'https://www.c3carecarcenter.com/wp-content/uploads/2025/05/Descubre-las-caracteristicas-destacadas-del-Kia-Picanto-2016.webp' },
        { id: 'c6', marca: 'Toyota', modelo: 'Corolla', imagen: 'https://yokomotor.com.co/toyota/wp-content/uploads/sites/2/2024/03/yokomotor-toyota-corolla-hev-seg-Super-White.webp' },
        { id: 'c7', marca: 'Mazda', modelo: '2', imagen: 'https://drive.place/images/mazda/mazda_2_ii-res_hatchback_5d_1.jpg' },
        { id: 'c8', marca: 'Chevrolet', modelo: 'Joy', imagen: 'https://leasyauto.com/static/uploads/323dd3b3-4ab3-4560-8cfe-d5a9657e9cea.jpeg' },
        { id: 'c9', marca: 'Renault', modelo: 'Stepway', imagen: 'https://cdn.group.renault.com/ren/co/vehicles/stepway/home/stepway-paisaje2.jpg.ximg.xsmall.jpg/cf3457a613.jpg' },
        { id: 'c10', marca: 'Nissan', modelo: 'Frontier', imagen: 'https://www.nissan-cdn.net/content/dam/Nissan/co/prensa/2023/nissan-frotnier-2024-una-camioneta-pick-up-con-mucho-estilo/nissan-frotnier-2024-una-camioneta-pick-up-con-mucho-estilo-desktop.webp.ximg.l_12_m.smart.webp' },
    ];

    const topMotos = [
        { id: 'm1', marca: 'AKT', modelo: 'NKD 125', imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_edc56762d192479abca29ee51b2087dd.jpg' },
        { id: 'm2', marca: 'Yamaha', modelo: 'NMAX 155', imagen: 'https://http2.mlstatic.com/D_805544-MCO110431987063_042026-O.jpg' },
        { id: 'm3', marca: 'Bajaj', modelo: 'CT 100', imagen: 'https://fotos.perfil.com/2026/02/02/bajaj-lanza-en-argentina-la-nueva-boxer-ct100-eficiencia-y-autonomia-record-2179443.jpg' },
        { id: 'm4', marca: 'Suzuki', modelo: 'GN 125', imagen: 'https://motoblog.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-27-at-1.47.36-PM-15-1024x682.jpeg' },
        { id: 'm5', marca: 'Honda', modelo: 'CB 125F', imagen: 'https://www.motoplanete.com/honda/galerie/Honda-CBF-125-2026/8.webp' },
        { id: 'm6', marca: 'Yamaha', modelo: 'FZ-S', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2025/01/descarga-_1_.webp' },
        { id: 'm7', marca: 'Bajaj', modelo: 'Pulsar NS 200', imagen: 'https://bajajmatriz.com/wp-content/uploads/2024/04/NS200UG-ROJA.jpg' },
        { id: 'm8', marca: 'TVS', modelo: 'Raider 125', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2024/03/tvs-raider-125-01.webp' },
        { id: 'm9', marca: 'Yamaha', modelo: 'XTZ 150', imagen: 'https://www.galgo.com/wp-content/uploads/2023/01/YAMAHA-XTZ-150_-La-multiproposito-mas-buscada.webp' },
        { id: 'm10', marca: 'Honda', modelo: 'XR 150L', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2024/03/Honda-XR-150L-2025-01.webp' },
    ];
    
    const navigate = useNavigate();

    const termino = busqueda.toLowerCase();

    const vehiculosValidos = Array.isArray(listaVehiculos) ? listaVehiculos : [];
    const vehiculosFiltrados = listaVehiculos.filter(v => 
        (v.placa && v.placa.toLowerCase().includes(termino)) ||
        (v.marca && v.marca.toLowerCase().includes(termino)) ||
        (v.modelo && v.modelo.toLowerCase().includes(termino)) ||
        (v.alias && v.alias.toLowerCase().includes(termino))
    );

    const soatValido = Array.isArray(listaSoat) ? listaSoat : [];
    const soatFiltrado = listaSoat.filter(v => 
        (v.placa && v.placa.toLowerCase().includes(termino)) ||
        (v.marca && v.marca.toLowerCase().includes(termino)) ||
        (v.modelo && v.modelo.toLowerCase().includes(termino)) ||
        (v.alias && v.alias.toLowerCase().includes(termino))
    );

    const tecnoValida = Array.isArray(listaTecno) ? listaTecno : [];
    const tecnoFiltrado = listaTecno.filter(v => 
        (v.placa && v.placa.toLowerCase().includes(termino)) ||
        (v.marca && v.marca.toLowerCase().includes(termino)) ||
        (v.modelo && v.modelo.toLowerCase().includes(termino)) ||
        (v.alias && v.alias.toLowerCase().includes(termino))
    );

    const topCarrosFiltrados = topCarros.filter(c => 
        c.marca.toLowerCase().includes(termino) || 
        c.modelo.toLowerCase().includes(termino)
    );
    const topMotosFiltradas = topMotos.filter(m => 
        m.marca.toLowerCase().includes(termino) || 
        m.modelo.toLowerCase().includes(termino)
    );

    const actualIndiceVehiculo = indiceVehiculo >= vehiculosFiltrados.length ? 0 : indiceVehiculo;
    const actualIndiceSoat = indiceSoat >= soatFiltrado.length ? 0 : indiceSoat;
    const actualIndiceTecno = indiceTecno >= tecnoFiltrado.length ? 0 : indiceTecno;

    const mostrarSeccionVehiculos = vehiculosFiltrados.length > 0 || busqueda === '';
    const mostrarSeccionGaraje = "garaje mi vehiculos registrar comunidad".includes(termino) || busqueda === '';
    
    const coincidePalabraClaveTop = "top colombia carros automóviles motos motocicletas".includes(termino);
    const mostrarSeccionTop = coincidePalabraClaveTop || topCarrosFiltrados.length > 0 || topMotosFiltradas.length > 0 || busqueda === '';
    
    const mostrarSeccionTaller = "taller operaciones nueva orden clientes inventario".includes(termino) || busqueda === '';

    const sinResultadosComun = !mostrarSeccionVehiculos && !mostrarSeccionGaraje && !mostrarSeccionTop && busqueda !== '';
    const sinResultadosTaller = !mostrarSeccionTaller && busqueda !== '';

    const carrosRender = (coincidePalabraClaveTop || busqueda === '') ? topCarros : topCarrosFiltrados;
    const motosRender = (coincidePalabraClaveTop || busqueda === '') ? topMotos : topMotosFiltradas;

    const prevVehiculo = () => {
        setIndiceVehiculo((prev) => {
            const newIndex = prev === 0 ? vehiculosFiltrados.length - 1 : prev - 1;
            reiniciarChatPorVehiculo(vehiculosFiltrados[newIndex]);
            return newIndex;
        });
    };
    const nextVehiculo = () => {
        setIndiceVehiculo((prev) => {
            const newIndex = prev === vehiculosFiltrados.length - 1 ? 0 : prev + 1;
            reiniciarChatPorVehiculo(vehiculosFiltrados[newIndex]);
            return newIndex;
        });
    };
    const prevSoat = () => setIndiceSoat((prev) => (prev === 0 ? soatFiltrado.length - 1 : prev - 1));
    const nextSoat = () => setIndiceSoat((prev) => (prev === soatFiltrado.length - 1 ? 0 : prev + 1));
    const prevTecno = () => setIndiceTecno((prev) => (prev === 0 ? tecnoFiltrado.length - 1 : prev - 1));
    const nextTecno = () => setIndiceTecno((prev) => (prev === tecnoFiltrado.length - 1 ? 0 : prev + 1));

    useEffect(() => {
        const obtenerDatos = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
            const resUsuario = await axios.get(`${API_BASE_URL}/api/usuarios/perfil`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsuario(resUsuario.data);

            const resVehiculos = await axios.get(`${API_BASE_URL}/api/vehiculos`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Validamos que sea un arreglo antes de asignarlo
            const vehiculos = Array.isArray(resVehiculos.data) ? resVehiculos.data : [];
            setListaVehiculos(vehiculos);

                if (vehiculos.length > 0) {
                    setListaVehiculos(vehiculos);

                    const vehiculosConSoat = vehiculos.filter(v => v.vencimiento_soat != null);
                    if (vehiculosConSoat.length > 0) {
                        vehiculosConSoat.sort((a, b) => new Date(a.vencimiento_soat) - new Date(b.vencimiento_soat));
                        setListaSoat(vehiculosConSoat);
                    }

                    const vehiculosConTecno = vehiculos.filter(v => v.vencimiento_tecnomecanica != null);
                    if (vehiculosConTecno.length > 0) {
                        vehiculosConTecno.sort((a, b) => new Date(a.vencimiento_tecnomecanica) - new Date(b.vencimiento_tecnomecanica));
                        setListaTecno(vehiculosConTecno);
                    }

                    setMetricas({
                        vehiculosRegistrados: vehiculos.length,
                        proximoMantenimiento: 'Al día',
                        gastosAno: 0
                    });
                }
                
            } catch (error) {
                console.error("Error al cargar el dashboard:", error);
                localStorage.removeItem('token');
                navigate('/login');
            }
        };

        obtenerDatos();
    }, [navigate]);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (!usuario) return (
        <div className="dash-layout d-flex justify-content-center align-items-center">
            <div className="text-center fade-in">
                <div className="spinner-border text-gold mb-3 spinner-custom" role="status"></div>
                <h4 className="text-gold loading-text">CARGANDO JOX...</h4>
            </div>
        </div>
    );

    const esTaller = usuario.tipo_usuario === 'taller' || usuario.tipo_usuario === 'dueno_taller';

    let fechaSoatTexto = 'Sin registrar';
    let infoVehiculoSoat = null;
    let colorSoatTexto = '#888';

    if (soatFiltrado.length > 0) {
        const vehiculoActual = soatFiltrado[actualIndiceSoat];
        const fecha = new Date(vehiculoActual.vencimiento_soat);
        fechaSoatTexto = fecha.toLocaleDateString('es-CO', { timeZone: 'UTC' });
        infoVehiculoSoat = vehiculoActual.alias ? `${vehiculoActual.alias} (${vehiculoActual.placa})` : `Placa: ${vehiculoActual.placa}`;
        colorSoatTexto = '#dc3545';
    } else if (busqueda !== '' && vehiculosFiltrados.length > 0) {
        const vehiculoActual = vehiculosFiltrados[actualIndiceVehiculo];
        infoVehiculoSoat = vehiculoActual.alias ? `${vehiculoActual.alias} (${vehiculoActual.placa})` : `Placa: ${vehiculoActual.placa}`;
    }

    let fechaTecnoTexto = 'Sin registrar';
    let infoVehiculoTecno = null;
    let colorTecnoTexto = '#888';

    if (tecnoFiltrado.length > 0) {
        const vehiculoActual = tecnoFiltrado[actualIndiceTecno];
        const fecha = new Date(vehiculoActual.vencimiento_tecnomecanica);
        fechaTecnoTexto = fecha.toLocaleDateString('es-CO', { timeZone: 'UTC' });
        infoVehiculoTecno = vehiculoActual.alias ? `${vehiculoActual.alias} (${vehiculoActual.placa})` : `Placa: ${vehiculoActual.placa}`;
        colorTecnoTexto = '#0d6efd';
    } else if (busqueda !== '' && vehiculosFiltrados.length > 0) {
        const vehiculoActual = vehiculosFiltrados[actualIndiceVehiculo];
        infoVehiculoTecno = vehiculoActual.alias ? `${vehiculoActual.alias} (${vehiculoActual.placa})` : `Placa: ${vehiculoActual.placa}`;
    }

    return (
        <div className="dash-layout fade-in">
            
            <nav className="dash-nav">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="JOX" className="dash-logo" />
                    <h4 className="text-gold fw-bold mb-0 d-none d-sm-block dash-logo-text">JOX</h4>
                </div>

                <div className="d-none d-md-flex flex-grow-1 justify-content-center px-4">
                    <div className="search-container">
                        <span className="search-icon">🔍</span>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Buscar placas, clientes o número de orden..."
                            value={busqueda}
                            onChange={(e) => {
                                setBusqueda(e.target.value);
                                setIndiceVehiculo(0);
                                setIndiceSoat(0);
                                setIndiceTecno(0);
                            }}
                        />
                    </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                    <div className="notification-bell" title="Notificaciones">
                        🔔
                        <span className="notification-badge">0</span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <div className="user-profile-mini d-none d-md-flex">
                            <div className="user-avatar">{usuario.nombre.charAt(0).toUpperCase()}</div>
                            <span className="text-light-gray mx-2">
                                Hola, <span className="text-white fw-bold">{usuario.nombre}</span>
                            </span>
                        </div>
                        <button onClick={cerrarSesion} className="btn-outline-gold btn-sm">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </nav>

            <div className="dash-content">
                
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div>
                        <h2 className="fw-bold mb-1">Bienvenido, {usuario.nombre} {usuario.apellido} 👋</h2>
                        <p className="text-light-gray m-0">Panel general de tu cuenta y herramientas</p>
                    </div>
                    <button className="btn-solid-gold d-none d-md-flex" onClick={() => navigate(esTaller ? '/crear-orden' : '/registrar-vehiculo')}>
                        <span>➕</span> {esTaller ? 'Nueva Orden Rápida' : 'Añadir Vehículo'}
                    </button>
                </div>

                {busqueda !== '' && ((usuario.tipo_usuario === 'comun' && sinResultadosComun) || (esTaller && sinResultadosTaller)) && (
                    <div className="text-center mt-5 mb-5 fade-in">
                        <h2 className="text-gold">❌ No hay resultados para "{busqueda}"</h2>
                        <p className="text-light">Intenta buscar otra placa, marca o sección disponible.</p>
                        <button className="btn btn-outline-warning mt-3" onClick={() => setBusqueda('')}>Limpiar búsqueda</button>
                    </div>
                )}

                {usuario.tipo_usuario === 'comun' && !sinResultadosComun && (
                    <>
                        {mostrarSeccionVehiculos && (
                            <div className="row g-3 mb-4 align-items-stretch">
                                
                                {/* 1. ASISTENTE PREVENTIVO IA */}
                                <div className="col-lg-3 col-md-6">
                                    <div className="kpi-card p-3 kpi-card-aisha">
                                        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 chat-header">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="fs-5">✨</span>
                                                <h6 className="mb-0 text-gold fw-bold chat-title">AISHA</h6>
                                            </div>
                                            {vehiculosFiltrados.length > 0 && (
                                                <div className="d-flex align-items-center bg-dark rounded-pill px-2 py-1 shadow-sm chat-vehicle-selector">
                                                    <button onClick={prevVehiculo} className="btn btn-link p-0 text-gold text-decoration-none chat-nav-btn">❮</button>
                                                    <span className="text-white mx-2 text-truncate text-center chat-nav-text">
                                                        {vehiculosFiltrados[actualIndiceVehiculo].alias || vehiculosFiltrados[actualIndiceVehiculo].placa}
                                                    </span>
                                                    <button onClick={nextVehiculo} className="btn btn-link p-0 text-gold text-decoration-none chat-nav-btn">❯</button>
                                                </div>
                                            )}
                                        </div>

                                        <div className="chat-body">
                                            {historialChat.map((msg, idx) => (
                                                <div key={idx} className={`chat-msg-container ${msg.role === 'user' ? 'user' : 'ai'}`}>
                                                    <div className={`chat-bubble ${msg.role === 'user' ? 'user' : 'ai'}`}>
                                                        {msg.text}
                                                    </div>
                                                    <div className={`chat-role ${msg.role === 'user' ? 'user' : 'ai'}`}>
                                                        {msg.role === 'user' ? 'Tú' : 'JOX'}
                                                    </div>
                                                </div>
                                            ))}
                                            {escribiendoAI && (
                                                <div className="chat-typing-container">
                                                    <div className="chat-typing-bubble">Generando respuesta...</div>
                                                </div>
                                            )}
                                            <div ref={chatEndRef} />
                                        </div>

                                        <form onSubmit={enviarMensajeIA} className="mt-3 position-relative chat-input-form">
                                            <input 
                                                type="text" className="form-control chat-input-field" placeholder="Pregunta algo aquí..." 
                                                value={inputChat} onChange={(e) => setInputChat(e.target.value)}
                                                disabled={vehiculosFiltrados.length === 0}
                                            />
                                            <button 
                                                type="submit" className="btn position-absolute chat-submit-btn" 
                                                disabled={vehiculosFiltrados.length === 0 || escribiendoAI || !inputChat.trim()}
                                            >
                                                <span className="chat-submit-arrow">➤</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                {/* 2. TARJETA SOAT */}
                                <div className="col-lg-3 col-md-6">
                                    <div className="kpi-card p-4 d-flex flex-column justify-content-between kpi-card-doc">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 className="mb-0 text-light-gray fw-bold card-doc-title">VENCIMIENTO SOAT</h6>
                                            <span className="fs-4">📄</span>
                                        </div>
                                        
                                        <div className="text-center d-flex flex-column justify-content-center flex-grow-1">
                                            <div className={`fw-bold mb-3 doc-date ${soatFiltrado.length > 0 ? 'has-data' : 'no-data'}`} style={{ color: colorSoatTexto }}>
                                                {fechaSoatTexto}
                                            </div>
                                            {infoVehiculoSoat && (
                                                <div className="badge bg-dark border border-warning text-warning p-2 mx-auto card-info-badge">
                                                    ⚠️ {infoVehiculoSoat}
                                                </div>
                                            )}
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 card-nav">
                                            <button onClick={prevSoat} className="btn btn-sm btn-outline-secondary rounded-circle card-nav-btn" disabled={soatFiltrado.length <= 1}>❮</button>
                                            <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                                                {soatFiltrado.length > 0 ? `${actualIndiceSoat + 1} de ${soatFiltrado.length}` : '0 de 0'}
                                            </span>
                                            <button onClick={nextSoat} className="btn btn-sm btn-outline-secondary rounded-circle card-nav-btn" disabled={soatFiltrado.length <= 1}>❯</button>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. TARJETA TECNO */}
                                <div className="col-lg-3 col-md-6">
                                    <div className="kpi-card p-4 d-flex flex-column justify-content-between kpi-card-doc">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 className="mb-0 text-light-gray fw-bold card-doc-title">VENCIMIENTO TECNO</h6>
                                            <span className="fs-4">🛠️</span>
                                        </div>
                                        
                                        <div className="text-center d-flex flex-column justify-content-center flex-grow-1">
                                            <div className={`fw-bold mb-3 doc-date ${tecnoFiltrado.length > 0 ? 'has-data' : 'no-data'}`} style={{ color: colorTecnoTexto }}>
                                                {fechaTecnoTexto}
                                            </div>
                                            {infoVehiculoTecno && (
                                                <div className="badge bg-dark border border-primary text-primary p-2 mx-auto card-info-badge">
                                                    ⚠️ {infoVehiculoTecno}
                                                </div>
                                            )}
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 card-nav">
                                            <button onClick={prevTecno} className="btn btn-sm btn-outline-secondary rounded-circle card-nav-btn" disabled={tecnoFiltrado.length <= 1}>❮</button>
                                            <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                                                {tecnoFiltrado.length > 0 ? `${actualIndiceTecno + 1} de ${tecnoFiltrado.length}` : '0 de 0'}
                                            </span>
                                            <button onClick={nextTecno} className="btn btn-sm btn-outline-secondary rounded-circle card-nav-btn" disabled={tecnoFiltrado.length <= 1}>❯</button>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. TARJETA SOS */}
                                <div className="col-lg-3 col-md-6">
                                    <div 
                                    className="kpi-card p-4 d-flex flex-column justify-content-center align-items-center text-center kpi-card-sos" 
                                    onClick={() => navigate('/emergencias')}
                                    style={{ cursor: 'pointer' }}
                                    >
                                        <div className="mb-4 sos-icon">🚨</div>
                                        <h4 className="text-white fw-bold tracking-wide mb-2 sos-title">EMERGENCIA</h4>
                                        <p className="text-white-50 mb-4 sos-desc">Toque aquí para asistencia inmediata</p>
                                        <div className="px-4 py-2 bg-white text-danger fw-bold rounded-pill sos-btn">
                                            Botón SOS
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {metricas.vehiculosRegistrados === 0 && (
                            <div className="alert alert-custom-warning mb-4">
                                <strong>¡Hola {usuario.nombre}!</strong> Vemos que aún no has registrado ningún vehículo. Añade tu auto o moto para empezar a llevar el control de tus mantenimientos y documentos.
                            </div>
                        )}

                        {/* SECCIÓN MI GARAJE */}
                        {mostrarSeccionGaraje && (
                            <div className="dash-card">
                                <h3 className="text-gold fw-bold mb-3">🚗 Mi Garaje</h3>
                                <div className="dash-grid">
                                    <div className="action-box" onClick={() => navigate('/mis-vehiculos')}>
                                        <span className="action-icon">🚘</span>
                                        <div className="action-title">Mis Vehículos</div>
                                        <p className="action-desc">Ver mi lista de autos o motos</p>
                                    </div>
                                    <div className="action-box" onClick={() => navigate('/registrar-vehiculo')}>
                                        <span className="action-icon">➕</span>
                                        <div className="action-title">Registrar Vehículo</div>
                                        <p className="action-desc">Añadir una nueva unidad</p>
                                    </div>
                                    <div className="action-box" onClick={() => navigate('/comunidad')}>
                                        <span className="action-icon">👥</span>
                                        <div className="action-title">Comunidad</div>
                                        <p className="action-desc">Foro de ayuda y red social</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* SECCIÓN TOP VEHÍCULOS COLOMBIA */}
                        {mostrarSeccionTop && (
                            <div className="dash-card mt-4">
                                <h3 className="text-gold fw-bold mb-2">🇨🇴 Top Vehículos en Colombia</h3>
                                <p className="text-light-gray mb-4">Descubre los modelos más populares y consulta sus estadísticas.</p>
                                
                                <div className="row g-4">
                                    {carrosRender.length > 0 && (
                                        <div className="col-md-6">
                                            <h5 className="text-white fw-bold mb-3 top-header">🚗 Top 10 Automóviles</h5>
                                            <div className="d-flex flex-column gap-3">
                                                {carrosRender.map((carro) => (
                                                    <button 
                                                        key={carro.id}
                                                        onClick={() => navigate(`/explorar-vehiculo/${carro.marca.toLowerCase()}-${carro.modelo.toLowerCase().replace(/\s+/g, '-')}`)}
                                                        className="btn text-start d-flex align-items-center w-100 p-2 top-list-btn"
                                                        onMouseEnter={() => setImagenAmpliada(carro.imagen)}
                                                        onMouseLeave={() => setImagenAmpliada(null)}
                                                    >
                                                        <img src={carro.imagen} alt={`${carro.marca} ${carro.modelo}`} className="top-list-img" />
                                                        <div className="flex-grow-1">
                                                            <span className="text-gold fw-bold d-block top-list-brand">{carro.marca}</span>
                                                            <span className="text-white top-list-model">{carro.modelo}</span>
                                                        </div>
                                                        <span className="text-gold fs-5 pe-2">➔</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {motosRender.length > 0 && (
                                        <div className="col-md-6">
                                            <h5 className="text-white fw-bold mb-3 top-header">🏍️ Top 10 Motocicletas</h5>
                                            <div className="d-flex flex-column gap-3">
                                                {motosRender.map((moto) => (
                                                    <button 
                                                        key={moto.id}
                                                        onClick={() => navigate(`/explorar-vehiculo/${moto.marca.toLowerCase()}-${moto.modelo.toLowerCase().replace(/\s+/g, '-')}`)}
                                                        className="btn text-start d-flex align-items-center w-100 p-2 top-list-btn"
                                                        onMouseEnter={() => setImagenAmpliada(moto.imagen)}
                                                        onMouseLeave={() => setImagenAmpliada(null)}
                                                    >
                                                        <img src={moto.imagen} alt={`${moto.marca} ${moto.modelo}`} className="top-list-img" />
                                                        <div className="flex-grow-1">
                                                            <span className="text-gold fw-bold d-block top-list-brand">{moto.marca}</span>
                                                            <span className="text-white top-list-model">{moto.modelo}</span>
                                                        </div>
                                                        <span className="text-gold fs-5 pe-2">➔</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {esTaller && usuario.estado === 'pendiente' && !sinResultadosTaller && (
                    <div className="dash-card dash-card-warning">
                        <h3 className="text-gold fw-bold mb-3">⏳ Cuenta en Revisión</h3>
                        <p className="text-light-gray">
                            Tu cuenta de negocio está siendo validada por nuestro equipo de administradores para garantizar la seguridad de la comunidad JOX.
                        </p>
                        <p className="text-white fw-bold mt-3">Pronto habilitaremos todas tus herramientas profesionales.</p>
                    </div>
                )}

                {esTaller && usuario.estado === 'aprobado' && !sinResultadosTaller && (
                    <>
                        <div className="row g-3 mb-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="kpi-card">
                                    <div className="kpi-icon">💰</div>
                                    <div>
                                        <div className="kpi-title">Ingresos Mes</div>
                                        <div className="kpi-value text-success">${metricasTaller.ingresosMes}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="kpi-card">
                                    <div className="kpi-icon">🚗</div>
                                    <div>
                                        <div className="kpi-title">Vehículos en Taller</div>
                                        <div className="kpi-value">{metricasTaller.vehiculosEnTaller}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="kpi-card">
                                    <div className="kpi-icon">✅</div>
                                    <div>
                                        <div className="kpi-title">Órdenes Listas</div>
                                        <div className="kpi-value">{metricasTaller.ordenesListas}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="kpi-card">
                                    <div className="kpi-icon">📝</div>
                                    <div>
                                        <div className="kpi-title">Cotizaciones Pend.</div>
                                        <div className="kpi-value text-warning">{metricasTaller.cotizacionesPendientes}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {metricasTaller.ingresosMes === 0 && (
                            <div className="alert alert-custom-info mb-4">
                                <strong>¡Bienvenido a tu taller digital!</strong> Aún no tienes actividad registrada este mes. Comienza creando tu primera orden de trabajo.
                            </div>
                        )}

                        <div className="row g-4 mb-4">
                            <div className="col-lg-8">
                                <div className="dash-card h-100 mb-0">
                                    <h4 className="text-white fw-bold mb-4">📊 Resumen de Ingresos</h4>
                                    {metricasTaller.ingresosMes === 0 ? (
                                        <div className="text-center text-light-gray my-5">
                                            <h5>No hay suficientes datos para generar la gráfica.</h5>
                                            <p>Comienza a registrar servicios para ver tus estadísticas.</p>
                                        </div>
                                    ) : (
                                        <div className="css-bar-chart">
                                            <div className="bar-container" title="$2,100"><div className="bar" style={{height: '40%'}}></div><span>Oct</span></div>
                                            <div className="bar-container" title="$3,400"><div className="bar" style={{height: '65%'}}></div><span>Nov</span></div>
                                            <div className="bar-container" title="$4,200"><div className="bar" style={{height: '80%'}}></div><span>Dic</span></div>
                                            <div className="bar-container" title="$1,800"><div className="bar" style={{height: '35%'}}></div><span>Ene</span></div>
                                            <div className="bar-container" title="$3,900"><div className="bar" style={{height: '75%'}}></div><span>Feb</span></div>
                                            <div className="bar-container active" title="$4,500"><div className="bar" style={{height: '90%'}}></div><span className="text-gold fw-bold">Mar</span></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dash-card h-100 mb-0">
                                    <h4 className="text-white fw-bold mb-4">⏳ Cotizaciones Pendientes</h4>
                                    
                                    {metricasTaller.cotizacionesPendientes === 0 ? (
                                        <p className="text-light-gray text-center my-4">No hay cotizaciones pendientes por el momento.</p>
                                    ) : (
                                        <div className="quote-list">
                                            <div className="quote-item">
                                                <div>
                                                    <h6 className="mb-0 text-gold">BMW X5 - Placa ABC12</h6>
                                                    <small className="text-light-gray">Cambio de Frenos</small>
                                                </div>
                                                <span className="badge bg-warning text-dark">Esperando</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {mostrarSeccionTaller && (
                            <div className="dash-card mb-4">
                                <h3 className="text-gold fw-bold mb-3">🏪 Operaciones del Taller</h3>
                                <div className="dash-grid mt-0">
                                    <div className="action-box" onClick={() => navigate('/crear-orden')}>
                                        <span className="action-icon">📝</span>
                                        <div className="action-title">Nueva Orden</div>
                                    </div>
                                    <div className="action-box" onClick={() => navigate('/clientes')}>
                                        <span className="action-icon">👥</span>
                                        <div className="action-title">Mis Clientes</div>
                                    </div>
                                    <div className="action-box" onClick={() => navigate('/inventario')}>
                                        <span className="action-icon">⚙️</span>
                                        <div className="action-title">Inventario</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {imagenAmpliada && (
                <div className="floating-image-modal">
                    <img src={imagenAmpliada} alt="Vista ampliada" className="floating-image-content" />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
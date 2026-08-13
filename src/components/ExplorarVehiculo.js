import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ExplorarVehiculo = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // --- ESTADOS DEL SISTEMA ---
    const [vistaActiva, setVistaActiva] = useState('problemas'); 
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [subCategoriaSeleccionada, setSubCategoriaSeleccionada] = useState(null);
    const [sintomaSeleccionado, setSintomaSeleccionado] = useState(null);
    const [anioSeleccionado, setAnioSeleccionado] = useState(2020);

    const añosDisponibles = Array.from(new Array(36), (val, index) => 2025 - index);

    // --- BASE DE DATOS DE VEHÍCULOS (Top 20 - 1 sola imagen fija correcta por vehículo) ---
    // Nota: He puesto enlaces de referencia, puedes cambiar las URLs por las fotos exactas que prefieras.
    const baseDatosVehiculos = {
        // --- CARROS ---
        'renault-duster': { marca: 'Renault', modelo: 'Duster', tipo: 'Carro', imagen: 'https://autosdeprimera.com/wp-content/uploads/2024/04/renault-duster-iconic-2025-colombia-frente.jpg', descripcion: 'SUV robusta ideal para terrenos destapados.' },
        'chevrolet-onix': { marca: 'Chevrolet', modelo: 'Onix', tipo: 'Carro', imagen: 'https://alianzaautomotriz.com/wp-content/uploads/2020/01/WhatsApp-Image-2020-01-23-at-9.50.54-AM.jpeg', descripcion: 'Vehículo urbano con alta tecnología e inyección.' },
        'mazda-cx-30': { marca: 'Mazda', modelo: 'CX-30', tipo: 'Carro', imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/06/20210608-MAZDA-CX-30-RAZONES-DE-SU-EXITO-EN-COLOMBIA-01.jpg', descripcion: 'Crossover con tecnología Skyactiv y sensores avanzados.' },
        'suzuki-swift': { marca: 'Suzuki', modelo: 'Swift', tipo: 'Carro', imagen: 'https://www.revistaautocrash.com/wp-content/uploads/2024/04/DSC02834.jpg', descripcion: 'Hatchback compacto, económico y ágil.' },
        'kia-picanto': { marca: 'Kia', modelo: 'Picanto', tipo: 'Carro', imagen: 'https://www.kia.com/content/dam/kwcms/pe/es/images/modelos/new-picanto/picanto-mainKV-24my-pc.jpg', descripcion: 'City car eficiente ideal para moverse en el tráfico.' },
        'toyota-corolla': { marca: 'Toyota', modelo: 'Corolla', tipo: 'Carro', imagen: 'https://i.redd.it/eure-meinung-zum-toyota-corolla-v0-so8zliuknx3f1.jpg?width=1200&format=pjpg&auto=webp&s=5d3d93cd17f024aa9c7a2b579f3f069d0c964809', descripcion: 'Sedán icónico por su fiabilidad y bajo mantenimiento.' },
        'mazda-2': { marca: 'Mazda', modelo: '2', tipo: 'Carro', imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/02/01-02-2023-PORTADA-Mazda-2.jpg', descripcion: 'Hatchback premium con excelente diseño y confort.' },
        'chevrolet-joy': { marca: 'Chevrolet', modelo: 'Joy', tipo: 'Carro', imagen: 'https://automagazine.ec/wp-content/uploads/2022/05/Nuevo-Chevrolet-JOY.1.png', descripcion: 'Vehículo familiar y de trabajo, muy comercial.' },
        'renault-stepway': { marca: 'Renault', modelo: 'Stepway', tipo: 'Carro', imagen: 'https://cdn.group.renault.com/ren/co/vehicles/stepway/home/nuevo-renault-stepway-gris-estrella.jpg.ximg.xsmall.jpg/0046f9c653.jpg', descripcion: 'Hatchback aventurero con buena altura al piso.' },
        'nissan-frontier': { marca: 'Nissan', modelo: 'Frontier', tipo: 'Carro', imagen: 'https://wieck-nissanao-production.s3.amazonaws.com/photos/016960cc177ae14c7cdb34b0d3409f111bcd2ac0/preview-928x522.jpg', descripcion: 'Pick-up resistente de trabajo pesado.' },

        // --- MOTOS ---
        'akt-nkd-125': { marca: 'AKT', modelo: 'NKD 125', tipo: 'Moto', imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_edc56762d192479abca29ee51b2087dd.jpg', descripcion: 'Motocicleta mecánica tradicional, excelente para ciudad.' },
        'yamaha-nmax-155': { marca: 'Yamaha', modelo: 'NMAX 155', tipo: 'Moto', imagen: 'https://http2.mlstatic.com/D_805544-MCO110431987063_042026-O.jpg', descripcion: 'Scooter moderna con frenos ABS y VVA.' },
        'bajaj-ct-100': { marca: 'Bajaj', modelo: 'CT 100', tipo: 'Moto', imagen: 'https://fotos.perfil.com/2026/02/02/bajaj-lanza-en-argentina-la-nueva-boxer-ct100-eficiencia-y-autonomia-record-2179443.jpg', descripcion: 'Moto de trabajo super económica en combustible.' },
        'suzuki-gn-125': { marca: 'Suzuki', modelo: 'GN 125', tipo: 'Moto', imagen: 'https://motoblog.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-27-at-1.47.36-PM-15-1024x682.jpeg', descripcion: 'Motocicleta clásica y resistente, ideal para trabajo y ciudad.' },
        'honda-cb-125f': { marca: 'Honda', modelo: 'CB 125F', tipo: 'Moto', imagen: 'https://www.motoplanete.com/honda/galerie/Honda-CBF-125-2026/8.webp', descripcion: 'Ligera, confiable y con el respaldo de Honda.' },
        'yamaha-fz-s': { marca: 'Yamaha', modelo: 'FZ-S', tipo: 'Moto', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2025/01/descarga-_1_.webp', descripcion: 'Naked de inyección con excelente torque en bajas.' },
        'bajaj-pulsar-ns-200': { marca: 'Bajaj', modelo: 'Pulsar NS 200', tipo: 'Moto', imagen: 'https://bajajmatriz.com/wp-content/uploads/2024/04/NS200UG-ROJA.jpg', descripcion: 'Naked deportiva con refrigeración líquida.' },
        'tvs-raider-125': { marca: 'TVS', modelo: 'Raider 125', tipo: 'Moto', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2024/03/tvs-raider-125-01.webp', descripcion: 'Moto urbana con tablero digital y modos de manejo.' },
        'yamaha-xtz-150': { marca: 'Yamaha', modelo: 'XTZ 150', tipo: 'Moto', imagen: 'https://www.galgo.com/wp-content/uploads/2023/01/YAMAHA-XTZ-150_-La-multiproposito-mas-buscada.webp', descripcion: 'Enduro cómoda para la ciudad y destapado.' },
        'honda-xr-150l': { marca: 'Honda', modelo: 'XR 150L', tipo: 'Moto', imagen: 'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2024/03/Honda-XR-150L-2025-01.webp', descripcion: 'La multipropósito más versátil y vendida.' }
    };

    // 1. Buscar en BD local
    let vehiculoEncontrado = baseDatosVehiculos[id];

    // 2. Fallback si el ID no existe
    if (!vehiculoEncontrado) {
        const esMotoPorUrl = id && (id.includes('moto') || id.includes('nmax') || id.includes('akt') || id.includes('pulsar') || id.includes('yamaha') || id.includes('suzuki') || id.includes('honda') || id.includes('tvs'));
        vehiculoEncontrado = {
            marca: 'Vehículo No Encontrado', 
            modelo: 'Comprueba el ID', 
            tipo: esMotoPorUrl ? 'Moto' : 'Carro',
            imagen: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop', 
            descripcion: 'El vehículo seleccionado no se encuentra en la base de datos.'
        };
    }

    const vehiculoActivo = vehiculoEncontrado;

    // --- ÁRBOL DE PROBLEMAS ---
    const arbolProblemas = {
        mecanico: {
            titulo: 'Mecánico', icono: '⚙️',
            subcategorias: [
                { nombre: 'Fallas de Motor', sintomas: ['Pérdida de compresión', 'Ruido anormal', 'Sobrecalentamiento', 'Fugas de aceite', 'Consumo excesivo de aceite'] },
                { nombre: 'Transmisión / Embrague', sintomas: ['Embrague (clutch) patinando', 'Dificultad para cambiar marchas', 'Cadena o kit de arrastre'] },
                { nombre: 'Chasis / Suspensión', sintomas: ['Suspensiones rigidas o con fugas', 'Rumbos y vibraciones en direccion', 'Desgaste de neumaticos'] },
                { nombre: 'Fallas de frenos', sintomas: ['Frenado debil/esponjoso', 'Chirridos o ruidos al frenar'] }
            ]
        },
        electrico: {
            titulo: 'Eléctrico / Electrónico', icono: '⚡',
            subcategorias: [
                { nombre: 'Suministro de energía', sintomas: ['Bateria descargada o muerta', 'Fallo en el sistema de carga', 'Alternador/Estator defectuoso', 'Regulador defectuoso/rectificador averiado'] },
                { nombre: 'Fallos de encendido', sintomas: ['Falta de chispa', 'Motor de arranque', 'Cableado defectuoso', 'Falla de sensores (motor de inyeccion)'] },
                { nombre: 'Control y distribución', sintomas: ['Fusibles quemados', 'Reles desgastados', 'ECU defectuoso'] }
            ]
        },
        suministro: {
            titulo: 'Suministros', icono: '🛢️',
            subcategorias: [
                { nombre: 'Combustible', sintomas: ['Carburador sucio o desajustado', 'Filtro de combustible obstruido', 'Bomba de combustible averiado', 'Inyectores tapados o fallando'] },
                { nombre: 'Fallas de aire', sintomas: ['Filtro de aire obstruido', 'Fugas en el sistema de admision'] },
                { nombre: 'Escape', sintomas: ['Escape obstruido', 'Fugas en el escape'] }
            ]
        }
    };

    // --- MOTOR DE DIAGNÓSTICO INTELIGENTE ---
    const generarSolucion = (sintoma) => {
        const esMoto = vehiculoActivo.tipo === 'Moto';
        const esAntiguo = anioSeleccionado < 2012; 

        let solucion = {
            descripcion: `Diagnóstico para ${sintoma} en ${vehiculoActivo.marca} ${vehiculoActivo.modelo} (${anioSeleccionado}).`,
            pasos: [
                'Paso 1: Realiza una inspección visual general en el área afectada.',
                'Paso 2: Verifica que no haya piezas sueltas o daños evidentes.',
                'Paso 3: Limpia los componentes relacionados antes de intentar un ajuste.',
                'Paso 4: Si el problema persiste, procede al reemplazo de la pieza.'
            ],
            diferenciasAnio: esAntiguo 
                ? 'Al ser un vehículo anterior a 2012, el diagnóstico es mayormente visual y mecánico.' 
                : 'En modelos recientes, es altamente recomendable iniciar conectando un escáner.',
            herramientas: ['Juego de llaves (copas y fijas)', 'Destornilladores', 'Linterna'],
            precauciones: `Asegúrate de que el sistema de tu ${vehiculoActivo.marca} esté completamente apagado y frío.`,
            dificultad: 'Intermedio 🟡'
        };

        if (sintoma === 'Bateria descargada o muerta') {
            solucion.descripcion = 'La batería no tiene el voltaje necesario para accionar el motor de arranque.';
            solucion.dificultad = 'Básico 🟢';
            solucion.herramientas = ['Multímetro', 'Llave 10mm', 'Cargador de batería'];
            solucion.pasos = esMoto 
                ? [
                    `1. Retira el asiento de tu ${vehiculoActivo.modelo} para acceder a la batería.`,
                    '2. Con el multímetro en 20V DC, mide el voltaje (> 12.4V).',
                    '3. Revisa y limpia los bornes si presentan sulfatación.',
                    '4. Si no retiene carga, reemplázala verificando el amperaje.'
                ] : [
                    `1. Abre el capó de tu ${vehiculoActivo.marca} y localiza la batería.`,
                    '2. Mide el voltaje con el auto apagado (aprox 12.6V).',
                    '3. Limpia los bornes sulfatados.',
                    '4. Enciende el auto con cables y verifica si sube a 13.8V-14.4V.'
                ];
        } 
        else if (sintoma === 'Carburador sucio o desajustado' || sintoma === 'Inyectores tapados o fallando') {
            solucion.descripcion = 'Problema en la mezcla aire/combustible que genera pérdida de potencia.';
            solucion.dificultad = 'Avanzado 🔴';
            
            if (esAntiguo) {
                solucion.herramientas = ['Limpiador de carburador', 'Destornilladores planos'];
                solucion.pasos = esMoto
                    ? ['1. Cierra el paso de gasolina y retira el carburador.', '2. Desarma las cubas y limpia los chicleres.', '3. Ajusta el tornillo de mezcla.']
                    : ['1. Retira el portafiltro.', '2. Aplica limpiador por la mariposa.', '3. Revisa mangueras de vacío.'];
            } else {
                solucion.herramientas = ['Escáner OBD2', 'Multímetro', 'Limpiador electrónico'];
                solucion.pasos = esMoto
                    ? ['1. Verifica códigos de falla.', '2. Limpia el cuerpo de inyección.', '3. Mide la resistencia del inyector.']
                    : ['1. Conecta escáner OBD2.', '2. Verifica el pulso de inyectores.', '3. Retira el riel para limpieza por ultrasonido.'];
            }
        }
        return solucion;
    };

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

    useEffect(() => {
        if (sintomaSeleccionado) reiniciarDiagnostico();
        // eslint-disable-next-line
    }, [anioSeleccionado]);

    return (
        <div className="dash-layout fade-in" style={{ paddingBottom: '50px' }}>
            <nav className="dash-nav d-flex align-items-center mb-4">
                <button onClick={() => navigate(-1)} className="btn btn-outline-light me-3">❮ Volver al Garaje</button>
                <h4 className="text-gold fw-bold mb-0">Sistema Experto de Diagnóstico</h4>
            </nav>

            <div className="dash-content">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="dash-card h-100 p-4" style={{ background: '#111', borderRadius: '15px', border: '1px solid #333' }}>
                            {/* IMAGEN SIMPLE Y DIRECTA */}
                            <div style={{borderRadius: '10px', padding: '10px', marginBottom: '15px' }}>
                                <img 
                                    src={vehiculoActivo.imagen} 
                                    alt={`${vehiculoActivo.marca} ${vehiculoActivo.modelo}`} 
                                    style={{ width: '100%', height: '220px', objectFit: 'contain' }} 
                                />
                            </div>
                            
                            <div>
                                <span className="badge bg-secondary mb-2 px-3 py-2 fs-6">Tipo: {vehiculoActivo.tipo} {vehiculoActivo.tipo === 'Moto' ? '🏍️' : '🚗'}</span>
                                <h2 className="text-gold fw-bold mb-0">{vehiculoActivo.marca}</h2>
                                <h3 className="text-white mb-3">{vehiculoActivo.modelo}</h3>
                                <p className="text-light-gray">{vehiculoActivo.descripcion}</p>
                                
                                <div className="mt-4 p-3 bg-dark rounded border border-warning">
                                    <label className="form-label text-gold fw-bold mb-2">📅 Configurar Año del Vehículo</label>
                                    <select 
                                        className="form-select bg-black text-white border-secondary"
                                        value={anioSeleccionado}
                                        onChange={(e) => setAnioSeleccionado(parseInt(e.target.value))}
                                    >
                                        {añosDisponibles.map(anio => (
                                            <option key={anio} value={anio}>{anio}</option>
                                        ))}
                                    </select>
                                    <small className="text-light-gray mt-2 d-block">
                                        * Ajustará los manuales a tecnología mecánica o electrónica.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="dash-card h-100 p-4 position-relative" style={{ background: '#1c1c1c', borderRadius: '15px', border: '1px solid #333' }}>
                            
                            {categoriaSeleccionada && (
                                <div className="d-flex justify-content-between align-items-center mb-4 bg-black p-2 rounded border border-secondary">
                                    <button onClick={volverAtras} className="btn btn-sm btn-outline-light">❮ Atrás</button>
                                    <span className="text-gold small fw-bold">
                                        {arbolProblemas[categoriaSeleccionada].titulo} 
                                        {subCategoriaSeleccionada && ` ➔ ${subCategoriaSeleccionada.nombre}`}
                                    </span>
                                    <button onClick={reiniciarDiagnostico} className="btn btn-sm btn-outline-danger">🔄 Reiniciar</button>
                                </div>
                            )}

                            {!categoriaSeleccionada && (
                                <div className="fade-in">
                                    <h4 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">1. ¿En qué sistema identificas el problema?</h4>
                                    <div className="d-flex gap-3 flex-wrap">
                                        {Object.keys(arbolProblemas).map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => setCategoriaSeleccionada(key)}
                                                className="btn flex-grow-1 p-4 btn-outline-secondary text-white interact-card text-center"
                                                style={{ borderRadius: '15px', border: '1px solid #444', backgroundColor: '#222' }}
                                            >
                                                <span className="fs-1 d-block mb-2">{arbolProblemas[key].icono}</span>
                                                <h5 className="fw-bold mb-0">{arbolProblemas[key].titulo}</h5>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {categoriaSeleccionada && !subCategoriaSeleccionada && (
                                <div className="fade-in">
                                    <h4 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">2. Selecciona el área afectada:</h4>
                                    <div className="row g-3">
                                        {arbolProblemas[categoriaSeleccionada].subcategorias.map((subcat, index) => (
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

                            {subCategoriaSeleccionada && !sintomaSeleccionado && (
                                <div className="fade-in">
                                    <h4 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">3. ¿Cuál es el síntoma exacto?</h4>
                                    <div className="d-flex flex-column gap-2">
                                        {subCategoriaSeleccionada.sintomas.map((sintoma, index) => (
                                            <button 
                                                key={index}
                                                onClick={() => setSintomaSeleccionado(sintoma)}
                                                className="btn text-start text-light p-3 border-secondary fw-bold"
                                                style={{ borderRadius: '8px', background: 'rgba(212, 175, 55, 0.05)', borderLeft: '4px solid #D4AF37' }}
                                            >
                                                <span className="text-gold me-2">➔</span> {sintoma}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {sintomaSeleccionado && (
                                <div className="fade-in">
                                    {(() => {
                                        const diag = generarSolucion(sintomaSeleccionado);
                                        return (
                                            <div className="p-0">
                                                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-warning pb-3">
                                                    <h3 className="text-gold fw-bold mb-0">🛠️ Solución Adaptada</h3>
                                                    <span className="badge bg-black border border-secondary fs-6 py-2 px-3">
                                                        Dificultad: {diag.dificultad}
                                                    </span>
                                                </div>

                                                <div className="mb-4 bg-black p-3 rounded border border-secondary">
                                                    <h6 className="text-white fw-bold mb-2">🔹 Descripción del Problema</h6>
                                                    <p className="text-light-gray mb-0">{diag.descripcion}</p>
                                                </div>

                                                <div className="mb-4 alert" style={{ background: 'rgba(13, 110, 253, 0.1)', border: '1px solid #0d6efd', color: '#fff' }}>
                                                    <h6 className="text-primary fw-bold mb-2">📅 Nota Tecnológica ({anioSeleccionado}):</h6>
                                                    <p className="mb-0 small">{diag.diferenciasAnio}</p>
                                                </div>

                                                <div className="mb-4">
                                                    <h6 className="text-white fw-bold mb-2">🔧 Herramientas Sugeridas:</h6>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {diag.herramientas.map((h, i) => (
                                                            <span key={i} className="badge bg-secondary text-light p-2">{h}</span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h6 className="text-white fw-bold mb-3">📋 Procedimiento Paso a Paso:</h6>
                                                    {diag.pasos.map((paso, i) => (
                                                        <div key={i} className="d-flex mb-2 p-2 rounded" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                            <p className="text-light-gray mb-0">{paso}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })()}
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
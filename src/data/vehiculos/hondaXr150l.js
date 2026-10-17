const sistemasMotorHondaXR150L = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie 149.2cc OHC Monocilíndrico 4T Enfriado por Aire)',
        funcion:
            'Estructura ultra robusta de aleación de aluminio con camisa de hierro fundido de alta resistencia que aloja el pistón, cigüeñal y mecanismo de distribución para trabajo pesado On/Off-Road.',
        fallas: [
            'Fugas de aceite por la junta del cárter central o sello del pedal de cambios',
            'Desgaste prematuro de la camisa por operar con nivel bajo de aceite (requiere 1000ml Honda Genuine Oil 10W-30 / 20W-50 MA)',
            'Acumulación de fango entre las aletas de disipación térmica del cilindro en uso trocha',
            'Consumo de aceite y humo azul por el escape tras intervalos de mantenimiento muy extendidos'
        ]
    },

    {
        nombre: 'Culata OHC 2 Válvulas impulsadas por Cadena y Balancines',
        funcion:
            'Aloja las válvulas de admisión y escape accionadas directamente por balancines mecánicos desde el árbol de levas superior para un alto torque a bajas y medias RPM.',
        fallas: [
            'Ruidos metálicos de tictac o golpeteo por luz de válvulas fuera de tolerancia (Admisión: 0.08mm / Escape: 0.12mm)',
            'Dificultad para encender en frío o falta de ralentí por válvulas apretadas sin tolerancia',
            'Pérdida de compresión por sedimentación de carbonilla en el asiento de las válvulas',
            'Fuga de compresión o aceite por el empaque de culata o junta de la tapa de punterías'
        ]
    },

    {
        nombre: 'Cigüeñal y Eje Balancín de Contrapeso',
        funcion:
            'Transforma el movimiento del pistón en rotación hacia la caja de 5 marchas e incorpora un eje balanceador para reducir las vibraciones del motor monocilíndrico en carretera.',
        fallas: [
            'Golpeteo bajo en el cárter por desgaste en la canastilla de la cabeza de biela',
            'Fuga de aceite por el retén del cigüeñal detrás del volante magnético/estator',
            'Vibraciones atípicas en los posapiés y manubrio por holgura axial en rodamientos del cigüeñal'
        ]
    },

    {
        nombre: 'Pistón Ligero con Recubrimiento Antifricción',
        funcion:
            'Soporta el empuje de la combustión transmitiendo la fuerza a la biela con un bajo coeficiente de fricción interna.',
        fallas: [
            'Anillos rascadores de aceite pegados por acumulación de barnices de lubricante degradado',
            'Pérdida progresiva de compresión y falta de fuerza en pendientes',
            'Rayado de la falda por entrada de polvo si no se limpia el filtro de aire de espuma'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático de Muelle',
        funcion:
            'Mantiene la sincronización milimétrica entre el cigüeñal y el árbol de levas OHC.',
        fallas: [
            'Sonajero metálico sostenido en el costado izquierdo del motor al arrancar en frío',
            'Trabamiento del mecanismo del tensor automático de cadena de distribución',
            'Desgaste de las guías deslizantes plásticas dentro del túnel del cilindro'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración por Aire Convectivo de Alto Flujo',
        funcion:
            'Disipa el calor mediante aletas integradas en el cilindro y culata diseñadas para trabajar en climas extremos y bajas velocidades.',
        fallas: [
            'Sobrecalentamiento y pérdida temporal de potencia en trochas pesadas a muy baja velocidad',
            'Saturación de las aletas de disipación de calor por fango seco o arcilla acumulada'
        ]
    },

    {
        nombre: 'Sistema de Lubricación Forzada por Bomba Trocoide y Tamiz de Malla',
        funcion:
            'Impulsa aceite a presión por galerías internas hacia la culata OHC, árbol de levas, pistón y caja de 5 velocidades.',
        fallas: [
            'Obstrucción de la malla tamiz de succión por restos de silicona de empaques o residuos metálicos',
            'Desgaste en la culata por falta de flujo de aceite durante arranques sostenidos en frío',
            'Patinamiento del embrague por usar aceites con aditivos modificadores de fricción de autos (No JASO MA)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleHondaXR150L = {

    titulo: 'Sistema de Carburación Keihin de Pistón con Ahogador / Choke Manual',

    funcionamiento:
        'El combustible fluye por gravedad desde el tanque hacia el carburador Keihin. La presión atmosférica y el vacío generado por el pistón succionan la gasolina a través de los boquereles (jets) de alta y baja, mientras el choke facilísimo el encendido en frío.',

    componentes: [
        'Tanque de combustible de 12.0 Litros (incluye reserva de 3.5 Litros)',
        'Grifo / Llave de gasolina con posición ON / OFF / RES y filtro de malla interno',
        'Carburador Keihin de embolo / pistón con bomba de aceleración',
        'Palanca de ahogador (Choke) de 2/3 posiciones para arranques en frío',
        'Chicle / Boquerel de alta (Main Jet) y Boquerel de baja / ralentí (Pilot Jet)',
        'Filtro de aire de elemento de espuma lavable reticulada',
        'Manguera de drenaje de cuba de carburador y manguera de rebose'
    ],

    flujo: [
        '1. La gasolina baja por gravedad desde la llave del tanque hacia la cuba del carburador.',
        '2. El flotador y la aguja de la cuba mantienen el nivel constante de combustible.',
        '3. El vacío del motor succiona aire fresco a través del filtro de espuma lavable.',
        '4. El carburador atomiza la gasolina mezclándola con el aire en proporción 14.7:1.',
        '5. La mezcla entra por la válvula de admisión hacia la cámara de combustión OHC.'
    ],

    diagnostico: [
        'Verificar el flujo continuo de gasolina en la manguera principal desde el tanque.',
        'Desarmar la cuba del carburador y limpiar boquereles (alta y baja) con limpiador específico.',
        'Inspeccionar, lavar con desengrasante y lubricar el filtro de aire de espuma.',
        'Calibrar el tornillo de mezcla de aire/combustible (1.5 a 2 vueltas desde el fondo).'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoHondaXR150L = {

    titulo: 'Sistema de Encendido por Descarga de Condensador Digital (DC-CDI) y Crank Primary',

    funcionamiento:
        'El sistema DC-CDI alimentado por la batería de 12V procesa la señal del sensor pulsor (CKP) en el estator y libera la descarga hacia la bobina de alta tensión, permitiendo un arranque inmediato por botón eléctrico o pedal de patada.',

    componentes: [
        {
            nombre: 'Sensor Pulsor CKP (Pick-Up Coil)',
            funcion:
                'Detecta el paso del resalte en el volante magnético enviando el pulso a la unidad CDI.'
        },

        {
            nombre: 'Módulo de Encendido DC-CDI Digital Honda',
            funcion:
                'Calcula la curva de avance de la chispa basándose en las RPM exactas del motor.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón de Bujía Sellado',
            funcion:
                'Eleva el voltaje para generar un arco eléctrico fuerte y resistente a la humedad.'
        },

        {
            nombre: 'Bujía de Encendido Estándar (NGK CPR8EA-9 / CPR9EA-9)',
            funcion:
                'Detona la mezcla comprimida en la cámara de combustión OHC.'
        },

        {
            nombre: 'Sistema Dual de Arranque (Eléctrico + Pedal de Patada / Kick Start)',
            funcion:
                'Garantiza el encendido del motor mediante motor eléctrico o por impulso mecánico si falla la batería.'
        }
    ],

    fallaNoHayChispa: [
        'Comprobar la carga de la batería de 12V y el fusible principal de 15A.',
        'Verificar la posición del interruptor de corte de encendido (Run/Off) en el comando derecho.',
        'Inspeccionar la continuidad del switch de neutro y del sensor de manigueta de embrague.',
        'Medir la resistencia de la bobina de alta tensión y comprobar que el capuchón no esté en cortocircuito.',
        'Verificar el voltaje de entrada de 12V DC hacia el módulo CDI con el switch abierto.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposHondaXR150L = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. La válvula de admisión abre y la mezcla aire/gasolina preparada por el carburador Keihin es succionada al cilindro.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Llenar el cilindro de 149.2cc con la mayor cantidad de mezcla homogénea.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende hacia el PMS comprimiendo la mezcla con ambas válvulas cerradas (relación de compresión 9.5:1).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Incrementar la temperatura y la presión para lograr una explosión eficiente.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía salta la chispa. La violenta expansión de gases empuja el pistón produciendo la potencia de 12.1 HP a 7.500 RPM y un torque de 12.5 Nm a 6.000 RPM.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el empuje de torque característico de la línea XR para vencer cualquier terreno.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón sube del PMI al PMS empujando los gases quemados hacia la válvula de escape abierta y directo al silenciador elevado con arrestador de chispas.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Limpiar por completo la cámara de combustión para dar paso al siguiente ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasHondaXR150L = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 24mm)',
        'Llave delgada para bujías de 16mm (5/8")',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para regulación de válvulas (0.08mm - 0.12mm)',
        'Alicates universales, alicate de presión y llaves Allen de 5mm y 6mm',
        'Bandeja de recolección de aceite (1.5 Litros) y embudo graduado'
    ],

    diagnostico: [
        'Multímetro digital para comprobación de voltajes DC, resistencia de bobinas y estator',
        'Compresímetro con acople de rosca de bujía M10 / M12',
        'Probador de chispa / Chispero en línea para alta tensión',
        'Calibrador Vernier / Pie de rey y tacómetro de pulso por inducción'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm (8 Nm a 80 Nm)',
        'Extractor de volante magnético específico Honda CG / XR Series',
        'Herramienta sujeta-embrague de torre y extractor de cunas de dirección',
        'Llave de radios y alineador de rines para llantas On/Off-Road'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralHondaXR150L = {

    principio:
        'Diagnóstico metódico Honda Dual-Sport: Verificación de chispa, nivel/flujo de combustible en carburador, compresión del motor y holgura de válvulas OHC.',

    secuencia: [

        '1. Entrevistar al cliente sobre las condiciones de la falla y verificar la presencia de chispa mediante probador en línea.',

        '2. Medir el voltaje de la batería en reposo (mínimo 12.5V DC para correcto trabajo del módulo DC-CDI).',

        '3. Inspeccionar el flujo de gasolina desde la llave del tanque y aflojar el tornillo de drenaje de la cuba del carburador.',

        '4. Limpiar el filtro de aire de espuma e inspeccionar que no tenga suciedad extrema o gasolina represada.',

        '5. Medir la compresión del cilindro en el orificio de la bujía (especificación ~130-150 PSI).',

        '6. Revisar y calibrar la luz de las 2 válvulas en frío (Admisión: 0.08mm / Escape: 0.12mm).',

        '7. Reemplazar o reparar el componente defectuoso con repuestos Honda Genuine Parts.',

        '8. Ajustar el ralentí del carburador Keihin entre 1.400 y 1.500 RPM.',

        '9. Realizar prueba de ruta verificando respuesta de aceleración, estabilidad de suspensión Pro-Link y frenado.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesHondaXR150L = [

    {
        titulo: 'El motor no sostiene el ralentí o se apaga al quitar el ahogador (choke)',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Boquerel / Chicle de baja (Pilot Jet) del carburador obstruido con gomas de gasolina',
            'Filtro de aire de espuma lleno de fango, polvo seco o empapado en exceso de aceite',
            'Entrada de aire pirata por la manguera o insulador de admisión de caucho fisurado',
            'Válvula de admisión apretada/pisada sin holgura de trabajo'
        ],

        diagnostico: [
            'Desarmar la cuba del carburador Keihin y destapar el boquerel de baja con aerosol y aire a presión.',
            'Lavar el filtro de espuma con desengrasante, secar y lubricar ligeramente.',
            'Inspeccionar con espuma de jabón o arrancador el insulador de admisión para descartar fugas de vacío.',
            'Calibrar válvulas en frío (Admisión: 0.08mm / Escape: 0.12mm).'
        ]
    },

    {
        titulo: 'Ahogamiento del carburador con goteo constante de gasolina por la manguera de desahogo',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Punta de caucho vitón de la aguja del flotador (punzón) desgastada o con mugre',
            'Flotador de la cuba perforado o atascado en su eje',
            'Sedimentos y agua acumulados en el fondo del tanque de gasolina'
        ],

        diagnostico: [
            'Desmontar la cuba del carburador, limpiar el asiento del punzón y comprobar el flotador.',
            'Limpiar el tanque de combustible y reemplazar el filtro de manguera o filtro de grifo.',
            'Verificar la altura estándar del flotador Keihin.'
        ]
    },

    {
        titulo: 'Ahogamiento o falta de fuerza al acelerar a fondo en pendientes pronunciadas',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Boquerel / Chicle de alta (Main Jet) parcial o totalmente obstruido',
            'Bujía de encendido desgastada, con carbón o con distancia de electrodo fuera de norma',
            'Bomba de aceleración del carburador descalibrada o diafragma roto'
        ],

        diagnostico: [
            'Sopletear el boquerel principal de alta y conductos de emulsión.',
            'Reemplazar la bujía por la especificada (NGK CPR8EA-9).',
            'Inspeccionar el accionamiento mecánico de la varilla de la bomba de aceleración.'
        ]
    },

    {
        titulo: 'Chirrido o golpeteo en la suspensión trasera Pro-Link al transitar por baches',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Bujes y rodamientos de aguja del brazo basculante y bieletas Pro-Link secos o con barro',
            'Falta de grasa de litio en los pernos pasadores de la tijera trasera',
            'Desgaste o fuga de aceite en el amortiguador central Monoshock'
        ],

        diagnostico: [
            'Desarmar el sistema articulado Pro-Link de la suspensión trasera.',
            'Limpiar residuos de tierra, verificar canastillas de agujas y aplicar grasa de litio/chasis.',
            'Inspeccionar el estado del amortiguador central y topes de caucho.'
        ]
    },

    {
        titulo: 'Sonido de martilleo metálico continuo en la zona superior del motor',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Holgura excesiva en las punterías/balancines de admisión y escape',
            'Cadena de distribución destensionada por desgaste del tensor automático',
            'Bajo nivel de aceite de motor'
        ],

        diagnostico: [
            'Calibrar las 2 válvulas usando galgas en frío (0.08mm Admisión / 0.12mm Escape).',
            'Comprobar la retracción y muelle del tensor automático de distribución.',
            'Verificar y reponer el nivel de aceite usando la varilla medidora.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoHondaXR150L = {

    objetivo:
        'Asegurar la legendaria durabilidad y resistencia On/Off-Road de la familia Honda XR, optimizar la economía de combustible del carburador Keihin y preservar el confort de la suspensión Pro-Link.',

    actividades: [

        {
            nombre: 'Aceite de Motor y Limpieza de Tamiz',
            accion:
                'Reemplazar el aceite cada 3.000 km utilizando 1000ml de lubricante Honda Genuine Oil 10W-30 / 20W-50 MA. Limpiar la malla tamiz de succión del cárter cada 12.000 km.'
        },

        {
            nombre: 'Filtro de Aire de Espuma Lavable',
            accion:
                'Inspeccionar cada 3.000 km (o tras cada ruta trocha). Lavar con solvente/desengrasante suave, dejar secar y lubricar con aceite para filtros de espuma.'
        },

        {
            nombre: 'Calibración de Válvulas OHC',
            accion:
                'Inspeccionar y calibrar en frío cada 6.000 km. Especificaciones: Admisión (0.08mm) / Escape (0.12mm).'
        },

        {
            nombre: 'Limpieza y Ajuste de Carburador Keihin',
            accion:
                'Drenar la cuba cada 3.000 km para retirar sedimentos/agua. Realizar desmontaje y limpieza general con ajuste de mezcla cada 9.000 km.'
        },

        {
            nombre: 'Cadena de Transmisión y Kit de Arrastre',
            accion:
                'Limpiar, tensionar y lubricar la cadena cada 500 km (o tras andar en barro/lluvia). Mantener la holgura entre 25mm y 35mm. Sustituir kit de arrastre entre 15.000 km y 20.000 km.'
        },

        {
            nombre: 'Mantenimiento de Suspensión Pro-Link y Telescópicas',
            accion:
                'Engrasar las bieletas Pro-Link y pasadores del basculante cada 10.000 km. Cambiar el fluido de horquilla hidráulica (Fork Oil 10W) cada 15.000 km.'
        },

        {
            nombre: 'Bujía de Encendido',
            accion:
                'Limpiar y ajustar la calibración del electrodo (0.8mm - 0.9mm) cada 6.000 km; sustituir bujía NGK CPR8EA-9 cada 12.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadHondaXR150L = [

    'Al realizar mantenimiento al carburador o líneas de combustible, trabaje en áreas ventiladas sin fuentes de ignición cerca y cierre siempre la llave del tanque.',

    'Coloque la motocicleta sobre un soporte elevador o gato central debajo del chasis antes de intervenir ruedas, frenos o la suspensión Pro-Link.',

    'Verifique periódicamente el tensionado de radios de ambas ruedas (rin 19 delantera / rin 17 trasera) para prevenir descentramientos o roturas en saltos.',

    'No lave el motor inmediatamente después de un uso prolongado; espere a que se enfríe para evitar choque térmico y deformación de la culata de aluminio.',

    'Asegúrese de respetar los torques de apriete en el tapón de drenaje de aceite (15 Nm) para no fisurar las roscas del cárter de aluminio.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosHondaXR150L = [

    {
        id: 1,

        titulo: 'Introducción a la Honda XR150L y Mantenimiento Periódico',

        nivel: 'Básico',

        descripcion:
            'Conoce los fundamentos mecánicos de la Honda XR150L, cambio de aceite de motor, servicio al filtro de aire de espuma y tensión de cadena.',

        temas: [
            'Historia y arquitectura de la plataforma Honda XR Dual-Sport',
            'Procedimiento correcto de cambio de aceite y limpieza de tamiz',
            'Lavado, secado y lubricación del filtro de aire de espuma',
            'Ajuste, alineación de rueda y lubricación de la cadena de transmisión'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del Motor OHC y Mantenimiento Pro-Link',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a ubicar la marca de tiempo T, calibración de las 2 válvulas OHC en frío y lubricación del sistema articulado Pro-Link.',

        temas: [
            'Identificación del PMS y marcas del volante magnético/piñón levas',
            'Calibración de válvulas con láminas de galgas (0.08mm / 0.12mm)',
            'Desarme, inspección de canastillas y engrase del sistema Pro-Link',
            'Mantenimiento de barras telescópicas delanteras y retenes de suspensión'
        ]
    },

    {
        id: 3,

        titulo: 'Carburación Keihin Avanzada y Diagnóstico Eléctrico DC-CDI',

        nivel: 'Intermedio',

        descripcion:
            'Aprende la carburación de pistón Keihin, bomba de aceleración, circuitos de ralentí y comprobación del sistema de encendido DC-CDI.',

        temas: [
            'Desarme integral, limpieza e identificación de boquereles del carburador Keihin',
            'Ajuste del tornillo de mezcla de aire y calibración de bomba de aceleración',
            'Pruebas con multímetro del sistema DC-CDI, bobina de alta y estator de carga',
            'Diagnóstico del sistema dual de arranque (motor de arranque y kick starter)'
        ]
    },

    {
        id: 4,

        titulo: 'Chasis Dual-Sport, Centrado de Radios y Frenos On/Off-Road',

        nivel: 'Avanzado',

        descripcion:
            'Técnicas de mantenimiento en chasis cuna semi-doble, radiado y centrado de rines On/Off-Road y servicio a frenos de disco y tambor.',

        temas: [
            'Tensionado y centrado de radios en rines de 19" y 17"',
            'Mantenimiento a la mordaza hidráulica del disco delantero y purgado DOT 4',
            'Inspección, rectificado y cambio de zapatas / bandas del freno trasero',
            'Diagnóstico de rodamientos de dirección (cunas) y rodamientos de ruedas'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioHondaXR150L = [

    {
        termino: 'XR150L',
        significado:
            'Motocicleta doble propósito (Dual-Sport) de Honda conocida mundialmente por su versatilidad, robustezOn/Off-Road y bajo costo de mantenimiento.'
    },

    {
        termino: 'Pro-Link',
        significado:
            'Sistema de suspensión trasera de respuesta progresiva registrado por Honda, que utiliza un brazo articulado y bieletas para optimizar la absorción de impactos.'
    },

    {
        termino: 'DC-CDI',
        significado:
            'Direct Current Capacitor Discharge Ignition. Módulo de encendido por descarga de condensador alimentado directamente por corriente continua (12V DC) de la batería.'
    },

    {
        termino: 'OHC',
        significado:
            'OverHead Camshaft. Configuración del motor con un solo árbol de levas situado en la culata que acciona directamente las válvulas.'
    },

    {
        termino: 'Keihin',
        significado:
            'Prestigioso fabricante japonés de carburadores e instrumentos de inyección, proveedor original del sistema de combustible de la Honda XR150L.'
    },

    {
        termino: 'Kick Starter',
        significado:
            'Pedal mecánico de arranque por patada que actúa directamente sobre la caja de cambios como sistema secundario de encendido.'
    },

    {
        termino: 'Dual-Sport',
        significado:
            'Vehículo de doble propósito legal para circular tanto en vías pavimentadas urbanas como en trochas destapadas de tierra y barro.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoHondaXR150L(anio, configuracion) {

    const sintomasMapeados = fallasComunesHondaXR150L.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Honda XR150L ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasHondaXR150L.basicas,
            ...herramientasHondaXR150L.diagnostico
        ],

        pasos: falla.diagnostico
    }));


    return {

        tecnologia:
            configuracion.tecnologia,

        motorPrincipal:
            configuracion.motorPrincipal,

        arbolProblemas: {

            motor: {

                titulo: 'Motor 149.2cc OHC y Carburación Keihin',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, DC-CDI y Arranque Dual',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido DC-CDI y Carga de Batería',

                        sintomas: [

                            {
                                titulo: 'El motor no enciende o no da chispa en la bujía',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Comprobación del voltaje de la batería, fusibles, módulo DC-CDI y resistencia de la bobina de alta.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Probador de chispa en línea',
                                    'Juego de herramientas de mano'
                                ],

                                pasos: [
                                    '1. Verificar que la batería de 12V tenga una carga en reposo igual o mayor a 12.5V DC.',
                                    '2. Comprobar que el interruptor del manillar derecho (Engine Stop) esté en posición RUN.',
                                    '3. Verificar la llegada de 12V DC al conector de entrada del módulo CDI.',
                                    '4. Probar continuidad y masa del capuchón y bobina de alta tensión.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 5 Velocidades, Suspensión Pro-Link y Frenos',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague, Cadena y Pro-Link',

                        sintomas: [

                            {
                                titulo: 'Ruidos en la suspensión trasera Pro-Link o patinamiento de embrague',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Ajuste del cable de embrague, lubricación de bieletas Pro-Link y aceite Honda MA.',

                                herramientas: [
                                    'Llaves fijas de 10mm, 12mm y 17mm',
                                    'Grasa de litio / chasis',
                                    'Bandeja de fluido'
                                ],

                                pasos: [
                                    '1. Regular el juego libre en la manigueta de embrague (10mm a 20mm).',
                                    '2. Confirmar el uso de aceite Honda 10W-30 / 20W-50 con certificación JASO MA.',
                                    '3. Desarmar las bieletas del sistema Pro-Link, limpiar el barro y aplicar grasa en las canastillas de agujas.'
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    };
}


// ============================================================
// MODELOS INDIVIDUALES POR AÑO (HONDA XR150L 2015 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN Y EVOLUCIÓN DUAL-SPORT (2015 - 2020) ---

export const hondaXr150l_2015 = {

    marca: 'Honda',

    modelo: 'XR150L',

    anio: 2015,

    tipo: 'Motocicleta On/Off-Road / Dual-Sport',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Honda_XR150L.jpg/1200px-Honda_XR150L.jpg',

    descripcion:
        'Plataforma educativa para Honda XR150L 2015 (Lanzamiento global / Motor 149.2cc OHC 4T refrigerado por aire, carburador Keihin, arranque eléctrico y de patada, transmisión de 5 velocidades y suspensión Pro-Link).',

    informacionHistorica: {

        titulo: 'Honda XR150L 2015',

        generacion: 'Primera generación XR150L OHC',

        familiaMotor: '149.2cc OHC 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T OHC enfriado por aire',

        arquitectura: 'OHC 2 Válvulas accionadas por balancines',

        alimentacion: 'Carburador Keihin de pistón con bomba de aceleración',

        encendido: 'Digital DC-CDI / Arranque dual (Eléctrico + Patada)',

        refrigeracion: 'Enfriado por aire convectivo',

        distribucion: 'Cadena de distribución silenciosa con tensor automático',

        transmision: 'Manual de 5 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Honda XR150L 2015?',

        explicacion:
            'Un motor monocilíndrico con carburador Keihin y distribución OHC de 2 válvulas, optimizado para entregar torque constante a bajas revoluciones y ofrecer máxima resistencia mecánica en trocha.',

        formulaSimple:
            'Aire + gasolina por carburador Keihin + compresión 9.5:1 + chispa DC-CDI + suspensión Pro-Link = 12.1 HP Dual-Sport',

        flujoEnergia: [
            'Tanque de combustible (12.0 Litros)',
            'Llave de gasolina con filtro de malla',
            'Carburador Keihin de pistón',
            'Cámara de combustión OHC',
            'Pistón de aleación ligera',
            'Biela',
            'Cigüeñal con Eje Balancín',
            'Embrague multidisco húmedo',
            'Caja de 5 velocidades',
            'Piñón de salida',
            'Cadena de transmisión',
            'Rueda trasera con rin de radiado 17"'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposHondaXR150L,

    componentesMotor: sistemasMotorHondaXR150L,

    sistemaCombustible: sistemaCombustibleHondaXR150L,

    sistemaEncendido: sistemaEncendidoHondaXR150L,

    refrigeracion: {

        tipo: 'Refrigeración por aire convectivo de alto flujo',

        elementos: [
            'Aletas de disipación térmica en el cilindro',
            'Aletas integradas en la culata OHC',
            'Flujo de aire por desplazamiento On/Off-Road'
        ],

        funcionamiento:
            'El aire ambiental enfría el cilindro y la culata pasando directamente a través de las aletas del bloque.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide con tamiz de malla',

        componentes: [
            'Cárter de aleación de aluminio',
            'Bomba de aceite trocoide',
            'Malla tamiz de succión lavable'
        ],

        funcionamiento:
            'Impulsa aceite Honda Genuine Oil 10W-30 / 20W-50 MA hacia la culata OHC, cigüeñal y caja de velocidades.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol OHC',

        tipo: 'Cadena silenciosa con tensor automático',

        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y el árbol de levas OHC.',

        advertencia:
            'Verifique la luz de calibración de válvulas en frío a 0.08mm (Admisión) y 0.12mm (Escape).'
    },

    diagnosticoGeneral: diagnosticoGeneralHondaXR150L,

    fallasComunes: fallasComunesHondaXR150L,

    herramientas: herramientasHondaXR150L,

    mantenimiento: mantenimientoHondaXR150L,

    cursos: cursosHondaXR150L,

    seguridad: seguridadHondaXR150L,

    glosario: glosarioHondaXR150L,

    reglaPrincipal:
        'CHISPA → FLUJO CARBURADOR → VALVULAS → COMPRESIÓN → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2015,
            {
                tecnologia: '1ª Gen - Motor OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC (12.1 HP / 12.5 Nm)'
            }
        );
    }
};


export const hondaXr150l_2016 = {

    ...hondaXr150l_2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Honda XR150L 2016. Mantenimiento del carburador Keihin, lavado del filtro de aire de espuma y alineación de radios.',

    informacionHistorica: {

        ...hondaXr150l_2015.informacionHistorica,

        titulo: 'Honda XR150L 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2016,
            {
                tecnologia: '1ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


export const hondaXr150l_2017 = {

    ...hondaXr150l_2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Honda XR150L 2017. Calibración de válvulas OHC, diagnóstico del módulo DC-CDI y servicio a la caja de 5 marchas.',

    informacionHistorica: {

        ...hondaXr150l_2016.informacionHistorica,

        titulo: 'Honda XR150L 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2017,
            {
                tecnologia: '1ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


export const hondaXr150l_2018 = {

    ...hondaXr150l_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Honda XR150L 2018. Mantenimiento del sistema articulado Pro-Link, frenos de disco y tensión de cadena.',

    informacionHistorica: {

        ...hondaXr150l_2017.informacionHistorica,

        titulo: 'Honda XR150L 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2018,
            {
                tecnologia: '1ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


export const hondaXr150l_2019 = {

    ...hondaXr150l_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Honda XR150L 2019. Guías de servicio para motor 149.2cc, ajuste de bomba de aceleración y suspensión.',

    informacionHistorica: {

        ...hondaXr150l_2018.informacionHistorica,

        titulo: 'Honda XR150L 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2019,
            {
                tecnologia: '1ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


export const hondaXr150l_2020 = {

    ...hondaXr150l_2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Honda XR150L 2020. Diagnóstico general, limpieza de carburador Keihin y servicio preventivo.',

    informacionHistorica: {

        ...hondaXr150l_2019.informacionHistorica,

        titulo: 'Honda XR150L 2020',

        anio: 2020
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2020,
            {
                tecnologia: '1ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN Y CONSOLIDACIÓN MUNDIAL (2021 - 2026) ---

export const hondaXr150l_2021 = {

    ...hondaXr150l_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Honda XR150L 2021. Actualización de gráficos, optimización del paso de aire en carburador e iluminación.',

    informacionHistorica: {

        ...hondaXr150l_2020.informacionHistorica,

        titulo: 'Honda XR150L 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2021,
            {
                tecnologia: '2ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico (12.1 HP)'
            }
        );
    }
};


export const hondaXr150l_2022 = {

    ...hondaXr150l_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Honda XR150L 2022. Servicio al sistema eléctrico, arranque dual y mantenimiento de la suspensión Pro-Link.',

    informacionHistorica: {

        ...hondaXr150l_2021.informacionHistorica,

        titulo: 'Honda XR150L 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2022,
            {
                tecnologia: '2ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


export const hondaXr150l_2023 = {

    ...hondaXr150l_2022,

    anio: 2023,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Honda_XR150L.jpg/1200px-Honda_XR150L.jpg',

    descripcion:
        'Plataforma educativa para Honda XR150L 2023 (Lanzamiento masivo en el mercado norteamericano / Estándar de emisiones optimizado y carburador Keihin recristalizado).',

    informacionHistorica: {

        titulo: 'Honda XR150L Dual-Sport 2023',

        generacion: 'Segunda generación mundial Dual-Sport',

        familiaMotor: '149.2cc OHC 4T Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T OHC enfriado por aire',

        arquitectura: 'OHC 2 Válvulas',

        alimentacion: 'Carburador Keihin 22mm de pistón con bomba de aceleración',

        encendido: 'Digital DC-CDI / Arranque eléctrico + Patada',

        refrigeracion: 'Enfriado por aire convectivo',

        distribucion: 'Cadena de distribución silenciosa',

        transmision: 'Manual de 5 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2023,
            {
                tecnologia: '2ª Gen - OHC 149.2cc / Carburador Keihin 22mm / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico (12.1 HP / 12.5 Nm)'
            }
        );
    }
};


export const hondaXr150l_2024 = {

    ...hondaXr150l_2023,

    anio: 2024,

    descripcion:
        'Plataforma educativa para Honda XR150L 2024. Diagnóstico de carburación en altitud, regulación de balancines y frenos.',

    informacionHistorica: {

        ...hondaXr150l_2023.informacionHistorica,

        titulo: 'Honda XR150L 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2024,
            {
                tecnologia: '2ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


export const hondaXr150l_2025 = {

    ...hondaXr150l_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Honda XR150L 2025. Mantenimiento preventivo del motor OHC, lubricación de suspensión y embrague.',

    informacionHistorica: {

        ...hondaXr150l_2024.informacionHistorica,

        titulo: 'Honda XR150L 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2025,
            {
                tecnologia: '2ª Gen - OHC 149.2cc / Carburador Keihin / Pro-Link',

                motorPrincipal: '149.2cc OHC Monocilíndrico'
            }
        );
    }
};


export const hondaXr150l_2026 = {

    ...hondaXr150l_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Honda XR150L Dual-Sport 2026. Diagnóstico integral del motor 149.2cc OHC, carburador Keihin de 22mm, arranque dual eléctrico/patada, suspensión trasera Pro-Link y caja de 5 velocidades.',

    informacionHistorica: {

        ...hondaXr150l_2025.informacionHistorica,

        titulo: 'Honda XR150L Dual-Sport 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoHondaXR150L(
            2026,
            {
                tecnologia: '2ª Gen - OHC 149.2cc / Carburador Keihin 22mm / Pro-Link / Arranque Dual',

                motorPrincipal: '149.2cc OHC Monocilíndrico (12.1 HP / 12.5 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE HONDA XR150L
// ============================================================

export const hondaXr150l = {

    marca: 'Honda',

    modelo: 'XR150L',

    tipo: 'Motocicleta On/Off-Road / Dual-Sport',

    imagen:
        'https://publimotosmagazine.nyc3.digitaloceanspaces.com/%E2%81%A0publimotos_tienda_production/uploads/2024/03/Honda-XR-150L-2025-01.webp',

    aniosDisponibles: [
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
    ],

    vehiculosPorAnio: {

        2015: hondaXr150l_2015,

        2016: hondaXr150l_2016,

        2017: hondaXr150l_2017,

        2018: hondaXr150l_2018,

        2019: hondaXr150l_2019,

        2020: hondaXr150l_2020,

        2021: hondaXr150l_2021,

        2022: hondaXr150l_2022,

        2023: hondaXr150l_2023,

        2024: hondaXr150l_2024,

        2025: hondaXr150l_2025,

        2026: hondaXr150l_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
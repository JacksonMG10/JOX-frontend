const sistemasMotorFrontier = [
    {
        nombre: 'Bloque del motor (Serie YD25DDTi / YS23DDTT Bi-Turbo / QR25DE)',
        funcion:
            'Estructura ultra resistente de hierro fundido (diésel) o aleación de aluminio (gasolina) con refuerzo de bancada que soporta altísimas presiones de combustión.',
        fallas: [
            'Fugas de aceite por el retén trasero de cigüeñal (lado caja / volante de inercia)',
            'Fugas de refrigerante por empaques de enfriador de aceite (Oil Cooler)',
            'Sensibilidad al desgaste por usar aceite fuera de especificación (usar 5W-30 Low SAPS ACEA C3 en diésel con DPF)',
            'Deformación de la culata tras episodios de sobrecalentamiento en alta carga'
        ]
    },

    {
        nombre: 'Culata DOHC 16V Common Rail / VVT (QR25DE)',
        funcion:
            'Aloja dobles árboles de levas, inyectores piezoeléctricos Common Rail de hasta 2000 bar y válvulas de alta resistencia.',
        fallas: [
            'Fuga de aceite por el empaque de la tapa de culata',
            'Soplado del empaque de culata tras fallas en la bomba de agua o radiador',
            'Acumulación de hollín en lumbreras de admisión por recirculación EGR',
            'Desgaste en la arandela de cobre de sellado de inyectores diésel'
        ]
    },

    {
        nombre: 'Turbocargador de Geometría Variable (VGT) / Bi-Turbo Intercooler',
        funcion:
            'Comprime el aire de admisión mediante gases de escape. En versiones Bi-Turbo (YS23DDTT), un turbo pequeño actúa a bajas RPM y uno grande a altas RPM.',
        fallas: [
            'Geometría variable (VGT) trabada por acumulación de hollín (código P0299 Underboost)',
            'Fuga de aceite por sellos del eje del turbocargador (humo azul/blanco en el escape)',
            'Fisura o fuga de aire en mangueras reforzadas de intercooler',
            'Falla del actuador de vacío o electrónico del turbo'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Trabajo Pesado (Heavy Duty)',
        funcion:
            'Transforma el par motor diésel en rotación hacia la transmisión manual de 6V o automática de 7V con tracción 4x4 (Shift-on-the-Fly).',
        fallas: [
            'Desgaste en cojinetes de biela y bancada por contaminación de aceite con diésel (por regeneraciones DPF fallidas)',
            'Fuga por retén delantero/trasero de cigüeñal',
            'Juego axial del cigüeñal'
        ]
    },

    {
        nombre: 'Pistones Reforzados con Galería de Enfriamiento por Aceite',
        funcion:
            'Soportan elevadas relaciones de compresión diésel y reciben chorros de aceite en la falda para disipar calor.',
        fallas: [
            'Anillos pegados por sedimentación de hollín o lubricante degradado',
            'Fisura en la corona del pistón por goteo de inyector diésel dañado (lavado de cilindro)',
            'Consumo excesivo de aceite en unidades con severo trabajo pesado'
        ]
    },

    {
        nombre: 'Cadena de Distribución Duplex / Simplex y Tensor Hidráulico',
        funcion:
            'Sincroniza la bomba de alta presión diésel, el cigüeñal y los árboles de levas.',
        fallas: [
            'Estiramiento de la cadena de distribución en motor YD25DDTi (muy común la primera cadena superior)',
            'Sonajero o chasquido metálico en frío en la zona frontal del motor',
            'Tensor hidráulico pegado por formación de lodos por aceite vencido'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración para Trabajo Pesado',
        funcion:
            'Disipa el calor del motor, turbo y enfriador EGR mediante bomba de agua, embrague fan-clutch o electroventiladores auxiliares.',
        fallas: [
            'Fuga en el radiador por vibración o corrosión',
            'Falla en el fan-clutch (embrague viscoso del ventilador del motor)',
            'Termostato pegado en posición cerrada'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Alto Caudal',
        funcion:
            'Abastece de aceite a alta presión hacia los cojinetes, turbocargador, cadena de distribución y toberas de enfriamiento de pistón.',
        fallas: [
            'Testigo de aceite encendido en ralentí por maza de succionador tapada (pasta de carbón)',
            'Filtro de aceite obstruido o sin válvula de alivio adecuada',
            'Fuga en las mangueras/tubos de lubricación del turbo'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE DIÉSEL COMMON RAIL / GASOLINA
// ============================================================

const sistemaCombustibleFrontier = {

    titulo: 'Sistema Inyección Diésel Common Rail Denso/Bosch High Pressure (~2000 Bar) / EFI Gasolina',

    funcionamiento:
        'Una bomba de alta presión (HPFP) accionado por la distribución suministra diésel a la rampa común. La computadora ECM acciona inyectores piezoeléctricos con hasta 5 inyecciones por ciclo para reducir el ruido diésel y optimizar par.',

    componentes: [
        'Tanque de combustible diésel de alta capacidad',
        'Bomba de transferencia / cebador manual (perita en vano motor)',
        'Filtro de diésel principal con separador de agua y sensor WIF',
        'Bomba de alta presión HPFP (Denso / Bosch)',
        'Rampa de alta presión con sensor FPR y válvula SCV',
        'Inyectores piezoeléctricos / inductivos de alta precisión',
        'Sensor de flujo de aire (MAF) de alambre caliente',
        'Válvula de recirculación de gases EGR y enfriador de gases',
        'Módulo de Control del Motor (ECM Nissan)'
    ],

    flujo: [
        '1. La bomba de combustible extrae diésel del tanque pasando por el filtro separador de agua.',
        '2. La bomba de alta presión HPFP eleva la presión hacia el Riel Común (~300 a 2000 bar).',
        '3. La ECM calcula la masa de aire con el MAF y activa la válvula SCV para regular la presión.',
        '4. Los inyectores realizan pre-inyección, inyección principal y post-inyección directa en la cámara.',
        '5. Los gases pasan por la válvula EGR y el filtro de partículas DPF / Catalizador.'
    ],

    diagnostico: [
        'Monitorear la presión deseada vs real de combustible en rampa en vivo con escáner.',
        'Verificar el valor de corrección de inyectores (Inyector Balance) para identificar cilindro fallido.',
        'Drenar el agua acumulada en la trampa del filtro de diésel si enciende el indicador en tablero.',
        'Inspeccionar la válvula SCV (Suction Control Valve) si presenta jaloneos o apagado repentino.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO Y PRECALENTAMIENTO DIÉSEL
// ============================================================

const sistemaEncendidoFrontier = {

    titulo: 'Sistema de Incandescencia / Precalentamiento Diésel (Glow Plugs) y COP Gasolina',

    funcionamiento:
        'En motores diésel YD25 / YS23, un módulo de control de precalentamiento activa bujías de incandescencia cerámicas/metálicas en las cámaras antes del arranque en frío y realiza post-calentamiento para estabilizar el ralentí.',

    componentes: [
        {
            nombre: 'Módulo de Control de Incandescencia (Glow Plug Relay)',
            funcion:
                'Gestiona el tiempo de energización de las bujías incandescentes según la temperatura del motor.'
        },

        {
            nombre: 'Bujías de Incandescencia Rápida (Glow Plugs)',
            funcion:
                'Alcanzan más de 900°C en segundos para facilitar el encendido del diésel en frío.'
        },

        {
            nombre: 'Bobinas COP (Versiones Gasolina QR25DE)',
            funcion:
                'Entregan la chispa de alto voltaje directamente sobre cada bujía de iridio.'
        },

        {
            nombre: 'Batería de Alto Rango CCA (Cold Cranking Amps)',
            funcion:
                'Proporciona la alta corriente requerida por el motor de arranque diésel de alta compresión.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar la carga de la batería de 12V (mínimo 700+ CCA en motores diésel).',
        'Comprobar la continuidad y resistencia de cada bujía de incandescencia (0.8 a 1.5 Ω).',
        'Escanear códigos DTC en ECM buscando fallas en relé de precalentamiento (P0670 / P0671-P0674).',
        'Probar la señal del sensor de posición de cigüeñal (CKP) y árbol de levas (CMP).',
        'Verificar el estado del fusible principal de incandescencia (60A - 80A).'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS DIÉSEL
// ============================================================

const cicloCuatroTiemposFrontier = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende. Las válvulas de admisión se abren y el turbocargador fuerza aire puro comprimido al interior del cilindro.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Llenar el cilindro con la mayor cantidad de aire comprimido e interenfriado.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo aire puro (relación ~15.4:1 a 16.5:1). El aire alcanza más de 600°C debido a la alta compresión.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la temperatura del aire por encima del punto de autoencendido del diésel.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Inyección Directa Common Rail',

        descripcion:
            'El inyector pulveriza diésel a altísima presión directamente sobre la cavidad del pistón. El diésel se autoinflama y la expansión empuja el pistón con gran torque.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Desarrollar el elevado par motor (hasta 450 Nm) característico de la Nissan Frontier.'
    },

    {
        numero: 4,
        nombre: 'Escape y Regeneración DPF',

        descripcion:
            'El pistón sube impulsando los gases hacia el colector para mover la turbina del turbocargador VGT y luego atravesar el filtro DPF.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Vaciar el cilindro e impulsar el turbocargador.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasFrontier = {

    basicas: [
        'Juego de llaves y copas milimétricas reforzadas (8mm, 10mm, 12mm, 13mm, 14mm, 17mm, 19mm, 21mm, 22mm, 24mm, 27mm)',
        'Destornilladores de pala, estrella y extractor de remaches de plástico/protector de cárter',
        'Llaves Torx y Allen de impacto',
        'Gato de patín de 3 toneladas y torres de elevación para camión/pickup con apoyo de goma',
        'Llave de filtro de aceite de cazoleta de 14 flautas / abrazadera de cadena',
        'Bandeja de recolección de fluidos de gran capacidad (10 litros) y embudo'
    ],

    diagnostico: [
        'Escáner OBD2 avanzado / Nissan Consult-III Plus con lectura de ECM, TCM, BCM, ABS, 4WD, DPF',
        'Multímetro digital de RMS verdadero',
        'Manómetro de presión de combustible de alta presión (Common Rail 2000 bar) y baja presión',
        'Probador de baterías de 12V de alto rendimiento (CCA / AGM / EFB)',
        'Compresímetro para motores diésel con acoples para bujía de incandescencia'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm y lb-ft (1/4, 3/8 y 1/2 pulgada)',
        'Herramientas de alineación de distribución y trabador de volante para motores Nissan YD25 / YS23',
        'Extractor de inyectores diésel y escariador de asiento de inyector',
        'Escáner con función de regeneración forzada de DPF y reset de valores de bomba SCV'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralFrontier = {

    principio:
        'Diagnóstico estructural. En unidades diésel, verificar estado de batería de alto CCA, sensor WIF de agua en diésel y lecturas de presión de rampa antes de desmontar componentes.',

    secuencia: [

        '1. Entrevistar al usuario sobre las condiciones de carga/trabajo y revisar los testigos activos en el tablero.',

        '2. Conectar escáner (Consult-III Plus u OBD2) y realizar un autoescaneo de todos los módulos (ECM, TCM, 4WD, DPF, ABS).',

        '3. Anotar códigos DTC registrados y revisar datos de cuadro congelado (Freeze Frame).',

        '4. Medir la tensión de la batería de 12V en reposo (mínimo 12.4V) y caídas de voltaje en masa del chasis/motor.',

        '5. Analizar datos en tiempo real (RPM, presión de rampa deseada vs real, flujo MAF, saturación DPF en gramos).',

        '6. Inspeccionar tuberías de combustible, filtro diésel, mangueras de turbo e intercooler.',

        '7. Realizar pruebas mecánicas físicas (Prueba de retorno de inyectores, presión de compresión).',

        '8. Reemplazar o reparar el componente defectuoso con repuestos de especificación OEM Nissan.',

        '9. Borrar los códigos de error almacenados en la memoria de la ECM.',

        '10. Ejecutar procedimientos de aprendizaje (reajuste de válvula SCV, regeneración DPF o calibración de inyectores).',

        '11. Realizar prueba de ruta en pendientes/carga para confirmar el resultado.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesFrontier = [

    {
        titulo: 'Pérdida de potencia, jaloneo en aceleración o código P0089 / P0087 (Presión de Rampa)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Válvula de control de succión (SCV) de la bomba de alta presión desgastada o atascada',
            'Filtro de combustible diésel obstruido o saturado con parafinas/suciedad',
            'Inyector diésel con retorno excesivo de combustible hacia el tanque',
            'Presencia de agua en el filtro separador de diésel'
        ],

        diagnostico: [
            'Verificar la presión deseada vs real de combustible en la rampa con el escáner.',
            'Reemplazar el filtro de diésel principal e inspeccionar presencia de agua o virutas metálicas.',
            'Realizar la prueba de retorno de inyectores con tubos graduados en ralentí y a 2500 RPM.',
            'Reemplazar la válvula SCV y realizar el procedimiento de aprendizaje con escáner.'
        ]
    },

    {
        titulo: 'Modo de protección (Limp Mode), falta de aceleración y testigo DPF encendido',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Filtro de partículas DPF saturado con hollín (>70% de obstrucción)',
            'Sensor de presión diferencial del DPF averiado o con mangueras tapadas',
            'Uso de aceite de motor no apto para DPF (debe ser Low SAPS ACEA C3)',
            'Múltiples trayectos cortos que impiden la regeneración pasiva del DPF'
        ],

        diagnostico: [
            'Escanear el nivel de hollín acumulado en el DPF en gramos.',
            'Verificar las lecturas del sensor de presión diferencial y sensores de temperatura de escape.',
            'Ejecutar procedimiento de regeneración forzada de DPF mediante escáner en lugar abierto.',
            'Reemplazar aceite de motor por lubricante 5W-30 especificación ACEA C3.'
        ]
    },

    {
        titulo: 'Humo negro denso por el escape al acelerar en pendientes',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Fuga de aire comprimido por rotura de manguera de intercooler o abrazadera suelta',
            'Válvula EGR trancada en posición abierta',
            'Filtro de aire de motor extremadamente saturado de polvo',
            'Inyector diésel goteando o pulverizando incorrectamente'
        ],

        diagnostico: [
            'Inspeccionar grietas o manchas de aceite en las mangueras de hule desde el turbo al intercooler.',
            'Desmontar y limpiar la válvula EGR y el pasaje del colector.',
            'Revisar el estado del filtro de aire.',
            'Verificar balance de inyectores con escáner.'
        ]
    },

    {
        titulo: 'Sonajero o chasquido metálico en la zona frontal del motor en caliente/frío (Motor YD25)',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Estiramiento de la cadena de distribución primaria o secundaria',
            'Tensor hidráulico de cadena pegado o gastado',
            'Guías y patines de cadena de distribución desgastados'
        ],

        diagnostico: [
            'Retirar la tapa de distribución superior para inspeccionar el juego y holgura de la cadena.',
            'Verificar el recorrido del émbolo del tensor hidráulico.',
            'Reemplazar el kit de distribución completo (cadenas, tensores, guías y piñones) si se confirma holgura.'
        ]
    },

    {
        titulo: 'Golpeteo o vibración en la transmisión/chasis al arrancar o cambiar de marcha (4x4)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Crucetas de cardán/árbol de transmisión secas o con holgura',
            'Soporte/rodamiento central del cardán (Puente cardán) desgastado',
            'Soportes de motor o transmisión cedidos'
        ],

        diagnostico: [
            'Inspeccionar el juego axial y radial en las crucetas del cardán delantero y trasero.',
            'Revisar grietas en la goma del rodamiento central del cardán.',
            'Verificar la lubricación con grasa para chasis en los puntos del cardán.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoFrontier = {

    objetivo:
        'Garantizar la confiabilidad extrema en trabajo pesado, proteger el sistema de inyección Common Rail, turbocargador y alargar la vida útil de la transmisión y diferenciales 4x4.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 7.500 km a 10.000 km. En motores diésel con DPF usar estrictamente 5W-30 ACEA C3 Low SAPS. En motores diésel sin DPF usar 10W-40 / 15W-40 API CI-4. En motores gasolina usar 5W-30 / 10W-30 API SP.'
        },

        {
            nombre: 'Filtro de combustible diésel (Filtro trampa)',
            accion:
                'Reemplazar el filtro de diésel cada 10.000 km. Drenar la trampa de agua cada 5.000 km.'
        },

        {
            nombre: 'Filtro de aire de motor',
            accion:
                'Inspeccionar en cada cambio de aceite; reemplazar cada 10.000 km a 15.000 km (reducir intervalo si transita por caminos de tierra/polvo).'
        },

        {
            nombre: 'Aceite de Transmisión Manual y Cajas de Transferencia 4x4',
            accion:
                'Reemplazar fluido de caja manual (75W-85 API GL-4) y caja de transferencia ATF Matic D / 75W-90 cada 40.000 km.'
        },

        {
            nombre: 'Aceite de Diferenciales Delantero y Trasero (LSD / Bloqueo)',
            accion:
                'Reemplazar aceite de diferencial delantero y trasero (80W-90 / 75W-90 API GL-5 / LSD) cada 40.000 km o tras vadear ríos.'
        },

        {
            nombre: 'Fluido de Transmisión Automática de 7 Velocidades',
            accion:
                'Inspeccionar nivel con escáner; reemplazar fluido especificación Nissan Matic S cada 60.000 km.'
        },

        {
            nombre: 'Limpieza preventiva de Válvula EGR e Intercooler',
            accion:
                'Efectuar limpieza de depósitos de carbón en la válvula EGR y verificar ausencia de aceite en el intercooler cada 40.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadFrontier = [

    'NUNCA abra el sistema de tuberías de alta presión del Riel Común (Common Rail) con el motor encendido o recién apagado; la presión supera los 1800 bar y puede penetrar la piel.',

    'Sostenga la camioneta utilizando torres de seguridad de alta capacidad (mínimo 3 toneladas) apoyadas sobre los largueros del chasis rígido antes de retirar ruedas o trabajar abajo.',

    'Durante el procedimiento de regeneración forzada de DPF, el sistema de escape alcanza temperaturas superiores a 600°C; asegúrese de ubicar el vehículo en un espacio abierto alejado de materiales inflamables.',

    'No retire el tapón del radiador o depósito de expansión con el motor caliente para evitar severas quemaduras con refrigerante a alta temperatura.',

    'Desconecte los bornes de la batería de 12V antes de manipular el alternador, motor de arranque o arneses de la computadora ECM.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosFrontier = [

    {
        id: 1,

        titulo: 'Introducción a la Nissan Frontier D40 / D23 NP300',

        nivel: 'Básico',

        descripcion:
            'Aprende la arquitectura del chasis rígido en C, diferenciales, motores YD25, YS23 y QR25, fusileras y puntos de servicio.',

        temas: [
            'Evolución de plataformas D40 y D23 (NP300 / Frontier)',
            'Identificación de motores YD25DDTi, YS23DDTT Bi-Turbo y QR25DE',
            'Ubicación de fusileras vano motor y cabina',
            'Especificaciones de lubricantes (ACEA C3, Nissan Matic S, GL-5 LSD)'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización y Mantenimiento de la Distribución YD25 / YS23',

        nivel: 'Intermedio',

        descripcion:
            'Procedimiento para el reemplazo y calado de las cadenas de distribución, bombas de aceite y tensores hidráulicos.',

        temas: [
            'Marcas de tiempo en la cadena primaria y secundaria YD25',
            'Sincronización de la cadena del motor YS23 Bi-Turbo',
            'Verificación de presión de aceite y bomba trocoide',
            'Torques de culata y ajuste de tapas'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Diésel Common Rail Denso/Bosch y Sistema DPF',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico del sistema Riel Común, bomba HPFP, válvula SCV, inyectores piezoeléctricos y filtro DPF con escáner.',

        temas: [
            'Diagnóstico de presiones de rampa y sustitución de Válvula SCV',
            'Prueba de balance de retorno de inyectores diésel',
            'Diagnóstico del filtro de partículas DPF y sensores de presión/temperatura',
            'Regeneración forzada de DPF por escáner Consult-III Plus'
        ]
    },

    {
        id: 4,

        titulo: 'Sistemas 4x4 (Shift-on-the-Fly), Transmisiones y Diferenciales',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico de la caja de transferencia 4x4 electrónica, transmisión automática de 7V, caja manual de 6V y diferenciales LSD/Bloqueo.',

        temas: [
            'Operación del actuador eléctrico de la caja transfer 4WD',
            'Mantenimiento y procedimiento de fluido en transmisión automática 7V',
            'Ajuste y diagnóstico de diferenciales trasero con bloqueo/LSD',
            'Diagnóstico de suspensión trasera multilink vs muelles helicoidales'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioFrontier = [

    {
        termino: 'YD25DDTi',
        significado:
            'Motor Nissan 2.5 Litros 4 cilindros diésel, 16V DOHC, turbocargador e inyección directa Common Rail.'
    },

    {
        termino: 'YS23DDTT',
        significado:
            'Motor 2.3 Litros 4 cilindros diésel desarrollado en la alianza Nissan-Renault, con doble turbocargador (Bi-Turbo) e intercooler.'
    },

    {
        termino: 'DPF',
        significado:
            'Diesel Particulate Filter (Filtro de Partículas Diésel). Dispositivo instalado en el escape para atrapar y quemar el hollín.'
    },

    {
        termino: 'SCV',
        significado:
            'Suction Control Valve (Válvula de Control de Succión). Solenoide montado en la bomba de alta presión que regula la entrada de diésel a la rampa.'
    },

    {
        termino: 'Shift-on-the-Fly',
        significado:
            'Sistema de tracción 4x4 que permite conmutar entre 2WD y 4H (4x4 Alta) en movimiento mediante una perilla giratoria.'
    },

    {
        termino: 'VGT / VNT',
        significado:
            'Variable Geometry Turbocharger (Turbocargador de Geometría Variable) que ajusta los álabes según las RPM del motor.'
    },

    {
        termino: 'Consult-III Plus',
        significado:
            'Software y herramienta de diagnóstico oficial de la marca Nissan para la lectura y programación de módulos.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoFrontier(anio, configuracion) {

    const sintomasMapeados = fallasComunesFrontier.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Nissan Frontier ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasFrontier.basicas,
            ...herramientasFrontier.diagnostico
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

                titulo: 'Motor Diésel / Gasolina y Gestión Electrónica',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            inyeccion: {

                titulo: 'Sistema de Inyección Common Rail y DPF',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Rampa Common Rail y Válvula SCV',

                        sintomas: [

                            {
                                titulo: 'Pérdida de fuerza bajo carga o código P0089 de presión de rampa',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Revisión de la válvula SCV, filtro de diésel y prueba de retorno de inyectores.',

                                herramientas: [
                                    'Escáner OBD2 / Consult-III Plus',
                                    'Manómetro de presión diésel',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Conectar el escáner y monitorear el parámetro "Fuel Rail Pressure Target vs Actual".',
                                    '2. Reemplazar el filtro de diésel e inspeccionar ausencia de sedimentos o agua.',
                                    '3. Probar el balance de retorno de inyectores Common Rail.',
                                    '4. Reemplazar la válvula de control de succión SCV y calibrar valores aprendidos con escáner.'
                                ]
                            }
                        ]
                    }
                ]
            },

            traccion: {

                titulo: 'Sistema 4x4, Transmisión y Diferenciales',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Tracción 4WD y Cajas',

                        sintomas: [

                            {
                                titulo: 'El indicador de 4WD parpadea en el tablero y no acopla la tracción total',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Análisis del actuador eléctrico de la caja transfer, fusibles y sensores de posición 4WD.',

                                herramientas: [
                                    'Escáner OBD2 / Consult-III Plus',
                                    'Multímetro digital',
                                    'Juego de llaves'
                                ],

                                pasos: [
                                    '1. Escanear el módulo de tracción 4WD buscando códigos DTC almacenados.',
                                    '2. Inspeccionar la continuidad del arnés y conectores del actuador de la caja de transferencia.',
                                    '3. Verificar los interruptores/sensores de posición montados en la caja de transferencia.',
                                    '4. Comprobar el nivel y estado del fluido en la caja de transferencia.'
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
// MODELOS INDIVIDUALES POR AÑO (NISSAN FRONTIER 2012 - 2026)
// ============================================================

// --- 2ª GENERACIÓN FRONTIER (D40 2012 - 2015) ---

export const nissanFrontier2012 = {

    marca: 'Nissan',

    modelo: 'Frontier',

    anio: 2012,

    tipo: 'Pickup / Camioneta 4x4 / 4x2',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nissan_Frontier_PRO-4X_Crew_Cab.jpg/1200px-Nissan_Frontier_PRO-4X_Crew_Cab.jpg',

    descripcion:
        'Plataforma educativa para Nissan Frontier 2012 (Chasis D40 / Motores 2.5L YD25DDTi Turbo Diésel de 172 HP o 2.5L QR25DE Gasolina).',

    informacionHistorica: {

        titulo: 'Nissan Frontier 2012 (Chasis D40)',

        generacion: 'Segunda generación (Plataforma D40)',

        familiaMotor: '2.5L YD25DDTi Turbo Diésel / 2.5L QR25DE 16V Gasolina',

        tipoMotor: '4 cilindros en línea e Inyección Directa Common Rail / EFI',

        arquitectura: 'DOHC 16 Válvulas con VGT Intercooler',

        alimentacion: 'Inyección Directa Common Rail Denso / EFI',

        encendido: 'Precalentamiento rápido diésel / COP Gasolina',

        refrigeracion: 'Refrigeración presurizada con fan-clutch',

        distribucion: 'Cadena de distribución de alta resistencia',

        transmision: 'Manual de 6 velocidades / Automática de 5 velocidades / Tracción 4x4 Shift-on-the-Fly'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Nissan Frontier 2012?',

        explicacion:
            'Un motor robusto de 4 cilindros y 2.5 Litros turbo diésel intercooler con inyección Riel Común diseñado para entregar elevado par desde muy bajas revoluciones.',

        formulaSimple:
            'Aire comprimido VGT + diésel a alta presión + compresión elevada = gran capacidad de carga y arrastre',

        flujoEnergia: [
            'Tanque de combustible',
            'Filtro trampa de diésel',
            'Bomba de alta presión HPFP',
            'Rampa Common Rail (1800 bar)',
            'Inyectores piezoeléctricos',
            'Cámara de combustión',
            'Pistón con galería de enfriamiento',
            'Cigüeñal heavy duty',
            'Embrague / Convertidor de torque',
            'Caja manual 6V / Automática 5V',
            'Caja transfer 4WD',
            'Diferenciales',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposFrontier,

    componentesMotor: sistemasMotorFrontier,

    sistemaCombustible: sistemaCombustibleFrontier,

    sistemaEncendido: sistemaEncendidoFrontier,

    refrigeracion: {

        tipo: 'Refrigeración presurizada con embrague viscoso fan-clutch',

        elementos: [
            'Radiador de celda gruesa para camioneta',
            'Bomba de agua impulsada por correa de accesorios',
            'Embrague viscoso Fan-Clutch',
            'Termostato de doble paso',
            'Vaso de expansión transparente'
        ],

        funcionamiento:
            'El líquido refrigerante absorbe el calor extremo del bloque y turbocargador para disiparlo por el radiador enfriado por el ventilador de fan-clutch.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide',

        componentes: [
            'Cárter de aleación reforzado',
            'Bomba de aceite de alto flujo',
            'Filtro de aceite roscado de gran capacidad',
            'Enfriador de aceite (Oil Cooler)'
        ],

        funcionamiento:
            'Impulsa lubricante 10W-40 / 15W-40 hacia cojinetes, turbo y toberas de enfriamiento de pistones.'
    },

    distribucion: {

        titulo: 'Distribución por cadena',

        tipo: 'Doble cadena metálica silenciosa con tensores hidráulicos',

        funcion:
            'Mantiene la sincronización entre el cigüeñal, bomba de alta presión y árboles de levas.',

        advertencia:
            'Inspeccione posibles sonajeros en frío producidos por estiramiento de cadena o desgaste en patines.'
    },

    diagnosticoGeneral: diagnosticoGeneralFrontier,

    fallasComunes: fallasComunesFrontier,

    herramientas: herramientasFrontier,

    mantenimiento: mantenimientoFrontier,

    cursos: cursosFrontier,

    seguridad: seguridadFrontier,

    glosario: glosarioFrontier,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2012,
            {
                tecnologia: '2ª Gen D40 - Common Rail YD25DDTi / QR25DE',

                motorPrincipal: '2.5L Turbo Diésel (172 HP / 403 Nm) / 2.5L Gasolina'
            }
        );
    }
};


export const nissanFrontier2013 = {

    ...nissanFrontier2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2013. Diagnóstico de inyección Common Rail, válvula SCV y suspensión trasera de muelles.',

    informacionHistorica: {

        ...nissanFrontier2012.informacionHistorica,

        titulo: 'Nissan Frontier 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2013,
            {
                tecnologia: '2ª Gen D40 - Common Rail YD25DDTi',

                motorPrincipal: '2.5L Turbo Diésel YD25'
            }
        );
    }
};


export const nissanFrontier2014 = {

    ...nissanFrontier2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2014. Mantenimiento del turbo VGT, cadena de distribución y tracción 4x4.',

    informacionHistorica: {

        ...nissanFrontier2013.informacionHistorica,

        titulo: 'Nissan Frontier 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2014,
            {
                tecnologia: '2ª Gen D40 - Common Rail YD25DDTi',

                motorPrincipal: '2.5L Turbo Diésel YD25'
            }
        );
    }
};


export const nissanFrontier2015 = {

    ...nissanFrontier2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2015. Cierre de la generación D40 / Guías de servicio técnico y diagnósticos.',

    informacionHistorica: {

        ...nissanFrontier2014.informacionHistorica,

        titulo: 'Nissan Frontier 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2015,
            {
                tecnologia: '2ª Gen D40 - Common Rail YD25DDTi',

                motorPrincipal: '2.5L Turbo Diésel YD25'
            }
        );
    }
};


// --- 3ª GENERACIÓN FRONTIER / NP300 (D23 2016 - 2026) ---

export const nissanFrontier2016 = {

    ...nissanFrontier2015,

    anio: 2016,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nissan_NP300_Navara_2.3_dCi_4x4_Doble_Cabina_N-Connecta_2016_%28160427-001%29.jpg/1200px-Nissan_NP300_Navara_2.3_dCi_4x4_Doble_Cabina_N-Connecta_2016_%28160427-001%29.jpg',

    descripcion:
        'Plataforma educativa para Nissan Frontier 2016 (Lanzamiento de la 3ª Generación D23 / NP300 / Nueva suspensión trasera multilink de 5 brazos, chasis C cerrado y motores YD25 / YS23 Bi-Turbo).',

    informacionHistorica: {

        titulo: 'Nissan Frontier 2016 (Chasis D23 / NP300)',

        generacion: 'Tercera generación (Plataforma D23 NP300)',

        familiaMotor: '2.5L YD25DDTi High/Mid Output / 2.3L YS23DDTT Bi-Turbo Diésel / 2.5L QR25DE Gasolina',

        tipoMotor: '4 cilindros en línea Diésel Common Rail Bi-Turbo o Mono-Turbo',

        arquitectura: 'DOHC 16 Válvulas con VGT Intercooler / Bi-Turbo',

        alimentacion: 'Inyección Directa Common Rail Bosch / Denso 2000 bar',

        encendido: 'Incandescencia diésel rápida / COP Gasolina',

        refrigeracion: 'Refrigeración de alto flujo presurizada',

        distribucion: 'Cadena de distribución de bajo rozamiento',

        transmision: 'Manual de 6 velocidades / Automática de 7 velocidades / Tracción 4x4 electrónica'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2016,
            {
                tecnologia: '3ª Gen D23 NP300 - YD25 / YS23 Bi-Turbo / Suspension Multilink',

                motorPrincipal: '2.5L YD25 (187 HP / 450 Nm) / 2.3L Bi-Turbo YS23'
            }
        );
    }
};


export const nissanFrontier2017 = {

    ...nissanFrontier2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2017. Mantenimiento del filtro DPF, transmisión de 7V y sistema 4x4.',

    informacionHistorica: {

        ...nissanFrontier2016.informacionHistorica,

        titulo: 'Nissan Frontier 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2017,
            {
                tecnologia: '3ª Gen D23 NP300 - Diésel Common Rail Bi-Turbo / DPF',

                motorPrincipal: '2.5L YD25 / 2.3L YS23 Bi-Turbo'
            }
        );
    }
};


export const nissanFrontier2018 = {

    ...nissanFrontier2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2018. Diagnóstico de inyectores, válvula SCV y suspensión multilink.',

    informacionHistorica: {

        ...nissanFrontier2017.informacionHistorica,

        titulo: 'Nissan Frontier 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2018,
            {
                tecnologia: '3ª Gen D23 NP300 - Common Rail / DPF',

                motorPrincipal: '2.5L YD25 / 2.3L YS23'
            }
        );
    }
};


export const nissanFrontier2019 = {

    ...nissanFrontier2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2019. Guías de servicio técnico, aceite 5W-30 ACEA C3 y transmisión automática 7V.',

    informacionHistorica: {

        ...nissanFrontier2018.informacionHistorica,

        titulo: 'Nissan Frontier 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2019,
            {
                tecnologia: '3ª Gen D23 NP300 - Common Rail Bi-Turbo',

                motorPrincipal: '2.5L YD25 / 2.3L YS23 Bi-Turbo'
            }
        );
    }
};


export const nissanFrontier2020 = {

    ...nissanFrontier2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2020. Mantenimiento general, sistema de frenos y diagnósticos diésel.',

    informacionHistorica: {

        ...nissanFrontier2019.informacionHistorica,

        titulo: 'Nissan Frontier 2020',

        anio: 2020
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2020,
            {
                tecnologia: '3ª Gen D23 NP300 - Common Rail Bi-Turbo',

                motorPrincipal: '2.5L YD25 / 2.3L YS23'
            }
        );
    }
};


export const nissanFrontier2021 = {

    ...nissanFrontier2020,

    anio: 2021,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2021_Nissan_Frontier_PRO-4X_front.jpg/1200px-2021_Nissan_Frontier_PRO-4X_front.jpg',

    descripcion:
        'Plataforma educativa para Nissan Frontier 2021 (Facelift D23 / Introducción del diseño PRO-4X, paquete Nissan Intelligent Mobility ADAS y aislamiento acústico reforzado).',

    informacionHistorica: {

        ...nissanFrontier2020.informacionHistorica,

        titulo: 'Nissan Frontier 2021 (Facelift PRO-4X)',

        anio: 2021,

        modeloHistorico: 'Frontier D23 Facelift / PRO-4X'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2021,
            {
                tecnologia: '3ª Gen Facelift - PRO-4X / ADAS / Bi-Turbo Diésel',

                motorPrincipal: '2.5L YD25 (187 HP) / 2.3L YS23 Bi-Turbo (187 HP)'
            }
        );
    }
};


export const nissanFrontier2022 = {

    ...nissanFrontier2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2022. Diagnóstico del sistema DPF, tracción 4x4 y transmisión automática de 7V.',

    informacionHistorica: {

        ...nissanFrontier2021.informacionHistorica,

        titulo: 'Nissan Frontier 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2022,
            {
                tecnologia: '3ª Gen Facelift - PRO-4X / Common Rail Bi-Turbo',

                motorPrincipal: '2.5L YD25 / 2.3L YS23 Bi-Turbo'
            }
        );
    }
};


export const nissanFrontier2023 = {

    ...nissanFrontier2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2023. Guías de mantenimiento para flotas y trabajo pesado.',

    informacionHistorica: {

        ...nissanFrontier2022.informacionHistorica,

        titulo: 'Nissan Frontier 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2023,
            {
                tecnologia: '3ª Gen Facelift - Common Rail Bi-Turbo / DPF',

                motorPrincipal: '2.5L YD25 / 2.3L YS23'
            }
        );
    }
};


export const nissanFrontier2024 = {

    ...nissanFrontier2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2021_Nissan_Frontier_PRO-4X_front.jpg/1200px-2021_Nissan_Frontier_PRO-4X_front.jpg',

    descripcion:
        'Plataforma educativa para Nissan Frontier 2024 (Ediciones PRO-4X, Platinum y XE / Motores Diésel Bi-Turbo).',

    informacionHistorica: {

        ...nissanFrontier2023.informacionHistorica,

        titulo: 'Nissan Frontier 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2024,
            {
                tecnologia: '3ª Gen Facelift - Common Rail Bi-Turbo 190 HP',

                motorPrincipal: '2.5L YD25 / 2.3L YS23 Bi-Turbo'
            }
        );
    }
};


export const nissanFrontier2025 = {

    ...nissanFrontier2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2025. Diagnóstico electrónico con Consult-III Plus, regeneración DPF y escaneo.',

    informacionHistorica: {

        ...nissanFrontier2024.informacionHistorica,

        titulo: 'Nissan Frontier 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2025,
            {
                tecnologia: '3ª Gen Facelift - Common Rail / DPF / 4WD',

                motorPrincipal: '2.5L YD25 / 2.3L YS23 Bi-Turbo'
            }
        );
    }
};


export const nissanFrontier2026 = {

    ...nissanFrontier2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Nissan Frontier 2026. Diagnóstico integral de motor diésel Common Rail, turbocargador VGT, caja automática 7V y tracción 4x4.',

    informacionHistorica: {

        ...nissanFrontier2025.informacionHistorica,

        titulo: 'Nissan Frontier 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFrontier(
            2026,
            {
                tecnologia: '3ª Gen Facelift - Common Rail Bi-Turbo 187 HP / DPF',

                motorPrincipal: '2.5L YD25 / 2.3L YS23 Bi-Turbo (187 HP / 450 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE NISSAN FRONTIER
// ============================================================

export const nissanFrontier = {

    marca: 'Nissan',

    modelo: 'Frontier',

    tipo: 'Pickup / Camioneta 4x4 / 4x2',

    imagen:
        'https://www.nissan-cdn.net/content/dam/Nissan/co/prensa/2023/nissan-frotnier-2024-una-camioneta-pick-up-con-mucho-estilo/nissan-frotnier-2024-una-camioneta-pick-up-con-mucho-estilo-desktop.webp.ximg.l_12_m.smart.webp',

    aniosDisponibles: [
        2012,
        2013,
        2014,
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

        2012: nissanFrontier2012,

        2013: nissanFrontier2013,

        2014: nissanFrontier2014,

        2015: nissanFrontier2015,

        2016: nissanFrontier2016,

        2017: nissanFrontier2017,

        2018: nissanFrontier2018,

        2019: nissanFrontier2019,

        2020: nissanFrontier2020,

        2021: nissanFrontier2021,

        2022: nissanFrontier2022,

        2023: nissanFrontier2023,

        2024: nissanFrontier2024,

        2025: nissanFrontier2025,

        2026: nissanFrontier2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
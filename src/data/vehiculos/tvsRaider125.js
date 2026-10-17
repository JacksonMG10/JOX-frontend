const sistemasMotorTVSRaider125 = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie 124.8cc 3V EcoThrust Monocilíndrico 4T)',
        funcion:
            'Estructura compacta de aleación de aluminio con tecnología Air & Oil Cooled (Refrigeración por aire y enfriador de aceite) y camisa de alta disipación térmica.',
        fallas: [
            'Fugas de aceite por sellos de tapa de culata o empaque del cárter derecho',
            'Desgaste en la camisa por operar con nivel bajo de aceite (requiere 1000ml TVS TRU4 Synthetic 10W-30 JASO MA2)',
            'Sensibilidad a sobrecalentamiento si las aletas del motor o el pequeño radiador de aceite están obstruidos por fango',
            'Humo azul por el escape por desgaste de sellos de válvula o anillos tras intervalos de mantenimiento extendidos'
        ]
    },

    {
        nombre: 'Culata SOHC 3 Válvulas (2 de Admisión y 1 de Escape)',
        funcion:
            'Aloja 3 válvulas impulsadas por balancines con rodamientos de agujas para lograr un flujo de admisión optimizado y mejor eficiencia de llenado.',
        fallas: [
            'Sonido de chasquido o golpeteo suave por luz de válvulas fuera de norma (Admisión: 0.06mm / Escape: 0.08mm)',
            'Dificultad de encendido o pérdida de ralentí por válvulas ajustadas sin tolerancia',
            'Pérdida de compresión por acumulación de carbón en los asientos de las dos válvulas de admisión',
            'Fuga de compresión por daño en el empaque de culata'
        ]
    },

    {
        nombre: 'Cigüeñal y Generador iGO / ISG (Integrated Starter Generator)',
        funcion:
            'Convierte el movimiento del pistón en rotación y funciona como motor de arranque ultrasilencioso (sin piñón Bendix) e ISG para el sistema IntelliGO (Auto Stop-Start).',
        fallas: [
            'Falla en el arranque silencioso ISG si el voltaje de la batería baja de 12.4V',
            'Fuga de aceite por el retén del cigüeñal en el lado izquierdo (cubierta del estator)',
            'Vibración anormal por desgaste en los rodamientos de apoyo del cigüeñal'
        ]
    },

    {
        nombre: 'Pistón de Baja Fricción con Recubrimiento Especial',
        funcion:
            'Transmite el empuje de la combustión a la biela minimizando las pérdidas mecánicas para maximizar el rendimiento EcoThrust.',
        fallas: [
            'Anillos rascadores pegados por sedimentación de aceite degradado',
            'Pérdida de potencia y respuesta lenta al acelerar',
            'Rayado de falda por partículas de polvo si no se limpia el filtro de aire'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático Hidráulico/Muelle',
        funcion:
            'Sincroniza la rotación del cigüeñal con el árbol de levas SOHC de 3 válvulas.',
        fallas: [
            'Sonajero metálico en el lado izquierdo del cilindro durante arranques en frío',
            'Trabamiento del tensor automático de cadena de distribución',
            'Desgaste de los patines guía de caucho sintético dentro del túnel de distribución'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración Mixta (Aire Convectivo + Enfriador de Aceite Oil Cooler)',
        funcion:
            'Mantiene la temperatura ideal pasando el aceite caliente por un pequeño radiador externo suplementado por el flujo de aire directo.',
        fallas: [
            'Fugas de aceite en los acoples o mangueras hacia el enfriador de aceite (Oil Cooler)',
            'Pérdida de viscosidad del aceite por obstrucción de radiador en trayectos pesados'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba Trocoide y Filtro de Papel Reemplazable',
        funcion:
            'Impulsa aceite a presión a través de un filtro de papel recambiable hacia la culata 3V, el radiador de aceite y la transmisión de 5 marchas.',
        fallas: [
            'Falta de lubricación en la culata por colocar el filtro de papel al revés',
            'Malla tamiz de succión obstruida en el cárter por residuos de sellador',
            'Patinamiento del embrague por usar aceites con aditivos de fricción de autos (No JASO MA2)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleTVSRaider125 = {

    titulo: 'Sistema de Inyección Electrónica Ecothrust Fi / Modos de Manejo Eco y Power',

    funcionamiento:
        'La bomba de gasolina presuriza la línea a ~2.9 bar. La ECU gestiona la entrega de combustible ajustando el mapa de inyección según el modo seleccionado (Eco o Power) mediante sensores TPS, MAP, IAT, EOT y O2.',

    componentes: [
        'Tanque de combustible de 10.0 Litros con diseño deportivo y compartimento interno',
        'Módulo de bomba de gasolina de alta presión sumergida con filtro de succión',
        'Cuerpo de aceleración con inyector multipunto de pulverización fina',
        'Selector de modos de conducción (Eco Mode / Power Mode) en el comando derecho',
        'Sensor Triplex (Presión MAP, Temperatura IAT, Posición TPS)',
        'Sensor de Temperatura del Motor (EOT) y Sensor de Oxígeno (O2) en el escape',
        'Filtro de aire de elemento de papel viscoso de alta filtración',
        'Unidad de Control Electrónico del Motor (ECU TVS EcoThrust Fi)'
    ],

    flujo: [
        '1. La bomba presuriza la línea de combustible hacia el cuerpo de aceleración.',
        '2. El usuario selecciona la modalidad deseada (Eco limita el mapa; Power entrega respuesta inmediata).',
        '3. La ECU calcula la masa de aire e inyecta la mezcla ideal hacia las 2 válvulas de admisión.',
        '4. Ocurre la combustión maximizando el ahorro de gasolina o la potencia de 11.2 HP.',
        '5. El sensor O2 monitorea los gases y corrige la mezcla continuamente en bucle cerrado.'
    ],

    diagnostico: [
        'Medir la presión de la bomba de gasolina Ecothrust Fi (~294 kPa / 43 PSI).',
        'Escanear códigos DTC mediante la interfaz de diagnóstico TVS SmartXonnect / OBD2.',
        'Verificar el correcto paso de señal del switch de modos Eco/Power en el comando.',
        'Inspeccionar y cambiar el filtro de aire si se nota saturado de polvo.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoTVSRaider125 = {

    titulo: 'Sistema de Encendido Transistorizado TCI / Generador iGO ISG',

    funcionamiento:
        'El sistema prescinde del motor de arranque convencional. La ECU utiliza el estator iGO / ISG para girar suavemente el cigüeñal y activa la bobina TCI para el salto de chispa de alta intensidad.',

    componentes: [
        {
            nombre: 'Sensor CKP de Posición del Cigüeñal',
            funcion:
                'Suministra los pulsos de posición y RPM exactas del motor a la ECU.'
        },

        {
            nombre: 'Unidad de Control ECU EcoThrust Fi / IntelliGO',
            funcion:
                'Gestiona el encendido, arranque silencioso ISG y el corte automático del motor en paradas (IntelliGO).'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón Resistivo',
            funcion:
                'Eleva el voltaje para generar la chispa en la bujía de encendido.'
        },

        {
            nombre: 'Bujía de Encendido (Bosch UR4KE / NGK CPR7EA-9)',
            funcion:
                'Enciende la mezcla comprimida en la cámara de 3 válvulas.'
        }
    ],

    fallaNoHayChispa: [
        'Comprobar el estado del fusible principal de 15A y fusibles del sistema Fi/ECU.',
        'Medir el voltaje de la batería en reposo (mínimo 12.5V; si la batería cae, el sistema ISG no arranca).',
        'Verificar el interruptor del soporte lateral (pata) y la continuidad del sensor de neutro.',
        'Comprobar la resistencia de la bobina de alta tensión y del capuchón de bujía.',
        'Inspeccionar el sensor de ángulo de caída (Bank Angle Sensor).'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposTVSRaider125 = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. Las 2 válvulas de admisión abren y el sistema inyecta la mezcla atomizada de aire/gasolina.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abiertas (2)',
            escape: 'Cerrada (1)'
        },

        objetivo:
            'Maximizar el llenado cilindrico gracias al área duplicada de las 2 válvulas de admisión.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla con las 3 válvulas cerradas (relación de compresión 10.0:1).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Cerradas'
        },

        objetivo:
            'Elevar la presión y la temperatura de la mezcla antes del encendido.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía enciende la mezcla. La fuerza de expansión empuja el pistón produciendo la potencia mecánica de 11.2 HP a 7.500 RPM.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Cerradas'
        },

        objetivo:
            'Generar aceleración ágil en ciudad (0 a 60 km/h en 5.9 segundos).'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende expulsando los gases quemados por la válvula de escape abierta hacia el catalizador de tres vías.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Abierta (1)'
        },

        objetivo:
            'Expulsar los gases quemados para limpiar la cámara e iniciar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasTVSRaider125 = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 22mm)',
        'Llave de bujías delgada de 16mm (5/8")',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para regulación de válvulas (0.06mm - 0.08mm)',
        'Alicate universal, alicate de punta y llaves Allen de 4mm, 5mm y 6mm',
        'Bandeja de recolección de aceite (1.5 litros) y embudo graduado'
    ],

    diagnostico: [
        'Multímetro digital de alta precisión para mediciones de voltaje, continuidad y resistencia',
        'Manómetro de presión de combustible con adaptadores rápidos TVS Fi',
        'Escáner o interfaz de diagnóstico TVS SmartXonnect / OBD2 con conector TVS',
        'Compresímetro con acople de rosca M10 / M12'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm (8 Nm a 60 Nm)',
        'Extractor de volante magnético específico TVS Raider / Apache Series',
        'Herramienta sujetadora de embrague y extractor de rodamientos de dirección',
        'Bomba de vacío para purgado del líquido de frenos del sistema combinado SBT'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralTVSRaider125 = {

    principio:
        'Diagnóstico metódico TVS: Verificación del voltaje de batería para el sistema ISG/IntelliGO, lectura de códigos DTC en pantalla/escáner, presión de bomba Fi y verificación de chispa y compresión.',

    secuencia: [

        '1. Entrevistar al usuario sobre la falla y verificar la presencia de testigos de avería en el tablero digital TFT/LCD.',

        '2. Medir el voltaje de la batería de 12V en reposo (mínimo 12.5V; crítico para el arranque silencioso ISG).',

        '3. Conectar el escáner OBD2 / TVS para leer códigos de error almacenados en la ECU.',

        '4. Medir la presión de la bomba de combustible Ecothrust Fi (~43 PSI).',

        '5. Comprobar la presencia de chispa constante en la bujía al dar arranque.',

        '6. Medir la compresión del motor en la culata.',

        '7. Verificar la calibración de las 3 válvulas en frío (Admisión: 0.06mm / Escape: 0.08mm).',

        '8. Sustituir o reparar componentes utilizando repuestos originales TVS Genuine Parts.',

        '9. Reiniciar parámetros de adaptación de ralentí si se realizó mantenimiento al cuerpo de aceleración.',

        '10. Realizar prueba de ruta evaluando la respuesta de los modos Eco/Power y el frenado combinados SBT.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesTVSRaider125 = [

    {
        titulo: 'El sistema de arranque silencioso ISG no acciona o el motor se apaga en modo IntelliGO',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Batería de 12V con carga deficiente o celdas degradadas',
            'Sensor de posición de manigueta de embrague o switch de pata lateral desajustado',
            'Falla de comunicación en la ECU por arnés o relé de arranque sulfatado',
            'Desactivación del sistema IntelliGO desde el comando derecho'
        ],

        diagnostico: [
            'Verificar la tensión de la batería en reposo (mínimo 12.5V; recargar o cambiar si es menor).',
            'Comprobar la continuidad del sensor del soporte lateral y del sensor de neutro.',
            'Verificar códigos de error en la ECU usando el escáner TVS.',
            'Limpiar y ajustar los conectores de la batería y relé principal.'
        ]
    },

    {
        titulo: 'Ralentí inestable o el motor se apaga al cambiar de modo Eco a Power',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración con suciedad o conducto de aire de ralentí obstruido',
            'Válvula de admisión apretada/pisada sin luz de calibración',
            'Filtro de aire de papel viscoso lleno de tierra o humedad',
            'Inyector Ecothrust Fi con microorificios tapados'
        ],

        diagnostico: [
            'Realizar mantenimiento preventivo al cuerpo de aceleración.',
            'Calibrar las 3 válvulas en frío (Admisión: 0.06mm / Escape: 0.08mm).',
            'Sustituir el filtro de aire de papel viscoso.',
            'Limpiar el inyector de combustible por ultrasonido.'
        ]
    },

    {
        titulo: 'Tirones o vacilación al acelerar a fondo en subidas',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Presión de la bomba de gasolina insuficiente por filtro sumergido obstruido',
            'Bujía de encendido desgastada o con holgura de electrodo fuera de rango',
            'Combustible de mala calidad o con agua en el fondo del tanque'
        ],

        diagnostico: [
            'Conectar manómetro de presión de combustible y hacer prueba de aceleración (~43 PSI).',
            'Reemplazar la bujía por la especificada (Bosch UR4KE / NGK CPR7EA-9).',
            'Drenar el tanque de combustible y limpiar el filtro de succión de la bomba.'
        ]
    },

    {
        titulo: 'Freno combinado SBT / CBS con tacto esponjoso o baja respuesta',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Aire atrapado en las líneas del circuito del ecualizador del freno SBT',
            'Líquido de frenos degradado en el depósito del freno delantero',
            'Zapatas/bandas del freno trasero descalibradas o muy desgastadas'
        ],

        diagnostico: [
            'Ajustar la tensión del cable del ecualizador del freno combinado SBT.',
            'Purgar el aire de la línea hidráulica utilizando líquido DOT 4 nuevo.',
            'Verificar el espesor de las pastillas delanteras y bandas traseras.'
        ]
    },

    {
        titulo: 'Sonido de chascarrillo metálico en el cilindro al arrancar',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Cadena de distribución estirada o con baja tensión',
            'Tensor automático de la cadena de distribución pegado o fatigado',
            'Luz de balancines descalibrada'
        ],

        diagnostico: [
            'Verificar la retracción y presión del tensor automático de distribución.',
            'Inspeccionar los patines guía plásticos internos.',
            'Calibrar la luz de las 3 válvulas en la culata.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoTVSRaider125 = {

    objetivo:
        'Conservar la sobresaliente economía de combustible (hasta 200+ km/galón) con la tecnología EcoThrust Fi, mantener la agilidad de los modos Eco/Power, asegurar el correcto arranque iGO ISG y preservar el freno combinado SBT.',

    actividades: [

        {
            nombre: 'Aceite de motor y Filtro de papel',
            accion:
                'Reemplazar el aceite cada 3.000 km utilizando 1000ml de lubricante TVS TRU4 Synthetic 10W-30 JASO MA2. Cambiar el filtro de aceite de papel en cada cambio de aceite.'
        },

        {
            nombre: 'Calibración de Válvulas (Culata 3V)',
            accion:
                'Inspeccionar y calibrar en frío cada 6.000 km. Especificaciones: Admisión (0.06mm) / Escape (0.08mm).'
        },

        {
            nombre: 'Filtro de Aire (Papel Viscoso)',
            accion:
                'Inspeccionar cada 6.000 km y sustituir obligatoriamente cada 12.000 km. No limpiar con aire a presión.'
        },

        {
            nombre: 'Cuerpo de Aceleración e Inyector Ecothrust Fi',
            accion:
                'Realizar limpieza preventiva del cuerpo de inyección e inyector cada 12.000 km.'
        },

        {
            nombre: 'Cadena de Transmisión y Kit de Arrastre',
            accion:
                'Limpiar, tensionar y lubricar la cadena cada 500 km. Mantener la holgura entre 20mm y 30mm. Reemplazar el kit entre 15.000 km y 20.000 km.'
        },

        {
            nombre: 'Sistema de Frenos SBT (Disco / Tambor)',
            accion:
                'Inspeccionar pastillas delanteras y bandas traseras cada 3.000 km. Ajustar el ecualizador SBT y renovar el líquido DOT 4 cada 2 años.'
        },

        {
            nombre: 'Bujía de Encendido',
            accion:
                'Inspeccionar y calibrar la luz del electrodo (0.7mm - 0.8mm) cada 6.000 km; reemplazar la bujía cada 12.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadTVSRaider125 = [

    'Al realizar mantenimiento al sistema de combustible Ecothrust Fi, despresurice la línea desconectando el arnés de la bomba antes de soltar las mangueras de alta presión.',

    'NUNCA desconecte la batería con el motor encendido; picos de tensión dañarán la ECU, la pantalla TFT y el módulo SmartXonnect.',

    'Coloque la motocicleta sobre el caballete central en una superficie plana antes de revisar el nivel de aceite mediante la varilla medidora.',

    'Tenga cuidado al manipular las mangueras que van hacia el enfriador de aceite (Oil Cooler) para no dañar las roscas de aleación de aluminio.',

    'Respete los torques de apriete en el tapón de drenaje de aceite (22 Nm) y en la tapa del filtro de aceite (10 Nm) para evitar trasroscar el bloque.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosTVSRaider125 = [

    {
        id: 1,

        titulo: 'Introducción a la TVS Raider 125 y Mantenimiento Periódico',

        nivel: 'Básico',

        descripcion:
            'Aprende la arquitectura del motor 124.8cc 3V, cambio de aceite, sustitución del filtro de papel, revisión del radiador de aceite y tensión de cadena.',

        temas: [
            'Evolución de la TVS Raider 125, versiones TFT y SmartXonnect',
            'Procedimiento correcto de cambio de aceite y filtro de papel',
            'Inspección del enfriador de aceite (Oil Cooler) y filtro de aire',
            'Mantenimiento de la cadena de transmisión y ajuste de frenos SBT'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del Motor 3V, Calibración y Sistema iGO ISG',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a calibrar la culata de 3 válvulas en frío, entender el generador de arranque silencioso iGO ISG y la tecnología IntelliGO.',

        temas: [
            'Ubicación de la marca T en la volante magnética y piñón de levas',
            'Reglaje de las 3 válvulas en frío (0.06mm Admisión / 0.08mm Escape)',
            'Funcionamiento del arranque silencioso ISG sin motor de arranque convencional',
            'Diagnóstico del sistema de corte automático IntelliGO'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica Ecothrust Fi, Modos Eco/Power y Diagnóstico',

        nivel: 'Intermedio',

        descripcion:
            'Aprende sobre la gestión de la ECU TVS Fi, los modos de manejo Eco y Power, lectura de errores DTC y prueba de sensores.',

        temas: [
            'Componentes de la inyección Ecothrust Fi y conmutación Eco/Power',
            'Uso de la herramienta de diagnóstico OBD2 / TVS SmartXonnect',
            'Prueba de presión y flujo de la bomba de gasolina',
            'Limpieza del cuerpo de aceleración y prueba del inyector'
        ]
    },

    {
        id: 4,

        titulo: 'Conectividad TVS SmartXonnect, Pantalla TFT y Red Eléctrica',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico del tablero digital a color TFT, conectividad Bluetooth, sensores de chasis y sistema de frenada combinada SBT.',

        temas: [
            'Estructura de la pantalla TFT a color y módulo Bluetooth SmartXonnect',
            'Procedimiento de ecualización y purgado del sistema de frenos SBT',
            'Circuito de carga de batería y estator de alta eficiencia',
            'Reparación de iluminación Full LED y comandos digitales'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioTVSRaider125 = [

    {
        termino: 'TVS Raider 125',
        significado:
            'Motocicleta urbana de segmento deportivo de TVS Motor Company, caracterizada por su motor de 3 válvulas, modos de manejo, aceleración ágil y pantalla TFT.'
    },

    {
        termino: 'EcoThrust Fi',
        significado:
            'Tecnología de inyección electrónica de combustible desarrollada por TVS para optimizar la combustión, garantizando bajo consumo y excelente respuesta.'
    },

    {
        termino: '3V (3 Válvulas)',
        significado:
            'Configuración de culata SOHC que utiliza 2 válvulas de admisión para mejorar el llenado del cilindro y 1 válvula de escape.'
    },

    {
        termino: 'iGO / ISG',
        significado:
            'Integrated Starter Generator. Generador montado en el cigüeñal que permite un arranque de motor ultrasilencioso sin engranajes mecánicos de Bendix.'
    },

    {
        termino: 'SmartXonnect',
        significado:
            'Ecosistema de conectividad Bluetooth de TVS que vincula la motocicleta con el celular para mostrar navegación paso a paso, alertas y telemetría en el tablero TFT.'
    },

    {
        termino: 'SBT',
        significado:
            'Synchronized Braking Technology. Sistema de frenos combinados de TVS que activa simultáneamente el freno delantero y trasero al presionar el pedal trasero.'
    },

    {
        termino: 'IntelliGO',
        significado:
            'Sistema inteligente de TVS que apaga el motor en paradas prolongadas (semáforos) y lo reinicia automáticamente al presionar el embrague y acelerar.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoTVSRaider125(anio, configuracion) {

    const sintomasMapeados = fallasComunesTVSRaider125.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la TVS Raider 125 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasTVSRaider125.basicas,
            ...herramientasTVSRaider125.diagnostico
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

                titulo: 'Motor 124.8cc 3V EcoThrust y Refrigeración Mixta',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, Arranque ISG y SmartXonnect',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido TCI, ISG y Sensores Fi',

                        sintomas: [

                            {
                                titulo: 'El arranque silencioso ISG no funciona o el motor no enciende',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Revisión del voltaje de la batería, fusibles de la ECU, sensor de pata lateral y diagnóstico OBD2.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Manómetro de presión Fi',
                                    'Escáner OBD2 / TVS SmartXonnect'
                                ],

                                pasos: [
                                    '1. Comprobar que el voltaje de la batería sea superior a 12.5V.',
                                    '2. Medir la presión de la bomba de combustible en la línea Ecothrust Fi (~43 PSI).',
                                    '3. Leer códigos de error en la ECU con el escáner TVS OBD2.',
                                    '4. Comprobar la chispa en la bujía y el funcionamiento del sensor de neutro/embrague.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 5 Velocidades y Frenos SBT',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague, Cadena y Frenos SBT',

                        sintomas: [

                            {
                                titulo: 'Freno combinado SBT esponjoso o deslizamiento de embrague',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Ajuste del ecualizador del freno SBT, juego del embrague y nivel de aceite JASO MA2.',

                                herramientas: [
                                    'Llaves fijas de 10mm y 12mm',
                                    'Bomba de purgado de frenos',
                                    'Bandeja de fluido'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre en la manigueta de embrague (10mm a 15mm).',
                                    '2. Verificar el uso de aceite TVS TRU4 10W-30 certificado JASO MA2.',
                                    '3. Ajustar el guaya del repartidor SBT y purgar el líquido DOT 4 delantero.'
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
// MODELOS INDIVIDUALES POR AÑO (TVS RAIDER 125 2021 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN / LANZAMIENTO GLOBAL (2021 - 2022) ---

export const tvsRaider125_2021 = {

    marca: 'TVS',

    modelo: 'Raider 125',

    anio: 2021,

    tipo: 'Motocicleta Urbana / Naked Sport',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TVS_Raider_125.jpg/1200px-TVS_Raider_125.jpg',

    descripcion:
        'Plataforma educativa para TVS Raider 125 2021 (Lanzamiento mundial / Motor 124.8cc SOHC 3V EcoThrust Fi, arranque silencioso ISG, modos Eco/Power, tablero LCD digital y frenos SBT).',

    informacionHistorica: {

        titulo: 'TVS Raider 125 2021',

        generacion: 'Primera generación Raider 125 EcoThrust',

        familiaMotor: '124.8cc EcoThrust 3 Válvulas Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T SOHC con enfriador de aceite (Oil Cooler)',

        arquitectura: 'SOHC 3 Válvulas (2 Admisión / 1 Escape)',

        alimentacion: 'Inyección Electrónica EcoThrust Fi',

        encendido: 'Digital TCI con arranque silencioso iGO / ISG',

        refrigeracion: 'Mixta (Aire + Radiador de aceite Oil Cooler)',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Manual de 5 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la TVS Raider 125 2021?',

        explicacion:
            'Un motor monocilíndrico deportivo de 124.8cc equipado con culata de 3 válvulas, inyección electrónica con modos Eco/Power y un generador ISG que permite encender el motor en absoluto silencio.',

        formulaSimple:
            'Aire + gasolina por EcoThrust Fi + culata 3V + modos Eco/Power + arranque ISG = 11.2 HP a 5 marchas',

        flujoEnergia: [
            'Tanque de combustible (10.0 Litros)',
            'Bomba eléctrica de gasolina',
            'Cuerpo de aceleración EcoThrust Fi',
            'Cámara de combustión de 3 válvulas',
            'Pistón de baja fricción',
            'Biela',
            'Cigüeñal y Generador ISG',
            'Embrague multidisco húmedo',
            'Caja de 5 velocidades',
            'Piñón de salida',
            'Cadena de transmisión',
            'Rueda trasera con rin de aleación'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposTVSRaider125,

    componentesMotor: sistemasMotorTVSRaider125,

    sistemaCombustible: sistemaCombustibleTVSRaider125,

    sistemaEncendido: sistemaEncendidoTVSRaider125,

    refrigeracion: {

        tipo: 'Refrigeración mixta por aire y enfriador de aceite (Oil Cooler)',

        elementos: [
            'Aletas de radiación en el cilindro de aluminio',
            'Radiador / Enfriador de aceite (Oil Cooler) frontal',
            'Mangueras de alta presión de lubricante',
            'Flujo de aire por desplazamiento'
        ],

        funcionamiento:
            'El aire ambiental enfría el cilindro externamente mientras el lubricante circula por el radiador de aceite frontal disipando la temperatura interna.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide con filtro de papel',

        componentes: [
            'Cárter de aleación de aluminio',
            'Bomba de aceite trocoide',
            'Filtro de aceite de papel reemplazable',
            'Malla tamiz de succión'
        ],

        funcionamiento:
            'Circula aceite TVS TRU4 10W-30 JASO MA2 a través del filtro de papel y del radiador de aceite hacia la culata 3V y transmisión.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol SOHC',

        tipo: 'Cadena silenciosa con tensor automático',

        funcion:
            'Mantiene la sincronización entre el cigüeñal y las 3 válvulas.',

        advertencia:
            'Calibre las 3 válvulas en frío a 0.06mm (Admisión) y 0.08mm (Escape).'
    },

    diagnosticoGeneral: diagnosticoGeneralTVSRaider125,

    fallasComunes: fallasComunesTVSRaider125,

    herramientas: herramientasTVSRaider125,

    mantenimiento: mantenimientoTVSRaider125,

    cursos: cursosTVSRaider125,

    seguridad: seguridadTVSRaider125,

    glosario: glosarioTVSRaider125,

    reglaPrincipal:
        'VOLTAJE ISG → PRESIÓN FI → ECO/POWER → CHISPA → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoTVSRaider125(
            2021,
            {
                tecnologia: '1ª Gen - Motor 3V EcoThrust Fi / ISG / Modos Eco-Power',

                motorPrincipal: '124.8cc 3V Monocilíndrico (11.2 HP / 11.2 Nm)'
            }
        );
    }
};


export const tvsRaider125_2022 = {

    ...tvsRaider125_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para TVS Raider 125 2022. Mantenimiento del filtro de aceite de papel, sistema iGO ISG y calibración de válvulas.',

    informacionHistorica: {

        ...tvsRaider125_2021.informacionHistorica,

        titulo: 'TVS Raider 125 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoTVSRaider125(
            2022,
            {
                tecnologia: '1ª Gen - Motor 3V EcoThrust Fi / ISG',

                motorPrincipal: '124.8cc 3V Monocilíndrico'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN / PANTALLA TFT A COLOR Y SMARTXONNECT (2023 - 2026) ---

export const tvsRaider125_2023 = {

    ...tvsRaider125_2022,

    anio: 2023,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TVS_Raider_125.jpg/1200px-TVS_Raider_125.jpg',

    descripcion:
        'Plataforma educativa para TVS Raider 125 SX / SmartXonnect 2023 (Lanzamiento con pantalla TFT de 5 pulgadas a color, conectividad Bluetooth con navegación GPS, puerto USB y comandos de voz).',

    informacionHistorica: {

        titulo: 'TVS Raider 125 SmartXonnect TFT 2023',

        generacion: 'Segunda generación (Raider 125 TFT SmartXonnect)',

        familiaMotor: '124.8cc 3V EcoThrust Fi SmartXonnect',

        tipoMotor: 'Monocilíndrico 4T SOHC con enfriador de aceite',

        arquitectura: 'SOHC 3 Válvulas',

        alimentacion: 'Inyección Electrónica EcoThrust Fi',

        encendido: 'Digital TCI / Arranque silencioso ISG',

        refrigeracion: 'Mixta (Aire + Radiador de aceite)',

        distribucion: 'Cadena de distribución silenciosa',

        transmision: 'Manual de 5 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoTVSRaider125(
            2023,
            {
                tecnologia: '2ª Gen - Pantalla TFT 5" / SmartXonnect Bluetooth / EcoThrust Fi',

                motorPrincipal: '124.8cc 3V Monocilíndrico (11.2 HP / 11.2 Nm)'
            }
        );
    }
};


export const tvsRaider125_2024 = {

    ...tvsRaider125_2023,

    anio: 2024,

    descripcion:
        'Plataforma educativa para TVS Raider 125 2024 (Consolidación de las ediciones iGO con asistencia de par extra e iluminación LED rediseñada).',

    informacionHistorica: {

        ...tvsRaider125_2023.informacionHistorica,

        titulo: 'TVS Raider 125 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoTVSRaider125(
            2024,
            {
                tecnologia: '2ª Gen - Motor 3V EcoThrust Fi / SmartXonnect / iGO Assist',

                motorPrincipal: '124.8cc 3V Monocilíndrico (11.2 HP)'
            }
        );
    }
};


export const tvsRaider125_2025 = {

    ...tvsRaider125_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para TVS Raider 125 2025. Diagnóstico de la pantalla TFT, inyección Ecothrust Fi y mantenimiento.',

    informacionHistorica: {

        ...tvsRaider125_2024.informacionHistorica,

        titulo: 'TVS Raider 125 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoTVSRaider125(
            2025,
            {
                tecnologia: '2ª Gen - Pantalla TFT / SmartXonnect / EcoThrust Fi',

                motorPrincipal: '124.8cc 3V Monocilíndrico'
            }
        );
    }
};


export const tvsRaider125_2026 = {

    ...tvsRaider125_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para TVS Raider 125 SmartXonnect 2026. Diagnóstico integral del motor SOHC 3V de 124.8cc con inyección Ecothrust Fi, modos Eco/Power, arranque silencioso ISG, pantalla TFT a color, conectividad SmartXonnect y frenos combinados SBT.',

    informacionHistorica: {

        ...tvsRaider125_2025.informacionHistorica,

        titulo: 'TVS Raider 125 SmartXonnect 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoTVSRaider125(
            2026,
            {
                tecnologia: '2ª Gen SmartXonnect - Pantalla TFT 5" / EcoThrust Fi / ISG / Modos Eco-Power',

                motorPrincipal: '124.8cc 3V Monocilíndrico (11.2 HP / 11.2 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE TVS RAIDER 125
// ============================================================

export const tvsRaider125 = {

    marca: 'TVS',

    modelo: 'Raider 125',

    tipo: 'Motocicleta Urbana / Naked Sport',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TVS_Raider_125.jpg/1200px-TVS_Raider_125.jpg',

    aniosDisponibles: [
        2021,
        2022,
        2023,
        2024,
        2025,
        2026
    ],

    vehiculosPorAnio: {

        2021: tvsRaider125_2021,

        2022: tvsRaider125_2022,

        2023: tvsRaider125_2023,

        2024: tvsRaider125_2024,

        2025: tvsRaider125_2025,

        2026: tvsRaider125_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
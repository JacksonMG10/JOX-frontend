const sistemasMotorSwift = [
    {
        nombre: 'Bloque del motor (Serie K / Z12E Mild-Hybrid)',
        funcion:
            'Estructura ultra liviana de aluminio con tecnología Heartect que aloja cilindros, cigüeñal y galerías de lubricación/refrigeración.',
        fallas: [
            'Fugas de aceite por sellos del cárter o tapas de distribución',
            'Fugas de refrigerante por la carcasa del termostato',
            'Desgaste prematuro si se usa aceite fuera de especificación (0W-16 / 0W-20)',
            'Sensibilidad al sobrecalentamiento por deformación de culata de aluminio'
        ]
    },

    {
        nombre: 'Culata DOHC 16V / 12V con VVT (Dualjet / Boosterjet / Z12E)',
        funcion:
            'Aloja válvulas de admisión/escape y árboles de levas con control de fase variable VVT (en admisión y/o escape).',
        fallas: [
            'Obstrucción de solenoide VVT por lubricante degradado',
            'Fuga de aceite por empaque de tapa de culata',
            'Soplado de empaque de culata tras episodio de sobrecalentamiento',
            'Acumulación de residuos en inyectores Dualjet o inyección directa Boosterjet'
        ]
    },

    {
        nombre: 'Árboles de levas y Actuadores VVT (Variable Valve Timing)',
        funcion:
            'Ajustan el cruce de válvulas para mejorar la respuesta a bajas RPM y reducir las emisiones contaminantes.',
        fallas: [
            'Ruido metálico en frío por desgaste de piñones VVT o falta de presión inicial',
            'Códigos de avería de posición de levas (P0011 / P0016)',
            'Pérdida de fuerza por falla del solenoide actuador'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Ultra Baja Fricción',
        funcion:
            'Convierte el movimiento de los pistones en rotación hacia la caja manual, automática o CVT.',
        fallas: [
            'Fuga de aceite por retén trasero (lado caja)',
            'Cojinetes rayados por falta de nivel de aceite',
            'Juego axial de cigüeñal por arranques continuos en seco'
        ]
    },

    {
        nombre: 'Pistones y Anillos de Baja Resistencia',
        funcion:
            'Transmiten la fuerza de combustión hacia las bielas optimizando el consumo de combustible.',
        fallas: [
            'Anillos pegados por sedimentación de aceite',
            'Consumo progresivo de aceite',
            'Cascabeleo / detonación por uso de combustible de bajo octanaje en versiones Turbo o Dualjet'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Hidráulico',
        funcion:
            'Sincroniza el cigüeñal con los árboles de levas libre de mantenimiento periódico.',
        fallas: [
            'Estiramiento de la cadena de distribución por estirar cambios de aceite',
            'Ruido de sonajero al encender en frío',
            'Tensor hidráulico pegado por barro/sedimento de aceite'
        ]
    },

    {
        nombre: 'Sistema de Enfriamiento por Líquido Presurizado',
        funcion:
            'Controla la temperatura mediante bomba de agua, radiador de aluminio, termostato y electroventilador silencioso.',
        fallas: [
            'Fisuras en el depósito de expansión de refrigerante',
            'Termostato pegado cerrado',
            'Fuga en bomba de agua accionada por correa de accesorios'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Alta Fluidez',
        funcion:
            'Distribuye aceite de ultra baja viscosidad (0W-16 / 0W-20) rápidamente hacia las partes móviles.',
        fallas: [
            'Testigo de aceite encendido por filtro obstruido o viscosidad inadecuada (ej. 10W-40)',
            'Malla de succión de bomba tapada',
            'Fuga de aceite en el interruptor de presión (trompo de aceite)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleSwift = {

    titulo: 'Sistema de Inyección Multipunto / Dualjet / Boosterjet Direct Inyección',

    funcionamiento:
        'La bomba en el tanque entrega gasolina. En motores Dualjet se usan 2 inyectores por cilindro para una atomización fina; en motores Boosterjet se utiliza inyección directa de alta presión.',

    componentes: [
        'Tanque de combustible de resina ligera',
        'Módulo de bomba eléctrica e indicador de nivel',
        'Filtro de combustible integrado / externo',
        'Rampa de inyección de aluminio',
        'Inyectores dobles (Dualjet) / Inyectores directos (Boosterjet)',
        'Cuerpo de aceleración electrónico (Drive-by-Wire)',
        'Sensor MAP (Presión Absoluta del Múltiple)',
        'Sensor de oxígeno primario y secundario (Banda ancha)',
        'ECU / ECM de gestión de motor Suzuki'
    ],

    flujo: [
        '1. La bomba en el tanque presuriza la línea de baja presión.',
        '2. En motores Boosterjet, la bomba HPFP eleva la presión hacia el riel directo.',
        '3. La ECU calcula la masa de aire y activa los inyectores por pulso.',
        '4. Los inyectores atomizan la gasolina cerca de las válvulas o dentro del cilindro.',
        '5. Ocurre la combustión y los sensores de oxígeno envían corrección en bucle cerrado (Fuel Trim).'
    ],

    diagnostico: [
        'Medir presión de combustible en la rampa (~3.0 a 3.8 bar en inyección indirecta).',
        'Escanear códigos de corrección de combustible (P0171 / P0172).',
        'Comprobar pulso de inyectores y limpieza de la mariposa de aceleración.',
        'Revisar sensor MAP si hay vacilaciones al acelerar.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO Y HIBRIDACIÓN SHVS (12V / 48V)
// ============================================================

const sistemaEncendidoSwift = {

    titulo: 'Sistema de Encendido Directo (COP) y Mild-Hybrid SHVS',

    funcionamiento:
        'Cada cilindro cuenta con una bobina sobre la bujía de iridio. En versiones SHVS, el generador ISG accionado por correa asiste al motor térmico en aceleración, regenera energía en frenado y reinicia el motor en el sistema Auto Stop-Start.',

    componentes: [
        {
            nombre: 'ECU de Motor y Módulo de Control SHVS',
            funcion:
                'Controla el encendido, la asistencia de par eléctrico y la regeneración.'
        },

        {
            nombre: 'Bobinas de encendido transistorizadas (COP)',
            funcion:
                'Generan la chispa de alto voltaje directamente sobre cada bujía.'
        },

        {
            nombre: 'Bujías de Iridio / Platino de electrodo fino',
            funcion:
                'Garantizan el encendido inmediato tras cada parada del Auto Stop-Start.'
        },

        {
            nombre: 'Generador ISG y Batería de Ion-Litio (Versiones Hybrid)',
            funcion:
                'Arranca el motor de forma silenciosa por correa y entrega par adicional al acelerar.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar carga de la batería de 12V y el fusible del sistema de encendido.',
        'Comprobar señal de RPM procedente del sensor CKP con escáner.',
        'Inspeccionar sulfatación o humedad en conectores de las bobinas.',
        'Verificar el estado de la batería de Ion-Litio de 12V o 48V en tableros de versiones SHVS.',
        'Medir continuidad y resistencia de las bujías de iridio.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposSwift = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende. Las válvulas de admisión se abren y permiten el ingreso de la mezcla aire/gasolina (o aire puro en inyección directa).',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Ingresar la mayor cantidad de aire para lograr una mezcla eficiente.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la carga. Las válvulas permanecen cerradas y el sistema VVT optimiza el punto de cierre.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y temperatura antes del brinco de chispa.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión (Apoyo ISG en SHVS)',

        descripcion:
            'La bujía enciende la mezcla. La expansión empuja el pistón hacia abajo. En modelos SHVS, el motor eléctrico ISG entrega apoyo adicional de par.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Producir la potencia mecánica del vehículo.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón sube impulsando los gases quemados por la válvula de escape hacia el catalizador de tres vías.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Evacuar los residuos de la cámara para iniciar el nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasSwift = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm)',
        'Destornilladores de pala, estrella y palancas de tapicería',
        'Llaves Torx y Allen',
        'Gato de patín ligero y torres de seguridad con apoyos de goma',
        'Llave delgada de bujías de 14mm / 16mm',
        'Bandeja de recolección de aceite y embudo graduado'
    ],

    diagnostico: [
        'Escáner OBD2 / Suzuki SDT-II con lectura de módulos ECM, BCM, SHVS, CVT',
        'Multímetro digital de respuesta rápida',
        'Manómetro de presión de gasolina con acoples de baja presión',
        'Probador de baterías de 12V y estado de salud SOH',
        'Compresímetro para bujía de 12mm / 14mm'
    ],

    profesional: [
        'Torquímetro de 1/4, 3/8 y 1/2 pulgada',
        'Herramientas de alineación para piñones de árbol de levas y cigüeñal Suzuki',
        'Equipo de limpieza de inyectores por ultrasonido',
        'Escáner con función de aprendizaje de calibración de transmisión CVT y SHVS'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralSwift = {

    principio:
        'Diagnóstico metódico. Inspeccionar la tensión eléctrica de la batería de 12V y sensores antes de desmontar partes mecánicas.',

    secuencia: [

        '1. Entrevistar al usuario sobre los síntomas y revisar los testigos activos en la pantalla LCD/TFT.',

        '2. Realizar escaneo OBD2 de todos los sistemas (ECM, ABS, EPS, SHVS, CVT).',

        '3. Registrar códigos DTC y revisar el cuadro congelado (Freeze Frame).',

        '4. Medir el voltaje de la batería de 12V (mínimo 12.4V) y comprobar la batería SHVS (si aplica).',

        '5. Analizar datos en vivo (RPM, presión MAP, STFT/LTFT, temperatura de motor).',

        '6. Inspeccionar arneses, conexiones a masa en chasis y mangueras de vacío.',

        '7. Realizar pruebas mecánicas físicas (Presión de combustible, prueba de chispa).',

        '8. Reemplazar o reparar el componente defectuoso con repuesto adecuado.',

        '9. Borrar los códigos de avería almacenados.',

        '10. Ejecutar procedimientos de aprendizaje (reinicio de acelerador o aprendizaje de sensor de batería).',

        '11. Realizar prueba de ruta para confirmar la reparación.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesSwift = [

    {
        titulo: 'Ralentí inestable o apague del motor al detenerse',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración electrónico sucio por vapores de aceite',
            'Batería de 12V descargada o degradada (Afecta funcionamiento del Auto Stop-Start)',
            'Fuga de vacío en manguera PCV o múltiple de admisión',
            'Sensor MAP sucio con restos de aceite'
        ],

        diagnostico: [
            'Inspeccionar la mariposa del cuerpo de aceleración y efectuar su limpieza.',
            'Verificar el estado de la batería con probador de carga.',
            'Escanear códigos de falla del sistema Auto Stop-Start.',
            'Limpiar el sensor MAP con limpiador de contactos sin residuo.'
        ]
    },

    {
        titulo: 'Deslizamiento o tirones en transmisión CVT',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Fluido CVT (Suzuki Green-1 / Green-2) degradado o fuera de nivel',
            'Filtro de enfriador de aceite CVT obstruido',
            'Cuerpo de válvulas con acumulación de viruta metálica',
            'Sobrecalentamiento de la transmisión en tráfico pesado o pendientes sostenidas'
        ],

        diagnostico: [
            'Inspeccionar nivel y color del fluido CVT con la transmisión a temperatura de trabajo.',
            'Escanear el módulo TCM buscando códigos de presión de aceite de la CVT.',
            'Verificar si existen fugas por el enfriador de fluido CVT.',
            'Reemplazar fluido y filtros de la transmisión si cumple el intervalo.'
        ]
    },

    {
        titulo: 'Alerta en tablero de sistema híbrido SHVS / Batería 12V',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor de estado de batería (BPS) en el borne negativo flojo o defectuoso',
            'Tensión baja en la correa de accesorios del generador ISG',
            'Fusible de protección del módulo SHVS quemado',
            'Batería de 12V principal reemplazada por una no compatible con sistemas Stop-Start (debe ser EFB/AGM)'
        ],

        diagnostico: [
            'Comprobar tensión de la correa que mueve el generador ISG.',
            'Verificar que la batería de 12V instalada sea de tecnología EFB o AGM.',
            'Escanear el módulo SHVS para verificar estado de la batería de Ion-Litio.',
            'Efectuar el reinicio del sensor de batería por escáner.'
        ]
    },

    {
        titulo: 'Ruido metálico suave en frío en la zona de la distribución',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Retraso en la presión hidráulica del tensor de la cadena de distribución',
            'Viscosidad de aceite de motor demasiado gruesa (Ej. 10W-40 en lugar de 0W-16 / 0W-20)',
            'Filtro de aceite sin válvula de retención adecuada'
        ],

        diagnostico: [
            'Confirmar que el aceite utilizado cumpla la especificación exacta del manual.',
            'Inspeccionar si el filtro de aceite es original o equivalente de alta calidad.',
            'Escuchar la zona con estetoscopio automotriz durante los primeros 5 segundos de encendido.'
        ]
    },

    {
        titulo: 'Pérdida de potencia o respuesta lenta del acelerador (Versiones Boosterjet)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Válvula de alivio/wastegate del turbocargador pegada',
            'Fuga en mangueras de intercooler',
            'Bujías de iridio con la luz de electrodo descalibrada o carbonizadas',
            'Filtro de aire de motor muy saturado'
        ],

        diagnostico: [
            'Escanear la presión del turbo deseada vs. real.',
            'Revisar las mangueras de aire desde el turbo hasta el intercooler.',
            'Inspeccionar el actuador de la wastegate.',
            'Revisar el estado de las bujías de iridio.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoSwift = {

    objetivo:
        'Conservar el bajo consumo de combustible, la durabilidad de los motores K/Z y la fiabilidad de los sistemas SHVS y CVT.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 7.500 km o 10.000 km utilizando aceite sintético 0W-16 (en motores Z12E / Dualjet) o 0W-20 / 5W-30 (Boosterjet / K12M / K14B).'
        },

        {
            nombre: 'Filtro de aire y filtro de cabina',
            accion:
                'Inspeccionar en cada cambio de aceite y reemplazar cada 15.000 km.'
        },

        {
            nombre: 'Bujías de Iridio',
            accion:
                'Reemplazar cada 50.000 km a 60.000 km en versiones Turbo/Dualjet y cada 80.000 km en versiones atmosféricas convencionales.'
        },

        {
            nombre: 'Líquido de frenos y sistema hidráulico',
            accion:
                'Renovar el fluido DOT 4 cada 40.000 km o 2 años.'
        },

        {
            nombre: 'Fluido de Transmisión CVT / Manual',
            accion:
                'Reemplazar fluido CVT (Suzuki Green-1/2) y filtros cada 40.000 km a 50.000 km. En cajas manuales reemplazar aceite 75W-80 cada 50.000 km.'
        },

        {
            nombre: 'Correa de accesorios e ISG',
            accion:
                'Inspeccionar estado y tensión cada 20.000 km; reemplazar cada 60.000 km (crítico en versiones SHVS M-Hybrid).'
        },

        {
            nombre: 'Limpieza de cuerpo de aceleración',
            accion:
                'Realizar limpieza preventiva cada 20.000 km para prevenir fallas en el Auto Stop-Start y ralentí.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadSwift = [

    'En modelos Swift Hybrid (SHVS), desconecte el negativo de la batería de 12V y espere 5 minutos antes de manipular el generador ISG o el arnés del sistema híbrido.',

    'Utilice siempre torres de elevación en las pestañas reforzadas del chasis Heartect; evite levantar el auto desde el centro de los soportes inferiores.',

    'No abra la tapa del radiador con el motor caliente para evitar quemaduras por vapor o líquido refrigerante hirviendo.',

    'En versiones con inyección directa Boosterjet, alivie la presión del sistema de combustible antes de desconectar la bomba de alta presión o el riel.',

    'Utilice el torque exacto en los pernos de rueda de aleación de aluminio para prevenir la deformación de los discos de freno.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosSwift = [

    {
        id: 1,

        titulo: 'Introducción a la plataforma Suzuki Swift y Chasis Heartect',

        nivel: 'Básico',

        descripcion:
            'Conociendo la estructura ultra liviana, ubicación de fusibles, componentes del motor y puntos de servicio.',

        temas: [
            'Estructura Heartect',
            'Identificación de motores K12M, K14B, Dualjet y Z12E',
            'Ubicación de módulos ECU, BCM y fusileras',
            'Especificaciones de fluidos Suzuki'
        ]
    },

    {
        id: 2,

        titulo: 'Mecánica y Sincronización de Motores Serie K y Z',

        nivel: 'Intermedio',

        descripcion:
            'Procedimientos de servicio en cadena de distribución, calibración de válvulas y sistema VVT.',

        temas: [
            'Marcas de tiempo en cadena de distribución',
            'Funcionamiento del actuador VVT Dual',
            'Reemplazo de bomba de agua y termostato',
            'Inspección y torques de culata'
        ]
    },

    {
        id: 3,

        titulo: 'Sistema Híbrido Suzuki SHVS (Smart Hybrid Vehicle by Suzuki)',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico y mantenimiento del sistema Mild-Hybrid de 12V / 48V e integración con el Auto Stop-Start.',

        temas: [
            'Operación del generador ISG por correa',
            'Batería auxiliar de Ion-Litio',
            'Diagnóstico de sensores de batería EFB/AGM',
            'Códigos de falla y flujo de energía en pantalla'
        ]
    },

    {
        id: 4,

        titulo: 'Diagnóstico de Transmisión CVT y Cajas Manuales AMT/CVT',

        nivel: 'Avanzado',

        descripcion:
            'Mantenimiento preventivo, cambio de fluido, filtros y diagnóstico por escáner de transmisiones automáticas.',

        temas: [
            'Fluido Suzuki CVT Green',
            'Procedimiento de nivelación de fluido',
            'Lectura de presiones de poleas en escáner',
            'Resolución de tirones y códigos TCM'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioSwift = [

    {
        termino: 'SHVS',
        significado:
            'Smart Hybrid Vehicle by Suzuki. Sistema de hibridación ligera (Mild-Hybrid) que utiliza un generador ISG y una batería de Ion-Litio.'
    },

    {
        termino: 'Dualjet',
        significado:
            'Tecnología de Suzuki que emplea dos inyectores de combustible por cilindro para mejorar la pulverización y eficiencia.'
    },

    {
        termino: 'Boosterjet',
        significado:
            'Denominación de los motores Suzuki de inyección directa alimentados por turbocargador.'
    },

    {
        termino: 'Heartect',
        significado:
            'Plataforma de chasis de nueva generación de Suzuki, caracterizada por ser más continua, rígida y liviana.'
    },

    {
        termino: 'ISG',
        significado:
            'Integrated Starter Generator. Motor eléctrico/generador accionado por correa que sustituye al alternador tradicional.'
    },

    {
        termino: 'CVT',
        significado:
            'Continuously Variable Transmission. Transmisión de variación continua gobernada por poleas y banda metálica.'
    },

    {
        termino: 'AGM / EFB',
        significado:
            'Tecnologías de baterías reforzadas diseñadas para soportar ciclos continuos de descarga del sistema Auto Stop-Start.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoSwift(anio, configuracion) {

    const sintomasMapeados = fallasComunesSwift.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente al Suzuki Swift ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasSwift.basicas,
            ...herramientasSwift.diagnostico
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

                titulo: 'Motor y Gestión Electrónica Suzuki',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Eléctrico / Híbrido SHVS / Auto Stop-Start',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Sistema de Encendido y Batería SHVS',

                        sintomas: [

                            {
                                titulo: 'El motor no realiza el arranque automático Stop-Start o indica falla SHVS',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Revisión del estado de la batería de 12V, sensor de carga y generador ISG.',

                                herramientas: [
                                    'Escáner OBD2 / Suzuki SDT',
                                    'Multímetro digital',
                                    'Probador de baterías'
                                ],

                                pasos: [
                                    '1. Verificar la tensión de la batería de 12V en reposo (debe estar por encima de 12.4V).',
                                    '2. Escanear el módulo ECM y SHVS en busca de códigos DTC registrados.',
                                    '3. Verificar la tensión y el estado de la correa de accesorios del generador ISG.',
                                    '4. Realizar la calibración o reseteo del sensor de estado de batería si se reemplazó el acumulador.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Transmisión CVT y Mecánica',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Caja CVT y Embrague',

                        sintomas: [

                            {
                                titulo: 'Tirones o vacilación al acelerar en transmisión CVT',

                                dificultad: 'Avanzado 🔴',

                                descripcion:
                                    'Análisis de nivel de fluido Suzuki Green y presiones de polea en transmisión CVT.',

                                herramientas: [
                                    'Escáner OBD2 con lectura de TCM',
                                    'Herramientas de mano',
                                    'Bandeja de fluido'
                                ],

                                pasos: [
                                    '1. Verificar el nivel y estado de degradación del fluido de la caja CVT.',
                                    '2. Monitorear los parámetros de presión de aceite primario y secundario en el escáner.',
                                    '3. Verificar la ausencia de fugas por el enfriador de la transmisión.',
                                    '4. Proceder al cambio de fluido CVT y filtros si la degradación supera el límite recomendados.'
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
// MODELOS INDIVIDUALES POR AÑO (SUZUKI SWIFT 2012 - 2026)
// ============================================================

// --- 3ª GENERACIÓN (2012 - 2017) ---

export const suzukiSwift2012 = {

    marca: 'Suzuki',

    modelo: 'Swift',

    anio: 2012,

    tipo: 'Hatchback',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Suzuki_Swift_1.2_Dualjet_Club_%28FZ%29_%E2%80%93_Frontansicht%2C_3._Juli_2015%2C_Ratingen.jpg/1200px-Suzuki_Swift_1.2_Dualjet_Club_%28FZ%29_%E2%80%93_Frontansicht%2C_3._Juli_2015%2C_Ratingen.jpg',

    descripcion:
        'Plataforma educativa para Suzuki Swift 2012 (3ª Generación mundial / Lanzamiento con motor K12M 1.2L o K14B 1.4L).',

    informacionHistorica: {

        titulo: 'Suzuki Swift 2012',

        generacion: 'Tercera generación (Chasis FZ/NZ)',

        familiaMotor: '1.2L K12M / 1.4L K14B 16V DOHC VVT',

        tipoMotor: 'Motor de 4 cilindros en línea e inyección multipunto',

        arquitectura: 'DOHC 16 válvulas con VVT',

        alimentacion: 'Inyección Electrónica Multipunto MPFI',

        encendido: 'Electrónico directo COP',

        refrigeracion: 'Refrigeración líquida con radiador de aluminio',

        distribucion: 'Cadena de distribución de alta durabilidad',

        transmision: 'Manual de 5 velocidades / Automática de 4 velocidades'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor del Suzuki Swift 2012?',

        explicacion:
            'Un motor atmosférico de 4 cilindros con bloque de aluminio y sistema de distribución variable VVT diseñado para ofrecer máxima agilidad con mínimo consumo.',

        formulaSimple:
            'Aire + combustible + VVT + compresión + chispa = giro suave del cigüeñal',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba eléctrica',
            'Rampa e Inyectores MPFI',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague / Convertidor de torque',
            'Caja de cambios',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposSwift,

    componentesMotor: sistemasMotorSwift,

    sistemaCombustible: sistemaCombustibleSwift,

    sistemaEncendido: sistemaEncendidoSwift,

    refrigeracion: {

        tipo: 'Refrigeración líquida presurizada',

        elementos: [
            'Radiador de aluminio',
            'Bomba de agua por correa',
            'Termostato',
            'Depósito de expansión',
            'Electroventilador'
        ],

        funcionamiento:
            'El líquido refrigerante absorbe el calor del motor y lo disipa al pasar por las celdas del radiador.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba de engranajes',

        componentes: [
            'Cárter de aluminio',
            'Bomba de aceite',
            'Filtro de aceite roscado',
            'Galerías internas'
        ],

        funcionamiento:
            'Impulsa aceite 5W-30 / 10W-30 a través del filtro hacia el cigüeñal y los árboles de levas.'
    },

    distribucion: {

        titulo: 'Distribución por cadena',

        tipo: 'Cadena metálica silenciosa con tensor hidráulico',

        funcion:
            'Mantiene la sincronización entre cigüeñal y válvulas.',

        advertencia:
            'Mantenga el nivel de aceite correcto para asegurar la presión hidráulica sobre el tensor.'
    },

    diagnosticoGeneral: diagnosticoGeneralSwift,

    fallasComunes: fallasComunesSwift,

    herramientas: herramientasSwift,

    mantenimiento: mantenimientoSwift,

    cursos: cursosSwift,

    seguridad: seguridadSwift,

    glosario: glosarioSwift,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2012,
            {
                tecnologia: '3ª Generación - Inyección MPFI DOHC 16V VVT',

                motorPrincipal: 'Motor 1.2L K12M / 1.4L K14B'
            }
        );
    }
};


export const suzukiSwift2013 = {

    ...suzukiSwift2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2013. Diagnóstico de motor, inyección y mantenimiento preventivo.',

    informacionHistorica: {

        ...suzukiSwift2012.informacionHistorica,

        titulo: 'Suzuki Swift 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2013,
            {
                tecnologia: '3ª Generación - Inyección MPFI DOHC 16V VVT',

                motorPrincipal: 'Motor 1.2L K12M / 1.4L K14B'
            }
        );
    }
};


export const suzukiSwift2014 = {

    ...suzukiSwift2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2014. Mantenimiento del motor K12M/K14B y cajas de cambios.',

    informacionHistorica: {

        ...suzukiSwift2013.informacionHistorica,

        titulo: 'Suzuki Swift 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2014,
            {
                tecnologia: '3ª Generación - Inyección MPFI DOHC 16V VVT',

                motorPrincipal: 'Motor 1.2L K12M / 1.4L K14B'
            }
        );
    }
};


export const suzukiSwift2015 = {

    ...suzukiSwift2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2015 (Actualización de mitad de vida con mejoras en inyección Dualjet según versión).',

    informacionHistorica: {

        ...suzukiSwift2014.informacionHistorica,

        titulo: 'Suzuki Swift 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2015,
            {
                tecnologia: '3ª Generación Facelift - MPFI / Dualjet',

                motorPrincipal: 'Motor 1.2L K12M / Dualjet'
            }
        );
    }
};


export const suzukiSwift2016 = {

    ...suzukiSwift2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2016. Diagnóstico electrónico, sensores y frenos.',

    informacionHistorica: {

        ...suzukiSwift2015.informacionHistorica,

        titulo: 'Suzuki Swift 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2016,
            {
                tecnologia: '3ª Generación - Inyección MPFI DOHC 16V',

                motorPrincipal: 'Motor 1.2L K12M / 1.4L K14B'
            }
        );
    }
};


export const suzukiSwift2017 = {

    ...suzukiSwift2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2017 (Cierre de la 3ª generación e inicio de la 4ª generación con plataforma Heartect).',

    informacionHistorica: {

        ...suzukiSwift2016.informacionHistorica,

        titulo: 'Suzuki Swift 2017',

        anio: 2017,

        nota: 'Transición a la 4ª Generación (Chasis A2L) con plataforma ligera Heartect.'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2017,
            {
                tecnologia: 'Transición de Generación - Plataforma Heartect / K12M / Boosterjet',

                motorPrincipal: 'Motor 1.2L K12M / 1.0L Boosterjet'
            }
        );
    }
};


// --- 4ª GENERACIÓN (2018 - 2023) ---

export const suzukiSwift2018 = {

    ...suzukiSwift2017,

    anio: 2018,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0_Front.jpg/1200px-2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0_Front.jpg',

    descripcion:
        'Plataforma educativa para Suzuki Swift 2018 (4ª Generación / Plataforma Heartect / Motores 1.2L K12N Dualjet y 1.4L Turbo Boosterjet para el Swift Sport).',

    informacionHistorica: {

        titulo: 'Suzuki Swift 2018',

        generacion: 'Cuarta generación (Chasis A2L - Plataforma Heartect)',

        familiaMotor: '1.2L K12M / K12N Dualjet / 1.4L K14C Boosterjet Turbo',

        tipoMotor: '4 cilindros Dualjet o 4 cilindros Turbo inyección directa',

        arquitectura: 'DOHC 16V VVT',

        alimentacion: 'Inyección Dualjet (Doble inyector) / Inyección Directa Turbo',

        encendido: 'Electrónico directo COP',

        refrigeracion: 'Refrigeración líquida de flujo optimizado',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Manual de 5V o 6V / Automática CVT / Automática de 6V'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2018,
            {
                tecnologia: '4ª Generación Heartect - Dualjet / Boosterjet Turbo',

                motorPrincipal: '1.2L Dualjet 82 HP / 1.4L Turbo 138 HP (Sport)'
            }
        );
    }
};


export const suzukiSwift2019 = {

    ...suzukiSwift2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2019. Mantenimiento, transmisión CVT y diagnóstico de inyección.',

    informacionHistorica: {

        ...suzukiSwift2018.informacionHistorica,

        titulo: 'Suzuki Swift 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2019,
            {
                tecnologia: '4ª Generación Heartect - Dualjet / Boosterjet',

                motorPrincipal: '1.2L Dualjet / 1.4L Boosterjet'
            }
        );
    }
};


export const suzukiSwift2020 = {

    ...suzukiSwift2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2020. Introducción masiva del sistema Híbrido ligero SHVS en Latinoamérica.',

    informacionHistorica: {

        ...suzukiSwift2018.informacionHistorica,

        titulo: 'Suzuki Swift 2020',

        anio: 2020,

        nota: 'Llegada de la versión Swift Hybrid SHVS (Mild-Hybrid 12V) con motor Dualjet.'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2020,
            {
                tecnologia: '4ª Generación - Dualjet / SHVS Mild-Hybrid 12V',

                motorPrincipal: '1.2L Dualjet SHVS Hybrid / 1.4L Turbo'
            }
        );
    }
};


export const suzukiSwift2021 = {

    ...suzukiSwift2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2021 (Facelift 4ª Generación / Sistema SHVS 12V de serie).',

    informacionHistorica: {

        ...suzukiSwift2020.informacionHistorica,

        titulo: 'Suzuki Swift 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2021,
            {
                tecnologia: '4ª Generación Facelift - Dualjet SHVS Mild-Hybrid',

                motorPrincipal: '1.2L K12N Dualjet SHVS 12V'
            }
        );
    }
};


export const suzukiSwift2022 = {

    ...suzukiSwift2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2022. Diagnóstico de la batería de litio SHVS, sensores y caja CVT.',

    informacionHistorica: {

        ...suzukiSwift2021.informacionHistorica,

        titulo: 'Suzuki Swift 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2022,
            {
                tecnologia: '4ª Generación - Dualjet SHVS 12V / Boosterjet 48V',

                motorPrincipal: '1.2L Dualjet SHVS / 1.4L Boosterjet SHVS 48V'
            }
        );
    }
};


export const suzukiSwift2023 = {

    ...suzukiSwift2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2023. Cierre de la cuarta generación con tecnología SHVS consolidada.',

    informacionHistorica: {

        ...suzukiSwift2022.informacionHistorica,

        titulo: 'Suzuki Swift 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2023,
            {
                tecnologia: '4ª Generación - Dualjet SHVS 12V / Boosterjet',

                motorPrincipal: '1.2L Dualjet SHVS / 1.4L Turbo'
            }
        );
    }
};


// --- 5ª GENERACIÓN (2024 - 2026) ---

export const suzukiSwift2024 = {

    ...suzukiSwift2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/2024_Suzuki_Swift_Front.jpg/1200px-2024_Suzuki_Swift_Front.jpg',

    descripcion:
        'Plataforma educativa para Suzuki Swift 2024 (Lanzamiento de la 5ª Generación con nuevo motor Z12E 1.2L de 3 cilindros y Mild-Hybrid SHVS).',

    informacionHistorica: {

        titulo: 'Suzuki Swift 2024',

        generacion: 'Quinta generación (Nueva evolución Heartect)',

        familiaMotor: '1.2L Z12E de 3 Cilindros Dualjet SHVS',

        tipoMotor: 'Motor de 3 cilindros en línea enfocado en torque térmico',

        arquitectura: 'DOHC 12V VVT',

        alimentacion: 'Inyección Electrónica Dualjet',

        encendido: 'Electrónico directo COP con parada i-Stop rápida',

        refrigeracion: 'Refrigeración de flujo cruzado y termostato de alta respuesta',

        distribucion: 'Cadena de distribución silenciosa de fricción reducida',

        transmision: 'Manual de 5 velocidades / Transmisión Automática CVT de nueva generación'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2024,
            {
                tecnologia: '5ª Generación - Motor Z12E 3 Cilindros SHVS Mild-Hybrid',

                motorPrincipal: '1.2L Z12E 3 Cilindros Dualjet 82 HP SHVS'
            }
        );
    }
};


export const suzukiSwift2025 = {

    ...suzukiSwift2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2025. Diagnóstico del motor Z12E de 3 cilindros, red CAN de asistencia y SHVS.',

    informacionHistorica: {

        ...suzukiSwift2024.informacionHistorica,

        titulo: 'Suzuki Swift 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2025,
            {
                tecnologia: '5ª Generación - Z12E 3 Cilindros SHVS 12V / AllGrip Auto',

                motorPrincipal: '1.2L Z12E 3-Cilindros SHVS'
            }
        );
    }
};


export const suzukiSwift2026 = {

    ...suzukiSwift2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Suzuki Swift 2026. Diagnóstico avanzado, motor Z12E 3 cil SHVS, caja CVT e inyección optimizada.',

    informacionHistorica: {

        ...suzukiSwift2025.informacionHistorica,

        titulo: 'Suzuki Swift 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoSwift(
            2026,
            {
                tecnologia: '5ª Generación - Z12E 3-Cilindros SHVS Mild-Hybrid 12V',

                motorPrincipal: '1.2L Z12E 3 Cilindros SHVS 82 HP'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE SUZUKI SWIFT
// ============================================================

export const suzukiSwift = {

    marca: 'Suzuki',

    modelo: 'Swift',

    tipo: 'Hatchback',

    imagen:
        'https://acnews.blob.core.windows.net/imgnews/large/NAZ_c9912243e7b44043a063235a8eb5d04d.jpg',

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

        2012: suzukiSwift2012,

        2013: suzukiSwift2013,

        2014: suzukiSwift2014,

        2015: suzukiSwift2015,

        2016: suzukiSwift2016,

        2017: suzukiSwift2017,

        2018: suzukiSwift2018,

        2019: suzukiSwift2019,

        2020: suzukiSwift2020,

        2021: suzukiSwift2021,

        2022: suzukiSwift2022,

        2023: suzukiSwift2023,

        2024: suzukiSwift2024,

        2025: suzukiSwift2025,

        2026: suzukiSwift2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
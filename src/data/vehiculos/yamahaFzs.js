const sistemasMotorFZS = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie 153cc / 149cc Blue Core Monocilíndrico 4T)',
        funcion:
            'Estructura de aleación de aluminio con recubrimiento de alta disipación térmica y diseño de baja fricción que aloja el pistón, cigüeñal y mecanismo de distribución SOHC.',
        fallas: [
            'Fugas de aceite por los sellos de la tapa de culata o empaque de base del cilindro',
            'Desgaste en la camisa por operar con nivel bajo de aceite (requiere 1000ml a 1150ml Yamalube 10W-40 / 20W-50 JASO MA2)',
            'Sensibilidad al recalentamiento prolongado en trancones pesados si las aletas están cubiertas de lodo',
            'Consumo prematuro de aceite en motores con kilometraje elevado o intervalos extendidos'
        ]
    },

    {
        nombre: 'Culata SOHC 2V con Tecnología Blue Core',
        funcion:
            'Aloja las válvulas de admisión y escape con ángulo optimizado de cámara hemisférica de combustión para maximizar la eficiencia del combustible.',
        fallas: [
            'Sonido de "cascabeleo" o golpeteo suave por luz de válvulas fuera de tolerancia (Admisión: 0.08-0.12mm / Escape: 0.12-0.16mm)',
            'Dificultad de encendido en frío o apague al soltar el acelerador por válvulas apretadas/pisadas',
            'Pérdida de compresión por acumulación de carbonilla en los asientos de válvula',
            'Fuga de compresión por desgaste del empaque de culata'
        ]
    },

    {
        nombre: 'Cigüeñal y Eje Balanceador (Anti-vibración)',
        funcion:
            'Transforma la fuerza alternativa del pistón en rotación hacia la caja de 5 velocidades e integra un eje de balance para neutralizar las vibraciones del motor.',
        fallas: [
            'Golpeteo seco interno por desgaste en el rodamiento de la cabeza de biela',
            'Fuga de aceite por el retén izquierdo del cigüeñal (lado estator/volante)',
            'Vibración anormal si existen desgastes en los rodamientos de apoyo del eje balanceador'
        ]
    },

    {
        nombre: 'Pistón Forjado / Alumite Ligero',
        funcion:
            'Pistón de aleación ligera que soporta altas temperaturas mecánicas transfiriendo el empuje de la combustión a la biela.',
        fallas: [
            'Anillos rascadores de aceite pegados por acumulación de sedimentos de lubricante degradado',
            'Pérdida progresiva de compresión en el cilindro',
            'Rayado de la falda por partículas abrasivas si no se reemplaza el filtro de aire de espuma o papel'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático Hidráulico/Muelle',
        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y el árbol de levas SOHC.',
        fallas: [
            'Ruido de sonajero metálico en la zona izquierda del motor durante arranques en frío',
            'Trabamiento del tensor automático de cadena de distribución',
            'Desgaste de las guías plásticas de caucho dentro del túnel de distribución'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración por Aire Convectivo Optimizado',
        funcion:
            'Disipa el calor generado mediante el flujo de aire directo a través de las aletas de refrigeración de la culata y cilindro.',
        fallas: [
            'Pérdida temporal de potencia por sobrecalentamiento térmico en condiciones extremas de tráfico',
            'Aletas del bloque obstruidas por suciedad o sedimentos acumulados'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba Trocoide y Elemento Filtrante Reemplazable',
        funcion:
            'Circula aceite a presión pasando por un filtro de papel externo en la tapa derecha del cárter hacia la culata y transmisión.',
        fallas: [
            'Falta de lubricación en la culata si el filtro de papel se instala al revés o no se reemplaza a tiempo',
            'Obstrucción en la malla tamiz del cárter por sedimentos o residuos de sellador',
            'Deslizamiento de los discos de embrague por usar aceites automotrices no especificados JASO MA/MA2'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleFZS = {

    titulo: 'Sistema de Inyección Electrónica Yamaha FI / Carburador BS26',

    funcionamiento:
        'En versiones FI (V2.0 a V4.0), la bomba sumergida entrega gasolina presurizada a ~2.5 bar. La ECU calcula la dosis exacta mediante sensores (TPS, MAP, IAT, FID, O2) y la inyecta pulverizada en el cuerpo de aceleración.',

    componentes: [
        'Tanque de combustible de 12.0 a 13.0 Litros con tapa ergonómica',
        'Módulo de bomba eléctrica de gasolina sumergida con regulador de presión',
        'Cuerpo de aceleración con inyector multipunto de alta atomización',
        'Sensor de posición de mariposa (TPS), Sensor de Presión MAP y Temperatura de Aire IAT',
        'Sensor de Temperatura del Motor (FID) y Sensor de Oxígeno (O2) en el múltiple',
        'Filtro de aire de elemento de papel viscoso / espuma de alta densidad',
        'Unidad de Control Electrónico ECU / FI de Yamaha'
    ],

    flujo: [
        '1. La bomba eléctrica presuriza la línea de baja/media presión hacia el inyector.',
        '2. La ECU procesa la información de los sensores de temperatura, presión y revoluciones.',
        '3. El inyector pulveriza el combustible en el conducto de admisión del cilindro.',
        '4. La mezcla entra a la cámara SOHC garantizando máxima eficiencia Blue Core.',
        '5. El sensor de oxígeno monitorea los gases y corrige la relación aire/combustible en tiempo real.'
    ],

    diagnostico: [
        'Medir la presión de combustible en la línea con manómetro Yamaha (~250 kPa / 36 PSI).',
        'Verificar destellos del indicador amarillo FI en el tablero para identificar códigos DTC.',
        'Limpiar el cuerpo de aceleración y verificar el paso de aire en la válvula de ralentí.',
        'Reemplazar el filtro de aire de papel viscoso si se observa saturado de suciedad.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoFZS = {

    titulo: 'Sistema de Encendido Transistorizado Digital (TCI / ECU FI)',

    funcionamiento:
        'El sensor CKP ubicado en la volante magnética envía la señal de posición del cigüeñal a la ECU. La ECU determina el instante preciso del salto de chispa y activa la bobina de encendido.',

    componentes: [
        {
            nombre: 'Sensor de Posición del Cigüeñal (CKP)',
            funcion:
                'Lee las marcas de la volante magnética para informar las RPM y punto del pistón a la ECU.'
        },

        {
            nombre: 'Unidad de Control Electrónico ECU FI',
            funcion:
                'Controla de manera integrada la curva de avance de encendido y el tiempo de inyección.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón Resistivo',
            funcion:
                'Transforma la señal eléctrica en un pulso de más de 20.000V.'
        },

        {
            nombre: 'Bujía de Encendido (NGK CPR8EA-9 / CPR7EA-9)',
            funcion:
                'Produce la chispa dentro del cilindro para detonar la mezcla comprimida.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el estado del fusible principal de 15A y del fusible del sistema FI (10A).',
        'Comprobar la carga de la batería de 12V en reposo (mínimo 12.5V; el sistema FI requiere buen voltaje).',
        'Verificar la resistencia y conexión del sensor CKP en el conector del estator.',
        'Inspeccionar el sensor de corte por ángulo de inclinación (Lean Angle Sensor) en la parte central.',
        'Medir la continuidad del interruptor del soporte lateral (pata) y de la manigueta de embrague.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposFZS = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. La válvula de admisión se abre y el sistema inyecta o carbura la mezcla atomizada de aire/gasolina.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Ingresar la máxima cantidad de mezcla fresca al cilindro.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la carga con ambas válvulas cerradas (relación de compresión 9.5:1 a 9.6:1 Blue Core).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y temperatura antes del brinco de la chispa de encendido.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía genera el arco eléctrico e inflama la mezcla. La expansión empuja el pistón hacia abajo transmitiendo el torque al cigüeñal y al eje balanceador.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar la potencia suave y progresiva que caracteriza la saga FZS.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende impulsando los gases quemados por la válvula de escape abierta hacia el catalizador de tres vías.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Expulsar los gases quemados para limpiar la cámara e iniciar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasFZS = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 22mm)',
        'Llave o copa delgada para bujías de 16mm (5/8")',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para calibración de válvulas (0.08mm - 0.16mm)',
        'Alicate universal y alicate de punta',
        'Bandeja de recolección de aceite (1.5 litros) y embudo graduado'
    ],

    diagnostico: [
        'Multímetro digital de alta precisión para medir voltajes DC/AC, resistencia y frecuencia',
        'Manómetro de presión de gasolina con adaptadores específicos Yamaha FI',
        'Escáner o conector de diagnóstico Yamaha YDT / FI',
        'Compresímetro con acople de rosca M10 / M12'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm (8 Nm a 60 Nm)',
        'Extractor de volante magnético específico Yamaha FZ/FZS Series',
        'Herramienta sujetadora de embrague y extractor de rodamientos de dirección',
        'Equipo de limpieza de inyectores por ultrasonido'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralFZS = {

    principio:
        'Diagnóstico metódico de 3 pilares: Lectura de códigos DTC en el sistema FI/ECU, verificación de presión de combustible en la bomba y comprobación de compresión y chispa.',

    secuencia: [

        '1. Entrevistar al usuario sobre la falla y verificar la presencia de la luz de advertencia FI o ABS en el tablero.',

        '2. Medir la carga de la batería de 12V en reposo (mínimo 12.5V para el correcto arranque del sistema FI).',

        '3. Conectar la herramienta de diagnóstico Yamaha YDT o contar los destellos de código de falla en el testigo FI.',

        '4. Medir la presión de la bomba de combustible FI (~36 PSI constantes).',

        '5. Verificar la intensidad y consistencia de la chispa en la bujía NGK.',

        '6. Evaluar la compresión del motor en el orificio de la bujía.',

        '7. Verificar la holgura de válvulas en frío (Admisión: 0.08-0.12mm / Escape: 0.12-0.16mm).',

        '8. Sustituir o reparar componentes usando repuestos originales Yamaha Genuine Parts.',

        '9. Efectuar la calibración de ralentí y reinicio de parámetros de mezcla si se intervino el cuerpo de inyección.',

        '10. Realizar prueba de ruta para confirmar la potencia, estabilidad y funcionamiento del ABS.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesFZS = [

    {
        titulo: 'El motor se apaga repentinamente en ralentí o dificulta encender en frío',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración / válvula de ralentí sucia o con carbonilla',
            'Válvula de admisión apretada/pisada sin holgura de calibración',
            'Filtro de aire de papel viscoso obstruido con tierra o polvillo',
            'Inyector de combustible parcialmente tapado con sedimentos'
        ],

        diagnostico: [
            'Realizar limpieza preventiva al cuerpo de aceleración y conductos del paso de aire.',
            'Calibrar válvulas en frío (Admisión: 0.10mm / Escape: 0.14mm).',
            'Sustituir el filtro de aire de papel viscoso (No soplar con aire a presión).',
            'Efectuar prueba de pulverización al inyector de combustible.'
        ]
    },

    {
        titulo: 'Testigo FI (Inyección Electrónica) encendido o parpadeando en el tablero',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor O2 del escape sucio, desconectado o defectuoso',
            'Sensor de temperatura del motor (FID) con lecturas erróneas',
            'Bajo voltaje de batería o falla en el sistema de carga del estator',
            'Fuga de presión en la bomba de gasolina sumergida'
        ],

        diagnostico: [
            'Escanear la ECU con la herramienta Yamaha YDT para leer el código almacenado.',
            'Verificar la continuidad y sulfatación en los arneses de los sensores del motor.',
            'Medir el voltaje de carga del alternador en marcha (debe estar entre 13.5V y 14.5V).',
            'Borrar el historial de errores DTC en la ECU.'
        ]
    },

    {
        titulo: 'Tirones o vacilación al acelerar en marchas altas',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Presión de bomba de combustible deficiente por filtro de la bomba obstruido',
            'Bujía de encendido desgastada o con la holgura del electrodo fuera de norma',
            'Agua o sedimentos acumulados en el fondo del tanque de gasolina'
        ],

        diagnostico: [
            'Conectar el manómetro de combustible y realizar prueba de aceleración sostenida.',
            'Sustituir la bujía por la especificada (NGK CPR8EA-9).',
            'Drenar la gasolina del tanque y limpiar la malla de succión de la bomba.'
        ]
    },

    {
        titulo: 'Testigo de ABS permanece encendido fija en el tablero',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor de velocidad de rueda delantera sucio con barro o virutas metálicas',
            'Anillo dentado del ABS doblado o fisurado',
            'Distancia excesiva (gap) entre el sensor y el disco dentado'
        ],

        diagnostico: [
            'Limpiar la punta del sensor magnético del ABS delantero.',
            'Inspeccionar que el disco dentado no tenga deformaciones.',
            'Medir la distancia entre el sensor y la corona dentada con un calibrador de galgas.'
        ]
    },

    {
        titulo: 'Ruido metálico en la zona izquierda del motor al arrancar',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Cadena de distribución destensionada o estirada',
            'Tensor automático de la cadena de distribución trabado o fatigado',
            'Luz de balancines descalibrada'
        ],

        diagnostico: [
            'Verificar la retracción y presión del tensor automático de distribución.',
            'Inspeccionar el desgaste de los patines guía de caucho internos.',
            'Verificar y reajustar las luces de válvulas en la culata SOHC.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoFZS = {

    objetivo:
        'Preservar la máxima eficiencia tecnológica del motor Blue Core (excelente rendimiento de gasolina), proteger el sistema de inyección electrónica FI y mantener la seguridad del sistema de frenos ABS.',

    actividades: [

        {
            nombre: 'Aceite de motor y Filtro de papel',
            accion:
                'Reemplazar el aceite cada 3.000 km o 4.000 km utilizando 1000ml (1150ml con filtro) de lubricante Yamalube 10W-40 / 20W-50 JASO MA2. Sustituir el filtro de papel de aceite en cada cambio.'
        },

        {
            nombre: 'Calibración de Válvulas SOHC',
            accion:
                'Inspeccionar y calibrar en frío cada 6.000 km. Tolerancias recomendadas: Admisión (0.08mm - 0.12mm) / Escape (0.12mm - 0.16mm).'
        },

        {
            nombre: 'Filtro de Aire (Papel Viscoso)',
            accion:
                'Inspeccionar cada 6.000 km y reemplazar de forma obligatoria cada 12.000 km o 15.000 km. No limpiar con sopladora de aire.'
        },

        {
            nombre: 'Mantenimiento del Cuerpo FI y Inyector',
            accion:
                'Realizar limpieza preventiva del cuerpo de aceleración e inyector de combustible cada 12.000 km.'
        },

        {
            nombre: 'Kit de Arrastre y Cadena de Transmisión',
            accion:
                'Limpiar, tensionar y lubricar la cadena cada 500 km. Mantener la holgura entre 25mm y 35mm. Reemplazar el kit entre 18.000 km y 22.000 km.'
        },

        {
            nombre: 'Sistema de Frenos (Disco / ABS)',
            accion:
                'Inspeccionar espesor de pastillas de freno delanteras y traseras cada 3.000 km; renovar el líquido de frenos DOT 4 del circuito ABS cada 2 años.'
        },

        {
            nombre: 'Bujía de Encendido',
            accion:
                'Inspeccionar y ajustar la luz del electrodo (0.8mm - 0.9mm) cada 6.000 km; reemplazar bujía NGK CPR8EA-9 cada 12.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadFZS = [

    'Al trabajar sobre el sistema de combustible FI, despresurice la línea desconectando el arnés de la bomba de gasolina y dando marcha antes de soltar la manguera de alta presión.',

    'Nunca desconecte los bornes de la batería con el motor encendido; picos de voltaje pueden quemar la ECU y el módulo del ABS.',

    'Apoye la motocicleta sobre el soporte central en superficie plana antes de desmontar las ruedas para no afectar los sensores del ABS.',

    'Evite golpear la corona dentada del ABS al realizar el cambio de llanta o mantenimiento de las pastillas de freno.',

    'Respete el torque de apriete en el tapón de drenaje de aceite (20 Nm) y en la tapa del filtro de aceite (10 Nm) para prevenir fisuras en las roscas del bloque.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosFZS = [

    {
        id: 1,

        titulo: 'Introducción a la Yamaha FZS y Mantenimiento Preventivo',

        nivel: 'Básico',

        descripcion:
            'Aprende la arquitectura del motor Blue Core, cambio de aceite, sustitución del filtro de papel, tensión de cadena y ajuste de mandos.',

        temas: [
            'Evolución de modelos Yamaha FZ16, FZS V2.0, V3.0 y V4.0 Deluxe',
            'Procedimiento correcto de cambio de aceite y filtro de papel',
            'Inspección y sustitución del filtro de aire de papel viscoso',
            'Mantenimiento de la cadena de transmisión y frenos de disco'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del Motor Blue Core y Calibración de Válvulas',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a ubicar el Punto Muerto Superior (PMS) en la volante y efectuar el reglaje de válvulas en la culata SOHC.',

        temas: [
            'Ubicación de las marcas I y I-T en la volante magnética y piñón de levas',
            'Reglaje de válvulas en frío con calibrador de galgas (0.10mm / 0.14mm)',
            'Inspección y prueba del tensor automático de distribución',
            'Diagnóstico y solución de pérdidas de compresión y ruidos metálicos'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica Yamaha FI y Diagnóstico por Escáner YDT',

        nivel: 'Intermedio',

        descripcion:
            'Aprende sobre la gestión electrónica FI de Yamaha, lectura de códigos de falla DTC, prueba de sensores y bomba de gasolina.',

        temas: [
            'Sensores del sistema FI: TPS, MAP, IAT, FID, O2 y función de la ECU',
            'Uso de la herramienta de diagnóstico Yamaha YDT / Escáner OBD2',
            'Prueba de presión y caudal de la bomba de combustible',
            'Limpieza del inyector por ultrasonido y cuerpo de aceleración'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema de Frenos ABS, Módulo de Conectividad Y-Connect y Red Eléctrica',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico del sistema ABS en la rueda delantera, sincronización Bluetooth con Y-Connect y resolución de fallas de carga.',

        temas: [
            'Componentes del ABS: Módulo hidráulico, sensor de rueda y anillo dentado',
            'Procedimiento de purgado de líquido DOT 4 en el circuito ABS',
            'Módulo de conectividad CCU Y-Connect y lectura de telemetría',
            'Pruebas del estator, regulador/rectificador y circuito de luces LED'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioFZS = [

    {
        termino: 'FZS',
        significado:
            'Modelo insignia de motocicleta urbana deportiva de estilo Naked de Yamaha, famosa por su chasis robusto, llanta trasera ancha y tecnología eficiente.'
    },

    {
        termino: 'Blue Core',
        significado:
            'Filosofía de desarrollo de motores de Yamaha enfocada en maximizar la eficiencia de combustión, reducir las pérdidas de potencia por fricción y optimizar el enfriamiento.'
    },

    {
        termino: 'FI',
        significado:
            'Fuel Injection. Sistema de inyección electrónica de combustible gestionado por la ECU para sustituir al carburador tradicional.'
    },

    {
        termino: 'ABS',
        significado:
            'Anti-lock Braking System. Sistema antibloqueo de frenos en la rueda delantera que evita el deslizamiento en frenadas de emergencia.'
    },

    {
        termino: 'Y-Connect',
        significado:
            'Aplicación para smartphone y módulo de conectividad Bluetooth de Yamaha que permite ver telemetría, alertas de mantenimiento y ubicación.'
    },

    {
        termino: 'TCI',
        significado:
            'Transistor Controlled Ignition. Sistema de encendido controlado por transistores integrado en la ECU.'
    },

    {
        termino: 'YDT',
        significado:
            'Yamaha Diagnostic Tool. Herramienta de escaneo de diagnóstico especializada para motocicletas Yamaha.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoFZS(anio, configuracion) {

    const sintomasMapeados = fallasComunesFZS.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Yamaha FZS ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasFZS.basicas,
            ...herramientasFZS.diagnostico
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

                titulo: 'Motor Yamaha 153cc / 149cc Blue Core y Sistema FI',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, ECU FI y Conectividad',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido TCI y Sensores FI',

                        sintomas: [

                            {
                                titulo: 'El motor no enciende o la luz FI permanece encendida',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Revisión del voltaje de batería, presión de bomba FI, fusibles y diagnóstico con escáner YDT.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Manómetro de presión FI',
                                    'Escáner Yamaha YDT'
                                ],

                                pasos: [
                                    '1. Verificar el voltaje de la batería en reposo (debe estar por encima de 12.5V).',
                                    '2. Medir la presión de la bomba de combustible en la línea (~36 PSI).',
                                    '3. Leer códigos de falla almacenados en la ECU utilizando la herramienta YDT.',
                                    '4. Comprobar la chispa en la bujía NGK CPR8EA-9 y la continuidad del capuchón.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 5 Velocidades y Frenos ABS',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague, Cadena y Módulo ABS',

                        sintomas: [

                            {
                                titulo: 'Luz de ABS encendida en el tablero o embrague deslizante',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Ajuste del cable de embrague, limpieza del sensor ABS delantero y revisión de discos con aceite JASO MA2.',

                                herramientas: [
                                    'Llaves fijas de 10mm y 12mm',
                                    'Calibrador de galgas',
                                    'Bandeja de fluido'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre en la palanca de embrague (10mm a 15mm).',
                                    '2. Confirmar el uso de aceite Yamalube 10W-40 con norma JASO MA2.',
                                    '3. Limpiar el sensor magnético del ABS delantero y comprobar la distancia al disco dentado.'
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
// MODELOS INDIVIDUALES POR AÑO (YAMAHA FZS 2012 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN / CARBURADOR FZ16 / FZS (2012 - 2015) ---

export const yamahaFzs_2012 = {

    marca: 'Yamaha',

    modelo: 'FZS',

    anio: 2012,

    tipo: 'Motocicleta Urbana / Naked',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yamaha_FZ16.jpg/1200px-Yamaha_FZ16.jpg',

    descripcion:
        'Plataforma educativa para Yamaha FZS / FZ16 2012 (Motor 153cc SOHC 4T monocilíndrico, carburador Mikuni BS26, caja de 5 velocidades y freno de disco delantero con llanta trasera ancha de 140mm).',

    informacionHistorica: {

        titulo: 'Yamaha FZS 2012',

        generacion: 'Primera generación FZ16 / FZS Clásica',

        familiaMotor: '153cc 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T refrigerado por aire con eje balancín',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Carburador Mikuni BS26 de vacío',

        encendido: 'Digital TCI (Arranque eléctrico y pedal)',

        refrigeracion: 'Enfriado por aire convectivo',

        distribucion: 'Cadena de distribución silenciosa',

        transmision: 'Manual de 5 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Yamaha FZS 2012?',

        explicacion:
            'Un motor monocilíndrico de 153cc de gran torque a bajas y medias revoluciones, asistido por un carburador Mikuni BS26 de respuesta suave y un chasis de alta rigidez.',

        formulaSimple:
            'Aire + gasolina por carburador BS26 + compresión + chispa TCI = torque contundente de 5 marchas',

        flujoEnergia: [
            'Tanque de combustible (12.0 Litros)',
            'Llave de reserva',
            'Carburador Mikuni BS26',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal y Eje Balanceador',
            'Embrague multidisco húmedo',
            'Caja de 5 velocidades',
            'Piñón de salida',
            'Cadena de transmisión',
            'Rueda trasera con llanta 140/60-17'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposFZS,

    componentesMotor: sistemasMotorFZS,

    sistemaCombustible: sistemaCombustibleFZS,

    sistemaEncendido: sistemaEncendidoFZS,

    refrigeracion: {

        tipo: 'Refrigeración por aire convectivo',

        elementos: [
            'Aletas de disipación en cilindro de aluminio',
            'Aletas en culata SOHC',
            'Flujo de aire por desplazamiento'
        ],

        funcionamiento:
            'El aire ambiental disipa la temperatura discurriendo a través de las aletas del cilindro.'
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
            'Circula aceite Yamalube 10W-40 / 20W-50 JASO MA2 a través del filtro de papel hacia la culata y transmisión.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol SOHC',

        tipo: 'Cadena silenciosa con tensor automático',

        funcion:
            'Mantiene la sincronización exacta entre cigüeñal y válvulas.',

        advertencia:
            'Verifique la luz de calibración de válvulas en frío a 0.10mm (Admisión) y 0.14mm (Escape).'
    },

    diagnosticoGeneral: diagnosticoGeneralFZS,

    fallasComunes: fallasComunesFZS,

    herramientas: herramientasFZS,

    mantenimiento: mantenimientoFZS,

    cursos: cursosFZS,

    seguridad: seguridadFZS,

    glosario: glosarioFZS,

    reglaPrincipal:
        'LECTURA DTC → PRESIÓN FI → CHISPA → COMPRESIÓN → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2012,
            {
                tecnologia: '1ª Gen - Carburador Mikuni BS26 / 153cc SOHC',

                motorPrincipal: '153cc Monocilíndrico 4T (13.8 HP / 13.6 Nm)'
            }
        );
    }
};


export const yamahaFzs_2013 = {

    ...yamahaFzs_2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Yamaha FZS 2013. Mantenimiento del filtro de aceite de papel, carburación y frenos.',

    informacionHistorica: {

        ...yamahaFzs_2012.informacionHistorica,

        titulo: 'Yamaha FZS 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2013,
            {
                tecnologia: '1ª Gen - Carburador Mikuni BS26 / 153cc',

                motorPrincipal: '153cc Monocilíndrico 4T'
            }
        );
    }
};


export const yamahaFzs_2014 = {

    ...yamahaFzs_2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Yamaha FZS 2014. Guías de servicio para motor 153cc, válvulas y sistema eléctrico.',

    informacionHistorica: {

        ...yamahaFzs_2013.informacionHistorica,

        titulo: 'Yamaha FZS 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2014,
            {
                tecnologia: '1ª Gen - Carburador Mikuni BS26 / 153cc',

                motorPrincipal: '153cc Monocilíndrico 4T'
            }
        );
    }
};


export const yamahaFzs_2015 = {

    ...yamahaFzs_2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Yamaha FZS 2015. Cierre de la versión carburada e inicio de la transición a inyección electrónica.',

    informacionHistorica: {

        ...yamahaFzs_2014.informacionHistorica,

        titulo: 'Yamaha FZS 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2015,
            {
                tecnologia: '1ª Gen - Carburador / Transición a FI',

                motorPrincipal: '153cc Monocilíndrico 4T'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN FZS V2.0 BLUE CORE FI (2016 - 2019) ---

export const yamahaFzs_2016 = {

    ...yamahaFzs_2015,

    anio: 2016,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yamaha_FZ16.jpg/1200px-Yamaha_FZ16.jpg',

    descripcion:
        'Plataforma educativa para Yamaha FZS V2.0 FI 2016 (Lanzamiento con nuevo motor Blue Core de 149cc, Inyección Electrónica FI, chasis alivianado y diseño renovado).',

    informacionHistorica: {

        titulo: 'Yamaha FZS V2.0 FI 2016',

        generacion: 'Segunda generación (FZS V2.0 Blue Core FI)',

        familiaMotor: '149cc Blue Core 4 Tiempos',

        tipoMotor: 'Monocilíndrico 4T SOHC con tecnología de baja fricción',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Inyección Electrónica FI Yamaha',

        encendido: 'Digital TCI / ECU FI',

        refrigeracion: 'Enfriado por aire de flujo natural',

        distribucion: 'Cadena de distribución silenciosa de baja fricción',

        transmision: 'Manual de 5 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2016,
            {
                tecnologia: '2ª Gen V2.0 - Motor Blue Core 149cc / Inyección FI',

                motorPrincipal: '149cc Blue Core FI (13.0 HP / 12.8 Nm)'
            }
        );
    }
};


export const yamahaFzs_2017 = {

    ...yamahaFzs_2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Yamaha FZS V2.0 2017. Diagnóstico de inyección electrónica FI, sensores y mantenimiento.',

    informacionHistorica: {

        ...yamahaFzs_2016.informacionHistorica,

        titulo: 'Yamaha FZS V2.0 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2017,
            {
                tecnologia: '2ª Gen V2.0 - Blue Core FI / SOHC 2V',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaFzs_2018 = {

    ...yamahaFzs_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Yamaha FZS V2.0 2018 (Introducción de opción de freno de disco en la rueda trasera en ediciones especiales).',

    informacionHistorica: {

        ...yamahaFzs_2017.informacionHistorica,

        titulo: 'Yamaha FZS V2.0 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2018,
            {
                tecnologia: '2ª Gen V2.0 - Blue Core FI / Doble Disco',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaFzs_2019 = {

    ...yamahaFzs_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Yamaha FZS V2.0 / V3.0 2019. Cierre de la serie V2.0 e inicio de la tercera generación.',

    informacionHistorica: {

        ...yamahaFzs_2018.informacionHistorica,

        titulo: 'Yamaha FZS V2.0 / V3.0 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2019,
            {
                tecnologia: '2ª / 3ª Gen - Blue Core FI / Transición V3.0',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


// --- TERCERA Y CUARTA GENERACIÓN FZS V3.0 / V4.0 / ABS / Y-CONNECT (2020 - 2026) ---

export const yamahaFzs_2020 = {

    ...yamahaFzs_2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yamaha_FZ16.jpg/1200px-Yamaha_FZ16.jpg',

    descripcion:
        'Plataforma educativa para Yamaha FZS V3.0 FI 2020 (Lanzamiento con sistema ABS en rueda delantera, faro principal LED, subchasis elevado y tablero digital LCD).',

    informacionHistorica: {

        titulo: 'Yamaha FZS V3.0 ABS 2020',

        generacion: 'Tercera generación (FZS V3.0 ABS)',

        familiaMotor: '149cc Blue Core Single-Channel ABS',

        tipoMotor: 'Monocilíndrico 4T SOHC de ultra baja fricción',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Inyección Electrónica FI Yamaha',

        encendido: 'Digital TCI / ECU FI',

        refrigeracion: 'Enfriado por aire de flujo natural',

        distribucion: 'Cadena de distribución silenciosa',

        transmision: 'Manual de 5 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2020,
            {
                tecnologia: '3ª Gen V3.0 - Blue Core FI / ABS Delantero / Faro LED',

                motorPrincipal: '149cc Blue Core FI (12.4 HP / 13.6 Nm)'
            }
        );
    }
};


export const yamahaFzs_2021 = {

    ...yamahaFzs_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Yamaha FZS V3.0 Vintage / Bluetooth 2021 (Integración del sistema de conectividad Y-Connect).',

    informacionHistorica: {

        ...yamahaFzs_2020.informacionHistorica,

        titulo: 'Yamaha FZS V3.0 Bluetooth 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2021,
            {
                tecnologia: '3ª Gen V3.0 - Blue Core FI / ABS / Y-Connect',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaFzs_2022 = {

    ...yamahaFzs_2022,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Yamaha FZS V3.0 Dlx 2022. Mantenimiento del módulo ABS, diagnóstico de inyección y conectividad.',

    informacionHistorica: {

        ...yamahaFzs_2021.informacionHistorica,

        titulo: 'Yamaha FZS V3.0 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2022,
            {
                tecnologia: '3ª Gen V3.0 - Blue Core FI / ABS / Y-Connect',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaFzs_2023 = {

    ...yamahaFzs_2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Yamaha FZS V4.0 Deluxe 2023 (Lanzamiento de la V4.0 con sistema de control de tracción TCS, direccionales LED y nuevo frontal con luz DRL).',

    informacionHistorica: {

        ...yamahaFzs_2022.informacionHistorica,

        titulo: 'Yamaha FZS V4.0 Deluxe 2023',

        generacion: 'Cuarta generación (FZS V4.0 Deluxe con TCS)',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2023,
            {
                tecnologia: '4ª Gen V4.0 - Blue Core FI / ABS / TCS / Y-Connect',

                motorPrincipal: '149cc Blue Core FI (12.4 HP / 13.3 Nm)'
            }
        );
    }
};


export const yamahaFzs_2024 = {

    ...yamahaFzs_2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yamaha_FZ16.jpg/1200px-Yamaha_FZ16.jpg',

    descripcion:
        'Plataforma educativa para Yamaha FZS V4.0 2024 (Ediciones Deluxe con Control de Tracción TCS y Y-Connect).',

    informacionHistorica: {

        ...yamahaFzs_2023.informacionHistorica,

        titulo: 'Yamaha FZS V4.0 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2024,
            {
                tecnologia: '4ª Gen V4.0 - Blue Core FI / ABS / TCS Control de Tracción',

                motorPrincipal: '149cc Blue Core FI (12.4 HP)'
            }
        );
    }
};


export const yamahaFzs_2025 = {

    ...yamahaFzs_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Yamaha FZS V4.0 2025. Diagnóstico integral de motor Blue Core, inyección FI, freno ABS y TCS.',

    informacionHistorica: {

        ...yamahaFzs_2024.informacionHistorica,

        titulo: 'Yamaha FZS V4.0 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2025,
            {
                tecnologia: '4ª Gen V4.0 - Blue Core FI / ABS / TCS / Y-Connect',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaFzs_2026 = {

    ...yamahaFzs_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Yamaha FZS V4.0 Deluxe 2026. Diagnóstico completo de motor Blue Core 149cc, Inyección FI, freno ABS de monocanal, Control de Tracción TCS, conectividad Y-Connect y transmisión de 5 marchas.',

    informacionHistorica: {

        ...yamahaFzs_2025.informacionHistorica,

        titulo: 'Yamaha FZS V4.0 Deluxe 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoFZS(
            2026,
            {
                tecnologia: '4ª Gen V4.0 Deluxe - Blue Core FI / ABS / TCS Control de Tracción / Y-Connect',

                motorPrincipal: '149cc Blue Core FI (12.4 HP / 13.3 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE YAMAHA FZS
// ============================================================

export const yamahaFzs = {

    marca: 'Yamaha',

    modelo: 'FZS',

    tipo: 'Motocicleta Urbana / Naked',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yamaha_FZ16.jpg/1200px-Yamaha_FZ16.jpg',

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

        2012: yamahaFzs_2012,

        2013: yamahaFzs_2013,

        2014: yamahaFzs_2014,

        2015: yamahaFzs_2015,

        2016: yamahaFzs_2016,

        2017: yamahaFzs_2017,

        2018: yamahaFzs_2018,

        2019: yamahaFzs_2019,

        2020: yamahaFzs_2020,

        2021: yamahaFzs_2021,

        2022: yamahaFzs_2022,

        2023: yamahaFzs_2023,

        2024: yamahaFzs_2024,

        2025: yamahaFzs_2025,

        2026: yamahaFzs_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
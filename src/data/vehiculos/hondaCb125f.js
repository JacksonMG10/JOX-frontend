const sistemasMotorCB125F = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie 124.7cc eSP / OHC Monocilíndrico 4T)',
        funcion:
            'Estructura de aleación de aluminio con camisa descentrada (Offset Cylinder) refrigerada por aire que reduce la fricción entre el pistón y la pared en la fase de combustión.',
        fallas: [
            'Fugas de aceite por empaques de tapa de culata o visor de nivel de aceite',
            'Desgaste de la camisa por operar con bajo nivel de lubricante (requiere 800ml a 1000ml Honda 10W-30 / 20W-50 JASO MA)',
            'Acumulación de sedimentos si no se retiran las impurezas de la malla tamiz del cárter',
            'Humo azul por el escape por desgaste de sellos de válvula o anillos'
        ]
    },

    {
        nombre: 'Culata SOHC 2V con Balancines de Rodillo (Roller Rocker Arm)',
        funcion:
            'Aloja las válvulas de admisión y escape accionadas por balancines con rodamientos de aguja para minimizar la fricción mecánica con el árbol de levas.',
        fallas: [
            'Sonido de "chascarrillo" o golpeteo suave por holgura descalibrada de válvulas (Admisión: 0.08mm / Escape: 0.12mm)',
            'Dificultad para encender en frío por válvulas pisadas (sin tolerancia)',
            'Pérdida de compresión por depósito de carbón en el asiento de las válvulas',
            'Fuga de compresión por desgaste del empaque de culata'
        ]
    },

    {
        nombre: 'Cigüeñal y Generador ACG (Alternating Current Generator)',
        funcion:
            'Convierte el movimiento alternativo del pistón en rotación y en versiones eSP funciona como motor de arranque ultrasilencioso (sin piñones de arranque ni Bendix tradicional) y alternador.',
        fallas: [
            'Dificultad en el sistema de arranque silencioso ACG por baja carga en la batería de 12V',
            'Fuga de aceite por el retén del cigüeñal en la tapa izquierda (lado estator)',
            'Vibración excesiva por desgaste en rodamientos de apoyo del cigüeñal'
        ]
    },

    {
        nombre: 'Pistón Ligero con Faldón de Baja Fricción',
        funcion:
            'Transmite la fuerza de combustión a la biela maximizando el rendimiento térmico y reduciendo pérdidas por rozamiento.',
        fallas: [
            'Anillos pegados por acumulación de barnices de aceite degradado',
            'Pérdida de compresión y falta de potencia al acelerar',
            'Rayado de la falda por partículas suspendidas al no cambiar el filtro de aire'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático Hidráulico/Muelle',
        funcion:
            'Mantiene la sincronización milimétrica entre el cigüeñal y el árbol de levas SOHC.',
        fallas: [
            'Sonajero en el lado izquierdo del motor durante arranques en frío',
            'Trabamiento del tensor automático de cadena de distribución',
            'Desgaste prematuro de las guías plásticas internas por aceite sucio'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración por Aire Convectivo Optimizado',
        funcion:
            'Mantiene la temperatura operacional a través de las aletas de radiación diseñadas en el bloque y culata.',
        fallas: [
            'Pérdida de rendimiento en embotellamientos prolongados por sobrecalentamiento',
            'Aletas del bloque obstruidas con fango o sedimentos pesados'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Bomba Trocoide y Tamiz en Cárter',
        funcion:
            'Circula aceite a presión hacia la culata, balancines de rodillo y transmisión de 5 velocidades.',
        fallas: [
            'Malla/tamiz del cárter tapada con residuos de empaque o virutas metálicas',
            'Ruidos metálicos en la culata por falta de presión de lubricante',
            'Patinamiento del embrague por usar aceites con aditivos antifricción para automóvil (No JASO MA)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleCB125F = {

    titulo: 'Sistema de Inyección Electrónica Programada Honda PGM-FI / Carburador Controlado',

    funcionamiento:
        'Una bomba sumergida presuriza la gasolina a ~2.9 bar. La computadora ECM calcula el volumen exacto de inyección basándose en sensores (TP, MAP/IAT, EOT, O2) para atomizar el combustible en la entrada de la válvula.',

    componentes: [
        'Tanque de combustible de 11.0 a 13.0 Litros con tapa de sellado',
        'Módulo de bomba de gasolina de alta presión sumergida con filtro interno',
        'Inyector mono-punto de múltiples orificios ultra finos',
        'Cuerpo de aceleración con sensor tripolar (IAT, MAP, TP) o válvula IACV',
        'Sensor de temperatura del motor (EOT) y Sensor de Oxígeno (O2) en el escape',
        'Filtro de aire de papel viscoso de alto flujo (no lavable)',
        'Unidad de control electrónico del motor (ECM PGM-FI)'
    ],

    flujo: [
        '1. La bomba en el tanque presuriza la línea de combustible hacia el inyector.',
        '2. Al abrir el switch, la ECM verifica los datos de temperatura y presión barométrica.',
        '3. El inyector pulveriza la dosis precisa de gasolina en el cuerpo de aceleración.',
        '4. La mezcla entra a la cámara de combustión optimizando la respuesta de aceleración.',
        '5. El sensor de oxígeno monitorea los gases quemados y corrige la mezcla en bucle cerrado.'
    ],

    diagnostico: [
        'Medir la presión de la bomba de gasolina PGM-FI en el riel (debe situarse cerca de 294 kPa / 43 PSI).',
        'Contar los destellos del testigo MIL en el tablero para identificar códigos de falla del PGM-FI.',
        'Comprobar la estanqueidad y limpieza del inyector por ultrasonido si presenta tirones.',
        'Sustituir el filtro de aire de papel viscoso si presenta saturación de polvo.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoCB125F = {

    titulo: 'Sistema de Encendido Totalmente Transistorizado (DC-CDI / PGM-FI)',

    funcionamiento:
        'El sensor de posición del cigüeñal (CKP) envía pulsos a la unidad ECM, la cual determina el momento ideal de ignición y activa la bobina de alta tensión.',

    componentes: [
        {
            nombre: 'Sensor CKP (Crankshaft Position Sensor)',
            funcion:
                'Lee las marcas de la volante magnética para informar las RPM y el punto del pistón a la ECM.'
        },

        {
            nombre: 'Unidad de Control ECM PGM-FI',
            funcion:
                'Gestión electrónica integral del avance de tiempo de chispa e inyección de combustible.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón Supresor',
            funcion:
                'Eleva la tensión para garantizar el salto del arco eléctrico en la bujía.'
        },

        {
            nombre: 'Bujía de Encendido (NGK CPR7EA-9 / CPR8EA-9)',
            funcion:
                'Genera la chispa directa dentro del cilindro para iniciar la combustión.'
        }
    ],

    fallaNoHayChispa: [
        'Comprobar el fusible principal de 10A/15A y fusible PGM-FI en la caja de fusibles.',
        'Verificar el voltaje de la batería en reposo (mínimo 12.5V; el sistema PGM-FI no opera sin buena batería).',
        'Comprobar la resistencia y señal del sensor CKP en el conector del estator.',
        'Inspeccionar el sensor de ángulo de inclinación / caída (Bank Angle Sensor) si aplica.',
        'Verificar la continuidad de masa de la ECM y el estado del capuchón de bujía.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposCB125F = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. La válvula de admisión abre y el sistema PGM-FI inyecta la mezcla atomizada de aire y gasolina.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Llenar la cámara de combustión con la máxima eficiencia volumétrica.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla con ambas válvulas cerradas (relación de compresión 9.0:1 / 10.0:1 en eSP).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y la temperatura de la mezcla antes del encendido.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía enciende la mezcla. La fuerza de la combustión empuja el pistón descentrado (Offset) hacia abajo con reducida fricción lateral.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Producir la potencia de 10.8 HP y mover la caja de 5 marchas con extrema suavidad.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende impulsando los gases quemados por la válvula de escape hacia el tubo con catalizador de tres vías.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Expulsar los gases para reducir emisiones y dar inicio a un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasCB125F = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 24mm)',
        'Llave delgada de bujías de 16mm (5/8")',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para regulación de válvulas (0.08mm - 0.12mm)',
        'Alicate universal y alicate para retenes',
        'Bandeja de recolección de aceite (1.5 litros) y embudo graduado'
    ],

    diagnostico: [
        'Multímetro digital para mediciones de sensores y actuadores de inyección',
        'Manómetro de presión de combustible con acoples rápidos PGM-FI Honda',
        'Lector de códigos DTC o cable puente SCS de servicio Honda',
        'Compresímetro con acople M10 / M12'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm (10 Nm a 60 Nm)',
        'Extractor de volante magnético específico Honda CB/CG Series',
        'Herramienta sujetadora de embrague y extractor de rodamientos',
        'Bomba de vacío para purgado del sistema de frenos combinados CBS'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralCB125F = {

    principio:
        'Diagnóstico metódico PGM-FI: Análisis de lectura del testigo MIL, verificación de presión de bomba de combustible, chispa de alta intensidad y compresión mecánica.',

    secuencia: [

        '1. Entrevistar al usuario sobre la falla y verificar la presencia de destellos MIL en el tablero.',

        '2. Medir el voltaje de la batería en reposo (debe registrar 12.5V o más) y sus bornes.',

        '3. Conectar el puente de servicio SCS para leer códigos de error almacenados en la ECM.',

        '4. Medir la presión de combustible de la bomba PGM-FI (debe mantenerse firme en ~43 PSI).',

        '5. Comprobar la presencia de chispa constante en la bujía al dar encendido.',

        '6. Medir compresión del motor en la culata para descartar válvulas pisadas o quemadas.',

        '7. Verificar la calibración de válvulas en frío (Admisión: 0.08mm / Escape: 0.12mm).',

        '8. Sustituir o reparar componentes utilizando repuestos originales Honda Genuine Parts.',

        '9. Ejecutar el procedimiento de reinicio/inicialización del sensor TP / ECM si se intervino el cuerpo de aceleración.',

        '10. Realizar prueba de ruta para evaluar la respuesta del motor y la frenada CBS.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesCB125F = [

    {
        titulo: 'El motor se apaga repentinamente al desacelerar o tiene ralentí inestable',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración o válvula IACV con suciedad o acumulación de carbonilla',
            'Válvula de admisión apretada/pisada (sin tolerancia de calibración)',
            'Filtro de aire de papel viscoso obstruido por polvo',
            'Inyector PGM-FI con perforaciones parcialmente obstruidas'
        ],

        diagnostico: [
            'Realizar mantenimiento preventivo al cuerpo de aceleración y limpiar ductos de aire.',
            'Calibrar válvulas en frío (Admisión: 0.08mm / Escape: 0.12mm).',
            'Sustituir el filtro de aire de papel viscoso (No soplar con aire a presión).',
            'Efectuar prueba de abanico y flujo al inyector en banco de pruebas.'
        ]
    },

    {
        titulo: 'El testigo PGM-FI / Engine Check parpadea en el tablero',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Falla en el sensor EOT (Temperatura del Aceite del Motor) o su arnés',
            'Sensor de Oxígeno (O2) desconectado, dañado o con cables en corto',
            'Voltaje de batería por debajo del límite operativo',
            'Falla en la bomba de combustible o baja presión en el riel'
        ],

        diagnostico: [
            'Contar la secuencia de destellos largos (10) y cortos (1) para identificar el código DTC.',
            'Verificar la continuidad del arnés del sensor indicado.',
            'Comprobar la carga de la batería y sistema de carga del estator ACG.',
            'Borrar el historial de códigos de error de la ECM tras la reparación.'
        ]
    },

    {
        titulo: 'Tirones o vacilación al acelerar a fondo en marchas altas',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Bomba de gasolina perdiendo presión al aumentar la demanda',
            'Bujía de encendido gastada o con la distancia de electrodo fuera de rango',
            'Combustible contaminado con agua o sedimentos en el tanque'
        ],

        diagnostico: [
            'Conectar el manómetro de combustible y hacer prueba de aceleración sostenida.',
            'Sustituir la bujía por la especificada (NGK CPR7EA-9).',
            'Drenar el tanque de combustible y limpiar el filtro interno de la bomba.'
        ]
    },

    {
        titulo: 'Palanca de frenos muy esponjosa o baja eficacia en el sistema combinado CBS',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Aire atrapado en las líneas del circuito de frenos combinados CBS',
            'Líquido de frenos degradado o por debajo del nivel en el depósito',
            'Zapatas/bandas del freno trasero descalibradas o muy gastadas'
        ],

        diagnostico: [
            'Purgar el líquido de frenos utilizando la secuencia específica del repartidor CBS.',
            'Verificar el espesor del disco delantero y zapatas traseras.',
            'Ajustar la tensión del cable ecualizador del freno combinado.'
        ]
    },

    {
        titulo: 'Ruido de chasquido constante en la culata',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Holgura excesiva en los balancines de rodillo de la culata',
            'Desgaste en la cadena o el tensor de distribución',
            'Uso de aceite con viscosidad inadecuada (ej. 20W-50 en lugar de 10W-30 en motores eSP)'
        ],

        diagnostico: [
            'Verificar y reajustar las luces de válvulas con el motor totalmente frío.',
            'Comprobar la retracción y presión del tensor automático de la cadena.',
            'Utilizar el aceite recomendado por el fabricante Honda.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoCB125F = {

    objetivo:
        'Conservar la sobresaliente economía de combustible PGM-FI / eSP (hasta 200+ km/galón), garantizar la máxima fiabilidad en trayectos urbanos y preservar la eficacia del sistema combinado CBS.',

    actividades: [

        {
            nombre: 'Aceite de motor',
            accion:
                'Reemplazar cada 3.000 km o 4.000 km utilizando 800ml a 1000ml de aceite Honda Genuine Oil 10W-30 API SJ/SL JASO MA. Limpiar la malla tamiz del cárter cada 12.000 km.'
        },

        {
            nombre: 'Calibración de Válvulas SOHC',
            accion:
                'Inspeccionar y calibrar en frío cada 6.000 km. Holguras especificadas: Admisión 0.08mm / Escape 0.12mm.'
        },

        {
            nombre: 'Filtro de Aire (Papel Viscoso)',
            accion:
                'Inspeccionar cada 6.000 km y sustituir obligatoriamente cada 12.000 km o 15.000 km. No limpiar con aire a presión para no romper los poros del filtro.'
        },

        {
            nombre: 'Inyección PGM-FI y Cuerpo de Aceleración',
            accion:
                'Realizar limpieza preventiva del cuerpo de aceleración e inyector cada 12.000 km.'
        },

        {
            nombre: 'Cadena de Transmisión y Kit de Arrastre',
            accion:
                'Limpiar, tensionar y lubricar la cadena cada 500 km. Mantener la holgura de la cadena entre 15mm y 25mm. Sustituir el kit entre 15.000 km y 20.000 km.'
        },

        {
            nombre: 'Sistema de Frenos CBS (Disco / Tambor)',
            accion:
                'Inspeccionar pastillas y zapatas cada 3.000 km. Cambiar el líquido de frenos DOT 4 del sistema CBS cada 2 años o 18.000 km.'
        },

        {
            nombre: 'Bujía de Encendido',
            accion:
                'Inspeccionar y calibrar la distancia del electrodo (0.8mm - 0.9mm) cada 6.000 km; reemplazar cada 12.000 km por la bujía especificada NGK CPR7EA-9.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadCB125F = [

    'Al realizar mantenimiento al sistema de combustible PGM-FI, despresurice la línea desconectando el conector de la bomba de gasolina antes de soltar la manguera de alta presión.',

    'No intente encender la motocicleta con la batería desconectada; esto puede dañar de forma irreversible la unidad de control ECM PGM-FI.',

    'Sostenga la motocicleta firmemente sobre el soporte central (gato central) en una superficie plana para efectuar mediciones de nivel de aceite y tensión de cadena.',

    'Al purgar el sistema de frenos combinados CBS, siga estrictamente el orden de purgado en el cáliper delantero para evitar dejar burbujas de aire.',

    'Respete el torque de apriete en la tuerca del eje trasero (60 Nm) y en el tapón de drenaje de aceite (24 Nm) para evitar trasroscar el bloque de aluminio.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosCB125F = [

    {
        id: 1,

        titulo: 'Introducción a la Honda CB125F y Mantenimiento Periódico',

        nivel: 'Básico',

        descripcion:
            'Aprende la arquitectura del motor 124.7cc, cambio de aceite, comprobación de niveles, ajuste de mandos y tensión de cadena.',

        temas: [
            'Evolución del modelo Honda CB125F, CB125F Twister y tecnología eSP',
            'Procedimiento correcto de cambio de aceite y limpieza de la malla tamiz',
            'Inspección y cambio del filtro de aire de papel viscoso',
            'Mantenimiento y lubricación de la cadena de transmisión'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del Motor, Balancines de Rodillo y Válvulas',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a ubicar el Punto Muerto Superior (PMS) en la volante y efectuar el reglaje de válvulas con balancines de rodillo en la culata SOHC.',

        temas: [
            'Ubicación de la marca T en la volante magnética y piñón de distribución',
            'Reglaje de válvulas en frío con calibrador de galgas (0.08mm / 0.12mm)',
            'Inspección del tensor automático de cadena de distribución',
            'Diagnóstico de ruidos mecánicos y pérdidas de compresión'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica Honda PGM-FI y Diagnóstico DTC',

        nivel: 'Intermedio',

        descripcion:
            'Aprende el funcionamiento del sistema PGM-FI, lectura e interpretación de códigos de error MIL, prueba de sensores y bomba de gasolina.',

        temas: [
            'Componentes del PGM-FI: Sensores EOT, O2, TP, MAP, IAT y ECM',
            'Uso del puente SCS para lectura y borrado de códigos de falla DTC',
            'Prueba de presión y caudal de la bomba de combustible',
            'Limpieza del inyector y mantenimiento al cuerpo de aceleración'
        ]
    },

    {
        id: 4,

        titulo: 'Motor eSP con Arranque ACG y Sistema de Frenos Combinados CBS',

        nivel: 'Avanzado',

        descripcion:
            'Aprende sobre la tecnología eSP de ultrabaja fricción, el alternador/arrancador ACG sin escobillas y el purgado del sistema de frenada combinada CBS.',

        temas: [
            'Funcionamiento del motor de arranque ACG silencioso e inyección eSP',
            'Circuito eléctrico de carga y diagnóstico de la batería',
            'Estructura del repartidor de frenada y calibración del freno CBS',
            'Procedimiento de purgado de fluido DOT 4 en el cáliper delantero'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioCB125F = [

    {
        termino: 'CB125F',
        significado:
            'Modelo urbano de la serie CB de Honda, diseñado para ofrecer máxima agilidad urbana, fiabilidad mecánica y excelente consumo de combustible.'
    },

    {
        termino: 'PGM-FI',
        significado:
            'Programmed Fuel Injection. Sistema de inyección electrónica patentado por Honda que gestiona digitalmente el flujo de aire y gasolina.'
    },

    {
        termino: 'eSP',
        significado:
            'enhanced Smart Power. Conjunto de tecnologías de Honda enfocadas en reducir la fricción interna del motor y mejorar la eficiencia energética.'
    },

    {
        termino: 'ACG',
        significado:
            'Alternating Current Generator. Generador de corriente alterna que también cumple la función de motor de arranque suave y silencioso.'
    },

    {
        termino: 'CBS',
        significado:
            'Combi Brake System. Sistema de frenos combinados de Honda que distribuye la fuerza de frenado entre la rueda delantera y trasera al presionar la palanca o pedal.'
    },

    {
        termino: 'Offset Cylinder',
        significado:
            'Cilindro descentrado respecto al eje del cigüeñal que reduce el empuje lateral del pistón contra la pared del cilindro durante la carrera de expansión.'
    },

    {
        termino: 'Roller Rocker Arm',
        significado:
            'Balancín de rodillo con rodamientos de agujas en la zona de contacto con la leva, reduciendo drásticamente la fricción y el desgaste.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoCB125F(anio, configuracion) {

    const sintomasMapeados = fallasComunesCB125F.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Honda CB125F ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasCB125F.basicas,
            ...herramientasCB125F.diagnostico
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

                titulo: 'Motor Honda 124.7cc y Gestión PGM-FI',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, PGM-FI y Arranque ACG',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido Transistorizado y Sensores',

                        sintomas: [

                            {
                                titulo: 'El motor no enciende o el testigo PGM-FI parpadea',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Revisión de voltajes de batería, bomba de combustible, fusible principal y lectura de destellos DTC.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Manómetro PGM-FI',
                                    'Puente SCS de servicio'
                                ],

                                pasos: [
                                    '1. Verificar el voltaje de la batería en reposo (mínimo 12.5V).',
                                    '2. Medir la presión de la bomba de combustible en el conducto PGM-FI (~43 PSI).',
                                    '3. Leer el código de falla en el testigo MIL del tablero contando los destellos.',
                                    '4. Comprobar el estado de la bujía NGK CPR7EA-9 y la presencia de chispa.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 5 Velocidades y Frenos Combinados CBS',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague, Cadena y Frenos CBS',

                        sintomas: [

                            {
                                titulo: 'Freno combinado CBS esponjoso o deslizamiento del embrague',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Ajuste del embrague, purgado del circuito CBS y verificación de discos con lubricante JASO MA.',

                                herramientas: [
                                    'Llaves fijas de 10mm y 12mm',
                                    'Bomba de purgado CBS',
                                    'Bandeja de fluido'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre de la manigueta de embrague (10mm a 20mm).',
                                    '2. Verificar el uso de aceite Honda 10W-30 con norma JASO MA.',
                                    '3. Purgar el circuito del sistema de frenos combinados CBS con fluido DOT 4 nuevo.'
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
// MODELOS INDIVIDUALES POR AÑO (HONDA CB125F 2012 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN / CARBURADOR O INYECCIÓN INICIAL (2012 - 2019) ---

export const hondaCb125f_2012 = {

    marca: 'Honda',

    modelo: 'CB125F',

    anio: 2012,

    tipo: 'Motocicleta Urbana / Naked',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Honda_CB125F_2015.jpg/1200px-Honda_CB125F_2015.jpg',

    descripcion:
        'Plataforma educativa para Honda CB125F / Stunner 2012 (Motor 124.7cc SOHC 4T monocilíndrico, caja de 5 velocidades, balancines de rodillo y chasis de cuna de acero).',

    informacionHistorica: {

        titulo: 'Honda CB125F 2012',

        generacion: 'Primera generación (Chasis JC64 / CB Series)',

        familiaMotor: '124.7cc 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T refrigerado por aire',

        arquitectura: 'SOHC 2 Válvulas con Balancines de Rodillo',

        alimentacion: 'Carburador Keihin / Inyección PGM-FI temprana (según región)',

        encendido: 'Totalmente Transistorizado (DC-CDI)',

        refrigeracion: 'Enfriado por aire convectivo',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Manual de 5 velocidades con embrague húmedo'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Honda CB125F 2012?',

        explicacion:
            'Un motor monocilíndrico de alta durabilidad equipado con balancines de rodillo en la culata para minimizar el rozamiento mecánico, entregando una aceleración lineal e increíble economía de combustible.',

        formulaSimple:
            'Aire + combustible + balancines de rodillo + compresión + chispa = giro suave de 5 marchas',

        flujoEnergia: [
            'Tanque de combustible (13.0 Litros)',
            'Bomba de combustible / Grifo',
            'Cuerpo de aceleración / Carburador',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague multidisco húmedo',
            'Caja de 5 velocidades',
            'Piñón de salida',
            'Cadena de transmisión',
            'Rueda trasera con rin de aleación'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposCB125F,

    componentesMotor: sistemasMotorCB125F,

    sistemaCombustible: sistemaCombustibleCB125F,

    sistemaEncendido: sistemaEncendidoCB125F,

    refrigeracion: {

        tipo: 'Refrigeración por aire convectivo',

        elementos: [
            'Aletas de disipación en cilindro de aluminio',
            'Aletas en culata SOHC',
            'Flujo de aire por desplazamiento'
        ],

        funcionamiento:
            'El aire del ambiente disipa el calor térmico pasando a través de las aletas de radiación del motor.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide en baño de aceite',

        componentes: [
            'Cárter de aleación de aluminio',
            'Bomba de aceite trocoide',
            'Malla tamiz de succión',
            'Galerías internas de lubricación'
        ],

        funcionamiento:
            'Circula aceite 10W-30 / 20W-50 JASO MA a través de la malla tamiz hacia la culata y la caja de cambios.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol SOHC',

        tipo: 'Cadena silenciosa con tensor automático',

        funcion:
            'Mantiene la sincronización exacta entre cigüeñal y válvulas.',

        advertencia:
            'Utilice las galgas de espesor para calibrar la luz de válvulas a 0.08mm (Admición) y 0.12mm (Escape).'
    },

    diagnosticoGeneral: diagnosticoGeneralCB125F,

    fallasComunes: fallasComunesCB125F,

    herramientas: herramientasCB125F,

    mantenimiento: mantenimientoCB125F,

    cursos: cursosCB125F,

    seguridad: seguridadCB125F,

    glosario: glosarioCB125F,

    reglaPrincipal:
        'VOLTAJE → PRESIÓN PGM-FI → CHISPA → COMPRESIÓN → REINICIO',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2012,
            {
                tecnologia: '1ª Gen - Balancines de Rodillo / 5 Velocidades',

                motorPrincipal: '124.7cc Monocilíndrico 4T (10.6 HP / 10.2 Nm)'
            }
        );
    }
};


export const hondaCb125f_2013 = {

    ...hondaCb125f_2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Honda CB125F 2013. Mantenimiento preventivo, calibración de balancines y frenos.',

    informacionHistorica: {

        ...hondaCb125f_2012.informacionHistorica,

        titulo: 'Honda CB125F 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2013,
            {
                tecnologia: '1ª Gen - Balancines de Rodillo / SOHC 2V',

                motorPrincipal: '124.7cc Monocilíndrico 4T'
            }
        );
    }
};


export const hondaCb125f_2014 = {

    ...hondaCb125f_2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Honda CB125F 2014. Mantenimiento del kit de arrastre y sistema eléctrico.',

    informacionHistorica: {

        ...hondaCb125f_2013.informacionHistorica,

        titulo: 'Honda CB125F 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2014,
            {
                tecnologia: '1ª Gen - Balancines de Rodillo / SOHC 2V',

                motorPrincipal: '124.7cc Monocilíndrico 4T'
            }
        );
    }
};


export const hondaCb125f_2015 = {

    ...hondaCb125f_2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Honda CB125F 2015 (Lanzamiento global del diseño CB125F con inyección PGM-FI de serie en Europa y Latinoamérica).',

    informacionHistorica: {

        ...hondaCb125f_2014.informacionHistorica,

        titulo: 'Honda CB125F 2015',

        anio: 2015,

        nota: 'Adopción masiva de la Inyección Electrónica PGM-FI y nuevo diseño de chasis cuna.'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2015,
            {
                tecnologia: '1ª Gen Global - Inyección PGM-FI / SOHC 2V',

                motorPrincipal: '124.7cc Monocilíndrico PGM-FI (10.6 HP)'
            }
        );
    }
};


export const hondaCb125f_2016 = {

    ...hondaCb125f_2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Honda CB125F 2016. Diagnóstico de inyección PGM-FI, sensores y mantenimiento.',

    informacionHistorica: {

        ...hondaCb125f_2015.informacionHistorica,

        titulo: 'Honda CB125F 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2016,
            {
                tecnologia: '1ª Gen - Inyección PGM-FI / Balancines de Rodillo',

                motorPrincipal: '124.7cc Monocilíndrico PGM-FI'
            }
        );
    }
};


export const hondaCb125f_2017 = {

    ...hondaCb125f_2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Honda CB125F 2017. Guías de servicio técnico y diagnóstico de fallas PGM-FI.',

    informacionHistorica: {

        ...hondaCb125f_2016.informacionHistorica,

        titulo: 'Honda CB125F 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2017,
            {
                tecnologia: '1ª Gen - Inyección PGM-FI / SOHC 2V',

                motorPrincipal: '124.7cc Monocilíndrico PGM-FI'
            }
        );
    }
};


export const hondaCb125f_2018 = {

    ...hondaCb125f_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Honda CB125F 2018. Mantenimiento del sistema de inyección y frenos.',

    informacionHistorica: {

        ...hondaCb125f_2017.informacionHistorica,

        titulo: 'Honda CB125F 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2018,
            {
                tecnologia: '1ª Gen - Inyección PGM-FI / SOHC 2V',

                motorPrincipal: '124.7cc Monocilíndrico PGM-FI'
            }
        );
    }
};


export const hondaCb125f_2019 = {

    ...hondaCb125f_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Honda CB125F 2019. Cierre de la primera generación PGM-FI convencional.',

    informacionHistorica: {

        ...hondaCb125f_2018.informacionHistorica,

        titulo: 'Honda CB125F 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2019,
            {
                tecnologia: '1ª Gen - Inyección PGM-FI / SOHC 2V',

                motorPrincipal: '124.7cc Monocilíndrico PGM-FI'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN / MOTOR eSP Y CBS (2020 - 2026) ---

export const hondaCb125f_2020 = {

    ...hondaCb125f_2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Honda_CB125F_2015.jpg/1200px-Honda_CB125F_2015.jpg',

    descripcion:
        'Plataforma educativa para Honda CB125F eSP 2020 (Lanzamiento con tecnología eSP Smart Power, cilindro Offset, alternador/arranque ACG silencioso, tablero digital y frenos combinados CBS).',

    informacionHistorica: {

        titulo: 'Honda CB125F eSP 2020',

        generacion: 'Segunda generación eSP (Chasis Tubular Ligero)',

        familiaMotor: '124.7cc eSP (enhanced Smart Power)',

        tipoMotor: 'Monocilíndrico 4T SOHC con cilindro descentrado y baja fricción',

        arquitectura: 'SOHC 2 Válvulas con Balancines de Rodillo',

        alimentacion: 'Inyección Electrónica PGM-FI',

        encendido: 'Electrónico ACG Starter / ECM PGM-FI',

        refrigeracion: 'Aire por convección natural',

        distribucion: 'Cadena de distribución silenciosa con tensor hidráulico',

        transmision: 'Manual de 5 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2020,
            {
                tecnologia: '2ª Gen - Motor eSP / Arranque ACG / PGM-FI / CBS',

                motorPrincipal: '124.7cc eSP Monocilíndrico (10.8 HP / 10.9 Nm)'
            }
        );
    }
};


export const hondaCb125f_2021 = {

    ...hondaCb125f_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Honda CB125F 2021. Diagnóstico del sistema eSP, alternador ACG y frenada combinada CBS.',

    informacionHistorica: {

        ...hondaCb125f_2020.informacionHistorica,

        titulo: 'Honda CB125F 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2021,
            {
                tecnologia: '2ª Gen - Motor eSP / Arranque ACG / PGM-FI / CBS',

                motorPrincipal: '124.7cc eSP Monocilíndrico'
            }
        );
    }
};


export const hondaCb125f_2022 = {

    ...hondaCb125f_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Honda CB125F 2022. Mantenimiento del sistema de frenada combinada CBS y cuerpo PGM-FI.',

    informacionHistorica: {

        ...hondaCb125f_2021.informacionHistorica,

        titulo: 'Honda CB125F 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2022,
            {
                tecnologia: '2ª Gen - Motor eSP / PGM-FI / CBS',

                motorPrincipal: '124.7cc eSP Monocilíndrico'
            }
        );
    }
};


export const hondaCb125f_2023 = {

    ...hondaCb125f_2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Honda CB125F 2023. Guías de mantenimiento y diagnóstico electrónico PGM-FI.',

    informacionHistorica: {

        ...hondaCb125f_2022.informacionHistorica,

        titulo: 'Honda CB125F 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2023,
            {
                tecnologia: '2ª Gen - Motor eSP / PGM-FI / CBS',

                motorPrincipal: '124.7cc eSP Monocilíndrico'
            }
        );
    }
};


export const hondaCb125f_2024 = {

    ...hondaCb125f_2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Honda_CB125F_2015.jpg/1200px-Honda_CB125F_2015.jpg',

    descripcion:
        'Plataforma educativa para Honda CB125F 2024 (Edición eSP / Twister 125 con luz faro LED y conectividad según versión).',

    informacionHistorica: {

        ...hondaCb125f_2023.informacionHistorica,

        titulo: 'Honda CB125F 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2024,
            {
                tecnologia: '2ª Gen - Motor eSP / PGM-FI / CBS / Faro LED',

                motorPrincipal: '124.7cc eSP Monocilíndrico (10.8 HP)'
            }
        );
    }
};


export const hondaCb125f_2025 = {

    ...hondaCb125f_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Honda CB125F 2025. Diagnóstico de motor eSP de baja fricción, frenos CBS y electrónica.',

    informacionHistorica: {

        ...hondaCb125f_2024.informacionHistorica,

        titulo: 'Honda CB125F 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2025,
            {
                tecnologia: '2ª Gen - Motor eSP / PGM-FI / CBS',

                motorPrincipal: '124.7cc eSP Monocilíndrico'
            }
        );
    }
};


export const hondaCb125f_2026 = {

    ...hondaCb125f_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Honda CB125F 2026. Diagnóstico integral de motor eSP de 124.7cc, Inyección PGM-FI, alternador/arranque ACG, frenos combinados CBS y transmisión de 5 marchas.',

    informacionHistorica: {

        ...hondaCb125f_2025.informacionHistorica,

        titulo: 'Honda CB125F 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCB125F(
            2026,
            {
                tecnologia: '2ª Gen - Motor eSP Smart Power / PGM-FI / ACG / CBS',

                motorPrincipal: '124.7cc eSP Monocilíndrico (10.8 HP / 10.9 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE HONDA CB125F
// ============================================================

export const hondaCb125f = {

    marca: 'Honda',

    modelo: 'CB125F',

    tipo: 'Motocicleta Urbana / Naked',

    imagen:
        'https://www.motoplanete.com/honda/galerie/Honda-CBF-125-2026/8.webp',

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

        2012: hondaCb125f_2012,

        2013: hondaCb125f_2013,

        2014: hondaCb125f_2014,

        2015: hondaCb125f_2015,

        2016: hondaCb125f_2016,

        2017: hondaCb125f_2017,

        2018: hondaCb125f_2018,

        2019: hondaCb125f_2019,

        2020: hondaCb125f_2020,

        2021: hondaCb125f_2021,

        2022: hondaCb125f_2022,

        2023: hondaCb125f_2023,

        2024: hondaCb125f_2024,

        2025: hondaCb125f_2025,

        2026: hondaCb125f_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
const sistemasMotorPulsarNS200 = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie 199.5cc DTS-i Monocilíndrico 4V)',
        funcion:
            'Estructura de aleación de aluminio con recubrimiento de baja fricción y camisa de hierro fundido refrigerada por líquido presurizado que aloja el pistón, cigüeñal y mecanismo de distribución.',
        fallas: [
            'Fugas de aceite por el retén del eje de cambios o sello de la tapa del piñón de salida',
            'Fugas de líquido refrigerante por el sello mecánico de la bomba de agua',
            'Desgaste en la camisa por operar con nivel bajo de aceite (requiere 1200ml a 1400ml 20W-50 / 10W-50 JASO MA2)',
            'Humo azul por el escape por desgaste de anillos o sellos de válvula tras recalentamientos'
        ]
    },

    {
        nombre: 'Culata SOHC 4V de Triple Chispa (Tecnología DTS-i)',
        funcion:
            'Aloja 4 válvulas accionadas por balancines con rodamientos e integra 3 bujías (1 central + 2 laterales) para lograr una combustión ultrarrápida y eficiente.',
        fallas: [
            'Sonido metálico o golpeteo por holgura de válvulas fuera de norma (Admisión: 0.05-0.08mm / Escape: 0.08-0.12mm)',
            'Dificultad de encendido en frío o apagado en ralentí por válvulas apretadas/pisadas',
            'Fuga de compresión o paso de refrigerante al aceite por empaque de culata soplado',
            'Falla de encendido por desgaste o residuos de carbón en alguna de las 3 bujías'
        ]
    },

    {
        nombre: 'Cigüeñal y Eje Balanceador Contrarrotante',
        funcion:
            'Transforma el movimiento alternativo del pistón en rotación hacia la caja de 6 velocidades e incluye un eje balanceador para neutralizar las vibraciones a altas RPM.',
        fallas: [
            'Golpeteo interno grave en el cárter por desgaste en el rodamiento de la canastilla de biela',
            'Fuga de aceite por el retén del cigüeñal en el lado del estator',
            'Vibraciones excesivas en los posapiés y manubrio por juego en los rodamientos del eje de balance'
        ]
    },

    {
        nombre: 'Pistón Forjado / Alumite de Alta Compresión',
        funcion:
            'Transmite la fuerza de combustión a la biela soportando la relación de compresión de 11.0:1.',
        fallas: [
            'Anillos rascadores de aceite pegados por acumulación de sedimentos de lubricante degradado',
            'Cascabeleo / detonación por usar gasolina de bajo octanaje (se recomienda gasolina Extra/Premium)',
            'Rayado de la falda del pistón por falta de mantenimiento en el filtro de aire'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático Hidráulico/Muelle',
        funcion:
            'Sincroniza la rotación del cigüeñal con el árbol de levas SOHC en la culata.',
        fallas: [
            'Sonajero o chascarrillo constante en el lado izquierdo del cilindro en frío o aceleración',
            'Trabamiento del tensor automático de cadena de distribución',
            'Desgaste prematuro de las guías plásticas internas por aceite sucio'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración Líquida Presurizada (Bomba, Radiador y Termostato)',
        funcion:
            'Mantiene la temperatura estable del motor mediante bomba de agua impulsada por el motor, radiador frontal, vaso de expansión y electroventilador con motoventilador automático.',
        fallas: [
            'Sobrecalentamiento del motor por falla del termostato (pegado cerrado) o motoventilador defectuoso',
            'Fisuras o fugas en el tanque de expansión o mangueras de caucho',
            'Mezcla de refrigerante con aceite de motor por falla del sello mecánico de la bomba de agua (aceite lechoso)'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Bomba Trocoide y Filtro de Papel de Elemento Reemplazable',
        funcion:
            'Circula aceite a presión pasando por el filtro de papel externo en el cárter derecho hacia el cigüeñal, culata y caja de 6 velocidades.',
        fallas: [
            'Falta de lubricación en la culata por instalar el filtro de papel en posición invertida',
            'Malla tamiz del cárter obstruida por residuos de empaques o silicona',
            'Patinamiento del embrague por usar lubricante para automóvil (No certificado JASO MA2)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustiblePulsarNS200 = {

    titulo: 'Sistema de Inyección Electrónica Bosch FI / Carburador UCAL BS33',

    funcionamiento:
        'En versiones FI, la bomba de alta presión en el tanque suministra gasolina a ~3.0 bar. La unidad ECU Bosch procesa datos de sensores (TPS, MAP, IAT, ECT, O2) e inyecta la mezcla atomizada directa a la admisión.',

    componentes: [
        'Tanque de combustible de 12.0 Litros con tapa tipo aviación',
        'Bomba eléctrica de combustible sumergida de alta presión con filtro interno',
        'Cuerpo de aceleración con inyector multipunto de alta precisión',
        'Carburador UCAL BS33 de diafragma de vacío (en versiones carburadas)',
        'Sensor Triplex (Presión MAP, Temperatura IAT, Posición TPS)',
        'Sensor de Temperatura del Refrigerante (ECT) y Sensor de Oxígeno (O2) en el escape',
        'Filtro de aire de elemento de papel de alto flujo / espuma de alta densidad',
        'Unidad de Control Electrónico del Motor (ECU Bosch FI)'
    ],

    flujo: [
        '1. La bomba presuriza la línea de combustible hacia el cuerpo de inyección.',
        '2. La ECU evalúa la temperatura del líquido refrigerante, densidad de aire y apertura de mariposa.',
        '3. El inyector pulveriza el combustible en la tobera de admisión hacia las 2 válvulas de admisión.',
        '4. Ocurre la combustión optimizada por la detonación secuencial de las 3 bujías DTS-i.',
        '5. El sensor de oxígeno analiza los gases en el catalizador de 3 vías enviando corrección a la ECU.'
    ],

    diagnostico: [
        'Medir la presión de la bomba de combustible FI en el riel (~294 kPa / 43 PSI).',
        'Contar los destellos del indicador de mal funcionamiento MIL en el tablero.',
        'Comprobar el diafragma de vacío en versiones carburadas si se observa pérdida de potencia al abrir gas.',
        'Inspeccionar y reemplazar el filtro de aire si presenta saturación por suciedad.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoPulsarNS200 = {

    titulo: 'Sistema de Encendido DTS-i de Triple Chispa Digital (Triple Spark Digital Ignition)',

    funcionamiento:
        'La ECU gestiona tres bobinas de encendido independientes para activar la bujía principal y las dos bujías secundarias laterales en intervalos milimétricos, logrando la máxima velocidad de quemado de la mezcla.',

    componentes: [
        {
            nombre: 'Sensor de Posición del Cigüeñal (CKP)',
            funcion:
                'Monitorea los dientes del plato magnético enviando la señal de velocidad y posición a la ECU.'
        },

        {
            nombre: 'Unidad de Control ECU / Módulo DTS-i',
            funcion:
                'Calcula el mapa de avance de encendido sincronizado para las tres bujías.'
        },

        {
            nombre: '3 Bobinas de Alta Tensión y Capuchones Resistivos',
            funcion:
                'Elevan el voltaje para generar los tres arcos eléctricos simultáneos/secuenciales.'
        },

        {
            nombre: '3 Bujías de Encendido (1 Central Champion PRZ9HC + 2 Laterales Bosch UR4AC / NGK)',
            funcion:
                'Inflaman la mezcla comprimida en la cámara hemisférica de 4 válvulas.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el estado de la fusilera principal (fusible de 15A/20A y fusible del sistema FI).',
        'Comprobar el voltaje de la batería de 12V en reposo (mínimo 12.5V; el sistema DTS-i FI requiere buen voltaje).',
        'Revisar el funcionamiento del interruptor de corte de emergencia (Run/Off) en el manubrio.',
        'Inspeccionar el sensor de corte por caída o inclinación (Roll Over Sensor).',
        'Verificar el estado de los conectores y cables de alta tensión de las 3 bujías.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposPulsarNS200 = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. Las 2 válvulas de admisión abren y el sistema inyecta la mezcla atomizada de aire/gasolina.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abiertas (2)',
            escape: 'Cerradas (2)'
        },

        objetivo:
            'Llenar la cámara de combustión con la máxima eficiencia volumétrica gracias a las 4 válvulas.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla con las 4 válvulas cerradas (relación de compresión 11.0:1).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Cerradas'
        },

        objetivo:
            'Elevar la presión y temperatura de la mezcla antes del encendido DTS-i.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión (DTS-i Triple Chispa)',

        descripcion:
            'Las 3 bujías generan el arco eléctrico simultáneo. La rápida expansión de gases empuja el pistón con fuerza impulsando la caja de 6 velocidades.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Cerradas'
        },

        objetivo:
            'Desarrollar la potencia deportiva de 24.1 HP a 9.750 RPM.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende impulsando los gases quemados hacia las 2 válvulas de escape abiertas rumbo al tubo de escape Underbelly (salida inferior).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Abiertas (2)'
        },

        objetivo:
            'Expulsar los gases para limpiar la cámara e iniciar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasPulsarNS200 = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 22mm, 24mm, 30mm)',
        'Llave de bujía delgada de 16mm (5/8") y llave de 14mm',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para regulación de válvulas (0.05mm - 0.12mm)',
        'Alicate universal, alicate de punta y llave Allen de 4mm, 5mm y 6mm',
        'Bandeja de recolección de aceite (1.5 litros) y embudo graduado'
    ],

    diagnostico: [
        'Multímetro digital de alta precisión para medir voltajes DC/AC, resistencia y continuidad',
        'Manómetro de presión de combustible con acoples rápidos Bajaj/Bosch FI',
        'Escáner OBD2 con conector adaptador Bajaj de 6 pines / YDT / Bosch',
        'Compresímetro con acople de rosca M10 / M12'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm (8 Nm a 80 Nm)',
        'Extractor de volante magnético específico Bajaj Pulsar NS/RS 200',
        'Herramienta sujetadora de embrague y tuerca castillo de filtro centrifugo/bomba',
        'Bomba de vacío para purgado del líquido de frenos del módulo ABS (Bybre)'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralPulsarNS200 = {

    principio:
        'Diagnóstico metódico Bajaj: Verificación de código DTC en el tablero/escáner, comprobación del nivel de refrigerante y estado del aceite, presión de la bomba FI y chispa en las 3 bujías.',

    secuencia: [

        '1. Consultar los síntomas con el usuario y verificar la luz de advertencia FI, ABS o indicador de temperatura en el tablero.',

        '2. Comprobar la carga de la batería de 12V en reposo (mínimo 12.5V) y apretar bornes.',

        '3. Conectar el escáner OBD2 para leer códigos de falla DTC almacenados en la ECU Bosch.',

        '4. Medir la presión de la bomba de combustible FI en la línea (~43 PSI).',

        '5. Comprobar la presencia de chispa constante en las 3 bujías DTS-i al dar arranque.',

        '6. Revisar el nivel de líquido refrigerante en el vaso de expansión y verificar la ausencia de aceite lechoso.',

        '7. Verificar la calibración de las 4 válvulas en frío (Admisión: 0.05-0.08mm / Escape: 0.08-0.12mm).',

        '8. Sustituir o reparar componentes utilizando repuestos originales Bajaj Genuine Parts.',

        '9. Ejecutar el procedimiento de reinicio de parámetros de ralentí si se limpió el cuerpo de aceleración.',

        '10. Realizar prueba de ruta para confirmar el rendimiento, frenada ABS y entrada del motoventilador.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesPulsarNS200 = [

    {
        titulo: 'El motor se apaga en ralentí, titubea al acelerar o se jalonea',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración / inyector con mugre o sedimentos de gasolina',
            'Válvula de admisión apretada/pisada sin la luz de calibración correspondiente',
            'Diafragma del carburador roto o chicleres tapados (en versiones carburadas)',
            'Bujías DTS-i desgastadas, descalibradas o alguna de las 3 fuera de servicio'
        ],

        diagnostico: [
            'Limpiar el cuerpo de aceleración y efectuar lavado de inyector en banco ultrasónico.',
            'Calibrar las 4 válvulas en frío (Admisión: 0.06mm / Escape: 0.10mm).',
            'Inspeccionar y calibrar la luz de electrodo de las 3 bujías (0.7mm - 0.8mm).',
            'Sustituir el filtro de aire de papel si presenta saturación de polvo.'
        ]
    },

    {
        titulo: 'Indicador de alta temperatura encendido o el refrigerante se bota por el vaso de expansión',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Termostato pegado que no permite el paso de refrigerante hacia el radiador',
            'Sello mecánico de la bomba de agua dañado (pasa agua al aceite poniendo el lubricante de color café/lechoso)',
            'Falla en el relé o en el electroventilador/motoventilador del radiador',
            'Empaque de culata soplado por un recalentamiento previo'
        ],

        diagnostico: [
            'Verificar el nivel de refrigerante con el motor frío (nunca destapar el radiador caliente).',
            'Puentear el thermo-switch o probar el motoventilador directo a 12V.',
            'Inspeccionar el visor de aceite del cárter; si está lechoso, reemplazar el sello mecánico y retenes de la bomba.',
            'Probar o reemplazar el termostato.'
        ]
    },

    {
        titulo: 'El testigo de la batería o la luz FI parpadea y la moto pierde potencia',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Batería de 12V descargada o con celdas degradadas que afecta la ECU',
            'Regulador/rectificador de voltaje fallando (sobrecarga más de 15V o carga por debajo de 12V)',
            'Falla en el estator / plato de bobinas de carga',
            'Terminales de batería flojos o sulfatados'
        ],

        diagnostico: [
            'Medir el voltaje de la batería con multímetro en reposo y a 4.000 RPM (rango normal: 13.5V a 14.5V).',
            'Limpiar y ajustar las bornes de la batería.',
            'Escanear códigos de falla en la ECU Bosch.',
            'Verificar la resistencia y salida AC en las fases del estator.'
        ]
    },

    {
        titulo: 'El testigo del ABS permanece encendido o parpadea constante en marcha',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor de velocidad ABS delantero/trasero sucio con fango o rebaba metálica',
            'Disco o corona dentada del ABS deformada o con golpes',
            'Distancia excesiva entre la punta del sensor magnético y la corona dentada'
        ],

        diagnostico: [
            'Limpiar los sensores magnéticos del ABS en las ruedas.',
            'Inspeccionar visualmente las coronas dentadas descartando fisuras o descentrado.',
            'Comprobar la holgura del sensor ABS con calibrador de galgas.',
            'Escanear el módulo de frenos ABS para borrar errores almacenados.'
        ]
    },

    {
        titulo: 'Chascarrillo o sonajero constante en la zona izquierda del motor',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Cadena de distribución estirada o destensionada',
            'Tensor automático de la cadena de distribución pegado o dañado',
            'Luz de balancines descalibrada'
        ],

        diagnostico: [
            'Inspeccionar el funcionamiento y presión del tensor automático de la cadena.',
            'Verificar el desgaste de los patines guía de distribución.',
            'Calibrar la luz de las 4 válvulas con galgas de precisión.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoPulsarNS200 = {

    objetivo:
        'Conservar la potencia de 24.1 HP del motor 200cc DTS-i, asegurar la eficacia del sistema de refrigeración líquida, proteger la inyección Bosch y garantizar la seguridad del sistema de frenada ABS Bybre.',

    actividades: [

        {
            nombre: 'Aceite de motor y Filtro de papel',
            accion:
                'Reemplazar cada 3.000 km a 4.000 km utilizando 1200ml (1400ml al desarmar) de aceite semisintético o sintético 20W-50 / 10W-50 JASO MA2 / API SL/SN. Reemplazar obligatoriamente el filtro de papel en cada cambio (asegurar posición del o-ring).'
        },

        {
            nombre: 'Líquido Refrigerante y Sistema de Enfriamiento',
            accion:
                'Inspeccionar el nivel en el vaso de expansión en cada cambio de aceite. Reemplazar el líquido refrigerante/anticongelante de radiador cada 12.000 km o 1 año.'
        },

        {
            nombre: 'Calibración de Válvulas SOHC (4 Válvulas)',
            accion:
                'Inspeccionar y calibrar en frío cada 6.000 km. Especificaciones: Admisión (0.05mm - 0.08mm) / Escape (0.08mm - 0.12mm).'
        },

        {
            nombre: 'Mantenimiento del Cuerpo FI y Inyector / Carburador',
            accion:
                'Limpiar el cuerpo de aceleración e inyector FI cada 12.000 km. En versiones carburadas, limpiar el carburador UCAL BS33 cada 6.000 km.'
        },

        {
            nombre: 'Kit de Arrastre y Cadena O-Ring',
            accion:
                'Limpiar con desengrasante especial, tensionar y lubricar la cadena cada 500 km. Mantener la holgura entre 20mm y 30mm. Reemplazar el kit entre 15.000 km y 20.000 km.'
        },

        {
            nombre: 'Sistema de Frenos (Bybre Disco / ABS)',
            accion:
                'Inspeccionar el desgaste de pastillas delanteras y traseras cada 3.000 km; renovar el líquido de frenos DOT 4 en los depósitos cada 12 meses.'
        },

        {
            nombre: '3 Bujías DTS-i (1 Central + 2 Laterales)',
            accion:
                'Inspeccionar, limpiar y calibrar la luz del electrodo (0.7mm - 0.8mm) cada 6.000 km; reemplazar las 3 bujías cada 12.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadPulsarNS200 = [

    'NUNCA abra la tapa del radiador ni las mangueras de refrigerante con el motor caliente; el sistema presurizado expulsará vapor y líquido hirviendo a alta temperatura.',

    'Atención al instalar el filtro de aceite de papel: la parte abierta con el o-ring interno debe mirar hacia el interior del cárter para no cortar el flujo de lubricación hacia la culata.',

    'Al realizar trabajos en el sistema de inyección FI, despresurice la línea desconectando el arnés de la bomba de gasolina antes de retirar la manguera de alta presión.',

    'Apoye la motocicleta sobre el soporte central o caballete de taller en superficie plana para revisar niveles de aceite y líquido refrigerante.',

    'Respete el torque recomendado en los pernos de la tapa del filtro de aceite (10 Nm) y en el tapón de drenaje de aceite (20 Nm) para evitar fisurar la rosca de aluminio.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosPulsarNS200 = [

    {
        id: 1,

        titulo: 'Introducción a la Bajaj Pulsar NS 200 y Mantenimiento Periódico',

        nivel: 'Básico',

        descripcion:
            'Aprende la arquitectura del motor 199.5cc, cambio de aceite, posición crítica del filtro de papel, revisión de refrigerante y tensión de cadena.',

        temas: [
            'Evolución de modelos Pulsar NS 200 (Carburada, FI, ABS, UG / USD)',
            'Procedimiento correcto de cambio de aceite y filtro de papel',
            'Inspección y cambio del filtro de aire y líquido refrigerante',
            'Mantenimiento de la cadena con O-Ring y ajuste de mandos'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del Motor DTS-i, 4 Válvulas y Refrigeración Líquida',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a ubicar el Punto Muerto Superior (PMS), calibrar las 4 válvulas SOHC en frío y realizar mantenimiento a la bomba de agua.',

        temas: [
            'Ubicación de la marca T en la volante magnética y piñón de levas',
            'Calibración de las 4 válvulas con galgas de precisión (0.06mm / 0.10mm)',
            'Diagnóstico del sello mecánico de la bomba de agua y reemplazo',
            'Prueba del termostato, motoventilador y purgamiento del radiador'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica Bosch FI y Sistema Triple Chispa DTS-i',

        nivel: 'Intermedio',

        descripcion:
            'Aprende sobre la gestión de la ECU Bosch, diagnóstico de sensores, pruebas de la bomba de gasolina y las 3 bujías de encendido.',

        temas: [
            'Sensores del sistema FI: TPS, MAP, IAT, ECT, O2 y función de la ECU Bosch',
            'Diagnóstico por escáner OBD2 / Bajaj e interpretación de códigos DTC',
            'Comprobación del circuito de las 3 bujías DTS-i y bobinas de alta',
            'Prueba de presión de la bomba FI y limpieza del inyector'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema de Frenos ABS Bybre, Suspensión USD y Red Eléctrica',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico del módulo de frenos ABS, mantenimiento de la suspensión delantera invertida USD y sistema de carga.',

        temas: [
            'Mantenimiento del sistema ABS: Sensores magnéticos, coronas y módulo',
            'Procedimiento de purgado de líquido DOT 4 en los calipers Bybre',
            'Mantenimiento y cambio de aceite de la suspensión invertida USD',
            'Pruebas del regulador de voltaje, estator y circuito del tablero digital'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioPulsarNS200 = [

    {
        termino: 'Pulsar NS 200',
        significado:
            'Naked Sport 200cc. Icónico modelo de motocicleta deportiva de la marca Bajaj, famosa por su motor refrigerado por líquido, tecnología DTS-i de triple chispa y alto rendimiento.'
    },

    {
        termino: 'DTS-i',
        significado:
            'Digital Twin/Triple Spark Ignition. Tecnología patentada por Bajaj que emplea múltiple chispa gestionada digitalmente para maximizar la eficiencia de combustión.'
    },

    {
        termino: 'FI',
        significado:
            'Fuel Injection. Sistema de inyección electrónica de combustible computarizado que reemplaza al carburador.'
    },

    {
        termino: 'ABS',
        significado:
            'Anti-lock Braking System. Sistema antibloqueo de frenos que evita que las ruedas se derrapen durante frenadas bruscas.'
    },

    {
        termino: 'USD',
        significado:
            'Upside Down Fork. Suspensión delantera con barras invertidas que ofrece mayor rigidez, precisión y estabilidad deportiva.'
    },

    {
        termino: 'UG',
        significado:
            'Upgraded Generation. Denominación de las versiones mejoradas con equipamiento técnico renovado (horquilla USD, tablero digital mejorado).'
    },

    {
        termino: 'Bybre',
        significado:
            'By Brembo. Marca de sistemas de frenos diseñada por la firma italiana Brembo específica para motocicletas de pequeña y mediana cilindrada.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoPulsarNS200(anio, configuracion) {

    const sintomasMapeados = fallasComunesPulsarNS200.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Bajaj Pulsar NS 200 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasPulsarNS200.basicas,
            ...herramientasPulsarNS200.diagnostico
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

                titulo: 'Motor 199.5cc DTS-i 4V y Refrigeración Líquida',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, ECU FI y Triple Chispa',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido DTS-i y Sensores FI',

                        sintomas: [

                            {
                                titulo: 'El motor no enciende o la luz FI parpadea en el tablero',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Revisión del voltaje de batería, presión de la bomba FI, fusibles y código DTC en escáner.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Manómetro de presión FI',
                                    'Escáner OBD2 / Bajaj'
                                ],

                                pasos: [
                                    '1. Verificar que el voltaje de la batería esté por encima de 12.5V.',
                                    '2. Medir la presión de la bomba de combustible en el conducto FI (~43 PSI).',
                                    '3. Conectar el escáner OBD2 para leer los códigos de error almacenados en la ECU Bosch.',
                                    '4. Comprobar el estado y la chispa en las 3 bujías DTS-i (1 central + 2 laterales).'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 6 Velocidades y Frenos ABS Bybre',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague, Cadena O-Ring y ABS',

                        sintomas: [

                            {
                                titulo: 'Luz del ABS encendida o embrague deslizante',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Regulación de embrague, limpieza de sensores ABS en las ruedas y aceite JASO MA2.',

                                herramientas: [
                                    'Llaves fijas de 10mm y 12mm',
                                    'Calibrador de galgas',
                                    'Bandeja de fluido'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre de la manigueta de embrague (10mm a 15mm).',
                                    '2. Confirmar el uso de aceite 20W-50 / 10W-50 con especificación JASO MA2.',
                                    '3. Limpiar los sensores magnéticos del ABS y comprobar que la corona dentada no tenga daños.'
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
// MODELOS INDIVIDUALES POR AÑO (BAJAJ PULSAR NS 200 2012 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN / CARBURADA (2012 - 2016) ---

export const bajajPulsarNs200_2012 = {

    marca: 'Bajaj',

    modelo: 'Pulsar NS 200',

    anio: 2012,

    tipo: 'Motocicleta Street / Naked Sport',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pulsar_NS_200.jpg/1200px-Pulsar_NS_200.jpg',

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2012 (Lanzamiento mundial / Motor 199.5cc SOHC 4V de Triple Chispa DTS-i, carburador UCAL BS33, refrigeración líquida, caja de 6 velocidades y chasis perimetral).',

    informacionHistorica: {

        titulo: 'Bajaj Pulsar NS 200 2012',

        generacion: 'Primera generación NS 200 Carburada',

        familiaMotor: '199.5cc DTS-i 4 Válvulas Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T SOHC refrigerado por líquido presurizado',

        arquitectura: 'SOHC 4 Válvulas con Balancines de Rodillo',

        alimentacion: 'Carburador UCAL BS33 de vacio',

        encendido: 'Digital DTS-i de Triple Chispa (3 Bujías)',

        refrigeracion: 'Líquida presurizada con electroventilador',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Manual de 6 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Bajaj Pulsar NS 200 2012?',

        explicacion:
            'Un motor monocilíndrico de alto rendimiento de 199.5cc que combina la refrigeración líquida con una culata de 4 válvulas e ignición por 3 bujías DTS-i para ofrecer máxima aceleración deportiva.',

        formulaSimple:
            'Aire + gasolina por UCAL BS33 + compresión 11.0:1 + 3 chispas DTS-i + enfriamiento líquido = 23.5 HP a 6 marchas',

        flujoEnergia: [
            'Tanque de combustible (12.0 Litros)',
            'Llave de paso de reserva',
            'Carburador UCAL BS33',
            'Cámara de combustión de 4 válvulas',
            'Pistón',
            'Biela',
            'Cigüeñal y Eje Balanceador',
            'Embrague multidisco húmedo',
            'Caja de 6 velocidades',
            'Piñón de salida',
            'Cadena O-Ring de transmisión',
            'Rueda trasera con rin de aleación'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposPulsarNS200,

    componentesMotor: sistemasMotorPulsarNS200,

    sistemaCombustible: sistemaCombustiblePulsarNS200,

    sistemaEncendido: sistemaEncendidoPulsarNS200,

    refrigeracion: {

        tipo: 'Refrigeración líquida presurizada',

        elementos: [
            'Radiador frontal de aluminio',
            'Bomba de agua impulsada por engranajes',
            'Termostato',
            'Vaso de expansión de plástico',
            'Electroventilador / Motoventilador automático'
        ],

        funcionamiento:
            'El líquido refrigerante absorbe el calor del cilindro y la culata disipándolo en el radiador presurizado.'
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
            'Impulsa aceite 20W-50 JASO MA2 a través del filtro de papel hacia la culata de 4 Válvulas y la caja de 6 velocidades.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol SOHC',

        tipo: 'Cadena silenciosa con tensor automático',

        funcion:
            'Mantiene la sincronización entre el cigüeñal y las 4 válvulas de la culata.',

        advertencia:
            'Calibre las válvulas en frío con galgas a 0.05mm (Admisión) y 0.10mm (Escape).'
    },

    diagnosticoGeneral: diagnosticoGeneralPulsarNS200,

    fallasComunes: fallasComunesPulsarNS200,

    herramientas: herramientasPulsarNS200,

    mantenimiento: mantenimientoPulsarNS200,

    cursos: cursosPulsarNS200,

    seguridad: seguridadPulsarNS200,

    glosario: glosarioPulsarNS200,

    reglaPrincipal:
        'ESCANER/DTC → REFRIGERANTE → PRESIÓN FI → 3 BUJÍAS → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2012,
            {
                tecnologia: '1ª Gen - Carburador UCAL BS33 / DTS-i Triple Chispa / 6 Velocidades',

                motorPrincipal: '199.5cc DTS-i 4V Monocilíndrico (23.5 HP / 18.3 Nm)'
            }
        );
    }
};


export const bajajPulsarNs200_2013 = {

    ...bajajPulsarNs200_2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2013. Mantenimiento del filtro de papel, carburador UCAL y sistema de refrigeración.',

    informacionHistorica: {

        ...bajajPulsarNs200_2012.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2013,
            {
                tecnologia: '1ª Gen - Carburador UCAL BS33 / DTS-i Triple Chispa',

                motorPrincipal: '199.5cc DTS-i 4V Monocilíndrico'
            }
        );
    }
};


export const bajajPulsarNs200_2014 = {

    ...bajajPulsarNs200_2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2014. Diagnóstico de la bomba de agua, electroventilador y las 3 bujías.',

    informacionHistorica: {

        ...bajajPulsarNs200_2013.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2014,
            {
                tecnologia: '1ª Gen - Carburador UCAL BS33 / DTS-i Triple Chispa',

                motorPrincipal: '199.5cc DTS-i 4V Monocilíndrico'
            }
        );
    }
};


export const bajajPulsarNs200_2015 = {

    ...bajajPulsarNs200_2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2015. Guías de servicio técnico y mantenimiento preventivo.',

    informacionHistorica: {

        ...bajajPulsarNs200_2014.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2015,
            {
                tecnologia: '1ª Gen - Carburador UCAL BS33 / DTS-i 4V',

                motorPrincipal: '199.5cc DTS-i 4V Monocilíndrico'
            }
        );
    }
};


export const bajajPulsarNs200_2016 = {

    ...bajajPulsarNs200_2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2016. Cierre de la serie carburada e inicio de la transición a inyección electrónica FI.',

    informacionHistorica: {

        ...bajajPulsarNs200_2015.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2016,
            {
                tecnologia: '1ª Gen - Carburador / Transición a FI Bosch',

                motorPrincipal: '199.5cc DTS-i 4V Monocilíndrico'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN / INYECCIÓN FI Y ABS (2017 - 2022) ---

export const bajajPulsarNs200_2017 = {

    ...bajajPulsarNs200_2016,

    anio: 2017,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pulsar_NS_200.jpg/1200px-Pulsar_NS_200.jpg',

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 FI / ABS 2017 (Lanzamiento de la versión con Inyección Electrónica Bosch FI, sistema de frenos ABS Bybre y homologación Euro 4).',

    informacionHistorica: {

        titulo: 'Bajaj Pulsar NS 200 FI / ABS 2017',

        generacion: 'Segunda generación (Pulsar NS 200 FI / ABS)',

        familiaMotor: '199.5cc DTS-i FI 4 Válvulas',

        tipoMotor: 'Monocilíndrico 4T SOHC con refrigeración líquida',

        arquitectura: 'SOHC 4 Válvulas',

        alimentacion: 'Inyección Electrónica Bosch FI',

        encendido: 'Digital DTS-i de Triple Chispa gestionado por ECU',

        refrigeracion: 'Líquida presurizada con electroventilador',

        distribucion: 'Cadena de distribución silenciosa',

        transmision: 'Manual de 6 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2017,
            {
                tecnologia: '2ª Gen - Inyección Bosch FI / Frenos ABS / DTS-i 24.1 HP',

                motorPrincipal: '199.5cc DTS-i FI 4V (24.1 HP / 18.6 Nm)'
            }
        );
    }
};


export const bajajPulsarNs200_2018 = {

    ...bajajPulsarNs200_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2018. Diagnóstico de inyección electrónica Bosch, frenos ABS y sensores.',

    informacionHistorica: {

        ...bajajPulsarNs200_2017.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2018,
            {
                tecnologia: '2ª Gen - Inyección Bosch FI / ABS / DTS-i 4V',

                motorPrincipal: '199.5cc DTS-i FI 4V'
            }
        );
    }
};


export const bajajPulsarNs200_2019 = {

    ...bajajPulsarNs200_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2019. Mantenimiento preventivo, scanner OBD2 y sistema de refrigeración.',

    informacionHistorica: {

        ...bajajPulsarNs200_2018.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2019,
            {
                tecnologia: '2ª Gen - Inyección Bosch FI / ABS / DTS-i 4V',

                motorPrincipal: '199.5cc DTS-i FI 4V'
            }
        );
    }
};


export const bajajPulsarNs200_2020 = {

    ...bajajPulsarNs200_2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2020. Diagnóstico del sistema ABS Bybre y mantenimiento de inyección.',

    informacionHistorica: {

        ...bajajPulsarNs200_2019.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2020',

        anio: 2020
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2020,
            {
                tecnologia: '2ª Gen - Inyección Bosch FI / ABS / DTS-i 4V',

                motorPrincipal: '199.5cc DTS-i FI 4V'
            }
        );
    }
};


export const bajajPulsarNs200_2021 = {

    ...bajajPulsarNs200_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2021. Mantenimiento del kit de arrastre O-Ring y calibración de válvulas.',

    informacionHistorica: {

        ...bajajPulsarNs200_2020.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2021,
            {
                tecnologia: '2ª Gen - Inyección Bosch FI / ABS / DTS-i 4V',

                motorPrincipal: '199.5cc DTS-i FI 4V'
            }
        );
    }
};


export const bajajPulsarNs200_2022 = {

    ...bajajPulsarNs200_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2022. Cierre de la segunda generación con rines de nuevo color y gráficas renovadas.',

    informacionHistorica: {

        ...bajajPulsarNs200_2021.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2022,
            {
                tecnologia: '2ª Gen - Inyección Bosch FI / ABS / DTS-i 4V',

                motorPrincipal: '199.5cc DTS-i FI 4V'
            }
        );
    }
};


// --- TERCERA GENERACIÓN UG / HORQUILLA INVERTIDA USD Y ABS DOBLE CANAL (2023 - 2026) ---

export const bajajPulsarNs200_2023 = {

    ...bajajPulsarNs200_2022,

    anio: 2023,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pulsar_NS_200.jpg/1200px-Pulsar_NS_200.jpg',

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 UG 2023 (Lanzamiento de la versión UG con horquilla delantera invertida USD de 31mm, ABS de doble canal, rines más livianos y tablero digital con indicador de marcha).',

    informacionHistorica: {

        titulo: 'Bajaj Pulsar NS 200 UG 2023',

        generacion: 'Tercera generación (Pulsar NS 200 UG / USD)',

        familiaMotor: '199.5cc DTS-i FI Dual-Channel ABS',

        tipoMotor: 'Monocilíndrico 4T SOHC de alta performance',

        arquitectura: 'SOHC 4 Válvulas',

        alimentacion: 'Inyección Electrónica Bosch FI',

        encendido: 'Digital DTS-i de Triple Chispa',

        refrigeracion: 'Líquida presurizada',

        distribucion: 'Cadena de distribución silenciosa de bajo rozamiento',

        transmision: 'Manual de 6 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2023,
            {
                tecnologia: '3ª Gen UG - Horquilla Invertida USD / ABS Doble Canal / Inyección FI',

                motorPrincipal: '199.5cc DTS-i FI 4V (24.1 HP / 18.7 Nm)'
            }
        );
    }
};


export const bajajPulsarNs200_2024 = {

    ...bajajPulsarNs200_2023,

    anio: 2024,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2024 (Incorporación de faro delantero Full LED, tablero digital con conectividad Bluetooth y modos de ABS).',

    informacionHistorica: {

        ...bajajPulsarNs200_2023.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2024,
            {
                tecnologia: '3ª Gen - Horquilla USD / ABS Doble Canal / Faro LED / Bluetooth',

                motorPrincipal: '199.5cc DTS-i FI 4V (24.1 HP)'
            }
        );
    }
};


export const bajajPulsarNs200_2025 = {

    ...bajajPulsarNs200_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 2025. Diagnóstico de la suspensión invertida USD, inyección Bosch y frenos ABS.',

    informacionHistorica: {

        ...bajajPulsarNs200_2024.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2025,
            {
                tecnologia: '3ª Gen - Horquilla USD / ABS Doble Canal / Faro LED',

                motorPrincipal: '199.5cc DTS-i FI 4V'
            }
        );
    }
};


export const bajajPulsarNs200_2026 = {

    ...bajajPulsarNs200_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Bajaj Pulsar NS 200 UG 2026. Diagnóstico integral del motor SOHC 4V de 199.5cc con Triple Chispa DTS-i, Inyección Bosch FI, refrigeración líquida, horquilla invertida USD, frenos ABS de doble canal y transmisión de 6 velocidades.',

    informacionHistorica: {

        ...bajajPulsarNs200_2025.informacionHistorica,

        titulo: 'Bajaj Pulsar NS 200 UG 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPulsarNS200(
            2026,
            {
                tecnologia: '3ª Gen UG - Horquilla Invertida USD / ABS Doble Canal / Faro LED / Bosch FI',

                motorPrincipal: '199.5cc DTS-i FI 4V (24.1 HP / 18.7 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE BAJAJ PULSAR NS 200
// ============================================================

export const bajajPulsarNs200 = {

    marca: 'Bajaj',

    modelo: 'Pulsar NS 200',

    tipo: 'Motocicleta Street / Naked Sport',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pulsar_NS_200.jpg/1200px-Pulsar_NS_200.jpg',

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

        2012: bajajPulsarNs200_2012,

        2013: bajajPulsarNs200_2013,

        2014: bajajPulsarNs200_2014,

        2015: bajajPulsarNs200_2015,

        2016: bajajPulsarNs200_2016,

        2017: bajajPulsarNs200_2017,

        2018: bajajPulsarNs200_2018,

        2019: bajajPulsarNs200_2019,

        2020: bajajPulsarNs200_2020,

        2021: bajajPulsarNs200_2021,

        2022: bajajPulsarNs200_2022,

        2023: bajajPulsarNs200_2023,

        2024: bajajPulsarNs200_2024,

        2025: bajajPulsarNs200_2025,

        2026: bajajPulsarNs200_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
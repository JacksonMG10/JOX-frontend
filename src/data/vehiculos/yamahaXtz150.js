const sistemasMotorXTZ150 = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie 149cc SOHC Monocilíndrico 4T Blue Core)',
        funcion:
            'Estructura de aleación de aluminio con camisa de alta disipación térmica y diseño de baja fricción que aloja el pistón, cigüeñal y mecanismo de distribución para un desempeño On/Off-Road.',
        fallas: [
            'Fugas de aceite por los sellos de la tapa de culata o empaque de la base del cilindro',
            'Desgaste en la camisa por operar con bajo nivel de lubricante (requiere 1000ml a 1150ml Yamalube 10W-40 / 20W-50 JASO MA2)',
            'Acumulación de lodo y barro pesado en las aletas de refrigeración tras uso Dual-Sport',
            'Consumo progresivo de aceite en motores con kilometraje elevado sin mantenimiento de aire/aceite'
        ]
    },

    {
        nombre: 'Culata SOHC 2V con Balancines de Rodillo (Roller Rocker)',
        funcion:
            'Aloja las válvulas de admisión y escape accionadas por balancines de rodillo para minimizar la fricción mecánica con el árbol de levas.',
        fallas: [
            'Sonido de "chascarrillo" o golpeteo por luz de válvulas fuera de norma (Admisión: 0.08-0.12mm / Escape: 0.12-0.16mm)',
            'Dificultad de encendido en frío o apague repentino al desacelerar por válvulas apretadas/pisadas',
            'Pérdida de compresión por acumulación de residuos de carbonilla en el asiento de las válvulas',
            'Fuga de compresión por desgaste del empaque de culata'
        ]
    },

    {
        nombre: 'Cigüeñal y Eje Balanceador (Anti-vibración)',
        funcion:
            'Transforma el movimiento alternativo del pistón en rotación hacia la caja de 5 velocidades e incluye un eje balanceador para reducir las vibraciones en terreno destapado o ruta.',
        fallas: [
            'Golpeteo seco interno en la parte baja del cárter por desgaste en la canastilla de la cabeza de biela',
            'Fuga de aceite por el retén del cigüeñal en el lado del estator/volante',
            'Vibraciones excesivas en el manubrio y posapiés por juego axial en los rodamientos del eje de balance'
        ]
    },

    {
        nombre: 'Pistón Forjado / Alumite Ligero de Alta Resistencia',
        funcion:
            'Soporta las altas temperaturas térmicas transmitiendo la fuerza de la combustión a la biela con reducida inercia.',
        fallas: [
            'Anillos rascadores pegados por acumulación de sedimentos de lubricante degrado',
            'Pérdida progresiva de compresión y fuerza en pendientes pronunciadas',
            'Rayado de la falda del pistón por aspirar polvo si el filtro de aire de espuma no está bien lubricado'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático Hidráulico/Muelle',
        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y el árbol de levas SOHC.',
        fallas: [
            'Sonajero o chascarrillo metálico en el lado izquierdo del cilindro al arrancar en frío',
            'Trabamiento del tensor automático de cadena de distribución',
            'Desgaste de los patines guía plásticos dentro del túnel de distribución'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración por Aire Convectivo de Flujo Directo',
        funcion:
            'Disipa el calor generado mediante el paso de aire a través de las aletas de la culata y cilindro, optimizado para trayectos On y Off-Road.',
        fallas: [
            'Pérdida temporal de potencia por sobrecalentamiento en trochas pesadas a baja velocidad',
            'Obstrucción completa de las aletas de refrigeración por barro o suciedad'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba Trocoide y Filtro de Papel de Elemento Reemplazable',
        funcion:
            'Circula aceite a presión pasando por el filtro de papel externo situado en el cárter derecho hacia la culata y la caja de 5 velocidades.',
        fallas: [
            'Falta de lubricación en la culata por instalar el filtro de papel invertido o sin su empaque o-ring',
            'Obstrucción de la malla tamiz de succión por residuos de empaque o virutas metálicas',
            'Deslizamiento del embrague por utilizar aceites automotrices con aditivos antifricción (No JASO MA2)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleXTZ150 = {

    titulo: 'Sistema de Inyección Electrónica Yamaha FI / Tecnología Blue Core',

    funcionamiento:
        'La bomba de combustible sumergida en el tanque presuriza la línea a ~2.5 bar. La ECU calcula la mezcla pulverizada a través de sensores (TPS, MAP, IAT, FID, O2) entregando una respuesta inmediata de aceleración en cualquier altitud.',

    componentes: [
        'Tanque de combustible de 12.0 Litros con protección para uso multipropósito',
        'Módulo de bomba eléctrica de gasolina sumergida con filtro de succión',
        'Cuerpo de aceleración con inyector multipunto de pulverización fina',
        'Sensor de Posición de Mariposa (TPS), Sensor de Presión MAP y Temperatura de Aire IAT',
        'Sensor de Temperatura del Motor (FID) y Sensor de Oxígeno (O2) en el múltiple de escape',
        'Filtro de aire de elemento de espuma lavable y lubricable para uso Off-Road',
        'Unidad de Control Electrónico del Motor (ECU Yamaha FI)'
    ],

    flujo: [
        '1. La bomba en el tanque presuriza la línea de combustible hacia el inyector.',
        '2. La ECU procesa datos de altura, temperatura del motor y posición de mariposa.',
        '3. El inyector pulveriza la dosis exacta de gasolina en el conducto de admisión.',
        '4. La mezcla entra a la cámara SOHC optimizando el torque a bajas y medias RPM.',
        '5. El sensor de oxígeno analiza los gases de escape y corrige la mezcla continuamente.'
    ],

    diagnostico: [
        'Medir la presión de la bomba de combustible FI con manómetro Yamaha (~250 kPa / 36 PSI).',
        'Verificar el testigo amarillo FI o conectar el escáner YDT / OBD2 para códigos DTC.',
        'Inspeccionar, lavar y lubricar el filtro de aire de espuma tras salidas a terreno destapado.',
        'Limpiar el cuerpo de aceleración y verificar el asiento de la válvula de ralentí.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoXTZ150 = {

    titulo: 'Sistema de Encendido Transistorizado Digital (TCI / ECU FI)',

    funcionamiento:
        'El sensor CKP ubicado en el plato magnético envía pulsos de posición a la ECU. La ECU determina el mapa de avance de encendido óptimo y gatilla la bobina de alta tensión hacia la bujía.',

    componentes: [
        {
            nombre: 'Sensor de Posición del Cigüeñal (CKP)',
            funcion:
                'Lee las marcas del volante magnético e informa las RPM y punto del pistón a la ECU.'
        },

        {
            nombre: 'Unidad de Control ECU FI',
            funcion:
                'Gestión electrónica del avance de chispa y tiempo de inyección en tiempo real.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón Sellado',
            funcion:
                'Eleva el voltaje a más de 20.000V con capuchón con sellado contra agua y barro.'
        },

        {
            nombre: 'Bujía de Encendido (NGK CPR8EA-9 / CPR7EA-9)',
            funcion:
                'Produce el arco eléctrico para detonar la mezcla en el cilindro.'
        }
    ],

    fallaNoHayChispa: [
        'Comprobar el fusible principal de 15A y el fusible del sistema FI (10A).',
        'Verificar el voltaje de la batería en reposo (mínimo 12.5V; la ECU FI no conmuta chispa con bajo voltaje).',
        'Revisar el interruptor del soporte lateral (pata) y la continuidad del sensor de neutro.',
        'Inspeccionar el sensor de corte por ángulo de inclinación (Lean Angle Sensor).',
        'Verificar el estado del capuchón de bujía y el cable de alta tensión.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposXTZ150 = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. La válvula de admisión abre y el sistema inyecta la mezcla atomizada de aire/gasolina.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Ingresar la dosis precisa de mezcla limpia a la cámara de combustión.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla con ambas válvulas cerradas (relación de compresión 9.6:1 Blue Core).',

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
            'La bujía enciende la mezcla. La fuerza de combustión empuja el pistón hacia abajo produciendo la potencia mecánica de 12.3 HP y 13.1 Nm de torque.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el torque progresivo característico para superar pendientes y trochas.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende expulsando los gases quemados por la válvula de escape hacia el tubo de escape elevado.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Expulsar los gases para limpiar la cámara e iniciar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasXTZ150 = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 22mm)',
        'Llave de bujía delgada de 16mm (5/8")',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para regulación de válvulas (0.08mm - 0.16mm)',
        'Alicate universal y alicate de punta',
        'Bandeja de recolección de aceite (1.5 litros) y embudo graduado'
    ],

    diagnostico: [
        'Multímetro digital de alta precisión para medir voltajes DC/AC, resistencia y continuidad',
        'Manómetro de presión de combustible con adaptadores rápidos Yamaha FI',
        'Escáner o conector de diagnóstico Yamaha YDT / OBD2',
        'Compresímetro con acople de rosca M10 / M12'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm (8 Nm a 60 Nm)',
        'Extractor de volante magnético específico Yamaha YBR/XTZ Series',
        'Herramienta sujetadora de embrague y extractor de rodamientos de dirección',
        'Bomba de vacío para purgado del líquido de frenos del circuito del disco / ABS'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralXTZ150 = {

    principio:
        'Diagnóstico metódico Yamaha Dual-Purpose: Lectura de códigos DTC en la ECU FI, verificación de presión de bomba de gasolina, comprobación de compresión y estado de la suspensión Monocross.',

    secuencia: [

        '1. Entrevistar al usuario sobre los síntomas y verificar luces de advertencia FI o ABS en el tablero.',

        '2. Medir la carga de la batería de 12V en reposo (mínimo 12.5V para encendido de la ECU FI).',

        '3. Conectar el escáner Yamaha YDT / OBD2 para leer códigos de falla DTC almacenados.',

        '4. Medir la presión de la bomba de combustible FI (~36 PSI constantes).',

        '5. Comprobar la intensidad de chispa en la bujía NGK.',

        '6. Evaluar la compresión mecánica del motor en el orificio de la bujía.',

        '7. Verificar la luz de válvulas en frío (Admisión: 0.08-0.12mm / Escape: 0.12-0.16mm).',

        '8. Sustituir o reparar componentes utilizando repuestos originales Yamaha Genuine Parts.',

        '9. Efectuar la calibración de ralentí y reinicio de parámetros si se intervino el cuerpo FI.',

        '10. Realizar prueba de ruta evaluando la aceleración, estabilidad On/Off-Road y frenada.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesXTZ150 = [

    {
        titulo: 'El motor se apaga repentinamente en ralentí o titubea al acelerar en trocha',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Filtro de aire de espuma lleno de lodo, tierra o con exceso de aceite',
            'Cuerpo de aceleración / conducto de aire de ralentí sucio',
            'Válvula de admisión apretada/pisada sin holgura de calibración',
            'Inyector de combustible parcialmente tapado por impurezas'
        ],

        diagnostico: [
            'Lavar el filtro de aire de espuma con desengrasante, secar y lubricar adecuadamente.',
            'Realizar mantenimiento al cuerpo de aceleración.',
            'Calibrar válvulas en frío (Admisión: 0.10mm / Escape: 0.14mm).',
            'Limpiar el inyector de combustible en banco ultrasónico.'
        ]
    },

    {
        titulo: 'Testigo FI (Inyección Electrónica) encendido o parpadeando en el tablero',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor O2 del escape sucio, golpeado en rutas destapadas o desconectado',
            'Sensor de temperatura del motor (FID) con fallas de lectura',
            'Bajo voltaje en la batería o falla en el sistema de carga del estator',
            'Pérdida de presión en la bomba de gasolina sumergida'
        ],

        diagnostico: [
            'Escanear la ECU con el equipo YDT / OBD2 para leer el código DTC.',
            'Inspeccionar el arnés eléctrico en la zona baja del motor por cables pelados o sulfatados.',
            'Medir el voltaje de carga del alternador a 4.000 RPM (debe estar entre 13.5V y 14.5V).',
            'Borrar el historial de errores DTC en la ECU.'
        ]
    },

    {
        titulo: 'Tirones o vacilación al acelerar a fondo en subidas o ruta',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Presión de bomba de combustible insuficiente por filtro interno sucio',
            'Bujía de encendido desgastada o con distancia del electrodo fuera de norma',
            'Agua o mugre acumulada en el fondo del tanque de gasolina'
        ],

        diagnostico: [
            'Conectar manómetro y realizar prueba de presión de bomba de gasolina (~36 PSI).',
            'Reemplazar la bujía por la especificada (NGK CPR8EA-9).',
            'Drenar el tanque de gasolina y limpiar la malla de succión de la bomba.'
        ]
    },

    {
        titulo: 'Chirrido o golpeteo en la suspensión trasera Monocross al pasar baches',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Bujes y rodamientos de agujas de las bieletas del Monocross resecos o con barro',
            'Falta de grasa multipropósito en los pasadores de la tijera/basculante',
            'Amortiguador trasero con pérdida de fluido o gas'
        ],

        diagnostico: [
            'Desmontar las bieletas de la suspensión trasera Monocross.',
            'Limpiar, inspeccionar rodamientos de aguja y lubricar con grasa de litio/complejo de jabón.',
            'Verificar la ausencia de fugas en el cuerpo del amortiguador central.'
        ]
    },

    {
        titulo: 'Sonido metálico en la zona izquierda del motor al arrancar',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Cadena de distribución destensionada o estirada',
            'Tensor automático de la cadena de distribución pegado o dañado',
            'Luz de balancines descalibrada'
        ],

        diagnostico: [
            'Verificar la retracción y presión del tensor automático de distribución.',
            'Inspeccionar los patines guía de caucho internos.',
            'Calibrar la luz de las válvulas en la culata SOHC.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoXTZ150 = {

    objetivo:
        'Preservar la máxima confiabilidad On/Off-Road del motor Blue Core 149cc, proteger el sistema de inyección electrónica FI en cualquier condición de clima y mantener la suavidad de la suspensión Monocross.',

    actividades: [

        {
            nombre: 'Aceite de motor y Filtro de papel',
            accion:
                'Reemplazar el aceite cada 3.000 km utilizando 1000ml (1150ml con filtro) de lubricante Yamalube 10W-40 / 20W-50 JASO MA2. Sustituir el filtro de papel en cada cambio de aceite.'
        },

        {
            nombre: 'Filtro de Aire (Espuma Lavable)',
            accion:
                'Inspeccionar cada 3.000 km (o tras cada salida a tierra/trocha). Lavar con desengrasante, dejar secar y aplicar aceite especial para filtros de espuma.'
        },

        {
            nombre: 'Calibración de Válvulas SOHC',
            accion:
                'Inspeccionar y calibrar en frío cada 6.000 km. Tolerancias recomendadas: Admisión (0.08mm - 0.12mm) / Escape (0.12mm - 0.16mm).'
        },

        {
            nombre: 'Limpieza del Cuerpo FI e Inyector',
            accion:
                'Realizar mantenimiento preventivo al cuerpo de inyección e inyector cada 12.000 km.'
        },

        {
            nombre: 'Cadena de Transmisión y Kit de Arrastre',
            accion:
                'Limpiar, tensionar y lubricar la cadena cada 500 km (o inmediatamente tras lavar la moto o andar en barro). Mantener la holgura entre 30mm y 45mm. Reemplazar kit entre 15.000 km y 20.000 km.'
        },

        {
            nombre: 'Mantenimiento de Suspensión Monocross y Bieletas',
            accion:
                'Desarmar, limpiar y engrasar los rodamientos de las bieletas y eje de la tijera basculante cada 12.000 km.'
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

const seguridadXTZ150 = [

    'Al realizar mantenimiento al sistema de combustible FI, despresurice la línea desconectando el arnés de la bomba antes de soltar las mangueras de alta presión.',

    'NUNCA desconecte la batería con el motor encendido; picos de voltaje pueden quemar la ECU y el panel de instrumentos.',

    'Utilice un gato central o soporte elevado debajo del chasis para realizar trabajos en las ruedas, frenos o suspensión trasera Monocross.',

    'Verifique siempre la tensión de los radios de ambas ruedas (rin 19 delantera / rin 17 trasera) tras recorridos por terrenos destapados.',

    'Respete los torques de apriete en el tapón de drenaje de aceite (20 Nm) y en las tapas del filtro de aceite (10 Nm) para evitar fisurar la rosca de aluminio.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosXTZ150 = [

    {
        id: 1,

        titulo: 'Introducción a la Yamaha XTZ 150 y Mantenimiento Periódico',

        nivel: 'Básico',

        descripcion:
            'Aprende la arquitectura del motor Blue Core 149cc, cambio de aceite, sustitución del filtro de papel, lavado del filtro de aire de espuma y tensión de cadena.',

        temas: [
            'Evolución del modelo Yamaha XTZ 150 Dual Purpose',
            'Procedimiento correcto de cambio de aceite y filtro de papel',
            'Mantenimiento y lubricación del filtro de aire de espuma para trocha',
            'Tensión y alineación de la cadena de transmisión en motocicletas de doble propósito'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del Motor Blue Core y Mantenimiento de Suspensión Monocross',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a ubicar el Punto Muerto Superior (PMS), calibrar válvulas en la culata SOHC y lubricar el sistema de suspensión trasera Monocross.',

        temas: [
            'Ubicación de la marca I y I-T en la volante magnética y piñón de levas',
            'Reglaje de válvulas en frío con calibrador de galgas (0.10mm / 0.14mm)',
            'Desarme, inspección y engrase de bieletas de la suspensión Monocross',
            'Mantenimiento de barras telescópicas delanteras y retenes de suspensión'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica Yamaha FI y Diagnóstico por Escáner YDT / OBD2',

        nivel: 'Intermedio',

        descripcion:
            'Aprende sobre la gestión de la ECU FI, lectura de códigos de falla DTC, prueba de sensores y bomba de gasolina.',

        temas: [
            'Sensores del sistema FI: TPS, MAP, IAT, FID, O2 y función de la ECU',
            'Uso de la herramienta YDT / Escáner OBD2 para lectura y borrado de errores',
            'Prueba de presión y caudal de la bomba de combustible',
            'Limpieza del cuerpo de aceleración y del inyector por ultrasonido'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema de Frenos ABS, Llantas con Radio y Red Eléctrica',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico del sistema ABS de rueda delantera, nivelación/tensionado de radios en rines de radiado y sistema de carga.',

        temas: [
            'Funcionamiento del sensor ABS delantero, rueda fónica y purgado DOT 4',
            'Tensionado y centrado de radios en rines On/Off-Road',
            'Pruebas del estator de carga, regulador/rectificador y batería de 12V',
            'Instalación y diagnóstico de iluminación y accesorios eléctricos'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioXTZ150 = [

    {
        termino: 'XTZ 150',
        significado:
            'Modelo insignia de motocicleta On/Off-Road (Dual Purpose) de Yamaha, reconocida por su confort, suspensión Monocross y alta confiabilidad.'
    },

    {
        termino: 'Blue Core',
        significado:
            'Filosofía de desarrollo de motores Yamaha enfocada en maximizar la eficiencia de combustión, reducir la fricción y optimizar el enfriamiento.'
    },

    {
        termino: 'FI',
        significado:
            'Fuel Injection. Sistema de inyección electrónica de combustible gestionado digitalmente por la ECU.'
    },

    {
        termino: 'Monocross',
        significado:
            'Sistema de suspensión trasera articulada por bieletas con un solo amortiguador central patentado por Yamaha para absorber impactos.'
    },

    {
        termino: 'Dual Purpose',
        significado:
            'Doble propósito. Motocicleta diseñada y homologada tanto para transitar en pavimento urbano como en caminos destapados de tierra o trocha.'
    },

    {
        termino: 'ABS',
        significado:
            'Anti-lock Braking System. Sistema antibloqueo de frenos en la rueda delantera que evita derrapes en superficies resbaladizas.'
    },

    {
        termino: 'YDT',
        significado:
            'Yamaha Diagnostic Tool. Herramienta especializada de escaneo para diagnóstico de sistemas de inyección y sensores Yamaha.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoXTZ150(anio, configuracion) {

    const sintomasMapeados = fallasComunesXTZ150.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Yamaha XTZ 150 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasXTZ150.basicas,
            ...herramientasXTZ150.diagnostico
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

                titulo: 'Motor Yamaha 149cc Blue Core y Sistema FI',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, ECU FI y Sensores',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido TCI y Sensores FI',

                        sintomas: [

                            {
                                titulo: 'El motor no enciende o la luz FI parpadea',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Revisión de voltaje de batería, presión de bomba FI, fusibles y escaneo con equipo YDT / OBD2.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Manómetro de presión FI',
                                    'Escáner Yamaha YDT / OBD2'
                                ],

                                pasos: [
                                    '1. Verificar que el voltaje de la batería esté por encima de 12.5V.',
                                    '2. Medir la presión de la bomba de combustible en la línea (~36 PSI).',
                                    '3. Leer los códigos de falla en la ECU usando el escáner YDT o interfaz OBD2.',
                                    '4. Comprobar la chispa en la bujía NGK CPR8EA-9 y la continuidad del capuchón.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 5 Velocidades, Monocross y Frenos',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague, Cadena y Suspensión Monocross',

                        sintomas: [

                            {
                                titulo: 'Chirrido en la suspensión trasera o embrague deslizante',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Ajuste del cable de embrague, lubricación de bieletas del Monocross y aceite JASO MA2.',

                                herramientas: [
                                    'Llaves fijas de 10mm, 12mm y 17mm',
                                    'Grasa multipropósito / litio',
                                    'Bandeja de fluido'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre en la manigueta de embrague (10mm a 15mm).',
                                    '2. Confirmar el uso de aceite Yamalube 10W-40 con norma JASO MA2.',
                                    '3. Desarmar las bieletas de la suspensión Monocross, limpiar y engrasar pasadores y rodamientos.'
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
// MODELOS INDIVIDUALES POR AÑO (YAMAHA XTZ 150 2018 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN / LANZAMIENTO GLOBAL (2018 - 2022) ---

export const yamahaXtz150_2018 = {

    marca: 'Yamaha',

    modelo: 'XTZ 150',

    anio: 2018,

    tipo: 'Motocicleta On/Off-Road / Dual Purpose',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Yamaha_XTZ_150.jpg/1200px-Yamaha_XTZ_150.jpg',

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 2018 (Lanzamiento mundial / Motor 149cc SOHC 4T Blue Core, Inyección Electrónica FI, transmisión de 5 velocidades, suspensión trasera Monocross y freno de disco delantero).',

    informacionHistorica: {

        titulo: 'Yamaha XTZ 150 2018',

        generacion: 'Primera generación XTZ 150 Blue Core FI',

        familiaMotor: '149cc Blue Core 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T SOHC refrigerado por aire de flujo directo',

        arquitectura: 'SOHC 2 Válvulas con Balancines de Rodillo',

        alimentacion: 'Inyección Electrónica FI Yamaha',

        encendido: 'Digital TCI (Arranque eléctrico)',

        refrigeracion: 'Enfriado por aire convectivo',

        distribucion: 'Cadena de distribución silenciosa de baja fricción',

        transmision: 'Manual de 5 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Yamaha XTZ 150 2018?',

        explicacion:
            'Un motor monocilíndrico con tecnología Blue Core inyectado electrónicamente, diseñado para entregar un excelente torque a bajas revoluciones y baja vibración gracias a su eje balanceador.',

        formulaSimple:
            'Aire + gasolina por inyección FI + compresión 9.6:1 + chispa TCI + suspensión Monocross = 12.3 HP On/Off-Road',

        flujoEnergia: [
            'Tanque de combustible (12.0 Litros)',
            'Bomba eléctrica de gasolina sumergida',
            'Cuerpo de aceleración FI',
            'Cámara de combustión SOHC',
            'Pistón forjado de aleación ligera',
            'Biela',
            'Cigüeñal y Eje Balanceador',
            'Embrague multidisco húmedo',
            'Caja de 5 velocidades',
            'Piñón de salida',
            'Cadena de transmisión',
            'Rueda trasera con rin de radiado 17"'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposXTZ150,

    componentesMotor: sistemasMotorXTZ150,

    sistemaCombustible: sistemaCombustibleXTZ150,

    sistemaEncendido: sistemaEncendidoXTZ150,

    refrigeracion: {

        tipo: 'Refrigeración por aire convectivo de flujo directo',

        elementos: [
            'Aletas de disipación térmicas en cilindro de aluminio',
            'Aletas en culata SOHC',
            'Flujo de aire por desplazamiento On/Off-Road'
        ],

        funcionamiento:
            'El aire ambiental enfría el cilindro y la culata pasando directamente entre las aletas del bloque.'
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
            'Circula aceite Yamalube 10W-40 / 20W-50 JASO MA2 a través del filtro de papel hacia la culata SOHC y transmisión.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol SOHC',

        tipo: 'Cadena silenciosa con tensor automático',

        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y el árbol de levas SOHC.',

        advertencia:
            'Verifique la luz de calibración de válvulas en frío a 0.10mm (Admisión) y 0.14mm (Escape).'
    },

    diagnosticoGeneral: diagnosticoGeneralXTZ150,

    fallasComunes: fallasComunesXTZ150,

    herramientas: herramientasXTZ150,

    mantenimiento: mantenimientoXTZ150,

    cursos: cursosXTZ150,

    seguridad: seguridadXTZ150,

    glosario: glosarioXTZ150,

    reglaPrincipal:
        'LECTURA DTC → PRESIÓN FI → CHISPA → COMPRESIÓN → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2018,
            {
                tecnologia: '1ª Gen - Motor Blue Core 149cc / Inyección FI / Monocross',

                motorPrincipal: '149cc Blue Core FI (12.3 HP / 13.1 Nm)'
            }
        );
    }
};


export const yamahaXtz150_2019 = {

    ...yamahaXtz150_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 2019. Mantenimiento del filtro de aceite de papel, lavado del filtro de espuma y revisión del sistema FI.',

    informacionHistorica: {

        ...yamahaXtz150_2018.informacionHistorica,

        titulo: 'Yamaha XTZ 150 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2019,
            {
                tecnologia: '1ª Gen - Blue Core FI / Monocross / SOHC 2V',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaXtz150_2020 = {

    ...yamahaXtz150_2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 2020. Diagnóstico de inyección electrónica FI, sensores y mantenimiento de bieletas Monocross.',

    informacionHistorica: {

        ...yamahaXtz150_2019.informacionHistorica,

        titulo: 'Yamaha XTZ 150 2020',

        anio: 2020
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2020,
            {
                tecnologia: '1ª Gen - Blue Core FI / Monocross / SOHC 2V',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaXtz150_2021 = {

    ...yamahaXtz150_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 2021. Guías de servicio para motor 149cc, calibración de válvulas y alineación de radios.',

    informacionHistorica: {

        ...yamahaXtz150_2020.informacionHistorica,

        titulo: 'Yamaha XTZ 150 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2021,
            {
                tecnologia: '1ª Gen - Blue Core FI / Monocross / SOHC 2V',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaXtz150_2022 = {

    ...yamahaXtz150_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 2022. Cierre de la primera generación e incorporación de conector OBD2 para diagnóstico estándar.',

    informacionHistorica: {

        ...yamahaXtz150_2021.informacionHistorica,

        titulo: 'Yamaha XTZ 150 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2022,
            {
                tecnologia: '1ª Gen - Blue Core FI / Monocross / OBD2',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN / ABS Y OPTIMIZACIÓN FI (2023 - 2026) ---

export const yamahaXtz150_2023 = {

    ...yamahaXtz150_2022,

    anio: 2023,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Yamaha_XTZ_150.jpg/1200px-Yamaha_XTZ_150.jpg',

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 ABS 2023 (Lanzamiento con sistema ABS en la rueda delantera, tablero digital renovado e inyección FI de respuesta mejorada).',

    informacionHistorica: {

        titulo: 'Yamaha XTZ 150 ABS 2023',

        generacion: 'Segunda generación (XTZ 150 ABS)',

        familiaMotor: '149cc Blue Core Single-Channel ABS',

        tipoMotor: 'Monocilíndrico 4T SOHC de baja fricción',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Inyección Electrónica FI Yamaha',

        encendido: 'Digital TCI / ECU FI OBD2',

        refrigeracion: 'Enfriado por aire convectivo',

        distribucion: 'Cadena de distribución silenciosa',

        transmision: 'Manual de 5 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2023,
            {
                tecnologia: '2ª Gen - Blue Core FI / ABS Delantero / Monocross / OBD2',

                motorPrincipal: '149cc Blue Core FI (12.3 HP / 13.1 Nm)'
            }
        );
    }
};


export const yamahaXtz150_2024 = {

    ...yamahaXtz150_2023,

    anio: 2024,

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 2024. Diagnóstico del sistema ABS delantero, sensores de rueda y mantenimiento FI.',

    informacionHistorica: {

        ...yamahaXtz150_2023.informacionHistorica,

        titulo: 'Yamaha XTZ 150 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2024,
            {
                tecnologia: '2ª Gen - Blue Core FI / ABS Delantero / Monocross',

                motorPrincipal: '149cc Blue Core FI (12.3 HP)'
            }
        );
    }
};


export const yamahaXtz150_2025 = {

    ...yamahaXtz150_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 2025. Diagnóstico de motor Blue Core, suspensión Monocross y escaneo OBD2.',

    informacionHistorica: {

        ...yamahaXtz150_2024.informacionHistorica,

        titulo: 'Yamaha XTZ 150 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2025,
            {
                tecnologia: '2ª Gen - Blue Core FI / ABS Delantero / Monocross',

                motorPrincipal: '149cc Blue Core FI'
            }
        );
    }
};


export const yamahaXtz150_2026 = {

    ...yamahaXtz150_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Yamaha XTZ 150 Dual Purpose 2026. Diagnóstico integral del motor Blue Core 149cc, Inyección FI, freno ABS de monocanal, suspensión trasera Monocross y transmisión de 5 velocidades.',

    informacionHistorica: {

        ...yamahaXtz150_2025.informacionHistorica,

        titulo: 'Yamaha XTZ 150 Dual Purpose 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoXTZ150(
            2026,
            {
                tecnologia: '2ª Gen - Blue Core FI / ABS Delantero / Monocross / OBD2',

                motorPrincipal: '149cc Blue Core FI (12.3 HP / 13.1 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE YAMAHA XTZ 150
// ============================================================

export const yamahaXtz150 = {

    marca: 'Yamaha',

    modelo: 'XTZ 150',

    tipo: 'Motocicleta On/Off-Road / Dual Purpose',

    imagen:
        'https://www.galgo.com/wp-content/uploads/2023/01/YAMAHA-XTZ-150_-La-multiproposito-mas-buscada.webp',

    aniosDisponibles: [
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

        2018: yamahaXtz150_2018,

        2019: yamahaXtz150_2019,

        2020: yamahaXtz150_2020,

        2021: yamahaXtz150_2021,

        2022: yamahaXtz150_2022,

        2023: yamahaXtz150_2023,

        2024: yamahaXtz150_2024,

        2025: yamahaXtz150_2025,

        2026: yamahaXtz150_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
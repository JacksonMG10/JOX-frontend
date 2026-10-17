const sistemasMotorCT100 = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie 100cc 4T Monocilíndrico)',
        funcion:
            'Estructura de aleación de aluminio con camisa de hierro fundido refrigerada por aire convectivo que aloja el pistón, cigüeñal y mecanismo de distribución.',
        fallas: [
            'Fugas de aceite por empaque de la base del cilindro o tapa de culata',
            'Desgaste en la camisa por trabajar con nivel bajo de aceite (requiere 1000ml 20W-50 JASO MA2)',
            'Sobrecalentamiento por saturación de aletas de refrigeración con barro',
            'Humo azul por el escape por desgaste de anillos o sellos de válvula'
        ]
    },

    {
        nombre: 'Culata SOHC 2V de Alta Eficiencia',
        funcion:
            'Aloja las 2 válvulas impulsadas por balancines, bujía de encendido y árbol de levas superior.',
        fallas: [
            'Ruido de cascabeleo o traqueteo por holgura excesiva en balancines',
            'Dificultad de encendido en frío por válvulas pisadas o apretadas (sin luz de tolerancia)',
            'Fuga de compresión por empaque de culata quemado o fisurado',
            'Desgaste en sellos de válvula que causa humo blanco/azul al arrancar'
        ]
    },

    {
        nombre: 'Cigüeñal y Biela con Rodamientos de Ultra Baja Fricción',
        funcion:
            'Convierte el movimiento alternativo del pistón en rotación hacia la caja de cambios de 4 velocidades mediante embrague multidisco húmedo.',
        fallas: [
            'Golpeteo grave en el cárter (ruido de biela) por falta severa de lubricación',
            'Fuga de aceite por el retén del eje del piñón de salida o del eje de cambios',
            'Desgaste de rodajes de cigüeñal por usar aceite degradado'
        ]
    },

    {
        nombre: 'Pistón y Anillos de Baja Fricción',
        funcion:
            'Comprimen la mezcla aire/gasolina y transmiten la fuerza de la combustión a la biela.',
        fallas: [
            'Anillos rascadores de aceite pegados por acumulación de carbonilla',
            'Pérdida de compresión (dificultad para encender con el pedal de arranque)',
            'Rayado de la falda del pistón por falta de mantenimiento en el filtro de aire'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático',
        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y el árbol de levas SOHC.',
        fallas: [
            'Sonajero metálico en la tapa izquierda del motor en frío o en ralentí',
            'Falla o atascamiento del tensor automático de cadena de distribución',
            'Desgaste de los patines guía de goma internos'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración por Aire Convectivo',
        funcion:
            'Disipa el calor generado mediante el flujo de aire directo a través de las aletas del bloque y la culata.',
        fallas: [
            'Pérdida temporal de potencia por sobrecalentamiento en trancones prolongados',
            'Aletas de radiación cubiertas de aceite o barro grueso'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba Trocoide y Filtro de Tamiz/Papel',
        funcion:
            'Garantiza el flujo constante de aceite hacia la culata, caja de cambios y embrague sumergido.',
        fallas: [
            'Malla de succión del cárter tapada con residuos de empaque o sellador',
            'Falta de lubricación en la culata (desgasta prematuramente balancines y árbol de levas)',
            'Uso de aceite no certificado JASO MA2 (causa deslizamiento de discos de embrague)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleCT100 = {

    titulo: 'Sistema de Alimentación por Carburador Keihin / e-Carb Electrónico',

    funcionamiento:
        'El combustible baja por gravedad desde el tanque de 10.5L hacia la cuba del carburador. El efecto Venturi aspira la gasolina pulverizándola a través de los boquereles de baja y alta.',

    componentes: [
        'Tanque de combustible de 10.5 Litros con grifo/llave de reserva',
        'Filtro de gasolina de papel/malla externa en línea',
        'Carburador de cortina Keihin PB18 / Carburador electrónico e-Carb',
        'Boquerel (chicler) de baja / ralentí y boquerel principal de alta',
        'Múltiple/Cisne de admisión con empaque térmico aislante',
        'Filtro de aire de espuma lavable impregnado en aceite',
        'Choke / Ahogador de accionamiento manual en el carburador o manubrio'
    ],

    flujo: [
        '1. La gasolina fluye por gravedad desde la llave de paso del tanque hacia el carburador.',
        '2. El punzón de flotador regula el nivel constante de combustible en la cuba.',
        '3. La apertura del acelerador levanta la cortina y aguja permitiendo el paso de aire.',
        '4. El flujo de aire pulveriza la gasolina formando la mezcla óptima de combustión.',
        '5. La mezcla entra a la cámara por la válvula de admisión de la culata.'
    ],

    diagnostico: [
        'Inspeccionar drenaje de la cuba para evacuar agua o agua condensada acumulada.',
        'Verificar que el boquerel de baja no esté tapado si la moto se apaga al soltar el acelerador.',
        'Ajustar el tornillo de mezcla (1.5 a 2 vueltas desde el fondo como base de reglaje).',
        'Limpiar y lubricar el filtro de aire de espuma con aceite especial para filtros.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoCT100 = {

    titulo: 'Sistema de Encendido por Descarga de Condensador (CDI Digital con Champion/Bosch)',

    funcionamiento:
        'La bobina pulsora envía la señal de posición del cigüeñal al módulo CDI, el cual libera la descarga acumulada hacia la bobina de alta tensión para generar el arco eléctrico en la bujía.',

    componentes: [
        {
            nombre: 'Plato de Bobinas (Stator) y Bobina Pulsora',
            funcion:
                'Genera la corriente alterna de carga y envía la señal de tiempo de encendido.'
        },

        {
            nombre: 'Módulo de Encendido CDI Digital',
            funcion:
                'Procesa la curva de avance de la chispa de acuerdo con las revoluciones del motor.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón Resistivo',
            funcion:
                'Eleva el voltaje del CDI a más de 15.000V para vencer la presión en la bujía.'
        },

        {
            nombre: 'Bujía de Encendido (Champion PRZ9HC / NGK CR7HSA)',
            funcion:
                'Produce la chispa dentro de la cámara para inflamar la mezcla aire/gasolina.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el estado del fusible principal de 10A/15A en la caja de batería.',
        'Medir la resistencia de la bobina pulsora (rango normal: 120 Ω a 180 Ω).',
        'Comprobar el interruptor de apagado de emergencia (Run/Off) y switch de llave.',
        'Revisar si el capuchón de bujía tiene la resistencia interna abierta o sulfatada.',
        'Probar continuidad a masa en la bobina de alta tensión y módulo CDI.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposCT100 = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. La válvula de admisión se abre y el carburador entrega la mezcla atomizada de aire y gasolina.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Llenar el cilindro con la mayor cantidad de mezcla combustible.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende del PMI al PMS con ambas válvulas cerradas, comprimiendo la carga (relación de compresión 9.8:1).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y temperatura antes de la chispa de encendido.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'El CDI activa la chispa en la bujía. La mezcla se inflama y la expansión de gases empuja el pistón hacia abajo con fuerza.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el par motor que mueve la caja de 4 marchas y permite su ultra bajo consumo.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón sube impulsando los gases quemados hacia la válvula de escape abierta rumbo al tubo con catalizador.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Expulsar los gases quemados para iniciar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasCT100 = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 13mm, 14mm, 17mm, 19mm, 22mm)',
        'Llave o copa delgada para bujía de 16mm (5/8")',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para calibración de válvulas (0.05mm - 0.10mm)',
        'Alicate universal y alicate de punta fina',
        'Bandeja de recolección de aceite (1 litro) y embudo graduado'
    ],

    diagnostico: [
        'Multímetro digital para pruebas de resistencia, voltaje continuo y alterno',
        'Probador de chispa / chispómetro',
        'Compresímetro con acople de rosca M10 / M12',
        'Cargador de batería de 12V para motocicleta'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm (8 Nm a 55 Nm)',
        'Extractor de volante magnético específico para Bajaj / Honda 100cc',
        'Herramienta sujetadora de embrague y copa castillo para tuerca de filtro centrífugo',
        'Extractor de rodamientos de cigüeñal y prensa de válvulas'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralCT100 = {

    principio:
        'Diagnóstico metódico de 3 pilares: Verificar presencia de chispa de encendido, flujo de gasolina en carburador y compresión mecánica en el cilindro.',

    secuencia: [

        '1. Entrevistar al usuario sobre los síntomas detectados y el historial de mantenimientos.',

        '2. Medir el voltaje de la batería en reposo (mínimo 12.4V en versiones ES con arranque eléctrico).',

        '3. Probar salto de chispa en la bujía haciéndola tocar la culata mientras se opera el pedal de arranque o botón.',

        '4. Inspeccionar el flujo de gasolina soltando la manguera del carburador y abriendo la llave del tanque.',

        '5. Evaluar la compresión mecánica colocando el pulgar sobre el orificio de la bujía y dando pedalazo.',

        '6. Desmontar la cuba del carburador si la chispa y la compresión se encuentran dentro del rango.',

        '7. Verificar la luz de calibración de válvulas si presenta dificultad para encender en frío.',

        '8. Reemplazar o reparar componentes utilizando repuestos originales Bajaj Genuine Parts.',

        '9. Regular el ralentí a 1.400 RPM (+/- 100 RPM) y ajustar la aguja de aire/gasolina.',

        '10. Efectuar prueba de ruta en plano y pendientes para confirmar la reparación.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesCT100 = [

    {
        titulo: 'La motocicleta se apaga en ralentí o dificulta encender en frío',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Válvula de admisión pisada (sin luz/holgura de calibración)',
            'Boquerel de baja / chicler de ralentí atascado con sedimentos',
            'Fuga de aire por el o-ring o empaque del múltiple de admisión',
            'Bujía de encendido descalibrada, con carbón o en cortocircuito'
        ],

        diagnostico: [
            'Calibrar válvulas en frío (Admisión: 0.05mm / Escape: 0.10mm).',
            'Desmontar la cuba del carburador y destapar el boquerel de baja con limpiador presurizado.',
            'Inspeccionar la estanqueidad de la junta del colector de admisión.',
            'Limpiar y ajustar la luz del electrodo de la bujía a 0.7mm.'
        ]
    },

    {
        titulo: 'El embrague patina al acelerar en pendientes o los cambios entran duros',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Guaya de embrague demasiado tensionada o con falta de lubricación',
            'Discos de embrague cristalizados o gastados por usar aceite no apto (usar JASO MA2)',
            'Resortes de la prensa de embrague fatigados o fuera de limite'
        ],

        diagnostico: [
            'Ajustar el juego libre de la manigueta de embrague (2mm a 3mm de tolerancia).',
            'Drenar el aceite y revisar presencia de sedimentos de discos.',
            'Desmontar la tapa derecha del cárter y medir el grosor de los discos de fricción.'
        ]
    },

    {
        titulo: 'Paso continuo de gasolina que rebosa el carburador (Goteo por la manguera de desahogo)',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Punzón/aguja del flotador gastada o con suciedad incrustada en el asiento',
            'Flotador perforado o mal graduado dentro de la cuba',
            'Óxido o sedimentos provenientes del tanque de combustible'
        ],

        diagnostico: [
            'Retirar la cuba del carburador y limpiar la cuna del punzón con aire a presión.',
            'Verificar el sellado del punzón de caucho.',
            'Instalar un filtro de gasolina en línea entre la llave del tanque y el carburador.'
        ]
    },

    {
        titulo: 'Sonajero constante en el motor tipo "chascarrillo" al acelerar',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Cadena de distribución destensionada o estirada',
            'Tensor automático de cadena pegado o dañado',
            'Holgura excesiva de las válvulas en la culata'
        ],

        diagnostico: [
            'Inspeccionar la presión y funcionamiento del tensor automático de cadena.',
            'Verificar el desgaste de los patines guía de caucho.',
            'Verificar y reajustar las luces de válvulas en la culata.'
        ]
    },

    {
        titulo: 'Consumo excesivo de combustible o humo negro al acelerar a fondo',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Choke / ahogador pegado o parcialmente accionado',
            'Filtro de aire de espuma lleno de tierra, aceite saturado o mugre',
            'Boquerel de alta sobremedida o aguja de cortina muy alta'
        ],

        diagnostico: [
            'Verificar que el cable del ahogador regrese completamente a su posición de reposo.',
            'Lavar el filtro de espuma con desengrasante, secar e impregnar levemente con aceite.',
            'Ajustar el clip de la aguja de la cortina en la posición central.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoCT100 = {

    objetivo:
        'Conservar el extraordinario rendimiento de combustible (hasta 250+ km/galón), asegurar la fiabilidad diaria del motor de 100cc y alargar la vida útil del kit de arrastre y frenos.',

    actividades: [

        {
            nombre: 'Aceite de motor (4T)',
            accion:
                'Reemplazar cada 2.000 km o 2.500 km utilizando 1000 ml de aceite mineral o semisintético 20W-50 con certificación JASO MA2 / API SL.'
        },

        {
            nombre: 'Filtro centrífugo y Malla del cárter',
            accion:
                'Limpiar la malla tamiz y retirar la carbonilla acumulada en la copa del filtro centrífugo cada 10.000 km.'
        },

        {
            nombre: 'Calibración de Válvulas SOHC',
            accion:
                'Inspeccionar y calibrar en frío cada 5.000 km. Holgura recomendada: Admisión 0.05mm / Escape 0.10mm.'
        },

        {
            nombre: 'Limpieza de Carburador y Filtro de Aire',
            accion:
                'Lavar el filtro de espuma de aire y realizar limpieza completa del carburador cada 4.000 km.'
        },

        {
            nombre: 'Kit de Arrastre y Guarda Cadena',
            accion:
                'Lubricar y tensionar la cadena de transmisión dentro de la cubierta guarda-cadena cada 1.000 km. Sustituir el kit de arrastre entre 15.000 km y 20.000 km.'
        },

        {
            nombre: 'Frenos de Tambor (Delantero y Trasero)',
            accion:
                'Inspeccionar el indicador de desgaste de las bandas/zapatas de freno cada 3.000 km; limpiar el polvo acumulado dentro de las campanas.'
        },

        {
            nombre: 'Bujía de Encendido',
            accion:
                'Limpiar el carbón y calibrar la luz del electrodo (0.6mm - 0.7mm) cada 3.000 km; reemplazar cada 10.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadCT100 = [

    'Mantenga siempre instalada la cubierta/guarda-cadena metálica para evitar que prendas de vestir se atrapen en la transmisión secundaria.',

    'Apoye la motocicleta sobre el soporte central (gato central) en terreno plano y firme antes de desmontar las ruedas o realizar mantenimiento.',

    'No realice trabajos de limpieza de carburador cerca de fuentes de calor, chispas o llamas abiertas.',

    'Desconecte el borne negativo de la batería antes de manipular relés de arranque, fusileras o el sistema eléctrico en versiones ES.',

    'Respete el torque en las tuercas de los ejes de las ruedas (45 Nm a 55 Nm) y en el tapón de drenaje de aceite (18 Nm) para no trasroscar las roscas.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosCT100 = [

    {
        id: 1,

        titulo: 'Introducción a la Bajaj CT 100 y Mantenimiento Básico',

        nivel: 'Básico',

        descripcion:
            'Aprende la arquitectura básica del motor de 100cc, inspección de niveles, tensión de cadena y puntos de engrase.',

        temas: [
            'Evolución de modelos Bajaj CT 100 (KS, ES, Spoke, Alloy, CT 100X)',
            'Procedimiento correcto de cambio de aceite y limpieza del tamiz',
            'Mantenimiento de la cadena dentro del guarda-cadena completo',
            'Ajuste de cables de acelerador, embrague y frenos'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del Motor y Calibración de Válvulas',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a buscar el Punto Muerto Superior (PMS) en la volante y calibrar con precisión las válvulas de admisión y escape.',

        temas: [
            'Ubicación de marcas T en la volante magnética y piñón de levas',
            'Uso del calibrador de galgas en la culata SOHC',
            'Solución de problemas de compresión y ruidos de motor',
            'Inspección del tensor automático de distribución'
        ]
    },

    {
        id: 3,

        titulo: 'Mantenimiento del Carburador Keihin PB18 / e-Carb',

        nivel: 'Intermedio',

        descripcion:
            'Aprende el desmonte, despiece, lavado por ultrasonido/spray y calibración del sistema de alimentación.',

        temas: [
            'Desarme del carburador y función de boquereles de alta y baja',
            'Ajuste del nivel del flotador y punzón de sellado',
            'Regulación de la aguja de la cortina y tornillo de mezcla',
            'Diagnóstico de fallas en carburadores electrónicos e-Carb'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema Eléctrico, Encendido por CDI y Mantenimiento SNS',

        nivel: 'Avanzado',

        descripcion:
            'Uso del multímetro para diagnóstico del plato de bobinas, módulo CDI, regulador de voltaje y amortiguadores SNS.',

        temas: [
            'Medición de ohmios en bobina pulsora y bobina de encendido',
            'Comprobación del sistema de carga de batería de 12V y luces',
            'Mantenimiento de la suspensión trasera SNS (Spring in Spring)',
            'Resolución de fallas de encendido y cortocircuitos'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioCT100 = [

    {
        termino: 'CT 100',
        significado:
            'Modelo insignia de motocicleta de trabajo urbana y rural de la marca Bajaj, reconocida por su alta resistencia y bajo consumo de gasolina.'
    },

    {
        termino: 'SNS',
        significado:
            'Spring-in-Spring (Resorte dentro de Resorte). Tecnología de suspensión trasera patentada por Bajaj con dos resortes coaxiales de diferente paso.'
    },

    {
        termino: 'CDI Digital',
        significado:
            'Capacitor Discharge Ignition Digital. Módulo de encendido electrónico comandado por microprocesador que optimiza el tiempo de chispa.'
    },

    {
        termino: 'e-Carb',
        significado:
            'Carburador con control electrónico de aire y sensores utilizado en versiones Euro 3 / Euro 4 para reducir emisiones.'
    },

    {
        termino: 'JASO MA2',
        significado:
            'Norma japonesa para aceites de motor de 4 tiempos con embrague húmedo que garantiza la fricción requerida sin deslizamiento.'
    },

    {
        termino: 'Filtro Centrífugo',
        significado:
            'Trampa cilíndrica acoplada al cigüeñal que retiene por fuerza giratoria las partículas pesadas presentes en el aceite.'
    },

    {
        termino: 'KS / ES',
        significado:
            'KS (Kick Start / Arranque por pedal) / ES (Electric Start / Arranque eléctrico por botón).'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoCT100(anio, configuracion) {

    const sintomasMapeados = fallasComunesCT100.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Bajaj CT 100 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasCT100.basicas,
            ...herramientasCT100.diagnostico
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

                titulo: 'Motor Bajaj 100cc 4T y Carburación',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, CDI y Sistema de Carga',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido CDI y Batería',

                        sintomas: [

                            {
                                titulo: 'La moto no genera chispa o no enciende con el botón/pedal',

                                dificultad: 'Básico 🟢',

                                descripcion:
                                    'Revisión del fusible principal de 10A, batería de 12V, bobina pulsora y CDI.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Chispómetro / Bujía de prueba',
                                    'Juego de llaves'
                                ],

                                pasos: [
                                    '1. Comprobar que el switch de encendido y el Run del manubrio estén en ON.',
                                    '2. Medir el voltaje de la batería en reposo (mínimo 12.4V en versiones ES).',
                                    '3. Probar la resistencia de la bobina pulsora con el multímetro (~140 Ω).',
                                    '4. Verificar el cable de alta tensión y el capuchón resistivo de la bujía.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 4 Marchas y Transmisión Secundaria',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague y Guarda Cadena',

                        sintomas: [

                            {
                                titulo: 'Dificultad para engranar marchas o deslizamiento del embrague',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Regulación del cable de embrague, revisión de discos y lubricante JASO MA2.',

                                herramientas: [
                                    'Llaves fijas de 10mm y 12mm',
                                    'Herramientas manuales',
                                    'Bandeja de drenaje de aceite'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre en la palanca de embrague (2mm a 3mm).',
                                    '2. Confirmar el uso de aceite 20W-50 con especificación JASO MA2.',
                                    '3. Verificar el estado de desgaste de los discos de embrague si el motor se acelera sin avanzar.'
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
// MODELOS INDIVIDUALES POR AÑO (BAJAJ CT 100 2012 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN CT 100 CLÁSICA (2012 - 2019) ---

export const bajajCT100_2012 = {

    marca: 'Bajaj',

    modelo: 'CT 100',

    anio: 2012,

    tipo: 'Motocicleta de Trabajo / Urbana',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bajaj_CT_100.jpg/1200px-Bajaj_CT_100.jpg',

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2012 (Motor 99.27cc 4T monocilíndrico refrigerado por aire, carburador Keihin PB18, caja de 4 velocidades y frenos de tambor).',

    informacionHistorica: {

        titulo: 'Bajaj CT 100 2012',

        generacion: 'Primera generación CT 100 Clásica',

        familiaMotor: '99.27cc 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T refrigerado por aire',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Carburador Keihin PB18',

        encendido: 'CDI Digital (Arranque por pedal KS)',

        refrigeracion: 'Enfriado por aire de flujo natural',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Manual de 4 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Bajaj CT 100 2012?',

        explicacion:
            'Un motor monocilíndrico ultra eficiente diseñado con tolerancias reducidas para ofrecer una economía de combustible sobresaliente con costos de mantenimiento mínimos.',

        formulaSimple:
            'Aire + gasolina por carburador + compresión + chispa CDI = movimiento eficiente de 4 marchas',

        flujoEnergia: [
            'Tanque de combustible (10.5 Litros)',
            'Llave de reserva',
            'Carburador Keihin PB18',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague en baño de aceite',
            'Caja de 4 velocidades',
            'Piñón de salida',
            'Cadena dentro de guarda-cadena',
            'Rueda trasera'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposCT100,

    componentesMotor: sistemasMotorCT100,

    sistemaCombustible: sistemaCombustibleCT100,

    sistemaEncendido: sistemaEncendidoCT100,

    refrigeracion: {

        tipo: 'Refrigeración por aire convectivo',

        elementos: [
            'Aletas de disipación en cilindro de aluminio',
            'Aletas en culata SOHC',
            'Flujo de aire por marcha'
        ],

        funcionamiento:
            'El aire del ambiente disipa la temperatura que se genera en el cilindro a través de las aletas de radiación.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide en baño de aceite',

        componentes: [
            'Cárter de aleación de aluminio',
            'Bomba de aceite trocoide',
            'Malla de succión de aceite',
            'Filtro centrífugo en el cigüeñal'
        ],

        funcionamiento:
            'Impulsa aceite 20W-50 JASO MA2 hacia los componentes de la culata, caja de cambios y embrague.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol SOHC',

        tipo: 'Cadena silenciosa con tensor automático',

        funcion:
            'Mantiene la sincronización de las válvulas de admisión y escape respecto al cigüeñal.',

        advertencia:
            'Verifique que las luces de calibración de válvulas sean de 0.05mm (Adm) y 0.10mm (Esc).'
    },

    diagnosticoGeneral: diagnosticoGeneralCT100,

    fallasComunes: fallasComunesCT100,

    herramientas: herramientasCT100,

    mantenimiento: mantenimientoCT100,

    cursos: cursosCT100,

    seguridad: seguridadCT100,

    glosario: glosarioCT100,

    reglaPrincipal:
        'CHISPA → COMBUSTIBLE → COMPRESIÓN → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2012,
            {
                tecnologia: '1ª Gen - Carburador Keihin PB18 / CDI / KS',

                motorPrincipal: '99.27cc 4T Monocilíndrico (8.2 HP / 8.05 Nm)'
            }
        );
    }
};


export const bajajCT100_2013 = {

    ...bajajCT100_2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2013. Mantenimiento preventivo, carburación y regulación de frenos de tambor.',

    informacionHistorica: {

        ...bajajCT100_2012.informacionHistorica,

        titulo: 'Bajaj CT 100 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2013,
            {
                tecnologia: '1ª Gen - Carburador Keihin PB18 / CDI',

                motorPrincipal: '99.27cc 4T Monocilíndrico'
            }
        );
    }
};


export const bajajCT100_2014 = {

    ...bajajCT100_2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2014. Mantenimiento del kit de arrastre y calibración de motor.',

    informacionHistorica: {

        ...bajajCT100_2013.informacionHistorica,

        titulo: 'Bajaj CT 100 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2014,
            {
                tecnologia: '1ª Gen - Carburador Keihin PB18 / CDI',

                motorPrincipal: '99.27cc 4T Monocilíndrico'
            }
        );
    }
};


export const bajajCT100_2015 = {

    ...bajajCT100_2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2015. Guías de diagnóstico eléctrico y mantenimiento de embrague.',

    informacionHistorica: {

        ...bajajCT100_2014.informacionHistorica,

        titulo: 'Bajaj CT 100 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2015,
            {
                tecnologia: '1ª Gen - Carburador Keihin / CDI',

                motorPrincipal: '99.27cc 4T Monocilíndrico'
            }
        );
    }
};


export const bajajCT100_2016 = {

    ...bajajCT100_2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2016. Mantenimiento general e inspección de la suspensión SNS.',

    informacionHistorica: {

        ...bajajCT100_2015.informacionHistorica,

        titulo: 'Bajaj CT 100 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2016,
            {
                tecnologia: '1ª Gen - Carburador / CDI / Suspensión SNS',

                motorPrincipal: '99.27cc 4T Monocilíndrico'
            }
        );
    }
};


export const bajajCT100_2017 = {

    ...bajajCT100_2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2017. Guías de servicio técnico y ajuste de luces.',

    informacionHistorica: {

        ...bajajCT100_2016.informacionHistorica,

        titulo: 'Bajaj CT 100 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2017,
            {
                tecnologia: '1ª Gen - Carburador / CDI / SNS',

                motorPrincipal: '99.27cc 4T Monocilíndrico'
            }
        );
    }
};


export const bajajCT100_2018 = {

    ...bajajCT100_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2018. Mantenimiento del carburador e inyectores de aire según versión.',

    informacionHistorica: {

        ...bajajCT100_2017.informacionHistorica,

        titulo: 'Bajaj CT 100 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2018,
            {
                tecnologia: '1ª Gen - Carburador / CDI',

                motorPrincipal: '99.27cc 4T Monocilíndrico'
            }
        );
    }
};


export const bajajCT100_2019 = {

    ...bajajCT100_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2019. Cierre de la versión clásica e introducción de mejoras en rines de aleación.',

    informacionHistorica: {

        ...bajajCT100_2018.informacionHistorica,

        titulo: 'Bajaj CT 100 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2019,
            {
                tecnologia: '1ª Gen - Carburador / CDI / Alloy Wheels',

                motorPrincipal: '99.27cc 4T Monocilíndrico'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN CT 100 ES / CT 100X / EURO 3 - EURO 4 (2020 - 2026) ---

export const bajajCT100_2020 = {

    ...bajajCT100_2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bajaj_CT_100.jpg/1200px-Bajaj_CT_100.jpg',

    descripcion:
        'Plataforma educativa para Bajaj CT 100 ES / KS 2020 (Lanzamiento con arranque eléctrico ES, motor optimizado de 102cc, suspensión SNS doble resorte y carburador electrónico e-Carb).',

    informacionHistorica: {

        titulo: 'Bajaj CT 100 ES 2020',

        generacion: 'Segunda generación CT 100 ES / Alloy',

        familiaMotor: '102cc 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T SOHC de alta eficiencia',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Carburador Electrónico e-Carb',

        encendido: 'CDI Digital con arranque eléctrico ES y pedal KS',

        refrigeracion: 'Aire por convección natural',

        distribucion: 'Cadena de distribución silenciosa',

        transmision: 'Manual de 4 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2020,
            {
                tecnologia: '2ª Gen - e-Carb / Electric Start ES / Suspensión SNS',

                motorPrincipal: '102cc Monocilíndrico 4T (7.9 HP / 8.34 Nm)'
            }
        );
    }
};


export const bajajCT100_2021 = {

    ...bajajCT100_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2021. Diagnóstico del sistema de arranque eléctrico y carburador electrónico.',

    informacionHistorica: {

        ...bajajCT100_2020.informacionHistorica,

        titulo: 'Bajaj CT 100 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2021,
            {
                tecnologia: '2ª Gen - e-Carb / Electric Start / SNS',

                motorPrincipal: '102cc Monocilíndrico 4T'
            }
        );
    }
};


export const bajajCT100_2022 = {

    ...bajajCT100_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Bajaj CT 100X 2022 (Lanzamiento de la versión crossover CT 100X con fuelle de horquilla, protector de faro y parrilla de carga pesada).',

    informacionHistorica: {

        ...bajajCT100_2021.informacionHistorica,

        titulo: 'Bajaj CT 100X 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2022,
            {
                tecnologia: '2ª Gen CT 100X - Crossover Heavy Duty / e-Carb',

                motorPrincipal: '102cc Monocilíndrico 4T'
            }
        );
    }
};


export const bajajCT100_2023 = {

    ...bajajCT100_2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2023. Mantenimiento preventivo, carburación y suspensiones SNS.',

    informacionHistorica: {

        ...bajajCT100_2022.informacionHistorica,

        titulo: 'Bajaj CT 100 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2023,
            {
                tecnologia: '2ª Gen - e-Carb / Electric Start / SNS',

                motorPrincipal: '102cc Monocilíndrico 4T'
            }
        );
    }
};


export const bajajCT100_2024 = {

    ...bajajCT100_2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bajaj_CT_100.jpg/1200px-Bajaj_CT_100.jpg',

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2024 (Ediciones CT 100 KS, CT 100 ES y CT 100X Crossover).',

    informacionHistorica: {

        ...bajajCT100_2023.informacionHistorica,

        titulo: 'Bajaj CT 100 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2024,
            {
                tecnologia: '2ª Gen - e-Carb / 7.9 HP / Suspensión SNS',

                motorPrincipal: '102cc Monocilíndrico 4T (7.9 HP)'
            }
        );
    }
};


export const bajajCT100_2025 = {

    ...bajajCT100_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2025. Diagnóstico de motor de 100cc, sistema de encendido y frenos.',

    informacionHistorica: {

        ...bajajCT100_2024.informacionHistorica,

        titulo: 'Bajaj CT 100 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2025,
            {
                tecnologia: '2ª Gen - e-Carb / Electric Start / SNS',

                motorPrincipal: '102cc Monocilíndrico 4T'
            }
        );
    }
};


export const bajajCT100_2026 = {

    ...bajajCT100_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Bajaj CT 100 2026. Diagnóstico integral de motor SOHC de 100cc, carburación electrónica e-Carb, suspensión SNS y caja de 4 velocidades.',

    informacionHistorica: {

        ...bajajCT100_2025.informacionHistorica,

        titulo: 'Bajaj CT 100 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCT100(
            2026,
            {
                tecnologia: '2ª Gen - e-Carb / Suspensión SNS / Electric Start',

                motorPrincipal: '102cc Monocilíndrico 4T (7.9 HP / 8.34 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE BAJAJ CT 100
// ============================================================

export const bajajCT100 = {

    marca: 'Bajaj',

    modelo: 'CT 100',

    tipo: 'Motocicleta de Trabajo / Urbana',

    imagen:
        'https://fotos.perfil.com/2026/02/02/bajaj-lanza-en-argentina-la-nueva-boxer-ct100-eficiencia-y-autonomia-record-2179443.jpg',

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

        2012: bajajCT100_2012,

        2013: bajajCT100_2013,

        2014: bajajCT100_2014,

        2015: bajajCT100_2015,

        2016: bajajCT100_2016,

        2017: bajajCT100_2017,

        2018: bajajCT100_2018,

        2019: bajajCT100_2019,

        2020: bajajCT100_2020,

        2021: bajajCT100_2021,

        2022: bajajCT100_2022,

        2023: bajajCT100_2023,

        2024: bajajCT100_2024,

        2025: bajajCT100_2025,

        2026: bajajCT100_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
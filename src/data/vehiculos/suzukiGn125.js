const sistemasMotorGN125 = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie F401 124cc Monocilíndrico 4T)',
        funcion:
            'Estructura de aleación de aluminio con camisa de hierro fundido de alta resistencia refrigerada por aire convectivo que aloja el pistón, cigüeñal, eje balancín de equilibrio y mecanismo de distribución SOHC.',
        fallas: [
            'Fugas de aceite por el sello de la pata de cambios o retén del piñón de salida',
            'Fuga de aceite por el empaque de la tapa de culata o visor de nivel de aceite',
            'Desgaste en la camisa por trabajar con nivel bajo de aceite (requiere 1000ml a 1100ml 10W-40 / 20W-50 JASO MA2)',
            'Humo azul por el escape por desgaste de anillos o sellos de válvula'
        ]
    },

    {
        nombre: 'Culata SOHC 2V con Balancines de Rodillo/Punta',
        funcion:
            'Aloja las 2 válvulas impulsadas por el árbol de levas superior (SOHC), bujía de encendido y conductos de lubricación presurizada.',
        fallas: [
            'Sonido de "cascabeleo" o traqueteo en frío por luz de válvulas fuera de especificación (Admisión: 0.04-0.07mm / Escape: 0.13-0.18mm)',
            'Dificultad de encendido en frío o apagado repentino por válvulas apretadas/pisadas',
            'Fuga de compresión por empaque de culata quemado o fisurado',
            'Desgaste de levas por usar aceite fuera de especificación o intervalos extendidos'
        ]
    },

    {
        nombre: 'Cigüeñal con Eje Balancín Contrarrotante (Anti-vibración)',
        funcion:
            'Transforma el movimiento alternativo del pistón en rotación hacia la caja de 5 velocidades e integra un eje de balance para contrarrestar las vibraciones del motor monocilíndrico.',
        fallas: [
            'Golpeteo seco o vibración excesiva en el motor por desgaste en los rodamientos del eje de balance o biela',
            'Fuga de aceite por el retén izquierdo del cigüeñal (lado volante magnético)',
            'Desgaste de la canastilla de la biela por falta de lubricación'
        ]
    },

    {
        nombre: 'Pistón y Anillos de Baja Fricción',
        funcion:
            'Comprimen la mezcla aire/gasolina dentro de la cámara y transmiten la fuerza de la combustión a la biela.',
        fallas: [
            'Anillos rascadores de aceite pegados por acumulación de barniz y carbonilla',
            'Pérdida de compresión (dificultad para encender con el motor de arranque eléctrico)',
            'Rayado de la falda del pistón por no reemplazar el filtro de aire de espuma'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Automático de Cuña/Muelle',
        funcion:
            'Mantiene la sincronización constante entre el piñón del cigüeñal y el piñón del árbol de levas en la culata.',
        fallas: [
            'Sonajero metálico en la zona izquierda del cilindro en frío',
            'Falla o trabamiento del tensor automático de cadena de distribución',
            'Desgaste de los patines guía de goma dentro del túnel de distribución'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración por Aire Convectivo',
        funcion:
            'Disipa el calor generado mediante el paso del aire ambiental entre las aletas de aluminio del cilindro y la culata.',
        fallas: [
            'Pérdida de potencia por sobrecalentamiento en trancones sostenidos',
            'Aletas de refrigeración cubiertas de barro o grasa que reducen la transferencia de calor'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba Trocoide y Filtro de Papel de Elemento Reemplazable',
        funcion:
            'Circula aceite a presión pasando por un filtro de papel lavable/reemplazable en la tapa derecha hacia el cigüeñal y la culata.',
        fallas: [
            'Falta de lubricación en la culata si se instala el filtro de aceite al revés (obstruye el conducto de subida)',
            'Malla/tamiz del cárter tapada con residuos de empaque',
            'Deslizamiento del embrague por usar aceite de carro con aditivos antifricción'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleGN125 = {

    titulo: 'Sistema de Alimentación por Carburador Mikuni BS26 de Vacío constante (CV)',

    funcionamiento:
        'El combustible baje por gravedad o depresión desde el tanque de 10.3L. El carburador Mikuni BS26 opera con diafragma de vacío: la cortina sube progresivamente según la demanda de aire, ofreciendo una aceleración suave e impecable.',

    componentes: [
        'Tanque de combustible de 10.3 Litros con grifo/llave de vacío (ON/RES/PRI)',
        'Filtro de gasolina de malla en el grifo y filtro en línea',
        'Carburador Mikuni BS26 de cortina por diafragma de vacío',
        'Diafragma/Membrana de caucho superior del carburador',
        'Boquerel (chicler) de baja / piloto (37.5) y boquerel principal de alta (102.5 / 110)',
        'Tobera/Múltiple de admisión de caucho reforzado con abrazadera',
        'Filtro de aire de elemento de espuma lavable impregnado en aceite',
        'Sistema de ahogador (choke) manual en el carburador'
    ],

    flujo: [
        '1. La gasolina fluye desde la llave de paso por la depresión del motor (posición ON/RES) o por gravedad (PRI).',
        '2. La aguja y el flotador mantienen el nivel de gasolina en la cuba del carburador.',
        '3. Al acelerar, la mariposa abre el paso de aire y la diferencia de presión eleva el diafragma con la cortina.',
        '4. El difusor pulveriza la gasolina atomizada hacia la masa de aire de admisión.',
        '5. La mezcla entra a la cámara por la válvula de admisión de la culata SOHC.'
    ],

    diagnostico: [
        'Inspeccionar si el diafragma de caucho del carburador tiene grietas o fisuras (causa falta de fuerza al acelerar).',
        'Verificar el estado del empaque de goma de la tobera de admisión para descartar entradas de aire falso.',
        'Limpiar el boquerel de baja si la moto se apaga al soltar el acelerador.',
        'Ajustar el tornillo de mezcla (1.5 a 2.25 vueltas desde la posición totalmente cerrada).'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoGN125 = {

    titulo: 'Sistema de Encendido por Descarga de Condensador Transistorizado (CDI Digital)',

    funcionamiento:
        'El rotor en el volante magnético envía una señal a la bobina pulsora. El módulo CDI procesa el tiempo y envía una descarga de alto voltaje a la bobina de alta tensión para generar la chispa en la bujía.',

    componentes: [
        {
            nombre: 'Estator de Carga (Stator) y Bobina Pulsora (CKP)',
            funcion:
                'Genera la corriente alterna de carga y la pulso-señal de tiempo de encendido.'
        },

        {
            nombre: 'Módulo de Encendido CDI Digital Suzuki',
            funcion:
                'Calcula y ajusta la curva del avance de chispa de acuerdo con las revoluciones del motor.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón con Resistencia',
            funcion:
                'Transforma la señal de bajo voltaje a más de 18.000V.'
        },

        {
            nombre: 'Bujía de Encendido (NGK D8EA / DR8EA / NGK CR8E)',
            funcion:
                'Crea el arco eléctrico para inflamar la mezcla dentro del cilindro.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el estado del fusible principal de 15A en la caja de fusibles al lado de la batería.',
        'Comprobar la carga de la batería de 12V (mínimo 12.4V; el sistema TCI/CDI de la GN requiere buen voltaje).',
        'Verificar la continuidad del interruptor de corte de motor (Run/Off) en el manubrio derecho.',
        'Medir la resistencia de la bobina pulsora (debe marcar entre 100 Ω y 180 Ω).',
        'Medir continuidad en el interruptor del embrague y pata lateral (microswitch de seguridad).'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposGN125 = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. La válvula de admisión se abre y el carburador Mikuni BS26 entrega la mezcla atomizada de aire/gasolina.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Ingresar la mayor masa de mezcla de combustible al interior del cilindro.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende del PMI al PMS con ambas válvulas cerradas, comprimiendo la mezcla (relación de compresión 9.5:1).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y temperatura antes de la descarga de chispa.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía genera la chispa, inflamando la mezcla. La expansión de gases empuja el pistón hacia abajo impulsando el cigüeñal y el eje balancín.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Producir la potencia de 12.5 HP suave y sin vibraciones molestas.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende impulsando los gases quemados hacia la válvula de escape abierta rumbo al tubo silenciador cromado.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Evacuar completamente los residuos de combustión.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasGN125 = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 21mm)',
        'Llave de bujía delgada de 18mm / 16mm',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas (0.04mm a 0.20mm) para reglaje de válvulas',
        'Alicate de presión y alicate universal de punta',
        'Bandeja de recolección de aceite (1.5 litros) y embudo'
    ],

    diagnostico: [
        'Multímetro digital de alta precisión para medir voltajes AC/DC, ohms y continuidad',
        'Probador de chispa en línea / Chispómetro',
        'Compresímetro con acople de rosca M12 / M14',
        'Cargador / Mantenedor de batería de 12V de motocicleta'
    ],

    profesional: [
        'Torquímetro de precisión graduado de 1/4 y 3/8 de pulgada (8 Nm a 50 Nm)',
        'Extractor de volante magnético específico Suzuki GN/EN 125',
        'Herramienta sujetadora de piñón de distribución y embrague',
        'Prensa manual para desarmar muelles de válvulas'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralGN125 = {

    principio:
        'Diagnóstico metódico de 3 pilares: Verificar presencia de chispa de encendido en bujía, flujo continuo de gasolina en el Mikuni BS26 y compresión en el cilindro F401.',

    secuencia: [

        '1. Consultar al motociclista las condiciones bajo las cuales comenzó el problema.',

        '2. Comprobar la carga de la batería de 12V (mínimo 12.4V en reposo para accionar el arranque eléctrico).',

        '3. Retirar la bujía y hacer masa contra las aletas del cilindro para verificar el salto de chispa azul y constante.',

        '4. Inspeccionar el flujo de combustible soltando la manguera del carburador (poner llave en PRI si no baja por ON).',

        '5. Comprobar la compresión del cilindro obturando el orificio de bujía o con transmisor de compresión.',

        '6. Revisar el estado del diafragma de goma del carburador y tobera de admisión si vacila al acelerar.',

        '7. Verificar la luz de válvulas en frío (Admisión: 0.04-0.07mm / Escape: 0.13-0.18mm).',

        '8. Sustituir repuestos dañados por piezas originales Suzuki Genuine Parts.',

        '9. Regular el ralentí a 1.400 RPM y ajustar la mezcla de aire/gasolina.',

        '10. Efectuar prueba de ruta para confirmar el suave rodar de la motocicleta.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesGN125 = [

    {
        titulo: 'La moto no acelera progresivamente, se "ahoga" al abrir gas a fondo o pierde fuerza en pendientes',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Diafragma/membrana de goma del carburador Mikuni rotos, agrietados o mal asentados',
            'Tobera de caucho de admisión agrietada por resequedad que genera entrada de aire falso',
            'Filtro de aire de espuma lleno de tierra o sumergido en aceite en exceso',
            'Boquerel de alta / difusor atascado con sedimentos'
        ],

        diagnostico: [
            'Desmontar la tapa superior del carburador y revisar el diafragma tragaluz contra la luz.',
            'Aplicar limpiador de carburador sobre la tobera de admisión en marcha; si suben las RPM hay fuga.',
            'Lavar el filtro de espuma de aire con desengrasante y secar completamente.',
            'Sopletear los conductos internos del carburador Mikuni.'
        ]
    },

    {
        titulo: 'Dificultad de encendido en frío, el motor se apaga en ralentí o cascabelea',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Válvula de admisión pisada/apretada sin holgura de holgura',
            'Chicler/boquerel de baja (piloto) parcialmente tapado',
            'Bujía de encendido descalibrada (luz recomendada: 0.7mm - 0.8mm) o sulfatada',
            'Nivel de combustible en la cuba del carburador muy bajo'
        ],

        diagnostico: [
            'Calibrar válvulas en frío (Admisión: 0.05mm / Escape: 0.15mm).',
            'Limpiar el boquerel de baja con un alambre fino de cobre y aerosol limpiador.',
            'Sustituir la bujía NGK D8EA / DR8EA.',
            'Verificar la altura del flotador de la cuba.'
        ]
    },

    {
        titulo: 'El arranque eléctrico no responde (Suena solo un "clic" o no hace nada)',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Batería de 12V descargada o con celdas degradadas',
            'Escobillas/carbones del motor de arranque gastados',
            'Contactos del relé/marrana de arranque sulfatados o sueltos',
            'Falla en el microswitch de la manigueta de embrague o botón de encendido'
        ],

        diagnostico: [
            'Medir voltaje de batería en el momento de presionar el botón (no debe caer de 10.5V).',
            'Puentear momentáneamente los dos bornes del relé de arranque con un destornillador aislado.',
            'Revisar continuidad en el switch de la manigueta de embrague.',
            'Desmontar y reemplazar el kit de escobillas del motor de arranque.'
        ]
    },

    {
        titulo: 'Bote continuo de gasolina por la manguera de desahogo del carburador',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Punzón de cierre del flotador gastado o con basuras en la cuna de sellado',
            'Llave de gasolina en posición PRI (Pri-Directo) con el motor apagado y punzón defectuoso',
            'Flotador de la cuba atascado en el pasador'
        ],

        diagnostico: [
            'Retirar la cuba del carburador y limpiar la aguja y la cuna con limpiador de contactos.',
            'Asegurar que la llave de paso de combustible se mantenga en posición ON o RES.',
            'Verificar que el flotador platico no tenga grietas ni gasolina en su interior.'
        ]
    },

    {
        titulo: 'Ruido de sonajero continuo en el motor (Zona izquierda)',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Cadena de distribución destensionada o con patines desgastados',
            'Tensor automático de cadena atascado por falta de lubricación',
            'Holgura excesiva en los balancines de la culata'
        ],

        diagnostico: [
            'Inspeccionar el estado del tensor automático de cuña montado en el reverso del cilindro.',
            'Verificar el estiramiento de la cadena de distribución desmontando la tapa de culata.',
            'Calibrar holgura de balancines según las tolerancias de fábrica.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoGN125 = {

    objetivo:
        'Asegurar la legendaria durabilidad del motor Suzuki F401, mantener la suavidad de marcha libre de vibraciones, proteger el embrague húmedo y garantizar un viaje confortable.',

    actividades: [

        {
            nombre: 'Aceite de motor y Filtro de aceite',
            accion:
                'Reemplazar el aceite cada 2.500 km a 3.000 km utilizando 1000ml (1100ml con filtro) de lubricante 10W-40 / 20W-50 JASO MA2. Sustituir el filtro de papel de aceite en cada cambio (asegurar posición correcta del o-ring y del resorte).'
        },

        {
            nombre: 'Calibración de Válvulas SOHC',
            accion:
                'Inspeccionar y calibrar en frío cada 6.000 km. Especificación: Admisión (0.04mm - 0.07mm) / Escape (0.13mm - 0.18mm).'
        },

        {
            nombre: 'Limpieza de Carburador y Filtro de Aire',
            accion:
                'Lavar e impregnar levemente con aceite el filtro de aire de espuma cada 3.000 km. Limpiar carburador Mikuni BS26 y diafragma cada 6.000 km.'
        },

        {
            nombre: 'Kit de Arrastre (Cadena, Piñón y Catalina)',
            accion:
                'Limpiar, tensionar y lubricar la cadena de transmisión 428 cada 500 km. Reemplazar el kit de arrastre completo entre 15.000 km y 20.000 km.'
        },

        {
            nombre: 'Sistema de Frenos (Disco delantero y Tambor trasero)',
            accion:
                'Inspeccionar grosor de pastillas de freno delanteras y bandas traseras cada 3.000 km; renovar el líquido de frenos DOT 4 en el depósito del manubrio cada 12 meses.'
        },

        {
            nombre: 'Bujía de Encendido',
            accion:
                'Limpiar carbón y ajustar la holgura del electrodo (0.7mm - 0.8mm) cada 3.000 km; sustituir bujía NGK D8EA / DR8EA cada 10.000 km.'
        },

        {
            nombre: 'Engrase de Guayas y Rodamientos de Dirección',
            accion:
                'Lubricar las guayas de acelerador, embrague y freno delantero cada 3.000 km; engrasar cunas de dirección cada 12.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadGN125 = [

    'NUNCA instale el filtro de aceite de papel en posición invertida; el orificio del filtro debe mirar hacia el interior del cárter para no tapar el conducto de lubricación de la culata.',

    'Sostenga firmemente la motocicleta sobre el soporte central (gato central) en terreno plano antes de retirar las ruedas o intervenir la caja de cambios.',

    'Manipule con extrema delicadeza la membrana/diafragma de goma del carburador Mikuni BS26 para evitar perforaciones con herramientas punzantes.',

    'Desconecte el borne negativo de la batería de 12V antes de manipular el arranque eléctrico, fusileras o regulador de voltaje.',

    'Respete el torque recomendado en los pernos de la tapa de filtro de aceite (10 Nm) y en el tapón de drenaje del cárter (18 Nm) para evitar fisurar la tapa de aluminio.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosGN125 = [

    {
        id: 1,

        titulo: 'Introducción a la Suzuki GN 125 y Mantenimiento Básico',

        nivel: 'Básico',

        descripcion:
            'Conoce la arquitectura del motor Suzuki F401, cambio de aceite, sustitución del filtro de papel, tensión de cadena y ajuste de mandos.',

        temas: [
            'Identificación de versiones Suzuki GN 125H, GN 125F y variaciones por año',
            'Procedimiento correcto de cambio de aceite y posición crítica del filtro de papel',
            'Mantenimiento de la cadena de transmisión y ajuste del freno de tambor',
            'Engrase de guayas de control e inspección de fusibles'
        ]
    },

    {
        id: 2,

        titulo: 'Calibración de Válvulas y Puesta a Punto del Motor F401',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a ubicar el Punto Muerto Superior (PMS) en la volante y calibrar con precisión las válvulas de admisión y escape en frío.',

        temas: [
            'Marcas de tiempo T en la volante magnética y piñón de levas',
            'Uso del calibrador de galgas en la culata SOHC',
            'Inspección del tensor automático de distribución de cuña',
            'Diagnóstico y solución del cascabeleo o pérdida de compresión'
        ]
    },

    {
        id: 3,

        titulo: 'Mantenimiento y Diagnóstico del Carburador Mikuni BS26',

        nivel: 'Intermedio',

        descripcion:
            'Aprende el desarme, lavado, inspección del diafragma de vacío, ajuste de flotador y carburación de precisión.',

        temas: [
            'Principios de funcionamiento del carburador de vacío constante (CV)',
            'Inspección y cambio del diafragma de goma y aguja de la cortina',
            'Calibración del nivel de gasolina en la cuba y boquereles',
            'Regulación del tornillo de aire/mezcla y ralentí estabilizado'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema Eléctrico, Motor de Arranque y Encendido TCI/CDI',

        nivel: 'Avanzado',

        descripcion:
            'Uso del multímetro para diagnóstico del estator, regulador/rectificador, reemplazo de escobillas de arranque y circuito de seguridad.',

        temas: [
            'Pruebas de resistencia y voltaje alterno en el estator de carga',
            'Diagnóstico del relé y mantenimiento del motor de arranque eléctrico',
            'Comprobación del sistema de encendido por CDI y microswitches',
            'Diagrama eléctrico Suzuki GN 125 y corrección de cortocircuitos'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioGN125 = [

    {
        termino: 'GN 125',
        significado:
            'Icónico modelo de motocicleta de estilo Custom/Cruiser de baja cilindrada de Suzuki, famosa por su motor indestructible de 125cc, comodidad y bajo costo operativo.'
    },

    {
        termino: 'BS26',
        significado:
            'Referencia de carburador de vacío constante (CV) fabricado por Mikuni de 26mm de venturi equipado con membrana de goma.'
    },

    {
        termino: 'Eje Balancín',
        significado:
            'Eje contrarrotante situado frente al cigüeñal que gira en sentido opuesto para neutralizar las vibraciones mecánicas del pistón.'
    },

    {
        termino: 'SOHC',
        significado:
            'Single Overhead Camshaft (Árbol de levas único en la culata) que acciona directamente las válvulas mediante balancines.'
    },

    {
        termino: 'JASO MA2',
        significado:
            'Certificación japonesa de fricción para lubricantes de 4 tiempos que previene el deslizamiento del embrague sumergido.'
    },

    {
        termino: 'PRI',
        significado:
            'Posición "Prime" en la llave de combustible de vacío Suzuki que permite el paso directo de gasolina por gravedad sin requerir succión del motor.'
    },

    {
        termino: 'F401',
        significado:
            'Código de serie de la familia de motores monocilíndricos 124cc 4T de Suzuki caracterizados por su filtro de aceite externo de papel.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoGN125(anio, configuracion) {

    const sintomasMapeados = fallasComunesGN125.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Suzuki GN 125 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasGN125.basicas,
            ...herramientasGN125.diagnostico
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

                titulo: 'Motor Suzuki F401 y Carburación Mikuni',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, Arranque y Encendido',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido CDI y Batería',

                        sintomas: [

                            {
                                titulo: 'El motor de arranque no gira o la moto no genera chispa en la bujía',

                                dificultad: 'Básico 🟢',

                                descripcion:
                                    'Revisión del fusible principal de 15A, voltaje de batería, relé de arranque y bobina pulsora.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Chispómetro / Bujía de prueba',
                                    'Juego de llaves'
                                ],

                                pasos: [
                                    '1. Verificar que el interruptor de apagado de emergencia (Run) esté en ON.',
                                    '2. Medir la tensión de la batería de 12V en reposo (mínimo 12.4V para accionar el arranque).',
                                    '3. Verificar la continuidad del microswitch de seguridad de la manigueta de embrague.',
                                    '4. Probar la resistencia de la bobina pulsora (~120 a 160 Ω).'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de 5 Velocidades y Transmisión',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague y Cadena 428',

                        sintomas: [

                            {
                                titulo: 'Dificultad para encontrar la marcha neutro o patinamiento de embrague',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Ajuste de la guaya de embrague, inspección de discos y tipo de aceite JASO MA2.',

                                herramientas: [
                                    'Llaves fijas de 10mm y 12mm',
                                    'Herramientas manuales',
                                    'Bandeja de drenaje de aceite'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre de la manigueta de embrague (2mm a 3mm).',
                                    '2. Confirmar el uso de aceite 10W-40 / 20W-50 con norma estricta JASO MA2.',
                                    '3. Inspeccionar el desgaste de los discos de fricción si el motor se revoluciona sin ganar velocidad.'
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
// MODELOS INDIVIDUALES POR AÑO (SUZUKI GN 125 2012 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN GN 125H CLÁSICA (2012 - 2019) ---

export const suzukiGN125_2012 = {

    marca: 'Suzuki',

    modelo: 'GN 125',

    anio: 2012,

    tipo: 'Motocicleta Custom / Trabajo Urbana',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Suzuki_GN125_2008_1.jpg/1200px-Suzuki_GN125_2008_1.jpg',

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2012 (Motor F401 124cc SOHC 4T monocilíndrico con eje balancín, carburador Mikuni BS26 de diafragma, arranque eléctrico y freno de disco delantero).',

    informacionHistorica: {

        titulo: 'Suzuki GN 125H 2012',

        generacion: 'Primera generación GN 125H Clásica',

        familiaMotor: '124cc F401 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T refrigerado por aire con eje de balance',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Carburador Mikuni BS26 de Vacío constante (CV)',

        encendido: 'CDI Digital Transistorizado (Arranque eléctrico)',

        refrigeracion: 'Enfriado por aire de flujo natural',

        distribucion: 'Cadena de distribución con tensor automático de cuña',

        transmision: 'Manual de 5 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Suzuki GN 125 2012?',

        explicacion:
            'Un motor Custom monocilíndrico de baja vibración gracias a su eje balancín contrarrotante y su alimentación por diafragma Mikuni BS26 que garantiza entregas de par muy progresivas.',

        formulaSimple:
            'Aire + gasolina por diafragma Mikuni + compresión + chispa TCI + eje balancín = marcha suave de 5 velocidades',

        flujoEnergia: [
            'Tanque de combustible (10.3 Litros)',
            'Llave de paso por depresión',
            'Carburador Mikuni BS26 de diafragma',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal y Eje Balancín',
            'Embrague en baño de aceite',
            'Caja de 5 velocidades',
            'Piñón de salida',
            'Cadena 428',
            'Rueda trasera con rin de aleación'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposGN125,

    componentesMotor: sistemasMotorGN125,

    sistemaCombustible: sistemaCombustibleGN125,

    sistemaEncendido: sistemaEncendidoGN125,

    refrigeracion: {

        tipo: 'Refrigeración por aire convectivo',

        elementos: [
            'Aletas de disipación en cilindro F401',
            'Aletas en culata SOHC de aluminio',
            'Flujo de aire continuo por movimiento'
        ],

        funcionamiento:
            'El aire disipa el calor térmico pasando a través de las aletas de radiación montadas en el bloque de cilindro.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide con filtro de papel',

        componentes: [
            'Cárter de aleación de aluminio',
            'Bomba de aceite trocoide',
            'Filtro de aceite de papel reemplazable',
            'Malla de succión'
        ],

        funcionamiento:
            'Impulsa aceite 10W-40 / 20W-50 JASO MA2 a través del filtro de papel hacia la culata, cigüeñal y caja de cambios.'
    },

    distribucion: {

        titulo: 'Distribución por cadena y árbol SOHC',

        tipo: 'Cadena silenciosa con tensor automático de cuña',

        funcion:
            'Sincroniza la apertura de las válvulas de la culata respecto al cigüeñal.',

        advertencia:
            'Calibre las válvulas en frío con galgas a 0.05mm (Admición) y 0.15mm (Escape).'
    },

    diagnosticoGeneral: diagnosticoGeneralGN125,

    fallasComunes: fallasComunesGN125,

    herramientas: herramientasGN125,

    mantenimiento: mantenimientoGN125,

    cursos: cursosGN125,

    seguridad: seguridadGN125,

    glosario: glosarioGN125,

    reglaPrincipal:
        'CHISPA → DIAFRAGMA/COMBUSTIBLE → COMPRESIÓN → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2012,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín / 5 Velocidades',

                motorPrincipal: '124cc F401 Monocilíndrico 4T (12.5 HP / 9.6 Nm)'
            }
        );
    }
};


export const suzukiGN125_2013 = {

    ...suzukiGN125_2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2013. Mantenimiento del filtro de papel, carburación y ajuste de frenos.',

    informacionHistorica: {

        ...suzukiGN125_2012.informacionHistorica,

        titulo: 'Suzuki GN 125 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2013,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín / CDI',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2014 = {

    ...suzukiGN125_2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2014. Diagnóstico de encendido por CDI, motor de arranque y embrague.',

    informacionHistorica: {

        ...suzukiGN125_2013.informacionHistorica,

        titulo: 'Suzuki GN 125 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2014,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín / CDI',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2015 = {

    ...suzukiGN125_2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2015. Guías de servicio técnico, válvulas y mantenimiento general.',

    informacionHistorica: {

        ...suzukiGN125_2014.informacionHistorica,

        titulo: 'Suzuki GN 125 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2015,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2016 = {

    ...suzukiGN125_2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2016. Mantenimiento del kit de arrastre 428 y calibración de motor.',

    informacionHistorica: {

        ...suzukiGN125_2015.informacionHistorica,

        titulo: 'Suzuki GN 125 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2016,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2017 = {

    ...suzukiGN125_2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2017. Guías de servicio para diafragma de carburador y sistema eléctrico.',

    informacionHistorica: {

        ...suzukiGN125_2016.informacionHistorica,

        titulo: 'Suzuki GN 125 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2017,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2018 = {

    ...suzukiGN125_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2018. Mantenimiento preventivo de frenos de disco e instalación eléctrica.',

    informacionHistorica: {

        ...suzukiGN125_2017.informacionHistorica,

        titulo: 'Suzuki GN 125 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2018,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2019 = {

    ...suzukiGN125_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2019. Cierre de la versión H tradicional.',

    informacionHistorica: {

        ...suzukiGN125_2018.informacionHistorica,

        titulo: 'Suzuki GN 125 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2019,
            {
                tecnologia: '1ª Gen - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN GN 125F / EURO 3 / EURO 4 (2020 - 2026) ---

export const suzukiGN125_2020 = {

    ...suzukiGN125_2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Suzuki_GN125_2008_1.jpg/1200px-Suzuki_GN125_2008_1.jpg',

    descripcion:
        'Plataforma educativa para Suzuki GN 125F 2020 (Versión mejorada / Carburador asistido, sistema de recarga optimizado, luces LED opcionales y homologación de emisiones).',

    informacionHistorica: {

        titulo: 'Suzuki GN 125F 2020',

        generacion: 'Segunda generación GN 125F / Euro 3',

        familiaMotor: '124cc F401 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T SOHC con eje de balance vibracional',

        arquitectura: 'SOHC 2 Válvulas',

        alimentacion: 'Carburador Mikuni BS26 / Diafragma asistido',

        encendido: 'CDI Digital Transistorizado',

        refrigeracion: 'Aire por convección natural',

        distribucion: 'Cadena de distribución silenciosa de bajo desgaste',

        transmision: 'Manual de 5 velocidades con embrague multidisco'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2020,
            {
                tecnologia: '2ª Gen GN 125F - Mikuni BS26 / Eje Balancín / Euro 3',

                motorPrincipal: '124cc F401 Monocilíndrico 4T (12.5 HP / 9.6 Nm)'
            }
        );
    }
};


export const suzukiGN125_2021 = {

    ...suzukiGN125_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2021. Diagnóstico del sistema de carga, batería de 12V y carburación.',

    informacionHistorica: {

        ...suzukiGN125_2020.informacionHistorica,

        titulo: 'Suzuki GN 125 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2021,
            {
                tecnologia: '2ª Gen GN 125F - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2022 = {

    ...suzukiGN125_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2022. Mantenimiento del freno de disco delantero, diafragma y suspensión.',

    informacionHistorica: {

        ...suzukiGN125_2021.informacionHistorica,

        titulo: 'Suzuki GN 125 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2022,
            {
                tecnologia: '2ª Gen GN 125F - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2023 = {

    ...suzukiGN125_2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2023. Guías de servicio técnico para flotas y trabajo diario.',

    informacionHistorica: {

        ...suzukiGN125_2022.informacionHistorica,

        titulo: 'Suzuki GN 125 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2023,
            {
                tecnologia: '2ª Gen GN 125F - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2024 = {

    ...suzukiGN125_2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Suzuki_GN125_2008_1.jpg/1200px-Suzuki_GN125_2008_1.jpg',

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2024 (Ediciones GN 125H y GN 125F).',

    informacionHistorica: {

        ...suzukiGN125_2023.informacionHistorica,

        titulo: 'Suzuki GN 125 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2024,
            {
                tecnologia: '2ª Gen GN 125F - Mikuni BS26 / 12.5 HP / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T (12.5 HP)'
            }
        );
    }
};


export const suzukiGN125_2025 = {

    ...suzukiGN125_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2025. Guías de mantenimiento preventivo, cambio de filtro de papel y válvulas.',

    informacionHistorica: {

        ...suzukiGN125_2024.informacionHistorica,

        titulo: 'Suzuki GN 125 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2025,
            {
                tecnologia: '2ª Gen GN 125F - Mikuni BS26 / Eje Balancín',

                motorPrincipal: '124cc F401 Monocilíndrico 4T'
            }
        );
    }
};


export const suzukiGN125_2026 = {

    ...suzukiGN125_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Suzuki GN 125 2026. Diagnóstico integral de motor SOHC 124cc con eje balancín, carburador Mikuni BS26, transmisión de 5 velocidades y filtro de aceite de papel.',

    informacionHistorica: {

        ...suzukiGN125_2025.informacionHistorica,

        titulo: 'Suzuki GN 125 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoGN125(
            2026,
            {
                tecnologia: '2ª Gen GN 125F - Mikuni BS26 / Eje Balancín Anti-vibración',

                motorPrincipal: '124cc F401 Monocilíndrico 4T (12.5 HP / 9.6 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE SUZUKI GN 125
// ============================================================

export const suzukiGN125 = {

    marca: 'Suzuki',

    modelo: 'GN 125',

    tipo: 'Motocicleta Custom / Trabajo Urbana',

    imagen:
        'https://motoblog.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-27-at-1.47.36-PM-15-1024x682.jpeg',

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

        2012: suzukiGN125_2012,

        2013: suzukiGN125_2013,

        2014: suzukiGN125_2014,

        2015: suzukiGN125_2015,

        2016: suzukiGN125_2016,

        2017: suzukiGN125_2017,

        2018: suzukiGN125_2018,

        2019: suzukiGN125_2019,

        2020: suzukiGN125_2020,

        2021: suzukiGN125_2021,

        2022: suzukiGN125_2022,

        2023: suzukiGN125_2023,

        2024: suzukiGN125_2024,

        2025: suzukiGN125_2025,

        2026: suzukiGN125_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
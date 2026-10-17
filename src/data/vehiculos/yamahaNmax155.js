const sistemasMotorNMAX = [
    {
        nombre: 'Bloque del motor y Cilindro DiASil (Tecnología Blue Core 155cc)',
        funcion:
            'Estructura de aleación de aluminio con alto contenido de silicio (DiASil) refrigerada por líquido presurizado que aloja el pistón forjado, cigüeñal descentrado (Offset Cylinder) y galerías de aceite.',
        fallas: [
            'Fugas de refrigerante por la empaquetadura de la bomba de agua o empaque de culata',
            'Desgaste prematuro del cilindro por trabajar con aceite degradado o bajo nivel (requiere 10W-40 / 10W-30 JASO MB)',
            'Humo azul por el escape por desgaste en anillos de pistón en unidades con alto kilometraje',
            'Fuga de aceite por el retén del eje del cigüeñal (lado variador CVT)'
        ]
    },

    {
        nombre: 'Culata SOHC 4V con Sistema VVA (Variable Valve Actuation)',
        funcion:
            'Aloja 4 válvulas operadas por balancines con rodillo. El solenoide VVA conmuta el balancín a las 6.000 RPM para cambiar a una leva de mayor alzada y optimizar el rendimiento.',
        fallas: [
            'Falla del solenoide actuador VVA (código de error de diagnóstico en tablero/escáner)',
            'Descalibración en la holgura de válvulas (provoca traqueteo o dificultad de encendido en frío)',
            'Fuga de aceite por el empaque de la tapa de culata',
            'Desgaste en la superficie de los rodillos de balancín'
        ]
    },

    {
        nombre: 'Cigüeñal Descentrado y Generador de Arranque Silencioso (SMG)',
        funcion:
            'El cigüeñal descentrado reduce la fricción lateral del pistón. El motor SMG (Smart Motor Generator) arranca el motor térmico directamente sin piñones ni motor de arranque convencional.',
        fallas: [
            'Falla de arranque por bajo voltaje de batería (el sistema SMG requiere mínimo 12.4V constantes)',
            'Falta de acople o retardo en el reinicio del sistema Stop & Start (SSS)',
            'Desgaste de casquetes o rodamientos de cigüeñal por lubricación deficiente'
        ]
    },

    {
        nombre: 'Pistón Forjado de Alta Resistencia',
        funcion:
            'Pistón liviano forjado en aluminio que soporta la compresión de 10.5:1 (1ª Gen) a 11.6:1 (2ª Gen) y transmite la fuerza de expansión a la biela.',
        fallas: [
            'Anillos rascadores de aceite pegados por acumulación de carbonilla',
            'Pérdida de compresión por desgaste o sobrecalentamiento',
            'Detonación o cascabeleo si se utiliza combustible de bajo octanaje o de mala calidad'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Hidráulico/Mecánico',
        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y el árbol de levas superior.',
        fallas: [
            'Ruido metálico de sonajero en el costado derecho del motor en frío',
            'Desgaste del patín guía de la cadena de distribución',
            'Falla o trabamiento del tensor automático de cadena'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración Líquida con Radiador Lateral Integrado',
        funcion:
            'Controla la temperatura mediante bomba de agua, termostato, vaso de expansión y radiador montado en el costado derecho con ventilador directo.',
        fallas: [
            'Sobrecalentamiento del motor por fuga de refrigerante en la bomba de agua o mangueras',
            'Termostato pegado en posición cerrada',
            'Acumulación de suciedad en las aletas de aluminio del radiador lateral'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Alta Eficiencia (JASO MB)',
        funcion:
            'Bomba de aceite trocoide que abastece la culata, mecanismo VVA, transmisión automática CVT e impulsadores.',
        fallas: [
            'Desgaste acelerado del motor por utilizar aceite de carro o aceite JASO MA (debe ser JASO MB de baja fricción)',
            'Obstrucción de la malla/tamiz del cárter con sedimentos',
            'Fuga por el interruptor de presión o retenes del cárter'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE E INYECCIÓN ELECTRÓNICA
// ============================================================

const sistemaCombustibleNMAX = {

    titulo: 'Sistema de Inyección Electrónica de Combustible YMJET-FI / FI Yamaha',

    funcionamiento:
        'La bomba sumergida presuriza la línea a ~3.0 bar. La unidad de control ECU (o CCU en versiones Connected) ajusta el pulso del inyector analizando datos de los sensores CPS, TPS, MAP, IAT, ECT y la sonda Lambda de banda ancha.',

    componentes: [
        'Tanque de combustible de 6.6L (1ª Gen) / 7.1L (2ª Gen)',
        'Módulo de bomba eléctrica e indicador de nivel',
        'Filtro de gasolina interno en el módulo de bomba',
        'Cuerpo de aceleración con sensor híbrido (TPS/MAP/IAT)',
        'Inyector de combustible de 6 orificios de alta atomización',
        'Filtro de aire de elemento de papel viscoso (no lavable)',
        'Sensor de oxígeno (Sonda Lambda en tubo de escape)',
        'Unidad de Control Electrónico de Motor (ECU Yamaha)'
    ],

    flujo: [
        '1. La bomba en el tanque presuriza la línea de combustible a ~3.0 bar.',
        '2. Al girar el acelerador, el cuerpo de mariposa regula el paso de aire al colector.',
        '3. La ECU calcula la masa de aire e inyecta la cantidad exacta de combustible.',
        '4. La mezcla aire/gasolina ingresa por las 2 válvulas de admisión a la cámara.',
        '5. La sonda Lambda monitorea los gases y ajusta el mapa de inyección en tiempo real.'
    ],

    diagnostico: [
        'Medir presión de combustible en la línea del inyector (~2.8 a 3.0 bar en ralentí).',
        'Escanear códigos de error utilizando la herramienta de diagnóstico Yamaha YDT.',
        'Verificar limpieza del cuerpo de aceleración y estado del sensor TPS si presenta vacilaciones.',
        'Reemplazar el filtro de aire viscoso si presenta acumulación de polvo o aceite.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO, BATERÍA Y SMART KEY
// ============================================================

const sistemaEncendidoNMAX = {

    titulo: 'Sistema de Encendido Transistorizado TCI, Smart Key y Stop & Start',

    funcionamiento:
        'El módulo TCI/ECU procesa la señal del sensor de posición del cigüeñal (CKP) y activa la bobina de alta tensión. En modelos 2ª Gen, la ECU gestiona la llave inteligente (Smart Key), el Control de Tracción (TCS) y el apagado/arranque automático (Stop & Start).',

    componentes: [
        {
            nombre: 'Unidad de Control ECU y Módulo Smart Key',
            funcion:
                'Valida la radiofrecuencia de la llave inteligente y autoriza el encendido y apertura de seguros.'
        },

        {
            nombre: 'Sensor CKP / Generador SMG',
            funcion:
                'Lee la posición del cigüeñal para sincronizar la chispa y opera el arranque silencioso.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón de Bujía',
            funcion:
                'Eleva el voltaje para generar la chispa en la bujía de Iridio/Níquel.'
        },

        {
            nombre: 'Bujía de Encendido (NGK CPR8EA-9 / CPR8EAG-9)',
            funcion:
                'Produce la chispa eléctrica dentro de la cámara de combustión.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar voltaje de batería de 12V (mínimo 12.4V; el sistema Smart Key no opera con baja tensión).',
        'Comprobar la pila CR2032 del control de la llave inteligente Smart Key.',
        'Inspeccionar fusibles principales (Main, FI, Ignition, ABS) en la caja de fusibles.',
        'Escanear con YDT buscando errores en el sensor CKP o sistema de inmovilizador.',
        'Medir resistencia del capuchón de bujía (~4.0 a 5.0 kΩ).'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposNMAX = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende desde el PMS. Las 2 válvulas de admisión se abren y el cuerpo de inyección entrega la mezcla aire/gasolina atomizada.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abiertas',
            escape: 'Cerradas'
        },

        objetivo:
            'Llenar el cilindro DiASil con la mayor masa de mezcla combustible.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla. Ambas válvulas permanecen cerradas (relación de compresión elevada de 11.6:1 en 2ª Gen).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Cerradas'
        },

        objetivo:
            'Elevar la presión y temperatura antes del brinco de la chispa.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión (Activación VVA > 6000 RPM)',

        descripcion:
            'La bujía genera la chispa. La mezcla se inflama e impulsa el pistón hacia abajo. Al superar las 6.000 RPM, el VVA activa la leva de alta potencia.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Cerradas'
        },

        objetivo:
            'Generar el máximo torque y potencia característicos de la NMAX 155.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende expulsando los gases quemados a través de las 2 válvulas de escape abiertas hacia el tubo con catalizador.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerradas',
            escape: 'Abiertas'
        },

        objetivo:
            'Vaciar completamente la cámara para iniciar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasNMAX = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 24mm)',
        'Llaves Allen / Torx (T25, T30) para tornillos de carenados de plástico',
        'Destornilladores de estrella N° 2 y pala, extractor de remaches plásticos',
        'Llave delgada para bujía de 16mm (5/8")',
        'Calibrador de galgas / láminas para calibrar válvulas (0.10mm - 0.24mm)',
        'Embudo graduado y bandeja para drenaje de aceite de motor y aceite de transmisión'
    ],

    diagnostico: [
        'Escáner de diagnóstico Yamaha YDT / Escáner OBD2 con conector adaptador Yamaha de 3/6 pines',
        'Multímetro digital de alta precisión',
        'Manómetro de presión de combustible con acoples rápidos de 6mm',
        'Probador de batería de 12V y sistema de carga del alternador/SMG',
        'Compresímetro para rosca M10 / M12'
    ],

    profesional: [
        'Torquímetro de precisión graduado de 1/4 y 3/8 de pulgada (7 Nm a 60 Nm)',
        'Sujetador/Traba polea del embrague variador CVT y polea embrague trasero',
        'Extractor de rodamiento de la tapa de transmisión y prensa de resorte de embrague secundario',
        'Micrómetro / Pie de rey digital para medir diámetro de rodillos del variador y espesor de banda CVT'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralNMAX = {

    principio:
        'Diagnóstico metódico. En la Yamaha NMAX 155, verificar la tensión de la batería de 12V y el estado de la Smart Key antes de desmontar componentes mecánicos.',

    secuencia: [

        '1. Entrevistar al usuario sobre los síntomas y revisar los indicadores en la pantalla LCD/TFT (VVA, ABS, TCS, Check Engine).',

        '2. Conectar el escáner Yamaha YDT u OBD2 para leer códigos DTC almacenados en la ECU y ABS.',

        '3. Anotar los códigos de falla y revisar datos congelados (Freeze Frame).',

        '4. Medir el voltaje de la batería en reposo (mínimo 12.4V) y caídas de voltaje durante el arranque.',

        '5. Analizar datos en tiempo real (RPM, presión MAP, temperatura ECT, estado del VVA y sonda Lambda).',

        '6. Inspeccionar el filtro de aire de la caja CVT, estado de la correa dentada y rodillos del variador.',

        '7. Realizar pruebas mecánicas (Presión de gasolina en línea, prueba de compresión de cilindro).',

        '8. Reemplazar o reparar el componente defectuoso utilizando repuestos originales Yamaha (Yamalube).',

        '9. Borrar los códigos de falla almacenados en la memoria.',

        '10. Ejecutar procedimientos de reinicio de parámetros si se cambió el cuerpo de aceleración o sensor.',

        '11. Realizar prueba de ruta para confirmar el correcto funcionamiento.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesNMAX = [

    {
        titulo: 'Tirones, vibración fuerte al arrancar o pérdida de velocidad final (Sistema CVT)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Zapatas/Pastas del embrague centrífugo trasero cristalizadas o con grasa',
            'Rodillos/Pesas del variador delantero desgastados o con caras planas',
            'Correa trapezoidal de la transmisión CVT desgastada (ancho inferior al límite de servicio)',
            'Acumulación de polvo de caucho y suciedad dentro de la carcasa de la CVT'
        ],

        diagnostico: [
            'Desmontar la tapa de la transmisión CVT y limpiar todo el polvo acumulado.',
            'Lijar suavemente las zapatas del embrague centrífugo y la campana interna.',
            'Inspeccionar caras planas en los 6 rodillos del variador.',
            'Medir el ancho de la correa CVT con un pie de rey (reemplazar si mide menos de 19.5mm).'
        ]
    },

    {
        titulo: 'Falta de respuesta al superar las 6.000 RPM o código de falla de VVA',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Solenoide actuador del VVA desconectado, sulfatado o defectuoso',
            'Pasador de la leva del VVA atascado por uso de aceite sucio o degradado',
            'Fusible del circuito del VVA quemado'
        ],

        diagnostico: [
            'Escanear el módulo ECM buscando códigos de falla relacionados con el VVA.',
            'Probar la activación manual del solenoide VVA mediante la función de prueba de actuadores del escáner.',
            'Verificar la resistencia de la bobina del actuador VVA con el multímetro.',
            'Inspeccionar el estado del aceite de motor (usar exclusivamente Yamalube / JASO MB).'
        ]
    },

    {
        titulo: 'La motocicleta no enciende, no reconoce la llave o parpadea el testigo Smart Key',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Pila botón CR2032 del control de la llave Smart Key descargada',
            'Batería principal de 12V de la motocicleta con bajo voltaje (<12.0V)',
            'Control Smart Key fuera del rango de alcance o interferencia de señal',
            'Fusible del sistema Smart Key / ECU quemado'
        ],

        diagnostico: [
            'Reemplazar la pila CR2032 del control remoto Smart Key.',
            'Medir el voltaje de la batería principal de la moto.',
            'Comprobar la antena receptora de la Smart Key ubicada bajo el carenado.',
            'Efectuar el procedimiento de emergencia introduciendo el código PIN de la llave en el tablero.'
        ]
    },

    {
        titulo: 'Consumo o pérdida progresiva de líquido refrigerante (Sobrecalentamiento)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Fuga por el sello mecánico de la bomba de agua en la tapa derecha del motor',
            'Empaque de culata soplado por episodio previo de temperatura',
            'Tapa presurizada del radiador defectuosa o con empaque roto',
            'Nivel bajo en el depósito de expansión situado debajo del posapié'
        ],

        diagnostico: [
            'Inspeccionar si hay goteo de refrigerante por el orificio de desahogo de la bomba de agua.',
            'Verificar si el aceite de motor presenta aspecto emulsionado (color café con leche).',
            'Probar la presión del sistema de refrigeración con bomba manual.',
            'Rellenar con refrigerante preconcentrado Yamaha Coolant.'
        ]
    },

    {
        titulo: 'Testigo de ABS o Control de Tracción (TCS) encendido en el tablero',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor de velocidad de rueda delantera o trasera sucio con barro/grasa',
            'Disco fónico/anillo dentado del ABS doblado o rajado',
            'Distancia/holgura entre el sensor y el disco fónico fuera de especificación',
            'Presión de neumáticos incorrecta (hace calcular velocidades de rueda desiguales al TCS)'
        ],

        diagnostico: [
            'Limpiar los sensores magnéticos de velocidad en ambas ruedas.',
            'Inspeccionar la integridad del disco sensor del ABS.',
            'Escanear el módulo de ABS/TCS para identificar la rueda con la lectura alterada.',
            'Ajustar la presión de las llantas según el manual (22 PSI delantera / 36 PSI trasera).'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoNMAX = {

    objetivo:
        'Conservar la eficiencia tecnológica Blue Core, proteger el mecanismo VVA, garantizar el suave funcionamiento de la transmisión CVT y mantener la seguridad de los sistemas ABS/TCS.',

    actividades: [

        {
            nombre: 'Aceite de motor (Yamalube 4T Scooter JASO MB)',
            accion:
                'Reemplazar cada 3.000 km a 4.000 km utilizando 900 ml a 1000 ml de aceite sintético/semisintético 10W-40 con norma estricta JASO MB (Baja Fricción).'
        },

        {
            nombre: 'Aceite de Transmisión Final (Caja de piñones trasera)',
            accion:
                'Reemplazar cada 10.000 km o 12 meses utilizando 150 ml de aceite de transmisión SAE 10W-40 / 85W-140.'
        },

        {
            nombre: 'Mantenimiento de Transmisión CVT (Variador y Embrague)',
            accion:
                'Limpiar polvo interno, revisar rodillos, campana y zapatas de embrague cada 6.000 km. Reemplazar correa CVT cada 18.000 km a 20.000 km.'
        },

        {
            nombre: 'Filtro de aire de motor y Filtro de aire CVT',
            accion:
                'Limpiar filtro de aire CVT cada 6.000 km. Reemplazar el filtro de aire principal viscoso de motor cada 12.000 km (NO lavar con gasolina).'
        },

        {
            nombre: 'Calibración de Válvulas SOHC 4V',
            accion:
                'Inspeccionar y calibrar en frío cada 12.000 km. Especificación: Admisión (0.10mm - 0.14mm) / Escape (0.18mm - 0.24mm).'
        },

        {
            nombre: 'Líquido Refrigerante y Sistema de Enfriamiento',
            accion:
                'Inspeccionar nivel en el vaso de expansión cada 3.000 km; drenar y renovar el refrigerante preconcentrado cada 24.000 km o 2 años.'
        },

        {
            nombre: 'Líquido de Frenos ABS',
            accion:
                'Reemplazar fluido DOT 4 en los depósitos del manubrio delantero y trasero cada 20.000 km o 2 años.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadNMAX = [

    'NUNCA acelere el motor con la motocicleta levantada sobre el soporte central sin haber instalado correctamente la cubierta de la transmisión CVT para evitar graves lesiones mecánicas.',

    'Apague completamente el switch o la Smart Key antes de realizar cualquier intervención en el sistema de inyección electrónica, batería o fusileras.',

    'Utilice recipientes adecuados para el drenaje de aceite de motor y refrigerante; no vierta fluidos en el suelo o alcantarillado.',

    'Respete el torque recomendado en los tapones de drenaje de aceite (20 Nm) y tuerca de las poleas CVT (50 Nm en variador / 50 Nm en embrague) para evitar trasroscar las roscas de aluminio.',

    'Verifique que la tapa de caucho de protección del sensor ABS esté bien asentada tras el lavado de la motocicleta para evitar cortos o lecturas erróneas.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosNMAX = [

    {
        id: 1,

        titulo: 'Introducción a la Tecnología Yamaha Blue Core y NMAX 155',

        nivel: 'Básico',

        descripcion:
            'Aprende sobre la arquitectura del cilindro DiASil, componentes del motor Blue Core, fusibles, Smart Key y mantenimiento básico.',

        temas: [
            'Evolución de la Yamaha NMAX 155 (1ª Gen vs 2ª Gen / Connected)',
            'Características del motor Blue Core y lubricante JASO MB',
            'Ubicación de batería, caja de fusibles y vaso de expansión',
            'Operación del sistema Smart Key y procedimientos de emergencia'
        ]
    },

    {
        id: 2,

        titulo: 'Mantenimiento Diagnóstico y Reparación de la Transmisión CVT',

        nivel: 'Intermedio',

        descripcion:
            'Procedimiento completo para el desmonte, inspección, medición de desgaste y mantenimiento preventivo del sistema variador y embrague trasero.',

        temas: [
            'Uso de herramientas de traba para poleas del variador y embrague',
            'Inspección y tolerancia de correa CVT, rodillos y guías de deslizamiento',
            'Mantenimiento del embrague centrífugo y resorte secundario',
            'Sustitución del aceite de la caja de reducción final'
        ]
    },

    {
        id: 3,

        titulo: 'Sistema de Válvulas Variables VVA e Inyección Electrónica FI',

        nivel: 'Avanzado',

        descripcion:
            'Aprende el funcionamiento del solenoide VVA, calibración precisa de válvulas 4V, cuerpo de aceleración y uso del escáner Yamaha YDT.',

        temas: [
            'Principios del sistema Variable Valve Actuation (VVA)',
            'Procedimiento de calibración de las 4 válvulas en frío',
            'Diagnóstico del cuerpo de aceleración e inyector de 6 orificios',
            'Uso del escáner YDT para lectura de parámetros y borrado de DTCs'
        ]
    },

    {
        id: 4,

        titulo: 'Sistemas Electrónicos Avanzados: ABS, TCS, SMG y Y-Connect',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico de los sistemas de seguridad activa ABS dual channel, Control de Tracción TCS, motor de arranque SMG y conectividad.',

        temas: [
            'Funcionamiento del módulo hidráulico de ABS y sensores de rueda',
            'Diagnóstico del Control de Tracción (TCS)',
            'Operación del sistema de arranque silencioso SMG y Stop & Start',
            'Vinculación y lectura de datos con la app Y-Connect / CCU'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioNMAX = [

    {
        termino: 'VVA',
        significado:
            'Variable Valve Actuation. Sistema de distribución variable de Yamaha que conmuta el perfil de la leva de admisión a partir de las 6.000 RPM para maximizar la potencia.'
    },

    {
        termino: 'Blue Core',
        significado:
            'Filosofía de desarrollo de motores Yamaha enfocada en aumentar la eficiencia de combustión, reducir la pérdida de potencia por fricción y optimizar la refrigeración.'
    },

    {
        termino: 'DiASil',
        significado:
            'Die-casting Aluminium Silicon. Cilindro de aleación de aluminio con 20% de silicio fabricado por Yamaha que disipa el calor 3.1 veces más rápido que el hierro.'
    },

    {
        termino: 'SMG',
        significado:
            'Smart Motor Generator. Generador eléctrico integrado que funciona como motor de arranque silencioso y alternador sin necesidad de piñones.'
    },

    {
        termino: 'JASO MB',
        significado:
            'Especificación japonesa de aceite para motores de 4 tiempos de scooters con transmisión automática CVT que contiene modificadores de fricción para reducir pérdidas.'
    },

    {
        termino: 'CVT',
        significado:
            'Continuously Variable Transmission. Transmisión automática de variación continua por poleas expansibles y correa trapezoidal.'
    },

    {
        termino: 'TCS',
        significado:
            'Traction Control System (Control de Tracción). Sistema electrónico que reduce temporalmente el tiempo de encendido si detecta patinamiento en la rueda trasera.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoNMAX(anio, configuracion) {

    const sintomasMapeados = fallasComunesNMAX.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la Yamaha NMAX 155 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasNMAX.basicas,
            ...herramientasNMAX.diagnostico
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

                titulo: 'Motor Blue Core 155cc, VVA e Inyección FI',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, Smart Key, ABS y TCS',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Smart Key y Batería',

                        sintomas: [

                            {
                                titulo: 'La scooter no desbloquea el seguro o no reconoce el control Smart Key',

                                dificultad: 'Básico 🟢',

                                descripcion:
                                    'Revisión de la pila CR2032 de la Smart Key, batería de 12V y fusibles principales.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Pila botón CR2032',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Reemplazar la pila CR2032 del control remoto Smart Key.',
                                    '2. Medir la tensión de la batería principal de 12V (mínimo 12.4V en reposo).',
                                    '3. Verificar la integridad de los fusibles Main, FI y Smart Key en la caja de fusibles.',
                                    '4. Comprobar que no existan interferencias de RF o utilizar el PIN de desbloqueo de emergencia.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Transmisión Automática CVT',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Variador, Correa y Embrague',

                        sintomas: [

                            {
                                titulo: 'Tirones o vibración en la transmisión CVT al iniciar la marcha',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Limpieza del embrague centrífugo, inspección de rodillos del variador y correa dentada.',

                                herramientas: [
                                    'Herramienta de traba poleas CVT',
                                    'Pie de rey digital',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Retirar la cubierta de la transmisión CVT y sopletear el polvo acumulado.',
                                    '2. Inspeccionar el estado de las caras de las zapatas del embrague y lijar suavemente la campana.',
                                    '3. Comprobar que los 6 rodillos del variador no tengan caras planas asentadas.',
                                    '4. Medir el ancho de la correa CVT (reemplazar si presenta grietas o está fuera del límite de servicio).'
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
// MODELOS INDIVIDUALES POR AÑO (YAMAHA NMAX 155 2015 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN NMAX 155 (2015 - 2020) ---

export const yamahaNMAX2015 = {

    marca: 'Yamaha',

    modelo: 'NMAX 155',

    anio: 2015,

    tipo: 'Scooter Maxi-Urban',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2018_Yamaha_NMAX_155.jpg/1200px-2018_Yamaha_NMAX_155.jpg',

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2015 (1ª Generación / Lanzamiento mundial / Motor Blue Core 155cc 4V SOHC con sistema VVA, frenos de disco ABS en ambas ruedas y tablero LCD).',

    informacionHistorica: {

        titulo: 'Yamaha NMAX 155 2015',

        generacion: 'Primera generación NMAX 155',

        familiaMotor: '155cc Blue Core 4T Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T 4V refrigerado por líquido',

        arquitectura: 'SOHC 4 Válvulas con VVA (Variable Valve Actuation)',

        alimentacion: 'Inyección Electrónica de Combustible FI',

        encendido: 'TCI Transistorizado (Arranque eléctrico)',

        refrigeracion: 'Refrigeración líquida con radiador lateral',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Automática de variación continua CVT por correa V-Belt'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la Yamaha NMAX 155 2015?',

        explicacion:
            'Un motor scooter de alto rendimiento que integra el sistema VVA de alzada variable para entregar un consumo eficiente a bajas revoluciones y una aceleración contundente al superar las 6.000 RPM.',

        formulaSimple:
            'Aire + gasolina inyectada + compresión + chispa TCI + activación VVA = aceleración continua sin cambios',

        flujoEnergia: [
            'Tanque de combustible (6.6 Litros)',
            'Bomba de gasolina de 3 bar',
            'Inyector FI de 6 orificios',
            'Cámara de combustión',
            'Pistón forjado en cilindro DiASil',
            'Cigüeñal descentrado (Offset)',
            'Variador CVT delantero',
            'Correa V-Belt',
            'Embrague centrífugo trasero',
            'Caja de reducción final',
            'Rueda trasera de 13 pulgadas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposNMAX,

    componentesMotor: sistemasMotorNMAX,

    sistemaCombustible: sistemaCombustibleNMAX,

    sistemaEncendido: sistemaEncendidoNMAX,

    refrigeracion: {

        tipo: 'Refrigeración líquida presurizada con radiador lateral',

        elementos: [
            'Radiador de aluminio montado en el lateral derecho',
            'Bomba de agua impulsada por el árbol de levas',
            'Termostato de apertura rápida',
            'Vaso de expansión transparente',
            'Ventilador de acople directo'
        ],

        funcionamiento:
            'El líquido refrigerante circula por el cilindro DiASil disipando el calor continuo mediante el radiador lateral.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide en baño de aceite',

        componentes: [
            'Cárter de aleación de aluminio',
            'Bomba de aceite trocoide',
            'Malla de succión de aceite',
            'Conductos hacia el actuador VVA'
        ],

        funcionamiento:
            'Distribuye aceite sintético 10W-40 JASO MB hacia la culata 4V, mecanismo VVA y cojinetes de cigüeñal.'
    },

    distribucion: {

        titulo: 'Distribución por cadena silenciosa y sistema VVA',

        tipo: 'Cadena de distribución con tensor automático y solenoide VVA',

        funcion:
            'Sincroniza el tiempo de apertura de las 4 válvulas y commuta la alzada a 6.000 RPM.',

        advertencia:
            'Utilice aceite JASO MB para evitar el atascamiento del pasador del mecanismo VVA.'
    },

    diagnosticoGeneral: diagnosticoGeneralNMAX,

    fallasComunes: fallasComunesNMAX,

    herramientas: herramientasNMAX,

    mantenimiento: mantenimientoNMAX,

    cursos: cursosNMAX,

    seguridad: seguridadNMAX,

    glosario: glosarioNMAX,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2015,
            {
                tecnologia: '1ª Gen - Motor Blue Core 155cc 4V VVA / ABS Dual',

                motorPrincipal: '155cc Blue Core (14.8 HP / 14.4 Nm)'
            }
        );
    }
};


export const yamahaNMAX2016 = {

    ...yamahaNMAX2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2016. Mantenimiento del sistema CVT, calibración de válvulas y ABS.',

    informacionHistorica: {

        ...yamahaNMAX2015.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2016,
            {
                tecnologia: '1ª Gen - Blue Core 155cc VVA / ABS',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


export const yamahaNMAX2017 = {

    ...yamahaNMAX2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2017. Guías de servicio técnico, inyección FI y correa CVT.',

    informacionHistorica: {

        ...yamahaNMAX2016.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2017,
            {
                tecnologia: '1ª Gen - Blue Core 155cc VVA / ABS',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


export const yamahaNMAX2018 = {

    ...yamahaNMAX2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2018 (Actualización con amortiguadores traseros con depósito de gas sub-tank según versión y nuevo tablero LCD invertido).',

    informacionHistorica: {

        ...yamahaNMAX2017.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2018,
            {
                tecnologia: '1ª Gen Facelift - Blue Core 155cc VVA / Sub-tank Rear Shocks',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


export const yamahaNMAX2019 = {

    ...yamahaNMAX2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2019. Diagnóstico del sistema de refrigeración, bomba de agua e inyección.',

    informacionHistorica: {

        ...yamahaNMAX2018.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2019,
            {
                tecnologia: '1ª Gen - Blue Core 155cc VVA / ABS',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


export const yamahaNMAX2020 = {

    ...yamahaNMAX2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2020. Cierre de la primera generación.',

    informacionHistorica: {

        ...yamahaNMAX2019.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2020',

        anio: 2020
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2020,
            {
                tecnologia: '1ª Gen - Blue Core 155cc VVA / ABS',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN NMAX CONNECTED / ABS / TCS (2021 - 2026) ---

export const yamahaNMAX2021 = {

    ...yamahaNMAX2020,

    anio: 2021,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2018_Yamaha_NMAX_155.jpg/1200px-2018_Yamaha_NMAX_155.jpg',

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 Connected 2021 (Lanzamiento de la 2ª Generación / Chasis rediseñado, Smart Key, Control de Tracción TCS, Generador SMG, Stop & Start SSS y Conectividad Y-Connect CCU).',

    informacionHistorica: {

        titulo: 'Yamaha NMAX 155 Connected 2021 (2ª Gen)',

        generacion: 'Segunda generación NMAX 155 Connected',

        familiaMotor: '155cc Blue Core VVA 4T Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T 4V refrigerado por líquido con compresión 11.6:1',

        arquitectura: 'SOHC 4 Válvulas con VVA e impulsador de rodillo',

        alimentacion: 'Inyección Electrónica FI con unidad de control CCU',

        encendido: 'Generador de Arranque Silencioso SMG / TCI',

        refrigeracion: 'Refrigeración líquida presurizada',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Automática CVT V-Belt con Control de Tracción TCS'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2021,
            {
                tecnologia: '2ª Gen - Connected / Smart Key / TCS / SMG / Stop & Start',

                motorPrincipal: '155cc Blue Core VVA (15.1 HP / 13.9 Nm)'
            }
        );
    }
};


export const yamahaNMAX2022 = {

    ...yamahaNMAX2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2022. Mantenimiento del sistema Smart Key, Control de Tracción TCS y variador CVT.',

    informacionHistorica: {

        ...yamahaNMAX2021.informacionHistorica,

        titulo: 'Yamaha NMAX 155 Connected 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2022,
            {
                tecnologia: '2ª Gen - Connected / Smart Key / TCS / ABS',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


export const yamahaNMAX2023 = {

    ...yamahaNMAX2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2023. Diagnóstico del módulo ABS, sensores de velocidad y sistema Y-Connect.',

    informacionHistorica: {

        ...yamahaNMAX2022.informacionHistorica,

        titulo: 'Yamaha NMAX 155 Connected 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2023,
            {
                tecnologia: '2ª Gen - Connected / Smart Key / TCS / ABS',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


export const yamahaNMAX2024 = {

    ...yamahaNMAX2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2018_Yamaha_NMAX_155.jpg/1200px-2018_Yamaha_NMAX_155.jpg',

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2024 (Versiones NMAX ABS / Connected / Special Edition).',

    informacionHistorica: {

        ...yamahaNMAX2023.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2024,
            {
                tecnologia: '2ª Gen - Connected / Smart Key / TCS / ABS Dual',

                motorPrincipal: '155cc Blue Core VVA (15.1 HP)'
            }
        );
    }
};


export const yamahaNMAX2025 = {

    ...yamahaNMAX2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2025. Guías de servicio técnico, escaneo con Yamaha YDT e inyección FI.',

    informacionHistorica: {

        ...yamahaNMAX2024.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2025,
            {
                tecnologia: '2ª Gen - Connected / Smart Key / TCS / ABS',

                motorPrincipal: '155cc Blue Core VVA'
            }
        );
    }
};


export const yamahaNMAX2026 = {

    ...yamahaNMAX2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Yamaha NMAX 155 2026. Diagnóstico integral del motor Blue Core VVA 155cc, transmisión CVT, Smart Key, ABS Dual y Control de Tracción TCS.',

    informacionHistorica: {

        ...yamahaNMAX2025.informacionHistorica,

        titulo: 'Yamaha NMAX 155 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNMAX(
            2026,
            {
                tecnologia: '2ª Gen - Connected / Smart Key / TCS / ABS Dual / SMG',

                motorPrincipal: '155cc Blue Core VVA 4V (15.1 HP / 13.9 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE YAMAHA NMAX 155
// ============================================================

export const yamahaNMAX = {

    marca: 'Yamaha',

    modelo: 'NMAX 155',

    tipo: 'Scooter Maxi-Urban',

    imagen:
        'https://http2.mlstatic.com/D_805544-MCO110431987063_042026-O.jpg',

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

        2015: yamahaNMAX2015,

        2016: yamahaNMAX2016,

        2017: yamahaNMAX2017,

        2018: yamahaNMAX2018,

        2019: yamahaNMAX2019,

        2020: yamahaNMAX2020,

        2021: yamahaNMAX2021,

        2022: yamahaNMAX2022,

        2023: yamahaNMAX2023,

        2024: yamahaNMAX2024,

        2025: yamahaNMAX2025,

        2026: yamahaNMAX2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
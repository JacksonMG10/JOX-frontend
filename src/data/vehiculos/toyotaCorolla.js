const sistemasMotorCorolla = [
    {
        nombre: 'Bloque del motor (ZR Series / Dynamic Force M20A)',
        funcion:
            'Estructura de aleación de aluminio con camisas de hierro fundido que alberga los cilindros, cigüeñal y conductos internos de lubricación/refrigeración.',
        fallas: [
            'Fugas de aceite por el retén principal del cigüeñal (lado caja)',
            'Fugas de refrigerante por la carcasa de la bomba de agua o termostato',
            'Desgaste por uso de aceite con viscosidad fuera de norma (ej. 10W-30 en lugar de 0W-16 / 0W-20 / 5W-30)',
            'Acumulación de depósitos si se extienden los periodos de cambio de aceite'
        ]
    },

    {
        nombre: 'Culata DOHC 16V con Dual VVT-i / VVT-iE',
        funcion:
            'Aloja las válvulas de admisión/escape y los árboles de levas. En motores modernos incluye variador eléctrico VVT-iE en admisión.',
        fallas: [
            'Obstrucción en los solenoides VVT por aceite sucio o contaminado',
            'Fuga de aceite en la empaquetadura de la tapa de culata',
            'Soplado de empaque de culata por sobrecalentamiento excesivo',
            'Depósitos de carbón en válvulas de admisión (versiones de inyección directa)'
        ]
    },

    {
        nombre: 'Árboles de levas y Actuadores Dual VVT-i',
        funcion:
            'Ajustan electrónicamente el tiempo de apertura de válvulas de admisión y escape para maximizar la eficiencia de combustible y torque.',
        fallas: [
            'Ruido metálico breve en arranques en frío (retraso de presión en piñones VVT)',
            'Códigos de falla de posición de árbol de levas (P0011 / P0012 / P0016)',
            'Pérdida de potencia por falla en el solenoide OCV (Oil Control Valve)'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Fricción Ultra Baja',
        funcion:
            'Transforma el movimiento alternativo de los pistones en rotación impulsando la transmisión e-CVT, CVT Direct Shift o manual.',
        fallas: [
            'Fuga por retén de cigüeñal (lado accesorios o lado transmisión)',
            'Desgaste en casquetes por trabajar con bajo nivel de aceite de motor',
            'Juego axial excesivo'
        ]
    },

    {
        nombre: 'Pistones y Anillos de Fricción Reducida',
        funcion:
            'Soportan la fuerza de la combustión y la transmiten a las bielas, manteniendo el sellado de la cámara.',
        fallas: [
            'Anillos pegados o cristalizados por usar aceite de mala calidad',
            'Consumo progresivo de aceite en unidades con alto kilometraje',
            'Cascabeleo o detonación si se acumula demasiado carbón'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Hidráulico',
        funcion:
            'Mantiene la sincronización permanente entre el cigüeñal y los árboles de levas de admisión y escape.',
        fallas: [
            'Estiramiento de la cadena si se prolongan los cambios de lubricante',
            'Sonajero metálico constante en la zona de la tapa de distribución',
            'Tensor hidráulico pegado por formación de barro o sedimento'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración con Bomba de Agua Electrónica/Mecánica',
        funcion:
            'Mantiene la temperatura ideal utilizando refrigerante de larga duración Super Long Life Coolant (SLLC).',
        fallas: [
            'Fuga de refrigerante por el drenaje del sello mecánico de la bomba de agua',
            'Termostato pegado en posición cerrada',
            'Falla en la bomba de agua eléctrica (en motores híbridos 1.8L 2ZR-FXE)'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Caudal Variable',
        funcion:
            'Suministra presión constante de aceite a las galerías internas, variadores VVT y tensor de distribución.',
        fallas: [
            'Testigo de presión de aceite encendido en ralentí',
            'Filtro de aceite obstruido o deformado',
            'Fuga en la válvula de control de presión de aceite'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE Y SISTEMA HÍBRIDO HSD
// ============================================================

const sistemaCombustibleCorolla = {

    titulo: 'Sistema de Inyección D-4S (Inyección Directa e Indirecta Dual) / EFI / Hybrid HSD',

    funcionamiento:
        'Combina inyección indirecta (port) e directa (direct injection) según la carga y RPM en motores Dynamic Force. En versiones Híbridas, trabaja en ciclo Atkinson coordinado por la computadora HV para optimizar la recarga de batería.',

    componentes: [
        'Tanque de combustible presurizado',
        'Módulo de bomba de combustible sumergida (In-tank)',
        'Bomba de alta presión HPFP (versiones D-4S Dynamic Force)',
        'Rampa de inyección de baja y alta presión',
        'Inyectores piezoeléctricos / solenoide D-4S',
        'Cuerpo de aceleración electrónico (ETCS-i)',
        'Sensor de flujo de aire (MAF) y MAP integrado',
        'Computadora de gestión de motor (ECM) y Módulo HV (Híbridos)'
    ],

    flujo: [
        '1. La bomba en el tanque presuriza la línea de baja presión.',
        '2. En motores D-4S, la bomba mecánica HPFP eleva la presión hacia la rampa de inyección directa.',
        '3. La ECM selecciona inyección indirecta en bajas RPM y combina ambas en alta aceleración.',
        '4. Ocurre la combustión y los sensores de oxígeno A/F ajustan la mezcla en bucle cerrado (Fuel Trims).'
    ],

    diagnostico: [
        'Medir presión de línea de baja (~3.5 a 4.0 bar) y presión de riel directo en escáner.',
        'Escanear códigos de falla de mezcla rica/pobre (P0171 / P0172).',
        'Limpiar cuidadosamente el sensor MAF con desengrasante dieléctrico en aerosol.',
        'Verificar el estado del cuerpo de aceleración electrónico (ETCS-i).'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO Y HIBRIDACIÓN TOYOTA HSD
// ============================================================

const sistemaEncendidoCorolla = {

    titulo: 'Sistema de Encendido Directo DIS / Hybrid Synergy Drive (HSD)',

    funcionamiento:
        'Bobinas independientes sobre cada bujía de iridio. En versiones Corolla Hybrid, el motor de combustión no posee alternador ni motor de arranque convencional; el arranque lo realiza el motor eléctrico MG1 a través de la batería de alto voltaje (HV).',

    componentes: [
        {
            nombre: 'Computadora ECM / Módulo HV',
            funcion:
                'Gestión unificada de encendido, transición gasolina/eléctrico y regeneración de frenos.'
        },

        {
            nombre: 'Bobinas de encendido transistorizadas (COP)',
            funcion:
                'Transforman el voltaje de 12V en alta tensión para la bujía.'
        },

        {
            nombre: 'Bujías de Iridio de larga duración',
            funcion:
                'Garantizan el encendido instantáneo en el arranque del sistema híbrido.'
        },

        {
            nombre: 'Generador MG1 / Motor MG2 y Batería Ni-MH / Litio (Modelos Híbridos)',
            funcion:
                'MG1 arranca el motor térmico e impresiona carga a la batería HV; MG2 impulsa el auto en modo EV.'
        }
    ],

    fallaNoHayChispa: [
        'Comprobar el voltaje de la batería auxiliar de 12V.',
        'Escanear el vehículo buscando códigos de sincronización de sensores CKP/CMP.',
        'En versiones Híbridas, verificar que la luz "READY" encienda en el tablero de instrumentos.',
        'Inspeccionar conectores y estado físico de las bobinas de encendido.',
        'Comprobar la resistencia y desgaste de las bujías de iridio.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposCorolla = [

    {
        numero: 1,
        nombre: 'Admisión (Ciclo Atkinson en Híbridos)',

        descripcion:
            'El pistón desciende. En motores híbridos 1.8L 2ZR-FXE, la válvula de admisión permanece abierta durante el inicio de la compresión para reducir pérdidas de bombeo.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta (Retrasada por VVT-i)',
            escape: 'Cerrada'
        },

        objetivo:
            'Maximizar la eficiencia térmica reduciendo la resistencia al llenado.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla aire/combustible. Los variadores Dual VVT-i adaptan la fase óptima según la carga.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y temperatura antes del salto de chispa.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión (Apoyo de Motor Eléctrico MG2)',

        descripcion:
            'La bujía enciende la mezcla. Los gases expandidos empujan el pistón. En variantes Hybrid, el motor eléctrico MG2 suma par instantáneo al chasis.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el torque y potencia mecánica del vehículo.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende expulsando los gases quemados hacia el múltiple y el catalizador de tres vías.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Desalojar completamente los residuos de la cámara de combustión.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasCorolla = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 21mm)',
        'Destornilladores de pala, estrella y palancas de tapicería/clips',
        'Llaves Torx y Allen',
        'Gato hidráulico de patín y torres de seguridad con gomas protectoras',
        'Llave de bujías delgada de 14mm con retención magnética',
        'Llave de filtro de aceite de cazoleta de 64mm (64mm 14 flautas para cartuchos Toyota)'
    ],

    diagnostico: [
        'Escáner OBD2 avanzado / Toyota Techstream (TIS) con lectura de módulos ECM, HV, e-CVT, ABS, TSS',
        'Multímetro digital de RMS verdadero',
        'Manómetro de presión de combustible de alta y baja línea',
        'Probador de baterías de 12V (Plomo-ácido / AGM)',
        'Compresímetro y detector de fugas de cilindro'
    ],

    profesional: [
        'Torquímetro graduado de 1/4, 3/8 y 1/2 pulgada',
        'Herramientas de traba para árboles de levas y cigüeñal motores Toyota ZR y M20A',
        'Extractor de masa/rodamientos de rueda y retenes',
        'Equipo para mantenimiento y limpieza del ventilador de la batería Híbrida (HV)'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralCorolla = {

    principio:
        'Diagnóstico estructurado. En modelos Corolla Hybrid, inspeccionar el estado de la batería de 12V y códigos del módulo HV antes de realizar diagnósticos mecánicos.',

    secuencia: [

        '1. Entrevistar al usuario sobre la falla y revisar testigos en la pantalla TFT / Cuadro de instrumentos.',

        '2. Conectar el escáner (Techstream u OBD2) y realizar un autoescaneo de todos los módulos (ECM, HV, ABS, EPS, CVT).',

        '3. Anotar códigos DTC almacenados y revisar los datos en cuadro congelado (Freeze Frame).',

        '4. Medir la batería auxiliar de 12V (mínimo 12.4V) y en híbridos confirmar mensaje "READY".',

        '5. Analizar datos en tiempo real (RPM, MAF, lecturas VVT, Fuel Trims, Estado de Carga SOC Batería HV).',

        '6. Inspeccionar cables, conexiones de masa a chasis y mangueras de vacío del motor.',

        '7. Realizar pruebas mecánicas físicas (Presión de gasolina, chispa o compresión).',

        '8. Reemplazar o reparar el componente defectuoso con repuestos de especificación OEM.',

        '9. Borrar los códigos DTC de la memoria de la computadora.',

        '10. Ejecutar procedimiento de reajuste del cuerpo de aceleración o calibración de sensores.',

        '11. Realizar prueba de ruta y escaneo final de verificación.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesCorolla = [

    {
        titulo: 'Ralentí inestable o vibración leve en semáforos',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración electrónico (ETCS-i) sucio con residuos de carbón',
            'Sensor MAF sucio o impregnado con polvo',
            'Soportes de motor o caja desgastados o vencidos',
            'Bujías de iridio desgastadas o fuera de calibración'
        ],

        diagnostico: [
            'Limpiar la mariposa del cuerpo de aceleración y realizar procedimiento de aprendizaje.',
            'Limpiar el sensor MAF con limpiador de contactos sin residuos.',
            'Inspeccionar el estado hidráulico del soporte de motor derecho.',
            'Verificar la luz de electrodo de las bujías de iridio.'
        ]
    },

    {
        titulo: 'Mensaje "Mantenimiento de Batería Híbrida Requerido" o Falla de Ventilador (Modelos Hybrid)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Rejilla del ventilador de la batería de alto voltaje (HV) obstruida con polvo/pelusa',
            'Ventilador del sistema híbrido sucio o trabado',
            'Batería auxiliar de 12V descargada o en fin de vida útil'
        ],

        diagnostico: [
            'Retirar y limpiar el filtro de aire ubicado en la rejilla del asiento trasero.',
            'Desmontar el electroventilador de la batería HV para retirar pelusas acumulas.',
            'Verificar la tensión de la batería de 12V en el baúl o compartimiento del motor.'
        ]
    },

    {
        titulo: 'Tirones o demora en la respuesta al acelerar (Transmisión CVT MultiDrive / Direct Shift)',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Líquido de transmisión CVT (Toyota Genuine FE) degradado o fuera de nivel',
            'Falla en el actuador del engranaje de arranque "Launch Gear" (CVT Direct Shift M20A)',
            'Filtro de aceite de transmisión CVT saturado'
        ],

        diagnostico: [
            'Verificar el nivel y temperatura del fluido CVT utilizando procedimiento de reboce con escáner.',
            'Escanear el módulo TCM buscando códigos de solenoides o presión de aceite.',
            'Efectuar cambio de fluido CVT FE y filtro si se superó el intervalo de servicio.'
        ]
    },

    {
        titulo: 'Fuga de refrigerante rosa Super Long Life (SLLC) por bomba de agua',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Desgaste del sello mecánico de la bomba de agua',
            'Carcasa del termostato fisurada'
        ],

        diagnostico: [
            'Inspeccionar marcas rojas o rosadas alrededor de la polea de la bomba de agua.',
            'Revisar el nivel del depósito de expansión de refrigerante.',
            'Sustituir la bomba de agua utilizando refrigerante original Toyota SLLC.'
        ]
    },

    {
        titulo: 'Testigo Check Engine encendido por variadores VVT (P0011 / P0012)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Solenoide de control de aceite (OCV) pegado o con sedimento',
            'Filtro de malla de la válvula OCV tapado',
            'Uso de aceite con viscosidad incorrecta (ej. 10W-40 / 20W-50)'
        ],

        diagnostico: [
            'Confirmar que el motor utilice la viscosidad recomendada (0W-16, 0W-20 o 5W-30).',
            'Desmontar y probar la activación del solenoide OCV con 12V.',
            'Limpiar el microfiltro de malla del pasaje de aceite del VVT.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoCorolla = {

    objetivo:
        'Preservar la confiabilidad legendaria del Toyota Corolla, optimizar la eficiencia de combustible y asegurar la longevidad del sistema Híbrido HSD y transmisión CVT.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 10.000 km o 1 año utilizando aceite 100% sintético specification Toyota (0W-16 en Dynamic Force 2.0L / Hybrid, 0W-20 / 5W-30 en motores 1.8L / 2.0L ZR).'
        },

        {
            nombre: 'Filtro de aire de motor y filtro de cabina (Polen)',
            accion:
                'Inspeccionar en cada mantenimiento y reemplazar cada 15.000 km a 20.000 km.'
        },

        {
            nombre: 'Bujías de Iridio de Larga Duración',
            accion:
                'Reemplazar cada 90.000 km a 100.000 km según manual de usuario Toyota.'
        },

        {
            nombre: 'Líquido de Frenos',
            accion:
                'Reemplazar fluido DOT 4 cada 40.000 km o 2 años (atención especial al procedimiento de purga en modelos Híbridos).'
        },

        {
            nombre: 'Fluido de Transmisión CVT / e-CVT (Toyota Genuine FE / WS)',
            accion:
                'Inspeccionar en cada servicio; se recomienda reemplazo preventivo cada 60.000 km a 80.000 km.'
        },

        {
            nombre: 'Mantenimiento del filtro de la batería Híbrida (HV)',
            accion:
                'Inspeccionar y limpiar el filtro/rejilla del ventilador de la batería HV ubicado bajo el asiento trasero cada 10.000 km.'
        },

        {
            nombre: 'Refrigerante Toyota Super Long Life Coolant (SLLC)',
            accion:
                'Primer cambio a los 150.000 km o 7 años; posteriormente cada 80.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadCorolla = [

    'En versiones Corolla Hybrid, NUNCA manipule los cables de color naranja, el inversor de alta tensión ni la batería HV de 201V sin desconectar el "Service Plug" (Inversor de seguridad) y usar guantes aislantes de Clase 0 (1000V).',

    'Asegúrese de que el testigo "READY" esté completamente apagado en el tablero de instrumentos antes de realizar intervenciones en el compartimiento del motor en vehículos Híbridos.',

    'Utilice torres de seguridad sobre los puntos reforzados del chasis al levantar el vehículo para mantenimiento de frenos o suspensión.',

    'Al cambiar fluido en transmisiones e-CVT / CVT, utilice estrictamente el fluido especificado por Toyota (CVT Fluid FE / WS); el uso de fluidos genéricos destruirá los componentes internos.',

    'Utilice protección ocular al manipular limpia-carburadores o desengrasantes cerca del cuerpo de aceleración electrónico.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosCorolla = [

    {
        id: 1,

        titulo: 'Introducción al Toyota Corolla y Motores ZR / Dynamic Force',

        nivel: 'Básico',

        descripcion:
            'Identificación de los motores 1.8L 2ZR, 2.0L 3ZR y Dynamic Force M20A, cajas de fusibles y puntos de servicio.',

        temas: [
            'Arquitectura de motores Toyota Serie ZR y M20A',
            'Sistemas Dual VVT-i y VVT-iE',
            'Ubicación de fusileras y puntos de masa',
            'Especificaciones de fluidos Toyota (SLLC, CVT FE, WS)'
        ]
    },

    {
        id: 2,

        titulo: 'Mecánica de Distribución y Calibración Dual VVT-i',

        nivel: 'Intermedio',

        descripcion:
            'Procedimientos para reemplazo de cadena de distribución, solenoides OCV y sincronización de motores Toyota.',

        temas: [
            'Marcas de tiempo en la cadena de distribución',
            'Diagnóstico de válvulas OCV y variadores VVT-i',
            'Sustitución de bomba de agua y termostato',
            'Especificaciones y torques de apriete'
        ]
    },

    {
        id: 3,

        titulo: 'Sistema Híbrido Toyota HSD (Hybrid Synergy Drive)',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico del sistema híbrido de 4ª generación, batería HV, transmisor e-CVT y motores generadores MG1/MG2.',

        temas: [
            'Procedimientos de seguridad con alta tensión',
            'Diagnóstico de la batería HV y equilibrado de celdas',
            'Limpieza del ventilador y filtro de la batería híbrida',
            'Diagnóstico con escáner Toyota Techstream'
        ]
    },

    {
        id: 4,

        titulo: 'Transmisiones CVT MultiDrive y Direct Shift (Launch Gear)',

        nivel: 'Avanzado',

        descripcion:
            'Mantenimiento, procedimiento de nivelación de fluido CVT y resolución de tirones o códigos DTC de transmisión.',

        temas: [
            'Diferencias entre CVT convencional y Direct Shift con Launch Gear',
            'Procedimiento de ajuste de nivel de fluido CVT por reboce',
            'Solenoides de presión de polea y engranaje de arranque',
            'Diagnóstico de códigos del módulo TCM'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioCorolla = [

    {
        termino: 'Dual VVT-i',
        significado:
            'Dual Variable Valve Timing with Intelligence. Sistema de variación continua e independiente del tiempo de apertura de las válvulas de admisión y escape.'
    },

    {
        termino: 'HSD / Hybrid',
        significado:
            'Hybrid Synergy Drive. Tecnología híbrida autorecargable patentada por Toyota que combina un motor térmico Atkinson con motores eléctricos MG1 y MG2.'
    },

    {
        termino: 'Dynamic Force',
        significado:
            'Generación de motores Toyota caracterizados por una eficiencia térmica superior al 40%, inyección D-4S y alta velocidad de combustión.'
    },

    {
        termino: 'D-4S',
        significado:
            'Direct and Port Injection 4-Stroke Superior. Sistema de inyección dual que combina inyectores directos e indirectos según la carga de trabajo.'
    },

    {
        termino: 'e-CVT',
        significado:
            'Transmisión electrónica continuamente variable utilizada en modelos Híbridos, compuesta por un tren planetario que acopla MG1, MG2 y el motor térmico.'
    },

    {
        termino: 'TSS / Toyota Safety Sense',
        significado:
            'Paquete de asistencias avanzadas a la conducción (ADAS) de Toyota que incluye frenado autónomo, control crucero adaptativo y mantenimiento de carril.'
    },

    {
        termino: 'SLLC',
        significado:
            'Super Long Life Coolant. Líquido refrigerante de color rosa especificado por Toyota con intervalos extendidos de sustitución.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoCorolla(anio, configuracion) {

    const sintomasMapeados = fallasComunesCorolla.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente al Toyota Corolla ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasCorolla.basicas,
            ...herramientasCorolla.diagnostico
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

                titulo: 'Motor y Gestión Electrónica Toyota',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            hibrido: {

                titulo: 'Sistema Híbrido HSD / Eléctrico',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Batería Híbrida y Voltaje 12V',

                        sintomas: [

                            {
                                titulo: 'Aviso de Mantenimiento de Batería Híbrida o pérdida de modo EV',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Verificación de la rejilla de ventilación, filtro de aire del asiento trasero y estado de celdas.',

                                herramientas: [
                                    'Escáner OBD2 / Toyota Techstream',
                                    'Multímetro digital',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Verificar que la rejilla del ventilador de la batería HV (asiento trasero) no esté tapada por objetos o pelusas.',
                                    '2. Desmontar el filtro de la rejilla y realizar la limpieza con aspiradora o aire a baja presión.',
                                    '3. Escanear el módulo de control HV para revisar la temperatura de los bloques de celdas.',
                                    '4. Comprobar la tensión de la batería auxiliar de 12V en el baúl o vano motor.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Transmisión CVT y e-CVT',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Transmisiones Automáticas Toyota',

                        sintomas: [

                            {
                                titulo: 'Tirones o retardo al acelerar desde cero en transmisión CVT',

                                dificultad: 'Avanzado 🔴',

                                descripcion:
                                    'Análisis del fluido Toyota CVT FE y funcionamiento del Launch Gear o cuerpo de válvulas.',

                                herramientas: [
                                    'Escáner OBD2 / Techstream',
                                    'Cazoleta de filtro de 64mm',
                                    'Bandeja de recolección'
                                ],

                                pasos: [
                                    '1. Verificar la ausencia de códigos DTC en el módulo TCM de la transmisión.',
                                    '2. Inspeccionar la temperatura del fluido y verificar el nivel mediante el perno de rebose.',
                                    '3. Evaluar el estado de degradación del fluido CVT FE.',
                                    '4. Reemplazar fluido CVT y filtro en caso de haber superado el kilometraje de mantenimiento.'
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
// MODELOS INDIVIDUALES POR AÑO (TOYOTA COROLLA 2012 - 2026)
// ============================================================

// --- 11ª GENERACIÓN (2012 - 2019) ---

export const toyotaCorolla2012 = {

    marca: 'Toyota',

    modelo: 'Corolla',

    anio: 2012,

    tipo: 'Sedán',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2011_Toyota_Corolla_%28ZRE152R_MY11%2)3_Ascent_sedan_%282011-06-15%29_01.jpg/1200px-2011_Toyota_Corolla_%28ZRE152R_MY11%29_Ascent_sedan_%282011-06-15%29_01.jpg',

    descripcion:
        'Plataforma educativa para Toyota Corolla 2012 (11ª Generación E150/E170 con motores 1.8L 2ZR-FE y 2.0L 3ZR-FE Dual VVT-i).',

    informacionHistorica: {

        titulo: 'Toyota Corolla 2012',

        generacion: '11ª Generación (Plataforma E150 / E170)',

        familiaMotor: '1.8L 2ZR-FE / 2.0L 3ZR-FE DOHC 16V',

        tipoMotor: 'Motor de 4 cilindros en línea e inyección multipunto EFI',

        arquitectura: 'DOHC 16 válvulas con Dual VVT-i',

        alimentacion: 'Inyección Electrónica Multipunto EFI',

        encendido: 'Electrónico directo DIS / COP',

        refrigeracion: 'Refrigeración líquida con líquido Toyota SLLC',

        distribucion: 'Cadena de distribución de alta durabilidad',

        transmision: 'Manual de 6 velocidades / Automática de 4 velocidades / CVT'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor del Toyota Corolla 2012?',

        explicacion:
            'Un motor atmosférico de 4 cilindros con bloque de aluminio y variadores continuos Dual VVT-i diseñados para ofrecer máxima durabilidad con mínimo requerimiento de mantenimiento.',

        formulaSimple:
            'Aire + combustible + Dual VVT-i + compresión + chispa = suavidad y longevidad',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba eléctrica',
            'Rampa e Inyectores EFI',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague / Convertidor de torque',
            'Caja de cambios',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposCorolla,

    componentesMotor: sistemasMotorCorolla,

    sistemaCombustible: sistemaCombustibleCorolla,

    sistemaEncendido: sistemaEncendidoCorolla,

    refrigeracion: {

        tipo: 'Refrigeración líquida presurizada',

        elementos: [
            'Radiador de aluminio de celda fina',
            'Bomba de agua por correa',
            'Termostato de flujo de culata',
            'Depósito de expansión',
            'Electroventilador'
        ],

        funcionamiento:
            'El líquido refrigerante absorbe el calor del motor y lo disipa eficientemente al circular por el radiador.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba de engranajes',

        componentes: [
            'Cárter de aluminio',
            'Bomba de aceite',
            'Filtro de aceite cartucho / roscado',
            'Galerías internas'
        ],

        funcionamiento:
            'Circula aceite 0W-20 / 5W-30 hacia el cigüeñal, variadores Dual VVT-i y tensor de cadena.'
    },

    distribucion: {

        titulo: 'Distribución por cadena',

        tipo: 'Cadena metálica con tensor hidráulico',

        funcion:
            'Mantiene la sincronización exacta entre cigüeñal y árboles de levas.',

        advertencia:
            'Utilice aceite con la viscosidad homologada para asegurar la presión del tensor hidráulico.'
    },

    diagnosticoGeneral: diagnosticoGeneralCorolla,

    fallasComunes: fallasComunesCorolla,

    herramientas: herramientasCorolla,

    mantenimiento: mantenimientoCorolla,

    cursos: cursosCorolla,

    seguridad: seguridadCorolla,

    glosario: glosarioCorolla,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2012,
            {
                tecnologia: '11ª Generación - Inyección EFI Dual VVT-i',

                motorPrincipal: '1.8L 2ZR-FE (138 HP) / 2.0L 3ZR-FE (145 HP)'
            }
        );
    }
};


export const toyotaCorolla2013 = {

    ...toyotaCorolla2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2013. Diagnóstico de motor, transmisión y mantenimiento preventivo.',

    informacionHistorica: {

        ...toyotaCorolla2012.informacionHistorica,

        titulo: 'Toyota Corolla 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2013,
            {
                tecnologia: '11ª Generación - Inyección EFI Dual VVT-i',

                motorPrincipal: '1.8L 2ZR-FE / 2.0L 3ZR-FE'
            }
        );
    }
};


export const toyotaCorolla2014 = {

    ...toyotaCorolla2013,

    anio: 2014,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/2014_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282014-04-11%29_01.jpg/1200px-2014_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282014-04-11%29_01.jpg',

    descripcion:
        'Plataforma educativa para Toyota Corolla 2014 (Rediseño de la 11ª Generación E170 con caja CVT MultiDrive de 7 marchas simuladas).',

    informacionHistorica: {

        ...toyotaCorolla2013.informacionHistorica,

        titulo: 'Toyota Corolla 2014 (E170)',

        anio: 2014,

        modeloHistorico: 'Corolla Rediseño E170'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2014,
            {
                tecnologia: '11ª Generación E170 - Dual VVT-i / CVT MultiDrive',

                motorPrincipal: '1.8L 2ZR-FE / 2.0L 3ZR-FE'
            }
        );
    }
};


export const toyotaCorolla2015 = {

    ...toyotaCorolla2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2015. Mantenimiento de la transmisión CVT, sensores y frenos.',

    informacionHistorica: {

        ...toyotaCorolla2014.informacionHistorica,

        titulo: 'Toyota Corolla 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2015,
            {
                tecnologia: '11ª Generación E170 - Dual VVT-i / CVT MultiDrive',

                motorPrincipal: '1.8L 2ZR-FE / 2.0L 3ZR-FE'
            }
        );
    }
};


export const toyotaCorolla2016 = {

    ...toyotaCorolla2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2016. Diagnóstico de variadores VVT-i, bobinas y suspensión.',

    informacionHistorica: {

        ...toyotaCorolla2015.informacionHistorica,

        titulo: 'Toyota Corolla 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2016,
            {
                tecnologia: '11ª Generación E170 - Dual VVT-i / CVT',

                motorPrincipal: '1.8L 2ZR-FE / 2.0L 3ZR-FE'
            }
        );
    }
};


export const toyotaCorolla2017 = {

    ...toyotaCorolla2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2017 (Facelift 11ª Generación con control de estabilidad VSC de serie).',

    informacionHistorica: {

        ...toyotaCorolla2016.informacionHistorica,

        titulo: 'Toyota Corolla 2017',

        anio: 2017,

        modeloHistorico: 'Corolla Facelift E170'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2017,
            {
                tecnologia: '11ª Generación Facelift - Dual VVT-i / CVT',

                motorPrincipal: '1.8L 2ZR-FE / 2.0L 3ZR-FE'
            }
        );
    }
};


export const toyotaCorolla2018 = {

    ...toyotaCorolla2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2018. Mantenimiento del motor 2.0L Dual VVT-i y transmisión CVT.',

    informacionHistorica: {

        ...toyotaCorolla2017.informacionHistorica,

        titulo: 'Toyota Corolla 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2018,
            {
                tecnologia: '11ª Generación Facelift - Dual VVT-i / CVT',

                motorPrincipal: '1.8L 2ZR-FE / 2.0L 3ZR-FE'
            }
        );
    }
};


export const toyotaCorolla2019 = {

    ...toyotaCorolla2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2019 (Cierre de la 11ª Generación en Latinoamérica).',

    informacionHistorica: {

        ...toyotaCorolla2018.informacionHistorica,

        titulo: 'Toyota Corolla 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2019,
            {
                tecnologia: '11ª Generación - Dual VVT-i / CVT MultiDrive',

                motorPrincipal: '1.8L 2ZR-FE / 2.0L 3ZR-FE'
            }
        );
    }
};


// --- 12ª GENERACIÓN (TNGA / DYNAMIC FORCE / HYBRID 2020 - 2026) ---

export const toyotaCorolla2020 = {

    ...toyotaCorolla2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2020_Toyota_Corolla_Ascent_Sport_sedan_%28ZRE212R%29%2C_front_11.10.20.jpg/1200px-2020_Toyota_Corolla_Ascent_Sport_sedan_%28ZRE212R%29%2C_front_11.10.20.jpg',

    descripcion:
        'Plataforma educativa para Toyota Corolla 2020 (12ª Generación / Chasis TNGA-C / Lanzamiento de versión 1.8L Híbrida HSD y 2.0L Dynamic Force con CVT Direct Shift).',

    informacionHistorica: {

        titulo: 'Toyota Corolla 2020 (TNGA)',

        generacion: '12ª Generación (Plataforma TNGA-C E210)',

        familiaMotor: '1.8L 2ZR-FXE Hybrid / 2.0L Dynamic Force M20A-FKS D-4S',

        tipoMotor: '4 cilindros en línea ciclo Atkinson (Híbrido) o 4 cil D-4S (Gasolina)',

        arquitectura: 'DOHC 16V VVT-i / VVT-iE',

        alimentacion: 'Inyección Indirecta Atkinson (Hybrid) / Inyección Dual D-4S (Dynamic Force)',

        encendido: 'Electrónico directo DIS / Módulo HV HSD',

        refrigeracion: 'Refrigeración presurizada con bombas de agua eléctricas y mecánicas',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'e-CVT (Híbrido) / CVT Direct Shift con Launch Gear (2.0L) / Manual 6V'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2020,
            {
                tecnologia: '12ª Generación TNGA - Híbrido 1.8L HSD / Dynamic Force 2.0L D-4S',

                motorPrincipal: '1.8L Hybrid (122 HP combinado) / 2.0L Dynamic Force (170 HP)'
            }
        );
    }
};


export const toyotaCorolla2021 = {

    ...toyotaCorolla2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2021. Mantenimiento de la batería Híbrida, caja e-CVT y motor Dynamic Force.',

    informacionHistorica: {

        ...toyotaCorolla2020.informacionHistorica,

        titulo: 'Toyota Corolla 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2021,
            {
                tecnologia: '12ª Generación TNGA - Híbrido 1.8L / Dynamic Force 2.0L',

                motorPrincipal: '1.8L Hybrid / 2.0L Dynamic Force D-4S'
            }
        );
    }
};


export const toyotaCorolla2022 = {

    ...toyotaCorolla2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2022. Diagnóstico del sistema Toyota Safety Sense (TSS) y mantenimiento HSD.',

    informacionHistorica: {

        ...toyotaCorolla2021.informacionHistorica,

        titulo: 'Toyota Corolla 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2022,
            {
                tecnologia: '12ª Generación TNGA - Híbrido 1.8L / Dynamic Force 2.0L',

                motorPrincipal: '1.8L Hybrid / 2.0L Dynamic Force D-4S'
            }
        );
    }
};


export const toyotaCorolla2023 = {

    ...toyotaCorolla2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2023 (Facelift 12ª Generación / Potencia híbrida incrementada e instrumental digital).',

    informacionHistorica: {

        ...toyotaCorolla2022.informacionHistorica,

        titulo: 'Toyota Corolla 2023',

        anio: 2023,

        modeloHistorico: 'Corolla TNGA Facelift'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2023,
            {
                tecnologia: '12ª Generación Facelift - Híbrido HSD Quinta Gen / Dynamic Force',

                motorPrincipal: '1.8L Hybrid (140 HP) / 2.0L Dynamic Force'
            }
        );
    }
};


export const toyotaCorolla2024 = {

    ...toyotaCorolla2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2020_Toyota_Corolla_Ascent_Sport_sedan_%28ZRE212R%29%2C_front_11.10.20.jpg/1200px-2020_Toyota_Corolla_Ascent_Sport_sedan_%28ZRE212R%29%2C_front_11.10.20.jpg',

    descripcion:
        'Plataforma educativa para Toyota Corolla 2024. Diagnóstico de inyección D-4S, transmisión e-CVT y mantenimiento HSD.',

    informacionHistorica: {

        ...toyotaCorolla2023.informacionHistorica,

        titulo: 'Toyota Corolla 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2024,
            {
                tecnologia: '12ª Generación - Híbrido 5ª Gen HSD / Dynamic Force 2.0L',

                motorPrincipal: '1.8L Hybrid / 2.0L Dynamic Force D-4S'
            }
        );
    }
};


export const toyotaCorolla2025 = {

    ...toyotaCorolla2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2025. Diagnóstico avanzadas de alta tensión, transmisión CVT y electrónica.',

    informacionHistorica: {

        ...toyotaCorolla2024.informacionHistorica,

        titulo: 'Toyota Corolla 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2025,
            {
                tecnologia: '12ª Generación - Híbrido 1.8L HSD / Dynamic Force 2.0L',

                motorPrincipal: '1.8L Hybrid / 2.0L Dynamic Force D-4S'
            }
        );
    }
};


export const toyotaCorolla2026 = {

    ...toyotaCorolla2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Toyota Corolla 2026. Diagnóstico completo de motorización térmica, híbrida y asistencias TSS.',

    informacionHistorica: {

        ...toyotaCorolla2025.informacionHistorica,

        titulo: 'Toyota Corolla 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoCorolla(
            2026,
            {
                tecnologia: '12ª Generación - Híbrido 1.8L HSD / Dynamic Force 2.0L',

                motorPrincipal: '1.8L Hybrid / 2.0L Dynamic Force D-4S'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE TOYOTA COROLLA
// ============================================================

export const toyotaCorolla = {

    marca: 'Toyota',

    modelo: 'Corolla',

    tipo: 'Sedán',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2020_Toyota_Corolla_Ascent_Sport_sedan_%28ZRE212R%29%2C_front_11.10.20.jpg/1200px-2020_Toyota_Corolla_Ascent_Sport_sedan_%28ZRE212R%29%2C_front_11.10.20.jpg',

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

        2012: toyotaCorolla2012,

        2013: toyotaCorolla2013,

        2014: toyotaCorolla2014,

        2015: toyotaCorolla2015,

        2016: toyotaCorolla2016,

        2017: toyotaCorolla2017,

        2018: toyotaCorolla2018,

        2019: toyotaCorolla2019,

        2020: toyotaCorolla2020,

        2021: toyotaCorolla2021,

        2022: toyotaCorolla2022,

        2023: toyotaCorolla2023,

        2024: toyotaCorolla2024,

        2025: toyotaCorolla2025,

        2026: toyotaCorolla2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
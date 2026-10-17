const sistemasMotorStepway = [
    {
        nombre: 'Bloque del motor (Serie K4M 1.6L 16V / HR16DE - H4M 1.6L 16V)',
        funcion:
            'Estructura de hierro fundido (K4M) o aluminio ligero (H4M) que alberga cilindros, cigüeñal y galerías presurizadas de lubricación y refrigeración.',
        fallas: [
            'Fugas de aceite por el empaque del cárter o retén de cigüeñal (lado caja / distribución)',
            'Fugas de refrigerante por la caja termostática de plástico en la culata',
            'Sensibilidad al uso de lubricante fuera de especificación (usar 10W-40 / 5W-40 RN0700 en K4M o 5W-30 RN17 en H4M)',
            'Deformación del empaque de culata por episodios de sobrecalentamiento'
        ]
    },

    {
        nombre: 'Culata DOHC 16V con VVT (en motores H4M / HR16DE)',
        funcion:
            'Aloja válvulas de admisión/escape, bujías e inyectores. En motores H4M incluye variador de fase VVT en admisión.',
        fallas: [
            'Fuga de aceite por el empaque de la tapa de válvulas (muy común en motor K4M)',
            'Obstrucción del solenoide VVT por aceite contaminado o sedimentos',
            'Soplado del empaque de culata tras fallas en la bomba de agua o termostato',
            'Ruido de impulsadores/impulsadores hidráulicos en arranques en frío (K4M)'
        ]
    },

    {
        nombre: 'Árboles de levas y Actuador VVT',
        funcion:
            'Controlan la apertura de las 16 válvulas. En el motor H4M, el actuador VVT optimiza el par motor a bajas y medias RPM.',
        fallas: [
            'Códigos de error de posición de árbol de levas (P0011 / P0016 en motor H4M)',
            'Desgaste de levas por diferir los cambios de aceite',
            'Pérdida de potencia y respuesta perezosa al acelerar por solenoide VVT atascado'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Fricción',
        funcion:
            'Transforma la fuerza de la combustión en rotación hacia la transmisión manual de 5 velocidades o caja CVT X-Tronic.',
        fallas: [
            'Fuga por el retén de cigüeñal trasero (lado volante de inercia/embrague)',
            'Desgaste en casquetes de biela y bancada por falta de presión de aceite',
            'Juego axial del cigüeñal'
        ]
    },

    {
        nombre: 'Pistones y Anillos de Fricción Reducida',
        funcion:
            'Soportan la fuerza de expansión de la combustión y la transmiten a las bielas manteniendo la estanqueidad.',
        fallas: [
            'Anillos rascadores de aceite pegados por carbonilla y aceite degradado',
            'me Consumo progresivo de aceite en unidades con alto kilometraje',
            'Cascabeleo o detonación por acumulación de depósitos en la cámara'
        ]
    },

    {
        nombre: 'Correa de Distribución (K4M) / Cadena de Distribución (H4M)',
        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y los dos árboles de levas.',
        fallas: [
            'Ruptura o salto de correa de distribución en motor K4M por superar intervalo (crítico: dobla válvulas)',
            'Estiramiento de la cadena de distribución en motor H4M por cambios de aceite prolongados',
            'Sonajero metálico en frío por tensor hidráulico pegado en motor H4M'
        ]
    },

    {
        nombre: 'Sistema de Enfriamiento Presurizado por Líquido Glaceol RX Type D',
        funcion:
            'Mantiene la temperatura de trabajo entre 88°C y 98°C mediante bomba de agua, radiador y electroventilador de 2 velocidades.',
        fallas: [
            'Fisura o deformación en la caja termostática de plástico (fuga constante de refrigerante)',
            'Termostato pegado en posición cerrada',
            'Fallo de la velocidad lenta del electroventilador por resistencia quemada'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba de Engranajes',
        funcion:
            'Suministra caudal y presión de aceite a las galerías del bloque, variador VVT y apoyos de levas.',
        fallas: [
            'Testigo de aceite encendido en ralentí por filtro obstruido o trampa de aceite tapada',
            'Fuga por el interruptor de presión de aceite (trompo de aceite)',
            'Formación de lodos por mezclar lubricantes no compatibles'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleStepway = {

    titulo: 'Sistema de Inyección Electrónica Multipunto MPFI / Siemens Sirius / Continental / Valeo',

    funcionamiento:
        'La bomba sumergida presuriza la línea (~3.5 bar). La computadora de motor (ECU) gestiona los inyectores y la mariposa electrónica o pasos a paso analizando datos de los sensores MAP, temperatura de aire/agua y sondas de oxígeno.',

    componentes: [
        'Tanque de combustible plástico de alta resistencia',
        'Módulo de bomba eléctrica e indicador de nivel (In-tank)',
        'Filtro de gasolina de línea externa (bajo la carrocería)',
        'Rampa de inyección de aluminio / composite',
        'Inyectores multipunto de alta atomización',
        'Cuerpo de aceleración electrónico (Drive-by-Wire)',
        'Sensor MAP (Presión Absoluta del Múltiple)',
        'Sensor de oxígeno primario y secundario',
        'Unidad de Control de Motor (ECU Renault Siemens/Continental)'
    ],

    flujo: [
        '1. La bomba eléctrica presuriza la línea de combustible a ~3.5 bar.',
        '2. El combustible pasa por el filtro de línea antes de ingresar a la rampa.',
        '3. La ECU calcula la masa de aire con el sensor MAP y activa los inyectores por pulso.',
        '4. Los inyectores rocián gasolina hacia la parte posterior de las válvulas de admisión.',
        '5. La sonda Lambda monitorea el escape y ajusta las correcciones de mezcla (Fuel Trim).'
    ],

    diagnostico: [
        'Medir presión de combustible en la rampa (~3.2 a 3.5 bar en ralentí).',
        'Escanear códigos de corrección de mezcla (P0171 mezcla pobre / P0172 mezcla rica).',
        'Limpiar el cuerpo de aceleración electrónico y reprogramar el aprendizaje de mariposa con escáner.',
        'Verificar el estado del filtro de gasolina externo.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoStepway = {

    titulo: 'Sistema de Encendido Directo por Bobinas Lápiz COP / Tipo Bloque',

    funcionamiento:
        'En motor K4M se utilizan 4 bobinas tipo lápiz independientes conectadas en serie/paralelo o bobina de bloque de 4 salidas. En motor H4M se emplean 4 bobinas COP independientes sobre cada bujía.',

    componentes: [
        {
            nombre: 'Computadora ECU Renault',
            funcion:
                'Procesa la señal del sensor captador de volante (Avión/CKP) y conmuta la masa de las bobinas.'
        },

        {
            nombre: 'Sensor de Posición de Cigüeñal (Captador PMS / Avión)',
            funcion:
                'Lee los dientes del volante de inercia para determinar RPM y posición de pistones.'
        },

        {
            nombre: 'Bobinas de Encendido Lápiz (COP)',
            funcion:
                'Transforman los 12V de batería en chispas de alto voltaje (~25.000V).'
        },

        {
            nombre: 'Bujías de Estructura Multielectrodo / Iridio',
            funcion:
                'Producen el arco eléctrico para inflamar la mezcla dentro del cilindro.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el voltaje de la batería de 12V (mínimo 12.4V en reposo).',
        'Limpiar o reemplazar el sensor de posición de cigüeñal (Captador PMS/Avión) y su arnés.',
        'Escanear códigos de falla buscando DTC P0335 / P0336.',
        'Probar continuidad y resistencia en los conectores de las bobinas lápiz.',
        'Inspeccionar el estado y luz de electrodos de las bujías.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposStepway = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende desde el Punto Muerto Superior (PMS). Las válvulas de admisión se abren y la mezcla aire/combustible es aspirada al cilindro.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Ingresar la mayor masa de aire y combustible a la cámara de combustión.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla. Ambas válvulas permanecen cerradas. El variador VVT (en H4M) optimiza el instante de cierre.',

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
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía enciende la mezcla comprimida. La violenta expansión de gases empuja el pistón hacia abajo generando la potencia motriz.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Convertir la energía química del combustible en trabajo mecánico.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende expulsando los gases quemados a través de la válvula de escape abierta hacia el catalizador de tres vías.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Vaciar completamente el cilindro para recibir una nueva carga limpia.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasStepway = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 11mm, 13mm, 16mm, 17mm, 18mm, 19mm)',
        'Juego de llaves Torx (T20, T25, T30, T40, T50) y Allen',
        'Destornilladores de pala, estrella y extractores de grapas plásticas',
        'Gato hidráulico de patín y torres de elevación con apoyo reforzado',
        'Llave de bujías delgada de 16mm (5/8")',
        'Bandeja de recolección de aceite y embudo graduado'
    ],

    diagnostico: [
        'Escáner OBD2 / Renault Clip (CAN Clip) / PyREN con lectura de ECM, BCM, ABS, CVT',
        'Multímetro digital automotriz',
        'Manómetro de presión de gasolina con acoples rápidos de 8mm / 10mm',
        'Probador de batería de 12V y alternador',
        'Compresímetro para rosca de 14mm'
    ],

    profesional: [
        'Torquímetro graduado de 1/4, 3/8 y 1/2 pulgada',
        'Kit de traba y calado de árboles de levas y cigüeñal para motores Renault K4M / Nissan H4M',
        'Extractor de polea de cigüeñal y retenes',
        'Escáner con función de aprendizaje de cuerpo de aceleración y reset de transmisión CVT'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralStepway = {

    principio:
        'Diagnóstico estructurado. Comprobar la tensión de batería de 12V, limpia conectores y señales de sensores antes de sustituir componentes mecánicos.',

    secuencia: [

        '1. Entrevistar al usuario sobre los síntomas y verificar los testigos activos en el cuadro de instrumentos.',

        '2. Conectar el escáner (Renault Clip u OBD2) y realizar un autoescaneo de todos los módulos (ECM, BCM, ABS, CVT).',

        '3. Anotar los códigos DTC registrados y revisar los datos del cuadro congelado (Freeze Frame).',

        '4. Medir el voltaje de la batería de 12V en reposo (mínimo 12.4V) y caídas de voltaje a masa.',

        '5. Analizar datos en vivo (RPM, presión MAP, temperatura ECT, estado de la sonda de oxígeno).',

        '6. Inspeccionar cables de encendido, bobinas lápiz, arneses y mangueras de vacío.',

        '7. Realizar pruebas mecánicas físicas (Presión de gasolina en rampa, prueba de compresión).',

        '8. Reemplazar o reparar el componente defectuoso con repuestos de calidad OEM (Renault / Motrio).',

        '9. Borrar los códigos de avería almacenados.',

        '10. Ejecutar procedimientos de aprendizaje del cuerpo de aceleración o mandos si aplica.',

        '11. Realizar prueba de ruta y escaneo final de confirmación.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesStepway = [

    {
        titulo: 'Ralentí inestable, oscilaciones en RPM o apague del motor al detenerse',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración electrónico sucio con depósitos de aceite/carbón',
            'Fuga de vacío en los orrings/empaques del múltiple de admisión de plástico',
            'Bobinas lápiz de encendido aisladas o con fuga de corriente a masa (muy común en K4M)',
            'Sensor MAP con lecturas erróneas por suciedad'
        ],

        diagnostico: [
            'Desmontar y limpiar la mariposa del cuerpo de aceleración electrónico.',
            'Reemplazar los empaques de caucho (orrings) del múltiple de admisión.',
            'Probar sulfatación o fisuras en las bobinas lápiz de encendido.',
            'Verificar lectura del sensor MAP en ralentí (~30 a 36 kPa).'
        ]
    },

    {
        titulo: 'Fuga de refrigerante por la caja termostática (Plástica)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Deformación por calor de la caja termostática de plástico sobre la culata',
            'Empaque de la caja termostática degradado'
        ],

        diagnostico: [
            'Inspeccionar manchas de color verde o amarillo de refrigerante seco bajo la caja termostática.',
            'Comprobar el nivel en el vaso de expansión.',
            'Sustituir la caja termostática (se recomienda versión metálica/aluminio de reemplazo) y empaque.'
        ]
    },

    {
        titulo: 'El motor da marcha pero no enciende (Falla de captador PMS / Avión)',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Sensor de posición de cigüeñal (Captador PMS) sucio con viruta metálica o defectuoso',
            'Conector/arnés del captador PMS sulfatado o con falso contacto',
            'Falta de presión en la bomba de gasolina'
        ],

        diagnostico: [
            'Retirar y limpiar la punta magnética del captador PMS sobre la carcasa de la caja.',
            'Comprobar la resistencia de la bobina del sensor PMS (~200 a 250 Ω).',
            'Verificar si hay pulso de inyección y chispa durante el arranque.'
        ]
    },

    {
        titulo: 'Tirones o retardo al acelerar en transmisión CVT X-Tronic (Modelos 2020+)',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Líquido de transmisión CVT (NS-3) degradado o fuera de nivel',
            'Sobrecalentamiento del fluido CVT en tráfico pesado o pendientes exigentes',
            'Filtro del enfriador de la transmisión CVT obstruido'
        ],

        diagnostico: [
            'Escanear el módulo de transmisión TCM buscando códigos de presión o temperatura.',
            'Verificar el nivel de fluido CVT mediante el procedimiento de rebose con escáner.',
            'Reemplazar fluido CVT NS-3 y filtro del enfriador si superó el periodo de mantenimiento.'
        ]
    },

    {
        titulo: 'Ruido metálico en la suspensión delantera al transitar por terrenos destapados',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Bieletas de la barra estabilizadora con juego o rótula dañada',
            'Bujes de las tijeras/cazuelas delanteras desgastados',
            'Cazoletas/copelas de los amortiguadores delanteros cedidas'
        ],

        diagnostico: [
            'Inspeccionar la holgura en las rótulas de las bieletas con una palanca.',
            'Revisar fisuras en los bujes de goma de las tijeras inferiores.',
            'Comprobar la holgura superior de los amortiguadores delanteros.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoStepway = {

    objetivo:
        'Asegurar la máxima durabilidad técnica del motor Renault, prevenir la rotura destructiva de la correa de distribución y proteger la transmisión CVT.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 10.000 km o 1 año utilizando aceite sintético 10W-40 / 5W-40 con aprobación RN0700 (K4M) o 5W-30 RN17 (H4M).'
        },

        {
            nombre: 'Kit de Distribución y Correa de Accesorios (Motores K4M)',
            accion:
                'Reemplazar el kit completo de distribución (correa, tensores y bomba de agua) cada 50.000 km o 3 años (CRÍTICO: Evita doblar válvulas).'
        },

        {
            nombre: 'Cadena de Distribución (Motores H4M / HR16DE)',
            accion:
                'Inspeccionar tensión cada 60.000 km; reemplazar cadena y patines si aparece sonajero en frío.'
        },

        {
            nombre: 'Filtro de aire y filtro de cabina (Polen)',
            accion:
                'Inspeccionar en cada cambio de aceite y reemplazar cada 15.000 km.'
        },

        {
            nombre: 'Filtro de gasolina de línea externa',
            accion:
                'Reemplazar el filtro de combustible externo cada 15.000 km a 20.000 km.'
        },

        {
            nombre: 'Bujías de encendido y Bobinas',
            accion:
                'Reemplazar bujías cada 20.000 km (K4M) o 40.000 km (H4M). Inspeccionar sellado de bobinas lápiz.'
        },

        {
            nombre: 'Líquido de frenos',
            accion:
                'Reemplazar fluido DOT 4 cada 40.000 km o 2 años.'
        },

        {
            nombre: 'Fluido de Transmisión CVT X-Tronic (Fluido NS-3)',
            accion:
                'Inspeccionar en cada servicio; se recomienda reemplazo de fluido CVT NS-3 cada 50.000 km a 60.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadStepway = [

    'NUNCA sostenga el vehículo únicamente con el gato hidráulico al trabajar debajo; utilice torres de seguridad colocadas en las pestañas reforzadas del chasis.',

    'En motores K4M, respete rigurosamente el intervalo de cambio de la correa de distribución; su rotura ocasiona la colisión catastrófica entre pistones y válvulas.',

    'No retire la tapa del vaso de expansión cuando el motor esté caliente para evitar severas quemaduras con refrigerante a alta presión.',

    'Desconecte el borne negativo de la batería de 12V antes de manipular conectores de la ECU, alternador o motor de arranque.',

    'Utilice anteojos de seguridad y guantes al sustituir el filtro de gasolina externo para protegerse de salpicaduras a presión.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosStepway = [

    {
        id: 1,

        titulo: 'Introducción a la Plataforma Renault Stepway / Sandero Stepway',

        nivel: 'Básico',

        descripcion:
            'Aprende sobre la arquitectura de chasis elevado B0, motores K4M y H4M, fusileras y mantenimiento preventivo.',

        temas: [
            'Identificación de versiones Stepway I, II y Facelift',
            'Diferencias entre motores K4M 16V y H4M 16V',
            'Ubicación de fusileras vano motor e interior',
            'Especificaciones de fluidos Renault (Glaceol RX D, Elf/Castrol RN)'
        ]
    },

    {
        id: 2,

        titulo: 'Mecánica y Calado de Distribución Motor K4M 1.6L 16V',

        nivel: 'Intermedio',

        descripcion:
            'Procedimiento técnico detallado para la sustitución del kit de distribución, calado de árboles de levas con regla traba y tapones.',

        temas: [
            'Uso del kit de herramientas de traba Renault para K4M',
            'Sincronización exacta del cigüeñal y piñones de levas',
            'Sustitución de la bomba de agua y caja termostática',
            'Torques de apriete y sello de la tapa de culata'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica y Diagnóstico con Renault Clip / PyREN',

        nivel: 'Intermedio',

        descripcion:
            'Diagnóstico del sistema de inyección multipunto, lecturas de sensores MAP, captador PMS y cuerpo de aceleración.',

        temas: [
            'Uso de escáner de diagnóstico Renault Clip / PyREN',
            'Diagnóstico de fallas de encendido por bobinas lápiz',
            'Análisis de datos en vivo de sondas de oxígeno y Fuel Trims',
            'Procedimiento de aprendizaje del cuerpo de aceleración'
        ]
    },

    {
        id: 4,

        titulo: 'Transmisión CVT X-Tronic y Caja Manual JR5',

        nivel: 'Avanzado',

        descripcion:
            'Mantenimiento preventivo, reemplazo de fluido CVT NS-3, cambio de embrague en caja JR5 y alineación de selectores.',

        temas: [
            'Funcionamiento de la transmisión CVT X-Tronic',
            'Procedimiento de verificación de nivel de fluido CVT por rebose',
            'Diagnóstico por escáner de presiones y solenoides TCM',
            'Cambio del kit de embrague y actuador hidráulico'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioStepway = [

    {
        termino: 'K4M',
        significado:
            'Familia de motores Renault de 4 cilindros, 1.6 litros, 16 válvulas DOHC con bloque de hierro y distribución por correa dentada.'
    },

    {
        termino: 'H4M / HR16DE',
        significado:
            'Motor desarrollado en la alianza Renault-Nissan de 1.6 litros, 16 válvulas, bloque de aluminio, distribución por cadena y variador VVT.'
    },

    {
        termino: 'CVT X-Tronic',
        significado:
            'Transmisión de variación continua desarrollada por Jatco/Nissan adaptada a modelos Renault para optimizar la eficiencia.'
    },

    {
        termino: 'Captador PMS',
        significado:
            'Sensor de Posición de Cigüeñal (sensor de avión). Sensor inductivo que detecta los dientes del volante de inercia.'
    },

    {
        termino: 'Glaceol RX Type D',
        significado:
            'Líquido refrigerante de tecnología orgánica de color verde/amarillo especificado oficialmente por Renault.'
    },

    {
        termino: 'RN0700 / RN17',
        significado:
            'Normas y homologaciones oficiales de aceite de motor desarrolladas por el grupo Renault.'
    },

    {
        termino: 'Plataforma B0',
        significado:
            'Plataforma global para vehículos compactos y crossover caracterizada por su alta robustez y suspensión reforzada.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoStepway(anio, configuracion) {

    const sintomasMapeados = fallasComunesStepway.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente al Renault Stepway ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasStepway.basicas,
            ...herramientasStepway.diagnostico
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

                titulo: 'Motor y Gestión Electrónica Renault',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico y Captador PMS',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido y Captador de Volante',

                        sintomas: [

                            {
                                titulo: 'El motor no da arranque o no reconoce la señal de posición de cigüeñal',

                                dificultad: 'Básico 🟢',

                                descripcion:
                                    'Revisión del sensor captador PMS (Avión), conector de arnés y batería de 12V.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Escáner OBD2 / Renault Clip',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Verificar que el voltaje de la batería esté por encima de 12.4V en reposo.',
                                    '2. Desmontar el captador PMS ubicado en la carcasa del volante y limpiar virutas magnéticas.',
                                    '3. Medir la resistencia del captador PMS con el multímetro (alrededor de 200 - 250 Ω).',
                                    '4. Inspeccionar la presencia de sulfatación en el conector del arnés.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Transmisión Manual JR5 y CVT X-Tronic',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Caja de Cambios y Transmisión',

                        sintomas: [

                            {
                                titulo: 'Tirones o retardo al acelerar en transmisión CVT X-Tronic',

                                dificultad: 'Avanzado 🔴',

                                descripcion:
                                    'Análisis del fluido CVT NS-3, nivel por rebose y presión de aceite de transmisión.',

                                herramientas: [
                                    'Escáner OBD2 / Renault Clip',
                                    'Herramientas manuales',
                                    'Bandeja de recolección'
                                ],

                                pasos: [
                                    '1. Conectar el escáner y verificar códigos de avería en el módulo TCM.',
                                    '2. Verificar la temperatura de trabajo del fluido CVT e inspeccionar el nivel por el perno de rebose.',
                                    '3. Evaluar el estado de degradación del líquido NS-3.',
                                    '4. Reemplazar fluido CVT y filtros si ha superado el kilometraje de mantenimiento.'
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
// MODELOS INDIVIDUALES POR AÑO (RENAULT STEPWAY 2012 - 2026)
// ============================================================

// --- 1ª GENERACIÓN STEPWAY (2012 - 2015) ---

export const renaultStepway2012 = {

    marca: 'Renault',

    modelo: 'Stepway',

    anio: 2012,

    tipo: 'Hatchback Crossover',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Renault_Sandero_Stepway_1.6_16V_Rip_Curl_2012_%2815147575971%29.jpg/1200px-Renault_Sandero_Stepway_1.6_16V_Rip_Curl_2012_%2815147575971%29.jpg',

    descripcion:
        'Plataforma educativa para Renault Stepway 2012 (1ª Generación / Motor K4M 1.6L 16V DOHC de 110 HP y caja manual JR5 de 5 velocidades).',

    informacionHistorica: {

        titulo: 'Renault Stepway 2012 (1ª Gen)',

        generacion: 'Primera generación (Plataforma B0)',

        familiaMotor: '1.6L K4M DOHC 16V',

        tipoMotor: 'Motor de 4 cilindros en línea e inyección multipunto MPFI',

        arquitectura: 'DOHC 16 Válvulas',

        alimentacion: 'Inyección Electrónica Multipunto MPFI',

        encendido: 'Electrónico directo por bobinas lápiz (COP)',

        refrigeracion: 'Refrigeración presurizada con Glaceol RX Type D',

        distribucion: 'Correa dentada de distribución (Cambio cada 50.000 km)',

        transmision: 'Manual JR5 de 5 velocidades'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor del Renault Stepway 2012?',

        explicacion:
            'Un motor atmosférico de 4 cilindros y 16 válvulas de comprobada durabilidad técnica con bloque de hierro y culata de aluminio que entrega excelente empuje en altas revoluciones.',

        formulaSimple:
            'Aire + gasolina MPFI + compresión + chispa de bobina lápiz = movimiento ágil',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba eléctrica de 3.5 bar',
            'Filtro externo',
            'Rampa e inyectores MPFI',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague mecánico',
            'Caja manual de 5V JR5',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposStepway,

    componentesMotor: sistemasMotorStepway,

    sistemaCombustible: sistemaCombustibleStepway,

    sistemaEncendido: sistemaEncendidoStepway,

    refrigeracion: {

        tipo: 'Refrigeración presurizada con Glaceol RX Type D',

        elementos: [
            'Radiador de aluminio',
            'Bomba de agua impulsada por correa de distribución',
            'Caja termostática plástica',
            'Vaso de expansión transparente',
            'Electroventilador de 2 velocidades'
        ],

        funcionamiento:
            'El refrigerante Glaceol circula por las galerías del bloque para disipar el calor al pasar por las celdas del radiador.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba de engranajes',

        componentes: [
            'Cárter de aleación',
            'Bomba de aceite',
            'Filtro de aceite roscado',
            'Conductos internos'
        ],

        funcionamiento:
            'Impulsa lubricante 10W-40 / 5W-40 RN0700 hacia el cigüeñal, casquetes y árboles de levas.'
    },

    distribucion: {

        titulo: 'Distribución por correa dentada',

        tipo: 'Correa dentada de caucho con tensores de ajuste manual/dinámico',

        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y los dos árboles de levas.',

        advertencia:
            'CRÍTICO: Sustituir kit de distribución cada 50.000 km para prevenir el doblado de válvulas por rotura de correa.'
    },

    diagnosticoGeneral: diagnosticoGeneralStepway,

    fallasComunes: fallasComunesStepway,

    herramientas: herramientasStepway,

    mantenimiento: mantenimientoStepway,

    cursos: cursosStepway,

    seguridad: seguridadStepway,

    glosario: glosarioStepway,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2012,
            {
                tecnologia: '1ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M (110 HP)'
            }
        );
    }
};


export const renaultStepway2013 = {

    ...renaultStepway2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Renault Stepway 2013. Mantenimiento del motor K4M, correa de distribución y suspensiones.',

    informacionHistorica: {

        ...renaultStepway2012.informacionHistorica,

        titulo: 'Renault Stepway 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2013,
            {
                tecnologia: '1ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M (110 HP)'
            }
        );
    }
};


export const renaultStepway2014 = {

    ...renaultStepway2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Renault Stepway 2014. Diagnóstico de inyección, caja termostática y bobinas lápiz.',

    informacionHistorica: {

        ...renaultStepway2013.informacionHistorica,

        titulo: 'Renault Stepway 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2014,
            {
                tecnologia: '1ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M (110 HP)'
            }
        );
    }
};


export const renaultStepway2015 = {

    ...renaultStepway2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Renault Stepway 2015. Cierre de la 1ª Generación / Guías de servicio técnico.',

    informacionHistorica: {

        ...renaultStepway2014.informacionHistorica,

        titulo: 'Renault Stepway 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2015,
            {
                tecnologia: '1ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M (110 HP)'
            }
        );
    }
};


// --- 2ª GENERACIÓN STEPWAY (2016 - 2019) ---

export const renaultStepway2016 = {

    ...renaultStepway2015,

    anio: 2016,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Renault_Sandero_Stepway_1.6_Privilege_2016_%2832007802964%29.jpg/1200px-Renault_Sandero_Stepway_1.6_Privilege_2016_%2832007802964%29.jpg',

    descripcion:
        'Plataforma educativa para Renault Stepway 2016 (2ª Generación / Rediseño total, tablero digital, dirección asistida y motor K4M 1.6L 16V).',

    informacionHistorica: {

        titulo: 'Renault Stepway 2016 (2ª Gen)',

        generacion: 'Segunda generación (Plataforma B0 Evolución)',

        familiaMotor: '1.6L K4M DOHC 16V',

        tipoMotor: 'Motor de 4 cilindros en línea e inyección multipunto',

        arquitectura: 'DOHC 16 Válvulas',

        alimentacion: 'Inyección Electrónica Multipunto MPFI',

        encendido: 'Electrónico directo COP',

        refrigeracion: 'Refrigeración presurizada Glaceol RX Type D',

        distribucion: 'Correa dentada de distribución',

        transmision: 'Manual JR5 de 5 velocidades'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2016,
            {
                tecnologia: '2ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M (105 HP / 110 HP)'
            }
        );
    }
};


export const renaultStepway2017 = {

    ...renaultStepway2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Renault Stepway 2017. Diagnóstico electrónico de inyección, sensores y frenos ABS.',

    informacionHistorica: {

        ...renaultStepway2016.informacionHistorica,

        titulo: 'Renault Stepway 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2017,
            {
                tecnologia: '2ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M'
            }
        );
    }
};


export const renaultStepway2018 = {

    ...renaultStepway2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Renault Stepway 2018. Mantenimiento del motor K4M, suspensión y cuerpo de aceleración.',

    informacionHistorica: {

        ...renaultStepway2017.informacionHistorica,

        titulo: 'Renault Stepway 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2018,
            {
                tecnologia: '2ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M'
            }
        );
    }
};


export const renaultStepway2019 = {

    ...renaultStepway2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Renault Stepway 2019. Guías de servicio técnico y diagnóstico por escáner Renault Clip.',

    informacionHistorica: {

        ...renaultStepway2018.informacionHistorica,

        titulo: 'Renault Stepway 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2019,
            {
                tecnologia: '2ª Gen - Inyección MPFI K4M 1.6L 16V',

                motorPrincipal: '1.6L K4M'
            }
        );
    }
};


// --- 2ª GENERACIÓN FACELIFT (2020 - 2026 / MOTOR HR16DE - H4M Y CVT) ---

export const renaultStepway2020 = {

    ...renaultStepway2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Renault_Sandero_Stepway_Intens_1.6_CVT_2020.jpg/1200px-Renault_Sandero_Stepway_Intens_1.6_CVT_2020.jpg',

    descripcion:
        'Plataforma educativa para Renault Stepway 2020 (Facelift 2ª Gen / Lanzamiento del nuevo motor H4M 1.6L 16V de origen Nissan con cadena de distribución, control de estabilidad ESP e introducción de la caja CVT X-Tronic).',

    informacionHistorica: {

        titulo: 'Renault Stepway 2020 (Facelift H4M / CVT)',

        generacion: 'Segunda generación Facelift',

        familiaMotor: '1.6L H4M / HR16DE DOHC 16V VVT',

        tipoMotor: 'Motor de 4 cilindros de aluminio e inyección multipunto',

        arquitectura: 'DOHC 16 Válvulas con VVT',

        alimentacion: 'Inyección Electrónica Multipunto MPFI',

        encendido: 'Electrónico directo COP',

        refrigeracion: 'Refrigeración presurizada Glaceol RX Type D',

        distribucion: 'Cadena de distribución de baja fricción libre de mantenimiento periódico',

        transmision: 'Manual de 5 velocidades / Automática CVT X-Tronic de 6 marchas simuladas'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2020,
            {
                tecnologia: '2ª Gen Facelift - Motor H4M 1.6L Cadena / CVT X-Tronic',

                motorPrincipal: '1.6L H4M / HR16DE (111 HP - 115 HP)'
            }
        );
    }
};


export const renaultStepway2021 = {

    ...renaultStepway2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Renault Stepway 2021. Mantenimiento de la transmisión CVT X-Tronic, cadena H4M y sistema ESP.',

    informacionHistorica: {

        ...renaultStepway2020.informacionHistorica,

        titulo: 'Renault Stepway 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2021,
            {
                tecnologia: '2ª Gen Facelift - Motor H4M 1.6L VVT / CVT X-Tronic',

                motorPrincipal: '1.6L H4M'
            }
        );
    }
};


export const renaultStepway2022 = {

    ...renaultStepway2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Renault Stepway 2022. Diagnóstico del variador VVT, sensores de rueda ABS y acelerador.',

    informacionHistorica: {

        ...renaultStepway2021.informacionHistorica,

        titulo: 'Renault Stepway 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2022,
            {
                tecnologia: '2ª Gen Facelift - Motor H4M 1.6L VVT / CVT',

                motorPrincipal: '1.6L H4M'
            }
        );
    }
};


export const renaultStepway2023 = {

    ...renaultStepway2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Renault Stepway 2023. Guías de servicio técnico, fluido CVT NS-3 y diagnóstico general.',

    informacionHistorica: {

        ...renaultStepway2022.informacionHistorica,

        titulo: 'Renault Stepway 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2023,
            {
                tecnologia: '2ª Gen Facelift - Motor H4M 1.6L VVT / CVT X-Tronic',

                motorPrincipal: '1.6L H4M'
            }
        );
    }
};


export const renaultStepway2024 = {

    ...renaultStepway2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Renault_Sandero_Stepway_Intens_1.6_CVT_2020.jpg/1200px-Renault_Sandero_Stepway_Intens_1.6_CVT_2020.jpg',

    descripcion:
        'Plataforma educativa para Renault Stepway 2024 (Edición Intens / Zen con motor H4M 1.6L 16V).',

    informacionHistorica: {

        ...renaultStepway2023.informacionHistorica,

        titulo: 'Renault Stepway 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2024,
            {
                tecnologia: '2ª Gen Facelift - Motor H4M 1.6L 16V VVT',

                motorPrincipal: '1.6L H4M (111 HP)'
            }
        );
    }
};


export const renaultStepway2025 = {

    ...renaultStepway2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Renault Stepway 2025. Diagnóstico de inyección, escaneo con Renault Clip y mantenimientos.',

    informacionHistorica: {

        ...renaultStepway2024.informacionHistorica,

        titulo: 'Renault Stepway 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2025,
            {
                tecnologia: '2ª Gen Facelift - Motor H4M 1.6L VVT / CVT',

                motorPrincipal: '1.6L H4M'
            }
        );
    }
};


export const renaultStepway2026 = {

    ...renaultStepway2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Renault Stepway 2026. Diagnóstico completo del motor H4M, transmisión CVT X-Tronic e inyección electrónica.',

    informacionHistorica: {

        ...renaultStepway2025.informacionHistorica,

        titulo: 'Renault Stepway 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoStepway(
            2026,
            {
                tecnologia: '2ª Gen Facelift - Motor H4M 1.6L 16V VVT / CVT X-Tronic',

                motorPrincipal: '1.6L H4M (111 HP)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE RENAULT STEPWAY
// ============================================================

export const renaultStepway = {

    marca: 'Renault',

    modelo: 'Stepway',

    tipo: 'Hatchback Crossover',

    imagen:
        'https://cdn.group.renault.com/ren/co/vehicles/stepway/home/stepway-paisaje2.jpg.ximg.xsmall.jpg/cf3457a613.jpg',

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

        2012: renaultStepway2012,

        2013: renaultStepway2013,

        2014: renaultStepway2014,

        2015: renaultStepway2015,

        2016: renaultStepway2016,

        2017: renaultStepway2017,

        2018: renaultStepway2018,

        2019: renaultStepway2019,

        2020: renaultStepway2020,

        2021: renaultStepway2021,

        2022: renaultStepway2022,

        2023: renaultStepway2023,

        2024: renaultStepway2024,

        2025: renaultStepway2025,

        2026: renaultStepway2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
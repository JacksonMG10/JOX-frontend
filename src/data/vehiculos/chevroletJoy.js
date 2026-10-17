const sistemasMotorJoy = [
    {
        nombre: 'Bloque del motor (Serie SPE/4 1.0L / 1.4L - N14YF)',
        funcion:
            'Estructura de hierro fundido de alta resistencia con culata de aluminio que alberga cilindros, cigüeñal y galerías presurizadas de lubricación y refrigeración.',
        fallas: [
            'Fugas de aceite por empaque de cárter o retén de cigüeñal (lado caja/distribución)',
            'Fugas de refrigerante por carcasa de termostato o toma de agua plástica',
            'Desgaste interno por uso de aceite de viscosidad inadecuada (usar 5W-30 Dexos 1 Gen 2/3)',
            'Sensibilidad a la deformación de empaque de culata tras un sobrecalentamiento'
        ]
    },

    {
        nombre: 'Culata SOHC 8V con Sistema de Bajo Rozamiento',
        funcion:
            'Aloja las 8 válvulas, inyectores multipunto y árbol de levas superior (SOHC) impulsado por correa dentada.',
        fallas: [
            'Fuga de aceite por el empaque de la tapa de válvulas',
            'Soplado de empaque de culata por fallas en el electroventilador o termostato',
            'Desgaste en impulsadores/balancines por lubricación deficiente',
            'Ruido de taqués hidráulicos en arranques en frío'
        ]
    },

    {
        nombre: 'Árbol de levas SOHC y Balancines Flotantes',
        funcion:
            'Controla la apertura y cierre de las válvulas de admisión y escape mediante un solo árbol de levas superior.',
        fallas: [
            'Desgaste de levas por diferir los cambios de aceite',
            'Juego excesivo o golpeteo metálico en la zona superior de culata',
            'Código de falla P0300 (falso encendido múltiple) por desincronización leve'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Fricción Reducida',
        funcion:
            'Convierte la fuerza de la combustión en movimiento giratorio hacia la caja de cambios manual de 5 o 6 velocidades.',
        fallas: [
            'Fuga de aceite por retén trasero de cigüeñal (lado volante de inercia)',
            'Desgaste de casquetes de biela y bancada por trabajar con nivel bajo de aceite',
            'Juego axial de cigüeñal'
        ]
    },

    {
        nombre: 'Pistones y Anillos de Baja Fricción SPE/4',
        funcion:
            'Se desplazan dentro de los cilindros y transmiten la fuerza de la expansión a las bielas con peso reducido.',
        fallas: [
            'Anillos rascadores de aceite pegados por acumulación de hollín y aceite degradado',
            'Consumo progresivo de aceite de motor en unidades de alto kilometraje',
            'Cascabeleo / detonación por uso de gasolina de bajo octanaje o acumulación de carbón'
        ]
    },

    {
        nombre: 'Correa de Distribución (Tiempo) y Tensor Mecánico',
        funcion:
            'Mantiene la sincronización milimétrica entre el cigüeñal y el árbol de levas.',
        fallas: [
            'Ruptura o salto de dientes de la correa por superar el intervalo de cambio (crítico: interferencia de válvulas)',
            'Ruido de zumbido o chillido por tensor desgastado o sobretensado',
            'Contaminación de la correa por fugas de aceite en retenes de levas/cigüeñal'
        ]
    },

    {
        nombre: 'Sistema de Enfriamiento Presurizado con Dex-Cool',
        funcion:
            'Mantiene la temperatura del motor entre 90°C y 102°C usando bomba de agua, radiador, termostato y electroventilador de 2 velocidades.',
        fallas: [
            'Fisura en el depósito de expansión de plástico o tapa presurizada defectuosa',
            'Termostato pegado en posición cerrada (recalentamiento rápido)',
            'Fuga en la bomba de agua impulsada por la correa de distribución'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba de Trocoide',
        funcion:
            'Suministra presión constante de aceite a través del filtro de flujo total hacia casquetes y árbol de levas.',
        fallas: [
            'Testigo de presión de aceite encendido en ralentí (bomba desgastada o colador tapado)',
            'Filtro de aceite obstruido o ensuciado por lodos',
            'Fuga de aceite en el interruptor de presión (trompo de aceite)'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleJoy = {

    titulo: 'Sistema de Inyección Electrónica Multipunto MPFI / SPE/4',

    funcionamiento:
        'La bomba de combustible sumergida en el tanque envía gasolina a presión fija (4.2 bar). La computadora del motor (ECM MULTEC / ACDelco) dosifica la inyección analizando las señales del sensor MAP, TPS, temperatura y sondas de oxígeno.',

    componentes: [
        'Tanque de combustible plástico de alta densidad',
        'Módulo de bomba eléctrica e indicador de nivel (In-tank)',
        'Filtro de combustible de línea externa (bajo el chasis)',
        'Rampa de inyección metálica',
        'Inyectores de 4 orificios multipunto (MPFI)',
        'Cuerpo de aceleración electrónico (Drive-by-Wire)',
        'Sensor MAP (Presión Absoluta del Múltiple)',
        'Sensor de oxígeno primario (A/F) y secundario (Post-catalizador)',
        'Modulo de Control del Motor (ECM ACDelco)'
    ],

    flujo: [
        '1. La bomba en el tanque presuriza la línea de combustible a ~4.2 bar.',
        '2. La gasolina pasa por el filtro de línea y llega al riel de inyección.',
        '3. La ECM calcula la masa de aire por lectura del MAP y activa los inyectores.',
        '4. La mezcla aire/gasolina ingresa por las válvulas de admisión a la cámara.',
        '5. La sonda Lambda monitorea el escape y ajusta la corrección de combustible (Fuel Trim).'
    ],

    diagnostico: [
        'Medir la presión de combustible en la válvula Schrader de la rampa (~4.0 - 4.2 bar).',
        'Escanear códigos de corrección de combustible (P0171 mezcla pobre / P0172 mezcla rica).',
        'Comprobar la pulso e impedancia de los inyectores multipunto.',
        'Realizar limpieza y aprendizaje del cuerpo de aceleración electrónico si oscilan las RPM.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoJoy = {

    titulo: 'Sistema de Encendido Electrónico Directo DIS (Bobina Unifilar/Cuádruple)',

    funcionamiento:
        'El módulo ECM procesa la señal del sensor de posición de cigüeñal (CKP) y activa la bobina de encendido múltiple (pack de 4 salidas), enviando chispa de alta tensión a través de cables de alta resistencia hacia las bujías.',

    componentes: [
        {
            nombre: 'Computadora ECM ACDelco',
            funcion:
                'Calcula el avance de chispa y conmuta la masa de los devanados primarios de la bobina.'
        },

        {
            nombre: 'Sensor de Posición de Cigüeñal (CKP)',
            funcion:
                'Lee la rueda fónica de 60-2 dientes en el cigüeñal para identificar RPM y PMS.'
        },

        {
            nombre: 'Módulo de Bobina de Encendido Múltiple (DIS)',
            funcion:
                'Transforma los 12V de batería en descargas de más de 25.000 voltios.'
        },

        {
            nombre: 'Cables de Alta Tensión y Bujías de Níquel/Iridio',
            funcion:
                'Conducen la chispa y generan la chispa eléctrica dentro del cilindro.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el voltaje de la batería (mínimo 12.4V en reposo).',
        'Revisar el fusible del sistema de gestión de motor y relé principal en la fusilera del vano motor.',
        'Escanear códigos DTC buscando fallas en la señal del sensor CKP (P0335 / P0336).',
        'Medir resistencia de los cables de alta tensión (debe estar entre 2kΩ y 8kΩ por cable).',
        'Comprobar la holgura de electrodos en las bujías (0.8mm - 0.9mm).'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposJoy = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende desde el Punto Muerto Superior (PMS). La válvula de admisión se abre y la mezcla aire/gasolina ingresa al cilindro conducida por el múltiple.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Llenar el cilindro con la mayor cantidad de mezcla combustible posible.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende hacia el PMS. Ambas válvulas permanecen cerradas y la mezcla es comprimida en la cámara de la culata (relación ~12.6:1 en SPE/4).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y temperatura de la mezcla antes del brinco de la chispa.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía genera el arco eléctrico. La mezcla se inflama violentamente y los gases en expansión empujan con fuerza el pistón hacia abajo.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el trabajo mecánico y torque que impulsa el vehículo.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende impulsando los gases quemados a través de la válvula de escape abierta hacia el múltiple y catalizador.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Vaciar completamente la cámara para comenzar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasJoy = {

    basicas: [
        'Juego de llaves y copas milimétricas (7mm, 8mm, 10mm, 12mm, 13mm, 15mm, 17mm, 19mm)',
        'Juego de copas Torx hembra (E10, E12, E14) y llaves Torx macho (T20, T25, T30, T45)',
        'Destornilladores de pala, estrella y palancas de plástico para molduras',
        'Gato hidráulico de patín y torres de elevación con apoyos de goma',
        'Llave de bujías de 16mm (5/8")',
        'Bandeja de recolección de aceite y embudo graduado'
    ],

    diagnostico: [
        'Escáner OBD2 / Chevrolet GDS2 / MDI con lectura de ECM, BCM, ABS, Airbag',
        'Multímetro digital automotriz con medición de frecuencia y ciclo útil',
        'Manómetro de presión de combustible con acople rápido tipo Schrader (0-6 bar)',
        'Probador de batería de 12V y sistema de carga del alternador',
        'Compresímetro con acople de rosca de 14mm'
    ],

    profesional: [
        'Torquímetro graduado de 1/4, 3/8 y 1/2 pulgada',
        'Herramienta de traba para el piñón del árbol de levas y volante de motor Chevrolet SPE/4',
        'Extractor de retenes y polea de cigüeñal',
        'Escáner con función de aprendizaje de variación de posición de cigüeñal (CKP Relearn)'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralJoy = {

    principio:
        'Diagnóstico metódico. Confirmar voltaje de batería, masa de motor y estado de la correa de distribución antes de sustituir componentes mecánicos.',

    secuencia: [

        '1. Entrevistar al usuario sobre los síntomas y verificar los testigos activos en el tablero digital.',

        '2. Realizar un escaneo electrónico completo de todos los módulos (ECM, BCM, ABS, SRS).',

        '3. Anotar los códigos DTC almacenados y revisar los datos congelados (Freeze Frame).',

        '4. Medir el voltaje de la batería en reposo (debe ser mayor a 12.4V) y caídas de voltaje en masa.',

        '5. Analizar datos en vivo (RPM, presión MAP, temperatura ECT, Fuel Trims).',

        '6. Inspeccionar cables de alta, bobina de encendido, conectores y mangueras de vacío.',

        '7. Realizar pruebas mecánicas físicas (Presión de gasolina en rampa, compresión de cilindros).',

        '8. Reemplazar o reparar el componente defectuoso utilizando repuestos de calidad OEM (ACDelco).',

        '9. Borrar los códigos de avería DTC de la memoria.',

        '10. Efectuar el aprendizaje del cuerpo de aceleración o del sensor CKP si fue necesario.',

        '11. Realizar prueba de ruta y escaneo final de confirmación.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesJoy = [

    {
        titulo: 'Ralentí inestable, jaloneo al acelerar o apague del motor al soltar el pedal',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración electrónico sucio con depósitos de aceite/carbón',
            'Cables de alta tensión o bobina DIS picados o con fuga de corriente',
            'Sensor MAP con lectura alterada por suciedad en la toma del múltiple',
            'Fuga de vacío en la manguera de la válvula PCV'
        ],

        diagnostico: [
            'Desmontar y limpiar la mariposa del cuerpo de aceleración electrónico.',
            'Inspeccionar el estado de los cables de alta y probar chispa en la bobina DIS.',
            'Verificar el valor de presión absoluta (MAP) en ralentí (~28 a 35 kPa).',
            'Revisar grietas en la manguera de ventilación del cárter (PCV).'
        ]
    },

    {
        titulo: 'Dificultad o dureza al ingresar los cambios (Caja Manual de 5/6 velocidades)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Guayas/cables del selector de cambios descalibradas o desgastadas',
            'Nivel bajo o degradación del aceite de transmisión manual (75W-85 Synthetic GM)',
            'Desgaste en el kit de embrague (prensa, disco o rodamiento accionador hidráulico)',
            'Buje del selector de cambios en la consola con juego excesivo'
        ],

        diagnostico: [
            'Verificar el ajuste y calibración del tope del selector de cambios.',
            'Comprobar el nivel de aceite por el tapón de nivel lateral de la caja.',
            'Verificar la purga y pedal de corte del sistema hidráulico de embrague.'
        ]
    },

    {
        titulo: 'Sobrecalentamiento del motor o encendido continuo del electroventilador',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Termostato pegado en posición cerrada',
            'Fuga de refrigerante por la bomba de agua o vaso de expansión',
            'Resistencia de baja velocidad del electroventilador quemada',
            'Tapa presurizada del vaso de expansión con el sello dañado'
        ],

        diagnostico: [
            'Verificar la temperatura de las mangueras superior e inferior del radiador.',
            'Escanear la temperatura de refrigerante ECT (debe acoplar electro ~98°C en baja / ~105°C en alta).',
            'Probar las dos velocidades del electroventilador desde la función de actuadores con el escáner.',
            'Inspeccionar fugas con bomba de presión de radiador.'
        ]
    },

    {
        titulo: 'Fuga de aceite en el costado del motor (Zona de distribución o tapa de válvulas)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Empaque de la tapa de válvulas tostado/cristalizado',
            'Retén de aceite del árbol de levas o retén delantero de cigüeñal con fuga',
            'Empaque de cárter fatigado'
        ],

        diagnostico: [
            'Retirar la cubierta superior de la correa de distribución para evaluar presencia de aceite.',
            'Sustituir el empaque de la tapa de válvulas aplicando sellador RTV en las esquinas de los arcos.',
            'Limpiar la zona y reemplazar la correa de tiempo si resultó contaminada por aceite.'
        ]
    },

    {
        titulo: 'Testigo Check Engine encendido con código de misfire (P0300 / P0301-P0304)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Bobina de encendido DIS agrietada o defectuosa en una de las salidas',
            'Bujías con desgaste excesivo o descalibradas',
            'Inyector atascado o sucio',
            'Falta de aprendizaje del patrón de la rueda fónica (CKP Relearn)'
        ],

        diagnostico: [
            'Revisar la resistencia del primario y secundario del pack de bobina DIS.',
            'Inspeccionar la luz y estado del electrodo de las bujías.',
            'Efectuar prueba de balance de inyectores.',
            'Ejecutar el procedimiento de re-aprendizaje del sensor CKP con escáner.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoJoy = {

    objetivo:
        'Maximizar la economía de combustible, preservar la durabilidad del motor SPE/4 y prevenir roturas catastróficas por la correa de distribución.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 10.000 km o 1 año utilizando aceite 100% sintético 5W-30 con aprobación Dexos 1 Gen 2/3 y filtro ACDelco.'
        },

        {
            nombre: 'Correa de distribución (Tiempo) y tensor',
            accion:
                'Reemplazar el kit completo de distribución (correa y tensor) cada 50.000 km o 3 años (CRÍTICO: Evita doblar válvulas por rotura).'
        },

        {
            nombre: 'Filtro de aire y filtro de cabina (Polen)',
            accion:
                'Inspeccionar en cada cambio de aceite y reemplazar cada 15.000 km.'
        },

        {
            nombre: 'Filtro de combustible (Gasolina)',
            accion:
                'Reemplazar el filtro de línea externa cada 15.000 km a 20.000 km.'
        },

        {
            nombre: 'Bujías y cables de alta tensión',
            accion:
                'Reemplazar bujías cada 30.000 km e inspeccionar cables de alta; sustituir cables cada 60.000 km.'
        },

        {
            nombre: 'Líquido de frenos y embrague',
            accion:
                'Reemplazar fluido DOT 4 cada 40.000 km o 2 años.'
        },

        {
            nombre: 'Refrigerante Dex-Cool (Orgánico Rosa)',
            accion:
                'Drenar y renovar el refrigerante concentrado mezclado 50/50 con agua desmineralizada cada 50.000 km o 3 años.'
        },

        {
            nombre: 'Aceite de Transmisión Manual (75W-85)',
            accion:
                'Inspeccionar nivel cada 20.000 km y reemplazar el fluido sintético cada 60.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadJoy = [

    'NUNCA trabaje bajo el vehículo soportado únicamente por un gato de patín o tijera; utilice siempre torres de seguridad en las pestañas reforzadas del chasis.',

    'No retire la tapa del vaso de expansión con el motor a temperatura de funcionamiento para evitar severas quemaduras por refrigerante Dex-Cool hirviendo.',

    'Desconecte el borne negativo de la batería de 12V antes de realizar trabajos en el sistema de encendido, motor de arranque o alternador.',

    'Respete rigurosamente el intervalo de cambio de la correa de distribución; su rotura provoca el impacto directo de pistones contra válvulas.',

    'Utilice gafas de protección y guantes al sustituir el filtro de gasolina de línea para prevenir salpicaduras en rostro y ojos.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosJoy = [

    {
        id: 1,

        titulo: 'Introducción a la Plataforma Chevrolet Joy / Onix Joy',

        nivel: 'Básico',

        descripcion:
            'Conociendo el motor SPE/4, cajas de fusibles, puntos de elevación, fluidos y mantenimiento de rutina.',

        temas: [
            'Identificación de versiones Hatchback y Sedan Joy',
            'Especificaciones del motor SPE/4 1.0L / 1.4L',
            'Ubicación de fusileras vano motor e interior',
            'Especificaciones de fluidos Dexos 1 y Dex-Cool'
        ]
    },

    {
        id: 2,

        titulo: 'Mecánica de Distribución y Sincronización Motor SPE/4',

        nivel: 'Intermedio',

        descripcion:
            'Aprende el procedimiento paso a paso para el reemplazo seguro de la correa de distribución, bomba de agua y retenes.',

        temas: [
            'Puntos y marcas de tiempo del cigüeñal y árbol de levas',
            'Tensión correcta del tensor automático de distribución',
            'Sustitución de la bomba de agua',
            'Torques de culata y ajuste de tapas'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica MPFI y Diagnóstico ACDelco ECM',

        nivel: 'Intermedio',

        descripcion:
            'Uso de escáner para diagnóstico de sensores MAP, presión de gasolina, encendido DIS y cuerpo de aceleración.',

        temas: [
            'Análisis de datos en vivo con escáner GDS2 / OBD2',
            'Interpretación de DTCs P0300, P0171 y P0107',
            'Prueba y diagnóstico del pack de bobina DIS',
            'Procedimiento de re-aprendizaje del sensor CKP'
        ]
    },

    {
        id: 4,

        titulo: 'Transmisión Manual de 5 y 6 Velocidades y Sistema de Frenos',

        nivel: 'Avanzado',

        descripcion:
            'Diagnóstico de la caja de cambios manual, calibración de guayas selectoras, embrague hidráulico y frenos ABS.',

        temas: [
            'Ajuste del selector de marchas por guayas',
            'Purga y mantenimiento del actuador de embrague',
            'Diagnóstico del sistema ABS y sensores de rueda',
            'Sustitución de discos, pastillas y bandas traseras'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioJoy = [

    {
        termino: 'SPE/4',
        significado:
            'Smart Performance Economy 4-cylinder. Evolución de los motores Chevrolet de 4 cilindros y 8 válvulas orientada a la eficiencia y menor fricción.'
    },

    {
        termino: 'Dexos 1 Gen 2/3',
        significado:
            'Norma de especificación técnica de aceite de motor desarrollada por General Motors para alta protección contra el desgaste.'
    },

    {
        termino: 'Dex-Cool',
        significado:
            'Líquido refrigerante de tecnología orgánica (OAT) de color rosa/naranja especificado por GM para evitar la corrosión interna.'
    },

    {
        termino: 'DIS',
        significado:
            'Direct Ignition System. Sistema de encendido directo que utiliza bobinas sin distribuidor mecánico.'
    },

    {
        termino: 'ECM',
        significado:
            'Engine Control Module. Módulo electrónico central encargado de administrar la inyección, encendido y emisiones del motor.'
    },

    {
        termino: 'CKP Relearn',
        significado:
            'Procedimiento de aprendizaje por escáner de la variación angular de la rueda fónica del cigüeñal.'
    },

    {
        termino: 'SOHC',
        significado:
            'Single Overhead Camshaft. Un solo árbol de levas ubicado en la culata para operar las válvulas de admisión y escape.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoJoy(anio, configuracion) {

    const sintomasMapeados = fallasComunesJoy.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente al Chevrolet Joy ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasJoy.basicas,
            ...herramientasJoy.diagnostico
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

                titulo: 'Motor y Gestión Electrónica Chevrolet',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico y Encendido DIS',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido y Carga',

                        sintomas: [

                            {
                                titulo: 'El motor no enciende o no genera chispa en las bujías',

                                dificultad: 'Básico 🟢',

                                descripcion:
                                    'Revisión del estado de la batería de 12V, fusibles principales y módulo de bobina DIS.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Probador de batería',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Verificar el voltaje de la batería en reposo (debe estar por encima de 12.4V).',
                                    '2. Limpiar la sulfatación de los bornes y conexiones a masa del motor.',
                                    '3. Verificar la integridad de los fusibles del ECM e inyección en la caja del vano motor.',
                                    '4. Comprobar la señal del sensor CKP y la chispa en la bobina DIS durante el arranque.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Transmisión Manual de 5 / 6 Velocidades',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Caja Manual y Selector',

                        sintomas: [

                            {
                                titulo: 'Cambios duros o dificultad para enganchar marchas',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Ajuste del mando por guayas del selector y nivel de aceite de transmisión.',

                                herramientas: [
                                    'Juego de llaves',
                                    'Gato de elevación',
                                    'Torres de seguridad'
                                ],

                                pasos: [
                                    '1. Comprobar el ajuste y alineación del mando del selector de cambios por guayas.',
                                    '2. Verificar el nivel de aceite sintético 75W-85 por el tapón de nivel.',
                                    '3. Inspeccionar el recorrido y purga del pedal del actuador hidráulico de embrague.',
                                    '4. Evaluar el estado del kit de embrague si persiste el rascado en los cambios.'
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
// MODELOS INDIVIDUALES POR AÑO (CHEVROLET JOY 2018 - 2026)
// ============================================================

export const chevroletJoy2018 = {

    marca: 'Chevrolet',

    modelo: 'Joy',

    anio: 2018,

    tipo: 'Hatchback / Sedan',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chevrolet_Onix_Joy_1.0_2019.jpg/1200px-Chevrolet_Onix_Joy_1.0_2019.jpg',

    descripcion:
        'Plataforma educativa para Chevrolet Joy / Onix Joy 2018 (Motor SPE/4 1.0L / 1.4L 8V SOHC y caja manual de 5/6 velocidades).',

    informacionHistorica: {

        titulo: 'Chevrolet Joy 2018',

        generacion: 'Primera generación Joy (Basada en plataforma GSV / Onix I)',

        familiaMotor: '1.0L SPE/4 / 1.4L SPE/4 (N14YF) SOHC 8V',

        tipoMotor: 'Motor de 4 cilindros en línea e inyección multipunto MPFI',

        arquitectura: 'SOHC 8 Válvulas',

        alimentacion: 'Inyección Electrónica Multipunto MPFI',

        encendido: 'Electrónico directo DIS (Pack de bobinas cuádruple)',

        refrigeracion: 'Refrigeración presurizada con líquido Dex-Cool',

        distribucion: 'Correa dentada de distribución (Cambio cada 50.000 km)',

        transmision: 'Manual de 5 velocidades / Manual de 6 velocidades'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor del Chevrolet Joy 2018?',

        explicacion:
            'Un motor atmosférico de 4 cilindros de arquitectura robusta SOHC 8V enfocado en bajo costo operativo, durabilidad y entrega de torque a bajas revoluciones.',

        formulaSimple:
            'Aire + gasolina MPFI + compresión SPE/4 + chispa DIS = movimiento continuo y económico',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba eléctrica de 4.2 bar',
            'Filtro de línea',
            'Rampa e inyectores MPFI',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague hidráulico',
            'Caja manual de 5/6V',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposJoy,

    componentesMotor: sistemasMotorJoy,

    sistemaCombustible: sistemaCombustibleJoy,

    sistemaEncendido: sistemaEncendidoJoy,

    refrigeracion: {

        tipo: 'Refrigeración presurizada con líquido Dex-Cool',

        elementos: [
            'Radiador de aluminio',
            'Bomba de agua impulsada por correa de distribución',
            'Termostato de cera presurizado',
            'Vaso de expansión transparente',
            'Electroventilador de 2 velocidades'
        ],

        funcionamiento:
            'El refrigerante Dex-Cool absorbe el calor del bloque y culata para disiparlo al pasar por el radiador.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba de engranajes',

        componentes: [
            'Cárter de aleación/chapa',
            'Bomba de aceite trocoide',
            'Filtro de aceite roscado ACDelco',
            'Conductos internos de lubricación'
        ],

        funcionamiento:
            'Impulsa aceite sintético 5W-30 Dexos 1 a través del filtro protegiendo casquetes y árbol de levas.'
    },

    distribucion: {

        titulo: 'Distribución por correa dentada',

        tipo: 'Correa dentada de caucho reforzado con tensor dinámico',

        funcion:
            'Mantiene la sincronización entre cigüeñal y árbol de levas.',

        advertencia:
            'CRÍTICO: Sustituir kit de distribución cada 50.000 km para prevenir doblado de válvulas por rotura de correa.'
    },

    diagnosticoGeneral: diagnosticoGeneralJoy,

    fallasComunes: fallasComunesJoy,

    herramientas: herramientasJoy,

    mantenimiento: mantenimientoJoy,

    cursos: cursosJoy,

    seguridad: seguridadJoy,

    glosario: glosarioJoy,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2018,
            {
                tecnologia: '1ª Gen Joy - Inyección MPFI SPE/4 8V',

                motorPrincipal: '1.4L SPE/4 (98 HP) / 1.0L SPE/4 (80 HP)'
            }
        );
    }
};


export const chevroletJoy2019 = {

    ...chevroletJoy2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2019. Mantenimiento del motor SPE/4, kit de distribución y sensores.',

    informacionHistorica: {

        ...chevroletJoy2018.informacionHistorica,

        titulo: 'Chevrolet Joy 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2019,
            {
                tecnologia: '1ª Gen Joy - Inyección MPFI SPE/4 8V',

                motorPrincipal: '1.4L SPE/4 / 1.0L SPE/4'
            }
        );
    }
};


export const chevroletJoy2020 = {

    ...chevroletJoy2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2020 (Denominación independiente Chevrolet Joy / Joy Sedan con caja manual de 6V).',

    informacionHistorica: {

        ...chevroletJoy2019.informacionHistorica,

        titulo: 'Chevrolet Joy 2020',

        anio: 2020,

        modeloHistorico: 'Chevrolet Joy Black / Sedan Edition'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2020,
            {
                tecnologia: 'Chevrolet Joy - Motor SPE/4 con Caja Manual 6V',

                motorPrincipal: '1.4L SPE/4 (98 HP)'
            }
        );
    }
};


export const chevroletJoy2021 = {

    ...chevroletJoy2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2021. Diagnóstico de inyección, bobinas DIS y alineación de guayas.',

    informacionHistorica: {

        ...chevroletJoy2020.informacionHistorica,

        titulo: 'Chevrolet Joy 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2021,
            {
                tecnologia: 'Chevrolet Joy - Inyección MPFI SPE/4',

                motorPrincipal: '1.4L SPE/4'
            }
        );
    }
};


export const chevroletJoy2022 = {

    ...chevroletJoy2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2022. Guías de servicio técnico, frenos ABS y mantenimiento de distribución.',

    informacionHistorica: {

        ...chevroletJoy2021.informacionHistorica,

        titulo: 'Chevrolet Joy 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2022,
            {
                tecnologia: 'Chevrolet Joy - Inyección MPFI SPE/4',

                motorPrincipal: '1.4L SPE/4'
            }
        );
    }
};


export const chevroletJoy2023 = {

    ...chevroletJoy2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2023. Diagnóstico del sistema de refrigeración, bomba de agua y encendido.',

    informacionHistorica: {

        ...chevroletJoy2022.informacionHistorica,

        titulo: 'Chevrolet Joy 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2023,
            {
                tecnologia: 'Chevrolet Joy - Inyección MPFI SPE/4 8V',

                motorPrincipal: '1.4L SPE/4'
            }
        );
    }
};


export const chevroletJoy2024 = {

    ...chevroletJoy2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chevrolet_Onix_Joy_1.0_2019.jpg/1200px-Chevrolet_Onix_Joy_1.0_2019.jpg',

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2024 (Edición Joy Black / Hatchback y Sedan).',

    informacionHistorica: {

        ...chevroletJoy2023.informacionHistorica,

        titulo: 'Chevrolet Joy 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2024,
            {
                tecnologia: 'Chevrolet Joy - Motor SPE/4 1.4L 8V SOHC',

                motorPrincipal: '1.4L SPE/4 (98 HP)'
            }
        );
    }
};


export const chevroletJoy2025 = {

    ...chevroletJoy2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2025. Diagnóstico electrónico, escaneo OBD2 y mantenimientos.',

    informacionHistorica: {

        ...chevroletJoy2024.informacionHistorica,

        titulo: 'Chevrolet Joy 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2025,
            {
                tecnologia: 'Chevrolet Joy - Motor SPE/4 1.4L 8V',

                motorPrincipal: '1.4L SPE/4'
            }
        );
    }
};


export const chevroletJoy2026 = {

    ...chevroletJoy2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Chevrolet Joy 2026. Diagnóstico completo de motor SPE/4, transmisión manual, inyección y mantenimiento.',

    informacionHistorica: {

        ...chevroletJoy2025.informacionHistorica,

        titulo: 'Chevrolet Joy 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoJoy(
            2026,
            {
                tecnologia: 'Chevrolet Joy - Motor SPE/4 1.4L 8V SOHC',

                motorPrincipal: '1.4L SPE/4 (98 HP)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE CHEVROLET JOY
// ============================================================

export const chevroletJoy = {

    marca: 'Chevrolet',

    modelo: 'Joy',

    tipo: 'Hatchback / Sedan',

    imagen:
        'https://leasyauto.com/static/uploads/323dd3b3-4ab3-4560-8cfe-d5a9657e9cea.jpeg',

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

        2018: chevroletJoy2018,

        2019: chevroletJoy2019,

        2020: chevroletJoy2020,

        2021: chevroletJoy2021,

        2022: chevroletJoy2022,

        2023: chevroletJoy2023,

        2024: chevroletJoy2024,

        2025: chevroletJoy2025,

        2026: chevroletJoy2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
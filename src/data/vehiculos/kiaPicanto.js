const sistemasMotorPicanto = [
    {
        nombre: 'Bloque del motor (Serie Kappa 1.0L / 1.25L / T-GDi)',
        funcion:
            'Estructura liviana de aluminio que aloja cilindros, cigüeñal y conductos presurizados de lubricación y refrigeración.',
        fallas: [
            'Fugas de aceite por empaque de cárter o retén de cigüeñal',
            'Fugas de refrigerante por carcasa de termostato o mangueras',
            'Desgaste interno por uso de lubricante fuera de especificación (ej. 10W-40 en lugar de 5W-30 / 0W-20)',
            'Sensibilidad a la deformación de culata por sobrecalentamiento'
        ]
    },

    {
        nombre: 'Culata DOHC 12V / 16V con Dual CVVT',
        funcion:
            'Aloja válvulas de admisión/escape y dobles árboles de levas con variador continuo de fase Dual CVVT.',
        fallas: [
            'Obstrucción en solenoides VVT por aceite contaminado o degradado',
            'Fuga de aceite por la junta de tapa de válvulas',
            'Soplado de empaque de culata por recalentamiento del sistema de refrigeración',
            'Ruido de taqués/impulsadores en arranques en frío'
        ]
    },

    {
        nombre: 'Árboles de levas y Actuadores CVVT',
        funcion:
            'Sincronizan y modifican el tiempo de apertura de válvulas para mejorar el consumo a bajas RPM y la respuesta al acelerar.',
        fallas: [
            'Códigos de avería de posición de árbol de levas (P0011 / P0014)',
            'Sonajero o golpeteo metálico leve al dar arranque en frío',
            'Pérdida de potencia por atascamiento del solenoide CVVT'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Fricción Reducida',
        funcion:
            'Convierte la fuerza de la combustión en movimiento giratorio hacia la transmisión manual o automática.',
        fallas: [
            'Fuga de aceite por retén trasero de cigüeñal (lado volante de inercia)',
            'Desgaste de casquetes por trabajar con bajo nivel de aceite',
            'Juego axial excesivo'
        ]
    },

    {
        nombre: 'Pistones y Anillos de Baja Tensión',
        funcion:
            'Se desplazan dentro de los cilindros y transmiten la energía de la expansión a las bielas.',
        fallas: [
            'Anillos pegados por sedimentación de aceite degradado',
            'Consumo progresivo de aceite de motor',
            'Cascabeleo o detonación por combustible de bajo octanaje o carbón acumulado'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Hidráulico',
        funcion:
            'Mantiene sincronizado el cigüeñal con los árboles de levas de forma permanente.',
        fallas: [
            'Estiramiento de la cadena de distribución por estirar los intervalos de cambio de aceite',
            'Ruido de sonajero metálico constante en la tapa de distribución',
            'Tensor hidráulico pegado o descargado'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración Presurizado',
        funcion:
            'Controla la temperatura del motor con bomba de agua accionada por correa, radiador, termostato y electroventilador.',
        fallas: [
            'Fisura en el depósito de expansión de plástico',
            'Termostato pegado en posición cerrada',
            'Fuga en bomba de agua por el empaque o sello mecánico'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Alta Presión',
        funcion:
            'Circula aceite para proteger partes móviles y suministrar presión a los variadores CVVT y tensor hidráulico.',
        fallas: [
            'Encendido del testigo de presión de aceite en ralentí',
            'Filtro de aceite tapado o sin válvula antirretorno adecuada',
            'Fuga en el interruptor/trompo de presión de aceite'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustiblePicanto = {

    titulo: 'Sistema de Inyección Electrónica Multipunto (MPI) / T-GDi',

    funcionamiento:
        'La bomba de combustible eléctrica envía gasolina a presión constante hacia la rampa. La computadora (ECM) dosifica la inyección evaluando lecturas del sensor MAP, TPS, temperatura y sondas de oxígeno.',

    componentes: [
        'Tanque de combustible',
        'Módulo de bomba eléctrica e indicador de nivel (In-tank)',
        'Filtro de combustible de línea / integrado',
        'Rampa de inyección de aluminio',
        'Inyectores multipunto (MPI) / Inyectores de alta presión (T-GDi)',
        'Cuerpo de aceleración electrónico (Drive-by-Wire)',
        'Sensor MAP (Presión Absoluta del Múltiple)',
        'Sensors de oxígeno de banda ancha (Pre y Post catalizador)',
        'Computadora de gestión de motor (ECM Kia/Hyundai)'
    ],

    flujo: [
        '1. La bomba en el tanque suministra presión a la rampa de inyección.',
        '2. La ECM calcula el tiempo de apertura de inyectores según la masa de aire demandada.',
        '3. La gasolina pulverizada ingresa al colector de admisión y cámara de combustión.',
        '4. Ocurre la combustión y las sondas Lambda ajustan la mezcla en bucle cerrado (Fuel Trim).'
    ],

    diagnostico: [
        'Comprobar presión de combustible en la rampa (~3.5 bar en MPI).',
        'Escanear códigos de falla de mezcla rica/pobre (P0171 / P0172).',
        'Verificar señal de pulso e inyección con osciloscopio o luces Noide.',
        'Inspeccionar limpieza del cuerpo de aceleración si hay oscilación de RPM.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoPicanto = {

    titulo: 'Sistema de Encendido Electrónico Directo (COP)',

    funcionamiento:
        'La ECM recibe la señal de posición del cigüeñal (CKP) y árbol de levas (CMP) para activar directamente cada bobina sobre su respectiva bujía sin necesidad de distribuidores ni cables de alta.',

    componentes: [
        {
            nombre: 'Computadora ECM',
            funcion:
                'Calcula el avance de chispa exacto y activa las bobinas.'
        },

        {
            nombre: 'Sensor de Posición de Cigüeñal (CKP)',
            funcion:
                'Mide RPM y posición angular de los pistones.'
        },

        {
            nombre: 'Bobinas de encendido individuales (COP)',
            funcion:
                'Transforman el voltaje de batería a alta tensión directamente sobre la bujía.'
        },

        {
            nombre: 'Bujías de Iridio / Níquel',
            funcion:
                'Generan la chispa eléctrica para iniciar la detonación de la mezcla.'
        }
    ],

    fallaNoHayChispa: [
        'Medir carga de la batería (mínimo 12.4V en reposo).',
        'Comprobar fusibles del sistema de gestión de motor (Fuselaje del vano motor).',
        'Escanear códigos DTC de señal del sensor CKP/CMP.',
        'Inspeccionar bobinas buscando fisuras o aislamiento quemado.',
        'Verificar el estado y la holgura de electrodos en las bujías.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposPicanto = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende. Las válvulas de admisión se abren y la mezcla aire/gasolina ingresa conducida por el múltiple.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Llenar el cilindro de mezcla combustible de forma homogénea.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla con ambas válvulas cerradas. El sistema Dual CVVT ajusta el cierre óptimo.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar presión y temperatura para una combustión eficiente.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía genera el arco eléctrico. Los gases se expanden violentamente y empujan el pistón hacia abajo.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el trabajo útil y torque del motor.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende expulsando los gases quemados hacia el múltiple y el catalizador.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Evacuar completamente los residuos del cilindro.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasPicanto = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm)',
        'Destornilladores de pala, estrella y palancas para plásticos',
        'Llaves Torx y Allen',
        'Gato hidráulico de patín y torres de seguridad',
        'Llave delgada para bujías de 16mm (5/8")',
        'Bandeja de recolección de fluidos y embudo graduado'
    ],

    diagnostico: [
        'Escáner OBD2 / Kia GDS con lectura de módulos ECM, ABS, EPS, TCM',
        'Multímetro digital automotriz',
        'Manómetro de presión de combustible con acoples rápidos',
        'Probador de batería y sistema de carga de 12V',
        'Compresímetro para rosca de bujía de 14mm'
    ],

    profesional: [
        'Torquímetro graduado en Nm y lb-ft',
        'Herramienta de traba para árboles de levas y cigüeñal Hyundai/Kia Kappa',
        'Extractor de retenes y poleas de accesorios',
        'Escáner con función de aprendizaje y calibración de cuerpo de aceleración'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralPicanto = {

    principio:
        'Diagnóstico metódico. Confirmar el parámetro eléctrico de batería y datos en directo antes de cambiar componentes mecánicos.',

    secuencia: [

        '1. Interrogar al cliente sobre la falla y verificar testigos en el cuadro de instrumentos.',

        '2. Realizar escaneo electrónico completo (ECM, ABS, BCM, EPS).',

        '3. Anotar códigos DTC almacenados y revisar datos de cuadro congelado (Freeze Frame).',

        '4. Medir voltaje de la batería en reposo (debe ser mayor a 12.4V).',

        '5. Analizar datos en tiempo real (RPM, presión MAP, temperatura ECT, Fuel Trims).',

        '6. Revisar cables, masas a chasis y mangueras de vacío del múltiple.',

        '7. Realizar pruebas mecánicas físicas (Presión de gasolina, compresión de cilindros).',

        '8. Reemplazar o reparar la pieza defectuosa.',

        '9. Borrar los códigos DTC de la memoria.',

        '10. Ejecutar procedimiento de reajuste del cuerpo de aceleración.',

        '11. Realizar prueba de ruta y escaneo final de verificación.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesPicanto = [

    {
        titulo: 'Ralentí inestable o apague del motor al detenerse en semáforos',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración electrónico sucio con residuos de carbón',
            'Fuga de vacío en mangueras PCV o juntas del múltiple de admisión',
            'Sensor MAP sucio o con lectura alterada',
            'Bujías desgastadas o descalibradas'
        ],

        diagnostico: [
            'Desmontar e inspeccionar la mariposa del cuerpo de aceleración.',
            'Aplicar limpiador en mangueras de vacío para detectar entradas no medidas de aire.',
            'Comprobar lecturas del sensor MAP en vivo con el escáner.',
            'Inspeccionar la luz de electrodo de las bujías.'
        ]
    },

    {
        titulo: 'Tirones o demora en cambios de transmisión automática (4 cambios / AMT)',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Fluido de transmisión ATF SP-IV degradado o fuera de nivel',
            'Falla en solenoides de cambio de la caja automática',
            'Sensor de velocidad de entrada/salida de caja con lecturas erróneas',
            'Calibración pendiente del actuador en cajas automatizadas (AMT)'
        ],

        diagnostico: [
            'Verificar el nivel y color del fluido de transmisión automática.',
            'Escanear el módulo TCM buscando códigos de solenoides o sensores de velocidad.',
            'Efectuar el re-aprendizaje de la transmisión mediante escáner.'
        ]
    },

    {
        titulo: 'Ruido de chillido agudo al encender o encender el aire acondicionado',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Correa de accesorios / alternador destensada o desgastada',
            'Polea del alternador o tensor de correa con juego'
        ],

        diagnostico: [
            'Inspeccionar la tensión manual y el estado físico de la correa de accesorios.',
            'Verificar que las poleas giren suavemente sin juego axial ni ruidos.'
        ]
    },

    {
        titulo: 'Ruido metálico de golpeteo suave en frío (Zona de distribución)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cadenas de distribución con estiramiento leve',
            'Tensor hidráulico pegado por sedimento de aceite',
            'Viscosidad inadecuada de aceite (ej. 10W-40 o 20W-50 en lugar de 5W-30 / 0W-20)'
        ],

        diagnostico: [
            'Verificar la especificación de aceite de motor utilizada en los últimos mantenimientos.',
            'Escuchar la zona de la tapa de distribución al dar arranque en frío.',
            'Verificar la presión de aceite de motor.'
        ]
    },

    {
        titulo: 'Testigo Check Engine encendido por sistema de emisiones (P0420 / P0133)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor de oxígeno primario o secundario defectuoso o lento',
            'Catalizador saturado por mal estado previo de bujías',
            'Fuga en el empaque del múltiple de escape'
        ],

        diagnostico: [
            'Escanear y revisar la curva de respuesta del sensor de oxígeno primario.',
            'Verificar la diferencia de lectura entre el sensor Pre y Post catalizador.',
            'Inspeccionar fugas de aire en el tubo de escape.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoPicanto = {

    objetivo:
        'Asegurar el máximo ahorro de combustible, proteger la durabilidad de los motores Kappa y prevenir fallas en la transmisión.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 5.000 km (aceite mineral/semisintético) o cada 7.500 - 10.000 km (aceite sintético 5W-30 / 0W-20 API SP).'
        },

        {
            nombre: 'Filtro de aire y filtro de cabina',
            accion:
                'Inspeccionar en cada mantenimiento y reemplazar cada 15.000 km.'
        },

        {
            nombre: 'Bujías de encendido',
            accion:
                'Inspeccionar cada 15.000 km y reemplazar cada 30.000 km (bujías estándar de níquel) o 60.000 km (bujías de iridio).'
        },

        {
            nombre: 'Líquido de frenos',
            accion:
                'Reemplazar el líquido DOT 4 cada 40.000 km o 2 años.'
        },

        {
            nombre: 'Fluido de transmisión (Manual / Automática ATF SP-IV)',
            accion:
                'Inspeccionar nivel periódicamente. Reemplazar aceite de caja manual 75W-85 cada 50.000 km y fluido ATF SP-IV cada 60.000 km.'
        },

        {
            nombre: 'Limpieza de cuerpo de aceleración',
            accion:
                'Efectuar limpieza preventiva cada 20.000 km para garantizar ralentí estable.'
        },

        {
            nombre: 'Correa de accesorios / alternador',
            accion:
                'Inspeccionar tensión cada 10.000 km y reemplazar cada 50.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadPicanto = [

    'Utilice torres de seguridad sobre las pestañas de elevación del chasis al retirar ruedas; nunca trabaje confiando únicamente en un gato de tijera.',

    'No retire la tapa del radiador ni del vaso de expansión con el motor caliente para evitar severas quemaduras con refrigerante hirviendo.',

    'Desconecte el borne negativo de la batería antes de manipular componentes eléctricos, alternador o motor de arranque.',

    'Al reemplazar bujías, asegúrese de apretarlas con el torque especificado para evitar aislar las roscas de aluminio de la culata.',

    'Utilice gafas protectoras al trabajar debajo del vehículo o al limpiar el cuerpo de aceleración con solventes en aerosol.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosPicanto = [

    {
        id: 1,

        titulo: 'Introducción a la Plataforma Kia Picanto',

        nivel: 'Básico',

        descripcion:
            'Identificación de componentes del motor Kappa, cajas de fusibles, puntos de servicio y fluidos.',

        temas: [
            'Identificación de motores 1.0L y 1.25L Kappa',
            'Ubicación de fusilera vano motor e interior',
            'Niveles y especificaciones de fluidos Kia',
            'Mantenimiento preventivo periódico'
        ]
    },

    {
        id: 2,

        titulo: 'Mecánica y Distribución en Motores Kappa Dual CVVT',

        nivel: 'Intermedio',

        descripcion:
            'Aprende los procedimientos de puesta a punto de la cadena de distribución, solenoides CVVT y culata.',

        temas: [
            'Marcas de tiempo de cadena de distribución',
            'Diagnóstico de variadores Dual CVVT',
            'Reemplazo de bomba de agua y termostato',
            'Torques de culata y aprietes'
        ]
    },

    {
        id: 3,

        titulo: 'Inyección Electrónica y Diagnóstico OBD2 en Kia',

        nivel: 'Intermedio',

        descripcion:
            'Uso de escáner para análisis de sensores MAP, Fuel Trims, mariposa electrónica y encendido COP.',

        temas: [
            'Interpretación de DTCs más comunes en Kia',
            'Monitoreo de STFT y LTFT',
            'Prueba de bobinas COP y bujías',
            'Ajuste del cuerpo de aceleración'
        ]
    },

    {
        id: 4,

        titulo: 'Transmisiones Automáticas y Cajas Manuales',

        nivel: 'Avanzado',

        descripcion:
            'Mantenimiento, cambio de fluido ATF SP-IV y diagnóstico de fallas en transmisión de Kia Picanto.',

        temas: [
            'Nivelación y cambio de fluido ATF SP-IV',
            'Diagnóstico de solenoides de cambio',
            'Ajuste de embrague y guayas en cajas manuales',
            'Mantenimiento del sistema de dirección asistida (MDPS)'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioPicanto = [

    {
        termino: 'Kappa',
        significado:
            'Familia de motores de 3 y 4 cilindros ultra compactos de aluminio desarrollada por Hyundai/Kia.'
    },

    {
        termino: 'Dual CVVT',
        significado:
            'Continuously Variable Valve Timing. Sistema de variación continua del tiempo de apertura de válvulas tanto en admisión como en escape.'
    },

    {
        termino: 'MPI',
        significado:
            'Multi-Point Injection. Sistema de inyección de combustible multipunto indirecta.'
    },

    {
        termino: 'T-GDi',
        significado:
            'Turbocharged Gasoline Direct Injection. Inyección directa de gasolina alimentada por turbocargador.'
    },

    {
        termino: 'MDPS / EPS',
        significado:
            'Motor Driven Power Steering. Sistema de dirección asistida impulsado por un motor eléctrico montado en la columna.'
    },

    {
        termino: 'ATF SP-IV',
        significado:
            'Especificación oficial de fluido de baja viscosidad para transmisiones automáticas de Kia/Hyundai.'
    },

    {
        termino: 'ECM',
        significado:
            'Engine Control Module. Módulo o computadora central encargada de la gestión del motor.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoPicanto(anio, configuracion) {

    const sintomasMapeados = fallasComunesPicanto.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente al Kia Picanto ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasPicanto.basicas,
            ...herramientasPicanto.diagnostico
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

                titulo: 'Motor y Gestión Electrónica Kia',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Eléctrico / Encendido / Dirección MDPS',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido y Carga',

                        sintomas: [

                            {
                                titulo: 'El motor gira lento o no logra encender',

                                dificultad: 'Básico 🟢',

                                descripcion:
                                    'Verificación de carga de batería de 12V, bornes y motor de arranque.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Probador de batería',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Verificar la tensión de la batería en reposo (debe ser superior a 12.4V).',
                                    '2. Limpiar sulfatación en bornes de batería y conexiones a masa.',
                                    '3. Verificar la caída de voltaje al momento de dar arranque.',
                                    '4. Comprobar chispa y presión de gasolina si la batería está en óptimas condiciones.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Transmisión y Embrague',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Caja Manual y Automática',

                        sintomas: [

                            {
                                titulo: 'Dificultad para entrar los cambios o trepidación en embrague',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Inspección de guaya/mando de embrague y estado del disco.',

                                herramientas: [
                                    'Juego de llaves',
                                    'Gato de elevación',
                                    'Torres de seguridad'
                                ],

                                pasos: [
                                    '1. Verificar el ajuste y juego libre del pedal o guaya de embrague.',
                                    '2. Comprobar el nivel de aceite de la transmisión manual (75W-85).',
                                    '3. Inspeccionar el estado de los soportes/soportes de motor y caja.',
                                    '4. Evaluar reemplazo del kit de embrague (disco, prensa y balinera).'
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
// MODELOS INDIVIDUALES POR AÑO (KIA PICANTO 2011 - 2026)
// ============================================================

// --- 2ª GENERACIÓN (PICANTO ION / MORNING 2011 - 2017) ---

export const kiaPicanto2011 = {

    marca: 'Kia',

    modelo: 'Picanto',

    anio: 2011,

    tipo: 'Hatchback',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kia_Picanto_1.0_CVVT_Attract_%28TA%29_%E2%80%93_Frontansicht%2C_28._August_2013%2C_Ratingen.jpg/1200px-Kia_Picanto_1.0_CVVT_Attract_%28TA%29_%E2%80%93_Frontansicht%2C_28._August_2013%2C_Ratingen.jpg',

    descripcion:
        'Plataforma educativa para Kia Picanto 2011 (Picanto Ion / 2ª Generación TA / Motores 1.0L I3 y 1.25L I4 Kappa Dual CVVT).',

    informacionHistorica: {

        titulo: 'Kia Picanto 2011 (Picanto Ion)',

        generacion: 'Segunda generación (Plataforma TA)',

        familiaMotor: '1.0L Kappa I3 / 1.25L Kappa II I4 Dual CVVT',

        tipoMotor: 'Motor de 3 o 4 cilindros en línea e inyección multipunto',

        arquitectura: 'DOHC 12V / 16V Dual CVVT',

        alimentacion: 'Inyección Electrónica Multipunto MPI',

        encendido: 'Electrónico directo COP',

        refrigeracion: 'Refrigeración líquida con radiador de aluminio',

        distribucion: 'Cadena de distribución de alta durabilidad',

        transmision: 'Manual de 5 velocidades / Automática de 4 velocidades'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor del Kia Picanto 2011?',

        explicacion:
            'Un motor de construcción ligera en aluminio con sincronización variable CVVT enfocado en ofrecer bajo consumo urbano y bajo costo de mantenimiento.',

        formulaSimple:
            'Aire + gasolina + Dual CVVT + compresión + chispa = movimiento eficiente del cigüeñal',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba eléctrica',
            'Rampa e Inyectores MPI',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague / Convertidor de torque',
            'Caja de cambios',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposPicanto,

    componentesMotor: sistemasMotorPicanto,

    sistemaCombustible: sistemaCombustiblePicanto,

    sistemaEncendido: sistemaEncendidoPicanto,

    refrigeracion: {

        tipo: 'Refrigeración líquida presurizada',

        elementos: [
            'Radiador de aluminio',
            'Bomba de agua por correa',
            'Termostato',
            'Depósito de expansión',
            'Electroventilador'
        ],

        funcionamiento:
            'El líquido refrigerante absorbe el calor de la culata y el bloque para disiparlo en el radiador.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba de engranajes',

        componentes: [
            'Cárter de aluminio',
            'Bomba de aceite',
            'Filtro de aceite roscado',
            'Conductos internos'
        ],

        funcionamiento:
            'Circula aceite 5W-30 a través del filtro protegiendo casquetes y variadores CVVT.'
    },

    distribucion: {

        titulo: 'Distribución por cadena',

        tipo: 'Cadena metálica con tensor hidráulico',

        funcion:
            'Sincroniza el cigüeñal con los árboles de levas de admisión y escape.',

        advertencia:
            'Utilice aceite con la viscosidad recomendada para garantizar la presión adecuada sobre el tensor de la cadena.'
    },

    diagnosticoGeneral: diagnosticoGeneralPicanto,

    fallasComunes: fallasComunesPicanto,

    herramientas: herramientasPicanto,

    mantenimiento: mantenimientoPicanto,

    cursos: cursosPicanto,

    seguridad: seguridadPicanto,

    glosario: glosarioPicanto,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2011,
            {
                tecnologia: '2ª Generación (TA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L Kappa I3 (69 HP) / 1.25L Kappa I4 (84 HP)'
            }
        );
    }
};


export const kiaPicanto2012 = {

    ...kiaPicanto2011,

    anio: 2012,

    descripcion:
        'Plataforma educativa para Kia Picanto 2012 (Picanto Ion). Mantenimiento, diagnóstico de inyección y sensores.',

    informacionHistorica: {

        ...kiaPicanto2011.informacionHistorica,

        titulo: 'Kia Picanto 2012',

        anio: 2012
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2012,
            {
                tecnologia: '2ª Generación (TA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2013 = {

    ...kiaPicanto2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Kia Picanto 2013. Diagnóstico de motor, suspensión y sistema eléctrico.',

    informacionHistorica: {

        ...kiaPicanto2012.informacionHistorica,

        titulo: 'Kia Picanto 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2013,
            {
                tecnologia: '2ª Generación (TA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2014 = {

    ...kiaPicanto2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Kia Picanto 2014. Guías de mantenimiento, cadena de distribución y frenos.',

    informacionHistorica: {

        ...kiaPicanto2013.informacionHistorica,

        titulo: 'Kia Picanto 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2014,
            {
                tecnologia: '2ª Generación (TA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2015 = {

    ...kiaPicanto2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Kia Picanto 2015 (Picanto Ion Facelift). Actualización estética e inyección optimizada.',

    informacionHistorica: {

        ...kiaPicanto2014.informacionHistorica,

        titulo: 'Kia Picanto 2015',

        anio: 2015,

        modeloHistorico: 'Picanto Ion Facelift'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2015,
            {
                tecnologia: '2ª Generación Facelift - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2016 = {

    ...kiaPicanto2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Kia Picanto 2016. Diagnóstico de fallas comunes, transmisión y dirección MDPS.',

    informacionHistorica: {

        ...kiaPicanto2015.informacionHistorica,

        titulo: 'Kia Picanto 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2016,
            {
                tecnologia: '2ª Generación (TA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2017 = {

    ...kiaPicanto2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Kia Picanto 2017 (Cierre de la 2ª Generación Picanto Ion / Transición a 3ª Gen JA).',

    informacionHistorica: {

        ...kiaPicanto2016.informacionHistorica,

        titulo: 'Kia Picanto 2017',

        anio: 2017,

        nota: 'Año de transición entre Picanto Ion (TA) y el nuevo Picanto All New (JA).'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2017,
            {
                tecnologia: 'Transición de Generación (TA / JA) - MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


// --- 3ª GENERACIÓN (ALL NEW PICANTO / GT-LINE 2018 - 2026) ---

export const kiaPicanto2018 = {

    ...kiaPicanto2017,

    anio: 2018,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/2018_Kia_Picanto_GT-Line_1.2_Front.jpg/1200px-2018_Kia_Picanto_GT-Line_1.2_Front.jpg',

    descripcion:
        'Plataforma educativa para Kia Picanto 2018 (3ª Generación / All New Picanto JA / Versiones Emotion, Zenith, GT-Line con motores 1.0L y 1.25L).',

    informacionHistorica: {

        titulo: 'Kia Picanto 2018 (All New Picanto)',

        generacion: 'Tercera generación (Plataforma JA)',

        familiaMotor: '1.0L Kappa I3 / 1.25L Kappa II I4 Dual CVVT',

        tipoMotor: 'Motor de 3 o 4 cilindros en línea e inyección multipunto',

        arquitectura: 'DOHC 12V / 16V Dual CVVT',

        alimentacion: 'Inyección Electrónica Multipunto MPI',

        encendido: 'Electrónico directo COP',

        refrigeracion: 'Refrigeración líquida con flujo optimizado',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Manual de 5 velocidades / Automática de 4 velocidades'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2018,
            {
                tecnologia: '3ª Generación (JA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L Kappa (66 HP) / 1.25L Kappa II (83 HP)'
            }
        );
    }
};


export const kiaPicanto2019 = {

    ...kiaPicanto2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Kia Picanto 2019. Mantenimiento, diagnóstico de inyección y transmisiones.',

    informacionHistorica: {

        ...kiaPicanto2018.informacionHistorica,

        titulo: 'Kia Picanto 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2019,
            {
                tecnologia: '3ª Generación (JA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2020 = {

    ...kiaPicanto2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Kia Picanto 2020. Diagnóstico de motor, frenos ABS y dirección asistida MDPS.',

    informacionHistorica: {

        ...kiaPicanto2018.informacionHistorica,

        titulo: 'Kia Picanto 2020',

        anio: 2020
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2020,
            {
                tecnologia: '3ª Generación (JA) - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2021 = {

    ...kiaPicanto2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Kia Picanto 2021 (Primer Facelift 3ª Generación / Nuevos faros LED y pantalla flotante).',

    informacionHistorica: {

        ...kiaPicanto2020.informacionHistorica,

        titulo: 'Kia Picanto 2021',

        anio: 2021,

        modeloHistorico: 'All New Picanto Facelift I'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2021,
            {
                tecnologia: '3ª Generación Facelift - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2022 = {

    ...kiaPicanto2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Kia Picanto 2022. Diagnóstico de la mariposa electrónica, caja de cambios y encendido.',

    informacionHistorica: {

        ...kiaPicanto2021.informacionHistorica,

        titulo: 'Kia Picanto 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2022,
            {
                tecnologia: '3ª Generación - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2023 = {

    ...kiaPicanto2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Kia Picanto 2023. Guías de servicio técnico, sensores y mantenimiento preventivo.',

    informacionHistorica: {

        ...kiaPicanto2022.informacionHistorica,

        titulo: 'Kia Picanto 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2023,
            {
                tecnologia: '3ª Generación - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa Dual CVVT'
            }
        );
    }
};


export const kiaPicanto2024 = {

    ...kiaPicanto2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kia_Picanto_JA_FL2_GT-Line_1.2_1.jpg/1200px-Kia_Picanto_JA_FL2_GT-Line_1.2_1.jpg',

    descripcion:
        'Plataforma educativa para Kia Picanto 2024 (Segundo Facelift de la 3ª Generación / Diseño Opposites United y tablero digital).',

    informacionHistorica: {

        ...kiaPicanto2023.informacionHistorica,

        titulo: 'Kia Picanto 2024',

        anio: 2024,

        modeloHistorico: 'Picanto Facelift II (Diseño Opposites United)'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2024,
            {
                tecnologia: '3ª Generación Facelift II - Inyección MPI Dual CVVT',

                motorPrincipal: '1.0L Kappa / 1.25L Kappa II (83 HP)'
            }
        );
    }
};


export const kiaPicanto2025 = {

    ...kiaPicanto2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Kia Picanto 2025. Diagnóstico de gestión electrónica, asistencias de manejo y mecánica general.',

    informacionHistorica: {

        ...kiaPicanto2024.informacionHistorica,

        titulo: 'Kia Picanto 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2025,
            {
                tecnologia: '3ª Generación Facelift II - MPI Dual CVVT',

                motorPrincipal: '1.0L / 1.25L Kappa II'
            }
        );
    }
};


export const kiaPicanto2026 = {

    ...kiaPicanto2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Kia Picanto 2026. Diagnóstico de inyección, sensores, transmisión y mantenimientos.',

    informacionHistorica: {

        ...kiaPicanto2025.informacionHistorica,

        titulo: 'Kia Picanto 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoPicanto(
            2026,
            {
                tecnologia: '3ª Generación Facelift II - MPI Dual CVVT',

                motorPrincipal: '1.0L Kappa / 1.25L Kappa II Dual CVVT'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE KIA PICANTO
// ============================================================

export const kiaPicanto = {

    marca: 'Kia',

    modelo: 'Picanto',

    tipo: 'Hatchback',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kia_Picanto_JA_FL2_GT-Line_1.2_1.jpg/1200px-Kia_Picanto_JA_FL2_GT-Line_1.2_1.jpg',

    aniosDisponibles: [
        2011,
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

        2011: kiaPicanto2011,

        2012: kiaPicanto2012,

        2013: kiaPicanto2013,

        2014: kiaPicanto2014,

        2015: kiaPicanto2015,

        2016: kiaPicanto2016,

        2017: kiaPicanto2017,

        2018: kiaPicanto2018,

        2019: kiaPicanto2019,

        2020: kiaPicanto2020,

        2021: kiaPicanto2021,

        2022: kiaPicanto2022,

        2023: kiaPicanto2023,

        2024: kiaPicanto2024,

        2025: kiaPicanto2025,

        2026: kiaPicanto2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
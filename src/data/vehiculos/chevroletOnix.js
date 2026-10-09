const sistemasMotorOnix = [
    {
        nombre: 'Bloque del motor (SPE/4 1.4L / 1.0L)',
        funcion:
            'Estructura principal de hierro fundido/aluminio que aloja los cilindros, cigüeñal y galerías de lubricación y refrigeración.',
        fallas: [
            'Fugas de aceite por retenes o empaques',
            'Fugas de refrigerante',
            'Desgaste de cilindros',
            'Pérdida de compresión',
            'Daños por sobrecalentamiento'
        ]
    },

    {
        nombre: 'Culata SOHC (8 válvulas)',
        funcion:
            'Aloja las válvulas de admisión/escape y el único árbol de levas en la parte superior.',
        fallas: [
            'Fuga en empaque de culata',
            'Perdida de compresión por válvulas pisadas o quemadas',
            'Fugas de aceite en tapa de válvulas',
            'Desgaste en balancines y levas'
        ]
    },

    {
        nombre: 'Árbol de levas SOHC',
        funcion:
            'Sincroniza y controla los tiempos de apertura de las válvulas.',
        fallas: [
            'Desgaste por falta de lubricación o aceite inadecuado',
            'Ruidos metálicos (golpeteo de taqués/balancines)',
            'Desfase de sincronización'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes',
        funcion:
            'Transforma el movimiento alternativo del pistón en rotativo hacia la transmisión.',
        fallas: [
            'Juego axial o desgaste en casquetes de bancada/biela',
            'Fuga por retén trasero (lado volante) o delantero',
            'Golpeteo bajo por baja presión de aceite'
        ]
    },

    {
        nombre: 'Pistones y Anillos',
        funcion:
            'Transmiten la fuerza de la expansión de gases a la biela y sellan la cámara de combustión.',
        fallas: [
            'Anillos pegados o desgastados (humo azul por escape)',
            'Pérdida de compresión',
            'Cabeza de pistón carbonizada'
        ]
    },

    {
        nombre: 'Sistema de distribución por correa',
        funcion:
            'Mantiene sincronizado el piñón de cigüeñal con el piñón del árbol de levas y la bomba de agua.',
        fallas: [
            'Desgaste o resequedad en la correa',
            'Tensor de correa defectuoso',
            'Fuga en bomba de agua acoplada a la correa',
            'Ruptura de correa (causa colisión entre válvulas y pistón)'
        ]
    },

    {
        nombre: 'Sistema de refrigeración',
        funcion:
            'Controla la temperatura del motor con bomba de agua, termostato, depósito de expansión, radiador y electroventilador.',
        fallas: [
            'Fisuras en el depósito de expansión o tapa defectuosa',
            'Termostato pegado (cerrado u abierto)',
            'Fugas en mangueras o radiador',
            'Electroventilador no activa (resistencia/relevador)'
        ]
    },

    {
        nombre: 'Sistema de lubricación',
        funcion:
            'Impulsa aceite hacia todas las partes móviles para minimizar la fricción y temperatura.',
        fallas: [
            'Baja presión de aceite (testigo encendido)',
            'Filtro de aceite obstruido o deformado',
            'Empaque de cárter con fugas',
            'Malla/coladera de bomba obstruida'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleOnix = {

    titulo: 'Sistema de Inyección Electrónica Multipunto (MPFI / SPE/4)',

    funcionamiento:
        'La bomba sumergida en el tanque suministra gasolina a presión hacia la rampa. La ECU utiliza señales del MAP, TPS, CKP y sensor de oxígeno para dosificar la inyección en cada cilindro.',

    componentes: [
        'Tanque de combustible',
        'Módulo de bomba de combustible (con regulador de presión)',
        'Filtro de combustible de línea',
        'Rampa e inyectores de combustible',
        'Cuerpo de aceleración electrónico (Drive-by-Wire)',
        'Sensor MAP (Presión Absoluta del Múltiple)',
        'Sensor TPS (Posición de Acelerador)',
        'Sensor ECT (Temperatura de Refrigerante)',
        'Sensors de Oxígeno (Pre y Post catalizador)',
        'ECU de gestión de motor'
    ],

    flujo: [
        '1. La bomba eléctrica genera presión dentro del tanque.',
        '2. El combustible pasa a través del filtro de línea externo.',
        '3. Llega a la rampa metálica de inyección.',
        '4. La ECU activa electrónicamente los inyectores por pulsos.',
        '5. La gasolina pulverizada ingresa por el múltiple de admisión.',
        '6. La mezcla entra a la cámara de combustión.',
        '7. La bujía genera el arco eléctrico.',
        '8. Se produce la expansión y escape de gases.',
        '9. El sensor de oxígeno analiza los gases para ajustar el ajuste de combustible (Fuel Trim).'
    ],

    diagnostico: [
        'Comprobar presión de combustible en la rampa con manómetro.',
        'Escuchar el zumbido de la bomba de combustible al abrir el switch.',
        'Comprobar relevador y fusible de la bomba de gasolina.',
        'Escanear códigos DTC (misfires P0300, mezclas P0171/P0172).',
        'Verificar limpieza del cuerpo de aceleración electrónico.',
        'Probar pulso de inyectores con luces Noide.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoOnix = {

    titulo: 'Sistema de Encendido Electrónico DIS / Bobinas Independientes',

    funcionamiento:
        'La ECU procesa la información de posición del cigüeñal (CKP) y árbol de levas (CMP) para activar el paquete de bobinas o bobinas individuales y enviar el pulso a las bujías.',

    componentes: [
        {
            nombre: 'ECU',
            funcion:
                'Calcula el avance o retraso del encendido y activa la chispa.'
        },

        {
            nombre: 'Sensor CKP',
            funcion:
                'Captura las RPM y la posición angular del cigüeñal mediante la rueda fónica.'
        },

        {
            nombre: 'Módulo / Paquete de Bobinas',
            funcion:
                'Transforma los 12V del sistema en alta tensión para generar el arco eléctrico.'
        },

        {
            nombre: 'Cables de alta tensión y Bujías',
            funcion:
                'Llevan la chispa a la cámara de combustión para iniciar la detonación.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar carga de la batería y conexiones a masa/tierra.',
        'Revisar fusibles del sistema de gestión de motor en la fusilera del motor.',
        'Conectar escáner OBD2 para verificar RPM en arranque (Señal CKP).',
        'Inspeccionar sulfatación o fisuras en el paquete de bobinas y cables.',
        'Medir resistencia de los cables de alta tensión.',
        'Revisar la holgura de los electrodos de las bujías.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposOnix = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende. La válvula de admisión se abre para ingresar la mezcla de aire y combustible pulverizado.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Llenar el cilindro con la carga carburada.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la mezcla con ambas válvulas cerradas, elevando la temperatura.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Aumentar la presión de la mezcla para lograr una combustión eficiente.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía salta e inicia el frente de llama. La fuerza expande los gases y empuja con violencia el pistón hacia abajo.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el trabajo y torque útil del motor.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende expulsando los gases quemados por la válvula de escape hacia el múltiple y el catalizador.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Desalojar completamente los residuos de combustión.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasOnix = {

    basicas: [
        'Juego de llaves mixtas (milimétricas 8, 10, 13, 15, 17mm)',
        'Juego de copas/dados con rachet de 3/8 y 1/2',
        'Juego de llaves Torx (T20, T25, T30, T40, T45, T50)',
        'Destornilladores de pala y estrella',
        'Alicates y pinzas para abrazaderas de refrigerante',
        'Gato hidráulico de patín',
        'Torres / Caballetes de seguridad',
        'Llave de bujías de 5/8 (16mm)',
        'Bandeja de recolección de fluidos'
    ],

    diagnostico: [
        'Escáner OBD2 (Lector de datos en vivo / DTCs Chevrolet)',
        'Multímetro digital con puntas finas',
        'Manómetro para medir presión de combustible (con acople rápido)',
        'Compresímetro con acople para bujía de 14mm',
        'Lámpara de pruebas o probador de chispa (Chispómetro)',
        'Probador de batería y sistema de carga'
    ],

    profesional: [
        'Torquímetro de 1/2 y 3/8',
        'Herramienta de traba / fijación para sincronización de distribución',
        'Prensa manual o extractores de poleas',
        'Herramienta para compresión de resortes de válvula',
        'Probador de fugas de cilindro (Leakdown tester)'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralOnix = {

    principio:
        'Aplicar diagnóstico estructurado. Escanear sistemas electrónicos y medir parámetros físicos antes de reemplazar repuestos.',

    secuencia: [

        '1. Confirmar la condición expresada por el usuario (síntoma exacto).',

        '2. Inspeccionar visualmente cables, fugas de fluido, arneses y mangueras de vacío.',

        '3. Revisar niveles de aceite, refrigerante y estado de la batería.',

        '4. Conectar el escáner OBD2 y registrar códigos de falla (DTC).',

        '5. Analizar valores en vivo (STFT/LTFT, MAP, Temperatura, RPM).',

        '6. Verificar alimentación de voltaje y tierras en sensores o actuadores dudosos.',

        '7. Realizar pruebas mecánicas (Presión de gasolina, compresión de cilindros).',

        '8. Determinar la causa raíz del inconveniente.',

        '9. Reemplazar o reparar la pieza averiada.',

        '10. Borrar los códigos DTC de la memoria de la ECU.',

        '11. Realizar prueba de ruta para confirmar la solución del problema.',

        '12. Realizar un escaneo de verificación final.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesOnix = [

    {
        titulo: 'El motor no arranca o demora en encender',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Batería descargada o terminales sulfatados',
            'Falla en el motor de arranque o solenoide',
            'Bomba de combustible defectuosa o sin presión',
            'Sensor CKP (Posición de cigüeñal) averiado',
            'Bobina de encendido o bujías en mal estado',
            'Inmovilizador de llave (testigo de candado activo)'
        ],

        diagnostico: [
            'Medir el voltaje de batería (mínimo 12.4V en reposo).',
            'Escuchar si activa la bomba de gasolina al poner el switch en ON.',
            'Verificar presencia de chispa en las bujías.',
            'Conectar escáner para comprobar señal de RPM al dar arranque (Sensor CKP).',
            'Comprobar la presión de gasolina en la rampa.'
        ]
    },

    {
        titulo: 'Tirones, cabeceo o pérdida de potencia en aceleración',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Bobina de encendido fisurada o defectuosa',
            'Cables de alta o bujías desgastadas',
            'Inyectores sucios o tapados',
            'Filtro de combustible obstruido',
            'Cuerpo de aceleración sucio',
            'Sensor MAP enviando lectura errónea'
        ],

        diagnostico: [
            'Escanear ECU en busca de misfires (P0300, P0301, P0302, etc.).',
            'Revisar si la bobina presenta saltos de chispa o marcas blancas.',
            'Inspeccionar el estado de las bujías y resistencia de cables.',
            'Revisar la presión del sistema de combustible bajo carga.',
            'Limpiar y calibrar el cuerpo de aceleración si es necesario.'
        ]
    },

    {
        titulo: 'Ralentí inestable o sube y baja de RPM (Marcha mínima irregular)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración electrónico descalibrado o sucio',
            'Fuga de vacío en el múltiple de admisión o mangueras de PCV',
            'Válvula PCV pegada o manguera rota',
            'Filtro de aire obstruido',
            'Lectura alterada del sensor MAP o temperatura'
        ],

        diagnostico: [
            'Inspeccionar la mariposa del cuerpo de aceleración.',
            'Aplicar arrancador/limpiador en las juntas del múltiple para detectar fugas de vacío.',
            'Revisar mangueras de recirculación de gases (PCV) y cánister.',
            'Comprobar parámetros de sensor MAP en el escáner.'
        ]
    },

    {
        titulo: 'Sobrecalentamiento o fuga de refrigerante',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Depósito de expansión (tarro de agua) fisurado o tapa defectuosa',
            'Termostato pegado en posición cerrada',
            'Resistencia de velocidad lenta del electroventilador quemada',
            'Bomba de agua dañada (fuga por el testigo/desfogue o piñón roto)',
            'Empaque de culata soplado por calentamiento previo'
        ],

        diagnostico: [
            'Revisar presencia de fugas visibles (marcas de refrigerante rosa/verde).',
            'Probar la activación del electroventilador en velocidad baja y alta.',
            'Verificar si las mangueras superior e inferior del radiador toman temperatura por igual (Termostato).',
            'Realizar prueba de compresión o gases de combustión en el depósito de refrigerante.'
        ]
    },

    {
        titulo: 'Check Engine Encendido (Luz testigo de falla)',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Falla de encendido (Misfire)',
            'Sensor de oxígeno defectuoso o catalizador agotado (P0420)',
            'Válvula de purga del cánister pegada abierta',
            'Tapa de combustible suelta o empaque roto',
            'Sensor de temperatura de refrigerante defectuoso'
        ],

        diagnostico: [
            'Conectar el escáner OBD2.',
            'Leer y tomar nota de los códigos de avería almacenados y pendientes.',
            'Revisar cuadro congelado (Freeze Frame) para ver condiciones de la falla.',
            'Analizar los valores de sensores involucrados antes de borrar el código.'
        ]
    },

    {
        titulo: 'Consumo excesivo de combustible',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Sensor de oxígeno primario lento o defectuoso',
            'Filtro de aire excesivamente sucio',
            'Sensor de temperatura del refrigerante (ECT) enviando señal de motor frío',
            'Inyector goteando o abierto',
            'Presión de combustible demasiado alta'
        ],

        diagnostico: [
            'Monitorear los ajustes de combustible a corto y largo plazo (STFT / LTFT).',
            'Verificar la señal sinusoidal del sensor de oxígeno primario.',
            'Revisar la lectura del sensor ECT en comparación con la temperatura real.',
            'Inspeccionar el estado del filtro de aire y bujías.'
        ]
    },

    {
        titulo: 'Fuga de aceite por empaque de tapa de válvulas o cárter',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Empaque de tapa de válvulas resecó/cristalizado',
            'Retén de cigüeñal (delantero o trasero) desgastado',
            'Cárter golpeado o sello de silicona deteriorado',
            'Presión excesiva en el cárter por válvula PCV tapada'
        ],

        diagnostico: [
            'Lavar el área con desengrasante para identificar el punto exacto de fuga.',
            'Verificar el estado de la válvula y manguera PCV.',
            'Reemplazar empaque o retén aplicando el torque adecuado.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoOnix = {

    objetivo:
        'Prevenir fallas mecánicas, preservar la eficiencia de combustible y asegurar la vida útil de los componentes del Chevrolet Onix.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 5.000 km o 10.000 km (según el tipo de aceite sintético/semisintético 5W-30 dexos1) junto con el filtro.'
        },

        {
            nombre: 'Correa de distribución y tensor',
            accion:
                'Reemplazar estrictamente entre los 50.000 km y 60.000 km (o 4 años) para evitar rotura e interferencia en las válvulas.'
        },

        {
            nombre: 'Bujías y cables de alta',
            accion:
                'Inspeccionar o cambiar bujías cada 30.000 km. Revisar cables por resequedad o brincos de chispa.'
        },

        {
            nombre: 'Filtro de aire y de combustible',
            accion:
                'Reemplazar el filtro de aire cada 15.000 km y el filtro de combustible externo cada 15.000 - 20.000 km.'
        },

        {
            nombre: 'Sistema de refrigeración',
            accion:
                'Inspeccionar el depósito de expansión y renovar el refrigerante orgánico (Dex-Cool) cada 40.000 km o 2 años.'
        },

        {
            nombre: 'Cuerpo de aceleración',
            accion:
                'Efectuar limpieza del depósito de carbón cada 20.000 km y realizar reaprendizaje/calibración con escáner si aplica.'
        },

        {
            nombre: 'Líquido de frenos y pastillas',
            accion:
                'Verificar nivel y porcentaje de humedad del líquido DOT 4. Inspeccionar desgaste de pastillas y bandas de freno.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadOnix = [

    'Nunca trabaje debajo del vehículo soportado únicamente por un gato hidráulico; use siempre torres de seguridad.',

    'No abra la tapa del depósito de expansión de refrigerante si el motor está caliente para evitar quemaduras por presión.',

    'Desconecte el borne negativo de la batería antes de manipular sensores, alternador o motor de arranque.',

    'Utilice gafas de protección al trabajar debajo del auto o al manipular líneas de gasolina con presión.',

    'No toque los componentes del sistema de escape ni el catalizador poco después de apagar el motor.',

    'Utilice el torque exacto en los pernos de la culata, cárter y ruedas para evitar aislar roscas o deformar superficies.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosOnix = [

    {
        id: 1,

        titulo: 'Introducción al Chevrolet Onix',

        nivel: 'Básico',

        descripcion:
            'Conociendo los componentes de la bahía del motor, fusibles y mantenimiento básico.',

        temas: [
            'Identificación del motor',
            'Ubicación de sensores',
            'Fusileras interior y motor',
            'Niveles de fluidos y especificaciones Dexos'
        ]
    },

    {
        id: 2,

        titulo: 'Sincronización del motor SPE/4 1.4L / 1.0L',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a realizar el cambio de correa de distribución, tensor y bomba de agua.',

        temas: [
            'Marcas de tiempo en cigüeñal y árbol de levas',
            'Uso de herramientas de traba',
            'Ajuste y tensión de la correa',
            'Torques de apriete'
        ]
    },

    {
        id: 3,

        titulo: 'Diagnóstico OBD2 en Chevrolet',

        nivel: 'Intermedio',

        descripcion:
            'Lectura e interpretación de parámetros con escáner en motores Chevrolet.',

        temas: [
            'Interpretación de DTCs',
            'Monitoreo de STFT y LTFT',
            'Lecturas del sensor MAP y ECT',
            'Reset de cuerpo de aceleración'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema de Refrigeración y Control de Temperatura',

        nivel: 'Intermedio',

        descripcion:
            'Diagnóstico de fallas en el circuito de enfriamiento y electroventilador.',

        temas: [
            'Prueba de estanqueidad',
            'Diagnóstico de electroventilador y resistencias',
            'Cambio de termostato y bomba de agua',
            'Purga de aire del sistema'
        ]
    },

    {
        id: 5,

        titulo: 'Sistema de Encendido e Inyección MPFI',

        nivel: 'Avanzado',

        descripcion:
            'Detección de fallas de chispa, inyectores y pulso eléctrico.',

        temas: [
            'Prueba de paquete de bobinas',
            'Limpieza y prueba de inyectores',
            'Presión y caudal de la bomba de gasolina',
            'Mediciones con multímetro y osciloscopio'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioOnix = [

    {
        termino: 'SPE/4',
        significado:
            'Smart Performance Economy 4 Cylinders. Denominación técnica utilizada por Chevrolet para su evolución de motores 1.0L y 1.4L de 8V.'
    },

    {
        termino: 'ECU / ECM',
        significado:
            'Engine Control Unit / Module. Módulo electrónico central que gestiona la inyección y encendido del motor.'
    },

    {
        termino: 'MAP',
        significado:
            'Manifold Absolute Pressure. Sensor que mide la presión absoluta dentro del múltiple de admisión.'
    },

    {
        termino: 'CKP',
        significado:
            'Crankshaft Position Sensor. Sensor de posición del cigüeñal utilizado para calcular RPM y tiempo de encendido.'
    },

    {
        termino: 'Dexos1',
        significado:
            'Norma de homologación de lubricante de motor especificada por General Motors / Chevrolet.'
    },

    {
        termino: 'Dex-Cool',
        significado:
            'Refrigerante de tecnología orgánica (OAT) recomendado para vehículos de la gama General Motors.'
    },

    {
        termino: 'DTC',
        significado:
            'Diagnostic Trouble Code. Código de avería almacenado por la computadora del auto al detectar una anomalía.'
    },

    {
        termino: 'Drive-by-Wire',
        significado:
            'Sistema de aceleración electrónico que reemplaza la guaya/cable por un pedal con sensor de posición y un motor eléctrico en la mariposa.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoOnix(anio, configuracion) {

    const sintomasMapeados = fallasComunesOnix.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a Chevrolet Onix ' +
            anio +
            '. La configuración exacta puede variar según el motor (1.0L, 1.4L SPE/4 o Turbo) y versión.',

        herramientas: [
            ...herramientasOnix.basicas,
            ...herramientasOnix.diagnostico
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

                titulo: 'Motor y Gestión Electrónica',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Eléctrico / Encendido',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Sistema de Encendido y Arrastre',

                        sintomas: [

                            {
                                titulo: 'El motor gira pero no enciende',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Comprobar suministro de gasolina, chispa, señal de CKP e inmovilizador.',

                                herramientas: [
                                    'Escáner OBD2',
                                    'Multímetro',
                                    'Probador de chispa'
                                ],

                                pasos: [
                                    '1. Verificar que el nivel de batería supere los 12.2V.',
                                    '2. Probar si hay pulso de chispa con chispómetro.',
                                    '3. Verificar lectura de RPM en el escáner mientras gira el motor de arranque.',
                                    '4. Medir presión de gasolina en la rampa (debe rondar ~3.8 a 4.2 bar / 55-60 psi).',
                                    '5. Verificar que el testigo del candado/inmovilizador se apague en el tablero.'
                                ]
                            }
                        ]
                    }
                ]
            },

            refrigeracion: {

                titulo: 'Sistema de Refrigeración',

                icono: '🌡️',

                subcategorias: [

                    {
                        nombre: 'Control de Temperatura',

                        sintomas: [

                            {
                                titulo: 'Fuga de refrigerante o sobrecalentamiento',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Diagnóstico de fuga por depósito de expansión, mangueras, bomba de agua o fallo de electroventilador.',

                                herramientas: [
                                    'Medidor de presión de radiador',
                                    'Multímetro',
                                    'Herramientas manuales'
                                ],

                                pasos: [
                                    '1. Dejar enfriar el motor por completo antes de revisar.',
                                    '2. Revisar rajaduras en el fondo del depósito de expansión.',
                                    '3. Verificar si el electroventilador enciende al llegar a los 98°C-105°C.',
                                    '4. Inspeccionar la zona de la bomba de agua buscando manchas de refrigerante.',
                                    '5. Probar el termostato si la temperatura sube rápidamente pero el radiador se siente frío.'
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
// MODELOS INDIVIDUALES POR AÑO (ONIX 1ª GEN / JOY / TURBO)
// ============================================================

export const chevroletOnix2013 = {

    marca: 'Chevrolet',

    modelo: 'Onix',

    anio: 2013,

    tipo: 'Hatchback / Sedán',

    imagen:
        'https://chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/onix/01-images/chevrolet-onix-2023.jpg',

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2013 (Lanzamiento 1ª Generación con motor 1.4L SPE/4 y transmisión manual/automática).',

    informacionHistorica: {

        titulo: 'Chevrolet Onix 2013',

        generacion: 'Primera generación (Plataforma GSV / GEM)',

        familiaMotor: '1.4L SPE/4 SOHC 8V',

        tipoMotor: 'Motor de combustión interna de 4 cilindros en línea',

        arquitectura: 'SOHC 8 válvulas',

        alimentacion: 'Inyección Electrónica Multipunto MPFI',

        encendido: 'Electrónico DIS',

        refrigeracion: 'Refrigeración líquida con depósito presurizado',

        distribucion: 'Correa de distribución',

        transmision: 'Manual de 5 velocidades / Automática de 6 velocidades (6T30)'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor del Onix 2013?',

        explicacion:
            'Transforma la energía del combustible en fuerza motriz mediante el ciclo térmico de 4 tiempos con un árbol de levas a la cabeza (SOHC) enfocado en bajo consumo y torque en bajas revoluciones.',

        formulaSimple:
            'Aire + gasolina + compresión + chispa = expansión → giro del cigüeñal',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba de gasolina',
            'Filtro de línea',
            'Inyectores / Múltiple',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague / Convertidor de torque',
            'Caja de cambios',
            'Ejes homocinéticos',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposOnix,

    componentesMotor: sistemasMotorOnix,

    sistemaCombustible: sistemaCombustibleOnix,

    sistemaEncendido: sistemaEncendidoOnix,

    refrigeracion: {

        tipo: 'Refrigeración líquida presurizada',

        elementos: [
            'Radiador de aluminio',
            'Bomba de agua accionada por correa de distribución',
            'Termostato',
            'Electroventilador de 2 velocidades',
            'Depósito de expansión'
        ],

        funcionamiento:
            'El líquido absorbe el calor del bloque y culata, circulando hacia el radiador donde el flujo de aire lo enfría antes de retornar.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba de engranajes',

        componentes: [
            'Cárter de aceite',
            'Bomba de aceite',
            'Filtro de aceite roscado',
            'Galerías internas de lubricación'
        ],

        funcionamiento:
            'La bomba succiona aceite del cárter y lo distribuye a presión hacia los apoyos del cigüeñal, bielas y árbol de levas.'
    },

    distribucion: {

        titulo: 'Distribución del motor',

        tipo: 'Correa dentada de distribución con tensor automático o manual',

        funcion:
            'Mantener una sincronización precisa entre el cigüeñal y las válvulas.',

        advertencia:
            'Es un motor de interferencia. Si la correa se rompe, las válvulas chocarán contra los pistones provocando daños severos.'
    },

    diagnosticoGeneral: diagnosticoGeneralOnix,

    fallasComunes: fallasComunesOnix,

    herramientas: herramientasOnix,

    mantenimiento: mantenimientoOnix,

    cursos: cursosOnix,

    seguridad: seguridadOnix,

    glosario: glosarioOnix,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2013,
            {
                tecnologia: '1ª Generación - Inyección MPFI SPE/4 8V',

                motorPrincipal: 'Motor 1.4L SPE/4 SOHC'
            }
        );
    }
};


export const chevroletOnix2014 = {

    ...chevroletOnix2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2014. Mantenimiento, diagnóstico de inyección, encendido y mecánica general.',

    informacionHistorica: {

        ...chevroletOnix2013.informacionHistorica,

        titulo: 'Chevrolet Onix 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2014,
            {
                tecnologia: '1ª Generación - Inyección MPFI SPE/4 8V',

                motorPrincipal: 'Motor 1.4L SPE/4 SOHC'
            }
        );
    }
};


export const chevroletOnix2015 = {

    ...chevroletOnix2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2015. Diagnóstico de fallas comunes, distribución y electricidad.',

    informacionHistorica: {

        ...chevroletOnix2014.informacionHistorica,

        titulo: 'Chevrolet Onix 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2015,
            {
                tecnologia: '1ª Generación - Inyección MPFI SPE/4 8V',

                motorPrincipal: 'Motor 1.4L SPE/4 SOHC'
            }
        );
    }
};


export const chevroletOnix2016 = {

    ...chevroletOnix2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2016. Inyección electrónica, frenos, suspensión y distribución.',

    informacionHistorica: {

        ...chevroletOnix2015.informacionHistorica,

        titulo: 'Chevrolet Onix 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2016,
            {
                tecnologia: '1ª Generación - Inyección MPFI SPE/4 8V',

                motorPrincipal: 'Motor 1.4L SPE/4 SOHC'
            }
        );
    }
};


export const chevroletOnix2017 = {

    ...chevroletOnix2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2017 (Facelift 1ª Generación / Onix LT / LTZ / Activ).',

    informacionHistorica: {

        ...chevroletOnix2016.informacionHistorica,

        titulo: 'Chevrolet Onix 2017',

        anio: 2017,

        modeloHistorico: 'Onix Facelift / Onix Joy / Onix Activ'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2017,
            {
                tecnologia: '1ª Generación Facelift - Inyección MPFI SPE/4 8V',

                motorPrincipal: 'Motor 1.4L SPE/4 SOHC / 1.0L según mercado'
            }
        );
    }
};


export const chevroletOnix2018 = {

    ...chevroletOnix2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2018. Mantenimiento del motor SPE/4, diagnóstico electrónico y sensores.',

    informacionHistorica: {

        ...chevroletOnix2017.informacionHistorica,

        titulo: 'Chevrolet Onix 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2018,
            {
                tecnologia: '1ª Generación - Inyección MPFI SPE/4 8V',

                motorPrincipal: 'Motor 1.4L SPE/4 SOHC'
            }
        );
    }
};


export const chevroletOnix2019 = {

    ...chevroletOnix2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2019. Diagnóstico mecánico, eléctrico y guías de servicio.',

    informacionHistorica: {

        ...chevroletOnix2018.informacionHistorica,

        titulo: 'Chevrolet Onix 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2019,
            {
                tecnologia: '1ª Generación / Onix Joy - SPE/4 8V',

                motorPrincipal: 'Motor 1.4L SPE/4 SOHC'
            }
        );
    }
};


export const chevroletOnix2020 = {

    ...chevroletOnix2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Chevrolet Onix 2020 (Transición a Onix Turbo 1.0L 3 cil y Onix Joy 1.4L).',

    informacionHistorica: {

        ...chevroletOnix2019.informacionHistorica,

        titulo: 'Chevrolet Onix 2020',

        anio: 2020,

        nota: 'Coexisten versiones Onix Joy (1.4L SPE/4 8V) y la 2ª Generación Onix Turbo (1.0L 3 Cilindros 12V Turbo).'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoOnix(
            2020,
            {
                tecnologia: 'Transición a Onix Turbo (1.0T) / Onix Joy (1.4L SPE/4)',

                motorPrincipal: 'Motor 1.4L SPE/4 o Motor 1.0L Turbo 3 Cilindros según versión'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE CHEVROLET ONIX
// ============================================================

export const chevroletOnix = {

    marca: 'Chevrolet',

    modelo: 'Onix',

    tipo: 'Auto',

    imagen:
        'https://chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/onix/01-images/chevrolet-onix-2023.jpg',

    aniosDisponibles: [
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020
    ],

    vehiculosPorAnio: {

        2013: chevroletOnix2013,

        2014: chevroletOnix2014,

        2015: chevroletOnix2015,

        2016: chevroletOnix2016,

        2017: chevroletOnix2017,

        2018: chevroletOnix2018,

        2019: chevroletOnix2019,

        2020: chevroletOnix2020
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2013];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
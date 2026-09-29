const sistemasMotorDuster = [
    {
        nombre: 'Bloque del motor',
        funcion:
            'Es la estructura principal donde se encuentran los cilindros, cigüeñal y diferentes conductos internos de lubricación y refrigeración.',
        fallas: [
            'Fugas de aceite',
            'Fugas de refrigerante',
            'Desgaste interno',
            'Pérdida de compresión',
            'Daños por sobrecalentamiento'
        ]
    },

    {
        nombre: 'Culata DOHC 16V',
        funcion:
            'Aloja las válvulas y los árboles de levas encargados de controlar la admisión y el escape del motor.',
        fallas: [
            'Pérdida de compresión',
            'Fugas de aceite',
            'Fugas de refrigerante',
            'Daños por sobrecalentamiento',
            'Problemas de sincronización'
        ]
    },

    {
        nombre: 'Árboles de levas',
        funcion:
            'Controlan el momento en que las válvulas de admisión y escape se abren y cierran.',
        fallas: [
            'Desgaste',
            'Falta de lubricación',
            'Problemas de sincronización',
            'Ruidos anormales'
        ]
    },

    {
        nombre: 'Cigüeñal',
        funcion:
            'Convierte el movimiento alternativo de los pistones en movimiento rotativo que posteriormente se transmite a la caja.',
        fallas: [
            'Desgaste de cojinetes',
            'Juego excesivo',
            'Falta de lubricación',
            'Vibraciones'
        ]
    },

    {
        nombre: 'Pistones',
        funcion:
            'Se desplazan dentro de los cilindros y reciben la fuerza generada durante la combustión.',
        fallas: [
            'Desgaste de anillos',
            'Pérdida de compresión',
            'Consumo de aceite',
            'Daños por sobrecalentamiento'
        ]
    },

    {
        nombre: 'Bielas',
        funcion:
            'Conectan los pistones con el cigüeñal y transmiten la fuerza de combustión.',
        fallas: [
            'Desgaste de cojinetes',
            'Golpeteo interno',
            'Falta de lubricación',
            'Daños por sobre régimen'
        ]
    },

    {
        nombre: 'Sistema de distribución',
        funcion:
            'Mantiene sincronizado el cigüeñal con los árboles de levas para que las válvulas trabajen en el momento correcto.',
        fallas: [
            'Correa deteriorada',
            'Tensor defectuoso',
            'Poleas desgastadas',
            'Pérdida de sincronización',
            'Ruptura de correa'
        ]
    },

    {
        nombre: 'Sistema de refrigeración',
        funcion:
            'Mantiene el motor dentro de un rango adecuado de temperatura mediante refrigerante, bomba de agua, termostato, radiador y electroventilador.',
        fallas: [
            'Fugas de refrigerante',
            'Termostato defectuoso',
            'Electroventilador que no activa',
            'Bomba de agua desgastada',
            'Radiador obstruido'
        ]
    },

    {
        nombre: 'Sistema de lubricación',
        funcion:
            'Distribuye aceite por las partes móviles del motor para reducir fricción y temperatura.',
        fallas: [
            'Nivel bajo de aceite',
            'Fugas',
            'Filtro obstruido',
            'Baja presión de aceite',
            'Aceite degradado'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleDuster = {

    titulo: 'Sistema de Inyección Electrónica Multipunto',

    funcionamiento:
        'La bomba de combustible suministra gasolina al sistema de inyección. La ECU utiliza información de diferentes sensores para determinar cuánto combustible debe inyectarse en cada condición de funcionamiento.',

    componentes: [
        'Tanque de combustible',
        'Bomba de combustible',
        'Filtro de combustible',
        'Líneas de combustible',
        'Rampa de inyección',
        'Inyectores',
        'Cuerpo de aceleración',
        'Sensor MAP',
        'Sensor IAT',
        'Sensor TPS',
        'Sensor de temperatura del refrigerante',
        'Sensor de oxígeno',
        'ECU'
    ],

    flujo: [
        '1. El combustible se almacena en el tanque.',
        '2. La bomba eléctrica impulsa el combustible.',
        '3. El combustible llega a la rampa de inyección.',
        '4. Los inyectores reciben la orden de la ECU.',
        '5. Los inyectores pulverizan combustible.',
        '6. El aire ingresa por el sistema de admisión.',
        '7. La mezcla entra a los cilindros.',
        '8. La bujía produce la chispa.',
        '9. Se produce la combustión.',
        '10. Los gases salen por el sistema de escape.'
    ],

    diagnostico: [
        'Comprobar que exista combustible.',
        'Escuchar activación de la bomba al poner contacto.',
        'Verificar alimentación eléctrica.',
        'Escanear códigos DTC.',
        'Comprobar parámetros de sensores.',
        'Medir presión de combustible según especificación del motor.',
        'Verificar funcionamiento de los inyectores.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoDuster = {

    titulo: 'Sistema de Encendido Electrónico',

    funcionamiento:
        'La ECU determina el momento de encendido utilizando información procedente de sensores como el CKP y otros parámetros del motor. Posteriormente controla las bobinas para generar la chispa en las bujías.',

    componentes: [
        {
            nombre: 'ECU',
            funcion:
                'Controla diferentes funciones del motor y determina el momento de activación del sistema de encendido.'
        },

        {
            nombre: 'Sensor CKP',
            funcion:
                'Informa la posición y velocidad del cigüeñal.'
        },

        {
            nombre: 'Bobinas',
            funcion:
                'Transforman la tensión disponible en el sistema eléctrico en la alta tensión necesaria para producir la chispa.'
        },

        {
            nombre: 'Bujías',
            funcion:
                'Generan la chispa dentro de la cámara de combustión.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar estado de batería.',
        'Comprobar fusibles relacionados con gestión del motor.',
        'Escanear la ECU.',
        'Comprobar señal del sensor CKP.',
        'Comprobar alimentación de las bobinas.',
        'Revisar conectores.',
        'Revisar cableado.',
        'Inspeccionar las bujías.',
        'Comprobar las bobinas.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposDuster = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende mientras se permite la entrada de aire y combustible al cilindro.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Introducir la carga necesaria para iniciar el ciclo de combustión.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende y comprime la mezcla dentro del cilindro con las válvulas cerradas.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Preparar la mezcla para la combustión.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía produce una chispa que inicia la combustión. Los gases generados ejercen presión sobre el pistón.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Convertir la energía de la combustión en movimiento mecánico.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende y expulsa los gases de combustión mediante las válvulas de escape.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Eliminar los gases quemados y preparar el siguiente ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasDuster = {

    basicas: [
        'Juego de llaves mixtas',
        'Juego de copas',
        'Llaves Torx',
        'Llaves Allen',
        'Destornilladores',
        'Pinzas',
        'Alicate de presión',
        'Gato hidráulico',
        'Torres de seguridad',
        'Linterna',
        'Embudo',
        'Recipiente para fluidos'
    ],

    diagnostico: [
        'Escáner OBD2',
        'Multímetro digital',
        'Probador de batería',
        'Compresímetro',
        'Manómetro de combustible',
        'Probador de chispa',
        'Lámpara de pruebas'
    ],

    profesional: [
        'Torquímetro',
        'Herramientas de sincronización',
        'Extractor de poleas',
        'Prensa hidráulica',
        'Equipo de diagnóstico Renault',
        'Herramientas específicas según motor'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralDuster = {

    principio:
        'Diagnosticar antes de reemplazar componentes. Una falla puede tener diferentes causas y cambiar piezas sin comprobarlas puede aumentar el costo de reparación.',

    secuencia: [

        '1. Confirmar el síntoma reportado por el usuario.',

        '2. Revisar visualmente el compartimiento del motor.',

        '3. Revisar niveles de aceite y refrigerante.',

        '4. Comprobar estado de batería.',

        '5. Realizar escaneo OBD2.',

        '6. Registrar códigos DTC encontrados.',

        '7. Revisar datos en vivo de sensores.',

        '8. Comprobar alimentación eléctrica y tierras.',

        '9. Realizar pruebas físicas según la falla.',

        '10. Determinar la causa probable.',

        '11. Reparar o reemplazar el componente defectuoso.',

        '12. Borrar códigos después de solucionar la causa.',

        '13. Realizar prueba de funcionamiento.',

        '14. Volver a escanear el vehículo.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesDuster = [

    {
        titulo: 'El motor no arranca',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Batería descargada',
            'Falla del motor de arranque',
            'Falta de combustible',
            'Problema de bomba de combustible',
            'Falla de sensor CKP',
            'Problema de encendido',
            'Problema de sincronización'
        ],

        diagnostico: [
            'Comprobar batería.',
            'Verificar si el motor de arranque gira.',
            'Comprobar combustible.',
            'Escanear ECU.',
            'Comprobar señal CKP.',
            'Comprobar chispa.',
            'Comprobar alimentación de combustible.'
        ]
    },

    {
        titulo: 'Motor tiembla o presenta tirones',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Bobina defectuosa',
            'Bujía desgastada',
            'Inyector con problemas',
            'Entrada de aire no medida',
            'Problema de sensor',
            'Baja compresión'
        ],

        diagnostico: [
            'Escanear códigos de falla.',
            'Buscar códigos relacionados con misfire.',
            'Revisar bujías.',
            'Revisar bobinas.',
            'Comprobar inyectores.',
            'Realizar prueba de compresión si es necesario.'
        ]
    },

    {
        titulo: 'Ralentí inestable',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Cuerpo de aceleración sucio',
            'Fuga de vacío',
            'Sensor MAP',
            'Sensor de temperatura',
            'Problemas de inyección',
            'Entrada de aire no controlada'
        ],

        diagnostico: [
            'Escanear la ECU.',
            'Observar RPM en ralentí.',
            'Revisar cuerpo de aceleración.',
            'Buscar fugas de aire.',
            'Revisar sensores.',
            'Comprobar mezcla mediante datos del escáner.'
        ]
    },

    {
        titulo: 'Pérdida de potencia',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Filtro de aire obstruido',
            'Problema de combustible',
            'Bujías desgastadas',
            'Bobinas defectuosas',
            'Catalizador restringido',
            'Sensor defectuoso',
            'Problema de distribución'
        ],

        diagnostico: [
            'Realizar escaneo.',
            'Revisar filtros.',
            'Revisar encendido.',
            'Comprobar presión de combustible según especificación.',
            'Analizar datos de sensores.',
            'Comprobar sistema de escape.'
        ]
    },

    {
        titulo: 'Sobrecalentamiento',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Nivel bajo de refrigerante',
            'Fuga de refrigerante',
            'Termostato defectuoso',
            'Electroventilador que no activa',
            'Radiador obstruido',
            'Bomba de agua defectuosa',
            'Problemas de junta de culata'
        ],

        diagnostico: [
            'Nunca abrir el sistema en caliente.',
            'Esperar a que el motor enfríe.',
            'Revisar nivel de refrigerante.',
            'Buscar fugas.',
            'Comprobar activación del electroventilador.',
            'Revisar termostato.',
            'Comprobar circulación del refrigerante.'
        ]
    },

    {
        titulo: 'Consumo excesivo de combustible',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Filtro de aire obstruido',
            'Sensor de oxígeno defectuoso',
            'Sensor de temperatura',
            'Inyectores con problemas',
            'Presión de combustible incorrecta',
            'Problemas de encendido',
            'Fugas de vacío'
        ],

        diagnostico: [
            'Escanear ECU.',
            'Revisar correcciones de combustible.',
            'Revisar sensor de oxígeno.',
            'Revisar temperatura del motor.',
            'Revisar inyectores.',
            'Revisar filtros.'
        ]
    },

    {
        titulo: 'Check Engine encendido',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Sensor defectuoso',
            'Problema de encendido',
            'Problema de emisiones',
            'Problema de combustible',
            'Fuga de aire',
            'Falla eléctrica'
        ],

        diagnostico: [
            'Conectar escáner OBD2.',
            'Leer códigos DTC.',
            'No borrar el código inmediatamente.',
            'Analizar el código y datos relacionados.',
            'Realizar pruebas antes de cambiar piezas.'
        ]
    },

    {
        titulo: 'Fuga de aceite',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Empaque deteriorado',
            'Retén desgastado',
            'Filtro mal instalado',
            'Tapón de aceite',
            'Fuga en tapa de válvulas'
        ],

        diagnostico: [
            'Limpiar la zona.',
            'Arrancar el motor.',
            'Identificar el punto donde aparece nuevamente el aceite.',
            'Reemplazar empaque o componente defectuoso.',
            'Comprobar nuevamente.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoDuster = {

    objetivo:
        'Mantener el vehículo confiable, reducir el riesgo de fallas y detectar problemas antes de que produzcan daños mayores.',

    actividades: [

        {
            nombre: 'Aceite y filtro',
            accion:
                'Revisar nivel periódicamente y realizar los cambios según el intervalo y especificación indicados por el manual de la versión correspondiente.'
        },

        {
            nombre: 'Filtro de aire',
            accion:
                'Inspeccionar periódicamente y reemplazar cuando esté contaminado u obstruido.'
        },

        {
            nombre: 'Bujías',
            accion:
                'Inspeccionar y reemplazar de acuerdo con el intervalo especificado para el motor.'
        },

        {
            nombre: 'Sistema de refrigeración',
            accion:
                'Revisar nivel, fugas, estado del refrigerante, mangueras, termostato y funcionamiento del electroventilador.'
        },

        {
            nombre: 'Distribución',
            accion:
                'Respetar estrictamente el intervalo del kit de distribución especificado para el motor y versión.'
        },

        {
            nombre: 'Frenos',
            accion:
                'Revisar pastillas, discos, líquido, mangueras y funcionamiento del sistema.'
        },

        {
            nombre: 'Suspensión',
            accion:
                'Inspeccionar amortiguadores, bujes, rótulas y componentes de dirección.'
        },

        {
            nombre: 'Batería',
            accion:
                'Comprobar voltaje, terminales, estado físico y sistema de carga.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadDuster = [

    'Nunca trabajar debajo del vehículo utilizando únicamente un gato hidráulico.',

    'Utilizar torres o caballetes de seguridad.',

    'No abrir el depósito de refrigerante cuando el motor esté caliente.',

    'Desconectar la batería cuando el procedimiento eléctrico lo requiera.',

    'No trabajar con combustible cerca de llamas o chispas.',

    'Utilizar gafas de protección.',

    'Utilizar guantes apropiados.',

    'Mantener herramientas y cables alejados de correas y poleas en movimiento.',

    'No realizar pruebas eléctricas improvisando puentes.',

    'Antes de realizar una reparación de distribución, consultar el procedimiento específico del motor.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosDuster = [

    {
        id: 1,

        titulo: 'Conociendo la Renault Duster',

        nivel: 'Básico',

        descripcion:
            'Identificación de los principales componentes del vehículo y funcionamiento general del motor.',

        temas: [
            'Motor',
            'Sistema de refrigeración',
            'Sistema de lubricación',
            'Sistema de combustible',
            'Sistema eléctrico',
            'Transmisión'
        ]
    },

    {
        id: 2,

        titulo: 'Funcionamiento del motor de cuatro tiempos',

        nivel: 'Básico',

        descripcion:
            'Aprendizaje del ciclo de admisión, compresión, combustión y escape.',

        temas: [
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Válvulas',
            'Árboles de levas',
            'Combustión'
        ]
    },

    {
        id: 3,

        titulo: 'Diagnóstico OBD2',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a utilizar un escáner para leer códigos y analizar parámetros del motor.',

        temas: [
            'DTC',
            'Check Engine',
            'Datos en vivo',
            'Sensores',
            'Actuadores',
            'Borrado de códigos'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema de refrigeración',

        nivel: 'Intermedio',

        descripcion:
            'Aprende cómo circula el refrigerante y cómo diagnosticar problemas de temperatura.',

        temas: [
            'Radiador',
            'Termostato',
            'Bomba de agua',
            'Electroventilador',
            'Depósito de expansión',
            'Fugas'
        ]
    },

    {
        id: 5,

        titulo: 'Sistema de encendido',

        nivel: 'Intermedio',

        descripcion:
            'Diagnóstico de bobinas, bujías, sensores y alimentación eléctrica.',

        temas: [
            'Bobinas',
            'Bujías',
            'CKP',
            'ECU',
            'Misfire',
            'Chispa'
        ]
    },

    {
        id: 6,

        titulo: 'Distribución del motor',

        nivel: 'Avanzado',

        descripcion:
            'Introducción al funcionamiento y diagnóstico del sistema de sincronización.',

        temas: [
            'Cigüeñal',
            'Árboles de levas',
            'Correa',
            'Tensor',
            'Sincronización',
            'PMS'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioDuster = [

    {
        termino: 'ECU',
        significado:
            'Unidad electrónica que controla diferentes funciones del motor.'
    },

    {
        termino: 'OBD2',
        significado:
            'Sistema de diagnóstico utilizado para consultar información y códigos relacionados con el vehículo.'
    },

    {
        termino: 'DTC',
        significado:
            'Código de diagnóstico que indica una condición detectada por algún sistema electrónico.'
    },

    {
        termino: 'CKP',
        significado:
            'Sensor de posición del cigüeñal.'
    },

    {
        termino: 'MAP',
        significado:
            'Sensor que mide la presión absoluta en el múltiple de admisión.'
    },

    {
        termino: 'TPS',
        significado:
            'Sensor relacionado con la posición de la mariposa de aceleración.'
    },

    {
        termino: 'DOHC',
        significado:
            'Configuración de motor con doble árbol de levas en la culata.'
    },

    {
        termino: 'VVT',
        significado:
            'Sistema de variación del tiempo de apertura de válvulas presente en determinadas motorizaciones.'
    },

    {
        termino: 'PMS',
        significado:
            'Punto muerto superior del recorrido del pistón.'
    },

    {
        termino: 'OBD',
        significado:
            'Diagnóstico a bordo del vehículo.'
    },

    {
        termino: 'Misfire',
        significado:
            'Falla de combustión en uno o más cilindros.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoDuster(anio, configuracion) {

    const sintomasMapeados = fallasComunesDuster.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a Renault Duster ' +
            anio +
            '. La configuración exacta puede variar según motor y versión.',

        herramientas: [
            ...herramientasDuster.basicas,
            ...herramientasDuster.diagnostico
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
                        nombre: 'Diagnóstico General',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Eléctrico / Electrónico',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Sistema de Encendido',

                        sintomas: [

                            {
                                titulo: 'El motor gira pero no arranca',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'La falla puede estar relacionada con alimentación eléctrica, combustible, sensor CKP, encendido o sincronización.',

                                herramientas: [
                                    'Escáner OBD2',
                                    'Multímetro',
                                    'Probador de chispa'
                                ],

                                pasos: [
                                    '1. Comprobar batería.',
                                    '2. Verificar que el motor de arranque gire correctamente.',
                                    '3. Realizar escaneo OBD2.',
                                    '4. Comprobar señal CKP.',
                                    '5. Comprobar chispa.',
                                    '6. Comprobar alimentación de combustible.',
                                    '7. Continuar con pruebas específicas según resultado.'
                                ]
                            }
                        ]
                    }
                ]
            },

            refrigeracion: {

                titulo: 'Refrigeración',

                icono: '🌡️',

                subcategorias: [

                    {
                        nombre: 'Temperatura del Motor',

                        sintomas: [

                            {
                                titulo: 'Motor se calienta demasiado',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Una temperatura excesiva puede estar relacionada con refrigerante insuficiente, termostato, ventilación, radiador o bomba de agua.',

                                herramientas: [
                                    'Multímetro',
                                    'Linterna',
                                    'Herramientas básicas'
                                ],

                                pasos: [
                                    '1. Esperar a que el motor esté frío.',
                                    '2. Comprobar nivel de refrigerante.',
                                    '3. Buscar fugas.',
                                    '4. Comprobar funcionamiento del electroventilador.',
                                    '5. Revisar termostato.',
                                    '6. Revisar radiador.',
                                    '7. Comprobar circulación del refrigerante.'
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
// RENAULT DUSTER 2012
// ============================================================

export const renaultDuster2012 = {

    marca: 'Renault',

    modelo: 'Duster',

    anio: 2012,

    tipo: 'SUV',

    imagen:
        'https://cdn-strapi.patiotuerca.com/cdn-cgi/image/trim=0;0;0;720/1440x500_duster_Ikonic_2d8f4d89a8.png',

    descripcion:
        'Plataforma educativa de la Renault Duster 2012, primera generación comercializada en Colombia, orientada al aprendizaje del motor, mantenimiento, diagnóstico OBD2 y reparación.',

    informacionHistorica: {

        titulo: 'Renault Duster 2012',

        generacion: 'Primera generación',

        familiaMotor:
            'K4M 1.6L / F4R 2.0L según versión',

        tipoMotor:
            'Motor de combustión interna de 4 cilindros en línea y 4 tiempos',

        arquitectura:
            'DOHC 16 válvulas',

        alimentacion:
            'Inyección electrónica multipunto',

        encendido:
            'Encendido electrónico',

        refrigeracion:
            'Refrigeración líquida',

        distribucion:
            'Correa de distribución',

        transmision:
            'Según versión: transmisión manual o automática',

        traccion:
            '4x2 o 4x4 según versión'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona la Duster 2012?',

        explicacion:
            'El motor transforma la energía química del combustible en movimiento mecánico mediante cuatro etapas: admisión, compresión, combustión y escape.',

        formulaSimple:
            'Aire + combustible + compresión + chispa = combustión → movimiento del cigüeñal',

        flujoEnergia: [
            'Tanque',
            'Bomba de combustible',
            'Inyección',
            'Admisión',
            'Combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague',
            'Caja',
            'Transmisión',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposDuster,

    componentesMotor: sistemasMotorDuster,

    sistemaCombustible: sistemaCombustibleDuster,

    sistemaEncendido: sistemaEncendidoDuster,

    refrigeracion: {

        tipo: 'Refrigeración líquida',

        elementos: [
            'Radiador',
            'Bomba de agua',
            'Termostato',
            'Electroventilador',
            'Depósito de expansión',
            'Mangueras'
        ],

        funcionamiento:
            'El refrigerante circula por el motor, absorbe calor y posteriormente pasa por el radiador para disiparlo.'
    },

    lubricacion: {

        tipo: 'Lubricación mediante aceite de motor',

        componentes: [
            'Cárter',
            'Bomba de aceite',
            'Filtro de aceite',
            'Conductos internos',
            'Cojinetes',
            'Elementos móviles'
        ],

        funcionamiento:
            'El aceite es impulsado por el sistema de lubricación hacia los componentes móviles del motor.'
    },

    distribucion: {

        titulo: 'Distribución del motor',

        tipo:
            'Correa de distribución',

        funcion:
            'Mantener sincronizados el cigüeñal y los árboles de levas.',

        advertencia:
            'La intervención de la distribución debe realizarse utilizando el procedimiento y herramientas apropiadas para el motor específico.'
    },

    diagnosticoGeneral: diagnosticoGeneralDuster,

    fallasComunes: fallasComunesDuster,

    herramientas: herramientasDuster,

    mantenimiento: mantenimientoDuster,

    cursos: cursosDuster,

    seguridad: seguridadDuster,

    glosario: glosarioDuster,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2012,
                {
                    tecnologia:
                        'Primera generación - inyección electrónica multipunto DOHC 16V',

                    motorPrincipal:
                        'K4M 1.6L / F4R 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2013
// ============================================================

export const renaultDuster2013 = {

    ...renaultDuster2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Renault Duster 2013. Incluye funcionamiento del motor, diagnóstico electrónico, mantenimiento, refrigeración, encendido y transmisión.',

    informacionHistorica: {

        ...renaultDuster2012.informacionHistorica,

        titulo: 'Renault Duster 2013',

        anio: 2013,

        modeloHistorico:
            'Duster primera generación',

        nota:
            'Las especificaciones dependen de la versión comercializada y del mercado.'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2013,
                {
                    tecnologia:
                        'Primera generación - inyección electrónica multipunto DOHC 16V',

                    motorPrincipal:
                        'K4M 1.6L / F4R 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2014
// ============================================================

export const renaultDuster2014 = {

    ...renaultDuster2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Renault Duster 2014, enfocada en mantenimiento preventivo, diagnóstico OBD2, motor, transmisión y sistemas eléctricos.',

    informacionHistorica: {

        ...renaultDuster2013.informacionHistorica,

        titulo: 'Renault Duster 2014',

        anio: 2014,

        modeloHistorico:
            'Duster primera generación'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2014,
                {
                    tecnologia:
                        'Primera generación - inyección electrónica multipunto',

                    motorPrincipal:
                        'Motores 1.6L / 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2015
// ============================================================

export const renaultDuster2015 = {

    ...renaultDuster2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para Renault Duster 2015 con información de diagnóstico del motor, sistemas electrónicos, mantenimiento y fallas comunes.',

    informacionHistorica: {

        ...renaultDuster2014.informacionHistorica,

        titulo: 'Renault Duster 2015',

        anio: 2015,

        modeloHistorico:
            'Duster primera generación / actualización según mercado'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2015,
                {
                    tecnologia:
                        'Primera generación - sistema de inyección electrónica',

                    motorPrincipal:
                        '1.6L / 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2016
// ============================================================

export const renaultDuster2016 = {

    ...renaultDuster2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Renault Duster 2016, incluyendo diagnóstico OBD2, motor, inyección electrónica, refrigeración, encendido y transmisión.',

    informacionHistorica: {

        ...renaultDuster2015.informacionHistorica,

        titulo: 'Renault Duster 2016',

        anio: 2016,

        modeloHistorico:
            'Duster primera generación / actualización'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2016,
                {
                    tecnologia:
                        'Primera generación actualizada - inyección electrónica',

                    motorPrincipal:
                        '1.6L / 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2017
// ============================================================

export const renaultDuster2017 = {

    ...renaultDuster2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Renault Duster 2017 orientada al aprendizaje automotriz, diagnóstico, mantenimiento y reparación.',

    informacionHistorica: {

        ...renaultDuster2016.informacionHistorica,

        titulo: 'Renault Duster 2017',

        anio: 2017,

        modeloHistorico:
            'Duster primera generación / actualización'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2017,
                {
                    tecnologia:
                        'Primera generación actualizada - gestión electrónica del motor',

                    motorPrincipal:
                        '1.6L / 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2018
// ============================================================

export const renaultDuster2018 = {

    ...renaultDuster2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Renault Duster 2018 con módulos de funcionamiento del motor, diagnóstico electrónico, mantenimiento y reparación.',

    informacionHistorica: {

        ...renaultDuster2017.informacionHistorica,

        titulo: 'Renault Duster 2018',

        anio: 2018,

        modeloHistorico:
            'Duster primera generación / actualización'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2018,
                {
                    tecnologia:
                        'Primera generación actualizada - inyección electrónica',

                    motorPrincipal:
                        '1.6L / 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2019
// ============================================================

export const renaultDuster2019 = {

    ...renaultDuster2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Renault Duster 2019, enfocada en diagnóstico OBD2, mantenimiento preventivo, fallas comunes y funcionamiento de sistemas automotrices.',

    informacionHistorica: {

        ...renaultDuster2018.informacionHistorica,

        titulo: 'Renault Duster 2019',

        anio: 2019,

        modeloHistorico:
            'Duster primera generación / actualización'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2019,
                {
                    tecnologia:
                        'Primera generación actualizada - gestión electrónica',

                    motorPrincipal:
                        '1.6L / 2.0L según versión'
                }
            );
        }
};


// ============================================================
// RENAULT DUSTER 2020
// ============================================================

export const renaultDuster2020 = {

    ...renaultDuster2019,

    anio: 2020,

    descripcion:
        'Plataforma educativa para Renault Duster 2020, último año del conjunto anterior a la renovación de motorizaciones presentada para Colombia en 2021.',

    informacionHistorica: {

        ...renaultDuster2019.informacionHistorica,

        titulo: 'Renault Duster 2020',

        anio: 2020,

        modeloHistorico:
            'Duster primera generación / actualización',

        nota:
            'Para Colombia, la renovación con los motores 1.6 SCe y 1.3 TCe corresponde a la nueva Duster presentada en 2021.'
    },

    obtenerDiagnosticoPorAnio:
        function () {

            return crearDiagnosticoDuster(
                2020,
                {
                    tecnologia:
                        'Última etapa de la generación anterior - gestión electrónica',

                    motorPrincipal:
                        'Motorizaciones 1.6L / 2.0L según versión y mercado'
                }
            );
        }
};


// ============================================================
// LISTA GENERAL DE DUSTER DISPONIBLES
// ============================================================

export const renaultDuster = {

    marca: 'Renault',

    modelo: 'Duster',

    tipo: 'SUV',

    imagen:
        'https://cdn-strapi.patiotuerca.com/cdn-cgi/image/trim=0;0;0;720/1440x500_duster_Ikonic_2d8f4d89a8.png',

    aniosDisponibles: [
        2012,
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

        2012: renaultDuster2012,

        2013: renaultDuster2013,

        2014: renaultDuster2014,

        2015: renaultDuster2015,

        2016: renaultDuster2016,

        2017: renaultDuster2017,

        2018: renaultDuster2018,

        2019: renaultDuster2019,

        2020: renaultDuster2020
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2012];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
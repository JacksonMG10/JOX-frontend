const sistemasMotorNKD = [
    {
        nombre: 'Bloque del motor y Cilindro (Serie CGB / CXX 125cc)',
        funcion:
            'Estructura de aleación de aluminio con camisa de hierro fundido refrigerada por aire que aloja el pistón, cigüeñal y cadena de distribución o varillas empujadoras (OHV/OHC).',
        fallas: [
            'Fugas de aceite por empaque de la base del cilindro o tapa de culata',
            'Desgaste en la camisa por trabajar con nivel bajo o aceite degradado',
            'Sobrecalentamiento por saturación de aletas de refrigeración con barro o suciedad',
            'Humo azul en el escape por desgaste de anillos o sellos de válvula'
        ]
    },

    {
        nombre: 'Culata SOHC 2V / OHV (2 Válvulas)',
        funcion:
            'Aloja las válvulas de admisión y escape, bujía y balancines de accionamiento.',
        fallas: [
            'Descalibración o holgura incorrecta en balancines (sonido de "cascabeleo" o válvulas pisadas)',
            'Soplado de empaque de culata por apriete incorrecto o sobrecalentamiento',
            'Fuga de compresión por sellado deficiente en asientos de válvula',
            'Desgaste de sellos de válvula (causa humo blanco/azul al arrancar)'
        ]
    },

    {
        nombre: 'Cigüeñal y Biela con Cojinetes de Rodillo',
        funcion:
            'Convierte el movimiento alternativo del pistón en rotación hacia la caja de cambios de 5 velocidades mediante el embrague húmedo.',
        fallas: [
            'Golpeteo grave en el cárter (ruido de biela) por falta de lubricación',
            'Fuga de aceite por el retén del eje del piñón de salida o de la pata de cambios',
            'Desgaste excesivo de la canastilla de biela'
        ]
    },

    {
        nombre: 'Pistón y Anillos de Fricción',
        funcion:
            'Comprimen la mezcla aire/gasolina y transmiten la fuerza de combustión hacia la biela.',
        fallas: [
            'Anillos pegados por sedimentación de aceite degradado',
            'Pérdida drástica de compresión (dificultad para encender)',
            'Rayado de falda de pistón por trabajar sin filtro de aire'
        ]
    },

    {
        nombre: 'Cadena de Distribución / Varillas Empujadoras y Tensor',
        funcion:
            'Mantiene la sincronización exacta entre el cigüeñal y el árbol de levas superior.',
        fallas: [
            'Estiramiento de la cadena de distribución con ruido metálico en la tapa izquierda',
            'Falla del tensor mecánico/automático de la cadena',
            'Desgaste de los patines guía de caucho internos'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración por Aire Convectivo',
        funcion:
            'Disipa el calor generado en la cámara de combustión aprovechando el flujo de aire cuando la motocicleta está en movimiento.',
        fallas: [
            'Pérdida de potencia por sobrecalentamiento en tráfico pesado detenido',
            'Aletas de disipación partidas o cubiertas de aceite/tierra'
        ]
    },

    {
        nombre: 'Sistema de Lubricación por Bomba de Trocoide y Filtro Malla',
        funcion:
            'Circula aceite a presión hacia la culata, balancines, caja de cambios y embrague sumergido.',
        fallas: [
            'Malla/tamiz del cárter tapado con viruta o sellador RTV (impide el flujo de aceite)',
            'Falta de lubricación en la culata (desgasta árbol de levas y balancines)',
            'Desgaste de la bomba de aceite trocoide'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleNKD = {

    titulo: 'Sistema de Alimentación por Carburador de Cortina (PZ26) / Diafragma Euro 3',

    funcionamiento:
        'El combustible fluye por gravedad desde el tanque hacia la cuba del carburador. El paso de aire crea un efecto Venturi que aspira y pulveriza la gasolina a través de los boquereles (chicleres) de baja y alta.',

    componentes: [
        'Tanque de combustible de 2.6 galones con grifo/llave de reserva',
        'Filtro de gasolina de elemento de papel/malla externa',
        'Carburador de cortina PZ26 / Carburador de diafragma Euro 3',
        'Boquerel (chicler) de baja / piloto y boquerel de alta',
        'Cisne/Múltiple de admisión de aluminio con baquelita aislante',
        'Filtro de aire de espuma lavable / elemento seco',
        'Sistema de ahogador (choke) manual'
    ],

    flujo: [
        '1. La gasolina baja por gravedad desde la llave de paso hacia el carburador.',
        '2. El punzón accionado por el flotador regula el nivel constante de la cuba.',
        '3. La apertura del puño del acelerador levanta la cortina/aguja permitiendo el paso de aire.',
        '4. El aire pulveriza la gasolina formando la mezcla combustible.',
        '5. La mezcla pasa por el múltiple de admisión hacia la válvula de la culata.'
    ],

    diagnostico: [
        'Inspeccionar presencia de agua o mugre en el vaso/cuba del carburador.',
        'Verificar que el boquerel de baja no esté obstruido si la moto no sostiene el ralentí.',
        'Ajustar la aguja de aire/mezcla (1.5 a 2 vueltas desde el fondo como base).',
        'Verificar que la baquelita del múltiple de admisión no tenga grietas que causen fugas de aire.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO
// ============================================================

const sistemaEncendidoNKD = {

    titulo: 'Sistema de Encendido por Descarga de Condensador (CDI de C.A. o C.D.)',

    funcionamiento:
        'La bobina captadora (pulsora) en las bobinas de encendido envía una señal al módulo CDI, el cual descarga el voltaje acumulado hacia la bobina de alta tensión, generando la chispa en la bujía.',

    componentes: [
        {
            nombre: 'Plato de Bobinas (Stator) y Bobina Pulsora',
            funcion:
                'Genera la corriente de carga y la señal de tiempo de encendido.'
        },

        {
            nombre: 'Módulo de Encendido CDI',
            funcion:
                'Almacena energía y determina el avance de la chispa de acuerdo a las RPM.'
        },

        {
            nombre: 'Bobina de Alta Tensión y Capuchón de Bujía',
            funcion:
                'Eleva el voltaje de salida del CDI hasta más de 15.000V.'
        },

        {
            nombre: 'Bujía Estándar (D8EA / CPR7EA o equivalente)',
            funcion:
                'Genera el arco eléctrico dentro de la cámara de combustión.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el estado del fusible principal de 10A/15A cerca de la batería.',
        'Medir la resistencia de la bobina pulsora (debe estar entre 100 Ω y 180 Ω).',
        'Probar continuidad del switch principal de encendido (RUN/OFF del manubrio y switch de llave).',
        'Inspeccionar el capuchón de bujía (revisar si la resistencia interna está abierta).',
        'Probar con un módulo CDI de repuesto compatible.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposNKD = [

    {
        numero: 1,
        nombre: 'Admisión',

        descripcion:
            'El pistón desciende del PMS al PMI. La válvula de admisión se abre y el carburador entrega la mezcla aire/gasolina pulverizada.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta',
            escape: 'Cerrada'
        },

        objetivo:
            'Ingresar la mayor mezcla atomizada al interior del cilindro.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón sube del PMI al PMS con ambas válvulas cerradas, comprimiendo la mezcla aire/combustible (relación ~9.2:1).',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la presión y temperatura de la mezcla antes del salto de chispa.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'El CDI envía la señal, la bujía genera la chispa e inflama la mezcla. Los gases empujan con fuerza el pistón hacia abajo.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el movimiento mecánico que mueve la transmisión de 5 marchas.'
    },

    {
        numero: 4,
        nombre: 'Escape',

        descripcion:
            'El pistón asciende impulsando los gases quemados hacia el tubo de escape pasando por el silenciador.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Expulsar los residuos quemados para iniciar un nuevo ciclo.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasNKD = {

    basicas: [
        'Juego de llaves fijas o de boca milimétricas (8mm, 10mm, 12mm, 13mm, 14mm, 17mm, 19mm, 22mm)',
        'Copa para bujía de 18mm / 16mm',
        'Destornilladores de pala y estrella (N° 2 y N° 3)',
        'Calibrador de galgas / láminas para válvulas (0.05mm - 0.08mm)',
        'Alicate de presión y alicate universal',
        'Recipiente para drenaje de aceite (1 litro) y embudo'
    ],

    diagnostico: [
        'Multímetro digital automotriz para pruebas de resistencia y voltaje AC/DC',
        'Probador de chispa / chispómetro',
        'Compresímetro con acople de rosca para bujía (M12 / M14)',
        'Cargador / Mantenedor de batería de 12V para motocicleta'
    ],

    profesional: [
        'Torquímetro de 1/4 y 3/8 de pulgada (8 Nm a 50 Nm)',
        'Sujetador/Extractor de volante magnético (Extractor de cuna AKT/Honda)',
        'Herramienta de sujeción de embrague y copa castillo para tuerca de filtro centrífugo',
        'Prensa manual de resortes de válvula'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralNKD = {

    principio:
        'Diagnóstico práctico de 3 pilares: Comprobar presencia de chispa, flujo de combustible en carburador y buena compresión mecánica.',

    secuencia: [

        '1. Preguntar al conductor las condiciones bajo las cuales comenzó la falla.',

        '2. Verificar si la batería tiene carga (mínimo 12.4V) y si las luces/pito funcionan correctamente.',

        '3. Probar chispa en la bujía retirándola y haciendo masa contra el cilindro mientras se da crank o patada.',

        '4. Inspeccionar el flujo de gasolina desde el tanque soltando el manguito del carburador y abriendo la llave.',

        '5. Comprobar compresión tapando con el pulgar la rosca de la bujía y accionando el pedal de arranque.',

        '6. Desmontar y realizar mantenimiento al carburador si la chispa y compresión están en norma.',

        '7. Verificar la calibración de válvulas si presenta dificultad de encendido en frío.',

        '8. Reemplazar repuestos dañados utilizando piezas de calidad OEM AKT.',

        '9. Ajustar ralentí y mezcla de aire/gasolina.',

        '10. Realizar prueba de ruta en pendientes para verificar rendimiento.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesNKD = [

    {
        titulo: 'La motocicleta se apaga en ralentí o dificulta encender en frío',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Válvula de admisión pisada (sin holgura/luz de calibración)',
            'Boquerel de baja / chicler de ralentí obstruido por sedimentos',
            'Fuga de aire en el empaque o baquelita del múltiple de admisión',
            'Bujía desgastada, mojada o con exceso de carbón'
        ],

        diagnostico: [
            'Calibrar válvulas en frío (Admisión: 0.05mm / Escape: 0.08mm).',
            'Desmontar la cuba del carburador y limpiar el boquerel de baja con limpiador de carburador.',
            'Verificar la estanqueidad de la baquelita del cisne de admisión.',
            'Limpiar o reemplazar la bujía D8EA.'
        ]
    },

    {
        titulo: 'El embrague/clutch patina o cuesta encontrar la marcha neutro',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Guaya/cable de embrague demasiado tensionado o deshilachado',
            'Discos de embrague/fricción desgastados por uso de aceite inadecuado (usar aceite JASO MA2)',
            'Resortes de la prensa de embrague ceditos o fatigados'
        ],

        diagnostico: [
            'Ajustar el juego libre de la manigueta de embrague (2mm a 3mm de tolerancia).',
            'Drenar el aceite y verificar presencia de partículas de pasta de disco.',
            'Desmontar la tapa derecha del cárter y medir el espesor de los discos de fricción.'
        ]
    },

    {
        titulo: 'Falta de carga en la batería / Pito débil y luz tenue al frenar',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Regulador/Rectificador de voltaje dañado o desconectado',
            'Batería sulfurada o deshidratada (en baterías secas/de gel)',
            'Bobina de carga del estator quemada',
            'Fusible principal de 10A/15A sulfatado'
        ],

        diagnostico: [
            'Medir el voltaje en bornes de la batería con la moto encendida a 4000 RPM (debe marcar entre 13.5V y 14.5V).',
            'Comprobar el voltaje alterno de salida del plato de bobinas.',
            'Reemplazar el regulador/rectificador si el voltaje sube por encima de 15V o no carga.'
        ]
    },

    {
        titulo: 'Ruido de chasquido constante en la culata ("Traqueteo" de válvulas)',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Holgura/luz de válvulas demasiado abierta',
            'Desgaste en la punta de la manzana/balancín o árbol de levas',
            'Falta de lubricación en la parte superior del motor'
        ],

        diagnostico: [
            'Retirar las tapas de inspección de válvulas y verificar la luz con calibrador de galgas.',
            'Verificar que llegue flujo de aceite a la culata aflojando levemente el perno superior del cilindro en marcha.',
            'Inspeccionar desgaste en la superficie del balancín.'
        ]
    },

    {
        titulo: 'Consumo excesivo de gasolina o humo negro al acelerar a fondo',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Choke / ahogador manual parcialmente accionado',
            'Filtro de aire de espuma lleno de barro, aceite o mugre',
            'Nivel de gasolina en la cuba demasiado alto (flotador mal calibrado)',
            'Boquerel de alta sobremedida'
        ],

        diagnostico: [
            'Comprobar la posición de la palanca del ahogador.',
            'Lavar y secar el filtro de aire de espuma e impregnar levemente con aceite para filtro.',
            'Ajustar el nivel del flotador dentro de la cuba del carburador.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoNKD = {

    objetivo:
        'Garantizar la confiabilidad en el transporte diario, alargar la vida del motor CGB/CXX y asegurar un frenado y tracción óptimos.',

    actividades: [

        {
            nombre: 'Aceite de motor (4T)',
            accion:
                'Reemplazar cada 2.000 km o 2.500 km utilizando 1.000 ml de aceite mineral o semi-sintético 20W-50 / 10W-40 con certificación JASO MA2 / API SL.'
        },

        {
            nombre: 'Filtro centrífugo y malla de cárter',
            accion:
                'Limpiar la malla tamiz y el filtro centrífugo de aceite ubicado en la tapa derecha cada 10.000 km.'
        },

        {
            nombre: 'Calibración de Válvulas (Luz/Holgura)',
            accion:
                'Calibrar cada 6.000 km en frío. Medidas estándar: Admisión 0.05mm / Escape 0.08mm.'
        },

        {
            nombre: 'Mantenimiento de Carburador y Filtro de Aire',
            accion:
                'Lavar el filtro de espuma y realizar limpieza interna del carburador cada 5.000 km.'
        },

        {
            nombre: 'Kit de Arrastre (Cadena, Piñón y Catalina)',
            accion:
                'Limpiar, tensionar y lubricar la cadena de transmisión (428) cada 50.000 km o cada 500 km. Reemplazar el kit de arrastre completo entre 12.000 km y 15.000 km.'
        },

        {
            nombre: 'Frenos (Disco delantero y Tambor trasero)',
            accion:
                'Inspeccionar grosor de pastillas delanteras y bandas/zapatas traseras cada 3.000 km; reemplazar fluido DOT 4 cada 12 meses.'
        },

        {
            nombre: 'Bujía de encendido',
            accion:
                'Limpiar y ajustar la holgura del electrodo (0.6mm - 0.7mm) cada 3.000 km; sustituir bujía cada 8.000 km.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadNKD = [

    'NUNCA manipule la cadena de transmisión ni efectúe limpiezas con el motor en marcha y una marcha engranada para evitar atrapamientos graves.',

    'Sostenga la motocicleta firmemente sobre el soporte central (gato central) en una superficie plana antes de retirar ruedas o aflojar ejes.',

    'Utilice anteojos de protección al sopletear chicleres o componentes del carburador con limpiador presurizado.',

    'Desconecte el borne negativo de la batería de 12V antes de trabajar en la instalación eléctrica o sistema de encendido.',

    'Respete el torque recomendado en la tuerca del eje de las ruedas (55 Nm a 65 Nm) y en el tapón del cárter (20 Nm).'
];


// ============================================================
// CURSOS
// ============================================================

const cursosNKD = [

    {
        id: 1,

        titulo: 'Mecánica Básica y Mantenimiento de la AKT NKD 125',

        nivel: 'Básico',

        descripcion:
            'Aprende a realizar el cambio de aceite, tensión de cadena, limpieza de carburador y mantenimiento preventivo.',

        temas: [
            'Ubicación de componentes y herramientas básicas necesarias',
            'Procedimiento de cambio de aceite y limpieza del tamiz',
            'Tensión y alineación de la cadena de transmisión 428',
            'Ajuste del cable de acelerador y freno'
        ]
    },

    {
        id: 2,

        titulo: 'Calibración de Válvulas y Sincronización del Motor CGB/CXX',

        nivel: 'Intermedio',

        descripcion:
            'Guía técnica paso a paso para la puesta a punto en PMS y calibración precisa de la holgura de válvulas con galgas.',

        temas: [
            'Búsqueda del Punto Muerto Superior (PMS) en la volante magnética',
            'Uso correcto del calibrador de galgas en admisión y escape',
            'Inspección visual del balancín y varillas/cadena',
            'Resolución del ruido de válvulas'
        ]
    },

    {
        id: 3,

        titulo: 'Carburación, Mezcla y Ajuste de Eficiencia',

        nivel: 'Intermedio',

        descripcion:
            'Aprende a desarmar, limpiar y diagnosticar el carburador PZ26 / diafragma y ajustar el tornillo de mezcla aire/gasolina.',

        temas: [
            'Desarme completo del carburador y función de chicleres',
            'Ajuste de la altura de la aguja y nivel del flotador',
            'Regulación del tornillo de aire y ralentí',
            'Diagnóstico del color de la bujía para ajuste de mezcla'
        ]
    },

    {
        id: 4,

        titulo: 'Sistema Eléctrico, Encendido por CDI y Sistema de Carga',

        nivel: 'Avanzado',

        descripcion:
            'Uso del multímetro para medir el estator, regulador de voltaje, módulo CDI, bobina de alta y diagramas de cableado.',

        temas: [
            'Lectura del diagrama eléctrico básico de AKT NKD',
            'Prueba de continuidad y resistencia del plato de bobinas',
            'Diagnóstico del sistema de carga y rectificación de voltaje',
            'Diagnóstico de fallas en el circuito de encendido por CDI'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioNKD = [

    {
        termino: 'NKD 125',
        significado:
            'Modelo emblemático de motocicleta de trabajo/calle de la marca colombiana AKT Motos, equipada con motor monocilíndrico de 125cc.'
    },

    {
        termino: 'CDI',
        significado:
            'Capacitor Discharge Ignition (Encendido por Descarga de Condensador). Módulo electrónico que controla el instante del salto de chispa.'
    },

    {
        termino: 'Chicler / Boquerel',
        significado:
            'Tornillo de bronce calibrado con un orificio preciso que regula el paso de gasolina dentro del carburador.'
    },

    {
        termino: 'Holgura de Válvulas',
        significado:
            'Espacio/luz necesario entre el balancín y el vástago de la válvula para compensar la dilatación térmica del metal.'
    },

    {
        termino: 'JASO MA2',
        significado:
            'Norma de certificación de aceite de motor de 4 tiempos formulada para evitar el deslizamiento de embragues húmedos.'
    },

    {
        termino: 'PZ26',
        significado:
            'Referencia estándar de carburador de cortina de 26mm de garganta utilizado en motores monocilíndricos de 125cc.'
    },

    {
        termino: 'Filtro Centrífugo',
        significado:
            'Dispositivo rotativo montado en el cigüeñal que atrapa partículas e impurezas pesadas por fuerza centrífuga.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoNKD(anio, configuracion) {

    const sintomasMapeados = fallasComunesNKD.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente a la AKT NKD 125 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasNKD.basicas,
            ...herramientasNKD.diagnostico
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

                titulo: 'Motor y Carburación AKT 125cc',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Sistema Eléctrico, CDI y Luces LED',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Encendido CDI y Carga',

                        sintomas: [

                            {
                                titulo: 'La moto no da chispa en la bujía o no enciende con el botón de arranque',

                                dificultad: 'Básico 🟢',

                                descripcion:
                                    'Revisión del fusible principal de 10A/15A, batería de 12V, bobina pulsora y CDI.',

                                herramientas: [
                                    'Multímetro digital',
                                    'Chispómetro / Bujía de prueba',
                                    'Juego de llaves'
                                ],

                                pasos: [
                                    '1. Verificar que el interruptor de apagado de emergencia (RUN) esté en posición encendido.',
                                    '2. Medir el voltaje de la batería en reposo (debe estar por encima de 12.4V).',
                                    '3. Verificar la resistencia de la bobina pulsora del plato de bobinas (~120 a 160 Ω).',
                                    '4. Inspeccionar la continuidad del capuchón de bujía y el cable de alta.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Caja de Cambios y Kit de Arrastre',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Embrague y Transmisión Secundaria',

                        sintomas: [

                            {
                                titulo: 'Dificultad para engranar marchas o patinamiento de discos de embrague',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Calibración de la guaya de embrague, verificación de discos y viscosidad de aceite.',

                                herramientas: [
                                    'Llaves fijas de 10mm y 12mm',
                                    'Herramientas manuales',
                                    'Recipiente para aceite'
                                ],

                                pasos: [
                                    '1. Ajustar el juego libre en la leva de embrague del manubrio (2mm a 3mm).',
                                    '2. Verificar que el aceite utilizado sea especificación JASO MA2 para embrague húmedo.',
                                    '3. Inspeccionar el desgaste de los discos de fricción si el motor se revoluciona sin avanzar.'
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
// MODELOS INDIVIDUALES POR AÑO (AKT NKD 125 2012 - 2026)
// ============================================================

// --- PRIMERA GENERACIÓN NKD 125 (2012 - 2019) ---

export const aktNKD125_2012 = {

    marca: 'AKT',

    modelo: 'NKD 125',

    anio: 2012,

    tipo: 'Motocicleta de Calle / Trabajo',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/AKT_NKD_125.jpg/1200px-AKT_NKD_125.jpg',

    descripcion:
        'Plataforma educativa para AKT NKD 125 2012 (Motor CGB 125cc 4T monocilíndrico refrigerado por aire, carburador PZ26 y frenos de tambor/disco según versión).',

    informacionHistorica: {

        titulo: 'AKT NKD 125 2012',

        generacion: 'Primera generación NKD 125',

        familiaMotor: '125cc CGB 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4 tiempos refrigerado por aire',

        arquitectura: 'OHV / SOHC 2 Válvulas',

        alimentacion: 'Carburador de Cortina PZ26',

        encendido: 'Electrónico por CDI (Arranque eléctrico y de pedal)',

        refrigeracion: 'Enfriado por aire de flujo natural',

        distribucion: 'Varillas empujadoras / Cadena de distribución',

        transmision: 'Manual de 5 velocidades con embrague húmedo multidisco'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor de la AKT NKD 125 2012?',

        explicacion:
            'Un motor monocilíndrico de 4 tiempos eficiente y sencillo de reparar que combina bajos costos de mantenimiento con un par adecuado para el tráfico urbano.',

        formulaSimple:
            'Aire + gasolina por carburador + compresión + chispa CDI = movimiento ágil de 5 velocidades',

        flujoEnergia: [
            'Tanque de combustible (2.6 galones)',
            'Llave de reserva',
            'Carburador PZ26',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague en baño de aceite',
            'Caja de 5 marchas',
            'Piñón de salida',
            'Cadena 428',
            'Rueda trasera'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposNKD,

    componentesMotor: sistemasMotorNKD,

    sistemaCombustible: sistemaCombustibleNKD,

    sistemaEncendido: sistemaEncendidoNKD,

    refrigeracion: {

        tipo: 'Refrigeración por aire convectivo',

        elementos: [
            'Aletas de refrigeración en bloque de cilindro',
            'Aletas de disipación en culata',
            'Flujo de aire por desplazamiento'
        ],

        funcionamiento:
            'El aire ambiente circula por las aletas metálicas disipando el calor térmico generado por la combustión.'
    },

    lubricacion: {

        tipo: 'Lubricación forzada por bomba trocoide e inmersión',

        componentes: [
            'Cárter de aluminio',
            'Bomba de aceite trocoide',
            'Tamiz / Malla de filtrado',
            'Filtro centrífugo de aceite'
        ],

        funcionamiento:
            'Impulsa aceite 20W-50 / 10W-40 JASO MA2 a través de los conductos lubricando balancines, pistón y discos de embrague.'
    },

    distribucion: {

        titulo: 'Distribución por varillas empujadoras / cadena',

        tipo: 'Mecanismo de tiempo sincronizado por piñones/cadena',

        funcion:
            'Controla la apertura de las válvulas de admisión y escape.',

        advertencia:
            'Asegure la correcta luz de válvulas (0.05mm Adm / 0.08mm Esc) para evitar pérdida de compresión.'
    },

    diagnosticoGeneral: diagnosticoGeneralNKD,

    fallasComunes: fallasComunesNKD,

    herramientas: herramientasNKD,

    mantenimiento: mantenimientoNKD,

    cursos: cursosNKD,

    seguridad: seguridadNKD,

    glosario: glosarioNKD,

    reglaPrincipal:
        'CHISPA → COMBUSTIBLE → COMPRESIÓN → VERIFICACIÓN',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2012,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / Encendido CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T (10.3 HP)'
            }
        );
    }
};


export const aktNKD125_2013 = {

    ...aktNKD125_2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2013. Mantenimiento de carburador, frenos y calibración de válvulas.',

    informacionHistorica: {

        ...aktNKD125_2012.informacionHistorica,

        titulo: 'AKT NKD 125 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2013,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / Encendido CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2014 = {

    ...aktNKD125_2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2014. Guías de servicio técnico y mantenimiento de la instalación eléctrica.',

    informacionHistorica: {

        ...aktNKD125_2013.informacionHistorica,

        titulo: 'AKT NKD 125 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2014,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2015 = {

    ...aktNKD125_2014,

    anio: 2015,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2015. Diagnóstico de encendido por CDI, cargador de batería y embrague.',

    informacionHistorica: {

        ...aktNKD125_2014.informacionHistorica,

        titulo: 'AKT NKD 125 2015',

        anio: 2015
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2015,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2016 = {

    ...aktNKD125_2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2016. Mantenimiento del kit de arrastre, discos de embrague y frenos.',

    informacionHistorica: {

        ...aktNKD125_2015.informacionHistorica,

        titulo: 'AKT NKD 125 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2016,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2017 = {

    ...aktNKD125_2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2017. Guías de reparación de carburador y ajustes mecánicos.',

    informacionHistorica: {

        ...aktNKD125_2016.informacionHistorica,

        titulo: 'AKT NKD 125 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2017,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2018 = {

    ...aktNKD125_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2018. Mantenimiento general y calibración de motor.',

    informacionHistorica: {

        ...aktNKD125_2017.informacionHistorica,

        titulo: 'AKT NKD 125 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2018,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2019 = {

    ...aktNKD125_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2019. Cierre de la primera generación estándar.',

    informacionHistorica: {

        ...aktNKD125_2018.informacionHistorica,

        titulo: 'AKT NKD 125 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2019,
            {
                tecnologia: '1ª Gen - Carburador PZ26 / CDI',

                motorPrincipal: '125cc CGB Monocilíndrico 4T'
            }
        );
    }
};


// --- SEGUNDA GENERACIÓN NKD 125 LED / METAL EDITION / EURO 3 (2020 - 2026) ---

export const aktNKD125_2020 = {

    ...aktNKD125_2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/AKT_NKD_125.jpg/1200px-AKT_NKD_125.jpg',

    descripcion:
        'Plataforma educativa para AKT NKD 125 2020 (Lanzamiento de la versión NKD LED / Faro principal multifocal LED, velocímetro digital, motor CXX 125cc mejorado y freno de disco delantero corte lobulado).',

    informacionHistorica: {

        titulo: 'AKT NKD 125 LED 2020',

        generacion: 'Segunda generación NKD 125 LED',

        familiaMotor: '125cc CXX 4 Tiempos Monocilíndrico',

        tipoMotor: 'Monocilíndrico 4T refrigerado por aire de alta respuesta',

        arquitectura: 'SOHC / OHV 2 Válvulas',

        alimentacion: 'Carburador Optimizado / Diafragma Euro 3',

        encendido: 'CDI Electrónico con iluminación LED directa',

        refrigeracion: 'Aire por convección natural',

        distribucion: 'Sincronización por piñones y varillas / cadena',

        transmision: 'Manual de 5 velocidades con embrague multidisco en baño de aceite'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2020,
            {
                tecnologia: '2ª Gen NKD LED - Carburador Optimizado / Tablero Digital',

                motorPrincipal: '125cc CXX Monocilíndrico 4T (10.3 HP)'
            }
        );
    }
};


export const aktNKD125_2021 = {

    ...aktNKD125_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2021. Mantenimiento del faro LED, sistema de carga y carburación.',

    informacionHistorica: {

        ...aktNKD125_2020.informacionHistorica,

        titulo: 'AKT NKD 125 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2021,
            {
                tecnologia: '2ª Gen NKD LED - Carburador / Tablero Digital',

                motorPrincipal: '125cc CXX Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2022 = {

    ...aktNKD125_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2022 (Edición Metal Edition / Calcomanías personalizadas, protectores de faro y freno lobulado).',

    informacionHistorica: {

        ...aktNKD125_2021.informacionHistorica,

        titulo: 'AKT NKD 125 Metal Edition 2022',

        anio: 2022
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2022,
            {
                tecnologia: '2ª Gen NKD Metal Edition - Carburador / Disco Lobulado',

                motorPrincipal: '125cc CXX Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2023 = {

    ...aktNKD125_2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2023. Diagnóstico de frenos, sistema eléctrico y carburación.',

    informacionHistorica: {

        ...aktNKD125_2022.informacionHistorica,

        titulo: 'AKT NKD 125 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2023,
            {
                tecnologia: '2ª Gen NKD LED - Carburador / Disco Lobulado',

                motorPrincipal: '125cc CXX Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2024 = {

    ...aktNKD125_2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/AKT_NKD_125.jpg/1200px-AKT_NKD_125.jpg',

    descripcion:
        'Plataforma educativa para AKT NKD 125 2024 (Versiones NKD Classic, NKD LED y Metal Edition).',

    informacionHistorica: {

        ...aktNKD125_2023.informacionHistorica,

        titulo: 'AKT NKD 125 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2024,
            {
                tecnologia: '2ª Gen NKD LED - Carburador Optimizado / 10.3 HP',

                motorPrincipal: '125cc CXX Monocilíndrico 4T (10.3 HP)'
            }
        );
    }
};


export const aktNKD125_2025 = {

    ...aktNKD125_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2025. Guías de mantenimiento preventivo, kit de arrastre y calibración de motor.',

    informacionHistorica: {

        ...aktNKD125_2024.informacionHistorica,

        titulo: 'AKT NKD 125 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2025,
            {
                tecnologia: '2ª Gen NKD LED - Carburador / Disco Lobulado',

                motorPrincipal: '125cc CXX Monocilíndrico 4T'
            }
        );
    }
};


export const aktNKD125_2026 = {

    ...aktNKD125_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para AKT NKD 125 2026. Diagnóstico completo de motor 125cc, sistema eléctrico LED, carburador y transmisión de 5 velocidades.',

    informacionHistorica: {

        ...aktNKD125_2025.informacionHistorica,

        titulo: 'AKT NKD 125 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoNKD(
            2026,
            {
                tecnologia: '2ª Gen NKD LED / Metal Edition - Carburador Optimizado',

                motorPrincipal: '125cc CXX Monocilíndrico 4T (10.3 HP / 9.3 Nm)'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE AKT NKD 125
// ============================================================

export const aktNKD125 = {

    marca: 'AKT',

    modelo: 'NKD 125',

    tipo: 'Motocicleta de Calle / Trabajo',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/AKT_NKD_125.jpg/1200px-AKT_NKD_125.jpg',

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

        2012: aktNKD125_2012,

        2013: aktNKD125_2013,

        2014: aktNKD125_2014,

        2015: aktNKD125_2015,

        2016: aktNKD125_2016,

        2017: aktNKD125_2017,

        2018: aktNKD125_2018,

        2019: aktNKD125_2019,

        2020: aktNKD125_2020,

        2021: aktNKD125_2021,

        2022: aktNKD125_2022,

        2023: aktNKD125_2023,

        2024: aktNKD125_2024,

        2025: aktNKD125_2025,

        2026: aktNKD125_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};

export default aktNKD125;
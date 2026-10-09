const sistemasMotorMazda2 = [
    {
        nombre: 'Bloque del motor Skyactiv-G (1.5L) / MZR (1.5L)',
        funcion:
            'Estructura de aleación ligera de aluminio con alta relación de compresión (12:1 a 14:1) que aloja cilindros, cigüeñal y conductos presurizados de lubricación/refrigeración.',
        fallas: [
            'Fugas de aceite por el empaque lateral de distribución',
            'Fugas de refrigerante por la carcasa plástica del termostato',
            'Sensibilidad al uso de aceite fuera de especificación (usar 0W-20 o 5W-30 sintético API SP)',
            'Acumulación gradual de carbón en válvulas por inyección directa (Skyactiv-G)'
        ]
    },

    {
        nombre: 'Culata DOHC 16V con Sistema Dual S-VT (Sequential Valve Timing)',
        funcion:
            'Aloja los dobles árboles de levas, inyectores de alta presión y variadores continuos de fase S-VT en admisión y escape.',
        fallas: [
            'Obstrucción en solenoides VVT por aceite sucio o intervalos extendidos',
            'Fuga de aceite en empaque de tapa de válvulas',
            'Soplado de empaque de culata por sobrecalentamiento del circuito de refrigeración',
            'Ruido de taqués/impulsadores en arranques en frío'
        ]
    },

    {
        nombre: 'Árboles de levas y Actuadores VVT (S-VT Dual)',
        funcion:
            'Ajustan el cruce de válvulas para permitir la operación en ciclo Miller/Atkinson a cargas parciales, reduciendo el consumo.',
        fallas: [
            'Códigos de avería de posición de levas (P0011 / P0012 / P0016)',
            'Ruido metálico breve en arranques en frío',
            'Pérdida de fuerza y vacilaciones al acelerar por falla del solenoide S-VT'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Baja Fricción',
        funcion:
            'Transforma el movimiento alternativo de los pistones en rotación hacia la transmisión manual Skyactiv-MT o automática Skyactiv-Drive.',
        fallas: [
            'Fuga de aceite por el retén trasero de cigüeñal (lado volante/caja)',
            'Desgaste en casquetes por trabajar con nivel bajo de aceite',
            'Juego axial excesivo'
        ]
    },

    {
        nombre: 'Pistones Cavados y Anillos de Baja Tensión',
        funcion:
            'Diseñados con una cavidad en la corona para orientar la inyección directa y evitar la detonación (cascabeleo).',
        fallas: [
            'Anillos pegados por acumulación de hollín y sedimento de lubricante',
            'Consumo progresivo de aceite de motor en alto kilometraje',
            'Cascabeleo o detonación por combustible de bajo octanaje'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Hidráulico',
        funcion:
            'Sincroniza de forma permanente el cigüeñal con los árboles de levas sin requerir sustitución periódica.',
        fallas: [
            'Estiramiento de la cadena de distribución por estirar cambios de aceite',
            'Sonajero metálico constante en la zona de la tapa de distribución',
            'Tensor hidráulico pegado por formación de lodos'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración presurizado con FL22',
        funcion:
            'Mantiene la temperatura ideal utilizando refrigerante de larga duración Mazda FL22 verde/azul.',
        fallas: [
            'Fisura en el tanque de expansión de plástico',
            'Termostato o Válvula Electrónica de Control de Refrigerante pegada',
            'Fuga en bomba de agua accionada por correa de accesorios'
        ]
    },

    {
        nombre: 'Sistema de Lubricación con Bomba de Caudal Variable',
        funcion:
            'Ajusta la presión del lubricante según la carga del motor para reducir la pérdida de potencia parasitaria.',
        fallas: [
            'Testigo de aceite encendido en ralentí por sensor o solenoide defectuoso',
            'Filtro de aceite obstruido o sin válvula antirretorno adecuada',
            'Fuga en el interruptor de presión de aceite'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE Y M HYBRID (24V)
// ============================================================

const sistemaCombustibleMazda2 = {

    titulo: 'Sistema de Inyección Directa de Alta Presión Skyactiv-G / M Hybrid (M-HEV)',

    funcionamiento:
        'Suministra gasolina directamente a la cámara hasta a 200-300 bar de presión usando una bomba HPFP accionada por árbol de levas. En versiones e-Skyactiv G, se combina con el sistema M Hybrid de 24V.',

    componentes: [
        'Tanque de combustible',
        'Módulo de bomba eléctrica de baja presión (In-tank)',
        'Bomba mecánica de alta presión HPFP (accionada por levas)',
        'Rampa e inyectores de alta presión',
        'Cuerpo de aceleración electrónico (ETB)',
        'Sensor de presión de riel (FRP)',
        'Sensor de flujo de aire (MAF) y MAP integrado',
        'Computadora de motor (PCM Skyactiv)'
    ],

    flujo: [
        '1. La bomba de tanque envía gasolina a baja presión hacia el vano motor.',
        '2. La bomba HPFP eleva la presión hacia la rampa de alta presión.',
        '3. Los inyectores pulverizan directamente dentro de la cavidad del pistón.',
        '4. Ocurre la combustión y la sonda Lambda de banda ancha analiza los gases para corregir la mezcla (Fuel Trim).'
    ],

    diagnostico: [
        'Monitorear la presión de riel (FRP) en vivo con escáner (alta y baja presión).',
        'Escanear códigos de falla de mezcla pobre o rica (P0171 / P0172).',
        'Limpiar cuidadosamente el sensor MAF con desengrasante dieléctrico.',
        'Inspeccionar acumulación de carbón en válvulas de admisión si hay tirones en ralentí.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO Y HIBRIDACIÓN MAZDA M HYBRID
// ============================================================

const sistemaEncendidoMazda2 = {

    titulo: 'Sistema de Encendido Directo (COP) y M Hybrid (24V ISG)',

    funcionamiento:
        'Bobinas independientes montadas sobre bujías de iridio. En versiones Mild-Hybrid (e-Skyactiv G), un generador/arrancador ISG por correa ayuda al motor en aceleración, regenera energía al frenar y opera el i-Stop.',

    componentes: [
        {
            nombre: 'Computadora PCM',
            funcion:
                'Controla la chispa, inyección, sistema i-Stop y la asistencia de torque del ISG.'
        },

        {
            nombre: 'Bobinas de encendido transistorizadas (COP)',
            funcion:
                'Transforman el voltaje de batería en alta tensión directamente sobre la bujía.'
        },

        {
            nombre: 'Bujías de Iridio Skyactiv',
            funcion:
                'Aseguran el encendido inmediato tras las detenciones automáticas del sistema i-Stop.'
        },

        {
            nombre: 'Generador ISG y Batería de Ion-Litio 24V (Versiones M Hybrid)',
            funcion:
                'Arranca el motor de forma silenciosa e inyecta apoyo eléctrico al acelerar.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar el voltaje de la batería auxiliar de 12V (mínimo 12.4V).',
        'Escanear la PCM en busca de códigos de sincronización CKP/CMP.',
        'Inspeccionar el estado de los conectores y cables de las bobinas COP.',
        'Verificar el fusible principal de la PCM e i-Stop.',
        'Comprobar la resistencia y holgura de electrodos de las bujías de iridio.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposMazda2 = [

    {
        numero: 1,
        nombre: 'Admisión (Ciclo Miller / Atkinson)',

        descripcion:
            'El pistón desciende. Las válvulas de admisión se mantienen abiertas por más tiempo gracias al S-VT para reducir la resistencia al llenado.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta (Retrasada por S-VT)',
            escape: 'Cerrada'
        },

        objetivo:
            'Maximizar la eficiencia volumétrica y reducir pérdidas por bombeo.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo la carga de aire. La bomba HPFP inyecta la gasolina directamente sobre la cavidad del pistón.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Elevar la temperatura y presión reduciendo el riesgo de preignición.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión (Apoyo ISG en M Hybrid)',

        descripcion:
            'La bujía genera el arco eléctrico e inflama la mezcla. En modelos M Hybrid, el generador ISG asiste con par eléctrico adicional.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Generar el torque útil y la potencia motriz del vehículo.'
    },

    {
        numero: 4,
        nombre: 'Escape y Colector 4-2-1',

        descripcion:
            'El pistón asciende impulsando los gases quemados hacia el colector largo 4-2-1 que evita el retorno de gases calientes al cilindro.',

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

const herramientasMazda2 = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm, 10mm, 12mm, 14mm, 17mm, 19mm, 21mm)',
        'Destornilladores de pala, estrella y palancas de tapicería/plásticos',
        'Llaves Torx y Allen',
        'Gato de patín ligero y torres de elevación con apoyo de goma',
        'Llave delgada de bujías de 14mm / 16mm con retención',
        'Bandeja de recolección de fluidos y embudo graduado'
    ],

    diagnostico: [
        'Escáner OBD2 / Mazda M-MDS / FORScan con lectura de módulos PCM, TCM, BCM, ABS, M-HEV',
        'Multímetro digital de RMS verdadero',
        'Manómetro de presión de combustible (alta y baja línea)',
        'Probador de baterías de 12V (AGM/EFB) y estado SOH',
        'Compresímetro y detector de fugas de cilindro'
    ],

    profesional: [
        'Torquímetro de precisión graduado en Nm y lb-ft',
        'Herramientas de traba de árboles de levas y cigüeñal Mazda Skyactiv',
        'Extractor de inyectores de alta presión',
        'Equipo de limpieza de carbón por chorreado de cáscara de nuez o solventes'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralMazda2 = {

    principio:
        'Diagnóstico metódico. Inspeccionar la tensión eléctrica de la batería de 12V e i-Stop antes de desmontar partes mecánicas.',

    secuencia: [

        '1. Entrevistar al usuario sobre los síntomas y verificar los alertas en la pantalla MZD Connect o tablero.',

        '2. Realizar escaneo electrónico completo (PCM, TCM, ABS, BCM, M-HEV).',

        '3. Anotar códigos DTC almacenados y revisar datos de cuadro congelado (Freeze Frame).',

        '4. Medir el voltaje de la batería de 12V en reposo (mínimo 12.4V) y probar sensor de batería (BPS).',

        '5. Analizar datos en tiempo real (RPM, MAF, presión FRP, corrección de combustible, VVT).',

        '6. Inspeccionar arneses, conectores, tomas de masa en chasis y mangueras de vacío.',

        '7. Realizar pruebas mecánicas físicas (Presión de gasolina, prueba de chispa).',

        '8. Reemplazar o reparar el componente defectuoso con repuesto homologado.',

        '9. Borrar los códigos de avería almacenados.',

        '10. Ejecutar procedimientos de aprendizaje (reinicio de batería i-Stop o cuerpo de aceleración).',

        '11. Realizar prueba de ruta para confirmar la solución.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesMazda2 = [

    {
        titulo: 'Tirones en bajas RPM, ralentí inestable o vacilaciones al acelerar',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Acumulación de depósitos de carbón en válvulas de admisión (Inyección directa Skyactiv)',
            'Sensor MAF sucio o impregnado de polvo',
            'Cuerpo de aceleración electrónico sucio',
            'Bujías de iridio desgastadas o descalibradas'
        ],

        diagnostico: [
            'Limpiar cuidadosamente el sensor MAF con aerosol dieléctrico sin residuo.',
            'Inspeccionar la mariposa del cuerpo de aceleración y limpiarla.',
            'Verificar el grado de acumulación de carbón en las válvulas mediante boroscopio.',
            'Inspeccionar y ajustar la luz de las bujías de iridio.'
        ]
    },

    {
        titulo: 'Mensaje de alerta i-Stop / Testigo de batería parpadeando',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Batería principal de 12V descargada o degradada (debe ser tecnología EFB / Q85)',
            'Sensor de estado de batería (BPS) en el borne negativo descalibrado',
            'Uso frecuente en trayectos cortos que impiden la regeneración completa'
        ],

        diagnostico: [
            'Comprobar la capacidad de descarga de la batería de 12V con probador especial EFB/AGM.',
            'Escanear el módulo PCM buscando códigos DTC del sistema i-Stop.',
            'Realizar el procedimiento de inicialización/aprendizaje del sensor de batería vía escáner.'
        ]
    },

    {
        titulo: 'Golpeteo leve en suspensión delantera al pasar por baches',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Desgaste en bieletas de la barra estabilizadora',
            'Bujes de tijera/horquilla delantera desgastados',
            'Amortiguadores delanteros con pérdida de gas/aceite'
        ],

        diagnostico: [
            'Inspeccionar los holguras en las rotulas de las bieletas.',
            'Revisar grietas o desgarros en los bujes de goma de las tijeras inferiores.',
            'Comprobar la estanqueidad de los amortiguadores.'
        ]
    },

    {
        titulo: 'Fuga de refrigerante líquido FL22 por carcasa de termostato',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Deformación de la carcasa plástica del termostato',
            'Empaque del termostato desgastado'
        ],

        diagnostico: [
            'Inspeccionar marcas de color verde o azul de refrigerante FL22 secas alrededor del termostato.',
            'Comprobar el nivel en el vaso de expansión.',
            'Reemplazar el conjunto de termostato y empaque aplicando el torque correcto.'
        ]
    },

    {
        titulo: 'Ruido metálico breve en arranques en frío (Distribución)',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Retraso en la presión de aceite sobre el tensor de la cadena de distribución',
            'Uso de aceite con viscosidad demasiado alta (ej. 10W-40 en lugar de 0W-20 / 5W-30)',
            'Filtro de aceite sin válvula de retención correcta'
        ],

        diagnostico: [
            'Confirmar que el motor tenga aceite 0W-20 o 5W-30 sintético.',
            'Verificar que el filtro de aceite sea original o de especificación OEM.',
            'Escuchar la zona de la tapa de distribución en el primer arranque de la mañana.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoMazda2 = {

    objetivo:
        'Asegurar el bajo consumo de combustible, proteger la durabilidad de los motores Skyactiv-G y prevenir fallas en la transmisión Skyactiv-Drive.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 7.500 km a 10.000 km utilizando aceite sintético 0W-20 o 5W-30 API SP / ILSAC GF-6 especificación Mazda.'
        },

        {
            nombre: 'Filtro de aire y filtro de cabina (Polen)',
            accion:
                'Inspeccionar en cada cambio de aceite y reemplazar cada 15.000 km.'
        },

        {
            nombre: 'Bujías de Iridio Skyactiv',
            accion:
                'Reemplazar cada 60.000 km a 80.000 km según manual de servicio para inyección directa.'
        },

        {
            nombre: 'Refrigerante Mazda FL22',
            accion:
                'Primer reemplazo a los 100.000 km o 5 años; posteriormente cada 50.000 km.'
        },

        {
            nombre: 'Fluido de Transmisión Skyactiv-Drive (ATF FZ)',
            accion:
                'Inspeccionar nivel y estado; se recomienda sustitución parcial cada 60.000 km a 80.000 km.'
        },

        {
            nombre: 'Descarbonización preventiva de válvulas',
            accion:
                'Realizar limpieza preventiva de válvulas de admisión cada 50.000 km para mitigar tirones.'
        },

        {
            nombre: 'Limpieza de cuerpo de aceleración y sensor MAF',
            accion:
                'Efectuar limpieza preventiva cada 20.000 km para prevenir fallas en el i-Stop y ralentí.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadMazda2 = [

    'En versiones M Hybrid (e-Skyactiv G), desenergice la batería de 24V o desconecte el negativo de la batería de 12V antes de trabajar en el generador ISG.',

    'Sostenga siempre el vehículo utilizando torres de seguridad sobre las pestañas reforzadas del chasis antes de retirar las ruedas.',

    'No retire el tapón del depósito de expansión con el motor caliente para evitar quemaduras por vapor o refrigerante FL22 a alta temperatura.',

    'En la línea de alta presión de combustible Skyactiv-G, alivie la presión antes de intervenir la bomba HPFP o los inyectores directos (la presión supera los 200 bar).',

    'Utilice el torque exacto en los pernos de rueda de aluminio para prevenir la deformación de los discos de freno.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosMazda2 = [

    {
        id: 1,

        titulo: 'Introducción a la Tecnología Mazda Skyactiv-G en Mazda 2',

        nivel: 'Básico',

        descripcion:
            'Aprende sobre la alta relación de compresión, colector 4-2-1, componentes del motor y mantenimiento.',

        temas: [
            'Filosofía de diseño Skyactiv',
            'Relación de compresión 12:1 - 14:1',
            'Especificaciones de aceite y líquido FL22',
            'Sistemas de suspensión y chasis'
        ]
    },

    {
        id: 2,

        titulo: 'Inyección Directa HPFP y Diagnóstico de Admisión',

        nivel: 'Intermedio',

        descripcion:
            'Diagnóstico del sistema de combustible de alta presión, sensores FRP y descarbonización de válvulas.',

        temas: [
            'Bomba HPFP y rampa de inyección directa',
            'Monitoreo de presión de riel con escáner',
            'Limpieza de depósitos de carbón en admisión',
            'Ajustes de combustible (Fuel Trims)'
        ]
    },

    {
        id: 3,

        titulo: 'Sistema i-Stop y Hibridación Ligera M Hybrid (24V)',

        nivel: 'Avanzado',

        descripcion:
            'Funcionamiento del sistema Stop-Start por combustión i-Stop, batería EFB/Q85 y generador ISG de 24V.',

        temas: [
            'Estrategia de arranque i-Stop por pistón en compresión',
            'Baterías de tecnología EFB Q85 y sensor BPS',
            'Generador ISG de 24V y batería de Ion-Litio',
            'Inicialización del i-Stop vía escáner'
        ]
    },

    {
        id: 4,

        titulo: 'Transmisión Automática Skyactiv-Drive (ATF FZ)',

        nivel: 'Avanzado',

        descripcion:
            'Mantenimiento preventivo, cambio de fluido ATF FZ, calibración y diagnóstico de la caja de 6 velocidades.',

        temas: [
            'Embrague de bloqueo total en Skyactiv-Drive',
            'Procedimiento de nivelación de fluido ATF FZ',
            'Solenoides de presión y cuerpo de válvulas',
            'Diagnóstico por escáner FORScan / M-MDS'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioMazda2 = [

    {
        termino: 'Skyactiv-G',
        significado:
            'Tecnología de motores a gasolina de alta compresión, bajo rozamiento y alta eficiencia térmica desarrollada por Mazda.'
    },

    {
        termino: 'e-Skyactiv G / M Hybrid',
        significado:
            'Sistema de hibridación ligera (Mild-Hybrid) de 24V que apoya al motor térmico y optimiza la recarga en desaceleraciones.'
    },

    {
        termino: 'i-Stop',
        significado:
            'Sistema de apagado y encendido automático de Mazda en detenciones, que aprovecha la energía de combustión para rearrancar rápidamente.'
    },

    {
        termino: 'HPFP',
        significado:
            'High Pressure Fuel Pump. Bomba mecánica impulsada por levas que eleva la presión de gasolina para inyección directa.'
    },

    {
        termino: 'FL22',
        significado:
            'Líquido refrigerante de tecnología orgánica de ultra larga duración especificado por Mazda.'
    },

    {
        termino: 'ATF FZ',
        significado:
            'Especificación de fluido sintético de baja viscosidad (color azul/verde) para transmisiones Skyactiv-Drive.'
    },

    {
        termino: 'S-VT',
        significado:
            'Sequential Valve Timing. Sistema de distribución variable continua en los árboles de levas de Mazda.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoMazda2(anio, configuracion) {

    const sintomasMapeados = fallasComunesMazda2.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo correspondiente al Mazda 2 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasMazda2.basicas,
            ...herramientasMazda2.diagnostico
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

                titulo: 'Motor y Gestión Electrónica Mazda',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Eléctrico / i-Stop / M Hybrid (24V)',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Sistema de Encendido e i-Stop',

                        sintomas: [

                            {
                                titulo: 'Mensaje de revisión de i-Stop o batería parpadeando',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Verificación de la batería de 12V (Q85/EFB), sensor de carga BPS y sistema Stop-Start.',

                                herramientas: [
                                    'Escáner OBD2 / FORScan / M-MDS',
                                    'Multímetro digital',
                                    'Probador de batería EFB'
                                ],

                                pasos: [
                                    '1. Verificar la tensión de la batería de 12V en reposo (debe estar por encima de 12.4V).',
                                    '2. Escanear el módulo PCM en busca de códigos de error almacenados.',
                                    '3. Verificar la sujeción y estado del sensor de estado de batería (BPS) en el borne negativo.',
                                    '4. Ejecutar el procedimiento de inicialización del sistema i-Stop mediante escáner.'
                                ]
                            }
                        ]
                    }
                ]
            },

            transmision: {

                titulo: 'Transmisión Skyactiv-Drive y Manual',

                icono: '⚙️',

                subcategorias: [

                    {
                        nombre: 'Caja Automática y Manual',

                        sintomas: [

                            {
                                titulo: 'Tirones leves o retardo en los cambios de la transmisión automática',

                                dificultad: 'Avanzado 🔴',

                                descripcion:
                                    'Inspección del nivel y estado del fluido Mazda ATF FZ.',

                                herramientas: [
                                    'Escáner OBD2 / M-MDS',
                                    'Herramientas manuales',
                                    'Bandeja de recolección'
                                ],

                                pasos: [
                                    '1. Verificar la presencia de códigos DTC en el módulo TCM de la transmisión.',
                                    '2. Inspeccionar el nivel y color del fluido ATF FZ a la temperatura de trabajo indicada.',
                                    '3. Verificar la ausencia de fugas por el enfriador de fluido de la transmisión.',
                                    '4. Proceder al reemplazo parcial de fluido ATF FZ si supera el kilometraje recomendado.'
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
// MODELOS INDIVIDUALES POR AÑO (MAZDA 2 2011 - 2026)
// ============================================================

// --- 2ª GENERACIÓN (MAZDA 2 DE 2011 - 2015) ---

export const mazda2_2011 = {

    marca: 'Mazda',

    modelo: '2',

    anio: 2011,

    tipo: 'Hatchback / Sedán',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mazda2_front_20101016.jpg/1200px-Mazda2_front_20101016.jpg',

    descripcion:
        'Plataforma educativa para Mazda 2 2011 (2ª Generación DE / Motor 1.5L MZR DOHC 16V S-VT).',

    informacionHistorica: {

        titulo: 'Mazda 2 2011 (Generación DE)',

        generacion: 'Segunda generación (Plataforma DE)',

        familiaMotor: '1.5L MZR ZY-VE DOHC 16V S-VT',

        tipoMotor: 'Motor de 4 cilindros en línea e inyección multipunto',

        arquitectura: 'DOHC 16 Válvulas con S-VT',

        alimentacion: 'Inyección Electrónica Multipunto MPFI',

        encendido: 'Electrónico directo COP',

        refrigeracion: 'Refrigeración líquida presurizada',

        distribucion: 'Cadena de distribución metálica',

        transmision: 'Manual de 5 velocidades / Automática de 4 velocidades'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor del Mazda 2 2011?',

        explicacion:
            'Un motor atmosférico ligero de 4 cilindros con bloque de aluminio y distribución variable S-VT optimizado para bajo peso y agilidad urbana.',

        formulaSimple:
            'Aire + gasolina + S-VT + compresión + chispa = giro ágil del cigüeñal',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba eléctrica',
            'Rampa e inyectores MPFI',
            'Cámara de combustión',
            'Pistón',
            'Biela',
            'Cigüeñal',
            'Embrague / Convertidor de torque',
            'Caja de cambios',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposMazda2,

    componentesMotor: sistemasMotorMazda2,

    sistemaCombustible: sistemaCombustibleMazda2,

    sistemaEncendido: sistemaEncendidoMazda2,

    refrigeracion: {

        tipo: 'Refrigeración líquida presurizada con FL22',

        elementos: [
            'Radiador de aluminio',
            'Bomba de agua por correa',
            'Termostato',
            'Depósito de expansión',
            'Electroventilador'
        ],

        funcionamiento:
            'El líquido refrigerante absorbe el calor del bloque y culata disipándolo al pasar por el radiador.'
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
            'Impulsa aceite 5W-30 hacia el cigüeñal, variador S-VT y árbol de levas.'
    },

    distribucion: {

        titulo: 'Distribución por cadena',

        tipo: 'Cadena metálica con tensor hidráulico',

        funcion:
            'Sincroniza la rotación del cigüeñal con los árboles de levas.',

        advertencia:
            'Mantenga el nivel de aceite óptimo para mantener presionado el tensor de la cadena.'
    },

    diagnosticoGeneral: diagnosticoGeneralMazda2,

    fallasComunes: fallasComunesMazda2,

    herramientas: herramientasMazda2,

    mantenimiento: mantenimientoMazda2,

    cursos: cursosMazda2,

    seguridad: seguridadMazda2,

    glosario: glosarioMazda2,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2011,
            {
                tecnologia: '2ª Generación (DE) - Inyección MPFI 1.5L MZR',

                motorPrincipal: '1.5L MZR (102 HP)'
            }
        );
    }
};


export const mazda2_2012 = {

    ...mazda2_2011,

    anio: 2012,

    descripcion:
        'Plataforma educativa para Mazda 2 2012. Mantenimiento del motor 1.5L MZR, suspensión y frenos.',

    informacionHistorica: {

        ...mazda2_2011.informacionHistorica,

        titulo: 'Mazda 2 2012',

        anio: 2012
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2012,
            {
                tecnologia: '2ª Generación (DE) - Inyección MPFI 1.5L MZR',

                motorPrincipal: '1.5L MZR S-VT'
            }
        );
    }
};


export const mazda2_2013 = {

    ...mazda2_2012,

    anio: 2013,

    descripcion:
        'Plataforma educativa para Mazda 2 2013. Diagnóstico de inyección, caja automática de 4V y sensores.',

    informacionHistorica: {

        ...mazda2_2012.informacionHistorica,

        titulo: 'Mazda 2 2013',

        anio: 2013
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2013,
            {
                tecnologia: '2ª Generación (DE) - Inyección MPFI 1.5L MZR',

                motorPrincipal: '1.5L MZR S-VT'
            }
        );
    }
};


export const mazda2_2014 = {

    ...mazda2_2013,

    anio: 2014,

    descripcion:
        'Plataforma educativa para Mazda 2 2014. Cierre de la 2ª Generación DE / Guías de servicio técnico.',

    informacionHistorica: {

        ...mazda2_2013.informacionHistorica,

        titulo: 'Mazda 2 2014',

        anio: 2014
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2014,
            {
                tecnologia: '2ª Generación (DE) - Inyección MPFI 1.5L MZR',

                motorPrincipal: '1.5L MZR S-VT'
            }
        );
    }
};


// --- 3ª GENERACIÓN (MAZDA 2 SKYACTIV DJ/DL 2015 - 2026) ---

export const mazda2_2015 = {

    ...mazda2_2014,

    anio: 2015,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mazda2_Skyactiv-D_105_Exclusive-Line_%28DJ%29_%E2%80%93_Frontansicht%2C_12._Juli_2015%2C_M%C3%BCnster.jpg/1200px-Mazda2_Skyactiv-D_105_Exclusive-Line_%28DJ%29_%E2%80%93_Frontansicht%2C_12._Juli_2015%2C_M%C3%BCnster.jpg',

    descripcion:
        'Plataforma educativa para Mazda 2 2015 (3ª Generación DJ/DL / Revolución Skyactiv-G 1.5L con caja Skyactiv-Drive de 6V y sistema i-Stop).',

    informacionHistorica: {

        titulo: 'Mazda 2 2015 (Generación Skyactiv DJ)',

        generacion: 'Tercera generación (Plataforma DJ/DL)',

        familiaMotor: '1.5L Skyactiv-G DOHC 16V',

        tipoMotor: 'Motor de 4 cilindros en línea con inyección directa de alta presión',

        arquitectura: 'DOHC 16 Válvulas con S-VT Dual',

        alimentacion: 'Inyección Directa de Alta Presión Skyactiv',

        encendido: 'Electrónico directo COP / Sistema i-Stop',

        refrigeracion: 'Refrigeración presurizada con refrigerante FL22',

        distribucion: 'Cadena de distribución de baja fricción',

        transmision: 'Manual Skyactiv-MT de 6V / Automática Skyactiv-Drive de 6V'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2015,
            {
                tecnologia: '3ª Generación - Skyactiv-G 1.5L Inyección Directa',

                motorPrincipal: '1.5L Skyactiv-G (106 HP)'
            }
        );
    }
};


export const mazda2_2016 = {

    ...mazda2_2015,

    anio: 2016,

    descripcion:
        'Plataforma educativa para Mazda 2 2016. Diagnóstico de inyección directa, bomba HPFP y transmisión Skyactiv-Drive.',

    informacionHistorica: {

        ...mazda2_2015.informacionHistorica,

        titulo: 'Mazda 2 2016',

        anio: 2016
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2016,
            {
                tecnologia: '3ª Generación - Skyactiv-G 1.5L Inyección Directa',

                motorPrincipal: '1.5L Skyactiv-G'
            }
        );
    }
};


export const mazda2_2017 = {

    ...mazda2_2016,

    anio: 2017,

    descripcion:
        'Plataforma educativa para Mazda 2 2017. Mantenimiento preventivo, sistema G-Vectoring Control (GVC) e i-Stop.',

    informacionHistorica: {

        ...mazda2_2016.informacionHistorica,

        titulo: 'Mazda 2 2017',

        anio: 2017
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2017,
            {
                tecnologia: '3ª Generación - Skyactiv-G 1.5L con G-Vectoring Control',

                motorPrincipal: '1.5L Skyactiv-G'
            }
        );
    }
};


export const mazda2_2018 = {

    ...mazda2_2017,

    anio: 2018,

    descripcion:
        'Plataforma educativa para Mazda 2 2018. Diagnóstico de sensores, transmisión automática y mantenimiento de frenos.',

    informacionHistorica: {

        ...mazda2_2017.informacionHistorica,

        titulo: 'Mazda 2 2018',

        anio: 2018
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2018,
            {
                tecnologia: '3ª Generación - Skyactiv-G 1.5L Inyección Directa',

                motorPrincipal: '1.5L Skyactiv-G'
            }
        );
    }
};


export const mazda2_2019 = {

    ...mazda2_2018,

    anio: 2019,

    descripcion:
        'Plataforma educativa para Mazda 2 2019. Guías de servicio técnico, descarbonización de válvulas y fluido ATF FZ.',

    informacionHistorica: {

        ...mazda2_2018.informacionHistorica,

        titulo: 'Mazda 2 2019',

        anio: 2019
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2019,
            {
                tecnologia: '3ª Generación - Skyactiv-G 1.5L Inyección Directa',

                motorPrincipal: '1.5L Skyactiv-G'
            }
        );
    }
};


export const mazda2_2020 = {

    ...mazda2_2019,

    anio: 2020,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/2020_Mazda2_Tech_Edition_1.5_Front.jpg/1200px-2020_Mazda2_Tech_Edition_1.5_Front.jpg',

    descripcion:
        'Plataforma educativa para Mazda 2 2020 (Facelift 3ª Generación / Parrilla de panal, insonorización mejorada y GVC Plus).',

    informacionHistorica: {

        ...mazda2_2019.informacionHistorica,

        titulo: 'Mazda 2 2020 (Facelift I)',

        anio: 2020,

        modeloHistorico: 'Mazda 2 Skyactiv Facelift I'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2020,
            {
                tecnologia: '3ª Generación Facelift - Skyactiv-G 1.5L / GVC Plus',

                motorPrincipal: '1.5L Skyactiv-G (109 HP)'
            }
        );
    }
};


export const mazda2_2021 = {

    ...mazda2_2020,

    anio: 2021,

    descripcion:
        'Plataforma educativa para Mazda 2 2021. Diagnóstico de inyección, batería EFB Q85 e i-Stop.',

    informacionHistorica: {

        ...mazda2_2020.informacionHistorica,

        titulo: 'Mazda 2 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2021,
            {
                tecnologia: '3ª Generación Facelift - Skyactiv-G 1.5L',

                motorPrincipal: '1.5L Skyactiv-G'
            }
        );
    }
};


export const mazda2_2022 = {

    ...mazda2_2021,

    anio: 2022,

    descripcion:
        'Plataforma educativa para Mazda 2 2022 (Introducción masiva de la versión e-Skyactiv G M Hybrid de 24V).',

    informacionHistorica: {

        ...mazda2_2021.informacionHistorica,

        titulo: 'Mazda 2 2022 (M Hybrid)',

        anio: 2022,

        nota: 'Llegada de la versión e-Skyactiv G con tecnología Mild-Hybrid de 24V.'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2022,
            {
                tecnologia: '3ª Generación - Skyactiv-G / e-Skyactiv G Mild-Hybrid 24V',

                motorPrincipal: '1.5L Skyactiv-G / 1.5L e-Skyactiv G M Hybrid'
            }
        );
    }
};


export const mazda2_2023 = {

    ...mazda2_2022,

    anio: 2023,

    descripcion:
        'Plataforma educativa para Mazda 2 2023. Mantenimiento del generador ISG 24V, caja de cambios y frenos.',

    informacionHistorica: {

        ...mazda2_2022.informacionHistorica,

        titulo: 'Mazda 2 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2023,
            {
                tecnologia: '3ª Generación - e-Skyactiv G Mild-Hybrid 24V',

                motorPrincipal: '1.5L e-Skyactiv G M Hybrid'
            }
        );
    }
};


export const mazda2_2024 = {

    ...mazda2_2023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/2020_Mazda2_Tech_Edition_1.5_Front.jpg/1200px-2020_Mazda2_Tech_Edition_1.5_Front.jpg',

    descripcion:
        'Plataforma educativa para Mazda 2 2024 (Facelift II / Nueva parrilla personalizada, acentos de color y M Hybrid 24V).',

    informacionHistorica: {

        ...mazda2_2023.informacionHistorica,

        titulo: 'Mazda 2 2024 (Facelift II)',

        anio: 2024,

        modeloHistorico: 'Mazda 2 Facelift II'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2024,
            {
                tecnologia: '3ª Generación Facelift II - e-Skyactiv G M Hybrid 24V',

                motorPrincipal: '1.5L e-Skyactiv G Mild-Hybrid / Skyactiv-G'
            }
        );
    }
};


export const mazda2_2025 = {

    ...mazda2_2024,

    anio: 2025,

    descripcion:
        'Plataforma educativa para Mazda 2 2025. Diagnóstico de hibridación ligera, sensores i-Activesense y mecánica general.',

    informacionHistorica: {

        ...mazda2_2024.informacionHistorica,

        titulo: 'Mazda 2 2025',

        anio: 2025
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2025,
            {
                tecnologia: '3ª Generación Facelift II - e-Skyactiv G 24V',

                motorPrincipal: '1.5L e-Skyactiv G M Hybrid'
            }
        );
    }
};


export const mazda2_2026 = {

    ...mazda2_2025,

    anio: 2026,

    descripcion:
        'Plataforma educativa para Mazda 2 2026. Diagnóstico completo de inyección directa, hibridación 24V, transmisión y mantenimiento.',

    informacionHistorica: {

        ...mazda2_2025.informacionHistorica,

        titulo: 'Mazda 2 2026',

        anio: 2026
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazda2(
            2026,
            {
                tecnologia: '3ª Generación Facelift II - e-Skyactiv G M Hybrid 24V',

                motorPrincipal: '1.5L e-Skyactiv G 24V / Skyactiv-G 1.5L'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE MAZDA 2
// ============================================================

export const mazda2 = {

    marca: 'Mazda',

    modelo: '2',

    tipo: 'Hatchback / Sedán',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mazda2_Skyactiv-D_105_Exclusive-Line_%28DJ%29_%E2%80%93_Frontansicht%2C_12._Juli_2015%2C_M%C3%BCnster.jpg/1200px-Mazda2_Skyactiv-D_105_Exclusive-Line_%28DJ%29_%E2%80%93_Frontansicht%2C_12._Juli_2015%2C_M%C3%BCnster.jpg',

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

        2011: mazda2_2011,

        2012: mazda2_2012,

        2013: mazda2_2013,

        2014: mazda2_2014,

        2015: mazda2_2015,

        2016: mazda2_2016,

        2017: mazda2_2017,

        2018: mazda2_2018,

        2019: mazda2_2019,

        2020: mazda2_2020,

        2021: mazda2_2021,

        2022: mazda2_2022,

        2023: mazda2_2023,

        2024: mazda2_2024,

        2025: mazda2_2025,

        2026: mazda2_2026
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2026];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
const sistemasMotorMazdaCx30 = [
    {
        nombre: 'Bloque del motor Skyactiv-G (2.0L / 2.5L)',
        funcion:
            'Estructura de aleación ligera de aluminio con alta relación de compresión (13:1 / 14:1) que aloja los cilindros, cigüeñal y galerías de lubricación.',
        fallas: [
            'Fugas de aceite en empaques de distribución lateral',
            'Fugas de refrigerante por carcasa de termostato',
            'Desgaste por uso de aceite con viscosidad incorrecta',
            'Pérdida de compresión',
            'Acumulación de depósitos de carbón por inyección directa'
        ]
    },

    {
        nombre: 'Culata DOHC 16V con Sistema VVT Dual',
        funcion:
            'Aloja los dobles árboles de levas con variador de fase secuencial e inyectores de alta presión de inyección directa.',
        fallas: [
            'Obstrucción en solenoides VVT por aceite contaminado',
            'Desgaste en sellos de válvula',
            'Fuga de aceite por empaque de tapa de culata',
            'Acumulación de carbón en válvulas de admisión (Direct Injection)'
        ]
    },

    {
        nombre: 'Árboles de levas y Actuadores VVT (S-VT Electric/Hydraulic)',
        funcion:
            'Ajustan electrónicamente y de forma continua el traslape de válvulas para optimizar el ciclo Miller / Atkinson.',
        fallas: [
            'Códigos de avería de posición de árbol de levas (P0011 / P0012)',
            'Ruido metálico en frío (retraso en presión hidráulica de actuadores)',
            'Falla en el actuador eléctrico de levas de admisión'
        ]
    },

    {
        nombre: 'Cigüeñal y Cojinetes de Alivio de Fricción',
        funcion:
            'Transforma la fuerza de combustión en movimiento giratorio hacia la caja automática o manual Skyactiv-Drive.',
        fallas: [
            'Juego axial excesivo',
            'Fuga en retén de cigüeñal (lado caja o lado accesorio)',
            'Desgaste de casquetes por periodos extendidos de cambio de aceite'
        ]
    },

    {
        nombre: 'Pistones Cavados y Anillos de Baja Fricción',
        funcion:
            'Diseñados con cavidad especial en la corona para orientar la mezcla estratificada y prevenir la detonación (cascabeleo).',
        fallas: [
            'Anillos pegados por sedimentación de aceite',
            'Consumo progresivo de lubricante',
            'Detonación / Preignición si se utiliza combustible de muy bajo octanaje'
        ]
    },

    {
        nombre: 'Cadena de Distribución y Tensor Hidráulico',
        funcion:
            'Sincroniza el cigüeñal con los árboles de levas de manera libre de mantenimiento periódico.',
        fallas: [
            'Estiramiento de cadena por falta de cambios de aceite',
            'Guías o patines de cadena desgastados',
            'Ruidos de golpeteo metálico al dar arranque en frío'
        ]
    },

    {
        nombre: 'Sistema de Refrigeración con Gestión Térmica Controlada',
        funcion:
            'Mantiene la temperatura óptima con válvula de control de refrigerante (ECV), bomba de agua y electroventilador PWM.',
        fallas: [
            'Falla en la válvula electrónica de control de refrigerante (Termostato electrónico)',
            'Fugas en depósito de refrigerante o mangueras rápidas',
            'Lectura errónea del sensor ECT'
        ]
    },

    {
        nombre: 'Sistema de Lubricación de Caudal Variable',
        funcion:
            'Regula electrónicamente la presión de la bomba de aceite según la demanda y RPM del motor para reducir la carga parasitaria.',
        fallas: [
            'Presión de aceite insuficiente si se usa viscosidad diferente a 0W-20 / 5W-30',
            'Sensor/solenoide de presión de aceite defectuoso',
            'Filtro de aceite saturado'
        ]
    }
];


// ============================================================
// SISTEMA DE COMBUSTIBLE
// ============================================================

const sistemaCombustibleMazdaCx30 = {

    titulo: 'Sistema de Inyección Directa de Alta Presión (Skyactiv-G Direct Injection)',

    funcionamiento:
        'Combina una bomba de baja presión en el tanque con una bomba mecánica de alta presión accionada por el árbol de levas, inyectando gasolina directamente a la cámara hasta a 300 bar de presión.',

    componentes: [
        'Tanque de combustible',
        'Módulo de bomba de baja presión (In-tank)',
        'Bomba de alta presión (HPFP accionada por levas)',
        'Rampa e inyectores piezoeléctricos / de solenoide de alta presión',
        'Sensor de alta presión de riel (FRP)',
        'Cuerpo de aceleración electrónico (ETB)',
        'Sensor MAP / MAF integrado',
        'Computadora de motor (PCM Skyactiv)'
    ],

    flujo: [
        '1. La bomba de tanque envía gasolina a baja presión hacia el compartimiento de motor.',
        '2. La bomba HPFP eleva la presión hasta valores de alta precisión.',
        '3. La rampa dosifica el combustible hacia los inyectores directos.',
        '4. Los inyectores de orificios múltiples pulverizan dentro de la cavidad del pistón.',
        '5. La mezcla estratificada se enciende mediante la bujía de iridio.',
        '6. Los sensores de oxígeno de banda ancha miden los gases para ajustar la mezcla Air/Fuel.'
    ],

    diagnostico: [
        'Monitorear la presión deseada vs. presión real del riel de combustible (FRP) en escáner.',
        'Comprobar ruido o fuga en el embolo de la bomba de alta presión (HPFP).',
        'Escanear códigos DTC de mezcla pobre (P0171) o alta presión (P0087 / P0088).',
        'Verificar acumulación de carbón en válvulas de admisión si hay tirones en ralentí.',
        'Revisar el funcionamiento de la bomba de tanque en baja presión.'
    ]
};


// ============================================================
// SISTEMA DE ENCENDIDO Y MILD-HYBRID (M HYBRID)
// ============================================================

const sistemaEncendidoMazdaCx30 = {

    titulo: 'Sistema de Encendido Directo (COP) y M Hybrid (M-HEV 24V)',

    funcionamiento:
        'Las bobinas independientes generan la chispa en bujías de alto rango térmico. En versiones M Hybrid, un generador/arrancador integrado por correa (ISG) apoya el arranque suave, el Start-Stop i-Stop y regenera energía hacia la batería de 24V.',

    componentes: [
        {
            nombre: 'PCM (Power Control Module)',
            funcion:
                'Gestiona el mapa de encendido, el sistema i-Stop y el control de par.'
        },

        {
            nombre: 'Bobinas de encendido individuales (COP)',
            funcion:
                'Entregan alta tensión directa sobre cada bujía.'
        },

        {
            nombre: 'Bujías de Iridio / Platino Skyactiv',
            funcion:
                'Garantizan la ignición constante en mezclas pobres y altas presiones.'
        },

        {
            nombre: 'Generador ISG y Batería de Ion-Litio 24V (Versiones M Hybrid)',
            funcion:
                'Recupera energía en desaceleración, reinicia el motor en milisegundos y alimenta periféricos.'
        }
    ],

    fallaNoHayChispa: [
        'Verificar voltaje de batería de 12V e inspeccionar el estado de la batería M Hybrid de 24V (si aplica).',
        'Escanear la PCM en busca de códigos de sincronización CKP/CMP.',
        'Revisar bobinas individuales buscando grietas o aislamiento perforado.',
        'Inspeccionar el estado de las bujías de iridio (reemplazo cada 60.000 - 80.000 km).',
        'Verificar los relevadores de control principal de motor e i-Stop.'
    ]
};


// ============================================================
// CICLO DE CUATRO TIEMPOS
// ============================================================

const cicloCuatroTiemposMazdaCx30 = [

    {
        numero: 1,
        nombre: 'Admisión (Ciclo Miller / Atkinson)',

        descripcion:
            'El pistón desciende mientras la válvula de admisión permanece abierta por más tiempo para optimizar el llenado y reducir pérdidas de bombeo.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Abierta (Retrasada por VVT)',
            escape: 'Cerrada'
        },

        objetivo:
            'Introducir aire fresco reduciendo la resistencia al llenado.'
    },

    {
        numero: 2,
        nombre: 'Compresión',

        descripcion:
            'El pistón asciende comprimiendo el aire a alta presión. Justo antes del PMS, el inyector pulveriza el combustible directamente sobre el pistón.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Lograr alta relación térmico-energética sin generar autoencendido.'
    },

    {
        numero: 3,
        nombre: 'Combustión / Expansión',

        descripcion:
            'La bujía genera la chispa e inflama la mezcla. El frente de llama expande los gases empujando el pistón con máxima eficiencia.',

        movimientoPiston: 'Desciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Cerrada'
        },

        objetivo:
            'Convertir la presión de expansión en par motor efectivo.'
    },

    {
        numero: 4,
        nombre: 'Escape y Colector 4-2-1',

        descripcion:
            'El pistón asciende impulsando los gases hacia el colector especial 4-2-1 largo que previene el retorno de gases calientes al cilindro.',

        movimientoPiston: 'Asciende',

        valvulas: {
            admision: 'Cerrada',
            escape: 'Abierta'
        },

        objetivo:
            'Evacuar residuos y enfriar la cámara de combustión.'
    }
];


// ============================================================
// HERRAMIENTAS
// ============================================================

const herramientasMazdaCx30 = {

    basicas: [
        'Juego de llaves y copas milimétricas (8mm a 21mm)',
        'Juego de llaves Torx y Allen',
        'Destornilladores de precisión y palancas de tapicería/plásticos',
        'Gato hidráulico de bajo perfil y torres de elevación con protectores de goma',
        'Llave de bujías delgada de 14mm / 16mm con retención',
        'Bandeja y embudo limpio para fluido de transmisión y aceite'
    ],

    diagnostico: [
        'Escáner OBD2 avanzado con soporte para protocolos Mazda (e-Skyactiv / PCM / BCM / EPB)',
        'Multímetro digital de RMS verdadero',
        'Manómetro de presión de combustible de alta y baja línea',
        'Probador de batería AGM / EFB y sistema de carga de 24V',
        'Comprobador de fugas de cilindro y compresímetro'
    ],

    profesional: [
        'Torquímetro digital / mecánico de precisión (Nm / lb-ft)',
        'Herramientas de traba para árbol de levas y piñón de cigüeñal Mazda Skyactiv',
        'Extractor de inyectores de alta presión',
        'Equipo de limpieza de carbón por chorreado de cáscara de nuez (Nut Shell Blaster)',
        'Escáner de nivel de concesionario (Mazda M-MDS / FORScan con J2534)'
    ]
};


// ============================================================
// DIAGNÓSTICO GENERAL
// ============================================================

const diagnosticoGeneralMazdaCx30 = {

    principio:
        'Diagnóstico electrónico preciso. Los vehículos con arquitectura e-Skyactiv requieren validación de redes CAN-BUS y parámetros de voltaje antes de intervenir componentes.',

    secuencia: [

        '1. Verificar la queja del cliente y revisar estados de alertas en el cuadro de instrumentos o pantalla i-Activesense.',

        '2. Realizar un escaneo completo de todos los módulos (PCM, TCM, BCM, ABS, M-HEV).',

        '3. Anotar códigos DTC presentes, en espera y pasados.',

        '4. Revisar voltajes del sistema de 12V y la red de 24V (si es Mild-Hybrid).',

        '5. Analizar datos en tiempo real (Presión de riel, VVT, Caudal de aire MAF, Corrección de combustible).',

        '6. Inspeccionar visualmente conectores, mangueras de aireación y fugas de fluido.',

        '7. Realizar pruebas dinámicas o mecánicas específicas según la falla.',

        '8. Reemplazar o reparar el componente fallido utilizando repuestos homologados.',

        '9. Borrar la memoria de fallas DTC.',

        '10. Efectuar procedimientos de aprendizaje (reajuste de cuerpo de aceleración, valores VVT, o reinicio de batería).',

        '11. Realizar prueba de ruta y escaneo de verificación final.'
    ]
};


// ============================================================
// FALLAS COMUNES
// ============================================================

const fallasComunesMazdaCx30 = [

    {
        titulo: 'Tirones en baja velocidad o ralentí inestable',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Acumulación de residuos de carbón en válvulas de admisión (Inyección directa)',
            'Cuerpo de aceleración sucio o descalibrado',
            'Bujías de iridio desgastadas o descalibradas',
            'Inyector de alta presión parcialmente obstruido',
            'Filtro de aire obstruido o sensor MAF sucio'
        ],

        diagnostico: [
            'Conectar escáner y revisar desvíos de corrección de combustible (Fuel Trims).',
            'Limpiar cuidadosamente el sensor MAF con solvente dieléctrico.',
            'Inspeccionar el cuerpo de aceleración.',
            'Revisar el estado de acumulación de carbón en los conductos de admisión mediante endoscopio.',
            'Verificar el estado de las bujías.'
        ]
    },

    {
        titulo: 'Aviso de falla i-Stop / Sistema e-Skyactiv / Batería',

        dificultad: 'Intermedio 🟡',

        posiblesCausas: [
            'Batería principal de 12V desgastada o con carga baja',
            'Sensor de estado de batería (BPS) descalibrado',
            'Falla temporal de comunicación en la red del módulo M-HEV',
            'Uso frecuente en trayectos muy cortos que impiden la recarga completa'
        ],

        diagnostico: [
            'Verificar la salud de la batería de 12V con probador de carga.',
            'Escuchar si el arrancador ISG realiza el acople correcto.',
            'Escanear el módulo de control de energía e-Skyactiv.',
            'Efectuar el procedimiento de inicialización/aprendizaje de batería de 12V mediante escáner.'
        ]
    },

    {
        titulo: 'Alerta de Control de Temperatura / Válvula de refrigerante',

        dificultad: 'Avanzado 🔴',

        posiblesCausas: [
            'Falla en la válvula electrónica de control de refrigerante (ECV / Termostato electrónico)',
            'Fuga de refrigerante FL22 por manguera de expansión',
            'Sensor ECT descalibrado',
            'Aire atrapado en el circuito de refrigeración'
        ],

        diagnostico: [
            'Escanear DTCs relacionados con rendimiento de temperatura (P0126 / P0128).',
            'Verificar visualmente nivel de refrigerante verde/azul FL22.',
            'Monitorear la temperatura en vivo con escáner mientras el motor calienta.',
            'Probar la activación de la válvula ECV con herramienta de diagnóstico.'
        ]
    },

    {
        titulo: 'Golpeteo leve o ruido en suspensión delantera / bujes',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Desgaste en bujes de tijera / horquilla delantera',
            'Bieletas de barra estabilizadora con juego',
            'Amortiguadores delanteros con fuga de gas/aceite'
        ],

        diagnostico: [
            'Inspeccionar visualmente los guardapolvos de goma de las bieletas y rótulas.',
            'Comprobar juego en los bujes de la tijera inferior usando palanca suave.',
            'Verificar ajuste del torque en los pernos del chasis.'
        ]
    },

    {
        titulo: 'Mensaje de Falla i-Activesense / Cámaras / Radares',

        dificultad: 'Básico 🟢',

        posiblesCausas: [
            'Parabrisas sucio o empañado frente al sensor de la cámara FSC',
            'Emblema frontal de Mazda sucio o con barro (Cubre el radar milimétrico)',
            'Batería de 12V con bajo voltaje al momento del encendido'
        ],

        diagnostico: [
            'Limpiar el parabrisas y el emblema delantero de la parrilla.',
            'Comprobar voltaje de batería.',
            'Si persiste la falla tras la limpieza, borrar DTCs y calibrar el sensor radar.'
        ]
    }
];


// ============================================================
// MANTENIMIENTO
// ============================================================

const mantenimientoMazdaCx30 = {

    objetivo:
        'Conservar la eficiencia del motor Skyactiv, prolongar la vida de la transmisión Skyactiv-Drive y proteger los componentes electrónicos.',

    actividades: [

        {
            nombre: 'Aceite de motor y filtro',
            accion:
                'Reemplazar cada 7.500 km a 10.000 km utilizando aceite sintético 0W-20 o 5W-30 especificación API SP / ILSAC GF-6.'
        },

        {
            nombre: 'Filtro de aire y de cabina (Polen)',
            accion:
                'Inspeccionar en cada mantenimiento y reemplazar cada 15.000 km a 20.000 km.'
        },

        {
            nombre: 'Bujías de Iridio Skyactiv',
            accion:
                'Reemplazar cada 60.000 km a 80.000 km según recomendación técnica para inyección directa.'
        },

        {
            nombre: 'Refrigerante Mazda FL22',
            accion:
                'Primer cambio a los 100.000 km o 5 años; posteriormente cada 50.000 km.'
        },

        {
            nombre: 'Fluido de Transmisión Skyactiv-Drive (ATF FZ)',
            accion:
                'Inspeccionar nivel y estado; se recomienda renovación parcial/completa cada 60.000 km - 80.000 km.'
        },

        {
            nombre: 'Limpieza de descarbonización de válvulas',
            accion:
                'Efectuar limpieza preventiva de válvulas de admisión cada 50.000 km para prevenir tirones y pérdida de torque.'
        },

        {
            nombre: 'Mantenimiento de Frenos y Freno de Mano Electrónico (EPB)',
            accion:
                'Limpiar y lubricar guías de mordaza cada 20.000 km. Usar modo de servicio por escáner para cambiar pastillas traseras.'
        }
    ]
};


// ============================================================
// SEGURIDAD
// ============================================================

const seguridadMazdaCx30 = [

    'Antes de trabajar en el sistema de frenos traseros, active el modo de mantenimiento del Freno de Estacionamiento Electrónico (EPB) vía escáner o secuencia manual para evitar daños en el servomotor.',

    'En versiones M Hybrid (e-Skyactiv), desenergice o evite manipular los cables de alta tensión de color naranja o conectores de la batería de 24V sin la capacitación adecuada.',

    'Sostenga el vehículo con torres de seguridad sobre los puntos reforzados del chasis al retirar las ruedas.',

    'No desmonte componentes de la línea de alta presión de combustible inmediatamente después de apagar el motor; la presión residual puede superar los 200 bar.',

    'Utilice protección ocular al trabajar con desengrasantes o aire comprimido cerca del sensor MAF y cuerpo de aceleración.'
];


// ============================================================
// CURSOS
// ============================================================

const cursosMazdaCx30 = [

    {
        id: 1,

        titulo: 'Fundamentos de la Tecnología Mazda Skyactiv-G',

        nivel: 'Básico',

        descripcion:
            'Aprende sobre la alta relación de compresión, ciclo Miller y arquitectura de los motores 2.0L y 2.5L.',

        temas: [
            'Filosofía Skyactiv',
            'Relación de compresión 13:1',
            'Colector de escape 4-2-1',
            'Gestión térmica del motor'
        ]
    },

    {
        id: 2,

        titulo: 'Inyección Directa y Mantenimiento de Admisión',

        nivel: 'Intermedio',

        descripcion:
            'Diagnóstico del sistema de combustible de alta presión y métodos de limpieza de depósitos de carbón.',

        temas: [
            'Bomba HPFP y Rampa de inyección',
            'Diagnóstico de sensores de presión de riel',
            'Procesos de descarbonización de válvulas',
            'Ajustes de combustible (Fuel Trims)'
        ]
    },

    {
        id: 3,

        titulo: 'Sistema e-Skyactiv M Hybrid (24V)',

        nivel: 'Avanzado',

        descripcion:
            'Funcionamiento del sistema Mild-Hybrid, generador ISG y gestión de batería de Ion-Litio.',

        temas: [
            'Arquitectura eléctrica de 24V',
            'Operación del generador ISG',
            'Estrategias i-Stop e i-Eloop',
            'Diagnóstico de códigos DTC del sistema híbrido'
        ]
    },

    {
        id: 4,

        titulo: 'Transmisión Automática Skyactiv-Drive y EPB',

        nivel: 'Intermedio',

        descripcion:
            'Procedimientos de mantenimiento, cambio de fluido ATF FZ y servicio al freno de mano electrónico.',

        temas: [
            'Convertidor de torque con embrague de bloqueo total',
            'Procedimiento de nivelación de fluido ATF',
            'Modo de servicio del Freno de Mano Electrónico (EPB)',
            'Diagnóstico de solenoide de cambios'
        ]
    }
];


// ============================================================
// GLOSARIO
// ============================================================

const glosarioMazdaCx30 = [

    {
        termino: 'Skyactiv-G',
        significado:
            'Tecnología de motores a gasolina de Mazda enfocada en alta compresión, baja fricción y eficiencia de consumo.'
    },

    {
        termino: 'e-Skyactiv / M Hybrid',
        significado:
            'Sistema de hibridación ligera (Mild-Hybrid) de 24V de Mazda que apoya al motor térmico y optimiza el consumo.'
    },

    {
        termino: 'HPFP',
        significado:
            'High Pressure Fuel Pump. Bomba mecánica encargada de elevar la presión de gasolina para la inyección directa.'
    },

    {
        termino: 'ISG',
        significado:
            'Integrated Starter Generator. Generador-arrancador integrado por correa en versiones M Hybrid.'
    },

    {
        termino: 'i-Stop',
        significado:
            'Sistema de encendido y apagado automático del motor en detenciones de Mazda.'
    },

    {
        termino: 'EPB',
        significado:
            'Electric Parking Brake. Freno de mano de accionamiento eléctrico ubicado en la consola central.'
    },

    {
        termino: 'FL22',
        significado:
            'Especificación del líquido refrigerante orgánico de larga duración utilizado por Mazda.'
    },

    {
        termino: 'ATF FZ',
        significado:
            'Especificación del fluido de viscosidad baja para transmisiones automáticas Mazda Skyactiv-Drive.'
    }
];


// ============================================================
// FUNCIÓN PARA CREAR EL DIAGNÓSTICO DE CADA AÑO
// ============================================================

function crearDiagnosticoMazdaCx30(anio, configuracion) {

    const sintomasMapeados = fallasComunesMazdaCx30.map(falla => ({

        titulo: falla.titulo,

        dificultad: falla.dificultad,

        descripcion:
            'Posibles causas: ' +
            falla.posiblesCausas.join(', ') +
            '.',

        notaEspecial:
            'Diagnóstico educativo para Mazda CX-30 ' +
            anio +
            '. Motorización: ' + configuracion.motorPrincipal + '.',

        herramientas: [
            ...herramientasMazdaCx30.basicas,
            ...herramientasMazdaCx30.diagnostico
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

                titulo: 'Motor Skyactiv y Gestión Electrónica',

                icono: '🔧',

                subcategorias: [

                    {
                        nombre: 'Diagnóstico General de Motor',

                        sintomas: sintomasMapeados
                    }
                ]
            },

            electrico: {

                titulo: 'Eléctrico / M Hybrid / i-Stop',

                icono: '⚡',

                subcategorias: [

                    {
                        nombre: 'Sistema de Encendido y Batería',

                        sintomas: [

                            {
                                titulo: 'Mensaje de revisión de sistema i-Stop o Batería',

                                dificultad: 'Intermedio 🟡',

                                descripcion:
                                    'Verificación de carga de batería de 12V y sensores M-HEV.',

                                herramientas: [
                                    'Escáner OBD2 / Mazda M-MDS',
                                    'Multímetro digital',
                                    'Probador de batería'
                                ],

                                pasos: [
                                    '1. Verificar la tensión en bornes de la batería de 12V (mínimo 12.5V apagado).',
                                    '2. Escanear el módulo PCM para leer códigos DTC específicos de batería.',
                                    '3. Verificar el estado de la red e-Skyactiv (si aplica versión M Hybrid).',
                                    '4. Realizar la reconfiguración/reinicio de batería de 12V en el sistema.'
                                ]
                            }
                        ]
                    }
                ]
            },

            refrigeracion: {

                titulo: 'Gestión Térmica y Refrigeración',

                icono: '🌡️',

                subcategorias: [

                    {
                        nombre: 'Control de Temperatura',

                        sintomas: [

                            {
                                titulo: 'Aviso de falla en temperatura o termostato electrónico',

                                dificultad: 'Avanzado 🔴',

                                descripcion:
                                    'Análisis de la válvula de control de refrigerante (ECV) y circuito FL22.',

                                herramientas: [
                                    'Escáner de diagnóstico',
                                    'Linterna de inspección',
                                    'Kit de comprobación de presión de refrigerante'
                                ],

                                pasos: [
                                    '1. Permitir que el motor se enfríe completamente.',
                                    '2. Verificar nivel del refrigerante de larga duración FL22.',
                                    '3. Escanear códigos de falla de la Válvula Electrónica de Control de Refrigerante.',
                                    '4. Monitorear curva de calentamiento mediante datos en directo.'
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
// MAZDA CX-30 2020
// ============================================================

export const mazdaCx302020 = {

    marca: 'Mazda',

    modelo: 'CX-30',

    anio: 2020,

    tipo: 'SUV / Crossover',

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Mazda_CX-30_2.0_Front.jpg/1200px-2020_Mazda_CX-30_2.0_Front.jpg',

    descripcion:
        'Plataforma educativa para Mazda CX-30 2020 (Año de lanzamiento mundial de la plataforma Crossover Skyactiv-G 2.0L y 2.5L con i-Activesense).',

    informacionHistorica: {

        titulo: 'Mazda CX-30 2020',

        generacion: 'Primera generación (Plataforma Skyactiv-Vehicle Architecture)',

        familiaMotor: 'Skyactiv-G 2.0L / Skyactiv-G 2.5L',

        tipoMotor: 'Motor de 4 cilindros en línea de inyección directa',

        arquitectura: 'DOHC 16 Válvulas con S-VT Dual',

        alimentacion: 'Inyección Directa de Alta Presión',

        encendido: 'Encendido Electrónico Directo COP',

        refrigeracion: 'Refrigeración líquida con gestión térmica avanzada y líquido FL22',

        distribucion: 'Cadena de distribución de alta durabilidad',

        transmision: 'Manual Skyactiv-MT de 6V / Automática Skyactiv-Drive de 6V',

        traccion: 'Delantera (FWD) o Integral (i-Activ AWD)'
    },

    conceptoMotor: {

        titulo: '¿Cómo funciona el motor Skyactiv del CX-30 2020?',

        explicacion:
            'Combina una ultra alta relación de compresión con inyección directa, colectores de escape 4-2-1 y control preciso de válvulas VVT para maximizar la fuerza del motor quemando menos combustible.',

        formulaSimple:
            'Aire de alta densidad + Inyección directa a alta presión + Alta compresión = Combustión eficiente',

        flujoEnergia: [
            'Tanque de combustible',
            'Bomba de baja presión',
            'Bomba de alta presión HPFP',
            'Inyector directo',
            'Cámara de combustión con pistón cavado',
            'Cigüeñal',
            'Transmisión Skyactiv-Drive',
            'Ejes de transmisión',
            'Ruedas'
        ]
    },

    cicloCuatroTiempos: cicloCuatroTiemposMazdaCx30,

    componentesMotor: sistemasMotorMazdaCx30,

    sistemaCombustible: sistemaCombustibleMazdaCx30,

    sistemaEncendido: sistemaEncendidoMazdaCx30,

    refrigeracion: {

        tipo: 'Circuito presurizado con líquido FL22',

        elementos: [
            'Radiador principal',
            'Válvula electrónica de control de refrigerante (ECV)',
            'Bomba de agua',
            'Depósito de expansión',
            'Electroventilador de velocidad variable'
        ],

        funcionamiento:
            'El fluido absorbe la temperatura del bloque y culata, circulando de forma regulada electrónicamente para acelerar el calentamiento del motor y mantener el rango térmico ideal.'
    },

    lubricacion: {

        tipo: 'Lubricación a presión con bomba de caudal variable',

        componentes: [
            'Cárter de aluminio',
            'Bomba de aceite de desplazamiento variable',
            'Filtro de aceite roscado de alta eficiencia',
            'Conductos de lubricación internos'
        ],

        funcionamiento:
            'La PCM ajusta la presión del lubricante según las RPM y la carga de aceleración para reducir la resistencia interna del motor.'
    },

    distribucion: {

        titulo: 'Distribución por Cadena',

        tipo: 'Cadena metálica con tensor hidráulico de baja fricción',

        funcion:
            'Sincroniza de forma permanente la rotación del cigüeñal con los árboles de levas de admisión y escape.',

        advertencia:
            'El uso de un aceite con especificación o viscosidad incorrecta puede afectar la presión del tensor hidráulico de la cadena.'
    },

    diagnosticoGeneral: diagnosticoGeneralMazdaCx30,

    fallasComunes: fallasComunesMazdaCx30,

    herramientas: herramientasMazdaCx30,

    mantenimiento: mantenimientoMazdaCx30,

    cursos: cursosMazdaCx30,

    seguridad: seguridadMazdaCx30,

    glosario: glosarioMazdaCx30,

    reglaPrincipal:
        'ESCANEAR → MEDIR → CONFIRMAR → REPARAR → VERIFICAR',

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazdaCx30(
            2020,
            {
                tecnologia: 'Skyactiv-G 2.0L / 2.5L Inyección Directa',

                motorPrincipal: '2.0L Skyactiv-G 153 HP / 2.5L 186 HP'
            }
        );
    }
};


// ============================================================
// MAZDA CX-30 2021
// ============================================================

export const mazdaCx302021 = {

    ...mazdaCx302020,

    anio: 2021,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2021_Mazda_CX-30_2.0_Front.jpg/1200px-2021_Mazda_CX-30_2.0_Front.jpg',

    descripcion:
        'Plataforma educativa para Mazda CX-30 2021. Mantenimiento, diagnóstico de inyección directa, caja Skyactiv-Drive y electrónica.',

    informacionHistorica: {

        ...mazdaCx302020.informacionHistorica,

        titulo: 'Mazda CX-30 2021',

        anio: 2021
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazdaCx30(
            2021,
            {
                tecnologia: 'Skyactiv-G 2.0L / 2.5L Inyección Directa',

                motorPrincipal: '2.0L Skyactiv-G / 2.5L Skyactiv-G'
            }
        );
    }
};


// ============================================================
// MAZDA CX-30 2022
// ============================================================

export const mazdaCx302022 = {

    ...mazdaCx302021,

    anio: 2022,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/2022_Mazda_CX-30_G25_Astina_Front.jpg/1200px-2022_Mazda_CX-30_G25_Astina_Front.jpg',

    descripcion:
        'Plataforma educativa para Mazda CX-30 2022 (Consolidación de versiones e-Skyactiv G M Hybrid 24V y 2.5 Turbo).',

    informacionHistorica: {

        ...mazdaCx302021.informacionHistorica,

        titulo: 'Mazda CX-30 2022',

        anio: 2022,

        nota: 'Introducción y masificación de motorizaciones e-Skyactiv G M Hybrid (Mild-Hybrid 24V) e i-Activ AWD.'
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazdaCx30(
            2022,
            {
                tecnologia: 'Skyactiv-G / e-Skyactiv G M Hybrid 24V',

                motorPrincipal: '2.0L e-Skyactiv G M Hybrid / 2.5L Turbo según versión'
            }
        );
    }
};


// ============================================================
// MAZDA CX-30 2023
// ============================================================

export const mazdaCx302023 = {

    ...mazdaCx302022,

    anio: 2023,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2023_Mazda_CX-30_G20_Touring_Front.jpg/1200px-2023_Mazda_CX-30_G20_Touring_Front.jpg',

    descripcion:
        'Plataforma educativa para Mazda CX-30 2023. Diagnóstico de hibridación ligera, sensores i-Activesense y mecánica general.',

    informacionHistorica: {

        ...mazdaCx302022.informacionHistorica,

        titulo: 'Mazda CX-30 2023',

        anio: 2023
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazdaCx30(
            2023,
            {
                tecnologia: 'e-Skyactiv G Mild-Hybrid / Skyactiv-G',

                motorPrincipal: '2.0L e-Skyactiv G 24V / 2.5L Turbo'
            }
        );
    }
};


// ============================================================
// MAZDA CX-30 2024
// ============================================================

export const mazdaCx302024 = {

    ...mazdaCx302023,

    anio: 2024,

    imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2024_Mazda_CX-30_Front.jpg/1200px-2024_Mazda_CX-30_Front.jpg',

    descripcion:
        'Plataforma educativa para Mazda CX-30 2024. Diagnóstico de sistemas avanzados, transmisión y motorización e-Skyactiv G.',

    informacionHistorica: {

        ...mazdaCx302023.informacionHistorica,

        titulo: 'Mazda CX-30 2024',

        anio: 2024
    },

    obtenerDiagnosticoPorAnio: function () {

        return crearDiagnosticoMazdaCx30(
            2024,
            {
                tecnologia: 'e-Skyactiv G 24V / Skyactiv-G 2.5L',

                motorPrincipal: '2.0L e-Skyactiv G Mild Hybrid / 2.5L Skyactiv-G'
            }
        );
    }
};


// ============================================================
// OBJETO EXPORTABLE GENERAL DE MAZDA CX-30
// ============================================================

export const mazdaCx30 = {

    marca: 'Mazda',

    modelo: 'CX-30',

    tipo: 'SUV / Crossover',

    imagen:
        'https://es.mazda-press.com/globalassets/generic-cms-images/02-heroes/2025/2025-mazda-cx-30/hero-2025-mazda-cx-30-02-mob.jpg/highdefinitionhalfsize?token=vULvPL3Kp38VAOmPrbF_sLBH7xnV2Mk9mHK3AC6_t_M1',

    aniosDisponibles: [
        2020,
        2021,
        2022,
        2023,
        2024
    ],

    vehiculosPorAnio: {

        2020: mazdaCx302020,

        2021: mazdaCx302021,

        2022: mazdaCx302022,

        2023: mazdaCx302023,

        2024: mazdaCx302024
    },

    obtenerPorAnio(anio) {

        return this.vehiculosPorAnio[anio] || this.vehiculosPorAnio[2020];
    },

    obtenerDiagnosticoPorAnio(anio) {

        const vehiculo = this.obtenerPorAnio(anio);

        return vehiculo ? vehiculo.obtenerDiagnosticoPorAnio() : null;
    }
};
export const aktNkd125 = {
    marca: 'AKT',
    modelo: 'NKD 125',
    tipo: 'Moto',
aniosDisponibles: [2005], 

obtenerDiagnosticoPorAnio: function(anio) {
        // 1. Transformamos tu arreglo de "fallasComunes" al formato que lee React
        const sintomasMapeados = this.fallasComunes.map(falla => {
            return {
                titulo: falla.titulo,
                dificultad: falla.dificultad,
                descripcion: 'Posibles causas: ' + falla.posiblesCausas.join(', ') + '.',
                notaEspecial: falla.recomendacion || 'Sigue la regla principal: ' + this.reglaPrincipal,
                herramientas: this.herramientas.basicas, 
                // Si la falla tiene un diagnóstico específico lo usamos, si no, usamos la secuencia general
                pasos: falla.diagnostico ? falla.diagnostico : this.diagnosticoGeneral.secuencia
            };
        });

        // 2. Retornamos el objeto con la estructura que espera ExplorarVehiculo.js
        return {
            tecnologia: 'Carburador ' + this.carburador.nombre,
            arbolProblemas: {
                fallas_generales: {
                    titulo: 'Fallas Frecuentes',
                    icono: '⚠️',
                    subcategorias: [
                        {
                            nombre: 'Diagnóstico de Motor y Encendido',
                            sintomas: sintomasMapeados
                        }
                    ]
                }
            }
        };
    },
    imagen:
        'https://acnews.blob.core.windows.net/imgnews/large/NAZ_edc56762d192479abca29ee51b2087dd.jpg',

    descripcion:
        'Plataforma educativa sobre la familia AKT 125 y su evolución. Incluye información histórica, funcionamiento del motor, mantenimiento, diagnóstico de fallas, reparación y aprendizaje mecánico.',

    // =========================================================
    // INFORMACIÓN HISTÓRICA
    // =========================================================

    informacionHistorica: {
        titulo: 'Generación AKT 125 de 2005',

        advertencia: `
            La motocicleta de la generación 2005 corresponde históricamente
            a la AK125 S. La denominación NKD 125 apareció posteriormente
            dentro de la evolución de la familia AKT 125.

            Por esta razón, la información de esta sección se utiliza para
            enseñar el motor y la arquitectura mecánica de la generación
            AKT 125 de 2005 sin confundirla con las versiones NKD posteriores.
        `,

        modeloHistorico: 'AK125 S',
        anio: 2005,

        familiaMotor: 'AKT 125',
        tipoMotor: 'Motor de combustión interna de 4 tiempos',

        arquitectura: 'Monocilíndrico OHV de 2 válvulas',
        refrigeracion: 'Refrigerado por aire',

        cilindrada: '124,1061 cc',
        potencia: '11,14 HP a 8.500 rpm',
        torque: '8,5 Nm a 6.000 rpm',

        alimentacion: 'Carburador Keihin PZ26',
        encendido: 'CDI',
        sistemaElectrico: '12V',

        arranque: [
            'Arranque eléctrico',
            'Arranque de pedal'
        ],

        transmision: 'Caja mecánica de 5 velocidades',

        filosofia:
            'Motor sencillo, mecánico y de fácil mantenimiento, diseñado para uso urbano y de trabajo.'
    },

    // =========================================================
    // CONCEPTO GENERAL DEL MOTOR
    // =========================================================

    conceptoMotor: {
        titulo: '¿Cómo funciona el motor?',

        explicacion: `
            El motor convierte la energía química almacenada en el combustible
            en energía mecánica de rotación.

            Para realizar este proceso utiliza cuatro etapas:
            admisión, compresión, combustión/expansión y escape.

            El movimiento vertical del pistón es convertido en movimiento
            rotativo mediante la biela y el cigüeñal.
        `,

        flujoEnergia: [
            'Combustible',
            'Aire',
            'Mezcla aire/combustible',
            'Cámara de combustión',
            'Chispa',
            'Combustión',
            'Movimiento del pistón',
            'Movimiento de la biela',
            'Rotación del cigüeñal',
            'Embrague',
            'Caja de cambios',
            'Piñón de salida',
            'Cadena',
            'Rueda trasera'
        ],

        formulaSimple:
            'Aire + combustible + chispa + compresión + sincronización = combustión controlada'
    },

    // =========================================================
    // CICLO DE 4 TIEMPOS
    // =========================================================

    cicloCuatroTiempos: [
        {
            numero: 1,
            nombre: 'Admisión',
            descripcion: `
                El pistón desciende desde el PMS hacia el PMI.
                La válvula de admisión se abre y permite la entrada
                de la mezcla de aire y combustible al cilindro.
            `,
            valvulas: {
                admision: 'Abierta',
                escape: 'Cerrada'
            },
            movimientoPiston: 'Desciende',
            objetivo: 'Introducir la mezcla en el cilindro.'
        },

        {
            numero: 2,
            nombre: 'Compresión',
            descripcion: `
                El pistón asciende mientras las dos válvulas permanecen
                cerradas. La mezcla queda comprimida dentro de la cámara
                de combustión.
            `,
            valvulas: {
                admision: 'Cerrada',
                escape: 'Cerrada'
            },
            movimientoPiston: 'Asciende',
            objetivo: 'Comprimir la mezcla antes de la combustión.'
        },

        {
            numero: 3,
            nombre: 'Combustión / Expansión',
            descripcion: `
                La bujía produce una chispa que enciende la mezcla comprimida.
                La combustión genera presión y empuja el pistón hacia abajo.
                Esta es la carrera que produce el trabajo útil principal.
            `,
            valvulas: {
                admision: 'Cerrada',
                escape: 'Cerrada'
            },
            movimientoPiston: 'Desciende',
            objetivo: 'Convertir la energía de la combustión en movimiento mecánico.'
        },

        {
            numero: 4,
            nombre: 'Escape',
            descripcion: `
                El pistón vuelve a subir y la válvula de escape se abre.
                Los gases producidos durante la combustión salen del cilindro.
            `,
            valvulas: {
                admision: 'Cerrada',
                escape: 'Abierta'
            },
            movimientoPiston: 'Asciende',
            objetivo: 'Expulsar los gases quemados.'
        }
    ],

    // =========================================================
    // PARTES PRINCIPALES DEL MOTOR
    // =========================================================

    componentesMotor: [
        {
            nombre: 'Culata',
            funcion:
                'Contiene la cámara de combustión, válvulas, balancines y elementos relacionados con la distribución.',
            fallas: [
                'Fugas de compresión',
                'Problemas de válvulas',
                'Desgaste de guías',
                'Problemas de sellado'
            ]
        },

        {
            nombre: 'Cilindro',
            funcion:
                'Proporciona la superficie sobre la cual se desplaza el pistón.',
            fallas: [
                'Desgaste',
                'Rayaduras',
                'Ovalamiento',
                'Conicidad'
            ]
        },

        {
            nombre: 'Pistón',
            funcion:
                'Recibe la presión de la combustión y transmite la fuerza hacia la biela.',
            fallas: [
                'Desgaste',
                'Rayaduras',
                'Daños por sobrecalentamiento',
                'Holgura excesiva'
            ]
        },

        {
            nombre: 'Aros del pistón',
            funcion:
                'Ayudan a sellar los gases de combustión y controlar el aceite.',
            fallas: [
                'Desgaste',
                'Pérdida de compresión',
                'Consumo de aceite',
                'Humo'
            ]
        },

        {
            nombre: 'Bulón',
            funcion:
                'Une el pistón con la biela.',
            fallas: [
                'Desgaste',
                'Holgura',
                'Rayaduras'
            ]
        },

        {
            nombre: 'Biela',
            funcion:
                'Transmite el movimiento entre el pistón y el cigüeñal.',
            fallas: [
                'Holgura',
                'Desgaste de rodamientos/cojinetes según diseño',
                'Ruido metálico'
            ]
        },

        {
            nombre: 'Cigüeñal',
            funcion:
                'Convierte el movimiento alternativo del pistón en movimiento rotativo.',
            fallas: [
                'Desalineación',
                'Desgaste',
                'Holgura',
                'Daños en rodamientos'
            ]
        },

        {
            nombre: 'Válvula de admisión',
            funcion:
                'Permite la entrada de la mezcla de aire y combustible.',
            fallas: [
                'Fuga',
                'Desgaste',
                'Quemadura',
                'Juego incorrecto'
            ]
        },

        {
            nombre: 'Válvula de escape',
            funcion:
                'Permite la salida de los gases quemados.',
            fallas: [
                'Fuga',
                'Quemadura',
                'Desgaste',
                'Juego incorrecto'
            ]
        },

        {
            nombre: 'Balancines',
            funcion:
                'Transmiten el movimiento del mecanismo de distribución hacia las válvulas.',
            fallas: [
                'Desgaste',
                'Holgura',
                'Ruido'
            ]
        },

        {
            nombre: 'Bujía',
            funcion:
                'Produce la chispa necesaria para iniciar la combustión.',
            fallas: [
                'Electrodos desgastados',
                'Carbonización',
                'Contaminación por aceite',
                'Falla de chispa'
            ]
        },

        {
            nombre: 'Cárter',
            funcion:
                'Aloja y protege componentes internos del motor y contiene el aceite según el diseño.',
            fallas: [
                'Fugas',
                'Golpes',
                'Roscas dañadas',
                'Fisuras'
            ]
        }
    ],

    // =========================================================
    // PMS Y PMI
    // =========================================================

    posicionPiston: {
        titulo: 'PMS y PMI',

        PMS: {
            nombre: 'Punto Muerto Superior',
            descripcion:
                'Posición en la que el pistón se encuentra en su punto más alto dentro del cilindro.',
            usos: [
                'Ajuste de válvulas',
                'Verificación de distribución',
                'Procedimientos de diagnóstico',
                'Montaje del motor'
            ]
        },

        PMI: {
            nombre: 'Punto Muerto Inferior',
            descripcion:
                'Posición en la que el pistón se encuentra en su punto más bajo.',
            usos: [
                'Comprensión del ciclo del motor',
                'Procedimientos de desmontaje y montaje'
            ]
        }
    },

    // =========================================================
    // SISTEMA DE COMBUSTIBLE
    // =========================================================

    sistemaCombustible: {
        titulo: 'Sistema de alimentación',

        componentes: [
            'Tanque de combustible',
            'Llave de combustible',
            'Manguera',
            'Filtro',
            'Carburador',
            'Admisión',
            'Culata',
            'Cámara de combustión'
        ],

        flujo: [
            'Tanque',
            'Llave de combustible',
            'Manguera',
            'Carburador',
            'Admisión',
            'Cilindro'
        ],

        principio:
            'El combustible debe llegar al carburador y mezclarse con la cantidad adecuada de aire antes de entrar al motor.'
    },

    // =========================================================
    // CARBURADOR
    // =========================================================

    carburador: {
        nombre: 'Keihin PZ26',

        funcion:
            'Preparar y dosificar la mezcla de aire y combustible para el motor.',

        componentes: [
            {
                nombre: 'Cuba',
                funcion: 'Almacena una cantidad controlada de combustible.'
            },
            {
                nombre: 'Flotador',
                funcion: 'Controla el nivel de combustible dentro de la cuba.'
            },
            {
                nombre: 'Aguja de entrada',
                funcion: 'Controla el paso de combustible hacia la cuba.'
            },
            {
                nombre: 'Chiclé de baja',
                funcion: 'Participa principalmente en el circuito de baja y ralentí.'
            },
            {
                nombre: 'Chiclé principal',
                funcion: 'Dosifica combustible principalmente durante mayores aperturas del acelerador.'
            },
            {
                nombre: 'Aguja',
                funcion: 'Participa en la dosificación de combustible durante la transición y aceleración.'
            },
            {
                nombre: 'Tornillo de ralentí',
                funcion: 'Regula la apertura mínima necesaria para mantener el motor encendido.'
            },
            {
                nombre: 'Tornillo de mezcla',
                funcion: 'Permite ajustar la mezcla según el diseño específico del carburador.'
            }
        ],

        fallasComunes: [
            {
                falla: 'Motor se ahoga',
                posiblesCausas: [
                    'Exceso de combustible',
                    'Nivel incorrecto de flotador',
                    'Aguja de entrada defectuosa',
                    'Filtro de aire obstruido',
                    'Procedimiento incorrecto de arranque en frío'
                ]
            },

            {
                falla: 'Motor no mantiene ralentí',
                posiblesCausas: [
                    'Chiclé de baja obstruido',
                    'Entrada de aire',
                    'Ajuste incorrecto',
                    'Suciedad interna',
                    'Problema de encendido'
                ]
            },

            {
                falla: 'Falta de aceleración',
                posiblesCausas: [
                    'Chiclé principal obstruido',
                    'Problema de suministro de combustible',
                    'Filtro de aire',
                    'Mezcla incorrecta',
                    'Problema de encendido',
                    'Problema mecánico'
                ]
            }
        ],

        reglaDiagnostico:
            'No reemplazar el carburador sin comprobar primero combustible, aire, limpieza, ajuste y funcionamiento del resto del motor.'
    },

    // =========================================================
    // SISTEMA DE ENCENDIDO
    // =========================================================

    sistemaEncendido: {
        titulo: 'Sistema de encendido CDI',

        flujo: [
            'Sistema generador',
            'CDI',
            'Bobina de encendido',
            'Cable de alta',
            'Capuchón',
            'Bujía',
            'Chispa'
        ],

        componentes: [
            {
                nombre: 'CDI',
                funcion:
                    'Controla el momento de disparo del sistema de encendido según la arquitectura del sistema.'
            },

            {
                nombre: 'Bobina',
                funcion:
                    'Eleva la tensión para permitir que la bujía produzca la chispa.'
            },

            {
                nombre: 'Bujía',
                funcion:
                    'Produce la chispa dentro de la cámara de combustión.'
            },

            {
                nombre: 'Pulsor / captador',
                funcion:
                    'Proporciona información de posición para sincronizar el encendido.'
            }
        ],

        fallaNoHayChispa: [
            'Comprobar la bujía.',
            'Comprobar el capuchón.',
            'Comprobar el cable de alta.',
            'Comprobar conexiones.',
            'Comprobar bobina.',
            'Comprobar alimentación o generación correspondiente.',
            'Comprobar pulsor/captador.',
            'Comprobar CDI siguiendo el procedimiento del manual.'
        ],

        reglaDiagnostico:
            'La ausencia de chispa no significa automáticamente que la CDI esté dañada.'
    },

    // =========================================================
    // SISTEMA DE LUBRICACIÓN
    // =========================================================

    lubricacion: {
        titulo: 'Sistema de lubricación',

        funcion: [
            'Reducir fricción',
            'Disminuir desgaste',
            'Ayudar a controlar temperatura',
            'Proteger superficies metálicas',
            'Transportar contaminantes hacia el sistema de filtración/retención correspondiente'
        ],

        recorridoConceptual: [
            'Aceite',
            'Sistema de bombeo',
            'Conductos',
            'Componentes internos',
            'Culata',
            'Retorno'
        ],

        fallas: [
            {
                nombre: 'Nivel de aceite bajo',
                consecuencias: [
                    'Lubricación insuficiente',
                    'Mayor fricción',
                    'Aumento de temperatura',
                    'Desgaste acelerado',
                    'Daño de componentes'
                ]
            },

            {
                nombre: 'Fuga de aceite',
                posiblesCausas: [
                    'Junta deteriorada',
                    'Retén defectuoso',
                    'Tornillo de drenaje',
                    'Superficie de sellado',
                    'Fisura'
                ]
            }
        ],

        mantenimiento:
            'Verificar periódicamente nivel, estado y posibles fugas siguiendo el manual correspondiente.'
    },

    // =========================================================
    // SISTEMA DE REFRIGERACIÓN
    // =========================================================

    refrigeracion: {
        tipo: 'Refrigeración por aire',

        funcionamiento:
            'Las aletas del cilindro y culata aumentan la superficie disponible para disipar calor hacia el aire.',

        elementos: [
            'Aletas del cilindro',
            'Aletas de la culata',
            'Flujo de aire',
            'Aceite'
        ],

        problemas: [
            'Suciedad acumulada',
            'Sobrecalentamiento',
            'Mezcla incorrecta',
            'Falta de aceite',
            'Funcionamiento prolongado fuera de condiciones normales'
        ]
    },

    // =========================================================
    // DISTRIBUCIÓN
    // =========================================================

    distribucion: {
        titulo: 'Sistema de distribución',

        funcion:
            'Controlar el momento en que las válvulas de admisión y escape se abren y cierran.',

        elementos: [
            'Cigüeñal',
            'Sistema de sincronización',
            'Mecanismo de accionamiento',
            'Balancines',
            'Válvula de admisión',
            'Válvula de escape'
        ],

        importancia:
            'La sincronización correcta es indispensable para que la admisión, compresión, combustión y escape ocurran en el momento adecuado.',

        sintomasDistribucionIncorrecta: [
            'Motor no arranca',
            'Pérdida de potencia',
            'Funcionamiento irregular',
            'Explosiones por admisión o escape',
            'Dificultad de arranque'
        ]
    },

    // =========================================================
    // EMBRAGUE
    // =========================================================

    embrague: {
        funcion:
            'Permitir conectar y desconectar temporalmente el motor de la transmisión.',

        flujo: [
            'Cigüeñal',
            'Embrague',
            'Caja de cambios',
            'Piñón de salida',
            'Cadena',
            'Rueda'
        ],

        sintomas: [
            {
                nombre: 'Embrague patinando',
                descripcion:
                    'El motor aumenta de revoluciones pero la velocidad de la motocicleta no aumenta proporcionalmente.',
                posiblesCausas: [
                    'Discos desgastados',
                    'Ajuste incorrecto',
                    'Resortes deteriorados',
                    'Contaminación del sistema'
                ]
            },

            {
                nombre: 'Dificultad para seleccionar cambios',
                posiblesCausas: [
                    'Ajuste del embrague',
                    'Mecanismo selector',
                    'Desgaste interno',
                    'Problemas de transmisión'
                ]
            }
        ]
    },

    // =========================================================
    // CAJA DE CAMBIOS
    // =========================================================

    cajaCambios: {
        velocidades: 5,

        relacionesDocumentadas: {
            primera: '13/36',
            segunda: '17/32',
            tercera: '20/28',
            cuarta: '23/26',
            quinta: '25/24'
        },

        funcion:
            'Modificar la relación entre las revoluciones del motor y la velocidad de salida.',

        componentesPrincipales: [
            'Eje primario',
            'Eje secundario',
            'Engranajes',
            'Selector',
            'Horquillas',
            'Mecanismo de cambio'
        ]
    },

    // =========================================================
    // DIAGNÓSTICO GENERAL
    // =========================================================

    diagnosticoGeneral: {
        principio:
            'Nunca cambiar piezas al azar. Primero se confirma el síntoma, después se realizan pruebas y finalmente se determina la causa.',

        secuencia: [
            '1. Confirmar el síntoma.',
            '2. Preguntar cuándo aparece.',
            '3. Inspeccionar visualmente.',
            '4. Comprobar combustible.',
            '5. Comprobar aire.',
            '6. Comprobar chispa.',
            '7. Comprobar compresión.',
            '8. Comprobar distribución.',
            '9. Comprobar escape.',
            '10. Comprobar transmisión cuando corresponda.',
            '11. Medir componentes.',
            '12. Reparar.',
            '13. Volver a probar.'
        ]
    },

    // =========================================================
    // FALLAS COMUNES
    // =========================================================

    fallasComunes: [
        {
            titulo: 'La moto no arranca',
            dificultad: 'Intermedio 🟡',

            posiblesCausas: [
                'Sin combustible',
                'Carburador obstruido',
                'No existe chispa',
                'Bujía defectuosa',
                'Baja compresión',
                'Problema de válvulas',
                'Distribución incorrecta',
                'Problema eléctrico'
            ],

            diagnostico: [
                'Comprobar que el motor gira.',
                'Comprobar combustible.',
                'Comprobar chispa.',
                'Comprobar compresión.',
                'Comprobar sincronización.'
            ]
        },

        {
            titulo: 'La moto arranca y se apaga',
            dificultad: 'Básico 🟢',

            posiblesCausas: [
                'Problema de ralentí',
                'Chiclé de baja obstruido',
                'Entrada de aire',
                'Falta de combustible',
                'Problema de encendido',
                'Problema mecánico'
            ]
        },

        {
            titulo: 'Pérdida de potencia',
            dificultad: 'Intermedio 🟡',

            posiblesCausas: [
                'Filtro de aire',
                'Carburación',
                'Combustible',
                'Bujía',
                'Encendido',
                'Compresión',
                'Válvulas',
                'Distribución',
                'Escape',
                'Embrague'
            ]
        },

        {
            titulo: 'Humo azul',
            dificultad: 'Avanzado 🔴',

            posiblesCausas: [
                'Consumo de aceite',
                'Aros desgastados',
                'Cilindro desgastado',
                'Pistón desgastado',
                'Retenes de válvula',
                'Problemas en guías'
            ]
        },

        {
            titulo: 'Humo negro',
            dificultad: 'Intermedio 🟡',

            posiblesCausas: [
                'Mezcla excesivamente rica',
                'Problemas de carburación',
                'Filtro de aire obstruido',
                'Exceso de combustible'
            ]
        },

        {
            titulo: 'Ruido metálico',
            dificultad: 'Avanzado 🔴',

            posiblesCausas: [
                'Válvulas',
                'Balancines',
                'Distribución',
                'Pistón',
                'Bulón',
                'Biela',
                'Cigüeñal',
                'Embrague',
                'Engranajes'
            ],

            recomendacion:
                'Localizar el ruido y realizar pruebas antes de desmontar o reemplazar componentes.'
        }
    ],

    // =========================================================
    // HERRAMIENTAS
    // =========================================================

    herramientas: {
        basicas: [
            'Juego de llaves',
            'Juego de dados',
            'Destornilladores',
            'Alicates',
            'Pinzas',
            'Llave para bujía',
            'Llave dinamométrica',
            'Galgas de espesores'
        ],

        diagnostico: [
            'Multímetro',
            'Compresímetro',
            'Probador de chispa',
            'Lámpara de prueba',
            'Tacómetro'
        ],

        medicionMotor: [
            'Calibrador',
            'Micrómetro',
            'Comparador',
            'Instrumentos de medición interna'
        ]
    },

    // =========================================================
    // MANTENIMIENTO
    // =========================================================

    mantenimiento: {
        objetivo:
            'Prevenir fallas y detectar desgaste antes de que provoque daños mayores.',

        actividades: [
            {
                nombre: 'Aceite',
                accion:
                    'Comprobar nivel, estado y fugas según el manual específico.'
            },

            {
                nombre: 'Bujía',
                accion:
                    'Inspeccionar estado y comprobar funcionamiento.'
            },

            {
                nombre: 'Filtro de aire',
                accion:
                    'Inspeccionar y limpiar/reemplazar según el tipo y condición.'
            },

            {
                nombre: 'Carburador',
                accion:
                    'Mantener limpio y correctamente ajustado.'
            },

            {
                nombre: 'Válvulas',
                accion:
                    'Comprobar y ajustar el juego según la especificación del motor.'
            },

            {
                nombre: 'Cadena',
                accion:
                    'Comprobar tensión, lubricación y desgaste.'
            },

            {
                nombre: 'Sistema eléctrico',
                accion:
                    'Inspeccionar conectores, cables, batería y fusibles.'
            },

            {
                nombre: 'Motor',
                accion:
                    'Buscar fugas, ruidos, vibraciones o cambios de funcionamiento.'
            }
        ]
    },

    // =========================================================
    // PROCESO PROFESIONAL DE REPARACIÓN
    // =========================================================

    procesoReparacion: {
        titulo: 'Método profesional de reparación',

        pasos: [
            {
                numero: 1,
                nombre: 'Confirmación del problema',
                descripcion:
                    'Reproducir el síntoma y determinar exactamente qué está ocurriendo.'
            },

            {
                numero: 2,
                nombre: 'Inspección',
                descripcion:
                    'Realizar una inspección visual y buscar fugas, cables desconectados, piezas dañadas o modificaciones.'
            },

            {
                numero: 3,
                nombre: 'Pruebas',
                descripcion:
                    'Utilizar herramientas de diagnóstico para confirmar o descartar causas.'
            },

            {
                numero: 4,
                nombre: 'Medición',
                descripcion:
                    'Medir los componentes que puedan estar fuera de especificación.'
            },

            {
                numero: 5,
                nombre: 'Diagnóstico',
                descripcion:
                    'Determinar la causa probable con base en las pruebas realizadas.'
            },

            {
                numero: 6,
                nombre: 'Desmontaje',
                descripcion:
                    'Desmontar únicamente lo necesario y organizar correctamente las piezas.'
            },

            {
                numero: 7,
                nombre: 'Inspección interna',
                descripcion:
                    'Revisar desgaste, daños, contaminación y condiciones de montaje.'
            },

            {
                numero: 8,
                nombre: 'Reparación',
                descripcion:
                    'Reemplazar, reparar o ajustar los componentes que estén fuera de especificación.'
            },

            {
                numero: 9,
                nombre: 'Montaje',
                descripcion:
                    'Montar utilizando procedimientos, pares de apriete y especificaciones correspondientes.'
            },

            {
                numero: 10,
                nombre: 'Prueba final',
                descripcion:
                    'Poner en funcionamiento el sistema y verificar que el problema haya sido solucionado.'
            }
        ]
    },

    // =========================================================
    // CLASES EDUCATIVAS
    // =========================================================

    cursos: [
        {
            id: 1,
            titulo: 'Conociendo el motor AKT 125',
            nivel: 'Básico',
            descripcion:
                'Identificación de las partes principales y arquitectura del motor.',
            temas: [
                'Motor 4 tiempos',
                'OHV',
                '2 válvulas',
                'Cilindro',
                'Pistón',
                'Biela',
                'Cigüeñal'
            ]
        },

        {
            id: 2,
            titulo: 'Los cuatro tiempos',
            nivel: 'Básico',
            descripcion:
                'Explicación completa de admisión, compresión, combustión y escape.',
            temas: [
                'Admisión',
                'Compresión',
                'Combustión',
                'Escape',
                'PMS',
                'PMI'
            ]
        },

        {
            id: 3,
            titulo: 'Pistón, cilindro y aros',
            nivel: 'Intermedio',
            descripcion:
                'Funcionamiento, desgaste, síntomas y diagnóstico.',
            temas: [
                'Pistón',
                'Aros',
                'Cilindro',
                'Bulón',
                'Compresión',
                'Consumo de aceite'
            ]
        },

        {
            id: 4,
            titulo: 'Culata y válvulas',
            nivel: 'Intermedio',
            descripcion:
                'Funcionamiento de las válvulas y mecanismos de accionamiento.',
            temas: [
                'Admisión',
                'Escape',
                'Balancines',
                'Resortes',
                'Retenes',
                'Ajuste de válvulas'
            ]
        },

        {
            id: 5,
            titulo: 'Distribución y sincronización',
            nivel: 'Avanzado',
            descripcion:
                'Cómo sincronizar correctamente el motor y comprender el PMS.',
            temas: [
                'PMS',
                'PMI',
                'Distribución',
                'Sincronización',
                'Válvulas'
            ]
        },

        {
            id: 6,
            titulo: 'Carburador PZ26',
            nivel: 'Intermedio',
            descripcion:
                'Funcionamiento y diagnóstico del sistema de alimentación.',
            temas: [
                'Flotador',
                'Chiclé de baja',
                'Chiclé principal',
                'Aguja',
                'Mezcla',
                'Ralentí',
                'Ahogo'
            ]
        },

        {
            id: 7,
            titulo: 'Sistema CDI',
            nivel: 'Intermedio',
            descripcion:
                'Funcionamiento del encendido y diagnóstico de ausencia de chispa.',
            temas: [
                'CDI',
                'Bobina',
                'Bujía',
                'Pulsor',
                'Cableado',
                'Chispa'
            ]
        },

        {
            id: 8,
            titulo: 'Lubricación y refrigeración',
            nivel: 'Intermedio',
            descripcion:
                'Cómo se lubrica y refrigera el motor.',
            temas: [
                'Aceite',
                'Bomba',
                'Conductos',
                'Aletas',
                'Temperatura',
                'Desgaste'
            ]
        },

        {
            id: 9,
            titulo: 'Embrague y caja de cambios',
            nivel: 'Intermedio',
            descripcion:
                'Funcionamiento de la transmisión interna.',
            temas: [
                'Embrague',
                'Discos',
                'Ejes',
                'Engranajes',
                'Selector',
                '5 velocidades'
            ]
        },

        {
            id: 10,
            titulo: 'Diagnóstico de fallas',
            nivel: 'Avanzado',
            descripcion:
                'Metodología para encontrar la causa de una falla.',
            temas: [
                'No arranca',
                'Se apaga',
                'Pierde potencia',
                'Humo',
                'Ruidos',
                'Compresión',
                'Encendido'
            ]
        },

        {
            id: 11,
            titulo: 'Desmontaje del motor',
            nivel: 'Avanzado',
            descripcion:
                'Introducción al desmontaje ordenado del motor.',
            temas: [
                'Preparación',
                'Herramientas',
                'Culata',
                'Cilindro',
                'Pistón',
                'Cárter',
                'Cigüeñal'
            ]
        },

        {
            id: 12,
            titulo: 'Medición de componentes',
            nivel: 'Avanzado',
            descripcion:
                'Aprender a determinar si una pieza puede reutilizarse.',
            temas: [
                'Calibrador',
                'Micrómetro',
                'Holguras',
                'Desgaste',
                'Medición del cilindro',
                'Medición del pistón'
            ]
        },

        {
            id: 13,
            titulo: 'Armado del motor',
            nivel: 'Avanzado',
            descripcion:
                'Principios de montaje y comprobación antes de arrancar.',
            temas: [
                'Limpieza',
                'Juntas',
                'Lubricación',
                'Torque',
                'Sincronización',
                'Comprobaciones'
            ]
        },

        {
            id: 14,
            titulo: 'Primera puesta en marcha',
            nivel: 'Avanzado',
            descripcion:
                'Comprobaciones después de una reparación.',
            temas: [
                'Aceite',
                'Combustible',
                'Chispa',
                'Fugas',
                'Ruidos',
                'Temperatura',
                'Prueba'
            ]
        }
    ],

    // =========================================================
    // HERRAMIENTAS DE DIAGNÓSTICO POR FALLA
    // =========================================================

    diagnosticos: {

        noArranca: {
            titulo: 'Motor no arranca',

            checklist: [
                '¿El motor gira?',
                '¿Hay combustible?',
                '¿El combustible llega al carburador?',
                '¿Hay chispa?',
                '¿La bujía está en buen estado?',
                '¿Hay compresión?',
                '¿Las válvulas funcionan correctamente?',
                '¿La distribución está sincronizada?',
                '¿El escape está libre?'
            ]
        },

        pierdePotencia: {
            titulo: 'Motor pierde potencia',

            checklist: [
                'Filtro de aire',
                'Carburador',
                'Combustible',
                'Bujía',
                'Encendido',
                'Compresión',
                'Válvulas',
                'Distribución',
                'Escape',
                'Embrague'
            ]
        },

        consumeAceite: {
            titulo: 'Consumo de aceite',

            checklist: [
                'Comprobar nivel de aceite',
                'Buscar fugas externas',
                'Revisar humo',
                'Comprobar compresión',
                'Inspeccionar cilindro',
                'Inspeccionar pistón',
                'Inspeccionar aros',
                'Inspeccionar retenes y guías de válvula'
            ]
        },

        noHayChispa: {
            titulo: 'No hay chispa',

            checklist: [
                'Bujía',
                'Capuchón',
                'Cable de alta',
                'Bobina',
                'Conectores',
                'Cableado',
                'Pulsor/captador',
                'Sistema generador',
                'CDI'
            ]
        }
    },

    // =========================================================
    // REGLAS DE SEGURIDAD
    // =========================================================

    seguridad: [
        'Trabajar en un lugar ventilado.',
        'Mantener gasolina lejos de llamas y fuentes de ignición.',
        'Utilizar protección ocular.',
        'No tocar componentes eléctricos de alta tensión durante una prueba.',
        'Asegurar correctamente la motocicleta antes de trabajar.',
        'No poner en marcha el motor en un lugar cerrado.',
        'Utilizar herramientas adecuadas.',
        'No forzar tornillos o componentes.',
        'Utilizar el torque especificado por el manual correspondiente.',
        'No reutilizar piezas críticas si están fuera de especificación.',
        'No realizar modificaciones eléctricas sin comprender el circuito.',
        'Desconectar la batería cuando el procedimiento lo requiera.'
    ],

    // =========================================================
    // REGLA PRINCIPAL DE DIAGNÓSTICO
    // =========================================================

    reglaPrincipal:
        'DIAGNOSTICAR → MEDIR → CONFIRMAR → REPARAR → COMPROBAR',

    // =========================================================
    // GLOSARIO
    // =========================================================

    glosario: [
        {
            termino: '4T',
            significado: 'Motor de cuatro tiempos: admisión, compresión, combustión y escape.'
        },

        {
            termino: 'OHV',
            significado:
                'Overhead Valve. Arquitectura en la que las válvulas se encuentran en la culata y son accionadas mediante un mecanismo de distribución.'
        },

        {
            termino: 'PMS',
            significado: 'Punto Muerto Superior: posición más alta del pistón.'
        },

        {
            termino: 'PMI',
            significado: 'Punto Muerto Inferior: posición más baja del pistón.'
        },

        {
            termino: 'CDI',
            significado:
                'Sistema electrónico utilizado para controlar el encendido del motor.'
        },

        {
            termino: 'RPM',
            significado: 'Revoluciones por minuto.'
        },

        {
            termino: 'Torque',
            significado:
                'Fuerza de giro disponible en el eje del motor.'
        },

        {
            termino: 'Compresión',
            significado:
                'Proceso mediante el cual el pistón reduce el volumen de la mezcla antes de la combustión.'
        },

        {
            termino: 'Carburación',
            significado:
                'Proceso mediante el cual se prepara y dosifica la mezcla de aire y combustible.'
        },

        {
            termino: 'Ralentí',
            significado:
                'Régimen de funcionamiento del motor con el acelerador prácticamente cerrado y sin carga de transmisión.'
        },

        {
            termino: 'Holgura',
            significado:
                'Espacio o juego existente entre dos componentes que trabajan juntos.'
        }
    ],

    // =========================================================
    // NOTA TÉCNICA
    // =========================================================

    notaTecnica: `
        Las especificaciones de esta ficha corresponden a la generación
        histórica AK125 S de 2005 y no deben utilizarse automáticamente
        para otras versiones AKT 125 o NKD de años posteriores.

        Para reparaciones que involucren tolerancias, torques, dimensiones,
        ajustes de válvulas, componentes internos o procedimientos de montaje,
        se debe consultar el manual de servicio correspondiente al año,
        referencia y número de motor de la motocicleta.
    `
};

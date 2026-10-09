export const bajajCt100 = {
    marca: 'Bajaj',
    modelo: 'CT 100',
    tipo: 'Moto',
    aniosDisponibles: [2001],

    obtenerDiagnosticoPorAnio: function(anio) {
        const sintomasMapeados = this.fallasComunes.map(falla => {
            return {
                titulo: falla.titulo,
                dificultad: falla.dificultad,
                descripcion: 'Posibles causas: ' + falla.posiblesCausas.join(', ') + '.',
                notaEspecial: falla.recomendacion || 'Sigue la regla principal: ' + this.reglaPrincipal,
                herramientas: this.herramientas.basicas,
                pasos: falla.diagnostico ? falla.diagnostico : this.diagnosticoGeneral.secuencia
            };
        });

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
        'https://www.bajajauto.com/-/media/assets/bajajauto/bikes/ct/ct-100/ct-100-red.jpg',

    descripcion:
        'Plataforma educativa sobre la familia Bajaj CT 100 y su evolución. Incluye información histórica, funcionamiento del motor de 100cc, mantenimiento, diagnóstico de fallas, reparación y aprendizaje mecánico.',

    // =========================================================
    // INFORMACIÓN HISTÓRICA Y TÉCNICA
    // =========================================================

    informacionHistorica: {
        titulo: 'Bajaj CT 100 - Plataforma Trabajo / Urbana',

        advertencia: `
            Las especificaciones técnicas pueden variar ligeramente según la versión 
            (CT 100 KS, ES, Spoke, Alloy) y el año de producción (motores Boxer / CT con tecnología ExhausTEC).
            
            Esta guía toma como base la arquitectura mecánica de la Bajaj CT 100 carburada tradicional.
        `,

        modeloHistorico: 'CT 100',
        anio: 2001,

        familiaMotor: 'Bajaj 100 4T',
        tipoMotor: 'Motor de combustión interna de 4 tiempos',

        arquitectura: 'Monocilíndrico SOHC de 2 válvulas (árbol de levas a la cabeza)',
        refrigeracion: 'Refrigerado por aire',

        cilindrada: '99,27 cc',
        potencia: '8,2 HP a 7.500 rpm',
        torque: '8,05 Nm a 4.500 rpm',

        alimentacion: 'Carburador Keihin PB18 / PZ19 (según versión)',
        encendido: 'CDI digital (AC/DC según generación)',
        sistemaElectrico: '12V',

        arranque: [
            'Arranque de pedal',
            'Arranque eléctrico (en versiones ES)'
        ],

        transmision: 'Caja mecánica de 4 velocidades',

        filosofia:
            'Motor enfocado en la máxima eficiencia de combustible, durabilidad extrema y mantenimiento sencillo para trabajo diario.'
    },

    // =========================================================
    // CONCEPTO GENERAL DEL MOTOR
    // =========================================================

    conceptoMotor: {
        titulo: '¿Cómo funciona el motor?',

        explicacion: `
            El motor convierte la energía química almacenada en la gasolina
            en energía mecánica de rotación.

            Para realizar este proceso utiliza cuatro etapas:
            admisión, compresión, combustión/expansión y escape.

            A diferencia de motores OHV con varillas impulsoras, la Bajaj CT 100
            utiliza un sistema SOHC donde el árbol de levas está en la culata.
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
                La válvula de admisión se abre para permitir el ingreso
                de la mezcla aire/combustible desde el carburador.
            `,
            valvulas: {
                admision: 'Abierta',
                escape: 'Cerrada'
            },
            movimientoPiston: 'Desciende',
            objetivo: 'Llenar la cámara de combustión con la mezcla.'
        },

        {
            numero: 2,
            nombre: 'Compresión',
            descripcion: `
                El pistón asciende hacia el PMS con ambas válvulas cerradas.
                La mezcla se comprime elevando su presión y temperatura.
            `,
            valvulas: {
                admision: 'Cerrada',
                escape: 'Cerrada'
            },
            movimientoPiston: 'Asciende',
            objetivo: 'Comprimir la mezcla para optimizar la combustión.'
        },

        {
            numero: 3,
            nombre: 'Combustión / Expansión',
            descripcion: `
                La bujía genera una chispa de alta tensión.
                La mezcla se enciende, genera alta presión y empuja con fuerza el pistón hacia abajo.
            `,
            valvulas: {
                admision: 'Cerrada',
                escape: 'Cerrada'
            },
            movimientoPiston: 'Desciende',
            objetivo: 'Producir la potencia útil del motor.'
        },

        {
            numero: 4,
            nombre: 'Escape',
            descripcion: `
                El pistón asciende nuevamente mientras la válvula de escape se abre.
                Los gases quemados son expulsados hacia el múltiple de escape y silenciador.
            `,
            valvulas: {
                admision: 'Cerrada',
                escape: 'Abierta'
            },
            movimientoPiston: 'Asciende',
            objetivo: 'Limpiar el cilindro de gases quemados.'
        }
    ],

    // =========================================================
    // PARTES PRINCIPALES DEL MOTOR
    // =========================================================

    componentesMotor: [
        {
            nombre: 'Culata SOHC',
            funcion:
                'Aloja la cámara de combustión, el árbol de levas superior, balancines y válvulas.',
            fallas: [
                'Fugas de compresión',
                'Desgaste en levas o balancines',
                'Desgaste de guías y retenes de válvula',
                'Rosca de bujía aislada'
            ]
        },

        {
            nombre: 'Cilindro',
            funcion:
                'Proporciona la superficie rectificada sobre la que se desplaza el pistón.',
            fallas: [
                'Desgaste o rayaduras por falta de lubricación',
                'Ovalamiento',
                'Fuga en junta de base'
            ]
        },

        {
            nombre: 'Pistón y Aros',
            funcion:
                'Sellar la cámara de combustión y transmitir el impulso de la explosión a la biela.',
            fallas: [
                'Aros desgastados o pegados',
                'Consumo de aceite y humo azul',
                'Pérdida de compresión',
                'Cabeza del pistón carbonizada'
            ]
        },

        {
            nombre: 'Cadenilla de distribución',
            funcion:
                'Transmitir el movimiento rotativo del cigüeñal hacia el árbol de levas.',
            fallas: [
                'Estiramiento por desgaste',
                'Ruido metálico en culata',
                'Salto de dientes (desincronización)'
            ]
        },

        {
            nombre: 'Tensor de cadenilla',
            funcion:
                'Mantener la tensión constante sobre la cadenilla de distribución.',
            fallas: [
                'Pérdida de tensión o trinquete desgastado',
                'Ruido constante de cadenilla'
            ]
        },

        {
            nombre: 'Cigüeñal y Biela',
            funcion:
                'Transformar el movimiento lineal del pistón en fuerza de rotación.',
            fallas: [
                'Juego axial o radial en rodamiento de biela',
                'Golpeteo metálico en la parte baja del motor'
            ]
        },

        {
            nombre: 'Válvula de admisión y escape',
            funcion:
                'Controlar el paso de mezcla limpia y la salida de gases quemados.',
            fallas: [
                'Asiento de válvula flameado o desgastado',
                'Calibración incorrecta (holgura ajustada o floja)',
                'Depósitos de carbón'
            ]
        },

        {
            nombre: 'Bujía',
            funcion:
                'Proporcionar la chispa eléctrica para encender la mezcla.',
            fallas: [
                'Calibración de electrodo fuera de rango',
                'Engrasada o impregnada de carbón',
                'Sin chispa o chispa débil'
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
                'Posición máxima superior alcanzada por el pistón.',
            usos: [
                'Ajuste de luz de válvulas',
                'Sincronización del tiempo de distribución (marcas "T" en volante y piñón)',
                'Prueba de compresión y estanqueidad'
            ]
        },

        PMI: {
            nombre: 'Punto Muerto Inferior',
            descripcion:
                'Posición máxima inferior alcanzada por el pistón.',
            usos: [
                'Comprensión del recorrido y carrera del pistón',
                'Inspección de paredes del cilindro'
            ]
        }
    },

    // =========================================================
    // SISTEMA DE COMBUSTIBLE
    // =========================================================

    sistemaCombustible: {
        titulo: 'Sistema de alimentación',

        componentes: [
            'Tanque de gasolina',
            'Grifo/llave de combustible con filtro interno',
            'Manguera de gasolina',
            'Filtro de combustible de línea',
            'Carburador',
            'Múltiple de admisión con o-ring/junta',
            'Cámara de combustión'
        ],

        flujo: [
            'Tanque',
            'Llave de paso',
            'Manguera',
            'Carburador',
            'Múltiple de admisión',
            'Cilindro'
        ],

        principio:
            'Aprovechar la depresión (vacío) del motor para pulverizar la gasolina en la corriente de aire en la proporción idónea.'
    },

    // =========================================================
    // CARBURADOR
    // =========================================================

    carburador: {
        nombre: 'Keihin PB18 / PZ19 (según versión)',

        funcion:
            'Mezclar aire y gasolina en la proporción estequiométrica óptima para el motor 100cc.',

        componentes: [
            {
                nombre: 'Cuba de combustible',
                funcion: 'Depósito inferior que mantiene un nivel constante de gasolina.'
            },
            {
                nombre: 'Flotador y punzual',
                funcion: 'Regulan el ingreso de combustible desde el tanque hacia la cuba.'
            },
            {
                nombre: 'Chicler de baja (piloto)',
                funcion: 'Alimenta el motor en ralentí y bajas revoluciones.'
            },
            {
                nombre: 'Chicler de alta (principal)',
                funcion: 'Suministra el flujo mayor de gasolina de media a máxima aceleración.'
            },
            {
                nombre: 'Aguja y cortina (émbolo)',
                funcion: 'Regulan el paso de aire y combustible en aceleraciones intermedias.'
            },
            {
                nombre: 'Tornillo de mezcla (aire/combustible)',
                funcion: 'Ajusta la riqueza de la mezcla en ralentí.'
            },
            {
                nombre: 'Choke / Choque (ahogador)',
                funcion: 'Enriquece la mezcla para facilitar el arranque en frío.'
            }
        ],

        fallasComunes: [
            {
                falla: 'Motor ahogado o rebose de gasolina',
                posiblesCausas: [
                    'Punzual desgastado o con suciedad',
                    'Flotador perforado o mal graduado',
                    'Empaque de cuba deteriorado'
                ]
            },

            {
                falla: 'Inestabilidad en ralentí / se apaga al soltar acelerador',
                posiblesCausas: [
                    'Chicler de baja obstruido',
                    'Entrada de aire en junta de múltiple de admisión',
                    'Tornillo de mezcla mal regulado'
                ]
            },

            {
                falla: 'Ahogo o falta de potencia al acelerar a fondo',
                posiblesCausas: [
                    'Chicler principal obstruido',
                    'Filtro de aire sucio o saturado',
                    'Nivel de agua en la cuba'
                ]
            }
        ],

        reglaDiagnostico:
            'Verificar la limpieza del tanque, filtro de aire y ausencia de entradas de aire falso antes de desarmar o reemplazar el carburador.'
    },

    // =========================================================
    // SISTEMA DE ENCENDIDO
    // =========================================================

    sistemaEncendido: {
        titulo: 'Sistema de encendido por CDI',

        flujo: [
            'Plato de bobinas / Generador',
            'Bobina captadora (Pulsora)',
            'Módulo CDI',
            'Bobina de alta tensión',
            'Capuchón de bujía',
            'Bujía',
            'Chispa en cámara'
        ],

        componentes: [
            {
                nombre: 'CDI',
                funcion:
                    'Almacena carga y envía la descarga a la bobina de alta en el momento exacto.'
            },
            {
                nombre: 'Bobina de alta',
                funcion:
                    'Transforma el voltaje del CDI en alto voltaje (miles de voltios) para vencer la luz de la bujía.'
            },
            {
                nombre: 'Bobina pulsora',
                funcion:
                    'Envía una señal eléctrica de tiempo al CDI según la posición del cigüeñal.'
            },
            {
                nombre: 'Bujía',
                funcion:
                    'Genera el arco eléctrico dentro de la cámara de combustión.'
            }
        ],

        fallaNoHayChispa: [
            'Inspeccionar bujía y probar con una nueva calibrada.',
            'Verificar resistencia del capuchón y cable de alta.',
            'Revisar switch de encendido (run/ignition key) y cables a masa/tierra.',
            'Medir resistencia de la bobina pulsora.',
            'Medir bobina de encendido/alimentación del plato.',
            'Comprobar bobina de alta tensión.',
            'Probar módulo CDI con probador especializado o repuesto de prueba.'
        ],

        reglaDiagnostico:
            'Asegurar siempre buen contacto a masa (tierra) en el chasis y motor antes de diagnosticar componentes electrónicos.'
    },

    // =========================================================
    // SISTEMA DE LUBRICACIÓN
    // =========================================================

    lubricacion: {
        titulo: 'Sistema de lubricación forzada y salpique',

        funcion: [
            'Lubricar rodamientos, pistón, levas y engranajes',
            'Disipar calor de componentes internos',
            'Proteger contra la corrosión',
            'Mantener limpios los mecanismos de embrague y caja'
        ],

        recorridoConceptual: [
            'Cárter (depósito de aceite)',
            'Malla / Filtro centrífugo o pasador',
            'Bomba de aceite accionada por piñón',
            'Conductos hacia cigüeñal y culata',
            'Árbol de levas y balancines',
            'Retorno por gravedad al cárter'
        ],

        fallas: [
            {
                nombre: 'Bajo nivel de aceite',
                consecuencias: [
                    'Sobrecalentamiento extremo',
                    'Fundición de balancines y árbol de levas',
                    'Agarrotamiento (agarrado) del pistón'
                ]
            },

            {
                nombre: 'Filtro centrífugo / malla obstruida',
                posiblesCausas: [
                    'Residuos de embrague o lodos',
                    'Falta de cambio periódico de aceite'
                ]
            }
        ],

        mantenimiento:
            'Usar aceite multigrado de especificación recomendada (ej. 20W-50 JASO MA2) y revisar el nivel mediante el ojo de buey o varilla medidora.'
    },

    // =========================================================
    // SISTEMA DE REFRIGERACIÓN
    // =========================================================

    refrigeracion: {
        tipo: 'Refrigeración por aire directo',

        funcionamiento:
            'El aire incidente al marchar absorbe el calor disipado por las aletas metálicas del cilindro y la culata.',

        elementos: [
            'Aletas disipadoras en cilindro',
            'Aletas disipadoras en culata',
            'Flujo de aire por velocidad del vehículo',
            'Circulación interna de aceite'
        ],

        problemas: [
            'Acumulación de barro o grasa sobre las aletas disipadoras',
            'Sobrecalentamiento por uso prolongado en ralentí o marchas muy bajas',
            'Mezcla de combustible demasiado pobre'
        ]
    },

    // =========================================================
    // DISTRIBUCIÓN
    // =========================================================

    distribucion: {
        titulo: 'Sistema de distribución SOHC por cadenilla',

        funcion:
            'Sincronizar la rotación del cigüeñal con la apertura y cierre de las válvulas a través del árbol de levas.',

        elementos: [
            'Piñón de cigüeñal',
            'Cadenilla de distribución',
            'Guías de cadenilla (fija y móvil)',
            'Tensor automático / mecánico',
            'Piñón de árbol de levas',
            'Árbol de levas SOHC'
        ],

        importancia:
            'Un desfase en el tiempo de distribución provoca pérdida total de potencia o colisión entre el pistón y las válvulas.',

        sintomasDistribucionIncorrecta: [
            'Dificultad o imposibilidad para encender',
            'Falta total de compresión por válvulas dobladas',
            'Explosiones a través del carburador o escape',
            'Ruido de golpeteo metálico en la culata'
        ]
    },

    // =========================================================
    // EMBRAGUE
    // =========================================================

    embrague: {
        funcion:
            'Transmitir o desacoplar la potencia del motor a la caja de cambios mediante discos de fricción húmedos.',

        flujo: [
            'Cigüeñal',
            'Corona de embrague',
            'Discos de fricción y separadores',
            'Centro de embrague',
            'Eje primario de caja de cambios'
        ],

        sintomas: [
            {
                nombre: 'Embrague patina (desliza)',
                descripcion:
                    'El motor acelera en revoluciones pero la moto no avanza proporcionalmente.',
                posiblesCausas: [
                    'Discos de fricción desgastados',
                    'Guaya/cable de embrague sin juego libre',
                    'Resortes de embrague cedidos',
                    'Uso de aceite no adecuado para embrague húmedo'
                ]
            },

            {
                nombre: 'Cambios duros o la moto arrastra con la manigueta presionada',
                posiblesCausas: [
                    'Guaya desajustada o con mucha holgura',
                    'Canastilla o buje de manzana desgastado',
                    'Discos alabeados o pegados'
                ]
            }
        ]
    },

    // =========================================================
    // CAJA DE CAMBIOS
    // =========================================================

    cajaCambios: {
        velocidades: 4,

        relacionesDocumentadas: {
            primera: 'Relación corta para arranque en carga',
            segunda: 'Relación intermedia para progresión urbana',
            tercera: 'Relación de velocidad media',
            cuarta: 'Relación directa/crucero para economía'
        },

        funcion:
            'Adaptar el torque y revoluciones del motor a las exigencias de velocidad y carga de la motocicleta.',

        componentesPrincipales: [
        'Eje primario',
        'Eje secundario',
        'Juegos de engranajes de 1a a 4a',
        'Tambor selector (slector de cambios)',
        'Horquillas selectoras',
        'Mecanismo de trinquete y pedal'
        ]
    },

    // =========================================================
    // DIAGNÓSTICO GENERAL
    // =========================================================

    diagnosticoGeneral: {
        principio:
            'Método lógico y ordenado: Diagnosticar antes de desarmar y reemplazar.',

        secuencia: [
            '1. Validar el síntoma expuesto por el usuario.',
            '2. Inspección visual externa (fugas, cables sueltos, conectores).',
            '3. Comprobar presencia de gasolina de calidad en el carburador.',
            '4. Verificar chispa en la bujía (intensidad y color azulado).',
            '5. Medir compresión en el cilindro con compresímetro.',
            '6. Verificar tiempo de distribución y holgura de válvulas.',
            '7. Inspeccionar filtro de aire y conducto de admisión.',
            '8. Evaluar embrague y transmisión si la falla es de tracción.',
            '9. Efectuar reparación o reemplazo de componentes dañados.',
            '10. Realizar prueba de ruta y ajuste final.'
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
                'Falta de combustible o pasador cerrado',
                'Carburador obstruido o inundado',
                'Sin chispa en la bujía (CDI, bobina, capuchón)',
                'Bujía cruzada o engrasada',
                'Válvula pisada (sin luz de tolerancia)',
                'Compresión baja por aros desgastados',
                'Cadenilla de distribución corrida'
            ],

            diagnostico: [
                'Verificar si cae gasolina del grifo abriendo el despiche del carburador.',
                'Probar chispa acercando el cable de alta a 5mm del motor.',
                'Medir la luz de válvulas (admisión y escape).',
                'Verificar la compresión del cilindro.'
            ]
        },

        {
            titulo: 'Inestabilidad o apague en ralentí',
            dificultad: 'Básico 🟢',

            posiblesCausas: [
                'Chicler de baja sucio',
                'Ajuste inadecuado del tornillo de aire/mezcla',
                'Entrada de aire en la insuladora/múltiple',
                'Filtro de aire excesivamente sucio',
                'Bujía con distancia de electrodo desgastada'
            ]
        },

        {
            titulo: 'Pérdida de fuerza / Aceleración deficiente',
            dificultad: 'Intermedio 🟡',

            posiblesCausas: [
                'Filtro de aire obstruido',
                'Chicler principal sucio',
                'Embrague patinando',
                'Falta de compresión',
                'Escape/silenciador tapado de carbón',
                'Frenos pegados o cadena demasiado tensa'
            ]
        },

        {
            titulo: 'Humo azul por el escape',
            dificultad: 'Avanzado 🔴',

            posiblesCausas: [
                'Aros de pistón desgastados o alineados',
                'Cilindro rayado o acanalado',
                'Retenes de guía de válvula cristalizados o rotos',
                'Nivel de aceite excesivo en el cárter'
            ]
        },

        {
            titulo: 'Humo negro por el escape',
            dificultad: 'Intermedio 🟡',

            posiblesCausas: [
                'Mezcla excesivamente rica (mucha gasolina)',
                'Choke (ahogador) accionado o pegado',
                'Filtro de aire completamente tapado',
                'Nivel de flotador de carburador muy alto'
            ]
        },

        {
            titulo: 'Ruido metálico en la culata',
            dificultad: 'Intermedio 🟡',

            posiblesCausas: [
                'Luz de válvulas excesiva (holgura holgada)',
                'Cadenilla de distribución estirada',
                'Tensor de cadenilla dañado',
                'Desgaste en árbol de levas o balancines'
            ],

            recomendacion:
                'Calibrar válvulas y verificar tensión de cadenilla antes de desarmar la culata.'
        }
    ],

    // =========================================================
    // HERRAMIENTAS
    // =========================================================

    herramientas: {
        basicas: [
            'Juego de llaves mixtas (8mm, 10mm, 12mm, 14mm, 17mm)',
            'Juego de copas/dados y rachet',
            'Destornilladores de estrella (Philips) y de pala',
            'Alicate y pinzas de seguridad',
            'Llave de bujía de 16mm / 18mm',
            'Galga / calibrador de hojas (feeler)'
        ],

        diagnostico: [
            'Multímetro digital',
            'Compresímetro para motor a gasolina',
            'Probador de chispa / chispómetro',
            'Pistola estroboscópica para tiempo de encendido'
        ],

        medicionMotor: [
            'Calibrador pie de rey (pie de rey)',
            'Micrómetro de exteriores',
            'Alezómetro / comparador de interiores para cilindro'
        ]
    },

    // =========================================================
    // MANTENIMIENTO PREVENTIVO
    // =========================================================

    mantenimiento: {
        objetivo:
            'Garantizar el menor consumo de combustible y prolongar la vida útil del motor Bajaj 100.',

        actividades: [
            {
                nombre: 'Aceite de motor',
                accion:
                    'Verificar nivel constantemente y cambiar cada 2.000 - 3.000 km.'
            },

            {
                nombre: 'Limpieza de malla de aceite / filtro centrífugo',
                accion:
                    'Limpiar en cada mantenimiento mayor o destape de tapa embrague.'
            },

            {
                nombre: 'Bujía',
                accion:
                    'Calibrar apertura de electrodo y limpiar o reemplazar según estado.'
            },

            {
                nombre: 'Filtro de aire',
                accion:
                    'Lavar/sopletear o reemplazar el elemento filtrante de espuma o papel.'
            },

            {
                nombre: 'Calibración de válvulas',
                accion:
                    'Verificar y ajustar la luz de admisión y escape según manual.'
            },

            {
                nombre: 'Cadena de transmisión',
                accion:
                    'Ajustar holgura, limpiar y lubricar cada 500 km.'
            },

            {
                nombre: 'Carburador',
                accion:
                    'Limpieza general de chicleres y drenaje de agua de la cuba.'
            }
        ]
    },

    // =========================================================
    // PROCESO PROFESIONAL DE REPARACIÓN
    // =========================================================

    procesoReparacion: {
        titulo: 'Procedimiento técnico de reparación',

        pasos: [
            {
                numero: 1,
                nombre: 'Recepción y prueba inicial',
                descripcion:
                    'Escuchar la queja del cliente y verificar los síntomas en taller.'
            },

            {
                numero: 2,
                nombre: 'Diagnóstico sin desarmar',
                descripcion:
                    'Pruebas de chispa, compresión, combustible y fugas de aire.'
            },

            {
                numero: 3,
                nombre: 'Desmonte técnico',
                descripcion:
                    'Drenar fluidos y desmontar piezas organizando la tornillería.'
            },

            {
                numero: 4,
                nombre: 'Metrología e inspección',
                descripcion:
                    'Medir desgaste de cilindro, pistón, holguras de aros y estado de levas.'
            },

            {
                numero: 5,
                nombre: 'Reemplazo y rectificación',
                descripcion:
                    'Cambio de repuestos fuera de tolerancia por componentes originales o equivalentes.'
            },

            {
                numero: 6,
                nombre: 'Ensamble y torqué',
                descripcion:
                    'Montaje aplicando apriete especificado y lubricación inicial en partes móviles.'
            },

            {
                numero: 7,
                nombre: 'Sincronización y ajuste',
                descripcion:
                    'Poner a tiempo la distribución y calibrar la holgura de válvulas.'
            },

            {
                numero: 8,
                nombre: 'Prueba final',
                descripcion:
                    'Encendido, carburación en caliente y verificación de ausencia de fugas y ruidos.'
            }
        ]
    },

    // =========================================================
    // CLASES Y MÓDULOS EDUCATIVOS
    // =========================================================

    cursos: [
        {
            id: 1,
            titulo: 'Arquitectura del motor Bajaj 100cc',
            nivel: 'Básico',
            descripcion:
                'Introducción a los motores monocilíndricos SOHC de alta eficiencia.',
            temas: [
                'Estructura general',
                'Sistema SOHC vs OHV',
                'Cilindro y culata',
                'Bloque y cárter'
            ]
        },

        {
            id: 2,
            titulo: 'El ciclo de 4 tiempos en motores pequeños',
            nivel: 'Básico',
            descripcion:
                'Análisis paso a paso del ciclo térmico en un motor de trabajo.',
            temas: [
                'Admisión',
                'Compresión',
                'Combustión',
                'Escape'
            ]
        },

        {
            id: 3,
            titulo: 'Carburación y ajuste del carburador Keihin PB/PZ',
            nivel: 'Intermedio',
            descripcion:
                'Mantenimiento, limpieza y regulación de mezcla para óptimo consumo.',
            temas: [
                'Chicleres',
                'Flotador',
                'Tornillo de mezcla',
                'Paso de gasolina',
                'Ajuste de ralentí'
            ]
        },

        {
            id: 4,
            titulo: 'Culata, válvulas y distribución SOHC',
            nivel: 'Intermedio',
            descripcion:
                'Ajuste de luz de válvulas, asentamiento y cambio de cadenilla.',
            temas: [
                'Calibración de balancines',
                'Tensor de cadenilla',
                'Puntos de sincronización',
                'Retenes de válvula'
            ]
        },

        {
            id: 5,
            titulo: 'Sistema de encendido por CDI',
            nivel: 'Intermedio',
            descripcion:
                'Diagnóstico del circuito eléctrico de encendido y solución de fallas de chispa.',
            temas: [
                'Bobina pulsora',
                'CDI',
                'Bobina de alta',
                'Pruebas con multímetro'
            ]
        },

        {
            id: 6,
            titulo: 'Transmisión y Embrague húmedo',
            nivel: 'Avanzado',
            descripcion:
                'Mantenimiento y reemplazo del conjunto de embrague y caja de 4 marchas.',
            temas: [
                'Discos de fricción',
                'Corona y manzana',
                'Ejes y horquillas de cambio'
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
                '¿Tiene gasolina en el tanque y la llave está abierta?',
                '¿Llega gasolina a la cuba del carburador?',
                '¿Hay chispa clara y constante en la bujía?',
                '¿La bujía está seca o mojada en gasolina?',
                '¿Tiene compresión al accionar el pedal/kick?',
                '¿La holgura de válvulas es adecuada?',
                '¿Está a tiempo la cadenilla de distribución?'
            ]
        },

        pierdePotencia: {
            titulo: 'Pérdida de potencia',

            checklist: [
                'Filtro de aire sucio o humedecido',
                'Nivel de combustible / paso restringido',
                'Bujía con hollín o desgaste',
                'Desgaste en discos de embrague',
                'Escape parcialmente obstruido',
                'Baja compresión en el cilindro'
            ]
        },

        consumeAceite: {
            titulo: 'Diagnóstico de consumo de aceite',

            checklist: [
                'Inspeccionar presencia de humo azul al acelerar',
                'Verificar fugas externas en retenes de cigüeñal o juntas',
                'Medir desgaste de cilindro y holgura entre puntas de aros',
                'Revisar estado de los retenes de guía de válvula'
            ]
        },

        noHayChispa: {
            titulo: 'Diagnóstico del sistema eléctrico de encendido',

            checklist: [
                'Comprobar estado de la bujía',
                'Probar capuchón y cable de alta',
                'Medir continuidad de masa / tierra al chasis y motor',
                'Verificar resistencia de la bobina pulsora',
                'Verificar bobina de alta tensión',
                'Comprobar alimentación del CDI'
            ]
        }
    },

    // =========================================================
    // SEGURIDAD EN EL TALLER
    // =========================================================

    seguridad: [
        'Trabajar en áreas adecuadamente ventiladas para evitar inhalación de monóxido de carbono.',
        'Mantener recipientes con combustible cerrados y alejados de chispas o soldadura.',
        'Utilizar gafas protectoras al trabajar con aire comprimido o solventes de limpieza.',
        'Sostener la motocicleta firmemente sobre su caballete central antes de cualquier intervención.',
        'Respetar las especificaciones de torqué recomendadas para no aislar roscas en el bloque de aluminio.',
        'Esperar a que el motor se enfríe antes de intervenir el sistema de escape o culata.',
        'Desconectar la batería o el cable principal antes de manipular el sistema eléctrico.'
    ],

    // =========================================================
    // REGLA PRINCIPAL
    // =========================================================

    reglaPrincipal:
        'DIAGNOSTICAR → MEDIR → CONFIRMAR → REPARAR → COMPROBAR',

    // =========================================================
    // GLOSARIO
    // =========================================================

    glosario: [
        {
            termino: 'SOHC',
            significado:
                'Single Overhead Camshaft. Configuración donde un único árbol de levas se ubica en la culata para operar las válvulas.'
        },

        {
            termino: 'CDI',
            significado:
                'Capacitor Discharge Ignition. Sistema de encendido por descarga de condensador.'
        },

        {
            termino: 'PMS',
            significado:
                'Punto Muerto Superior: Máxima altura del pistón en su carrera.'
        },

        {
            termino: 'PMI',
            significado:
                'Punto Muerto Inferior: Punto más bajo que alcanza el pistón.'
        },

        {
            termino: 'Chicler / Gigleur',
            significado:
                'Surtidor o glicleur con un orificio calibrado para dosificar el paso de gasolina en el carburador.'
        },

        {
            termino: 'Insuladora',
            significado:
                'Aislador térmico o acople plástico/goma ubicado entre la culata y el carburador.'
        },

        {
            termino: 'ExhausTEC',
            significado:
                'Tecnología de cámara de resonancia en el escape desarrollada por Bajaj para mejorar el torque a bajas revoluciones.'
        }
    ],

    // =========================================================
    // NOTA TÉCNICA
    // =========================================================

    notaTecnica: `
        Esta ficha de datos está estructurada para la familia Bajaj CT 100 
        con sistema de carburador. 

        Para procedimientos de reparación que exijan tolerancias exactas de metrología, 
        pares de apriete (torques), o diagramas eléctricos de modelos específicos (KS, ES o versiones BS4/BS6), 
        se recomienda consultar siempre el manual de taller de Bajaj correspondiente a la versión y año exacto del vehículo.
    `
};
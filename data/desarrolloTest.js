// data/desarrolloTest.js
export const desarrolloTest = {
  ejercicios: {
    grupo1: {
      titulo: "Ejercicios 1-7",
      ejercicios: [
        {
          id: 1,
          titulo: "MAPA CONCEPTUAL JERÁRQUICO",
          instrucciones:
            "Completa el siguiente esquema con los nombres de las administraciones que te afectan directamente.",
          contenido: `ESTADO ESPAÑOL
|    | (Comunidad Autónoma) |
|---|---|
|    | (Órgano legislativo) |
|    | (Órgano ejecutivo) |
|    | (Órgano judicial) |
|    | (Nivel insular - Tenerife) |
|    | (Entidad que gobierna la isla) |
|    | (Tu municipio) |
|    | (Máxima autoridad municipal) |
|    | (Órgano de todos los concejales) |
|    | (Órgano de gobierno para municipios >5.000 hab.) |`,
        },
        {
          id: 2,
          titulo: "¿QUIÉN GESTIONA QUÉ? - CASOS REALES DE ICOD",
          instrucciones:
            "Identifica qué administración es responsable de cada servicio/problema.",
          tabla: {
            headers: [
              "Situación",
              "Administración responsable",
              "Argumento (¿por qué?)",
            ],
            filas: [
              [
                "Un bache en la calle La Paloma, frente al Drago Milenario",
                "",
                "",
              ],
              ["Necesitas licencia para reformar tu casa en Icod", "", ""],
              [
                "Mejora de la carretera TF-42 (Icod-Santiago del Teide)",
                "",
                "",
              ],
              [
                "Quieres denunciar el mal estado del Parque Nacional del Teide",
                "",
                "",
              ],
              ["Problemas con la recogida de basuras en tu barrio", "", ""],
              ["Quieres información sobre becas escolares", "", ""],
              [
                "El horario de la guagua Icod-Santa Cruz es insuficiente",
                "",
                "",
              ],
            ],
          },
        },
        {
          id: 3,
          titulo: "FINANCIACIÓN MUNICIPAL - APLICACIÓN PRÁCTICA",
          instrucciones:
            "Clasifica estos ingresos del Ayuntamiento de Icod de los Vinos.",
          tabla: {
            headers: [
              "Ingreso",
              "Tipo de financiación (Tasa/Impuesto/Subvención/etc.)",
            ],
            filas: [
              ["Pago por la licencia de obras de tu vecino", ""],
              [
                "Dinero que recibe el ayuntamiento para las Fiestas de San Andrés",
                "",
              ],
              ["Pago del IBI de tu vivienda", ""],
              ["Multa por mal estacionamiento", ""],
              ["Entrada a la piscina municipal en verano", ""],
              [
                "Alquiler del local municipal en la plaza de La Constitución",
                "",
              ],
              ["Pago del impuesto de circulación de tu coche", ""],
            ],
          },
        },
        {
          id: 4,
          titulo: "COMPETENCIAS TERRITORIALES - CANARIAS ESPECIAL",
          instrucciones: "Responde Verdadero o Falso y justifica brevemente.",
          preguntas: [
            {
              enunciado:
                "Canarias tiene diputaciones provinciales como en la península.",
              justificacion: "",
            },
            {
              enunciado:
                "El Cabildo de Tenerife gestiona las carreteras que conectan Icod con Puerto de la Cruz.",
              justificacion: "",
            },
            {
              enunciado:
                "El Gobierno de Canarias es responsable de la sanidad en el Hospital del Norte de Tenerife.",
              justificacion: "",
            },
            {
              enunciado:
                "El Ayuntamiento de Icod puede crear sus propias leyes educativas.",
              justificacion: "",
            },
            {
              enunciado:
                "Los Cabildos son una particularidad del sistema territorial canario.",
              justificacion: "",
            },
          ],
        },
        {
          id: 5,
          titulo: "CASO PRÁCTICO DE COOPERACIÓN",
          situacion:
            "Hay un problema de abastecimiento de agua que afecta a Icod de los Vinos y a los municipios vecinos de La Guancha y San Juan de la Rambla.",
          preguntas: [
            "¿Qué tipo de entidad local supramunicipal podrían crear para solucionarlo?",
            "¿Qué principio territorial justifica esta cooperación?",
            "¿Qué administración superior debería autorizar esta colaboración?",
            "¿Qué beneficios tendría Icod al participar en esta entidad?",
          ],
        },
        {
          id: 6,
          titulo: "DEFINICIÓN DE CONCEPTOS CLAVE",
          instrucciones:
            "Define con tus palabras estos conceptos, usando ejemplos de Icod.",
          conceptos: [
            { termino: "Municipio", ejemplo: "Ejemplo en Icod:" },
            { termino: "Cabildo Insular", ejemplo: "Ejemplo en Tenerife:" },
            {
              termino: "Estatuto de Autonomía",
              ejemplo: "Ejemplo para Canarias:",
            },
            { termino: "Competencia municipal", ejemplo: "Ejemplo en Icod:" },
            { termino: "Padrón municipal", ejemplo: "Ejemplo práctico:" },
          ],
        },
        {
          id: 7,
          titulo: "ANÁLISIS DE NOTICIA LOCAL",
          instrucciones: "Lee esta noticia ficticia y responde:",
          noticia:
            '"El Ayuntamiento de Icod de los Vinos anuncia la rehabilitación de la Casa de los Cáceres con una subvención del Cabildo de Tenerife y fondos europeos para el desarrollo rural."',
          preguntas: [
            "¿Qué administraciones participan en el proyecto?",
            "¿Qué tipo de financiación utiliza cada una?",
            "¿Qué nivel territorial dirige la obra?",
            "¿Qué principio territorial se aplica al cooperar diferentes administraciones?",
          ],
        },
      ],
    },
    grupo2: {
      titulo: "Ejercicios 8-17",
      ejercicios: [
        // Ejercicios 8-17 (páginas 5-6 del PDF)
        {
          id: 8,
          titulo: "DERECHOS POLÍTICOS EN EL MUNICIPIO",
          situacion:
            "Una ciudadana británica, residente en Icod de los Vinos desde hace 4 años, acude al ayuntamiento con varias dudas.",
          preguntas: [
            "¿Qué debe hacer para ser considerada vecina del municipio y acceder a los mismos servicios?",
            "¿Podría votar en las próximas elecciones municipales?",
            "¿Podría presentarse como candidata a concejal?",
          ],
        },
        {
          id: 9,
          titulo: "TRIBUTOS MUNICIPALES HABITUALES",
          situacion:
            "Un vecino de la Calle San Sebastián en Icod ha comprado un coche y es propietario de su vivienda.",
          preguntas: [
            "¿A qué impuestos municipales debe hacer frente por estos hechos?",
            "¿Qué tributo municipal pagaría por la recogida de basuras?",
            "Si el ayuntamiento instala nuevo alcantarillado en su calle y su propiedad se revaloriza, ¿qué tipo de tributo podría tener que pagar?",
          ],
        },
        {
          id: 10,
          titulo: "COMPETENCIAS MUNICIPALES VS. OTRAS ADMINISTRACIONES",
          situacion:
            "Un ciudadano de Icod tiene varias quejas y no sabe a qué administración dirigirse:",
          casos: [
            {
              situacion:
                "Las guaguas que van a Santa Cruz pasan con muy poca frecuencia",
              competencia: "",
            },
            {
              situacion: "El IES de Icod tiene goteras en varias aulas",
              competencia: "",
            },
            {
              situacion: "La carretera TF-42 tiene baches peligrosos",
              competencia: "",
            },
            {
              situacion: "No recogen la basura de su contenedor regularmente",
              competencia: "",
            },
          ],
        },
        {
          id: 11,
          titulo: "FINANCIACIÓN MUNICIPAL",
          situacion:
            "El Ayuntamiento de Icod de los Vinos necesita financiar varias obras:",
          obras: [
            { obra: "La reforma de la plaza de La Pila", financiacion: "" },
            {
              obra: "La construcción de un nuevo centro social",
              financiacion: "",
            },
            {
              obra: "La adquisición de un nuevo camión de bomberos",
              financiacion: "",
            },
          ],
        },
        {
          id: 12,
          titulo: "ORGANIZACIÓN MUNICIPAL",
          situacion:
            "Una asociación vecinal de Icod quiere presentar una queja sobre el estado de las calles del casco histórico.",
          preguntas: [
            "¿A qué órgano municipal deberían dirigirse primero?",
            "Si no obtienen respuesta, ¿ante qué órgano podrían elevar su queja?",
            "¿Qué órgano municipal es el responsable último de aprobar el presupuesto para arreglar las calles?",
          ],
        },
        {
          id: 13,
          titulo: "SERVICIOS MUNICIPALES OBLIGATORIOS",
          situacion:
            "El ayuntamiento de un pequeño municipio de Tenerife con 1.500 habitantes tiene problemas para prestar todos los servicios.",
          preguntas: [
            "¿Qué servicios mínimos debe garantizar a sus vecinos?",
            "¿Qué administración superior debe ayudarle a coordinar estos servicios?",
            "¿Podría unirse a otros municipios para prestar servicios comunes? ¿Cómo se llamaría esta entidad?",
          ],
        },
        {
          id: 14,
          titulo: "REGÍMENES ESPECIALES TERRITORIALES",
          instrucciones:
            "Compara la organización territorial de Canarias con la de otras comunidades:",
          preguntas: [
            "¿Qué entidad realiza las funciones que en la península hacen las diputaciones provinciales?",
            "¿Qué dos comunidades autónomas tienen régimen foral de financiación?",
            "¿Qué particularidad tiene la organización territorial de Cataluña respecto a las provincias?",
          ],
        },
        {
          id: 15,
          titulo: "COOPERACIÓN ENTRE ADMINISTRACIONES",
          situacion:
            "El Ayuntamiento de Icod, el Cabildo de Tenerife y el Gobierno de Canarias quieren mejorar la zona del Drago Milenario.",
          preguntas: [
            "¿Qué principio territorial justifica esta cooperación?",
            "¿Qué instrumentos de cooperación podrían utilizar?",
            "¿Qué beneficios obtendrán los ciudadanos de esta colaboración?",
          ],
        },
        {
          id: 16,
          titulo: "OBLIGACIONES DE LOS VECINOS",
          situacion:
            "Una familia alemana se ha trasladado a vivir a Icod y quiere conocer sus obligaciones como vecinos:",
          preguntas: [
            "¿Dónde deben inscribirse para ser considerados vecinos?",
            "¿Tienen obligación de pagar tributos municipales?",
            "¿Qué servicios municipales tienen derecho a utilizar?",
          ],
        },
        {
          id: 17,
          titulo: "CONFLICTOS DE COMPETENCIAS",
          situacion:
            "Un hotelero de Icod quiere ampliar su establecimiento y necesita: - Licencia de obras (competencia municipal) - Concesión de agua (competencia insular) - Licencia ambiental (competencia autonómica)",
          preguntas: [
            "¿Ante qué dificultades se encuentra al tener que dirigirse a tres administraciones diferentes?",
            "¿Qué principio territorial busca evitar estos problemas?",
            "¿Qué órgano resolvería un conflicto entre estas administraciones?",
          ],
        },
      ],
    },
    grupo3: {
      titulo: "Ejercicios 18-27",
      ejercicios: [
        // Ejercicios 18-27 (páginas 8-9 del PDF)
        {
          id: 18,
          titulo: "ORGANIZACIÓN TERRITORIAL DE CANARIAS",
          situacion:
            "Un ciudadano de Icod de los Vinos quiere saber qué administraciones existen por encima de su ayuntamiento.",
          preguntas: [
            "¿Qué entidad gobierna toda la isla de Tenerife?",
            "¿Qué administración gestiona la sanidad y educación en Canarias?",
            "¿Existen diputaciones provinciales en Canarias? ¿Qué las sustituye?",
          ],
        },
        {
          id: 19,
          titulo: "PRINCIPIOS TERRITORIALES",
          instrucciones:
            "Identifica qué principio territorial se aplica en cada caso:",
          casos: [
            {
              situacion:
                "Un ciudadano de Icod puede recibir atención médica en un hospital de Santa Cruz",
              principio: "",
            },
            {
              situacion:
                "El Cabildo y el Ayuntamiento colaboran para mejorar las carreteras de acceso al Drago Milenario",
              principio: "",
            },
            {
              situacion:
                "Todos los españoles tienen los mismos derechos independientemente de donde vivan",
              principio: "",
            },
            {
              situacion:
                "Las comunidades autónomas no pueden unirse para formar una federación",
              principio: "",
            },
          ],
        },
        {
          id: 20,
          titulo: "COMPETENCIAS MUNICIPALES",
          situacion:
            "Un vecino de Icod tiene los siguientes problemas, ¿el ayuntamiento puede ayudarle?",
          casos: [
            {
              problema:
                "Quiere una licencia para abrir un bar en la calle Santo Domingo",
              respuesta: "",
            },
            {
              problema: "Necesita arreglar el alcantarillado de su calle",
              respuesta: "",
            },
            {
              problema: "Quiere denunciar el mal estado de la TF-5",
              respuesta: "",
            },
            {
              problema: "Necesita una beca escolar para su hija",
              respuesta: "",
            },
          ],
        },
        {
          id: 21,
          titulo: "ÓRGANOS DE GOBIERNO MUNICIPAL",
          situacion: "En el Ayuntamiento de Icod de los Vinos:",
          preguntas: [
            "¿Quién preside el Pleno municipal?",
            "¿Qué órgano aprueba los presupuestos del ayuntamiento?",
            "¿Qué órgano dirige la administración municipal día a día?",
            "¿Qué órgano existe en municipios de más de 5.000 habitantes para asistir al alcalde?",
          ],
        },
        {
          id: 22,
          titulo: "FINANCIACIÓN AUTONÓMICA",
          situacion:
            "El Gobierno de Canarias necesita financiar nuevos hospitales:",
          preguntas: [
            "¿Qué dos principios rigen la financiación autonómica?",
            "¿En qué régimen de financiación está Canarias?",
            "¿Qué comunidades tienen régimen foral?",
            "¿Qué son los 'tributos cedidos'?",
          ],
        },
        {
          id: 23,
          titulo: "ENTIDADES LOCALES",
          situacion: "En la comarca de Icod:",
          preguntas: [
            "¿Qué es una mancomunidad de municipios?",
            "¿Qué servicios podrían prestar conjuntamente Icod, La Guancha y San Juan de la Rambla?",
            "¿Qué administración debe aprobar la creación de una mancomunidad?",
          ],
        },
        {
          id: 24,
          titulo: "ESTATUTO DE AUTONOMÍA",
          instrucciones: "Sobre el Estatuto de Autonomía de Canarias:",
          preguntas: [
            "¿Qué es el estatuto de autonomía?",
            "¿Quién debe aprobarlo?",
            "¿Qué contenido mínimo debe tener?",
            "¿Puede una comunidad autónoma ampliar sus competencias?",
          ],
        },
        {
          id: 25,
          titulo: "CONTROL DE LAS ADMINISTRACIONES",
          instrucciones:
            "Para garantizar que las comunidades autónomas cumplen las leyes:",
          preguntas: [
            "¿Qué tribunal controla que los estatutos y leyes autonómicas no vayan contra la Constitución?",
            "¿Qué órgano controla la actividad económica de las comunidades autónomas?",
            "¿Qué artículo de la Constitución permite al Estado intervenir en una comunidad autónoma?",
          ],
        },
        {
          id: 26,
          titulo: "COOPERACIÓN ENTRE ADMINISTRACIONES",
          situacion:
            "El Ayuntamiento de Icod quiere mejorar el turismo en la zona del Drago:",
          preguntas: [
            "¿Qué órgano de cooperación reúne al Estado con todas las comunidades autónomas?",
            "¿Qué órgano trata temas específicos como turismo o sanidad?",
            "¿Qué comisiones permiten el diálogo entre el Estado y una comunidad autónoma en concreto?",
          ],
        },
        {
          id: 27,
          titulo: "RÉGIMEN LOCAL",
          instrucciones: "Sobre los municipios de Canarias:",
          preguntas: [
            "¿Qué debe hacer una persona para ser considerada vecina de Icod?",
            "¿Qué servicios debe garantizar el ayuntamiento a todos sus vecinos?",
            "¿Qué ocurre con los municipios pequeños que no pueden prestar todos los servicios?",
          ],
        },
      ],
    },
    grupo4: {
      titulo: "Ejercicios 28-37",
      ejercicios: [
        // Ejercicios 28-37 (páginas 10-11 del PDF)
        {
          id: 28,
          titulo: "MODELO TERRITORIAL ESPAÑOL",
          situacion:
            "Un estudiante extranjero pregunta sobre la organización de España:",
          preguntas: [
            "¿Qué tipo de estado es España según su modelo territorial?",
            "¿Qué principio impide que las comunidades autónomas se federen entre sí?",
            "Nombra dos comunidades autónomas que tengan régimen foral de financiación.",
          ],
        },
        {
          id: 29,
          titulo: "ADMINISTRACIÓN LOCAL EN CANARIAS",
          situacion: "Un nuevo vecino de Icod de los Vinos pregunta:",
          preguntas: [
            "¿Qué es el Padrón Municipal y por qué debe inscribirse?",
            "¿Qué servicios básicos debe proporcionarle el Ayuntamiento?",
            "Si tiene un problema con la recogida de basuras, ¿a qué concejalía debe dirigirse?",
          ],
        },
        {
          id: 30,
          titulo: "FINANCIACIÓN PÚBLICA",
          instrucciones:
            "Sobre los recursos económicos de las administraciones:",
          preguntas: [
            "¿Qué tres tipos de tributos puede establecer un municipio?",
            "¿Qué diferencia hay entre una tasa y un impuesto?",
            "¿Qué es una contribución especial?",
          ],
        },
        {
          id: 31,
          titulo: "COMPETENCIAS TERRITORIALES",
          situacion:
            "Un ciudadano tiene estas dudas, ¿qué administración le corresponde?",
          casos: [
            {
              situacion: "Quiere denunciar el mal estado de la carretera TF-42",
              administracion: "",
            },
            {
              situacion: "Necesita una beca universitaria para su hijo",
              administracion: "",
            },
            {
              situacion: "Quiere solicitar una subvención para agricultores",
              administracion: "",
            },
            {
              situacion: "Debe pagar el IBI de su vivienda",
              administracion: "",
            },
          ],
        },
        {
          id: 32,
          titulo: "ÓRGANOS DE GOBIERNO",
          instrucciones: "Sobre la organización del Ayuntamiento de Icod:",
          preguntas: [
            "¿Cómo se elige al alcalde?",
            "¿Qué funciones tiene el Pleno municipal?",
            "¿Qué órgano existe para asistir al alcalde en municipios como Icod?",
          ],
        },
        {
          id: 33,
          titulo: "RELACIONES ENTRE ADMINISTRACIONES",
          instrucciones: "Para coordinar las políticas entre administraciones:",
          preguntas: [
            "¿Qué principio obliga a las CCAA a colaborar entre sí?",
            "¿Qué órgano reúne al presidente del Gobierno con los presidentes autonómicos?",
            "¿Qué son las conferencias sectoriales?",
          ],
        },
        {
          id: 34,
          titulo: "RÉGIMEN ESPECIAL DE CANARIAS",
          instrucciones: "Sobre las particularidades canarias:",
          preguntas: [
            "¿Qué son los Cabildos Insulares?",
            "¿Por qué Canarias recibe fondos especiales?",
            "¿Qué ley regula el régimen económico especial de Canarias?",
          ],
        },
        {
          id: 35,
          titulo: "DERECHOS DE LOS CIUDADANOS",
          instrucciones: "Sobre los principios que garantizan derechos:",
          preguntas: [
            "¿Qué principio permite a un ciudadano de Icod recibir asistencia médica en cualquier parte de España?",
            "¿Qué principio garantiza que tenga los mismos derechos que un ciudadano de Madrid?",
            "¿Qué principio le permite circular libremente por todo el territorio español?",
          ],
        },
        {
          id: 36,
          titulo: "CONTROL Y GARANTÍAS",
          instrucciones: "Para asegurar el cumplimiento de las normas:",
          preguntas: [
            "¿Qué tribunal resuelve conflictos entre el Estado y las CCAA?",
            "¿Qué artículo de la Constitución permite la intervención estatal en una comunidad autónoma?",
            "¿Qué órgano controla la gestión económica de las administraciones?",
          ],
        },
        {
          id: 37,
          titulo: "ORGANIZACIÓN TERRITORIAL",
          instrucciones: "Sobre la estructura del Estado:",
          preguntas: [
            "¿Qué tres tipos de entidades territoriales establece la Constitución?",
            "¿Qué es un estatuto de autonomía?",
            "¿Qué comunidades autónomas son uniprovinciales?",
          ],
        },
      ],
    },
  },
};

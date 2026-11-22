"use strict";

// Koach Learn course (Spanish translation of athletes-brand-campaigns). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-brand-campaigns-es",
  lang: "es",
  translationOf: "athletes-brand-campaigns",
  category: "Athletes",
  name: "Campañas educativas de marcas",
  skills: "Reconocer una campaña educativa, Elegir una causa que vaya contigo, Verificar datos con fuentes confiables, Planear una campaña de 3 publicaciones con IA, Proponer una alianza a una marca u organización sin fines de lucro con un aviso claro",
  outcome: "planear una campaña educativa de tres publicaciones sobre una causa que te importa (por ejemplo seguridad en el agua, lectura, conmociones cerebrales o educación financiera), con datos verificados en fuentes oficiales, una propuesta a un aliado y un aviso claro de cualquier apoyo de una marca.",
  about: [
    "Este curso es para atletas y entrenadores que quieren usar su plataforma para enseñar algo útil, solos o con una marca u organización sin fines de lucro como aliada. Las marcas a menudo hacen campañas educativas con atletas sobre temas como salud, seguridad, lectura, manejo del dinero y comunidad.",
    "Una campaña educativa primero enseña y después vende, si es que vende. Vas a aprender qué hace buena a una campaña, elegir una causa que vaya contigo, verificar datos con fuentes oficiales, planear tres publicaciones con IA y hacer una propuesta honesta a un aliado.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Cualquier trabajo pagado o con regalos de una marca necesita un aviso claro y, si eres estudiante, revisar las reglas de NIL (nombre, imagen y semejanza) de tu escuela y tu estado."
  ],
  finalTask: "Planea una campaña educativa de tres publicaciones sobre una causa: un objetivo de aprendizaje claro, tres planes de publicación hechos con IA, cada dato enlazado a una fuente oficial o experta, una llamada a la acción y una propuesta corta a una marca u organización sin fines de lucro. Incluye cómo vas a avisar de cualquier apoyo de una marca y con quién revisaste las reglas de NIL en tu escuela o tu estado.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas y entrenadores de secundaria, universidad y de los primeros años de carrera que quieren usar su plataforma para enseñar algo útil, solos o con una marca u organización sin fines de lucro como aliada.",
    startingPoint: "Tienen un público en redes sociales y una causa que les importa por su propia vida. Pocos han planeado una campaña, revisado datos con fuentes oficiales, enviado una propuesta a un aliado o medido si la gente aprendió.",
    gap: "Las publicaciones bien intencionadas con datos equivocados pueden hacerle daño a la gente y perjudicar la reputación del deportista y de su aliado, y el apoyo sin aviso rompe las reglas de publicidad. Una campaña pequeña, con datos verificados y un aviso honesto, permite a los deportistas ayudar a su comunidad y crear alianzas de confianza.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Un teléfono con redes sociales y un asistente de IA gratuito",
      "Unos 60 minutos en total",
      "Cada dato viene de una fuente oficial o experta; solo información general, y los consejos personales se dejan a los profesionales",
      "Las reglas de aviso de la FTC y las reglas de NIL de la escuela y del estado; los deportistas menores de 18 años incluyen a su madre, padre o tutor"
    ],
    prerequisites: "Ninguno. \"Creación de contenido para atletas\" ayuda a hacer las publicaciones."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante ejemplos de publicaciones", action: "explicar en qué se diferencia una campaña educativa de un anuncio normal", standard: "nombrando las cuatro partes de una buena campaña: un objetivo de aprendizaje, datos correctos, una acción sencilla y honestidad sobre quién paga" },
    { id: "O2", condition: "Ante causas relacionadas con tu vida", action: "elegir una causa y escribir un objetivo de aprendizaje para tu público", standard: "con una conexión de dos frases con tu historia y un objetivo que diga quién sabrá o hará qué" },
    { id: "O3", condition: "Con los datos que quieres compartir", action: "verificar cada dato con una fuente oficial o experta y anotarlo en una hoja de datos", standard: "con un enlace y una fecha para cada dato y quitando cualquier dato que no puedas confirmar" },
    { id: "O4", condition: "Usando tu hoja de datos y un asistente de IA", action: "crear un plan de tres publicaciones: por qué importa, qué saber y pasa a la acción", standard: "con un gancho, los puntos principales y una llamada a la acción en cada publicación, solo datos de tu hoja de datos y un tono esperanzador" },
    { id: "O5", condition: "Ante aliados a los que ya les importa tu causa", action: "escribir una propuesta corta a una marca u organización sin fines de lucro", standard: "de menos de 150 palabras, con tu causa, tu historia, tu objetivo, tu plan, tu público y un pedido claro, y con las reglas de NIL revisadas" },
    { id: "O6", condition: "En una campaña con cualquier apoyo de una marca", action: "escribir un aviso claro para cada publicación y elegir dos formas de medir el aprendizaje", standard: "con el aviso cerca del inicio, sin afirmaciones que vayan más allá de tu hoja de datos y con los resultados compartidos con tu aliado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Qué hace buena a una campaña educativa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es una campaña educativa",
          minutes: 4,
          goal: "Distinguir una campaña educativa de un anuncio normal.",
          text: [
            "Un anuncio normal dice \"compra esto\". Una campaña educativa dice \"aquí hay algo útil que saber o hacer\". Las marcas usan atletas en estas campañas porque los jóvenes y las familias confían en ellos.",
            "Ejemplos de temas de campaña: aprender a nadar y seguridad en el agua, reconocer las señales de una conmoción cerebral, leer todos los días, mantenerse hidratado, ahorrar dinero, seguridad en internet o conciencia sobre la salud mental.",
            "Las buenas campañas tienen un solo objetivo de aprendizaje, datos correctos de fuentes confiables, una acción sencilla que la gente puede hacer y honestidad sobre quién la paga."
          ],
          words: [["Campaña educativa", "una serie de mensajes que enseña algo útil, muchas veces con el apoyo de una marca u organización sin fines de lucro."], ["Objetivo de aprendizaje", "lo único que quieres que tu público sepa o haga después de la campaña."]],
          slides: [
            { title: "Anuncio vs. campaña educativa", bullets: ["Anuncio: \"compra esto\"", "Campaña: \"aquí hay algo útil que saber o hacer\""] },
            { title: "Ejemplos de temas", bullets: ["Seguridad en el agua, señales de conmoción", "Lectura, manejo del dinero", "Seguridad en internet, salud mental"] },
            { title: "Una buena campaña tiene", bullets: ["Un solo objetivo de aprendizaje", "Datos correctos y con fuente", "Una acción sencilla", "Honestidad sobre quién paga"] }
          ],
          tryIt: "Busca una campaña educativa que hayas visto con un atleta o una marca. Escribe su objetivo de aprendizaje, la acción que pedía y si decía quién la pagó.",
          youCanNow: "distinguir una campaña educativa de un anuncio normal y decir qué la hace buena.",
          quickCheck: [
            { objective: "O1", q: "¿Qué dice una campaña educativa?", options: ["\"Compra esto ya\"", "\"Esto es algo útil que puedes saber o hacer\"", "\"Sígueme para participar en sorteos\"", "\"Nuestro equipo es el mejor\""], answer: 1, why: "Un anuncio normal dice compra esto; una campaña educativa enseña algo útil." },
            { objective: "O1", q: "Una marca te ofrece una \"campaña\" que son solo códigos de descuento, sin ninguna lección. ¿Qué es?", options: ["Una campaña educativa", "Una hoja de datos", "Un anuncio normal", "Una alianza con una organización sin fines de lucro"], answer: 2, why: "Sin un objetivo de aprendizaje ni una acción útil, es un anuncio normal." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Elegir tu causa",
          minutes: 5,
          goal: "Elegir una causa que vaya con tu historia y tu público.",
          text: [
            "Las campañas más fuertes salen de la vida real. ¿Un entrenador te enseñó sobre las conmociones cerebrales después de que un compañero se lastimó? ¿La lectura te ayudó a seguir siendo elegible? ¿Aprender a hacer un presupuesto con tu dinero de NIL cambió las cosas? Tu historia hace que la gente escuche.",
            "Elige una causa que también vaya con tu público. A los fans más jóvenes y a sus padres quizá les importen la seguridad y la lectura; a tus compañeros universitarios, el manejo del dinero y la salud mental.",
            "Escribe un objetivo de aprendizaje: \"Después de mi campaña, los jugadores de secundaria básica sabrán tres señales de una conmoción cerebral y que deben avisar al entrenador de inmediato.\""
          ],
          steps: ["Haz una lista de tres causas relacionadas con tu vida.", "Marca la que mejor va con tu público.", "Escribe en dos oraciones tu relación con la causa.", "Escribe un objetivo de aprendizaje."],
          words: [["Causa", "un problema o una meta que te importa y con la que quieres ayudar."], ["Auténtico", "real y fiel a quien eres."]],
          slides: [
            { title: "Empieza con tu historia", bullets: ["¿Qué te pasó?", "¿Por qué te importa?"] },
            { title: "Que vaya con tu público", bullets: ["Fans jóvenes: seguridad, lectura", "Compañeros universitarios: dinero, salud mental"] },
            { title: "Un objetivo de aprendizaje", bullets: ["Quién va a aprender qué", "Y qué va a hacer"] }
          ],
          tryIt: "Pide a un asistente de IA que te ayude a hacer una lista de causas relacionadas con tu deporte y tu vida. Elige una y escribe tu historia en dos oraciones y un objetivo de aprendizaje.",
          youCanNow: "elegir una causa auténtica y escribir un objetivo de aprendizaje claro.",
          quickCheck: [
            { objective: "O2", q: "¿De dónde salen las causas más fuertes para una campaña?", options: ["De tu vida real", "De lo que está de moda", "De lo que te dice una marca", "De temas al azar de la IA"], answer: 0, why: "Tu historia hace que la gente escuche." },
            { objective: "O2", q: "Tus seguidores son sobre todo jugadores de secundaria básica y sus padres. ¿Qué causa encaja mejor?", options: ["Invertir para la jubilación", "El seguro del carro", "Los formularios de impuestos de la universidad", "Reconocer las señales de una conmoción cerebral"], answer: 3, why: "A los seguidores más jóvenes y a sus padres les pueden importar temas de seguridad como las conmociones." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tener los datos correctos",
          minutes: 5,
          goal: "Verificar cada dato de tu campaña con una fuente oficial o experta.",
          text: [
            "Si enseñas algo equivocado, la gente puede salir lastimada, y tu reputación y la de tu aliado se dañan. Cada dato necesita una fuente confiable.",
            "Usa fuentes oficiales y expertas: agencias de gobierno de salud y seguridad (por ejemplo, las páginas HEADS UP sobre conmociones de los CDC, la agencia de salud pública de EE. UU.), organizaciones nacionales y expertos como preparadores físicos, médicos, maestros o asesores financieros. Pide a un asistente de IA que te explique un tema de forma sencilla y luego confirma cada dato en la fuente misma.",
            "Lleva una hoja de datos: cada dato, el enlace a la fuente y la fecha en que lo revisaste. Enseña conciencia general y envía a la gente con profesionales para consejos personales."
          ],
          steps: ["Haz una lista de los datos que quieres compartir.", "Busca una fuente oficial o experta para cada uno.", "Anota el enlace y la fecha en que lo revisaste.", "Quita cualquier dato que no puedas confirmar.", "Envía a la gente con profesionales para consejos personales."],
          words: [["Fuente oficial", "información de una agencia de gobierno o de la organización a cargo del tema."], ["Hoja de datos", "una lista de tus datos con sus fuentes y las fechas en que los revisaste."]],
          slides: [
            { title: "Los datos equivocados hacen daño", bullets: ["La gente puede salir lastimada", "Tu nombre y el de tu aliado se dañan"] },
            { title: "Fuentes confiables", bullets: ["Agencias de gobierno, como CDC HEADS UP", "Organizaciones nacionales", "Expertos: preparadores, médicos, maestros"] },
            { title: "Tu hoja de datos", bullets: ["Dato, enlace a la fuente, fecha de revisión", "¿No lo puedes confirmar? Quítalo"] }
          ],
          sources: [{ name: "CDC: HEADS UP (conciencia sobre conmociones cerebrales, en inglés)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Escribe tres datos para tu campaña. Busca una fuente oficial o experta para cada uno y arma tu hoja de datos con enlaces y fechas.",
          youCanNow: "verificar los datos de una campaña con fuentes oficiales y llevar una hoja de datos.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en una hoja de datos?", options: ["Tu número de seguidores", "Cada dato, el enlace a su fuente y la fecha en que lo revisaste", "Solo la respuesta de la IA", "Los precios de tu aliado"], answer: 1, why: "Una hoja de datos guarda cada dato con su fuente y la fecha en que se revisó." },
            { objective: "O3", q: "Un seguidor te pregunta qué hacer con su propia lesión. ¿Qué haces?", options: ["Darle un plan de tratamiento", "Preguntarle a una IA y compartir la respuesta", "Indicarle que vaya con un médico o un preparador físico", "No hacerle caso"], answer: 2, why: "Enseña información general y envía a la gente con profesionales para los consejos personales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué hace buena a una campaña educativa",
        questions: [
          { objective: "O1", q: "¿En qué se diferencia una campaña educativa de un anuncio normal?", options: ["Siempre es más larga", "No tiene atletas", "Primero enseña algo útil", "Nunca tiene marcas"], answer: 2, why: "Las campañas enseñan; los anuncios sobre todo venden." },
          { objective: "O2", q: "¿Cuál es un objetivo de aprendizaje claro?", options: ["\"Los jugadores de secundaria básica sabrán tres señales de conmoción y avisarán al entrenador\"", "\"Toma conciencia\"", "\"Corre la voz\"", "\"Hazte viral\""], answer: 0, why: "Dice quién aprende qué y qué va a hacer." },
          { objective: "O2", q: "¿Por qué empezar con tu propia historia?", options: ["Lo exige la ley", "Hace las publicaciones más largas", "Esconde a la marca", "Hace la campaña real y la gente escucha"], answer: 3, why: "Las historias auténticas generan confianza." },
          { objective: "O3", q: "La IA te da un dato de salud. ¿Qué haces?", options: ["Lo publicas de inmediato", "Lo confirmas en una fuente oficial o experta", "Lo haces sonar más alarmante", "Le preguntas a un fan"], answer: 1, why: "La IA se puede equivocar; confírmalo en la fuente." },
          { objective: "O3", q: "No encuentras una fuente para un dato. Tú:", options: ["Lo publicas de todos modos", "Lo quitas", "Te inventas una fuente", "Cambias los números"], answer: 1, why: "Comparte solo lo que puedes confirmar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear y buscar aliados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planear tres publicaciones con IA",
          minutes: 5,
          goal: "Hacer con IA un borrador de plan de campaña de tres publicaciones y corregirlo.",
          text: [
            "Tres publicaciones bastan para una campaña enfocada: 1. Por qué importa (tu historia). 2. Qué saber o hacer (la lección principal). 3. Pasa a la acción (un paso sencillo, como \"comparte esto con tu equipo\" o \"toma la capacitación gratuita\").",
            "Pide a un asistente de IA: \"Esta es mi causa, mi objetivo de aprendizaje, mi historia y mi hoja de datos. Planea tres publicaciones cortas: por qué importa, qué saber, pasa a la acción. Dame un gancho, los puntos principales y una llamada a la acción para cada una. Usa solo datos de mi hoja de datos.\"",
            "Corrígelo para que suene a ti y vuelve a revisar cada dato con tu hoja de datos. Que el tono sea esperanzador y práctico, no alarmante."
          ],
          steps: ["Pega tu causa, tu objetivo, tu historia y tu hoja de datos.", "Pide tres publicaciones: por qué, qué, acción.", "Revisa cada dato con tu hoja de datos.", "Ajústalo a tu estilo.", "Haz que el tono sea esperanzador y práctico."],
          words: [["Llamada a la acción", "el paso sencillo que le pides a la gente."], ["Tono", "lo que transmite tu mensaje, por ejemplo esperanza o seriedad."]],
          slides: [
            { title: "Tres publicaciones", bullets: ["1. Por qué importa: tu historia", "2. Qué saber o hacer", "3. Pasa a la acción"] },
            { title: "Dale a la IA", bullets: ["Causa, objetivo, historia", "Solo tu hoja de datos"] },
            { title: "Luego corrige", bullets: ["Los datos coinciden con tu hoja", "Tu estilo", "Esperanzador, no alarmante"] }
          ],
          tryIt: "Usa la IA para hacer el borrador de tu plan de tres publicaciones a partir de tu hoja de datos. Corrígelo y vuelve a revisar cada dato.",
          youCanNow: "planear con IA una campaña enfocada de tres publicaciones y mantener los datos correctos.",
          quickCheck: [
            { objective: "O4", q: "¿De qué trata la publicación 2 de la campaña?", options: ["De tu historia", "De los precios del aliado", "De los agradecimientos", "De qué saber o hacer: la lección principal"], answer: 3, why: "Las tres publicaciones son por qué importa, qué saber y pasa a la acción." },
            { objective: "O4", q: "El borrador de la IA agrega una estadística que no está en tu hoja de datos. ¿Qué haces?", options: ["Quitarla o confirmarla primero con una fuente oficial", "Dejarla; suena bien", "Redondearla hacia arriba", "Citar a la IA como fuente"], answer: 0, why: "Usa solo los datos de tu hoja de datos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proponer una alianza a una marca u organización",
          minutes: 5,
          goal: "Escribir una propuesta corta a una marca u organización sin fines de lucro que vaya con tu causa.",
          text: [
            "Los aliados pueden sumar alcance, dinero o recursos. Busca a los que ya se preocupan por tu causa: una escuela de natación para la seguridad en el agua, una biblioteca o librería para la lectura, una cooperativa de crédito local para el manejo del dinero, una clínica de medicina deportiva para la prevención de lesiones. Las organizaciones sin fines de lucro pueden recibir bien una alianza como voluntario.",
            "Una propuesta muestra tu causa, tu historia, tu objetivo de aprendizaje, tu plan de tres publicaciones y tu público. Pide algo claro: compartir las publicaciones, darte materiales o patrocinar la campaña.",
            "Usa la IA para el borrador y luego hazlo personal. ¿Menor de 18 años? Involucra a tu padre, madre o tutor. Estudiantes atletas: revisen las reglas de NIL de su escuela y su estado antes de aceptar cualquier pago o producto."
          ],
          steps: ["Haz una lista de tres aliados que ya se preocupan por tu causa.", "Escribe lo que vas a pedir.", "Usa la IA para un borrador de propuesta de menos de 150 palabras.", "Hazlo personal.", "Revisa las reglas de NIL antes de aceptar pagos o productos."],
          words: [["Aliado", "una marca u organización sin fines de lucro que trabaja contigo en la campaña."], ["Organización sin fines de lucro", "una organización que trabaja por una causa en lugar de buscar ganancias."]],
          slides: [
            { title: "Buenos aliados", bullets: ["Ya se preocupan por tu causa", "Escuela de natación, biblioteca, cooperativa, clínica"] },
            { title: "Tu propuesta muestra", bullets: ["Causa, historia, objetivo de aprendizaje", "Plan de tres publicaciones y público", "Un pedido claro"] },
            { title: "Antes de decir que sí", bullets: ["Menor de 18: involucra a un padre", "Revisa las reglas de NIL de la escuela y el estado"] }
          ],
          sources: [{ name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Elige un aliado y escribe con ayuda de la IA una propuesta de menos de 150 palabras. Pide a un entrenador o a tu padre o madre que la lea.",
          youCanNow: "proponer una alianza para tu campaña a una marca u organización sin fines de lucro.",
          quickCheck: [
            { objective: "O5", q: "¿Qué aliado encaja con una campaña de seguridad en el agua?", options: ["Una concesionaria de carros", "Una escuela de natación", "Una tienda de videojuegos", "Una pizzería"], answer: 1, why: "Busca aliados a los que ya les importa tu causa." },
            { objective: "O5", q: "Un aliado te ofrece equipo gratis para tu campaña, y eres estudiante deportista. ¿Qué haces primero?", options: ["Aceptarlo de inmediato", "Publicar sobre él sin decirle a nadie", "Revisar las reglas de NIL de tu escuela y de tu estado", "Vender el equipo"], answer: 2, why: "Revisa las reglas de NIL antes de aceptar cualquier pago o producto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Aviso, honestidad y medir el impacto",
          minutes: 5,
          goal: "Avisar claramente del apoyo de una marca y medir si la gente aprendió.",
          text: [
            "Si una marca te paga o te da algo por la campaña, la FTC (la Comisión Federal de Comercio de EE. UU.) dice que lo avises claramente en cada publicación, cerca del inicio: \"Colaboración pagada con [marca]\" o \"Gracias a [marca] por apoyar esta campaña\". En los videos, dilo y muéstralo.",
            "Di solo lo que crees y lo que respalda tu hoja de datos. No dejes que un aliado agregue afirmaciones que no puedes respaldar, sobre todo de salud.",
            "Mide el aprendizaje, no solo los me gusta: cuenta las veces que se compartió y se guardó, los comentarios con preguntas, las personas que hicieron la acción (como inscribirse a una capacitación), o haz una encuesta de dos preguntas al final. Comparte los resultados con tu aliado."
          ],
          steps: ["Agrega un aviso claro en cada publicación patrocinada.", "Revisa cada afirmación con tu hoja de datos.", "Elige dos formas de medir el impacto.", "Haz una encuesta corta después de la publicación 3.", "Envía los resultados a tu aliado."],
          words: [["Aviso", "una frase clara que dice que una marca te pagó o te apoyó."], ["Impacto", "el cambio real que logró tu campaña, como gente que aprende o actúa."]],
          slides: [
            { title: "Avisa claramente", bullets: ["En cada publicación patrocinada, cerca del inicio", "\"Colaboración pagada con [marca]\"", "Video: dilo y muéstralo"] },
            { title: "Mantente honesto", bullets: ["Solo lo que respalda tu hoja de datos", "Nada de afirmaciones de salud sin pruebas"] },
            { title: "Mide el aprendizaje", bullets: ["Compartidos, guardados, preguntas", "Personas que hicieron la acción", "Una encuesta de dos preguntas"] }
          ],
          sources: [{ name: "FTC: Guía básica de avisos para influencers en redes sociales (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Tarea final: arma tu plan de campaña con el objetivo de aprendizaje, tres publicaciones, la hoja de datos, la llamada a la acción, la propuesta al aliado, el texto del aviso y la persona con quien revisaste las reglas de NIL.",
          youCanNow: "hacer una campaña educativa honesta con un aviso claro y medir su impacto.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde debe ir el aviso en una publicación patrocinada de la campaña?", options: ["Cerca del inicio de cada publicación", "Solo en la última publicación", "Solo en tu biografía", "Al final de muchos hashtags"], answer: 0, why: "La FTC dice que hay que avisar con claridad en cada publicación, cerca del inicio." },
            { objective: "O6", q: "Tu campaña tuvo muchos me gusta. ¿Cómo sabes si la gente aprendió?", options: ["Los me gusta lo demuestran", "Preguntarle a la marca", "Contar los seguidores", "Hacer una encuesta corta y contar a las personas que hicieron la acción"], answer: 3, why: "Mide el aprendizaje, no solo los me gusta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear y buscar aliados",
        questions: [
          { objective: "O4", q: "¿De qué trata la publicación 1 de la campaña?", options: ["De comprar el producto", "De tus estadísticas", "De un sorteo", "De por qué importa: tu historia"], answer: 3, why: "Tu historia hace que a la gente le importe." },
          { objective: "O5", q: "¿Qué aliado va con una campaña de lectura?", options: ["Una biblioteca o librería local", "Una app de apuestas", "Una bebida energética", "Un vendedor de autos"], answer: 0, why: "Ya se preocupan por la lectura." },
          { objective: "O6", q: "Una marca apoya tu campaña con dinero. Cada publicación debe incluir:", options: ["Nada", "Un hashtag escondido", "Un aviso claro cerca del inicio", "Un nombre falso"], answer: 2, why: "La FTC exige un aviso claro." },
          { objective: "O6", q: "Un aliado quiere que digas que su bebida previene las conmociones. Tú:", options: ["Lo dices", "Lo dices en voz baja", "Lo dices sin aviso", "Te niegas; es una afirmación de salud sin pruebas"], answer: 3, why: "No hagas afirmaciones que no puedes respaldar." },
          { objective: "O6", q: "¿Qué mide mejor el aprendizaje?", options: ["Solo los me gusta", "Las personas que hicieron la acción y los resultados de la encuesta", "Tu número de seguidores", "El número de emojis"], answer: 1, why: "El impacto se trata de aprender y actuar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Campañas educativas de marcas",
    questions: [
      { objective: "O1", q: "Una campaña educativa sobre todo:", options: ["Vende tenis", "Muestra mejores jugadas", "Enseña algo útil", "Muestra estadísticas"], answer: 2, why: "Enseñar es el objetivo principal." },
      { objective: "O1", q: "¿Por qué las marcas usan atletas en las campañas?", options: ["Los jóvenes y las familias confían en los atletas", "Los atletas trabajan gratis", "Es obligatorio", "Los atletas son médicos"], answer: 0, why: "La confianza hace que el mensaje llegue." },
      { objective: "O1", q: "¿Cuál es un ejemplo de tema de campaña?", options: ["Seguridad en el agua", "Chismes de rivales", "Consejos de apuestas", "Dietas falsas"], answer: 0, why: "Es útil y seguro de enseñar." },
      { objective: "O2", q: "¿Cuántos objetivos de aprendizaje debe tener una campaña?", options: ["Diez", "Ninguno", "Uno", "Todos los posibles"], answer: 2, why: "Un solo objetivo la mantiene enfocada." },
      { objective: "O2", q: "Las causas más fuertes salen de:", options: ["Lo que esté de moda", "Tu vida real", "Una lista al azar", "Un competidor"], answer: 1, why: "Las historias reales son auténticas." },
      { objective: "O2", q: "Auténtico significa:", options: ["Caro", "Viral", "Largo", "Real y fiel a ti"], answer: 3, why: "La autenticidad genera confianza." },
      { objective: "O3", q: "¿Cuál es una fuente oficial sobre conmociones cerebrales?", options: ["Una página de memes", "Un anuncio", "CDC HEADS UP", "Una sección de comentarios"], answer: 2, why: "Es de una agencia de salud del gobierno." },
      { objective: "O3", q: "Una hoja de datos incluye:", options: ["Tu contraseña", "Solo opiniones", "Estadísticas de rivales", "Cada dato, su fuente y la fecha de revisión"], answer: 3, why: "Demuestra tus datos." },
      { objective: "O3", q: "Para consejos personales, tu campaña debe:", options: ["Enviar a la gente con profesionales", "Diagnosticar a la gente", "Dar dosis", "Ignorarlo"], answer: 0, why: "Tú enseñas conciencia; los profesionales aconsejan." },
      { objective: "O4", q: "La publicación 3 de la campaña es:", options: ["Una selfi cualquiera", "Pasa a la acción", "Una queja", "Un sorteo"], answer: 1, why: "La acción convierte el aprendizaje en cambio." },
      { objective: "O4", q: "Cuando pidas publicaciones a la IA, dile que:", options: ["Invente estadísticas", "Agregue historias alarmantes", "Use solo datos de tu hoja de datos", "Copie a otros atletas"], answer: 2, why: "Así los datos se mantienen correctos." },
      { objective: "O4", q: "El mejor tono para temas de seguridad es:", options: ["Esperanzador y práctico", "Alarmante", "Enojado", "Bromear sobre lesiones"], answer: 0, why: "La gente actúa con mensajes prácticos y esperanzadores." },
      { objective: "O5", q: "Una cooperativa de crédito es un buen aliado para:", options: ["Conciencia sobre conmociones", "Natación", "Lectura", "Manejo del dinero"], answer: 3, why: "Ya se preocupa por la educación financiera." },
      { objective: "O5", q: "Una propuesta debe incluir:", options: ["Solo un precio", "Tu causa, historia, objetivo, plan, público y un pedido claro", "Solo tus estadísticas", "Una exigencia"], answer: 1, why: "Los aliados necesitan ver el panorama completo." },
      { objective: "O5", q: "Antes de aceptar productos de un aliado, un estudiante atleta debe:", options: ["Publicar de inmediato", "Revisar las reglas de NIL de la escuela y el estado", "Ocultarlo", "Preguntarle a un rival"], answer: 1, why: "Las reglas de NIL cambian según el lugar." },
      { objective: "O5", q: "Si tienes menos de 18 años y haces una propuesta a un aliado:", options: ["Usa una edad falsa", "Ocúltalo", "No hagas la propuesta", "Involucra a tu padre, madre o tutor"], answer: 3, why: "Los adultos ayudan a proteger a los menores." },
      { objective: "O6", q: "¿Qué aviso es claro?", options: ["\"Colaboración pagada con [marca]\" cerca del inicio", "\"#sp\" al final", "Nada", "Solo en tu biografía"], answer: 0, why: "Claro y difícil de pasar por alto." },
      { objective: "O6", q: "En un video patrocinado, el aviso debe:", options: ["Ir solo en la descripción", "Ir en un comentario", "Decirse y mostrarse", "No ponerse"], answer: 2, why: "Los avisos de un video van dentro del video." },
      { objective: "O6", q: "Impacto significa:", options: ["Tu número de seguidores", "Solo los me gusta", "Cuánto dura el video", "El cambio real que logró tu campaña"], answer: 3, why: "El impacto es aprendizaje y acción." },
      { objective: "O6", q: "Después de la campaña, debes:", options: ["Borrar todo", "Compartir los resultados con tu aliado", "Esconder los números", "Pedir más pago sin resultados"], answer: 1, why: "Reportar resultados construye alianzas duraderas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      9,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Causa y objetivo de aprendizaje",
        objective: "O2",
        notYet: "No hay un objetivo claro, o la causa no encaja con el público.",
        meets: "Una causa con una conexión con la historia del deportista y un objetivo de aprendizaje que dice quién sabrá o hará qué.",
        exceeds: "El objetivo se puede medir y coincide con las formas de medir el impacto elegidas."
      },
      {
        name: "Hoja de datos",
        objective: "O3",
        notYet: "Hay datos sin fuente, o se dejaron datos que no se pudieron confirmar.",
        meets: "Cada dato tiene el enlace a una fuente oficial o experta y la fecha en que se revisó.",
        exceeds: "Un experto, como un preparador físico o un docente, revisó los datos."
      },
      {
        name: "Plan de tres publicaciones",
        objective: "O4",
        notYet: "Hay menos de tres publicaciones, o a las publicaciones les falta el gancho o la llamada a la acción.",
        meets: "Publicaciones de por qué, qué y acción, cada una con gancho, puntos principales y llamada a la acción, usando solo datos de la hoja de datos.",
        exceeds: "El tono es esperanzador y práctico, y cada publicación lleva a un profesional o a un recurso gratuito."
      },
      {
        name: "Propuesta al aliado",
        objective: "O5",
        notYet: "No hay un pedido claro, o el aliado no encaja con la causa.",
        meets: "Menos de 150 palabras a un aliado que encaja, con causa, historia, objetivo, plan, público y un pedido claro.",
        exceeds: "Está personalizada con una razón verdadera para elegir a ese aliado, y la madre o el padre participa cuando hace falta."
      },
      {
        name: "Aviso y reglas",
        objective: "O6",
        notYet: "No hay un plan de aviso, o no se revisaron las reglas de NIL.",
        meets: "Un aviso claro para cada publicación y la persona de la escuela o del estado que confirmó las reglas de NIL.",
        exceeds: "También nombra dos formas de medir el impacto y cómo se van a compartir los resultados con el aliado."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el plan de campaña y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que hacen su campaña de tres publicaciones en un plazo de 30 días (encuesta de seguimiento)",
      "Personas que hicieron la acción de la campaña, como inscribirse en una capacitación, o resultados de encuestas que muestran aprendizaje",
      "Alianzas creadas con una marca u organización sin fines de lucro, y aliados que aceptan una segunda campaña"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono con redes sociales",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Acceso a fuentes oficiales sobre tu causa, como las páginas CDC HEADS UP",
      "La política de NIL de tu escuela o las reglas de la asociación deportiva de tu estado",
      "Unos 60 minutos"
    ],
    facilitatorNotes: [
      "Ayuda a los participantes a elegir causas que puedan enseñar con seguridad; las campañas de salud y salud mental deben llevar a profesionales, no dar consejos personales.",
      "Pide a un experto local, como un preparador físico, un bibliotecario o un asesor financiero, que revise las hojas de datos.",
      "Incluye a los padres o tutores de los deportistas menores de 18 años antes de contactar a aliados.",
      "Envía las preguntas sobre NIL a la oficina de cumplimiento o a la asociación deportiva del estado antes de aceptar cualquier pago o producto.",
      "Revisa que cada publicación patrocinada tenga un aviso claro y ninguna afirmación que vaya más allá de la hoja de datos."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-leadership-future-skills.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-leadership-future-skills-es",
  lang: "es",
  translationOf: "underserved-leadership-future-skills",
  category: "Undeserved Community",
  name: "Liderazgo, confianza y habilidades para el futuro",
  skills: "Poner una meta clara, Resolver problemas paso a paso, Hablar con confianza, Dar y pedir comentarios, Dirigir un proyecto pequeño, Planear tu siguiente habilidad",
  outcome: "planear y dirigir un pequeño proyecto de la comunidad: poner una meta clara, resolver problemas paso a paso, dar una charla de un minuto para conseguir ayudantes y usar un asistente de IA gratuito como compañero de práctica en el camino.",
  about: [
    "No necesitas un cargo para ser líder. Si organizas a tu familia, ayudas a tus vecinos, diriges un comité de la iglesia o capacitas a los trabajadores nuevos de tu turno, ya eres líder.",
    "Este curso construye las habilidades que dan confianza a los líderes: poner metas claras, resolver problemas paso a paso, hablar en público, dar comentarios, dirigir un proyecto pequeño y elegir la siguiente habilidad que vas a aprender. Un asistente de IA gratuito es tu compañero de práctica: te hace preguntas, escucha tus charlas de práctica y te da comentarios.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Planea un pequeño proyecto de la comunidad que de verdad podrías hacer, como un intercambio de libros, una colecta de ropa o una limpieza del parque. Escribe una meta clara, haz una lista de dos problemas que podrían surgir y cómo los resolverías, y escribe una charla de un minuto para pedirles ayuda a tres personas. Practica la charla en voz alta con un asistente de IA, pide comentarios y mejórala una vez.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos y jóvenes adultos de comunidades desatendidas que ya dirigen sin tener un cargo: padres y madres, voluntarios de la iglesia y de clubes de vecinos, encargados de turno y personas que quieren empezar un proyecto en su comunidad.",
    startingPoint: "Organizan a su familia, sus amigos o sus compañeros de trabajo en la vida diaria, pero quizás no se ven como líderes. Muchos se ponen nerviosos al hablar frente a un grupo y no han planeado un proyecto con metas, tareas y fechas.",
    gap: "Los proyectos de la comunidad se atoran sin una meta clara, un plan para los problemas y gente dispuesta a ayudar. Necesitan hábitos sencillos de liderazgo y la confianza para hablar, y un asistente de IA gratuito puede ser un compañero paciente para practicar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca",
      "Costo: solo herramientas gratuitas y opciones gratuitas para aprender",
      "Privacidad: nada de datos privados sobre otras personas al describirle problemas a una IA",
      "Los proyectos deben ser pequeños y posibles con el tiempo y la ayuda que tiene cada persona"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un deseo para tu comunidad o una habilidad que quieres desarrollar", action: "escribir una meta clara con qué, cuánto y para cuándo, y elegir un primer paso", standard: "que de verdad puedas cumplir con el tiempo y la ayuda que tienes" },
    { id: "O2", condition: "Con un problema real en casa, en el trabajo o en un grupo", action: "resolverlo con cuatro pasos: nombrarlo, hacer una lista de opciones, elegir una y revisar cómo salió", standard: "pesando un punto bueno y un riesgo de al menos tres opciones" },
    { id: "O3", condition: "Con una meta en la que quieres que la gente ayude", action: "escribir y practicar una charla de un minuto con un llamado a la acción claro", standard: "practicada en voz alta y mejorada una vez con los comentarios de la IA" },
    { id: "O4", condition: "Después de trabajar con un ayudante, un compañero de trabajo o un familiar", action: "dar comentarios amables y útiles, y pedir comentarios tú mismo", standard: "con una cosa que salió bien, una cosa para probar la próxima vez y las gracias" },
    { id: "O5", condition: "Con un proyecto pequeño en la comunidad", action: "dividirlo en tareas con una persona y una fecha para cada una, y planear para dos problemas", standard: "con los ayudantes eligiendo sus tareas y una revisión cada semana" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Dirigirte a ti mismo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Poner una meta clara",
          minutes: 5,
          goal: "Convertir un deseo en una meta clara con un qué, un cuánto y un para cuándo.",
          text: [
            "Los líderes empiezan con una meta clara. \"Ayudar a que los niños de mi cuadra lean más\" es un deseo. \"Hacer un intercambio gratuito de libros en el centro comunitario el primer sábado del próximo mes y regalar 50 libros\" es una meta.",
            "Una meta clara dice qué vas a hacer, cuánto o cuántos, y para cuándo. Tiene que ser algo que de verdad puedas hacer con el tiempo y la ayuda que tienes.",
            "Un asistente de IA te puede ayudar a afinar una meta. Pide: \"Este es mi deseo: ... Ayúdame a convertirlo en una meta clara con qué, cuánto y para cuándo. Hazme preguntas primero.\""
          ],
          steps: ["Escribe un deseo para tu familia, tu trabajo o tu comunidad.", "Agrega qué vas a hacer, cuánto y para cuándo.", "Pide a la IA que te haga preguntas y te ayude a afinarlo.", "Revisa que sea algo que de verdad puedas hacer."],
          words: [["Meta", "algo concreto que planeas hacer para una fecha."], ["Fecha límite", "la fecha en que algo tiene que estar hecho."]],
          slides: [
            { title: "Deseo o meta", bullets: ["Deseo: \"Que los niños lean más\"", "Meta: \"Intercambio de libros, primer sábado del mes, 50 libros\""] },
            { title: "Una meta clara tiene", bullets: ["Qué vas a hacer", "Cuánto o cuántos", "Para cuándo"] },
            { title: "Usa la IA para afinarla", bullets: ["\"Hazme preguntas primero\"", "Asegúrate de que de verdad la puedes cumplir"] }
          ],
          tryIt: "Escribe un deseo para tu comunidad. Pide a un asistente de IA que te haga preguntas y te ayude a convertirlo en una meta clara con qué, cuánto y para cuándo.",
          youCanNow: "convertir un deseo en una meta clara que se puede cumplir.",
          quickCheck: [
            { objective: "O1", q: "¿Qué convierte un deseo en una meta clara?", options: ["Agregarle qué, cuánto y para cuándo", "Hacerlo más largo", "Agregarle los nombres de más personas", "Decirlo más fuerte"], answer: 0, why: "Una meta clara dice qué vas a hacer, cuánto y para cuándo." },
            { objective: "O1", q: "Tu meta es regalar 1,000 libros la próxima semana, tú solo. ¿Qué haces?", options: ["La dejas así; las metas grandes son las mejores", "La cambias por algo que de verdad puedas hacer con tu tiempo y tu ayuda", "Dejas la idea", "Le pides a la IA que lo haga por ti"], answer: 1, why: "Una buena meta es algo que de verdad puedes hacer con el tiempo y la ayuda que tienes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Resolver problemas paso a paso",
          minutes: 5,
          goal: "Usar cuatro pasos sencillos para resolver un problema real.",
          text: [
            "Todo plan se topa con problemas. Los líderes mantienen la calma y los resuelven por pasos: nombrar el problema, hacer una lista de algunas opciones, elegir una y luego revisar cómo salió.",
            "La IA es una buena compañera para pensar. Describe el problema sin datos privados y pide: \"Dame tres opciones para resolver esto, con un punto a favor y un riesgo para cada una.\" Por ejemplo: \"Solo dos personas se apuntaron para ayudar con nuestra colecta de ropa.\"",
            "Tú eliges. Conoces a tu gente y a tu comunidad mejor que cualquier IA. Después de probar una opción, mira hacia atrás: ¿funcionó? ¿Qué harías distinto?"
          ],
          steps: ["Nombra el problema en una frase.", "Pide a la IA tres opciones, cada una con un punto a favor y un riesgo.", "Elige la opción que le queda a tu gente y a tu situación.", "Pruébala y luego revisa cómo salió."],
          words: [["Opción", "una elección posible."], ["Riesgo", "algo que podría salir mal."]],
          slides: [
            { title: "Cuatro pasos", bullets: ["1. Nombra el problema", "2. Haz una lista de opciones", "3. Elige una", "4. Revisa cómo salió"] },
            { title: "La IA como compañera para pensar", bullets: ["\"Dame tres opciones\"", "\"Un punto a favor y un riesgo para cada una\""] },
            { title: "Tú eliges", bullets: ["Tú conoces mejor a tu gente", "Mira hacia atrás: ¿qué cambiarías?"] }
          ],
          tryIt: "Elige un problema real de tu casa, tu trabajo o tu grupo. Pide a un asistente de IA tres opciones con un punto a favor y un riesgo para cada una. Elige una y escribe por qué.",
          youCanNow: "resolver un problema en cuatro pasos con la IA como compañera para pensar.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es el último paso para resolver un problema paso a paso?", options: ["Nombrar el problema", "Hacer una lista de opciones", "Revisar cómo salió", "Echarle la culpa a alguien"], answer: 2, why: "Después de probar una opción, miras hacia atrás para ver si funcionó y qué cambiar." },
            { objective: "O2", q: "Solo dos personas se apuntaron a tu colecta de ropa. ¿Qué le preguntas a la IA?", options: ["\"Arréglalo.\"", "\"¿Quiénes son los flojos?\"", "\"Cancela la colecta.\"", "\"Dame tres opciones, cada una con un punto bueno y un riesgo.\""], answer: 3, why: "Pedir opciones con un punto bueno y un riesgo te ayuda a elegir bien." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hablar con confianza",
          minutes: 5,
          goal: "Planear y practicar una charla corta que le pida a la gente actuar.",
          text: [
            "La confianza crece con la práctica. Una charla corta es más fácil cuando tiene una forma sencilla: por qué importa, qué quieres hacer y qué le pides a la gente.",
            "Escribe una charla de un minuto (unas 120 a 150 palabras). Luego practícala en voz alta. Puedes escribirla en un asistente de IA y preguntar: \"¿Está clara y amable? Dame dos formas de hacerla más fuerte. Que dure menos de un minuto.\"",
            "Los nervios son normales. Respira despacio, mira a algunas caras amables y habla un poco más despacio de lo que crees que hace falta. También ayuda practicar frente a un espejo o a un amigo."
          ],
          steps: ["Escribe por qué importa, qué quieres hacer y qué pides.", "Que dure más o menos un minuto.", "Pide a una IA dos formas de hacerla más fuerte.", "Practícala en voz alta tres veces, despacio."],
          words: [["Llamado a la acción", "la parte de una charla que le dice a la gente exactamente qué quieres que haga."]],
          slides: [
            { title: "Una forma sencilla de charla", bullets: ["Por qué importa", "Qué quieres hacer", "Qué le pides a la gente"] },
            { title: "Practica con la IA", bullets: ["Más o menos un minuto, 120-150 palabras", "\"Dame dos formas de hacerla más fuerte\""] },
            { title: "Manejar los nervios", bullets: ["Respira despacio", "Busca caras amables", "Habla un poco más despacio"] }
          ],
          tryIt: "Escribe una charla de un minuto sobre la meta de la lección 1. Pide a un asistente de IA dos formas de hacerla más fuerte y luego practícala en voz alta tres veces.",
          youCanNow: "planear y practicar una charla corta con un llamado a la acción claro.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es la forma sencilla de una charla corta?", options: ["Por qué importa, qué quieres hacer y lo que pides", "Una historia larga, un chiste y una despedida", "Solo datos y números", "La historia de tu vida"], answer: 0, why: "Esta forma mantiene la charla corta y le dice a la gente qué hacer." },
            { objective: "O3", q: "Te tiemblan las manos antes de tu charla. ¿Qué ayuda?", options: ["No dar la charla", "Respirar despacio y hablar un poco más lento", "Hablar lo más rápido que puedas", "Leer sin levantar la vista"], answer: 1, why: "Respirar despacio y hablar más lento ayuda a calmar los nervios." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Dirigirte a ti mismo",
        questions: [
          { objective: "O1", q: "¿Cuál es una meta clara?", options: ["\"Ayudar más a la gente\"", "\"Ser mejor vecino\"", "\"Hacer un intercambio de libros el primer sábado del próximo mes y regalar 50 libros\"", "\"Hacer cosas buenas\""], answer: 2, why: "Dice qué, cuántos y para cuándo." },
          { objective: "O1", q: "¿Qué tres partes tiene una meta clara?", options: ["Qué, cuánto y para cuándo", "Quién, por qué y dónde", "Un título, un logotipo y un lema", "Un presupuesto, un banco y un préstamo"], answer: 0, why: "Esas partes hacen que una meta sea clara y se pueda revisar." },
          { objective: "O2", q: "¿Cuál es el primer paso para resolver un problema?", options: ["Elegir cualquier opción", "Culpar a alguien", "Rendirse", "Nombrar el problema en una frase"], answer: 3, why: "No puedes resolver un problema al que no le has puesto nombre." },
          { objective: "O2", q: "La IA sugiere tres opciones. ¿Quién elige?", options: ["La IA", "Tú, porque conoces a tu gente y a tu comunidad", "Nadie", "La primera persona que responda"], answer: 1, why: "La IA es compañera para pensar; tú decides." },
          { objective: "O3", q: "¿Qué es un llamado a la acción?", options: ["Una llamada telefónica", "Un número de emergencia", "La parte de una charla que dice qué quieres que haga la gente", "Un tono de llamada"], answer: 2, why: "Convierte a quienes escuchan en ayudantes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dirigir a otros y crecer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dar y pedir comentarios",
          minutes: 5,
          goal: "Dar comentarios amables y útiles, y pedirlos.",
          text: [
            "Los comentarios son información que ayuda a alguien a hacerlo mejor. Los buenos líderes los dan con amabilidad y los piden seguido.",
            "Una forma sencilla de dar comentarios: di una cosa que salió bien, una cosa para probar la próxima vez y da las gracias. Por ejemplo: \"Pusiste las mesas muy rápido. La próxima vez pongamos la hoja de registro junto a la puerta. Gracias por llegar temprano.\"",
            "Pide comentarios también: \"¿Qué es una cosa que podría hacer mejor en nuestra próxima reunión?\" Puedes practicar con una IA: describe una situación y pídele que te ayude a decir los comentarios de forma amable y clara."
          ],
          steps: ["Di una cosa que salió bien.", "Di una cosa para probar la próxima vez.", "Dale las gracias a la persona.", "Pregunta a otros: \"¿Qué es una cosa que podría hacer mejor?\""],
          words: [["Comentarios", "información que ayuda a alguien a ver qué salió bien y qué puede mejorar."]],
          slides: [
            { title: "Los comentarios ayudan a crecer", bullets: ["Dalos con amabilidad", "Pídelos seguido"] },
            { title: "Una forma sencilla", bullets: ["Una cosa que salió bien", "Una cosa para probar la próxima vez", "Gracias"] },
            { title: "Pídelos", bullets: ["\"¿Qué es una cosa que podría hacer mejor?\"", "Escucha sin discutir"] }
          ],
          tryIt: "Piensa en un ayudante, un compañero de trabajo o un familiar. Pide a un asistente de IA que te ayude a decir comentarios amables con una cosa que salió bien y una cosa para probar la próxima vez. Dilo en voz alta.",
          youCanNow: "dar comentarios amables y útiles, y pedirlos.",
          quickCheck: [
            { objective: "O4", q: "En este curso, ¿cuál es la última parte de la forma de dar comentarios?", options: ["Una advertencia", "Una lista de errores", "Las gracias", "Una calificación"], answer: 2, why: "Los comentarios amables terminan dándole las gracias a la persona." },
            { objective: "O4", q: "Quieres mejorar en dirigir reuniones. ¿Qué le preguntas a tu grupo?", options: ["\"¿Estuve perfecto?\"", "Nada; los líderes no preguntan", "\"¿Quién se quejó?\"", "\"¿Qué es una cosa que podría hacer mejor en nuestra próxima reunión?\""], answer: 3, why: "Los buenos líderes piden comentarios seguido, con una pregunta clara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Dirigir un proyecto pequeño",
          minutes: 5,
          goal: "Dividir un proyecto en tareas, darle a cada una una persona y una fecha, y planear para los problemas.",
          text: [
            "Un proyecto es una meta con un inicio y un final. Para dirigirlo, divídelo en tareas pequeñas, dale a cada tarea una persona y una fecha, y da seguimiento.",
            "Pide a la IA: \"Voy a organizar una colecta de ropa en nuestra iglesia dentro de cuatro semanas. Divídela en tareas con una semana sugerida para cada una. Haz una lista de dos problemas que podrían surgir y cómo manejarlos.\"",
            "Comparte la lista de tareas con tus ayudantes. Deja que la gente elija las tareas que le gustan. Da seguimiento cada semana, da las gracias seguido y celebren cuando terminen."
          ],
          steps: ["Escribe la meta de tu proyecto.", "Pide a la IA que lo divida en tareas con fechas y que haga una lista de posibles problemas.", "Dale a cada tarea una persona; deja que la gente elija.", "Da seguimiento cada semana y celebren al final."],
          words: [["Proyecto", "un trabajo con una meta, un inicio y un final."], ["Tarea", "un trabajo pequeño que es parte de un proyecto."]],
          slides: [
            { title: "Un proyecto tiene inicio y final", bullets: ["Divídelo en tareas", "Cada tarea: una persona y una fecha"] },
            { title: "Pide a la IA que ayude a planear", bullets: ["Tareas con semanas sugeridas", "Dos problemas y cómo manejarlos"] },
            { title: "Dirige al equipo", bullets: ["Deja que la gente elija tareas", "Da seguimiento cada semana", "Da las gracias y celebren"] }
          ],
          tryIt: "Usa tu meta de la lección 1. Pide a un asistente de IA que la divida en tareas con fechas y que haga una lista de dos problemas que podrían surgir, con un plan para cada uno.",
          youCanNow: "planear un proyecto pequeño con tareas, personas, fechas y planes de respaldo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debe tener cada tarea de un proyecto?", options: ["Una persona y una fecha", "Un presupuesto de $100", "Una descripción larga", "Una IA que la haga"], answer: 0, why: "Una persona y una fecha dejan claro quién hace qué y para cuándo." },
            { objective: "O5", q: "Un ayudante no ha hecho su tarea y ya pasó la fecha. ¿Qué haces primero?", options: ["Lo sacas del grupo", "Le preguntas con amabilidad cómo va y qué ayuda necesita", "La haces tú sin decirle", "Lo publicas en internet"], answer: 1, why: "Los líderes preguntan cómo van y apoyan a los ayudantes para que sigan participando." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Planear tu siguiente habilidad",
          minutes: 5,
          goal: "Elegir una habilidad para el futuro y un primer paso para empezarla.",
          text: [
            "El mundo del trabajo sigue cambiando. Las habilidades que ayudan a casi todos incluyen usar herramientas digitales, usar la IA bien y con seguridad, comunicarse con claridad, trabajar en equipo y resolver problemas.",
            "Pregunta a una IA: \"Esto es lo que hago ahora y lo que me gusta. Sugiere tres habilidades que me ayudarían a crecer y una forma gratuita de empezar cada una.\" Luego revisa tú las opciones gratuitas, por ejemplo en tu biblioteca pública o en un American Job Center (centro público de empleo de Estados Unidos).",
            "Elige una habilidad y un primer paso que puedas dar esta semana. Los líderes siguen aprendiendo y llevan a otros con ellos."
          ],
          steps: ["Dile a la IA lo que haces ahora y lo que te gusta.", "Pide tres habilidades para crecer y una forma gratuita de empezar cada una.", "Revisa tú las opciones gratuitas.", "Elige una habilidad y un primer paso para esta semana."],
          words: [["Habilidad para el futuro", "una habilidad que va a importar más a medida que cambian el trabajo y la tecnología."]],
          slides: [
            { title: "Habilidades que ayudan a casi todos", bullets: ["Herramientas digitales e IA, usadas con seguridad", "Comunicación clara y trabajo en equipo", "Resolver problemas"] },
            { title: "Pide ideas a la IA", bullets: ["Cuenta lo que haces y lo que te gusta", "Tres habilidades y una forma gratis de empezar cada una"] },
            { title: "Da un primer paso", bullets: ["Revisa opciones gratis: biblioteca, centro de empleo", "Una habilidad, un paso esta semana"] }
          ],
          tryIt: "Tarea final: planea un pequeño proyecto de la comunidad con una meta clara, dos problemas posibles y cómo los resolverías, y una charla de un minuto para pedirles ayuda a tres personas. Practica la charla con un asistente de IA, recibe comentarios y mejórala una vez.",
          youCanNow: "dirigir un proyecto pequeño con confianza y seguir haciendo crecer tus habilidades.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una habilidad para el futuro que le sirve a casi todos?", options: ["Memorizar números de teléfono", "Usar una máquina de fax", "Comunicarse con claridad", "Escribir en letra cursiva"], answer: 2, why: "Comunicarse con claridad ayuda en casi cualquier trabajo y papel en la comunidad." },
            { objective: "O1", q: "La IA te sugiere una clase gratuita en línea para tu siguiente habilidad. ¿Qué haces?", options: ["Te inscribes y pagas de inmediato", "No le haces caso", "Das tu número de banco para inscribirte", "La revisas tú mismo, por ejemplo con tu biblioteca o tu centro de empleo"], answer: 3, why: "Revisas tú mismo las opciones gratuitas antes de inscribirte." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Dirigir a otros y crecer",
        questions: [
          { objective: "O4", q: "¿Cuáles son comentarios amables y útiles?", options: ["\"Eso estuvo mal.\"", "\"Pusiste todo rápido. La próxima vez pon la hoja de registro junto a la puerta. Gracias.\"", "No decir nada", "\"Todos los demás lo hicieron mejor.\""], answer: 1, why: "Nombra algo bueno, un siguiente paso y da las gracias." },
          { objective: "O4", q: "Alguien te da comentarios. La mejor respuesta es:", options: ["Discutir", "Ignorarlos", "Enojarte", "Escuchar y dar las gracias"], answer: 3, why: "Escuchar te ayuda a crecer." },
          { objective: "O5", q: "¿Qué es una tarea?", options: ["Un trabajo pequeño que es parte de un proyecto", "Un proyecto completo", "Una reunión", "Una meta"], answer: 0, why: "Los proyectos están hechos de tareas." },
          { objective: "O5", q: "¿Cómo debes repartir las tareas de un proyecto?", options: ["Hacerlas todas tú", "Dárselas a una sola persona", "Dejar que la gente elija las que le gustan, cada una con fecha", "No asignarlas nunca"], answer: 2, why: "Poder elegir y tener fechas claras mantiene a los ayudantes participando." },
          { objective: "O1", q: "La IA sugiere una clase gratuita para aprender una habilidad. Antes de inscribirte tú:", options: ["Pagas una cuota primero", "La revisas tú, por ejemplo con tu biblioteca o tu centro de empleo", "Das tu número de banco", "Confías por completo"], answer: 1, why: "La IA puede mencionar programas que cambiaron; revísalos tú." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Liderazgo, confianza y habilidades para el futuro",
    questions: [
      { objective: "O1", q: "¿Quién puede ser líder?", options: ["Solo los gerentes", "Solo quien tiene un cargo", "Cualquiera que organiza y ayuda a otros", "Solo los funcionarios electos"], answer: 2, why: "El liderazgo es lo que haces, no tu cargo." },
      { objective: "O1", q: "\"Que los niños lean más\" es:", options: ["Un deseo, todavía no una meta clara", "Una meta clara", "Una fecha límite", "Una tarea"], answer: 0, why: "No tiene cuánto ni para cuándo." },
      { objective: "O1", q: "Una fecha límite es:", options: ["Una meta", "Una reunión", "Un tipo de charla", "La fecha en que algo tiene que estar hecho"], answer: 3, why: "Las fechas límite dicen para cuándo." },
      { objective: "O1", q: "Una buena instrucción para afinar tu meta es:", options: ["\"Escribe mi meta sin preguntarme nada.\"", "\"Hazme preguntas primero y luego ayúdame a agregar qué, cuánto y para cuándo.\"", "\"Meta.\"", "\"Hazla imposible.\""], answer: 1, why: "Las preguntas ayudan a la IA a entender tu situación real." },
      { objective: "O2", q: "Los cuatro pasos para resolver problemas son:", options: ["Nombrarlo, hacer una lista de opciones, elegir una, revisar cómo salió", "Asustarse, culpar, rendirse, olvidar", "Preguntar a la IA, copiar, enviar, listo", "Esperar, esperar, esperar, tener esperanza"], answer: 0, why: "Estos pasos te mantienen tranquilo y claro." },
      { objective: "O2", q: "Al pedirle opciones a la IA, pide también:", options: ["Tu contraseña", "Un punto a favor y un riesgo para cada una", "Solo una opción", "Una garantía"], answer: 1, why: "Ver el riesgo te ayuda a elegir bien." },
      { objective: "O2", q: "Al describirle un problema a la IA, dejas fuera:", options: ["El problema", "La meta", "Los datos privados de las personas", "La fecha límite"], answer: 2, why: "Los datos privados de otros se quedan fuera de la IA." },
      { objective: "O2", q: "Después de probar una solución, debes:", options: ["No volver a pensar en eso", "Culpar a la IA", "Hacer lo mismo siempre", "Mirar hacia atrás: ¿funcionó y qué cambiarías?"], answer: 3, why: "Mirar hacia atrás te ayuda a mejorar." },
      { objective: "O3", q: "Una charla corta debe tener:", options: ["Por qué importa, qué quieres hacer y lo que pides", "Solo chistes", "Veinte minutos de datos", "Ninguna petición"], answer: 0, why: "Esa forma mueve a la gente a actuar." },
      { objective: "O3", q: "Una charla de un minuto tiene más o menos:", options: ["10 palabras", "120 a 150 palabras", "1,000 palabras", "5 páginas"], answer: 1, why: "La gente dice unas 120 a 150 palabras por minuto." },
      { objective: "O3", q: "Para calmar los nervios antes de hablar:", options: ["Habla muy rápido", "Mira al piso", "Respira despacio y habla un poco más despacio", "No practiques"], answer: 2, why: "Respirar y hablar despacio ayuda a la confianza." },
      { objective: "O3", q: "¿Cómo puede ayudar la IA con tu charla?", options: ["Da la charla por ti", "La hace más larga", "Quita lo que pides", "Sugiere formas de hacerla más clara y fuerte"], answer: 3, why: "La IA puede dar comentarios sobre tu borrador." },
      { objective: "O4", q: "Los comentarios son:", options: ["Información que ayuda a alguien a hacerlo mejor", "Un castigo", "Un tipo de comida", "Una queja"], answer: 0, why: "Los comentarios sirven para crecer." },
      { objective: "O4", q: "Una buena forma de dar comentarios es:", options: ["Solo críticas", "Una cosa que salió bien, una cosa para probar la próxima vez y gracias", "Silencio", "Una lista larga de errores"], answer: 1, why: "Los comentarios equilibrados se escuchan mejor." },
      { objective: "O4", q: "Los buenos líderes piden comentarios:", options: ["Nunca", "Solo una vez al año", "Seguido", "Solo a la IA"], answer: 2, why: "Pedirlos seguido ayuda a los líderes a crecer." },
      { objective: "O5", q: "Un proyecto es:", options: ["Un deseo de una palabra", "Una sola llamada", "Un sentimiento", "Una meta con un inicio y un final"], answer: 3, why: "Los proyectos tienen un inicio y un final claros." },
      { objective: "O5", q: "Cuando la IA divide tu proyecto en tareas, pídele también:", options: ["Una lista de posibles problemas y cómo manejarlos", "Que haga cada tarea", "Que elija a tus ayudantes", "Que lo cancele"], answer: 0, why: "Planear para los problemas hace más fuerte el proyecto." },
      { objective: "O5", q: "¿Qué mantiene a los ayudantes participando en un proyecto?", options: ["No darles nunca las gracias", "Dejarlos elegir tareas, dar seguimiento y darles las gracias", "Hacerlo todo tú", "Cambiar las fechas sin avisar"], answer: 1, why: "La gente se queda cuando se siente valorada." },
      { objective: "O1", q: "¿Cuál es una habilidad para el futuro que ayuda a casi todos?", options: ["Ignorar los cambios", "Evitar el trabajo en equipo", "Usar herramientas digitales e IA con seguridad", "No aprender nunca"], answer: 2, why: "Las habilidades digitales y de IA ayudan en muchos trabajos." },
      { objective: "O3", q: "En la tarea final, después de practicar tu charla con la IA, tú:", options: ["Te detienes ahí", "La haces más larga", "Se la mandas a desconocidos", "Recibes comentarios y la mejoras una vez"], answer: 3, why: "Mejorar después de los comentarios completa la habilidad." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      8,
      10,
      13,
      16,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Meta clara",
        objective: "O1",
        notYet: "Un deseo sin cuánto ni para cuándo.",
        meets: "Una meta con qué, cuánto y para cuándo que la persona de verdad puede cumplir.",
        exceeds: "La afinó con las preguntas de la IA e incluye un primer paso."
      },
      {
        name: "Problemas y soluciones",
        objective: "O2",
        notYet: "Menos de dos problemas, o no hay plan para ellos.",
        meets: "Dos problemas posibles, cada uno con una solución elegida.",
        exceeds: "Cada solución muestra un punto bueno y un riesgo que se pesaron."
      },
      {
        name: "Charla de un minuto",
        objective: "O3",
        notYet: "No hay charla, o no pide nada claro.",
        meets: "Más o menos un minuto con por qué importa, qué vas a hacer y un llamado a la acción que pide ayuda a tres personas.",
        exceeds: "La practicó en voz alta y la mejoró una vez con los comentarios de la IA."
      },
      {
        name: "Plan del proyecto",
        objective: "O5",
        notYet: "No hay tareas ni fechas.",
        meets: "Tareas con una persona y una fecha para cada una.",
        exceeds: "Incluye revisiones cada semana y cómo se les dará las gracias a los ayudantes."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que llevan a cabo su proyecto en la comunidad dentro de 60 días (encuesta de seguimiento)",
      "Personas que consiguen al menos tres ayudantes para un proyecto",
      "Personas que empiezan la siguiente habilidad que eligieron, como otro curso de Koach Learn, dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Papel y lápiz para la meta, el plan del proyecto y la charla",
      "Un lugar tranquilo para practicar la charla en voz alta",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Empieza preguntando cómo dirigen ya en casa, en el trabajo o en la iglesia.",
      "Pide que den su charla de un minuto a un compañero además de a la IA, y que usen la forma de dar comentarios.",
      "Mantén los proyectos pequeños; ayuda a achicar una meta si es demasiado grande para el tiempo y la ayuda que tienen.",
      "Recuerda que deben dejar fuera de los prompts los datos privados de otras personas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

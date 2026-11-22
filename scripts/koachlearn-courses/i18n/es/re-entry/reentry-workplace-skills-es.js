"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-workplace-skills.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-workplace-skills-es",
  lang: "es",
  translationOf: "reentry-workplace-skills",
  category: "Re-Entry",
  name: "Habilidades y productividad en el trabajo",
  skills: "Correos y mensajes profesionales, Hablar con un supervisor, Planear y ordenar por prioridad un día de trabajo, Usar documentos y horarios compartidos, Manejar comentarios y problemas, Seguir las reglas de IA del trabajo",
  outcome: "escribir con ayuda de la IA un mensaje claro y profesional para un supervisor, planear y ordenar por prioridad un día de trabajo con una lista de pendientes, y seguir las reglas de tu trabajo sobre el uso de la IA y la privacidad de la información.",
  about: [
    "Este curso es para personas que regresan a casa y están empezando un trabajo o preparándose para uno. Hoy los trabajos funcionan con correo electrónico, mensajes de texto, horarios compartidos y documentos en la computadora, y muchos usan IA. Estas habilidades te ayudan a conservar el trabajo y a crecer en él.",
    "Vas a practicar mensajes profesionales, hablar con un supervisor, planear tu turno, usar documentos y horarios compartidos, manejar comentarios sobre tu trabajo y usar la IA en el trabajo de la forma correcta.",
    "Cada lección dura unos cinco minutos. Los ejemplos vienen de trabajos reales de nivel inicial: almacén, cocina, tiendas, limpieza, construcción y oficina. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Usa un asistente de IA para escribir un correo o un mensaje de texto corto y profesional a un supervisor pidiendo cambiar un turno, con una razón y la oferta de ayudar a encontrar quien te cubra. Haz que suene a ti y revisa que no tenga datos privados. Luego haz una lista de pendientes ordenada por prioridad para un día de trabajo real o de práctica.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas adultas que regresan a casa después de estar en prisión (reinserción) y que están empezando un trabajo o preparándose para uno, muchas veces en puestos de entrada en almacenes, cocinas, tiendas, limpieza, construcción u oficinas.",
    startingPoint: "Saben mandar mensajes de texto y hacer llamadas. Tienen poca experiencia con el correo del trabajo, los horarios compartidos, los documentos compartidos o el uso de la IA en el trabajo. Algunas no se sienten seguras al hablar con un supervisor o al recibir comentarios.",
    gap: "Hoy los trabajos funcionan con mensajes, horarios y documentos compartidos, y muchos usan IA. Estas personas necesitan comunicarse de forma profesional, planear su turno, manejar los comentarios y seguir las reglas de IA y privacidad para conservar el trabajo y crecer en él.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Dispositivos: un teléfono inteligente y, a veces, una computadora de la biblioteca o del trabajo",
      "Tiempo: lecciones de unos 5 minutos que caben entre el trabajo y las citas",
      "Reglas del trabajo: cada empleador fija sus propias políticas de IA y privacidad",
      "Privacidad: ningún dato privado de clientes, de la empresa o personal en ninguna herramienta de IA"
    ],
    prerequisites: "\"Introducción a la IA y a la confianza digital\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante una situación real de trabajo", action: "escribir con ayuda de la IA un correo o mensaje de texto corto, claro y profesional", standard: "con la idea principal en la primera línea, un cierre amable y tu propia voz" },
    { id: "O2", condition: "Con un tema que debes tratar con un supervisor", action: "preparar y practicar una conversación corta y respetuosa", standard: "con tu idea escrita en una oración y practicada al menos una vez" },
    { id: "O3", condition: "Ante comentarios o un problema en el trabajo", action: "responder con calma y reportar el problema a la persona correcta", standard: "diciendo qué pasó, cuándo y qué hiciste" },
    { id: "O4", condition: "Con una lista de tareas para un día de trabajo", action: "hacer una lista de pendientes ordenada en obligatorio, conveniente y opcional", standard: "con las tareas que vencen hoy arriba de todo" },
    { id: "O5", condition: "Con un enlace a un horario o documento compartido", action: "abrirlo, encontrar tu parte y agregarle información", standard: "sin cambiar las partes que no son tuyas" },
    { id: "O6", condition: "Con la política de IA de tu trabajo", action: "elegir para qué tareas del trabajo puedes usar la IA y qué información debes dejar fuera", standard: "sin poner nunca información privada de clientes o de la empresa en una herramienta de IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comunicarte en el trabajo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escribir mensajes profesionales",
          minutes: 5,
          goal: "Escribir un correo o un mensaje de texto corto, claro y profesional a alguien del trabajo.",
          text: [
            "En el trabajo, cómo escribes importa. Un mensaje profesional es corto, amable y claro: dice lo que necesitas en la primera línea, da una razón si hace falta y termina con un agradecimiento.",
            "Un patrón sencillo: saludo, el punto, uno o dos detalles, lo que pides, gracias y tu nombre. Por ejemplo: \"Hola, María: quisiera cambiar mi turno del sábado al domingo esta semana por un evento familiar. Puedo ayudar a encontrar a alguien que me cubra. Gracias, Andrés.\"",
            "Un asistente de IA te puede ayudar: \"Haz este mensaje para mi supervisora más profesional pero que siga siendo amable.\" Luego léelo, haz que suene a ti y revisa cómo se escriben los nombres. En el trabajo evita el lenguaje de chat, escribir todo en mayúsculas y usar demasiados emojis."
          ],
          steps: ["Empieza con un saludo y el nombre de la persona.", "Di tu punto en la primera línea.", "Agrega uno o dos detalles.", "Di lo que pides.", "Termina con gracias y tu nombre."],
          words: [["Profesional", "la forma respetuosa y clara en que la gente se comunica en el trabajo."], ["Supervisor", "la persona que dirige tu trabajo y tu horario."]],
          slides: [
            { title: "Corto, amable y claro", bullets: ["Primero el punto", "Una razón si hace falta", "Termina con gracias"] },
            { title: "Un patrón sencillo", bullets: ["Saludo, punto, detalles", "Lo que pides", "Gracias y tu nombre"] },
            { title: "La IA puede pulirlo", bullets: ["\"Hazlo más profesional pero amable.\"", "Haz que suene a ti", "Nada de lenguaje de chat, mayúsculas o muchos emojis"] }
          ],
          tryIt: "Escribe un borrador de mensaje a un supervisor con una pregunta sobre tu horario. Pídele a un asistente de IA que lo haga más profesional pero amable, y luego haz un cambio para que suene a ti.",
          youCanNow: "escribir un mensaje corto y profesional a alguien del trabajo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué debe hacer la primera línea de un mensaje de trabajo?", options: ["Decir la idea principal", "Contar una historia larga", "Pedir perdón muchas veces", "Hacer una lista de tus trabajos anteriores"], answer: 0, why: "Poner la idea principal primero hace que un mensaje de trabajo se lea rápido." },
            { objective: "O1", q: "La IA hizo tu mensaje para un supervisor muy formal y largo. ¿Qué harías?", options: ["Mandarlo así", "Pedirle a la IA que lo haga más largo", "Acortarlo y cambiar palabras para que suene a ti", "Mandarlo sin tu nombre"], answer: 2, why: "Un buen mensaje de trabajo es corto, amable y con tu propia voz." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hablar con tu supervisor",
          minutes: 5,
          goal: "Prepararte para tener una conversación corta y respetuosa con un supervisor, y tenerla.",
          text: [
            "Algunas cosas es mejor decirlas en persona: pedir ayuda, explicar un error o preguntar por más horas. Prepararte un poco lo hace más fácil.",
            "Antes de hablar, escribe tu punto en una oración y lo que esperas que pase. Elige un momento tranquilo y pregunta: \"¿Tienes dos minutos?\" Habla con claridad, escucha con atención y repite lo que oíste: \"Entonces quieres que termine las devoluciones antes de reponer. Entendido.\"",
            "Puedes practicar con la IA: \"Haz de cuenta que eres mi supervisor en un almacén. Quiero pedirte más horas. Hazme preguntas y luego dime cómo lo hice.\""
          ],
          steps: ["Escribe tu punto en una oración.", "Elige un momento tranquilo y pregunta si tiene un minuto.", "Habla con claridad y escucha con atención.", "Repite lo que oíste.", "Si quieres, practica antes con la IA."],
          words: [["Repetir lo que oíste", "decir con tus propias palabras lo que alguien te dijo, para asegurarte de que entendiste."], ["Juego de roles", "practicar una conversación actuándola."]],
          slides: [
            { title: "Algunas cosas se dicen en persona", bullets: ["Pedir ayuda", "Explicar un error", "Pedir más horas"] },
            { title: "Cómo hacerlo", bullets: ["El punto en una oración", "Elige un momento tranquilo", "Escucha y luego repite lo que oíste"] },
            { title: "Practica con la IA", bullets: ["\"Haz de cuenta que eres mi supervisor.\"", "Pídele que te diga cómo lo hiciste"] }
          ],
          tryIt: "Pídele a un asistente de IA que haga el papel de tu supervisor mientras le pides más horas. Ten la conversación y luego pídele dos consejos para hacerlo mejor.",
          youCanNow: "prepararte y tener una conversación respetuosa con un supervisor.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué escribir tu idea en una oración antes de hablar con un supervisor?", options: ["Para leérsela palabra por palabra", "Para saber exactamente qué quieres decir", "Para mandarla en lugar de hablar", "Para saltarte la conversación"], answer: 1, why: "Una oración clara te ayuda a no salirte del tema en la conversación." },
            { objective: "O2", q: "Tu supervisor se ve ocupado y estresado. ¿Qué harías?", options: ["Empezar a hablar de inmediato", "Mandarle un mensaje enojado", "Pedirle a un compañero que hable por ti", "Esperar un momento tranquilo y preguntarle si tiene un minuto"], answer: 3, why: "Esperar un momento tranquilo y preguntar primero muestra respeto y da mejores resultados." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Manejar comentarios y problemas",
          minutes: 5,
          goal: "Responder con calma a los comentarios sobre tu trabajo y reportar un problema de la forma correcta.",
          text: [
            "Los comentarios sobre tu trabajo son información sobre cómo lo estás haciendo. Aunque a veces cueste escucharlos, así es como la gente mejora y gana confianza para más responsabilidades. Escucha, da las gracias, pregunta si algo no está claro y muestra que estás trabajando en ello.",
            "Los problemas pasan: vas a llegar tarde, cometiste un error, se descompuso una máquina, un compañero está causando problemas. Repórtalo pronto, a la persona correcta y con hechos: qué pasó, cuándo y qué hiciste. \"Se me cayó una caja de frascos de vidrio en el pasillo 4 a las 2 pm. Bloqueé el área y traje la escoba. ¿A quién le aviso para el inventario?\"",
            "Si sientes enojo, respira antes de responder. Puedes decir: \"Déjame pensarlo y te respondo.\" Usa la IA para planear una respuesta tranquila, no para enviar una con enojo."
          ],
          steps: ["Escucha sin discutir.", "Da las gracias y pregunta si hace falta.", "Reporta los problemas pronto y con hechos.", "Respira si sientes enojo.", "Cumple con lo que dijiste que ibas a hacer."],
          words: [["Comentarios sobre tu trabajo", "información sobre cómo lo estás haciendo, para ayudarte a mejorar."], ["Reportar", "decirle a la persona correcta lo que pasó."]],
          slides: [
            { title: "Los comentarios te ayudan a crecer", bullets: ["Escucha, da las gracias", "Pregunta si algo no está claro", "Muestra que estás trabajando en ello"] },
            { title: "Reporta los problemas pronto", bullets: ["A la persona correcta", "Qué pasó, cuándo, qué hiciste"] },
            { title: "Mantén la calma", bullets: ["Respira", "\"Déjame pensarlo y te respondo.\"", "Usa la IA para planear una respuesta tranquila"] }
          ],
          tryIt: "Pregúntale a un asistente de IA: \"Mi supervisor me dijo que tengo que trabajar más rápido en la línea. Ayúdame a planear una respuesta tranquila y positiva y dos formas de mejorar.\" Escribe la respuesta que usarías.",
          youCanNow: "responder con calma a los comentarios sobre tu trabajo y reportar un problema con claridad.",
          quickCheck: [
            { objective: "O3", q: "¿Qué son los comentarios en el trabajo?", options: ["Un castigo", "Información sobre cómo vas", "Un aumento de sueldo", "Solo una queja de un cliente"], answer: 1, why: "Los comentarios son información sobre cómo vas, para que puedas mejorar." },
            { objective: "O3", q: "Se te cayó una caja y se rompió lo que tenía adentro. ¿Qué harías?", options: ["Esconderla y esperar que nadie la encuentre", "Echarle la culpa a un compañero", "Reportarlo pronto a la persona correcta, con los hechos", "Esperar hasta el final de la semana"], answer: 2, why: "Reportar pronto y con los hechos muestra honestidad y ayuda a resolver el problema." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Comunicarte en el trabajo",
        questions: [
          { objective: "O1", q: "¿Dónde debe ir el punto principal de un mensaje de trabajo?", options: ["En ningún lado", "Al final de todo", "En la primera línea", "En otro mensaje"], answer: 2, why: "Los supervisores ocupados leen primero la primera línea." },
          { objective: "O1", q: "¿Cuál es el más profesional?", options: ["\"Hola, María: ¿puedo cambiar el sábado por el domingo esta semana? Puedo ayudar a buscar quien me cubra. Gracias, Andrés\"", "\"oye no puedo el sab\"", "\"NO VOY A IR EL SÁBADO\"", "\"??\""], answer: 0, why: "Es amable, claro y ofrece ayuda." },
          { objective: "O2", q: "¿Qué significa \"repetir lo que oíste\"?", options: ["Irte", "Decirlo más fuerte", "Discutir", "Decir con tus propias palabras lo que oíste"], answer: 3, why: "Muestra que entendiste." },
          { objective: "O3", q: "Tu supervisor te da un comentario difícil. Una buena primera respuesta es:", options: ["Discutir de inmediato", "Escuchar y dar las gracias", "Renunciar", "Ignorarlo"], answer: 1, why: "Escuchar muestra que puedes crecer." },
          { objective: "O3", q: "Rompiste algo en el trabajo. ¿Qué haces?", options: ["Esconderlo", "Reportarlo pronto a la persona correcta con los hechos", "Culpar a un compañero", "Esperar a que alguien lo note"], answer: 1, why: "Los reportes honestos y a tiempo generan confianza." }
        ]
      }
    },
    {
      name: "Capítulo 2: Sacar el trabajo adelante",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planear tu día de trabajo y ordenar por prioridad",
          minutes: 5,
          goal: "Hacer una lista de pendientes y poner primero las tareas más importantes.",
          text: [
            "Una lista de pendientes evita que olvides tareas y te ayuda a hacer primero las más importantes. A eso se le llama ordenar por prioridad.",
            "Escribe todas las tareas. Luego marca cada una: Hay que hacerla hoy (fechas límite, seguridad, lo que pidió tu supervisor), Conviene hacerla, y Se puede hacer si hay tiempo. Empieza por las que hay que hacer hoy. Si no sabes qué es lo más importante, pregúntale a tu supervisor; es una pregunta inteligente, no una debilidad.",
            "La IA puede ayudarte a ordenar una lista: \"Estas son mis tareas para mi turno en un supermercado. Ordénalas por importancia y explica por qué.\" Compara su orden con lo que dijo tu supervisor."
          ],
          steps: ["Escribe todas las tareas.", "Marca cada una: hay que, conviene o se puede.", "Haz primero las que hay que hacer.", "Pregúntale a tu supervisor si tienes dudas.", "Marca las tareas a medida que las terminas."],
          words: [["Ordenar por prioridad", "decidir qué tareas son más importantes y hacerlas primero."], ["Fecha límite", "el momento en que algo tiene que estar hecho."]],
          slides: [
            { title: "Una lista de pendientes ayuda", bullets: ["No se te olvida nada", "Lo importante primero"] },
            { title: "Hay que, conviene, se puede", bullets: ["Hay que: fechas límite, seguridad, lo que pidió el supervisor", "Conviene: importante, menos urgente", "Se puede: si hay tiempo"] },
            { title: "La IA puede ordenarla", bullets: ["\"Ordena mis tareas por importancia.\"", "Compáralo con lo que dijo tu supervisor"] }
          ],
          tryIt: "Escribe seis tareas de un turno real o imaginario. Marca cada una como hay que, conviene o se puede. Pídele a un asistente de IA que las ordene y compáralo con tu propio orden.",
          youCanNow: "planear un día de trabajo y hacer primero las tareas más importantes.",
          quickCheck: [
            { objective: "O4", q: "En una lista de obligatorio, conveniente y opcional, ¿qué tareas van en \"obligatorio\"?", options: ["Las tareas que se tienen que hacer hoy", "Las tareas que más te gustan", "Las tareas más fáciles", "Las tareas del próximo mes"], answer: 0, why: "Las tareas obligatorias son las que se tienen que hacer hoy, muchas veces con una fecha límite." },
            { objective: "O4", q: "Dos tareas parecen urgentes y no sabes cuál va primero. ¿Qué harías?", options: ["Hacer la más fácil", "No hacer ninguna", "Hacer las dos a medias", "Preguntarle a tu supervisor cuál importa más"], answer: 3, why: "Cuando no sabes qué es lo más importante, le preguntas a tu supervisor." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Horarios y documentos compartidos",
          minutes: 6,
          goal: "Abrir un horario o documento compartido, encontrar tu parte y agregarle información.",
          text: [
            "Muchos trabajos comparten horarios y documentos en línea. Tus turnos pueden estar en una aplicación de horarios que elige tu empleador; las listas y los formularios pueden estar en Google Docs, Google Sheets, Microsoft Word o Excel.",
            "Cuando alguien comparte un documento, recibes un enlace por correo o por mensaje. Tócalo, inicia sesión si te lo pide y busca tu parte. Puedes escribir en el documento y los demás ven los cambios. Un comentario te deja hacer una pregunta sin cambiar el texto: selecciona las palabras y elige Comentar.",
            "Revisa tu aplicación de horarios todos los días y, si cambia un turno, confírmalo con tu supervisor. Nunca cambies algo en un documento compartido que no te toca cambiar; pregunta primero."
          ],
          steps: ["Toca el enlace compartido del correo o del mensaje.", "Inicia sesión si te lo pide.", "Busca tu parte del documento o del horario.", "Escribe tu actualización o agrega un comentario para preguntar.", "Revisa tu horario todos los días y confirma los cambios."],
          words: [["Documento compartido", "un archivo en línea que varias personas pueden abrir y editar."], ["Comentario", "una nota que se agrega al lado del texto, para preguntar o responder."]],
          slides: [
            { title: "El trabajo se comparte en línea", bullets: ["Horarios en una aplicación", "Docs y Sheets, Word y Excel"] },
            { title: "Usar un documento compartido", bullets: ["Toca el enlace, inicia sesión", "Busca tu parte", "Escribe o agrega un comentario"] },
            { title: "Buenos hábitos", bullets: ["Revisa tu horario todos los días", "Confirma los cambios con tu supervisor", "Cambia solo lo que te toca"] }
          ],
          tryIt: "Crea un documento gratis de Google Docs o Word llamado \"Mi semana de trabajo\". Escribe tus turnos de una semana, agrega un comentario con una pregunta y practica compartirlo por enlace con un familiar o contigo mismo.",
          youCanNow: "usar horarios y documentos compartidos y agregarles información de la forma correcta.",
          quickCheck: [
            { objective: "O5", q: "¿Cómo entras por lo general a un documento compartido?", options: ["Comprándolo", "Con un enlace que te mandan por correo o mensaje", "Imprimiéndolo", "Llamando a la empresa"], answer: 1, why: "Cuando te comparten un documento, por lo general recibes un enlace." },
            { objective: "O5", q: "Ves un error en la parte de un compañero en un horario compartido. ¿Qué harías?", options: ["Cambiarlo tú", "Borrar su parte", "Agregar un comentario o preguntarle", "Ignorarlo para siempre"], answer: 2, why: "No cambias las partes que no son tuyas; primero comentas o preguntas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar la IA en el trabajo de la forma correcta",
          minutes: 5,
          goal: "Seguir las reglas de IA de tu trabajo y mantener privada la información de la empresa y de los clientes.",
          text: [
            "Muchos trabajos usan IA, y muchos tienen reglas sobre ella. Algunos permiten ciertas herramientas; otros no permiten la IA para algunas tareas. Pregúntale siempre a tu supervisor qué está permitido antes de usar la IA en el trabajo.",
            "Nunca pongas información privada del trabajo en una herramienta de IA pública: nombres, direcciones o datos de pago de clientes, información de compañeros, precios o planes que no son públicos, o contraseñas. Eso puede romper las reglas de la empresa y la ley.",
            "Usa la IA para cosas como mejorar lo que tú escribes, explicar una palabra o practicar una conversación. Revisa lo que dice y sé honesto si la usaste para algo que entregas."
          ],
          steps: ["Pregúntale a tu supervisor qué uso de la IA está permitido.", "Nunca pongas en la IA información privada de clientes, compañeros o la empresa.", "Usa la IA para lo que tú escribes y para aprender.", "Revisa sus respuestas.", "Sé honesto sobre cuándo la usas."],
          words: [["Confidencial", "información privada que no se debe compartir fuera de la empresa."], ["Política", "una regla escrita en un lugar de trabajo."]],
          slides: [
            { title: "Pregunta primero", bullets: ["Los trabajos tienen reglas sobre la IA", "Pregúntale a tu supervisor qué está permitido"] },
            { title: "Nunca pongas en la IA", bullets: ["Nombres o datos de pago de clientes", "Información de compañeros", "Planes, precios o contraseñas de la empresa"] },
            { title: "Buenos usos", bullets: ["Pulir lo que tú escribes", "Explicar una palabra", "Practicar una conversación"] }
          ],
          tryIt: "Tarea final: pídele a un asistente de IA que te ayude a escribir un mensaje corto y profesional a un supervisor pidiendo cambiar un turno, con una razón y la oferta de ayudar a encontrar quien te cubra. Haz que suene a ti y revisa que no tenga datos privados. Luego haz una lista de pendientes ordenada por prioridad para un día de trabajo.",
          youCanNow: "comunicarte de forma profesional, planear tu trabajo, usar herramientas compartidas y usar la IA en el trabajo de la forma correcta.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una política del trabajo?", options: ["Una regla escrita del trabajo", "La opinión de un compañero", "La reseña de un cliente", "Un tipo de aplicación de horarios"], answer: 0, why: "Una política es una regla escrita que tu trabajo espera que sigas." },
            { objective: "O6", q: "Quieres que la IA te ayude a responder la queja de un cliente que incluye su número de teléfono. ¿Qué harías?", options: ["Pegar todo en una herramienta de IA pública", "Revisar la política de IA y dejar fuera los datos del cliente", "Publicar la queja en internet para pedir consejo", "Mandarle el número del cliente a un amigo"], answer: 1, why: "Sigue las reglas de IA de tu trabajo y mantén privada la información de los clientes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Sacar el trabajo adelante",
        questions: [
          { objective: "O4", q: "¿Qué significa \"ordenar por prioridad\"?", options: ["Hacer las tareas al azar", "Hacer solo las tareas más fáciles", "Saltarte tareas", "Hacer primero las tareas más importantes"], answer: 3, why: "Ordenar por prioridad pone primero las tareas importantes." },
          { objective: "O4", q: "¿Qué tarea es de \"hay que hacerla hoy\"?", options: ["Lo que pidió tu supervisor con fecha límite hoy", "Algo que podrías hacer el próximo mes", "Ordenar tu casillero por gusto", "Nada"], answer: 0, why: "Las fechas límite y lo que pide el supervisor van primero." },
          { objective: "O5", q: "Quieres preguntar sobre una línea de un documento compartido. Tú:", options: ["La reescribes sin preguntar", "Borras la línea", "Agregas un comentario", "La ignoras"], answer: 2, why: "Los comentarios preguntan sin cambiar el texto." },
          { objective: "O6", q: "¿Puedes pegar el nombre y el número de tarjeta de un cliente en una herramienta de IA pública?", options: ["Solo si la IA lo pide", "Sí, para ahorrar tiempo", "Solo los fines de semana", "No, nunca"], answer: 3, why: "La información de los clientes es confidencial." },
          { objective: "O6", q: "Antes de usar la IA para tareas del trabajo, deberías:", options: ["Esconderlo", "Suponer que está bien", "Preguntarle a tu supervisor qué está permitido", "Usar la herramienta que quieras"], answer: 2, why: "Los trabajos tienen sus propias reglas sobre la IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades y productividad en el trabajo",
    questions: [
      { objective: "O1", q: "Un mensaje profesional es:", options: ["Largo y lleno de lenguaje de chat", "Corto, amable y claro", "Todo en mayúsculas", "Casi todo emojis"], answer: 1, why: "Los mensajes claros y respetuosos funcionan mejor." },
      { objective: "O1", q: "Un buen mensaje de trabajo termina con:", options: ["Gracias y tu nombre", "Nada", "Un chiste", "Tu número de Seguro Social"], answer: 0, why: "Las gracias y un nombre son amables y claros." },
      { objective: "O1", q: "La IA puede ayudar con un mensaje de trabajo:", options: ["Haciéndolo más profesional mientras tú conservas tu voz", "Enviándolo sin que lo leas", "Agregando datos privados", "Haciéndolo más largo"], answer: 0, why: "La IA pule; tú revisas y lo haces tuyo." },
      { objective: "O2", q: "Un supervisor es:", options: ["Un compañero de tu mismo nivel", "La persona que dirige tu trabajo", "Un cliente", "Un repartidor"], answer: 1, why: "Los supervisores dirigen el trabajo y los horarios." },
      { objective: "O2", q: "Antes de hablar con un supervisor, escribe:", options: ["Nada", "Un discurso largo", "Tu punto en una oración", "Quejas sobre tus compañeros"], answer: 2, why: "Una oración clara te mantiene enfocado." },
      { objective: "O2", q: "Un buen momento para hablar con un supervisor es:", options: ["Nunca", "En plena hora pico", "Mientras atiende a un cliente", "Un momento tranquilo, después de preguntar si tiene un minuto"], answer: 3, why: "Los momentos tranquilos dan mejores resultados." },
      { objective: "O2", q: "Practicar un juego de roles con la IA te ayuda a:", options: ["Conseguir un aumento automáticamente", "Evitar todas las conversaciones", "Practicar una conversación antes de tenerla", "Faltar al trabajo"], answer: 2, why: "Practicar da confianza." },
      { objective: "O3", q: "Los comentarios sobre tu trabajo son:", options: ["Información sobre cómo lo estás haciendo", "Un castigo", "Un cheque de pago", "Un horario"], answer: 0, why: "Los comentarios te ayudan a mejorar." },
      { objective: "O3", q: "Al reportar un problema, incluye:", options: ["Rumores", "A quién culpar", "Nada", "Qué pasó, cuándo y qué hiciste"], answer: 3, why: "Los hechos ayudan a resolver el problema." },
      { objective: "O3", q: "Si sientes enojo en el trabajo, una buena respuesta es:", options: ["Gritar", "\"Déjame pensarlo y te respondo.\"", "Irte", "Mandar un mensaje enojado"], answer: 1, why: "Tomarte un tiempo mantiene la calma." },
      { objective: "O4", q: "Una fecha límite es:", options: ["Un descanso", "El momento en que algo tiene que estar hecho", "Un día libre", "El día de pago"], answer: 1, why: "Las fechas límite marcan cuándo se entrega el trabajo." },
      { objective: "O4", q: "En hay que, conviene, se puede, empiezas por:", options: ["Lo que sea divertido", "Se puede", "Conviene", "Hay que"], answer: 3, why: "Las tareas que hay que hacer van primero." },
      { objective: "O4", q: "Si no estás seguro de qué es lo más importante:", options: ["Le preguntas a tu supervisor", "Adivinas y esperas que salga bien", "No haces nada", "Le preguntas a un cliente"], answer: 0, why: "Preguntar es inteligente, no una debilidad." },
      { objective: "O5", q: "Un documento compartido es:", options: ["Una contraseña", "Un papel en tu casillero", "Un archivo en línea que varias personas pueden editar", "Un diario privado"], answer: 2, why: "Los documentos compartidos se editan entre varios." },
      { objective: "O5", q: "Cuando te comparten un documento, por lo general recibes:", options: ["Nada", "Una carta por correo postal", "Solo una llamada", "Un enlace por correo o por mensaje"], answer: 3, why: "Los enlaces abren los archivos compartidos." },
      { objective: "O5", q: "¿Deberías cambiar partes de un documento compartido que no son tuyas?", options: ["Solo de noche", "Sí, cuando quieras", "No; pregunta primero", "Solo si estás aburrido"], answer: 2, why: "Respeta el trabajo de los demás." },
      { objective: "O5", q: "¿Cada cuánto deberías revisar tu aplicación de horarios?", options: ["Una vez al año", "Todos los días", "Nunca", "Solo cuando te despidan"], answer: 1, why: "Los turnos pueden cambiar." },
      { objective: "O6", q: "La información \"confidencial\" es:", options: ["Privada y no se debe compartir fuera de la empresa", "Noticias públicas", "El clima", "Tu canción favorita"], answer: 0, why: "Se queda dentro de la empresa." },
      { objective: "O6", q: "Un buen uso de la IA en el trabajo, si está permitido, es:", options: ["Mejorar lo que tú escribes", "Pegar datos de pago de clientes", "Compartir las direcciones de tus compañeros", "Publicar los planes de la empresa"], answer: 0, why: "Lo que tú escribes no tiene datos privados." },
      { objective: "O6", q: "Una \"política\" del trabajo es:", options: ["Solo un tipo de seguro", "Una regla escrita en el trabajo", "Un compañero", "Un descanso para comer"], answer: 1, why: "Las políticas fijan las reglas del trabajo, incluidas las de la IA." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      7,
      8,
      10,
      11,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Petición clara",
        objective: "O1",
        notYet: "El mensaje no dice qué turno ni por qué, o la idea principal queda escondida.",
        meets: "La primera línea pide cambiar un turno específico, con una razón corta.",
        exceeds: "Es tan corto que se lee en unos segundos y termina con un agradecimiento y tu nombre."
      },
      {
        name: "Ofrecer ayuda",
        objective: "O1",
        notYet: "No ofrece ayudar a encontrar quién cubra el turno.",
        meets: "Ofrece ayudar a encontrar a alguien que cubra el turno.",
        exceeds: "Nombra a un posible compañero o propone un momento para hablarlo."
      },
      {
        name: "Suena a ti, sin datos privados",
        objective: "O6",
        notYet: "Usa palabras que la persona no diría, o tiene datos privados.",
        meets: "Amable, con las propias palabras de la persona y sin datos privados.",
        exceeds: "La persona cambió por su cuenta algunas palabras de la IA y puede explicar por qué."
      },
      {
        name: "Lista de pendientes por prioridad",
        objective: "O4",
        notYet: "Las tareas no tienen orden, o las que tienen fecha límite no van primero.",
        meets: "Las tareas están ordenadas en obligatorio, conveniente y opcional, con lo que vence hoy primero.",
        exceeds: "También anota a quién preguntar si las prioridades no están claras."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que siguen empleadas 90 días después de empezar un trabajo (encuesta de seguimiento)",
      "Personas que dicen haber mandado un mensaje de trabajo profesional o usado un horario compartido en 30 días",
      "Reportes de empleadores u organizaciones de reinserción sobre una mejor comunicación de quienes terminan el programa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o del programa",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Una herramienta gratuita de documentos u horarios compartidos para practicar, como Google Docs",
      "Papel y lápiz para la lista de pendientes",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Después de la Lección 2, practiquen en parejas conversaciones con un supervisor; eso da confianza rápido.",
      "Usen nombres de práctica y turnos inventados; nunca datos privados reales de clientes o compañeros.",
      "Recuerda a los participantes que cada empleador tiene su propia política de IA y que deben preguntar antes de usar la IA en el trabajo.",
      "Prepara un documento compartido de práctica para que los participantes agreguen información sin cambiar las partes de los demás.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

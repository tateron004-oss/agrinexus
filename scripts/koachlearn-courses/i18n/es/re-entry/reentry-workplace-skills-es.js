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
  chapters: [
    {
      name: "Capítulo 1: Comunicarte en el trabajo",
      lessons: [
        {
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
          youCanNow: "escribir un mensaje corto y profesional a alguien del trabajo."
        },
        {
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
          youCanNow: "prepararte y tener una conversación respetuosa con un supervisor."
        },
        {
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
          youCanNow: "responder con calma a los comentarios sobre tu trabajo y reportar un problema con claridad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Comunicarte en el trabajo",
        questions: [
          { q: "¿Dónde debe ir el punto principal de un mensaje de trabajo?", options: ["En ningún lado", "Al final de todo", "En la primera línea", "En otro mensaje"], answer: 2, why: "Los supervisores ocupados leen primero la primera línea." },
          { q: "¿Cuál es el más profesional?", options: ["\"Hola, María: ¿puedo cambiar el sábado por el domingo esta semana? Puedo ayudar a buscar quien me cubra. Gracias, Andrés\"", "\"oye no puedo el sab\"", "\"NO VOY A IR EL SÁBADO\"", "\"??\""], answer: 0, why: "Es amable, claro y ofrece ayuda." },
          { q: "¿Qué significa \"repetir lo que oíste\"?", options: ["Irte", "Decirlo más fuerte", "Discutir", "Decir con tus propias palabras lo que oíste"], answer: 3, why: "Muestra que entendiste." },
          { q: "Tu supervisor te da un comentario difícil. Una buena primera respuesta es:", options: ["Discutir de inmediato", "Escuchar y dar las gracias", "Renunciar", "Ignorarlo"], answer: 1, why: "Escuchar muestra que puedes crecer." },
          { q: "Rompiste algo en el trabajo. ¿Qué haces?", options: ["Esconderlo", "Reportarlo pronto a la persona correcta con los hechos", "Culpar a un compañero", "Esperar a que alguien lo note"], answer: 1, why: "Los reportes honestos y a tiempo generan confianza." }
        ]
      }
    },
    {
      name: "Capítulo 2: Sacar el trabajo adelante",
      lessons: [
        {
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
          youCanNow: "planear un día de trabajo y hacer primero las tareas más importantes."
        },
        {
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
          youCanNow: "usar horarios y documentos compartidos y agregarles información de la forma correcta."
        },
        {
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
          youCanNow: "comunicarte de forma profesional, planear tu trabajo, usar herramientas compartidas y usar la IA en el trabajo de la forma correcta."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Sacar el trabajo adelante",
        questions: [
          { q: "¿Qué significa \"ordenar por prioridad\"?", options: ["Hacer las tareas al azar", "Hacer solo las tareas más fáciles", "Saltarte tareas", "Hacer primero las tareas más importantes"], answer: 3, why: "Ordenar por prioridad pone primero las tareas importantes." },
          { q: "¿Qué tarea es de \"hay que hacerla hoy\"?", options: ["Lo que pidió tu supervisor con fecha límite hoy", "Algo que podrías hacer el próximo mes", "Ordenar tu casillero por gusto", "Nada"], answer: 0, why: "Las fechas límite y lo que pide el supervisor van primero." },
          { q: "Quieres preguntar sobre una línea de un documento compartido. Tú:", options: ["La reescribes sin preguntar", "Borras la línea", "Agregas un comentario", "La ignoras"], answer: 2, why: "Los comentarios preguntan sin cambiar el texto." },
          { q: "¿Puedes pegar el nombre y el número de tarjeta de un cliente en una herramienta de IA pública?", options: ["Solo si la IA lo pide", "Sí, para ahorrar tiempo", "Solo los fines de semana", "No, nunca"], answer: 3, why: "La información de los clientes es confidencial." },
          { q: "Antes de usar la IA para tareas del trabajo, deberías:", options: ["Esconderlo", "Suponer que está bien", "Preguntarle a tu supervisor qué está permitido", "Usar la herramienta que quieras"], answer: 2, why: "Los trabajos tienen sus propias reglas sobre la IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades y productividad en el trabajo",
    questions: [
      { q: "Un mensaje profesional es:", options: ["Largo y lleno de lenguaje de chat", "Corto, amable y claro", "Todo en mayúsculas", "Casi todo emojis"], answer: 1, why: "Los mensajes claros y respetuosos funcionan mejor." },
      { q: "Un buen mensaje de trabajo termina con:", options: ["Gracias y tu nombre", "Nada", "Un chiste", "Tu número de Seguro Social"], answer: 0, why: "Las gracias y un nombre son amables y claros." },
      { q: "La IA puede ayudar con un mensaje de trabajo:", options: ["Haciéndolo más profesional mientras tú conservas tu voz", "Enviándolo sin que lo leas", "Agregando datos privados", "Haciéndolo más largo"], answer: 0, why: "La IA pule; tú revisas y lo haces tuyo." },
      { q: "Un supervisor es:", options: ["Un compañero de tu mismo nivel", "La persona que dirige tu trabajo", "Un cliente", "Un repartidor"], answer: 1, why: "Los supervisores dirigen el trabajo y los horarios." },
      { q: "Antes de hablar con un supervisor, escribe:", options: ["Nada", "Un discurso largo", "Tu punto en una oración", "Quejas sobre tus compañeros"], answer: 2, why: "Una oración clara te mantiene enfocado." },
      { q: "Un buen momento para hablar con un supervisor es:", options: ["Nunca", "En plena hora pico", "Mientras atiende a un cliente", "Un momento tranquilo, después de preguntar si tiene un minuto"], answer: 3, why: "Los momentos tranquilos dan mejores resultados." },
      { q: "Practicar un juego de roles con la IA te ayuda a:", options: ["Conseguir un aumento automáticamente", "Evitar todas las conversaciones", "Practicar una conversación antes de tenerla", "Faltar al trabajo"], answer: 2, why: "Practicar da confianza." },
      { q: "Los comentarios sobre tu trabajo son:", options: ["Información sobre cómo lo estás haciendo", "Un castigo", "Un cheque de pago", "Un horario"], answer: 0, why: "Los comentarios te ayudan a mejorar." },
      { q: "Al reportar un problema, incluye:", options: ["Rumores", "A quién culpar", "Nada", "Qué pasó, cuándo y qué hiciste"], answer: 3, why: "Los hechos ayudan a resolver el problema." },
      { q: "Si sientes enojo en el trabajo, una buena respuesta es:", options: ["Gritar", "\"Déjame pensarlo y te respondo.\"", "Irte", "Mandar un mensaje enojado"], answer: 1, why: "Tomarte un tiempo mantiene la calma." },
      { q: "Una fecha límite es:", options: ["Un descanso", "El momento en que algo tiene que estar hecho", "Un día libre", "El día de pago"], answer: 1, why: "Las fechas límite marcan cuándo se entrega el trabajo." },
      { q: "En hay que, conviene, se puede, empiezas por:", options: ["Lo que sea divertido", "Se puede", "Conviene", "Hay que"], answer: 3, why: "Las tareas que hay que hacer van primero." },
      { q: "Si no estás seguro de qué es lo más importante:", options: ["Le preguntas a tu supervisor", "Adivinas y esperas que salga bien", "No haces nada", "Le preguntas a un cliente"], answer: 0, why: "Preguntar es inteligente, no una debilidad." },
      { q: "Un documento compartido es:", options: ["Una contraseña", "Un papel en tu casillero", "Un archivo en línea que varias personas pueden editar", "Un diario privado"], answer: 2, why: "Los documentos compartidos se editan entre varios." },
      { q: "Cuando te comparten un documento, por lo general recibes:", options: ["Nada", "Una carta por correo postal", "Solo una llamada", "Un enlace por correo o por mensaje"], answer: 3, why: "Los enlaces abren los archivos compartidos." },
      { q: "¿Deberías cambiar partes de un documento compartido que no son tuyas?", options: ["Solo de noche", "Sí, cuando quieras", "No; pregunta primero", "Solo si estás aburrido"], answer: 2, why: "Respeta el trabajo de los demás." },
      { q: "¿Cada cuánto deberías revisar tu aplicación de horarios?", options: ["Una vez al año", "Todos los días", "Nunca", "Solo cuando te despidan"], answer: 1, why: "Los turnos pueden cambiar." },
      { q: "La información \"confidencial\" es:", options: ["Privada y no se debe compartir fuera de la empresa", "Noticias públicas", "El clima", "Tu canción favorita"], answer: 0, why: "Se queda dentro de la empresa." },
      { q: "Un buen uso de la IA en el trabajo, si está permitido, es:", options: ["Mejorar lo que tú escribes", "Pegar datos de pago de clientes", "Compartir las direcciones de tus compañeros", "Publicar los planes de la empresa"], answer: 0, why: "Lo que tú escribes no tiene datos privados." },
      { q: "Una \"política\" del trabajo es:", options: ["Solo un tipo de seguro", "Una regla escrita en el trabajo", "Un compañero", "Un descanso para comer"], answer: 1, why: "Las políticas fijan las reglas del trabajo, incluidas las de la IA." }
    ]
  }
};

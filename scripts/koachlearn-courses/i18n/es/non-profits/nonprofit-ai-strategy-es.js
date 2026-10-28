"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-strategy.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-strategy-es",
  lang: "es",
  translationOf: "nonprofit-ai-strategy",
  category: "Non Profits",
  name: "Crear una estrategia de IA para tu organización sin fines de lucro",
  skills: "Encontrar las tareas adecuadas para la IA, Ordenar ideas por valor y riesgo, Escribir una política de uso de IA, Planear una prueba pequeña, Medir resultados e informar a la junta directiva",
  outcome: "escribir un plan de IA de una página para tu organización sin fines de lucro que nombre tres tareas en las que ayudará la IA, las reglas que deben seguir el personal y los voluntarios, una prueba piloto de 30 días con un responsable y cómo vas a medir si funcionó.",
  about: [
    "Este curso es para directores ejecutivos, pastores, miembros de juntas directivas, gerentes de programas y líderes de voluntarios que quieren usar la IA a propósito y no por accidente.",
    "Vas a ver en qué se va el tiempo de tu equipo, elegir las tareas donde la IA ayuda más con menos riesgo, escribir reglas sencillas que protejan a los donantes y a las personas que atiendes, y planear una prueba pequeña que puedas presentar a tu junta directiva.",
    "Cada lección dura unos cinco minutos y termina con una tarea que arma una parte de tu plan. Para la Lección 6 tendrás un plan de IA completo de una página. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de IA de una página para tu organización con cinco partes: (1) tu misión en una frase, (2) tres tareas en las que ayudará la IA, ordenadas por valor y riesgo, (3) al menos cinco reglas para usar la IA, incluidas reglas de privacidad, (4) una prueba piloto de 30 días con un responsable, una herramienta y una fecha de inicio, y (5) dos medidas que vas a presentar a tu junta directiva.",
  chapters: [
    {
      name: "Capítulo 1: Elegir dónde ayuda la IA",
      lessons: [
        {
          title: "Por qué una organización sin fines de lucro necesita un plan de IA",
          minutes: 4,
          goal: "Explicar a tu junta directiva o a los líderes por qué tu organización necesita un plan de IA sencillo.",
          text: [
            "Puede que tu personal y tus voluntarios ya usen herramientas de IA por su cuenta, sin reglas en común. Eso puede ahorrar tiempo, pero también puede poner en riesgo la información de donantes o de personas atendidas, o producir textos que no suenan a ustedes.",
            "Un plan de IA es un documento corto que dice para qué sirve la IA en tu organización, para qué no, quién decide y cómo van a revisar que ayuda a la misión.",
            "Un buen plan empieza por la misión, no por la herramienta. La pregunta no es \"¿Qué IA debemos comprar?\" sino \"¿Dónde pierde tiempo nuestro equipo que podría volver a las personas que atendemos?\""
          ],
          words: [["Plan de IA", "un documento corto que dice cómo tu organización usará y no usará la IA."], ["Misión", "el propósito para el que existe tu organización."], ["Parte interesada", "cualquier persona afectada por tu trabajo: personas atendidas, donantes, voluntarios, personal, junta directiva."]],
          slides: [
            { title: "¿Por qué planear?", bullets: ["Puede que ya se use IA sin reglas", "La privacidad y la confianza están en juego", "Un plan convierte el uso disperso en ayuda real"] },
            { title: "Un plan de IA dice", bullets: ["Para qué sirve la IA, y para qué no", "Quién decide", "Cómo van a revisar que ayuda"] },
            { title: "Empieza por la misión", bullets: ["No \"¿Qué herramienta?\"", "Sino \"¿Dónde perdemos tiempo?\"", "Devuelve ese tiempo a las personas que atiendes"] }
          ],
          tryIt: "Escribe tu misión en una frase arriba de una hoja en blanco titulada \"Nuestro plan de IA\". Debajo, escribe una frase sobre por qué tu organización necesita un plan ahora.",
          youCanNow: "explicar por qué una organización sin fines de lucro necesita un plan de IA y empezarlo a partir de tu misión."
        },
        {
          title: "Ver en qué se va el tiempo de tu equipo",
          minutes: 5,
          goal: "Hacer una lista de las tareas repetidas de tu organización y encontrar las que la IA podría ayudar a hacer.",
          text: [
            "La IA ayuda más con tareas que se repiten, que tienen mucha escritura u organización de información y que siguen un patrón. Ejemplos: recordatorios semanales para voluntarios, cartas de agradecimiento a donantes, borradores del boletín, notas de reuniones, resúmenes de informes de subvenciones y respuestas a las mismas preguntas del público.",
            "La IA no debe tomar decisiones sobre personas: quién recibe servicios, a quién se contrata o a quién se le dice que no. Eso necesita el criterio humano, la justicia y el cuidado.",
            "Pregunta a tres o cuatro personas de tu equipo, incluido un voluntario, qué tareas se comen su semana. Te sorprenderá lo que vas a aprender."
          ],
          steps: ["Haz una lista de diez tareas que tu equipo hace cada semana o cada mes.", "Al lado de cada una, escribe más o menos cuántas horas toma.", "Marca las tareas que se repiten y tienen escritura, organización o resúmenes.", "Tacha las tareas que deciden algo sobre una persona."],
          words: [["Tarea repetida", "trabajo que se hace igual una y otra vez, como los recordatorios semanales."], ["Criterio humano", "las decisiones que una persona toma con cuidado, justicia y conocimiento de la situación."]],
          slides: [
            { title: "Buenas tareas para la IA", bullets: ["Se repiten seguido", "Mucha escritura, organización o resúmenes", "Siguen un patrón"] },
            { title: "Ejemplos en organizaciones", bullets: ["Recordatorios a voluntarios y agradecimientos a donantes", "Borradores del boletín y notas de reuniones", "Respuestas a preguntas comunes del público"] },
            { title: "Déjalo en manos de personas", bullets: ["Quién recibe servicios", "A quién se contrata o se rechaza", "Todo lo que necesita cuidado y justicia"] }
          ],
          tryIt: "Haz la lista de diez tareas con sus horas para tu organización. Marca las que van bien con la IA y tacha las que deciden sobre personas.",
          youCanNow: "ver el trabajo repetido de tu equipo y elegir las tareas que van bien con la IA."
        },
        {
          title: "Ordenar ideas por valor y riesgo",
          minutes: 5,
          goal: "Ordenar tus ideas de IA y elegir las tres primeras para empezar.",
          text: [
            "Para cada tarea que va bien con la IA, hazte dos preguntas. Valor: ¿cuánto tiempo o calidad ganaríamos? Riesgo: ¿qué podría salir mal y qué tan grave sería?",
            "Primero van las tareas de poco riesgo y mucho valor, por ejemplo escribir borradores de recordatorios para voluntarios con los datos públicos de un evento. Las tareas de alto riesgo, como cualquier cosa con notas de casos o datos de salud de personas atendidas, esperan hasta que tengas reglas firmes y una herramienta aprobada y segura, o se quedan fuera de la lista.",
            "Califica cada una del 1 (bajo) al 3 (alto). Empieza por mucho valor y poco riesgo. Tres tareas bien hechas son mejores que diez a medias."
          ],
          steps: ["Dale a cada tarea una calificación de valor del 1 al 3.", "Dale a cada tarea una calificación de riesgo del 1 al 3.", "Ordena: primero mucho valor y poco riesgo.", "Elige tus tres primeras."],
          words: [["Valor", "cuánto tiempo, dinero o calidad se ganaría con un cambio."], ["Riesgo", "lo que podría salir mal y cuánto daño causaría."]],
          slides: [
            { title: "Dos preguntas por tarea", bullets: ["Valor: ¿qué ganamos?", "Riesgo: ¿qué podría salir mal?"] },
            { title: "Califica del 1 al 3", bullets: ["Mucho valor + poco riesgo = empieza aquí", "Alto riesgo = espera a tener reglas o déjala"] },
            { title: "Ejemplos", bullets: ["Poco riesgo: recordatorios con datos públicos del evento", "Alto riesgo: cualquier cosa con notas de casos"] },
            { title: "Elige tres", bullets: ["Tres bien hechas son mejores que diez a medias"] }
          ],
          tryIt: "Califica tus tareas marcadas por valor y riesgo. Escribe tus tres primeras bajo el título \"Dónde ayudará la IA\" en tu plan.",
          youCanNow: "ordenar ideas de IA por valor y riesgo y elegir tres para empezar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir dónde ayuda la IA",
        questions: [
          { q: "¿De dónde debe partir el plan de IA de una organización sin fines de lucro?", options: ["De la misión", "De la herramienta más nueva", "Del precio más barato", "Del sitio web de otra organización"], answer: 0, why: "Un plan empieza por la misión y por dónde el tiempo podría volver a las personas que atiendes." },
          { q: "¿Qué tarea va mejor con la IA?", options: ["Decidir quién recibe ayuda alimentaria", "Escribir borradores de recordatorios semanales para voluntarios", "Elegir a qué personal contratar", "Rechazar a una persona que pide ayuda"], answer: 1, why: "Las tareas de escritura que se repiten van bien con la IA; las decisiones sobre personas se quedan con personas." },
          { q: "Una tarea tiene mucho valor y poco riesgo. ¿Qué haces?", options: ["La dejas", "Esperas cinco años", "La pones cerca del principio de tu lista", "Le pides a la junta que la escriba"], answer: 2, why: "Las tareas de mucho valor y poco riesgo van primero." },
          { q: "Una tarea tiene datos de salud de personas atendidas. ¿Cómo la calificas?", options: ["El riesgo más bajo", "La haces primero", "La publicas", "Alto riesgo: espera reglas firmes y una herramienta segura, o déjala"], answer: 3, why: "Los datos delicados de personas atendidas son de alto riesgo." },
          { q: "¿Por qué preguntar a voluntarios y personal qué se come su semana?", options: ["Para encontrar tareas repetidas reales", "Para echar culpas", "Para recortar voluntarios", "Lo exige la ley"], answer: 0, why: "Las personas que hacen el trabajo saben en qué se va el tiempo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Reglas, prueba piloto y resultados",
      lessons: [
        {
          title: "Escribir reglas sencillas de IA",
          minutes: 5,
          goal: "Escribir al menos cinco reglas claras sobre cómo tu personal y tus voluntarios usan la IA.",
          text: [
            "Las reglas hacen que usar la IA sea seguro. Que sean tan cortas que quepan en una página y tan sencillas que un voluntario nuevo las pueda seguir.",
            "Reglas básicas que necesitan la mayoría de las organizaciones: usar solo herramientas aprobadas; nunca pegar información privada de donantes, voluntarios o personas atendidas; una persona revisa todo antes de enviarlo o publicarlo; revisar cada dato y número; ser honestos cuando la IA ayudó, donde eso importa; y la IA nunca decide quién recibe servicios.",
            "Los grupos de fe pueden agregar una regla para que los sermones, las oraciones y el acompañamiento pastoral sigan siendo personales. Pregunta a un abogado o a tu aseguradora si manejas información de salud, de niños o legal, porque pueden aplicar leyes adicionales."
          ],
          steps: ["Haz una lista de las herramientas de IA aprobadas.", "Escribe la regla de privacidad: lo que nunca entra en la IA.", "Escribe la regla de revisión: quién revisa antes de que algo salga.", "Escribe la regla de decisiones: la IA nunca decide sobre personas.", "Agrega las reglas que necesite tu misión."],
          words: [["Política de uso de IA", "reglas escritas sobre cómo pueden usar la IA las personas de tu organización."], ["Herramienta aprobada", "una herramienta de IA que tus líderes revisaron y permitieron."]],
          slides: [
            { title: "Reglas cortas", bullets: ["Una página", "Tan sencillas que las siga un voluntario nuevo"] },
            { title: "Reglas básicas", bullets: ["Solo herramientas aprobadas", "Nada de información privada de donantes o personas atendidas", "Una persona revisa antes de que salga", "Revisa cada dato y número"] },
            { title: "Más reglas", bullets: ["La IA nunca decide quién recibe servicios", "Sé honesto cuando la IA ayudó", "Agrega las reglas que necesite tu misión"] },
            { title: "Pide consejo", bullets: ["Datos de salud, de niños o legales: pregunta a un abogado o aseguradora"] }
          ],
          tryIt: "Escribe al menos cinco reglas bajo el título \"Nuestras reglas de IA\" en tu plan. Léeselas a un voluntario y pregúntale si algo no está claro.",
          youCanNow: "escribir una política sencilla de uso de IA que tu equipo pueda seguir."
        },
        {
          title: "Planear una prueba piloto de 30 días",
          minutes: 5,
          goal: "Planear una prueba pequeña de 30 días de la IA en una tarea, con un responsable.",
          text: [
            "Una prueba piloto es una prueba pequeña antes de cambiarlo todo. Escoge una de tus tres tareas principales, una herramienta, una persona a cargo y 30 días.",
            "Antes de empezar, mide cómo funcionan las cosas hoy. Si los recordatorios para voluntarios toman 3 horas por semana, anótalo. Ese es tu punto de partida, o línea base.",
            "Toma notas durante la prueba: tiempo usado, problemas y lo que dijo la gente. Si puedes, usa una herramienta que tu organización ya tiene, como la IA incluida en Microsoft 365 o Google Workspace, para no sumar gastos."
          ],
          steps: ["Elige una tarea de tus tres principales.", "Elige una herramienta aprobada y un responsable.", "Anota la línea base: cuánto tiempo toma hoy.", "Pon una fecha de inicio y una de fin 30 días después.", "Toma notas sencillas cada semana."],
          words: [["Prueba piloto", "una prueba pequeña y corta antes de un cambio más grande."], ["Línea base", "cómo funciona algo hoy, medido antes de cambiarlo."], ["Responsable", "la única persona a cargo de la prueba piloto."]],
          slides: [
            { title: "Una prueba piloto es una prueba pequeña", bullets: ["Una tarea, una herramienta, un responsable", "30 días"] },
            { title: "Mide primero", bullets: ["Línea base: cuánto tiempo toma hoy", "Ejemplo: los recordatorios toman 3 horas por semana"] },
            { title: "Durante la prueba", bullets: ["Anota el tiempo usado", "Anota los problemas", "Anota lo que dijo la gente"] }
          ],
          tryIt: "Bajo \"Nuestra prueba piloto de 30 días\", escribe la tarea, la herramienta, el responsable, la fecha de inicio, la fecha de fin y la línea base.",
          youCanNow: "planear una prueba piloto de IA de 30 días con un responsable y una línea base claros."
        },
        {
          title: "Medir resultados e informar a tu junta directiva",
          minutes: 5,
          goal: "Elegir dos medidas e informar los resultados de la prueba en una actualización corta para la junta.",
          text: [
            "Elige dos medidas: una de tiempo o costo (horas ahorradas por semana) y una de calidad (menos errores, más voluntarios inscritos, respuestas más rápidas al público o lo que dijeron los lectores).",
            "Al final, compara con tu línea base. Luego decide: seguir, cambiar o detener. Detenerla es un buen resultado; aprendiste algo a bajo costo.",
            "Informa a tu junta en cinco frases: qué probaron, qué cambió, si hubo problemas, si se siguieron las reglas y qué recomiendas después. A las juntas les importan la misión, el dinero, el riesgo y la confianza."
          ],
          steps: ["Elige una medida de tiempo y una de calidad.", "Compara el final de la prueba con tu línea base.", "Decide: seguir, cambiar o detener.", "Escribe una actualización de cinco frases para la junta."],
          words: [["Medida", "un número o señal que sigues para ver si algo funcionó."], ["Junta directiva", "el grupo de personas que gobierna una organización sin fines de lucro y supervisa a sus líderes."]],
          slides: [
            { title: "Dos medidas", bullets: ["Tiempo: horas ahorradas cada semana", "Calidad: errores, inscripciones, respuestas, comentarios"] },
            { title: "Decide", bullets: ["Seguir", "Cambiar", "Detener: también es un resultado útil"] },
            { title: "Actualización de cinco frases para la junta", bullets: ["Qué probamos y qué cambió", "Problemas y si se siguieron las reglas", "Qué recomendamos después"] }
          ],
          tryIt: "Tarea final: termina tu plan de IA de una página. Agrega dos medidas y junta las cinco partes: misión, tres tareas, reglas, la prueba piloto de 30 días y las medidas que vas a presentar a tu junta.",
          youCanNow: "escribir un plan de IA completo de una página e informar los resultados a tu junta directiva."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Reglas, prueba piloto y resultados",
        questions: [
          { q: "¿Cuál es una regla básica de IA para una organización sin fines de lucro?", options: ["Pegar los expedientes de las personas atendidas para mejores respuestas", "Una persona revisa todo antes de que salga", "La IA elige quién recibe servicios", "Cualquier herramienta está bien"], answer: 1, why: "La revisión humana protege la calidad y la confianza." },
          { q: "¿Qué es una línea base?", options: ["La calificación final", "Un tipo de IA", "Cómo funciona la tarea hoy, antes del cambio", "El presupuesto de la junta"], answer: 2, why: "Comparas los resultados con la línea base." },
          { q: "¿Qué tan grande debe ser una primera prueba piloto?", options: ["Todas las tareas a la vez", "Sin límite de tiempo", "Toda la junta", "Una tarea, una herramienta, un responsable, 30 días"], answer: 3, why: "Una prueba pequeña te enseña a bajo costo y con seguridad." },
          { q: "La prueba no ahorró tiempo. ¿Cuál es una buena decisión?", options: ["Detenerla o cambiarla; aprendiste algo", "Esconder los resultados", "Obligar a todos a usarla", "Culpar a los voluntarios"], answer: 0, why: "Detenerla es un resultado bueno y honesto." },
          { q: "Tu organización maneja información de niños. ¿Qué debes agregar?", options: ["Nada", "Consejo de un abogado o aseguradora sobre reglas adicionales", "Pegarla en la IA", "Compartirla en público"], answer: 1, why: "Pueden aplicar leyes adicionales a la información de niños, de salud y legal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear una estrategia de IA para tu organización sin fines de lucro",
    questions: [
      { q: "Un plan de IA para una organización sin fines de lucro es:", options: ["Una compra de software", "Un evento para recaudar fondos", "Un documento corto sobre cómo usarán y no usarán la IA", "Una lista de donantes"], answer: 2, why: "Fija el propósito, las reglas y las revisiones del uso de la IA." },
      { q: "La mejor primera pregunta para un plan de IA es:", options: ["¿Qué herramienta es la más famosa?", "¿Cómo reemplazamos a los voluntarios?", "¿Cuánto pagan otros grupos?", "¿Dónde pierde tiempo nuestro equipo que podríamos devolver a la misión?"], answer: 3, why: "Empieza por la misión y el tiempo, no por las herramientas." },
      { q: "¿Por qué es riesgoso no tener un plan de IA?", options: ["La gente puede usar la IA sin reglas de privacidad", "La IA es ilegal", "Los donantes exigen IA", "No es riesgoso"], answer: 0, why: "El uso sin plan puede exponer información privada." },
      { q: "¿Qué tarea va bien con la IA?", options: ["Decidir a quién se desaloja de una vivienda", "Resumir un informe largo de una subvención", "Contratar a un nuevo pastor", "Firmar un contrato de renta"], answer: 1, why: "Resumir es una tarea de patrón; las otras son decisiones humanas." },
      { q: "¿Qué debe quedarse en manos de personas?", options: ["Escribir borradores de recordatorios", "Dar formato a un boletín", "Decidir quién recibe servicios", "Hacer una lista de temas para una reunión"], answer: 2, why: "Las decisiones sobre personas necesitan criterio humano." },
      { q: "Para ver en qué se va el tiempo, debes:", options: ["Adivinar una tarea", "Preguntar solo a la junta", "Dejar fuera a los voluntarios", "Hacer una lista de tareas y las horas que toman"], answer: 3, why: "Las horas muestran dónde la IA podría ayudar más." },
      { q: "¿Qué par de calificaciones usas para ordenar las ideas?", options: ["Valor y riesgo", "Color y tamaño", "Precio y marca", "Edad y estatura"], answer: 0, why: "Primero va mucho valor y poco riesgo." },
      { q: "¿Con cuántas tareas debes empezar?", options: ["Con todas", "Con unas tres", "Con ninguna", "Con cincuenta"], answer: 1, why: "Tres bien hechas son mejores que diez a medias." },
      { q: "¿Qué tarea tiene el menor riesgo?", options: ["Resumir notas de casos de personas atendidas", "Analizar los datos bancarios de los donantes", "Recordatorios para voluntarios con datos públicos del evento", "Escribir consejos médicos"], answer: 2, why: "Solo usa información pública." },
      { q: "Una política de uso de IA debe ser:", options: ["De cincuenta páginas", "Secreta", "Escrita solo en lenguaje legal", "Corta y tan sencilla que la siga un voluntario nuevo"], answer: 3, why: "Las reglas sencillas se siguen." },
      { q: "¿Cuál es una regla de privacidad?", options: ["Nunca pegar información privada de donantes o personas atendidas en la IA", "Usar cualquier herramienta que te guste", "Compartir contraseñas para ahorrar tiempo", "Publicar historias de personas atendidas con sus nombres"], answer: 0, why: "Proteger la información privada mantiene la confianza." },
      { q: "¿Qué significa \"herramienta aprobada\"?", options: ["Cualquier herramienta gratis", "Una herramienta que tus líderes revisaron y permitieron", "Una herramienta con anuncios", "Una herramienta que le gusta a un donante"], answer: 1, why: "Los líderes revisan la seguridad de las herramientas aprobadas." },
      { q: "Una prueba piloto es:", options: ["Un lanzamiento completo", "Una subvención", "Una prueba pequeña y corta antes de un cambio más grande", "Una elección de la junta"], answer: 2, why: "Las pruebas piloto prueban primero a bajo costo." },
      { q: "¿Por qué medir la línea base antes de una prueba piloto?", options: ["Para hacer todo más lento", "Porque lo piden los donantes", "No hace falta", "Para poder comparar los resultados después"], answer: 3, why: "Sin línea base no puedes saber si ayudó." },
      { q: "Cada prueba piloto necesita:", options: ["Un responsable a cargo", "Nadie a cargo", "Todo el personal a cargo", "Solo la IA"], answer: 0, why: "Un responsable la mantiene en marcha." },
      { q: "¿Por qué usar la IA que ya viene en herramientas que tienes, como Microsoft 365 o Google Workspace?", options: ["Siempre es perfecta", "Puede evitar gastos adicionales", "Comparte datos con los donantes", "Es obligatorio"], answer: 1, why: "Usar lo que ya tienes mantiene bajos los gastos." },
      { q: "¿Cuál es una medida de calidad?", options: ["El color del logo de la herramienta", "El número de aplicaciones de IA instaladas", "Más voluntarios que se inscriben después de los recordatorios", "Lo larga que es la política"], answer: 2, why: "Las medidas de calidad muestran si el trabajo mejoró." },
      { q: "Después de la prueba, tus tres opciones son:", options: ["Esconderla, ignorarla o negarla", "Comprar más herramientas", "Despedir al responsable", "Seguir, cambiar o detener"], answer: 3, why: "Decide según las medidas." },
      { q: "Una buena actualización para la junta es:", options: ["Unas cinco frases claras sobre resultados, riesgos y próximos pasos", "Un informe técnico de 40 páginas", "Nada", "Solo el costo de la herramienta"], answer: 0, why: "Las juntas necesitan una imagen corta y clara." },
      { q: "A las juntas directivas les importa sobre todo:", options: ["Qué IA tiene el mejor logo", "La misión, el dinero, el riesgo y la confianza", "Cuántas instrucciones se escribieron", "Solo los \"me gusta\" en redes sociales"], answer: 1, why: "Esos son los deberes principales de la junta." }
    ]
  }
};

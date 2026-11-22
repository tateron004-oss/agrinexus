"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-ai-tools.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-ai-tools-es",
  lang: "es",
  translationOf: "athletes-ai-tools",
  category: "Athletes",
  name: "Herramientas de IA para deportistas",
  skills: "Elegir la herramienta de IA correcta para cada tarea, Usar un asistente de IA para planear, Hacer gráficos con Canva, Registrar estadísticas en Google Sheets, Evaluar la privacidad y el costo de una herramienta",
  outcome: "elegir y usar tres herramientas de IA gratuitas para una tarea real de deportista: un planificador, una herramienta de diseño y una hoja de estadísticas, y evaluar si una aplicación nueva es segura y vale la pena antes de registrarte.",
  about: [
    "Este curso es para deportistas y entrenadores que oyen hablar todo el tiempo de aplicaciones de IA y quieren saber cuáles sirven de verdad y cómo usarlas.",
    "Armarás un pequeño kit gratuito: un asistente de IA para planear y escribir, una herramienta de diseño para hacer gráficos y una hoja de cálculo para registrar tus números. También aprenderás una revisión rápida para cualquier aplicación nueva antes de darle tus datos o tu dinero.",
    "Cada lección dura unos cinco minutos y tiene una práctica “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Arma tu kit de deportista: usa un asistente de IA para planear la próxima semana, haz un gráfico de día de partido en Canva y prepara una hoja de Google Sheets que registre una estadística durante cinco sesiones. Luego haz la revisión de cinco preguntas a una aplicación deportiva nueva y anota si la usarías.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria, universidad y clubes, y los entrenadores que trabajan con ellos, que oyen hablar de aplicaciones de IA y quieren saber cuáles sirven de verdad.",
    startingPoint: "Usan el teléfono todos los días para mensajes, redes sociales y videos. Muchos han probado un asistente de IA una o dos veces, pero pocos usan a propósito una herramienta de diseño, una hoja de cálculo o una revisión de privacidad.",
    gap: "A los deportistas les venden muchas aplicaciones que prometen resultados, y muchas veces entregan datos de su cuerpo o dinero sin revisar. Un pequeño kit gratuito bien usado ahorra tiempo en planear, publicar y registrar, y una revisión rápida de aplicaciones protege sus datos, su dinero y su elegibilidad.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de séptimo grado",
      "Un teléfono o una computadora con internet; solo versiones gratuitas de las herramientas",
      "Unos 60 minutos en total, en lecciones cortas que caben entre entrenamientos y clases",
      "Las reglas de la escuela, la liga y el entrenador sobre logotipos, cambios de entrenamiento y consejos de salud van primero",
      "Los datos del cuerpo, de salud y de ubicación son privados y se comparten solo si tú lo eliges"
    ],
    prerequisites: "Ninguno"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante una lista de tareas comunes de deportista o entrenador", action: "identificar qué tipo de herramienta corresponde a cada tarea: un asistente de IA, una herramienta de diseño, una hoja de cálculo o un monitor de actividad", standard: "acertando en al menos 4 de 5 tareas" },
    { id: "O2", condition: "Usando un asistente de IA gratuito y tu horario real", action: "crear un plan semanal en una tabla y mejorarlo con pedidos de seguimiento", standard: "con todos los horarios fijos incluidos y sin cambiar el entrenamiento que definió tu entrenador" },
    { id: "O3", condition: "Usando una plantilla gratuita de Canva", action: "crear un gráfico de día de partido que muestre quiénes, cuándo y dónde con una foto potente", standard: "que se lea en un teléfono en dos segundos y que use solo fotos y logotipos que tienes permiso para usar" },
    { id: "O4", condition: "Usando Google Sheets", action: "preparar una hoja que registre una estadística por fecha y graficar la tendencia", standard: "con al menos tres sesiones ingresadas, la estadística medida siempre de la misma manera y la hoja compartida solo con las personas que elijas" },
    { id: "O5", condition: "Ante una aplicación deportiva o de IA nueva", action: "revisar quién la hace, sus datos, su costo, si encaja con tu equipo y sus promesas con la revisión de cinco preguntas", standard: "respondiendo las cinco preguntas y escribiendo una decisión clara: usarla, probarla con cuidado o dejarla" },
    { id: "O6", condition: "Durante una semana real", action: "planear una rutina semanal que use juntos tu planificador, tu herramienta de diseño y tu hoja de estadísticas", standard: "con un día o momento fijo para cada herramienta y los datos del equipo compartidos solo con el personal que los necesita" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tu kit gratuito de IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Elegir la herramienta según la tarea",
          minutes: 4,
          goal: "Clasificar tareas comunes de deportista según el tipo de herramienta correcto.",
          text: [
            "Hay cientos de aplicaciones de IA, pero la mayoría entra en unos pocos tipos. Los asistentes de IA (ChatGPT, Microsoft Copilot, Google Gemini) escriben, explican y planean. Las herramientas de diseño (como Canva) hacen gráficos y videos cortos. Las hojas de cálculo (Google Sheets, Microsoft Excel) guardan tus números y los convierten en gráficos. Los relojes y pulseras de actividad y las aplicaciones de video del equipo reúnen datos de tu cuerpo o de tus partidos.",
            "Empieza por la tarea, no por la aplicación. “Necesito un plan semanal” apunta a un asistente. “Necesito una publicación para el día de partido” apunta a una herramienta de diseño. “Quiero ver si mi tiempo de velocidad está mejorando” apunta a una hoja de cálculo.",
            "Las versiones gratuitas suelen alcanzar para empezar. Aprende bien una herramienta de cada tipo antes de agregar más."
          ],
          words: [["Asistente de IA", "un programa de IA con el que conversas para escribir, explicar o planear."], ["Hoja de cálculo", "una cuadrícula de filas y columnas para guardar números y hacer gráficos con ellos."]],
          slides: [
            { title: "Cuatro tipos de herramientas", bullets: ["Asistente de IA: escribir, explicar, planear", "Herramienta de diseño: gráficos y videos cortos", "Hoja de cálculo: registrar números y hacer gráficos", "Relojes de actividad y aplicaciones de video: reúnen datos"] },
            { title: "Empieza por la tarea", bullets: ["Plan semanal -> asistente", "Publicación de día de partido -> herramienta de diseño", "¿Mejora mi tiempo? -> hoja de cálculo"] },
            { title: "Mantenlo sencillo", bullets: ["Las versiones gratuitas alcanzan para empezar", "Aprende bien una herramienta de cada tipo"] }
          ],
          tryIt: "Haz una lista de cinco tareas que haces cada semana como deportista o entrenador (por ejemplo planear entrenamientos, publicar en redes sociales, registrar una estadística). Al lado de cada una, escribe qué tipo de herramienta le corresponde.",
          youCanNow: "elegir el tipo de herramienta de IA correcto para una tarea de deportista.",
          quickCheck: [
            { objective: "O1", q: "¿Qué tipo de herramienta guarda tus números y los convierte en un gráfico?", options: ["Un asistente de IA", "Una hoja de cálculo", "Una herramienta de diseño", "Un monitor de actividad física"], answer: 1, why: "Las hojas de cálculo como Google Sheets y Excel guardan números y hacen gráficos con ellos." },
            { objective: "O1", q: "Un compañero quiere probar cinco aplicaciones nuevas esta semana. ¿Qué le sugieres?", options: ["Descargar las cinco hoy", "Pagar la más cara", "Empezar por la tarea y luego aprender bien una herramienta gratuita de ese tipo", "Evitar todas las herramientas"], answer: 2, why: "La lección dice que empieces por la tarea y primero aprendas bien una herramienta de cada tipo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Un asistente de IA como tu planificador",
          minutes: 5,
          goal: "Usar un asistente de IA para convertir tu horario en un plan semanal claro.",
          text: [
            "Un asistente de IA es muy bueno para convertir una lista desordenada en un plan. Dale tus entrenamientos, partidos, clases y turnos de trabajo, y pídele un plan semanal en una tabla.",
            "Sé específico: “Juego voleibol en la universidad. Entreno de 2 a 5 de la tarde de lunes a viernes, y juego los sábados. Tengo clases de 9 a 12. Haz una tabla semanal con bloques de estudio, comidas y horas de sueño.” Luego mejóralo con seguimientos como “Agrega 30 minutos para ver video el miércoles.”",
            "El asistente planea; tu entrenador define el entrenamiento. No le pidas que cambie los ejercicios que escribió tu entrenador, y revisa con tu preparador físico todo lo que tenga que ver con la salud o el descanso."
          ],
          steps: ["Haz una lista de tus horarios fijos: entrenamientos, partidos, clases, trabajo.", "Pide un plan semanal en una tabla.", "Pide un cambio a la vez.", "Copia el plan final en tu calendario o en tus notas."],
          words: [["Seguimiento", "un segundo pedido que cambia la respuesta o se basa en ella."]],
          slides: [
            { title: "Dale tus horarios fijos", bullets: ["Entrenamientos y partidos", "Clases y turnos de trabajo", "Días de viaje"] },
            { title: "Pide una tabla", bullets: ["Bloques de estudio, comidas, sueño", "Luego un cambio a la vez"] },
            { title: "Quién decide qué", bullets: ["La IA organiza tu semana", "El entrenador define el entrenamiento", "El preparador físico, la salud y el descanso"] }
          ],
          tryIt: "Escribe en un asistente de IA tus horarios fijos reales de la próxima semana y pídele un plan semanal en una tabla. Pide una mejora.",
          youCanNow: "convertir tu horario en un plan semanal con un asistente de IA.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace que un pedido de planificación a un asistente de IA funcione bien?", options: ["Dar detalles concretos de tu deporte y tus horarios fijos", "Escribir una sola palabra", "Pedirle que reescriba los entrenamientos de tu entrenador", "Dejar fuera tus clases"], answer: 0, why: "Los detalles concretos de tu horario dan un plan que encaja con tu semana real." },
            { objective: "O2", q: "Tu plan necesita 30 minutos de video el miércoles. ¿Qué haces?", options: ["Empezar un chat nuevo desde cero", "Borrar todo el plan", "Pedirle a tu preparador físico que lo escriba", "Pedirle al asistente ese único cambio como seguimiento"], answer: 3, why: "Los pedidos de seguimiento con un cambio a la vez mejoran el plan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer un gráfico de día de partido con Canva",
          minutes: 5,
          goal: "Hacer un gráfico sencillo para el día de partido usando una plantilla de diseño gratuita.",
          text: [
            "Canva es una herramienta de diseño gratuita en la web y como aplicación. Tiene plantillas listas para publicaciones en redes, volantes e historias, e incluye funciones de IA que pueden sugerir textos o imágenes.",
            "Un gráfico de día de partido limpio tiene cuatro cosas: quiénes juegan, cuándo, dónde y una foto potente. Usa los colores de tu equipo, letra grande y fácil de leer, y nada más.",
            "Usa solo fotos que tomaste tú o que tienes permiso para usar. Muchas escuelas tienen reglas sobre el uso de sus logotipos y nombres, así que pregúntale a tu departamento de deportes antes de publicar un gráfico con logotipos oficiales."
          ],
          steps: ["Abre Canva y busca plantillas de “game day” o “día de partido”.", "Elige una plantilla del tamaño de la red que usas.", "Cambia el texto: rival, fecha, hora, lugar.", "Pon tu propia foto y los colores de tu equipo.", "Descárgalo y revísalo en tu teléfono antes de publicarlo."],
          words: [["Plantilla", "un diseño ya hecho que cambias para hacerlo tuyo."], ["Permiso", "un sí del dueño para usar su foto, su logotipo o su nombre."]],
          slides: [
            { title: "Canva en una línea", bullets: ["Herramienta de diseño gratuita con plantillas listas", "En la web y como aplicación"] },
            { title: "Un gráfico de día de partido limpio", bullets: ["Quiénes, cuándo, dónde", "Una foto potente", "Colores del equipo, letra grande"] },
            { title: "Dentro de las reglas", bullets: ["Usa tus propias fotos o las que puedes usar", "Pregunta antes de usar los logotipos de la escuela"] }
          ],
          tryIt: "Haz en Canva un gráfico de día de partido para tu próximo partido o entrenamiento. Revísalo en tu teléfono: ¿puedes leer la hora y el lugar en dos segundos?",
          youCanNow: "hacer un gráfico limpio de día de partido a partir de una plantilla y usar fotos y logotipos de la forma correcta.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es Canva?", options: ["Una herramienta de diseño gratuita con plantillas para publicaciones y volantes", "Una hoja de cálculo de estadísticas", "Un monitor de actividad física", "Una regla de la escuela sobre logotipos"], answer: 0, why: "Canva es una herramienta de diseño gratuita, en la web y como aplicación, con plantillas listas para usar." },
            { objective: "O3", q: "Terminaste tu gráfico. ¿Qué debes hacer antes de publicarlo?", options: ["Agregar más texto y colores", "Publicarlo de inmediato", "Descargarlo y revisarlo en tu teléfono", "Cambiar la foto por una que encontraste en internet"], answer: 2, why: "Revisarlo en el teléfono muestra si la hora y el lugar se leen rápido." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu kit gratuito de IA",
        questions: [
          { objective: "O1", q: "Quieres ver si tu tiempo de velocidad está mejorando. ¿Qué tipo de herramienta es el mejor?", options: ["Una herramienta de diseño", "Una aplicación de música", "Una hoja de cálculo", "Un filtro de fotos"], answer: 2, why: "Las hojas de cálculo guardan números y muestran gráficos con el tiempo." },
          { objective: "O1", q: "¿Por dónde debes empezar al elegir una herramienta?", options: ["Por la tarea que necesitas hacer", "Por la aplicación más popular", "Por la aplicación más cara", "Por lo que te recomiende un desconocido"], answer: 0, why: "Empieza por la tarea y luego elige el tipo de herramienta que le corresponde." },
          { objective: "O2", q: "Un asistente de IA te sugiere cambiar el entrenamiento que escribió tu entrenador. ¿Qué haces?", options: ["Sigues a la IA", "Faltas al entrenamiento", "Lo publicas", "Mantienes el entrenamiento de tu entrenador y le preguntas si tienes dudas"], answer: 3, why: "La IA organiza tu semana; tu entrenador define el entrenamiento." },
          { objective: "O3", q: "¿Qué cuatro cosas van en un gráfico de día de partido?", options: ["Tu contraseña, dirección, teléfono y correo", "Quiénes, cuándo, dónde y una foto potente", "Diez fotos y cinco tipos de letra", "Solo un logotipo"], answer: 1, why: "Los datos claros y una foto potente hacen un gráfico fácil de leer." },
          { objective: "O3", q: "Quieres usar el logotipo de tu escuela en una publicación. ¿Qué debes hacer primero?", options: ["Copiarlo del sitio web", "Preguntarle a tu departamento de deportes", "Cambiarle los colores", "Usarlo y esperar que no pase nada"], answer: 1, why: "Muchas escuelas tienen reglas sobre sus logotipos, así que pregunta primero." }
        ]
      }
    },
    {
      name: "Capítulo 2: Registrar, evaluar y armar tu kit",
      lessons: [
        {
          objectives: ["O4"],
          title: "Registrar una estadística en Google Sheets",
          minutes: 5,
          goal: "Preparar una hoja que registre una estadística y la muestre en un gráfico.",
          text: [
            "Elige una estadística que te importe y que puedas medir siempre de la misma manera: tiros libres encestados de 20, tiempo en 40 yardas, tiempo en una milla o precisión del saque.",
            "En Google Sheets, haz dos columnas: Fecha y tu estadística. Agrega una fila después de cada sesión. Cuando tengas algunas filas, selecciona las dos columnas e inserta un gráfico para ver la tendencia.",
            "Puedes pedirle a un asistente de IA que te explique los pasos de la hoja de cálculo o una fórmula, como sacar tu promedio. Mantén la hoja privada, a menos que decidas compartirla con tu entrenador."
          ],
          steps: ["Abre Google Sheets y empieza una hoja en blanco.", "Escribe “Fecha” en A1 y tu estadística en B1.", "Agrega una fila después de cada sesión.", "Selecciona las dos columnas e inserta un gráfico.", "Compártela solo con tu entrenador si quieres su opinión."],
          words: [["Tendencia", "la dirección en que se mueven tus números con el tiempo: hacia arriba, hacia abajo o planos."], ["Fórmula", "una instrucción corta en una celda que hace un cálculo, como un promedio."]],
          slides: [
            { title: "Elige una estadística", bullets: ["Medida siempre de la misma manera", "Ejemplos: tiros libres de 20, tiempo en una milla"] },
            { title: "Prepara la hoja", bullets: ["Columna A: Fecha", "Columna B: tu estadística", "Una fila por sesión"] },
            { title: "Mira la tendencia", bullets: ["Selecciona las dos columnas e inserta un gráfico", "Pídele a la IA que te explique una fórmula si te trabas"] }
          ],
          tryIt: "Prepara una hoja de Google Sheets para una estadística. Ingresa al menos tres sesiones pasadas (o números de práctica) e inserta un gráfico.",
          youCanNow: "registrar una estadística en una hoja de cálculo y hacer un gráfico para ver tu tendencia.",
          quickCheck: [
            { objective: "O4", q: "¿Con qué dos columnas empieza tu hoja de estadísticas?", options: ["Nombre y equipo", "Rival y marcador", "Entrenador y posición", "La fecha y tu estadística"], answer: 3, why: "La fecha en la columna A y la estadística en la columna B te dejan ver la tendencia con el tiempo." },
            { objective: "O4", q: "Quieres comentarios sobre tu hoja de estadísticas. ¿Qué haces?", options: ["Publicar el enlace para todos", "Compartirla solo con tu entrenador", "Enviarla al otro equipo", "Imprimirla para la pared del vestuario"], answer: 1, why: "Mantén la hoja privada y compártela solo con las personas que elijas, como tu entrenador." }
          ]
        },
        {
          objectives: ["O5"],
          title: "La revisión de cinco preguntas para aplicaciones",
          minutes: 5,
          goal: "Evaluar una aplicación deportiva o de IA nueva antes de darle tus datos o tu dinero.",
          text: [
            "Las aplicaciones nuevas prometen hacerte más rápido, conseguir que te recluten o aumentar tus seguidores. Antes de registrarte, haz una revisión rápida de cinco preguntas.",
            "1. ¿Quién la hace, y está en la tienda de aplicaciones oficial? 2. ¿Qué datos reúne, y puedes borrarlos? (Lee el resumen de la política de privacidad.) 3. ¿Cuánto cuesta después de la prueba gratuita? 4. ¿Tu entrenador o tu escuela ya usan algo parecido? 5. ¿Promete resultados demasiado buenos, como becas garantizadas?",
            "Los datos de tu cuerpo y tu salud, como el ritmo cardíaco, el sueño y la ubicación, son privados. Compártelos solo con aplicaciones de confianza y desactiva la ubicación que no necesites compartir."
          ],
          steps: ["Revisa quién la hace y que esté en la tienda oficial.", "Lee qué datos reúne y cómo borrarlos.", "Busca el precio después de cualquier prueba gratuita.", "Pregúntale a tu entrenador qué usa ya el equipo.", "Aléjate de los resultados garantizados."],
          words: [["Política de privacidad", "la explicación de la aplicación sobre qué datos reúne y qué hace con ellos."], ["Prueba gratuita", "un periodo corto gratis antes de que la aplicación empiece a cobrar."]],
          slides: [
            { title: "Antes de registrarte", bullets: ["¿Quién la hace? ¿Está en la tienda oficial?", "¿Qué datos reúne?", "¿Cuánto cuesta después de la prueba?"] },
            { title: "Dos preguntas más", bullets: ["¿Mi equipo ya usa algo así?", "¿Promete demasiado?"] },
            { title: "Protege los datos de tu cuerpo", bullets: ["Ritmo cardíaco, sueño y ubicación son privados", "Desactiva la ubicación que no necesitas"] }
          ],
          tryIt: "Elige una aplicación deportiva o de IA que hayas visto en un anuncio. Responde las cinco preguntas sobre ella en una nota y decide: usarla, probarla con cuidado o dejarla.",
          youCanNow: "revisar quién hace una aplicación nueva, qué datos reúne, cuánto cuesta y qué promete antes de registrarte.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál de estas es una de las cinco preguntas de la revisión de aplicaciones?", options: ["¿De qué color es el logotipo?", "¿Cuántos anuncios muestra?", "¿Cuánto cuesta cuando termina la prueba gratuita?", "¿Tiene modo oscuro?"], answer: 2, why: "El precio después de la prueba es la pregunta 3 de la revisión de cinco preguntas." },
            { objective: "O5", q: "Una aplicación de entrenamiento pide compartir tu ubicación todo el tiempo, pero no la necesita. ¿Qué haces?", options: ["Desactivar la ubicación compartida", "Permitirla para que la aplicación funcione más rápido", "Compartir también tu ritmo cardíaco", "Darle tu contraseña"], answer: 0, why: "La ubicación es un dato privado, así que desactiva lo que no necesitas compartir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Juntar tu kit de herramientas",
          minutes: 5,
          goal: "Usar las tres herramientas juntas durante una semana real.",
          text: [
            "Tu kit funciona mejor como rutina semanal. Domingo: usa tu asistente de IA para planear la semana. Antes de un partido: haz el gráfico. Después de cada sesión: agrega tu estadística a la hoja.",
            "Escribe una lista corta de tus herramientas y para qué sirve cada una, así no estás probando aplicaciones nuevas cada semana. Agrega una herramienta nueva solo cuando tengas una tarea que tu kit no puede hacer.",
            "Los entrenadores pueden usar el mismo kit para un equipo: un plan semanal para el cuerpo técnico, un gráfico por partido y una hoja compartida con las estadísticas del equipo. Comparte las hojas del equipo solo con el personal que las necesita."
          ],
          steps: ["Escribe tu lista de herramientas: planificador, diseño, hoja.", "Domingo: planea la semana con el asistente.", "Semana de partido: haz un gráfico.", "Después de cada sesión: agrega tu estadística.", "Revisa el gráfico con tu entrenador cada pocas semanas."],
          words: [["Rutina", "pasos que repites a la misma hora cada semana."], ["Kit de herramientas", "el pequeño grupo de herramientas que usas una y otra vez."]],
          slides: [
            { title: "Tu rutina semanal", bullets: ["Domingo: planea la semana", "Semana de partido: un gráfico", "Después de cada sesión: agrega tu estadística"] },
            { title: "Un kit pequeño", bullets: ["Escribe para qué sirve cada herramienta", "Agrega una herramienta solo para una tarea nueva"] },
            { title: "Para entrenadores", bullets: ["Plan semanal del cuerpo técnico", "Un gráfico por partido", "Hoja de estadísticas compartida solo con el personal"] }
          ],
          tryIt: "Tarea final: planea la próxima semana con un asistente de IA, haz un gráfico de día de partido en Canva, prepara una hoja que registre una estadística y haz la revisión de cinco preguntas a una aplicación nueva.",
          youCanNow: "usar juntas un pequeño grupo de herramientas de IA gratuitas como rutina semanal.",
          quickCheck: [
            { objective: "O6", q: "En la rutina semanal, ¿cuándo agregas tu estadística a la hoja?", options: ["Una vez por temporada", "Solo antes de los partidos", "Solo cuando logras un récord", "Después de cada sesión"], answer: 3, why: "Agregar la estadística después de cada sesión mantiene completa la tendencia." },
            { objective: "O6", q: "Tienes una tarea que tu kit actual no puede hacer. ¿Qué haces?", options: ["Probar igual una aplicación nueva cada semana", "Agregar una herramienta nueva para esa tarea y hacerle la revisión de aplicaciones", "Abandonar la tarea", "Cambiar todo tu kit"], answer: 1, why: "Agrega una herramienta nueva solo cuando tengas una tarea que tu kit no puede hacer, y revísala primero." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Registrar, evaluar y armar tu kit",
        questions: [
          { objective: "O4", q: "¿Qué hace que una estadística sea buena para registrar?", options: ["Cambia la forma de medirla cada semana", "Solo tu entrenador la puede ver", "Es una suposición", "Puedes medirla siempre de la misma manera"], answer: 3, why: "Medir siempre igual hace que la tendencia tenga sentido." },
          { objective: "O4", q: "En tu hoja, ¿qué va en la columna A?", options: ["La fecha", "Tu contraseña", "El nombre de tu rival", "Tu dirección"], answer: 0, why: "La fecha en la columna A y la estadística en la B te dejan graficar la tendencia." },
          { objective: "O5", q: "Una aplicación promete una beca garantizada si pagas. ¿Qué dice la revisión de aplicaciones?", options: ["Paga de inmediato", "Comparte tu ubicación", "Promete demasiado, así que aléjate", "Dale tu código de inicio de sesión"], answer: 2, why: "Los resultados garantizados son una señal de alerta." },
          { objective: "O5", q: "¿Cuál es un dato privado de tu cuerpo?", options: ["El color de tu camiseta", "El nombre de tu equipo", "Tu ejercicio favorito", "Tu ritmo cardíaco y tu sueño"], answer: 3, why: "El ritmo cardíaco, el sueño y la ubicación son datos privados." },
          { objective: "O6", q: "¿Cuándo debes agregar una herramienta nueva a tu kit?", options: ["Cada semana", "Cuando tengas una tarea que tu kit no puede hacer", "Cuando un amigo publique sobre una", "Nunca"], answer: 1, why: "Un kit pequeño que conoces bien es mejor que muchas aplicaciones que casi no usas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA para deportistas",
    questions: [
      { objective: "O1", q: "¿Qué tipo de herramienta escribe, explica y planea?", options: ["Un cronómetro", "Solo una hoja de cálculo", "Un asistente de IA", "Una cámara"], answer: 2, why: "Los asistentes de IA como ChatGPT, Copilot y Gemini escriben y planean." },
      { objective: "O1", q: "¿Cuál es una herramienta de diseño gratuita con plantillas?", options: ["Canva", "Una calculadora", "Un marcador", "Un libro de jugadas"], answer: 0, why: "Canva tiene plantillas gratuitas para publicaciones y volantes." },
      { objective: "O1", q: "“Necesito una publicación para el día de partido” apunta a:", options: ["Una herramienta de diseño", "Una hoja de cálculo", "Un reloj de actividad", "Un monitor de ritmo cardíaco"], answer: 0, why: "Los gráficos son tarea de una herramienta de diseño." },
      { objective: "O1", q: "¿Cuántas herramientas de cada tipo debes aprender primero?", options: ["Cinco", "Todas las que puedas", "Una, y bien", "Ninguna"], answer: 2, why: "Aprender bien una de cada tipo es la forma más rápida de empezar." },
      { objective: "O2", q: "¿Qué debes darle a un asistente de IA para hacer un plan semanal?", options: ["Tu contraseña", "Tus horarios fijos: entrenamientos, partidos, clases", "Tu historial médico", "Tu número de banco"], answer: 1, why: "Los horarios fijos le permiten armar el plan alrededor de tu semana." },
      { objective: "O2", q: "¿Quién define tu entrenamiento?", options: ["La IA", "Un anuncio", "Una aplicación cualquiera", "Tu entrenador"], answer: 3, why: "El asistente organiza; el entrenador define el entrenamiento." },
      { objective: "O2", q: "La mejor forma de mejorar el plan de la IA es:", options: ["Aceptar el primero", "Escribir tu contraseña", "Un cambio a la vez", "Pelearte con ella"], answer: 2, why: "Un cambio claro a la vez lo mantiene encaminado." },
      { objective: "O3", q: "Un gráfico de día de partido fácil de leer tiene:", options: ["Letra diminuta y diez fotos", "Solo emojis", "Tu número de teléfono", "Quiénes, cuándo, dónde y una foto potente"], answer: 3, why: "Los datos claros y una foto se leen rápido." },
      { objective: "O3", q: "¿Qué fotos puedes usar en tu gráfico?", options: ["Tus propias fotos o las que tienes permiso para usar", "Cualquier foto de internet", "Fotos de la página de un rival", "Fotos de desconocidos"], answer: 0, why: "Usa fotos tuyas o que tienes permiso para usar." },
      { objective: "O3", q: "Antes de usar el logotipo de tu escuela, debes:", options: ["Redibujarlo", "Preguntarle a tu departamento de deportes", "Usarlo igual", "Comprarlo en internet"], answer: 1, why: "Las escuelas suelen tener reglas sobre sus logotipos." },
      { objective: "O4", q: "¿Qué estadística es fácil de registrar siempre de la misma manera?", options: ["Cómo te sentiste en el viaje en autobús", "Lo que pensó el público", "Tiros libres encestados de 20", "El ánimo de tu rival"], answer: 2, why: "Una prueba fija, como encestados de 20, es constante." },
      { objective: "O4", q: "¿Cómo ves tu tendencia en Google Sheets?", options: ["Seleccionas las columnas e insertas un gráfico", "La imprimes", "Borras las filas viejas", "Se la envías por correo a un desconocido"], answer: 0, why: "Un gráfico muestra la dirección de tus números." },
      { objective: "O4", q: "Te trabaste con la fórmula de tu promedio. Una buena jugada es:", options: ["Dejar de registrar", "Adivinar el número", "Compartir tu contraseña", "Pedirle a un asistente de IA que te explique la fórmula"], answer: 3, why: "Los asistentes de IA explican bien los pasos de las hojas de cálculo." },
      { objective: "O4", q: "¿Quién debe ver tu hoja personal de estadísticas?", options: ["Todo el mundo en internet", "Solo las personas que elijas, como tu entrenador", "Los equipos rivales", "Desconocidos"], answer: 1, why: "Mantenla privada y compártela solo si lo decides." },
      { objective: "O5", q: "¿Qué te dice una política de privacidad?", options: ["Los colores de la aplicación", "Qué datos reúne la aplicación y qué hace con ellos", "Tu entrenamiento", "El resultado del partido"], answer: 1, why: "Explica cómo maneja tus datos la aplicación." },
      { objective: "O5", q: "Antes de una prueba gratuita, debes revisar:", options: ["El logotipo de la aplicación", "La aplicación de tu rival", "Nada", "El precio cuando termine la prueba"], answer: 3, why: "Muchas aplicaciones empiezan a cobrar después de la prueba." },
      { objective: "O5", q: "¿Qué promesa de una aplicación es una señal de alerta?", options: ["“Beca garantizada”", "“Registra tus carreras”", "“Haz gráficos”", "“Plantillas gratuitas”"], answer: 0, why: "Nadie puede garantizar una beca." },
      { objective: "O5", q: "La ubicación que no necesitas compartir debe estar:", options: ["Compartida con todos", "Publicada en internet", "Desactivada", "Activada para siempre"], answer: 2, why: "La ubicación es un dato privado; compártela solo cuando haga falta." },
      { objective: "O6", q: "En la rutina semanal, ¿cuándo planeas la semana?", options: ["Después de la temporada", "Nunca", "Durante el partido", "El domingo, con tu asistente de IA"], answer: 3, why: "Planear al comienzo de la semana prepara todo lo demás." },
      { objective: "O6", q: "Un entrenador comparte una hoja con las estadísticas del equipo. ¿Quién debe tener acceso?", options: ["Cualquiera con el enlace en internet", "Solo el personal que la necesita", "Los entrenadores rivales", "Los aficionados"], answer: 1, why: "Los datos del equipo deben ir solo a quienes los necesitan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      7,
      10,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Plan semanal",
        objective: "O2",
        notYet: "Al plan le faltan horarios fijos, o cambia el entrenamiento del entrenador.",
        meets: "Una tabla semanal con todos los horarios fijos, estudio, comidas y sueño, mejorada con al menos un seguimiento.",
        exceeds: "El plan está copiado en un calendario y las preguntas de salud o descanso están anotadas para el preparador físico."
      },
      {
        name: "Gráfico de día de partido",
        objective: "O3",
        notYet: "Falta quiénes, cuándo o dónde, cuesta leerlo en un teléfono, o usa fotos o logotipos sin permiso.",
        meets: "Muestra quiénes, cuándo, dónde y una foto potente, se lee en un teléfono en dos segundos y usa solo imágenes permitidas.",
        exceeds: "Usa los colores del equipo, tiene el tamaño correcto para la plataforma y el uso del logotipo fue aprobado por el departamento de deportes."
      },
      {
        name: "Hoja de estadísticas",
        objective: "O4",
        notYet: "No tiene fechas, tiene menos de tres sesiones o no tiene gráfico.",
        meets: "Columnas de fecha y estadística, al menos tres sesiones medidas de la misma manera y un gráfico de la tendencia.",
        exceeds: "Tiene cinco sesiones ingresadas, un promedio agregado y la hoja compartida solo con el entrenador para recibir comentarios."
      },
      {
        name: "Revisión de la aplicación",
        objective: "O5",
        notYet: "Algunas de las cinco preguntas no tienen respuesta o no hay una decisión.",
        meets: "Las cinco preguntas respondidas y una decisión clara: usarla, probarla con cuidado o dejarla.",
        exceeds: "La decisión da razones a partir de la política de privacidad y el precio, y se desactivó el intercambio de datos que no hace falta."
      },
      {
        name: "Rutina del kit",
        objective: "O6",
        notYet: "No hay lista de herramientas, o no hay un momento fijo para cada herramienta.",
        meets: "Una lista escrita de herramientas con un día o momento fijo para planear, hacer gráficos y registrar estadísticas.",
        exceeds: "La rutina incluye revisar el gráfico con el entrenador con regularidad y una regla para saber cuándo agregar una herramienta nueva."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan la tarea final y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que siguen usando un plan semanal y una hoja de estadísticas 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber dejado o borrado una aplicación, o desactivado el intercambio de datos, después de hacer la revisión de aplicaciones",
      "Participantes que toman otro curso de la categoría Athletes, como IA para el entrenamiento y el rendimiento"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Una cuenta gratuita de Canva",
      "Una cuenta gratuita de Google para usar Google Sheets",
      "Tu horario de la próxima semana y una estadística que puedas medir",
      "Unos 60 minutos, repartidos en varios días"
    ],
    facilitatorNotes: [
      "Hazlo como una sesión de equipo: todos usan las mismas tres herramientas gratuitas para que los deportistas se ayuden entre sí.",
      "Recuerda a los deportistas que el asistente planea la semana, pero el entrenamiento lo define el entrenador; las preguntas de salud y descanso van al preparador físico.",
      "Revisa las reglas de la escuela o la liga sobre logotipos y publicaciones de deportistas antes de la lección del gráfico.",
      "No reúnas tú mismo datos del cuerpo o de salud de los deportistas; las hojas de estadísticas son privadas, salvo que el deportista decida compartirlas.",
      "Pide a los deportistas que empiecen pronto la hoja de estadísticas para que tengan de tres a cinco sesiones al llegar a la tarea final."
    ]
  }
};

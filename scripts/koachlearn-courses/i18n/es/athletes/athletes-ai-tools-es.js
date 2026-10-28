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
  chapters: [
    {
      name: "Capítulo 1: Tu kit gratuito de IA",
      lessons: [
        {
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
          youCanNow: "elegir el tipo de herramienta de IA correcto para una tarea de deportista."
        },
        {
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
          youCanNow: "convertir tu horario en un plan semanal con un asistente de IA."
        },
        {
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
          youCanNow: "hacer un gráfico limpio de día de partido a partir de una plantilla y usar fotos y logotipos de la forma correcta."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu kit gratuito de IA",
        questions: [
          { q: "Quieres ver si tu tiempo de velocidad está mejorando. ¿Qué tipo de herramienta es el mejor?", options: ["Una herramienta de diseño", "Una aplicación de música", "Una hoja de cálculo", "Un filtro de fotos"], answer: 2, why: "Las hojas de cálculo guardan números y muestran gráficos con el tiempo." },
          { q: "¿Por dónde debes empezar al elegir una herramienta?", options: ["Por la tarea que necesitas hacer", "Por la aplicación más popular", "Por la aplicación más cara", "Por lo que te recomiende un desconocido"], answer: 0, why: "Empieza por la tarea y luego elige el tipo de herramienta que le corresponde." },
          { q: "Un asistente de IA te sugiere cambiar el entrenamiento que escribió tu entrenador. ¿Qué haces?", options: ["Sigues a la IA", "Faltas al entrenamiento", "Lo publicas", "Mantienes el entrenamiento de tu entrenador y le preguntas si tienes dudas"], answer: 3, why: "La IA organiza tu semana; tu entrenador define el entrenamiento." },
          { q: "¿Qué cuatro cosas van en un gráfico de día de partido?", options: ["Tu contraseña, dirección, teléfono y correo", "Quiénes, cuándo, dónde y una foto potente", "Diez fotos y cinco tipos de letra", "Solo un logotipo"], answer: 1, why: "Los datos claros y una foto potente hacen un gráfico fácil de leer." },
          { q: "Quieres usar el logotipo de tu escuela en una publicación. ¿Qué debes hacer primero?", options: ["Copiarlo del sitio web", "Preguntarle a tu departamento de deportes", "Cambiarle los colores", "Usarlo y esperar que no pase nada"], answer: 1, why: "Muchas escuelas tienen reglas sobre sus logotipos, así que pregunta primero." }
        ]
      }
    },
    {
      name: "Capítulo 2: Registrar, evaluar y armar tu kit",
      lessons: [
        {
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
          youCanNow: "registrar una estadística en una hoja de cálculo y hacer un gráfico para ver tu tendencia."
        },
        {
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
          youCanNow: "revisar quién hace una aplicación nueva, qué datos reúne, cuánto cuesta y qué promete antes de registrarte."
        },
        {
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
          youCanNow: "usar juntas un pequeño grupo de herramientas de IA gratuitas como rutina semanal."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Registrar, evaluar y armar tu kit",
        questions: [
          { q: "¿Qué hace que una estadística sea buena para registrar?", options: ["Cambia la forma de medirla cada semana", "Solo tu entrenador la puede ver", "Es una suposición", "Puedes medirla siempre de la misma manera"], answer: 3, why: "Medir siempre igual hace que la tendencia tenga sentido." },
          { q: "En tu hoja, ¿qué va en la columna A?", options: ["La fecha", "Tu contraseña", "El nombre de tu rival", "Tu dirección"], answer: 0, why: "La fecha en la columna A y la estadística en la B te dejan graficar la tendencia." },
          { q: "Una aplicación promete una beca garantizada si pagas. ¿Qué dice la revisión de aplicaciones?", options: ["Paga de inmediato", "Comparte tu ubicación", "Promete demasiado, así que aléjate", "Dale tu código de inicio de sesión"], answer: 2, why: "Los resultados garantizados son una señal de alerta." },
          { q: "¿Cuál es un dato privado de tu cuerpo?", options: ["El color de tu camiseta", "El nombre de tu equipo", "Tu ejercicio favorito", "Tu ritmo cardíaco y tu sueño"], answer: 3, why: "El ritmo cardíaco, el sueño y la ubicación son datos privados." },
          { q: "¿Cuándo debes agregar una herramienta nueva a tu kit?", options: ["Cada semana", "Cuando tengas una tarea que tu kit no puede hacer", "Cuando un amigo publique sobre una", "Nunca"], answer: 1, why: "Un kit pequeño que conoces bien es mejor que muchas aplicaciones que casi no usas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA para deportistas",
    questions: [
      { q: "¿Qué tipo de herramienta escribe, explica y planea?", options: ["Un cronómetro", "Solo una hoja de cálculo", "Un asistente de IA", "Una cámara"], answer: 2, why: "Los asistentes de IA como ChatGPT, Copilot y Gemini escriben y planean." },
      { q: "¿Cuál es una herramienta de diseño gratuita con plantillas?", options: ["Canva", "Una calculadora", "Un marcador", "Un libro de jugadas"], answer: 0, why: "Canva tiene plantillas gratuitas para publicaciones y volantes." },
      { q: "“Necesito una publicación para el día de partido” apunta a:", options: ["Una herramienta de diseño", "Una hoja de cálculo", "Un reloj de actividad", "Un monitor de ritmo cardíaco"], answer: 0, why: "Los gráficos son tarea de una herramienta de diseño." },
      { q: "¿Cuántas herramientas de cada tipo debes aprender primero?", options: ["Cinco", "Todas las que puedas", "Una, y bien", "Ninguna"], answer: 2, why: "Aprender bien una de cada tipo es la forma más rápida de empezar." },
      { q: "¿Qué debes darle a un asistente de IA para hacer un plan semanal?", options: ["Tu contraseña", "Tus horarios fijos: entrenamientos, partidos, clases", "Tu historial médico", "Tu número de banco"], answer: 1, why: "Los horarios fijos le permiten armar el plan alrededor de tu semana." },
      { q: "¿Quién define tu entrenamiento?", options: ["La IA", "Un anuncio", "Una aplicación cualquiera", "Tu entrenador"], answer: 3, why: "El asistente organiza; el entrenador define el entrenamiento." },
      { q: "La mejor forma de mejorar el plan de la IA es:", options: ["Aceptar el primero", "Escribir tu contraseña", "Un cambio a la vez", "Pelearte con ella"], answer: 2, why: "Un cambio claro a la vez lo mantiene encaminado." },
      { q: "Un gráfico de día de partido fácil de leer tiene:", options: ["Letra diminuta y diez fotos", "Solo emojis", "Tu número de teléfono", "Quiénes, cuándo, dónde y una foto potente"], answer: 3, why: "Los datos claros y una foto se leen rápido." },
      { q: "¿Qué fotos puedes usar en tu gráfico?", options: ["Tus propias fotos o las que tienes permiso para usar", "Cualquier foto de internet", "Fotos de la página de un rival", "Fotos de desconocidos"], answer: 0, why: "Usa fotos tuyas o que tienes permiso para usar." },
      { q: "Antes de usar el logotipo de tu escuela, debes:", options: ["Redibujarlo", "Preguntarle a tu departamento de deportes", "Usarlo igual", "Comprarlo en internet"], answer: 1, why: "Las escuelas suelen tener reglas sobre sus logotipos." },
      { q: "¿Qué estadística es fácil de registrar siempre de la misma manera?", options: ["Cómo te sentiste en el viaje en autobús", "Lo que pensó el público", "Tiros libres encestados de 20", "El ánimo de tu rival"], answer: 2, why: "Una prueba fija, como encestados de 20, es constante." },
      { q: "¿Cómo ves tu tendencia en Google Sheets?", options: ["Seleccionas las columnas e insertas un gráfico", "La imprimes", "Borras las filas viejas", "Se la envías por correo a un desconocido"], answer: 0, why: "Un gráfico muestra la dirección de tus números." },
      { q: "Te trabaste con la fórmula de tu promedio. Una buena jugada es:", options: ["Dejar de registrar", "Adivinar el número", "Compartir tu contraseña", "Pedirle a un asistente de IA que te explique la fórmula"], answer: 3, why: "Los asistentes de IA explican bien los pasos de las hojas de cálculo." },
      { q: "¿Quién debe ver tu hoja personal de estadísticas?", options: ["Todo el mundo en internet", "Solo las personas que elijas, como tu entrenador", "Los equipos rivales", "Desconocidos"], answer: 1, why: "Mantenla privada y compártela solo si lo decides." },
      { q: "¿Qué te dice una política de privacidad?", options: ["Los colores de la aplicación", "Qué datos reúne la aplicación y qué hace con ellos", "Tu entrenamiento", "El resultado del partido"], answer: 1, why: "Explica cómo maneja tus datos la aplicación." },
      { q: "Antes de una prueba gratuita, debes revisar:", options: ["El logotipo de la aplicación", "La aplicación de tu rival", "Nada", "El precio cuando termine la prueba"], answer: 3, why: "Muchas aplicaciones empiezan a cobrar después de la prueba." },
      { q: "¿Qué promesa de una aplicación es una señal de alerta?", options: ["“Beca garantizada”", "“Registra tus carreras”", "“Haz gráficos”", "“Plantillas gratuitas”"], answer: 0, why: "Nadie puede garantizar una beca." },
      { q: "La ubicación que no necesitas compartir debe estar:", options: ["Compartida con todos", "Publicada en internet", "Desactivada", "Activada para siempre"], answer: 2, why: "La ubicación es un dato privado; compártela solo cuando haga falta." },
      { q: "En la rutina semanal, ¿cuándo planeas la semana?", options: ["Después de la temporada", "Nunca", "Durante el partido", "El domingo, con tu asistente de IA"], answer: 3, why: "Planear al comienzo de la semana prepara todo lo demás." },
      { q: "Un entrenador comparte una hoja con las estadísticas del equipo. ¿Quién debe tener acceso?", options: ["Cualquiera con el enlace en internet", "Solo el personal que la necesita", "Los entrenadores rivales", "Los aficionados"], answer: 1, why: "Los datos del equipo deben ir solo a quienes los necesitan." }
    ]
  }
};

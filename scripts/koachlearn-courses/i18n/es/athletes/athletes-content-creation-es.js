"use strict";

// Koach Learn course (Spanish translation of athletes-content-creation). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-content-creation-es",
  lang: "es",
  translationOf: "athletes-content-creation",
  category: "Athletes",
  name: "Creación de contenido para atletas",
  skills: "Planear un video corto con gancho, Grabar con el teléfono, Editar con una app gratuita, Escribir textos y subtítulos con IA, Armar un calendario de contenido de dos semanas",
  outcome: "planear, grabar, editar y publicar un video de atleta de 30 a 60 segundos con un gancho fuerte, subtítulos claros y texto en pantalla, y programar las próximas dos semanas de contenido en un calendario sencillo.",
  about: [
    "Este curso es para atletas y entrenadores que quieren hacer videos cortos que la gente sí vea: clips de entrenamiento, momentos del día de partido, detrás de cámaras y consejos.",
    "Solo necesitas un teléfono y herramientas gratuitas. Vas a planear un video con un gancho, grabarlo bien, editarlo con una app gratuita como CapCut o el editor que trae tu teléfono, escribir textos con ayuda de la IA y planear dos semanas de publicaciones.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz y publica un video de atleta de 30 a 60 segundos: un plan escrito en tres partes (gancho, valor, cierre), grabado con tu teléfono con buena luz y buen sonido, editado con texto en pantalla y subtítulos, y con un texto de publicación escrito con IA y corregido por ti. Luego llena un calendario de contenido de dos semanas con seis ideas más.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria, universidad y clubes, y entrenadores, que quieren hacer videos cortos que la gente de verdad vea: clips de entrenamiento, momentos del día de partido, detrás de cámaras y consejos.",
    startingPoint: "Graban y publican con el teléfono y ven videos cortos todos los días. La mayoría graba sin un plan, publica clips con tiempo muerto, sin subtítulos y con música ajena, y publica cuando se acuerda en lugar de seguir un calendario.",
    gap: "Los videos sin plan pierden a la gente en los primeros segundos, pueden quedar silenciados por la música y pueden romper las reglas de aviso cuando hay marcas de por medio. Un video planeado, bien grabado y con subtítulos, más un calendario sencillo, permite a los deportistas contar su historia con regularidad sin perjudicar el entrenamiento ni la escuela.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de séptimo grado",
      "Un teléfono con cámara, una app de edición gratuita y un asistente de IA gratuito",
      "Unos 60 minutos de lecciones más tiempo para grabar y editar un video",
      "Permiso para grabar a compañeros, entrenadores y otras personas; las reglas de grabación del equipo",
      "Solo música con licencia; las reglas de aviso de la FTC y de NIL si hay alguna marca de por medio"
    ],
    prerequisites: "Ninguno. \"Marca personal en redes sociales para deportistas\" te ayuda a elegir primero tus pilares de contenido."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una idea de tus pilares de contenido", action: "planear un video corto con gancho, valor y cierre", standard: "con un gancho para los primeros 1 a 3 segundos y una llamada a la acción o un final claro, escritos antes de grabar" },
    { id: "O2", condition: "Usando tu teléfono", action: "grabar clips verticales limpios con buena luz, encuadre estable y sonido claro", standard: "de frente a la luz, con la acción en el centro y con permiso de cualquier otra persona que salga en la toma" },
    { id: "O3", condition: "Con tus clips", action: "elegir y ordenar tomas abiertas, medias y primeros planos para contar una historia de problema, trabajo y resultado", standard: "con cada clip ayudando a la historia y sin resultados falsos" },
    { id: "O4", condition: "Usando una app de edición gratuita", action: "editar tus clips en un video de 30 a 60 segundos con texto en pantalla, subtítulos y música con licencia", standard: "sin tiempo muerto, con texto que se lee en un teléfono y subtítulos revisados para corregir errores" },
    { id: "O5", condition: "Usando un asistente de IA", action: "escribir el texto de una publicación con tu propia voz y unos pocos hashtags relacionados", standard: "etiquetando solo a personas que aceptaron y avisando cualquier beneficio de una marca en el video y cerca del inicio del texto" },
    { id: "O6", condition: "Usando Google Sheets o una app de notas", action: "planear dos semanas de publicaciones en un calendario de contenido", standard: "con 3 a 4 publicaciones por semana, columnas de Fecha, Pilar, Idea, Formato y Estado, y las semanas ocupadas bloqueadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear y grabar",
      lessons: [
        {
          objectives: ["O1"],
          title: "El video corto en tres partes",
          minutes: 5,
          goal: "Planear un video corto con gancho, valor y cierre.",
          text: [
            "Muchas veces la gente ve un video corto solo uno o dos segundos antes de seguir deslizando. El primer momento, llamado gancho, decide si se quedan.",
            "Planea tres partes: 1. Gancho (los primeros 1 a 3 segundos): una pregunta, un momento sorprendente o una frase fuerte como \"El ejercicio que arregló mi tiro en suspensión.\" 2. Valor (el medio): muestra el ejercicio, el momento o el consejo. 3. Cierre: una llamada a la acción como \"Guarda esto para tu entrenamiento\" o un final que deje satisfecho.",
            "Escribe el plan antes de grabar. Un asistente de IA te puede dar diez ideas de gancho: \"Dame 10 ganchos cortos para un video que muestra mi calentamiento de pies de 5 minutos para baloncesto.\""
          ],
          steps: ["Elige una idea de tus pilares de contenido.", "Escribe un gancho para los primeros 1-3 segundos.", "Haz la lista de tomas que muestran el valor.", "Escribe el cierre o la llamada a la acción.", "Pide a la IA más ideas de gancho y elige la mejor."],
          words: [["Gancho", "los primeros 1 a 3 segundos que hacen que la gente quiera seguir viendo."], ["Llamada a la acción", "un siguiente paso claro que le pides al público."]],
          slides: [
            { title: "Por qué importa el gancho", bullets: ["La gente decide en uno o dos segundos", "Gancho = los primeros 1-3 segundos"] },
            { title: "Tres partes", bullets: ["1. Gancho: pregunta, sorpresa, frase fuerte", "2. Valor: el ejercicio, el momento o el consejo", "3. Cierre: llamada a la acción o final"] },
            { title: "Primero el plan", bullets: ["Escríbelo antes de grabar", "Pide a la IA 10 ideas de gancho"] }
          ],
          tryIt: "Escribe un plan en tres partes para un video corto. Pide a un asistente de IA diez ganchos y elige el que mejor va contigo.",
          youCanNow: "planear un video corto con gancho, valor y cierre.",
          quickCheck: [
            { objective: "O1", q: "¿Cuáles son las tres partes del plan de un video corto?", options: ["Introducción, créditos y despedida", "Gancho, valor y cierre", "Música, filtro y texto", "Título, etiquetas y enlace"], answer: 1, why: "Planea un gancho, el valor en el medio y un cierre." },
            { objective: "O1", q: "Tu idea de video es una rutina de estiramientos para enfriar. ¿Qué haces antes de grabar?", options: ["Grabarla y decidir después", "Publicar una foto en su lugar", "Escribir el gancho, las tomas y el cierre", "Pedirle a un compañero que grabe cualquier cosa"], answer: 2, why: "Escribe el plan antes de grabar para saber qué tomas necesitas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Grabar con tu teléfono",
          minutes: 5,
          goal: "Grabar clips limpios con buena luz, encuadre estable y sonido claro.",
          text: [
            "Luz: ponte de frente a la luz, no de espaldas. La luz del día de una ventana o la sombra al aire libre funcionan muy bien. Evita grabar con una ventana brillante detrás de ti.",
            "Encuadre y estabilidad: graba en vertical para las apps de videos cortos, mantén el teléfono firme con un trípode o apoyándolo en algo, y deja la acción en el centro de la imagen. Limpia el lente primero. La cámara lenta es ideal para mostrar técnica.",
            "Sonido: si vas a hablar, acércate al teléfono y aléjate del viento y de gimnasios ruidosos, o agrega una voz en off después. Pide permiso antes de grabar a compañeros, entrenadores u otras personas, y sigue las reglas de grabación de tu equipo."
          ],
          steps: ["Limpia el lente.", "Ponte de frente a la luz.", "Graba en vertical y con el teléfono firme.", "Mantén la acción en el centro.", "Graba unos segundos extra antes y después de cada clip.", "Pide permiso antes de grabar a otros."],
          words: [["Video vertical", "video grabado con el teléfono parado, la forma que usan la mayoría de las apps de videos cortos."], ["Voz en off", "voz grabada aparte y puesta encima del video."]],
          slides: [
            { title: "Luz", bullets: ["De frente a la luz", "Ventana o sombra al aire libre", "Sin ventana brillante detrás de ti"] },
            { title: "Encuadre y estabilidad", bullets: ["Vertical para apps de videos cortos", "Trípode o apóyalo en algo", "Limpia el lente; prueba la cámara lenta"] },
            { title: "Sonido y permiso", bullets: ["Acércate o usa voz en off", "Pide permiso antes de grabar a otros"] }
          ],
          tryIt: "Graba los clips del video que planeaste. Graba cada uno dos veces y quédate con la mejor toma.",
          youCanNow: "grabar clips limpios y estables con buena luz y buen sonido.",
          quickCheck: [
            { objective: "O2", q: "¿Cómo debes sostener el teléfono para las apps de videos cortos?", options: ["En vertical", "De lado", "Al revés", "Inclinado"], answer: 0, why: "Graba en vertical para las apps de videos cortos." },
            { objective: "O2", q: "Estás grabando frente a una ventana con mucha luz y tu cara se ve oscura. ¿Qué haces?", options: ["Grabar igual", "Agregar un filtro después", "Acercar más la imagen", "Girarte para quedar de frente a la luz de la ventana"], answer: 3, why: "Ponte de frente a la luz, no de espaldas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Contar una historia con tus clips",
          minutes: 4,
          goal: "Elegir y ordenar clips para que el video cuente una historia corta.",
          text: [
            "Hasta un video de 30 segundos puede contar una historia: un problema, el trabajo, el resultado. \"Fallaba siempre las bandejas con la izquierda. Este es el ejercicio que hice todos los días durante dos semanas. Ahora mira.\"",
            "Usa tomas distintas: una toma abierta para mostrar dónde estás, una toma media para la acción y un primer plano para detalles como los pies o las manos. Cambiar de toma mantiene a la gente mirando.",
            "Los momentos reales y de detrás de cámaras, como entrenamientos temprano, viajes en el autobús del equipo o un agradecimiento a un entrenador, suelen conectar mejor que una edición perfecta de jugadas. Sé honesto; no inventes resultados."
          ],
          steps: ["Escribe tu historia en una línea: problema, trabajo, resultado.", "Elige un clip abierto, uno medio y un primer plano.", "Ordénalos según la historia.", "Quita todo lo que no ayude a la historia."],
          words: [["Toma abierta", "muestra toda la escena y dónde estás."], ["Primer plano", "una toma cerrada de un detalle, como las manos o los pies."]],
          slides: [
            { title: "Historia corta", bullets: ["Problema", "El trabajo", "El resultado"] },
            { title: "Mezcla tus tomas", bullets: ["Abierta: dónde estás", "Media: la acción", "Primer plano: los detalles"] },
            { title: "Lo real conecta", bullets: ["Momentos de detrás de cámaras", "Sé honesto; nada de resultados falsos"] }
          ],
          tryIt: "Escribe la historia de tu video en una línea y luego ordena tus clips: al menos una toma abierta, una media y un primer plano.",
          youCanNow: "ordenar clips en una historia corta y honesta con tomas variadas.",
          quickCheck: [
            { objective: "O3", q: "¿Qué muestra una toma abierta?", options: ["Detalles como el trabajo de pies", "Dónde estás", "Solo tu cara", "El texto de la publicación"], answer: 1, why: "Una toma abierta muestra el lugar; la media muestra la acción y el primer plano muestra los detalles." },
            { objective: "O3", q: "Un clip es divertido, pero no encaja en tu historia de problema, trabajo y resultado. ¿Qué haces?", options: ["Quitarlo", "Ponerlo primero", "Ponerlo en cámara lenta", "Repetirlo dos veces"], answer: 0, why: "Quita todo lo que no ayude a la historia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear y grabar",
        questions: [
          { objective: "O1", q: "¿Qué es un gancho?", options: ["Los créditos finales", "Un tipo de trípode", "Los primeros 1-3 segundos que hacen que la gente siga viendo", "Un hashtag"], answer: 2, why: "El gancho decide si la gente se queda." },
          { objective: "O1", q: "¿Cuál es un gancho fuerte?", options: ["\"El ejercicio que arregló mi tiro en suspensión\"", "\"Eh, hola, bueno...\"", "Una introducción larga en silencio", "Una pantalla negra"], answer: 0, why: "Promete valor desde el principio." },
          { objective: "O2", q: "¿Dónde debe estar la luz cuando te grabas?", options: ["Detrás de ti", "En ningún lado", "Solo desde arriba", "Frente a ti, iluminándote"], answer: 3, why: "Estar de frente a la luz deja tu cara clara." },
          { objective: "O2", q: "Antes de grabar a un compañero, debes:", options: ["Grabarlo a escondidas", "Pedirle permiso", "Publicarlo primero", "Usar su nombre sin preguntar"], answer: 1, why: "Primero van el permiso y las reglas del equipo." },
          { objective: "O3", q: "Una historia sencilla en video es:", options: ["Clips al azar", "Problema, el trabajo, el resultado", "Solo el final", "Solo texto"], answer: 1, why: "Esa estructura mantiene el interés del público." }
        ]
      }
    },
    {
      name: "Capítulo 2: Editar, escribir y planear",
      lessons: [
        {
          objectives: ["O4"],
          title: "Editar con una app gratuita",
          minutes: 6,
          goal: "Editar tus clips en un video ágil con texto y música que puedes usar.",
          text: [
            "Los editores gratuitos como CapCut, la app de fotos de tu teléfono o las herramientas de edición dentro de Instagram, TikTok y YouTube Shorts te dejan recortar clips, ordenarlos y agregar texto.",
            "Corta sin relleno: recorta el inicio y el final de cada clip para que no haya tiempo muerto. Agrega texto corto en pantalla para el gancho y los puntos clave, grande para leerlo en un teléfono. Agrega subtítulos, porque mucha gente ve los videos sin sonido, y revisa que no tengan errores.",
            "Música: usa la biblioteca de música con licencia de la app o pistas libres de regalías. Usar una canción popular de otro lado puede hacer que silencien o borren tu video, y las publicaciones patrocinadas pueden tener reglas de música más estrictas."
          ],
          steps: ["Importa tus clips en orden.", "Recorta el tiempo muerto al inicio y al final de cada clip.", "Agrega el texto del gancho en los primeros segundos.", "Agrega subtítulos y revísalos.", "Agrega música de la biblioteca de la app.", "Míralo una vez en pantalla completa en tu teléfono."],
          words: [["Recortar", "quitar las partes de un clip que no necesitas."], ["Subtítulos", "palabras en pantalla que muestran lo que se dice."], ["Música libre de regalías", "música que puedes usar según su licencia sin pagar cada vez que la usas."]],
          slides: [
            { title: "Editores gratuitos", bullets: ["CapCut", "El editor que trae tu teléfono", "Herramientas de edición dentro de las redes sociales"] },
            { title: "Corta sin relleno", bullets: ["Sin tiempo muerto", "Texto del gancho en los primeros segundos", "Subtítulos: muchos ven sin sonido"] },
            { title: "Música", bullets: ["Usa la biblioteca con licencia de la app", "Otras canciones pueden silenciar o borrar tu video"] }
          ],
          tryIt: "Edita tu video a 30-60 segundos con texto de gancho, subtítulos y música de la biblioteca de la app. Míralo en pantalla completa y quita todo lo lento.",
          youCanNow: "editar un video corto y ágil con texto, subtítulos y música permitida.",
          quickCheck: [
            { objective: "O4", q: "¿De dónde debes sacar la música para tu video?", options: ["Cualquier canción popular que te guste", "La lista de reproducción de un amigo", "La biblioteca de música con licencia de la app o pistas libres de derechos", "Una grabación de la radio"], answer: 2, why: "Las canciones de afuera pueden hacer que tu video quede silenciado o lo quiten." },
            { objective: "O4", q: "Los subtítulos automáticos de la app escribieron mal el nombre de tu entrenador. ¿Qué haces?", options: ["Dejarlo así", "Quitar los subtítulos", "Sacar a tu entrenador del video", "Corregir el subtítulo antes de publicar"], answer: 3, why: "Agrega subtítulos y revísalos para corregir errores." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Textos y publicaciones con IA",
          minutes: 5,
          goal: "Escribir el texto de una publicación con ayuda de la IA, con tu estilo y con avisos honestos.",
          text: [
            "El texto de la publicación es lo que va debajo de tu video. Pide a un asistente de IA: \"Escribe tres textos cortos para mi video de calentamiento de pies. Amigables, de menos de 150 caracteres, y que terminen con una pregunta para recibir comentarios.\"",
            "Elige uno y haz que suene a ti. Agrega algunos hashtags relacionados, no docenas. Etiqueta a otras personas solo si aceptaron.",
            "Si una marca te pagó o te dio algo por el video, dilo claramente en el video (en voz y en pantalla) y en el texto, cerca del inicio, por ejemplo \"Publicidad\" o \"Gracias [marca] por el equipo gratis\". La FTC (la Comisión Federal de Comercio de EE. UU.) dice que ponerlo solo al final, en hashtags o en la descripción no es suficiente. Atletas universitarios: revisen las reglas de reporte de NIL (ganancias por nombre, imagen y semejanza) con su oficina de cumplimiento."
          ],
          steps: ["Pide a la IA tres opciones de texto corto.", "Reescribe la que elijas con tu estilo.", "Agrega algunos hashtags relacionados.", "Si hay una marca, avísalo en el video y cerca del inicio del texto.", "Publica cuando tu público suele estar conectado."],
          words: [["Hashtag", "una palabra con # al frente que agrupa publicaciones sobre un tema."], ["Aviso de publicidad", "una frase clara que dice que una marca te pagó o te dio algo."]],
          slides: [
            { title: "La IA hace borradores de texto", bullets: ["Tres opciones cortas", "Terminar con una pregunta"] },
            { title: "Hazlo tuyo", bullets: ["Tu propio estilo", "Algunos hashtags relacionados", "Etiqueta solo con permiso"] },
            { title: "¿Hay una marca?", bullets: ["Dilo y muéstralo en el video", "\"Publicidad\" cerca del inicio del texto", "Revisa las reglas de NIL"] }
          ],
          sources: [{ name: "FTC: Guía básica de avisos para influencers en redes sociales (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" }],
          tryIt: "Escribe el texto de tu video con ayuda de la IA, ajústalo a tu estilo y publica el video.",
          youCanNow: "escribir un texto de publicación corto y honesto con ayuda de la IA.",
          quickCheck: [
            { objective: "O5", q: "¿Cuántos hashtags sugiere la lección?", options: ["Ninguno, nunca", "Unos pocos relacionados", "Treinta o más", "Solo los que están de moda"], answer: 1, why: "Agrega unos pocos hashtags relacionados, no decenas." },
            { objective: "O5", q: "Una marca de bebidas deportivas te regaló bebidas para tu video. ¿Dónde lo avisas?", options: ["Solo en hashtags al final", "Solo en la descripción", "En ningún lado, porque no fue dinero", "Dicho y en pantalla en el video, y cerca del inicio del texto"], answer: 3, why: "La FTC dice que los avisos que están solo al final, en hashtags o en la descripción no son suficientes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tu calendario de contenido de dos semanas",
          minutes: 5,
          goal: "Planear dos semanas de publicaciones en un calendario sencillo que se ajuste a tu entrenamiento.",
          text: [
            "Publicar con regularidad importa más que publicar mucho. Tres o cuatro publicaciones por semana son suficientes para la mayoría de los atletas en temporada.",
            "Haz un calendario en Google Sheets o en una app de notas con estas columnas: Fecha, Pilar (entrenamiento, día de partido, fuera de la cancha, lecciones), Idea, Formato (video corto, foto, historia) y Estado (idea, grabado, editado, publicado). Trabaja por tandas: graba varios clips en una sola sesión.",
            "Pide a un asistente de IA que llene un primer borrador con tus pilares y tu horario, y luego corrígelo. Marca las semanas ocupadas, como exámenes finales o torneos: está bien publicar menos en esas semanas."
          ],
          steps: ["Haz columnas: Fecha, Pilar, Idea, Formato, Estado.", "Planea 3-4 publicaciones por semana durante dos semanas.", "Pide a la IA ideas basadas en tus pilares.", "Ajusta según partidos, exámenes y viajes.", "Agrupa la grabación en una sola sesión."],
          words: [["Calendario de contenido", "un horario de qué vas a publicar y cuándo."], ["Trabajar por tandas", "hacer muchas veces la misma tarea de una vez, como grabar cinco clips en una sesión."]],
          slides: [
            { title: "Regularidad antes que cantidad", bullets: ["3-4 publicaciones por semana en temporada"] },
            { title: "Columnas del calendario", bullets: ["Fecha, Pilar, Idea", "Formato, Estado"] },
            { title: "Trabaja con inteligencia", bullets: ["La IA propone ideas", "Graba por tandas", "Publica menos en semanas ocupadas"] }
          ],
          tryIt: "Tarea final: publica tu video de 30-60 segundos y luego arma un calendario de contenido de dos semanas con seis ideas más, propuestas con IA y ajustadas a tu horario.",
          youCanNow: "planear dos semanas de contenido en un calendario que se ajuste a tu entrenamiento.",
          quickCheck: [
            { objective: "O6", q: "¿Cuántas publicaciones por semana sugiere la lección para la mayoría de los deportistas en temporada?", options: ["Tres o cuatro", "Una al mes", "Diez al día", "Veinte"], answer: 0, why: "Publicar con regularidad importa más que publicar mucho." },
            { objective: "O6", q: "Tienes un torneo el próximo fin de semana. ¿Cómo planeas tu calendario?", options: ["Publicar el doble", "Cancelar todas las publicaciones durante un mes", "Bloquear esa semana y publicar menos", "Grabar durante los partidos en lugar de jugar"], answer: 2, why: "Está bien publicar menos en semanas ocupadas, como las de torneos o exámenes finales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Editar, escribir y planear",
        questions: [
          { objective: "O4", q: "¿Por qué agregar subtítulos a tu video?", options: ["Lo hacen más largo", "La NCAA los exige", "Para esconder errores", "Mucha gente ve los videos sin sonido"], answer: 3, why: "Los subtítulos permiten seguir el video sin sonido." },
          { objective: "O4", q: "¿Qué música es la más segura de usar?", options: ["La biblioteca de música con licencia de la app", "Cualquier canción de la radio", "Una canción de una película", "La descarga de un amigo"], answer: 0, why: "Otras canciones pueden hacer que silencien o borren tu video." },
          { objective: "O5", q: "Una marca pagó tu video. ¿Dónde debe ir el aviso?", options: ["Solo en hashtags al final", "Solo en la descripción", "Dicho y mostrado en el video y cerca del inicio del texto", "En ningún lado"], answer: 2, why: "La FTC dice que los avisos deben ser difíciles de pasar por alto." },
          { objective: "O6", q: "¿Qué importa más al publicar?", options: ["Publicar 20 veces al día", "Publicar solo una vez al año", "Copiar a otros", "Publicar con regularidad"], answer: 3, why: "Publicar con regularidad construye un público." },
          { objective: "O6", q: "Trabajar por tandas significa:", options: ["Publicar sin editar", "Grabar varios clips en una sola sesión", "Borrar publicaciones viejas", "Comprar seguidores"], answer: 1, why: "Las tandas ahorran tiempo en temporadas ocupadas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Creación de contenido para atletas",
    questions: [
      { objective: "O1", q: "¿Cuánto dura el gancho?", options: ["El último minuto", "Todo el video", "Los primeros 1-3 segundos", "El texto de la publicación"], answer: 2, why: "El público decide rápido." },
      { objective: "O1", q: "La parte del medio de un video corto debe dar:", options: ["Valor: el ejercicio, el momento o el consejo", "Silencio", "Una introducción larga", "Solo tu logo"], answer: 0, why: "El valor mantiene a la gente mirando." },
      { objective: "O1", q: "¿Por qué escribir un plan antes de grabar?", options: ["Sabes qué tomas necesitas", "Es obligatorio", "Para perder tiempo", "Hace los videos más largos"], answer: 0, why: "Planear ahorra tiempo y da mejores clips." },
      { objective: "O1", q: "La IA puede ayudar a tu plan:", options: ["Grabando por ti", "Manejando tu cuenta", "Sugiriendo ideas de gancho", "Eligiendo tu deporte"], answer: 2, why: "Generar ideas es uno de los puntos fuertes de la IA." },
      { objective: "O2", q: "Antes de grabar, debes:", options: ["Apagar las luces", "Limpiar el lente", "Sacudir el teléfono", "Tapar el micrófono"], answer: 1, why: "Un lente limpio da una imagen clara." },
      { objective: "O2", q: "Para las apps de videos cortos, graba:", options: ["Al revés", "Solo de lado", "Con el lente tapado", "En vertical"], answer: 3, why: "Las apps de videos cortos usan video vertical." },
      { objective: "O2", q: "La cámara lenta es ideal para:", options: ["Esconder errores", "Ahorrar espacio", "Mostrar técnica", "Grabar sonido"], answer: 2, why: "Muestra los detalles de un movimiento rápido." },
      { objective: "O2", q: "¿Hablas en video en un gimnasio ruidoso? Intenta:", options: ["Gritar", "Subir la música", "Grabar desde lejos", "Acercarte o agregar voz en off"], answer: 3, why: "Un sonido claro necesita cercanía o una voz en off." },
      { objective: "O3", q: "Un primer plano muestra:", options: ["Detalles como las manos o los pies", "Todo el estadio", "El cielo", "Nada"], answer: 0, why: "Los primeros planos muestran detalles." },
      { objective: "O3", q: "¿Qué suele conectar con los seguidores?", options: ["Resultados falsos", "Momentos reales de detrás de cámaras", "Clips robados", "Videos largos en silencio"], answer: 1, why: "Los momentos reales generan confianza." },
      { objective: "O4", q: "Recortar significa:", options: ["Agregar más clips", "Cambiar el color", "Quitar las partes de un clip que no necesitas", "Publicar dos veces"], answer: 2, why: "Una edición ágil mantiene la atención." },
      { objective: "O4", q: "¿Cuál es una opción gratuita para editar?", options: ["CapCut o el editor que trae tu teléfono", "Solo programas de estudio caros", "Una impresora", "Una calculadora"], answer: 0, why: "Las herramientas gratuitas bastan para empezar." },
      { objective: "O4", q: "Usar una canción popular de fuera de la app puede:", options: ["Hacerlo viral siempre", "Pagarte dinero", "No pasa nada", "Hacer que silencien o borren tu video"], answer: 3, why: "Los derechos de la música importan." },
      { objective: "O4", q: "El texto en pantalla debe ser:", options: ["Diminuto", "Lo bastante grande para leerse en un teléfono", "Escondido", "En diez tipos de letra"], answer: 1, why: "La mayoría ve los videos en el teléfono." },
      { objective: "O5", q: "Un buen texto de publicación suele terminar con:", options: ["Cincuenta hashtags", "Una pregunta para recibir comentarios", "Tu número de teléfono", "Nada"], answer: 1, why: "Las preguntas invitan a participar." },
      { objective: "O5", q: "¿Cuántos hashtags debes usar?", options: ["Cincuenta al azar", "Ninguno, nunca", "Solo de moda aunque no tengan relación", "Algunos relacionados"], answer: 3, why: "Los hashtags relacionados ayudan a que te encuentren las personas correctas." },
      { objective: "O5", q: "Debes etiquetar a personas en una publicación:", options: ["Solo si aceptaron", "Siempre, sin preguntar", "Al azar", "Nunca"], answer: 0, why: "Respeta la privacidad de los demás." },
      { objective: "O5", q: "¿Cuál es un aviso de marca claro?", options: ["\"#sp\" al final", "\"¿colab?\"", "\"Publicidad\" o \"Gracias [marca] por el equipo gratis\"", "Nada"], answer: 2, why: "La FTC dice que se usen palabras claras y sencillas." },
      { objective: "O6", q: "La columna Estado de un calendario de contenido registra:", options: ["Tu estado de ánimo", "El clima", "Tus calificaciones", "Idea, grabado, editado, publicado"], answer: 3, why: "El estado muestra en qué punto está cada publicación." },
      { objective: "O6", q: "En la semana de exámenes finales está bien:", options: ["Faltar a los exámenes para publicar", "Publicar menos", "Comprar contenido", "Publicar 20 veces al día"], answer: 1, why: "La escuela y el entrenamiento van primero." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Plan en tres partes",
        objective: "O1",
        notYet: "No hay un plan escrito, o falta el gancho o el cierre.",
        meets: "Un gancho, un valor y un cierre escritos antes de grabar.",
        exceeds: "Se compararon varios ganchos y el plan anota las tomas abiertas, medias y los primeros planos."
      },
      {
        name: "Grabación",
        objective: "O2",
        notYet: "Clips oscuros, movidos o con ruido, o personas grabadas sin permiso.",
        meets: "Clips verticales, estables y bien iluminados, con la acción en el centro y con permiso de las demás personas.",
        exceeds: "Usa cámara lenta o voz en off donde ayuda, y segundos extra al principio y al final de cada clip para editar."
      },
      {
        name: "Edición",
        objective: "O4",
        notYet: "Quedó tiempo muerto, no hay subtítulos o la música no tiene licencia.",
        meets: "Un video de 30 a 60 segundos con clips recortados, texto en pantalla legible, subtítulos revisados y música con licencia.",
        exceeds: "Los cambios de toma mantienen el ritmo de una historia clara de problema, trabajo y resultado."
      },
      {
        name: "Texto y aviso",
        objective: "O5",
        notYet: "Texto copiado de la IA, muchos hashtags o falta el aviso de una marca.",
        meets: "Un texto con la voz del deportista, unos pocos hashtags relacionados y cualquier aviso en el lugar correcto.",
        exceeds: "Termina con una pregunta que invita a comentar y se publica cuando el público está conectado."
      },
      {
        name: "Calendario de dos semanas",
        objective: "O6",
        notYet: "Hay menos de seis ideas más, o faltan columnas.",
        meets: "Seis ideas más a lo largo de dos semanas con Fecha, Pilar, Idea, Formato y Estado, ajustadas al entrenamiento y la escuela.",
        exceeds: "La grabación se agrupa en una sola sesión y las semanas ocupadas están bloqueadas."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que publican su video y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que publican según su calendario en al menos dos de las cuatro semanas siguientes (encuesta de seguimiento)",
      "Participantes que dicen tener más vistas, guardados o comentarios en los videos planeados que en los anteriores",
      "Participantes que dicen haber conseguido una oportunidad de reclutamiento, de una marca o de la comunidad gracias a su contenido"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono con cámara, con batería cargada y espacio libre",
      "Una app de edición gratuita (CapCut o el editor que trae el teléfono)",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Google Sheets o una app de notas para el calendario",
      "Unos 60 minutos de lecciones más unos 60 minutos para grabar y editar"
    ],
    facilitatorNotes: [
      "Comparte las reglas de grabación de tu equipo y asegúrate de que los deportistas pidan permiso antes de grabar a otras personas, sobre todo a menores de edad.",
      "Forma parejas de deportistas para que se graben entre sí con buena luz y buen encuadre.",
      "Muestra dónde encontrar música con licencia en las apps que usa el grupo.",
      "Revisa que cada publicación patrocinada o con regalos tenga un aviso correcto antes de publicarla, y envía las preguntas sobre NIL a la oficina de cumplimiento.",
      "Recuerda a los deportistas que la escuela y el entrenamiento van primero; planea el contenido alrededor de los exámenes y los torneos."
    ]
  }
};

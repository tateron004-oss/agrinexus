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
  chapters: [
    {
      name: "Capítulo 1: Planear y grabar",
      lessons: [
        {
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
          youCanNow: "planear un video corto con gancho, valor y cierre."
        },
        {
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
          youCanNow: "grabar clips limpios y estables con buena luz y buen sonido."
        },
        {
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
          youCanNow: "ordenar clips en una historia corta y honesta con tomas variadas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear y grabar",
        questions: [
          { q: "¿Qué es un gancho?", options: ["Los créditos finales", "Un tipo de trípode", "Los primeros 1-3 segundos que hacen que la gente siga viendo", "Un hashtag"], answer: 2, why: "El gancho decide si la gente se queda." },
          { q: "¿Cuál es un gancho fuerte?", options: ["\"El ejercicio que arregló mi tiro en suspensión\"", "\"Eh, hola, bueno...\"", "Una introducción larga en silencio", "Una pantalla negra"], answer: 0, why: "Promete valor desde el principio." },
          { q: "¿Dónde debe estar la luz cuando te grabas?", options: ["Detrás de ti", "En ningún lado", "Solo desde arriba", "Frente a ti, iluminándote"], answer: 3, why: "Estar de frente a la luz deja tu cara clara." },
          { q: "Antes de grabar a un compañero, debes:", options: ["Grabarlo a escondidas", "Pedirle permiso", "Publicarlo primero", "Usar su nombre sin preguntar"], answer: 1, why: "Primero van el permiso y las reglas del equipo." },
          { q: "Una historia sencilla en video es:", options: ["Clips al azar", "Problema, el trabajo, el resultado", "Solo el final", "Solo texto"], answer: 1, why: "Esa estructura mantiene el interés del público." }
        ]
      }
    },
    {
      name: "Capítulo 2: Editar, escribir y planear",
      lessons: [
        {
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
          youCanNow: "editar un video corto y ágil con texto, subtítulos y música permitida."
        },
        {
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
          youCanNow: "escribir un texto de publicación corto y honesto con ayuda de la IA."
        },
        {
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
          youCanNow: "planear dos semanas de contenido en un calendario que se ajuste a tu entrenamiento."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Editar, escribir y planear",
        questions: [
          { q: "¿Por qué agregar subtítulos a tu video?", options: ["Lo hacen más largo", "La NCAA los exige", "Para esconder errores", "Mucha gente ve los videos sin sonido"], answer: 3, why: "Los subtítulos permiten seguir el video sin sonido." },
          { q: "¿Qué música es la más segura de usar?", options: ["La biblioteca de música con licencia de la app", "Cualquier canción de la radio", "Una canción de una película", "La descarga de un amigo"], answer: 0, why: "Otras canciones pueden hacer que silencien o borren tu video." },
          { q: "Una marca pagó tu video. ¿Dónde debe ir el aviso?", options: ["Solo en hashtags al final", "Solo en la descripción", "Dicho y mostrado en el video y cerca del inicio del texto", "En ningún lado"], answer: 2, why: "La FTC dice que los avisos deben ser difíciles de pasar por alto." },
          { q: "¿Qué importa más al publicar?", options: ["Publicar 20 veces al día", "Publicar solo una vez al año", "Copiar a otros", "Publicar con regularidad"], answer: 3, why: "Publicar con regularidad construye un público." },
          { q: "Trabajar por tandas significa:", options: ["Publicar sin editar", "Grabar varios clips en una sola sesión", "Borrar publicaciones viejas", "Comprar seguidores"], answer: 1, why: "Las tandas ahorran tiempo en temporadas ocupadas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Creación de contenido para atletas",
    questions: [
      { q: "¿Cuánto dura el gancho?", options: ["El último minuto", "Todo el video", "Los primeros 1-3 segundos", "El texto de la publicación"], answer: 2, why: "El público decide rápido." },
      { q: "La parte del medio de un video corto debe dar:", options: ["Valor: el ejercicio, el momento o el consejo", "Silencio", "Una introducción larga", "Solo tu logo"], answer: 0, why: "El valor mantiene a la gente mirando." },
      { q: "¿Por qué escribir un plan antes de grabar?", options: ["Sabes qué tomas necesitas", "Es obligatorio", "Para perder tiempo", "Hace los videos más largos"], answer: 0, why: "Planear ahorra tiempo y da mejores clips." },
      { q: "La IA puede ayudar a tu plan:", options: ["Grabando por ti", "Manejando tu cuenta", "Sugiriendo ideas de gancho", "Eligiendo tu deporte"], answer: 2, why: "Generar ideas es uno de los puntos fuertes de la IA." },
      { q: "Antes de grabar, debes:", options: ["Apagar las luces", "Limpiar el lente", "Sacudir el teléfono", "Tapar el micrófono"], answer: 1, why: "Un lente limpio da una imagen clara." },
      { q: "Para las apps de videos cortos, graba:", options: ["Al revés", "Solo de lado", "Con el lente tapado", "En vertical"], answer: 3, why: "Las apps de videos cortos usan video vertical." },
      { q: "La cámara lenta es ideal para:", options: ["Esconder errores", "Ahorrar espacio", "Mostrar técnica", "Grabar sonido"], answer: 2, why: "Muestra los detalles de un movimiento rápido." },
      { q: "¿Hablas en video en un gimnasio ruidoso? Intenta:", options: ["Gritar", "Subir la música", "Grabar desde lejos", "Acercarte o agregar voz en off"], answer: 3, why: "Un sonido claro necesita cercanía o una voz en off." },
      { q: "Un primer plano muestra:", options: ["Detalles como las manos o los pies", "Todo el estadio", "El cielo", "Nada"], answer: 0, why: "Los primeros planos muestran detalles." },
      { q: "¿Qué suele conectar con los seguidores?", options: ["Resultados falsos", "Momentos reales de detrás de cámaras", "Clips robados", "Videos largos en silencio"], answer: 1, why: "Los momentos reales generan confianza." },
      { q: "Recortar significa:", options: ["Agregar más clips", "Cambiar el color", "Quitar las partes de un clip que no necesitas", "Publicar dos veces"], answer: 2, why: "Una edición ágil mantiene la atención." },
      { q: "¿Cuál es una opción gratuita para editar?", options: ["CapCut o el editor que trae tu teléfono", "Solo programas de estudio caros", "Una impresora", "Una calculadora"], answer: 0, why: "Las herramientas gratuitas bastan para empezar." },
      { q: "Usar una canción popular de fuera de la app puede:", options: ["Hacerlo viral siempre", "Pagarte dinero", "No pasa nada", "Hacer que silencien o borren tu video"], answer: 3, why: "Los derechos de la música importan." },
      { q: "El texto en pantalla debe ser:", options: ["Diminuto", "Lo bastante grande para leerse en un teléfono", "Escondido", "En diez tipos de letra"], answer: 1, why: "La mayoría ve los videos en el teléfono." },
      { q: "Un buen texto de publicación suele terminar con:", options: ["Cincuenta hashtags", "Una pregunta para recibir comentarios", "Tu número de teléfono", "Nada"], answer: 1, why: "Las preguntas invitan a participar." },
      { q: "¿Cuántos hashtags debes usar?", options: ["Cincuenta al azar", "Ninguno, nunca", "Solo de moda aunque no tengan relación", "Algunos relacionados"], answer: 3, why: "Los hashtags relacionados ayudan a que te encuentren las personas correctas." },
      { q: "Debes etiquetar a personas en una publicación:", options: ["Solo si aceptaron", "Siempre, sin preguntar", "Al azar", "Nunca"], answer: 0, why: "Respeta la privacidad de los demás." },
      { q: "¿Cuál es un aviso de marca claro?", options: ["\"#sp\" al final", "\"¿colab?\"", "\"Publicidad\" o \"Gracias [marca] por el equipo gratis\"", "Nada"], answer: 2, why: "La FTC dice que se usen palabras claras y sencillas." },
      { q: "La columna Estado de un calendario de contenido registra:", options: ["Tu estado de ánimo", "El clima", "Tus calificaciones", "Idea, grabado, editado, publicado"], answer: 3, why: "El estado muestra en qué punto está cada publicación." },
      { q: "En la semana de exámenes finales está bien:", options: ["Faltar a los exámenes para publicar", "Publicar menos", "Comprar contenido", "Publicar 20 veces al día"], answer: 1, why: "La escuela y el entrenamiento van primero." }
    ]
  }
};

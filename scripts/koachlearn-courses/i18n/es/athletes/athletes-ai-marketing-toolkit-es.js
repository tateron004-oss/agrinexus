"use strict";

// Koach Learn course (Spanish translation of athletes-ai-marketing-toolkit). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-ai-marketing-toolkit-es",
  lang: "es",
  translationOf: "athletes-ai-marketing-toolkit",
  category: "Athletes",
  name: "Kit de herramientas de IA para marketing y marca personal",
  skills: "Escribir una guía de tu voz de marca, Armar una biblioteca de instrucciones, Usar la IA para escribir, diseñar y editar video, Programar y medir publicaciones, Revisar lo que hace la IA en exactitud, derechos y avisos",
  outcome: "armar tu propio kit de marketing con IA: una guía de voz de marca de una página, una biblioteca de diez instrucciones reutilizables, una herramienta para escribir, una para diseñar, una para video y una para medir, y una lista de revisión de cinco puntos que aplicas antes de publicar cualquier cosa.",
  about: [
    "Este curso es para atletas, entrenadores y personal de equipos que ya publican y promocionan, y quieren un sistema que se pueda repetir, que ahorre tiempo sin perder su propia voz.",
    "Un kit de herramientas no se trata de tener la mayor cantidad de apps. Es un grupo pequeño de herramientas más una guía y unas instrucciones guardadas, para que cada publicación suene a ti y pase por la misma revisión de calidad.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Arma el documento de tu kit: una guía de voz de marca de una página, diez instrucciones guardadas (textos de publicación, biografías, correos de propuesta, ideas de publicaciones, respuestas y más), la herramienta que elegiste para escribir, diseñar, editar video y medir, y una lista de revisión de cinco puntos. Usa el kit para hacer y revisar una publicación de principio a fin.",
  chapters: [
    {
      name: "Capítulo 1: Tu voz y tus instrucciones",
      lessons: [
        {
          title: "Escribir la guía de tu voz de marca",
          minutes: 5,
          goal: "Escribir una guía de una página que le diga a cualquier herramienta de IA cómo suenas.",
          text: [
            "La IA escribe con una voz genérica a menos que le digas cómo suenas. Una guía de voz de marca lo resuelve, y además ayuda a los compañeros o familiares que te ayudan con tus publicaciones.",
            "Tu guía tiene: tres palabras que describen tu voz (por ejemplo \"segura, agradecida, divertida\"); palabras y frases que usas; palabras que nunca usas; temas sobre los que publicas; temas que evitas; tus costumbres con emojis y hashtags; y dos publicaciones de ejemplo que suenan exactamente a ti.",
            "Pide ayuda a un asistente de IA: pega cinco de tus mejores textos de publicación y pregúntale: \"Describe la voz de estas publicaciones en tres palabras y haz una lista de las frases que repito.\" Luego corrige el resultado."
          ],
          steps: ["Reúne cinco textos de publicación que suenan a ti.", "Pide a la IA que describa tu voz.", "Elige tres palabras para tu voz.", "Haz la lista de palabras que usas y que nunca usas.", "Agrega temas para publicar y para evitar, y dos publicaciones de ejemplo."],
          words: [["Voz de marca", "la personalidad y el estilo de cómo escribes y hablas."], ["Guía de estilo", "un documento con reglas para que el contenido sea siempre coherente."]],
          slides: [
            { title: "Por qué una guía de voz", bullets: ["La IA es genérica si no le dices", "Ayuda a quien te ayuda a publicar"] },
            { title: "Qué lleva", bullets: ["Tres palabras para tu voz", "Palabras que usas y que nunca usas", "Temas para publicar y para evitar", "Dos publicaciones de ejemplo"] },
            { title: "La IA te ayuda a encontrarla", bullets: ["Pega cinco textos reales", "Pídele que describa tu voz"] }
          ],
          tryIt: "Pega cinco de tus textos de publicación en un asistente de IA y pídele que describa tu voz. Escribe tu guía de una página a partir del resultado.",
          youCanNow: "escribir una guía de voz de marca que haga que lo que escribe la IA suene a ti."
        },
        {
          title: "Armar una biblioteca de instrucciones",
          minutes: 5,
          goal: "Guardar diez instrucciones reutilizables para tus tareas de marketing más comunes.",
          text: [
            "Una biblioteca de instrucciones es un documento con las instrucciones (prompts) que vuelves a usar. En lugar de empezar desde cero cada vez, copias una instrucción, llenas los espacios en blanco y pegas tu guía de voz.",
            "Las buenas instrucciones tienen espacios en blanco entre corchetes: \"Usando mi guía de voz de abajo, escribe tres textos de menos de 150 caracteres para una publicación de [tipo] sobre [tema]. Termina con una pregunta.\" Otras: opciones de biografía, correo de propuesta a un patrocinador, nota de agradecimiento, ideas de publicaciones para un pilar, una respuesta amable a un comentario negativo, un resumen semanal.",
            "Guarda la biblioteca en Google Docs o en una app de notas. Mejora una instrucción cada vez que te dé una respuesta floja."
          ],
          steps: ["Haz una lista de tus diez tareas de marketing más comunes.", "Escribe una instrucción para cada una con [espacios en blanco].", "Agrega \"Usando mi guía de voz de abajo...\" a cada una.", "Guárdalas en un solo documento.", "Mejora una instrucción cada vez que dé una respuesta floja."],
          words: [["Biblioteca de instrucciones", "una colección guardada de instrucciones que vuelves a usar."], ["Instrucción plantilla", "una instrucción con espacios en blanco que llenas cada vez."]],
          slides: [
            { title: "Biblioteca de instrucciones", bullets: ["Reutiliza, no empieces de cero", "Llena los [espacios en blanco]", "Pega tu guía de voz"] },
            { title: "Diez tareas comunes", bullets: ["Textos, biografías, ideas de publicaciones", "Propuesta a patrocinador, nota de agradecimiento", "Respuestas, resumen semanal"] },
            { title: "Sigue mejorando", bullets: ["Un solo documento", "Arregla las instrucciones que dan respuestas flojas"] }
          ],
          tryIt: "Escribe tus primeras cinco instrucciones plantilla con [espacios en blanco]. Prueba una con tu guía de voz y arréglala si la respuesta es floja.",
          youCanNow: "armar y usar una biblioteca de instrucciones para tus tareas de marketing."
        },
        {
          title: "Elegir una herramienta por tarea",
          minutes: 5,
          goal: "Elegir una herramienta para escribir, una para diseñar, una para video y una para medir.",
          text: [
            "Necesitas cubrir cuatro tareas. Escribir: un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini. Diseñar: una herramienta como Canva, que tiene plantillas y funciones de IA. Video: un editor gratuito como CapCut o los editores que traen Instagram, TikTok y YouTube. Medir: las estadísticas de cada app más una hoja de Google Sheets.",
            "Elige una por tarea y apréndela bien. Antes de registrarte en algo nuevo, revisa quién lo hace, qué datos recoge y cuánto cuesta después de la prueba gratuita.",
            "Muchas apps también te dejan programar publicaciones con anticipación, dentro de la app o con herramientas de programación. Programar ayuda en las semanas ocupadas, pero revisa que las publicaciones programadas sigan teniendo sentido si cambian las noticias o los resultados."
          ],
          steps: ["Elige una herramienta para escribir.", "Elige una herramienta para diseñar.", "Elige un editor de video.", "Arma una hoja para medir.", "Escribe las cuatro opciones en el documento de tu kit."],
          words: [["Programar", "dejar una publicación lista para que salga sola más tarde."], ["Estadísticas", "los números de una app sobre cómo les va a tus publicaciones."]],
          slides: [
            { title: "Cuatro tareas", bullets: ["Escribir: un asistente de IA", "Diseñar: Canva", "Video: CapCut o los editores de las apps", "Medir: estadísticas + una hoja"] },
            { title: "Antes de registrarte", bullets: ["¿Quién lo hace?", "¿Qué datos recoge?", "¿Cuánto cuesta después de la prueba gratuita?"] },
            { title: "Programar", bullets: ["Ideal en semanas ocupadas", "Revisa que sigan teniendo sentido si cambian las noticias"] }
          ],
          tryIt: "Escribe tus cuatro herramientas en el documento de tu kit y arma una hoja para medir con estas columnas: Fecha, Publicación, Plataforma, Vistas, Interacción, Notas.",
          youCanNow: "elegir un grupo pequeño de herramientas que cubra cada tarea de marketing."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu voz y tus instrucciones",
        questions: [
          { q: "¿Por qué escribir una guía de voz de marca?", options: ["Para hacer las publicaciones más largas", "Para esconder tu nombre", "Para que la IA y quienes te ayudan escriban como suenas tú", "Las apps lo exigen"], answer: 2, why: "La IA es genérica a menos que le digas cuál es tu voz." },
          { q: "¿Qué va en una guía de voz?", options: ["Palabras que nunca usas", "Tu contraseña", "Tus datos bancarios", "Las estadísticas de tu rival"], answer: 0, why: "Da forma a cómo suena el contenido." },
          { q: "¿Qué hace reutilizable a una instrucción?", options: ["Que sea muy corta", "Que no tenga indicaciones", "Que esté en mayúsculas", "Espacios en blanco entre [corchetes] que llenas"], answer: 3, why: "Las plantillas ahorran tiempo cada vez que las usas." },
          { q: "Una instrucción guardada sigue dando respuestas flojas. Tú:", options: ["Borras la biblioteca", "Mejoras la instrucción", "La usas de todos modos", "Te cambias a cinco apps nuevas"], answer: 1, why: "Las instrucciones mejoran al corregirlas." },
          { q: "Antes de registrarte en una nueva herramienta de IA, revisa:", options: ["El color de su logo", "Quién la hace, cómo usa los datos y cuánto cuesta después de la prueba", "Cuántos anuncios muestra", "Nada"], answer: 1, why: "Así proteges tus datos y tu dinero." }
        ]
      }
    },
    {
      name: "Capítulo 2: Calidad, derechos y resultados",
      lessons: [
        {
          title: "La lista de revisión de cinco puntos",
          minutes: 5,
          goal: "Revisar el contenido hecho con IA con una lista de cinco puntos antes de publicar.",
          text: [
            "La IA ahorra tiempo, pero tú eres responsable de todo lo que publicas. Pasa cada pieza por cinco revisiones.",
            "1. Cierto: cada dato, estadística y afirmación es correcta. 2. Voz: suena a ti (léelo en voz alta). 3. Derechos: eres dueño o puedes usar cada foto, logo, clip y canción. 4. Aviso: cualquier pago o producto gratis de una marca está avisado claramente. 5. Seguro: nada de información privada, ubicación en tiempo real ni nada de lo que te arrepentirías.",
            "Pon la lista al principio del documento de tu kit. Cuando alguien te ayude a publicar, también la usa."
          ],
          steps: ["Cierto: revisa datos y estadísticas.", "Voz: léelo en voz alta.", "Derechos: revisa fotos, logos, clips y música.", "Aviso: los vínculos con marcas están dichos claramente.", "Seguro: nada de información privada ni ubicación en tiempo real."],
          words: [["Lista de revisión", "una lista corta de revisiones que se hacen antes de publicar cualquier cosa."], ["Responsable", "tú respondes por lo que se publica, aunque lo haya escrito la IA."]],
          slides: [
            { title: "Tú eres responsable", bullets: ["Aunque lo haya escrito la IA"] },
            { title: "Cinco revisiones", bullets: ["1. Cierto  2. Voz", "3. Derechos  4. Aviso", "5. Seguro"] },
            { title: "Úsala siempre", bullets: ["Al principio de tu kit", "Quienes te ayudan también la usan"] }
          ],
          tryIt: "Toma un texto escrito por la IA y aplica las cinco revisiones. Escribe lo que cambiaste en cada una.",
          youCanNow: "revisar el contenido de la IA en verdad, voz, derechos, aviso y seguridad."
        },
        {
          title: "Derechos, logos, música y avisos",
          minutes: 5,
          goal: "Saber qué puedes usar en tu contenido y cómo avisar de tus vínculos con marcas.",
          text: [
            "Derechos: puedes usar fotos y videos que hiciste tú y los que tienes permiso de usar. Las fotos del equipo y de los partidos que tomaron otras personas son del fotógrafo o de la escuela, así que pregunta. Los logos de escuelas, ligas y marcas necesitan permiso. Usa música de la biblioteca con licencia de la app.",
            "Imágenes con IA: ten cuidado al hacer imágenes con IA de personas reales, de compañeros o con logos de marcas. No hagas imágenes que puedan engañar a la gente haciéndole creer que pasó algo que no pasó.",
            "Aviso: la FTC (la Comisión Federal de Comercio de EE. UU.) dice que hay que avisar claramente de cualquier pago, producto gratis u otro vínculo con una marca, en la misma publicación, con palabras claras como \"Publicidad\" o \"Gracias [marca] por el equipo gratis\". Estudiantes atletas: revisen las reglas de NIL (nombre, imagen y semejanza) con su oficina de cumplimiento o la asociación atlética de su estado."
          ],
          steps: ["Usa tus propias fotos o las que tienes permiso de usar.", "Pregunta antes de usar logos.", "Usa música con licencia.", "No hagas imágenes con IA engañosas de personas reales.", "Avisa claramente de tus vínculos con marcas en cada publicación."],
          words: [["Derechos de autor", "el derecho legal del dueño a controlar las copias de fotos, videos, música y textos."], ["Permiso", "un sí claro del dueño para usar su trabajo."]],
          slides: [
            { title: "Derechos", bullets: ["Tus propias fotos y videos", "Fotos de otros: pregunta", "Logos con permiso; música con licencia"] },
            { title: "Imágenes con IA", bullets: ["Cuidado con personas reales y logos", "Nada que engañe a la gente"] },
            { title: "Aviso", bullets: ["Pago o producto gratis: dilo claramente", "En la publicación, \"Publicidad\" o un agradecimiento", "Revisa las reglas de NIL"] }
          ],
          sources: [
            { name: "FTC: Guía básica de avisos para influencers en redes sociales (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Mira tus últimas cinco publicaciones. Para cada foto, clip y canción, escribe de quién es y si tenías permiso. Arregla o quita lo que no pase la revisión.",
          youCanNow: "usar solo contenido sobre el que tienes derechos y avisar bien de tus vínculos con marcas."
        },
        {
          title: "Medir resultados y mejorar el kit",
          minutes: 5,
          goal: "Medir los resultados cada semana y usarlos para mejorar tus instrucciones y tu plan.",
          text: [
            "Una vez por semana, copia los números de tus publicaciones de las estadísticas de cada app a tu hoja: vistas, interacción (me gusta, comentarios, compartidos, guardados) y todo lo ligado a tu meta, como clics en enlaces o inscripciones.",
            "Encuentra tus mejores y tus peores publicaciones. Pega la tabla en un asistente de IA y pregúntale: \"¿Qué tipos de publicaciones funcionaron mejor y qué tienen en común? Dame dos ideas para la próxima semana.\" Compara su lectura con la hoja.",
            "Luego mejora tu kit: actualiza la instrucción que hizo tu mejor publicación, arregla la que está detrás de la peor y agrega cualquier aprendizaje nuevo a tu guía de voz."
          ],
          steps: ["Copia los números semanales a tu hoja.", "Encuentra las mejores y las peores publicaciones.", "Pregunta a la IA qué tienen en común las mejores.", "Compara su respuesta con la hoja.", "Actualiza tus instrucciones y tu guía de voz."],
          words: [["Interacción", "cómo participa la gente: me gusta, comentarios, compartidos, guardados."], ["Iterar", "mejorar algo paso a paso según los resultados."]],
          slides: [
            { title: "Números semanales", bullets: ["Vistas e interacción", "Números de tu meta: clics, inscripciones"] },
            { title: "Aprende de ellos", bullets: ["Mejores y peores publicaciones", "La IA encuentra lo que comparten las mejores", "Compáralo con tu hoja"] },
            { title: "Mejora el kit", bullets: ["Actualiza las instrucciones ganadoras", "Arregla las flojas", "Agrega lo aprendido a tu guía de voz"] }
          ],
          tryIt: "Tarea final: termina el documento de tu kit (guía de voz, diez instrucciones, cuatro herramientas, lista de cinco puntos); luego haz con él una publicación de principio a fin y anota sus números en tu hoja.",
          youCanNow: "medir resultados y seguir mejorando tu kit de marketing con IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Calidad, derechos y resultados",
        questions: [
          { q: "¿Quién es responsable de una publicación escrita por IA que tú publicas?", options: ["La empresa de IA", "Tus seguidores", "Nadie", "Tú"], answer: 3, why: "Tú respondes por lo que publicas." },
          { q: "¿Cuál es una de las cinco revisiones?", options: ["Derechos", "Tamaño de letra", "Número de emojis", "Largo de la publicación"], answer: 0, why: "Debes ser dueño o tener permiso de todo lo que usas." },
          { q: "El fotógrafo del equipo te tomó una gran foto. Antes de publicarla, tú:", options: ["Recortas su marca de agua", "La publicas como tuya", "Pides permiso", "La editas con IA"], answer: 2, why: "La foto puede ser del fotógrafo o de la escuela." },
          { q: "Hacer una imagen con IA donde parece que un compañero hizo algo que no hizo es:", options: ["Está bien si es gracioso", "Obligatorio", "Buen marketing", "Engañoso y hay que evitarlo"], answer: 3, why: "No hagas contenido que engañe a la gente." },
          { q: "La IA dice que tus videos fueron lo mejor. Tú:", options: ["Le crees totalmente", "Comparas su lectura con tu hoja", "Borras tu hoja", "Dejas de publicar videos"], answer: 1, why: "La IA puede leer mal los datos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Kit de herramientas de IA para marketing y marca personal",
    questions: [
      { q: "Un kit de marketing es:", options: ["La mayor cantidad posible de apps", "Una bolsa para cámara", "Un grupo pequeño de herramientas más una guía e instrucciones guardadas", "Una agencia pagada"], answer: 2, why: "Pequeño y repetible es mejor que muchas apps." },
      { q: "La voz de marca es:", options: ["La personalidad y el estilo de cómo escribes", "Tu voz al cantar", "Tu volumen", "Tu logo"], answer: 0, why: "Es cómo suenas al escribir." },
      { q: "¿Cómo puede la IA ayudarte a encontrar tu voz?", options: ["Describiendo la voz de tus textos reales", "Inventando una personalidad nueva", "Copiando a una celebridad", "Eligiendo tus valores"], answer: 0, why: "Tus publicaciones reales muestran tu voz." },
      { q: "¿Cuántas palabras para tu voz debes elegir?", options: ["Veinte", "Ninguna", "Tres", "Cien"], answer: 2, why: "Tres son fáciles de recordar y usar." },
      { q: "Una instrucción plantilla tiene:", options: ["Ninguna indicación", "Espacios en blanco que llenas", "Tu contraseña", "Solo emojis"], answer: 1, why: "Los espacios en blanco la hacen reutilizable." },
      { q: "¿Dónde debes guardar tu biblioteca de instrucciones?", options: ["En tu cabeza", "Repartida en varios chats", "En ningún lado", "En un solo documento, como Google Docs o una app de notas"], answer: 3, why: "Un solo lugar es fácil de usar y actualizar." },
      { q: "¿Qué herramienta sirve para la tarea de diseño?", options: ["Un cronómetro", "Solo una hoja de cálculo", "Canva", "Una calculadora"], answer: 2, why: "Canva tiene plantillas de diseño." },
      { q: "¿Qué sirve para la tarea de video?", options: ["Un procesador de textos", "Un calendario", "Un termómetro", "CapCut o los editores de las apps"], answer: 3, why: "Sirven para editar video." },
      { q: "Programar publicaciones ayuda:", options: ["En las semanas ocupadas", "Nunca", "Solo de noche", "Solo a los profesionales"], answer: 0, why: "Las publicaciones salen mientras entrenas o estudias." },
      { q: "Una publicación programada puede necesitar cambios cuando:", options: ["Nunca", "Cambian las noticias o los resultados", "Hace sol", "Recibes un me gusta"], answer: 1, why: "Las publicaciones viejas pueden verse mal si cambian los hechos." },
      { q: "La revisión \"Cierto\" significa:", options: ["Que suena genial", "Que es larga", "Que cada dato, estadística y afirmación es correcta", "Que tiene música"], answer: 2, why: "La exactitud protege tu nombre." },
      { q: "La revisión \"Voz\" es más fácil:", options: ["Leyéndolo en voz alta", "Contando las palabras", "Agregando hashtags", "Preguntándole a un desconocido"], answer: 0, why: "Vas a oír si suena a ti." },
      { q: "La revisión \"Seguro\" quita:", options: ["Tu deporte", "Tus mejores jugadas", "Tus agradecimientos", "Información privada y ubicación en tiempo real"], answer: 3, why: "La seguridad va primero." },
      { q: "Quienes publican por ti deben:", options: ["Saltarse las revisiones", "Usar la misma lista de revisión", "Publicar cualquier cosa", "Usar su propia voz"], answer: 1, why: "La coherencia protege tu marca." },
      { q: "Los derechos de autor son:", options: ["Una regla deportiva", "El derecho del dueño a controlar las copias de su trabajo", "Un tipo de hashtag", "Una licencia gratis para todos"], answer: 1, why: "Los dueños controlan su trabajo." },
      { q: "¿Qué música es la más segura para tus videos?", options: ["Cualquier canción de la radio", "La banda sonora de una película", "La descarga de un amigo", "La biblioteca con licencia de la app"], answer: 3, why: "La música con licencia evita que borren tu video." },
      { q: "Un producto gratis de una marca debe:", options: ["Avisarse claramente en la publicación", "Esconderse", "Mencionarse solo en tu biografía", "Ignorarse"], answer: 0, why: "Para la FTC, los productos gratis cuentan." },
      { q: "Los estudiantes atletas deben revisar las reglas de NIL con:", options: ["Un fan", "Un rival", "Su oficina de cumplimiento o la asociación atlética de su estado", "Solo una IA"], answer: 2, why: "Las reglas varían y cambian." },
      { q: "La interacción incluye:", options: ["Tu estatura", "Tu promedio escolar", "El clima", "Me gusta, comentarios, compartidos y guardados"], answer: 3, why: "La interacción es la participación de la gente." },
      { q: "Iterar significa:", options: ["Empezar de cero todos los días", "Mejorar paso a paso según los resultados", "No cambiar nunca", "Copiar a otros"], answer: 1, why: "Las pequeñas mejoras se van sumando." }
    ]
  }
};

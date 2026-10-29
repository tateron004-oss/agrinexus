"use strict";

// Koach Learn course (Spanish translation of shared/public-speaking.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "public-speaking-es",
  lang: "es",
  translationOf: "public-speaking",
  category: "Athletes",
  name: "Hablar en público y hacer presentaciones",
  skills: "Planear una charla corta, Organizar un mensaje, Hacer diapositivas sencillas, Practicar y controlar los nervios, Usar la voz y el lenguaje corporal, Responder preguntas",
  outcome: "planear, practicar y dar una charla clara de 2 minutos con un buen comienzo, tres ideas clave y un cierre claro, controlar tus nervios, usar bien tu voz y tu cuerpo, y responder preguntas con calma.",
  about: [
    "Hablar frente a otras personas es uno de los miedos más comunes, y una de las habilidades más útiles. La usas en entrevistas de trabajo, reuniones de equipo, presentaciones a clientes o inversionistas, charlas con donantes y voluntarios, entrevistas con medios, reuniones de la comunidad y en el vestuario.",
    "Este curso es para atletas, dueños de negocios, personal de organizaciones sin fines de lucro, veteranos, jóvenes, trabajadores y cualquier persona que quiera hablar con confianza. No necesitas tener un don natural. Los buenos oradores se hacen planeando y practicando.",
    "Vas a planear una charla corta, darle una estructura clara, hacer diapositivas sencillas si las necesitas, practicar, controlar los nervios, usar tu voz y tu cuerpo, y responder preguntas. Cada lección dura unos cinco minutos y termina con una práctica. La tarea final es una charla de 2 minutos que grabas con tu teléfono. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Grábate con tu teléfono dando una charla de 2 minutos sobre un tema que conoces bien (tu deporte, tu negocio, tu causa, tu trabajo o una habilidad que tienes). Debe tener un gancho, tres ideas clave y un cierre claro. Mírala, anota una cosa que hiciste bien y una que puedes mejorar, y luego grábala una vez más.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas, dueños de negocios, personal de organizaciones sin fines de lucro, veteranos, jóvenes, trabajadores y cualquiera que necesite hablar en entrevistas, reuniones de equipo, presentaciones de venta, charlas con donantes, entrevistas con medios, reuniones de la comunidad o el vestuario.",
    startingPoint: "Hablan con la gente todos los días y conocen bien algunos temas, como su deporte, su negocio, su causa o su trabajo. Muchos se ponen nerviosos al hablar ante un grupo, divagan sin una estructura, leen las diapositivas y nunca se han visto en video.",
    gap: "Hablar con claridad ayuda a conseguir empleo, ganar clientes y donantes, dirigir equipos y ser escuchado en la comunidad. Necesitan una forma sencilla de planear, practicar y dar una charla corta y responder preguntas, para que el miedo no los frene.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: un teléfono con cámara y cronómetro; las diapositivas son opcionales",
      "La práctica y la grabación se hacen a solas o con un amigo, para bajar la presión",
      "Privacidad: las grabaciones se quedan en el teléfono de cada persona, salvo que decida compartirlas",
      "Tiempo: lecciones de unos cinco minutos, con una charla final de 2 minutos"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para un tema que conoces bien", action: "escribir tu público, tu objetivo para ese público y tu gran idea", standard: "con la gran idea en una sola frase" },
    { id: "O2", condition: "Para una charla de 2 minutos", action: "hacer el esquema de un gancho, tres ideas clave con ejemplos y un cierre con un llamado a la acción", standard: "en una página de notas cortas" },
    { id: "O3", condition: "Para tu charla", action: "decidir si necesitas diapositivas y, si es así, hacer no más de tres sencillas", standard: "con una idea por diapositiva y cada dato revisado" },
    { id: "O4", condition: "Antes de dar la charla", action: "practicar en voz alta con un cronómetro y usar la respiración para controlar los nervios", standard: "terminando en 2 minutos o menos" },
    { id: "O5", condition: "Mientras hablas", action: "usar tu voz, tu mirada y tu postura para sonar y verte seguro", standard: "corrigiendo al menos una cosa que notaste en tu grabación" },
    { id: "O6", condition: "Después de una charla", action: "responder preguntas con calma, incluso las que no puedes responder", standard: "repitiendo cada pregunta y terminando con tu gran idea" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear tu charla",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear una charla corta: público, objetivo y una gran idea",
          minutes: 5,
          goal: "Escribir tu público, tu objetivo y tu gran idea para una charla corta.",
          text: [
            "Antes de escribir una sola palabra, responde tres preguntas. ¿Quién me escucha? ¿Qué quiero que hagan, piensen o sientan después? ¿Cuál es la gran idea que quiero que recuerden?",
            "El mismo tema cambia según el público. Si hablas de la despensa de alimentos de tu organización con donantes, puedes enfocarte en los resultados y en lo que logra su dinero. Con voluntarios nuevos, te enfocarías en cómo es un turno. Con un equipo juvenil, un entrenador que habla de disciplina usaría sus propios partidos como ejemplos.",
            "Escribe tu gran idea en una frase que un niño de 12 años pueda repetir: \"Llegar temprano todos los días es lo que gana los partidos reñidos.\" o \"Nuestra app les ahorra a las tiendas pequeñas dos horas a la semana.\" Todo en tu charla debe apoyar esa frase. Si algo no la apoya, quítalo."
          ],
          steps: ["Escribe quién te escucha y qué le importa.", "Escribe qué quieres que hagan, piensen o sientan después.", "Escribe tu gran idea en una frase sencilla.", "Revisa: ¿cada cosa que piensas decir apoya la gran idea?"],
          words: [["Público", "las personas que escuchan tu charla."], ["Gran idea", "el mensaje principal que quieres que la gente recuerde."]],
          slides: [
            { title: "Primero, tres preguntas", bullets: ["¿Quién me escucha?", "¿Qué deben hacer, pensar o sentir después?", "¿Cuál es mi gran idea?"] },
            { title: "Adáptate al público", bullets: ["Donantes: resultados e impacto", "Voluntarios nuevos: cómo es un turno", "Equipo juvenil: sus propios partidos como ejemplos"] },
            { title: "Una gran idea", bullets: ["Una frase que un niño de 12 años pueda repetir", "\"Nuestra app les ahorra a las tiendas pequeñas dos horas a la semana.\"", "Si no apoya la idea, quítalo"] }
          ],
          tryIt: "Elige un tema que conoces bien para tu charla de 2 minutos. Escribe tu público, tu objetivo para ellos y tu gran idea en una frase.",
          youCanNow: "planear una charla eligiendo tu público, tu objetivo y una gran idea.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué pensar en tu público antes de escribir una charla?", options: ["Para usar palabras más difíciles", "Para que la charla encaje con lo que necesita y le importa", "Para poder hablar más tiempo", "Para no tener que practicar"], answer: 1, why: "Conocer al público te ayuda a elegir lo que le importa." },
            { objective: "O1", q: "Vas a hablarles a jugadores jóvenes para que se unan a tu club. ¿Cuál sería tu gran idea?", options: ["La historia completa del club desde que empezó", "Una lista de todas las reglas", "Por qué unirse al club los ayudará a crecer y a divertirse", "Tu propio récord de victorias"], answer: 2, why: "La gran idea debe ser el único mensaje que este público necesita recordar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Estructura: gancho, tres ideas, cierre",
          minutes: 5,
          goal: "Hacer el esquema de una charla de 2 minutos con un gancho, tres ideas clave y un cierre claro.",
          text: [
            "Una estructura sencilla ayuda a tu público a seguirte y te ayuda a ti a recordar qué sigue. Usa: gancho, tres ideas, cierre.",
            "El gancho capta la atención en los primeros 15 segundos: una historia corta, un dato sorprendente o una pregunta. \"La temporada pasada perdimos cuatro partidos por un punto.\" Luego da tres ideas clave. Tres es fácil de recordar. Apoya cada una con un ejemplo o un número. Después, cierra: repite tu gran idea y di a la gente qué hacer ahora. \"Lleguen temprano esta semana. Yo estaré ahí a las 6.\" o \"Inscríbete en un turno antes del viernes.\"",
            "En una charla de 2 minutos, eso es más o menos 15 segundos para el gancho, 30 segundos por idea y 15 segundos para el cierre. Escribe el esquema como notas cortas, no como un guion completo, para sonar natural."
          ],
          steps: ["Escribe un gancho: historia, dato sorprendente o pregunta.", "Escribe tres ideas clave, cada una con un ejemplo o un número.", "Escribe un cierre: repite la gran idea y pide una acción.", "Mide el tiempo: unos 15 s de gancho, 30 s por idea, 15 s de cierre."],
          words: [["Gancho", "un comienzo que capta la atención."], ["Llamado a la acción", "decirle al público la única cosa que debe hacer después."], ["Esquema", "una lista corta de las partes de tu charla, en orden."]],
          slides: [
            { title: "Gancho, tres ideas, cierre", bullets: ["Fácil de seguir para el público", "Fácil de recordar para ti"] },
            { title: "El gancho (unos 15 segundos)", bullets: ["Una historia corta", "Un dato sorprendente", "Una pregunta al público"] },
            { title: "Tres ideas (unos 30 segundos cada una)", bullets: ["Tres es fácil de recordar", "Apoya cada una con un ejemplo o un número"] },
            { title: "El cierre (unos 15 segundos)", bullets: ["Repite tu gran idea", "Una acción clara: \"Inscríbete antes del viernes.\"", "Usa notas, no un guion completo"] }
          ],
          tryIt: "Escribe el esquema de tu charla de 2 minutos: un gancho, tres ideas con un ejemplo cada una y un cierre con un llamado a la acción. Que sean notas cortas en una página o en una nota del teléfono.",
          youCanNow: "hacer el esquema de una charla corta con un gancho, tres ideas clave y un cierre con un llamado a la acción.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué sirve un gancho?", options: ["Para captar la atención en los primeros segundos", "Para terminar la charla", "Para enumerar tus tres ideas", "Para darle las gracias al público"], answer: 0, why: "Un gancho hace que la gente escuche desde el principio." },
            { objective: "O2", q: "Tu esquema tiene siete ideas clave para una charla de 2 minutos. ¿Qué harías?", options: ["Hablar más rápido para que quepan", "Agregar más diapositivas", "Dejarlas todas y saltarte el cierre", "Elegir las tres ideas más importantes"], answer: 3, why: "Tres ideas caben en el tiempo y son fáciles de recordar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Diapositivas sencillas que ayudan, no que estorban",
          minutes: 4,
          goal: "Hacer diapositivas sencillas, o decidir que no las necesitas.",
          text: [
            "Las diapositivas deben ayudar al público, no guardar tu guion. Muchas charlas cortas excelentes no usan diapositivas. Úsalas cuando una imagen, una gráfica o unas pocas palabras clave aclaren tu idea.",
            "Reglas que funcionan: una idea por diapositiva; un título corto; como mucho unas pocas palabras o una imagen; letra grande que se pueda leer desde el fondo; buen contraste, como texto oscuro sobre fondo claro. Nunca leas tus diapositivas palabra por palabra; el público lee más rápido de lo que tú hablas.",
            "Herramientas gratis como Google Slides, Microsoft PowerPoint para la web y Canva te dejan hacer diapositivas en el navegador. Un asistente de IA puede sugerir títulos a partir de tu esquema, pero recorta mucho su texto y revisa cada dato y cada número que te dé."
          ],
          steps: ["Pregúntate: ¿una diapositiva aclara esta idea? Si no, sáltala.", "Una idea por diapositiva, con un título corto.", "Usa pocas palabras o una imagen.", "Usa letra grande con buen contraste.", "Practica sin leer las diapositivas en voz alta."],
          words: [["Presentación de diapositivas", "un conjunto de diapositivas para una charla."], ["Contraste", "cuánto resalta el texto sobre el fondo."]],
          slides: [
            { title: "Las diapositivas ayudan al público", bullets: ["No son un guion para ti", "Muchas charlas cortas excelentes no usan ninguna"] },
            { title: "Reglas para las diapositivas", bullets: ["Una idea por diapositiva", "Pocas palabras o una imagen", "Letra grande, buen contraste"] },
            { title: "No las leas", bullets: ["La gente lee más rápido de lo que hablas", "Mejor habla sobre la diapositiva"] },
            { title: "Herramientas gratis", bullets: ["Google Slides, PowerPoint para la web, Canva", "La IA puede sugerir títulos; recórtalos y revísalos"] }
          ],
          tryIt: "Decide si tu charla de 2 minutos necesita diapositivas. Si sí, haz no más de tres en una herramienta gratis, con una idea cada una. Si no, escribe una frase sobre por qué la charla funciona sin ellas.",
          youCanNow: "hacer diapositivas sencillas y fáciles de leer, o decidir con confianza hablar sin ellas.",
          quickCheck: [
            { objective: "O3", q: "¿Cuándo ayuda una diapositiva a una charla?", options: ["Cuando tiene todo tu guion", "Cuando una imagen, una gráfica o pocas palabras aclaran una idea", "Cuando no tienes nada que decir", "Siempre, en cada frase"], answer: 1, why: "Las diapositivas ayudan solo cuando aclaran una idea." },
            { objective: "O3", q: "Un asistente de IA te da una diapositiva llena con 80 palabras. ¿Qué harías?", options: ["Leerla palabra por palabra", "Hacer la letra más pequeña", "Agregar más palabras", "Recortarla a un título corto y pocas palabras, y revisar los datos"], answer: 3, why: "Las diapositivas sencillas con datos revisados ayudan; los muros de texto estorban." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear tu charla",
        questions: [
          { objective: "O1", q: "¿Qué debes decidir antes de escribir tu charla?", options: ["Solo tu ropa", "Cuántas diapositivas usar", "Tu público, tu objetivo y tu gran idea", "Cuánto durarán las preguntas"], answer: 2, why: "Esas tres cosas deciden todo lo demás en la charla." },
          { objective: "O2", q: "¿Cuál es un buen gancho?", options: ["\"La temporada pasada perdimos cuatro partidos por un punto.\"", "\"Eh, bueno, ahora voy a hablar.\"", "\"Perdón, no soy bueno para esto.\"", "Leer la diapositiva del título"], answer: 0, why: "Una historia corta o un dato sorprendente capta la atención." },
          { objective: "O2", q: "¿Por qué usar tres ideas clave?", options: ["Es una ley", "Más ideas siempre parecen más inteligentes", "Llena el tiempo", "Tres es fácil de recordar para la gente"], answer: 3, why: "Tres ideas son fáciles de seguir y de recordar." },
          { objective: "O2", q: "¿Qué hace un buen cierre?", options: ["Termina con \"Eso es todo, creo\"", "Repite la gran idea y pide una acción", "Agrega una cuarta idea nueva", "Pide perdón por la charla"], answer: 1, why: "Un cierre claro deja a la gente sabiendo qué hacer." },
          { objective: "O3", q: "¿Cuál diapositiva es mejor?", options: ["Diez viñetas con letra pequeña", "Una página entera de tu guion", "Una idea, un título corto y letra grande", "Texto gris claro sobre blanco"], answer: 2, why: "Las diapositivas sencillas y fáciles de leer ayudan al público." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hablar con confianza",
      lessons: [
        {
          objectives: ["O4"],
          title: "La práctica y los nervios",
          minutes: 5,
          goal: "Practicar una charla en voz alta y usar herramientas sencillas para controlar los nervios.",
          text: [
            "Los nervios son normales, incluso para oradores profesionales y para atletas antes de un partido importante. El corazón rápido y las manos temblorosas son tu cuerpo preparándose. No necesitas eliminar los nervios; necesitas usarlos.",
            "La práctica es el mejor remedio. Di la charla en voz alta al menos tres veces, de pie, con un cronómetro. Luego grábala con tu teléfono y mírala. Después, pruébala frente a un amigo, un familiar, un entrenador o un compañero de trabajo. Cada vez se hace más fácil.",
            "El día de la charla: respira despacio (inhala contando 4, exhala contando 6) antes de empezar; sostén tus notas o deja descansar las manos; busca una cara amable en el salón; y recuerda que el público quiere que te vaya bien. Si te pierdes, haz una pausa, mira tus notas y sigue. Una pausa te parece larga a ti, pero corta a ellos."
          ],
          steps: ["Di la charla en voz alta tres veces, de pie, con un cronómetro.", "Grábala con tu teléfono y mírala.", "Practica una vez frente a una persona y pídele un consejo.", "Antes de empezar: inhala contando 4, exhala contando 6.", "Si te pierdes: pausa, mira tus notas y sigue."],
          words: [["Ensayar", "practicar una charla en voz alta antes de darla."], ["Nervios", "la sensación nerviosa antes de algo importante; es normal y útil."]],
          slides: [
            { title: "Los nervios son normales", bullets: ["Hasta los profesionales y los atletas los sienten", "Tu cuerpo se está preparando", "Úsalos; no pelees con ellos"] },
            { title: "Practica en voz alta", bullets: ["Tres veces, de pie, con un cronómetro", "Grábala y mírala", "Pruébala frente a una persona"] },
            { title: "El día de la charla", bullets: ["Respira: inhala contando 4, exhala contando 6", "Busca una cara amable", "El público quiere que te vaya bien"] },
            { title: "¿Te perdiste?", bullets: ["Haz una pausa", "Mira tus notas", "Sigue: a ellos la pausa les parece más corta"] }
          ],
          tryIt: "Ponte de pie y di tu charla de 2 minutos en voz alta tres veces con un cronómetro. Anota cuánto dura cada vez y quita lo que te haga pasar de 2 minutos.",
          youCanNow: "ensayar una charla en voz alta, medir su tiempo y usar la respiración y las pausas para controlar los nervios.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa que el corazón te lata rápido antes de una charla?", options: ["Que tu cuerpo se está preparando, y eso es normal", "Que debes cancelar la charla", "Que no estás preparado", "Que estás enfermo"], answer: 0, why: "Los nervios son una señal normal de que tu cuerpo se está preparando." },
            { objective: "O4", q: "Tu ensayo dura 3 minutos, pero tienes 2. ¿Qué harías?", options: ["Hablar mucho más rápido", "Saltarte el cierre ese día", "Quitar las partes que no apoyan tu gran idea y volver a medir el tiempo", "Pedir más tiempo ese día"], answer: 2, why: "Quitar las partes de sobra mantiene la charla a tiempo y enfocada." }
          ]
        },
        {
          objectives: ["O5"],
          title: "La voz y el lenguaje corporal",
          minutes: 5,
          goal: "Usar tu voz, tu mirada y tu cuerpo para sonar y verte seguro.",
          text: [
            "Cómo lo dices importa tanto como lo que dices. Habla un poco más despacio y un poco más fuerte que en una conversación normal. Haz una pausa después de las ideas importantes para que se queden. Cambia el tono para no sonar plano, y elimina muletillas como \"eh\" y \"o sea\" haciendo una pausa en su lugar.",
            "Párate derecho, con los pies separados más o menos al ancho de los hombros y el peso repartido. Deja las manos relajadas a los lados o úsalas para gestos naturales; evita cruzar los brazos o tener las manos en los bolsillos. Mira a personas reales, una a la vez, durante una o dos frases cada una. En una videollamada, mira a la cámara, no tu propia cara en la pantalla.",
            "Cada cultura interpreta el contacto visual y los gestos de forma diferente, así que observa a tu público y adáptate. La meta es verte tranquilo, abierto e interesado en ellos."
          ],
          steps: ["Habla un poco más despacio y más fuerte de lo normal.", "Haz una pausa después de las ideas importantes.", "Cambia el \"eh\" por una pausa corta.", "Párate derecho, pies al ancho de los hombros, manos relajadas.", "Mira a una persona durante una frase, luego a otra.", "En video, mira a la cámara."],
          words: [["Lenguaje corporal", "lo que dicen sin palabras tu postura, tu cara, tus manos y tus ojos."], ["Muletillas", "sonidos como \"eh\", \"este\" y \"o sea\" que llenan el silencio."]],
          slides: [
            { title: "Tu voz", bullets: ["Un poco más despacio y más fuerte", "Pausa después de las ideas clave", "Varía el tono; cambia el \"eh\" por una pausa"] },
            { title: "Tu cuerpo", bullets: ["Derecho, pies al ancho de los hombros", "Manos relajadas o gestos naturales", "Sin brazos cruzados ni manos en los bolsillos"] },
            { title: "Tu mirada", bullets: ["Una persona, una frase, luego la siguiente", "En video: mira a la cámara"] },
            { title: "Observa al público", bullets: ["Las culturas ven distinto la mirada y los gestos", "Busca verte tranquilo, abierto e interesado"] }
          ],
          tryIt: "Graba 30 segundos de tu charla con tu teléfono. Mírala sin sonido: revisa tu postura, tus manos y tu mirada. Luego escúchala con los ojos cerrados: cuenta los \"eh\" y fíjate en tu velocidad. Elige una cosa para corregir.",
          youCanNow: "usar tu voz, tu postura, tus manos y el contacto visual para verte tranquilo y seguro.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una muletilla?", options: ["Una palabra clave de tu gran idea", "Una palabra como \"eh\" o \"o sea\" que llena una pausa", "Una palabra de una diapositiva", "La última palabra de tu charla"], answer: 1, why: "Las muletillas llenan el silencio; una pausa corta funciona mejor." },
            { objective: "O5", q: "Al ver tu grabación, notas que miras al piso. ¿Qué harías?", options: ["Mirar a una persona durante una frase y luego a otra", "Cerrar los ojos mientras hablas", "Leer tus notas todo el tiempo", "Mirar solo al techo"], answer: 0, why: "Mirar a una persona a la vez transmite seguridad." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Responder preguntas",
          minutes: 5,
          goal: "Responder preguntas después de una charla con calma y claridad, incluso las que no puedes responder.",
          text: [
            "Las preguntas significan que la gente estaba escuchando. Prepárate escribiendo las tres preguntas que es más probable que te hagan y una respuesta corta para cada una.",
            "Cuando alguien pregunte: escucha la pregunta completa, da las gracias y repítela o dila con otras palabras para que todos la oigan. Responde brevemente, en 30 segundos o menos si puedes, y luego confirma: \"¿Eso responde tu pregunta?\" Si no sabes, dilo con honestidad: \"No lo sé, pero lo voy a averiguar y te respondo antes del viernes.\" Y luego hazlo. Nunca inventes nada.",
            "Ante una pregunta hostil o fuera de tema, mantén la calma y la cortesía: \"Es una preocupación válida. Hablemos después para darle el tiempo que merece.\" Un periodista o un patrocinador también puede hacer preguntas difíciles; haz un puente de vuelta a tu gran idea: \"Lo que sí te puedo decir es...\". Termina la ronda de preguntas con tu cierre otra vez, para que tu gran idea sea lo último que la gente escuche."
          ],
          steps: ["Antes: escribe tres preguntas probables y respuestas cortas.", "Escucha la pregunta completa.", "Da las gracias y repítela para todos.", "Responde brevemente y confirma que respondiste.", "¿No sabes? Dilo y promete dar seguimiento.", "Termina repitiendo tu cierre."],
          words: [["Preguntas y respuestas", "el tiempo después de una charla para que el público haga preguntas."], ["Puente", "una frase que lleva una respuesta difícil de vuelta a tu mensaje principal."]],
          slides: [
            { title: "Prepárate", bullets: ["Escribe tres preguntas probables", "Escribe una respuesta corta para cada una"] },
            { title: "Al responder", bullets: ["Escucha la pregunta completa", "Da las gracias y repítela", "Responde brevemente y confirma"] },
            { title: "Cuando no sabes", bullets: ["Dilo con honestidad", "\"Lo voy a averiguar y te respondo antes del viernes.\"", "Nunca lo inventes"] },
            { title: "Preguntas difíciles", bullets: ["Mantén la calma y la cortesía", "Ofrece hablar después", "Puente: \"Lo que sí te puedo decir es...\""] }
          ],
          tryIt: "Tarea final: graba tu charla de 2 minutos con tu teléfono. Luego pide a un amigo que te haga dos preguntas (o hazte dos tú mismo) y graba tus respuestas. Mírala, anota una fortaleza y una cosa para corregir, y graba la charla una vez más.",
          youCanNow: "dar una charla corta y responder preguntas con calma, incluso las que todavía no puedes responder.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un \"puente\" al responder preguntas?", options: ["Una diapositiva que une dos ideas", "Una pausa antes de tu charla", "Una frase que te lleva de la pregunta de vuelta a tu mensaje principal", "Una forma de evitar todas las preguntas"], answer: 2, why: "Un puente como \"Lo que sí te puedo decir es...\" te devuelve a tu mensaje." },
            { objective: "O6", q: "Alguien hace una pregunta que no puedes responder. ¿Qué dirías?", options: ["Inventar una respuesta", "Ignorar la pregunta", "Decirle que es una mala pregunta", "\"No lo sé, pero lo averiguo y te respondo antes del viernes.\""], answer: 3, why: "La honestidad más un día fijo para responder mantiene la confianza." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hablar con confianza",
        questions: [
          { objective: "O4", q: "¿Cuál es la mejor forma de prepararte para una charla?", options: ["Leerla en silencio una vez", "Decirla en voz alta varias veces, de pie, con un cronómetro", "Memorizar solo las diapositivas", "Improvisar"], answer: 1, why: "Practicar en voz alta es el mejor remedio para los nervios." },
          { objective: "O4", q: "Te pierdes a mitad de la charla. ¿Qué haces?", options: ["Pedir perdón muchas veces", "Bajarte del escenario", "Empezar de nuevo desde el principio", "Hacer una pausa, mirar tus notas y seguir"], answer: 3, why: "Una pausa corta es normal y casi nadie la nota." },
          { objective: "O5", q: "En una videollamada, ¿adónde debes mirar cuando hablas?", options: ["A la cámara", "A tu propia cara en la pantalla", "Al teclado", "Por la ventana"], answer: 0, why: "Mirar a la cámara se ve como contacto visual." },
          { objective: "O5", q: "¿Cuál es una buena forma de eliminar muletillas como \"eh\"?", options: ["Hablar más rápido", "Cambiarlas por una pausa corta", "Decir \"o sea\" en su lugar", "No dejar de hablar nunca"], answer: 1, why: "Una pausa suena segura; las muletillas no." },
          { objective: "O6", q: "Alguien hace una pregunta que no puedes responder. ¿Qué es lo mejor?", options: ["Inventar una respuesta", "Ignorar a la persona", "Decir que no sabes y prometer responder antes de un día fijo", "Cambiar de tema sin decir nada"], answer: 2, why: "La honestidad más un seguimiento mantiene la confianza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Hablar en público y hacer presentaciones",
    questions: [
      { objective: "O1", q: "La \"gran idea\" de una charla es:", options: ["La parte más larga", "El mensaje principal que quieres que la gente recuerde", "El diseño de tus diapositivas", "El título de tu primera diapositiva"], answer: 1, why: "Todo en la charla apoya la gran idea." },
      { objective: "O1", q: "Vas a hablar con voluntarios nuevos sobre tu despensa de alimentos. ¿En qué debes enfocarte?", options: ["Tus formularios de impuestos", "Las actas de la junta del año pasado", "Cada programa que tienes", "Cómo es un turno de voluntario"], answer: 3, why: "Adapta la charla a lo que necesita ese público." },
      { objective: "O1", q: "Si una parte de tu charla no apoya la gran idea, debes:", options: ["Quitarla", "Hacerla más larga", "Ponerla al principio", "Ponerla en una diapositiva"], answer: 0, why: "Quitarla mantiene la charla clara y corta." },
      { objective: "O2", q: "La estructura sencilla de charla en este curso es:", options: ["Disculpa, detalles, despedida", "Diapositivas, más diapositivas, preguntas", "Gancho, tres ideas, cierre", "Historia, historia, historia"], answer: 2, why: "Un gancho, tres ideas y un cierre son fáciles de seguir." },
      { objective: "O2", q: "En una charla de 2 minutos, ¿cuánto dura más o menos cada idea clave?", options: ["5 segundos", "30 segundos", "2 minutos", "10 minutos"], answer: 1, why: "Unos 15 s de gancho, 30 s por idea, 15 s de cierre." },
      { objective: "O2", q: "¿Cuál es un llamado a la acción claro?", options: ["\"Gracias, creo.\"", "\"¿Preguntas? ¿No? Bueno.\"", "\"Tal vez piénsenlo algún día.\"", "\"Inscríbete en un turno antes del viernes.\""], answer: 3, why: "Le dice a la gente exactamente qué hacer y cuándo." },
      { objective: "O2", q: "¿Por qué usar notas en lugar de un guion completo?", options: ["Suenas más natural", "Los guiones no están permitidos", "Las notas son más largas", "Para poder leer cada palabra"], answer: 0, why: "Las notas cortas te mantienen natural sin perder el rumbo." },
      { objective: "O3", q: "¿Cuándo debes usar una diapositiva?", options: ["Para cada frase", "Cuando una imagen, una gráfica o pocas palabras aclaran una idea", "Nunca", "Solo para tu guion"], answer: 1, why: "Las diapositivas deben ayudar al público a entender." },
      { objective: "O3", q: "¿Por qué no leer las diapositivas palabra por palabra?", options: ["Es demasiado rápido", "Las diapositivas son secretas", "El público lee más rápido de lo que tú hablas", "Va contra las reglas"], answer: 2, why: "Leer las diapositivas hace que pierdas al público." },
      { objective: "O3", q: "Un asistente de IA te da texto para las diapositivas. ¿Qué debes hacer?", options: ["Usarlo todo tal cual", "Recortarlo y revisar cada dato y cada número", "Leerlo en voz alta palabra por palabra", "Agregar más texto"], answer: 1, why: "La IA puede equivocarse y usar demasiadas palabras; tú tienes el control." },
      { objective: "O4", q: "Los nervios antes de una charla son:", options: ["Una señal de que debes cancelar", "Raros", "Solo para principiantes", "Normales, y son tu cuerpo preparándose"], answer: 3, why: "Hasta los profesionales sienten nervios; puedes usarlos." },
      { objective: "O4", q: "¿Qué paso de práctica viene después de decirla en voz alta tres veces?", options: ["Grabarla con tu teléfono y mirarla", "Borrar tus notas", "Agregar diez ideas más", "Dejar de practicar"], answer: 0, why: "Ver una grabación te muestra qué corregir." },
      { objective: "O4", q: "Una forma rápida de calmarte justo antes de empezar es:", options: ["Tomar mucho café", "Inhalar contando 4, exhalar contando 6", "Correr en el mismo lugar 5 minutos", "Leer todos tus correos"], answer: 1, why: "Respirar despacio calma el cuerpo." },
      { objective: "O5", q: "¿Qué postura se ve segura?", options: ["Brazos cruzados", "Manos en los bolsillos", "De pie y derecho, pies al ancho de los hombros, manos relajadas", "Apoyado en la pared"], answer: 2, why: "Una postura abierta y firme se ve tranquila y segura." },
      { objective: "O5", q: "Un buen contacto visual con un grupo significa:", options: ["Mirar fijamente a una persona todo el tiempo", "Mirar al piso", "Mirar al techo", "Mirar a una persona durante una frase, luego a otra"], answer: 3, why: "Conecta con muchas personas, una tras otra." },
      { objective: "O5", q: "Comparado con una conversación normal, debes hablar:", options: ["Un poco más despacio y más fuerte", "Mucho más rápido", "En susurros", "Sin ninguna pausa"], answer: 0, why: "Más despacio y más fuerte ayuda a que todos oigan y sigan." },
      { objective: "O6", q: "¿Por qué repetir una pregunta antes de responder?", options: ["Para perder tiempo", "Para que todos la oigan y confirmar que la entendiste", "Para lucirte", "Porque la persona la olvidó"], answer: 1, why: "Repetir ayuda al salón y confirma que entendiste." },
      { objective: "O6", q: "Un patrocinador hace una pregunta difícil. Un buen \"puente\" es:", options: ["\"Sin comentarios.\" y alejarte", "\"Esa es una pregunta tonta.\"", "\"Lo que sí te puedo decir es...\" y volver a tu mensaje principal", "Inventar números"], answer: 2, why: "Un puente responde con cortesía y vuelve a tu mensaje." },
      { objective: "O6", q: "Alguien plantea una queja fuera de tema durante las preguntas. ¿Qué es lo mejor?", options: ["Discutir hasta que se calle", "Ignorarlo por completo", "Terminar la charla antes", "Mantener la cortesía y ofrecer hablar después"], answer: 3, why: "Lo respeta y protege el tiempo de todos." },
      { objective: "O6", q: "¿Qué debe ser lo último que la gente escuche después de las preguntas?", options: ["Tu cierre y tu gran idea otra vez", "Una disculpa", "\"Eh, bueno, adiós.\"", "Un tema nuevo"], answer: 0, why: "Terminar con tu cierre hace que la gran idea se quede." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      5,
      8,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Gran idea",
        objective: "O1",
        notYet: "La charla no tiene un mensaje principal claro.",
        meets: "Una gran idea que quien escucha podría repetir en una frase.",
        exceeds: "La gran idea encaja con el público y con lo que necesita."
      },
      {
        name: "Estructura",
        objective: "O2",
        notYet: "Falta el gancho, una idea o el cierre.",
        meets: "Un gancho, tres ideas clave con ejemplos y un cierre con un llamado a la acción.",
        exceeds: "El cierre repite la gran idea y el llamado a la acción es concreto."
      },
      {
        name: "Tiempo",
        objective: "O4",
        notYet: "Más de 2 minutos, o se nota que no se practicó.",
        meets: "Termina en 2 minutos o menos, con notas y no con un guion.",
        exceeds: "Suena natural y tranquila de principio a fin."
      },
      {
        name: "Voz y cuerpo",
        objective: "O5",
        notYet: "Cuesta oírla, usa muchas muletillas o no mira a la cámara.",
        meets: "Voz clara, ritmo constante, buena postura y mirada a la cámara.",
        exceeds: "La segunda grabación muestra la corrección elegida después de ver la primera."
      },
      {
        name: "Responder preguntas",
        objective: "O6",
        notYet: "Inventó respuestas o se puso a la defensiva.",
        meets: "Repitió cada pregunta y respondió con calma, o prometió dar seguimiento.",
        exceeds: "Al final hizo un puente de vuelta a la gran idea."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que dan una charla, una presentación de venta o una exposición en el trabajo, la escuela, un equipo o su comunidad en 60 días (encuesta de seguimiento)",
      "Participantes que cuentan que se sienten más seguros al hablar en entrevistas o reuniones",
      "Participantes cuya segunda grabación tiene mejor calificación con la rúbrica que la primera",
      "Participantes que empiezan otro curso de carrera o de habilidades con las personas de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono con cámara y cronómetro",
      "Papel o una nota del teléfono para el esquema",
      "Una herramienta gratuita de diapositivas como Google Slides o Canva (opcional)",
      "Unos 60 minutos en total, más tiempo para grabar la charla final"
    ],
    facilitatorNotes: [
      "Empieza con grupos pequeños o parejas para que quienes están nerviosos practiquen con menos presión.",
      "Da los comentarios con una fortaleza primero y luego una cosa para corregir.",
      "Deja que guarden sus grabaciones en privado; solo se comparten si ellos quieren.",
      "Deja que elijan temas que conocen bien, como su deporte, su trabajo, su negocio o su causa.",
      "Califica la grabación final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

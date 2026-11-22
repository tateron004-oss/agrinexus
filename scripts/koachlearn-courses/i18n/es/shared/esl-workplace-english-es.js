"use strict";

// Koach Learn course (Spanish translation of shared/esl-workplace-english.js). See scripts/koachlearn-courses/README.md, "Translations".
// ESL course: every English phrase being taught stays in English, inside double quotes; only the explanations are translated.

module.exports = {
  id: "esl-workplace-english-es",
  lang: "es",
  translationOf: "esl-workplace-english",
  category: "Workforce Development",
  name: "Inglés para el trabajo (ESL)",
  skills: "Responder preguntas de entrevista de trabajo, Palabras y señales de seguridad, Reportar un problema o una lesión, Pedir ayuda y confirmar instrucciones, Hablar de horarios, Atender a clientes",
  outcome: "usar un inglés corto y claro en el trabajo: responder preguntas comunes de entrevista, entender las palabras de seguridad y reportar un problema, pedir ayuda y confirmar instrucciones, hablar de tu horario, y saludar y ayudar a un cliente.",
  about: [
    "Este curso es para personas adultas que están aprendiendo inglés y quieren conseguir trabajo o avanzar en el trabajo que ya tienen: en almacenes, cocinas, limpieza, construcción, tiendas, cuidado de personas, fábricas y oficinas.",
    "Aprendes el inglés que más necesitas en el trabajo: respuestas para una entrevista, palabras de seguridad, cómo reportar un problema, cómo pedir ayuda, cómo hablar de tu horario y cómo hablar con los clientes. Cada lección tiene frases para decir, una conversación de ejemplo y un juego de roles que puedes hacer en casa.",
    "Cada lección dura unos cinco minutos. Lee la lección, lee en voz alta la conversación de ejemplo y luego haz la tarea de \"Pruébalo ahora\". Hay dos preguntas rápidas después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final.",
    "Al final escribes tu propio guion de inglés para el trabajo que quieres, y lo practicas en voz alta."
  ],
  finalTask: "Escribe tu guion de inglés para el trabajo que quieres, en una página: (1) una respuesta corta a \"Tell me about yourself.\" (3 a 4 oraciones), (2) respuestas a otras dos preguntas de entrevista, (3) tres palabras o señales de seguridad de ese trabajo, con lo que significan, (4) un mensaje para avisar que estás enfermo o que llegarás tarde, y (5) dos frases para ayudar a un cliente o pedir ayuda a un compañero. Practica todo el guion en voz alta o en un juego de roles con un compañero, y grábate si puedes.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que aprenden inglés como segunda lengua y que buscan trabajo o ya trabajan en Estados Unidos: inmigrantes y refugiados, jóvenes adultos, personas que regresan a casa después de estar en prisión, y trabajadores en empleos de nivel inicial que quieren avanzar.",
    startingPoint: "Pueden saludar y decir oraciones sencillas en inglés. Entienden algunas palabras del trabajo, pero se ponen nerviosos en las entrevistas, por teléfono y con supervisores o clientes. Muchos tienen buenas habilidades de trabajo de su país de origen.",
    gap: "Los trabajadores que no pueden responder preguntas de entrevista, entender un aviso de seguridad o pedirle a un supervisor que les explique una tarea pierden ofertas de trabajo, cometen errores y pueden lastimarse. Un grupo pequeño de frases de trabajo y la costumbre de confirmar las instrucciones los hacen más seguros, con más confianza y más fáciles de ascender.",
    constraints: [
      "Nivel de idioma: inglés de principiante a intermedio bajo; palabras muy comunes y oraciones cortas",
      "El curso se traducirá: las frases en inglés que se enseñan quedan en inglés, entre comillas",
      "Dispositivos: un teléfono o una computadora de la biblioteca; para practicar basta con papel, un compañero y la voz",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre los turnos de trabajo",
      "Las reglas del trabajo (cómo avisar ausencias, reglas de seguridad) cambian según el empleador: cada participante sigue el manual y la capacitación de su propio empleador"
    ],
    prerequisites: "Leer oraciones cortas y sencillas en inglés. \"Inglés para la vida diaria (ESL)\" es un buen primer curso para quienes están empezando."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "En una entrevista de trabajo", action: "responder preguntas comunes de entrevista como \"Tell me about yourself\" con respuestas cortas y preparadas", standard: "en 2 a 4 oraciones claras cada una, con un ejemplo real de tu trabajo o de tu vida" },
    { id: "O2", condition: "Con palabras, señales y avisos de seguridad comunes en el trabajo", action: "decir qué significa cada uno y qué hacer, y reportar un peligro o una lesión a un supervisor", standard: "acertando al menos 4 de 5 y reportando de inmediato" },
    { id: "O3", condition: "Cuando recibes una instrucción que no entiendes del todo", action: "pedir ayuda a un supervisor o compañero y repetir la instrucción para confirmarla", standard: "antes de empezar la tarea" },
    { id: "O4", condition: "Con un horario de trabajo o un cambio en tus planes", action: "leer los horarios de tus turnos y avisar a tu supervisor que llegarás tarde, que estás enfermo o que necesitas tiempo libre", standard: "diciendo el día, la hora y el motivo, lo antes posible" },
    { id: "O5", condition: "Cuando un cliente se te acerca", action: "saludar al cliente, ofrecer ayuda y buscar a otro trabajador cuando no puedes ayudar", standard: "con amabilidad y sin adivinar una respuesta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conseguir el trabajo y mantenerte seguro",
      lessons: [
        {
          title: "La entrevista de trabajo: responder preguntas comunes",
          objectives: ["O1"],
          minutes: 6,
          goal: "Responder tres preguntas comunes de entrevista con respuestas cortas y preparadas.",
          text: [
            "La mayoría de las entrevistas empiezan con las mismas pocas preguntas. Puedes preparar tus respuestas y practicarlas en voz alta. Las respuestas cortas y claras son mejores que las largas.",
            "\"Tell me about yourself.\" Responde hablando de tu trabajo, no de tu vida privada: \"I have three years of experience in a restaurant kitchen. I am fast and careful. I want to grow in food service.\" \"Why do you want this job?\" Respuesta: \"I like working with my hands, and this company has good training.\" \"When can you start?\" Respuesta: \"I can start next Monday.\"",
            "Otras preguntas comunes: \"What are your strengths?\" (\"I am on time and I learn fast.\") \"Can you work weekends?\" (\"Yes, I can work Saturdays.\") Al final muchas veces preguntan \"Do you have any questions?\" Ten una preparada: \"What does a normal day look like?\" o \"What are the hours?\"",
            "La experiencia de tu país de origen cuenta. Dilo: \"In Mexico I built houses for five years.\" Si no entendiste una pregunta, usa las frases que conoces: \"Sorry, can you repeat the question, please?\""
          ],
          steps: ["Escribe respuestas cortas a las preguntas comunes.", "Usa un ejemplo real de tu trabajo o de tu vida en cada una.", "Practica en voz alta hasta que puedas decirlas sin leer.", "Prepara una pregunta para hacer al final.", "Si no entiendes una pregunta, pide que la repitan."],
          words: [["\"Experience\"", "trabajo que ya hiciste antes."], ["\"Strengths\"", "cosas que haces bien."], ["\"Interview\"", "una reunión en la que un empleador te hace preguntas para decidir si te contrata."]],
          slides: [
            { title: "Prepara y practica", bullets: ["Las mismas preguntas salen una y otra vez", "Las respuestas cortas y claras ganan", "Practica en voz alta"] },
            { title: "\"Tell me about yourself.\"", bullets: ["Habla de trabajo, no de tu vida privada", "\"I have three years of experience in a kitchen.\"", "\"I am fast and careful.\""] },
            { title: "Más preguntas comunes", bullets: ["\"Why do you want this job?\"", "\"What are your strengths?\"", "\"When can you start?\" \"Can you work weekends?\""] },
            { title: "Te toca preguntar", bullets: ["\"Do you have any questions?\"", "\"What does a normal day look like?\"", "\"What are the hours?\""] }
          ],
          sources: [{ name: "USA Learns: cursos de inglés gratis para adultos (Oficina de Educación del Condado de Sacramento)", url: "https://www.usalearns.org/" }],
          tryIt: "Escribe tus respuestas a \"Tell me about yourself\", \"Why do you want this job?\" y \"When can you start?\" para un trabajo que quieras. Que cada una tenga de 2 a 4 oraciones. Léelas en voz alta tres veces, luego pide a un compañero que te entreviste, o grábate respondiendo.",
          youCanNow: "responder preguntas comunes de entrevista con respuestas cortas y preparadas, y hacer una pregunta al final de una entrevista.",
          quickCheck: [
            { objective: "O1", q: "El entrevistador dice \"Tell me about yourself.\" ¿Cuál es la mejor respuesta?", options: ["\"I have two years of experience cleaning offices. I am careful and on time.\"", "\"I don't know.\"", "\"I have three children and I like soccer and my favorite food is rice.\"", "\"What is your name?\""], answer: 0, why: "Habla del trabajo y de tus fortalezas en oraciones cortas y claras." },
            { objective: "O1", q: "El entrevistador pregunta \"Do you have any questions?\" ¿Qué es una buena respuesta?", options: ["\"No.\"", "\"Where is the bathroom?\"", "\"What does a normal day look like?\"", "\"Goodbye.\""], answer: 2, why: "Una pregunta sobre el trabajo muestra que te interesa." }
          ]
        },
        {
          title: "Palabras, señales y avisos de seguridad",
          objectives: ["O2"],
          minutes: 5,
          goal: "Decir qué significan las señales y los avisos de seguridad comunes y qué hacer.",
          text: [
            "Las palabras de seguridad son el inglés más importante en el trabajo. Apréndelas primero. Señales: \"Danger\" indica un peligro grave que puede matarte o lastimarte mucho. \"Caution\" o \"Warning\" significa ten cuidado. \"Exit\" es la salida. \"Authorized personnel only\" significa que solo pueden entrar los trabajadores con permiso. \"Wet floor\" significa que el piso está resbaloso.",
            "Los avisos hablados son cortos y fuertes: \"Watch out!\" \"Stop!\" \"Look out!\" \"Heads up!\" (algo puede caer o venir hacia ti). Cuando oigas uno, detente, mira y aléjate del peligro.",
            "Palabras del equipo de protección: \"Wear your gloves.\" \"Put on your safety glasses.\" \"Hard hat\" (un casco fuerte). \"Safety vest\" (un chaleco de color brillante para que los conductores te vean). \"Ear plugs\" (tapones para los oídos). Tu empleador te capacita en el equipo para tu trabajo. Si no entiendes la capacitación, pregunta.",
            "Conversación de ejemplo. Supervisor: \"Heads up! Forklift coming.\" Trabajador: \"Okay!\" (se hace para atrás). Supervisor: \"Always wear your vest in this area.\" Trabajador: \"Yes. My vest, always in this area.\""
          ],
          words: [["\"Hazard\"", "algo que puede lastimarte, como un piso mojado o una máquina en movimiento."], ["\"Danger\"", "palabra de las señales para un peligro grave que puede matarte o lastimarte mucho."], ["\"Caution\"", "palabra de las señales que significa ten cuidado."], ["\"Protective equipment\"", "equipo que te mantiene seguro, como guantes, lentes de seguridad o casco."]],
          slides: [
            { title: "Palabras de las señales", bullets: ["\"Danger\": peligro grave", "\"Caution\" / \"Warning\": ten cuidado", "\"Exit\": la salida", "\"Authorized personnel only\": se necesita permiso"] },
            { title: "Avisos hablados", bullets: ["\"Watch out!\" \"Stop!\" \"Look out!\"", "\"Heads up!\": algo viene hacia ti", "Detente, mira, aléjate"] },
            { title: "Equipo de protección", bullets: ["\"Wear your gloves.\"", "\"Put on your safety glasses.\"", "\"Hard hat\" \"Safety vest\" \"Ear plugs\""] }
          ],
          sources: [{ name: "OSHA: Derechos de los trabajadores (Departamento de Trabajo de EE. UU.)", url: "https://www.osha.gov/workers" }],
          tryIt: "Haz una tarjeta de palabras de seguridad para el trabajo que quieres: escribe cinco palabras o señales de seguridad que verás allí y lo que significa cada una. Di cada una en voz alta. Luego pide a un compañero que diga avisos (\"Watch out!\" \"Heads up!\") mientras tú muestras lo que harías.",
          youCanNow: "decir qué significan las señales, los avisos y las palabras del equipo de protección más comunes, y qué hacer cuando oyes un aviso.",
          quickCheck: [
            { objective: "O2", q: "Un compañero grita \"Heads up!\" ¿Qué haces?", options: ["Miras tu teléfono", "Te detienes, miras y te alejas de lo que viene", "Sigues trabajando", "Gritas \"Heads up\" también y te quedas ahí"], answer: 1, why: "\"Heads up!\" significa que algo puede caer o venir hacia ti." },
            { objective: "O2", q: "Una puerta tiene una señal: \"Authorized personnel only\". ¿Qué significa?", options: ["Cualquiera puede entrar", "Es la salida", "El piso está mojado", "Solo pueden entrar los trabajadores con permiso"], answer: 3, why: "\"Authorized personnel only\" significa que necesitas permiso para entrar." }
          ]
        },
        {
          title: "Reportar un problema o una lesión",
          objectives: ["O2"],
          minutes: 5,
          goal: "Reportar un peligro o una lesión a tu supervisor de inmediato.",
          text: [
            "Si ves algo peligroso, díselo a tu supervisor de inmediato: \"Excuse me, there is a problem. There is oil on the floor in aisle 4.\" \"This machine is making a strange noise.\" \"The ladder is broken.\"",
            "Si te lastimas, aunque sea un poco, díselo a tu supervisor el mismo día: \"I hurt my hand. I cut it on a box.\" \"I hurt my back when I lifted that.\" Di dónde y cuándo: \"It happened at 10 o'clock, at the loading dock.\" En una emergencia, llama al 911.",
            "En Estados Unidos, OSHA (la agencia federal de seguridad en el trabajo) dice que los trabajadores tienen derechos, entre ellos recibir capacitación de seguridad en un idioma que entiendan, reportar una lesión de trabajo y pedir una inspección de un lugar de trabajo peligroso. La ley dice que tu empleador no puede castigarte por usar estos derechos. Revisa osha.gov/workers para ver los detalles.",
            "Conversación de ejemplo. Trabajador: \"Excuse me, I need to report something. I slipped and hurt my knee.\" Supervisor: \"When did it happen?\" Trabajador: \"About ten minutes ago, near the freezer.\" Supervisor: \"Okay, let's fill out a report.\""
          ],
          steps: ["Di \"Excuse me, I need to report something.\"", "Di qué está mal: el peligro o la lesión.", "Di dónde y cuándo pasó.", "Reporta una lesión el mismo día, aunque sea pequeña.", "En una emergencia, llama al 911."],
          words: [["\"Report\"", "avisar a la persona correcta sobre un problema."], ["\"Injury\"", "daño a tu cuerpo, como una cortada, una quemadura o la espalda lastimada."], ["\"Supervisor\"", "la persona a cargo de tu trabajo."], ["OSHA", "la Administración de Seguridad y Salud Ocupacional (Occupational Safety and Health Administration), la agencia federal de EE. UU. para la seguridad en el trabajo."]],
          slides: [
            { title: "Reporta un peligro", bullets: ["\"Excuse me, there is a problem.\"", "\"There is oil on the floor in aisle 4.\"", "\"The ladder is broken.\""] },
            { title: "Reporta una lesión", bullets: ["\"I hurt my hand. I cut it on a box.\"", "Di dónde y cuándo", "El mismo día, aunque sea pequeña"] },
            { title: "Tus derechos (OSHA)", bullets: ["Capacitación de seguridad en un idioma que entiendas", "Reportar una lesión; pedir una inspección", "Tu empleador no puede castigarte por esto", "Detalles: osha.gov/workers"] }
          ],
          sources: [{ name: "OSHA: Derechos de los trabajadores (Departamento de Trabajo de EE. UU.)", url: "https://www.osha.gov/workers" }],
          tryIt: "Solo para practicar: escribe dos reportes cortos, uno sobre un peligro (por ejemplo un piso mojado) y otro sobre una lesión pequeña inventada. Cada uno dice qué, dónde y cuándo. Dilos en voz alta como si hablaras con tu supervisor.",
          youCanNow: "reportar un peligro o una lesión a tu supervisor, diciendo qué, dónde y cuándo, y nombrar tus derechos básicos de seguridad.",
          quickCheck: [
            { objective: "O2", q: "Ves una escalera rota en el trabajo. ¿Qué le dices a tu supervisor?", options: ["Nada; alguien más la verá", "\"Excuse me, the ladder in the back room is broken.\"", "\"Watch out!\" y te vas a casa", "\"Can I have a day off?\""], answer: 1, why: "Decirle a tu supervisor qué pasa y dónde le permite arreglar el peligro antes de que alguien se lastime." },
            { objective: "O2", q: "Te cortas un poco un dedo en el trabajo. ¿Cuándo lo reportas?", options: ["El mes que viene", "Solo si empeora", "Nunca", "El mismo día"], answer: 3, why: "Reporta toda lesión de trabajo el mismo día, aunque sea pequeña." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conseguir el trabajo y mantenerte seguro",
        questions: [
          { objective: "O1", q: "El entrevistador pregunta \"When can you start?\" ¿Cuál es una respuesta clara?", options: ["\"I can start next Monday.\"", "\"Maybe.\"", "\"I like this company.\"", "\"Where is the exit?\""], answer: 0, why: "Da un día claro." },
          { objective: "O1", q: "No entendiste la pregunta de la entrevista. ¿Qué dices?", options: ["\"Yes.\"", "Nada", "\"Sorry, can you repeat the question, please?\"", "\"Goodbye.\""], answer: 2, why: "Pedir que repitan es mejor que adivinar la respuesta." },
          { objective: "O2", q: "Una señal dice \"Danger\". ¿Qué significa?", options: ["El baño", "Un lugar para descansar", "Un peligro grave que puede matarte o lastimarte mucho", "Una sala de descanso"], answer: 2, why: "\"Danger\" marca los peligros más graves." },
          { objective: "O2", q: "¿Cuál de estas cosas es equipo de protección?", options: ["Lentes de seguridad", "Un horario", "Un cheque de pago", "Un recibo"], answer: 0, why: "Los lentes de seguridad protegen tus ojos." },
          { objective: "O2", q: "Te lastimaste la espalda al levantar una caja. ¿Qué dices?", options: ["\"Watch out!\"", "\"When can I start?\"", "\"Do you have any questions?\"", "\"I need to report something. I hurt my back lifting a box at 2 o'clock.\""], answer: 3, why: "Dice qué pasó, cómo y cuándo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cada día en el trabajo",
      lessons: [
        {
          title: "Pedir ayuda y confirmar instrucciones",
          objectives: ["O3"],
          minutes: 5,
          goal: "Pedir ayuda y repetir una instrucción antes de empezar.",
          text: [
            "En el trabajo, un error puede costar tiempo, dinero o seguridad. Siempre es mejor preguntar que adivinar. Los buenos trabajadores hacen preguntas.",
            "Para pedir ayuda: \"Excuse me, can you help me?\" \"Can you show me how to do this?\" \"Where do I put these boxes?\" \"What should I do next?\" Si no entendiste: \"Sorry, can you explain that again, more slowly?\"",
            "Antes de empezar, repite la instrucción: \"So, first I clean the tables, then I fill the napkins?\" o \"Okay, I put the blue boxes on shelf 3. Is that right?\" Tu supervisor dirá \"Yes\" o te corregirá.",
            "Conversación de ejemplo. Supervisor: \"Please restock aisle 7 and then break down the empty boxes.\" Trabajador: \"Okay. So, first I restock aisle 7, then I break down the boxes. Where do the boxes go?\" Supervisor: \"In the recycling by the back door.\" Trabajador: \"Got it. Thank you.\""
          ],
          steps: ["Escucha toda la instrucción.", "Pregunta lo que no entendiste.", "Repite los pasos: \"So, first ..., then ...?\"", "Espera el \"Yes\" antes de empezar.", "Si te atoras, vuelve a preguntar: \"What should I do next?\""],
          words: [["\"Instruction\"", "palabras que te dicen cómo hacer una tarea."], ["\"Show me\"", "hazlo frente a mí para que vea cómo."], ["\"Got it\"", "una forma corta de decir \"I understand\" (entiendo)."]],
          slides: [
            { title: "Pregunta, no adivines", bullets: ["Los errores cuestan tiempo, dinero y seguridad", "Los buenos trabajadores hacen preguntas"] },
            { title: "Pedir ayuda", bullets: ["\"Excuse me, can you help me?\"", "\"Can you show me how to do this?\"", "\"What should I do next?\""] },
            { title: "Repite la instrucción", bullets: ["\"So, first I clean the tables, then I fill the napkins?\"", "\"Is that right?\"", "Espera el \"Yes\" antes de empezar"] }
          ],
          tryIt: "Pide a un compañero o a un familiar que te dé una instrucción de tres pasos en inglés (por ejemplo cómo hacer un sándwich o doblar una camisa). Repítela con \"So, first ..., then ...?\" antes de hacerla. Luego cambien de papel.",
          youCanNow: "pedir ayuda a un supervisor o compañero, y repetir una instrucción para confirmarla antes de empezar.",
          quickCheck: [
            { objective: "O3", q: "Tu supervisor te da una instrucción larga. ¿Qué haces antes de empezar?", options: ["Empiezas y esperas que esté bien", "Repites los pasos para confirmar", "Le preguntas a un cliente", "Te vas al descanso"], answer: 1, why: "Repetir los pasos detecta errores antes de empezar." },
            { objective: "O3", q: "No sabes usar la máquina nueva. ¿Qué dices?", options: ["\"Can you show me how to do this?\"", "\"Got it.\"", "\"Heads up!\"", "Nada; la usas de todos modos"], answer: 0, why: "\"Can you show me?\" pide ayuda de forma segura y clara." }
          ]
        },
        {
          title: "Horarios: turnos, llegar tarde, días de enfermedad y tiempo libre",
          objectives: ["O4"],
          minutes: 6,
          goal: "Leer los horarios de tus turnos y avisar a tu supervisor que llegarás tarde, que estás enfermo o que necesitas tiempo libre.",
          text: [
            "Un turno (\"shift\") es el tiempo que trabajas, por ejemplo \"Monday, 7 a.m. to 3:30 p.m.\" \"a.m.\" es la mañana (antes de las 12 del mediodía) y \"p.m.\" es la tarde y la noche. Tu horario también puede decir \"OFF\" en los días que no trabajas.",
            "Si vas a llegar tarde, avisa a tu supervisor antes de tu turno: \"Hi, this is Carlos. I'm sorry, my bus is late. I will be about 20 minutes late.\" Si estás enfermo: \"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\" Cada empleador tiene sus propias reglas para avisar, así que revisa tu manual o pregunta a tu supervisor cómo y cuándo avisarle.",
            "Para pedir tiempo libre, pídelo con anticipación, en persona o por escrito: \"Can I have Friday the 14th off? I have an appointment.\" Para cambiar un turno con un compañero: \"Can I switch shifts with Maria on Saturday?\"",
            "Mensaje de texto de ejemplo: \"Hi Ms. Johnson, this is Carlos from the morning shift. I am sick today and cannot come in. I'm sorry. I will let you know about tomorrow.\""
          ],
          steps: ["Lee tu horario: los días, las horas de entrada y de salida.", "Si llegas tarde o estás enfermo: avisa a tu supervisor antes de tu turno.", "Di quién eres, qué pasa y cuándo llegarás.", "Pide tiempo libre con anticipación y di la fecha.", "Sigue las reglas de tu empleador para avisar."],
          words: [["\"Shift\"", "las horas que trabajas en un día."], ["\"Call in sick\"", "avisar a tu empleador que estás enfermo y no puedes trabajar."], ["\"Time off\"", "días que pides para no trabajar."], ["\"Switch shifts\"", "cambiar horarios de trabajo con un compañero."]],
          slides: [
            { title: "Lee tu horario", bullets: ["\"Monday, 7 a.m. to 3:30 p.m.\"", "\"a.m.\" = mañana, \"p.m.\" = tarde y noche", "\"OFF\" = no trabajas"] },
            { title: "Tarde o enfermo", bullets: ["Avisa antes de tu turno", "\"I will be about 20 minutes late.\"", "\"I'm sick today and I can't come in.\""] },
            { title: "Tiempo libre y cambios de turno", bullets: ["\"Can I have Friday the 14th off?\"", "\"Can I switch shifts with Maria on Saturday?\"", "Pide con anticipación"] },
            { title: "Las reglas de tu empleador", bullets: ["Cada empleador tiene sus propias reglas para avisar", "Revisa tu manual o pregunta a tu supervisor"] }
          ],
          tryIt: "Escribe dos mensajes a un supervisor con un nombre inventado: uno para decir que llegarás 15 minutos tarde y otro para avisar que estás enfermo. Cada uno dice quién eres, qué pasa y cuándo llegarás. Léelos en voz alta como si fuera una llamada.",
          youCanNow: "leer los horarios de tus turnos y avisar claramente a tu supervisor que llegarás tarde, que estás enfermo o que necesitas tiempo libre.",
          quickCheck: [
            { objective: "O4", q: "Tu horario dice \"Tuesday 2 p.m. - 10 p.m.\" ¿A qué hora empiezas a trabajar?", options: ["A las 2 de la madrugada", "A las 10 de la mañana", "A las 2 de la tarde", "A las 10 de la noche"], answer: 2, why: "\"p.m.\" significa tarde o noche, así que 2 p.m. son las 2 de la tarde." },
            { objective: "O4", q: "Tu autobús viene tarde y no llegarás al inicio de tu turno. ¿Qué haces?", options: ["Avisas a tu supervisor antes de que empiece tu turno", "No dices nada y llegas tarde", "Te vas a casa", "Le avisas a un cliente"], answer: 0, why: "Avisar a tu supervisor con tiempo es respetuoso y le ayuda a organizarse." }
          ]
        },
        {
          title: "Hablar con los clientes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Saludar a un cliente, ofrecer ayuda y buscar a otro trabajador cuando no puedes ayudar.",
          text: [
            "A los clientes les gustan los trabajadores amables y claros. Salúdalos: \"Hi, welcome!\" o \"Good morning.\" Ofrece ayuda: \"Can I help you find something?\" \"What can I get for you?\"",
            "Si sabes la respuesta, que sea corta: \"Yes, it's in aisle 9.\" \"It comes with fries.\" Si no sabes, nunca adivines. Di: \"Let me check for you.\" o \"One moment, please. I'll get my manager.\"",
            "Si el cliente habla muy rápido: \"Sorry, could you say that again, please?\" Si está molesto, mantén la calma y sé amable: \"I'm sorry about that. Let me get someone who can help.\" Termina con: \"Have a nice day!\"",
            "Conversación de ejemplo. Trabajador: \"Hi, welcome! Can I help you find something?\" Cliente: \"Do you have this jacket in a large?\" Trabajador: \"Let me check for you. One moment, please.\" (revisa) \"Yes, here you go.\" Cliente: \"Thanks!\" Trabajador: \"You're welcome. Have a nice day!\""
          ],
          steps: ["Saluda: \"Hi, welcome!\"", "Ofrece ayuda: \"Can I help you find something?\"", "Responde corto si sabes.", "Si no sabes: \"Let me check for you.\" o busca a un gerente.", "Termina: \"Have a nice day!\""],
          words: [["\"Customer\"", "una persona que compra o usa lo que vende un negocio."], ["\"Manager\"", "una persona que está a cargo de una tienda o de un equipo."], ["\"Let me check\"", "una forma amable de decir que vas a buscar la respuesta."]],
          slides: [
            { title: "Saluda y ofrece ayuda", bullets: ["\"Hi, welcome!\"", "\"Can I help you find something?\"", "\"What can I get for you?\""] },
            { title: "¿No sabes? No adivines", bullets: ["\"Let me check for you.\"", "\"One moment, please. I'll get my manager.\""] },
            { title: "Momentos difíciles", bullets: ["\"Sorry, could you say that again, please?\"", "Cliente molesto: \"I'm sorry about that.\"", "\"Let me get someone who can help.\""] },
            { title: "Termina bien", bullets: ["\"You're welcome.\"", "\"Have a nice day!\""] }
          ],
          tryIt: "Tarea final: escribe tu guion de inglés para el trabajo que quieres: tu respuesta a \"Tell me about yourself\", otras dos respuestas de entrevista, tres palabras de seguridad con su significado, un mensaje para avisar que estás enfermo o que llegarás tarde, y dos frases para un cliente o para pedir ayuda a un compañero. Practícalo en voz alta o en un juego de roles, y grábate si puedes.",
          youCanNow: "saludar a un cliente, ofrecer ayuda y buscar a la persona correcta cuando no sabes la respuesta.",
          quickCheck: [
            { objective: "O5", q: "Un cliente hace una pregunta y no sabes la respuesta. ¿Qué dices?", options: ["Adivinas una respuesta", "\"I don't know\" y te vas", "\"That's not my job.\"", "\"Let me check for you.\""], answer: 3, why: "Revisar o buscar a un gerente es amable y le da al cliente la respuesta correcta." },
            { objective: "O5", q: "Un cliente se te acerca. ¿Qué es bueno decir primero?", options: ["\"What?\"", "\"Hi, welcome! Can I help you find something?\"", "\"Heads up!\"", "\"I'm sick today.\""], answer: 1, why: "Un saludo y una oferta de ayuda empiezan bien la conversación." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Cada día en el trabajo",
        questions: [
          { objective: "O3", q: "Tu supervisor dice \"Put the red boxes on shelf 2.\" ¿Cómo confirmas?", options: ["\"Got it\" y las pones en el estante 3", "\"So, the red boxes go on shelf 2?\"", "No dices nada", "\"Have a nice day!\""], answer: 1, why: "Repetir la instrucción confirma que la oíste bien." },
          { objective: "O3", q: "Terminaste tu tarea y no sabes qué hacer. ¿Qué preguntas?", options: ["\"What should I do next?\"", "\"Can I go home?\"", "\"Where is the exit?\"", "\"Watch out!\""], answer: 0, why: "Preguntar qué sigue muestra que estás listo para trabajar." },
          { objective: "O4", q: "¿Qué es un \"shift\"?", options: ["Un tipo de uniforme", "Una señal de seguridad", "Las horas que trabajas en un día", "Un día libre"], answer: 2, why: "Un \"shift\" (turno) es el tiempo que trabajas." },
          { objective: "O4", q: "Necesitas el próximo viernes libre por una cita. ¿Qué dices y cuándo?", options: ["Nada; simplemente no vas", "Se lo dices a un cliente el viernes", "Le mandas un mensaje a tu supervisor durante tu turno del viernes", "Le preguntas a tu supervisor con anticipación: \"Can I have Friday the 14th off?\""], answer: 3, why: "Pedirlo con anticipación, con la fecha, le da tiempo a tu supervisor para organizarse." },
          { objective: "O5", q: "Un cliente está molesto. ¿Qué es lo mejor que puedes decir?", options: ["\"Not my problem.\"", "\"Calm down!\"", "\"I'm sorry about that. Let me get someone who can help.\"", "\"Goodbye.\""], answer: 2, why: "Mantener la calma y buscar ayuda es amable y resuelve el problema." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Inglés para el trabajo (ESL)",
    questions: [
      { objective: "O1", q: "En una entrevista, \"Tell me about yourself\" significa:", options: ["Habla de tu trabajo y de tus fortalezas", "Cuenta toda la historia de tu vida", "Pregúntales sobre ellos", "Di tu dirección"], answer: 0, why: "Quieren oír sobre tu trabajo, tus habilidades y tus metas en pocas oraciones." },
      { objective: "O1", q: "¿Cuál es una buena respuesta a \"What are your strengths?\"", options: ["\"Nothing.\"", "\"I don't know.\"", "\"I'm sick today.\"", "\"I am always on time and I learn fast.\""], answer: 3, why: "Nombra dos cosas que haces bien." },
      { objective: "O1", q: "Trabajaste en construcción en tu país de origen. ¿Debes decirlo en la entrevista?", options: ["No, no cuenta", "Sí: \"In Mexico I built houses for five years.\"", "Solo si te preguntan en español", "Solo por escrito"], answer: 1, why: "La experiencia de trabajo de tu país de origen cuenta y muestra tus habilidades." },
      { objective: "O2", q: "¿Qué significa una señal de \"Caution\"?", options: ["Ten cuidado", "La salida", "La sala de descanso", "Comida gratis"], answer: 0, why: "\"Caution\" significa ten cuidado." },
      { objective: "O2", q: "Alguien grita \"Watch out!\" ¿Qué haces?", options: ["Sigues caminando", "Gritas también", "Te detienes, miras y te alejas del peligro", "Cierras los ojos"], answer: 2, why: "\"Watch out!\" te avisa de un peligro cerca de ti." },
      { objective: "O2", q: "¿Qué es un \"hazard\"?", options: ["Un tipo de herramienta", "Algo que puede lastimarte", "Un cliente", "Un horario"], answer: 1, why: "Un \"hazard\" (peligro) es algo que puede lastimarte, como un piso mojado." },
      { objective: "O2", q: "Ves aceite en el piso del pasillo 4. ¿Qué le dices a tu supervisor?", options: ["\"Have a nice day!\"", "\"Can I switch shifts?\"", "\"Got it.\"", "\"Excuse me, there is oil on the floor in aisle 4.\""], answer: 3, why: "Di cuál es el peligro y dónde está." },
      { objective: "O2", q: "¿Cuál de estos es un derecho del trabajador en la lista de OSHA?", options: ["Almuerzo gratis todos los días", "Capacitación de seguridad en un idioma que entiendas", "Elegir tu propio sueldo", "No tener horario"], answer: 1, why: "OSHA incluye la capacitación de seguridad en un idioma que entiendas como un derecho del trabajador." },
      { objective: "O2", q: "¿Cuándo debes reportar una lesión pequeña en el trabajo?", options: ["El mismo día", "Solo si empeora", "Al final del año", "Nunca"], answer: 0, why: "Reporta toda lesión el mismo día, aunque sea pequeña." },
      { objective: "O3", q: "No entiendes una instrucción. ¿Qué es lo mejor?", options: ["Adivinar y empezar", "Preguntarle a un cliente", "Preguntar: \"Sorry, can you explain that again, more slowly?\"", "Irte a casa"], answer: 2, why: "Preguntar es más seguro y más rápido que adivinar." },
      { objective: "O3", q: "¿Qué oración repite una instrucción?", options: ["\"Hi, welcome!\"", "\"Heads up!\"", "\"I'm sick today.\"", "\"So, first I sweep, then I mop. Is that right?\""], answer: 3, why: "Repite los pasos y pregunta si están bien." },
      { objective: "O3", q: "¿Qué significa \"Got it\"?", options: ["Entiendo", "Tengo un resfriado", "Lo perdí", "Dámelo"], answer: 0, why: "\"Got it\" es una forma corta de decir \"I understand\" (entiendo)." },
      { objective: "O4", q: "¿Qué significa \"a.m.\" en un horario?", options: ["La tarde", "La noche", "La mañana, antes de las 12 del mediodía", "Un día libre"], answer: 2, why: "\"a.m.\" es la mañana." },
      { objective: "O4", q: "Estás enfermo. ¿Cuál es un buen mensaje para tu supervisor?", options: ["\"Not coming.\"", "\"Hi, this is Carlos. I'm sick today and I can't come in. I'm sorry.\"", "Nada", "\"Watch out!\""], answer: 1, why: "Dice quién eres, qué pasa y que no vas a ir." },
      { objective: "O4", q: "¿Cómo encuentras las reglas de tu trabajo para avisar una ausencia?", options: ["Le preguntas a un cliente", "Adivinas", "Usas las reglas de otra empresa", "Revisas tu manual o le preguntas a tu supervisor"], answer: 3, why: "Cada empleador tiene sus propias reglas para avisar." },
      { objective: "O5", q: "¿Qué significa \"Let me check for you\"?", options: ["Voy a buscar la respuesta", "Vete", "Yo soy el gerente", "Es gratis"], answer: 0, why: "Dice con amabilidad que vas a buscar la respuesta." },
      { objective: "O5", q: "Un cliente pregunta por algo que no conoces. ¿Qué NO debes hacer?", options: ["Buscar a tu gerente", "Decir \"Let me check for you\"", "Adivinar una respuesta", "Preguntarle a un compañero"], answer: 2, why: "Adivinar puede darle información equivocada al cliente." },
      { objective: "O5", q: "¿Cuál es una forma amable de despedirte de un cliente?", options: ["\"What?\"", "\"Have a nice day!\"", "\"Heads up!\"", "\"I'm late.\""], answer: 1, why: "\"Have a nice day!\" es una despedida amistosa." },
      { objective: "O1", q: "Al final de una entrevista, ¿qué pregunta es buena para hacer?", options: ["\"What does a normal day look like?\"", "\"Can I leave now?\"", "\"Watch out!\"", "\"Where is the bathroom?\""], answer: 0, why: "Una pregunta sobre el trabajo muestra que te interesa." },
      { objective: "O3", q: "Tu nueva tarea tiene un paso que no sabes hacer. ¿Qué dices?", options: ["\"Have a nice day!\"", "\"I'm sick today.\"", "\"Let me check for you.\"", "\"Can you show me how to do this step?\""], answer: 3, why: "Pedir que te muestren es la forma segura de aprender un paso nuevo." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, practica esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Respuestas de entrevista", objective: "O1", notYet: "Faltan respuestas, son muy largas o hablan de la vida privada en lugar del trabajo.", meets: "\"Tell me about yourself\" y otras dos respuestas, cada una de 2 a 4 oraciones claras con un ejemplo real.", exceeds: "Las dice en voz alta sin leer y agrega una pregunta para hacer al final." },
      { name: "Palabras de seguridad", objective: "O2", notYet: "Menos de tres palabras, o los significados están mal.", meets: "Tres palabras o señales de seguridad del trabajo, cada una con el significado correcto.", exceeds: "También muestra cómo reportar un peligro o una lesión: qué, dónde y cuándo." },
      { name: "Pedir ayuda", objective: "O3", notYet: "No hay frase para pedir ayuda, o no hay forma de confirmar una instrucción.", meets: "Una frase para pedir ayuda y una oración que repite una instrucción.", exceeds: "Las usa bien en un juego de roles con un compañero." },
      { name: "Mensaje de llegada tarde o enfermedad", objective: "O4", notYet: "Falta quién eres, qué pasa o cuándo llegarás.", meets: "Un mensaje claro y amable con nombre, motivo y hora.", exceeds: "También anota cómo quiere su empleador que se avisen las ausencias (manual o supervisor)." },
      { name: "Frases para clientes", objective: "O5", notYet: "No hay frases para clientes, o las frases no son amables.", meets: "Un saludo con una oferta de ayuda, y una frase para cuando no sabes.", exceeds: "Atiende con amabilidad a un cliente molesto en un juego de roles." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que tienen una entrevista de trabajo en inglés en los 30 días siguientes, y cuántos reciben una oferta (encuesta de seguimiento)",
      "Participantes que dicen haber pedido ayuda a un supervisor o reportado un peligro en inglés en los 30 días siguientes",
      "Los empleadores aliados reportan menos errores e incidentes de seguridad causados por instrucciones mal entendidas"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para ver las lecciones, o una copia impresa del texto de las lecciones",
      "Papel y lápiz para los guiones y las tarjetas de palabras de seguridad",
      "Un compañero para los juegos de roles, o un teléfono para grabarte",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Haz cada conversación de ejemplo como juego de roles: léanla, cambien de papel y luego cambien los detalles (otro trabajo, otra hora u otro problema).",
      "Las versiones traducidas dejan las frases en inglés en inglés; explícalas en el idioma de los participantes, pero practíquenlas en inglés.",
      "Adapta la lección de seguridad a los trabajos que buscan los participantes; si puedes, trae señales reales o fotos de lugares de trabajo de la zona.",
      "Las reglas para avisar ausencias, pedir tiempo libre y de seguridad cambian según el empleador: recuerda a los participantes que sigan el manual y la capacitación de su propio empleador. Este curso enseña el idioma, no las reglas del empleador.",
      "Usa nombres y detalles inventados en los reportes y mensajes de práctica. Combina este curso con ayuda para buscar trabajo (ver \"Currículum, LinkedIn y entrevistas de trabajo\")."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of shared/esl-everyday-english.js). See scripts/koachlearn-courses/README.md, "Translations".
// ESL course: every English phrase being taught stays in English, inside double quotes; only the explanations are translated.

module.exports = {
  id: "esl-everyday-english-es",
  lang: "es",
  translationOf: "esl-everyday-english",
  category: "Workforce Development",
  name: "Inglés para la vida diaria (ESL)",
  skills: "Presentarte, Pedir que repitan o hablen más despacio, Comprar y pagar, Hablar con el médico y hacer citas, Preguntar cómo llegar",
  outcome: "usar frases cortas y amables en inglés para presentarte, pedir a la gente que repita o hable más despacio, comprar y pagar, decirle al médico qué te pasa, hacer una cita por teléfono y preguntar cómo llegar a un lugar.",
  about: [
    "Este curso es para personas adultas que están aprendiendo inglés y quieren usarlo en la vida diaria en los Estados Unidos: en la tienda, en el médico, por teléfono, en la escuela de tus hijos y en la calle.",
    "Cada lección te da frases cortas para decir, una conversación corta de ejemplo y práctica que puedes hacer en voz alta en casa, solo o con un compañero. No necesitas una gramática perfecta. Necesitas frases que funcionen y el valor de usarlas.",
    "Cada lección dura unos cinco minutos. Lee la lección, lee en voz alta la conversación de ejemplo y luego haz la tarea \"Pruébalo ahora\". Hay dos preguntas rápidas después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final.",
    "Al final haces tu propia tarjeta de frases de inglés para la vida diaria, con las oraciones que más necesitas, y la practicas en voz alta. Las frases en inglés están entre comillas: apréndelas y dilas en inglés, tal como están escritas."
  ],
  finalTask: "Haz tu propia tarjeta de frases de inglés para la vida diaria y practícala en voz alta. En una página escribe en inglés: (1) una presentación de 3 o 4 oraciones sobre ti, (2) tres frases para pedir a alguien que repita, hable más despacio o deletree, (3) dos preguntas para una tienda a la que vas, (4) un guion telefónico corto para hacer una cita con el médico y (5) una pregunta para pedir indicaciones hacia un lugar al que vas seguido. Lee toda la tarjeta en voz alta, o practícala con un compañero en un juego de roles, y grábate si puedes.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que aprenden inglés como segundo idioma en los Estados Unidos: inmigrantes y refugiados, personas que buscan trabajo, padres y madres, adultos mayores y personas que regresan a casa después de estar en prisión y cuyo primer idioma no es el inglés.",
    startingPoint: "Conocen algunas palabras en inglés y pueden decir algunos saludos. Pueden leer oraciones cortas y sencillas. A menudo entienden más de lo que pueden decir, y se ponen nerviosas al hablar con desconocidos o por teléfono.",
    gap: "La vida diaria exige inglés hablado y corto: conocer gente, comprar, ir al médico, hacer llamadas y pedir indicaciones. Sin unas cuantas frases listas y sin una forma de pedir que repitan o hablen más despacio, las personas evitan estas conversaciones, dependen de otros o entienden mal cosas importantes, como la hora de una cita.",
    constraints: [
      "Nivel de idioma: inglés de principiante a intermedio bajo; palabras muy comunes y oraciones cortas",
      "El curso se traduce: las frases en inglés que se enseñan quedan en inglés, entre comillas",
      "Dispositivos: un teléfono o una computadora de la biblioteca; la práctica funciona con papel y la voz",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo y la familia",
      "Privacidad: la práctica usa nombres, números y fechas de nacimiento inventados, nunca números privados reales"
    ],
    prerequisites: "Saber leer el alfabeto y palabras sencillas en inglés. Quien todavía no lee en inglés puede hacer el curso con un maestro o una persona que le lea en voz alta."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Cuando conoces a una persona nueva", action: "presentarte en inglés con tu nombre, de dónde eres y a qué te dedicas, y hacer una pregunta de vuelta", standard: "en al menos tres oraciones cortas" },
    { id: "O2", condition: "Cuando no entiendes lo que alguien dice", action: "pedir a la persona que repita, hable más despacio o deletree una palabra con una frase amable en inglés", standard: "en lugar de fingir que entiendes" },
    { id: "O3", condition: "En una tienda", action: "preguntar dónde está un producto, preguntar el precio y decir cómo vas a pagar", standard: "usando frases de la lección" },
    { id: "O4", condition: "En el consultorio médico o por teléfono", action: "decir qué te pasa y hacer una cita para un día y una hora que te convengan", standard: "dando tu nombre, el problema y la hora, y repitiendo la hora para confirmarla" },
    { id: "O5", condition: "Cuando necesitas ir a un lugar", action: "pedir indicaciones y repetirlas para comprobar que las entendiste", standard: "usando palabras de dirección como \"left\", \"right\", \"straight\" y \"next to\"" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conocer gente y hacer compras",
      lessons: [
        {
          title: "Saludar y presentarte",
          objectives: ["O1"],
          minutes: 5,
          goal: "Presentarte en tres oraciones cortas y hacer una pregunta de vuelta.",
          text: [
            "Cuando conoces a alguien, empieza con un saludo: \"Hello.\" o \"Hi.\" Por la mañana puedes decir \"Good morning.\" Luego di tu nombre: \"My name is Ana.\" o \"I'm Ana.\"",
            "Agrega de dónde eres y a qué te dedicas: \"I'm from Guatemala.\" \"I work at a restaurant.\" \"I'm looking for a job.\" Luego haz una pregunta de vuelta: \"What's your name?\" \"Where are you from?\" Cuando te respondan, di \"Nice to meet you.\"",
            "Conversación de ejemplo. A: \"Hi, I'm Ana. What's your name?\" B: \"I'm Sam. Nice to meet you.\" A: \"Nice to meet you too. I'm from Guatemala. I work at a restaurant.\" B: \"Oh, which one?\"",
            "No necesitas oraciones largas. Tres oraciones cortas y claras son una buena presentación. Sonríe, mira a la persona y habla un poco despacio."
          ],
          steps: ["Saluda: \"Hello.\" o \"Good morning.\"", "Di tu nombre: \"My name is ...\" o \"I'm ...\"", "Di de dónde eres: \"I'm from ...\"", "Di a qué te dedicas: \"I work at ...\" o \"I'm looking for a job.\"", "Haz una pregunta de vuelta: \"What's your name?\" Luego di \"Nice to meet you.\""],
          words: [["\"I'm\"", "forma corta de decir \"I am\" (yo soy / yo estoy)."], ["\"Nice to meet you\"", "frase amable que se dice al conocer a alguien por primera vez (mucho gusto)."], ["Presentarte", "decirle a una persona nueva quién eres."]],
          slides: [
            { title: "Saluda a la persona", bullets: ["\"Hello.\" \"Hi.\"", "\"Good morning.\" \"Good afternoon.\""] },
            { title: "Tres oraciones cortas", bullets: ["\"My name is Ana.\"", "\"I'm from Guatemala.\"", "\"I work at a restaurant.\""] },
            { title: "Haz una pregunta de vuelta", bullets: ["\"What's your name?\"", "\"Where are you from?\"", "Luego: \"Nice to meet you.\""] },
            { title: "Consejos", bullets: ["Corto y claro es mejor", "Sonríe y mira a la persona", "Habla un poco despacio"] }
          ],
          sources: [{ name: "USA Learns: cursos de inglés gratis para adultos (Oficina de Educación del Condado de Sacramento)", url: "https://www.usalearns.org/" }],
          tryIt: "Escribe tu propia presentación en inglés: tu nombre, de dónde eres y a qué te dedicas, en tres oraciones cortas. Agrega una pregunta para hacer de vuelta. Léela en voz alta tres veces. Luego dila sin mirar el papel.",
          youCanNow: "presentarte en tres oraciones cortas en inglés y hacerle una pregunta de vuelta a una persona nueva.",
          quickCheck: [
            { objective: "O1", q: "Alguien te dice \"Nice to meet you.\" ¿Qué es una buena respuesta?", options: ["\"Goodbye.\"", "\"Nice to meet you too.\"", "\"I don't know.\"", "\"How much is it?\""], answer: 1, why: "\"Nice to meet you too\" es la respuesta amable cuando conoces a alguien." },
            { objective: "O1", q: "¿Qué presentación tiene el nombre, de dónde es la persona y a qué se dedica?", options: ["\"Hello. Hello. Hello.\"", "\"Where is the bus?\"", "\"I like pizza.\"", "\"I'm Ali. I'm from Somalia. I drive a truck.\""], answer: 3, why: "Da el nombre, el país y el trabajo en tres oraciones cortas." }
          ]
        },
        {
          title: "Pedir que repitan, hablen más despacio o deletreen",
          objectives: ["O2"],
          minutes: 5,
          goal: "Pedir a una persona que repita, hable más despacio o deletree una palabra con una frase amable.",
          text: [
            "Todo el mundo se pierde palabras a veces, incluso quienes hablan inglés desde niños. Es normal y amable preguntar. Es mucho mejor que decir \"yes\" cuando no entendiste.",
            "Frases útiles: \"Sorry, can you repeat that, please?\" \"Can you speak more slowly, please?\" \"How do you spell that?\" \"What does that word mean?\" \"Can you write it down, please?\"",
            "Para comprobar que entendiste, repítelo: \"So, Tuesday at 3 o'clock?\" Si solo te perdiste una parte, pregunta por esa parte: \"Sorry, what time?\"",
            "Conversación de ejemplo. A: \"Your pickup is at the side entrance at four fifteen.\" B: \"Sorry, can you speak more slowly, please?\" A: \"Side entrance. Four fifteen.\" B: \"So, the side door at 4:15?\" A: \"Yes, that's right.\""
          ],
          steps: ["No finjas que entiendes.", "Di \"Sorry,\" y pide que repitan, hablen más despacio, deletreen o lo escriban.", "Repite la parte importante para comprobarla.", "Espera el \"Yes, that's right.\""],
          words: [["\"Repeat\"", "decirlo otra vez (repetir)."], ["\"Slowly\"", "no rápido (despacio)."], ["\"Spell\"", "decir las letras de una palabra una por una (deletrear)."]],
          slides: [
            { title: "Preguntar es normal y amable", bullets: ["Todo el mundo se pierde palabras a veces", "Preguntar es mejor que un \"yes\" equivocado"] },
            { title: "Frases para preguntar", bullets: ["\"Sorry, can you repeat that, please?\"", "\"Can you speak more slowly, please?\"", "\"How do you spell that?\"", "\"Can you write it down, please?\""] },
            { title: "Comprueba lo que oíste", bullets: ["Repítelo: \"So, Tuesday at 3 o'clock?\"", "Pregunta por una parte: \"Sorry, what time?\""] }
          ],
          tryIt: "Escribe las cuatro frases para pedir ayuda en una tarjeta pequeña y guárdala en tu bolsillo o en tu teléfono. Lee cada una en voz alta cinco veces. Luego pon una estación de radio o un video en inglés, y cada vez que te pierdas algo, di una de las frases en voz alta.",
          youCanNow: "pedir a alguien que repita, hable más despacio, deletree o escriba una palabra, y repetir lo que oíste para comprobarlo.",
          quickCheck: [
            { objective: "O2", q: "Un empleado habla muy rápido y no entiendes. ¿Qué dices?", options: ["\"Can you speak more slowly, please?\"", "\"Yes, yes.\"", "Nada; te vas", "\"Goodbye.\""], answer: 0, why: "Pedir a la persona que hable más despacio es amable y te da la información." },
            { objective: "O2", q: "La enfermera dice el nombre de tu médico y no lo puedes escribir. ¿Qué preguntas?", options: ["\"How much is it?\"", "\"Where are you from?\"", "\"How do you spell that?\"", "\"What time is it?\""], answer: 2, why: "\"How do you spell that?\" pide las letras para que puedas escribir el nombre." }
          ]
        },
        {
          title: "De compras: encontrar productos, precios y pagar",
          objectives: ["O3"],
          minutes: 5,
          goal: "Preguntar dónde está un producto, preguntar el precio y decir cómo vas a pagar.",
          text: [
            "Para encontrar algo, di \"Excuse me\" y pregunta: \"Where can I find the rice?\" o \"Do you have diapers?\" El empleado puede decir \"Aisle 5\" (un pasillo con número en la tienda) o \"Sorry, we're out of it.\" (ya no les queda).",
            "Para preguntar el precio: \"How much is this?\", o \"How much are these?\" si es más de una cosa. En la caja, el cajero puede preguntar: \"Cash or card?\" \"Do you want a bag?\" \"Do you want your receipt?\" Responde: \"Card, please.\" \"No bag, thanks.\" \"Yes, please.\"",
            "Guarda tu recibo. Para devolver algo, di: \"I'd like to return this, please. Here is my receipt.\" Cada tienda tiene sus propias reglas de devolución, así que puedes preguntar: \"What is your return policy?\"",
            "Conversación de ejemplo. A: \"Excuse me, where can I find the milk?\" B: \"In the back, next to the eggs.\" A: \"Thanks. How much is this?\" B: \"Three ninety-nine.\" A: \"Okay. Card, please.\""
          ],
          steps: ["Di \"Excuse me\" para pedir ayuda.", "Pregunta \"Where can I find ...?\"", "Pregunta \"How much is this?\"", "En la caja responde a \"Cash or card?\" y \"Do you want a bag?\"", "Guarda el recibo para las devoluciones."],
          words: [["\"Aisle\"", "un pasillo de la tienda con estantes a los dos lados. Suena como \"I'll\"."], ["\"Receipt\"", "el papel que muestra lo que compraste y pagaste (recibo). La p no se pronuncia."], ["\"Return\"", "llevar algo de vuelta a la tienda para recuperar tu dinero (devolver)."], ["\"Cashier\"", "el empleado que cobra tu dinero en la caja (cajero)."]],
          slides: [
            { title: "Encontrar productos", bullets: ["\"Excuse me, where can I find the rice?\"", "\"Do you have diapers?\"", "Respuesta: \"Aisle 5.\""] },
            { title: "Preguntar el precio", bullets: ["Una cosa: \"How much is this?\"", "Más de una: \"How much are these?\""] },
            { title: "En la caja", bullets: ["\"Cash or card?\" - \"Card, please.\"", "\"Do you want a bag?\" - \"No bag, thanks.\"", "\"Do you want your receipt?\" - \"Yes, please.\""] },
            { title: "Devoluciones", bullets: ["Guarda tu recibo", "\"I'd like to return this, please.\"", "\"What is your return policy?\""] }
          ],
          tryIt: "Haz un juego de roles con un compañero, o haz los dos papeles en voz alta: estás en un supermercado. Pregunta dónde están dos cosas, pregunta el precio de una y responde a las tres preguntas del cajero. La próxima vez que vayas de compras, usa una frase de verdad.",
          youCanNow: "preguntar dónde está algo en una tienda, preguntar el precio, responder al cajero y pedir devolver algo.",
          quickCheck: [
            { objective: "O3", q: "Quieres saber el precio de dos camisas. ¿Qué preguntas?", options: ["\"Where are you from?\"", "\"Can you spell that?\"", "\"What time is it?\"", "\"How much are these?\""], answer: 3, why: "\"How much are these?\" pregunta el precio de más de una cosa." },
            { objective: "O3", q: "La cajera pregunta \"Cash or card?\" ¿Qué quiere saber?", options: ["Cómo vas a pagar", "Tu nombre", "Dónde vives", "Si quieres una bolsa"], answer: 0, why: "\"Cash or card?\" pregunta cómo vas a pagar (en efectivo o con tarjeta)." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocer gente y hacer compras",
        questions: [
          { objective: "O1", q: "¿Cuál es una buena primera oración cuando conoces a alguien?", options: ["\"How much is this?\"", "\"Hi, my name is Rosa.\"", "\"Turn left.\"", "\"I have a fever.\""], answer: 1, why: "Un saludo y tu nombre son el comienzo de una presentación." },
          { objective: "O1", q: "Ya dijiste tu nombre. ¿Qué es una buena pregunta para hacer de vuelta?", options: ["\"Where is the milk?\"", "\"Cash or card?\"", "\"What's your name?\"", "\"Can I return this?\""], answer: 2, why: "Preguntar el nombre de la otra persona mantiene la conversación." },
          { objective: "O2", q: "No entendiste una dirección. ¿Qué es lo mejor que puedes hacer?", options: ["Decir \"yes\" y adivinar", "Preguntar \"Can you write it down, please?\"", "Irte", "Preguntar \"How much is it?\""], answer: 1, why: "Pedir a la persona que la escriba te da la dirección exacta." },
          { objective: "O2", q: "Alguien dice \"Your appointment is Friday at nine.\" ¿Cómo compruebas que lo oíste bien?", options: ["\"So, Friday at 9?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"I'm from Haiti.\""], answer: 0, why: "Repetir el día y la hora permite que la persona lo confirme o lo corrija." },
          { objective: "O3", q: "Quieres devolver unos zapatos que no te quedan. ¿Qué dices?", options: ["\"Where are you from?\"", "\"How do you spell that?\"", "\"Turn right.\"", "\"I'd like to return this, please. Here is my receipt.\""], answer: 3, why: "Esta frase pide devolver el producto y muestra el recibo." }
        ]
      }
    },
    {
      name: "Capítulo 2: El médico, el teléfono y moverse por la ciudad",
      lessons: [
        {
          title: "En el médico: decir qué te pasa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Decirle al médico o a la enfermera qué te pasa, dónde te duele y desde cuándo.",
          text: [
            "En la recepción, di: \"Hi, I have an appointment at 10 o'clock. My name is Ana Lopez.\" Pueden pedirte tu fecha de nacimiento y tu tarjeta del seguro médico.",
            "Para decir qué te pasa: \"I have a headache.\" \"I have a fever.\" \"My stomach hurts.\" \"My back hurts.\" \"I feel dizzy.\" Luego di desde cuándo: \"It started two days ago.\" o \"I've had it since Monday.\" El médico puede preguntar: \"Does it hurt here?\" Responde: \"Yes, there.\" o \"No.\"",
            "Si necesitas ayuda con el inglés, puedes preguntar: \"Do you have an interpreter?\" Un intérprete es una persona que te ayuda a hablar con el médico en tu idioma. Pide al médico que escriba las instrucciones: \"Can you write that down, please?\" Este curso solo enseña palabras. Las preguntas sobre tu salud son para tu médico o tu enfermera.",
            "En una emergencia, como dificultad para respirar o dolor en el pecho, llama al 911 (el número de emergencias en los Estados Unidos) y di: \"I need an ambulance.\" Luego di dónde estás."
          ],
          steps: ["En la recepción: di la hora de tu cita y tu nombre.", "Di qué te pasa: \"I have a ...\" o \"My ... hurts.\"", "Di desde cuándo: \"for two days\" o \"since Monday\".", "Pide un intérprete o instrucciones por escrito si los necesitas."],
          words: [["\"Appointment\"", "un día y una hora fijos para ver a alguien, como al médico (cita)."], ["\"Fever\"", "cuando tu cuerpo está demasiado caliente porque estás enfermo (fiebre)."], ["\"Interpreter\"", "una persona que ayuda a dos personas a hablar en idiomas diferentes (intérprete)."], ["\"Insurance card\"", "la tarjeta de tu plan de salud que te piden en el consultorio (tarjeta del seguro)."]],
          slides: [
            { title: "En la recepción", bullets: ["\"I have an appointment at 10 o'clock.\"", "\"My name is Ana Lopez.\""] },
            { title: "Di qué te pasa", bullets: ["\"I have a headache.\" \"I have a fever.\"", "\"My stomach hurts.\" \"My back hurts.\"", "\"I feel dizzy.\""] },
            { title: "Di desde cuándo", bullets: ["\"for two days\"", "\"since Monday\""] },
            { title: "Pide ayuda para entender", bullets: ["\"Do you have an interpreter?\"", "\"Can you write that down, please?\"", "Emergencia: llama al 911, \"I need an ambulance.\""] }
          ],
          tryIt: "Solo para practicar, con un problema inventado: escribe tres oraciones en inglés para el médico, por ejemplo \"I have a sore throat. It started on Sunday. It hurts when I swallow.\" Léelas en voz alta. Luego practica la frase de la recepción con un nombre y una hora inventados.",
          youCanNow: "registrarte en la recepción, decir qué te pasa y desde cuándo, y pedir un intérprete o instrucciones por escrito.",
          quickCheck: [
            { objective: "O4", q: "Te duele la cabeza desde ayer. ¿Qué le dices al médico?", options: ["\"I've had a headache since yesterday.\"", "\"How much is this?\"", "\"Turn left.\"", "\"Cash, please.\""], answer: 0, why: "Dice el problema y cuánto tiempo lleva." },
            { objective: "O4", q: "No entiendes bien al médico. ¿Qué puedes preguntar?", options: ["\"Where is aisle 5?\"", "\"Nice to meet you.\"", "\"Do you have a bag?\"", "\"Do you have an interpreter?\""], answer: 3, why: "Un intérprete los ayuda a ti y al médico a entenderse." }
          ]
        },
        {
          title: "Llamadas: hacer una cita y llamar a la escuela",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Hacer una cita por teléfono y repetir el día y la hora para confirmarlos.",
          text: [
            "Las llamadas son difíciles porque no puedes ver a la persona. Planea tus palabras antes de llamar y ten listos papel y lápiz.",
            "Para hacer una cita: \"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\" Te preguntan: \"What is it for?\" \"What day works for you?\" Responde: \"I have a cough.\" \"Tuesday morning is good.\" Luego repítelo: \"So, Tuesday the 12th at 9:30?\" Para cambiarla: \"I need to change my appointment, please.\"",
            "Para llamar a la escuela cuando tu hijo está enfermo: \"Hi, this is Ana Lopez. My son, David Lopez, is sick today. He is in second grade. He will not come to school today.\"",
            "Si la llamada va demasiado rápido, usa tus frases de la Lección 2: \"Sorry, can you speak more slowly, please?\" \"Can you spell that?\" Si te dicen un número de teléfono, repítelo en grupos: \"5-5-5, 0-1-2-3?\""
          ],
          steps: ["Escribe lo que vas a decir antes de llamar.", "Di tu nombre y por qué llamas.", "Responde: para qué es, y qué día y hora te convienen.", "Escribe el día y la hora, y luego repítelos.", "Termina: \"Thank you. Bye.\""],
          words: [["\"Make an appointment\"", "fijar un día y una hora para ver a alguien (hacer una cita)."], ["\"Change\" / \"cancel\"", "pasar a otra hora / anular la cita."], ["\"What works for you?\"", "una pregunta que significa \"¿qué día u hora te conviene?\""]],
          slides: [
            { title: "Antes de llamar", bullets: ["Escribe lo que vas a decir", "Ten listos papel y lápiz"] },
            { title: "Hacer una cita", bullets: ["\"I'd like to make an appointment, please.\"", "\"What day works for you?\" - \"Tuesday morning.\"", "Repite: \"So, Tuesday the 12th at 9:30?\""] },
            { title: "Llamar a la escuela", bullets: ["\"My son, David Lopez, is sick today.\"", "\"He is in second grade.\"", "\"He will not come to school today.\""] },
            { title: "Cuando va demasiado rápido", bullets: ["\"Can you speak more slowly, please?\"", "Repite los números en grupos"] }
          ],
          tryIt: "Escribe en inglés un guion telefónico corto para hacer una cita con el médico, con un nombre y un problema inventados. Practícalo con un compañero en un juego de roles, o di los dos papeles en voz alta. Asegúrate de repetir el día y la hora al final.",
          youCanNow: "hacer o cambiar una cita por teléfono, llamar a la escuela de tu hijo y repetir el día y la hora para confirmarlos.",
          quickCheck: [
            { objective: "O4", q: "En el consultorio te dicen \"What day works for you?\" ¿Qué quieren saber?", options: ["Tu dirección", "Tu trabajo", "Un día que te convenga", "Tu tarjeta del seguro"], answer: 2, why: "\"What day works for you?\" pregunta qué día te conviene." },
            { objective: "O2", q: "En el consultorio te dicen la hora de tu cita. ¿Qué haces después?", options: ["Colgar enseguida", "Repetir el día y la hora para comprobarlos", "Decir \"Nice to meet you\"", "Preguntar \"How much are these?\""], answer: 1, why: "Repetir el día y la hora asegura que los oíste bien." }
          ]
        },
        {
          title: "Preguntar cómo llegar",
          objectives: ["O5"],
          minutes: 5,
          goal: "Pedir indicaciones para llegar a un lugar y repetirlas para comprobarlas.",
          text: [
            "Empieza con \"Excuse me.\" Luego pregunta: \"How do I get to the library?\" o \"Where is the bus stop?\" o \"Is the post office near here?\"",
            "Palabras de dirección: \"Go straight.\" \"Turn left.\" \"Turn right.\" \"It's on the corner.\" \"It's next to the bank.\" \"It's across from the park.\" \"Go two blocks.\" Una cuadra (\"block\") es la parte de una calle entre dos esquinas.",
            "Repite las indicaciones: \"So, go straight two blocks, then turn left?\" La persona dirá \"Yes\" o te corregirá. Si es demasiado, pregunta: \"Can you show me on my phone?\" o \"Can you point?\"",
            "Conversación de ejemplo. A: \"Excuse me, how do I get to the clinic?\" B: \"Go straight two blocks and turn right. It's next to the pharmacy.\" A: \"So, straight two blocks, turn right, next to the pharmacy?\" B: \"That's right.\" A: \"Thank you!\""
          ],
          steps: ["Di \"Excuse me.\"", "Pregunta \"How do I get to ...?\" o \"Where is ...?\"", "Escucha \"left\", \"right\", \"straight\", \"blocks\" y \"next to\".", "Repite las indicaciones.", "Di \"Thank you!\""],
          words: [["\"Straight\"", "hacia adelante, sin girar (derecho)."], ["\"Block\"", "la parte de una calle entre dos esquinas (cuadra)."], ["\"Across from\"", "al otro lado de la calle de algo (enfrente de)."], ["\"Next to\"", "justo al lado de algo."]],
          slides: [
            { title: "Pregunta el camino", bullets: ["\"Excuse me, how do I get to the library?\"", "\"Where is the bus stop?\"", "\"Is the post office near here?\""] },
            { title: "Palabras de dirección", bullets: ["\"Go straight.\" \"Turn left.\" \"Turn right.\"", "\"Go two blocks.\"", "\"Next to\" / \"across from\" / \"on the corner\""] },
            { title: "Compruébalo", bullets: ["\"So, straight two blocks, then left?\"", "\"Can you show me on my phone?\""] }
          ],
          sources: [{ name: "USA Learns: práctica de inglés gratis para adultos", url: "https://www.usalearns.org/" }],
          tryIt: "Tarea final: haz tu tarjeta de frases de inglés para la vida diaria. Escribe en inglés tu presentación, tres frases para pedir que repitan o hablen más despacio, dos preguntas para la tienda, un guion telefónico corto para una cita con el médico y una pregunta para pedir indicaciones hacia un lugar al que vas seguido. Lee toda la tarjeta en voz alta, o practícala con un compañero en un juego de roles, y grábate si puedes.",
          youCanNow: "pedir indicaciones, entender \"left\", \"right\", \"straight\" y \"next to\", y repetir las indicaciones para comprobarlas.",
          quickCheck: [
            { objective: "O5", q: "La persona dice \"It's across from the park.\" ¿Dónde está?", options: ["Dentro del parque", "Lejos del parque", "Al otro lado de la calle del parque", "Detrás de ti"], answer: 2, why: "\"Across from\" significa al otro lado de la calle." },
            { objective: "O5", q: "¿Qué pregunta sirve para pedir indicaciones?", options: ["\"How much is this?\"", "\"How do I get to the bus station?\"", "\"Do you have an interpreter?\"", "\"What's your name?\""], answer: 1, why: "\"How do I get to ...?\" pregunta el camino a un lugar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: El médico, el teléfono y moverse por la ciudad",
        questions: [
          { objective: "O4", q: "Llegas a la clínica. ¿Qué dices en la recepción?", options: ["\"I have an appointment at 2 o'clock. My name is Li Wei.\"", "\"Turn right.\"", "\"Cash or card?\"", "\"Where are you from?\""], answer: 0, why: "Al registrarte, di la hora de tu cita y tu nombre." },
          { objective: "O4", q: "¿Qué oración dice desde cuándo estás enfermo?", options: ["\"My stomach hurts.\"", "\"I feel dizzy.\"", "\"I have an appointment.\"", "\"I've had a fever since Monday.\""], answer: 3, why: "\"Since Monday\" le dice al médico desde cuándo." },
          { objective: "O4", q: "No puedes ir a tu cita del viernes. ¿Qué dices por teléfono?", options: ["\"I need to change my appointment, please.\"", "\"Nice to meet you.\"", "\"Where is aisle 3?\"", "\"Go straight.\""], answer: 0, why: "Esta frase pide pasar la cita a otra hora." },
          { objective: "O5", q: "¿Qué significa \"Go two blocks\"?", options: ["Esperar dos minutos", "Caminar y pasar dos esquinas", "Tomar el autobús número dos", "Girar dos veces"], answer: 1, why: "Una cuadra (\"block\") es la parte de una calle entre dos esquinas." },
          { objective: "O5", q: "Alguien te da indicaciones. ¿Cómo compruebas que entendiste?", options: ["Decir \"Okay\" e irte", "Preguntar \"How much is it?\"", "Repetir las indicaciones", "Preguntar \"What's your name?\""], answer: 2, why: "Repetir las indicaciones permite que la persona las confirme o las corrija." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Inglés para la vida diaria (ESL)",
    questions: [
      { objective: "O1", q: "¿Cuál es la mejor forma de empezar una presentación?", options: ["\"Hello, I'm Marco.\"", "\"How much is this?\"", "\"Turn left.\"", "\"My back hurts.\""], answer: 0, why: "Un saludo y tu nombre empiezan una presentación." },
      { objective: "O1", q: "¿Qué significa \"I'm\"?", options: ["\"I will\"", "\"I have\"", "\"I am\"", "\"I can\""], answer: 2, why: "\"I'm\" es la forma corta de decir \"I am\"." },
      { objective: "O1", q: "Un compañero de trabajo nuevo dice \"I'm from Nigeria.\" ¿Qué es una buena pregunta de vuelta?", options: ["\"Cash or card?\"", "\"Where is the bus stop?\"", "\"Can you spell that?\"", "\"How long have you been here?\""], answer: 3, why: "Una pregunta amable sobre la persona mantiene la conversación." },
      { objective: "O2", q: "Alguien habla demasiado rápido. ¿Qué dices?", options: ["\"Yes, yes, okay.\"", "\"Can you speak more slowly, please?\"", "\"Nice to meet you.\"", "\"Goodbye.\""], answer: 1, why: "Pedir a la persona que hable más despacio es amable y te ayuda a entender." },
      { objective: "O2", q: "¿Por qué es mejor preguntar que decir \"yes\" cuando no entendiste?", options: ["Porque podrías perder información importante, como una hora o un lugar", "Porque preguntar es de mala educación", "Porque a la gente no le gustan las preguntas", "Porque es más rápido adivinar"], answer: 0, why: "Un \"yes\" equivocado puede significar perder una hora, un lugar o una instrucción." },
      { objective: "O2", q: "Necesitas escribir el nombre de una calle que oíste. ¿Qué preguntas?", options: ["\"How much is it?\"", "\"Do you want a bag?\"", "\"How do you spell that?\"", "\"What's your name?\""], answer: 2, why: "\"How do you spell that?\" pide las letras." },
      { objective: "O3", q: "No encuentras el pan en una tienda. ¿Qué le preguntas a un empleado?", options: ["\"I have a fever.\"", "\"So, Tuesday at 3?\"", "\"Nice to meet you.\"", "\"Excuse me, where can I find the bread?\""], answer: 3, why: "\"Where can I find ...?\" pregunta dónde está un producto." },
      { objective: "O3", q: "¿Qué es un \"receipt\"?", options: ["El papel que muestra lo que compraste y pagaste", "Una bolsa de compras", "Un empleado de la tienda", "Un pasillo de la tienda"], answer: 0, why: "El recibo (\"receipt\") muestra lo que compraste; guárdalo para las devoluciones." },
      { objective: "O3", q: "El cajero pregunta \"Do you want a bag?\" No quieres una. ¿Qué dices?", options: ["\"Aisle 5.\"", "\"No bag, thanks.\"", "\"Turn right.\"", "\"I'm from Peru.\""], answer: 1, why: "\"No bag, thanks\" dice que no de forma amable." },
      { objective: "O4", q: "¿Qué oración le dice al médico qué te pasa?", options: ["\"Go straight.\"", "\"How much are these?\"", "\"My stomach hurts.\"", "\"Nice to meet you.\""], answer: 2, why: "\"My stomach hurts\" dice el problema." },
      { objective: "O4", q: "¿Qué es un \"interpreter\"?", options: ["Un médico para niños", "Una persona que ayuda a dos personas a hablar en idiomas diferentes", "Un tipo de medicina", "Un formulario que llenas"], answer: 1, why: "Un intérprete (\"interpreter\") los ayuda a ti y al médico a entenderse." },
      { objective: "O4", q: "Alguien tiene dolor en el pecho y dificultad para respirar. ¿Qué haces?", options: ["Llamar al 911 y decir \"I need an ambulance.\"", "Hacer una cita para la próxima semana", "Ir de compras", "Mandarle un mensaje a un amigo"], answer: 0, why: "El dolor en el pecho y la dificultad para respirar son emergencias: llama al 911." },
      { objective: "O4", q: "Llamas para hacer una cita. ¿Qué es lo primero que dices?", options: ["\"Turn left.\"", "\"How much is this?\"", "\"Do you want a bag?\"", "\"Hi, my name is Ana Lopez. I'd like to make an appointment, please.\""], answer: 3, why: "Di tu nombre y por qué llamas." },
      { objective: "O4", q: "En el consultorio te dicen \"Thursday at 4:15.\" ¿Qué dices después?", options: ["\"So, Thursday at 4:15?\"", "\"Where are you from?\"", "\"Cash, please.\"", "\"Go straight.\""], answer: 0, why: "Repetir el día y la hora comprueba que los oíste bien." },
      { objective: "O4", q: "Tu hija está enferma y va a faltar a la escuela. ¿A quién llamas y qué dices?", options: ["A la tienda: \"Where is the milk?\"", "A la escuela: \"My daughter is sick today. She will not come to school.\"", "A la compañía de autobuses: \"Turn right.\"", "A nadie"], answer: 1, why: "Llama a la escuela, da el nombre de tu hija y di que hoy está enferma." },
      { objective: "O5", q: "¿Qué significa \"Turn right\"?", options: ["Dejar de caminar", "Volver atrás", "Girar hacia el lado derecho", "Seguir derecho"], answer: 2, why: "\"Turn right\" significa girar a la derecha." },
      { objective: "O5", q: "El banco está \"next to\" la farmacia. ¿Dónde está?", options: ["Lejos de la farmacia", "Dentro de la farmacia", "En otra calle", "Justo al lado de la farmacia"], answer: 3, why: "\"Next to\" significa justo al lado." },
      { objective: "O5", q: "Las indicaciones son largas y confusas. ¿Qué puedes preguntar?", options: ["\"Can you show me on my phone?\"", "\"Do you want a bag?\"", "\"I have a headache.\"", "\"Nice to meet you.\""], answer: 0, why: "Un mapa en tu teléfono o que te señalen el camino hace claras las indicaciones." },
      { objective: "O2", q: "En una oración larga solo te perdiste la hora. ¿Cuál es la mejor pregunta?", options: ["\"Goodbye.\"", "\"Sorry, what time?\"", "\"How much are these?\"", "\"Where are you from?\""], answer: 1, why: "Preguntar solo por la parte que te perdiste es rápido y claro." },
      { objective: "O1", q: "¿Qué presentación es clara y completa?", options: ["\"Me, me, job.\"", "\"Where is the bank?\"", "\"Hi, I'm Fatima. I'm from Syria. I'm a cook.\"", "\"Card, please.\""], answer: 2, why: "Da el nombre, el país y el trabajo en oraciones cortas." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 6, 9, 13, 15, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, practica esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Presentación", objective: "O1", notYet: "Menos de tres oraciones, o falta el nombre o la pregunta de vuelta.", meets: "Dice su nombre, de dónde es y a qué se dedica, y hace una pregunta de vuelta.", exceeds: "Lo dice en voz alta sin leer y agrega un detalle más, como una meta." },
      { name: "Pedir que repitan o hablen más despacio", objective: "O2", notYet: "No hay frases, o las frases no son amables.", meets: "Tres frases amables para pedir que repitan, hablen más despacio, deletreen o lo escriban.", exceeds: "También muestra cómo repetir algo para comprobarlo, como \"So, Tuesday at 3?\"" },
      { name: "Preguntas para la tienda", objective: "O3", notYet: "No hay preguntas para la tienda, o no piden un producto ni un precio.", meets: "Dos preguntas claras, como dónde está un producto y cuánto cuesta.", exceeds: "También responde a las preguntas del cajero en un juego de roles." },
      { name: "Guion telefónico para una cita", objective: "O4", notYet: "Falta el nombre, el motivo o el día y la hora.", meets: "Da el nombre, el motivo, un día y una hora que le convienen, y repite la hora.", exceeds: "También muestra cómo cambiar la cita o pedir un intérprete." },
      { name: "Preguntar cómo llegar", objective: "O5", notYet: "No hay pregunta, o la pregunta no nombra un lugar.", meets: "Una pregunta clara sobre un lugar real, y una oración que repite las indicaciones.", exceeds: "Usa bien tres palabras de dirección en un juego de roles." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen haber hecho por su cuenta una llamada, una cita o una petición en una tienda en inglés dentro de 30 días (encuesta de seguimiento)",
      "Participantes que empiezan \"Inglés para el trabajo (ESL)\" o una clase de inglés para adultos dentro de 30 días",
      "Los programas aliados informan menos citas perdidas por malentendidos de idioma"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para ver las lecciones, o una copia impresa del texto de las lecciones",
      "Papel y lápiz para las tarjetas de frases y los guiones",
      "Un compañero para los juegos de roles, o un teléfono para grabarte",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Lee primero en voz alta cada conversación de ejemplo, luego pide a los participantes que la lean en parejas y después que cambien de papel.",
      "Las versiones traducidas dejan las frases en inglés en inglés; explícalas en el idioma de los participantes, pero practícalas en inglés.",
      "Usa nombres, fechas de nacimiento y números de teléfono inventados en toda la práctica; nunca recojas datos privados reales.",
      "Celebra los intentos, no la gramática perfecta. La meta son frases que funcionen y el valor de usarlas.",
      "La lección del médico solo enseña palabras; envía las preguntas de salud a un médico o a una enfermera. Indica a los participantes clases de inglés gratis para adultos cerca de ellos (escuelas para adultos, bibliotecas, colegios comunitarios) y práctica gratis como USA Learns."
    ]
  }
};

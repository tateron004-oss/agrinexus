"use strict";

// Koach Learn course (Spanish translation of youth-leadership-confidence). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Skill-building course for teens about 13-18.

module.exports = {
  id: "youth-leadership-confidence-es",
  lang: "es",
  translationOf: "youth-leadership-confidence",
  category: "Youth",
  name: "Liderazgo, confianza y resolución de problemas",
  skills: "Nombrar tus fortalezas, Fijar una meta SMART, Practicar cómo alzar la voz con juegos de rol con IA, Resolver un problema en cinco pasos, Dirigir una reunión corta de equipo, Manejar los desacuerdos con calma",
  outcome: "dirigir un proyecto de grupo pequeño de principio a fin: nombrar el problema, proponer y elegir una solución, darle un rol a cada persona, dirigir una reunión corta con un orden del día y hablar con confianza, usando la IA como compañera de práctica en el camino.",
  about: [
    "Este curso es para adolescentes de unos 13 a 18 años que quieren sentirse más seguros y dar un paso al frente como líderes, ya sea en un club, un equipo, una banda, un proyecto de clase, un grupo de videojuegos o un trabajo de medio tiempo.",
    "Vas a nombrar tus fortalezas, fijar una meta que de verdad puedas alcanzar, practicar cómo alzar la voz, aprender una forma sencilla de resolver problemas en cinco pasos, dirigir una reunión corta y manejar los desacuerdos con calma. Un asistente de IA puede ser tu compañero de práctica: puede hacer juegos de rol, darte ideas y ayudarte a planear.",
    "Usa solo herramientas de IA adecuadas para tu edad y para las reglas de tu escuela, y habla con tu madre, padre o tutor antes de registrarte en algo nuevo. Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\"."
  ],
  finalTask: "Planea un proyecto pequeño para un grupo real al que perteneces (un club, un equipo, una clase o un grupo juvenil): escribe el problema en una oración, haz una lista de tres soluciones y elige una, dale un rol a cada persona, escribe un orden del día para una reunión de 15 minutos y practica en voz alta una presentación del plan de un minuto (con un juego de rol con IA o con un amigo).",
  chapters: [
    {
      name: "Capítulo 1: Construir confianza",
      lessons: [
        {
          title: "Conocer tus fortalezas",
          minutes: 4,
          goal: "Nombrar tres de tus fortalezas con un ejemplo real de cada una.",
          text: [
            "La confianza crece cuando sabes en qué eres bueno. Las fortalezas no son solo las calificaciones o los deportes. Saber escuchar, mantener la calma, hacer reír a la gente, ser organizado o nunca rendirte también son fortalezas.",
            "Piensa en momentos en que te sentiste orgulloso o en que alguien te dio las gracias. ¿Qué hiciste? Eso señala una fortaleza. También puedes preguntarle a gente que te conoce: un entrenador, un maestro, un amigo o alguien de tu familia.",
            "La IA te puede ayudar a encontrar palabras para tus fortalezas. Cuéntale una historia (sin datos privados) y pregúntale: \"¿Qué fortalezas muestra esto?\" Tú decides cuáles te quedan."
          ],
          steps: ["Recuerda dos o tres momentos en que te sentiste orgulloso.", "Escribe lo que hiciste en cada uno.", "Pregúntale a una persona de confianza o a la IA qué fortalezas muestra.", "Elige tres y escribe un ejemplo de cada una."],
          words: [["Fortaleza", "algo que haces bien o una cualidad que te ayuda a ti y a los demás."], ["Confianza", "creer que puedes con algo."]],
          slides: [
            { title: "Las fortalezas son más que calificaciones", bullets: ["Escuchar, mantener la calma, el humor", "Ser organizado, no rendirte"] },
            { title: "Encuentra tus fortalezas", bullets: ["Momentos en que te sentiste orgulloso", "Lo que la gente te agradece", "Pregunta a un entrenador, maestro o amigo"] },
            { title: "La IA puede ayudarte a nombrarlas", bullets: ["Cuenta una historia corta, sin datos privados", "Pregunta: \"¿Qué fortalezas muestra esto?\"", "Tú decides cuáles te quedan"] }
          ],
          tryIt: "Escribe en tres oraciones sobre un momento en que te sentiste orgulloso. Pregúntale a un asistente de IA o a una persona de confianza qué fortalezas muestra. Anota tus tres fortalezas principales con un ejemplo de cada una.",
          youCanNow: "nombrar tres de tus fortalezas y respaldar cada una con un ejemplo."
        },
        {
          title: "Fijar una meta que puedas alcanzar",
          minutes: 5,
          goal: "Convertir un deseo en una meta SMART con un primer paso.",
          text: [
            "\"Quiero hablar mejor en público\" es un deseo. \"Voy a hablar una vez en cada discusión de clase durante las próximas dos semanas\" es una meta. Las metas que funcionan son SMART (por sus siglas en inglés): específicas, medibles, alcanzables, relevantes y con fecha límite.",
            "La IA puede ayudar: \"Convierte esto en una meta SMART: quiero tener más confianza en mi equipo de fútbol.\" Luego hazla tuya y revisa que sea realista para tu vida.",
            "Toda meta necesita un primer paso que puedas dar esta semana. Los pequeños logros construyen la confianza."
          ],
          steps: ["Escribe tu deseo.", "Hazlo específico y medible.", "Revisa que sea realista y que te importe.", "Agrega una fecha límite y un primer paso para esta semana."],
          words: [["Meta SMART", "una meta específica, medible, alcanzable, relevante y con fecha límite."]],
          slides: [
            { title: "Deseo contra meta", bullets: ["Deseo: \"hablar mejor\"", "Meta: \"hablar una vez en cada discusión de clase por 2 semanas\""] },
            { title: "SMART", bullets: ["Específica y medible", "Alcanzable y relevante", "Con fecha límite"] },
            { title: "Empieza en pequeño", bullets: ["Un primer paso esta semana", "Los pequeños logros construyen la confianza"] }
          ],
          tryIt: "Escribe un deseo sobre la confianza o el liderazgo. Conviértelo en una meta SMART (con ayuda de la IA si quieres) y luego escribe el primer paso que darás esta semana.",
          youCanNow: "fijar una meta SMART con un primer paso."
        },
        {
          title: "Practicar cómo alzar la voz con juegos de rol con IA",
          minutes: 5,
          goal: "Practicar una conversación difícil o un discurso corto con IA antes de hacerlo de verdad.",
          text: [
            "Alzar la voz se vuelve más fácil con práctica. La IA puede hacer un papel para que practiques: \"Haz de cuenta que eres el asesor de mi club. Quiero pedir permiso para empezar un proyecto nuevo. Hazme preguntas difíciles.\"",
            "Practica el patrón PREP para charlas cortas: Punto (di tu idea principal), Razón (por qué), Ejemplo (uno real) y otra vez el Punto. Te mantiene claro aunque estés nervioso.",
            "Después de practicar con la IA, practica en voz alta con un amigo o alguien de tu familia. Las personas reales reaccionan de formas que la IA no puede. Respira despacio antes de empezar."
          ],
          steps: ["Elige una situación real: hacer una pregunta, presentar una idea, decir que no.", "Pídele a la IA que haga el papel de la otra persona.", "Usa Punto, Razón, Ejemplo, Punto.", "Practica también en voz alta con una persona real."],
          words: [["Juego de rol", "actuar una situación para practicarla."], ["PREP", "Punto, Razón, Ejemplo, Punto: una forma sencilla de dar una charla corta."]],
          slides: [
            { title: "Practica con juegos de rol con IA", bullets: ["\"Haz de cuenta que eres el asesor de mi club\"", "\"Hazme preguntas difíciles\""] },
            { title: "PREP para charlas cortas", bullets: ["Punto: tu idea principal", "Razón: por qué", "Ejemplo: uno real", "Punto: dilo otra vez"] },
            { title: "Luego hazlo de verdad", bullets: ["Practica con un amigo o alguien de tu familia", "Primero respira despacio"] }
          ],
          tryIt: "Elige una conversación real que necesitas tener. Pídele a la IA que haga el papel de la otra persona. Responde usando PREP. Luego dilo una vez en voz alta a alguien de confianza.",
          youCanNow: "practicar cómo alzar la voz con juegos de rol y el patrón PREP."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Construir confianza",
        questions: [
          { q: "¿Cuál es una fortaleza?", options: ["Perder tus llaves", "Saber escuchar", "Llegar tarde", "Ignorar a tus amigos"], answer: 1, why: "Las fortalezas incluyen habilidades con personas, como escuchar." },
          { q: "Una buena forma de encontrar tus fortalezas es:", options: ["Adivinar al azar", "Copiar la lista de un amigo", "Mirar solo las calificaciones", "Recordar momentos en que te sentiste orgulloso y lo que hiciste"], answer: 3, why: "Los momentos de orgullo señalan fortalezas reales." },
          { q: "¿Cuál es una meta SMART?", options: ["\"Hablar una vez en cada discusión de clase durante las próximas dos semanas\"", "\"Tener más confianza\"", "\"Ser el mejor\"", "\"Esforzarme más algún día\""], answer: 0, why: "Es específica, medible y tiene fecha límite." },
          { q: "¿Qué significa PREP?", options: ["Planear, Correr, Comer, Jugar", "Practicar, Descansar, Salir, Pausar", "Punto, Razón, Ejemplo, Punto", "Teléfono, Radio, Correo, Publicación"], answer: 2, why: "PREP es un patrón sencillo para charlas cortas." },
          { q: "Después de practicar con un juego de rol con IA, deberías:", options: ["No volver a practicar nunca", "Dejar que la IA dé la charla", "Practicar también en voz alta con una persona real", "Saltarte la conversación real"], answer: 2, why: "Las personas reales reaccionan de formas que la IA no puede." }
        ]
      }
    },
    {
      name: "Capítulo 2: Liderar y resolver problemas",
      lessons: [
        {
          title: "Resolver un problema en cinco pasos",
          minutes: 5,
          goal: "Usar cinco pasos para resolver un problema real en un grupo.",
          text: [
            "Los líderes resuelven los problemas de forma ordenada. Cinco pasos funcionan casi en cualquier lugar: 1. Nombra el problema en una oración. 2. Encuentra la causa. 3. Haz una lista de varias soluciones. 4. Elige una y pruébala. 5. Revisa si funcionó.",
            "Ejemplo: \"Solo 4 personas vienen a las reuniones de nuestro club de arte.\" Causa: las reuniones chocan con el entrenamiento deportivo. Soluciones: cambiar el día, reunirse en el almuerzo, publicar los trabajos en línea. Prueba una durante un mes y luego revisa.",
            "La IA es excelente en el paso 3. Pregunta: \"Dame 8 ideas para resolver este problema en un club de preparatoria.\" Tú y tu grupo siguen eligiendo y revisando."
          ],
          steps: ["Nombra el problema en una oración.", "Encuentra la causa.", "Haz una lista de varias soluciones (la IA puede ayudar).", "Elige una y pruébala.", "Revisa si funcionó."],
          words: [["Causa raíz", "la razón real por la que pasa un problema."]],
          slides: [
            { title: "Cinco pasos", bullets: ["1. Nómbralo  2. Encuentra la causa", "3. Lista de soluciones  4. Prueba una", "5. Revisa si funcionó"] },
            { title: "Ejemplo: poca asistencia al club", bullets: ["Causa: choca con el entrenamiento", "Ideas: otro día, reunión en el almuerzo, en línea", "Prueba una y luego revisa"] },
            { title: "Dónde ayuda la IA", bullets: ["Generar muchas soluciones", "Tú y el grupo siguen decidiendo"] }
          ],
          tryIt: "Elige un problema real de un grupo al que perteneces. Escríbelo en una oración, nombra la causa, pídele a la IA 8 soluciones y encierra en un círculo la que probarías primero.",
          youCanNow: "resolver un problema de grupo con cinco pasos claros."
        },
        {
          title: "Dirigir una reunión corta de equipo",
          minutes: 5,
          goal: "Planear y dirigir una reunión de 15 minutos con un orden del día y roles.",
          text: [
            "Las buenas reuniones son cortas y claras. Un orden del día es una lista de lo que van a hablar y cuánto tiempo toma cada parte. La IA puede escribir un borrador rápido: \"Haz un orden del día de 15 minutos para la reunión de nuestro club para planear una venta de pasteles para recaudar fondos.\"",
            "Dale un rol a cada persona para que el trabajo se reparta: alguien que toma notas, alguien que controla el tiempo y responsables de cada tarea. Un líder se asegura de que todos tengan la oportunidad de hablar, sobre todo las personas más calladas.",
            "Termina cada reunión con los siguientes pasos: quién hace qué y para cuándo. Envía un resumen corto después."
          ],
          steps: ["Escribe una meta para la reunión.", "Haz un orden del día de 15 minutos con tiempos.", "Reparte roles: quien toma notas, quien controla el tiempo, responsables de tareas.", "Invita a hablar a las personas más calladas.", "Termina con quién hace qué y para cuándo."],
          words: [["Orden del día", "una lista de temas para una reunión, con tiempos."], ["Tarea asignada", "una tarea que alguien acepta hacer para una fecha."]],
          slides: [
            { title: "Corta y clara", bullets: ["Ten una meta", "Usa un orden del día con tiempos", "La IA puede hacer el borrador"] },
            { title: "Reparte el trabajo", bullets: ["Quien toma notas y quien controla el tiempo", "Un responsable para cada tarea", "Invita a las voces más calladas"] },
            { title: "Termina con los siguientes pasos", bullets: ["Quién hace qué y para cuándo", "Envía un resumen corto"] }
          ],
          tryIt: "Pídele a la IA un borrador de orden del día de 15 minutos para una reunión de grupo real o inventada. Cámbialo para que se ajuste a tu grupo, agrega roles y escribe tres tareas asignadas con nombres y fechas.",
          youCanNow: "planear y dirigir una reunión corta y útil."
        },
        {
          title: "Manejar los desacuerdos con calma",
          minutes: 5,
          goal: "Usar escuchar, repetir y responder para calmar un desacuerdo y llegar a una decisión.",
          text: [
            "Los grupos tienen desacuerdos, y eso es normal. Un buen líder mantiene la conversación sobre el problema, no sobre la persona.",
            "Prueba escuchar, repetir y responder. Escucha por completo. Repite lo que oíste: \"O sea que piensas que la venta de pasteles debería ser el viernes porque hay más gente.\" Luego responde con tu punto de vista y busca lo que los dos quieren.",
            "Si el grupo no logra ponerse de acuerdo, usa una forma justa de decidir: una votación, una prueba o preguntarle a tu asesor o entrenador. Si un desacuerdo se convierte en acoso, amenazas o alguien sale lastimado, da un paso atrás y avísale de inmediato a un adulto de confianza. También puedes practicar primero las conversaciones difíciles con un juego de rol con IA."
          ],
          steps: ["Mantén la conversación sobre el problema, no sobre la persona.", "Escucha por completo.", "Repite lo que oíste.", "Responde y busca metas en común.", "Si se atoran, voten o prueben una opción; busca a un adulto si se vuelve peligroso."],
          words: [["Acuerdo mutuo", "un acuerdo en el que cada lado cede un poco."], ["Escucha activa", "escuchar con atención y mostrar que entendiste."]],
          slides: [
            { title: "El desacuerdo es normal", bullets: ["Enfócate en el problema, no en la persona"] },
            { title: "Escuchar, repetir, responder", bullets: ["Escucha por completo", "\"O sea que piensas...\"", "Comparte tu punto de vista y busca metas en común"] },
            { title: "Si se atoran", bullets: ["Voten o hagan una prueba", "Pregunten a un asesor o entrenador", "¿Hay peligro o acoso? Avisa a un adulto de confianza"] }
          ],
          tryIt: "Tarea final: planea un proyecto pequeño para un grupo real: el problema en una oración, tres soluciones y la que eliges, un rol para cada persona, un orden del día de 15 minutos y una presentación de un minuto practicada en voz alta con un juego de rol con IA o con un amigo.",
          youCanNow: "guiar a un grupo con confianza a través de un problema, una reunión y un desacuerdo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Liderar y resolver problemas",
        questions: [
          { q: "¿Cuál es el primero de los cinco pasos para resolver problemas?", options: ["Nombrar el problema en una oración", "Probar una solución", "Revisar si funcionó", "Culpar a alguien"], answer: 0, why: "Empiezas por nombrar el problema con claridad." },
          { q: "¿Dónde ayuda más la IA al resolver problemas?", options: ["Tomando la decisión final por el grupo", "Haciendo el trabajo del grupo", "Culpando a las personas", "Generando muchas soluciones"], answer: 3, why: "La IA es buena para hacer listas de ideas; el grupo decide." },
          { q: "¿Qué es un orden del día?", options: ["Un bocadillo", "Una lista de temas de la reunión con tiempos", "Un tipo de votación", "Una contraseña"], answer: 1, why: "Un orden del día mantiene la reunión en camino." },
          { q: "¿Cómo debe terminar cada reunión?", options: ["Con quién hace qué y para cuándo", "Sin ningún plan", "Con una pelea", "Con todos yéndose temprano"], answer: 0, why: "Las tareas asignadas claras convierten la conversación en acción." },
          { q: "Un desacuerdo se convierte en amenazas. El líder debe:", options: ["Ignorarlo", "Unirse", "Dar un paso atrás y avisar a un adulto de confianza", "Publicarlo en internet"], answer: 2, why: "La seguridad va primero; involucra a un adulto." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Liderazgo, confianza y resolución de problemas",
    questions: [
      { q: "Confianza significa:", options: ["Nunca ponerte nervioso", "Creer que puedes con algo", "Ser siempre el que habla más fuerte", "Ser perfecto"], answer: 1, why: "La confianza es creer en ti, aunque tengas nervios." },
      { q: "¿Cuál NO es una fortaleza?", options: ["Mantener la calma", "Ser organizado", "Nunca rendirte", "Ignorar a tus compañeros de equipo"], answer: 3, why: "Ignorar a tus compañeros perjudica al grupo." },
      { q: "Cuando le pides a la IA que nombre tus fortalezas, deberías:", options: ["Compartir tu dirección", "Dejar que la IA decida quién eres", "Compartir tu contraseña", "Compartir una historia corta sin datos privados"], answer: 3, why: "Las historias sin datos privados le dan a la IA lo suficiente para ayudar." },
      { q: "Las metas SMART son específicas, medibles, alcanzables, relevantes y:", options: ["Secretas", "Con fecha límite", "Enormes", "Opcionales"], answer: 1, why: "Una fecha límite le pone tiempo a la meta." },
      { q: "¿Por qué agregar un primer paso a una meta?", options: ["Hace la meta más larga", "Los maestros lo exigen", "Los pequeños logros construyen confianza y empiezan el avance", "No hace falta"], answer: 2, why: "Empezar en pequeño te pone en marcha." },
      { q: "¿Cuál es un deseo y no una meta?", options: ["\"Quiero liderar mejor\"", "\"Voy a dirigir una reunión del club antes del 1 de marzo\"", "\"Voy a hablar en clase dos veces por semana durante un mes\"", "\"Voy a correr 2 millas tres veces por semana durante 4 semanas\""], answer: 0, why: "No tiene medida ni fecha límite." },
      { q: "Una buena instrucción para un juego de rol es:", options: ["\"Habla con mi asesor por mí\"", "\"Haz de cuenta que eres el asesor de mi club y hazme preguntas difíciles\"", "\"Dame un discurso para leer\"", "\"Haz mi tarea\""], answer: 1, why: "El juego de rol te deja practicar la conversación real." },
      { q: "En PREP, la E significa:", options: ["Salida", "Energía", "Correo electrónico", "Ejemplo"], answer: 3, why: "Punto, Razón, Ejemplo, Punto." },
      { q: "Antes de una charla difícil, una forma rápida de calmar los nervios es:", options: ["Respirar despacio", "Saltártela", "Gritar", "Mirar tu teléfono"], answer: 0, why: "Respirar despacio te ayuda a mantenerte firme." },
      { q: "En la resolución de problemas en cinco pasos, después de hacer la lista de soluciones:", options: ["Te detienes", "Culpas a alguien", "Eliges una y la pruebas", "Empiezas otro problema"], answer: 2, why: "Luego revisas si funcionó." },
      { q: "Una causa raíz es:", options: ["La raíz de una planta", "Un tipo de reunión", "La razón real por la que pasa un problema", "Una contraseña"], answer: 2, why: "Resolver la causa raíz resuelve el problema." },
      { q: "Poca gente va al club porque las reuniones chocan con el entrenamiento. Una buena primera solución para probar es:", options: ["Cambiar el día de la reunión", "Cancelar el club", "Culpar a los miembros", "No hacer nada"], answer: 0, why: "Ataca la causa." },
      { q: "¿Quién toma la decisión final cuando la IA hace una lista de soluciones?", options: ["La IA", "Un desconocido en internet", "Nadie", "Tú y tu grupo"], answer: 3, why: "La IA sugiere; las personas deciden." },
      { q: "Una reunión de 15 minutos necesita:", options: ["Ningún plan", "Un orden del día con tiempos", "Dos horas", "Solo bocadillos"], answer: 1, why: "El orden del día mantiene cortas las reuniones." },
      { q: "¿Qué hace quien controla el tiempo?", options: ["Mantiene la reunión dentro del horario", "Toma notas", "Lleva bocadillos", "Vota dos veces"], answer: 0, why: "Quien controla el tiempo vigila el reloj." },
      { q: "Un buen líder en una reunión:", options: ["Habla todo el tiempo", "Ignora las ideas nuevas", "Invita a hablar a las personas más calladas", "Deja que una persona decida todo"], answer: 2, why: "Las ideas de todos ayudan al grupo." },
      { q: "Una tarea asignada es:", options: ["Una película", "Una tarea que alguien acepta hacer para una fecha", "Un bocadillo de la reunión", "Una pelea"], answer: 1, why: "Las tareas asignadas convierten los planes en trabajo." },
      { q: "En escuchar, repetir y responder, el paso de \"repetir\" suena así:", options: ["\"Estás equivocado\"", "\"Como sea\"", "\"Me voy\"", "\"O sea que piensas que la venta debería ser el viernes porque hay más gente\""], answer: 3, why: "Repetir muestra que entendiste." },
      { q: "Tu grupo no logra ponerse de acuerdo en una fecha. Una forma justa de decidir es:", options: ["Gana el que grita más fuerte", "Rendirse", "Pelear por eso", "Una votación o una prueba"], answer: 3, why: "Las votaciones y las pruebas son formas justas de decidir." },
      { q: "Un acuerdo mutuo es:", options: ["Un lado gana todo", "Un acuerdo en el que cada lado cede un poco", "Terminar la amistad", "Ignorar el problema"], answer: 1, why: "Los dos lados ceden un poco para ponerse de acuerdo." }
    ]
  }
};

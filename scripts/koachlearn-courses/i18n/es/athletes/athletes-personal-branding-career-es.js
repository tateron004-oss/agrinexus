"use strict";

// Koach Learn course (Spanish translation of athletes-personal-branding-career). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-personal-branding-career-es",
  lang: "es",
  translationOf: "athletes-personal-branding-career",
  category: "Athletes",
  name: "Marca personal y desarrollo profesional del atleta",
  skills: "Nombrar tus habilidades transferibles, Escribir tu historia como atleta, Hacer un currículum con IA, Crear un perfil de LinkedIn, Hacer contactos y entrevistas informativas",
  outcome: "convertir tu experiencia como atleta en herramientas para tu carrera: una lista de habilidades transferibles con pruebas, una historia de 60 segundos, un currículum de una página hecho con IA, un perfil de LinkedIn y una solicitud de entrevista informativa enviada a alguien de una profesión que te da curiosidad.",
  about: [
    "Este curso es para atletas de secundaria, de universidad y que empiezan su vida laboral, que piensan en la vida durante y después del deporte, y para los entrenadores que los orientan. La mayoría de los atletas tendrá una carrera fuera del juego, y el deporte ya te enseñó habilidades que los empleadores buscan.",
    "Vas a nombrar esas habilidades, contar tu historia de una forma que los empleadores entiendan, hacer un currículum y un perfil de LinkedIn con ayuda de la IA y empezar a construir una red de contactos.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Arma tu kit para empezar tu carrera: una lista de cinco habilidades transferibles con un ejemplo deportivo para cada una, una historia de 60 segundos, un currículum de una página hecho con IA y revisado por ti, un perfil de LinkedIn (si cumples sus reglas de edad) o una página de portafolio profesional, y una solicitud amable de entrevista informativa enviada a una persona real.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria, universidad y de los primeros años de carrera que piensan en su vida durante y después del deporte, y entrenadores que los acompañan como mentores.",
    startingPoint: "Tienen años de experiencia deportiva, muchas veces con roles de liderazgo, y usan el teléfono todos los días. Muchos no tienen un currículum, no saben describir sus habilidades con lenguaje del trabajo, no han explorado carreras fuera de jugar y nunca le han pedido un consejo a un profesional.",
    gap: "La mayoría de los deportistas tendrá una carrera fuera del juego, y el cambio puede ser difícil si empiezan tarde. Convertir la experiencia deportiva en pruebas de sus habilidades, una historia clara, un currículum y una red de contactos les da confianza y opciones ahora y después del deporte.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Un teléfono o una computadora con un asistente de IA gratuito; LinkedIn solo si la persona cumple sus reglas de edad actuales, y si no, Google Sites",
      "Unos 60 minutos en total",
      "No se pegan en la IA números de Seguro Social ni otros números privados",
      "Los deportistas menores de 18 años deben incluir a su madre, padre o tutor antes de contactar a adultos que no conocen"
    ],
    prerequisites: "Ninguno"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Según tus roles, tus rutinas y tus desafíos en el deporte", action: "hacer una lista de cinco habilidades transferibles con un ejemplo deportivo real para cada una", standard: "con cada ejemplo verdadero y lo bastante concreto para que cuente como prueba" },
    { id: "O2", condition: "Usando la estructura de Pasado, Presente y Futuro", action: "escribir y decir una historia de 60 segundos sobre quién eres y hacia dónde vas", standard: "de unas 150 palabras, con tu propia voz y practicada en voz alta hasta que suene natural" },
    { id: "O3", condition: "Según tus intereses y con un asistente de IA", action: "hacer una lista de tres carreras para explorar y una forma de conocer cada una", standard: "con la formación y el sueldo revisados en un sitio oficial de carreras o con un orientador vocacional" },
    { id: "O4", condition: "Usando tus notas y un asistente de IA", action: "crear un currículum de una página que describa el deporte con lenguaje del trabajo", standard: "con viñetas que empiezan con verbos de acción, números cuando son verdaderos, cada dato revisado, sin compartir números privados y revisado por una persona" },
    { id: "O5", condition: "Si cumples las reglas de edad de LinkedIn, o con Google Sites si no", action: "crear un perfil profesional con foto, titular, sección Acerca de, experiencia y habilidades", standard: "que coincida con tu currículum y con cinco contactos hechos con una nota personal corta" },
    { id: "O6", condition: "Ante una persona que trabaja en una carrera que te da curiosidad", action: "escribir y enviar una solicitud amable de entrevista informativa", standard: "con quién eres, cómo la encontraste, por qué te interesa su carrera, un pedido pequeño, tres preguntas preparadas y un agradecimiento después" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tu historia y tus habilidades",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tus habilidades transferibles",
          minutes: 5,
          goal: "Nombrar cinco habilidades del deporte que sirven en el trabajo, cada una con un ejemplo real.",
          text: [
            "Las habilidades transferibles son las que puedes usar en muchos trabajos. El deporte desarrolla muchas: trabajo en equipo, liderazgo, manejo del tiempo, manejo de la presión, aceptar comentarios, disciplina, comunicación y resiliencia después de las derrotas.",
            "Los empleadores quieren pruebas, no solo palabras. \"Liderazgo\" es una afirmación. \"Capitán de un equipo de 20 jugadores; dirigía los calentamientos y resolvía conflictos\" es una prueba.",
            "Un asistente de IA te puede ayudar a encontrar habilidades que no habías notado: \"Jugué cuatro años de fútbol en el equipo principal de mi escuela, fui capitán en el último año, combiné los entrenamientos con un trabajo de medio tiempo y volví después de una lesión del ligamento cruzado. ¿Qué habilidades transferibles muestra esto, con un ejemplo de cada una?\" Quédate solo con lo que es cierto."
          ],
          steps: ["Haz una lista de lo que hiciste en el deporte: funciones, rutinas, retos.", "Pregunta a la IA qué habilidades muestran.", "Elige cinco habilidades.", "Escribe un ejemplo real para cada una.", "Quita todo lo que no sea cierto."],
          words: [["Habilidad transferible", "una habilidad que puedes usar en muchos trabajos distintos."], ["Resiliencia", "recuperarte después de un tropiezo."]],
          slides: [
            { title: "El deporte desarrolla habilidades de trabajo", bullets: ["Trabajo en equipo, liderazgo", "Manejo del tiempo, presión", "Aceptar comentarios, disciplina, resiliencia"] },
            { title: "Afirmación vs. prueba", bullets: ["Afirmación: \"liderazgo\"", "Prueba: \"Capitán de 20 jugadores; dirigía los calentamientos\""] },
            { title: "La IA te ayuda a verlas", bullets: ["Describe lo que hiciste", "Quédate solo con lo que es cierto"] }
          ],
          tryIt: "Usa un asistente de IA para encontrar habilidades en tu experiencia deportiva. Escribe tus cinco principales, cada una con un ejemplo cierto.",
          youCanNow: "nombrar tus habilidades transferibles y demostrar cada una con un ejemplo.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una habilidad transferible?", options: ["Tu número de camiseta", "El récord de tu equipo", "Recibir comentarios para mejorar", "Tu ejercicio favorito"], answer: 2, why: "Las habilidades transferibles, como recibir comentarios para mejorar, sirven en muchos trabajos." },
            { objective: "O1", q: "Escribiste \"trabajo en equipo\" en tu lista. ¿Cómo lo conviertes en una prueba?", options: ["Agregando un ejemplo real, como organizar sesiones de estudio del equipo antes de los partidos de visitante", "Escribiéndolo en mayúsculas", "Agregando más habilidades", "Pidiéndole a la IA que lo haga sonar más grande"], answer: 0, why: "Los empleadores quieren pruebas, así que agrega un ejemplo real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tu historia de atleta en 60 segundos",
          minutes: 5,
          goal: "Escribir y practicar una historia de 60 segundos sobre quién eres y hacia dónde vas.",
          text: [
            "Te van a decir \"Háblame de ti\" en entrevistas, al hacer contactos y hasta en el reclutamiento. Ten lista una respuesta de 60 segundos.",
            "Usa tres partes: Pasado (el deporte y lo que te enseñó), Presente (lo que haces ahora: estudios, trabajo, entrenamiento), Futuro (el camino que te da curiosidad). Ejemplo: \"Juego baloncesto desde hace diez años, y ser capitán me enseñó a dirigir a un grupo bajo presión. Ahora estudio administración y trabajo medio tiempo en un gimnasio. Me interesa el marketing deportivo y quiero aprender cómo los equipos construyen comunidades de fans.\"",
            "Pide a un asistente de IA que la ajuste a unas 150 palabras y luego practícala en voz alta hasta que suene natural, no memorizada."
          ],
          steps: ["Escribe tu Pasado, tu Presente y tu Futuro en una o dos oraciones cada uno.", "Pide a la IA que la ajuste a unas 150 palabras.", "Ajústala a tu estilo.", "Practícala en voz alta tres veces.", "Mide el tiempo: unos 60 segundos."],
          words: [["Discurso de ascensor", "una presentación corta en voz alta que podrías dar en un viaje en ascensor."], ["Hacer contactos", "construir relaciones con personas que pueden compartir consejos y oportunidades."]],
          slides: [
            { title: "\"Háblame de ti\"", bullets: ["Entrevistas, contactos, reclutamiento", "Ten 60 segundos listos"] },
            { title: "Tres partes", bullets: ["Pasado: el deporte y lo que te enseñó", "Presente: estudios, trabajo, entrenamiento", "Futuro: lo que te da curiosidad"] },
            { title: "Púlela", bullets: ["La IA la ajusta a unas 150 palabras", "Practica en voz alta", "Natural, no memorizada"] }
          ],
          tryIt: "Escribe tu historia de Pasado-Presente-Futuro, ajústala con la IA y grábate diciéndola con tu teléfono. Escúchala una vez y mejora una cosa.",
          youCanNow: "contar tu historia de atleta de 60 segundos de forma clara y natural.",
          quickCheck: [
            { objective: "O2", q: "¿Qué dice la parte del \"Presente\" de tu historia?", options: ["Tu infancia", "El sueldo de tus sueños", "Tu mejor partido", "Lo que haces ahora: estudios, trabajo, entrenamiento"], answer: 3, why: "El Pasado es el deporte, el Presente es lo que haces ahora y el Futuro es tu rumbo." },
            { objective: "O2", q: "Tu historia suena rígida y memorizada. ¿Qué haces?", options: ["Leerla en tu teléfono", "Practicarla en voz alta hasta que suene natural", "Hacerla de cinco minutos", "Dejar de usarla"], answer: 1, why: "Practica en voz alta hasta que suene natural, no memorizada." }
          ]
        },
        {
          objectives: ["O3"],
          title: "La vida después del deporte: explorar carreras",
          minutes: 5,
          goal: "Hacer una lista de tres carreras para explorar y una forma de conocer cada una.",
          text: [
            "Todo atleta deja de competir algún día, por decisión, por una lesión o por la edad. Planear con tiempo hace ese cambio más fácil y te da confianza desde ahora.",
            "Explora carreras relacionadas con tus intereses, no solo con el deporte. Dentro del deporte: entrenador, preparador físico, marketing deportivo, transmisiones, análisis de datos, administración de instalaciones. Fuera del deporte: negocios, salud, tecnología, oficios, docencia, servicio público y más.",
            "Usa un asistente de IA para generar ideas y que te explique las carreras, y luego revisa los detalles reales, como los estudios que se necesitan y el salario, en sitios oficiales de carreras, como el Manual de Perspectivas Ocupacionales de la Oficina de Estadísticas Laborales de EE. UU. (BLS), o con un orientador vocacional de tu escuela."
          ],
          steps: ["Haz una lista de tus intereses aparte de ganar.", "Pide a la IA carreras que coincidan.", "Elige tres para explorar.", "Revisa cada una en un sitio oficial de carreras o con un orientador vocacional.", "Escribe una forma de conocer más sobre cada una."],
          words: [["Orientador vocacional", "una persona de la escuela o la comunidad que te ayuda a explorar trabajos."], ["Manual de Perspectivas Ocupacionales", "una guía del gobierno de EE. UU. sobre trabajos, estudios necesarios y salarios (Occupational Outlook Handbook)."]],
          slides: [
            { title: "Todo atleta vive una transición", bullets: ["Por decisión, lesión o edad", "Planea con tiempo y siéntete seguro desde ahora"] },
            { title: "Explora a lo amplio", bullets: ["En el deporte: entrenador, preparador, marketing, análisis", "Fuera: negocios, salud, tecnología, oficios, docencia"] },
            { title: "Revisa los detalles reales", bullets: ["La IA para generar ideas", "Sitios oficiales para estudios y salario", "Habla con un orientador vocacional"] }
          ],
          sources: [{ name: "Oficina de Estadísticas Laborales de EE. UU.: Manual de Perspectivas Ocupacionales (en inglés)", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Pide a un asistente de IA diez carreras que vayan con tus intereses. Elige tres y busca los estudios que necesita cada una en un sitio oficial de carreras o pregúntale a tu orientador vocacional.",
          youCanNow: "explorar carreras más allá de jugar y revisar los detalles en fuentes oficiales.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es una carrera fuera del deporte?", options: ["Entrenador", "Preparador físico", "Comentarista deportivo", "Docente"], answer: 3, why: "La docencia está fuera del deporte; las otras son carreras dentro del deporte." },
            { objective: "O3", q: "La IA te dice cuánto se gana en una carrera que te gusta. ¿Qué haces después?", options: ["Revisarlo en un sitio oficial de carreras o con un orientador vocacional", "Creerle por completo", "Publicarlo en internet", "Elegir esa carrera de inmediato"], answer: 0, why: "Revisa los datos reales, como el sueldo y la formación, en fuentes oficiales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu historia y tus habilidades",
        questions: [
          { objective: "O1", q: "¿Cuál es una prueba de liderazgo?", options: ["\"Soy un líder\"", "\"¡Liderazgo!\"", "\"Capitán de un equipo de 20 jugadores; dirigía los calentamientos y resolvía conflictos\"", "\"Le caigo bien a todos\""], answer: 2, why: "Un ejemplo real demuestra la habilidad." },
          { objective: "O1", q: "La IA dice que tienes una \"certificación en gestión de proyectos\". No la tienes. Tú:", options: ["La quitas", "La dejas", "Agregas más", "La pones en negritas"], answer: 0, why: "Quédate solo con lo que es cierto." },
          { objective: "O2", q: "¿Cuáles son las tres partes de tu historia de 60 segundos?", options: ["Victorias, derrotas, empates", "Nombre, edad, dirección", "Estadísticas, estatura, peso", "Pasado, Presente, Futuro"], answer: 3, why: "Muestra dónde has estado, dónde estás y hacia dónde vas." },
          { objective: "O3", q: "¿Por qué planear con tiempo la vida después del deporte?", options: ["Tienes que dejarlo ya", "Todo atleta deja de competir algún día", "Los entrenadores lo exigen", "No sirve de nada"], answer: 1, why: "Planear con tiempo hace el cambio más fácil." },
          { objective: "O3", q: "¿Dónde debes revisar los estudios y el salario de una carrera?", options: ["En un comentario cualquiera", "En un sitio oficial de carreras o con un orientador vocacional", "Solo en una IA", "En un videojuego"], answer: 1, why: "Las fuentes oficiales son confiables." }
        ]
      }
    },
    {
      name: "Capítulo 2: Currículum, LinkedIn y contactos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hacer un currículum con IA",
          minutes: 6,
          goal: "Hacer un currículum de una página que traduzca el deporte al lenguaje del trabajo.",
          text: [
            "Un currículum es un resumen de una página de tus estudios, tu experiencia y tus habilidades. Los atletas deben incluir el deporte como experiencia, escrito en lenguaje de trabajo.",
            "Secciones: Contacto (nombre, ciudad, correo profesional, teléfono), Educación, Experiencia (trabajos, prácticas, voluntariado y deporte), Habilidades y Reconocimientos. Escribe puntos que empiecen con verbos de acción e incluyan números: \"Combiné 20 horas semanales de entrenamiento con un promedio de 3.4\".",
            "Pide a un asistente de IA: \"Convierte estas notas en un currículum de una página para una práctica en marketing deportivo. Usa verbos de acción y números.\" No pegues números privados como tu número de Seguro Social. Revisa cada detalle y pide a un maestro, entrenador u orientador vocacional que lo revise."
          ],
          steps: ["Reúne tus estudios, trabajos, voluntariado y funciones en el deporte.", "Pide a la IA un borrador de currículum de una página.", "Revisa cada dato y cada número.", "Usa verbos de acción y números.", "Pide a un orientador, maestro o entrenador que lo revise."],
          words: [["Currículum", "un resumen de una página de tus estudios, tu experiencia y tus habilidades."], ["Verbo de acción", "un verbo fuerte que empieza un punto, como dirigí, organicé o entrené."]],
          slides: [
            { title: "Secciones del currículum", bullets: ["Contacto y Educación", "Experiencia, incluido el deporte", "Habilidades y Reconocimientos"] },
            { title: "Puntos fuertes", bullets: ["Empieza con un verbo de acción", "Agrega un número", "\"Combiné 20 h/semana de entrenamiento con un promedio de 3.4\""] },
            { title: "Usa la IA con seguridad", bullets: ["Nada de números de identificación privados", "Revisa cada dato", "Pide que lo revise una persona"] }
          ],
          tryIt: "Usa la IA para convertir tus notas en un currículum de una página. Corrige cualquier dato equivocado y pide a un adulto que lo revise.",
          youCanNow: "hacer un currículum de una página que muestre tu experiencia de atleta en lenguaje de trabajo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué sección del currículum incluye tu número de teléfono y tu correo profesional?", options: ["Reconocimientos", "Habilidades", "Contacto", "Formación"], answer: 2, why: "Contacto tiene tu nombre, tu ciudad, tu correo profesional y tu teléfono." },
            { objective: "O4", q: "El borrador de tu currículum hecho con IA está listo. ¿Qué haces antes de enviarlo?", options: ["Enviarlo de inmediato", "Agregar tu número de Seguro Social", "Hacerlo de tres páginas", "Revisar cada dato y pedir que lo revise un orientador, un maestro o un entrenador"], answer: 3, why: "Revisa cada detalle y pide que lo revise una persona." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tu perfil de LinkedIn",
          minutes: 5,
          goal: "Crear un perfil profesional de LinkedIn (o una página de portafolio profesional si no tienes la edad).",
          text: [
            "LinkedIn es una red social profesional donde se conectan empleadores, reclutadores y exalumnos. Revisa las reglas actuales de edad mínima de LinkedIn antes de registrarte; si eres muy joven, haz en su lugar una página profesional sencilla en Google Sites.",
            "Un perfil fuerte tiene: una foto clara y profesional; un titular que diga quién eres y hacia dónde vas (\"Estudiante atleta | Estudiante de administración | Interesado en marketing deportivo\"); una sección Acerca de basada en tu historia de 60 segundos; experiencia, incluido el deporte; y habilidades.",
            "Mantenlo profesional y en línea con tu currículum. Conéctate con entrenadores, maestros, compañeros, exalumnos de tu escuela y personas de carreras que te gustan, con una nota personal corta."
          ],
          steps: ["Revisa las reglas de edad actuales de LinkedIn.", "Agrega una foto profesional y un titular.", "Adapta tu historia de 60 segundos para la sección Acerca de.", "Agrega tu experiencia, incluido el deporte.", "Conéctate con cinco personas con una nota corta."],
          words: [["LinkedIn", "una red social profesional para carreras y empleos."], ["Titular", "la línea corta debajo de tu nombre en LinkedIn."], ["Exalumnos", "personas que se graduaron de tu escuela."]],
          slides: [
            { title: "LinkedIn", bullets: ["Red social profesional", "Revisa sus reglas de edad actuales"] },
            { title: "Un perfil fuerte", bullets: ["Foto profesional", "Titular: quién eres y hacia dónde vas", "Acerca de: tu historia de 60 segundos"] },
            { title: "Conéctate", bullets: ["Entrenadores, maestros, exalumnos", "Personas de carreras que te gustan", "Agrega una nota personal corta"] }
          ],
          tryIt: "Crea o actualiza tu perfil de LinkedIn (o una página profesional en Google Sites si eres muy joven). Pide a la IA tres opciones de titular y elige una.",
          youCanNow: "crear un perfil profesional en línea que coincida con tu currículum.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debe decir un titular de LinkedIn?", options: ["Quién eres y hacia dónde vas", "Tu número de teléfono", "El marcador de tu último partido", "Un chiste"], answer: 0, why: "Un titular fuerte dice quién eres y hacia dónde vas." },
            { objective: "O5", q: "Quieres conectar con un exalumno que trabaja en marketing deportivo. ¿Qué haces?", options: ["Enviar la solicitud sin mensaje", "Enviar una nota personal corta con la solicitud", "Pedirle trabajo de inmediato", "Escribirle todos los días"], answer: 1, why: "Conecta con una nota personal corta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contactos y entrevistas informativas",
          minutes: 5,
          goal: "Escribir y enviar una solicitud amable de entrevista informativa.",
          text: [
            "Una entrevista informativa es una conversación corta, muchas veces de 15 a 20 minutos, en la que le preguntas a alguien sobre su carrera. Pides consejos, no un trabajo.",
            "Los atletas tienen una gran red de contactos: excompañeros, exalumnos que fueron atletas, los contactos de los entrenadores y dueños de negocios locales que apoyan a tu equipo. A muchos les gusta ayudar a estudiantes atletas.",
            "Escribe una solicitud corta: quién eres, cómo encontraste a la persona, por qué te interesa su carrera y un pedido claro y pequeño (\"¿Podría hacerle algunas preguntas durante 15 minutos en las próximas semanas?\"). Prepara tres preguntas, sé puntual y envía un mensaje de agradecimiento después."
          ],
          steps: ["Elige a una persona de una carrera que te da curiosidad.", "Usa la IA para hacer el borrador de una solicitud corta.", "Hazla personal y amable.", "Prepara tres preguntas.", "Envía un agradecimiento después de la conversación."],
          words: [["Entrevista informativa", "una conversación corta para conocer la carrera de alguien, no para pedir trabajo."], ["Red de contactos", "las personas que conoces y que pueden compartir consejos y oportunidades."]],
          slides: [
            { title: "Entrevista informativa", bullets: ["15-20 minutos", "Pide consejos, no un trabajo"] },
            { title: "Tu red de atleta", bullets: ["Excompañeros y exalumnos atletas", "Contactos de los entrenadores", "Personas locales que te apoyan"] },
            { title: "La solicitud", bullets: ["Quién eres, cómo encontraste a la persona", "Por qué te interesa su carrera", "Un pedido pequeño y claro"] }
          ],
          tryIt: "Tarea final: termina tu lista de habilidades, tu historia de 60 segundos, tu currículum y tu perfil en línea; luego envía una solicitud de entrevista informativa a una persona real y prepara tres preguntas.",
          youCanNow: "pedir y preparar una entrevista informativa para ampliar tu red de contactos.",
          quickCheck: [
            { objective: "O6", q: "¿Qué pides en una entrevista informativa?", options: ["Una oferta de trabajo", "Dinero", "Consejos sobre su carrera", "Una carta de recomendación"], answer: 2, why: "Pides consejos, no trabajo." },
            { objective: "O6", q: "Un exalumno aceptó hablar contigo 15 minutos la próxima semana. ¿Cómo te preparas?", options: ["Preparar tres preguntas y llegar a tiempo", "Planear hablar de ti todo el tiempo", "Pedir una hora en su lugar", "Llevar tu currículum y pedirle trabajo"], answer: 0, why: "Prepara tres preguntas, llega a tiempo y envía un agradecimiento después." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Currículum, LinkedIn y contactos",
        questions: [
          { objective: "O4", q: "¿Qué punto de currículum es el más fuerte?", options: ["\"Hice deporte\"", "\"Estuve en un equipo\"", "\"Muy trabajador\"", "\"Combiné 20 horas semanales de entrenamiento con un promedio de 3.4\""], answer: 3, why: "Usa una acción y un número." },
          { objective: "O4", q: "¿Qué NO debes pegar en una IA al hacer un currículum?", options: ["Tu número de Seguro Social", "Tus funciones en el deporte", "El nombre de tu escuela", "Tus tareas en el trabajo"], answer: 0, why: "Los números de identificación privados se quedan privados." },
          { objective: "O5", q: "Eres muy joven para LinkedIn. ¿Qué puedes hacer?", options: ["Mentir sobre tu edad", "Usar la cuenta de tu padre o madre", "Hacer una página profesional en Google Sites", "Rendirte"], answer: 2, why: "Una página profesional sencilla sirve hasta que tengas la edad." },
          { objective: "O6", q: "En una entrevista informativa pides:", options: ["Un trabajo de inmediato", "Dinero", "Su contraseña", "Consejos sobre su carrera"], answer: 3, why: "Es para aprender, no para buscar trabajo." },
          { objective: "O6", q: "Después de una entrevista informativa debes:", options: ["Pedir trabajo de inmediato", "Enviar un mensaje de agradecimiento", "No volver a contactar a la persona", "Publicar sobre ella"], answer: 1, why: "Los agradecimientos construyen relaciones duraderas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Marca personal y desarrollo profesional del atleta",
    questions: [
      { objective: "O1", q: "Una habilidad transferible es:", options: ["Un intercambio entre equipos", "Una regla del portal de transferencias", "Una habilidad que puedes usar en muchos trabajos", "Una bebida deportiva"], answer: 2, why: "Va contigo de un trabajo a otro." },
      { objective: "O1", q: "¿Cuál es una habilidad transferible del deporte?", options: ["Manejar la presión", "Tu número de camiseta", "La marca de tus tenis", "Tu mascota"], answer: 0, why: "Los empleadores valoran saber manejar la presión." },
      { objective: "O1", q: "Resiliencia significa:", options: ["Recuperarte después de un tropiezo", "No perder nunca", "Ser el más alto", "Correr rápido"], answer: 0, why: "Es reponerse de los tropiezos." },
      { objective: "O1", q: "Los empleadores quieren:", options: ["Solo afirmaciones", "Solo tus estadísticas", "Pruebas, no solo palabras", "Tus seguidores"], answer: 2, why: "Los ejemplos demuestran las habilidades." },
      { objective: "O2", q: "Tu historia de 60 segundos debe sonar:", options: ["Como un robot", "Natural, no memorizada", "Muy larga", "Como otra persona"], answer: 1, why: "Lo natural suena seguro y real." },
      { objective: "O2", q: "La parte \"Futuro\" de tu historia dice:", options: ["Tus resultados viejos", "Tu contraseña", "Los planes de tu rival", "El camino que te da curiosidad"], answer: 3, why: "Muestra hacia dónde vas." },
      { objective: "O2", q: "¿Cuánto debe durar tu historia en voz alta?", options: ["Diez minutos", "Cinco segundos", "Unos 60 segundos", "Una hora"], answer: 2, why: "Lo bastante corta para mantener la atención." },
      { objective: "O3", q: "Una carrera dentro del deporte es:", options: ["Plomería", "Enfermería", "Enseñar matemáticas", "Preparación física"], answer: 3, why: "La preparación física es una carrera deportiva." },
      { objective: "O3", q: "El Manual de Perspectivas Ocupacionales es:", options: ["Una guía del gobierno de EE. UU. sobre trabajos, estudios y salarios", "Un libro de jugadas", "Una app social", "Una revista deportiva"], answer: 0, why: "Es una fuente oficial sobre carreras." },
      { objective: "O4", q: "Un currículum normalmente debe tener:", options: ["Diez páginas", "Una página", "Un video", "Un tuit"], answer: 1, why: "Corto y fácil de leer rápido." },
      { objective: "O4", q: "¿Qué sección muestra el deporte en un currículum?", options: ["Contacto", "Solo pasatiempos", "Experiencia", "Ninguna"], answer: 2, why: "El deporte es experiencia real." },
      { objective: "O4", q: "Un punto de currículum debe empezar con:", options: ["Un verbo de acción", "\"Eh\"", "Tu contraseña", "Un emoji"], answer: 0, why: "Los verbos de acción muestran lo que hiciste." },
      { objective: "O4", q: "Después de que la IA hace el borrador de tu currículum, debes:", options: ["Enviarlo sin leerlo", "Agregar trabajos falsos", "Hacerlo de tres páginas", "Revisar cada dato y pedir que lo revise una persona"], answer: 3, why: "La exactitud y una segunda mirada importan." },
      { objective: "O5", q: "LinkedIn es:", options: ["Un videojuego", "Una red social profesional", "Una liga deportiva", "Una tienda"], answer: 1, why: "Es para carreras y empleos." },
      { objective: "O5", q: "Un titular fuerte de LinkedIn es:", options: ["\"hola\"", "\"Estudiante atleta | Estudiante de administración | Interesado en marketing deportivo\"", "\"aburrido\"", "En blanco"], answer: 1, why: "Dice quién eres y hacia dónde vas." },
      { objective: "O5", q: "Al conectarte en LinkedIn, agrega:", options: ["Nada, nunca", "Una exigencia de trabajo", "Tu dirección", "Una nota personal corta"], answer: 3, why: "Con notas personales te aceptan más." },
      { objective: "O5", q: "Los exalumnos son:", options: ["Personas que se graduaron de tu escuela", "Rivales", "Árbitros", "Solo fans"], answer: 0, why: "Muchas veces les gusta ayudar a estudiantes de su escuela." },
      { objective: "O6", q: "Una entrevista informativa suele durar:", options: ["5 horas", "1 minuto", "15-20 minutos", "Todo el día"], answer: 2, why: "Los pedidos cortos reciben más respuestas positivas." },
      { objective: "O6", q: "Antes de la entrevista, prepara:", options: ["Un contrato", "Un regalo", "Nada", "Tres preguntas"], answer: 3, why: "Las preguntas preparadas respetan el tiempo de la otra persona." },
      { objective: "O6", q: "¿Quién forma parte de la red de un atleta?", options: ["Solo celebridades", "Excompañeros, exalumnos atletas y contactos de los entrenadores", "Nadie", "Solo rivales"], answer: 1, why: "Tu comunidad deportiva es una red fuerte." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Habilidades transferibles",
        objective: "O1",
        notYet: "Hay menos de cinco habilidades, o habilidades sin un ejemplo real.",
        meets: "Cinco habilidades, cada una con un ejemplo deportivo verdadero y concreto.",
        exceeds: "Cada ejemplo incluye un número o un resultado, como el tamaño del equipo o las horas equilibradas."
      },
      {
        name: "Historia de 60 segundos",
        objective: "O2",
        notYet: "Falta el Pasado, el Presente o el Futuro, o dura mucho más de un minuto.",
        meets: "Unos 60 segundos con Pasado, Presente y Futuro, con la propia voz del deportista.",
        exceeds: "Se dice en voz alta con naturalidad y está adaptada para la sección Acerca de de LinkedIn."
      },
      {
        name: "Currículum",
        objective: "O4",
        notYet: "Tiene más de una página, datos falsos o deja fuera el deporte.",
        meets: "Una página, con el deporte descrito con lenguaje del trabajo, viñetas con verbos de acción, datos revisados y la revisión de una persona.",
        exceeds: "Está adaptado a una carrera o pasantía de la lista que exploró el deportista."
      },
      {
        name: "Perfil",
        objective: "O5",
        notYet: "No hay perfil, o no coincide con el currículum.",
        meets: "Un perfil de LinkedIn o una página profesional con foto, titular, Acerca de, experiencia y habilidades, que coincide con el currículum.",
        exceeds: "Cinco contactos hechos con notas personales, incluidos exalumnos."
      },
      {
        name: "Solicitud de entrevista informativa",
        objective: "O6",
        notYet: "No se envió ninguna solicitud, o pide trabajo.",
        meets: "Una solicitud amable enviada a una persona real con quién eres, cómo la encontraste, por qué y un pedido pequeño, más tres preguntas listas.",
        exceeds: "La conversación se hizo y se envió un mensaje de agradecimiento."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan su kit de inicio profesional y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que hacen al menos una entrevista informativa en un plazo de 30 días (encuesta de seguimiento)",
      "Participantes que se postulan a una pasantía, un trabajo o un voluntariado, o lo consiguen, usando su currículum",
      "Participantes que toman otro curso, como Emprendimiento con IA para atletas"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Una cuenta de LinkedIn si cumples sus reglas de edad, o una cuenta gratuita de Google para usar Google Sites",
      "Notas sobre tus estudios, trabajos, voluntariado y roles en el deporte",
      "Unos 60 minutos"
    ],
    facilitatorNotes: [
      "Invita a un orientador vocacional de la escuela o a exalumnos que fueron atletas para revisar currículums y practicar las historias de 60 segundos.",
      "Recuerda a los participantes que nunca deben pegar en la IA números de Seguro Social ni otros números privados.",
      "Revisa con el grupo las reglas de edad actuales de LinkedIn y ofrece Google Sites a los participantes más jóvenes.",
      "Con deportistas menores de 18 años, incluye a sus padres o tutores antes de que contacten a adultos que no conocen, y sugiere reunirse en un lugar público o por video.",
      "Ten tacto con los deportistas que enfrentan una lesión o el final de su carrera deportiva, y llévalos a buscar apoyo si lo necesitan."
    ]
  }
};

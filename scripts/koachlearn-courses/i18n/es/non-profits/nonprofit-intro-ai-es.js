"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-intro-ai-es",
  lang: "es",
  translationOf: "nonprofit-intro-ai",
  category: "Non Profits",
  name: "Introducción a la IA para organizaciones sin fines de lucro",
  skills: "Explicar la IA a tu equipo, Escribir instrucciones claras para tareas de la organización, Mejorar un borrador, Revisar datos, Proteger la privacidad de donantes y personas atendidas",
  outcome: "usar un asistente de IA gratis para escribir el borrador de un texto real de tu organización, como una nota de agradecimiento a voluntarios o el anuncio de un evento: pedirlo con claridad, mejorar el borrador, revisar cada dato y dejar fuera la información de donantes y personas atendidas.",
  about: [
    "Este curso es para líderes, personal y voluntarios de organizaciones sin fines de lucro y comunidades de fe que han oído hablar de la IA pero no la han usado mucho, o que quieren usarla de forma más segura.",
    "Vas a aprender qué es un asistente de IA, cómo abrir uno gratis, cómo pedirle los textos que tu organización necesita cada semana, cómo mejorar y revisar el borrador y cómo proteger a las personas que atiendes.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Una comprobación de conocimientos corta cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Usa un asistente de IA gratis para escribir el borrador de una nota de agradecimiento a los voluntarios que ayudaron en un evento reciente (una colecta de alimentos, un día de limpieza o una cena de la iglesia). Usa una instrucción de tres partes, pide dos mejoras, revisa cada dato y fecha con tus propios registros, asegúrate de que la instrucción no tenga datos privados de voluntarios ni donantes, y edita la nota final para que suene a tu organización.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Líderes, personal y voluntarios de organizaciones sin fines de lucro y organizaciones de fe, muchas veces de organizaciones pequeñas e iglesias, que han oído hablar de la IA pero la han usado poco, o que quieren usarla de forma más segura.",
    startingPoint: "Usan el correo, el teléfono y la computadora para el trabajo diario, y escriben a mano notas de agradecimiento, anuncios y boletines. Usan poco o nada los asistentes de IA.",
    gap: "Los equipos pequeños pasan muchas horas escribiendo cosas que un asistente de IA podría preparar en minutos, pero un uso descuidado puede difundir números inventados o exponer información de donantes, voluntarios y personas atendidas. Necesitan una forma segura y sencilla de usar la IA que ahorre tiempo y cuide la confianza.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: un teléfono, una computadora de la oficina o una laptop compartida en la oficina de la iglesia",
      "Tiempo: voluntarios y personal con poco tiempo libre, así que cada lección dura unos 5 minutos",
      "Privacidad: nada de datos privados de donantes, voluntarios o personas atendidas en herramientas de IA; sigue la política de privacidad de la organización",
      "Usa solo las herramientas de IA que la organización aprueba para información de trabajo"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tareas de una organización sin fines de lucro", action: "identificar en qué tareas puede ayudar un asistente de IA y cuáles necesitan una persona o una fuente oficial", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Usando un teléfono o una computadora", action: "abrir un asistente de IA gratis o aprobado desde su sitio web o aplicación oficial y cerrar sesión al terminar", standard: "sin ayuda" },
    { id: "O3", condition: "Con un texto real que necesita tu organización", action: "escribir una instrucción de tres partes que diga qué necesitas, la situación y el formato", standard: "con espacios en blanco en lugar de datos privados" },
    { id: "O4", condition: "Con un primer borrador que no queda bien", action: "pedir cambios de seguimiento, uno a la vez, para mejorarlo", standard: "hasta que tenga la voz de tu organización en no más de tres intentos" },
    { id: "O5", condition: "Con un borrador de la IA que tiene números, fechas o afirmaciones", action: "revisar cada dato con tus registros o con una fuente oficial", standard: "antes de que llegue a donantes, voluntarios o al público" },
    { id: "O6", condition: "Cuando usas la IA para trabajo sobre donantes, voluntarios o personas atendidas", action: "dejar fuera la información privada usando espacios en blanco", standard: "sin compartir nombres con donativos, direcciones, notas de casos ni datos de salud o de inmigración" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Lo que la IA puede hacer por una organización sin fines de lucro",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es un asistente de IA y qué no es",
          minutes: 4,
          goal: "Explicar a un compañero o voluntario qué puede y qué no puede hacer un asistente de IA por tu organización.",
          text: [
            "Un asistente de IA es un programa de computadora con el que conversas con palabras de todos los días. Escribes un pedido y te responde por escrito en segundos. Algunos conocidos con versión gratis son ChatGPT, Microsoft Copilot y Google Gemini.",
            "Para una organización sin fines de lucro, es bueno para primeros borradores: notas de agradecimiento, artículos para el boletín, mensajes para inscribir voluntarios, órdenes del día de reuniones, publicaciones en redes sociales y convertir informes largos en resúmenes cortos.",
            "No es un empleado, ni un abogado, ni un contador, ni un encargado de subvenciones. No conoce a tus donantes, tus programas ni tu comunidad, y puede equivocarse aunque suene seguro. Una persona de tu equipo siempre revisa y decide."
          ],
          words: [["IA", "inteligencia artificial: programas de computadora que hacen tareas que normalmente necesitan a una persona, como escribir o resumir."], ["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando."], ["Primer borrador", "una versión inicial que luego una persona revisa y mejora."]],
          slides: [
            { title: "Un asistente de IA es...", bullets: ["Un programa de computadora con el que conversas", "Pides con palabras de todos los días", "Escribe un borrador en segundos"] },
            { title: "Bueno para primeros borradores", bullets: ["Notas de agradecimiento y boletines", "Mensajes para inscribir voluntarios y órdenes del día", "Resúmenes cortos de informes largos"] },
            { title: "NO es", bullets: ["Un abogado, un contador ni un encargado de subvenciones", "Siempre correcto, aunque suene seguro", "Quien decide: eso le toca a tu equipo"] }
          ],
          tryIt: "Haz una lista de tres textos que tu organización produce cada mes (por ejemplo, un recordatorio para voluntarios, un agradecimiento a donantes y un boletín). Encierra en un círculo el que más tiempo te lleva. Esa es tu primera tarea con IA.",
          youCanNow: "decir qué es un asistente de IA, nombrar tres tareas de la organización en las que puede ayudar y explicar por qué una persona sigue revisando su trabajo.",
          quickCheck: [
            { objective: "O1", q: "¿En qué es bueno un asistente de IA para una organización sin fines de lucro?", options: ["En primeros borradores, como notas de agradecimiento y artículos del boletín", "En conocer en persona a tus donantes", "En tomar las decisiones finales por tu junta directiva", "En dar consejos legales en los que puedas confiar"], answer: 0, why: "La IA es buena para primeros borradores; una persona de tu equipo revisa y decide." },
            { objective: "O1", q: "Un voluntario dice: \"Que la IA decida quién recibe las cajas de comida este mes\". ¿Qué le dices?", options: ["Buena idea; la IA conoce nuestra comunidad", "No; la IA puede preparar borradores, pero las personas de nuestro equipo deciden", "Solo si la IA suena segura", "Sí, pero solo para las familias nuevas"], answer: 1, why: "La IA no conoce tu comunidad y puede equivocarse; tu equipo decide." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir un asistente de IA gratis",
          minutes: 4,
          goal: "Abrir un asistente de IA gratis en un teléfono o una computadora y encontrar dónde escribir.",
          text: [
            "Puedes usar un asistente de IA en un teléfono inteligente o en cualquier computadora con internet, incluida una computadora de la oficina o la laptop de la oficina de la iglesia.",
            "En una computadora, abre el navegador web y escribe la dirección: chatgpt.com, copilot.microsoft.com o gemini.google.com. En un teléfono, instala la aplicación oficial desde la tienda de aplicaciones, hecha por la empresa real (OpenAI, Microsoft o Google).",
            "Si tu organización ya usa Microsoft 365 o Google Workspace, pregunta a tu administrador qué herramienta de IA está aprobada. Una cuenta de trabajo puede tener protecciones de privacidad adicionales que una cuenta personal no tiene.",
            "En una computadora compartida de la oficina, no dejes que el navegador guarde tu contraseña y cierra sesión al terminar."
          ],
          steps: ["Pregunta si tu organización tiene una herramienta de IA aprobada.", "Computadora: escribe la dirección web en el navegador. Teléfono: instala la aplicación oficial.", "Busca el cuadro de mensajes cerca de la parte de abajo de la pantalla.", "En una computadora compartida, cierra sesión y cierra el navegador al terminar."],
          words: [["Navegador web", "el programa que usas para visitar sitios web, como Chrome, Edge o Safari."], ["Administrador", "la persona que maneja las cuentas y la configuración de tu organización."]],
          slides: [
            { title: "Dónde usarlo", bullets: ["Computadora de la oficina o de la casa", "Aplicación del teléfono desde la tienda oficial", "La herramienta de trabajo aprobada por tu organización"] },
            { title: "Direcciones web", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Pregunta primero", bullets: ["¿Qué herramienta de IA aprueba nuestra organización?", "Las cuentas de trabajo pueden proteger mejor los datos"] },
            { title: "En una computadora compartida", bullets: ["No guardes tu contraseña", "Cierra sesión y cierra el navegador"] }
          ],
          tryIt: "Abre un asistente de IA gratis. Escribe: Soy voluntario en una organización sin fines de lucro y estoy aprendiendo a usar la IA. ¿Cuáles son tres formas en que podrías ayudarme esta semana? Lee la respuesta.",
          youCanNow: "abrir un asistente de IA gratis, encontrar dónde escribir y revisar qué herramienta aprueba tu organización.",
          quickCheck: [
            { objective: "O2", q: "¿De dónde debes descargar una aplicación de IA en el teléfono?", options: ["De un enlace en un mensaje de un desconocido", "De cualquier aplicación con un nombre parecido", "De la tienda de aplicaciones, hecha por la empresa real", "De un anuncio que aparece de repente"], answer: 2, why: "Instala la aplicación oficial hecha por la empresa real, como OpenAI, Microsoft o Google." },
            { objective: "O2", q: "Terminas de usar la IA en la laptop de la oficina de la iglesia. ¿Qué haces?", options: ["La dejas abierta para la próxima persona", "Guardas tu contraseña en el navegador", "Solo apagas la pantalla", "Cierras sesión y cierras el navegador"], answer: 3, why: "En una computadora compartida, no guardes tu contraseña y cierra sesión al terminar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Pedir textos para la organización con una instrucción clara",
          minutes: 5,
          goal: "Escribir una instrucción de tres partes que consiga un borrador útil a la primera.",
          text: [
            "Lo que escribes se llama instrucción (en inglés, prompt). Una buena instrucción tiene tres partes: lo que necesitas, la situación (sin datos privados) y cómo quieres la respuesta.",
            "Ejemplo: \"Escribe un correo corto de agradecimiento a 25 voluntarios que ayudaron en nuestra colecta de alimentos del sábado. Atendimos a 140 familias. Usa un tono cálido, menos de 120 palabras, y termina con la fecha de la próxima colecta: [fecha].\"",
            "Una instrucción débil como \"carta de agradecimiento\" hace que el asistente adivine, y la respuesta sale genérica. Dile quién la va a leer y qué tono va con tu organización: cálido, formal, alegre o de fe."
          ],
          steps: ["Di lo que necesitas y quién lo va a leer.", "Agrega la situación: evento, números, propósito. Sin nombres ni datos privados.", "Di cómo lo quieres: largo, tono, formato.", "Usa un espacio en blanco como [fecha] para lo que vas a llenar tú."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA para pedirle algo."], ["Tono", "cómo suena un texto, por ejemplo cálido, formal o alegre."], ["Espacio en blanco", "una marca como [fecha] que luego cambias tú."]],
          slides: [
            { title: "Tres partes de una buena instrucción", bullets: ["1. Lo que necesitas y quién lo lee", "2. La situación, sin datos privados", "3. Largo, tono y formato"] },
            { title: "Débil o clara", bullets: ["Débil: \"carta de agradecimiento\"", "Clara: correo de agradecimiento a 25 voluntarios de la colecta", "140 familias atendidas, tono cálido, menos de 120 palabras"] },
            { title: "Usa espacios en blanco", bullets: ["[fecha], [nombre], [monto]", "Luego los llenas tú"] }
          ],
          tryIt: "Toma la tarea que encerraste en la Lección 1. Escribe una instrucción de tres partes para ella, con espacios en blanco para nombres y fechas, y envíala. Guarda la respuesta.",
          youCanNow: "escribir una instrucción clara de tres partes para una tarea de escritura de la organización.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una instrucción (prompt)?", options: ["Lo que le escribes al asistente de IA", "La respuesta de la IA", "Tu contraseña", "Un formulario de subvención"], answer: 0, why: "Lo que escribes se llama instrucción, o prompt." },
            { objective: "O3", q: "Necesitas un volante para una cena de la iglesia. ¿Qué instrucción es la mejor?", options: ["\"volante\"", "\"Escribe un volante alegre para nuestra cena de la iglesia el [fecha] a las 6 pm, gratis para las familias, en menos de 60 palabras.\"", "\"Haz algo bonito\"", "\"Cena\""], answer: 1, why: "Una buena instrucción dice qué necesitas, la situación y el formato." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo que la IA puede hacer por una organización sin fines de lucro",
        questions: [
          { objective: "O1", q: "¿Qué tarea le queda bien a un asistente de IA en una organización sin fines de lucro?", options: ["Escribir el borrador de un correo de agradecimiento a voluntarios", "Decidir qué familia recibe comida", "Firmar un contrato de subvención", "Aprobar el presupuesto"], answer: 0, why: "La IA es buena para primeros borradores; las personas deciden y firman." },
          { objective: "O1", q: "La IA te da una respuesta muy segura sobre la fecha límite de una subvención. ¿Qué haces?", options: ["Confías en ella", "Revisas la página oficial del financiador", "La publicas en redes sociales", "La mandas a la junta directiva como definitiva"], answer: 1, why: "La IA puede equivocarse aunque suene segura; revisa la fuente oficial." },
          { objective: "O2", q: "Antes de usar la IA con información del trabajo, ¿a quién debes preguntar?", options: ["A un donante", "A un desconocido en internet", "Al administrador o líder de tu organización", "A nadie"], answer: 2, why: "Tu organización puede tener una herramienta aprobada con mejor protección de la privacidad." },
          { objective: "O3", q: "¿Qué instrucción es la más clara?", options: ["\"carta\"", "\"ayuda con voluntarios\"", "\"haz nuestro boletín\"", "\"Escribe un correo cálido de agradecimiento de 100 palabras a 25 voluntarios de la colecta que atendieron a 140 familias.\""], answer: 3, why: "Dice qué se necesita, la situación y el formato." },
          { objective: "O3", q: "¿Qué es un espacio en blanco en una instrucción?", options: ["Una marca como [fecha] que llenas después", "Una contraseña", "El nombre completo de un donante", "Un tipo de aplicación"], answer: 0, why: "Los espacios en blanco dejan fuera los datos reales y te recuerdan qué llenar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA bien y con seguridad",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mejorar el borrador",
          minutes: 4,
          goal: "Usar pedidos de seguimiento para convertir un primer borrador en uno que va con tu organización.",
          text: [
            "La primera respuesta es un borrador. El asistente recuerda la conversación, así que puedes pedirle cambios uno por uno.",
            "Pedidos de seguimiento útiles: \"Hazlo más corto.\" \"Que suene más cálido.\" \"Agrega una frase sobre por qué los voluntarios son importantes para nuestra misión.\" \"Escríbelo a un nivel de lectura de sexto grado.\" \"Dame una versión en inglés.\"",
            "Luego hazlo tuyo. Agrega tú los nombres y datos reales, después de copiar el texto fuera de la herramienta de IA, y léelo como si fueras el voluntario o el donante que lo recibe."
          ],
          steps: ["Lee el primer borrador.", "Escoge lo que más necesita cambiar.", "Pide ese cambio.", "Repite, luego copia el texto fuera y agrega tú los datos reales."],
          words: [["Pedido de seguimiento", "un segundo pedido que se basa en la respuesta que ya recibiste."], ["Nivel de lectura", "qué tan fácil es leer un texto; un grado más bajo es más fácil."]],
          slides: [
            { title: "La primera respuesta es un borrador", bullets: ["Pide un cambio a la vez", "Recuerda la misma conversación"] },
            { title: "Pedidos de seguimiento que funcionan", bullets: ["\"Hazlo más corto.\"", "\"Que suene más cálido.\"", "\"Agrega una línea sobre nuestra misión.\"", "\"Dame una versión en inglés.\""] },
            { title: "Hazlo tuyo", bullets: ["Copia el texto fuera de la herramienta de IA", "Agrega tú los nombres y datos reales", "Léelo como la persona que lo recibe"] }
          ],
          tryIt: "Toma el borrador que guardaste en la Lección 3. Pide dos cambios, uno por uno. Luego copia la mejor versión en un documento y agrega tú un detalle personal.",
          youCanNow: "mejorar un borrador de IA con pedidos de seguimiento claros y terminarlo con la voz de tu organización.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué puedes pedir cambios uno a la vez?", options: ["La IA olvida todo después de cada mensaje", "Los cambios cuestan dinero", "El asistente recuerda la conversación", "Solo se permite un cambio al día"], answer: 2, why: "El asistente recuerda la conversación, así que puedes pedir cambios uno a la vez." },
            { objective: "O4", q: "El borrador está bien, pero la mayoría de tus lectores habla español. ¿Qué pides?", options: ["\"Hazlo más largo.\"", "\"Agrega más datos.\"", "\"Usa palabras más difíciles.\"", "\"Dame una versión en español.\""], answer: 3, why: "Un pedido de seguimiento puede pedir una versión en otro idioma que hable tu comunidad." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revisar los datos antes de enviar",
          minutes: 5,
          goal: "Encontrar y revisar cada dato de un borrador de IA antes de que llegue a donantes, voluntarios o al público.",
          text: [
            "Los asistentes de IA a veces inventan cosas: una fecha equivocada, una estadística que no existe o una regla de impuestos vieja. A esto se le llama alucinación.",
            "Revisa siempre números, fechas, nombres, citas, estadísticas, afirmaciones de impuestos y legales, y cualquier cosa sobre lo que paga una donación. Compáralos con tus propios registros, con la fuente oficial (muchas veces una página .gov) o con la persona que sabe.",
            "Nunca dejes que la IA invente números de impacto. Si el borrador dice \"atendimos a 500 familias\" y tus registros dicen 140, usa 140. Los números honestos mantienen la confianza de los donantes."
          ],
          steps: ["Marca cada número, fecha, nombre y afirmación del borrador.", "Compara cada uno con tus registros o con una fuente oficial.", "Corrige o quita todo lo que no puedas confirmar.", "Pide a una segunda persona que lea todo lo que va al público."],
          words: [["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."], ["Número de impacto", "una cuenta de lo que logró tu programa, como las familias atendidas."]],
          slides: [
            { title: "La IA puede inventar cosas", bullets: ["Fechas y números equivocados", "Estadísticas que no existen", "Reglas de impuestos o legales viejas"] },
            { title: "Revisa siempre", bullets: ["Números, fechas, nombres, citas", "Afirmaciones de impuestos y legales", "Lo que paga una donación"] },
            { title: "Números honestos", bullets: ["Usa tus propios registros", "Nunca dejes que la IA invente números de impacto", "Una segunda lectura para lo que es público"] }
          ],
          tryIt: "Pide a un asistente de IA: \"Escribe dos frases sobre la necesidad de bancos de alimentos en mi condado.\" Marca cada número que te dé. Trata de encontrar cada uno en un sitio oficial. Quita los que no puedas confirmar.",
          youCanNow: "encontrar los datos de un borrador de IA y revisarlos antes de enviarlo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una alucinación en la IA?", options: ["Un texto que suena cierto pero es inventado", "Un error de ortografía", "Una respuesta lenta", "Una respuesta muy corta"], answer: 0, why: "A veces la IA inventa una fecha, una estadística o una regla; a eso se le llama alucinación." },
            { objective: "O5", q: "El borrador dice que un donativo de $25 \"alimenta a una familia por un mes\". Tu programa nunca dijo eso. ¿Qué haces?", options: ["Lo dejas; a los donantes les gusta", "Lo quitas o lo cambias por un dato de tus propios registros", "Lo cambias a $20", "Le preguntas a la IA si es cierto"], answer: 1, why: "Nunca dejes que la IA invente lo que paga un donativo; revisa tus propios registros." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger la privacidad de donantes, voluntarios y personas atendidas",
          minutes: 5,
          goal: "Usar la IA sin poner información privada de donantes, voluntarios o personas que atiendes.",
          text: [
            "La gente confía su información a tu organización. No pegues en una herramienta de IA: nombres de donantes con montos de donación, direcciones de casa, números de teléfono, datos bancarios o de tarjetas, notas de casos de personas atendidas, información de salud, situación migratoria ni datos de niños.",
            "Aun así puedes recibir ayuda. Describe la situación en términos generales y usa espacios en blanco: \"Escribe un agradecimiento a [nombre del donante] por una donación de [monto] para nuestro programa juvenil.\" Llena los datos reales después de copiar el borrador fuera.",
            "Sigue la política de privacidad de tu organización y pregunta a un líder si tienes dudas. Si dudas, déjalo fuera."
          ],
          steps: ["Antes de enviar una instrucción, léela buscando nombres y datos privados.", "Cambia cada uno por un espacio en blanco.", "Agrega los datos reales solo después de copiar el borrador fuera de la herramienta de IA.", "Sigue la política de privacidad de tu organización."],
          words: [["Información privada", "datos que podrían identificar a una persona o hacerle daño si se comparten, como una dirección o un monto donado."], ["Política de privacidad", "las reglas escritas de tu organización para manejar información personal."]],
          slides: [
            { title: "Nunca pegues en la IA", bullets: ["Nombres de donantes con montos", "Direcciones, teléfonos, datos bancarios", "Notas de casos, salud o situación migratoria"] },
            { title: "Mejor usa espacios en blanco", bullets: ["\"Agradece a [nombre del donante] por [monto]\"", "Llena los datos reales después de copiar el texto"] },
            { title: "Si tienes dudas", bullets: ["Déjalo fuera", "Sigue tu política de privacidad", "Pregunta a un líder"] }
          ],
          tryIt: "Tarea final: escribe el borrador de una nota de agradecimiento a los voluntarios de un evento reciente. Usa una instrucción de tres partes con espacios en blanco, pide dos mejoras, revisa cada dato con tus registros y edítala para que suene a tu organización.",
          youCanNow: "usar la IA para textos reales de la organización protegiendo la privacidad de las personas que atiendes.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es seguro poner en una instrucción a la IA?", options: ["El nombre de un donante y el monto de su donativo", "Las notas del caso de una persona atendida", "\"Agradece a [nombre del donante] por un donativo de [monto] para nuestro programa juvenil.\"", "La escuela y la dirección de un niño"], answer: 2, why: "Los espacios en blanco te dejan recibir ayuda sin compartir datos privados." },
            { objective: "O6", q: "No estás seguro de si la historia de un voluntario es demasiado privada para pegarla en la IA. ¿Qué haces?", options: ["La pegas; la IA es privada", "Pegas solo la mitad", "Primero la compartes en redes sociales", "La dejas fuera y le preguntas a un líder"], answer: 3, why: "Si tienes duda, déjala fuera y pregunta a un líder." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA bien y con seguridad",
        questions: [
          { objective: "O4", q: "El borrador es demasiado formal para los voluntarios de tu iglesia. ¿Qué haces?", options: ["Lo mandas así", "Pides: \"Que suene más cálido y personal\"", "Borras la herramienta de IA", "Pides una versión más larga"], answer: 1, why: "Un pedido de seguimiento claro pide justo el cambio que necesitas." },
          { objective: "O5", q: "El borrador de la IA dice que atendieron a 500 familias. Tus registros dicen 140. ¿Qué usas?", options: ["500, suena mejor", "Dejas el número vago a propósito", "140, de tus registros", "Le pides a la IA que escoja"], answer: 2, why: "Los números honestos de tus propios registros mantienen la confianza de los donantes." },
          { objective: "O6", q: "¿Cuál de estas cosas NO debes pegar en una herramienta de IA?", options: ["\"Hazlo más corto\"", "El nombre de tu colecta de alimentos", "La palabra \"gracias\"", "Las notas de caso de una persona atendida"], answer: 3, why: "Las notas de caso son información privada de las personas que atiendes." },
          { objective: "O6", q: "¿Cómo agradeces a un donante en particular sin compartir sus datos con la IA?", options: ["Usando espacios en blanco como [nombre del donante] y [monto]", "Pegando su registro completo", "Usando sus datos bancarios", "Sin mandar agradecimiento"], answer: 0, why: "Los espacios en blanco te dan un borrador; tú agregas los datos reales después." },
          { objective: "O5", q: "¿Qué es una alucinación en la IA?", options: ["Un estilo de diseño", "Un texto que suena cierto pero es inventado", "Una configuración de privacidad", "Una conexión de internet lenta"], answer: 1, why: "La IA puede inventar datos que suenan reales, por eso los revisas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA para organizaciones sin fines de lucro",
    questions: [
      { objective: "O1", q: "La mejor forma de describir un asistente de IA es:", options: ["Un voluntario", "Una base de datos de subvenciones", "Un programa de computadora con el que conversas con palabras de todos los días", "Un banco"], answer: 2, why: "Es un programa al que le escribes o hablas y que responde por escrito." },
      { objective: "O1", q: "¿En qué tarea de la organización es mejor la IA?", options: ["Elegir qué personas reciben ayuda", "Firmar contratos", "Aprobar la nómina", "Escribir el primer borrador de un boletín"], answer: 3, why: "Los primeros borradores son su fuerte; las decisiones se quedan con las personas." },
      { objective: "O1", q: "¿Quién toma las decisiones finales cuando tu equipo usa IA?", options: ["Las personas de tu equipo", "La IA", "La empresa del programa", "Los donantes"], answer: 0, why: "Una persona siempre revisa y decide." },
      { objective: "O2", q: "¿Cuál es la dirección web de un asistente de IA gratis?", options: ["donate-now.win", "gemini.google.com", "freegrants.xyz", "ninguna de estas"], answer: 1, why: "gemini.google.com es la dirección oficial de Google para Gemini." },
      { objective: "O2", q: "¿Por qué preguntar qué herramienta de IA aprueba tu organización?", options: ["Para conseguir descuento en café", "Porque la IA es ilegal", "Las herramientas de trabajo aprobadas pueden proteger mejor los datos", "No importa"], answer: 2, why: "Las cuentas de trabajo pueden traer protecciones y reglas de privacidad adicionales." },
      { objective: "O2", q: "En una computadora compartida de la oficina, después de usar la IA debes:", options: ["Guardar tu contraseña", "Dejarla abierta", "Escribir tu contraseña en una nota", "Cerrar sesión y cerrar el navegador"], answer: 3, why: "Cerrar sesión protege tu cuenta." },
      { objective: "O3", q: "Una buena instrucción incluye:", options: ["Lo que necesitas, la situación y el formato", "Una palabra", "Datos bancarios de donantes", "Tu contraseña"], answer: 0, why: "Esas tres partes dan un borrador útil." },
      { objective: "O3", q: "¿Qué instrucción dará el mejor recordatorio para voluntarios?", options: ["\"recordatorio\"", "\"Escribe un mensaje amable de 80 palabras recordando a los voluntarios la limpieza del parque el sábado a las 9 am y que traigan guantes.\"", "\"voluntarios\"", "\"ayuda\""], answer: 1, why: "Da la necesidad, la situación y el formato." },
      { objective: "O3", q: "¿Qué significa [fecha] en una instrucción?", options: ["Un código secreto", "El cumpleaños de un donante", "Un espacio en blanco que llenas después", "Un error"], answer: 2, why: "Los espacios en blanco marcan datos que agregas tú." },
      { objective: "O4", q: "El primer borrador es demasiado largo. El mejor siguiente paso es:", options: ["Fundar una organización nueva", "Mandarlo así", "Agregar más palabras", "Pedir: \"Hazlo más corto\""], answer: 3, why: "Un pedido de seguimiento pide el cambio." },
      { objective: "O4", q: "¿Cuándo debes agregar los nombres reales de los donantes en un agradecimiento?", options: ["Después de copiar el borrador fuera de la herramienta de IA", "En la primera instrucción", "Nunca agradezcas a los donantes", "Solo en el chat de la IA"], answer: 0, why: "Agregarlos fuera de la herramienta los mantiene privados." },
      { objective: "O4", q: "¿Qué pedido de seguimiento podría ayudar a llegar a más personas de tu comunidad?", options: ["\"Agrega mi contraseña.\"", "\"Dame una versión en inglés.\"", "\"Inventa una estadística.\"", "\"Borra el chat.\""], answer: 1, why: "Una versión traducida llega a más lectores; aun así, alguien que hable bien el idioma debe revisarla." },
      { objective: "O5", q: "¿Qué debes revisar SIEMPRE en un borrador de IA?", options: ["La palabra del saludo", "El tipo de letra", "Números, fechas y afirmaciones", "Nada"], answer: 2, why: "Los números, las fechas y las afirmaciones pueden ser inventados." },
      { objective: "O5", q: "¿Dónde revisas una afirmación de impuestos o legal?", options: ["En otro chat de IA", "En un comentario de redes sociales", "Adivinando", "En la fuente oficial, muchas veces una página .gov, o con un profesional"], answer: 3, why: "Las fuentes oficiales y los profesionales son confiables." },
      { objective: "O5", q: "¿Por qué los números de impacto deben salir de tus registros?", options: ["Los números honestos mantienen la confianza de los donantes", "Los números de la IA siempre son muy bajos", "Los donantes no los leen", "Es más rápido"], answer: 0, why: "Los números inventados engañan a los donantes y dañan la confianza." },
      { objective: "O5", q: "¿Quién debe leer todo lo que va al público?", options: ["Nadie", "Una segunda persona de tu equipo", "Solo la IA", "Un desconocido cualquiera"], answer: 1, why: "Una segunda lectura encuentra errores." },
      { objective: "O6", q: "¿Cuál es información privada que debes dejar fuera de la IA?", options: ["El nombre de tu gala anual", "La palabra \"misión\"", "La dirección de la casa de un voluntario", "La dirección de tu sitio web público"], answer: 2, why: "Las direcciones de casa son datos personales privados." },
      { objective: "O6", q: "No estás seguro de si algo es demasiado privado para la IA. Debes:", options: ["Pegarlo de todos modos", "Publicarlo en internet", "Mandarlo por correo a la empresa de IA", "Dejarlo fuera y preguntar a un líder"], answer: 3, why: "Si dudas, déjalo fuera." },
      { objective: "O6", q: "¿Qué reglas escritas guían cómo tu organización maneja la información personal?", options: ["La política de privacidad", "El menú", "El pedido de camisetas de voluntarios", "El mapa del estacionamiento"], answer: 0, why: "Una política de privacidad fija las reglas para la información personal." },
      { objective: "O6", q: "Los datos de salud o de situación migratoria de una persona atendida deben:", options: ["Pegarse para obtener mejores respuestas", "Quedarse fuera de las herramientas de IA", "Compartirse en los boletines", "Usarse como ejemplos en internet"], answer: 1, why: "Son delicados y podrían dañar a la persona si se comparten." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      9,
      12,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Instrucción de tres partes",
        objective: "O3",
        notYet: "La instrucción es vaga, como \"nota de agradecimiento\".",
        meets: "La instrucción dice qué necesitas, la situación y el formato.",
        exceeds: "También dice quién la va a leer y el tono que le queda a la organización."
      },
      {
        name: "Dos mejoras",
        objective: "O4",
        notYet: "Usó el primer borrador tal como salió.",
        meets: "Pidió dos cambios, uno a la vez, y la nota mejoró.",
        exceeds: "Puede decir qué arregló cada cambio."
      },
      {
        name: "Datos revisados",
        objective: "O5",
        notYet: "Se usó un número, una fecha o una afirmación sin revisarla.",
        meets: "Cada dato y cada fecha coinciden con los registros de la organización.",
        exceeds: "Anota dónde se revisó cada dato."
      },
      {
        name: "Privacidad cuidada",
        objective: "O6",
        notYet: "La instrucción tiene datos privados de un voluntario o un donante.",
        meets: "No hay datos privados en la instrucción; se usaron espacios en blanco.",
        exceeds: "Los nombres reales se agregaron solo después de copiar el borrador fuera de la herramienta de IA."
      },
      {
        name: "Suena a nosotros",
        objective: "O4",
        notYet: "La nota suena genérica o no suena a la organización.",
        meets: "Se editó para que suene cálida y como la organización.",
        exceeds: "Otra persona del equipo la leyó y estuvo de acuerdo."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Estudiantes que dicen usar la IA para un mensaje real de su organización en 30 días (encuesta de seguimiento)",
      "Organizaciones que informan ahorrar tiempo en notas de agradecimiento, anuncios o boletines",
      "Estudiantes que empiezan otro curso de Koach Learn para organizaciones sin fines de lucro en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratis, o el que apruebe tu organización: ChatGPT, Microsoft Copilot o Google Gemini",
      "Los registros de tu organización sobre un evento reciente, como el número de voluntarios y de familias atendidas",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hazlo como un taller para el personal o los voluntarios: tomen juntos la prueba inicial y luego un capítulo por sesión.",
      "Antes de la sesión, pregunta al líder de la organización qué herramienta de IA está aprobada.",
      "Usa espacios en blanco en toda la práctica; nunca pegues datos reales de donantes, voluntarios o personas atendidas.",
      "Pide a cada estudiante que cierre sesión en las computadoras compartidas antes de irse.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

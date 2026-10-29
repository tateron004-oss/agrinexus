"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-intro-ai-sports.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-intro-ai-sports-es",
  lang: "es",
  translationOf: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Introducción a la IA en el deporte",
  skills: "Explicar qué hace la IA en el deporte, Abrir un asistente de IA gratuito, Escribir una instrucción clara sobre deporte, Revisar las respuestas de la IA, Proteger tu información privada y de salud",
  outcome: "usar un asistente de IA gratuito para armar un plan de entrenamiento y estudio de una semana alrededor del calendario de tu equipo: hacer una pregunta clara, mejorar la respuesta, revisarla con tu entrenador y dejar fuera los datos privados y de salud.",
  about: [
    "Este curso es para deportistas de secundaria, de universidad y al inicio de su carrera, y para entrenadores que quieren empezar de forma sencilla con la inteligencia artificial (IA). No necesitas saber de tecnología.",
    "Aprenderás dónde aparece ya la IA en el deporte, desde las estadísticas de los partidos hasta el análisis de video y el reclutamiento, y cómo usar tú mismo un asistente de IA gratuito para planear tu semana.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Usa un asistente de IA gratuito para armar un plan de una semana que se ajuste a tu calendario real de entrenamientos, partidos y clases. Escribe una instrucción clara, pide al menos dos mejoras, quita cualquier dato privado o de salud y muéstrale el plan a tu entrenador o a tu preparador físico antes de seguirlo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Atletas de secundaria y de universidad, y algunos atletas adultos jóvenes de clubes o del deporte aficionado, que reparten su tiempo entre entrenamientos, partidos, clases y a veces trabajo, reclutamiento o NIL.",
    startingPoint: "Usan todos los días teléfonos inteligentes, redes sociales y aplicaciones deportivas. Muchos han probado un asistente de IA por curiosidad, pero no escriben instrucciones claras, no revisan las respuestas ni piensan en qué datos privados y de salud comparten.",
    gap: "La IA puede ayudar a los atletas a planear su semana, estudiar y organizarse, pero las respuestas equivocadas sobre entrenamiento, lesiones, alimentación o elegibilidad pueden dañar su salud o su elegibilidad, y los falsos reclutadores y los falsos tratos con marcas los tienen como blanco. Necesitan usar bien la IA y revisarla con su entrenador, su preparador físico o la oficina de cumplimiento.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: un teléfono o una computadora de la escuela o de la biblioteca",
      "Tiempo: unos 5 minutos por lección, acomodados entre entrenamientos y clases",
      "Reglas de edad: quienes tienen menos de 18 años revisan las reglas de edad de la aplicación y le preguntan a su madre, padre o tutor",
      "Salud y privacidad: nada de reportes de lesiones, medicamentos, contraseñas ni números de identificación en las instrucciones; los consejos de entrenamiento, salud y elegibilidad se revisan con el profesional correcto"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con ejemplos de tecnología en el deporte", action: "identificar dónde se usa la IA en el deporte y lo que no puede hacer por ti", standard: "nombrando al menos tres usos y un límite" },
    { id: "O2", condition: "Usando tu teléfono o una computadora", action: "abrir un asistente de IA gratuito desde su aplicación o su sitio web oficial, enviar un primer mensaje y cerrar sesión en una computadora compartida", standard: "después de revisar las reglas de edad de la aplicación" },
    { id: "O3", condition: "Con tu horario real de entrenamientos, partidos y clases", action: "escribir una instrucción con lo que necesitas, tu situación y el formato que quieres", standard: "de modo que la primera respuesta sea útil" },
    { id: "O4", condition: "Con una respuesta de la IA que no se ajusta a tu semana", action: "hacer instrucciones de seguimiento, un cambio a la vez, para arreglarla", standard: "logrando al menos dos mejoras" },
    { id: "O5", condition: "Con una respuesta de la IA que da consejos de entrenamiento, salud, alimentación o elegibilidad", action: "revisarla con tu entrenador, tu preparador físico, un dietista, un médico, la oficina de cumplimiento o una página oficial", standard: "antes de seguirla" },
    { id: "O6", condition: "Cuando escribes una instrucción o recibes una oferta en internet", action: "mantener fuera tus datos privados y de salud y reconocer las estafas dirigidas a atletas", standard: "sin compartir contraseñas, códigos, números de identificación ni registros de salud" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Dónde aparece la IA en el deporte",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la IA y dónde ya la ves en el deporte",
          minutes: 4,
          goal: "Nombrar tres formas en que se usa la IA en el deporte hoy y decir lo que la IA no puede hacer.",
          text: [
            "La IA, o inteligencia artificial, son programas de computadora que hacen tareas que normalmente necesitan a una persona, como encontrar patrones, escribir textos o reconocer lo que hay en un video.",
            "En el deporte ya la ves: transmisiones que muestran la velocidad de un jugador o la probabilidad de que entre un tiro, aplicaciones que cuentan tus repeticiones o registran tus carreras, herramientas de video que etiquetan cada jugada y sitios de reclutamiento que ordenan a los deportistas por estadísticas.",
            "La IA es una ayuda, no un entrenador, un médico ni un árbitro. No conoce tu cuerpo, tu equipo ni tus metas a menos que se lo digas, y puede equivocarse. Los entrenadores y los deportistas siguen tomando las decisiones."
          ],
          words: [["IA", "abreviatura de inteligencia artificial: programas que aprenden patrones a partir de datos y los usan para responder, predecir o crear."], ["Datos", "hechos y números, como tiempos, marcadores, repeticiones o video."]],
          slides: [
            { title: "La IA en una frase", bullets: ["Programas que aprenden patrones a partir de datos", "Luego responden, predicen o crean"] },
            { title: "Dónde la ves en el deporte", bullets: ["Estadísticas de las transmisiones, como velocidad y probabilidad de tiro", "Aplicaciones que registran carreras y repeticiones", "Herramientas de video que etiquetan jugadas", "Sitios de reclutamiento que ordenan por estadísticas"] },
            { title: "Lo que la IA no es", bullets: ["No es tu entrenador, tu médico ni el árbitro", "Puede equivocarse, aunque suene segura", "Tú y tu entrenador toman las decisiones"] }
          ],
          tryIt: "Anota tres lugares donde hayas visto IA o estadísticas inteligentes en tu deporte esta temporada, por ejemplo un gráfico de una transmisión, una aplicación de ejercicio o una herramienta de video que usa tu equipo.",
          youCanNow: "explicar qué es la IA, nombrar tres formas en que aparece en el deporte y decir por qué las personas siguen tomando las decisiones.",
          quickCheck: [
            { objective: "O1", q: "¿Qué significa IA?", options: ["Un tipo de bebida deportiva", "Programas de computadora que hacen tareas que normalmente necesitan a una persona", "Una máquina de entrenamiento", "Una señal del árbitro"], answer: 1, why: "IA significa programas de computadora que encuentran patrones, escriben textos o reconocen lo que hay en un video." },
            { objective: "O1", q: "Una aplicación de IA dice que deberías cambiar de posición en el equipo. ¿Qué haces?", options: ["Hablar con tu entrenador; la IA es una ayuda, no tu entrenador", "Cambiar de posición de inmediato", "Dejar el equipo", "No hacerle caso a tu entrenador de ahora en adelante"], answer: 0, why: "La IA no conoce a tu equipo ni tus metas; los entrenadores y los atletas siguen tomando las decisiones." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir un asistente de IA gratuito",
          minutes: 5,
          goal: "Abrir un asistente de IA gratuito en tu teléfono o en una computadora y enviar tu primer mensaje.",
          text: [
            "Un asistente de IA es un programa de IA con el que conversas con palabras de todos los días. Algunos gratuitos conocidos son ChatGPT, Microsoft Copilot y Google Gemini.",
            "En un teléfono, descarga la aplicación oficial desde la tienda de aplicaciones, hecha por la empresa verdadera: OpenAI para ChatGPT, Microsoft para Copilot, Google para Gemini. En una computadora, abre un navegador y entra a chatgpt.com, copilot.microsoft.com o gemini.google.com.",
            "Algunos asistentes piden una cuenta y tienen reglas de edad. Si tienes menos de 18 años, revisa las reglas de edad de la aplicación y pregúntale primero a tu padre, madre o tutor. En una computadora de la escuela o compartida, cierra sesión al terminar."
          ],
          steps: ["Elige tu teléfono o una computadora.", "Teléfono: instala la aplicación oficial. Computadora: escribe la dirección web.", "Busca el cuadro de mensaje cerca de la parte de abajo de la pantalla.", "Escribe un saludo y lee la respuesta.", "En una computadora compartida, cierra sesión y cierra el navegador."],
          words: [["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando."], ["Navegador", "el programa que usas para visitar sitios web, como Chrome, Edge o Safari."]],
          slides: [
            { title: "Asistentes de IA gratuitos", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "Cómo abrir uno", bullets: ["Teléfono: la aplicación oficial de la tienda de aplicaciones", "Computadora: chatgpt.com, copilot.microsoft.com o gemini.google.com", "Busca el cuadro de mensaje abajo"] },
            { title: "Antes de empezar", bullets: ["¿Menos de 18 años? Revisa las reglas de edad y pregúntale a tu padre o madre", "Computadora compartida: cierra sesión al terminar"] }
          ],
          tryIt: "Abre un asistente de IA gratuito y escribe: “Juego [tu deporte]. Explica en tres frases cortas cómo se usa la IA en mi deporte.” Lee la respuesta.",
          youCanNow: "abrir un asistente de IA gratuito, enviar un mensaje y dejar con seguridad una computadora compartida.",
          quickCheck: [
            { objective: "O2", q: "¿Qué dirección web abre Google Gemini en una computadora?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com es la dirección oficial; usa el sitio o la aplicación de la empresa verdadera." },
            { objective: "O2", q: "Usaste ChatGPT en una computadora de la biblioteca para planear tu semana. ¿Qué haces al terminar?", options: ["Dejarlo abierto para un compañero de equipo", "Guardar tu contraseña", "Solo apagar la pantalla", "Cerrar sesión y cerrar el navegador"], answer: 3, why: "Cerrar sesión en las computadoras compartidas evita que otros entren a tus conversaciones y cuentas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir una instrucción clara sobre deporte",
          minutes: 5,
          goal: "Escribir una instrucción con lo que necesitas, tu situación y el formato que quieres.",
          text: [
            "Lo que le escribes a un asistente de IA se llama instrucción (en inglés, “prompt”). Una instrucción clara consigue una respuesta útil a la primera.",
            "Una instrucción fuerte tiene tres partes: lo que necesitas, tu situación y cómo quieres la respuesta. Ejemplo: “Soy mediocampista de fútbol en la secundaria. Entreno de lunes a jueves de 3:30 a 5:30 y tengo partido el viernes. Haz un horario de estudio sencillo para la semana alrededor de los entrenamientos. Ponlo en una tabla.”",
            "Una instrucción débil como “ayúdame a mejorar” obliga al asistente a adivinar. Agrega el deporte, la posición, tu horario y el formato."
          ],
          steps: ["Di lo que necesitas.", "Agrega tu deporte, posición, nivel y horario (sin datos privados).", "Di el formato: lista, tabla, pasos cortos o palabras sencillas."],
          words: [["Instrucción (prompt)", "lo que escribes o le dices a un asistente de IA para pedirle algo."], ["Formato", "la forma de la respuesta, como una lista, una tabla o pasos."]],
          slides: [
            { title: "Tres partes de una buena instrucción", bullets: ["1. Lo que necesitas", "2. Tu deporte, posición, nivel y horario", "3. El formato que quieres"] },
            { title: "Débil frente a clara", bullets: ["Débil: “ayúdame a mejorar”", "Clara: “Soy mediocampista de fútbol en la secundaria y entreno de lunes a jueves...”", "“...haz un horario de estudio en una tabla”"] },
            { title: "Agrega detalles, no secretos", bullets: ["Sí: deporte, posición, horarios de entrenamiento", "No: nombre completo, credencial escolar, historial médico"] }
          ],
          tryIt: "Escribe una instrucción de tres partes para pedir un horario de estudio o de días de recuperación alrededor de tu semana real de entrenamientos. Envíala y lee la respuesta.",
          youCanNow: "escribir una instrucción clara sobre deporte que incluya lo que necesitas, tu situación y el formato.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es la parte del formato en una instrucción?", options: ["Cómo quieres la respuesta, como una tabla o una lista corta", "Tu deporte", "El nombre de tu entrenador", "Tu contraseña"], answer: 0, why: "El formato le dice al asistente qué forma darle a la respuesta." },
            { objective: "O3", q: "Quieres ayuda para planear las tareas de la escuela alrededor del básquetbol. ¿Qué instrucción es la mejor?", options: ["\"tareas\"", "\"ayúdame a mejorar\"", "\"básquetbol\"", "\"Soy base en el equipo de la secundaria, entreno de 3 a 5 de la tarde de lunes a jueves y tengo partido el viernes. Haz un horario de tareas para la semana en una tabla.\""], answer: 3, why: "Dice lo que necesitas, tu situación y el formato." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Dónde aparece la IA en el deporte",
        questions: [
          { objective: "O1", q: "¿Cuál es un ejemplo de IA en el deporte?", options: ["Un silbato", "Una planilla de anotación en papel", "Un gráfico de una transmisión que muestra la probabilidad de que entre un tiro", "El autobús del equipo"], answer: 2, why: "Ese gráfico viene de un programa que aprendió patrones de muchísimos tiros anteriores." },
          { objective: "O1", q: "Una aplicación de IA te sugiere seguir jugando con un dolor agudo en la rodilla. ¿Qué debes hacer?", options: ["Parar y hablar con tu preparador físico o tu médico", "Seguirla, porque la IA sabe más", "No hacerle caso a tu entrenador", "Pedirle a un compañero que decida"], answer: 0, why: "La IA no es un médico. Las preguntas sobre dolor y lesiones van a una persona calificada." },
          { objective: "O2", q: "¿Dónde debes conseguir una aplicación de IA para tu teléfono?", options: ["En un enlace de un desconocido por mensaje directo", "En un anuncio emergente", "En cualquier sitio web", "En la tienda de aplicaciones oficial, de la empresa verdadera"], answer: 3, why: "Las tiendas oficiales y la aplicación de la empresa verdadera son la opción segura." },
          { objective: "O3", q: "¿Cuáles son las tres partes de una instrucción clara?", options: ["Nombre, escuela, número de identificación", "Necesidad, situación, formato", "Deporte, color del equipo, mascota", "Hola, por favor, gracias"], answer: 1, why: "Necesidad, situación y formato le dan al asistente lo que necesita para ayudar." },
          { objective: "O3", q: "¿Qué instrucción probablemente dará la respuesta más útil?", options: ["“ayúdame a mejorar”", "“Soy base en un equipo universitario y entreno de 6 a 8 de la mañana. Haz un horario de clases y recuperación para la semana en una tabla.”", "“básquetbol”", "“dime todo”"], answer: 1, why: "Incluye la necesidad, la situación y el formato." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA con confianza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mejorar la respuesta",
          minutes: 4,
          goal: "Usar instrucciones de seguimiento para arreglar una respuesta hasta que se ajuste a tu semana.",
          text: [
            "La primera respuesta es un borrador. El asistente recuerda lo que dijiste antes en la misma conversación, así que puedes pedirle cambios.",
            "Seguimientos útiles para deportistas: “Pasa el tiempo de estudio a después de la cena los días de partido.” “Hazlo más corto.” “Agrega un día de descanso.” “Usa palabras más sencillas.” “Explica por qué pusiste esto aquí.”",
            "Pide un cambio a la vez. Si la conversación se desvía, empieza una nueva con una instrucción más clara."
          ],
          steps: ["Lee la primera respuesta.", "Busca lo que no se ajusta a tu horario real.", "Pide un cambio.", "Repite hasta que se ajuste."],
          words: [["Seguimiento", "un segundo pedido que se basa en la respuesta que recibiste."]],
          slides: [
            { title: "Primera respuesta = borrador", bullets: ["Puedes pedir cambios", "Recuerda la misma conversación"] },
            { title: "Seguimientos que funcionan", bullets: ["“Agrega un día de descanso.”", "“Pasa el estudio a después de la cena los días de partido.”", "“Explica por qué pusiste esto aquí.”"] },
            { title: "¿Se desvió?", bullets: ["Un cambio a la vez", "O empieza una conversación nueva con una instrucción más clara"] }
          ],
          tryIt: "Toma tu horario de la Lección 3. Pide dos cambios, uno a la vez, para que coincida con tu semana real. Compara la primera versión con la última.",
          youCanNow: "mejorar una respuesta de la IA con instrucciones de seguimiento claras.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué puedes pedirle al asistente que cambie su respuesta?", options: ["Olvida cada mensaje", "Recuerda lo que dijiste antes en la misma conversación", "Es tu entrenador", "Tiene que darte la razón"], answer: 1, why: "En la misma conversación el asistente recuerda los mensajes anteriores, así que puedes pedir cambios." },
            { objective: "O4", q: "El plan pone mucho tiempo de estudio justo antes de tu partido del viernes. ¿Qué le envías?", options: ["\"Está mal.\"", "\"Empieza de nuevo y agrega más.\"", "\"El día del partido, pasa el tiempo de estudio para después de la cena.\"", "Nada; lo sigues igual"], answer: 2, why: "Una instrucción de seguimiento clara que nombra un cambio arregla el plan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revisar las respuestas de la IA con tu entrenador",
          minutes: 5,
          goal: "Detectar las partes de una respuesta de la IA que hay que revisar y revisarlas con la persona o la fuente correcta.",
          text: [
            "La IA puede inventar cosas o dar información vieja. A esto a veces se le llama alucinación. En el deporte, podría ser una regla equivocada, una estadística inventada, una fecha de reclutamiento vieja o un consejo de entrenamiento peligroso.",
            "Revisa siempre las cargas de entrenamiento, los consejos sobre lesiones y salud, la nutrición, los suplementos, la elegibilidad, el reclutamiento y las reglas de NIL (siglas en inglés de nombre, imagen y semejanza: lo que un deportista puede ganar con su nombre y su imagen). Revísalo con tu entrenador, tu preparador físico, tu médico, un dietista certificado o la oficina de cumplimiento de tu escuela, y en páginas oficiales como ncaa.org (la NCAA es la asociación que organiza el deporte universitario en Estados Unidos).",
            "Una buena costumbre: pregúntale al asistente “¿Qué debería volver a revisar con mi entrenador?” Y luego pregúntale de verdad a tu entrenador."
          ],
          steps: ["Marca cada dato, número, regla o consejo de salud de la respuesta.", "Decide quién debe revisarlo: entrenador, preparador físico, médico, dietista u oficina de cumplimiento.", "Revisa las reglas en las páginas oficiales.", "Si no coinciden, sigue a la persona o a la fuente oficial."],
          words: [["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."], ["Oficina de cumplimiento", "la oficina de la escuela que conoce las reglas deportivas, incluidas las de reclutamiento y NIL."]],
          slides: [
            { title: "La IA puede equivocarse en", bullets: ["Reglas y fechas de reclutamiento", "Estadísticas y récords", "Consejos de entrenamiento, lesiones y nutrición"] },
            { title: "Quién revisa qué", bullets: ["Entrenamiento: entrenador", "Lesiones y salud: preparador físico o médico", "Comida: dietista certificado", "Reglas y NIL: oficina de cumplimiento"] },
            { title: "Una buena costumbre", bullets: ["Pregunta: “¿Qué debería volver a revisar?”", "Luego revísalo con una persona de verdad"] }
          ],
          sources: [{ name: "NCAA: Nombre, imagen y semejanza (reglas para deportistas universitarios, en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Hazle a un asistente de IA una pregunta sobre una regla de tu deporte, por ejemplo cuántos tiempos muertos tiene cada equipo. Luego busca la respuesta en el reglamento oficial de tu liga o pregúntale a tu entrenador, y mira si coincide.",
          youCanNow: "detectar lo que hay que revisar en una respuesta de la IA y llevarlo a la persona o la fuente oficial correcta.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una alucinación de la IA?", options: ["Un sueño durante una siesta", "La repetición de un video", "Una respuesta rápida", "Algo que la IA inventa y que suena cierto"], answer: 3, why: "La IA puede inventar reglas, estadísticas o fechas que suenan reales." },
            { objective: "O5", q: "La IA te sugiere un suplemento para recuperarte más rápido. ¿Quién lo revisa?", options: ["Un compañero de equipo", "Un dietista certificado, tu médico o tu preparador físico", "El sitio web del suplemento", "Nadie; la IA siempre tiene razón"], answer: 1, why: "Los suplementos y los consejos de alimentación se revisan con el profesional correcto, y con la oficina de cumplimiento por la elegibilidad." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger tu información privada y de salud",
          minutes: 5,
          goal: "Usar la IA para una tarea real sin compartir información privada, de salud ni de tus cuentas.",
          text: [
            "No escribas datos privados en un asistente de IA: contraseñas, números de Social Security (el número del Seguro Social de Estados Unidos) o de identificación, tu dirección, datos bancarios, ni historial médico como informes de lesiones, medicamentos o resultados de análisis.",
            "Igual puedes recibir ayuda. Escribe “[mi escuela]” o “una lesión en el isquiotibial que me está tratando mi preparador físico” en lugar de nombres y datos médicos. Haz preguntas generales; las específicas llévaselas al profesional.",
            "Cuidado con las estafas dirigidas a deportistas: falsos reclutadores, falsos contratos con marcas y falsos agentes que te apuran, te piden dinero por adelantado o te piden un código de inicio de sesión. Revísalos primero con tu entrenador o con la oficina de cumplimiento."
          ],
          steps: ["Lee tu instrucción antes de enviarla.", "Quita nombres, números, contraseñas y datos de salud.", "Usa marcadores como “[mi escuela]”.", "Toma las ofertas apuradas, los pagos por adelantado y los pedidos de códigos como señales de alerta."],
          words: [["Marcador", "una palabra de reemplazo como “[mi escuela]” que mantiene privado el dato real."], ["Estafa", "un engaño para robar dinero, cuentas o información."]],
          slides: [
            { title: "Nunca escribas en la IA", bullets: ["Contraseñas y códigos de inicio de sesión", "Números de identificación o de banco, tu dirección", "Informes de lesiones, medicamentos, resultados de análisis"] },
            { title: "Usa marcadores", bullets: ["“[mi escuela]” en vez del nombre", "Pregunta general a la IA, la específica a un profesional"] },
            { title: "Estafas contra deportistas", bullets: ["Falsos reclutadores y falsos agentes", "Falsos contratos con marcas que piden dinero por adelantado", "Cualquiera que pida un código de inicio de sesión"] }
          ],
          tryIt: "Tarea final: arma tu plan de entrenamiento y estudio de una semana con un asistente de IA. Usa una instrucción de tres partes, pide dos mejoras, quita los datos privados y de salud y muéstrale el plan a tu entrenador o a tu preparador físico.",
          youCanNow: "usar la IA para planear tu semana protegiendo tu información privada y de salud, y detectar las estafas dirigidas a deportistas.",
          quickCheck: [
            { objective: "O6", q: "¿Qué dato debes dejar fuera de una instrucción?", options: ["Tus horarios de entrenamiento", "Tu deporte", "Tu reporte de lesiones y tu lista de medicamentos", "Que quieres una tabla"], answer: 2, why: "Los registros de salud, como los reportes de lesiones y los medicamentos, no van en las herramientas de IA." },
            { objective: "O6", q: "Un \"agente\" te escribe con un trato con una marca y te pide un código de inicio de sesión para cerrarlo hoy. ¿Qué haces?", options: ["Nunca compartir el código, y consultarlo con tu entrenador o la oficina de cumplimiento", "Enviar el código rápido", "Pagar la cuota para apartar el trato", "Darle tu contraseña en lugar del código"], answer: 0, why: "Apurarte y pedirte un código son señales de alerta de una estafa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA con confianza",
        questions: [
          { objective: "O4", q: "El plan de la IA no tiene día de descanso. ¿Cuál es el mejor paso siguiente?", options: ["Aceptarlo igual", "Borrar la aplicación", "Entrenar todos los días para siempre", "Pedir: “Agrega un día de descanso.”"], answer: 3, why: "Un seguimiento le pide al asistente que cambie su respuesta." },
          { objective: "O5", q: "¿Quién debe revisar un consejo de la IA sobre una lesión?", options: ["Tu preparador físico o tu médico", "Un compañero de equipo", "La misma IA", "Un comentario en redes sociales"], answer: 0, why: "Las preguntas de salud y lesiones van a un profesional calificado." },
          { objective: "O5", q: "¿Qué es una alucinación en la IA?", options: ["Un sueño antes de un partido", "Una conexión a internet lenta", "Algo que la IA inventó y que suena cierto", "Un tipo de ejercicio"], answer: 2, why: "La IA puede inventar datos, reglas o estadísticas que parecen reales." },
          { objective: "O6", q: "¿Qué dato está bien poner en una instrucción?", options: ["Tu contraseña", "Tu lista de medicamentos", "Tu dirección", "Tus horarios de entrenamiento"], answer: 3, why: "Los horarios de entrenamiento ayudan a la respuesta y no son privados." },
          { objective: "O6", q: "Un “reclutador” te escribe por mensaje directo y te pide una tarifa para enviar hoy tus mejores jugadas a los entrenadores. ¿Qué haces?", options: ["Pagas rápido antes de que se acabe el cupo", "Lo revisas primero con tu entrenador o con la oficina de cumplimiento", "Le envías tu código de inicio de sesión", "Le envías tu número de identificación"], answer: 1, why: "La prisa y los pagos por adelantado son señales de alerta. Revisa antes de actuar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA en el deporte",
    questions: [
      { objective: "O1", q: "La mejor forma de describir la IA es:", options: ["Un nuevo tipo de pelota", "Un árbitro", "Programas que aprenden patrones a partir de datos", "Una liga deportiva"], answer: 2, why: "La IA aprende patrones de los datos y los usa para responder o predecir." },
      { objective: "O1", q: "¿Cuál NO es un uso de la IA en el deporte?", options: ["Atarte los cordones", "Etiquetar jugadas en el video del partido", "Registrar carreras con una aplicación", "Predecir la probabilidad de que entre un tiro"], answer: 0, why: "Atarse los cordones es tarea de una persona; los otros usan IA." },
      { objective: "O1", q: "¿Quién toma la decisión final sobre tu entrenamiento?", options: ["Tú y tu entrenador", "La IA", "Una aplicación cualquiera", "Nadie"], answer: 0, why: "La IA ayuda; las personas deciden." },
      { objective: "O2", q: "¿Cuál es un asistente de IA gratuito conocido?", options: ["Un cronómetro", "Un marcador", "Google Gemini", "Una camiseta"], answer: 2, why: "Gemini, ChatGPT y Copilot son asistentes de IA gratuitos." },
      { objective: "O2", q: "Tienes 15 años y quieres usar un asistente de IA. ¿Qué debes hacer primero?", options: ["Mentir sobre tu edad", "Revisar las reglas de edad de la aplicación y preguntarle a tu padre, madre o tutor", "Usar la cuenta de un amigo", "Compartir tu contraseña"], answer: 1, why: "Muchos asistentes tienen reglas de edad; tus padres deben saberlo." },
      { objective: "O2", q: "¿Dónde sueles escribirle a un asistente de IA?", options: ["En el ícono de la batería", "En la cámara", "En la dirección de tu escuela", "En el cuadro de mensaje cerca de la parte de abajo"], answer: 3, why: "El cuadro de mensaje es donde escribes tu instrucción." },
      { objective: "O2", q: "Después de usar una computadora compartida de la escuela, debes:", options: ["Dejar la sesión abierta", "Guardar tu contraseña", "Cerrar sesión y cerrar el navegador", "Dejar una nota con tu contraseña"], answer: 2, why: "Cerrar sesión mantiene segura tu cuenta." },
      { objective: "O3", q: "¿Qué es una instrucción (prompt)?", options: ["Un ejercicio de calentamiento", "Un grito del equipo", "Un tiempo muerto", "Lo que escribes o le dices a un asistente de IA"], answer: 3, why: "Una instrucción es tu pedido a la IA." },
      { objective: "O3", q: "¿Qué parte le dice a la IA qué forma darle a la respuesta?", options: ["El formato, como una tabla o una lista", "Tu número de camiseta", "Tu contraseña", "El teléfono de tu entrenador"], answer: 0, why: "Decir el formato te da la respuesta con la forma que necesitas." },
      { objective: "O3", q: "¿Qué instrucción es la más clara?", options: ["“entrenamiento”", "“Soy velocista universitario y entreno de 3 a 5 de la tarde. Haz un plan de estudio para la semana en una tabla.”", "“ayuda”", "“deportes”"], answer: 1, why: "Tiene la necesidad, la situación y el formato." },
      { objective: "O4", q: "La primera respuesta no se ajusta a tu día de partido. Debes:", options: ["Rendirte", "Aceptarla", "Hacer un seguimiento para cambiar el día de partido", "Pagar por una aplicación nueva"], answer: 2, why: "Los seguimientos arreglan las partes que no se ajustan." },
      { objective: "O4", q: "¿Cuántos cambios debes pedir a la vez para que quede claro?", options: ["Uno a la vez", "Diez", "Ninguno", "Todos los que puedas escribir"], answer: 0, why: "Un cambio a la vez mantiene la respuesta encaminada." },
      { objective: "O4", q: "Una conversación se sigue desviando. Una buena jugada es:", options: ["Escribir tu contraseña", "Repetir las mismas palabras", "Dejar de entrenar", "Empezar una conversación nueva con una instrucción más clara"], answer: 3, why: "Una conversación nueva con una instrucción más clara suele funcionar mejor." },
      { objective: "O5", q: "La IA te da una regla de reclutamiento. Debes:", options: ["Publicarla como un hecho", "Revisarla en ncaa.org o con tu oficina de cumplimiento", "No hacer caso a ninguna regla", "Volver a preguntarle a la IA y confiar en ella"], answer: 1, why: "Las reglas cambian; revisa la fuente oficial." },
      { objective: "O5", q: "¿Quién es la persona indicada para revisar un plan de nutrición?", options: ["Un influencer cualquiera", "Un dietista certificado", "La IA", "Un videojuego"], answer: 1, why: "Los dietistas certificados están formados para dar consejos de nutrición." },
      { objective: "O5", q: "¿Quién conoce las reglas de NIL y de reclutamiento de tu escuela?", options: ["La cafetería", "El chofer del autobús", "Un equipo rival", "La oficina de cumplimiento"], answer: 3, why: "La oficina de cumplimiento maneja las reglas deportivas." },
      { objective: "O6", q: "¿Qué NUNCA debes escribir en un asistente de IA?", options: ["Tu lista de medicamentos", "Tu horario de entrenamientos", "Tu deporte", "Tu posición"], answer: 0, why: "Los medicamentos y el historial médico son privados." },
      { objective: "O6", q: "¿Cómo puedes preguntar sobre una lesión sin compartir tu historial?", options: ["Pegar el informe de tu resonancia", "Escribir las notas de tu médico", "Hacer una pregunta general y llevarle la específica a tu preparador físico", "Compartir tu número de seguro"], answer: 2, why: "Las preguntas generales están bien; la atención específica es de un profesional." },
      { objective: "O6", q: "Un contrato con una marca te pide pagar una tarifa por adelantado para entrar. Esto es:", options: ["Normal en todos los contratos", "Obligatorio según la NCAA", "Una buena señal", "Una señal de alerta de estafa"], answer: 3, why: "Las marcas de verdad te pagan a ti; los pagos por adelantado son una señal común de estafa." },
      { objective: "O6", q: "Alguien te pide el código que acaba de llegarte por mensaje al teléfono. Debes:", options: ["Leérselo", "No compartirlo nunca", "Publicarlo", "Enviárselo a tu equipo por mensaje"], answer: 1, why: "Ese código protege tu cuenta. Los reclutadores y las marcas de verdad nunca lo piden." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Instrucción clara",
        objective: "O3",
        notYet: "La instrucción es vaga, como \"hazme un plan\".",
        meets: "La instrucción dice lo que necesita, su horario real de entrenamientos, partidos y clases, y el formato.",
        exceeds: "La primera respuesta ya se ajusta a casi toda su semana."
      },
      {
        name: "La mejoró",
        objective: "O4",
        notYet: "Usó la primera respuesta tal como llegó.",
        meets: "Pidió al menos dos mejoras, una a la vez.",
        exceeds: "Puede decir qué arregló cada cambio, como un día de descanso o el horario del día del partido."
      },
      {
        name: "Datos privados y de salud fuera",
        objective: "O6",
        notYet: "La instrucción tiene un nombre, un número de identificación, una contraseña o un dato de salud.",
        meets: "No hay datos privados ni de salud en la instrucción ni en el plan.",
        exceeds: "Usó marcadores como \"[mi escuela]\" y dejó las preguntas de salud para el preparador físico."
      },
      {
        name: "Revisado con el entrenador",
        objective: "O5",
        notYet: "Siguió el plan sin mostrárselo a nadie.",
        meets: "Le mostró el plan a su entrenador o a su preparador físico antes de seguirlo.",
        exceeds: "Cambió el plan según sus comentarios y puede decir qué cambió."
      }
    ]
  },
  evaluation: {
    results: [
      "Atletas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Atletas que dicen haber usado un plan hecho con IA para entrenar y estudiar dentro de 30 días (encuesta de seguimiento)",
      "Entrenadores o preparadores físicos que dicen que los atletas revisan con ellos los consejos de la IA",
      "Atletas que empiezan otro curso para atletas dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora de la escuela o de la biblioteca con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "El horario real de entrenamientos, partidos y clases de una semana de cada atleta",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Revisa las reglas de edad de cada aplicación de IA para tu grupo; quienes tienen menos de 18 años necesitan el permiso de su madre, padre o tutor.",
      "Pide a un entrenador o a un preparador físico que revise los planes finales con los atletas.",
      "Nunca pidas a los atletas que escriban reportes de lesiones, medicamentos ni números de identificación en herramientas de IA.",
      "Hablen de las estafas de falsos reclutadores y falsos tratos con marcas, y manda a los atletas a su oficina de cumplimiento para las preguntas de NIL.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

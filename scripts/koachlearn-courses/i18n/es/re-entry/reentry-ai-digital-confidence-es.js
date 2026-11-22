"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-ai-digital-confidence.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-ai-digital-confidence-es",
  lang: "es",
  translationOf: "reentry-ai-digital-confidence",
  category: "Re-Entry",
  name: "Introducción a la IA y a la confianza digital",
  skills: "Abrir un asistente de IA gratis, Hacer preguntas claras, Mejorar una respuesta, Revisar una respuesta, Proteger tu información privada",
  outcome: "usar un asistente de IA gratis en un teléfono o en una computadora de la biblioteca para que te ayude con una tarea diaria: hacer una pregunta clara, mejorar la respuesta, revisarla antes de confiar en ella y dejar fuera tu información privada.",
  about: [
    "Puede que la tecnología haya cambiado mucho mientras estuviste fuera. Este curso empieza desde el principio y avanza un pasito a la vez.",
    "Vas a aprender qué es un asistente de IA, cómo abrir uno gratis, cómo pedirle ayuda, cómo revisar lo que te dice y cómo proteger tu información privada.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Usa un asistente de IA para escribir un mensaje corto y amable preguntando a un negocio si está contratando. Pídelo con palabras sencillas, pide un cambio para mejorarlo, revisa que no tenga información privada y léelo en voz alta para asegurarte de que suena a ti.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que regresan a casa después de estar en prisión (reinserción). Muchas estuvieron fuera durante años mientras cambiaban los teléfonos inteligentes y las herramientas de IA; algunas nunca han usado un teléfono inteligente. Las edades son muy variadas, y la mayoría busca trabajo y vivienda y está volviendo a conectar con su familia.",
    startingPoint: "Pueden hacer llamadas y mandar mensajes de texto en un teléfono básico. Usan poco o nada las aplicaciones, los navegadores web o los asistentes de IA. Algunas tienen poca confianza con la lectura o con la tecnología.",
    gap: "Hoy los empleadores, las oficinas de vivienda y los servicios esperan que la gente haga trámites en internet. Los participantes necesitan usar un asistente de IA gratis de forma segura para la ayuda de todos los días (mensajes, explicar cartas, listas) sin dejarse engañar por respuestas equivocadas o estafas. Hacerlo les da confianza y acelera la búsqueda de trabajo y de vivienda.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Dispositivos: puede que solo tengan un teléfono básico o una computadora de la biblioteca con tiempo limitado",
      "Tiempo: lecciones de 4 a 5 minutos que quepan entre citas y el trabajo",
      "Algunas condiciones de libertad condicional o de libertad vigilada limitan el uso de internet; cada participante sigue sus propias condiciones",
      "Alto riesgo de estafas y de privacidad: ningún número privado real en ninguna tarea de práctica"
    ],
    prerequisites: "Ninguno. Quien nunca haya usado una pantalla táctil puede tomar primero \"Usar un teléfono inteligente y una tableta\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una lista de cinco tareas", action: "identificar con qué tareas diarias puede ayudar un asistente de IA y cuáles necesitan a una persona o una fuente oficial", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Usando un teléfono o una computadora de la biblioteca", action: "abrir un asistente de IA gratis desde su aplicación o sitio web oficial, enviar un primer mensaje y cerrar sesión al terminar", standard: "sin ayuda" },
    { id: "O3", condition: "Con una tarea real de tu vida", action: "escribir una instrucción que diga lo que necesitas, tu situación y cómo quieres la respuesta", standard: "de modo que la primera respuesta te sirva" },
    { id: "O4", condition: "Con una respuesta de la IA que no está del todo bien", action: "pedir cambios con preguntas de seguimiento, uno a la vez", standard: "hasta que sea corta, clara y se ajuste a lo que necesitas, en no más de tres intentos" },
    { id: "O5", condition: "Con una respuesta de la IA que incluye un dato como un número de teléfono, una dirección o una regla", action: "comprobar el dato en un sitio web oficial (.gov o el sitio propio de la organización)", standard: "antes de usarlo" },
    { id: "O6", condition: "Cuando escribes una instrucción o recibes un mensaje urgente", action: "dejar fuera tu información privada y reconocer las señales de alerta de una estafa", standard: "sin compartir números privados, contraseñas ni códigos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Primeros pasos con la IA",
      lessons: [
        {
          title: "Qué es un asistente de IA y qué no es",
          objectives: ["O1"],
          minutes: 4,
          goal: "Explicar con tus propias palabras qué puede y qué no puede hacer un asistente de IA.",
          text: [
            "Un asistente de IA es un programa de computadora al que le puedes escribir o hablar con palabras de todos los días. Tú haces una pregunta y él escribe una respuesta. Algunos conocidos y gratis son ChatGPT, Microsoft Copilot y Google Gemini.",
            "Aprendió de una cantidad enorme de textos, así que es bueno para explicar cosas, escribir borradores, hacer listas y planes, y poner palabras difíciles en palabras sencillas.",
            "No es una persona, ni un abogado, ni un médico, ni una oficina del gobierno. No te conoce y puede equivocarse, aunque suene muy seguro. Tú sigues al mando: tú decides qué preguntar y tú decides qué creer."
          ],
          words: [["IA", "abreviatura de inteligencia artificial: programas de computadora que hacen tareas que normalmente necesitan a una persona, como escribir o responder preguntas."], ["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando."]],
          slides: [
            { title: "Un asistente de IA es...", bullets: ["Un programa de computadora con el que conversas", "Escribes o dices una pregunta con palabras de todos los días", "Te escribe una respuesta en segundos"] },
            { title: "Es bueno para", bullets: ["Explicar cosas con palabras sencillas", "Escribir borradores: cartas, mensajes, currículums", "Hacer listas, planes y horarios"] },
            { title: "NO es", bullets: ["Una persona, abogado, médico u oficina del gobierno", "Siempre correcto, aunque suene seguro", "El que manda: el que manda eres tú"] }
          ],
          tryIt: "Escribe tres cosas de tu vida con las que un asistente de IA podría ayudarte esta semana, por ejemplo una lista del súper, un mensaje para un familiar o la explicación de una carta que te llegó.",
          youCanNow: "decir qué es un asistente de IA, nombrar tres cosas con las que puede ayudarte y decir por qué igual revisas lo que te dice.",
          quickCheck: [
            { objective: "O1", q: "¿Con qué tarea puede ayudarte un asistente de IA?", options: ["Escribir una lista del súper a partir de las comidas que planeas", "Firmar un formulario legal por ti", "Pagar tus cuentas desde tu banco", "Ir a tu cita por ti"], answer: 0, why: "Un asistente de IA puede escribir y explicar cosas; no puede firmar, pagar ni presentarse por ti." },
            { objective: "O1", q: "Un asistente de IA te dice la fecha de una audiencia en el tribunal. ¿Qué es cierto?", options: ["Siempre está bien porque es una computadora", "Puede estar mal, así que la confirmas con el tribunal", "Solo la IA puede cambiar la fecha", "No necesitas anotarla"], answer: 1, why: "La IA puede sonar segura y aun así equivocarse; las fechas y las reglas vienen de la oficina oficial." }
          ]
        },
        {
          title: "Abrir un asistente de IA gratis en un teléfono o en una computadora de la biblioteca",
          objectives: ["O2"],
          minutes: 5,
          goal: "Abrir un asistente de IA gratis y encontrar el cuadro donde se escribe.",
          text: [
            "Puedes usar un asistente de IA en un teléfono inteligente o en cualquier computadora con internet, como una de la biblioteca pública o de un centro de empleo.",
            "En un teléfono: abre la tienda de aplicaciones (Google Play en Android, App Store en iPhone), busca el nombre del asistente e instala la aplicación hecha por la empresa real (OpenAI para ChatGPT, Microsoft para Copilot, Google para Gemini). Instala solo desde la tienda de aplicaciones oficial.",
            "En una computadora: abre el navegador web y escribe la dirección: chatgpt.com, copilot.microsoft.com o gemini.google.com. Algunos te dejan conversar sin cuenta; otros te piden iniciar sesión.",
            "En una computadora compartida o de la biblioteca, no dejes que el navegador guarde tu contraseña, y cierra sesión y cierra el navegador cuando termines."
          ],
          steps: ["Elige un teléfono o una computadora con internet.", "Teléfono: instala la aplicación oficial desde la tienda de aplicaciones. Computadora: escribe la dirección web en el navegador.", "Busca el cuadro de mensaje cerca de la parte de abajo de la pantalla. Muchas veces dice \"Pregunta lo que quieras\" o \"Mensaje\".", "En una computadora compartida: cierra sesión y cierra el navegador cuando termines."],
          words: [["Navegador web", "el programa que usas para visitar sitios web, como Chrome, Edge o Safari."], ["Tienda de aplicaciones", "el lugar oficial en un teléfono para conseguir aplicaciones de forma segura."]],
          slides: [
            { title: "Dónde puedes usarlo", bullets: ["Tu teléfono inteligente", "Una computadora de la biblioteca pública", "Una computadora de un centro de empleo o de reinserción"] },
            { title: "En un teléfono", bullets: ["Abre la tienda de aplicaciones oficial", "Busca el nombre del asistente", "Instala la aplicación de la empresa real"] },
            { title: "En una computadora", bullets: ["Abre el navegador web", "Escribe chatgpt.com, copilot.microsoft.com o gemini.google.com", "Busca el cuadro de mensaje abajo"] },
            { title: "En una computadora compartida", bullets: ["No guardes tu contraseña", "Cierra sesión al terminar", "Cierra el navegador"] }
          ],
          tryIt: "Abre un asistente de IA gratis en un teléfono o una computadora. Busca el cuadro de mensaje y escribe: Hola, estoy aprendiendo a usar la IA. Lee lo que te responde.",
          youCanNow: "abrir un asistente de IA gratis en un teléfono o una computadora, encontrar dónde escribir y salir de una computadora compartida de forma segura.",
          quickCheck: [
            { objective: "O2", q: "Quieres una aplicación de IA en tu teléfono. ¿De dónde la sacas?", options: ["De un enlace en un mensaje de un desconocido", "De cualquier sitio web con un botón de descarga gratis", "De la tienda de aplicaciones oficial, de la empresa real", "De una copia que un amigo te manda por mensaje"], answer: 2, why: "La tienda de aplicaciones oficial y el nombre de la empresa real mantienen las aplicaciones falsas fuera de tu teléfono." },
            { objective: "O2", q: "Terminaste de usar la IA en una computadora de la biblioteca. ¿Qué haces primero?", options: ["La dejas abierta para la siguiente persona", "Solo apagas la pantalla", "Escribes tu contraseña en una nota", "Cierras sesión y cierras el navegador"], answer: 3, why: "Cerrar sesión y cerrar el navegador impide que la siguiente persona entre a tus conversaciones y cuentas." }
          ]
        },
        {
          title: "Hacer una pregunta clara",
          objectives: ["O3"],
          minutes: 5,
          goal: "Escribir una petición clara que dé una respuesta útil a la primera.",
          text: [
            "Lo que le escribes a un asistente de IA se llama instrucción (en inglés, prompt). Una instrucción clara da una mejor respuesta.",
            "Una buena instrucción tiene tres partes: lo que necesitas, un poco sobre tu situación (sin datos privados) y cómo quieres la respuesta. Por ejemplo: \"Empiezo un trabajo nuevo en un almacén el lunes a las 7 am. Hazme una lista sencilla para la noche anterior. Usa oraciones cortas.\"",
            "Una instrucción débil es demasiado corta, como \"consejos de trabajo\". El asistente tiene que adivinar lo que quieres decir, así que la respuesta es general."
          ],
          steps: ["Di lo que necesitas.", "Agrega un poco sobre tu situación, sin datos privados.", "Di cómo quieres la respuesta: corta, con palabras sencillas, en pasos, en una lista o en una tabla."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA para pedirle algo."]],
          slides: [
            { title: "La instrucción es lo que escribes", bullets: ["Instrucción clara = mejor respuesta", "Instrucción corta y vaga = respuesta general"] },
            { title: "Tres partes de una buena instrucción", bullets: ["1. Lo que necesitas", "2. Un poco sobre tu situación", "3. Cómo quieres la respuesta"] },
            { title: "Débil frente a clara", bullets: ["Débil: \"consejos de trabajo\"", "Clara: \"Empiezo en un almacén el lunes a las 7 am.", "Hazme una lista para la noche anterior.", "Usa oraciones cortas.\""] }
          ],
          tryIt: "Elige una tarea real de tu lista de la Lección 1. Escribe una instrucción con las tres partes, envíala y lee la respuesta.",
          youCanNow: "escribir una instrucción con lo que necesitas, tu situación y cómo quieres la respuesta.",
          quickCheck: [
            { objective: "O3", q: "¿Qué instrucción tiene las tres partes: lo que necesitas, tu situación y cómo quieres la respuesta?", options: ["\"Ayúdame.\"", "\"Tengo una entrevista para un trabajo en un almacén el martes. Dame 5 preguntas comunes en una lista corta.\"", "\"Escribe una lista.\"", "\"Entrevista.\""], answer: 1, why: "Dice lo que necesitas (preguntas), tu situación (entrevista en un almacén el martes) y el formato (una lista corta de 5)." },
            { objective: "O3", q: "Tu instrucción dice lo que necesitas y tu situación. ¿Qué falta?", options: ["Cómo quieres la respuesta, por ejemplo pasos cortos o una lista", "Tu nombre completo y tu fecha de nacimiento", "Una nota de agradecimiento", "Nada; está completa"], answer: 0, why: "Decir cómo quieres la respuesta (corta, sencilla, en pasos, en una lista) es la tercera parte de una instrucción clara." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Primeros pasos con la IA",
        questions: [
          { objective: "O1", q: "¿Qué es un asistente de IA?", options: ["Una persona que responde tus mensajes", "Un programa de computadora con el que conversas con palabras de todos los días", "Un sitio web del gobierno", "Un tipo de teléfono"], answer: 1, why: "Un asistente de IA es un programa de computadora al que le escribes o hablas; te escribe respuestas." },
          { objective: "O1", q: "Un asistente de IA suena muy seguro de una respuesta. ¿Qué deberías hacer?", options: ["Creerle, porque suena seguro", "No volver a usar la IA nunca", "Pedirle a un amigo que le crea por ti", "Revisarla de todos modos, porque puede estar mal"], answer: 3, why: "La IA puede equivocarse aunque suene segura. Tú sigues al mando y revisas." },
          { objective: "O2", q: "¿De dónde deberías instalar una aplicación de IA en un teléfono?", options: ["De la tienda de aplicaciones oficial, hecha por la empresa real", "De cualquier sitio web", "De un enlace en un mensaje de texto", "De un anuncio emergente"], answer: 0, why: "La tienda de aplicaciones oficial y la aplicación de la empresa real son la opción segura." },
          { objective: "O2", q: "Usaste la IA en una computadora de la biblioteca. ¿Qué haces al terminar?", options: ["La dejas abierta para la siguiente persona", "Guardas tu contraseña para que sea más rápido la próxima vez", "Cierras sesión y cierras el navegador", "Apagas el internet de la biblioteca"], answer: 2, why: "Cerrar sesión y el navegador impide que la siguiente persona entre a tu cuenta." },
          { objective: "O3", q: "¿Cuál es la instrucción más clara?", options: ["\"ayuda\"", "\"consejos de trabajo\"", "\"Empiezo en un almacén el lunes a las 7 am. Haz una lista para la noche anterior con oraciones cortas.\"", "\"dime todo\""], answer: 2, why: "Dice lo que necesitas, tu situación y cómo quieres la respuesta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA con confianza",
      lessons: [
        {
          title: "Mejorar una respuesta",
          objectives: ["O4"],
          minutes: 4,
          goal: "Hacer preguntas de seguimiento para mejorar una respuesta.",
          text: [
            "No tienes que aceptar la primera respuesta. Un asistente de IA recuerda lo que dijiste antes en la misma conversación, así que puedes pedirle que cambie su respuesta.",
            "Preguntas de seguimiento útiles: \"Hazlo más corto.\" \"Usa palabras más sencillas.\" \"Explica más el paso 2.\" \"Dame un ejemplo.\" \"Ponlo en una lista.\" \"Hazlo sonar más amable.\"",
            "Si la conversación se desvía, empieza una conversación nueva y escribe una instrucción más clara."
          ],
          steps: ["Lee la primera respuesta.", "Decide qué quieres que cambie.", "Pide ese único cambio.", "Repite hasta que la respuesta te sirva."],
          words: [["Pregunta de seguimiento", "una segunda pregunta que parte de la respuesta que recibiste."]],
          slides: [
            { title: "La primera respuesta es un borrador", bullets: ["Puedes pedir cambios", "Recuerda la misma conversación"] },
            { title: "Preguntas de seguimiento que funcionan", bullets: ["\"Hazlo más corto.\"", "\"Usa palabras más sencillas.\"", "\"Explica más el paso 2.\"", "\"Dame un ejemplo.\""] },
            { title: "¿Se desvió?", bullets: ["Empieza una conversación nueva", "Escribe una instrucción más clara"] }
          ],
          tryIt: "Toma la respuesta de la Lección 3. Pide dos cambios, uno a la vez, como \"hazlo más corto\" y luego \"usa palabras más sencillas\". Compara la primera y la última respuesta.",
          youCanNow: "mejorar una respuesta de la IA haciendo preguntas de seguimiento claras.",
          quickCheck: [
            { objective: "O4", q: "La respuesta usa palabras difíciles de leer. ¿Qué envías después?", options: ["\"Mal. Inténtalo otra vez.\"", "Nada; cierras la aplicación", "\"Hazlo más largo.\"", "\"Usa palabras más sencillas.\""], answer: 3, why: "Una pregunta de seguimiento clara que dice el cambio que quieres arregla la respuesta sin empezar de nuevo." },
            { objective: "O4", q: "¿Por qué pedir los cambios uno a la vez?", options: ["La IA solo puede leer una palabra a la vez", "Puedes ver qué hizo cada cambio", "Cuesta menos dinero", "La IA se molesta con las peticiones largas"], answer: 1, why: "Un cambio a la vez te muestra qué petición mejoró la respuesta." }
          ]
        },
        {
          title: "Revisar la respuesta antes de confiar en ella",
          objectives: ["O5"],
          minutes: 5,
          goal: "Comparar una respuesta de la IA con una fuente confiable.",
          text: [
            "Los asistentes de IA a veces inventan cosas, como un número de teléfono equivocado, una oficina que no existe, una regla vieja o una fecha equivocada. A esto a veces se le llama alucinación.",
            "Revisa siempre todo lo que tenga que ver con dinero, leyes, tu salud, beneficios del gobierno, fechas, direcciones y números de teléfono. Revísalo con la fuente oficial: un sitio web del gobierno (en Estados Unidos la dirección suele terminar en .gov), la propia oficina o una persona de confianza como tu administrador de caso, un consejero de reinserción o un bibliotecario.",
            "Un buen hábito: pregúntale al asistente \"¿Dónde puedo comprobar esto?\" y luego ve tú mismo a esa página oficial, en lugar de confiar en un enlace sin mirarlo."
          ],
          steps: ["Encuentra los datos de la respuesta: números, fechas, nombres, reglas.", "Búscalos en el sitio oficial (muchas veces termina en .gov) o llama a la oficina.", "Si no coinciden, confía en la fuente oficial.", "Para decisiones importantes, pregunta también a una persona de confianza."],
          words: [["Alucinación", "cuando una IA escribe algo que suena verdadero pero es inventado."], [".gov", "la terminación de las direcciones de los sitios web oficiales del gobierno de Estados Unidos."]],
          slides: [
            { title: "La IA puede inventar cosas", bullets: ["Números de teléfono o direcciones equivocados", "Reglas viejas o fechas equivocadas", "Oficinas que no existen"] },
            { title: "Revisa siempre", bullets: ["Dinero y beneficios", "Leyes y reglas", "Salud", "Fechas, direcciones, números de teléfono"] },
            { title: "Cómo revisar", bullets: ["Sitio oficial, muchas veces termina en .gov", "Llama a la oficina", "Pregunta a tu administrador de caso o a un bibliotecario"] }
          ],
          tryIt: "Pídele a un asistente de IA el número de teléfono o el sitio web de una oficina real cerca de ti (por ejemplo, la oficina de vehículos motorizados de tu estado). Luego busca tú mismo el sitio web oficial de la oficina y mira si la respuesta coincide.",
          youCanNow: "detectar los datos que hay que revisar y revisarlos con una fuente oficial.",
          quickCheck: [
            { objective: "O5", q: "La IA te da un número de teléfono de la oficina de vehículos motorizados. ¿Qué haces?", options: ["Buscas el número en el sitio web oficial de la oficina y los comparas", "Llamas de inmediato", "Lo compartes en internet", "Le preguntas a la IA si está segura"], answer: 0, why: "Solo el sitio web oficial puede confirmar el número; la IA puede inventar números que parecen reales." },
            { objective: "O5", q: "¿Qué dirección web es más probable que sea un sitio oficial del gobierno de Estados Unidos?", options: ["dmv-help-now.com", "freegovforms.net", "dmv.ca.gov", "govservices.info"], answer: 2, why: "Los sitios web oficiales del gobierno de Estados Unidos suelen terminar en .gov." }
          ]
        },
        {
          title: "Proteger tu información privada",
          objectives: ["O6"],
          minutes: 5,
          goal: "Usar la IA sin compartir información privada y detectar estafas hechas con IA.",
          text: [
            "No escribas información privada en un asistente de IA: tu número de Seguro Social, números de identificación, números de caso o de recluso, contraseñas, números de banco o de tarjeta, ni tu dirección completa. Puedes recibir la ayuda que necesitas sin ellos. Escribe \"[mi número]\" en su lugar.",
            "Los estafadores también usan la IA. Pueden escribir mensajes que parecen reales e incluso copiar la voz de un familiar en una llamada. Ten cuidado con cualquier mensaje que te apure, te pida dinero o tarjetas de regalo, o te pida un código que te llegó al teléfono.",
            "Si algo te parece raro, detente. Cuelga y llama a la persona o a la oficina a un número que ya sabes que es real."
          ],
          steps: ["Antes de enviar una instrucción, léela buscando información privada y quítala.", "Usa un marcador como \"[mi número]\".", "Toma como señales de alerta los mensajes que te apuran, piden dinero o piden códigos.", "Devuelve la llamada a un número que sabes que es real."],
          words: [["Información privada", "datos que podrían permitir que alguien se haga pasar por ti o se quede con tu dinero."], ["Estafa", "un engaño para robar dinero o información."]],
          slides: [
            { title: "Nunca escribas en la IA", bullets: ["Números de Seguro Social o de identificación", "Números de caso o de recluso", "Contraseñas, números de banco o de tarjeta"] },
            { title: "Usa un marcador", bullets: ["Escribe \"[mi número]\" en su lugar", "Igual recibes la ayuda que necesitas"] },
            { title: "Señales de estafa", bullets: ["Te apuran", "Piden dinero o tarjetas de regalo", "Piden un código que te llegó al teléfono"] },
            { title: "Si tienes dudas", bullets: ["Detente", "Cuelga", "Llama a un número que sabes que es real"] }
          ],
          tryIt: "Tarea final: usa un asistente de IA para escribir un mensaje corto y amable preguntando a un negocio si está contratando. Pide un cambio para mejorarlo, revisa que no tenga información privada y léelo en voz alta.",
          youCanNow: "usar un asistente de IA para una tarea real protegiendo tu información privada, y detectar las señales de una estafa.",
          quickCheck: [
            { objective: "O6", q: "Un formulario de trabajo pide tu número de Seguro Social y quieres ayuda de la IA con él. ¿Qué escribes?", options: ["Tu número real para que la IA lo revise", "Tu número con un dígito cambiado", "El número de tu tarjeta del banco en su lugar", "Un marcador como [mi número]"], answer: 3, why: "Un marcador deja que la IA te ayude con la redacción mientras tu número real sigue siendo privado." },
            { objective: "O6", q: "Un mensaje dice que tus beneficios se cortan hoy si no envías el código que te acaba de llegar. ¿Qué es esto?", options: ["Una estafa; nunca compartas el código", "Un mensaje normal de tu oficina", "Una prueba que tienes que pasar", "Un recordatorio para actualizar tu teléfono"], answer: 0, why: "Apurarte y pedirte un código son señales de alerta de estafa; las oficinas reales no piden esos códigos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA con confianza",
        questions: [
          { objective: "O4", q: "La primera respuesta es demasiado larga. ¿Cuál es el mejor siguiente paso?", options: ["Pedir: \"Hazlo más corto\"", "Rendirte", "Copiarla de todos modos", "Apagar el teléfono"], answer: 0, why: "Una pregunta de seguimiento le pide al asistente que cambie su respuesta." },
          { objective: "O5", q: "¿Cuál de estas cosas deberías revisar SIEMPRE con una fuente oficial?", options: ["Un chiste", "Una lista del súper", "Un poema", "El número de teléfono de una oficina del gobierno"], answer: 3, why: "Los números de teléfono, las fechas, el dinero, las leyes y los beneficios pueden estar mal y hay que revisarlos." },
          { objective: "O5", q: "¿Qué significa \"alucinación\" cuando se habla de IA?", options: ["La IA está cansada", "La IA escribió algo que suena verdadero pero es inventado", "La pantalla está rota", "Un tipo de aplicación"], answer: 1, why: "La IA puede inventar datos que suenan reales." },
          { objective: "O6", q: "¿Qué deberías escribir en una instrucción en lugar de tu número de Seguro Social?", options: ["El número real", "Un marcador como \"[mi número]\"", "La mitad del número", "Tu número de banco"], answer: 1, why: "Un marcador te deja recibir ayuda sin compartir información privada." },
          { objective: "O6", q: "Recibes una llamada con la voz de un familiar pidiéndote tarjetas de regalo de inmediato. ¿Qué haces?", options: ["Comprar rápido las tarjetas de regalo", "Darle el código que te llegó al teléfono", "Enviar tu número de banco", "Colgar y llamarle a un número que sabes que es real"], answer: 3, why: "Los estafadores pueden copiar voces. Las prisas y las tarjetas de regalo son señales de alerta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA y a la confianza digital",
    questions: [
      { objective: "O1", q: "La mejor descripción de un asistente de IA es:", options: ["Un programa de computadora con el que conversas", "Un empleado del gobierno", "Una compañía de teléfonos", "Un sitio web que solo vende cosas"], answer: 0, why: "Es un programa al que le escribes o hablas." },
      { objective: "O1", q: "¿Para qué tarea es bueno un asistente de IA?", options: ["Tomar decisiones legales por ti", "Firmar documentos por ti", "Explicar una carta difícil con palabras sencillas", "Conocer tu historia privada"], answer: 2, why: "Explicar con palabras sencillas es uno de sus puntos fuertes." },
      { objective: "O1", q: "¿Quién está al mando cuando usas un asistente de IA?", options: ["La IA", "La tienda de aplicaciones", "Tú", "Nadie"], answer: 2, why: "Tú decides qué preguntar y qué creer." },
      { objective: "O2", q: "¿Cuál es un asistente de IA gratis y conocido?", options: ["Microsoft Copilot", "Una calculadora", "Un mensaje de texto", "Una impresora"], answer: 0, why: "Copilot, ChatGPT y Gemini son asistentes gratis y conocidos." },
      { objective: "O2", q: "En un teléfono, el lugar seguro para conseguir una aplicación de IA es:", options: ["Un enlace en un mensaje de un desconocido", "Cualquier sitio web", "Un anuncio emergente", "La tienda de aplicaciones oficial"], answer: 3, why: "Instala solo desde la tienda de aplicaciones oficial." },
      { objective: "O2", q: "¿Qué dirección web abre un asistente de IA en una computadora?", options: ["myjob.gift", "copilot.microsoft.com", "freemoney.win", "ninguna de estas"], answer: 1, why: "copilot.microsoft.com es la dirección oficial de Microsoft para Copilot." },
      { objective: "O2", q: "¿Dónde sueles escribir tu pregunta?", options: ["En la barra de direcciones del teléfono", "En el cuadro de mensaje cerca de la parte de abajo de la pantalla", "En el ícono de la batería", "En la cámara"], answer: 1, why: "El cuadro de mensaje muchas veces dice \"Pregunta lo que quieras\" o \"Mensaje\"." },
      { objective: "O2", q: "Después de usar una computadora de la biblioteca deberías:", options: ["Guardar tu contraseña", "Escribir tu contraseña en una nota", "Dejar tu cuenta abierta", "Cerrar sesión y cerrar el navegador"], answer: 3, why: "Así tu cuenta queda protegida de la siguiente persona." },
      { objective: "O3", q: "¿Qué es una instrucción (prompt)?", options: ["Lo que escribes o dices a un asistente de IA", "Una alarma de recordatorio", "Un tipo de cargador de teléfono", "La terminación de un sitio web"], answer: 0, why: "Una instrucción es lo que le pides a la IA." },
      { objective: "O3", q: "Una buena instrucción incluye:", options: ["Una sola palabra", "Tu número de Seguro Social", "Lo que necesitas, tu situación y cómo quieres la respuesta", "Tu contraseña"], answer: 2, why: "Esas tres partes dan una respuesta útil." },
      { objective: "O3", q: "¿Qué instrucción probablemente dará la respuesta más útil?", options: ["\"currículum\"", "\"ayúdame\"", "\"Trabajé 3 años en una cocina. Ayúdame a hacer una lista de mis habilidades para un trabajo de cocinero en viñetas cortas.\"", "\"cosas\""], answer: 2, why: "Da la necesidad, la situación y el formato." },
      { objective: "O4", q: "La primera respuesta de la IA no está del todo bien. Puedes:", options: ["Hacer una pregunta de seguimiento para cambiarla", "Solo aceptarla", "Pagar para arreglarla", "Reiniciar tu teléfono"], answer: 0, why: "Preguntas como \"usa palabras más sencillas\" mejoran la respuesta." },
      { objective: "O4", q: "¿Cuál es una buena pregunta de seguimiento?", options: ["\"Manda dinero.\"", "\"Aquí está mi número de banco.\"", "\"Borra mi teléfono.\"", "\"Explica más el paso 2.\""], answer: 3, why: "Pide un cambio claro en la respuesta." },
      { objective: "O4", q: "Si una conversación se desvía, una buena idea es:", options: ["Escribir tu contraseña", "Empezar una conversación nueva con una instrucción más clara", "Repetir las mismas palabras", "No volver a usar la IA nunca"], answer: 1, why: "Una conversación nueva con una instrucción más clara suele funcionar mejor." },
      { objective: "O5", q: "Cuando la IA te da el número de teléfono de una oficina, deberías:", options: ["Llamar sin revisarlo", "Revisarlo en el sitio web oficial de la oficina", "Publicarlo en internet", "Darle tu número de identificación"], answer: 1, why: "La IA puede dar números equivocados; revisa la fuente oficial." },
      { objective: "O5", q: "Los sitios web oficiales del gobierno de Estados Unidos suelen terminar en:", options: [".xyz", ".win", ".gift", ".gov"], answer: 3, why: "Los sitios del gobierno de Estados Unidos usan .gov." },
      { objective: "O6", q: "¿Qué NUNCA deberías escribir en un asistente de IA?", options: ["El número de tu tarjeta del banco", "\"Hazlo más corto\"", "\"Dame un ejemplo\"", "\"Usa palabras más sencillas\""], answer: 0, why: "Los números de banco y de tarjeta son información privada." },
      { objective: "O6", q: "Un mensaje te apura a pagar con tarjetas de regalo. Esto es:", options: ["Una cuenta normal", "Una oferta de trabajo", "Una señal de alerta de estafa", "Una regla del gobierno"], answer: 2, why: "Las prisas y las tarjetas de regalo son señales comunes de estafa." },
      { objective: "O6", q: "Alguien te pide el código que te acaba de llegar por mensaje al teléfono. Deberías:", options: ["Leérselo", "Publicarlo en internet", "No compartirlo nunca", "Mandárselo a tus amigos"], answer: 2, why: "Ese código protege tu cuenta. Las oficinas reales no lo piden." },
      { objective: "O6", q: "Si algo te parece raro en una llamada, lo más seguro es:", options: ["Colgar y llamar a un número que sabes que es real", "Seguir hablando", "Darles tu dirección", "Mandar un pago pequeño"], answer: 0, why: "Devolver la llamada a un número conocido detiene la mayoría de las estafas." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Petición clara", objective: "O3", notYet: "La instrucción es vaga, por ejemplo \"escribe un mensaje\".", meets: "La instrucción dice lo que necesitas, tu situación y cómo quieres la respuesta.", exceeds: "También nombra el negocio y el puesto, y la primera respuesta está casi lista." },
      { name: "Lo mejoró", objective: "O4", notYet: "Usó la primera respuesta tal como salió.", meets: "Pidió un cambio y el mensaje mejoró.", exceeds: "Pidió dos o más cambios, uno a la vez, y puede decir qué arregló cada uno." },
      { name: "Información privada fuera", objective: "O6", notYet: "La instrucción o el mensaje tiene un número privado, una contraseña, una dirección o una fecha de nacimiento.", meets: "No hay información privada ni en la instrucción ni en el mensaje.", exceeds: "Usó un marcador como [mi número de teléfono] y lo llenó solo en el mensaje que envía por su cuenta." },
      { name: "Datos revisados", objective: "O5", notYet: "Copió de la IA el nombre, la dirección o el horario del negocio sin revisarlos.", meets: "Revisó cualquier dato del negocio en su propio sitio web o en un listado oficial.", exceeds: "Puede decir dónde lo revisó." },
      { name: "Suena a ti", objective: "O1", notYet: "El mensaje usa palabras que la persona no diría o no entiende.", meets: "Leído en voz alta, es amable, corto y con las propias palabras de la persona.", exceeds: "La persona cambió algunas palabras por su cuenta para que suene más a ella." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que empiezan otro curso de Koach Learn en los 30 días siguientes",
      "Participantes que dicen haber usado la IA para una solicitud de empleo, un mensaje o una carta en los 30 días siguientes (encuesta de seguimiento)",
      "Las organizaciones de reinserción reportan menos pedidos de ayuda con trámites básicos en internet"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o del programa",
      "Un asistente de IA gratis: Microsoft Copilot, ChatGPT o Google Gemini",
      "Papel y lápiz para las notas de \"Pruébalo ahora\"",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "En un laboratorio de computación o un centro de reinserción: hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" hechas en vivo.",
      "Antes de que los participantes se vayan, revise que cada uno cierre sesión en las computadoras compartidas.",
      "Nunca pida a los participantes que escriban datos privados reales en la práctica; usen marcadores como [mi número].",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez.",
      "Recuerde a quienes están en libertad condicional o libertad vigilada que sigan cualquier condición sobre el uso de internet."
    ]
  }
};

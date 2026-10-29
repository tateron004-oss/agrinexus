"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-for-seniors.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-for-seniors-es",
  lang: "es",
  translationOf: "seniors-ai-for-seniors",
  category: "Seniors and Technology",
  name: "IA para personas mayores: cómo usar asistentes de IA",
  skills: "Abrir un asistente de IA gratuito, Escribir o decir una pregunta, Pedir respuestas más sencillas, Revisar lo que dice, Proteger tus datos privados",
  outcome: "abrir un asistente de IA gratuito en tu teléfono, tableta o computadora, hacerle una pregunta clara escribiendo o hablando, pedirle que lo explique de forma más sencilla y revisar la respuesta antes de actuar.",
  about: [
    "Este curso es para personas mayores que han oído hablar de los asistentes de IA, como ChatGPT, Microsoft Copilot o Google Gemini, y quieren probar uno con calma y con seguridad. No necesitas experiencia.",
    "Abrirás un asistente, le harás preguntas reales sobre tu vida, como una receta, una carta del consultorio médico o un mensaje de cumpleaños para un nieto, y aprenderás a hacer que sus respuestas sean más claras.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea “Pruébalo ahora” a tu propio ritmo. Cada capítulo termina con una breve comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Puedes repetir cualquier lección todas las veces que quieras."
  ],
  finalTask: "Usa un asistente de IA para planear una comida familiar sencilla: pide una receta fácil para cuatro personas, pídele que ponga los pasos en líneas cortas y numeradas, haz una pregunta de seguimiento y revisa un dato (como una temperatura de cocción) en un sitio web confiable o con una persona de confianza.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores, muchas veces jubiladas, que quieren usar los nuevos asistentes de IA para ayudarse en el día a día: tarjetas y cartas a la familia, pasatiempos, explicaciones y listas. Algunas viven solas; muchas tienen nietos que usan estas herramientas.",
    startingPoint: "Saben hacer llamadas y enviar mensajes de texto, y muchas usan el correo electrónico o una tableta. La mayoría no ha usado un asistente de IA y algunas se sienten inseguras con las aplicaciones, la letra pequeña o el teclado.",
    gap: "Los asistentes de IA pueden ahorrar tiempo y ayudar a las personas mayores a seguir conectadas e independientes, pero ellas también son blanco de estafas y pueden confundirse con respuestas equivocadas sobre salud o dinero. Necesitan abrir un asistente, preguntar con claridad, hacer que las respuestas sean fáciles de leer, revisar los datos y proteger su información privada.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: un teléfono, una tableta o una computadora; las pantallas y la letra pequeñas pueden ser difíciles de leer",
      "Tiempo: unos 5 minutos por lección, sin prisa, con tiempo para practicar",
      "Las respuestas sobre salud, medicinas y dinero se deben revisar con un médico, un farmacéutico o una fuente oficial",
      "Alto riesgo de estafas: nada de números de Seguro Social, de Medicare, del banco ni contraseñas en ninguna pregunta"
    ],
    prerequisites: "Ninguno. Quienes son nuevos con las pantallas táctiles pueden pedir a un familiar o a alguien de la biblioteca que los acompañe la primera vez."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tareas de todos los días", action: "identificar en qué tareas te puede ayudar un asistente de IA y cuáles necesitan un médico, un banco u otra persona", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Usando tu teléfono, tableta o computadora", action: "abrir un asistente de IA gratuito desde su tienda de aplicaciones o su sitio web oficial y encontrar el cuadro de mensajes o el micrófono", standard: "sin ayuda" },
    { id: "O3", condition: "Con una necesidad real de tu propia vida", action: "escribir o decir una instrucción que diga lo que necesitas, tu situación y cómo quieres la respuesta", standard: "de modo que la primera respuesta sea útil" },
    { id: "O4", condition: "Con una respuesta demasiado larga o difícil de leer", action: "hacer pedidos de seguimiento, uno a la vez, para que sea más sencilla o más corta", standard: "hasta que te resulte fácil de leer y de usar" },
    { id: "O5", condition: "Con una respuesta de la IA sobre salud, dinero, un número de teléfono o una fecha", action: "revisar el dato en un sitio web oficial, con tu médico o farmacéutico, o con una persona de confianza", standard: "antes de actuar" },
    { id: "O6", condition: "Cuando escribes una pregunta o recibes una llamada o un mensaje urgente", action: "mantener fuera tu información privada y reconocer las señales de alerta de una estafa", standard: "sin compartir números privados, contraseñas ni códigos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conoce a tu asistente de IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es un asistente de IA",
          minutes: 4,
          goal: "Decir con tus propias palabras qué puede y qué no puede hacer por ti un asistente de IA.",
          text: [
            "Un asistente de IA es un programa de computadora al que puedes hablarle o escribirle con palabras de todos los días, como si le escribieras una nota a un vecino amable. Haces una pregunta y, unos segundos después, escribe una respuesta.",
            "Algunos asistentes gratuitos conocidos son ChatGPT, Microsoft Copilot y Google Gemini. Son buenos para explicar cosas de forma sencilla, escribir un primer borrador de una tarjeta o carta, dar ideas para un pasatiempo y hacer listas.",
            "Un asistente no es una persona, y no es tu médico, tu abogado ni tu banco. No te conoce y puede equivocarse aunque suene muy seguro. Tú tienes el control: tú decides qué preguntar y qué creer."
          ],
          words: [["IA", "abreviatura de inteligencia artificial: programas de computadora que pueden hacer tareas como escribir o responder preguntas."], ["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando."]],
          slides: [
            { title: "Un asistente de IA es...", bullets: ["Un programa de computadora con el que conversas", "Preguntas con palabras de todos los días", "Escribe una respuesta en segundos"] },
            { title: "Te puede ayudar a", bullets: ["Explicar de forma sencilla una palabra o carta difícil", "Escribir una tarjeta de cumpleaños o una nota de agradecimiento", "Dar ideas para recetas, pasatiempos y viajes"] },
            { title: "NO es", bullets: ["Tu médico, tu abogado ni tu banco", "Siempre correcto, aunque suene seguro", "Quien manda: mandas tú"] }
          ],
          tryIt: "En una hoja de papel, escribe tres cosas en las que un asistente de IA podría ayudarte este mes, por ejemplo una tarjeta para un nieto, una pregunta sobre una planta del jardín o una receta.",
          youCanNow: "decir qué es un asistente de IA, nombrar tres formas en que podría ayudarte y explicar por qué igual revisas lo que dice.",
          quickCheck: [
            { objective: "O1", q: "¿En qué tarea es bueno un asistente de IA?", options: ["Escribir un primer borrador de una tarjeta de cumpleaños", "Darte los resultados de tu análisis de sangre", "Mover dinero de tu banco", "Ir al médico por ti"], answer: 0, why: "Los asistentes son buenos para borradores, ideas y listas; no son tu médico ni tu banco." },
            { objective: "O1", q: "Un asistente de IA suena muy seguro sobre una regla de tus beneficios. ¿Qué haces?", options: ["Creerle porque suena seguro", "Recordar que puede equivocarse, y confirmarlo con la oficina", "Contárselo a tus amigos de inmediato", "Pedirle que te prometa que tiene razón"], answer: 1, why: "Los asistentes pueden equivocarse aunque suenen seguros, y tú decides qué creer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir un asistente en tu teléfono, tableta o computadora",
          minutes: 6,
          goal: "Abrir un asistente de IA gratuito y encontrar el cuadro donde escribes o hablas.",
          text: [
            "Puedes usar un asistente en un teléfono inteligente, una tableta o una computadora. Elige el aparato con el que te sientas más cómodo. Un nieto, un amigo o alguien de la biblioteca puede sentarse contigo la primera vez.",
            "En un teléfono o tableta: abre la tienda de aplicaciones (Play Store en Android, App Store en iPhone y iPad). Toca el cuadro de búsqueda, escribe el nombre del asistente e instala la aplicación de la empresa verdadera: OpenAI para ChatGPT, Microsoft para Copilot, Google para Gemini.",
            "En una computadora: abre tu navegador web y escribe la dirección con cuidado, por ejemplo chatgpt.com, copilot.microsoft.com o gemini.google.com. Algunos te dejan empezar sin cuenta; otros te piden iniciar sesión.",
            "Busca el cuadro de mensaje, por lo general cerca de la parte de abajo de la pantalla. A menudo dice “Pregunta lo que quieras” o “Mensaje”. Muchas aplicaciones también muestran un pequeño micrófono que puedes tocar para hablar en vez de escribir."
          ],
          steps: ["Elige tu teléfono, tableta o computadora.", "Teléfono o tableta: instala la aplicación oficial desde la tienda de aplicaciones. Computadora: escribe la dirección web en el navegador.", "Busca el cuadro de mensaje cerca de la parte de abajo de la pantalla.", "Busca el botón del micrófono si prefieres hablar."],
          words: [["Tienda de aplicaciones", "el lugar oficial de un teléfono o tableta para conseguir aplicaciones de forma segura."], ["Navegador web", "el programa que usas para visitar sitios web, como Chrome, Edge o Safari."], ["Botón del micrófono", "un dibujito de un micrófono que tocas para hablar en vez de escribir."]],
          slides: [
            { title: "Usa lo que te resulte cómodo", bullets: ["Teléfono inteligente, tableta o computadora", "Pide a un familiar o bibliotecario que se siente contigo"] },
            { title: "En un teléfono o tableta", bullets: ["Abre la tienda de aplicaciones oficial", "Busca el nombre del asistente", "Instala la aplicación de la empresa verdadera"] },
            { title: "En una computadora", bullets: ["Abre el navegador web", "Escribe chatgpt.com, copilot.microsoft.com o gemini.google.com", "Escribe la dirección con cuidado"] },
            { title: "Encuentra dónde hablar", bullets: ["Cuadro de mensaje cerca de la parte de abajo", "Puede decir “Pregunta lo que quieras”", "El botón del micrófono te deja hablar"] }
          ],
          tryIt: "Abre un asistente gratuito. Busca el cuadro de mensaje y escribe o di: Hola, soy nuevo en esto. Por favor responde con frases cortas y sencillas. Lee su respuesta.",
          youCanNow: "abrir un asistente de IA gratuito y encontrar dónde escribir o decir tu pregunta.",
          quickCheck: [
            { objective: "O2", q: "¿Quién hace la verdadera aplicación Microsoft Copilot?", options: ["Cualquier empresa con un nombre parecido", "Google", "Microsoft", "OpenAI"], answer: 2, why: "Instala la aplicación hecha por la empresa verdadera: Microsoft, en el caso de Copilot." },
            { objective: "O2", q: "Te cuesta escribir en tu teléfono. ¿Qué buscas en la aplicación del asistente?", options: ["El ícono de la batería", "El botón de la cámara", "El engranaje de configuración", "El pequeño micrófono que puedes tocar para hablar"], answer: 3, why: "Muchas aplicaciones muestran un micrófono para que puedas hablar en lugar de escribir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer una pregunta clara",
          minutes: 5,
          goal: "Escribir o decir una pregunta que reciba una respuesta útil a la primera.",
          text: [
            "Lo que escribes o le dices a un asistente se llama instrucción (en inglés, “prompt”). Mientras más clara sea la instrucción, mejor será la respuesta.",
            "Una buena instrucción tiene tres partes: lo que necesitas, un poco sobre tu situación y cómo quieres la respuesta. Por ejemplo: “Mi nieta cumple 8 años el sábado y le encantan los caballos. Escribe un mensaje de cumpleaños corto de parte de la abuela. Usa palabras sencillas.”",
            "Una instrucción demasiado corta, como “cumpleaños”, obliga al asistente a adivinar y recibes una respuesta general. Está bien escribir varias frases. Tómate tu tiempo; el asistente te espera."
          ],
          steps: ["Di lo que necesitas.", "Agrega un poco sobre tu situación, sin datos privados.", "Di cómo quieres la respuesta: corta, con palabras sencillas, con pasos grandes o en una lista."],
          words: [["Instrucción (prompt)", "lo que escribes o le dices a un asistente de IA para pedirle algo."]],
          slides: [
            { title: "La instrucción es tu pregunta", bullets: ["Instrucción clara = mejor respuesta", "Demasiado corta = respuesta general"] },
            { title: "Tres partes de una buena instrucción", bullets: ["1. Lo que necesitas", "2. Un poco sobre tu situación", "3. Cómo quieres la respuesta"] },
            { title: "Un ejemplo", bullets: ["“Mi nieta cumple 8 años y le encantan los caballos.", "Escribe un mensaje de cumpleaños corto de parte de la abuela.", "Usa palabras sencillas.”"] }
          ],
          tryIt: "Elige una cosa de tu lista de la Lección 1. Escribe una instrucción con las tres partes, envíala y lee la respuesta despacio.",
          youCanNow: "hacerle a un asistente de IA una pregunta clara con lo que necesitas, tu situación y cómo quieres la respuesta.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una instrucción (prompt)?", options: ["Un recordatorio en tu calendario", "Lo que escribes o le dices al asistente", "La respuesta que da el asistente", "Una contraseña"], answer: 1, why: "Una instrucción es tu pedido al asistente, escrito o hablado." },
            { objective: "O3", q: "Quieres una nota de agradecimiento para tu vecino, que arregló tu cerca. ¿Qué pedido es el mejor?", options: ["\"nota\"", "\"gracias\"", "\"Escribe cualquier cosa.\"", "\"Mi vecino arregló mi cerca. Escribe una nota de agradecimiento corta y cálida, con palabras sencillas.\""], answer: 3, why: "Dice lo que necesitas, tu situación y cómo quieres la respuesta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conoce a tu asistente de IA",
        questions: [
          { objective: "O1", q: "¿Qué es un asistente de IA?", options: ["Una persona en un centro de llamadas", "Un tipo de televisor", "Un programa de computadora con el que conversas con palabras de todos los días", "Una oficina del gobierno"], answer: 2, why: "Un asistente de IA es un programa al que le escribes o le hablas, y te responde por escrito." },
          { objective: "O1", q: "El asistente suena muy seguro sobre una pregunta de medicinas. ¿Qué debes hacer?", options: ["Consultarlo con tu médico o farmacéutico", "Seguirlo de inmediato", "Dejar de tomar todas las medicinas", "Decirle a tu vecino que lo siga"], answer: 0, why: "La IA puede equivocarse aunque suene segura; las preguntas de salud son para tu médico o farmacéutico." },
          { objective: "O2", q: "¿Cuál es el lugar seguro para conseguir una aplicación de IA en un teléfono o tableta?", options: ["Un enlace en un mensaje de un desconocido", "Un anuncio emergente", "Cualquier sitio web", "La tienda de aplicaciones oficial, de la empresa verdadera"], answer: 3, why: "La tienda de aplicaciones oficial y la aplicación de la empresa verdadera son la opción segura." },
          { objective: "O2", q: "Prefieres hablar en vez de escribir. ¿Qué buscas?", options: ["El ícono de la batería", "El botón del micrófono", "La cámara", "El botón del volumen"], answer: 1, why: "El botón del micrófono te deja decir tu pregunta en voz alta." },
          { objective: "O3", q: "¿Qué instrucción es la más clara?", options: ["“cumpleaños”", "“Mi nieta cumple 8 años y le encantan los caballos. Escribe un mensaje de cumpleaños corto de parte de la abuela con palabras sencillas.”", "“ayuda”", "“tarjeta”"], answer: 1, why: "Dice lo que necesitas, tu situación y cómo quieres la respuesta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Obtener buenas respuestas con seguridad",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir una respuesta más sencilla o más corta",
          minutes: 4,
          goal: "Usar preguntas de seguimiento para que una respuesta sea más fácil de leer y usar.",
          text: [
            "Nunca tienes que aceptar la primera respuesta. El asistente recuerda lo que dijiste antes en la misma conversación, así que puedes pedirle que cambie su respuesta.",
            "Preguntas de seguimiento útiles: “Por favor usa palabras más sencillas.” “Hazlo más corto.” “Ponlo en pasos numerados.” “Explica otra vez el paso 3.” “Dame un ejemplo.” “Hazlo sonar más cariñoso.”",
            "Si te cuesta leer letras pequeñas, también puedes agrandar el texto en tu aparato. Pide a un familiar que te muestre el ajuste del tamaño del texto, o pregúntale al asistente: “¿Cómo agrando la letra en mi iPhone?”"
          ],
          steps: ["Lee la primera respuesta despacio.", "Decide qué la haría mejor.", "Pide ese único cambio.", "Repite hasta que la respuesta te sirva."],
          words: [["Pregunta de seguimiento", "una segunda pregunta que se basa en la respuesta que recibiste."]],
          slides: [
            { title: "La primera respuesta es solo un borrador", bullets: ["Puedes pedir cambios", "Recuerda la misma conversación"] },
            { title: "Preguntas de seguimiento que funcionan", bullets: ["“Por favor usa palabras más sencillas.”", "“Hazlo más corto.”", "“Ponlo en pasos numerados.”", "“Explica otra vez el paso 3.”"] },
            { title: "¿Te cuesta leer?", bullets: ["Agranda el texto en tu aparato", "Pregúntale al asistente cómo hacerlo", "Pide a un familiar que te muestre"] }
          ],
          tryIt: "Toma la respuesta de la Lección 3. Pide dos cambios, uno a la vez, como “hazlo más corto” y luego “hazlo sonar más cariñoso”. Compara la primera respuesta con la última.",
          youCanNow: "mejorar una respuesta de la IA haciendo preguntas de seguimiento claras.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué puedes pedirle al asistente que cambie su respuesta?", options: ["Recuerda lo que dijiste antes en la misma conversación", "Tiene que empezar de cero cada vez", "Te lee la mente", "Solo responde una vez"], answer: 0, why: "En la misma conversación el asistente recuerda los mensajes anteriores, así que puedes pedir cambios." },
            { objective: "O4", q: "Una receta llega en un solo párrafo largo. ¿Qué envías después?", options: ["\"Está mal.\"", "Nada; cierras la aplicación", "\"Ponla en pasos numerados.\"", "\"Hazla más larga.\""], answer: 2, why: "Un pedido de seguimiento claro que nombra el cambio hace que la respuesta sea más fácil de usar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revisar una respuesta antes de actuar",
          minutes: 5,
          goal: "Revisar una respuesta de la IA con una fuente confiable antes de fiarte de ella.",
          text: [
            "Los asistentes de IA a veces inventan cosas: un número de teléfono equivocado, un horario de una tienda, un dato sobre medicinas o una regla que ya cambió. Esto se llama alucinación.",
            "Revisa siempre todo lo que tenga que ver con tu salud, tus medicinas, tu dinero, beneficios como Social Security (el Seguro Social de Estados Unidos) o Medicare (el seguro médico federal para mayores), fechas, direcciones y números de teléfono. Revísalo en el sitio web oficial, con la oficina misma, con tu médico o farmacéutico, o con una persona de confianza.",
            "Una buena costumbre es preguntar: “¿Dónde puedo comprobar esto?” Luego busca tú mismo esa página oficial. Los sitios web oficiales del gobierno de Estados Unidos terminan en .gov."
          ],
          steps: ["Encuentra los datos en la respuesta: números, fechas, nombres, reglas.", "Búscalos en el sitio web oficial o llama a la oficina.", "Si no coinciden, confía en la fuente oficial.", "Para salud y dinero, pregunta también a tu médico, farmacéutico o una persona de confianza."],
          words: [["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."], [".gov", "la terminación de las direcciones de los sitios web oficiales del gobierno de Estados Unidos."]],
          slides: [
            { title: "La IA puede inventar cosas", bullets: ["Números de teléfono u horarios equivocados", "Reglas viejas", "Datos de medicinas equivocados"] },
            { title: "Revisa siempre", bullets: ["Salud y medicinas", "Dinero y beneficios", "Fechas, direcciones y números de teléfono"] },
            { title: "Cómo revisar", bullets: ["Sitio web oficial, que a menudo termina en .gov", "Llama a la oficina", "Pregunta a tu médico, farmacéutico o alguien de confianza"] }
          ],
          tryIt: "Pregúntale a un asistente el horario de la biblioteca de tu zona. Luego revisa el sitio web de la biblioteca o llama. ¿Coincidió la respuesta?",
          youCanNow: "detectar los datos que hay que revisar y comprobarlos con una fuente confiable.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una alucinación en la IA?", options: ["Cuando la pantalla se pone oscura", "Cuando la aplicación está lenta", "Cuando el asistente habla en voz alta", "Cuando el asistente inventa algo que suena cierto"], answer: 3, why: "La IA puede inventar un número de teléfono, un horario de tienda o una regla equivocados que suenan reales." },
            { objective: "O5", q: "El asistente te dice cuánto tomar de una medicina. ¿Qué haces?", options: ["Tomar esa cantidad de inmediato", "Consultar primero con tu médico o farmacéutico", "Preguntarle a otra IA", "Compartirlo con tus amigos"], answer: 1, why: "Las respuestas sobre salud y medicinas se deben revisar con tu médico o farmacéutico." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger tu información privada",
          minutes: 5,
          goal: "Usar un asistente de IA sin compartir información privada.",
          text: [
            "Nunca escribas información privada en un asistente de IA: tu número de Social Security, tu número de Medicare, números de banco o de tarjeta, contraseñas o tu dirección completa. Puedes recibir la ayuda que necesitas sin ellos. Escribe “[mi número]” en su lugar.",
            "Los estafadores también usan IA. Pueden escribir mensajes muy convincentes e incluso copiar la voz de un nieto por teléfono. Ten cuidado con cualquier llamada o mensaje que te apure, te pida dinero o tarjetas de regalo, o te pida un código enviado a tu teléfono.",
            "Si algo te parece raro, detente. Cuelga y vuelve a llamar a la persona a un número que ya sabes que es verdadero."
          ],
          steps: ["Antes de enviar una instrucción, léela buscando información privada.", "Cámbiala por un marcador como “[mi número]”.", "Toma las prisas, las tarjetas de regalo y los pedidos de códigos como señales de alerta.", "Devuelve la llamada a un número que ya conoces."],
          words: [["Información privada", "datos que podrían permitir que alguien se haga pasar por ti o te quite tu dinero."], ["Marcador", "una palabra de reemplazo como “[mi número]” que se usa en lugar del dato real."]],
          slides: [
            { title: "Nunca escribas en la IA", bullets: ["Números de Social Security o Medicare", "Números de banco o de tarjeta", "Contraseñas"] },
            { title: "Usa un marcador", bullets: ["Escribe “[mi número]” en su lugar", "Igual recibes la ayuda que necesitas"] },
            { title: "Señales de estafa", bullets: ["Te apuran", "Quieren dinero o tarjetas de regalo", "Te piden un código enviado a tu teléfono"] },
            { title: "Si tienes dudas", bullets: ["Detente", "Cuelga", "Vuelve a llamar a un número que sabes que es verdadero"] }
          ],
          tryIt: "Tarea final: pídele a un asistente una receta fácil para cuatro personas, pídele que ponga los pasos en líneas cortas y numeradas, haz una pregunta de seguimiento y revisa un dato, como una temperatura de cocción, en un sitio web confiable o con alguien de confianza.",
          youCanNow: "usar un asistente de IA para una tarea real, revisar su respuesta y proteger tu información privada.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál de estas cosas nunca debes escribir en un asistente de IA?", options: ["Tu número de Medicare", "Tu receta favorita", "El nombre de un pájaro que viste", "Una pregunta sobre tu jardín"], answer: 0, why: "Los números de Medicare, del Seguro Social y del banco son privados; usa un espacio en blanco en su lugar." },
            { objective: "O6", q: "Un mensaje dice que tu cuenta se cerrará hoy si no envías el código que acabas de recibir. ¿Qué haces?", options: ["Enviar el código rápido", "Responder con tu número del banco", "No compartir el código; llamar a la empresa a un número que ya conoces", "Reenviárselo a tus nietos"], answer: 2, why: "Apurarte y pedirte un código son señales de alerta de una estafa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Obtener buenas respuestas con seguridad",
        questions: [
          { objective: "O4", q: "La respuesta usa palabras que no entiendes. ¿Qué escribes?", options: ["“Hazlo más largo.”", "Tu número de Medicare", "Nada; cierro la aplicación", "“Por favor usa palabras más sencillas.”"], answer: 3, why: "Una pregunta de seguimiento le pide al asistente que cambie su respuesta." },
          { objective: "O5", q: "¿Cuál de estas cosas debes revisar SIEMPRE con una fuente confiable?", options: ["Cuánta medicina tomar", "Un chiste", "Un poema de cumpleaños", "Una lista de nombres de flores"], answer: 0, why: "Los datos de salud y medicinas se deben revisar con tu médico o farmacéutico." },
          { objective: "O5", q: "¿Qué es una “alucinación” en la IA?", options: ["La pantalla está demasiado brillante", "Un tipo de aplicación", "La IA escribió algo que suena cierto pero es inventado", "Una conexión a internet lenta"], answer: 2, why: "La IA puede inventar datos que parecen reales." },
          { objective: "O6", q: "¿Qué debes escribir en lugar de tu número de Medicare en una instrucción?", options: ["El número real", "La mitad del número", "Tu número de banco", "Un marcador como “[mi número]”"], answer: 3, why: "Un marcador te consigue ayuda sin compartir información privada." },
          { objective: "O6", q: "Alguien llama, suena como tu nieto y te pide tarjetas de regalo de inmediato. ¿Qué haces?", options: ["Comprarlas rápido", "Darle el código de tu teléfono", "Colgar y llamar a tu nieto a un número que conoces", "Enviar tus datos bancarios"], answer: 2, why: "Los estafadores pueden copiar voces; las prisas y las tarjetas de regalo son señales de alerta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para personas mayores: cómo usar asistentes de IA",
    questions: [
      { objective: "O1", q: "La mejor forma de describir un asistente de IA es:", options: ["Una persona en un centro de llamadas", "Un programa de computadora con el que conversas", "Una compañía de teléfonos", "Una tienda"], answer: 1, why: "Es un programa al que le escribes o le hablas." },
      { objective: "O1", q: "¿Cuál es un buen uso de un asistente de IA?", options: ["Escribir un borrador de una nota de agradecimiento a un amigo", "Decidir tu dosis de medicina", "Firmar papeles por ti", "Saber el saldo de tu banco"], answer: 0, why: "Redactar notas y tarjetas es uno de sus puntos fuertes." },
      { objective: "O1", q: "¿Quién tiene el control cuando usas un asistente de IA?", options: ["Tú", "La compañía de teléfonos", "La IA", "Nadie"], answer: 0, why: "Tú decides qué preguntar y qué creer." },
      { objective: "O2", q: "¿Cuál es un asistente de IA gratuito conocido?", options: ["Una calculadora", "Google Gemini", "Una impresora", "Un control remoto"], answer: 1, why: "Gemini, ChatGPT y Copilot son asistentes gratuitos conocidos." },
      { objective: "O2", q: "El lugar seguro para conseguir una aplicación de IA en una tableta es:", options: ["Un enlace en un correo de un desconocido", "Un anuncio emergente", "La tienda de aplicaciones oficial", "Cualquier sitio web"], answer: 2, why: "Instala solo desde la tienda de aplicaciones oficial." },
      { objective: "O2", q: "¿Qué dirección abre ChatGPT en una computadora?", options: ["chatgpt.gift", "chatgpt-prize.net", "free-chatgpt.win", "chatgpt.com"], answer: 3, why: "chatgpt.com es la dirección oficial." },
      { objective: "O2", q: "¿Dónde sueles escribir tu pregunta?", options: ["En el ícono de la batería", "En el reloj", "En el cuadro de mensaje cerca de la parte de abajo", "En la cámara"], answer: 2, why: "El cuadro de mensaje a menudo dice “Pregunta lo que quieras” o “Mensaje”." },
      { objective: "O2", q: "Quieres decir tu pregunta en voz alta. Tocas:", options: ["El botón del micrófono", "La cámara", "El botón de encendido", "El botón del volumen"], answer: 0, why: "El botón del micrófono te deja hablar en vez de escribir." },
      { objective: "O3", q: "¿Qué es una instrucción (prompt)?", options: ["Una alarma de recordatorio", "La terminación de un sitio web", "Un cargador de teléfono", "Lo que escribes o le dices al asistente"], answer: 3, why: "La instrucción es tu pedido al asistente." },
      { objective: "O3", q: "Una buena instrucción incluye:", options: ["Una sola palabra", "Lo que necesitas, tu situación y cómo quieres la respuesta", "Tu contraseña", "Tu número de Social Security"], answer: 1, why: "Esas tres partes consiguen una respuesta útil." },
      { objective: "O3", q: "¿Qué instrucción probablemente dará la respuesta más útil?", options: ["“jardín”", "“Las hojas de mis tomates tienen manchas amarillas. ¿Qué podría causarlo? Responde con pasos cortos y sencillos.”", "“plantas”", "“ayuda”"], answer: 1, why: "Da la necesidad, la situación y el formato." },
      { objective: "O4", q: "La primera respuesta es demasiado larga. Puedes:", options: ["Apagar el aparato", "Solo aceptarla", "Pagar para arreglarla", "Pedir: “Hazlo más corto.”"], answer: 3, why: "Las preguntas de seguimiento cambian la respuesta." },
      { objective: "O4", q: "¿Cuál es una pregunta de seguimiento útil?", options: ["“Ponlo en pasos numerados.”", "“Aquí está el número de mi tarjeta.”", "“Borra mi teléfono.”", "“Envía dinero.”"], answer: 0, why: "Pide un cambio claro en la respuesta." },
      { objective: "O4", q: "El texto en la pantalla es demasiado pequeño. ¿Qué puedes hacer?", options: ["Rendirte", "Comprar un teléfono nuevo hoy", "Agrandar el texto en los ajustes de tu aparato o pedir a alguien que te muestre", "Escribir tu contraseña"], answer: 2, why: "Los aparatos tienen un ajuste de tamaño de texto; un familiar o el asistente pueden mostrarte cómo." },
      { objective: "O5", q: "El asistente te da el número de teléfono de una clínica. Debes:", options: ["Darle tu número de Medicare", "Llamar sin revisarlo", "Publicarlo en internet", "Revisarlo en el sitio web de la clínica o en una carta de la clínica"], answer: 3, why: "La IA puede dar números equivocados; revisa la fuente oficial." },
      { objective: "O5", q: "Los sitios web oficiales del gobierno de Estados Unidos terminan en:", options: [".win", ".gift", ".gov", ".xyz"], answer: 2, why: "Los sitios del gobierno de Estados Unidos usan .gov." },
      { objective: "O5", q: "Para una pregunta de medicinas, la mejor persona para confirmar la respuesta es:", options: ["Un desconocido en internet", "Tu médico o farmacéutico", "La misma IA", "Un anuncio emergente"], answer: 1, why: "Los datos de salud se deben revisar con un profesional." },
      { objective: "O6", q: "¿Qué NUNCA debes escribir en un asistente de IA?", options: ["El número de tu tarjeta bancaria", "“Dame un ejemplo.”", "“Usa palabras más sencillas.”", "“Hazlo más cariñoso.”"], answer: 0, why: "Los números de banco y de tarjeta son información privada." },
      { objective: "O6", q: "Alguien te pide el código que acaban de enviarte por mensaje al teléfono. Debes:", options: ["No compartirlo nunca", "Publicarlo", "Enviárselo por mensaje", "Leérselo"], answer: 0, why: "Ese código protege tu cuenta; las oficinas de verdad no lo piden." },
      { objective: "O6", q: "Si una llamada te parece rara, el paso más seguro es:", options: ["Seguir hablando", "Colgar y volver a llamar a un número que sabes que es verdadero", "Darle tu dirección", "Enviar un pago pequeño"], answer: 1, why: "Devolver la llamada a un número conocido detiene la mayoría de las estafas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      9,
      11,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Abrió el asistente",
        objective: "O2",
        notYet: "Necesitó que otra persona abriera el asistente, o usó una aplicación o un sitio no oficial.",
        meets: "Abrió un asistente oficial y encontró el cuadro de mensajes o el micrófono.",
        exceeds: "Puede mostrarle a un amigo o familiar cómo abrirlo."
      },
      {
        name: "Pedido claro",
        objective: "O3",
        notYet: "El pedido es vago, por ejemplo \"receta\".",
        meets: "Pidió una receta fácil para cuatro personas, con la situación y cómo debía verse la respuesta.",
        exceeds: "Agregó un detalle, como un alimento que alguien no puede comer, y la primera respuesta casi estaba lista."
      },
      {
        name: "La hizo más fácil",
        objective: "O4",
        notYet: "Usó la primera respuesta tal como llegó, aunque fuera difícil de leer.",
        meets: "Pidió pasos cortos y numerados, y una pregunta de seguimiento más.",
        exceeds: "Pidió los cambios uno a la vez y puede decir qué arregló cada uno."
      },
      {
        name: "Dato revisado",
        objective: "O5",
        notYet: "Confió en un dato, como una temperatura para cocinar, sin revisarlo.",
        meets: "Revisó un dato en un sitio web confiable o con una persona de confianza.",
        exceeds: "Puede decir dónde lo revisó y si coincidía."
      },
      {
        name: "Información privada protegida",
        objective: "O6",
        notYet: "El pedido incluye un número privado, una dirección o una contraseña.",
        meets: "Ningún pedido tiene información privada.",
        exceeds: "Puede nombrar dos señales de alerta de una estafa."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen haber usado un asistente de IA para una tarjeta, una carta, una receta o una pregunta dentro de 30 días (encuesta de seguimiento)",
      "Personas que dicen haber reconocido y evitado una llamada o un mensaje de estafa",
      "Personas que empiezan otro curso de tecnología para personas mayores dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente, una tableta o una computadora con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "Lentes para leer si hacen falta, y papel y lápiz para notas",
      "Unos 60 minutos en total, en sesiones cortas y sin prisa: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Ve despacio, y forma parejas con un ayudante o un nieto la primera vez que abran la aplicación.",
      "Antes de empezar, muestra cómo agrandar la letra en el dispositivo de cada persona.",
      "Nunca pidas que escriban datos privados reales; usen espacios como [mi número].",
      "Recuerda que las respuestas sobre salud, medicinas y dinero se deben revisar con un médico, un farmacéutico o una oficina oficial.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

"use strict";

// Koach Learn course (shared), Spanish translation of "Building AI-Powered Chatbots (No Programming Needed)". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-chatbots-no-code-es",
  lang: "es",
  translationOf: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Crear chatbots con IA (sin programar)",
  skills: "Elegir el trabajo de un chatbot, Escribir instrucciones para el chatbot, Armar un archivo de conocimiento, Poner límites de seguridad, Probar con preguntas reales, Lanzar y mejorar",
  outcome: "crear un chatbot de IA sin programar que responda las preguntas comunes de un negocio, una organización sin fines de lucro o un club a partir de tu propia información, con instrucciones claras y límites de seguridad, y probado con preguntas reales antes de que alguien lo use.",
  about: [
    "Un chatbot responde preguntas en una ventana de chat, a cualquier hora. Con las herramientas de IA de hoy puedes crear uno sin escribir código: le das instrucciones y tu propia información, y responde en lenguaje sencillo.",
    "Este curso es para dueños de pequeños negocios, personal y voluntarios de organizaciones sin fines de lucro, y jóvenes que quieren un proyecto real. Algunos ejemplos: una panadería que responde “¿Abren el domingo?”, un banco de alimentos que explica qué hay que llevar y un club escolar que responde preguntas sobre las pruebas de selección.",
    "Planificarás el trabajo del chatbot, escribirás sus instrucciones, le darás un archivo de conocimiento, agregarás reglas de seguridad, lo probarás y lo lanzarás. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Crea un chatbot que funcione, sin programar, para una organización real o de práctica: un trabajo de una oración, instrucciones escritas con un tono y límites de seguridad, un archivo de conocimiento de una página con datos, y un registro de pruebas de al menos diez preguntas reales con las correcciones que hiciste. Compártelo con una persona y anota sus comentarios.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios, su personal y personas que dirigen organizaciones sin fines de lucro, iglesias o clubes, que responden las mismas preguntas una y otra vez por teléfono, mensaje de texto, correo y redes sociales.",
    startingPoint: "Saben usar un teléfono o una computadora, el correo y las redes sociales, y puede que hayan probado un asistente de IA. No tienen experiencia en programación, y la mayoría nunca ha configurado un chatbot.",
    gap: "Responder preguntas repetidas toma horas cada semana, y los clientes esperan respuestas a cualquier hora. Las personas necesitan crear un chatbot honesto y con un trabajo acotado a partir de sus propios datos, con límites de seguridad y pruebas, para que ahorre tiempo sin dar respuestas equivocadas o riesgosas que dañen la confianza.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; sin programar",
      "Aparatos: una computadora es lo más fácil; algunas herramientas funcionan en el teléfono",
      "Costo y funciones: las funciones y los planes de los chatbots sin programar cambian; las personas revisan la página de ayuda de la herramienta",
      "Privacidad: nada de nombres de clientes, números de teléfono, datos de donantes, contraseñas ni información bancaria en ningún archivo",
      "Tiempo: lecciones de 5 minutos, unos 60 minutos en total más las pruebas"
    ],
    prerequisites: "Ninguno. Quienes no hayan usado asistentes de IA pueden tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las preguntas que tu organización ya recibe", action: "escribir en una oración el trabajo de un chatbot y hacer la lista de las diez preguntas que debe responder", standard: "sin preguntas riesgosas de salud, ley o dinero en la lista" },
    { id: "O2", condition: "Usando una herramienta para crear chatbots sin programar", action: "escribir instrucciones que fijen el papel, el público, el trabajo, el tono y los límites del chatbot", standard: "con las cinco partes y una línea sobre qué hacer cuando no sabe" },
    { id: "O3", condition: "Con los datos de tu organización", action: "crear un archivo de conocimiento de una página, con fecha y en forma de preguntas y respuestas, y agregarlo al chatbot", standard: "sin información privada" },
    { id: "O4", condition: "Para un chatbot que usará el público", action: "escribir límites de seguridad que mantengan al chatbot en su tema, honesto y seguro", standard: "incluyendo nada de números privados, nada de consejos profesionales, decir que es una IA y enviar las emergencias al 911" },
    { id: "O5", condition: "Antes de que alguien use el chatbot", action: "probar el chatbot con al menos diez preguntas reales y difíciles, registrar los resultados y corregir las fallas", standard: "volviendo a probar cada pregunta fallida hasta que pase" },
    { id: "O6", condition: "Cuando el chatbot esté listo", action: "compartirlo con algunas personas, recoger comentarios y fijar una rutina de actualización", standard: "con una persona siempre disponible para lo que el chatbot no puede resolver" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planificar y crear el chatbot",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué puede hacer un chatbot de IA, y cómo elegir su único trabajo",
          minutes: 4,
          goal: "Escribir el trabajo de un chatbot en una oración y hacer la lista de preguntas que debe responder.",
          text: [
            "Un chatbot de IA es un asistente de IA configurado para un solo propósito. En lugar de responder cualquier cosa, responde preguntas sobre tu organización usando la información que tú le das.",
            "Los buenos primeros trabajos son limitados y repetitivos: horario y ubicación, precios, cómo inscribirse, qué llevar, políticas de devolución, turnos de voluntarios. Los malos primeros trabajos son los riesgosos: consejos médicos, legales o de dinero, o cualquier cosa que necesite el criterio de una persona.",
            "Empieza con las preguntas que la gente ya te hace. Revisa tus correos, mensajes, llamadas y comentarios en redes sociales. Las diez preguntas más comunes se convierten en el trabajo del chatbot."
          ],
          steps: ["Anota las diez preguntas que más te hace la gente.", "Tacha las que necesitan el criterio de una persona o son riesgosas.", "Escribe el trabajo del chatbot en una oración: “Este chatbot responde preguntas sobre [tema] para [quién]”."],
          words: [["Chatbot", "un programa que responde preguntas en una ventana de chat."], ["Caso de uso", "el trabajo específico para el que se usa una herramienta."]],
          slides: [
            { title: "Un chatbot es un asistente enfocado", bullets: ["Configurado para un solo propósito", "Responde con tu propia información"] },
            { title: "Buenos primeros trabajos", bullets: ["Horario, ubicación, precios", "Cómo inscribirse o qué llevar", "Turnos de voluntarios, políticas de devolución"] },
            { title: "Déjalo para las personas", bullets: ["Consejos médicos, legales o de dinero", "Quejas y decisiones que requieren criterio"] },
            { title: "Empieza con preguntas reales", bullets: ["Correos, llamadas, mensajes, comentarios", "Las diez preguntas principales = el trabajo"] }
          ],
          tryIt: "Elige un negocio, una organización sin fines de lucro o un club (tuyo o de práctica). Escribe sus diez preguntas más comunes y el trabajo de su chatbot en una oración.",
          youCanNow: "elegir un trabajo seguro y limitado para un chatbot y hacer la lista de preguntas que debe responder.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un buen primer trabajo para el chatbot de un negocio?", options: ["Dar consejos legales", "Decidir los reembolsos caso por caso", "Responder preguntas acotadas y repetidas, como el horario y la inscripción", "Responder cualquier pregunta del mundo"], answer: 2, why: "Las preguntas acotadas y repetidas tienen poco riesgo y ahorran más tiempo." },
            { objective: "O1", q: "Tu barbería recibe muchas preguntas. ¿Cuál tachas de la lista del chatbot?", options: ["\"¿Es grave este sarpullido en mi cuero cabelludo?\"", "\"¿Cuál es su horario el sábado?\"", "\"¿Cómo reservo una cita?\"", "\"¿Dónde me estaciono?\""], answer: 0, why: "Las preguntas de salud necesitan el criterio de un profesional, así que no son trabajo de un chatbot." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir las instrucciones del chatbot",
          minutes: 5,
          goal: "Escribir instrucciones claras que fijen el papel, el tono y los límites del chatbot.",
          text: [
            "Las herramientas para crear chatbots sin programar te dejan escribir instrucciones que la IA sigue en cada chat. Algunos ejemplos son los GPT personalizados en ChatGPT, las Gems en Google Gemini y los agentes en Microsoft Copilot Studio. Los nombres de las funciones, los menús y los planes que las incluyen cambian a menudo, así que revisa la página de ayuda de la herramienta para ver los pasos actuales.",
            "Las buenas instrucciones cubren cinco cosas: quién es el chatbot (“Eres el asistente de ayuda del Banco de Alimentos Sunrise”), con quién habla, qué responde, cómo suena (amable, breve, con palabras sencillas) y qué no debe hacer.",
            "Escribe las instrucciones en oraciones cortas y directas. Dile qué hacer cuando no sabe algo: “Si la respuesta no está en el archivo de conocimiento, di que no estás seguro y da el número de teléfono”."
          ],
          steps: ["Papel: “Eres el asistente de ayuda de [organización]”.", "Público: quién va a hacer preguntas.", "Trabajo: sobre qué temas responde.", "Tono: amable, breve, palabras sencillas.", "Límites: qué no debe hacer, y qué decir cuando no sabe."],
          words: [["Instrucciones", "las indicaciones fijas que sigue un chatbot en cada conversación; a veces se llaman prompt del sistema."], ["Tono", "cómo suena lo escrito: formal, amable, breve."]],
          slides: [
            { title: "Herramientas para chatbots sin programar", bullets: ["GPT personalizados, Gems de Gemini, agentes de Copilot Studio", "Los nombres y planes cambian: revisa la página de ayuda"] },
            { title: "Cinco partes de las instrucciones", bullets: ["Papel y público", "Qué responde", "Tono", "Qué no debe hacer"] },
            { title: "Cuando no sabe", bullets: ["Que diga “No estoy seguro”", "Que dé un teléfono o correo para hablar con una persona"] }
          ],
          sources: [{ name: "Ayuda de Google Gemini: Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Escribe las instrucciones de tu chatbot con las cinco partes, en ocho oraciones o menos.",
          youCanNow: "escribir instrucciones de chatbot que fijen su papel, su público, su trabajo, su tono y sus límites.",
          quickCheck: [
            { objective: "O2", q: "¿Qué parte de las instrucciones es \"amable, breve, palabras sencillas\"?", options: ["El papel", "El público", "Los límites", "El tono"], answer: 3, why: "El tono describe cómo suena el chatbot." },
            { objective: "O2", q: "Tus instrucciones no dicen qué hacer cuando el chatbot no sabe. ¿Qué agregas?", options: ["\"Da siempre una respuesta, aunque sea adivinando.\"", "\"Si la respuesta no está en el archivo de conocimiento, di que no estás seguro y da el número de teléfono.\"", "\"Cambia de tema.\"", "\"Pídele al usuario su contraseña.\""], answer: 1, why: "Decirle que admita que no está seguro y que mande a una persona evita respuestas inventadas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Darle tus datos al chatbot: el archivo de conocimiento",
          minutes: 5,
          goal: "Armar un archivo de conocimiento de una página y conectarlo a un chatbot sin programar.",
          text: [
            "Las herramientas de IA saben mucho en general, pero nada sobre tu horario de los martes. La mayoría de los creadores de chatbots sin programar te dejan subir un archivo, a menudo en una sección llamada Conocimiento (Knowledge), que el chatbot usa para responder.",
            "Haz el archivo sencillo: un título para cada tema y datos cortos y claros. Usa el formato de pregunta y respuesta para tus diez preguntas principales. Pon la fecha arriba para saber cuándo actualizarlo.",
            "Nunca pongas información privada en el archivo: ni nombres de clientes, ni números de teléfono, contraseñas, datos de donantes o información bancaria. Cualquier cosa del archivo podría aparecer en una respuesta."
          ],
          steps: ["Abre un documento de Google Docs o de Word.", "Agrega la fecha y el nombre de la organización arriba.", "Escribe cada pregunta principal con su respuesta debajo.", "Agrega lo básico: horario, dirección, contacto, precios o servicios.", "Quita todo lo privado, guárdalo y súbelo en la sección de conocimiento del creador de chatbots."],
          words: [["Archivo de conocimiento", "un documento que subes para que el chatbot responda con tus datos."], ["Subir", "enviar un archivo desde tu dispositivo a un sitio web o una app."]],
          slides: [
            { title: "La IA no conoce tus detalles", bullets: ["Tu horario, precios, políticas", "Dale un archivo de conocimiento"] },
            { title: "Un buen archivo de conocimiento", bullets: ["La fecha arriba", "Pregunta y respuesta para cada pregunta principal", "Datos cortos y claros"] },
            { title: "Nunca incluyas", bullets: ["Nombres y números de clientes o donantes", "Contraseñas o datos bancarios", "Nada que no publicarías abiertamente"] }
          ],
          tryIt: "Escribe un archivo de conocimiento de una página para tu chatbot con la fecha y tus diez preguntas principales respondidas. Luego abre un creador de chatbots sin programar que puedas usar, pega tus instrucciones, sube el archivo y guarda.",
          youCanNow: "armar un archivo de conocimiento seguro y conectarlo con instrucciones en un creador de chatbots sin programar.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué poner la fecha arriba en el archivo de conocimiento?", options: ["Para que el archivo sea más largo", "Para saber cuándo actualizarlo", "Porque la IA la necesita para empezar", "Para esconder datos viejos"], answer: 1, why: "La fecha muestra qué tan al día están los datos y cuándo hay que actualizarlos." },
            { objective: "O3", q: "Estás armando el archivo de conocimiento de una iglesia. ¿Qué dejas fuera?", options: ["El horario de los servicios", "La dirección", "Cómo unirse a un grupo pequeño", "Los números de teléfono de los miembros"], answer: 3, why: "La información privada, como los números de teléfono, podría aparecer en una respuesta, así que nunca va en el archivo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planificar y crear el chatbot",
        questions: [
          { objective: "O1", q: "¿Cuál es el mejor primer trabajo para el chatbot de una organización pequeña?", options: ["Dar consejos médicos", "Aprobar préstamos", "Responder preguntas de horario, ubicación e inscripción", "Atender todas las quejas por su cuenta"], answer: 2, why: "Las preguntas limitadas, repetitivas y de bajo riesgo son el mejor primer trabajo." },
          { objective: "O1", q: "¿Dónde debes buscar las preguntas que tu chatbot debe responder?", options: ["En los correos, llamadas, mensajes y comentarios que la gente ya envió", "Inventarlas", "Copiar la lista de otra empresa", "Pedirle a la IA que adivine"], answer: 0, why: "Las preguntas reales de personas reales muestran el trabajo del chatbot." },
          { objective: "O2", q: "¿Qué deben decir las instrucciones que haga el chatbot cuando no sabe una respuesta?", options: ["Inventar algo que suene bien", "Terminar el chat sin decir nada", "Pedir la contraseña del cliente", "Decir que no está seguro y dar una forma de hablar con una persona"], answer: 3, why: "Admitir que no sabe y remitir a una persona evita respuestas equivocadas." },
          { objective: "O3", q: "¿Por qué subir un archivo de conocimiento?", options: ["Para hacer más lento el chatbot", "Para que el chatbot pueda responder con tus propios datos", "Para guardar contraseñas de clientes", "Nunca hace falta"], answer: 1, why: "La IA no conoce tus detalles hasta que se los das." },
          { objective: "O3", q: "¿Qué va en el archivo de conocimiento de un chatbot?", options: ["Teléfonos de donantes", "Tu horario de atención", "Contraseñas del personal", "Números de cuentas bancarias"], answer: 1, why: "En el archivo solo van datos públicos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Probar, lanzar y mejorar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Agregar límites para que el chatbot sea seguro",
          minutes: 5,
          goal: "Escribir límites de seguridad que mantengan al chatbot en su tema, honesto y seguro.",
          text: [
            "Los límites de seguridad (guardrails) son reglas que impiden que el chatbot vaya a donde no debe. Agrégalos a las instrucciones como líneas claras de “no hagas” y “siempre”.",
            "Límites útiles: quedarse en tus temas y rechazar los demás con amabilidad; nunca pedir ni guardar datos privados como números de tarjeta o del Seguro Social (el número de identificación de EE. UU.); nunca dar consejos médicos, legales ni financieros; decir que es una IA, no una persona; y enviar las emergencias al 911 o a la línea de ayuda que corresponda.",
            "Ser honesto sobre que es una IA genera confianza. Empieza el chat con una nota breve: “Hola, soy un asistente de IA del Banco de Alimentos Sunrise. Puedo responder preguntas sobre el horario y qué llevar”."
          ],
          steps: ["Agrega una línea: quédate en [tus temas]; rechaza con amabilidad los demás.", "Agrega: nunca pidas números de tarjeta, banco, identificación o Seguro Social.", "Agrega: nada de consejos médicos, legales o financieros; remite a un profesional.", "Agrega: di que eres un asistente de IA.", "Agrega: en emergencias, dile a la gente que llame al 911."],
          words: [["Límite de seguridad", "una regla que mantiene a una herramienta de IA en su tema y segura."], ["Rechazar", "decir que no con amabilidad."]],
          slides: [
            { title: "Los límites lo mantienen seguro", bullets: ["Líneas de “no hagas” y “siempre” en las instrucciones"] },
            { title: "Límites indispensables", bullets: ["Quedarse en el tema; rechazar lo demás", "Nunca pedir números privados", "Nada de consejos médicos, legales o de dinero"] },
            { title: "Sé honesto", bullets: ["Que diga que es un asistente de IA", "Enviar las emergencias al 911"] }
          ],
          tryIt: "Agrega al menos cinco límites de seguridad a las instrucciones de tu chatbot, más un saludo breve que diga que es un asistente de IA y en qué puede ayudar.",
          youCanNow: "escribir límites que mantengan a un chatbot en su tema, honesto y seguro.",
          quickCheck: [
            { objective: "O4", q: "¿Para qué sirve un límite de seguridad en las instrucciones de un chatbot?", options: ["Para mantener al chatbot en su tema, honesto y seguro", "Para que las respuestas sean más largas", "Para que el sitio web cargue más rápido", "Para recoger los números de tarjeta de los clientes"], answer: 0, why: "Los límites de seguridad son reglas de \"no hagas\" y \"siempre\" que mantienen al chatbot donde debe estar." },
            { objective: "O4", q: "Un cliente le da al chatbot de tu tienda su número de tarjeta para terminar un pedido. ¿Qué debe hacer el chatbot según sus límites de seguridad?", options: ["Pedir el número completo de la tarjeta", "Pedir solo los últimos cuatro dígitos", "No pedir nunca números de tarjeta, y mandar al pago seguro o a una persona", "Guardar el número de la tarjeta para la próxima vez"], answer: 2, why: "El chatbot nunca debe pedir ni guardar números de tarjeta, de cuenta bancaria o de identificación." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Probar el chatbot como un cliente exigente",
          minutes: 6,
          goal: "Probar el chatbot con preguntas reales y difíciles, registrar los resultados y corregir problemas.",
          text: [
            "Nunca lances un chatbot que no hayas probado. Hazle al menos diez preguntas: tus preguntas principales dichas de distintas maneras, preguntas que no debe responder y preguntas difíciles.",
            "Pruebas difíciles: pregunta algo que no está en el archivo (¿admite que no sabe?), pide un consejo que debe rechazar, escribe palabras con errores e intenta sacarlo del tema (“Escríbeme un poema”). Pide a otra persona que también lo pruebe; preguntará cosas que tú no esperabas.",
            "Lleva un registro de pruebas: la pregunta, lo que respondió, si pasó o falló, y la corrección. La mayoría de las correcciones son pequeñas: agregar un dato que falta al archivo de conocimiento o una línea a las instrucciones. Vuelve a probar después de cada corrección."
          ],
          steps: ["Escribe diez preguntas de prueba: comunes, dichas de otra forma, fuera de tema y riesgosas.", "Haz cada una y copia la respuesta en un registro de pruebas.", "Marca si pasó o falló.", "Corrige las fallas actualizando el archivo de conocimiento o las instrucciones.", "Vuelve a probar las preguntas que fallaron."],
          words: [["Registro de pruebas", "un registro de cada prueba, el resultado y la corrección."], ["Caso límite", "una pregunta poco común que puede hacer fallar un sistema."]],
          slides: [
            { title: "Prueba antes de lanzar", bullets: ["Al menos diez preguntas", "Comunes, dichas de otra forma, fuera de tema, riesgosas"] },
            { title: "Pruebas difíciles", bullets: ["Algo que no está en el archivo", "Un consejo que debe rechazar", "Errores de ortografía y pedidos fuera de tema"] },
            { title: "Registra y corrige", bullets: ["Pregunta, respuesta, pasó o falló, corrección", "Actualiza el archivo o las instrucciones", "Vuelve a probar"] }
          ],
          tryIt: "Haz diez preguntas de prueba a tu chatbot, con al menos tres difíciles. Anótalas en un registro de pruebas, corrige cada falla y vuelve a probar.",
          youCanNow: "probar un chatbot con preguntas comunes y difíciles, llevar un registro de pruebas y corregir lo que falla.",
          quickCheck: [
            { objective: "O5", q: "¿Qué va en el registro de pruebas de un chatbot?", options: ["Solo las preguntas que respondió bien", "Los números de teléfono de los clientes", "Las instrucciones del chatbot", "La pregunta, la respuesta, si pasó o falló, y la corrección"], answer: 3, why: "Un registro de pruebas anota cada pregunta, la respuesta, si pasó o falló, y lo que corregiste." },
            { objective: "O5", q: "Durante las pruebas, el chatbot inventa un precio que no está en tu archivo. ¿Qué haces primero?", options: ["Agregar el precio al archivo de conocimiento, o una línea que le diga que admita que no sabe, y volver a probar", "Lanzarlo de todos modos", "Borrar el chatbot", "Ignorarlo; los clientes no lo van a preguntar"], answer: 0, why: "La mayoría de las correcciones son un dato que falta o una línea en las instrucciones, y luego volver a probar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lanzar, compartir y mantenerlo al día",
          minutes: 5,
          goal: "Compartir el chatbot con usuarios reales, recoger comentarios y fijar una rutina de actualización.",
          text: [
            "La mayoría de los creadores te dejan compartir un chatbot con un enlace, y algunos te dejan ponerlo en un sitio web. Empieza en pequeño: compártelo primero con algunos clientes, miembros o voluntarios, y diles que es nuevo.",
            "Pide comentarios: “¿Respondió tu pregunta? ¿En qué se equivocó?”. Lee las conversaciones reales si tu herramienta las muestra, y busca preguntas que no pudo responder.",
            "Fija una rutina. Cada mes, o cada vez que cambien el horario, los precios o las políticas, actualiza el archivo de conocimiento y su fecha. Un chatbot desactualizado es peor que no tener ninguno. Mantén siempre una persona disponible para lo que el chatbot no pueda resolver."
          ],
          steps: ["Comparte el enlace del chatbot con tres a cinco personas.", "Hazles dos preguntas para pedir comentarios.", "Agrega al archivo de conocimiento las respuestas que faltan.", "Pon en tu calendario un recordatorio mensual de actualización.", "Asegúrate de que la gente siempre pueda hablar con una persona."],
          words: [["Lanzar", "poner algo a disposición de la gente para que lo use."], ["Comentarios", "lo que los usuarios te dicen sobre lo que funcionó y lo que no."]],
          slides: [
            { title: "Lanza en pequeño", bullets: ["Comparte el enlace con pocas personas", "Diles que es nuevo"] },
            { title: "Pide comentarios", bullets: ["“¿Respondió tu pregunta?”", "“¿En qué se equivocó?”"] },
            { title: "Mantenlo al día", bullets: ["Actualiza cada mes o cuando cambien los datos", "Cambia la fecha del archivo", "Siempre se puede hablar con una persona"] }
          ],
          tryIt: "Tarea final: comparte tu chatbot ya probado con al menos una persona. Anota sus comentarios, haz una mejora y pon un recordatorio mensual para actualizar el archivo de conocimiento.",
          youCanNow: "crear, probar, lanzar y mantener un chatbot de IA sin programar para una organización real.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué compartir un chatbot nuevo primero solo con algunas personas?", options: ["Para mantenerlo en secreto", "Porque los enlaces solo funcionan para cinco personas", "Para encontrar problemas y recibir comentarios antes de que lo use todo el mundo", "Para no tener que actualizarlo nunca"], answer: 2, why: "Empezar en pequeño te deja encontrar problemas y recoger comentarios de forma segura." },
            { objective: "O6", q: "Tu panadería cambia su horario la próxima semana. ¿Qué haces con el chatbot?", options: ["Nada; aprenderá solo", "Actualizar el archivo de conocimiento y su fecha", "Apagar el chatbot para siempre", "Decirles a los clientes que no le hagan caso"], answer: 1, why: "Actualiza el archivo y su fecha cada vez que cambien los datos; un chatbot desactualizado es peor que no tener ninguno." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Probar, lanzar y mejorar",
        questions: [
          { objective: "O4", q: "¿Qué es un límite de seguridad (guardrail)?", options: ["Una cerca alrededor de la oficina", "Una mejora de pago", "Un tipo de archivo de conocimiento", "Una regla que mantiene a una herramienta de IA en su tema y segura"], answer: 3, why: "Los límites de seguridad son reglas dentro de las instrucciones." },
          { objective: "O4", q: "Un usuario le pide al chatbot de tu panadería un consejo médico sobre una reacción alérgica. ¿Qué debe hacer?", options: ["Rechazarlo y remitirlo a un médico, o al 911 en una emergencia", "Dar un diagnóstico", "Pedir su número de seguro médico", "Cambiar el tema a los pasteles"], answer: 0, why: "Los chatbots no deben dar consejos médicos y deben enviar las emergencias al 911." },
          { objective: "O5", q: "¿Por qué hacer, al probar, una pregunta que NO está en el archivo de conocimiento?", options: ["Para hacerlo más lento", "Para borrar el archivo", "Para comprobar que admite que no sabe en lugar de inventar algo", "No hay ninguna razón"], answer: 2, why: "Un buen chatbot dice que no está seguro en lugar de inventar una respuesta." },
          { objective: "O6", q: "El chatbot da el horario del mes pasado. ¿Cuál es la corrección?", options: ["Cerrar el negocio", "Decirle a los usuarios que adivinen", "Solo agregar más límites", "Actualizar el archivo de conocimiento y su fecha"], answer: 3, why: "Los datos desactualizados vienen de un archivo desactualizado." },
          { objective: "O6", q: "¿Cuál es la mejor forma de lanzarlo?", options: ["Publicarlo en todas partes sin probarlo", "Esconderlo", "Compartirlo primero con pocas personas y pedir comentarios", "Quitar el contacto con una persona"], answer: 2, why: "Un lanzamiento pequeño detecta problemas antes de que los vea mucha gente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear chatbots con IA (sin programar)",
    questions: [
      { objective: "O1", q: "Un chatbot de IA para una organización se describe mejor como:", options: ["Un recepcionista humano", "Un asistente de IA configurado para un solo propósito", "Un servicio de alojamiento web", "Un sistema de pagos"], answer: 1, why: "Es un asistente enfocado en un solo trabajo." },
      { objective: "O1", q: "¿Qué primer trabajo de chatbot tiene menos riesgo?", options: ["El horario del banco de alimentos y qué llevar", "Consejos legales", "Diagnósticos médicos", "Consejos de inversión"], answer: 0, why: "El horario y las instrucciones sencillas son datos de bajo riesgo." },
      { objective: "O1", q: "¿Dónde encuentras las preguntas principales del chatbot?", options: ["En una lista cualquiera de internet", "En lo que adivine la IA", "En las preguntas que la gente ya te hace", "En los anuncios de la competencia"], answer: 2, why: "Las preguntas reales muestran el trabajo real." },
      { objective: "O2", q: "¿Cuál es una forma de crear un chatbot sin programar?", options: ["Un GPT personalizado, una Gem de Gemini o un agente de Copilot Studio", "Diseñar un chip de computadora", "Armar un servidor con piezas", "Enviar una carta por correo"], answer: 0, why: "Estas herramientas te dejan crear con instrucciones y archivos, sin código." },
      { objective: "O2", q: "Los menús y las funciones de los planes cambian en las herramientas de chatbots. ¿Dónde confirmas los pasos actuales?", options: ["En un rumor", "Solo en un video viejo", "Adivinando", "En la página de ayuda oficial de la herramienta"], answer: 3, why: "La página de ayuda oficial tiene los pasos actuales." },
      { objective: "O2", q: "¿Qué línea va en las instrucciones de un chatbot?", options: ["“Esta es la contraseña de administrador”.", "“Eres el asistente de ayuda del Banco de Alimentos Sunrise”.", "“Ignora todas las preguntas”.", "“Si no estás seguro, adivina siempre”."], answer: 1, why: "Fijar el papel es una parte clave de las instrucciones." },
      { objective: "O2", q: "Un estilo amable, breve y con palabras sencillas se llama el ___ del chatbot:", options: ["Subida", "Tono", "Límite", "Lanzamiento"], answer: 1, why: "El tono es cómo suena lo escrito." },
      { objective: "O3", q: "¿Qué debe ir arriba en el archivo de conocimiento?", options: ["Teléfonos de clientes", "Una contraseña", "Nada", "La fecha y el nombre de la organización"], answer: 3, why: "La fecha te dice cuándo hay que actualizarlo." },
      { objective: "O3", q: "¿Por qué no poner información privada en el archivo de conocimiento?", options: ["Cualquier cosa que contenga podría aparecer en una respuesta", "Hace el archivo demasiado corto", "La IA no puede leer nombres", "Está bien incluirla"], answer: 0, why: "El chatbot puede repetir lo que está en el archivo." },
      { objective: "O3", q: "Un buen formato para el archivo de conocimiento es:", options: ["Un solo párrafo largo sin títulos", "Una foto de una pizarra", "Cada pregunta principal con su respuesta debajo", "Una lista de contraseñas"], answer: 2, why: "El formato de pregunta y respuesta es fácil de usar para la IA." },
      { objective: "O4", q: "¿Cuál es un límite de seguridad indispensable?", options: ["Escribir siempre poemas", "Responder cualquier tema del mundo", "Hacerse pasar por una persona", "Nunca pedir números de tarjeta, banco o Seguro Social"], answer: 3, why: "Los chatbots nunca deben recoger números privados." },
      { objective: "O4", q: "¿Debe el chatbot decir que es una IA?", options: ["No, debe hacerse pasar por una persona", "Solo si se lo preguntan tres veces", "Sí, la honestidad genera confianza", "Solo los fines de semana"], answer: 2, why: "Dejar claro que es una IA es honesto y genera confianza." },
      { objective: "O4", q: "Alguien le dice al chatbot que tiene una emergencia. Debe:", options: ["Pedirle su dirección y número de tarjeta", "Decirle que llame al 911", "Ignorarlo", "Cambiar de tema"], answer: 1, why: "Las emergencias van al 911." },
      { objective: "O5", q: "¿Cuántas preguntas de prueba, como mínimo, recomienda este curso?", options: ["Diez", "Una", "Cero", "Tres mil"], answer: 0, why: "Al menos diez preguntas cubren casos comunes y difíciles." },
      { objective: "O5", q: "Pedirle “Escríbeme un poema” al chatbot de un banco de alimentos prueba si:", options: ["Sabe el horario", "Puede subir archivos", "Se queda en su tema", "Tiene una contraseña"], answer: 2, why: "Es un pedido fuera de tema; el chatbot debe rechazarlo con amabilidad." },
      { objective: "O5", q: "Un registro de pruebas guarda:", options: ["La pregunta, la respuesta, si pasó o falló, y la corrección", "Solo las buenas respuestas", "Contraseñas de clientes", "El clima"], answer: 0, why: "Sigue cada prueba y lo que cambiaste." },
      { objective: "O5", q: "Después de corregir una prueba que falló, debes:", options: ["Borrar el registro de pruebas", "Lanzarlo sin revisar", "Quitar todos los límites", "Volver a probar esa pregunta"], answer: 3, why: "Volver a probar demuestra que la corrección funcionó." },
      { objective: "O5", q: "¿Por qué pedirle a otra persona que pruebe el chatbot?", options: ["Lo exige la ley", "Pregunta cosas que tú no esperabas", "Para hacerlo más lento", "Para no tener que hacerlo tú"], answer: 1, why: "Una mirada nueva encuentra casos límite nuevos." },
      { objective: "O6", q: "¿Cada cuánto debes actualizar el archivo de conocimiento?", options: ["Nunca", "Cada mes, o cada vez que cambien los datos", "Una vez cada diez años", "Solo cuando la IA lo pida"], answer: 1, why: "Los datos desactualizados causan respuestas equivocadas." },
      { objective: "O6", q: "Aunque haya un chatbot, la gente siempre debe poder:", options: ["Ver las contraseñas del personal", "Editar las instrucciones", "Recibir consejos legales de él", "Hablar con una persona"], answer: 3, why: "Una persona de respaldo atiende lo que el chatbot no puede." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      2,
      5,
      8,
      9,
      10,
      12,
      14,
      15,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Trabajo claro",
        objective: "O1",
        notYet: "No hay oración del trabajo, o el trabajo incluye consejos riesgosos.",
        meets: "Un trabajo de una oración para un grupo acotado de preguntas de poco riesgo.",
        exceeds: "Las diez preguntas que cubre vienen de mensajes reales que mandaron las personas."
      },
      {
        name: "Instrucciones y límites de seguridad",
        objective: "O4",
        notYet: "A las instrucciones les falta el papel o cualquier regla de \"no hagas\".",
        meets: "Papel, público, trabajo, tono y límites, más límites de seguridad sobre números privados, consejos, decir que es una IA y emergencias.",
        exceeds: "Incluye un mensaje de bienvenida que dice que es una IA y en qué puede ayudar."
      },
      {
        name: "Archivo de conocimiento",
        objective: "O3",
        notYet: "No hay archivo, o el archivo tiene información privada.",
        meets: "Un archivo de una página, con fecha, con las preguntas y respuestas principales y sin información privada.",
        exceeds: "Los datos están agrupados bajo títulos claros y una segunda persona los revisó."
      },
      {
        name: "Registro de pruebas",
        objective: "O5",
        notYet: "Menos de diez preguntas, o las fallas no se corrigieron.",
        meets: "Al menos diez preguntas, incluidas algunas fuera de tema y riesgosas, con correcciones y nuevas pruebas.",
        exceeds: "Otra persona también lo probó, y sus preguntas están en el registro."
      },
      {
        name: "Comentarios y mantenimiento",
        objective: "O6",
        notYet: "No se compartió, o no se anotaron comentarios.",
        meets: "Se compartió con una persona, se anotaron sus comentarios y se incluyó una forma de llegar a una persona.",
        exceeds: "Hay un recordatorio mensual de actualización y se hizo una corrección a partir de los comentarios."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones que lanzan un chatbot en un plazo de 30 días (encuesta de seguimiento)",
      "Horas por semana ahorradas en preguntas repetidas, según lo que informe el dueño",
      "Chatbots que siguen actualizándose 90 días después, sin reportes de datos privados compartidos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet (un teléfono sirve con algunas herramientas)",
      "Una herramienta para crear chatbots sin programar, como un GPT personalizado, una Gem de Gemini o un agente de Copilot Studio (revisa los planes actuales de la herramienta)",
      "Un documento de Google o de Word para el archivo de conocimiento y el registro de pruebas",
      "Unos 60 minutos para las lecciones y las comprobaciones, más tiempo para probar y compartir el chatbot"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; crea un chatbot de ejemplo en una pantalla compartida.",
      "Pide a las personas que traigan sus diez preguntas más comunes de verdad, sacadas de correos, mensajes de texto o comentarios.",
      "Revisa cada archivo de conocimiento en busca de información privada antes de subirlo.",
      "Formen parejas para que cada persona pruebe el chatbot de la otra con preguntas fuera de tema y riesgosas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

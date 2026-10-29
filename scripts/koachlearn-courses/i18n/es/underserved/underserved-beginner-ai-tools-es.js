"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-beginner-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-beginner-ai-tools-es",
  lang: "es",
  translationOf: "underserved-beginner-ai-tools",
  category: "Undeserved Community",
  name: "Herramientas de IA fáciles para principiantes",
  skills: "Elegir la herramienta de IA gratuita correcta, Hablarle a la IA con tu voz, Traducir con la cámara del teléfono, Hacer un volante sencillo con Canva, Escribir mensajes cortos con un asistente de IA",
  outcome: "elegir la herramienta de IA gratuita correcta para una tarea de todos los días y usarla: hablarle a un asistente con tu voz, traducir un letrero o una carta con la cámara de tu teléfono y hacer un volante sencillo de una página para un evento de la comunidad.",
  about: [
    "Hay muchas herramientas de IA gratuitas y es difícil saber por dónde empezar. Este curso te muestra unas pocas herramientas fáciles para principiantes que no cuestan nada y funcionan en un teléfono o en una computadora de la biblioteca.",
    "Vas a usar tu voz en lugar de escribir, traducir palabras con la cámara del teléfono, escribir mensajes cortos con un asistente de IA y diseñar un volante sencillo con la versión gratuita de Canva.",
    "Cada lección dura unos cinco minutos. Haz la tarea de \"Pruébalo ahora\" después de cada una. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz un volante de una página para un evento de la comunidad real o inventado, como una colecta de alimentos, una limpieza de la cuadra o una recaudación de fondos de la escuela. Usa un asistente de IA para escribir un título corto y tres líneas de detalles, diseña el volante en la versión gratuita de Canva y usa una herramienta de traducción para poner las mismas palabras en un segundo idioma que hablen tus vecinos.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos de comunidades desatendidas que son nuevos con las herramientas de IA: padres y madres, personas mayores, voluntarios de la comunidad, personas sin computadora en casa y personas que en casa hablan un idioma distinto del inglés.",
    startingPoint: "Usan el teléfono para llamar, mandar mensajes y quizás para redes sociales. Han oído hablar de la IA, pero no saben qué herramientas gratuitas existen ni para qué sirve cada una. A algunos les cuesta escribir o lo hacen despacio.",
    gap: "Las herramientas gratuitas pueden escribir mensajes, traducir letreros y cartas y diseñar volantes, pero no saben por dónde empezar. Elegir la herramienta gratuita correcta para cada tarea ahorra tiempo y dinero y les ayuda a compartir noticias con sus vecinos en más de un idioma.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de quinto o sexto grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca",
      "Costo: solo las versiones gratuitas de las herramientas",
      "La traducción automática no es perfecta: los papeles médicos o legales importantes necesitan un intérprete",
      "Privacidad: cerrar la sesión en las computadoras compartidas y dejar los datos privados fuera de los prompts"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una tarea de todos los días", action: "elegir la herramienta gratuita que le queda: un asistente de chat, una aplicación de traducción o una herramienta de diseño", standard: "relacionando al menos 4 de 5 tareas con el tipo de herramienta correcto" },
    { id: "O2", condition: "Con un teléfono o una aplicación de asistente de IA", action: "hacer una pregunta hablando y corregir las palabras que el dictado por voz escribió mal", standard: "antes de enviarla" },
    { id: "O3", condition: "Con un letrero, una etiqueta o un aviso impreso en otro idioma", action: "traducirlo con la cámara del teléfono y decidir cuándo pedir un intérprete o a alguien que lea bien ese idioma", standard: "usando un intérprete para los papeles médicos o legales" },
    { id: "O4", condition: "Con un mensaje que necesitas enviar", action: "pedirle a un asistente de IA un mensaje corto diciendo para quién es, qué debe decir, el tono y el largo, y luego editarlo y revisar cada dato", standard: "para que suene como tú y cada fecha y lugar esté bien" },
    { id: "O5", condition: "Con la versión gratuita de Canva", action: "crear un volante de una página a partir de una plantilla, con un título, qué, cuándo y dónde, y una imagen", standard: "descargado o compartido, y con la sesión cerrada en una computadora compartida" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tu caja de herramientas de IA gratuitas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Elegir la herramienta gratuita correcta para cada tarea",
          minutes: 4,
          goal: "Relacionar una tarea de todos los días con la herramienta de IA gratuita que le queda.",
          text: [
            "Piensa en las herramientas de IA como los utensilios de un cajón de cocina. Cada uno sirve para algo distinto.",
            "Un asistente de chat con IA (ChatGPT, Microsoft Copilot o Google Gemini) sirve para escribir, explicar y planear. Una aplicación de traducción (como Google Translate) sirve para otros idiomas. Una herramienta de diseño (como Canva, que tiene versión gratuita) sirve para volantes y tarjetas.",
            "Empieza por la tarea, no por la herramienta. Pregúntate: ¿necesito que se escriban palabras, que se traduzcan, o algo que se vea bonito para imprimir o compartir?"
          ],
          steps: ["Anota la tarea que necesitas hacer.", "Decide: ¿necesitas palabras escritas, traducidas o diseñadas?", "Elige la herramienta que corresponde: asistente de chat, aplicación de traducción o herramienta de diseño.", "Usa primero la versión gratuita."],
          words: [["Asistente de chat", "un programa de IA al que le escribes o hablas y que te responde por escrito."], ["Versión gratuita", "el nivel sin costo de una herramienta; algunas también venden funciones extra."]],
          slides: [
            { title: "Las herramientas son como un cajón de cocina", bullets: ["Cada herramienta sirve para algo distinto", "Empieza por la tarea, no por la herramienta"] },
            { title: "Tres herramientas gratuitas para empezar", bullets: ["Asistente de chat: escribir, explicar, planear", "Aplicación de traducción: otros idiomas", "Canva gratis: volantes y tarjetas"] },
            { title: "Pregúntate", bullets: ["¿Necesito palabras escritas?", "¿Palabras traducidas?", "¿Algo diseñado para imprimir o compartir?"] }
          ],
          tryIt: "Haz una lista de tres tareas que tienes este mes. Junto a cada una, escribe qué tipo de herramienta le queda: asistente de chat, aplicación de traducción o herramienta de diseño.",
          youCanNow: "relacionar una tarea de todos los días con la herramienta de IA gratuita correcta.",
          quickCheck: [
            { objective: "O1", q: "¿Qué tipo de herramienta es mejor para pasar una carta a otro idioma?", options: ["Una aplicación de traducción", "Una herramienta de diseño", "Un editor de fotos", "Una aplicación de calendario"], answer: 0, why: "Una aplicación de traducción está hecha para pasar las palabras a otro idioma." },
            { objective: "O1", q: "Necesitas una tarjeta de agradecimiento para voluntarios que se vea bonita al imprimirla. ¿Qué abres primero?", options: ["Una aplicación de traducción", "Una herramienta de diseño como Canva", "Una calculadora", "El dictado por voz"], answer: 1, why: "Una herramienta de diseño está hecha para tarjetas y volantes que se ven bien impresos o compartidos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hablarle a la IA con tu voz",
          minutes: 5,
          goal: "Hacerle una pregunta a un asistente de IA hablando en lugar de escribiendo.",
          text: [
            "Si escribir te cuesta o es lento para ti, puedes hablar. La mayoría de las aplicaciones de asistentes de IA tienen un botón de micrófono. Tócalo, di tu pregunta y la aplicación convierte tus palabras en texto.",
            "Los teléfonos también traen dictado por voz en el teclado. Busca un micrófono pequeño en el teclado cuando estés escribiendo un mensaje.",
            "Habla claro y un poco más despacio de lo normal. Di lo que necesitas, por ejemplo: \"Ayúdame a escribir una nota corta a la maestra de mi hijo para decirle que va a faltar a la escuela el viernes por una cita con el médico.\" Lee las palabras antes de enviarlas, porque el dictado por voz puede escuchar mal."
          ],
          steps: ["Abre la aplicación del asistente de IA o un mensaje en tu teléfono.", "Busca el botón de micrófono.", "Tócalo y di tu pregunta con claridad.", "Lee las palabras que escuchó, corrige los errores y envía."],
          words: [["Dictado por voz", "una función del teléfono que convierte lo que dices en palabras escritas."], ["Botón de micrófono", "un botón pequeño con el dibujo de un micrófono que hace que el aparato escuche."]],
          slides: [
            { title: "Habla en lugar de escribir", bullets: ["Casi todas las aplicaciones de IA tienen botón de micrófono", "Los teléfonos traen dictado por voz en el teclado"] },
            { title: "Cómo hablarle", bullets: ["Habla claro, un poco más despacio", "Di lo que necesitas y cómo lo quieres"] },
            { title: "Revisa antes de enviar", bullets: ["El dictado por voz puede escuchar mal", "Léelo, corrígelo y luego envíalo"] }
          ],
          tryIt: "Usa el botón de micrófono para pedirle a un asistente de IA que escriba una nota de dos frases para una maestra, un jefe o un vecino. Léela y corrige los errores.",
          youCanNow: "pedirle ayuda a un asistente de IA con tu voz y revisar lo que escuchó.",
          quickCheck: [
            { objective: "O2", q: "¿Dónde encuentras muchas veces el dictado por voz en un teléfono?", options: ["En los ajustes de la cámara", "En el menú de la batería", "En un micrófono pequeño en el teclado", "En los contactos del teléfono"], answer: 2, why: "Los teclados de los teléfonos muchas veces tienen un botón pequeño de micrófono para el dictado por voz." },
            { objective: "O2", q: "Dictaste una nota y la aplicación escribió \"comparar pan\" en lugar de \"comprar pan\". ¿Qué haces?", options: ["La envías así", "Borras la aplicación", "Empiezas de nuevo en papel", "Corriges las palabras antes de enviarla"], answer: 3, why: "El dictado por voz puede escuchar mal, así que lees y corriges las palabras antes de enviar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Traducir con la cámara del teléfono",
          minutes: 5,
          goal: "Traducir un letrero, una etiqueta o una carta impresa apuntando la cámara del teléfono.",
          text: [
            "Aplicaciones gratuitas como Google Translate pueden leer palabras impresas con la cámara de tu teléfono y mostrarlas en otro idioma. Esto ayuda con letreros, etiquetas de medicinas, avisos de la escuela y formularios escritos en un idioma que no lees bien.",
            "En la aplicación, elige los dos idiomas (el del papel y el que quieres), escoge la opción de cámara y apunta el teléfono a las palabras.",
            "La traducción automática ayuda, pero no es perfecta. Para medicinas, papeles legales o cualquier cosa importante, pide un intérprete. Muchos hospitales, clínicas y oficinas de gobierno lo ofrecen sin costo; pregunta en la recepción."
          ],
          steps: ["Instala una aplicación de traducción gratuita desde la tienda de aplicaciones oficial.", "Elige el idioma del papel y el idioma que quieres.", "Escoge la opción de cámara y apunta el teléfono a las palabras.", "Para papeles importantes, pide a la oficina un intérprete."],
          words: [["Traducir", "pasar palabras de un idioma a otro."], ["Intérprete", "una persona capacitada que traduce lo que se habla entre dos idiomas."]],
          slides: [
            { title: "Tu cámara puede traducir", bullets: ["Letreros, etiquetas, avisos de la escuela, formularios", "Aplicaciones gratuitas como Google Translate"] },
            { title: "Cómo hacerlo", bullets: ["Elige los dos idiomas", "Escoge la opción de cámara", "Apunta el teléfono a las palabras"] },
            { title: "Papeles importantes", bullets: ["La traducción automática no es perfecta", "Pide a la oficina un intérprete", "Muchas clínicas y oficinas lo dan gratis"] }
          ],
          tryIt: "Apunta la cámara de una aplicación de traducción a una etiqueta o letrero impreso de tu casa (una caja de comida sirve). Tradúcelo a otro idioma y de regreso.",
          youCanNow: "traducir palabras impresas con la cámara del teléfono y saber cuándo pedir a una persona.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es cierto sobre la traducción automática?", options: ["Ayuda mucho, pero no es perfecta", "Siempre es exacta", "Solo funciona con el inglés", "Necesita una cuenta de pago"], answer: 0, why: "La traducción gratuita ayuda mucho, pero puede equivocarse." },
            { objective: "O3", q: "La etiqueta de tu medicina está en un idioma que no lees bien. ¿Cuál es el paso más seguro?", options: ["Adivinar por los dibujos", "Pedir un intérprete en la farmacia o la clínica", "Usar solo la traducción con la cámara", "Preguntarle a un desconocido en internet"], answer: 1, why: "Para las medicinas y los papeles legales, la ayuda más segura es un intérprete capacitado." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu caja de herramientas de IA gratuitas",
        questions: [
          { objective: "O1", q: "Necesitas un volante para una venta de pasteles de la escuela. ¿Qué tipo de herramienta te queda mejor?", options: ["Una aplicación de traducción", "Una herramienta de diseño como Canva", "Una calculadora", "Una aplicación de mapas"], answer: 1, why: "Las herramientas de diseño están hechas para volantes y tarjetas." },
          { objective: "O2", q: "Escribir te cuesta. ¿Cómo puedes igual hacerle una pregunta a un asistente de IA?", options: ["No puedes", "Pagar primero una clase de teclado", "Usar el botón de micrófono y hablar", "Pedirle a alguien que escriba tu contraseña"], answer: 2, why: "La entrada por voz te deja hablar en lugar de escribir." },
          { objective: "O2", q: "¿Por qué leer lo que escribió el dictado por voz antes de enviarlo?", options: ["Puede escuchar mal las palabras", "Siempre agrega tu dirección", "Cobra dinero", "Borra tu mensaje"], answer: 0, why: "El dictado por voz se puede equivocar de palabras." },
          { objective: "O3", q: "Quieres leer un letrero en otro idioma. ¿Qué usas?", options: ["Una herramienta de diseño", "Una aplicación de música", "Una linterna", "Una aplicación de traducción con la opción de cámara"], answer: 3, why: "La opción de cámara lee y traduce palabras impresas." },
          { objective: "O3", q: "Necesitas entender las instrucciones de tu médico en otro idioma. ¿Qué es lo mejor?", options: ["Pedir a la clínica un intérprete", "Adivinar", "Usar solo una traducción del teléfono", "Ignorar las instrucciones"], answer: 0, why: "Para medicinas y papeles importantes, un intérprete capacitado es lo más seguro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crear cosas con la IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir mensajes cortos con un asistente de IA",
          minutes: 4,
          goal: "Lograr que un asistente de IA escriba un mensaje corto y claro con el tono que quieres.",
          text: [
            "Un asistente de IA puede escribir mensajes cortos por ti: un recordatorio para tu grupo de la comunidad, una nota al dueño de tu vivienda o un agradecimiento a un voluntario.",
            "Dile para quién es el mensaje, qué debe decir y el tono: amable, cortés o firme. Dile qué tan largo: \"tres frases\" o \"menos de 50 palabras\".",
            "Luego hazlo tuyo. Cambia las palabras que no suenan a ti y revisa tú los nombres, las fechas y los lugares."
          ],
          steps: ["Di para quién es el mensaje.", "Di lo que debe incluir: fecha, hora, lugar, qué llevar.", "Di el tono y el largo.", "Edítalo para que suene a ti y revisa cada dato."],
          words: [["Tono", "cómo suena un mensaje: amable, cortés, serio o firme."]],
          slides: [
            { title: "Mensajes cortos que la IA puede escribir", bullets: ["Recordatorios para tu grupo", "Notas al dueño de tu vivienda o a la escuela", "Agradecimientos a voluntarios"] },
            { title: "Dile cuatro cosas", bullets: ["Para quién es", "Qué debe decir", "El tono", "El largo"] },
            { title: "Hazlo tuyo", bullets: ["Cambia las palabras que no suenan a ti", "Revisa nombres, fechas y lugares"] }
          ],
          tryIt: "Pídele a un asistente de IA: \"Escribe un recordatorio amable de tres frases para mis vecinos sobre una limpieza de la cuadra el sábado a las 9 am. Traigan guantes.\" Luego cambia una línea para que suene a ti.",
          youCanNow: "lograr que un asistente de IA escriba un mensaje corto con el tono y el largo correctos, y luego hacerlo tuyo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa el \"tono\" de un mensaje?", options: ["Qué tan largo es", "Para quién es", "Cómo suena, por ejemplo amable o firme", "La fecha en que se envía"], answer: 2, why: "El tono es cómo le suena el mensaje a quien lo lee." },
            { objective: "O4", q: "El recordatorio que escribió la IA dice que la limpieza es el domingo, pero es el sábado. ¿Qué haces?", options: ["Lo envías; la IA sabe más", "Pides a todos que vengan los dos días", "Borras todo el mensaje", "Lo cambias a sábado antes de enviarlo"], answer: 3, why: "Tú mismo revisas cada dato y lo corriges antes de enviar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Diseñar un volante sencillo con Canva",
          minutes: 6,
          goal: "Hacer un volante de una página en la versión gratuita de Canva.",
          text: [
            "Canva es un sitio web y una aplicación de diseño con versión gratuita. Tiene plantillas ya hechas, así que no necesitas ser artista. Puedes usarlo en canva.com en una computadora de la biblioteca o en su aplicación en tu teléfono.",
            "Busca en Canva una plantilla, como \"volante\" o \"volante de evento\". Haz clic en una que te guste y luego haz clic en sus palabras para cambiarlas por las tuyas. Que sea sencillo: un título grande, tres líneas cortas (qué, cuándo, dónde) y una imagen.",
            "Cuando termines, descárgalo para imprimirlo o compártelo por mensaje de texto o correo. Canva te pide crear una cuenta gratuita; en una computadora compartida, cierra sesión cuando termines."
          ],
          steps: ["Entra a canva.com o abre la aplicación de Canva y crea una cuenta gratuita.", "Busca una plantilla de volante y elige una.", "Haz clic en cada texto y escribe tus propias palabras.", "Deja solo un título, tres líneas cortas y una imagen.", "Descárgalo o compártelo, y cierra sesión en una computadora compartida."],
          words: [["Plantilla", "un diseño ya hecho que llenas con tus propias palabras e imágenes."], ["Descargar", "guardar una copia de un archivo en tu aparato."]],
          slides: [
            { title: "Canva: herramienta de diseño gratuita", bullets: ["Sitio web canva.com o la aplicación de Canva", "Plantillas ya hechas", "No necesitas saber dibujar"] },
            { title: "Haz tu volante", bullets: ["Busca una plantilla de volante", "Haz clic en las palabras y escribe las tuyas", "Título + qué, cuándo, dónde + una imagen"] },
            { title: "Termina y comparte", bullets: ["Descárgalo para imprimir", "Compártelo por mensaje o correo", "Cierra sesión en una computadora compartida"] }
          ],
          tryIt: "Abre Canva, elige una plantilla de volante y cambia las palabras por el recordatorio que escribiste en la lección 4. Descárgalo o guárdalo en tu cuenta.",
          youCanNow: "hacer un volante sencillo y claro con una plantilla gratuita de Canva.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una plantilla en Canva?", options: ["Un diseño ya hecho que llenas con tus palabras", "Un complemento de pago", "Un tipo de impresora", "Un filtro para fotos"], answer: 0, why: "Una plantilla es un diseño ya hecho, así que solo cambias las palabras y las imágenes." },
            { objective: "O5", q: "Tu volante tiene ocho líneas de letra pequeña. ¿Cómo lo haces más fácil de leer?", options: ["Haces la letra más pequeña", "Lo recortas a un título y tres líneas cortas", "Agregas más imágenes", "Usas cinco colores"], answer: 1, why: "Un título grande y tres líneas cortas (qué, cuándo, dónde) son lo más fácil de leer." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Usar las herramientas juntas",
          minutes: 5,
          goal: "Usar juntos un asistente de chat, una herramienta de diseño y una herramienta de traducción para terminar un volante en dos idiomas.",
          text: [
            "Los proyectos reales muchas veces usan más de una herramienta. Para un volante de la comunidad, puedes usar el asistente de chat para escribir las palabras, Canva para diseñarlo y una herramienta de traducción para hacer una segunda versión.",
            "Pide a la IA un título corto y tres líneas de detalles. Pégalos en una plantilla de Canva. Luego traduce las mismas palabras a un segundo idioma que hablen tus vecinos y haz una copia del volante con ellas.",
            "Si puedes, pide a alguien que hable ese idioma que lea la traducción. Las herramientas gratuitas son un buen comienzo; una persona que lo lee lo deja bien."
          ],
          steps: ["Pide a un asistente de chat un título y tres líneas de detalles.", "Pon las palabras en una plantilla de volante de Canva.", "Traduce las palabras a un segundo idioma.", "Haz una copia del volante con la traducción.", "Si puedes, pide a alguien que hable bien ese idioma que lo lea."],
          words: [["Proyecto", "un trabajo con un resultado terminado claro, como un volante."]],
          slides: [
            { title: "Un proyecto, tres herramientas", bullets: ["Asistente de chat: las palabras", "Canva: el diseño", "Aplicación de traducción: un segundo idioma"] },
            { title: "Los pasos", bullets: ["Escribe las palabras con la IA", "Ponlas en una plantilla de Canva", "Traduce y haz una segunda copia"] },
            { title: "Déjalo bien", bullets: ["Revisa cada fecha y lugar", "Pide a alguien que hable el idioma que lea la traducción"] }
          ],
          tryIt: "Tarea final: haz un volante de una página para un evento de la comunidad. Usa un asistente de IA para escribir un título y tres líneas, diséñalo en Canva y haz una segunda copia traducida a otro idioma que hablen tus vecinos.",
          youCanNow: "usar varias herramientas de IA gratuitas juntas para terminar un proyecto real para tu comunidad.",
          quickCheck: [
            { objective: "O5", q: "En el proyecto final, ¿qué pegas en la plantilla de Canva?", options: ["Tu número de teléfono", "Todo el chat con la IA", "El título y las tres líneas que escribió la IA", "Un enlace al sitio web de la IA"], answer: 2, why: "El asistente de chat escribe las palabras y tú las pones en el volante de Canva." },
            { objective: "O3", q: "Tradujiste tu volante al inglés, pero no hablas inglés. ¿Qué haces antes de compartirlo?", options: ["Lo compartes de inmediato", "Lo traduces una segunda vez", "Quitas la copia en inglés", "Le pides a alguien que hable bien inglés que lo lea"], answer: 3, why: "Una persona que lee bien ese idioma encuentra los errores que la herramienta gratuita no vio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crear cosas con la IA",
        questions: [
          { objective: "O4", q: "¿Qué cuatro cosas debes decirle a un asistente de IA al pedirle un mensaje corto?", options: ["Tu contraseña, dirección, edad y banco", "Para quién es, qué debe decir, el tono y el largo", "Solo la fecha", "Nada; él adivina"], answer: 1, why: "Esos cuatro detalles dan un mensaje que encaja." },
          { objective: "O5", q: "¿Qué es una plantilla?", options: ["Un virus", "Una contraseña", "Un diseño ya hecho que llenas con tus palabras", "Una configuración del teléfono"], answer: 2, why: "Las plantillas dejan a los principiantes hacer diseños que se ven bien." },
          { objective: "O5", q: "¿Qué debe incluir un volante sencillo?", options: ["Un título grande y qué, cuándo y dónde", "Diez párrafos", "Tu número de Seguro Social", "Solo imágenes, sin palabras"], answer: 0, why: "Los volantes sencillos se leen fácil: título, detalles y una imagen." },
          { objective: "O5", q: "Usaste Canva en una computadora de la biblioteca. ¿Qué haces al final?", options: ["Dejas tu cuenta abierta", "Guardas tu contraseña en el navegador", "Escribes tu contraseña en la pantalla", "Cierras sesión"], answer: 3, why: "Cerrar sesión protege tu cuenta en una computadora compartida." },
          { objective: "O3", q: "Tradujiste tu volante con una herramienta gratuita. ¿Cómo te aseguras de que está bien?", options: ["Pides a alguien que hable bien el idioma que lo lea", "Lo traduces diez veces más", "Haces la letra más grande", "Agregas más imágenes"], answer: 0, why: "Una persona que lo lee detecta los errores que hacen las máquinas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA fáciles para principiantes",
    questions: [
      { objective: "O1", q: "Al elegir una herramienta de IA, debes empezar por:", options: ["La herramienta más cara", "La tarea que necesitas hacer", "La aplicación más nueva", "Lo que te sugiera un desconocido"], answer: 1, why: "Empieza por la tarea y luego elige la herramienta que le queda." },
      { objective: "O1", q: "¿Qué herramienta es mejor para escribir y explicar?", options: ["Una aplicación de cámara", "Una aplicación de linterna", "Un asistente de chat como Copilot, ChatGPT o Gemini", "Un reproductor de música"], answer: 2, why: "Los asistentes de chat son buenos para escribir, explicar y planear." },
      { objective: "O1", q: "Canva se usa sobre todo para:", options: ["Diseñar volantes y tarjetas", "Hacer trámites del banco", "Hacer llamadas", "Ver el clima"], answer: 0, why: "Canva es una herramienta de diseño con versión gratuita." },
      { objective: "O1", q: "¿Qué debes probar primero al elegir una herramienta?", options: ["El plan más caro", "Un curso pagado", "Un anuncio emergente", "La versión gratuita"], answer: 3, why: "Las versiones gratuitas alcanzan para la mayoría de las tareas de principiante." },
      { objective: "O2", q: "¿Cómo le dices una pregunta en voz alta a la mayoría de las aplicaciones de IA?", options: ["Agitas el teléfono", "Tocas el botón de micrófono", "Apagas el teléfono", "Abres la cámara"], answer: 1, why: "El botón de micrófono hace que la aplicación escuche." },
      { objective: "O2", q: "Al usar el dictado por voz, ayuda:", options: ["Hablar claro y un poco más despacio", "Susurrar", "Hablar muy rápido", "Tapar el micrófono"], answer: 0, why: "Hablar claro y despacio se entiende mejor." },
      { objective: "O2", q: "El dictado por voz escribió \"a la sexta\" en lugar de \"a las seis\". Debes:", options: ["Enviarlo igual", "Borrar la aplicación", "Corregirlo antes de enviar", "Empezar de nuevo en otro teléfono"], answer: 2, why: "Siempre lee y corrige lo que escuchó el dictado por voz." },
      { objective: "O3", q: "Para traducir un aviso impreso de la escuela, puedes:", options: ["Usar una herramienta de diseño", "Usar la opción de cámara de una aplicación de traducción", "Usar la calculadora", "Esperar a que alguien llame"], answer: 1, why: "La opción de cámara lee y traduce palabras impresas." },
      { objective: "O3", q: "En una aplicación de traducción, primero eliges:", options: ["Una contraseña", "Un tipo de letra", "Un color", "El idioma del papel y el idioma que quieres"], answer: 3, why: "La aplicación necesita saber los dos idiomas." },
      { objective: "O3", q: "Para un papel legal en un idioma que no lees bien, la ayuda más segura es:", options: ["Un intérprete capacitado", "Adivinar", "Un meme", "Saltártelo"], answer: 0, why: "Los papeles importantes necesitan a una persona capacitada, no solo una máquina." },
      { objective: "O4", q: "¿Cuál es una buena petición para un mensaje corto?", options: ["\"mensaje\"", "\"Escribe una nota cortés de dos frases al dueño de mi vivienda preguntando cuándo arreglarán la calefacción.\"", "\"escribe\"", "\"cosas para el dueño\""], answer: 1, why: "Dice para quién, qué, el tono y el largo." },
      { objective: "O4", q: "Después de que la IA escribe tu mensaje, debes:", options: ["Enviarlo sin leer", "Agregar tus datos de banco", "Editarlo para que suene a ti y revisar los datos", "Publicarlo para todos"], answer: 2, why: "Lo haces tuyo y revisas nombres, fechas y lugares." },
      { objective: "O4", q: "Tono quiere decir:", options: ["Cómo suena un mensaje, como amable o firme", "El largo del mensaje", "El tamaño de la letra", "El volumen del teléfono"], answer: 0, why: "El tono es cómo se siente el mensaje para quien lo lee." },
      { objective: "O5", q: "¿Qué te pide Canva antes de que puedas diseñar?", options: ["Un pago", "Una llamada", "Una cuenta gratuita", "Un formulario impreso"], answer: 2, why: "Canva usa una cuenta gratuita para guardar tus diseños." },
      { objective: "O5", q: "¿Qué volante es más fácil de leer?", options: ["Una página llena de letra pequeñita", "Un título, tres líneas cortas y una imagen", "Diez imágenes y nada de palabras", "Solo un número de teléfono"], answer: 1, why: "Corto y claro es lo mejor para un volante." },
      { objective: "O5", q: "Para tener una copia de tu volante para imprimir, tú:", options: ["Le tomas una foto a la pantalla", "Cierras el navegador", "Le envías un correo a Canva", "Lo descargas"], answer: 3, why: "Descargarlo guarda una copia que puedes imprimir." },
      { objective: "O1", q: "En el proyecto combinado, ¿qué herramienta escribe las palabras?", options: ["El asistente de chat", "La aplicación de traducción", "La impresora", "La cámara"], answer: 0, why: "El asistente de chat escribe el título y los detalles." },
      { objective: "O3", q: "¿Por qué hacer una segunda copia del volante en otro idioma?", options: ["Se ve más bonito", "Para que más vecinos lo puedan leer", "Canva lo exige", "Para usar más papel"], answer: 1, why: "Un segundo idioma llega a más personas de tu comunidad." },
      { objective: "O4", q: "Antes de compartir el volante terminado, debes revisar:", options: ["El clima", "La batería del teléfono", "Que cada fecha y lugar esté bien", "El color de la impresora"], answer: 2, why: "Datos equivocados en un volante mandan a la gente al lugar equivocado." },
      { objective: "O3", q: "En la tarea final, la última herramienta que usas es:", options: ["Una calculadora", "Una aplicación de música", "Un mapa", "Una herramienta de traducción para la copia en un segundo idioma"], answer: 3, why: "El paso final hace el volante en un segundo idioma." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      6,
      7,
      9,
      10,
      13,
      14,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Palabras del asistente",
        objective: "O4",
        notYet: "No hay título ni detalles, o no se revisaron las palabras.",
        meets: "Un título corto y tres líneas de la IA, editados para que suenen bien, con las fechas y los lugares revisados.",
        exceeds: "Le pidió un cambio a la IA, como un tono más amable o un título más corto."
      },
      {
        name: "Diseño del volante",
        objective: "O5",
        notYet: "No hay volante, o está muy lleno y es difícil de leer.",
        meets: "Un volante de Canva de una página con un título grande, qué, cuándo y dónde, y una imagen.",
        exceeds: "Lo descargó o lo compartió, y se lee bien desde el otro lado de un cuarto."
      },
      {
        name: "Segundo idioma",
        objective: "O3",
        notYet: "No hay copia traducida.",
        meets: "Una segunda copia con las palabras traducidas a un idioma que hablan los vecinos.",
        exceeds: "Una persona que habla bien ese idioma leyó la traducción y se corrigió si hacía falta."
      },
      {
        name: "La herramienta correcta para cada paso",
        objective: "O1",
        notYet: "No puede decir qué herramienta hizo cada trabajo.",
        meets: "Nombra el asistente de chat, Canva y la herramienta de traducción para cada paso.",
        exceeds: "Explica por qué cada herramienta le queda a su trabajo."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que hacen un volante o un mensaje real para un grupo de la comunidad, una escuela o un negocio dentro de 30 días (encuesta de seguimiento)",
      "Los socios de la comunidad reportan más eventos anunciados en dos o más idiomas",
      "Personas que empiezan otro curso de Koach Learn dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o de un centro comunitario",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Una aplicación de traducción gratuita como Google Translate, y una cuenta gratuita de Canva",
      "Una etiqueta o un letrero impreso para practicar la traducción con la cámara",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Forma parejas de personas que hablan idiomas distintos para que lean las traducciones del otro.",
      "Ayuda primero a crear la cuenta de Canva; es lo que más tiempo les toma a los principiantes.",
      "Recuerda a los participantes que las medicinas y los papeles legales necesitan un intérprete, no solo una aplicación.",
      "Asegúrate de que todos cierren su sesión en Canva y en las herramientas de IA en las computadoras compartidas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

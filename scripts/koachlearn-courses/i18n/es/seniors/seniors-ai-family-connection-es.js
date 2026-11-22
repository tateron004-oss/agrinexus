"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-family-connection.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-family-connection-es",
  lang: "es",
  translationOf: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "IA para comunicarte y conectar con tu familia",
  skills: "Escribir mensajes cariñosos con IA, Enviar un mensaje de texto o correo, Unirte a una videollamada, Compartir una foto, Protegerte en los mensajes familiares",
  outcome: "usar un asistente de IA para ayudarte a escribir un mensaje cariñoso a un familiar, enviarlo por mensaje de texto o correo electrónico, y preparar una videollamada con esa persona y unirte a ella.",
  about: [
    "Este curso es para abuelos, padres, tíos y amigos que quieren mantenerse cerca de las personas que quieren, aunque vivan lejos.",
    "Usarás un asistente de IA para encontrar las palabras justas para un cumpleaños, una nota de pronta recuperación o un simple saludo. Luego enviarás tu mensaje, compartirás una foto y te unirás a una videollamada para ver las caras de tu familia.",
    "Cada lección dura unos cinco minutos y avanza paso a paso. Lee la lección, mira las diapositivas y haz la tarea “Pruébalo ahora”. Es buena idea practicar con un familiar que ya use estas herramientas. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Usa un asistente de IA para escribir un mensaje corto y cariñoso que invite a un familiar a una videollamada. Haz un cambio para que suene como tú, envíalo por mensaje de texto o correo, y luego únete a la llamada a la hora acordada y saluda.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores que quieren seguir cerca de sus hijos, nietos y otros parientes que viven lejos o están ocupados. Muchas se sienten excluidas cuando la familia se comunica por mensajes, videollamadas y fotos.",
    startingPoint: "Saben hacer llamadas y quizás enviar mensajes de texto sencillos. Algunas tienen un teléfono inteligente o una tableta, pero no han usado un asistente de IA, ni han copiado y pegado, ni se han unido a una videollamada, ni han compartido una foto.",
    gap: "Hoy la vida familiar pasa por mensajes, videollamadas y fotos compartidas. Las personas mayores que pueden escribir un mensaje cariñoso con ayuda de la IA, enviarlo, unirse a una videollamada y compartir una foto se mantienen conectadas y se sienten menos solas, y las que reconocen una emergencia familiar falsa protegen sus ahorros.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: un teléfono inteligente, una tableta o una computadora con cámara; los botones pequeños pueden ser difíciles de tocar",
      "Tiempo: unos 5 minutos por lección, sin prisa, más una llamada de práctica con la familia",
      "Cada familia usa aplicaciones distintas; cada persona usa la que su familia ya usa",
      "Alto riesgo de estafas: nunca enviar dinero ni códigos antes de llamar a la familia a un número conocido"
    ],
    prerequisites: "Ayuda tomar primero \"IA para personas mayores: cómo usar asistentes de IA\", pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando un asistente de IA gratuito", action: "pedir un borrador de mensaje familiar que diga para quién es, de qué trata, el tono y el largo", standard: "de modo que el primer borrador le quede bien a la persona" },
    { id: "O2", condition: "Con un borrador de la IA", action: "cambiar el borrador para que suene como tú y agregar un detalle personal", standard: "de modo que suene natural al leerlo en voz alta" },
    { id: "O3", condition: "Con un mensaje terminado en la aplicación de IA", action: "copiarlo y pegarlo en un mensaje de texto o un correo, y luego enviarlo", standard: "a la persona correcta, revisado antes de tocar Enviar" },
    { id: "O4", condition: "Con una videollamada o un enlace de un familiar", action: "unirte a la llamada y encender el micrófono y la cámara", standard: "de modo que se te vea y se te oiga con claridad" },
    { id: "O5", condition: "Usando la cámara de tu teléfono o tableta", action: "tomar una foto y compartirla con un familiar con un pie de foto corto", standard: "sin ayuda" },
    { id: "O6", condition: "Cuando un mensaje o una llamada dice que un familiar está en problemas y necesita dinero", action: "reconocer las señales de alerta de una estafa de emergencia familiar y comprobarlo llamando a un número que ya tienes", standard: "sin enviar dinero ni códigos antes de comprobarlo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar las palabras justas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Usar la IA para escribir un mensaje familiar",
          minutes: 5,
          goal: "Pedirle a un asistente de IA que escriba un borrador de un mensaje corto para un familiar.",
          text: [
            "A veces lo más difícil de mantenerse en contacto es saber qué decir. Un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini puede escribirte un primer borrador en segundos.",
            "Dile para quién es el mensaje, de qué se trata y cómo quieres que suene. Por ejemplo: “Escribe un mensaje de texto corto y alegre para mi nieto Leo, que acaba de terminar su primera semana en la universidad. Estoy orgulloso de él. Que tenga menos de 40 palabras.”",
            "El borrador es un punto de partida, no la última palabra. Tú conoces a tu familia; el asistente no."
          ],
          steps: ["Abre tu asistente de IA.", "Di para quién es el mensaje y de qué se trata.", "Di cómo debe sonar: alegre, tierno, gracioso o sencillo.", "Di qué tan largo debe ser."],
          words: [["Borrador", "una primera versión de un mensaje que puedes cambiar antes de enviarlo."], ["Tono", "cómo suena un mensaje, por ejemplo cariñoso, gracioso o serio."]],
          slides: [
            { title: "¿No encuentras las palabras?", bullets: ["Un asistente de IA puede escribir un primer borrador", "Solo tarda unos segundos"] },
            { title: "Dile cuatro cosas", bullets: ["Para quién es", "De qué se trata", "Cómo debe sonar", "Qué tan largo debe ser"] },
            { title: "Recuerda", bullets: ["El borrador es un punto de partida", "Tú conoces mejor a tu familia"] }
          ],
          tryIt: "Piensa en un familiar de quien te gustaría tener noticias. Pídele a un asistente que escriba un mensaje corto y cariñoso para esa persona sobre algo real, como un cumpleaños, un trabajo nuevo o un simple saludo.",
          youCanNow: "pedirle a un asistente de IA que escriba un borrador de un mensaje corto para alguien que quieres.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un borrador de mensaje hecho por la IA?", options: ["El mensaje final que la IA envía por ti", "Un mensaje de tu familia", "Un punto de partida que puedes cambiar", "Un código secreto"], answer: 2, why: "El borrador es un punto de partida; tú conoces a tu familia y el asistente no." },
            { objective: "O1", q: "Quieres un mensaje para el cumpleaños de tu nieta. ¿Qué le dices al asistente?", options: ["Para quién es, de qué trata, cómo debe sonar y qué tan largo debe ser", "Solo la palabra \"cumpleaños\"", "La dirección de su casa y su número de teléfono", "Nada; lo va a adivinar"], answer: 0, why: "Decir para quién, de qué, el tono y el largo te da un borrador que le queda bien." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hacer que el mensaje suene como tú",
          minutes: 4,
          goal: "Cambiar un borrador de la IA para que suene con tu propia voz.",
          text: [
            "Los borradores de la IA pueden sonar un poco rígidos o demasiado elegantes. Tu familia notará si no suena como tú, así que hazlo tuyo.",
            "Puedes pedirle al asistente: “Hazlo sonar más informal.” “Usa palabras más cortas.” “Agrega que voy a hacer su pastel de manzana favorito cuando venga.” O simplemente puedes cambiar las palabras tú mismo.",
            "Agrega un detalle que solo tú sabrías: un apodo, un recuerdo, una broma entre ustedes. Eso es lo que hace que un mensaje se sienta personal."
          ],
          steps: ["Lee el borrador en voz alta.", "Marca las palabras que tú nunca dirías.", "Pide un cambio o cambia las palabras tú mismo.", "Agrega un detalle personal que solo tú conoces."],
          words: [["Detalle personal", "algo propio de ti y de la otra persona, como un recuerdo o un apodo."]],
          slides: [
            { title: "Hazlo tuyo", bullets: ["Lee el borrador en voz alta", "Cambia las palabras que nunca dirías"] },
            { title: "Pide cambios", bullets: ["“Hazlo sonar más informal.”", "“Usa palabras más cortas.”", "“Agrega que voy a hornear su pastel favorito.”"] },
            { title: "Dale un toque personal", bullets: ["Un apodo", "Un recuerdo compartido", "Una broma entre ustedes"] }
          ],
          tryIt: "Toma tu borrador de la Lección 1. Léelo en voz alta, haz un cambio para que suene como tú y agrega un detalle personal.",
          youCanNow: "convertir un borrador de la IA en un mensaje que suena como tú.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué cambiar un borrador de la IA antes de enviarlo?", options: ["La IA hace todos los mensajes demasiado cortos", "Para que suene como tú, porque tu familia notará si no es así", "Porque los borradores de la IA siempre son groseros", "Porque los mensajes de texto deben ser largos"], answer: 1, why: "Los borradores de la IA pueden sonar rígidos; hacerlos tuyos los mantiene personales." },
            { objective: "O2", q: "Tu borrador está bien, pero se siente simple. ¿Qué le agregas?", options: ["Un poema largo", "Los datos de tu banco", "Un detalle que solo tú sabrías, como un apodo o un recuerdo", "Muchas palabras elegantes"], answer: 2, why: "Un apodo, un recuerdo o una broma entre ustedes hace que un mensaje se sienta personal." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Enviar tu mensaje por texto o correo electrónico",
          minutes: 6,
          goal: "Copiar tu mensaje y enviarlo por mensaje de texto o correo electrónico.",
          text: [
            "Cuando tu mensaje esté listo, tienes que pasarlo del asistente de IA a tu aplicación de mensajes o de correo. Esto se hace copiando y pegando.",
            "Para copiar en un teléfono o tableta: mantén el dedo presionado sobre el texto hasta que aparezca un menú y luego toca Copiar. Muchas aplicaciones de IA también muestran un pequeño botón de copiar debajo de la respuesta. En una computadora, selecciona el texto con el ratón, haz clic derecho y elige Copiar.",
            "Luego abre tu aplicación de Mensajes o de correo, empieza un mensaje nuevo para tu familiar, mantén presionado el cuadro de mensaje y toca Pegar (en una computadora, haz clic derecho y elige Pegar). Léelo una última vez y envíalo."
          ],
          steps: ["Copia el mensaje: mantén presionado y toca Copiar, o usa el botón de copiar.", "Abre tu aplicación de Mensajes o de correo.", "Empieza un mensaje nuevo para tu familiar.", "Mantén presionado el cuadro de mensaje y toca Pegar.", "Léelo una vez más y toca Enviar."],
          words: [["Copiar y pegar", "tomar un texto de un lugar y ponerlo en otro, sin volver a escribirlo."], ["Mensaje de texto", "un mensaje escrito corto que se envía de un teléfono a otro."]],
          slides: [
            { title: "Copia el mensaje", bullets: ["Mantén presionado el texto y toca Copiar", "O toca el botón de copiar debajo de la respuesta", "Computadora: clic derecho y Copiar"] },
            { title: "Pégalo", bullets: ["Abre Mensajes o el correo", "Empieza un mensaje nuevo", "Mantén presionado y toca Pegar"] },
            { title: "Antes de enviar", bullets: ["Revisa el nombre de la persona", "Léelo una vez más", "Toca Enviar"] }
          ],
          tryIt: "Copia tu mensaje terminado de la Lección 2 y envíaselo a tu familiar por mensaje de texto o correo electrónico.",
          youCanNow: "copiar un mensaje de un asistente de IA y enviarlo por mensaje de texto o correo electrónico.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace pegar?", options: ["Pone el texto que copiaste en otro lugar", "Borra tu mensaje", "Envía el mensaje de inmediato", "Toma una foto"], answer: 0, why: "Copias el texto en una aplicación y lo pegas en el cuadro de mensajes de otra." },
            { objective: "O3", q: "Ya copiaste tu mensaje de la aplicación de IA. ¿Qué haces después?", options: ["Apagar tu teléfono", "Copiarlo otra vez", "Llamar a tu familiar", "Abrir Mensajes o el correo, empezar un mensaje para esa persona y pegarlo"], answer: 3, why: "Abre la aplicación de Mensajes o de correo, empieza un mensaje nuevo y pega el texto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar las palabras justas",
        questions: [
          { objective: "O1", q: "¿Qué debes decirle al asistente de IA cuando le pides un mensaje familiar?", options: ["Tu número de banco", "Solo una palabra", "Para quién es, de qué se trata, el tono y el largo", "Tu contraseña"], answer: 2, why: "Esas cuatro cosas ayudan al asistente a escribir un borrador útil." },
          { objective: "O2", q: "El borrador suena demasiado elegante. ¿Qué haces?", options: ["Le pides que suene más informal o cambias las palabras tú mismo", "Borras la aplicación", "Lo envías igual", "Te rindes"], answer: 0, why: "Puedes pedir cambios o editarlo para que suene como tú." },
          { objective: "O2", q: "¿Qué hace que un mensaje se sienta personal?", options: ["Copiar una tarjeta de una tienda", "Palabras muy largas", "Muchos signos de exclamación", "Un detalle que solo tú sabrías, como un recuerdo"], answer: 3, why: "Un recuerdo compartido o un apodo lo hacen tuyo." },
          { objective: "O3", q: "En un teléfono, ¿cómo sueles copiar un texto?", options: ["Sacudes el teléfono", "Mantienes presionado el texto y tocas Copiar", "Apagas el teléfono", "Le tomas una foto"], answer: 1, why: "Mantener presionado abre un menú con Copiar." },
          { objective: "O3", q: "¿Qué debes revisar antes de tocar Enviar?", options: ["Solo el nivel de batería", "Que va a la persona correcta", "Nada", "El clima"], answer: 1, why: "Revisar el nombre evita enviar tu mensaje a la persona equivocada." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ver y compartir con la familia",
      lessons: [
        {
          objectives: ["O4"],
          title: "Unirte a una videollamada",
          minutes: 6,
          goal: "Unirte a una videollamada con un familiar y usar la cámara y el micrófono.",
          text: [
            "Una videollamada te deja ver y oír a alguien al mismo tiempo, desde cualquier lugar. Algunas aplicaciones gratuitas comunes son FaceTime (en iPhone y iPad), WhatsApp, Google Meet y Zoom. Las familias suelen elegir la que la mayoría ya usa.",
            "La forma más fácil de empezar es dejar que un familiar te llame. Cuando entre la llamada, toca el botón verde o Aceptar. Si te envían un enlace, tócalo a la hora acordada y luego toca Unirse.",
            "Ya dentro de la llamada, busca los botones del micrófono y de la cámara. Si un botón tiene una línea encima, está apagado; tócalo para encenderlo. Sostén el aparato a la altura de los ojos, con la luz delante de ti y no detrás, para que puedan ver tu cara."
          ],
          steps: ["Acuerda una hora y una aplicación con tu familiar.", "Cuando entre la llamada, toca Aceptar, o toca el enlace que te enviaron y luego Unirse.", "Revisa que el micrófono y la cámara estén encendidos.", "Sostén el aparato a la altura de los ojos con la luz delante de ti.", "Toca el botón rojo para terminar la llamada."],
          words: [["Videollamada", "una llamada en la que pueden verse y oírse en la pantalla."], ["Enlace", "texto azul o subrayado que tocas para ir a algún lugar, como una llamada."], ["Silenciar", "apagar tu micrófono para que los demás no te oigan."]],
          slides: [
            { title: "Aplicaciones gratuitas de videollamada", bullets: ["FaceTime en iPhone y iPad", "WhatsApp, Google Meet, Zoom", "Usa la que usa tu familia"] },
            { title: "Cómo unirte", bullets: ["Toca Aceptar cuando te llamen", "O toca su enlace y luego Unirse", "Únete a la hora acordada"] },
            { title: "Durante la llamada", bullets: ["Una línea sobre un botón significa que está apagado", "Enciende el micrófono y la cámara", "El botón rojo termina la llamada"] },
            { title: "Que te vean bien", bullets: ["Aparato a la altura de los ojos", "Luz delante de ti, no detrás"] }
          ],
          tryIt: "Pide a un familiar que te llame por la aplicación que usa. Contesta, revisa que tu cámara y tu micrófono estén encendidos, saluda y luego termina la llamada con el botón rojo.",
          youCanNow: "unirte a una videollamada, encender y apagar la cámara y el micrófono, y terminar la llamada.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es una videollamada?", options: ["Una película grabada", "Una llamada en la que se ven y se oyen al mismo tiempo", "Un mensaje de voz", "Un álbum de fotos"], answer: 1, why: "Una videollamada te deja ver y oír a alguien al mismo tiempo, desde cualquier lugar." },
            { objective: "O4", q: "En una videollamada, tu familia dice que no te ve bien la cara. ¿Qué cambias?", options: ["Subir el volumen", "Terminar la llamada", "Sentarte con una ventana con mucha luz detrás de ti", "Sostener el dispositivo a la altura de los ojos, con la luz delante de ti"], answer: 3, why: "A la altura de los ojos y con luz delante de ti, pueden ver tu cara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Compartir una foto con la familia",
          minutes: 5,
          goal: "Tomar una foto y enviársela a un familiar.",
          text: [
            "Compartir fotos es una de las mejores maneras de mantenerse cerca. Puedes enviar una foto de tu jardín, de una comida que cocinaste o de una página de un álbum de fotos viejo.",
            "Abre la aplicación Cámara, apunta a lo que quieres y toca el botón redondo grande. Para enviarla, abre la aplicación Fotos o Galería, toca la foto y luego el botón Compartir (a menudo un cuadrado con una flecha, o tres puntos unidos por líneas). Elige Mensajes, correo o WhatsApp, y luego a tu familiar.",
            "Un asistente de IA te puede ayudar a escribir un pie de foto, por ejemplo: “Escribe un pie de foto corto y divertido para una foto de mi primer tomate maduro del verano.”"
          ],
          steps: ["Abre la aplicación Cámara y toca el botón redondo.", "Abre Fotos o Galería y toca la foto.", "Toca el botón Compartir.", "Elige Mensajes, correo o WhatsApp, y luego a tu familiar.", "Agrega unas palabras y envía."],
          words: [["Botón Compartir", "un botón que envía una foto o una página a otra persona."], ["Pie de foto", "una línea corta de texto que acompaña a una foto."]],
          slides: [
            { title: "Toma la foto", bullets: ["Abre la aplicación Cámara", "Toca el botón redondo grande"] },
            { title: "Envía la foto", bullets: ["Abre Fotos o Galería", "Toca la foto y luego el botón Compartir", "Elige una aplicación y luego a tu familiar"] },
            { title: "Agrega un pie de foto", bullets: ["Escribe unas palabras tú mismo", "O pídele a la IA un pie de foto corto y divertido"] }
          ],
          tryIt: "Toma una foto de algo de lo que estés orgulloso. Pídele a un asistente de IA un pie de foto corto y luego envía la foto con el pie de foto a un familiar.",
          youCanNow: "tomar una foto, agregarle un pie de foto y compartirla con tu familia.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace el botón Compartir en la aplicación Fotos?", options: ["Borra la foto", "Agranda la foto", "Te deja enviar la foto por Mensajes, correo o WhatsApp", "Toma una foto nueva"], answer: 2, why: "Toca la foto, toca Compartir y luego elige cómo y a quién enviarla." },
            { objective: "O5", q: "Quieres unas palabras divertidas para acompañar una foto de tu jardín. ¿Qué puedes hacer?", options: ["Pedirle a un asistente de IA que escriba un pie de foto corto", "Enviar siempre la foto sin palabras", "Publicarla para desconocidos", "Tomar diez fotos más"], answer: 0, why: "Un asistente de IA te puede ayudar a escribir un pie de foto corto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protegerte en los mensajes familiares",
          minutes: 5,
          goal: "Detectar un mensaje falso de “emergencia familiar” y comprobarlo con seguridad.",
          text: [
            "A veces los estafadores se hacen pasar por un nieto o un pariente en problemas. Pueden escribir desde un número nuevo (“Hola abuela, perdí mi teléfono”) o incluso usar IA para copiar una voz por teléfono. Casi siempre piden dinero rápido, a menudo con tarjetas de regalo, giros o aplicaciones de pago, y te piden que lo guardes en secreto.",
            "La familia de verdad puede esperar unos minutos mientras compruebas. Cuelga o deja de responder, y luego llama a tu familiar, o a su padre o madre, al número que ya tienes guardado.",
            "Algunas familias acuerdan una palabra secreta que solo ellos conocen, para usarla en una emergencia. Nunca envíes dinero hasta haber hablado con la persona a un número de confianza. Puedes denunciar estafas ante la Federal Trade Commission (FTC, la Comisión Federal de Comercio de Estados Unidos) en ReportFraud.ftc.gov."
          ],
          steps: ["Fíjate en las señales: número nuevo, prisa, pedido de dinero, guardar el secreto.", "Deja de responder o cuelga.", "Llama a tu familiar al número que ya tienes.", "Acuerden una palabra clave familiar para emergencias.", "Denuncia las estafas en ReportFraud.ftc.gov."],
          words: [["Estafa del abuelo", "un engaño en el que alguien se hace pasar por un nieto en problemas para conseguir dinero."], ["Palabra clave", "una palabra secreta que tu familia acuerda para demostrar quién llama de verdad."]],
          slides: [
            { title: "La emergencia falsa", bullets: ["“Hola abuela, perdí mi teléfono”", "Una voz copiada por teléfono", "Pide dinero rápido y en secreto"] },
            { title: "Qué hacer", bullets: ["Deja de responder o cuelga", "Llámalo al número que ya tienes", "Nunca envíes dinero hasta estar seguro"] },
            { title: "Prepárate", bullets: ["Acuerden una palabra clave familiar", "Denuncia estafas en ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa (en inglés)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Denunciar un fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Tarea final: pídele a un asistente de IA que te ayude a escribir un mensaje corto y cariñoso para invitar a un familiar a una videollamada. Haz que suene como tú, envíalo por mensaje de texto o correo y únete a la llamada a la hora acordada. Mientras hablan, acuerden una palabra clave familiar.",
          youCanNow: "mantenerte en contacto con tu familia por mensaje, foto y videollamada, y comprobar con seguridad un mensaje “familiar” sospechoso.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una palabra clave familiar?", options: ["La contraseña de tu teléfono", "Una palabra que solo tu familia conoce, para comprobar quién llama en una emergencia", "El nombre de tu aplicación de video", "Una palabra que publicas en internet"], answer: 1, why: "Algunas familias acuerdan una palabra secreta para comprobar quién llama de verdad." },
            { objective: "O6", q: "Una voz que suena como la de tu nieto te pide que envíes dinero rápido y lo guardes en secreto. ¿Qué haces primero?", options: ["Enviar el dinero y preguntar después", "Guardar el secreto como te pidió", "Detenerte y llamar a tu nieto o a uno de sus padres al número que ya tienes", "Darle el código de tu teléfono"], answer: 2, why: "La prisa, el secreto y los pedidos de dinero son señales de estafa; vuelve a llamar a un número de confianza." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Ver y compartir con la familia",
        questions: [
          { objective: "O4", q: "Un familiar te envía un enlace para una videollamada. ¿Qué haces a la hora acordada?", options: ["Lo borras", "Apagas tu teléfono", "Se lo reenvías a desconocidos", "Tocas el enlace y luego Unirse"], answer: 3, why: "Tocar el enlace y Unirse te lleva a la llamada." },
          { objective: "O4", q: "El botón del micrófono tiene una línea encima. ¿Qué significa?", options: ["Tu micrófono está apagado", "La llamada terminó", "Queda poca batería", "Tu cámara está rota"], answer: 0, why: "Una línea sobre un botón significa que está apagado." },
          { objective: "O4", q: "¿Dónde debe estar la luz durante una videollamada?", options: ["Detrás de ti", "No debe haber luz", "Delante de ti", "Debajo de la mesa"], answer: 2, why: "La luz delante de ti deja que tu familia vea tu cara." },
          { objective: "O5", q: "¿Cómo envías una foto desde tu aplicación Fotos?", options: ["Pones el teléfono al revés", "Tomas una captura de la batería", "Borras la foto", "Tocas la foto, luego el botón Compartir y eliges a una persona"], answer: 3, why: "El botón Compartir envía la foto por la aplicación y a la persona que elijas." },
          { objective: "O6", q: "Un mensaje de un número nuevo dice “Abuelo, estoy en problemas, envíame tarjetas de regalo y no le digas a mamá.” ¿Qué haces?", options: ["Compras las tarjetas de regalo", "Respondes con tu número de banco", "Llamas a tu nieto o a su padre o madre al número que ya tienes", "Lo guardas en secreto"], answer: 2, why: "La prisa, el secreto y las tarjetas de regalo son señales de estafa; comprueba en un número de confianza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para comunicarte y conectar con tu familia",
    questions: [
      { objective: "O1", q: "¿Cómo puede ayudarte un asistente de IA a mantenerte en contacto con tu familia?", options: ["Puede visitarlos por ti", "Puede escribir un primer borrador de un mensaje", "Sabe sus números de teléfono", "Envía dinero por ti"], answer: 1, why: "Redactar mensajes es uno de los puntos fuertes de los asistentes de IA." },
      { objective: "O1", q: "¿Qué instrucción dará el mejor mensaje familiar?", options: ["“Escribe un mensaje corto y alegre para mi nieta Ava, que ganó su partido de fútbol. Que tenga menos de 40 palabras.”", "“mensaje”", "“texto”", "“hola”"], answer: 0, why: "Dice para quién es, de qué se trata, el tono y el largo." },
      { objective: "O1", q: "¿Qué es un borrador?", options: ["Una primera versión que puedes cambiar", "Un viento frío", "La copia final", "Un tipo de aplicación"], answer: 0, why: "Un borrador es un punto de partida que puedes mejorar." },
      { objective: "O1", q: "¿Qué significa “tono” en un mensaje?", options: ["El timbre del teléfono", "Cómo suena el mensaje, por ejemplo cariñoso o gracioso", "El tamaño de la letra", "El número de teléfono"], answer: 1, why: "El tono es cómo se siente el mensaje para quien lo lee." },
      { objective: "O2", q: "Una buena manera de comprobar si un borrador suena como tú es:", options: ["Enviarlo sin leerlo", "Hacerlo más largo", "Leerlo en voz alta", "Agregar palabras difíciles"], answer: 2, why: "Leer en voz alta muestra las palabras que tú nunca dirías." },
      { objective: "O2", q: "¿Qué hace que un mensaje se sienta personal?", options: ["Palabras elegantes", "Escribir todo en mayúsculas", "Copiarlo de una tarjeta", "Un recuerdo compartido o un apodo"], answer: 3, why: "Los detalles que solo tú conoces lo hacen tuyo." },
      { objective: "O3", q: "Para copiar un texto en un teléfono, por lo general:", options: ["Tocas la cámara", "Sacudes el teléfono", "Mantienes presionado y tocas Copiar", "Subes el volumen"], answer: 2, why: "Mantener presionado abre el menú de Copiar." },
      { objective: "O3", q: "Después de copiar, ¿cómo pones el mensaje en un mensaje de texto?", options: ["Mantienes presionado el cuadro de mensaje y tocas Pegar", "Vuelves a escribir cada palabra", "Tomas una foto", "Llamas a la persona"], answer: 0, why: "Pegar pone el texto copiado en el cuadro de mensaje." },
      { objective: "O3", q: "¿Qué debes revisar antes de tocar Enviar?", options: ["Nada", "El clima", "Tu contraseña", "El nombre de la persona"], answer: 3, why: "Revisar el nombre evita enviarlo a la persona equivocada." },
      { objective: "O4", q: "¿Cuál de estas es una aplicación de videollamada?", options: ["Calculadora", "FaceTime", "Reloj", "Linterna"], answer: 1, why: "FaceTime, WhatsApp, Google Meet y Zoom ofrecen videollamadas." },
      { objective: "O4", q: "Cuando un familiar te hace una videollamada, tocas:", options: ["El botón rojo", "El botón verde o Aceptar", "El carrete de fotos", "Ajustes"], answer: 1, why: "El verde o Aceptar contesta la llamada; el rojo la termina." },
      { objective: "O4", q: "Un botón con una línea encima está:", options: ["Encendido", "Grabando", "Roto", "Apagado"], answer: 3, why: "Una línea encima significa que está apagado." },
      { objective: "O4", q: "Para terminar una videollamada, por lo general tocas:", options: ["El botón rojo", "El botón verde", "El botón del volumen", "El micrófono"], answer: 0, why: "El botón rojo termina la llamada." },
      { objective: "O4", q: "¿Dónde debes sostener el aparato en una videollamada?", options: ["Cerca del suelo", "Detrás de tu cabeza", "A la altura de los ojos", "En tu bolsillo"], answer: 2, why: "A la altura de los ojos, tu familia puede ver tu cara." },
      { objective: "O5", q: "El botón Compartir se usa para:", options: ["Borrar una foto", "Apagar el teléfono", "Tomar una foto", "Enviar una foto a alguien"], answer: 3, why: "Compartir envía la foto por la aplicación que elijas." },
      { objective: "O5", q: "Un pie de foto es:", options: ["Un número de teléfono", "Un tipo de cámara", "Una línea corta de texto que acompaña a una foto", "Una contraseña"], answer: 2, why: "Un pie de foto describe la foto." },
      { objective: "O6", q: "Un mensaje de un número nuevo dice que es tu nieto y que necesita dinero rápido. Lo primero que debes hacer es:", options: ["Enviar dinero", "Detenerte y llamar a tu nieto al número que ya tienes", "Compartir tus datos bancarios", "Guardar el secreto"], answer: 1, why: "Comprobar en un número conocido detiene esta estafa." },
      { objective: "O6", q: "Los estafadores pueden usar la IA para:", options: ["Copiar la voz de un familiar", "Arreglar tu teléfono", "Enviarte una carta del banco", "Visitar tu casa"], answer: 0, why: "La copia de voces con IA se usa en las estafas de emergencia familiar." },
      { objective: "O6", q: "¿Para qué sirve una palabra clave familiar?", options: ["Para demostrar quién llama de verdad en una emergencia", "Para desbloquear tu teléfono", "Para que las videollamadas se vean mejor", "Para pagar cuentas"], answer: 0, why: "Solo tu familia de verdad conoce la palabra clave." },
      { objective: "O6", q: "¿Dónde puedes denunciar una estafa en Estados Unidos?", options: ["En un anuncio emergente", "En ReportFraud.ftc.gov", "Al número de quien llama", "En un comentario de redes sociales"], answer: 1, why: "La Federal Trade Commission recibe denuncias de estafas en ReportFraud.ftc.gov." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      6,
      9,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Pedido claro a la IA",
        objective: "O1",
        notYet: "La instrucción solo dice \"escribe un mensaje\".",
        meets: "La instrucción dice para quién es, que es una invitación a una videollamada, el tono y el largo.",
        exceeds: "El primer borrador casi no necesitó cambios."
      },
      {
        name: "Suena como tú",
        objective: "O2",
        notYet: "Envió el borrador de la IA tal como estaba.",
        meets: "Hizo al menos un cambio para que suene como él o ella.",
        exceeds: "Agregó un detalle personal que solo él o ella sabría, como un apodo o un recuerdo."
      },
      {
        name: "Enviado a la persona correcta",
        objective: "O3",
        notYet: "El mensaje no se envió, o le llegó a la persona equivocada.",
        meets: "Copió, pegó y envió el mensaje por texto o correo a la persona correcta.",
        exceeds: "Revisó el nombre y las palabras una vez más antes de enviarlo."
      },
      {
        name: "Se unió a la llamada",
        objective: "O4",
        notYet: "No pudo unirse, o el micrófono o la cámara se quedaron apagados.",
        meets: "Se unió a la hora acordada con el micrófono y la cámara encendidos, y saludó.",
        exceeds: "Sostuvo el dispositivo a la altura de los ojos con buena luz y terminó la llamada con el botón rojo."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen haber tenido una videollamada o compartido una foto con la familia dentro de 30 días (encuesta de seguimiento)",
      "Personas cuya familia acuerda una palabra clave familiar, y que dicen haber comprobado un mensaje familiar sospechoso",
      "Personas que empiezan otro curso de tecnología para personas mayores dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente, una tableta o una computadora con cámara e internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini) y la aplicación de videollamadas que usa la familia",
      "Un familiar o ayudante que acepte participar en una videollamada de práctica",
      "Unos 60 minutos en total, en sesiones cortas y sin prisa: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Antes del curso, pregunta qué aplicación de video usa ya la familia de cada persona y practiquen con esa.",
      "Organiza videollamadas de práctica entre las personas del grupo antes de llamar a la familia.",
      "Muestra los pasos para copiar y pegar en el propio dispositivo de cada persona; los menús se ven distintos en cada teléfono.",
      "Habla de la estafa de emergencia familiar con una práctica de roles, y anima a las personas a acordar una palabra clave familiar.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

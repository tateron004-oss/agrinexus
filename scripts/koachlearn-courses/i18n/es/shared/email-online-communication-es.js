"use strict";

// Koach Learn course (shared), Spanish translation of shared/email-online-communication.js. See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "email-online-communication-es",
  lang: "es",
  translationOf: "email-online-communication",
  category: "Seniors and Technology",
  name: "Correo electrónico y comunicación en línea",
  skills: "Crear una cuenta de correo gratuita, Escribir un correo claro, Responder y adjuntar un archivo, Detectar correos de phishing, Unirse a una videollamada",
  outcome: "crear una cuenta de correo gratuita, escribir y enviar un correo claro y amable con un archivo adjunto, responder mensajes, detectar un correo falso (phishing) y unirte a una videollamada desde un enlace.",
  about: [
    "Hoy los consultorios médicos, los empleadores, los arrendadores, las escuelas y las familias se comunican contigo por correo electrónico y videollamadas. Este curso te enseña a usarlos, un pequeño paso a la vez.",
    "Vas a crear una cuenta de correo gratuita, escribir un mensaje claro, responder, adjuntar un archivo, proteger tu bandeja de entrada de las estafas y unirte a una videollamada.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una breve comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Envía un correo claro y amable a un amigo, un familiar o a ti mismo con una línea de asunto, un saludo, dos o tres oraciones cortas, una despedida y un archivo adjunto (una foto o un documento). Luego responde a un correo que recibiste y anota dos señales de alerta que buscarías antes de hacer clic en cualquier enlace.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que necesitan el correo y las videollamadas para la vida diaria: personas mayores que se mantienen en contacto con su familia, personas que buscan trabajo, pacientes, padres que tratan con escuelas, voluntarios y personas que regresan a la comunidad.",
    startingPoint: "Pueden usar un teléfono o una computadora para abrir aplicaciones y escribir mensajes cortos. Muchos no tienen cuenta de correo o tienen una que casi no usan, y pocos saben bien cómo adjuntar un archivo, escribir una línea de asunto clara, detectar un correo de phishing o unirse a una videollamada desde un enlace.",
    gap: "Los empleadores, los médicos, las escuelas y las oficinas de gobierno envían correos y esperan recibirlos, y muchas citas y entrevistas son por videollamada. Sin estas habilidades, las personas se pierden mensajes, envían correos poco claros o poco profesionales, caen en correos de estafa o no pueden unirse a una cita.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican palabras como línea de asunto, archivo adjunto y phishing",
      "Dispositivos: un teléfono, una tableta o una computadora con internet",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total",
      "Costo: correo gratuito (Gmail, Outlook.com o Yahoo Mail) y aplicaciones de videollamada gratuitas",
      "Privacidad: nunca se ponen números de Seguro Social, números bancarios ni contraseñas en un correo o un chat"
    ],
    prerequisites: "Ninguno. Fundamentos de internet ayuda a quienes no han usado un navegador web."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En el sitio web o la aplicación oficial de un servicio de correo gratuito", action: "crear una cuenta de correo con una dirección profesional y una contraseña segura e iniciar sesión en ella", standard: "agregando un teléfono o un correo de respaldo para poder volver a entrar" },
    { id: "O2", condition: "Cuando tienes un motivo para escribir", action: "escribir y enviar un correo con línea de asunto, saludo, mensaje corto y despedida", standard: "con todas las partes y revisando la dirección en \"Para\" antes de enviar" },
    { id: "O3", condition: "Con correos que recibiste", action: "responder, reenviar y adjuntar un archivo, eligiendo bien entre Responder y Responder a todos", standard: "con el archivo adjunto y la respuesta enviada solo a las personas que la necesitan" },
    { id: "O4", condition: "Ante un correo sospechoso", action: "identificar sus señales de alerta de phishing y elegir un siguiente paso seguro", standard: "nombrando al menos dos señales y sin hacer clic nunca en el enlace ni pagar" },
    { id: "O5", condition: "Cuando le escribes a cualquier persona en línea", action: "escribir un mensaje amable y claro que no incluya información privada", standard: "con un saludo, sin TODO EN MAYÚSCULAS y sin números privados ni contraseñas" },
    { id: "O6", condition: "Con el enlace de una videollamada", action: "unirte a la llamada y usar los botones de silencio y cámara", standard: "uniéndote a tiempo y silenciando el micrófono cuando no hablas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Lo básico del correo electrónico",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conseguir una cuenta de correo gratuita",
          minutes: 5,
          goal: "Crear una cuenta de correo gratuita e iniciar sesión en ella.",
          text: [
            "Una dirección de correo es como la dirección de una casa, pero para mensajes. Se ve así: nombre@gmail.com: el nombre que elegiste, el signo @ (arroba) y luego la empresa que maneja el correo.",
            "Algunos servicios de correo gratuitos son Gmail de Google, Outlook.com de Microsoft y Yahoo Mail. Para registrarte, ve al sitio web de la propia empresa o instala su aplicación oficial y elige \"Crear cuenta\".",
            "Elige una dirección que suene profesional, como tu nombre y apellido, porque la verán los empleadores y los médicos. Elige una contraseña segura que no uses en ningún otro lugar y agrega un número de teléfono o un correo de respaldo para poder volver a entrar si la olvidas."
          ],
          steps: ["Ve a gmail.com, outlook.com o a la aplicación oficial de correo.", "Elige \"Crear cuenta\".", "Elige una dirección profesional, como nombre.apellido.", "Haz una contraseña larga que no uses en ningún otro lugar.", "Agrega un número de teléfono o un correo de respaldo para recuperar la cuenta.", "Anota tu nueva dirección y guarda la contraseña en un lugar seguro."],
          words: [["Dirección de correo", "tu dirección para recibir mensajes, como nombre@gmail.com."], ["Contraseña", "una palabra o frase secreta que solo te deja entrar a ti en tu cuenta."], ["Recuperación de la cuenta", "la forma de volver a entrar en tu cuenta si olvidas tu contraseña, normalmente con un código que llega a tu teléfono."]],
          slides: [
            { title: "Una dirección de correo", bullets: ["Se ve así: nombre@gmail.com", "Tu nombre, el signo @ y luego la empresa de correo"] },
            { title: "Servicios de correo gratuitos", bullets: ["Gmail de Google", "Outlook.com de Microsoft", "Yahoo Mail"] },
            { title: "Registrarse bien", bullets: ["Elige una dirección profesional: tu nombre y apellido", "Usa una contraseña larga que no uses en otro lugar", "Agrega un teléfono para recuperar la cuenta"] }
          ],
          tryIt: "Crea una cuenta de correo gratuita (o abre la que ya tienes). Cierra la sesión y vuelve a iniciarla, para saber que puedes entrar por tu cuenta.",
          youCanNow: "crear una cuenta de correo gratuita con una dirección profesional e iniciar sesión en ella.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace el signo @ en una dirección de correo?", options: ["Separa el nombre que elegiste de la empresa que maneja el correo", "Hace privada la dirección", "Significa que el correo es urgente", "Muestra la contraseña"], answer: 0, why: "Una dirección es el nombre que elegiste, el signo @ y luego la empresa, como nombre@gmail.com." },
            { objective: "O1", q: "Estás creando una cuenta de correo para buscar trabajo. ¿Qué dirección elegirías?", options: ["reydelafiesta99@...", "gatitocool2000@...", "xxamorxx@...", "Tu nombre y tu apellido, como james.carter@..."], answer: 3, why: "Los empleadores verán tu dirección, así que una dirección con tu nombre suena profesional." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir un correo claro",
          minutes: 5,
          goal: "Escribir y enviar un correo con asunto, saludo, mensaje corto y despedida.",
          text: [
            "Un buen correo tiene cinco partes: a quién va, una línea de asunto, un saludo, un mensaje corto y una despedida con tu nombre.",
            "La línea de asunto le dice al lector de qué trata el correo antes de abrirlo, por ejemplo \"Pregunta sobre mi cita del martes\" o \"Solicitud para el puesto de cajero\".",
            "Haz el mensaje corto: di por qué escribes, qué necesitas y para cuándo. Léelo una vez antes de presionar Enviar y revisa con cuidado la dirección en \"Para\", porque no puedes recuperar un correo una vez enviado."
          ],
          steps: ["Presiona Redactar o Mensaje nuevo.", "Escribe la dirección de la persona en la casilla \"Para\".", "Escribe una línea de asunto corta.", "Empieza con un saludo, como \"Hola, Sra. Lee:\".", "Escribe dos o tres oraciones cortas: por qué, qué necesitas, para cuándo.", "Termina con \"Gracias,\" y tu nombre.", "Léelo una vez, revisa la dirección y presiona Enviar."],
          words: [["Línea de asunto", "unas pocas palabras que le dicen al lector de qué trata el correo."], ["Redactar", "el botón que empieza un correo nuevo."], ["Despedida", "las palabras del final, como \"Gracias,\", seguidas de tu nombre."]],
          slides: [
            { title: "Cinco partes de un correo", bullets: ["Para: la dirección, y luego una línea de asunto", "Un saludo", "Un mensaje corto", "Una despedida con tu nombre"] },
            { title: "Una buena línea de asunto", bullets: ["\"Pregunta sobre mi cita del martes\"", "\"Solicitud para el puesto de cajero\""] },
            { title: "Antes de presionar Enviar", bullets: ["Léelo una vez", "Revisa la dirección en \"Para\"", "No puedes recuperarlo después de enviarlo"] }
          ],
          tryIt: "Escribe y envía un correo a ti mismo o a un familiar con las cinco partes. Asunto: \"Correo de práctica\". Ábrelo desde el otro lado y mira cómo se ve.",
          youCanNow: "escribir un correo claro con asunto, saludo, mensaje corto y despedida, y enviarlo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué debe decir la parte del mensaje corto de un correo?", options: ["Tu contraseña", "Cada detalle de tu semana", "Por qué escribes, qué necesitas y para cuándo", "Solo la palabra \"Hola\""], answer: 2, why: "Un mensaje corto dice por qué escribes, qué necesitas y para cuándo." },
            { objective: "O2", q: "Vas a enviar un correo al consultorio de tu médico. ¿Qué revisarías primero?", options: ["El color de la pantalla", "La dirección en \"Para\", y leer el correo una vez", "Cuántos correos hay en tu bandeja de entrada", "Si el asunto está TODO EN MAYÚSCULAS"], answer: 1, why: "No puedes recuperar un correo enviado, así que revisa la dirección y léelo antes de enviarlo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Responder, reenviar y adjuntar un archivo",
          minutes: 5,
          goal: "Responder a un correo y enviar uno con un archivo adjunto.",
          text: [
            "Responder envía tu respuesta solo a la persona que te escribió. Responder a todos la envía a todas las personas del mensaje, así que úsalo solo cuando todos necesiten tu respuesta. Reenviar manda el correo a una persona nueva.",
            "Un archivo adjunto es un archivo que envías con un correo, como una foto, un currículum o un formulario. Busca el ícono del clip. Elige el archivo de tu teléfono o computadora, espera a que termine de cargar y luego envía.",
            "Abre solo los adjuntos que esperabas de personas que conoces. Los archivos de desconocidos pueden traer programas dañinos."
          ],
          steps: ["Abre el correo que quieres contestar.", "Presiona Responder (no Responder a todos, a menos que todos lo necesiten).", "Escribe tu respuesta y presiona Enviar.", "Para adjuntar un archivo: en un correo nuevo, presiona el ícono del clip.", "Elige la foto o el documento y espera a que cargue.", "Menciona el archivo en tu mensaje y luego presiona Enviar."],
          words: [["Responder a todos", "contesta a todos los que recibieron el correo, no solo a quien lo envió."], ["Reenviar", "manda un correo que recibiste a otra persona."], ["Archivo adjunto", "un archivo que se envía junto con un correo."]],
          slides: [
            { title: "Responder, Responder a todos, Reenviar", bullets: ["Responder: solo a quien lo envió", "Responder a todos: a todos los del correo", "Reenviar: mandarlo a alguien nuevo"] },
            { title: "Adjuntar un archivo", bullets: ["Presiona el ícono del clip", "Elige la foto o el documento", "Espera a que termine de cargar y envía"] },
            { title: "Ten cuidado", bullets: ["Abre solo los adjuntos que esperas", "Los archivos de desconocidos pueden traer programas dañinos"] }
          ],
          tryIt: "Responde al correo de práctica de la Lección 2. Luego escribe un correo nuevo para ti mismo, adjunta una foto o un documento y envíalo. Ábrelo y comprueba que el archivo llegó.",
          youCanNow: "responder a un correo, reenviar uno y enviar un archivo adjunto.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un archivo adjunto?", options: ["La línea de asunto", "Un archivo que envías con un correo, como una foto o un formulario", "La dirección de quien envía", "Un botón que borra correos"], answer: 1, why: "Un archivo adjunto es un archivo que se envía junto con un correo." },
            { objective: "O3", q: "Adjuntaste tu currículum, pero todavía se está cargando. ¿Qué harías?", options: ["Esperar a que termine de cargarse y luego enviar", "Presionar Enviar de inmediato", "Cerrar la aplicación", "Reenviar el correo a todos"], answer: 0, why: "Espera a que el archivo termine de cargarse, o puede que no se vaya con el correo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo básico del correo electrónico",
        questions: [
          { objective: "O1", q: "¿Qué dirección de correo es mejor para solicitar empleos?", options: ["gatito99@gmail.com", "maria.lopez@gmail.com", "fiestatotal@yahoo.com", "xx123xx@outlook.com"], answer: 1, why: "Una dirección con tu nombre y apellido se ve profesional." },
          { objective: "O1", q: "¿Por qué agregar un número de teléfono a tu cuenta de correo?", options: ["Para que la empresa te llame todos los días", "Para volver a entrar si olvidas tu contraseña", "Hace el correo más rápido", "Se necesita para enviar fotos"], answer: 1, why: "Un teléfono de recuperación te permite recibir un código para volver a entrar." },
          { objective: "O2", q: "¿Para qué sirve la línea de asunto?", options: ["Le dice al lector de qué trata el correo", "Guarda el archivo adjunto", "Muestra tu contraseña", "Borra los correos viejos"], answer: 0, why: "Le dice al lector el tema antes de abrir el correo." },
          { objective: "O3", q: "Recibiste un correo enviado a 30 personas. Solo quien lo envió necesita tu respuesta. ¿Qué botón presionas?", options: ["Reenviar", "Responder a todos", "Eliminar", "Responder"], answer: 3, why: "Responder envía tu respuesta solo a quien escribió." },
          { objective: "O3", q: "¿Cómo envías una foto con un correo?", options: ["Escribiendo el nombre de la foto en el asunto", "Presionando el ícono del clip y eligiendo la foto", "Pegando tu contraseña", "Presionando Responder a todos"], answer: 1, why: "El ícono del clip agrega un archivo adjunto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantenerse seguro y comunicarse en línea",
      lessons: [
        {
          objectives: ["O4"],
          title: "Detectar correos de phishing y estafas",
          minutes: 5,
          goal: "Revisar un correo buscando señales de alerta antes de hacer clic en algo.",
          text: [
            "El phishing es un mensaje falso que finge ser de un banco, una tienda, una empresa de entregas o una oficina del gobierno, para engañarte y que hagas clic en un enlace o des información privada.",
            "La Comisión Federal de Comercio de EE. UU. (FTC) menciona señales comunes: el mensaje finge ser de una organización que conoces, dice que hay un problema o un premio, te presiona para actuar ya y te pide pagar de una forma poco común, como tarjetas de regalo, transferencias de dinero, aplicaciones de pago o criptomonedas.",
            "Mira también la dirección real de quien envía: \"support@amaz0n-help.win\" no es Amazon. Si tienes dudas, no hagas clic. Ve tú mismo al sitio web de la empresa o llama a un número que ya sabes que es real. En Estados Unidos puedes denunciar estafas en reportfraud.ftc.gov."
          ],
          steps: ["Mira la dirección completa de quien envía, no solo el nombre.", "Pregúntate: ¿Finge ser alguien que conozco? ¿Hay un problema o un premio? ¿Me están apurando? ¿Quieren tarjetas de regalo o una transferencia?", "Si alguna respuesta es sí, no hagas clic en enlaces ni abras archivos.", "Compruébalo yendo tú mismo al sitio web real o llamando a un número conocido.", "Bórralo o márcalo como spam. En EE. UU., denúncialo en reportfraud.ftc.gov."],
          words: [["Phishing", "un mensaje falso hecho para engañarte y que hagas clic en un enlace o des información privada."], ["Spam", "correo basura no deseado."], ["FTC", "la Comisión Federal de Comercio, la oficina del gobierno de EE. UU. que recibe las denuncias de estafas."]],
          slides: [
            { title: "Qué es el phishing", bullets: ["Un correo falso que finge ser un banco, una tienda o una oficina", "Quiere que hagas clic, pagues o compartas datos privados"] },
            { title: "Cuatro señales de alerta (FTC)", bullets: ["Finge ser alguien que conoces", "Un problema o un premio", "Presión para actuar ya", "Pago con tarjeta de regalo, transferencia, aplicación de pago o cripto"] },
            { title: "Revisa quién lo envía", bullets: ["Mira la dirección completa", "\"amaz0n-help.win\" no es Amazon"] },
            { title: "Si tienes dudas", bullets: ["No hagas clic", "Ve al sitio web real o llama a un número conocido", "Denúncialo en reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Denunciar un fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Abre tu carpeta de spam o correo no deseado y elige un mensaje. Encuentra al menos dos señales de alerta. No hagas clic en ningún enlace. Luego bórralo.",
          youCanNow: "revisar un correo buscando las cuatro señales de alerta y la dirección real de quien envía antes de hacer clic.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es el phishing?", options: ["Un servicio de correo gratuito", "Una forma de adjuntar archivos grandes", "Una forma amable de responder", "Un mensaje falso que finge venir de una empresa u oficina para engañarte"], answer: 3, why: "El phishing finge venir de un nombre de confianza para que hagas clic o compartas información." },
            { objective: "O4", q: "Un correo dice que ganaste un premio y que debes pagar hoy una pequeña tarifa con tarjetas de regalo. ¿Qué harías?", options: ["Comprar rápido las tarjetas de regalo", "Responder con tus datos bancarios", "No hacer clic ni pagar; muestra señales de estafa", "Reenviarlo a tus amigos para que también ganen"], answer: 2, why: "Un premio, la presión para actuar ya y el pago con tarjetas de regalo son señales de estafa que menciona la FTC." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Buenos modales en línea",
          minutes: 4,
          goal: "Escribir un mensaje amable y claro que reciba una buena respuesta.",
          text: [
            "En un mensaje escrito la gente no oye tu voz, así que las palabras pueden sonar más duras de lo que quieres. TODO EN MAYÚSCULAS se lee como si gritaras.",
            "Sé amable y breve. Usa un saludo y \"por favor\" y \"gracias\". Contesta los correos importantes en uno o dos días, aunque solo sea para decir \"Lo recibí y te respondo el viernes\".",
            "Antes de enviar un mensaje cuando estás molesto, espera un poco y vuelve a leerlo. No pongas información privada como tu número de Seguro Social, números de banco o contraseñas en un correo o un chat."
          ],
          steps: ["Empieza con un saludo.", "Di lo que necesitas en oraciones cortas.", "Usa mayúsculas normales, no TODO EN MAYÚSCULAS.", "Di por favor y gracias.", "Si estás molesto, espera y vuelve a leer antes de enviar.", "No incluyas números privados ni contraseñas."],
          words: [["Netiqueta", "buenos modales para los mensajes y publicaciones en línea."], ["TODO EN MAYÚSCULAS", "escribir todo con letras mayúsculas, que se lee como si gritaras."]],
          slides: [
            { title: "Palabras sin voz", bullets: ["Los mensajes pueden sonar más duros de lo que quieres", "TODO EN MAYÚSCULAS se lee como un grito"] },
            { title: "Amable y claro", bullets: ["Saludo, por favor y gracias", "Oraciones cortas", "Contesta en uno o dos días"] },
            { title: "Antes de enviar", bullets: ["¿Molesto? Espera y vuelve a leer", "Nada de números privados ni contraseñas"] }
          ],
          tryIt: "Escribe un correo corto y amable a un arrendador, una escuela, una clínica o un empleador (no tienes que enviarlo) para hacer una pregunta. Léelo en voz alta: ¿suena amable y claro?",
          youCanNow: "escribir un mensaje amable y claro y evitar los hábitos que causan problemas en línea.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué las palabras escritas pueden sonar más duras de lo que quieres?", options: ["La gente no puede oír tu voz en un mensaje escrito", "El correo siempre cambia tus palabras", "Los teléfonos agrandan las letras", "Los correos cortos son groseros"], answer: 0, why: "Sin tu voz, quien lee solo tiene tus palabras para guiarse." },
            { objective: "O5", q: "Llega un correo importante, pero necesitas unos días para contestarlo. ¿Qué harías?", options: ["Ignorarlo hasta que estés listo", "Responder TODO EN MAYÚSCULAS", "Responder en uno o dos días para decir cuándo contestarás", "Reenviárselo a otra persona"], answer: 2, why: "Una respuesta corta como \"Lo recibí y te contesto el viernes\" es de buena educación." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Unirse a una videollamada",
          minutes: 5,
          goal: "Unirte a una videollamada desde un enlace y usar los botones de silencio y cámara.",
          text: [
            "Muchos médicos, empleadores, escuelas y familias usan videollamadas. Algunas gratuitas y comunes son Zoom, Google Meet, Microsoft Teams y FaceTime en aparatos de Apple. Normalmente alguien te envía un enlace por correo o mensaje de texto.",
            "Toca o haz clic en el enlace unos minutos antes. En un teléfono puede pedirte instalar la aplicación desde la tienda oficial de aplicaciones. Cuando te lo pida, permite el micrófono y la cámara.",
            "Aprende dos botones: el micrófono (silenciar y activar el sonido) y la cámara (encender y apagar). Siéntate de frente a una luz, en un lugar tranquilo, y silénciate cuando no estés hablando."
          ],
          steps: ["Busca el enlace en el correo o mensaje de alguien que conoces.", "Únete cinco minutos antes.", "Si te lo pide, instala la aplicación oficial o ábrela en el navegador.", "Permite el micrófono y la cámara.", "Busca los botones de silencio y de cámara.", "Ponte de frente a una luz, busca un lugar tranquilo y silénciate cuando no hables.", "Presiona Salir o el botón rojo para colgar."],
          words: [["Videollamada", "una llamada en la que pueden verse y oírse en una pantalla."], ["Silenciar", "apaga tu micrófono para que los demás no te oigan."], ["Enlace de la reunión", "una dirección web que te lleva directo a una videollamada."]],
          slides: [
            { title: "Aplicaciones comunes de videollamada", bullets: ["Zoom, Google Meet, Microsoft Teams", "FaceTime en aparatos de Apple", "Normalmente recibes un enlace por correo o mensaje"] },
            { title: "Unirse", bullets: ["Haz clic en el enlace unos minutos antes", "Permite el micrófono y la cámara"] },
            { title: "Dos botones que debes conocer", bullets: ["Micrófono: silenciar y activar el sonido", "Cámara: encender y apagar", "Botón rojo o Salir: colgar"] },
            { title: "Verse y oírse bien", bullets: ["De frente a una luz", "Un lugar tranquilo", "Silénciate cuando no hables"] }
          ],
          tryIt: "Práctica de la tarea final: pide a un amigo o familiar que te envíe un enlace de videollamada (o empieza tú una llamada de Google Meet o Zoom). Únete, silénciate y activa el sonido, apaga y enciende la cámara y luego sal de la llamada.",
          youCanNow: "unirte a una videollamada desde un enlace, usar los botones de silencio y cámara y salir de la llamada.",
          quickCheck: [
            { objective: "O6", q: "¿Cómo te unes normalmente a una videollamada?", options: ["Llamando a un número de una ventana emergente", "Tocando o haciendo clic en un enlace que alguien te envió", "Enviando un correo a la aplicación", "Apagando la cámara"], answer: 1, why: "Normalmente alguien te envía un enlace por correo o mensaje de texto, y lo tocas para unirte." },
            { objective: "O6", q: "Tu entrevista por video empieza a las 10:00. ¿Qué harías?", options: ["Unirte a las 10:15", "Unirte desde un cuarto ruidoso con la luz detrás de ti", "Dejar el micrófono encendido todo el tiempo mientras otros hablan", "Unirte unos minutos antes, en un lugar tranquilo y de frente a una luz"], answer: 3, why: "Unirte antes te da tiempo para instalar la aplicación y permitir el micrófono y la cámara." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantenerse seguro y comunicarse en línea",
        questions: [
          { objective: "O4", q: "Un correo dice que tu cuenta bancaria está bloqueada y que debes hacer clic en un enlace en la próxima hora. ¿Qué haces?", options: ["Haces clic rápido en el enlace", "Respondes con tu número de cuenta", "Vas tú mismo al sitio web real del banco o llamas a un número conocido", "Lo reenvías a todos tus amigos"], answer: 2, why: "La presión y un problema son señales de estafa; compruébalo por un camino en el que ya confías." },
          { objective: "O4", q: "¿Qué pedido de pago es una señal de alerta de estafa?", options: ["Pagar una cuenta en el sitio web de tu propio banco", "Pagar con tarjetas de regalo", "Pagar en la caja de una tienda", "Pagar al médico en la recepción"], answer: 1, why: "La FTC menciona las tarjetas de regalo como un pago poco común que piden los estafadores." },
          { objective: "O5", q: "¿Cómo le parece al lector un texto escrito TODO EN MAYÚSCULAS?", options: ["Un grito", "Amable", "Tranquilo", "Gracioso"], answer: 0, why: "Todo en mayúsculas se lee como si gritaras." },
          { objective: "O6", q: "En una videollamada no estás hablando y hay ruido en casa. ¿Qué debes hacer?", options: ["Salir de la llamada", "Subir el volumen", "Solo apagar la cámara", "Silenciar tu micrófono"], answer: 3, why: "Silenciarte evita que los demás oigan el ruido de fondo." },
          { objective: "O4", q: "¿Dónde pueden denunciar una estafa las personas en EE. UU.?", options: ["En reportfraud.ftc.gov", "En el correo del estafador", "En un comentario de redes sociales", "En freehelp.win"], answer: 0, why: "La FTC recibe denuncias de estafas en reportfraud.ftc.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Correo electrónico y comunicación en línea",
    questions: [
      { objective: "O1", q: "En la dirección maria@gmail.com, ¿qué te dice gmail.com?", options: ["La contraseña de María", "La empresa que maneja el correo", "El número de teléfono de María", "La ciudad de María"], answer: 1, why: "La parte después de la @ es la empresa de correo." },
      { objective: "O1", q: "¿Cuál es un servicio de correo gratuito?", options: ["Outlook.com", "Una impresora", "Un mensaje de texto", "Un navegador web"], answer: 0, why: "Outlook.com, Gmail y Yahoo Mail son servicios de correo gratuitos." },
      { objective: "O1", q: "Una contraseña de correo segura es:", options: ["Tu fecha de cumpleaños", "\"contraseña\"", "La misma que usas en todas partes", "Larga y que no uses en ningún otro lugar"], answer: 3, why: "Una contraseña larga y única es la más difícil de adivinar o robar." },
      { objective: "O2", q: "¿Qué botón empieza un correo nuevo?", options: ["Redactar o Mensaje nuevo", "Eliminar", "Spam", "Archivar"], answer: 0, why: "Redactar empieza un correo nuevo." },
      { objective: "O2", q: "¿Cuál es la mejor línea de asunto para preguntar por un empleo?", options: ["\"hola\"", "Sin asunto", "\"lee esto\"", "\"Solicitud para el puesto de cajero\""], answer: 3, why: "Le dice al lector exactamente de qué trata el correo." },
      { objective: "O2", q: "Antes de presionar Enviar, debes:", options: ["Agregar tu número de banco", "Quitar el saludo", "Escribirlo todo en mayúsculas", "Revisar la dirección en \"Para\" y leer el correo una vez"], answer: 3, why: "No puedes recuperar un correo, así que revísalo primero." },
      { objective: "O2", q: "¿Qué parte va al final de un correo?", options: ["La línea de asunto", "La dirección en \"Para\"", "Una despedida con tu nombre", "El clip"], answer: 2, why: "Una despedida como \"Gracias, Ana\" cierra el correo." },
      { objective: "O3", q: "Reenviar significa:", options: ["Contestar solo a quien lo envió", "Borrar el correo", "Mandar el correo a una persona nueva", "Marcarlo como spam"], answer: 2, why: "Reenviar manda un correo que recibiste a otra persona." },
      { objective: "O3", q: "El ícono del clip sirve para:", options: ["Adjuntar un archivo", "Cambiar la letra", "Bloquear a quien envía", "Imprimir el correo"], answer: 0, why: "El clip agrega un archivo adjunto." },
      { objective: "O3", q: "Un desconocido te envía un archivo que no esperabas. Debes:", options: ["Abrirlo enseguida", "Reenviarlo a tus amigos", "No abrirlo", "Responder con tu contraseña"], answer: 2, why: "Los archivos inesperados de desconocidos pueden traer programas dañinos." },
      { objective: "O3", q: "Responder a todos se debe usar:", options: ["Siempre", "Solo cuando todos los del correo necesitan tu respuesta", "Nunca", "Para enviar spam"], answer: 1, why: "Responder a todos llega a todos, así que úsalo solo cuando todos lo necesiten." },
      { objective: "O4", q: "El phishing es:", options: ["Un mensaje falso que intenta engañarte", "Un tipo de archivo adjunto", "Una aplicación de videollamada", "Una contraseña segura"], answer: 0, why: "Los mensajes de phishing fingen ser reales para robar información o dinero." },
      { objective: "O4", q: "El nombre de quien envía dice \"Amazon\", pero la dirección es support@amaz0n-help.win. Esto es:", options: ["Normal", "Un enlace de videollamada", "La dirección principal de Amazon", "Una señal de alerta"], answer: 3, why: "La dirección real de quien envía no coincide con la empresa." },
      { objective: "O4", q: "¿Cuál es una de las cuatro señales de estafa de la FTC?", options: ["El mensaje es corto", "Presión para actuar de inmediato", "Tiene un saludo", "Es de un amigo al que llamaste"], answer: 1, why: "Los estafadores te apuran para que no te detengas a pensar." },
      { objective: "O4", q: "No estás seguro de si un correo de tu banco es real. El paso más seguro es:", options: ["Hacer clic en su enlace para comprobarlo", "Responder y preguntar", "Ir tú mismo al sitio web del banco o llamar al número de tu tarjeta", "Enviar tu número de cuenta"], answer: 2, why: "Usa un camino que ya sabes que es real, no el enlace del correo." },
      { objective: "O5", q: "Estás molesto y escribiste un correo enojado. Los buenos modales dicen:", options: ["Envíalo en mayúsculas", "Espera y vuelve a leerlo antes de enviarlo", "Envíalo a todos", "Agrega tu número de banco"], answer: 1, why: "Esperar te ayuda a enviar un mensaje más tranquilo y claro." },
      { objective: "O5", q: "¿Qué nunca debes poner en un correo?", options: ["\"Gracias\"", "Un saludo", "Tu número de Seguro Social", "Una línea de asunto"], answer: 2, why: "Los números privados en un correo pueden ser robados." },
      { objective: "O6", q: "¿Cuál es una aplicación común de videollamada?", options: ["Zoom", "Calculadora", "Bloc de notas", "Galería de fotos"], answer: 0, why: "Zoom, Google Meet, Teams y FaceTime son aplicaciones de videollamada." },
      { objective: "O6", q: "Al unirte a una videollamada, un buen hábito es:", options: ["Unirte 20 minutos tarde", "Sentarte con una ventana muy brillante detrás", "Unirte unos minutos antes y ponerte de frente a una luz", "Dejar la televisión fuerte"], answer: 2, why: "Unirte temprano y de frente a una luz ayuda a que la llamada salga bien." },
      { objective: "O6", q: "En una videollamada, el botón del micrófono te permite:", options: ["Tomar una foto", "Enviar un archivo", "Apagar internet", "Silenciarte y activar tu sonido"], answer: 3, why: "El botón del micrófono apaga y enciende tu sonido." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      5,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Correo claro",
        objective: "O2",
        notYet: "Falta la línea de asunto, el saludo, el mensaje o la despedida.",
        meets: "Una línea de asunto, un saludo, dos o tres oraciones cortas y una despedida con tu nombre.",
        exceeds: "La línea de asunto dice exactamente de qué trata el correo y el mensaje dice qué necesitas y para cuándo."
      },
      {
        name: "Archivo adjunto",
        objective: "O3",
        notYet: "No hay ningún archivo adjunto, o no terminó de cargarse.",
        meets: "Una foto o un documento está adjunto y llega con el correo.",
        exceeds: "El archivo tiene un nombre claro y el correo menciona qué va adjunto."
      },
      {
        name: "Respuesta",
        objective: "O3",
        notYet: "No se envió ninguna respuesta, o se usó Responder a todos cuando solo una persona la necesitaba.",
        meets: "Se envió una respuesta a la persona correcta.",
        exceeds: "La respuesta es amable y contesta cada pregunta del correo."
      },
      {
        name: "Amable y privado",
        objective: "O5",
        notYet: "El correo está TODO EN MAYÚSCULAS, suena grosero o tiene números privados o contraseñas.",
        meets: "El correo es amable, usa las mayúsculas normales y no tiene información privada.",
        exceeds: "Usa por favor y gracias y se entiende bien a la primera."
      },
      {
        name: "Señales de phishing",
        objective: "O4",
        notYet: "Hay menos de dos señales de alerta, o una está equivocada.",
        meets: "Dos señales de alerta correctas que buscar antes de hacer clic en cualquier enlace.",
        exceeds: "Además, dice qué hacer en lugar de hacer clic y dónde denunciar una estafa."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la tarea final",
      "Participantes que dicen haber enviado un correo real a un empleador, un médico, una escuela o una oficina en los 30 días después del curso (encuesta de seguimiento)",
      "Participantes que dicen haberse unido por su cuenta a una videollamada o a una consulta de telemedicina",
      "Participantes que dicen haber detectado un correo de phishing y no haber hecho clic"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono, una tableta o una computadora con internet",
      "Una cuenta de correo gratuita (Gmail, Outlook.com o Yahoo Mail), o tiempo para crear una",
      "Una foto o un documento para adjuntar, sin nada privado",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Al crear la cuenta, puede que pidan un número de teléfono para verificarla; deje que cada persona decida qué compartir y dé tiempo extra en la primera sesión.",
      "Forme parejas para que se envíen correos entre sí al practicar las respuestas y los archivos adjuntos.",
      "Use ejemplos de phishing impresos o en capturas de pantalla; nunca abra en clase un correo o un enlace sospechoso real.",
      "Haga con el grupo una videollamada corta de práctica para que todos prueben los botones de silencio y cámara.",
      "Recuerde que nunca deben compartir la contraseña de su correo con nadie, ni siquiera con quien enseña."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-tech-skills-beginners.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-tech-skills-beginners-es",
  lang: "es",
  translationOf: "underserved-tech-skills-beginners",
  category: "Undeserved Community",
  name: "Habilidades tecnológicas para principiantes",
  skills: "Usar una pantalla táctil y un ratón, Conectarte a internet gratis o a bajo costo, Buscar en internet y reconocer sitios confiables, Enviar un correo con un archivo adjunto, Crear una contraseña segura, Pedirle ayuda tecnológica a la IA",
  outcome: "usar un teléfono o una computadora gratuita de la biblioteca para conectarte a internet, buscar información confiable, enviar un correo con una foto o un archivo adjunto y proteger tu cuenta con una contraseña segura.",
  about: [
    "Este curso es para cualquier persona que se siente nueva o nerviosa con la tecnología. Mucha gente nunca tuvo la oportunidad de aprender, y eso está bien. Empezamos desde el principio y vamos un pasito a la vez.",
    "Vas a practicar el uso de una pantalla táctil y un ratón, encontrar formas gratuitas o baratas de conectarte a internet, buscar en la web, distinguir un sitio confiable de uno riesgoso, enviar un correo con un archivo adjunto, crear una contraseña segura y pedirle ayuda a un asistente de IA gratuito cuando te atores.",
    "Puedes usar tu propio teléfono o una computadora gratuita de una biblioteca pública o un centro comunitario. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "En un teléfono o en una computadora de la biblioteca, busca el horario de tu biblioteca pública en su sitio web oficial, toma una captura de pantalla o una foto del horario y envíala por correo a un familiar o amigo con un mensaje corto y amable. Usa una cuenta protegida con una contraseña segura y cierra sesión si usaste una computadora compartida.",
  chapters: [
    {
      name: "Capítulo 1: Agarrar confianza y conectarte",
      lessons: [
        {
          title: "Pantallas táctiles, ratones y teclados",
          minutes: 5,
          goal: "Tocar, deslizar, hacer clic, desplazarte y escribir en un teléfono o una computadora.",
          text: [
            "En un teléfono o tableta usas el dedo. Toca una vez para abrir algo. Desliza (pasa el dedo sobre la pantalla) para moverte hacia arriba, abajo o a los lados. Mantén presionado para ver más opciones.",
            "En una computadora usas un ratón (mouse) o un panel táctil. Muévelo para mover la flecha en la pantalla. Haz clic una vez con el botón izquierdo para elegir algo. Haz doble clic para abrir algunos archivos. Gira la rueda, o desliza dos dedos en el panel táctil, para desplazarte.",
            "El teclado escribe letras. La tecla Shift (Mayús) pone una letra mayúscula. La tecla Backspace (Retroceso) borra la letra que está antes del cursor. Enter pasa a una línea nueva o hace una búsqueda."
          ],
          steps: ["Teléfono: toca una aplicación para abrirla, desliza para desplazarte, presiona el botón de inicio o desliza hacia arriba para volver al inicio.", "Computadora: mueve el ratón, haz clic una vez para elegir, desplázate con la rueda.", "Teclado: escribe tu nombre, usa Shift para la mayúscula y Backspace para corregir un error."],
          words: [["Tocar", "tocar la pantalla una vez, rápido."], ["Deslizar", "pasar el dedo sobre la pantalla."], ["Clic", "presionar una vez el botón del ratón."], ["Cursor", "la rayita que parpadea y muestra dónde va a aparecer lo que escribes."]],
          slides: [
            { title: "En un teléfono o tableta", bullets: ["Toca para abrir", "Desliza para moverte", "Mantén presionado para más opciones"] },
            { title: "En una computadora", bullets: ["Mueve el ratón para mover la flecha", "Haz clic una vez para elegir", "Desplázate con la rueda o dos dedos"] },
            { title: "Lo básico del teclado", bullets: ["Shift (Mayús): letra mayúscula", "Backspace (Retroceso): borrar un error", "Enter: línea nueva o búsqueda"] }
          ],
          tryIt: "En un teléfono o una computadora, abre cualquier aplicación o programa, desplázate hacia abajo y de vuelta hacia arriba, luego escribe tu nombre con mayúscula y corrige un error con Backspace.",
          youCanNow: "tocar, deslizar, hacer clic, desplazarte y escribir en un teléfono o una computadora."
        },
        {
          title: "Conectarte a internet gratis o a bajo costo",
          minutes: 5,
          goal: "Encontrar un lugar gratuito para conectarte y conocer el descuento de Lifeline.",
          text: [
            "Las bibliotecas públicas ofrecen computadoras y Wi-Fi gratis. Muchos centros comunitarios, centros de empleo y algunos restaurantes también. Pregunta al personal cómo apartar una computadora y cuánto tiempo la puedes usar.",
            "Lifeline es un programa federal de Estados Unidos que baja el costo mensual del servicio de teléfono o internet para personas de bajos ingresos o que reciben ayuda como SNAP (ayuda para alimentos) o Medicaid (seguro médico público). El descuento normal es de hasta $9.25 al mes. Haces la solicitud en getinternet.gov y luego contactas a una compañía de teléfono o internet que participe. Las cantidades y reglas pueden cambiar, así que revisa lifelinesupport.org para ver lo más reciente.",
            "En un Wi-Fi público, si puedes, no hagas trámites del banco ni escribas contraseñas de cuentas importantes. Nunca dejes que una computadora compartida guarde tu contraseña."
          ],
          steps: ["Llama o ve a tu biblioteca o centro comunitario y pregunta por las computadoras y el Wi-Fi gratis.", "Para conectar un teléfono a Wi-Fi: abre Configuración (Ajustes), toca Wi-Fi, elige la red y escribe la contraseña si la tiene.", "Si el dinero no alcanza, revisa si calificas para Lifeline en lifelinesupport.org."],
          words: [["Wi-Fi", "una forma inalámbrica de conectarte a internet."], ["Lifeline", "un programa federal que baja las cuentas de teléfono o internet para quienes califican."], ["Wi-Fi público", "Wi-Fi gratuito que comparten muchas personas en un lugar público."]],
          sources: [{ name: "Lifeline Support (USAC, bajo la supervisión de la FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Lugares gratis para conectarte", bullets: ["Computadoras y Wi-Fi en bibliotecas públicas", "Centros comunitarios y centros de empleo", "Pregunta al personal cómo apartar"] },
            { title: "Lifeline baja tu cuenta", bullets: ["Para bajos ingresos o SNAP, Medicaid y más", "Descuento normal de hasta $9.25 al mes", "Solicítalo en getinternet.gov; revisa lifelinesupport.org"] },
            { title: "Seguridad en Wi-Fi público", bullets: ["Evita trámites del banco en Wi-Fi público", "No dejes que computadoras compartidas guarden contraseñas"] }
          ],
          tryIt: "Averigua el horario para usar computadoras gratis en la biblioteca o el centro comunitario más cercano. Si tienes teléfono, conéctalo a una red Wi-Fi desde Configuración y luego Wi-Fi.",
          youCanNow: "encontrar un lugar gratuito para conectarte, conectarte a Wi-Fi y saber dónde revisar si puedes pagar menos de internet."
        },
        {
          title: "Buscar en internet y reconocer sitios confiables",
          minutes: 5,
          goal: "Buscar información y decidir si un sitio web es confiable.",
          text: [
            "Un buscador como Google o Bing encuentra sitios web por ti. Escribe unas pocas palabras clave, como \"horario biblioteca Oakland\", en el cuadro de búsqueda y presiona Enter.",
            "No todos los resultados son confiables. Los resultados marcados como \"Patrocinado\" o \"Anuncio\" son anuncios pagados. Los sitios oficiales del gobierno de Estados Unidos terminan en .gov. Busca el nombre real del lugar en la dirección web.",
            "Ten cuidado con los sitios que tienen muchas ventanas emergentes, que dicen que ganaste un premio, que te piden descargar algo o que te piden información personal. Ciérralos y regresa."
          ],
          steps: ["Abre un navegador web y escribe unas pocas palabras clave en el cuadro de búsqueda.", "Sáltate los resultados marcados como Patrocinado o Anuncio.", "Elige un resultado cuya dirección coincida con la organización real o termine en .gov.", "Cierra cualquier página con ventanas emergentes, premios o pedidos de descarga."],
          words: [["Buscador", "un sitio web que encuentra otros sitios web, como Google o Bing."], ["Patrocinado", "un anuncio pagado que aparece en los resultados de búsqueda."], ["Ventana emergente", "una ventana que aparece de repente encima de una página."]],
          slides: [
            { title: "Cómo buscar", bullets: ["Escribe unas pocas palabras clave", "Ejemplo: \"horario biblioteca Oakland\"", "Presiona Enter"] },
            { title: "Señales de confianza", bullets: ["No dice Patrocinado ni Anuncio", "La dirección tiene el nombre real", "Los sitios del gobierno terminan en .gov"] },
            { title: "Señales de alerta", bullets: ["Muchas ventanas emergentes", "\"¡Ganaste un premio!\"", "Te pide descargar algo o dar datos personales"] }
          ],
          tryIt: "Busca el horario de tu biblioteca pública. Elige el resultado del propio sitio web de la biblioteca, no un anuncio, y anota el horario.",
          youCanNow: "buscar en internet y elegir un sitio web confiable."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Agarrar confianza y conectarte",
        questions: [
          { q: "En un teléfono, ¿cómo abres una aplicación?", options: ["Agitas el teléfono", "La tocas una vez", "Presionas Backspace", "Lo apagas"], answer: 1, why: "Un solo toque abre una aplicación." },
          { q: "¿Qué tecla borra la letra que está antes del cursor?", options: ["Shift", "Enter", "Backspace", "Espacio"], answer: 2, why: "Backspace borra la letra que está antes del cursor." },
          { q: "¿Dónde puedes usar casi siempre una computadora y Wi-Fi gratis?", options: ["En un anuncio emergente", "En una agencia de autos", "En la bóveda de un banco", "En una biblioteca pública"], answer: 3, why: "Las bibliotecas públicas ofrecen computadoras y Wi-Fi gratis." },
          { q: "¿Qué es Lifeline?", options: ["Un programa federal que baja las cuentas de teléfono o internet para quienes califican", "Un juego gratis para el teléfono", "Un tipo de virus", "Un buscador"], answer: 0, why: "Lifeline da un descuento mensual en el servicio de teléfono o internet." },
          { q: "Un resultado de búsqueda dice \"Patrocinado\". ¿Qué quiere decir?", options: ["Es un sitio del gobierno", "Es un anuncio pagado", "Siempre es la mejor respuesta", "Es tu correo"], answer: 1, why: "Los resultados patrocinados son anuncios." }
        ]
      }
    },
    {
      name: "Capítulo 2: Correo, contraseñas y cómo pedir ayuda",
      lessons: [
        {
          title: "Enviar un correo con un archivo adjunto",
          minutes: 5,
          goal: "Escribir y enviar un correo con una foto o un archivo adjunto.",
          text: [
            "El correo electrónico te deja enviar mensajes y archivos a cualquier persona que tenga una dirección de correo. Algunos servicios de correo gratuitos son Gmail y Outlook.com. Tu biblioteca te puede ayudar a crear una cuenta.",
            "Un correo tiene cuatro partes: Para (la dirección de correo de la persona), Asunto (unas palabras que dicen de qué trata), el mensaje y los archivos adjuntos (archivos o fotos que agregas). El ícono del clip casi siempre quiere decir adjuntar.",
            "Antes de presionar Enviar, revisa que la dirección esté bien, lee tu mensaje una vez y asegúrate de que el archivo correcto esté adjunto."
          ],
          steps: ["Abre tu correo y elige Redactar o Mensaje nuevo.", "Escribe la dirección de la persona en Para.", "Escribe un Asunto corto.", "Escribe un mensaje corto y amable.", "Toca o haz clic en el clip, elige una foto o un archivo y presiona Enviar."],
          words: [["Dirección de correo", "una dirección como nombre@ejemplo.com donde recibes correos."], ["Asunto", "el título corto de un correo."], ["Archivo adjunto", "un archivo o una foto que se envía con un correo."]],
          slides: [
            { title: "Cuatro partes de un correo", bullets: ["Para: su dirección de correo", "Asunto: unas palabras", "Mensaje", "Adjunto: un archivo o una foto"] },
            { title: "Adjunta un archivo", bullets: ["Busca el ícono del clip", "Elige la foto o el archivo", "Espera a que termine de agregarse"] },
            { title: "Antes de presionar Enviar", bullets: ["¿La dirección está bien?", "¿El mensaje se entiende?", "¿Está adjunto el archivo correcto?"] }
          ],
          tryIt: "Envía un correo a un amigo o familiar con el asunto \"Correo de práctica\", un mensaje de una línea y una foto adjunta.",
          youCanNow: "escribir y enviar un correo con un archivo adjunto."
        },
        {
          title: "Crear una contraseña segura y cuidar tus cuentas",
          minutes: 5,
          goal: "Crear una contraseña segura y saber cómo proteger tus cuentas.",
          text: [
            "Una contraseña segura es larga y difícil de adivinar. Una forma fácil: junta tres o cuatro palabras al azar con un número y un símbolo, como \"Azul-Taco-Rio-58\". No uses tu nombre, tu cumpleaños ni \"password123\".",
            "Usa una contraseña para tu correo distinta a la de tus otras cuentas. Tu correo es la llave para cambiar la contraseña de todo lo demás.",
            "Activa la verificación en dos pasos si tu cuenta la ofrece: después de tu contraseña, también escribes un código que llega a tu teléfono. Nunca le des ese código a nadie que te llame o te escriba, aunque diga que es de la compañía."
          ],
          steps: ["Elige tres o cuatro palabras al azar.", "Júntalas y agrega un número y un símbolo.", "Úsala solo para esta cuenta.", "Activa la verificación en dos pasos en la configuración de seguridad de tu cuenta.", "Nunca compartas el código que llega a tu teléfono."],
          words: [["Contraseña", "una palabra o frase secreta que solo te deja entrar a ti a una cuenta."], ["Verificación en dos pasos", "una segunda revisión, por lo general un código que llega a tu teléfono, después de tu contraseña."]],
          slides: [
            { title: "Una contraseña segura", bullets: ["Larga: tres o cuatro palabras al azar", "Agrega un número y un símbolo", "Estilo de ejemplo: Azul-Taco-Rio-58"] },
            { title: "Evita", bullets: ["Tu nombre o tu cumpleaños", "\"password123\"", "La misma contraseña en todos lados"] },
            { title: "Verificación en dos pasos", bullets: ["Contraseña más un código a tu teléfono", "Actívala en la configuración de seguridad", "Nunca compartas el código con nadie"] }
          ],
          tryIt: "Inventa una contraseña segura con tres palabras al azar, un número y un símbolo. No uses la que viene de ejemplo aquí. Escribe una pista, no la contraseña, en un lugar seguro de tu casa.",
          youCanNow: "crear una contraseña segura y proteger tu cuenta con la verificación en dos pasos."
        },
        {
          title: "Pedirle ayuda tecnológica a un asistente de IA gratuito",
          minutes: 5,
          goal: "Usar un asistente de IA gratuito para recibir ayuda paso a paso con un problema de tecnología.",
          text: [
            "Cuando te atoras, un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini te puede explicar cómo hacer algo, paso a paso, con palabras sencillas. Le puedes escribir o hablar.",
            "Dile qué aparato tienes y qué quieres hacer. Por ejemplo: \"Tengo un teléfono Android. ¿Cómo adjunto una foto a un correo en Gmail? Dame pasos cortos.\" Si un paso no coincide con tu pantalla, dile lo que ves.",
            "Nunca escribas contraseñas, códigos, números de banco ni tu número de Seguro Social en una IA. Y el personal de la biblioteca siempre es una buena opción para preguntar también."
          ],
          steps: ["Abre un asistente de IA gratuito.", "Di qué aparato tienes y qué quieres hacer.", "Pide pasos cortos y sencillos.", "Si un paso no coincide, describe lo que ves en tu pantalla."],
          words: [["Asistente de IA", "un programa de computadora con el que conversas con palabras de todos los días."], ["Aparato", "un teléfono, una tableta o una computadora."]],
          slides: [
            { title: "La IA puede ser tu ayudante de tecnología", bullets: ["Explica los pasos con palabras sencillas", "Le puedes escribir o hablar"] },
            { title: "Pregunta con claridad", bullets: ["Di qué aparato tienes", "Di qué quieres hacer", "Pide pasos cortos"] },
            { title: "Cuídate", bullets: ["Nada de contraseñas, códigos ni números de banco", "El personal de la biblioteca también ayuda"] }
          ],
          tryIt: "Tarea final: busca el horario de tu biblioteca en su sitio oficial, toma una captura de pantalla o una foto y envíala por correo a alguien con un mensaje amable. Si te atoras, pide los pasos a un asistente de IA. Cierra sesión si usaste una computadora compartida.",
          youCanNow: "conectarte, encontrar información confiable, enviarla por correo y pedir ayuda de forma segura cuando te atoras."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Correo, contraseñas y cómo pedir ayuda",
        questions: [
          { q: "¿Qué hace casi siempre el ícono del clip en el correo?", options: ["Borra el correo", "Imprime el correo", "Adjunta un archivo o una foto", "Cambia tu contraseña"], answer: 2, why: "El clip agrega un archivo adjunto." },
          { q: "¿Cuál es la contraseña más segura?", options: ["password123", "Tu cumpleaños", "Tu nombre", "Tres palabras al azar con un número y un símbolo"], answer: 3, why: "Las contraseñas largas y al azar son difíciles de adivinar." },
          { q: "Alguien llama diciendo que es de tu compañía de correo y te pide el código que llegó a tu teléfono. Tú:", options: ["Nunca lo compartes y cuelgas", "Se lo lees", "Se lo mandas por mensaje", "Lo publicas en internet"], answer: 0, why: "Ese código protege tu cuenta; las compañías de verdad no lo piden." },
          { q: "¿Por qué la contraseña de tu correo debe ser distinta a las demás?", options: ["Se ve más bonita", "Con el correo se pueden cambiar las contraseñas de tus otras cuentas", "Es más corta", "Lo exige la ley"], answer: 1, why: "Si alguien entra a tu correo, puede cambiar las contraseñas de otras cuentas." },
          { q: "¿Cuál es una buena forma de pedirle ayuda tecnológica a la IA?", options: ["\"ayuda\"", "\"Esta es mi contraseña, arréglalo\"", "\"Tengo un teléfono Android. ¿Cómo adjunto una foto en Gmail? Pasos cortos.\"", "\"teléfono\""], answer: 2, why: "Dice el aparato, la tarea y el formato." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades tecnológicas para principiantes",
    questions: [
      { q: "Para moverte hacia arriba y hacia abajo en una página del teléfono, tú:", options: ["Deslizas", "Lo agitas", "Presionas Shift", "Lo apagas"], answer: 0, why: "Deslizar mueve la pantalla." },
      { q: "En una computadora, hacer clic una vez con el botón izquierdo del ratón:", options: ["La apaga", "Elige algo", "Borra todo", "Imprime la página"], answer: 1, why: "Un solo clic selecciona o elige." },
      { q: "El cursor muestra:", options: ["La hora", "La batería", "Dónde va a aparecer lo que escribes", "Tu contraseña"], answer: 2, why: "La rayita que parpadea marca dónde va el texto." },
      { q: "Para conectar un teléfono a Wi-Fi, casi siempre abres:", options: ["La cámara", "La calculadora", "Un juego", "Configuración y luego Wi-Fi"], answer: 3, why: "La opción de Wi-Fi está en la aplicación de Configuración." },
      { q: "¿Quién puede solicitar Lifeline?", options: ["Personas de bajos ingresos o que reciben ayuda como SNAP o Medicaid", "Solo negocios", "Solo mayores de 90 años", "Cualquiera que pague una cuota"], answer: 0, why: "Lifeline depende de los ingresos o de participar en ciertos programas de ayuda." },
      { q: "¿Dónde revisas las cantidades y reglas más recientes de Lifeline?", options: ["En un mensaje de un desconocido", "En lifelinesupport.org", "En un anuncio emergente", "En un comentario de redes sociales"], answer: 1, why: "Lifeline Support es el sitio oficial del programa." },
      { q: "En un Wi-Fi público, es mejor evitar:", options: ["Leer las noticias", "Ver el clima", "Hacer trámites del banco en línea", "Buscar el horario de la biblioteca"], answer: 2, why: "Las tareas delicadas son más seguras en una conexión privada." },
      { q: "Un buscador es:", options: ["Una pieza de auto", "Una aplicación de correo", "Una contraseña", "Un sitio que encuentra otros sitios web, como Google o Bing"], answer: 3, why: "Los buscadores encuentran sitios web por ti." },
      { q: "Los sitios web oficiales del gobierno de Estados Unidos suelen terminar en:", options: [".gov", ".win", ".prize", ".xyz"], answer: 0, why: ".gov es para los sitios del gobierno de Estados Unidos." },
      { q: "Una página dice \"¡Ganaste un premio! ¡Descárgalo ya!\" Debes:", options: ["Descargarlo", "Cerrar la página y regresar", "Escribir tu número de banco", "Compartirlo con tus amigos"], answer: 1, why: "Los premios y los pedidos de descarga son señales de alerta." },
      { q: "En un correo, el Asunto es:", options: ["La dirección de la persona", "El archivo adjunto", "Unas palabras que dicen de qué trata el correo", "Tu contraseña"], answer: 2, why: "El asunto es el título corto del correo." },
      { q: "Antes de presionar Enviar, debes revisar:", options: ["Nada", "Solo el tipo de letra", "El clima", "La dirección, el mensaje y el archivo adjunto"], answer: 3, why: "Una revisión rápida evita errores." },
      { q: "¿Cuál es un servicio de correo gratuito?", options: ["Gmail", "Una máquina de fax", "Una impresora", "Un módem de Wi-Fi"], answer: 0, why: "Gmail y Outlook.com son servicios de correo gratuitos." },
      { q: "¿Cuál es la contraseña más débil?", options: ["Azul-Taco-Rio-58", "password123", "Lampara!Jardin!Siete!42", "Luna-Tenedor-Nopal-19"], answer: 1, why: "\"password123\" es una de las contraseñas que más se adivinan." },
      { q: "La verificación en dos pasos quiere decir:", options: ["Escribir tu contraseña dos veces", "Dos personas comparten una cuenta", "Una segunda revisión, como un código a tu teléfono", "Caminar dos pasos"], answer: 2, why: "Agrega una segunda revisión después de tu contraseña." },
      { q: "Cuando terminas en una computadora de la biblioteca, debes:", options: ["Dejar tu correo abierto", "Guardar tu contraseña", "Escribir tu contraseña en una nota adhesiva", "Cerrar sesión y cerrar el navegador"], answer: 3, why: "Cerrar sesión evita que la siguiente persona entre a tu cuenta." },
      { q: "¿Qué NUNCA debes escribir en un asistente de IA?", options: ["El código que llegó a tu teléfono", "\"¿Cómo adjunto una foto?\"", "\"Tengo un iPhone\"", "\"Dame pasos cortos\""], answer: 0, why: "Los códigos y las contraseñas deben quedarse en privado." },
      { q: "Un paso que te da la IA no coincide con tu pantalla. Debes:", options: ["Rendirte", "Decirle lo que ves en tu pantalla", "Reiniciar el internet", "Escribir tu contraseña"], answer: 1, why: "Describir tu pantalla le ayuda a darte los pasos correctos." },
      { q: "¿Quién más te puede ayudar gratis con la tecnología?", options: ["Un anuncio emergente", "Un desconocido que te escribe", "El personal de la biblioteca", "Alguien que te pide tu código"], answer: 2, why: "El personal de la biblioteca ayuda con computadoras todos los días." },
      { q: "Una buena primera instrucción para pedir ayuda tecnológica incluye:", options: ["Tu número de banco", "Solo una palabra", "Tu número de Seguro Social", "Tu aparato y lo que quieres hacer"], answer: 3, why: "Eso le da a la IA lo que necesita para ayudarte." }
    ]
  }
};

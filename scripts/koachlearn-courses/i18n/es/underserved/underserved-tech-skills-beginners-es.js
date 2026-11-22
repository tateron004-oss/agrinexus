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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos de comunidades desatendidas que son nuevos con la tecnología o les pone nerviosos: personas mayores, personas que nunca tuvieron la oportunidad de aprender, personas que vuelven después de una larga ausencia y personas que hablan otro idioma.",
    startingPoint: "Quizás tienen un teléfono sencillo para llamar. Usan poco o nada las pantallas táctiles, el ratón, el teclado, las búsquedas en internet o el correo electrónico, y algunos nunca han creado una cuenta ni una contraseña.",
    gap: "Hoy los empleos, las escuelas, las clínicas y los programas de ayuda esperan que la gente se conecte, encuentre información y mande correos. Necesitan estas primeras habilidades, más hábitos seguros con las contraseñas y los sitios web, para hacer las tareas de todos los días sin depender de otros ni caer en estafas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de cuarto o quinto grado)",
      "Dispositivos: quizás solo tienen un teléfono sencillo o una computadora de la biblioteca con tiempo limitado",
      "Costo: solo lugares gratis para conectarse y correo gratuito",
      "Privacidad: nada de contraseñas ni códigos reales mostrados o compartidos en la práctica; cerrar la sesión en las computadoras compartidas",
      "Ritmo: un paso pequeño a la vez, con mucha práctica con las manos"
    ],
    prerequisites: "Ninguno. Este es el primer curso para quienes son nuevos con la tecnología."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En un teléfono o una computadora", action: "tocar, deslizar, hacer clic, desplazarte y escribir, y corregir un error al escribir", standard: "sin ayuda" },
    { id: "O2", condition: "Donde vives", action: "encontrar un lugar gratis para conectarte, conectar un teléfono al Wi-Fi y ver si calificas para Lifeline", standard: "nombrando el lugar y su horario" },
    { id: "O3", condition: "Con algo que necesitas buscar", action: "buscar en internet y elegir un resultado confiable", standard: "saltándote los anuncios y cerrando las páginas con ventanas emergentes o premios" },
    { id: "O4", condition: "Con una cuenta de correo gratuita", action: "enviar un correo con un asunto, un mensaje corto y una foto o un archivo adjunto", standard: "revisando la dirección, el mensaje y el archivo adjunto antes de enviar" },
    { id: "O5", condition: "Cuando creas o usas una cuenta", action: "crear una contraseña segura y proteger tus cuentas", standard: "sin compartir nunca un código y cerrando la sesión en las computadoras compartidas" },
    { id: "O6", condition: "Cuando te atoras con una tarea de tecnología", action: "pedirle a un asistente de IA gratuito pasos cortos y describir lo que ves cuando un paso no coincide", standard: "sin escribir ninguna contraseña, código ni número privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Agarrar confianza y conectarte",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "tocar, deslizar, hacer clic, desplazarte y escribir en un teléfono o una computadora.",
          quickCheck: [
            { objective: "O1", q: "¿Qué significa \"deslizar\" en un teléfono?", options: ["Pasar el dedo por la pantalla", "Tocar dos veces rápido", "Apretar el botón de encendido", "Sacudir el teléfono"], answer: 0, why: "Deslizar es pasar el dedo para moverte hacia arriba, hacia abajo o de lado." },
            { objective: "O1", q: "Necesitas una mayúscula al principio de tu nombre. ¿Qué tecla mantienes apretada?", options: ["Enter", "Shift (Mayús)", "Backspace (Retroceso)", "La barra espaciadora"], answer: 1, why: "La tecla Shift (Mayús) hace una letra mayúscula." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "encontrar un lugar gratuito para conectarte, conectarte a Wi-Fi y saber dónde revisar si puedes pagar menos de internet.",
          quickCheck: [
            { objective: "O2", q: "Además de las bibliotecas, ¿dónde más puedes encontrar muchas veces Wi-Fi gratis?", options: ["Solo en casa", "En la bóveda de un banco", "En los centros comunitarios y los centros de empleo", "En ningún otro lugar"], answer: 2, why: "Muchos centros comunitarios, centros de empleo y algunos restaurantes ofrecen Wi-Fi gratis." },
            { objective: "O2", q: "Estás usando el Wi-Fi gratis de un café. ¿Qué debes evitar hacer?", options: ["Leer las noticias", "Ver el clima", "Buscar el horario del autobús", "Usar la banca en línea"], answer: 3, why: "En un Wi-Fi público, evita la banca en línea y escribir contraseñas importantes si puedes." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "buscar en internet y elegir un sitio web confiable.",
          quickCheck: [
            { objective: "O3", q: "¿Qué dirección web es más probable que sea el sitio oficial de una oficina del gobierno de Estados Unidos?", options: ["Una que termina en .gov", "Una con muchas ventanas emergentes", "Una marcada como \"Patrocinado\"", "Una que dice que ganaste un premio"], answer: 0, why: "Los sitios oficiales del gobierno de Estados Unidos casi siempre terminan en .gov." },
            { objective: "O3", q: "Buscas el horario de tu clínica. El primer resultado es un anuncio. ¿Qué haces?", options: ["Haces clic en el anuncio", "Te lo saltas y eliges el sitio web de la propia clínica", "Descargas lo que ofrece", "Escribes tu contraseña ahí"], answer: 1, why: "Los anuncios son resultados pagados; el sitio de la propia clínica es más confiable." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Agarrar confianza y conectarte",
        questions: [
          { objective: "O1", q: "En un teléfono, ¿cómo abres una aplicación?", options: ["Agitas el teléfono", "La tocas una vez", "Presionas Backspace", "Lo apagas"], answer: 1, why: "Un solo toque abre una aplicación." },
          { objective: "O1", q: "¿Qué tecla borra la letra que está antes del cursor?", options: ["Shift", "Enter", "Backspace", "Espacio"], answer: 2, why: "Backspace borra la letra que está antes del cursor." },
          { objective: "O2", q: "¿Dónde puedes usar casi siempre una computadora y Wi-Fi gratis?", options: ["En un anuncio emergente", "En una agencia de autos", "En la bóveda de un banco", "En una biblioteca pública"], answer: 3, why: "Las bibliotecas públicas ofrecen computadoras y Wi-Fi gratis." },
          { objective: "O2", q: "¿Qué es Lifeline?", options: ["Un programa federal que baja las cuentas de teléfono o internet para quienes califican", "Un juego gratis para el teléfono", "Un tipo de virus", "Un buscador"], answer: 0, why: "Lifeline da un descuento mensual en el servicio de teléfono o internet." },
          { objective: "O3", q: "Un resultado de búsqueda dice \"Patrocinado\". ¿Qué quiere decir?", options: ["Es un sitio del gobierno", "Es un anuncio pagado", "Siempre es la mejor respuesta", "Es tu correo"], answer: 1, why: "Los resultados patrocinados son anuncios." }
        ]
      }
    },
    {
      name: "Capítulo 2: Correo, contraseñas y cómo pedir ayuda",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "escribir y enviar un correo con un archivo adjunto.",
          quickCheck: [
            { objective: "O4", q: "En un correo, ¿qué va en la línea Para?", options: ["Tu contraseña", "El asunto", "La dirección de correo de la persona", "La foto"], answer: 2, why: "La línea Para lleva la dirección de correo de la persona a la que le escribes." },
            { objective: "O4", q: "Escribiste tu correo, pero se te olvidó la foto. ¿Qué haces antes de enviarlo?", options: ["Lo envías y esperas que salga bien", "Borras el correo", "Escribes \"ahí va la foto\"", "Haces clic en el clip y adjuntas la foto"], answer: 3, why: "El ícono del clip adjunta una foto o un archivo antes de que aprietes Enviar." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "crear una contraseña segura y proteger tu cuenta con la verificación en dos pasos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es la verificación en dos pasos?", options: ["Una segunda revisión, como un código que llega a tu teléfono", "Escribir tu contraseña dos veces", "Dos cuentas de correo", "Un nombre de usuario más largo"], answer: 0, why: "Después de tu contraseña, también escribes un código que te mandan al teléfono." },
            { objective: "O5", q: "Quieres una contraseña para tu correo nuevo. ¿Cuál es la mejor?", options: ["Tu fecha de cumpleaños", "Tres palabras al azar unidas con un número y un símbolo", "Tu nombre", "La misma contraseña que la de tu banco"], answer: 1, why: "Las palabras largas y al azar con un número y un símbolo son difíciles de adivinar." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "conectarte, encontrar información confiable, enviarla por correo y pedir ayuda de forma segura cuando te atoras.",
          quickCheck: [
            { objective: "O6", q: "¿Qué dos cosas debe decir tu primer prompt para pedir ayuda tecnológica?", options: ["Tu contraseña y tu correo", "Tu edad y tu dirección", "Tu aparato y lo que quieres hacer", "Tu banco y tu código"], answer: 2, why: "La IA necesita saber tu aparato y tu meta para darte los pasos correctos." },
            { objective: "O6", q: "La IA dice que toques \"Configuración\", pero no lo ves. ¿Qué haces?", options: ["Te rindes", "Reinicias el teléfono", "Le escribes tu contraseña a la IA", "Le dices a la IA lo que ves en tu pantalla"], answer: 3, why: "Describir tu pantalla ayuda a la IA a darte pasos que coincidan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Correo, contraseñas y cómo pedir ayuda",
        questions: [
          { objective: "O4", q: "¿Qué hace casi siempre el ícono del clip en el correo?", options: ["Borra el correo", "Imprime el correo", "Adjunta un archivo o una foto", "Cambia tu contraseña"], answer: 2, why: "El clip agrega un archivo adjunto." },
          { objective: "O5", q: "¿Cuál es la contraseña más segura?", options: ["password123", "Tu cumpleaños", "Tu nombre", "Tres palabras al azar con un número y un símbolo"], answer: 3, why: "Las contraseñas largas y al azar son difíciles de adivinar." },
          { objective: "O5", q: "Alguien llama diciendo que es de tu compañía de correo y te pide el código que llegó a tu teléfono. Tú:", options: ["Nunca lo compartes y cuelgas", "Se lo lees", "Se lo mandas por mensaje", "Lo publicas en internet"], answer: 0, why: "Ese código protege tu cuenta; las compañías de verdad no lo piden." },
          { objective: "O5", q: "¿Por qué la contraseña de tu correo debe ser distinta a las demás?", options: ["Se ve más bonita", "Con el correo se pueden cambiar las contraseñas de tus otras cuentas", "Es más corta", "Lo exige la ley"], answer: 1, why: "Si alguien entra a tu correo, puede cambiar las contraseñas de otras cuentas." },
          { objective: "O6", q: "¿Cuál es una buena forma de pedirle ayuda tecnológica a la IA?", options: ["\"ayuda\"", "\"Esta es mi contraseña, arréglalo\"", "\"Tengo un teléfono Android. ¿Cómo adjunto una foto en Gmail? Pasos cortos.\"", "\"teléfono\""], answer: 2, why: "Dice el aparato, la tarea y el formato." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades tecnológicas para principiantes",
    questions: [
      { objective: "O1", q: "Para moverte hacia arriba y hacia abajo en una página del teléfono, tú:", options: ["Deslizas", "Lo agitas", "Presionas Shift", "Lo apagas"], answer: 0, why: "Deslizar mueve la pantalla." },
      { objective: "O1", q: "En una computadora, hacer clic una vez con el botón izquierdo del ratón:", options: ["La apaga", "Elige algo", "Borra todo", "Imprime la página"], answer: 1, why: "Un solo clic selecciona o elige." },
      { objective: "O1", q: "El cursor muestra:", options: ["La hora", "La batería", "Dónde va a aparecer lo que escribes", "Tu contraseña"], answer: 2, why: "La rayita que parpadea marca dónde va el texto." },
      { objective: "O2", q: "Para conectar un teléfono a Wi-Fi, casi siempre abres:", options: ["La cámara", "La calculadora", "Un juego", "Configuración y luego Wi-Fi"], answer: 3, why: "La opción de Wi-Fi está en la aplicación de Configuración." },
      { objective: "O2", q: "¿Quién puede solicitar Lifeline?", options: ["Personas de bajos ingresos o que reciben ayuda como SNAP o Medicaid", "Solo negocios", "Solo mayores de 90 años", "Cualquiera que pague una cuota"], answer: 0, why: "Lifeline depende de los ingresos o de participar en ciertos programas de ayuda." },
      { objective: "O2", q: "¿Dónde revisas las cantidades y reglas más recientes de Lifeline?", options: ["En un mensaje de un desconocido", "En lifelinesupport.org", "En un anuncio emergente", "En un comentario de redes sociales"], answer: 1, why: "Lifeline Support es el sitio oficial del programa." },
      { objective: "O2", q: "En un Wi-Fi público, es mejor evitar:", options: ["Leer las noticias", "Ver el clima", "Hacer trámites del banco en línea", "Buscar el horario de la biblioteca"], answer: 2, why: "Las tareas delicadas son más seguras en una conexión privada." },
      { objective: "O3", q: "Un buscador es:", options: ["Una pieza de auto", "Una aplicación de correo", "Una contraseña", "Un sitio que encuentra otros sitios web, como Google o Bing"], answer: 3, why: "Los buscadores encuentran sitios web por ti." },
      { objective: "O3", q: "Los sitios web oficiales del gobierno de Estados Unidos suelen terminar en:", options: [".gov", ".win", ".prize", ".xyz"], answer: 0, why: ".gov es para los sitios del gobierno de Estados Unidos." },
      { objective: "O3", q: "Una página dice \"¡Ganaste un premio! ¡Descárgalo ya!\" Debes:", options: ["Descargarlo", "Cerrar la página y regresar", "Escribir tu número de banco", "Compartirlo con tus amigos"], answer: 1, why: "Los premios y los pedidos de descarga son señales de alerta." },
      { objective: "O4", q: "En un correo, el Asunto es:", options: ["La dirección de la persona", "El archivo adjunto", "Unas palabras que dicen de qué trata el correo", "Tu contraseña"], answer: 2, why: "El asunto es el título corto del correo." },
      { objective: "O4", q: "Antes de presionar Enviar, debes revisar:", options: ["Nada", "Solo el tipo de letra", "El clima", "La dirección, el mensaje y el archivo adjunto"], answer: 3, why: "Una revisión rápida evita errores." },
      { objective: "O4", q: "¿Cuál es un servicio de correo gratuito?", options: ["Gmail", "Una máquina de fax", "Una impresora", "Un módem de Wi-Fi"], answer: 0, why: "Gmail y Outlook.com son servicios de correo gratuitos." },
      { objective: "O5", q: "¿Cuál es la contraseña más débil?", options: ["Azul-Taco-Rio-58", "password123", "Lampara!Jardin!Siete!42", "Luna-Tenedor-Nopal-19"], answer: 1, why: "\"password123\" es una de las contraseñas que más se adivinan." },
      { objective: "O5", q: "La verificación en dos pasos quiere decir:", options: ["Escribir tu contraseña dos veces", "Dos personas comparten una cuenta", "Una segunda revisión, como un código a tu teléfono", "Caminar dos pasos"], answer: 2, why: "Agrega una segunda revisión después de tu contraseña." },
      { objective: "O5", q: "Cuando terminas en una computadora de la biblioteca, debes:", options: ["Dejar tu correo abierto", "Guardar tu contraseña", "Escribir tu contraseña en una nota adhesiva", "Cerrar sesión y cerrar el navegador"], answer: 3, why: "Cerrar sesión evita que la siguiente persona entre a tu cuenta." },
      { objective: "O6", q: "¿Qué NUNCA debes escribir en un asistente de IA?", options: ["El código que llegó a tu teléfono", "\"¿Cómo adjunto una foto?\"", "\"Tengo un iPhone\"", "\"Dame pasos cortos\""], answer: 0, why: "Los códigos y las contraseñas deben quedarse en privado." },
      { objective: "O6", q: "Un paso que te da la IA no coincide con tu pantalla. Debes:", options: ["Rendirte", "Decirle lo que ves en tu pantalla", "Reiniciar el internet", "Escribir tu contraseña"], answer: 1, why: "Describir tu pantalla le ayuda a darte los pasos correctos." },
      { objective: "O6", q: "¿Quién más te puede ayudar gratis con la tecnología?", options: ["Un anuncio emergente", "Un desconocido que te escribe", "El personal de la biblioteca", "Alguien que te pide tu código"], answer: 2, why: "El personal de la biblioteca ayuda con computadoras todos los días." },
      { objective: "O6", q: "Una buena primera instrucción para pedir ayuda tecnológica incluye:", options: ["Tu número de banco", "Solo una palabra", "Tu número de Seguro Social", "Tu aparato y lo que quieres hacer"], answer: 3, why: "Eso le da a la IA lo que necesita para ayudarte." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Búsqueda confiable",
        objective: "O3",
        notYet: "Usó un anuncio o un sitio que no es el de la biblioteca.",
        meets: "Encontró el horario en el sitio web oficial de la biblioteca.",
        exceeds: "Puede decir cómo supo que el sitio era oficial."
      },
      {
        name: "Captura de pantalla o foto",
        objective: "O1",
        notYet: "No hay captura de pantalla ni foto del horario.",
        meets: "Una captura de pantalla o una foto clara que muestra el horario.",
        exceeds: "La tomó sin ayuda."
      },
      {
        name: "Correo enviado",
        objective: "O4",
        notYet: "Al correo le falta el asunto, el mensaje o el archivo adjunto.",
        meets: "Enviado con un asunto, un mensaje corto y amable y la foto adjunta.",
        exceeds: "La persona confirmó que lo recibió y pudo ver la foto."
      },
      {
        name: "Seguridad de la cuenta",
        objective: "O5",
        notYet: "Contraseña débil, o no cerró la sesión en una computadora compartida.",
        meets: "La cuenta tiene una contraseña segura, y cerró la sesión en cualquier computadora compartida.",
        exceeds: "Activó la verificación en dos pasos."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que envían un correo o buscan información por su cuenta dentro de 30 días (encuesta de seguimiento)",
      "Personas que solicitan Lifeline o empiezan a usar las computadoras gratuitas de la biblioteca",
      "Personas que empiezan otro curso de Koach Learn dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente, o una computadora de la biblioteca o de un centro comunitario",
      "Una cuenta de correo gratuita (Gmail u Outlook.com); el personal de la biblioteca puede ayudar a crearla",
      "Un asistente de IA gratuito para la ayuda tecnológica",
      "Papel y lápiz para las notas y las pistas de la contraseña (no la contraseña)",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Ve despacio y deja que cada persona haga cada paso con sus propias manos; no le quites el ratón ni el teléfono.",
      "Ten personal listo para ayudar a crear una cuenta de correo antes de la Lección 4.",
      "Nunca pidas que muestren ni digan sus contraseñas o códigos.",
      "Antes de que se vayan, revisa que cada persona cierre su sesión en las computadoras compartidas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

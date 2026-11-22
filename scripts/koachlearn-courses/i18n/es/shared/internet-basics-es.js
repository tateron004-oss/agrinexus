"use strict";

// Koach Learn course (shared), Spanish translation of shared/internet-basics.js. See scripts/koachlearn-courses/README.md, "Translations".

const FTC_TECH = { name: "FTC: Cómo detectar, evitar y denunciar las estafas de soporte técnico", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics-es",
  lang: "es",
  translationOf: "internet-basics",
  category: "Seniors and Technology",
  name: "Fundamentos de internet",
  skills: "Conectarse al Wi-Fi, Usar un navegador web, Abrir y cambiar de pestaña, Buscar en la web, Leer una dirección web con seguridad, Guardar sitios favoritos",
  outcome: "conectar un teléfono o una computadora al Wi-Fi, abrir un navegador web, ir a un sitio por su dirección, buscar lo que necesitas, distinguir una dirección web segura de una riesgosa y guardar un sitio que usas seguido para volver a él con un solo toque.",
  about: [
    "Internet te permite ver el clima, encontrar el horario del consultorio de tu médico, leer las noticias, consultar el horario del autobús y ver fotos de la familia. Este curso empieza desde el principio y no supone ninguna experiencia.",
    "En el Capítulo 1 aprendes qué es internet, cómo conectarte al Wi-Fi y cómo usar un navegador web. En el Capítulo 2 buscas cosas, aprendes a leer una dirección web para evitar sitios falsos y ventanas que asustan, y guardas los sitios que más usas.",
    "Cada lección dura unos cinco minutos. Ten cerca un teléfono, una tableta o una computadora para probar cada paso. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Planea una salida sencilla. Conéctate al Wi-Fi, abre un navegador web y busca un lugar que te gustaría visitar, como un parque, un museo o una biblioteca. Abre su sitio web oficial, revisa su horario y su dirección, abre una segunda pestaña con el clima de mañana, agranda el texto si lo necesitas y guarda el sitio oficial en marcadores para encontrarlo de nuevo con un solo toque.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que son nuevos en internet o que solo lo usan con una o dos aplicaciones: personas mayores, sus cuidadores, personas que regresan a la comunidad, recién llegados y cualquiera que quiera conectarse con confianza.",
    startingPoint: "Pueden encender un teléfono, una tableta o una computadora y tocar o hacer clic. Muchos nunca se han unido solos a una red Wi-Fi, escrito una dirección web, usado pestañas o marcadores, ni comprobado si una dirección web es real.",
    gap: "Los horarios, los mapas, el clima, la salud, los beneficios y las compras ahora se buscan en línea. Quien no puede conectarse, buscar y distinguir un sitio real de uno falso depende de otros, se pierde información, gasta los datos de su teléfono o cae en ventanas emergentes falsas y sitios que imitan a otros.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican palabras como enrutador, navegador, pestaña y dominio",
      "Dispositivos: un teléfono, una tableta o una computadora; hay pasos para iPhone, Android y computadoras",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total",
      "Costo: Wi-Fi gratuito en casa, en una biblioteca o en un café; sin aplicaciones de pago",
      "Seguridad: al practicar, nada de bancos ni información privada en el Wi-Fi público"
    ],
    prerequisites: "Ninguno. Usar un teléfono inteligente y una tableta o Habilidades básicas de computación ayudan a quienes nunca han usado un aparato."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Sin notas", action: "explicar qué son internet y la web y las dos formas principales en que se conecta un aparato", standard: "nombrando bien el Wi-Fi y los datos móviles y cuándo el Wi-Fi ahorra los datos de tu plan del teléfono" },
    { id: "O2", condition: "Con el nombre y la contraseña de una red", action: "unirte a una red Wi-Fi en tu teléfono, tableta o computadora y nombrar lo que hay que evitar en el Wi-Fi público", standard: "conectándote sin ayuda y nombrando los bancos y la información privada como cosas que hay que evitar" },
    { id: "O3", condition: "Con un navegador web", action: "abrir un sitio web escribiendo su dirección y luego usar el botón de atrás, las pestañas y el zoom", standard: "con el sitio correcto abierto, una segunda pestaña abierta y el texto más grande" },
    { id: "O4", condition: "Ante algo que necesitas encontrar", action: "buscar con unas pocas palabras clave y elegir un resultado útil que no sea un anuncio", standard: "leyendo la dirección web antes de abrir el resultado" },
    { id: "O5", condition: "Ante direcciones web, una ventana emergente que asusta y un sitio que usas seguido", action: "distinguir una dirección web segura de una riesgosa, cerrar las ventanas emergentes falsas y guardar el sitio oficial en marcadores para volver a él con seguridad", standard: "eligiendo bien cada vez y volviendo a abrir el sitio guardado con un solo toque" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conectarse",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es internet",
          minutes: 4,
          goal: "Explicar qué son internet y la web y cómo se conecta un aparato.",
          text: [
            "Internet es una red enorme que une computadoras y teléfonos de todo el mundo para que compartan información. La World Wide Web, o la web, es la parte que visitas con un navegador web: sitios web con páginas, fotos y videos. El correo electrónico y las videollamadas también viajan por internet.",
            "Tu aparato se conecta de una de dos formas principales. El Wi-Fi es una conexión inalámbrica que sale de una caja llamada enrutador (\"router\"), en casa, en una biblioteca o en un café. Los datos móviles vienen de las antenas de tu compañía telefónica y son parte de tu plan de teléfono.",
            "El Wi-Fi de casa normalmente no gasta los datos de tu plan de teléfono, así que es una buena opción para videos y descargas grandes."
          ],
          words: [["Internet", "una red mundial que une computadoras y teléfonos."], ["Web (World Wide Web)", "los sitios web que visitas con un navegador."], ["Enrutador (router)", "la caja que envía la señal de Wi-Fi."], ["Datos móviles", "internet que viene de las antenas de tu compañía telefónica, parte de tu plan de teléfono."]],
          slides: [
            { title: "Internet y la web", bullets: ["Internet: una red mundial de aparatos", "Web: los sitios web que visitas con un navegador", "El correo y las videollamadas también usan internet"] },
            { title: "Dos formas de conectarse", bullets: ["Wi-Fi: inalámbrico, sale de un enrutador", "Datos móviles: de las antenas, parte de tu plan"] },
            { title: "Consejo", bullets: ["Usa el Wi-Fi de casa para videos y descargas grandes", "Así ahorras los datos de tu plan"] }
          ],
          tryIt: "En tu teléfono o tableta, mira la parte de arriba de la pantalla. Busca el símbolo de Wi-Fi (líneas curvas) o el de datos móviles (barras o letras como 5G). ¿Cuál está activo ahora?",
          youCanNow: "explicar qué son internet y la web y saber si tu aparato está en Wi-Fi o en datos móviles.",
          quickCheck: [
            { objective: "O1", q: "¿Qué son los datos móviles?", options: ["Una caja en tu casa", "Una lista de sitios web que guardaste", "Internet de las antenas de tu compañía de teléfono, parte de tu plan del teléfono", "Un tipo de navegador web"], answer: 2, why: "Los datos móviles vienen de las antenas y son parte de tu plan del teléfono." },
            { objective: "O1", q: "Quieres ver un video largo en tu teléfono en casa. ¿Qué conexión usarías?", options: ["El Wi-Fi de la casa, para no gastar los datos de tu plan del teléfono", "Los datos móviles, porque siempre son gratis", "Los videos no necesitan conexión", "Un marcador"], answer: 0, why: "El Wi-Fi de la casa normalmente no gasta los datos de tu plan del teléfono." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Conectarse al Wi-Fi",
          minutes: 5,
          goal: "Unirte a una red Wi-Fi en un teléfono, una tableta o una computadora.",
          text: [
            "Para unirte a un Wi-Fi necesitas el nombre de la red y su contraseña. En casa, los dos suelen estar impresos en una etiqueta del enrutador. En una biblioteca o un café, pregunta al personal o busca un letrero.",
            "En un iPhone o iPad: abre Configuración (o Ajustes), toca Wi-Fi, toca el nombre de la red y escribe la contraseña. En Android: abre Configuración, toca Redes e internet o Conexiones, luego Wi-Fi, elige la red y escribe la contraseña. En una computadora: haz clic en el símbolo de Wi-Fi cerca del reloj, elige la red y escribe la contraseña.",
            "El Wi-Fi público es práctico, pero lo comparten otras personas. En el Wi-Fi público, evita los trámites bancarios y no escribas información privada. Únete solo a redes cuyo nombre te dio el personal, no a redes con nombres raros."
          ],
          steps: ["Busca el nombre de la red y la contraseña (etiqueta del enrutador, personal o un letrero).", "Abre Configuración y luego Wi-Fi (en una computadora, haz clic en el símbolo de Wi-Fi cerca del reloj).", "Toca o haz clic en el nombre de la red.", "Escribe la contraseña con cuidado; las mayúsculas importan.", "Espera a que aparezca el símbolo de Wi-Fi arriba."],
          words: [["Nombre de la red", "el nombre que muestra una conexión Wi-Fi en la lista, también llamado SSID."], ["Contraseña del Wi-Fi", "el código que escribes para unirte a una red Wi-Fi."], ["Wi-Fi público", "Wi-Fi que comparten muchas personas en lugares como bibliotecas y cafés."]],
          slides: [
            { title: "Necesitas dos cosas", bullets: ["El nombre de la red", "La contraseña (etiqueta del enrutador, personal o un letrero)"] },
            { title: "Cómo unirte", bullets: ["Teléfono o tableta: Configuración y luego Wi-Fi", "Computadora: símbolo de Wi-Fi cerca del reloj", "Elige la red y escribe la contraseña"] },
            { title: "Seguridad en el Wi-Fi público", bullets: ["Nada de trámites bancarios ni información privada", "Únete solo a la red que te dio el personal"] }
          ],
          tryIt: "Abre la configuración de Wi-Fi y busca la lista de redes. Si estás en casa o en una biblioteca, únete a la correcta. Comprueba que aparezca el símbolo de Wi-Fi arriba.",
          youCanNow: "unirte a una red Wi-Fi y usar el Wi-Fi público con seguridad.",
          quickCheck: [
            { objective: "O2", q: "¿Qué dos cosas necesitas para unirte a una red Wi-Fi?", options: ["Tu correo y tu número de teléfono", "El nombre de la red y su contraseña", "Un navegador y un marcador", "Una pestaña y un buscador"], answer: 1, why: "Eliges la red por su nombre y escribes su contraseña." },
            { objective: "O2", q: "En un café ves dos redes: una que te dio el personal y otra llamada \"FREE_FAST_WIFI_123\". ¿Qué harías?", options: ["Unirte a la rara porque dice gratis", "Unirte a las dos a la vez", "Escribir tus datos del banco para probar la rara", "Unirte solo a la red que te dio el personal"], answer: 3, why: "Únete solo a redes cuyo nombre te dio el personal, no a las que tienen nombres raros." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar un navegador web",
          minutes: 5,
          goal: "Abrir un sitio web por su dirección y moverte con el botón de atrás y las pestañas.",
          text: [
            "Un navegador web es la aplicación que usas para visitar sitios web. Los más comunes son Chrome, Safari, Edge y Firefox. Arriba está la barra de direcciones, una casilla larga donde escribes una dirección web como weather.gov y presionas Enter o Ir.",
            "Botones útiles: la flecha de atrás vuelve a la página donde estabas; la flecha en círculo vuelve a cargar la página. Las pestañas te dejan tener varias páginas abiertas a la vez, como carpetas sobre un escritorio. Abre una pestaña nueva con el botón más (+) y cambia de una a otra tocando o haciendo clic en una pestaña.",
            "Si las letras son muy pequeñas, puedes ampliar. En una computadora, mantén presionada la tecla Ctrl y presiona + (Command y + en una Mac); Ctrl y - la achica. En un teléfono, separa dos dedos sobre la pantalla."
          ],
          steps: ["Abre el navegador (Chrome, Safari, Edge o Firefox).", "Toca la barra de direcciones arriba.", "Escribe una dirección web, como weather.gov, y presiona Enter o Ir.", "Usa la flecha de atrás para volver.", "Presiona + para abrir una pestaña nueva.", "Ampliar: Ctrl y + (Command y + en Mac), o separa dos dedos en un teléfono."],
          words: [["Navegador web", "la aplicación que usas para visitar sitios web, como Chrome, Safari, Edge o Firefox."], ["Barra de direcciones", "la casilla de arriba del navegador donde escribes una dirección web."], ["Pestaña", "una página abierta en el navegador; puedes tener varias abiertas a la vez."], ["Ampliar (zoom)", "hacer más grande o más pequeño lo que se ve en la pantalla."]],
          slides: [
            { title: "El navegador", bullets: ["Chrome, Safari, Edge o Firefox", "Barra de direcciones arriba", "Escribe una dirección y presiona Enter o Ir"] },
            { title: "Botones útiles", bullets: ["Flecha de atrás: la página anterior", "Flecha en círculo: volver a cargar", "+ abre una pestaña nueva"] },
            { title: "Hazlo más grande", bullets: ["Computadora: Ctrl y + (Command y + en Mac)", "Teléfono: separa dos dedos"] }
          ],
          tryIt: "Abre un navegador y escribe weather.gov en la barra de direcciones. Luego abre una pestaña nueva y ve al sitio web de tu biblioteca local. Cambia entre las dos pestañas y agranda el texto en una de ellas.",
          youCanNow: "abrir sitios web por su dirección, usar el botón de atrás, cambiar de pestaña y agrandar el texto.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace la flecha en círculo en un navegador?", options: ["Cierra el navegador", "Abre una pestaña nueva", "Guarda un marcador", "Vuelve a cargar la página"], answer: 3, why: "La flecha en círculo vuelve a cargar la página en la que estás." },
            { objective: "O3", q: "Estás leyendo una receta y quieres ver el clima sin perder la receta. ¿Qué harías?", options: ["Abrir una pestaña nueva con el botón más (+)", "Cerrar la página de la receta", "Apagar el Wi-Fi", "Reiniciar el aparato"], answer: 0, why: "Las pestañas te dejan tener varias páginas abiertas a la vez." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conectarse",
        questions: [
          { objective: "O1", q: "¿Qué es la web?", options: ["Un tipo de cable", "Solo la casa de una araña", "Tu cuenta del teléfono", "Los sitios web que visitas con un navegador"], answer: 3, why: "La web son los sitios web que visitas con un navegador." },
          { objective: "O2", q: "¿Dónde suele estar impresa la contraseña del Wi-Fi de casa?", options: ["En el control remoto de la televisión", "En una etiqueta del enrutador", "En la funda de tu teléfono", "En el periódico"], answer: 1, why: "Los enrutadores suelen tener el nombre y la contraseña en una etiqueta." },
          { objective: "O2", q: "En una computadora, ¿dónde haces clic normalmente para unirte al Wi-Fi?", options: ["En la papelera", "En el símbolo de Wi-Fi cerca del reloj", "En la impresora", "En la cámara"], answer: 1, why: "El símbolo de Wi-Fi cerca del reloj muestra las redes." },
          { objective: "O2", q: "Estás en el Wi-Fi de un café. ¿Qué debes evitar?", options: ["Ver el clima", "Leer las noticias", "Hacer trámites bancarios en línea", "Buscar una receta"], answer: 2, why: "El Wi-Fi público es compartido, así que evita el banco y los datos privados." },
          { objective: "O3", q: "¿Dónde escribes una dirección web como weather.gov?", options: ["En la cámara", "En un mensaje de texto", "En la calculadora", "En la barra de direcciones arriba del navegador"], answer: 3, why: "La barra de direcciones te lleva a un sitio web." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar cosas y mantenerse seguro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Buscar en la web",
          minutes: 5,
          goal: "Buscar algo específico y abrir un resultado útil.",
          text: [
            "Si no sabes una dirección web, búscala. Escribe unas pocas palabras clave en la barra de direcciones o en un buscador como Google o Bing, y presiona Enter. Por ejemplo: \"horario biblioteca pública Springfield\".",
            "La página de resultados muestra una lista de enlaces. Cada uno tiene un título azul, la dirección web en letra pequeña y una descripción corta. Lee la dirección web antes de tocar. Los resultados de arriba marcados como \"Patrocinado\" o \"Anuncio\" son anuncios pagados.",
            "También puedes buscar con la voz. Toca el micrófono en la casilla de búsqueda y di lo que quieres, como \"clima de mañana\"."
          ],
          steps: ["Toca la barra de direcciones o una casilla de búsqueda.", "Escribe unas pocas palabras clave, como el lugar, la ciudad y lo que quieres.", "Presiona Enter o el botón de buscar.", "Sáltate los resultados marcados como Patrocinado o Anuncio.", "Lee la dirección web y luego toca el resultado que quieres."],
          words: [["Buscar", "escribir palabras para encontrar páginas web sobre ellas."], ["Resultados", "la lista de páginas web que encuentra la búsqueda."], ["Enlace", "palabras o una imagen que tocas para ir a otra página."]],
          slides: [
            { title: "Busca con palabras clave", bullets: ["\"horario biblioteca pública Springfield\"", "Escribe en la barra de direcciones o en Google o Bing"] },
            { title: "Leer los resultados", bullets: ["Título azul, dirección web, descripción corta", "Patrocinado o Anuncio = pagado", "Lee la dirección antes de tocar"] },
            { title: "Usa tu voz", bullets: ["Toca el micrófono", "Di: \"clima de mañana\""] }
          ],
          tryIt: "Busca el horario de un lugar cerca de ti, como una farmacia o un parque. Sáltate los anuncios, abre el resultado oficial y encuentra el horario.",
          youCanNow: "buscar en la web y elegir un resultado útil que no sea un anuncio.",
          quickCheck: [
            { objective: "O4", q: "En una página de resultados, ¿qué muestra la letra pequeña debajo de cada título azul?", options: ["La dirección web", "El clima", "Tu contraseña", "El precio de la página"], answer: 0, why: "Cada resultado muestra su dirección web en letra pequeña, para que la leas antes de tocar." },
            { objective: "O4", q: "Tienes las manos ocupadas y quieres saber el clima de mañana. ¿Qué harías?", options: ["Escribir una historia larga en la casilla de búsqueda", "Abrir un marcador de un sitio de compras", "Tocar el micrófono en la casilla de búsqueda y decir \"clima mañana\"", "Reiniciar el teléfono"], answer: 2, why: "Puedes buscar con la voz tocando el micrófono." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Leer una dirección web y evitar estafas",
          minutes: 5,
          goal: "Distinguir una dirección web segura de una riesgosa y manejar las ventanas emergentes que asustan.",
          text: [
            "Una dirección web tiene una parte principal, el dominio, justo antes de la primera barra sola (/), como irs.gov o amazon.com. Esa parte principal te dice quién maneja el sitio. Los sitios falsos usan nombres parecidos como \"amaz0n-deals.com\" o \"irs-refund.help\".",
            "Busca https y un candado al comienzo de la dirección. Significa que la conexión es privada, pero los estafadores también pueden tenerlo, así que el nombre del dominio sigue siendo lo más importante.",
            "Algunas ventanas emergentes falsas dicen que tu computadora tiene un virus y dan un número de teléfono para llamar. La FTC (la Comisión Federal de Comercio de EE. UU.) dice que las advertencias de seguridad reales nunca te piden llamar a un número, y que las empresas de tecnología reales no te llaman ni te escriben por un problema. No llames. Cierra la pestaña o el navegador; si no se cierra, reinicia el aparato. Si estás preocupado, pregunta a alguien de confianza."
          ],
          steps: ["Encuentra el dominio: el nombre justo antes de la primera barra sola.", "Comprueba que sea el nombre real que esperabas.", "Busca https y el candado, pero no confíes solo en eso.", "¿Una ventana que asusta con un número de teléfono? No llames.", "Cierra la pestaña o reinicia el aparato.", "Denuncia las estafas de soporte técnico en ReportFraud.ftc.gov."],
          words: [["Dominio", "el nombre principal de una dirección web que te dice quién maneja el sitio, como irs.gov."], ["Ventana emergente", "una ventana pequeña que aparece de pronto encima de una página web."], ["Estafa de soporte técnico", "una advertencia o llamada falsa que dice que tu aparato tiene un problema para sacarte dinero o acceso."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Encuentra el dominio", bullets: ["El nombre justo antes de la primera barra sola", "irs.gov es real; irs-refund.help no lo es"] },
            { title: "https y el candado", bullets: ["La conexión es privada", "Los estafadores también pueden tenerlo", "El nombre del dominio es lo más importante"] },
            { title: "Ventanas que asustan (FTC)", bullets: ["Las advertencias reales nunca piden llamar a un número", "No llames", "Cierra la pestaña o reinicia el aparato"] }
          ],
          tryIt: "Mira tres direcciones web en tu pantalla o en tu correo. En cada una, señala el dominio y di quién maneja el sitio.",
          youCanNow: "leer una dirección web para ver quién maneja un sitio y manejar con seguridad las falsas ventanas de virus.",
          quickCheck: [
            { objective: "O5", q: "¿Qué parte de una dirección web te dice quién maneja el sitio?", options: ["El https del comienzo", "Las palabras después de la primera barra sola", "El dominio, justo antes de la primera barra sola", "El candado"], answer: 2, why: "El dominio, como irs.gov, te dice quién maneja el sitio." },
            { objective: "O5", q: "Una ventana emergente dice que tu computadora tiene un virus y muestra un número para llamar. No se cierra. ¿Qué harías?", options: ["Llamar al número de inmediato", "Reiniciar el aparato y no llamar", "Escribir tu número de tarjeta para pagar el arreglo", "Dejarla en la pantalla por días"], answer: 1, why: "Las advertencias de seguridad reales nunca te piden llamar; reinicia si la ventana emergente no se cierra." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guardar tus sitios favoritos",
          minutes: 4,
          goal: "Guardar un sitio web en marcadores y volver a abrirlo con un solo toque.",
          text: [
            "Un marcador (también llamado favorito) guarda un sitio web para que vuelvas sin buscarlo otra vez. Es la forma más segura de volver a los sitios que usas seguido, como tu banco, tu farmacia o un sitio de noticias, porque te saltas los resultados de búsqueda falsos.",
            "En una computadora, haz clic en la estrella al final de la barra de direcciones. En un iPhone o iPad con Safari, toca el botón Compartir y elige Agregar marcador. En Chrome en un teléfono, abre el menú (tres puntos) y toca la estrella. En muchos teléfonos también puedes elegir \"Agregar a la pantalla de inicio\" para crear un ícono como el de una aplicación.",
            "Para abrir un marcador después, abre la lista de marcadores en el menú del navegador, o toca el ícono en tu pantalla de inicio."
          ],
          steps: ["Abre el sitio web oficial que quieres guardar.", "Computadora: haz clic en la estrella de la barra de direcciones.", "Safari en iPhone o iPad: botón Compartir y luego Agregar marcador.", "Chrome en un teléfono: menú de tres puntos y luego la estrella.", "Para abrirlo después: ve a Marcadores en el menú, o toca el ícono de la pantalla de inicio."],
          words: [["Marcador / favorito", "un enlace guardado a un sitio web para abrirlo de nuevo rápido."], ["Pantalla de inicio", "la pantalla principal de un teléfono o tableta, que muestra los íconos de las aplicaciones."]],
          slides: [
            { title: "¿Por qué guardar marcadores?", bullets: ["Vuelves a un sitio con un toque", "Te saltas resultados de búsqueda falsos", "Ideal para el banco, la farmacia, las noticias"] },
            { title: "Cómo guardar un marcador", bullets: ["Computadora: la estrella de la barra de direcciones", "Safari: Compartir y luego Agregar marcador", "Chrome en el teléfono: tres puntos y luego la estrella"] },
            { title: "Ábrelo de nuevo", bullets: ["Marcadores en el menú del navegador", "O toca el ícono de la pantalla de inicio"] }
          ],
          tryIt: "Tarea final: planea una salida. Busca un parque, un museo o una biblioteca, abre su sitio oficial, revisa su horario y su dirección, abre el clima de mañana en una segunda pestaña, agranda el texto si hace falta y guarda el sitio oficial en marcadores.",
          youCanNow: "conectarte por tu cuenta, encontrar lo que necesitas, evitar sitios falsos y guardar tus sitios favoritos.",
          quickCheck: [
            { objective: "O5", q: "En una computadora, ¿en qué haces clic para guardar un sitio web en marcadores?", options: ["La flecha de atrás", "La flecha en círculo", "El botón más (+)", "La estrella al final de la barra de direcciones"], answer: 3, why: "La estrella al final de la barra de direcciones guarda un marcador." },
            { objective: "O5", q: "Pides medicinas en el sitio web de tu farmacia todos los meses. ¿Cómo volverías a él con seguridad?", options: ["Buscarlo cada vez y tocar el primer anuncio", "Guardar el sitio oficial en marcadores y abrirlo desde tus marcadores", "Hacer clic en un enlace de un mensaje de texto", "Adivinar la dirección cada vez"], answer: 1, why: "Un marcador del sitio oficial evita los resultados de búsqueda falsos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar cosas y mantenerse seguro",
        questions: [
          { objective: "O4", q: "¿Qué búsqueda es la más clara?", options: ["\"lugar\"", "\"horario biblioteca Springfield\"", "\"¿abierto?\"", "\"ayúdame a encontrarlo por favor ya\""], answer: 1, why: "Unas pocas palabras clave con el lugar y lo que quieres funcionan mejor." },
          { objective: "O5", q: "En www.irs.gov/refunds, ¿cuál es el dominio?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "El dominio es el nombre justo antes de la primera barra sola." },
          { objective: "O5", q: "Una ventana emergente dice que tu computadora tiene un virus y que llames ya a un número. ¿Qué haces?", options: ["Llamas al número", "Pagas con una tarjeta de regalo", "Les das acceso remoto", "No llamas; cierras la pestaña o reinicias"], answer: 3, why: "La FTC dice que las advertencias reales nunca piden llamar a un número." },
          { objective: "O5", q: "Un sitio web muestra https y un candado. Eso significa:", options: ["Que es un sitio del gobierno", "Que seguro es honesto", "Que la conexión es privada, pero igual revisas el dominio", "Que es gratis"], answer: 2, why: "Los estafadores también pueden tener https; el dominio es lo más importante." },
          { objective: "O5", q: "¿Cuál es la forma más segura de volver cada mes al sitio de tu farmacia?", options: ["Hacer clic en un anuncio", "Un marcador que guardaste desde el sitio oficial", "Un enlace en un mensaje de un desconocido", "Adivinar la dirección"], answer: 1, why: "Un marcador te salta los resultados y enlaces falsos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de internet",
    questions: [
      { objective: "O1", q: "Internet es:", options: ["Un solo sitio web", "Un canal de televisión", "Una guía telefónica", "Una red mundial que une computadoras y teléfonos"], answer: 3, why: "Une aparatos de todo el mundo." },
      { objective: "O1", q: "El Wi-Fi sale de:", options: ["Una batería", "La televisión", "Un enrutador", "Una impresora"], answer: 2, why: "Un enrutador envía la señal de Wi-Fi." },
      { objective: "O1", q: "Los datos móviles son:", options: ["Un navegador", "Wi-Fi gratis en la biblioteca", "Un tipo de correo", "Internet de las antenas, parte de tu plan de teléfono"], answer: 3, why: "Los datos móviles llegan por tu compañía telefónica." },
      { objective: "O1", q: "¿Por qué usar el Wi-Fi de casa para ver videos?", options: ["Los videos solo funcionan con Wi-Fi", "Normalmente ahorra los datos de tu plan de teléfono", "Lo exige la ley", "Hace el teléfono más liviano"], answer: 1, why: "El Wi-Fi de casa normalmente no gasta los datos de tu plan." },
      { objective: "O2", q: "Para unirte a un Wi-Fi necesitas:", options: ["Una impresora", "Tu número de banco", "El nombre de la red y la contraseña", "Un teléfono nuevo"], answer: 2, why: "Con el nombre y la contraseña puedes unirte." },
      { objective: "O2", q: "En un iPhone, el Wi-Fi está en:", options: ["Reloj", "Fotos", "Calculadora", "Configuración"], answer: 3, why: "Configuración y luego Wi-Fi." },
      { objective: "O2", q: "En el Wi-Fi público, ¿qué es una mala idea?", options: ["Leer las noticias", "Hacer trámites bancarios en línea", "Ver un mapa", "Buscar un horario"], answer: 1, why: "El Wi-Fi público es compartido; evita las tareas privadas." },
      { objective: "O3", q: "¿Cuál de estos es un navegador web?", options: ["Calculadora", "Chrome", "Cámara", "Reloj"], answer: 1, why: "Chrome, Safari, Edge y Firefox son navegadores." },
      { objective: "O3", q: "¿Qué hace la flecha de atrás de un navegador?", options: ["Borra el sitio web", "Apaga la computadora", "Vuelve a la página donde estabas antes", "Imprime la página"], answer: 2, why: "Atrás vuelve a la página anterior." },
      { objective: "O3", q: "Las pestañas te permiten:", options: ["Apagar el Wi-Fi", "Pagar cuentas automáticamente", "Cargar la batería", "Tener varias páginas abiertas a la vez"], answer: 3, why: "Cada pestaña es una página abierta." },
      { objective: "O3", q: "Las letras de una página web se ven muy pequeñas en una computadora. Presiona:", options: ["Suprimir", "Ctrl y + (Command y + en Mac)", "Escape", "Shift y 0"], answer: 1, why: "Ctrl y + amplía." },
      { objective: "O3", q: "En un teléfono, ¿cómo agrandas una página?", options: ["Separando dos dedos sobre la pantalla", "Sacudiendo el teléfono", "Apagándolo", "Presionando el botón de volumen"], answer: 0, why: "Separar dos dedos amplía." },
      { objective: "O4", q: "Los resultados de búsqueda marcados como \"Patrocinado\" son:", options: ["Anuncios pagados", "Siempre el sitio oficial", "Páginas del gobierno", "Advertencias de virus"], answer: 0, why: "Patrocinado significa que alguien pagó por él." },
      { objective: "O4", q: "Antes de tocar un resultado de búsqueda, debes:", options: ["Leer su dirección web", "Cerrar el navegador", "Reiniciar el teléfono", "Tocar todos los resultados"], answer: 0, why: "La dirección muestra quién maneja el sitio." },
      { objective: "O4", q: "¿Cómo puedes buscar sin escribir?", options: ["Tocando el micrófono y hablando", "Sacudiendo el teléfono", "Usando la calculadora", "Subiendo el volumen"], answer: 0, why: "La búsqueda por voz te deja decir lo que quieres." },
      { objective: "O5", q: "¿Qué dirección es más probablemente falsa?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Un cero en lugar de una O es un truco de imitación." },
      { objective: "O5", q: "https y un candado te dicen:", options: ["Que la conexión es privada", "Que el sitio es honesto, seguro", "Que el sitio es gratis", "Que el sitio es un banco"], answer: 0, why: "Protegen la conexión, no garantizan la honestidad." },
      { objective: "O5", q: "Una advertencia de seguridad real en tu computadora:", options: ["Nunca te pedirá llamar a un número de teléfono", "Te pedirá tarjetas de regalo", "Te pedirá que llames enseguida", "Te pedirá la contraseña de tu banco"], answer: 0, why: "La FTC dice que las advertencias reales nunca piden llamar a un número." },
      { objective: "O5", q: "Una ventana emergente no se cierra. ¿Qué haces?", options: ["Reinicias el aparato", "Llamas al número que aparece", "Escribes tu contraseña", "Pagas lo que piden"], answer: 0, why: "Reiniciar quita la ventana de forma segura." },
      { objective: "O5", q: "Un marcador es:", options: ["Un enlace guardado a un sitio web", "Solo un separador de papel para libros", "Un virus", "Una contraseña"], answer: 0, why: "Los marcadores te llevan de vuelta rápido a un sitio." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      6,
      8,
      10,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Conectarse al Wi-Fi",
        objective: "O2",
        notYet: "El aparato no está conectado, o se unió a una red con un nombre desconocido.",
        meets: "El aparato está conectado sin ayuda a una red Wi-Fi conocida.",
        exceeds: "Además, explica qué hay que evitar en el Wi-Fi público."
      },
      {
        name: "Encontrar el sitio oficial",
        objective: "O4",
        notYet: "El sitio que se abrió es un anuncio o no es el sitio propio del lugar.",
        meets: "Se encuentra con el buscador el sitio web oficial del lugar, y se encuentran su horario y su dirección.",
        exceeds: "Se leyó y se revisó la dirección web antes de tocar."
      },
      {
        name: "Usar el navegador",
        objective: "O3",
        notYet: "Solo se abrió una página, o la persona no pudo volver a la primera página.",
        meets: "Una segunda pestaña muestra el clima de mañana, y la persona cambia entre las pestañas.",
        exceeds: "Además, agranda el texto a un tamaño cómodo y usa el botón de atrás."
      },
      {
        name: "Dirección segura y marcador",
        objective: "O5",
        notYet: "No hay marcador, o se guardó un sitio que imita a otro o un anuncio.",
        meets: "El sitio oficial está guardado en marcadores y se vuelve a abrir con un solo toque.",
        exceeds: "Además, explica cómo el dominio muestra que el sitio es real."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del plan de salida",
      "Participantes que dicen haber usado internet por su cuenta para una necesidad real, como horarios, el clima o un sitio de salud, en los 30 días después del curso (encuesta de seguimiento)",
      "Participantes que dicen haber cerrado una ventana emergente falsa o evitado un sitio que imita a otro",
      "Participantes que toman un siguiente curso, como Correo electrónico y comunicación en línea o Fundamentos de alfabetización digital"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono, una tableta o una computadora para practicar",
      "El nombre y la contraseña de una red Wi-Fi (de la casa, la biblioteca o el propio programa)",
      "Papel y lápiz para anotar el horario y la dirección del lugar",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Escriba en el pizarrón el nombre y la contraseña del Wi-Fi del programa para que se unan a la red correcta y no a una que la imite.",
      "Agrupe a las personas por aparato (iPhone, Android o computadora) para que los pasos coincidan con lo que ven en la pantalla.",
      "Use un parque, una biblioteca o un museo local para la tarea de la salida, así el sitio oficial es fácil de comprobar.",
      "Muestre una imagen de una ventana emergente falsa de virus para que la reconozcan, pero nunca abra un sitio de estafa real en clase.",
      "Vaya despacio con las personas mayores: deje que hagan cada toque ellas mismas en lugar de hacerlo por ellas."
    ]
  }
};

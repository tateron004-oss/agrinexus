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
  chapters: [
    {
      name: "Capítulo 1: Conectarse",
      lessons: [
        {
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
          youCanNow: "explicar qué son internet y la web y saber si tu aparato está en Wi-Fi o en datos móviles."
        },
        {
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
          youCanNow: "unirte a una red Wi-Fi y usar el Wi-Fi público con seguridad."
        },
        {
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
          youCanNow: "abrir sitios web por su dirección, usar el botón de atrás, cambiar de pestaña y agrandar el texto."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conectarse",
        questions: [
          { q: "¿Qué es la web?", options: ["Un tipo de cable", "Solo la casa de una araña", "Tu cuenta del teléfono", "Los sitios web que visitas con un navegador"], answer: 3, why: "La web son los sitios web que visitas con un navegador." },
          { q: "¿Dónde suele estar impresa la contraseña del Wi-Fi de casa?", options: ["En el control remoto de la televisión", "En una etiqueta del enrutador", "En la funda de tu teléfono", "En el periódico"], answer: 1, why: "Los enrutadores suelen tener el nombre y la contraseña en una etiqueta." },
          { q: "En una computadora, ¿dónde haces clic normalmente para unirte al Wi-Fi?", options: ["En la papelera", "En el símbolo de Wi-Fi cerca del reloj", "En la impresora", "En la cámara"], answer: 1, why: "El símbolo de Wi-Fi cerca del reloj muestra las redes." },
          { q: "Estás en el Wi-Fi de un café. ¿Qué debes evitar?", options: ["Ver el clima", "Leer las noticias", "Hacer trámites bancarios en línea", "Buscar una receta"], answer: 2, why: "El Wi-Fi público es compartido, así que evita el banco y los datos privados." },
          { q: "¿Dónde escribes una dirección web como weather.gov?", options: ["En la cámara", "En un mensaje de texto", "En la calculadora", "En la barra de direcciones arriba del navegador"], answer: 3, why: "La barra de direcciones te lleva a un sitio web." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar cosas y mantenerse seguro",
      lessons: [
        {
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
          youCanNow: "buscar en la web y elegir un resultado útil que no sea un anuncio."
        },
        {
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
          youCanNow: "leer una dirección web para ver quién maneja un sitio y manejar con seguridad las falsas ventanas de virus."
        },
        {
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
          youCanNow: "conectarte por tu cuenta, encontrar lo que necesitas, evitar sitios falsos y guardar tus sitios favoritos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar cosas y mantenerse seguro",
        questions: [
          { q: "¿Qué búsqueda es la más clara?", options: ["\"lugar\"", "\"horario biblioteca Springfield\"", "\"¿abierto?\"", "\"ayúdame a encontrarlo por favor ya\""], answer: 1, why: "Unas pocas palabras clave con el lugar y lo que quieres funcionan mejor." },
          { q: "En www.irs.gov/refunds, ¿cuál es el dominio?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "El dominio es el nombre justo antes de la primera barra sola." },
          { q: "Una ventana emergente dice que tu computadora tiene un virus y que llames ya a un número. ¿Qué haces?", options: ["Llamas al número", "Pagas con una tarjeta de regalo", "Les das acceso remoto", "No llamas; cierras la pestaña o reinicias"], answer: 3, why: "La FTC dice que las advertencias reales nunca piden llamar a un número." },
          { q: "Un sitio web muestra https y un candado. Eso significa:", options: ["Que es un sitio del gobierno", "Que seguro es honesto", "Que la conexión es privada, pero igual revisas el dominio", "Que es gratis"], answer: 2, why: "Los estafadores también pueden tener https; el dominio es lo más importante." },
          { q: "¿Cuál es la forma más segura de volver cada mes al sitio de tu farmacia?", options: ["Hacer clic en un anuncio", "Un marcador que guardaste desde el sitio oficial", "Un enlace en un mensaje de un desconocido", "Adivinar la dirección"], answer: 1, why: "Un marcador te salta los resultados y enlaces falsos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de internet",
    questions: [
      { q: "Internet es:", options: ["Un solo sitio web", "Un canal de televisión", "Una guía telefónica", "Una red mundial que une computadoras y teléfonos"], answer: 3, why: "Une aparatos de todo el mundo." },
      { q: "El Wi-Fi sale de:", options: ["Una batería", "La televisión", "Un enrutador", "Una impresora"], answer: 2, why: "Un enrutador envía la señal de Wi-Fi." },
      { q: "Los datos móviles son:", options: ["Un navegador", "Wi-Fi gratis en la biblioteca", "Un tipo de correo", "Internet de las antenas, parte de tu plan de teléfono"], answer: 3, why: "Los datos móviles llegan por tu compañía telefónica." },
      { q: "¿Por qué usar el Wi-Fi de casa para ver videos?", options: ["Los videos solo funcionan con Wi-Fi", "Normalmente ahorra los datos de tu plan de teléfono", "Lo exige la ley", "Hace el teléfono más liviano"], answer: 1, why: "El Wi-Fi de casa normalmente no gasta los datos de tu plan." },
      { q: "Para unirte a un Wi-Fi necesitas:", options: ["Una impresora", "Tu número de banco", "El nombre de la red y la contraseña", "Un teléfono nuevo"], answer: 2, why: "Con el nombre y la contraseña puedes unirte." },
      { q: "En un iPhone, el Wi-Fi está en:", options: ["Reloj", "Fotos", "Calculadora", "Configuración"], answer: 3, why: "Configuración y luego Wi-Fi." },
      { q: "En el Wi-Fi público, ¿qué es una mala idea?", options: ["Leer las noticias", "Hacer trámites bancarios en línea", "Ver un mapa", "Buscar un horario"], answer: 1, why: "El Wi-Fi público es compartido; evita las tareas privadas." },
      { q: "¿Cuál de estos es un navegador web?", options: ["Calculadora", "Chrome", "Cámara", "Reloj"], answer: 1, why: "Chrome, Safari, Edge y Firefox son navegadores." },
      { q: "¿Qué hace la flecha de atrás de un navegador?", options: ["Borra el sitio web", "Apaga la computadora", "Vuelve a la página donde estabas antes", "Imprime la página"], answer: 2, why: "Atrás vuelve a la página anterior." },
      { q: "Las pestañas te permiten:", options: ["Apagar el Wi-Fi", "Pagar cuentas automáticamente", "Cargar la batería", "Tener varias páginas abiertas a la vez"], answer: 3, why: "Cada pestaña es una página abierta." },
      { q: "Las letras de una página web se ven muy pequeñas en una computadora. Presiona:", options: ["Suprimir", "Ctrl y + (Command y + en Mac)", "Escape", "Shift y 0"], answer: 1, why: "Ctrl y + amplía." },
      { q: "En un teléfono, ¿cómo agrandas una página?", options: ["Separando dos dedos sobre la pantalla", "Sacudiendo el teléfono", "Apagándolo", "Presionando el botón de volumen"], answer: 0, why: "Separar dos dedos amplía." },
      { q: "Los resultados de búsqueda marcados como \"Patrocinado\" son:", options: ["Anuncios pagados", "Siempre el sitio oficial", "Páginas del gobierno", "Advertencias de virus"], answer: 0, why: "Patrocinado significa que alguien pagó por él." },
      { q: "Antes de tocar un resultado de búsqueda, debes:", options: ["Leer su dirección web", "Cerrar el navegador", "Reiniciar el teléfono", "Tocar todos los resultados"], answer: 0, why: "La dirección muestra quién maneja el sitio." },
      { q: "¿Cómo puedes buscar sin escribir?", options: ["Tocando el micrófono y hablando", "Sacudiendo el teléfono", "Usando la calculadora", "Subiendo el volumen"], answer: 0, why: "La búsqueda por voz te deja decir lo que quieres." },
      { q: "¿Qué dirección es más probablemente falsa?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Un cero en lugar de una O es un truco de imitación." },
      { q: "https y un candado te dicen:", options: ["Que la conexión es privada", "Que el sitio es honesto, seguro", "Que el sitio es gratis", "Que el sitio es un banco"], answer: 0, why: "Protegen la conexión, no garantizan la honestidad." },
      { q: "Una advertencia de seguridad real en tu computadora:", options: ["Nunca te pedirá llamar a un número de teléfono", "Te pedirá tarjetas de regalo", "Te pedirá que llames enseguida", "Te pedirá la contraseña de tu banco"], answer: 0, why: "La FTC dice que las advertencias reales nunca piden llamar a un número." },
      { q: "Una ventana emergente no se cierra. ¿Qué haces?", options: ["Reinicias el aparato", "Llamas al número que aparece", "Escribes tu contraseña", "Pagas lo que piden"], answer: 0, why: "Reiniciar quita la ventana de forma segura." },
      { q: "Un marcador es:", options: ["Un enlace guardado a un sitio web", "Solo un separador de papel para libros", "Un virus", "Una contraseña"], answer: 0, why: "Los marcadores te llevan de vuelta rápido a un sitio." }
    ]
  }
};

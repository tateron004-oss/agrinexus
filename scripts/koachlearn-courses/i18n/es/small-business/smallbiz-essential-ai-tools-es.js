"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-essential-ai-tools-es",
  lang: "es",
  translationOf: "smallbiz-essential-ai-tools",
  category: "Small Business",
  name: "Herramientas de IA esenciales para pequeños negocios",
  skills: "Elegir la herramienta de IA correcta para cada trabajo, Usar un asistente de chat para escribir para el negocio, Hacer gráficos con Canva, Usar la IA en documentos y hojas de cálculo, Armar un kit inicial de herramientas de IA",
  outcome: "elegir la herramienta de IA gratis correcta para un trabajo del negocio y usarla: un asistente de chat para escribir, Canva para un volante o una publicación, y un programa de documentos u hojas de cálculo para una lista de precios o una tabla de ventas sencilla, y luego juntarlas en un kit inicial de herramientas que de verdad vas a usar cada semana.",
  about: [
    "Este curso es para dueños de pequeños negocios que quieren un kit de herramientas corto y práctico en lugar de andar detrás de cada aplicación nueva. Nuestros ejemplos vienen de tiendas, restaurantes, salones de belleza, servicios de limpieza y reparación, y food trucks.",
    "Vas a aprender qué tipos de herramientas de IA existen, probar un asistente de chat, una herramienta de diseño y la ayuda de IA dentro de documentos y hojas de cálculo, y terminar con tu propio kit: qué herramienta para qué trabajo y qué nunca vas a poner en ella.",
    "Los precios, los nombres de los planes y las funciones cambian seguido. Describimos qué hacer en lugar de nombres exactos de menús; revisa en el sitio oficial de cada herramienta su plan gratis actual. Cada lección dura unos cinco minutos, con una tarea de \"Pruébalo ahora\", una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma tu kit inicial de herramientas de IA: una tabla de una página con tres a cinco herramientas que vas a usar, el trabajo que hace cada una en tu negocio, si usas el plan gratis y una regla de seguridad para cada una. Luego demuestra que funciona haciendo una cosa real con cada herramienta: un mensaje para clientes (asistente de chat), un volante o una publicación (Canva) y una lista de precios o una tabla de ventas (Docs/Word o Sheets/Excel).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios que quieren un kit de herramientas de IA corto y práctico en lugar de perseguir cada aplicación nueva: tiendas, restaurantes, salones de belleza, servicios de limpieza y reparación, y camiones de comida.",
    startingPoint: "Usan un teléfono o una computadora para los mensajes del negocio y tal vez han probado un asistente de chat de IA. Tienen poca experiencia con herramientas de diseño, ayudantes de IA para documentos u hojas de cálculo con fórmulas.",
    gap: "Los dueños pierden tiempo y dinero probando muchas aplicaciones o pagando mejoras que no necesitan, y pueden poner datos de clientes en la herramienta equivocada. Necesitan un grupo pequeño de herramientas gratis, cada una con un trabajo claro y una regla de seguridad, que de verdad usen cada semana.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: un teléfono inteligente o una computadora; las hojas de cálculo son más fáciles en computadora",
      "Tiempo: lecciones de unos 5 minutos que caben en un día de trabajo ocupado",
      "Los precios, los nombres de los planes y las funciones cambian; revisa en el sitio oficial de cada herramienta su plan gratis actual",
      "Privacidad: ningún número de tarjeta, contraseña ni nombre de clientes en herramientas de IA"
    ],
    prerequisites: "\"Introducción a la IA para pequeños negocios\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con los principales tipos de herramientas de IA", action: "relacionar cada tipo de herramienta con un trabajo de tu negocio", standard: "con un trabajo para cada uno de los cuatro tipos" },
    { id: "O2", condition: "Usando un asistente de chat gratis", action: "producir tres cosas distintas del negocio en una sola sesión", standard: "dando los datos de tu negocio una vez al principio y revisando cada número" },
    { id: "O3", condition: "Usando una plantilla de Canva", action: "hacer un volante o una publicación para redes para una oferta o un evento real", standard: "con un mensaje principal, cómo contactarte, cada palabra revisada y solo fotos que tengas derecho a usar" },
    { id: "O4", condition: "Con notas rápidas y Google Docs o Microsoft Word", action: "convertir las notas en un documento de negocio limpio con ayuda de la IA", standard: "guardado en tu documento, con el lenguaje legal revisado por un profesional o una fuente oficial" },
    { id: "O5", condition: "Usando Google Sheets o Microsoft Excel", action: "hacer una tabla de ventas o inventario y pedirle ayuda a la IA para leerla", standard: "con al menos 10 filas, una fórmula SUM para el total y la respuesta de la IA confirmada en la hoja" },
    { id: "O6", condition: "Con las herramientas que probaste", action: "crear una tabla de tu kit inicial con tres a cinco herramientas, cada una con un trabajo y una regla de seguridad", standard: "anotando herramienta, trabajo, plan y regla de seguridad, y usando los planes gratis antes de pagar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Los principales tipos de herramientas de IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Un mapa de herramientas de IA para pequeños negocios",
          minutes: 5,
          goal: "Nombrar los principales tipos de herramientas de IA y relacionar cada uno con un trabajo del negocio.",
          text: [
            "No necesitas docenas de aplicaciones. La mayoría de los pequeños negocios sacan el mayor provecho de cuatro tipos de herramientas.",
            "Los asistentes de chat (ChatGPT, Microsoft Copilot, Google Gemini) escriben y explican: respuestas, descripciones, planes, listas de control. Las herramientas de diseño (Canva y otras) hacen volantes, publicaciones para redes, menús y logotipos, y muchas ya tienen funciones de IA para ayudar con textos e imágenes. Las herramientas de oficina (Google Docs y Sheets, Microsoft Word y Excel) guardan tus documentos y tus números, y las dos empresas les agregan ayudantes de IA en algunos planes. Las herramientas que vienen dentro de otras aplicaciones, como tu sistema de punto de venta, de reservas o de correo, también pueden tener funciones de IA.",
            "Empieza con una herramienta por trabajo. Apréndela bien antes de agregar otra."
          ],
          words: [["Asistente de chat", "una herramienta de IA con la que hablas en un cuadro de chat, como ChatGPT, Copilot o Gemini."], ["Herramienta de diseño", "una aplicación para hacer gráficos como volantes y publicaciones, como Canva."], ["Punto de venta (POS)", "el sistema que usas para cobrar las ventas."]],
          slides: [
            { title: "Cuatro tipos de herramientas", bullets: ["Asistentes de chat: escriben y explican", "Herramientas de diseño: volantes, publicaciones, menús", "Herramientas de oficina: documentos y números", "IA dentro de aplicaciones que ya usas"] },
            { title: "Ejemplos", bullets: ["ChatGPT, Copilot, Gemini", "Canva", "Google Docs y Sheets; Word y Excel"] },
            { title: "Mantenlo sencillo", bullets: ["Una herramienta por trabajo", "Primero apréndela bien", "Agrega otra solo cuando la necesites"] }
          ],
          tryIt: "Escribe los cuatro tipos de herramientas al lado izquierdo de una hoja. Junto a cada uno, escribe un trabajo de tu negocio que podría hacer este mes.",
          youCanNow: "nombrar los principales tipos de herramientas de IA y relacionar cada uno con un trabajo de tu negocio.",
          quickCheck: [
            { objective: "O1", q: "¿Qué tipo de herramienta son ChatGPT, Copilot y Gemini?", options: ["Herramientas de diseño", "Hojas de cálculo", "Asistentes de chat", "Aplicaciones de reservas"], answer: 2, why: "Son asistentes de chat con los que conversas para obtener borradores y respuestas." },
            { objective: "O1", q: "Quieres diseñar un nuevo pizarrón de menú. ¿Qué tipo de herramienta elegirías?", options: ["Una herramienta de diseño como Canva", "Una hoja de cálculo", "Una aplicación de reservas", "Una calculadora"], answer: 0, why: "Las herramientas de diseño tienen plantillas hechas para menús y volantes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sacarle el máximo provecho a un asistente de chat",
          minutes: 5,
          goal: "Usar un asistente de chat para producir tres cosas distintas del negocio en una sola sesión.",
          text: [
            "Un asistente de chat es la herramienta más flexible que tienes. Puede escribir, reescribir, resumir, traducir y planear. Ábrelo en la aplicación del teléfono o en chatgpt.com, copilot.microsoft.com o gemini.google.com.",
            "Dale los datos de tu negocio una vez al principio de la conversación: \"Tengo una barbería de dos sillas en Long Beach. Nuestro estilo es amable y de barrio. Precios: corte $30, corte y barba $40.\" Luego pídele varias cosas seguidas: un cartel de precios, una plantilla de mensaje de recordatorio y una respuesta a una reseña.",
            "Pide opciones y tablas cuando ayuden: \"Dame tres versiones\" o \"Ponlo en una tabla.\" Revisa siempre los números que te repite."
          ],
          steps: ["Abre un asistente de chat.", "Dale los datos de tu negocio una vez al principio.", "Pide la cosa 1, luego la 2, luego la 3.", "Pide opciones o una tabla donde ayude.", "Revisa cada número antes de usarlo."],
          words: [["Resumir", "hacer una versión corta de algo largo."], ["Plantilla", "un modelo listo que llenas cada vez."]],
          slides: [
            { title: "Un ayudante flexible", bullets: ["Escribe, reescribe, resume, traduce, planea", "Aplicación del teléfono o navegador"] },
            { title: "Prepáralo una vez por conversación", bullets: ["Tu tipo de negocio y tu ciudad", "Tu estilo y tus precios", "Luego pide una cosa tras otra"] },
            { title: "Peticiones útiles", bullets: ["\"Dame tres versiones.\"", "\"Ponlo en una tabla.\"", "Revisa cada número que repite"] }
          ],
          tryIt: "En una sola conversación, da los datos de tu negocio y luego pide: un cartel de precios, una plantilla de mensaje de recordatorio con \"[nombre del cliente]\" y una respuesta de agradecimiento a una buena reseña.",
          youCanNow: "usar una sola sesión de chat para hacer varias cosas del negocio con tus propios datos.",
          quickCheck: [
            { objective: "O2", q: "¿Cuándo debes dar los datos de tu negocio en una sesión de chat?", options: ["Nunca", "Otra vez en cada petición", "Solo al final", "Una vez al principio"], answer: 3, why: "Dar los datos una vez al principio deja que cada respuesta del chat los use." },
            { objective: "O2", q: "El asistente de chat hizo tu lista de precios, pero un precio se ve raro. ¿Qué harías?", options: ["Imprimirla de todos modos", "Revisar cada número contra tus precios reales y corregirlo", "Pedir un diseño nuevo", "Quitar todos los precios"], answer: 1, why: "La IA puede copiar mal los números, por eso revisas cada uno." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer un volante o una publicación con Canva",
          minutes: 5,
          goal: "Hacer un volante o una publicación para redes sencilla con una herramienta de diseño gratis.",
          text: [
            "Canva es una herramienta de diseño que funciona en el navegador y como aplicación de teléfono. Tiene un plan gratis y miles de plantillas listas para volantes, menús, publicaciones para redes y tarjetas de presentación. Revisa en canva.com lo que incluye hoy el plan gratis.",
            "Empieza con una plantilla, no con una hoja en blanco. Busca lo que necesitas (\"volante de restaurante\", \"publicación de salón para Instagram\"), elige una y luego cambia las palabras, los colores y las fotos por los tuyos. Usa el texto de tu asistente de chat.",
            "Usa tus propias fotos o las que la herramienta te permite usar. Mantenlo sencillo: un mensaje principal, letras grandes y fáciles de leer, el nombre de tu negocio y cómo contactarte. Revisa cómo escribiste tu dirección y tu teléfono."
          ],
          steps: ["Abre Canva y busca una plantilla.", "Cambia las palabras por tu mensaje.", "Pon tus fotos y tus colores.", "Agrega tu nombre, tu dirección y cómo contactarte.", "Revisa cada palabra y luego descárgalo o compártelo."],
          words: [["Plantilla", "un diseño listo que cambias para hacerlo tuyo."], ["Plan gratis", "la versión de una herramienta que puedes usar sin pagar, por lo general con algunos límites."]],
          slides: [
            { title: "Canva", bullets: ["Navegador y aplicación de teléfono", "Plan gratis con muchas plantillas", "Revisa en canva.com las funciones gratis de hoy"] },
            { title: "Empieza con una plantilla", bullets: ["Busca \"volante de restaurante\" o \"publicación de salón\"", "Cambia palabras, colores y fotos", "Usa el texto de tu asistente de chat"] },
            { title: "Que sea claro", bullets: ["Un mensaje principal, letras grandes", "Nombre, dirección, cómo contactarte", "Revisa cada palabra antes de compartir"] }
          ],
          tryIt: "Haz un volante o una publicación para una oferta o un evento real de tu negocio con una plantilla de Canva. Revisa cada palabra y guárdalo.",
          youCanNow: "hacer un volante o una publicación clara a partir de una plantilla con una herramienta de diseño gratis.",
          quickCheck: [
            { objective: "O3", q: "¿Qué tiene un volante claro?", options: ["Un mensaje principal y cómo contactarte", "Todo el texto que quepa", "Cada producto que vendes", "Ningún dato de contacto"], answer: 0, why: "Un mensaje principal y los datos de contacto hacen que sea fácil actuar con un volante." },
            { objective: "O3", q: "Encuentras en internet una foto genial para tu volante. ¿Qué harías?", options: ["Usarla porque está en internet", "Recortarla para que nadie lo note", "Usar una foto tuya o una que tengas derecho a usar", "Pedirle a la IA que la copie"], answer: 2, why: "Solo puedes usar fotos que tomaste o que tienes derecho a usar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los principales tipos de herramientas de IA",
        questions: [
          { objective: "O1", q: "¿Qué tipo de herramienta es mejor para escribir una respuesta a un cliente?", options: ["Una impresora de recibos", "Un asistente de chat", "Un lector de códigos de barras", "Una calculadora"], answer: 1, why: "Los asistentes de chat escriben y reescriben textos." },
          { objective: "O1", q: "¿Qué herramienta es conocida por sus plantillas de volantes y publicaciones?", options: ["Una calculadora", "Un sistema de punto de venta", "Solo Excel", "Canva"], answer: 3, why: "Canva es una herramienta de diseño con plantillas." },
          { objective: "O1", q: "¿Cuál es una buena forma de empezar a usar herramientas de IA?", options: ["Una herramienta por trabajo, bien aprendida", "Instalar veinte aplicaciones a la vez", "Pagar todos los planes", "Evitar todas las herramientas"], answer: 0, why: "Empieza sencillo y aprende bien una herramienta." },
          { objective: "O2", q: "Le diste tus precios al asistente de chat. ¿Qué revisas en su cartel de precios?", options: ["Nada", "Solo los colores", "Cada número que te repite", "Solo el título"], answer: 2, why: "La IA puede repetir mal los números." },
          { objective: "O3", q: "Al hacer un volante en Canva, deberías empezar con:", options: ["Una hoja en blanco cada vez", "El volante de un competidor", "Una plantilla que cambias para hacerla tuya", "Una foto de la que no tienes derechos"], answer: 2, why: "Las plantillas ahorran tiempo; tú las cambias para hacerlas tuyas." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA en tus herramientas de oficina de todos los días, y tu kit",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ayuda de IA en documentos: Google Docs y Microsoft Word",
          minutes: 5,
          goal: "Convertir una nota rápida en un documento de negocio limpio.",
          text: [
            "La mayoría de los negocios guardan listas de precios, políticas y cartas en Google Docs o Microsoft Word. Los dos se pueden usar gratis en el navegador con una cuenta de Google o de Microsoft. Google y Microsoft les agregan ayudantes de IA (Gemini y Copilot) en algunos planes; lo que veas depende de tu cuenta.",
            "Si tu programa de documentos tiene un ayudante de IA, le puedes pedir que redacte o reescriba directamente en la página. Si no, redacta en un asistente de chat y pega el texto. De cualquier forma, el documento es donde guardas la versión final y revisada.",
            "Buenos trabajos para documentos: una política de cancelación, una lista de control para abrir el negocio, una lista de precios, una carta a tu casero. Para las políticas y todo lo legal, pide a un profesional o a la fuente oficial que lo revise."
          ],
          steps: ["Escribe notas rápidas de lo que quieres.", "Pídele a un ayudante de IA (en el documento o en un asistente de chat) que las convierta en un documento limpio.", "Pégalo o guárdalo en Docs o Word.", "Revisa los datos y corrige la redacción.", "Guárdalo con un nombre claro."],
          words: [["Google Docs", "el procesador de textos gratis de Google en el navegador."], ["Microsoft Word", "el procesador de textos de Microsoft, gratis en la web con una cuenta de Microsoft."], ["Política", "una regla escrita de tu negocio, como cómo funcionan las cancelaciones."]],
          slides: [
            { title: "Tus documentos", bullets: ["Google Docs o Microsoft Word", "Gratis en el navegador con una cuenta", "Ayudantes de IA en algunos planes"] },
            { title: "Dos formas de usar la IA aquí", bullets: ["Usa el ayudante de IA del documento, si lo tienes", "O redacta en un asistente de chat y pégalo"] },
            { title: "Buenos trabajos para documentos", bullets: ["Política de cancelación", "Lista de control para abrir y lista de precios", "Pide a un profesional que revise la redacción legal"] }
          ],
          tryIt: "Escribe cinco líneas rápidas sobre tu política de cancelaciones o de retrasos. Usa la IA para convertirlas en una política clara y amable y guárdala en Docs o Word.",
          youCanNow: "convertir notas rápidas en un documento de negocio limpio usando la IA y una herramienta de oficina.",
          quickCheck: [
            { objective: "O4", q: "¿Dónde debe quedar la versión final y revisada de una política del negocio?", options: ["Solo en el chat de la IA", "En tu documento de Docs o Word", "En una nota adhesiva", "En un mensaje a ti mismo"], answer: 1, why: "Tu documento guarda la versión revisada de forma segura y fácil de compartir." },
            { objective: "O4", q: "La IA convirtió tus notas en una política de reembolsos con palabras legales. ¿Qué harías?", options: ["Publicarla sin leerla", "Borrar las palabras legales", "Preguntarle a la IA si es legal", "Pedir que un profesional o la fuente oficial revise el lenguaje"], answer: 3, why: "El lenguaje legal lo debe revisar un profesional o una fuente oficial." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ayuda de IA en hojas de cálculo: Sheets y Excel",
          minutes: 5,
          goal: "Hacer una tabla sencilla de ventas o inventario y pedirle ayuda a la IA para leerla.",
          text: [
            "Una hoja de cálculo es una cuadrícula de filas y columnas para números. Google Sheets y Microsoft Excel son las opciones más comunes. Una tabla sencilla, como Fecha, Artículo, Cantidad, Precio, Total, ya te dice mucho.",
            "La IA puede ayudar de dos formas. Te puede decir cómo hacer algo (\"¿Cómo sumo la columna E en Google Sheets?\") y, en algunos planes, puede trabajar dentro de la hoja. También puedes pegar una tabla pequeña sin datos privados en un asistente de chat y preguntar: \"¿Qué artículo se vendió más?\"",
            "Revisa los cálculos. La IA es mejor para explicar que para calcular, así que deja que la hoja de cálculo haga los totales con una fórmula SUMA, y usa la IA para que te explique o te sugiera qué mirar."
          ],
          steps: ["Haz columnas: Fecha, Artículo, Cantidad, Precio, Total.", "Escribe una semana de ventas.", "Pregúntale a la IA cómo agregar un total con SUMA, y hazlo.", "Pregúntale a la IA qué artículo se vendió más y confírmalo en la hoja."],
          words: [["Hoja de cálculo", "una cuadrícula de filas y columnas para números, como Google Sheets o Excel."], ["Fórmula", "una instrucción en una celda que hace un cálculo, como =SUMA(E2:E20)."]],
          slides: [
            { title: "Una tabla de ventas sencilla", bullets: ["Fecha, Artículo, Cantidad, Precio, Total", "Google Sheets o Microsoft Excel"] },
            { title: "Cómo ayuda la IA", bullets: ["Explica cómo: \"¿Cómo sumo la columna E?\"", "Trabaja dentro de la hoja en algunos planes", "Lee una tabla pequeña sin datos privados"] },
            { title: "Que la hoja haga los cálculos", bullets: ["Usa una fórmula SUMA para los totales", "La IA explica; la hoja calcula", "Confirma en tus datos lo que dice la IA"] }
          ],
          tryIt: "Haz una tabla de ventas o de inventario con al menos 10 filas. Usa una fórmula SUMA para el total y pregúntale a la IA qué artículo se vendió más. Confirma la respuesta en tu hoja.",
          youCanNow: "hacer una tabla de ventas sencilla y usar la IA para que te ayude a leerla, mientras la hoja de cálculo hace los cálculos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es =SUM(E2:E20)?", options: ["Una fórmula que suma una columna", "El nombre de un archivo", "Una instrucción para el chat", "Una contraseña"], answer: 0, why: "SUM es una fórmula de hoja de cálculo que suma números." },
            { objective: "O5", q: "La IA dice que lo que más vendiste el mes pasado fue café. ¿Qué harías?", options: ["Pedir más café de inmediato", "Preguntarle otra vez a la IA hasta que esté de acuerdo", "Confirmarlo en tu hoja", "Borrar la tabla de ventas"], answer: 2, why: "Confirmas en la misma hoja lo que la IA leyó de tus datos." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Armar tu kit inicial de herramientas de IA",
          minutes: 5,
          goal: "Elegir de tres a cinco herramientas, darle un trabajo a cada una y fijar una regla de seguridad para cada una.",
          text: [
            "Tu kit es una lista corta: la herramienta, su trabajo, qué plan y una regla. Por ejemplo: ChatGPT (gratis) para respuestas y descripciones; Canva (gratis) para volantes; Google Sheets para las ventas de la semana; Google Docs para las políticas.",
            "Antes de pagar por una mejora, usa el plan gratis durante un mes y anota lo que no pudiste hacer. Paga solo por una función que de verdad necesites y revisa el precio en el sitio oficial.",
            "Las reglas de seguridad van con cada herramienta: nada de números de tarjeta de clientes, contraseñas ni datos privados; revisa cada dato antes de que lo vean los clientes; usa solo fotos y textos que tengas derecho a usar."
          ],
          steps: ["Haz una lista de tres a cinco herramientas.", "Escribe un trabajo para cada una.", "Escribe \"gratis\" o el plan que pagas.", "Escribe una regla de seguridad para cada una.", "Haz una cosa real con cada herramienta."],
          words: [["Kit de herramientas", "la lista corta de herramientas que usas y para qué es cada una."], ["Mejora", "un plan pagado con más funciones."]],
          slides: [
            { title: "La tabla de tu kit", bullets: ["Herramienta | Trabajo | Plan | Regla de seguridad", "Con tres a cinco herramientas basta"] },
            { title: "Antes de pagar", bullets: ["Usa el plan gratis durante un mes", "Anota lo que no pudiste hacer", "Revisa el precio en el sitio oficial"] },
            { title: "Reglas para cada herramienta", bullets: ["Nada de números de tarjeta, contraseñas o datos privados", "Revisa los datos antes de que los vean los clientes", "Usa solo fotos que tengas derecho a usar"] }
          ],
          tryIt: "Tarea final: haz la tabla de tu kit y luego haz una cosa real con cada herramienta: un mensaje para clientes, un volante o una publicación, y una lista de precios o una tabla de ventas.",
          youCanNow: "elegir, organizar y usar de forma segura un pequeño grupo de herramientas de IA para tu negocio.",
          quickCheck: [
            { objective: "O6", q: "¿Qué anota la tabla de tu kit de herramientas?", options: ["Cada aplicación de tu teléfono", "Herramienta, trabajo, plan y regla de seguridad", "Solo los precios de las herramientas", "Los nombres de tus clientes"], answer: 1, why: "Cada fila dice qué herramienta es, su trabajo, su plan y su regla de seguridad." },
            { objective: "O6", q: "Una herramienta te ofrece una mejora pagada. ¿Cuándo pagarías?", options: ["De inmediato, por si acaso", "Nunca, bajo ninguna condición", "Cuando un amigo la compre", "Cuando necesites una función que el plan gratis no tiene"], answer: 3, why: "Paga solo cuando al plan gratis le falte algo que de verdad necesitas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Herramientas de oficina y tu kit",
        questions: [
          { objective: "O4", q: "Tu programa de documentos no tiene ayudante de IA. ¿Qué puedes hacer?", options: ["Redactar en un asistente de chat y pegarlo", "Rendirte", "Comprar una computadora nueva", "Escribirlo en Excel"], answer: 0, why: "Un borrador de un asistente de chat se puede pegar en cualquier documento." },
          { objective: "O4", q: "¿Quién debería revisar la redacción de una política legal?", options: ["Solo la IA", "Nadie", "Un cliente", "Un profesional o la fuente oficial"], answer: 3, why: "La redacción legal necesita la revisión de un profesional." },
          { objective: "O5", q: "¿Qué debería hacer los totales de tu tabla de ventas?", options: ["Lo que adivine la IA", "Una fórmula SUMA en la hoja de cálculo", "Cálculos de memoria", "Una publicación en redes"], answer: 1, why: "Las hojas de cálculo calculan de forma confiable; la IA explica." },
          { objective: "O6", q: "Antes de pagar por una mejora de IA, deberías:", options: ["Usar el plan gratis un tiempo y anotar lo que te falta", "Pagar de inmediato", "Preguntarle a un anuncio emergente", "Comprar todos los planes"], answer: 0, why: "Paga solo por lo que de verdad necesitas." },
          { objective: "O6", q: "¿Cuál es una regla de seguridad para cualquier herramienta?", options: ["Pegar números de tarjeta para ahorrar tiempo", "Compartir tu contraseña con la herramienta", "Nunca poner en ella números de tarjeta de clientes ni contraseñas", "Usar cualquier foto de internet"], answer: 2, why: "Los datos privados se quedan fuera de las herramientas de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA esenciales para pequeños negocios",
    questions: [
      { objective: "O1", q: "ChatGPT, Copilot y Gemini son ejemplos de:", options: ["Cajas registradoras", "Asistentes de chat", "Aplicaciones de entrega", "Bancos"], answer: 1, why: "Son asistentes de chat de IA." },
      { objective: "O1", q: "¿Qué tipo de herramienta es mejor para diseñar un menú?", options: ["Un termómetro", "Una calculadora", "Una aplicación del banco", "Una herramienta de diseño como Canva"], answer: 3, why: "Las herramientas de diseño hacen menús y volantes." },
      { objective: "O1", q: "Las funciones de IA también pueden aparecer dentro de:", options: ["Ningún otro lugar", "Solo juguetes", "Solo impresoras", "Aplicaciones que ya usas, como las de reservas o de punto de venta"], answer: 3, why: "Muchas aplicaciones de negocios agregan funciones de IA." },
      { objective: "O2", q: "En una sesión de chat, ¿cuándo das los datos de tu negocio?", options: ["Nunca", "Una vez al principio", "Solo al final", "En cada palabra"], answer: 1, why: "Darlos una vez te permite pedir varias cosas." },
      { objective: "O2", q: "\"Dame tres versiones\" te ayuda a:", options: ["Pagar menos impuestos", "Borrar la conversación", "Elegir la mejor opción", "Compartir contraseñas"], answer: 2, why: "Las opciones te permiten escoger." },
      { objective: "O2", q: "Una plantilla de mensaje de recordatorio debe usar:", options: ["\"[nombre del cliente]\" como marcador", "El número de tarjeta del cliente", "Tu contraseña", "La dirección de un cliente real"], answer: 0, why: "Los marcadores dejan fuera los datos privados." },
      { objective: "O3", q: "¿Dónde revisas lo que incluye hoy el plan gratis de Canva?", options: ["Adivinando", "En una entrada vieja de un blog", "En canva.com", "Con un competidor"], answer: 2, why: "El sitio oficial tiene los detalles actuales del plan." },
      { objective: "O3", q: "Un volante claro tiene:", options: ["Un mensaje principal y cómo contactarte", "Diez mensajes", "Letras diminutas", "Ningún nombre de negocio"], answer: 0, why: "Lo sencillo y fácil de leer funciona mejor." },
      { objective: "O3", q: "¿Qué fotos deberías usar?", options: ["Cualquier foto de internet", "Las tuyas o las que tienes derecho a usar", "Las de un competidor", "Fotos cualquiera de redes sociales"], answer: 1, why: "Usa solo imágenes de las que tienes derechos." },
      { objective: "O4", q: "Google Docs y Microsoft Word son:", options: ["Solo herramientas de diseño", "Compañías de teléfono", "Aplicaciones de pago", "Herramientas de documentos"], answer: 3, why: "Son procesadores de textos." },
      { objective: "O4", q: "¿Dónde debe quedar la versión final y revisada de una política?", options: ["En tu documento (Docs o Word)", "Solo en el chat de la IA", "En una nota adhesiva", "En ningún lado"], answer: 0, why: "Los documentos guardan la versión final que puedes compartir y actualizar." },
      { objective: "O4", q: "Un buen trabajo de documentos para la ayuda de la IA es:", options: ["Elegir un abogado", "Firmar un contrato por ti", "Presentar los impuestos", "Una lista de control para abrir"], answer: 3, why: "Las listas de control son textos de bajo riesgo." },
      { objective: "O5", q: "Una hoja de cálculo es:", options: ["Un asistente de chat", "Una plantilla de diseño", "Una cuadrícula de filas y columnas para números", "Un banco"], answer: 2, why: "Sheets y Excel ordenan números." },
      { objective: "O5", q: "=SUMA(E2:E20) es un ejemplo de:", options: ["Instrucción", "Fórmula", "Plantilla", "Contraseña"], answer: 1, why: "Las fórmulas calculan en las celdas." },
      { objective: "O5", q: "La IA dice que lo que más vendes son los tacos. Deberías:", options: ["Decírselo a los clientes", "Suponer que tiene razón", "Borrar la hoja", "Confirmarlo en tu hoja"], answer: 3, why: "Compara lo que lee la IA con tus datos." },
      { objective: "O5", q: "Antes de pegar una tabla en un asistente de chat, quita:", options: ["Los nombres de los artículos", "Las fechas", "Los nombres y los números de tarjeta de los clientes", "Los totales"], answer: 2, why: "Los datos privados se quedan fuera." },
      { objective: "O6", q: "¿Cuántas herramientas debe tener un kit inicial?", options: ["De tres a cinco", "Cincuenta", "Ninguna", "Cien"], answer: 0, why: "Una lista corta que de verdad uses." },
      { objective: "O6", q: "La tabla de tu kit incluye:", options: ["Contraseñas", "Herramienta, trabajo, plan y regla de seguridad", "Números de tarjeta de clientes", "Solo precios"], answer: 1, why: "Esas cuatro columnas la hacen útil y segura." },
      { objective: "O6", q: "¿Cuándo deberías pagar por una mejora?", options: ["Siempre desde el primer día", "Cuando necesitas una función que no tiene el plan gratis", "Cuando lo dice un anuncio", "Sin revisar nunca el precio"], answer: 1, why: "Paga solo por necesidades reales, después de revisar el precio." },
      { objective: "O6", q: "¿Qué regla se aplica a todas las herramientas de IA?", options: ["Revisar los datos antes de que los vean los clientes", "Compartir contraseñas para ahorrar tiempo", "Copiar cualquier foto", "Confiar en todos los números"], answer: 0, why: "Revisar los datos protege tu negocio." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      7,
      9,
      10,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Tabla del kit de herramientas",
        objective: "O6",
        notYet: "Menos de tres herramientas, o falta un trabajo, un plan o una regla de seguridad.",
        meets: "De tres a cinco herramientas, cada una con trabajo, plan y regla de seguridad.",
        exceeds: "Anota cuándo el dueño pensaría en pagar una mejora."
      },
      {
        name: "Mensaje para clientes",
        objective: "O2",
        notYet: "No hay mensaje, o tiene datos de un cliente real o datos incorrectos.",
        meets: "Un mensaje para clientes revisado, hecho con el asistente de chat y con marcadores.",
        exceeds: "El dueño comparó más de una versión y eligió la mejor."
      },
      {
        name: "Volante o publicación",
        objective: "O3",
        notYet: "No hay volante, o tiene errores o fotos sin derechos.",
        meets: "Un volante o una publicación con un mensaje principal y datos de contacto, con cada palabra revisada.",
        exceeds: "Usa fotos propias del dueño y está listo para publicar o imprimir."
      },
      {
        name: "Lista de precios o tabla de ventas",
        objective: "O5",
        notYet: "No hay tabla, o los totales se escribieron a mano.",
        meets: "Una lista de precios en Docs o Word, o una tabla de ventas con una fórmula SUM.",
        exceeds: "Lo que la IA leyó de la tabla se confirmó en la hoja."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que usan al menos dos herramientas de su kit cada semana (encuesta de seguimiento a 30 días)",
      "Dueños que dicen haber ahorrado tiempo o dinero usando planes gratis (encuesta de seguimiento)",
      "Dueños que empiezan otro curso de Koach Learn para pequeños negocios en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono inteligente con internet (las hojas de cálculo son más fáciles en computadora)",
      "Cuentas gratis de un asistente de chat, de Canva y de Google Docs y Sheets o Microsoft Word y Excel",
      "Datos reales del negocio: precios, una oferta o un evento, y unas semanas de cifras de ventas o de inventario",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Los nombres de los planes y las funciones cambian; abran juntos el sitio oficial de cada herramienta para revisar su plan gratis actual.",
      "Haz que los dueños usen nombres de clientes inventados y ningún número de tarjeta en las tablas y los mensajes de práctica.",
      "Las hojas de cálculo son nuevas para muchos dueños; muestra en vivo una fórmula SUM antes de la tarea de la Lección 5.",
      "Manda el lenguaje legal de las políticas a un profesional o a una fuente oficial, a SCORE o a un Small Business Development Center.",
      "Califica el kit y los trabajos con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

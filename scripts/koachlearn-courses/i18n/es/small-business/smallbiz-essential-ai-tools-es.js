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
  chapters: [
    {
      name: "Capítulo 1: Los principales tipos de herramientas de IA",
      lessons: [
        {
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
          youCanNow: "nombrar los principales tipos de herramientas de IA y relacionar cada uno con un trabajo de tu negocio."
        },
        {
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
          youCanNow: "usar una sola sesión de chat para hacer varias cosas del negocio con tus propios datos."
        },
        {
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
          youCanNow: "hacer un volante o una publicación clara a partir de una plantilla con una herramienta de diseño gratis."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los principales tipos de herramientas de IA",
        questions: [
          { q: "¿Qué tipo de herramienta es mejor para escribir una respuesta a un cliente?", options: ["Una impresora de recibos", "Un asistente de chat", "Un lector de códigos de barras", "Una calculadora"], answer: 1, why: "Los asistentes de chat escriben y reescriben textos." },
          { q: "¿Qué herramienta es conocida por sus plantillas de volantes y publicaciones?", options: ["Una calculadora", "Un sistema de punto de venta", "Solo Excel", "Canva"], answer: 3, why: "Canva es una herramienta de diseño con plantillas." },
          { q: "¿Cuál es una buena forma de empezar a usar herramientas de IA?", options: ["Una herramienta por trabajo, bien aprendida", "Instalar veinte aplicaciones a la vez", "Pagar todos los planes", "Evitar todas las herramientas"], answer: 0, why: "Empieza sencillo y aprende bien una herramienta." },
          { q: "Le diste tus precios al asistente de chat. ¿Qué revisas en su cartel de precios?", options: ["Nada", "Solo los colores", "Cada número que te repite", "Solo el título"], answer: 2, why: "La IA puede repetir mal los números." },
          { q: "Al hacer un volante en Canva, deberías empezar con:", options: ["Una hoja en blanco cada vez", "El volante de un competidor", "Una plantilla que cambias para hacerla tuya", "Una foto de la que no tienes derechos"], answer: 2, why: "Las plantillas ahorran tiempo; tú las cambias para hacerlas tuyas." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA en tus herramientas de oficina de todos los días, y tu kit",
      lessons: [
        {
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
          youCanNow: "convertir notas rápidas en un documento de negocio limpio usando la IA y una herramienta de oficina."
        },
        {
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
          youCanNow: "hacer una tabla de ventas sencilla y usar la IA para que te ayude a leerla, mientras la hoja de cálculo hace los cálculos."
        },
        {
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
          youCanNow: "elegir, organizar y usar de forma segura un pequeño grupo de herramientas de IA para tu negocio."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Herramientas de oficina y tu kit",
        questions: [
          { q: "Tu programa de documentos no tiene ayudante de IA. ¿Qué puedes hacer?", options: ["Redactar en un asistente de chat y pegarlo", "Rendirte", "Comprar una computadora nueva", "Escribirlo en Excel"], answer: 0, why: "Un borrador de un asistente de chat se puede pegar en cualquier documento." },
          { q: "¿Quién debería revisar la redacción de una política legal?", options: ["Solo la IA", "Nadie", "Un cliente", "Un profesional o la fuente oficial"], answer: 3, why: "La redacción legal necesita la revisión de un profesional." },
          { q: "¿Qué debería hacer los totales de tu tabla de ventas?", options: ["Lo que adivine la IA", "Una fórmula SUMA en la hoja de cálculo", "Cálculos de memoria", "Una publicación en redes"], answer: 1, why: "Las hojas de cálculo calculan de forma confiable; la IA explica." },
          { q: "Antes de pagar por una mejora de IA, deberías:", options: ["Usar el plan gratis un tiempo y anotar lo que te falta", "Pagar de inmediato", "Preguntarle a un anuncio emergente", "Comprar todos los planes"], answer: 0, why: "Paga solo por lo que de verdad necesitas." },
          { q: "¿Cuál es una regla de seguridad para cualquier herramienta?", options: ["Pegar números de tarjeta para ahorrar tiempo", "Compartir tu contraseña con la herramienta", "Nunca poner en ella números de tarjeta de clientes ni contraseñas", "Usar cualquier foto de internet"], answer: 2, why: "Los datos privados se quedan fuera de las herramientas de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA esenciales para pequeños negocios",
    questions: [
      { q: "ChatGPT, Copilot y Gemini son ejemplos de:", options: ["Cajas registradoras", "Asistentes de chat", "Aplicaciones de entrega", "Bancos"], answer: 1, why: "Son asistentes de chat de IA." },
      { q: "¿Qué tipo de herramienta es mejor para diseñar un menú?", options: ["Un termómetro", "Una calculadora", "Una aplicación del banco", "Una herramienta de diseño como Canva"], answer: 3, why: "Las herramientas de diseño hacen menús y volantes." },
      { q: "Las funciones de IA también pueden aparecer dentro de:", options: ["Ningún otro lugar", "Solo juguetes", "Solo impresoras", "Aplicaciones que ya usas, como las de reservas o de punto de venta"], answer: 3, why: "Muchas aplicaciones de negocios agregan funciones de IA." },
      { q: "En una sesión de chat, ¿cuándo das los datos de tu negocio?", options: ["Nunca", "Una vez al principio", "Solo al final", "En cada palabra"], answer: 1, why: "Darlos una vez te permite pedir varias cosas." },
      { q: "\"Dame tres versiones\" te ayuda a:", options: ["Pagar menos impuestos", "Borrar la conversación", "Elegir la mejor opción", "Compartir contraseñas"], answer: 2, why: "Las opciones te permiten escoger." },
      { q: "Una plantilla de mensaje de recordatorio debe usar:", options: ["\"[nombre del cliente]\" como marcador", "El número de tarjeta del cliente", "Tu contraseña", "La dirección de un cliente real"], answer: 0, why: "Los marcadores dejan fuera los datos privados." },
      { q: "¿Dónde revisas lo que incluye hoy el plan gratis de Canva?", options: ["Adivinando", "En una entrada vieja de un blog", "En canva.com", "Con un competidor"], answer: 2, why: "El sitio oficial tiene los detalles actuales del plan." },
      { q: "Un volante claro tiene:", options: ["Un mensaje principal y cómo contactarte", "Diez mensajes", "Letras diminutas", "Ningún nombre de negocio"], answer: 0, why: "Lo sencillo y fácil de leer funciona mejor." },
      { q: "¿Qué fotos deberías usar?", options: ["Cualquier foto de internet", "Las tuyas o las que tienes derecho a usar", "Las de un competidor", "Fotos cualquiera de redes sociales"], answer: 1, why: "Usa solo imágenes de las que tienes derechos." },
      { q: "Google Docs y Microsoft Word son:", options: ["Solo herramientas de diseño", "Compañías de teléfono", "Aplicaciones de pago", "Herramientas de documentos"], answer: 3, why: "Son procesadores de textos." },
      { q: "¿Dónde debe quedar la versión final y revisada de una política?", options: ["En tu documento (Docs o Word)", "Solo en el chat de la IA", "En una nota adhesiva", "En ningún lado"], answer: 0, why: "Los documentos guardan la versión final que puedes compartir y actualizar." },
      { q: "Un buen trabajo de documentos para la ayuda de la IA es:", options: ["Elegir un abogado", "Firmar un contrato por ti", "Presentar los impuestos", "Una lista de control para abrir"], answer: 3, why: "Las listas de control son textos de bajo riesgo." },
      { q: "Una hoja de cálculo es:", options: ["Un asistente de chat", "Una plantilla de diseño", "Una cuadrícula de filas y columnas para números", "Un banco"], answer: 2, why: "Sheets y Excel ordenan números." },
      { q: "=SUMA(E2:E20) es un ejemplo de:", options: ["Instrucción", "Fórmula", "Plantilla", "Contraseña"], answer: 1, why: "Las fórmulas calculan en las celdas." },
      { q: "La IA dice que lo que más vendes son los tacos. Deberías:", options: ["Decírselo a los clientes", "Suponer que tiene razón", "Borrar la hoja", "Confirmarlo en tu hoja"], answer: 3, why: "Compara lo que lee la IA con tus datos." },
      { q: "Antes de pegar una tabla en un asistente de chat, quita:", options: ["Los nombres de los artículos", "Las fechas", "Los nombres y los números de tarjeta de los clientes", "Los totales"], answer: 2, why: "Los datos privados se quedan fuera." },
      { q: "¿Cuántas herramientas debe tener un kit inicial?", options: ["De tres a cinco", "Cincuenta", "Ninguna", "Cien"], answer: 0, why: "Una lista corta que de verdad uses." },
      { q: "La tabla de tu kit incluye:", options: ["Contraseñas", "Herramienta, trabajo, plan y regla de seguridad", "Números de tarjeta de clientes", "Solo precios"], answer: 1, why: "Esas cuatro columnas la hacen útil y segura." },
      { q: "¿Cuándo deberías pagar por una mejora?", options: ["Siempre desde el primer día", "Cuando necesitas una función que no tiene el plan gratis", "Cuando lo dice un anuncio", "Sin revisar nunca el precio"], answer: 1, why: "Paga solo por necesidades reales, después de revisar el precio." },
      { q: "¿Qué regla se aplica a todas las herramientas de IA?", options: ["Revisar los datos antes de que los vean los clientes", "Compartir contraseñas para ahorrar tiempo", "Copiar cualquier foto", "Confiar en todos los números"], answer: 0, why: "Revisar los datos protege tu negocio." }
    ]
  }
};

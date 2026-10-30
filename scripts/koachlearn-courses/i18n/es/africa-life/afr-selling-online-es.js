"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-selling-online.js). See scripts/koachlearn-courses/README.md, "Translations".

const WA_BUSINESS = { name: "WhatsApp Business: la aplicación WhatsApp Business (perfil de empresa, productos y precios, mensajes de bienvenida y de ausencia)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Comisión de Protección de Datos de Nigeria (NDPC): Ley de Protección de Datos de Nigeria de 2023", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Oficina del Comisionado de Protección de Datos de Kenia (Ley de Protección de Datos de 2019)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Banco Central de Kenia: seguridad contra el fraude", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Banco Central de Nigeria: protección del consumidor", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online-es",
  lang: "es",
  translationOf: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Vender en línea en África (WhatsApp Business, mercados en línea y redes sociales)",
  skills: "Elegir dónde vender en línea, Configurar WhatsApp Business, Tomar fotos de productos y escribir anuncios, Responder a los clientes y cerrar una venta, Revisar los pagos y evitar las alertas falsas, Entregar y mantener la confianza de los clientes",
  outcome: "recibir pedidos de tus productos por teléfono: configurar un perfil de WhatsApp Business y una lista de productos, escribir anuncios que venden, responder a los clientes y confirmar pedidos, comprobar que el dinero de verdad llegó antes de enviar la mercancía, y entregar de una forma que haga volver a los clientes.",
  about: [
    "Hoy muchos clientes encuentran vendedores en WhatsApp, Facebook, Instagram, TikTok y en mercados en línea como Jumia y Jiji. Este curso es para comerciantes, artesanos, cocineros caseros, sastres, agricultores y dueños de pequeñas tiendas en Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Marruecos y en toda África que quieren vender más allá de su calle.",
    "Vas a elegir dónde vender, configurar un perfil de WhatsApp Business y una lista de productos, tomar buenas fotos con un teléfono sencillo, escribir anuncios con un precio claro, responder rápido a los clientes, confirmar los pedidos por escrito, revisar los pagos en tu propia aplicación de dinero móvil o de banco, y planear la entrega y las devoluciones.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" para tu propio negocio. Funciona en un teléfono Android sencillo y usa pocos datos. Los precios y las cantidades de dinero del curso son ejemplos, no precios ni tarifas reales."
  ],
  finalTask: "Haz un plan de tienda en línea de una página para tu negocio: dónde vas a vender y por qué, el texto de tu perfil de WhatsApp Business, tres anuncios de productos (notas sobre la foto, título, precio en tu moneda, detalles y entrega), un mensaje guardado de confirmación de pedido, tu regla para revisar pagos, y tu política de entrega y devoluciones.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Comerciantes, vendedores de mercado, artesanos, cocineros caseros, sastres, peluqueros, agricultores y dueños de pequeñas tiendas en pueblos y ciudades de toda África (Kenia, Nigeria, Ghana, África occidental y central francófona, norte de África). Muchos son mujeres y jóvenes; muchos ya conversan con sus clientes por WhatsApp.",
    startingPoint: "Saben usar WhatsApp para chatear y enviar fotos, y pueden recibir dinero móvil. Pocos tienen un perfil de empresa, una lista de productos, precios claros en línea, confirmaciones de pedido por escrito o una regla para revisar los pagos. Algunos han sido engañados con mensajes de pago falsos.",
    gap: "Los clientes buscan y piden desde el teléfono, pero muchos pequeños vendedores pierden ventas por responder tarde, por precios poco claros y por fotos malas, y pierden dinero y mercancía por alertas de pago falsas. Los participantes necesitan una forma sencilla y segura de mostrar productos, recibir pedidos, revisar pagos y entregar, para que vender en línea sume ingresos en lugar de riesgos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; muchos participantes hablan inglés como segunda lengua (el curso también se ofrece en francés y en árabe)",
      "Dispositivos: un teléfono Android sencillo, a menudo compartido; los datos son caros, así que las fotos y los videos se mantienen pequeños",
      "Dinero: poco o ningún presupuesto para publicidad; primero las herramientas gratuitas",
      "Reglas y tarifas: las funciones de las aplicaciones, las comisiones de los mercados en línea y las reglas de protección de datos cambian según el país; los participantes revisan la aplicación, la página para vendedores del mercado o el organismo regulador nacional",
      "Seguridad: alto riesgo de fraude; nunca compartas un PIN, una contraseña ni un código de un solo uso"
    ],
    prerequisites: "Saber enviar mensajes y fotos por WhatsApp. Útil: \"Usar el dinero móvil con seguridad\" en esta categoría."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Teniendo en cuenta tus productos, tus clientes y dos o tres canales en línea", action: "elegir dónde vender en línea y anotar por qué", standard: "indicando para cada canal el costo, el esfuerzo y quién compra allí" },
    { id: "O2", condition: "Con un teléfono que tenga la aplicación WhatsApp Business", action: "configurar un perfil de empresa y una lista de productos con precios", standard: "con nombre, descripción breve, horario, zona de servicio y al menos tres productos" },
    { id: "O3", condition: "Con uno de tus productos", action: "tomar una foto clara y escribir un anuncio con título, precio, detalles y entrega", standard: "de modo que un cliente pueda pedir sin hacer una pregunta básica" },
    { id: "O4", condition: "Cuando un cliente envía una pregunta o un pedido", action: "responder con amabilidad y confirmar el pedido por escrito", standard: "dentro de tu horario, con artículo, cantidad, precio, entrega y pago en un solo mensaje" },
    { id: "O5", condition: "Antes de enviar mercancía pagada con dinero móvil o transferencia bancaria", action: "comprobar en tu propia aplicación o en el mensaje oficial del proveedor que el dinero llegó", standard: "sin confiar nunca en una captura de pantalla, un mensaje reenviado o una llamada, y sin compartir nunca un PIN" },
    { id: "O6", condition: "Cuando entregas un pedido", action: "escribir y seguir una política de entrega y devoluciones que proteja la confianza y los datos de los clientes", standard: "indicando zonas de entrega, costo, tiempo y devoluciones, y manteniendo privados los números de los clientes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Abrir tu tienda en línea",
      lessons: [
        {
          title: "Elegir dónde vender en línea",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir uno o dos lugares para vender en línea que se ajusten a tus productos y clientes.",
          text: [
            "No necesitas estar en todas partes. Elige donde ya están tus clientes y donde puedas seguir el ritmo de los mensajes. Vender en línea es como abrir un segundo puesto: solo funciona si hay alguien para atender.",
            "Las aplicaciones de mensajería como WhatsApp son buenas para los clientes de siempre y los vecinos. Las redes sociales como Facebook, Instagram y TikTok ayudan a que gente nueva te descubra con fotos y videos cortos. Los mercados en línea como Jumia, Jiji, Kilimall y Konga ya tienen muchos compradores buscando, pero tienen reglas, y algunos cobran una comisión (una parte de cada venta) o cobran por anuncios promocionados.",
            "Para cada canal, anota tres cosas: quién compra allí, cuánto cuesta (datos, comisión, anuncios, entrega) y cuánto tiempo te lleva cada día. Ejemplo: Ama, en Kumasi, vende cuentas de collar. Usa WhatsApp para sus clientas de siempre y suma Instagram para llegar a compradores nuevos en Acra. Un zapatero de Dakar podría empezar con WhatsApp y Facebook, y sumar un mercado en línea más tarde.",
            "Antes de unirte a un mercado en línea, lee su página para vendedores: cuánto cobra, cómo te paga, cuándo, y qué pasa con las devoluciones. Esto cambia, así que revisa el sitio web del propio mercado, no un mensaje reenviado."
          ],
          steps: ["Haz una lista de dónde tus clientes ya chatean, miran publicaciones y compran.", "Para cada canal, anota quién compra allí, el costo y el tiempo que lleva.", "Elige un canal principal y, como máximo, uno más.", "Si es un mercado en línea, lee su propia página para vendedores sobre tarifas, pagos y devoluciones."],
          words: [["Canal", "un lugar donde vendes o hablas con los clientes, como WhatsApp, Facebook o un mercado en línea."], ["Mercado en línea", "un sitio web o aplicación donde muchos vendedores publican productos y los compradores buscan, como Jumia o Jiji."], ["Comisión", "una parte de cada venta que el mercado en línea se queda como tarifa."]],
          slides: [
            { title: "Vende donde están tus clientes", bullets: ["Solo donde puedas responder los mensajes", "En línea es un segundo puesto: alguien debe atender"] },
            { title: "Tres tipos de canal", bullets: ["Mensajería: WhatsApp para los clientes de siempre", "Redes sociales: Facebook, Instagram, TikTok para que te descubran", "Mercados en línea: Jumia, Jiji, Kilimall, Konga"] },
            { title: "Compara cada canal", bullets: ["Quién compra allí", "Cuánto cuesta: datos, comisión, anuncios, entrega", "Cuánto tiempo lleva cada día"] },
            { title: "Empieza en pequeño", bullets: ["Un canal principal, como máximo uno más", "Primero lee la página para vendedores del mercado"] }
          ],
          tryIt: "Dibuja una pequeña tabla con tus dos o tres canales posibles. Para cada uno, escribe quién compra allí, cuánto cuesta y el tiempo que lleva. Encierra en un círculo el canal con el que vas a empezar.",
          youCanNow: "comparar canales en línea por costo, esfuerzo y clientes, y elegir dónde empezar.",
          quickCheck: [
            { objective: "O1", q: "Puedes responder mensajes una hora al día. ¿Cuál es el mejor comienzo?", options: ["Abrir cuentas en seis aplicaciones a la vez", "Empezar con un canal principal que puedas atender", "Publicar una vez y nunca responder", "Pagar anuncios antes de tener una lista de productos"], answer: 1, why: "Un canal solo funciona si respondes a los clientes, así que empieza con lo que puedas atender." },
            { objective: "O1", q: "¿Dónde revisas lo que un mercado en línea cobra a los vendedores?", options: ["En un mensaje de WhatsApp reenviado", "En lo que adivina un amigo", "En la propia página para vendedores del mercado", "En un comentario debajo de un video"], answer: 2, why: "Las tarifas y las reglas cambian, y solo la página del propio mercado es confiable." }
          ]
        },
        {
          title: "Configurar WhatsApp Business: perfil y lista de productos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Configurar un perfil de WhatsApp Business y una lista de productos con precios.",
          text: [
            "WhatsApp Business es una aplicación distinta del WhatsApp normal, hecha por la misma empresa para pequeños negocios. Descárgala solo de la tienda oficial de aplicaciones (Google Play en Android). Te permite mostrar un perfil de empresa, mostrar tus productos con precios y enviar mensajes de bienvenida y de ausencia.",
            "Tu perfil de empresa es el letrero de tu tienda. Completa el nombre del negocio, una descripción breve de lo que vendes, tu zona o dirección, tu horario de atención y cómo pueden pagar los clientes. Usa un logotipo claro o una foto de tu puesto o de tu mejor producto.",
            "Luego agrega tus productos a la lista de productos (en muchas versiones la aplicación la llama catálogo): una foto, un nombre, un precio en tu moneda y una descripción breve. Los clientes pueden verla y enviarte un artículo en el chat. Ejemplo: Wanjiku, en Nakuru, agrega \"Sandalias masái con cuentas, talla 37-41, KES 1,200\" (un precio de ejemplo).",
            "Los menús cambian según el teléfono y la versión. Si no encuentras una opción, abre la configuración de la aplicación y busca las herramientas para la empresa. También puedes poner un mensaje de bienvenida corto para clientes nuevos y un mensaje de ausencia para cuando estás cerrado."
          ],
          steps: ["Instala WhatsApp Business desde la tienda oficial de aplicaciones.", "Completa el perfil de empresa: nombre, descripción, zona, horario, formas de pago.", "Agrega un logotipo o una foto clara.", "Agrega al menos tres productos con foto, nombre, precio y descripción breve.", "Pon un mensaje de bienvenida y un mensaje de ausencia."],
          words: [["Perfil de empresa", "la página que muestra a los clientes el nombre, la descripción, el horario y la ubicación de tu negocio."], ["Lista de productos (catálogo)", "una lista de tus productos con fotos y precios que los clientes pueden ver en la aplicación."], ["Mensaje de ausencia", "una respuesta automática que se envía cuando estás cerrado."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["Una aplicación gratuita para pequeños negocios", "Instálala solo desde la tienda oficial de aplicaciones", "Perfil, lista de productos, mensajes de bienvenida y de ausencia"] },
            { title: "Tu perfil es el letrero de tu tienda", bullets: ["Nombre del negocio y lo que vendes", "Zona o dirección y horario de atención", "Cómo pueden pagar los clientes", "Un logotipo o una foto clara"] },
            { title: "Tu lista de productos", bullets: ["Foto, nombre, precio en tu moneda", "Descripción breve: talla, color, cantidad", "Al menos tres productos para empezar"] },
            { title: "Mensajes automáticos", bullets: ["Bienvenida para clientes nuevos", "Mensaje de ausencia cuando estás cerrado", "Los menús cambian: busca en configuración, herramientas para la empresa"] }
          ],
          tryIt: "Instala WhatsApp Business (o ábrela si ya la tienes). Completa tu perfil y agrega tres productos con foto, nombre, precio y una línea de descripción. Pide a un amigo que lo mire y te diga una cosa que no está clara.",
          youCanNow: "configurar un perfil de WhatsApp Business y una lista de productos que los clientes pueden ver.",
          quickCheck: [
            { objective: "O2", q: "¿Qué dato va en tu perfil de empresa?", options: ["El PIN de tu dinero móvil", "Tu horario de atención", "Los números de teléfono de tus clientes", "Tu contraseña"], answer: 1, why: "El horario dice a los clientes cuándo vas a responder; los PIN, las contraseñas y los números de los clientes son privados." },
            { objective: "O2", q: "Un producto de tu lista tiene foto pero no tiene precio. ¿Qué agregas?", options: ["Nada; a los clientes les gusta preguntar", "La dirección de tu casa", "Una historia larga sobre la tienda", "El precio en tu moneda"], answer: 3, why: "Un precio claro ahorra tiempo y evita que los clientes se vayan sin preguntar." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Fotos y anuncios que venden",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tomar una foto clara del producto y escribir un anuncio con el que un cliente pueda hacer su pedido.",
          text: [
            "Un cliente en línea no puede tocar tu producto, así que la foto y las palabras tienen que hacer ese trabajo. Toma las fotos con luz del día, cerca de una ventana o afuera a la sombra. Usa un fondo liso, como una tela o una pared. Limpia el lente de la cámara. Muestra el producto completo, luego un primer plano, y algo que muestre el tamaño, como una mano.",
            "Un buen anuncio responde las preguntas del cliente antes de que las haga: un título claro (qué es), el precio en tu moneda, la talla, el color, la cantidad o el peso, de qué está hecho, y cómo y dónde entregas. Ejemplo: \"Crema corporal de manteca de karité, frasco de 250 g, sin perfume, GHS 60. Entrega hoy en Tamale; otras ciudades por encomienda en autobús.\" (un precio de ejemplo).",
            "Sé honesto. Muestra el producto real, no una imagen de internet, y di si los colores pueden variar. Fotos honestas significan menos devoluciones y más confianza. Mantén los archivos pequeños para ahorrar datos: una foto clara es mejor que diez borrosas."
          ],
          steps: ["Limpia el producto y el lente de la cámara.", "Usa luz del día y un fondo liso.", "Toma una foto completa, un primer plano y una que muestre el tamaño.", "Escribe título, precio, talla o peso, material y entrega.", "Léelo como cliente: ¿puedes hacer el pedido sin preguntar nada?"],
          words: [["Anuncio", "la foto y las palabras que muestran un producto a la venta."], ["Primer plano", "una foto tomada cerca del producto para mostrar los detalles."]],
          slides: [
            { title: "Fotos que dan confianza", bullets: ["Luz del día, fondo liso, lente limpio", "Producto completo, un primer plano y algo para el tamaño", "Tu producto real, nunca una imagen de internet"] },
            { title: "Un anuncio que responde preguntas", bullets: ["Título: qué es", "Precio en tu moneda", "Talla, color, peso, material", "Cómo y dónde entregas"] },
            { title: "Ahorra datos, gana confianza", bullets: ["Una foto clara vale más que diez borrosas", "Di si los colores pueden variar", "Anuncios honestos, menos devoluciones"] }
          ],
          tryIt: "Elige un producto. Toma tres fotos (completo, primer plano, tamaño) con luz del día sobre un fondo liso. Escribe un anuncio con título, precio, detalles y entrega. Léelo como cliente y corrige todo lo que tendrías que preguntar.",
          youCanNow: "tomar fotos claras de tus productos con un teléfono sencillo y escribir un anuncio con el que los clientes pueden hacer su pedido.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde está la mejor luz para la foto de un producto?", options: ["Luz del día cerca de una ventana o a la sombra", "Un cuarto oscuro con el flash encendido", "Debajo de una lámpara de color", "Afuera de noche"], answer: 0, why: "La luz suave del día muestra los colores reales y los detalles sin sombras duras." },
            { objective: "O3", q: "¿Qué anuncio permite que un cliente haga su pedido sin preguntar?", options: ["\"Bonito bolso. Escríbeme.\"", "\"Bolso en venta\"", "\"Bolso de cuero\"", "\"Bolso de mano de cuero marrón, 30 x 25 cm, NGN 18,000, entrega en Lagos en 2 días\""], answer: 3, why: "Dice qué es, el tamaño, el precio y la entrega, así que el cliente puede decidir." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Abrir tu tienda en línea",
        questions: [
          { objective: "O1", q: "¿Qué tres cosas comparas en cada canal en línea?", options: ["Quién compra allí, cuánto cuesta y el tiempo que lleva", "Su logotipo, su color y su antigüedad", "Cuántos amigos lo usan para chatear", "Solo si es nuevo"], answer: 0, why: "Los clientes, el costo y el tiempo deciden si un canal te hará ganar dinero." },
          { objective: "O1", q: "Un mercado en línea se queda con una parte de cada venta. ¿Cómo se llama eso?", options: ["Un depósito", "Un reembolso", "Una comisión", "Un saludo"], answer: 2, why: "La comisión es la parte de cada venta que el mercado en línea se queda como tarifa." },
          { objective: "O2", q: "¿De dónde debes descargar la aplicación WhatsApp Business?", options: ["De un enlace de un número desconocido", "De la tienda oficial de aplicaciones", "De un archivo que te envía un desconocido", "De un anuncio emergente"], answer: 1, why: "La tienda oficial de aplicaciones mantiene las aplicaciones falsas y los virus lejos de tu teléfono." },
          { objective: "O2", q: "Cierras a las 7 de la noche. ¿Qué ayuda a los clientes que escriben de noche?", options: ["Apagar tu teléfono para siempre", "Borrar sus mensajes", "Responder con tu PIN", "Un mensaje de ausencia que diga cuándo vas a responder"], answer: 3, why: "Un mensaje de ausencia les dice a los clientes que los viste y cuándo vas a responder." },
          { objective: "O3", q: "Tu producto viene en colores que se ven distintos en cada pantalla. ¿Qué escribes?", options: ["Nada", "\"Los colores pueden variar un poco respecto de la foto\"", "\"Nunca se aceptan devoluciones\"", "Usar una imagen más bonita de internet"], answer: 1, why: "Ser honesto sobre los colores evita quejas y genera confianza." }
        ]
      }
    },
    {
      name: "Capítulo 2: Vender, cobrar y entregar",
      lessons: [
        {
          title: "Responder a los clientes y cerrar la venta",
          objectives: ["O4"],
          minutes: 5,
          goal: "Responder a un cliente y confirmar un pedido en un solo mensaje claro.",
          text: [
            "En línea, el vendedor que responde primero y con claridad muchas veces se queda con la venta. Responde dentro de tu horario de atención, saluda al cliente y contesta exactamente lo que preguntó. Si no lo sabes, di cuándo lo vas a averiguar.",
            "Guarda las respuestas cortas que envías seguido, como tu lista de precios, tus zonas de entrega y tus formas de pago. WhatsApp Business te deja guardar respuestas y usarlas de nuevo; los menús cambian, así que busca en las herramientas para la empresa. Así escribes menos y tus respuestas son siempre iguales.",
            "Cuando el cliente esté listo, confirma el pedido en un solo mensaje: artículo, cantidad, precio, lugar y costo de entrega, día de entrega y cómo va a pagar. Pídele que responda \"Sí\" para confirmar. Ejemplo de Abiyán: \"Hola, Awa. Pedido: 2 vestidos de tela wax, talla M, 15,000 XOF cada uno = 30,000 XOF. Entrega en Cocody el sábado, 1,000 XOF. Pago con dinero móvil antes de la entrega. Responde SÍ para confirmar.\" (precios de ejemplo).",
            "Mantén la amabilidad, aunque un cliente regatee mucho o sea grosero. Nunca envíes insultos ni publiques los mensajes de un cliente."
          ],
          steps: ["Saluda al cliente y contesta exactamente lo que preguntó.", "Usa una respuesta guardada para la lista de precios, la entrega y el pago.", "Confirma: artículo, cantidad, precio, lugar, costo y día de entrega, forma de pago.", "Pide al cliente que responda \"Sí\" antes de preparar el pedido."],
          words: [["Respuesta guardada (respuesta rápida)", "un mensaje que guardas en la aplicación y vuelves a enviar con unos pocos toques."], ["Confirmación de pedido", "un mensaje que reúne todo lo que el cliente aceptó comprar y cómo se va a pagar y entregar."]],
          slides: [
            { title: "Respuestas rápidas y claras ganan ventas", bullets: ["Responde dentro de tu horario de atención", "Saluda y contesta exactamente lo que preguntó", "¿No lo sabes? Di cuándo lo vas a averiguar"] },
            { title: "Guarda las respuestas que envías seguido", bullets: ["Lista de precios", "Zonas y costos de entrega", "Formas de pago"] },
            { title: "Confirma cada pedido por escrito", bullets: ["Artículo, cantidad y precio", "Lugar, costo y día de entrega", "Forma de pago", "El cliente responde \"Sí\" para confirmar"] }
          ],
          tryIt: "Escribe y guarda un mensaje de confirmación de pedido para tu negocio, con espacios para artículo, cantidad, precio, entrega y pago. Luego complétalo para un pedido de prueba.",
          youCanNow: "responder a los clientes con claridad y confirmar cada pedido en un solo mensaje escrito.",
          quickCheck: [
            { objective: "O4", q: "¿Qué confirmación de pedido está completa?", options: ["\"OK, ya va.\"", "\"2 bolsos, KES 1,500 cada uno = KES 3,000. Entrega en el centro de Kisumu el viernes, KES 200. Pago por M-Pesa. Responde SÍ.\"", "\"Manda el dinero.\"", "\"¡Gracias por escribir!\""], answer: 1, why: "Indica artículo, cantidad, precio, entrega y pago, y pide al cliente que confirme." },
            { objective: "O4", q: "¿Por qué guardar las respuestas que envías seguido?", options: ["Para responder rápido y siempre igual", "Para que el cliente pague más", "Para no leer nunca los mensajes", "Para poder compartir los números de los clientes"], answer: 0, why: "Las respuestas guardadas te ahorran escribir y mantienen tus precios y reglas iguales." }
          ]
        },
        {
          title: "Cobrar con seguridad: alto a las alertas de pago falsas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Comprobar que un pago de verdad llegó antes de entregar la mercancía.",
          text: [
            "A muchos vendedores en línea les pagan con dinero móvil (M-Pesa, MTN MoMo, Orange Money, Wave, que son servicios para enviar y recibir dinero desde el teléfono), con transferencia bancaria o en efectivo contra entrega. Los estafadores lo saben. Un truco común es la alerta de pago falsa: un mensaje de texto, una captura de pantalla o un mensaje reenviado que parece un pago, pero no llegó dinero.",
            "Tu regla: la mercancía sale solo cuando el dinero aparece en tu propia cuenta. Abre tu propia aplicación de dinero móvil o de banco, o marca el código oficial de tu proveedor, y revisa el saldo o el movimiento. Una captura de pantalla del cliente no es prueba. Un mensaje de texto desde un número de teléfono común no es prueba.",
            "Otro truco: \"Te mandé dinero por error, por favor devuélvemelo.\" No envíes nada. Revisa tu saldo tú mismo; si de verdad hay un pago por error, tu proveedor puede revertirlo con su propio procedimiento. Un proveedor real nunca te pide tu PIN, tu contraseña ni un código de un solo uso. Nunca los compartas, ni siquiera con alguien que dice ser de la empresa.",
            "En el pago contra entrega, cuenta el efectivo antes de entregar el paquete y conoce los billetes de tu moneda. Cada banco central publica avisos sobre fraudes, por ejemplo el Banco Central de Kenia y el Banco Central de Nigeria."
          ],
          steps: ["Acuerda la forma de pago en la confirmación del pedido.", "Cuando el cliente diga que pagó, abre tu propia aplicación o marca el código oficial de tu proveedor.", "Revisa el monto y quién lo envió en tu saldo o en tu estado de cuenta.", "Solo entonces entrega o envía la mercancía.", "Ignora los pedidos de \"devuélveme el dinero que te mandé por error\"; deja que el proveedor se encargue de las reversiones."],
          words: [["Alerta de pago falsa", "un mensaje de texto, una captura o un mensaje hecho para parecer un pago cuando no se envió dinero."], ["PIN", "tu número secreto del dinero móvil o del banco. Solo tú debes conocerlo."], ["Reversión", "cuando un pago se devuelve; una reversión real la hace tu proveedor, no tú enviando dinero a un desconocido."]],
          slides: [
            { title: "El truco del pago falso", bullets: ["Un mensaje o una captura que parece que llegó dinero", "No hay dinero en tu cuenta", "El estafador se va con tu mercancía"] },
            { title: "Tu regla", bullets: ["La mercancía sale solo con el dinero en TU cuenta", "Revisa en tu propia aplicación o con el código oficial", "Una captura de pantalla no es prueba"] },
            { title: "\"Te lo mandé por error\"", bullets: ["No devuelvas nada tú mismo", "Revisa tu propio saldo", "Las reversiones reales pasan por tu proveedor"] },
            { title: "Nunca compartas", bullets: ["Tu PIN o tu contraseña", "Un código de un solo uso", "Un proveedor real nunca te los pide"] }
          ],
          tryIt: "Escribe tu regla de pago en un papel y pégala cerca de donde empacas los pedidos. Luego practica: abre tu propia aplicación de dinero móvil o de banco y busca dónde ves tu último movimiento.",
          youCanNow: "comprobar que el dinero de verdad llegó a tu propia cuenta antes de enviar la mercancía, y rechazar los trucos de pagos falsos y de reversiones.",
          quickCheck: [
            { objective: "O5", q: "Un cliente te envía una captura de pantalla de un pago. ¿Qué haces?", options: ["Enviar la mercancía enseguida", "Pedir una captura más grande", "Revisar tu propia aplicación o el código oficial para ver el dinero", "Enviarle tu PIN para que lo revise"], answer: 2, why: "Solo tu propia cuenta muestra si el dinero de verdad llegó; las capturas se pueden falsificar." },
            { objective: "O5", q: "Alguien dice que te mandó dinero por error y te pide que se lo devuelvas. ¿Qué es lo más seguro?", options: ["Devolverlo de inmediato", "Revisar tu propio saldo y dejar que tu proveedor se encargue de cualquier reversión", "Darle tu PIN para que lo saque", "Enviar el doble para ser amable"], answer: 1, why: "Es un truco común; un pago real hecho por error se revierte a través del proveedor." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Entrega, devoluciones y la confianza de los clientes",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escribir una política de entrega y devoluciones y mantener privados los datos de los clientes.",
          text: [
            "Los clientes vuelven cuando la entrega es confiable. Anota tus zonas de entrega, el costo a cada una, cuánto tarda y cómo envías: en persona, con un mototaxista (boda boda u okada), por un servicio de encomiendas en autobús o por mensajería. Empaca bien la mercancía y envía un mensaje al cliente cuando el paquete salga, con el nombre del repartidor o el número del paquete.",
            "Una política de devoluciones dice qué pasa si algo está mal: por ejemplo, \"¿Talla equivocada? Avísanos dentro de 2 días y lo cambiamos si no se usó.\" Que sea corta y justa, y síguela siempre. En Marruecos, una vendedora de Casablanca podría decir: cambio dentro de 3 días, el cliente paga el envío de vuelta salvo que el artículo esté defectuoso.",
            "Los números de teléfono, las direcciones y los pedidos de los clientes son privados. No los compartas, no los publiques y no agregues personas a grupos o listas de difusión sin preguntar. Muchos países tienen leyes de protección de datos, por ejemplo la Ley de Protección de Datos de Kenia y la Ley de Protección de Datos de Nigeria de 2023. Si no estás seguro de qué se aplica, consulta la oficina nacional de protección de datos.",
            "Después de la entrega, pregunta si todo está bien e invita al cliente a dejar una opinión o una foto que puedas compartir, con su permiso."
          ],
          steps: ["Anota zonas de entrega, costos, tiempos y cómo envías.", "Empaca bien y envía un mensaje cuando el paquete salga.", "Escribe una política de devoluciones corta y justa, y síguela.", "Mantén privados los números y las direcciones de los clientes; pregunta antes de agregar a alguien a una lista.", "Pide la opinión del cliente después de la entrega."],
          words: [["Política de devoluciones", "tu regla sobre qué pasa cuando un cliente quiere devolver o cambiar un producto."], ["Lista de difusión", "una lista de WhatsApp para enviar un mismo mensaje a muchos contactos; solo lo reciben las personas que guardaron tu número."], ["Datos personales", "información sobre una persona, como su nombre, su número de teléfono o su dirección."]],
          slides: [
            { title: "Entrega confiable", bullets: ["Zonas, costo, tiempo y cómo envías", "Empaca bien", "Avisa al cliente cuando sale"] },
            { title: "Una política de devoluciones corta y justa", bullets: ["Qué se puede devolver y cuándo", "Quién paga el envío de vuelta", "Síguela siempre"] },
            { title: "Los datos de los clientes son privados", bullets: ["No compartas ni publiques números y direcciones", "Pregunta antes de agregar a alguien a una lista", "Consulta tu oficina nacional de protección de datos"] }
          ],
          tryIt: "Tarea final: arma tu plan de tienda en línea de una página: dónde vendes y por qué, el texto de tu perfil, tres anuncios, tu confirmación de pedido guardada, tu regla de pago, y tu política de entrega y devoluciones.",
          youCanNow: "entregar de forma confiable, manejar las devoluciones con justicia y mantener privados los datos de tus clientes.",
          quickCheck: [
            { objective: "O6", q: "¿Qué debe incluir una política de entrega?", options: ["Tu PIN", "Las direcciones de tus clientes", "Zonas de entrega, costo, tiempo y cómo envías", "Solo la palabra \"rápido\""], answer: 2, why: "Las zonas, el costo, el tiempo y la forma de envío dicen al cliente exactamente qué esperar." },
            { objective: "O6", q: "Quieres enviar una lista de precios cada semana a tus clientes. ¿Qué es lo correcto?", options: ["Publicar todos sus números en un grupo público", "Vender sus números a otro comerciante", "Agregar desconocidos de una lista comprada", "Preguntar primero a los clientes y mantener privados sus números"], answer: 3, why: "Los números de los clientes son datos personales; pregunta antes de enviarles mensajes masivos." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Vender, cobrar y entregar",
        questions: [
          { objective: "O4", q: "Un cliente hace una pregunta que ahora no puedes responder. ¿Qué le contestas?", options: ["Nada", "Le dices cuándo lo vas a averiguar y le vuelves a escribir", "Le dices que vaya a otro lado", "Le mandas una nota de voz larga sobre otra cosa"], answer: 1, why: "Un momento claro para responder conserva al cliente y genera confianza." },
          { objective: "O4", q: "¿Qué hace el cliente después de tu confirmación de pedido?", options: ["Te envía su PIN", "Nada", "Responde \"Sí\" para confirmar", "Paga el doble"], answer: 2, why: "Un \"Sí\" por escrito muestra que los dos acordaron el mismo pedido." },
          { objective: "O5", q: "En un pedido pagado con dinero móvil, ¿cuándo puede salir la mercancía de tu tienda?", options: ["Cuando ves el dinero en tu propia cuenta", "Cuando el cliente envía una captura de pantalla", "Cuando alguien llama para decir que ya lo envió", "Cuando el cliente lo promete"], answer: 0, why: "Solo el dinero en tu propia cuenta es prueba de pago." },
          { objective: "O5", q: "Un hombre llama, dice que es de tu empresa de dinero móvil y necesita tu PIN. ¿Qué es cierto?", options: ["El personal real puede pedirlo", "Dale la mitad", "Mándalo por mensaje de texto", "Un proveedor real nunca pide tu PIN; cuelga"], answer: 3, why: "Los proveedores reales nunca piden tu PIN; quien lo pide es un estafador." },
          { objective: "O6", q: "Un cliente recibe la talla equivocada. ¿Qué ayuda más?", options: ["Ignorar el mensaje", "Una política de devoluciones clara que sigues siempre", "Echarle la culpa al repartidor", "Publicar el mensaje del cliente en internet"], answer: 1, why: "Una política justa, seguida siempre, resuelve los problemas y conserva a los clientes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Vender en línea en África (WhatsApp Business, mercados en línea y redes sociales)",
    questions: [
      { objective: "O1", q: "¿Dónde debería empezar a vender en línea un pequeño vendedor?", options: ["En todas partes a la vez", "Donde ya están los clientes y donde el vendedor pueda seguir el ritmo", "Solo donde los anuncios son más caros", "Donde nadie más vende nada"], answer: 1, why: "Un canal funciona solo si los clientes están allí y tú les respondes." },
      { objective: "O1", q: "¿Cuál es un mercado en línea?", options: ["Jiji", "Un mensaje de bienvenida", "Tu PIN", "Una lista de difusión"], answer: 0, why: "Jiji, Jumia, Kilimall y Konga son mercados en línea donde los compradores buscan entre muchos vendedores." },
      { objective: "O1", q: "Las redes sociales como Instagram y TikTok te ayudan sobre todo a:", options: ["Esconder tus productos", "Revisar pagos", "Que clientes nuevos te descubran con fotos y videos", "No responder mensajes"], answer: 2, why: "Las redes sociales sirven para que te encuentren personas que todavía no te conocen." },
      { objective: "O2", q: "WhatsApp Business es:", options: ["Un banco", "Un mercado en línea que cobra comisión", "Un anuncio pagado", "Una aplicación aparte para pequeños negocios, con perfil y lista de productos"], answer: 3, why: "Agrega un perfil de empresa, productos con precios y mensajes automáticos." },
      { objective: "O2", q: "¿Qué va en tu perfil de empresa?", options: ["Tu horario de atención y la zona que atiendes", "Tu contraseña", "Las direcciones de tus clientes", "Tu código de un solo uso"], answer: 0, why: "El horario y la zona dicen a los clientes cuándo y dónde atiendes." },
      { objective: "O2", q: "Cada producto de tu lista debe tener:", options: ["Solo una foto", "Una foto, un nombre, un precio y una descripción breve", "El PIN de tu banco", "Ningún precio, para que los clientes pregunten"], answer: 1, why: "La foto, el nombre, el precio y la descripción permiten a los clientes elegir sin esperar." },
      { objective: "O3", q: "El mejor fondo para la foto de un producto es:", options: ["Una calle llena de gente", "Una mesa desordenada", "Una tela o una pared lisa", "Un rincón oscuro"], answer: 2, why: "Un fondo liso mantiene la mirada en el producto." },
      { objective: "O3", q: "¿Por qué mostrar una mano o una moneda junto al producto?", options: ["Para mostrar su tamaño", "Para esconder el producto", "Para que el archivo sea más grande", "A los clientes les gustan las manos"], answer: 0, why: "Algo conocido en la foto muestra qué tan grande es el producto." },
      { objective: "O3", q: "¿Está bien usar una foto más bonita del mismo producto sacada de internet?", options: ["Sí, siempre", "Sí, si es más luminosa", "Solo para artículos caros", "No; muestra tu producto real para que los clientes reciban lo que ven"], answer: 3, why: "Las fotos honestas evitan quejas y devoluciones." },
      { objective: "O4", q: "Una confirmación de pedido incluye:", options: ["Solo el precio", "Artículo, cantidad, precio, entrega y pago", "Tu PIN y tu contraseña", "Los nombres de otros clientes"], answer: 1, why: "Todos los detalles en un solo mensaje evitan malentendidos." },
      { objective: "O4", q: "Un cliente regatea mucho y es grosero. ¿Qué haces?", options: ["Insultarlo también", "Publicar sus mensajes", "Mantener la amabilidad y darle tu mejor precio", "Bloquear a todos los clientes"], answer: 2, why: "Mantener la amabilidad protege tu nombre, aunque esta venta no se haga." },
      { objective: "O4", q: "Una respuesta guardada (respuesta rápida) es ideal para:", options: ["Tu lista de precios y tus zonas de entrega", "Tu PIN", "La dirección de un cliente", "Chismes"], answer: 0, why: "Los mensajes que envías seguido se pueden guardar y enviar con unos pocos toques." },
      { objective: "O5", q: "Un mensaje de texto desde un número de teléfono común dice \"Recibiste GHS 500\". Tú:", options: ["Envías la mercancía", "Le das las gracias y envías la mercancía", "Lo reenvías a tus amigos", "Primero revisas tu propio saldo de dinero móvil"], answer: 3, why: "Las alertas falsas llegan desde números comunes; solo tu propia cuenta es prueba." },
      { objective: "O5", q: "¿Quién debe conocer el PIN de tu dinero móvil?", options: ["Solo tú", "El cliente", "El repartidor", "Cualquiera de la empresa que llame"], answer: 0, why: "El PIN es secreto; un proveedor real nunca lo pide." },
      { objective: "O5", q: "Un mensaje de \"pago por error\" te pide devolver dinero. El paso más seguro es:", options: ["Devolverlo rápido", "Devolver el doble", "Revisar tu propio saldo y dejar que el proveedor se encargue de cualquier reversión", "Compartir tu PIN con esa persona"], answer: 2, why: "Las reversiones reales pasan por el proveedor, no por enviar tú dinero a un desconocido." },
      { objective: "O5", q: "En el pago contra entrega, el repartidor debe:", options: ["Entregar primero el paquete", "Contar el efectivo antes de entregar el paquete", "Aceptar una promesa de pago para después", "Tomar una foto del PIN del cliente"], answer: 1, why: "Contar primero significa que la mercancía sale solo cuando el pago está en la mano." },
      { objective: "O6", q: "Un buen mensaje de entrega para el cliente dice:", options: ["Nada hasta que llegue", "Que el paquete salió, con el nombre del repartidor o el número del paquete", "Las direcciones de otros clientes", "Tu PIN"], answer: 1, why: "Avisar al cliente que salió, y cómo, genera confianza." },
      { objective: "O6", q: "Los números de teléfono y las direcciones de los clientes son:", options: ["Libres para compartir", "Algo para vender", "Datos personales que mantienes privados", "Para publicaciones públicas"], answer: 2, why: "Son datos personales; muchos países los protegen por ley." },
      { objective: "O6", q: "Una política de devoluciones debe ser:", options: ["Larga y secreta", "Distinta para cada cliente", "Nunca escrita", "Corta, justa y seguida siempre"], answer: 3, why: "Una política clara y justa que siempre sigues mantiene la confianza de los clientes." },
      { objective: "O6", q: "¿Dónde revisas las reglas de protección de datos de tu país?", options: ["En tu oficina nacional de protección de datos", "En un rumor de las redes sociales", "En la opinión de un cliente", "En un anuncio de un mercado en línea"], answer: 0, why: "La oficina nacional, como la ODPC de Kenia o la NDPC de Nigeria, publica las reglas." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Dónde vender", objective: "O1", notYet: "No eligió ningún canal, o eligió muchos sin dar razones.", meets: "Eligió uno o dos canales, con quién compra allí, el costo y el tiempo de cada uno.", exceeds: "También dice qué lo haría sumar o dejar un canal después de tres meses." },
      { name: "Perfil y lista de productos", objective: "O2", notYet: "Al perfil le falta el nombre, el horario o la zona, o tiene menos de tres productos.", meets: "Perfil con nombre, descripción, zona, horario y formas de pago, más al menos tres productos con precio.", exceeds: "Un amigo o un cliente lo revisó y se corrigió un punto que no estaba claro." },
      { name: "Anuncios", objective: "O3", notYet: "Fotos borrosas o sacadas de otro lado, o sin precio ni entrega.", meets: "Tres anuncios con fotos reales y claras, título, precio en moneda local, detalles y entrega.", exceeds: "Cada anuncio tiene un primer plano y una foto del tamaño, y notas honestas, como la variación de colores." },
      { name: "Confirmación de pedido", objective: "O4", notYet: "No hay confirmación guardada, o le faltan detalles.", meets: "Un mensaje guardado con artículo, cantidad, precio, lugar, costo y día de entrega, pago, y el pedido de responder Sí.", exceeds: "También hay respuestas guardadas para precios, entrega y pago." },
      { name: "Regla de pago", objective: "O5", notYet: "La mercancía puede salir con una captura o una promesa, o se comparte el PIN.", meets: "Regla escrita: la mercancía sale solo cuando el dinero aparece en tu propia cuenta; nunca compartir un PIN ni un código.", exceeds: "También cubre los pedidos de devolver un pago por error y contar el efectivo en el pago contra entrega." },
      { name: "Entrega, devoluciones y datos", objective: "O6", notYet: "Sin detalles de entrega ni regla de devoluciones, o se comparten datos de los clientes.", meets: "Zonas, costo, tiempo y forma de entrega, una política de devoluciones corta y el compromiso de mantener privados los datos de los clientes.", exceeds: "Se pregunta a los clientes antes de agregarlos a cualquier lista, y se pide su opinión después de la entrega." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que informan su primer pedido en línea, o más, dentro de 30 días (encuesta de seguimiento)",
      "Participantes que informan no haber perdido dinero por alertas de pago falsas en los 30 días después del curso",
      "Participantes que informan ventas mensuales más altas después de tres meses (seguimiento del programa)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono Android con WhatsApp Business instalada desde la tienda oficial de aplicaciones",
      "Tres productos (o fotos de ellos) para publicar",
      "Papel y bolígrafo para la tabla de canales, las políticas y la regla de pago",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "En grupo, hagan juntos la prueba inicial y luego un capítulo por sesión; los participantes configuran su perfil en vivo y se ayudan entre sí.",
      "Dé la lección de fotos al aire libre con luz del día; pida a los participantes que intercambien teléfonos y revisen los anuncios de los demás.",
      "Haga un juego de roles con una alerta de pago falsa y una llamada de \"pago por error\". Nunca pida a los participantes que muestren un PIN, un saldo o un estado de cuenta reales.",
      "Recuerde a los participantes que los menús de las aplicaciones, las tarifas de los mercados en línea y las reglas de datos cambian, y que deben revisar la aplicación, la página para vendedores del mercado o el organismo regulador nacional.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

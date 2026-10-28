"use strict";

// Koach Learn course (Spanish translation of entrepreneurs/entrepreneurs-ai-ecommerce.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-ecommerce-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-ecommerce",
  category: "Entrepreneurs",
  name: "Comercio electrónico impulsado por IA",
  skills: "Investigar un nicho de productos, Escribir anuncios de productos con IA, Hacer fotos de productos, Fijar políticas de envío y devoluciones, Responder a clientes con ayuda de la IA, Usar el correo y las reseñas de forma legal",
  outcome: "investigar un nicho de productos, usar la IA para escribir anuncios honestos y hacer fotos limpias de tus productos, fijar políticas de envío y devoluciones que sigan la regla de ventas por correo de la FTC, y preparar respuestas a clientes, correos de seguimiento y solicitudes de reseñas con ayuda de la IA que sigan las reglas de Estados Unidos.",
  about: [
    "Vender en línea es más fácil de empezar que nunca: puedes vender en tu propia tienda (en plataformas como Shopify, Square Online o Wix), en mercados en línea (Etsy, Amazon, eBay) o en tiendas de redes sociales. La IA puede ayudarte en casi todos los pasos, desde encontrar un nicho hasta escribir anuncios y responder a los clientes.",
    "Este curso es para personas que están empezando o haciendo crecer una tienda en línea. En el Capítulo 1 vas a investigar un nicho, escribir anuncios y crear fotos de productos con IA. En el Capítulo 2 vas a fijar políticas de envío y devoluciones, atender las preguntas de los clientes y usar el correo y las reseñas para crecer, siguiendo las reglas de la FTC (la Comisión Federal de Comercio de Estados Unidos).",
    "Cada lección dura unos cinco minutos e incluye una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las comisiones y funciones de las plataformas cambian seguido, así que revisa las páginas de precios y de ayuda de cada plataforma antes de elegir."
  ],
  finalTask: "Arma un kit de lanzamiento para una línea de productos: un resumen del nicho en un párrafo con evidencia de demanda, tres anuncios de productos terminados (título, descripción, detalles clave) con fotos limpias, políticas de envío y devoluciones por escrito con tiempos de envío que de verdad puedas cumplir, cinco plantillas de respuesta a clientes hechas con ayuda de la IA, y un correo de seguimiento más una solicitud de reseña que sigan la ley CAN-SPAM y las reglas de reseñas de la FTC.",
  chapters: [
    {
      name: "Capítulo 1: Prepara productos que se vendan",
      lessons: [
        {
          title: "Investigar un nicho de productos",
          minutes: 5,
          goal: "Elegir un nicho de productos y comprobar que la gente ya está comprando.",
          text: [
            "Un nicho es un grupo específico de compradores con una necesidad específica: \"collares hechos a mano para perros de razas grandes\", \"kits naturales para el cuidado del cabello de niños\", \"herramientas de jardinería para balcones pequeños\". Es más fácil ganar en un nicho que en una categoría general.",
            "Usa la IA para generar ideas: \"Puedo hacer o conseguir [productos]. Sugiere diez nichos, el comprador de cada uno y qué problema resuelve el producto.\" Luego comprueba tú mismo la demanda real: busca productos parecidos en el mercado en línea, mira cuántas reseñas tienen los que más venden, lee sus reseñas de 3 estrellas para encontrar quejas que tú podrías resolver y revisa las sugerencias de búsqueda.",
            "La IA no puede ver datos de ventas en vivo de forma confiable y puede inventar números. Úsala para ideas y preguntas; usa páginas reales de los mercados en línea y tus propias conversaciones como evidencia."
          ],
          steps: ["Pídele a la IA diez ideas de nichos según lo que puedes hacer o conseguir.", "Busca cada idea principal en un mercado en línea.", "Anota cuántas reseñas y qué precios tienen los que más venden.", "Lee las reseñas de 3 estrellas buscando problemas que podrías resolver.", "Elige un nicho con demanda clara."],
          words: [["Nicho", "un grupo específico de compradores con una necesidad específica."], ["Demanda", "cuántas personas quieren comprar algo."], ["Mercado en línea", "un sitio web donde muchos vendedores publican productos, como Etsy, Amazon o eBay."]],
          slides: [
            { title: "Sé específico", bullets: ["\"Collares para perros de razas grandes\"", "Más fácil de ganar que una categoría general"] },
            { title: "La IA para ideas", bullets: ["Diez nichos, compradores y problemas", "Según lo que puedes hacer o conseguir"] },
            { title: "Evidencia real", bullets: ["Busca en el mercado en línea", "Reseñas y precios de los que más venden", "Las reseñas de 3 estrellas muestran qué resolver"] },
            { title: "Cuidado", bullets: ["La IA puede inventar cifras de ventas", "Usa páginas reales como evidencia"] }
          ],
          tryIt: "Usa la IA para generar diez nichos, revisa tres de ellos en un mercado en línea real y escribe un resumen de un párrafo del nicho que elijas con tu evidencia de demanda.",
          youCanNow: "elegir un nicho de productos con base en evidencia real de demanda."
        },
        {
          title: "Escribir anuncios de productos honestos",
          minutes: 5,
          goal: "Escribir con la IA un título y una descripción de producto claros, fáciles de encontrar y verdaderos.",
          text: [
            "Un buen anuncio responde las preguntas del comprador antes de que las haga: qué es, para quién es, tamaño, materiales, qué incluye, cómo cuidarlo y el tiempo de envío. El título debe usar las palabras que buscan los compradores, sin llenarlo de palabras clave.",
            "Dale a la IA los datos reales y pídele: \"Escribe un título de producto de menos de 80 caracteres y una descripción con una introducción corta, 5 viñetas e instrucciones de cuidado. Usa solo estos datos: [datos].\" Muchas veces la IA agrega funciones que no mencionaste; borra todo lo que no sea cierto.",
            "La FTC dice que los anuncios deben ser verdaderos y estar respaldados por evidencia. No digas \"orgánico\", \"hecho a mano\", \"hecho en EE. UU.\", beneficios para la salud o \"el más vendido\" a menos que sea cierto y lo puedas demostrar. Revisa también las reglas de anuncios de cada plataforma."
          ],
          steps: ["Escribe cada dato real del producto.", "Pídele a la IA un título y una descripción usando solo esos datos.", "Borra todo lo que la IA agregó que no sea cierto.", "Revisa afirmaciones como orgánico, hecho a mano o hecho en EE. UU.", "Revisa las reglas de anuncios de la plataforma."],
          words: [["Anuncio", "la página de un producto en una tienda o un mercado en línea."], ["Palabra clave", "una palabra o frase que los compradores escriben en el buscador."]],
          slides: [
            { title: "Responde las preguntas del comprador", bullets: ["Qué es, para quién, tamaño, materiales", "Qué incluye, cuidado, tiempo de envío"] },
            { title: "La IA solo con tus datos", bullets: ["Título de menos de 80 caracteres", "Introducción, 5 viñetas, instrucciones de cuidado", "Borra todo lo que no sea cierto"] },
            { title: "Las afirmaciones necesitan prueba", bullets: ["\"Orgánico\", \"hecho a mano\", \"hecho en EE. UU.\"", "Beneficios para la salud, \"el más vendido\"", "Revisa también las reglas de la plataforma"] }
          ],
          sources: [{ name: "FTC: Conceptos básicos de publicidad y marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Escribe los datos de tres productos y usa la IA para redactar cada anuncio. Quita todo lo que no sea cierto y revisa cada afirmación.",
          youCanNow: "escribir anuncios de productos claros, fáciles de encontrar y que dicen la verdad."
        },
        {
          title: "Hacer fotos limpias de tus productos",
          minutes: 5,
          goal: "Crear fotos y gráficos que muestren el producto real con claridad.",
          text: [
            "Las fotos venden. Usa tu teléfono con luz de día cerca de una ventana, sobre un fondo liso, y toma varios ángulos, un acercamiento y una foto que muestre el tamaño (en una mano o junto a un objeto común).",
            "Las herramientas de IA pueden ayudar: quitar o cambiar fondos, corregir la luz, ajustar el tamaño para cada plataforma y hacer gráficos de estilo de vida en herramientas como Canva. Muchos mercados en línea tienen reglas para la imagen principal, como un fondo liso; revisa las reglas de imagen de la plataforma.",
            "Nunca uses la IA para que el producto se vea distinto de lo que recibirá el comprador: nada de colores, tamaños, funciones o resultados falsos. Las imágenes engañosas pueden traer devoluciones, malas reseñas, sanciones de la plataforma y problemas por publicidad engañosa."
          ],
          steps: ["Toma las fotos con luz de día sobre un fondo liso.", "Toma varios ángulos, un acercamiento y una foto del tamaño.", "Usa herramientas de IA para limpiar fondos y ajustar el tamaño.", "Revisa las reglas de imagen de la plataforma.", "Compara cada imagen con el producto real."],
          words: [["Imagen de estilo de vida", "una foto o un gráfico que muestra el producto en uso."], ["Quitar el fondo", "una herramienta de edición que recorta el producto de su fondo."]],
          slides: [
            { title: "Tómala bien", bullets: ["Luz de día cerca de una ventana", "Fondo liso", "Ángulos, acercamiento, foto del tamaño"] },
            { title: "La IA ayuda a editar", bullets: ["Quitar o cambiar fondos", "Corregir la luz, ajustar tamaño por plataforma", "Gráficos de estilo de vida en Canva"] },
            { title: "Nunca engañes", bullets: ["Nada de colores, tamaños o funciones falsas", "Revisa las reglas de imagen de cada plataforma"] }
          ],
          tryIt: "Fotografía un producto (ángulos, acercamiento, tamaño), limpia la imagen principal con una herramienta de IA para fondos y compárala con el producto real antes de usarla.",
          youCanNow: "crear fotos de productos limpias y honestas con ayuda de la IA para editar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepara productos que se vendan",
        questions: [
          { q: "¿Cuál es un nicho?", options: ["Cosas", "Herramientas de jardinería para balcones pequeños", "Todo para todos", "Productos"], answer: 1, why: "Nombra compradores específicos y una necesidad específica." },
          { q: "La IA dice que un producto vende 10,000 unidades al mes. ¿Qué haces?", options: ["Publicar la cifra como un hecho", "Creerle", "Pedir 10,000 unidades", "Revisar evidencia real en el mercado en línea; la IA puede inventar números"], answer: 3, why: "La IA no puede ver de forma confiable los datos de ventas en vivo." },
          { q: "La IA agregó \"resistente al agua\" a tu anuncio, pero el producto no lo es. ¿Qué haces?", options: ["Borrarlo", "Dejarlo", "Ponerlo en negritas", "Agregar \"garantizado\""], answer: 0, why: "Los anuncios deben ser verdaderos." },
          { q: "¿Qué afirmación necesita prueba antes de usarla?", options: ["\"Se envía en una caja\"", "\"Azul\"", "\"Hecho en EE. UU.\"", "\"Incluye una tarjeta\""], answer: 2, why: "Las afirmaciones de origen como hecho en EE. UU. deben ser verdaderas y demostrables." },
          { q: "¿Qué uso de la IA en fotos de productos NO está bien?", options: ["Corregir la luz", "Quitar el fondo", "Hacer que el producto se vea más grande de lo que es", "Ajustar el tamaño para la plataforma"], answer: 2, why: "Las imágenes engañosas engañan a los compradores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Atiende y crece",
      lessons: [
        {
          title: "Políticas de envío y devoluciones",
          minutes: 6,
          goal: "Escribir políticas de envío y devoluciones que sigan la regla de ventas por correo de la FTC.",
          text: [
            "La Regla de la FTC sobre mercancía pedida por correo, internet o teléfono dice: si indicas un tiempo de envío, necesitas una base razonable para creer que lo puedes cumplir; si no indicas ninguno, debes tener una base razonable para enviar en un plazo de 30 días.",
            "Si no puedes enviar a tiempo, debes avisarle al comprador, darle una nueva fecha y ofrecerle la opción de cancelar con un reembolso rápido. Los reembolsos de pagos en efectivo, cheque, giro postal o tarjetas de crédito de terceros deben hacerse dentro de los siete días hábiles después de la cancelación, y el crédito en la tienda no puede reemplazar un reembolso obligatorio.",
            "La IA puede redactar páginas de políticas claras: \"Escribe una política de envíos y devoluciones amable para una pequeña tienda en línea. Enviamos en 3 a 5 días hábiles. Aceptamos devoluciones dentro de 30 días de artículos sin usar; el comprador paga el envío de la devolución.\" Luego revisa que coincida con lo que de verdad haces y con las reglas de la plataforma."
          ],
          steps: ["Decide un tiempo de envío que de verdad puedas cumplir.", "Decide tus reglas de devoluciones.", "Pídele a la IA que redacte ambas políticas en palabras sencillas.", "Compáralas con la regla de la FTC y con las reglas de tu plataforma.", "Escribe una plantilla de aviso de retraso que ofrezca cancelar con reembolso."],
          words: [["Regla de ventas por correo", "la regla de la FTC sobre tiempos de envío, avisos de retraso y reembolsos de pedidos por correo, internet o teléfono."], ["Nueva fecha", "una fecha de envío nueva que le das a un comprador después de un retraso."]],
          slides: [
            { title: "Tiempo de envío (regla de la FTC)", bullets: ["Tiempo indicado: base razonable para cumplirlo", "Sin tiempo indicado: enviar en 30 días"] },
            { title: "Retrasos", bullets: ["Avisa al comprador, dale una nueva fecha", "Ofrece cancelar con reembolso rápido", "Reembolso en 7 días hábiles (efectivo, tarjeta)"] },
            { title: "Redacta con la IA", bullets: ["Páginas de políticas sencillas y amables", "Que coincidan con lo que de verdad haces", "Revisa también las reglas de la plataforma"] }
          ],
          sources: [{ name: "FTC: Guía para negocios sobre la regla de mercancía pedida por correo, internet o teléfono (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule" }],
          tryIt: "Escribe tus políticas de envío y devoluciones con la IA, compáralas con la regla de la FTC y escribe un mensaje de retraso que dé una nueva fecha y ofrezca cancelar con reembolso.",
          youCanNow: "fijar políticas de envío y devoluciones claras, honestas y que siguen la regla de la FTC."
        },
        {
          title: "Responder a clientes con ayuda de la IA",
          minutes: 5,
          goal: "Crear plantillas de respuesta para las cinco preguntas que más hacen tus clientes.",
          text: [
            "Las tiendas en línea reciben las mismas preguntas una y otra vez: ¿Dónde está mi pedido? ¿Puedo devolver esto? ¿Qué talla me conviene? ¿Envían a mi zona? ¿Hay en existencia? Escribe plantillas para cada una, con espacios en blanco para los detalles.",
            "La IA puede redactar plantillas amables a partir de tus políticas reales. Para las preguntas nuevas, resume la pregunta sin el nombre, la dirección ni el número de pedido del cliente y pídele a la IA una respuesta; luego completa tú los detalles.",
            "Si agregas un chatbot a tu tienda, dale solo tus políticas reales y los datos de tus productos, dile a los clientes que es automático y haz que sea fácil hablar con una persona. Revisa qué hace el servicio de chatbot con los datos de los clientes."
          ],
          steps: ["Haz una lista de las cinco preguntas que más hacen los clientes.", "Dale a la IA tus políticas reales y pídele plantillas con [espacios].", "Revisa cada plantilla contra tus políticas.", "Para preguntas nuevas, resúmelas sin datos privados.", "Si usas un chatbot, dale datos reales y una forma de llegar a una persona."],
          words: [["Plantilla de respuesta", "una respuesta lista con espacios en blanco que tú llenas."], ["Chatbot", "un programa automático que responde los mensajes de los clientes."]],
          slides: [
            { title: "Las preguntas de siempre", bullets: ["¿Dónde está mi pedido? ¿Devoluciones?", "Tallas, zona de envío, existencias"] },
            { title: "Plantillas a partir de tus políticas", bullets: ["Amables, con [espacios]", "Revisa que coincidan con lo que de verdad haces"] },
            { title: "Chatbots", bullets: ["Solo políticas y datos reales", "Di que es automático", "Una forma fácil de llegar a una persona"] }
          ],
          tryIt: "Escribe con la IA cinco plantillas de respuesta para las preguntas más comunes de tus clientes, usando solo tus políticas reales, y revisa cada una.",
          youCanNow: "responder las preguntas de los clientes rápido y con exactitud con plantillas redactadas con IA."
        },
        {
          title: "Correos de seguimiento y reseñas, de forma legal",
          minutes: 5,
          goal: "Escribir un correo de seguimiento y una solicitud de reseña que sigan la ley CAN-SPAM y las reglas de reseñas de la FTC.",
          text: [
            "Los correos a compradores anteriores (agradecimientos, avisos de que volvió un producto, ofertas) traen ventas repetidas. Usa la IA para redactar correos cortos y sigue la ley CAN-SPAM de Estados Unidos: remitente y asunto honestos, deja claro que es publicidad cuando lo es, incluye tu dirección física y una forma clara de darse de baja, y respeta las bajas en un plazo de 10 días hábiles. La mayoría de las plataformas de tiendas y de correo agregan los enlaces para darse de baja por ti.",
            "Las reseñas generan confianza. Pídele a cada comprador una reseña honesta, no solo a los contentos. La regla de la FTC prohíbe las reseñas y los testimonios falsos (incluidos los generados con IA de personas que no existen) y prohíbe dar recompensas solo por reseñas positivas. Nunca compres reseñas ni uses la IA para escribirlas.",
            "Usa la IA para leer tus reseñas y encontrar patrones: lo que les encanta a los compradores y de qué se quejan. Resuelve la queja principal y menciona la solución en tus anuncios o correos."
          ],
          steps: ["Redacta con la IA un correo de seguimiento corto para compradores anteriores.", "Revisa lo básico de CAN-SPAM: datos honestos, dirección, forma de darse de baja.", "Redacta una solicitud de reseña honesta para cada comprador.", "Nunca recompenses solo las buenas reseñas ni escribas reseñas con la IA.", "Usa la IA para encontrar patrones en tus reseñas reales."],
          words: [["Venta repetida", "una venta a alguien que ya te compró antes."], ["Darse de baja", "una forma de dejar de recibir correos; cancelar la suscripción."]],
          slides: [
            { title: "Escribe a compradores anteriores", bullets: ["Agradecimientos, productos de vuelta, ofertas", "La IA redacta correos cortos"] },
            { title: "Lo básico de CAN-SPAM", bullets: ["Remitente y asunto honestos", "Tu dirección física", "Bajas respetadas en 10 días hábiles"] },
            { title: "Reseñas", bullets: ["Pide a cada comprador una reseña honesta", "Nada de reseñas falsas o escritas por IA", "Nada de premios solo por buenas reseñas"] }
          ],
          sources: [{ name: "FTC: Guía de cumplimiento de la ley CAN-SPAM para negocios (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FTC: Regla final que prohíbe reseñas y testimonios falsos (comunicado de prensa, en inglés)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Tarea final: escribe un correo de seguimiento y una solicitud de reseña que sigan las reglas; luego arma tu kit de lanzamiento: resumen del nicho, tres anuncios con fotos, políticas, cinco plantillas de respuesta, correo y solicitud de reseña.",
          youCanNow: "manejar una tienda en línea con ayuda de la IA que es honesta con los compradores y sigue las reglas de Estados Unidos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Atiende y crece",
        questions: [
          { q: "No indicas un tiempo de envío. Según la regla de la FTC, necesitas una base razonable para enviar en un plazo de:", options: ["1 año", "1 día", "30 días", "90 días"], answer: 2, why: "Es la \"regla de los 30 días\" de la FTC." },
          { q: "No puedes enviar a tiempo. ¿Qué debes hacer?", options: ["Cancelar sin avisarle", "No decir nada", "Ofrecer solo crédito en la tienda", "Avisarle al comprador, darle una nueva fecha y ofrecerle cancelar con reembolso"], answer: 3, why: "La regla exige un aviso de retraso y la opción de cancelar." },
          { q: "La pregunta de un cliente incluye su dirección. ¿Cómo pides ayuda a la IA?", options: ["Pegando todo", "Resumiendo la pregunta sin la dirección", "Publicándola", "Ignorando al cliente"], answer: 1, why: "Mantén los datos privados fuera de las herramientas de IA." },
          { q: "¿Qué práctica con reseñas está permitida?", options: ["Pedirle a cada comprador una reseña honesta", "Ofrecer un regalo solo por reseñas de 5 estrellas", "Escribir reseñas con la IA", "Comprar reseñas"], answer: 0, why: "Las reseñas honestas de compradores reales están bien." },
          { q: "¿En cuánto tiempo debes respetar una solicitud para darse de baja de tus correos?", options: ["Nunca", "En un año", "En 10 días hábiles", "Solo si lo piden dos veces"], answer: 2, why: "Es lo que exige CAN-SPAM según la guía de la FTC." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Comercio electrónico impulsado por IA",
    questions: [
      { q: "¿Cuál es un mercado en línea?", options: ["Una hoja de cálculo", "Etsy", "Una impresora", "Una cuenta de correo"], answer: 1, why: "Etsy, Amazon y eBay son mercados en línea." },
      { q: "¿Dónde deberías revisar las comisiones de una plataforma?", options: ["Con un cliente", "Adivinando", "En un video viejo", "En las páginas de precios y de ayuda de la propia plataforma"], answer: 3, why: "Las comisiones cambian seguido." },
      { q: "Leer las reseñas de 3 estrellas de la competencia te ayuda a:", options: ["Encontrar sus contraseñas", "Copiar sus fotos", "Escribir reseñas falsas", "Encontrar problemas que podrías resolver"], answer: 3, why: "Las quejas muestran necesidades no cubiertas." },
      { q: "En la investigación de nichos, la IA sirve mejor para:", options: ["Cifras exactas de ventas en vivo", "Ideas y preguntas, con páginas reales como evidencia", "Decisiones finales", "Comprar inventario"], answer: 1, why: "La IA puede inventar números." },
      { q: "Un buen anuncio responde:", options: ["Nada", "Solo el precio", "Qué es, para quién es, tamaño, materiales, tiempo de envío", "La historia de tu vida"], answer: 2, why: "Responde las preguntas del comprador antes de que las haga." },
      { q: "Al pedirle un anuncio a la IA, dale:", options: ["Solo los datos reales y pídele que use solo esos", "Nada, que adivine", "El anuncio de un competidor para copiarlo", "Tus datos bancarios"], answer: 0, why: "Los datos evitan funciones inventadas." },
      { q: "Una palabra clave es:", options: ["Un código de descuento", "Una contraseña", "Una palabra que los compradores escriben en el buscador", "Una foto del producto"], answer: 2, why: "Las palabras clave ayudan a que los compradores encuentren los anuncios." },
      { q: "Según las reglas de la FTC, las afirmaciones sobre productos deben ser:", options: ["Verdaderas y respaldadas por evidencia", "Emocionantes", "Cortas", "Escritas por la IA"], answer: 0, why: "Las reglas de publicidad veraz se aplican a los anuncios." },
      { q: "Para las fotos de productos, una buena preparación es:", options: ["Un cuarto oscuro", "Luz de día y un fondo liso", "Un fondo lleno de cosas", "Solo una foto borrosa"], answer: 1, why: "Las fotos claras venden." },
      { q: "Una foto del tamaño muestra:", options: ["El precio", "Solo el logotipo", "La caja de envío", "El producto junto a una mano o un objeto común"], answer: 3, why: "Ayuda a los compradores a entender el tamaño." },
      { q: "¿Qué edición de imagen con IA está bien?", options: ["Quitar el fondo", "Cambiar el color del producto a uno que no vendes", "Agregar funciones que no tiene", "Hacer que se vea más grande"], answer: 0, why: "Limpiar el fondo no engaña." },
      { q: "Si indicas un tiempo de envío, necesitas:", options: ["La aprobación de la IA", "Nada", "El respaldo de una celebridad", "Una base razonable para creer que lo puedes cumplir"], answer: 3, why: "La regla de la FTC exige una base razonable." },
      { q: "Un aviso de retraso debe ofrecerle al comprador:", options: ["Un precio más alto", "Solo crédito en la tienda", "La opción de cancelar con un reembolso rápido", "Nada"], answer: 2, why: "Los compradores pueden elegir cancelar." },
      { q: "Los reembolsos de pedidos con tarjeta o efectivo después de una cancelación se deben hacer dentro de:", options: ["Seis meses", "Siete días hábiles", "Un año", "Nunca"], answer: 1, why: "La guía de la FTC dice siete días hábiles." },
      { q: "Según la regla, ¿el crédito en la tienda puede reemplazar un reembolso obligatorio?", options: ["Solo los fines de semana", "Sí, siempre", "Solo en pedidos pequeños", "No"], answer: 3, why: "La guía dice que el crédito en la tienda no puede reemplazar un reembolso obligatorio." },
      { q: "Las plantillas de respuesta deben basarse en:", options: ["Las políticas de la competencia", "Lo que imagine la IA", "Tus políticas reales", "Nada"], answer: 2, why: "Las plantillas deben coincidir con lo que de verdad haces." },
      { q: "El chatbot de una tienda debe:", options: ["Decir que es automático y ofrecer una forma de hablar con una persona", "Hacerse pasar por una persona", "Prometer cualquier reembolso", "No tener datos"], answer: 0, why: "La honestidad y la opción de hablar con una persona generan confianza." },
      { q: "Los correos de marketing deben incluir:", options: ["La contraseña del comprador", "Tu dirección física y una forma de darse de baja", "Una fecha límite falsa", "Publicidad escondida"], answer: 1, why: "Eso es lo básico de CAN-SPAM." },
      { q: "La regla de la FTC contra reseñas falsas prohíbe:", options: ["Pedir reseñas honestas", "Reseñas generadas con IA de personas que no existen", "Responder reseñas", "Mostrar reseñas reales"], answer: 1, why: "Las reseñas falsas, incluidas las hechas con IA, están prohibidas." },
      { q: "Usar la IA con tus reseñas reales te puede ayudar a:", options: ["Encontrar patrones en lo que les encanta y lo que les molesta a los compradores", "Borrar las malas reseñas", "Escribir más reseñas", "Cambiar las calificaciones"], answer: 0, why: "Los patrones muestran qué arreglar." }
    ]
  }
};

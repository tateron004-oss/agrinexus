"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-small-business.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-small-business-es",
  lang: "es",
  translationOf: "underserved-ai-small-business",
  category: "Undeserved Community",
  name: "IA para emprender y para pequeños negocios",
  skills: "Convertir una habilidad en una oferta de negocio, Poner precios con los costos reales, Encontrar ayuda gratuita para negocios, Escribir una descripción del negocio y una publicación, Llevar registros sencillos de dinero, Responder a los clientes",
  outcome: "usar un asistente de IA gratuito para planear un pequeño negocio en una página: una oferta clara, un precio que cubra tus costos, una descripción corta del negocio y una publicación, un registro sencillo de dinero, y un mentor o asesor gratuito con quien hablar después.",
  about: [
    "Mucha gente ya tiene un pequeño negocio: hacer trenzas, preparar comida para eventos, limpiar casas, cuidar jardines, dar clases, arreglar teléfonos o vender artesanías. Otras personas tienen una habilidad y quieren empezar. Este curso es para ambas.",
    "Vas a usar un asistente de IA gratuito para convertir tu habilidad en una oferta clara, calcular un precio que cubra tus costos, encontrar ayuda gratuita para negocios, escribir una descripción corta y una publicación para redes sociales, llevar registros sencillos de dinero y responder bien a los clientes.",
    "La IA te ayuda a pensar y a escribir. No reemplaza un consejo real sobre impuestos, licencias o leyes. Cada lección te lleva a ayuda oficial y gratuita. Las lecciones duran unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un plan de una página para un pequeño negocio que tienes o quieres empezar: tu oferta y para quién es, un precio que cubra tus costos (con tus cuentas revisadas), una descripción del negocio de tres frases, una publicación para redes sociales y el nombre y contacto de un asesor de negocios gratuito cerca de ti (SCORE, un Small Business Development Center o un Women's Business Center).",
  chapters: [
    {
      name: "Capítulo 1: De una habilidad a un negocio",
      lessons: [
        {
          title: "Convertir una habilidad en una oferta clara",
          minutes: 5,
          goal: "Escribir una oferta de una frase que diga qué vendes, a quién y por qué te deben elegir.",
          text: [
            "Un negocio empieza con algo que la gente necesita y por lo que pagaría. Piensa en lo que los vecinos ya te piden: cocinar para fiestas, hacer trenzas, arreglar cosas, cuidar niños, cortar el pasto.",
            "Una oferta clara dice qué haces, para quién es y qué te hace diferente. Por ejemplo: \"Comida preparada los fines de semana para familias trabajadoras y ocupadas del lado este, con sazón casera a un precio justo.\"",
            "Pide ayuda a la IA: \"Cocino muy bien comida caribeña y la gente me pide que prepare comida para sus fiestas. Ayúdame a escribir tres ofertas de una frase para un pequeño negocio de comida para eventos, cada una para un tipo distinto de cliente.\" Luego elige la que más suene a ti."
          ],
          steps: ["Haz una lista de lo que la gente ya te pide.", "Elige una habilidad por la que la gente pagaría.", "Pide a la IA tres ofertas de una frase para distintos clientes.", "Elige y edita la que mejor te quede."],
          words: [["Oferta", "una frase corta de lo que vendes y para quién es."], ["Cliente", "una persona que paga por lo que vendes."]],
          slides: [
            { title: "Empieza con lo que la gente te pide", bullets: ["Cocinar, hacer trenzas, limpiar, reparar", "Cuidar niños, dar clases, cuidar jardines"] },
            { title: "Una oferta clara dice", bullets: ["Qué haces", "Para quién es", "Qué te hace diferente"] },
            { title: "Pide opciones a la IA", bullets: ["Tres ofertas para tres tipos de clientes", "Elige la que suene a ti"] }
          ],
          tryIt: "Pide a un asistente de IA que escriba tres ofertas de una frase para una habilidad que tienes. Elige una y cámbiala para que suene a ti.",
          youCanNow: "convertir una habilidad en una oferta de negocio clara de una frase."
        },
        {
          title: "Poner precios para no perder dinero",
          minutes: 6,
          goal: "Calcular un precio que cubra tus costos y te pague tu tiempo.",
          text: [
            "Muchos pequeños negocios cobran muy poco. Para poner un precio justo, suma tus costos: materiales, gasolina o pasaje, cualquier cuota y tu tiempo.",
            "Pide a la IA que haga las cuentas contigo, con tus propios números: \"Preparo la comida de una fiesta de 20 personas. La comida cuesta $120, los recipientes $15, la gasolina $10 y me toma 8 horas. Quiero ganar $18 por hora. ¿Qué precio lo cubre?\" Luego revisa tú las cuentas con una calculadora.",
            "La IA no sabe los precios locales. Mira lo que cobran otros cerca de ti y pregunta a un asesor de negocios gratuito. Los impuestos y las licencias también son costos reales: revisa con tu ciudad o condado, tu estado y el IRS (el servicio de impuestos de Estados Unidos, irs.gov) qué te aplica."
          ],
          steps: ["Haz una lista de cada costo de un trabajo: materiales, transporte, cuotas.", "Decide cuánto quieres ganar por hora y cuenta tus horas.", "Pide a la IA que lo sume con tus números.", "Revisa tú las cuentas con una calculadora.", "Compara con los precios locales y pregunta a un asesor."],
          words: [["Costo", "el dinero que gastas para hacer el trabajo."], ["Ganancia", "el dinero que queda después de pagar todos tus costos."]],
          slides: [
            { title: "Muchos pequeños negocios cobran muy poco", bullets: ["Cuenta cada costo", "Cuenta tu tiempo"] },
            { title: "Costos que hay que sumar", bullets: ["Materiales", "Gasolina o pasaje", "Cuotas", "Tus horas"] },
            { title: "Usa la IA y luego revisa", bullets: ["Dale tus números reales", "Revisa las cuentas con una calculadora", "Compara precios locales y pregunta a un asesor"] }
          ],
          sources: [{ name: "IRS: Pequeños negocios y trabajadores por cuenta propia", url: "https://www.irs.gov/businesses/small-businesses-self-employed" }],
          tryIt: "Elige un trabajo que haría tu negocio. Haz la lista de costos y horas, pide a un asistente de IA que calcule un precio que los cubra y luego revisa tú las cuentas.",
          youCanNow: "poner un precio que cubra tus costos y tu tiempo, y revisar tú las cuentas."
        },
        {
          title: "Encontrar ayuda gratuita para negocios",
          minutes: 4,
          goal: "Encontrar un asesor de negocios gratuito cerca de ti.",
          text: [
            "No tienes que resolverlo todo tú solo. La Administración de Pequeños Negocios de Estados Unidos (SBA) trabaja con organizaciones aliadas que ayudan a la gente a empezar y hacer crecer negocios.",
            "SCORE es una red de mentores de negocios voluntarios que dan consejos sin costo. Los Small Business Development Centers (SBDC, centros de desarrollo de pequeños negocios) ofrecen asesoría y capacitación. Los Women's Business Centers (centros de negocios para mujeres) dan ayuda gratis o a bajo costo a mujeres que empiezan o hacen crecer un negocio. Los Veterans Business Outreach Centers atienden a veteranos y familias de militares.",
            "Estos asesores te pueden ayudar con licencias, impuestos, préstamos y planes para tu zona. Lleva tus preguntas y tu plan de una página."
          ],
          steps: ["Abre la página de organizaciones aliadas de la SBA.", "Busca SCORE, un SBDC o un Women's Business Center cerca de ti.", "Anota el nombre y cómo contactarlos.", "Escribe tres preguntas, como qué licencias necesitas."],
          words: [["Mentor", "una persona con experiencia que te da consejos."], ["SBA", "la Administración de Pequeños Negocios de Estados Unidos, la agencia federal que ayuda a los pequeños negocios."]],
          sources: [{ name: "SBA: Organizaciones aliadas", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          slides: [
            { title: "No estás solo", bullets: ["La SBA trabaja con ayudantes gratuitos y de bajo costo"] },
            { title: "Quién te puede ayudar", bullets: ["SCORE: mentores voluntarios sin costo", "SBDC: asesoría y capacitación", "Women's Business Centers: gratis o a bajo costo"] },
            { title: "Llega preparado", bullets: ["Lleva tu plan de una página", "Pregunta por licencias, impuestos y préstamos de tu zona"] }
          ],
          tryIt: "Encuentra un asesor de negocios gratuito cerca de ti en la página de organizaciones aliadas de la SBA. Anota su nombre, su contacto y tres preguntas para hacerle.",
          youCanNow: "encontrar ayuda oficial y gratuita para negocios cerca de ti."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: De una habilidad a un negocio",
        questions: [
          { q: "¿Qué dice una oferta clara?", options: ["La historia de tu vida", "Qué haces, para quién es y qué te hace diferente", "Solo tu precio", "La dirección de tu casa"], answer: 1, why: "Esas tres partes les dicen a los clientes por qué elegirte." },
          { q: "¿Qué debes contar al poner un precio?", options: ["Solo los materiales", "Solo tu tiempo", "Materiales, transporte, cuotas y tu tiempo", "Nada; adivina"], answer: 2, why: "Hay que cubrir todos los costos, incluido tu tiempo." },
          { q: "La IA calcula un precio por ti. ¿Qué sigue?", options: ["Revisar tú las cuentas y comparar con los precios locales", "Usarlo sin revisar", "Duplicarlo", "No cobrar nunca"], answer: 0, why: "La IA se puede equivocar en las cuentas y no sabe los precios locales." },
          { q: "SCORE ofrece:", options: ["Solo préstamos de paga", "Declaración de impuestos", "Licencias", "Mentores de negocios voluntarios sin costo"], answer: 3, why: "La SBA describe a SCORE como mentores voluntarios que dan consejos sin costo." },
          { q: "¿Dónde debes revisar qué licencias necesitas?", options: ["Solo con la IA", "Con tu ciudad o condado, tu estado o un asesor de negocios gratuito", "En una publicación de redes sociales", "Con un amigo de otro estado"], answer: 1, why: "Las licencias dependen de dónde estás; las fuentes oficiales y los asesores lo saben." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manejar y hacer crecer el negocio",
      lessons: [
        {
          title: "Escribir la descripción de tu negocio y una publicación",
          minutes: 5,
          goal: "Escribir una descripción del negocio de tres frases y una publicación para redes sociales.",
          text: [
            "Una descripción corta le dice a la gente quién eres, qué haces y cómo contactarte. Puedes usarla en un volante, una tarjeta de presentación o una página gratuita del negocio.",
            "Pide a la IA: \"Escribe una descripción cálida de tres frases para mi negocio de comida preparada los fines de semana para familias ocupadas. Luego escribe una publicación corta de Facebook para anunciar mi primer menú.\" Pide una versión en otro idioma si tus clientes la necesitan.",
            "Edítala para que suene a ti. Promete solo lo que puedes cumplir. Usa un teléfono o correo del negocio que estés dispuesto a compartir en público, no la dirección de tu casa."
          ],
          steps: ["Pide a la IA una descripción de tres frases usando tu oferta.", "Pide una publicación corta para redes sociales.", "Edita las dos para que suenen a ti.", "Revisa que cada promesa sea verdad y que el contacto se pueda compartir sin riesgo."],
          words: [["Publicación en redes sociales", "un mensaje corto con palabras y tal vez una imagen, que se comparte en aplicaciones como Facebook o Instagram."]],
          slides: [
            { title: "Una descripción corta", bullets: ["Quién eres", "Qué haces", "Cómo contactarte"] },
            { title: "Pide las dos a la IA", bullets: ["Descripción de tres frases", "Una publicación corta", "Otro idioma si hace falta"] },
            { title: "Antes de compartir", bullets: ["Que suene a ti", "Promete solo lo que puedes cumplir", "Sin la dirección de tu casa"] }
          ],
          tryIt: "Pide a un asistente de IA que escriba una descripción de tres frases de tu negocio y una publicación corta para redes sociales. Edita las dos para que suenen a ti.",
          youCanNow: "escribir una descripción corta del negocio y una publicación que suenen a ti."
        },
        {
          title: "Llevar registros sencillos de dinero",
          minutes: 5,
          goal: "Armar una hoja gratuita y sencilla para anotar el dinero que entra y el que sale.",
          text: [
            "Llevar registros te ayuda a ver si estás ganando dinero, y los vas a necesitar en la temporada de impuestos. Puedes empezar con una hoja de cálculo gratuita como Google Sheets o Excel en la web.",
            "Pide a la IA: \"Ayúdame a armar una hoja sencilla para mi pequeño negocio con columnas de fecha, qué fue, dinero que entra, dinero que sale y notas. Muéstrame cómo sumar cada columna.\" Luego hazla tú.",
            "Anota cada venta y cada gasto el mismo día, y guarda los recibos (una foto sirve). Pregunta a un asesor de negocios gratuito o a un profesional de impuestos qué registros necesitas para los impuestos. No escribas números de cuenta bancaria en la IA."
          ],
          steps: ["Abre Google Sheets o Excel en la web.", "Haz columnas: fecha, qué fue, dinero que entra, dinero que sale, notas.", "Pregunta a la IA cómo sumar cada columna.", "Anota cada venta y cada gasto el mismo día.", "Guarda una foto de cada recibo."],
          words: [["Hoja de cálculo", "una cuadrícula de filas y columnas para números y listas."], ["Gasto", "dinero que gastas para el negocio."], ["Recibo", "una prueba de una compra o de un pago."]],
          slides: [
            { title: "Por qué llevar registros", bullets: ["Ver si estás ganando dinero", "Los necesitas para los impuestos"] },
            { title: "Una hoja sencilla", bullets: ["Fecha, qué fue", "Dinero que entra, dinero que sale", "Notas"] },
            { title: "Buenos hábitos", bullets: ["Anótalo el mismo día", "Foto de cada recibo", "Nada de números de banco en la IA"] }
          ],
          tryIt: "Haz una hoja sencilla en Google Sheets o Excel en la web con las cinco columnas. Agrega tres ventas y dos gastos de práctica, y suma el dinero que entra y el que sale.",
          youCanNow: "llevar registros sencillos de dinero de un pequeño negocio en una hoja de cálculo gratuita."
        },
        {
          title: "Responder a los clientes y juntar todo",
          minutes: 5,
          goal: "Escribir respuestas amables a los clientes y terminar tu plan de negocio de una página.",
          text: [
            "Un buen servicio hace que los clientes regresen. La IA te puede ayudar a escribir respuestas amables rápido: confirmar un pedido, decir que ya no tienes lugar o atender una queja con calma.",
            "Para una queja, pide: \"Escribe una respuesta tranquila y amable para un cliente que dice que la comida llegó tarde. Pide disculpas, explica que lo vamos a corregir y ofrece un pequeño descuento la próxima vez.\" Léela y asegúrate de que puedes pagar lo que ofreces.",
            "Ahora junta tu trabajo en una página: tu oferta, tu precio y tus costos, tu descripción y tu publicación, una nota sobre tus registros y el asesor gratuito que encontraste. Esa página es el comienzo de tu plan de negocio."
          ],
          steps: ["Pide a la IA una respuesta amable para un mensaje común de un cliente.", "Revisa cada promesa antes de enviarla.", "Pon en una página tu oferta, precio, descripción, publicación, nota de registros y asesor.", "Lleva la página a tu cita con el asesor gratuito."],
          words: [["Plan de negocio", "un plan por escrito de lo que vende tu negocio, a quién y cómo va a ganar dinero."]],
          slides: [
            { title: "Un buen servicio hace que regresen", bullets: ["Confirma pedidos", "Di con amabilidad \"ya no tengo lugar\"", "Atiende las quejas con calma"] },
            { title: "Respuestas a quejas", bullets: ["Pide disculpas", "Di cómo lo vas a corregir", "Ofrece solo lo que puedes pagar"] },
            { title: "Tu plan de una página", bullets: ["Oferta y precio", "Descripción y publicación", "Registros y tu asesor gratuito"] }
          ],
          tryIt: "Tarea final: haz un plan de una página con tu oferta, un precio revisado que cubra tus costos, una descripción de tres frases, una publicación para redes sociales y el contacto de un asesor de negocios gratuito cerca de ti.",
          youCanNow: "planear, ponerle precio y promover un pequeño negocio, y saber dónde conseguir ayuda experta gratuita."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Manejar y hacer crecer el negocio",
        questions: [
          { q: "¿Qué debe incluir una descripción corta del negocio?", options: ["Tu número de Seguro Social", "Quién eres, qué haces y cómo contactarte", "La dirección de tu casa", "El saldo de tu banco"], answer: 1, why: "Eso les dice a los clientes lo que necesitan saber." },
          { q: "¿Qué información de contacto es más segura para compartir en público?", options: ["La dirección de tu casa", "Tu cuenta de banco", "Un teléfono o correo del negocio que estés dispuesto a compartir", "Tu número de identificación"], answer: 2, why: "Los datos privados se quedan en privado." },
          { q: "¿Qué columnas van en una hoja sencilla de dinero?", options: ["Fecha, qué fue, dinero que entra, dinero que sale, notas", "Solo tu nombre", "Tu contraseña", "Los números de Seguro Social de los clientes"], answer: 0, why: "Esas columnas registran el dinero que entra y sale." },
          { q: "¿Cuándo debes anotar una venta?", options: ["Al final del año", "Nunca", "Solo las ventas grandes", "El mismo día"], answer: 3, why: "Los registros del mismo día son exactos." },
          { q: "Un cliente se queja de que la comida llegó tarde. Una buena respuesta:", options: ["Culpa al cliente", "Pide disculpas, dice cómo lo vas a corregir y ofrece solo lo que puedes pagar", "Lo ignora", "Promete comida gratis para siempre"], answer: 1, why: "Las respuestas tranquilas y honestas conservan a los clientes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para emprender y para pequeños negocios",
    questions: [
      { q: "Un buen punto de partida para una idea de negocio es:", options: ["Lo que la gente ya te pide que hagas", "Lo que está de moda en internet", "Una idea cualquiera de la IA", "Copiar a una empresa grande"], answer: 0, why: "Lo que la gente ya te pide muestra que hay demanda real." },
      { q: "Un cliente es:", options: ["Tu proveedor", "Una persona que paga por lo que vendes", "Tu mentor", "Un banco"], answer: 1, why: "Los clientes te compran." },
      { q: "¿Por qué pedirle a la IA tres ofertas en lugar de una?", options: ["Cuesta menos", "Es obligatorio", "Para elegir la que mejor te quede", "Para confundir a los clientes"], answer: 2, why: "Tener opciones te ayuda a encontrar la mejor." },
      { q: "¿Qué error de precios cometen muchos pequeños negocios?", options: ["Cobrar demasiado", "No cobrar nunca", "Cobrar en otras monedas", "Cobrar muy poco"], answer: 3, why: "Olvidar los costos y el tiempo lleva a precios bajos." },
      { q: "La ganancia es:", options: ["El dinero que queda después de pagar todos tus costos", "Todo el dinero que entra", "Tus materiales", "Un préstamo"], answer: 0, why: "La ganancia es lo que sobra." },
      { q: "Cuando la IA calcula tu precio, debes:", options: ["Confiar por completo", "Revisar tú las cuentas", "Ignorar tus costos", "Preguntarle a un desconocido"], answer: 1, why: "La IA se puede equivocar en las cuentas." },
      { q: "¿Dónde puedes aprender sobre impuestos de negocios?", options: ["En un anuncio emergente", "En un videojuego", "En irs.gov, con un asesor gratuito o con un profesional de impuestos", "Solo con la IA"], answer: 2, why: "Las fuentes oficiales y los profesionales conocen las reglas de impuestos." },
      { q: "La SBA es:", options: ["Un banco", "Una aplicación de redes sociales", "Un club privado", "La Administración de Pequeños Negocios de Estados Unidos"], answer: 3, why: "Es la agencia federal que ayuda a los pequeños negocios." },
      { q: "Los Small Business Development Centers ofrecen:", options: ["Asesoría y capacitación", "Inventario gratis", "Edificios gratis", "Anuncios de paga"], answer: 0, why: "Los SBDC ayudan a la gente a empezar y hacer crecer negocios." },
      { q: "Los Women's Business Centers ofrecen servicios que son:", options: ["Siempre caros", "Gratis o a bajo costo", "Solo para empresas grandes", "Solo en línea"], answer: 1, why: "La SBA los describe como gratis o a bajo costo." },
      { q: "¿Qué debes llevar a una cita con un asesor gratuito?", options: ["Nada", "El NIP de tu banco", "Tu plan de una página y tus preguntas", "Tus contraseñas"], answer: 2, why: "Un plan y preguntas hacen útil la cita." },
      { q: "La descripción de un negocio debe:", options: ["Prometer cosas que no puedes hacer", "Incluir la dirección de tu casa", "Tener diez páginas", "Sonar a ti y ser verdad"], answer: 3, why: "Lo honesto y personal genera confianza." },
      { q: "Muchos de tus clientes hablan inglés. Puedes:", options: ["Pedir a la IA una versión en inglés de tu publicación", "Publicar solo en español", "No publicar nada", "Usar solo imágenes"], answer: 0, why: "Un segundo idioma llega a tus clientes." },
      { q: "Antes de compartir una publicación, revisa que:", options: ["Sea lo más larga posible", "Cada promesa sea verdad y el contacto sea seguro", "Tenga tu número de Seguro Social", "Mencione a cada competidor"], answer: 1, why: "Las promesas deben ser reales y el contacto seguro." },
      { q: "Una hoja de cálculo es:", options: ["Una sábana", "Un formulario de impuestos", "Una cuadrícula de filas y columnas", "Una licencia de negocio"], answer: 2, why: "Las hojas de cálculo ordenan números y listas." },
      { q: "¿Qué herramientas gratuitas pueden guardar tus registros de dinero?", options: ["Solo un despacho contable de paga", "Un mensaje de texto", "Un álbum de fotos", "Google Sheets o Excel en la web"], answer: 3, why: "Las dos son hojas de cálculo gratuitas." },
      { q: "¿Qué debes guardar de cada gasto?", options: ["Un recibo; una foto sirve", "Nada", "Un recuerdo", "Lo que calcule la IA"], answer: 0, why: "Los recibos prueban lo que gastaste." },
      { q: "¿Qué nunca debes escribir en la IA?", options: ["\"Ayúdame a armar las columnas\"", "Tu número de cuenta bancaria", "\"Escribe una publicación amable\"", "El nombre de tu negocio"], answer: 1, why: "Los números de banco son privados." },
      { q: "Al ofrecer un descuento después de una queja, asegúrate de que:", options: ["Sea lo más grande posible", "Prometas servicio gratis para siempre", "Lo puedas pagar", "Nunca pidas disculpas"], answer: 2, why: "Ofrece solo lo que tu negocio puede pagar." },
      { q: "Tu plan de una página incluye:", options: ["Solo tu logotipo", "La dirección de tu casa", "Tus contraseñas", "Oferta, precio, descripción, publicación, registros y un asesor gratuito"], answer: 3, why: "Esas partes forman la tarea final." }
    ]
  }
};

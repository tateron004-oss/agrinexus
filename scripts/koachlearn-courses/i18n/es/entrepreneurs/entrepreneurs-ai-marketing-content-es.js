"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-ai-marketing-content). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "entrepreneurs-ai-marketing-content-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-marketing-content",
  category: "Entrepreneurs",
  name: "Marketing y creación de contenido con IA",
  skills: "Describir a tu cliente ideal, Escribir una oferta clara, Planear un mes de contenido, Hacer publicaciones e imágenes con IA, Escribir un correo de marketing que cumpla las reglas",
  outcome: "describir a tu cliente ideal, escribir una oferta clara y usar la IA para planear y crear un mes de publicaciones en redes y un correo de marketing que sean honestos y cumplan las reglas de publicidad y de correo electrónico de EE. UU.",
  about: [
    "Este curso es para dueños de negocios que saben que deberían hacer marketing pero no tienen el tiempo, el dinero para una agencia o las ideas. La IA puede ayudar con las tres cosas si le das la dirección correcta.",
    "Vas a describir al cliente que quieres, escribir una oferta que le hable, planear un mes de contenido, hacer publicaciones e imágenes con herramientas gratuitas como ChatGPT, Copilot, Gemini y Canva, y escribir un correo de marketing. También vas a aprender las reglas básicas de EE. UU.: los anuncios deben ser veraces, las recomendaciones pagadas se deben avisar, las reseñas falsas están prohibidas y los correos de marketing deben cumplir la Ley CAN-SPAM.",
    "Cada lección dura unos cinco minutos y termina con una tarea para tu propio negocio. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso explica las reglas con palabras sencillas; no es asesoría legal."
  ],
  finalTask: "Crea un paquete de marketing de un mes para tu negocio: un perfil de cliente ideal de un párrafo, una oferta de una oración, un calendario de contenido de 12 publicaciones, tres publicaciones terminadas con imágenes y un correo de marketing con un asunto honesto, tu dirección física y una línea para darse de baja que funcione.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios en Estados Unidos que saben que deben hacer marketing, pero tienen poco tiempo, ningún presupuesto para una agencia y pocas ideas, como panaderos, personal de limpieza, salones de belleza, oficios y vendedores en línea.",
    startingPoint: "Publican en redes sociales de vez en cuando y quizá tienen una lista de correos de clientes. Pocos tienen por escrito un perfil de cliente, una oferta o un plan de contenido, y muchos no conocen lo básico de las reglas de la FTC y de la Ley CAN-SPAM.",
    gap: "Las publicaciones al azar llegan a las personas equivocadas, y la IA puede producir con facilidad afirmaciones falsas, resultados que parecen falsos o correos que rompen las reglas de Estados Unidos. Necesitan dirigir el marketing a un cliente real, planear un mes de contenido honesto y enviar correos que cumplan las reglas, para que el marketing traiga clientes sin problemas legales ni de confianza.",
    constraints: [
      "Palabras sencillas; las reglas se explican de forma simple y no son asesoría legal",
      "Dispositivos: un teléfono o una computadora con un asistente de IA gratuito y Canva",
      "Tiempo: unos cinco minutos por lección más hacer publicaciones para el negocio propio",
      "Los anuncios deben ser veraces, las recomendaciones pagadas deben decirse, las reseñas falsas están prohibidas y los correos deben cumplir la Ley CAN-SPAM",
      "Las historias y las fotos de clientes se usan solo con su permiso"
    ],
    prerequisites: "\"Introducción a la IA para emprendedores\". \"Herramientas de IA que todo emprendedor debe conocer\" ayuda con Canva."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con la IA y al menos una conversación real con un cliente o un registro de ventas", action: "escribir un perfil de un párrafo de tu cliente ideal", standard: "con cada suposición revisada contra personas reales" },
    { id: "O2", condition: "Con tu perfil de cliente", action: "escribir una oferta de una oración que diga para quién es, qué recibe y por qué importa", standard: "con cada afirmación cierta y posible de probar" },
    { id: "O3", condition: "Con tu oferta", action: "crear con IA un calendario de contenido de 12 publicaciones para un mes", standard: "con una mezcla de tipos de publicaciones en una o dos plataformas que usan tus clientes, guardado con fechas" },
    { id: "O4", condition: "Con tres ideas del calendario", action: "hacer publicaciones terminadas con textos de la IA editados e imágenes de Canva", standard: "usando fotos reales cuando se pueda y sin falsear nunca los resultados" },
    { id: "O5", condition: "Al pedir reseñas o trabajar con promotores pagados", action: "escribir una solicitud de reseñas y avisos que cumplan las reglas de la FTC", standard: "pidiéndola a todos los clientes, sin dar premios por buenas calificaciones y diciendo cada relación pagada" },
    { id: "O6", condition: "Al usar la IA para hacer el borrador de un correo de marketing", action: "revisar el correo contra lo básico de la Ley CAN-SPAM", standard: "con un asunto honesto, tu dirección física y una línea para darse de baja que funcione" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Saber a quién le hablas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Describir a tu cliente ideal",
          minutes: 5,
          goal: "Escribir un perfil de un párrafo del cliente que más quieres.",
          text: [
            "Hacer marketing para \"todo el mundo\" no llega a nadie. Tu cliente ideal es la persona que necesita lo que vendes, lo puede pagar y es fácil de alcanzar para ti. El cliente ideal de una pastelería casera podría ser \"padres ocupados a menos de 10 millas que piden pasteles de cumpleaños de dos a cuatro veces al año\".",
            "La IA te puede ayudar a pensarlo. Dile qué vendes y quién te compra ahora, y luego pídele: \"Ayúdame a describir a mi cliente ideal: su situación, su mayor problema, lo que le preocupa antes de comprar y dónde pasa el tiempo en internet.\"",
            "La IA adivina a partir de patrones generales. Compara sus suposiciones con clientes reales: mira quién te ha comprado, lee sus mensajes y pregunta a tres clientes por qué te eligieron."
          ],
          steps: ["Escribe qué vendes y quién te ha comprado hasta ahora.", "Pide a la IA que te ayude a describir la situación, el problema, las preocupaciones y dónde pasa el tiempo tu cliente ideal.", "Revisa las suposiciones con tres clientes reales o con tus registros de ventas.", "Escribe un perfil de un párrafo."],
          words: [["Cliente ideal", "la persona que más necesita lo que vendes, lo puede pagar y es fácil de alcanzar."], ["Perfil", "una descripción corta de un tipo de cliente."]],
          slides: [
            { title: "\"Todo el mundo\" no es un cliente", bullets: ["Necesita lo que vendes", "Lo puede pagar", "Es fácil de alcanzar para ti"] },
            { title: "Pide a la IA que ayude a describir", bullets: ["Su situación y su mayor problema", "Lo que le preocupa antes de comprar", "Dónde pasa el tiempo en internet"] },
            { title: "Revisa con personas reales", bullets: ["Mira quién ya te compró", "Pregunta a tres clientes por qué te eligieron", "Luego escribe tu perfil"] }
          ],
          tryIt: "Usa un asistente de IA para hacer el borrador del perfil de tu cliente ideal y luego compáralo con al menos una conversación real con un cliente o con tus registros de ventas. Guarda el párrafo final.",
          youCanNow: "describir al cliente para el que es tu marketing, revisado con personas reales.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un perfil de cliente ideal?", options: ["Una descripción corta del cliente al que más quieres llegar", "Una lista de todas las personas de tu ciudad", "La lista de clientes de tu competencia", "Los datos de contacto privados de un cliente"], answer: 0, why: "Un perfil describe a la persona a la que apunta tu marketing." },
            { objective: "O1", q: "La IA dice que tus clientes usan sobre todo una app, pero tus registros de ventas muestran otra cosa. ¿Qué haces?", options: ["Confiar en la IA", "Seguir lo que muestran tus registros reales", "Usar todas las apps", "Dejar de hacer marketing"], answer: 1, why: "Los clientes y los registros reales valen más que las suposiciones de la IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir una oferta clara y honesta",
          minutes: 5,
          goal: "Escribir una oferta de una oración que diga para quién es, qué recibe y por qué importa.",
          text: [
            "Una oferta responde rápido tres preguntas: ¿Para quién es? ¿Qué recibe? ¿Por qué le debería importar? Ejemplo: \"Padres ocupados de Decatur: pasteles de cumpleaños personalizados entregados en su puerta, para que la fiesta sea una preocupación menos.\"",
            "Dale a la IA el perfil de tu cliente y pídele: \"Escribe cinco ofertas de una oración para este cliente. Palabras sencillas, sin exagerar.\" Elige la mejor y ajústala con tu propia voz.",
            "Mantenla honesta. En EE. UU., la FTC (la Comisión Federal de Comercio) dice que los anuncios deben ser veraces, no engañosos y estar respaldados por pruebas. No digas \"el mejor del pueblo\", \"resultados garantizados\" ni \"con IA\" a menos que sea cierto y lo puedas demostrar."
          ],
          steps: ["Pega el perfil de tu cliente en un asistente de IA.", "Pide cinco ofertas de una oración con palabras sencillas.", "Elige una y ajústala para que suene a ti.", "Quita cualquier afirmación que no puedas demostrar."],
          words: [["Oferta", "lo que vendes, para quién es y por qué importa, dicho de forma sencilla."], ["Afirmación", "algo que tu anuncio dice que es cierto."]],
          slides: [
            { title: "Una oferta responde tres preguntas", bullets: ["¿Para quién es?", "¿Qué recibe?", "¿Por qué le debería importar?"] },
            { title: "Deja que la IA te dé opciones", bullets: ["Pega el perfil de tu cliente", "Pide cinco ofertas de una oración", "Elige una y ajústala con tu voz"] },
            { title: "Mantenla honesta", bullets: ["FTC: los anuncios deben ser veraces y no engañosos", "Las afirmaciones necesitan pruebas", "Nada de \"garantizado\" o \"el mejor\" sin poder demostrarlo"] }
          ],
          sources: [{ name: "FTC: Lo básico de la publicidad y el marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Pide a la IA cinco ofertas basadas en el perfil de tu cliente, elige una, ajústala y revisa que cada afirmación sea cierta y demostrable.",
          youCanNow: "escribir una oferta corta y honesta que le hable a tu cliente ideal.",
          quickCheck: [
            { objective: "O2", q: "¿Cómo debe ser cada afirmación de tu oferta?", options: ["Lo más grande posible", "Copiada de la competencia", "Cierta y posible de probar", "Escrita solo por la IA"], answer: 2, why: "Las reglas de la FTC exigen afirmaciones veraces y con pruebas." },
            { objective: "O2", q: "La IA escribe \"el servicio más rápido de la ciudad\", pero no tienes pruebas. ¿Qué haces?", options: ["Dejarlo", "Agregar un signo de admiración", "Ponerlo en letra pequeña", "Quitarlo o cambiarlo por algo que puedas probar"], answer: 3, why: "Las afirmaciones que no puedes respaldar no deben ir en tu oferta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear un mes de contenido",
          minutes: 5,
          goal: "Usar la IA para armar un calendario de contenido de 12 publicaciones para un mes.",
          text: [
            "Publicar tres veces por semana durante un mes son 12 publicaciones. Una mezcla sencilla lo mantiene interesante: enseñar algo útil, mostrar tu trabajo o a tu equipo, compartir la historia de un cliente (con permiso) y hacer tu oferta.",
            "Pide a la IA: \"Haz un calendario de contenido de 12 publicaciones para [negocio] dirigido a [cliente]. Mezcla: 4 consejos útiles, 3 de detrás de cámaras, 2 historias de clientes, 3 publicaciones con la oferta. Dale a cada una una fecha, una idea de una línea y la plataforma.\"",
            "Elige las plataformas donde tu cliente ya pasa el tiempo (según tu perfil). Es mejor publicar bien en una o dos plataformas que mal en cinco."
          ],
          steps: ["Elige una o dos plataformas donde pasa el tiempo tu cliente.", "Pide a la IA un calendario de 12 publicaciones con una mezcla de tipos.", "Corrige las ideas que no vayan con tu negocio.", "Pon el calendario en una hoja de cálculo o un documento con fechas."],
          words: [["Calendario de contenido", "un plan que dice qué vas a publicar y cuándo."], ["Plataforma", "un sitio o una app de redes sociales, como Facebook, Instagram, TikTok o LinkedIn."]],
          slides: [
            { title: "12 publicaciones = 3 por semana durante un mes", bullets: ["Consejos útiles", "Detrás de cámaras", "Historias de clientes (con permiso)", "Tu oferta"] },
            { title: "Pide el calendario a la IA", bullets: ["Negocio + cliente + mezcla de tipos de publicación", "Fecha, idea de una línea y plataforma de cada una"] },
            { title: "Elige tus plataformas", bullets: ["Donde ya está tu cliente", "Una o dos bien hechas valen más que cinco mal hechas"] }
          ],
          tryIt: "Pide a la IA que arme tu calendario de 12 publicaciones, ajústalo a tu negocio y guárdalo con fechas en una hoja de cálculo o un documento.",
          youCanNow: "planear un mes de contenido variado para las plataformas que usan tus clientes.",
          quickCheck: [
            { objective: "O3", q: "¿Qué incluye una buena mezcla de contenido?", options: ["Consejos, lo que pasa detrás de escena, historias de clientes y ofertas", "Solo ofertas de venta", "Solo memes", "La misma publicación todos los días"], answer: 0, why: "Una mezcla mantiene el interés de la gente y crea confianza." },
            { objective: "O3", q: "Tus clientes están casi todos en una plataforma. ¿Dónde publicas?", options: ["En todas las plataformas a la vez", "Empiezas donde ya están tus clientes", "Solo en una plataforma nueva", "En ninguna hasta que tengas más tiempo"], answer: 1, why: "Para empezar bastan una o dos plataformas donde ya están los clientes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Saber a quién le hablas",
        questions: [
          { objective: "O1", q: "¿Cuál es la mejor descripción de cliente ideal para una pastelería casera?", options: ["Todos los que comen", "Padres ocupados a menos de 10 millas que piden pasteles de cumpleaños algunas veces al año", "La gente de internet", "Otras pastelerías"], answer: 1, why: "Nombra a una persona, una necesidad y un alcance específicos." },
          { objective: "O1", q: "La IA adivinó lo que les preocupa a tus clientes. ¿Qué debes hacer?", options: ["Ignorar a tus clientes", "Creerle totalmente", "Publicarlo como un hecho", "Compararlo con clientes reales o con tus registros de ventas"], answer: 3, why: "La IA adivina a partir de patrones generales; los clientes reales lo confirman." },
          { objective: "O2", q: "¿Qué tres preguntas debe responder una oferta?", options: ["Para quién es, qué recibe, por qué le debería importar", "Cuántos años tienes, dónde vives, cuál es tu contraseña", "Qué clima hace, qué hora es, qué fecha es", "Quiénes son tus competidores, cuánto cobran, dónde están"], answer: 0, why: "Esas tres hacen clara una oferta." },
          { objective: "O2", q: "La IA escribió \"Resultados garantizados o te devolvemos tu dinero\" en tu oferta, pero no das reembolsos. ¿Qué haces?", options: ["Lo pones más grande", "Lo dejas porque suena bien", "Lo quitas", "Agregas también \"con IA\""], answer: 2, why: "Los anuncios deben ser veraces; quita las afirmaciones que no puedes cumplir." },
          { objective: "O3", q: "¿Con cuántas plataformas debe empezar un pequeño negocio?", options: ["Con ninguna", "Con todas las que existen", "Con una o dos donde ya están sus clientes", "Solo con las que evitan sus competidores"], answer: 2, why: "Hacer bien una o dos es mejor que dispersarse." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crear, publicar y cumplir las reglas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hacer publicaciones e imágenes con IA",
          minutes: 5,
          goal: "Convertir las ideas del calendario en publicaciones terminadas con texto e imagen.",
          text: [
            "Para cada publicación, pide a un asistente de chat un texto: \"Escribe un texto para Instagram con esta idea: [idea]. Para [cliente]. Amable, de menos de 80 palabras, con una pregunta para invitar a comentar y una llamada a la acción.\" Pide dos o tres versiones y elige una.",
            "Haz la imagen en Canva a partir de una plantilla, con tus colores de marca. Usa tus propias fotos cuando puedas; las fotos reales de tu trabajo generan confianza. Si usas una imagen generada con IA, revisa que no tenga errores y nunca hagas que parezca un cliente real o un resultado real que no entregaste.",
            "Según la guía de la Oficina de Derechos de Autor de EE. UU., el material hecho solo con IA no está protegido por derechos de autor, mientras que tus propias decisiones creativas y tus ediciones sí pueden estarlo. Si te importa ser dueño de tu logo o del arte principal de tu marca, involucra a un diseñador humano y habla con un abogado."
          ],
          steps: ["Elige una publicación de tu calendario.", "Pide a la IA dos o tres versiones del texto y elige una.", "Haz la imagen en Canva a partir de una plantilla, con tu propia foto si puedes.", "Revisa la ortografía, los datos y las imágenes.", "Guarda la publicación lista para publicar."],
          words: [["Texto de la publicación", "el texto que acompaña a una publicación en redes sociales."], ["Derechos de autor", "el derecho legal de controlar las copias de una obra creativa."]],
          slides: [
            { title: "Texto con IA", bullets: ["Da la idea y el cliente", "Pide 2-3 versiones cortas", "Incluye una pregunta y una llamada a la acción"] },
            { title: "Imagen en Canva", bullets: ["Empieza con una plantilla", "Tus colores de marca", "Tus propias fotos generan confianza"] },
            { title: "Imágenes con IA: cuidado", bullets: ["Revisa que no tengan errores", "Nunca inventes un cliente ni un resultado"] },
            { title: "Derechos de autor e IA", bullets: ["Lo hecho solo con IA no está protegido", "Tus propias ediciones creativas sí pueden estarlo", "Para logos, involucra a un diseñador y un abogado"] }
          ],
          sources: [{ name: "Oficina de Derechos de Autor de EE. UU.: Derechos de autor e inteligencia artificial (en inglés)", url: "https://www.copyright.gov/ai/" }, { name: "Oficina de Derechos de Autor de EE. UU.: anuncio del informe Parte 2 sobre protección (en inglés)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Convierte tres ideas de tu calendario en publicaciones terminadas: un texto hecho con ayuda de la IA y corregido por ti, y una imagen de Canva con tu propia foto cuando se pueda.",
          youCanNow: "hacer publicaciones terminadas con textos e imágenes de IA, sin inventar resultados.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace fuerte un pedido de texto para una publicación a la IA?", options: ["Solo \"escribe un texto\"", "Tu contraseña", "La idea, el cliente, la extensión y una llamada a la acción", "El texto de la competencia para copiarlo"], answer: 2, why: "Una dirección concreta te da un texto que puedes usar." },
            { objective: "O4", q: "La IA hace una foto perfecta de antes y después de una cocina que tú no limpiaste. ¿Qué haces?", options: ["Publicarla como tu trabajo", "Publicarla sin texto", "Editarla un poco y publicarla", "No usarla; usar una foto real de tu trabajo"], answer: 3, why: "Las imágenes no deben sugerir resultados que no lograste." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reseñas, testimonios y recomendaciones: las reglas",
          minutes: 5,
          goal: "Usar reseñas y promociones pagadas de una forma que cumpla las reglas de la FTC.",
          text: [
            "Las reseñas reales de clientes son un marketing muy poderoso. Las falsas son ilegales. La regla de la FTC sobre reseñas falsas prohíbe crear, comprar o vender reseñas y testimonios falsos, incluidas las reseñas generadas con IA que fingen venir de personas que no existen. También prohíbe ofrecer una recompensa solo por las reseñas positivas.",
            "SÍ puedes pedir a todos tus clientes, contentos o no, que dejen una reseña honesta, y puedes compartir reseñas reales con permiso. No uses la IA para escribir reseñas y no edites una reseña para cambiar su sentido.",
            "Si le pagas o le das productos gratis a alguien para que te promocione, esa relación se debe avisar claramente, por ejemplo con \"#publicidad\" o \"Patrocinado\" al principio de la publicación, y dentro del mismo video si es un video. Tú eres responsable de lo que dicen de ti quienes te promocionan."
          ],
          steps: ["Pide a todos tus clientes reseñas honestas, no solo a los contentos.", "Comparte reseñas reales solo con permiso y sin cambiar su sentido.", "Nunca uses la IA para escribir reseñas.", "Haz que cualquier persona a quien pagues o regales lo avise claramente, como \"#publicidad\" al principio."],
          words: [["Testimonio", "lo que dice un cliente sobre tu negocio y que se usa en el marketing."], ["Recomendación", "un mensaje que la gente va a creer que muestra la opinión sincera de otra persona, como la publicación de un influencer."], ["Avisar", "decirle algo claramente a la gente."]],
          slides: [
            { title: "Las reseñas falsas están prohibidas", bullets: ["Nada de comprar, vender o escribir reseñas falsas", "Incluye las reseñas falsas hechas con IA", "Nada de recompensas solo por reseñas positivas"] },
            { title: "Lo que sí puedes hacer", bullets: ["Pedir a todos los clientes una reseña honesta", "Compartir reseñas reales con permiso", "No cambiar el sentido de una reseña"] },
            { title: "Promoción pagada o con regalos", bullets: ["Se debe avisar claramente", "\"#publicidad\" o \"Patrocinado\" al principio", "Dentro del mismo video si es un video"] }
          ],
          sources: [{ name: "FTC: regla final que prohíbe las reseñas y testimonios falsos (comunicado, en inglés)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }, { name: "FTC: Guías sobre recomendaciones, preguntas frecuentes (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Usa la IA para hacer el borrador de un mensaje corto y honesto pidiendo una reseña a tus clientes recientes (no solo a los contentos, y sin recompensa por una buena calificación). Corrígelo y guárdalo.",
          youCanNow: "conseguir y usar reseñas y promociones pagadas de forma honesta y legal.",
          quickCheck: [
            { objective: "O5", q: "¿Qué solicitud de reseñas cumple las reglas de la FTC?", options: ["Pedir una reseña honesta a todos los clientes recientes", "Ofrecer un descuento solo por reseñas de cinco estrellas", "Escribir tú las reseñas", "Pedirla solo a los clientes contentos"], answer: 0, why: "Pedir reseñas honestas a todos, sin premios por buenas calificaciones, está permitido." },
            { objective: "O5", q: "Una amiga recibe productos gratis para publicar sobre tu tienda. ¿Qué le pides que haga?", options: ["Ocultar que recibió algo", "Decirlo con claridad, por ejemplo con \"#ad\" al principio", "Publicar solo en los comentarios", "Usar un nombre falso"], answer: 1, why: "Las relaciones pagadas o con regalos deben decirse con claridad." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escribir un correo de marketing que cumpla la Ley CAN-SPAM",
          minutes: 5,
          goal: "Escribir con IA un correo de marketing que cumpla lo básico de la Ley CAN-SPAM.",
          text: [
            "El correo llega a personas que ya te conocen. Pide a la IA: \"Escribe un correo de marketing corto para los clientes anteriores de [negocio] sobre [oferta]. Amable, de menos de 150 palabras, con una sola llamada a la acción clara y tres opciones de asunto honestas.\"",
            "En EE. UU., la Ley CAN-SPAM regula los correos comerciales. La guía de la FTC menciona lo básico: información de \"De\" exacta, un asunto que no engañe, dejar claro que es un anuncio, tu dirección postal física válida y una forma clara de darse de baja. Debes cumplir las solicitudes de baja en un plazo de 10 días hábiles. Las multas pueden ser altas por cada correo, así que revisa la página de la FTC.",
            "Escribe solo a personas que te dieron su correo y aceptaron recibir noticias tuyas, y usa un servicio de correo que maneje las bajas por ti. Otros países tienen sus propias reglas; revísalas si escribes a clientes en el extranjero."
          ],
          steps: ["Pide a la IA el correo y tres asuntos honestos.", "Revisa cada dato y cada afirmación.", "Asegúrate de que muestre el nombre de tu negocio, tu dirección física y un enlace para darse de baja.", "Envíalo solo a personas que aceptaron recibir noticias tuyas.", "Cumple las bajas en un plazo de 10 días hábiles."],
          words: [["Ley CAN-SPAM", "la ley de EE. UU. con reglas para los correos comerciales (de marketing)."], ["Darse de baja", "pedir que ya no te envíen mensajes; cancelar la suscripción."]],
          slides: [
            { title: "Escríbelo con IA", bullets: ["Corto, amable, una llamada a la acción", "Tres asuntos honestos para elegir"] },
            { title: "Lo básico de CAN-SPAM (FTC)", bullets: ["Línea \"De\" exacta, asunto honesto", "Dejar claro que es un anuncio", "Tu dirección postal física", "Una forma clara de darse de baja"] },
            { title: "Bajas", bullets: ["Cúmplelas en 10 días hábiles", "Usa un servicio de correo que maneje las bajas"] },
            { title: "Escribe solo a quien aceptó", bullets: ["Clientes anteriores y personas inscritas", "Otros países tienen sus propias reglas"] }
          ],
          sources: [{ name: "FTC: Guía de cumplimiento de la Ley CAN-SPAM para empresas (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Tarea final: escribe tu correo de marketing con IA, revísalo con lo básico de CAN-SPAM (asunto honesto, anuncio identificado, dirección, baja) y júntalo con tu perfil, tu oferta, tu calendario y tus tres publicaciones como tu paquete de marketing de un mes.",
          youCanNow: "planear, crear y enviar marketing honesto que cumple las reglas de publicidad y de correo de EE. UU.",
          quickCheck: [
            { objective: "O6", q: "¿Qué debe incluir un correo de marketing según la Ley CAN-SPAM?", options: ["Un cupón", "Una foto", "Una dirección postal física válida", "El teléfono de tu casa"], answer: 2, why: "La Ley CAN-SPAM exige una dirección postal física válida." },
            { objective: "O6", q: "Le compraste a un desconocido una lista de direcciones de correo. ¿Qué haces?", options: ["Escribirles a todos", "Escribirle a la mitad", "Agregarlos sin avisar a tu boletín", "No usarla; escribir solo a personas que aceptaron"], answer: 3, why: "Envía correos de marketing a personas que te dieron su dirección y aceptaron." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crear, publicar y cumplir las reglas",
        questions: [
          { objective: "O4", q: "¿Qué foto genera más confianza en una publicación?", options: ["Una foto real de tu propio trabajo", "Una imagen de IA de un cliente feliz falso", "La foto de un competidor", "Una imagen de archivo borrosa"], answer: 0, why: "Las fotos reales de trabajo real generan confianza; los clientes falsos engañan." },
          { objective: "O4", q: "Según la Oficina de Derechos de Autor de EE. UU., el material hecho solo con IA:", options: ["Se vuelve marca registrada automáticamente", "Siempre es tuyo", "Es de tu cliente", "No está protegido por derechos de autor"], answer: 3, why: "Los derechos de autor protegen la autoría humana; tus propias ediciones creativas pueden estar protegidas." },
          { objective: "O5", q: "¿Puedes usar la IA para escribir reseñas de clientes de tu negocio?", options: ["Sí, si suenan reales", "No, la FTC prohíbe las reseñas falsas", "Sí, si las publicas poco a poco", "Solo los fines de semana"], answer: 1, why: "La regla de la FTC prohíbe las reseñas falsas, incluidas las hechas con IA." },
          { objective: "O5", q: "Le diste productos gratis a un influencer para que publique sobre ti. ¿Qué debe pasar?", options: ["La relación se debe avisar claramente, como \"#publicidad\" al principio", "Nada", "Esconderlo en los comentarios", "Ponerlo al final de un texto largo"], answer: 0, why: "Las relaciones importantes se deben avisar de forma clara y visible." },
          { objective: "O6", q: "Según CAN-SPAM, ¿en cuánto tiempo debes cumplir una solicitud de baja?", options: ["Nunca", "En un año", "En 10 días hábiles", "Solo si la piden dos veces"], answer: 2, why: "La guía de la FTC dice que las bajas se deben cumplir en un plazo de 10 días hábiles." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Marketing y creación de contenido con IA",
    questions: [
      { objective: "O1", q: "Tu cliente ideal es alguien que:", options: ["Vive en cualquier parte del mundo", "Necesita lo que vendes, lo puede pagar y es fácil de alcanzar", "Ya trabaja para ti", "Es tu competidor"], answer: 1, why: "Esa es la definición que usa el curso." },
      { objective: "O1", q: "¿Qué pedido a la IA ayuda a describir a tu cliente ideal?", options: ["\"Encuentra las direcciones de su casa.\"", "\"Haz mis impuestos.\"", "\"Inventa reseñas.\"", "\"Describe su situación, su mayor problema, sus preocupaciones y dónde pasa el tiempo en internet.\""], answer: 3, why: "Esas preguntas arman un perfil útil." },
      { objective: "O1", q: "Después de que la IA hace el borrador de un perfil de cliente, debes:", options: ["Venderlo", "Publicarlo", "No cambiarlo nunca", "Compararlo con clientes reales"], answer: 3, why: "La IA adivina; los clientes reales lo confirman." },
      { objective: "O2", q: "¿Cuál es una oferta clara?", options: ["\"Hacemos cosas.\"", "\"Padres ocupados de Decatur: pasteles de cumpleaños personalizados a domicilio, para que la fiesta sea una preocupación menos.\"", "\"¡Lo mejor de lo mejor, garantizado!\"", "\"Llámanos.\""], answer: 1, why: "Dice quién, qué y por qué." },
      { objective: "O2", q: "Según las reglas de la FTC, las afirmaciones de un anuncio deben ser:", options: ["Escritas por IA", "Graciosas", "Veraces, no engañosas y respaldadas por pruebas", "Muy largas"], answer: 2, why: "Esa es la norma básica de la publicidad veraz." },
      { objective: "O2", q: "¿Debes decir que tu servicio es \"con IA\" si no usa IA?", options: ["No, es una afirmación falsa", "Sí, suena moderno", "Solo en letra pequeña", "Solo en redes sociales"], answer: 0, why: "Las afirmaciones falsas sobre IA son publicidad engañosa." },
      { objective: "O3", q: "Un calendario de 12 publicaciones para un mes es más o menos:", options: ["Doce publicaciones al día", "Una publicación al mes", "Tres publicaciones por semana", "Una publicación al año"], answer: 2, why: "12 publicaciones en cuatro semanas son tres por semana." },
      { objective: "O3", q: "Una buena mezcla de contenido incluye:", options: ["Consejos, detrás de cámaras, historias de clientes y ofertas", "Solo publicaciones de ventas", "Solo memes", "Solo noticias de los competidores"], answer: 0, why: "Una mezcla mantiene interesados a los seguidores." },
      { objective: "O3", q: "Las historias de clientes se deben compartir:", options: ["Sin preguntar", "Con el permiso del cliente", "Con su número de teléfono", "Solo si las escribió la IA"], answer: 1, why: "El permiso respeta a los clientes y evita problemas." },
      { objective: "O4", q: "Un buen pedido de texto para una publicación incluye:", options: ["El texto de otra persona", "Tus datos bancarios", "Una sola palabra", "La idea, el cliente, la extensión y una llamada a la acción"], answer: 3, why: "Los detalles claros dan un texto que se puede usar." },
      { objective: "O4", q: "Al usar una imagen generada con IA, no debes:", options: ["Hacer que parezca un resultado real que no entregaste", "Revisar que no tenga errores", "Usar tus colores de marca", "Agregar tu logo"], answer: 0, why: "Los resultados falsos engañan a los clientes." },
      { objective: "O4", q: "¿Quién te puede ayudar si te importa ser dueño del arte de tu logo?", options: ["Nadie", "Solo una herramienta de imágenes con IA", "Un seguidor cualquiera", "Un diseñador humano y un abogado"], answer: 3, why: "El arte hecho solo con IA no está protegido por derechos de autor." },
      { objective: "O5", q: "La regla de la FTC sobre reseñas falsas también prohíbe:", options: ["Agradecer a los clientes", "Pedir a los clientes reseñas honestas", "Ofrecer recompensas solo por reseñas positivas", "Responder a las reseñas"], answer: 2, why: "Están prohibidas las recompensas que dependen de una opinión positiva." },
      { objective: "O5", q: "¿Qué práctica con reseñas está permitida?", options: ["Comprar 50 reseñas de cinco estrellas", "Pedir a todos los clientes una reseña honesta", "Escribir reseñas con IA", "Editar una mala reseña para que suene bien"], answer: 1, why: "Las reseñas honestas de clientes reales están bien." },
      { objective: "O5", q: "¿Dónde debe ir \"#publicidad\" en una publicación pagada?", options: ["En ningún lado", "Escondido en los comentarios", "Al final de un texto largo", "Al principio, donde la gente lo vea"], answer: 3, why: "Los avisos deben ser fáciles de notar." },
      { objective: "O5", q: "En un video pagado, el aviso debe ir:", options: ["Solo en un enlace", "Solo en la descripción", "Dentro del mismo video", "No hace falta"], answer: 2, why: "La FTC dice que los avisos van dentro del video." },
      { objective: "O6", q: "CAN-SPAM exige que los correos de marketing incluyan:", options: ["Una dirección postal física válida", "El número de tu cuenta bancaria", "La dirección de un cliente", "Tu contraseña"], answer: 0, why: "Una dirección física es parte de lo básico." },
      { objective: "O6", q: "El asunto de un correo de marketing debe:", options: ["Ir todo en mayúsculas", "No ser engañoso", "Ser un secreto", "Estar escrito por IA"], answer: 1, why: "No se permiten asuntos engañosos." },
      { objective: "O6", q: "¿Quién debe recibir tus correos de marketing?", options: ["Todos los correos que encuentres", "Las personas que te dieron su correo y aceptaron", "Los clientes de tu competidor", "Gente al azar de una lista comprada"], answer: 1, why: "Escribe a las personas que aceptaron recibir noticias tuyas." },
      { objective: "O6", q: "Si escribes a clientes en otros países, debes:", options: ["Revisar también las reglas de ese país", "Dar por hecho que las reglas de EE. UU. lo cubren todo", "Dejar de hacer marketing", "Quitar tu dirección"], answer: 0, why: "Cada país puede tener sus propias reglas de correo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Cliente ideal",
        objective: "O1",
        notYet: "Demasiado amplio, como \"todo el mundo\", o no se revisó contra clientes reales.",
        meets: "Un párrafo sobre quiénes son, su problema y dónde pasan el tiempo, revisado contra personas reales.",
        exceeds: "Anota qué suposiciones de la IA estaban mal y se corrigieron."
      },
      {
        name: "Oferta",
        objective: "O2",
        notYet: "Falta para quién, qué o por qué, o incluye una afirmación que no se puede probar.",
        meets: "Una oración con para quién es, qué recibe y por qué importa, todo cierto.",
        exceeds: "Usa las propias palabras del cliente de una conversación real."
      },
      {
        name: "Calendario de contenido",
        objective: "O3",
        notYet: "Menos de 12 publicaciones, sin fechas, o de un solo tipo.",
        meets: "12 publicaciones con fecha y una mezcla de tipos en una o dos plataformas.",
        exceeds: "Cada publicación se conecta con la oferta o con el problema del cliente."
      },
      {
        name: "Publicaciones terminadas",
        objective: "O4",
        notYet: "Textos sin editar, o imágenes que sugieren resultados que no se lograron.",
        meets: "Tres publicaciones con textos editados, imágenes y una llamada a la acción, con imágenes honestas.",
        exceeds: "Usa fotos reales del trabajo del dueño, con permiso de cualquier cliente que aparezca."
      },
      {
        name: "Correo que cumple las reglas",
        objective: "O6",
        notYet: "Falta un asunto honesto, la dirección o la línea para darse de baja.",
        meets: "Asunto honesto, identificado como anuncio, dirección física y opción para darse de baja que funciona.",
        exceeds: "También anota cómo se atenderán las bajas en un plazo de 10 días hábiles."
      }
    ]
  },
  evaluation: {
    results: [
      "Dueños que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que publican al menos ocho publicaciones planeadas en 30 días (encuesta de seguimiento)",
      "Nuevas consultas o ventas de clientes que el dueño relaciona con el paquete de marketing",
      "Participantes que empiezan otro curso de Koach Learn para emprendedores en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con un asistente de IA gratuito y una cuenta gratuita de Canva",
      "Fotos reales de tu trabajo y una conversación real con un cliente o un registro de ventas",
      "Una hoja de cálculo o un documento para el calendario de contenido",
      "Entre 60 y 75 minutos en total para las lecciones, las tareas, las comprobaciones y el paquete de marketing"
    ],
    facilitatorNotes: [
      "Pide a los dueños que entrevisten a un cliente real antes de la Lección 1 para que el perfil tenga una base real.",
      "Revisen en parejas cada oferta y cada publicación, y marquen con un círculo cualquier afirmación que no se pueda probar.",
      "Explica que el curso cubre las reglas básicas de Estados Unidos en palabras sencillas y no es asesoría legal.",
      "Recuerda a los dueños que pidan permiso antes de compartir historias o fotos de clientes.",
      "Califica el paquete de marketing con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};

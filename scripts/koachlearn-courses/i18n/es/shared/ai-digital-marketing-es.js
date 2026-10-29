"use strict";

// Koach Learn course (shared), Spanish translation of "AI Digital Marketing". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-digital-marketing-es",
  lang: "es",
  translationOf: "ai-digital-marketing",
  category: "Veterans (military)",
  name: "Marketing digital con IA",
  skills: "Definir un cliente ideal, Escribir publicaciones con IA, Hacer gráficos en Canva, Escribir un correo de marketing que cumpla la ley, Revelar los anuncios con honestidad, Leer los resultados",
  outcome: "planificar y crear una semana de marketing digital para un pequeño negocio con ayuda de la IA: un perfil del cliente ideal, cinco publicaciones en redes con gráficos, un correo de marketing que cumpla las reglas de CAN-SPAM y una forma sencilla de medir qué funcionó.",
  about: [
    "El marketing digital significa llegar a los clientes por internet: redes sociales, correo electrónico, sitios web y buscadores. Las herramientas de IA pueden redactar publicaciones, sugerir ideas y ayudar a hacer gráficos en minutos, así que un negocio de una sola persona puede hacer marketing como uno más grande.",
    "Este curso es para veteranos que inician un negocio o buscan trabajo en marketing, personas que buscan empleo y quieren una habilidad que se vende, y miembros de la comunidad que promueven una tienda local, un puesto de comida, una iglesia o un servicio. Necesitas un teléfono o una computadora y herramientas gratuitas como ChatGPT, Microsoft Copilot o Google Gemini, y Canva.",
    "Armarás un plan real de marketing de una semana para un negocio que elijas. Cada lección dura unos cinco minutos y termina con una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Para un pequeño negocio real o de práctica, arma un kit de marketing de una semana: un perfil del cliente ideal de un párrafo, cinco publicaciones en redes con textos y gráficos de Canva revisados, un correo de marketing con un asunto claro, dirección física y opción para darse de baja, y una hoja de seguimiento con el número que vigilarás en cada publicación.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos y cónyuges de militares que tienen o están empezando un pequeño negocio, como un servicio, un oficio, comida o una tienda en línea, y que quieren más clientes sin contratar una agencia de marketing.",
    startingPoint: "Usan las redes sociales y el correo en su vida personal y puede que tengan una página del negocio. La mayoría publica sin un plan, no ha usado la IA ni Canva para el marketing y no conoce las reglas sobre correos y publicidad.",
    gap: "Los pequeños negocios dependen de tener clientes constantes, y el marketing en línea toma un tiempo que los dueños no tienen. Las personas necesitan planear y producir una semana de marketing honesto y bien dirigido con ayuda de la IA, seguir las reglas de la ley CAN-SPAM y de la FTC, y medir los resultados para que su esfuerzo se convierta en reservas y ventas.",
    constraints: [
      "Nivel de lectura: palabras sencillas; los términos de marketing se explican la primera vez",
      "Aparatos: un teléfono o una computadora; una computadora es más fácil para Canva y las hojas de cálculo",
      "Costo: solo herramientas gratuitas (un asistente de IA, el plan gratuito de Canva, Google Sheets o Excel)",
      "Reglas: se aplican la ley CAN-SPAM de EE. UU. y las guías de la FTC; quienes estén fuera de EE. UU. revisan las reglas de su país",
      "Privacidad: no pegar nombres ni datos de contacto de clientes en las herramientas de IA"
    ],
    prerequisites: "Ninguno. Quienes no hayan usado asistentes de IA pueden tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para un pequeño negocio real o de práctica", action: "escribir el perfil del cliente ideal y un mensaje de marketing de una oración", standard: "diciendo quién es el cliente, qué necesita y qué ofreces, para quién y por qué tú" },
    { id: "O2", condition: "Usando un asistente de IA y tu perfil del cliente", action: "escribir cinco publicaciones en redes de distintos tipos, cada una con una llamada a la acción", standard: "con cada dato, precio y fecha revisados y sin afirmaciones que no puedas probar" },
    { id: "O3", condition: "Usando el plan gratuito de Canva", action: "crear un gráfico con tu marca para cada publicación", standard: "con los mismos colores y fuentes, pocas palabras y solo imágenes que tengas derecho a usar" },
    { id: "O4", condition: "Con una oferta para clientes anteriores", action: "escribir un correo de marketing que cumpla los requisitos principales de la ley CAN-SPAM", standard: "con un asunto honesto, una dirección física y una opción clara para darse de baja" },
    { id: "O5", condition: "Con un anuncio, una reseña o contenido hecho con IA", action: "identificar cuándo hace falta un aviso y mantener honestas las reseñas y los testimonios", standard: "acertando al menos 4 de 5 casos" },
    { id: "O6", condition: "Después de una semana de publicaciones", action: "elegir un número para seguir en cada publicación y usar los resultados para planificar la semana siguiente", standard: "con una hoja de seguimiento que tenga un número meta y un resultado para cada publicación" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planificar y crear contenido",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conocer a tu cliente y tu mensaje",
          minutes: 5,
          goal: "Escribir el perfil del cliente ideal y un mensaje claro para un negocio.",
          text: [
            "El marketing funciona cuando le habla a una persona concreta. El perfil del cliente ideal describe a tu mejor cliente: quién es, qué necesita, qué le preocupa y dónde pasa tiempo en internet.",
            "Luego escribe un mensaje claro: qué ofreces, para quién es y por qué deberían elegirte. Ejemplo: “Lavado de autos a domicilio de un veterano: vamos a tu entrada en Fayetteville. Reserva en dos minutos”.",
            "La IA te puede ayudar con ideas. Pregunta: “Tengo un negocio de lavado y detallado de autos a domicilio. Describe tres tipos de clientes probables y qué le importa a cada uno”. Elige el que se parece a los clientes que de verdad tienes o quieres, y edítalo con lo que tú sabes."
          ],
          steps: ["Escribe el nombre del negocio y lo que vende.", "Pide a un asistente de IA que sugiera tres tipos de clientes.", "Elige uno y escribe un perfil corto: quién es, qué necesita, qué le preocupa, dónde está en internet.", "Escribe un mensaje de una oración: qué, para quién, por qué tú."],
          words: [["Cliente ideal", "el tipo concreto de persona al que apunta tu marketing."], ["Perfil", "una descripción corta de una persona o un grupo."], ["Mensaje", "lo principal que quieres que los clientes sepan y recuerden."]],
          slides: [
            { title: "Háblale a una persona", bullets: ["Quién es y qué necesita", "Qué le preocupa", "Dónde pasa tiempo en internet"] },
            { title: "Un mensaje claro", bullets: ["Qué ofreces", "Para quién es", "Por qué elegirte"] },
            { title: "Usa la IA para generar ideas", bullets: ["Pide tres tipos de clientes", "Elige uno y edítalo con lo que sabes"] }
          ],
          tryIt: "Elige un negocio real o de práctica. Usa un asistente de IA para generar ideas de tipos de clientes y luego escribe un perfil del cliente ideal de un párrafo y un mensaje de una oración.",
          youCanNow: "escribir un perfil del cliente ideal y un mensaje de marketing claro.",
          quickCheck: [
            { objective: "O1", q: "¿Qué describe el perfil del cliente ideal?", options: ["A todas las personas que usan internet", "A tu mejor cliente: quién es, qué necesita, qué le preocupa y dónde está en línea", "Tus precios del año", "Los logotipos de tus competidores"], answer: 1, why: "Un perfil describe un tipo específico de cliente para que tu marketing le hable a él." },
            { objective: "O1", q: "La IA te sugiere tres tipos de cliente para tu negocio de jardinería. Solo uno se parece a quienes de verdad te llaman. ¿Qué haces?", options: ["Usar los tres en cada publicación", "Elegir el más emocionante", "Ignorar la IA y no publicar nada", "Elegir el que se parece a tus clientes reales y editarlo con lo que sabes"], answer: 3, why: "Elige el tipo que se parece a tus clientes reales o a los que quieres, y agrega lo que sabes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir publicaciones para redes sociales con IA",
          minutes: 5,
          goal: "Usar la IA para redactar cinco publicaciones y luego editarlas para que sean correctas y suenen como tú.",
          text: [
            "Las buenas publicaciones enseñan, muestran o invitan. Combínalas: un consejo (“3 formas de mantener limpio el interior de tu auto”), una foto detrás de escena, la historia de un cliente (con su permiso), una oferta y una pregunta que invite a comentar.",
            "Dale a la IA tu perfil y tu mensaje y pide: “Escribe cinco publicaciones cortas para Instagram y Facebook para este cliente. Un consejo, una detrás de escena, una historia de cliente, una oferta y una pregunta. Tono amable, menos de 60 palabras cada una, con una llamada a la acción”.",
            "Siempre edita. Revisa cada dato, precio y fecha. Quita lo que no puedes demostrar, como “el mejor del estado”. Haz que suene como tú, y nunca publiques una reseña o un resultado que no ocurrió."
          ],
          steps: ["Pega el perfil del cliente y tu mensaje en el asistente de IA.", "Pide cinco publicaciones de distintos tipos con una llamada a la acción.", "Revisa cada dato, precio y fecha.", "Quita lo que no puedes demostrar.", "Reescríbelo con tu propia voz."],
          words: [["Llamada a la acción", "el paso que quieres que dé el lector, como “Reserva ya” o “Llama hoy”."], ["Texto de la publicación", "las palabras que acompañan una foto o un video en redes sociales."]],
          slides: [
            { title: "Combina tus publicaciones", bullets: ["Un consejo y una mirada detrás de escena", "La historia de un cliente (con permiso)", "Una oferta y una pregunta"] },
            { title: "Un buen pedido a la IA", bullets: ["Incluye tu perfil y tu mensaje", "Pide cinco tipos, de menos de 60 palabras", "Pide una llamada a la acción"] },
            { title: "Siempre edita", bullets: ["Revisa datos, precios y fechas", "Quita lo que no puedes demostrar", "Haz que suene como tú"] }
          ],
          tryIt: "Pide a un asistente de IA que redacte cinco publicaciones para tu negocio usando el modelo de pedido de arriba. Edita cada una para revisar datos y voz, y marca lo que cambiaste.",
          youCanNow: "redactar publicaciones con IA y editarlas para que sean correctas, honestas y con tu voz.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es una publicación \"detrás de cámaras\"?", options: ["Una foto de tu equipo preparándose para un trabajo", "Un cupón de 20% de descuento", "Una pregunta a tus seguidores sobre su color favorito", "La reseña de un cliente"], answer: 0, why: "Las publicaciones detrás de cámaras muestran cómo se hace tu trabajo." },
            { objective: "O2", q: "Una publicación redactada por la IA tiene un precio que cambiaste el mes pasado. ¿Qué haces?", options: ["Publicarla; los clientes preguntarán", "Borrar toda la publicación", "Corregir el precio antes de publicar", "Agregar \"los precios pueden variar\" y publicarla"], answer: 2, why: "Revisa y corrige siempre cada dato, precio y fecha antes de publicar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer gráficos con Canva e IA",
          minutes: 5,
          goal: "Hacer un gráfico limpio y con tu marca para cada publicación usando una herramienta de diseño gratuita.",
          text: [
            "Canva tiene un plan gratuito con plantillas del tamaño de cada red social. Busca el tipo de publicación que necesitas, como “Publicación de Instagram”, elige una plantilla y cambia las palabras y las fotos.",
            "Mantén una marca sencilla: los mismos dos o tres colores, una o dos fuentes y tu logo o el nombre del negocio en cada gráfico. Usa pocas palabras en la imagen; el texto de la publicación lleva los detalles.",
            "Usa tus propias fotos cuando puedas; las fotos reales de tu trabajo generan confianza. Si usas imágenes hechas con IA, no hagas que parezcan clientes reales o resultados que no entregaste, y usa solo imágenes que tienes derecho a usar."
          ],
          steps: ["Abre Canva y busca el tamaño de plantilla que necesitas.", "Elige una plantilla y cambia los colores a los de tu marca.", "Cambia el texto por un titular corto.", "Agrega tu propia foto o una imagen con la licencia correcta.", "Descárgala y guárdala con el nombre de la publicación."],
          words: [["Plantilla", "un diseño ya hecho que cambias para que se ajuste a lo que necesitas."], ["Marca", "el estilo que hace reconocible a tu negocio."], ["Licencia", "el permiso para usar una imagen u otra obra."]],
          slides: [
            { title: "Lo básico de Canva", bullets: ["Plan gratuito con plantillas del tamaño de cada red", "Elige una plantilla, cambia palabras y fotos"] },
            { title: "Una marca sencilla", bullets: ["Los mismos dos o tres colores", "Una o dos fuentes", "Tu nombre o logo en cada gráfico"] },
            { title: "Imágenes honestas", bullets: ["Tus propias fotos generan confianza", "Nada de clientes o resultados falsos", "Solo imágenes que tienes derecho a usar"] }
          ],
          sources: [{ name: "Canva", url: "https://www.canva.com/" }],
          tryIt: "Haz un gráfico en Canva para cada una de tus cinco publicaciones con los mismos colores y fuentes. Usa al menos una foto real de tu trabajo o producto.",
          youCanNow: "crear gráficos coherentes y honestos para publicaciones con una herramienta de diseño gratuita.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde deben ir la mayoría de los detalles de una publicación?", options: ["Amontonados en el gráfico", "En letra diminuta al pie de la imagen", "En un segundo gráfico", "En el texto de la publicación, con pocas palabras en la imagen"], answer: 3, why: "Pon pocas palabras en la imagen; el texto de la publicación lleva los detalles." },
            { objective: "O3", q: "Quieres una foto de un cliente feliz, pero no tienes ninguna. ¿Cuál es la opción honesta?", options: ["Usar una imagen de IA hecha para parecer un cliente real", "Usar una foto de tu propio trabajo o una imagen con la licencia correcta", "Copiar una foto del sitio de otra empresa", "Usar la foto de un desconocido de las redes sociales"], answer: 1, why: "Usa tus propias fotos o imágenes que tengas derecho a usar, y no inventes clientes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planificar y crear contenido",
        questions: [
          { objective: "O1", q: "¿Qué es el perfil del cliente ideal?", options: ["Tu estado de cuenta bancario", "Una lista de competidores", "Una descripción del tipo concreto de persona al que apunta tu marketing", "La contraseña de una red social"], answer: 2, why: "El marketing funciona mejor cuando le habla a una persona concreta." },
          { objective: "O1", q: "¿Cuál es el mensaje de marketing más claro?", options: ["“Lavado de autos a domicilio de un veterano: vamos a tu entrada en Fayetteville. Reserva en dos minutos”.", "“Hacemos cosas”.", "“¡¡¡Lo mejor!!!”", "“Llámanos tal vez”."], answer: 0, why: "Dice qué, para quién y por qué, con un siguiente paso." },
          { objective: "O2", q: "La IA escribe “Elegido el mejor lavado de autos del estado”, pero eso nunca pasó. ¿Qué haces?", options: ["Publicarlo igual", "Ponerlo más grande", "Agregar una foto de un premio falso", "Quitar esa afirmación"], answer: 3, why: "Nunca publiques afirmaciones que no puedes demostrar." },
          { objective: "O2", q: "¿Qué es una llamada a la acción?", options: ["Un tono de teléfono", "El paso que quieres que dé el lector, como “Reserva ya”", "Un aviso legal", "Un tipo de fuente"], answer: 1, why: "Le dice al lector qué hacer después." },
          { objective: "O3", q: "¿Qué genera más confianza en un gráfico?", options: ["Imágenes de IA de clientes felices falsos", "Fotos reales de tu propio trabajo", "Fotos copiadas de un competidor", "Ninguna imagen"], answer: 1, why: "Las fotos reales de trabajo real son honestas y convincentes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Correo, reglas de honestidad y resultados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir un correo de marketing que cumpla la ley",
          minutes: 6,
          goal: "Redactar con IA un correo de marketing que cumpla los requisitos principales de la ley CAN-SPAM de EE. UU.",
          text: [
            "El correo llega a personas que ya eligieron saber de ti, así que muchas veces vende mejor que las redes sociales. Escribe solo a personas que te dieron su dirección y aceptaron recibir tus mensajes.",
            "En Estados Unidos, la ley CAN-SPAM fija reglas para el correo comercial. Según la Comisión Federal de Comercio (FTC, la agencia de EE. UU. que protege a los consumidores), no debes usar información de encabezado ni asuntos falsos o engañosos, debes indicar que el mensaje es un anuncio, incluir tu dirección postal física válida, dar una forma clara de darse de baja y respetar las bajas en un plazo de 10 días hábiles. Sigues siendo responsable aunque otra persona lo envíe por ti.",
            "Pide un borrador a la IA: “Escribe un correo de marketing corto para [negocio] que ofrezca [promoción] a clientes anteriores. Asunto honesto, tono amable, una llamada a la acción”. Luego agrega tu dirección y el enlace para darse de baja, y revisa los datos. Fuera de EE. UU., revisa las reglas de correo y privacidad de tu país."
          ],
          steps: ["Pide a la IA un correo corto con un asunto honesto y una llamada a la acción.", "Revisa cada dato, precio y fecha.", "Deja claro que es un anuncio u oferta.", "Agrega tu dirección postal física válida.", "Agrega una opción clara para darse de baja y respeta las solicitudes en 10 días hábiles."],
          words: [["Ley CAN-SPAM", "la ley de EE. UU. que fija reglas para el correo comercial."], ["Darse de baja", "una forma para que la gente deje de recibir tus correos."], ["Asunto", "el título corto que la gente ve antes de abrir un correo."]],
          slides: [
            { title: "Escribe a las personas correctas", bullets: ["Solo a quienes aceptaron recibir tus mensajes"] },
            { title: "Lo básico de CAN-SPAM (FTC)", bullets: ["Datos del remitente y asunto honestos", "Indica que es un anuncio", "Incluye tu dirección postal física"] },
            { title: "Reglas para darse de baja", bullets: ["Una forma clara de darse de baja", "Respétala en 10 días hábiles", "Eres responsable aunque lo envíe un proveedor"] }
          ],
          sources: [{ name: "FTC: Guía de cumplimiento de la ley CAN-SPAM para empresas", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Usa la IA para redactar un correo de marketing para tu negocio. Edítalo y luego compáralo con la lista de CAN-SPAM: asunto honesto, indicado como anuncio, dirección física, opción para darse de baja.",
          youCanNow: "escribir con ayuda de la IA un correo de marketing que cumpla las reglas principales de CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "¿Quién debe estar en tu lista de correos de marketing?", options: ["Cualquier persona cuyo correo puedas encontrar", "Direcciones de correo que compraste en internet", "Personas que te dieron su dirección y aceptaron recibir tus mensajes", "Todos los negocios de tu ciudad"], answer: 2, why: "Escribe solo a las personas que te dieron su dirección y aceptaron recibir tus mensajes." },
            { objective: "O4", q: "Tu borrador de la IA tiene una gran oferta, pero no tiene dirección ni enlace para darse de baja. ¿Qué haces antes de enviarlo?", options: ["Agregar tu dirección postal física válida y una opción clara para darse de baja", "Enviarlo; eso es opcional", "Agregar solo tu número de teléfono", "Enviarlo mejor desde la cuenta de un amigo"], answer: 0, why: "La ley CAN-SPAM exige una dirección postal física válida y una forma clara de darse de baja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Marketing honesto: avisos, reseñas e IA",
          minutes: 5,
          goal: "Detectar cuándo un anuncio necesita un aviso y mantener honestas las reseñas y el contenido hecho con IA.",
          text: [
            "Las Guías de Recomendaciones (Endorsement Guides) de la FTC dicen que si alguien que promociona un producto tiene una conexión con la marca, como recibir pago o un producto gratis, eso debe decirse claramente. La FTC sugiere palabras sencillas como “Anuncio:” o “#ad” al principio, o “Publicación pagada por [marca]”.",
            "Las reseñas falsas son engañosas. Nunca escribas reseñas de tu propio negocio, pagues por reseñas falsas ni hagas que la IA las genere. En su lugar, pide a clientes reales reseñas honestas.",
            "Ten cuidado con el contenido hecho con IA: no uses la IA para imitar a una persona real, inventar testimonios ni afirmar resultados que no puedes demostrar. Las reglas cambian, así que revisa las páginas de orientación para empresas de la FTC para ver los detalles actuales."
          ],
          words: [["Recomendación", "un mensaje en el que alguien dice que le gusta o usa un producto."], ["Aviso", "una declaración clara de una conexión, como “#ad” o “Publicación pagada”."], ["Testimonio", "lo que dice un cliente sobre su experiencia."]],
          slides: [
            { title: "Revela las conexiones", bullets: ["¿Te pagaron o te dieron un producto gratis? Dilo", "“Anuncio:” o “#ad” al principio", "“Publicación pagada por [marca]”"] },
            { title: "Las reseñas deben ser reales", bullets: ["Nada de reseñas falsas o escritas por IA", "Pide a clientes reales una reseña honesta"] },
            { title: "Reglas prácticas para contenido con IA", bullets: ["No imitar a personas reales", "No inventar testimonios ni resultados", "Revisa la orientación de la FTC por si hay cambios"] }
          ],
          sources: [{ name: "FTC: Guías de Recomendaciones, lo que la gente pregunta", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Revisa tus cinco publicaciones y tu correo. Marca las que necesitarían un aviso (por ejemplo, un socio te pagó o un amigo lo promociona a cambio de un producto gratis), y quita cualquier afirmación o reseña que no sea real.",
          youCanNow: "detectar cuándo el marketing necesita un aviso y mantener honestas las reseñas y el contenido hecho con IA.",
          quickCheck: [
            { objective: "O5", q: "¿Cuándo debe avisarlo una persona que promociona tu producto?", options: ["Solo si tiene más de 10,000 seguidores", "Cuando tiene una conexión con tu marca, como recibir pago o el producto gratis", "Nunca, si la reseña es positiva", "Solo en el correo"], answer: 1, why: "La FTC dice que una conexión como un pago o un producto gratis se debe avisar con claridad." },
            { objective: "O5", q: "Tu tienda tiene pocas reseñas. Un amigo te ofrece que la IA escriba veinte reseñas de cinco estrellas. ¿Qué haces?", options: ["Aceptar, porque las escribió la IA y no tú", "Publicar solo diez", "Pagarle a un servicio para que las publique", "Decir que no y pedirles a clientes reales reseñas honestas"], answer: 3, why: "Las reseñas falsas engañan; mejor pídeselas a clientes reales." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir qué funciona y mejorar",
          minutes: 5,
          goal: "Elegir un número para seguir en cada publicación y usar los resultados para planificar la semana siguiente.",
          text: [
            "Cada red social y cada herramienta de correo muestra números básicos. El alcance es cuántas personas lo vieron. La interacción son los me gusta, comentarios, veces compartido y guardados. Los clics muestran quién fue a tu enlace. Las conversiones son la meta real: reservas, llamadas, ventas o inscripciones.",
            "Elige un número principal por publicación según su trabajo: una publicación de consejo busca guardados y compartidos, una oferta busca clics y reservas. Anótalos en una hoja de seguimiento sencilla en Google Sheets o Excel.",
            "Después de una semana, mira qué funcionó mejor y haz más de eso. Puedes pegar tus números (sin nombres de clientes) en un asistente de IA y preguntar: “¿Qué publicaciones funcionaron mejor y qué debería probar la semana que viene?”. La decisión final es tuya."
          ],
          steps: ["Haz una hoja con columnas: fecha, publicación, tipo, número meta, resultado.", "Elige un número meta para cada publicación.", "Después de una semana, llena los resultados con las estadísticas de la plataforma.", "Pide a la IA que encuentre patrones, usando solo números.", "Planifica la semana siguiente: más de lo que funcionó."],
          words: [["Alcance", "cuántas personas vieron tu publicación."], ["Interacción", "me gusta, comentarios, veces compartido y guardados."], ["Conversión", "cuando alguien hace la acción que quieres, como reservar o comprar."]],
          slides: [
            { title: "Números que debes conocer", bullets: ["Alcance: cuántos lo vieron", "Interacción: me gusta, comentarios, compartidos", "Clics y conversiones"] },
            { title: "Una meta por publicación", bullets: ["Consejo: guardados y compartidos", "Oferta: clics y reservas"] },
            { title: "Aprende y ajusta", bullets: ["Anota todo en una hoja sencilla", "Pide a la IA que busque patrones, solo con números", "Haz más de lo que funcionó"] }
          ],
          tryIt: "Tarea final: arma una hoja de seguimiento para tus cinco publicaciones y tu correo, con un número meta para cada uno. Junto con tu perfil, publicaciones, gráficos y correo, esto completa tu kit de marketing de una semana.",
          youCanNow: "planificar, crear, revisar y medir una semana de marketing digital con ayuda de la IA.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es la interacción?", options: ["Los me gusta, comentarios, veces compartida y guardados", "Cuántas personas vieron la publicación", "El costo de la publicación", "El número de seguidores con el que empezaste"], answer: 0, why: "La interacción cuenta cómo actúan las personas con una publicación; el alcance es cuántas la vieron." },
            { objective: "O6", q: "Esta semana tus publicaciones de consejos fueron las más guardadas, pero las ofertas recibieron pocos clics. ¿Cuál es un paso siguiente sensato?", options: ["Dejar de publicar un mes", "Borrar las publicaciones de consejos", "Planear más publicaciones de consejos y probar una oferta nueva la semana siguiente", "Publicar la misma oferta cinco veces"], answer: 2, why: "Haz más de lo que funcionó y ajusta lo que no." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Correo, reglas de honestidad y resultados",
        questions: [
          { objective: "O4", q: "Según CAN-SPAM, ¿qué debe incluir un correo de marketing en EE. UU.?", options: ["El número de Seguro Social del cliente", "Un asunto urgente y falso", "Ningún nombre de remitente", "Una dirección postal física válida y una forma de darse de baja"], answer: 3, why: "La FTC pone la dirección física y la opción de baja entre los requisitos." },
          { objective: "O4", q: "Según la FTC, ¿en cuánto tiempo debes respetar una solicitud de baja bajo CAN-SPAM?", options: ["En 10 días hábiles", "En un año", "Nunca", "Solo si te llaman"], answer: 0, why: "La guía de la FTC dice que las bajas deben respetarse en 10 días hábiles." },
          { objective: "O5", q: "Un amigo recibió un producto gratis de ti y publica sobre él. ¿Qué debe incluir su publicación?", options: ["Nada", "Una reseña falsa de cinco estrellas", "Un aviso claro como “#ad” o “Regalo”", "Tus datos bancarios"], answer: 2, why: "Las conexiones como los productos gratis deben revelarse." },
          { objective: "O5", q: "¿Qué es marketing honesto?", options: ["Hacer que la IA escriba reseñas", "Pagar por reseñas falsas", "Reseñar tu propio negocio con nombres falsos", "Pedir a clientes reales reseñas honestas"], answer: 3, why: "Solo las reseñas reales de clientes reales son honestas." },
          { objective: "O6", q: "¿Qué es una conversión?", options: ["Cambiar el tamaño de una foto", "Un tipo de fuente", "Cuando alguien hace la acción que quieres, como reservar", "Desactivar los comentarios"], answer: 2, why: "Las conversiones son la meta real del negocio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Marketing digital con IA",
    questions: [
      { objective: "O1", q: "El marketing digital significa:", options: ["Solo imprimir volantes", "Llegar a los clientes por internet", "Vender de puerta en puerta", "Manejar una caja registradora"], answer: 1, why: "Usa redes sociales, correo, sitios web y buscadores." },
      { objective: "O1", q: "¿Por qué escribir un perfil del cliente ideal?", options: ["Para que tu marketing le hable a una persona concreta", "Para pasar el tiempo", "Porque la IA lo exige", "Para compartir datos privados"], answer: 0, why: "El marketing concreto funciona mejor que el general." },
      { objective: "O1", q: "Un mensaje claro dice:", options: ["Solo tu número de teléfono", "La historia de tu vida", "Qué ofreces, para quién es y por qué elegirte", "Nada concreto"], answer: 2, why: "Esas tres partes hacen claro un mensaje." },
      { objective: "O1", q: "La IA sugiere tres tipos de clientes. Debes:", options: ["Elegir el que se parece a los clientes reales y editarlo", "Usar los tres sin leerlos", "Ignorar lo que tú sabes", "Publicarlos como anuncios"], answer: 0, why: "La IA da ideas; tú decides con lo que sabes." },
      { objective: "O2", q: "¿Cuál es una buena combinación para una semana de publicaciones?", options: ["Cinco ofertas iguales", "Solo memes", "Solo tu logo", "Un consejo, detrás de escena, la historia de un cliente, una oferta y una pregunta"], answer: 3, why: "La variedad mantiene el interés." },
      { objective: "O2", q: "“Reserva ya” al final de una publicación es:", options: ["Un aviso", "Una llamada a la acción", "Una plantilla", "Una conversión"], answer: 1, why: "Le dice al lector el siguiente paso." },
      { objective: "O2", q: "Antes de publicar algo redactado por la IA, revisa:", options: ["Solo los emojis", "Datos, precios, fechas y afirmaciones", "Nada", "Tu contraseña"], answer: 1, why: "La IA puede equivocarse en los datos o exagerar." },
      { objective: "O3", q: "En Canva, una plantilla es:", options: ["Un documento legal", "Un anuncio pagado", "Una lista de clientes", "Un diseño ya hecho que personalizas"], answer: 3, why: "Las plantillas ahorran tiempo y vienen del tamaño de cada red." },
      { objective: "O3", q: "Una marca sencilla usa:", options: ["Los mismos pocos colores, fuentes y tu nombre en cada gráfico", "Colores nuevos cada día", "Ningún nombre", "Logos copiados"], answer: 0, why: "La coherencia te hace reconocible." },
      { objective: "O3", q: "¿Qué imagen NO está bien usar?", options: ["Tu propia foto de tu trabajo", "Una imagen con la licencia correcta", "Una foto que copiaste del sitio de otra empresa", "Un elemento de plantilla de Canva que tienes permiso de usar"], answer: 2, why: "Usa solo imágenes que tienes derecho a usar." },
      { objective: "O4", q: "¿Quién debe recibir tus correos de marketing?", options: ["Todas las direcciones que encuentres", "Listas de correos compradas", "Desconocidos al azar", "Las personas que aceptaron recibir tus mensajes"], answer: 3, why: "Escribe a quienes eligieron saber de ti." },
      { objective: "O4", q: "¿Qué agencia de EE. UU. publica la guía que explica CAN-SPAM para empresas?", options: ["El Departamento de Transporte", "La NASA", "La Comisión Federal de Comercio (FTC)", "Solo el Servicio Postal"], answer: 2, why: "La FTC publica la guía de cumplimiento de CAN-SPAM." },
      { objective: "O4", q: "Un correo de ventas tiene el asunto “Tu cuenta está suspendida”. Esto es:", options: ["Buen marketing", "Engañoso y contrario a CAN-SPAM", "Obligatorio", "Un aviso"], answer: 1, why: "El asunto debe reflejar de qué trata el mensaje." },
      { objective: "O4", q: "Si un proveedor envía tus correos de marketing, ¿quién es responsable de cumplir CAN-SPAM?", options: ["Tú sigues siéndolo", "Solo el proveedor", "Nadie", "El cliente"], answer: 0, why: "La FTC dice que sigues siendo responsable." },
      { objective: "O5", q: "“#ad” al principio de una publicación es un ejemplo de:", options: ["Una llamada a la acción", "Una plantilla", "Un aviso", "Alcance"], answer: 2, why: "Les dice a los lectores que hay una conexión pagada." },
      { objective: "O5", q: "Usar la IA para escribir reseñas de cinco estrellas para tu tienda es:", options: ["Engañoso y no está permitido", "Marketing inteligente", "Obligatorio", "Aceptable si suenan reales"], answer: 0, why: "Las reseñas falsas engañan a los clientes." },
      { objective: "O5", q: "¿Dónde debes revisar las reglas actuales de publicidad en EE. UU.?", options: ["En un hilo de comentarios cualquiera", "Solo en un chat de IA", "Con un competidor", "En las páginas de orientación para empresas de la FTC"], answer: 3, why: "Las reglas cambian; la FTC es la fuente oficial." },
      { objective: "O6", q: "El alcance mide:", options: ["Cuántos compraron", "Cuántas personas vieron tu publicación", "Tu ganancia", "La edad de tus seguidores"], answer: 1, why: "El alcance es cuántas personas la vieron." },
      { objective: "O6", q: "El número meta principal de una publicación de oferta suele ser:", options: ["Solo los guardados", "Los clics o las reservas", "El tamaño de la fuente", "La cantidad de hashtags"], answer: 1, why: "Las ofertas buscan que la gente actúe." },
      { objective: "O6", q: "Cuando le pides a la IA que analice tus resultados, debes compartir:", options: ["Nombres y teléfonos de clientes", "Tus contraseñas", "Números de tarjeta", "Solo números, sin nombres de clientes"], answer: 3, why: "Mantén la información privada fuera de las herramientas de IA." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      2,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Perfil del cliente",
        objective: "O1",
        notYet: "Falta el perfil o describe a \"todo el mundo\".",
        meets: "Un párrafo sobre quién es el cliente, qué necesita, qué le preocupa y dónde está en línea.",
        exceeds: "Cada publicación y el correo le hablan claramente a este cliente."
      },
      {
        name: "Cinco publicaciones",
        objective: "O2",
        notYet: "Menos de cinco publicaciones, o una tiene un dato sin revisar o una afirmación que no puedes probar.",
        meets: "Cinco publicaciones de distintos tipos, cada una con una llamada a la acción y con los datos revisados.",
        exceeds: "Las publicaciones suenan como el dueño, no como un borrador genérico de IA."
      },
      {
        name: "Gráficos",
        objective: "O3",
        notYet: "Faltan gráficos, están llenos de palabras o usan imágenes que no tienes derecho a usar.",
        meets: "Un gráfico limpio para cada publicación con los mismos colores y fuentes de la marca.",
        exceeds: "Usa fotos reales del trabajo del propio negocio."
      },
      {
        name: "Correo de marketing",
        objective: "O4",
        notYet: "El asunto engaña, o falta la dirección o la opción para darse de baja.",
        meets: "Asunto honesto, queda claro que es una oferta, dirección física y opción para darse de baja.",
        exceeds: "También dice cómo se respetarán las bajas en un plazo de 10 días hábiles."
      },
      {
        name: "Hoja de seguimiento",
        objective: "O6",
        notYet: "No hay hoja de seguimiento, o no hay un número meta por publicación.",
        meets: "Una hoja con un número meta para cada publicación y dónde encontrar el resultado.",
        exceeds: "Los resultados están anotados y el plan de la semana siguiente se basa en ellos."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Negocios que siguen publicando cada semana durante al menos cuatro semanas después del curso (encuesta de seguimiento)",
      "Dueños que dicen tener más reservas, llamadas o ventas gracias al marketing en línea en un plazo de 60 días",
      "Negocios que agregan a cada correo de marketing un pie que cumple la ley CAN-SPAM"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini) y el plan gratuito de Canva",
      "Google Sheets o Excel para la hoja de seguimiento",
      "Algunas fotos reales del trabajo del negocio, si las hay",
      "Unos 60 minutos para las lecciones y las comprobaciones, más una semana para publicar y hacer el seguimiento"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; muestra un prompt y una plantilla de Canva en una pantalla compartida.",
      "Pide a las personas que usen su propio negocio, o uno de práctica, para que el kit quede listo para usar.",
      "Revisa en cada correo el asunto honesto, la dirección y la opción para darse de baja antes de que alguien lo envíe.",
      "Recuerda a las personas que nunca peguen nombres ni datos de contacto de clientes en las herramientas de IA.",
      "Califica el kit final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

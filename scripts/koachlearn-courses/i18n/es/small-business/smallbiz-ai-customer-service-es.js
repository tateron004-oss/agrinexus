"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-customer-service.js). See scripts/koachlearn-courses/README.md, "Translations".

const FTC_REVIEWS = { name: "FTC: Regla sobre reseñas y testimonios de consumidores, preguntas y respuestas (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC: Regla final que prohíbe reseñas y testimonios falsos (agosto de 2024, en inglés)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service-es",
  lang: "es",
  translationOf: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "IA para atención al cliente y comunicación",
  skills: "Escribir preguntas frecuentes para clientes, Crear plantillas de respuesta, Definir la voz de tu marca, Responder reseñas, Manejar clientes molestos, Mantener privados los datos de los clientes",
  outcome: "armar con ayuda de la IA un kit de atención al cliente para tu negocio: una lista de las diez preguntas más frecuentes de tus clientes, cinco plantillas de respuesta con la voz de tu marca, y una respuesta tranquila a un cliente molesto y a una reseña pública, todo revisado por ti antes de usarlo.",
  about: [
    "Este curso es para dueños y empleados de pequeños negocios que atienden a clientes por teléfono, mensajes de texto, correo, mensajes en redes sociales y reseñas en línea: restaurantes, salones de belleza, tiendas, servicios de limpieza y de reparación, y food trucks.",
    "Vas a usar un asistente de IA gratis para responder más rápido las mismas preguntas, mantener tus respuestas amables y parejas, responder reseñas de la forma correcta y calmar a clientes molestos sin regalar el negocio. Tú sigues al mando de cada respuesta.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tus tareas se suman en un kit de atención al cliente que puedes usar al día siguiente."
  ],
  finalTask: "Arma tu kit de atención al cliente en un solo documento: la voz de tu marca (tres palabras y una lista de lo que sí y lo que no), una lista con tus diez preguntas más frecuentes y sus respuestas revisadas, cinco plantillas de respuesta con marcadores, una respuesta a un cliente molesto real o de ejemplo y una respuesta a una reseña pública. Tú revisas cada dato y ningún dato privado de clientes entra en la herramienta de IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños y empleados de pequeños negocios que atienden a los clientes por teléfono, mensajes de texto, correo, redes sociales y reseñas en línea: restaurantes, salones de belleza, tiendas, servicios de limpieza, talleres de reparación y camiones de comida.",
    startingPoint: "Responden preguntas de clientes todos los días, muchas veces las mismas, y a veces responden reseñas. Usan poco la IA para responder y no tienen por escrito preguntas frecuentes, una voz de marca ni plantillas.",
    gap: "Responder las mismas preguntas una por una toma tiempo, las respuestas pueden sonar distintas según quién conteste, y una queja o reseña mal manejada puede costar clientes. Los dueños necesitan un kit de atención al cliente revisado y uniforme, hecho con ayuda de la IA, sin dejar de ser honestos, siguiendo la regla de reseñas de la FTC y manteniendo privados los datos de los clientes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: un teléfono inteligente o una computadora usados entre un cliente y otro",
      "Tiempo: lecciones de unos 5 minutos que caben en un día de trabajo ocupado",
      "Reglas: la regla de reseñas de la FTC prohíbe las reseñas positivas falsas o pagadas; los reclamos por lesiones van a un profesional o a la aseguradora",
      "Privacidad: ningún nombre, dato de tarjeta ni información de contacto de clientes en herramientas de IA"
    ],
    prerequisites: "\"Introducción a la IA para pequeños negocios\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las preguntas más comunes de tus clientes", action: "escribir preguntas frecuentes con ayuda de la IA", standard: "con diez preguntas y cada respuesta revisada contra lo que de verdad haces" },
    { id: "O2", condition: "Con la forma en que quieres que suene tu negocio", action: "describir la voz de tu marca y hacer que la IA escriba con ella", standard: "con tres palabras de voz y una lista de lo que sí y lo que no, puestas al principio del chat" },
    { id: "O3", condition: "Usando un asistente de IA", action: "crear cinco plantillas de respuesta reutilizables con marcadores", standard: "con la voz de tu marca, revisadas y guardadas donde las puedas copiar rápido" },
    { id: "O4", condition: "Con una reseña en línea positiva o negativa", action: "escribir con ayuda de la IA una respuesta honesta y tranquila", standard: "con cada afirmación verdadera y sin reseñas falsas ni pagadas" },
    { id: "O5", condition: "Con un cliente molesto y tus límites de reembolso y de volver a hacer el trabajo", action: "escribir una respuesta usando el método EDRA", standard: "ofreciendo solo una solución que de verdad darías" },
    { id: "O6", condition: "Con tus preguntas frecuentes, tus plantillas y tus respuestas", action: "armar un kit de atención al cliente que mantenga privados los datos de los clientes", standard: "en un solo documento, con cada dato revisado y sin datos reales de clientes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Respuestas diarias más rápidas y amables",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar las preguntas más comunes y armar tus preguntas frecuentes",
          minutes: 5,
          goal: "Hacer una lista de las preguntas más comunes de tus clientes y convertirlas en preguntas frecuentes revisadas.",
          text: [
            "La mayoría de los negocios responden las mismas diez preguntas una y otra vez: horario, precios, estacionamiento, entregas, reservas, devoluciones, formas de pago, tiempos de espera, alergias o materiales, y \"¿ustedes hacen...?\".",
            "Primero escríbelas de memoria, de tus mensajes de texto y de tus mensajes en redes. Luego dale a un asistente de IA tus respuestas reales en borrador y pídele que las convierta en preguntas frecuentes claras: \"Estas son mis respuestas en borrador. Haz una lista corta de preguntas frecuentes para el sitio web de mi salón de uñas. Amable, con palabras sencillas.\"",
            "Revisa cada respuesta contra lo que de verdad haces. Unas preguntas frecuentes en tu sitio web o en un letrero son una promesa a los clientes."
          ],
          steps: ["Haz una lista de las diez preguntas que más escuchas.", "Escribe tu respuesta real a cada una, en borrador.", "Pídele a la IA que las convierta en preguntas frecuentes claras.", "Revisa cada respuesta y luego publícala en tu sitio, tu página de redes o tu mostrador."],
          words: [["Preguntas frecuentes", "una lista de preguntas comunes y sus respuestas (en inglés, FAQ)."]],
          slides: [
            { title: "Las mismas diez preguntas", bullets: ["Horario, precios, estacionamiento, entregas", "Reservas, devoluciones, formas de pago", "\"¿Ustedes hacen...?\""] },
            { title: "Arma las preguntas frecuentes", bullets: ["Haz la lista de preguntas", "Escribe tus respuestas reales en borrador", "Pídele a la IA que las haga claras y amables"] },
            { title: "Revisa antes de publicar", bullets: ["Las preguntas frecuentes son una promesa", "Cada respuesta debe coincidir con lo que de verdad haces"] }
          ],
          tryIt: "Escribe las diez preguntas más comunes de tus clientes con una respuesta en borrador para cada una. Pídele a un asistente de IA que haga con ellas una lista corta y amable de preguntas frecuentes, y luego revisa cada respuesta.",
          youCanNow: "armar preguntas frecuentes revisadas a partir de las preguntas reales de tus clientes.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué tus preguntas frecuentes son como una promesa a tus clientes?", options: ["Porque los clientes van a confiar en lo que dicen", "Porque son un contrato legal", "Porque las escribió la IA", "Porque se publican una sola vez"], answer: 0, why: "Los clientes actúan según tus preguntas frecuentes, así que cada respuesta debe ser verdad." },
            { objective: "O1", q: "Las preguntas frecuentes de la IA dicen que ofreces estacionamiento gratis, pero no es así. ¿Qué harías?", options: ["Dejarlo para atraer clientes", "Corregir la respuesta para que diga lo que de verdad haces", "Agregar un pequeño \"tal vez\"", "Pedirle a la IA que quite todas las respuestas"], answer: 1, why: "Las respuestas de las preguntas frecuentes salen de tus políticas reales, revisadas por ti." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Definir la voz de tu marca",
          minutes: 4,
          goal: "Describir cómo suena tu negocio y hacer que la IA escriba con esa voz.",
          text: [
            "La voz de tu marca es cómo suena tu negocio. Una taquería familiar puede ser cálida y juguetona; un preparador de impuestos, tranquilo y profesional; una barbería, relajada y de barrio.",
            "Elige tres palabras para tu voz y escribe una lista corta de lo que sí y lo que no: \"Sí: usar el nombre de pila, dar las gracias, ser breve. No: usar lenguaje de chat, escribir todo en mayúsculas, prometer horarios.\"",
            "Dale esto a la IA al principio de una conversación: \"Escribe con esta voz en cada respuesta.\" Así cada respuesta suena al mismo negocio, sin importar quién de tu equipo la envíe."
          ],
          steps: ["Elige tres palabras de cómo quieres sonar.", "Escribe tres cosas que sí y tres que no.", "Pégalas al principio de una conversación.", "Pide una respuesta de ejemplo y revisa que suene bien."],
          words: [["Voz de marca", "la forma en que suena un negocio en sus mensajes."], ["Parejo", "igual cada vez."]],
          slides: [
            { title: "¿Cómo suena tu negocio?", bullets: ["Taquería: cálida, juguetona", "Preparador de impuestos: tranquilo, profesional", "Barbería: relajada, de barrio"] },
            { title: "Escríbelo", bullets: ["Tres palabras para tu voz", "Tres cosas que sí y tres que no"] },
            { title: "Úsala con la IA", bullets: ["Pégala al principio de la conversación", "Cada respuesta suena a tu negocio"] }
          ],
          tryIt: "Escribe tus tres palabras de voz y tu lista de lo que sí y lo que no. Pégalas en un asistente de IA y pídele una respuesta a \"¿Abren el domingo?\" ¿Suena a ti?",
          youCanNow: "describir la voz de tu marca y conseguir respuestas de la IA que suenen a tu negocio.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es la voz de una marca?", options: ["El teléfono de tu negocio", "Los colores de tu logo", "Cómo suena tu negocio en los mensajes", "Un saludo grabado"], answer: 2, why: "La voz de la marca es la forma en que suena tu negocio cuando habla con los clientes." },
            { objective: "O2", q: "Quieres que cada respuesta de la IA suene a tu panadería. ¿Qué harías?", options: ["Esperar que adivine", "Pedir un tono nuevo cada vez", "Escribir todo en mayúsculas para sonar emocionado", "Poner tus palabras de voz y tu lista de lo que sí y lo que no al principio del chat"], answer: 3, why: "Darle tu voz a la IA al principio ayuda a que cada respuesta suene igual." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Plantillas de respuesta para mensajes, textos y correos",
          minutes: 5,
          goal: "Hacer plantillas de respuesta que se puedan reutilizar, con marcadores.",
          text: [
            "Una plantilla de respuesta es una respuesta lista con espacios en blanco. Llenas los espacios cada vez, así que respondes en segundos sin volver a escribir.",
            "Plantillas útiles: confirmación de reserva, recordatorio de cita, pedido listo, voy tarde, perdón, se nos acabó un artículo, y gracias después de una visita. Pregúntale a la IA: \"Con la voz de mi marca, escribe cinco plantillas cortas de mensaje de texto para un negocio de lavado de autos a domicilio. Usa [nombre del cliente], [fecha] y [hora] como espacios.\"",
            "Guarda las plantillas en las notas de tu teléfono o en atajos de texto, o en tu herramienta de reservas si permite respuestas guardadas. Nunca pegues en la IA nombres, teléfonos o datos de tarjeta de clientes reales para hacerlas; usa los espacios."
          ],
          steps: ["Elige cinco situaciones a las que respondes seguido.", "Pídele a la IA una plantilla corta para cada una, con espacios entre corchetes.", "Revisa la redacción y los datos.", "Guárdalas donde puedas copiarlas rápido."],
          words: [["Plantilla de respuesta", "una respuesta guardada con espacios que llenas cada vez."], ["Marcador", "un espacio como [nombre del cliente] que luego llenas con los datos reales."]],
          slides: [
            { title: "Responde en segundos", bullets: ["Una plantilla es una respuesta lista con espacios", "Llena [nombre del cliente], [fecha], [hora]"] },
            { title: "Cinco plantillas útiles", bullets: ["Confirmación y recordatorio de reserva", "Pedido listo; voy tarde", "Se nos acabó; gracias"] },
            { title: "Seguras y a la mano", bullets: ["Notas del teléfono, atajos o respuestas guardadas", "Usa espacios, no datos reales de clientes"] }
          ],
          tryIt: "Pídele a la IA cinco plantillas de respuesta con la voz de tu marca y con [espacios]. Revísalas y guárdalas donde puedas copiarlas rápido.",
          youCanNow: "hacer y guardar plantillas de respuesta que te permiten contestar a los clientes rápido y de forma pareja.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una plantilla de respuesta?", options: ["Un mensaje que reutilizas con espacios para llenar", "Una respuesta de una sola vez", "La reseña de un cliente", "Una lista de precios"], answer: 0, why: "Una plantilla es una respuesta lista con espacios que llenas cada vez." },
            { objective: "O3", q: "Quieres una plantilla para \"tu pedido está listo\". ¿Qué le darías a la IA?", options: ["El nombre y el teléfono de un cliente real", "El número de tu tarjeta", "Espacios como [nombre del cliente] y [hora]", "Nada"], answer: 2, why: "Los espacios dejan fuera los datos privados y hacen que la plantilla se pueda reutilizar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Respuestas diarias más rápidas y amables",
        questions: [
          { objective: "O1", q: "¿Qué son las preguntas frecuentes (FAQ)?", options: ["Una cotización rápida", "Una lista de preguntas comunes y sus respuestas", "Una pregunta gratis", "Un examen final"], answer: 1, why: "Las preguntas frecuentes reúnen preguntas comunes y sus respuestas." },
          { objective: "O1", q: "La IA convirtió tus respuestas en borrador en preguntas frecuentes. ¿Qué sigue?", options: ["Publicarlas sin leer", "Agregar más promesas", "Borrarlas", "Revisar cada respuesta contra lo que de verdad haces"], answer: 3, why: "Las preguntas frecuentes son una promesa a los clientes." },
          { objective: "O2", q: "¿Qué es la voz de marca?", options: ["Cómo suena tu negocio en los mensajes", "La voz del dueño cuando canta", "Tu número de teléfono", "El color de tu logotipo"], answer: 0, why: "La voz de marca es cómo suenas." },
          { objective: "O3", q: "¿Cuál es un buen espacio para una plantilla?", options: ["Tu contraseña", "El número de tarjeta del cliente", "[nombre del cliente]", "Una dirección real"], answer: 2, why: "Los marcadores dejan los datos privados fuera de las herramientas de IA." },
          { objective: "O3", q: "¿Por qué usar plantillas de respuesta?", options: ["Para cobrar más", "Para evitar a los clientes", "Para responder rápido y de forma pareja", "Para esconder los precios"], answer: 2, why: "Las plantillas ahorran tiempo y mantienen la misma calidad en las respuestas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Reseñas, conversaciones difíciles y confianza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Responder reseñas en línea, buenas y malas",
          minutes: 5,
          goal: "Escribir respuestas honestas a reseñas positivas y negativas, y seguir la regla de reseñas de la FTC.",
          text: [
            "Los clientes leen cómo respondes las reseñas. Agradece las buenas reseñas mencionando el platillo o el servicio, en pocas palabras. En las malas reseñas, mantén la calma: da las gracias, di que lamentas su experiencia, arregla lo que puedas e invítalo a contactarte directamente. No discutas en público ni compartas sus datos privados.",
            "La IA te ayuda a escribir una respuesta tranquila cuando estás molesto. Pega el texto de la reseña (no los datos privados de quien la escribió) y pídele: \"Escribe una respuesta corta y amable. Discúlpate, menciona que volvimos a capacitar al personal sobre los tiempos de espera e invítalo a llamarnos.\" Di solo lo que sea cierto.",
            "Nunca escribas reseñas falsas, no las compres ni uses la IA para hacerlas. La Comisión Federal de Comercio (FTC), la agencia de Estados Unidos que protege a los consumidores, tiene una regla vigente desde octubre de 2024 que prohíbe las reseñas y los testimonios falsos, incluidos los hechos con IA, y pagar por reseñas solo si son positivas. Lee la página de preguntas y respuestas de la FTC para saber qué está permitido."
          ],
          steps: ["Lee la reseña dos veces y espera si estás enojado.", "Pídele a la IA un borrador corto y amable.", "Asegúrate de que cada afirmación sea cierta.", "Invita a los clientes descontentos a contactarte directamente.", "Nunca escribas, compres ni inventes reseñas."],
          words: [["Reseña", "la calificación y el comentario público de un cliente sobre tu negocio."], ["FTC", "Comisión Federal de Comercio: la agencia de Estados Unidos que protege a los consumidores de prácticas comerciales injustas y engañosas."], ["Testimonio", "lo que dice un cliente elogiando a un negocio, usado en su publicidad."]],
          slides: [
            { title: "Reseñas buenas", bullets: ["Da las gracias, menciona lo que le gustó", "Que sea corto y real"] },
            { title: "Reseñas malas", bullets: ["Mantén la calma; espera si estás enojado", "Agradece, discúlpate, arregla lo que puedas", "Invítalo a contactarte directamente"] },
            { title: "La regla de la FTC sobre reseñas falsas", bullets: ["Prohíbe reseñas falsas, incluidas las hechas con IA", "Prohíbe pagar solo por reseñas positivas", "Vigente desde octubre de 2024: consulta ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Busca una reseña real de tu negocio (o escribe una mala reseña de ejemplo sobre un pedido tardío). Usa la IA para redactar una respuesta tranquila, revisa que cada afirmación sea cierta y edítala con tu voz.",
          youCanNow: "responder reseñas buenas y malas con calma y honestidad, sin romper la regla de la FTC sobre reseñas falsas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué práctica con reseñas prohíbe la regla de la FTC?", options: ["Responder a las malas reseñas", "Pagarles a los clientes solo si dejan reseñas positivas", "Agradecerles a los clientes por sus reseñas", "Pedirles a todos los clientes reseñas honestas"], answer: 1, why: "La regla de la FTC prohíbe premiar solo las reseñas positivas." },
            { objective: "O4", q: "Una reseña muy dura te hace enojar. ¿Qué harías?", options: ["Responder de inmediato en mayúsculas", "Publicar una reseña buena falsa para equilibrar", "Pedirles a tus amigos que discutan con quien la escribió", "Esperar, volver a leerla y luego escribir una respuesta tranquila y verdadera"], answer: 3, why: "Esperar te ayuda a responder con calma y honestidad." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Calmar a un cliente molesto",
          minutes: 5,
          goal: "Usar un método sencillo de cuatro pasos, con ayuda de la IA, para responder a un cliente molesto.",
          text: [
            "Un método sencillo funciona para la mayoría de las quejas: Escuchar, Disculparse, Resolver, Agradecer (EDRA). Escucha toda la queja, discúlpate por la experiencia, ofrece una solución justa que de verdad puedas dar y agradécele por decírtelo.",
            "Decide tus límites antes de necesitarlos: cuándo das un reembolso, vuelves a hacer el trabajo, haces un descuento o regalas algo. La IA puede redactar el mensaje, pero la solución la eliges tú. No dejes que la IA prometa algo que no has aceptado.",
            "Si un cliente amenaza, acosa o menciona lesiones, seguridad o acciones legales, mantén la respuesta corta, no admitas culpa por escrito y habla con un profesional o con tu aseguradora."
          ],
          steps: ["Escuchar: lee u oye toda la queja.", "Disculparte por la experiencia.", "Resolver: ofrece una solución justa dentro de tus límites.", "Agradecerle por decírtelo.", "Pídele a la IA el borrador y luego revisa que la promesa sea una que vas a cumplir."],
          words: [["EDRA", "Escuchar, Disculparse, Resolver, Agradecer: un método para las quejas (en inglés, LAST)."], ["Escalar", "pasar un problema serio al dueño, a un profesional o a una aseguradora."]],
          slides: [
            { title: "El método EDRA", bullets: ["Escuchar", "Disculparse", "Resolver", "Agradecer"] },
            { title: "Fija primero tus límites", bullets: ["Cuándo reembolsas, rehaces o descuentas", "Tú eliges la solución, no la IA"] },
            { title: "Cuándo escalar", bullets: ["Amenazas o acoso", "Lesiones, seguridad o reclamos legales", "Sé breve; llama a un profesional o a tu aseguradora"] }
          ],
          tryIt: "Escribe en tres líneas tus límites para reembolsos y para rehacer trabajos. Luego usa la IA para redactar una respuesta EDRA a: \"Mi pastel era del sabor equivocado y la fiesta se arruinó.\" Revisa que la solución sea una que de verdad darías.",
          youCanNow: "responder a un cliente molesto con el método EDRA y una solución justa y real.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es el primer paso del método EDRA?", options: ["Resolver", "Agradecer", "Escuchar", "Disculparse"], answer: 2, why: "El método EDRA empieza por escuchar al cliente." },
            { objective: "O5", q: "La respuesta de la IA a un cliente molesto ofrece un reembolso completo más un mes de servicio gratis, más de lo que permiten tus límites. ¿Qué harías?", options: ["Cambiarla por una solución dentro de tus límites", "Mandarla así", "Quitar la disculpa", "Ignorar al cliente"], answer: 0, why: "Tú eliges una solución justa dentro de los límites que fijaste, no la IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Privacidad, honestidad y tu kit de atención al cliente",
          minutes: 5,
          goal: "Juntar tus herramientas de atención y mantener privados los datos de los clientes.",
          text: [
            "Los clientes te confían sus nombres, teléfonos, direcciones y a veces sus datos de tarjeta. Mantén todo eso fuera de las herramientas de IA. Trabaja con marcadores y llena tú los datos reales en tu teléfono o tu sistema de reservas.",
            "Si usas un chatbot en tu sitio web o en tus mensajes, dile a los clientes que están hablando con un ayudante automático y dales una forma de llegar a una persona. Revisa con regularidad lo que dice.",
            "Ahora junta todo en un documento: la voz de tu marca, tus preguntas frecuentes, tus plantillas, tu método EDRA con tus límites y tu respuesta a reseñas. Compártelo con tu personal para que todos respondan de la misma manera."
          ],
          steps: ["Revisa que cada plantilla use marcadores, no datos reales.", "Si usas un chatbot, avisa que es automático y ofrece a una persona.", "Junta voz, preguntas frecuentes, plantillas, límites EDRA y respuestas a reseñas en un documento.", "Compártelo con tu equipo."],
          words: [["Chatbot", "un programa automático que responde mensajes."], ["Datos de clientes", "información sobre tus clientes, como nombres, teléfonos y pedidos."]],
          slides: [
            { title: "Mantén privados los datos de los clientes", bullets: ["Nada de nombres con teléfonos, direcciones o tarjetas en la IA", "Usa marcadores; llena tú los datos"] },
            { title: "Si usas un chatbot", bullets: ["Di que es automático", "Da una forma de llegar a una persona", "Revisa sus respuestas seguido"] },
            { title: "Tu kit de atención al cliente", bullets: ["Voz de marca y preguntas frecuentes", "Plantillas y límites EDRA", "Respuestas a reseñas, compartidas con tu equipo"] }
          ],
          tryIt: "Tarea final: pon en un documento la voz de tu marca, tus diez preguntas frecuentes, cinco plantillas, una respuesta a un cliente molesto y una respuesta a una reseña. Revisa cada dato y quita cualquier dato real de clientes.",
          youCanNow: "manejar tu atención al cliente con un kit revisado, privado y parejo, hecho con ayuda de la IA.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué compartir tu kit de atención al cliente con tus empleados?", options: ["Para que puedan cambiar los precios", "Para que todos respondan de la misma forma", "Para que se salten la capacitación", "Para que los clientes lo puedan editar"], answer: 1, why: "Un kit compartido mantiene las respuestas iguales en todo tu equipo." },
            { objective: "O6", q: "Estás haciendo plantillas y tienes en tus notas los datos de la tarjeta de un cliente real. ¿Qué harías?", options: ["Pegarlos en la IA para que entienda", "Usarlos como ejemplo de plantilla", "Compartirlos con los empleados en el kit", "Dejarlos fuera de la herramienta de IA y del kit"], answer: 3, why: "Los datos de las tarjetas de los clientes deben quedar fuera de las herramientas de IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Reseñas, conversaciones difíciles y confianza",
        questions: [
          { objective: "O4", q: "Un cliente deja una reseña de una estrella por una espera larga. ¿Cuál es la mejor respuesta?", options: ["Agradecer, disculparte, decir qué estás arreglando e invitarlo a contactarte", "Discutir que está equivocado", "Publicar su número de teléfono", "Ignorarla para siempre"], answer: 0, why: "Las respuestas tranquilas y honestas generan confianza." },
          { objective: "O4", q: "Según la regla de la FTC, ¿qué NO está permitido?", options: ["Agradecer a quien deja una reseña", "Responder a una mala reseña", "Pedir a los clientes contentos que dejen reseñas honestas", "Usar la IA para escribir reseñas falsas de clientes"], answer: 3, why: "La regla de la FTC prohíbe las reseñas falsas, incluidas las hechas con IA." },
          { objective: "O5", q: "¿Qué significa la R de EDRA?", options: ["Rendirse", "Resolver", "Reír", "Rechazar"], answer: 1, why: "Escuchar, Disculparse, Resolver, Agradecer." },
          { objective: "O5", q: "¿Quién elige la solución para un cliente molesto?", options: ["Tú, dentro de los límites que fijaste", "La IA", "Solo el cliente", "Un desconocido en internet"], answer: 0, why: "La IA redacta; tú decides la solución." },
          { objective: "O6", q: "El chatbot de tu sitio web debe:", options: ["Hacerse pasar por una persona", "Pedir números de tarjeta en el chat", "Decir que es automático y ofrecer una forma de llegar a una persona", "No revisarse nunca"], answer: 2, why: "La honestidad y un camino hacia una persona generan confianza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para atención al cliente y comunicación",
    questions: [
      { objective: "O1", q: "¿Cuál es una pregunta común de los clientes para poner en tus preguntas frecuentes?", options: ["¿Cuál es tu contraseña?", "¿Cuál es su horario?", "¿Cuál es tu número de banco?", "¿Quiénes son los dueños de tus proveedores?"], answer: 1, why: "El horario es de las preguntas más comunes." },
      { objective: "O1", q: "¿De dónde salen las respuestas de tus preguntas frecuentes?", options: ["De reseñas al azar", "De lo que adivine la IA", "Del sitio de un competidor", "De tus políticas reales, escritas por ti y aclaradas por la IA"], answer: 3, why: "La IA solo da forma a tus respuestas reales." },
      { objective: "O1", q: "¿Por qué revisar las preguntas frecuentes antes de publicarlas?", options: ["Para hacerlas más largas", "La IA siempre tiene razón", "No hace falta", "Son una promesa a los clientes"], answer: 3, why: "Los clientes te van a pedir que cumplas." },
      { objective: "O2", q: "Tres palabras de voz para una panadería familiar podrían ser:", options: ["Enojada, apurada, fría", "Cálida, alegre, sencilla", "Secreta, confusa, larga", "Legal, estricta, dura"], answer: 1, why: "Las palabras de voz describen cómo quieres sonar." },
      { objective: "O2", q: "¿Dónde pones la voz de tu marca para que la IA la use?", options: ["En un recibo", "En tu contraseña", "Al principio de la conversación", "En ningún lado"], answer: 2, why: "Pegarla al principio guía cada respuesta." },
      { objective: "O2", q: "Algo que \"no\" en una lista de voz de marca podría ser:", options: ["Escribir todo en mayúsculas", "Dar las gracias", "Usar el nombre de pila", "Ser breve"], answer: 0, why: "Las mayúsculas pueden sonar a gritos." },
      { objective: "O3", q: "¿Cuál es una buena plantilla de respuesta?", options: ["\"Mándame tu contraseña.\"", "\"Hola, Juana Pérez, 555-0101, tarjeta 4111...\"", "\"Hola, [nombre del cliente], tu pedido está listo para recoger a las [hora].\"", "\"No.\""], answer: 2, why: "Usa marcadores y es clara." },
      { objective: "O3", q: "¿Dónde puedes guardar plantillas para usarlas rápido?", options: ["En las notas del teléfono, atajos de texto o respuestas guardadas", "Solo en tu cabeza", "En la bandeja de entrada de un cliente", "Públicamente en redes sociales"], answer: 0, why: "Las plantillas guardadas se copian rápido." },
      { objective: "O3", q: "Para hacer plantillas con la IA, deberías darle:", options: ["Nombres y números reales de clientes", "Espacios como [fecha] y [hora]", "Datos de tarjetas", "Tus contraseñas"], answer: 1, why: "Usa marcadores, no datos reales." },
      { objective: "O4", q: "Una buena reseña agradece \"la mejor cola de res del barrio\". Una buena respuesta:", options: ["Ofrece dinero por otra reseña", "La ignora", "Le pide su dirección", "Le agradece y menciona la cola de res"], answer: 3, why: "Un agradecimiento corto y personal funciona mejor." },
      { objective: "O4", q: "Pagarle a los clientes solo si dejan reseñas positivas:", options: ["Está prohibido por la regla de la FTC", "Es obligatorio", "Es buena idea", "Solo está bien los fines de semana"], answer: 0, why: "La regla prohíbe las recompensas que dependen de una opinión positiva." },
      { objective: "O4", q: "Cuando una reseña enojada te molesta, primero deberías:", options: ["Escribir reseñas buenas falsas", "Responder de inmediato en mayúsculas", "Publicar los datos del cliente", "Esperar y volver a leerla antes de responder"], answer: 3, why: "Las respuestas tranquilas son mejores respuestas." },
      { objective: "O5", q: "En el método EDRA, el primer paso es:", options: ["Enojarte", "Esconderte", "Escuchar", "Exagerar"], answer: 2, why: "Escucha primero toda la queja." },
      { objective: "O5", q: "¿Por qué fijar límites de reembolso y de rehacer trabajos antes de una queja?", options: ["Para negárselo a todos", "Para ofrecer soluciones justas que de verdad vas a cumplir", "Para confundir al personal", "Lo exige la ley"], answer: 1, why: "Los límites claros permiten decisiones justas y rápidas." },
      { objective: "O5", q: "Un cliente dice que se lastimó en tu local. Deberías:", options: ["Publicarlo en internet", "Pedirle a la IA que admita la culpa con detalle", "Ignorarlo", "Mantener la respuesta corta y hablar con un profesional o tu aseguradora"], answer: 3, why: "Las lesiones y los reclamos legales necesitan asesoría profesional." },
      { objective: "O5", q: "La IA redacta una respuesta que promete comida gratis durante un año. Tú:", options: ["Agregas más promesas", "La envías", "Quitas eso a menos que de verdad lo hayas aceptado", "Le pides al cliente que decida"], answer: 2, why: "Promete solo lo que vas a cumplir." },
      { objective: "O6", q: "Los datos de tarjeta de los clientes deben:", options: ["Quedar fuera de las herramientas de IA", "Pegarse en los chats", "Publicarse en las respuestas", "Guardarse en las plantillas"], answer: 0, why: "Los datos de tarjeta son privados." },
      { objective: "O6", q: "Si usas un chatbot, los clientes deben poder:", options: ["No llegar nunca a nadie", "Llegar a una persona", "Pagar solo con tarjetas de regalo", "Usar solo una palabra"], answer: 1, why: "Un camino hacia una persona genera confianza." },
      { objective: "O6", q: "Tu kit de atención al cliente incluye:", options: ["Contraseñas", "Voz, preguntas frecuentes, plantillas, límites EDRA y respuestas a reseñas", "Números de tarjeta de clientes", "Reseñas falsas"], answer: 1, why: "Esas partes hacen la atención rápida y pareja." },
      { objective: "O6", q: "¿Por qué compartir el kit con el personal?", options: ["Para que todos respondan de la misma manera", "Para que vayan más lento", "Para esconderlo", "No sirve de nada"], answer: 0, why: "Ser parejos genera confianza." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      6,
      8,
      9,
      10,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Voz de la marca",
        objective: "O2",
        notYet: "No hay palabras de voz o no hay lista de lo que sí y lo que no.",
        meets: "Tres palabras de voz y una lista de lo que sí y lo que no.",
        exceeds: "Las respuestas de ejemplo suenan claramente con esa voz."
      },
      {
        name: "Preguntas frecuentes revisadas",
        objective: "O1",
        notYet: "Menos de diez preguntas, o una respuesta que no es verdad.",
        meets: "Diez preguntas comunes con respuestas revisadas contra lo que de verdad haces.",
        exceeds: "Las respuestas son cortas y tienen la voz de la marca."
      },
      {
        name: "Plantillas de respuesta",
        objective: "O3",
        notYet: "Menos de cinco, o plantillas con datos reales de clientes.",
        meets: "Cinco plantillas revisadas con marcadores.",
        exceeds: "Guardadas donde los empleados las pueden copiar rápido."
      },
      {
        name: "Respuesta a un cliente molesto",
        objective: "O5",
        notYet: "Está a la defensiva, u ofrece una solución que no darías.",
        meets: "Sigue el método EDRA y ofrece una solución dentro de tus límites.",
        exceeds: "Tus límites de reembolso y de volver a hacer el trabajo están escritos en el kit."
      },
      {
        name: "Respuesta a una reseña",
        objective: "O4",
        notYet: "Discute, dice algo falso o falta.",
        meets: "Tranquila, honesta y con tu voz.",
        exceeds: "Dice qué estás arreglando e invita al cliente a contactarte."
      },
      {
        name: "Privacidad y datos",
        objective: "O6",
        notYet: "Hay datos reales de clientes en el kit o en el chat de la IA, o datos sin revisar.",
        meets: "No se usaron datos privados de clientes, y cada dato se revisó.",
        exceeds: "El kit anota cómo un chatbot, si se usa, dice que es automático y ofrece hablar con una persona."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que usan sus preguntas frecuentes o sus plantillas cada semana (encuesta de seguimiento a 30 días)",
      "Dueños que responden cada reseña nueva en línea en una semana (encuesta de seguimiento)",
      "Dueños que reportan respuestas más rápidas o mejores reseñas en 90 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con internet",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Una herramienta de documentos gratis, como Google Docs o Microsoft Word, para el kit",
      "Una lista de preguntas reales de clientes y tus límites de reembolso y de volver a hacer el trabajo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Pide a los dueños que traigan sus preguntas comunes reales y una reseña real o de ejemplo.",
      "Usen solo nombres de clientes de ejemplo; nunca peguen en la IA mensajes reales de clientes con nombres o números.",
      "Practiquen en parejas el método EDRA con una queja inventada antes de escribir la respuesta.",
      "Recuerda a los dueños que los reclamos por lesiones van a un profesional o a su aseguradora, no a una respuesta de la IA.",
      "Califica el kit con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

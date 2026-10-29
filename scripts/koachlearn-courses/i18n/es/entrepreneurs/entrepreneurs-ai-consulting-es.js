"use strict";

// Koach Learn course (Spanish translation of entrepreneurs/entrepreneurs-ai-consulting.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-consulting-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-consulting",
  category: "Entrepreneurs",
  name: "Cómo iniciar un negocio de consultoría en IA",
  skills: "Elegir un nicho de consultoría, Crear pruebas con un piloto, Armar paquetes de servicios y ponerles precio, Hacer una auditoría de IA para un cliente, Escribir una propuesta, Manejar datos de clientes y acuerdos",
  outcome: "montar una pequeña práctica de consultoría en IA: elegir un nicho, armar tres servicios con precio, hacer una auditoría de IA para un pequeño negocio real y convertirla en una propuesta de una página con reglas claras para manejar los datos del cliente.",
  about: [
    "Muchos pequeños negocios saben que deberían usar la IA, pero no saben por dónde empezar. Un consultor en IA les ayuda a encontrar los usos correctos, configurar herramientas, capacitar al personal y mantenerse seguros. No necesitas ser programador; necesitas entender los problemas de los negocios, conocer bien las principales herramientas de IA y ser honesto sobre lo que la IA puede y no puede hacer.",
    "Este curso es para personas con experiencia laboral o de negocios que quieren ofrecer ayuda con IA a pequeños negocios, organizaciones sin fines de lucro u organizaciones locales. Vas a elegir un nicho, crear pruebas con un piloto, armar y ponerle precio a tus servicios, encontrar clientes, hacer una auditoría de IA, escribir una propuesta y fijar reglas para los datos de los clientes y los acuerdos.",
    "Cada lección dura unos cinco minutos e incluye una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los temas de impuestos y leyes enlazan a fuentes oficiales; habla con un contador y un abogado sobre tu propia situación."
  ],
  finalTask: "Crea tu kit inicial de consultoría en IA: tu nicho y tu oferta en una oración, tres paquetes de servicios con precio, un cuestionario de auditoría de IA de 10 preguntas, los resultados de una auditoría para un negocio real (sin datos privados), una propuesta de una página para ese negocio y tus reglas escritas para los datos de los clientes.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas con experiencia en negocios o en el trabajo que quieren ofrecer ayuda con IA a pequeños negocios, organizaciones sin fines de lucro u organizaciones locales. La mayoría no programa.",
    startingPoint: "Usan bien las principales herramientas de IA y conocen al menos una industria o tipo de negocio. Pocos han armado o puesto precio a un servicio, hecho una auditoría, escrito una propuesta o puesto reglas para los datos de los clientes.",
    gap: "Los pequeños negocios necesitan ayuda honesta y práctica con la IA, pero los consultores nuevos muchas veces venden servicios vagos, cobran poco por su tiempo, prometen de más o manejan mal los datos de los clientes. Necesitan una oferta enfocada, pruebas reales, paquetes claros, una auditoría que se pueda repetir y reglas de datos por escrito para ganar y conservar clientes.",
    constraints: [
      "Palabras sencillas; no se necesita programar",
      "Dispositivos: una computadora con un asistente de IA gratuito, una hoja de cálculo y correo",
      "Tiempo: unos cinco minutos por lección más tareas con un cliente real o de práctica",
      "Se aplican las reglas de los correos de contacto; la parte de impuestos y legal se revisa con fuentes oficiales, un contador y un abogado",
      "Se quitan los nombres y los datos privados de los clientes antes de que cualquier nota entre en la IA"
    ],
    prerequisites: "Se recomiendan \"Herramientas de IA que todo emprendedor debe conocer\" y \"Ética, riesgos y aspectos legales de la IA\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las industrias y los negocios que conoces", action: "escribir una oferta de consultoría de una oración para un tipo específico de cliente", standard: "nombrando a quién ayudas, el resultado y cómo" },
    { id: "O2", condition: "Con un negocio dispuesto a probar tu ayuda", action: "planear un piloto con un resultado medible y números de antes y después", standard: "con el permiso por escrito del cliente antes de compartir cualquier resultado" },
    { id: "O3", condition: "Con tu oferta y tus costos por hora", action: "crear tres paquetes de servicios con entregables, tiempo, lo que aporta el cliente y precios", standard: "con las cuentas por hora revisadas en una hoja de cálculo, incluido el tiempo de revisión y de seguimiento" },
    { id: "O4", condition: "Con tu red de contactos y tu nicho", action: "planear cómo contactar a diez posibles clientes y preparar el esquema de una charla corta para dueños", standard: "con mensajes personales que incluyan tu dirección y una opción para darse de baja" },
    { id: "O5", condition: "Con un cuestionario de auditoría de 10 preguntas y el dueño de un negocio", action: "hacer una auditoría de IA y recomendar los tres mejores usos de IA", standard: "calificando las ideas según el tiempo ahorrado, el costo, la facilidad y el riesgo, con una protección para cada una" },
    { id: "O6", condition: "Para el negocio que auditaste", action: "escribir una propuesta de una página y tus reglas para los datos de los clientes", standard: "con la situación del cliente en sus propias palabras y los datos borrados o devueltos al final" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Monta tu práctica",
      lessons: [
        {
          objectives: ["O1"],
          title: "Elegir tu nicho y tu oferta",
          minutes: 5,
          goal: "Escribir una oferta de una oración para un tipo específico de cliente.",
          text: [
            "\"Ayudo a los negocios con IA\" es difícil de vender. \"Ayudo a restaurantes independientes a ahorrar 5 horas a la semana en pedidos, horarios y redes sociales con herramientas de IA sencillas\" es fácil de entender y fácil de recomendar.",
            "Elige un nicho donde ya tengas experiencia o contactos: una industria en la que trabajaste, una comunidad a la que perteneces o un tipo de organización (salones de belleza, iglesias, contratistas, recepciones de clínicas, organizaciones sin fines de lucro). Tu experiencia es tu ventaja sobre la gente de tecnología en general.",
            "Pídele ayuda a la IA: \"Trabajé 8 años en [campo]. Haz una lista de las tareas repetidas de los pequeños negocios de este campo que las herramientas de IA podrían acelerar.\" Luego escribe tu oferta: a quién ayudas, qué resultado y cómo."
          ],
          steps: ["Haz una lista de las industrias o comunidades que conoces bien.", "Pídele a la IA tareas repetidas en esos campos que la IA podría acelerar.", "Elige un nicho.", "Escribe tu oferta: a quién ayudas, qué resultado, cómo."],
          words: [["Consultor", "un experto que aconseja a un negocio y le ayuda a hacer cambios."], ["Nicho", "un tipo específico de cliente en el que te enfocas."], ["Oferta", "una frase clara de a quién ayudas, qué resultado y cómo."]],
          slides: [
            { title: "Lo específico vende", bullets: ["No \"Ayudo a los negocios con IA\"", "\"Ayudo a restaurantes independientes a ahorrar 5 horas a la semana\""] },
            { title: "Usa lo que conoces", bullets: ["Una industria en la que trabajaste", "Una comunidad a la que perteneces", "Tu experiencia es tu ventaja"] },
            { title: "Escribe tu oferta", bullets: ["A quién ayudas", "Qué resultado", "Cómo"] }
          ],
          tryIt: "Elige tu nicho con ayuda de la IA y escribe tu oferta en una oración: a quién, qué resultado, cómo.",
          youCanNow: "describir una oferta de consultoría en IA enfocada que los clientes entienden rápido.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un nicho en la consultoría?", options: ["Un tipo específico de cliente en el que te enfocas", "Todos los negocios del país", "Un tipo de herramienta de IA", "Tu tarifa por hora"], answer: 0, why: "Un nicho te permite entender a fondo los problemas de los clientes." },
            { objective: "O1", q: "Tu oferta dice \"Ayudo a los negocios con la IA\". ¿Qué haces?", options: ["Dejarla amplia", "Nombrar a quién ayudas, el resultado y cómo", "Agregar una lista de todas las herramientas de IA", "Quitar la oferta"], answer: 1, why: "Una oferta fuerte es específica para que los clientes la entiendan rápido." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Crear pruebas con un piloto",
          minutes: 5,
          goal: "Planear un pequeño proyecto piloto que te dé un resultado real para mostrar.",
          text: [
            "Los clientes quieren pruebas de que puedes ayudar. Si eres nuevo, haz un piloto: un proyecto pequeño y corto para un negocio (la tienda de un amigo, una organización local sin fines de lucro) por una tarifa baja o gratis, a cambio de permiso para compartir los resultados y un testimonio.",
            "Elige un piloto con un resultado medible: \"Configurar plantillas de respuesta con IA y bajar el tiempo de correo de 6 a 3 horas por semana.\" Mide antes y después.",
            "Escríbelo como un caso de estudio corto: el problema, lo que hiciste, el resultado en números y una cita del dueño. Pide permiso por escrito antes de compartirlo y quita todo lo privado. Nunca inventes resultados ni testimonios."
          ],
          steps: ["Encuentra un negocio dispuesto a probar un piloto.", "Pónganse de acuerdo en un resultado medible.", "Mide antes de empezar.", "Haz el trabajo y mide después.", "Escribe un caso de estudio corto con permiso."],
          words: [["Piloto", "un pequeño proyecto de prueba para mostrar que algo funciona."], ["Caso de estudio", "una historia corta de un proyecto real: problema, trabajo, resultado."], ["Testimonio", "lo que dice un cliente sobre tu trabajo, usado con su permiso."]],
          slides: [
            { title: "¿Eres nuevo? Haz un piloto", bullets: ["Un negocio, corto y pequeño", "Tarifa baja o gratis", "A cambio: permiso para compartir resultados"] },
            { title: "Mídelo", bullets: ["Un resultado claro", "Números de antes y después"] },
            { title: "Escribe un caso de estudio", bullets: ["Problema, trabajo, resultado, cita", "Permiso por escrito", "Nunca inventes resultados"] }
          ],
          tryIt: "Escribe un plan de piloto: qué negocio, un resultado medible, cómo vas a medir antes y después, y qué pides a cambio.",
          youCanNow: "planear un piloto que se convierta en una prueba honesta para tu negocio de consultoría.",
          quickCheck: [
            { objective: "O2", q: "¿Qué debe medir un piloto?", options: ["Cuántas herramientas usaste", "Qué tan largos fueron tus correos", "Un resultado con números de antes y después", "Nada; es gratis"], answer: 2, why: "Un resultado medible convierte un piloto en una prueba honesta." },
            { objective: "O2", q: "Tu piloto le ahorró al cliente 2 horas por semana, no las 5 que esperabas. ¿Qué compartes?", options: ["Decir que ahorró 5 horas", "Ocultar el piloto", "Redondearlo a 4 horas", "El resultado real, con el permiso del cliente"], answer: 3, why: "Nunca inventes resultados; comparte solo lo que de verdad pasó." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Armar paquetes de servicios y ponerles precio",
          minutes: 6,
          goal: "Crear tres paquetes de servicios con entregables y precios claros.",
          text: [
            "Los paquetes son más fáciles de comprar que horas sin límite. Un conjunto común: una Auditoría de IA (revisar el negocio y recomendar los tres mejores usos de IA), una Configuración de IA (configurar herramientas, plantillas y automatizaciones sencillas) y una Capacitación en IA (enseñar al dueño y al personal, con guías escritas). Algunos consultores agregan un plan de soporte mensual.",
            "Para cada paquete escribe: qué recibe el cliente, cuánto tarda, qué necesitas de él y el precio. Pon el precio según el valor y según tu tiempo: calcula tus horas, incluye tiempo para revisar y dar seguimiento y compáralo con lo que cobran servicios parecidos en tu zona.",
            "Obtén un EIN (número federal de identificación de impuestos para negocios) del IRS (la agencia de impuestos de Estados Unidos) si lo necesitas; el IRS dice que es gratis y advierte sobre sitios que cobran por él. Como persona que trabaja por cuenta propia, por lo general pagas el impuesto sobre el trabajo por cuenta propia y puede que necesites pagar impuestos estimados cada trimestre; consulta irs.gov y habla con un contador."
          ],
          steps: ["Escribe tres paquetes: Auditoría, Configuración, Capacitación.", "Para cada uno: entregables, tiempo, qué necesitas del cliente, precio.", "Calcula tus horas, incluyendo revisión y seguimiento.", "Compara con las tarifas locales y revisa tus cálculos.", "Busca lo básico de impuestos en irs.gov y pregúntale a un contador."],
          words: [["Paquete", "un servicio definido con entregables fijos y un precio fijo."], ["Iguala", "una tarifa mensual por ayuda continua."], ["EIN", "Número de Identificación del Empleador: un número federal de impuestos gratuito para un negocio, que da el IRS."]],
          slides: [
            { title: "Tres paquetes", bullets: ["Auditoría de IA: los tres mejores usos de IA", "Configuración de IA: herramientas, plantillas, automatizaciones", "Capacitación en IA: dueño y personal, con guías"] },
            { title: "Cada paquete dice", bullets: ["Qué recibe el cliente", "Cuánto tarda, qué necesitas de él", "El precio"] },
            { title: "Hazlo bien desde el inicio", bullets: ["IRS: el EIN es gratis; cuidado con sitios que cobran", "Impuestos por cuenta propia y estimados", "Pregúntale a un contador"] }
          ],
          sources: [{ name: "IRS: Obtén un Número de Identificación del Empleador (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Escribe tus tres paquetes con entregables, tiempo, lo que necesitas del cliente y un precio para cada uno, y revisa en una hoja de cálculo tus cálculos por hora.",
          youCanNow: "armar paquetes de servicios de consultoría en IA y ponerles un precio claro.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué vender paquetes en vez de horas sin límite?", options: ["Son más fáciles de entender y de comprar para los clientes", "Esconden tu precio", "Quitan la necesidad de entregables", "Significan menos trabajo"], answer: 0, why: "Los paquetes claros les facilitan la compra a los clientes." },
            { objective: "O3", q: "El precio de tu paquete no deja tiempo para las preguntas de seguimiento. ¿Qué haces?", options: ["No hacer seguimiento", "Sumar el tiempo de seguimiento a tus horas y volver a poner el precio", "Cobrar de más después sin decirle al cliente", "Quitar los entregables"], answer: 1, why: "El precio debe incluir el tiempo de revisión y de seguimiento." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Monta tu práctica",
        questions: [
          { objective: "O1", q: "¿Cuál es la oferta de consultoría más fuerte?", options: ["\"Hago cosas de IA\"", "\"Ayudo a restaurantes independientes a ahorrar 5 horas a la semana con herramientas de IA sencillas\"", "\"Ayudo a todos con todo\"", "\"Experto en IA, llámame\""], answer: 1, why: "Dice a quién, qué resultado y cómo." },
          { objective: "O1", q: "¿Cuál es la principal ventaja de elegir un nicho que conoces?", options: ["Evita impuestos", "Siempre es el más rentable", "No necesitas aprender IA", "Entiendes los problemas de los clientes mejor que la gente de tecnología en general"], answer: 3, why: "La experiencia en el campo es tu ventaja." },
          { objective: "O2", q: "Un cliente piloto acepta una tarifa baja. ¿Qué le pides a cambio?", options: ["Permiso para compartir los resultados y un testimonio", "La contraseña de su banco", "Reseñas falsas", "Nada"], answer: 0, why: "Un piloto crea pruebas honestas." },
          { objective: "O2", q: "¿Puedes inventar resultados para un caso de estudio si el piloto salió mal?", options: ["Sí, si nadie revisa", "Sí, si son pequeños", "No, nunca inventes resultados", "Solo en redes sociales"], answer: 2, why: "Los resultados inventados son deshonestos y engañosos." },
          { objective: "O3", q: "¿Qué dice el IRS sobre obtener un EIN?", options: ["Solo los abogados pueden obtenerlo", "Cuesta 500 dólares", "Es gratis; cuidado con los sitios que cobran", "Hay que pagar cada mes"], answer: 2, why: "El IRS da los EIN sin costo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gana y atiende clientes",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar tus primeros clientes",
          minutes: 5,
          goal: "Planear cómo contactar a tus primeros diez posibles clientes.",
          text: [
            "Tus primeros clientes suelen venir de personas que ya te conocen: antiguos compañeros de trabajo, grupos de negocios locales, tu iglesia o tu comunidad, y recomendaciones de tu piloto. Una charla o un taller corto y gratis (\"5 formas en que la IA puede ahorrarle tiempo a tu salón\") es una muy buena manera de conocer dueños.",
            "Escribe mensajes personales, no correos masivos. La IA puede redactarlos: \"Escribe un mensaje de 70 palabras para la dueña de un salón que conocí en un evento de la cámara de comercio, ofreciéndole una revisión de IA gratis de 20 minutos. Amable, sin exagerar.\" Agrega un detalle real.",
            "Si mandas correos de negocios, sigue lo básico de la ley CAN-SPAM de Estados Unidos: remitente y asunto honestos, tu dirección física y una forma clara de darse de baja, respetada en un plazo de 10 días hábiles. No prometas resultados que no puedas demostrar."
          ],
          steps: ["Haz una lista de diez dueños u organizaciones de tu nicho a los que puedas llegar.", "Planea una charla o un taller gratis.", "Redacta mensajes personales con la IA y agrégale a cada uno un detalle real.", "Incluye tu dirección y una forma de darse de baja en los correos de negocios.", "Anota a quién contactaste y su respuesta."],
          words: [["Recomendación", "cuando alguien que conoce tu trabajo te recomienda."], ["Taller", "una sesión corta en la que le enseñas algo útil a un grupo."]],
          slides: [
            { title: "Empieza con quien te conoce", bullets: ["Antiguos compañeros y tu comunidad", "Grupos de negocios locales", "Recomendaciones de tu piloto"] },
            { title: "Enseña para conocer dueños", bullets: ["Una charla o taller corto y gratis", "\"5 formas en que la IA puede ahorrarle tiempo a tu salón\""] },
            { title: "Contacto personal, con las reglas", bullets: ["La IA redacta; tú agregas un detalle real", "CAN-SPAM: datos honestos, dirección, darse de baja", "Nada de promesas que no puedas demostrar"] }
          ],
          sources: [{ name: "FTC: Guía de cumplimiento de la ley CAN-SPAM para negocios (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Haz una lista de diez posibles clientes, escribe tres mensajes personales con ayuda de la IA y prepara el esquema de una charla de 20 minutos para dueños de tu nicho.",
          youCanNow: "llegar a tus primeros clientes a través de personas que conoces, charlas y contactos honestos.",
          quickCheck: [
            { objective: "O4", q: "¿De dónde suelen salir los primeros clientes de consultoría?", options: ["De listas de correos compradas", "De llamadas en frío al azar a otros países", "De personas que ya te conocen y de recomendaciones", "De anuncios pagados desde el primer día"], answer: 2, why: "Tu red de contactos y las recomendaciones son los primeros en confiar en ti." },
            { objective: "O4", q: "La IA hace el borrador de un correo de contacto sin dirección ni opción para darse de baja. ¿Qué haces?", options: ["Enviarlo", "Enviarlo a una lista comprada", "Hacerlo más largo", "Agregar tu dirección física y una línea para darse de baja"], answer: 3, why: "Los correos de contacto de negocios deben incluir una dirección y una opción para darse de baja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer una auditoría de IA",
          minutes: 6,
          goal: "Entrevistar al dueño de un negocio y recomendarle sus tres mejores usos de IA.",
          text: [
            "Una auditoría de IA es una revisión ordenada de cómo funciona un negocio y dónde podría ayudar la IA. Usa un cuestionario corto: ¿Qué tareas toman más tiempo cada semana? ¿Qué preguntan más los clientes? ¿Dónde ocurren los errores? ¿Qué herramientas ya usas? ¿Qué te preocupa de la IA?",
            "Con las respuestas, califica cada posible uso de IA según el tiempo que ahorra, el costo, la facilidad y el riesgo. La IA puede ayudarte a ordenar y calificar (sin el nombre del negocio ni datos privados), pero lo que más importa es tu criterio. Elige los tres mejores: primero los logros rápidos.",
            "Incluye riesgos y protecciones para cada recomendación: quién revisa lo que produce la IA, qué datos deben quedar fuera de las herramientas de IA y todo lo que necesite un abogado o un contador. Ser honesto sobre los límites hace que los clientes confíen más en ti."
          ],
          steps: ["Usa con el dueño un cuestionario de auditoría de 10 preguntas.", "Haz una lista de cada posible uso de IA que escuchaste.", "Califica cada uno según tiempo ahorrado, costo, facilidad y riesgo.", "Elige los tres mejores, primero los logros rápidos.", "Agrega una protección para cada uno: revisión humana, regla de datos, experto si hace falta."],
          words: [["Auditoría de IA", "una revisión ordenada de un negocio para encontrar dónde la IA puede ayudar de forma segura."], ["Logro rápido", "un cambio fácil de hacer que ayuda de inmediato."], ["Protección", "un paso que evita daños, como una revisión humana."]],
          slides: [
            { title: "Las preguntas de la auditoría", bullets: ["¿Qué toma más tiempo?", "¿Qué preguntan más los clientes?", "¿Dónde ocurren errores? ¿Qué te preocupa?"] },
            { title: "Califica y elige", bullets: ["Tiempo ahorrado, costo, facilidad, riesgo", "Los tres mejores, primero los logros rápidos", "La IA ayuda a ordenar; tú decides"] },
            { title: "Agrega protecciones", bullets: ["Quién revisa lo que produce la IA", "Qué datos quedan fuera de las herramientas de IA", "Cuándo llamar a un abogado o contador"] }
          ],
          tryIt: "Escribe tu cuestionario de auditoría de 10 preguntas y úsalo con el dueño de un negocio real (o con un amigo que haga ese papel). Califica las ideas y escribe las tres mejores con sus protecciones.",
          youCanNow: "hacer una auditoría de IA y darle a un negocio tres recomendaciones seguras y prácticas.",
          quickCheck: [
            { objective: "O5", q: "¿Qué recomendaciones de la auditoría deben ir primero?", options: ["Los logros rápidos que son fáciles y ayudan de inmediato", "Las herramientas más caras", "Las ideas con más riesgo", "Cualquier cosa que sugiera la IA"], answer: 0, why: "Los logros rápidos crean confianza y muestran valor desde el principio." },
            { objective: "O5", q: "Quieres que la IA te ayude a ordenar tus notas de la auditoría. ¿Qué haces primero?", options: ["Pegarlas tal como están", "Quitar el nombre del negocio y los datos privados", "Enviárselas por correo a un amigo", "Publicarlas en internet"], answer: 1, why: "Los datos del cliente se quedan fuera de las herramientas de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Propuestas, acuerdos y datos de clientes",
          minutes: 6,
          goal: "Escribir una propuesta de una página y tus reglas para manejar los datos de los clientes.",
          text: [
            "Una propuesta convierte tu auditoría en una decisión. Una página: la situación del cliente en sus propias palabras, las tres recomendaciones, el paquete que sugieres, qué vas a entregar y cuándo, el precio y lo que necesitas de él. La IA puede redactarla con tus notas; edítala para que cada promesa sea una que puedas cumplir.",
            "Firma un acuerdo por escrito antes de empezar un trabajo pagado: alcance, precio, condiciones de pago, plazos, de quién es lo que creas y confidencialidad. Existen plantillas, pero pide a un abogado que revise la tuya.",
            "Escribe reglas para los datos de los clientes y cúmplelas: nunca pongas en herramientas de IA las listas de clientes, los registros financieros, las contraseñas o la información privada de un cliente sin su permiso por escrito y sin una herramienta cuyos términos de datos sean adecuados; usa las cuentas del cliente, no las tuyas, para las herramientas que guardan sus datos; y borra o devuelve sus datos cuando termine el proyecto. La guía de la FTC (la Comisión Federal de Comercio de Estados Unidos) sobre cómo proteger la información personal es una buena base."
          ],
          steps: ["Redacta con la IA una propuesta de una página a partir de tus notas de auditoría.", "Revisa cada promesa y cada precio.", "Prepara un acuerdo por escrito y pide a un abogado que lo revise.", "Escribe tus reglas para los datos de los clientes.", "Comparte las reglas con los clientes antes de empezar."],
          words: [["Propuesta", "un documento corto que ofrece un trabajo específico por un precio específico."], ["Confidencialidad", "mantener en privado la información de un cliente."], ["Alcance", "exactamente qué trabajo está incluido."]],
          slides: [
            { title: "Propuesta de una página", bullets: ["Su situación en sus palabras", "Tres recomendaciones y un paquete", "Entregables, plazos, precio"] },
            { title: "Acuerdo por escrito", bullets: ["Alcance, precio, pago, plazos", "Propiedad y confidencialidad", "Pide a un abogado que lo revise"] },
            { title: "Reglas para datos de clientes", bullets: ["Nada de datos privados en la IA sin permiso escrito", "Usa las cuentas del propio cliente", "Borra o devuelve los datos al final"] }
          ],
          sources: [{ name: "FTC: Cómo proteger la información personal, guía para negocios (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Tarea final: escribe la propuesta de una página para el negocio que auditaste y tus reglas para los datos de los clientes; luego arma tu kit inicial de consultoría: oferta, paquetes, cuestionario, resultados de la auditoría, propuesta y reglas de datos.",
          youCanNow: "ganar y atender clientes de consultoría en IA con propuestas, acuerdos y reglas de datos claras.",
          quickCheck: [
            { objective: "O6", q: "¿Qué cubre un acuerdo de consultoría por escrito?", options: ["Solo el precio", "Tus herramientas favoritas", "El alcance, el precio, el pago, los plazos, la propiedad y la confidencialidad", "La vida personal del cliente"], answer: 2, why: "Un acuerdo claro evita malentendidos." },
            { objective: "O6", q: "El proyecto terminó y todavía tienes los archivos del cliente. ¿Qué haces?", options: ["Guardarlos para siempre", "Usarlos para otro cliente", "Compartirlos como ejemplo", "Borrarlos o devolverlos como dicen tus reglas de datos"], answer: 3, why: "Los datos del cliente deben borrarse o devolverse al terminar un proyecto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Gana y atiende clientes",
        questions: [
          { objective: "O4", q: "¿De dónde suelen venir los primeros clientes de consultoría?", options: ["De personas que ya te conocen y de recomendaciones", "De listas de correos compradas", "De llamadas al azar con voces de IA", "De reseñas falsas"], answer: 0, why: "La confianza y las recomendaciones ganan los primeros clientes." },
          { objective: "O5", q: "¿Cuál es una buena pregunta para una auditoría de IA?", options: ["\"¿Me das tu lista de clientes?\"", "\"¿Cuál es la contraseña de tu banco?\"", "\"¿Te gustan los robots?\"", "\"¿Qué tareas toman más tiempo cada semana?\""], answer: 3, why: "Encuentra dónde la IA puede ahorrar tiempo." },
          { objective: "O5", q: "¿Qué recomendaciones deberían ir primero?", options: ["Los proyectos más caros", "Logros rápidos que son fáciles y ayudan de inmediato", "Las ideas más riesgosas", "Lo que diga la IA"], answer: 1, why: "Los logros rápidos crean confianza y resultados." },
          { objective: "O6", q: "Antes de empezar un trabajo pagado, deberías tener:", options: ["Un acuerdo por escrito, revisado por un abogado", "Solo un apretón de manos", "Nada", "Una publicación en redes sociales"], answer: 0, why: "Los acuerdos evitan malentendidos." },
          { objective: "O6", q: "¿Puedes pegar la lista de clientes de un cliente en una herramienta de IA?", options: ["Sí, si la herramienta es gratis", "Sí, cuando quieras", "Solo con su permiso por escrito y una herramienta cuyos términos de datos sean adecuados", "Solo de noche"], answer: 2, why: "Los datos de los clientes necesitan permiso y protección." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo iniciar un negocio de consultoría en IA",
    questions: [
      { objective: "O1", q: "Un consultor en IA necesita principalmente:", options: ["Ser programador de tiempo completo", "Entender los problemas de los negocios y conocer bien las herramientas de IA", "Tener un centro de datos", "Tener muchos seguidores en redes"], answer: 1, why: "Entender los negocios y conocer las herramientas es lo central." },
      { objective: "O1", q: "Una oferta fuerte incluye:", options: ["Solo tu tarifa por hora", "Solo tu nombre", "Una lista larga de todas las herramientas", "A quién ayudas, el resultado y cómo"], answer: 3, why: "Esas tres cosas la hacen clara." },
      { objective: "O1", q: "Un nicho es:", options: ["Un precio", "Un tipo de modelo de IA", "Una forma legal", "Un tipo específico de cliente en el que te enfocas"], answer: 3, why: "Enfocarte facilita el marketing." },
      { objective: "O2", q: "Un piloto es:", options: ["Un trabajo en una aerolínea", "Un pequeño proyecto de prueba para mostrar que algo funciona", "Un contrato largo", "Un formulario de impuestos"], answer: 1, why: "Los pilotos crean pruebas." },
      { objective: "O2", q: "Un piloto debe tener:", options: ["Diez metas", "Ninguna meta", "Un resultado medible con números de antes y después", "Solo un logotipo"], answer: 2, why: "Los números hacen convincente la prueba." },
      { objective: "O2", q: "Antes de compartir un caso de estudio, necesitas:", options: ["El permiso por escrito del cliente", "Nada", "La aprobación de la IA", "El visto bueno de un competidor"], answer: 0, why: "Respeta la privacidad y la confianza del cliente." },
      { objective: "O3", q: "Los paquetes son mejores que horas sin límite porque:", options: ["Evitan impuestos", "Siempre son más baratos", "Son más fáciles de entender y comprar para los clientes", "No requieren trabajo"], answer: 2, why: "Entregables y precios claros ayudan a los clientes a decidir." },
      { objective: "O3", q: "Un paquete de Auditoría de IA entrega:", options: ["Una revisión del negocio y las mejores recomendaciones de IA", "Un sitio web nuevo", "La declaración de impuestos", "Consejos legales"], answer: 0, why: "Ese es el propósito de la auditoría." },
      { objective: "O3", q: "Al poner precio, incluye tiempo para:", options: ["Nada extra", "Revisión y seguimiento", "Solo traslados", "Solo descansos para café"], answer: 1, why: "El tiempo oculto se come la ganancia." },
      { objective: "O3", q: "Los consultores que trabajan por cuenta propia por lo general pagan:", options: ["Solo una cuota de licencia", "Ningún impuesto", "Solo impuesto sobre las ventas", "El impuesto sobre el trabajo por cuenta propia y muchas veces impuestos estimados trimestrales"], answer: 3, why: "El centro de impuestos para trabajadores por cuenta propia del IRS lo explica." },
      { objective: "O4", q: "Un taller corto y gratis te ayuda a:", options: ["Conocer dueños y mostrar lo que sabes", "Evitar clientes", "Juntar contraseñas", "Saltarte las propuestas"], answer: 0, why: "Enseñar crea confianza." },
      { objective: "O4", q: "Los correos de negocios para buscar clientes deben incluir:", options: ["Una garantía", "La contraseña del cliente", "Una fecha límite falsa", "Tu dirección física y una forma de darse de baja"], answer: 3, why: "Eso es lo básico de la ley CAN-SPAM." },
      { objective: "O5", q: "En una auditoría de IA, calificas las ideas según:", options: ["Qué tan de moda están", "Color y tipo de letra", "Tiempo ahorrado, costo, facilidad y riesgo", "Tu herramienta favorita"], answer: 2, why: "Esto muestra qué ideas vale la pena hacer." },
      { objective: "O5", q: "Antes de pedirle a la IA que te ayude a ordenar las notas de la auditoría, deberías:", options: ["Agregar sus registros bancarios", "Quitar el nombre del negocio y los datos privados", "Publicarlas en internet", "Mandarlas por correo a todos"], answer: 1, why: "Protege la información del cliente." },
      { objective: "O5", q: "Cada recomendación debe incluir:", options: ["Nada más", "Una garantía de resultados", "Un testimonio falso", "Una protección, como quién revisa lo que produce la IA"], answer: 3, why: "Las protecciones hacen seguro el uso de la IA." },
      { objective: "O6", q: "Una propuesta debe describir la situación del cliente:", options: ["De ninguna forma", "Con jerga técnica", "En sus propias palabras", "Con la historia de un competidor"], answer: 2, why: "Sus palabras muestran que escuchaste." },
      { objective: "O6", q: "Un acuerdo por escrito cubre:", options: ["Alcance, precio, pago, plazos, propiedad y confidencialidad", "Solo tu logotipo", "Solo la fecha de inicio", "Nada"], answer: 0, why: "Esto evita disputas." },
      { objective: "O6", q: "¿Quién debería revisar tu plantilla de acuerdo?", options: ["Solo la IA", "Un abogado", "Los clientes de tu cliente", "Nadie"], answer: 1, why: "Los documentos legales necesitan revisión profesional." },
      { objective: "O6", q: "Para las herramientas que guardan los datos de un cliente, lo mejor es usar:", options: ["Tus cuentas personales", "Las propias cuentas del cliente", "Una cuenta pública compartida", "Cualquier herramienta gratis"], answer: 1, why: "Así el cliente mantiene el control de sus datos." },
      { objective: "O6", q: "Al final de un proyecto, los datos del cliente deben:", options: ["Borrarse o devolverse", "Guardarse para siempre", "Compartirse con otros clientes", "Publicarse en internet"], answer: 0, why: "No guardes datos que ya no necesitas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      4,
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Nicho y oferta",
        objective: "O1",
        notYet: "La oferta es vaga o no tiene un cliente claro.",
        meets: "Una oración que nombra a quién, el resultado y cómo.",
        exceeds: "Usa palabras que de verdad usan los clientes del nicho."
      },
      {
        name: "Paquetes de servicios",
        objective: "O3",
        notYet: "Menos de tres paquetes, o precios sin cuentas que los respalden.",
        meets: "Tres paquetes con entregables, tiempo, lo que aporta el cliente y precios, con las cuentas revisadas.",
        exceeds: "Incluye el tiempo de revisión y de seguimiento y explica el valor para el cliente."
      },
      {
        name: "Auditoría de IA",
        objective: "O5",
        notYet: "No hay cuestionario, o hay recomendaciones sin calificación ni protecciones.",
        meets: "Cuestionario de 10 preguntas, una auditoría real y los tres mejores usos calificados con sus protecciones.",
        exceeds: "Las recomendaciones empiezan con logros rápidos y muestran el tiempo que se espera ahorrar."
      },
      {
        name: "Propuesta",
        objective: "O6",
        notYet: "La propuesta es genérica o le falta el alcance o el precio.",
        meets: "Una página con la situación del cliente en sus palabras, el alcance, el precio y los plazos.",
        exceeds: "Incluye un resultado medible y cómo se va a comprobar."
      },
      {
        name: "Reglas para los datos de los clientes",
        objective: "O6",
        notYet: "No hay reglas por escrito, o se pusieron datos privados en la IA.",
        meets: "Reglas por escrito: permiso, cuentas propias del cliente, datos borrados o devueltos al final.",
        exceeds: "También cubre qué herramientas de IA pueden guardar datos del cliente y la revisión de sus condiciones."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que hacen un piloto o una auditoría pagada con un negocio real en 60 días (encuesta de seguimiento)",
      "Primeros clientes de consultoría que pagan y clientes que repiten o llegan por recomendación",
      "Participantes que empiezan otro curso de Koach Learn para emprendedores en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con un asistente de IA gratuito, una hoja de cálculo y correo",
      "El dueño de un negocio real (o un amigo que haga ese papel) para la auditoría",
      "Una plantilla de propuesta de una página",
      "Entre 60 y 75 minutos para las lecciones y las comprobaciones, más la reunión de auditoría"
    ],
    facilitatorNotes: [
      "Forma parejas para que practiquen las entrevistas de auditoría en un juego de roles antes de reunirse con un dueño real.",
      "Deja claro que los resultados de los pilotos y los casos de éxito deben ser reales y compartirse solo con permiso por escrito.",
      "Revisa que se quiten los nombres y los datos privados de los clientes antes de que las notas entren en la IA.",
      "Envía las preguntas de impuestos y de acuerdos a fuentes oficiales, a un contador y a un abogado.",
      "Califica el kit inicial con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};

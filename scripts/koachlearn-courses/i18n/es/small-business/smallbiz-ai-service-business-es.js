"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-service-business.js). See scripts/koachlearn-courses/README.md, "Translations".

const CAN_SPAM = { name: "FTC: Ley CAN-SPAM, guía de cumplimiento para empresas", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC: Regla sobre reseñas y testimonios de consumidores, preguntas y respuestas", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business-es",
  lang: "es",
  translationOf: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "IA para negocios de servicios",
  skills: "Escribir cotizaciones y presupuestos claros, Preparar mensajes de reserva y recordatorio, Hacer listas de control de trabajos, Escribir descripciones de servicios, Dar seguimiento después de un trabajo, Pedir reseñas de la forma correcta",
  outcome: "usar la IA para manejar el papeleo de un negocio de servicios desde la primera llamada hasta el cliente que vuelve: una plantilla de cotización clara, mensajes de reserva y recordatorio, una lista de control del trabajo, un menú de servicios con precios y un mensaje de seguimiento que pide reseñas honestas y más trabajo.",
  about: [
    "Este curso es para personas que venden su tiempo y su habilidad: personal de limpieza de casas, barberos y estilistas, manicuristas, jardineros, plomeros y personas que hacen reparaciones, mudanzas, mecánicos a domicilio, pintores, peluqueros de mascotas y tutores. Muchos de nuestros estudiantes tienen negocios de una sola persona o familiares.",
    "Vas a usar un asistente de IA gratis y documentos y hojas de cálculo sencillos para responder más rápido a los interesados, cotizar con claridad, llegar preparado, terminar cada trabajo con la misma buena calidad y convertir a los clientes contentos en clientes que vuelven y te recomiendan.",
    "Cada lección dura unos cinco minutos y tiene una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un kit para tu negocio de servicios: un menú de servicios con precios, una plantilla de cotización con el alcance, el precio, lo que no incluye y por cuánto tiempo es válida, plantillas de confirmación de reserva y de recordatorio, una lista de control para tu trabajo más común, y un mensaje de seguimiento que agradece al cliente y le pide una reseña honesta y una recomendación.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que venden su tiempo y su oficio: limpieza de casas, barberos y estilistas, técnicas de uñas, jardineros, plomeros y personas de mantenimiento, mudanzas, mecánicos a domicilio, pintores, peluqueros de mascotas y tutores. Muchos tienen negocios de una sola persona o familiares.",
    startingPoint: "Conocen bien su oficio y consiguen trabajo por teléfono, mensajes de texto y recomendaciones. Muchos usan el teléfono para todo y tienen poca experiencia con asistentes de IA, plantillas o herramientas de citas.",
    gap: "Responder tarde, dar presupuestos poco claros y las citas a las que nadie llega cuestan trabajos y dinero. Necesitan papeles listos y claros (menú de servicios, presupuesto, mensajes de citas, lista de verificación y seguimiento) para ganar más trabajos, evitar discusiones y conseguir clientes que regresen.",
    constraints: [
      "Tiempo: los dueños pasan todo el día en los trabajos, así que cada lección dura unos 5 minutos",
      "Dispositivos: muchas veces solo un teléfono",
      "Las reglas de contratos y licencias dependen del estado y del oficio",
      "Los mensajes de publicidad necesitan permiso y una forma de darse de baja; la FTC prohíbe las reseñas falsas o pagadas",
      "Privacidad: nunca pidas números de tarjeta ni identificaciones a los clientes por mensaje de texto o redes sociales"
    ],
    prerequisites: "Ninguno. Quien no conoce los asistentes de IA puede tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tus servicios y precios reales", action: "escribir un menú de servicios que diga qué incluye cada uno, qué cuesta aparte y el precio", standard: "con cada precio y cada cosa incluida revisados por ti" },
    { id: "O2", condition: "Con un trabajo real o de ejemplo", action: "crear una plantilla de presupuesto y llenarla con el alcance, el precio, lo que no incluye y cuánto tiempo es válido", standard: "con el precio fijado según tus propios costos más tu ganancia" },
    { id: "O3", condition: "Con una consulta nueva por mensaje de texto, correo, redes sociales o una llamada perdida", action: "escribir una plantilla de primera respuesta que agradezca, haga las preguntas que necesitas y dé un siguiente paso", standard: "sin pedir números de tarjeta ni identificaciones" },
    { id: "O4", condition: "Con tu política de cancelación", action: "escribir una confirmación de cita y un recordatorio para el día anterior", standard: "con la fecha, el rango de horario, la dirección, el precio y la política incluidos" },
    { id: "O5", condition: "Con tu trabajo más común", action: "crear una lista de verificación del trabajo para antes de llegar, en el lugar y antes de irte", standard: "con los pasos de seguridad de tu oficio y una revisión final incluidos" },
    { id: "O6", condition: "Después de terminar un trabajo", action: "escribir un mensaje de seguimiento que agradezca al cliente y le pida una reseña honesta, una recomendación y la próxima cita", standard: "siguiendo la regla de reseñas de la FTC" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conseguir el trabajo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Un menú de servicios claro",
          minutes: 5,
          goal: "Escribir un menú de servicios con descripciones y precios claros.",
          text: [
            "Los clientes quieren saber qué haces y más o menos cuánto cuesta antes de llamar. Un menú de servicios muestra cada servicio, qué incluye, cuánto tarda y el precio o rango de precios.",
            "Dale a la IA tus servicios y precios reales: \"Escribe un menú de servicios para mi negocio de limpieza de casas: limpieza normal $120 para hasta 2 recámaras, limpieza profunda $220, limpieza de mudanza desde $260. Incluye lo que trae cada una. Palabras sencillas.\" Revisa todo, sobre todo lo que se incluye y lo que no.",
            "Los menús claros evitan discusiones después. Di con claridad qué cuesta extra (dentro del horno, pelo de mascotas, escaleras, traslados de más de 15 millas)."
          ],
          steps: ["Haz una lista de tus servicios y precios reales.", "Escribe lo que se incluye y lo que cuesta extra.", "Pide a la IA que dé formato a un menú claro.", "Revisa cada precio y cada cosa incluida."],
          words: [["Menú de servicios", "una lista de los servicios que ofreces, con lo que incluyen y el precio."], ["Extra (adicional)", "un servicio adicional que cuesta más."]],
          slides: [
            { title: "Lo que el cliente quiere saber primero", bullets: ["Qué haces", "Qué incluye", "Más o menos cuánto cuesta"] },
            { title: "Hazlo con la IA", bullets: ["Dale tus servicios y precios reales", "Pide palabras claras y sencillas"] },
            { title: "Evita discusiones", bullets: ["Di qué cuesta extra", "Ejemplo: horno, pelo de mascotas, traslados de más de 15 millas"] }
          ],
          tryIt: "Escribe tu menú de servicios con al menos tres servicios, lo que incluyen y los extras. Usa la IA para darle formato y luego revisa cada precio.",
          youCanNow: "escribir un menú de servicios claro con lo que incluye, los extras y los precios.",
          quickCheck: [
            { objective: "O1", q: "¿Qué dice un menú de servicios sobre cada servicio?", options: ["Qué incluye, cuánto tarda y el precio", "Solo el nombre del servicio", "Tu dirección de casa y tu número de identificación", "Los precios de tu competencia"], answer: 0, why: "Un menú de servicios dice cada servicio, qué incluye, cuánto tarda y el precio o el rango de precio." },
            { objective: "O1", q: "El menú de la IA dice que la limpieza profunda incluye el interior del horno, pero tú cobras eso aparte. ¿Qué haces?", options: ["Lo dejas y discutes después", "Lo cambias para que diga que el interior del horno cuesta aparte", "Borras la limpieza profunda", "Subes todos los precios"], answer: 1, why: "Revisas cada cosa incluida, y decir claramente qué cuesta aparte evita discusiones después." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir cotizaciones y presupuestos",
          minutes: 6,
          goal: "Hacer una plantilla de cotización clara, justa y que te proteja.",
          text: [
            "Una cotización dice exactamente qué vas a hacer, por cuánto y en qué condiciones. Una buena cotización tiene: cliente y dirección del trabajo, alcance del trabajo (lo que vas a hacer), materiales, precio, lo que no incluye, condiciones de pago, cuándo empieza el trabajo y por cuánto tiempo es válida.",
            "Pide a la IA una plantilla: \"Haz una plantilla de cotización de una página para un pequeño negocio de pintura con espacios para [cliente], [dirección], [alcance], [materiales], [precio], [no incluye], [condiciones de pago], [válida hasta].\" Guárdala en Docs o en Word.",
            "La IA puede ayudarte a describir el alcance con claridad, pero tú fijas el precio con tus propios costos: materiales, tus horas, traslados y ganancia. Para trabajos más grandes, los contratos y las reglas de licencias dependen de tu estado y tu oficio, así que consulta la junta de licencias de contratistas de tu estado o a un profesional."
          ],
          steps: ["Pide a la IA una plantilla de cotización con espacios en blanco.", "Llénala con un trabajo real o de ejemplo.", "Fija el precio con tus costos más la ganancia.", "Anota lo que no incluye y por cuánto tiempo es válida la cotización.", "Revisa las reglas de licencias y contratos para trabajos más grandes."],
          words: [["Cotización", "un precio por escrito para un trabajo específico."], ["Alcance del trabajo", "exactamente lo que harás y lo que no harás en un trabajo."], ["Condiciones de pago", "cuándo y cómo paga el cliente, como un anticipo y el resto al terminar."]],
          slides: [
            { title: "Partes de una buena cotización", bullets: ["Cliente, dirección y alcance del trabajo", "Materiales y precio", "No incluye, condiciones de pago, válida hasta"] },
            { title: "La IA hace la plantilla", bullets: ["Espacios como [alcance] y [precio]", "Guárdala en Docs o en Word"] },
            { title: "Tú fijas el precio", bullets: ["Materiales + horas + traslados + ganancia", "Trabajos grandes: revisa licencias y contratos de tu estado"] }
          ],
          tryIt: "Haz tu plantilla de cotización con la IA y luego llénala para un trabajo real o de ejemplo. Calcula el precio en papel a partir de tus costos.",
          youCanNow: "escribir una cotización clara que fija el alcance, el precio y las condiciones.",
          quickCheck: [
            { objective: "O2", q: "¿Qué le dicen al cliente las \"condiciones de pago\" de un presupuesto?", options: ["De qué color vas a pintar", "Quién es tu ayudante", "Cómo y cuándo paga", "Cuánto va a durar el trabajo"], answer: 2, why: "Las condiciones de pago dicen cómo y cuándo paga el cliente." },
            { objective: "O2", q: "La IA sugiere un precio para tu presupuesto de pintura. ¿Qué haces?", options: ["Lo usas porque la IA conoce el mercado", "Lo duplicas para estar seguro", "Dejas el precio en blanco", "Fijas tú el precio según materiales, horas, traslado y ganancia"], answer: 3, why: "La IA puede ayudar a describir el alcance, pero tú fijas el precio con tus propios costos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Responder rápido a los nuevos interesados",
          minutes: 4,
          goal: "Responder rápido a las consultas nuevas con plantillas que hacen las preguntas correctas.",
          text: [
            "El primer negocio que responde muchas veces se queda con el trabajo. Ten una plantilla lista para cada forma en que la gente te contacta: mensaje de texto, correo, mensajes en redes sociales y llamadas perdidas.",
            "Una buena primera respuesta agradece, hace las dos o tres preguntas que necesitas para cotizar (\"¿Cuántas recámaras? ¿Tiene mascotas? ¿Qué día le queda bien?\") y da un siguiente paso. Pide a la IA que escriba una para cada canal con tu estilo.",
            "Guarda las plantillas en tu teléfono para responder entre trabajos. No pidas a la gente que mande números de tarjeta ni identificaciones por mensaje de texto o redes sociales."
          ],
          steps: ["Haz una lista de las preguntas que necesitas para cotizar.", "Pide a la IA una plantilla de primera respuesta para cada canal.", "Guárdalas en tu teléfono.", "Responde en menos de una hora cuando puedas."],
          words: [["Interesado (prospecto)", "una persona que preguntó por tu servicio pero todavía no ha reservado."], ["Canal", "una forma en que los clientes te contactan, como mensaje de texto, correo o redes sociales."]],
          slides: [
            { title: "La rapidez gana trabajos", bullets: ["La primera respuesta muchas veces se queda con el trabajo", "Una plantilla para cada canal"] },
            { title: "Una buena primera respuesta", bullets: ["Agradece", "Haz las 2 o 3 preguntas que necesitas", "Da el siguiente paso"] },
            { title: "Tenla a mano y segura", bullets: ["Plantillas guardadas en tu teléfono", "Nunca pidas números de tarjeta por mensaje"] }
          ],
          tryIt: "Escribe tus tres preguntas obligatorias. Pide a la IA una plantilla de primera respuesta por mensaje de texto y otra por correo con tu estilo, y guárdalas en tu teléfono.",
          youCanNow: "responder rápido a nuevos interesados con plantillas que reúnen lo que necesitas para cotizar.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde debes guardar tus plantillas de primera respuesta?", options: ["En tu teléfono, para responder entre trabajos", "Solo en una computadora de la casa", "En papel en la oficina", "En ningún lado; escribes cada una desde cero"], answer: 0, why: "Tener las plantillas en el teléfono te deja responder rápido entre trabajos." },
            { objective: "O3", q: "Un cliente nuevo escribe: \"¿Cuánto cobra por cortar el pasto?\". ¿Cuál es una buena primera respuesta?", options: ["\"Mándeme su número de tarjeta para apartar.\"", "Le das las gracias, preguntas el tamaño del jardín y qué día le queda bien, y ofreces un siguiente paso", "Esperas al fin de semana para responder", "Mandas tu lista completa de precios sin saludar"], answer: 1, why: "Una buena primera respuesta agradece, hace las preguntas que necesitas y da un siguiente paso." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conseguir el trabajo",
        questions: [
          { objective: "O1", q: "¿Por qué poner en tu menú de servicios lo que cuesta extra?", options: ["Para confundir a los clientes", "Para evitar discusiones después", "Para cobrar cargos escondidos", "No sirve de nada"], answer: 1, why: "Los extras claros ponen expectativas claras." },
          { objective: "O2", q: "¿Qué va en una cotización?", options: ["Un descuento falso", "Tu contraseña", "El número de tarjeta del cliente", "El alcance del trabajo y por cuánto tiempo es válida la cotización"], answer: 3, why: "El alcance y la vigencia protegen a ambas partes." },
          { objective: "O2", q: "¿Quién fija el precio de una cotización?", options: ["Tú, con tus costos y tu ganancia", "La IA", "Solo el cliente", "Un competidor"], answer: 0, why: "Solo tú conoces tus costos reales." },
          { objective: "O2", q: "¿Dónde revisas las reglas de licencias para trabajos más grandes?", options: ["Con un vecino", "En un chat de IA", "En la junta de licencias de contratistas de tu estado o con un profesional", "En una publicación de redes sociales"], answer: 2, why: "Las licencias dependen de tu estado y tu oficio." },
          { objective: "O3", q: "¿Qué debe incluir la primera respuesta a un interesado?", options: ["Un pedido de su número de tarjeta", "Solo tu precio", "Agradecimiento, las preguntas que necesitas y un siguiente paso", "Nada; espera una semana"], answer: 2, why: "Eso acerca al interesado a una reserva." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer el trabajo y conservar al cliente",
      lessons: [
        {
          objectives: ["O4"],
          title: "Confirmaciones de reserva y recordatorios",
          minutes: 4,
          goal: "Preparar mensajes de reserva y recordatorio que reducen las citas perdidas.",
          text: [
            "Las citas perdidas y llegar a una casa cerrada te cuestan un día de paga. Las confirmaciones y los recordatorios claros ayudan. Una confirmación dice la fecha, el rango de hora de llegada, la dirección, el precio, qué debe hacer el cliente para prepararse y tu política de cancelación.",
            "Pide a la IA: \"Escribe una confirmación de reserva y un recordatorio para el día anterior para mi negocio de peluquería canina a domicilio. Espacios: [nombre], [fecha], [rango de hora], [dirección], [precio]. Incluye nuestra política de cancelación de 24 horas.\"",
            "Muchas herramientas de reservas pueden mandar recordatorios automáticos; revisa la configuración de tu herramienta. Si mandas mensajes o correos de publicidad (no solo recordatorios), pide permiso primero y sigue las reglas de correo de EE. UU. (la ley CAN-SPAM), incluida una opción para darse de baja."
          ],
          steps: ["Escribe tu política de cancelación.", "Pide a la IA una plantilla de confirmación y una de recordatorio.", "Activa recordatorios automáticos en tu herramienta de reservas si los tiene.", "Manda publicidad solo con permiso y con opción para darse de baja."],
          words: [["Cita perdida", "cuando un cliente no se presenta a una cita reservada."], ["Política de cancelación", "tus reglas para cancelar, como avisar con 24 horas."], ["Rango de hora", "un margen de horas de llegada, como de 9 a 11 de la mañana."]],
          slides: [
            { title: "Reduce las citas perdidas", bullets: ["Confirmación justo después de reservar", "Recordatorio el día anterior"] },
            { title: "Una buena confirmación", bullets: ["Fecha, rango de hora, dirección, precio", "Cómo prepararse", "Política de cancelación"] },
            { title: "Automatiza y cumple la ley", bullets: ["Las herramientas de reservas pueden mandar recordatorios", "La publicidad necesita permiso y opción para darse de baja"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Escribe tu política de cancelación en dos líneas. Pide a la IA una plantilla de confirmación y otra de recordatorio para el día anterior con espacios en blanco, y guárdalas.",
          youCanNow: "mandar confirmaciones de reserva y recordatorios que reducen las citas perdidas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué problema ayudan a evitar las confirmaciones y los recordatorios?", options: ["El mal clima", "Precios más altos de los materiales", "Que el cliente no esté o no puedas entrar", "Las reseñas falsas"], answer: 2, why: "La lección dice que cuando el cliente no está o no puedes entrar pierdes un día de pago, y los recordatorios ayudan a evitarlo." },
            { objective: "O4", q: "Quieres mandar un descuento de temporada por mensaje a todos tus clientes anteriores. ¿Qué necesitas primero?", options: ["Nada; los recordatorios y la publicidad son lo mismo", "Un número de teléfono nuevo", "La aprobación de la IA", "Su permiso y una forma de darse de baja"], answer: 3, why: "Los mensajes de publicidad, a diferencia de los recordatorios, necesitan permiso y una forma de darse de baja." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Listas de control para la misma calidad siempre",
          minutes: 5,
          goal: "Convertir lo que sabes en una lista de control que sigues tú y tus ayudantes.",
          text: [
            "Una lista de control hace que cada trabajo salga tan bien como el mejor, aunque estés cansado o lo haga un ayudante. También te ayuda a entrenar a gente nueva.",
            "Di en voz alta o escribe cómo haces tu trabajo más común, de principio a fin, y pide a la IA: \"Convierte estas notas en una lista de control para un servicio normal de jardinería residencial: antes de llegar, en el lugar, antes de irte. Pasos cortos.\" Agrega los pasos de seguridad que exige tu oficio y compáralos con guías oficiales de seguridad o con tu capacitación.",
            "Agrega un recorrido final con el cliente y fotos de antes y después (con su permiso) para mostrar el trabajo."
          ],
          steps: ["Describe tu trabajo común de principio a fin.", "Pide a la IA que lo convierta en una lista de control de tres partes.", "Agrega los pasos de seguridad de tu oficio.", "Agrega un recorrido final y fotos con permiso.", "Pruébala en el siguiente trabajo y corrígela."],
          words: [["Lista de control", "una lista de pasos para ir marcando y que no se olvide nada."], ["Recorrido final", "revisar el trabajo terminado junto con el cliente."]],
          slides: [
            { title: "Por qué una lista de control", bullets: ["La misma calidad siempre", "Ayuda a entrenar a los ayudantes"] },
            { title: "Hazla con la IA", bullets: ["Describe tu trabajo de principio a fin", "Antes de llegar, en el lugar, antes de irte"] },
            { title: "Termina bien", bullets: ["Los pasos de seguridad de tu oficio", "Recorrido final con el cliente", "Fotos de antes y después con permiso"] }
          ],
          tryIt: "Describe tu trabajo más común en unas líneas. Pide a la IA que lo convierta en una lista de control de tres partes, agrega los pasos de seguridad y úsala en tu próximo trabajo.",
          youCanNow: "hacer y usar una lista de control que mantiene la misma calidad en cada trabajo.",
          quickCheck: [
            { objective: "O5", q: "¿Cuáles son las tres partes de la lista de verificación del trabajo en esta lección?", options: ["Antes de llegar, en el lugar, antes de irte", "Mañana, mediodía, noche", "Precio, impuesto, propina", "Llamada, mensaje, correo"], answer: 0, why: "La IA convierte tus notas en una lista de tres partes: antes de llegar, en el lugar y antes de irte." },
            { objective: "O5", q: "Quieres agregar un paso de seguridad para usar una escalera. ¿Dónde lo revisas?", options: ["Le preguntas a la IA y le crees", "En guías oficiales de seguridad o en la capacitación de tu oficio", "En la reseña de un cliente", "Te saltas los pasos de seguridad para ahorrar tiempo"], answer: 1, why: "Los pasos de seguridad se revisan con guías oficiales o con la capacitación de tu oficio." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Seguimiento, reseñas honestas y trabajo repetido",
          minutes: 5,
          goal: "Dar seguimiento después de un trabajo para ganar reseñas honestas, recomendaciones y nuevas reservas.",
          text: [
            "El trabajo no termina cuando te vas. Un mensaje de agradecimiento el mismo día, con un enlace para dejar una reseña y una oferta para reservar la próxima visita, trae más trabajo. Pide a la IA que lo escriba con tu estilo con espacios para [nombre] y [servicio].",
            "Pide a todos los clientes una reseña honesta de la misma forma, estén contentos o no. No ofrezcas recompensas solo por reseñas positivas y nunca escribas reseñas falsas; la regla de reseñas de la FTC (la Comisión Federal de Comercio de EE. UU.) prohíbe las dos cosas.",
            "Pon recordatorios para servicios que se repiten: canaletas cada otoño, un corte de pelo cada tres semanas, una revisión de la calefacción cada año. Un mensaje corto de \"¿Ya toca tu próximo...?\" mantiene lleno tu calendario."
          ],
          steps: ["Manda un agradecimiento el mismo día.", "Incluye un enlace para reseñas y pide reseñas honestas.", "Ofrece la próxima reserva.", "Pon recordatorios para servicios que se repiten."],
          words: [["Recomendación", "cuando un cliente te manda a un amigo."], ["Servicio que se repite", "un trabajo que los clientes necesitan otra vez cada cierto tiempo."]],
          slides: [
            { title: "Agradecimiento el mismo día", bullets: ["Agradece por su nombre", "Enlace para reseñas", "Ofrece la próxima reserva"] },
            { title: "Solo reseñas honestas", bullets: ["Pide a todos los clientes de la misma forma", "Nada de recompensas solo por reseñas positivas", "Nunca reseñas falsas (regla de la FTC)"] },
            { title: "Mantén lleno el calendario", bullets: ["Canaletas cada otoño; corte de pelo cada 3 semanas", "Recordatorios de \"¿Ya toca tu próximo...?\""] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Tarea final: arma tu kit de servicios: menú de servicios, plantilla de cotización, plantillas de primera respuesta, confirmación y recordatorio, una lista de control del trabajo y un agradecimiento de seguimiento que pide una reseña y ofrece la próxima reserva.",
          youCanNow: "manejar el papeleo de un negocio de servicios desde la primera llamada hasta el cliente que vuelve, con ayuda de la IA.",
          quickCheck: [
            { objective: "O6", q: "¿Cuándo debes mandar un mensaje de agradecimiento después de un trabajo?", options: ["El mes siguiente", "Solo si el cliente se queja", "El mismo día", "Nunca"], answer: 2, why: "Un agradecimiento el mismo día, con el enlace para la reseña y una oferta para la próxima cita, trae trabajo repetido." },
            { objective: "O6", q: "Un cliente quedó inconforme con parte del trabajo. ¿Cómo le pides una reseña?", options: ["No se la pides", "Le ofreces un descuento solo si pone 5 estrellas", "Escribes tú una reseña buena por él", "Le pides una reseña honesta igual que a todos"], answer: 3, why: "A todos los clientes les pides igual una reseña honesta; los premios solo por reseñas positivas están prohibidos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer el trabajo y conservar al cliente",
        questions: [
          { objective: "O4", q: "¿Qué va en una confirmación de reserva?", options: ["Fecha, rango de hora, dirección, precio y política de cancelación", "El número de tarjeta del cliente", "Tu contraseña", "Nada"], answer: 0, why: "Esos datos evitan confusiones y citas perdidas." },
          { objective: "O4", q: "Antes de mandar correos de publicidad necesitas:", options: ["Un nombre de remitente falso", "Nada", "La identificación del cliente", "Permiso y una opción para darse de baja"], answer: 3, why: "La ley CAN-SPAM exige una opción para darse de baja y honestidad." },
          { objective: "O5", q: "¿Por qué usar una lista de control del trabajo?", options: ["Para ir más lento", "La misma calidad siempre y entrenar más fácil", "Para saltarse la seguridad", "Para cobrar más"], answer: 1, why: "Las listas de control mantienen la calidad pareja." },
          { objective: "O5", q: "Antes de tomar fotos de antes y después debes:", options: ["Pedir permiso al cliente", "Tomarlas a escondidas", "Publicar la dirección", "No hacer nada"], answer: 0, why: "Respeta la privacidad del cliente." },
          { objective: "O6", q: "¿Qué forma de pedir reseñas cumple la regla de la FTC?", options: ["Escribir reseñas desde las cuentas de amigos", "10% de descuento solo por reseñas de 5 estrellas", "Pedir a todos los clientes una reseña honesta", "Comprar reseñas"], answer: 2, why: "Pedir reseñas honestas, sin condiciones, está bien." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para negocios de servicios",
    questions: [
      { objective: "O1", q: "Un menú de servicios muestra:", options: ["Direcciones de clientes", "Servicios, lo que incluyen y precios", "Contraseñas", "Números de Seguro Social del personal"], answer: 1, why: "Muestra lo que ofreces y cuánto cuesta." },
      { objective: "O1", q: "Un extra es:", options: ["Una reseña", "Un regalo", "Un impuesto", "Un servicio adicional que cuesta más"], answer: 3, why: "Los extras son servicios adicionales." },
      { objective: "O1", q: "La IA le da formato a tu menú. Tú debes revisar:", options: ["Los colores", "Solo el tipo de letra", "Nada", "Cada precio y lo que se incluye"], answer: 3, why: "La IA puede cambiar detalles." },
      { objective: "O2", q: "Alcance del trabajo significa:", options: ["Tus herramientas", "Exactamente lo que harás y lo que no harás", "Tu camioneta", "Tus horas"], answer: 1, why: "El alcance define el trabajo." },
      { objective: "O2", q: "Una cotización debe decir por cuánto tiempo está:", options: ["Impresa", "Hablada", "Vigente", "Escrita a máquina"], answer: 2, why: "Los precios cambian; la cotización debe vencer." },
      { objective: "O2", q: "Un precio basado en tus costos incluye:", options: ["Materiales, horas, traslados y ganancia", "Solo materiales", "Solo traslados", "Lo que sugiera la IA"], answer: 0, why: "Todos los costos más la ganancia." },
      { objective: "O3", q: "Un interesado es:", options: ["Una herramienta", "Un metal", "Una persona que preguntó pero no ha reservado", "Una factura"], answer: 2, why: "Los interesados son posibles clientes." },
      { objective: "O3", q: "¿Por qué responder rápido a los interesados?", options: ["La primera respuesta muchas veces gana el trabajo", "Es obligatorio", "Para molestarlos", "No importa"], answer: 0, why: "La rapidez gana trabajos." },
      { objective: "O3", q: "¿Qué nunca debes pedir por mensaje de texto?", options: ["Número de recámaras", "Un número de tarjeta", "Un buen día", "Si hay mascotas en casa"], answer: 1, why: "Los números de tarjeta son privados." },
      { objective: "O4", q: "Un rango de hora es:", options: ["Un día festivo", "Un vidrio", "Una fecha límite para pagar", "Un margen de horas de llegada"], answer: 3, why: "Fija lo que el cliente puede esperar sobre la llegada." },
      { objective: "O4", q: "Un recordatorio el día anterior ayuda a:", options: ["Reducir citas perdidas y casas cerradas", "Subir precios", "Saltarse el trabajo", "Esconder la política"], answer: 0, why: "Los recordatorios reducen los trabajos perdidos." },
      { objective: "O4", q: "¿Dónde se pueden poner muchas veces recordatorios automáticos?", options: ["En ningún lado", "En un calendario de papel", "En el banco", "En la configuración de tu herramienta de reservas"], answer: 3, why: "Muchas herramientas de reservas mandan recordatorios." },
      { objective: "O5", q: "¿Cómo debes hacer una lista de control del trabajo?", options: ["Dejar que la IA la invente de la nada", "Copiar a un competidor", "Describir tu trabajo, pedir a la IA que lo ordene y luego probarlo", "No hacerla"], answer: 2, why: "Tu experiencia, ordenada por la IA." },
      { objective: "O5", q: "Los pasos de seguridad de tu lista deben compararse con:", options: ["Solo la IA", "Guías oficiales de seguridad o la capacitación de tu oficio", "Una publicación de redes sociales", "Nada"], answer: 1, why: "La seguridad necesita una fuente confiable." },
      { objective: "O5", q: "Un recorrido final es:", options: ["Una reseña", "Un pasillo", "Una cotización", "Revisar el trabajo terminado junto con el cliente"], answer: 3, why: "Confirma que el cliente está contento." },
      { objective: "O6", q: "¿Cuándo debes mandar un agradecimiento?", options: ["Nunca", "Un año después", "El mismo día", "Solo si se quejan"], answer: 2, why: "Un agradecimiento a tiempo trae más reseñas y nuevas reservas." },
      { objective: "O6", q: "Ofrecer un descuento solo por reseñas de 5 estrellas está:", options: ["Prohibido por la regla de reseñas de la FTC", "Bien", "Obligatorio", "Muy bien pensado"], answer: 0, why: "Las recompensas ligadas a reseñas positivas están prohibidas." },
      { objective: "O6", q: "Un ejemplo de servicio que se repite es:", options: ["Una mudanza de una sola vez", "Limpiar canaletas cada otoño", "Una ventana rota una vez", "Una sola entrega"], answer: 1, why: "Se repite cada cierto tiempo." },
      { objective: "O6", q: "Una recomendación es:", options: ["Un cargo", "Un cliente que te manda a un amigo", "Un impuesto", "Una herramienta"], answer: 1, why: "Las recomendaciones traen clientes nuevos." },
      { objective: "O2", q: "¿Qué parte del trabajo queda en tus manos y no en las de la IA?", options: ["Fijar precios y hacer bien el trabajo", "Dar formato a una plantilla", "Redactar un recordatorio", "Ordenar notas"], answer: 0, why: "La IA ayuda con las palabras; tú manejas el negocio." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      7,
      8,
      10,
      12,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Menú de servicios claro",
        objective: "O1",
        notYet: "Faltan precios o cosas incluidas, o están mal.",
        meets: "Cada servicio dice qué incluye, qué cuesta aparte y el precio.",
        exceeds: "También dice cuánto tarda cada servicio y los extras que se pueden agregar."
      },
      {
        name: "Plantilla de presupuesto completa",
        objective: "O2",
        notYet: "Al presupuesto le falta el alcance, el precio, lo que no incluye o cuánto tiempo es válido.",
        meets: "Están todas las partes y el precio sale de tus costos más tu ganancia.",
        exceeds: "También tiene condiciones de pago y una nota de dónde se revisaron las reglas de licencias para trabajos grandes."
      },
      {
        name: "Mensajes de citas",
        objective: "O4",
        notYet: "A la confirmación o al recordatorio le falta el rango de horario, la dirección o la política de cancelación.",
        meets: "Confirmación y recordatorio del día anterior con fecha, rango de horario, dirección, precio y política.",
        exceeds: "También le dice al cliente cómo prepararse y está programado para enviarse solo."
      },
      {
        name: "Lista de verificación del trabajo",
        objective: "O5",
        notYet: "La lista se salta pasos o no tiene pasos de seguridad.",
        meets: "Lista de tres partes con pasos de seguridad y una revisión final.",
        exceeds: "Se probó en un trabajo real y se corrigió después."
      },
      {
        name: "Seguimiento honesto",
        objective: "O6",
        notYet: "El mensaje ofrece un premio solo por reseñas buenas o no pide reseña.",
        meets: "Agradece al cliente, pide una reseña honesta y una recomendación, y ofrece la próxima cita.",
        exceeds: "También programa un recordatorio para el próximo servicio repetido."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que dicen responder más rápido a los clientes interesados y agendar más trabajos en 30 días (encuesta de seguimiento)",
      "Dueños que dicen tener menos citas fallidas o menos discusiones por el precio en 30 días",
      "Estudiantes que empiezan otro curso de Koach Learn para pequeños negocios en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratis y documentos gratis como Google Docs o Word",
      "Tus servicios, precios y costos reales, o unos de ejemplo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Si puedes, agrupa a los estudiantes por oficio para que compartan listas de verificación y frases para presupuestos.",
      "Recuerda a los estudiantes que los precios salen de sus propios costos, y que las reglas de licencias y contratos vienen de la junta de su estado o de un profesional, no de la IA.",
      "Pide a los estudiantes que guarden las plantillas en su teléfono durante la sesión para que salgan listos para usarlas.",
      "Recuerda a los estudiantes que nunca pidan números de tarjeta ni identificaciones por mensaje de texto, y que nunca inventen ni compren reseñas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

"use strict";

// Koach Learn course (shared), Spanish translation of "AI for Customer Experience". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-customer-experience-es",
  lang: "es",
  translationOf: "ai-customer-experience",
  category: "Small Business",
  name: "IA para la experiencia del cliente",
  skills: "Hacer el mapa del recorrido del cliente, Escribir plantillas de respuesta con IA, Responder reseñas y quejas, Analizar comentarios con IA, Personalizar sin perder la privacidad, Armar un plan de mejora",
  outcome: "hacer un mapa de cómo viven los clientes tu organización, usar la IA para escribir respuestas rápidas y cálidas a preguntas, reseñas y quejas, ordenar los comentarios en los problemas principales y convertirlos en un plan de mejora de 30 días.",
  about: [
    "La experiencia del cliente es cómo se siente la gente en cada momento en que trata contigo: cuando te encuentra, cuando hace una pregunta, cuando compra o recibe ayuda, y lo que pasa después. Los clientes contentos vuelven y se lo cuentan a sus amigos; los descontentos se van sin decir nada o dejan una mala reseña.",
    "Este curso es para dueños y personal de pequeños negocios, y para organizaciones sin fines de lucro cuyos “clientes” son usuarios de servicios, familias, donantes y voluntarios. Algunos ejemplos: una barbería, una empresa de reparaciones del hogar, la recepción de una clínica y un banco de alimentos.",
    "Usarás asistentes de IA gratuitos como ChatGPT, Microsoft Copilot o Google Gemini para escribir respuestas y estudiar comentarios, mientras una persona sigue al mando. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Para una organización real o de práctica, prepara un kit de experiencia del cliente: un mapa del recorrido del cliente con los tres momentos más débiles marcados, cinco plantillas de respuesta (pregunta común, reseña positiva, reseña negativa, queja, seguimiento), un resumen de al menos 15 comentarios reales o de ejemplo ordenados en problemas principales, y un plan de mejora de 30 días con un responsable y una medida por cada acción.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios y personal de atención directa, y personas que atienden a clientes, familias, donantes o voluntarios en organizaciones sin fines de lucro y comunitarias.",
    startingPoint: "Hablan con clientes todos los días por teléfono, mensaje de texto, correo, redes sociales o en persona, y puede que lean reseñas en línea. Pocos han hecho un mapa del recorrido del cliente, usado plantillas de respuesta, ordenado comentarios por temas o seguido mejoras.",
    gap: "Las respuestas lentas, frías o equivocadas y las quejas sin respuesta hacen perder clientes y dañan las reseñas públicas. Las personas necesitan usar la IA para responder rápido y con calidez, aprender de los comentarios y hacer una mejora medida a la vez, protegiendo la privacidad de los clientes y siendo honestas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Aparatos: un teléfono o una computadora; una computadora es más fácil para los documentos y para ordenar comentarios",
      "Privacidad: nada de nombres, números de teléfono, datos de salud ni listas de clientes pegados en herramientas de IA generales",
      "Honestidad: nada de reseñas falsas, y a los clientes se les dice cuando hablan con una IA",
      "Tiempo: lecciones de 5 minutos, unos 60 minutos en total más el tiempo para armar el kit"
    ],
    prerequisites: "Ninguno. Quienes no hayan usado asistentes de IA pueden tomar primero un curso de introducción a la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para una organización real o de práctica", action: "dibujar un mapa del recorrido del cliente, desde descubrir hasta después, y marcar los tres momentos más débiles", standard: "con lo que el cliente hace y siente en cada paso" },
    { id: "O2", condition: "Con tus cinco preguntas más comunes y los datos verdaderos", action: "escribir con ayuda de la IA plantillas de respuesta con tu propia voz", standard: "personalizadas y con los datos revisados antes de cada uso" },
    { id: "O3", condition: "Con una reseña positiva, una reseña negativa y una queja", action: "escribir respuestas calmadas y útiles con el patrón escuchar, disculparse, resolver, dar seguimiento", standard: "sin datos privados en ninguna respuesta pública" },
    { id: "O4", condition: "Con al menos 15 comentarios de clientes sin datos privados", action: "ordenar los comentarios por temas con la IA y clasificar los tres problemas principales", standard: "después de revisar al azar algunos comentarios de cada tema" },
    { id: "O5", condition: "Para un mensaje de agradecimiento, recordatorio o seguimiento", action: "escribir una plantilla personalizada con marcadores que proteja la privacidad y sea honesta", standard: "solo para personas que aceptaron recibir tus mensajes, con una forma de llegar a una persona" },
    { id: "O6", condition: "Con tus tres problemas principales", action: "crear un plan de mejora de 30 días", standard: "con una acción, un responsable y una medida para cada problema" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ver y responder a tus clientes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Hacer el mapa del recorrido del cliente",
          minutes: 5,
          goal: "Dibujar un mapa del recorrido del cliente y marcar los momentos más débiles.",
          text: [
            "Un mapa del recorrido del cliente muestra, en orden, cada paso que vive una persona contigo: descubrir (cómo te encuentra), preguntar (primer contacto), decidir, comprar o recibir el servicio, y después (seguimiento, reseña, volver).",
            "En cada paso, escribe qué hace el cliente, qué siente y qué podría salir mal. En un banco de alimentos: una familia busca el horario en internet, llama con una pregunta, hace fila, recibe la comida y se pregunta cuándo volver.",
            "La IA te puede ayudar a ver pasos que se te pasaron. Pregunta: “Tengo un negocio de reparaciones del hogar. Haz una lista de cada paso que vive un cliente desde la primera búsqueda hasta después del trabajo, y qué podría frustrarlo en cada paso”. Luego compáralo con lo que ves todos los días."
          ],
          steps: ["Haz la lista de pasos: descubrir, preguntar, decidir, comprar o recibir, después.", "En cada paso, escribe qué hace y qué siente el cliente.", "Pregunta a la IA qué podría frustrarlo en cada paso.", "Marca los tres momentos más débiles."],
          words: [["Experiencia del cliente", "cómo se siente la gente en cada momento en que trata con una organización."], ["Mapa del recorrido", "una imagen paso a paso de la experiencia de un cliente."], ["Punto de contacto", "cualquier momento en que un cliente trata contigo: una llamada, una publicación, una visita, un correo."]],
          slides: [
            { title: "El recorrido", bullets: ["Descubrir, preguntar, decidir", "Comprar o recibir", "Después: seguimiento y regreso"] },
            { title: "En cada paso", bullets: ["Qué hace", "Qué siente", "Qué podría salir mal"] },
            { title: "Usa la IA para encontrar huecos", bullets: ["Pregunta qué podría frustrar a los clientes", "Compáralo con lo que ves", "Marca los tres momentos más débiles"] }
          ],
          tryIt: "Dibuja un mapa del recorrido para una organización real o de práctica con al menos cinco pasos. Usa la IA para encontrar frustraciones que se te pasaron y marca los tres momentos más débiles.",
          youCanNow: "hacer el mapa del recorrido de un cliente y encontrar dónde falla la experiencia.",
          quickCheck: [
            { objective: "O1", q: "¿Qué paso del recorrido del cliente trata del seguimiento, las reseñas y volver?", options: ["Después", "Descubrir", "Preguntar", "Decidir"], answer: 0, why: "El paso \"después\" cubre el seguimiento, las reseñas y las visitas de regreso." },
            { objective: "O1", q: "La IA hace una lista de frustraciones para el mapa del recorrido de tu negocio de limpieza. ¿Qué haces con la lista?", options: ["Copiarla como tu mapa final", "Borrarla; la IA no puede ayudar", "Compararla con lo que ves todos los días y quedarte con lo que es cierto", "Enviársela a los clientes"], answer: 2, why: "La IA puede señalar pasos que se te pasaron, pero tu experiencia diaria los confirma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir respuestas rápidas y cálidas con IA",
          minutes: 5,
          goal: "Armar con IA plantillas de respuesta para las preguntas que más recibes.",
          text: [
            "Responder rápido importa. Una plantilla es una respuesta ya hecha que ajustas para cada persona. La IA puede redactar plantillas con tu estilo en segundos.",
            "Dale contexto a la IA: tu organización, tu tono y los datos. “Escribe una respuesta amable de una barbería a la pregunta ‘¿Atienden sin cita?’. Datos: sin cita de martes a jueves, con cita viernes y sábado, se reserva en nuestro sitio web. Menos de 50 palabras”.",
            "Personaliza siempre antes de enviar: usa el nombre de la persona, responde exactamente lo que preguntó y revisa los datos. Una respuesta que suena a robot o se equivoca en el horario hace más daño que bien."
          ],
          steps: ["Haz la lista de tus cinco preguntas más comunes.", "Dale a la IA tu tono y los datos correctos de cada una.", "Pide una plantilla corta y amable.", "Guarda las plantillas en un documento.", "Personaliza y revisa los datos cada vez que uses una."],
          words: [["Plantilla", "una respuesta ya hecha que ajustas para cada persona."], ["Personalizar", "cambiar un mensaje para que encaje con una persona concreta."]],
          slides: [
            { title: "La rapidez importa", bullets: ["Las plantillas te ayudan a responder rápido", "La IA las redacta en segundos"] },
            { title: "Dale los datos a la IA", bullets: ["Tu tono", "Los datos correctos", "Un límite de palabras"] },
            { title: "Personaliza cada vez", bullets: ["Usa su nombre", "Responde exactamente lo que preguntó", "Revisa los datos"] }
          ],
          tryIt: "Usa la IA para escribir plantillas para tus tres preguntas de clientes más comunes. Guárdalas y luego personaliza una para un cliente inventado.",
          youCanNow: "armar y personalizar plantillas de respuesta redactadas con IA.",
          quickCheck: [
            { objective: "O2", q: "¿Qué le debes dar a la IA para que una plantilla de respuesta sea correcta?", options: ["Los números de teléfono de los clientes", "Tu tono y los datos verdaderos", "Solo la palabra \"respuesta\"", "El sitio web de un competidor"], answer: 1, why: "Tu tono y los datos reales dejan que la IA redacte una respuesta correcta que suene como tú." },
            { objective: "O2", q: "Una clienta llamada Ana pregunta por el estacionamiento. Tienes una plantilla. ¿Qué haces?", options: ["Enviar la plantilla tal como está", "Ignorar la pregunta", "Enviarle todas las plantillas que tienes", "Agregar su nombre, responder justo lo que preguntó y revisar los datos"], answer: 3, why: "Personaliza y revisa los datos cada vez que uses una plantilla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Responder reseñas y quejas",
          minutes: 6,
          goal: "Responder con calma y de forma útil a una reseña positiva, una reseña negativa y una queja.",
          text: [
            "Las reseñas son públicas, así que tu respuesta es para todos los que la leen, no solo para quien la escribió. Agradece las reseñas positivas y menciona algo concreto. En las negativas, mantén la calma, discúlpate por su experiencia, no discutas y ofrece resolverlo en privado con un teléfono o un correo.",
            "Para las quejas, usa un patrón sencillo: escuchar, disculparse, resolver, dar seguimiento. Pide a la IA: “Ayúdame a responder esta queja. Patrón: reconocer, disculparse, ofrecer esta solución: [tu solución], invitar a escribir a [correo]”.",
            "Nunca compartas datos privados en una respuesta pública, como fechas de citas, información de salud o lo que alguien compró. Nunca publiques reseñas falsas ni pagues por ellas. Si una reseña tiene amenazas o afirmaciones falsas, sigue el proceso de denuncia de la plataforma."
          ],
          steps: ["Lee la reseña dos veces y espera si te sientes molesto.", "Agradece (positiva) o reconoce y discúlpate (negativa).", "Ofrece una solución concreta o una forma de hablar en privado.", "No pongas datos privados en las respuestas públicas.", "Da seguimiento para asegurarte de que se resolvió."],
          words: [["Reseña", "un comentario público con una calificación sobre un negocio."], ["En privado", "fuera de la página pública, por ejemplo por teléfono o por correo privado."]],
          slides: [
            { title: "Las respuestas son públicas", bullets: ["Todos las leen", "Agradece las reseñas positivas con algo concreto"] },
            { title: "Reseñas negativas", bullets: ["Mantén la calma, no discutas", "Discúlpate por su experiencia", "Ofrece resolverlo en privado"] },
            { title: "Patrón para las quejas", bullets: ["Escuchar, disculparse, resolver, dar seguimiento", "Nada de datos privados en público", "Nunca reseñas falsas"] }
          ],
          tryIt: "Escribe con ayuda de la IA respuestas a una reseña positiva, una reseña negativa y una queja (reales o inventadas). Revisa que cada una tenga un tono tranquilo y no tenga datos privados.",
          youCanNow: "responder reseñas y quejas con calma, de forma útil y sin compartir datos privados.",
          quickCheck: [
            { objective: "O3", q: "¿Qué debe incluir una respuesta a una reseña positiva?", options: ["Un código de descuento para todos", "Una discusión sobre las estrellas", "Un agradecimiento y algo específico de su reseña", "La fecha de la cita del cliente"], answer: 2, why: "Agradece y menciona algo específico para que la respuesta se sienta real." },
            { objective: "O3", q: "Un cliente publica que tu clínica lo hizo esperar una hora. ¿Cómo respondes en público?", options: ["Reconocerlo, disculparte y ofrecer hablar en privado por teléfono o correo", "Explicar los detalles de su cita y la razón médica de la espera", "Decir que está equivocado", "Borrar la página de tu negocio"], answer: 0, why: "Mantén la calma, discúlpate, ofrece resolverlo en privado y deja fuera los datos privados." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Ver y responder a tus clientes",
        questions: [
          { objective: "O1", q: "¿Qué muestra un mapa del recorrido del cliente?", options: ["Solo la ruta de tu camión de reparto", "Tu saldo bancario", "Cada paso que vive un cliente contigo", "Los horarios de los empleados"], answer: 2, why: "Muestra cada paso y cómo se siente el cliente." },
          { objective: "O1", q: "¿Cuál es un punto de contacto?", options: ["Una llamada telefónica con un cliente", "Solo el color de las paredes de tu oficina", "Tu declaración de impuestos", "La factura de un proveedor"], answer: 0, why: "Los puntos de contacto son momentos en que un cliente trata contigo." },
          { objective: "O2", q: "¿Qué debes hacer siempre antes de enviar una respuesta redactada con IA?", options: ["Enviarla sin leerla", "Agregar más emojis", "Quitar el nombre del cliente", "Personalizarla y revisar los datos"], answer: 3, why: "Las respuestas personales y correctas generan confianza." },
          { objective: "O3", q: "Un cliente deja una reseña enojada. ¿Cuál es el mejor primer paso?", options: ["Discutir en público", "Mantener la calma, disculparte por su experiencia y ofrecer resolverlo en privado", "Publicar los detalles de su cita", "Ignorarla para siempre"], answer: 1, why: "Las respuestas tranquilas y útiles muestran a los lectores que te importa." },
          { objective: "O3", q: "¿Qué nunca debe aparecer en una respuesta pública a una reseña?", options: ["“Gracias”", "La información de salud del cliente", "Una oferta para hablar por teléfono", "El nombre de tu negocio"], answer: 1, why: "Los datos privados no van en las respuestas públicas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aprender de los comentarios y mejorar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Analizar los comentarios con IA",
          minutes: 6,
          goal: "Usar la IA para ordenar los comentarios de los clientes por temas y encontrar los problemas principales.",
          text: [
            "Los comentarios se esconden en muchos lugares: reseñas, encuestas, correos, comentarios en redes y notas del personal. Leer todo a mano toma horas. La IA lo puede ordenar en minutos.",
            "Junta al menos 15 comentarios en un documento. Quita los nombres, teléfonos y otros datos privados. Luego pide: “Ordena estos comentarios por temas. Para cada tema, cuenta cuántos comentarios lo mencionan, di si es positivo o negativo y da una cita de ejemplo”.",
            "Revisa el trabajo de la IA: lee algunos comentarios de cada tema para confirmar que van ahí. La IA puede contar mal o mezclar problemas distintos. El resultado es tu lista de problemas principales, ordenada por la frecuencia con que aparecen y por cuánto dañan la experiencia."
          ],
          steps: ["Junta al menos 15 comentarios de reseñas, encuestas y correos.", "Quita los nombres y datos privados.", "Pide a la IA que los ordene por temas con conteos y ejemplos.", "Revisa al azar algunos comentarios de cada tema.", "Ordena los tres problemas principales."],
          words: [["Comentarios", "lo que te dicen los clientes sobre su experiencia."], ["Tema", "un asunto que aparece una y otra vez."], ["Sentimiento", "si un comentario es positivo, negativo o neutral."]],
          slides: [
            { title: "Los comentarios están en todas partes", bullets: ["Reseñas, encuestas, correos", "Comentarios en redes, notas del personal"] },
            { title: "Deja que la IA los ordene", bullets: ["Primero quita los datos privados", "Pide temas, conteos, sentimiento y un ejemplo"] },
            { title: "Revisa y ordena", bullets: ["Revisa al azar cada tema", "Ordena por frecuencia y por cuánto daña"] }
          ],
          tryIt: "Junta al menos 15 comentarios reales o de ejemplo, quita los datos privados y pide a la IA que los ordene por temas. Revisa al azar los resultados y escribe tus tres problemas principales.",
          youCanNow: "convertir un montón de comentarios de clientes en una lista ordenada de problemas principales.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué revisar al azar los temas que crea la IA?", options: ["La IA siempre acierta", "Para que la lista sea más larga", "Para volver a poner los nombres de los clientes", "La IA puede contar mal o juntar problemas distintos"], answer: 3, why: "Leer algunos comentarios de cada tema descubre los errores de conteo de la IA y los problemas mezclados." },
            { objective: "O4", q: "Ocho comentarios mencionan respuestas lentas y dos mencionan el estacionamiento. ¿Cuál clasificas más alto?", options: ["El estacionamiento, porque es más fácil", "Las respuestas lentas, porque más personas lo mencionan", "Ninguno; ignora los dos", "El que la IA ponga primero"], answer: 1, why: "Clasifica los problemas según cuántas veces aparecen y cuánto daño hacen." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Personalizar el servicio sin perder la confianza",
          minutes: 5,
          goal: "Usar la IA para personalizar mensajes protegiendo la privacidad de los clientes y siendo honesto.",
          text: [
            "Los detalles personales hacen que la gente se sienta valorada: un descuento de cumpleaños, un recordatorio antes de la próxima cita de un cliente o una nota de agradecimiento a un donante que menciona el programa que apoyó.",
            "La IA puede ayudar a escribir estos mensajes en cantidad a partir de una plantilla. Dale solo los detalles que necesita, como un nombre de pila y el tipo de servicio, no los registros completos. Usa tu propio sistema de clientes o herramienta de correo para insertar los nombres, en lugar de pegar listas de clientes en una herramienta de IA general.",
            "Sé honesto: si un chatbot o una IA responde a los clientes, dilo. Haz fácil hablar con una persona. Escribe solo a quienes aceptaron recibir tus mensajes, y haz fácil darse de baja."
          ],
          steps: ["Elige un momento personal: un agradecimiento, un recordatorio o un seguimiento.", "Pide a la IA una plantilla con marcadores como [Nombre].", "Llena los nombres con tu propia herramienta de correo o de clientes.", "Di claramente cuándo un cliente está hablando con una IA.", "Ofrece siempre una forma de hablar con una persona."],
          words: [["Marcador", "una señal como [Nombre] que se cambia por los datos reales."], ["Darse de baja", "elegir dejar de recibir mensajes."]],
          slides: [
            { title: "Detalles personales", bullets: ["Agradecimientos y recordatorios", "Menciona lo que le importa a la persona"] },
            { title: "Protege la privacidad", bullets: ["Usa marcadores como [Nombre]", "Inserta los nombres con tu propia herramienta", "Nada de listas de clientes en IA general"] },
            { title: "Sé honesto", bullets: ["Di cuándo responde una IA", "Que sea fácil hablar con una persona", "Que sea fácil darse de baja"] }
          ],
          tryIt: "Escribe con la IA una plantilla personalizada de agradecimiento o de seguimiento usando marcadores. Revisa que no pida datos privados y que ofrezca una forma de hablar con una persona.",
          youCanNow: "personalizar mensajes a clientes con IA protegiendo la privacidad y siendo honesto.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es la forma más segura de enviar una nota de agradecimiento a 200 donantes?", options: ["Usar una plantilla con [Nombre] e insertar los nombres en tu propia herramienta de correo", "Pegar la lista completa de donantes en una herramienta de IA gratuita", "Escribir cada nota a mano sin revisarla", "Publicar todos sus nombres en las redes sociales"], answer: 0, why: "Inserta los nombres en tu propia herramienta para que la lista de donantes nunca entre en una herramienta de IA general." },
            { objective: "O5", q: "El chatbot de tu sitio web responde las preguntas de los clientes. ¿Qué debes agregar?", options: ["El nombre falso de un empleado", "Nada; los clientes prefieren no saberlo", "Un aviso claro de que es una IA y una forma de llegar a una persona", "Una solicitud de números de tarjeta"], answer: 2, why: "Ser honesto sobre que es una IA y ofrecer a una persona genera confianza." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Convertir lo aprendido en un plan de mejora de 30 días",
          minutes: 5,
          goal: "Convertir tus problemas principales en un plan de 30 días con responsables y medidas.",
          text: [
            "Lo aprendido solo importa si algo cambia. Para cada uno de tus tres problemas principales, elige una acción que puedas hacer en 30 días. Ejemplo: “Los clientes dicen que esperan demasiado por los presupuestos” se convierte en “Enviar cada presupuesto en menos de 24 horas usando una plantilla de presupuesto redactada con IA”.",
            "Dale a cada acción un responsable y una medida: un número que mostrará si funcionó, como el tiempo promedio de respuesta, la calificación de las reseñas, las visitas repetidas o las quejas por semana.",
            "Cuéntales a los clientes qué cambiaste: “Nos lo dijiste y te escuchamos”. Después de 30 días, revisa las medidas, quédate con lo que funcionó y elige el siguiente problema."
          ],
          steps: ["Escribe una acción para cada problema principal.", "Dale un responsable a cada acción.", "Elige una medida para cada una.", "Anota el número inicial.", "Revisa de nuevo después de 30 días y comparte lo que cambió."],
          words: [["Aprendizaje", "una comprensión útil que sale de estudiar la información."], ["Medida", "un número que muestra si un cambio funcionó."]],
          slides: [
            { title: "De lo aprendido a la acción", bullets: ["Una acción por problema principal", "Que se pueda hacer en 30 días"] },
            { title: "Responsable y medida", bullets: ["Quién lo hace", "Tiempo de respuesta, calificaciones, visitas repetidas, quejas"] },
            { title: "Cierra el ciclo", bullets: ["“Nos lo dijiste y te escuchamos”", "Revisa a los 30 días", "Elige el siguiente problema"] }
          ],
          tryIt: "Tarea final: escribe un plan de mejora de 30 días para tus tres problemas principales, con una acción, un responsable, una medida y un número inicial para cada uno. Súmalo a tu mapa del recorrido, tus plantillas y tu resumen de comentarios para completar tu kit de experiencia del cliente.",
          youCanNow: "encontrar, resolver y medir problemas de experiencia del cliente con ayuda de la IA.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una medida en un plan de mejora?", options: ["La persona a cargo", "Un número que muestra si la acción funcionó", "El nombre del cliente", "La fecha en que empezaste el negocio"], answer: 1, why: "Una medida es un número, como el tiempo promedio de respuesta, que muestra si la acción funcionó." },
            { objective: "O6", q: "Los clientes dicen que no encuentran tu horario. ¿Cuál es una buena acción para 30 días?", options: ["Esperar a ver si mejora", "Pedirle a la IA que escriba reseñas sobre tu horario", "Quitar el horario por completo", "Publicar el horario en cada página y perfil, con un responsable y una medida"], answer: 3, why: "Cada problema principal recibe una acción clara, un responsable y una medida." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Aprender de los comentarios y mejorar",
        questions: [
          { objective: "O4", q: "Antes de pegar comentarios de clientes en la IA, debes:", options: ["Agregar sus teléfonos", "Agregar sus números de tarjeta", "Nada", "Quitar los nombres y los datos privados"], answer: 3, why: "La privacidad va primero." },
          { objective: "O4", q: "La IA ordena los comentarios por temas. ¿Qué debes hacer después?", options: ["Revisar al azar algunos comentarios de cada tema", "Confiar del todo en ella", "Borrar los comentarios", "Publicar los temas con nombres"], answer: 0, why: "La IA puede contar mal o mezclar problemas." },
          { objective: "O5", q: "¿Qué es un marcador?", options: ["Una reseña falsa", "Un tipo de queja", "Una señal como [Nombre] que se cambia por los datos reales", "La contraseña de un cliente"], answer: 2, why: "Los marcadores te dejan personalizar de forma segura." },
          { objective: "O5", q: "Un chatbot responde a tus clientes. ¿Qué debes decirles?", options: ["Que es un empleado real", "Nada", "Que dejen de preguntar", "Que es una IA y cómo hablar con una persona"], answer: 3, why: "La honestidad genera confianza." },
          { objective: "O6", q: "¿Cuál es una buena medida para la acción “enviar presupuestos en menos de 24 horas”?", options: ["La cantidad de plantas en la oficina", "La edad del dueño", "El tiempo promedio para enviar un presupuesto", "Los colores del sitio web"], answer: 2, why: "La medida debe mostrar si la acción funcionó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la experiencia del cliente",
    questions: [
      { objective: "O1", q: "La experiencia del cliente es:", options: ["Solo el precio", "Cómo se siente la gente en cada momento en que trata contigo", "Solo tu sitio web", "El sueldo de tu personal"], answer: 1, why: "Abarca cada punto de contacto." },
      { objective: "O1", q: "¿Cuál es el primer paso del recorrido del cliente?", options: ["Descubrir: cómo te encuentra", "Dejar una reseña", "Pagar", "Volver"], answer: 0, why: "El recorrido empieza cuando te encuentra." },
      { objective: "O1", q: "En una organización sin fines de lucro, los “clientes” pueden ser:", options: ["Solo los compradores que pagan", "Solo la junta directiva", "Usuarios de servicios, familias, donantes y voluntarios", "Nadie"], answer: 2, why: "Cualquier persona a la que la organización sirve o de la que depende." },
      { objective: "O1", q: "La IA puede ayudar con un mapa del recorrido:", options: ["Sugiriendo frustraciones que quizá se te pasaron", "Reemplazando a tus clientes", "Recogiendo números de tarjeta", "Escribiendo reseñas falsas"], answer: 0, why: "Da ideas; tú las comparas con la realidad." },
      { objective: "O2", q: "Una plantilla de respuesta es:", options: ["Un contrato legal", "Una encuesta", "Un sitio de reseñas", "Una respuesta ya hecha que ajustas para cada persona"], answer: 3, why: "Las plantillas aceleran las respuestas." },
      { objective: "O2", q: "¿Qué le debes dar a la IA al redactar una plantilla?", options: ["Contraseñas de clientes", "Tu tono y los datos correctos", "Nada", "Las reseñas de un competidor"], answer: 1, why: "Los datos y el tono producen respuestas correctas y con tu estilo." },
      { objective: "O2", q: "Una plantilla de la IA dice que abres a las 8 a. m., pero abres a las 9. ¿Qué haces?", options: ["Enviarla igual", "Corregir el dato antes de usarla", "Cambiar tu horario", "Culpar al cliente"], answer: 1, why: "Revisa siempre los datos." },
      { objective: "O3", q: "¿Para quién es en realidad una respuesta pública a una reseña?", options: ["Solo para quien la escribió", "Para nadie", "Para el dueño del sitio de reseñas", "Para todos los que leen las reseñas"], answer: 3, why: "Los futuros clientes leen tus respuestas." },
      { objective: "O3", q: "El patrón para las quejas en este curso es:", options: ["Escuchar, disculparse, resolver, dar seguimiento", "Discutir, negar, borrar, ignorar", "Esperar, esperar, esperar, esperar", "Devolver siempre todo el dinero"], answer: 0, why: "Ese patrón convierte las quejas en confianza." },
      { objective: "O3", q: "Escribir reseñas de tu propio negocio es:", options: ["Una buena estrategia", "Obligatorio", "Engañoso y nunca se debe hacer", "Aceptable con IA"], answer: 2, why: "Las reseñas falsas engañan a los clientes." },
      { objective: "O3", q: "Una reseña tiene amenazas. Debes:", options: ["Amenazar de vuelta", "Publicar su dirección", "Ignorar todas las reseñas", "Usar el proceso de denuncia de la plataforma"], answer: 3, why: "Las plataformas tienen procesos para el contenido abusivo." },
      { objective: "O4", q: "¿Cuántos comentarios sugiere juntar el curso para el análisis?", options: ["Exactamente 1", "Ninguno", "Al menos 15", "Al menos 10,000"], answer: 2, why: "Quince o más muestran patrones reales." },
      { objective: "O4", q: "Un tema es:", options: ["Un diseño de sitio web", "Un asunto que aparece una y otra vez", "Una sola queja", "Un código de descuento"], answer: 1, why: "Los temas muestran los problemas comunes." },
      { objective: "O4", q: "Sentimiento significa:", options: ["Si un comentario es positivo, negativo o neutral", "Qué tan largo es un comentario", "Quién lo escribió", "Su fecha"], answer: 0, why: "El sentimiento es la emoción detrás del comentario." },
      { objective: "O4", q: "Los problemas principales se deben ordenar por:", options: ["Orden alfabético", "Quién se quejó más fuerte", "La frecuencia con que aparecen y cuánto dañan", "Al azar"], answer: 2, why: "La frecuencia y el impacto muestran las prioridades." },
      { objective: "O5", q: "La forma más segura de poner los nombres de los clientes en muchos mensajes es:", options: ["Usar marcadores e insertar los nombres con tu propia herramienta de correo o de clientes", "Pegar la lista completa de clientes en una herramienta de IA general", "Adivinar los nombres", "Publicar la lista"], answer: 0, why: "Tu propia herramienta mantiene los datos de los clientes bajo tu control." },
      { objective: "O5", q: "Debes escribir a los clientes que:", options: ["Nunca te dieron su contacto", "Te pidieron que dejaras de escribirles", "Encontraste en internet", "Aceptaron recibir tus mensajes"], answer: 3, why: "El consentimiento importa, y las bajas se deben respetar." },
      { objective: "O6", q: "Cada acción de mejora necesita:", options: ["Un logo nuevo", "Un responsable y una medida", "Una oficina más grande", "Nada"], answer: 1, why: "Los responsables hacen que pase; las medidas muestran si funcionó." },
      { objective: "O6", q: "“Nos lo dijiste y te escuchamos” es una forma de:", options: ["Esconder problemas", "Mostrar a los clientes lo que cambiaste", "Pedir contraseñas", "Subir los precios"], answer: 1, why: "Cerrar el ciclo genera lealtad." },
      { objective: "O6", q: "Después de 30 días debes:", options: ["Dejar de escuchar a los clientes", "Borrar el plan", "No revisar nunca", "Revisar las medidas, quedarte con lo que funcionó y elegir el siguiente problema"], answer: 3, why: "Mejorar es un ciclo que se repite." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Mapa del recorrido",
        objective: "O1",
        notYet: "Faltan pasos, o los momentos más débiles no están marcados.",
        meets: "Los cinco pasos con lo que el cliente hace y siente, y los tres momentos más débiles marcados.",
        exceeds: "Cada momento débil se relaciona con comentarios reales o con algo que observó el personal."
      },
      {
        name: "Plantillas de respuesta",
        objective: "O2",
        notYet: "Menos de cinco plantillas, o una plantilla tiene datos equivocados.",
        meets: "Cinco plantillas (pregunta, reseña positiva, reseña negativa, queja, seguimiento) con datos verdaderos y un tono cálido.",
        exceeds: "Cada plantilla tiene marcadores y una nota sobre qué personalizar."
      },
      {
        name: "Respuestas a reseñas y quejas",
        objective: "O3",
        notYet: "Una respuesta discute, culpa o comparte datos privados.",
        meets: "Las respuestas son calmadas, se disculpan cuando hace falta y ofrecen una solución o una forma de hablar en privado.",
        exceeds: "Incluye un paso de seguimiento para comprobar que el problema se resolvió."
      },
      {
        name: "Resumen de comentarios",
        objective: "O4",
        notYet: "Menos de 15 comentarios, o quedaron nombres.",
        meets: "Al menos 15 comentarios sin datos privados, ordenados por temas y con los tres problemas principales clasificados.",
        exceeds: "Muestra qué temas se revisaron al azar y qué errores de la IA se corrigieron."
      },
      {
        name: "Plan de 30 días",
        objective: "O6",
        notYet: "Las acciones no tienen responsable ni medida.",
        meets: "Una acción, un responsable y una medida para cada problema principal, con un número de partida.",
        exceeds: "Incluye cómo se les dirá a los clientes qué cambió."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Tiempo promedio de respuesta a las preguntas de los clientes, antes del curso y 30 días después",
      "Calificación promedio de las reseñas y número de quejas por semana, antes y 60 días después",
      "Organizaciones que completan al menos un ciclo de mejora de 30 días (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Un documento para las plantillas y una hoja de cálculo o un documento para el resumen de comentarios y el plan",
      "Al menos 15 comentarios de clientes, reales o de ejemplo, sin datos privados",
      "Unos 60 minutos para las lecciones y las comprobaciones, más el tiempo para armar el kit"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; redacta una plantilla y una respuesta a una queja en una pantalla compartida.",
      "Ofrece un grupo de comentarios de ejemplo a quienes todavía no tengan comentarios reales.",
      "Revisa que se hayan quitado los nombres, los números de teléfono y los datos de salud antes de que los comentarios entren en la IA.",
      "Hagan un juego de roles con un cliente molesto para que las personas practiquen en voz alta escuchar, disculparse, resolver y dar seguimiento.",
      "Califica el kit final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

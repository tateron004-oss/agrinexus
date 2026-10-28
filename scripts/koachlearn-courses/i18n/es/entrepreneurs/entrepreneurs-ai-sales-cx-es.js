"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-ai-sales-cx). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "entrepreneurs-ai-sales-cx-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-sales-cx",
  category: "Entrepreneurs",
  name: "IA para ventas y experiencia del cliente",
  skills: "Calificar prospectos, Escribir mensajes personales de primer contacto, Prepararte para conversaciones de venta, Crear preguntas frecuentes para clientes, Atender quejas, Aprender de los comentarios de los clientes",
  outcome: "usar la IA para encontrar y calificar prospectos de venta, escribir mensajes personales de primer contacto que cumplan las reglas, prepararte para una conversación de venta, y crear unas preguntas frecuentes y una guía de respuesta a quejas que mantengan contentos a los clientes.",
  about: [
    "Las ventas y la atención al cliente deciden si un negocio crece. Este curso es para dueños que hacen sus propias ventas y su propia atención, y quieren hacer las dos cosas mejor y más rápido con IA.",
    "En el Capítulo 1 vas a usar la IA para describir a quién venderle, ordenar prospectos, escribir mensajes personales (no correo basura) y prepararte para una llamada de venta con respuestas a las objeciones comunes. En el Capítulo 2 vas a crear unas preguntas frecuentes, aprender una forma tranquila de contestar quejas y usar la IA para encontrar patrones en los comentarios de los clientes.",
    "Cada lección dura unos cinco minutos e incluye una tarea para tu negocio real. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las reglas sobre llamadas, mensajes de texto y correo se explican con palabras sencillas; no es asesoría legal."
  ],
  finalTask: "Arma un kit de ventas y atención para tu negocio: una lista corta de 10 prospectos calificados con una razón para cada uno, dos mensajes personales de primer contacto, una guía de llamada de una página con respuestas a tus tres objeciones más comunes, unas preguntas frecuentes de 10 preguntas y una plantilla de respuesta a quejas, todo revisado y sin datos privados de clientes en ninguna herramienta de IA.",
  chapters: [
    {
      name: "Capítulo 1: Vender con IA",
      lessons: [
        {
          title: "Encontrar y calificar prospectos",
          minutes: 5,
          goal: "Hacer una lista corta de prospectos y decidir cuáles tienen más probabilidad de comprar.",
          text: [
            "Un prospecto es una persona o un negocio que podría comprarte. Calificar significa decidir qué prospectos valen tu tiempo. Una prueba sencilla: ¿Tienen el problema que resuelves? ¿Pueden pagar? ¿Pueden decidir? ¿Lo necesitan pronto?",
            "La IA te puede ayudar a pensar dónde están tus prospectos (\"¿Dónde buscan servicios de limpieza los gimnasios pequeños de mi ciudad?\") y a calificar una lista que ya tienes. Describe cada prospecto con palabras generales y pide a la IA que los ordene según las cuatro preguntas.",
            "Usa información pública de negocios, no datos personales privados. No compres listas de contactos ni copies datos personales de internet de forma masiva; muchas veces están desactualizados y pueden violar las reglas de privacidad y de marketing."
          ],
          steps: ["Escribe quiénes fueron tus mejores clientes anteriores.", "Pregunta a la IA dónde se pueden encontrar negocios o personas parecidas.", "Haz la lista de 15 a 20 posibles prospectos de fuentes públicas y de tu propia red de contactos.", "Califica cada uno en problema, dinero, decisión y tiempo.", "Quédate con los 10 mejores, con una razón de una línea para cada uno."],
          words: [["Prospecto", "una persona o un negocio que podría comprarte."], ["Calificar", "decidir si un prospecto probablemente comprará y vale tu tiempo."]],
          slides: [
            { title: "Un prospecto podría comprar", bullets: ["Calificar = ¿vale tu tiempo?", "Problema, dinero, decisión, tiempo"] },
            { title: "Cómo ayuda la IA", bullets: ["Pensar dónde están los prospectos", "Ordenar tu lista con las cuatro preguntas"] },
            { title: "Juega limpio", bullets: ["Usa información pública de negocios", "Nada de listas compradas ni datos personales copiados"] }
          ],
          tryIt: "Haz la lista de 15 posibles prospectos, califícalos en problema, dinero, decisión y tiempo con ayuda de la IA, y quédate con tus 10 mejores, con una razón para cada uno.",
          youCanNow: "encontrar prospectos y enfocarte en los que tienen más probabilidad de comprar."
        },
        {
          title: "Escribir mensajes personales, no correo basura",
          minutes: 5,
          goal: "Escribir un primer mensaje corto y personal que cumpla las reglas de EE. UU. sobre correos, llamadas y mensajes de texto.",
          text: [
            "Un buen primer contacto es corto y habla de la otra persona: lo que notaste de su negocio, el problema con el que puedes ayudar y un siguiente paso fácil. Pide a la IA: \"Escribe un primer correo de 70 palabras para el dueño de un gimnasio pequeño. Menciona que sus reseñas hablan de lo importante que son los vestidores limpios. Ofrece un recorrido gratis de 15 minutos. Sin exagerar.\" Luego agrega un detalle que solo tú sabes.",
            "Para los correos comerciales, la Ley CAN-SPAM exige líneas de \"De\" y de asunto honestas, tu dirección física y una forma clara de darse de baja, y las bajas se deben cumplir en un plazo de 10 días hábiles.",
            "Las llamadas y los mensajes de texto tienen reglas más estrictas. Los mensajes de texto de marketing y las llamadas automáticas normalmente necesitan primero el consentimiento de la persona, y en 2024 la FCC (la agencia de comunicaciones de EE. UU.) decidió que las voces generadas con IA cuentan como voces \"artificiales\" según la Ley de Protección al Consumidor Telefónico (TCPA). No uses llamadas con voz de IA ni mensajes de texto masivos sin consentimiento, y revisa fcc.gov o consulta a un abogado antes de empezar."
          ],
          steps: ["Anota un detalle real del prospecto sacado de información pública.", "Pide a la IA un mensaje corto: su situación, tu ayuda, un siguiente paso.", "Agrega un detalle personal y revisa cada dato.", "En los correos, incluye tu dirección y una línea para darse de baja.", "No envíes mensajes de texto ni llamadas con IA a nadie sin su consentimiento."],
          words: [["Primer contacto", "comunicarte primero con un posible cliente."], ["Ley CAN-SPAM", "la ley de EE. UU. con reglas para los correos comerciales."], ["TCPA", "Ley de Protección al Consumidor Telefónico: ley de EE. UU. que limita las llamadas y los mensajes de texto de marketing sin consentimiento."]],
          slides: [
            { title: "Corto y sobre la otra persona", bullets: ["Lo que notaste", "El problema que resuelves", "Un siguiente paso fácil"] },
            { title: "Reglas del correo (CAN-SPAM)", bullets: ["Líneas de \"De\" y asunto honestas", "Tu dirección física", "Bajas cumplidas en 10 días hábiles"] },
            { title: "Llamadas y mensajes de texto", bullets: ["Los textos de marketing y las llamadas automáticas suelen necesitar consentimiento", "Las voces de IA cuentan como artificiales (FCC 2024)", "Revisa fcc.gov o consulta a un abogado primero"] }
          ],
          sources: [{ name: "FTC: Guía de cumplimiento de la Ley CAN-SPAM para empresas (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FCC: decisión sobre voces generadas con IA en llamadas automáticas (2024, en inglés)", url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" }],
          tryIt: "Escribe con ayuda de la IA dos correos personales de primer contacto para prospectos de tu lista. Agrega un detalle real a cada uno y revisa que incluyan tu dirección y una línea para darse de baja.",
          youCanNow: "escribir mensajes personales de primer contacto que respetan las reglas de correos, llamadas y mensajes de texto."
        },
        {
          title: "Prepararte para una conversación de venta",
          minutes: 5,
          goal: "Hacer una guía de llamada de una página con preguntas y respuestas a las objeciones comunes.",
          text: [
            "Una conversación de venta es sobre todo escuchar. Prepara cinco buenas preguntas sobre la situación, el problema y las metas del cliente, y luego explica cómo ayudas usando sus propias palabras.",
            "Las objeciones son las razones que da la gente para no comprar: \"Es muy caro.\" \"Lo tengo que pensar.\" \"Ya tenemos a alguien.\" Pide a la IA: \"Haz la lista de las cinco objeciones más comunes para [servicio] y da una respuesta tranquila y honesta a cada una.\" Corrígelas para que suenen a ti y sean ciertas.",
            "Practica con la IA en un juego de roles: \"Haz como si fueras el dueño ocupado de un gimnasio que no está seguro de contratar un servicio de limpieza. Hazme preguntas difíciles.\" Practica hasta que puedas responder sin leer."
          ],
          steps: ["Escribe cinco preguntas abiertas sobre la situación y las metas del cliente.", "Pide a la IA las objeciones comunes y respuestas honestas.", "Corrige las respuestas para que sean ciertas y suenen a ti.", "Practica la conversación con la IA en un juego de roles.", "Pon todo en una página."],
          words: [["Objeción", "una razón que da un cliente para no comprar todavía."], ["Juego de roles", "practicar una conversación actuándola."], ["Pregunta abierta", "una pregunta que no se puede contestar solo con sí o no."]],
          slides: [
            { title: "Sobre todo escuchar", bullets: ["Cinco preguntas abiertas", "Su situación, problema y metas", "Explica tu ayuda con sus palabras"] },
            { title: "Prepárate para las objeciones", bullets: ["\"Es muy caro\"", "\"Lo tengo que pensar\"", "\"Ya tenemos a alguien\""] },
            { title: "Practica con la IA", bullets: ["Pide a la IA que haga de cliente con dudas", "Responde en voz alta", "Repite hasta que se sienta natural"] }
          ],
          tryIt: "Arma tu guía de llamada de una página: cinco preguntas abiertas y respuestas honestas a tus tres objeciones más comunes. Practica una vez con la IA en un juego de roles.",
          youCanNow: "prepararte y practicar con IA una conversación de venta."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Vender con IA",
        questions: [
          { q: "¿Qué prospecto está mejor calificado?", options: ["Alguien que no necesita tu servicio", "Un negocio con el problema, el presupuesto, alguien que decide y una necesidad pronto", "Un correo electrónico al azar", "Un competidor"], answer: 1, why: "Pasa las cuatro preguntas para calificar." },
          { q: "¿De dónde debe salir la información de tus prospectos?", options: ["De archivos privados de clientes", "De datos personales copiados de internet", "De una lista comprada de desconocidos", "De información pública de negocios y de tu propia red de contactos"], answer: 3, why: "La información pública evita problemas de privacidad y de marketing." },
          { q: "Un buen primer mensaje es:", options: ["Corto, sobre la otra persona, con un siguiente paso fácil", "Largo y todo sobre ti", "Copiado igual a 1,000 personas", "Lleno de afirmaciones de \"garantizado\""], answer: 0, why: "Lo personal y corto consigue respuestas." },
          { q: "¿Puedes hacer llamadas automáticas con voz de IA a personas que nunca dieron su consentimiento?", options: ["Sí, los fines de semana", "Sí, las voces de IA están exentas", "No, las reglas de consentimiento también aplican a las voces de IA", "Solo a negocios de otros estados"], answer: 2, why: "La FCC trata las voces de IA como voces artificiales según la TCPA." },
          { q: "Un cliente dice \"Es muy caro.\" Esto se llama:", options: ["Un disparador", "Un prospecto", "Una objeción", "Un reembolso"], answer: 2, why: "Las objeciones son razones para no comprar todavía." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantener contentos a los clientes",
      lessons: [
        {
          title: "Crear preguntas frecuentes para clientes",
          minutes: 5,
          goal: "Crear unas preguntas frecuentes de 10 preguntas a partir de lo que los clientes de verdad preguntan.",
          text: [
            "Los clientes hacen las mismas preguntas una y otra vez. Una página o un documento de preguntas frecuentes te ahorra tiempo y ayuda a los clientes a decidir más rápido.",
            "Junta durante dos semanas las preguntas reales de correos, mensajes y llamadas (quita los nombres y los datos de contacto). Pide a la IA que las agrupe y escriba respuestas claras y cortas usando solo los datos que le das: precios, horario, zona, políticas.",
            "Revisa cada respuesta. Luego usa las preguntas frecuentes en tu sitio web, en tus respuestas guardadas y como la base de datos de cualquier chatbot. Si usas un chatbot, dile a los clientes que es automático y dales una forma fácil de hablar con una persona."
          ],
          steps: ["Junta durante dos semanas las preguntas de los clientes, sin nombres ni datos de contacto.", "Pide a la IA que las agrupe y elija las 10 principales.", "Dale a la IA tus datos reales y pide respuestas cortas.", "Revisa cada respuesta.", "Publica las preguntas frecuentes y úsalas en tus respuestas."],
          words: [["Preguntas frecuentes", "una lista de preguntas comunes con sus respuestas (en inglés, FAQ)."], ["Chatbot", "un programa automático que contesta los mensajes de los clientes."]],
          slides: [
            { title: "Las mismas preguntas cada semana", bullets: ["Las preguntas frecuentes te ahorran tiempo", "Ayudan a los clientes a decidir más rápido"] },
            { title: "Créalas con preguntas reales", bullets: ["Júntalas dos semanas, sin nombres", "La IA las agrupa y hace borradores de respuestas", "Solo con los datos que le das"] },
            { title: "Úsalas en todos lados", bullets: ["Sitio web y respuestas guardadas", "Datos para cualquier chatbot", "Di cuando es automático; ofrece una persona"] }
          ],
          tryIt: "Junta al menos diez preguntas reales de clientes (sin nombres), usa la IA para agruparlas y hacer borradores de respuestas con tus datos, revisa cada una y guarda tus preguntas frecuentes.",
          youCanNow: "convertir preguntas reales de clientes en unas preguntas frecuentes revisadas."
        },
        {
          title: "Contestar quejas con calma",
          minutes: 5,
          goal: "Usar la IA para hacer el borrador de una respuesta tranquila y justa a una queja, y decidir cómo arreglarlo.",
          text: [
            "Una queja bien atendida puede ganarte un cliente para siempre. Un patrón sencillo: dale las gracias, discúlpate por su experiencia, di lo que vas a hacer y di cuándo. No discutas en público; ofrece seguir la conversación en privado.",
            "Cuando estás molesto, la IA te ayuda a mantener la calma. Resume la queja con tus palabras (sin nombres ni números de pedido) y pide: \"Haz el borrador de una respuesta corta y tranquila que dé las gracias, se disculpe, ofrezca [solución] e invite a escribirnos en privado.\"",
            "Tú decides la solución. No dejes que la IA prometa reembolsos o créditos que no has aceptado, y no uses la IA para escribir reseñas positivas falsas que entierren la mala; la FTC prohíbe las reseñas falsas, incluidas las escritas con IA."
          ],
          steps: ["Lee la queja y espera unos minutos antes de responder.", "Decide tú la solución justa.", "Resume la queja para la IA sin nombres ni números de pedido.", "Pide una respuesta tranquila: gracias, disculpa, la solución, cuándo, pasar a privado.", "Corrígela, revísala y envíala."],
          words: [["Queja", "cuando un cliente te dice que algo salió mal."], ["Solución", "lo que vas a hacer para arreglarlo, como repetir el trabajo o hacer un reembolso."]],
          slides: [
            { title: "Un patrón de respuesta", bullets: ["Da las gracias", "Discúlpate por su experiencia", "Di qué vas a hacer y cuándo"] },
            { title: "La IA te ayuda a mantener la calma", bullets: ["Resume sin nombres ni números de pedido", "Pide un borrador corto y tranquilo", "Pasa la conversación a privado"] },
            { title: "Tú decides", bullets: ["La solución la eliges tú", "Nada de promesas que no aprobaste", "Nunca reseñas falsas para enterrar una mala"] }
          ],
          sources: [{ name: "FTC: regla final que prohíbe las reseñas y testimonios falsos (comunicado, en inglés)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Toma una queja real o inventada, decide la solución justa y usa la IA para hacer el borrador de una respuesta tranquila con el patrón de cuatro partes. Guárdala como tu plantilla de respuesta a quejas.",
          youCanNow: "contestar quejas con calma y justicia con ayuda de la IA, y decidir tú la solución."
        },
        {
          title: "Aprender de los comentarios de los clientes",
          minutes: 5,
          goal: "Usar la IA para encontrar patrones en las reseñas y los comentarios, y elegir una mejora.",
          text: [
            "Las reseñas, las respuestas a encuestas y los mensajes te dicen qué arreglar y qué mantener. Si los lees uno por uno, se te escapan los patrones. La IA es buena para agrupar.",
            "Copia de 20 a 50 reseñas o comentarios (quita los nombres) y pide: \"Agrupa estos comentarios en temas. Para cada tema, di cuántos comentarios lo mencionan y da un ejemplo. Haz la lista de las tres cosas que más les gustan a los clientes y los tres problemas principales.\"",
            "Revisa tú los conteos echando un vistazo, porque la IA puede contar mal. Luego elige un problema para arreglar este mes, arréglalo y diles a los clientes que los escuchaste."
          ],
          steps: ["Junta de 20 a 50 reseñas o comentarios y quita los nombres.", "Pide a la IA que los agrupe en temas con conteos y ejemplos.", "Échales un vistazo para revisar los temas y los conteos.", "Elige un problema para arreglar este mes.", "Diles a los clientes qué cambiaste."],
          words: [["Tema", "un asunto que aparece una y otra vez en los comentarios."], ["Encuesta", "un grupo corto de preguntas que les haces a los clientes."]],
          slides: [
            { title: "Los comentarios marcan el camino", bullets: ["Reseñas, encuestas, mensajes", "Uno por uno, se escapan los patrones"] },
            { title: "La IA los agrupa", bullets: ["Primero quita los nombres", "Temas, conteos y ejemplos", "Las tres cosas favoritas y los tres problemas"] },
            { title: "Actúa", bullets: ["Revisa tú los conteos", "Arregla un problema este mes", "Diles a los clientes que los escuchaste"] }
          ],
          tryIt: "Tarea final: analiza con la IA al menos 20 comentarios, elige un arreglo y luego arma tu kit de ventas y atención: 10 prospectos calificados, dos mensajes de primer contacto, guía de llamada, preguntas frecuentes y plantilla de quejas.",
          youCanNow: "usar la IA en ventas y atención: encontrar prospectos, contactarlos bien, prepararte, atender a los clientes y seguir mejorando."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantener contentos a los clientes",
        questions: [
          { q: "¿De dónde deben salir las preguntas frecuentes?", options: ["De preguntas reales que hacen los clientes", "De preguntas que inventa la IA", "Del sitio de un competidor", "De suposiciones al azar"], answer: 0, why: "Las preguntas reales hacen útiles las preguntas frecuentes." },
          { q: "Si usas un chatbot, debes:", options: ["Esconder tus datos de contacto", "Fingir que es una persona", "Dejar que prometa reembolsos", "Decir a los clientes que es automático y ofrecer una forma de hablar con una persona"], answer: 3, why: "La honestidad y un camino fácil hacia una persona mantienen la confianza." },
          { q: "¿Quién decide la solución de una queja?", options: ["La IA", "Tú", "Los amigos del cliente", "Nadie"], answer: 1, why: "La IA escribe las palabras; tú decides la solución." },
          { q: "Aparece una mala reseña. ¿Qué respuesta es ilegal según las reglas de la FTC?", options: ["Publicar reseñas positivas falsas para enterrarla", "Responder con calma", "Arreglar el problema", "Invitar al cliente a hablar en privado"], answer: 0, why: "La FTC prohíbe las reseñas falsas, incluidas las escritas con IA." },
          { q: "La IA dice que 30 comentarios mencionan entregas lentas. ¿Qué debes hacer?", options: ["Borrar los comentarios", "Creerle totalmente", "Echar un vistazo para revisar tú el conteo", "Ignorarlo"], answer: 2, why: "La IA puede contar mal; revisa antes de actuar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para ventas y experiencia del cliente",
    questions: [
      { q: "Un prospecto es:", options: ["Un cliente que ya pagó", "Una persona o un negocio que podría comprarte", "Una queja", "Un producto"], answer: 1, why: "Esa es la definición." },
      { q: "Las cuatro preguntas para calificar son sobre:", options: ["Logo, tipo de letra, sitio web y app", "Color, tamaño, peso y forma", "Nombre, edad, dirección y teléfono", "Problema, dinero, decisión y tiempo"], answer: 3, why: "Muestran quién probablemente comprará." },
      { q: "¿Qué fuente de prospectos se puede usar?", options: ["El archivo de clientes de un competidor", "Una lista comprada de teléfonos personales", "Datos privados copiados de internet", "Directorios públicos de negocios"], answer: 3, why: "La información pública de negocios evita problemas de privacidad." },
      { q: "Un buen mensaje de primer contacto menciona:", options: ["Solo tus premios", "Algo real que notaste de la otra persona", "Una fecha límite falsa", "La dirección de su casa"], answer: 1, why: "Los detalles personales muestran que hiciste tu tarea." },
      { q: "CAN-SPAM exige que los correos comerciales incluyan:", options: ["Un descuento", "Tus datos bancarios", "Una forma de darse de baja", "Una foto"], answer: 2, why: "La baja es uno de los requisitos básicos." },
      { q: "Las solicitudes de baja se deben cumplir en un plazo de:", options: ["10 días hábiles", "1 año", "1 hora", "Nunca"], answer: 0, why: "La guía de la FTC dice 10 días hábiles." },
      { q: "Según la decisión de la FCC de 2024, las voces generadas con IA en llamadas se tratan como:", options: ["Exentas de todas las reglas", "Voces humanas", "Voces artificiales según la TCPA", "Correos electrónicos"], answer: 2, why: "Por eso se aplican las reglas de consentimiento." },
      { q: "Antes de enviar mensajes de texto de marketing debes:", options: ["Tener el consentimiento de la persona y revisar las reglas", "Enviar mensajes a todos los contactos de tu teléfono", "Usar mejor una voz de IA", "Esconder el nombre de tu negocio"], answer: 0, why: "Los mensajes de texto de marketing normalmente necesitan consentimiento." },
      { q: "Una conversación de venta debe ser sobre todo:", options: ["Hablar de ti", "Escuchar", "Leer rápido un guion", "Descuentos"], answer: 1, why: "Escuchar te dice lo que necesita el cliente." },
      { q: "Una pregunta abierta es una que:", options: ["No tiene respuesta", "Es grosera", "Es solo sobre el precio", "No se puede contestar solo con sí o no"], answer: 3, why: "Las preguntas abiertas hacen hablar a los clientes." },
      { q: "El juego de roles con IA te ayuda a:", options: ["Practicar respuestas a preguntas difíciles", "Firmar contratos", "Saltarte la preparación", "Escribir reseñas falsas"], answer: 0, why: "La práctica da seguridad." },
      { q: "Cuando la IA escribe respuestas a objeciones, debes:", options: ["No usarlas nunca", "Leerlas palabra por palabra", "Agregar garantías falsas", "Corregirlas para que sean ciertas y suenen a ti"], answer: 3, why: "Las respuestas honestas con tu voz generan confianza." },
      { q: "Las preguntas frecuentes ayudan porque:", options: ["Esconden los precios", "Reemplazan todo contacto con los clientes", "Contestan rápido las preguntas comunes", "Las exige la ley"], answer: 2, why: "Te ahorran tiempo a ti y a los clientes." },
      { q: "Antes de darle preguntas de clientes a la IA, debes:", options: ["Agregar sus números de tarjeta", "Quitar los nombres y los datos de contacto", "Pedirles sus contraseñas", "Publicarlas"], answer: 1, why: "Mantén los datos privados fuera de las herramientas de IA." },
      { q: "Las respuestas de las preguntas frecuentes se deben basar en:", options: ["Rumores viejos", "Lo que adivine la IA", "Los precios de un competidor", "Los datos que le das a la IA"], answer: 3, why: "La IA puede inventar datos si no se los das." },
      { q: "La respuesta a quejas en cuatro partes es:", options: ["Descuento, descuento, descuento, descuento", "Negar, discutir, bloquear, borrar", "Gracias, disculpa, la solución, cuándo", "Ignorarla"], answer: 2, why: "Es tranquila, justa y clara." },
      { q: "Cuando una queja es pública, una buena jugada es:", options: ["Responder con calma y ofrecer seguir en privado", "Discutir en los comentarios", "Publicar los datos del cliente", "Borrar tu cuenta"], answer: 0, why: "Pasar a privado evita una discusión pública." },
      { q: "¿Puede la IA prometer un reembolso en tu respuesta sin tu aprobación?", options: ["Sí, siempre", "No, tú decides la solución", "Solo los fines de semana", "Solo para pedidos grandes"], answer: 1, why: "Las decisiones de dinero se quedan contigo." },
      { q: "Un tema en los comentarios es:", options: ["El diseño de un sitio web", "Un asunto que aparece una y otra vez", "Una sola reseña", "Un tipo de letra"], answer: 1, why: "Los temas muestran patrones." },
      { q: "Después de encontrar el problema principal en los comentarios, debes:", options: ["Arreglarlo y decirles a los clientes que los escuchaste", "Ignorarlo", "Esconder las reseñas", "Comprar reseñas nuevas"], answer: 0, why: "Actuar según los comentarios genera lealtad." }
    ]
  }
};

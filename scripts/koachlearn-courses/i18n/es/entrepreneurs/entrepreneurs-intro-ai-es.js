"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-intro-ai). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "entrepreneurs-intro-ai-es",
  lang: "es",
  translationOf: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Introducción a la IA para emprendedores",
  skills: "Detectar tareas del negocio listas para la IA, Escribir una instrucción de negocio, Mejorar un borrador, Revisar datos y números, Proteger los datos del negocio y de los clientes",
  outcome: "elegir una tarea real de tu negocio, usar un asistente de IA gratuito para hacer un primer borrador, mejorar y revisar el resultado, y mantener fuera del chat los datos de los clientes y del dinero.",
  about: [
    "Este curso es para personas que empiezan o hacen crecer un pequeño negocio: un puesto de comida, un servicio de limpieza, un salón de belleza, una tienda en línea, una consultoría o un negocio extra que quieres hacer crecer.",
    "Vas a aprender qué pueden hacer los asistentes de IA por la dueña o el dueño de un negocio, cómo encontrar las tareas de tu semana que la IA puede hacer más rápido, cómo escribir una instrucción de negocio clara, cómo mejorar y revisar lo que te da la IA y cómo proteger la información de tus clientes.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\" con tu propio negocio. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Elige una tarea real de tu negocio (por ejemplo una lista de precios, un correo de bienvenida para clientes nuevos o una publicación semanal en redes). Usa un asistente de IA gratuito para hacer el borrador con una instrucción de negocio en tres partes, pide dos mejoras, revisa tú cada dato y cada número, quita cualquier dato privado de clientes o de dinero, y guarda la versión final lista para usar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que empiezan o hacen crecer un pequeño negocio, como un puesto de comida, un servicio de limpieza, un salón de belleza, una tienda en línea, una consultoría o un negocio extra. La mayoría hace todos los trabajos del negocio por su cuenta.",
    startingPoint: "Hacen a mano las tareas de su negocio y usan un teléfono o una computadora todos los días. Muchos han oído hablar de los asistentes de IA, pero no han usado uno para el trabajo del negocio, o lo han probado sin un método claro.",
    gap: "Los dueños pierden horas cada semana en tareas de escritura y planeación que un asistente de IA podría hacer en borrador en minutos. Si se usa sin cuidado, la IA puede poner precios equivocados, afirmaciones falsas o datos privados de clientes a nombre del negocio. Necesitan una forma segura y repetible de hacer borradores, mejorarlos y revisar textos del negocio con IA.",
    constraints: [
      "Palabras sencillas; no se necesita experiencia técnica",
      "Dispositivos: un teléfono o una computadora con un asistente de IA gratuito",
      "Tiempo: unos cinco minutos por lección, entre las tareas del negocio",
      "Lo que dice la publicidad debe ser cierto y poder probarse; las preguntas de impuestos y licencias van a fuentes oficiales o a un profesional",
      "Nada de números de tarjeta de clientes, datos bancarios ni otros datos privados en ninguna instrucción a la IA"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tus propias palabras", action: "explicar lo que un asistente de IA puede y no puede hacer por un negocio", standard: "incluyendo por qué el dueño revisa todo antes de que salga" },
    { id: "O2", condition: "Con una lista de diez tareas de tu semana", action: "clasificar las tareas semanales de tu negocio en tareas que la IA puede hacer en borrador, tareas en las que la IA te ayuda a pensar y tareas que te quedas tú", standard: "eligiendo una primera tarea segura y útil para la IA" },
    { id: "O3", condition: "Con la tarea que elegiste", action: "escribir una instrucción de negocio con la tarea, el contexto y el formato", standard: "para que el primer borrador esté casi listo para usar" },
    { id: "O4", condition: "Con un primer borrador de la IA", action: "hacer pedidos de seguimiento, uno a la vez, y agregar tus propios datos reales", standard: "hasta que suene como tu negocio, en no más de tres pedidos de seguimiento" },
    { id: "O5", condition: "Con un borrador mejorado", action: "revisar cada dato, número y afirmación contra tus propios registros o una fuente oficial", standard: "quitando cualquier afirmación que no puedas probar" },
    { id: "O6", condition: "Siempre que uses la IA para el negocio", action: "mantener fuera de las instrucciones los datos privados de clientes y de dinero, y detectar estafas de pagos", standard: "usando marcadores y sin compartir números de tarjeta, de banco ni de cuenta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Lo que la IA puede hacer por tu negocio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la IA, en términos de negocio",
          minutes: 4,
          goal: "Explicar con tus palabras lo que un asistente de IA puede y no puede hacer por un negocio.",
          text: [
            "Un asistente de IA es un programa de computadora al que le escribes o le hablas con palabras de todos los días. Algunos gratuitos y conocidos son ChatGPT, Microsoft Copilot y Google Gemini. Le pides algo y te escribe un borrador en segundos.",
            "Para la dueña o el dueño de un negocio, piensa en él como un ayudante rápido para primeros borradores. Es bueno escribiendo correos, publicaciones para redes y descripciones de productos, convirtiendo notas en un plan, resumiendo documentos largos, generando nombres e ideas y explicando palabras de negocios que no conoces.",
            "No es tu contador, ni tu abogado, ni tu cliente. No conoce tus precios, tus clientes ni las reglas de tu localidad a menos que se los digas, y se puede equivocar aunque suene muy seguro. Tú eres el dueño: tú decides qué sale con el nombre de tu negocio."
          ],
          words: [["Asistente de IA", "un programa de computadora con el que conversas escribiendo o hablando, y que escribe respuestas y borradores."], ["Primer borrador", "una versión inicial de algo que vas a revisar y mejorar antes de usarlo."]],
          slides: [
            { title: "IA para negocios = ayudante rápido de borradores", bullets: ["Le pides con palabras de todos los días", "Escribe un borrador en segundos", "Opciones gratuitas: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Es bueno para", bullets: ["Correos, publicaciones, descripciones de productos", "Convertir notas en planes", "Resúmenes y generar ideas"] },
            { title: "No es", bullets: ["Tu contador ni tu abogado", "Conocedor de tus precios o clientes si no se lo dices", "Siempre correcto, aunque suene seguro"] }
          ],
          tryIt: "Anota tres cosas que hiciste para tu negocio la semana pasada que tuvieron que ver con escribir, planear o explicar. Encierra en un círculo la que te tomó más tiempo.",
          youCanNow: "decir lo que un asistente de IA puede hacer por un negocio y por qué igual revisas todo antes de que salga.",
          quickCheck: [
            { objective: "O1", q: "¿Qué necesita de ti un asistente de IA para escribir sobre tu negocio?", options: ["Tus precios, horarios y datos reales", "Nada; ya conoce tu negocio", "La contraseña de tu banco", "Un plan de pago"], answer: 0, why: "La IA no conoce tu negocio a menos que tú se lo digas." },
            { objective: "O1", q: "La IA escribe un volante para tu salón de belleza. ¿Qué haces antes de imprimirlo?", options: ["Imprimirlo de inmediato", "Leerlo y revisarlo, porque sale a tu nombre", "Dejar que la IA lo imprima", "Enviarlo primero a los clientes"], answer: 1, why: "El dueño es responsable de todo lo que lleva el nombre del negocio." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar las tareas que la IA puede acelerar",
          minutes: 5,
          goal: "Hacer la lista de las tareas de tu semana que son buenas para la IA y de las que no.",
          text: [
            "Las mejores primeras tareas para la IA son las que repites, que tienen que ver con palabras y donde un error es fácil de detectar antes de que alguien lo vea. Ejemplos: contestar preguntas comunes de clientes, escribir una publicación semanal, hacer el borrador de un volante, hacer una lista de pasos para un nuevo ayudante o resumir un correo largo de un proveedor.",
            "Tareas que NO conviene dejarle solo a la IA: cualquier cosa que envíe dinero, firme un contrato, fije una postura legal o de impuestos, o le haga una promesa a un cliente sin que tú lo leas primero. La IA te puede ayudar a prepararte, pero la decisión final es tuya.",
            "Una forma sencilla de ordenarlas: escribe cada tarea en una línea y márcala como \"La IA hace el borrador, yo reviso\", \"La IA me ayuda a pensar\" o \"Lo hago yo\"."
          ],
          steps: ["Haz la lista de diez tareas que hiciste en las últimas dos semanas.", "Marca cada una: la IA hace el borrador / la IA me ayuda a pensar / lo hago yo.", "Elige la tarea de \"la IA hace el borrador\" que te quita más tiempo.", "Esa es tu primera tarea con IA."],
          words: [["Tarea repetida", "un trabajo que haces una y otra vez, como contestar la misma pregunta de los clientes."]],
          slides: [
            { title: "Buenas primeras tareas para la IA", bullets: ["Las repites", "Son sobre todo palabras", "Los errores se detectan fácil antes de que alguien los vea"] },
            { title: "Ejemplos", bullets: ["Respuestas a preguntas comunes de clientes", "Publicación semanal o volante", "Lista de pasos para un nuevo ayudante"] },
            { title: "Quédatelas tú", bullets: ["Enviar dinero", "Firmar contratos, decisiones de impuestos y legales", "Promesas a clientes que no has leído"] },
            { title: "Ordena tus tareas", bullets: ["La IA hace el borrador, yo reviso", "La IA me ayuda a pensar", "Lo hago yo"] }
          ],
          tryIt: "Haz tu lista de diez tareas y ordénalas en los tres grupos. Elige la tarea de \"la IA hace el borrador, yo reviso\" que vas a usar en el resto de este curso.",
          youCanNow: "ordenar las tareas de tu negocio y elegir una primera tarea segura y útil para la IA.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace que una tarea sea buena como primera tarea para la IA?", options: ["Mueve dinero", "Necesita una firma", "Se repite, es casi toda de palabras y es fácil de revisar", "Usa datos privados de clientes"], answer: 2, why: "Las tareas de escritura que se repiten y son fáciles de revisar son logros seguros." },
            { objective: "O2", q: "Una tarea de tu lista es aprobar el pago a un proveedor. ¿Cómo la clasificas?", options: ["La IA hace el borrador y yo reviso", "La IA la hace sola", "La IA me ayuda a pensar", "Me la quedo yo"], answer: 3, why: "Las decisiones de dinero se quedan con el dueño." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir una instrucción de negocio clara",
          minutes: 5,
          goal: "Escribir una instrucción de negocio en tres partes que dé un borrador útil a la primera.",
          text: [
            "Lo que le escribes a un asistente de IA se llama instrucción (en inglés, prompt). Una instrucción de negocio funciona mejor con tres partes: la tarea, el contexto del negocio y el formato que quieres.",
            "Ejemplo: \"Escribe un correo corto de bienvenida para los clientes nuevos de mi servicio de limpieza de casas en Atlanta. Limpiamos las casas cada dos semanas y los clientes nos pueden mandar un mensaje de texto para cambiar la cita. Que sea amable, de menos de 120 palabras, con un asunto claro.\"",
            "Una instrucción floja como \"escribe un correo\" obliga al asistente a adivinar. No conoce tu negocio, tu cliente ni tu tono, así que el borrador será general. Nunca pongas en la instrucción nombres de clientes, números de teléfono, números de tarjeta ni contraseñas; esos los puedes agregar tú después."
          ],
          steps: ["Tarea: di exactamente qué quieres que escriba o planee.", "Contexto: qué vendes, quién es el cliente, dónde estás, tu tono.", "Formato: extensión, lista o párrafos, asunto, nivel de lectura.", "Lee la instrucción buscando datos privados y quítalos antes de enviarla."],
          words: [["Instrucción", "lo que escribes o dices a un asistente de IA para pedirle algo (prompt)."], ["Contexto", "los datos de fondo que necesita la IA, como qué vendes y a quién le vendes."]],
          slides: [
            { title: "Tres partes de una instrucción de negocio", bullets: ["1. Tarea: lo que quieres", "2. Contexto: tu negocio y tu cliente", "3. Formato: extensión, estilo, diseño"] },
            { title: "Floja vs. clara", bullets: ["Floja: \"escribe un correo\"", "Clara: correo de bienvenida, servicio de limpieza, Atlanta,", "amable, menos de 120 palabras, con asunto"] },
            { title: "Déjalo fuera de la instrucción", bullets: ["Nombres y teléfonos de clientes", "Números de tarjeta y de banco", "Contraseñas"] }
          ],
          tryIt: "Escribe una instrucción en tres partes para la tarea que elegiste en la Lección 2. Envíala a un asistente de IA gratuito y guarda el primer borrador.",
          youCanNow: "escribir una instrucción de negocio con tarea, contexto y formato, y dejar fuera los datos privados.",
          quickCheck: [
            { objective: "O3", q: "¿Qué parte de una instrucción de negocio es el formato?", options: ["\"De menos de 100 palabras y con un asunto\"", "\"Escribe un correo de bienvenida\"", "\"Somos una estética para mascotas en Phoenix\"", "\"Gracias por tu ayuda\""], answer: 0, why: "El formato dice cómo quieres la respuesta: extensión, orden o estilo." },
            { objective: "O3", q: "Tu instrucción dice solo \"escribe una publicación\". ¿Qué agregas?", options: ["Nada más", "Tu negocio, tus clientes y qué tan larga y con qué estilo la quieres", "Tu lista de clientes", "El saldo de tu banco"], answer: 1, why: "El contexto y el formato convierten un pedido vago en un borrador útil." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo que la IA puede hacer por tu negocio",
        questions: [
          { objective: "O1", q: "¿Cuál es la mejor forma de ver a un asistente de IA en tu negocio?", options: ["Como tu contador", "Como un reemplazo de tu criterio", "Como un ayudante rápido de primeros borradores que tú revisas", "Como un cliente"], answer: 2, why: "La IA hace borradores rápido, pero tú revisas y decides qué sale." },
          { objective: "O2", q: "¿Qué tarea es una buena primera tarea para un asistente de IA?", options: ["Hacer el borrador de una publicación semanal que vas a leer primero", "Pagarle a un proveedor", "Firmar un contrato de alquiler", "Elegir tu forma de declarar impuestos"], answer: 0, why: "Se repite, es sobre todo palabras y los errores se detectan fácil antes de que alguien los vea." },
          { objective: "O3", q: "¿Cuál es una instrucción de negocio en tres partes?", options: ["\"escribe un correo\"", "\"ayúdame\"", "\"cosas del negocio\"", "\"Correo de bienvenida para clientes nuevos de limpieza en Atlanta; limpiamos cada dos semanas; amable, menos de 120 palabras, con asunto.\""], answer: 3, why: "Da la tarea, el contexto del negocio y el formato." },
          { objective: "O6", q: "¿Qué debes dejar fuera de una instrucción?", options: ["Tu tipo de negocio", "El número de tarjeta de un cliente", "El tono que quieres", "La extensión que quieres"], answer: 1, why: "Los números de tarjeta y otros datos privados nunca deben ir en un chat de IA." },
          { objective: "O1", q: "Un borrador de IA lleva el nombre de tu negocio. ¿Quién es responsable?", options: ["La empresa de IA", "Tú, el dueño", "Nadie", "El cliente"], answer: 1, why: "Tú decides qué sale con el nombre de tu negocio." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA con seguridad y bien",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mejorar el borrador con preguntas de seguimiento",
          minutes: 4,
          goal: "Convertir un primer borrador en una versión que de verdad usarías, con pedidos de seguimiento.",
          text: [
            "La primera respuesta es un borrador. El asistente recuerda los mensajes anteriores del mismo chat, así que le puedes pedir que cambie una cosa a la vez.",
            "Pedidos de seguimiento útiles para textos de negocio: \"Haz que suene más a un pequeño negocio local.\" \"Recórtalo a 80 palabras.\" \"Agrega un siguiente paso claro para el cliente.\" \"Dame tres asuntos para elegir.\" \"Escríbelo con un nivel de lectura fácil.\"",
            "Agrega los datos que solo tú conoces: tu horario real, tus precios reales y tus políticas reales. Luego léelo en voz alta. Si no suena a ti, pide un cambio o corrígelo tú."
          ],
          steps: ["Lee el primer borrador.", "Elige lo que más quieres cambiar.", "Pide ese cambio.", "Agrega tus datos reales.", "Léelo en voz alta y repite si hace falta."],
          words: [["Seguimiento", "un segundo pedido en el mismo chat que cambia la respuesta o la amplía."], ["Llamada a la acción", "el siguiente paso claro que quieres que dé el cliente, como \"Mándanos un mensaje para reservar\"."]],
          slides: [
            { title: "La primera respuesta es un borrador", bullets: ["Pide un cambio a la vez", "El chat recuerda lo que dijiste"] },
            { title: "Seguimientos para negocios", bullets: ["\"Que suene más a un pequeño negocio local.\"", "\"Recórtalo a 80 palabras.\"", "\"Agrega un siguiente paso claro para el cliente.\""] },
            { title: "Hazlo tuyo", bullets: ["Agrega tu horario, tus precios y tus políticas reales", "Léelo en voz alta", "Corrige hasta que suene a ti"] }
          ],
          tryIt: "Toma tu borrador de la Lección 3. Pide dos cambios, uno a la vez, y luego agrega tus propios datos reales. Compara la primera versión con la final.",
          youCanNow: "mejorar un borrador de IA con seguimientos y hacer que suene a tu negocio.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un pedido de seguimiento?", options: ["Un chat nuevo sobre otra cosa", "Un recordatorio de pago", "Un segundo pedido en el mismo chat que cambia la respuesta", "Una reseña de un cliente"], answer: 2, why: "Los pedidos de seguimiento mejoran el borrador que ya tienes." },
            { objective: "O4", q: "El borrador está bien, pero es demasiado largo. ¿Qué pides después?", options: ["Empezar de nuevo en un chat nuevo", "Pedir cinco versiones más a la vez", "Aceptarlo así", "\"Hazlo más corto, de menos de 80 palabras\""], answer: 3, why: "Un cambio claro a la vez mejora el borrador." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Revisar datos, números y afirmaciones",
          minutes: 5,
          goal: "Revisar un borrador de IA en busca de datos equivocados, números equivocados y promesas que no puedes cumplir.",
          text: [
            "La IA puede inventar cosas: un precio que nunca pusiste, una regla que no existe, un total equivocado o una afirmación como \"el mejor de la ciudad\" que no puedes demostrar. A veces a este tipo de invento se le llama alucinación.",
            "Antes de que algo le llegue a un cliente, revisa tres cosas. Datos: horario, precios, direcciones, políticas. Números: ¿suman bien los totales y los porcentajes? Haz las cuentas tú o en una hoja de cálculo. Afirmaciones: ¿lo puedes demostrar? En Estados Unidos, la FTC dice que los anuncios deben ser veraces, no engañosos y estar respaldados por pruebas.",
            "Para preguntas de impuestos, temas legales, licencias o dinero, usa la IA solo para entender las palabras y luego confirma con la fuente oficial (muchas veces un sitio .gov) o con un profesional como un contador o un abogado."
          ],
          steps: ["Resalta cada dato, número y afirmación del borrador.", "Revisa los datos con tus propios registros.", "Vuelve a hacer tú las cuentas.", "Quita o suaviza cualquier afirmación que no puedas demostrar.", "Confirma los temas de impuestos, legales o de licencias con una fuente oficial o un profesional."],
          words: [["Alucinación", "cuando la IA escribe algo que suena cierto pero es inventado."], ["Afirmación", "algo que tu negocio dice que es cierto, como \"servicio el mismo día\"."], ["FTC", "la Comisión Federal de Comercio, la agencia de EE. UU. que hace cumplir las reglas de publicidad veraz."]],
          slides: [
            { title: "La IA puede inventar cosas", bullets: ["Precios que nunca pusiste", "Reglas que no existen", "Totales equivocados"] },
            { title: "Revisa tres cosas", bullets: ["Datos: horario, precios, políticas", "Números: vuelve a hacer las cuentas", "Afirmaciones: ¿lo puedes demostrar?"] },
            { title: "Publicidad veraz", bullets: ["FTC: los anuncios deben ser veraces y no engañosos", "Las afirmaciones necesitan pruebas"] },
            { title: "Impuestos, temas legales, licencias", bullets: ["Usa la IA para entender las palabras", "Confirma en el sitio oficial .gov", "O pregunta a un contador o abogado"] }
          ],
          sources: [{ name: "FTC: Lo básico de la publicidad y el marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Resalta cada dato, número y afirmación de tu borrador mejorado. Revisa cada uno, corrige lo que esté mal y quita cualquier afirmación que no puedas demostrar.",
          youCanNow: "revisar un borrador de IA en busca de datos equivocados, números equivocados y afirmaciones que no puedes respaldar.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una alucinación de la IA?", options: ["Algo que suena cierto pero es inventado", "Un tipo de anuncio", "Una conexión a internet lenta", "Una queja de un cliente"], answer: 0, why: "La IA puede escribir datos inventados que suenan seguros." },
            { objective: "O5", q: "El borrador dice \"el número 1 de la ciudad\". No tienes cómo probarlo. ¿Qué haces?", options: ["Dejarlo; suena bien", "Quitarlo o cambiarlo por algo que sea cierto", "Agregar \"tal vez\"", "Preguntarle a la IA si es cierto"], answer: 1, why: "Lo que dice la publicidad debe ser cierto y tener pruebas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger la información de los clientes y del negocio",
          minutes: 5,
          goal: "Usar la IA para tareas del negocio sin compartir datos privados de clientes ni de dinero.",
          text: [
            "Lo que escribes en un chat de IA puede quedar guardado por la empresa que lo maneja, y en algunos planes gratuitos se puede usar para mejorar su IA. Lee la configuración de privacidad de la herramienta y da por hecho que cualquier cosa que escribas la podría ver otra persona.",
            "Nunca escribas en un chat de IA: nombres de clientes junto con teléfonos o direcciones, números de tarjeta o de banco, contraseñas, números de Seguro Social o de identificación fiscal, ni datos privados de salud. Usa marcadores como \"[nombre del cliente]\" y llénalos tú después.",
            "Ten cuidado también con las estafas con IA dirigidas a negocios: facturas falsas, correos que copian el estilo de un proveedor y llamadas con una voz que suena como alguien que conoces pidiendo un pago urgente. Antes de pagar, devuelve la llamada a un número que ya sabes que es real."
          ],
          steps: ["Antes de enviar una instrucción, léela buscando datos privados.", "Cámbialos por marcadores como \"[nombre del cliente]\".", "Revisa la configuración de privacidad o de datos de la herramienta.", "Verifica cualquier pedido de pago urgente llamando a un número que ya conoces."],
          words: [["Marcador", "algo provisional como \"[nombre del cliente]\" que cambias por el dato real después, fuera del chat de IA."], ["Estafa con facturas", "una factura falsa hecha para que parezca de un proveedor real."]],
          slides: [
            { title: "Da por hecho que lo pueden ver", bullets: ["Los chats pueden quedar guardados", "Los planes gratuitos pueden usar los chats para mejorar la IA", "Revisa la configuración de privacidad"] },
            { title: "Nunca escribas en la IA", bullets: ["Teléfonos y direcciones de clientes", "Números de tarjeta, banco e identificación fiscal", "Contraseñas y datos de salud"] },
            { title: "Usa marcadores", bullets: ["\"[nombre del cliente]\", \"[total del pedido]\"", "Llena tú los datos reales después"] },
            { title: "Estafas a negocios", bullets: ["Facturas falsas que parecen reales", "Llamadas urgentes de pago con una voz conocida", "Devuelve la llamada a un número que conoces"] }
          ],
          tryIt: "Tarea final: termina la tarea de negocio que elegiste. Asegúrate de que la instrucción y la versión final no tengan datos privados de clientes ni de dinero, revisa cada dato, número y afirmación, y guárdala lista para usar.",
          youCanNow: "usar la IA para una tarea real del negocio protegiendo a tus clientes, tu dinero y tu nombre.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un marcador en una instrucción a la IA?", options: ["El teléfono real de un cliente", "Una contraseña", "Una etiqueta como [nombre del cliente] en lugar de los datos reales", "Una página en blanco"], answer: 2, why: "Los marcadores te permiten recibir ayuda sin compartir datos privados." },
            { objective: "O6", q: "Un mensaje de tu \"banco\" te pide que respondas confirmando tu número de cuenta. ¿Qué haces?", options: ["Responder con el número", "Pedirle a la IA que responda por ti", "Reenviarlo a los clientes", "Contactar al banco con un número que ya conoces"], answer: 3, why: "Usa un contacto en el que ya confías, nunca el que viene en un mensaje urgente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA con seguridad y bien",
        questions: [
          { objective: "O4", q: "El borrador de la IA suena demasiado formal para tu pequeña tienda. ¿Qué haces?", options: ["Lo usas de todos modos", "Borras la app de IA", "Se lo mandas a un abogado", "Pides: \"Haz que suene más a un pequeño negocio local.\""], answer: 3, why: "Un seguimiento le pide al asistente que cambie el tono." },
          { objective: "O5", q: "Un borrador de IA dice \"abierto hasta las 9 pm\", pero cierras a las 7. ¿Qué demuestra esto?", options: ["La IA puede inventar datos, así que los revisas", "La IA siempre tiene razón", "Tu horario está mal", "El cliente no lo va a notar"], answer: 0, why: "La IA puede inventar datos; tú los revisas con tus propios registros." },
          { objective: "O5", q: "El borrador dice \"el más barato del estado\". No has comparado precios. ¿Qué debes hacer?", options: ["Dejarlo, suena bien", "Ponerlo más grande", "Quitarlo o cambiarlo por algo que puedas demostrar", "Agregar \"garantizado\""], answer: 2, why: "Los anuncios deben ser veraces y estar respaldados por pruebas." },
          { objective: "O6", q: "¿Cómo debes incluir el nombre de un cliente en una instrucción de IA?", options: ["Escribir su nombre completo y su teléfono", "Escribir también su número de tarjeta", "Pedirle al cliente su contraseña", "Usar un marcador como \"[nombre del cliente]\""], answer: 3, why: "Los marcadores mantienen los datos privados fuera del chat." },
          { objective: "O6", q: "Recibes una llamada urgente con la voz de tu proveedor pidiéndote que pagues hoy a una cuenta nueva. ¿Qué haces?", options: ["Pagas de inmediato", "Envías tu acceso al banco", "Devuelves la llamada al proveedor a un número que ya conoces", "Respondes con el código que te llegó al teléfono"], answer: 2, why: "La IA puede copiar voces; verifica en un número conocido antes de pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA para emprendedores",
    questions: [
      { objective: "O1", q: "En tu negocio, un asistente de IA se usa mejor como:", options: ["Tu abogado", "Un ayudante rápido de primeros borradores", "Tu banco", "El que toma la decisión final"], answer: 1, why: "Hace borradores; tú revisas y decides." },
      { objective: "O1", q: "¿Cuál es un asistente de IA gratuito y conocido?", options: ["Google Gemini", "Una caja registradora", "Una impresora", "Una celda de hoja de cálculo"], answer: 0, why: "Gemini, ChatGPT y Copilot son asistentes de IA conocidos." },
      { objective: "O1", q: "¿Qué de esto NO sabe un asistente de IA a menos que se lo digas?", options: ["Qué es un plan de negocio", "Cómo escribir una lista", "Tus precios reales", "Palabras comunes de negocios"], answer: 2, why: "No conoce tus precios, tus clientes ni tus políticas a menos que se los des." },
      { objective: "O2", q: "Las buenas primeras tareas para la IA son las que:", options: ["Se repiten, son sobre todo palabras y son fáciles de revisar", "Envían dinero", "Firman contratos", "Fijan tu postura de impuestos"], answer: 0, why: "Tienen poco riesgo y ahorran tiempo." },
      { objective: "O2", q: "¿Qué tarea debes quedarte tú?", options: ["Generar nombres para la tienda", "Hacer el borrador de un volante", "Hacer una lista de pasos", "Aprobar un pago a un proveedor"], answer: 3, why: "Las decisiones de dinero se quedan contigo." },
      { objective: "O2", q: "Al ordenar tareas, \"la IA me ayuda a pensar\" significa:", options: ["La IA toma la decisión", "Usas la IA para generar ideas o que te explique, y luego decides tú", "Nunca usas IA", "La IA lo envía por ti"], answer: 1, why: "La IA apoya tu pensamiento; tú decides." },
      { objective: "O3", q: "Las tres partes de una instrucción de negocio son:", options: ["Nombre, contraseña, dirección", "Tarea, contexto, formato", "Hola, por favor, gracias", "Precio, impuesto, total"], answer: 1, why: "La tarea, el contexto y el formato le dan a la IA lo que necesita." },
      { objective: "O3", q: "¿Cuál es contexto del negocio?", options: ["\"Menos de 100 palabras\"", "\"Escribe un correo\"", "\"Gracias\"", "\"Somos un lavado de autos a domicilio en Dallas para padres ocupados\""], answer: 3, why: "El contexto explica tu negocio y tu cliente." },
      { objective: "O3", q: "¿Cuál es una indicación de formato?", options: ["\"Dame una lista de 5 puntos cortos\"", "\"Vendemos pasteles\"", "\"Nuestros clientes son estudiantes\"", "\"Estamos en Lagos\""], answer: 0, why: "El formato dice cómo debe verse la respuesta." },
      { objective: "O4", q: "Un pedido de seguimiento es:", options: ["Una app nueva", "Una reseña de un cliente", "Un segundo pedido en el mismo chat que cambia la respuesta", "Un tipo de factura"], answer: 2, why: "Los seguimientos mejoran el borrador paso a paso." },
      { objective: "O4", q: "¿Qué seguimiento agrega una llamada a la acción?", options: ["\"Hazlo más largo sin razón.\"", "\"Quita todos los detalles.\"", "\"Agrega mi contraseña.\"", "\"Agrega un siguiente paso claro, como Mándanos un mensaje para reservar.\""], answer: 3, why: "Una llamada a la acción le dice al cliente qué hacer después." },
      { objective: "O4", q: "¿Por qué leer un borrador en voz alta?", options: ["Para que la IA vaya más rápido", "Para ahorrar batería", "Para revisar que suene a ti", "Lo exige la ley"], answer: 2, why: "Oírlo te ayuda a notar el tono y los errores." },
      { objective: "O5", q: "Una \"alucinación\" de la IA es:", options: ["Una respuesta lenta", "Algo que suena cierto pero es inventado", "Un tipo de logo", "Una queja de un cliente"], answer: 1, why: "La IA puede inventar datos que suenan reales." },
      { objective: "O5", q: "La IA suma mal tu lista de precios. ¿Cuál es la lección?", options: ["Vuelve a hacer las cuentas tú o en una hoja de cálculo", "Confía en las cuentas de la IA", "Sube tus precios", "Deja de vender"], answer: 0, why: "Revisa siempre los números antes de usarlos." },
      { objective: "O5", q: "Según la FTC, las afirmaciones publicitarias deben ser:", options: ["Graciosas", "Escritas por IA", "Veraces, no engañosas y respaldadas por pruebas", "Cortas"], answer: 2, why: "Las reglas de publicidad veraz de la FTC lo exigen." },
      { objective: "O5", q: "Para una pregunta de impuestos o de licencias, la IA se usa mejor para:", options: ["Entender las palabras antes de revisar la fuente oficial o consultar a un profesional", "Tomar la decisión final", "Hacer el trámite por ti", "Reemplazar a tu contador"], answer: 0, why: "Confirma los temas de impuestos y legales con fuentes oficiales o profesionales." },
      { objective: "O6", q: "¿Qué NUNCA debe ir en un chat de IA?", options: ["\"Hazlo más amable\"", "Tu tipo de negocio", "El tono que quieres", "El número de tarjeta de un cliente"], answer: 3, why: "Los números de tarjeta son datos privados de dinero." },
      { objective: "O6", q: "Un marcador como \"[nombre del cliente]\" te permite:", options: ["Esconder los precios a los clientes", "Recibir ayuda sin compartir datos privados", "Saltarte la revisión", "Pagar más rápido"], answer: 1, why: "Tú llenas el dato real después." },
      { objective: "O6", q: "En algunos planes gratuitos de IA, tus chats pueden:", options: ["Desaparecer antes de que los leas", "Guardarse y usarse para mejorar la IA", "Enviarse a tus clientes", "Imprimirse"], answer: 1, why: "Por eso revisas la configuración de privacidad y dejas fuera los datos privados." },
      { objective: "O6", q: "Un correo que parece de tu proveedor te pide pagar con urgencia a una cuenta bancaria nueva. ¿Mejor paso?", options: ["Pagar ya", "Responder con tu acceso al banco", "Reenviarlo a todos tus clientes", "Llamar al proveedor a un número que ya conoces"], answer: 3, why: "Las facturas falsas son comunes; verifica en un número conocido." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      8,
      9,
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
        name: "Instrucción de negocio",
        objective: "O3",
        notYet: "La instrucción es vaga, por ejemplo \"escribe un correo\".",
        meets: "La instrucción tiene la tarea, contexto sobre el negocio y un formato.",
        exceeds: "También nombra al cliente y la meta, y el primer borrador está casi listo."
      },
      {
        name: "Borrador mejorado",
        objective: "O4",
        notYet: "El primer borrador se usó tal como salió.",
        meets: "Dos cambios de seguimiento hechos uno a la vez, más los datos propios del dueño.",
        exceeds: "Puede decir qué corrigió cada cambio, y la versión final suena como el negocio."
      },
      {
        name: "Datos y afirmaciones revisados",
        objective: "O5",
        notYet: "Se copió un precio, un horario, un total o una afirmación sin revisarlo.",
        meets: "Cada dato y número revisado; cada afirmación es cierta y se puede probar.",
        exceeds: "Anota dónde revisó cada dato, y rehízo las cuentas en una hoja de cálculo."
      },
      {
        name: "Datos privados fuera",
        objective: "O6",
        notYet: "La instrucción o la versión final tiene datos de tarjetas, de banco o privados de clientes.",
        meets: "Ningún dato privado de clientes ni de dinero; se usaron marcadores donde hacía falta.",
        exceeds: "También revisó el ajuste de privacidad de la herramienta de IA para guardar chats."
      },
      {
        name: "Listo para usar",
        objective: "O1",
        notYet: "La versión final no está terminada o no se guardó.",
        meets: "Guardada, revisada y lista para usar en la tarea elegida.",
        exceeds: "Guardada como plantilla que el dueño puede volver a usar la próxima vez."
      }
    ]
  },
  evaluation: {
    results: [
      "Dueños que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que usan un borrador de IA para una tarea real del negocio en 30 días (encuesta de seguimiento)",
      "Dueños que reportan horas ahorradas cada semana en escritura y planeación",
      "Participantes que empiezan otro curso de Koach Learn para emprendedores en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini",
      "Tus precios, horarios y datos reales del negocio para revisar",
      "Unos 60 minutos en total para las lecciones, la práctica, las comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "En un taller, pide a cada dueño que traiga una tarea real y trabaje en ella durante las seis lecciones.",
      "Recuerda a los dueños que nunca peguen números de tarjeta, datos bancarios ni listas de clientes en un chat de IA.",
      "Forma parejas de dueños para que lean en voz alta los borradores del otro y detecten afirmaciones que necesitan pruebas.",
      "Envía las preguntas de impuestos y licencias a fuentes oficiales o a un profesional, no a la IA.",
      "Califica la tarea final con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};

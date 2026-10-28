"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-ai-tools). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "entrepreneurs-ai-tools-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-tools",
  category: "Entrepreneurs",
  name: "Herramientas de IA que todo emprendedor debe conocer",
  skills: "Elegir el tipo correcto de herramienta de IA, Usar un asistente de chat para escribir, Hacer imágenes con Canva, Usar la IA en documentos y hojas de cálculo, Armar un kit sencillo de herramientas de IA",
  outcome: "elegir y usar herramientas de IA gratuitas para los trabajos principales de tu negocio (escribir, diseñar, documentos y hojas de cálculo, y reuniones) y armar un kit de una página que diga qué herramienta usas para cada trabajo.",
  about: [
    "Hay miles de herramientas de IA y salen nuevas cada semana. Este curso es para dueños de negocios que quieren un kit corto y práctico en lugar de perseguir cada app nueva.",
    "Vas a aprender los tipos principales de herramientas de IA y luego practicar con opciones gratuitas, reales y muy usadas: asistentes de chat (ChatGPT, Microsoft Copilot, Google Gemini), diseño (Canva), documentos y hojas de cálculo (Google Docs y Sheets, Microsoft 365) y ayuda para tomar notas y para reuniones.",
    "Cada lección dura unos cinco minutos y termina con una tarea que haces sobre tu propio negocio. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los nombres, las funciones y los precios de las herramientas cambian seguido, así que el curso te dice cómo revisar lo que está vigente."
  ],
  finalTask: "Haz una página \"Mi kit de herramientas de IA\" para tu negocio: escribe cuatro trabajos (escribir, diseñar, documentos o números, y reuniones o notas), la herramienta gratuita que vas a usar para cada uno, una cosa que hiciste con ella durante este curso y una regla para mantener seguros los datos de los clientes en esa herramienta.",
  chapters: [
    {
      name: "Capítulo 1: Los tipos principales de herramientas de IA",
      lessons: [
        {
          title: "El mapa de herramientas de IA: cuatro trabajos, no cuatrocientas apps",
          minutes: 4,
          goal: "Ordenar las herramientas de IA según el trabajo que hacen para tu negocio.",
          text: [
            "La mayoría de las herramientas de IA que necesita un pequeño negocio caben en cuatro trabajos. Escribir y pensar: asistentes de chat como ChatGPT, Microsoft Copilot y Google Gemini. Diseñar: herramientas como Canva que hacen imágenes, volantes y gráficos para redes. Documentos y números: la IA que viene en Google Docs y Sheets o en Microsoft Word y Excel. Reuniones y notas: herramientas que graban, transcriben y resumen.",
            "Muchas herramientas ya hacen más de un trabajo. Un asistente de chat también puede hacer una imagen o leer una hoja de cálculo que subas. Está bien, pero empezar con una herramienta por trabajo mantiene las cosas sencillas.",
            "Antes de agregar cualquier herramienta nueva, pregúntate: ¿Qué trabajo hace? ¿Ya tengo una herramienta para ese trabajo? ¿Tiene un plan gratuito? ¿Qué pasa con los datos que pongo?"
          ],
          words: [["Asistente de chat", "una herramienta de IA con la que hablas en una ventana de chat, como ChatGPT, Copilot o Gemini."], ["Transcribir", "convertir palabras habladas en texto escrito."]],
          slides: [
            { title: "Cuatro trabajos", bullets: ["Escribir y pensar: asistentes de chat", "Diseñar: Canva y parecidos", "Documentos y números: Docs, Sheets, Word, Excel", "Reuniones y notas: transcribir y resumir"] },
            { title: "Empieza sencillo", bullets: ["Al principio, una herramienta por trabajo", "Muchas se traslapan, y está bien"] },
            { title: "Antes de agregar una herramienta, pregunta", bullets: ["¿Qué trabajo hace?", "¿Ya tengo una?", "¿Tiene plan gratuito? ¿A dónde van mis datos?"] }
          ],
          tryIt: "Escribe los cuatro trabajos en una hoja. Al lado de cada uno, escribe cualquier herramienta que ya uses para eso (aunque no sea de IA). Deja en blanco donde no tengas ninguna.",
          youCanNow: "ordenar las herramientas de IA en cuatro trabajos de negocio y hacer cuatro preguntas antes de agregar una nueva."
        },
        {
          title: "Asistentes de chat: elegir uno y usarlo bien",
          minutes: 5,
          goal: "Abrir un asistente de chat gratuito y usarlo para un trabajo real de escritura del negocio.",
          text: [
            "ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) y Google Gemini (gemini.google.com) tienen versiones gratuitas. Todos escriben, resumen, generan ideas y explican. Elige el que vaya con las cuentas que ya usas: Copilot si tu negocio funciona con Microsoft, Gemini si funciona con Google, o cualquiera si no estás seguro.",
            "Usa en cada uno la misma instrucción en tres partes: la tarea, el contexto de tu negocio y el formato. Luego mejórala con seguimientos como \"más corto\", \"más amable\" o \"dame tres opciones\".",
            "Prueba la misma instrucción en dos asistentes y compara. Vas a ver rápido cuál va con tu estilo. Los planes gratuitos tienen límites que cambian; revisa en la página de precios de la herramienta lo que incluye hoy."
          ],
          steps: ["Abre un asistente en un navegador web o en su app oficial.", "Escribe una instrucción en tres partes para un trabajo real del negocio.", "Pide una mejora.", "Pega la misma instrucción en un segundo asistente y compara."],
          words: [["Plan gratuito", "una versión de una herramienta que puedes usar sin pagar, normalmente con límites."]],
          slides: [
            { title: "Tres asistentes de chat gratuitos", bullets: ["ChatGPT: chatgpt.com", "Microsoft Copilot: copilot.microsoft.com", "Google Gemini: gemini.google.com"] },
            { title: "¿Cuál?", bullets: ["Cuentas de Microsoft: prueba Copilot", "Cuentas de Google: prueba Gemini", "¿No sabes? Prueba dos y compara"] },
            { title: "Úsalo bien", bullets: ["Tarea + contexto + formato", "Pide un cambio a la vez", "Revisa los límites en su página de precios"] }
          ],
          tryIt: "Escribe una instrucción que pida una descripción de 50 palabras de tu negocio para un perfil de redes sociales. Pruébala en dos asistentes de chat. Quédate con la mejor y anota qué herramienta elegiste.",
          youCanNow: "elegir un asistente de chat que vaya con tus cuentas y usarlo para textos reales del negocio."
        },
        {
          title: "Diseñar con IA en Canva",
          minutes: 5,
          goal: "Hacer una imagen sencilla con la marca de tu negocio en Canva.",
          text: [
            "Canva (canva.com) es una herramienta de diseño con un plan gratuito, miles de plantillas y funciones de IA que pueden sugerir textos, generar imágenes y cambiar el tamaño de los diseños. No necesitas estudiar diseño para hacer un volante o una publicación limpia.",
            "Empieza con una plantilla, no con una hoja en blanco. Busca lo que necesitas, como \"publicación Instagram panadería\" o \"volante servicio de limpieza\". Cambia las palabras, pon tus colores y tu logo, y mantenlo sencillo: un mensaje, una imagen, una llamada a la acción.",
            "Si usas una imagen generada con IA, mírala de cerca para encontrar errores como manos raras o palabras mal escritas, y no hagas una imagen que copie el logo o la marca de otro, ni a una persona real sin permiso."
          ],
          steps: ["Abre canva.com e inicia sesión o crea una cuenta gratuita.", "Busca una plantilla para el diseño que necesitas.", "Cambia el texto por tu mensaje y tu llamada a la acción.", "Agrega tus colores y tu logo.", "Revisa la ortografía y las imágenes, y luego descárgalo."],
          words: [["Plantilla", "un diseño ya hecho que cambias para que vaya con tu negocio."], ["Colores de marca", "los dos o tres colores que usas siempre para que los clientes te reconozcan."]],
          slides: [
            { title: "Canva para negocios", bullets: ["Plan gratuito con plantillas", "IA para sugerir textos y hacer imágenes", "No hace falta estudiar diseño"] },
            { title: "Empieza con una plantilla", bullets: ["Busca \"volante servicio de limpieza\" o parecido", "Cambia las palabras", "Agrega tus colores y tu logo"] },
            { title: "Mantenlo sencillo", bullets: ["Un mensaje", "Una imagen", "Una llamada a la acción"] },
            { title: "Revisa las imágenes de IA", bullets: ["Busca manos raras o palabras mal escritas", "No copies otras marcas ni a personas reales"] }
          ],
          tryIt: "Haz en Canva, a partir de una plantilla, una publicación o un volante para tu negocio. Usa la descripción de tu negocio de la lección anterior y una llamada a la acción. Descárgalo.",
          youCanNow: "hacer en Canva una imagen limpia con tu marca y revisar las imágenes de IA antes de usarlas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los tipos principales de herramientas de IA",
        questions: [
          { q: "¿Qué herramienta va con el trabajo de \"diseñar\"?", options: ["Una calculadora", "Canva", "Una bandeja de correo", "Una app del banco"], answer: 1, why: "Canva hace volantes, imágenes para redes y otros gráficos." },
          { q: "Tu negocio usa Microsoft Outlook y Word. ¿Qué asistente de chat es una primera opción natural?", options: ["Una app de mapas", "Una app de dibujo", "Una app de música", "Microsoft Copilot"], answer: 3, why: "Copilot va con los negocios que ya usan cuentas de Microsoft." },
          { q: "Antes de agregar una herramienta de IA nueva, ¿qué pregunta importa más?", options: ["¿Qué trabajo hace y ya tengo una herramienta para eso?", "¿El logo es bonito?", "¿Es popular en TikTok?", "¿Tiene modo oscuro?"], answer: 0, why: "Empieza por el trabajo; evita pagar herramientas que repiten lo que ya tienes." },
          { q: "¿Cuál es la mejor forma de empezar un diseño en Canva?", options: ["Una hoja en blanco", "Copiar el volante de un competidor", "Una plantilla que cambias", "Escribir tus datos bancarios"], answer: 2, why: "Las plantillas te dan un diseño limpio para adaptar." },
          { q: "Una imagen de IA para tu volante tiene una palabra mal escrita en un letrero. ¿Qué haces?", options: ["La usas de todos modos", "La publicas dos veces", "La corriges o haces una nueva antes de usarla", "Culpas al cliente"], answer: 2, why: "Revisa las imágenes de IA antes de que salgan." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA en tus herramientas de trabajo diarias",
      lessons: [
        {
          title: "La IA en documentos y hojas de cálculo",
          minutes: 5,
          goal: "Usar la IA para hacer el borrador de un documento y para entender una hoja de cálculo.",
          text: [
            "Google Docs y Sheets y Microsoft Word y Excel ya traen ayudantes de IA en muchos planes (Gemini en Google Workspace, Copilot en Microsoft 365). Las funciones que tienes dependen de tu plan, y eso cambia, así que revisa las páginas de ayuda de tu cuenta.",
            "Si tu plan no incluye el ayudante integrado, igual puedes usar un asistente de chat gratuito: pega un texto sin datos privados, o describe tus columnas, y pide un borrador, una fórmula o una explicación.",
            "Pedidos útiles: \"Convierte estas notas en el borrador de un contrato de servicio de una página para que lo revise mi abogado.\" \"Escribe una fórmula de hoja de cálculo que sume la columna C cuando la columna B diga Pagado.\" \"Explica qué hace esta fórmula.\" Prueba siempre una fórmula en algunas filas que puedas revisar a mano."
          ],
          steps: ["Abre un documento o una hoja de cálculo que ya uses.", "Busca el ayudante de IA integrado; si no hay, abre un asistente de chat.", "Pide un borrador o una fórmula, describiendo tus columnas sin datos privados.", "Prueba cualquier fórmula en algunas filas que puedas revisar tú."],
          words: [["Fórmula", "una instrucción en una celda de la hoja de cálculo que calcula algo, como un total."], ["Google Workspace / Microsoft 365", "las versiones de pago para empresas de las herramientas de oficina de Google y Microsoft."]],
          slides: [
            { title: "Ayudantes de IA integrados", bullets: ["Gemini en Google Workspace", "Copilot en Microsoft 365", "Las funciones dependen de tu plan; revisa la ayuda"] },
            { title: "¿Sin ayudante integrado?", bullets: ["Usa un asistente de chat gratuito", "Describe tus columnas, sin datos privados", "Pide un borrador, una fórmula o una explicación"] },
            { title: "Prueba antes de confiar", bullets: ["Prueba la fórmula en algunas filas", "Revisa el resultado a mano", "Que un abogado revise los borradores legales"] }
          ],
          sources: [{ name: "Google Workspace: funciones de Gemini", url: "https://workspace.google.com/solutions/ai/" }, { name: "Soporte de Microsoft: Copilot", url: "https://support.microsoft.com/en-us/copilot" }],
          tryIt: "Describe a un asistente de IA una hoja de ventas sencilla (fecha, artículo, monto, pagado o no) y pide una fórmula que sume solo las ventas pagadas. Haz una hoja de prueba de cinco filas y revisa la fórmula a mano.",
          youCanNow: "usar la IA para hacer borradores de documentos y escribir y probar fórmulas de hoja de cálculo."
        },
        {
          title: "Notas de reuniones y transcripción",
          minutes: 4,
          goal: "Convertir una reunión o una nota de voz en notas claras con tareas pendientes, usando IA.",
          text: [
            "Muchas herramientas ya convierten la voz en texto: la grabadora de voz de muchos teléfonos, las funciones de transcripción de Microsoft Teams, Google Meet y Zoom en algunos planes, y la escritura por voz de Google Docs (Herramientas y luego Escritura por voz) o el dictado de Word.",
            "Cuando ya tienes el texto, un asistente de chat lo puede convertir en un resumen con decisiones y tareas pendientes: quién hace qué y para cuándo. Quita los datos privados de los clientes antes de pegarlo.",
            "Avisa siempre a las personas antes de grabar o transcribir una llamada. Las leyes sobre grabar llamadas cambian según el estado y el país, y algunas exigen el consentimiento de todos, así que preguntar primero es el hábito seguro."
          ],
          steps: ["Avisa a todos que quieres grabar o transcribir y consigue un sí.", "Graba o transcribe la reunión o una nota de voz.", "Quita los datos privados del texto.", "Pide a la IA: \"Resume esto en decisiones y tareas pendientes: quién, qué, para cuándo.\"", "Compara el resumen con lo que recuerdas."],
          words: [["Tarea pendiente", "una tarea que sale de una reunión, con una persona responsable y una fecha límite."], ["Consentimiento", "el permiso que da una persona antes de que se haga algo."]],
          slides: [
            { title: "De la voz al texto", bullets: ["Grabadoras de voz del teléfono", "Teams, Meet y Zoom en algunos planes", "Escritura por voz en Docs, dictado en Word"] },
            { title: "Del texto a las tareas", bullets: ["Pega el texto, sin datos privados", "Pide decisiones y tareas pendientes", "Quién, qué, para cuándo"] },
            { title: "Pregunta siempre primero", bullets: ["Avisa antes de grabar", "Las leyes de grabación cambian según el lugar", "Algunos lugares exigen el consentimiento de todos"] }
          ],
          tryIt: "Graba una nota de voz de dos minutos sobre lo que tu negocio tiene que hacer esta semana. Transcríbela con la escritura por voz o con tu teléfono y luego pide a un asistente de IA que la convierta en una lista de tareas con fechas.",
          youCanNow: "convertir notas habladas en una lista de tareas escrita y pedir permiso antes de grabar a otros."
        },
        {
          title: "Armar tu kit y mantenerlo seguro",
          minutes: 5,
          goal: "Elegir una herramienta por trabajo y poner una regla de seguridad para cada una.",
          text: [
            "Un kit que de verdad usas es mejor que una lista larga de apps que probaste una vez. Para cada uno de los cuatro trabajos, elige una herramienta, anota si estás en un plan gratuito o de pago y escribe una cosa que hiciste con ella.",
            "Revisa la configuración de datos de cada herramienta. Muchas te dejan desactivar el historial de chats o impedir que tu contenido se use para entrenar la IA. Los planes para empresas muchas veces tienen condiciones de privacidad más fuertes; lee la página de privacidad de la herramienta antes de meter documentos del negocio.",
            "Pon una regla sencilla por herramienta, como \"Nada de teléfonos de clientes en ChatGPT\" o \"Solo descargo imágenes de Canva que ya revisé\". Revisa tu kit cada pocos meses, porque las herramientas, las funciones y los precios cambian."
          ],
          steps: ["Haz la lista de los cuatro trabajos.", "Elige una herramienta para cada uno y anota si es gratuita o de pago.", "Abre la configuración de cada herramienta y busca sus opciones de datos o privacidad.", "Escribe una regla de seguridad por herramienta.", "Pon un recordatorio para revisar el kit en tres meses."],
          words: [["Kit de herramientas", "la lista corta de herramientas en las que confías, con el uso de cada una."], ["Configuración de privacidad", "opciones que controlan lo que una herramienta guarda y cómo usa tus datos."]],
          slides: [
            { title: "Una herramienta por trabajo", bullets: ["Escribir, diseñar, documentos, reuniones", "¿Gratuita o de pago?", "Una cosa que hiciste con ella"] },
            { title: "Revisa la configuración de datos", bullets: ["Desactiva el historial o el entrenamiento si se puede", "Los planes para empresas pueden proteger mejor los datos", "Lee primero la página de privacidad"] },
            { title: "Una regla de seguridad por herramienta", bullets: ["\"Nada de teléfonos de clientes en los chats\"", "\"Solo uso imágenes que ya revisé\""] },
            { title: "Revísalo cada pocos meses", bullets: ["Las herramientas, funciones y precios cambian"] }
          ],
          tryIt: "Tarea final: haz tu página \"Mi kit de herramientas de IA\": cuatro trabajos, una herramienta para cada uno, una cosa que hiciste con ella en este curso y una regla de seguridad para cada herramienta.",
          youCanNow: "manejar tu negocio con un kit de herramientas de IA pequeño y seguro que revisas con el tiempo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La IA en tus herramientas de trabajo diarias",
        questions: [
          { q: "El plan de tu hoja de cálculo no tiene ayudante de IA integrado. ¿Qué puedes hacer?", options: ["Describir tus columnas a un asistente de chat gratuito y pedir una fórmula", "Rendirte", "Pegar en la IA los números de tarjeta de tus clientes", "Comprar todas las apps de IA"], answer: 0, why: "Un asistente de chat puede escribir fórmulas a partir de una descripción, sin datos privados." },
          { q: "La IA te escribió una fórmula. ¿Qué debes hacer antes de confiar en ella?", options: ["Borrar la hoja", "Usarla en todo el año de una vez", "Enviársela a los clientes", "Probarla en algunas filas que puedas revisar a mano"], answer: 3, why: "Probar en algunas filas detecta los errores." },
          { q: "¿Qué debes hacer antes de grabar una llamada con un cliente?", options: ["Grabar a escondidas", "Avisarle y pedirle permiso", "Grabar solo el primer minuto", "Publicarla en internet"], answer: 1, why: "Las leyes de grabación cambian, y algunas exigen el consentimiento de todos." },
          { q: "Una tarea pendiente debe decir:", options: ["Quién hace qué y para cuándo", "Solo la fecha de la reunión", "Cuánto duró la reunión", "Quién llegó tarde"], answer: 0, why: "Las tareas pendientes nombran a una persona, una tarea y una fecha límite." },
          { q: "¿Por qué revisar tu kit de herramientas de IA cada pocos meses?", options: ["Para borrar tu negocio", "Lo exige la ley", "Las herramientas, funciones y precios cambian", "Porque la IA olvida"], answer: 2, why: "Las revisiones mantienen tu kit al día y a un costo razonable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA que todo emprendedor debe conocer",
    questions: [
      { q: "Los cuatro trabajos de las herramientas de IA en este curso son:", options: ["Banco, envíos, contratación, impuestos", "Escribir, diseñar, documentos y números, reuniones y notas", "Música, juegos, películas, deportes", "Teléfonos, laptops, tabletas, relojes"], answer: 1, why: "Esos cuatro trabajos cubren casi todo lo que necesita un pequeño negocio." },
      { q: "¿Cuál es un asistente de chat?", options: ["Una camioneta de reparto", "Un lector de códigos de barras", "Un cajón de dinero", "Google Gemini"], answer: 3, why: "Gemini, ChatGPT y Copilot son asistentes de chat." },
      { q: "¿Por qué empezar con una herramienta por trabajo?", options: ["Para que los clientes vean tus apps", "Es la ley", "Las herramientas de IA no pueden compartir trabajos", "Mantiene las cosas sencillas y evita pagar dos veces"], answer: 3, why: "Un kit pequeño es más fácil de aprender y más barato." },
      { q: "¿Dónde debes revisar lo que incluye hoy el plan gratuito de una herramienta?", options: ["En un comentario cualquiera de un video", "En la página de precios de la propia herramienta", "Con tu cliente", "En un volante viejo"], answer: 1, why: "Los planes cambian; la página oficial está al día." },
      { q: "Tu negocio funciona con Gmail y Google Drive. Un asistente de chat natural para probar primero es:", options: ["Una máquina de fax", "Un filtro de fotos", "Google Gemini", "Un contador de palabras"], answer: 2, why: "Gemini va con los negocios que usan cuentas de Google." },
      { q: "Una buena forma de comparar dos asistentes de chat es:", options: ["Probar la misma instrucción en los dos", "Leer solo sus anuncios", "Preguntarle a un desconocido", "Elegir el más nuevo"], answer: 0, why: "La misma instrucción en dos herramientas muestra cuál va con tu estilo." },
      { q: "En Canva, la forma más rápida de tener un diseño limpio es:", options: ["Copiar el logo de otra marca", "Empezar con una hoja en blanco", "Empezar con una plantilla", "Usar diez tipos de letra"], answer: 2, why: "Las plantillas te dan un diseño ya hecho." },
      { q: "Un volante sencillo debe tener:", options: ["Un mensaje, una imagen, una llamada a la acción", "Todos los productos que vendes", "Solo letra pequeña", "Ningún nombre de negocio"], answer: 0, why: "Los diseños sencillos se leen más fácil." },
      { q: "NO debes usar la IA para hacer una imagen que:", options: ["Muestre tu propio producto", "Copie el logo de otra empresa", "Use tus colores de marca", "Tenga bien escrito el nombre de tu tienda"], answer: 1, why: "Copiar otra marca puede violar las reglas de marcas registradas o de derechos de autor." },
      { q: "Gemini en Google Workspace y Copilot en Microsoft 365 son:", options: ["Servicios de reparto", "Impresoras", "Apps de pago", "Ayudantes de IA integrados en herramientas de oficina en muchos planes"], answer: 3, why: "Agregan IA a los documentos, el correo y las hojas de cálculo." },
      { q: "Al pedir a la IA una fórmula de hoja de cálculo, debes compartir:", options: ["Una descripción de las columnas, sin datos privados", "Los números de tarjeta de los clientes", "La contraseña de tu banco", "Tu número de identificación fiscal"], answer: 0, why: "Describir las columnas basta para obtener una fórmula." },
      { q: "Una fórmula de hoja de cálculo es:", options: ["Una dirección de correo", "Un tipo de gráfica", "Un tipo de letra", "Una instrucción en una celda que calcula algo"], answer: 3, why: "Las fórmulas calculan valores como los totales." },
      { q: "La IA te hizo el borrador de un contrato de servicio. ¿Qué sigue?", options: ["Publicarlo en internet", "Firmarlo con los clientes de inmediato", "Que lo revise un abogado antes de usarlo", "Borrar el anterior sin leerlo"], answer: 2, why: "Los documentos legales los debe revisar un profesional." },
      { q: "La escritura por voz de Google Docs te permite:", options: ["Pagar cuentas", "Hablar y que tus palabras se escriban", "Diseñar logos", "Enviar productos"], answer: 1, why: "Convierte la voz en texto." },
      { q: "Después de transcribir una reunión, un pedido útil a la IA es:", options: ["\"Tradúcelo a código.\"", "\"Hazlo más largo.\"", "\"Agrega datos al azar.\"", "\"Resume esto en decisiones y tareas pendientes: quién, qué, para cuándo.\""], answer: 3, why: "Convierte una transcripción larga en pasos claros." },
      { q: "Antes de grabar una llamada, debes:", options: ["Grabar solo a la otra persona", "Esconder la grabadora", "Avisar a las personas y pedirles permiso", "Preguntarle a la IA si es legal y no preguntarles a ellos"], answer: 2, why: "Las reglas de consentimiento cambian según el lugar; preguntar primero es lo seguro." },
      { q: "Muchas herramientas de IA te dejan cambiar la configuración de datos para que:", options: ["Tus chats no se guarden ni se usen para entrenar", "Suban tus precios", "Tus clientes reciban correos", "Cambie tu logo"], answer: 0, why: "La configuración de privacidad controla lo que guarda la herramienta." },
      { q: "¿Cuál es una buena regla de seguridad para tu kit?", options: ["\"Compartir contraseñas con la IA\"", "\"Nada de teléfonos de clientes en los chats de IA\"", "\"Nunca revisar las imágenes de IA\"", "\"Usar todas las apps nuevas\""], answer: 1, why: "Las reglas sencillas protegen a tus clientes." },
      { q: "Tu kit de una página dice, para cada trabajo:", options: ["El saldo de tu banco", "La herramienta, si es gratuita o de pago, algo que hiciste y una regla de seguridad", "Las contraseñas de tus competidores", "Todas las apps que has probado"], answer: 1, why: "Eso hace que el kit sea práctico y seguro." },
      { q: "¿Por qué podrías elegir el plan para empresas de una herramienta de IA?", options: ["Puede dar condiciones de privacidad más fuertes para los documentos del negocio", "Siempre es gratis", "Ya no hace falta revisar el trabajo", "Hace tus impuestos"], answer: 0, why: "Los planes para empresas muchas veces protegen mejor los datos; lee la página de privacidad." }
    ]
  }
};

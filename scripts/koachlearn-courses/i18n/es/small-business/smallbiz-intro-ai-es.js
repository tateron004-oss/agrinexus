"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-intro-ai-es",
  lang: "es",
  translationOf: "smallbiz-intro-ai",
  category: "Small Business",
  name: "Introducción a la IA para pequeños negocios",
  skills: "Explicar lo que la IA puede hacer por un negocio, Detectar tareas que ahorran tiempo, Escribir una instrucción para tu negocio, Revisar y editar borradores de la IA, Proteger la información de clientes y del negocio",
  outcome: "usar un asistente de IA gratis para terminar una tarea real de tu negocio, como un aviso para clientes, la descripción de un producto o una lista de pendientes de la semana: escribir una instrucción clara con los datos de tu negocio, mejorar el borrador, revisar cada dato y dejar fuera la información privada.",
  about: [
    "Este curso es para dueños de pequeños negocios que han oído hablar de la IA pero casi no la han usado: dueños de tiendas, de restaurantes y food trucks, barberos y estilistas, personas que limpian, contratistas y negocios desde casa. Muchos de nuestros estudiantes tienen su primer negocio, son de comunidades minoritarias y hacen todo ellos mismos.",
    "Vas a aprender qué es un asistente de IA, qué trabajos de tu negocio puede acelerar, cómo pedirle ayuda con los datos de tu negocio, cómo revisar su trabajo y cómo proteger la información de tus clientes.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\" con tu propio negocio. Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Elige una tarea real de tu negocio de esta semana (un letrero sobre el nuevo horario, la descripción de un producto, una respuesta a un cliente o una lista de pendientes). Usa un asistente de IA gratis para hacerla: escribe una instrucción con los datos de tu negocio, pide al menos un cambio, revisa tú mismo cada dato (precios, horario, dirección), quita cualquier información privada y úsala en tu negocio.",
  chapters: [
    {
      name: "Capítulo 1: Lo que la IA puede hacer por tu negocio",
      lessons: [
        {
          title: "Qué es un asistente de IA, en términos de negocio",
          minutes: 4,
          goal: "Explicar qué puede y qué no puede hacer un asistente de IA por un pequeño negocio.",
          text: [
            "Un asistente de IA es un programa de computadora al que le escribes o hablas con palabras de todos los días. Le pides algo y te lo escribe en segundos. Algunos conocidos y gratis son ChatGPT, Microsoft Copilot y Google Gemini.",
            "Piensa en él como un ayudante rápido para escribir y pensar. Puede hacer el borrador de un volante, la descripción de un platillo del menú, una respuesta a una reseña, el diseño de una lista de precios, una publicación para redes sociales o una lista de control para abrir el local.",
            "No es tu contador, tu abogado ni tu socio. No conoce tus precios, tus clientes ni tu ciudad a menos que se los digas, y puede equivocarse aunque suene seguro. Tú sigues siendo el dueño: tú decides qué usar."
          ],
          words: [["IA", "inteligencia artificial: programas de computadora que hacen tareas que normalmente necesitan a una persona, como escribir."], ["Asistente de IA", "un programa de IA con el que conversas escribiendo o hablando, como ChatGPT, Copilot o Gemini."], ["Borrador", "una primera versión que vas a revisar y cambiar."]],
          slides: [
            { title: "Un asistente de IA es...", bullets: ["Un programa con el que conversas con palabras de todos los días", "Un ayudante rápido para escribir y pensar", "Versiones gratis: ChatGPT, Copilot, Gemini"] },
            { title: "En un pequeño negocio puede hacer borradores de", bullets: ["Volantes, letreros y publicaciones", "Descripciones de menús y productos", "Respuestas a clientes y reseñas", "Listas de control y horarios"] },
            { title: "NO es", bullets: ["Tu contador, abogado o socio", "Alguien que conoce tus precios si no se los dices", "Siempre correcto: el dueño eres tú"] }
          ],
          tryIt: "Escribe tres trabajos de escritura que hiciste para tu negocio el mes pasado, por ejemplo un letrero, un mensaje a un cliente o una lista de precios. Encierra en un círculo el que más tiempo te tomó.",
          youCanNow: "decir qué es un asistente de IA y nombrar trabajos de escritura de tu negocio con los que podría ayudarte."
        },
        {
          title: "Encontrar las tareas que vale la pena pasarle a la IA",
          minutes: 5,
          goal: "Hacer una lista de las tareas de tu negocio que la IA puede acelerar y de las que no debe tocar.",
          text: [
            "Las buenas tareas para la IA son repetidas, escritas y de bajo riesgo: responder las mismas preguntas, describir productos, escribir publicaciones, hacer horarios y listas de control, resumir correos largos o convertir notas desordenadas en una lista limpia.",
            "Mantén a la IA lejos de las decisiones finales sobre dinero, impuestos, contratos, contratar y despedir, reglas de salud y seguridad, y cualquier tema legal. Te puede ayudar a preparar preguntas para tu contador, pero no es el contador.",
            "Una prueba sencilla: si un error sería fácil de detectar y corregir, la IA puede ayudar. Si un error te podría costar dinero, la confianza de un cliente o una multa, una persona lo revisa, y tú revisas la fuente oficial."
          ],
          steps: ["Haz una lista de los trabajos que haces cada semana.", "Marca cada uno: ¿repetido? ¿escrito? ¿de bajo riesgo?", "Pon las tareas con tres \"sí\" en una lista de \"Probar con IA\".", "Pon las decisiones de dinero, legales y de seguridad en una lista de \"Personas y fuentes oficiales\"."],
          words: [["Tarea de bajo riesgo", "una tarea en la que un error es fácil de ver y corregir."], ["Tarea repetida", "algo que haces una y otra vez, como responder la misma pregunta."]],
          slides: [
            { title: "Buenas tareas para la IA", bullets: ["Repetidas: las mismas preguntas cada día", "Escritas: publicaciones, descripciones, respuestas", "De bajo riesgo: los errores son fáciles de detectar"] },
            { title: "Para personas y fuentes oficiales", bullets: ["Dinero, impuestos y contratos", "Contratar y despedir", "Reglas de salud, seguridad y leyes"] },
            { title: "La prueba rápida", bullets: ["¿Fácil de detectar y corregir? La IA puede ayudar", "¿Puede costar dinero, confianza o una multa? Revisa una persona"] }
          ],
          tryIt: "Haz dos listas para tu negocio: \"Probar con IA\" (al menos cinco tareas) y \"Personas y fuentes oficiales\" (al menos tres).",
          youCanNow: "separar las tareas de tu negocio entre las que la IA puede ayudar y las que deben manejar personas."
        },
        {
          title: "Escribir una instrucción clara para tu negocio",
          minutes: 5,
          goal: "Escribir una instrucción que incluya los datos de tu negocio para que la respuesta le quede a tu negocio.",
          text: [
            "Lo que le escribes a un asistente de IA se llama instrucción (en inglés, prompt). Mientras más sepa de tu negocio, mejor le queda la respuesta. Una buena instrucción de negocio tiene cuatro partes: quién eres, qué necesitas, para quién es y cómo debe verse.",
            "Ejemplo: \"Tengo un pequeño restaurante caribeño en Fresno. Escribe un letrero corto para la puerta que diga que cerramos a las 8 pm los domingos a partir del 5 de mayo. Tono amable, menos de 30 palabras.\"",
            "Una instrucción débil como \"escribe un letrero\" hace que la IA adivine. Agrega tus datos reales: tu tipo de negocio, tu ciudad, tu horario, tu estilo. Deja fuera los datos privados como números de banco o el teléfono de un cliente."
          ],
          steps: ["Quién eres: tu tipo de negocio y dónde.", "Qué necesitas: la cosa exacta.", "Para quién es: clientes, personal, un proveedor.", "Cómo debe verse: largo, tono, lista o párrafo."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA para pedirle algo."], ["Tono", "cómo suena un texto: amable, formal, divertido."]],
          slides: [
            { title: "Cuatro partes de una instrucción de negocio", bullets: ["1. Quién eres", "2. Qué necesitas", "3. Para quién es", "4. Cómo debe verse"] },
            { title: "Ejemplo", bullets: ["\"Tengo un pequeño restaurante caribeño en Fresno.", "Escribe un letrero: cerramos a las 8 pm los domingos desde el 5 de mayo.", "Tono amable, menos de 30 palabras.\""] },
            { title: "Débil frente a clara", bullets: ["Débil: \"escribe un letrero\"", "Clara: tu negocio, los detalles, el estilo", "Nunca: números de banco ni teléfonos de clientes"] }
          ],
          tryIt: "Elige una tarea de tu lista de \"Probar con IA\". Escribe una instrucción con las cuatro partes, envíala a un asistente de IA gratis y lee la respuesta.",
          youCanNow: "escribir una instrucción de negocio con quién eres, qué necesitas, para quién es y cómo debe verse."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo que la IA puede hacer por tu negocio",
        questions: [
          { q: "¿Qué es un asistente de IA?", options: ["Un empleado nuevo", "Un programa con el que conversas y que escribe borradores", "Un banco", "Una caja registradora"], answer: 1, why: "Es un programa de computadora al que le escribes o hablas." },
          { q: "¿Qué tarea conviene darle a un asistente de IA?", options: ["Decidir si firmas un contrato de renta", "Despedir a un empleado", "Presentar tus impuestos por tu cuenta", "Hacer el borrador de la descripción de un producto"], answer: 3, why: "Las descripciones de productos son escritas, repetidas y de bajo riesgo." },
          { q: "Un error te podría costar una multa. ¿Qué haces?", options: ["Que una persona lo revise contra la fuente oficial", "Dejar que la IA decida", "Ignorarlo", "Preguntarle dos veces a la IA"], answer: 0, why: "Las tareas de alto riesgo necesitan una persona y una fuente oficial." },
          { q: "¿Cuál es la instrucción de negocio más clara?", options: ["\"letrero\"", "\"ayuda a mi negocio\"", "\"Tengo una barbería en Oakland. Escribe un letrero corto: cerrado el lunes 4 de julio. Amable, menos de 25 palabras.\"", "\"escribe algo\""], answer: 2, why: "Dice quién eres, qué necesitas, para quién es y cómo debe verse." },
          { q: "¿Qué deberías dejar fuera de una instrucción?", options: ["Tu tipo de negocio", "Tu ciudad", "El teléfono de un cliente", "El tono que quieres"], answer: 2, why: "Los datos privados de los clientes se quedan fuera de las herramientas de IA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la IA de forma segura y bien",
      lessons: [
        {
          title: "Mejorar el borrador",
          minutes: 4,
          goal: "Usar peticiones de seguimiento para convertir un primer borrador en algo que de verdad usarías.",
          text: [
            "La primera respuesta es un borrador. En la misma conversación, el asistente recuerda lo que le pediste, así que le puedes decir qué cambiar.",
            "Peticiones de seguimiento útiles para un negocio: \"Hazlo más corto.\" \"Que suene más cálido.\" \"Agrega nuestro horario.\" \"Dame tres versiones.\" \"Escríbelo también en inglés.\" \"Usa palabras más sencillas.\"",
            "Luego hazlo tuyo. Cambia palabras para que suene a ti y a tu negocio. Los clientes conocen tu voz; la versión final también debe tenerla."
          ],
          steps: ["Lee el borrador en voz alta.", "Elige una cosa que cambiar y pídela.", "Repite hasta que funcione.", "Edita la última versión con tus propias palabras."],
          words: [["Petición de seguimiento", "una segunda petición que parte de la respuesta que recibiste."], ["Versión", "una de varias formas de escribir lo mismo."]],
          slides: [
            { title: "La primera respuesta es un borrador", bullets: ["La conversación recuerda tu petición", "Pide un cambio a la vez"] },
            { title: "Peticiones de seguimiento para negocios", bullets: ["\"Hazlo más corto.\" \"Que suene más cálido.\"", "\"Dame tres versiones.\"", "\"Escríbelo también en inglés.\""] },
            { title: "Hazlo tuyo", bullets: ["Léelo en voz alta", "Cambia palabras para que suene a ti", "Los clientes conocen tu voz"] }
          ],
          tryIt: "Toma la respuesta de la Lección 3. Pide dos cambios, uno a la vez, y luego edita la última versión para que suene a ti.",
          youCanNow: "mejorar un borrador de la IA con peticiones de seguimiento y hacer que suene a tu negocio."
        },
        {
          title: "Revisar los datos antes de que los vean los clientes",
          minutes: 5,
          goal: "Revisar cada dato de un borrador de la IA antes de publicarlo, imprimirlo o enviarlo.",
          text: [
            "La IA puede inventar cosas: un precio equivocado, un horario equivocado, una oferta que nunca planeaste o una regla que no existe. A esto se le llama alucinación. Si aparece en tu letrero o tu sitio web, los clientes te van a pedir que cumplas.",
            "Antes de usar cualquier cosa, revisa: precios, fechas y horarios, tu dirección y teléfono, promesas (\"envío gratis\", \"garantizado\") y cualquier regla sobre licencias, impuestos o salud. Compáralo con tus propios registros.",
            "Para las reglas y las leyes, la IA no es la fuente. Revisa la página oficial del gobierno (muchas veces termina en .gov) o pregúntale a tu contador, a la oficina de tu ciudad o a un asesor gratis para pequeños negocios como SCORE o un Centro de Desarrollo de Pequeños Negocios."
          ],
          steps: ["Subraya cada número, fecha, nombre y promesa.", "Revisa cada uno contra tus propios registros.", "Revisa cualquier regla o ley en la página oficial .gov.", "Borra cualquier promesa que no pensabas hacer."],
          words: [["Alucinación", "cuando la IA escribe algo que suena verdadero pero es inventado."], ["Fuente oficial", "la oficina del gobierno o la empresa que de verdad fija la regla o el precio."]],
          slides: [
            { title: "La IA puede inventar cosas", bullets: ["Precios u horarios equivocados", "Ofertas o promesas que nunca planeaste", "Reglas que no existen"] },
            { title: "Revisa antes de que lo vean los clientes", bullets: ["Precios, fechas, horarios", "Dirección y teléfono", "Promesas como \"gratis\" o \"garantizado\""] },
            { title: "Reglas y leyes", bullets: ["Revisa la página oficial .gov", "Pregúntale a tu contador o a la oficina de tu ciudad", "Ayuda gratis: SCORE o un SBDC"] }
          ],
          tryIt: "Pídele a un asistente de IA que escriba un párrafo corto de \"Quiénes somos\" para tu negocio. Subraya cada dato y cada promesa, revisa cada uno y corrige o borra lo que esté mal.",
          youCanNow: "encontrar y revisar cada dato y cada promesa de un borrador de la IA antes de que lo vean los clientes."
        },
        {
          title: "Proteger la información de los clientes y del negocio",
          minutes: 5,
          goal: "Usar la IA para tu negocio sin compartir información privada de clientes o del negocio.",
          text: [
            "No pegues información privada en un asistente de IA: nombres de clientes con teléfonos o direcciones, números de tarjeta o de banco, contraseñas, números de Seguro Social de empleados ni datos privados de salud. Puedes recibir la ayuda que necesitas sin ellos. Escribe \"[nombre del cliente]\" en su lugar.",
            "Lee la configuración de privacidad de la herramienta que usas. Algunas herramientas te dejan desactivar que tus conversaciones se guarden para entrenamiento. Las versiones para empresas de algunas herramientas ofrecen más protección; revisa la página oficial de la empresa antes de confiar en eso.",
            "Los estafadores también usan la IA: facturas falsas, correos falsos de proveedores y llamadas falsas. Si un mensaje te apura a pagar o a cambiar datos bancarios, detente y llama al proveedor a un número que ya conoces."
          ],
          steps: ["Antes de enviar una instrucción, léela buscando datos privados.", "Cámbialos por marcadores como \"[nombre del cliente]\".", "Revisa la configuración de privacidad de la herramienta.", "Llama a un número conocido antes de pagar cualquier solicitud apurada."],
          words: [["Marcador", "un texto temporal como \"[nombre del cliente]\" que se usa en lugar de datos privados reales."], ["Configuración de privacidad", "las opciones de una herramienta sobre lo que guarda y cómo usa tus datos."]],
          slides: [
            { title: "Nunca pegues en la IA", bullets: ["Teléfonos y direcciones de clientes", "Números de tarjeta o de banco y contraseñas", "Identificaciones de empleados o datos de salud"] },
            { title: "Usa marcadores", bullets: ["\"[nombre del cliente]\" en lugar del nombre real", "Igual recibes la ayuda que necesitas"] },
            { title: "Configuración y estafas", bullets: ["Revisa la configuración de privacidad", "Las facturas y correos falsos de proveedores son comunes", "Llama a un número conocido antes de pagar"] }
          ],
          tryIt: "Tarea final: elige una tarea real de tu negocio de esta semana. Usa un asistente de IA gratis para hacerla con una instrucción de cuatro partes, pide al menos un cambio, revisa tú mismo cada dato, quita cualquier información privada y úsala.",
          youCanNow: "usar la IA para una tarea real del negocio protegiendo la información de los clientes y del negocio."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la IA de forma segura y bien",
        questions: [
          { q: "El letrero de la IA es demasiado largo. ¿Qué le pides?", options: ["\"Hazlo más corto.\"", "\"Borra mi cuenta.\"", "\"Agrega mi número de banco.\"", "Nada; lo imprimes"], answer: 0, why: "Una petición de seguimiento pide el cambio que quieres." },
          { q: "El borrador de la IA dice \"Envío gratis en todos los pedidos\", pero nunca ofreciste eso. ¿Qué haces?", options: ["Dejarlo; suena bien", "Preguntarle a la IA si es cierto", "Publicarlo y ver qué pasa", "Borrar la promesa antes de usar el borrador"], answer: 3, why: "Los clientes te pueden pedir que cumplas las promesas de tu letrero o tu sitio." },
          { q: "¿Dónde revisas una regla sobre licencias de negocio?", options: ["En la respuesta de la IA", "En la página u oficina oficial del gobierno", "En una publicación de redes sociales", "Con un competidor"], answer: 1, why: "Las reglas vienen de la fuente oficial." },
          { q: "¿Qué escribes en lugar del nombre y el teléfono reales de un cliente?", options: ["Un marcador como \"[nombre del cliente]\"", "Los datos reales", "Su número de tarjeta", "Nada; no vuelves a usar la IA"], answer: 0, why: "Los marcadores dejan fuera la información privada." },
          { q: "Un correo \"de tu proveedor\" dice que pagues hoy a una cuenta bancaria nueva. ¿Qué haces?", options: ["Pagar de inmediato", "Responder con tu contraseña", "Llamar al proveedor a un número que ya conoces", "Reenviárselo a tus clientes"], answer: 2, why: "Los cambios de pago con prisa son una estafa común." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la IA para pequeños negocios",
    questions: [
      { q: "¿Cuál es un asistente de IA gratis?", options: ["Una caja registradora", "Microsoft Copilot", "Un lector de códigos de barras", "Una impresora de recibos"], answer: 1, why: "Copilot, ChatGPT y Gemini son asistentes conocidos." },
      { q: "Un asistente de IA conoce tus precios:", options: ["Siempre", "Por tu ciudad", "Por tu banco", "Solo si se los dices"], answer: 3, why: "No conoce tu negocio a menos que se lo digas." },
      { q: "¿Quién toma la decisión final sobre el trabajo de la IA para tu negocio?", options: ["La IA", "Tus clientes", "La tienda de aplicaciones", "Tú, el dueño"], answer: 3, why: "Tú sigues siendo el dueño y decides qué usar." },
      { q: "¿Cuál es una tarea repetida, escrita y de bajo riesgo?", options: ["Firmar un contrato de renta", "Responder la misma pregunta de los clientes cada día", "Pagar impuestos de nómina", "Elegir un abogado"], answer: 1, why: "Las respuestas escritas repetidas son buenas tareas para la IA." },
      { q: "¿Qué va en la lista de \"Personas y fuentes oficiales\"?", options: ["Publicaciones en redes sociales", "Descripciones del menú", "Decisiones de impuestos", "Listas de control para abrir"], answer: 2, why: "Las decisiones de dinero e impuestos necesitan personas y fuentes oficiales." },
      { q: "La prueba rápida dice que la IA puede ayudar cuando un error es:", options: ["Fácil de detectar y corregir", "Costoso", "Legal", "Escondido"], answer: 0, why: "Las tareas de bajo riesgo son seguras para probar con la IA." },
      { q: "¿Qué es una instrucción (prompt)?", options: ["Un recibo", "Un cargo por pago tardío", "Lo que escribes para pedirle algo a la IA", "Una entrega"], answer: 2, why: "Una instrucción es tu petición." },
      { q: "¿Qué parte le dice a la IA el estilo que quieres?", options: ["Cómo debe verse", "Quién eres", "Tu banco", "Tu contraseña"], answer: 0, why: "\"Cómo debe verse\" cubre el largo y el tono." },
      { q: "¿Por qué agregar tu tipo de negocio y tu ciudad a una instrucción?", options: ["Para hacerlo más lento", "Para que la respuesta le quede a tu negocio", "Lo exige la ley", "Para que la IA te cobre"], answer: 1, why: "Los detalles hacen que la respuesta encaje." },
      { q: "Lo mejor es tratar la primera respuesta de la IA como:", options: ["Final", "Una ley", "Un contrato", "Un borrador"], answer: 3, why: "La mejoras y la revisas antes de usarla." },
      { q: "¿Qué petición de seguimiento ayuda con clientes que hablan inglés?", options: ["\"Escríbelo también en inglés.\"", "\"Agrega mi contraseña.\"", "\"Hazlo más largo.\"", "\"Bórralo.\""], answer: 0, why: "La IA puede hacer borradores en otros idiomas; que alguien que lo hable bien lo revise." },
      { q: "¿Por qué editar la última versión con tus propias palabras?", options: ["No sirve de nada", "Para esconder errores", "Para hacerla más larga", "Para que suene a ti y a tu negocio"], answer: 3, why: "Los clientes conocen tu voz." },
      { q: "¿Qué es una alucinación de la IA?", options: ["Un problema de la pantalla", "Una conexión de internet lenta", "Un dato inventado que suena verdadero", "Un tipo de aplicación"], answer: 2, why: "La IA puede inventar datos." },
      { q: "¿Qué debes revisar antes de publicar un borrador de la IA?", options: ["Solo la ortografía", "Precios, horario, dirección y promesas", "Nada", "Solo el tipo de letra"], answer: 1, why: "Los datos o promesas equivocados dañan la confianza." },
      { q: "Entre los asesores gratis para pequeños negocios están:", options: ["La propia IA", "Los anuncios emergentes", "Foros cualquiera", "SCORE y los Centros de Desarrollo de Pequeños Negocios"], answer: 3, why: "SCORE y los SBDC dan asesoría gratis." },
      { q: "¿Qué NUNCA deberías pegar en una herramienta de IA?", options: ["\"Hazlo más amable\"", "Tu tipo de negocio", "El número de tarjeta de un cliente", "Tu horario"], answer: 2, why: "Los números de tarjeta son privados." },
      { q: "Un marcador es:", options: ["Un texto temporal como \"[nombre del cliente]\"", "Un número de teléfono real", "Una contraseña", "Un precio"], answer: 0, why: "Los marcadores ocupan el lugar de los datos privados." },
      { q: "Antes de confiar en las promesas de privacidad de una herramienta, deberías:", options: ["Adivinar", "Revisar su configuración y la página oficial de la empresa", "Preguntarle a un cliente", "Ignorar la privacidad"], answer: 1, why: "La configuración y las páginas oficiales dicen qué guarda la herramienta." },
      { q: "Alguien te llama con prisa para que pagues una \"factura vencida\" con tarjetas de regalo. Esto es:", options: ["Un negocio normal", "Una señal de alerta de estafa", "Una regla de impuestos", "Un descuento"], answer: 1, why: "Las prisas y las tarjetas de regalo son señales de estafa." },
      { q: "La mejor forma de revisar una solicitud de pago apurada de un proveedor es:", options: ["Llamar al proveedor a un número que ya conoces", "Responder al mismo correo", "Pagar la mitad", "Preguntarle a la IA"], answer: 0, why: "Un número conocido te comunica con el proveedor real." }
    ]
  }
};

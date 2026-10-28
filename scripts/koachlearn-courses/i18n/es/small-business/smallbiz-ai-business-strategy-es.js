"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-business-strategy.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "smallbiz-ai-business-strategy-es",
  lang: "es",
  translationOf: "smallbiz-ai-business-strategy",
  category: "Small Business",
  name: "Cómo crear una estrategia de IA e integraciones para tu negocio",
  skills: "Mapear en qué se va tu tiempo, Elegir proyectos de IA según su valor y su riesgo, Hacer una prueba piloto de 30 días, Medir resultados, Conectar herramientas de forma segura, Escribir una política de uso de IA",
  outcome: "escribir un plan de IA de una página para tu negocio: las dos tareas que vas a mejorar primero y por qué, una prueba piloto de 30 días con una medida de antes y después, cómo se van a conectar tus herramientas y quién aprueba qué, y una política corta de uso de IA para ti y tu personal.",
  about: [
    "Este curso es para dueños de pequeños negocios que ya probaron un poco la IA y ahora quieren un plan en lugar de experimentos sueltos: tiendas, restaurantes, salones de belleza, servicios de limpieza y reparación, y oficinas pequeñas.",
    "Vas a mapear en qué se va tu tiempo, elegir los proyectos de IA que valen la pena, probar uno durante 30 días y medirlo, aprender cómo se conectan las herramientas entre sí (integraciones) y escribir reglas sencillas sobre cómo usa la IA tu negocio.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las tareas se van sumando en tu plan de IA de una página."
  ],
  finalTask: "Escribe tu plan de IA de una página con cinco partes: (1) tu mapa de tiempo y las dos tareas que elegiste, con una calificación de valor y de riesgo para cada una; (2) una prueba piloto de 30 días para la primera tarea con una medida de antes y después; (3) un diagrama o una lista sencilla de cómo se conectan tus herramientas y qué pasos necesitan tu aprobación; (4) una revisión de costos; (5) una política de uso de IA de cinco reglas para ti y tu personal.",
  chapters: [
    {
      name: "Capítulo 1: Elegir qué mejorar",
      lessons: [
        {
          title: "Mapear en qué se va tu tiempo",
          minutes: 5,
          goal: "Hacer un mapa sencillo de las tareas que te quitan tiempo cada semana.",
          text: [
            "Una estrategia empieza con datos de tu propio negocio. Durante una semana, anota las tareas que te quitan tiempo y más o menos cuánto tarda cada una: responder mensajes, agendar, pedir materiales, publicaciones en redes, contabilidad, cotizaciones, limpieza, capacitar al personal.",
            "Agrúpalas en categorías: clientes, ventas y marketing, operaciones (pedidos, horarios), dinero (facturas, contabilidad) y personas (contratar, capacitar).",
            "Muchas veces vas a encontrar que unas pocas tareas se comen la mayor parte de tu tiempo. Ahí es donde la IA podría ayudar, pero solo si la tarea es adecuada para ella, que es el tema de la siguiente lección."
          ],
          steps: ["Durante una semana, anota cada tarea y los minutos que toma.", "Agrupa las tareas en cinco categorías.", "Suma el tiempo de cada categoría.", "Encierra en un círculo las tres que más tiempo se comen."],
          words: [["Estrategia", "un plan de qué hacer primero y por qué."], ["Mapa de tiempo", "una lista de tus tareas y de cuánto tiempo toma cada una."], ["Operaciones", "el trabajo diario de manejar el negocio, como hacer pedidos y horarios."]],
          slides: [
            { title: "Empieza con tus propios datos", bullets: ["Anota cada tarea durante una semana", "Escribe más o menos cuánto tarda cada una"] },
            { title: "Cinco categorías", bullets: ["Clientes; ventas y marketing", "Operaciones; dinero", "Personas"] },
            { title: "Encuentra lo que se come tu tiempo", bullets: ["Suma cada categoría", "Encierra las tres tareas más grandes"] }
          ],
          tryIt: "Empieza tu mapa de tiempo. De memoria, haz una lista de al menos diez tareas semanales con los minutos de cada una, ordénalas en las cinco categorías y encierra las tres más grandes.",
          youCanNow: "mapear en qué se va tu tiempo y encontrar las tareas que más tiempo se comen."
        },
        {
          title: "Elegir proyectos de IA según su valor y su riesgo",
          minutes: 5,
          goal: "Calificar posibles proyectos de IA y elegir los dos con los que vas a empezar.",
          text: [
            "No todo lo que se come tu tiempo es un buen proyecto de IA. Califica cada uno del 1 al 5 en valor (tiempo o dinero ahorrado, mejor servicio) y del 1 al 5 en riesgo (qué pasa si la IA se equivoca: clientes enojados, dinero perdido, problemas legales).",
            "Empieza con alto valor y bajo riesgo. Hacer borradores de publicaciones para redes y responder preguntas comunes suelen ser buenos comienzos. Las categorías de contabilidad o las cotizaciones pueden tener mucho valor, pero necesitan una revisión cuidadosa. Las decisiones de contratación, los documentos legales y todo lo que tenga que ver con salud o seguridad son de alto riesgo: que una persona y un profesional estén a cargo.",
            "Elige dos proyectos. Un logro rápido para ganar confianza y un proyecto más grande que vas a planear con cuidado."
          ],
          steps: ["Haz una lista de tus tres tareas que más tiempo se comen, más otras ideas.", "Califica el valor del 1 al 5 y el riesgo del 1 al 5.", "Elige un logro rápido (alto valor, bajo riesgo).", "Elige un proyecto más grande que vas a planear con cuidado."],
          words: [["Valor", "cuánto ahorra o gana un proyecto, o cuánto mejora el servicio."], ["Riesgo", "cuánto daño podría causar un error."], ["Logro rápido", "un proyecto pequeño que funciona rápido y da confianza."]],
          slides: [
            { title: "Califica cada idea", bullets: ["Valor 1-5: tiempo, dinero, mejor servicio", "Riesgo 1-5: daño si la IA se equivoca"] },
            { title: "Por dónde empezar", bullets: ["Primero alto valor y bajo riesgo", "Publicaciones y preguntas comunes son buenos comienzos", "Contratación, leyes, salud y seguridad: personas a cargo"] },
            { title: "Elige dos", bullets: ["Un logro rápido", "Un proyecto más grande, planeado con cuidado"] }
          ],
          tryIt: "Califica al menos cinco ideas de IA según su valor y su riesgo en una tabla pequeña. Elige tu logro rápido y tu proyecto más grande, y escribe una oración sobre por qué elegiste cada uno.",
          youCanNow: "elegir proyectos de IA para tu negocio comparando su valor con su riesgo."
        },
        {
          title: "Hacer una prueba piloto de 30 días y medirla",
          minutes: 5,
          goal: "Planear una prueba pequeña de 30 días con una medida clara de antes y después.",
          text: [
            "Una prueba piloto es una prueba pequeña y con tiempo limitado. En lugar de cambiarlo todo, pruebas la IA en una tarea durante 30 días y mides si ayudó.",
            "Primero mide el \"antes\": cuánto tarda hoy la tarea, cuántos errores hay, cómo responden los clientes. Luego decide la meta del \"después\": \"Responder los mensajes comunes baja de 60 a 25 minutos al día, sin que aumenten las quejas.\"",
            "Durante la prueba, lleva un registro corto: qué funcionó, qué salió mal, qué corregiste. Al final, decide: seguir, cambiar o parar. Parar está bien; aprendiste algo a bajo costo."
          ],
          steps: ["Elige la tarea y escribe los números del antes.", "Escribe la meta del después.", "Haz la prueba durante 30 días y lleva un registro corto.", "El día 30: seguir, cambiar o parar."],
          words: [["Prueba piloto", "una prueba pequeña y con tiempo limitado de una nueva forma de trabajar."], ["Punto de partida", "los números del \"antes\" con los que comparas."], ["Meta", "el resultado que esperas lograr."]],
          slides: [
            { title: "Una prueba piloto es una prueba pequeña", bullets: ["Una tarea, 30 días", "Mide si ayudó"] },
            { title: "Antes y después", bullets: ["Antes: tiempo, errores, respuesta de los clientes", "Ejemplo de meta: de 60 a 25 minutos al día", "Sin que aumenten las quejas"] },
            { title: "El día 30", bullets: ["Lee tu registro", "Seguir, cambiar o parar", "Parar es una lección barata"] }
          ],
          tryIt: "Escribe un plan de prueba piloto para tu logro rápido: la tarea, los números del antes (calcúlalos si hace falta), la meta del después y lo que vas a anotar en tu registro cada semana.",
          youCanNow: "planear y medir una prueba piloto de IA de 30 días para una tarea del negocio."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir qué mejorar",
        questions: [
          { q: "¿Cuál es el primer paso de una estrategia de IA en este curso?", options: ["Comprar muchas herramientas", "Mapear en qué se va tu tiempo", "Despedir al personal", "Copiar a un competidor"], answer: 1, why: "La estrategia empieza con datos de tu negocio." },
          { q: "¿Qué proyecto es la mejor primera opción?", options: ["Lo más nuevo", "Bajo valor, alto riesgo", "Alto riesgo, cualquier valor", "Alto valor, bajo riesgo"], answer: 3, why: "Empieza donde la IA más ayuda y menos daño puede hacer." },
          { q: "¿Qué tarea debe seguir a cargo de una persona y un profesional?", options: ["Las decisiones de contratación", "Hacer borradores de publicaciones", "Responder \"¿Cuál es su horario?\"", "Pensar nombres para el menú"], answer: 0, why: "La contratación es de alto riesgo." },
          { q: "¿Qué es una prueba piloto?", options: ["Un trabajo en una aerolínea", "Un cambio permanente", "Una prueba pequeña y con tiempo limitado", "Una licencia de software"], answer: 2, why: "Una prueba piloto prueba una tarea durante un tiempo fijo." },
          { q: "El día 30, la prueba piloto no ayudó. ¿Qué es lo correcto?", options: ["Esconder los resultados", "Ampliarla a todo", "Pararla o cambiarla; aprendiste a bajo costo", "No volver a medir nunca"], answer: 2, why: "Parar una prueba que no funcionó es una buena decisión." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conectar herramientas y fijar reglas",
      lessons: [
        {
          title: "Cómo se conectan las herramientas: integraciones en palabras sencillas",
          minutes: 5,
          goal: "Dibujar cómo se pasan información entre sí las herramientas de tu negocio.",
          text: [
            "Una integración es una conexión que permite que una herramienta le envíe información a otra de forma automática. Por ejemplo: un formulario de reservas agrega la cita a tu calendario; un pedido pagado agrega una fila a tu hoja de ventas; una reseña nueva te manda un mensaje de texto.",
            "Muchas herramientas tienen conexiones incluidas que aparecen en su configuración, muchas veces con el nombre de aplicaciones, integraciones o cuentas conectadas. Los servicios conectores como Zapier, Make o Microsoft Power Automate unen herramientas que no se conectan solas. Revisa en el sitio oficial de cada herramienta con qué se conecta y cuánto cuesta.",
            "Dibuja tus herramientas como cajas y la información como flechas: \"aplicación de reservas -> calendario\", \"punto de venta -> hoja de ventas\". Luego marca qué flechas ya funcionan, cuáles haces a mano y cuáles podrías automatizar."
          ],
          steps: ["Haz una lista de las herramientas que usas: punto de venta, reservas, correo, calendario, hojas de cálculo, redes.", "Dibuja cada una como una caja.", "Dibuja flechas para la información que se mueve entre ellas.", "Marca cada flecha: automática, a mano o se podría automatizar."],
          words: [["Integración", "una conexión que permite que una herramienta le envíe información a otra de forma automática."], ["Servicio conector", "una herramienta como Zapier, Make o Power Automate que une otras herramientas."], ["Automatizar", "hacer que una tarea pase sola, sin que una persona haga cada paso."]],
          slides: [
            { title: "Una integración es una conexión", bullets: ["Formulario de reservas -> calendario", "Pedido pagado -> hoja de ventas", "Reseña nueva -> aviso por texto"] },
            { title: "Formas de conectar", bullets: ["Conexiones incluidas en la configuración", "Servicios conectores: Zapier, Make, Power Automate", "Revisa los costos en cada sitio oficial"] },
            { title: "Dibuja tu mapa", bullets: ["Las herramientas son cajas; la información, flechas", "Marca: automática, a mano, se podría automatizar"] }
          ],
          tryIt: "Dibuja en papel tu mapa de herramientas con cajas y flechas. Marca al menos una flecha que hoy haces a mano y que se podría automatizar.",
          youCanNow: "mapear cómo se conectan las herramientas de tu negocio y detectar tareas que se podrían automatizar."
        },
        {
          title: "Mantener el control: aprobaciones, costos y datos",
          minutes: 5,
          goal: "Decidir qué pasos automáticos necesitan tu aprobación y revisar el costo real.",
          text: [
            "La automatización ahorra tiempo, pero también puede repetir un error cien veces. Deja que una persona apruebe todo lo que envíe dinero, mande mensajes a muchos clientes, cambie precios, borre registros o haga promesas.",
            "Cuenta el costo completo: suscripciones, cobros por uso, tiempo de configuración y tiempo para revisar el trabajo. Compáralo con el tiempo ahorrado en tu prueba piloto. Si los números no cuadran, sigue haciéndolo a mano por ahora.",
            "Sabe a dónde van tus datos. Antes de conectar una herramienta, lee qué datos puede ver y redúcelos al mínimo. Usa contraseñas fuertes y verificación en dos pasos en las cuentas del negocio, y quita el acceso al personal que se va."
          ],
          steps: ["Marca cada paso automático que envíe dinero, mande mensajes a mucha gente, cambie precios o borre datos.", "Exige tu aprobación en esos pasos.", "Suma el costo mensual completo.", "Revisa qué datos puede ver cada conexión.", "Activa la verificación en dos pasos."],
          words: [["Paso de aprobación", "un punto donde una persona tiene que decir que sí antes de que el proceso siga."], ["Verificación en dos pasos", "una segunda comprobación, como un código en tu teléfono, al iniciar sesión."], ["Suscripción", "un pago regular para seguir usando una herramienta."]],
          slides: [
            { title: "Una persona aprueba", bullets: ["Todo lo que envíe dinero", "Mensajes a muchos clientes", "Cambios de precio, borrados, promesas"] },
            { title: "Cuenta el costo completo", bullets: ["Suscripciones y cobros por uso", "Tiempo de configuración y de revisión", "Compáralo con el tiempo ahorrado"] },
            { title: "Protege tus datos", bullets: ["Dale a cada herramienta los mínimos datos que necesita", "Contraseñas fuertes y verificación en dos pasos", "Quita el acceso cuando alguien del personal se va"] }
          ],
          tryIt: "En tu mapa de herramientas, pon una estrella en cada paso que necesite tu aprobación. Luego escribe una revisión de costos: lo que pagas al mes por las herramientas frente a las horas ahorradas por lo que vale tu hora.",
          youCanNow: "mantener el control de las automatizaciones con pasos de aprobación, revisión de costos y límites a los datos."
        },
        {
          title: "Escribir tu política de uso de IA y tu plan de una página",
          minutes: 5,
          goal: "Escribir cinco reglas sencillas de IA para tu negocio y terminar tu plan de IA de una página.",
          text: [
            "Una política de uso de IA es una lista corta de reglas sobre cómo tú y tu personal usan la IA. Protege a los clientes y mantiene a todos en la misma línea. Para empezar bastan cinco reglas.",
            "Reglas de ejemplo: (1) No se ponen en herramientas de IA nombres de clientes con datos de contacto, números de tarjeta, contraseñas ni registros de empleados. (2) Una persona revisa cada dato antes de que lo vean los clientes. (3) Nunca escribimos reseñas ni afirmaciones falsas. (4) Para el negocio solo se usan herramientas aprobadas. (5) Las decisiones de dinero, legales, de contratación y de seguridad las toman personas.",
            "Pídele a la IA que haga tus reglas claras y cortas, y luego ponlas en una página junto con tu mapa de tiempo, los proyectos elegidos, el plan de la prueba piloto, el mapa de herramientas y la revisión de costos. Revisa el plan cada tres meses."
          ],
          steps: ["Escribe cinco reglas en palabras sencillas.", "Pídele a la IA que las haga claras y cortas.", "Compártelas con el personal y escucha sus preguntas.", "Pon todo en una página y fija una fecha de revisión."],
          words: [["Política de uso de IA", "reglas escritas sobre cómo un negocio usa la IA."], ["Herramienta aprobada", "una herramienta que el dueño revisó y permitió para el negocio."]],
          slides: [
            { title: "Por qué una política", bullets: ["Protege a los clientes", "Mantiene al personal en la misma línea", "Para empezar bastan cinco reglas"] },
            { title: "Reglas de ejemplo", bullets: ["Nada de datos privados de clientes o personal en la IA", "Una persona revisa los datos; nada de reseñas falsas", "Solo herramientas aprobadas; las personas toman las grandes decisiones"] },
            { title: "Tu plan de una página", bullets: ["Mapa de tiempo y dos proyectos", "Prueba piloto, mapa de herramientas y revisión de costos", "Cinco reglas; revisión cada tres meses"] }
          ],
          tryIt: "Tarea final: escribe tus cinco reglas de IA y tu plan de IA de una página con sus cinco partes. Comparte las reglas con alguien de tu personal o una persona de confianza y pregúntale si algo no está claro.",
          youCanNow: "dirigir el uso de la IA en tu negocio con un plan escrito y reglas claras."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Conectar herramientas y fijar reglas",
        questions: [
          { q: "¿Qué es una integración?", options: ["Una conexión que permite que una herramienta le envíe información a otra", "Un empleado nuevo", "Un formulario de impuestos", "Un tipo de préstamo"], answer: 0, why: "Las integraciones pasan información entre herramientas." },
          { q: "¿Cuál es un servicio conector?", options: ["Una engrapadora", "Un cajón de caja registradora", "Un fax", "Zapier"], answer: 3, why: "Zapier une herramientas que no se conectan solas." },
          { q: "¿Qué paso automático necesita más tu aprobación?", options: ["Guardar el nombre de un archivo", "Enviar un correo de descuento a los 800 clientes", "Agregar un color al calendario", "Ordenar una lista"], answer: 1, why: "Los mensajes a muchos clientes necesitan el sí de una persona." },
          { q: "Una automatización cuesta más cada mes que el tiempo que ahorra. ¿Qué haces?", options: ["Seguir haciéndolo a mano por ahora", "Seguir pagando", "Agregar más herramientas", "Ignorar el costo"], answer: 0, why: "Los números deben cuadrar." },
          { q: "¿Cuál es una buena regla de uso de IA?", options: ["Pegar números de tarjeta de clientes para ahorrar tiempo", "Usar cualquier herramienta que encuentres", "Una persona revisa cada dato antes de que lo vean los clientes", "La IA toma las decisiones de contratación"], answer: 2, why: "Revisar los datos protege a los clientes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo crear una estrategia de IA e integraciones para tu negocio",
    questions: [
      { q: "Un mapa de tiempo es una lista de:", options: ["Tus contraseñas", "Tus tareas y cuánto tarda cada una", "Las direcciones de tus clientes", "Tus competidores"], answer: 1, why: "Muestra en qué se va tu tiempo." },
      { q: "¿Cuál es una de las cinco categorías?", options: ["Películas", "Clima", "Deportes", "Operaciones"], answer: 3, why: "Clientes, ventas y marketing, operaciones, dinero, personas." },
      { q: "¿Por qué encerrar las tres tareas que más tiempo se comen?", options: ["Para decorar", "Para borrarlas", "Para compartirlas en internet", "Es donde la IA podría ayudar más"], answer: 3, why: "Las tareas grandes ofrecen el mayor ahorro de tiempo." },
      { q: "Al calificar valor y riesgo, el riesgo significa:", options: ["Qué tan divertido es", "El daño si la IA se equivoca", "Qué tan nueva es la herramienta", "Cuántas aplicaciones tienes"], answer: 1, why: "El riesgo mide el daño posible." },
      { q: "Un logro rápido es:", options: ["Un boleto de lotería", "El proyecto más grande y riesgoso", "Un proyecto pequeño que funciona rápido", "Una demanda"], answer: 2, why: "Los logros rápidos dan confianza." },
      { q: "¿Qué proyecto es de alto riesgo?", options: ["Escribir un contrato legal", "Hacer el borrador de un texto para Instagram", "Pensar el nombre de un platillo especial", "Dar formato a una lista de control"], answer: 0, why: "Los documentos legales necesitan un profesional." },
      { q: "Los números del \"antes\" en una prueba piloto se llaman:", options: ["Presupuesto", "Meta", "Punto de partida", "Contraseña"], answer: 2, why: "El punto de partida es con lo que comparas." },
      { q: "Una buena meta para una prueba piloto es:", options: ["\"Los mensajes bajan de 60 a 25 minutos al día sin que suban las quejas\"", "\"Ser mejores\"", "\"Usar más la IA\"", "\"Probar cosas\""], answer: 0, why: "Es específica y se puede medir." },
      { q: "Durante la prueba piloto llevas:", options: ["Ninguna nota", "Un registro corto de lo que funcionó y lo que salió mal", "Números de tarjeta de clientes", "Solo las buenas noticias"], answer: 1, why: "El registro guía tu decisión del día 30." },
      { q: "\"Pedido pagado -> hoja de ventas\" es un ejemplo de:", options: ["Un impuesto", "Una política", "Una reseña", "Una integración"], answer: 3, why: "La información se mueve sola entre herramientas." },
      { q: "¿Dónde se suelen encontrar las conexiones incluidas?", options: ["En la configuración de la herramienta", "En un recibo", "En el correo postal", "En ningún lado"], answer: 0, why: "La configuración muchas veces enumera aplicaciones o integraciones." },
      { q: "En tu mapa de herramientas, las flechas muestran:", options: ["Los nombres del personal", "El humor de los clientes", "Los precios", "La información que se mueve entre herramientas"], answer: 3, why: "Las cajas son herramientas; las flechas, información." },
      { q: "¿Por qué mantener la aprobación en automatizaciones que envían dinero?", options: ["Para molestar al personal", "Es más lento", "La automatización puede repetir un error muchas veces", "No hace falta"], answer: 2, why: "Una persona detiene errores caros que se repiten." },
      { q: "El costo completo de una herramienta incluye:", options: ["Solo el precio del anuncio", "Suscripción, cobros por uso, configuración y tiempo de revisión", "Nada", "Solo la electricidad"], answer: 1, why: "Todos los costos cuentan frente al tiempo ahorrado." },
      { q: "Cuando alguien del personal se va, deberías:", options: ["No hacer nada", "Dejar su acceso abierto", "Compartir su contraseña", "Quitarle el acceso a las herramientas del negocio"], answer: 3, why: "Quitar el acceso protege tus datos." },
      { q: "¿Qué agrega la verificación en dos pasos?", options: ["Una mejora gratis", "Una segunda contraseña en papel", "Una segunda comprobación, como un código en el teléfono", "Nada"], answer: 2, why: "Hace que las cuentas sean más difíciles de violar." },
      { q: "Una política de uso de IA es:", options: ["Reglas escritas sobre cómo tu negocio usa la IA", "Una póliza de seguro", "Un contrato de renta", "Una herramienta"], answer: 0, why: "Mantiene a todos seguros y en la misma línea." },
      { q: "¿Qué va en tu política de IA?", options: ["La IA decide a quién contratar", "Las personas toman las decisiones de dinero, legales, de contratación y de seguridad", "Cualquier herramienta está bien", "Las reseñas falsas están permitidas"], answer: 1, why: "Las grandes decisiones se quedan con las personas." },
      { q: "¿Cada cuánto deberías revisar tu plan de IA?", options: ["Nunca", "Más o menos cada tres meses", "Cada hora", "Solo después de un desastre"], answer: 1, why: "Las revisiones regulares lo mantienen al día." },
      { q: "Tu plan de IA de una página incluye:", options: ["Mapa de tiempo, proyectos, prueba piloto, mapa de herramientas, revisión de costos y reglas", "Solo una lista de aplicaciones", "Contraseñas de clientes", "Los precios de un competidor"], answer: 0, why: "Esas partes forman un plan completo." }
    ]
  }
};

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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios que ya probaron un poco la IA y ahora quieren un plan en lugar de experimentos al azar: tiendas, restaurantes, salones de belleza, servicios de limpieza y reparación, y oficinas pequeñas, algunos con unos cuantos empleados.",
    startingPoint: "Han usado un asistente de chat para algunas tareas y usan varias aplicaciones del negocio, como una herramienta de reservas, pagos y una hoja de cálculo. No tienen por escrito un plan de qué proyectos de IA hacer, cómo medirlos, cómo se conectan las herramientas ni cuáles son las reglas.",
    gap: "Los experimentos de IA al azar desperdician tiempo y dinero, y las automatizaciones sin aprobaciones pueden repetir errores caros o filtrar datos. Los dueños necesitan elegir los proyectos que valen la pena, probar uno y medirlo, conectar sus herramientas de forma segura y fijar reglas claras de IA para ellos y sus empleados.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: una computadora o un teléfono inteligente con las aplicaciones que ya usa el negocio",
      "Tiempo: lecciones de unos 5 minutos que caben en un día de trabajo ocupado",
      "Los precios y las funciones de las herramientas cambian; los dueños revisan la página de precios de cada herramienta",
      "Privacidad y seguridad: las personas toman las decisiones de dinero, legales, de contratación y de seguridad; los datos de los clientes se protegen"
    ],
    prerequisites: "Primero \"Introducción a la IA para pequeños negocios\" o \"Herramientas de IA esenciales para pequeños negocios\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Recordando una semana normal", action: "hacer un mapa de tiempo de las tareas que te quitan tiempo", standard: "con al menos diez tareas, los minutos de cada una, ordenadas en categorías y las tres más grandes encerradas en un círculo" },
    { id: "O2", condition: "Con al menos cinco ideas de IA", action: "calificar cada una por su valor y su riesgo y elegir dos proyectos para empezar", standard: "con un logro rápido y un proyecto más grande, cada uno con una razón en una oración" },
    { id: "O3", condition: "Con tu proyecto de logro rápido", action: "planear una prueba piloto de 30 días con una medida de antes y después", standard: "con un punto de partida, una meta clara y un registro semanal" },
    { id: "O4", condition: "Con las herramientas que usa tu negocio", action: "dibujar cómo se pasan información entre sí tus herramientas", standard: "con cajas y flechas y al menos un paso a mano que se podría automatizar" },
    { id: "O5", condition: "Con tu mapa de herramientas y tus costos", action: "marcar los pasos que necesitan tu aprobación y calcular el costo real de automatizar", standard: "marcando con una estrella cada paso que envía dinero o mensajes a mucha gente, y comparando el costo con las horas ahorradas" },
    { id: "O6", condition: "Con la forma en que tu negocio usa la IA", action: "escribir una política de uso de IA de cinco reglas y un plan de IA de una página", standard: "con las cinco partes del plan y reglas que un empleado entienda con claridad" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir qué mejorar",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "mapear en qué se va tu tiempo y encontrar las tareas que más tiempo se comen.",
          quickCheck: [
            { objective: "O1", q: "¿Qué anota un mapa de tiempo?", options: ["Tus tareas y cuánto tarda cada una", "Las direcciones de las casas de tus empleados", "Tus ventas del mes", "Solo tu horario de atención"], answer: 0, why: "Un mapa de tiempo muestra en qué se va tu tiempo cada semana." },
            { objective: "O1", q: "Tu mapa de tiempo muestra que tres tareas se llevan casi toda tu semana. ¿Qué harías con ellas?", options: ["Ignorarlas", "Encerrarlas en un círculo como los lugares donde la IA podría ayudar más", "Borrarlas de la lista", "Hacerlas más rápido sin cambiar nada"], answer: 1, why: "Las tareas que más tiempo se llevan son donde la IA podría ayudar más." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "elegir proyectos de IA para tu negocio comparando su valor con su riesgo.",
          quickCheck: [
            { objective: "O2", q: "Al calificar por valor y riesgo, ¿qué significa el riesgo?", options: ["Cuánto cuesta la herramienta", "Cuánto tarda la configuración", "El daño si la IA se equivoca", "Cuántos empleados la usan"], answer: 2, why: "El riesgo es el daño que podría pasar si la IA comete un error." },
            { objective: "O2", q: "Una idea tiene valor alto y riesgo bajo, y otra tiene valor alto y riesgo alto. ¿Con cuál empezarías?", options: ["Con la de riesgo alto", "Con ninguna", "Con las dos a la vez", "Con la de valor alto y riesgo bajo"], answer: 3, why: "Valor alto y riesgo bajo es el mejor primer proyecto." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "planear y medir una prueba piloto de IA de 30 días para una tarea del negocio.",
          quickCheck: [
            { objective: "O3", q: "En una prueba piloto, ¿qué es el punto de partida?", options: ["Los números de \"antes\" con los que comparas", "El resultado final", "El precio de la herramienta", "Un horario de empleados"], answer: 0, why: "El punto de partida es donde empiezas, para poder medir el cambio." },
            { objective: "O3", q: "El día 30, tu prueba piloto no ahorró nada de tiempo. ¿Qué harías?", options: ["Dejarla funcionando para siempre", "Detenerla o cambiarla; aprendiste a bajo costo", "Comprar una versión más cara", "Esconder los resultados"], answer: 1, why: "Una prueba piloto es una prueba pequeña, así que si falla cuesta poco y enseña mucho." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir qué mejorar",
        questions: [
          { objective: "O1", q: "¿Cuál es el primer paso de una estrategia de IA en este curso?", options: ["Comprar muchas herramientas", "Mapear en qué se va tu tiempo", "Despedir al personal", "Copiar a un competidor"], answer: 1, why: "La estrategia empieza con datos de tu negocio." },
          { objective: "O2", q: "¿Qué proyecto es la mejor primera opción?", options: ["Lo más nuevo", "Bajo valor, alto riesgo", "Alto riesgo, cualquier valor", "Alto valor, bajo riesgo"], answer: 3, why: "Empieza donde la IA más ayuda y menos daño puede hacer." },
          { objective: "O2", q: "¿Qué tarea debe seguir a cargo de una persona y un profesional?", options: ["Las decisiones de contratación", "Hacer borradores de publicaciones", "Responder \"¿Cuál es su horario?\"", "Pensar nombres para el menú"], answer: 0, why: "La contratación es de alto riesgo." },
          { objective: "O3", q: "¿Qué es una prueba piloto?", options: ["Un trabajo en una aerolínea", "Un cambio permanente", "Una prueba pequeña y con tiempo limitado", "Una licencia de software"], answer: 2, why: "Una prueba piloto prueba una tarea durante un tiempo fijo." },
          { objective: "O3", q: "El día 30, la prueba piloto no ayudó. ¿Qué es lo correcto?", options: ["Esconder los resultados", "Ampliarla a todo", "Pararla o cambiarla; aprendiste a bajo costo", "No volver a medir nunca"], answer: 2, why: "Parar una prueba que no funcionó es una buena decisión." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conectar herramientas y fijar reglas",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "mapear cómo se conectan las herramientas de tu negocio y detectar tareas que se podrían automatizar.",
          quickCheck: [
            { objective: "O4", q: "¿Qué muestran las flechas de tu mapa de herramientas?", options: ["Quién manda", "Qué herramienta cuesta más", "La información que pasa de una herramienta a otra", "El orden en que compraste las herramientas"], answer: 2, why: "Las flechas muestran cómo pasa la información de una herramienta a otra." },
            { objective: "O4", q: "Copias a mano cada pedido pagado en tu hoja de ventas. ¿Qué harías?", options: ["Dejar de registrar las ventas", "Contratar a alguien que escriba más rápido", "Borrar la hoja de ventas", "Marcarlo en tu mapa como un paso que se podría automatizar"], answer: 3, why: "Los pasos a mano que mueven información son buenos candidatos para una integración." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "mantener el control de las automatizaciones con pasos de aprobación, revisión de costos y límites a los datos.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué mantener tu aprobación en las automatizaciones que envían dinero o mensajes masivos?", options: ["Porque una automatización puede repetir un error muchas veces", "Porque las aprobaciones hacen más baratas las herramientas", "Porque la ley siempre lo exige", "Porque hace más rápida la automatización"], answer: 0, why: "Un solo error en una automatización se puede repetir muchas veces antes de que lo notes." },
            { objective: "O5", q: "Un empleado deja tu negocio. ¿Qué harías?", options: ["Dejarle el acceso por si regresa", "Darle su contraseña a la persona nueva", "Quitarle el acceso a las herramientas del negocio", "No cambiar nada"], answer: 2, why: "Quitar el acceso protege los datos de tu negocio." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "dirigir el uso de la IA en tu negocio con un plan escrito y reglas claras.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una política de uso de IA?", options: ["Un plan de IA pagado", "Reglas escritas sobre cómo usa la IA tu negocio", "La reseña de un cliente", "Los términos de servicio de una herramienta"], answer: 1, why: "Una política de uso de IA fija reglas claras para ti y tus empleados." },
            { objective: "O6", q: "Ya escribiste tus cinco reglas de IA. ¿Qué harías después?", options: ["Guardarlas en secreto", "Publicarlas en internet sin leerlas", "Pedirle a la IA que las apruebe", "Compartirlas con un empleado y preguntarle si algo no está claro"], answer: 3, why: "Las reglas solo funcionan si las personas que las usan las entienden." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Conectar herramientas y fijar reglas",
        questions: [
          { objective: "O4", q: "¿Qué es una integración?", options: ["Una conexión que permite que una herramienta le envíe información a otra", "Un empleado nuevo", "Un formulario de impuestos", "Un tipo de préstamo"], answer: 0, why: "Las integraciones pasan información entre herramientas." },
          { objective: "O4", q: "¿Cuál es un servicio conector?", options: ["Una engrapadora", "Un cajón de caja registradora", "Un fax", "Zapier"], answer: 3, why: "Zapier une herramientas que no se conectan solas." },
          { objective: "O5", q: "¿Qué paso automático necesita más tu aprobación?", options: ["Guardar el nombre de un archivo", "Enviar un correo de descuento a los 800 clientes", "Agregar un color al calendario", "Ordenar una lista"], answer: 1, why: "Los mensajes a muchos clientes necesitan el sí de una persona." },
          { objective: "O5", q: "Una automatización cuesta más cada mes que el tiempo que ahorra. ¿Qué haces?", options: ["Seguir haciéndolo a mano por ahora", "Seguir pagando", "Agregar más herramientas", "Ignorar el costo"], answer: 0, why: "Los números deben cuadrar." },
          { objective: "O6", q: "¿Cuál es una buena regla de uso de IA?", options: ["Pegar números de tarjeta de clientes para ahorrar tiempo", "Usar cualquier herramienta que encuentres", "Una persona revisa cada dato antes de que lo vean los clientes", "La IA toma las decisiones de contratación"], answer: 2, why: "Revisar los datos protege a los clientes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo crear una estrategia de IA e integraciones para tu negocio",
    questions: [
      { objective: "O1", q: "Un mapa de tiempo es una lista de:", options: ["Tus contraseñas", "Tus tareas y cuánto tarda cada una", "Las direcciones de tus clientes", "Tus competidores"], answer: 1, why: "Muestra en qué se va tu tiempo." },
      { objective: "O1", q: "¿Cuál es una de las cinco categorías?", options: ["Películas", "Clima", "Deportes", "Operaciones"], answer: 3, why: "Clientes, ventas y marketing, operaciones, dinero, personas." },
      { objective: "O1", q: "¿Por qué encerrar las tres tareas que más tiempo se comen?", options: ["Para decorar", "Para borrarlas", "Para compartirlas en internet", "Es donde la IA podría ayudar más"], answer: 3, why: "Las tareas grandes ofrecen el mayor ahorro de tiempo." },
      { objective: "O2", q: "Al calificar valor y riesgo, el riesgo significa:", options: ["Qué tan divertido es", "El daño si la IA se equivoca", "Qué tan nueva es la herramienta", "Cuántas aplicaciones tienes"], answer: 1, why: "El riesgo mide el daño posible." },
      { objective: "O2", q: "Un logro rápido es:", options: ["Un boleto de lotería", "El proyecto más grande y riesgoso", "Un proyecto pequeño que funciona rápido", "Una demanda"], answer: 2, why: "Los logros rápidos dan confianza." },
      { objective: "O2", q: "¿Qué proyecto es de alto riesgo?", options: ["Escribir un contrato legal", "Hacer el borrador de un texto para Instagram", "Pensar el nombre de un platillo especial", "Dar formato a una lista de control"], answer: 0, why: "Los documentos legales necesitan un profesional." },
      { objective: "O3", q: "Los números del \"antes\" en una prueba piloto se llaman:", options: ["Presupuesto", "Meta", "Punto de partida", "Contraseña"], answer: 2, why: "El punto de partida es con lo que comparas." },
      { objective: "O3", q: "Una buena meta para una prueba piloto es:", options: ["\"Los mensajes bajan de 60 a 25 minutos al día sin que suban las quejas\"", "\"Ser mejores\"", "\"Usar más la IA\"", "\"Probar cosas\""], answer: 0, why: "Es específica y se puede medir." },
      { objective: "O3", q: "Durante la prueba piloto llevas:", options: ["Ninguna nota", "Un registro corto de lo que funcionó y lo que salió mal", "Números de tarjeta de clientes", "Solo las buenas noticias"], answer: 1, why: "El registro guía tu decisión del día 30." },
      { objective: "O4", q: "\"Pedido pagado -> hoja de ventas\" es un ejemplo de:", options: ["Un impuesto", "Una política", "Una reseña", "Una integración"], answer: 3, why: "La información se mueve sola entre herramientas." },
      { objective: "O4", q: "¿Dónde se suelen encontrar las conexiones incluidas?", options: ["En la configuración de la herramienta", "En un recibo", "En el correo postal", "En ningún lado"], answer: 0, why: "La configuración muchas veces enumera aplicaciones o integraciones." },
      { objective: "O4", q: "En tu mapa de herramientas, las flechas muestran:", options: ["Los nombres del personal", "El humor de los clientes", "Los precios", "La información que se mueve entre herramientas"], answer: 3, why: "Las cajas son herramientas; las flechas, información." },
      { objective: "O5", q: "¿Por qué mantener la aprobación en automatizaciones que envían dinero?", options: ["Para molestar al personal", "Es más lento", "La automatización puede repetir un error muchas veces", "No hace falta"], answer: 2, why: "Una persona detiene errores caros que se repiten." },
      { objective: "O5", q: "El costo completo de una herramienta incluye:", options: ["Solo el precio del anuncio", "Suscripción, cobros por uso, configuración y tiempo de revisión", "Nada", "Solo la electricidad"], answer: 1, why: "Todos los costos cuentan frente al tiempo ahorrado." },
      { objective: "O5", q: "Cuando alguien del personal se va, deberías:", options: ["No hacer nada", "Dejar su acceso abierto", "Compartir su contraseña", "Quitarle el acceso a las herramientas del negocio"], answer: 3, why: "Quitar el acceso protege tus datos." },
      { objective: "O5", q: "¿Qué agrega la verificación en dos pasos?", options: ["Una mejora gratis", "Una segunda contraseña en papel", "Una segunda comprobación, como un código en el teléfono", "Nada"], answer: 2, why: "Hace que las cuentas sean más difíciles de violar." },
      { objective: "O6", q: "Una política de uso de IA es:", options: ["Reglas escritas sobre cómo tu negocio usa la IA", "Una póliza de seguro", "Un contrato de renta", "Una herramienta"], answer: 0, why: "Mantiene a todos seguros y en la misma línea." },
      { objective: "O6", q: "¿Qué va en tu política de IA?", options: ["La IA decide a quién contratar", "Las personas toman las decisiones de dinero, legales, de contratación y de seguridad", "Cualquier herramienta está bien", "Las reseñas falsas están permitidas"], answer: 1, why: "Las grandes decisiones se quedan con las personas." },
      { objective: "O6", q: "¿Cada cuánto deberías revisar tu plan de IA?", options: ["Nunca", "Más o menos cada tres meses", "Cada hora", "Solo después de un desastre"], answer: 1, why: "Las revisiones regulares lo mantienen al día." },
      { objective: "O6", q: "Tu plan de IA de una página incluye:", options: ["Mapa de tiempo, proyectos, prueba piloto, mapa de herramientas, revisión de costos y reglas", "Solo una lista de aplicaciones", "Contraseñas de clientes", "Los precios de un competidor"], answer: 0, why: "Esas partes forman un plan completo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      6,
      7,
      9,
      11,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Mapa de tiempo y dos proyectos",
        objective: "O2",
        notYet: "No hay mapa de tiempo, o los proyectos se eligieron sin calificar valor y riesgo.",
        meets: "Mapa de tiempo y dos tareas elegidas, cada una con su calificación de valor y riesgo.",
        exceeds: "Cada elección tiene una razón clara de una oración ligada al mapa de tiempo."
      },
      {
        name: "Prueba piloto de 30 días",
        objective: "O3",
        notYet: "No hay medida, o no hay números de antes.",
        meets: "Una prueba piloto para la primera tarea con un punto de partida y una meta de después.",
        exceeds: "También tiene un plan de registro semanal y una regla para detenerla o cambiarla el día 30."
      },
      {
        name: "Conexiones de herramientas y aprobaciones",
        objective: "O4",
        notYet: "No hay mapa de herramientas, o no hay aprobaciones marcadas.",
        meets: "Un diagrama o una lista de cómo se conectan las herramientas, con los pasos de aprobación marcados.",
        exceeds: "Cada paso que envía dinero o mensajes masivos tiene una estrella."
      },
      {
        name: "Revisión de costos",
        objective: "O5",
        notYet: "No hay revisión de costos.",
        meets: "Los costos mensuales de las herramientas comparados con las horas ahorradas por el valor de tu hora.",
        exceeds: "Incluye los cobros por uso, la configuración y el tiempo para revisar."
      },
      {
        name: "Política de uso de IA",
        objective: "O6",
        notYet: "Menos de cinco reglas, o reglas que dejan a la IA decisiones de dinero, legales, de contratación o de seguridad.",
        meets: "Cinco reglas claras para ti y tus empleados.",
        exceeds: "Se compartió con un empleado o una persona de confianza y se aclaró con sus comentarios."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que hacen su prueba piloto de 30 días y reportan el resultado de antes y después (encuesta de seguimiento)",
      "Dueños que reportan horas ahorradas por semana después de la prueba piloto",
      "Dueños que comparten con sus empleados una política de uso de IA por escrito en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono inteligente con internet y las aplicaciones que ya usa el negocio",
      "Un asistente de IA gratuito y una hoja de cálculo gratis para calificar y registrar",
      "Papel y lápiz para el mapa de tiempo y el mapa de herramientas",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Pide a los dueños que calculen antes de la sesión las tareas de una semana normal, para que el mapa de tiempo salga rápido.",
      "Dibuja en un pizarrón un mapa de herramientas de ejemplo con cajas y flechas antes de que los dueños dibujen el suyo.",
      "Recuerda a los dueños que revisen la página de precios de cada herramienta; los precios y las funciones cambian.",
      "Insiste en que las personas toman las decisiones de dinero, legales, de contratación y de seguridad, y en que los datos de los clientes se protegen.",
      "Califica el plan de una página con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

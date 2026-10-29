"use strict";

// Koach Learn course (Spanish translation of entrepreneurs/entrepreneurs-capstone.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-capstone-es",
  lang: "es",
  translationOf: "entrepreneurs-capstone",
  category: "Entrepreneurs",
  name: "Proyecto final: crea tu plan de negocio, servicio, automatización, estrategia de marketing o sistema de productividad con IA",
  skills: "Elegir y delimitar un proyecto, Validar con personas reales, Diseñar la solución, Construirla con IA, Revisar números y riesgos, Probar y presentar tu trabajo",
  outcome: "elegir un proyecto de negocio con IA (un plan de negocio para una startup, un negocio de servicios, un sistema de automatización, una estrategia de marketing o un ecosistema de productividad), construirlo de principio a fin con la IA como asistente, probarlo con personas reales y presentar una versión terminada y revisada.",
  about: [
    "Este es el proyecto final: el que une todo lo que aprendiste en los cursos para emprendedores. Vas a elegir UNO de cinco proyectos y lo vas a construir para un negocio real, el tuyo o uno que conozcas bien.",
    "Las cinco opciones son: 1) un plan de negocio para una startup con IA, 2) un negocio de servicios impulsado por IA, 3) un sistema de automatización con IA para un negocio, 4) una estrategia de marketing con IA, o 5) un ecosistema de productividad con IA (las herramientas, plantillas y rutinas que hacen funcionar la semana de un negocio). Cada lección es una etapa de la construcción: elegir y delimitar, validar, diseñar, construir, revisar números y riesgos, y luego probar y presentar.",
    "Cada lección se lee en unos cinco minutos, pero las tareas de \"Pruébalo ahora\" son trabajo real del proyecto y pueden tomar una hora o más. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Cuando tu proyecto toque impuestos, licencias o temas legales, las lecciones te llevan a fuentes oficiales; habla con un contador o un abogado sobre tu caso."
  ],
  finalTask: "Entrega tu proyecto final terminado en un solo documento o carpeta: un resumen de una página (el negocio, el cliente, el problema, tu solución), el proyecto completo (plan de negocio, paquete de servicio, automatización funcionando con su registro, estrategia de marketing o ecosistema de productividad), tus notas de validación con al menos tres personas reales, los números y la lista de riesgos, los resultados de las pruebas y los cambios que hiciste, y una presentación de tres minutos que puedas dar en voz alta.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Emprendedores que están terminando los cursos de Koach Learn para emprendedores y quieren construir un proyecto completo de IA para su propio negocio o para uno que conocen bien.",
    startingPoint: "En cursos anteriores usaron la IA para escribir textos del negocio, herramientas, marketing, automatización o productividad. La mayoría no ha llevado un proyecto desde la idea hasta un resultado probado y presentado.",
    gap: "Las habilidades aprendidas una por una solo dan fruto cuando se juntan en un proyecto terminado. Necesitan delimitar, validar, diseñar, construir, revisar y presentar un proyecto real, para salir con algo que puedan usar, mostrar a un socio o a quien financia, y seguir mejorando.",
    constraints: [
      "Palabras sencillas; cada lección es corta, pero el trabajo del proyecto puede llevar una hora o más por etapa",
      "Dispositivos: una computadora con un asistente de IA gratuito, una hoja de cálculo y una herramienta de documentos",
      "Tiempo: unas dos a cuatro semanas de trabajo de medio tiempo en el proyecto",
      "Los puntos de impuestos, licencias y legales van a fuentes oficiales (SBA, IRS) y a un contador o un abogado",
      "Marcadores en lugar de nombres de clientes o datos privados en cada instrucción a la IA"
    ],
    prerequisites: "\"Introducción a la IA para emprendedores\" y al menos otros dos cursos para emprendedores, de preferencia el que corresponde al proyecto elegido."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las cinco opciones de proyecto final y un negocio real", action: "elegir un proyecto y escribir su alcance en un párrafo con lo que incluye, lo que no incluye y una fecha de término", standard: "lo bastante pequeño para terminarlo a tiempo" },
    { id: "O2", condition: "Con los supuestos principales de tu proyecto", action: "entrevistar al menos a tres personas reales con preguntas neutrales y marcar cada supuesto como confirmado, equivocado o dudoso", standard: "anotando sus palabras exactas y actualizando el alcance cuando un supuesto esté equivocado" },
    { id: "O3", condition: "Con tu alcance y tus notas de validación", action: "escribir un esquema con las secciones correctas para tu tipo de proyecto", standard: "marcando qué secciones necesitan tus propios datos" },
    { id: "O4", condition: "Con la IA como tu asistente", action: "construir el proyecto una sección a la vez, con la IA redactando y tú revisando", standard: "llevando un registro de construcción y usando marcadores para los datos privados" },
    { id: "O5", condition: "Con tu proyecto", action: "revisar sus números en una hoja de cálculo y escribir una lista de riesgos", standard: "con cada fórmula revisada y los puntos de impuestos y legales marcados para confirmarlos con una fuente oficial o un profesional" },
    { id: "O6", condition: "Con tu proyecto terminado", action: "probarlo con tres personas, hacer los cambios más importantes y dar una presentación de tres minutos", standard: "cubriendo el problema, tu solución, las pruebas y el siguiente paso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planea tu proyecto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Etapa 1: Elegir y delimitar tu proyecto",
          minutes: 6,
          goal: "Elegir uno de los cinco proyectos finales y escribir su alcance en un párrafo.",
          text: [
            "Elige el proyecto que más ayudará a un negocio real en los próximos tres meses. Un plan de negocio sirve para una idea nueva que necesita un plan claro o financiamiento. Un negocio de servicios sirve para alguien listo para vender un servicio usando IA. Un sistema de automatización sirve para un negocio ahogado en tareas repetidas. Una estrategia de marketing sirve para un negocio que necesita más clientes. Un ecosistema de productividad sirve para un dueño agobiado que necesita una mejor semana.",
            "El alcance es decidir qué entra y qué queda fuera. Un buen alcance es lo bastante pequeño para terminarlo: \"Una estrategia de marketing de 90 días para mi lavado de autos a domicilio, enfocada en un barrio y dos canales\" es mejor que \"marketing para todo\".",
            "Pídele a la IA que te ayude a comparar: \"Este es mi negocio y mi mayor problema. ¿Cuál de estos cinco proyectos finales ayudaría más y por qué?\" Luego decide tú y escribe tu alcance."
          ],
          steps: ["Escribe tu negocio (o el que estás ayudando) y su mayor problema.", "Lee las cinco opciones de proyecto.", "Pregúntale a la IA cuál ayudaría más y por qué.", "Elige una.", "Escribe el alcance en un párrafo: qué entra, qué queda fuera y la fecha de entrega."],
          words: [["Proyecto final", "un último proyecto que une todo lo que aprendiste."], ["Alcance", "los límites de un proyecto: qué incluye y qué no."]],
          slides: [
            { title: "Cinco opciones de proyecto final", bullets: ["Plan de negocio para una startup con IA", "Negocio de servicios impulsado por IA", "Sistema de automatización con IA", "Estrategia de marketing o ecosistema de productividad con IA"] },
            { title: "¿Cuál encaja?", bullets: ["Idea nueva que necesita un plan: plan de negocio", "Listo para vender un servicio: negocio de servicios", "Demasiadas tareas repetidas: automatización"] },
            { title: "Y además", bullets: ["Necesitas clientes: estrategia de marketing", "Dueño agobiado: ecosistema de productividad"] },
            { title: "Hazlo pequeño", bullets: ["Qué entra, qué queda fuera", "Una fecha de entrega", "Lo bastante pequeño para terminarlo"] }
          ],
          tryIt: "Elige tu proyecto final y escribe su alcance en un párrafo: qué entra, qué queda fuera y tu fecha de entrega.",
          youCanNow: "elegir un proyecto final que sirva a un negocio real y delimitarlo para poder terminarlo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué dice el alcance de un proyecto?", options: ["Qué incluye y qué no incluye el proyecto, y cuándo estará terminado", "La historia de tu vida", "Todas las ideas que has tenido", "El nombre de tu herramienta de IA"], answer: 0, why: "El alcance mantiene el proyecto lo bastante pequeño para terminarlo." },
            { objective: "O1", q: "Tu alcance cubre marketing en cinco ciudades y seis canales en dos semanas. ¿Qué haces?", options: ["Dejarlo así", "Reducirlo a una zona y unos pocos canales", "Agregar más ciudades", "Quitar la fecha de término"], answer: 1, why: "Un alcance más pequeño se puede terminar y hacer bien." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Etapa 2: Validar con personas reales",
          minutes: 5,
          goal: "Comprobar los supuestos de tu proyecto hablando con al menos tres personas reales.",
          text: [
            "Todo proyecto se basa en supuestos: los clientes quieren esto, van a pagar tanto, esta tarea hace perder tantas horas, la gente nos encuentra en esta plataforma. Validar significa comprobarlos con personas reales antes de construir.",
            "Pregúntale a la IA: \"Haz una lista de los cinco supuestos más grandes de este proyecto y escribe tres preguntas neutrales de entrevista para cada uno.\" Neutral significa que no guías a la persona: pregunta \"¿Cómo resuelves esto hoy?\" y no \"¿Verdad que te encantaría mi idea?\"",
            "Habla con al menos tres personas: posibles clientes, el dueño del negocio o el personal que hace el trabajo. Escribe sus palabras exactas. Luego pídele a la IA que te ayude a agrupar lo que escuchaste y anota qué supuestos se sostuvieron y cuáles no."
          ],
          steps: ["Pídele a la IA que haga una lista de los cinco supuestos más grandes de tu proyecto.", "Escribe preguntas neutrales de entrevista.", "Habla con al menos tres personas reales.", "Anota sus palabras exactas.", "Marca cada supuesto: confirmado, equivocado o dudoso, y actualiza tu alcance."],
          words: [["Supuesto", "algo que crees que es cierto pero no has comprobado."], ["Validación", "comprobar los supuestos con evidencia real antes de construir."], ["Pregunta neutral", "una pregunta que no empuja a la persona hacia una respuesta."]],
          slides: [
            { title: "Todo proyecto tiene supuestos", bullets: ["Los clientes lo quieren", "Van a pagar tanto", "Esta tarea hace perder tantas horas"] },
            { title: "Haz preguntas neutrales", bullets: ["\"¿Cómo resuelves esto hoy?\"", "No \"¿Verdad que te encantaría mi idea?\""] },
            { title: "Habla con tres o más personas", bullets: ["Clientes, dueño o personal", "Escribe sus palabras exactas", "¿Confirmado, equivocado o dudoso?"] }
          ],
          tryIt: "Haz con ayuda de la IA la lista de tus cinco supuestos, entrevista a por lo menos tres personas con preguntas neutrales y marca cada supuesto como confirmado, equivocado o dudoso.",
          youCanNow: "validar un proyecto de negocio con personas reales antes de construirlo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un supuesto en un proyecto de negocio?", options: ["Un hecho comprobado", "Una regla legal", "Algo que crees pero no has comprobado", "El nombre de un cliente"], answer: 2, why: "La validación comprueba los supuestos con personas reales." },
            { objective: "O2", q: "Una entrevista muestra que a los clientes no les importa la función alrededor de la cual planeaste todo. ¿Qué haces?", options: ["Ignorarlo", "Entrevistar solo a personas que estén de acuerdo", "Construirla de todos modos", "Actualizar tu alcance o tu diseño"], answer: 3, why: "Los supuestos equivocados deben cambiar el plan antes de construir." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Etapa 3: Diseñar la solución",
          minutes: 6,
          goal: "Escribir el esquema de tu proyecto con la estructura correcta para tu opción.",
          text: [
            "Cada proyecto tiene una estructura. Plan de negocio: la SBA (la agencia federal de Estados Unidos que apoya a las pequeñas empresas) enumera las secciones de un plan tradicional (resumen ejecutivo, descripción de la empresa, análisis de mercado, organización y administración, línea de servicios o productos, marketing y ventas, solicitud de financiamiento, proyecciones financieras) y la opción de un plan breve. Negocio de servicios: el problema, el entregable, los pasos (de IA y humanos), las instrucciones para la IA, el precio. Sistema de automatización: el mapa del flujo de trabajo, el disparador y las acciones, el paso de IA, las barreras de aprobación, las pruebas y el monitoreo.",
            "Estrategia de marketing: cliente ideal, oferta, uno o dos canales, un calendario de contenido, un plan de correos y los números que vas a seguir. Ecosistema de productividad: el plan de la semana, el kit de herramientas (una herramienta por tarea), plantillas, SOP (procedimientos escritos), automatizaciones y un registro de tiempo.",
            "Pídele a la IA que convierta tu alcance y tus notas de validación en un esquema con estas secciones. Edítalo para que cada sección refleje lo que te dijeron las personas reales."
          ],
          steps: ["Encuentra la estructura para tu tipo de proyecto.", "Dale a la IA tu alcance y tus notas de validación.", "Pide un esquema con esas secciones y una línea sobre lo que va en cada una.", "Edita el esquema con lo que te dijeron las personas reales.", "Marca qué secciones puede redactar la IA y cuáles necesitan tus propios datos."],
          words: [["Esquema", "la lista de secciones que tendrá un proyecto, antes de escribirlo completo."], ["Plan breve", "un plan de negocio corto, enfocado en las partes clave, como alternativa a un plan tradicional largo."]],
          slides: [
            { title: "Plan de negocio (secciones de la SBA)", bullets: ["Resumen ejecutivo, empresa, análisis de mercado", "Organización, producto o servicio, marketing", "Solicitud de financiamiento, proyecciones financieras"] },
            { title: "Servicio o automatización", bullets: ["Servicio: problema, entregable, pasos, instrucciones, precio", "Automatización: mapa, disparador, acciones, barreras, pruebas"] },
            { title: "Marketing o productividad", bullets: ["Marketing: cliente, oferta, canales, calendario, correo", "Productividad: plan semanal, herramientas, plantillas, SOP"] },
            { title: "Arma el esquema", bullets: ["La IA lo redacta con tu alcance y tus notas", "Tú lo editas con lo que dijo la gente real"] }
          ],
          sources: [{ name: "SBA: Escribe tu plan de negocio (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Pídele a la IA que convierta tu alcance y tus notas de validación en un esquema con las secciones correctas para tu proyecto. Edítalo y marca qué secciones necesitan tus propios datos.",
          youCanNow: "diseñar la estructura completa de tu proyecto final basándote en evidencia real.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde puedes encontrar las secciones comunes de un plan de negocio?", options: ["En la página de planes de negocio de la SBA", "En una publicación de redes sociales", "En una suposición cualquiera de la IA", "En los archivos privados de la competencia"], answer: 0, why: "La SBA enumera las secciones de un plan de negocio tradicional." },
            { objective: "O3", q: "El esquema que hizo la IA para tu proyecto de automatización deja fuera los límites. ¿Qué haces?", options: ["Aceptar el esquema", "Agregar una sección de límites", "Quitar también las pruebas", "Cambiar a un proyecto de marketing"], answer: 1, why: "Un proyecto de automatización necesita el flujo de trabajo, el disparador y las acciones, el paso de IA, los límites y las pruebas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planea tu proyecto",
        questions: [
          { objective: "O1", q: "Una dueña de negocio dice: \"Paso 10 horas a la semana copiando pedidos de una aplicación a otra.\" ¿Qué proyecto final encaja mejor?", options: ["Estrategia de marketing con IA", "Sistema de automatización con IA", "Plan de negocio para una startup con IA", "Ninguno"], answer: 1, why: "Copiar datos una y otra vez es justo lo que resuelve una automatización." },
          { objective: "O1", q: "¿Cuál es un proyecto bien delimitado?", options: ["Usar todas las herramientas de IA", "Marketing para todo, para siempre", "Arreglar todo el negocio", "Una estrategia de marketing de 90 días para un barrio y dos canales"], answer: 3, why: "Es pequeño y lo bastante claro para terminarlo." },
          { objective: "O2", q: "¿Cuál es una pregunta neutral de entrevista?", options: ["\"¿Cómo resuelves esto hoy?\"", "\"¿Verdad que te encantaría mi idea?\"", "\"Pagarías 100 dólares, ¿no?\"", "\"Todo el mundo necesita esto, ¿sí?\""], answer: 0, why: "No empuja a la persona hacia una respuesta." },
          { objective: "O2", q: "¿Con cuántas personas reales deberías hablar como mínimo?", options: ["Un chat con la IA", "Ninguna", "Tres", "Solo contigo mismo"], answer: 2, why: "Tres conversaciones es el mínimo para este proyecto final." },
          { objective: "O3", q: "¿Cuál es una de las secciones del plan de negocio tradicional según la SBA?", options: ["Contraseñas de redes sociales", "Aplicaciones favoritas", "Análisis de mercado", "Decoración de la oficina"], answer: 2, why: "El análisis de mercado es una de las secciones que enumera la SBA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construye, revisa y presenta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Etapa 4: Construirlo con IA",
          minutes: 6,
          goal: "Construir todo el proyecto sección por sección, con la IA redactando y tú revisando.",
          text: [
            "Trabaja una sección a la vez. Para cada una, dale a la IA el nombre de la sección, tus datos reales y el formato que quieres. Ejemplo: \"Escribe la sección de análisis de mercado del plan de negocio de mi lavado de autos a domicilio. Esto es lo que me dijeron tres clientes y los datos locales que encontré. Menos de 300 palabras, lenguaje sencillo.\"",
            "Para los proyectos prácticos, construye lo real: configura la automatización y pruébala, crea las plantillas y los SOP, haz las primeras publicaciones y el correo, o escribe el paquete de servicio y ponlo en práctica una vez.",
            "Lleva un registro breve de construcción: qué hiciste, con qué herramienta, qué cambiaste después de revisar. Nunca pongas datos privados de clientes o de dinero en herramientas de IA; usa marcadores y complétalos tú."
          ],
          steps: ["Elige la siguiente sección de tu esquema.", "Dale a la IA el nombre de la sección, tus datos y el formato.", "Revisa el borrador: datos, números, tono, afirmaciones.", "Construye de verdad las partes prácticas y pruébalas.", "Escribe una línea en tu registro de construcción y pasa a la siguiente sección."],
          words: [["Registro de construcción", "un registro simple de lo que hiciste, con qué herramienta y qué cambiaste."], ["Marcador", "un texto temporal como [nombre del cliente] que tú reemplazas fuera de la herramienta de IA."]],
          slides: [
            { title: "Una sección a la vez", bullets: ["Nombre de la sección + tus datos + formato", "La IA redacta; tú revisas"] },
            { title: "Construye lo real", bullets: ["Configura y prueba la automatización", "Crea plantillas, SOP, publicaciones", "Pon en práctica el servicio una vez"] },
            { title: "Lleva un registro de construcción", bullets: ["Qué, con qué herramienta, qué cambiaste", "Nada de datos privados en herramientas de IA"] }
          ],
          tryIt: "Construye al menos la mitad de las secciones de tu proyecto (o la pieza central que funciona) con la IA redactando y tú revisando. Lleva tu registro de construcción.",
          youCanNow: "construir un proyecto de negocio real con la IA como asistente y tú como revisor.",
          quickCheck: [
            { objective: "O4", q: "¿Qué anota un registro de construcción?", options: ["Tus contraseñas", "Solo el resultado final", "Lo que hiciste, con qué herramienta y qué cambiaste", "Los teléfonos de los clientes"], answer: 2, why: "Un registro de construcción muestra cómo se construyó y se revisó el proyecto." },
            { objective: "O4", q: "Necesitas que la IA haga el borrador de un correo a un cliente para tu proyecto. ¿Cómo incluyes al cliente?", options: ["Pegar su nombre completo y su dirección", "Pegar su número de tarjeta", "No hacer el correo", "Usar un marcador como [nombre del cliente]"], answer: 3, why: "Los marcadores mantienen los datos privados fuera de la IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Etapa 5: Revisar números y riesgos",
          minutes: 6,
          goal: "Revisar los números de tu proyecto y hacer una lista de riesgos.",
          text: [
            "Todo proyecto necesita números honestos: costos (herramientas, tiempo, materiales), precios o ahorros, y cuándo se recupera la inversión. Ponlos en una hoja de cálculo y revisa tú mismo cada fórmula. La IA puede sugerir qué incluir, pero tú revisas los cálculos.",
            "Luego haz una lista de riesgos con lo que aprendiste: ¿Todas las afirmaciones de marketing y de IA son verdaderas y se pueden demostrar (reglas de publicidad de la FTC, la Comisión Federal de Comercio de Estados Unidos)? ¿Los datos de clientes se mantienen fuera de las herramientas de IA y están protegidos? ¿Una persona revisa todo lo que ven los clientes? ¿Se avisa cuando una promoción es pagada? ¿Necesitas una licencia, un permiso o un registro de impuestos donde trabajas?",
            "Para la parte oficial, usa sitios oficiales. Por ejemplo, el IRS (la agencia de impuestos de Estados Unidos) dice que nunca tienes que pagar por un Número de Identificación del Empleador (EIN) y advierte sobre sitios que cobran por él. Las personas que trabajan por cuenta propia por lo general pagan el impuesto sobre el trabajo por cuenta propia y muchas veces impuestos estimados cada trimestre; consulta irs.gov y habla con un contador. Pregúntale a un abogado sobre cualquier tema legal de tu plan."
          ],
          steps: ["Haz una lista de todos los costos, precios o ahorros en una hoja de cálculo.", "Calcula cuándo el proyecto se paga solo.", "Revisa tú mismo cada fórmula.", "Haz una lista de riesgos: afirmaciones, datos, revisiones humanas, avisos, licencias e impuestos.", "Marca lo que debes confirmar con un sitio oficial, un contador o un abogado."],
          words: [["Recuperación de la inversión", "cuánto tiempo pasa hasta que lo que ganas o ahorras cubre lo que gastaste."], ["EIN", "Número de Identificación del Empleador: un número federal de impuestos gratuito para un negocio, que da el IRS."], ["Impuesto sobre el trabajo por cuenta propia", "el impuesto de Seguro Social y Medicare que pagan las personas que trabajan por su cuenta."]],
          slides: [
            { title: "Números honestos", bullets: ["Costos: herramientas, tiempo, materiales", "Precios o ahorros", "Cuándo se recupera; revisa cada fórmula"] },
            { title: "Lista de riesgos", bullets: ["Afirmaciones verdaderas y demostrables", "Datos de clientes protegidos", "Revisiones humanas; avisos"] },
            { title: "Fuentes oficiales", bullets: ["IRS: el EIN es gratis; cuidado con sitios que cobran", "Impuestos por cuenta propia y estimados: irs.gov", "Consulta a un contador o un abogado"] }
          ],
          sources: [{ name: "IRS: Obtén un Número de Identificación del Empleador (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "FTC: Conceptos básicos de publicidad y marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Arma tu hoja de números (costos, precios o ahorros, recuperación de la inversión), revisa cada fórmula y escribe tu lista de riesgos con lo que debes confirmar en fuentes oficiales.",
          youCanNow: "revisar los números y los riesgos de un proyecto, y saber dónde confirmar los temas de impuestos y leyes.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es la recuperación de la inversión?", options: ["Cuánto tiempo pasa hasta que las ganancias o los ahorros cubren el costo", "Un reembolso a un cliente", "Un formulario de impuestos", "Un cargo por pago tardío"], answer: 0, why: "La recuperación de la inversión muestra cuánto tarda el proyecto en pagarse solo." },
            { objective: "O5", q: "Tu proyecto necesita una licencia de negocio. ¿Qué va en tu lista de riesgos?", options: ["Nada; la IA dijo que está bien", "Confirmar las reglas de la licencia con la agencia oficial", "No sacar la licencia", "Preguntarle a un amigo en internet"], answer: 1, why: "Los puntos de licencias y legales se confirman con fuentes oficiales o con un profesional." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Etapa 6: Probar, mejorar y presentar",
          minutes: 6,
          goal: "Probar tu proyecto terminado con personas reales, mejorarlo y presentarlo en tres minutos.",
          text: [
            "Muestra el proyecto terminado a por lo menos tres personas: el dueño, un posible cliente o alguien que lo usaría. Pregunta: \"¿Qué está claro? ¿Qué es confuso? ¿Qué cambiarías?\" En los proyectos prácticos, pídeles que lo prueben.",
            "Haz los cambios más importantes y anótalos. Luego pídele a la IA que te ayude a escribir una presentación de tres minutos: el problema, quién lo tiene, tu solución, la prueba (lo que te dijo la gente y los resultados de las pruebas), los números y el siguiente paso.",
            "Practícala en voz alta. Pídele a la IA que haga el papel de un oyente exigente (un inversionista, un dueño de negocio, un cliente) y te haga preguntas difíciles. Luego junta todo como tu paquete final del proyecto."
          ],
          steps: ["Muestra o prueba el proyecto con al menos tres personas.", "Haz los cambios principales y anótalos.", "Pídele a la IA un esquema de presentación de tres minutos.", "Practica en voz alta y mide el tiempo.", "Ensaya preguntas difíciles con la IA.", "Arma el paquete final."],
          words: [["Pitch", "una charla corta que explica tu proyecto y por qué importa."], ["Prueba", "evidencia de que tu proyecto funciona, como resultados de pruebas y lo que dijo la gente."]],
          slides: [
            { title: "Prueba el proyecto terminado", bullets: ["Al menos tres personas", "¿Qué está claro, qué confunde, qué cambiar?", "Que prueben las partes prácticas"] },
            { title: "Un pitch de tres minutos", bullets: ["El problema y quién lo tiene", "Tu solución y la prueba", "Los números y el siguiente paso"] },
            { title: "Practica", bullets: ["En voz alta, midiendo el tiempo", "La IA hace de oyente exigente", "Luego arma el paquete final"] }
          ],
          tryIt: "Tarea final: prueba tu proyecto con tres personas, haz los cambios principales, practica tu presentación de tres minutos y arma tu paquete del proyecto final: resumen, proyecto completo, notas de validación, números y lista de riesgos, resultados de pruebas y presentación.",
          youCanNow: "construir, revisar, probar y presentar un proyecto de negocio con IA completo, de principio a fin.",
          quickCheck: [
            { objective: "O6", q: "¿Qué son las pruebas en una presentación de tres minutos?", options: ["Tu opinión", "Una larga lista de funciones", "Evidencia como los resultados de las pruebas y lo que dijo la gente", "Un chiste"], answer: 2, why: "Las pruebas muestran que el proyecto funciona para personas reales." },
            { objective: "O6", q: "Quienes probaron tu proyecto encuentran confusas dos secciones. ¿Qué haces antes de presentar?", options: ["Presentarlo así", "Quitar las notas de quienes lo probaron", "Agregar más secciones", "Hacer los cambios más importantes y volver a probar las partes confusas"], answer: 3, why: "Las pruebas sirven para encontrar y corregir problemas antes de presentar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construye, revisa y presenta",
        questions: [
          { objective: "O4", q: "Al construir con IA, ¿qué deberías darle para cada sección?", options: ["El nombre de la sección, tus datos reales y el formato", "La contraseña de tu banco", "Nada; que adivine", "El plan de un competidor para copiarlo"], answer: 0, why: "Datos reales y un formato claro dan un borrador útil." },
          { objective: "O5", q: "¿Quién revisa las fórmulas de tu hoja de números?", options: ["Un sitio web cualquiera", "Solo la IA", "Nadie", "Tú"], answer: 3, why: "Los cálculos de la IA pueden estar mal." },
          { objective: "O5", q: "Un sitio web te ofrece conseguir un EIN por 250 dólares. ¿Qué dice el IRS?", options: ["Ese es el precio oficial", "Nunca tienes que pagar por un EIN; cuidado con los sitios que cobran", "Los EIN cuestan 1,000 dólares", "Solo los EIN pagados son válidos"], answer: 1, why: "El IRS da los EIN gratis y advierte sobre los sitios que cobran." },
          { objective: "O6", q: "¿Qué va en un pitch de tres minutos?", options: ["El problema, tu solución, la prueba y el siguiente paso", "Cada detalle de cada hoja de cálculo", "Tus contraseñas", "Solo chistes"], answer: 0, why: "Un pitch es corto y se enfoca en lo importante." },
          { objective: "O6", q: "¿Cómo puede ayudarte la IA a practicar tu presentación?", options: ["Escribiendo reseñas falsas", "Dando la charla por ti", "Haciendo de oyente exigente que hace preguntas difíciles", "Saltándote la práctica"], answer: 2, why: "Ensayar con preguntas te da confianza para las preguntas reales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Proyecto final: crea tu plan de negocio, servicio, automatización, estrategia de marketing o sistema de productividad con IA",
    questions: [
      { objective: "O1", q: "¿Cuántos proyectos finales eliges?", options: ["Los cinco", "Uno", "Tres", "Ninguno"], answer: 1, why: "Eliges UN proyecto y lo terminas." },
      { objective: "O1", q: "Un dueño agobiado que necesita una mejor semana debería elegir:", options: ["Un logotipo nuevo", "Un plan de negocio para una startup con IA", "Nada", "Un ecosistema de productividad con IA"], answer: 3, why: "Un ecosistema de productividad organiza la semana del dueño." },
      { objective: "O1", q: "Una idea nueva que necesita financiamiento encaja mejor con:", options: ["Una plantilla de quejas", "Un sistema de automatización", "Solo un calendario de contenido", "Un plan de negocio para una startup con IA"], answer: 3, why: "Un plan de negocio explica la idea y el dinero que se necesita." },
      { objective: "O1", q: "El alcance es:", options: ["El logotipo del proyecto", "Lo que entra y lo que queda fuera del proyecto", "El precio", "El software"], answer: 1, why: "El alcance fija los límites para que puedas terminar." },
      { objective: "O2", q: "Un supuesto es:", options: ["Un formulario de impuestos", "Un hecho comprobado", "Algo que crees pero no has comprobado", "Un tipo de IA"], answer: 2, why: "La validación comprueba los supuestos." },
      { objective: "O2", q: "Durante las entrevistas deberías anotar:", options: ["Las palabras exactas de la gente", "Solo lo que esperabas oír", "Sus números de tarjeta", "Nada"], answer: 0, why: "Las palabras exactas te mantienen honesto." },
      { objective: "O2", q: "Si un supuesto resulta equivocado, deberías:", options: ["Esconderlo", "Ignorarlo", "Actualizar tu alcance o tu diseño", "Preguntar a otras personas hasta que alguien esté de acuerdo"], answer: 2, why: "La validación solo sirve si actúas según lo que aprendes." },
      { objective: "O3", q: "¿Dónde puedes encontrar las secciones estándar de un plan de negocio?", options: ["En la página de planes de negocio de la SBA", "En una publicación cualquiera de redes sociales", "Con un competidor", "En tu bandeja de correo"], answer: 0, why: "La SBA enumera las secciones del plan tradicional y del plan breve." },
      { objective: "O3", q: "Un proyecto de sistema de automatización incluye:", options: ["Solo un logotipo", "Mapa del flujo, disparador y acciones, paso de IA, barreras, pruebas", "Solo un precio", "Solo un pitch"], answer: 1, why: "Estas partes hacen una automatización que funciona y es segura." },
      { objective: "O3", q: "Un proyecto de estrategia de marketing incluye:", options: ["Solo un estado de cuenta del banco", "Solo un SOP", "Solo un registro de tiempo", "Cliente ideal, oferta, canales, calendario y plan de correos"], answer: 3, why: "Estas son las partes de una estrategia de marketing." },
      { objective: "O4", q: "Al construir, la mejor forma es:", options: ["Una sección a la vez: la IA redacta y tú revisas", "Todo de una vez y sin revisar", "Copiar otro proyecto", "Dejar que la IA lo publique"], answer: 0, why: "Pasos pequeños con revisiones mantienen alta la calidad." },
      { objective: "O4", q: "Un registro de construcción anota:", options: ["Nada útil", "Tus contraseñas", "Las direcciones de tus clientes", "Qué hiciste, con qué herramienta y qué cambiaste"], answer: 3, why: "Muestra tu proceso y te ayuda a mejorar." },
      { objective: "O4", q: "¿Cómo deberías manejar los nombres de clientes en las instrucciones para la IA?", options: ["Agregar números de tarjeta", "Escribirlos con números de teléfono", "Usar marcadores como [nombre del cliente]", "Publicarlos"], answer: 2, why: "Los marcadores mantienen fuera los datos privados." },
      { objective: "O5", q: "La recuperación de la inversión es:", options: ["Un reembolso a un cliente", "Cuánto tiempo pasa hasta que las ganancias o ahorros cubren el costo", "Una tarifa", "Un préstamo"], answer: 1, why: "Muestra cuándo el proyecto se paga solo." },
      { objective: "O5", q: "¿Qué va en tu lista de riesgos?", options: ["¿Mi logotipo es redondo?", "¿Cuál es mi color favorito?", "¿Cuántas aplicaciones tengo?", "¿Todas las afirmaciones de marketing son verdaderas y demostrables?"], answer: 3, why: "Las reglas de la FTC exigen afirmaciones verdaderas." },
      { objective: "O5", q: "Las personas que trabajan por cuenta propia por lo general pagan:", options: ["Solo impuesto sobre las ventas", "Ningún impuesto", "El impuesto sobre el trabajo por cuenta propia además del impuesto sobre la renta", "Solo impuesto a la propiedad"], answer: 2, why: "Así lo dice el IRS en su centro de impuestos para trabajadores por cuenta propia." },
      { objective: "O5", q: "Para las preguntas legales de tu proyecto, deberías:", options: ["Hablar con un abogado", "Confiar en cualquier respuesta de la IA", "Saltarlas", "Copiar a un competidor"], answer: 0, why: "Un abogado puede aconsejarte sobre tu caso." },
      { objective: "O6", q: "Al probar el proyecto terminado, pregúntale a la gente:", options: ["¿Me vas a dar cinco estrellas?", "¿Qué está claro, qué es confuso, qué cambiarías?", "¿Cuál es tu contraseña?", "¿Me das tu número de tarjeta?"], answer: 1, why: "Estas preguntas encuentran mejoras reales." },
      { objective: "O6", q: "La prueba en tu pitch significa:", options: ["Una promesa", "Evidencia, como resultados de pruebas y lo que dijo la gente", "Un logotipo", "Una lista larga de funciones"], answer: 1, why: "La evidencia hace creíble un pitch." },
      { objective: "O6", q: "El paquete final del proyecto incluye:", options: ["Resumen, proyecto completo, notas de validación, números y riesgos, resultados de pruebas, presentación", "Solo una portada", "Solo el historial del chat con la IA", "Solo un logotipo"], answer: 0, why: "Juntos muestran un proyecto completo y revisado." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      5,
      7,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Resumen y alcance",
        objective: "O1",
        notYet: "Falta el negocio, el cliente, el problema o la solución, o el alcance es demasiado grande para terminarlo.",
        meets: "Un resumen de una página con el negocio, el cliente, el problema y la solución, y un alcance claro.",
        exceeds: "Explica por qué se eligió este tipo de proyecto para este negocio."
      },
      {
        name: "Validación",
        objective: "O2",
        notYet: "Menos de tres personas, o preguntas que empujan la respuesta.",
        meets: "Notas de tres o más personas con sus palabras exactas y cada supuesto marcado.",
        exceeds: "Muestra qué cambió en el proyecto por lo que dijo la gente."
      },
      {
        name: "Proyecto completo",
        objective: "O4",
        notYet: "Faltan secciones o queda texto de la IA sin revisar.",
        meets: "Todas las secciones del tipo de proyecto, construidas con IA y revisadas, con un registro de construcción.",
        exceeds: "El proyecto ya está en uso o listo para lanzarse."
      },
      {
        name: "Números y riesgos",
        objective: "O5",
        notYet: "Fórmulas sin revisar o sin lista de riesgos.",
        meets: "Hoja de números con fórmulas revisadas y la recuperación de la inversión, más una lista de riesgos.",
        exceeds: "Los puntos de impuestos y legales se confirmaron con fuentes oficiales o con un profesional."
      },
      {
        name: "Pruebas y presentación",
        objective: "O6",
        notYet: "No se probó, o la presentación se alarga o no tiene pruebas.",
        meets: "Probado con tres personas, cambios principales hechos y presentación de tres minutos con problema, solución, pruebas y siguiente paso.",
        exceeds: "Lo presentó en voz alta ante un público real y respondió preguntas difíciles."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el proyecto final y aprueban la tarea final (rúbrica)",
      "Proyectos lanzados o en uso en 60 días (encuesta de seguimiento)",
      "Participantes que presentan su proyecto a un socio, un prestamista, alguien que financia o un cliente",
      "Ingresos, tiempo ahorrado o clientes nuevos que los participantes relacionan con el proyecto"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con un asistente de IA gratuito, una hoja de cálculo y una herramienta de documentos",
      "Acceso a al menos tres personas reales para las entrevistas y las pruebas",
      "Los materiales de los cursos anteriores para emprendedores que correspondan al proyecto",
      "Unos 60 minutos de lecciones y comprobaciones, más varias horas de trabajo en el proyecto a lo largo de dos a cuatro semanas"
    ],
    facilitatorNotes: [
      "Haz una revisión corta después de cada etapa para que nadie se atrase en el trabajo del proyecto.",
      "Aprueba cada alcance antes de que los participantes empiecen a validar, e insiste en alcances más pequeños.",
      "Recuerda a los participantes que usen marcadores para los datos de clientes y que confirmen en fuentes oficiales los puntos de impuestos, licencias y legales.",
      "Termina con un día de demostración en el que cada participante dé su presentación de tres minutos.",
      "Califica el paquete del proyecto final con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};

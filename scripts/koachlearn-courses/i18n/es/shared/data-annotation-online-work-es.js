"use strict";

// Koach Learn course (Spanish translation of shared/data-annotation-online-work.js). See scripts/koachlearn-courses/README.md, "Translations".

const MINDRIFT = { name: "Mindrift (tareas de entrenamiento de IA; dice que las tareas de Toloka pasaron aquí y que unirse es gratis)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen de Appen (proyectos para colaboradores; dice que nunca te pide pagar para unirte)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (microtareas como datos de entrenamiento de IA, encuestas y grabaciones de voz)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Empleos en Sama (oficinas en Nairobi, Kenia, y en Gulu y Kampala, Uganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "Comisión Federal de Comercio de EE. UU. (FTC): Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "OIT: El papel de las plataformas digitales de trabajo en la transformación del mundo del trabajo", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Comisión de Protección de Datos de Nigeria (NDPC)", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work-es",
  lang: "es",
  translationOf: "data-annotation-online-work",
  category: "Workforce Development",
  name: "Etiquetado de datos para IA y microtrabajos en línea",
  skills: "Reconocer el trabajo de etiquetado de datos y las microtareas, Etiquetar datos siguiendo una guía, Aprobar pruebas de calificación y mantener alta la calidad, Comprobar que una plataforma es real y rechazar empleos falsos, Proteger los datos personales y los datos de las tareas, Calcular tu pago real por hora",
  outcome: "etiquetar datos para IA siguiendo una guía escrita, comprobar que una plataforma de trabajo en línea es real antes de unirte, proteger tus propios datos y los datos que ves, y calcular cuánto te paga de verdad el trabajo por hora.",
  about: [
    "Las herramientas de IA aprenden de ejemplos que prepara la gente: fotos con recuadros alrededor de los autos, oraciones marcadas como positivas o negativas, grabaciones transcritas y respuestas de IA ordenadas de la mejor a la peor. Este trabajo se llama anotación de datos o etiquetado de datos. Mucha gente lo hace en línea como pequeñas tareas pagadas, llamadas microtrabajos, desde Nairobi hasta Lagos, Acra, Dakar, Manila, Hyderabad, Bogotá, Ciudad de México, Casablanca, El Cairo y pueblos de todo EE. UU.",
    "Este curso es para jóvenes y adultos con un teléfono o una computadora que quieren probar este trabajo de forma segura. Vas a aprender los principales tipos de tareas, practicar el etiquetado con una guía escrita en papel, entender cómo funcionan las pruebas de calificación y las puntuaciones de calidad, comprobar que una plataforma es real, rechazar los muchos \"empleos de IA\" falsos que piden dinero, proteger los datos privados y calcular tu pago real por hora.",
    "Sé honesto contigo sobre el dinero. El pago es irregular: algunas semanas hay muchas tareas y otras muy pocas, y el tiempo que pasas en pruebas y buscando tareas muchas veces no se paga. Una plataforma real nunca te pide pagar para empezar. El curso no promete ingresos; te ayuda a decidir con los ojos abiertos.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\" que puedes hacer en papel o en un teléfono. Hay 2 preguntas rápidas después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu plan para empezar con el microtrabajo: (1) una práctica de 10 elementos que etiquetaste con tu propia guía de una página, con los elementos dudosos marcados; (2) dos plataformas que revisaste, con lo que encontraste en cada comprobación (sitio oficial, unirse gratis, acepta tu país, cómo se envía el pago); (3) tu lista de cinco señales de alerta de estafa; (4) tus tres reglas de seguridad de datos; y (5) un registro semanal de tiempo y pago con un plan de 4 semanas y fechas, que incluya cómo vas a calcular tu pago real por hora.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes y adultos en EE. UU. y en otros países (Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Filipinas, India, México, Colombia, Marruecos, Egipto): personas que terminaron la escuela, graduados, madres y padres en casa, personas que buscan un ingreso extra y quienes buscan empleo y ven una y otra vez anuncios de \"gana dinero con IA\". El curso está traducido a diez idiomas.",
    startingPoint: "Saben usar un teléfono inteligente, WhatsApp y las redes sociales; algunos tienen una laptop o usan un cibercafé o una biblioteca. La mayoría nunca ha etiquetado datos, leído una guía de tareas ni presentado una prueba de calificación. Muchos han visto ofertas de \"trabajo desde casa\" por tareas que pedían un depósito.",
    gap: "Los participantes necesitan saber cómo es el trabajo real de datos para IA, etiquetar con cuidado siguiendo una guía, juzgar si una plataforma es real, proteger los datos privados y calcular el pago real, para poder ganar donde existe trabajo real y no perder dinero ni documentos de identidad en empleos falsos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; traducido a diez idiomas",
      "Dispositivos: muchas veces solo un teléfono inteligente; los datos móviles son caros; la electricidad puede fallar",
      "Tiempo: lecciones de 4 a 6 minutos; práctica en papel",
      "Las plataformas, los países que aceptan, las formas de pago y el pago cambian a menudo: cada participante revisa las páginas propias de cada plataforma",
      "Nunca pagar para empezar; nunca compartir contraseñas, PIN, códigos de un solo uso ni documentos de identidad fuera de la verificación oficial de una plataforma"
    ],
    prerequisites: "Conocimientos básicos de teléfono o computadora y una dirección de correo electrónico. Leer con cuidado en el idioma de las tareas."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una lista de ocho tareas en línea", action: "identificar cuáles son de etiquetado de datos o microtareas y nombrar la habilidad que necesita cada una", standard: "acertando al menos 6 de 8" },
    { id: "O2", condition: "Con una guía de etiquetado corta y diez elementos de muestra", action: "etiquetar cada elemento siguiendo la guía y marcar los que no están claros", standard: "coincidiendo con la clave de respuestas en al menos 8 de 10" },
    { id: "O3", condition: "Antes de empezar una prueba de calificación", action: "enumerar los pasos que vas a seguir para leer la guía, practicar y revisar tu propio trabajo", standard: "de modo que puedas explicar cómo vas a mantener alta tu puntuación de calidad" },
    { id: "O4", condition: "Ante una plataforma o una oferta de empleo", action: "comprobar que es real y nombrar las señales de alerta de un empleo falso", standard: "antes de pagar nada o compartir ningún documento" },
    { id: "O5", condition: "Mientras haces tareas", action: "mantener en privado tus datos personales y los datos de las tareas", standard: "sin compartir contraseñas, códigos ni contenido de las tareas fuera de la plataforma" },
    { id: "O6", condition: "Después de una semana de práctica o de tareas reales", action: "registrar tu tiempo y tu pago y calcular tus ganancias reales por hora", standard: "contando el tiempo no pagado, como las pruebas y la búsqueda de tareas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Hacer bien el trabajo",
      lessons: [
        {
          title: "Qué son el etiquetado de datos y los microtrabajos",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar los principales tipos de tareas de datos para IA y la habilidad que necesita cada uno.",
          text: [
            "Las herramientas de IA aprenden de ejemplos. La gente prepara esos ejemplos agregando etiquetas: esta foto muestra una bicicleta, este mensaje es una queja, esta oración está en hausa, esta respuesta de la IA es mejor que aquella. Agregar etiquetas se llama anotación de datos o etiquetado de datos.",
            "Tipos de tareas comunes: etiquetado de imágenes (dibujar un recuadro alrededor de cada auto, o elegir una categoría), etiquetado de texto (¿esta reseña es positiva, negativa o neutral?), trabajo de audio (escribir lo que dice una persona, o grabar tu propia voz leyendo oraciones) y calificación de respuestas de IA (leer dos respuestas de una IA y elegir la mejor, con una razón). Algunos proyectos nuevos buscan expertos, como enfermeras, contadores o personas que hablan bien dos idiomas.",
            "Los microtrabajos son pequeñas tareas en línea que se pagan una por una y que muchas veces toman de segundos a minutos. Algunas personas las hacen desde casa en plataformas abiertas; otras son contratadas como empleados en una oficina, por ejemplo por empresas con equipos de datos en Nairobi o Kampala. En ambos casos, las habilidades clave son leer con cuidado, seguir las reglas al pie de la letra, mantener la atención y ser honesto."
          ],
          words: [["Anotación de datos (etiquetado de datos)", "agregar etiquetas a fotos, textos, audios o videos para que una herramienta de IA aprenda de ellos."], ["Microtrabajo (microtarea)", "una pequeña tarea en línea que se paga una por una."], ["Calificación de respuestas de IA", "leer respuestas de una herramienta de IA y juzgar cuál es mejor, siguiendo reglas."], ["Transcripción", "escribir exactamente lo que se dice en una grabación."]],
          slides: [
            { title: "La IA aprende de ejemplos etiquetados", bullets: ["Las personas agregan las etiquetas", "Esto se llama anotación o etiquetado de datos"] },
            { title: "Tipos de tareas comunes", bullets: ["Imágenes: recuadros o categorías", "Texto: positivo, negativo o neutral", "Audio: escribir lo que se dice, o grabar tu voz", "Respuestas de IA: elegir la mejor, con una razón"] },
            { title: "Dónde está el trabajo", bullets: ["Plataformas abiertas en línea, tarea por tarea", "Empleos de oficina en empresas de datos, como empleado", "Proyectos para expertos con una profesión o dos idiomas"] },
            { title: "Las habilidades que más importan", bullets: ["Leer con cuidado", "Seguir las reglas al pie de la letra", "Atención constante y honestidad"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Escribe en papel los cuatro tipos de tareas (imagen, texto, audio, calificación de IA). Al lado de cada uno, escribe una habilidad que ya tienes y que le sirve, por ejemplo \"Hablo inglés y twi\" junto a audio, o \"Me fijo en los detalles pequeños\" junto a imágenes.",
          youCanNow: "nombrar los principales tipos de tareas de datos para IA y relacionar cada uno con una habilidad que ya tienes.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estas es una tarea de anotación de datos?", options: ["Vender teléfonos en línea", "Repartir comida en moto", "Dibujar un recuadro alrededor de cada auto en una foto de la calle", "Reparar la pantalla de una laptop"], answer: 2, why: "Dibujar recuadros alrededor de objetos es etiquetado de imágenes, una de las principales tareas de anotación." },
            { objective: "O1", q: "Una tarea te muestra dos respuestas de una IA y te pregunta cuál es mejor y por qué. ¿Qué tipo de tarea es?", options: ["Calificación de respuestas de IA", "Transcripción", "Etiquetado de imágenes", "Captura de datos de facturas"], answer: 0, why: "Juzgar respuestas de una IA dando una razón es calificación de respuestas de IA." }
          ]
        },
        {
          title: "Etiquetar siguiendo la guía",
          objectives: ["O2"],
          minutes: 6,
          goal: "Etiquetar diez elementos de muestra siguiendo una guía escrita y marcar los que no están claros.",
          text: [
            "Cada proyecto tiene una guía: las reglas de cómo etiquetar. Dice qué significa cada etiqueta, da ejemplos y explica los casos difíciles. Tu opinión no importa tanto como la guía. Si la guía dice \"una persona en un póster cuenta como persona\", la etiquetas así, aunque te parezca raro.",
            "Lee toda la guía antes de tu primera tarea y luego tenla abierta. Busca los ejemplos y los casos límite: los elementos que podrían llevar dos etiquetas. Ahí ocurren la mayoría de los errores.",
            "Cuando un elemento de verdad no está claro, no adivines al azar. Usa la opción de saltar o marcar si existe, o haz lo que la guía diga para los elementos dudosos. Ser cuidadoso y constante vale más que ser rápido."
          ],
          steps: ["Lee toda la guía una vez, despacio.", "Escribe cada etiqueta y su significado con tus propias palabras.", "Estudia los ejemplos y los casos límite.", "Etiqueta cada elemento y revisa la guía cuando no estés seguro.", "Marca o salta los elementos que la guía no cubre, como ella te indique."],
          words: [["Guía", "las reglas escritas de un proyecto de etiquetado: qué significa cada etiqueta y cómo tratar los casos difíciles."], ["Caso límite", "un elemento que podría llevar más de una etiqueta, así que hay que revisar la regla."], ["Marcar", "señalar un elemento como dudoso o defectuoso para que un revisor lo vea."]],
          slides: [
            { title: "La guía es la que manda", bullets: ["Dice qué significa cada etiqueta", "Da ejemplos y casos difíciles", "Síguela, aunque tu opinión sea otra"] },
            { title: "Cómo etiquetar bien", bullets: ["Lee toda la guía primero", "Tenla abierta mientras trabajas", "Revísala cada vez que tengas dudas"] },
            { title: "Casos límite y elementos dudosos", bullets: ["La mayoría de los errores ocurren en los casos límite", "Marca o salta como diga la guía", "Cuidadoso y constante vale más que rápido"] }
          ],
          tryIt: "Practica en papel. Guía: etiqueta cada mensaje como POSITIVO (contento con el servicio), NEGATIVO (descontento) o NEUTRAL (una pregunta o un dato); si está contento y descontento a la vez, etiquétalo según la petición principal. Etiqueta estos diez: 1 \"¡Gracias, la entrega fue rápida!\" 2 \"¿Dónde queda su tienda en Kumasi?\" 3 \"El pan estaba viejo otra vez.\" 4 \"Buen precio, pero la caja llegó rota. Por favor, cámbienla.\" 5 \"¿Abren el domingo?\" 6 \"¡El mejor sastre de Dakar!\" 7 \"Esperé dos horas.\" 8 \"Llegó el pedido 2231.\" 9 \"Me encanta, pero necesito un reembolso por el segundo.\" 10 \"asdf\". Clave de respuestas: 1 POS, 2 NEU, 3 NEG, 4 NEG, 5 NEU, 6 POS, 7 NEG, 8 NEU, 9 NEG, 10 marcar (no es un mensaje real).",
          youCanNow: "leer una guía de etiquetado, aplicarla a cada elemento y marcar los elementos que no cubre.",
          quickCheck: [
            { objective: "O2", q: "La guía dice que una persona de caricatura cuenta como persona. Tú crees que no debería. ¿Qué haces?", options: ["Sigues tu propia opinión", "La etiquetas como persona, como dice la guía", "Saltas todas las caricaturas", "Le pides a un amigo por WhatsApp que decida"], answer: 1, why: "En el trabajo de etiquetado decide la guía, no la opinión personal." },
            { objective: "O2", q: "Un elemento no encaja en ninguna etiqueta de la guía. ¿Qué es lo mejor?", options: ["Elegir una etiqueta al azar para ahorrar tiempo", "Ponerle la etiqueta más común", "Salirte de la plataforma", "Marcarlo o saltarlo como te indica la guía"], answer: 3, why: "Marcar los elementos dudosos mantiene limpios los datos y protege tu puntuación de calidad." }
          ]
        },
        {
          title: "Pruebas de calificación y puntuaciones de calidad",
          objectives: ["O3"],
          minutes: 5,
          goal: "Enumerar los pasos que vas a seguir para aprobar una prueba de calificación y mantener alta tu puntuación de calidad.",
          text: [
            "La mayoría de los proyectos empiezan con una prueba de calificación: un grupo corto de tareas de práctica con respuestas conocidas. Por lo general necesitas un buen resultado para recibir trabajo pagado. En muchas plataformas el tiempo de esta prueba no se paga, así que prepárate bien y preséntala cuando estés descansado.",
            "Después de empezar, la plataforma sigue revisando tu trabajo. Algunos elementos tienen respuestas conocidas ocultas, y los revisores revisan muestras. Todo eso forma tu puntuación de calidad. Una puntuación alta puede traerte más tareas; una baja puede sacarte de un proyecto.",
            "Para mantener alta la calidad: lee los comentarios que recibas, vuelve a leer la guía cuando cambie, ve más despacio en los casos límite, toma descansos y nunca uses trucos ni copies respuestas. Algunos proyectos no permiten que herramientas de IA hagan la tarea por ti; sigue las reglas del proyecto."
          ],
          steps: ["Lee toda la guía antes de la prueba.", "Haz las tareas de práctica que te ofrezcan.", "Presenta la prueba descansado y con internet estable.", "Después de cada lote, lee los comentarios y anota tus errores.", "Vuelve a leer la guía cada vez que se actualice."],
          words: [["Prueba de calificación", "una prueba corta de tareas de práctica que debes aprobar antes de recibir trabajo pagado en un proyecto."], ["Puntuación de calidad", "una medida de qué tan seguido aciertan tus etiquetas, que se usa para decidir si recibes más tareas."], ["Pregunta de control (gold question)", "una tarea oculta con una respuesta conocida, que sirve para medir tu precisión."]],
          slides: [
            { title: "Antes del trabajo pagado: una prueba", bullets: ["Tareas de práctica con respuestas conocidas", "Muchas veces no se paga, así que prepárate primero", "Preséntala descansado y con internet estable"] },
            { title: "Tu trabajo siempre se revisa", bullets: ["Respuestas conocidas ocultas", "Los revisores revisan muestras", "Todo eso forma tu puntuación de calidad"] },
            { title: "Mantén alta tu puntuación", bullets: ["Lee los comentarios y anota tus errores", "Vuelve a leer la guía cuando cambie", "Ve más despacio en los casos límite; toma descansos", "Sigue las reglas del proyecto sobre herramientas de IA"] }
          ],
          tryIt: "Califica tus diez etiquetas de práctica de la lección anterior con la clave de respuestas. Escribe tu puntuación sobre 10, los elementos que fallaste y una regla que vas a revisar con más cuidado la próxima vez. Luego escribe tu plan de cinco pasos para tu primera prueba de calificación real.",
          youCanNow: "prepararte para una prueba de calificación, revisar tu propio trabajo con una clave de respuestas y explicar cómo vas a mantener alta tu puntuación de calidad.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una prueba de calificación en un proyecto de etiquetado?", options: ["Un grupo corto de tareas de práctica que debes aprobar antes del trabajo pagado", "Un examen escolar que pagas", "Una solicitud de préstamo", "Una entrevista por video con el jefe del cliente"], answer: 0, why: "Los proyectos usan una prueba de calificación para comprobar que sabes seguir la guía antes de darte tareas pagadas." },
            { objective: "O3", q: "Tu puntuación de calidad baja después de una actualización de la guía. ¿Qué debes hacer primero?", options: ["Trabajar más rápido para compensar", "Abrir una segunda cuenta", "Volver a leer la guía actualizada y tus comentarios", "Ignorarlo; las puntuaciones no importan"], answer: 2, why: "Si la puntuación baja después de una actualización, casi siempre cambió una regla; volver a leerla junto con los comentarios corrige la causa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Hacer bien el trabajo",
        questions: [
          { objective: "O1", q: "Escribir exactamente lo que dice una persona en una grabación se llama:", options: ["Etiquetado de imágenes", "Calificación de respuestas de IA", "Contabilidad", "Transcripción"], answer: 3, why: "Transcripción significa escribir exactamente lo que se dice." },
          { objective: "O1", q: "¿Qué habilidad importa más en el trabajo de etiquetado?", options: ["Escribir rápido con muchos errores", "Leer con cuidado y seguir las reglas al pie de la letra", "Tener una computadora cara", "Saber programar"], answer: 1, why: "El etiquetado depende de leer las reglas con cuidado y aplicarlas igual todas las veces." },
          { objective: "O2", q: "Guía: etiqueta un mensaje como NEGATIVO si la persona está descontenta. \"La comida llegó fría y tarde.\" ¿Qué etiqueta va?", options: ["NEGATIVO", "POSITIVO", "NEUTRAL", "Marcarlo"], answer: 0, why: "La persona está descontenta con la comida, así que la guía dice NEGATIVO." },
          { objective: "O2", q: "¿Dónde ocurren la mayoría de los errores de etiquetado?", options: ["Solo en el primer elemento", "En los elementos con ejemplos claros", "En los casos límite que podrían llevar dos etiquetas", "En los elementos que marcas"], answer: 2, why: "Los casos límite pueden llevar más de una etiqueta, así que hay que revisar las reglas con cuidado." },
          { objective: "O3", q: "¿Qué hábito te ayuda a mantener alta tu puntuación de calidad?", options: ["Copiar respuestas de un chat de grupo", "Leer los comentarios después de cada lote y anotar tus errores", "Trabajar diez horas sin descansos", "Adivinar rápido en los elementos difíciles"], answer: 1, why: "Los comentarios muestran exactamente qué reglas se te escapan, para que puedas corregirlas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabajar seguro y ganar con honestidad",
      lessons: [
        {
          title: "Comprobar que una plataforma es real y rechazar empleos falsos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Comprobar si una plataforma o una oferta de empleo es real y nombrar las señales de alerta de una falsa.",
          text: [
            "Las plataformas reales existen. Algunos ejemplos que dicen en sus propios sitios que unirse es gratis son CrowdGen de Appen, Mindrift (adonde pasaron las tareas de Toloka) y Clickworker. Las plataformas cambian, cierran y aceptan países distintos, así que revisa siempre el sitio web de la propia plataforma para ver si acepta tu país, qué trabajo ofrece y cómo envía el pago.",
            "Los \"empleos de IA\" falsos están por todas partes: en WhatsApp, Telegram, TikTok y Facebook. La señal más grande: te piden pagar. Un empleo real nunca te pide pagar una cuota para unirte, para desbloquear tareas, por capacitación, por un kit de inicio ni para retirar tus ganancias. La Comisión Federal de Comercio de EE. UU. (FTC, la agencia que protege a los consumidores) dice que los empleadores honestos no te cobran por darte un empleo.",
            "Otras señales de alerta: un pago que suena demasiado bueno para un trabajo fácil; un reclutador que solo habla por WhatsApp o Telegram; tareas como dar \"me gusta\" a videos o calificar productos en las que debes depositar dinero (muchas veces criptomonedas) para seguir; que te paguen y luego te pidan devolver una parte; que te pidan tu identificación, el PIN de tu banco o un código de un solo uso en un chat; y la presión para decidir hoy mismo."
          ],
          steps: ["Busca tú mismo el sitio web oficial de la plataforma; no uses el enlace del mensaje.", "Comprueba que unirse es gratis y lee sus páginas sobre el pago y la forma de pago.", "Comprueba que acepta trabajadores de tu país.", "Busca el nombre de la plataforma junto con la palabra \"estafa\" y lee lo que cuentan otras personas.", "Rechaza cualquier oferta que te pida pagar, depositar o devolver dinero."],
          words: [["Estafa de tareas", "un empleo falso en el que haces tareas sencillas, ves ganancias falsas y te dicen que deposites dinero para seguir o para retirar."], ["Reclutador", "una persona que busca trabajadores para una empresa. Los reales no te cobran."], ["Sitio web oficial", "el sitio propio de la plataforma, que encuentras tú mismo, no por un enlace que alguien te manda."]],
          slides: [
            { title: "Plataformas reales: revísalas tú mismo", bullets: ["Encuentra el sitio web oficial por tu cuenta", "Unirse debe ser gratis", "Revisa tu país, el trabajo y cómo se envía el pago"] },
            { title: "La señal de alerta número uno", bullets: ["Te piden pagar", "Para unirte, desbloquear tareas, capacitarte o retirar", "Los empleos reales nunca te cobran por trabajar"] },
            { title: "Más señales de alerta", bullets: ["Demasiado pago por un trabajo fácil", "Reclutadores que solo hablan por WhatsApp o Telegram", "Depósitos para seguir, o devolver dinero", "Te piden tu identificación, PIN o código en un chat"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Elige dos plataformas (de esta lección, o una que use un amigo). Para cada una, escribe: el sitio web oficial que encontraste tú mismo, si unirse es gratis, si acepta tu país, cómo se envía el pago y lo que encontraste al buscar su nombre con \"estafa\". Luego escribe tu lista de cinco señales de alerta de estafa.",
          youCanNow: "revisar una plataforma en su propio sitio web y rechazar un empleo falso nombrando sus señales de alerta.",
          quickCheck: [
            { objective: "O4", q: "Un mensaje de WhatsApp ofrece \"trabajo de calificar IA\" pero pide una cuota de activación de $20. ¿Qué es esto?", options: ["Un costo normal para empezar", "Una cuota de capacitación justa", "Una señal de alerta de estafa: los empleos reales nunca te cobran para empezar", "Un pago de impuestos"], answer: 2, why: "Pedirte pagar para empezar es la señal más clara de un empleo falso." },
            { objective: "O4", q: "¿Cómo debes abrir una plataforma de la que oíste hablar?", options: ["Haciendo clic en el enlace del mensaje del reclutador", "Buscando tú mismo su sitio web oficial y leyendo sus páginas", "Pidiéndole al reclutador que te mande capturas de pantalla", "Descargando un archivo que te manda el reclutador"], answer: 1, why: "Encontrar el sitio tú mismo te protege de páginas falsas que se parecen a la real y de archivos dañinos." }
          ]
        },
        {
          title: "Proteger tus datos y los datos de las tareas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escribir tres reglas que mantengan en privado tus datos personales y los datos de las tareas.",
          text: [
            "Protégete. Usa una contraseña segura y única, y activa la verificación en dos pasos. Nunca compartas un código de un solo uso, un PIN o una contraseña con nadie, ni siquiera con alguien que dice ser de la plataforma. Las plataformas reales pueden pedirte una identificación para verificarte, pero solo dentro de su sitio o aplicación oficial, nunca en un chat.",
            "Protege los datos que ves. Las tareas pueden mostrar fotos, voces o mensajes de personas, o datos médicos y de dinero. Muchos proyectos te hacen aceptar que las tareas son confidenciales. Nunca tomes capturas de pantalla de las tareas, no las publiques en grupos ni las pegues en otras herramientas de IA, a menos que el proyecto lo permita. Los países tienen leyes y autoridades de protección de datos, por ejemplo la Comisión de Protección de Datos de Nigeria.",
            "Protege tu cuenta. No compartas ni vendas tu cuenta, y no dejes que otra persona trabaje en ella. Las plataformas pueden cerrar cuentas por esto, y podrías perder ganancias que aún no te han pagado. Usa solo tu propia identidad real."
          ],
          steps: ["Usa una contraseña segura y única, y la verificación en dos pasos.", "Comparte tu identificación solo dentro del sitio o la aplicación oficial de la plataforma.", "Nunca compartas códigos, PIN ni contraseñas.", "Deja el contenido de las tareas dentro de la plataforma: sin capturas de pantalla ni compartir.", "Nunca compartas, alquiles ni vendas tu cuenta."],
          words: [["Verificación en dos pasos", "una segunda comprobación, como un código que llega a tu teléfono, cuando inicias sesión."], ["Confidencial", "privado: no debes compartirlo con nadie fuera del trabajo."], ["Código de un solo uso", "un código corto que te envían para confirmar que de verdad eres tú. Nunca lo compartas."]],
          slides: [
            { title: "Protégete", bullets: ["Contraseña segura y única, y verificación en dos pasos", "Nunca compartas códigos, PIN ni contraseñas", "Identificación solo dentro del sitio o la aplicación oficial"] },
            { title: "Protege los datos de las tareas", bullets: ["Las tareas pueden mostrar datos de personas reales", "Sin capturas de pantalla ni compartir en grupos", "No pegarlas en otras herramientas de IA, salvo si se permite"] },
            { title: "Protege tu cuenta", bullets: ["No la compartas, alquiles ni vendas", "Usa solo tu propia identidad", "Romper esta regla puede costarte ganancias no pagadas"] }
          ],
          sources: [NDPC],
          tryIt: "Escribe tus tres reglas de seguridad de datos con tus propias palabras: una para tu cuenta, una para tu identificación y tus códigos, y una para los datos de las tareas. Luego activa la verificación en dos pasos en tu cuenta de correo electrónico si todavía no está activada.",
          youCanNow: "mantener seguros tus datos personales y mantener en privado los datos de las tareas.",
          quickCheck: [
            { objective: "O5", q: "Alguien dice ser del soporte de la plataforma y te pide el código que acaba de llegar a tu teléfono. ¿Qué haces?", options: ["No lo compartes nunca y contactas al soporte desde el sitio oficial", "Lo mandas, porque el soporte lo necesita", "Mandas la mitad del código", "Lo publicas en un grupo para preguntar"], answer: 0, why: "Los códigos de un solo uso son solo para ti; si compartes uno, alguien puede quedarse con tu cuenta." },
            { objective: "O5", q: "Una tarea muestra la foto de una carta médica de un desconocido. ¿Qué es lo correcto?", options: ["Tomarle una captura de pantalla para practicar", "Compartirla en tu grupo de estudio", "Pegarla en una herramienta de IA gratis para leerla", "Etiquetarla dentro de la plataforma y no compartirla con nadie"], answer: 3, why: "Los datos de las tareas son confidenciales y se quedan dentro de la plataforma." }
          ]
        },
        {
          title: "Calcular tu pago real y hacer un plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Registrar tu tiempo y tu pago y calcular tus ganancias reales por hora.",
          text: [
            "El pago de los microtrabajos es irregular. Cambia según el proyecto, el país y la plataforma; algunas semanas hay muchas tareas y otras ninguna. El tiempo en pruebas, capacitación y buscando tareas muchas veces no se paga. La Organización Internacional del Trabajo (OIT) ha estudiado el trabajo en plataformas y pide que sea trabajo decente, con pago y condiciones justas.",
            "Así que mídelo. Lleva un registro de cada sesión: fecha, minutos trabajados (incluidas las pruebas y la espera), tareas hechas y dinero ganado. Pago real por hora = dinero total ganado ÷ horas totales, contando todo el tiempo. Ejemplo: ganaste 6 dólares en una semana y usaste 4 horas en total, así que tu pago real por hora es 1.50 dólares.",
            "Luego decide. Compáralo con otras opciones cerca de ti. Mucha gente toma el microtrabajo como un ingreso extra o como un primer paso hacia puestos mejor pagados, como revisor de calidad, proyectos para expertos o un empleo de tiempo completo en una empresa de datos. Guarda registros de lo que te pagan y pregunta a la autoridad tributaria de tu país si tienes que declararlo y cómo."
          ],
          steps: ["Registra cada sesión: fecha, minutos totales (con pruebas y espera), tareas y dinero.", "Suma el dinero de la semana y las horas de la semana.", "Divide el dinero entre las horas para obtener tu pago real por hora.", "Compáralo con tus otras opciones.", "Planea el próximo mes: horas, plataformas y una habilidad para desarrollar."],
          words: [["Pago real por hora", "todo el dinero que ganaste dividido entre todas las horas que usaste, incluido el tiempo no pagado."], ["Tiempo no pagado", "el tiempo en pruebas, capacitación y búsqueda de tareas que no te da dinero."], ["Registro", "una anotación escrita sencilla que llenas cada vez que trabajas."]],
          slides: [
            { title: "El pago es irregular", bullets: ["Cambia según el proyecto, el país y la plataforma", "Semanas con mucho trabajo y semanas vacías", "Las pruebas y la búsqueda muchas veces no se pagan"] },
            { title: "Mídelo con un registro", bullets: ["Fecha, minutos totales, tareas y dinero", "Cuenta también las pruebas y la espera"] },
            { title: "Tu pago real por hora", bullets: ["Dinero total ÷ horas totales", "Ejemplo: 6 dólares ÷ 4 horas = 1.50 dólares por hora"] },
            { title: "Decide y planea", bullets: ["Compáralo con otras opciones cerca de ti", "Planea horas, plataformas y una habilidad para desarrollar", "Guarda registros; pregunta a tu autoridad tributaria"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "Dibuja un registro con cinco columnas: fecha, minutos (todos), tareas, dinero y notas. Llena una fila con la práctica de hoy (dinero 0). Luego escribe un plan de 4 semanas con fechas: qué dos plataformas vas a revisar o a las que te vas a unir, cuántas horas por semana y qué día de cada semana vas a calcular tu pago real por hora.",
          youCanNow: "llevar un registro de tiempo y pago, calcular tu pago real por hora y planear tus próximas cuatro semanas.",
          quickCheck: [
            { objective: "O6", q: "Ganaste 10 dólares y usaste 5 horas en total, incluida 1 hora de prueba no pagada. ¿Cuál es tu pago real por hora?", options: ["10 dólares por hora", "2.50 dólares por hora", "2 dólares por hora", "5 dólares por hora"], answer: 2, why: "El pago real por hora cuenta todo el tiempo: 10 dólares ÷ 5 horas = 2 dólares por hora." },
            { objective: "O6", q: "¿Qué debe incluir tu registro de trabajo?", options: ["Solo el dinero que ganaste", "Solo los días en que te pagaron", "Tu contraseña, para que no la olvides", "La fecha, todos los minutos incluidas las pruebas y la espera, las tareas y el dinero"], answer: 3, why: "Contar cada minuto y cada pago muestra cuánto paga de verdad el trabajo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Trabajar seguro y ganar con honestidad",
        questions: [
          { objective: "O4", q: "Un \"trabajo de tareas\" en Telegram muestra que tus ganancias crecen, pero dice que debes depositar criptomonedas para retirar. ¿Qué es?", options: ["Un sistema normal de bonos", "Una estafa de tareas", "Una comisión bancaria", "Un impuesto del gobierno"], answer: 1, why: "Pedir un depósito para seguir o para retirar es el patrón de una estafa de tareas." },
          { objective: "O4", q: "¿Cuál es la mejor primera comprobación de una plataforma?", options: ["Buscar tú mismo su sitio web oficial y confirmar que unirse es gratis", "Confiar en la foto de perfil del reclutador", "Contar los \"me gusta\" de su anuncio", "Pagar una cuota pequeña para probarla"], answer: 0, why: "El sitio oficial, encontrado por ti, muestra si es gratis, si es real y si acepta tu país." },
          { objective: "O5", q: "Una plataforma real te pide verificar tu identificación. ¿Dónde debes subirla?", options: ["En un chat de WhatsApp con el reclutador", "Por correo a cualquier dirección que te den", "Solo dentro del sitio o la aplicación oficial de la plataforma", "En un grupo público"], answer: 2, why: "La identificación va solo en el paso de verificación oficial, nunca en un chat." },
          { objective: "O5", q: "Un amigo te ofrece pagarte por usar tu cuenta de la plataforma. ¿Qué haces?", options: ["Se la alquilas por un mes", "Compartes la contraseña pero te quedas con las ganancias", "Dejas que la use solo de noche", "Te niegas: compartir o vender una cuenta rompe las reglas y pone en riesgo tus ganancias"], answer: 3, why: "Las plataformas cierran las cuentas compartidas, y puedes perder ganancias que aún no te han pagado." },
          { objective: "O6", q: "¿Por qué contar en tu registro el tiempo de pruebas no pagado?", options: ["Para ver tu pago real por hora", "Porque la plataforma lo paga después", "No hace falta", "Para compartirlo en internet"], answer: 0, why: "El tiempo no pagado baja lo que de verdad ganas por hora, así que hay que contarlo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Etiquetado de datos para IA y microtrabajos en línea",
    questions: [
      { objective: "O1", q: "¿Qué es la anotación de datos?", options: ["Reparar computadoras", "Agregar etiquetas a los datos para que las herramientas de IA aprendan de ellos", "Escribir artículos de noticias", "Vender datos a los bancos"], answer: 1, why: "Anotar significa agregar etiquetas a fotos, textos, audios o videos para entrenar a la IA." },
      { objective: "O1", q: "¿Cuál es un microtrabajo?", options: ["Un contrato de dos años como gerente", "Tener una tienda", "Elegir la categoría de la foto de un producto, con pago por tarea", "Manejar un autobús"], answer: 2, why: "Los microtrabajos son pequeñas tareas en línea que se pagan una por una." },
      { objective: "O1", q: "Hablas bien yoruba e inglés. ¿Qué tarea te podría quedar bien?", options: ["Transcribir o revisar grabaciones en yoruba", "Reparar teléfonos", "Hacer entregas en vehículo", "Construir casas"], answer: 0, why: "Las habilidades de idioma sirven para tareas de audio y texto en ese idioma." },
      { objective: "O2", q: "¿Para qué sirve la guía de un proyecto?", options: ["Fija tu pago", "Muestra las puntuaciones de tus amigos", "Te da una contraseña", "Dice qué significa cada etiqueta y cómo tratar los casos difíciles"], answer: 3, why: "La guía es el conjunto de reglas de cómo etiquetar." },
      { objective: "O2", q: "Guía: etiqueta NEUTRAL si el mensaje es solo una pregunta o un dato. \"¿A qué hora cierran?\" ¿Qué etiqueta va?", options: ["POSITIVO", "NEGATIVO", "NEUTRAL", "Marcarlo"], answer: 2, why: "Es solo una pregunta, así que la guía dice NEUTRAL." },
      { objective: "O2", q: "\"Lindos zapatos, pero uno está roto. Quiero un reembolso.\" La guía dice que los mensajes mixtos se etiquetan según la petición principal. ¿Qué etiqueta va?", options: ["NEGATIVO", "POSITIVO", "NEUTRAL", "Saltarlo sin leer"], answer: 0, why: "La petición principal es un reembolso por un zapato roto, así que es NEGATIVO." },
      { objective: "O2", q: "Un clip de audio es solo silencio. ¿Qué haces?", options: ["Escribes algo para terminar rápido", "Lo marcas o lo saltas como dice la guía", "Copias la respuesta de otro trabajador", "Te sales del proyecto"], answer: 1, why: "Los elementos defectuosos o vacíos se marcan, no se adivinan." },
      { objective: "O3", q: "¿Qué es una pregunta de control (gold question)?", options: ["Un pago extra", "Una pregunta para vendedores de oro", "Una tarea oculta con una respuesta conocida que mide tu precisión", "Una prueba pagada que compras"], answer: 2, why: "Las plataformas esconden tareas con respuesta conocida entre tu trabajo para medir la calidad." },
      { objective: "O3", q: "¿Cuál es el mejor momento para presentar una prueba de calificación?", options: ["De inmediato, sin leer nada", "Después de leer la guía y practicar, descansado y con internet estable", "Tarde en la noche con poca señal", "Mientras haces otro trabajo"], answer: 1, why: "Prepararte y tener buenas condiciones te da la mejor oportunidad, y el tiempo de la prueba muchas veces no se paga." },
      { objective: "O3", q: "¿Qué puede pasar si tu puntuación de calidad sigue baja?", options: ["Recibes más tareas", "Tu pago se duplica", "Nunca pasa nada", "Te pueden sacar del proyecto"], answer: 3, why: "Las plataformas usan las puntuaciones de calidad para decidir quién sigue recibiendo tareas." },
      { objective: "O3", q: "Las reglas del proyecto dicen que no uses herramientas de IA para hacer las tareas. ¿Qué haces?", options: ["Sigues la regla y haces las tareas tú mismo", "Usas herramientas de IA a escondidas", "Le pides a un amigo que use la IA por ti", "Dejas de leer las reglas"], answer: 0, why: "Romper las reglas del proyecto puede costarte el proyecto y tu cuenta." },
      { objective: "O4", q: "¿Qué oferta es más probable que sea real?", options: ["\"Paga 5,000 nairas para desbloquear tareas\"", "\"Deposita criptomonedas para retirar tus ganancias\"", "Una plataforma que encontraste tú mismo y cuyo sitio dice que unirse es gratis", "\"Gana 200 dólares al día dando me gusta a videos\""], answer: 2, why: "Que unirse sea gratis y que la encuentres en su sitio oficial son señales de una plataforma real; las otras son patrones de estafa." },
      { objective: "O4", q: "Un \"reclutador\" te paga 30 dólares y luego te pide que le devuelvas 25. ¿Qué es esto?", options: ["Una estafa: los empleadores reales no te piden devolver dinero", "Un reembolso normal", "Un impuesto", "Un bono de capacitación"], answer: 0, why: "La FTC advierte que recibir un pago y luego tener que devolver dinero es una estafa." },
      { objective: "O4", q: "¿Cuál NO es una señal de alerta de un empleo falso?", options: ["Te piden una cuota para empezar", "Solo hablan por Telegram y te presionan para decidir hoy", "Te piden el PIN de tu banco", "El sitio propio de la plataforma explica sus tareas y dice que unirse es gratis"], answer: 3, why: "Un sitio oficial claro y unirse gratis es una buena señal; las otras son señales de alerta." },
      { objective: "O5", q: "¿Cuál es un buen hábito para tu cuenta?", options: ["Usar la misma contraseña en todas partes", "Una contraseña única y la verificación en dos pasos", "Escribir tu contraseña en tu perfil", "Compartir tus datos de acceso con tu familia"], answer: 1, why: "Una contraseña única y la verificación en dos pasos protegen tu cuenta y tus ganancias." },
      { objective: "O5", q: "¿Puedes publicar imágenes interesantes de las tareas en tu grupo de WhatsApp?", options: ["Sí, si las difuminas un poco", "Sí, después de terminar la tarea", "No: los datos de las tareas se quedan dentro de la plataforma", "Sí, si el grupo es pequeño"], answer: 2, why: "Los datos de las tareas son confidenciales; compartirlos rompe las reglas y puede dañar a personas reales." },
      { objective: "O5", q: "¿Quién debería recibir alguna vez tu código de inicio de sesión de un solo uso?", options: ["Nadie", "El soporte de la plataforma en un chat", "Un reclutador", "Un amigo que te ayuda"], answer: 0, why: "Los códigos de un solo uso son solo para ti; quien te pide uno está intentando quedarse con tu cuenta." },
      { objective: "O6", q: "Ganaste 12 dólares en una semana y usaste 8 horas en total. ¿Cuál es tu pago real por hora?", options: ["12 dólares", "8 dólares", "4 dólares", "1.50 dólares"], answer: 3, why: "12 dólares ÷ 8 horas = 1.50 dólares por hora." },
      { objective: "O6", q: "¿Qué afirmación sobre el pago de los microtrabajos es cierta?", options: ["Es igual todas las semanas", "Es irregular y cambia según el proyecto, el país y la plataforma", "Siempre es más que un empleo local", "Lo fija el gobierno"], answer: 1, why: "La cantidad de tareas y las tarifas de pago cambian, así que el pago es irregular." },
      { objective: "O6", q: "Guardas registros de tus ganancias en línea. ¿A quién le preguntas sobre cómo declararlas en tus impuestos?", options: ["A un reclutador en Telegram", "A nadie, el pago en línea nunca paga impuestos", "A la autoridad tributaria de tu país", "A los otros trabajadores de tu grupo"], answer: 2, why: "Las reglas de impuestos cambian según el país, así que la autoridad tributaria nacional es la fuente correcta." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Etiquetas de práctica", objective: "O2", notYet: "Menos de 8 de 10 coinciden con la clave, o se adivinaron los elementos dudosos.", meets: "Al menos 8 de 10 coinciden con la clave y el elemento dudoso está marcado.", exceeds: "10 de 10, con una guía de una página en tus propias palabras que cubre los casos límite." },
      { name: "Plan para la prueba y la calidad", objective: "O3", notYet: "No hay plan, o el plan es solo \"trabajar rápido\".", meets: "Cinco pasos: leer la guía, practicar, presentar la prueba descansado, leer los comentarios y releer las actualizaciones.", exceeds: "Además enumera tus propios errores de la práctica y la regla que vas a revisar para cada uno." },
      { name: "Plataformas revisadas", objective: "O4", notYet: "Se eligió una plataforma desde un enlace en un mensaje, o se aceptó pagar una cuota.", meets: "Dos plataformas revisadas en sus sitios oficiales: unirse gratis, tu país y cómo se envía el pago.", exceeds: "Además incluye una búsqueda de estafas para cada una y una lista de cinco señales de estafa en tus propias palabras." },
      { name: "Reglas de seguridad de datos", objective: "O5", notYet: "Faltan reglas, o el plan comparte códigos, identificación o datos de tareas en un chat.", meets: "Tres reglas claras: la cuenta, la identificación y los códigos, y los datos de las tareas.", exceeds: "La verificación en dos pasos está activada y las reglas dicen qué hacer si alguien pide un código." },
      { name: "Registro de pago y plan", objective: "O6", notYet: "No hay registro, o el registro cuenta solo el tiempo pagado.", meets: "Un registro que cuenta todos los minutos, la fórmula del pago real por hora y un plan de 4 semanas con fechas.", exceeds: "Además compara el resultado con otra opción y nombra una habilidad para desarrollar y conseguir trabajo mejor pagado." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que aprueban una prueba de calificación en una plataforma real y gratuita en un plazo de 60 días (encuesta de seguimiento)",
      "Participantes que dicen haber pagado una cuota o un depósito por un \"empleo en línea\" después del curso (meta: ninguno)",
      "Participantes que pueden decir su pago real por hora a partir de su propio registro en el seguimiento a los 30 días",
      "Participantes que pasan a un puesto mejor pagado (revisor, proyecto para expertos o empleo en una empresa de datos) en un plazo de 6 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con internet (la práctica se puede hacer en papel)",
      "Papel y lápiz para la práctica de etiquetado, la lista de señales de estafa y el registro de pago",
      "Una cuenta de correo electrónico con verificación en dos pasos",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial. Luego hagan la práctica de etiquetado en grupo y comparen las respuestas: los desacuerdos son la mejor manera de enseñar los casos límite.",
      "Traiga mensajes de estafa reales (sin nombres ni números) y deje que el grupo encuentre las señales de alerta.",
      "No recomiende ninguna plataforma como un ingreso seguro. Las plataformas cambian y aceptan países distintos; cada participante revisa las páginas propias de cada una.",
      "Nunca recoja las contraseñas, los códigos ni los documentos de identidad de los participantes, y no les pida registrarse durante la sesión si no están listos.",
      "Sea honesto sobre el pago. Ayude a los participantes a comparar el microtrabajo con las opciones locales y con la capacitación para puestos mejor pagados.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

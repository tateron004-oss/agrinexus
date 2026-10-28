"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-pbl.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-pbl-es",
  lang: "es",
  translationOf: "edu-ai-pbl",
  category: "Leadership Development",
  name: "IA y aprendizaje basado en proyectos",
  skills: "Diseñar un proyecto con una pregunta guía, Planear etapas y rúbricas con IA, Enseñar a los estudiantes a investigar con IA de forma responsable, Fijar reglas de uso de IA para cada etapa del proyecto, Evaluar el proceso y el aprendizaje individual, Organizar una muestra pública",
  outcome: "diseñar con ayuda de la IA una unidad de aprendizaje basado en proyectos (una pregunta guía, etapas, una rúbrica y un producto público auténtico) con reglas claras de uso de IA para cada etapa, un registro de IA del estudiante y puntos de control que muestran el aprendizaje propio de cada estudiante.",
  about: [
    "Este curso es para docentes, coordinadores pedagógicos y líderes escolares que usan o quieren usar el aprendizaje basado en proyectos (ABP, en inglés PBL). En el ABP, los estudiantes aprenden trabajando durante un tiempo en una pregunta real y compartiendo un producto con un público real. La IA cambia cómo investigan, crean y colaboran los estudiantes; también facilita saltarse el aprendizaje.",
    "El capítulo 1 usa la IA para diseñar el proyecto: la pregunta guía, el lanzamiento, las etapas y la rúbrica, y enseña a los estudiantes a investigar con IA de forma responsable. El capítulo 2 gestiona el proyecto: reglas de IA para cada etapa, herramientas de equipo, puntos de control que muestran el aprendizaje individual y un producto público con una declaración honesta del uso de IA.",
    "Usa herramientas aprobadas para todo lo que hagan los estudiantes y mantén la información de los estudiantes fuera de las herramientas no aprobadas. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Diseña una unidad de ABP de dos a cuatro semanas: una pregunta guía, un evento de lanzamiento, de cuatro a seis etapas cada una con un nivel de uso de IA, una rúbrica para el producto final y para el proceso, un punto de control individual en cada etapa, una plantilla de registro de IA para los estudiantes y un plan para una muestra pública con un público real. Revísala con un colega y mejora una parte según sus comentarios.",
  chapters: [
    {
      name: "Capítulo 1: Diseñar el proyecto con IA",
      lessons: [
        {
          title: "Lo esencial del ABP y el lugar de la IA",
          minutes: 5,
          goal: "Nombrar lo esencial de un buen proyecto y dónde ayuda o perjudica la IA.",
          text: [
            "Los buenos proyectos comparten algunos elementos esenciales: una pregunta guía abierta que importa a los estudiantes; una indagación sostenida en el tiempo; un trabajo auténtico conectado con el mundo real; voz y elección de los estudiantes; crítica y revisión; y un producto público compartido con un público más allá del docente.",
            "La IA puede ayudar al docente a diseñar todo esto más rápido, y puede ayudar a los estudiantes a generar ideas, investigar, redactar y recibir retroalimentación. También puede cortar en seco la indagación: un estudiante puede pedirle a la IA la respuesta a la pregunta guía en segundos.",
            "Así que diseña pensando en eso. La pregunta guía debe ser lo bastante local o personal como para que la IA no pueda simplemente responderla (“¿Cómo podemos reducir el desperdicio de comida en nuestro comedor?” en lugar de “¿Qué causa el desperdicio de comida?”), y el aprendizaje debe verse en el proceso, no solo en el producto."
          ],
          words: [["Aprendizaje basado en proyectos (ABP)", "aprender trabajando durante un tiempo en una pregunta real y compartiendo un producto con un público."], ["Pregunta guía", "la pregunta abierta que orienta todo un proyecto."], ["Auténtico", "conectado con personas, lugares y problemas reales."]],
          slides: [
            { title: "Lo esencial del ABP", bullets: ["Pregunta guía; indagación sostenida", "Trabajo auténtico; voz y elección", "Crítica y revisión; producto público"] },
            { title: "La IA puede ayudar o cortar en seco", bullets: ["Ayuda a diseñar, generar ideas, investigar, redactar", "Puede responder en segundos una pregunta genérica"] },
            { title: "Diseña pensando en eso", bullets: ["Preguntas guía locales o personales", "El aprendizaje se ve en el proceso"] }
          ],
          tryIt: "Pide a una herramienta de IA que responda una pregunta guía que hayas usado o visto. Luego reescribe la pregunta para que sea lo bastante local o personal como para que la IA no pueda simplemente responderla.",
          youCanNow: "nombrar lo esencial de un buen ABP y diseñar preguntas guía que la IA no puede cortar en seco."
        },
        {
          title: "Preguntas guía, lanzamientos, etapas y rúbricas",
          minutes: 6,
          goal: "Usar la IA para redactar la pregunta guía, el evento de lanzamiento, las etapas y la rúbrica del proyecto.",
          text: [
            "Da a la IA el grado, la materia, los estándares (de tu fuente oficial), la duración del proyecto y el contexto de tu comunidad (en términos generales). Pide cinco opciones de pregunta guía y luego elige y afina una, con los estudiantes si puedes.",
            "Pide un evento de lanzamiento que despierte la curiosidad (un invitado, un objeto misterioso, un problema local, una visita a un lugar) y de cuatro a seis etapas: investigación, plan, primer borrador o prototipo, crítica, revisión, producto final. Pide los conocimientos que requiere cada etapa, para que puedas planear minilecciones.",
            "Pide una rúbrica de dos partes: el producto final (contenido y calidad) y el proceso (colaboración, revisión, uso de evidencia). Revisa que cada criterio de la rúbrica coincida con tus estándares y que el calendario sea realista; la IA suele meter demasiado."
          ],
          steps: ["Da el grado, la materia, los estándares, la duración y el contexto.", "Elige y afina una pregunta guía.", "Redacta el evento de lanzamiento y 4-6 etapas.", "Anota los conocimientos que necesita cada etapa.", "Redacta una rúbrica de producto y proceso; revisa estándares y calendario."],
          words: [["Evento de lanzamiento", "una actividad que inicia un proyecto y despierta preguntas."], ["Etapa", "un punto de control en el que se entrega una parte del proyecto."], ["Crítica", "retroalimentación estructurada sobre un trabajo en curso."]],
          slides: [
            { title: "Dale contexto a la IA", bullets: ["Grado, materia, estándares", "Duración del proyecto, contexto de la comunidad"] },
            { title: "Redacta la estructura", bullets: ["Opciones de pregunta guía", "Evento de lanzamiento", "4-6 etapas con los conocimientos necesarios"] },
            { title: "Rúbrica de dos partes", bullets: ["Producto: contenido y calidad", "Proceso: colaboración, revisión, evidencia", "Revisa estándares y calendario"] }
          ],
          tryIt: "Usa la IA para redactar la pregunta guía, el evento de lanzamiento, las etapas y una rúbrica de dos partes para un proyecto que podrías dar. Ajusta el calendario a tu año escolar.",
          youCanNow: "diseñar rápido con IA la estructura de un proyecto y revisarla según los estándares y el tiempo."
        },
        {
          title: "Investigar con IA: buscar, verificar, citar",
          minutes: 5,
          goal: "Enseñar a los estudiantes una rutina de investigación que usa la IA sin confiar ciegamente en ella.",
          text: [
            "En los proyectos, los estudiantes investigan. La IA puede ayudarlos a entender un tema, generar preguntas y encontrar palabras de búsqueda, pero puede inventar datos y fuentes. Enseña una rutina de tres pasos: Explorar con IA (“¿Qué preguntas debería hacerme sobre el desperdicio de comida en las escuelas?” “¿Qué palabras debería buscar?”); Encontrar fuentes reales (buscadores, bases de datos de la biblioteca, entrevistas, datos locales); Verificar y citar (comprobar cada dato con al menos una fuente real y citar esa fuente, no la IA).",
            "Las fuentes primarias son una fortaleza del ABP: los estudiantes pueden entrevistar al personal del comedor, encuestar a sus compañeros (de forma anónima) y medir ellos mismos el desperdicio. La IA no puede hacer eso por ellos, y así la indagación sigue siendo real.",
            "Pide a los estudiantes que lleven un registro de investigación: pregunta, fuente, lo que aprendieron y cómo lo verificaron."
          ],
          steps: ["Explorar: usa la IA para generar preguntas y palabras de búsqueda.", "Encontrar fuentes reales: buscadores, bases de datos, entrevistas, datos locales.", "Verificar cada dato con una fuente real.", "Citar la fuente real, no la IA.", "Llevar un registro de investigación."],
          words: [["Fuente primaria", "evidencia de primera mano, como una entrevista, una encuesta o una medición."], ["Registro de investigación", "un registro de preguntas, fuentes, hallazgos y comprobaciones."]],
          slides: [
            { title: "Rutina de investigación de tres pasos", bullets: ["Explorar con IA: preguntas, palabras de búsqueda", "Encontrar fuentes reales", "Verificar y citar la fuente real"] },
            { title: "Fuentes primarias", bullets: ["Entrevistas, encuestas anónimas, mediciones", "La IA no puede hacerlo por ellos"] },
            { title: "Registro de investigación", bullets: ["Pregunta, fuente, aprendizaje, cómo se verificó"] }
          ],
          tryIt: "Escribe la rutina de investigación y una plantilla de registro de investigación para tu proyecto. Pruébala tú con una pregunta de investigación del proyecto.",
          youCanNow: "enseñar a los estudiantes a investigar con IA apoyándose en fuentes reales y verificadas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar el proyecto con IA",
        questions: [
          { q: "¿Qué pregunta guía le resulta más difícil de responder sin más a la IA?", options: ["¿Qué causa el desperdicio de comida?", "¿Qué es el desperdicio de comida?", "¿Cómo podemos reducir el desperdicio de comida en nuestro comedor?", "¿Quién inventó el compostaje?"], answer: 2, why: "Las preguntas locales necesitan la indagación propia de los estudiantes." },
          { q: "¿Qué es un evento de lanzamiento?", options: ["Una actividad que inicia un proyecto y despierta preguntas", "La presentación final", "Un examen", "Un permiso para una excursión"], answer: 0, why: "Despierta la curiosidad al inicio." },
          { q: "Una rúbrica de ABP de dos partes califica:", options: ["Solo el producto final", "Solo la presentación", "Solo la asistencia", "El producto y el proceso"], answer: 3, why: "El proceso muestra el aprendizaje en el camino." },
          { q: "Los estudiantes deben citar:", options: ["La herramienta de IA como fuente", "La fuente real que verificaron", "Nada", "Solo Wikipedia"], answer: 1, why: "La IA no es una fuente confiable; las fuentes reales sí." },
          { q: "¿Cuál es una fuente primaria?", options: ["Un resumen de IA", "La respuesta de un chatbot", "El resumen de un libro de texto", "Una entrevista con el personal del comedor"], answer: 3, why: "La evidencia de primera mano mantiene real la indagación." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gestionar y evaluar el proyecto",
      lessons: [
        {
          title: "Reglas de IA para cada etapa y un registro de IA del estudiante",
          minutes: 5,
          goal: "Fijar un nivel de uso de IA para cada etapa y un registro que llevan los estudiantes.",
          text: [
            "Una sola regla de IA para todo el proyecto es demasiado tosca. Fija un nivel para cada etapa, usando la escala de tu escuela. Por ejemplo: generar ideas, IA permitida para ideas; investigación, IA solo para preguntas y palabras de búsqueda; primer borrador, sin IA (los estudiantes muestran su propio razonamiento); crítica, retroalimentación de IA permitida junto con la de los compañeros; producto final, herramientas de IA permitidas para el diseño y el acabado, con declaración.",
            "Los estudiantes llevan un registro de IA: fecha, herramienta, qué pidieron, qué usaron y qué cambiaron. Cada entrada toma un minuto y hace visible y honesto el uso de la IA.",
            "Explica los motivos. Los estudiantes siguen las reglas que entienden: “El primer borrador es sin IA porque necesitamos ver tu razonamiento antes de que alguien te ayude.”"
          ],
          steps: ["Haz una lista de las etapas.", "Fija un nivel de uso de IA para cada una.", "Escribe el motivo de cada nivel.", "Da a los estudiantes una plantilla de registro de IA.", "Revisa los registros en cada etapa."],
          words: [["Registro de IA", "el registro de un estudiante sobre cuándo y cómo usó la IA."], ["Declaración", "decir abiertamente cómo se usó la IA."]],
          slides: [
            { title: "Un nivel para cada etapa", bullets: ["Generar ideas: ideas permitidas", "Investigación: preguntas y palabras de búsqueda", "Primer borrador: sin IA", "Producto final: herramientas permitidas, declaradas"] },
            { title: "El registro de IA", bullets: ["Fecha, herramienta, qué se pidió", "Qué se usó, qué se cambió"] },
            { title: "Explica por qué", bullets: ["“Primero necesitamos ver tu razonamiento”"] }
          ],
          tryIt: "Escribe un nivel de uso de IA y un motivo de una línea para cada etapa de tu proyecto, y haz una plantilla de registro de IA de una página para los estudiantes.",
          youCanNow: "fijar reglas de IA claras, etapa por etapa, para un proyecto y hacer visible el uso de la IA."
        },
        {
          title: "Puntos de control que muestran el aprendizaje individual",
          minutes: 6,
          goal: "Planear puntos de control que muestren lo que aprendió cada estudiante en un proyecto en equipo.",
          text: [
            "Los productos de equipo pueden ocultar quién aprendió qué, y la IA lo facilita aún más. Agrega puntos de control individuales en cada etapa: un boleto de salida breve sobre los conocimientos de esa etapa, una conversación de dos minutos, una reflexión escrita o una explicación individual de una parte del trabajo del equipo.",
            "Usa la IA para prepararte: preguntas para cada punto de control, preguntas para las conversaciones y preguntas de reflexión (“¿Qué cambiaste después de la crítica y por qué?”). Mantén los nombres y las calificaciones de los estudiantes fuera de las herramientas no aprobadas cuando registres los resultados.",
            "Usa bien las herramientas de equipo: la IA puede ayudar a los equipos a repartir tareas, planear calendarios y dar retroalimentación sobre borradores según la rúbrica. Pero cada estudiante debe poder explicar el trabajo del equipo y su propio aporte."
          ],
          steps: ["Agrega un punto de control individual en cada etapa.", "Usa la IA para redactar preguntas de control, de conversación y de reflexión.", "Registra los resultados en tu libro de calificaciones o en una herramienta aprobada.", "Deja que los equipos usen la IA para planear y recibir retroalimentación, según lo permitido.", "Cada estudiante explica el trabajo y su parte."],
          words: [["Punto de control", "una verificación individual breve del aprendizaje durante un proyecto."], ["Conversación individual", "una charla breve entre docente y estudiante sobre su trabajo."], ["Reflexión", "escribir o hablar sobre lo que aprendiste y cómo."]],
          slides: [
            { title: "Los productos de equipo pueden ocultar el aprendizaje", bullets: ["Agrega puntos de control individuales", "Boletos de salida, conversaciones, reflexiones"] },
            { title: "La IA te ayuda a prepararte", bullets: ["Preguntas de control y de conversación", "Preguntas de reflexión", "Los registros quedan en herramientas aprobadas"] },
            { title: "Herramientas de equipo, prueba individual", bullets: ["IA para planear y retroalimentar borradores", "Cada estudiante explica el trabajo y su parte"] }
          ],
          tryIt: "Usa la IA para redactar un punto de control individual para cada etapa (una pregunta de boleto de salida, una pregunta de conversación o una pregunta de reflexión).",
          youCanNow: "evaluar el aprendizaje de cada estudiante dentro de un proyecto en equipo."
        },
        {
          title: "El producto público, la muestra y la reflexión",
          minutes: 6,
          goal: "Planear una muestra auténtica con una declaración honesta del uso de IA y la reflexión de los estudiantes.",
          text: [
            "Un público real eleva la calidad del trabajo: familias, miembros de la comunidad, expertos locales, la junta escolar o una empresa que enfrenta el problema. Planea la muestra con tiempo e invita a la gente con un mensaje breve (la IA puede redactarlo).",
            "Pide a los equipos que incluyan una declaración de uso de IA en su producto (“Usamos la IA para generar ideas de diseño y revisar la gramática; todos los datos de investigación los reunimos nosotros”). La declaración honesta es parte de la integridad del producto, y el público la respeta.",
            "Protege a los estudiantes: sigue las reglas de tu escuela sobre fotos, nombres y grabaciones, y sobre compartir trabajos en línea. Cierra con una reflexión: qué aprendieron los estudiantes sobre el tema, sobre el trabajo en equipo y sobre cuándo la IA ayudó o estorbó."
          ],
          steps: ["Elige un público real e invítalo con tiempo.", "Los equipos agregan una declaración de uso de IA a su producto.", "Sigue las reglas de la escuela sobre fotos, nombres y publicación en línea.", "Realiza la muestra.", "Cierra con una reflexión sobre el aprendizaje, el trabajo en equipo y la IA."],
          words: [["Muestra", "un evento en el que los estudiantes presentan su trabajo a un público."], ["Público auténtico", "personas reales a quienes les importa el trabajo, más allá del docente."]],
          slides: [
            { title: "Un público real", bullets: ["Familias, expertos, comunidad, junta", "Invita con tiempo"] },
            { title: "Declaración de IA en cada producto", bullets: ["Qué hizo la IA y qué hicieron los estudiantes", "La honestidad es parte de la integridad"] },
            { title: "Proteger y reflexionar", bullets: ["Reglas de la escuela sobre fotos y nombres", "Reflexión: tema, trabajo en equipo, IA"] }
          ],
          tryIt: "Tarea final: arma tu unidad de ABP (pregunta guía, evento de lanzamiento, etapas con niveles de IA, rúbrica de producto y proceso, puntos de control individuales, registro de IA del estudiante, plan de la muestra). Compártela con un colega y mejora una parte según sus comentarios.",
          youCanNow: "liderar un aprendizaje basado en proyectos en el que la IA apoya una indagación real y se ve el aprendizaje de cada estudiante."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Gestionar y evaluar el proyecto",
        questions: [
          { q: "¿Por qué fijar un nivel de uso de IA para cada etapa en lugar de uno para todo el proyecto?", options: ["La IA lo exige", "Es más corto", "Las distintas etapas desarrollan habilidades distintas", "Para confundir a los estudiantes"], answer: 2, why: "Un primer borrador puede no necesitar IA, mientras que el acabado sí puede usarla." },
          { q: "¿Qué anota el registro de IA de un estudiante?", options: ["Fecha, herramienta, qué se pidió, qué se usó y qué se cambió", "Calificaciones", "Contraseñas", "Notas del docente"], answer: 0, why: "Hace visible y honesto el uso de la IA." },
          { q: "¿Cómo puedes ver lo que aprendió cada estudiante en un proyecto en equipo?", options: ["Calificar solo el producto del equipo", "Agregar puntos de control individuales en cada etapa", "Preguntarle a la IA", "No evaluar"], answer: 1, why: "Las verificaciones individuales muestran el aprendizaje individual." },
          { q: "¿Qué debe decir la declaración de uso de IA de un equipo?", options: ["Qué hizo la IA y qué hicieron los estudiantes", "Nada", "Solo el precio de la herramienta", "Que la IA no existe"], answer: 0, why: "La declaración honesta es parte de la integridad." },
          { q: "Antes de publicar en línea los trabajos de los estudiantes después de la muestra, revisa:", options: ["La opinión de la IA", "Nada", "Solo el tipo de letra", "Las reglas de tu escuela sobre fotos, nombres y publicación en línea"], answer: 3, why: "Aplican las reglas de privacidad de los estudiantes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA y aprendizaje basado en proyectos",
    questions: [
      { q: "En el ABP, los estudiantes aprenden:", options: ["Solo leyendo libros de texto", "Trabajando durante un tiempo en una pregunta real y compartiendo un producto", "Solo con pruebas diarias", "Viendo videos"], answer: 1, why: "Esa es la esencia del ABP." },
      { q: "Una pregunta guía debe ser:", options: ["Secreta", "Respondible con una palabra", "Abierta y significativa para los estudiantes", "De un banco de preguntas de examen"], answer: 2, why: "Orienta una indagación sostenida." },
      { q: "Hacer local una pregunta guía ayuda porque:", options: ["No necesita investigación", "Es más corta", "La IA no puede simplemente responderla", "Evita los estándares"], answer: 2, why: "Las preguntas locales necesitan una indagación real." },
      { q: "¿Cuál es un elemento esencial del ABP?", options: ["Un producto público para un público real", "Sin revisión", "El docente como único público", "Sin elección de los estudiantes"], answer: 0, why: "Los productos públicos elevan la calidad." },
      { q: "Las etapas son:", options: ["Niveles de la rúbrica", "Calificaciones", "Excursiones", "Puntos de control en los que se entregan partes del proyecto"], answer: 3, why: "Estructuran el proyecto." },
      { q: "Para cada etapa, la IA puede enumerar:", options: ["Los nombres de los estudiantes", "Los conocimientos que requiere, para planear minilecciones", "Calificaciones", "Contraseñas"], answer: 1, why: "Esto ayuda a planear la enseñanza." },
      { q: "Los calendarios de proyecto de la IA a menudo:", options: ["Se saltan etapas", "Dejan demasiado tiempo", "Son siempre perfectos", "Meten demasiado"], answer: 3, why: "Compáralos con tu calendario escolar." },
      { q: "El paso 1 de la rutina de investigación es:", options: ["Citar la IA", "Copiar la respuesta de la IA", "Explorar con IA: preguntas y palabras de búsqueda", "Saltarse la investigación"], answer: 2, why: "La IA ayuda a empezar la investigación, no a terminarla." },
      { q: "Cada dato que usen los estudiantes debe:", options: ["Verificarse con una fuente real", "Tomarse de la IA", "Quedar sin verificar", "Inventarse"], answer: 0, why: "La IA puede inventar datos." },
      { q: "Una encuesta anónima a los compañeros es:", options: ["Un resumen de IA", "Una fuente primaria", "Una reseña secundaria", "Algo no permitido"], answer: 1, why: "Los estudiantes reúnen evidencia de primera mano." },
      { q: "Un registro de investigación anota:", options: ["Pregunta, fuente, aprendizaje y cómo se verificó", "Contraseñas", "Calificaciones", "Pedidos del almuerzo"], answer: 0, why: "Documenta una investigación real." },
      { q: "¿Por qué el primer borrador podría ser una etapa sin IA?", options: ["Porque los borradores no importan", "La IA es ilegal", "Para ahorrar dinero", "Para ver el razonamiento propio de los estudiantes antes de cualquier ayuda"], answer: 3, why: "Primero el razonamiento, después la ayuda." },
      { q: "Las reglas que los estudiantes entienden son:", options: ["Reglas secretas", "Reglas con los motivos explicados", "Reglas que cambian cada día", "Reglas de la IA"], answer: 1, why: "Los motivos generan compromiso." },
      { q: "Un punto de control individual podría ser:", options: ["Una calificación de grupo", "Solo el producto final del equipo", "Una conversación de dos minutos", "Nada"], answer: 2, why: "Muestra el aprendizaje de un estudiante." },
      { q: "Las preguntas de reflexión piden a los estudiantes:", options: ["Su calificación", "Su contraseña", "Qué cambiaron y por qué", "Nada"], answer: 2, why: "La reflexión profundiza el aprendizaje." },
      { q: "Cada estudiante de un equipo debe poder:", options: ["Explicar el trabajo del equipo y su parte", "Presentar solo su diapositiva", "Quedarse callado", "Dejar que la IA lo explique"], answer: 0, why: "La comprensión compartida es parte del aprendizaje." },
      { q: "Un público auténtico es:", options: ["Nadie", "Solo el docente", "Una herramienta de IA", "Personas reales a quienes les importa el trabajo"], answer: 3, why: "Los públicos reales elevan la calidad." },
      { q: "Una declaración de uso de IA en un producto muestra:", options: ["El precio de la IA", "Qué hizo la IA y qué hicieron los estudiantes", "Las calificaciones de los estudiantes", "Nada"], answer: 1, why: "La transparencia genera confianza." },
      { q: "Las fotos de estudiantes en la muestra deben seguir:", options: ["Las reglas del proveedor", "Ninguna regla", "Las modas de las redes sociales", "Las reglas de la escuela sobre fotos y nombres"], answer: 3, why: "La privacidad de los estudiantes importa." },
      { q: "La reflexión final debe abarcar:", options: ["Solo la herramienta de IA", "Solo la calificación", "El tema, el trabajo en equipo y cuándo la IA ayudó o estorbó", "Nada"], answer: 2, why: "Los estudiantes aprenden al reflexionar sobre las tres cosas." }
    ]
  }
};

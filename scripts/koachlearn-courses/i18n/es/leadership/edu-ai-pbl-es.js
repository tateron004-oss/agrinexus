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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Docentes de aula, coordinadores pedagógicos y líderes escolares que hacen o quieren hacer unidades de aprendizaje basado en proyectos (ABP) y necesitan planear para estudiantes que tienen herramientas de IA.",
    startingPoint: "Saben planear unidades y proyectos en equipo y calificar un producto final. Algunos ya han hecho un proyecto. Pocos han fijado reglas de IA para cada etapa de un proyecto o han creado puntos de control que muestren el aprendizaje propio de cada estudiante.",
    gap: "Un estudiante puede pedirle a la IA la respuesta a una pregunta guía en segundos, y los productos en equipo pueden ocultar quién aprendió qué. Los docentes necesitan diseñar proyectos en los que la indagación siga siendo real, el uso de la IA sea claro y honesto en cada etapa, y se vea el aprendizaje de cada estudiante.",
    constraints: [
      "Tiempo: lecciones cortas que caben en un periodo de planificación; la unidad dura de dos a cuatro semanas",
      "Dispositivos: una computadora de la escuela con un asistente de IA que el distrito permita",
      "Privacidad: los nombres y las calificaciones de los estudiantes no se ponen en herramientas que el distrito no haya aprobado",
      "Las reglas de la escuela sobre fotos, nombres, grabaciones y publicación en línea se aplican a la muestra",
      "Los estándares se toman de la fuente oficial, no de la IA"
    ],
    prerequisites: "Ninguno. Los docentes que no conocen las herramientas de IA pueden tomar primero un curso introductorio de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una idea de proyecto", action: "enumerar lo esencial de un buen proyecto y escribir una pregunta guía que la IA no pueda responder sin más", standard: "con una pregunta local o personal y abierta" },
    { id: "O2", condition: "Con tu grado, materia, estándares y duración del proyecto", action: "usar la IA para redactar un evento de lanzamiento, de cuatro a seis etapas y una rúbrica de dos partes", standard: "revisados con tus estándares y con un calendario realista" },
    { id: "O3", condition: "Cuando los estudiantes investigan el tema de un proyecto", action: "enseñar la rutina de explorar, buscar, verificar y citar con un registro de investigación", standard: "para que cada dato usado se compruebe con una fuente real" },
    { id: "O4", condition: "Con las etapas de tu proyecto", action: "fijar un nivel de uso de IA para cada etapa y dar a los estudiantes una plantilla de registro de IA", standard: "con un motivo que los estudiantes puedan entender para cada nivel" },
    { id: "O5", condition: "Con un proyecto en equipo", action: "planear un punto de control individual en cada etapa", standard: "para que cada estudiante pueda explicar el trabajo del equipo y su propia parte" },
    { id: "O6", condition: "Cuando termina el proyecto", action: "planear una muestra pública con un público real, una declaración de uso de IA y una reflexión de los estudiantes", standard: "siguiendo las reglas de tu escuela sobre fotos, nombres y publicación en línea" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Diseñar el proyecto con IA",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "nombrar lo esencial de un buen ABP y diseñar preguntas guía que la IA no puede cortar en seco.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es uno de los elementos esenciales del ABP?", options: ["Una hoja de trabajo que solo califica el docente", "Un único examen al final", "Crítica y revisión", "Un tema que elige el docente sin opción para los estudiantes"], answer: 2, why: "Los buenos proyectos incluyen crítica y revisión, junto con voz, opción y un producto público." },
            { objective: "O1", q: "Tu pregunta guía es \"¿Qué causa la contaminación del aire?\". ¿Cómo la cambiarías?", options: ["Hacerla local, como \"¿Cómo podemos reducir los autos con el motor encendido frente a nuestra escuela?\"", "Hacerla más corta", "Agregarle más datos", "Pedirle primero a la IA que la responda"], answer: 0, why: "Una pregunta local o personal impide que la IA simplemente la responda." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "diseñar rápido con IA la estructura de un proyecto y revisarla según los estándares y el tiempo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué dos partes debe calificar una rúbrica de ABP?", options: ["La ortografía y la limpieza", "El producto final y el proceso", "La asistencia y las tareas", "La rapidez y la extensión"], answer: 1, why: "Calificar el proceso (colaboración, revisión, evidencia) además del producto premia el aprendizaje." },
            { objective: "O2", q: "El calendario de proyecto de la IA mete ocho etapas en dos semanas. ¿Qué harías?", options: ["Dejarlo así, porque lo planeó la IA", "Agregar más etapas", "Quitar la rúbrica para ahorrar tiempo", "Reducirlo a un plan realista, como de cuatro a seis etapas"], answer: 3, why: "La IA a menudo mete demasiado, así que revisa que el calendario sea realista." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "enseñar a los estudiantes a investigar con IA apoyándose en fuentes reales y verificadas.",
          quickCheck: [
            { objective: "O3", q: "¿Qué deben citar los estudiantes en su proyecto?", options: ["La fuente real que verificaron", "La herramienta de IA", "Nada, si la IA ayudó", "El nombre del buscador"], answer: 0, why: "La rutina es verificar cada dato con una fuente real y citar esa fuente." },
            { objective: "O3", q: "Un equipo quiere saber cuánta comida se tira en el comedor de su escuela. ¿Cuál es el paso más sólido?", options: ["Pedirle un número a la IA", "Copiar un número de cualquier sitio web", "Medir ellos mismos el desperdicio o entrevistar al personal del comedor", "Adivinar y seguir adelante"], answer: 2, why: "Las fuentes primarias mantienen real la indagación y la IA no puede reunirlas por los estudiantes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar el proyecto con IA",
        questions: [
          { objective: "O1", q: "¿Qué pregunta guía le resulta más difícil de responder sin más a la IA?", options: ["¿Qué causa el desperdicio de comida?", "¿Qué es el desperdicio de comida?", "¿Cómo podemos reducir el desperdicio de comida en nuestro comedor?", "¿Quién inventó el compostaje?"], answer: 2, why: "Las preguntas locales necesitan la indagación propia de los estudiantes." },
          { objective: "O2", q: "¿Qué es un evento de lanzamiento?", options: ["Una actividad que inicia un proyecto y despierta preguntas", "La presentación final", "Un examen", "Un permiso para una excursión"], answer: 0, why: "Despierta la curiosidad al inicio." },
          { objective: "O2", q: "Una rúbrica de ABP de dos partes califica:", options: ["Solo el producto final", "Solo la presentación", "Solo la asistencia", "El producto y el proceso"], answer: 3, why: "El proceso muestra el aprendizaje en el camino." },
          { objective: "O3", q: "Los estudiantes deben citar:", options: ["La herramienta de IA como fuente", "La fuente real que verificaron", "Nada", "Solo Wikipedia"], answer: 1, why: "La IA no es una fuente confiable; las fuentes reales sí." },
          { objective: "O3", q: "¿Cuál es una fuente primaria?", options: ["Un resumen de IA", "La respuesta de un chatbot", "El resumen de un libro de texto", "Una entrevista con el personal del comedor"], answer: 3, why: "La evidencia de primera mano mantiene real la indagación." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gestionar y evaluar el proyecto",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "fijar reglas de IA claras, etapa por etapa, para un proyecto y hacer visible el uso de la IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué anota el registro de IA de un estudiante?", options: ["Solo la calificación final", "Fecha, herramienta, qué se pidió, qué se usó y qué se cambió", "La contraseña del estudiante", "Cuánto duró cada clase"], answer: 1, why: "El registro hace visible y honesto el uso de la IA, con una entrada corta cada vez." },
            { objective: "O4", q: "Un estudiante pregunta por qué el primer borrador es sin IA. ¿Qué le dirías?", options: ["Porque la IA nunca está permitida", "Porque así lo dicen las reglas", "Porque la IA es demasiado lenta", "Porque necesitamos ver tu razonamiento antes de que alguien te ayude"], answer: 3, why: "Los estudiantes siguen las reglas que entienden, así que explica el motivo." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "evaluar el aprendizaje de cada estudiante dentro de un proyecto en equipo.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un punto de control individual?", options: ["Una conversación de dos minutos con un estudiante", "El cartel final del equipo", "Una calificación de grupo para todo el proyecto", "Una votación de la clase"], answer: 0, why: "Los puntos de control individuales muestran lo que aprendió cada estudiante, no solo el equipo." },
            { objective: "O5", q: "Anotas los resultados de los puntos de control con ayuda de la IA. ¿Qué harías?", options: ["Pegar los nombres y las calificaciones en cualquier herramienta de IA", "Publicar los resultados en el sitio web de la clase", "No poner nombres ni calificaciones en herramientas que el distrito no haya aprobado", "No anotar los resultados"], answer: 2, why: "Los nombres y las calificaciones de los estudiantes no se ponen en herramientas no aprobadas." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "liderar un aprendizaje basado en proyectos en el que la IA apoya una indagación real y se ve el aprendizaje de cada estudiante.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es un público auténtico para un proyecto?", options: ["Solo el docente", "Expertos locales o familias a quienes les importa el problema", "Un chatbot de IA", "Los estudiantes del mismo equipo"], answer: 1, why: "Las personas reales a quienes les importa el trabajo elevan su calidad." },
            { objective: "O6", q: "Un familiar que asiste a la muestra quiere publicar en línea fotos de los estudiantes. ¿Qué revisarías?", options: ["Nada; es un evento público", "Si las fotos se ven claras", "Si la IA puede editarlas", "Las reglas de tu escuela sobre fotos, nombres y publicación en línea"], answer: 3, why: "Protege a los estudiantes siguiendo las reglas de la escuela sobre fotos y publicación." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Gestionar y evaluar el proyecto",
        questions: [
          { objective: "O4", q: "¿Por qué fijar un nivel de uso de IA para cada etapa en lugar de uno para todo el proyecto?", options: ["La IA lo exige", "Es más corto", "Las distintas etapas desarrollan habilidades distintas", "Para confundir a los estudiantes"], answer: 2, why: "Un primer borrador puede no necesitar IA, mientras que el acabado sí puede usarla." },
          { objective: "O4", q: "¿Qué anota el registro de IA de un estudiante?", options: ["Fecha, herramienta, qué se pidió, qué se usó y qué se cambió", "Calificaciones", "Contraseñas", "Notas del docente"], answer: 0, why: "Hace visible y honesto el uso de la IA." },
          { objective: "O5", q: "¿Cómo puedes ver lo que aprendió cada estudiante en un proyecto en equipo?", options: ["Calificar solo el producto del equipo", "Agregar puntos de control individuales en cada etapa", "Preguntarle a la IA", "No evaluar"], answer: 1, why: "Las verificaciones individuales muestran el aprendizaje individual." },
          { objective: "O6", q: "¿Qué debe decir la declaración de uso de IA de un equipo?", options: ["Qué hizo la IA y qué hicieron los estudiantes", "Nada", "Solo el precio de la herramienta", "Que la IA no existe"], answer: 0, why: "La declaración honesta es parte de la integridad." },
          { objective: "O6", q: "Antes de publicar en línea los trabajos de los estudiantes después de la muestra, revisa:", options: ["La opinión de la IA", "Nada", "Solo el tipo de letra", "Las reglas de tu escuela sobre fotos, nombres y publicación en línea"], answer: 3, why: "Aplican las reglas de privacidad de los estudiantes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA y aprendizaje basado en proyectos",
    questions: [
      { objective: "O1", q: "En el ABP, los estudiantes aprenden:", options: ["Solo leyendo libros de texto", "Trabajando durante un tiempo en una pregunta real y compartiendo un producto", "Solo con pruebas diarias", "Viendo videos"], answer: 1, why: "Esa es la esencia del ABP." },
      { objective: "O1", q: "Una pregunta guía debe ser:", options: ["Secreta", "Respondible con una palabra", "Abierta y significativa para los estudiantes", "De un banco de preguntas de examen"], answer: 2, why: "Orienta una indagación sostenida." },
      { objective: "O1", q: "Hacer local una pregunta guía ayuda porque:", options: ["No necesita investigación", "Es más corta", "La IA no puede simplemente responderla", "Evita los estándares"], answer: 2, why: "Las preguntas locales necesitan una indagación real." },
      { objective: "O1", q: "¿Cuál es un elemento esencial del ABP?", options: ["Un producto público para un público real", "Sin revisión", "El docente como único público", "Sin elección de los estudiantes"], answer: 0, why: "Los productos públicos elevan la calidad." },
      { objective: "O2", q: "Las etapas son:", options: ["Niveles de la rúbrica", "Calificaciones", "Excursiones", "Puntos de control en los que se entregan partes del proyecto"], answer: 3, why: "Estructuran el proyecto." },
      { objective: "O2", q: "Para cada etapa, la IA puede enumerar:", options: ["Los nombres de los estudiantes", "Los conocimientos que requiere, para planear minilecciones", "Calificaciones", "Contraseñas"], answer: 1, why: "Esto ayuda a planear la enseñanza." },
      { objective: "O2", q: "Los calendarios de proyecto de la IA a menudo:", options: ["Se saltan etapas", "Dejan demasiado tiempo", "Son siempre perfectos", "Meten demasiado"], answer: 3, why: "Compáralos con tu calendario escolar." },
      { objective: "O3", q: "El paso 1 de la rutina de investigación es:", options: ["Citar la IA", "Copiar la respuesta de la IA", "Explorar con IA: preguntas y palabras de búsqueda", "Saltarse la investigación"], answer: 2, why: "La IA ayuda a empezar la investigación, no a terminarla." },
      { objective: "O3", q: "Cada dato que usen los estudiantes debe:", options: ["Verificarse con una fuente real", "Tomarse de la IA", "Quedar sin verificar", "Inventarse"], answer: 0, why: "La IA puede inventar datos." },
      { objective: "O3", q: "Una encuesta anónima a los compañeros es:", options: ["Un resumen de IA", "Una fuente primaria", "Una reseña secundaria", "Algo no permitido"], answer: 1, why: "Los estudiantes reúnen evidencia de primera mano." },
      { objective: "O3", q: "Un registro de investigación anota:", options: ["Pregunta, fuente, aprendizaje y cómo se verificó", "Contraseñas", "Calificaciones", "Pedidos del almuerzo"], answer: 0, why: "Documenta una investigación real." },
      { objective: "O4", q: "¿Por qué el primer borrador podría ser una etapa sin IA?", options: ["Porque los borradores no importan", "La IA es ilegal", "Para ahorrar dinero", "Para ver el razonamiento propio de los estudiantes antes de cualquier ayuda"], answer: 3, why: "Primero el razonamiento, después la ayuda." },
      { objective: "O4", q: "Las reglas que los estudiantes entienden son:", options: ["Reglas secretas", "Reglas con los motivos explicados", "Reglas que cambian cada día", "Reglas de la IA"], answer: 1, why: "Los motivos generan compromiso." },
      { objective: "O5", q: "Un punto de control individual podría ser:", options: ["Una calificación de grupo", "Solo el producto final del equipo", "Una conversación de dos minutos", "Nada"], answer: 2, why: "Muestra el aprendizaje de un estudiante." },
      { objective: "O5", q: "Las preguntas de reflexión piden a los estudiantes:", options: ["Su calificación", "Su contraseña", "Qué cambiaron y por qué", "Nada"], answer: 2, why: "La reflexión profundiza el aprendizaje." },
      { objective: "O5", q: "Cada estudiante de un equipo debe poder:", options: ["Explicar el trabajo del equipo y su parte", "Presentar solo su diapositiva", "Quedarse callado", "Dejar que la IA lo explique"], answer: 0, why: "La comprensión compartida es parte del aprendizaje." },
      { objective: "O6", q: "Un público auténtico es:", options: ["Nadie", "Solo el docente", "Una herramienta de IA", "Personas reales a quienes les importa el trabajo"], answer: 3, why: "Los públicos reales elevan la calidad." },
      { objective: "O6", q: "Una declaración de uso de IA en un producto muestra:", options: ["El precio de la IA", "Qué hizo la IA y qué hicieron los estudiantes", "Las calificaciones de los estudiantes", "Nada"], answer: 1, why: "La transparencia genera confianza." },
      { objective: "O6", q: "Las fotos de estudiantes en la muestra deben seguir:", options: ["Las reglas del proveedor", "Ninguna regla", "Las modas de las redes sociales", "Las reglas de la escuela sobre fotos y nombres"], answer: 3, why: "La privacidad de los estudiantes importa." },
      { objective: "O6", q: "La reflexión final debe abarcar:", options: ["Solo la herramienta de IA", "Solo la calificación", "El tema, el trabajo en equipo y cuándo la IA ayudó o estorbó", "Nada"], answer: 2, why: "Los estudiantes aprenden al reflexionar sobre las tres cosas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      7,
      8,
      11,
      13,
      15,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Pregunta guía y lanzamiento",
        objective: "O1",
        notYet: "La pregunta es cerrada o la IA podría responderla, o no hay evento de lanzamiento.",
        meets: "Una pregunta guía abierta, local o personal, y un evento de lanzamiento que despierta preguntas.",
        exceeds: "Los estudiantes ayudaron a elegir o mejorar la pregunta."
      },
      {
        name: "Etapas y rúbrica",
        objective: "O2",
        notYet: "Menos de cuatro etapas, o la rúbrica solo califica el producto.",
        meets: "De cuatro a seis etapas en un calendario realista y una rúbrica para el producto y el proceso, alineada con los estándares.",
        exceeds: "Cada etapa enumera los conocimientos que requiere y una minilección para enseñarlos."
      },
      {
        name: "Niveles de IA y registro",
        objective: "O4",
        notYet: "Una sola regla de IA para todo el proyecto, o no hay registro de IA del estudiante.",
        meets: "Cada etapa tiene un nivel de uso de IA y hay una plantilla de registro de IA para los estudiantes.",
        exceeds: "Cada nivel viene con un motivo escrito para los estudiantes."
      },
      {
        name: "Puntos de control individuales",
        objective: "O5",
        notYet: "Solo se evalúa el producto del equipo.",
        meets: "Un punto de control individual en cada etapa.",
        exceeds: "Los puntos de control varían (boleto de salida, conversación, reflexión) y se ajustan a cada etapa."
      },
      {
        name: "Plan de la muestra",
        objective: "O6",
        notYet: "No hay un público real o no hay declaración de uso de IA.",
        meets: "Una muestra pública con un público real, una declaración de uso de IA y una reflexión, siguiendo las reglas de la escuela.",
        exceeds: "Nombra el público concreto y cómo se le invitará."
      },
      {
        name: "Comentarios de un colega",
        objective: "O2",
        notYet: "El plan no se compartió con un colega.",
        meets: "Un colega revisó el plan y se mejoró una parte.",
        exceeds: "Puede decir qué cambió y por qué es mejor."
      }
    ]
  },
  evaluation: {
    results: [
      "Docentes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Docentes que hacen una unidad de ABP con niveles de uso de IA en el siguiente periodo escolar (encuesta de seguimiento)",
      "Muestras hechas con un público real de la comunidad",
      "Docentes que toman otro curso de Koach Learn sobre IA para educadores"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con un asistente de IA que tu distrito permita",
      "Tus estándares tomados de la fuente oficial y la escala de uso de IA de tu escuela, si tiene una",
      "Un colega que revise el plan",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Hazlo con equipos de grado o de materia: respondan juntos la prueba inicial y luego pide a cada equipo que diseñe una unidad.",
      "Deja tiempo al final para la revisión de un colega; si puedes, forma parejas de docentes de equipos distintos.",
      "Recuerda a los participantes que los nombres y las calificaciones de los estudiantes no se ponen en herramientas de IA no aprobadas.",
      "Pide a los líderes escolares que confirmen las reglas sobre fotos y publicación en línea de la muestra antes de que los equipos planeen sus eventos.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

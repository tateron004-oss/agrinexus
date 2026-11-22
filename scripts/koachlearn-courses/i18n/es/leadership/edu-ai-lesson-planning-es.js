"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-lesson-planning.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-lesson-planning-es",
  lang: "es",
  translationOf: "edu-ai-lesson-planning",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 3: IA para planear clases",
  skills: "Planear hacia atrás desde el objetivo, Pedir a la IA un plan de clase completo, Revisar planes de IA en exactitud y alineación, Incluir la diferenciación, Preparar el esquema de una unidad, Acompañar a equipos para planear con IA",
  outcome: "planear una clase completa con un asistente de IA, desde el objetivo y los criterios de logro hasta las actividades, la diferenciación y un boleto de salida, revisarla en exactitud, alineación y sesgo, y convertir tu proceso en una plantilla que tu equipo pueda reutilizar.",
  about: [
    "Este curso es para docentes, coordinadores pedagógicos, jefes de departamento y directores que apoyan la planeación. La IA puede reducir el tiempo de planeación, pero un plan rápido solo es bueno si es exacto, está alineado con lo que los estudiantes deben aprender y es adecuado para tus estudiantes.",
    "El capítulo 1 enseña un proceso de diseño inverso con IA: empieza por el objetivo, decide la evidencia de aprendizaje, luego construye las actividades y revísalo todo. El capítulo 2 añade la diferenciación, la planeación de unidades y cómo los líderes acompañan a los equipos para planear bien con IA.",
    "Usa descripciones de grupos inventadas. Nunca pongas nombres de estudiantes, detalles de planes IEP o 504 (planes de apoyo para estudiantes con discapacidad), calificaciones ni otros datos que los identifiquen en una herramienta que tu distrito no haya aprobado. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Este es el curso 3 de 8 de IA para líderes escolares y educativos."
  ],
  finalTask: "Usa un asistente de IA para planear una clase completa que tú (o un docente al que acompañas) vas a dar: objetivo y criterios de logro a partir de un estándar que elijas, una actividad de enganche, práctica guiada e independiente, apoyos para tres grupos (necesita más apoyo, en nivel, listo para más) y un boleto de salida de tres preguntas con respuestas. Revísala con la lista de calidad, anota qué cambiaste y por qué, y guarda tus instrucciones como plantilla para tu equipo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Docentes, coaches pedagógicos, jefes de departamento y directores de escuelas de Estados Unidos que planean clases o apoyan a docentes que lo hacen.",
    startingPoint: "Pueden usar un modelo de instrucciones para docentes y conocen las reglas de privacidad estudiantil de los cursos 1 y 2. Planean las clases a mano, y quizá usaron la IA para sacar ideas, pero no para una clase completa y revisada.",
    gap: "La IA puede reducir el tiempo de planeación, pero los planes rápidos suelen ser demasiado largos, estar desalineados o tener errores. Docentes y líderes necesitan un proceso de diseño inverso con IA, una revisión de calidad de la exactitud, la alineación y los sesgos, y una plantilla que el equipo pueda reutilizar.",
    constraints: [
      "Usa descripciones de clase inventadas; nunca pongas nombres de estudiantes, detalles del IEP o del plan 504, calificaciones ni otra información que los identifique en una herramienta que el distrito no ha aprobado",
      "Los estándares salen de la fuente oficial del estado o del distrito, no de la IA",
      "Las adaptaciones del IEP y del plan 504 se planean con colegas de educación especial y hay que darlas igual",
      "Dispositivos: una computadora con internet y un asistente de IA",
      "Tiempo: lecciones cortas que caben en una jornada de clases"
    ],
    prerequisites: "\"IA para líderes escolares y educativos 2: Herramientas de IA para educadores\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un estándar copiado de la fuente oficial", action: "escribir un objetivo de \"Puedo\" y tres criterios de logro con ayuda de la IA", standard: "editados hasta que estén listos para el pizarrón, antes de pedir actividades" },
    { id: "O2", condition: "Con tu objetivo", action: "escribir una instrucción reutilizable que le saque a la IA un borrador completo de la clase", standard: "incluyendo la duración de la clase, los conocimientos previos, los materiales y las secciones, con al menos dos preguntas de seguimiento" },
    { id: "O3", condition: "Con un borrador de clase hecho por la IA", action: "revisarlo con la lista de calidad de cinco puntos y anotar tus cambios", standard: "corrigiendo todos los problemas encontrados" },
    { id: "O4", condition: "Con una clase y un grupo descrito por sus necesidades", action: "planear apoyos para tres grupos: necesita más apoyo, en nivel y listo para más", standard: "con las adaptaciones del IEP y del plan 504 confirmadas con un colega de educación especial" },
    { id: "O5", condition: "Con la unidad a la que pertenece tu clase", action: "preparar con IA el esquema de la unidad y ajustar su ritmo", standard: "añadiendo un día de repaso y tres errores comunes que conviene prever" },
    { id: "O6", condition: "Para tu equipo o PLC", action: "convertir tus instrucciones de planeación y tu lista de revisión en una plantilla del equipo y acompañar a otros para usarla", standard: "registrando el tiempo ahorrado y los problemas de calidad" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear una clase con IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Empieza por el objetivo, no por la actividad",
          minutes: 5,
          goal: "Escribir un objetivo claro y criterios de logro antes de pedir actividades a la IA.",
          text: [
            "La IA producirá con gusto una actividad divertida que no enseña nada en particular. El diseño inverso lo evita: primero decide qué deben saber o poder hacer los estudiantes, luego cómo lo vas a ver, y después las actividades.",
            "Tú eliges el estándar. Copia su texto exacto del sitio oficial de estándares de tu estado o del currículo de tu distrito, no de la IA, porque la IA puede citar mal o inventar códigos de estándares. Luego pide a la IA que te ayude a convertirlo en un objetivo fácil de entender para los estudiantes (“Puedo...”) y dos o tres criterios de logro.",
            "Ejemplo de instrucción: “Este es un estándar: [pégalo]. Escribe un objetivo para una clase de 6.º grado en palabras fáciles para los estudiantes, y tres criterios de logro que muestren que se cumplió el objetivo.” Edítalo hasta que lo escribirías en el pizarrón."
          ],
          steps: ["Elige el estándar de la fuente de tu estado o distrito.", "Pega su texto exacto en la instrucción.", "Pide un objetivo de “Puedo” y criterios de logro.", "Edítalo hasta que sea claro para los estudiantes.", "Solo entonces planea las actividades."],
          words: [["Diseño inverso", "planear desde la meta de aprendizaje, a la evidencia, a las actividades."], ["Criterios de logro", "lo que los estudiantes podrán mostrar cuando hayan cumplido el objetivo."], ["Estándar", "la declaración oficial de lo que los estudiantes deben aprender, fijada por tu estado o distrito."]],
          slides: [
            { title: "Diseño inverso", bullets: ["1. ¿Qué deben aprender los estudiantes?", "2. ¿Cómo lo vamos a ver?", "3. Después, las actividades"] },
            { title: "Tú eliges el estándar", bullets: ["Cópialo de la fuente oficial del estado o distrito", "La IA puede citar mal o inventar códigos"] },
            { title: "Objetivo y criterios de logro", bullets: ["“Puedo...” en palabras fáciles para los estudiantes", "Dos o tres cosas que los estudiantes mostrarán"] }
          ],
          tryIt: "Elige un estándar para una clase próxima. Cópialo de la fuente oficial y usa la IA para escribir un objetivo de “Puedo” y tres criterios de logro. Edítalos hasta que estén listos para el pizarrón.",
          youCanNow: "empezar un plan de clase con IA a partir de un estándar real, un objetivo y criterios de logro.",
          quickCheck: [
            { objective: "O1", q: "¿Qué son los criterios de logro?", options: ["Las calificaciones que tuvieron los estudiantes el año pasado", "Lo que los estudiantes mostrarán cuando logren el objetivo", "La lista de materiales", "Las metas del docente para el año"], answer: 1, why: "Los criterios de logro describen la evidencia de aprendizaje del objetivo." },
            { objective: "O1", q: "La IA te da un código de estándar para tu objetivo. ¿Qué harías?", options: ["Usarlo, porque la IA conoce los estándares", "Pedirle a la IA que lo revise otra vez", "Copiar el estándar de la fuente oficial de tu estado o distrito en su lugar", "Dejar fuera el estándar"], answer: 2, why: "La IA puede citar mal o inventar estándares, así que salen de la fuente oficial." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pedir la clase completa",
          minutes: 6,
          goal: "Obtener de la IA un borrador estructurado de plan de clase con una instrucción reutilizable.",
          text: [
            "Con el objetivo definido, pide la clase completa en el formato de tu escuela. Una buena instrucción incluye: grado y materia, duración de la clase, el objetivo y los criterios de logro, lo que los estudiantes ya saben, los materiales que tienes y las secciones que quieres.",
            "Ejemplo: “Planea una clase de 50 minutos de 6.º grado. Objetivo: [pégalo]. Criterios de logro: [pégalos]. Los estudiantes ya saben [x]. Materiales: pizarras individuales, un proyector, sin dispositivos. Secciones: enganche (5 min), minilección (10), práctica guiada (15), práctica independiente (15), boleto de salida (5). Usa una tabla con tiempo, acciones del docente y acciones de los estudiantes.”",
            "Trata el resultado como el borrador de un colega rápido pero nuevo. Haz seguimientos: “conecta el enganche con la vida de los estudiantes”, “agrega dos verificaciones de comprensión durante la minilección”, “acorta la práctica guiada a 10 minutos”."
          ],
          steps: ["Da el grado, la materia y la duración de la clase.", "Pega el objetivo y los criterios de logro.", "Di qué saben los estudiantes y qué materiales tienes.", "Enumera las secciones y los tiempos que quieres.", "Pide una tabla y mejórala con seguimientos."],
          words: [["Minilección", "un momento de enseñanza corto y enfocado."], ["Verificación de comprensión", "una forma rápida de ver si los estudiantes van entendiendo, como pulgar arriba o una respuesta en la pizarra."]],
          slides: [
            { title: "Dale contexto a la IA", bullets: ["Grado, materia, duración de la clase", "Objetivo y criterios de logro", "Conocimientos previos y materiales"] },
            { title: "Pide tu formato", bullets: ["Secciones con tiempos", "Tabla: tiempo, docente, estudiantes"] },
            { title: "Mejóralo", bullets: ["“Conecta el enganche con la vida de los estudiantes”", "“Agrega dos verificaciones de comprensión”"] }
          ],
          tryIt: "Usa el patrón de instrucción para obtener un borrador completo de clase para tu objetivo de la lección 1. Haz al menos dos seguimientos para mejorarlo.",
          youCanNow: "obtener de la IA un borrador de clase útil y estructurado, y mejorarlo con seguimientos.",
          quickCheck: [
            { objective: "O2", q: "¿Cómo debes tratar un borrador de clase hecho por la IA?", options: ["Como el borrador de un colega rápido pero nuevo", "Como un plan terminado y listo para dar", "Como un plan aprobado por tu distrito", "Como algo que hay que esconder de los colegas"], answer: 0, why: "Los borradores de la IA son rápidos, pero necesitan tu criterio antes de usarlos." },
            { objective: "O2", q: "La clase de la IA no tiene ninguna comprobación de comprensión. ¿Qué harías?", options: ["Darla tal como está", "Empezar un chat nuevo con otra herramienta", "Quitar las actividades de práctica", "Hacer una pregunta de seguimiento: \"Añade una comprobación rápida de comprensión después de la práctica guiada\""], answer: 3, why: "Las preguntas de seguimiento llenan los huecos del borrador sin empezar de nuevo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Revisar el plan: exactitud, alineación y sesgo",
          minutes: 5,
          goal: "Revisar un plan de clase de IA con una lista de calidad de cinco puntos.",
          text: [
            "Todo plan de IA necesita la revisión de un docente antes de llegar a los estudiantes. Usa cinco preguntas. Exacto: ¿son correctos todos los datos, ejemplos, fechas y respuestas? Alineado: ¿cada actividad acerca a los estudiantes al objetivo, y el boleto de salida lo mide?",
            "Nivel adecuado: ¿la dificultad y la extensión son adecuadas para estos estudiantes y este tiempo? Justo e inclusivo: ¿los ejemplos, nombres y contextos son respetuosos y variados, sin estereotipos, y accesibles para estudiantes con discapacidad y estudiantes que aprenden inglés? Factible: ¿tienes los materiales y el tiempo?",
            "Anota lo que cambiaste. Con el tiempo, esto muestra a tu equipo dónde suelen fallar los planes de IA (a menudo: demasiado contenido para el tiempo, y actividades que parecen muy activas pero no practican el objetivo)."
          ],
          steps: ["Exacto: revisa datos, ejemplos y respuestas.", "Alineado: cada actividad sirve al objetivo; el boleto de salida lo mide.", "Nivel adecuado para estos estudiantes y este tiempo.", "Justo e inclusivo: sin estereotipos; accesible.", "Factible con tus materiales; anota lo que cambiaste."],
          words: [["Alineación", "cuando los objetivos, las actividades y la evaluación coinciden."], ["Estereotipo", "una idea fija e injusta sobre un grupo de personas."], ["Accesible", "que todos los estudiantes pueden usar, incluidos los que tienen discapacidad."]],
          slides: [
            { title: "La revisión de cinco puntos", bullets: ["Exacto", "Alineado", "Nivel adecuado", "Justo e inclusivo; factible"] },
            { title: "Problemas comunes de los planes de IA", bullets: ["Demasiado contenido para el tiempo", "Actividades muy activas que no tocan el objetivo", "Respuestas incorrectas o datos inventados"] },
            { title: "Anota tus cambios", bullets: ["Muestra dónde fallan los planes de IA", "Desarrolla el criterio de tu equipo"] }
          ],
          tryIt: "Pasa tu borrador de clase por la revisión de cinco puntos. Corrige cada problema y haz una lista de los cambios que hiciste.",
          youCanNow: "revisar un plan de clase de IA en exactitud, alineación, nivel, equidad y factibilidad.",
          quickCheck: [
            { objective: "O3", q: "¿Qué significa la alineación en un plan de clase?", options: ["Que la clase está impresa con orden", "Que la clase sigue el orden del libro de texto", "Que los objetivos, las actividades y la evaluación coinciden", "Que la clase usa las herramientas más nuevas"], answer: 2, why: "Las clases alineadas practican y evalúan lo mismo que nombra el objetivo." },
            { objective: "O3", q: "El plan de la IA mete cinco actividades en una clase de 45 minutos. ¿Qué cambiarías?", options: ["Recortarlo para que quepa en el tiempo, dejando las actividades que practican el objetivo", "Dejar las cinco y apurarte", "Añadir una actividad más", "Pedir a los estudiantes que terminen en casa"], answer: 0, why: "Demasiado contenido para el tiempo es el problema más común de los planes de la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear una clase con IA",
        questions: [
          { objective: "O1", q: "En el diseño inverso, ¿qué va primero?", options: ["Una actividad divertida", "La hoja de trabajo", "Lo que los estudiantes deben aprender", "El mapa de asientos"], answer: 2, why: "Se planea desde la meta de aprendizaje." },
          { objective: "O1", q: "¿De dónde debe salir el texto del estándar?", options: ["De la fuente oficial de tu estado o distrito", "De lo que diga la IA", "De cualquier sitio web", "De la memoria"], answer: 0, why: "La IA puede citar mal o inventar estándares." },
          { objective: "O2", q: "¿Qué dato ayuda más en una instrucción para planear una clase?", options: ["Los nombres de los estudiantes con dificultades", "El teléfono del director", "Las calificaciones de los estudiantes con su nombre", "Duración de la clase, objetivo, conocimientos previos y materiales"], answer: 3, why: "El contexto mejora el plan sin datos privados." },
          { objective: "O3", q: "Una actividad de la IA es divertida pero no practica el objetivo. ¿Qué punto falla?", options: ["Exacto", "Alineado", "Factible", "Justo"], answer: 1, why: "Alineación significa que las actividades sirven al objetivo." },
          { objective: "O3", q: "¿Cuál es el problema más común de los planes de clase de IA?", options: ["Muy poco contenido", "Tiempos perfectos", "No tienen texto", "Demasiado contenido para el tiempo"], answer: 3, why: "La IA suele llenar de más el tiempo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Diferenciación, unidades y planeación en equipo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Incluir la diferenciación",
          minutes: 6,
          goal: "Usar la IA para planear apoyos para quienes necesitan más ayuda y retos para quienes están listos para más.",
          text: [
            "Describe los grupos por necesidad, nunca por nombre: “estudiantes que necesitan más apoyo con problemas de varios pasos”, “estudiantes en nivel”, “estudiantes listos para un reto mayor”. Pide a la IA el mismo objetivo alcanzado de tres formas: más andamiaje (ejemplos resueltos, inicios de oración, apoyos visuales), práctica en nivel y extensión (un problema más difícil o una tarea de transferencia).",
            "Pide apoyos que ayuden a todos: apoyos visuales claros, vocabulario con imágenes, opciones para que los estudiantes muestren lo que aprendieron. Este enfoque, planear para la variedad desde el inicio, suele llamarse Diseño Universal para el Aprendizaje (DUA, en inglés UDL); consulta las pautas UDL de CAST para saber más.",
            "Los estudiantes con IEP o plan 504 deben recibir las adaptaciones de sus planes; los apoyos generados por IA nunca las reemplazan. Consulta con el docente de educación especial y no pongas detalles de los planes en herramientas no aprobadas."
          ],
          steps: ["Describe los grupos por necesidad, no por nombre.", "Pide tres caminos hacia el mismo objetivo.", "Pide apoyos que ayuden a todos: visuales, vocabulario, opciones.", "Revisa las adaptaciones del IEP y del plan 504 con el docente de educación especial.", "Mantén los detalles de los planes fuera de herramientas no aprobadas."],
          words: [["Diferenciación", "ajustar la enseñanza para que estudiantes con necesidades distintas alcancen la misma meta."], ["Andamiaje", "apoyo temporal, como ejemplos resueltos o inicios de oración."], ["Diseño Universal para el Aprendizaje (DUA)", "planear las clases para una gran variedad de estudiantes desde el inicio."]],
          slides: [
            { title: "Grupos por necesidad, no por nombre", bullets: ["Necesita más apoyo", "En nivel", "Listo para más"] },
            { title: "Tres caminos, un objetivo", bullets: ["Andamiaje: ejemplos, inicios de oración, visuales", "Práctica en nivel", "Extensión o tarea de transferencia"] },
            { title: "Apoyos para todos", bullets: ["Visuales, vocabulario, opciones", "DUA: consulta las pautas UDL de CAST"] },
            { title: "IEP y planes 504", bullets: ["Las adaptaciones obligatorias siguen vigentes", "Los apoyos de IA nunca las reemplazan"] }
          ],
          tryIt: "Agrega diferenciación a tu clase: pide a la IA tres caminos hacia el objetivo, revísalos y confirma qué adaptaciones del IEP o del plan 504 todavía debes planear con tu colega de educación especial.",
          youCanNow: "planear apoyos y retos para distintos estudiantes con IA respetando las adaptaciones obligatorias.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es el andamiaje?", options: ["Darles trabajo extra a los estudiantes avanzados", "Apoyos como ejemplos resueltos e inicios de frase", "Evaluar a los estudiantes antes de una clase", "Sentar a los estudiantes en grupos"], answer: 1, why: "Los andamiajes ayudan a los estudiantes a llegar a la misma meta con apoyo." },
            { objective: "O4", q: "La IA sugiere apoyos distintos de la adaptación del IEP de un estudiante. ¿Qué haces?", options: ["Usar los apoyos de la IA en su lugar", "Pedirle a la IA que decida", "Dejar los dos y enseñar como siempre", "Dar la adaptación del IEP y planear con tu colega de educación especial"], answer: 3, why: "Las adaptaciones del IEP y del plan 504 hay que darlas igual, sugiera lo que sugiera la IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "De la clase a la unidad",
          minutes: 5,
          goal: "Preparar con IA el esquema de una unidad y revisar su ritmo.",
          text: [
            "Una unidad es una secuencia de clases hacia metas más amplias. Da a la IA los estándares de la unidad (de tu fuente oficial), el número de días de clase, los feriados o días de exámenes, y el punto de partida de los estudiantes. Pide un esquema día por día con objetivos, actividades clave y puntos de control.",
            "Revisa primero el ritmo: la IA suele meter demasiado. Asegúrate de que cada clase se apoye en la anterior, de que haya días de repaso y un plan para volver a enseñar, y de que la evaluación final de la unidad coincida con los objetivos.",
            "Usa la IA para lluvias de ideas, que es lo que hace bien: un proyecto del mundo real que dé sentido a la unidad, errores comunes de los estudiantes que conviene prever y preguntas que hagan pensar. Tú decides qué encaja."
          ],
          steps: ["Da los estándares de la unidad, el número de días y los huecos del calendario.", "Pide un esquema día por día con objetivos y puntos de control.", "Revisa el ritmo: recorta, agrega días de repaso y para volver a enseñar.", "Revisa que la evaluación final coincida con los objetivos.", "Usa la IA para pensar en concepciones erróneas y proyectos ancla."],
          words: [["Unidad", "un conjunto de clases que avanzan hacia metas de aprendizaje más amplias."], ["Ritmo", "cuánto se enseña cada día y qué tan rápido avanza el grupo."], ["Concepción errónea", "una idea equivocada común que tienen los estudiantes sobre un tema."]],
          slides: [
            { title: "Da el contexto de la unidad", bullets: ["Estándares de la fuente oficial", "Número de días y huecos del calendario", "Punto de partida de los estudiantes"] },
            { title: "Revisa el ritmo", bullets: ["La IA suele meter demasiado", "Agrega días de repaso y para volver a enseñar", "La evaluación coincide con los objetivos"] },
            { title: "Lluvia de ideas con IA", bullets: ["Concepciones erróneas comunes", "Proyectos ancla", "Preguntas que hacen pensar"] }
          ],
          tryIt: "Pide a la IA un esquema de diez días de la unidad a la que pertenece tu clase. Ajusta el ritmo, agrega un día de repaso y anota tres concepciones erróneas que debes prever.",
          youCanNow: "preparar el esquema de una unidad con IA y ajustar su ritmo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debe incluir una instrucción para el esquema de una unidad?", options: ["Los estándares, el número de días y los huecos del calendario", "Los nombres y las calificaciones de los estudiantes", "Solo el título de la unidad", "El sueldo del docente"], answer: 0, why: "Los días y los huecos del calendario permiten que la IA proponga un ritmo realista." },
            { objective: "O5", q: "El esquema de la IA cubre la unidad en diez días sin ningún repaso. ¿Qué harías?", options: ["Aceptarlo tal como está", "Añadir tres unidades más", "Ajustar el ritmo y añadir un día de repaso", "Quitar la evaluación"], answer: 2, why: "El ritmo es lo primero que hay que revisar, y muchas veces falta el tiempo de repaso." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Acompañar a equipos para planear con IA",
          minutes: 6,
          goal: "Convertir tu proceso de planeación en una plantilla y acompañar a un equipo para usarla.",
          text: [
            "Los líderes multiplican las buenas prácticas al hacerlas repetibles. Convierte lo que aprendiste en una plantilla de planeación: las instrucciones para el objetivo, la clase completa, la diferenciación y la unidad, más la lista de calidad de cinco puntos.",
            "Úsala en una reunión de equipo o de comunidad profesional de aprendizaje (PLC, por sus siglas en inglés): cada docente planea una clase con la plantilla, luego las parejas intercambian planes y aplican la revisión de calidad al plan del otro. Conversen sobre lo que la IA hizo mal; eso desarrolla un criterio compartido más rápido que cualquier diapositiva de capacitación.",
            "Fija expectativas: los planes con ayuda de IA son bienvenidos, y los docentes siguen siendo responsables de lo que enseñan. Asegúrate de que solo se usen herramientas aprobadas y de que no se ingrese información de estudiantes. Pide a los docentes que anoten el tiempo ahorrado y los problemas de calidad, para saber si la práctica funciona."
          ],
          steps: ["Escribe la plantilla de planeación: cuatro instrucciones y la lista.", "En una reunión de equipo, cada docente planea una clase con ella.", "Las parejas intercambian y aplican la revisión de calidad.", "Conversen sobre lo que la IA hizo mal.", "Fija expectativas y registra el tiempo ahorrado y los problemas de calidad."],
          words: [["PLC", "comunidad profesional de aprendizaje: un equipo de docentes que se reúne para mejorar juntos la enseñanza."], ["Plantilla", "un formato inicial reutilizable."]],
          slides: [
            { title: "Hazlo repetible", bullets: ["Cuatro instrucciones: objetivo, clase, diferenciación, unidad", "Más la lista de cinco puntos"] },
            { title: "Práctica en equipo", bullets: ["Cada docente planea una clase", "Las parejas intercambian y revisan", "Conversen sobre lo que la IA hizo mal"] },
            { title: "Expectativas claras", bullets: ["Los docentes responden por lo que enseñan", "Herramientas aprobadas, sin datos de estudiantes", "Registra el tiempo ahorrado y la calidad"] }
          ],
          tryIt: "Tarea final: termina tu plan de clase completo (objetivo, criterios de logro, enganche, práctica guiada e independiente, tres grupos, boleto de salida con respuestas), revísalo con la lista de cinco puntos, anota tus cambios y guarda tus cuatro instrucciones y la lista como plantilla del equipo.",
          youCanNow: "planear clases con IA con un alto nivel de calidad y ayudar a un equipo a hacer lo mismo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué debe incluir una plantilla de planeación del equipo?", options: ["Solo la clase final", "Las instrucciones y la lista de calidad", "Una lista de herramientas prohibidas", "La contraseña de la herramienta de IA"], answer: 1, why: "Las instrucciones más la lista de revisión permiten que otros repitan el proceso y las revisiones." },
            { objective: "O6", q: "Quieres saber si planear con IA está ayudando a tu equipo. ¿Qué registras?", options: ["Cuántas instrucciones escribe cada docente", "Qué herramienta de IA es la más nueva", "Nada; preguntas una vez al año", "El tiempo ahorrado y los problemas de calidad encontrados"], answer: 3, why: "El tiempo ahorrado y los problemas de calidad muestran si el proceso funciona." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Diferenciación, unidades y planeación en equipo",
        questions: [
          { objective: "O4", q: "¿Cómo debes describir los grupos de estudiantes en una instrucción?", options: ["Por nombre", "Por calificación y nombre", "Por necesidad, como “necesita más apoyo con problemas de varios pasos”", "Por el ingreso de la familia"], answer: 2, why: "Describe necesidades sin identificar a los estudiantes." },
          { objective: "O4", q: "El IEP de un estudiante indica una adaptación. La IA sugirió apoyos distintos. ¿Qué aplica?", options: ["La adaptación del IEP debe darse de todos modos", "Los apoyos de la IA reemplazan el IEP", "Ninguno", "Pedir a la IA que decida"], answer: 0, why: "Las sugerencias de la IA no reemplazan las adaptaciones obligatorias." },
          { objective: "O5", q: "¿Qué es lo primero que debes revisar en el esquema de unidad de la IA?", options: ["El tipo de letra", "El ritmo", "El título", "Los colores"], answer: 1, why: "La IA suele meter demasiado." },
          { objective: "O6", q: "En una PLC, ¿por qué las parejas revisan los planes de IA del otro?", options: ["Para formar un criterio compartido sobre dónde falla la IA", "Para calificar a los docentes", "Para no planear", "Para usar más IA"], answer: 0, why: "Conversar sobre los errores desarrolla el criterio del equipo." },
          { objective: "O6", q: "¿Quién es responsable de una clase con ayuda de IA que se da en el aula?", options: ["La empresa de IA", "Nadie", "Los estudiantes", "El docente"], answer: 3, why: "Los docentes siguen siendo responsables de lo que enseñan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 3: IA para planear clases",
    questions: [
      { objective: "O1", q: "¿En qué orden planea el diseño inverso?", options: ["Actividades, meta, evidencia", "Meta, evidencia, actividades", "Hoja de trabajo, examen, meta", "Evidencia, actividades, meta"], answer: 1, why: "Se empieza por la meta." },
      { objective: "O1", q: "Los criterios de logro describen:", options: ["La distribución del salón", "El sueldo del docente", "Lo que los estudiantes mostrarán al cumplir el objetivo", "El horario de timbres"], answer: 2, why: "Hacen visible el objetivo." },
      { objective: "O1", q: "Un objetivo de “Puedo” es:", options: ["Una calificación", "Un eslogan", "El objetivo en palabras fáciles para los estudiantes", "Una regla"], answer: 2, why: "Los estudiantes deben entender la meta." },
      { objective: "O1", q: "¿Por qué no tomar los códigos de estándares de la IA?", options: ["La IA puede citarlos mal o inventarlos", "Son secretos", "La IA nunca conoce los estándares", "Son demasiado largos"], answer: 0, why: "Usa la fuente oficial." },
      { objective: "O2", q: "Una instrucción para una clase completa debe incluir:", options: ["Calificaciones con nombre", "Nombres de estudiantes", "Correos de los padres", "Duración, objetivo, conocimientos previos, materiales, secciones"], answer: 3, why: "Contexto, no datos privados." },
      { objective: "O2", q: "Un borrador de clase de la IA debe tratarse como:", options: ["El plan final", "El borrador de un colega rápido pero nuevo", "Un documento legal", "El trabajo de un estudiante"], answer: 1, why: "Los docentes lo revisan y editan." },
      { objective: "O2", q: "Una verificación de comprensión es:", options: ["Una reunión con padres", "Un cheque bancario", "Una boleta de calificaciones", "Una forma rápida de ver si los estudiantes van entendiendo"], answer: 3, why: "Detecta la confusión a tiempo." },
      { objective: "O3", q: "¿Qué forma parte de la revisión de cinco puntos?", options: ["El más largo", "El más colorido", "Justo e inclusivo", "El más popular"], answer: 2, why: "La equidad y el acceso son parte de la calidad." },
      { objective: "O3", q: "Alineación significa:", options: ["Objetivos, actividades y evaluación coinciden", "Pupitres en filas", "El plan es largo", "La IA estuvo de acuerdo"], answer: 0, why: "Todo sirve al objetivo." },
      { objective: "O3", q: "¿Por qué anotar lo que cambiaste en un plan de IA?", options: ["Lo exige la ley", "Muestra dónde fallan los planes de IA", "Alarga el plan", "Para culpar a la IA"], answer: 1, why: "Desarrolla el criterio con el tiempo." },
      { objective: "O4", q: "Diferenciación significa:", options: ["Ajustar la enseñanza para que distintos estudiantes alcancen la misma meta", "Dar calificaciones distintas", "Separar grupos para siempre", "Usar herramientas de IA distintas"], answer: 0, why: "La misma meta, caminos distintos." },
      { objective: "O4", q: "El andamiaje incluye:", options: ["Castigos", "Quitar todo apoyo", "Un examen más difícil", "Ejemplos resueltos e inicios de oración"], answer: 3, why: "Los apoyos temporales ayudan a alcanzar la meta." },
      { objective: "O4", q: "¿Qué significa UDL (DUA)?", options: ["Unidad diaria de lección", "Diseño Universal para el Aprendizaje", "Nivel de división superior", "Inicio de sesión unificado del distrito"], answer: 1, why: "Planear para una gran variedad de estudiantes desde el inicio." },
      { objective: "O4", q: "Una tarea de extensión es para estudiantes que:", options: ["Necesitan más apoyo", "Están ausentes", "Están listos para un reto mayor", "Terminaron el año"], answer: 2, why: "Profundiza el aprendizaje de quienes están listos." },
      { objective: "O4", q: "Las adaptaciones del IEP y del plan 504:", options: ["Se ponen en cualquier herramienta de IA", "Pueden reemplazarse con apoyos de IA", "Deben darse siempre, sugiera lo que sugiera la IA", "Son opcionales"], answer: 2, why: "Son obligatorias." },
      { objective: "O5", q: "Una instrucción para el esquema de una unidad debe incluir:", options: ["Estándares, número de días y huecos del calendario", "Nombres de estudiantes", "Sueldos del personal", "Nada"], answer: 0, why: "El ritmo depende del tiempo real disponible." },
      { objective: "O5", q: "En la planeación de unidades, la IA es especialmente útil para:", options: ["Aprobar herramientas", "Decidir calificaciones", "Escribir los IEP", "Pensar en concepciones erróneas y proyectos ancla"], answer: 3, why: "La lluvia de ideas es su fuerte; tú decides qué encaja." },
      { objective: "O6", q: "Una plantilla de planeación debe incluir:", options: ["Datos de estudiantes", "Las instrucciones y la lista de calidad", "Contraseñas", "Nada"], answer: 1, why: "Hace repetibles las buenas prácticas." },
      { objective: "O6", q: "¿Qué significa PLC?", options: ["Consejo de liderazgo del director", "Tarjeta de biblioteca pública", "Calendario de planeación de clases", "Comunidad profesional de aprendizaje"], answer: 3, why: "Docentes que mejoran juntos la enseñanza." },
      { objective: "O6", q: "Para saber si planear con IA está funcionando, los líderes deben registrar:", options: ["Nada", "Solo el tiempo ahorrado", "El tiempo ahorrado y los problemas de calidad", "El número de instrucciones escritas"], answer: 2, why: "La rapidez sin calidad no es éxito." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      4,
      7,
      8,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Objetivo y criterios de logro",
        objective: "O1",
        notYet: "No hay objetivo, o el estándar no salió de una fuente oficial.",
        meets: "Un objetivo y criterios de logro a partir de un estándar copiado de la fuente oficial.",
        exceeds: "El objetivo está escrito como un \"Puedo\" claro que los estudiantes entienden."
      },
      {
        name: "Clase completa",
        objective: "O2",
        notYet: "Falta el gancho, la práctica guiada o independiente, o el boleto de salida.",
        meets: "Tiene un gancho, práctica guiada e independiente, y un boleto de salida de tres preguntas con respuestas.",
        exceeds: "Incluye una comprobación de comprensión y cabe en la duración de la clase."
      },
      {
        name: "Tres grupos",
        objective: "O4",
        notYet: "Faltan los apoyos de uno o más grupos.",
        meets: "Apoyos para necesita más apoyo, en nivel y listo para más.",
        exceeds: "Anota qué adaptaciones del IEP o del plan 504 todavía hay que planear con un colega de educación especial."
      },
      {
        name: "Calidad revisada",
        objective: "O3",
        notYet: "No se revisó, o no se anotaron los cambios.",
        meets: "Revisado con la lista de cinco puntos, con cada cambio y su razón anotados.",
        exceeds: "El registro muestra patrones de dónde se equivocó el plan de la IA."
      },
      {
        name: "Plantilla del equipo",
        objective: "O6",
        notYet: "Las instrucciones no se guardaron, o no hay lista de revisión.",
        meets: "Las instrucciones y la lista de revisión guardadas como plantilla para el equipo.",
        exceeds: "Un colega ya usó la plantilla para una clase suya."
      }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminan el curso y aprueban la tarea final (rúbrica)",
      "Equipos que usan la plantilla de planeación compartida en un plazo de 30 días (encuesta de seguimiento)",
      "Docentes que dicen ahorrar tiempo de planeación sin que baje la calidad de las clases (encuesta de seguimiento)",
      "Líderes que pasan al curso 4 de IA para líderes escolares y educativos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet y un asistente de IA, de preferencia uno aprobado por el distrito",
      "Un estándar próximo copiado de la fuente oficial del estado o del distrito",
      "La descripción de una clase inventada",
      "La lista de calidad de cinco puntos",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego planeen una clase en grupo antes de que cada docente planee la suya.",
      "Usa solo descripciones de clase inventadas; nunca nombres reales de estudiantes, detalles del IEP o del plan 504, ni calificaciones.",
      "En una PLC, pide a las parejas que revisen los planes de IA del otro con la lista de cinco puntos.",
      "Invita a un colega de educación especial a la sesión de diferenciación.",
      "Califica la tarea final con la rúbrica y pide como evidencia el registro de cambios."
    ]
  }
};

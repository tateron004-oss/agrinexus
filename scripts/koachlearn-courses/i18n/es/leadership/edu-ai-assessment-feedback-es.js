"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-assessment-feedback.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-assessment-feedback-es",
  lang: "es",
  translationOf: "edu-ai-assessment-feedback",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 4: IA para la evaluación y la retroalimentación",
  skills: "Escribir preguntas de evaluación alineadas con IA, Crear rúbricas, Diseñar verificaciones formativas rápidas, Redactar retroalimentación que el docente hace suya, Proteger el trabajo y las calificaciones de los estudiantes, Manejar con justicia las sospechas de escritura con IA",
  outcome: "crear con IA un paquete de evaluación (preguntas alineadas con una clave revisada, una rúbrica de cuatro niveles con una versión para estudiantes, un boleto de salida y un banco de comentarios) y usarlo con un proceso de retroalimentación que protege la privacidad de los estudiantes y deja cada calificación en manos del docente.",
  about: [
    "Este curso es para docentes, coordinadores pedagógicos, responsables de evaluación y directores. La evaluación y la retroalimentación ocupan gran parte del tiempo docente, y la IA puede ayudar, pero las calificaciones y los juicios sobre los estudiantes tienen mucho peso. Este curso muestra dónde ayuda la IA y dónde no debe decidir.",
    "El capítulo 1 usa la IA para crear evaluaciones: preguntas alineadas, rúbricas y verificaciones formativas rápidas. El capítulo 2 trata de la retroalimentación: un proceso en el que la IA redacta y el docente decide, cómo proteger el trabajo de los estudiantes según FERPA (la ley federal de privacidad de los registros educativos) y cómo manejar con justicia la sospecha de uso de IA en un trabajo.",
    "Practica solo con trabajos inventados o con trabajos a los que les quitaste todo dato identificador, y usa solo herramientas que tu distrito haya aprobado para trabajos de estudiantes. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Este es el curso 4 de 8 de IA para líderes escolares y educativos."
  ],
  finalTask: "Crea un paquete de evaluación para un objetivo: cinco preguntas alineadas con una clave que revisaste, una rúbrica de cuatro niveles con tres o cuatro criterios y una versión para estudiantes, un boleto de salida de tres preguntas y un banco de al menos ocho comentarios ligados a la rúbrica. Prueba el proceso de retroalimentación con tres respuestas inventadas, cambia al menos un comentario redactado por la IA y escribe tú las calificaciones.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Docentes, coaches pedagógicos, responsables de evaluación y directores de escuelas de Estados Unidos que escriben evaluaciones, dan retroalimentación o apoyan a docentes que lo hacen.",
    startingPoint: "Pueden planear una clase con IA y revisarla, y conocen lo básico de FERPA de los cursos anteriores. Escriben las evaluaciones y la retroalimentación a mano, y quizá no saben bien cómo responder cuando sospechan que un estudiante usó IA.",
    gap: "La evaluación y la retroalimentación ocupan gran parte del tiempo de los docentes, y la IA puede ayudar, pero las calificaciones tienen mucho peso. Los educadores necesitan crear con IA evaluaciones alineadas, usar un proceso en el que la IA redacta y el docente decide, proteger el trabajo de los estudiantes y manejar con justicia la sospecha de uso de IA.",
    constraints: [
      "Practicar solo con trabajos de estudiantes inventados o con trabajos a los que se les quitó todo dato que identifique",
      "Usar solo herramientas que el distrito aprobó para el trabajo de los estudiantes",
      "Los docentes deciden cada calificación; la IA nunca califica a los estudiantes por su cuenta",
      "El puntaje de un detector de escritura con IA nunca es la única evidencia de mal uso",
      "Tiempo: lecciones cortas que caben en una jornada de clases"
    ],
    prerequisites: "\"IA para líderes escolares y educativos 3: IA para planear clases\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un objetivo", action: "generar con IA preguntas alineadas en tres niveles y resolver cada respuesta de la clave", standard: "corrigiendo o quitando cualquier pregunta con un error o con dos respuestas posibles" },
    { id: "O2", condition: "Para una tarea que asignas", action: "crear con IA una rúbrica de cuatro niveles y una versión para estudiantes", standard: "con cada celda tan concreta que dos docentes calificarían igual el mismo trabajo" },
    { id: "O3", condition: "Para un objetivo", action: "diseñar una pregunta bisagra y un boleto de salida de tres preguntas", standard: "decidiendo antes de la verificación qué volverás a enseñar para cada respuesta incorrecta" },
    { id: "O4", condition: "Con respuestas de estudiantes y tu rúbrica", action: "usar la IA para redactar comentarios de brilla y crece, y luego editarlos y poner tú mismo las calificaciones", standard: "con al menos un comentario de la IA cambiado y cada calificación decidida por ti" },
    { id: "O5", condition: "Cuando las herramientas de IA tocan el trabajo o las calificaciones de los estudiantes", action: "aplicar lo básico de FERPA y explicar a las familias cómo se usa la IA para la retroalimentación", standard: "usando solo herramientas aprobadas y sin datos que identifiquen" },
    { id: "O6", condition: "Cuando sospechas un mal uso de la IA en un trabajo", action: "responder con un proceso justo y una regla clara de uso de IA para cada tarea", standard: "sin usar nunca el puntaje de un detector como única evidencia" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Crear evaluaciones con IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escribir preguntas alineadas y revisar la clave",
          minutes: 5,
          goal: "Generar preguntas de evaluación que coincidan con un objetivo y verificar las respuestas.",
          text: [
            "Da a la IA el objetivo y los criterios de logro (como en el curso 3), el grado y el tipo de preguntas que quieres: opción múltiple, respuesta corta, un problema para resolver o una tarea para explicar el razonamiento. Pide preguntas de distintos niveles de pensamiento: recordar, aplicar, y explicar o analizar.",
            "Pide una clave con una breve razón para cada respuesta y, en las de opción múltiple, por qué cada opción incorrecta resulta tentadora. Las opciones incorrectas que reflejan errores reales de comprensión te dicen más sobre cómo piensan los estudiantes.",
            "Luego revisa tú cada pregunta. Las claves de la IA tienen errores, las preguntas de opción múltiple pueden tener dos respuestas correctas y la redacción puede confundir a los estudiantes que aprenden inglés. Quita cualquier pregunta que no mida el objetivo."
          ],
          steps: ["Da el objetivo, los criterios de logro, el grado y los tipos de pregunta.", "Pide una mezcla: recordar, aplicar, explicar.", "Pide una clave con razones y por qué tientan las opciones incorrectas.", "Resuelve cada respuesta y lee cada pregunta buscando claridad.", "Quita las preguntas que no midan el objetivo."],
          words: [["Pregunta alineada", "una pregunta que mide el objetivo que debe medir."], ["Distractor", "una opción incorrecta en una pregunta de opción múltiple."], ["Clave", "la lista de respuestas correctas."]],
          slides: [
            { title: "Dile a la IA qué medir", bullets: ["Objetivo y criterios de logro", "Grado y tipos de pregunta", "Recordar, aplicar, explicar"] },
            { title: "Pide una clave con razones", bullets: ["Por qué cada respuesta es correcta", "Por qué tienta cada opción incorrecta", "Distractores que revelan errores de comprensión"] },
            { title: "Revisa cada pregunta", bullets: ["Las claves tienen errores", "¿Dos respuestas correctas? ¿Redacción confusa?", "Quita las que se salen del objetivo"] }
          ],
          tryIt: "Pide a la IA seis preguntas sobre un objetivo en tres niveles, con clave. Resuelve tú cada respuesta y cuenta los errores o preguntas poco claras.",
          youCanNow: "escribir preguntas de evaluación alineadas con IA y revisar la clave.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un distractor en una pregunta de opción múltiple?", options: ["Una opción incorrecta de la lista", "Una pregunta demasiado difícil", "Un ruido en el salón", "La respuesta correcta"], answer: 0, why: "Los buenos distractores reflejan errores de comprensión reales, y eso muestra cómo piensan los estudiantes." },
            { objective: "O1", q: "Resuelves la clave de respuestas de la IA y una respuesta está mal. ¿Qué harías?", options: ["Dejarla; los estudiantes no lo notarán", "Pedirle a la IA que vuelva a calificar a la clase", "Corregir la clave y revisar con cuidado el resto de las preguntas", "Quitar todas las preguntas"], answer: 2, why: "Resolver cada respuesta detecta los errores antes de calificar a los estudiantes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Crear una rúbrica que los estudiantes entiendan",
          minutes: 6,
          goal: "Crear con IA una rúbrica de cuatro niveles y una versión para estudiantes.",
          text: [
            "Una rúbrica describe la calidad en cada nivel para cada criterio. Pide a la IA una rúbrica analítica: tres o cuatro criterios tomados de tus criterios de logro, cuatro niveles (por ejemplo: inicial, en desarrollo, competente, avanzado) y una breve descripción de cómo se ve el trabajo en cada nivel.",
            "Las buenas descripciones de nivel dicen lo que está presente, no solo “más” o “menos”: “usa dos pruebas y explica cómo cada una apoya la afirmación” es mejor que “buen uso de la evidencia”. Pide a la IA que reescriba las celdas vagas.",
            "Después pide una versión para estudiantes en primera persona (“Yo...”) y prueba ambas con un ejemplo: ¿un trabajo encaja claramente en un nivel? Una rúbrica solo es justa si dos docentes calificarían igual el mismo trabajo."
          ],
          steps: ["Da la tarea y los criterios de logro.", "Pide 3-4 criterios y 4 niveles.", "Reescribe las celdas vagas para decir lo que está presente en el trabajo.", "Pide una versión para estudiantes en primera persona.", "Pruébala con un ejemplo: ¿coincidirían dos docentes?"],
          words: [["Rúbrica", "una guía de calificación que describe la calidad en distintos niveles."], ["Criterio", "una cualidad que se evalúa, como el uso de la evidencia."], ["Rúbrica analítica", "una rúbrica que califica cada criterio por separado."]],
          slides: [
            { title: "Rúbrica analítica", bullets: ["3-4 criterios tomados de los criterios de logro", "4 niveles cada uno", "Una descripción breve por celda"] },
            { title: "Describe lo que está presente", bullets: ["No “buen uso de la evidencia”", "Sino “dos pruebas, cada una explicada”"] },
            { title: "Que sea justa y clara", bullets: ["Versión para estudiantes en primera persona", "¿Coincidirían dos docentes?"] }
          ],
          tryIt: "Crea con IA una rúbrica de cuatro niveles para una tarea que asignas. Reescribe las celdas vagas, haz la versión para estudiantes y pruébala con una respuesta inventada.",
          youCanNow: "crear con IA una rúbrica clara de cuatro niveles y una versión para estudiantes.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es una rúbrica analítica?", options: ["Una rúbrica con un solo puntaje general", "Una rúbrica que califica cada criterio por separado", "Una rúbrica escrita por la IA", "Una lista de materiales"], answer: 1, why: "Las rúbricas analíticas dan niveles separados para cada criterio." },
            { objective: "O2", q: "Una celda de la rúbrica dice \"buen uso de la evidencia\". ¿Qué cambiarías?", options: ["Nada, está clara", "Quitar la celda", "Añadir la palabra \"muy\"", "Decir exactamente lo que hacen los estudiantes, como \"usa dos evidencias y explica cada una\""], answer: 3, why: "Las celdas concretas hacen justa la calificación y ayudan a los estudiantes a saber qué hacer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Verificaciones formativas rápidas",
          minutes: 5,
          goal: "Diseñar boletos de salida y verificaciones durante la clase que muestren quién necesita qué después.",
          text: [
            "La evaluación formativa es revisar el aprendizaje mientras enseñas para poder ajustar. Es de bajo riesgo y rápida. La IA es buena para producir muchas verificaciones cortas: boletos de salida de tres preguntas, una pregunta bisagra a mitad de clase, problemas rápidos en la pizarra individual.",
            "Una pregunta bisagra tiene opciones diseñadas para que cada respuesta incorrecta muestre un error de comprensión específico. Pide a la IA: “Escribe una pregunta bisagra de opción múltiple para [objetivo]. Cada respuesta incorrecta debe revelar un error de comprensión común distinto; explica cuál.”",
            "Planea qué harás con los resultados antes de aplicar la verificación: quién recibe una nueva explicación y quién avanza. Una verificación que no usas para actuar es solo más papel."
          ],
          steps: ["Elige el momento: a mitad o al final de la clase.", "Pide a la IA una pregunta bisagra o un boleto de salida de tres preguntas.", "Revisa que cada respuesta incorrecta apunte a un error de comprensión real.", "Decide de antemano qué harás con cada resultado.", "Actúa al día siguiente."],
          words: [["Evaluación formativa", "verificaciones de bajo riesgo durante el aprendizaje, usadas para ajustar la enseñanza."], ["Boleto de salida", "una tarea corta que los estudiantes hacen al final de una clase."], ["Pregunta bisagra", "una pregunta en la que cada respuesta incorrecta revela un error de comprensión específico."]],
          slides: [
            { title: "Formativa = verificar y ajustar", bullets: ["De bajo riesgo y rápida", "Boletos de salida, preguntas bisagra, pizarras"] },
            { title: "Preguntas bisagra", bullets: ["Una pregunta a mitad de clase", "Cada respuesta incorrecta = un error de comprensión", "Pide a la IA que explique cuál"] },
            { title: "Planea la respuesta", bullets: ["¿Quién recibe una nueva explicación?", "¿Quién avanza?", "Las verificaciones sin uso son solo papel"] }
          ],
          tryIt: "Pide a la IA una pregunta bisagra y un boleto de salida de tres preguntas para tu objetivo. Para cada respuesta incorrecta de la pregunta bisagra, escribe qué volverías a enseñar.",
          youCanNow: "diseñar verificaciones formativas rápidas y planear qué hacer con los resultados.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es la evaluación formativa?", options: ["El examen final", "Una prueba estatal", "Revisiones de poco peso durante el aprendizaje para ajustar la enseñanza", "Una calificación de conducta"], answer: 2, why: "Las revisiones formativas te dicen qué enseñar después." },
            { objective: "O3", q: "La mitad de la clase elige la misma respuesta incorrecta en la pregunta bisagra. ¿Qué haces?", options: ["Vuelves a enseñar el error de comprensión que revela esa respuesta", "Pasas a la siguiente clase", "Les bajas la calificación a todos", "Le pides a la IA que califique la pregunta bisagra"], answer: 0, why: "Cada respuesta incorrecta de la pregunta bisagra señala un error de comprensión que puedes volver a enseñar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Crear evaluaciones con IA",
        questions: [
          { objective: "O1", q: "¿Por qué pedir a la IA que explique por qué tienta cada opción incorrecta?", options: ["Alarga la prueba", "Para engañar a los estudiantes injustamente", "Los distractores que reflejan errores de comprensión muestran cómo piensan los estudiantes", "Es obligatorio"], answer: 2, why: "Los buenos distractores revelan errores de comprensión." },
          { objective: "O1", q: "Una pregunta de opción múltiple de la IA tiene dos respuestas que podrían ser correctas. Debes:", options: ["Corregirla o quitarla", "Dejarla", "Aceptar cualquiera de las dos", "Dar puntaje completo a todos"], answer: 0, why: "Cada pregunta necesita una sola respuesta claramente correcta." },
          { objective: "O2", q: "¿Qué celda de rúbrica está mejor escrita?", options: ["“Buena evidencia”", "“Más evidencia”", "“Buen trabajo”", "“Usa dos pruebas y explica cómo cada una apoya la afirmación”"], answer: 3, why: "Describe lo que está presente en el trabajo." },
          { objective: "O3", q: "¿Qué es una pregunta bisagra?", options: ["Una pregunta sobre puertas", "Una pregunta en la que cada respuesta incorrecta revela un error de comprensión", "Una pregunta del examen final", "Una pregunta de tarea"], answer: 1, why: "Muestra qué volver a enseñar a mitad de clase." },
          { objective: "O3", q: "¿Cuándo debes decidir qué hacer con los resultados del boleto de salida?", options: ["Solo si la mayoría reprueba", "Nunca", "Al final del año", "Antes de aplicar la verificación"], answer: 3, why: "Planear la respuesta hace útil la verificación." }
        ]
      }
    },
    {
      name: "Capítulo 2: Retroalimentación que el docente hace suya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Un proceso de retroalimentación: la IA redacta, el docente decide",
          minutes: 6,
          goal: "Usar la IA para redactar retroalimentación ligada a una rúbrica, y luego editarla y hacerla tuya.",
          text: [
            "La buena retroalimentación es específica, está ligada a los criterios y le dice al estudiante qué hacer después. Un banco de comentarios ayuda: pide a la IA dos o tres comentarios por criterio y nivel de la rúbrica, cada uno con una fortaleza (“brilla”) y un siguiente paso (“crece”).",
            "Proceso: primero lee tú el trabajo del estudiante y decide el nivel de la rúbrica. Luego elige o redacta comentarios, usando la IA para ajustar la redacción si hace falta. Si usas la IA para redactar comentarios sobre trabajos reales, hazlo solo en una herramienta que tu distrito haya aprobado para trabajos de estudiantes, y quita nombres y datos identificadores.",
            "Tú escribes la calificación. Las calificaciones de la IA pueden ser inconsistentes, pueden premiar la extensión sobre la calidad y pueden ser injustas con estudiantes que aprenden inglés y estudiantes con discapacidad. Edita cada comentario para que suene a ti y se ajuste al estudiante; los estudiantes notan la retroalimentación genérica."
          ],
          steps: ["Crea un banco de comentarios por criterio y nivel: brilla y crece.", "Lee tú el trabajo y elige el nivel de la rúbrica.", "Elige o ajusta comentarios; usa solo herramientas aprobadas para trabajos reales.", "Quita nombres y datos identificadores.", "Escribe tú la calificación; edita cada comentario."],
          words: [["Banco de comentarios", "un conjunto guardado de comentarios de retroalimentación que puedes reutilizar y ajustar."], ["Brilla y crece", "retroalimentación con una fortaleza y un siguiente paso."]],
          slides: [
            { title: "Buena retroalimentación", bullets: ["Específica y ligada a los criterios", "Una fortaleza, un siguiente paso"] },
            { title: "El proceso", bullets: ["Tú lees el trabajo y eliges el nivel", "Eliges o ajustas comentarios", "Solo herramientas aprobadas para trabajos reales; sin nombres"] },
            { title: "Tú escribes la calificación", bullets: ["Las calificaciones de la IA pueden ser inconsistentes", "Pueden premiar la extensión sobre la calidad", "Edita para que suene a ti"] }
          ],
          tryIt: "Crea un banco de ocho comentarios de brilla y crece para tu rúbrica. Escribe tres respuestas de estudiantes inventadas, califícalas tú y elige y edita comentarios para cada una.",
          youCanNow: "llevar un proceso de retroalimentación en el que la IA ayuda a redactar y tú decides.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un banco de comentarios?", options: ["Retroalimentación que la IA envía a los estudiantes por su cuenta", "Comentarios de retroalimentación guardados que reutilizas y ajustas", "Una lista de calificaciones", "Una cuenta bancaria para los fondos de la escuela"], answer: 1, why: "Un banco de comentarios ahorra tiempo, y el docente sigue eligiendo y editando cada comentario." },
            { objective: "O4", q: "La IA redacta un comentario que no corresponde al trabajo de un estudiante. ¿Qué harías?", options: ["Enviarlo de todos modos", "Dejar que la IA cambie la calificación", "No darle retroalimentación a ese estudiante", "Editar el comentario para que corresponda al trabajo, y mantener tu propia calificación"], answer: 3, why: "La IA redacta y el docente decide, así que cada comentario y cada calificación son tuyos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger el trabajo y las calificaciones de los estudiantes",
          minutes: 5,
          goal: "Aplicar lo básico de FERPA al trabajo, las calificaciones y las herramientas de IA.",
          text: [
            "El trabajo y las calificaciones de los estudiantes que guarda la escuela suelen formar parte de los registros educativos según FERPA. Compartir información personal identificable de esos registros con una empresa externa normalmente requiere consentimiento, salvo que aplique una excepción; por ejemplo, un proveedor puede actuar como funcionario escolar cuando presta un servicio a la escuela, está bajo el control directo de la escuela y respeta límites para volver a compartir los datos. Por eso importan los acuerdos del distrito.",
            "Reglas prácticas para el personal: usa solo herramientas aprobadas por el distrito para trabajos reales; quita nombres y datos identificadores incluso así; nunca subas libros de calificaciones, documentos de IEP o plan 504, ni información disciplinaria a herramientas no aprobadas; y revisa en los términos de la herramienta si guarda los trabajos subidos o entrena con ellos.",
            "Informa a las familias cómo se usa la IA en la retroalimentación. Según FERPA, los padres tienen derecho a revisar los registros educativos de su hijo, y la transparencia genera confianza. Para las reglas exactas de tu distrito, consulta al responsable de privacidad."
          ],
          steps: ["Usa solo herramientas aprobadas para trabajos reales.", "Quita nombres y datos identificadores.", "Nunca subas libros de calificaciones, IEP, planes 504 ni registros disciplinarios a herramientas no aprobadas.", "Revisa si la herramienta guarda lo que subes o entrena con ello.", "Informa a las familias cómo se usa la IA en la retroalimentación."],
          words: [["Registro educativo", "un registro directamente relacionado con un estudiante y guardado por la escuela."], ["Excepción de funcionario escolar", "una regla de FERPA que permite a ciertos proveedores bajo control de la escuela acceder a registros con un fin escolar."]],
          slides: [
            { title: "Trabajos y calificaciones son registros", bullets: ["Suelen ser registros educativos según FERPA", "Compartir datos identificables suele requerir consentimiento", "Salvo que aplique una excepción"] },
            { title: "Reglas para el personal", bullets: ["Solo herramientas aprobadas para trabajos reales", "Quita los nombres de todos modos", "Nada de libros de calificaciones, IEP ni expedientes disciplinarios"] },
            { title: "Sé transparente con las familias", bullets: ["Explica cómo ayuda la IA en la retroalimentación", "Los padres pueden revisar los registros", "Pide detalles al responsable de privacidad"] }
          ],
          sources: [{ name: "FERPA: protección de la privacidad estudiantil (Departamento de Educación de EE. UU.)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Escribe una nota de tres oraciones para las familias que explique cómo tu clase o escuela usa la IA para ayudar con la retroalimentación, qué está protegido y que los docentes deciden todas las calificaciones.",
          youCanNow: "proteger el trabajo y las calificaciones de los estudiantes cuando la IA forma parte de la retroalimentación.",
          quickCheck: [
            { objective: "O5", q: "Según FERPA, ¿de qué forma parte por lo general el trabajo de un estudiante que guarda la escuela?", options: ["De los expedientes educativos", "De los registros públicos que cualquiera puede ver", "De las notas privadas del docente", "De la propiedad del proveedor"], answer: 0, why: "El trabajo de los estudiantes que guarda la escuela forma parte, por lo general, de los expedientes educativos protegidos." },
            { objective: "O5", q: "Un docente quiere ayuda de la IA para la retroalimentación de ensayos reales. ¿Qué le aconsejarías?", options: ["Pegar los ensayos en cualquier chatbot gratuito", "Subir también el registro de calificaciones, para dar contexto", "Usar solo una herramienta aprobada por el distrito, sin datos que identifiquen", "Pedir a los estudiantes que peguen sus propios ensayos en la IA"], answer: 2, why: "Las herramientas aprobadas y quitar los datos que identifican protegen los expedientes de los estudiantes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sospecha de uso de IA en un trabajo: manejarla con justicia",
          minutes: 6,
          goal: "Responder a la sospecha de uso de IA con reglas claras y un proceso justo, no con el puntaje de un detector.",
          text: [
            "Los detectores de escritura con IA pueden equivocarse. Pueden marcar trabajos honestos, y investigadores y educadores han advertido que marcan con más frecuencia los textos de estudiantes que aprenden inglés. El puntaje de un detector nunca debe ser, por sí solo, la prueba para decidir que hubo trampa.",
            "Primero, prevén: di a los estudiantes con claridad qué uso de IA se permite en cada tarea (por ejemplo: ninguno, solo para generar ideas, o permitido con una nota que diga cómo). Diseña tareas donde el pensamiento sea visible: borradores, escritura en clase, explicaciones orales, conexiones personales.",
            "Si sospechas un mal uso, habla con el estudiante: pídele que explique su trabajo, que muestre borradores o que rehaga una parte en clase. Sigue la política de integridad académica de tu escuela, involucra a la familia como esta lo indique y, cuando puedas, conviértelo en un momento de aprendizaje."
          ],
          steps: ["Indica el uso de IA permitido en cada tarea.", "Diseña tareas donde el pensamiento sea visible.", "Nunca te bases solo en el puntaje de un detector.", "Habla con el estudiante; pídele que explique o muestre borradores.", "Sigue tu política de integridad académica."],
          words: [["Integridad académica", "honestidad en el trabajo escolar: hacer tu propio trabajo y decir cuándo recibiste ayuda."], ["Falso positivo", "cuando un detector marca por error un trabajo honesto."]],
          slides: [
            { title: "Los detectores pueden equivocarse", bullets: ["Pueden marcar trabajos honestos", "Preocupa su efecto en quienes aprenden inglés", "Nunca son la única prueba"] },
            { title: "Primero, prevenir", bullets: ["Indica el uso de IA permitido en cada tarea", "Haz visible el pensamiento: borradores, diálogo, trabajo en clase"] },
            { title: "Si sospechas un mal uso", bullets: ["Habla con el estudiante", "Pídele que explique o rehaga una parte", "Sigue tu política de integridad"] }
          ],
          tryIt: "Tarea final: termina tu paquete de evaluación (cinco preguntas revisadas, rúbrica y versión para estudiantes, boleto de salida, banco de ocho comentarios), aplica el proceso de retroalimentación a tres respuestas inventadas con tus propias calificaciones y agrega una regla de una línea sobre el uso de IA en la tarea.",
          youCanNow: "usar la IA en la evaluación y la retroalimentación manteniendo las calificaciones justas, privadas y en manos del docente.",
          quickCheck: [
            { objective: "O6", q: "¿En qué se pueden equivocar los detectores de escritura con IA?", options: ["En nada; siempre aciertan", "En marcar un trabajo honesto como escrito por IA", "En calificar ensayos", "En escribir ensayos"], answer: 1, why: "Los detectores pueden marcar sin razón un trabajo honesto, así que nunca son la única evidencia." },
            { objective: "O6", q: "Sospechas que un estudiante usó IA en contra de la regla de la tarea. ¿Cuál es un primer paso justo?", options: ["Ponerle un cero de inmediato", "Contárselo a toda la clase", "Pasar el trabajo por tres detectores más", "Pedirle al estudiante que explique su trabajo o muestre sus borradores"], answer: 3, why: "Una conversación y otras evidencias son más justas que el puntaje de un detector." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Retroalimentación que el docente hace suya",
        questions: [
          { objective: "O4", q: "En el proceso de retroalimentación, ¿qué hace primero el docente?", options: ["Pegar el trabajo en cualquier herramienta de IA", "Dejar que la IA lo califique", "Leer el trabajo y elegir el nivel de la rúbrica", "Enviarlo a los padres"], answer: 2, why: "El juicio del docente va primero." },
          { objective: "O4", q: "¿Quién escribe la calificación?", options: ["El docente", "La IA", "El estudiante", "El proveedor"], answer: 0, why: "Las calificaciones son decisiones del docente." },
          { objective: "O5", q: "Según FERPA, el trabajo de los estudiantes que guarda la escuela suele ser:", options: ["Información pública", "Parte de los registros educativos", "Propiedad de la empresa de IA", "Algo no protegido"], answer: 1, why: "Los registros relacionados directamente con un estudiante y guardados por la escuela son registros educativos." },
          { objective: "O6", q: "Un detector dice que un ensayo fue escrito en un 90% con IA. ¿Qué haces?", options: ["Hablar con el estudiante y mirar otras pruebas", "Poner un cero", "Denunciar a la familia", "Ignorar todas las políticas"], answer: 0, why: "El puntaje de un detector, por sí solo, no es prueba." },
          { objective: "O6", q: "¿Qué previene mejor el mal uso de la IA?", options: ["No decir nada", "Prohibir las computadoras para siempre", "Usar más detectores", "Indicar el uso de IA permitido en cada tarea y hacer visible el pensamiento"], answer: 3, why: "Las reglas claras y el pensamiento visible previenen problemas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 4: IA para la evaluación y la retroalimentación",
    questions: [
      { objective: "O1", q: "Una pregunta alineada:", options: ["Es la más difícil", "Mide el objetivo que debe medir", "Es la más larga", "La elige solo la IA"], answer: 1, why: "La alineación es la primera prueba de una buena pregunta." },
      { objective: "O1", q: "Un distractor es:", options: ["Un teléfono", "Un estudiante ruidoso", "Una opción incorrecta en opción múltiple", "Una pregunta extra"], answer: 2, why: "Los buenos distractores revelan errores de comprensión." },
      { objective: "O1", q: "Después de que la IA escribe una clave, debes:", options: ["Imprimirla", "Confiar en ella", "Resolver tú cada respuesta", "Dársela a los estudiantes"], answer: 2, why: "Las claves tienen errores." },
      { objective: "O1", q: "Una mezcla de niveles de preguntas significa:", options: ["Recordar, aplicar y explicar", "Solo fáciles", "Solo difíciles", "Solo verdadero o falso"], answer: 0, why: "Los distintos niveles muestran distintas profundidades de aprendizaje." },
      { objective: "O2", q: "Una rúbrica analítica:", options: ["La escriben los estudiantes", "Da solo una calificación general", "No tiene niveles", "Califica cada criterio por separado"], answer: 3, why: "Cada criterio recibe su propio nivel." },
      { objective: "O2", q: "Una rúbrica para estudiantes usa:", options: ["Lenguaje legal", "Frases en primera persona (“Yo...”)", "Código", "Solo números"], answer: 1, why: "Los estudiantes deben entender la meta." },
      { objective: "O2", q: "Una rúbrica es justa cuando:", options: ["Todos sacan la nota máxima", "Es muy larga", "La escribió la IA", "Dos docentes calificarían igual el mismo trabajo"], answer: 3, why: "La consistencia es justicia." },
      { objective: "O3", q: "La evaluación formativa es:", options: ["Una boleta de calificaciones", "El examen final", "Revisar el aprendizaje con bajo riesgo para ajustar la enseñanza", "Un examen estatal"], answer: 2, why: "Orienta el siguiente paso." },
      { objective: "O3", q: "Un boleto de salida se aplica:", options: ["Al final de una clase", "Al inicio del año", "Solo los viernes", "Solo a los padres"], answer: 0, why: "Revisa el aprendizaje del día." },
      { objective: "O3", q: "Una verificación que nunca usas para actuar es:", options: ["La mejor", "Solo más papel", "Obligatoria", "Sumativa"], answer: 1, why: "Las verificaciones formativas importan cuando cambian la enseñanza." },
      { objective: "O4", q: "La retroalimentación de brilla y crece da:", options: ["Una fortaleza y un siguiente paso", "Solo elogios", "Solo críticas", "Solo una calificación"], answer: 0, why: "Los estudiantes necesitan las dos." },
      { objective: "O4", q: "Un banco de comentarios es:", options: ["Una aplicación de calificaciones", "Una cuenta de ahorros", "Una lista de estudiantes", "Comentarios guardados que reutilizas y ajustas"], answer: 3, why: "Ahorra tiempo sin perder especificidad." },
      { objective: "O4", q: "Las calificaciones de la IA pueden ser injustas porque pueden:", options: ["Ser siempre perfectas", "Premiar la extensión sobre la calidad", "No leer nunca el trabajo", "Usar la rúbrica con exactitud"], answer: 1, why: "El sesgo por extensión es un problema común." },
      { objective: "O5", q: "Para trabajos reales de estudiantes, usa:", options: ["Redes sociales", "Cualquier herramienta gratuita", "Solo herramientas aprobadas por el distrito, sin datos identificadores", "Correo personal"], answer: 2, why: "Las herramientas aprobadas y quitar los datos protegen la privacidad." },
      { objective: "O5", q: "¿Qué nunca debe ir a una herramienta de IA no aprobada?", options: ["Un boleto de salida en blanco", "Una rúbrica general", "Un libro de calificaciones", "Una respuesta inventada"], answer: 2, why: "Los libros de calificaciones contienen registros educativos identificables." },
      { objective: "O5", q: "Según FERPA, los padres pueden:", options: ["Revisar los registros educativos de su hijo", "Calificar el trabajo", "Aprobar proveedores", "Escribir la rúbrica"], answer: 0, why: "Revisar los registros es un derecho central de FERPA." },
      { objective: "O5", q: "Un proveedor puede actuar como funcionario escolar cuando:", options: ["Tiene muchos usuarios", "Es gratuito", "Lo pide con amabilidad", "Presta un servicio escolar bajo el control directo de la escuela, con límites para volver a compartir"], answer: 3, why: "Esas son las condiciones de FERPA." },
      { objective: "O6", q: "Los detectores de escritura con IA:", options: ["Siempre aciertan", "Pueden marcar por error trabajos honestos", "Son obligatorios por ley", "Prueban la trampa"], answer: 1, why: "Los falsos positivos ocurren." },
      { objective: "O6", q: "Si sospechas un mal uso de la IA, un primer paso justo es:", options: ["Ignorar tu política", "Poner un cero", "Publicarlo", "Pedir al estudiante que explique su trabajo o muestre borradores"], answer: 3, why: "Conversar permite reunir pruebas reales." },
      { objective: "O6", q: "Cada tarea debe indicar:", options: ["Que la IA siempre está prohibida", "Nada sobre la IA", "Qué uso de IA se permite", "La calificación del estudiante"], answer: 2, why: "Las reglas claras evitan malentendidos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      6,
      7,
      10,
      12,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Preguntas alineadas",
        objective: "O1",
        notYet: "Menos de cinco preguntas, o no se revisó la clave.",
        meets: "Cinco preguntas alineadas al objetivo con una clave que resolviste tú mismo.",
        exceeds: "Las preguntas mezclan recordar, aplicar y explicar, y los distractores reflejan errores de comprensión reales."
      },
      {
        name: "Rúbrica",
        objective: "O2",
        notYet: "Menos de cuatro niveles, celdas vagas o sin versión para estudiantes.",
        meets: "Una rúbrica de cuatro niveles con tres o cuatro criterios y una versión para estudiantes.",
        exceeds: "Cada celda describe lo que hacen los estudiantes, y se probó con una respuesta inventada."
      },
      {
        name: "Boleto de salida",
        objective: "O3",
        notYet: "No hay boleto de salida, o no corresponde al objetivo.",
        meets: "Un boleto de salida de tres preguntas para el objetivo.",
        exceeds: "Dice qué harás con cada resultado antes de aplicarlo."
      },
      {
        name: "Proceso de retroalimentación",
        objective: "O4",
        notYet: "Menos de ocho comentarios, comentarios de la IA usados sin cambios, o la IA puso las calificaciones.",
        meets: "Al menos ocho comentarios ligados a la rúbrica, tres respuestas inventadas, un comentario de la IA cambiado y las calificaciones puestas por ti.",
        exceeds: "Cada respuesta recibe un brilla y un crece ligados a un nivel de la rúbrica."
      },
      {
        name: "Privacidad y uso justo de la IA",
        objective: "O6",
        notYet: "Se usaron datos reales de estudiantes, o la tarea no tiene regla de uso de IA.",
        meets: "Solo se usaron trabajos inventados, y la tarea tiene una regla de uso de IA de una línea.",
        exceeds: "Incluye una nota corta para las familias sobre cómo ayuda la IA con la retroalimentación y quién decide las calificaciones."
      }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminan el curso y aprueban la tarea final (rúbrica)",
      "Docentes que dicen haber usado el paquete de evaluación o el banco de comentarios con una clase en un plazo de 30 días (encuesta de seguimiento)",
      "Docentes que dicen ahorrar tiempo de retroalimentación mientras siguen poniendo ellos mismos cada calificación (encuesta de seguimiento)",
      "Escuelas donde cada tarea importante indica qué uso de IA se permite (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet y un asistente de IA aprobado por el distrito para este uso",
      "Un objetivo y una tarea que asignas",
      "Tres respuestas de estudiantes inventadas",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego pide a los docentes que resuelvan en parejas las claves de respuestas de la IA y comparen los errores encontrados.",
      "Usa solo trabajos de estudiantes inventados; nunca pegues trabajos ni calificaciones reales en herramientas no aprobadas.",
      "Pide a dos docentes que califiquen la misma respuesta inventada con cada rúbrica para probar si es justa.",
      "Conversen sobre un proceso justo ante la sospecha de uso de IA antes de que surja algún caso, y acuerden que el puntaje de un detector nunca es la única evidencia.",
      "Califica la tarea final con la rúbrica y comprueba que cada calificación la haya puesto el docente."
    ]
  }
};

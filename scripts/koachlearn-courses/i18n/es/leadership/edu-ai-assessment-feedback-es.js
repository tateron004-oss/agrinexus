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
  chapters: [
    {
      name: "Capítulo 1: Crear evaluaciones con IA",
      lessons: [
        {
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
          youCanNow: "escribir preguntas de evaluación alineadas con IA y revisar la clave."
        },
        {
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
          youCanNow: "crear con IA una rúbrica clara de cuatro niveles y una versión para estudiantes."
        },
        {
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
          youCanNow: "diseñar verificaciones formativas rápidas y planear qué hacer con los resultados."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Crear evaluaciones con IA",
        questions: [
          { q: "¿Por qué pedir a la IA que explique por qué tienta cada opción incorrecta?", options: ["Alarga la prueba", "Para engañar a los estudiantes injustamente", "Los distractores que reflejan errores de comprensión muestran cómo piensan los estudiantes", "Es obligatorio"], answer: 2, why: "Los buenos distractores revelan errores de comprensión." },
          { q: "Una pregunta de opción múltiple de la IA tiene dos respuestas que podrían ser correctas. Debes:", options: ["Corregirla o quitarla", "Dejarla", "Aceptar cualquiera de las dos", "Dar puntaje completo a todos"], answer: 0, why: "Cada pregunta necesita una sola respuesta claramente correcta." },
          { q: "¿Qué celda de rúbrica está mejor escrita?", options: ["“Buena evidencia”", "“Más evidencia”", "“Buen trabajo”", "“Usa dos pruebas y explica cómo cada una apoya la afirmación”"], answer: 3, why: "Describe lo que está presente en el trabajo." },
          { q: "¿Qué es una pregunta bisagra?", options: ["Una pregunta sobre puertas", "Una pregunta en la que cada respuesta incorrecta revela un error de comprensión", "Una pregunta del examen final", "Una pregunta de tarea"], answer: 1, why: "Muestra qué volver a enseñar a mitad de clase." },
          { q: "¿Cuándo debes decidir qué hacer con los resultados del boleto de salida?", options: ["Solo si la mayoría reprueba", "Nunca", "Al final del año", "Antes de aplicar la verificación"], answer: 3, why: "Planear la respuesta hace útil la verificación." }
        ]
      }
    },
    {
      name: "Capítulo 2: Retroalimentación que el docente hace suya",
      lessons: [
        {
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
          youCanNow: "llevar un proceso de retroalimentación en el que la IA ayuda a redactar y tú decides."
        },
        {
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
          youCanNow: "proteger el trabajo y las calificaciones de los estudiantes cuando la IA forma parte de la retroalimentación."
        },
        {
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
          youCanNow: "usar la IA en la evaluación y la retroalimentación manteniendo las calificaciones justas, privadas y en manos del docente."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Retroalimentación que el docente hace suya",
        questions: [
          { q: "En el proceso de retroalimentación, ¿qué hace primero el docente?", options: ["Pegar el trabajo en cualquier herramienta de IA", "Dejar que la IA lo califique", "Leer el trabajo y elegir el nivel de la rúbrica", "Enviarlo a los padres"], answer: 2, why: "El juicio del docente va primero." },
          { q: "¿Quién escribe la calificación?", options: ["El docente", "La IA", "El estudiante", "El proveedor"], answer: 0, why: "Las calificaciones son decisiones del docente." },
          { q: "Según FERPA, el trabajo de los estudiantes que guarda la escuela suele ser:", options: ["Información pública", "Parte de los registros educativos", "Propiedad de la empresa de IA", "Algo no protegido"], answer: 1, why: "Los registros relacionados directamente con un estudiante y guardados por la escuela son registros educativos." },
          { q: "Un detector dice que un ensayo fue escrito en un 90% con IA. ¿Qué haces?", options: ["Hablar con el estudiante y mirar otras pruebas", "Poner un cero", "Denunciar a la familia", "Ignorar todas las políticas"], answer: 0, why: "El puntaje de un detector, por sí solo, no es prueba." },
          { q: "¿Qué previene mejor el mal uso de la IA?", options: ["No decir nada", "Prohibir las computadoras para siempre", "Usar más detectores", "Indicar el uso de IA permitido en cada tarea y hacer visible el pensamiento"], answer: 3, why: "Las reglas claras y el pensamiento visible previenen problemas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 4: IA para la evaluación y la retroalimentación",
    questions: [
      { q: "Una pregunta alineada:", options: ["Es la más difícil", "Mide el objetivo que debe medir", "Es la más larga", "La elige solo la IA"], answer: 1, why: "La alineación es la primera prueba de una buena pregunta." },
      { q: "Un distractor es:", options: ["Un teléfono", "Un estudiante ruidoso", "Una opción incorrecta en opción múltiple", "Una pregunta extra"], answer: 2, why: "Los buenos distractores revelan errores de comprensión." },
      { q: "Después de que la IA escribe una clave, debes:", options: ["Imprimirla", "Confiar en ella", "Resolver tú cada respuesta", "Dársela a los estudiantes"], answer: 2, why: "Las claves tienen errores." },
      { q: "Una mezcla de niveles de preguntas significa:", options: ["Recordar, aplicar y explicar", "Solo fáciles", "Solo difíciles", "Solo verdadero o falso"], answer: 0, why: "Los distintos niveles muestran distintas profundidades de aprendizaje." },
      { q: "Una rúbrica analítica:", options: ["La escriben los estudiantes", "Da solo una calificación general", "No tiene niveles", "Califica cada criterio por separado"], answer: 3, why: "Cada criterio recibe su propio nivel." },
      { q: "Una rúbrica para estudiantes usa:", options: ["Lenguaje legal", "Frases en primera persona (“Yo...”)", "Código", "Solo números"], answer: 1, why: "Los estudiantes deben entender la meta." },
      { q: "Una rúbrica es justa cuando:", options: ["Todos sacan la nota máxima", "Es muy larga", "La escribió la IA", "Dos docentes calificarían igual el mismo trabajo"], answer: 3, why: "La consistencia es justicia." },
      { q: "La evaluación formativa es:", options: ["Una boleta de calificaciones", "El examen final", "Revisar el aprendizaje con bajo riesgo para ajustar la enseñanza", "Un examen estatal"], answer: 2, why: "Orienta el siguiente paso." },
      { q: "Un boleto de salida se aplica:", options: ["Al final de una clase", "Al inicio del año", "Solo los viernes", "Solo a los padres"], answer: 0, why: "Revisa el aprendizaje del día." },
      { q: "Una verificación que nunca usas para actuar es:", options: ["La mejor", "Solo más papel", "Obligatoria", "Sumativa"], answer: 1, why: "Las verificaciones formativas importan cuando cambian la enseñanza." },
      { q: "La retroalimentación de brilla y crece da:", options: ["Una fortaleza y un siguiente paso", "Solo elogios", "Solo críticas", "Solo una calificación"], answer: 0, why: "Los estudiantes necesitan las dos." },
      { q: "Un banco de comentarios es:", options: ["Una aplicación de calificaciones", "Una cuenta de ahorros", "Una lista de estudiantes", "Comentarios guardados que reutilizas y ajustas"], answer: 3, why: "Ahorra tiempo sin perder especificidad." },
      { q: "Las calificaciones de la IA pueden ser injustas porque pueden:", options: ["Ser siempre perfectas", "Premiar la extensión sobre la calidad", "No leer nunca el trabajo", "Usar la rúbrica con exactitud"], answer: 1, why: "El sesgo por extensión es un problema común." },
      { q: "Para trabajos reales de estudiantes, usa:", options: ["Redes sociales", "Cualquier herramienta gratuita", "Solo herramientas aprobadas por el distrito, sin datos identificadores", "Correo personal"], answer: 2, why: "Las herramientas aprobadas y quitar los datos protegen la privacidad." },
      { q: "¿Qué nunca debe ir a una herramienta de IA no aprobada?", options: ["Un boleto de salida en blanco", "Una rúbrica general", "Un libro de calificaciones", "Una respuesta inventada"], answer: 2, why: "Los libros de calificaciones contienen registros educativos identificables." },
      { q: "Según FERPA, los padres pueden:", options: ["Revisar los registros educativos de su hijo", "Calificar el trabajo", "Aprobar proveedores", "Escribir la rúbrica"], answer: 0, why: "Revisar los registros es un derecho central de FERPA." },
      { q: "Un proveedor puede actuar como funcionario escolar cuando:", options: ["Tiene muchos usuarios", "Es gratuito", "Lo pide con amabilidad", "Presta un servicio escolar bajo el control directo de la escuela, con límites para volver a compartir"], answer: 3, why: "Esas son las condiciones de FERPA." },
      { q: "Los detectores de escritura con IA:", options: ["Siempre aciertan", "Pueden marcar por error trabajos honestos", "Son obligatorios por ley", "Prueban la trampa"], answer: 1, why: "Los falsos positivos ocurren." },
      { q: "Si sospechas un mal uso de la IA, un primer paso justo es:", options: ["Ignorar tu política", "Poner un cero", "Publicarlo", "Pedir al estudiante que explique su trabajo o muestre borradores"], answer: 3, why: "Conversar permite reunir pruebas reales." },
      { q: "Cada tarea debe indicar:", options: ["Que la IA siempre está prohibida", "Nada sobre la IA", "Qué uso de IA se permite", "La calificación del estudiante"], answer: 2, why: "Las reglas claras evitan malentendidos." }
    ]
  }
};

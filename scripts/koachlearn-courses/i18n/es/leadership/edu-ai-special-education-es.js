"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-special-education.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-special-education-es",
  lang: "es",
  translationOf: "edu-ai-special-education",
  category: "Leadership Development",
  name: "IA para la educación especial",
  skills: "Saber dónde encaja y dónde no la IA en la educación especial, Crear versiones accesibles de los materiales, Crear apoyos visuales y tareas divididas en pasos, Escribir explicaciones en lenguaje sencillo para las familias, Proteger la información de los IEP y planes 504, Fijar reglas de equipo",
  outcome: "usar la IA para hacer más accesibles los materiales de clase (versiones en lenguaje sencillo, pasos divididos, horarios visuales y práctica en varios niveles) y para explicar a las familias los procesos de educación especial en palabras sencillas, dejando cada decisión del IEP y del plan 504 y toda la información de los estudiantes en manos del equipo.",
  about: [
    "Este curso es para docentes de educación especial, docentes de educación general que enseñan a estudiantes con discapacidad, proveedores de servicios relacionados, coordinadores y directores. La IA puede ahorrar tiempo al adaptar materiales y explicar procesos. Nunca debe escribir ni decidir el contenido del IEP (programa de educación individualizado) o del plan 504 de un estudiante.",
    "El capítulo 1 fija los límites (lo que IDEA exige al equipo y por qué la IA no puede ocupar ese papel) y practica la creación de materiales accesibles. El capítulo 2 trata la comunicación con las familias, la protección de la información de los estudiantes y las reglas que seguirá tu equipo.",
    "Este curso explica la ley en palabras sencillas para que sepas qué preguntar; no es asesoría legal. El director de educación especial y el asesor jurídico de tu distrito tienen la última palabra. Practica solo con materiales inventados o generales. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Crea un paquete de accesibilidad para una clase general (sin información de estudiantes): una versión en lenguaje sencillo de la lectura principal, la tarea dividida en pasos numerados con una lista de verificación, un horario visual de la clase y práctica en dos niveles; además, una explicación de una página en lenguaje sencillo para las familias sobre un paso general de la educación especial (por ejemplo, “qué pasa en una reunión anual del IEP”). Revisa la exactitud de todo y escribe cinco reglas de equipo para el uso de la IA en la educación especial.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Docentes de educación especial, docentes de educación general que enseñan a estudiantes con discapacidad, proveedores de servicios relacionados, coordinadores y directores de escuelas de Estados Unidos.",
    startingPoint: "Adaptan materiales y explican los procesos de la educación especial a mano, lo que toma mucho tiempo. Quizá probaron la IA, pero no saben bien dónde encaja según IDEA y la Sección 504 ni cómo mantener segura la información del IEP y del plan 504.",
    gap: "La IA puede ahorrar tiempo en materiales accesibles y en explicaciones en lenguaje sencillo para las familias, pero nunca debe escribir ni decidir el contenido del IEP o del plan 504 de un estudiante, y la información de los estudiantes es muy delicada. Los educadores necesitan usar la IA para las tareas correctas, revisar lo que produce y seguir reglas de equipo claras.",
    constraints: [
      "El curso explica la ley con palabras sencillas y no es asesoría legal; el director de educación especial y el asesor legal del distrito tienen la última palabra",
      "Practicar solo con materiales inventados o generales; nada de información de estudiantes en ninguna herramienta de IA no aprobada",
      "Las decisiones del IEP y del plan 504 y las adaptaciones obligatorias se quedan con el equipo y se dan tal como están escritas",
      "Los materiales para las familias se mantienen generales y se revisan con los materiales del distrito; las traducciones las revisan personas calificadas que hablen el idioma",
      "Tiempo: lecciones cortas que caben en una jornada de clases"
    ],
    prerequisites: "Ninguno. \"IA para líderes escolares y educativos 2: Herramientas de IA para educadores\" es un buen punto de partida."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tareas de educación especial", action: "clasificar cada tarea en \"La IA puede ayudar\" o \"Solo el equipo\"", standard: "dejando toda decisión del IEP y del plan 504 en manos del equipo" },
    { id: "O2", condition: "Con una lectura y una tarea generales", action: "crear con IA una versión en lenguaje sencillo y una lista de pasos", standard: "comparando cada una con el original y corrigiendo todo dato omitido o cambiado" },
    { id: "O3", condition: "Para una clase general", action: "crear un horario visual y práctica en dos niveles", standard: "con texto alternativo en cada imagen, cada respuesta revisada y las adaptaciones obligatorias dadas tal como están escritas" },
    { id: "O4", condition: "Con un paso general de la educación especial", action: "escribir una explicación de una página en lenguaje sencillo para las familias", standard: "revisada con los materiales oficiales de tu distrito y leída por un colega para cuidar el tono" },
    { id: "O5", condition: "Cuando el personal quiere ayuda de la IA con información de educación especial", action: "elegir una forma segura de conseguir la ayuda sin compartir detalles del IEP, del plan 504 ni de evaluaciones", standard: "usando solo herramientas aprobadas con la mínima información" },
    { id: "O6", condition: "Para tu equipo", action: "escribir cinco reglas de equipo para el uso de la IA en la educación especial", standard: "con un ejemplo para cada una, compartidas con docentes, asistentes educativos y proveedores de servicios relacionados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Límites y materiales accesibles",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dónde encaja la IA y dónde no",
          minutes: 6,
          goal: "Explicar en qué puede ayudar la IA en la educación especial y qué queda en manos del equipo del IEP.",
          text: [
            "La Ley de Educación para Personas con Discapacidades (IDEA, por sus siglas en inglés) exige que los niños con discapacidad que cumplen los requisitos reciban una educación pública gratuita y apropiada (FAPE, por sus siglas en inglés). Según la Parte B, que cubre de los 3 a los 21 años, los servicios se fijan en un Programa de Educación Individualizado (IEP) elaborado por un equipo que incluye a los padres del niño y al personal escolar. La Parte C cubre la intervención temprana para bebés y niños pequeños. Los planes de la Sección 504 son una vía distinta para algunos estudiantes con discapacidad.",
            "Estas son decisiones individuales, legales y de equipo, basadas en la evaluación y en el conocimiento del niño. La IA no puede asistir a la reunión, no conoce al niño y puede producir contenido genérico o erróneo. Por eso la IA no debe escribir los niveles actuales de desempeño, las metas, los servicios, las adaptaciones ni la ubicación, y lo que produzca la IA nunca debe usarse para decidir la elegibilidad.",
            "Dónde ayuda la IA: adaptar materiales generales de clase, crear práctica en varios niveles, hacer apoyos visuales, redactar explicaciones generales de los procesos para las familias y organizar tu propio horario y plantillas de papeleo (sin datos de estudiantes)."
          ],
          words: [["IDEA", "la ley federal que exige una educación pública gratuita y apropiada para los niños con discapacidad que cumplen los requisitos."], ["FAPE", "educación pública gratuita y apropiada: lo que IDEA garantiza a los estudiantes que cumplen los requisitos."], ["IEP", "Programa de Educación Individualizado: el plan escrito de los servicios de educación especial de un estudiante, elaborado por un equipo que incluye a los padres."], ["Plan de la Sección 504", "un plan que da adaptaciones a un estudiante con discapacidad según otra ley federal."]],
          slides: [
            { title: "Lo que exige IDEA", bullets: ["FAPE para niños con discapacidad que cumplen los requisitos", "Parte B: de 3 a 21 años, mediante un IEP", "El IEP lo elabora un equipo que incluye a los padres"] },
            { title: "La IA NO", bullets: ["Escribe metas, servicios ni adaptaciones", "Decide la elegibilidad ni la ubicación", "Reemplaza lo que el equipo sabe del niño"] },
            { title: "La IA SÍ puede ayudar", bullets: ["Adaptar materiales generales", "Práctica en varios niveles; apoyos visuales", "Explicaciones generales para las familias"] }
          ],
          sources: [{ name: "Departamento de Educación de EE. UU.: Informe anual al Congreso sobre IDEA (Parte B, de 3 a 21 años)", url: "https://sites.ed.gov/idea/2021-individuals-with-disabilities-education-act-annual-report-to-congress/" }, { name: "NCLD: Ley de Educación para Personas con Discapacidades", url: "https://ncld.org/understand-the-issues/learn-the-law/individuals-with-disabilities-education-act" }],
          tryIt: "Haz dos columnas: “La IA puede ayudar” y “Solo el equipo”. Pon al menos diez tareas de educación especial de tu semana en la columna correcta.",
          youCanNow: "trazar una línea clara entre las tareas de apoyo de la IA y las decisiones del equipo del IEP.",
          quickCheck: [
            { objective: "O1", q: "¿Quién elabora el IEP de un estudiante?", options: ["Una herramienta de IA aprobada por el distrito", "Un equipo que incluye a los padres y al personal escolar", "El director solo", "El docente de educación general del estudiante solo"], answer: 1, why: "El IEP lo elabora un equipo que incluye a los padres." },
            { objective: "O1", q: "Un colega le pide a la IA que sugiera qué adaptaciones debería recibir un estudiante. ¿Qué le dirías?", options: ["Buena idea; usa su lista", "Pídele a una segunda herramienta de IA que la revise", "Las decisiones sobre adaptaciones son del equipo del IEP o del plan 504, no de la IA", "Usa la lista de la IA solo para los estudiantes más pequeños"], answer: 2, why: "Las decisiones del IEP y del plan 504 se quedan con el equipo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Versiones en lenguaje sencillo y tareas divididas en pasos",
          minutes: 5,
          goal: "Usar la IA para hacer una versión en lenguaje sencillo de una lectura y dividir una tarea en pasos.",
          text: [
            "A muchos estudiantes les ayuda un texto que conserva las ideas pero reduce la carga de lectura: oraciones más cortas, palabras comunes, términos clave explicados, títulos y viñetas. Instrucción: “Reescribe este texto a un nivel de lectura de 3.er grado, más o menos. Conserva todos los datos clave y estas palabras de vocabulario: [lista]. Usa oraciones cortas y títulos. Agrega un recuadro que defina cada palabra de vocabulario.”",
            "Dividir en pasos convierte una tarea de varios pasos en pasos pequeños y numerados con una lista de verificación. Instrucción: “Divide esta tarea en 5 a 8 pasos numerados, una acción por paso, con una casilla para marcar cada uno y un tiempo estimado.”",
            "Compara cada versión con el original: la IA a veces omite o cambia datos al simplificar. Conserva las ideas del grado; bajar el nivel de lectura no debe bajar la meta de aprendizaje."
          ],
          steps: ["Pega el texto o la tarea general (sin información de estudiantes).", "Pide la versión en lenguaje sencillo, conservando los datos clave y el vocabulario.", "Pide pasos numerados con casillas y tiempos.", "Compara con el original; corrige los datos omitidos o cambiados.", "Mantén la misma meta de aprendizaje."],
          words: [["Lenguaje sencillo", "escritura clara con oraciones cortas y palabras comunes."], ["Dividir en pasos", "partir una tarea en pasos pequeños y manejables."]],
          slides: [
            { title: "Versión en lenguaje sencillo", bullets: ["Las mismas ideas, menos carga de lectura", "Oraciones cortas, palabras comunes, títulos", "Conserva el vocabulario clave, con definiciones"] },
            { title: "Divide la tarea", bullets: ["5-8 pasos numerados", "Una acción por paso", "Casilla y tiempo para cada uno"] },
            { title: "Compara con el original", bullets: ["Simplificar puede omitir datos", "La misma meta de aprendizaje"] }
          ],
          tryIt: "Toma una lectura general y una tarea de una clase próxima. Haz con IA una versión en lenguaje sencillo y una lista de pasos; luego compara cada una con el original y corrige los errores.",
          youCanNow: "crear versiones exactas en lenguaje sencillo y divididas en pasos de los materiales de clase.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es el lenguaje sencillo?", options: ["Frases cortas y palabras comunes que mantienen las mismas ideas", "Un texto más corto con menos ideas", "Un texto sin puntuación", "Una traducción a otro idioma"], answer: 0, why: "El lenguaje sencillo hace el texto más fácil de leer sin cambiar su contenido." },
            { objective: "O2", q: "La lista de pasos de la IA se salta un paso de la tarea. ¿Qué haces?", options: ["La usas; los estudiantes lo descubrirán", "Quitas ese paso de la tarea", "Pides a los estudiantes que encuentren el paso que falta", "La comparas con la tarea original y añades el paso que falta"], answer: 3, why: "Revisar con el original detecta los pasos y los datos omitidos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Apoyos visuales y práctica en varios niveles",
          minutes: 5,
          goal: "Crear un horario visual y dos niveles de práctica para una clase.",
          text: [
            "Los horarios y apoyos visuales ayudan a muchos estudiantes a saber qué viene y qué hacer. La IA puede redactar el texto de un horario visual (“1. Calentamiento, 5 minutos; 2. Minilección...”) y sugerir íconos sencillos; herramientas como Canva pueden darle formato. En las imágenes, revisa que sean claras, respetuosas y coincidan con las palabras.",
            "La práctica en varios niveles permite que todos los estudiantes trabajen la misma habilidad: pide a la IA un conjunto con más apoyo (primero un ejemplo resuelto, menos pasos, banco de palabras) y otro en nivel. Revisa cada respuesta.",
            "Recuerda que las adaptaciones del IEP o del plan 504 de un estudiante deben darse tal como están escritas; tus materiales añaden apoyo para todos pero no reemplazan las adaptaciones obligatorias. Revisa también la accesibilidad: letras legibles, buen contraste, texto alternativo para las imágenes y texto que funcione con lectura en voz alta."
          ],
          steps: ["Redacta con IA el texto del horario visual.", "Dale formato con íconos claros y respetuosos.", "Pide práctica con más apoyo y en nivel.", "Revisa cada respuesta.", "Revisa la accesibilidad: letra, contraste, texto alternativo, lectura en voz alta."],
          words: [["Horario visual", "una lista con imágenes y palabras de lo que va a pasar, en orden."], ["Texto alternativo", "una breve descripción escrita de una imagen para quienes usan lectores de pantalla."], ["Lectura en voz alta", "tecnología que lee el texto en voz alta."]],
          slides: [
            { title: "Horarios visuales", bullets: ["La IA redacta los pasos y los tiempos", "Dale formato con íconos claros y respetuosos"] },
            { title: "Dos niveles de práctica", bullets: ["Más apoyo: ejemplo resuelto, banco de palabras", "En nivel: la misma habilidad", "Revisa cada respuesta"] },
            { title: "Accesibilidad y adaptaciones", bullets: ["Letra legible, contraste, texto alternativo", "Funciona con lectura en voz alta", "Las adaptaciones obligatorias siguen vigentes"] }
          ],
          tryIt: "Haz un horario visual para una clase y dos niveles de práctica para su habilidad principal. Agrega texto alternativo a cada imagen y revisa cada respuesta.",
          youCanNow: "crear apoyos visuales y práctica por niveles que hacen más accesibles las clases.",
          quickCheck: [
            { objective: "O3", q: "¿Qué muestra un horario visual?", options: ["Las calificaciones de los estudiantes", "El calendario del docente", "Lo que va a pasar, en orden, con imágenes y palabras", "Un plano de dónde se sienta cada uno"], answer: 2, why: "Los horarios visuales ayudan a los estudiantes a saber qué viene después." },
            { objective: "O3", q: "Tu práctica en dos niveles incluye un banco de palabras, pero el IEP de un estudiante exige tiempo adicional. ¿Qué se aplica?", options: ["Dar el tiempo adicional tal como está escrito en el IEP", "El banco de palabras reemplaza el tiempo adicional", "Preguntarle a la IA qué apoyo es mejor", "Dar tiempo adicional solo en los exámenes"], answer: 0, why: "Las adaptaciones obligatorias del IEP se dan tal como están escritas, aunque añadas otros apoyos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Límites y materiales accesibles",
        questions: [
          { objective: "O1", q: "Según la Parte B de IDEA, los servicios de educación especial para estudiantes de 3 a 21 años que cumplen los requisitos se fijan en:", options: ["Una boleta de calificaciones", "Un resumen de IA", "Un IEP elaborado por un equipo que incluye a los padres", "Un boletín"], answer: 2, why: "El IEP es el plan escrito del equipo." },
          { objective: "O1", q: "¿Qué tarea NO debe hacer la IA?", options: ["Escribir las metas del IEP de un estudiante", "Hacer una versión en lenguaje sencillo de una lectura general", "Redactar un horario visual", "Crear práctica en dos niveles"], answer: 0, why: "El contenido del IEP es una decisión del equipo." },
          { objective: "O2", q: "La IA simplificó un texto de ciencias y cambió un dato. ¿Qué debes hacer?", options: ["Usarlo de todos modos", "Borrar el original", "Simplificarlo más", "Compararlo con el original y corregirlo"], answer: 3, why: "Simplificar puede introducir errores." },
          { objective: "O3", q: "¿Qué es el texto alternativo?", options: ["Otro tipo de letra", "Una descripción escrita de una imagen para lectores de pantalla", "Un examen alternativo", "Un mensaje de texto"], answer: 1, why: "El texto alternativo hace accesibles las imágenes." },
          { objective: "O3", q: "Tus materiales por niveles dan más apoyo. ¿Siguen vigentes las adaptaciones obligatorias del IEP?", options: ["No, los materiales las reemplazan", "Solo en días de examen", "Solo si los padres lo piden", "Sí, deben darse tal como están escritas"], answer: 3, why: "Las adaptaciones obligatorias no se reemplazan." }
        ]
      }
    },
    {
      name: "Capítulo 2: Familias, privacidad y reglas de equipo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Explicar los procesos a las familias en palabras sencillas",
          minutes: 5,
          goal: "Redactar una explicación en lenguaje sencillo para las familias sobre un paso general de la educación especial.",
          text: [
            "Los documentos de educación especial están llenos de términos que las familias quizá no conocen: evaluación, elegibilidad, niveles actuales de desempeño, ambiente menos restrictivo, garantías procesales. La IA es buena para redactar explicaciones generales en lenguaje sencillo de estos términos y de lo que pasa en cada paso.",
            "Instrucción: “Explica a un padre o madre, en lenguaje sencillo y a un nivel de lectura de 6.º grado, más o menos, qué pasa en una reunión anual del IEP: quién asiste, qué se conversa, qué pueden preguntar y cómo prepararse. Tono cálido y respetuoso. Menos de 400 palabras.” Luego compárala con los procedimientos y materiales oficiales de tu distrito, porque la IA puede describir el proceso de otro estado o equivocarse en detalles.",
            "Mantenlas generales. No uses la IA para escribir nada sobre un niño en particular. Ofrece traducciones revisadas por hablantes calificados, y recuerda que el aviso oficial de garantías procesales de tu distrito es el documento legal; tu explicación ayuda a las familias a entenderlo, no lo reemplaza."
          ],
          steps: ["Elige un paso o término general por el que preguntan las familias.", "Pide una explicación en lenguaje sencillo, con tono y extensión.", "Compárala con los procedimientos y materiales oficiales del distrito.", "Mantenla general: ningún niño en particular.", "Ofrece traducciones revisadas; remite al aviso oficial."],
          words: [["Garantías procesales", "los derechos de los padres en la educación especial, explicados en un aviso oficial."], ["Ambiente menos restrictivo", "la idea de IDEA de que los estudiantes con discapacidad aprendan con compañeros sin discapacidad tanto como sea apropiado."]],
          slides: [
            { title: "Términos que encuentran las familias", bullets: ["Evaluación, elegibilidad, niveles actuales", "Ambiente menos restrictivo", "Garantías procesales"] },
            { title: "Una explicación general", bullets: ["Lenguaje sencillo, tono cálido, breve", "Quién asiste, qué pasa, cómo prepararse", "Compárala con los procedimientos del distrito"] },
            { title: "Mantenla general", bullets: ["Nada sobre un niño en particular", "Traducciones revisadas", "El aviso oficial sigue siendo el documento legal"] }
          ],
          tryIt: "Redacta una explicación de una página en lenguaje sencillo para las familias sobre un paso general de la educación especial, compárala con los materiales de tu distrito y pide a un colega que revise el tono.",
          youCanNow: "ayudar a las familias a entender los procesos de educación especial con explicaciones claras y revisadas.",
          quickCheck: [
            { objective: "O4", q: "¿Sobre qué debe tratar una explicación para las familias hecha con IA?", options: ["Sobre la evaluación de un niño concreto", "Sobre un paso general, no sobre un niño concreto", "Sobre la opinión de un docente acerca de una familia", "Sobre el presupuesto del distrito"], answer: 1, why: "Las explicaciones para las familias se mantienen generales para que no entre información de estudiantes en la IA." },
            { objective: "O4", q: "La explicación de la IA sobre la reunión anual del IEP no coincide con los materiales de tu distrito. ¿Qué harías?", options: ["Compartir la versión de la IA porque es más clara", "Compartir las dos y dejar que las familias elijan", "Preguntarle a la IA cuál es la correcta", "Corregirla para que coincida con los procedimientos del distrito antes de compartirla"], answer: 3, why: "La fuente son los procedimientos del distrito y los avisos oficiales, no la IA." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger la información de los IEP y planes 504",
          minutes: 5,
          goal: "Aplicar las reglas de privacidad a la información de educación especial y a las herramientas de IA.",
          text: [
            "Los IEP, los planes 504, las evaluaciones, la información sobre discapacidad y las notas relacionadas forman parte de los registros educativos del estudiante, están protegidos por FERPA (ley federal de privacidad de los registros educativos) y son de la información más delicada que guarda una escuela. Compartir información personal identificable de ellos con una empresa externa suele requerir consentimiento, salvo que aplique una excepción.",
            "Reglas para el personal: nunca pegues contenido de un IEP o plan 504, resultados de evaluaciones, diagnósticos, planes de conducta ni nombres en herramientas de IA no aprobadas. Si tu distrito aprobó una herramienta de IA para el trabajo de educación especial, úsala solo como lo permita el acuerdo, y aun así usa la mínima información necesaria.",
            "Ten cuidado con los asistentes de notas con IA y con las grabaciones en reuniones sobre estudiantes: las reuniones del IEP no deben grabarse ni transcribirse con herramientas no aprobadas. Tu director de educación especial y tu responsable de privacidad pueden decirte qué permiten tu distrito y tu estado."
          ],
          steps: ["Trata la información del IEP, del plan 504, de evaluaciones y de discapacidad como muy delicada.", "Nunca la pongas en herramientas de IA no aprobadas.", "Usa las herramientas aprobadas solo como lo permita el acuerdo.", "Usa la mínima información necesaria.", "Nada de grabaciones ni notas con IA no aprobadas en reuniones sobre estudiantes."],
          words: [["Registro educativo", "un registro directamente relacionado con un estudiante y guardado por la escuela."], ["Información delicada", "información que podría causar un daño grave si se comparte, como datos de discapacidad o de salud."]],
          slides: [
            { title: "Entre los registros más delicados", bullets: ["IEP, planes 504, evaluaciones", "Diagnósticos, planes de conducta", "Protegidos por FERPA"] },
            { title: "Reglas para el personal", bullets: ["Nunca en herramientas de IA no aprobadas", "Herramientas aprobadas solo según el acuerdo", "La mínima información necesaria"] },
            { title: "Reuniones sobre estudiantes", bullets: ["Nada de grabaciones ni notas con IA no aprobadas", "Consulta a tu director y a tu responsable de privacidad"] }
          ],
          sources: [{ name: "FERPA: protección de la privacidad estudiantil", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Escribe tres ejemplos realistas de información de educación especial que el personal podría sentir la tentación de pegar en la IA y, para cada uno, una forma segura de obtener la misma ayuda sin hacerlo.",
          youCanNow: "proteger la información de los IEP, los planes 504 y la discapacidad cuando se usan herramientas de IA.",
          quickCheck: [
            { objective: "O5", q: "¿Qué ley protege los IEP y los registros de evaluación como expedientes educativos?", options: ["FERPA", "Solo COPPA", "Ninguna ley", "La ley de derechos de autor"], answer: 0, why: "Los IEP y las evaluaciones son expedientes educativos protegidos por FERPA." },
            { objective: "O5", q: "Un docente quiere que la IA reescriba un plan de conducta para que sea más claro. ¿Cuál es una forma segura?", options: ["Pegar el plan en un chatbot gratuito", "Quitar el nombre pero dejar el diagnóstico", "Pedir ayuda con un ejemplo general e inventado, o usar una herramienta aprobada según lo permita el acuerdo", "Enviarlo por correo a un amigo que usa IA"], answer: 2, why: "Los planes de conducta y los diagnósticos nunca van en herramientas no aprobadas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reglas de equipo para la IA en la educación especial",
          minutes: 6,
          goal: "Escribir cinco reglas de equipo claras y practicarlas con los colegas.",
          text: [
            "Tu equipo necesita reglas compartidas y por escrito. Cinco que cubren la mayoría de las situaciones: 1) La IA nunca escribe ni decide el contenido del IEP o del plan 504, la elegibilidad ni la ubicación. 2) Nada de información de estudiantes en herramientas no aprobadas. 3) Todo material hecho con IA se revisa en exactitud y accesibilidad antes de que lo vean los estudiantes. 4) Los apoyos de la IA nunca reemplazan las adaptaciones obligatorias. 5) Las explicaciones para las familias son generales, se comparan con los materiales oficiales y las traducen hablantes calificados.",
            "Compártelas en una reunión de equipo, con ejemplos de lo que se permite y lo que no. Invita las preguntas de los asistentes educativos y de los proveedores de servicios relacionados, que a menudo quedan fuera de las orientaciones sobre IA.",
            "Reúne buenas instrucciones y materiales en una carpeta compartida para que el tiempo ahorrado llegue a todo el equipo, y revisa las reglas cada año con tu director de educación especial."
          ],
          steps: ["Escribe las cinco reglas en palabras sencillas.", "Agrega un ejemplo para cada una.", "Compártelas en una reunión de equipo, incluidos los asistentes educativos.", "Crea una carpeta compartida de buenas instrucciones y materiales.", "Revísalas cada año con el director de educación especial."],
          words: [["Asistente educativo", "un miembro del personal escolar que apoya a estudiantes y docentes, a menudo en educación especial."], ["Servicios relacionados", "apoyos como terapia del habla, terapia ocupacional o fisioterapia que ayudan a un estudiante a aprovechar la educación especial."]],
          slides: [
            { title: "Cinco reglas de equipo", bullets: ["1 Nada de IA en decisiones del IEP o del plan 504", "2 Nada de datos de estudiantes en herramientas no aprobadas", "3 Revisar exactitud y accesibilidad", "4 Las adaptaciones siguen; 5 Textos para familias revisados"] },
            { title: "Compártelas bien", bullets: ["Ejemplos de lo permitido y lo no permitido", "Incluye a asistentes educativos y terapeutas"] },
            { title: "Comparte lo ganado", bullets: ["Carpeta compartida de instrucciones y materiales", "Revisión anual"] }
          ],
          tryIt: "Tarea final: arma tu paquete de accesibilidad (lectura en lenguaje sencillo, lista de pasos, horario visual, dos niveles de práctica), escribe tu explicación de una página para las familias, revísalo todo y escribe las cinco reglas de IA de tu equipo con un ejemplo para cada una.",
          youCanNow: "usar la IA para hacer más accesibles los materiales de educación especial, protegiendo a los estudiantes y dejando las decisiones en manos del equipo.",
          quickCheck: [
            { objective: "O6", q: "¿Quién tiene la última palabra sobre las reglas de educación especial de tu distrito?", options: ["El proveedor de IA", "El director de educación especial y el asesor legal", "Cada docente", "La asociación de padres"], answer: 1, why: "Los líderes del distrito y el asesor legal deciden cómo se aplican las reglas en el lugar." },
            { objective: "O6", q: "Escribiste cinco reglas de IA. ¿Cómo ayudas a todo el equipo a usarlas?", options: ["Compartiéndolas con docentes, asistentes educativos y proveedores de servicios relacionados, con ejemplos", "Enviándolas por correo solo a los directores", "Guardándolas en tus propios archivos", "Publicándolas una vez y no revisándolas nunca"], answer: 0, why: "Todas las personas que trabajan con los estudiantes necesitan las reglas y los ejemplos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Familias, privacidad y reglas de equipo",
        questions: [
          { objective: "O4", q: "La IA redactó una explicación del proceso del IEP para las familias. Antes de compartirla, debes:", options: ["Enviarla tal cual", "Agregar el nombre de un estudiante", "Compararla con los procedimientos y materiales oficiales de tu distrito", "Quitar todos los títulos"], answer: 2, why: "La IA puede describir el proceso de otro estado o equivocarse en detalles." },
          { objective: "O4", q: "¿Qué documento sigue siendo la declaración legal de los derechos de los padres?", options: ["El aviso oficial de garantías procesales del distrito", "Tu explicación hecha con IA", "Un boletín", "Un mensaje de texto"], answer: 0, why: "La explicación ayuda a las familias a entender el aviso oficial." },
          { objective: "O5", q: "Un docente quiere que la IA resuma en una herramienta gratuita el informe de evaluación de un estudiante. ¿La mejor respuesta?", options: ["Adelante", "No: los resultados de evaluación son registros educativos delicados; no uses herramientas no aprobadas", "Solo la primera página", "Solo si parece anónimo"], answer: 1, why: "Las evaluaciones están protegidas y son muy delicadas." },
          { objective: "O5", q: "¿Debe un asistente de notas con IA no aprobado grabar una reunión del IEP?", options: ["No", "Sí, ahorra tiempo", "Solo la mitad de la reunión", "Solo si el proveedor está de acuerdo"], answer: 0, why: "Las reuniones sobre estudiantes no deben grabarse con herramientas no aprobadas." },
          { objective: "O6", q: "¿A quién se debe incluir al compartir las reglas de IA del equipo?", options: ["Solo a los docentes", "Solo a los proveedores", "Solo al director", "A docentes, asistentes educativos y proveedores de servicios relacionados"], answer: 3, why: "Todos los que apoyan a los estudiantes necesitan las reglas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la educación especial",
    questions: [
      { objective: "O1", q: "IDEA garantiza a los niños con discapacidad que cumplen los requisitos:", options: ["Una computadora portátil gratis", "Una educación pública gratuita y apropiada", "La colegiatura de una escuela privada", "Tutoría con IA"], answer: 1, why: "La FAPE es la garantía central de IDEA." },
      { objective: "O1", q: "La Parte B de IDEA cubre a los niños que cumplen los requisitos de:", options: ["Solo 13 a 18 años", "Solo 0 a 2 años", "3 a 21 años", "Solo adultos"], answer: 2, why: "La Parte B atiende de 3 a 21 años; la Parte C, a bebés y niños pequeños." },
      { objective: "O1", q: "¿Quién elabora el IEP?", options: ["El director, solo", "Una herramienta de IA", "Un equipo que incluye a los padres y al personal escolar", "Un proveedor"], answer: 2, why: "El IEP es una decisión del equipo." },
      { objective: "O1", q: "Un plan de la Sección 504 da:", options: ["Adaptaciones a un estudiante con discapacidad según otra ley federal", "Una calificación", "Una excursión", "Una licencia de una herramienta"], answer: 0, why: "El plan 504 es una vía distinta de IDEA." },
      { objective: "O2", q: "¿Cuál es una buena tarea para la IA?", options: ["Elegir la ubicación", "Escribir las metas del IEP", "Decidir la elegibilidad", "Una versión en lenguaje sencillo de una lectura general"], answer: 3, why: "Adaptar materiales generales es un uso seguro." },
      { objective: "O2", q: "Lenguaje sencillo significa:", options: ["Menos ideas", "Oraciones cortas y palabras comunes, con las mismas ideas", "Sin vocabulario", "Expectativas más bajas"], answer: 1, why: "Menos carga de lectura, la misma meta de aprendizaje." },
      { objective: "O2", q: "Dividir una tarea en pasos significa:", options: ["Calificarla", "Alargarla", "Quitarla", "Partirla en pasos pequeños y numerados"], answer: 3, why: "Los pasos pequeños hacen manejables las tareas." },
      { objective: "O2", q: "Después de que la IA simplifica un texto, revisa que:", options: ["Tenga más imágenes", "Sea más largo", "No se hayan omitido ni cambiado datos clave", "Suene formal"], answer: 2, why: "Simplificar puede introducir errores." },
      { objective: "O3", q: "Un horario visual muestra:", options: ["Lo que va a pasar, en orden, con imágenes y palabras", "Rutas de autobús", "Boletas de calificaciones", "Sueldos del personal"], answer: 0, why: "Ayuda a los estudiantes a saber qué viene después." },
      { objective: "O3", q: "La lectura en voz alta:", options: ["Escribe ensayos", "Lee el texto en voz alta", "Califica trabajos", "Traduce lo que se habla"], answer: 1, why: "Apoya a los estudiantes a quienes les ayuda escuchar el texto." },
      { objective: "O3", q: "La práctica con más apoyo puede incluir:", options: ["Un ejemplo resuelto y un banco de palabras", "Menos ideas", "Un examen más difícil", "Ninguna instrucción"], answer: 0, why: "El andamiaje ayuda a alcanzar la misma habilidad." },
      { objective: "O3", q: "Las adaptaciones obligatorias del IEP:", options: ["Solo aplican en los exámenes", "Pueden reemplazarse con materiales de IA", "Son opcionales", "Deben darse tal como están escritas"], answer: 3, why: "Son obligatorias por ley." },
      { objective: "O4", q: "Las explicaciones para las familias deben ser:", options: ["Sobre un estudiante con nombre", "Generales, no sobre un niño en particular", "Escritas solo en inglés", "Enviadas sin revisar"], answer: 1, why: "Mantén la información de los estudiantes fuera de la IA." },
      { objective: "O4", q: "Las traducciones para las familias deben:", options: ["Omitirse", "Ser texto de IA sin revisar", "Revisarlas hablantes calificados", "Hacerlas los estudiantes"], answer: 2, why: "Las familias necesitan información correcta." },
      { objective: "O5", q: "Los IEP y las evaluaciones están protegidos por:", options: ["Ninguna ley", "Solo los derechos de autor", "FERPA", "La ley de tránsito"], answer: 2, why: "Son registros educativos." },
      { objective: "O5", q: "Poner diagnósticos y planes de conducta en una herramienta de IA no aprobada:", options: ["Nunca está permitido", "Está bien si son cortos", "Está bien los fines de semana", "Es obligatorio"], answer: 0, why: "Es información muy delicada." },
      { objective: "O5", q: "Con una herramienta de IA aprobada para la educación especial, el personal debe:", options: ["Saltarse la revisión", "Subir todo", "Compartir contraseñas", "Usarla solo como lo permita el acuerdo, con la mínima información"], answer: 3, why: "Los acuerdos y la minimización siguen aplicando." },
      { objective: "O1", q: "Ambiente menos restrictivo significa que los estudiantes con discapacidad aprenden:", options: ["Siempre solos", "Con compañeros sin discapacidad tanto como sea apropiado", "Solo en línea", "Solo en casa"], answer: 1, why: "Es una idea central de IDEA." },
      { objective: "O6", q: "¿Quién tiene la última palabra sobre las reglas de educación especial de tu distrito?", options: ["Un estudiante", "Un chatbot", "Un proveedor", "El director de educación especial y el asesor jurídico"], answer: 3, why: "Deciden las personas calificadas." },
      { objective: "O6", q: "Una carpeta compartida de buenas instrucciones y materiales ayuda a:", options: ["Compartir datos de estudiantes", "Ocultar materiales", "Que el tiempo ahorrado llegue a todo el equipo", "Reemplazar al equipo del IEP"], answer: 2, why: "Compartir multiplica el beneficio." }
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
      8,
      11,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Lectura en lenguaje sencillo y pasos",
        objective: "O2",
        notYet: "Se omitió o cambió un dato, o la tarea no está dividida en pasos.",
        meets: "Una versión en lenguaje sencillo y una lista de pasos numerada, revisadas con el original.",
        exceeds: "Anota qué errores cometió la IA y cómo se corrigieron."
      },
      {
        name: "Horario visual y práctica",
        objective: "O3",
        notYet: "Falta el horario o un nivel de práctica, o no se revisaron las respuestas.",
        meets: "Un horario visual y práctica en dos niveles, con cada respuesta revisada.",
        exceeds: "Cada imagen tiene texto alternativo, e incluye apoyos como ejemplos resueltos o bancos de palabras."
      },
      {
        name: "Explicación para las familias",
        objective: "O4",
        notYet: "Trata sobre un niño concreto, o no se revisó con los materiales del distrito.",
        meets: "Una explicación de una página en lenguaje sencillo sobre un paso general, revisada para que sea exacta.",
        exceeds: "Un colega la leyó para cuidar el tono, y remite a las familias al aviso oficial de garantías procesales."
      },
      {
        name: "Sin información de estudiantes",
        objective: "O5",
        notYet: "Aparece cualquier información de estudiantes en el paquete o en las instrucciones.",
        meets: "Todo el paquete usa solo material general o inventado.",
        exceeds: "Incluye formas seguras de pedir ayuda a la IA sin compartir detalles de los estudiantes."
      },
      {
        name: "Reglas del equipo",
        objective: "O6",
        notYet: "Menos de cinco reglas, o reglas que dejan que la IA decida el contenido del IEP o del plan 504.",
        meets: "Cinco reglas claras para el uso de la IA en la educación especial.",
        exceeds: "Cada regla tiene un ejemplo y deja toda decisión del IEP y del plan 504 en manos del equipo."
      }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminan el curso y aprueban la tarea final (rúbrica)",
      "Docentes que dicen haber usado en una clase materiales accesibles hechos con IA en un plazo de 30 días (encuesta de seguimiento)",
      "Equipos de educación especial que adoptan reglas de IA por escrito en un plazo de 60 días (encuesta de seguimiento)",
      "Casos informados de información de estudiantes puesta en herramientas no aprobadas (meta: ninguno)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet y un asistente de IA aprobado por el distrito",
      "Una lectura y una tarea generales de una clase próxima (sin información de estudiantes)",
      "Los materiales oficiales para familias y el aviso de garantías procesales de tu distrito",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego clasifiquen en grupo las tareas en \"La IA puede ayudar\" y \"Solo el equipo\".",
      "Usa solo materiales inventados o generales; nunca pegues IEP, planes 504, evaluaciones ni planes de conducta en herramientas no aprobadas.",
      "Recuerda a los participantes que el curso no es asesoría legal; invita al director de educación especial a revisar las reglas del equipo.",
      "Pide a los colegas que lean las explicaciones para las familias de los demás para cuidar el tono y la exactitud.",
      "Califica la tarea final con la rúbrica y comprueba que no aparezca información de estudiantes en ninguna parte del paquete."
    ]
  }
};

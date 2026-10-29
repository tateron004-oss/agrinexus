"use strict";

// Koach Learn course (Leadership Development), Spanish translation of leadership/edu-intro-ai-education.js. See scripts/koachlearn-courses/README.md, "Translations".
// US law and agency names (FERPA, COPPA, FTC, Department of Education) are kept, with a short Spanish explanation the first time.

module.exports = {
  id: "edu-intro-ai-education-es",
  lang: "es",
  translationOf: "edu-intro-ai-education",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 1: introducción a la IA en la educación",
  skills: "Explicarle la IA al personal y a las familias, Reconocer los buenos y los malos usos en las escuelas, Conocer lo básico de la privacidad estudiantil (FERPA, COPPA), Leer la orientación federal sobre IA, Dirigir una conversación con el personal",
  outcome: "explicarle a tu personal qué es la IA y cómo ya aparece en la escuela, nombrar los buenos usos y los riesgos, decir lo básico de la privacidad estudiantil según FERPA y COPPA, y dirigir una conversación de 15 minutos con el personal usando una hoja de una página llamada \"La IA en nuestra escuela\".",
  about: [
    "Este curso es para directores, subdirectores, docentes líderes, asesores pedagógicos y líderes de distrito. No necesitas formación técnica. Tus docentes y estudiantes ya están usando la IA; este curso te ayuda a guiar ese uso en lugar de reaccionar a él.",
    "El Capítulo 1 explica qué es la IA, dónde ya aparece en tu escuela y dónde ayuda o perjudica el aprendizaje. El Capítulo 2 cubre lo que los líderes deben saber antes que nada: la privacidad estudiantil según FERPA y COPPA (dos leyes federales de EE. UU.), lo que ha dicho el Departamento de Educación de EE. UU. sobre la IA y cómo abrir la conversación con tu personal.",
    "Este curso explica la ley con palabras sencillas para que sepas qué preguntar; no es asesoría legal. El asesor legal y el responsable de privacidad de tu distrito tienen la última palabra. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas. Este es el curso 1 de 8 de IA para líderes escolares y educativos."
  ],
  finalTask: "Escribe para el personal una hoja de una página llamada \"La IA en nuestra escuela\": qué es la IA en dos frases, tres formas en que puede ayudar a los docentes, tres riesgos para los estudiantes, la regla de privacidad (\"ningún nombre, calificación ni otra información que identifique a un estudiante en herramientas de IA que el distrito no haya aprobado\") y a quién preguntar. Úsala para dirigir una conversación de 15 minutos con el personal y anota las tres preguntas principales que hizo el personal.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Directores, subdirectores, docentes líderes, coaches pedagógicos y líderes de distrito en escuelas de Estados Unidos. No hace falta formación técnica.",
    startingPoint: "Saben que docentes y estudiantes usan IA y quizá probaron un chatbot. Todavía no pueden explicarle la IA con claridad al personal, hacer el mapa de dónde se usa en su escuela ni decir lo básico de la privacidad estudiantil que aplica a las herramientas de IA.",
    gap: "La IA ya está en las aulas, muchas veces sin guía. Los líderes necesitan explicarla con sencillez, ver dónde se usa, distinguir los usos útiles de los dañinos y conocer lo básico de FERPA y COPPA, para dirigir el uso de la IA en lugar de reaccionar a él y proteger la privacidad de los estudiantes.",
    constraints: [
      "Palabras sencillas para líderes escolares sin formación técnica; el curso explica la ley, pero no es asesoría legal",
      "El asesor legal y el responsable de privacidad del distrito tienen la última palabra sobre las obligaciones de privacidad",
      "Nada de nombres, calificaciones ni otra información que identifique a un estudiante en herramientas de IA no aprobadas, tampoco durante la práctica",
      "La orientación federal y estatal cambia, así que los líderes revisan ellos mismos la versión actual",
      "Tiempo: lecciones cortas que caben en una jornada escolar, más una conversación de 15 minutos con el personal"
    ],
    prerequisites: "Ninguno. Este es el curso 1 de 8 de IA para líderes escolares y educativos."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Cuando alguien del personal, una familia o un estudiante pregunta qué es la IA", action: "explicar la IA y la IA generativa con palabras sencillas, incluido por qué puede equivocarse", standard: "en dos frases que entenderían un docente nuevo, una familia y un estudiante de quinto grado" },
    { id: "O2", condition: "Con tu coordinador de tecnología o dos docentes", action: "hacer el mapa de dónde aparece ya la IA en tu escuela", standard: "anotando al menos seis lugares, cada uno marcado como aprobado o no y si toca datos de estudiantes" },
    { id: "O3", condition: "Con usos de la IA que se ven en las escuelas", action: "clasificar cada uso como útil, con cuidado o dañino", standard: "con una razón para cada uno, usando la prueba de la familia" },
    { id: "O4", condition: "Cuando el personal usa herramientas de IA", action: "decir lo básico de FERPA y COPPA y reescribir un pedido para que no tenga información de estudiantes", standard: "nombrando cuándo preguntar a tu responsable de privacidad o al asesor legal" },
    { id: "O5", condition: "Con la orientación federal y estatal sobre la IA en las escuelas", action: "resumir un principio federal y encontrar la orientación actual de tu estado", standard: "anotando su fecha y un punto que plantea, o que todavía no existe" },
    { id: "O6", condition: "Con tu personal", action: "dirigir una conversación de 15 minutos sobre IA usando una hoja de una página \"La IA en nuestra escuela\"", standard: "con todas las partes de la hoja incluidas y las tres preguntas principales del personal anotadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La IA en las escuelas de hoy",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la IA, con las palabras que usará tu personal",
          minutes: 5,
          goal: "Explicarle al personal la IA y la IA generativa con palabras sencillas.",
          text: [
            "La inteligencia artificial (IA) es software que hace tareas que normalmente necesitan el criterio de una persona, como reconocer la voz, encontrar patrones o escribir. La IA generativa crea contenido nuevo: texto, imágenes, audio y código. Las herramientas de chat como ChatGPT, Microsoft Copilot, Google Gemini y Claude están hechas con modelos de lenguaje grandes (LLM) que predicen palabras probables.",
            "Como predicen palabras probables, estas herramientas escriben con fluidez y aun así pueden estar equivocadas, desactualizadas o sesgadas. No conocen a tus estudiantes, tu plan de estudios ni tu comunidad a menos que alguien se los diga, y no se les debe dar información privada de los estudiantes.",
            "Una forma sencilla de decírselo al personal: \"La IA es una compañera rápida para los primeros borradores. No reemplaza el criterio del docente y nunca es la última palabra sobre un estudiante.\""
          ],
          words: [["IA generativa", "IA que crea textos, imágenes, audio o código nuevos."], ["LLM", "modelo de lenguaje grande: la IA detrás de los asistentes de chat."], ["Alucinación", "cuando la IA escribe algo que suena verdadero pero es inventado."]],
          slides: [
            { title: "La IA en dos frases", bullets: ["Software que hace tareas que piden criterio", "La IA generativa crea textos, imágenes, código"] },
            { title: "Fluido no es lo mismo que correcto", bullets: ["Puede estar equivocada, desactualizada o sesgada", "No conoce a tus estudiantes ni tu plan de estudios"] },
            { title: "Díselo al personal", bullets: ["Una compañera rápida para primeros borradores", "Nunca reemplaza el criterio del docente", "Nunca es la última palabra sobre un estudiante"] }
          ],
          tryIt: "Escribe una explicación de la IA en dos frases que pudieran entender un docente nuevo, un padre de familia y un alumno de quinto grado. Pruébala con un colega.",
          youCanNow: "explicarle al personal y a las familias la IA y la IA generativa con palabras sencillas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la IA generativa?", options: ["IA que crea textos, imágenes o código nuevos", "Un programa que califica exámenes de forma automática", "Un buscador de registros escolares", "Software que nunca se equivoca"], answer: 0, why: "La IA generativa crea contenido nuevo, y por eso también puede producir errores." },
            { objective: "O1", q: "Una familia pregunta por qué un chatbot le dio a su hijo un dato equivocado. ¿Qué le explicarías?", options: ["Que seguramente el niño lo escribió mal", "Que la IA predice palabras probables y puede equivocarse, así que sus respuestas hay que revisarlas", "Que la herramienta estaba fallando ese día", "Que solo las herramientas de IA de pago aciertan"], answer: 1, why: "La IA predice texto probable en lugar de comprobar datos, así que puede sonar bien y aun así estar equivocada." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dónde aparece ya la IA en tu escuela",
          minutes: 5,
          goal: "Hacer el mapa de dónde se usa ya la IA en tu escuela, de forma oficial y no oficial.",
          text: [
            "La IA ya está en tu edificio. Los docentes pueden usar herramientas de chat para preparar clases o correos para las familias. Los estudiantes pueden usarlas para las tareas, a veces de forma adecuada y a veces no. Muchos productos que tu distrito ya paga (plataformas de aprendizaje, herramientas de escritura, programas de lectura, software de oficina) han añadido funciones de IA, a veces activadas por defecto.",
            "También hay IA detrás de escena: programas de práctica adaptativos que eligen la siguiente pregunta, tableros de alerta temprana, detectores de plagio y de escritura con IA, y herramientas de seguridad o de vigilancia.",
            "Los líderes no pueden guiar lo que no ven. Un mapa rápido, hecho con tu coordinador de tecnología y unos cuantos docentes, muestra qué herramientas están aprobadas, cuáles se usan de todos modos y cuáles tocan datos de los estudiantes. Ese mapa es el punto de partida de todas las decisiones posteriores."
          ],
          steps: ["Pregunta a docentes, estudiantes y a tu coordinador de tecnología qué herramientas de IA usan.", "Haz una lista de las funciones de IA dentro de los productos que ya tienen.", "Marca cada una: aprobada o no, y si toca datos de los estudiantes.", "Anota dónde se topan los estudiantes con la IA sin saberlo."],
          words: [["Programa adaptativo", "software que cambia la siguiente pregunta o actividad según las respuestas de un estudiante."], ["Detector de escritura con IA", "una herramienta que dice poder saber si un texto lo escribió la IA; a menudo no es confiable."]],
          slides: [
            { title: "La IA ya está aquí", bullets: ["Docentes preparando clases y correos", "Estudiantes usando herramientas de chat", "Funciones de IA añadidas a herramientas que ya tienen"] },
            { title: "Detrás de escena", bullets: ["Programas de práctica adaptativos", "Tableros de alerta temprana", "Detectores y herramientas de vigilancia"] },
            { title: "Haz el mapa", bullets: ["¿Aprobada o no?", "¿Toca datos de los estudiantes?", "Dónde se topan con la IA sin saberlo"] }
          ],
          tryIt: "Con tu coordinador de tecnología o dos docentes, haz una lista de al menos seis lugares donde aparece la IA en tu escuela. Marca cada uno como aprobado o no, y si toca datos de los estudiantes.",
          youCanNow: "hacer el mapa de dónde se usa ya la IA en tu escuela y qué usos tocan datos de los estudiantes.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un programa de aprendizaje adaptativo?", options: ["Un programa que los docentes cambian a mano cada día", "Un programa que funciona sin internet", "Un programa que cambia la siguiente actividad según las respuestas del estudiante", "Un programa que solo pueden usar adultos"], answer: 2, why: "Los programas adaptativos usan las respuestas del estudiante para elegir lo que sigue." },
            { objective: "O2", q: "Te enteras de que una herramienta que tu escuela ya tiene activó una nueva función de IA. ¿Qué harías?", options: ["Ignorarlo, porque la herramienta ya estaba aprobada", "Prohibir toda la herramienta de inmediato", "Pedir a los docentes que dejen de usar computadoras", "Añadirla a tu mapa de IA y revisar si toca datos de estudiantes"], answer: 3, why: "Las funciones de IA pueden aparecer en herramientas que ya tienes, así que van en el mapa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dónde la IA ayuda al aprendizaje y dónde lo perjudica",
          minutes: 5,
          goal: "Clasificar los usos escolares de la IA en útiles, con cuidado y dañinos.",
          text: [
            "Los usos útiles suelen ahorrarles tiempo a los docentes o ampliar el acceso: preparar materiales de clase, crear preguntas de práctica en varios niveles de lectura, traducir cartas para las familias que luego revisa una persona calificada, y darles a los estudiantes un explicador paciente, como un tutor, bajo la guía del docente.",
            "Los usos con cuidado necesitan reglas claras: estudiantes que usan la IA en sus tareas (puede reemplazar el razonamiento que la tarea debía desarrollar), la retroalimentación de la IA sobre el trabajo de los estudiantes (puede ser genérica o equivocada) y los detectores de escritura con IA (pueden acusar injustamente a estudiantes, incluidos los que están aprendiendo inglés).",
            "Usos dañinos: poner información personal de los estudiantes en herramientas no aprobadas, dejar que la IA tome decisiones sobre calificaciones, ubicación, disciplina o educación especial, y usar la IA de formas que no se les dijeron a las familias. Una prueba para el personal: \"¿Me sentiría cómodo explicándole este uso a la familia del estudiante?\""
          ],
          words: [["Acceso", "si cada estudiante puede participar y beneficiarse, incluidos los estudiantes con discapacidad y los que están aprendiendo inglés."], ["Acusación injusta", "decir por error que un estudiante hizo trampa, por ejemplo porque un detector marcó su trabajo."]],
          slides: [
            { title: "Útiles", bullets: ["Preparar materiales y práctica", "Varios niveles de lectura", "Borradores de traducción que revisa una persona"] },
            { title: "Con cuidado", bullets: ["Uso de los estudiantes en las tareas", "Retroalimentación de la IA sobre su trabajo", "Los detectores pueden acusar injustamente"] },
            { title: "Dañinos", bullets: ["Datos de estudiantes en herramientas no aprobadas", "La IA decidiendo calificaciones, ubicación, disciplina", "Usos que no se les dijeron a las familias"] },
            { title: "La prueba de la familia", bullets: ["¿Le explicaría este uso a la familia?"] }
          ],
          tryIt: "Haz una lista de ocho usos de la IA que hayas visto u oído en escuelas. Marca cada uno como ÚTIL, CON CUIDADO o DAÑINO y escribe una razón.",
          youCanNow: "juzgar qué usos escolares de la IA ayudan al aprendizaje y cuáles ponen en riesgo a los estudiantes.",
          quickCheck: [
            { objective: "O3", q: "¿Qué pregunta la prueba de la familia?", options: ["¿Le explicaría este uso de la IA a la familia del estudiante?", "¿La familia tiene computadora?", "¿La familia pagó la herramienta?", "¿La familia usaría IA en casa?"], answer: 0, why: "Si no se lo explicarías a una familia, ese uso necesita una segunda mirada." },
            { objective: "O3", q: "Un docente quiere usar un detector de IA para decidir si hubo trampa en unos ensayos. ¿Cómo lo marcarías?", options: ["ÚTIL: ahorra tiempo", "DAÑINO: la IA nunca debe usarse", "CON CUIDADO: los detectores pueden acusar sin razón a estudiantes, así que nunca son la única evidencia", "No vale la pena hablarlo"], answer: 2, why: "Los detectores pueden acusar sin razón a estudiantes, incluidos quienes aprenden inglés." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA en las escuelas de hoy",
        questions: [
          { objective: "O1", q: "¿Cuál es la mejor descripción sencilla de la IA generativa para el personal?", options: ["Una cámara de seguridad escolar", "Un nuevo sistema de calificaciones", "IA que crea textos, imágenes o código nuevos", "Una app de asistencia"], answer: 2, why: "La IA generativa crea contenido nuevo." },
          { objective: "O1", q: "Un docente dice: \"Lo escribió la IA, así que debe estar bien.\" ¿Cuál es la mejor respuesta?", options: ["La IA predice palabras probables y puede equivocarse; revísalo", "Estar de acuerdo", "Solo si es largo", "Solo si usa palabras difíciles"], answer: 0, why: "Un texto fluido puede estar equivocado." },
          { objective: "O2", q: "¿Por qué hacer primero el mapa del uso de la IA en tu escuela?", options: ["Para prohibirlo todo", "Los proveedores lo exigen", "Es divertido", "Los líderes no pueden guiar lo que no ven"], answer: 3, why: "El mapa muestra el uso aprobado, el uso oculto y el riesgo para los datos de los estudiantes." },
          { objective: "O3", q: "¿Por qué los detectores de escritura con IA son un uso CON CUIDADO?", options: ["Siempre aciertan", "Pueden acusar injustamente a estudiantes, incluidos los que aprenden inglés", "Son gratis", "Escriben ensayos"], answer: 1, why: "Los falsos positivos pueden dañar a los estudiantes." },
          { objective: "O3", q: "¿Qué uso es DAÑINO?", options: ["Preparar preguntas de práctica", "Hacer un texto de lectura en tres niveles", "Redactar un boletín", "Dejar que la IA decida la ubicación de un estudiante en educación especial"], answer: 3, why: "Las decisiones sobre los estudiantes se quedan con personas calificadas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Lo que los líderes deben saber primero",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lo básico de la privacidad estudiantil: FERPA y COPPA",
          minutes: 6,
          goal: "Decir lo básico de FERPA y COPPA que aplica cuando el personal usa herramientas de IA.",
          text: [
            "FERPA, la Ley de Derechos Educativos y Privacidad de la Familia (Family Educational Rights and Privacy Act), protege la privacidad de los expedientes educativos de los estudiantes: los registros relacionados directamente con un estudiante que guarda la escuela. Los padres tienen derecho a revisar esos expedientes y a pedir correcciones; los derechos pasan al estudiante a los 18 años o cuando entra a la educación superior. Por lo general, las escuelas necesitan consentimiento para revelar información que identifique al estudiante, con excepciones como la información de directorio (después de avisar y dar la opción de negarse) y los funcionarios escolares con un interés educativo legítimo. Un proveedor externo puede contar como funcionario escolar solo si presta un servicio de la escuela, está bajo su control directo y sigue límites para no volver a compartir los datos.",
            "COPPA, la Ley de Protección de la Privacidad de los Niños en Línea (Children's Online Privacy Protection Act), que hace cumplir la Comisión Federal de Comercio (FTC), protege a los niños menores de 13 años en internet. La FTC dice que una escuela puede dar su consentimiento en lugar de los padres solo cuando el servicio recolecta la información para el uso y beneficio de la escuela y sin ningún otro fin comercial. La FTC modificó su Regla de COPPA el 22 de abril de 2025.",
            "Lo que esto significa en la práctica: un docente que pega nombres, calificaciones, detalles del IEP (el plan educativo individualizado) u otra información que identifique a estudiantes en una herramienta de IA gratuita que el distrito no aprobó puede estar revelando expedientes educativos a una empresa sin ningún acuerdo. La regla del líder: solo herramientas aprobadas por el distrito para todo lo relacionado con estudiantes, y quitar de todos modos los datos que los identifiquen. Para tus obligaciones exactas, pregunta al responsable de privacidad o al asesor legal de tu distrito; las leyes estatales de privacidad estudiantil pueden añadir más."
          ],
          words: [["FERPA", "la ley federal de EE. UU. que protege la privacidad de los expedientes educativos de los estudiantes."], ["COPPA", "la ley federal de EE. UU. que protege la privacidad en línea de los niños menores de 13 años."], ["Información de identificación personal (PII)", "información que identifica a un estudiante, como el nombre, el número de identificación o una combinación de datos."], ["Información de directorio", "datos básicos como el nombre y las fechas de asistencia que una escuela puede compartir después de avisar y dar la opción de negarse."]],
          slides: [
            { title: "FERPA en breve", bullets: ["Protege los expedientes educativos", "Los padres pueden revisarlos y pedir correcciones", "Los derechos pasan al estudiante a los 18 o en la universidad"] },
            { title: "FERPA y los proveedores", bullets: ["Suele hacer falta consentimiento para compartir PII", "Proveedor como funcionario escolar: servicio escolar, control directo", "Y límites para volver a compartir"] },
            { title: "COPPA en breve", bullets: ["Niños menores de 13 en internet; la hace cumplir la FTC", "Consentimiento escolar solo para uso escolar, sin otro fin comercial", "Regla modificada el 22 de abril de 2025"] },
            { title: "La regla del líder", bullets: ["Solo herramientas aprobadas por el distrito para temas de estudiantes", "Quita de todos modos los datos que identifiquen", "Pregunta al responsable de privacidad; las leyes estatales pueden añadir más"] }
          ],
          sources: [{ name: "FERPA: protección de la privacidad estudiantil (Departamento de Educación de EE. UU.)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: cumplir con COPPA, preguntas frecuentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FTC: privacidad de los niños", url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" }],
          tryIt: "Escribe tres ejemplos de lo que un docente NO debe pegar en una herramienta de IA no aprobada, y reescribe uno de ellos para que pida la misma ayuda sin ninguna información de estudiantes.",
          youCanNow: "decir lo básico de FERPA y COPPA que aplica al uso de la IA por parte del personal y la regla que se desprende de ello.",
          quickCheck: [
            { objective: "O4", q: "¿Qué protege COPPA?", options: ["Las cuentas de correo de los docentes", "La privacidad en línea de los niños menores de 13 años", "Los edificios escolares", "Solo los registros deportivos de los estudiantes"], answer: 1, why: "COPPA protege la privacidad en línea de los niños menores de 13 años." },
            { objective: "O4", q: "Un docente quiere ayuda de la IA para escribir comentarios a un estudiante, con su nombre y su calificación baja. ¿Qué le sugerirías?", options: ["Pegar el nombre y la calificación en cualquier herramienta gratuita", "Usar las iniciales del estudiante, que siempre es seguro", "No darle comentarios a ese estudiante", "Pedir ayuda con los comentarios sin ningún nombre ni calificación, o usar una herramienta aprobada por el distrito"], answer: 3, why: "Quitar la información del estudiante, o usar una herramienta aprobada, protege el expediente educativo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Lo que dice la orientación federal sobre la IA en las escuelas",
          minutes: 5,
          goal: "Resumir la orientación federal sobre IA y encontrar tú mismo la versión actual.",
          text: [
            "El 22 de julio de 2025, el Departamento de Educación de EE. UU. envió una carta de orientación (Dear Colleague Letter) sobre la IA. Según informó K-12 Dive, dice que los fondos federales de subvenciones existentes pueden apoyar el uso de la IA en herramientas curriculares de alta calidad, tutorías de alto impacto y orientación sobre trayectorias universitarias y profesionales, y establece principios: las iniciativas de IA deben estar dirigidas por educadores, ser éticas, ser accesibles para los estudiantes con discapacidad, ser transparentes sobre cómo se implementan las nuevas herramientas y cumplir las leyes federales de privacidad de datos.",
            "La orientación cambia. Lee la carta misma y cualquier orientación más reciente en ed.gov, y revisa lo que ha publicado la agencia de educación de tu estado; muchos estados tienen su propia orientación sobre IA para las escuelas. El sitio de la Oficina de Políticas de Privacidad Estudiantil del Departamento (studentprivacy.ed.gov) tiene recursos sobre servicios educativos en línea, incluida una lista de revisión de Términos de Servicio Modelo.",
            "Para los líderes, los principios son una prueba útil para cualquier plan de IA: ¿Está dirigido por educadores? ¿Es accesible? ¿Les dijimos a las familias cómo funciona? ¿Protege los datos de los estudiantes?"
          ],
          steps: ["Lee la carta sobre IA del Departamento de Educación en ed.gov.", "Revisa si la agencia de educación de tu estado tiene orientación sobre IA.", "Mira los recursos de studentprivacy.ed.gov sobre servicios educativos en línea.", "Prueba tus planes con los principios: dirigido por educadores, ético, accesible, transparente, que cumpla la privacidad."],
          words: [["Carta de orientación (Dear Colleague Letter)", "una carta de orientación de una agencia federal a las escuelas y los estados; es orientación, no una ley nueva."], ["Agencia de educación del estado", "el departamento de educación de tu estado."]],
          slides: [
            { title: "Carta federal sobre IA, 22 de julio de 2025", bullets: ["Fondos de subvenciones para herramientas curriculares con IA", "Tutorías de alto impacto", "Orientación universitaria y profesional"] },
            { title: "Sus principios", bullets: ["Dirigida por educadores y ética", "Accesible para estudiantes con discapacidad", "Transparente; cumple las leyes de privacidad"] },
            { title: "Encuentra la versión actual", bullets: ["ed.gov para la carta y orientaciones más nuevas", "La agencia de educación de tu estado", "studentprivacy.ed.gov para recursos sobre proveedores"] }
          ],
          sources: [{ name: "K-12 Dive: el Departamento de Educación publica sus prioridades sobre IA (julio de 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacidad y tecnología educativa (Oficina de Políticas de Privacidad Estudiantil)", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Busca la página sobre IA de la agencia de educación de tu estado (busca \"artificial intelligence\" o \"inteligencia artificial\" en su sitio web). Anota la fecha de su orientación más reciente y un punto que plantee, o anota que todavía no existe.",
          youCanNow: "resumir la orientación federal sobre IA para las escuelas y encontrar las versiones federales y estatales actuales.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde buscas la orientación de tu estado sobre la IA en las escuelas?", options: ["En el sitio web de la agencia de educación de tu estado", "En una publicación de redes sociales", "En la respuesta de la propia herramienta de IA", "En la página de ventas de un proveedor"], answer: 0, why: "La agencia de educación del estado es la fuente oficial de la orientación estatal." },
            { objective: "O5", q: "Un colega cita de memoria la orientación federal sobre IA. ¿Qué harías antes de compartirla con el personal?", options: ["Compartirla, porque suena bien", "Buscar el documento oficial actual y revisar su fecha y su redacción", "Pedirle a un chatbot de IA que la confirme", "Esperar a que otro colega esté de acuerdo"], answer: 1, why: "La orientación cambia, así que los líderes revisan ellos mismos la versión oficial actual." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Abrir la conversación sobre IA con tu personal",
          minutes: 6,
          goal: "Dirigir una conversación de 15 minutos con el personal sobre IA usando una hoja de una página.",
          text: [
            "El personal siente muchas cosas sobre la IA: entusiasmo, preocupación por las trampas, miedo a ser reemplazado, o simplemente demasiada carga para que le importe. Empieza escuchando, no con una política. Pregunta: \"¿Dónde han visto la IA este año, en su clase o en su propia vida?\"",
            "Luego comparte una hoja de una página: qué es la IA en dos frases, tres formas en que puede ayudar a los docentes, tres riesgos para los estudiantes, la regla de privacidad y a quién preguntar. Que sea de una sola página; puedes añadir detalles después.",
            "Cierra nombrando un siguiente paso (por ejemplo, una encuesta corta sobre las herramientas que usa el personal, o un grupo voluntario de docentes que pruebe una herramienta aprobada) y reúne las preguntas principales. Esas preguntas te dicen qué enseñar después."
          ],
          steps: ["Empieza con una pregunta para escuchar.", "Comparte la hoja de una página.", "Comenten un ejemplo útil y uno riesgoso.", "Nombra un siguiente paso.", "Reúne las tres preguntas principales."],
          words: [["Hoja informativa", "una página corta, impresa o compartida, que la gente se queda."], ["Siguiente paso", "una acción clara que el grupo acuerda hacer."]],
          slides: [
            { title: "Empieza escuchando", bullets: ["\"¿Dónde han visto la IA este año?\"", "Entusiasmo, preocupación y cansancio son normales"] },
            { title: "La hoja de una página", bullets: ["La IA en dos frases", "Tres ayudas, tres riesgos", "La regla de privacidad y a quién preguntar"] },
            { title: "Cierra bien", bullets: ["Un siguiente paso", "Reúne las tres preguntas principales"] }
          ],
          tryIt: "Tarea final: escribe tu hoja de una página \"La IA en nuestra escuela\" (definición en dos frases, tres ayudas, tres riesgos, regla de privacidad, a quién preguntar). Dirige con ella una conversación de 15 minutos con el personal y anota las tres preguntas principales que hizo el personal.",
          youCanNow: "abrir y dirigir la conversación sobre IA en tu escuela con un punto de partida claro y compartido.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una buena forma de abrir una conversación con el personal sobre IA?", options: ["Anunciar una lista de prohibiciones", "Mostrar una presentación larga sobre cómo funciona la IA", "Hacer una pregunta para escuchar dónde ha visto IA el personal", "Empezar con un examen"], answer: 2, why: "Empezar escuchando le muestra al personal que su experiencia importa." },
            { objective: "O6", q: "Al final de tu conversación de 15 minutos, el personal todavía tiene muchas preguntas. ¿Qué haces?", options: ["Responder todas, aunque tome una hora", "Decirles que busquen en internet", "Terminar sin un siguiente paso", "Anotar las tres preguntas principales y dar un siguiente paso"], answer: 3, why: "Un siguiente paso claro y las preguntas reunidas guían lo que haces después." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Lo que los líderes deben saber primero",
        questions: [
          { objective: "O4", q: "¿Qué protege FERPA?", options: ["Los sueldos de los docentes", "La seguridad del edificio escolar", "La privacidad de los expedientes educativos de los estudiantes", "Los menús de la cafetería"], answer: 2, why: "FERPA protege los expedientes educativos de los estudiantes." },
          { objective: "O4", q: "COPPA protege la privacidad en línea de los niños:", options: ["Menores de 13 años", "Menores de 18 años", "Menores de 21 años", "De cualquier edad"], answer: 0, why: "La FTC dice que la regla protege a los niños menores de 13 años." },
          { objective: "O4", q: "Según la FTC, ¿cuándo puede una escuela dar su consentimiento en lugar de los padres según COPPA?", options: ["Cuando quiera un docente", "Cuando el servicio recolecta datos solo para el uso y beneficio de la escuela, sin otro fin comercial", "Nunca", "Cuando la app es gratis"], answer: 1, why: "El consentimiento escolar se limita al uso educativo sin otro fin comercial." },
          { objective: "O5", q: "¿Cuál es un principio de la carta sobre IA del Departamento de Educación de julio de 2025?", options: ["Las iniciativas de IA deben estar dirigidas por educadores", "La IA debe reemplazar a los docentes", "La IA debe prohibirse", "Solo las escuelas privadas pueden usar la IA"], answer: 0, why: "La carta pide iniciativas dirigidas por educadores." },
          { objective: "O6", q: "¿Cómo debes abrir una conversación con el personal sobre IA?", options: ["Con una política de 30 páginas", "Con la presentación de ventas de un proveedor", "Con una prohibición", "Con una pregunta para escuchar dónde ha visto la IA el personal"], answer: 3, why: "Escuchar primero genera confianza y muestra lo que necesita el personal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 1: introducción a la IA en la educación",
    questions: [
      { objective: "O1", q: "Las herramientas de chat como ChatGPT están hechas con:", options: ["Hojas de cálculo", "Modelos de lenguaje grandes", "Impresoras", "Sistemas de asistencia"], answer: 1, why: "Los LLM hacen funcionar las herramientas de chat." },
      { objective: "O1", q: "Una alucinación de la IA es:", options: ["Una respuesta rápida", "Una pantalla rota", "Contenido inventado que suena verdadero", "Un simulacro escolar"], answer: 2, why: "La IA puede inventar datos y fuentes." },
      { objective: "O6", q: "El mejor mensaje de una línea para el personal es:", options: ["La IA califica todo", "La IA reemplaza la planeación de clases", "La IA es una compañera para primeros borradores, nunca la última palabra sobre un estudiante", "La IA siempre acierta"], answer: 2, why: "Mantiene en el centro el criterio del docente." },
      { objective: "O2", q: "Las funciones de IA pueden aparecer en herramientas que ya tienen:", options: ["A veces activadas por defecto", "Nunca", "Solo si pagan extra", "Solo en los teléfonos"], answer: 0, why: "Los proveedores añaden funciones de IA a productos existentes." },
      { objective: "O2", q: "Un programa adaptativo:", options: ["Imprime boletas de calificaciones", "Pasa lista", "Cierra puertas", "Cambia la siguiente actividad según las respuestas de un estudiante"], answer: 3, why: "Se adapta a las respuestas." },
      { objective: "O2", q: "Tu mapa de IA debe marcar si cada herramienta:", options: ["Tiene un logotipo bonito", "Está aprobada y toca datos de los estudiantes", "Es popular", "Es nueva"], answer: 1, why: "La aprobación y los datos son lo que deben saber los líderes." },
      { objective: "O3", q: "¿Cuál es un uso ÚTIL?", options: ["Vigilancia en secreto", "Decidir la disciplina", "Pegar los IEP en una herramienta gratuita", "Hacer preguntas de práctica en varios niveles de lectura"], answer: 3, why: "Ahorra tiempo y amplía el acceso." },
      { objective: "O3", q: "¿Por qué el uso de la IA por los estudiantes en sus tareas puede ser un problema?", options: ["Es ilegal", "Siempre es trampa", "Puede reemplazar el razonamiento que la tarea desarrolla", "Es demasiado lento"], answer: 2, why: "Las reglas deciden cuándo la IA apoya o reemplaza el aprendizaje." },
      { objective: "O3", q: "La prueba de la familia pregunta:", options: ["¿Le explicaría este uso de la IA a la familia del estudiante?", "¿La familia tiene computadora?", "¿La familia está en línea?", "¿La familia pagó?"], answer: 0, why: "Sentirse cómodo explicando un uso es una buena revisión." },
      { objective: "O4", q: "Los derechos de FERPA pasan de los padres al estudiante:", options: ["A los 10 años", "A los 18 años o al entrar a la educación superior", "A los 13 años", "Nunca"], answer: 1, why: "El estudiante pasa a ser un estudiante con derechos propios." },
      { objective: "O4", q: "Según FERPA, los padres pueden:", options: ["Revisar los expedientes educativos de su hijo", "Leer los diarios privados de los docentes", "Cambiar las calificaciones ellos mismos", "Nada"], answer: 0, why: "Revisar los expedientes es un derecho central de FERPA." },
      { objective: "O4", q: "Un proveedor puede ser un \"funcionario escolar\" según FERPA solo si:", options: ["Tiene una app", "Es gratis", "Es popular", "Presta un servicio de la escuela bajo su control directo, con límites para volver a compartir"], answer: 3, why: "Esas condiciones vienen de la orientación sobre FERPA." },
      { objective: "O4", q: "La información de directorio se puede compartir:", options: ["Nunca", "Después de avisar y dar la opción de negarse", "Solo con proveedores", "Solo por los estudiantes"], answer: 1, why: "Las escuelas deben avisar y permitir que se nieguen." },
      { objective: "O4", q: "¿Qué agencia hace cumplir COPPA?", options: ["El Servicio Postal", "El Departamento de Agricultura", "La Comisión Federal de Comercio", "El consejo escolar"], answer: 2, why: "La FTC hace cumplir COPPA." },
      { objective: "O4", q: "Un docente pega los nombres y las calificaciones de sus estudiantes en una herramienta de IA gratuita no aprobada. Esto:", options: ["Es obligatorio", "Siempre está bien", "Puede revelar expedientes educativos a una empresa sin ningún acuerdo", "Mejora la privacidad"], answer: 2, why: "Ese es el riesgo de FERPA con las herramientas no aprobadas." },
      { objective: "O4", q: "Para las obligaciones exactas de privacidad de tu distrito, pregunta a:", options: ["Tu responsable de privacidad o tu asesor legal", "Un chatbot", "Un estudiante", "Un vendedor de un proveedor"], answer: 0, why: "Las personas calificadas tienen la última palabra." },
      { objective: "O5", q: "La carta sobre IA del Departamento de Educación tiene fecha del:", options: ["3 de marzo de 2019", "1 de enero de 2000", "27 de octubre de 2026", "22 de julio de 2025"], answer: 3, why: "Se envió el 22 de julio de 2025." },
      { objective: "O5", q: "¿Dónde puedes encontrar la lista de revisión de Términos de Servicio Modelo?", options: ["En una app de redes sociales", "En studentprivacy.ed.gov", "En un anuncio de un proveedor", "En los comentarios de una noticia"], answer: 1, why: "Aparece en el sitio de la Oficina de Políticas de Privacidad Estudiantil." },
      { objective: "O5", q: "Además de la orientación federal, debes revisar:", options: ["Solo los blogs de los proveedores", "Las normas de otro país", "Nada más", "La orientación sobre IA de la agencia de educación de tu estado"], answer: 3, why: "Muchos estados publican su propia orientación sobre IA." },
      { objective: "O6", q: "Una buena conversación con el personal sobre IA termina con:", options: ["Una presentación de ventas", "Una prohibición", "Un siguiente paso y las preguntas principales reunidas", "Ninguna conclusión"], answer: 2, why: "Los siguientes pasos y las preguntas guían lo que sigue." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      6,
      9,
      13,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Definición sencilla",
        objective: "O1",
        notYet: "La definición usa palabras técnicas o es de más de dos frases.",
        meets: "Explica la IA en dos frases sencillas.",
        exceeds: "Un colega nuevo en la IA la entendió a la primera lectura."
      },
      {
        name: "Ayudas y riesgos",
        objective: "O3",
        notYet: "Menos de tres ayudas o de tres riesgos, o no corresponden a la escuela.",
        meets: "Tres formas en que la IA puede ayudar a los docentes y tres riesgos para los estudiantes.",
        exceeds: "Cada riesgo dice qué debe hacer el personal al respecto."
      },
      {
        name: "Regla de privacidad",
        objective: "O4",
        notYet: "La regla de privacidad falta o no es clara.",
        meets: "Dice que no se ponen nombres, calificaciones ni otra información que identifique a un estudiante en herramientas de IA que el distrito no ha aprobado.",
        exceeds: "Da un ejemplo corto de cómo pedir ayuda sin información de estudiantes."
      },
      {
        name: "A quién preguntar",
        objective: "O6",
        notYet: "No dice a quién preguntar.",
        meets: "Nombra a quién hacerle las preguntas.",
        exceeds: "También nombra al responsable de privacidad para las preguntas de privacidad."
      },
      {
        name: "Conversación con el personal",
        objective: "O6",
        notYet: "No se hizo la conversación, o no se anotaron las preguntas.",
        meets: "Dirigió una conversación de 15 minutos y anotó las tres preguntas principales.",
        exceeds: "Terminó con un siguiente paso claro para el personal."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Escuelas cuyo personal recibió una hoja \"La IA en nuestra escuela\" en un plazo de 30 días (encuesta de seguimiento)",
      "Escuelas con un mapa de las herramientas de IA en uso, marcadas como aprobadas o no (encuesta de seguimiento)",
      "Líderes que pasan al curso 2 de IA para líderes escolares y educativos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "La lista de herramientas aprobadas de tu distrito, si existe",
      "Papel o un documento para el mapa de IA y la hoja de una página",
      "Unos 60 minutos en total, más una conversación de 15 minutos con el personal"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego armen el mapa de IA en equipos por escuela con el coordinador de tecnología.",
      "Recuerda a los líderes que el curso explica la ley con palabras sencillas y no es asesoría legal; si se puede, invita al responsable de privacidad del distrito.",
      "Nunca uses información real de estudiantes en los ejemplos de práctica.",
      "Deja que los líderes practiquen en parejas cómo abrir la conversación con el personal antes de hacerla en la escuela.",
      "Califica la tarea final con la rúbrica y pide como evidencia las preguntas del personal que se anotaron."
    ]
  }
};

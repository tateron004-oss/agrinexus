"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-tools-educators.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-tools-educators-es",
  lang: "es",
  translationOf: "edu-ai-tools-educators",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 2: Herramientas de IA para educadores",
  skills: "Conocer los tipos de herramientas de IA para escuelas, Escribir instrucciones para docentes que funcionan, Usar la IA en tres tareas diarias del docente, Revisar los términos de privacidad de una herramienta, Armar una lista de herramientas verde-amarillo-rojo",
  outcome: "usar herramientas de IA en tareas diarias del docente con un patrón de instrucciones confiable, revisar los términos de privacidad de una herramienta de IA con una lista de verificación antes de usarla con estudiantes, y publicar una lista breve de herramientas de IA verde-amarillo-rojo para tu escuela.",
  about: [
    "Este curso es para directores, coordinadores pedagógicos, docentes líderes, coordinadores de tecnología y docentes. Es práctico: usarás herramientas de IA en tareas escolares reales y luego decidirás cuáles son seguras para recomendar.",
    "El capítulo 1 ordena las muchas herramientas de IA en unos pocos tipos, enseña un patrón de instrucciones que funciona para docentes y practica tres tareas diarias. El capítulo 2 te enseña a revisar una herramienta antes de que el personal o los estudiantes la usen: términos de privacidad, reglas de edad, uso de datos y cómo publicar una lista sencilla de herramientas en la que tu personal pueda confiar.",
    "Nunca pongas nombres de estudiantes, calificaciones, detalles del IEP (plan educativo individualizado) ni otros datos que los identifiquen en una herramienta que tu distrito no haya aprobado. Practica con ejemplos inventados. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Este es el curso 2 de 8 de IA para líderes escolares y educativos."
  ],
  finalTask: "Crea el kit inicial de IA de tu escuela: una tarjeta de instrucciones con tres instrucciones para docentes ya probadas (un correo a las familias, un texto de lectura en tres niveles y diez preguntas de práctica con clave de respuestas), y una lista verde-amarillo-rojo de al menos tres herramientas de IA, cada una revisada con una lista de verificación de privacidad basada en el recurso Model Terms of Service de studentprivacy.ed.gov, con una línea que explique su color.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Directores, coaches pedagógicos, docentes líderes, coordinadores de tecnología y docentes de escuelas de Estados Unidos que quieren practicar con herramientas de IA y tener una forma de juzgar cuáles son seguras.",
    startingPoint: "Saben qué es la IA y lo básico de FERPA y COPPA del curso 1. Han probado un chatbot, pero no tienen un modelo de instrucciones confiable ni una forma de revisar las condiciones de privacidad de una herramienta.",
    gap: "El personal prueba muchas herramientas de IA, algunas con condiciones de privacidad débiles o reglas de edad que los estudiantes no cumplen. Los líderes necesitan obtener buenos resultados de la IA en las tareas diarias de los docentes, revisar las herramientas antes de que alguien las use con estudiantes y darle al personal una lista sencilla en la que pueda confiar.",
    constraints: [
      "Nunca poner nombres, calificaciones, detalles del IEP ni otra información que identifique a un estudiante en una herramienta que el distrito no ha aprobado; la práctica usa ejemplos inventados",
      "Las condiciones y las reglas de edad de las herramientas cambian, así que cada persona revisa ella misma las condiciones actuales",
      "El responsable de privacidad o el equipo de tecnología del distrito confirma la lista final de herramientas",
      "Dispositivos: una computadora con internet y al menos un asistente de IA gratuito",
      "Tiempo: lecciones cortas que caben en una jornada escolar"
    ],
    prerequisites: "\"IA para líderes escolares y educativos 1: introducción a la IA en la educación\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las herramientas de IA que usa tu personal", action: "clasificar cada herramienta como asistente general, plataforma educativa o función integrada", standard: "marcando si el distrito tiene un acuerdo para ella" },
    { id: "O2", condition: "Para una clase que das o apoyas", action: "escribir instrucciones para docentes con rol, estudiantes, objetivo, límites y formato", standard: "con las cinco partes y guardadas en una tarjeta de instrucciones compartida" },
    { id: "O3", condition: "Con detalles inventados", action: "usar la IA para un correo a las familias, un texto por niveles y preguntas de práctica con clave de respuestas, y revisar cada uno", standard: "corrigiendo todos los errores antes de usarlos y resolviendo tú mismo cada respuesta" },
    { id: "O4", condition: "Con una herramienta de IA que el personal quiere", action: "revisar su política de privacidad y sus términos con una lista de verificación de privacidad", standard: "marcando cada punto como claro, poco claro o problema para el plan que usarías" },
    { id: "O5", condition: "Antes de que los estudiantes inicien sesión en una herramienta", action: "revisar la edad mínima actual de la herramienta, sus reglas de permiso de los padres y cómo aplica COPPA", standard: "usando los términos actuales de la propia herramienta" },
    { id: "O6", condition: "Con al menos tres herramientas revisadas", action: "publicar una lista verde-amarillo-rojo de herramientas para el personal", standard: "mostrando el color de cada herramienta, la razón, los usos permitidos y la fecha de revisión" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Usar herramientas de IA en tareas del docente",
      lessons: [
        {
          objectives: ["O1"],
          title: "Los tipos de herramientas de IA en las escuelas",
          minutes: 5,
          goal: "Clasificar las herramientas de IA en asistentes generales, plataformas educativas y funciones integradas.",
          text: [
            "Los asistentes de IA generales, como ChatGPT, Microsoft Copilot, Google Gemini y Claude, pueden hacer casi cualquier tarea de escritura o de razonamiento. Son flexibles, pero no saben nada de tu currículo si no se lo dices, y sus condiciones de datos dependen del plan que uses.",
            "Las plataformas educativas de IA están hechas para docentes o estudiantes: generadores de clases y de pruebas, herramientas de tutoría, herramientas de retroalimentación. Pueden adaptarse mejor a las tareas escolares y algunas ofrecen acuerdos con el distrito, pero cada una debe revisarse en privacidad y calidad.",
            "Las funciones de IA integradas están dentro de herramientas que ya usas: Microsoft 365, Google Workspace, Canva, tu plataforma de gestión del aprendizaje. Son cómodas, pero pueden activarse sin que nadie lo decida, así que pregunta a tu equipo de tecnología cuáles están activas y bajo qué acuerdo."
          ],
          words: [["Asistente general", "una herramienta de chat con IA que puede ayudar con casi cualquier tarea."], ["Plataforma educativa", "una herramienta de IA hecha para tareas de enseñanza o aprendizaje."], ["Función integrada", "una función de IA dentro de un programa que ya usas."]],
          slides: [
            { title: "Asistentes generales", bullets: ["ChatGPT, Copilot, Gemini, Claude", "Flexibles, pero no conocen tu currículo", "Las condiciones de datos dependen del plan"] },
            { title: "Plataformas educativas", bullets: ["Herramientas de clases, pruebas, tutoría y retroalimentación", "Se adaptan mejor a las tareas escolares", "Cada una debe revisarse"] },
            { title: "Funciones integradas", bullets: ["Dentro de Microsoft 365, Google, Canva, tu plataforma de aprendizaje", "Pueden estar activas por defecto", "Revisa cuáles están activas y bajo qué acuerdo"] }
          ],
          tryIt: "Haz una lista de las herramientas de IA que tú o tu personal usan hoy. Pon cada una en uno de los tres tipos y marca si tu distrito tiene un acuerdo para ella (sí, no, no sé).",
          youCanNow: "clasificar las herramientas de IA en tres tipos y saber qué revisar en cada uno.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es una función de IA integrada?", options: ["Una herramienta de IA que hay que comprar aparte", "Una función de IA dentro de un software que ya usas", "Un chatbot hecho por un estudiante", "Una hoja de trabajo en papel"], answer: 1, why: "Las funciones integradas aparecen dentro de herramientas que ya tienes, a veces activadas por defecto." },
            { objective: "O1", q: "Un docente usa una plataforma educativa de IA nueva de la que no has oído hablar. ¿Qué harías primero?", options: ["Aprobarla, porque está hecha para escuelas", "Prohibir todas las plataformas de IA", "Anotarla y revisar si el distrito tiene un acuerdo para ella", "Preguntar a los estudiantes si les gusta"], answer: 2, why: "Las plataformas educativas también hay que revisarlas en privacidad y calidad." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Un patrón de instrucciones que funciona para docentes",
          minutes: 5,
          goal: "Escribir instrucciones para docentes con rol, estudiantes, objetivo, límites y formato.",
          text: [
            "Los docentes obtienen mejores resultados con una instrucción de cinco partes. Rol: “Eres un docente de ciencias de 7.º grado con experiencia.” Estudiantes: grado, nivel de lectura y necesidades en términos generales (sin nombres). Objetivo: el objetivo de aprendizaje o el estándar. Límites: tiempo, materiales, extensión, qué evitar. Formato: una tabla, pasos numerados, una hoja de trabajo.",
            "Ejemplo: “Eres un docente de 4.º grado con experiencia. Mi grupo lee en niveles distintos. Escribe un texto de 300 palabras sobre el ciclo del agua en tres niveles de lectura con los mismos datos clave, y luego cinco preguntas de comprensión para cada uno. Usa una tabla.”",
            "Después mejóralo con seguimientos: “haz el nivel 1 más sencillo”, “agrega una lista de vocabulario”, “alinea las preguntas con la idea principal”. Guarda las instrucciones que funcionan en una tarjeta de instrucciones compartida para que tus colegas puedan reutilizarlas."
          ],
          steps: ["Rol: ¿qué papel debe tomar la IA?", "Estudiantes: grado, nivel y necesidades en términos generales.", "Objetivo: objetivo de aprendizaje o estándar.", "Límites: tiempo, extensión, materiales.", "Formato: tabla, pasos, hoja de trabajo."],
          words: [["Instrucción", "lo que escribes a una herramienta de IA para pedirle algo (en inglés, prompt)."], ["Tarjeta de instrucciones", "una lista compartida de instrucciones probadas que el personal puede reutilizar."]],
          slides: [
            { title: "Instrucción docente de cinco partes", bullets: ["Rol", "Estudiantes (sin nombres)", "Objetivo, límites, formato"] },
            { title: "Ejemplo", bullets: ["Docente de 4.º grado, varios niveles de lectura", "Texto sobre el ciclo del agua en tres niveles", "Cinco preguntas para cada uno, en una tabla"] },
            { title: "Mejorar y guardar", bullets: ["Seguimientos: más sencillo, agrega vocabulario", "Guarda las mejores en una tarjeta compartida"] }
          ],
          tryIt: "Escribe una instrucción de cinco partes para una clase que darás (o apoyarás) pronto. Ejecútala, haz un seguimiento y guarda la instrucción final.",
          youCanNow: "escribir instrucciones para docentes que dan resultados útiles desde el primer intento.",
          quickCheck: [
            { objective: "O2", q: "¿Qué va en la parte de \"límites\" de unas instrucciones para docentes?", options: ["Límites como el largo, el nivel de lectura o lo que hay que evitar", "El nombre completo del estudiante", "La contraseña del docente", "El nombre de la herramienta de IA"], answer: 0, why: "Los límites hacen que la respuesta se ajuste a tu clase." },
            { objective: "O2", q: "La IA te da un texto demasiado difícil para tus estudiantes. ¿Qué le enviarías?", options: ["Empezar de nuevo en otra herramienta", "Aceptarlo y explicar las palabras difíciles en clase", "Pegar los puntajes de lectura de un estudiante", "Una pregunta de seguimiento como \"Hazlo más sencillo, con frases más cortas\""], answer: 3, why: "Una pregunta de seguimiento clara ajusta la respuesta sin compartir datos de estudiantes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tres tareas diarias, bien hechas",
          minutes: 6,
          goal: "Usar la IA para un correo a las familias, un texto por niveles y preguntas de práctica, y revisar cada uno.",
          text: [
            "Correo a las familias: da el propósito, los datos clave (evento, fecha, qué deben hacer las familias) y el tono. Pide una versión breve y cálida en lenguaje sencillo. Si debe enviarse en otros idiomas, una traducción de la IA es un borrador; pide a un hablante calificado que la revise antes de que llegue a las familias.",
            "Texto por niveles: pide el mismo contenido en tres niveles de lectura con los mismos datos clave. Revisa tú mismo los datos; la IA puede introducir errores al simplificar.",
            "Preguntas de práctica: pide diez preguntas con clave de respuestas y una breve explicación para cada respuesta. Resuelve tú mismo las respuestas; las claves de la IA se equivocan más de lo que la gente cree, sobre todo en matemáticas y ciencias. En las tres tareas, tú eres el editor y la revisión final."
          ],
          steps: ["Correo a las familias: propósito, datos, tono; traducción revisada por una persona calificada.", "Texto por niveles: los mismos datos en tres niveles; revisa los datos.", "Preguntas de práctica: clave con explicaciones; resuelve tú cada respuesta.", "Edita todo antes de usarlo."],
          words: [["Texto por niveles", "el mismo contenido escrito en distintos niveles de lectura."], ["Clave de respuestas", "la lista de respuestas correctas de unas preguntas."]],
          slides: [
            { title: "Correo a las familias", bullets: ["Propósito, datos, tono", "Lenguaje sencillo", "Traducciones revisadas por un hablante calificado"] },
            { title: "Texto por niveles", bullets: ["Los mismos datos, tres niveles", "Revisa los datos: simplificar puede añadir errores"] },
            { title: "Preguntas de práctica", bullets: ["Diez preguntas con clave de respuestas", "Resuelve tú cada respuesta", "Tú eres el editor y la revisión final"] }
          ],
          tryIt: "Haz las tres tareas con datos inventados: un correo a las familias sobre una excursión, un texto en tres niveles y diez preguntas con clave de respuestas. Cuenta los errores que tuviste que corregir.",
          youCanNow: "usar la IA en tres tareas diarias del docente y revisar los resultados como un editor.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un texto por niveles?", options: ["Un texto impreso con letras grandes", "El mismo contenido escrito para distintos niveles de lectura", "Un texto sin imágenes", "Un examen con tres secciones"], answer: 1, why: "El texto por niveles permite que estudiantes con distintos niveles de lectura aprendan el mismo contenido." },
            { objective: "O3", q: "La IA escribe diez preguntas de práctica con clave de respuestas. ¿Qué haces antes de usarlas?", options: ["Resuelves tú mismo cada respuesta y corriges los errores", "Las usas tal como están", "Revisas solo la primera pregunta", "Le preguntas a la IA si sus respuestas están bien"], answer: 0, why: "Las claves de respuestas de la IA se equivocan más de lo que la gente cree, así que el docente revisa cada una." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Usar herramientas de IA en tareas del docente",
        questions: [
          { objective: "O1", q: "Las funciones de IA dentro de programas que ya tienes:", options: ["Siempre están desactivadas", "Nunca tocan datos", "Pueden estar activas por defecto; consulta a tu equipo de tecnología", "No necesitan ningún acuerdo"], answer: 2, why: "Las funciones integradas pueden activarse sin que nadie lo decida." },
          { objective: "O2", q: "¿Qué va en la parte de “estudiantes” de una instrucción docente?", options: ["Grado y niveles de lectura en términos generales", "Los nombres completos de los estudiantes", "Las metas del IEP de cada estudiante con su nombre", "Los teléfonos de los padres"], answer: 0, why: "Describe a los estudiantes en general, nunca con datos que los identifiquen." },
          { objective: "O3", q: "Una traducción de la IA de una carta a las familias es:", options: ["Lista para enviar", "Siempre perfecta", "Ilegal", "Un borrador que debe revisar un hablante calificado"], answer: 3, why: "Las traducciones pueden tener errores; las familias merecen información correcta." },
          { objective: "O3", q: "¿Por qué debes resolver tú cada respuesta de una clave hecha por IA?", options: ["Lo exige la ley", "Las claves de la IA se equivocan más de lo que la gente cree", "Alarga la prueba", "A los estudiantes les gusta"], answer: 1, why: "Los errores en las claves confunden a los estudiantes." },
          { objective: "O2", q: "¿Dónde debes guardar las instrucciones que funcionan bien?", options: ["En ningún lado", "En el correo a las familias", "En la cuenta de un estudiante", "En una tarjeta de instrucciones compartida"], answer: 3, why: "Las instrucciones probadas y compartidas ahorran tiempo a los colegas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Elegir herramientas seguras para los estudiantes",
      lessons: [
        {
          objectives: ["O4"],
          title: "Leer los términos de privacidad con una lista de verificación",
          minutes: 6,
          goal: "Revisar la política de privacidad y los términos de una herramienta de IA con una lista de verificación breve.",
          text: [
            "La Oficina de Políticas de Privacidad Estudiantil del Departamento de Educación de EE. UU. publica una lista de verificación llamada Model Terms of Service (modelo de términos de servicio) para ayudar a las escuelas a revisar la política de privacidad y los términos de una herramienta en línea antes de registrarse. Úsala, o usa una lista que tu distrito ya tenga.",
            "Preguntas clave: ¿Qué datos de los estudiantes recopila? ¿De quién son los datos? ¿La empresa usa datos de estudiantes para publicidad o para entrenar sus modelos de IA? ¿Puede la escuela pedir que se borren los datos, y cuándo? ¿Quién más recibe los datos? ¿Cómo se protegen y qué pasa si hay una filtración? ¿Puede la empresa cambiar los términos sin avisarte?",
            "Lee la política del plan que realmente usarías; los planes gratuitos para el público y los planes educativos suelen tener términos distintos. Si las respuestas no son claras, la respuesta es “todavía no”. FERPA y COPPA (leyes federales de privacidad de estudiantes y de niños) fijan el mínimo, y tu estado puede tener leyes más estrictas; el responsable de privacidad de tu distrito puede decirte cuáles aplican."
          ],
          steps: ["Abre la política de privacidad y los términos de la herramienta para el plan que usarías.", "Recorre la lista: datos recopilados, propiedad, publicidad y entrenamiento, borrado, intercambio, seguridad, cambios.", "Marca cada punto como claro, poco claro o problema.", "Pregunta por escrito al proveedor sobre los puntos poco claros.", "Envía el resultado al responsable de privacidad de tu distrito."],
          words: [["Política de privacidad", "la declaración de una empresa sobre qué datos recopila y cómo los usa."], ["Términos de servicio", "las reglas y el acuerdo para usar un producto."], ["Filtración de datos", "cuando alguien accede a datos o los divulga sin permiso."]],
          slides: [
            { title: "Usa una lista de verificación", bullets: ["Model Terms of Service (studentprivacy.ed.gov)", "O la lista de tu distrito"] },
            { title: "Preguntas clave", bullets: ["Qué datos y de quién son", "¿Publicidad o entrenamiento de IA con datos de estudiantes?", "Borrado, intercambio, seguridad, filtraciones"] },
            { title: "Lee el plan correcto", bullets: ["Los términos para el público y los educativos difieren", "Poco claro significa “todavía no”", "Pregunta al responsable de privacidad por las leyes estatales"] }
          ],
          sources: [{ name: "Privacidad y tecnología educativa: lista Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }, { name: "FERPA: protección de la privacidad estudiantil", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Elige una herramienta de IA que tu personal quiera usar. Lee su política de privacidad para el plan que usarías y marca cada punto de la lista como claro, poco claro o problema.",
          youCanNow: "revisar los términos de privacidad de una herramienta de IA con una lista de verificación antes de usarla con estudiantes.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es una pregunta de la lista de verificación de privacidad?", options: ["¿El logotipo de la herramienta es amable?", "¿Cuánta gente la usa?", "¿La empresa usa los datos de los estudiantes para entrenar su IA?", "¿Funciona en tabletas?"], answer: 2, why: "Si los datos de los estudiantes entrenan la IA es una pregunta clave de privacidad." },
            { objective: "O4", q: "Las condiciones de privacidad del plan gratuito son distintas a las del plan educativo. ¿Cuáles revisas?", options: ["Las que sean más cortas", "Las del plan gratuito, porque es más barato", "Ninguna; todas las condiciones son iguales", "Las del plan que tu escuela usaría en realidad"], answer: 3, why: "Los planes gratuitos para el público y los planes educativos suelen tener condiciones distintas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reglas de edad y cuentas de estudiantes",
          minutes: 5,
          goal: "Revisar las reglas de edad de una herramienta y cómo aplica COPPA antes de que los estudiantes inicien sesión.",
          text: [
            "Muchas herramientas de IA fijan edades mínimas y reglas de permiso de los padres en sus términos, y estas cambian. Revisa los términos actuales de cada herramienta; no te fíes de lo que recuerda un colega. Una herramienta que está bien para docentes puede no estar permitida para estudiantes.",
            "Para niños menores de 13 años, COPPA aplica al servicio en línea. La FTC (Comisión Federal de Comercio de EE. UU.) dice que una escuela puede dar el consentimiento en lugar de los padres solo cuando el servicio recopila información de los estudiantes para uso y beneficio de la escuela y para ningún otro fin comercial. La FTC también sugiere, como buena práctica, que las escuelas informen a los padres qué servicios en línea han aprobado.",
            "Prefiere cuentas de estudiantes administradas por la escuela bajo un acuerdo del distrito antes que estudiantes registrándose por su cuenta con correos personales. Decide de antemano para qué pueden usar la IA los estudiantes e infórmalo a las familias."
          ],
          steps: ["Lee las reglas actuales de edad y permiso de la herramienta.", "Si los estudiantes tienen menos de 13 años, revisa cómo funcionaría el consentimiento de COPPA.", "Prefiere cuentas administradas por la escuela bajo un acuerdo.", "Informa a las familias qué servicios están aprobados.", "Decide para qué pueden usarla los estudiantes."],
          words: [["Edad mínima", "la edad más baja que los términos de una herramienta permiten para usarla."], ["Cuenta administrada por la escuela", "una cuenta de estudiante creada y controlada por la escuela."]],
          slides: [
            { title: "Revisa las reglas de edad de cada herramienta", bullets: ["Las fija cada herramienta en sus términos", "Cambian: lee la versión actual", "Apta para docentes no significa apta para estudiantes"] },
            { title: "Menores de 13: COPPA", bullets: ["Consentimiento de la escuela solo para uso escolar", "Ningún otro fin comercial", "Informa a los padres qué aprobaste"] },
            { title: "Cuentas", bullets: ["Administradas por la escuela, bajo un acuerdo", "No registros personales", "Informa a las familias los usos permitidos"] }
          ],
          sources: [{ name: "FTC: Cumplir con COPPA, preguntas frecuentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Para la herramienta de la lección 4, busca en sus términos la edad mínima actual y la regla de permiso de los padres. Escribe si los estudiantes de tu escuela podrían usarla y cómo.",
          youCanNow: "revisar las reglas de edad de una herramienta y el consentimiento de COPPA antes de que un estudiante inicie sesión.",
          quickCheck: [
            { objective: "O5", q: "¿Cómo conviene crear las cuentas de los estudiantes en una herramienta de IA?", options: ["Los estudiantes se registran con su correo personal", "Los docentes comparten un solo inicio de sesión con la clase", "Cuentas administradas por la escuela bajo un acuerdo", "Sin cuentas; los estudiantes usan la cuenta de un padre o madre"], answer: 2, why: "Las cuentas administradas por la escuela bajo un acuerdo mantienen los datos de los estudiantes bajo el control de la escuela." },
            { objective: "O5", q: "Un colega dice que una herramienta está bien para niños de 10 años. ¿Qué revisas?", options: ["Los términos actuales de la herramienta sobre la edad mínima y el permiso de los padres", "Una reseña en redes sociales", "Si otras escuelas la usan", "Nada; confías en tu colega"], answer: 0, why: "Las reglas de edad cambian, así que revisa tú mismo los términos actuales de la herramienta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Publicar una lista de herramientas verde-amarillo-rojo",
          minutes: 6,
          goal: "Publicar una lista sencilla que diga al personal qué herramientas de IA están aprobadas y para qué.",
          text: [
            "El personal necesita una respuesta sencilla a “¿puedo usar esto?”. Una lista verde-amarillo-rojo se la da. Verde: aprobada bajo un acuerdo del distrito; puede usarse con información de estudiantes según lo permita el acuerdo. Amarillo: permitida para tareas del docente sin información de estudiantes (ideas de clase, materiales generales). Rojo: no permitida, por problemas de privacidad, edad o calidad.",
            "Para cada herramienta, anota el color, el motivo, los usos permitidos, si los estudiantes pueden usarla y la fecha de la revisión. El responsable de privacidad o el equipo de tecnología de tu distrito debe estar de acuerdo con la lista verde.",
            "Acompaña la lista con tu tarjeta de instrucciones para que el personal sepa qué usar y cómo usarlo bien. Revisa ambas cada período escolar, porque las herramientas y los términos cambian."
          ],
          steps: ["Haz una lista de las herramientas que revisaste.", "Dale a cada una un color: verde, amarillo o rojo.", "Anota el motivo, los usos permitidos, el uso por estudiantes y la fecha de revisión.", "Pide al responsable de privacidad o al equipo de tecnología que lo confirme.", "Compártela con la tarjeta de instrucciones; revísala cada período."],
          words: [["Lista aprobada", "una lista publicada de las herramientas que el personal puede usar y cómo."], ["Acuerdo", "un contrato firmado o acuerdo de privacidad de datos entre el distrito y una empresa."]],
          slides: [
            { title: "Tres colores", bullets: ["Verde: aprobada bajo un acuerdo", "Amarillo: tareas del docente, sin datos de estudiantes", "Rojo: no permitida"] },
            { title: "Anota para cada herramienta", bullets: ["Color y motivo", "Usos permitidos y uso por estudiantes", "Fecha de revisión"] },
            { title: "Que siga siendo útil", bullets: ["Confírmala con el equipo de privacidad o tecnología", "Compártela con la tarjeta de instrucciones", "Revísala cada período"] }
          ],
          tryIt: "Tarea final: arma tu kit inicial, una tarjeta de instrucciones con tus tres instrucciones probadas (correo a las familias, texto por niveles, preguntas de práctica) y una lista verde-amarillo-rojo de al menos tres herramientas revisadas con la lista de privacidad, cada una con una línea que explique el motivo.",
          youCanNow: "dar al personal una guía sencilla y confiable de qué herramientas de IA usar y cómo usarlas.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa una herramienta VERDE en la lista?", options: ["Que es gratuita", "Que se puede usar, incluso con información de estudiantes según lo permita el acuerdo del distrito", "Que está prohibida", "Que solo la pueden usar los estudiantes"], answer: 1, why: "Las herramientas verdes están aprobadas, y la información de estudiantes se permite solo según lo permita el acuerdo." },
            { objective: "O6", q: "Los términos de una herramienta cambiaron desde que hiciste la lista. ¿Qué harías?", options: ["Dejar la lista como está hasta el próximo año", "Borrar toda la lista", "Volver a revisar la herramienta y actualizar su color y la fecha de revisión", "Decirle al personal que decida por su cuenta"], answer: 2, why: "La lista muestra una fecha de revisión para mantenerse al día cuando cambian los términos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Elegir herramientas seguras para los estudiantes",
        questions: [
          { objective: "O4", q: "¿Dónde encuentras la lista Model Terms of Service?", options: ["En una publicación de redes sociales", "En un anuncio de un proveedor", "En studentprivacy.ed.gov", "En el logotipo de la herramienta"], answer: 2, why: "La Oficina de Políticas de Privacidad Estudiantil la publica." },
          { objective: "O4", q: "La política de privacidad de una herramienta no es clara sobre entrenar la IA con datos de estudiantes. ¿Tu decisión?", options: ["“Todavía no”: pregunta por escrito al proveedor", "Aprobarla", "Que decidan los estudiantes", "Ignorar la pregunta"], answer: 0, why: "Las respuestas poco claras significan que la herramienta no está lista para aprobarse." },
          { objective: "O5", q: "Un colega dice que la edad mínima de una herramienta es 13 años. ¿Qué haces?", options: ["Confiar en lo que dice", "Revisar tú mismo los términos actuales de la herramienta", "Preguntar a un estudiante", "Suponer que no hay límite"], answer: 1, why: "Cada herramienta fija sus reglas de edad y estas cambian." },
          { objective: "O6", q: "¿Qué significa una herramienta AMARILLA en la lista?", options: ["Solo tareas del docente, sin información de estudiantes", "Aprobada para todos los datos de estudiantes", "Prohibida", "Solo para padres"], answer: 0, why: "El amarillo permite un uso docente general sin datos de estudiantes." },
          { objective: "O6", q: "¿Cada cuánto debe revisarse la lista de herramientas?", options: ["Nunca", "Solo después de una filtración", "Cada diez años", "Cada período escolar"], answer: 3, why: "Las herramientas y los términos cambian con frecuencia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 2: Herramientas de IA para educadores",
    questions: [
      { objective: "O1", q: "¿Cuál es un asistente de IA general?", options: ["Un libro de calificaciones", "Google Gemini", "Un proyector", "Un horario de timbres"], answer: 1, why: "Gemini, ChatGPT, Copilot y Claude son asistentes generales." },
      { objective: "O1", q: "Los asistentes generales conocen tu currículo:", options: ["Por los expedientes de tus estudiantes", "Siempre", "Solo si se lo dices", "Por el horario de timbres"], answer: 2, why: "Necesitan contexto en la instrucción." },
      { objective: "O1", q: "Las plataformas educativas de IA deben:", options: ["Ser pagadas por los estudiantes", "Usarse sin revisar", "Revisarse en privacidad y calidad", "Prohibirse"], answer: 2, why: "Toda herramienta necesita revisión." },
      { objective: "O2", q: "La instrucción docente de cinco partes incluye:", options: ["Rol, estudiantes, objetivo, límites, formato", "Nombres, calificaciones, IEP, direcciones, teléfonos", "Solo el tema", "Una contraseña"], answer: 0, why: "Esas partes dan resultados útiles." },
      { objective: "O2", q: "Un buen seguimiento es:", options: ["“Borra la respuesta.”", "“Aquí están los nombres de mis estudiantes.”", "“Califica a mi grupo.”", "“Haz el nivel 1 más sencillo.”"], answer: 3, why: "Mejora el resultado sin datos privados." },
      { objective: "O2", q: "Una tarjeta de instrucciones es:", options: ["Una credencial de estudiante", "Una lista compartida de instrucciones probadas", "Un pase de estacionamiento", "Una boleta de calificaciones"], answer: 1, why: "Permite a los colegas reutilizar lo que funciona." },
      { objective: "O3", q: "Texto por niveles significa:", options: ["Un tamaño de letra", "Un texto en un estante", "Una calificación de examen", "El mismo contenido en distintos niveles de lectura"], answer: 3, why: "Amplía el acceso a las mismas ideas." },
      { objective: "O3", q: "Cuando la IA simplifica un texto, debes:", options: ["Alargarlo", "Confiar en él", "Revisar que los datos sigan siendo correctos", "Quitar todos los datos"], answer: 2, why: "Simplificar puede introducir errores." },
      { objective: "O3", q: "En las tareas del docente con ayuda de IA, el docente es:", options: ["El editor y la revisión final", "Innecesario", "El asistente de la IA", "Solo un lector"], answer: 0, why: "El docente es responsable de lo que llega a los estudiantes." },
      { objective: "O4", q: "¿Qué pregunta está en una lista de verificación de privacidad?", options: ["¿De qué color es la aplicación?", "¿La empresa usa datos de estudiantes para entrenar su IA?", "¿Cuántas descargas tiene?", "¿Está de moda?"], answer: 1, why: "El uso de datos de estudiantes para entrenar es una preocupación clave." },
      { objective: "O4", q: "Los planes gratuitos para el público y los planes educativos:", options: ["Suelen tener términos distintos", "Siempre tienen los mismos términos", "Nunca recopilan datos", "Son inseguros los dos"], answer: 0, why: "Lee los términos del plan que vas a usar." },
      { objective: "O4", q: "¿Quién debe confirmar tu lista verde?", options: ["Nadie", "Un estudiante", "El proveedor", "El responsable de privacidad o el equipo de tecnología del distrito"], answer: 3, why: "La aprobación necesita a los responsables de la privacidad." },
      { objective: "O4", q: "Las leyes estatales de privacidad estudiantil:", options: ["No existen", "Pueden añadir requisitos además de FERPA y COPPA", "Reemplazan por completo la ley federal", "Solo aplican a universidades"], answer: 1, why: "La ley federal es el mínimo; los estados pueden añadir más." },
      { objective: "O5", q: "Según COPPA, el consentimiento de la escuela solo vale cuando los datos se recopilan:", options: ["Por cualquier motivo", "Para publicidad", "Para uso y beneficio de la escuela, sin otro fin comercial", "Nunca"], answer: 2, why: "Esa es la condición de la FTC." },
      { objective: "O5", q: "La FTC sugiere que las escuelas:", options: ["Dejen que los estudiantes aprueben herramientas", "Mantengan en secreto las aprobaciones", "Informen a los padres qué servicios en línea aprobaron", "Eviten todas las herramientas"], answer: 2, why: "Es una práctica recomendada." },
      { objective: "O5", q: "Las cuentas de estudiantes deberían ser, de preferencia:", options: ["Administradas por la escuela bajo un acuerdo", "Registros personales con correo de casa", "Compartidas por todo el grupo", "Creadas por el proveedor"], answer: 0, why: "Las cuentas administradas por la escuela mantienen el control en la escuela." },
      { objective: "O6", q: "Una herramienta ROJA:", options: ["Queda en revisión para siempre", "Está aprobada para todos los usos", "Es solo para tareas del docente", "No está permitida"], answer: 3, why: "Rojo significa no usar." },
      { objective: "O6", q: "Una herramienta VERDE puede usarse con información de estudiantes:", options: ["Sin ningún límite", "Según lo permita el acuerdo del distrito", "Nunca", "Solo los fines de semana"], answer: 1, why: "El acuerdo fija los límites." },
      { objective: "O6", q: "Cada herramienta de la lista debe mostrar:", options: ["Su número de descargas", "Solo su logotipo", "Solo su precio", "Color, motivo, usos permitidos y fecha de revisión"], answer: 3, why: "El personal necesita el motivo y los límites." },
      { objective: "O3", q: "Para practicar en este curso debes usar:", options: ["Nombres de estudiantes", "Expedientes reales de estudiantes", "Ejemplos inventados", "Documentos del IEP"], answer: 2, why: "Nunca uses datos que identifiquen a estudiantes al practicar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      7,
      8,
      9,
      10,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Tarjeta de instrucciones",
        objective: "O2",
        notYet: "Menos de tres instrucciones, o les faltan partes.",
        meets: "Tres instrucciones probadas (correo a las familias, texto por niveles y preguntas de práctica) con rol, estudiantes, objetivo, límites y formato.",
        exceeds: "Cada instrucción incluye una pregunta de seguimiento útil que el personal puede reutilizar."
      },
      {
        name: "Resultados revisados",
        objective: "O3",
        notYet: "Los resultados se usaron sin revisar, o no se resolvió la clave de respuestas.",
        meets: "Cada resultado se revisó y se corrigieron los errores; cada respuesta de la clave se resolvió.",
        exceeds: "Anota cuántos errores se encontraron y de qué tipo."
      },
      {
        name: "Lista de verificación de privacidad",
        objective: "O4",
        notYet: "No se revisaron las herramientas, o la lista no se basa en el recurso Model Terms of Service.",
        meets: "Cada herramienta se revisó con una lista de verificación de privacidad basada en el recurso Model Terms of Service de studentprivacy.ed.gov.",
        exceeds: "Los puntos poco claros se enviaron al proveedor como preguntas por escrito."
      },
      {
        name: "Reglas de edad",
        objective: "O5",
        notYet: "Se permite el uso de estudiantes sin revisar las reglas de edad.",
        meets: "Anota la edad mínima actual y la regla de permiso de los padres de cada herramienta según sus términos.",
        exceeds: "Explica cómo podrían usarla los estudiantes, por ejemplo con cuentas administradas por la escuela."
      },
      {
        name: "Lista verde-amarillo-rojo",
        objective: "O6",
        notYet: "Menos de tres herramientas, o colores sin razones.",
        meets: "Al menos tres herramientas, cada una con un color y una razón de una línea.",
        exceeds: "También muestra los usos permitidos y la fecha de revisión, y se envió al responsable de privacidad o al equipo de tecnología para que la confirme."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Escuelas que publican una lista verde-amarillo-rojo de herramientas de IA en un plazo de 30 días (encuesta de seguimiento)",
      "Docentes que dicen usar una tarjeta de instrucciones compartida para tareas semanales (encuesta de seguimiento)",
      "Líderes que pasan al curso 3 de IA para líderes escolares y educativos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet y al menos un asistente de IA gratuito",
      "El recurso Model Terms of Service de studentprivacy.ed.gov",
      "Ejemplos inventados para las tareas de práctica",
      "La lista de herramientas y acuerdos aprobados de tu distrito, si existe",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego hagan en vivo las tres tareas diarias con detalles inventados.",
      "Nunca uses nombres, calificaciones ni detalles del IEP de estudiantes reales en la práctica.",
      "Divide al grupo para que cada pareja revise una herramienta distinta, y luego junten los resultados en un borrador de lista.",
      "Invita al responsable de privacidad o al equipo de tecnología del distrito a revisar el borrador de la lista.",
      "Califica la tarea final con la rúbrica y comprueba que esté anotada la fecha de revisión de cada herramienta."
    ]
  }
};

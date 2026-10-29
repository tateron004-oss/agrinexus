"use strict";

// Koach Learn course (Spanish translation of leadership/edu-ai-multilingual.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-ai-multilingual-es",
  lang: "es",
  translationOf: "edu-ai-multilingual",
  category: "Leadership Development",
  name: "IA para estudiantes multilingües",
  skills: "Crear apoyos lingüísticos con IA, Hacer glosarios bilingües, Escribir marcos de oración por nivel de dominio, Usar la traducción con seguridad, Establecer un proceso de traducción revisado por personas, Valorar las lenguas maternas",
  outcome: "usar la IA para crear apoyos lingüísticos para estudiantes multilingües (glosarios, marcos de oración por nivel de dominio y textos adaptados que conservan las ideas del grado) y llevar un proceso de traducción para las familias en el que una persona calificada revisa cada traducción de la IA antes de enviarla.",
  about: [
    "Este curso es para docentes de aula, docentes de desarrollo del idioma inglés (ELD, por sus siglas en inglés) y bilingües, coordinadores pedagógicos, enlaces con las familias y directores que atienden a estudiantes multilingües y a sus familias. La IA puede acelerar la creación de apoyos lingüísticos y traducciones, pero también puede producir errores que confunden a los estudiantes o informan mal a las familias.",
    "El capítulo 1 crea apoyos para el aula: textos adaptados que conservan las ideas, glosarios bilingües y marcos de oración por nivel de dominio. El capítulo 2 trata la comunicación con las familias, un proceso de traducción con revisión humana, la privacidad y el papel del líder en valorar las lenguas maternas.",
    "Las orientaciones federales sobre estudiantes que aprenden inglés han cambiado hace poco; el personal de tu distrito encargado de estos estudiantes y de los derechos civiles conoce tus obligaciones actuales. Usa solo materiales inventados o generales, sin información de estudiantes. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Crea un paquete de apoyo multilingüe para una clase: una versión adaptada del texto principal que conserve las ideas del grado, un glosario bilingüe de 8 a 10 palabras clave en una lengua materna que atiende tu escuela, marcos de oración en tres niveles de dominio para la tarea principal de expresión oral o escrita de la clase, y un mensaje a las familias traducido con IA y revisado por un hablante calificado. Escribe el proceso de traducción de cuatro pasos que seguirá tu escuela y anota cada corrección que hizo quien revisó.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Docentes de aula, docentes de desarrollo del idioma inglés (ELD) y bilingües, coaches, enlaces con las familias y directores de escuelas de Estados Unidos que atienden a estudiantes multilingües y a sus familias.",
    startingPoint: "Preparan apoyos de idioma y traducciones para las familias a mano o con traductores gratuitos, muchas veces sin revisión. Puede que no sepan quién en el distrito confirma las obligaciones actuales con las familias multilingües.",
    gap: "La IA puede acelerar los apoyos de idioma y las traducciones, pero los errores pueden confundir a los estudiantes o engañar a las familias, y los apoyos pueden bajar el aprendizaje en lugar de la carga lingüística. Los educadores necesitan apoyos que mantengan las ideas del grado, un proceso de traducción con una revisión humana calificada y saber con claridad dónde confirmar las obligaciones.",
    constraints: [
      "Usar solo materiales inventados o generales, sin información de estudiantes",
      "Toda traducción de la IA para las familias la revisa una persona calificada que hable el idioma antes de enviarla; los asuntos delicados, como las reuniones de educación especial, usan traducción profesional según lo exija el distrito",
      "La orientación federal sobre estudiantes que aprenden inglés cambió hace poco; la oficina EL del distrito y el coordinador de derechos civiles confirman las obligaciones actuales",
      "No se pide a los estudiantes que traduzcan asuntos importantes para sus propias familias",
      "Tiempo: lecciones cortas que caben en una jornada de clases"
    ],
    prerequisites: "Ninguno. \"IA para líderes escolares y educativos 2: Herramientas de IA para educadores\" es un buen punto de partida."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un texto del grado", action: "adaptar el texto con IA para bajar la carga lingüística manteniendo las ideas del grado", standard: "pasando la prueba de las mismas preguntas" },
    { id: "O2", condition: "Para las palabras clave de una clase", action: "hacer un glosario bilingüe de 8 a 10 palabras en una lengua materna que atiende tu escuela, con los cognados marcados", standard: "revisado por una persona calificada que hable el idioma, con cada corrección anotada" },
    { id: "O3", condition: "Con la tarea principal de expresión oral o escrita de una clase", action: "escribir marcos de oración en tres niveles de dominio con un banco de palabras", standard: "con cada nivel pidiendo el mismo razonamiento" },
    { id: "O4", condition: "Con un mensaje para las familias", action: "seguir un proceso de traducción de cuatro pasos: inglés sencillo, herramienta aprobada, revisión calificada y guardar", standard: "sin enviar nada hasta que una persona calificada que hable el idioma lo haya revisado" },
    { id: "O5", condition: "Cuando surgen preguntas sobre las obligaciones con las familias multilingües", action: "identificar quién en tu distrito confirma las obligaciones actuales y describir las necesidades de los estudiantes a la IA solo en términos generales", standard: "con su contacto escrito en la página de tu proceso" },
    { id: "O6", condition: "Para tu escuela", action: "planear cómo la IA apoyará las lenguas maternas sin reemplazar al personal bilingüe", standard: "con una medida de mejor comunicación con las familias" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Apoyos lingüísticos en el aula",
      lessons: [
        {
          objectives: ["O1"],
          title: "Apoyos lingüísticos que mantienen alto el aprendizaje",
          minutes: 5,
          goal: "Adaptar un texto en su carga lingüística sin bajar las ideas del grado.",
          text: [
            "Los estudiantes multilingües pueden pensar al nivel de su grado mientras todavía aprenden inglés. El propósito de un apoyo es bajar la carga lingüística, no el razonamiento. Eso significa conservar los conceptos clave, el vocabulario y las preguntas, y añadir claridad: oraciones más cortas, títulos, apoyos visuales, términos clave en negrita con definiciones.",
            "Instrucción: “Adapta este texto de ciencias de 7.º grado para estudiantes que aprenden inglés en un nivel intermedio. Conserva cada concepto clave y estas palabras académicas: [lista]. Usa oraciones más cortas y títulos, pon en negrita las palabras académicas y define cada una en inglés sencillo. No quites ideas.”",
            "Compara la exactitud del texto adaptado con el original. Una buena prueba: ¿podría un estudiante que lee el texto adaptado responder las mismas preguntas principales que uno que leyó el original?"
          ],
          steps: ["Haz una lista de los conceptos clave y las palabras académicas.", "Pide a la IA que adapte el nivel lingüístico conservando ambos.", "Agrega títulos, apoyos visuales y términos en negrita con definiciones.", "Revisa la exactitud frente al original.", "Prueba: ¿se pueden responder las mismas preguntas principales?"],
          words: [["Estudiante multilingüe", "un estudiante que aprende en más de un idioma y que a menudo todavía está desarrollando el inglés."], ["Carga lingüística", "qué tan difícil es el idioma de un texto, aparte de qué tan difíciles son las ideas."], ["Vocabulario académico", "palabras propias de las materias escolares, como analizar, evidencia o fotosíntesis."]],
          slides: [
            { title: "Baja el idioma, no el razonamiento", bullets: ["Conserva conceptos, vocabulario, preguntas", "Añade claridad: oraciones cortas, títulos, apoyos visuales"] },
            { title: "La instrucción", bullets: ["Indica el nivel y las palabras académicas", "Pon en negrita y define los términos clave", "“No quites ideas”"] },
            { title: "Revísalo", bullets: ["Exactitud frente al original", "¿Se pueden responder las mismas preguntas principales?"] }
          ],
          tryIt: "Adapta con IA un texto del grado para un nivel intermedio de inglés, conservando todos los conceptos clave. Revísalo con la prueba de las mismas preguntas.",
          youCanNow: "adaptar textos para estudiantes multilingües sin bajar las ideas del grado.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la carga lingüística?", options: ["Qué tan difícil es el idioma, aparte de las ideas", "Cuántas páginas tiene un texto", "Cuántos estudiantes hablan un idioma", "Cuánto pesa un libro de texto"], answer: 0, why: "Bajar la carga lingüística hace el texto más fácil de leer sin bajar las ideas." },
            { objective: "O1", q: "El texto adaptado por la IA quita un concepto clave para hacerlo más corto. ¿Qué harías?", options: ["Usarlo; más corto es mejor", "Dar a los estudiantes multilingües un tema más fácil", "Volver a poner el concepto y revisar con la prueba de las mismas preguntas", "Pedir a los estudiantes que se salten esa parte"], answer: 2, why: "Los textos adaptados mantienen los conceptos clave para que los estudiantes aprendan al nivel del grado." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Glosarios bilingües y cognados",
          minutes: 5,
          goal: "Hacer un glosario bilingüe revisado con las palabras clave de una clase.",
          text: [
            "Un glosario bilingüe da cada palabra clave en inglés, una definición sencilla, la palabra en la lengua materna del estudiante y una oración de ejemplo. La IA puede redactar uno rápido en muchos idiomas: “Haz una tabla de glosario de estas 10 palabras de ciencias de 5.º grado: palabra en inglés, definición sencilla, traducción al español, oración de ejemplo en inglés.”",
            "Pide a la IA que marque los cognados (palabras que se parecen y significan lo mismo en ambos idiomas, como “animal” y “animal”, o “information” e “información”) y los falsos amigos (palabras que se parecen pero significan cosas distintas). Los cognados son una fortaleza que traen los estudiantes.",
            "Las traducciones de la IA de palabras sueltas pueden elegir el significado equivocado para tu materia (por ejemplo, un término de matemáticas o ciencias que también tiene un significado cotidiano). Pide a un hablante calificado, como un docente bilingüe o un traductor del distrito, que revise el glosario antes de que lo usen los estudiantes."
          ],
          steps: ["Haz una lista de 8-10 palabras clave.", "Pide una tabla: palabra, definición, palabra en la lengua materna, ejemplo.", "Pide a la IA que marque cognados y falsos amigos.", "Pide a un hablante calificado que lo revise.", "Compártelo con los estudiantes antes de la clase."],
          words: [["Glosario bilingüe", "una lista de palabras clave con sus significados en dos idiomas."], ["Cognado", "una palabra que se parece y significa más o menos lo mismo en dos idiomas."], ["Falso amigo", "una palabra que se parece en dos idiomas pero significa algo distinto."]],
          slides: [
            { title: "La tabla del glosario", bullets: ["Palabra en inglés y definición sencilla", "Palabra en la lengua materna", "Oración de ejemplo"] },
            { title: "Los cognados son una fortaleza", bullets: ["Misma forma, mismo significado: animal / animal", "Cuidado con los falsos amigos"] },
            { title: "Revisa antes de usar", bullets: ["La IA puede elegir el significado equivocado para la materia", "Lo revisa un docente bilingüe o un traductor del distrito"] }
          ],
          tryIt: "Haz un glosario bilingüe de 8 a 10 palabras para una clase en una lengua materna que atiende tu escuela, con los cognados marcados. Pide a un hablante calificado que lo revise y anota las correcciones.",
          youCanNow: "crear glosarios bilingües que se apoyan en las lenguas maternas de los estudiantes.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un falso amigo?", options: ["Un cognado que significa lo mismo en dos idiomas", "Una palabra que se parece en dos idiomas pero significa algo distinto", "Un amigo que traduce por ti", "Una palabra sin traducción"], answer: 1, why: "Los falsos amigos parecen cognados pero confunden, así que hay que marcarlos." },
            { objective: "O2", q: "La IA tradujo una palabra de ciencias con su significado cotidiano en lugar del de la materia. ¿Qué haces?", options: ["La dejas; los estudiantes entenderán", "Quitas la palabra del glosario", "Le pides a la IA una definición más larga", "Pides a una persona calificada que hable el idioma que la corrija y anotas la corrección"], answer: 3, why: "Las traducciones de palabras sueltas de la IA pueden elegir el significado equivocado para tu materia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Marcos de oración por nivel de dominio",
          minutes: 5,
          goal: "Escribir marcos de oración en tres niveles para una tarea de expresión oral o escrita.",
          text: [
            "Los marcos de oración dan a los estudiantes la estructura del lenguaje académico para que puedan concentrarse en las ideas. Para la misma tarea, estudiantes con distintos niveles de inglés necesitan apoyos distintos. Tarea de ejemplo: explicar si una afirmación está respaldada por evidencia.",
            "Pide a la IA tres niveles. Inicial: marcos cortos con un banco de palabras (“La afirmación es ___. La evidencia es ___.”). Intermedio: marcos con palabras de enlace (“La afirmación está respaldada porque ___. Sin embargo, ___.”). Avanzado: inicios abiertos y conectores académicos (“Aunque la evidencia sugiere ___, no explica del todo ___.”).",
            "Publica los tres niveles para que los estudiantes elijan y vayan subiendo. Revisa que cada nivel pida el mismo razonamiento. Los estándares de desarrollo del idioma inglés de tu distrito y tus colegas de ELD pueden ayudarte a ajustar los marcos a los niveles de dominio."
          ],
          steps: ["Define la tarea de expresión oral o escrita.", "Pide marcos en los niveles inicial, intermedio y avanzado.", "Agrega un banco de palabras en el nivel inicial.", "Revisa que cada nivel pida el mismo razonamiento.", "Publica los tres; deja que los estudiantes suban de nivel."],
          words: [["Marco de oración", "una oración con espacios en blanco que muestra la estructura de una respuesta."], ["Nivel de dominio", "cuánto ha avanzado un estudiante en el inglés."], ["Conector", "una palabra que une ideas, como porque, sin embargo o aunque."]],
          slides: [
            { title: "Los marcos liberan para pensar", bullets: ["La estructura del lenguaje académico", "Concentrarse en las ideas"] },
            { title: "Tres niveles, el mismo razonamiento", bullets: ["Inicial: marcos cortos, banco de palabras", "Intermedio: conectores", "Avanzado: inicios académicos abiertos"] },
            { title: "Úsalos bien", bullets: ["Publica los tres; los estudiantes suben de nivel", "Ajusta los niveles con tus colegas de ELD"] }
          ],
          tryIt: "Elige una tarea de expresión oral o escrita de una clase próxima. Usa la IA para escribir marcos en tres niveles, revisa que pidan el mismo razonamiento y agrega un banco de palabras.",
          youCanNow: "escribir marcos de oración que apoyan todos los niveles de inglés en la misma tarea.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un marco de oración?", options: ["Un dibujo alrededor de una oración", "Una lista de palabras de ortografía", "Una estructura de respuesta con espacios para completar", "La traducción de una oración"], answer: 2, why: "Los marcos muestran a los estudiantes cómo armar una respuesta." },
            { objective: "O3", q: "Tu marco del nivel inicial pide nombrar un color, mientras que el avanzado pide explicar una causa. ¿Qué cambiarías?", options: ["Hacer que todos los niveles pidan el mismo razonamiento con distinto apoyo", "Nada; los principiantes necesitan ideas más fáciles", "Quitar el nivel inicial", "No darles marco a los principiantes"], answer: 0, why: "Los marcos de todos los niveles piden el mismo razonamiento; solo cambia el apoyo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Apoyos lingüísticos en el aula",
        questions: [
          { objective: "O1", q: "Un buen apoyo lingüístico baja:", options: ["El razonamiento", "El nivel del grado", "La carga lingüística, conservando las ideas", "Las expectativas"], answer: 2, why: "Los estudiantes pueden pensar al nivel de su grado mientras aprenden inglés." },
          { objective: "O1", q: "¿Qué prueba sirve para revisar un texto adaptado?", options: ["¿Podrían los estudiantes responder las mismas preguntas principales que con el original?", "¿Es más corto?", "¿Tiene más imágenes?", "¿Tiene otro tipo de letra?"], answer: 0, why: "Las mismas preguntas significan las mismas ideas." },
          { objective: "O2", q: "Un cognado es:", options: ["Una regla gramatical", "Un término de matemáticas", "Una traducción equivocada", "Una palabra que se parece y significa más o menos lo mismo en dos idiomas"], answer: 3, why: "Los cognados son una fortaleza que traen los estudiantes." },
          { objective: "O2", q: "¿Quién debe revisar un glosario bilingüe hecho con IA?", options: ["Nadie", "Un hablante calificado, como un docente bilingüe o un traductor del distrito", "La IA otra vez", "Un estudiante que está aprendiendo inglés"], answer: 1, why: "La IA puede elegir el significado equivocado para la materia." },
          { objective: "O3", q: "Los marcos de oración en tres niveles deben:", options: ["Pedir razonamientos distintos", "Ser solo para principiantes", "Mantenerse en secreto", "Pedir el mismo razonamiento con distinto apoyo"], answer: 3, why: "El apoyo varía; el razonamiento no." }
        ]
      }
    },
    {
      name: "Capítulo 2: Familias, traducción y liderazgo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Un proceso de traducción con revisión humana",
          minutes: 6,
          goal: "Establecer un proceso de cuatro pasos para traducir las comunicaciones a las familias.",
          text: [
            "La traducción con IA es rápida y a menudo buena, pero comete errores que importan: fechas equivocadas, tono inadecuado, términos escolares sin traducción directa y errores en idiomas menos difundidos. Las familias dependen de lo que la escuela les envía.",
            "Un proceso de cuatro pasos: 1) Escribe primero el texto en inglés sencillo (oraciones cortas, sin modismos ni jerga); un inglés claro se traduce mejor. 2) Tradúcelo con una herramienta aprobada. 3) Un hablante calificado (traductor del distrito, personal bilingüe o un servicio contratado) lo revisa y corrige. 4) Envíalo y guarda la versión revisada para reutilizarla.",
            "Para comunicaciones importantes (educación especial, disciplina, salud y seguridad, derechos legales), usa traducción o interpretación profesional según lo exija tu distrito. No pidas a los estudiantes que traduzcan asuntos importantes para su propia familia."
          ],
          steps: ["Escribe primero en inglés sencillo: sin modismos ni jerga.", "Traduce con una herramienta aprobada.", "Un hablante calificado revisa y corrige.", "Envíalo y guarda la versión revisada.", "Mensajes importantes: traducción o interpretación profesional."],
          words: [["Modismo", "una frase cuyo significado no es la suma de sus palabras, como “touch base” (ponerse en contacto)."], ["Interpretación", "traducir lo que se dice en voz alta, por ejemplo en una reunión."]],
          slides: [
            { title: "Por qué revisar las traducciones de IA", bullets: ["Fechas y tono equivocados", "Términos escolares sin equivalente directo", "Más errores en idiomas menos comunes"] },
            { title: "Cuatro pasos", bullets: ["1 Primero, inglés sencillo", "2 Traduce con una herramienta aprobada", "3 Revisa un hablante calificado", "4 Envía y guarda"] },
            { title: "Mensajes importantes", bullets: ["Educación especial, disciplina, salud, derechos", "Traducción o interpretación profesional", "Nunca pidas a los estudiantes que los traduzcan"] }
          ],
          tryIt: "Escribe en inglés sencillo un mensaje breve para las familias sobre un evento escolar, tradúcelo con una herramienta aprobada y pide a un hablante calificado que lo revise. Anota cada corrección.",
          youCanNow: "llevar un proceso de traducción en el que una persona calificada revisa cada traducción de la IA.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué escribir el mensaje en inglés sencillo antes de traducirlo?", options: ["El inglés sencillo ocupa menos al imprimirlo", "Un inglés claro se traduce con más exactitud", "Los traductores solo leen inglés sencillo", "Lo exige la ley"], answer: 1, why: "Un texto original claro produce menos errores de traducción." },
            { objective: "O4", q: "Un docente quiere que un estudiante traduzca a sus padres una nota sobre sus propias calificaciones. ¿Qué sugerirías?", options: ["Dejar que el estudiante la traduzca", "Enviarla solo en inglés", "Usar la IA y enviarla sin revisión", "Usar en su lugar el proceso con la revisión de una persona calificada que hable el idioma"], answer: 3, why: "Los estudiantes no deben traducir asuntos importantes para sus propias familias." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Obligaciones, privacidad y orientaciones actuales",
          minutes: 5,
          goal: "Identificar quién confirma las obligaciones de tu escuela con las familias multilingües y dónde revisar la orientación actual.",
          text: [
            "Desde hace mucho, las escuelas tienen obligaciones federales de derechos civiles con los estudiantes que aprenden inglés y de comunicarse con los padres con dominio limitado del inglés en un idioma que entiendan. En agosto de 2025, según informó K-12 Dive, el Departamento de Educación de EE. UU. anuló su carta conjunta “Dear Colleague” de 2015 sobre estudiantes que aprenden inglés, diciendo que no estaba alineada con las prioridades del gobierno. Las cartas “Dear Colleague” son orientaciones, no leyes.",
            "Como las orientaciones cambiaron, no te fíes de resúmenes viejos. Pregunta a la oficina de estudiantes que aprenden inglés de tu distrito, al coordinador de derechos civiles o de Title VI (la ley federal contra la discriminación por raza, color u origen nacional), o al asesor jurídico cuáles son tus obligaciones actuales, y revisa las orientaciones de la agencia educativa de tu estado, que puede fijar sus propios requisitos.",
            "La privacidad sigue aplicando: la condición de estudiante que aprende inglés, el origen lingüístico y los puntajes de dominio son parte de los registros educativos protegidos por FERPA (ley federal de privacidad de los registros educativos). Mantenlos fuera de las herramientas de IA no aprobadas y describe las necesidades en términos generales cuando escribas instrucciones."
          ],
          steps: ["No te fíes de resúmenes viejos de las orientaciones sobre estudiantes que aprenden inglés.", "Pregunta por las obligaciones actuales a la oficina del distrito o al coordinador de derechos civiles.", "Revisa las orientaciones de la agencia educativa de tu estado.", "Mantén la condición y los puntajes fuera de herramientas de IA no aprobadas.", "Describe las necesidades en términos generales en tus instrucciones."],
          words: [["Estudiante que aprende inglés (EL)", "un estudiante identificado como alguien que necesita apoyo para aprender el inglés escolar."], ["Dominio limitado del inglés (LEP)", "no poder todavía leer, escribir, hablar o entender el inglés lo suficiente para una situación."], ["Anular", "cancelar o retirar una orientación o decisión anterior."]],
          slides: [
            { title: "Las orientaciones cambiaron", bullets: ["Carta de 2015 sobre estudiantes EL anulada, agosto de 2025", "Una orientación no es una ley"] },
            { title: "Confirma las obligaciones actuales", bullets: ["Oficina EL del distrito o coordinador de derechos civiles", "Orientaciones EL de la agencia educativa estatal", "El asesor jurídico, si tienes dudas"] },
            { title: "Privacidad", bullets: ["La condición EL y los puntajes son registros educativos", "Mantenlos fuera de herramientas no aprobadas", "Describe las necesidades en términos generales"] }
          ],
          sources: [{ name: "K-12 Dive: el Departamento de Educación anula la orientación sobre estudiantes que aprenden inglés (agosto de 2025)", url: "https://www.k12dive.com/news/education-department-rescinds-ela-english-learner-guidance-2015-dear-colleague/758163/" }, { name: "FERPA: protección de la privacidad estudiantil", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Averigua quién responde en tu distrito las preguntas sobre la comunicación con las familias multilingües (oficina EL, coordinador de derechos civiles o enlace con las familias) y escribe su contacto en la página de tu proceso.",
          youCanNow: "encontrar tus obligaciones actuales con las familias multilingües y mantener privada su información.",
          quickCheck: [
            { objective: "O5", q: "¿Qué son las cartas \"Dear Colleague\"?", options: ["Orientaciones, no leyes", "Leyes federales nuevas", "Cartas a las familias", "Contratos del distrito"], answer: 0, why: "Las cartas \"Dear Colleague\" explican cómo interpretan la ley las agencias; son orientaciones." },
            { objective: "O5", q: "No sabes bien qué debe ofrecer tu escuela en comunicaciones traducidas. ¿A quién le preguntas?", options: ["A un chatbot de IA", "A un artículo de noticias", "A la oficina EL de tu distrito o al coordinador de derechos civiles", "A un grupo de padres en internet"], answer: 2, why: "El personal de EL y de derechos civiles del distrito conoce tus obligaciones actuales." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Liderar con las lenguas maternas como fortaleza",
          minutes: 6,
          goal: "Planear cómo tu escuela usará la IA para valorar las lenguas maternas, no para reemplazar a las personas.",
          text: [
            "La traducción con IA puede hacer parecer que el personal bilingüe y los intérpretes ya no hacen tanta falta. Es al revés: los borradores de la IA hacen más rápidas sus revisiones, y su conocimiento de la cultura y la comunidad no se puede automatizar. Protege su tiempo para las revisiones y para las conversaciones que más importan.",
            "Usa la IA para honrar las lenguas maternas: deja que los estudiantes expliquen primero las ideas en su lengua materna y luego construyan el inglés, crea glosarios y materiales de bienvenida en los idiomas de las familias e invita a las familias a compartir lo que saben. Evita herramientas o reglas que traten las lenguas maternas solo como un problema.",
            "Reúnelo todo en un breve plan escolar: qué apoyos usarán los docentes, el proceso de traducción, quién revisa, cómo dan su opinión las familias y cómo sabrás si las familias están mejor informadas (por ejemplo, la asistencia a eventos o una encuesta breve en sus idiomas)."
          ],
          steps: ["Protege el tiempo del personal bilingüe para revisiones y conversaciones clave.", "Deja que los estudiantes usen su lengua materna para construir ideas.", "Crea materiales de bienvenida en los idiomas de las familias.", "Escribe un breve plan escolar con el proceso y quienes revisan.", "Mide si las familias están mejor informadas."],
          words: [["Enfoque basado en fortalezas", "ver lo que traen los estudiantes y las familias como fortalezas, no como carencias."], ["Enlace con las familias", "un miembro del personal que crea vínculos entre la escuela y las familias."]],
          slides: [
            { title: "La IA apoya a las personas", bullets: ["Los borradores aceleran las revisiones del personal bilingüe", "El conocimiento de la cultura y la comunidad sigue siendo humano"] },
            { title: "Las lenguas maternas son una fortaleza", bullets: ["Pensar en la lengua materna, construir el inglés", "Materiales de bienvenida en los idiomas de las familias"] },
            { title: "Un breve plan escolar", bullets: ["Apoyos, proceso, quienes revisan", "Opiniones de las familias", "Medir: ¿están mejor informadas las familias?"] }
          ],
          tryIt: "Tarea final: arma tu paquete de apoyo multilingüe (texto adaptado, glosario bilingüe revisado, marcos de oración en tres niveles, una traducción revisada para las familias), escribe tu proceso de traducción de cuatro pasos con el contacto de quien revisa y anota cada corrección hecha.",
          youCanNow: "liderar un uso de la IA que apoya a los estudiantes multilingües y a sus familias con exactitud y respeto.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa un enfoque basado en fortalezas para los estudiantes multilingües?", options: ["Ver lo que traen los estudiantes como fortalezas", "Contar los bienes de la escuela", "Enfocarse en lo que les falta a los estudiantes", "Usar solo inglés en clase"], answer: 0, why: "Un enfoque basado en fortalezas trata las lenguas maternas como fortalezas." },
            { objective: "O6", q: "Un líder sugiere que, con la traducción por IA, ya no hace falta el personal bilingüe. ¿Qué dirías?", options: ["Estar de acuerdo; la IA es más barata", "Proponer reemplazar a los enlaces con las familias por chatbots", "Detener toda traducción", "Que sus revisiones se hacen más rápidas, y que su conocimiento de la comunidad sigue importando"], answer: 3, why: "La IA acelera el trabajo, pero personas calificadas lo revisan y conocen a la comunidad." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Familias, traducción y liderazgo",
        questions: [
          { objective: "O4", q: "¿Por qué escribir en inglés sencillo antes de traducir?", options: ["La IA no puede leer textos largos", "Es más corto", "Un inglés claro se traduce con más exactitud", "Lo exige la ley"], answer: 2, why: "Los modismos y la jerga causan errores de traducción." },
          { objective: "O4", q: "Hay que traducir un mensaje sobre la reunión de educación especial de un estudiante. ¿La mejor opción?", options: ["Traducción profesional según lo exija tu distrito", "Pedir al estudiante que lo traduzca", "Traducción de IA sin revisar", "Enviarlo solo en inglés"], answer: 0, why: "Los mensajes importantes necesitan traducción profesional." },
          { objective: "O5", q: "¿Qué pasó en 2025 con la carta “Dear Colleague” de 2015 sobre estudiantes que aprenden inglés, según K-12 Dive?", options: ["Se convirtió en ley", "Fue anulada", "Fue traducida", "Nada"], answer: 1, why: "El Departamento la anuló en agosto de 2025." },
          { objective: "O5", q: "Los puntajes de dominio del inglés de un estudiante son:", options: ["Parte de los registros educativos protegidos por FERPA", "Información pública", "Seguros en cualquier herramienta de IA", "Propiedad del proveedor"], answer: 0, why: "Son registros del estudiante." },
          { objective: "O6", q: "¿Cómo cambia la traducción con IA el papel del personal bilingüe?", options: ["Ya no hace falta", "Solo tiene que corregir la ortografía", "Debe ser reemplazado por estudiantes", "Sus revisiones son más rápidas y su conocimiento de la comunidad sigue importando"], answer: 3, why: "Los borradores de la IA apoyan a las personas; no las reemplazan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para estudiantes multilingües",
    questions: [
      { objective: "O1", q: "Los estudiantes multilingües pueden:", options: ["Hacer solo trabajos fáciles", "Pensar al nivel de su grado mientras todavía aprenden inglés", "No usar palabras académicas", "No aprender con IA"], answer: 1, why: "El nivel de idioma no es el nivel de razonamiento." },
      { objective: "O1", q: "Carga lingüística significa:", options: ["El número de idiomas que se hablan", "Cuánto pesa el libro", "Qué tan difícil es el idioma, aparte de las ideas", "La cantidad de tarea"], answer: 2, why: "Los apoyos bajan la carga lingüística, no las ideas." },
      { objective: "O1", q: "Un texto adaptado debe conservar:", options: ["Ninguna pregunta", "Solo palabras fáciles", "Los conceptos clave y el vocabulario académico", "La mitad de las ideas"], answer: 2, why: "La meta de aprendizaje sigue siendo la misma." },
      { objective: "O1", q: "El vocabulario académico incluye palabras como:", options: ["Evidencia y analizar", "Hola y gracias", "Almuerzo y recreo", "Autobús y carro"], answer: 0, why: "Las palabras de las materias necesitan enseñanza directa." },
      { objective: "O2", q: "Un glosario bilingüe incluye:", options: ["Calificaciones", "Solo palabras en inglés", "Nombres de estudiantes", "Palabra, definición, palabra en la lengua materna, ejemplo"], answer: 3, why: "Los dos idiomas construyen la comprensión." },
      { objective: "O2", q: "Un falso amigo es:", options: ["Un cognado", "Una palabra que se parece en dos idiomas pero significa algo distinto", "Un compañero de clase", "Un traductor"], answer: 1, why: "Los estudiantes deben estar atentos a ellos." },
      { objective: "O2", q: "Las traducciones de la IA de palabras sueltas pueden:", options: ["Traducir solo nombres", "Ser siempre perfectas", "No servir nunca", "Elegir el significado equivocado para tu materia"], answer: 3, why: "El contexto importa; revísalas." },
      { objective: "O3", q: "Un marco de oración:", options: ["Es un examen de gramática", "Es un marco para fotos", "Muestra la estructura de una respuesta con espacios en blanco", "Es una calificación"], answer: 2, why: "Los marcos permiten concentrarse en las ideas." },
      { objective: "O3", q: "Los marcos del nivel inicial suelen incluir:", options: ["Un banco de palabras", "Ningún apoyo", "Solo conectores avanzados", "Solo preguntas"], answer: 0, why: "Más apoyo en los primeros niveles." },
      { objective: "O3", q: "¿Quién ayuda a ajustar los marcos a los niveles de dominio?", options: ["Un proveedor", "Los colegas de ELD y los estándares de desarrollo del idioma inglés", "Solo la IA", "Nadie"], answer: 1, why: "Los especialistas conocen los niveles." },
      { objective: "O4", q: "El paso 3 del proceso de traducción es:", options: ["Un hablante calificado revisa y corrige", "Enviar de inmediato", "Borrar el texto en inglés", "Preguntar a un estudiante"], answer: 0, why: "La revisión humana detecta los errores." },
      { objective: "O4", q: "¿Por qué guardar las traducciones revisadas?", options: ["Por ningún motivo", "Para venderlas", "Para ocultarlas", "Para reutilizar versiones correctas"], answer: 3, why: "Las versiones revisadas ahorran tiempo después." },
      { objective: "O4", q: "Los estudiantes no deben traducir:", options: ["Palabras de vocabulario en clase", "Asuntos importantes para su propia familia", "Sus propias ideas", "Títulos de libros"], answer: 1, why: "Es injusto para el estudiante y arriesgado para la familia." },
      { objective: "O5", q: "Las cartas “Dear Colleague” son:", options: ["Sentencias judiciales", "Leyes aprobadas por el Congreso", "Orientaciones, no leyes", "Leyes estatales"], answer: 2, why: "Las orientaciones pueden emitirse o retirarse." },
      { objective: "O5", q: "Para confirmar las obligaciones actuales con las familias multilingües, pregunta a:", options: ["Un proveedor", "Un chatbot", "La oficina EL de tu distrito o el coordinador de derechos civiles", "Las redes sociales"], answer: 2, why: "Conocen la ley y la política actuales." },
      { objective: "O5", q: "La agencia educativa de tu estado puede:", options: ["Fijar sus propios requisitos para estudiantes que aprenden inglés", "No publicar nunca orientaciones", "Anular por completo la ley federal de derechos civiles", "Prohibir la traducción"], answer: 0, why: "Los estados publican sus propias orientaciones." },
      { objective: "O5", q: "Al escribir a la IA sobre las necesidades de los estudiantes, descríbelas:", options: ["Con la situación migratoria", "Con nombres y puntajes", "Con direcciones de casa", "En términos generales"], answer: 3, why: "Mantén privada la información de los estudiantes." },
      { objective: "O6", q: "Enfoque basado en fortalezas significa:", options: ["Contar los bienes de la escuela", "Ver lo que traen los estudiantes como fortalezas", "Concentrarse en las carencias", "Un método de presupuesto"], answer: 1, why: "Las lenguas maternas son una fortaleza." },
      { objective: "O6", q: "Dejar que los estudiantes expliquen primero las ideas en su lengua materna:", options: ["Reemplaza la enseñanza del inglés", "Hace más lento el aprendizaje", "No está permitido", "Construye la comprensión antes del inglés"], answer: 3, why: "Pensar en un idioma que dominan apoya el aprendizaje." },
      { objective: "O6", q: "Una buena medida de una mejor comunicación con las familias es:", options: ["El número de páginas enviadas", "El número de instrucciones a la IA", "La asistencia a eventos o una encuesta a las familias en sus idiomas", "Los informes del proveedor"], answer: 2, why: "Mide lo que las familias realmente viven." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      5,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Texto adaptado",
        objective: "O1",
        notYet: "Se perdieron ideas clave o se simplificaron hasta desaparecer.",
        meets: "Una versión adaptada que mantiene las ideas del grado.",
        exceeds: "Pasa la prueba de las mismas preguntas y mantiene el vocabulario académico con apoyo."
      },
      {
        name: "Glosario bilingüe",
        objective: "O2",
        notYet: "Menos de 8 palabras, o no lo revisó una persona calificada que hable el idioma.",
        meets: "De 8 a 10 palabras clave en una lengua materna, revisadas por una persona calificada que hable el idioma.",
        exceeds: "Los cognados y los falsos amigos están marcados, con un ejemplo para cada palabra."
      },
      {
        name: "Marcos de oración",
        objective: "O3",
        notYet: "Menos de tres niveles, o los niveles piden razonamientos distintos.",
        meets: "Marcos en tres niveles de dominio para la tarea principal de la clase.",
        exceeds: "Todos los niveles piden el mismo razonamiento, y los marcos del nivel inicial incluyen un banco de palabras."
      },
      {
        name: "Traducción para las familias revisada",
        objective: "O4",
        notYet: "La traducción no la revisó una persona calificada que hable el idioma.",
        meets: "Un mensaje para las familias traducido por la IA y revisado por una persona calificada que hable el idioma, con las correcciones anotadas.",
        exceeds: "La versión revisada se guarda para reutilizarla."
      },
      {
        name: "Proceso de traducción",
        objective: "O5",
        notYet: "Menos de cuatro pasos, o no hay contacto de quien revisa.",
        meets: "Un proceso de cuatro pasos que tu escuela va a seguir.",
        exceeds: "Incluye el contacto de quien revisa y a quién preguntar sobre las obligaciones."
      }
    ]
  },
  evaluation: {
    results: [
      "Educadores que terminan el curso y aprueban la tarea final (rúbrica)",
      "Docentes que dicen haber usado textos adaptados, glosarios o marcos con estudiantes multilingües en un plazo de 30 días (encuesta de seguimiento)",
      "Escuelas que adoptan un proceso de traducción con revisión calificada (encuesta de seguimiento)",
      "Asistencia de las familias a eventos o resultados de encuestas a las familias en sus idiomas"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet y una herramienta de IA y de traducción aprobada por el distrito",
      "Un texto y una tarea del grado de una clase próxima (sin información de estudiantes)",
      "Acceso a una persona calificada que hable una lengua materna que atiende tu escuela",
      "Unos 60 minutos en total, más el tiempo para la revisión de la persona calificada"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego adapten un texto en grupo y apliquen la prueba de las mismas preguntas.",
      "Consigue con anticipación a personas calificadas que hablen los idiomas para que se pueda revisar cada glosario y cada traducción.",
      "Usa solo materiales inventados o generales; describe las necesidades de los estudiantes a la IA solo en términos generales.",
      "Invita a la oficina EL del distrito o al coordinador de derechos civiles a responder preguntas sobre las obligaciones actuales.",
      "Califica la tarea final con la rúbrica y pide la lista de correcciones que hizo quien revisó."
    ]
  }
};

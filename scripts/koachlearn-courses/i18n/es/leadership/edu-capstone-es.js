"use strict";

// Koach Learn course (Spanish translation of leadership/edu-capstone.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-capstone-es",
  lang: "es",
  translationOf: "edu-capstone",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 8: Proyecto final",
  skills: "Elegir un problema centrado en los estudiantes, Diseñar un piloto de IA acotado, Hacer una revisión de privacidad y equidad, Planear la formación del personal, Comunicarse con las familias, Fijar medidas de éxito y presentar ante la dirección",
  outcome: "diseñar un plan completo de piloto de IA, listo para presentar, para tu escuela o distrito: un problema real, un piloto acotado con una herramienta revisada, una revisión de privacidad y equidad, un plan de formación del personal, una comunicación a las familias, medidas de éxito y una regla de decisión, presentado en diez minutos ante un equipo directivo o una junta.",
  about: [
    "Este es el último curso de IA para líderes escolares y educativos. Reúnes todo lo de los cursos 1 a 7 (lo básico, las herramientas, la planeación, la evaluación, la alfabetización en IA de los estudiantes, la productividad y el uso responsable) en un solo plan que realmente podrías llevar a cabo.",
    "El capítulo 1 diseña el piloto: el problema que vale la pena resolver, el alcance y la herramienta, y la revisión de privacidad y equidad. El capítulo 2 prepara a las personas y las pruebas: la formación del personal, la comunicación con las familias, las medidas de éxito y la presentación.",
    "Elige un piloto que tengas autoridad para proponer, o uno que propondrás a alguien que la tenga. Usa las pautas que escribiste en el curso 7. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Completa y presenta tu plan de piloto de IA (unas cuatro páginas): el problema y a quién sirve, con pruebas; el alcance del piloto (quién, qué, cuánto tiempo) y la herramienta, con su revisión del proveedor; una revisión de privacidad y equidad (FERPA, COPPA si hay menores de 13 años, accesibilidad, acceso); un plan de formación del personal; una carta a las familias y unas preguntas frecuentes breves; de tres a cinco medidas de éxito con una línea de base; y una regla de seguir, ajustar o detener. Preséntalo en diez minutos ante un equipo directivo, un grupo de colegas o una junta, y anota las preguntas y tus respuestas.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Directores, líderes de distrito, coaches pedagógicos, personal de tecnología y docentes líderes que terminan IA para líderes escolares y educativos y que van a proponer un piloto de IA en su escuela o distrito.",
    startingPoint: "Completaron los cursos 1 a 7: lo básico de la IA, la revisión de herramientas, la planeación, la evaluación, la alfabetización en IA de los estudiantes, la productividad y las pautas escritas de IA responsable. Todavía no han diseñado un piloto completo con medidas, formación y comunicación con las familias.",
    gap: "Muchos esfuerzos de IA en las escuelas empiezan con una herramienta en lugar de un problema, se saltan las revisiones de privacidad y equidad, y no tienen forma de decidir si funcionaron. Los líderes necesitan un plan piloto completo y honesto que puedan presentar y poner en marcha, para que la IA se use solo donde ayuda a los estudiantes.",
    constraints: [
      "El piloto debe ser uno que la persona tenga autoridad para proponer, o que propondrá a alguien que la tenga",
      "Se aplican FERPA, COPPA para estudiantes menores de 13 años, la política del distrito y la ley estatal; el responsable de privacidad da el visto bueno",
      "Nada de datos reales de estudiantes en los documentos del plan; usar evidencia resumida",
      "Las reglas de financiamiento federal cambian, así que hay que consultar con la oficina de programas federales",
      "Tiempo: lecciones cortas; el plan y la presentación llevan varias sesiones"
    ],
    prerequisites: "Los cursos 1 a 7 de IA para líderes escolares y educativos, sobre todo el curso 7 (\"Ética, seguridad e IA responsable\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un desafío de tu escuela", action: "escribir un planteamiento del problema centrado en los estudiantes, con pruebas", standard: "diciendo qué está mal, para quién y cuánto, y si la IA es la respuesta correcta" },
    { id: "O2", condition: "Con tu problema", action: "fijar un alcance pequeño para el piloto y elegir una herramienta que pase la revisión del proveedor", standard: "nombrando quiénes, qué cambia y cuánto dura, con la herramienta elegida después del alcance" },
    { id: "O3", condition: "Antes de que empiece el piloto", action: "hacer una revisión de privacidad y equidad con una protección y un responsable para cada riesgo", standard: "cubriendo FERPA, COPPA si hay estudiantes menores de 13 años, la accesibilidad y el acceso, con el visto bueno del responsable de privacidad" },
    { id: "O4", condition: "Para el personal del piloto", action: "planear una formación práctica, las reglas y el apoyo", standard: "con una agenda de formación de 60 minutos, un contacto con nombre y las notas que llevarán los docentes" },
    { id: "O5", condition: "Para las familias de los estudiantes del piloto", action: "escribir una carta honesta a las familias y unas preguntas frecuentes de cinco preguntas", standard: "de menos de una página, revisadas por un padre o un enlace con las familias, con las traducciones revisadas por personas calificadas que hablen el idioma" },
    { id: "O6", condition: "Para tu plan piloto completo", action: "fijar de tres a cinco medidas de éxito con una línea de base y una regla de seguir, ajustar o detener, y presentar el plan", standard: "en diez minutos, con la regla escrita antes del inicio y las preguntas y respuestas anotadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Diseñar el piloto",
      lessons: [
        {
          objectives: ["O1"],
          title: "Empieza por un problema centrado en los estudiantes",
          minutes: 5,
          goal: "Definir el problema que resolverá tu piloto, con pruebas y los estudiantes a los que sirve.",
          text: [
            "Los buenos pilotos empiezan por un problema, no por un producto. Pregunta: ¿qué está estorbando el aprendizaje o el bienestar de los estudiantes, o el tiempo de los docentes con ellos? Ejemplos: los docentes pasan horas cada semana en traducciones para las familias; los estudiantes de álgebra de 9.º grado necesitan más práctica con retroalimentación; a los docentes nuevos les cuesta diferenciar.",
            "Reúne pruebas: datos que ya tienes (protegiendo la privacidad), encuestas a docentes y estudiantes, y conversaciones. Escribe el problema en una oración que diga a quién afecta y cuánto: “Nuestros docentes de álgebra de 9.º grado dicen tener menos de 10 minutos por semana por estudiante para retroalimentación individual, y el 40 por ciento de los estudiantes reprobó el examen de la primera unidad.”",
            "Luego pregúntate si la IA es la respuesta correcta. A veces un cambio de horario, una plantilla o más tiempo del personal lo resuelve mejor. Si la IA encaja, di exactamente qué hará."
          ],
          steps: ["Haz una lista de problemas que bloquean el aprendizaje, el bienestar o el tiempo docente.", "Reúne pruebas: datos, encuestas, conversaciones.", "Escribe el problema en una oración: quién, qué, cuánto.", "Pregúntate si la IA es la respuesta correcta.", "Si lo es, di exactamente qué hará la IA."],
          words: [["Planteamiento del problema", "una oración que dice qué está mal, para quién y cuánto."], ["Pruebas", "datos y observaciones que muestran que un problema es real."]],
          slides: [
            { title: "Primero el problema, después el producto", bullets: ["¿Qué bloquea el aprendizaje, el bienestar o el tiempo docente?", "Traducciones, práctica, diferenciación"] },
            { title: "Muestra las pruebas", bullets: ["Datos existentes, protegiendo la privacidad", "Encuestas y conversaciones", "Una oración: quién, qué, cuánto"] },
            { title: "¿La IA es la respuesta?", bullets: ["A veces un horario o una plantilla es mejor", "Si la IA encaja, di exactamente qué hace"] }
          ],
          tryIt: "Escribe tu planteamiento del problema en una oración con pruebas, y otra oración sobre qué haría exactamente la IA al respecto, o por qué otra cosa funcionaría mejor.",
          youCanNow: "definir un problema centrado en los estudiantes, con pruebas, antes de elegir cualquier herramienta de IA.",
          quickCheck: [
            { objective: "O1", q: "¿Qué dice un planteamiento del problema?", options: ["Qué herramienta de IA quieres comprar", "Qué está mal, para quién y cuánto", "Cuánto costará el piloto", "Quién presentará el plan"], answer: 1, why: "Un planteamiento del problema claro mantiene el piloto enfocado en los estudiantes, no en una herramienta." },
            { objective: "O1", q: "Un proveedor le ofrece a tu escuela una herramienta de IA gratuita. ¿Qué harías primero?", options: ["Empezar a usarla, porque es gratis", "Elegir después un problema que podría resolver", "Definir el problema de los estudiantes y preguntarte si la IA es siquiera la respuesta correcta", "Pedir a los estudiantes que la prueben en casa"], answer: 2, why: "Los pilotos sólidos empiezan por un problema centrado en los estudiantes, no por una herramienta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Acotar el piloto y elegir la herramienta",
          minutes: 6,
          goal: "Fijar un alcance pequeño y claro para el piloto y elegir una herramienta que pase la revisión del proveedor.",
          text: [
            "Mantenlo pequeño: unos pocos docentes, o un grado o curso, durante seis a doce semanas. Un piloto pequeño es más fácil de apoyar, medir y detener si hace falta. Escribe quién participa, qué hará distinto y cuándo.",
            "Elige la herramienta al final. Prefiere herramientas ya aprobadas en tu distrito, o que pasen la revisión del proveedor del curso 7 (la lista Model Terms of Service más las preguntas de IA sobre exactitud, sesgo, accesibilidad y corrección por el docente). Revisa las reglas de edad de la herramienta si la usarán estudiantes.",
            "Piensa en el financiamiento. La carta “Dear Colleague” del Departamento de Educación de julio de 2025, según informó K-12 Dive, dice que los fondos federales existentes pueden apoyar la IA para herramientas curriculares de alta calidad, tutoría de alto impacto y orientación sobre trayectorias universitarias y profesionales, si se cumplen los requisitos legales. Revisa la carta en ed.gov y consulta a tu oficina de programas federales antes de contar con cualquier fondo."
          ],
          steps: ["Elige un grupo pequeño y de seis a doce semanas.", "Escribe quién, qué cambia y cuándo.", "Prefiere herramientas aprobadas; si no, haz la revisión del proveedor.", "Revisa las reglas de edad si la usan estudiantes.", "Consulta el financiamiento con tu oficina de programas federales."],
          words: [["Alcance", "el tamaño y los límites de un proyecto: quién, qué y cuánto tiempo."], ["Oficina de programas federales", "la oficina del distrito que administra subvenciones federales como Title I."]],
          slides: [
            { title: "Mantenlo pequeño", bullets: ["Unos pocos docentes, un grado o curso", "De seis a doce semanas", "Fácil de apoyar, medir y detener"] },
            { title: "Elige la herramienta al final", bullets: ["Prefiere herramientas aprobadas por el distrito", "Si no, haz la revisión del proveedor", "Revisa las reglas de edad para uso estudiantil"] },
            { title: "Financiamiento", bullets: ["Carta federal de julio de 2025: algunos usos de IA financiables", "Herramientas curriculares, tutoría, orientación de trayectorias", "Confírmalo con tu oficina de programas federales"] }
          ],
          sources: [{ name: "K-12 Dive: el Departamento de Educación publica prioridades sobre IA (julio de 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacidad y tecnología educativa: lista Model Terms of Service", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Escribe el alcance de tu piloto (quién, qué cambia, cuánto tiempo) y nombra la herramienta, con su estado de aprobación o la revisión del proveedor que hiciste.",
          youCanNow: "acotar un piloto de IA pequeño y elegir una herramienta revisada correctamente.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es un buen alcance para un piloto?", options: ["Todas las escuelas del distrito durante tres años", "Unos pocos docentes de una materia durante seis a doce semanas", "Un estudiante durante un día", "Sin duración fija"], answer: 1, why: "Un alcance pequeño y claro te permite aprender rápido y limitar el riesgo." },
            { objective: "O2", q: "La herramienta que quieres todavía no está aprobada por el distrito. ¿Qué haces?", options: ["Haces la revisión del proveedor antes del piloto", "La usas de todos modos para un piloto corto", "Pides a los docentes que la compren ellos", "Eliges una herramienta al azar"], answer: 0, why: "Las herramientas deben pasar la revisión del proveedor antes de que las usen estudiantes o personal." }
          ]
        },
        {
          objectives: ["O3"],
          title: "La revisión de privacidad y equidad",
          minutes: 6,
          goal: "Hacer una revisión de privacidad y equidad de tu piloto antes de que empiece.",
          text: [
            "Privacidad: haz una lista exacta de los datos de estudiantes que usa el piloto y a dónde van. Según FERPA (ley federal de privacidad de los registros educativos), compartir información personal identificable de los registros educativos con un proveedor suele requerir consentimiento salvo que aplique una excepción, como un proveedor que actúa como funcionario escolar bajo el control directo de la escuela y con límites para volver a compartir. Si los estudiantes tienen menos de 13 años, aplica COPPA; el consentimiento de la escuela solo vale para uso escolar, sin otro fin comercial. Consigue la aprobación de tu responsable de privacidad.",
            "Equidad: ¿quién podría quedar fuera o salir perjudicado? Revisa el acceso (dispositivos, internet, accesibilidad para estudiantes con discapacidad, idiomas de las familias), si los resultados podrían variar según el grupo de estudiantes y si algún resultado de la IA podría afectar calificaciones, ubicación o disciplina; en ese caso, agrega una revisión humana.",
            "Escribe la revisión en una página, con cada riesgo, su protección y su responsable. Un piloto que no ha pasado esta revisión no está listo para empezar."
          ],
          steps: ["Haz una lista de los datos de estudiantes, a dónde van y por qué.", "Revisa FERPA, y COPPA si los estudiantes tienen menos de 13 años.", "Consigue la aprobación del responsable de privacidad.", "Revisa el acceso, la accesibilidad, los idiomas y las diferencias entre grupos.", "Escribe cada riesgo con su protección y su responsable."],
          words: [["Aprobación formal", "el visto bueno oficial de la persona responsable."], ["Accesibilidad", "si las personas con discapacidad pueden usar plenamente una herramienta."]],
          slides: [
            { title: "Privacidad", bullets: ["Qué datos, a dónde van, por qué", "FERPA; COPPA si hay menores de 13", "El responsable de privacidad aprueba"] },
            { title: "Equidad", bullets: ["Dispositivos, internet, accesibilidad, idiomas", "¿Resultados distintos según el grupo?", "Revisión humana para todo lo importante"] },
            { title: "Una página", bullets: ["Riesgo, protección, responsable", "Sin aprobar = no está listo"] }
          ],
          sources: [{ name: "FERPA: protección de la privacidad estudiantil", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Cumplir con COPPA, preguntas frecuentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Escribe tu revisión de privacidad y equidad de una página con al menos tres riesgos de privacidad y tres de equidad, cada uno con una protección y un responsable.",
          youCanNow: "revisar los riesgos de privacidad y equidad de un piloto de IA antes de que empiece.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es una pregunta de equidad para un piloto?", options: ["¿La herramienta es popular?", "¿La herramienta es la más nueva?", "¿La herramienta tiene un diseño bonito?", "¿Pueden los estudiantes con discapacidad usar la herramienta por completo?"], answer: 3, why: "La accesibilidad y el acceso son parte de la revisión de equidad." },
            { objective: "O3", q: "Tu revisión de privacidad y equidad no está terminada, pero el piloto empieza mañana. ¿Qué haces?", options: ["Empiezas igual y terminas la revisión después", "Retrasas el inicio hasta que la revisión esté hecha y aprobada", "Te saltas la parte de equidad", "Empiezas solo con la mitad de los estudiantes"], answer: 1, why: "Un piloto que no ha pasado la revisión de privacidad y equidad no está listo para empezar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Diseñar el piloto",
        questions: [
          { objective: "O1", q: "¿Con qué debe empezar un buen piloto?", options: ["Una demostración de un producto", "Un descuento del proveedor", "Un problema centrado en los estudiantes, con pruebas", "Un comunicado de prensa"], answer: 2, why: "Primero el problema, después el producto." },
          { objective: "O2", q: "¿Qué alcance de piloto es el mejor?", options: ["Unos pocos docentes de un curso durante 6-12 semanas", "Todas las escuelas del distrito durante tres años", "Ningún grupo definido", "Solo el director"], answer: 0, why: "Los pilotos pequeños son más fáciles de apoyar, medir y detener." },
          { objective: "O2", q: "¿Cuándo debes elegir la herramienta?", options: ["Primero", "Cuando termine el piloto", "Nunca", "Después de definir el problema y el alcance"], answer: 3, why: "La herramienta debe ajustarse al problema." },
          { objective: "O3", q: "Los estudiantes del piloto tienen 10 años. ¿Qué ley aplica al servicio en línea?", options: ["Ninguna", "COPPA", "Solo la ley de tránsito estatal", "Solo la de derechos de autor"], answer: 1, why: "COPPA protege a los niños menores de 13 años." },
          { objective: "O3", q: "Los resultados de la IA en tu piloto podrían influir en la ubicación de cursos. ¿Qué debes agregar?", options: ["Nada", "Un modelo más rápido", "Más IA", "Una revisión humana antes de cualquier decisión de ubicación"], answer: 3, why: "Las decisiones importantes necesitan revisión humana." }
        ]
      }
    },
    {
      name: "Capítulo 2: Personas, pruebas y presentación",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparar al personal",
          minutes: 5,
          goal: "Planear la formación y el apoyo que necesita el personal del piloto.",
          text: [
            "Los docentes del piloto necesitan más que un usuario y una contraseña. Planea tres cosas. Habilidades: cómo usar bien la herramienta, las instrucciones o ajustes que funcionan y cómo revisar lo que produce. Reglas: privacidad, los niveles de uso de IA para los estudiantes y qué hacer si algo sale mal. Apoyo: un contacto designado, un encuentro semanal de seguimiento y tiempo para probar.",
            "Haz que la formación sea práctica. Los docentes deben usar la herramienta con sus propios materiales reales (no privados) durante la sesión, no ver una demostración. Forma parejas entre los que adoptan primero y los colegas más cautelosos.",
            "Pide a los docentes del piloto que lleven notas breves: tiempo dedicado, qué funcionó, qué falló, reacciones de los estudiantes. Sus notas forman parte de tus pruebas y orientarán la decisión final."
          ],
          steps: ["Planea las habilidades: uso, instrucciones, revisión de resultados.", "Planea las reglas: privacidad, niveles de uso estudiantil, incidentes.", "Planea el apoyo: contacto, seguimiento semanal, tiempo.", "Haz sesiones prácticas con materiales reales.", "Pide a los docentes que lleven notas breves."],
          words: [["Desarrollo profesional", "formación y aprendizaje para docentes y personal."], ["Pionero", "alguien que prueba herramientas nuevas antes que otros y puede ayudarlos."]],
          slides: [
            { title: "Habilidades, reglas, apoyo", bullets: ["Habilidades: uso, instrucciones, revisión", "Reglas: privacidad, niveles estudiantiles, incidentes", "Apoyo: contacto, seguimiento, tiempo"] },
            { title: "Formación práctica", bullets: ["Usar la herramienta con materiales reales no privados", "Parejas de pioneros y colegas cautelosos"] },
            { title: "Las notas docentes son pruebas", bullets: ["Tiempo dedicado, qué funcionó, qué falló", "Reacciones de los estudiantes"] }
          ],
          tryIt: "Escribe un plan de personal de una página: la agenda de una formación práctica de 60 minutos, las reglas que deben seguir los docentes, el apoyo que recibirán y las notas que les pedirás llevar.",
          youCanNow: "preparar y apoyar al personal para un piloto de IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué debe incluir el apoyo al personal durante el piloto?", options: ["Un contacto con nombre y reuniones de seguimiento semanales", "Un solo correo", "Solo un chatbot de IA", "Nada; los docentes se las arreglan"], answer: 0, why: "Un apoyo con nombre y un seguimiento regular evitan que los problemas crezcan." },
            { objective: "O4", q: "Los docentes preguntan por qué deben llevar notas durante el piloto. ¿Qué dirías?", options: ["Que es una regla del proveedor", "Que es para juzgar su forma de enseñar", "Que sus notas son parte de la evidencia para decidir qué pasa después", "Que es un trabajo opcional sin importancia"], answer: 2, why: "Las notas de los docentes son evidencia para la decisión de seguir, ajustar o detener." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Comunicarse con las familias",
          minutes: 5,
          goal: "Escribir una carta a las familias y unas preguntas frecuentes que expliquen el piloto con honestidad.",
          text: [
            "Las familias confían en lo que entienden. Infórmales antes de que empiece el piloto: en qué problema trabajas, qué hace la herramienta de IA, qué no hace (no pone calificaciones ni decide ubicaciones), qué datos de estudiantes se usan y cómo se protegen, y a quién contactar con preguntas.",
            "Agrega unas preguntas frecuentes breves: ¿Se usarán los datos de mi hijo para entrenar la IA? (Responde según tu acuerdo con el proveedor.) ¿Puede mi hijo no participar, y cuál es la alternativa? ¿Cómo sabrán si funciona? La FTC (Comisión Federal de Comercio de EE. UU.) sugiere que las escuelas informen a los padres qué servicios en línea han aprobado; FERPA da a los padres el derecho a revisar los registros educativos de su hijo.",
            "Escribe en un lenguaje sencillo y ofrece traducciones revisadas por hablantes calificados a las familias que las necesiten. Ofrece una breve sesión informativa o un horario para hacer preguntas."
          ],
          steps: ["Explica el problema y lo que la herramienta hace y no hace.", "Explica el uso y la protección de los datos.", "Agrega preguntas frecuentes: entrenamiento, no participar, medidas.", "Traduce, con revisión de hablantes calificados.", "Ofrece un horario para preguntas."],
          words: [["Preguntas frecuentes", "una lista breve de preguntas comunes con sus respuestas."], ["No participar", "elegir no formar parte de algo."]],
          slides: [
            { title: "Informa primero a las familias", bullets: ["El problema y lo que hace la herramienta", "Lo que no hace", "Los datos usados y cómo se protegen"] },
            { title: "Preguntas frecuentes breves", bullets: ["¿Se usan los datos para entrenar la IA?", "¿Puede mi hijo no participar? ¿Alternativa?", "¿Cómo sabrán si funciona?"] },
            { title: "Llega a todas las familias", bullets: ["Lenguaje sencillo", "Traducciones revisadas", "Un horario para preguntas"] }
          ],
          sources: [{ name: "FTC: Cumplir con COPPA, preguntas frecuentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FERPA: protección de la privacidad estudiantil", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Escribe la carta a las familias (menos de una página) y cinco preguntas frecuentes para tu piloto. Pide a un padre o a un enlace con las familias que la lea y te diga qué no está claro.",
          youCanNow: "explicar un piloto de IA a las familias con claridad y honestidad.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debe decir la carta a las familias que la herramienta NO hace?", options: ["Ayudar a los estudiantes a practicar", "Tomar decisiones de calificaciones o de ubicación", "Funcionar en las computadoras de la escuela", "Usar internet"], answer: 1, why: "Las familias necesitan saber que las decisiones sobre sus hijos las toman personas, no la IA." },
            { objective: "O5", q: "Un enlace con las familias dice que tu carta es difícil de entender. ¿Qué harías?", options: ["Enviarla de todos modos", "Añadir más detalles y términos legales", "Enviarla solo en inglés", "Reescribirla con palabras sencillas y pedirle que la lea otra vez"], answer: 3, why: "La carta solo funciona si las familias pueden entenderla." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Medir el éxito y presentar tu plan",
          minutes: 6,
          goal: "Fijar medidas y una regla de decisión, y presentar el plan en diez minutos.",
          text: [
            "Elige de tres a cinco medidas que coincidan con tu problema, con una línea de base de antes del piloto: un resultado de los estudiantes (resultados del examen de la unidad, práctica completada), una medida docente (tiempo ahorrado, confianza), una medida de la experiencia de estudiantes o familias (una encuesta breve) y una medida de seguridad (incidentes, problemas de privacidad). Informa los resultados por grupo de estudiantes cuando la privacidad lo permita, para detectar efectos desiguales.",
            "Escribe la regla de decisión de antemano: seguir (ampliar), ajustar (cambiar y volver a probar) o detener. Por ejemplo: “Ampliar si mejoran los resultados de los exámenes y los docentes ahorran tiempo, sin incidentes graves y sin ningún grupo que empeore.”",
            "Presenta en diez minutos: el problema y las pruebas, el piloto y la herramienta, la revisión de privacidad y equidad, el plan de personas, las medidas y la regla de decisión. Invita las preguntas difíciles; fortalecen el plan."
          ],
          steps: ["Elige 3-5 medidas: estudiantes, docentes, experiencia, seguridad.", "Reúne una línea de base.", "Planea mirar los resultados por grupo cuando la privacidad lo permita.", "Escribe la regla de seguir, ajustar o detener.", "Presenta en diez minutos y anota las preguntas."],
          words: [["Medida", "algo que cuentas o valoras para ver si un cambio funcionó."], ["Regla de decisión", "una regla escrita de antemano para decidir si ampliar, ajustar o detener."]],
          slides: [
            { title: "Medidas con línea de base", bullets: ["Resultado de los estudiantes", "Tiempo y confianza de los docentes", "Encuesta de experiencia y seguridad"] },
            { title: "Primero decide la regla", bullets: ["Seguir, ajustar o detener", "Ningún grupo empeora", "Sin incidentes graves"] },
            { title: "Presentación de diez minutos", bullets: ["Problema y pruebas; piloto y herramienta", "Privacidad y equidad; plan de personas", "Medidas y regla de decisión"] }
          ],
          tryIt: "Tarea final: arma tu plan de piloto completo (problema, alcance y herramienta, revisión de privacidad y equidad, plan de personal, carta y preguntas frecuentes para las familias, medidas con línea de base, regla de decisión), preséntalo en diez minutos ante un equipo directivo, un grupo de colegas o una junta, y anota las preguntas y tus respuestas.",
          youCanNow: "diseñar, defender y liderar un piloto de IA responsable en tu escuela o distrito.",
          quickCheck: [
            { objective: "O6", q: "¿Cuándo se reúne la línea de base?", options: ["Antes del piloto", "A mitad del piloto", "Cuando termina el piloto", "Solo si el piloto fracasa"], answer: 0, why: "Una línea de base antes del piloto muestra si algo cambió." },
            { objective: "O6", q: "Los resultados se ven bien en general, pero a un grupo de estudiantes le fue peor. ¿Qué hace tu plan?", options: ["Informar solo el resultado general", "Seguir, porque a la mayoría le fue bien", "Mirar los resultados por grupo y elegir ajustar o detener según diga la regla de decisión", "Quitar a ese grupo de los datos"], answer: 2, why: "Mirar por grupo detecta los efectos desiguales, y la regla de decisión guía qué hacer." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Personas, pruebas y presentación",
        questions: [
          { objective: "O4", q: "¿Qué hace más eficaz la formación en IA para docentes?", options: ["Ver una demostración larga", "Leer el anuncio del proveedor", "Usarla en la práctica con sus propios materiales no privados", "No dar formación"], answer: 2, why: "Las personas aprenden una herramienta usándola en trabajo real." },
          { objective: "O5", q: "¿Qué debe decir la carta a las familias que la herramienta NO hace?", options: ["Poner calificaciones o decidir ubicaciones", "Ayudar con la práctica", "Ahorrar tiempo a los docentes", "Dar retroalimentación"], answer: 0, why: "Las familias deben saber que las decisiones quedan en manos de los educadores." },
          { objective: "O6", q: "¿Por qué mirar los resultados del piloto por grupo de estudiantes?", options: ["Para clasificar públicamente a los estudiantes", "Para detectar efectos desiguales", "No es útil", "Para ahorrar tiempo"], answer: 1, why: "Un piloto puede ayudar a algunos estudiantes y perjudicar a otros." },
          { objective: "O6", q: "¿Cuándo debe escribirse la regla de seguir, ajustar o detener?", options: ["Antes de que empiece el piloto", "Cuando lleguen los resultados", "Nunca", "Solo si fracasa"], answer: 0, why: "Decidir de antemano mantiene honesta la decisión." },
          { objective: "O6", q: "Durante tu presentación, un miembro de la junta hace una pregunta difícil sobre la privacidad. ¿La mejor respuesta?", options: ["Evitarla", "Prometer que no hay riesgos", "Terminar la presentación", "Agradecerla y responder con tu revisión de privacidad"], answer: 3, why: "Las preguntas difíciles fortalecen el plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 8: Proyecto final",
    questions: [
      { objective: "O1", q: "Un planteamiento del problema dice:", options: ["Qué producto comprar", "Qué está mal, para quién y cuánto", "Solo el presupuesto", "La lista del personal"], answer: 1, why: "Define el problema con pruebas." },
      { objective: "O1", q: "Las pruebas de un problema pueden incluir:", options: ["Anuncios de proveedores", "Rumores", "Datos existentes, encuestas y conversaciones", "Suposiciones"], answer: 2, why: "Las pruebas reales muestran que el problema es real." },
      { objective: "O1", q: "Antes de elegir la IA, pregunta:", options: ["¿Cuál es la más barata?", "¿Qué IA es la más famosa?", "¿La IA es la respuesta correcta?", "¿Cuál tiene el mejor logotipo?"], answer: 2, why: "A veces una solución sin IA es mejor." },
      { objective: "O2", q: "Una buena duración para un piloto es de unas:", options: ["Seis a doce semanas", "Un día", "Cinco años", "Sin duración fija"], answer: 0, why: "Lo bastante largo para aprender y lo bastante corto para manejarlo." },
      { objective: "O2", q: "La herramienta debe elegirse:", options: ["Solo por los estudiantes", "Antes que todo lo demás", "Por el proveedor", "Cuando el problema y el alcance estén claros"], answer: 3, why: "La herramienta debe ajustarse al problema." },
      { objective: "O2", q: "Si una herramienta todavía no está aprobada, debes:", options: ["Usarla de todos modos", "Hacer la revisión del proveedor", "Pedir a los estudiantes que se registren", "Saltarte la privacidad"], answer: 1, why: "La aprobación va antes del uso." },
      { objective: "O2", q: "La carta federal de julio de 2025 dice que los fondos de subvenciones pueden apoyar la IA para:", options: ["Equipo deportivo", "Cualquier compra", "Reemplazar a los docentes", "Herramientas curriculares, tutoría de alto impacto y orientación de trayectorias"], answer: 3, why: "Esos usos se nombran en la carta, según lo informado." },
      { objective: "O2", q: "Antes de contar con fondos federales, consulta a:", options: ["Un estudiante", "Un proveedor", "Tu oficina de programas federales", "Las redes sociales"], answer: 2, why: "Esa oficina maneja las reglas de las subvenciones federales." },
      { objective: "O3", q: "Según FERPA, compartir datos personales identificables de estudiantes con un proveedor suele requerir:", options: ["Consentimiento, salvo que aplique una excepción", "Nada", "Solo una llamada telefónica", "El permiso del proveedor"], answer: 0, why: "Las excepciones incluyen a los funcionarios escolares bajo control." },
      { objective: "O3", q: "¿Quién aprueba la revisión de privacidad?", options: ["El proveedor", "El responsable de privacidad del distrito", "Un estudiante", "Nadie"], answer: 1, why: "La persona responsable da la aprobación." },
      { objective: "O3", q: "¿Cuál es una pregunta de equidad?", options: ["¿Pueden los estudiantes con discapacidad usar plenamente la herramienta?", "¿De qué color es la aplicación?", "¿Está de moda?", "¿Es nueva?"], answer: 0, why: "La accesibilidad es parte de la equidad." },
      { objective: "O3", q: "Un piloto que no ha pasado la revisión de privacidad y equidad:", options: ["Está terminado", "Está listo de todos modos", "Está aprobado", "No está listo para empezar"], answer: 3, why: "La revisión es un filtro obligatorio." },
      { objective: "O4", q: "El apoyo al personal debe incluir:", options: ["Nada después de entregar el acceso", "Un contacto designado y seguimiento semanal", "Solo un correo", "Solo la línea de ayuda del proveedor"], answer: 1, why: "El apoyo mantiene el piloto en marcha." },
      { objective: "O4", q: "Las notas de los docentes del piloto son:", options: ["Inútiles", "Diarios privados", "Parte de tus pruebas", "Solo para el proveedor"], answer: 2, why: "Muestran qué funcionó y qué falló." },
      { objective: "O5", q: "Las preguntas frecuentes para las familias deben responder:", options: ["¿Quién es el docente más popular?", "¿Cuál es el precio de las acciones del proveedor?", "¿Se usan los datos de mi hijo para entrenar la IA?", "Nada"], answer: 2, why: "El uso de los datos es una de las principales preocupaciones de las familias." },
      { objective: "O5", q: "Las traducciones para las familias deben:", options: ["Revisarlas hablantes calificados", "Ser texto de IA sin revisar", "Omitirse", "Hacerlas los estudiantes"], answer: 0, why: "Las familias necesitan información correcta." },
      { objective: "O6", q: "¿Cuál es una medida de seguridad?", options: ["Los ingresos del proveedor", "El número de inicios de sesión", "El número de diapositivas", "El número de incidentes o problemas de privacidad"], answer: 3, why: "La seguridad también debe medirse." },
      { objective: "O6", q: "Una línea de base se reúne:", options: ["Después del piloto", "Antes del piloto", "Nunca", "Solo si los resultados son malos"], answer: 1, why: "Muestra qué cambió." },
      { objective: "O6", q: "¿Qué opciones ofrece una regla de decisión?", options: ["Esperar para siempre", "Comprar o vender", "Solo sí", "Seguir, ajustar o detener"], answer: 3, why: "El piloto termina con una decisión clara." },
      { objective: "O6", q: "Tu presentación final debe durar unos:", options: ["Un minuto", "Dos horas", "Diez minutos", "Un día completo"], answer: 2, why: "Breve y enfocada, con tiempo para preguntas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      5,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Problema y pruebas",
        objective: "O1",
        notYet: "Parte de una herramienta, o no tiene pruebas.",
        meets: "Plantea el problema y a quién sirve, con pruebas.",
        exceeds: "Explica por qué la IA es la respuesta correcta, o qué otras opciones se consideraron."
      },
      {
        name: "Alcance y herramienta",
        objective: "O2",
        notYet: "No están claros quiénes, qué o cuánto dura, o la herramienta no tiene revisión del proveedor.",
        meets: "Alcance del piloto (quiénes, qué, cuánto dura) y la herramienta, con su revisión del proveedor.",
        exceeds: "El alcance es lo bastante pequeño para hacerse en seis a doce semanas."
      },
      {
        name: "Revisión de privacidad y equidad",
        objective: "O3",
        notYet: "Falta FERPA, COPPA (si hay menores de 13 años), la accesibilidad o el acceso.",
        meets: "Cubre FERPA, COPPA si hay menores de 13 años, la accesibilidad y el acceso.",
        exceeds: "Cada riesgo tiene una protección y un responsable, y el responsable de privacidad la revisó."
      },
      {
        name: "Personal y familias",
        objective: "O5",
        notYet: "No hay plan de formación del personal, o no hay carta a las familias con preguntas frecuentes.",
        meets: "Un plan de formación del personal, y una carta a las familias con unas preguntas frecuentes breves.",
        exceeds: "Un padre o un enlace con las familias leyó la carta y se mejoró."
      },
      {
        name: "Medidas y regla de decisión",
        objective: "O6",
        notYet: "Menos de tres medidas, sin línea de base o sin regla de decisión.",
        meets: "De tres a cinco medidas de éxito con una línea de base, y una regla de seguir, ajustar o detener.",
        exceeds: "Incluye una medida de seguridad y un plan para mirar los resultados por grupo de estudiantes."
      },
      {
        name: "Presentación",
        objective: "O6",
        notYet: "No se presentó, o no se anotaron las preguntas.",
        meets: "Presentado en diez minutos, con las preguntas y respuestas anotadas.",
        exceeds: "Las preguntas difíciles se recibieron bien y se respondieron con la evidencia del plan."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminan el programa y aprueban el proyecto final (rúbrica)",
      "Planes piloto presentados a un equipo directivo o a una junta en un plazo de 60 días (encuesta de seguimiento)",
      "Pilotos iniciados con una revisión de privacidad y equidad aprobada y una regla de decisión escrita (encuesta de seguimiento)",
      "Pilotos que llegan a una decisión de seguir, ajustar o detener usando su línea de base y sus medidas"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Tus pautas de IA responsable del curso 7 y las políticas de tu distrito",
      "Datos resumidos o resultados de encuestas sobre el problema (sin datos individuales de estudiantes)",
      "Una plantilla de plan de unas cuatro páginas",
      "Unos 90 minutos para las lecciones y las comprobaciones, más tiempo para escribir y presentar el plan"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego pide a los líderes que compartan sus planteamientos del problema en grupos pequeños antes de elegir herramientas.",
      "Invita al responsable de privacidad del distrito a revisar las revisiones de privacidad y equidad antes de las presentaciones.",
      "Pide a un padre o a un enlace con las familias que lea los borradores de las cartas a las familias.",
      "Organiza una sesión de presentaciones con un equipo directivo real o con un grupo de colegas que hagan de junta.",
      "Califica el proyecto final con la rúbrica y reúne las preguntas y respuestas anotadas."
    ]
  }
};

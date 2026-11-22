"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-ai-continuing-education.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-ai-continuing-education-es",
  lang: "es",
  translationOf: "reentry-ai-continuing-education",
  category: "Re-Entry",
  name: "La IA y la educación continua",
  skills: "Fijar una meta de aprendizaje ligada a un trabajo, Encontrar programas gratis y de bajo costo, Usar la IA como tutor de estudio, Hacer un plan de estudio, Revisar un programa antes de inscribirte, Prepararte para solicitar ayuda financiera",
  outcome: "elegir una meta de aprendizaje que lleve a un trabajo, encontrar un programa real (una clase de equivalencia de preparatoria, un certificado o un curso universitario) y revisarlo antes de inscribirte, y usar un asistente de IA como tutor con un plan de estudio semanal.",
  about: [
    "Muchas personas regresan a casa con ganas de aprender: terminar una equivalencia de preparatoria, sacar un certificado de oficio, empezar en un colegio comunitario o aprender computación. La educación puede abrir puertas a mejores trabajos.",
    "Vas a fijar una meta que lleve a un trabajo, encontrar programas gratis y de bajo costo, revisar un programa antes de inscribirte, prepararte para la ayuda financiera y usar un asistente de IA gratis como ChatGPT, Microsoft Copilot o Google Gemini como un tutor paciente.",
    "Cada lección dura unos cinco minutos. La IA es una ayuda para estudiar, no una forma de que haga tus tareas por ti; las escuelas tienen reglas sobre eso. Nunca escribas en la IA números privados ni detalles de tu caso. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Elige una meta de aprendizaje ligada a un trabajo. Encuentra un programa real para ella y revísalo con cinco preguntas (costo, duración, horario, qué obtienes al final y cómo te ayuda a conseguir trabajo). Luego pídele a un asistente de IA un plan de estudio de cuatro semanas, úsalo para que te enseñe y te pregunte sobre el primer tema, y pon tus primeras dos sesiones de estudio en tu calendario.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas adultas que regresan a casa después de estar en prisión (reinserción) y quieren seguir aprendiendo: terminar una equivalencia de preparatoria, sacar un certificado de un oficio, empezar en un colegio comunitario o aprender computación para conseguir un mejor trabajo.",
    startingPoint: "Saben usar un teléfono básico y algunas aplicaciones. Muchas llevan años sin estudiar, no saben cómo revisar un programa ni cómo pedir ayuda financiera, y tienen poca experiencia usando la IA para estudiar.",
    gap: "Estudiar puede abrir la puerta a mejores trabajos, pero quienes regresan a casa pueden perder tiempo y dinero en programas que no llevan a un empleo, o en estafas con préstamos grandes. Necesitan fijar una meta ligada a un trabajo, encontrar y revisar programas reales, estudiar con la IA de forma honesta y prepararse para la ayuda financiera.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca con internet",
      "Tiempo: lecciones de unos 5 minutos que caben entre el trabajo y las citas",
      "Reglas de la escuela: la IA es una ayuda para estudiar, no una forma de hacer las tareas",
      "Privacidad: nunca escribas en la IA números privados, datos de impuestos ni detalles de tu caso; los formularios de ayuda se llenan solo en studentaid.gov"
    ],
    prerequisites: "\"Introducción a la IA y a la confianza digital\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un trabajo que quieres", action: "escribir una meta de aprendizaje conectada con ese trabajo", standard: "en una oración, revisando con la junta del estado las reglas de licencias que apliquen" },
    { id: "O2", condition: "Usando careeronestop.org, bibliotecas, escuelas para adultos o colegios comunitarios", action: "encontrar al menos dos programas reales que encajen con tu meta", standard: "con números de teléfono tomados de sus sitios oficiales" },
    { id: "O3", condition: "Con un programa", action: "revisarlo con cinco preguntas sobre costo, duración, horario, qué obtienes y cómo te ayuda a conseguir trabajo", standard: "con respuestas del mismo programa, y tomando como señal de alerta cualquier presión para firmar un préstamo grande" },
    { id: "O4", condition: "Con un tema de tu meta", action: "pedirle a un asistente de IA que te lo explique, te dé un ejemplo y te haga preguntas", standard: "sin que la IA haga tus tareas, y revisando los errores con tu maestro o tu libro" },
    { id: "O5", condition: "Con tu trabajo y tus citas", action: "hacer con ayuda de la IA un plan de estudio de cuatro semanas", standard: "con sesiones cortas y regulares, y las dos primeras en tu calendario" },
    { id: "O6", condition: "Usando studentaid.gov", action: "anotar dónde solicitar la ayuda federal para estudiantes y qué preparar", standard: "con tres preguntas para una oficina de ayuda financiera y los datos privados escritos solo en studentaid.gov" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir tu camino",
      lessons: [
        {
          objectives: ["O1"],
          title: "Fijar una meta de aprendizaje que lleve a un trabajo",
          minutes: 5,
          goal: "Elegir una meta de aprendizaje conectada con un trabajo real.",
          text: [
            "Aprender es más útil cuando te lleva a algún lado. Empieza por el trabajo que quieres y luego piensa hacia atrás en lo que necesitas aprender.",
            "Pregúntale a la IA: \"Quiero trabajar como operador de montacargas o como líder en un almacén. ¿Qué capacitación o certificados suele sacar la gente para eso? ¿Cuáles son cortos y de bajo costo?\" O: \"Quiero ser electricista. ¿Cuáles son los pasos de siempre?\"",
            "Algunos trabajos necesitan una licencia, y algunas reglas de licencias toman en cuenta los antecedentes de una persona. Revisa con la junta de licencias de tu estado o con un programa de reinserción antes de invertir tiempo y dinero. La IA te puede dar una lista para empezar, pero la junta oficial tiene la última palabra."
          ],
          steps: ["Nombra el trabajo que quieres.", "Pregúntale a la IA qué capacitación suele sacar la gente para él.", "Elige el siguiente paso útil más corto.", "Si necesita licencia, revisa con la junta de licencias de tu estado.", "Escribe tu meta en una oración."],
          words: [["Certificado", "una prueba de que terminaste un programa de capacitación en una habilidad específica."], ["Equivalencia de preparatoria", "un examen, como el GED, que muestra habilidades de nivel de preparatoria."]],
          slides: [
            { title: "Empieza por el trabajo", bullets: ["Luego piensa hacia atrás", "¿Qué necesito aprender?"] },
            { title: "Pregúntale a la IA", bullets: ["\"¿Qué capacitación saca la gente para este trabajo?\"", "\"¿Qué opciones son cortas y de bajo costo?\""] },
            { title: "Revisa las licencias", bullets: ["Algunos trabajos necesitan licencia", "Las reglas pueden tomar en cuenta los antecedentes", "Pregunta a la junta de tu estado o a un programa de reinserción"] }
          ],
          tryIt: "Escribe el trabajo que quieres. Pregúntale a un asistente de IA qué capacitación suele sacar la gente para él y escribe tu meta de aprendizaje en una oración.",
          youCanNow: "fijar una meta de aprendizaje que lleve a un trabajo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un certificado?", options: ["Un título universitario", "Una prueba de que terminaste una capacitación en una habilidad", "Una oferta de trabajo", "Un préstamo"], answer: 1, why: "Un certificado muestra que terminaste una capacitación en una habilidad específica." },
            { objective: "O1", q: "Quieres ser electricista. ¿Cómo empezarías tu meta de aprendizaje?", options: ["Inscribirte en la primera clase que veas", "Preguntarle a un amigo cuál clase es la más fácil", "Empezar por el trabajo, luego buscar la capacitación que pide y revisar la junta de licencias del estado", "Esperar a que alguien te ofrezca capacitación"], answer: 2, why: "Empezar por el trabajo y revisar la junta de licencias te lleva a la capacitación correcta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar programas gratis y de bajo costo",
          minutes: 5,
          goal: "Encontrar al menos dos programas reales que encajen con tu meta.",
          text: [
            "Hay muchos lugares para aprender gratis o por poco dinero: centros de educación para adultos (muchas veces para la equivalencia de preparatoria y para inglés), bibliotecas públicas, colegios comunitarios, programas de reinserción y los American Job Centers (centros de empleo), que pueden dar orientación profesional y recomendaciones de capacitación.",
            "Encuentra tu American Job Center más cercano con el buscador de CareerOneStop en careeronestop.org, un sitio del Departamento de Trabajo de Estados Unidos, o llama a su línea de ayuda al 1-877-872-5627. Los servicios cambian de un centro a otro, así que llama o ve en persona para confirmar lo que ofrece el tuyo.",
            "En línea, muchos sitios confiables ofrecen lecciones gratis, como Khan Academy para matemáticas y lectura, y cursos gratis de colegios comunitarios. Pídele ideas a la IA y luego entra al sitio web de cada programa para confirmar que existe y cuánto cuesta."
          ],
          steps: ["Pregúntale a la IA dónde puede aprender tu habilidad la gente de tu zona.", "Busca tu American Job Center más cercano en careeronestop.org.", "Revisa tu biblioteca, la escuela para adultos y el colegio comunitario.", "Anota dos programas.", "Confirma cada uno en su propio sitio web o por teléfono."],
          words: [["American Job Center", "una oficina financiada por el Departamento de Trabajo de Estados Unidos que ayuda con empleo y capacitación."], ["Colegio comunitario", "una universidad local de menor costo que da certificados y títulos de dos años."]],
          slides: [
            { title: "Lugares de bajo costo para aprender", bullets: ["Educación para adultos y bibliotecas", "Colegios comunitarios", "Programas de reinserción y American Job Centers"] },
            { title: "American Job Centers", bullets: ["Encuentra uno en careeronestop.org", "Línea de ayuda: 1-877-872-5627", "Los servicios cambian: llama para confirmar"] },
            { title: "En línea", bullets: ["Lecciones gratis como Khan Academy", "Confirma los programas en sus propios sitios"] }
          ],
          sources: [{ name: "CareerOneStop: buscador de American Job Centers (Departamento de Trabajo de EE. UU.)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" }],
          tryIt: "Encuentra tu American Job Center más cercano en careeronestop.org y otro programa (biblioteca, escuela para adultos o colegio comunitario) para tu meta. Anota los dos, con los números de teléfono de sus sitios oficiales.",
          youCanNow: "encontrar programas gratis y de bajo costo para tu meta de aprendizaje.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un colegio comunitario?", options: ["Un colegio local de menor costo", "Una escuela solo en línea", "Una agencia privada de empleo", "Una preparatoria solo para adultos"], answer: 0, why: "Los colegios comunitarios son locales y por lo general cuestan menos que otras universidades." },
            { objective: "O2", q: "La IA te sugiere un programa de capacitación cerca de ti. ¿Qué harías?", options: ["Inscribirte de inmediato", "Pagar un depósito para apartar tu lugar", "Compartirlo sin revisarlo", "Confirmarlo en el sitio web del propio programa"], answer: 3, why: "La IA se puede equivocar, así que confirmas los programas en su sitio oficial." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Revisar un programa antes de inscribirte",
          minutes: 5,
          goal: "Hacer cinco preguntas para revisar si un programa es real y vale la pena.",
          text: [
            "Algunos programas son excelentes. Otros cuestan mucho y no llevan a nada, y unos pocos son estafas que buscan a personas que quieren empezar de nuevo. Revisa antes de firmar o pagar.",
            "Haz cinco preguntas: ¿Cuál es el costo total, incluidos libros y cuotas? ¿Cuánto dura y cuál es el horario? ¿Qué obtengo al final (un certificado, una licencia o créditos)? ¿La escuela está acreditada o los empleadores reconocen el certificado? ¿Cuántos graduados consiguen trabajo, y ayudan a colocarte en un empleo?",
            "La IA te puede ayudar a preparar las preguntas y a explicar palabras como \"acreditado\". Pero las respuestas tienen que venir del propio programa, por escrito, y de lo que tú revises. Desconfía si te presionan para firmar hoy o para sacar un préstamo grande."
          ],
          steps: ["Pregunta por el costo total.", "Pregunta por la duración y el horario.", "Pregunta qué obtienes al final.", "Pregunta si está acreditado o reconocido por los empleadores.", "Pregunta por los resultados de empleo y la ayuda para colocarte."],
          words: [["Acreditado", "aprobado por un grupo oficial que revisa la calidad de una escuela."], ["Colocación laboral", "ayuda para encontrar trabajo cuando terminas."]],
          slides: [
            { title: "Revisa antes de firmar", bullets: ["Algunos programas no llevan a nada", "Algunos son estafas"] },
            { title: "Cinco preguntas", bullets: ["¿Costo total? ¿Duración y horario?", "¿Qué obtengo al final?", "¿Acreditado o reconocido?", "¿Resultados de empleo y colocación?"] },
            { title: "Señales de alerta", bullets: ["Presión para firmar hoy", "Préstamos grandes para un curso corto", "Nada de respuestas por escrito"] }
          ],
          tryIt: "Elige un programa de la Lección 2. Pídele a un asistente de IA que te ayude a convertir las cinco preguntas en un guion corto para llamar; luego llama o revisa el sitio web del programa y anota las respuestas.",
          youCanNow: "revisar un programa con cinco preguntas antes de inscribirte.",
          quickCheck: [
            { objective: "O3", q: "¿Qué significa \"acreditado\"?", options: ["Aprobado por un grupo oficial de calidad", "Gratis", "Solo en línea", "Manejado por el gobierno"], answer: 0, why: "La acreditación significa que un grupo oficial revisó la calidad del programa." },
            { objective: "O3", q: "Una escuela te dice que debes firmar hoy un préstamo grande para no perder tu lugar. ¿Qué harías?", options: ["Firmar para no perder el lugar", "Firmar pero pensar no pagar", "Tomarlo como señal de alerta y darte tiempo para revisar", "Pedirle a la IA que firme por ti"], answer: 2, why: "La presión para firmar un préstamo grande de inmediato es una señal de alerta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir tu camino",
        questions: [
          { objective: "O1", q: "¿Cuál es el mejor punto de partida para una meta de aprendizaje?", options: ["Una clase cualquiera", "El curso que más se anuncia", "El trabajo que quieres, y luego pensar hacia atrás", "El programa más largo"], answer: 2, why: "Una meta de trabajo hace útil el aprendizaje." },
          { objective: "O1", q: "La IA dice que un trabajo necesita licencia. ¿Quién tiene la última palabra sobre las reglas?", options: ["La junta de licencias de tu estado", "La IA", "Un amigo", "Una publicación en redes sociales"], answer: 0, why: "Las juntas oficiales fijan las reglas de las licencias." },
          { objective: "O2", q: "¿Dónde puedes encontrar tu American Job Center más cercano?", options: ["En un sitio de tarjetas de regalo", "En un anuncio emergente", "En cualquier mensaje de texto", "En careeronestop.org"], answer: 3, why: "CareerOneStop es el buscador del Departamento de Trabajo." },
          { objective: "O3", q: "¿Qué pregunta revisa el valor de un programa?", options: ["\"¿De qué color es el edificio?\"", "\"¿Cuántos graduados consiguen trabajo?\"", "\"¿Puedo firmar hoy sin leer?\"", "\"¿Tienen estacionamiento?\""], answer: 1, why: "Los resultados de empleo muestran si lleva a algún lado." },
          { objective: "O3", q: "Un programa te presiona para firmar hoy un préstamo grande. Esto es:", options: ["Una gran oferta", "Una señal de alerta", "Obligatorio", "Normal en todas las escuelas"], answer: 1, why: "La presión y los préstamos grandes son señales de alerta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aprender con la IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar la IA como tutor de estudio",
          minutes: 5,
          goal: "Pedirle a la IA que te explique, te dé ejemplos y te haga preguntas, sin que haga tu trabajo por ti.",
          text: [
            "Un asistente de IA puede ser un tutor paciente a cualquier hora del día. Pídele que te explique un tema de forma sencilla, que te dé un ejemplo y que te haga preguntas: \"Estoy estudiando fracciones para mi examen de equivalencia de preparatoria. Explícame cómo sumar fracciones en pasos sencillos, dame un ejemplo y luego dame tres problemas de práctica, uno a la vez.\"",
            "Si no entiendes, dilo: \"Explícalo de otra forma.\" \"Usa el dinero como ejemplo.\" Mientras más problemas intentes tú mismo, más aprendes.",
            "No dejes que la IA escriba tus tareas ni haga tus exámenes. Las escuelas lo consideran trampa y te pierdes el aprendizaje. Revisa también los datos: la IA puede equivocarse, incluso en matemáticas. Tu libro de texto y tu maestro tienen la última palabra."
          ],
          steps: ["Di qué estás estudiando y tu nivel.", "Pide una explicación sencilla y un ejemplo.", "Pide problemas de práctica, uno a la vez.", "Pide otra explicación si te atoras.", "Haz tus propias tareas; revisa los datos con tu maestro o tu libro."],
          words: [["Tutor", "un maestro que ayuda a una persona a aprender a su propio ritmo."], ["Honestidad académica", "hacer tu propio trabajo y seguir las reglas de tu escuela."]],
          slides: [
            { title: "Un tutor a cualquier hora", bullets: ["Explica de forma sencilla", "Da un ejemplo", "Te pregunta una cosa a la vez"] },
            { title: "¿Te atoraste?", bullets: ["\"Explícalo de otra forma.\"", "\"Usa el dinero como ejemplo.\""] },
            { title: "Aprende, no hagas trampa", bullets: ["Haz tus propias tareas y exámenes", "La IA puede equivocarse", "El maestro y el libro tienen la última palabra"] }
          ],
          tryIt: "Elige un tema de tu meta. Pídele a un asistente de IA que te lo explique de forma sencilla, te dé un ejemplo y te haga tres preguntas, una a la vez.",
          youCanNow: "usar la IA como tutor de estudio de forma honesta.",
          quickCheck: [
            { objective: "O4", q: "¿Qué debe incluir una buena instrucción para que la IA te dé tutoría?", options: ["Solo la palabra \"ayuda\"", "Tu tarea para que la IA la termine", "Tu número de estudiante", "Qué estás estudiando y tu nivel"], answer: 3, why: "Decirle a la IA el tema y tu nivel te da explicaciones que van contigo." },
            { objective: "O4", q: "Tienes que entregar un ensayo y te tienta que la IA lo escriba. ¿Qué harías?", options: ["Dejar que la IA lo escriba y entregarlo", "Pedirle a la IA que te explique el tema y te haga preguntas, y luego escribirlo tú", "Copiar el ensayo de un compañero", "No hacer la tarea"], answer: 1, why: "Que la IA escriba tus tareas rompe las reglas de la escuela y te salta el aprendizaje." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer un plan de estudio que encaje con tu vida",
          minutes: 5,
          goal: "Hacer un plan de estudio semanal alrededor del trabajo y otros compromisos.",
          text: [
            "Cuando trabajas, vas a citas y cuidas a tu familia, el tiempo para estudiar hay que planearlo. Las sesiones cortas y regulares funcionan mejor que estudiar todo a última hora.",
            "Pregúntale a la IA: \"Trabajo de 7 am a 3:30 pm entre semana y tengo citas los martes por la tarde. Haz un plan de estudio de cuatro semanas para las matemáticas de mi equivalencia de preparatoria, con sesiones de 30 minutos cuatro veces a la semana y un repaso corto cada fin de semana.\"",
            "Pon las sesiones en el calendario de tu teléfono con recordatorios. Estudia en un lugar tranquilo, como una biblioteca, y usa el wifi y las computadoras gratis de la biblioteca si las necesitas. Si faltas a una sesión, no te rindas; solo haz la siguiente."
          ],
          steps: ["Haz una lista de tu horario de trabajo y tus citas fijas.", "Pídele a la IA un plan de cuatro semanas con sesiones cortas.", "Pon las sesiones en tu calendario con recordatorios.", "Busca un lugar tranquilo para estudiar.", "Si faltas a una, solo haz la siguiente."],
          words: [["Sesión de estudio", "un tiempo fijo que dedicas a aprender."], ["Estudiar a última hora", "intentar aprender mucho en el último momento."]],
          slides: [
            { title: "Planea tu tiempo de estudio", bullets: ["Lo corto y regular le gana a estudiar a última hora"] },
            { title: "Pídele un plan a la IA", bullets: ["Tu horario de trabajo y tus citas", "Sesiones cortas, unas cuantas veces a la semana", "Un repaso el fin de semana"] },
            { title: "No lo sueltes", bullets: ["Recordatorios en el calendario", "Un lugar tranquilo, como la biblioteca", "¿Faltaste a una? Haz la siguiente"] }
          ],
          tryIt: "Pídele a un asistente de IA un plan de estudio de cuatro semanas que encaje con tu trabajo y tus citas. Pon tus primeras dos sesiones en el calendario de tu teléfono.",
          youCanNow: "hacer y cumplir un plan de estudio que encaje con tu vida.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es estudiar a última hora?", options: ["Estudiar un poco cada día", "Tomar apuntes en clase", "Aprender mucho en el último momento", "Pedirle ayuda a un tutor"], answer: 2, why: "Estudiar a última hora es tratar de aprender mucho justo antes de un examen." },
            { objective: "O5", q: "Faltaste a tu sesión de estudio del martes por el trabajo. ¿Qué harías?", options: ["Simplemente hacer la siguiente sesión", "Dejar el plan", "Estudiar seis horas el miércoles", "Empezar todo el plan de nuevo"], answer: 0, why: "Faltar a una sesión no pasa nada; lo que importa es retomar el camino." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Prepararte para solicitar ayuda financiera",
          minutes: 5,
          goal: "Encontrar dónde solicitar la ayuda federal para estudiantes y anotar qué preparar.",
          text: [
            "Para la universidad y muchas escuelas técnicas en Estados Unidos, el primer paso para la ayuda financiera es la FAFSA, la Solicitud Gratuita de Ayuda Federal para Estudiantes. Como dice el nombre, es gratis. Solicítala solo en el sitio oficial, studentaid.gov; no le pagues a ningún sitio web para que la llene.",
            "Las reglas sobre condenas penales y ayuda para estudiantes han cambiado en los últimos años. No des por hecho que no puedes recibir ayuda. Revisa las reglas actuales en studentaid.gov o pregunta en la oficina de ayuda financiera de la escuela; ayudan a estudiantes con estas preguntas todos los días.",
            "La IA te puede ayudar a entender términos (\"¿Qué es una beca Pell?\" \"¿Cuál es la diferencia entre una beca y un préstamo?\") y a hacer una lista de preguntas para la oficina de ayuda financiera. Escribe tu información personal y de impuestos solo en studentaid.gov, nunca en la IA. Las becas no se tienen que devolver; los préstamos sí."
          ],
          steps: ["Ve solo a studentaid.gov para la FAFSA; es gratis.", "Revisa ahí las reglas actuales sobre condenas, o con la oficina de ayuda financiera de la escuela.", "Usa la IA para que te explique términos y para planear preguntas.", "Escribe tu información personal solo en el sitio oficial.", "Conoce la diferencia: las becas no se devuelven, los préstamos sí."],
          words: [["FAFSA", "la Solicitud Gratuita de Ayuda Federal para Estudiantes, en studentaid.gov."], ["Beca", "dinero para estudiar que por lo general no se tiene que devolver."], ["Oficina de ayuda financiera", "la oficina de una escuela que ayuda a los estudiantes a pagarla."]],
          slides: [
            { title: "Empieza con la FAFSA", bullets: ["Solicitud Gratuita de Ayuda Federal para Estudiantes", "Solo en studentaid.gov", "Nunca le pagues a un sitio para que la llene"] },
            { title: "Condenas y ayuda", bullets: ["Las reglas han cambiado en los últimos años", "No des por hecho que no puedes recibir ayuda", "Revisa studentaid.gov o la oficina de ayuda"] },
            { title: "Usa la IA con cuidado", bullets: ["Que te explique términos como beca Pell", "Planea preguntas para la oficina de ayuda", "Tu información personal solo en el sitio oficial"] }
          ],
          sources: [{ name: "Ayuda Federal para Estudiantes: studentaid.gov", url: "https://studentaid.gov/" }],
          tryIt: "Tarea final: escribe tu meta de aprendizaje ligada a un trabajo, revisa un programa real con las cinco preguntas, pídele a la IA un plan de estudio de cuatro semanas, deja que te enseñe y te pregunte sobre el primer tema y pon tus primeras dos sesiones en tu calendario. Si el programa es de universidad o escuela técnica, agrega tres preguntas para su oficina de ayuda financiera.",
          youCanNow: "planear, encontrar, revisar y pagar tu educación continua, y estudiar con la IA como tutor.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa FAFSA?", options: ["Federal Aid for Students and Adults (ayuda federal para estudiantes y adultos)", "Free Application for Federal Student Aid (Solicitud Gratuita de Ayuda Federal para Estudiantes)", "First Approved Funding for School Admission (primer fondo aprobado para entrar a la escuela)", "Financial Account for Student Assistance (cuenta financiera de asistencia estudiantil)"], answer: 1, why: "FAFSA es la Free Application for Federal Student Aid, la Solicitud Gratuita de Ayuda Federal para Estudiantes." },
            { objective: "O6", q: "Un sitio web te cobra por llenar tu FAFSA. ¿Qué harías?", options: ["Pagar para ahorrar tiempo", "Darles tus datos de impuestos", "Pedirle a la IA que la llene con tu número de Seguro Social", "Llenarla gratis en studentaid.gov"], answer: 3, why: "La FAFSA es gratis en studentaid.gov, y los datos privados van solo ahí." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Aprender con la IA",
        questions: [
          { objective: "O4", q: "¿Cuál es un uso honesto de la IA para la escuela?", options: ["Copiar sus respuestas en la tarea", "Que escriba tu ensayo para entregarlo", "Que haga tu examen", "Pedirle que te explique un tema y te haga preguntas"], answer: 3, why: "Explicar y preguntar te ayudan a aprender." },
          { objective: "O4", q: "No entiendes una explicación. ¿Qué le pides?", options: ["\"Explícalo de otra forma.\"", "\"Haz mi tarea.\"", "\"¿Cuál es mi contraseña?\"", "Nada; te rindes"], answer: 0, why: "Una explicación nueva muchas veces ayuda." },
          { objective: "O5", q: "¿Qué plan de estudio funciona mejor?", options: ["Estudiar solo cuando tengas ganas", "Una noche larga antes del examen", "Sesiones cortas y regulares", "Ningún plan"], answer: 2, why: "Las sesiones regulares le ganan a estudiar a última hora." },
          { objective: "O6", q: "¿Dónde llenas la FAFSA?", options: ["En un enlace de un mensaje de texto", "En cualquier sitio que cobre", "Dentro de un chat de IA", "En studentaid.gov, gratis"], answer: 3, why: "La FAFSA es gratis en el sitio oficial." },
          { objective: "O6", q: "Tienes una condena y quieres ayuda financiera. ¿Qué haces?", options: ["Preguntarle a un desconocido", "Dar por hecho que no puedes recibir ayuda", "Revisar las reglas actuales en studentaid.gov o preguntar en la oficina de ayuda financiera", "No estudiar"], answer: 2, why: "Las reglas han cambiado; las fuentes oficiales conocen las reglas actuales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA y la educación continua",
    questions: [
      { objective: "O1", q: "Una buena meta de aprendizaje es:", options: ["Al azar", "Ligada a un trabajo que quieres", "Lo que más se anuncie", "Lo más larga posible"], answer: 1, why: "Las metas de trabajo hacen útil el aprendizaje." },
      { objective: "O1", q: "Un certificado es:", options: ["Una prueba de que terminaste una capacitación en una habilidad", "Un préstamo", "Una oferta de trabajo", "Una placa de auto"], answer: 0, why: "Los certificados muestran habilidades a los empleadores." },
      { objective: "O1", q: "Un examen de equivalencia de preparatoria, como el GED:", options: ["Muestra habilidades de nivel de preparatoria", "Es un examen de manejo", "Es una solicitud de empleo", "Es un préstamo"], answer: 0, why: "Es una alternativa al diploma." },
      { objective: "O1", q: "Para un trabajo con licencia, revisa:", options: ["Solo la IA", "La junta de licencias de tu estado", "Un rumor", "Nada"], answer: 1, why: "Las juntas fijan y explican las reglas." },
      { objective: "O2", q: "Los American Job Centers los financia:", options: ["Una empresa de redes sociales", "Un banco privado", "El Departamento de Trabajo de Estados Unidos", "Un prestamista de día de pago"], answer: 2, why: "Son parte de la red del Departamento de Trabajo." },
      { objective: "O2", q: "Los servicios de los American Job Centers:", options: ["Son solo en línea", "Son iguales en todas partes", "Cuestan mucho", "Cambian, así que llama o ve para confirmar"], answer: 3, why: "Cada centro ofrece servicios distintos." },
      { objective: "O2", q: "Un colegio comunitario es:", options: ["Un banco", "Solo un programa de la prisión", "Una universidad local de menor costo", "Una agencia de empleo"], answer: 2, why: "Los colegios comunitarios dan certificados y títulos." },
      { objective: "O2", q: "Después de que la IA te sugiere un programa, deberías:", options: ["Confirmarlo en el propio sitio web del programa", "Inscribirte de inmediato", "Pagarle a un desconocido", "Ignorarlo"], answer: 0, why: "La IA puede mencionar programas que no existen." },
      { objective: "O3", q: "\"Acreditado\" significa:", options: ["Gratis", "Caro", "Solo en línea", "Aprobado por un grupo oficial que revisa la calidad"], answer: 3, why: "La acreditación revisa la calidad." },
      { objective: "O3", q: "La colocación laboral significa:", options: ["Un escritorio", "Ayuda para encontrar trabajo cuando terminas", "Un examen", "Un préstamo"], answer: 1, why: "Conecta a los graduados con empleos." },
      { objective: "O3", q: "Las respuestas sobre el costo de un programa deben venir de:", options: ["Solo la IA", "El programa, por escrito", "Un rumor", "Un anuncio emergente"], answer: 1, why: "Las respuestas por escrito del programa son confiables." },
      { objective: "O4", q: "Una buena instrucción para tutoría dice:", options: ["Tu número de caso", "Tu número de Seguro Social", "Solo \"ayuda\"", "Qué estás estudiando y tu nivel"], answer: 3, why: "El tema y el nivel ayudan a la IA a enseñar bien." },
      { objective: "O4", q: "La IA se equivocó en una respuesta de matemáticas. ¿Quién tiene la última palabra?", options: ["Tu maestro y tu libro de texto", "La IA", "Un desconocido en internet", "Nadie"], answer: 0, why: "La IA puede equivocarse, incluso en matemáticas." },
      { objective: "O4", q: "Que la IA escriba tu tarea:", options: ["Es obligatorio", "Siempre está permitido", "Va contra las reglas de la escuela y te pierdes el aprendizaje", "Es buena práctica"], answer: 2, why: "La honestidad académica significa hacer tu propio trabajo." },
      { objective: "O5", q: "Estudiar a última hora significa:", options: ["Una biblioteca", "Estudiar poco y con regularidad", "Un grupo de estudio", "Aprender mucho en el último momento"], answer: 3, why: "Estudiar a última hora funciona peor que estudiar con regularidad." },
      { objective: "O5", q: "Para cumplir un plan de estudio, puedes:", options: ["No planear", "Confiar solo en tu memoria", "Poner las sesiones en tu calendario con recordatorios", "Estudiar solo el día del examen"], answer: 2, why: "Los recordatorios te mantienen en camino." },
      { objective: "O5", q: "Si faltas a una sesión de estudio, deberías:", options: ["Dejar el programa", "Solo hacer la siguiente", "Empezar desde cero", "Sentir que no hay esperanza"], answer: 1, why: "Faltar a una sesión no acaba con tu avance." },
      { objective: "O6", q: "FAFSA significa:", options: ["Solicitud Gratuita de Ayuda Federal para Estudiantes", "Solicitud Rápida de Cuentas para Estudiantes", "Cuenta Federal de Ahorros", "Agencia de Servicios de Ayuda Financiera"], answer: 0, why: "Es la solicitud federal de ayuda, gratis." },
      { objective: "O6", q: "Una beca por lo general:", options: ["No se tiene que devolver", "Se tiene que devolver con intereses", "Es un tipo de tarjeta de crédito", "Es una cuota"], answer: 0, why: "Las becas no se devuelven; los préstamos sí." },
      { objective: "O6", q: "La información personal y de impuestos para la FAFSA se debe escribir:", options: ["En la IA", "Solo en studentaid.gov", "En un mensaje a un desconocido", "En cualquier sitio web"], answer: 1, why: "La información privada va solo en el sitio oficial." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      7,
      8,
      10,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Meta ligada a un trabajo",
        objective: "O1",
        notYet: "La meta es vaga o no está ligada a un trabajo.",
        meets: "Una oración que nombra el trabajo y la capacitación que pide.",
        exceeds: "Anota si el trabajo necesita una licencia del estado y dónde revisarlo."
      },
      {
        name: "Programa revisado",
        objective: "O3",
        notYet: "No hay programa, o tiene menos de cinco preguntas respondidas.",
        meets: "Un programa real revisado con las cinco preguntas, respondidas por el propio programa.",
        exceeds: "Las respuestas sobre el costo están por escrito, y se comparó un segundo programa."
      },
      {
        name: "La IA como tutor",
        objective: "O4",
        notYet: "La IA hizo el trabajo, o no hubo preguntas de práctica.",
        meets: "La IA explicó el primer tema, dio un ejemplo y le hizo preguntas a la persona.",
        exceeds: "La persona le pidió a la IA que lo explicara de otra forma cuando se atoró."
      },
      {
        name: "Plan de estudio en el calendario",
        objective: "O5",
        notYet: "No hay plan, o no hay sesiones en el calendario.",
        meets: "Un plan de cuatro semanas con sesiones cortas y regulares, y las dos primeras sesiones en el calendario.",
        exceeds: "Las sesiones tienen recordatorios y caben entre el trabajo y las citas."
      },
      {
        name: "Preguntas sobre ayuda financiera",
        objective: "O6",
        notYet: "Faltan cuando el programa es de colegio o de escuela técnica.",
        meets: "Tres preguntas para la oficina de ayuda financiera.",
        exceeds: "También anota dónde llenar gratis la FAFSA."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se inscriben en una equivalencia de preparatoria, un certificado o un programa de colegio en 90 días (encuesta de seguimiento)",
      "Personas que llenan la FAFSA o solicitan otra ayuda en 90 días",
      "Personas que dicen usar la IA como tutor de estudio cada semana (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con internet y una aplicación de calendario",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Papel y lápiz para la meta y las preguntas sobre el programa",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Ten listos los contactos del American Job Center, la escuela para adultos y el colegio comunitario más cercanos.",
      "Explica que la IA es solo una ayuda para estudiar; usarla para hacer las tareas rompe las reglas de la escuela.",
      "Nunca pidas a los participantes que escriban en la IA números de Seguro Social, datos de impuestos ni detalles de su caso; la FAFSA se llena solo en studentaid.gov y en privado.",
      "Manda las preguntas sobre condenas y ayuda financiera a studentaid.gov o a una oficina de ayuda financiera, porque las reglas cambian.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

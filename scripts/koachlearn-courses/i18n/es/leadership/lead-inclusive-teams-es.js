"use strict";

// Koach Learn course (Spanish translation of leadership/lead-inclusive-teams.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-inclusive-teams-es",
  lang: "es",
  translationOf: "lead-inclusive-teams",
  category: "Leadership Development",
  name: "Cómo liderar equipos inclusivos",
  skills: "Crear sentido de pertenencia, Revisar el sesgo inconsciente, Hábitos justos para contratar y ascender, Dirigir reuniones donde todos son escuchados, Accesibilidad y lenguaje respetuoso, Responder a la exclusión o al acoso",
  outcome: "liderar un equipo donde todos pueden aportar: crear sentido de pertenencia, revisar tus decisiones para detectar sesgos, contratar y ascender con hábitos justos, dirigir reuniones donde se escucha cada voz, hacer el trabajo accesible, usar un lenguaje respetuoso y responder rápido y de forma correcta cuando alguien es excluido o acosado.",
  about: [
    "Este curso es para líderes de equipo, supervisores, entrenadores, coordinadores de voluntarios y dueños de negocios que quieren que cada persona de su equipo reciba un trato justo y pueda dar lo mejor de sí.",
    "Es práctico, no político. Vas a aprender hábitos pequeños de todos los días: cómo notar el sesgo en tus propias decisiones, cómo hacer más justas las contrataciones y los ascensos, cómo dirigir una reunión para que se escuche a las personas más calladas, cómo hacer el trabajo accesible y qué hacer cuando alguien queda fuera o recibe malos tratos.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso no es asesoría legal; para tus obligaciones legales, revisa las fuentes oficiales que se nombran en las lecciones o consulta a un profesional calificado."
  ],
  finalTask: "Escribe un plan de una página con los \"hábitos de inclusión\" de tu equipo: un hábito de pertenencia, una revisión de sesgo que usarás en una decisión real, tres hábitos justos para contratar o ascender, una rutina de reuniones que asegure que se escucha cada voz, una mejora de accesibilidad y los pasos que seguirás si alguien reporta exclusión o acoso, incluyendo a quién le avisarás y dónde están las reglas oficiales.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Líderes de equipo, supervisores, gerentes, dueños de pequeños negocios y líderes de organizaciones sin fines de lucro que quieren que todos en su equipo aporten y sean tratados con justicia.",
    startingPoint: "Quieren ser justos y saben dirigir el trabajo diario de un equipo. Pocos tienen una rutina para revisar el sesgo en sus decisiones, hacer entrevistas estructuradas, hacer accesibles las reuniones y los documentos, o responder a un reporte de acoso.",
    gap: "Sin hábitos sencillos, algunas personas se quedan calladas, la contratación y los ascensos se inclinan hacia quienes se parecen a nosotros, y los líderes manejan mal los reportes de acoso. Los líderes necesitan hábitos prácticos de pertenencia, revisión de sesgos, contratación justa, reuniones inclusivas, accesibilidad y una respuesta clara ante la exclusión o el acoso.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Tiempo: lecciones cortas que caben en una jornada de trabajo",
      "Las leyes cambian según el país y el tamaño de la organización; en Estados Unidos, revisa eeoc.gov y habla con Recursos Humanos o con un abogado laboral sobre tus obligaciones",
      "Privacidad: las solicitudes de adaptaciones y los reportes de acoso se manejan en privado y siguen la política de la organización",
      "Seguridad: si alguien está en peligro inmediato, se llama a los servicios de emergencia"
    ],
    prerequisites: "Ninguno. \"Dirigir equipos\" es un curso complementario útil."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para un equipo que diriges o que conoces", action: "identificar las señales de pertenencia y elegir un hábito que la fortalezca", standard: "nombrando un hábito que puedas repetir cada semana" },
    { id: "O2", condition: "Con una decisión real sobre personas", action: "aplicar una revisión de sesgo: fijar primero los criterios, escribir tus razones y preguntarte si decidirías lo mismo si la persona fuera de otro grupo", standard: "antes de que la decisión sea definitiva" },
    { id: "O3", condition: "Con una vacante o un ascenso", action: "planear hábitos justos para contratar o ascender, como requisitos relacionados con el trabajo y entrevistas estructuradas", standard: "evaluando a cada candidato con las mismas normas relacionadas con el trabajo" },
    { id: "O4", condition: "Para una reunión de equipo habitual", action: "planear una rutina de reuniones que dé a cada persona una oportunidad justa de hablar", standard: "incluyendo al menos dos herramientas, como dar la vuelta, escribir en silencio o dar la palabra primero a quienes están a distancia" },
    { id: "O5", condition: "Para una parte del trabajo de tu equipo", action: "elegir una mejora de accesibilidad y usar un lenguaje respetuoso con los nombres y los pronombres", standard: "manejando las solicitudes en privado" },
    { id: "O6", condition: "Cuando alguien reporta exclusión o acoso, o tú lo ves", action: "enumerar los pasos que seguirás, a quién le avisarás y dónde están las reglas oficiales", standard: "actuando de inmediato y protegiendo a la persona de represalias" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pertenencia y decisiones justas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cómo se ve la pertenencia en un equipo",
          minutes: 5,
          goal: "Nombrar las señales de pertenencia en un equipo y elegir un hábito que la fortalezca.",
          text: [
            "Un equipo tiene sentido de pertenencia cuando cada persona se siente respetada, segura para hablar y valorada por lo que aporta. Las personas que sienten que pertenecen comparten ideas, admiten sus errores a tiempo y se quedan más tiempo. Las que se sienten fuera se callan, y el equipo pierde sus ideas.",
            "La pertenencia se construye con acciones pequeñas y repetidas del líder: aprender a decir bien el nombre de cada persona, compartir la información importante con todos al mismo tiempo, repartir con justicia las tareas que ayudan a crecer y agradecer a quien señala un problema en lugar de castigarlo.",
            "Pregunta, no adivines. Una pregunta corta y en privado, como \"¿Qué te haría más fácil hablar aquí?\", te dice más que cualquier suposición."
          ],
          steps: ["Fíjate en quién habla y quién se queda callado.", "Comparte la información clave con todos al mismo tiempo.", "Reparte las buenas tareas con justicia.", "Agradece a quienes señalan problemas.", "Pregunta en privado qué ayudaría a cada persona a hablar."],
          words: [["Inclusión", "asegurar que cada persona pueda participar de forma plena y justa."], ["Pertenencia", "el sentimiento de ser respetado y valorado como parte de un grupo."], ["Seguridad psicológica", "la idea compartida de que puedes hablar, hacer preguntas o admitir errores sin que te castiguen ni se burlen de ti."]],
          slides: [
            { title: "Señales de pertenencia", bullets: ["Las personas se sienten respetadas y valoradas", "Hablan y admiten sus errores a tiempo", "Se quedan más tiempo"] },
            { title: "Hábitos pequeños que la construyen", bullets: ["Di bien cada nombre", "Comparte las noticias con todos a la vez", "Reparte las buenas tareas con justicia", "Agradece a quien señala problemas"] },
            { title: "Pregunta, no adivines", bullets: ["\"¿Qué te haría más fácil hablar aquí?\""] }
          ],
          tryIt: "Durante una semana, fíjate en quién habla en las reuniones de tu equipo y quién no. Escribe un hábito de pertenencia de esta lección que vas a empezar y una persona a la que le preguntarás en privado qué la ayudaría a hablar.",
          youCanNow: "describir cómo se ve la pertenencia y empezar un hábito que la construye.",
          quickCheck: [
            { objective: "O1", q: "¿Qué pasa cuando las personas de un equipo se sienten excluidas?", options: ["Trabajan más para demostrar lo que valen", "Se quedan calladas y el equipo pierde sus ideas", "No cambia nada", "Siempre renuncian ese mismo día"], answer: 1, why: "Las personas que se sienten excluidas se quedan calladas, y sus ideas se pierden." },
            { objective: "O1", q: "No sabes por qué un miembro del equipo nunca habla en las reuniones. ¿Qué harías?", options: ["Preguntarle en privado qué le haría más fácil hablar", "Suponer que no tiene nada que decir", "Darle la palabra primero delante de todos", "Preguntar por esa persona al resto del equipo"], answer: 0, why: "Pregunta, no adivines; una pregunta breve en privado te dice más." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Cómo detectar el sesgo inconsciente",
          minutes: 5,
          goal: "Usar una revisión sencilla para detectar el sesgo en una decisión real.",
          text: [
            "El sesgo inconsciente son juicios rápidos que hace nuestro cerebro sin que nos demos cuenta, basados en cosas como la edad, el acento, el género, la raza, la discapacidad, el origen o la escuela de una persona. Todos los tenemos. Tenerlos no te hace mala persona, pero actuar según ellos puede llevar a decisiones injustas.",
            "Trampas comunes: preferir a quienes se parecen a nosotros (sesgo de afinidad), dejar que un rasgo bueno o malo pinte todo lo demás (efecto halo) y fijarnos solo en los datos que confirman lo que ya creemos (sesgo de confirmación).",
            "No puedes eliminar el sesgo solo con fuerza de voluntad, así que incluye revisiones en tus decisiones. Define los criterios antes de mirar a las personas. Escribe tus razones. Pregúntate: \"¿Decidiría lo mismo si esta persona fuera de otro grupo?\" Pide una segunda opinión en las decisiones importantes."
          ],
          steps: ["Escribe los criterios antes de mirar a las personas o las opciones.", "Evalúa a cada persona con los mismos criterios.", "Escribe la razón de tu decisión.", "Pregúntate: \"¿Decidiría lo mismo si esta persona fuera de otro grupo?\"", "Pide una segunda opinión en las decisiones grandes."],
          words: [["Sesgo inconsciente", "un juicio rápido sobre las personas que hacemos sin darnos cuenta."], ["Sesgo de afinidad", "preferir a las personas que parecen como nosotros."], ["Efecto halo", "dejar que un solo rasgo nos haga juzgar todo lo demás de una persona como bueno o malo."], ["Criterios", "las normas que usas para tomar una decisión."]],
          slides: [
            { title: "Todos tenemos sesgos", bullets: ["Juicios rápidos que no notamos", "No es una falla moral", "Actuar según ellos lleva a decisiones injustas"] },
            { title: "Trampas comunes", bullets: ["Sesgo de afinidad: preferir a quienes se parecen a nosotros", "Efecto halo: un rasgo pinta todo lo demás", "Sesgo de confirmación: ver solo lo que encaja"] },
            { title: "Incluye revisiones", bullets: ["Primero los criterios, después las personas", "Los mismos criterios para todos", "Escribe tus razones", "\"¿Decidiría lo mismo...?\" y una segunda opinión"] }
          ],
          tryIt: "Piensa en una decisión reciente sobre personas, como quién recibió un turno, un proyecto o la oportunidad de hablar. Escribe los criterios que debiste usar y luego hazte la pregunta \"¿decidiría lo mismo?\". Escribe una cosa que harías diferente.",
          youCanNow: "nombrar sesgos comunes y usar una revisión sencilla para tomar una decisión más justa.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es el sesgo de confirmación?", options: ["Preferir a las personas que se parecen a nosotros", "Juzgar todo por un solo rasgo", "Notar solo los hechos que coinciden con lo que ya creemos", "Confirmar la hora de una reunión"], answer: 2, why: "El sesgo de confirmación filtra los hechos para que coincidan con lo que ya pensamos." },
            { objective: "O2", q: "Estás eligiendo quién dirige un proyecto nuevo. ¿Qué harías primero?", options: ["Elegir a la persona con la que mejor te llevas", "Definir los criterios antes de mirar a las personas", "Dejar que elija la persona que habla más fuerte", "Elegir rápido y explicarlo después"], answer: 1, why: "Definir primero los criterios es una revisión integrada en la decisión." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hábitos justos para contratar y ascender",
          minutes: 6,
          goal: "Armar un proceso de contratación o ascenso que evalúe a todos con las mismas normas relacionadas con el trabajo.",
          text: [
            "Contratar con justicia empieza por el puesto, no por la persona. Escribe lo que el puesto de verdad necesita y quita los requisitos que no importan, como un título universitario para un trabajo que no lo necesita. Publica las vacantes en muchos lugares, no solo entre los amigos del equipo actual.",
            "Usa entrevistas estructuradas: haz a cada candidato las mismas preguntas relacionadas con el trabajo, califica las respuestas con la misma escala y pide que califique más de una persona. No preguntes por cosas que no tienen nada que ver con el trabajo, como planes de tener hijos, religión o edad.",
            "Para los ascensos, da a conocer los criterios y da a todos una oportunidad justa en las tareas que ayudan a crecer y llevan a un ascenso. En Estados Unidos, la EEOC (Comisión para la Igualdad de Oportunidades en el Empleo, la agencia federal que vigila la discriminación laboral) hace cumplir las leyes federales contra la discriminación en el trabajo por raza, color, religión, sexo (la EEOC dice que esto incluye el embarazo, la orientación sexual y la condición de persona transgénero), origen nacional, edad (40 años o más), discapacidad e información genética. Que una ley cubra o no a tu organización puede depender de su tamaño, así que revisa eeoc.gov y habla con Recursos Humanos o con un abogado laboral sobre tus obligaciones."
          ],
          steps: ["Haz la lista de lo que el puesto de verdad necesita; quita lo que no.", "Publica la vacante en muchos lugares.", "Haz a cada candidato las mismas preguntas relacionadas con el trabajo.", "Califica las respuestas con la misma escala y con más de un evaluador.", "Da a conocer los criterios de ascenso y reparte con justicia las tareas que ayudan a crecer.", "Revisa eeoc.gov o pregunta a Recursos Humanos sobre tus obligaciones legales."],
          words: [["Entrevista estructurada", "una entrevista donde cada candidato recibe las mismas preguntas y se califica de la misma manera."], ["EEOC", "la Comisión para la Igualdad de Oportunidades en el Empleo de Estados Unidos, la agencia federal que hace cumplir las leyes contra la discriminación laboral."], ["Característica protegida", "un rasgo, como la raza, el sexo, la edad (40 años o más) o la discapacidad, que según la ley no puede ser la base de decisiones de trabajo."]],
          slides: [
            { title: "Empieza por el puesto", bullets: ["Haz la lista de lo que el puesto de verdad necesita", "Quita los requisitos que no importan", "Publica las vacantes en muchos lugares"] },
            { title: "Entrevistas estructuradas", bullets: ["Las mismas preguntas de trabajo para todos", "La misma escala de calificación", "Más de un evaluador"] },
            { title: "Ascensos justos", bullets: ["Da a conocer los criterios", "Reparte con justicia las tareas que ayudan a crecer"] },
            { title: "Conoce las reglas (EE. UU.)", bullets: ["La EEOC hace cumplir las leyes federales contra la discriminación", "La cobertura puede depender del tamaño del empleador", "Revisa eeoc.gov; pregunta a Recursos Humanos o a un abogado"] }
          ],
          sources: [{ name: "EEOC: Empleadores", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Elige un puesto real o imaginario de tu equipo. Escribe tres requisitos indispensables, quita uno que en realidad no se necesita y escribe tres preguntas de entrevista que le harías a cada candidato, con cómo se ve una buena respuesta.",
          youCanNow: "diseñar un proceso de contratación o ascenso que evalúe a cada candidato con las mismas normas relacionadas con el trabajo y saber dónde revisar la ley.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una entrevista estructurada?", options: ["Cada entrevistador pregunta lo que quiere", "Una charla durante el almuerzo", "Una entrevista sin puntaje", "Cada candidato recibe las mismas preguntas relacionadas con el trabajo, evaluadas con la misma escala"], answer: 3, why: "Las mismas preguntas y la misma escala ayudan a evaluar a todos con justicia." },
            { objective: "O3", q: "Quieres dar a conocer una vacante nueva. ¿Qué harías?", options: ["Preguntar solo a los amigos del equipo actual", "Difundirla ampliamente, no solo entre los amigos del equipo", "Mantenerla en secreto hasta encontrar a alguien", "Publicarla solo en un grupo privado"], answer: 1, why: "Contratar con justicia significa difundir las vacantes ampliamente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Pertenencia y decisiones justas",
        questions: [
          { objective: "O1", q: "¿Cuál es una señal de pertenencia en un equipo?", options: ["Solo habla el líder", "Las personas esconden sus errores", "A las personas nuevas no les llegan las noticias", "Las personas hablan y admiten sus errores a tiempo"], answer: 3, why: "Cuando las personas se sienten seguras, hablan y comparten los problemas a tiempo." },
          { objective: "O2", q: "¿Qué es el sesgo de afinidad?", options: ["Preferir a las personas que parecen como nosotros", "Preferir los escritorios ordenados", "Ser bueno en matemáticas", "Contratar solo a expertos"], answer: 0, why: "El sesgo de afinidad nos acerca a las personas que se parecen a nosotros." },
          { objective: "O2", q: "¿Cuál es la mejor manera de reducir el sesgo en una decisión?", options: ["Confiar en tu instinto", "Definir primero los criterios y evaluar a todos con ellos", "Decidir rápido", "Preguntar solo a tus amigos"], answer: 1, why: "Define criterios y revisiones; la fuerza de voluntad sola no elimina el sesgo." },
          { objective: "O3", q: "En una entrevista estructurada tú:", options: ["Le preguntas a cada persona lo que se te ocurra", "Preguntas por sus planes de familia", "Haces a cada candidato las mismas preguntas relacionadas con el trabajo", "No calificas"], answer: 2, why: "Las mismas preguntas y la misma calificación hacen justas las comparaciones." },
          { objective: "O3", q: "En Estados Unidos, ¿qué agencia hace cumplir las leyes federales contra la discriminación laboral?", options: ["El IRS", "El Servicio Postal", "La FAA", "La EEOC"], answer: 3, why: "La Comisión para la Igualdad de Oportunidades en el Empleo hace cumplir esas leyes." }
        ]
      }
    },
    {
      name: "Capítulo 2: Inclusión en el día a día",
      lessons: [
        {
          objectives: ["O4"],
          title: "Reuniones donde todos son escuchados",
          minutes: 5,
          goal: "Seguir una rutina de reuniones que dé a cada persona una oportunidad justa de hablar.",
          text: [
            "En muchas reuniones, unas pocas personas hablan casi todo el tiempo. No siempre es porque los demás no tengan nada que decir. Puede que sean nuevos, más callados, que hablen en un segundo idioma, que se conecten a distancia o que estén acostumbrados a que los interrumpan.",
            "Hay herramientas sencillas que ayudan: envía la agenda antes para que la gente se prepare, da la palabra por turnos, deja un minuto para escribir en silencio antes de la discusión, pregunta primero a quienes están a distancia e invita a mandar ideas por escrito después de la reunión.",
            "Pon atención a las interrupciones y a las personas cuyas ideas otro repite y se lleva el crédito. Intervén con amabilidad: \"Dejemos que Amina termine\" o \"Eso se basa en lo que dijo Luis antes\". Rota tareas como tomar notas para que no siempre les toquen las tareas de fondo a las mismas personas."
          ],
          steps: ["Envía la agenda antes.", "Empieza con una ronda de turnos o un minuto de escritura en silencio.", "Da la palabra primero a quienes están a distancia.", "Detén las interrupciones con amabilidad y da el crédito de cada idea a quien la dijo.", "Rota a la persona que toma notas.", "Invita a mandar ideas por escrito después de la reunión."],
          words: [["Ronda de turnos", "darle a cada persona su turno para hablar, una por una."], ["Reunión híbrida", "una reunión donde algunas personas están en la sala y otras se conectan en línea."]],
          slides: [
            { title: "Por qué faltan algunas voces", bullets: ["Personas nuevas o más calladas", "Personas que hablan en un segundo idioma", "A distancia, o acostumbradas a que las interrumpan"] },
            { title: "Herramientas que ayudan", bullets: ["Agenda antes", "Ronda de turnos o escritura en silencio", "Primero quienes están a distancia", "Ideas por escrito después"] },
            { title: "Intervén con amabilidad", bullets: ["\"Dejemos que Amina termine.\"", "\"Eso se basa en lo que dijo Luis.\"", "Rota a quien toma notas"] }
          ],
          tryIt: "Planea tu próxima reunión de equipo usando al menos tres herramientas de esta lección. Escríbelas en la agenda. Después de la reunión, anota quién habló de las personas que normalmente no hablan.",
          youCanNow: "dirigir una reunión que dé a cada persona una oportunidad justa de hablar y de recibir crédito.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué enviar la agenda de la reunión con anticipación?", options: ["Para que las personas puedan prepararse", "Para que la reunión pueda ser más larga", "Para que nadie tenga que venir", "Para que el líder no tenga que planear"], answer: 0, why: "Prepararse antes ayuda a aportar a las personas más calladas y a quienes hablan el idioma como segunda lengua." },
            { objective: "O4", q: "Siempre toman notas las mismas dos personas. ¿Qué harías?", options: ["Dejarlo así; lo hacen bien", "Tomar tú las notas cada vez", "Rotar la tarea de tomar notas", "Dejar de tomar notas"], answer: 2, why: "Rotar las tareas evita que siempre les toquen las tareas de fondo a las mismas personas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Accesibilidad y lenguaje respetuoso",
          minutes: 5,
          goal: "Hacer más accesible una parte del trabajo de tu equipo y usar un lenguaje respetuoso.",
          text: [
            "Accesibilidad significa que las personas con discapacidad, y todas las demás, pueden usar tu lugar de trabajo, tus documentos, tus herramientas y tus reuniones. Muchas discapacidades no se ven. Pasos sencillos ayudan a mucha gente: subtítulos en videos y reuniones en línea, letras fáciles de leer y buen contraste, documentos que funcionan con lectores de pantalla, espacios sin escalones y lugares tranquilos para trabajar.",
            "Haz que sea fácil pedir lo que alguien necesita y maneja las solicitudes en privado. En Estados Unidos, la Job Accommodation Network o JAN (Red de Adaptaciones Laborales, askjan.org) da orientación gratis y confidencial sobre adaptaciones en el trabajo, y la página de la EEOC para empleadores explica cuándo negar una adaptación necesaria puede ir contra la ley.",
            "Lenguaje respetuoso significa llamar a las personas como piden que las llamen: di bien su nombre, usa los pronombres que comparten y, si no estás seguro, pregunta con cortesía o simplemente usa su nombre. Evita los chistes sobre la identidad de alguien. Si te equivocas, pide disculpas en pocas palabras, corrígelo y sigue adelante."
          ],
          steps: ["Activa los subtítulos en reuniones en línea y videos.", "Usa letras claras, buen contraste y encabezados en los documentos.", "Explica cómo pedir una adaptación y mantén las solicitudes en privado.", "Usa los nombres y pronombres que comparten las personas.", "Si te equivocas: pide disculpas en pocas palabras, corrígelo y sigue adelante."],
          words: [["Accesibilidad", "diseñar lugares, herramientas e información para que las personas con discapacidad puedan usarlos."], ["Adaptación", "un cambio en un puesto o lugar de trabajo que permite hacer el trabajo a una persona con una discapacidad, una necesidad religiosa o una necesidad relacionada con el embarazo."], ["Lector de pantalla", "un programa que lee en voz alta el texto de la pantalla para personas ciegas o con baja visión."]],
          slides: [
            { title: "La accesibilidad ayuda a todos", bullets: ["Subtítulos en videos y reuniones", "Letras fáciles de leer, contraste y encabezados", "Espacios sin escalones y tranquilos"] },
            { title: "Adaptaciones", bullets: ["Haz que sea fácil pedirlas", "Mantén las solicitudes en privado", "Orientación gratis (EE. UU.): askjan.org"] },
            { title: "Lenguaje respetuoso", bullets: ["Di bien los nombres", "Usa los pronombres que comparten las personas", "Nada de chistes sobre la identidad"] },
            { title: "¿Te equivocaste?", bullets: ["Pide disculpas en pocas palabras", "Corrígelo", "Sigue adelante"] }
          ],
          sources: [{ name: "Job Accommodation Network (JAN), Red de Adaptaciones Laborales", url: "https://askjan.org/" }, { name: "EEOC: Empleadores", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Revisa algo que tu equipo usa seguido, como un formulario de inscripción, un video de capacitación o la reunión semanal. Haz una lista de dos mejoras de accesibilidad y haz una de ellas esta semana.",
          youCanNow: "hacer más accesible el trabajo del equipo, manejar con respeto las solicitudes de adaptación y usar un lenguaje respetuoso.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un paso sencillo de accesibilidad?", options: ["Usar letra muy pequeña para que quepa más en la página", "Poner videos sin sonido", "Hacer documentos que sean solo imágenes", "Activar los subtítulos en los videos y las reuniones en línea"], answer: 3, why: "Los subtítulos ayudan a muchas personas, incluidas las personas con discapacidad auditiva." },
            { objective: "O5", q: "No sabes bien cómo referirte a un colega nuevo. ¿Qué harías?", options: ["Adivinar y esperar que salga bien", "Preguntar con cortesía o usar su nombre", "Evitar hablarle", "Pedirle a otro compañero que lo averigüe"], answer: 1, why: "Cuando no estés seguro, pregunta con cortesía o simplemente usa su nombre." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cómo responder a la exclusión o al acoso",
          minutes: 6,
          goal: "Responder rápido y de forma correcta cuando alguien es excluido, maltratado o acosado.",
          text: [
            "La exclusión puede ser pequeña: dejar siempre a una persona fuera de la invitación a almorzar, ignorar sus ideas o hacer chistes a su costa. El acoso es más grave: es una conducta no deseada basada en cosas como la raza, el color, la religión, el sexo, el origen nacional, la edad, la discapacidad o la información genética. Como líder, no puedes ignorar ninguno de los dos.",
            "Si lo ves, actúa. Interrumpe con calma en el momento (\"Eso no está bien aquí\") y luego habla en privado con la persona afectada y pregúntale qué necesita. Si alguien te cuenta de un acoso, escucha, agradécele, no prometas guardar el secreto si tu política te obliga a reportarlo, escribe lo que te dijo y repórtalo de inmediato a Recursos Humanos o a la persona que nombra tu política.",
            "Protege a las personas de las represalias: nadie debe ser castigado por expresar una preocupación o por ayudar en una investigación. En Estados Unidos, la EEOC explica en eeoc.gov qué es el acoso, qué son las represalias y cómo presentar una queja. Si alguien está en peligro, llama a los servicios de emergencia. Pide consejo a Recursos Humanos o a un abogado laboral sobre tus obligaciones legales."
          ],
          steps: ["Si lo ves, interrumpe con calma en el momento.", "Habla en privado con la persona afectada y pregúntale qué necesita.", "Si alguien reporta acoso: escucha, agradécele y escríbelo.", "No prometas guardar el secreto si tu política dice que debes reportarlo.", "Repórtalo de inmediato a Recursos Humanos o a la persona que nombra tu política.", "Asegúrate de que nadie sea castigado por hablar."],
          words: [["Acoso", "una conducta no deseada basada en una característica protegida, tan grave o frecuente que vuelve hostil el trabajo."], ["Represalia", "castigar a alguien por quejarse de discriminación o por ayudar en una investigación."], ["Testigo", "una persona que ve que a otra le pasa algo malo."]],
          slides: [
            { title: "Exclusión y acoso", bullets: ["Exclusión: dejar fuera, ignorar, burlarse", "Acoso: conducta no deseada basada en un rasgo protegido", "Los líderes no pueden ignorar ninguno de los dos"] },
            { title: "Si lo ves", bullets: ["Interrumpe con calma: \"Eso no está bien aquí\"", "Habla en privado con la persona afectada", "Pregúntale qué necesita"] },
            { title: "Si alguien te lo cuenta", bullets: ["Escucha y agradécele", "Escríbelo", "No prometas un secreto que no puedes guardar", "Repórtalo de inmediato a Recursos Humanos"] },
            { title: "Protege y revisa", bullets: ["Nadie es castigado por hablar", "Reglas de EE. UU.: eeoc.gov", "¿Hay peligro? Llama a los servicios de emergencia"] }
          ],
          sources: [{ name: "EEOC: Empleadores (acoso, represalias, adaptaciones)", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Tarea final: escribe tu plan de una página con tus hábitos de inclusión. Incluye un hábito de pertenencia, una revisión de sesgo, tres hábitos justos para contratar o ascender, una rutina de reuniones, una mejora de accesibilidad y los pasos que seguirás si alguien reporta exclusión o acoso, con a quién le avisarás y dónde revisar las reglas.",
          youCanNow: "responder rápido y de forma correcta a la exclusión o al acoso, proteger a quienes hablan y saber dónde revisar tus obligaciones legales.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es un ejemplo de exclusión pequeña y cotidiana?", options: ["Dejar siempre a una persona fuera de la invitación a almorzar", "Dar fechas límite claras", "Tener reuniones uno a uno", "Compartir las noticias con todos al mismo tiempo"], answer: 0, why: "La exclusión puede ser pequeña pero repetida, y los líderes no deben ignorarla." },
            { objective: "O6", q: "Su jefe deja de pronto fuera de un proyecto a alguien que planteó una queja. ¿De qué es señal esto?", options: ["De una programación normal", "De un ascenso justo", "De una posible represalia, que debes detener", "De una entrevista estructurada"], answer: 2, why: "Nadie debe ser castigado por plantear una queja." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Inclusión en el día a día",
        questions: [
          { objective: "O4", q: "Un miembro del equipo que trabaja a distancia casi nunca habla en las reuniones híbridas. ¿Qué ayuda?", options: ["Dar la palabra primero a quienes están a distancia", "Apagar su cámara", "Dejar de invitarlo", "Solo enviarle notas después"], answer: 0, why: "Dar la palabra primero a quienes están a distancia les da un turno justo." },
          { objective: "O4", q: "Un colega que habla más fuerte repite la idea de otra persona y recibe los elogios. ¿Qué dices?", options: ["Nada", "\"¡Gran idea!\" a la persona que habla más fuerte", "\"Eso se basa en lo que dijo Luis antes.\"", "\"Sigamos adelante.\""], answer: 2, why: "Da el crédito de la idea a quien la dijo primero." },
          { objective: "O5", q: "¿Cuál es un paso de accesibilidad para las reuniones en línea?", options: ["Hablar más rápido", "Activar los subtítulos", "Usar letras muy pequeñas", "Desactivar el chat"], answer: 1, why: "Los subtítulos ayudan a las personas sordas o con problemas de audición, y a muchas otras." },
          { objective: "O5", q: "Usas el pronombre equivocado con un colega. ¿Qué haces?", options: ["Discutir sobre eso", "Hacer un chiste", "Evitar a esa persona", "Pedir disculpas en pocas palabras, corregirlo y seguir adelante"], answer: 3, why: "Una disculpa corta y la corrección son respetuosas sin volver incómodo el momento." },
          { objective: "O6", q: "Alguien de tu equipo reporta acoso y te pide guardar el secreto. Tu política obliga a reportarlo. Debes:", options: ["Explicar que debes reportarlo y luego reportarlo de inmediato a Recursos Humanos", "Prometer guardar el secreto", "Ignorarlo", "Contárselo a todo el equipo"], answer: 0, why: "No prometas un secreto que no puedes guardar; sigue tu política." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo liderar equipos inclusivos",
    questions: [
      { objective: "O1", q: "La seguridad psicológica significa que las personas:", options: ["Nunca están en desacuerdo", "Pueden hablar o admitir errores sin que las castiguen ni se burlen de ellas", "Trabajan solas", "No tienen fechas límite"], answer: 1, why: "La seguridad para hablar es lo central." },
      { objective: "O1", q: "¿Qué hábito construye pertenencia?", options: ["Compartir las noticias primero con algunas personas", "Dar las mejores tareas a los amigos", "Pronunciar mal los nombres", "Agradecer a quienes señalan problemas"], answer: 3, why: "Agradecer a quien señala problemas hace que hablar sea seguro." },
      { objective: "O1", q: "Para saber qué ayudaría a alguien a hablar, debes:", options: ["Preguntarle en privado", "Adivinar", "Preguntar a sus compañeros", "Esperar"], answer: 0, why: "Preguntar es mejor que suponer." },
      { objective: "O2", q: "El sesgo inconsciente es:", options: ["Siempre a propósito", "Un problema solo de las malas personas", "Un juicio rápido que hacemos sin darnos cuenta", "Ilegal tenerlo"], answer: 2, why: "Todos lo tenemos; el problema es actuar según él." },
      { objective: "O2", q: "El efecto halo es cuando:", options: ["Un rasgo pinta cómo juzgamos todo lo demás de alguien", "Nos gustan las oficinas iluminadas", "Trabajamos hasta tarde", "Contratamos desde muchos lugares"], answer: 0, why: "Un rasgo bueno o malo se extiende a toda nuestra opinión." },
      { objective: "O2", q: "Una buena pregunta para revisar el sesgo es:", options: ["\"¿Me cae bien?\"", "\"¿Decidiría lo mismo si esta persona fuera de otro grupo?\"", "\"¿Se parece a mí?\"", "\"¿Qué me dice mi instinto?\""], answer: 1, why: "Prueba si pertenecer a un grupo cambió tu decisión." },
      { objective: "O3", q: "El anuncio de empleo pide un título universitario, pero el trabajo no lo necesita. Contratar con justicia dice:", options: ["Mantenerlo para tener menos candidatos", "Pedir dos títulos más", "Quitar los requisitos que el puesto no necesita de verdad", "Esconder el anuncio"], answer: 2, why: "Los requisitos de más dejan fuera a personas capaces." },
      { objective: "O3", q: "¿Qué pregunta NO debes hacer en una entrevista?", options: ["\"Cuéntame de una vez que resolviste el problema de un cliente.\"", "\"¿Cómo manejarías una entrega atrasada?\"", "\"¿Qué pasos de seguridad sigues?\"", "\"¿Piensas tener hijos?\""], answer: 3, why: "Los planes de familia no tienen relación con el trabajo y pueden llevar a la discriminación." },
      { objective: "O3", q: "¿Dónde pueden los empleadores de EE. UU. revisar sus obligaciones federales contra la discriminación?", options: ["eeoc.gov", "Una publicación en redes sociales", "El sitio web de un competidor", "En ningún lugar"], answer: 0, why: "El sitio oficial de la EEOC explica las obligaciones del empleador." },
      { objective: "O3", q: "Según las reglas de la EEOC, la protección contra la discriminación por edad cubre a las personas que tienen:", options: ["Menos de 25 años", "40 años o más", "Más de 70 años solamente", "Cualquier edad menor de 18"], answer: 1, why: "La EEOC indica 40 años o más." },
      { objective: "O4", q: "Un minuto de escritura en silencio antes de la discusión ayuda porque:", options: ["Termina la reunión más rápido", "Las personas más calladas tienen tiempo de formar sus ideas", "Nadie tiene que hablar", "Reemplaza la agenda"], answer: 1, why: "Da a todos tiempo para pensar antes de que dominen las voces más fuertes." },
      { objective: "O4", q: "¿Por qué rotar la tarea de tomar notas?", options: ["Para que no siempre les toquen las tareas de fondo a las mismas personas", "Para confundir a la gente", "Porque las notas no son necesarias", "Para castigar a quienes llegan tarde"], answer: 0, why: "Rotar las tareas de fondo es más justo." },
      { objective: "O4", q: "Un colega interrumpe a Amina una y otra vez. Tú dices:", options: ["Nada", "\"Amina, sé más rápida.\"", "\"Dejemos que Amina termine.\"", "\"Tomemos un descanso.\""], answer: 2, why: "Intervenir con amabilidad protege su turno." },
      { objective: "O5", q: "¿Qué servicio gratis de EE. UU. da orientación confidencial sobre adaptaciones en el trabajo?", options: ["Un anuncio en un buscador", "La Job Accommodation Network (askjan.org)", "Un sitio de videojuegos", "Una aplicación de compras"], answer: 1, why: "JAN da orientación gratis y confidencial sobre adaptaciones." },
      { objective: "O5", q: "Un empleado pide un cambio para hacer su trabajo debido a una discapacidad. Debes:", options: ["Hablarlo con todo el equipo", "Decir que no de inmediato", "Pedirle que lo demuestre en público", "Manejarlo en privado y seguir tu proceso de adaptaciones"], answer: 3, why: "Las solicitudes deben ser privadas y tomarse en serio." },
      { objective: "O5", q: "Cuando no estás seguro de los pronombres de alguien, una opción respetuosa es:", options: ["Adivinar en voz alta", "Evitar hablar con esa persona", "Preguntar con cortesía o usar su nombre", "Hacer un chiste"], answer: 2, why: "Preguntar con cortesía o usar su nombre es respetuoso." },
      { objective: "O6", q: "Escuchas un \"chiste\" que se burla del acento de un compañero. ¿Cuál es el mejor primer paso?", options: ["Interrumpir con calma: \"Eso no está bien aquí\", y luego ver cómo está el compañero", "Reírte también", "Esperar a ver si vuelve a pasar", "Publicarlo en internet"], answer: 0, why: "Actúa en el momento y apoya a la persona afectada." },
      { objective: "O6", q: "Represalia significa:", options: ["Dar un aumento de sueldo", "Castigar a alguien por quejarse de discriminación o por ayudar en una investigación", "Una fiesta del equipo", "Una sesión de capacitación"], answer: 1, why: "La represalia también está prohibida y hay que prevenirla." },
      { objective: "O6", q: "Después de que alguien te reporta acoso, debes:", options: ["Esperar unas semanas", "Decirle que lo resuelva solo", "Enfrentar a la persona acusada delante del equipo", "Escribir lo que te dijo y reportarlo de inmediato a Recursos Humanos"], answer: 3, why: "Reportar rápido y por escrito sigue las buenas prácticas y la política." },
      { objective: "O6", q: "Alguien está en peligro inmediato en el trabajo. Debes:", options: ["Mandar un correo a Recursos Humanos mañana", "Llamar a los servicios de emergencia", "Hacer una reunión", "No hacer nada"], answer: 1, why: "La seguridad es primero; llama a los servicios de emergencia." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      6,
      10,
      12,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Hábito de pertenencia",
        objective: "O1",
        notYet: "No hay hábito, o es un evento de una sola vez.",
        meets: "Un hábito de pertenencia que el líder puede repetir.",
        exceeds: "Dice cómo le preguntará al equipo si le ayuda."
      },
      {
        name: "Revisión de sesgo",
        objective: "O2",
        notYet: "No hay revisión, o la revisión llega después de la decisión.",
        meets: "Una revisión de sesgo usada en una decisión real: primero los criterios y las razones por escrito.",
        exceeds: "También pide una segunda opinión sobre la decisión."
      },
      {
        name: "Contratación o ascenso justo",
        objective: "O3",
        notYet: "Menos de tres hábitos, o hábitos que no tienen que ver con el trabajo.",
        meets: "Tres hábitos que evalúan a todos con las mismas normas relacionadas con el trabajo.",
        exceeds: "Incluye preguntas de entrevista estructurada que califica más de una persona."
      },
      {
        name: "Reuniones y accesibilidad",
        objective: "O4",
        notYet: "No hay rutina de reuniones o no hay mejora de accesibilidad.",
        meets: "Una rutina de reuniones que da su turno a cada voz, y una mejora de accesibilidad.",
        exceeds: "Dice cómo intervendrá ante interrupciones o ideas tomadas sin dar el crédito."
      },
      {
        name: "Pasos de respuesta",
        objective: "O6",
        notYet: "Faltan pasos, o el plan promete guardar en secreto un reporte en contra de la política.",
        meets: "Pasos ante un reporte de exclusión o acoso, a quién le avisará y dónde están las reglas oficiales.",
        exceeds: "Incluye proteger a la persona de represalias y llamar a los servicios de emergencia si alguien está en peligro."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que usan una entrevista estructurada o una revisión de sesgo en los 90 días siguientes (encuesta de seguimiento)",
      "Miembros del equipo que dicen que pueden hablar en las reuniones",
      "Personas que toman otro curso de liderazgo de Koach Learn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para ver las lecciones",
      "Papel o un documento para el plan de una página de hábitos de inclusión",
      "La política de tu organización sobre acoso y adaptaciones, si tiene una",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Fija primero las reglas del grupo: nada de nombres reales ni historias que identifiquen a personas de los lugares de trabajo de los participantes.",
      "Practiquen en voz alta cómo intervenir con frases como \"Dejemos que Amina termine\".",
      "Pide a los participantes que busquen la política de reporte de su propia organización antes de escribir los pasos de respuesta.",
      "Recuerda a los participantes que están fuera de Estados Unidos que las leyes cambian, y que revisen las reglas de su país y hablen con Recursos Humanos.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

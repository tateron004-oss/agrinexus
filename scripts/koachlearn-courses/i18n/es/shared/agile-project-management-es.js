"use strict";

// Koach Learn course (shared), Spanish translation of "Agile Project Management". Rules: ../../../README.md (Translations).

module.exports = {
  id: "agile-project-management-es",
  lang: "es",
  translationOf: "agile-project-management",
  category: "Veterans (military)",
  name: "Gestión ágil de proyectos",
  skills: "Escribir historias de usuario, Armar un backlog, Planificar un sprint, Llevar un tablero de tareas, Hacer una revisión y una retrospectiva",
  outcome: "llevar un proyecto pequeño al estilo Agile: convertir el trabajo en un backlog de historias de usuario ordenado por prioridad, planificar un sprint de una o dos semanas, seguirlo en un tablero de tareas y cerrarlo con una revisión y una retrospectiva.",
  about: [
    "Agile (ágil) es una forma de llevar proyectos en rondas cortas de trabajo, revisando los resultados a menudo y cambiando el rumbo cuando aprendes algo nuevo. Muchos empleadores de tecnología, gobierno, salud y logística lo usan, y las ofertas de empleo lo piden con frecuencia.",
    "Este curso es para cualquier persona que dirige un equipo o trabaja en uno: veteranos que pasan a puestos civiles de proyectos, trabajadores que buscan un empleo de coordinador o analista, y personas que llevan un proyecto en el trabajo, la iglesia o la comunidad. Hábitos de planificación militar como la orden de misión y la revisión después de la acción encajan muy bien con Agile.",
    "Practicarás con un proyecto real y pequeño tuyo desde la primera lección hasta la última. Cada lección dura unos cinco minutos y termina con una tarea “Pruébalo ahora”. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Elige un proyecto real que tome de dos a seis semanas (por ejemplo, un empujón para tu currículum y búsqueda de empleo, un evento comunitario o un sitio web pequeño). Arma un backlog de al menos ocho historias de usuario en orden de prioridad, planifica un sprint de una semana con un objetivo del sprint, llévalo en un tablero de tareas gratuito y termina con una revisión del sprint por escrito y una retrospectiva que diga una cosa para mantener, una para dejar y una para probar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos y militares en transición que pasan a puestos civiles como coordinador de proyectos, operaciones, TI o gestión de programas. Muchos dirigieron equipos, cumplieron misiones e hicieron revisiones después de la acción en el servicio militar.",
    startingPoint: "Tienen experiencia en planificar, dar instrucciones, cadenas de responsabilidad y revisiones después de la acción. La mayoría no ha usado las palabras de Agile, las historias de usuario ni los tableros de tareas digitales.",
    gap: "Muchos empleadores civiles llevan sus proyectos al estilo Agile y piden experiencia en Scrum o Kanban en sus ofertas de empleo. Las personas necesitan mostrar que saben llevar un proyecto pequeño en sprints con términos civiles, y relacionarlo con las habilidades de liderazgo que ya tienen, para competir por estos puestos.",
    constraints: [
      "Nivel de lectura: palabras sencillas; los términos de Agile se explican la primera vez",
      "Aparatos: un teléfono o una computadora para una herramienta gratuita de tableros, o notas adhesivas en una pared",
      "Tiempo: lecciones de 5 minutos, más un sprint de una semana para la tarea final",
      "Los costos y requisitos de las certificaciones cambian; las personas revisan el sitio de la entidad que certifica",
      "Nada de detalles privados ni clasificados en los proyectos de práctica ni en los prompts de IA"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con la descripción de un proyecto", action: "explicar cómo Agile lleva el trabajo en rondas cortas y cuándo conviene más el modelo en cascada", standard: "con tus propias palabras, con un ejemplo de cada uno" },
    { id: "O2", condition: "Con un equipo pequeño de Scrum", action: "nombrar las tres responsabilidades, los cinco eventos y los tres artefactos de Scrum", standard: "acertando al menos 9 de 11" },
    { id: "O3", condition: "Para un proyecto real de dos a seis semanas", action: "escribir un backlog de al menos ocho historias de usuario con criterios de aceptación, en orden de prioridad", standard: "con cada historia en el formato “Como..., quiero... para...”" },
    { id: "O4", condition: "Con tu backlog y las horas que de verdad tienes", action: "planificar un sprint de una semana con un objetivo del sprint de una oración y tareas de un día o menos", standard: "de modo que el trabajo planificado quepa en el tiempo que tienes" },
    { id: "O5", condition: "Durante tu sprint", action: "llevar el trabajo en un tablero de tareas con un límite WIP y una revisión diaria de 15 minutos", standard: "moviendo cada tarjeta a medida que avanza el trabajo" },
    { id: "O6", condition: "Al final de tu sprint", action: "hacer una revisión del sprint y una retrospectiva de mantener, dejar y probar, y agregar una mejora al siguiente sprint", standard: "con los comentarios anotados en el backlog" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planificar al estilo Agile",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es Agile y en qué se diferencia de un gran plan",
          minutes: 4,
          goal: "Explicar con tus propias palabras cómo Agile lleva un proyecto en rondas cortas.",
          text: [
            "En un proyecto tradicional o “en cascada” (waterfall), planificas todo al principio, luego lo construyes, luego lo pruebas y lo entregas al final. Eso funciona cuando el trabajo es muy conocido, como echar los cimientos de una casa. Falla cuando las necesidades cambian a mitad de camino.",
            "Agile entrega en rondas cortas, a menudo de una a cuatro semanas. Cada ronda produce algo que se puede usar, el equipo se lo muestra a las personas para quienes es, y el plan se ajusta según lo que digan. El Manifiesto Agile (2001) lo dice de forma sencilla: los resultados que funcionan y responder al cambio importan más que seguir un plan fijo.",
            "Scrum y Kanban son las dos formas más comunes de trabajar con Agile. Scrum usa rondas de duración fija llamadas sprints. Kanban usa un tablero y un flujo constante de trabajo, con un límite de cuántas cosas están en curso a la vez. Puedes usar ideas de los dos."
          ],
          words: [["Agile", "una forma de llevar proyectos en rondas cortas, con revisiones y cambios frecuentes."], ["Cascada (waterfall)", "una forma de llevar proyectos en la que cada fase se termina antes de empezar la siguiente."], ["Scrum", "un método Agile que trabaja en rondas de duración fija llamadas sprints."], ["Kanban", "un método Agile que usa un tablero y limita cuánto trabajo está en curso."]],
          slides: [
            { title: "Cascada frente a Agile", bullets: ["Cascada: planificar todo, construir todo, entregar al final", "Agile: entregar algo útil cada pocas semanas", "Agile ajusta el plan a medida que aprendes"] },
            { title: "Por qué los equipos usan Agile", bullets: ["Las necesidades cambian a mitad de camino", "Los problemas aparecen pronto, no al final", "Las personas a las que sirves ven avances a menudo"] },
            { title: "Dos métodos comunes", bullets: ["Scrum: sprints de duración fija, de un mes o menos", "Kanban: un tablero y un límite de trabajo en curso"] }
          ],
          sources: [{ name: "Manifiesto para el Desarrollo Ágil de Software", url: "https://agilemanifesto.org/" }, { name: "La Guía de Scrum (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Elige un proyecto real que quieras terminar en las próximas dos a seis semanas. Escribe una oración que lo describa y otra sobre para quién es.",
          youCanNow: "explicar en qué se diferencia Agile de un gran plan hecho al principio y nombrar Scrum y Kanban.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es Kanban?", options: ["Un plan fijo de cuatro semanas", "Un tipo de historia de usuario", "Un examen de certificación", "Una forma de hacer Agile con un tablero y un límite al trabajo en curso"], answer: 3, why: "Kanban usa un tablero y un flujo constante de trabajo con un límite a cuánto está en curso." },
            { objective: "O1", q: "Tu grupo de veteranos está creando un sitio web nuevo, y los miembros siguen cambiando lo que quieren. ¿Qué enfoque conviene?", options: ["Cascada: planificar todo al principio y entregar al final", "Agile: entregar en rondas cortas y ajustar después de cada una", "Ningún plan", "Esperar a que todos estén de acuerdo en todo"], answer: 1, why: "Agile sirve para trabajos en los que las necesidades cambian, porque cada ronda se muestra y el plan se ajusta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Roles, eventos y artefactos de Scrum",
          minutes: 5,
          goal: "Decir quién hace qué en Scrum y nombrar los cinco eventos que usa un sprint.",
          text: [
            "La Guía de Scrum (versión 2020) nombra tres responsabilidades. El Product Owner (dueño del producto) decide qué importa más y mantiene ordenada la lista de trabajo. Los Developers (desarrolladores) son las personas que hacen el trabajo, de cualquier tipo, no solo software. El Scrum Master ayuda al equipo a seguir Scrum y elimina obstáculos.",
            "Hay cinco eventos. El Sprint es el contenedor, de un mes o menos. La Planificación del Sprint fija el objetivo del sprint y elige el trabajo. El Daily Scrum es una revisión diaria de 15 minutos del avance hacia el objetivo. La Revisión del Sprint muestra los resultados a las personas para quienes es el trabajo. La Retrospectiva del Sprint mira cómo trabajó el equipo y elige mejoras.",
            "Hay tres artefactos: el Product Backlog (todo el trabajo, en orden), el Sprint Backlog (el trabajo elegido para este sprint) y el Incremento (el resultado que se puede usar). En un proyecto pequeño, una sola persona puede tener más de un rol. Está bien, siempre que cada tarea se haga."
          ],
          words: [["Product Owner", "la persona que decide qué trabajo importa más y ordena el backlog."], ["Scrum Master", "la persona que ayuda al equipo a usar bien Scrum y quita obstáculos."], ["Incremento", "el resultado utilizable que produce un sprint."], ["Retrospectiva", "una reunión al final de un sprint sobre cómo trabajó el equipo; parecida a una revisión después de la acción."]],
          slides: [
            { title: "Tres responsabilidades", bullets: ["Product Owner: qué importa más", "Developers: hacen el trabajo", "Scrum Master: ayuda al equipo y quita obstáculos"] },
            { title: "Cinco eventos", bullets: ["Sprint: un mes o menos", "Planificación del Sprint y Daily Scrum (15 minutos)", "Revisión del Sprint y Retrospectiva del Sprint"] },
            { title: "Tres artefactos", bullets: ["Product Backlog: todo el trabajo, en orden", "Sprint Backlog: el trabajo de este sprint", "Incremento: el resultado utilizable"] }
          ],
          sources: [{ name: "La Guía de Scrum (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Para tu proyecto, escribe quién hará de Product Owner, de Scrum Master y de Developers. Si eres solo tú, escribe qué “sombrero” te pondrás en cada evento.",
          youCanNow: "nombrar las tres responsabilidades de Scrum, los cinco eventos y los tres artefactos, y asignarlos en tu proyecto.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es el Incremento en Scrum?", options: ["El resultado utilizable que produce el sprint", "La lista de todo el trabajo", "Una reunión diaria", "El informe del Scrum Master"], answer: 0, why: "El Incremento es el resultado utilizable; el Product Backlog es la lista de todo el trabajo." },
            { objective: "O2", q: "Eres la única persona en un proyecto pequeño. ¿Qué haces con los roles de Scrum?", options: ["Parar, porque Scrum necesita al menos tres personas", "Contratar primero a un Scrum Master", "Asumir más de un rol y asegurarte de que cada trabajo se haga", "Saltarte el trabajo del Product Owner"], answer: 2, why: "En un proyecto pequeño, una persona puede asumir más de un rol, siempre que cada trabajo se haga." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir historias de usuario y armar un backlog",
          minutes: 6,
          goal: "Convertir un proyecto en un backlog de historias de usuario ordenado por prioridad y con metas de cierre claras.",
          text: [
            "Una historia de usuario describe una parte del trabajo desde el punto de vista de la persona a la que ayuda: “Como [tipo de persona], quiero [algo] para [razón]”. Por ejemplo: “Como gerente de contratación, quiero un currículum de una página para ver rápido las habilidades del candidato”.",
            "Cada historia necesita criterios de aceptación: dos o tres comprobaciones que dicen cuándo está terminada. Para la historia del currículum: cabe en una página, muestra tres resultados medibles y no tiene errores de ortografía. Una meta de cierre clara evita discusiones después.",
            "Ordena las historias: lo más valioso y urgente arriba. Un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini puede ayudarte a redactar historias a partir de una descripción del proyecto, pero tú decides el orden y verificas que cada historia sea trabajo real."
          ],
          steps: ["Haz una lista de todo lo que necesita el proyecto, una cosa por línea.", "Reescribe cada cosa como “Como..., quiero... para...”.", "Agrega dos o tres criterios de aceptación a cada una.", "Divide cualquier historia demasiado grande para terminarla en un sprint.", "Pon las historias en orden de prioridad, de arriba abajo."],
          words: [["Historia de usuario", "una descripción corta del trabajo desde el punto de vista de la persona a la que ayuda."], ["Criterios de aceptación", "las comprobaciones que dicen que una historia está terminada."], ["Backlog", "la lista ordenada de todo el trabajo del proyecto."]],
          slides: [
            { title: "El modelo de historia de usuario", bullets: ["Como [tipo de persona]", "quiero [algo]", "para [razón]"] },
            { title: "Criterios de aceptación", bullets: ["Dos o tres comprobaciones que significan “terminado”", "Ejemplo: cabe en una página, tres resultados, sin errores"] },
            { title: "Ordenar el backlog", bullets: ["Lo más valioso y urgente arriba", "Divide las historias demasiado grandes para un sprint", "La IA puede redactar; tú decides el orden"] }
          ],
          tryIt: "Escribe al menos ocho historias de usuario para tu proyecto, cada una con criterios de aceptación, y ordénalas por prioridad. Puedes pedirle a un asistente de IA: “Convierte este proyecto en historias de usuario con criterios de aceptación” y luego editar el resultado.",
          youCanNow: "escribir historias de usuario con criterios de aceptación y ordenarlas en un backlog.",
          quickCheck: [
            { objective: "O3", q: "¿Qué aporta la parte “para...” de una historia de usuario?", options: ["La fecha límite", "La persona que hace el trabajo", "La razón por la que el trabajo importa", "El costo"], answer: 2, why: "“Para...” dice la razón o el beneficio para la persona a la que ayuda la historia." },
            { objective: "O3", q: "Un asistente de IA redacta historias para tu evento comunitario. Una dice “Planificar todo el evento”. ¿Qué haces?", options: ["Dividirla en historias más pequeñas que quepan en un sprint", "Dejarla como la historia principal", "Borrar todas las historias de la IA", "Agregarla a cada sprint"], answer: 0, why: "Una historia demasiado grande para un sprint se debe dividir en partes más pequeñas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planificar al estilo Agile",
        questions: [
          { objective: "O1", q: "¿Cuál es la diferencia principal entre Agile y el modelo en cascada?", options: ["Agile no tiene ningún plan", "Agile entrega en rondas cortas y se ajusta a medida que aprende", "La cascada usa sprints", "Agile solo sirve para software"], answer: 1, why: "Agile trabaja en rondas cortas que entregan algo cada una y luego ajusta el plan." },
          { objective: "O2", q: "Según la Guía de Scrum, ¿cuánto puede durar un sprint?", options: ["Un mes o menos", "Lo que quiera el jefe", "Un año", "Exactamente seis meses"], answer: 0, why: "La Guía de Scrum dice que los sprints duran un mes o menos." },
          { objective: "O2", q: "¿Quién decide qué trabajo importa más y mantiene ordenado el backlog?", options: ["Quien termine primero", "El Scrum Master", "El abogado del cliente", "El Product Owner"], answer: 3, why: "El Product Owner ordena el Product Backlog." },
          { objective: "O3", q: "¿Cuál es una historia de usuario bien escrita?", options: ["“Currículum”", "“Arreglar cosas”", "“Como gerente de contratación, quiero un currículum de una página para ver rápido las habilidades”", "“Hacer todo para el viernes”"], answer: 2, why: "Nombra a la persona, lo que quiere y por qué." },
          { objective: "O3", q: "Una historia es demasiado grande para terminarla en un sprint. ¿Qué haces?", options: ["Hacer que el sprint dure un año", "Borrarla", "Dividirla en historias más pequeñas", "Saltarte los criterios de aceptación"], answer: 2, why: "Las historias grandes se dividen para que cada parte se pueda terminar en un sprint." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llevar un sprint",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planificar un sprint con un objetivo claro",
          minutes: 5,
          goal: "Planificar un sprint de una o dos semanas con un objetivo del sprint y la cantidad justa de trabajo.",
          text: [
            "La Planificación del Sprint responde tres preguntas: por qué este sprint tiene valor (el objetivo del sprint), qué se puede hacer (qué historias) y cómo se hará (las tareas).",
            "El objetivo del sprint es una sola oración, como la intención del comandante: “Para el viernes tengo un currículum terminado y cinco solicitudes adaptadas enviadas”. Si los planes cambian a mitad de camino, el objetivo le dice a todos qué sigue importando.",
            "Toma historias de la parte de arriba del backlog hasta llenar el tiempo del equipo, y deja algo de margen. Los equipos nuevos casi siempre planifican de más. Divide cada historia en tareas de un día o menos."
          ],
          steps: ["Decide cuánto dura el sprint (una o dos semanas está bien para empezar).", "Escribe un objetivo del sprint de una sola oración.", "Toma de la parte de arriba del backlog las historias que sirven al objetivo.", "Divide cada historia en tareas de un día o menos.", "Compara el total con las horas que de verdad tienes, y recorta si hace falta."],
          words: [["Objetivo del sprint", "una oración que dice qué se busca lograr en el sprint."], ["Capacidad", "cuánto tiempo tiene de verdad el equipo durante el sprint."]],
          slides: [
            { title: "La Planificación del Sprint responde", bullets: ["Por qué: el objetivo del sprint", "Qué: qué historias", "Cómo: las tareas"] },
            { title: "Un buen objetivo del sprint", bullets: ["Una oración, como la intención del comandante", "Dice qué sigue importando si cambian los planes"] },
            { title: "No te sobrecargues", bullets: ["Toma de la parte de arriba del backlog", "Tareas de un día o menos", "Deja margen: los equipos nuevos planifican de más"] }
          ],
          tryIt: "Planifica un sprint de una semana para tu proyecto: escribe el objetivo del sprint, elige las historias, divídelas en tareas y compáralas con las horas que de verdad tienes esta semana.",
          youCanNow: "planificar un sprint con un objetivo, historias elegidas y tareas que caben en tu tiempo real.",
          quickCheck: [
            { objective: "O4", q: "¿Cuánto debería durar, idealmente, una tarea en un plan del sprint?", options: ["Un sprint completo", "Un día o menos", "Al menos una semana", "Un mes"], answer: 1, why: "Dividir las historias en tareas de un día o menos hace que el avance sea fácil de seguir." },
            { objective: "O4", q: "A mitad del sprint, los planes cambian. ¿Qué le dice al equipo lo que todavía importa?", options: ["La tarjeta más vieja del tablero", "Quien hable más fuerte", "La retrospectiva del año pasado", "El objetivo del sprint"], answer: 3, why: "Como la intención del comandante, el objetivo del sprint dice lo que todavía importa cuando los planes cambian." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Llevar el trabajo en un tablero de tareas",
          minutes: 5,
          goal: "Armar un tablero de tareas y usar una revisión diaria para que el trabajo avance.",
          text: [
            "Un tablero de tareas muestra el trabajo en columnas: Por hacer, En curso y Hecho. Cada tarea es una tarjeta que se mueve a la derecha a medida que avanza. Puedes usar notas adhesivas en una pared, una hoja de cálculo o una herramienta de tableros gratuita como Trello, Microsoft Planner o GitHub Projects.",
            "Kanban agrega un límite de trabajo en curso (WIP, por sus siglas en inglés): por ejemplo, no más de dos tarjetas En curso por persona. Terminar trabajo vale más que empezar trabajo nuevo.",
            "El Daily Scrum dura 15 minutos. Cada persona cuenta su avance hacia el objetivo del sprint, qué sigue y cualquier cosa que la bloquee. Los obstáculos se resuelven después de la reunión, no durante ella."
          ],
          steps: ["Haz tres columnas: Por hacer, En curso, Hecho.", "Agrega una tarjeta por cada tarea de tu plan del sprint.", "Fija un límite WIP, por ejemplo dos tarjetas En curso.", "Cada día, mueve las tarjetas y haz una revisión de 15 minutos.", "Anota los obstáculos y quién los va a resolver."],
          words: [["Tablero de tareas", "un tablero con columnas que muestran en qué punto está cada tarea."], ["Límite WIP", "un tope de cuántas tareas pueden estar en curso a la vez."], ["Obstáculo", "cualquier cosa que impide que una tarea avance."]],
          slides: [
            { title: "Un tablero de tareas sencillo", bullets: ["Por hacer, En curso, Hecho", "Una tarjeta por tarea", "Notas adhesivas, una hoja de cálculo o un tablero gratuito"] },
            { title: "Limita el trabajo en curso", bullets: ["Por ejemplo: dos tarjetas por persona", "Termina el trabajo antes de empezar algo nuevo"] },
            { title: "El Daily Scrum de 15 minutos", bullets: ["Avance hacia el objetivo del sprint", "Qué sigue", "Obstáculos: se resuelven después de la reunión"] }
          ],
          tryIt: "Arma un tablero de tareas para tu sprint con tres columnas y una tarjeta por tarea. Fija un límite WIP. Durante los próximos tres días, mueve las tarjetas y escribe una revisión diaria de dos líneas.",
          youCanNow: "llevar un sprint en un tablero de tareas con un límite WIP y una revisión diaria corta.",
          quickCheck: [
            { objective: "O5", q: "¿Qué tres cosas comparte cada persona en el Daily Scrum?", options: ["Su sueldo, su cargo y sus horas", "Cada detalle de cada tarea", "Su opinión sobre el Product Owner", "El avance hacia el objetivo, lo que sigue y cualquier obstáculo"], answer: 3, why: "El Daily Scrum es una revisión corta del avance hacia el objetivo del sprint, los próximos pasos y los obstáculos." },
            { objective: "O5", q: "Terminas una tarea. ¿Qué haces con su tarjeta?", options: ["La dejas en En curso", "La mueves a Hecho", "La tiras antes de que alguien la vea", "La regresas a Por hacer"], answer: 1, why: "Las tarjetas avanzan a medida que se hace el trabajo, así que una tarea terminada va a Hecho." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cerrar el sprint: revisión y retrospectiva",
          minutes: 5,
          goal: "Hacer una revisión del sprint y una retrospectiva y convertirlas en un cambio para el siguiente sprint.",
          text: [
            "La Revisión del Sprint muestra el trabajo terminado a las personas para quienes es y les pregunta qué opinan. Muestra solo el trabajo que cumple sus criterios de aceptación. Sus comentarios vuelven al backlog.",
            "La Retrospectiva del Sprint trata de cómo trabajaste, no de lo que construiste. Funciona como una revisión después de la acción: qué se suponía que pasaría, qué pasó, por qué, y qué hacer diferente. Un formato sencillo es Mantener, Dejar, Probar.",
            "Elige una mejora y ponla en el siguiente sprint como una tarea real. Una retrospectiva que no cambia nada es solo una reunión. Las certificaciones Agile, como Certified ScrumMaster de Scrum Alliance o Professional Scrum Master de Scrum.org, pueden venir después; revisa sus sitios para ver los requisitos y costos actuales."
          ],
          steps: ["Haz una lista de lo que se terminó y cumple sus criterios de aceptación.", "Muéstralo a las personas para quienes es y anota sus comentarios.", "Agrega los comentarios al backlog.", "Haz una retrospectiva de Mantener / Dejar / Probar.", "Pon una mejora en el siguiente sprint."],
          words: [["Revisión del Sprint", "una reunión para mostrar el trabajo terminado y recibir comentarios."], ["Revisión después de la acción", "un análisis militar de lo que se planeó, lo que pasó y lo que hay que cambiar."], ["Mantener / Dejar / Probar", "un formato sencillo de retrospectiva."]],
          slides: [
            { title: "Revisión del Sprint", bullets: ["Muestra solo trabajo terminado", "Pregunta a las personas para quienes es", "Los comentarios van al backlog"] },
            { title: "Retrospectiva = revisión después de la acción", bullets: ["Trata de cómo trabajaste", "Mantener, Dejar, Probar"] },
            { title: "Que sirva de algo", bullets: ["Elige una mejora", "Ponla en el siguiente sprint como tarea"] }
          ],
          sources: [{ name: "Scrum Alliance: Certified ScrumMaster", url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" }, { name: "Evaluaciones de Scrum.org", url: "https://www.scrum.org/assessments" }],
          tryIt: "Tarea final: termina tu sprint de una semana. Escribe una revisión corta del sprint (qué está hecho, quién lo vio, qué dijo) y una retrospectiva de Mantener / Dejar / Probar, y luego agrega una mejora al siguiente sprint.",
          youCanNow: "cerrar un sprint con una revisión y una retrospectiva y llevar una mejora al siguiente sprint.",
          quickCheck: [
            { objective: "O6", q: "¿A qué práctica militar se parece más una retrospectiva?", options: ["A una revisión después de la acción", "A una ceremonia de cambio de mando", "A una solicitud de suministros", "A una inspección de uniformes"], answer: 0, why: "Como una revisión después de la acción, pregunta qué se planeó, qué pasó, por qué y qué cambiar." },
            { objective: "O6", q: "Tu equipo anotó cinco cosas para probar en el siguiente sprint. ¿Qué hace que la retrospectiva valga la pena?", options: ["Probar las cinco a la vez", "Anotarlas y olvidarlas", "Elegir una y agregarla al siguiente sprint como una tarea real", "Hacer otra reunión para hablar de ellas"], answer: 2, why: "Una mejora convertida en una tarea real es lo que cambia la forma de trabajar del equipo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llevar un sprint",
        questions: [
          { objective: "O4", q: "¿Qué es el objetivo del sprint?", options: ["Una lista de todas las tareas", "El salario del equipo", "Una oración que dice qué debe lograr el sprint", "Una fecha límite para todo el proyecto"], answer: 2, why: "El objetivo del sprint es una meta de una oración que guía las decisiones durante el sprint." },
          { objective: "O4", q: "Tu equipo planificó 60 horas de trabajo pero tiene 40 horas disponibles. ¿Qué debes hacer?", options: ["Mantener las 60 horas y trabajar los fines de semana", "Recortar historias hasta que el plan quepa en el tiempo real", "Saltarse el Daily Scrum", "Alargar el sprint sin decirle a nadie"], answer: 1, why: "Planifica según la capacidad real; los sprints sobrecargados fracasan." },
          { objective: "O5", q: "¿Qué hace un límite WIP?", options: ["Pone un tope a cuántas tareas pueden estar en curso a la vez", "Limita cuántas personas pueden unirse", "Fija el presupuesto del proyecto", "Quita la columna Hecho"], answer: 0, why: "Un límite WIP empuja al equipo a terminar trabajo antes de empezar más." },
          { objective: "O5", q: "Un compañero menciona un obstáculo en el Daily Scrum. ¿Cuándo se debe resolver?", options: ["Durante la reunión, por una hora", "Nunca", "Al final del proyecto", "Después de la reunión, por las personas que pueden ayudar"], answer: 3, why: "El Daily Scrum se mantiene en 15 minutos; los obstáculos se atienden justo después." },
          { objective: "O6", q: "¿De qué trata la retrospectiva?", options: ["De vender el producto", "De elegir un nuevo Product Owner", "De escribir el presupuesto", "De cómo trabajó el equipo y qué cambiar"], answer: 3, why: "La retrospectiva revisa cómo trabajó el equipo, como una revisión después de la acción." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Gestión ágil de proyectos",
    questions: [
      { objective: "O1", q: "Los proyectos Agile entregan:", options: ["Todo al final", "Solo papeleo", "Algo utilizable en rondas cortas", "Nada hasta gastar el presupuesto"], answer: 2, why: "Agile entrega trabajo utilizable cada pocas semanas." },
      { objective: "O1", q: "¿Qué situación le va mejor a la cascada que a Agile?", options: ["Una app nueva donde no están claras las necesidades de los usuarios", "Un trabajo muy conocido que no va a cambiar, como echar los cimientos", "Una prueba de marketing con resultados desconocidos", "Un proyecto donde los comentarios cambian el plan cada semana"], answer: 1, why: "La cascada funciona cuando el trabajo es conocido y estable." },
      { objective: "O1", q: "Scrum y Kanban son:", options: ["Dos formas comunes de trabajar con Agile", "Dos lenguajes de programación", "Dos exámenes de certificación", "Dos tipos de presupuesto"], answer: 0, why: "Los dos son métodos Agile populares." },
      { objective: "O2", q: "¿Quién ayuda al equipo a usar bien Scrum y quita obstáculos?", options: ["El Product Owner", "El contador", "El cliente", "El Scrum Master"], answer: 3, why: "Ese es el trabajo del Scrum Master." },
      { objective: "O2", q: "En Scrum, “Developers” significa:", options: ["Solo programadores de software", "Los gerentes", "Constructores de bienes raíces", "Las personas que hacen el trabajo, de cualquier tipo"], answer: 3, why: "Los Developers son quienes hacen el trabajo del sprint." },
      { objective: "O2", q: "¿Cuánto dura el Daily Scrum?", options: ["Un día completo", "Dos horas", "15 minutos", "No tiene límite"], answer: 2, why: "La Guía de Scrum fija el Daily Scrum en 15 minutos." },
      { objective: "O2", q: "¿Cuál NO es uno de los tres artefactos de Scrum?", options: ["Product Backlog", "Informe anual", "Incremento", "Sprint Backlog"], answer: 1, why: "Los artefactos son el Product Backlog, el Sprint Backlog y el Incremento." },
      { objective: "O3", q: "Completa el modelo de historia de usuario: “Como ___, quiero ___ ...”", options: ["“...para [razón]”", "“...para el viernes”", "“...gratis”", "“...o si no”"], answer: 0, why: "El modelo termina con la razón: para..." },
      { objective: "O3", q: "Los criterios de aceptación son:", options: ["Las comprobaciones que dicen que una historia está terminada", "Las solicitudes de empleo del equipo", "El precio del proyecto", "Una lista de miembros del equipo"], answer: 0, why: "Definen cuándo una historia cuenta como terminada." },
      { objective: "O3", q: "Un asistente de IA te redacta diez historias de usuario. ¿Cuál es tu trabajo?", options: ["Usarlas sin leerlas", "Pedirle a la IA que lleve el sprint", "Borrar el backlog", "Revisarlas, editarlas y decidir el orden"], answer: 3, why: "La IA puede redactar; tú revisas el trabajo y fijas las prioridades." },
      { objective: "O3", q: "Lo que va arriba en el backlog debe ser:", options: ["Lo más fácil", "Elegido al azar", "Lo más valioso y urgente", "Lo más antiguo"], answer: 2, why: "El backlog se ordena por valor y urgencia." },
      { objective: "O4", q: "¿Qué tres preguntas responde la Planificación del Sprint?", options: ["Quién, dónde, cuándo", "Por qué, qué y cómo", "Costo, precio, ganancia", "Empezar, parar, pausar"], answer: 1, why: "Por qué (el objetivo), qué (las historias), cómo (las tareas)." },
      { objective: "O4", q: "¿A qué idea militar se parece más el objetivo del sprint?", options: ["La inspección de uniformes", "La intención del comandante", "El grado salarial", "La solicitud de permiso"], answer: 1, why: "Los dos dicen qué importa si los planes cambian." },
      { objective: "O4", q: "Lo ideal es que las tareas de un sprint duren:", options: ["Un día o menos", "Un mes cada una", "Un año", "Nada de tiempo"], answer: 0, why: "Las tareas pequeñas muestran avance y revelan problemas pronto." },
      { objective: "O5", q: "¿Qué columnas tiene un tablero de tareas básico?", options: ["Rojo, blanco, azul", "Sí y No", "De lunes a viernes", "Por hacer, En curso, Hecho"], answer: 3, why: "Esas tres columnas muestran en qué punto está cada tarea." },
      { objective: "O5", q: "Tienes cinco tarjetas En curso y un límite WIP de dos. ¿Qué debes hacer?", options: ["Empezar una sexta tarea", "Quitar el límite", "Terminar trabajo antes de empezar algo nuevo", "Pasarlas todas a Hecho"], answer: 2, why: "Un límite WIP significa que terminar vale más que empezar." },
      { objective: "O6", q: "En la Revisión del Sprint debes mostrar:", options: ["Nada; es una reunión de planificación", "Trabajo a medias como si estuviera terminado", "Solo el trabajo que cumple sus criterios de aceptación", "Los horarios personales del equipo"], answer: 2, why: "Solo se muestra trabajo terminado, para que los comentarios sean honestos." },
      { objective: "O6", q: "Los comentarios de la Revisión del Sprint van:", options: ["A la basura", "Al backlog", "Solo a la retrospectiva", "A un abogado"], answer: 1, why: "Los comentarios nuevos se convierten en elementos del backlog." },
      { objective: "O6", q: "Mantener / Dejar / Probar es un formato para:", options: ["La retrospectiva", "El presupuesto", "La contratación", "Las historias de usuario"], answer: 0, why: "Es una forma sencilla de hacer una retrospectiva." },
      { objective: "O6", q: "¿Dónde debes confirmar los requisitos y el costo actuales de una certificación Agile?", options: ["En una publicación cualquiera de un foro", "En un anuncio de redes sociales", "Solo en la respuesta de un chat de IA", "En el sitio oficial de la entidad que certifica, como Scrum Alliance o Scrum.org"], answer: 3, why: "Los requisitos y costos cambian; el sitio oficial es la fuente." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      6,
      7,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Backlog de historias de usuario",
        objective: "O3",
        notYet: "Menos de ocho historias, o puntos escritos como tareas simples sin “para...”.",
        meets: "Al menos ocho historias en el formato, cada una con dos o tres criterios de aceptación, en orden de prioridad.",
        exceeds: "Las historias grandes están divididas y la persona puede explicar por qué la historia principal va primero."
      },
      {
        name: "Plan del sprint",
        objective: "O4",
        notYet: "No hay objetivo del sprint, o el trabajo es más que el tiempo disponible.",
        meets: "Un objetivo del sprint de una oración, historias de la parte de arriba del backlog y tareas de un día o menos que caben en las horas.",
        exceeds: "Deja algo de margen y dice qué se recortaría primero."
      },
      {
        name: "Tablero de tareas",
        objective: "O5",
        notYet: "Se armó el tablero, pero las tarjetas no se movieron durante la semana.",
        meets: "Columnas Por hacer, En curso y Hecho, un límite WIP y tarjetas movidas cada día.",
        exceeds: "Se anotaron los obstáculos con quién los resolvió."
      },
      {
        name: "Revisión y retrospectiva",
        objective: "O6",
        notYet: "Falta la revisión o la retrospectiva.",
        meets: "Una revisión por escrito con los comentarios agregados al backlog, y una lista de qué mantener, qué dejar y qué probar.",
        exceeds: "Una mejora ya es una tarea del siguiente sprint."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que agregan experiencia en Agile o Scrum a su currículum o perfil de LinkedIn en un plazo de 30 días",
      "Personas que se postulan o empiezan un puesto de proyectos, programas u operaciones en un plazo de 90 días",
      "Personas que siguen con una certificación de Agile, como Certified ScrumMaster o Professional Scrum Master"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una herramienta gratuita de tableros de tareas (Trello, Microsoft Planner o GitHub Projects), una hoja de cálculo o notas adhesivas en una pared",
      "Un teléfono o una computadora; un asistente de IA es opcional para redactar historias",
      "Papel y lápiz, o un documento, para el backlog, el plan del sprint, la revisión y la retrospectiva",
      "Unos 60 minutos para las lecciones y las comprobaciones, más una semana para hacer el sprint"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; muestra un tablero de ejemplo en una pantalla compartida.",
      "Relaciona cada idea con la experiencia militar: el objetivo del sprint con la intención del comandante, la retrospectiva con la revisión después de la acción.",
      "Pide a cada persona que elija un proyecto real, personal o comunitario, para que el sprint sea trabajo de verdad.",
      "Hagan una revisión corta en grupo durante la semana del sprint para que las personas practiquen el Daily Scrum en voz alta.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

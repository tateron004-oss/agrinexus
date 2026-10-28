"use strict";

// Koach Learn course (shared, bonus), Spanish translation of "AI Project Management". Rules: ../../../README.md (Translations).
// Uses AI to run the classic project steps (charter, work breakdown, schedule, roles, risks, status, closeout). Agile methods are in agile-project-management.

module.exports = {
  id: "ai-project-management-es",
  lang: "es",
  translationOf: "ai-project-management",
  category: "Veterans (military)",
  name: "Gestión de proyectos con IA",
  skills: "Escribir un acta de proyecto con IA, Dividir el trabajo en una EDT, Armar un cronograma con hitos, Asignar roles con una matriz RACI, Llevar un registro de riesgos, Escribir informes de estado y lecciones aprendidas",
  outcome: "usar un asistente de IA para planificar y llevar un proyecto pequeño de principio a fin: un acta de una página, una división del trabajo, un cronograma con hitos, una matriz RACI, un registro de riesgos, informes de estado semanales y un cierre con lecciones aprendidas, revisando tú mismo cada borrador de la IA.",
  about: [
    "Los gerentes de proyecto planifican el trabajo, organizan a las personas y mantienen a todos informados hasta que el trabajo se termina. Los asistentes de IA como ChatGPT, Microsoft Copilot y Google Gemini pueden redactar los documentos en minutos, para que dediques tu tiempo a las decisiones y a las personas.",
    "Este curso es para veteranos que pasan a puestos civiles de proyectos (muchos ya dirigieron misiones, logística y equipos), participantes de programas de capacitación laboral que buscan empleos de coordinador o asistente de proyectos, y cualquier persona que dirige un proyecto en el trabajo o en la comunidad.",
    "Planificarás un proyecto real o de práctica desde el acta hasta el cierre. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Planifica con ayuda de la IA un proyecto real o de práctica de cuatro a doce semanas (por ejemplo, una feria de empleo comunitaria, una mudanza de oficina o el lanzamiento de un sitio web): un acta de una página, una estructura de desglose del trabajo, un cronograma con al menos cuatro hitos, una matriz RACI, un registro de riesgos con cinco riesgos, un informe de estado semanal y una plantilla de lecciones aprendidas. Marca cada lugar donde corregiste a la IA.",
  chapters: [
    {
      name: "Capítulo 1: Planificar el proyecto",
      lessons: [
        {
          title: "Escribir un acta de proyecto con IA",
          minutes: 5,
          goal: "Escribir un acta de una página que defina la meta, el alcance y el éxito del proyecto.",
          text: [
            "El acta del proyecto es su acta de nacimiento. Dice por qué existe el proyecto, qué va a entregar, qué entra y qué queda fuera del alcance, quién es el patrocinador, el presupuesto y la fecha límite aproximados, y cómo sabrás que tuvo éxito. Es como una orden de misión: propósito, estado final, restricciones.",
            "Dale los datos a la IA y deja que haga el borrador: “Escribe un acta de proyecto de una página. Proyecto: feria de empleo para veteranos en el centro comunitario el 15 de marzo. Meta: 30 empleadores, 200 asistentes. Presupuesto: $3,000. Patrocinador: el director del centro. Fuera del alcance: comida aparte del café”.",
            "Luego corrígela. La IA puede inventar números, interesados o metas. Cada dato debe ser tuyo. Consigue que el patrocinador apruebe el acta antes de empezar el trabajo; eso evita discusiones después sobre lo que se suponía que debía hacer el proyecto."
          ],
          steps: ["Escribe el propósito, la meta, la fecha límite, el presupuesto y el patrocinador.", "Haz la lista de lo que entra y lo que queda fuera del alcance.", "Pide a la IA el borrador de un acta de una página.", "Corrige todo lo que la IA haya inventado.", "Consigue la aprobación del patrocinador."],
          words: [["Acta del proyecto", "un documento corto que autoriza un proyecto y dice su meta, su alcance y sus límites."], ["Alcance", "el trabajo que el proyecto hará y no hará."], ["Patrocinador", "la persona que apoya y aprueba el proyecto."], ["Interesado", "cualquier persona afectada por el proyecto o que participa en él."]],
          slides: [
            { title: "El acta es la orden de misión", bullets: ["Propósito y meta", "Alcance: qué entra y qué no", "Patrocinador, presupuesto, fecha límite, éxito"] },
            { title: "La IA redacta con tus datos", bullets: ["Dale los números reales", "Pide una sola página"] },
            { title: "Corrige y aprueba", bullets: ["Quita los datos inventados", "El patrocinador aprueba antes de empezar"] }
          ],
          tryIt: "Elige un proyecto real o de práctica. Escribe sus datos clave, pide a la IA el borrador de un acta de una página y marca todo lo que corregiste.",
          youCanNow: "escribir un acta de proyecto de una página con ayuda de la IA."
        },
        {
          title: "Dividir el trabajo y programarlo",
          minutes: 6,
          goal: "Convertir el acta en una estructura de desglose del trabajo y en un cronograma con hitos.",
          text: [
            "Una estructura de desglose del trabajo (EDT, o WBS en inglés) divide todo el proyecto en partes más pequeñas hasta que cada parte es una tarea que una persona puede hacer en pocos días. Para una feria de empleo: lugar, empleadores, publicidad, voluntarios, logística del día y seguimiento, cada una dividida en tareas.",
            "Pide a la IA: “A partir de esta acta, crea una EDT con fases y tareas. Luego calcula la duración de cada tarea y haz una lista de qué tareas dependen de otras”. Las dependencias importan: no puedes imprimir los volantes hasta que estén confirmados el lugar y la fecha.",
            "Conviértela en un cronograma en una hoja de cálculo o una herramienta gratuita, trabajando hacia atrás desde la fecha límite. Marca los hitos, los grandes puntos de control como “lugar reservado” o “20 empleadores confirmados”. Compara los tiempos que calcula la IA con tu propia experiencia; suele ser demasiado optimista."
          ],
          steps: ["Pide a la IA una EDT con fases y tareas.", "Divide cualquier tarea de más de unos pocos días.", "Agrega duraciones y dependencias.", "Arma un cronograma hacia atrás desde la fecha límite.", "Marca al menos cuatro hitos."],
          words: [["EDT", "estructura de desglose del trabajo: todo el proyecto dividido en tareas más pequeñas."], ["Dependencia", "una tarea que no puede empezar hasta que termine otra."], ["Hito", "un punto de control clave de un proyecto."]],
          slides: [
            { title: "Estructura de desglose del trabajo", bullets: ["Del proyecto completo a fases y tareas", "Cada tarea: una persona, pocos días"] },
            { title: "Duraciones y dependencias", bullets: ["Cuánto dura cada tarea", "Qué debe terminar primero"] },
            { title: "Cronograma e hitos", bullets: ["Trabaja hacia atrás desde la fecha límite", "Marca los puntos de control clave", "Los cálculos de la IA son optimistas"] }
          ],
          tryIt: "Usa la IA para crear una EDT de tu proyecto y luego arma un cronograma sencillo en una hoja de cálculo con duraciones, dependencias y al menos cuatro hitos.",
          youCanNow: "dividir un proyecto en tareas y programarlas con hitos."
        },
        {
          title: "Asignar roles con una matriz RACI",
          minutes: 5,
          goal: "Armar una matriz RACI para que todos sepan quién hace, quién decide y quién está informado.",
          text: [
            "La confusión sobre quién hace qué hunde los proyectos. Una matriz RACI pone las tareas en un costado y a las personas arriba, y marca cada casilla: R de Responsable (hace el trabajo), A de Aprobador (es dueño del resultado y lo aprueba; solo uno por tarea; en inglés, Accountable), C de Consultado (da su opinión) e I de Informado (se le mantiene al día).",
            "Pide a la IA: “Haz una matriz RACI para estas tareas y roles: [tareas], [personas o roles]”. Luego revisa: ¿cada tarea tiene exactamente una A? ¿Alguien está sobrecargado de R? ¿Hay alguien Consultado en todo, que hace todo más lento?",
            "Comparte la matriz RACI con el equipo y el patrocinador. Cuando surjan preguntas, como quién aprueba el volante, señala la matriz."
          ],
          steps: ["Haz la lista de las tareas principales y de las personas o roles.", "Pide a la IA un borrador de la matriz RACI.", "Revisa que cada tarea tenga exactamente una A.", "Reparte las R para que nadie quede sobrecargado.", "Compártela con el equipo y el patrocinador."],
          words: [["Matriz RACI", "una tabla que muestra quién es Responsable, Aprobador, Consultado e Informado en cada tarea."], ["Aprobador", "la única persona que es dueña del resultado y lo aprueba."]],
          slides: [
            { title: "RACI", bullets: ["R: Responsable, hace el trabajo", "A: Aprobador, es el dueño; solo uno", "C: Consultado; I: Informado"] },
            { title: "Revisa la matriz", bullets: ["Exactamente una A por tarea", "Nadie sobrecargado de R", "No todos consultados en todo"] },
            { title: "Úsala", bullets: ["Compártela con el equipo y el patrocinador", "Señálala cuando surjan preguntas"] }
          ],
          tryIt: "Pide a la IA un borrador de la matriz RACI para las tareas principales de tu proyecto. Corrígela para que cada tarea tenga exactamente una A y el trabajo esté repartido.",
          youCanNow: "armar y revisar una matriz RACI que deje claros los roles."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planificar el proyecto",
        questions: [
          { q: "¿Qué define el acta de un proyecto?", options: ["Solo el pedido de almuerzo del equipo", "La declaración de impuestos de la empresa", "El propósito, el alcance, el patrocinador, el presupuesto, la fecha límite y el éxito del proyecto", "Cada tarea en detalle"], answer: 2, why: "El acta pone las bases del proyecto." },
          { q: "La IA agrega a tu acta una meta de “100 empleadores”, pero tú dijiste 30. ¿Qué haces?", options: ["Corregirla con tu meta real", "Dejarla", "Sacar el promedio", "Borrar el acta"], answer: 0, why: "Cada dato del acta debe ser tuyo." },
          { q: "Una dependencia es:", options: ["Un miembro del equipo", "Una línea del presupuesto", "Un hito", "Una tarea que no puede empezar hasta que termine otra"], answer: 3, why: "Las dependencias fijan el orden del trabajo." },
          { q: "En una matriz RACI, ¿cuántas personas deben ser Aprobador (A) de una tarea?", options: ["Todos", "Exactamente una", "Ninguna", "Al menos cinco"], answer: 1, why: "Un solo dueño evita la confusión." },
          { q: "La IA calcula que reservar un lugar toma una hora. Según este curso, debes:", options: ["Aceptarlo", "Compararlo con tu experiencia; los cálculos de la IA son optimistas", "Ponerlo en cero", "No hacer cronograma"], answer: 1, why: "Usa tu propio criterio con las duraciones." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llevar y cerrar el proyecto",
      lessons: [
        {
          title: "Llevar un registro de riesgos",
          minutes: 5,
          goal: "Identificar y calificar los riesgos del proyecto y planificar respuestas con ayuda de la IA.",
          text: [
            "Un riesgo es algo que podría pasar y afectaría al proyecto. Un registro de riesgos muestra cada riesgo, qué tan probable es, qué tan grave sería el impacto, el plan de respuesta y un responsable que lo vigila.",
            "Pide a la IA: “Haz una lista de diez riesgos para este proyecto [pega el acta], califica la probabilidad y el impacto como bajo, medio o alto, y sugiere una respuesta para cada uno”. Respuestas: evitarlo, reducirlo, transferirlo (por ejemplo, con un seguro o un contrato) o aceptarlo con un plan de respaldo.",
            "Quédate solo con los riesgos que son reales para tu proyecto, agrega los que la IA no vio y revisa el registro cada semana. Los planificadores militares lo llaman pensar en ramas y secuelas; en la vida civil se llama gestión de riesgos."
          ],
          steps: ["Pide a la IA ideas de riesgos a partir de tu acta.", "Califica la probabilidad y el impacto.", "Elige una respuesta: evitar, reducir, transferir o aceptar.", "Dale un responsable a cada riesgo.", "Revisa el registro cada semana."],
          words: [["Riesgo", "algo que podría pasar y afectar al proyecto."], ["Registro de riesgos", "una lista de riesgos con calificaciones, respuestas y responsables."], ["Mitigación", "pasos para reducir la probabilidad o el impacto de un riesgo."]],
          slides: [
            { title: "Columnas del registro de riesgos", bullets: ["Riesgo, probabilidad, impacto", "Respuesta y responsable"] },
            { title: "Cuatro respuestas", bullets: ["Evitar o reducir", "Transferir (seguro, contrato)", "Aceptar con un plan de respaldo"] },
            { title: "Que sea real", bullets: ["Quita los riesgos que no aplican", "Agrega lo que la IA no vio", "Revísalo cada semana"] }
          ],
          tryIt: "Pide a la IA ideas de riesgos para tu proyecto. Quédate con los cinco más reales, califícalos, elige respuestas y asigna responsables.",
          youCanNow: "armar y mantener un registro de riesgos con ayuda de la IA."
        },
        {
          title: "Escribir informes de estado que la gente lea",
          minutes: 5,
          goal: "Escribir un informe de estado semanal corto con un estado claro en rojo, amarillo o verde.",
          text: [
            "Un informe de estado mantiene informados al patrocinador y al equipo. Mantenlo en media página: estado general (verde en tiempo, amarillo en riesgo, rojo fuera de rumbo), lo que se hizo esta semana, lo que sigue, riesgos y problemas, y decisiones que necesitas del patrocinador.",
            "Pega en la IA las actualizaciones del cronograma y tus notas, y pide: “Escribe un informe de estado semanal de media página con el color del estado general, logros, siguientes pasos, riesgos y problemas, y decisiones necesarias. Sé directo”.",
            "Sé honesto con el amarillo y el rojo. Las malas noticias a tiempo son un regalo: le dan tiempo al patrocinador para ayudar. Esconder problemas hasta la fecha límite es la forma más rápida de perder la confianza. Revisa cada fecha y cada número que escribió la IA."
          ],
          steps: ["Actualiza el cronograma y el registro de riesgos.", "Pega notas y actualizaciones en la IA.", "Pide un informe de media página con un color de estado.", "Revisa cada fecha y cada número.", "Envíalo el mismo día cada semana."],
          words: [["Informe de estado", "una actualización regular sobre el avance, los riesgos y las necesidades de un proyecto."], ["Problema", "algo que está pasando ahora, a diferencia de un riesgo, que podría pasar."], ["Estado RAG", "rojo, ámbar (amarillo) o verde: una señal rápida de la salud del proyecto."]],
          slides: [
            { title: "Media página", bullets: ["Color del estado: verde, amarillo, rojo", "Lo hecho esta semana y lo que sigue", "Riesgos, problemas, decisiones necesarias"] },
            { title: "La IA redacta con tus notas", bullets: ["Pega las actualizaciones del cronograma", "Pide un lenguaje directo", "Revisa fechas y números"] },
            { title: "Las malas noticias, a tiempo", bullets: ["Le dan tiempo al patrocinador para ayudar", "Esconder problemas hace perder la confianza"] }
          ],
          tryIt: "Escribe con ayuda de la IA un informe de estado semanal de tu proyecto (de una semana 3 real o imaginada). Incluye un color de estado honesto y al menos una decisión necesaria.",
          youCanNow: "escribir con ayuda de la IA un informe de estado semanal claro y honesto."
        },
        {
          title: "Cerrar el proyecto y recoger las lecciones aprendidas",
          minutes: 5,
          goal: "Cerrar bien un proyecto y hacer una revisión de lecciones aprendidas.",
          text: [
            "Muchos proyectos simplemente se apagan. Un buen cierre confirma que se cumplieron las metas (comparando con el acta), entrega lo que continúa, paga las últimas facturas, agradece al equipo y guarda los archivos donde otros los puedan encontrar.",
            "Una revisión de lecciones aprendidas, como una revisión después de la acción, pregunta: ¿qué planeamos?, ¿qué pasó?, ¿por qué?, ¿y qué deberíamos hacer distinto la próxima vez? Recoge la opinión de todos, incluido lo que salió bien.",
            "La IA puede ordenar las opiniones: “Agrupa estos comentarios de lecciones aprendidas por temas y escribe tres recomendaciones para proyectos futuros”. Que sea sin culpas, enfocada en el proceso, y revisa que el resumen sea justo. Si quieres crecer en la gestión de proyectos, el Project Management Institute (PMI) ofrece credenciales como CAPM, PMP y PMI-CPMAI, enfocada en IA; revisa pmi.org para ver los requisitos y costos actuales."
          ],
          steps: ["Compara los resultados con las metas del acta.", "Entrega el trabajo que continúa y paga las últimas facturas.", "Haz una revisión de lecciones aprendidas sin culpas.", "Usa la IA para agrupar los comentarios y redactar recomendaciones.", "Guarda todos los archivos y agradece al equipo."],
          words: [["Cierre", "el final formal de un proyecto."], ["Lecciones aprendidas", "lo que aprendió un equipo y que debería cambiar cómo se llevan los proyectos futuros."], ["Revisión después de la acción", "una mirada ordenada hacia atrás: qué se planeó, qué pasó, por qué y qué cambiar."]],
          slides: [
            { title: "Ciérralo bien", bullets: ["Compara los resultados con el acta", "Entrega, paga las facturas, guarda los archivos", "Agradece al equipo"] },
            { title: "Lecciones aprendidas", bullets: ["Qué se planeó, qué pasó, por qué, qué cambiar", "También lo que salió bien", "Sin culpas"] },
            { title: "Haz crecer tu carrera", bullets: ["Credenciales del PMI: CAPM, PMP, PMI-CPMAI", "Revisa pmi.org para ver reglas y costos actuales"] }
          ],
          sources: [{ name: "Project Management Institute: certificaciones", url: "https://www.pmi.org/certifications" }],
          tryIt: "Tarea final: termina tu plan de proyecto con el acta, la EDT, el cronograma con hitos, la matriz RACI, el registro de riesgos y un informe de estado, y luego escribe una plantilla de lecciones aprendidas con las cuatro preguntas de la revisión. Marca cada lugar donde corregiste a la IA.",
          youCanNow: "planificar, llevar y cerrar un proyecto usando la IA para redactar los documentos mientras tú tomas las decisiones."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llevar y cerrar el proyecto",
        questions: [
          { q: "¿Cuál es la diferencia entre un riesgo y un problema?", options: ["No hay diferencia", "Los problemas siempre son buenos", "Los riesgos solo tienen que ver con el dinero", "Un riesgo podría pasar; un problema está pasando ahora"], answer: 3, why: "Los riesgos son posibles; los problemas son actuales." },
          { q: "Comprar un seguro contra una posible pérdida es ¿qué respuesta al riesgo?", options: ["Transferir", "Evitar", "Aceptar", "Ignorar"], answer: 0, why: "El seguro pasa el impacto a otro." },
          { q: "Es probable que tu proyecto no llegue a un hito. ¿Qué estado debe mostrar tu informe?", options: ["Verde para que nadie se preocupe", "Ningún estado", "Amarillo o rojo, con honestidad", "Morado"], answer: 2, why: "Las malas noticias a tiempo dejan que el patrocinador ayude." },
          { q: "Una revisión de lecciones aprendidas debe ser:", options: ["Una búsqueda de a quién despedir", "Algo que se salta", "Solo sobre lo que salió mal", "Sin culpas y enfocada en el proceso"], answer: 3, why: "Las revisiones sin culpas reciben opiniones honestas." },
          { q: "¿Dónde debes revisar los requisitos y costos actuales de las certificaciones del PMI?", options: ["En un foro cualquiera", "En lo que adivine la IA", "En pmi.org", "En un volante"], answer: 2, why: "Los requisitos oficiales cambian; revisa la fuente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Gestión de proyectos con IA",
    questions: [
      { q: "El trabajo principal de un gerente de proyecto es:", options: ["Hacer solo todas las tareas", "Planificar el trabajo, organizar a las personas y mantener a todos informados", "Solo aprobar presupuestos", "Programar código"], answer: 1, why: "Los gerentes de proyecto planifican, coordinan y comunican." },
      { q: "En este curso, el papel de la IA es:", options: ["Redactar documentos mientras tú tomas las decisiones", "Tomar todas las decisiones", "Reemplazar al patrocinador", "Aprobar el presupuesto"], answer: 0, why: "La IA redacta; el gerente de proyecto decide." },
      { q: "¿A qué documento militar se parece más un acta?", options: ["Una solicitud de permiso", "Una lista de revisión del uniforme", "Una orden de misión", "Un recibo de pago"], answer: 2, why: "Los dos dan el propósito, el estado final y las restricciones." },
      { q: "Que “comida aparte del café” esté fuera del alcance significa que:", options: ["El proyecto no la va a dar", "Es la meta principal", "Es un riesgo", "Es un hito"], answer: 0, why: "El trabajo fuera del alcance no es parte del proyecto." },
      { q: "¿Quién debe aprobar el acta antes de empezar el trabajo?", options: ["Nadie", "Solo la IA", "Un empleado cualquiera", "El patrocinador"], answer: 3, why: "La aprobación del patrocinador evita disputas después." },
      { q: "Una EDT divide el proyecto en:", options: ["Solo líneas del presupuesto", "Tareas más pequeñas que una persona puede hacer en pocos días", "Fotos del equipo", "Salas de la oficina"], answer: 1, why: "Las tareas pequeñas son más fáciles de planificar y seguir." },
      { q: "No puedes imprimir los volantes hasta que esté confirmado el lugar. Esto es una:", options: ["Hito", "Dependencia", "Patrocinador", "Respuesta al riesgo"], answer: 1, why: "Una tarea depende de que termine otra." },
      { q: "“20 empleadores confirmados” es un buen ejemplo de:", options: ["Una duración de tarea", "Un rol RACI", "Un color de estado", "Un hito"], answer: 3, why: "Los hitos son puntos de control clave." },
      { q: "A menudo, la mejor forma de armar un cronograma es:", options: ["Trabajar hacia atrás desde la fecha límite", "Adivinar", "Empezar solo con la última tarea", "No poner fechas"], answer: 0, why: "Trabajar hacia atrás muestra qué debe empezar y cuándo." },
      { q: "En RACI, “R” significa:", options: ["Retirado", "Solo revisor", "Responsable: hace el trabajo", "Rechazado"], answer: 2, why: "La R es la persona que hace el trabajo." },
      { q: "En RACI, “I” significa:", options: ["Encargado", "Inspector", "Ignorado", "Informado: se le mantiene al día"], answer: 3, why: "A las personas informadas les llegan las actualizaciones." },
      { q: "Una matriz RACI muestra a una persona con R en 15 tareas. Debes:", options: ["Darle más R", "Quitar la matriz", "Repartir mejor el trabajo", "Ignorarlo"], answer: 2, why: "Las personas sobrecargadas hacen más lento el proyecto." },
      { q: "Un registro de riesgos incluye:", options: ["Solo el presupuesto", "Riesgo, probabilidad, impacto, respuesta y responsable", "Los cumpleaños del equipo", "Reseñas de clientes"], answer: 1, why: "Estas columnas hacen manejables los riesgos." },
      { q: "Cambiar el plan para que un riesgo no pueda pasar es ¿qué respuesta?", options: ["Evitar", "Transferir", "Aceptar", "Informar"], answer: 0, why: "Evitar elimina el riesgo." },
      { q: "¿Cada cuánto se debe revisar el registro de riesgos?", options: ["Nunca", "Una vez al final", "Cada semana", "Cada diez años"], answer: 2, why: "Los riesgos cambian a medida que avanza el proyecto." },
      { q: "Un informe de estado debe ser de más o menos:", options: ["Media página", "Cincuenta páginas", "Una palabra", "Lo más largo posible"], answer: 0, why: "Los informes cortos se leen." },
      { q: "El estado verde significa:", options: ["Fuera de rumbo", "Cancelado", "Desconocido", "En tiempo"], answer: 3, why: "El verde indica que el proyecto va en tiempo." },
      { q: "Antes de enviar un informe de estado escrito por la IA, debes:", options: ["Agregar más colores", "Revisar cada fecha y cada número", "Quitar la sección de decisiones", "Enviarlo sin leerlo"], answer: 1, why: "La IA puede equivocarse en los detalles." },
      { q: "Una revisión de lecciones aprendidas pregunta:", options: ["A quién culpar", "Qué planeamos, qué pasó, por qué y qué cambiar", "Cómo esconder los errores", "Nada"], answer: 1, why: "Se parece a la revisión después de la acción." },
      { q: "Un buen cierre incluye:", options: ["Irse sin más", "Borrar todos los registros", "Empezar otro proyecto sin revisar", "Comparar los resultados con el acta y guardar los archivos"], answer: 3, why: "Cerrar bien conserva el valor y las lecciones." }
    ]
  }
};

"use strict";

// Koach Learn course (Leadership Development), Spanish translation of leadership/lead-agentic-modern-leaders.js. See scripts/koachlearn-courses/README.md, "Translations".
// The reusable prompts are given in Spanish (the marker MISSING becomes FALTA), since learners will type them in Spanish.

module.exports = {
  id: "lead-agentic-modern-leaders-es",
  lang: "es",
  translationOf: "lead-agentic-modern-leaders",
  category: "Leadership Development",
  name: "Liderazgo en la era de la IA agéntica 2: la IA para líderes de hoy y sus herramientas",
  skills: "Convertir notas de reunión en listas de acciones, Redactar memorandos de decisión con opciones y riesgos, Escribir comunicaciones claras para el equipo, Prepararse para conversaciones difíciles, Elegir herramientas aprobadas, Escribir una guía de una página sobre el uso de la IA en el equipo",
  outcome: "usar herramientas de IA en tu propio trabajo de liderazgo, convirtiendo notas de reunión en listas de acciones, redactando un memorando de decisión con opciones y riesgos y preparando mensajes para el equipo, y escribir una guía de uso de la IA de una página que tu equipo pueda seguir.",
  about: [
    "Este curso es para gerentes, supervisores, líderes de equipo y dueños de pequeñas empresas y organizaciones sin fines de lucro que terminaron el curso 1 o ya entienden lo básico de la IA. Trata de tu propio trabajo como líder: reuniones, decisiones, comunicación y personas.",
    "El Capítulo 1 arma tres flujos de trabajo con IA que puedes repetir cada semana: de notas de reunión a lista de acciones, el memorando de decisión y las comunicaciones del equipo. El Capítulo 2 trata de las partes más difíciles: usar la IA para prepararte para conversaciones con personas sin dejárselas a ella, elegir bien las herramientas y escribir una guía sencilla de uso de la IA para tu equipo.",
    "Puedes usar cualquier asistente conocido: ChatGPT, Microsoft Copilot, Google Gemini o Claude. Si tu organización aprobó una herramienta en particular, usa esa. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Arma tu caja de herramientas de IA como líder: guarda tres prompts probados y reutilizables (de notas de reunión a lista de acciones, memorando de decisión con opciones y riesgos, mensaje de actualización para el equipo), cada uno usado una vez en trabajo real sin datos privados; y escribe una guía de uso de la IA de una página para tu equipo que diga qué herramientas están aprobadas, qué nunca se pone en ellas, qué debe revisar una persona y a quién preguntar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Gerentes, supervisores, líderes de equipo y dueños de pequeños negocios y organizaciones sin fines de lucro que terminaron el curso 1 o ya entienden lo básico de la IA.",
    startingPoint: "Pueden explicar la IA generativa y la agéntica y nombrar los riesgos principales para su equipo. Usan la IA de vez en cuando, pero no en flujos de trabajo repetibles para reuniones, decisiones, comunicación y trabajo con personas.",
    gap: "Los líderes pasan gran parte de la semana con notas, decisiones y mensajes. Los prompts probados y reutilizables ahorran tiempo, pero solo si los líderes mantienen en manos humanas el juicio, las conversaciones con personas y los datos personales, y le dan a su equipo una guía clara que seguir.",
    constraints: [
      "Nivel de lectura: palabras sencillas, sin suponer formación técnica",
      "Dispositivos: un teléfono o una computadora con un asistente de IA; usa la herramienta que tu organización aprobó",
      "Privacidad: quita los datos personales y confidenciales antes de pegar algo en la IA",
      "Las políticas de recursos humanos, legales y de la organización se aplican a las decisiones sobre personas y a los mensajes delicados",
      "Tiempo: lecciones cortas con una tarea que usa trabajo real"
    ],
    prerequisites: "\"Liderazgo en la era de la IA agéntica 1: entender la IA\", o un conocimiento básico de la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con notas sueltas de una reunión real, sin datos personales", action: "usar un prompt reutilizable para convertir las notas en decisiones, acciones con responsables y fechas, y preguntas abiertas", standard: "revisando que la lista no tenga nada inventado ni le falte nada" },
    { id: "O2", condition: "Con una decisión real que tienes que tomar", action: "redactar un memorando de decisión con opciones, riesgos y preguntas de seguimiento, y luego escribir tú mismo la recomendación", standard: "sin dar nunca \"la IA lo recomendó\" como razón" },
    { id: "O3", condition: "Con tres puntos para una actualización del equipo", action: "redactar y ajustar un mensaje para el equipo según el tono, el largo y el público", standard: "leyéndolo en voz alta antes de enviarlo" },
    { id: "O4", condition: "Antes de una conversación difícil con una persona", action: "preparar con IA una frase de apertura y preguntas usando solo una descripción general", standard: "sin nombres ni datos privados, y con la conversación y la decisión en tus manos" },
    { id: "O5", condition: "Con una herramienta de IA que tu equipo usa o quiere", action: "compararla en datos, acceso y condiciones del plan usando las páginas del propio proveedor", standard: "terminando con un veredicto de una línea: aprobar, aprobar con límites o todavía no" },
    { id: "O6", condition: "Para tu equipo", action: "escribir una guía de uso de la IA de una página y guardar tus prompts probados en un solo lugar", standard: "cubriendo las herramientas aprobadas, lo que nunca se pone, lo que hay que revisar, la transparencia y a quién preguntar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tres flujos de trabajo con IA para líderes",
      lessons: [
        {
          objectives: ["O1"],
          title: "De notas de reunión a lista de acciones",
          minutes: 5,
          goal: "Convertir notas de reunión sueltas en una lista de acciones clara con responsables y fechas.",
          text: [
            "Las reuniones terminan más a menudo en un recuerdo vago que en acciones claras. La IA es buena para convertir notas sueltas en una estructura. Pega tus notas (sin datos personales ni confidenciales) y pide una lista de decisiones, acciones con un responsable y una fecha límite, y preguntas abiertas.",
            "Un prompt reutilizable: \"A partir de estas notas de reunión, enumera: 1) las decisiones tomadas, 2) las acciones en una tabla con tarea, responsable y fecha límite, 3) las preguntas abiertas. Si falta un responsable o una fecha, escribe FALTA. No añadas nada que no esté en las notas.\" La última frase importa: evita que la herramienta invente tareas.",
            "Muchas apps de reuniones ya ofrecen notas o resúmenes con IA. Antes de activarlos, revisa la política de tu organización y avísales a los participantes, porque grabar y transcribir a las personas plantea preguntas de consentimiento y privacidad."
          ],
          steps: ["Quita de las notas los datos personales o confidenciales.", "Pega las notas con el prompt reutilizable.", "Revisa cada acción contra tu memoria y las notas.", "Completa todo lo marcado como FALTA.", "Manda la lista a los asistentes ese mismo día."],
          words: [["Acción pendiente", "una tarea acordada en una reunión, con un responsable y una fecha límite."], ["Prompt reutilizable", "un prompt que guardas y vuelves a usar para el mismo tipo de tarea."]],
          slides: [
            { title: "De notas a acciones", bullets: ["Decisiones tomadas", "Acciones: tarea, responsable, fecha límite", "Preguntas abiertas"] },
            { title: "Evita las tareas inventadas", bullets: ["\"Si falta, escribe FALTA\"", "\"No añadas nada que no esté en las notas\""] },
            { title: "Grabadoras de reuniones con IA", bullets: ["Primero revisa la política de tu organización", "Avisa a los participantes antes de grabar"] }
          ],
          tryIt: "Toma las notas de una reunión reciente, quita los datos personales, usa el prompt reutilizable y revisa el resultado. Cuenta todo lo que haya puesto mal o inventado.",
          youCanNow: "convertir notas de reunión en una lista de acciones revisada con responsables y fechas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué debe pedirle a la IA un buen prompt para notas de reunión?", options: ["Quién habló más", "Las decisiones, las acciones con responsables y fechas, y las preguntas abiertas", "Un resumen de cada frase", "Ideas de refrigerios para la próxima reunión"], answer: 1, why: "Las decisiones, las acciones con responsable y las preguntas abiertas son lo que un equipo necesita después de una reunión." },
            { objective: "O1", q: "La lista de acciones incluye una tarea que nadie mencionó en la reunión. ¿Qué harías?", options: ["Dejarla, porque es buena idea", "Asignártela en silencio", "Quitarla y añadir al prompt \"No añadas nada que no esté en las notas\"", "Pedirle a la IA que explique por qué"], answer: 2, why: "Las tareas inventadas causan confusión; la regla en el prompt evita que la herramienta las añada." }
          ]
        },
        {
          objectives: ["O2"],
          title: "El memorando de decisión: opciones, riesgos y una recomendación",
          minutes: 6,
          goal: "Usar la IA para redactar un memorando de decisión que compare las opciones con justicia.",
          text: [
            "Los líderes deciden con prisa. La IA puede ayudarte a pensar de forma más amplia, no a decidir por ti. Dale la decisión, los datos que tienes y tus limitaciones (presupuesto, tiempo, personas) y pídele tres opciones, cada una con sus beneficios, riesgos y costos, y con lo que tendrías que creer para que fuera la mejor.",
            "Luego cuestiónala: \"¿Cuál es el argumento más fuerte en contra de mi opción preferida?\" y \"¿Qué información me falta?\" Estas dos preguntas de seguimiento son donde la IA aporta más, porque sacan a la luz los puntos ciegos.",
            "La recomendación la escribes tú. Revisa cada número, añade lo que solo tú sabes (tu gente, tu historia, tus valores) y hazte cargo de la decisión. El memorando nunca debe dar \"lo recomendó la IA\" como razón."
          ],
          steps: ["Describe la decisión, los datos y las limitaciones (sin datos privados).", "Pide tres opciones con beneficios, riesgos y costos.", "Pide el argumento más fuerte en contra de tu favorita.", "Pregunta qué información falta.", "Revisa los números y escribe tú la recomendación."],
          words: [["Memorando de decisión", "un documento corto que presenta una decisión, las opciones y una recomendación."], ["Punto ciego", "algo importante que no has notado."]],
          slides: [
            { title: "La IA amplía, tú decides", bullets: ["Dale la decisión, los datos, las limitaciones", "Pide tres opciones: beneficios, riesgos, costos"] },
            { title: "Dos seguimientos poderosos", bullets: ["\"¿El argumento más fuerte contra mi favorita?\"", "\"¿Qué información me falta?\""] },
            { title: "La decisión es tuya", bullets: ["Revisa cada número", "Añade lo que solo tú sabes", "Nunca \"lo recomendó la IA\" como razón"] }
          ],
          tryIt: "Elige una decisión real que tengas pendiente (por ejemplo, un nuevo horario, un proveedor o un evento). Usa el prompt del memorando de decisión y las dos preguntas de seguimiento, y luego escribe una recomendación de un párrafo con tus propias palabras.",
          youCanNow: "usar la IA para ampliar una decisión y escribir un memorando del que te haces cargo.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es el mejor papel de la IA en un memorando de decisión?", options: ["Tomar la decisión final", "Elegir la opción que prefiere el equipo", "Firmar el memorando", "Ampliar tus opciones y encontrar puntos ciegos"], answer: 3, why: "La IA te ayuda a ver más opciones y riesgos; el líder decide." },
            { objective: "O2", q: "Tienes una opción favorita. ¿Qué pregunta de seguimiento enviarías?", options: ["\"¿Cuál es el argumento más fuerte en contra de mi opción preferida?\"", "\"Dime que mi opción es la mejor.\"", "\"Escribe el memorando más corto.\"", "\"Elige por mí.\""], answer: 0, why: "Pedir el contraargumento más fuerte pone a prueba tu elección con justicia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Comunicación clara con el equipo",
          minutes: 5,
          goal: "Redactar y ajustar un mensaje para el equipo según el tono, el largo y el público.",
          text: [
            "Muchos problemas de liderazgo son problemas de comunicación. La IA te ayuda a redactar rápido una actualización para el equipo, un anuncio o un agradecimiento, y luego a ajustarlo: \"más corto\", \"más cálido\", \"para el personal nuevo\", \"en español sencillo para quienes lo hablan como segundo idioma\".",
            "Dale tus puntos clave en viñetas y tu público, y pide un borrador con tu voz. Pega un mensaje anterior que hayas escrito y di \"usa este mismo tono\" para que suene a ti.",
            "Léelo en voz alta antes de enviarlo. Quita todo lo que no dirías en persona. Para noticias delicadas como despidos, cambios de política o incidentes de seguridad, la IA puede ayudarte a ordenarlas, pero Recursos Humanos o el área legal deben revisar las palabras finales, y las noticias importantes debes darlas en persona cuando puedas."
          ],
          steps: ["Escribe tus puntos clave en viñetas.", "Nombra el público y el tono.", "Pide un borrador; dale un mensaje anterior para que use tu voz.", "Ajústalo con una o dos preguntas de seguimiento.", "Léelo en voz alta; pide revisión para las noticias delicadas."],
          words: [["Tono", "cómo se siente un mensaje: cálido, formal, urgente, tranquilo."], ["Público", "las personas que van a leer el mensaje."]],
          slides: [
            { title: "Redacta rápido, luego ajusta", bullets: ["Puntos clave en viñetas", "Público y tono", "\"Más corto\", \"más cálido\", \"español sencillo\""] },
            { title: "Que suene a ti", bullets: ["Pega un mensaje anterior tuyo", "\"Usa este mismo tono\""] },
            { title: "Antes de enviarlo", bullets: ["Léelo en voz alta", "Noticias delicadas: revisión de RR. HH. o legal", "Da las noticias importantes en persona"] }
          ],
          tryIt: "Escribe tres viñetas para una actualización real del equipo. Usa la IA para redactarla, pide un ajuste, léela en voz alta y envíala (o guárdala para enviarla).",
          youCanNow: "redactar y ajustar mensajes para el equipo con IA sin perder tu propia voz.",
          quickCheck: [
            { objective: "O3", q: "¿Cómo logras que un borrador de la IA suene como tú?", options: ["Le pides que use un lenguaje formal", "Pegas un mensaje anterior que escribiste y dices \"imita este tono\"", "Lo envías sin leerlo", "Usas más signos de exclamación"], answer: 1, why: "Un ejemplo de tu propia forma de escribir le muestra tu tono a la herramienta." },
            { objective: "O3", q: "La actualización para el equipo que hizo la IA es el doble de larga de lo que necesitas. ¿Qué harías?", options: ["Enviarla de todos modos", "Empezar un chat nuevo con otra herramienta", "Borrar la segunda mitad", "Pedir un ajuste, como \"resúmelo en cinco frases cortas\", y luego leerlo en voz alta"], answer: 3, why: "Una pregunta de seguimiento clara corrige el largo, y leer en voz alta detecta lo que tú no dirías." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tres flujos de trabajo con IA para líderes",
        questions: [
          { objective: "O1", q: "¿Por qué añadir \"No añadas nada que no esté en las notas\" al prompt de la reunión?", options: ["Esconde a los responsables", "Hace más larga la lista", "Evita que la herramienta invente tareas", "Lo exige la ley"], answer: 2, why: "La IA puede llenar los huecos con contenido inventado." },
          { objective: "O1", q: "Antes de activar una grabadora de reuniones con IA, debes:", options: ["Revisar la política y avisar a los participantes", "Grabar en secreto", "Avisarle solo al jefe", "Apagar el micrófono"], answer: 0, why: "Grabar a las personas plantea preguntas de consentimiento y privacidad." },
          { objective: "O2", q: "¿Qué pregunta de seguimiento aporta más a un memorando de decisión?", options: ["\"Hazlo más largo.\"", "\"Añade emojis.\"", "\"Usa palabras más difíciles.\"", "\"¿Cuál es el argumento más fuerte en contra de mi opción preferida?\""], answer: 3, why: "Saca a la luz los puntos ciegos." },
          { objective: "O2", q: "¿Quién escribe la recomendación de un memorando de decisión?", options: ["La IA", "Tú, el líder", "El proveedor", "Nadie"], answer: 1, why: "Los líderes se hacen cargo de las decisiones; la IA solo amplía el pensamiento." },
          { objective: "O3", q: "Debes anunciar un cambio de política que afecta los sueldos. ¿Cuál es el mejor enfoque?", options: ["Mandar por correo un borrador de IA sin revisar", "Dejar que la IA lo comunique", "No hacer el anuncio", "Usar la IA para ordenarlo, pedir revisión de RR. HH. y darlo en persona"], answer: 3, why: "Las noticias delicadas necesitan revisión y entrega humanas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Personas, herramientas y guías para el equipo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Prepararte para conversaciones con personas sin dejárselas a la IA",
          minutes: 5,
          goal: "Usar la IA para prepararte para una conversación difícil sin poner datos personales.",
          text: [
            "Las conversaciones de retroalimentación, de conflicto y de desempeño son donde los líderes más quieren ayuda y donde la IA es más peligrosa. Los datos personales de un empleado son confidenciales; no pegues nombres, datos de salud, expedientes disciplinarios ni calificaciones de desempeño en herramientas públicas de IA.",
            "Aun así te puedes preparar. Describe la situación en términos generales (\"una persona del equipo suele no cumplir los plazos, le cae bien a todos y hace poco tuvo un cambio familiar\") y pide: una frase para empezar, preguntas para entender su punto de vista y formas de acordar los siguientes pasos. Pídele que haga el papel de la otra persona para que puedas practicar.",
            "Nunca dejes que la IA decida contrataciones, sanciones, sueldos o despidos, y nunca envíes retroalimentación escrita por la IA que no hayas reescrito con tus propias palabras. La gente lo nota, y lo que pierdes es la confianza."
          ],
          steps: ["Describe la situación en general, sin nombres ni datos privados.", "Pide una frase para empezar, preguntas y opciones de siguientes pasos.", "Practica con un juego de roles.", "Escribe tus propias notas con tus propias palabras.", "Deja las decisiones sobre personas en manos de personas."],
          words: [["Juego de roles", "practicar una conversación con alguien (o con una IA) que hace el papel de la otra persona."], ["Confidencial", "información que se debe mantener en privado y compartir solo con quien la necesita."]],
          slides: [
            { title: "Deja fuera los datos personales", bullets: ["Nada de nombres, salud ni expedientes disciplinarios", "Nada de calificaciones en herramientas públicas"] },
            { title: "Prepárate en términos generales", bullets: ["Pide una frase para empezar y buenas preguntas", "Pide opciones de siguientes pasos", "Practica con un juego de roles"] },
            { title: "Límites que no cruzas", bullets: ["La IA no decide contrataciones, sueldos ni sanciones", "Reescribe la retroalimentación con tus palabras"] }
          ],
          tryIt: "Piensa en una conversación que tengas pendiente. Descríbela en términos generales, sin nombres, pide una frase para empezar y tres preguntas, y luego practícala una vez con un juego de roles.",
          youCanNow: "prepararte para conversaciones difíciles con IA protegiendo la privacidad de las personas y su confianza en ti.",
          quickCheck: [
            { objective: "O4", q: "¿Qué puedes poner en una herramienta pública de IA al prepararte para una conversación sobre desempeño?", options: ["El nombre del empleado y su historial de evaluaciones", "Una descripción general sin nombres ni datos privados", "Sus notas médicas, para ser sensible", "Su expediente completo"], answer: 1, why: "Solo una descripción general mantiene fuera de la herramienta la información privada de la persona." },
            { objective: "O4", q: "La IA te sugiere exactamente qué decir y qué decisión tomar sobre un empleado. ¿Qué haces?", options: ["Usas su idea de frase de apertura para practicar y tomas tú la decisión", "Lees su guion palabra por palabra", "Dejas que la IA envíe el mensaje", "Copias su decisión en los registros de recursos humanos"], answer: 0, why: "La IA puede ayudarte a prepararte, pero la conversación y la decisión siguen siendo tuyas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Elegir y usar las herramientas de IA con criterio",
          minutes: 5,
          goal: "Comparar herramientas de IA según las preguntas que importan para tu equipo.",
          text: [
            "Hay muchas herramientas de IA: asistentes generales (ChatGPT, Microsoft Copilot, Google Gemini, Claude), asistentes dentro de herramientas que ya usas (Microsoft 365, Google Workspace, Canva, apps de reuniones) y funciones de agente que pueden realizar acciones. Las funciones y los precios cambian a menudo.",
            "Haz cinco preguntas antes de que tu equipo adopte una. Datos: ¿guarda lo que escribimos o lo usa para entrenarse, y podemos desactivarlo? Acceso: ¿qué puede leer o hacer en nuestros sistemas? Aprobación: ¿la aprobó nuestra organización o el área de TI? Exactitud: ¿puede mostrar sus fuentes? Costo: ¿cuánto cuesta por persona, ahora y al renovar?",
            "Busca las respuestas en las páginas de privacidad y precios del propio proveedor y en tu contrato, no en los anuncios. Los planes para empresas y para educación a menudo tienen condiciones de datos distintas a las de los planes personales gratuitos; léelas para el plan que de verdad usarías."
          ],
          steps: ["Haz una lista de las herramientas que usa o quiere tu equipo.", "Revisa los datos: si guarda lo que escribes o se entrena con ello.", "Revisa el acceso: qué puede leer o hacer.", "Revisa la aprobación, la exactitud y el costo.", "Usa las páginas del propio proveedor y tu contrato."],
          words: [["Condiciones de datos", "las reglas de cómo un proveedor guarda y usa lo que escribes."], ["Asistente integrado", "una función de IA dentro de una herramienta que ya usas, como un procesador de textos."]],
          slides: [
            { title: "Tipos de herramientas de IA", bullets: ["Asistentes generales", "Asistentes dentro de herramientas que ya usas", "Funciones de agente que realizan acciones"] },
            { title: "Cinco preguntas", bullets: ["Datos: ¿los guarda o se entrena con ellos?", "Acceso: ¿qué puede leer o hacer?", "Aprobación, exactitud, costo"] },
            { title: "Dónde buscar las respuestas", bullets: ["Páginas de privacidad y precios del proveedor", "Tu contrato", "Las condiciones cambian según el plan: revisa el tuyo"] }
          ],
          tryIt: "Elige una herramienta de IA que tu equipo use o quiera. Responde las cinco preguntas con las páginas del propio proveedor. Escribe un veredicto de una línea: aprobar, aprobar con límites o todavía no.",
          youCanNow: "juzgar una herramienta de IA según los datos, el acceso, la aprobación, la exactitud y el costo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué pregunta la pregunta de \"acceso\" sobre una herramienta de IA?", options: ["Cuánto cuesta", "Qué tan rápido responde", "Qué puede leer o hacer en tus sistemas", "Qué idiomas habla"], answer: 2, why: "El acceso te dice qué podría ver o cambiar la herramienta si algo sale mal." },
            { objective: "O5", q: "Tu equipo usa un plan personal gratuito y quieres saber si entrena con tus datos. ¿Dónde lo buscas?", options: ["En un artículo de noticias del año pasado", "En las condiciones de privacidad del propio proveedor para ese plan", "En lo que adivina un colega", "En lo que responde la propia IA en un chat"], answer: 1, why: "Los planes gratuitos y los de empresa pueden tener condiciones de datos distintas, y la fuente son las páginas del proveedor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Escribir una guía de una página sobre el uso de la IA en el equipo",
          minutes: 6,
          goal: "Escribir una guía corta de uso de la IA que tu equipo pueda seguir.",
          text: [
            "Una guía de una página es mejor que una política larga que nadie lee. Responde cinco preguntas: ¿Qué herramientas podemos usar? ¿Qué nunca se pone en ellas? ¿Qué debe revisar una persona antes de que salga? ¿Cuándo decimos que ayudó la IA? ¿A quién preguntamos?",
            "Escríbela con palabras sencillas y con ejemplos del trabajo de tu equipo: \"Nunca pegues nombres, direcciones ni datos de pago de clientes.\" \"Una persona revisa cada dato, número y cita.\" \"Avísale al cliente si está chateando con una IA.\" Si tu organización tiene una política formal, tu guía debe caber dentro de ella; consúltalo con RR. HH., TI o el área legal.",
            "Usa la IA para redactarla a partir de tus notas y luego edítala a fondo. Compártela, pregúntale al equipo qué no queda claro y revísala cada pocos meses, porque las herramientas y los riesgos siguen cambiando."
          ],
          steps: ["Responde las cinco preguntas en notas con viñetas.", "Usa la IA para redactar una página a partir de tus notas.", "Añade ejemplos reales del trabajo de tu equipo.", "Revisa que quepa dentro de cualquier política de la organización.", "Compártela, pregunta qué no queda claro y fija una fecha de revisión."],
          words: [["Guía de uso de la IA", "un conjunto corto de reglas sobre cómo usa un equipo las herramientas de IA."], ["Transparencia", "decirle a la gente que la IA ayudó a hacer algo o que está hablando con una IA."]],
          slides: [
            { title: "Cinco preguntas, una página", bullets: ["¿Qué herramientas?", "¿Qué nunca se pone?", "¿Qué debe revisar una persona?", "¿Cuándo lo decimos? ¿A quién preguntamos?"] },
            { title: "Palabras sencillas, ejemplos reales", bullets: ["\"Nunca pegues datos de pago de clientes\"", "\"Una persona revisa cada dato y número\""] },
            { title: "Mantenla viva", bullets: ["Que quepa dentro de la política formal", "Pregunta al equipo qué no queda claro", "Revísala cada pocos meses"] }
          ],
          tryIt: "Tarea final: guarda en un solo documento tus tres prompts probados (acciones de la reunión, memorando de decisión, actualización para el equipo), y añade tu guía de una página sobre el uso de la IA en el equipo con las herramientas, lo que nunca se pone, lo que hay que revisar, la transparencia y a quién preguntar. Compártela con un colega para recibir comentarios.",
          youCanNow: "guiar el uso diario de la IA en tu equipo con una caja de herramientas probada y una guía clara de una página.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa la transparencia en una guía de IA del equipo?", options: ["Compartir tus contraseñas con el área de tecnología", "Hacer una lista de todas las herramientas de IA que existen", "Publicar tus prompts en internet", "Avisar a las personas cuando la IA ayudó o cuando están hablando con una IA"], answer: 3, why: "La transparencia mantiene informadas a las personas sobre dónde se usó la IA." },
            { objective: "O6", q: "Tu organización tiene una política formal de IA. ¿Cómo debe relacionarse con ella tu guía de una página?", options: ["Encajar dentro de ella y remitir a ella", "Reemplazarla con reglas más simples", "Ignorarla, porque los equipos son distintos", "Copiarla completa, palabra por palabra"], answer: 0, why: "Una guía de equipo añade detalles prácticos, pero debe mantenerse dentro de la política de la organización." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Personas, herramientas y guías para el equipo",
        questions: [
          { objective: "O4", q: "Al prepararte para una conversación de desempeño, ¿qué puedes poner en una herramienta pública de IA?", options: ["El nombre y la calificación del empleado", "Su justificante médico", "Una descripción general sin nombres ni datos privados", "Su expediente disciplinario"], answer: 2, why: "Describe las situaciones en general; deja fuera los datos personales." },
          { objective: "O4", q: "¿Qué decisión nunca debe tomarla la IA?", options: ["Sancionar a un empleado", "Elegir la hora de una reunión", "Escoger una letra", "Ordenar los puntos del orden del día"], answer: 0, why: "Las decisiones sobre personas se quedan con las personas." },
          { objective: "O5", q: "¿Dónde debes revisar si una herramienta se entrena con tus datos?", options: ["En un anuncio de la herramienta", "En las condiciones de privacidad del propio proveedor para tu plan", "En la opinión de un amigo", "En el logotipo de la herramienta"], answer: 1, why: "La fuente son las condiciones oficiales del plan que de verdad usas." },
          { objective: "O6", q: "¿Cuál es la principal ventaja de una guía de IA de una página?", options: ["La gente de verdad la lee y la sigue", "Cubre todos los casos posibles", "Nunca hay que actualizarla", "Reemplaza todas las políticas"], answer: 0, why: "Las guías cortas y sencillas se usan." },
          { objective: "O6", q: "¿Cada cuánto debes revisar la guía de IA de tu equipo?", options: ["Nunca", "Cada diez años", "Solo después de un desastre", "Cada pocos meses, porque las herramientas y los riesgos cambian"], answer: 3, why: "Las herramientas de IA cambian rápido." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Liderazgo en la era de la IA agéntica 2: la IA para líderes de hoy y sus herramientas",
    questions: [
      { objective: "O1", q: "Un buen prompt para notas de reunión pide:", options: ["Un poema", "Decisiones, acciones con responsables y fechas, preguntas abiertas", "Los sueldos de todos", "Solo un nuevo orden del día"], answer: 1, why: "Esa estructura convierte las notas en acción." },
      { objective: "O1", q: "Si la IA anota una acción sin responsable, el prompt debe hacer que escriba:", options: ["Tu nombre", "Un nombre al azar", "FALTA", "Nada"], answer: 2, why: "Marcar los huecos evita responsables inventados." },
      { objective: "O1", q: "Antes de pegar notas en la IA debes:", options: ["Añadir contraseñas", "Añadir más nombres", "Quitar los datos personales o confidenciales", "Traducirlas"], answer: 2, why: "Los datos privados se quedan fuera de las herramientas públicas." },
      { objective: "O2", q: "En un memorando de decisión, el mejor papel de la IA es:", options: ["Ampliar tus opciones y sacar a la luz los puntos ciegos", "Tomar la decisión", "Firmar el memorando", "Reemplazar a tu equipo"], answer: 0, why: "Tú decides; la IA te ayuda a pensar de forma más amplia." },
      { objective: "O2", q: "\"¿Qué información me falta?\" es:", options: ["Una orden de formato", "Una pérdida de tiempo", "Un riesgo de privacidad", "Una pregunta de seguimiento útil que encuentra puntos ciegos"], answer: 3, why: "Saca a la luz los huecos en tu razonamiento." },
      { objective: "O2", q: "¿Qué razón nunca debe dar un memorando?", options: ["\"Cabe en nuestro presupuesto\"", "\"Lo recomendó la IA\"", "\"Cumple el plazo\"", "\"Nuestro equipo lo puede hacer\""], answer: 1, why: "Los líderes se hacen cargo de sus razones." },
      { objective: "O3", q: "Para que un borrador de la IA suene a ti:", options: ["Usa otra herramienta", "Usa más signos de exclamación", "Pide palabras más largas", "Pega un mensaje anterior y di \"usa este mismo tono\""], answer: 3, why: "Los ejemplos de tu escritura guían el tono." },
      { objective: "O3", q: "Leer un mensaje en voz alta antes de enviarlo te ayuda a:", options: ["Añadir jerga", "Hacerlo más largo", "Quitar lo que no dirías en persona", "Saltarte la revisión"], answer: 2, why: "Tu oído detecta el tono equivocado." },
      { objective: "O3", q: "Para noticias sobre despidos, la IA puede ayudarte a:", options: ["Ordenar el mensaje, con revisión de RR. HH. o legal", "Enviarlo sin revisión", "Decidir a quién se despide", "Evitar decírselo a la gente"], answer: 0, why: "Las noticias delicadas necesitan revisión humana." },
      { objective: "O4", q: "¿Qué dato nunca debe ir en una herramienta pública de IA?", options: ["Un orden del día genérico", "La información de salud de un empleado", "Las fechas de eventos públicos", "El nombre de tu equipo"], answer: 1, why: "La información de salud es confidencial." },
      { objective: "O4", q: "El juego de roles con IA te ayuda a:", options: ["Practicar una conversación difícil", "Saltarte la conversación", "Grabar al empleado", "Decidir los sueldos"], answer: 0, why: "La práctica da confianza sin compartir datos privados." },
      { objective: "O4", q: "La retroalimentación escrita por la IA debe:", options: ["Ocultarse al empleado", "Enviarse tal cual", "Publicarse", "Reescribirse con tus propias palabras"], answer: 3, why: "La gente lo nota, y la confianza importa." },
      { objective: "O5", q: "¿Cuál es un asistente integrado?", options: ["Un cuaderno de papel", "Una función de IA dentro de tu procesador de textos", "Un teléfono de escritorio", "Una impresora"], answer: 1, why: "Muchas herramientas conocidas ya incluyen funciones de IA." },
      { objective: "O5", q: "La pregunta de \"datos\" sobre una herramienta es:", options: ["¿Es popular?", "¿De qué color es?", "¿Guarda lo que escribimos o se entrena con ello?", "¿Cuántos botones tiene?"], answer: 2, why: "Las condiciones de datos deciden qué es seguro escribir." },
      { objective: "O5", q: "La pregunta de \"acceso\" es:", options: ["¿Está abierta la oficina?", "¿El personal tiene internet?", "¿Qué puede leer o hacer en nuestros sistemas?", "¿Quién tiene la llave de la puerta?"], answer: 2, why: "Las funciones de agente pueden actuar en tus sistemas." },
      { objective: "O5", q: "Los planes personales gratuitos y los planes para empresas:", options: ["Pueden tener condiciones de datos distintas", "Siempre tienen las mismas condiciones", "Nunca guardan datos", "Siempre son gratis"], answer: 0, why: "Lee las condiciones del plan que vas a usar." },
      { objective: "O6", q: "Una guía de IA de una página responde:", options: ["Solo quién está a cargo", "Todas las preguntas legales", "Solo los precios", "Qué herramientas, qué nunca se pone, qué revisar, transparencia, a quién preguntar"], answer: 3, why: "Cinco preguntas sencillas cubren el uso diario." },
      { objective: "O6", q: "La transparencia significa:", options: ["Ocultar el uso de la IA", "Decirle a la gente que la IA ayudó o que está hablando con una IA", "Borrar registros", "Compartir contraseñas"], answer: 1, why: "La honestidad sobre la IA genera confianza." },
      { objective: "O6", q: "Si tu organización tiene una política formal de IA, la guía de tu equipo debe:", options: ["Contradecirla", "Reemplazarla", "Ignorarla", "Caber dentro de ella"], answer: 3, why: "Las guías de equipo funcionan dentro de la política de la organización." },
      { objective: "O6", q: "Tu caja de herramientas de IA como líder es mejor guardarla como:", options: ["Las contraseñas de otras personas", "Prompts al azar que olvidas", "Prompts probados y reutilizables guardados en un solo lugar", "Una lista de todas las herramientas de IA"], answer: 2, why: "Los prompts guardados y probados hacen repetibles los buenos hábitos." }
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
      6,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Prompt de acciones de reunión",
        objective: "O1",
        notYet: "No hay prompt guardado, o no se probó con notas reales.",
        meets: "Un prompt guardado que convierte notas en acciones con responsables y fechas, usado una vez sin datos privados.",
        exceeds: "El prompt marca los responsables que faltan y prohíbe inventar tareas."
      },
      {
        name: "Prompt de memorando de decisión",
        objective: "O2",
        notYet: "No hay prompt guardado, o la IA hizo la recomendación.",
        meets: "Un prompt guardado para opciones y riesgos, usado una vez, con la recomendación escrita por el líder.",
        exceeds: "Incluye preguntas de seguimiento que ponen a prueba la opción preferida."
      },
      {
        name: "Prompt de actualización del equipo",
        objective: "O3",
        notYet: "No hay prompt guardado, o el mensaje no se revisó.",
        meets: "Un prompt guardado para actualizaciones del equipo, usado una vez y ajustado en tono o largo.",
        exceeds: "Incluye una muestra de la forma de escribir del líder para imitar el tono."
      },
      {
        name: "Guía de IA de una página",
        objective: "O6",
        notYet: "Faltan las herramientas aprobadas, lo que nunca se pone, lo que hay que revisar o a quién preguntar.",
        meets: "Una página que cubre las herramientas aprobadas, lo que nunca se pone, lo que una persona debe revisar y a quién preguntar.",
        exceeds: "También cubre la transparencia y se compartió con un colega para recibir comentarios."
      },
      {
        name: "Datos privados fuera",
        objective: "O4",
        notYet: "Un prompt o un ejemplo contiene nombres o datos privados.",
        meets: "Ningún prompt ni ejemplo guardado tiene datos personales ni confidenciales.",
        exceeds: "Los prompts usan marcadores como [miembro del equipo] para poder reutilizarlos sin peligro."
      }
    ]
  },
  evaluation: {
    results: [
      "Líderes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Equipos con una guía de uso de la IA de una página en marcha en un plazo de 30 días (encuesta de seguimiento)",
      "Líderes que dicen ahorrar tiempo cada semana con sus prompts reutilizables (encuesta de seguimiento)",
      "Líderes que pasan al curso 3 de Liderazgo en la era de la IA agéntica"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con un asistente de IA; usa el que aprobó tu organización",
      "Notas de una reunión reciente, una decisión real y una actualización del equipo, sin datos privados",
      "Un documento para guardar los prompts y la guía de uso de la IA",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego prueben en vivo el prompt de notas de reunión con notas inventadas antes de que los líderes usen las suyas.",
      "Recuerda a los líderes que sigan la política de IA de su organización y que involucren a recursos humanos o al área legal en las decisiones sobre personas y las noticias delicadas.",
      "Forma parejas de líderes para ensayar una conversación difícil usando solo descripciones generales.",
      "Pide a los líderes que intercambien sus borradores de guía de IA y que cada uno dé un comentario.",
      "Califica la tarea final con la rúbrica y comprueba que ningún prompt guardado tenga datos personales."
    ]
  }
};

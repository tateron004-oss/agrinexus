"use strict";

// Koach Learn course (Spanish translation of leadership/lead-coaching-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-coaching-mentoring-es",
  lang: "es",
  translationOf: "lead-coaching-mentoring",
  category: "Leadership Development",
  name: "Coaching y mentoría",
  skills: "Distinguir el coaching de la mentoría, Escuchar con toda tu atención, Hacer preguntas poderosas, Llevar una conversación GROW, Fijar una meta de desarrollo, Acuerdos de mentoría y seguimiento del crecimiento",
  outcome: "llevar una conversación de coaching con el modelo GROW, escuchando bien y haciendo preguntas abiertas, ayudar a alguien a fijar una meta de desarrollo clara, acordar cómo funcionará una relación de mentoría y dar seguimiento a su crecimiento con el tiempo.",
  about: [
    "Este curso es para cualquier persona que ayuda a otras a crecer: gerentes, líderes de equipo, maestros, entrenadores, pastores, líderes de jóvenes y trabajadores con experiencia que guían a los más nuevos.",
    "El coaching y la mentoría son habilidades que se pueden practicar. Vas a aprender la diferencia entre ellos, cómo escuchar para que la gente se sienta escuchada, cómo hacer preguntas que ayudan a pensar, cómo llevar una conversación con el modelo GROW y cómo fijar una meta de desarrollo y darle seguimiento.",
    "Cada lección dura unos cinco minutos. Si puedes, busca una persona para practicar (un compañero de trabajo, un amigo o un familiar) para las tareas de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Ten una conversación de coaching de 20 minutos con tu compañero de práctica usando GROW. Escucha más de lo que hablas y haz al menos cinco preguntas abiertas. Juntos, escriban su meta de desarrollo en forma clara y medible, un acuerdo de mentoría de un párrafo (cada cuánto se reúnen, cómo, por cuánto tiempo y qué es privado) y un registro sencillo con tres fechas de seguimiento.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Líderes de equipo, supervisores, gerentes, docentes, líderes comunitarios y de organizaciones sin fines de lucro, y trabajadores con experiencia que quieren dar coaching o mentoría a otras personas.",
    startingPoint: "Muchas veces les piden ayuda y suelen responder dando consejos. Pocos han practicado escuchar con toda su atención, hacer preguntas abiertas, llevar una conversación de coaching con estructura o escribir un acuerdo de mentoría.",
    gap: "Dar respuestas mantiene a la gente dependiente y no llega a lo que de verdad necesita. Los líderes necesitan escuchar, hacer preguntas abiertas, guiar una conversación con GROW, ayudar a fijar una meta de desarrollo clara y dar seguimiento al crecimiento, para que las personas que apoyan aprendan a pensar por sí mismas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Tiempo: lecciones cortas, más una conversación de práctica de 20 minutos",
      "La tarea final necesita un compañero de práctica",
      "Privacidad: lo que se dice en el coaching y la mentoría se queda en privado, salvo que se acuerde otra cosa",
      "Las instrucciones de seguridad se dicen directamente; no se dan con coaching"
    ],
    prerequisites: "Ninguno. \"Dirigir equipos\" es un curso complementario útil."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante una situación en la que alguien necesita ayuda", action: "elegir si pide coaching, mentoría o decir qué hacer", standard: "acertando en al menos 4 de 5 situaciones" },
    { id: "O2", condition: "En una conversación", action: "escuchar sin interrumpir y resumir lo que escuchaste", standard: "para que la persona confirme que entendiste o te corrija" },
    { id: "O3", condition: "Cuando alguien te pide un consejo", action: "hacer preguntas abiertas que empiecen con qué o cómo en lugar de dar consejos", standard: "haciendo al menos cinco preguntas abiertas en una conversación" },
    { id: "O4", condition: "En una conversación de coaching de 20 minutos", action: "guiar la conversación por la meta, la realidad, las opciones y la voluntad", standard: "terminando con un primer paso, una fecha y una calificación del compromiso" },
    { id: "O5", condition: "Ante el deseo de desarrollar una habilidad", action: "escribir una meta de desarrollo clara con pasos de aprendizaje pequeños", standard: "que diga qué, cuánto y para cuándo, y que sea de la persona" },
    { id: "O6", condition: "Al empezar una relación de mentoría", action: "escribir un acuerdo de mentoría de un párrafo y un registro con tres fechas de seguimiento", standard: "cubriendo cada cuánto, cómo, por cuánto tiempo y qué es privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conversaciones de coaching",
      lessons: [
        {
          objectives: ["O1"],
          title: "Coaching y mentoría: ¿cuál es la diferencia?",
          minutes: 4,
          goal: "Decidir si una situación pide coaching, mentoría o simplemente decir qué hacer.",
          text: [
            "El coaching ayuda a una persona a encontrar sus propias respuestas por medio de preguntas y escucha. El coach no necesita conocer el trabajo mejor que ella; la persona que recibe el coaching hace la mayor parte de la reflexión. Funciona bien cuando alguien tiene la habilidad o el conocimiento pero está atorado, o necesita desarrollar su criterio.",
            "La mentoría es una relación más larga en la que alguien con más experiencia comparte consejos, historias, contactos y lecciones aprendidas. El mentor muchas veces trabaja en el mismo campo. Funciona bien para decisiones de carrera, para aprender \"cómo funcionan las cosas en realidad\" y para construir una red de contactos.",
            "A veces ninguno de los dos es lo correcto y simplemente debes decir qué hacer. Un trabajador nuevo que está por cometer un error de seguridad necesita instrucciones, no preguntas. Los buenos líderes cambian entre decir, hacer coaching y dar mentoría según lo que la persona necesita."
          ],
          words: [["Coaching", "ayudar a alguien a encontrar sus propias respuestas haciendo preguntas y escuchando."], ["Mentoría", "una relación más larga en la que alguien con más experiencia comparte consejos y lecciones."], ["Mentorado", "la persona que recibe la mentoría."], ["Coachee", "la persona que recibe el coaching."]],
          slides: [
            { title: "Coaching", bullets: ["Preguntas y escucha", "La persona hace la reflexión", "Útil cuando está atorada o desarrolla su criterio"] },
            { title: "Mentoría", bullets: ["Una relación más larga", "Comparte experiencia, consejos y contactos", "Útil para la carrera y para saber cómo funcionan las cosas"] },
            { title: "A veces, solo di qué hacer", bullets: ["Riesgos de seguridad", "Tareas totalmente nuevas", "Cambia de estilo según la necesidad"] }
          ],
          tryIt: "Escribe tres situaciones reales de tu trabajo o tu vida en las que alguien te pidió ayuda. Para cada una, escribe si ayudaría más el coaching, la mentoría o decir qué hacer, y por qué.",
          youCanNow: "distinguir el coaching de la mentoría y elegir el enfoque correcto para cada situación.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la mentoría?", options: ["Una instrucción de seguridad de una sola vez", "Una relación más larga en la que alguien con más experiencia comparte consejos y aprendizajes", "Hacer solo preguntas de sí o no", "Una evaluación de desempeño"], answer: 1, why: "La mentoría comparte experiencia con el tiempo, muchas veces en el mismo campo." },
            { objective: "O1", q: "Un miembro del equipo tiene curiosidad por saber cómo funcionan de verdad los ascensos en tu campo. ¿Qué enfoque es el mejor?", options: ["Decirle que lea la política solo", "Darle coaching solo con preguntas", "Ignorarlo hasta la evaluación", "Darle mentoría compartiendo tu experiencia y tus contactos"], answer: 3, why: "La mentoría sirve para decisiones de carrera y para aprender cómo funcionan las cosas de verdad." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escuchar para que la gente se sienta escuchada",
          minutes: 5,
          goal: "Escuchar con toda tu atención y mostrar que entendiste haciendo un resumen.",
          text: [
            "La mayoría escuchamos mientras planeamos lo que vamos a decir después. En el coaching, eso estorba. Escuchar de verdad es darle toda tu atención a la otra persona: el teléfono guardado, la mirada en ella, sin interrumpir y sin saltar con tu propia historia.",
            "Muestra que estás escuchando. Asiente, di \"sigue\" y cada pocos minutos haz un resumen: \"Entonces, lo que escucho es que quieres dirigir el proyecto, pero te preocupa que el equipo no te siga. ¿Es así?\" Un buen resumen deja que la persona escuche su propio pensamiento y te corrija si entendiste mal.",
            "Escucha los sentimientos y los valores, no solo los hechos: \"Te escucho frustrado\" o \"Parece que la justicia es muy importante para ti\". Acostúmbrate al silencio. Una pausa muchas veces llega justo antes de la mejor idea de la persona."
          ],
          steps: ["Guarda tu teléfono y ponte de frente a la persona.", "No interrumpas ni saltes con tu propia historia.", "Anímala: asiente, di \"sigue\".", "Resume lo que escuchaste y pregunta si es correcto.", "Nombra los sentimientos que notes.", "Permite el silencio."],
          words: [["Escucha activa", "escuchar con toda tu atención y mostrar que entendiste, por ejemplo con un resumen."], ["Resumir", "repetir brevemente las ideas principales con tus propias palabras."]],
          slides: [
            { title: "Escuchar de verdad", bullets: ["Teléfono guardado, mirada en la persona", "Sin interrumpir", "Sin saltar con tu propia historia"] },
            { title: "Muestra que escuchas", bullets: ["Asiente, di \"sigue\"", "Resume: \"Entonces, lo que escucho es...\"", "Pregunta: \"¿Es así?\""] },
            { title: "Escucha más a fondo", bullets: ["Escucha sentimientos y valores, no solo hechos", "Permite el silencio: suelen seguir buenas ideas"] }
          ],
          tryIt: "Pide a un compañero que hable tres minutos sobre algo que quiere mejorar. No le des consejos. Luego resume en dos oraciones lo que escuchaste y pregúntale: \"¿Lo entendí bien?\"",
          youCanNow: "escuchar con toda tu atención y hacer un resumen para que la otra persona se sienta escuchada.",
          quickCheck: [
            { objective: "O2", q: "¿Qué impide escuchar con toda tu atención?", options: ["Planear lo que vas a decir después", "Asentir con la cabeza", "Resumir", "Permitir el silencio"], answer: 0, why: "Si estás planeando tu respuesta, no estás escuchando con toda tu atención." },
            { objective: "O2", q: "Mientras alguien habla de un problema, recuerdas una historia parecida tuya. ¿Qué harías?", options: ["Contar tu historia de inmediato", "Interrumpir para dar un consejo", "Seguir escuchando y resumir lo que dijo", "Revisar tu teléfono"], answer: 2, why: "Escuchar con toda tu atención significa no meterte con tu propia historia." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer preguntas poderosas",
          minutes: 5,
          goal: "Convertir consejos en preguntas abiertas que ayudan a la gente a pensar por sí misma.",
          text: [
            "Una pregunta poderosa es abierta (no se puede responder con sí o no), corta y trata sobre el pensamiento de la otra persona. Muchas veces empieza con \"qué\" o \"cómo\": \"¿Cómo se vería el éxito?\" \"¿Qué has intentado ya?\" \"¿Qué es lo que realmente te detiene?\"",
            "Cuidado con los consejos disfrazados de pregunta, como \"¿Has pensado en llamarla?\". Esa es tu idea, no la suya. También ten cuidado con las preguntas que empiezan con \"por qué\", porque pueden sonar a culpa. \"¿Qué te llevó a eso?\" suele sentirse más amable que \"¿Por qué hiciste eso?\".",
            "Una pregunta muy fuerte es \"¿Y qué más?\". Ayuda a la gente a ir más allá de su primera respuesta. Haz una pregunta a la vez, luego detente y escucha."
          ],
          steps: ["Empieza con \"qué\" o \"cómo\".", "Que sea corta y sobre su pensamiento.", "Evita los consejos disfrazados de pregunta.", "Cambia \"por qué\" por \"qué te llevó a...\".", "Pregunta \"¿Y qué más?\"", "Haz una pregunta, luego detente y escucha."],
          words: [["Pregunta abierta", "una pregunta que no se puede responder solo con sí o no."], ["Pregunta cerrada", "una pregunta que se responde con sí, no o un solo dato."]],
          slides: [
            { title: "Las preguntas poderosas son", bullets: ["Abiertas y cortas", "Sobre el pensamiento de la persona", "Suelen empezar con \"qué\" o \"cómo\""] },
            { title: "Ejemplos", bullets: ["\"¿Cómo se vería el éxito?\"", "\"¿Qué has intentado ya?\"", "\"¿Qué es lo que realmente te detiene?\"", "\"¿Y qué más?\""] },
            { title: "Cuidado con", bullets: ["Consejos disfrazados de pregunta", "Preguntas con \"por qué\" que suenan a culpa", "Hacer dos preguntas a la vez"] }
          ],
          tryIt: "Escribe tres consejos que das a menudo. Convierte cada uno en una pregunta abierta. Por ejemplo, \"Deberías preguntarle a tu jefe\" se convierte en \"¿Quién podría ayudarte con esto?\"",
          youCanNow: "hacer preguntas cortas y abiertas que ayudan a la gente a encontrar sus propias respuestas.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace que una pregunta sea \"abierta\"?", options: ["Es muy larga", "No se puede responder con sí o no", "Incluye tu consejo", "Empieza con \"por qué\""], answer: 1, why: "Las preguntas abiertas invitan a la persona a pensar y explicar." },
            { objective: "O3", q: "Quieres sugerir tu idea: \"Habla con tu supervisor\". ¿Cómo la convertirías en una pregunta de coaching?", options: ["\"¿Has pensado en hablar con tu supervisor?\"", "\"¿Por qué no has hablado con tu supervisor?\"", "\"Deberías hablar con tu supervisor.\"", "\"¿Quién podría ayudarte con esto?\""], answer: 3, why: "Una pregunta abierta deja que la persona encuentre la idea; las otras son consejos o culpas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conversaciones de coaching",
        questions: [
          { objective: "O1", q: "En el coaching, ¿quién hace la mayor parte de la reflexión?", options: ["El coach", "La persona que recibe el coaching", "El jefe", "Un libro"], answer: 1, why: "El coaching ayuda a la persona a encontrar sus propias respuestas." },
          { objective: "O1", q: "Un trabajador nuevo está por usar una máquina de forma insegura. ¿Qué enfoque es el mejor?", options: ["Una conversación de coaching larga", "Un acuerdo de mentoría", "Decirle con claridad cómo hacerlo de forma segura", "Preguntarle \"¿Y qué más?\""], answer: 2, why: "Los riesgos de seguridad piden instrucciones claras." },
          { objective: "O2", q: "¿Cuál es un buen resumen mientras escuchas?", options: ["\"A mí también me pasó una vez...\"", "\"Deberías renunciar y ya.\"", "\"Bueno, sigamos.\"", "\"Entonces quieres dirigir el proyecto, pero te preocupa que el equipo no te siga. ¿Es así?\""], answer: 3, why: "Repite sus ideas principales y comprueba que entendiste." },
          { objective: "O3", q: "¿Cuál es una pregunta abierta?", options: ["\"¿Qué has intentado ya?\"", "\"¿La llamaste?\"", "\"¿Es martes?\"", "\"¿Ya terminaste?\""], answer: 0, why: "No se puede responder con sí o no." },
          { objective: "O3", q: "\"¿Has pensado en llamarla?\" es un problema porque es:", options: ["Demasiado larga", "Un consejo disfrazado de pregunta", "Demasiado abierta", "Sobre sentimientos"], answer: 1, why: "Trae tu idea en lugar de sacar la suya." }
        ]
      }
    },
    {
      name: "Capítulo 2: Un crecimiento que dura",
      lessons: [
        {
          objectives: ["O4"],
          title: "Llevar una conversación con el modelo GROW",
          minutes: 6,
          goal: "Guiar una conversación de coaching por la meta, la realidad, las opciones y la voluntad.",
          text: [
            "GROW (\"crecer\" en inglés) es un mapa sencillo y muy usado para una conversación de coaching. La G es Goal, la meta: ¿qué quiere lograr con esta conversación y a largo plazo? La R es Reality, la realidad: ¿qué pasa ahora, qué ha intentado? La O es Options, las opciones: ¿qué podría hacer? La W es Will, la voluntad (o el camino a seguir): ¿qué va a hacer y cuándo?",
            "Dedica tiempo a la realidad antes de correr a las opciones. Muchas veces la persona ve la respuesta cuando la situación está clara. En las opciones, pide varias ideas, y \"¿qué más?\", antes de elegir. Si tú tienes una idea, puedes ofrecerla al final, como una opción entre muchas.",
            "Termina con un compromiso claro: \"¿Cuál es tu primer paso y cuándo lo vas a dar?\" Pregunta qué tan segura está en una escala del 1 al 10. Si es bajo, pregunta qué haría que fuera más alto."
          ],
          steps: ["Meta: \"¿Qué quieres sacar de esta conversación?\"", "Realidad: \"¿Qué está pasando ahora? ¿Qué has intentado?\"", "Opciones: \"¿Qué podrías hacer? ¿Qué más?\"", "Voluntad: \"¿Qué vas a hacer y para cuándo?\"", "Revisa el compromiso: \"¿Qué tan seguro estás, del 1 al 10?\""],
          words: [["Modelo GROW", "un mapa de coaching de cuatro pasos: meta (Goal), realidad (Reality), opciones (Options) y voluntad (Will)."], ["Compromiso", "una promesa clara de hacer una acción concreta para cierta fecha."]],
          slides: [
            { title: "El modelo GROW", bullets: ["Meta (Goal): ¿qué quieres?", "Realidad (Reality): ¿qué pasa ahora?", "Opciones (Options): ¿qué podrías hacer?", "Voluntad (Will): ¿qué harás y para cuándo?"] },
            { title: "Dedica tiempo a la realidad", bullets: ["La respuesta suele aparecer cuando todo está claro", "No corras a las soluciones"] },
            { title: "Opciones, luego compromiso", bullets: ["Pide varias ideas, y \"¿qué más?\"", "Ofrece tu idea al final, como una opción", "\"¿Qué tan seguro estás, del 1 al 10?\""] }
          ],
          tryIt: "Escribe en una tarjeta una pregunta GROW para cada paso. Con un compañero, ten una conversación GROW de 15 minutos sobre algo que quiere mejorar. Termina con su primer paso y una fecha.",
          youCanNow: "guiar una conversación de coaching con GROW, desde la meta hasta un siguiente paso claro y comprometido.",
          quickCheck: [
            { objective: "O4", q: "En GROW, ¿qué significa la O?", options: ["Opciones (Options)", "Resultado (Outcome)", "Orden (Order)", "Opinión (Opinion)"], answer: 0, why: "GROW es Goal, Reality, Options, Will: meta, realidad, opciones y voluntad." },
            { objective: "O4", q: "A los diez minutos, la persona solo ha mencionado una opción. ¿Qué le preguntarías?", options: ["\"¿Es tu respuesta final?\"", "\"Esto es lo que yo haría.\"", "\"¿Y qué más?\"", "\"¿Por qué solo una?\""], answer: 2, why: "\"¿Y qué más?\" ayuda a la gente a ir más allá de su primera respuesta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Fijar una meta de desarrollo",
          minutes: 5,
          goal: "Ayudar a alguien a convertir un deseo en una meta de desarrollo clara y medible.",
          text: [
            "Una meta de desarrollo trata de hacer crecer una habilidad, no solo de terminar una tarea. \"Hablar mejor en público\" es un deseo. Una meta clara dice qué, cuánto y para cuándo: \"Dirigir yo solo la reunión rápida del equipo de los lunes, tres semanas seguidas, antes de que termine marzo\".",
            "Mucha gente usa SMART (siglas en inglés) para revisar una meta: específica, medible, alcanzable, relevante y con tiempo definido. La meta debe ser de la persona. Pregúntale qué quiere desarrollar y por qué le importa, antes de agregar lo que pide el trabajo.",
            "Divide la meta en pasos pequeños de aprendizaje: algo para leer o ver, alguien a quien observar o acompañar, una oportunidad para practicar y alguien que dé comentarios. La mayor parte del crecimiento viene de hacer, no solo de los cursos."
          ],
          steps: ["Pregunta qué quiere desarrollar y por qué le importa.", "Escríbela como qué, cuánto y para cuándo.", "Revísala con SMART.", "Haz una lista de pasos: leer, observar a alguien, practicar, recibir comentarios.", "Acuerden el primer paso."],
          words: [["Meta de desarrollo", "una meta para hacer crecer una habilidad o capacidad."], ["SMART", "una forma de revisar una meta (siglas en inglés): específica, medible, alcanzable, relevante y con tiempo definido."], ["Acompañamiento", "aprender observando a alguien mientras hace el trabajo."]],
          slides: [
            { title: "Deseo o meta", bullets: ["Deseo: \"Hablar mejor en público\"", "Meta: \"Dirigir solo la reunión de los lunes, 3 semanas seguidas, antes de fin de marzo\""] },
            { title: "Revísala con SMART", bullets: ["Específica y medible", "Alcanzable y relevante", "Con tiempo definido"] },
            { title: "Su meta, sus razones", bullets: ["Pregunta qué quiere desarrollar", "Pregunta por qué le importa"] },
            { title: "Pasos de aprendizaje", bullets: ["Leer o ver", "Acompañar a alguien", "Practicar", "Recibir comentarios"] }
          ],
          tryIt: "Con tu compañero de práctica, convierte un deseo en una meta de desarrollo SMART. Luego escribe tres pasos de aprendizaje, con al menos una oportunidad para practicar.",
          youCanNow: "ayudar a alguien a escribir una meta de desarrollo clara y los pasos de aprendizaje para alcanzarla.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un deseo y no una meta de desarrollo clara?", options: ["\"Presentar sola el informe mensual en dos reuniones antes de junio\"", "\"Mejorar al hablar\"", "\"Dar solo tres charlas de seguridad antes del fin del trimestre\"", "\"Capacitar a dos empleados nuevos en la caja registradora antes del 1 de mayo\""], answer: 1, why: "Una meta clara dice qué, cuánto y para cuándo; un deseo no." },
            { objective: "O5", q: "Tu mentorado quiere manejar mejor a los clientes molestos. ¿Qué paso de aprendizaje agregarías primero?", options: ["Solo un curso largo en línea", "Nada hasta el próximo año", "Acompañar a un compañero con experiencia y luego practicar con comentarios", "Leer la historia de la empresa"], answer: 2, why: "La mayor parte del crecimiento viene de hacer y practicar con comentarios." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Acuerdos de mentoría y seguimiento del crecimiento",
          minutes: 5,
          goal: "Escribir un acuerdo de mentoría sencillo y un registro para dar seguimiento al crecimiento de alguien.",
          text: [
            "Una relación de mentoría funciona mejor con un acuerdo corto al principio. Pónganse de acuerdo en el propósito, cada cuánto se van a reunir (por ejemplo, una vez al mes durante seis meses), cómo (en persona, por teléfono o por video), qué es privado, quién define los temas (normalmente el mentorado) y cómo cualquiera de los dos puede terminarla con amabilidad.",
            "Den seguimiento al crecimiento para que los dos vean el avance. Un registro sencillo puede ser un documento o una hoja de cálculo compartida con la meta, los pasos de aprendizaje, las fechas de seguimiento, lo que se intentó, lo que se aprendió y el siguiente paso. Celebren el avance, aunque sean pasos pequeños.",
            "En cada reunión de seguimiento, vuelvan a mirar la meta, pregunten qué salió bien y qué fue difícil, y acuerden el siguiente paso. Al final, revisen juntos qué cambió y hablen de lo que sigue: una nueva meta, un nuevo mentor o convertirte tú en mentor."
          ],
          steps: ["Acuerden el propósito, cada cuánto, cómo y por cuánto tiempo.", "Acuerden qué queda en privado y quién define los temas.", "Acuerden cómo cualquiera puede terminarla con amabilidad.", "Armen un registro: meta, pasos, fechas, aprendizajes, siguiente paso.", "En cada seguimiento: revisar, reflexionar, siguiente paso.", "Al final, revisen qué cambió y qué sigue."],
          words: [["Acuerdo de mentoría", "un entendimiento corto y por escrito de cómo funcionará una relación de mentoría."], ["Registro de avance", "un registro sencillo del avance hacia una meta, con fechas."], ["Seguimiento", "una reunión planeada para revisar el avance."]],
          slides: [
            { title: "El acuerdo de mentoría", bullets: ["Propósito, cada cuánto, cómo, por cuánto tiempo", "Qué queda en privado", "El mentorado suele definir los temas", "Cómo terminarla con amabilidad"] },
            { title: "Un registro sencillo", bullets: ["Meta y pasos de aprendizaje", "Fechas de seguimiento", "Qué se intentó y aprendió, siguiente paso"] },
            { title: "En cada seguimiento", bullets: ["Vuelvan a mirar la meta", "¿Qué salió bien? ¿Qué fue difícil?", "Acuerden el siguiente paso; celebren el avance"] }
          ],
          tryIt: "Tarea final: ten una conversación GROW de 20 minutos con tu compañero. Luego escriban juntos su meta de desarrollo SMART, un acuerdo de mentoría de un párrafo y un registro con tres fechas de seguimiento.",
          youCanNow: "empezar una relación de mentoría con un acuerdo claro y dar seguimiento al crecimiento de alguien con el tiempo.",
          quickCheck: [
            { objective: "O6", q: "¿Quién suele definir los temas en una reunión de mentoría?", options: ["El jefe del mentor", "El mentor", "Recursos Humanos", "El mentorado"], answer: 3, why: "El mentorado suele definir los temas, porque se trata de su crecimiento." },
            { objective: "O6", q: "En una reunión de seguimiento, tu mentorado ha dado un pequeño paso adelante. ¿Qué harías?", options: ["Celebrarlo y acordar el siguiente paso", "Decirle que no es suficiente", "Saltar a una meta nueva", "Cancelar el siguiente seguimiento"], answer: 0, why: "Celebrar los avances pequeños mantiene motivada a la gente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Un crecimiento que dura",
        questions: [
          { objective: "O4", q: "¿Qué significa la R de GROW?", options: ["Resultados", "Reglas", "Recompensa", "Realidad (Reality)"], answer: 3, why: "Realidad: lo que está pasando ahora." },
          { objective: "O4", q: "¿Cuándo debes ofrecer tu propia idea en el paso de opciones?", options: ["Primero, para que no pierda tiempo", "Al final, como una opción entre muchas", "Nunca, bajo ninguna circunstancia", "Solo por escrito"], answer: 1, why: "Ofrecerla al final deja su pensamiento en primer lugar." },
          { objective: "O5", q: "¿Cuál es una meta de desarrollo clara?", options: ["\"Ser un mejor líder\"", "\"Esforzarme más\"", "\"Dirigir solo la reunión de los lunes tres semanas seguidas antes de fin de marzo\"", "\"Aprender cosas\""], answer: 2, why: "Dice qué, cuánto y para cuándo." },
          { objective: "O6", q: "¿Quién suele definir los temas en una reunión de mentoría?", options: ["El mentorado", "El jefe del mentor", "Recursos Humanos", "Nadie"], answer: 0, why: "La relación es para el crecimiento del mentorado." },
          { objective: "O6", q: "¿Qué incluye un registro de avance sencillo?", options: ["Solo las opiniones del mentor", "Contraseñas privadas", "Nada por escrito", "La meta, los pasos, las fechas de seguimiento, lo aprendido y el siguiente paso"], answer: 3, why: "Esto deja que los dos vean el avance." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Coaching y mentoría",
    questions: [
      { objective: "O1", q: "El coaching trata principalmente de:", options: ["Decirle a la gente qué hacer", "Ayudar a la gente a encontrar sus propias respuestas con preguntas y escucha", "Repartir premios", "Revisar la asistencia"], answer: 1, why: "La persona que recibe el coaching hace la reflexión." },
      { objective: "O1", q: "La mentoría suele ser:", options: ["Una orden de una sola vez", "Un examen", "Una relación más larga en la que se comparte experiencia", "Un castigo"], answer: 2, why: "Los mentores comparten su experiencia con el tiempo." },
      { objective: "O1", q: "Un trabajador hábil no logra decidir entre dos buenos enfoques. ¿Qué es lo mejor?", options: ["Coaching", "Decirle la respuesta", "Ignorarlo", "Una advertencia por escrito"], answer: 0, why: "Tiene la habilidad; el coaching le ayuda a usar su criterio." },
      { objective: "O2", q: "Escuchar de verdad significa:", options: ["Revisar tu teléfono mientras habla", "Planear tu respuesta", "Contar tu propia historia de inmediato", "Darle toda tu atención, sin interrumpir"], answer: 3, why: "La atención sin interrupciones ayuda a la gente a pensar." },
      { objective: "O2", q: "¿Por qué resumir lo que escuchaste?", options: ["Para terminar la conversación", "Para que escuche su propio pensamiento y pueda corregirte", "Para mostrar que eres más listo", "Para cambiar de tema"], answer: 1, why: "Un resumen comprueba que entendiste y ayuda a reflexionar." },
      { objective: "O2", q: "La persona se queda callada después de una pregunta. Debes:", options: ["Llenar el silencio con consejos", "Hacer tres preguntas más", "Permitir el silencio; muchas veces sigue una buena idea", "Terminar la reunión"], answer: 2, why: "El silencio le da espacio para pensar." },
      { objective: "O3", q: "¿Cuál es la pregunta de coaching más poderosa?", options: ["\"¿Lo hiciste?\"", "\"¿No es obvio?\"", "\"¿Por qué harías eso?\"", "\"¿Qué es lo que realmente te detiene?\""], answer: 3, why: "Es abierta y llega al centro del asunto." },
      { objective: "O3", q: "Una forma más amable de preguntar \"¿Por qué hiciste eso?\" es:", options: ["\"¿Qué te llevó a eso?\"", "\"¿Quién te dijo que lo hicieras?\"", "\"¿Lo dices en serio?\"", "\"¿No sabías que no se hacía así?\""], answer: 0, why: "Explora su pensamiento sin sonar a culpa." },
      { objective: "O3", q: "La pregunta \"¿Y qué más?\" ayuda a la gente a:", options: ["Dejar de hablar", "Ir más allá de su primera respuesta", "Estar de acuerdo contigo", "Sentirse culpable"], answer: 1, why: "La primera respuesta casi nunca es la única." },
      { objective: "O4", q: "GROW significa:", options: ["Grade, Review, Order, Wait (nota, revisión, orden, espera)", "Give, Rest, Own, Win (dar, descansar, poseer, ganar)", "Goal, Reality, Options, Will (meta, realidad, opciones, voluntad)", "Growth, Rules, Outcome, Work (crecimiento, reglas, resultado, trabajo)"], answer: 2, why: "Meta, realidad, opciones y voluntad (o camino a seguir)." },
      { objective: "O4", q: "¿Qué pregunta GROW va en el paso de voluntad?", options: ["\"¿Qué vas a hacer y para cuándo?\"", "\"¿Qué está pasando ahora?\"", "\"¿Qué quieres de esta conversación?\"", "\"¿Qué podrías hacer?\""], answer: 0, why: "La voluntad trata del compromiso de actuar." },
      { objective: "O4", q: "Alguien califica su compromiso con un 4 de 10. Le preguntas:", options: ["\"¿Por qué tan bajo?\"", "Nada", "\"Hazlo de todos modos.\"", "\"¿Qué haría que fuera más alto?\""], answer: 3, why: "Le ayuda a quitar lo que lo detiene." },
      { objective: "O4", q: "¿Por qué dedicar tiempo a la realidad antes que a las opciones?", options: ["Para llenar el tiempo", "La respuesta suele aparecer cuando la situación está clara", "Las opciones nunca sirven", "Para encontrar a quién culpar"], answer: 1, why: "Tener claro el presente lleva a mejores decisiones." },
      { objective: "O5", q: "SMART (siglas en inglés) significa:", options: ["Sencilla, moderna, activa, rápida y verdadera", "Específica, medible, alcanzable, relevante y con tiempo definido", "Sólida, múltiple, apta, real y total", "Simple, mayor, amplia, recta y para hoy"], answer: 1, why: "Estas cinco revisiones hacen que una meta sea clara." },
      { objective: "O5", q: "¿De quién debe ser una meta de desarrollo?", options: ["De la persona que está creciendo", "Solo del gerente", "Del abogado de la empresa", "De nadie"], answer: 0, why: "La gente se compromete con las metas que siente suyas." },
      { objective: "O5", q: "¿De dónde viene la mayor parte del crecimiento?", options: ["Solo de leer", "Solo de los certificados", "De hacer y practicar, con comentarios", "De esperar"], answer: 2, why: "La práctica con comentarios desarrolla la habilidad." },
      { objective: "O6", q: "Un acuerdo de mentoría debe incluir:", options: ["El sueldo del mentor", "Cada cuánto se reunirán, qué es privado y cómo terminarla con amabilidad", "Solo la fecha de inicio", "Una lista de los defectos del mentorado"], answer: 1, why: "Unos términos claros evitan confusiones después." },
      { objective: "O6", q: "En cada reunión de seguimiento de la mentoría, deben:", options: ["Empezar una meta nueva cada vez", "Hablar solo de ustedes mismos", "Cancelar si todo va bien", "Volver a mirar la meta, reflexionar y acordar el siguiente paso"], answer: 3, why: "Revisar con regularidad mantiene el crecimiento en marcha." },
      { objective: "O6", q: "¿Por qué celebrar los avances pequeños?", options: ["Mantienen motivada a la gente", "Reemplazan la meta", "Lo exige la ley", "Terminan la relación"], answer: 0, why: "Ver el avance ayuda a la gente a seguir." },
      { objective: "O6", q: "Al final de una relación de mentoría, un buen paso es:", options: ["Dejar de hablarse", "Esconder el registro", "Revisar qué cambió y hablar de lo que sigue", "Volver a empezar desde el principio"], answer: 2, why: "Una revisión cierra bien y señala el siguiente paso de crecimiento." }
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
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Escucha",
        objective: "O2",
        notYet: "Habló más que su compañero o interrumpió seguido.",
        meets: "Escuchó más de lo que habló y resumió al menos una vez.",
        exceeds: "Nombró un sentimiento o un valor que escuchó, y su compañero estuvo de acuerdo."
      },
      {
        name: "Preguntas abiertas",
        objective: "O3",
        notYet: "Menos de cinco preguntas abiertas, o sobre todo consejos.",
        meets: "Al menos cinco preguntas abiertas, una a la vez.",
        exceeds: "Usó \"¿Y qué más?\" y evitó las preguntas de \"por qué\" que culpan."
      },
      {
        name: "Conversación GROW",
        objective: "O4",
        notYet: "Se saltó un paso o pasó directo a dar consejos.",
        meets: "Cubrió la meta, la realidad, las opciones y la voluntad, y terminó con un primer paso y una fecha.",
        exceeds: "Pidió una calificación del compromiso del 1 al 10 y qué haría que fuera más alta."
      },
      {
        name: "Meta de desarrollo",
        objective: "O5",
        notYet: "La meta es un deseo, como \"mejorar al hablar\".",
        meets: "Una meta clara que dice qué, cuánto y para cuándo, y que es de su compañero.",
        exceeds: "Dividida en pasos de aprendizaje pequeños con práctica y comentarios."
      },
      {
        name: "Acuerdo y registro",
        objective: "O6",
        notYet: "Falta el acuerdo o el registro.",
        meets: "Un acuerdo de un párrafo (cada cuánto, cómo, por cuánto tiempo y qué es privado) y un registro con tres fechas de seguimiento.",
        exceeds: "También dice cómo cualquiera de los dos puede terminarla con amabilidad."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que empiezan una relación de coaching o de mentoría en los 30 días siguientes (encuesta de seguimiento)",
      "Mentorados que alcanzan su meta de desarrollo en la fecha fijada",
      "Personas que toman otro curso de liderazgo de Koach Learn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para ver las lecciones",
      "Un compañero de práctica para la conversación de 20 minutos",
      "Papel o un documento compartido para la meta, el acuerdo y el registro",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Forma parejas para practicar GROW; pide que intercambien los papeles de quien da y quien recibe el coaching.",
      "Usa a una tercera persona como observadora que cuente las preguntas abiertas y los resúmenes.",
      "Pide a las parejas que usen una meta real pero de poco riesgo, y que mantengan en privado lo que se dice.",
      "Recuerda a los participantes que los errores de seguridad piden decir qué hacer, no coaching.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

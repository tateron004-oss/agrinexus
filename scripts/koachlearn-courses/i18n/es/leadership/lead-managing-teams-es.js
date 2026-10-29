"use strict";

// Koach Learn course (Spanish translation of leadership/lead-managing-teams.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-managing-teams-es",
  lang: "es",
  translationOf: "lead-managing-teams",
  category: "Leadership Development",
  name: "Dirigir equipos",
  skills: "Fijar expectativas claras, Delegar trabajo, Hacer reuniones uno a uno, Dar retroalimentación con situación-comportamiento-impacto, Manejar el bajo desempeño con justicia, Dirigir reuniones de equipo y reconocer el trabajo",
  outcome: "dirigir un equipo pequeño semana a semana: fijar expectativas claras, delegar trabajo, tener reuniones uno a uno útiles, dar retroalimentación justa y concreta, manejar un problema de desempeño paso a paso y dirigir una reunión de equipo corta que termine con acciones claras y un agradecimiento sincero.",
  about: [
    "Este curso es para quienes empiezan a dirigir o pronto lo harán: el encargado de turno de una tienda, el jefe de cuadrilla de una finca, el supervisor de una organización sin fines de lucro o cualquier persona a la que le acaban de pedir que se haga cargo del trabajo de otros.",
    "Vas a practicar los hábitos diarios de un buen jefe: pasar de hacer el trabajo a dirigirlo, decir con claridad cómo se ve un buen resultado, delegar, reunirte uno a uno, dar retroalimentación que ayude, manejar un problema con justicia y dirigir reuniones que nadie odie.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\" con tu propio equipo o con un equipo que conozcas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los asistentes de IA pueden ayudarte a escribir notas y agendas, pero la habilidad es tuya."
  ],
  finalTask: "Escribe un plan de una página para tus \"primeros 30 días\" con un equipo que diriges o que conoces: expectativas claras para un puesto, una tarea que vas a delegar (con el resultado, la fecha límite y el seguimiento), una agenda para una reunión uno a uno, un comentario escrito con situación-comportamiento-impacto y la agenda de una reunión de equipo de 20 minutos que termine con acciones y un agradecimiento concreto.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Líderes de equipo nuevos y futuros, supervisores y dueños de pequeños negocios, incluidas personas ascendidas desde la primera línea y voluntarios que dirigen equipos en grupos comunitarios.",
    startingPoint: "Hacen bien su propio trabajo y saben seguir instrucciones. Muchos nunca han recibido formación en gestión, y algunos ahora dirigen a quienes eran sus compañeros.",
    gap: "Los jefes nuevos a menudo siguen haciendo el trabajo ellos mismos, dan instrucciones vagas, evitan las conversaciones difíciles y tienen reuniones sin acciones. Eso los agota y frena al equipo. Necesitan hábitos sencillos y repetibles para las expectativas, la delegación, las reuniones uno a uno, la retroalimentación, los problemas de desempeño y las reuniones.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Tiempo: lecciones cortas que caben en una jornada de trabajo",
      "Dispositivos: un teléfono o una computadora; el plan se puede hacer en papel",
      "Las reglas cambian según el lugar de trabajo: las amonestaciones formales y los despidos siguen la política de la organización y de recursos humanos",
      "Privacidad: las notas de las reuniones uno a uno y los detalles de desempeño se mantienen privados y con respeto"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Cuando empiezas a dirigir personas", action: "describir cómo cambia tu trabajo y elegir una tarea que vas a dejar de hacer tú mismo", standard: "nombrando al menos dos partes del trabajo principal de un jefe" },
    { id: "O2", condition: "Con una tarea para un miembro del equipo", action: "escribir una expectativa clara y una delegación con el resultado, la fecha límite, lo que puede decidir y un seguimiento", standard: "para que la persona pueda repetir la tarea con sus propias palabras" },
    { id: "O3", condition: "Para un miembro del equipo", action: "planear la agenda de una reunión uno a uno que empiece con lo que tiene en mente", standard: "cubriendo avances, obstáculos y crecimiento" },
    { id: "O4", condition: "Con algo que hizo un miembro del equipo", action: "escribir retroalimentación con situación-comportamiento-impacto y preguntar cómo lo ve", standard: "nombrando un comportamiento concreto que viste u oíste, sin \"siempre\" ni \"nunca\"" },
    { id: "O5", condition: "Ante un problema de desempeño", action: "planear una conversación privada y un plan de mejora por escrito", standard: "revisando primero las expectativas e incluyendo cómo se ve un buen resultado, el apoyo que darás y una fecha para revisar" },
    { id: "O6", condition: "Para una reunión de equipo habitual", action: "escribir una agenda corta que termine con acciones y un agradecimiento concreto", standard: "con quién hará qué y para cuándo, enviada ese mismo día" }
  ],
  chapters: [
    {
      name: "Capítulo 1: De hacer el trabajo a dirigirlo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Pasar de hacer el trabajo a dirigirlo",
          minutes: 4,
          goal: "Describir cómo cambia tu trabajo cuando empiezas a dirigir personas y elegir qué dejar de hacer tú mismo.",
          text: [
            "Muchos jefes llegan al puesto porque eran buenos haciendo el trabajo. Pero ahora el trabajo es otro: tus resultados son los resultados del equipo. Si sigues haciéndolo todo tú, el equipo deja de crecer y tú terminas agotado.",
            "Tu nuevo trabajo es dejar clara la meta, dar a las personas lo que necesitan, quitar lo que las frena, ayudarlas a mejorar y notar el buen trabajo. Todavía echas una mano cuando de verdad ayuda, pero ya no es tu tarea principal.",
            "Es normal que esto se sienta raro, sobre todo si ahora diriges a quienes eran tus compañeros. Sé amable, sé justo con todos y di con honestidad que tu papel cambió. Pregúntale a tu propio jefe cómo se ve el éxito para ti."
          ],
          steps: ["Anota las tareas que todavía haces tú cada semana.", "Marca las que alguien del equipo podría aprender a hacer.", "Elige una para delegar este mes.", "Pregúntale a tu jefe: \"¿Qué haría que mi equipo tenga éxito en seis meses?\""],
          words: [["Jefe", "persona responsable de los resultados de un grupo de personas, no solo de su propio trabajo."], ["Colaborador directo", "persona de la que tú eres el jefe."]],
          slides: [
            { title: "Tu trabajo cambió", bullets: ["Antes: tus propios resultados", "Ahora: los resultados del equipo", "Hacerlo todo tú impide que el equipo crezca"] },
            { title: "Qué hace un jefe", bullets: ["Deja clara la meta", "Da a las personas lo que necesitan", "Quita lo que las frena", "Las ayuda a mejorar y nota el buen trabajo"] },
            { title: "Dirigir a excompañeros", bullets: ["Sé amable y justo con todos", "Di con honestidad que tu papel cambió", "Pregúntale a tu jefe cómo se ve el éxito"] }
          ],
          tryIt: "Haz una lista de cinco tareas que haces cada semana. Encierra en un círculo una que alguien de tu equipo podría aprender. Escribe una oración sobre quién podría hacerla y por qué le ayudaría.",
          youCanNow: "explicar en qué se diferencia el trabajo de un jefe del de quien hace la tarea y elegir una tarea que vas a dejar de hacer tú.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es parte del nuevo trabajo de un jefe?", options: ["Hacer personalmente cada tarea difícil", "Dejar clara la meta y notar el buen trabajo", "Evitar a quienes eran sus compañeros", "Revisar cada correo que envía el equipo"], answer: 1, why: "El trabajo del jefe es dejar clara la meta, quitar obstáculos, ayudar a las personas a mejorar y notar el buen trabajo." },
            { objective: "O1", q: "Eres nuevo dirigiendo y no tienes claro qué se considera éxito para ti. ¿Qué harías?", options: ["Adivinar y esperar que salga bien", "Copiar exactamente al jefe anterior", "Pedirle al equipo que lo decida", "Preguntarle a tu propio jefe cómo se ve el éxito"], answer: 3, why: "La lección dice que le preguntes a tu propio jefe cómo se ve el éxito." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fijar expectativas claras y delegar",
          minutes: 6,
          goal: "Escribir una expectativa clara y delegar una tarea con un resultado, una fecha límite y un seguimiento.",
          text: [
            "La mayoría de los problemas de un equipo empiezan con expectativas poco claras. Nadie puede dar en un blanco que no ve. Una expectativa clara dice cuál es el resultado, qué tan bien tiene que estar y para cuándo. \"Mantén la tienda limpia\" es vago. \"Llena y ordena los estantes de adelante antes de las 9 am todos los días\" es claro.",
            "Delegar es darle a alguien una tarea y la autoridad para hacerla, no solo pasarle lo que no quieres hacer. Di qué resultado quieres y por qué importa, la fecha límite, qué puede decidir por su cuenta y cuándo harán el seguimiento. Después deja que lo haga a su manera.",
            "Ajusta la forma de delegar a la persona. Alguien nuevo necesita más pasos y más seguimiento. Alguien con experiencia tal vez solo necesite la meta. Pídele que te repita lo que entendió, para que los dos sepan que están de acuerdo."
          ],
          steps: ["Di qué resultado quieres y por qué importa.", "Di qué tan bien tiene que estar y la fecha límite.", "Di qué puede decidir solo y cuándo debe consultarte.", "Acuerden un momento para el seguimiento.", "Pídele que repita la tarea con sus propias palabras."],
          words: [["Expectativa", "una idea clara del resultado del que alguien es responsable y de cómo se va a evaluar."], ["Delegar", "darle a alguien una tarea y la autoridad para hacerla."], ["Seguimiento", "una conversación corta y planeada para ver cómo va una tarea."]],
          slides: [
            { title: "Expectativas claras", bullets: ["Qué resultado", "Qué tan bien tiene que estar", "Para cuándo"] },
            { title: "Vago vs. claro", bullets: ["Vago: \"Mantén la tienda limpia\"", "Claro: \"Llena y ordena los estantes de adelante antes de las 9 am a diario\""] },
            { title: "Cinco partes de una buena delegación", bullets: ["El resultado y por qué importa", "La calidad y la fecha límite", "Lo que decide solo", "El seguimiento, y que te lo repita"] },
            { title: "Ajústalo a la persona", bullets: ["Nueva: más pasos, más seguimiento", "Con experiencia: la meta y espacio para trabajar"] }
          ],
          tryIt: "Toma la tarea que marcaste en la lección 1. Escribe cómo la vas a delegar con las cinco partes. Léesela a un amigo o dila en voz alta y pregúntate: ¿alguien podría hacer esto sin hacerme diez preguntas?",
          youCanNow: "escribir una expectativa clara y delegar una tarea con un resultado, una fecha límite, límites para decidir y un seguimiento.",
          quickCheck: [
            { objective: "O2", q: "¿Qué tres cosas dice una expectativa clara?", options: ["El resultado, qué tan bien tiene que estar y para cuándo", "Quién está a cargo, el nombre del equipo y el lugar", "El pago, el horario y los descansos", "Las reglas, las sanciones y los formularios"], answer: 0, why: "Una expectativa clara nombra el resultado, la calidad y la fecha límite." },
            { objective: "O2", q: "Le pasas una tarea a un miembro del equipo con experiencia. ¿Qué harías?", options: ["Darle cada paso y revisar cada hora", "No darle fecha límite", "Darle la meta y la fecha límite, y dejar que lo haga a su manera", "Hacer tú primero la mitad"], answer: 2, why: "Ajusta la entrega a la persona; quien tiene experiencia quizá solo necesite la meta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reuniones uno a uno que sirven",
          minutes: 5,
          goal: "Planear y tener una reunión uno a uno regular que le pertenezca al miembro del equipo.",
          text: [
            "Una reunión uno a uno es una reunión privada, corta y regular entre tú y una persona de tu equipo, muchas veces de 20 a 30 minutos cada una o dos semanas. Es el mejor lugar para detectar problemas a tiempo, crear confianza y ayudar a las personas a crecer.",
            "Haz que sea su reunión. Empieza con lo que tiene en mente. Luego hablen del avance de su trabajo, de lo que la frena y de su crecimiento. Las novedades que podrías leer en un mensaje, déjalas para el mensaje.",
            "Cuida ese tiempo: no la canceles seguido, guarda el teléfono y escucha más de lo que hablas. Anota cualquier promesa que hagas y cúmplela. Mantén tus notas privadas y respetuosas."
          ],
          steps: ["Fija un horario regular y respétalo.", "Empieza con: \"¿Qué tienes en mente?\"", "Pregunta por el avance y por lo que la frena.", "Hablen de crecimiento: \"¿En qué quieres mejorar?\"", "Terminen acordando los siguientes pasos y anótalos."],
          words: [["Reunión uno a uno", "una reunión privada y regular entre un jefe y un miembro del equipo."], ["Obstáculo", "cualquier cosa que impide que alguien termine su trabajo."]],
          slides: [
            { title: "Qué es una reunión uno a uno", bullets: ["Corta, privada y regular", "Muchas veces de 20-30 minutos cada una o dos semanas", "Detecta problemas a tiempo y crea confianza"] },
            { title: "Haz que sea su reunión", bullets: ["Empieza: \"¿Qué tienes en mente?\"", "Avance y obstáculos", "Crecimiento", "Siguientes pasos, por escrito"] },
            { title: "Cuida ese tiempo", bullets: ["No la canceles seguido", "Guarda el teléfono y escucha más de lo que hablas", "Cumple cada promesa que hagas"] }
          ],
          tryIt: "Escribe la agenda de una reunión uno a uno para un miembro del equipo real o inventado, con cuatro preguntas: una para empezar, una sobre el avance, una sobre los obstáculos y una sobre su crecimiento.",
          youCanNow: "planear y tener una reunión uno a uno que pone primero lo que necesita el miembro del equipo y termina con siguientes pasos claros.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una reunión uno a uno?", options: ["Una evaluación anual", "Una reunión privada, corta y regular con un miembro del equipo", "Una reunión con todo el equipo", "Una audiencia disciplinaria"], answer: 1, why: "Las reuniones uno a uno suelen durar de 20 a 30 minutos cada una o dos semanas." },
            { objective: "O3", q: "Tus reuniones uno a uno se siguen convirtiendo en informes de avance. ¿Qué cambiarías?", options: ["Cancelarlas", "Hacerlas más largas", "Hacerlas en grupo", "Pasar los informes de avance a un mensaje y empezar con lo que la persona tiene en mente"], answer: 3, why: "Hazla su reunión; lo que podrías leer va en un mensaje." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: De hacer el trabajo a dirigirlo",
        questions: [
          { objective: "O1", q: "¿Cuál es el cambio más grande cuando pasas de hacer el trabajo a dirigirlo?", options: ["Trabajas menos horas", "Tus resultados ahora son los resultados del equipo", "Ya no necesitas escuchar", "Haces tú todas las tareas difíciles"], answer: 1, why: "A un jefe se le juzga por lo que logra todo el equipo." },
          { objective: "O2", q: "¿Cuál expectativa es la más clara?", options: ["\"Haz lo mejor que puedas\"", "\"Mantén todo ordenado\"", "\"Ponte más al día\"", "\"Envía el pedido semanal al proveedor antes del jueves a mediodía\""], answer: 3, why: "Dice el resultado y la fecha límite." },
          { objective: "O2", q: "Le delegas un informe a una persona nueva en el equipo. ¿Qué deberías agregar?", options: ["Más pasos y un seguimiento temprano", "Nada; que adivine", "Un aviso de que lo vas a rehacer", "Solo la fecha límite"], answer: 0, why: "Alguien nuevo necesita más guía y un seguimiento más temprano." },
          { objective: "O3", q: "¿De quién es, sobre todo, una reunión uno a uno?", options: ["Del jefe de tu jefe", "De todo el equipo", "Del miembro del equipo", "De recursos humanos"], answer: 2, why: "Empieza con lo que tiene en mente; es su tiempo." },
          { objective: "O2", q: "Después de delegar una tarea, una buena forma de confirmar que están de acuerdo es:", options: ["Enviarla otra vez en mayúsculas", "Pedirle que repita la tarea con sus propias palabras", "Revisar cómo va cada hora", "Hacerla tú por si acaso"], answer: 1, why: "Repetirla muestra si los dos entendieron lo mismo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Retroalimentación, desempeño y el equipo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Dar retroalimentación con situación-comportamiento-impacto",
          minutes: 5,
          goal: "Dar retroalimentación concreta, positiva o para corregir, usando situación-comportamiento-impacto.",
          text: [
            "La retroalimentación funciona cuando es concreta, llega a tiempo y habla de lo que alguien hizo, no de quién es. Una forma sencilla de decirla es situación-comportamiento-impacto, que muchas veces se llama SBI por sus siglas en inglés.",
            "Situación: cuándo y dónde. Comportamiento: lo que la persona hizo y tú viste u oíste. Impacto: lo que pasó por eso. Por ejemplo: \"En la llamada con la clienta de esta mañana (situación), la interrumpiste dos veces (comportamiento). Se molestó y pidió hablar con un supervisor (impacto).\" Luego pregunta: \"¿Cómo lo viste tú?\" y acuerden juntos un siguiente paso.",
            "Usa SBI también para felicitar: \"En la colecta de alimentos del sábado, armaste temprano la mesa de registro. Registramos a 40 voluntarios sin filas.\" Da la retroalimentación pronto, en privado si es para corregir, y evita palabras como \"siempre\" y \"nunca\"."
          ],
          steps: ["Situación: di cuándo y dónde.", "Comportamiento: describe lo que hizo, como lo vería una cámara de video.", "Impacto: di lo que pasó por eso.", "Pregunta cómo lo ve y escucha.", "Acuerden un siguiente paso."],
          words: [["Retroalimentación", "información sobre cómo las acciones de alguien afectaron el trabajo, dada para que siga haciéndolo o lo cambie."], ["SBI", "situación-comportamiento-impacto (siglas en inglés): una forma de dar retroalimentación que dice cuándo, qué hizo la persona y qué pasó."]],
          slides: [
            { title: "La buena retroalimentación es", bullets: ["Concreta", "Poco después de que pasa algo", "Sobre lo que hizo, no sobre quién es"] },
            { title: "Situación-comportamiento-impacto", bullets: ["Situación: cuándo y dónde", "Comportamiento: lo que hizo", "Impacto: lo que pasó por eso"] },
            { title: "Luego conversen", bullets: ["Pregunta: \"¿Cómo lo viste tú?\"", "Escucha", "Acuerden un siguiente paso"] },
            { title: "Úsala también para felicitar", bullets: ["Un gracias concreto llega mejor que \"buen trabajo\"", "Corrige en privado", "Evita \"siempre\" y \"nunca\""] }
          ],
          tryIt: "Escribe dos frases SBI sobre momentos reales que viste: una para felicitar un buen trabajo y otra para corregir un problema. Revisa que la parte del comportamiento describa solo lo que viste u oíste.",
          youCanNow: "dar retroalimentación concreta y justa con situación, comportamiento e impacto, y convertirla en un siguiente paso.",
          quickCheck: [
            { objective: "O4", q: "En la retroalimentación SBI, ¿qué es el \"impacto\"?", options: ["Lo que pasó por lo que hizo la persona", "Cuándo y dónde pasó", "Lo que piensas de la persona", "La sanción para la próxima vez"], answer: 0, why: "El impacto es el resultado del comportamiento." },
            { objective: "O4", q: "Un miembro del equipo se quedó tarde para arreglar el pedido de un cliente. ¿Qué le dirías?", options: ["\"Siempre eres genial.\"", "\"Gracias, supongo.\"", "\"Anoche arreglaste el pedido de la Sra. Lee, así que le llegó a tiempo y nos dio las gracias.\"", "Nada; es su trabajo"], answer: 2, why: "SBI también sirve para elogiar: situación, comportamiento e impacto." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manejar el bajo desempeño con justicia",
          minutes: 6,
          goal: "Llevar un problema de desempeño por pasos claros, justos y por escrito.",
          text: [
            "Cuando alguien no está cumpliendo las expectativas, actúa pronto. Esperar casi siempre lo empeora y es injusto con el resto del equipo. Primero revísate a ti: ¿la expectativa era clara? ¿Tenía la capacitación, las herramientas y el tiempo?",
            "Hablen en privado. Usa SBI para nombrar la diferencia entre lo esperado y lo logrado, y luego pregunta qué se lo está impidiendo. A veces hay una causa que no conocías, como un tema de salud o de familia, una herramienta dañada o instrucciones confusas. Acuerden juntos un plan: cómo se ve un buen resultado, qué apoyo vas a dar y una fecha para revisar.",
            "Anota lo que acordaron y haz el seguimiento en esa fecha. Mide a todos con la misma vara. Si las cosas no mejoran, o antes de cualquier amonestación formal o despido, sigue la política de tu organización y habla con recursos humanos o con tu propio jefe. Las reglas cambian según el lugar, así que pide consejo si tienes dudas."
          ],
          steps: ["Revisa: ¿la expectativa era clara y tenía lo que necesitaba?", "Reúnete en privado y nombra la diferencia con SBI.", "Pregunta qué se lo está impidiendo y escucha.", "Acuerden cómo se ve un buen resultado, tu apoyo y una fecha para revisar.", "Anótalo y haz el seguimiento en esa fecha.", "Antes de pasos formales, sigue tu política y habla con RR. HH. o con tu jefe."],
          words: [["Bajo desempeño", "cuando el trabajo de alguien no cumple las expectativas que se fijaron."], ["Plan de mejora", "un acuerdo por escrito sobre lo que debe cambiar, el apoyo que se dará y una fecha para revisar."], ["RR. HH.", "recursos humanos: las personas que se encargan de las contrataciones, las políticas y los asuntos de los empleados."]],
          slides: [
            { title: "Actúa pronto", bullets: ["Esperar lo empeora", "Es injusto con el resto del equipo"] },
            { title: "Primero revísate a ti", bullets: ["¿La expectativa era clara?", "¿Tenía capacitación, herramientas y tiempo?"] },
            { title: "La conversación", bullets: ["En privado, usando SBI", "Pregunta qué se lo está impidiendo", "Acuerden un buen resultado, el apoyo y una fecha"] },
            { title: "Que sea justo", bullets: ["Anota lo que acordaron", "Haz el seguimiento en la fecha", "La misma vara para todos", "Sigue la política; habla con RR. HH. antes de pasos formales"] }
          ],
          tryIt: "Piensa en un problema de desempeño real o inventado. Escribe el plan de mejora en cuatro líneas: la diferencia (en forma SBI), cómo se ve un buen resultado, el apoyo que vas a dar y la fecha para revisar.",
          youCanNow: "manejar un problema de desempeño pronto y con justicia, con una conversación privada, un plan por escrito y un seguimiento.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debes revisar antes de hablar de un problema de desempeño?", options: ["Si la expectativa era clara y tenía lo que necesitaba", "Si a otros tampoco les cae bien", "Si puedes despedirlo hoy", "Si RR. HH. está ocupado"], answer: 0, why: "Primero revísate a ti: expectativas claras, formación, herramientas y tiempo." },
            { objective: "O5", q: "Acordaron un plan de mejora con una fecha de revisión. ¿Qué harías en esa fecha?", options: ["Olvidarlo si las cosas parecen ir bien", "Hacer el seguimiento y anotar lo que pasó", "Dar una amonestación formal sin hablar", "Empezar un plan nuevo con otra persona"], answer: 1, why: "Anota lo que acordaron y haz el seguimiento en esa fecha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reuniones de equipo y reconocimiento",
          minutes: 5,
          goal: "Dirigir una reunión de equipo corta que termine con acciones claras y un agradecimiento concreto.",
          text: [
            "Una buena reunión de equipo tiene un propósito, una agenda enviada con tiempo, una hora de inicio y de fin, y una lista de acciones al final. Si solo necesitas dar noticias, mejor envía un mensaje.",
            "Respeta el horario. Den la vuelta para que hablen las personas más calladas, deja los temas aparte para después y termina leyendo cada acción: quién hará qué y para cuándo. Envía las acciones ese mismo día. Un asistente de IA puede ayudarte a convertir tus notas en una lista ordenada, pero revísala.",
            "El reconocimiento mantiene a la gente motivada. Agradece seguido, pronto y de forma concreta, y di cómo ayudó su trabajo. A algunas personas les gusta que las feliciten en público; otras prefieren unas palabras o una nota en privado. Pregúntales qué prefieren."
          ],
          steps: ["Escribe el propósito y una agenda corta; envíala con tiempo.", "Empieza y termina a tiempo.", "Invita a cada persona a hablar.", "Cierra leyendo las acciones: quién, qué y para cuándo.", "Envía las acciones ese mismo día.", "Da un agradecimiento concreto."],
          words: [["Agenda", "la lista de temas de una reunión, en orden."], ["Acción acordada", "una tarea que se acuerda en una reunión, con una persona responsable y una fecha límite."], ["Reconocimiento", "mostrarles a las personas que notaste y valoras su trabajo."]],
          slides: [
            { title: "Antes de la reunión", bullets: ["Un propósito claro", "Una agenda corta enviada con tiempo", "¿Solo noticias? Mejor envía un mensaje"] },
            { title: "Durante la reunión", bullets: ["Empieza y termina a tiempo", "Invita a todos a hablar", "Deja los temas aparte para después"] },
            { title: "Termina con acciones", bullets: ["Quién hará qué y para cuándo", "Envíalas ese mismo día"] },
            { title: "Reconocimiento", bullets: ["Seguido, pronto y concreto", "Di cómo ayudó su trabajo", "Pregunta si prefieren el agradecimiento en público o en privado"] }
          ],
          tryIt: "Tarea final: escribe tu plan de una página para los \"primeros 30 días\". Incluye expectativas para un puesto, una tarea para delegar, una agenda de reunión uno a uno, un comentario SBI y la agenda de una reunión de 20 minutos que termine con acciones y un agradecimiento concreto.",
          youCanNow: "dirigir una reunión de equipo corta y enfocada, cerrarla con acciones claras y reconocer el buen trabajo de una forma que las personas valoren.",
          quickCheck: [
            { objective: "O6", q: "¿Qué tiene una buena reunión de equipo?", options: ["Sin agenda, para que sea flexible", "Un propósito, una agenda enviada antes, hora de inicio y de fin, y acciones", "Solo habla el jefe", "Sin hora de fin fija"], answer: 1, why: "Estas partes mantienen la reunión corta y útil." },
            { objective: "O6", q: "A un miembro callado del equipo le gusta que le agradezcan en privado. ¿Qué harías?", options: ["Elogiarlo en voz alta en la reunión de todos modos", "No agradecerle", "Agradecerle en el chat del equipo", "Darle un agradecimiento concreto en privado, de palabra o por escrito"], answer: 3, why: "Pregunta a las personas qué reconocimiento les gusta y respétalo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Retroalimentación, desempeño y el equipo",
        questions: [
          { objective: "O4", q: "En situación-comportamiento-impacto, ¿qué es la parte del \"comportamiento\"?", options: ["Tu opinión sobre su actitud", "Lo que otras personas dijeron de ella", "Lo que hizo y tú viste u oíste", "El nombre de su puesto"], answer: 2, why: "El comportamiento es lo que la persona hizo de verdad, descrito con sencillez." },
          { objective: "O4", q: "¿Cuál frase es retroalimentación SBI?", options: ["\"Eres flojo.\"", "\"En la reunión del martes terminaste el presupuesto antes, así que pudimos aprobarlo a tiempo.\"", "\"Siempre lo arruinas.\"", "\"Buen trabajo, supongo.\""], answer: 1, why: "Dice la situación, el comportamiento y el impacto." },
          { objective: "O5", q: "Antes de hablar de un problema de desempeño, ¿qué deberías revisar primero?", options: ["Si la expectativa era clara y tenía lo que necesitaba", "Si a los demás les cae mal", "Si puedes despedirlo hoy", "Sus redes sociales"], answer: 0, why: "Muchos problemas vienen de expectativas poco claras o de herramientas que faltan." },
          { objective: "O5", q: "El trabajo de un miembro del equipo sigue empeorando. ¿Cuándo deberías actuar?", options: ["En la evaluación anual", "Nunca; tal vez se arregle solo", "Solo cuando otros se quejen", "Pronto, en una conversación privada"], answer: 3, why: "Actuar pronto es más amable y más justo que esperar." },
          { objective: "O6", q: "¿Con qué debería terminar toda reunión de equipo?", options: ["Un discurso largo", "Acciones: quién hará qué y para cuándo", "Otra reunión", "Nada por escrito"], answer: 1, why: "Las acciones claras convierten la conversación en trabajo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Dirigir equipos",
    questions: [
      { objective: "O1", q: "Una jefa nueva sigue haciendo ella misma todas las tareas difíciles. ¿Cuál es el riesgo principal?", options: ["El equipo aprende más rápido", "Los clientes están más contentos", "El equipo deja de crecer y ella termina agotada", "Nada cambia"], answer: 2, why: "Hacerlo todo tú frena el crecimiento del equipo." },
      { objective: "O1", q: "¿Cuál es parte del trabajo principal de un jefe?", options: ["Quitar lo que frena al equipo", "Hacer cada tarea solo", "Evitar las conversaciones difíciles", "Mantener las metas en secreto"], answer: 0, why: "Los jefes quitan obstáculos para que el equipo pueda trabajar." },
      { objective: "O1", q: "Ahora diriges a quienes eran tus compañeros. Una buena forma de hacerlo es:", options: ["Hacer como si nada hubiera cambiado", "Ayudar solo a tus amigos", "Evitar hablar con ellos", "Ser amable, justo con todos y honesto sobre el cambio en tu papel"], answer: 3, why: "La justicia y la honestidad crean confianza en un puesto nuevo." },
      { objective: "O2", q: "Una expectativa clara incluye:", options: ["Solo una sensación", "El resultado, qué tan bien tiene que estar y para cuándo", "Una amenaza", "Una historia larga"], answer: 1, why: "El resultado, la calidad y la fecha límite la hacen clara." },
      { objective: "O2", q: "Delegar significa:", options: ["Pasar solo las tareas que no te gustan", "Vigilar cada paso", "Darle a alguien una tarea y la autoridad para hacerla", "Hacerlo tú más tarde"], answer: 2, why: "Delegar de verdad incluye la autoridad para actuar." },
      { objective: "O2", q: "Cuando delegas, debes decir qué puede la persona:", options: ["Decidir por su cuenta", "No preguntarte nunca", "Ocultarte", "Saltarse"], answer: 0, why: "Los límites para decidir le permiten actuar sin esperarte." },
      { objective: "O3", q: "¿Cada cuánto se suelen tener las reuniones uno a uno?", options: ["Una vez al año", "Solo cuando hay un problema", "Nunca", "Cada una o dos semanas"], answer: 3, why: "Las reuniones regulares detectan problemas a tiempo." },
      { objective: "O3", q: "Una buena forma de empezar una reunión uno a uno es:", options: ["\"Esto es lo que hiciste mal.\"", "\"¿Qué tienes en mente?\"", "\"Hagamos esto rápido.\"", "Revisar tu teléfono"], answer: 1, why: "Hace que la reunión sea suya." },
      { objective: "O3", q: "En una reunión uno a uno prometiste arreglar un escáner dañado. ¿Qué haces?", options: ["Lo anotas y lo haces", "Te olvidas", "Le pides a la persona que lo arregle", "Esperas a que te lo vuelva a pedir"], answer: 0, why: "Cumplir las promesas crea confianza." },
      { objective: "O4", q: "¿Qué significa SBI?", options: ["Sermonear, buscar culpables, insistir", "Saber, balancear, idear", "Situación, comportamiento, impacto", "Saludar, bromear, informar"], answer: 2, why: "Situación, comportamiento e impacto (siglas en inglés)." },
      { objective: "O4", q: "¿Dónde se suele dar la retroalimentación para corregir?", options: ["Frente a todo el equipo", "En redes sociales", "En un chat de grupo", "En privado"], answer: 3, why: "Corregir en privado protege la dignidad." },
      { objective: "O4", q: "Después de dar retroalimentación SBI, el siguiente paso es:", options: ["Irte", "Preguntar cómo lo ve y acordar un siguiente paso", "Repetirla más fuerte", "Contárselo al equipo"], answer: 1, why: "Una conversación de ida y vuelta lleva al cambio." },
      { objective: "O4", q: "¿Qué palabra deberías evitar en la retroalimentación?", options: ["\"Hoy\"", "\"Gracias\"", "\"Siempre\"", "\"Porque\""], answer: 2, why: "\"Siempre\" y \"nunca\" exageran y ponen a la gente a la defensiva." },
      { objective: "O5", q: "El rendimiento de un trabajador baja después de años de buen trabajo. ¿Qué deberías preguntar en una conversación privada?", options: ["\"¿Qué se te está interponiendo?\"", "\"¿Por qué eres tan malo?\"", "\"¿Quieres renunciar?\"", "Nada; solo haz un reporte en su contra"], answer: 0, why: "Puede haber una causa que no conoces." },
      { objective: "O5", q: "Un plan de mejora debería incluir:", options: ["Solo una advertencia", "Cómo se ve un buen resultado, el apoyo que darás y una fecha para revisar", "Ninguna fecha", "Una lista de sus defectos"], answer: 1, why: "Metas claras, apoyo y una fecha lo hacen justo." },
      { objective: "O5", q: "Antes de una amonestación formal o un despido, deberías:", options: ["Publicarlo en el chat del equipo", "Actuar solo de inmediato", "Pedirle al equipo que vote", "Seguir tu política y hablar con RR. HH. o con tu jefe"], answer: 3, why: "Las políticas y las leyes cambian; pide consejo primero." },
      { objective: "O6", q: "La reunión es solo para dar noticias. ¿Qué es mejor?", options: ["Una reunión de dos horas", "Enviar un mensaje", "Cancelar todas las reuniones para siempre", "Leer las noticias en voz alta"], answer: 1, why: "Guarda las reuniones para conversar y decidir." },
      { objective: "O6", q: "Dos personas nunca hablan en las reuniones. ¿Qué ayuda?", options: ["Dar la vuelta para que todos tengan su turno", "Ignorarlas", "Señalarlas con dureza", "Hacer reuniones más largas"], answer: 0, why: "Dar la vuelta invita a participar a los más callados." },
      { objective: "O6", q: "¿Cuándo deberías enviar las acciones acordadas en la reunión?", options: ["El mes que viene", "Nunca", "Solo si alguien las pide", "Ese mismo día"], answer: 3, why: "Un seguimiento rápido mantiene las acciones en marcha." },
      { objective: "O6", q: "¿Cuál es el mejor reconocimiento?", options: ["\"Buen trabajo.\"", "Nada, porque es su trabajo", "\"Tu llamada al proveedor hizo que el pedido llegara un día antes, así que no nos quedamos sin producto.\"", "Un correo al grupo sin detalles"], answer: 2, why: "Un agradecimiento concreto que dice el impacto es el que más significa." }
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
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Expectativas claras",
        objective: "O2",
        notYet: "La expectativa es vaga, como \"mantén todo ordenado\".",
        meets: "Dice el resultado, qué tan bien tiene que estar y para cuándo.",
        exceeds: "También dice por qué importa el resultado."
      },
      {
        name: "Tarea delegada",
        objective: "O2",
        notYet: "La tarea no tiene fecha límite ni seguimiento.",
        meets: "Indica el resultado, la fecha límite, lo que la persona puede decidir y un seguimiento.",
        exceeds: "Ajusta la entrega a la experiencia de la persona."
      },
      {
        name: "Agenda de la reunión uno a uno",
        objective: "O3",
        notYet: "La agenda son solo informes de avance.",
        meets: "Empieza con lo que la persona tiene en mente y cubre avances, obstáculos y crecimiento.",
        exceeds: "Incluye una forma de dar seguimiento a lo que prometes."
      },
      {
        name: "Retroalimentación SBI",
        objective: "O4",
        notYet: "La retroalimentación es sobre la persona, o usa \"siempre\" o \"nunca\".",
        meets: "Nombra la situación, un comportamiento concreto y su impacto.",
        exceeds: "Termina con una pregunta que invita a dar su punto de vista y con un siguiente paso."
      },
      {
        name: "Reunión de equipo y agradecimiento",
        objective: "O6",
        notYet: "No hay acciones al final, o el agradecimiento es general.",
        meets: "Una agenda de 20 minutos que termina con quién hará qué y para cuándo, y un agradecimiento concreto.",
        exceeds: "Da su turno a las personas más calladas y planea enviar las acciones ese mismo día."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que tienen reuniones uno a uno regulares en los 30 días siguientes (encuesta de seguimiento)",
      "Miembros del equipo que dicen tener expectativas más claras y retroalimentación más concreta",
      "Personas que toman otro curso de liderazgo de Koach Learn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para ver las lecciones",
      "Papel o un documento para el plan de una página de los \"primeros 30 días\"",
      "Un equipo que diriges o que conoces bien, para usarlo como ejemplo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "En grupo, respondan juntos la prueba inicial y luego pide a las parejas que practiquen en voz alta la retroalimentación SBI con situaciones inventadas.",
      "Hagan un juego de roles de una reunión uno a uno en la que el \"miembro del equipo\" empiece con lo que tiene en mente.",
      "Recuerda a los participantes que las amonestaciones formales y los despidos siguen la política de su propia organización y de recursos humanos.",
      "Pide a los participantes que no compartan nombres reales ni detalles privados de miembros de su equipo en el trabajo en grupo.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

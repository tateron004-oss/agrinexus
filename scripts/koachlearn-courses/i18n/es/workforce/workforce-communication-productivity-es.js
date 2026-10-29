"use strict";

// Koach Learn course (Spanish translation of workforce/workforce-communication-productivity.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-communication-productivity-es",
  lang: "es",
  translationOf: "workforce-communication-productivity",
  category: "Workforce Development",
  name: "Comunicación y productividad en el trabajo",
  skills: "Escribir mensajes de trabajo claros, Hacer la entrega de un turno o una tarea, Pedir ayuda y dar avances, Ordenar por prioridad una lista de pendientes, Planear tu semana con bloques de tiempo, Usar la IA como ayudante, no como reemplazo",
  outcome: "comunicarte con claridad y hacer el trabajo correcto en tu empleo: escribir un mensaje claro con lo principal primero, hacer una entrega completa, enviar un avance corto, ordenar una lista de pendientes por importancia y urgencia, y planear una semana con bloques de tiempo, usando la IA para ayudarte a redactar y organizar.",
  about: [
    "Este curso es para personas que trabajan o buscan trabajo en cualquier campo: tiendas, almacenes, apoyo en salud, oficina, atención al cliente, oficios. La comunicación clara y los buenos hábitos con el tiempo están entre las habilidades que más valoran los empleadores, y ayudan en cualquier trabajo.",
    "Vas a practicar escribir mensajes que se entienden a la primera, entregar el trabajo sin que se pierda nada, mantener informado a tu jefe y decidir qué hacer primero cuando todo parece urgente. Un asistente de IA te ayuda a redactar y organizar; tú pones los datos y el criterio.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Sigue las reglas de tu trabajo sobre qué herramientas de IA puedes usar y no pongas información confidencial."
  ],
  finalTask: "Completa un kit de comunicación y productividad de una semana: un mensaje de trabajo claro con lo principal primero, una entrega de turno o tarea usando la lista de entrega, un avance con el formato Hecho / Siguiente / Bloqueado, una lista de pendientes ordenada en los cuatro cuadros de urgente/importante y un plan con bloques de tiempo para la próxima semana. Usa la IA para ayudarte a redactar al menos dos y revisa cada dato.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que trabajan y personas que buscan empleo en cualquier campo: tiendas, almacenes, apoyo en salud, oficina, atención al cliente y oficios.",
    startingPoint: "Envían mensajes de texto y correos y llevan algún tipo de lista de pendientes. Muchos escriben mensajes que esconden lo principal, hacen entregas incompletas y planean la semana según lo que sea urgente. Algunos han probado un asistente de IA.",
    gap: "Comunicarse con claridad y manejar el tiempo están entre las habilidades que más valoran los empleadores, y las entregas incompletas y los mensajes poco claros causan errores. Necesitan formatos sencillos y repetibles para mensajes, entregas y avances, una forma de elegir lo que importa y un plan semanal, usando la IA para redactar pero manteniendo su propio criterio al mando.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: un teléfono inteligente o una computadora; el calendario del teléfono o una agenda de papel",
      "Privacidad y política: ningún dato privado de clientes o pacientes en herramientas de IA, salvo que el trabajo apruebe el sistema; las reglas de IA del trabajo van primero",
      "Quienes trabajan por turnos controlan poco su horario, así que los planes se arman alrededor de los turnos fijos",
      "Tiempo: lecciones de unos 5 minutos que caben en un día de trabajo"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un mensaje que tienes que enviar en el trabajo", action: "escribir el mensaje con lo principal primero y una petición clara con fecha límite", standard: "sobre un solo tema y con cada dato revisado" },
    { id: "O2", condition: "Al final de un turno o una tarea", action: "hacer una entrega completa usando la lista de cinco secciones", standard: "con los pendientes y lo que hay que vigilar, y sin datos privados en herramientas no aprobadas" },
    { id: "O3", condition: "Cada semana, o cuando estés atascado", action: "escribir un avance con Hecho / Siguiente / Bloqueado y pedir ayuda temprano", standard: "con lo que intentaste, lo que necesitas y para cuándo" },
    { id: "O4", condition: "Con al menos diez tareas", action: "ordenarlas en los cuatro cuadros de urgente e importante y elegir tus tres principales", standard: "preguntando a tu jefe cuando no sepas qué va primero" },
    { id: "O5", condition: "Para la próxima semana", action: "crear un plan con bloques de tiempo que incluya tus turnos, tus tareas importantes, bloques para mensajes y tiempo de margen", standard: "ajustado a tu vida real" },
    { id: "O6", condition: "Cuando uses la IA para ayudarte en tu trabajo", action: "elegir qué partes redacta la IA y revisar cada dato antes de enviar", standard: "usando solo herramientas aprobadas y dejando fuera los datos confidenciales" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comunicarte con claridad",
      lessons: [
        {
          objectives: ["O1"],
          title: "Lo principal primero: mensajes de trabajo claros",
          minutes: 5,
          goal: "Escribir un mensaje de trabajo con lo principal primero y una petición clara.",
          text: [
            "La gente ocupada lee la primera línea y hojea el resto. Pon primero lo principal o lo que pides, luego los detalles, y después qué necesitas y para cuándo. Ejemplo: \"¿Me puedes cubrir el turno del sábado de 8 a 4? Tengo una emergencia familiar. Por favor responde antes del jueves al mediodía.\"",
            "Que sea corto: un tema por mensaje, frases cortas y viñetas para las listas. Usa un asunto claro en el correo: \"Necesito cobertura: turno sáb 8-4\".",
            "Un asistente de IA puede convertir notas sueltas en un mensaje claro: \"Reescribe esto con lo principal primero, en menos de 80 palabras, amable y directo.\" Tú revisas los datos, los nombres y las horas."
          ],
          steps: ["Escribe lo principal o lo que pides en una frase.", "Agrega solo los detalles que el lector necesita.", "Di qué necesitas y para cuándo.", "Usa un asunto claro.", "Pide a la IA que lo ajuste y revisa los datos."],
          words: [["Lo principal primero", "poner el mensaje o la petición más importante al inicio."], ["Asunto", "el título corto de un correo."]],
          slides: [
            { title: "Los lectores hojean", bullets: ["Primero lo principal o lo que pides", "Luego los detalles", "Después qué necesitas y para cuándo"] },
            { title: "Que sea corto", bullets: ["Un tema por mensaje", "Frases cortas y viñetas", "Asunto claro: \"Necesito cobertura: sáb 8-4\""] },
            { title: "La IA puede ajustarlo", bullets: ["\"Lo principal primero, menos de 80 palabras\"", "Tú revisas nombres, fechas y horas"] }
          ],
          tryIt: "Toma un mensaje que necesites enviar (o uno de práctica, como pedir un cambio de horario). Reescríbelo con lo principal primero y una fecha límite, pide a la IA que lo ajuste y revisa cada dato.",
          youCanNow: "escribir un mensaje de trabajo corto con lo principal y lo que pides al inicio.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué poner lo principal primero en un mensaje de trabajo?", options: ["Hace el mensaje más largo", "Suena más amable", "La gente ocupada lee la primera línea y hojea el resto", "Es una regla legal"], answer: 2, why: "Quien solo ve la primera línea igual se entera de lo que necesitas." },
            { objective: "O1", q: "Necesitas el viernes libre. ¿Qué mensaje envías?", options: ["\"¿Puedo tener el viernes libre por una cita médica? Por favor avísame antes del miércoles.\"", "\"Hola, espero que estés bien, esta semana ha estado pesada y...\"", "\"¿Viernes?\"", "Un mensaje con tres peticiones distintas"], answer: 0, why: "Pone la petición primero, da una razón y una fecha límite, y trata un solo tema." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Entregas en las que no se pierde nada",
          minutes: 5,
          goal: "Hacer una entrega completa de turno o tarea con una lista sencilla.",
          text: [
            "Muchos problemas en el trabajo pasan en las entregas: al final del turno, cuando un compañero sale de permiso o cuando una tarea pasa a otra persona. Una lista corta evita que algo se quede sin hacer.",
            "Una buena entrega cubre: Estado (cómo están las cosas), Pendientes abiertos (lo que no está terminado), Cuidado con (riesgos o problemas), Contactos (a quién llamar) y Siguientes pasos (qué debe hacer primero la siguiente persona).",
            "Puedes dictar tus notas al teléfono o escribirlas rápido y pedir a la IA: \"Convierte estas notas en una entrega con las secciones Estado, Pendientes abiertos, Cuidado con, Contactos y Siguientes pasos.\" Deja fuera los datos privados de clientes, pacientes o empleados, a menos que uses un sistema de trabajo aprobado."
          ],
          steps: ["Escribe o dicta notas sueltas al final del turno o la tarea.", "Organízalas en Estado, Pendientes abiertos, Cuidado con, Contactos y Siguientes pasos.", "Revisa que no falte nada.", "Entrégala y responde preguntas."],
          words: [["Entrega", "pasar el trabajo a otra persona, con la información que necesita."], ["Pendiente abierto", "algo que todavía no está terminado."]],
          slides: [
            { title: "Los problemas pasan en las entregas", bullets: ["Al final del turno", "Permisos o vacaciones", "Una tarea que pasa a otra persona"] },
            { title: "Lista de entrega", bullets: ["Estado y pendientes abiertos", "Cuidado con (riesgos)", "Contactos y siguientes pasos"] },
            { title: "La IA organiza tus notas", bullets: ["Dicta o escribe notas sueltas", "Pide las cinco secciones", "Deja fuera los datos privados"] }
          ],
          tryIt: "Escribe una entrega de tu trabajo actual o anterior (o de un turno de almacén de práctica) con las cinco secciones. Usa la IA para organizar tus notas sueltas y revisa que no falte nada.",
          youCanNow: "hacer una entrega completa para que la siguiente persona sepa qué hacer.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué importan las entregas?", options: ["Hacen más largos los turnos", "Son solo para los jefes", "Reemplazan la capacitación", "Muchos problemas pasan cuando el trabajo cambia de manos"], answer: 3, why: "La información se pierde cuando el trabajo cambia de manos, así que una lista la mantiene completa." },
            { objective: "O2", q: "Estás entregando un turno y una tarima está muy inclinada. ¿Dónde lo pones?", options: ["En ningún lado; la próxima persona la verá", "En \"Cuidado con\" de tu entrega", "En un mensaje a un amigo", "Solo en tu cabeza"], answer: 1, why: "Los problemas de seguridad y lo que hay que vigilar van en la entrega para que la siguiente persona actúe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Avances y cómo pedir ayuda",
          minutes: 4,
          goal: "Enviar un avance corto y pedir ayuda temprano y con claridad.",
          text: [
            "A los jefes les gusta saber cómo vas antes de tener que preguntar. Un avance de tres líneas funciona: Hecho (lo que terminaste), Siguiente (lo que vas a hacer después), Bloqueado (lo que te detiene y lo que necesitas).",
            "Pide ayuda temprano, no en la fecha límite. Di qué intentaste, qué necesitas y para cuándo: \"Reinicié el escáner y revisé el cable. Sigue sin conectarse. ¿Puede IT revisarlo antes de las 2 pm?\"",
            "La IA te puede ayudar a encontrar las palabras cuando un mensaje se siente incómodo, como pedir más tiempo o contarle a tu jefe sobre un error. Que sea honesto y corto."
          ],
          steps: ["Escribe Hecho, Siguiente, Bloqueado.", "Para cada bloqueo, di qué intentaste y qué necesitas.", "Envíalo antes de que te pregunten.", "Pide ayuda temprano con una fecha límite clara."],
          words: [["Avance", "un informe corto sobre cómo va el trabajo."], ["Bloqueado", "sin poder seguir hasta que algo se arregle o alguien ayude."]],
          slides: [
            { title: "Avance de tres líneas", bullets: ["Hecho", "Siguiente", "Bloqueado"] },
            { title: "Pide ayuda temprano", bullets: ["Qué intentaste", "Qué necesitas", "Para cuándo"] },
            { title: "Mensajes difíciles", bullets: ["Pedir más tiempo; avisar de un error", "La IA ayuda a encontrar las palabras", "Que sea honesto y corto"] }
          ],
          tryIt: "Escribe un avance Hecho / Siguiente / Bloqueado de esta semana (real o de práctica). Incluye una petición de ayuda clara con lo que intentaste y una fecha límite.",
          youCanNow: "enviar avances claros y pedir ayuda temprano.",
          quickCheck: [
            { objective: "O3", q: "¿Qué significa \"Bloqueado\" en un avance?", options: ["No puedes seguir hasta que algo se arregle", "Terminaste la tarea", "Estás en tu descanso", "Bloqueaste el correo de un compañero"], answer: 0, why: "Bloqueado le dice a tu jefe qué te está deteniendo para que pueda ayudarte." },
            { objective: "O3", q: "Llevas un día atascado en una tarea que se entrega mañana. ¿Qué haces?", options: ["Seguir intentando solo sin decir nada", "Esperar a que pase la fecha límite", "Pedir ayuda ahora, diciendo qué intentaste, qué necesitas y para cuándo", "Saltarte la tarea"], answer: 2, why: "Pedir ayuda temprano y con detalles da tiempo a los demás para ayudar antes de la fecha límite." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Comunicarte con claridad",
        questions: [
          { objective: "O1", q: "¿Dónde va lo principal en un mensaje de trabajo?", options: ["Al final", "Al inicio", "Escondido en medio", "En ningún lado"], answer: 1, why: "Los lectores ocupados ven la primera línea." },
          { objective: "O1", q: "¿Cuál es el asunto más claro?", options: ["\"Cosas\"", "\"Hola\"", "\"Pregunta\"", "\"Necesito cobertura: turno sáb 8-4\""], answer: 3, why: "Dice el tema y lo que pides." },
          { objective: "O2", q: "¿Qué va en una entrega?", options: ["Pendientes abiertos y de qué tener cuidado", "Tu contraseña de redes sociales", "Chismes", "Nada"], answer: 0, why: "La siguiente persona necesita el estado, los riesgos y los siguientes pasos." },
          { objective: "O3", q: "¿Cuáles son las tres líneas de un avance?", options: ["Sí, No, Tal vez", "Hola, Cómo estás, Adiós", "Hecho, Siguiente, Bloqueado", "Inicio, Alto, Pausa"], answer: 2, why: "Ese formato muestra el avance y lo que necesitas." },
          { objective: "O3", q: "¿Cuándo debes pedir ayuda?", options: ["Nunca", "Solo después de la fecha límite", "Temprano, con lo que intentaste y una fecha límite", "Solo adivinando"], answer: 2, why: "Pedir temprano da tiempo para arreglar problemas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer el trabajo correcto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ordenar tus pendientes: urgente o importante",
          minutes: 5,
          goal: "Ordenar las tareas en cuatro cuadros y decidir qué hacer primero.",
          text: [
            "Cuando todo parece urgente, ordénalo. Dibuja cuatro cuadros: Urgente e importante (hazlo ya), Importante pero no urgente (agéndalo), Urgente pero no importante (delégalo o hazlo rápido), Ninguno (déjalo o para después). A esto se le suele llamar la matriz de Eisenhower.",
            "Las tareas importantes se conectan con tus metas o con las funciones principales de tu trabajo: seguridad, clientes, fechas límite que puso tu jefe. Las tareas urgentes tienen una fecha límite cercana o alguien esperando.",
            "Puedes pegar tu lista de pendientes (sin datos confidenciales) en la IA y pedirle que sugiera los cuadros. Luego decide tú: sabes lo que espera tu jefe. Si tienes dudas, pregúntale a tu jefe qué va primero."
          ],
          steps: ["Haz una lista de todas tus tareas.", "Pregúntate: ¿es importante? ¿Es urgente?", "Pon cada una en uno de los cuatro cuadros.", "Haz el cuadro 1, agenda el 2, delega o haz rápido el 3, deja el 4.", "Si tienes dudas, pregunta a tu jefe."],
          words: [["Urgente", "necesita atención pronto, con una fecha límite cercana o alguien esperando."], ["Importante", "conectado con tus funciones principales o tus metas."], ["Matriz de Eisenhower", "una forma de ordenar tareas en cuatro cuadros según si son urgentes e importantes."]],
          slides: [
            { title: "Cuatro cuadros", bullets: ["Urgente + importante: hazlo ya", "Importante, no urgente: agéndalo", "Urgente, no importante: delega o hazlo rápido", "Ninguno: déjalo o para después"] },
            { title: "Qué lo hace importante", bullets: ["Seguridad y clientes", "Funciones principales y fechas de tu jefe"] },
            { title: "La IA sugiere, tú decides", bullets: ["Pega tu lista sin datos confidenciales", "Revisa tú los cuadros", "¿Dudas? Pregunta a tu jefe"] }
          ],
          tryIt: "Haz una lista de al menos diez tareas de esta semana. Ordénalas en los cuatro cuadros (pide a la IA un primer intento si quieres) y elige tus tres principales para mañana.",
          youCanNow: "ordenar una lista de pendientes por urgente e importante y elegir qué hacer primero.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace importante a una tarea?", options: ["Que alguien la pidió en voz alta", "Que se conecta con tus funciones principales, la seguridad o tus metas", "Que es el correo más nuevo", "Que es la más fácil"], answer: 1, why: "Las tareas importantes se conectan con tus funciones principales, la seguridad y tus metas." },
            { objective: "O4", q: "Una tarea no es urgente ni importante. ¿Qué haces con ella?", options: ["Hacerla primero", "Ponerla para esta mañana", "Pedirle a un compañero que la haga ahora mismo", "Dejarla o hacerla después"], answer: 3, why: "Las tareas del cuadro 4 se dejan o se hacen después para que el tiempo vaya a lo que importa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear tu semana con bloques de tiempo",
          minutes: 5,
          goal: "Planear una semana apartando tiempo para el trabajo importante.",
          text: [
            "Una lista de pendientes dice qué; un calendario dice cuándo. Trabajar con bloques de tiempo significa poner las tareas en horas fijas de tu calendario, como \"martes 9-10: terminar el informe de inventario\".",
            "Aparta primero las tareas importantes pero no urgentes, porque son las que se quedan a un lado. Agrega bloques cortos para correos y mensajes en lugar de revisarlos todo el día. Deja algo de tiempo libre para imprevistos.",
            "Pide a la IA: \"Estos son mis turnos y mis tareas con el tiempo que calculo para cada una. Haz un plan con bloques de tiempo para la próxima semana con tiempo de margen.\" Luego ajústalo a tu vida real: traslados, familia, descansos."
          ],
          steps: ["Escribe tus horarios fijos: turnos, reuniones, familia.", "Calcula cuánto toma cada tarea.", "Aparta primero las tareas importantes.", "Agrega bloques cortos para mensajes y tiempo de margen.", "Pide a la IA un borrador y ajústalo."],
          words: [["Bloques de tiempo", "poner las tareas en horas fijas de tu calendario."], ["Tiempo de margen", "tiempo libre que se deja para imprevistos y retrasos."]],
          slides: [
            { title: "La lista dice qué; el calendario, cuándo", bullets: ["\"Martes 9-10: terminar el informe de inventario\""] },
            { title: "Cómo apartar el tiempo", bullets: ["Primero lo importante pero no urgente", "Bloques cortos para correos y mensajes", "Deja tiempo de margen"] },
            { title: "La IA arma un borrador de la semana", bullets: ["Dale turnos, tareas y tiempos", "Ajústalo a traslados, familia y descansos"] }
          ],
          tryIt: "Haz un plan con bloques de tiempo para la próxima semana con tus turnos, tres tareas importantes, dos bloques para mensajes y tiempo de margen. Usa la IA para un primer borrador si quieres.",
          youCanNow: "planear una semana con bloques de tiempo para que el trabajo importante se haga.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es el tiempo de margen?", options: ["Tiempo para revisar redes sociales", "Tiempo extra para reuniones", "Tiempo libre en tu plan para sorpresas y retrasos", "Horas extra"], answer: 2, why: "El tiempo de margen evita que una sorpresa arruine todo el plan." },
            { objective: "O5", q: "El plan semanal de la IA pone una tarea durante tu turno del martes. ¿Qué haces?", options: ["Moverla a una hora que encaje con tu horario real", "Seguir el plan de la IA de todos modos", "Faltar a tu turno", "Borrar el plan"], answer: 0, why: "La IA hace el borrador del plan, pero tú lo ajustas a tu vida real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "La IA como ayudante, no como reemplazo",
          minutes: 5,
          goal: "Usar la IA en las partes correctas de tu trabajo y mantener tu criterio al mando.",
          text: [
            "La IA ayuda más con los primeros borradores, organizar notas, resumir y encontrar palabras para mensajes difíciles. No conoce tu lugar de trabajo, a tus compañeros ni lo que tu jefe quiso decir de verdad, y se puede equivocar.",
            "Buenos hábitos: dale tus notas, no tu forma de pensar; pide un borrador corto; revisa cada dato; haz que suene a ti; sigue las reglas de IA de tu trabajo; deja fuera la información confidencial y personal.",
            "Lleva la cuenta de una cosa: el tiempo que ahorras. Si una herramienta te ahorra 20 minutos al día en mensajes, ese es tiempo para la parte humana de tu trabajo, que es donde destacas."
          ],
          steps: ["Usa la IA para borradores, organizar y resumir.", "Revisa los datos y haz que suene a ti.", "Sigue las reglas de IA de tu trabajo.", "Anota el tiempo que ahorras cada semana."],
          words: [["Criterio", "tu capacidad de decidir bien con lo que sabes."]],
          slides: [
            { title: "La IA es buena para", bullets: ["Primeros borradores", "Organizar notas y resumir", "Palabras para mensajes difíciles"] },
            { title: "Buenos hábitos", bullets: ["Revisa cada dato", "Haz que suene a ti", "Sigue las reglas; deja fuera los datos privados"] },
            { title: "Tiempo ahorrado = tiempo para la gente", bullets: ["Cuenta los minutos que ahorras", "Úsalos donde destacas"] }
          ],
          tryIt: "Tarea final: arma tu kit de una semana: un mensaje con lo principal primero, una entrega, un avance Hecho/Siguiente/Bloqueado, una lista de pendientes en cuatro cuadros y una semana con bloques de tiempo. Usa la IA para redactar al menos dos y revisa cada dato.",
          youCanNow: "comunicarte con claridad y manejar tu tiempo en el trabajo con la IA como ayudante.",
          quickCheck: [
            { objective: "O6", q: "¿En qué parte de tu trabajo es buena la IA?", options: ["En decidir qué importa más", "En consolar a un cliente molesto", "En saber la fecha límite real de tu jefe", "En los primeros borradores y en organizar notas"], answer: 3, why: "La IA ayuda con borradores y con organizar; el criterio y el trato con la gente siguen siendo tuyos." },
            { objective: "O6", q: "Quieres que la IA limpie unas notas que incluyen el nombre de un paciente. ¿Qué haces?", options: ["Pegarlas en cualquier IA gratuita", "Usar solo una herramienta aprobada, o quitar primero los datos privados", "Publicar las notas en internet", "Enviárselas por correo a un amigo para que las arregle"], answer: 1, why: "Las reglas del trabajo van primero: solo herramientas aprobadas, y los datos confidenciales se quedan fuera." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer el trabajo correcto",
        questions: [
          { objective: "O4", q: "Una tarea es importante pero no urgente. ¿Qué haces?", options: ["La agendas", "La dejas", "La haces al instante siempre", "Se la das a un cliente"], answer: 0, why: "Agendarla protege el trabajo importante." },
          { objective: "O4", q: "¿Qué tarea es urgente e importante?", options: ["Cambiar el fondo de pantalla", "Ordenar correos viejos", "Leer un boletín", "Un peligro de seguridad en el piso ahora mismo"], answer: 3, why: "La seguridad en este momento es urgente e importante." },
          { objective: "O5", q: "¿Qué es trabajar con bloques de tiempo?", options: ["Bloquear a tus compañeros", "Poner las tareas en horas fijas de tu calendario", "Apagar tu teléfono para siempre", "Un deporte"], answer: 1, why: "Define cuándo haces cada tarea." },
          { objective: "O5", q: "¿Por qué dejar tiempo de margen?", options: ["Para imprevistos y retrasos", "Para dormir la siesta", "Porque la IA lo dice", "No sirve"], answer: 0, why: "Siempre hay imprevistos." },
          { objective: "O6", q: "El borrador de la IA dice que tu jefa quiere el informe el viernes, pero ella dijo el miércoles. ¿Qué haces?", options: ["Envías las dos fechas", "Confías en la IA", "Lo corriges a miércoles", "Lo ignoras"], answer: 2, why: "Tú revisas los datos; la IA no sabe lo que se dijo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Comunicación y productividad en el trabajo",
    questions: [
      { objective: "O1", q: "¿Por qué poner lo principal primero?", options: ["Es una ley", "La gente ocupada lee la primera línea y hojea el resto", "Lo hace más largo", "Esconde lo importante"], answer: 1, why: "Las primeras líneas sí se leen." },
      { objective: "O1", q: "Un buen mensaje de trabajo incluye:", options: ["Chismes", "Cada detalle que sabes", "Tu contraseña", "Qué necesitas y para cuándo"], answer: 3, why: "Una petición clara con fecha límite hace que se actúe." },
      { objective: "O1", q: "Un mensaje debe tratar:", options: ["Todo lo del mes", "Diez temas", "Ningún tema", "Un tema"], answer: 3, why: "Un tema lo mantiene claro." },
      { objective: "O2", q: "¿Cuál es una sección de la entrega?", options: ["Comida favorita", "Cuidado con", "Planes del fin de semana", "Lista de contraseñas"], answer: 1, why: "Cuidado con enumera los riesgos." },
      { objective: "O2", q: "Las entregas importan porque:", options: ["Son opcionales", "Son divertidas", "Muchos problemas pasan cuando el trabajo cambia de manos", "Reemplazan la capacitación"], answer: 2, why: "Los huecos en las entregas causan errores." },
      { objective: "O2", q: "Al usar la IA para organizar notas de entrega, deja fuera:", options: ["Datos privados de clientes o pacientes, a menos que uses un sistema aprobado", "Los pendientes abiertos", "Los siguientes pasos", "El puesto de los contactos"], answer: 0, why: "Los datos privados se protegen." },
      { objective: "O3", q: "\"Bloqueado\" en un avance significa:", options: ["Estás en descanso", "Ya terminaste", "No puedes seguir hasta que algo se arregle", "Tu cuenta está bloqueada"], answer: 2, why: "Señala lo que necesitas." },
      { objective: "O3", q: "Una buena petición de ayuda dice:", options: ["Qué intentaste, qué necesitas y para cuándo", "Solo \"¡Ayuda!\"", "Nada", "De quién es la culpa"], answer: 0, why: "Las peticiones claras reciben ayuda más rápido." },
      { objective: "O3", q: "Lo mejor es enviar un avance:", options: ["Nunca", "Antes de que tu jefe tenga que preguntar", "Solo cuando hay problemas", "Una vez al año"], answer: 1, why: "Los avances por iniciativa propia generan confianza." },
      { objective: "O4", q: "Las tareas del cuadro 4 (ni urgentes ni importantes) se deben:", options: ["Hacer cada hora", "Hacer primero", "Dar al director general", "Dejar o hacer después"], answer: 3, why: "Aportan poco valor." },
      { objective: "O4", q: "Las tareas importantes se conectan con:", options: ["Tus funciones principales, la seguridad y tus metas", "Tus programas favoritos", "Correos al azar", "Nada"], answer: 0, why: "Importante significa que importa para tu puesto." },
      { objective: "O4", q: "Si no sabes qué tarea va primero, debes:", options: ["Dejar que la IA decida sola", "Adivinar", "No hacer nada", "Preguntar a tu jefe"], answer: 3, why: "Tu jefe conoce las prioridades." },
      { objective: "O5", q: "¿Qué tareas debes apartar primero en tu calendario?", options: ["Redes sociales", "Las menos importantes", "Las importantes pero no urgentes", "Ninguna"], answer: 2, why: "Son las que se quedan a un lado." },
      { objective: "O5", q: "En lugar de revisar el correo todo el día, puedes:", options: ["No leer nunca el correo", "Usar bloques cortos para mensajes", "Revisarlo cada minuto", "Reenviar todo"], answer: 1, why: "Los bloques protegen tu tiempo de concentración." },
      { objective: "O5", q: "Después de que la IA redacta tu plan semanal, tú:", options: ["Lo ignoras", "Lo sigues al pie de la letra", "Borras tu calendario", "Lo ajustas a tu vida real"], answer: 3, why: "Tú conoces tus traslados, tu familia y tus descansos." },
      { objective: "O6", q: "La IA es buena para:", options: ["Conocer a tus compañeros", "Saber lo que quiso decir tu jefe", "Primeros borradores y organizar notas", "Tener siempre la razón"], answer: 2, why: "Redactar y organizar son sus fortalezas." },
      { objective: "O6", q: "Antes de enviar un borrador de la IA, siempre:", options: ["Revisa cada dato", "Agrega más texto de IA", "Quita tu nombre", "Envíalo sin leer"], answer: 0, why: "La IA se puede equivocar." },
      { objective: "O6", q: "El tiempo que ahorras con la IA se usa mejor en:", options: ["No hacer nada", "La parte humana de tu trabajo", "Más tiempo frente a la pantalla", "Nada"], answer: 1, why: "El trabajo humano es donde destacas." },
      { objective: "O6", q: "¿Qué sigue las reglas de IA del trabajo?", options: ["Usar cualquier aplicación", "Usar solo herramientas aprobadas y dejar fuera los datos confidenciales", "Pegar datos de clientes", "Compartir contraseñas"], answer: 1, why: "Las reglas te protegen a ti y a tu empleador." },
      { objective: "O3", q: "La línea \"Siguiente\" de un avance le dice a tu jefe:", options: ["Lo que vas a hacer después", "Tus planes para comer", "Tus próximas vacaciones", "Nada"], answer: 0, why: "Muestra tu plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      7,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Mensaje con lo principal primero",
        objective: "O1",
        notYet: "Lo principal o la petición queda escondido o falta.",
        meets: "Lo principal va primero, con una petición clara y una fecha límite, sobre un solo tema.",
        exceeds: "Tiene un asunto claro, y el mensaje tiene menos de 100 palabras."
      },
      {
        name: "Entrega completa",
        objective: "O2",
        notYet: "Falta una o más de las cinco secciones.",
        meets: "Las cinco secciones, incluidos los pendientes y lo que hay que vigilar.",
        exceeds: "Cada pendiente dice quién se encarga después."
      },
      {
        name: "Avance",
        objective: "O3",
        notYet: "Falta Hecho, Siguiente o Bloqueado.",
        meets: "Un avance con Hecho / Siguiente / Bloqueado y una petición de ayuda clara.",
        exceeds: "La petición de ayuda dice qué se intentó y para cuándo se necesita."
      },
      {
        name: "Lista de cuatro cuadros y bloques de tiempo",
        objective: "O5",
        notYet: "Las tareas no están ordenadas, o la semana no tiene bloques de tiempo.",
        meets: "Diez tareas en los cuatro cuadros y una semana con turnos, tres tareas importantes, bloques para mensajes y tiempo de margen.",
        exceeds: "Las tareas importantes pero no urgentes se apartan primero."
      },
      {
        name: "IA revisada",
        objective: "O6",
        notYet: "Se enviaron borradores de la IA sin revisarlos, o se usaron datos privados.",
        meets: "La IA ayudó a redactar al menos dos partes, y se revisó cada dato.",
        exceeds: "Anota un dato que corrigió."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen usar en el trabajo mensajes con lo principal primero y avances 30 días después (encuesta de seguimiento)",
      "Supervisores que reportan menos entregas incompletas o fechas límite perdidas",
      "Personas que empiezan otro curso de Koach Learn para el trabajo dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini, o la herramienta que apruebe el trabajo",
      "El calendario del teléfono o una agenda de papel",
      "Mensajes, notas de entrega y listas de tareas de ejemplo sin datos privados",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Usa ejemplos de los propios campos de las personas (tiendas, almacenes, apoyo en salud, oficina) para que los formatos se sientan reales.",
      "Practiquen las entregas en parejas: uno entrega y el otro revisa las cinco secciones.",
      "Recuerda a quienes trabajan en salud y atención al cliente que los datos de pacientes y clientes no van en herramientas de IA no aprobadas.",
      "Quienes trabajan por turnos quizás no controlan su horario; ayúdalos a apartar el tiempo que sí controlan.",
      "Califica el kit de una semana con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

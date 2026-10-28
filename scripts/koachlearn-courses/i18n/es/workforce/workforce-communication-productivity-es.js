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
  chapters: [
    {
      name: "Capítulo 1: Comunicarte con claridad",
      lessons: [
        {
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
          youCanNow: "escribir un mensaje de trabajo corto con lo principal y lo que pides al inicio."
        },
        {
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
          youCanNow: "hacer una entrega completa para que la siguiente persona sepa qué hacer."
        },
        {
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
          youCanNow: "enviar avances claros y pedir ayuda temprano."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Comunicarte con claridad",
        questions: [
          { q: "¿Dónde va lo principal en un mensaje de trabajo?", options: ["Al final", "Al inicio", "Escondido en medio", "En ningún lado"], answer: 1, why: "Los lectores ocupados ven la primera línea." },
          { q: "¿Cuál es el asunto más claro?", options: ["\"Cosas\"", "\"Hola\"", "\"Pregunta\"", "\"Necesito cobertura: turno sáb 8-4\""], answer: 3, why: "Dice el tema y lo que pides." },
          { q: "¿Qué va en una entrega?", options: ["Pendientes abiertos y de qué tener cuidado", "Tu contraseña de redes sociales", "Chismes", "Nada"], answer: 0, why: "La siguiente persona necesita el estado, los riesgos y los siguientes pasos." },
          { q: "¿Cuáles son las tres líneas de un avance?", options: ["Sí, No, Tal vez", "Hola, Cómo estás, Adiós", "Hecho, Siguiente, Bloqueado", "Inicio, Alto, Pausa"], answer: 2, why: "Ese formato muestra el avance y lo que necesitas." },
          { q: "¿Cuándo debes pedir ayuda?", options: ["Nunca", "Solo después de la fecha límite", "Temprano, con lo que intentaste y una fecha límite", "Solo adivinando"], answer: 2, why: "Pedir temprano da tiempo para arreglar problemas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer el trabajo correcto",
      lessons: [
        {
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
          youCanNow: "ordenar una lista de pendientes por urgente e importante y elegir qué hacer primero."
        },
        {
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
          youCanNow: "planear una semana con bloques de tiempo para que el trabajo importante se haga."
        },
        {
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
          youCanNow: "comunicarte con claridad y manejar tu tiempo en el trabajo con la IA como ayudante."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer el trabajo correcto",
        questions: [
          { q: "Una tarea es importante pero no urgente. ¿Qué haces?", options: ["La agendas", "La dejas", "La haces al instante siempre", "Se la das a un cliente"], answer: 0, why: "Agendarla protege el trabajo importante." },
          { q: "¿Qué tarea es urgente e importante?", options: ["Cambiar el fondo de pantalla", "Ordenar correos viejos", "Leer un boletín", "Un peligro de seguridad en el piso ahora mismo"], answer: 3, why: "La seguridad en este momento es urgente e importante." },
          { q: "¿Qué es trabajar con bloques de tiempo?", options: ["Bloquear a tus compañeros", "Poner las tareas en horas fijas de tu calendario", "Apagar tu teléfono para siempre", "Un deporte"], answer: 1, why: "Define cuándo haces cada tarea." },
          { q: "¿Por qué dejar tiempo de margen?", options: ["Para imprevistos y retrasos", "Para dormir la siesta", "Porque la IA lo dice", "No sirve"], answer: 0, why: "Siempre hay imprevistos." },
          { q: "El borrador de la IA dice que tu jefa quiere el informe el viernes, pero ella dijo el miércoles. ¿Qué haces?", options: ["Envías las dos fechas", "Confías en la IA", "Lo corriges a miércoles", "Lo ignoras"], answer: 2, why: "Tú revisas los datos; la IA no sabe lo que se dijo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Comunicación y productividad en el trabajo",
    questions: [
      { q: "¿Por qué poner lo principal primero?", options: ["Es una ley", "La gente ocupada lee la primera línea y hojea el resto", "Lo hace más largo", "Esconde lo importante"], answer: 1, why: "Las primeras líneas sí se leen." },
      { q: "Un buen mensaje de trabajo incluye:", options: ["Chismes", "Cada detalle que sabes", "Tu contraseña", "Qué necesitas y para cuándo"], answer: 3, why: "Una petición clara con fecha límite hace que se actúe." },
      { q: "Un mensaje debe tratar:", options: ["Todo lo del mes", "Diez temas", "Ningún tema", "Un tema"], answer: 3, why: "Un tema lo mantiene claro." },
      { q: "¿Cuál es una sección de la entrega?", options: ["Comida favorita", "Cuidado con", "Planes del fin de semana", "Lista de contraseñas"], answer: 1, why: "Cuidado con enumera los riesgos." },
      { q: "Las entregas importan porque:", options: ["Son opcionales", "Son divertidas", "Muchos problemas pasan cuando el trabajo cambia de manos", "Reemplazan la capacitación"], answer: 2, why: "Los huecos en las entregas causan errores." },
      { q: "Al usar la IA para organizar notas de entrega, deja fuera:", options: ["Datos privados de clientes o pacientes, a menos que uses un sistema aprobado", "Los pendientes abiertos", "Los siguientes pasos", "El puesto de los contactos"], answer: 0, why: "Los datos privados se protegen." },
      { q: "\"Bloqueado\" en un avance significa:", options: ["Estás en descanso", "Ya terminaste", "No puedes seguir hasta que algo se arregle", "Tu cuenta está bloqueada"], answer: 2, why: "Señala lo que necesitas." },
      { q: "Una buena petición de ayuda dice:", options: ["Qué intentaste, qué necesitas y para cuándo", "Solo \"¡Ayuda!\"", "Nada", "De quién es la culpa"], answer: 0, why: "Las peticiones claras reciben ayuda más rápido." },
      { q: "Lo mejor es enviar un avance:", options: ["Nunca", "Antes de que tu jefe tenga que preguntar", "Solo cuando hay problemas", "Una vez al año"], answer: 1, why: "Los avances por iniciativa propia generan confianza." },
      { q: "Las tareas del cuadro 4 (ni urgentes ni importantes) se deben:", options: ["Hacer cada hora", "Hacer primero", "Dar al director general", "Dejar o hacer después"], answer: 3, why: "Aportan poco valor." },
      { q: "Las tareas importantes se conectan con:", options: ["Tus funciones principales, la seguridad y tus metas", "Tus programas favoritos", "Correos al azar", "Nada"], answer: 0, why: "Importante significa que importa para tu puesto." },
      { q: "Si no sabes qué tarea va primero, debes:", options: ["Dejar que la IA decida sola", "Adivinar", "No hacer nada", "Preguntar a tu jefe"], answer: 3, why: "Tu jefe conoce las prioridades." },
      { q: "¿Qué tareas debes apartar primero en tu calendario?", options: ["Redes sociales", "Las menos importantes", "Las importantes pero no urgentes", "Ninguna"], answer: 2, why: "Son las que se quedan a un lado." },
      { q: "En lugar de revisar el correo todo el día, puedes:", options: ["No leer nunca el correo", "Usar bloques cortos para mensajes", "Revisarlo cada minuto", "Reenviar todo"], answer: 1, why: "Los bloques protegen tu tiempo de concentración." },
      { q: "Después de que la IA redacta tu plan semanal, tú:", options: ["Lo ignoras", "Lo sigues al pie de la letra", "Borras tu calendario", "Lo ajustas a tu vida real"], answer: 3, why: "Tú conoces tus traslados, tu familia y tus descansos." },
      { q: "La IA es buena para:", options: ["Conocer a tus compañeros", "Saber lo que quiso decir tu jefe", "Primeros borradores y organizar notas", "Tener siempre la razón"], answer: 2, why: "Redactar y organizar son sus fortalezas." },
      { q: "Antes de enviar un borrador de la IA, siempre:", options: ["Revisa cada dato", "Agrega más texto de IA", "Quita tu nombre", "Envíalo sin leer"], answer: 0, why: "La IA se puede equivocar." },
      { q: "El tiempo que ahorras con la IA se usa mejor en:", options: ["No hacer nada", "La parte humana de tu trabajo", "Más tiempo frente a la pantalla", "Nada"], answer: 1, why: "El trabajo humano es donde destacas." },
      { q: "¿Qué sigue las reglas de IA del trabajo?", options: ["Usar cualquier aplicación", "Usar solo herramientas aprobadas y dejar fuera los datos confidenciales", "Pegar datos de clientes", "Compartir contraseñas"], answer: 1, why: "Las reglas te protegen a ti y a tu empleador." },
      { q: "La línea \"Siguiente\" de un avance le dice a tu jefe:", options: ["Lo que vas a hacer después", "Tus planes para comer", "Tus próximas vacaciones", "Nada"], answer: 0, why: "Muestra tu plan." }
    ]
  }
};

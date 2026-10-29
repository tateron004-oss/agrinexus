"use strict";

// Koach Learn course (Spanish translation of shared/time-management-goals.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "time-management-goals-es",
  lang: "es",
  translationOf: "time-management-goals",
  category: "Athletes",
  name: "Gestión del tiempo y fijación de metas",
  skills: "Escribir metas SMART, Dividir metas en pasos semanales, Planear una semana, Elegir prioridades, Vencer la procrastinación, Seguir tu progreso",
  outcome: "convertir algo que quieres en una meta SMART, dividirla en pasos semanales, planear tu semana alrededor de tus prioridades principales, empezar aunque no tengas ganas y seguir tu progreso con una breve revisión semanal.",
  about: [
    "Todos tenemos las mismas 24 horas. La diferencia está en qué tan claro tenemos lo que queremos y cómo usamos el tiempo que tenemos. La buena noticia: planear es una habilidad, y cualquiera puede aprenderla.",
    "Este curso es para deportistas que combinan entrenamiento y estudios, trabajadores y personas que buscan empleo, dueños de negocios, veteranos que empiezan algo nuevo, jóvenes y cualquier persona que rehace su rutina después de un gran cambio, como salir de prisión. Los ejemplos son cotidianos: buscar trabajo, una meta de ejercicio, un pequeño negocio, ahorrar dinero, terminar una clase.",
    "Vas a escribir una meta real, dividirla en pasos, planear una semana, elegir lo más importante, vencer la procrastinación y seguir tu progreso. Puedes usar papel, un calendario gratis en el teléfono o una app; un asistente de IA puede ayudarte a dividir una meta en pasos, pero el plan lo haces tú. Cada lección dura unos cinco minutos. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe una meta SMART para las próximas cuatro semanas. Divídela en pasos semanales, planea la próxima semana con bloques de tiempo para tus tres prioridades principales, anota lo que realmente haces durante siete días y termina con una revisión semanal de cinco minutos que diga qué funcionó y qué vas a cambiar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas que equilibran entrenamiento y estudios, trabajadores y personas que buscan empleo, dueños de negocios, veteranos que empiezan algo nuevo, jóvenes y cualquiera que reconstruye una rutina después de un gran cambio, como volver a casa después de la prisión.",
    startingPoint: "Tienen cosas que quieren hacer y algo de rutina diaria, pero sus metas suelen ser deseos vagos, sus semanas no están planeadas, las tareas urgentes desplazan a las importantes y posponer las cosas es común.",
    gap: "Sin metas claras ni un plan semanal, la gente se mantiene ocupada sin avanzar en su búsqueda de empleo, su entrenamiento, su negocio o sus ahorros. Necesitan un sistema sencillo para fijar una meta, planear la semana, empezar las tareas difíciles y revisar su progreso, para alcanzar las metas que les importan.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Herramientas: papel, un calendario gratuito en el teléfono o una app; la IA puede sugerir pasos, pero el plan lo hace cada persona",
      "Hay compromisos fijos como turnos de trabajo, entrenamientos, clases, citas o reportes de supervisión",
      "Tiempo: lecciones de unos cinco minutos, más siete días de seguimiento"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un deseo vago", action: "reescribirlo como una meta SMART para las próximas cuatro semanas", standard: "con cada letra de SMART comprobada" },
    { id: "O2", condition: "A partir de tu meta SMART", action: "dividirla en un paso por semana y una siguiente acción pequeña", standard: "con una siguiente acción que puedas hacer en unos 15 minutos" },
    { id: "O3", condition: "Para la próxima semana", action: "planear tu calendario con lo fijo primero, bloques de tiempo para tu meta y un bloque de margen", standard: "con al menos dos bloques para tu meta y un bloque libre de margen" },
    { id: "O4", condition: "Con una lista de diez tareas pendientes", action: "ordenar las tareas por urgentes e importantes y elegir tus tres principales", standard: "marcando con un círculo la que harás primero" },
    { id: "O5", condition: "Con una tarea que has estado posponiendo", action: "empezarla con un primer paso mínimo, sin distracciones y con un temporizador de 10 minutos", standard: "empezando en esa misma sesión" },
    { id: "O6", condition: "Después de siete días de seguimiento", action: "hacer una revisión semanal de cinco minutos y cambiar el plan de la próxima semana", standard: "respondiendo las tres preguntas de la revisión y haciendo al menos un cambio" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Fijar metas y planear",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escribir una meta SMART",
          minutes: 5,
          goal: "Convertir un deseo vago en una meta SMART.",
          text: [
            "\"Ponerme en forma\" o \"conseguir trabajo\" son deseos. Son un buen comienzo, pero no te dicen qué hacer hoy. Una meta SMART convierte un deseo en algo que puedes hacer y medir.",
            "SMART viene del inglés. Cada letra es una pregunta: S, específica (¿qué exactamente?); M, medible (un número o una meta final clara); A, alcanzable (exige esfuerzo, pero es posible); R, relevante (te importa a ti); T, con fecha límite. \"Conseguir trabajo\" se convierte en \"Enviar 10 solicitudes a almacenes o cocinas antes del 30 de noviembre\". \"Ser más rápido\" se convierte en \"Bajar 2 segundos mi tiempo en 400 metros antes del final de la temporada\".",
            "Fíjate que la meta de trabajo trata de lo que tú controlas (enviar solicitudes), no de lo que no controlas (que te contraten). Las metas que dependen de ti te mantienen avanzando aunque otros tarden en responder."
          ],
          steps: ["Escribe tu deseo en pocas palabras.", "Hazlo específico: ¿qué exactamente?", "Agrega un número o una meta final clara.", "Revisa que sea posible con el tiempo y la ayuda que tienes.", "Revisa que te importe.", "Agrega una fecha límite."],
          words: [["Meta SMART", "una meta específica, medible, alcanzable, relevante y con fecha límite (las letras vienen del inglés)."], ["Fecha límite", "el día en que algo debe estar hecho."]],
          slides: [
            { title: "Deseo o meta", bullets: ["Deseo: \"Conseguir trabajo\"", "Meta: \"Enviar 10 solicitudes a cocinas antes del 30 de noviembre\""] },
            { title: "SMART", bullets: ["S y M: específica y medible", "A y R: alcanzable y relevante", "T: tiene una fecha límite"] },
            { title: "Más ejemplos", bullets: ["\"Ahorrar $200 antes del 31 de diciembre\"", "\"Bajar 2 segundos mi tiempo en 400 m antes del fin de temporada\"", "\"Conseguir 5 clientes que paguen este mes\""] },
            { title: "Apunta a lo que controlas", bullets: ["Enviar solicitudes, no que te contraten", "Practicar, no ganar", "Llamar a clientes, no su respuesta"] }
          ],
          tryIt: "Escribe un deseo que tengas ahora mismo. Luego reescríbelo como una meta SMART para las próximas cuatro semanas. Revisa cada letra: S, M, A, R, T.",
          youCanNow: "convertir un deseo vago en una meta SMART con un número y una fecha límite.",
          quickCheck: [
            { objective: "O1", q: "¿Qué significa la M de SMART?", options: ["Medible", "Motivadora", "Mensual", "Máxima"], answer: 0, why: "Medible significa que puedes contar o comprobar si lo hiciste." },
            { objective: "O1", q: "Tu deseo es \"ponerme en forma\". ¿Qué escribirías en su lugar?", options: ["\"Ponerme muy en forma algún día\"", "\"No faltar nunca a un entrenamiento\"", "\"Trotar 20 minutos, 3 días a la semana, durante las próximas 4 semanas\"", "\"Ser la persona más fuerte del gimnasio\""], answer: 2, why: "Esta meta es específica, medible, alcanzable, relevante y con fecha límite." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dividir una meta en pasos semanales",
          minutes: 5,
          goal: "Dividir una meta SMART en pasos semanales y una primera acción pequeña.",
          text: [
            "Una meta de cuatro semanas puede parecer grande. Dividirla en pasos semanales la hace posible. Trabaja hacia atrás desde la fecha límite: ¿qué debe estar hecho al final de la semana 4, la semana 3, la semana 2 y la semana 1?",
            "Para \"Enviar 10 solicitudes antes del 30 de noviembre\": semana 1, actualizar el currículum y hacer una lista de 15 lugares; semana 2, enviar 3; semana 3, enviar 4; semana 4, enviar 3 y dar seguimiento a todas. Para una meta de negocio de 5 clientes nuevos: semana 1, hacer una lista de 30 personas a contactar; semanas 2 a 4, contactar a 10 por semana.",
            "Luego elige la siguiente acción, tan pequeña que la puedas hacer en 15 minutos o menos, como \"Abrir mi currículum y corregir el número de teléfono\". Un asistente de IA puede sugerir pasos si te quedas atascado; pregúntale y luego recorta su lista a lo que cabe en tu semana real."
          ],
          steps: ["Escribe la meta y la fecha límite arriba.", "Trabaja hacia atrás: ¿qué debe estar hecho cada semana?", "Escribe un paso por semana.", "Escribe la siguiente acción pequeña que puedas hacer en 15 minutos.", "Haz esa acción hoy si puedes."],
          words: [["Hito", "un punto de control en el camino hacia una meta, como el final de cada semana."], ["Siguiente acción", "la próxima cosa pequeña y concreta que vas a hacer."]],
          slides: [
            { title: "Las metas grandes pesan", bullets: ["Divídelas en pasos semanales", "Trabaja hacia atrás desde la fecha límite"] },
            { title: "Ejemplo: 10 solicitudes de trabajo", bullets: ["Semana 1: currículum + lista de 15 lugares", "Semanas 2-4: enviar 3, 4 y luego 3", "Semana 4: dar seguimiento a todas"] },
            { title: "La siguiente acción", bullets: ["Pequeña: 15 minutos o menos", "Concreta: abrir, llamar, escribir, corregir", "\"Abrir mi currículum y corregir el número de teléfono\""] },
            { title: "La IA puede ayudar", bullets: ["Pídele que sugiera pasos", "Recorta la lista a lo que cabe en tu semana"] }
          ],
          tryIt: "Toma tu meta SMART de la lección 1. Escribe un paso para cada una de las cuatro semanas, luego escribe la siguiente acción pequeña y hazla ahora si puedes.",
          youCanNow: "dividir una meta en pasos semanales y elegir una siguiente acción pequeña.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es una siguiente acción?", options: ["El resultado final de tu meta", "Un paso pequeño y físico que puedes hacer en unos 15 minutos", "Una meta para el próximo año", "Un premio después de terminar"], answer: 1, why: "Una siguiente acción es mínima y clara, así puedes empezar enseguida." },
            { objective: "O2", q: "Un asistente de IA te da 25 pasos para tu meta. ¿Qué harías?", options: ["Intentar hacer los 25 esta semana", "Ignorar la lista", "Pedirle a la IA que fije la meta por ti", "Recortarla a los pasos que caben en tu semana real"], answer: 3, why: "La IA puede sugerir pasos, pero tú los recortas para que quepan en tu tiempo real." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planear tu semana",
          minutes: 5,
          goal: "Planear una semana con bloques de tiempo para lo más importante.",
          text: [
            "Un plan semanal convierte las metas en tiempo en el calendario. Elige un momento fijo, como el domingo por la tarde, y dedícale 15 minutos.",
            "Primero, anota lo fijo: turnos de trabajo, clases, entrenamientos, citas, reportes de libertad condicional o vigilada, tareas familiares y horas de sueño. Luego agrega bloques de tiempo para los pasos de tu meta, como \"Martes de 6 a 7 pm: enviar 2 solicitudes\". Trata esos bloques como citas contigo mismo.",
            "Deja algo de espacio libre. Las cosas salen mal, los autobuses se retrasan y los niños se enferman. Un plan sin espacio para imprevistos se rompe el primer día. Usa lo que de verdad vas a mirar: una agenda de papel, una pizarra o un calendario gratis en tu teléfono con recordatorios."
          ],
          steps: ["Elige un momento para planear cada semana (por ejemplo, el domingo por la tarde).", "Anota lo fijo: trabajo, estudios, entrenamiento, citas, sueño.", "Agrega bloques de tiempo para el paso de esta semana.", "Deja espacio libre para imprevistos.", "Pon recordatorios para los bloques más importantes."],
          words: [["Bloque de tiempo", "un espacio fijo en tu calendario para una sola tarea."], ["Margen", "tiempo libre que dejas vacío para imprevistos."]],
          slides: [
            { title: "Planea una vez por semana", bullets: ["El mismo momento cada semana, unos 15 minutos", "Por ejemplo, el domingo por la tarde"] },
            { title: "Primero lo fijo", bullets: ["Trabajo, estudios, entrenamiento", "Citas y reportes", "Tareas familiares y sueño"] },
            { title: "Luego los bloques de tu meta", bullets: ["\"Martes de 6 a 7 pm: enviar 2 solicitudes\"", "Trátalo como una cita"] },
            { title: "Deja espacio", bullets: ["Guarda algo de tiempo libre como margen", "Usa papel o el calendario del teléfono", "Pon recordatorios para los bloques clave"] }
          ],
          tryIt: "Planea la próxima semana en papel o en el calendario del teléfono. Anota lo fijo y luego agrega al menos dos bloques de tiempo para el paso de tu meta y un bloque libre como margen.",
          youCanNow: "planear una semana con compromisos fijos, bloques para tu meta y tiempo de margen.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un bloque de margen?", options: ["Tiempo libre que dejas en tu semana para los imprevistos", "Tiempo para tu tarea más importante", "Un bloque de tiempo solo para dormir", "Una reunión con tu jefe"], answer: 0, why: "El tiempo de margen le da espacio a tu plan cuando las cosas salen mal." },
            { objective: "O3", q: "Estás planeando la próxima semana. ¿Qué pondrías primero en el calendario?", options: ["Los bloques de tu meta", "El tiempo para redes sociales", "Lo fijo, como el trabajo, los entrenamientos y las citas", "Nada; planear cada día por la mañana"], answer: 2, why: "Lo fijo va primero, y luego los bloques de tu meta se acomodan alrededor." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Fijar metas y planear",
        questions: [
          { objective: "O1", q: "¿Cuál es una meta SMART?", options: ["\"Estar más sano\"", "\"Manejar mejor el dinero\"", "\"Caminar 30 minutos, 5 días a la semana, durante las próximas 4 semanas\"", "\"Esforzarme más en el trabajo\""], answer: 2, why: "Es específica, medible y tiene un plazo." },
          { objective: "O1", q: "¿Qué significa la T de SMART?", options: ["Con fecha límite", "Difícil", "En equipo", "De confianza"], answer: 0, why: "Una meta SMART tiene una fecha límite." },
          { objective: "O2", q: "Tu meta es enviar 10 solicitudes de trabajo en 4 semanas. ¿Cuál es una buena siguiente acción?", options: ["Que te contraten mañana", "Abrir tu currículum y corregir el número de teléfono", "Pensarlo el próximo mes", "Enviar 100 solicitudes hoy"], answer: 1, why: "Una siguiente acción es pequeña, concreta y se puede hacer ya." },
          { objective: "O3", q: "Cuando planeas una semana, ¿qué va primero en el calendario?", options: ["Extras divertidos", "Nada; ver qué pasa", "Solo los bloques de la meta", "Lo fijo, como trabajo, estudios, entrenamiento y sueño"], answer: 3, why: "Los compromisos fijos van primero; los bloques de la meta se acomodan alrededor." },
          { objective: "O3", q: "¿Por qué dejar tiempo libre de margen en tu semana?", options: ["Las cosas salen mal y los planes necesitan espacio", "Para perder el tiempo", "Porque planear es opcional", "Para no terminar nunca"], answer: 0, why: "Un plan sin espacio se rompe con el primer imprevisto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer que las cosas pasen",
      lessons: [
        {
          objectives: ["O4"],
          title: "Elegir prioridades",
          minutes: 5,
          goal: "Ordenar tareas por urgentes e importantes y elegir tus tres principales.",
          text: [
            "Siempre hay más por hacer que tiempo disponible. Las prioridades deciden qué recibe tu mejor tiempo. Una herramienta sencilla ordena las tareas en cuatro cajas con dos preguntas: ¿Es importante (me acerca a mis metas o protege mi salud, mi familia, mi trabajo o mi libertad)? ¿Es urgente (hay que hacerlo ya)?",
            "Importante y urgente: hazlo ya (un pago de renta que vence hoy, una cita de reporte). Importante, no urgente: agéndalo (estudiar, entrenar, hacer crecer tu negocio). Urgente, no importante: hazlo corto o pásalo a otra persona (muchas llamadas y mensajes). Ninguna de las dos: déjalo (pasar horas en redes sociales).",
            "Casi todo el crecimiento está en la caja de lo importante pero no urgente, y es la más fácil de saltarse. Cada mañana o cada noche, elige tus tres tareas principales para el día siguiente y haz primero la más importante, antes de que los mensajes te distraigan."
          ],
          steps: ["Haz una lista de todo lo que tienes en mente.", "Pregunta de cada cosa: ¿es importante? ¿Es urgente?", "Pon cada tarea en una de cuatro cajas: hacer ya, agendar, hacer corto o pasar a otro, dejar.", "Elige tus tres principales para mañana.", "Haz primero la más importante."],
          words: [["Prioridad", "algo que importa más y se hace primero."], ["Urgente", "hay que hacerlo pronto."], ["Importante", "te acerca a tus metas o protege lo que más te importa."]],
          slides: [
            { title: "Dos preguntas", bullets: ["¿Es importante?", "¿Es urgente?"] },
            { title: "Cuatro cajas", bullets: ["Importante + urgente: hazlo ya", "Importante, no urgente: agéndalo", "Urgente, no importante: hazlo corto o pásalo a otro", "Ninguna de las dos: déjalo"] },
            { title: "El crecimiento está en la caja 2", bullets: ["Estudiar, entrenar, hacer crecer tu negocio", "Es fácil saltarla porque no es urgente", "Ponla en el calendario"] },
            { title: "Tus tres principales", bullets: ["Elige tres tareas para mañana", "Haz primero la más importante", "Antes de que los mensajes te distraigan"] }
          ],
          tryIt: "Escribe diez cosas de tu lista de pendientes. Pon cada una en una de las cuatro cajas. Luego elige tus tres principales para mañana y encierra en un círculo la que harás primero.",
          youCanNow: "ordenar tareas por importantes y urgentes y elegir tus tres principales de cada día.",
          quickCheck: [
            { objective: "O4", q: "¿En qué casilla va una cita de reporte que es hoy?", options: ["Ni urgente ni importante", "Urgente pero no importante", "Importante pero no urgente", "Urgente e importante"], answer: 3, why: "Hay que hacerla hoy y es importante, así que es urgente e importante." },
            { objective: "O4", q: "Tu teléfono no deja de sonar con mensajes de un chat de grupo mientras llenas una solicitud de empleo. ¿Qué harías?", options: ["Responder cada mensaje enseguida", "Terminar primero la solicitud y revisar los mensajes después", "Dejar la solicitud por hoy", "Salirte del chat para siempre"], answer: 1, why: "La mayoría de los mensajes parecen urgentes, pero son menos importantes que tu tarea principal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vencer la procrastinación",
          minutes: 5,
          goal: "Usar trucos sencillos para empezar una tarea que has estado posponiendo.",
          text: [
            "Procrastinar no es ser flojo. Por lo general posponemos las cosas porque la tarea parece demasiado grande, poco clara, aburrida o da miedo. La solución es hacer que empezar sea más fácil.",
            "Cuatro trucos que funcionan. Hazla más pequeña: que el primer paso sea mínimo, como \"escribir una oración de la carta de presentación\". Usa un temporizador: trabaja solo 10 minutos; puedes parar después, pero muchas veces sigues. Quita las distracciones: deja el teléfono en otro cuarto o activa el modo No molestar. Hazla rutina: haz la tarea a la misma hora y en el mismo lugar cada día, o con un compañero de estudio o de entrenamiento.",
            "Sé amable contigo cuando falles. Culparte hace que la tarea se sienta peor. Date cuenta, elige el primer paso mínimo y vuelve a empezar."
          ],
          steps: ["Nombra la tarea que estás evitando.", "Pregunta por qué: ¿muy grande, poco clara, aburrida o da miedo?", "Redúcela a un primer paso mínimo.", "Pon un temporizador de 10 minutos.", "Guarda el teléfono y empieza.", "Cuando suene el temporizador, decide: parar o seguir."],
          words: [["Procrastinación", "posponer algo que sabes que deberías hacer."], ["No molestar", "una opción del teléfono que silencia llamadas y avisos por un tiempo."]],
          slides: [
            { title: "Por qué posponemos las cosas", bullets: ["Muy grande o poco clara", "Aburrida", "Da miedo"] },
            { title: "Haz fácil empezar", bullets: ["Redúcela a un primer paso mínimo", "Pon un temporizador de 10 minutos", "Teléfono lejos o en No molestar"] },
            { title: "Crea un hábito", bullets: ["Misma hora y mismo lugar cada día", "Un compañero de estudio o de entrenamiento"] },
            { title: "Cuando fallas", bullets: ["Sé amable contigo", "Elige el primer paso mínimo", "Vuelve a empezar"] }
          ],
          tryIt: "Elige una tarea que has estado evitando. Redúcela a un primer paso mínimo, guarda el teléfono, pon un temporizador de 10 minutos y empieza ahora mismo.",
          youCanNow: "empezar una tarea que has estado evitando haciéndola más pequeña, usando un temporizador y quitando distracciones.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué la gente suele posponer una tarea?", options: ["Parece demasiado grande, poco clara, aburrida o da miedo", "Tiene demasiado tiempo libre", "La tarea es demasiado fácil", "Ya la terminó"], answer: 0, why: "Las tareas que parecen grandes, poco claras, aburridas o que dan miedo son las que evitamos." },
            { objective: "O5", q: "Llevas meses evitando ordenar tu garaje. ¿Qué harías?", options: ["Esperar a sentirte motivado", "Planear hacerlo todo el próximo sábado", "Levantar una caja, poner un temporizador de 10 minutos y empezar ya", "Pedirle a otra persona que decida"], answer: 2, why: "Un primer paso mínimo y un temporizador hacen más fácil empezar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Seguir tu progreso y la revisión semanal",
          minutes: 5,
          goal: "Seguir tu progreso y ajustar tu plan en una revisión semanal de cinco minutos.",
          text: [
            "Lo que se anota se hace. Un registro sencillo te muestra que avanzas, y eso te motiva a seguir. Puede ser una lista en papel con una marca por cada día que hiciste tu paso, un número en las notas del teléfono (solicitudes enviadas, dinero ahorrado, kilómetros corridos) o una app gratis de hábitos.",
            "Una vez por semana, haz una revisión de cinco minutos. Hazte tres preguntas: ¿Qué logré hacer? ¿Qué me lo impidió? ¿Qué voy a cambiar la próxima semana? Luego planea la próxima semana con lo que aprendiste.",
            "Si sigues fallando un paso, el problema es el plan, no tú. Haz el paso más pequeño, cambia la hora o mueve la fecha límite. Los entrenadores cambian el plan de entrenamiento cuando un deportista no mejora; haz lo mismo contigo. Celebra también los pequeños logros."
          ],
          steps: ["Elige un número o una marca para anotar cada día.", "Anótalo a la misma hora cada día.", "Una vez por semana, pregunta: ¿qué logré, qué me lo impidió, qué voy a cambiar?", "Ajusta el plan de la próxima semana.", "Celebra un pequeño logro."],
          words: [["Registro", "una nota sencilla de lo que hiciste cada día."], ["Revisión semanal", "un breve repaso cada semana para aprender y ajustar tu plan."]],
          slides: [
            { title: "Lo que se anota se hace", bullets: ["Marca una lista, anota un número o usa una app de hábitos", "Ver tu progreso te motiva a seguir"] },
            { title: "Revisión semanal de cinco minutos", bullets: ["¿Qué logré hacer?", "¿Qué me lo impidió?", "¿Qué voy a cambiar la próxima semana?"] },
            { title: "¿Fallas pasos?", bullets: ["Cambia el plan; tu valor no cambia", "Paso más pequeño, otra hora u otra fecha límite"] },
            { title: "Sigue adelante", bullets: ["Celebra los pequeños logros", "Planea la próxima semana con lo que aprendiste"] }
          ],
          tryIt: "Tarea final: anota el paso de tu meta todos los días durante siete días. El día 7, responde por escrito las tres preguntas de la revisión y planea la próxima semana con al menos un cambio.",
          youCanNow: "seguir el progreso de una meta y usar una revisión semanal para ajustar tu plan.",
          quickCheck: [
            { objective: "O6", q: "¿Cuánto debe durar una revisión semanal?", options: ["Unos cinco minutos", "Un día completo", "Dos horas", "No hace falta"], answer: 0, why: "Una revisión corta es fácil de seguir haciendo cada semana." },
            { objective: "O6", q: "Tu seguimiento muestra que nunca hiciste el paso de tu meta las mañanas entre semana. ¿Qué harías?", options: ["Abandonar la meta", "Mantener el mismo plan y tener esperanza", "Culpar a tu horario", "Mover el paso a una hora que te funcionó mejor"], answer: 3, why: "La revisión sirve para cambiar el plan cuando no está funcionando." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer que las cosas pasen",
        questions: [
          { objective: "O4", q: "Estudiar para un examen que es en tres semanas es:", options: ["Urgente y no importante", "Ninguna de las dos", "Importante pero no urgente", "Algo que se puede dejar"], answer: 2, why: "Importa, pero no vence hoy, así que lo agendas." },
          { objective: "O4", q: "¿Qué debes hacer con una tarea importante y urgente, como una cita de reporte hoy?", options: ["Dejarla", "Agendarla para el próximo mes", "Pasársela a un amigo", "Hacerla ya"], answer: 3, why: "Las tareas importantes y urgentes se hacen primero." },
          { objective: "O5", q: "Sigues posponiendo un informe grande. ¿Cuál es un buen primer paso?", options: ["Esperar a sentirte listo", "Escribir solo la primera oración con un temporizador de 10 minutos", "Hacerlo todo de una vez a medianoche", "Revisar primero las redes sociales"], answer: 1, why: "Hacer la tarea más pequeña y usar un temporizador facilita empezar." },
          { objective: "O6", q: "¿Qué pregunta va en una revisión semanal?", options: ["¿Qué voy a cambiar la próxima semana?", "¿A quién puedo culpar?", "¿Cómo puedo evitar planear?", "¿Por qué soy tan malo en esto?"], answer: 0, why: "La revisión mira hacia atrás para ajustar el plan." },
          { objective: "O6", q: "Fallaste tu paso tres semanas seguidas. ¿Qué es lo mejor que puedes hacer?", options: ["Abandonar la meta", "Culparte", "Cambiar el plan: paso más pequeño, otra hora u otra fecha límite", "Seguir con el mismo plan y esperar"], answer: 2, why: "Cuando los pasos siguen fallando, ajusta el plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Gestión del tiempo y fijación de metas",
    questions: [
      { objective: "O1", q: "SMART significa:", options: ["Sencilla, Moderna, Activa, Rápida, Tenaz", "Específica, Medible, Alcanzable, Relevante, con fecha límite", "Sólida, Magnífica, Ágil, Rica, Total", "Semanal, Mensual, Anual, Real, Total"], answer: 1, why: "Esas cinco letras hacen que una meta sea clara y posible." },
      { objective: "O1", q: "¿Qué meta es medible?", options: ["\"Ser mejor jugador\"", "\"Hacer más publicidad\"", "\"Sentirme más feliz\"", "\"Ahorrar $50 por semana durante 8 semanas\""], answer: 3, why: "Tiene un número que puedes comprobar." },
      { objective: "O1", q: "¿Por qué enfocar una meta en lo que controlas?", options: ["Te mantiene avanzando aunque otros tarden", "Es más fácil hacer trampa", "Suena mejor", "Otros lo harán por ti"], answer: 0, why: "Siempre puedes actuar sobre lo que controlas." },
      { objective: "O1", q: "¿Cuál es una mejor meta de búsqueda de empleo?", options: ["\"Que me contraten el viernes\"", "\"Esperar que alguien llame\"", "\"Enviar 3 solicitudes esta semana\"", "\"Pensar en trabajos\""], answer: 2, why: "Enviar solicitudes depende de ti y se puede medir." },
      { objective: "O2", q: "Dividir una meta en pasos semanales funciona mejor cuando:", options: ["Empiezas por la semana más difícil", "Trabajas hacia atrás desde la fecha límite", "Te saltas la primera semana", "Lo guardas todo en la cabeza"], answer: 1, why: "Trabajar hacia atrás muestra qué necesita cada semana." },
      { objective: "O2", q: "Una \"siguiente acción\" debe ser:", options: ["Pequeña, concreta y posible en unos 15 minutos", "Lo más grande posible", "Algo para el próximo año", "Vaga para tener opciones"], answer: 0, why: "Las acciones pequeñas son fáciles de empezar." },
      { objective: "O2", q: "¿Cómo puede ayudarte un asistente de IA con tus metas?", options: ["Cumple la meta por ti", "Decide tus metas", "Reemplaza tu calendario", "Puede sugerir pasos que luego recortas a tu semana real"], answer: 3, why: "La IA puede ayudarte a generar ideas; el plan lo haces tú." },
      { objective: "O3", q: "¿Cuándo es un buen momento para planear tu semana?", options: ["Nunca", "El mismo momento cada semana, como el domingo por la tarde", "Solo cuando algo sale mal", "Una vez al año"], answer: 1, why: "Un momento fijo para planear crea el hábito." },
      { objective: "O3", q: "Un bloque de tiempo es:", options: ["Un espacio fijo en tu calendario para una sola tarea", "Un descanso del trabajo", "Un tipo de alarma", "Un ejercicio deportivo"], answer: 0, why: "Reserva tiempo para una tarea concreta." },
      { objective: "O3", q: "¿Qué va en tu plan antes de los bloques de tu meta?", options: ["Tiempo para redes sociales", "Extras opcionales", "Lo fijo, como turnos de trabajo, entrenamientos y citas", "Nada"], answer: 2, why: "Los compromisos fijos van primero." },
      { objective: "O3", q: "Un plan sin tiempo libre normalmente:", options: ["Funciona perfecto", "Se rompe con el primer imprevisto", "Ahorra más tiempo", "Te hace rico"], answer: 1, why: "El tiempo de margen absorbe los imprevistos." },
      { objective: "O4", q: "Pasar horas en redes sociales suele ser:", options: ["Importante y urgente", "Importante, no urgente", "Urgente, no importante", "Ni importante ni urgente"], answer: 3, why: "No te acerca a tus metas ni hay que hacerlo ya." },
      { objective: "O4", q: "¿Dónde ocurre la mayor parte del crecimiento a largo plazo?", options: ["En las tareas importantes pero no urgentes", "En las tareas urgentes pero no importantes", "En las tareas que dejas", "En tareas al azar"], answer: 0, why: "Aquí están entrenar, estudiar y construir, así que agéndalas." },
      { objective: "O4", q: "¿Por qué hacer primero tu tarea más importante cada día?", options: ["Siempre es la más fácil", "Más tarde los mensajes y los imprevistos te pueden distraer", "Hace el día más largo", "Nadie más la va a revisar"], answer: 1, why: "Hacerla primero la protege de las distracciones." },
      { objective: "O5", q: "A menudo procrastinamos porque una tarea parece:", options: ["Demasiado pequeña y clara", "Demasiado divertida", "Demasiado grande, poco clara, aburrida o da miedo", "Ya hecha"], answer: 2, why: "Esas sensaciones hacen difícil empezar." },
      { objective: "O5", q: "El truco del temporizador de 10 minutos significa:", options: ["Trabajar solo 10 minutos a la semana", "Empezar por 10 minutos y luego decidir si paras o sigues", "Terminar todo en 10 minutos", "Esperar 10 minutos antes de empezar"], answer: 1, why: "Un temporizador corto hace más fácil empezar." },
      { objective: "O5", q: "¿Qué te ayuda a quitar distracciones?", options: ["Dejar todos los avisos activados", "Trabajar frente a la televisión", "Revisar mensajes cada minuto", "Dejar el teléfono en otro cuarto o en No molestar"], answer: 3, why: "Menos distracciones hacen más fácil concentrarse." },
      { objective: "O6", q: "¿Cuál es una forma sencilla de seguir tu progreso?", options: ["Marcar una lista cada día que haces tu paso", "Intentar recordarlo", "Preguntarle a un desconocido", "No anotar nada"], answer: 0, why: "Un registro visible te muestra que avanzas." },
      { objective: "O6", q: "En la revisión semanal preguntas qué lograste, qué te lo impidió y:", options: ["Quién tiene la culpa", "Qué voy a cambiar la próxima semana", "Cómo saltarme la próxima semana", "Qué hicieron los demás"], answer: 1, why: "La revisión lleva a una mejor semana siguiente." },
      { objective: "O6", q: "Tu entrenador cambia tu entrenamiento cuando dejas de mejorar. ¿Qué te enseña eso sobre tus propios planes?", options: ["Nunca cambies un plan", "Abandona cuando el progreso se detiene", "Ajusta el plan cuando no está funcionando", "Los planes no importan"], answer: 2, why: "Los buenos planes cambian según los resultados." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      5,
      8,
      10,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Meta SMART",
        objective: "O1",
        notYet: "La meta es vaga o no tiene fecha límite ni número.",
        meets: "Una meta de cuatro semanas que es específica, medible, alcanzable, relevante y con fecha límite.",
        exceeds: "La meta se enfoca en acciones que la persona controla."
      },
      {
        name: "Pasos semanales",
        objective: "O2",
        notYet: "No hay pasos semanales, o los pasos son demasiado grandes para empezar.",
        meets: "Un paso para cada semana y una siguiente acción pequeña.",
        exceeds: "Los pasos se planearon hacia atrás desde la fecha límite."
      },
      {
        name: "Plan de la semana",
        objective: "O3",
        notYet: "No hay bloques de tiempo, o falta lo fijo.",
        meets: "Lo fijo primero, bloques de tiempo para las tres prioridades principales y un bloque de margen.",
        exceeds: "La tarea más importante está planeada temprano en el día."
      },
      {
        name: "Empezar y dar seguimiento",
        objective: "O5",
        notYet: "Pospuso los pasos, o hay menos de siete días de seguimiento.",
        meets: "Siete días de seguimiento que muestran lo que realmente hizo.",
        exceeds: "Anota qué trucos para empezar le ayudaron en los días difíciles."
      },
      {
        name: "Revisión semanal",
        objective: "O6",
        notYet: "Falta la revisión, o no hay ningún cambio planeado.",
        meets: "Responde qué logró, qué se lo impidió y qué va a cambiar, con al menos un cambio.",
        exceeds: "El cambio ya está puesto en el calendario de la próxima semana."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que hacen una revisión semanal cuatro semanas seguidas (encuesta de seguimiento)",
      "Participantes que cuentan que alcanzaron su meta SMART de cuatro semanas",
      "Participantes que cuentan que aplicaron el sistema a una meta de búsqueda de empleo, entrenamiento, negocio o ahorro",
      "Participantes que empiezan otro curso de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Papel y lápiz, un calendario gratuito en el teléfono o una app de planificación",
      "Un asistente de IA gratuito (opcional) para sugerir pasos",
      "Un temporizador en el teléfono o un reloj",
      "Unos 60 minutos para las lecciones y las comprobaciones, más siete días de seguimiento"
    ],
    facilitatorNotes: [
      "Haz el curso en dos sesiones con una semana de diferencia, para que entre ellas den seguimiento a siete días.",
      "Pide que compartan una meta SMART con un compañero y la revisen letra por letra.",
      "Ayuda a quienes tienen compromisos fijos, como turnos, entrenamientos o reportes de supervisión, a ponerlos primero en el calendario.",
      "Usen juntos un temporizador de grupo de 10 minutos para practicar cómo empezar una tarea pospuesta.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

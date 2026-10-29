"use strict";

// Koach Learn course (Spanish translation of athletes-ai-scouting-recruiting). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Recruiting contact rules and calendars differ by sport and division and change often: the course gives no dates and sends students to ncaa.org, the NCAA Eligibility Center and their coaches.

module.exports = {
  id: "athletes-ai-scouting-recruiting-es",
  lang: "es",
  translationOf: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "Observación y reclutamiento con IA",
  skills: "Armar una lista de universidades objetivo en una hoja de cálculo, Hacer un perfil de reclutamiento y un video de mejores jugadas, Escribir con IA correos personales a entrenadores universitarios, Saber dónde revisar las reglas de elegibilidad y reclutamiento, Organizar notas de observación justas (para entrenadores)",
  outcome: "llevar un plan de reclutamiento organizado: una lista de 15 universidades objetivo en una hoja de cálculo, un perfil de reclutamiento de una página y un video de mejores jugadas de dos a cuatro minutos, y correos personales a tres entrenadores universitarios redactados con IA, revisando las reglas oficiales de elegibilidad y reclutamiento de tu deporte.",
  about: [
    "Este curso es para atletas de secundaria y de colegios comunitarios (junior college) que quieren jugar en la universidad, para sus padres y para los entrenadores que los ayudan. Una sección corta también ayuda a los entrenadores a organizar sus notas de observación de forma justa.",
    "El reclutamiento es un proceso que puedes manejar como un proyecto. Vas a investigar universidades, mostrar tu nivel y tu carácter con claridad, contactar a los entrenadores de forma profesional y registrar todo en un solo lugar, usando la IA para ahorrar tiempo pero nunca para inventar nada.",
    "Las reglas de reclutamiento y elegibilidad dependen de tu deporte y tu división (División I, II y III de la NCAA, NAIA, colegios comunitarios) y cambian seguido. Este curso te muestra dónde revisarlas; confirma siempre con tu entrenador de secundaria, tu orientador y los sitios oficiales."
  ],
  finalTask: "Arma tu plan de reclutamiento: una hoja de cálculo con 15 universidades objetivo (difíciles, adecuadas y probables), un perfil de reclutamiento de una página, un video de mejores jugadas de dos a cuatro minutos con tus mejores clips al principio, y correos personales a tres entrenadores redactados con IA y corregidos por ti. Agrega una nota de qué cuenta de elegibilidad necesitas y dónde revisaste las reglas de reclutamiento de tu deporte.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria y de colegios comunitarios (junior college) que quieren jugar en la universidad, sus padres, y entrenadores que los ayudan u observan prospectos.",
    startingPoint: "Compiten y quizá tienen videos de partidos, estadísticas y un entrenador de club o de la escuela. Muchos no saben qué cuenta de elegibilidad necesitan, se basan en la IA o en artículos viejos para las reglas de reclutamiento, envían correos genéricos y no registran sus contactos.",
    gap: "Saltarse pasos de elegibilidad, buscar las universidades equivocadas o enviar mensajes genéricos les puede costar a los deportistas un lugar en un equipo universitario o una ayuda económica, y los servicios pagados pueden quitarles dinero con promesas falsas. Un plan organizado, con las reglas revisadas, materiales honestos y correos personales, les da una oportunidad real.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Un teléfono o una computadora con Google Sheets, un asistente de IA gratuito y un editor de video",
      "Unos 60 minutos de lecciones más tiempo para armar un perfil, un video y una lista de universidades",
      "Las reglas de elegibilidad y de contacto de reclutamiento cambian según la organización, el deporte y la división, y cambian seguido; revisa ncaa.org, el sitio de la NAIA y al orientador escolar",
      "Muchos prospectos son menores de edad: nada de direcciones ni datos privados en los perfiles ni en las herramientas de IA"
    ],
    prerequisites: "Ninguno. \"Análisis de video e inteligencia de juego\" y \"SEO y cómo crear tu sitio web con IA\" son buenos complementos."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Según los niveles universitarios a los que apuntas", action: "identificar qué cuenta de elegibilidad necesitas y dónde revisar las reglas de contacto de reclutamiento de tu deporte", standard: "usando los sitios oficiales y a tu orientador, no la IA ni artículos viejos, para las reglas y las fechas" },
    { id: "O2", condition: "Usando Google Sheets y un asistente de IA", action: "armar una lista objetivo de 15 universidades marcadas como difícil, adecuada o probable", standard: "con cada universidad, nombre de entrenador y dato del plantel revisados en las páginas oficiales de la universidad" },
    { id: "O3", condition: "Usando tus estadísticas, calificaciones y clips verdaderos", action: "crear un perfil de reclutamiento de una página y un video de mejores jugadas de dos a cuatro minutos", standard: "con cada estadística verdadera, los mejores clips en los primeros 30 segundos, tú marcado antes de cada clip, sin tu dirección y revisado por un entrenador" },
    { id: "O4", condition: "Usando tu perfil y un borrador de la IA", action: "escribir correos de presentación personales a tres entrenadores universitarios", standard: "de menos de 150 palabras cada uno, con un asunto claro y una razón verdadera y concreta para cada universidad, enviados por ti desde un correo profesional" },
    { id: "O5", condition: "Usando tu lista objetivo", action: "registrar cada contacto, cada respuesta y cada siguiente paso con fechas", standard: "actualizado cada semana y revisando primero con tu entrenador o tu orientador cualquier servicio de reclutamiento pagado" },
    { id: "O6", condition: "Como entrenador que observa prospectos", action: "organizar las notas de observación con los mismos criterios y una escala definida del 1 al 5 para cada jugador", standard: "con calificaciones basadas en lo que viste, la IA usada solo para resumir notas, los datos privados protegidos y el sesgo revisado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararte para que te recluten",
      lessons: [
        {
          objectives: ["O1"],
          title: "Primero las reglas: lo básico de elegibilidad y reclutamiento",
          minutes: 5,
          goal: "Encontrar la cuenta de elegibilidad y las reglas de reclutamiento que se te aplican.",
          text: [
            "El deporte universitario en EE. UU. tiene distintas organizaciones: las Divisiones I, II y III de la NCAA, la NAIA y los colegios comunitarios. Cada una tiene sus propias reglas académicas y de elegibilidad.",
            "Si piensas jugar en la División I o II de la NCAA, vas a necesitar una cuenta en el Centro de Elegibilidad de la NCAA (NCAA Eligibility Center), que revisa tus estudios y tu condición de amateur. El sitio del Centro de Elegibilidad describe una Página de Perfil para estudiantes más jóvenes y para la División III, y cuentas de certificación para la División I y II. La NAIA tiene su propio centro de elegibilidad; revisa su sitio oficial.",
            "Cuándo y cómo te pueden contactar los entrenadores universitarios depende de tu deporte y tu división, y cambia seguido. No confíes en la IA ni en artículos viejos para las fechas; revisa ncaa.org, pregunta a tu entrenador y a tu orientador de secundaria, y mantén al día tus calificaciones y tus materias básicas."
          ],
          steps: ["Decide a qué niveles apuntas.", "Visita el Centro de Elegibilidad de la NCAA y lee qué cuenta te corresponde.", "Revisa el sitio de elegibilidad propio de la NAIA si aplica.", "Pregunta a tu orientador por las materias básicas y las calificaciones.", "Revisa en ncaa.org las reglas de contacto de reclutamiento de tu deporte."],
          words: [["Elegibilidad", "cumplir las reglas académicas y de otro tipo necesarias para jugar en el deporte universitario."], ["Centro de Elegibilidad de la NCAA", "la oficina de la NCAA donde se registran los futuros atletas universitarios para que revisen sus estudios y su condición de amateur."], ["División", "un nivel del deporte universitario, como la División I, II o III de la NCAA."]],
          slides: [
            { title: "Niveles del deporte universitario", bullets: ["NCAA: Divisiones I, II, III", "NAIA", "Colegios comunitarios"] },
            { title: "Cuentas de elegibilidad", bullets: ["NCAA DI y DII: cuenta de certificación", "Estudiantes más jóvenes y DIII: Página de Perfil", "NAIA: su propio centro de elegibilidad"] },
            { title: "Las reglas de contacto cambian", bullets: ["Dependen del deporte y la división", "Revisa ncaa.org, no la IA", "Pregunta a tu entrenador y a tu orientador"] }
          ],
          sources: [
            { name: "Centro de Elegibilidad de la NCAA (en inglés)", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA: Nombre, imagen y semejanza, reglas para reclutas y atletas (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Visita el sitio del Centro de Elegibilidad de la NCAA y escribe qué tipo de cuenta te corresponde. Luego escribe una pregunta sobre las reglas de reclutamiento de tu deporte para hacerle a tu entrenador o a tu orientador de secundaria.",
          youCanNow: "encontrar la cuenta de elegibilidad y las reglas oficiales que se te aplican.",
          quickCheck: [
            { objective: "O1", q: "¿Qué organización tiene su propio centro de elegibilidad, aparte de la NCAA?", options: ["La NAIA", "Tu escuela secundaria", "Tu equipo de club", "El periódico local"], answer: 0, why: "La NAIA tiene su propio centro de elegibilidad; revisa su sitio oficial." },
            { objective: "O1", q: "Una IA te dice la fecha en que los entrenadores universitarios pueden llamarte por primera vez. ¿Qué haces?", options: ["Creerle", "Publicarla para tus compañeros", "Revisar ncaa.org y preguntarle a tu entrenador o a tu orientador", "Esperar a que te llame un entrenador"], answer: 2, why: "Las reglas de contacto cambian seguido; revisa fuentes oficiales, no la IA." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Armar tu lista de universidades objetivo",
          minutes: 6,
          goal: "Armar una hoja de cálculo con 15 universidades que van contigo en lo deportivo, lo académico y lo personal.",
          text: [
            "La universidad correcta es una donde puedes jugar, estudiar lo que quieres, pagarla y ser feliz si el deporte se termina. Busca una mezcla: universidades difíciles (un reto), adecuadas (van bien contigo) y probables (donde claramente aportarías).",
            "Haz una hoja de Google Sheets con estas columnas: Universidad, División, Ubicación, Carrera que quieres, Necesidad del plantel en tu posición, Nivel académico, Notas de costos, Nombre y correo del entrenador, Estado. Saca los nombres de los entrenadores y los datos del plantel del sitio oficial de deportes de cada universidad.",
            "Un asistente de IA te puede sugerir universidades para investigar: \"Soy mediocampista de fútbol, mido 1.75 m, tengo un promedio de 3.5 y quiero estudiar enfermería en el sureste de EE. UU. Sugiéreme 20 universidades con programas de fútbol de distintos niveles para investigar.\" Luego revisa cada una tú mismo; las listas de la IA pueden estar desactualizadas o equivocadas."
          ],
          steps: ["Crea la hoja con las columnas de arriba.", "Pide a la IA universidades para investigar.", "Revisa las páginas oficiales de deportes y académicas de cada universidad.", "Marca cada una como difícil, adecuada o probable.", "Quédate con 15 que de verdad van contigo."],
          words: [["Lista objetivo", "las universidades que piensas contactar."], ["Plantel", "la lista de jugadores de un equipo; muestra quién se gradúa en tu posición."]],
          slides: [
            { title: "La universidad correcta", bullets: ["¿Puedes jugar?", "¿Puedes estudiar lo que quieres?", "¿Puedes pagarla? ¿Serías feliz sin el deporte?"] },
            { title: "Columnas de la hoja", bullets: ["Universidad, División, Ubicación, Carrera", "Necesidad del plantel, Nivel académico, Costos", "Contacto del entrenador, Estado"] },
            { title: "La IA sugiere, tú verificas", bullets: ["Pide universidades para investigar", "Revisa las páginas oficiales", "Difícil, adecuada, probable"] }
          ],
          tryIt: "Crea tu hoja de lista objetivo. Usa la IA para tener ideas, verifica diez universidades en sus sitios oficiales y marca cada una como difícil, adecuada o probable.",
          youCanNow: "armar y verificar una lista equilibrada de universidades objetivo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es una universidad \"probable\" en tu lista objetivo?", options: ["Una meta muy difícil", "Una universidad donde claramente aportarías", "Una universidad sin equipo de tu deporte", "Solo la universidad de tus sueños"], answer: 1, why: "Las universidades probables son aquellas donde claramente aportarías." },
            { objective: "O2", q: "La IA pone en la lista una universidad de la que nunca has oído hablar. ¿Qué haces?", options: ["Agregarla sin revisar", "Borrar toda la lista", "Escribirle al entrenador de inmediato", "Revisar primero sus páginas oficiales de deportes y académicas"], answer: 3, why: "Las listas de la IA pueden estar desactualizadas o equivocadas, así que comprueba cada universidad." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tu perfil de reclutamiento y tu video de mejores jugadas",
          minutes: 6,
          goal: "Hacer un perfil de reclutamiento de una página y planear un video de mejores jugadas de dos a cuatro minutos.",
          text: [
            "Un perfil de reclutamiento es de una página: nombre, año de graduación, posición, estatura y peso (honestos), escuela secundaria y club, estadísticas clave, información académica (promedio, resultados de exámenes si los tienes, carrera que piensas estudiar), premios, contacto de tus entrenadores, el enlace a tu video y tu correo de contacto.",
            "Un video de mejores jugadas debe ser corto, muchas veces de dos a cuatro minutos, con tus mejores clips en los primeros 30 segundos. Identifícate antes de cada clip con una flecha o un círculo. Agrega el enlace a un partido completo si a los entrenadores de tu deporte les gusta verlo. Pregunta a tu entrenador qué esperan los entrenadores de tu deporte.",
            "La IA te puede ayudar a escribir el perfil con tus notas y a ordenar tu lista de clips. Cada estadística debe ser cierta y comprobable; los entrenadores la verifican con tus entrenadores. Deja fuera del perfil datos privados como la dirección de tu casa."
          ],
          steps: ["Reúne tus estadísticas, calificaciones y premios reales.", "Pide a la IA que dé formato a un perfil de una página.", "Elige tus mejores clips y pon los mejores primero.", "Márcate antes de cada clip.", "Pide a tu entrenador que revise los dos."],
          words: [["Perfil de reclutamiento", "un resumen de una página sobre ti como atleta y estudiante para los entrenadores universitarios."], ["Video de mejores jugadas", "un video corto con tus mejores jugadas."]],
          slides: [
            { title: "Perfil de una página", bullets: ["Año de graduación, posición, medidas honestas", "Estadísticas, promedio, carrera que piensas estudiar", "Contacto de entrenadores, enlace al video, tu correo"] },
            { title: "Video de mejores jugadas", bullets: ["Muchas veces de 2 a 4 minutos", "Los mejores clips en los primeros 30 segundos", "Márcate antes de cada clip"] },
            { title: "Honesto y seguro", bullets: ["Los entrenadores verifican las estadísticas", "Sin la dirección de tu casa", "Que lo revise tu entrenador"] }
          ],
          tryIt: "Usa la IA para convertir tus notas en un perfil de una página. Escribe tu lista de clips con los cinco mejores primero y pide a tu entrenador que revise los dos.",
          youCanNow: "crear un perfil de reclutamiento honesto y un buen plan para tu video de mejores jugadas.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué marcarte antes de cada clip?", options: ["Para que los entrenadores sepan qué jugador eres", "Para que el video sea más largo", "Para esconder tu número", "Porque la música lo exige"], answer: 0, why: "Una flecha o un círculo ayuda a los entrenadores a encontrarte de inmediato." },
            { objective: "O3", q: "El tiempo en 40 yardas que pusiste es más rápido que cualquiera que hayas corrido. ¿Qué haces?", options: ["Dejarlo; los entrenadores no lo revisan", "Quitar la estadística por completo", "Cambiarlo por tu tiempo verdadero y comprobable", "Bajarlo un poco más"], answer: 2, why: "Cada estadística debe ser verdadera; los entrenadores la confirman con tus entrenadores." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte para que te recluten",
        questions: [
          { objective: "O1", q: "Piensas jugar en la División I de la NCAA. ¿Dónde te registras para la elegibilidad?", options: ["En una app de redes sociales", "En tu gimnasio", "En el Centro de Elegibilidad de la NCAA", "En ningún lado"], answer: 2, why: "Los atletas de DI y DII necesitan una cuenta de certificación del Centro de Elegibilidad." },
          { objective: "O1", q: "¿Dónde debes revisar cuándo te pueden contactar los entrenadores?", options: ["En ncaa.org y con tu entrenador u orientador de secundaria", "Solo en un chatbot de IA", "En un artículo de hace 5 años", "Con un rival"], answer: 0, why: "Las reglas dependen del deporte y la división y cambian seguido." },
          { objective: "O2", q: "Una lista objetivo equilibrada incluye:", options: ["Solo los 5 mejores programas", "Una sola universidad", "Universidades que no has revisado", "Universidades difíciles, adecuadas y probables"], answer: 3, why: "Una mezcla te da opciones reales." },
          { objective: "O2", q: "La IA te sugiere una universidad cuyo programa ya cerró. ¿Qué pasó?", options: ["Nada", "Las listas de la IA pueden estar desactualizadas; verifica en las páginas oficiales", "La universidad lo está escondiendo", "Deberías postularte de todos modos"], answer: 1, why: "Revisa siempre los sitios oficiales." },
          { objective: "O3", q: "¿Dónde deben ir tus mejores clips en un video de mejores jugadas?", options: ["Al final", "En los primeros 30 segundos", "En el medio", "Escondidos"], answer: 1, why: "Los entrenadores deciden rápido." }
        ]
      }
    },
    {
      name: "Capítulo 2: Contactar entrenadores y mantenerte organizado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir con IA correos personales a entrenadores",
          minutes: 6,
          goal: "Escribir un correo de presentación corto y personal a un entrenador universitario.",
          text: [
            "Los entrenadores reciben muchos correos. Gana lo corto y personal. Incluye: un asunto con tu año de graduación, posición y dato clave (\"2027 Mediocampista | Promedio 3.5 | Club Metro FC\"); por qué te interesa específicamente esa universidad; tus estadísticas clave y tus estudios; el enlace a tu video y tu perfil; tu calendario próximo (torneos, exhibiciones); y el contacto de tu entrenador.",
            "Pide a un asistente de IA: \"Escribe un correo corto al entrenador principal de fútbol de [universidad]. Usa mi perfil de abajo. Menciona que me interesa su programa de enfermería y su estilo de posesión. Menos de 150 palabras.\" Luego hazlo tuyo y revisa cada detalle.",
            "Envíalo desde un correo profesional que revises todos los días. Nunca mandes exactamente el mismo correo a todas las universidades; los entrenadores lo notan. Envíalo tú, no tus padres, y haz un seguimiento amable después de un par de semanas con información nueva, como un video nuevo."
          ],
          steps: ["Escribe un asunto claro.", "Pide a la IA un borrador de menos de 150 palabras con tu perfil.", "Agrega una razón específica y cierta para esa universidad.", "Revisa cada detalle y el nombre del entrenador.", "Envíalo desde tu correo profesional; haz seguimiento con información nueva."],
          words: [["Asunto", "el título corto de un correo; lo primero que ve un entrenador."], ["Exhibición", "un evento donde los atletas juegan frente a entrenadores universitarios (showcase)."]],
          slides: [
            { title: "Corto y personal", bullets: ["Asunto: año de graduación, posición, dato clave", "Por qué esta universidad en particular", "Estadísticas, estudios, enlace al video"] },
            { title: "La IA redacta, tú lo haces personal", bullets: ["Menos de 150 palabras", "Una razón cierta para esa universidad", "Revisa el nombre del entrenador"] },
            { title: "Envíalo bien", bullets: ["Correo profesional que revisas a diario", "Lo envías tú, no tus padres", "Seguimiento con información nueva"] }
          ],
          tryIt: "Escribe con ayuda de la IA correos a tres entrenadores de tu lista. Haz cada uno personal y pide a tu entrenador o a tu padre o madre que lea uno antes de enviarlo.",
          youCanNow: "escribir un correo corto y personal a un entrenador universitario.",
          quickCheck: [
            { objective: "O4", q: "¿Qué debe incluir el asunto de un correo a un entrenador?", options: ["\"Hola, entrenador\"", "Año de graduación, posición y datos clave", "Los nombres de tus padres", "\"Por favor, léalo\""], answer: 1, why: "Un asunto claro con año de graduación, posición y datos clave llama la atención." },
            { objective: "O4", q: "Dos semanas después de tu correo, no hay respuesta. ¿Qué haces?", options: ["Enviar otra vez el mismo correo", "Pedirle a tu madre o a tu padre que llame al entrenador", "Olvidarte de esa universidad", "Hacer un seguimiento amable con información nueva, como un video nuevo de mejores jugadas"], answer: 3, why: "Haz un seguimiento amable después de un par de semanas con algo nuevo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Llevar tu reclutamiento como un proyecto",
          minutes: 5,
          goal: "Registrar cada contacto y cada siguiente paso en tu hoja de reclutamiento.",
          text: [
            "Agrega columnas de seguimiento a tu lista objetivo: Fecha de contacto, Respuesta (sí/no), Qué dijeron, Siguiente paso, Fecha del siguiente paso. Actualízala cada semana.",
            "Fíjate en las señales de interés real: respuestas personales, preguntas sobre tus calificaciones, invitaciones a campamentos o visitas, o un entrenador que va a verte jugar. Un anuncio general de un campamento no es lo mismo que un interés personal.",
            "El reclutamiento puede ser estresante. Pon primero la escuela y el entrenamiento. Ten cuidado con los \"servicios de reclutamiento\" que garantizan becas a cambio de un pago; consulta con tu entrenador y tu orientador de secundaria antes de pagarle a nadie."
          ],
          steps: ["Agrega columnas de seguimiento a tu hoja.", "Anota cada correo, respuesta y llamada.", "Escribe el siguiente paso y su fecha.", "Actualízala cada semana.", "Consulta con tu entrenador antes de cualquier servicio de reclutamiento pagado."],
          words: [["Seguimiento", "un siguiente mensaje amable con información nueva."], ["Servicio de reclutamiento", "una empresa que cobra por ayudarte a darte a conocer a las universidades."]],
          slides: [
            { title: "Registra todo", bullets: ["Fecha de contacto, respuesta, qué dijeron", "Siguiente paso y fecha", "Actualízala cada semana"] },
            { title: "Interés real", bullets: ["Respuestas personales", "Preguntas sobre tus calificaciones", "Invitaciones a campamentos o visitas"] },
            { title: "Mantén el equilibrio", bullets: ["Primero la escuela y el entrenamiento", "Nada de pagos por becas garantizadas", "Consulta primero con tu entrenador"] }
          ],
          tryIt: "Agrega las columnas de seguimiento a tu hoja y anota tus tres correos con un siguiente paso y una fecha para cada uno.",
          youCanNow: "registrar los contactos de reclutamiento y los siguientes pasos como un proyecto.",
          quickCheck: [
            { objective: "O5", q: "¿Qué columna del registro te ayuda a recordar qué hacer?", options: ["Siguiente paso y fecha del siguiente paso", "Color favorito", "Mascota", "Récord del equipo"], answer: 0, why: "El siguiente paso y su fecha mantienen en marcha tu reclutamiento." },
            { objective: "O5", q: "Recibes un anuncio genérico de un campamento de una universidad. ¿Qué significa?", options: ["Tienes una beca", "No es lo mismo que un interés personal", "Tienes que ir", "El entrenador vio tu video"], answer: 1, why: "Las respuestas y preguntas personales muestran un interés real; un anuncio genérico no." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Para entrenadores: notas de observación justas y organizadas",
          minutes: 5,
          goal: "Organizar las notas de observación de prospectos de forma justa y coherente.",
          text: [
            "Los entrenadores que observan y recomiendan jugadores pueden usar las mismas herramientas. Crea una hoja con los mismos criterios para cada jugador: habilidades de su posición, capacidad atlética, lectura del juego, disposición a aprender, estudios y notas de carácter de fuentes verificadas.",
            "Usa una escala sencilla del 1 al 5 con una descripción escrita para cada número, para que las calificaciones signifiquen lo mismo entre evaluadores. La IA puede resumir tus notas escritas en un informe corto, pero asegúrate de que las calificaciones salgan de lo que viste, no de suposiciones de la IA.",
            "Protege la privacidad de los prospectos: muchos son menores de edad. Guarda las notas en lugares privados y aprobados, no pegues datos personales en herramientas de IA, sigue las reglas de reclutamiento de tu organización y cuídate del sesgo, como juzgar solo por la estatura o por la calidad del video en lugar del nivel."
          ],
          steps: ["Usa los mismos criterios para cada prospecto.", "Define cada número de una escala del 1 al 5.", "Escribe notas de lo que viste.", "Usa la IA para resumir notas, no para calificar.", "Mantén los datos privados; revisa si hay sesgo."],
          words: [["Rúbrica", "una guía de calificación que describe qué significa cada puntaje."], ["Disposición a aprender", "qué tan bien un jugador escucha y usa los comentarios del entrenador."]],
          slides: [
            { title: "Los mismos criterios para todos", bullets: ["Habilidades, capacidad atlética, lectura del juego", "Disposición a aprender, estudios, carácter"] },
            { title: "Rúbrica clara del 1 al 5", bullets: ["Describe cada número", "Calificaciones según lo que viste", "La IA resume, no califica"] },
            { title: "Justo y privado", bullets: ["Muchos prospectos son menores", "Nada de datos personales en la IA", "Cuídate del sesgo"] }
          ],
          tryIt: "Tarea final: atletas, terminen su hoja de 15 universidades, su perfil, su plan de video y tres correos a entrenadores, más una nota sobre su cuenta de elegibilidad y dónde revisaron las reglas. Entrenadores: armen una rúbrica del 1 al 5 con descripciones para cinco criterios.",
          youCanNow: "organizar el trabajo de reclutamiento u observación de forma clara, honesta y justa.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué escribir una descripción para cada número de la escala del 1 al 5?", options: ["Para que las calificaciones signifiquen lo mismo entre los evaluadores", "Para que la hoja sea más larga", "Para que la IA califique a los jugadores", "Para ordenar a los jugadores por estatura"], answer: 0, why: "Los números definidos mantienen las calificaciones coherentes entre entrenadores." },
            { objective: "O6", q: "Un prospecto es bajo, pero juega con inteligencia y gana cada duelo. ¿Cómo calificas su lectura del juego?", options: ["Bajo, por su estatura", "Saltarte a ese jugador", "Según lo que viste, no según su tamaño", "Según la calidad del video"], answer: 2, why: "Juzgar solo por el tamaño es una forma de sesgo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Contactar entrenadores y mantenerte organizado",
        questions: [
          { objective: "O4", q: "¿Qué asunto es el mejor para un correo a un entrenador?", options: ["\"Hola\"", "\"¡¡¡Por favor léalo!!!\"", "En blanco", "\"2027 Mediocampista | Promedio 3.5 | Club Metro FC\""], answer: 3, why: "Da la información clave de un vistazo." },
          { objective: "O4", q: "¿Quién debe enviar los correos a los entrenadores universitarios?", options: ["El atleta", "Solo los padres", "Un desconocido", "Un bot de IA automáticamente"], answer: 0, why: "Los entrenadores quieren saber del atleta." },
          { objective: "O5", q: "¿Cuál es una señal de interés real?", options: ["Un anuncio masivo de campamento", "Un me gusta en redes sociales", "Una respuesta personal que pregunta por tus calificaciones", "Nada"], answer: 2, why: "Las preguntas personales muestran interés real." },
          { objective: "O5", q: "Un servicio garantiza una beca a cambio de un pago. Debes:", options: ["Pagar de inmediato", "Dar tu contraseña", "Firmar sin leer", "Consultar primero con tu entrenador y tu orientador de secundaria"], answer: 3, why: "Nadie puede garantizar una beca." },
          { objective: "O6", q: "Para los entrenadores, la IA debe usarse para:", options: ["Calificar jugadores que no ha visto", "Resumir notas escritas, no crear calificaciones", "Guardar datos privados de menores", "Reemplazar las evaluaciones"], answer: 1, why: "Las calificaciones salen de lo que vio el entrenador." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Observación y reclutamiento con IA",
    questions: [
      { objective: "O1", q: "¿Cuál es una organización del deporte universitario?", options: ["La NFL", "Una marca de tenis", "La NAIA", "Una app social"], answer: 2, why: "La NAIA es una asociación de deporte universitario." },
      { objective: "O1", q: "El Centro de Elegibilidad de la NCAA revisa:", options: ["Los estudios y la condición de amateur", "Tu número de seguidores", "Solo tu estatura", "Tus gustos musicales"], answer: 0, why: "Certifica la elegibilidad." },
      { objective: "O1", q: "Los estudiantes más jóvenes y los atletas de DIII pueden empezar con:", options: ["Una Página de Perfil", "Nada", "Un servicio pagado", "Una prueba"], answer: 0, why: "El Centro de Elegibilidad describe una Página de Perfil para ellos." },
      { objective: "O1", q: "Las reglas de contacto de reclutamiento dependen de:", options: ["Tu talla de zapato", "El clima", "El deporte y la división", "Tu equipo favorito"], answer: 2, why: "Las reglas cambian según el deporte y el nivel." },
      { objective: "O1", q: "¿Quién te ayuda a mantener al día tus materias básicas?", options: ["Un rival", "Tu orientador escolar", "Un influencer", "Nadie"], answer: 1, why: "Los orientadores conocen los requisitos académicos." },
      { objective: "O2", q: "Una universidad \"difícil\" es:", options: ["Algo seguro", "Una que está cerrada", "Una secundaria básica", "Un reto para ti"], answer: 3, why: "Es más difícil entrar o jugar en ellas." },
      { objective: "O2", q: "¿Dónde encuentras el correo real de un entrenador?", options: ["Adivinando", "En una IA", "En el sitio oficial de deportes de la universidad", "En una página de fans"], answer: 2, why: "Los sitios oficiales están al día." },
      { objective: "O2", q: "¿Por qué revisar el plantel?", options: ["Para copiar sus biografías", "Para escribirles a los jugadores", "No sirve de nada", "Para ver quién se gradúa en tu posición"], answer: 3, why: "Las necesidades del plantel afectan tus posibilidades." },
      { objective: "O3", q: "La estatura y el peso de tu perfil deben ser:", options: ["Honestos", "Redondeados muy hacia arriba", "Nunca ponerlos", "Adivinados"], answer: 0, why: "Los entrenadores verifican." },
      { objective: "O3", q: "Un video de mejores jugadas suele durar:", options: ["30 minutos", "2-4 minutos", "5 segundos", "Dos horas"], answer: 1, why: "Corto y enfocado funciona mejor." },
      { objective: "O3", q: "Antes de cada clip, debes:", options: ["Poner solo música fuerte", "Mostrar al público", "Marcarte con una flecha o un círculo", "Saltarlo"], answer: 2, why: "Los entrenadores necesitan saber qué jugador eres tú." },
      { objective: "O3", q: "¿Qué NO debe ir en tu perfil?", options: ["La dirección de tu casa", "Tu año de graduación", "El enlace a tu video", "El contacto de tu entrenador"], answer: 0, why: "Deja fuera los datos privados." },
      { objective: "O4", q: "Un buen correo a un entrenador tiene menos de unas:", options: ["1,000 palabras", "5 palabras", "No hay límite", "150 palabras"], answer: 3, why: "Los correos cortos se leen." },
      { objective: "O4", q: "Enviar el mismo correo a todas las universidades:", options: ["Es lo mejor", "Los entrenadores lo notan; haz cada uno personal", "Es obligatorio", "Consigue más respuestas"], answer: 1, why: "Los correos personales destacan." },
      { objective: "O4", q: "Un seguimiento debe incluir:", options: ["El mismo correo otra vez", "Información nueva, como un video nuevo", "Una queja", "Nada"], answer: 1, why: "La información nueva da una razón para contestar." },
      { objective: "O4", q: "Una exhibición (showcase) es:", options: ["Una vitrina de trofeos", "Una tienda", "Un programa de televisión", "Un evento donde los atletas juegan frente a entrenadores"], answer: 3, why: "Las exhibiciones ayudan a que los entrenadores te vean." },
      { objective: "O5", q: "¿Cada cuánto debes actualizar tu hoja de reclutamiento?", options: ["Cada semana", "Una vez al año", "Nunca", "Solo después de firmar"], answer: 0, why: "Cada semana mantiene a tiempo los siguientes pasos." },
      { objective: "O5", q: "¿Qué va primero durante el reclutamiento?", options: ["Las redes sociales", "Los servicios pagados", "La escuela y el entrenamiento", "Los rumores"], answer: 2, why: "Las calificaciones y el juego son lo que más importa." },
      { objective: "O6", q: "Una rúbrica es:", options: ["Un tipo de ejercicio", "Un zapato", "Un trofeo", "Una guía de calificación que describe cada puntaje"], answer: 3, why: "Mantiene coherentes las calificaciones." },
      { objective: "O6", q: "Juzgar a los prospectos por la calidad del video en lugar de su nivel es:", options: ["Justo", "Una forma de sesgo", "Obligatorio", "La mejor práctica"], answer: 1, why: "Una observación justa se fija en el nivel." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      5,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Nota de elegibilidad y reglas",
        objective: "O1",
        notYet: "No nombra ninguna cuenta de elegibilidad, o las reglas salieron de la IA o de artículos viejos.",
        meets: "Nombra la cuenta de elegibilidad necesaria y la fuente oficial donde se revisaron las reglas de reclutamiento.",
        exceeds: "Incluye la revisión de materias básicas y calificaciones hecha con el orientador."
      },
      {
        name: "Lista objetivo",
        objective: "O2",
        notYet: "Hay menos de 15 universidades, no hay mezcla de difícil, adecuada y probable, o hay datos sin revisar.",
        meets: "15 universidades con todas las columnas, marcadas como difícil, adecuada o probable, revisadas en páginas oficiales.",
        exceeds: "Anota lo que necesita el plantel en la posición del deportista y el costo de cada universidad."
      },
      {
        name: "Perfil y video de mejores jugadas",
        objective: "O3",
        notYet: "Estadísticas falsas, datos privados, o los mejores clips escondidos al final del video.",
        meets: "Un perfil honesto de una página y un video de 2 a 4 minutos con los mejores clips primero y el deportista marcado, revisado por un entrenador.",
        exceeds: "Agrega el enlace a un partido completo si los entrenadores de ese deporte lo esperan y mantiene el perfil al día."
      },
      {
        name: "Correos a entrenadores",
        objective: "O4",
        notYet: "Genéricos, largos o enviados por la madre o el padre.",
        meets: "Tres correos personales de menos de 150 palabras con asuntos claros y una razón verdadera para cada universidad, enviados por el deportista.",
        exceeds: "Cada uno incluye el calendario de próximos partidos y el contacto del entrenador, y las fechas de seguimiento están registradas."
      },
      {
        name: "Registro",
        objective: "O5",
        notYet: "No hay columnas de registro ni siguientes pasos.",
        meets: "Cada contacto registrado con la respuesta, el siguiente paso y la fecha.",
        exceeds: "Actualizado cada semana durante un mes, con las señales de interés real anotadas."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el plan de reclutamiento y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes con la cuenta de elegibilidad correcta ya creada (encuesta de seguimiento)",
      "Participantes que dicen haber recibido respuestas personales o invitaciones a campamentos o visitas de entrenadores universitarios",
      "Participantes que se comprometen con un programa universitario, y quienes dicen haber evitado un servicio pagado que garantizaba resultados"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Una cuenta gratuita de Google para usar Google Sheets",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Videos de partidos y un editor de video gratuito",
      "Tu historial académico, tus estadísticas verdaderas y los datos de contacto de tus entrenadores",
      "Unos 60 minutos de lecciones más tiempo para armar el perfil y el video"
    ],
    facilitatorNotes: [
      "Invita al orientador escolar a explicar las materias básicas y las cuentas de elegibilidad; no des tú mismo decisiones sobre elegibilidad.",
      "Pide a los participantes que revisen las reglas de contacto de reclutamiento en ncaa.org o en el sitio de la NAIA durante la sesión; las reglas cambian seguido.",
      "Incluye a los padres o tutores, pero asegúrate de que los deportistas escriban y envíen sus propios correos a los entrenadores.",
      "Advierte a las familias sobre los servicios pagados que garantizan becas y pídeles que lo consulten con el entrenador o el orientador antes de pagar.",
      "Para los entrenadores que usan la lección 6: mantengan privadas las notas de los prospectos, usen los mismos criterios para todos y revisen las calificaciones para detectar sesgos."
    ]
  }
};

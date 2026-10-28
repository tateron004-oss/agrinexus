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
  chapters: [
    {
      name: "Capítulo 1: Prepararte para que te recluten",
      lessons: [
        {
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
          youCanNow: "encontrar la cuenta de elegibilidad y las reglas oficiales que se te aplican."
        },
        {
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
          youCanNow: "armar y verificar una lista equilibrada de universidades objetivo."
        },
        {
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
          youCanNow: "crear un perfil de reclutamiento honesto y un buen plan para tu video de mejores jugadas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte para que te recluten",
        questions: [
          { q: "Piensas jugar en la División I de la NCAA. ¿Dónde te registras para la elegibilidad?", options: ["En una app de redes sociales", "En tu gimnasio", "En el Centro de Elegibilidad de la NCAA", "En ningún lado"], answer: 2, why: "Los atletas de DI y DII necesitan una cuenta de certificación del Centro de Elegibilidad." },
          { q: "¿Dónde debes revisar cuándo te pueden contactar los entrenadores?", options: ["En ncaa.org y con tu entrenador u orientador de secundaria", "Solo en un chatbot de IA", "En un artículo de hace 5 años", "Con un rival"], answer: 0, why: "Las reglas dependen del deporte y la división y cambian seguido." },
          { q: "Una lista objetivo equilibrada incluye:", options: ["Solo los 5 mejores programas", "Una sola universidad", "Universidades que no has revisado", "Universidades difíciles, adecuadas y probables"], answer: 3, why: "Una mezcla te da opciones reales." },
          { q: "La IA te sugiere una universidad cuyo programa ya cerró. ¿Qué pasó?", options: ["Nada", "Las listas de la IA pueden estar desactualizadas; verifica en las páginas oficiales", "La universidad lo está escondiendo", "Deberías postularte de todos modos"], answer: 1, why: "Revisa siempre los sitios oficiales." },
          { q: "¿Dónde deben ir tus mejores clips en un video de mejores jugadas?", options: ["Al final", "En los primeros 30 segundos", "En el medio", "Escondidos"], answer: 1, why: "Los entrenadores deciden rápido." }
        ]
      }
    },
    {
      name: "Capítulo 2: Contactar entrenadores y mantenerte organizado",
      lessons: [
        {
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
          youCanNow: "escribir un correo corto y personal a un entrenador universitario."
        },
        {
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
          youCanNow: "registrar los contactos de reclutamiento y los siguientes pasos como un proyecto."
        },
        {
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
          youCanNow: "organizar el trabajo de reclutamiento u observación de forma clara, honesta y justa."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Contactar entrenadores y mantenerte organizado",
        questions: [
          { q: "¿Qué asunto es el mejor para un correo a un entrenador?", options: ["\"Hola\"", "\"¡¡¡Por favor léalo!!!\"", "En blanco", "\"2027 Mediocampista | Promedio 3.5 | Club Metro FC\""], answer: 3, why: "Da la información clave de un vistazo." },
          { q: "¿Quién debe enviar los correos a los entrenadores universitarios?", options: ["El atleta", "Solo los padres", "Un desconocido", "Un bot de IA automáticamente"], answer: 0, why: "Los entrenadores quieren saber del atleta." },
          { q: "¿Cuál es una señal de interés real?", options: ["Un anuncio masivo de campamento", "Un me gusta en redes sociales", "Una respuesta personal que pregunta por tus calificaciones", "Nada"], answer: 2, why: "Las preguntas personales muestran interés real." },
          { q: "Un servicio garantiza una beca a cambio de un pago. Debes:", options: ["Pagar de inmediato", "Dar tu contraseña", "Firmar sin leer", "Consultar primero con tu entrenador y tu orientador de secundaria"], answer: 3, why: "Nadie puede garantizar una beca." },
          { q: "Para los entrenadores, la IA debe usarse para:", options: ["Calificar jugadores que no ha visto", "Resumir notas escritas, no crear calificaciones", "Guardar datos privados de menores", "Reemplazar las evaluaciones"], answer: 1, why: "Las calificaciones salen de lo que vio el entrenador." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Observación y reclutamiento con IA",
    questions: [
      { q: "¿Cuál es una organización del deporte universitario?", options: ["La NFL", "Una marca de tenis", "La NAIA", "Una app social"], answer: 2, why: "La NAIA es una asociación de deporte universitario." },
      { q: "El Centro de Elegibilidad de la NCAA revisa:", options: ["Los estudios y la condición de amateur", "Tu número de seguidores", "Solo tu estatura", "Tus gustos musicales"], answer: 0, why: "Certifica la elegibilidad." },
      { q: "Los estudiantes más jóvenes y los atletas de DIII pueden empezar con:", options: ["Una Página de Perfil", "Nada", "Un servicio pagado", "Una prueba"], answer: 0, why: "El Centro de Elegibilidad describe una Página de Perfil para ellos." },
      { q: "Las reglas de contacto de reclutamiento dependen de:", options: ["Tu talla de zapato", "El clima", "El deporte y la división", "Tu equipo favorito"], answer: 2, why: "Las reglas cambian según el deporte y el nivel." },
      { q: "¿Quién te ayuda a mantener al día tus materias básicas?", options: ["Un rival", "Tu orientador escolar", "Un influencer", "Nadie"], answer: 1, why: "Los orientadores conocen los requisitos académicos." },
      { q: "Una universidad \"difícil\" es:", options: ["Algo seguro", "Una que está cerrada", "Una secundaria básica", "Un reto para ti"], answer: 3, why: "Es más difícil entrar o jugar en ellas." },
      { q: "¿Dónde encuentras el correo real de un entrenador?", options: ["Adivinando", "En una IA", "En el sitio oficial de deportes de la universidad", "En una página de fans"], answer: 2, why: "Los sitios oficiales están al día." },
      { q: "¿Por qué revisar el plantel?", options: ["Para copiar sus biografías", "Para escribirles a los jugadores", "No sirve de nada", "Para ver quién se gradúa en tu posición"], answer: 3, why: "Las necesidades del plantel afectan tus posibilidades." },
      { q: "La estatura y el peso de tu perfil deben ser:", options: ["Honestos", "Redondeados muy hacia arriba", "Nunca ponerlos", "Adivinados"], answer: 0, why: "Los entrenadores verifican." },
      { q: "Un video de mejores jugadas suele durar:", options: ["30 minutos", "2-4 minutos", "5 segundos", "Dos horas"], answer: 1, why: "Corto y enfocado funciona mejor." },
      { q: "Antes de cada clip, debes:", options: ["Poner solo música fuerte", "Mostrar al público", "Marcarte con una flecha o un círculo", "Saltarlo"], answer: 2, why: "Los entrenadores necesitan saber qué jugador eres tú." },
      { q: "¿Qué NO debe ir en tu perfil?", options: ["La dirección de tu casa", "Tu año de graduación", "El enlace a tu video", "El contacto de tu entrenador"], answer: 0, why: "Deja fuera los datos privados." },
      { q: "Un buen correo a un entrenador tiene menos de unas:", options: ["1,000 palabras", "5 palabras", "No hay límite", "150 palabras"], answer: 3, why: "Los correos cortos se leen." },
      { q: "Enviar el mismo correo a todas las universidades:", options: ["Es lo mejor", "Los entrenadores lo notan; haz cada uno personal", "Es obligatorio", "Consigue más respuestas"], answer: 1, why: "Los correos personales destacan." },
      { q: "Un seguimiento debe incluir:", options: ["El mismo correo otra vez", "Información nueva, como un video nuevo", "Una queja", "Nada"], answer: 1, why: "La información nueva da una razón para contestar." },
      { q: "Una exhibición (showcase) es:", options: ["Una vitrina de trofeos", "Una tienda", "Un programa de televisión", "Un evento donde los atletas juegan frente a entrenadores"], answer: 3, why: "Las exhibiciones ayudan a que los entrenadores te vean." },
      { q: "¿Cada cuánto debes actualizar tu hoja de reclutamiento?", options: ["Cada semana", "Una vez al año", "Nunca", "Solo después de firmar"], answer: 0, why: "Cada semana mantiene a tiempo los siguientes pasos." },
      { q: "¿Qué va primero durante el reclutamiento?", options: ["Las redes sociales", "Los servicios pagados", "La escuela y el entrenamiento", "Los rumores"], answer: 2, why: "Las calificaciones y el juego son lo que más importa." },
      { q: "Una rúbrica es:", options: ["Un tipo de ejercicio", "Un zapato", "Un trofeo", "Una guía de calificación que describe cada puntaje"], answer: 3, why: "Mantiene coherentes las calificaciones." },
      { q: "Juzgar a los prospectos por la calidad del video en lugar de su nivel es:", options: ["Justo", "Una forma de sesgo", "Obligatorio", "La mejor práctica"], answer: 1, why: "Una observación justa se fija en el nivel." }
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-volunteer-recruitment.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-volunteer-recruitment-es",
  lang: "es",
  translationOf: "nonprofit-ai-volunteer-recruitment",
  category: "Non Profits",
  name: "Reclutar voluntarios con IA",
  skills: "Escribir la descripción de una función de voluntariado, Escribir borradores de publicaciones para reclutar, Hacer un formulario de inscripción, Escribir mensajes de bienvenida y recordatorio, Lograr que los voluntarios vuelvan",
  outcome: "usar un asistente de IA gratis para escribir una descripción clara de una función de voluntariado, una publicación para reclutar y un mensaje de bienvenida, armar un formulario de inscripción sencillo y planear cómo vas a agradecer y conservar a los voluntarios que reclutes.",
  about: [
    "Este curso es para personal y coordinadores de voluntarios de organizaciones sin fines de lucro y comunidades de fe que necesitan más ayudantes para programas como despensas de alimentos, tutorías, eventos, jornadas de limpieza y mentorías.",
    "Vas a usar un asistente de IA (como ChatGPT, Microsoft Copilot o Google Gemini) para escribir los textos, y herramientas gratis como Google Forms o Microsoft Forms para recoger las inscripciones. Tú sigues a cargo de cada mensaje y dejas fuera de la IA los datos personales de los voluntarios.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un kit de reclutamiento completo para una función de voluntariado real: una descripción de la función, una publicación para redes sociales, un correo a quienes los apoyan, un formulario de inscripción con unas cuantas preguntas sencillas, un mensaje de bienvenida y un recordatorio para una semana después, más un plan corto de agradecimiento. Usa la IA para los borradores y luego edita cada pieza con tu propia voz y revisa todas las fechas y los datos.",
  chapters: [
    {
      name: "Capítulo 1: Encontrar a los voluntarios correctos",
      lessons: [
        {
          title: "Escribir una descripción clara de una función de voluntariado",
          minutes: 5,
          goal: "Escribir una descripción de la función que le diga al voluntario exactamente qué, cuándo, dónde y por qué.",
          text: [
            "La gente dice que sí cuando sabe exactamente a qué se está apuntando. Un pedido vago como \"¡Necesitamos ayuda!\" recibe pocas respuestas. Una función clara recibe más.",
            "Una buena descripción de la función responde: ¿Qué voy a hacer? ¿Cuándo y por cuánto tiempo? ¿Dónde? ¿Qué habilidades o revisiones se necesitan (por ejemplo, una revisión de antecedentes para trabajar con niños)? ¿Por qué importa? ¿A quién contacto?",
            "Dale los datos a la IA y pídele que los redacte. Por ejemplo: \"Escribe una descripción corta de una función de voluntariado para ayudante de la despensa de alimentos los sábados, de 9 am a mediodía, dos veces al mes, cargando hasta 20 libras, sin experiencia. Cálida y clara, menos de 150 palabras.\""
          ],
          steps: ["Anota las tareas, el horario, el lugar y cualquier requisito.", "Escribe una frase sobre por qué importa la función.", "Pide a la IA que convierta tus notas en una descripción corta de la función.", "Revisa cada dato y agrega tú tus datos de contacto."],
          words: [["Descripción de la función", "un texto corto sobre un trabajo voluntario: tareas, horario, lugar, requisitos y propósito."], ["Revisión de antecedentes", "una revisión de los registros de una persona, que muchas veces se pide para trabajar con niños o personas vulnerables."]],
          slides: [
            { title: "Los pedidos claros reciben más síes", bullets: ["\"¡Necesitamos ayuda!\" es demasiado vago", "Di exactamente qué, cuándo y dónde"] },
            { title: "Una descripción de la función responde", bullets: ["¿Qué voy a hacer? ¿Cuándo y cuánto tiempo?", "¿Dónde? ¿Qué habilidades o revisiones?", "¿Por qué importa? ¿A quién contacto?"] },
            { title: "Deja que la IA la redacte", bullets: ["Dale tus datos", "Pide que sea cálida, clara y corta", "Revisa tú cada dato"] }
          ],
          tryIt: "Escoge una función de voluntariado real que necesite tu organización. Escribe los datos, pide a la IA una descripción de la función de menos de 150 palabras y corrige lo que esté mal.",
          youCanNow: "escribir con ayuda de la IA una descripción clara de una función de voluntariado."
        },
        {
          title: "Escribir publicaciones y correos para reclutar",
          minutes: 5,
          goal: "Convertir una descripción de la función en una publicación para redes sociales y un correo a quienes los apoyan.",
          text: [
            "Cada lugar necesita un largo distinto. Una publicación en redes sociales es corta y amable, con una sola acción clara. Un correo a quienes los apoyan puede contar una pequeña historia y dar más detalles.",
            "Pide a la IA los dos a partir de la misma descripción: \"Usando esta descripción de la función, escribe una publicación de Facebook de 50 palabras con un llamado a la acción y un correo de 150 palabras a quienes nos apoyan que empiece con una historia corta sobre una familia que atendemos.\" Usa una historia inventada o aprobada, nunca los datos privados de una persona real sin permiso.",
            "Pide varias versiones y escoge la que más suene a ti. Agrega tú el enlace real de inscripción."
          ],
          steps: ["Pega tu descripción de la función en la IA.", "Pide una publicación corta para redes sociales con un llamado a la acción.", "Pide un correo más largo a quienes los apoyan.", "Pide dos versiones de cada uno y escoge una.", "Agrega tu enlace real de inscripción y revisa los datos."],
          words: [["Llamado a la acción", "lo único que le pides al lector que haga, como \"Inscríbete aquí\"."], ["Quienes los apoyan", "personas que ya conocen y quieren a tu organización: donantes, miembros, voluntarios anteriores."]],
          slides: [
            { title: "Ajusta el mensaje al lugar", bullets: ["Publicación en redes: corta, una acción", "Correo: una pequeña historia y más detalles"] },
            { title: "Pide a la IA los dos", bullets: ["Pega la descripción de la función", "Pide la publicación y el correo", "Pide dos versiones de cada uno"] },
            { title: "Antes de publicar", bullets: ["Escoge la que suene a ti", "Agrega el enlace real de inscripción", "Nada de historias privadas sin permiso"] }
          ],
          tryIt: "Usa tu descripción de la función de la Lección 1 para conseguir una publicación de 50 palabras para redes sociales y un correo de 150 palabras a quienes los apoyan. Escoge la mejor versión de cada uno y edítala.",
          youCanNow: "crear publicaciones y correos para reclutar a distintos públicos a partir de una sola descripción de la función."
        },
        {
          title: "Llegar a nuevos tipos de voluntarios",
          minutes: 5,
          goal: "Usar la IA para buscar ideas de dónde encontrar voluntarios y cómo hacer más fácil unirse.",
          text: [
            "Muchas organizaciones le piden ayuda a las mismas pocas personas una y otra vez. La IA es buena para dar ideas de lugares nuevos donde buscar: universidades y preparatorias locales que necesitan horas de servicio, empresas con días de voluntariado, comunidades de fe, centros para personas mayores y sitios de internet que publican oportunidades de voluntariado.",
            "Pide a la IA: \"Haz una lista de 10 lugares en una ciudad mediana para reclutar voluntarios de fin de semana para una despensa de alimentos, y una frase para decirle a cada uno.\" Revisa que cualquier grupo o sitio que nombre sea real antes de contactarlo.",
            "Pregunta también cómo hacer las funciones más fáciles de aceptar: turnos más cortos, funciones para toda la familia, tareas a distancia como hacer llamadas o escribir tarjetas, y materiales en los idiomas que habla tu comunidad."
          ],
          steps: ["Pide a la IA una lista de lugares para encontrar voluntarios.", "Pide una frase para decirle a cada uno.", "Revisa que cada lugar o sitio sea real.", "Pregunta cómo hacer más fácil unirse a la función.", "Escoge los tres mejores lugares para intentar."],
          words: [["Horas de servicio", "horas de voluntariado que las escuelas o los programas piden a los estudiantes."], ["Tarea a distancia", "trabajo voluntario que se hace desde casa, como llamadas, tarjetas o ayuda en línea."]],
          slides: [
            { title: "Busca más allá de los mismos pocos", bullets: ["Escuelas y universidades", "Empresas con días de voluntariado", "Comunidades de fe y centros para personas mayores"] },
            { title: "Busca ideas con la IA", bullets: ["Pide 10 lugares y qué decirles", "Revisa que cada lugar sea real"] },
            { title: "Haz más fácil decir que sí", bullets: ["Turnos más cortos", "Funciones para la familia y a distancia", "Los idiomas de tu comunidad"] }
          ],
          tryIt: "Pide a la IA 10 lugares para reclutar voluntarios para tu función en tu zona. Revísalos, luego escoge los tres mejores y anota a quién vas a contactar.",
          youCanNow: "encontrar nuevas fuentes de voluntarios y hacer más fácil unirse a las funciones."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar a los voluntarios correctos",
        questions: [
          { q: "¿Qué pedido de voluntarios probablemente recibirá más respuestas?", options: ["\"¡Necesitamos ayuda!\"", "\"Se buscan voluntarios, detalles después.\"", "\"Ayudante de despensa de alimentos, sábados de 9 a mediodía, dos veces al mes, sin experiencia.\"", "\"¿Alguien?\""], answer: 2, why: "Una función clara dice qué, cuándo y dónde." },
          { q: "¿Qué es un llamado a la acción?", options: ["Lo único que le pides al lector que haga", "Una llamada telefónica a un voluntario", "Un tipo de IA", "Una reunión de la junta"], answer: 0, why: "Le dice al lector el siguiente paso, como \"Inscríbete aquí\"." },
          { q: "La IA sugiere un grupo local de voluntarios del que nunca has oído. ¿Qué haces?", options: ["Lo contactas de inmediato con tu lista de voluntarios", "Lo pones en tu sitio web", "Supones que es real", "Revisas que sea real antes de contactarlo"], answer: 3, why: "La IA puede inventar nombres; revisa primero." },
          { q: "¿Cuál es una forma de hacer más fácil unirse a una función?", options: ["Solo turnos más largos", "Ofrecer turnos más cortos y tareas a distancia", "Pedir diez años de experiencia", "Aceptar solo a quienes ya son voluntarios"], answer: 1, why: "Las funciones flexibles dejan que más personas digan que sí." },
          { q: "Quieres una historia en tu correo a quienes los apoyan. ¿Qué es seguro?", options: ["El nombre y la situación de una persona atendida real sin permiso", "Una historia inventada o aprobada", "La dirección de la casa de un voluntario", "El monto que dio un donante"], answer: 1, why: "Nunca compartas datos privados de personas reales sin permiso." }
        ]
      }
    },
    {
      name: "Capítulo 2: Inscribir, recibir y conservar a los voluntarios",
      lessons: [
        {
          title: "Hacer un formulario de inscripción sencillo",
          minutes: 5,
          goal: "Crear un formulario de inscripción en línea corto y preguntar solo lo que necesitas.",
          text: [
            "Una herramienta de formularios gratis como Google Forms o Microsoft Forms deja que la gente se inscriba desde un enlace. Las respuestas van a una hoja de cálculo que tú controlas.",
            "Pregunta solo lo que necesitas: nombre, correo o teléfono, qué turnos puede cubrir y cualquier cosa que debas saber (como los idiomas que habla). No pidas números de Seguro Social, fechas de nacimiento ni otros datos delicados en un formulario sencillo. Si se necesita una revisión de antecedentes, usa el proceso aprobado por tu organización.",
            "La IA puede sugerir preguntas y redacción: \"Sugiere 6 preguntas cortas para un formulario de inscripción de voluntarios de una despensa de alimentos.\" Tú haces el formulario, y las respuestas se quedan en tu herramienta de formularios, no en la IA."
          ],
          steps: ["Abre Google Forms o Microsoft Forms y empieza un formulario en blanco.", "Pide a la IA que sugiera preguntas cortas.", "Quédate solo con lo que de verdad necesitas.", "Agrega las opciones de turnos como casillas.", "Prueba tú el formulario y luego copia el enlace para compartirlo."],
          words: [["Formulario", "un conjunto de preguntas en línea que la gente llena; las respuestas se guardan para ti."], ["Datos delicados", "información que podría dañar a alguien si se comparte, como números de identificación o datos de salud."]],
          slides: [
            { title: "Herramientas de formularios gratis", bullets: ["Google Forms o Microsoft Forms", "La gente se inscribe desde un enlace", "Las respuestas van a una hoja de cálculo que tú controlas"] },
            { title: "Pregunta solo lo que necesitas", bullets: ["Nombre y cómo contactarlo", "Qué turnos puede cubrir", "Nada de números de identificación ni fechas de nacimiento"] },
            { title: "Lo que hace la IA", bullets: ["Sugiere preguntas y redacción", "Tú haces el formulario", "Las respuestas nunca entran en la IA"] }
          ],
          tryIt: "Haz un formulario de inscripción para tu función con no más de seis preguntas. Llénalo tú para probarlo y copia el enlace en tu publicación para reclutar.",
          youCanNow: "hacer un formulario de inscripción de voluntarios corto y seguro."
        },
        {
          title: "Mensajes de bienvenida y recordatorio",
          minutes: 4,
          goal: "Escribir un mensaje de bienvenida y un recordatorio que hagan que los voluntarios nuevos se sientan listos.",
          text: [
            "Los primeros días deciden si un voluntario nuevo vuelve. Una bienvenida rápida hace que la gente se sienta querida y lista.",
            "Una buena bienvenida da las gracias, confirma la fecha, la hora y el lugar, dice qué ponerse o qué llevar, nombra a una persona de contacto y cuenta cómo será el primer turno. Un recordatorio unos días antes repite los datos clave.",
            "Pide a la IA los dos, con espacios en blanco: \"Escribe un correo de bienvenida cálido para un voluntario nuevo de la despensa de alimentos. Usa [nombre], [fecha del turno], [persona de contacto]. Menos de 120 palabras.\" Luego llena los datos con tu herramienta de correo o con combinación de correspondencia, no con la IA."
          ],
          steps: ["Haz una lista de lo que necesita saber un voluntario nuevo.", "Pide a la IA un mensaje de bienvenida con espacios en blanco.", "Pide a la IA un recordatorio corto para unos días antes.", "Llena los datos en tu herramienta de correo.", "Revisa cada fecha y hora."],
          words: [["Integración", "ayudar a un voluntario nuevo a prepararse: bienvenida, capacitación y primer turno."], ["Espacio en blanco", "un sustituto como [nombre] que luego cambias por el dato real."]],
          slides: [
            { title: "Los primeros días importan", bullets: ["Una bienvenida cálida hace que la gente vuelva"] },
            { title: "Una buena bienvenida dice", bullets: ["Gracias", "Fecha, hora y lugar", "Qué ponerse o qué llevar", "A quién contactar"] },
            { title: "Borrador con espacios en blanco", bullets: ["[nombre], [fecha del turno], [persona de contacto]", "Llena los datos en tu herramienta de correo", "Manda un recordatorio unos días antes"] }
          ],
          tryIt: "Pide a la IA un correo de bienvenida y un mensaje de recordatorio con espacios en blanco para tu función. Edita los dos para que suenen a tu organización.",
          youCanNow: "escribir mensajes de bienvenida y recordatorio que ayudan a los voluntarios nuevos a llegar listos."
        },
        {
          title: "Agradecer y conservar a los voluntarios",
          minutes: 5,
          goal: "Hacer un plan sencillo para agradecer a los voluntarios y saber por qué se quedan o se van.",
          text: [
            "Conservar a un voluntario es más fácil que encontrar uno nuevo. La gente se queda cuando se siente agradecida, útil y parte de un equipo.",
            "Formas sencillas de agradecer: una nota personal después del primer turno, compartir lo que hizo posible su trabajo (\"El equipo del sábado empacó 300 cajas\"), un reconocimiento en una reunión y pedir sus ideas. La IA puede ayudarte a escribir notas de agradecimiento y encuestas cortas, como tres preguntas sobre qué salió bien y qué cambiar.",
            "Escribe un plan corto: cuándo vas a agradecer, cómo vas a compartir los resultados y cuándo vas a pedir opiniones. Luego ponlo en tu calendario."
          ],
          steps: ["Planea un agradecimiento después del primer turno.", "Planea cómo vas a compartir los resultados con los voluntarios.", "Pide a la IA el borrador de una encuesta de opinión de tres preguntas.", "Pon en tu calendario las fechas del agradecimiento y de la encuesta."],
          words: [["Retención", "lograr que los voluntarios sigan volviendo con el tiempo."], ["Encuesta de opinión", "unas cuantas preguntas que piden a la gente qué salió bien y qué cambiar."]],
          slides: [
            { title: "Por qué se queda la gente", bullets: ["Se siente agradecida", "Se siente útil", "Se siente parte de un equipo"] },
            { title: "Formas de agradecer", bullets: ["Una nota después del primer turno", "Comparte resultados: \"empacamos 300 cajas\"", "Reconocimiento y pedir sus ideas"] },
            { title: "Tu plan para conservarlos", bullets: ["Cuándo vas a agradecer", "Cómo vas a compartir los resultados", "Cuándo vas a pedir opiniones"] }
          ],
          tryIt: "Tarea final: arma tu kit de reclutamiento completo: descripción de la función, publicación para redes sociales, correo, formulario de inscripción, mensaje de bienvenida, recordatorio y plan de agradecimiento. Edita cada pieza y revisa cada dato.",
          youCanNow: "reclutar, recibir y conservar voluntarios con mensajes escritos con IA que revisaste e hiciste tuyos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Inscribir, recibir y conservar a los voluntarios",
        questions: [
          { q: "¿Qué pregunta NO va en un formulario sencillo de inscripción de voluntarios?", options: ["¿Qué turnos puedes cubrir?", "Tu correo o teléfono", "Idiomas que hablas", "Tu número de Seguro Social"], answer: 3, why: "Los números de identificación delicados no van en un formulario sencillo." },
          { q: "¿Dónde deben quedarse las respuestas del formulario de los voluntarios?", options: ["En tu herramienta de formularios y tu hoja de cálculo", "Pegadas en un chat de IA", "Publicadas en internet", "En un grupo de mensajes"], answer: 0, why: "Los datos personales se quedan en herramientas que tú controlas, no en la IA." },
          { q: "Un buen mensaje de bienvenida incluye:", options: ["Solo un logo", "Un pedido de dinero", "Fecha, hora, lugar y una persona de contacto", "Nada más que \"Gracias\""], answer: 2, why: "Los datos claros ayudan a los voluntarios nuevos a llegar listos." },
          { q: "¿Cuándo debes mandar un recordatorio?", options: ["Un mes después del turno", "Nunca", "Solo si faltan", "Unos días antes del turno"], answer: 3, why: "Un recordatorio poco antes ayuda a la gente a acordarse." },
          { q: "¿Qué ayuda a que los voluntarios sigan volviendo?", options: ["No contactarlos nunca", "Turnos más largos sin descansos", "Compartir lo que hizo posible su trabajo", "No hacer caso a sus ideas"], answer: 2, why: "La gente se queda cuando ve su impacto y se siente agradecida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Reclutar voluntarios con IA",
    questions: [
      { q: "Una descripción clara de la función responde:", options: ["Solo el nombre de la organización", "Qué, cuándo, dónde, por qué y a quién contactar", "El sueldo del director", "Nada en particular"], answer: 1, why: "Los datos claros ayudan a la gente a decir que sí." },
      { q: "¿Cuándo se necesita muchas veces una revisión de antecedentes?", options: ["Para funciones que trabajan con niños o personas vulnerables", "Para cada correo", "Nunca", "Solo para donantes"], answer: 0, why: "Las organizaciones muchas veces piden revisiones para funciones con niños o personas vulnerables." },
      { q: "¿Qué le das a la IA para que escriba una descripción de la función?", options: ["Los teléfonos de los voluntarios", "Tu contraseña", "Los datos de la función", "Nada"], answer: 2, why: "La IA redacta los datos que le das." },
      { q: "Después de que la IA escribe el borrador de una descripción de la función, tú:", options: ["Revisas cada dato y agregas tus datos de contacto", "La publicas sin leerla", "Agregas la dirección de un voluntario", "La borras"], answer: 0, why: "Tú eres responsable de que sea correcta." },
      { q: "Una publicación en redes sociales para reclutar debe ser:", options: ["De diez páginas", "Llena de historias privadas", "Sin enlace", "Corta con una acción clara"], answer: 3, why: "Las publicaciones cortas con una acción funcionan mejor." },
      { q: "Un correo a quienes los apoyan puede:", options: ["Incluir los montos que dieron los donantes", "Contar una historia corta y dar más detalles", "Hacer una lista de nombres de personas atendidas", "No tener el enlace de inscripción"], answer: 1, why: "El correo da más espacio para una historia y detalles." },
      { q: "¿Por qué pedir a la IA dos versiones?", options: ["Para usar el doble de datos", "Para escoger la que más suene a ti", "La IA lo exige", "Para confundir a los lectores"], answer: 1, why: "Comparar versiones te ayuda a elegir tu voz." },
      { q: "¿Cuál es un buen lugar nuevo para encontrar voluntarios?", options: ["Solo las mismas cinco personas", "La lista de teléfonos privada de un desconocido", "Una lista de correo basura", "Una preparatoria local que necesita horas de servicio"], answer: 3, why: "Los estudiantes muchas veces necesitan horas de servicio." },
      { q: "La IA nombra un sitio web de voluntariado que no conoces. Debes:", options: ["Revisar primero que sea real", "Mandarle tu lista de voluntarios", "Pagarle de inmediato", "Confiar en él"], answer: 0, why: "La IA puede inventar nombres y sitios." },
      { q: "¿Qué hace más fácil unirse a una función?", options: ["Un turno de 12 horas", "Reglas estrictas de experiencia", "Una tarea a distancia como escribir tarjetas", "Materiales solo en inglés para una zona donde se habla español"], answer: 2, why: "Las tareas a distancia y flexibles les quedan a más personas." },
      { q: "¿Qué herramientas gratis pueden hacer un formulario de inscripción?", options: ["Una calculadora", "Una aplicación de fotos", "Una aplicación de música", "Google Forms o Microsoft Forms"], answer: 3, why: "Las dos hacen formularios en línea que guardan las respuestas." },
      { q: "En un formulario de inscripción sencillo, pregunta:", options: ["Todos los datos que se te ocurran", "Datos bancarios", "Solo lo que de verdad necesitas", "Fechas de nacimiento y números de identificación"], answer: 2, why: "Menos datos significan menos riesgo e inscripciones más rápidas." },
      { q: "Lo que hace la IA al armar un formulario es:", options: ["Guardar las respuestas de los voluntarios", "Sugerir preguntas y redacción", "Hacer revisiones de antecedentes", "Aprobar a los voluntarios"], answer: 1, why: "Tú haces el formulario; las respuestas se quedan en tu herramienta." },
      { q: "Antes de compartir el enlace de tu formulario, debes:", options: ["Llenarlo tú para probarlo", "Borrar la mitad de las preguntas al azar", "Esconder el enlace", "Pedirle a la IA que lo llene"], answer: 0, why: "Probarlo encuentra errores antes de que lo vean los voluntarios." },
      { q: "Integración significa:", options: ["Quitar voluntarios", "Comprar un barco", "Ayudar a un voluntario nuevo a prepararse", "Escribir una solicitud de subvención"], answer: 2, why: "La integración cubre la bienvenida, la capacitación y el primer turno." },
      { q: "¿Cómo debe aparecer el nombre de un voluntario en una instrucción a la IA para un correo de bienvenida?", options: ["Como [nombre], que se llena después", "Nombre completo y dirección", "Nombre y teléfono", "Nombre y fecha de nacimiento"], answer: 0, why: "Los espacios en blanco dejan los datos personales fuera de la IA." },
      { q: "¿Dónde llenas los datos reales de los correos de bienvenida?", options: ["En el chat de la IA", "En una publicación pública", "En una pantalla compartida de una biblioteca", "En tu herramienta de correo o con combinación de correspondencia"], answer: 3, why: "Los datos reales se quedan en herramientas que tú controlas." },
      { q: "¿Por qué se quedan los voluntarios?", options: ["Nunca los contactan", "Se sienten agradecidos, útiles y parte de un equipo", "No tienen opción", "Los turnos se hacen más largos"], answer: 1, why: "El reconocimiento y el propósito hacen que la gente vuelva." },
      { q: "Una encuesta de opinión corta debe preguntar:", options: ["Su cuenta de banco", "Qué salió bien y qué cambiar", "Su historial médico", "Su contraseña"], answer: 1, why: "Las opiniones te ayudan a mejorar la experiencia." },
      { q: "Tu plan de agradecimiento debe:", options: ["Quedarse solo en tu cabeza", "Hacerse una vez cada cinco años", "Dejarse a la IA para que lo mande", "Ponerse en tu calendario con fechas"], answer: 3, why: "Programarlo asegura que se haga." }
    ]
  }
};

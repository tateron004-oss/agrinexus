"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-marketing-outreach.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-marketing-outreach-es",
  lang: "es",
  translationOf: "nonprofit-ai-marketing-outreach",
  category: "Non Profits",
  name: "IA para la difusión y el alcance comunitario",
  skills: "Definir tu público y tu mensaje, Escribir publicaciones para redes sociales con IA, Escribir borradores del boletín, Hacer la difusión clara y accesible, Planear un mes de difusión",
  outcome: "usar la IA para planear y escribir borradores de un mes de difusión de un programa de tu organización: un mensaje clave para un público, cuatro publicaciones para redes sociales, un artículo corto para el boletín y un volante en lenguaje sencillo, todo revisado, accesible y con la voz de tu organización.",
  about: [
    "Este curso es para personal y voluntarios de organizaciones sin fines de lucro y comunidades de fe que se encargan de las redes sociales, los boletines, los volantes y los anuncios a la comunidad, muchas veces además de todo lo demás.",
    "Vas a aprender a nombrar tu público y tu mensaje, y luego a usar la IA para escribir rápido borradores de publicaciones, boletines y volantes, hacerlos claros y accesibles para todas las personas de tu comunidad y planear un mes de difusión.",
    "Cada lección dura unos cinco minutos y termina con una tarea práctica que se vuelve parte de tu plan de difusión. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz un plan de difusión de un mes para un programa o evento real. Incluye un público y un mensaje clave, cuatro publicaciones para redes sociales con descripciones de imagen, un artículo de 200 palabras para el boletín y el texto de un volante en lenguaje sencillo, todo escrito con IA, revisado en cuanto a datos y privacidad, y editado para que suene a tu organización. Ponlos en un calendario sencillo de cuatro semanas.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personal y voluntarios de organizaciones sin fines de lucro y de fe que manejan las redes sociales, los boletines, los volantes y los anuncios para la comunidad, muchas veces además de todo lo demás.",
    startingPoint: "Publican en redes sociales y mandan correos o volantes de vez en cuando, casi siempre con prisa. Muchos no han planeado la difusión con tiempo, no han escrito descripciones de imágenes ni han usado la IA para borradores.",
    gap: "La difusión hecha con prisa, poco clara o difícil de leer no llega a las personas para quienes es el programa, incluidas las que leen en otro idioma o usan un lector de pantalla. Necesitan planear rápido con la IA un mes de difusión clara, accesible y honesta, sin poner en riesgo la privacidad de nadie.",
    constraints: [
      "Tiempo: la difusión se hace además de otros trabajos, así que cada lección dura unos 5 minutos",
      "Privacidad: permiso por escrito para fotos de niños y de personas atendidas; nada de datos que identifiquen a alguien en las historias sin su acuerdo",
      "Las traducciones de la IA las revisa una persona de la comunidad que habla el idioma con fluidez",
      "Los boletines por correo necesitan una forma clara de darse de baja",
      "Dispositivos: un teléfono o una computadora con herramientas gratis"
    ],
    prerequisites: "\"Introducción a la IA para organizaciones sin fines de lucro\", o algo de experiencia usando un asistente de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un programa y un público", action: "escribir un mensaje clave que diga qué es, por qué le importa a ese público y qué hacer después", standard: "en una o dos oraciones" },
    { id: "O2", condition: "Con tu mensaje clave", action: "preparar con la IA cuatro publicaciones para redes sociales: un anuncio, una de detrás de cámaras, un agradecimiento y un último recordatorio", standard: "cada una corta, terminando con una sola acción y usando solo fotos e historias con permiso" },
    { id: "O3", condition: "Con las notas de tu programa", action: "escribir un artículo de boletín de 200 palabras con una historia, un número verdadero y cómo ayudar", standard: "con cada número, nombre, fecha y cita revisados" },
    { id: "O4", condition: "Con un borrador de difusión", action: "reescribirlo en lenguaje sencillo y preparar una traducción para tu comunidad", standard: "con la traducción revisada por una persona que habla el idioma con fluidez antes de compartirla" },
    { id: "O5", condition: "Con tus publicaciones y tu volante", action: "escribir texto alternativo y hacerlos accesibles con subtítulos, buen contraste y hashtags fáciles de leer", standard: "con un texto alternativo que coincide con lo que de verdad hay en cada imagen" },
    { id: "O6", condition: "Con tus piezas de difusión y la fecha del evento", action: "crear un calendario de difusión de cuatro semanas con semana, canal, pieza y quién publica", standard: "con las fechas revisadas en tu calendario real" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Mensaje y canales",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conocer a tu público y tu mensaje",
          minutes: 5,
          goal: "Escribir un mensaje clave claro para un público.",
          text: [
            "La buena difusión le habla a un grupo a la vez. A los voluntarios, los donantes, las familias que atiendes, los miembros de la iglesia y los negocios locales les importan cosas distintas.",
            "Un mensaje clave dice, en una o dos frases, lo que quieres que ese público sepa y haga. Ejemplo para madres y padres: \"Las tutorías gratis después de clases empiezan el 8 de septiembre en el centro comunitario. Inscríbanse antes del 1 de septiembre para que su hijo tenga lugar.\"",
            "La IA puede ayudarte a afinarlo. Pide: \"Este es nuestro programa: [datos públicos]. Escribe tres versiones de un mensaje de una frase para [público]. Cada una debe decir qué es, por qué les importa y qué hacer después.\""
          ],
          steps: ["Elige un programa y un público.", "Escribe lo que quieres que sepan y hagan.", "Pide a la IA tres versiones de una frase.", "Escoge la más clara y edítala."],
          words: [["Público", "el grupo de personas al que quieres llegar."], ["Mensaje clave", "las una o dos frases que más quieres que tu público recuerde y ponga en práctica."]],
          slides: [
            { title: "Un público a la vez", bullets: ["Voluntarios, donantes, familias, miembros", "A cada uno le importan cosas distintas"] },
            { title: "Un mensaje clave dice", bullets: ["Qué es", "Por qué les importa", "Qué hacer después"] },
            { title: "Afínalo con la IA", bullets: ["Pide tres versiones de una frase", "Escoge la más clara", "Edítala para que suene a ti"] }
          ],
          tryIt: "Escoge un programa y un público. Usa la IA para tener tres versiones de un mensaje clave y luego escribe tu versión final arriba de una hoja titulada \"Plan de difusión\".",
          youCanNow: "escribir un mensaje clave claro para un público.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué la difusión debe hablarle a un grupo a la vez?", options: ["A cada grupo le importan cosas distintas", "Es más barato imprimir", "Las redes sociales solo permiten un grupo", "Los donantes y los voluntarios son las mismas personas"], answer: 0, why: "A los voluntarios, los donantes, las familias y los negocios les importan cosas distintas." },
            { objective: "O1", q: "Tu mensaje para los voluntarios no dice qué hacer después. ¿Qué agregas?", options: ["Una historia más larga de la organización", "Una acción clara, como \"Inscríbete antes del viernes\"", "Más hashtags", "Una lista de todos los programas"], answer: 1, why: "Un mensaje clave dice qué es, por qué importa y qué hacer después." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir publicaciones para redes sociales con IA",
          minutes: 5,
          goal: "Escribir con IA cuatro borradores de publicaciones para redes sociales sobre un programa.",
          text: [
            "Las publicaciones en redes sociales funcionan mejor cuando son cortas, muestran un momento real y terminan con una sola acción clara. Cada plataforma va con un largo distinto: una publicación de Facebook puede ser más larga, un texto de Instagram acompaña una foto y una publicación en una plataforma de textos cortos debe ser breve.",
            "Pide: \"Usando este mensaje clave: [mensaje], escribe cuatro publicaciones para [plataforma] a lo largo de cuatro semanas: un anuncio, una publicación de detrás de cámaras, un agradecimiento a voluntarios o participantes y un último recordatorio. Menos de 60 palabras cada una, amables, con un llamado a la acción.\"",
            "Usa tus propias fotos con permiso. Nunca publiques fotos de niños o de personas atendidas sin consentimiento por escrito, y nunca compartas la historia de alguien con datos que lo puedan identificar a menos que haya aceptado."
          ],
          steps: ["Dale a la IA tu mensaje clave y la plataforma.", "Pide cuatro tipos de publicación a lo largo de cuatro semanas.", "Edita cada una para que suene a tu organización.", "Escoge fotos que tengas permiso de usar."],
          words: [["Plataforma", "un servicio de redes sociales, como Facebook o Instagram."], ["Texto de la publicación", "el texto que acompaña una foto o un video."], ["Consentimiento", "el acuerdo de una persona, mejor por escrito, para que la muestren o la citen."]],
          slides: [
            { title: "Publicaciones que funcionan", bullets: ["Cortas", "Un momento real", "Una sola acción clara"] },
            { title: "Cuatro tipos de publicación", bullets: ["Anuncio", "Detrás de cámaras", "Agradecimiento", "Último recordatorio"] },
            { title: "Fotos e historias", bullets: ["Usa tus propias fotos con permiso", "Consentimiento por escrito para niños y personas atendidas"] }
          ],
          tryIt: "Usa la IA para escribir cuatro borradores de publicaciones para una plataforma a partir de tu mensaje clave. Edítalas y agrégalas a tu plan de difusión.",
          youCanNow: "escribir con IA los borradores de una serie de publicaciones para redes sociales.",
          quickCheck: [
            { objective: "O2", q: "¿Qué tipo de publicación debe ser breve?", options: ["Una publicación de Facebook", "Un artículo de boletín", "Una publicación en una plataforma de textos cortos", "Un volante impreso"], answer: 2, why: "Una publicación en una plataforma de textos cortos debe ser breve; una publicación de Facebook puede ser más larga." },
            { objective: "O2", q: "Una participante contó una historia conmovedora, pero no aceptó que se diera su nombre. ¿Cómo la publicas?", options: ["La publicas con su nombre", "Publicas su foto con la historia", "La publicas y le preguntas después", "La compartes solo sin datos que la identifiquen, o no la compartes"], answer: 3, why: "Nunca compartas la historia de alguien con datos que lo identifiquen a menos que haya aceptado." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir un artículo para el boletín",
          minutes: 5,
          goal: "Convertir con IA notas de un programa en un artículo corto para el boletín.",
          text: [
            "Los boletines mantienen cerca a donantes, voluntarios y miembros. Un artículo corto cuenta una historia: qué pasó, a quién ayudó (sin datos privados), qué significa para la misión y qué pueden hacer los lectores.",
            "Dale a la IA tus notas: \"Convierte estas notas en un artículo de 200 palabras para el boletín de quienes nos apoyan. Usa un título amable, una historia corta, un número cierto, y termina diciendo cómo ayudar: [notas].\"",
            "Revisa el número y cada nombre y fecha. Agrega una cita solo si una persona real la dijo y aceptó que la citaran. Si mandas boletines por correo, incluye una forma clara de darse de baja y sigue las reglas de tu herramienta de correo."
          ],
          steps: ["Escribe notas sueltas sobre un momento reciente.", "Pide a la IA un artículo de 200 palabras con título, historia, número y cómo ayudar.", "Revisa cada dato y cada cita.", "Agrégalo a tu boletín con una foto que puedas usar."],
          words: [["Boletín", "una actualización frecuente que se manda a quienes apoyan, por correo o en papel."], ["Darse de baja", "un enlace que deja que alguien deje de recibir tus correos."]],
          slides: [
            { title: "Una historia por artículo", bullets: ["Qué pasó", "A quién ayudó, sin datos privados", "Qué pueden hacer los lectores"] },
            { title: "La instrucción", bullets: ["200 palabras, título amable", "Una historia, un número cierto", "Termina con cómo ayudar"] },
            { title: "Antes de enviar", bullets: ["Revisa datos y citas", "Solo citas reales, con permiso", "Incluye un enlace para darse de baja"] }
          ],
          tryIt: "Escribe cinco líneas de notas sobre un momento reciente de un programa. Usa la IA para convertirlas en un artículo de 200 palabras para el boletín. Revisa cada dato.",
          youCanNow: "convertir notas de un programa en un artículo revisado para el boletín.",
          quickCheck: [
            { objective: "O3", q: "¿Cuántas historias debe contar un artículo corto de boletín?", options: ["Una", "Cinco", "Ninguna", "Todas las que quepan"], answer: 0, why: "Un artículo corto cuenta una sola historia." },
            { objective: "O3", q: "El borrador del boletín de la IA agrega una cita de un voluntario que nunca la dijo. ¿Qué haces?", options: ["La dejas; suena bonita", "La quitas, o le pides al voluntario una cita real con la que esté de acuerdo", "Cambias el nombre del voluntario", "La mueves al final"], answer: 1, why: "Agrega una cita solo si una persona real la dijo y aceptó que la citaran." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Mensaje y canales",
        questions: [
          { objective: "O1", q: "¿Qué es un mensaje clave?", options: ["Una o dos frases que quieres que un público recuerde y ponga en práctica", "Tu informe anual completo", "Una contraseña", "Una lista de donantes"], answer: 0, why: "Un mensaje clave es corto y lleva a la acción." },
          { objective: "O1", q: "¿Cuál es el mejor mensaje clave para madres y padres?", options: ["\"Hacemos muchas cosas.\"", "\"Las tutorías gratis empiezan el 8 de septiembre en el centro comunitario. Inscríbanse antes del 1 de septiembre.\"", "\"Más información.\"", "\"Apóyennos.\""], answer: 1, why: "Dice qué es, por qué importa y qué hacer después." },
          { objective: "O2", q: "Quieres publicar una foto de niños en tu programa. Necesitas:", options: ["Nada", "Un filtro", "Consentimiento por escrito de su madre, padre o tutor", "Un texto escrito por la IA"], answer: 2, why: "Las fotos de niños necesitan permiso." },
          { objective: "O3", q: "Una cita en un artículo del boletín debe venir de:", options: ["La IA", "Un voluntario inventado", "Una persona famosa con la que nunca hablaste", "Una persona real que aceptó que la citaran"], answer: 3, why: "Las citas inventadas son deshonestas." },
          { objective: "O3", q: "¿Por qué incluir un enlace para darse de baja en los boletines por correo?", options: ["Para que la gente pueda dejar de recibir correos", "Para conseguir más donaciones", "Es un adorno", "Para compartir datos"], answer: 0, why: "La gente debe poder salirse." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llegar a todas las personas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lenguaje sencillo y otros idiomas",
          minutes: 5,
          goal: "Usar la IA para reescribir la difusión en lenguaje sencillo y hacer el borrador de una traducción para que la revisen.",
          text: [
            "Muchas personas de tu comunidad leen en un segundo idioma, leen a un nivel básico o están ocupadas y leen por encima. El lenguaje sencillo ayuda a todos: frases cortas, palabras comunes y lo más importante primero.",
            "Pide: \"Reescribe esto a un nivel de lectura de sexto grado. Frases cortas. Pon primero la fecha, el lugar y cómo inscribirse.\" Luego: \"Traduce esto al inglés para las familias de nuestra comunidad.\"",
            "Las traducciones de la IA pueden estar mal o sonar raras. Pide siempre a alguien de tu comunidad que hable bien el idioma que revise la traducción antes de compartirla."
          ],
          steps: ["Pide a la IA que reescriba tu texto a un nivel de lectura de sexto grado.", "Pon primero la fecha, el lugar y la acción.", "Pide una traducción a un idioma que use tu comunidad.", "Pide a alguien que hable bien el idioma que la revise."],
          words: [["Lenguaje sencillo", "escribir de forma que la gente entienda a la primera lectura."], ["Nivel de lectura", "qué tan fácil es leer un texto; un grado más bajo es más fácil."]],
          slides: [
            { title: "El lenguaje sencillo ayuda a todos", bullets: ["Frases cortas, palabras comunes", "Lo más importante primero"] },
            { title: "Pide a la IA", bullets: ["\"Reescríbelo a un nivel de lectura de sexto grado\"", "\"Traduce esto al inglés\""] },
            { title: "Revisa las traducciones", bullets: ["La IA se puede equivocar", "Alguien de la comunidad que hable bien el idioma revisa"] }
          ],
          tryIt: "Toma tu mensaje clave y una publicación. Pide a la IA que los reescriba en lenguaje sencillo y que los traduzca a un idioma que use tu comunidad. Anota quién podría revisar la traducción.",
          youCanNow: "hacer la difusión más sencilla y preparar traducciones para que las revise alguien que hable bien el idioma.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es parte del lenguaje sencillo?", options: ["Oraciones largas", "Palabras técnicas", "Oraciones cortas y palabras comunes", "Lo más importante al final"], answer: 2, why: "El lenguaje sencillo usa oraciones cortas, palabras comunes y lo más importante primero." },
            { objective: "O4", q: "La IA tradujo tu volante al vietnamita y nadie del personal lo habla. ¿Qué haces?", options: ["Lo compartes de todos modos", "Le pides a la IA que revise su propia traducción", "Usas solo el inglés", "Primero buscas a una persona de tu comunidad que lo hable con fluidez para que lo revise"], answer: 3, why: "Las traducciones de la IA pueden tener errores, así que una persona de la comunidad que habla el idioma las revisa antes de compartirlas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer accesible la difusión",
          minutes: 4,
          goal: "Escribir descripciones de imágenes y hacer que publicaciones y volantes sean más fáciles de usar para todos.",
          text: [
            "La difusión accesible funciona para personas ciegas o con baja visión, sordas o que usan un lector de pantalla. El texto alternativo es una descripción corta de una imagen que el lector de pantalla lee en voz alta.",
            "La IA puede escribir el borrador del texto alternativo: \"Escribe un texto alternativo de menos de 125 caracteres para una foto de voluntarios separando latas en una colecta de alimentos.\" Revisa que describa lo que de verdad está en la foto.",
            "Otras mejoras fáciles: pon subtítulos en los videos, usa buen contraste de colores en los volantes, no pongas palabras importantes solo dentro de una imagen y escribe los hashtags con mayúsculas (#AlimentaATuCiudad) para que los lectores de pantalla los digan bien."
          ],
          steps: ["Escribe un texto alternativo para cada imagen (la IA puede hacer el borrador).", "Agrega subtítulos a los videos.", "Usa buen contraste en los volantes.", "Deja los datos clave en el texto, no solo en la imagen.", "Pon en mayúscula cada palabra de los hashtags."],
          words: [["Texto alternativo", "una descripción corta por escrito de una imagen, que los lectores de pantalla leen en voz alta."], ["Lector de pantalla", "un programa que lee en voz alta el texto de la pantalla para personas ciegas o con baja visión."], ["Contraste", "qué tan distinto es el color del texto del color del fondo."]],
          slides: [
            { title: "Difusión accesible", bullets: ["Funciona para personas ciegas, con baja visión o sordas", "El texto alternativo describe las imágenes"] },
            { title: "La IA escribe el borrador del texto alternativo", bullets: ["Menos de 125 caracteres", "Revisa que coincida con la foto"] },
            { title: "Mejoras fáciles", bullets: ["Subtítulos en los videos", "Buen contraste", "Datos clave en el texto, no solo en imágenes", "#MayúsculaEnCadaPalabra"] }
          ],
          tryIt: "Escribe el texto alternativo de las fotos de tus cuatro publicaciones, con la IA para el borrador y tú para revisar. Corrige los hashtags para que cada palabra empiece con mayúscula.",
          youCanNow: "hacer accesibles publicaciones y volantes con texto alternativo, subtítulos y un diseño claro.",
          quickCheck: [
            { objective: "O5", q: "¿A quién ayuda el texto alternativo?", options: ["A las personas que usan un lector de pantalla", "Solo a los buscadores", "Solo al personal", "A las personas con internet rápido"], answer: 0, why: "Un lector de pantalla lee en voz alta el texto alternativo para las personas ciegas o con baja visión." },
            { objective: "O5", q: "Tu volante tiene la fecha y el lugar solo dentro de una imagen. ¿Qué cambias?", options: ["Nada", "Pones los datos importantes también en el texto", "Haces la imagen más grande", "Agregas más imágenes"], answer: 1, why: "Los lectores de pantalla no pueden leer las palabras que están dentro de una imagen." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Planear un mes de difusión",
          minutes: 5,
          goal: "Poner tus piezas de difusión en un calendario de cuatro semanas.",
          text: [
            "Un calendario sencillo mantiene constante la difusión. Anota cuatro semanas. Para cada semana, escribe qué sale, en qué canal y quién lo publica.",
            "La IA puede sugerir un horario: \"Estas son mis piezas: [lista]. Nuestro evento es el [fecha]. Haz un calendario de difusión de cuatro semanas en una tabla: semana, canal, pieza, quién publica.\" Compara las fechas con tu calendario real.",
            "Después, mira qué funcionó: inscripciones, comentarios, veces que se compartió, respuestas. Sigue haciendo lo que atrajo a la gente."
          ],
          steps: ["Haz una lista de tus piezas: publicaciones, boletín, volante.", "Pide a la IA una tabla de calendario de cuatro semanas.", "Compara las fechas con tu calendario real.", "Asigna quién publica cada pieza.", "Después del mes, anota qué atrajo a la gente."],
          words: [["Calendario de contenido", "un plan de lo que vas a publicar o mandar, y cuándo."], ["Canal", "una forma de llegar a la gente: redes sociales, correo, volantes, anuncios."]],
          slides: [
            { title: "Un calendario sencillo", bullets: ["Cuatro semanas", "Qué sale, dónde y quién lo publica"] },
            { title: "Pide a la IA una tabla", bullets: ["Semana, canal, pieza, quién publica", "Revisa tú las fechas"] },
            { title: "Aprende de los resultados", bullets: ["Inscripciones, comentarios, veces compartido", "Sigue con lo que atrajo a la gente"] }
          ],
          tryIt: "Tarea final: termina tu plan de difusión de un mes. Pon tu mensaje clave, cuatro publicaciones con texto alternativo, el artículo del boletín y el texto del volante en lenguaje sencillo en un calendario de cuatro semanas.",
          youCanNow: "planear y escribir con IA los borradores de un mes de difusión de tu organización.",
          quickCheck: [
            { objective: "O6", q: "¿Qué revisas después de un mes de difusión?", options: ["Solo cuántas publicaciones hiciste", "El color de los volantes", "Inscripciones, comentarios, veces compartido y respuestas", "Las publicaciones de otros grupos"], answer: 2, why: "Revisa qué funcionó: inscripciones, comentarios, veces compartido y respuestas." },
            { objective: "O6", q: "El calendario de la IA pone el último recordatorio después de la fecha de tu evento. ¿Qué haces?", options: ["Lo usas así", "Borras el recordatorio", "Lo publicas dos veces", "Lo pasas a antes del evento, revisando las fechas en tu calendario real"], answer: 3, why: "Revisa las fechas de la IA con tu calendario real." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llegar a todas las personas",
        questions: [
          { objective: "O4", q: "¿Qué es el lenguaje sencillo?", options: ["Escribir sin puntuación", "Escribir de forma que la gente entienda a la primera", "Frases muy largas", "Solo palabras técnicas"], answer: 1, why: "El lenguaje sencillo se entiende a la primera lectura." },
          { objective: "O4", q: "La IA tradujo tu volante al inglés. Antes de compartirlo, debes:", options: ["Compartirlo de inmediato", "Traducirlo otra vez con IA", "Pedir a alguien que hable bien el idioma que lo revise", "Acortarlo"], answer: 2, why: "Las traducciones de la IA pueden estar mal." },
          { objective: "O5", q: "¿Qué es el texto alternativo?", options: ["Una contraseña de respaldo", "Una segunda publicación", "Un tipo de letra", "Una descripción corta de una imagen que leen los lectores de pantalla"], answer: 3, why: "El texto alternativo hace accesibles las imágenes." },
          { objective: "O5", q: "¿Qué hashtag es el más fácil para un lector de pantalla?", options: ["#AlimentaATuCiudad", "#alimentaatuciudad", "#ALIMENTAATUCIUDAD", "#a_a_t_c"], answer: 0, why: "Las mayúsculas ayudan a los lectores de pantalla a decir cada palabra." },
          { objective: "O6", q: "¿Qué es un calendario de contenido?", options: ["Una lista de días festivos", "Un plan de lo que publicas o mandas, y cuándo", "Una lista de cumpleaños de donantes", "Un formulario de impuestos"], answer: 1, why: "Mantiene la difusión constante y organizada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la difusión y el alcance comunitario",
    questions: [
      { objective: "O1", q: "La buena difusión le habla a:", options: ["Todos con el mismo mensaje", "Nadie en particular", "Un público a la vez", "Solo a la junta"], answer: 2, why: "A cada público le importan cosas distintas." },
      { objective: "O1", q: "Un mensaje clave debe decir:", options: ["Toda tu historia", "Solo tu logo", "Tu presupuesto", "Qué es, por qué les importa y qué hacer después"], answer: 3, why: "Esas partes llevan a la acción." },
      { objective: "O1", q: "Una buena forma de afinar un mensaje con IA es:", options: ["Pedir tres versiones cortas y escoger la más clara", "Pedir una versión muy larga", "Pedirle que elija a tu público", "No editar"], answer: 0, why: "Comparar versiones te ayuda a escoger." },
      { objective: "O2", q: "Las publicaciones en redes sociales funcionan mejor cuando son:", options: ["Largas y generales", "Cortas, reales y terminan con una acción", "Sin ninguna acción", "Llenas de palabras técnicas"], answer: 1, why: "Las publicaciones cortas y concretas consiguen respuestas." },
      { objective: "O2", q: "¿Cuál es uno de los cuatro tipos de publicación de la lección?", options: ["Una declaración de impuestos", "Un contrato legal", "Un último recordatorio", "Un cambio de contraseña"], answer: 2, why: "Los recordatorios ayudan a la gente a actuar antes de una fecha límite." },
      { objective: "O2", q: "¿Qué es el texto de una publicación?", options: ["Un sombrero", "Un regalo de un donante", "Una dirección web", "El texto que acompaña una foto o un video"], answer: 3, why: "El texto explica la imagen o el video." },
      { objective: "O2", q: "Antes de compartir la historia de una persona atendida, necesitas:", options: ["Su consentimiento y nada de datos que la identifiquen, salvo que haya aceptado", "Nada", "Sus datos bancarios", "Una cita famosa"], answer: 0, why: "Las historias necesitan consentimiento y privacidad." },
      { objective: "O3", q: "Un artículo del boletín debe contar:", options: ["Todos los eventos del año", "Una historia con un número cierto y cómo ayudar", "Solo nombres de donantes", "Nada sobre la misión"], answer: 1, why: "Una historia enfocada se lee más fácil." },
      { objective: "O3", q: "¿Qué debes revisar en un borrador de boletín hecho con IA?", options: ["Solo el color del título", "Nada", "Cada número, nombre, fecha y cita", "Solo el número de palabras"], answer: 2, why: "La IA puede equivocarse en los datos." },
      { objective: "O3", q: "Un enlace para darse de baja deja que la gente:", options: ["Done dos veces", "Sea voluntaria", "Cambie tu contraseña", "Deje de recibir tus correos"], answer: 3, why: "La gente debe poder salirse." },
      { objective: "O4", q: "¿Qué instrucción hace que un texto sea más fácil de leer?", options: ["\"Reescríbelo a un nivel de lectura de sexto grado con frases cortas.\"", "\"Hazlo más complicado.\"", "\"Agrega palabras técnicas.\"", "\"Hazlo más largo.\""], answer: 0, why: "Los niveles de lectura más bajos son más fáciles." },
      { objective: "O4", q: "En lenguaje sencillo, ¿qué va primero?", options: ["Una historia larga", "Lo más importante, como la fecha, el lugar y la acción", "Agradecimientos a la junta", "Notas legales"], answer: 1, why: "Los lectores ocupados ven primero los datos clave." },
      { objective: "O4", q: "¿Quién debe revisar una traducción hecha con IA?", options: ["La IA otra vez", "Nadie", "Alguien de tu comunidad que hable bien el idioma", "Un sitio web cualquiera"], answer: 2, why: "Las personas que hablan bien el idioma encuentran errores." },
      { objective: "O5", q: "Un lector de pantalla es:", options: ["Una persona que lee pantallas", "Una televisión", "Una impresora", "Un programa que lee en voz alta el texto de la pantalla"], answer: 3, why: "Ayuda a personas ciegas o con baja visión." },
      { objective: "O5", q: "La IA escribió el texto alternativo de una foto. Debes:", options: ["Revisar que coincida con lo que de verdad está en la foto", "Usarlo sin mirarlo", "Borrar la foto", "Hacerlo de 500 palabras"], answer: 0, why: "La IA puede describir mal las imágenes." },
      { objective: "O5", q: "¿Cuál es una mejora de accesibilidad fácil para los videos?", options: ["Quitar el sonido", "Agregar subtítulos", "Hacerlo más largo", "Usar letra diminuta"], answer: 1, why: "Los subtítulos ayudan a personas sordas o a quienes lo ven sin sonido." },
      { objective: "O5", q: "¿Por qué evitar poner los datos clave solo dentro de una imagen?", options: ["Las imágenes son ilegales", "Cuesta más", "Los lectores de pantalla no pueden leer las palabras de una imagen", "A los donantes no les gustan las imágenes"], answer: 2, why: "El texto de la publicación llega a todos." },
      { objective: "O6", q: "Una tabla de calendario de contenido debe incluir:", options: ["Solo colores", "Montos de donaciones", "Contraseñas", "Semana, canal, pieza y quién publica"], answer: 3, why: "Así la difusión se mantiene organizada." },
      { objective: "O6", q: "La IA hizo tu calendario de difusión. Antes de usarlo:", options: ["Compara sus fechas con tu calendario real", "Publica todo hoy", "Confía en cada fecha", "Bórralo"], answer: 0, why: "La IA puede equivocarse con las fechas." },
      { objective: "O6", q: "Después de un mes de difusión, debes:", options: ["No mirar nunca los resultados", "Anotar qué atrajo a la gente y seguir haciéndolo", "Borrar todas las publicaciones", "Dejar toda la difusión"], answer: 1, why: "Los resultados muestran qué funciona." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Público y mensaje clave",
        objective: "O1",
        notYet: "No hay un solo público, o el mensaje no tiene un siguiente paso.",
        meets: "Un público y un mensaje de una o dos oraciones con qué es, por qué importa y qué hacer después.",
        exceeds: "El estudiante probó tres versiones y puede decir por qué eligió esta."
      },
      {
        name: "Cuatro publicaciones",
        objective: "O2",
        notYet: "Menos de cuatro publicaciones, o una foto o historia sin permiso.",
        meets: "Cuatro publicaciones cortas de los cuatro tipos, cada una terminando con una acción, con permiso para todas las fotos e historias.",
        exceeds: "Cada publicación tiene el largo adecuado para su plataforma."
      },
      {
        name: "Artículo de boletín",
        objective: "O3",
        notYet: "Un número, nombre, fecha o cita no está revisado.",
        meets: "Unas 200 palabras, una historia, un número verdadero y cómo ayudar, todo revisado.",
        exceeds: "Incluye una cita real con la que la persona estuvo de acuerdo."
      },
      {
        name: "Sencillo y accesible",
        objective: "O5",
        notYet: "El volante es difícil de leer, o las imágenes no tienen texto alternativo.",
        meets: "Volante en lenguaje sencillo con los datos clave primero, y texto alternativo para cada imagen que coincide con la foto.",
        exceeds: "También tiene una traducción revisada por una persona que habla el idioma con fluidez y hashtags fáciles de leer."
      },
      {
        name: "Calendario de cuatro semanas",
        objective: "O6",
        notYet: "No hay calendario, o las fechas no coinciden con el calendario real.",
        meets: "Una tabla de cuatro semanas con semana, canal, pieza y quién publica, con las fechas revisadas.",
        exceeds: "Anota cómo se van a medir los resultados después del mes."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones que hacen un mes planeado de difusión en 60 días (encuesta de seguimiento)",
      "Inscripciones a programas o asistencia a eventos informadas antes y después del mes de difusión",
      "Organizaciones que agregan texto alternativo y traducciones a su difusión"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratis",
      "Los datos públicos de un programa o evento real, y fotos que tienes permiso de usar",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Pide a los estudiantes que elijan antes de la sesión un programa o evento real que se acerque.",
      "Recuerda a los estudiantes que se necesita permiso por escrito para fotos de niños y de personas atendidas.",
      "Invita a una persona de la comunidad que hable el idioma con fluidez para revisar las traducciones hechas en la sesión.",
      "Prueben juntos un lector de pantalla en un teléfono para que los estudiantes oigan por qué importan el texto alternativo y los hashtags.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

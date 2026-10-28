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
  chapters: [
    {
      name: "Capítulo 1: Mensaje y canales",
      lessons: [
        {
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
          youCanNow: "escribir un mensaje clave claro para un público."
        },
        {
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
          youCanNow: "escribir con IA los borradores de una serie de publicaciones para redes sociales."
        },
        {
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
          youCanNow: "convertir notas de un programa en un artículo revisado para el boletín."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Mensaje y canales",
        questions: [
          { q: "¿Qué es un mensaje clave?", options: ["Una o dos frases que quieres que un público recuerde y ponga en práctica", "Tu informe anual completo", "Una contraseña", "Una lista de donantes"], answer: 0, why: "Un mensaje clave es corto y lleva a la acción." },
          { q: "¿Cuál es el mejor mensaje clave para madres y padres?", options: ["\"Hacemos muchas cosas.\"", "\"Las tutorías gratis empiezan el 8 de septiembre en el centro comunitario. Inscríbanse antes del 1 de septiembre.\"", "\"Más información.\"", "\"Apóyennos.\""], answer: 1, why: "Dice qué es, por qué importa y qué hacer después." },
          { q: "Quieres publicar una foto de niños en tu programa. Necesitas:", options: ["Nada", "Un filtro", "Consentimiento por escrito de su madre, padre o tutor", "Un texto escrito por la IA"], answer: 2, why: "Las fotos de niños necesitan permiso." },
          { q: "Una cita en un artículo del boletín debe venir de:", options: ["La IA", "Un voluntario inventado", "Una persona famosa con la que nunca hablaste", "Una persona real que aceptó que la citaran"], answer: 3, why: "Las citas inventadas son deshonestas." },
          { q: "¿Por qué incluir un enlace para darse de baja en los boletines por correo?", options: ["Para que la gente pueda dejar de recibir correos", "Para conseguir más donaciones", "Es un adorno", "Para compartir datos"], answer: 0, why: "La gente debe poder salirse." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llegar a todas las personas",
      lessons: [
        {
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
          youCanNow: "hacer la difusión más sencilla y preparar traducciones para que las revise alguien que hable bien el idioma."
        },
        {
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
          youCanNow: "hacer accesibles publicaciones y volantes con texto alternativo, subtítulos y un diseño claro."
        },
        {
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
          youCanNow: "planear y escribir con IA los borradores de un mes de difusión de tu organización."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llegar a todas las personas",
        questions: [
          { q: "¿Qué es el lenguaje sencillo?", options: ["Escribir sin puntuación", "Escribir de forma que la gente entienda a la primera", "Frases muy largas", "Solo palabras técnicas"], answer: 1, why: "El lenguaje sencillo se entiende a la primera lectura." },
          { q: "La IA tradujo tu volante al inglés. Antes de compartirlo, debes:", options: ["Compartirlo de inmediato", "Traducirlo otra vez con IA", "Pedir a alguien que hable bien el idioma que lo revise", "Acortarlo"], answer: 2, why: "Las traducciones de la IA pueden estar mal." },
          { q: "¿Qué es el texto alternativo?", options: ["Una contraseña de respaldo", "Una segunda publicación", "Un tipo de letra", "Una descripción corta de una imagen que leen los lectores de pantalla"], answer: 3, why: "El texto alternativo hace accesibles las imágenes." },
          { q: "¿Qué hashtag es el más fácil para un lector de pantalla?", options: ["#AlimentaATuCiudad", "#alimentaatuciudad", "#ALIMENTAATUCIUDAD", "#a_a_t_c"], answer: 0, why: "Las mayúsculas ayudan a los lectores de pantalla a decir cada palabra." },
          { q: "¿Qué es un calendario de contenido?", options: ["Una lista de días festivos", "Un plan de lo que publicas o mandas, y cuándo", "Una lista de cumpleaños de donantes", "Un formulario de impuestos"], answer: 1, why: "Mantiene la difusión constante y organizada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la difusión y el alcance comunitario",
    questions: [
      { q: "La buena difusión le habla a:", options: ["Todos con el mismo mensaje", "Nadie en particular", "Un público a la vez", "Solo a la junta"], answer: 2, why: "A cada público le importan cosas distintas." },
      { q: "Un mensaje clave debe decir:", options: ["Toda tu historia", "Solo tu logo", "Tu presupuesto", "Qué es, por qué les importa y qué hacer después"], answer: 3, why: "Esas partes llevan a la acción." },
      { q: "Una buena forma de afinar un mensaje con IA es:", options: ["Pedir tres versiones cortas y escoger la más clara", "Pedir una versión muy larga", "Pedirle que elija a tu público", "No editar"], answer: 0, why: "Comparar versiones te ayuda a escoger." },
      { q: "Las publicaciones en redes sociales funcionan mejor cuando son:", options: ["Largas y generales", "Cortas, reales y terminan con una acción", "Sin ninguna acción", "Llenas de palabras técnicas"], answer: 1, why: "Las publicaciones cortas y concretas consiguen respuestas." },
      { q: "¿Cuál es uno de los cuatro tipos de publicación de la lección?", options: ["Una declaración de impuestos", "Un contrato legal", "Un último recordatorio", "Un cambio de contraseña"], answer: 2, why: "Los recordatorios ayudan a la gente a actuar antes de una fecha límite." },
      { q: "¿Qué es el texto de una publicación?", options: ["Un sombrero", "Un regalo de un donante", "Una dirección web", "El texto que acompaña una foto o un video"], answer: 3, why: "El texto explica la imagen o el video." },
      { q: "Antes de compartir la historia de una persona atendida, necesitas:", options: ["Su consentimiento y nada de datos que la identifiquen, salvo que haya aceptado", "Nada", "Sus datos bancarios", "Una cita famosa"], answer: 0, why: "Las historias necesitan consentimiento y privacidad." },
      { q: "Un artículo del boletín debe contar:", options: ["Todos los eventos del año", "Una historia con un número cierto y cómo ayudar", "Solo nombres de donantes", "Nada sobre la misión"], answer: 1, why: "Una historia enfocada se lee más fácil." },
      { q: "¿Qué debes revisar en un borrador de boletín hecho con IA?", options: ["Solo el color del título", "Nada", "Cada número, nombre, fecha y cita", "Solo el número de palabras"], answer: 2, why: "La IA puede equivocarse en los datos." },
      { q: "Un enlace para darse de baja deja que la gente:", options: ["Done dos veces", "Sea voluntaria", "Cambie tu contraseña", "Deje de recibir tus correos"], answer: 3, why: "La gente debe poder salirse." },
      { q: "¿Qué instrucción hace que un texto sea más fácil de leer?", options: ["\"Reescríbelo a un nivel de lectura de sexto grado con frases cortas.\"", "\"Hazlo más complicado.\"", "\"Agrega palabras técnicas.\"", "\"Hazlo más largo.\""], answer: 0, why: "Los niveles de lectura más bajos son más fáciles." },
      { q: "En lenguaje sencillo, ¿qué va primero?", options: ["Una historia larga", "Lo más importante, como la fecha, el lugar y la acción", "Agradecimientos a la junta", "Notas legales"], answer: 1, why: "Los lectores ocupados ven primero los datos clave." },
      { q: "¿Quién debe revisar una traducción hecha con IA?", options: ["La IA otra vez", "Nadie", "Alguien de tu comunidad que hable bien el idioma", "Un sitio web cualquiera"], answer: 2, why: "Las personas que hablan bien el idioma encuentran errores." },
      { q: "Un lector de pantalla es:", options: ["Una persona que lee pantallas", "Una televisión", "Una impresora", "Un programa que lee en voz alta el texto de la pantalla"], answer: 3, why: "Ayuda a personas ciegas o con baja visión." },
      { q: "La IA escribió el texto alternativo de una foto. Debes:", options: ["Revisar que coincida con lo que de verdad está en la foto", "Usarlo sin mirarlo", "Borrar la foto", "Hacerlo de 500 palabras"], answer: 0, why: "La IA puede describir mal las imágenes." },
      { q: "¿Cuál es una mejora de accesibilidad fácil para los videos?", options: ["Quitar el sonido", "Agregar subtítulos", "Hacerlo más largo", "Usar letra diminuta"], answer: 1, why: "Los subtítulos ayudan a personas sordas o a quienes lo ven sin sonido." },
      { q: "¿Por qué evitar poner los datos clave solo dentro de una imagen?", options: ["Las imágenes son ilegales", "Cuesta más", "Los lectores de pantalla no pueden leer las palabras de una imagen", "A los donantes no les gustan las imágenes"], answer: 2, why: "El texto de la publicación llega a todos." },
      { q: "Una tabla de calendario de contenido debe incluir:", options: ["Solo colores", "Montos de donaciones", "Contraseñas", "Semana, canal, pieza y quién publica"], answer: 3, why: "Así la difusión se mantiene organizada." },
      { q: "La IA hizo tu calendario de difusión. Antes de usarlo:", options: ["Compara sus fechas con tu calendario real", "Publica todo hoy", "Confía en cada fecha", "Bórralo"], answer: 0, why: "La IA puede equivocarse con las fechas." },
      { q: "Después de un mes de difusión, debes:", options: ["No mirar nunca los resultados", "Anotar qué atrajo a la gente y seguir haciéndolo", "Borrar todas las publicaciones", "Dejar toda la difusión"], answer: 1, why: "Los resultados muestran qué funciona." }
    ]
  }
};

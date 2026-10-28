"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-health-wellness-accessibility.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Settings search words are given as they appear on phones set to Spanish, with the English name too when the phone may be in English.

module.exports = {
  id: "seniors-health-wellness-accessibility-es",
  lang: "es",
  translationOf: "seniors-health-wellness-accessibility",
  category: "Seniors and Technology",
  name: "Salud, bienestar y accesibilidad con tecnología",
  skills: "Agrandar el texto, Usar la lupa y la lectura en voz alta, Activar los subtítulos, Poner recordatorios de medicinas, Preparar preguntas para el médico con IA, Encontrar información de salud confiable",
  outcome: "configurar tu teléfono o tableta para que sea más fácil de ver y de oír, poner un recordatorio diario para una medicina y usar un asistente de IA para preparar una lista clara de preguntas para tu próxima cita médica.",
  about: [
    "Este curso es para personas mayores que quieren que la tecnología trabaje a favor de sus ojos, sus oídos y su salud, no en contra. No necesitas comprar nada nuevo; la mayoría de estas herramientas ya están en tu teléfono o tableta.",
    "En el Capítulo 1 agrandarás el texto, usarás tu teléfono como lupa, harás que lea textos en voz alta y activarás los subtítulos. En el Capítulo 2 pondrás recordatorios de medicinas, usarás la IA para prepararte para una cita médica y aprenderás dónde encontrar información de salud confiable.",
    "Cada lección dura unos cinco minutos. Un familiar puede ayudarte con los ajustes la primera vez. Este curso no da consejos médicos: sigue siempre las indicaciones de tu médico y de tu farmacéutico. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Haz que tu teléfono sea más fácil de usar cambiando un ajuste para ver u oír mejor, pon un recordatorio diario para una medicina o una caminata corta, y usa un asistente de IA para convertir tus preocupaciones de salud en una lista corta y clara de preguntas para llevar a tu próxima cita médica, sin ningún número privado.",
  chapters: [
    {
      name: "Capítulo 1: Que tu aparato sea más fácil de ver y de oír",
      lessons: [
        {
          title: "Agrandar el texto para leer mejor",
          minutes: 5,
          goal: "Hacer que el texto de tu teléfono o tableta sea más grande y más grueso.",
          text: [
            "La letra pequeña es una de las razones más comunes por las que la gente deja de usar el teléfono. La buena noticia: todos los teléfonos inteligentes y tabletas te dejan agrandar el texto, y muchos también te dejan ponerlo en negrita.",
            "Los nombres de los menús cambian de un teléfono a otro, así que lo más fácil es buscar. Abre la aplicación Ajustes o Configuración (a menudo un engranaje gris), toca la barra de búsqueda de arriba y escribe “tamaño del texto” o “tamaño de fuente”. Toca el resultado y desliza la barra hacia la derecha hasta que el texto te resulte cómodo. Busca también cerca un interruptor de “texto en negrita”.",
            "Algunas aplicaciones también te dejan acercar la imagen poniendo dos dedos en la pantalla y separándolos. Júntalos para volver a alejarla."
          ],
          steps: ["Abre la aplicación Ajustes.", "Toca la barra de búsqueda de arriba.", "Escribe “tamaño del texto” o “tamaño de fuente”.", "Desliza la barra hacia la derecha hasta que el texto te resulte cómodo.", "Activa “texto en negrita” si quieres."],
          words: [["Ajustes", "la aplicación donde cambias cómo se ve y funciona tu teléfono, por lo general un dibujo de engranaje. En algunos teléfonos se llama Configuración."], ["Fuente", "el estilo y el tamaño de las letras en la pantalla."], ["Zoom", "hacer que lo que está en la pantalla se vea más grande."]],
          slides: [
            { title: "¿Letra pequeña? Tiene arreglo", bullets: ["Todos los teléfonos y tabletas pueden agrandar el texto", "Muchos también pueden ponerlo en negrita"] },
            { title: "Busca en Ajustes", bullets: ["Abre Ajustes (el engranaje)", "Busca “tamaño del texto” o “tamaño de fuente”", "Desliza la barra hacia la derecha"] },
            { title: "Zoom con dos dedos", bullets: ["Separa dos dedos para acercar", "Júntalos para alejar"] }
          ],
          tryIt: "Abre Ajustes, busca “tamaño del texto” y agranda la letra uno o dos pasos. Abre tus mensajes o tu correo para ver la diferencia.",
          youCanNow: "hacer que el texto de tu aparato sea más grande y más grueso."
        },
        {
          title: "Tu teléfono como lupa y lector",
          minutes: 5,
          goal: "Usar tu teléfono para agrandar la letra pequeña y para leer textos en voz alta.",
          text: [
            "La cámara de tu teléfono puede funcionar como lupa para etiquetas de medicinas, menús y recibos. Los iPhone tienen una aplicación llamada Lupa (Magnifier). En muchos teléfonos Android puedes usar el zoom de la aplicación Cámara, o buscar “lupa” o “ampliación” en Ajustes.",
            "Los teléfonos también pueden leer textos en voz alta. Busca en Ajustes “contenido leído” (en iPhone) o “seleccionar para pronunciar” (en Android); si no aparece, busca “voz” o “leer”. Actívalo. Luego puedes seleccionar un texto y elegir Leer o Hablar. Google Lens y algunos asistentes de IA también pueden leer en voz alta una página fotografiada.",
            "Enciende la linterna si hay poca luz y sostén el teléfono firme a unos centímetros de la página."
          ],
          steps: ["Abre Lupa, o la aplicación Cámara y acerca la imagen.", "Sostén el teléfono a unos centímetros de la letra pequeña.", "Enciende la luz si hace falta.", "Para escuchar un texto, busca en Ajustes “contenido leído” o “seleccionar para pronunciar” y actívalo.", "Selecciona el texto y elige Leer o Hablar."],
          words: [["Lupa", "una herramienta que hace que las cosas pequeñas se vean más grandes en tu pantalla."], ["Lectura en voz alta", "cuando el teléfono dice en voz alta las palabras escritas."]],
          slides: [
            { title: "Una lupa en tu bolsillo", bullets: ["Etiquetas de medicinas, menús, recibos", "iPhone: la aplicación Lupa", "Android: zoom de la Cámara o busca “lupa”"] },
            { title: "Deja que el teléfono te lea", bullets: ["Busca “contenido leído” o “seleccionar para pronunciar”", "Selecciona el texto y elige Leer o Hablar"] },
            { title: "Consejos", bullets: ["Enciende la luz en lugares oscuros", "Sostén el teléfono firme sobre la página"] }
          ],
          tryIt: "Usa tu teléfono para agrandar la letra pequeña de la etiqueta de un alimento o una medicina. Luego activa la lectura en voz alta y haz que tu teléfono te lea un mensaje.",
          youCanNow: "agrandar la letra pequeña y hacer que tu teléfono lea textos en voz alta."
        },
        {
          title: "Subtítulos y ayuda para oír",
          minutes: 5,
          goal: "Activar los subtítulos para poder leer lo que se dice.",
          text: [
            "Si las voces de los videos o las llamadas se oyen mal, los subtítulos muestran en la pantalla las palabras a medida que se dicen.",
            "Muchos teléfonos tienen una función que agrega subtítulos a casi cualquier video o audio, llamada Subtítulos en tiempo real o Subtítulos instantáneos (Live Captions). Busca “subtítulo” en Ajustes para encontrarla y activarla. En YouTube, toca el botón CC en un video. Muchas aplicaciones de videollamada también tienen un botón de subtítulos.",
            "Los teléfonos también pueden conectarse por Bluetooth a muchos audífonos modernos. Busca “audición” en Ajustes para ver lo que ofrece tu teléfono, y pregúntale a tu especialista en audición qué ajustes van con tus audífonos."
          ],
          steps: ["Abre Ajustes y busca “subtítulo”.", "Activa los subtítulos en tiempo real o los subtítulos.", "En YouTube, toca CC en el video.", "En las videollamadas, busca un botón de subtítulos.", "Busca “audición” en Ajustes para ver opciones para audífonos."],
          words: [["Subtítulos", "palabras que aparecen en la pantalla mientras la gente habla."], ["Bluetooth", "una forma inalámbrica de conectar tu teléfono a cosas como audífonos o parlantes."]],
          slides: [
            { title: "Lee lo que se dice", bullets: ["Los subtítulos muestran en pantalla lo que se habla"] },
            { title: "Activa los subtítulos", bullets: ["Busca “subtítulo” en Ajustes", "YouTube: toca CC", "Videollamadas: busca un botón de subtítulos"] },
            { title: "Audífonos", bullets: ["Muchos se conectan por Bluetooth", "Busca “audición” en Ajustes", "Pregúntale a tu especialista en audición"] }
          ],
          tryIt: "Busca “subtítulo” en tus Ajustes y activa los subtítulos, o abre cualquier video de YouTube y toca CC. Mira un minuto con subtítulos.",
          youCanNow: "activar los subtítulos en tu aparato y encontrar los ajustes de audición."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Que tu aparato sea más fácil de ver y de oír",
        questions: [
          { q: "Los nombres de los menús cambian de un teléfono a otro. ¿Cuál es la forma más fácil de encontrar el ajuste del tamaño del texto?", options: ["Reiniciar el teléfono", "Comprar un teléfono nuevo", "Abrir Ajustes y buscar “tamaño del texto”", "Llamar a un desconocido"], answer: 2, why: "La barra de búsqueda de Ajustes lo encuentra en cualquier teléfono." },
          { q: "¿Cómo acercas la imagen en muchas pantallas?", options: ["Separando dos dedos sobre la pantalla", "Sacudiendo el teléfono", "Apretando el botón de encendido", "Dando vuelta el teléfono"], answer: 0, why: "Separar dos dedos agranda las cosas." },
          { q: "No puedes leer la letra diminuta de un frasco de medicina. ¿Qué te puede ayudar?", options: ["La aplicación de música", "La calculadora", "El reloj", "La lupa del teléfono o el zoom de la cámara"], answer: 3, why: "La lupa agranda la letra pequeña." },
          { q: "¿Qué son los subtítulos?", options: ["Fotos de comida", "Palabras que aparecen en pantalla mientras la gente habla", "Un tipo de alarma", "Números de teléfono"], answer: 1, why: "Los subtítulos ayudan cuando las voces se oyen mal." },
          { q: "En YouTube, ¿qué botón activa los subtítulos?", options: ["Compartir", "CC", "Me gusta", "Suscribirse"], answer: 1, why: "CC son las siglas en inglés de subtítulos (closed captions)." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tecnología para tu salud",
      lessons: [
        {
          title: "Poner recordatorios de medicinas y bienestar",
          minutes: 5,
          goal: "Poner un recordatorio diario que se repita para una medicina o un hábito saludable.",
          text: [
            "Un recordatorio diario en tu teléfono puede ayudarte a tomar tus medicinas a tiempo, beber agua o dar una caminata corta.",
            "La forma más fácil es pedírselo al asistente de voz de tu teléfono: “Recuérdame tomar mi pastilla de la mañana todos los días a las 8.” También puedes abrir la aplicación Reloj o Recordatorios, agregar una alarma o un recordatorio y elegir que se repita todos los días.",
            "Un recordatorio solo te ayuda a acordarte; no te dice qué tomar. Sigue siempre las indicaciones de tu médico y tu farmacéutico, y pregúntale a tu farmacéutico si tienes dudas sobre los horarios. Algunas farmacias también ofrecen recordatorios gratuitos de resurtido por mensaje o aplicación."
          ],
          steps: ["Pídeselo a tu asistente de voz, o abre la aplicación Reloj o Recordatorios.", "Di o escribe qué recordar y la hora.", "Elige que se repita todos los días.", "Comprueba que quedó puesto.", "Sigue las indicaciones de tu médico y tu farmacéutico."],
          words: [["Recordatorio repetido", "un recordatorio que vuelve cada día o cada semana sin tener que ponerlo otra vez."], ["Resurtido", "conseguir más de una medicina que ya tomas."]],
          slides: [
            { title: "Los recordatorios diarios ayudan", bullets: ["Medicinas a tiempo", "Beber agua", "Una caminata corta"] },
            { title: "Pon uno", bullets: ["“Recuérdame tomar mi pastilla todos los días a las 8.”", "O usa la aplicación Reloj o Recordatorios", "Elige “todos los días”"] },
            { title: "Recuerda", bullets: ["El recordatorio no te dice qué tomar", "Sigue a tu médico y a tu farmacéutico", "Pregunta en tu farmacia por recordatorios de resurtido"] }
          ],
          tryIt: "Pon un recordatorio diario que se repita para una medicina que ya tomas, o para un hábito saludable como una caminata de 10 minutos.",
          youCanNow: "poner un recordatorio diario que se repita para una medicina o un hábito saludable."
        },
        {
          title: "Prepararte para una cita médica con IA",
          minutes: 5,
          goal: "Usar un asistente de IA para convertir tus preocupaciones en una lista clara de preguntas para tu médico.",
          text: [
            "Las citas médicas pueden sentirse apuradas, y es fácil olvidar lo que querías preguntar. Un asistente de IA puede ayudarte a ordenar tus ideas antes de ir.",
            "Describe tus preocupaciones con palabras generales, sin tu nombre, tu fecha de nacimiento ni tus números de seguro: “Tengo un chequeo la semana que viene. He estado más cansado que de costumbre, me duelen las rodillas en las escaleras y quiero preguntar por mi medicina para la presión. Ayúdame a hacer una lista corta de preguntas claras para mi médico.”",
            "La IA sirve para prepararte, no para diagnosticar. No cambies ni dejes ninguna medicina por lo que diga una IA. Lleva tu lista a la cita, anota las respuestas del médico o lleva a un familiar para que te ayude."
          ],
          steps: ["Escribe tus preocupaciones con palabras generales, sin números privados.", "Pídele a la IA una lista corta de preguntas claras.", "Pon primero la pregunta más importante.", "Lleva la lista y anota las respuestas.", "Nunca cambies una medicina por la IA; pregúntale a tu médico."],
          words: [["Diagnosticar", "decidir qué enfermedad o problema tiene alguien; solo un profesional de la salud puede hacerlo."]],
          slides: [
            { title: "Las citas se sienten apuradas", bullets: ["Es fácil olvidar las preguntas", "La IA puede ayudarte a prepararte"] },
            { title: "Pide una lista de preguntas", bullets: ["Describe tus preocupaciones con palabras generales", "Sin nombre, fecha de nacimiento ni números de seguro", "La pregunta más importante primero"] },
            { title: "Prepararte, no diagnosticar", bullets: ["La IA no reemplaza a tu médico", "Nunca cambies una medicina por la IA", "Anota las respuestas del médico"] }
          ],
          tryIt: "Piensa en tu próxima cita. Pídele a un asistente de IA que convierta dos o tres de tus preocupaciones en una lista corta de preguntas. Comprueba que no tenga números privados y luego guárdala o imprímela.",
          youCanNow: "preparar con IA, y de forma segura, una lista clara de preguntas para tu médico."
        },
        {
          title: "Encontrar información de salud confiable",
          minutes: 5,
          goal: "Comprobar información de salud en una fuente confiable y gratuita.",
          text: [
            "La información de salud en internet va desde excelente hasta peligrosa. Los asistentes de IA también pueden equivocarse sobre la salud. Por eso, compara lo que lees con una fuente confiable.",
            "MedlinePlus (medlineplus.gov) es un sitio gratuito de información de salud de la National Library of Medicine (la Biblioteca Nacional de Medicina), que forma parte de los National Institutes of Health (NIH, los Institutos Nacionales de Salud de Estados Unidos). No tiene publicidad y explica enfermedades, análisis y medicinas en lenguaje sencillo; también tiene una versión en español. El consultorio de tu médico y tu farmacéutico también son fuentes confiables.",
            "Desconfía de los sitios que venden una cura, prometen resultados milagrosos o te dicen que dejes tu medicina. Cuando algo que leas te preocupe, anótalo y pregúntale a tu médico o farmacéutico."
          ],
          steps: ["Fíjate en lo que afirman sobre salud la IA o los sitios web.", "Búscalo en medlineplus.gov.", "Pregúntale a tu médico o farmacéutico sobre lo que te preocupe.", "Evita los sitios que venden curas o prometen milagros."],
          words: [["Fuente confiable", "un lugar seguro para informarte, como un sitio de salud del gobierno o tu propio médico."], ["MedlinePlus", "un sitio web de información de salud gratuito y sin publicidad de la Biblioteca Nacional de Medicina de Estados Unidos."]],
          slides: [
            { title: "No toda la información de salud es buena", bullets: ["Los sitios web pueden equivocarse", "La IA también puede equivocarse"] },
            { title: "MedlinePlus: medlineplus.gov", bullets: ["Gratis y sin publicidad", "De la National Library of Medicine", "Explicaciones en lenguaje sencillo"] },
            { title: "Señales de alerta", bullets: ["Venden una cura", "Prometen milagros", "“Deje su medicina”"] }
          ],
          sources: [{ name: "Acerca de MedlinePlus (National Library of Medicine, en inglés)", url: "https://medlineplus.gov/about/general/aboutmedlineplus/" }],
          tryIt: "Tarea final: cambia un ajuste para que tu teléfono sea más fácil de ver o de oír, pon un recordatorio diario para una medicina o una caminata, y usa la IA para hacer una lista corta de preguntas, sin números privados, para tu próxima cita médica. Busca un tema de tu lista en medlineplus.gov.",
          youCanNow: "hacer que tu aparato sea más fácil de usar, mantener tus hábitos diarios de salud, prepararte para tus citas y encontrar información de salud confiable."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Tecnología para tu salud",
        questions: [
          { q: "¿Cómo haces que un recordatorio vuelva todos los días?", options: ["Borras la aplicación", "Lo pones una vez y esperas", "Apagas el teléfono", "Eliges que se repita todos los días"], answer: 3, why: "Un recordatorio repetido vuelve cada día." },
          { q: "¿Un recordatorio del teléfono te dice qué medicina tomar?", options: ["No, sigue a tu médico y a tu farmacéutico", "Sí, siempre", "Solo los fines de semana", "Sí, si suena fuerte"], answer: 0, why: "Solo te ayuda a acordarte." },
          { q: "¿Qué debes dejar fuera cuando le pides a la IA que te ayude a preparar una cita?", options: ["Tus preocupaciones", "La palabra “médico”", "Tu nombre, tu fecha de nacimiento y tus números de seguro", "La fecha de la cita"], answer: 2, why: "Los números privados nunca deben ir a la IA." },
          { q: "La IA sugiere que tal vez no necesitas una medicina. ¿Qué haces?", options: ["Dejas de tomarla", "Le preguntas a un desconocido", "Tomas el doble", "Le preguntas a tu médico; nunca cambies una medicina por la IA"], answer: 3, why: "Solo tu médico debe cambiar tu medicina." },
          { q: "¿Cuál es un sitio de información de salud gratuito y sin publicidad del gobierno de Estados Unidos?", options: ["Un anuncio emergente", "Un sitio que vende una cura milagrosa", "MedlinePlus", "Una publicación de redes sociales"], answer: 2, why: "MedlinePlus es de la National Library of Medicine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Salud, bienestar y accesibilidad con tecnología",
    questions: [
      { q: "La aplicación Ajustes por lo general se muestra como:", options: ["Una cámara", "Un engranaje", "Un teléfono", "Un reloj"], answer: 1, why: "Ajustes suele usar un dibujo de engranaje." },
      { q: "Para encontrar rápido el ajuste del tamaño del texto, tú:", options: ["Buscas “tamaño del texto” en Ajustes", "Reinicias el teléfono", "Abres la cámara", "Llamas a tu banco"], answer: 0, why: "Buscar funciona en cualquier teléfono." },
      { q: "Deslizar hacia la derecha la barra del tamaño del texto hace que el texto sea:", options: ["Más grande", "Más pequeño", "Invisible", "Rojo"], answer: 0, why: "Hacia la derecha es más grande." },
      { q: "Juntar dos dedos sobre la pantalla:", options: ["Acerca la imagen", "Aleja la imagen", "Apaga el teléfono", "Toma una foto"], answer: 1, why: "Juntar los dedos aleja; separarlos acerca." },
      { q: "La aplicación del iPhone que convierte la cámara en una lupa es:", options: ["Tiempo", "Calculadora", "Lupa", "Música"], answer: 2, why: "Lupa agranda la letra pequeña." },
      { q: "En un lugar con poca luz, la lupa funciona mejor si:", options: ["Sacudes el teléfono", "Tapas la cámara", "Alejas mucho el teléfono", "Enciendes la luz"], answer: 3, why: "La luz ayuda a la cámara a ver con claridad." },
      { q: "Para que el teléfono lea textos en voz alta, buscas en Ajustes:", options: ["“tono de llamada”", "“fondo de pantalla”", "“contenido leído” o “seleccionar para pronunciar”", "“batería”"], answer: 2, why: "Esos son los nombres habituales del ajuste de lectura en voz alta." },
      { q: "Los subtítulos son:", options: ["Palabras en pantalla mientras la gente habla", "Dibujos", "Números de teléfono", "Contraseñas"], answer: 0, why: "Los subtítulos muestran lo que se habla." },
      { q: "Los subtítulos en tiempo real se encuentran buscando en Ajustes:", options: ["“contactos”", "“cámara”", "“reloj”", "“subtítulo”"], answer: 3, why: "Buscar “subtítulo” encuentra los ajustes de subtítulos." },
      { q: "Muchos audífonos modernos se conectan al teléfono usando:", options: ["Un clip", "Bluetooth", "Un teléfono fijo", "Un cargador"], answer: 1, why: "Bluetooth es una conexión inalámbrica." },
      { q: "¿Quién debe ayudarte a elegir los ajustes de tus audífonos?", options: ["Un anuncio emergente", "Tu especialista en audición", "Un desconocido en internet", "Nadie"], answer: 1, why: "Conoce tus audífonos y tu audición." },
      { q: "¿Qué pedido en voz alta pone un recordatorio diario para una medicina?", options: ["“¿Medicina?”", "“Pastilla.”", "“Hola.”", "“Recuérdame tomar mi pastilla todos los días a las 8.”"], answer: 3, why: "Dice qué, cuándo y cada cuánto." },
      { q: "Si no sabes bien cuándo tomar una medicina, pregúntale a:", options: ["Tu farmacéutico", "Solo a una IA", "Un vecino", "Un anuncio emergente"], answer: 0, why: "Los farmacéuticos son expertos en medicinas." },
      { q: "Antes de una cita médica, la IA es útil para:", options: ["Cambiar tu medicina", "Diagnosticarte", "Ordenar tus preguntas", "Escribir recetas"], answer: 2, why: "La IA te ayuda a prepararte, no a diagnosticar." },
      { q: "“Diagnosticar” significa:", options: ["Agrandar el texto", "Escribir una lista", "Poner un recordatorio", "Decidir qué enfermedad tiene alguien"], answer: 3, why: "Solo un profesional de la salud puede diagnosticar." },
      { q: "¿Qué NO debe ir en tu instrucción a la IA sobre salud?", options: ["“Me duelen las rodillas”", "“Me siento cansado”", "Tu número de seguro", "“Tengo un chequeo la semana que viene”"], answer: 2, why: "Los números de seguro son privados." },
      { q: "En la cita, una buena costumbre es:", options: ["Dejar tu lista en casa", "Anotar las respuestas del médico", "No preguntar nada", "Confiar solo en la memoria"], answer: 1, why: "Anotar las respuestas te ayuda a recordarlas." },
      { q: "MedlinePlus lo administra:", options: ["La National Library of Medicine", "Una empresa de suplementos", "Una red social", "Una compañía de teléfonos"], answer: 0, why: "Es un servicio de la NLM, parte de los NIH." },
      { q: "Un sitio web que promete una cura milagrosa es:", options: ["Una señal de alerta", "Siempre confiable", "Administrado por tu médico", "Atención médica gratuita"], answer: 0, why: "Las promesas de milagros son señales de alerta." },
      { q: "Algo que leíste sobre tu salud te preocupa. ¿Cuál es el mejor paso?", options: ["Dejar todas las medicinas", "Anotarlo y preguntarle a tu médico o farmacéutico", "No hacerle caso a tu médico", "Comprar el producto"], answer: 1, why: "Tu médico o farmacéutico pueden explicártelo de forma segura." }
    ]
  }
};

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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores que se encargan de su propia salud y sus medicinas, y que pueden tener cambios en la vista o el oído. Muchas van a más de un médico y toman varias medicinas.",
    startingPoint: "Tienen un teléfono inteligente o una tableta y lo usan para llamadas y mensajes de texto. A muchas la letra les parece pequeña o les cuesta oír las voces, y no han explorado los ajustes de accesibilidad, los recordatorios que se repiten ni los asistentes de IA.",
    gap: "La letra pequeña y el sonido difícil de oír hacen que la gente deje de usar teléfonos que podrían ayudarla a cuidar su salud. Hacer el teléfono más fácil de ver y de oír, usar recordatorios para las medicinas, preparar preguntas claras para el médico y comprobar los datos de salud en un sitio confiable ayudan a ser independiente y a tener mejores consultas, sin dejar que la IA reemplace al médico.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: iPhone, teléfonos Android y tabletas; los nombres de los menús cambian, así que cada persona busca en Ajustes",
      "Tiempo: unos 5 minutos por lección, sin prisa",
      "Salud: la IA sirve para prepararse, nunca para diagnosticar; las medicinas se toman como dicen el médico y el farmacéutico",
      "Privacidad: nada de nombre, fecha de nacimiento ni números del seguro en las instrucciones a la IA"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando la aplicación Ajustes de tu teléfono o tableta", action: "agrandar el texto, ponerlo más grueso y hacer zoom en una pantalla", standard: "hasta que el texto sea cómodo de leer" },
    { id: "O2", condition: "Con letra pequeña, como la etiqueta de una medicina", action: "usar el teléfono como lupa y activar la lectura en voz alta", standard: "de modo que puedas leer u oír el texto" },
    { id: "O3", condition: "Cuando cuesta oír las voces de los videos o las llamadas", action: "activar los subtítulos y encontrar las opciones de audición de tu teléfono", standard: "de modo que las palabras aparezcan en la pantalla" },
    { id: "O4", condition: "Con una medicina o un hábito saludable", action: "poner en tu teléfono un recordatorio diario que se repita", standard: "a la hora que te dijo tu médico o farmacéutico, revisando que quedó puesto" },
    { id: "O5", condition: "Antes de una consulta médica", action: "usar un asistente de IA para convertir tus preocupaciones en una lista corta de preguntas claras", standard: "sin números privados y sin cambiar ninguna medicina por lo que diga la IA" },
    { id: "O6", condition: "Con información de salud de la IA o de un sitio web", action: "comprobarla en una fuente confiable como MedlinePlus, tu médico o tu farmacéutico", standard: "antes de actuar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Que tu aparato sea más fácil de ver y de oír",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "hacer que el texto de tu aparato sea más grande y más grueso.",
          quickCheck: [
            { objective: "O1", q: "En muchas aplicaciones, ¿qué pasa si separas dos dedos sobre la pantalla?", options: ["Se hace zoom para agrandar", "Se apaga el teléfono", "Se hace una llamada", "Se borra la página"], answer: 0, why: "Separar dos dedos agranda; juntarlos vuelve a achicar." },
            { objective: "O1", q: "No encuentras el menú del tamaño del texto en tu teléfono nuevo. ¿Qué haces?", options: ["Comprar otro teléfono", "Rendirte", "Abrir Ajustes, tocar la barra de búsqueda y escribir \"tamaño del texto\"", "Apagar y encender el teléfono"], answer: 2, why: "Los nombres de los menús cambian, así que buscar en Ajustes es la forma más fácil de encontrar el ajuste." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "agrandar la letra pequeña y hacer que tu teléfono lea textos en voz alta.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué sirve la aplicación Lupa en un iPhone?", options: ["Para tomarte selfis", "Para que las llamadas suenen más fuerte", "Para enviar fotos", "Para usar la cámara como lupa"], answer: 3, why: "Lupa convierte la cámara en una lupa para la letra pequeña." },
            { objective: "O2", q: "Quieres que tu teléfono te lea en voz alta un artículo largo. ¿Qué buscas en Ajustes?", options: ["\"Fondo de pantalla\"", "\"Contenido leído\" o \"seleccionar para pronunciar\"", "\"Batería\"", "\"Tono de llamada\""], answer: 1, why: "Activar el contenido leído o seleccionar para pronunciar te deja seleccionar texto y elegir que se lea." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "activar los subtítulos en tu aparato y encontrar los ajustes de audición.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hacen los Subtítulos instantáneos (Live Captions)?", options: ["Agregan subtítulos a casi cualquier video o audio del teléfono", "Graban tus llamadas", "Toman fotos", "Suben el volumen"], answer: 0, why: "Los Subtítulos instantáneos muestran en la pantalla las palabras de los videos y los audios." },
            { objective: "O3", q: "Quieres conectar tus audífonos a tu teléfono. ¿Cuál es un buen primer paso?", options: ["Apagar el Bluetooth", "Comprar audífonos nuevos", "Buscar \"audición\" en Ajustes y preguntarle a tu especialista en audición", "Apagar el timbre"], answer: 2, why: "Ajustes muestra las opciones de audición, y tu especialista en audición sabe cuáles van con tus audífonos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Que tu aparato sea más fácil de ver y de oír",
        questions: [
          { objective: "O1", q: "Los nombres de los menús cambian de un teléfono a otro. ¿Cuál es la forma más fácil de encontrar el ajuste del tamaño del texto?", options: ["Reiniciar el teléfono", "Comprar un teléfono nuevo", "Abrir Ajustes y buscar “tamaño del texto”", "Llamar a un desconocido"], answer: 2, why: "La barra de búsqueda de Ajustes lo encuentra en cualquier teléfono." },
          { objective: "O1", q: "¿Cómo acercas la imagen en muchas pantallas?", options: ["Separando dos dedos sobre la pantalla", "Sacudiendo el teléfono", "Apretando el botón de encendido", "Dando vuelta el teléfono"], answer: 0, why: "Separar dos dedos agranda las cosas." },
          { objective: "O2", q: "No puedes leer la letra diminuta de un frasco de medicina. ¿Qué te puede ayudar?", options: ["La aplicación de música", "La calculadora", "El reloj", "La lupa del teléfono o el zoom de la cámara"], answer: 3, why: "La lupa agranda la letra pequeña." },
          { objective: "O3", q: "¿Qué son los subtítulos?", options: ["Fotos de comida", "Palabras que aparecen en pantalla mientras la gente habla", "Un tipo de alarma", "Números de teléfono"], answer: 1, why: "Los subtítulos ayudan cuando las voces se oyen mal." },
          { objective: "O3", q: "En YouTube, ¿qué botón activa los subtítulos?", options: ["Compartir", "CC", "Me gusta", "Suscribirse"], answer: 1, why: "CC son las siglas en inglés de subtítulos (closed captions)." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tecnología para tu salud",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "poner un recordatorio diario que se repita para una medicina o un hábito saludable.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace un recordatorio que se repite?", options: ["Suena solo una vez", "Te dice qué medicina tomar", "Pide tus resurtidos", "Vuelve cada día a la hora que elegiste"], answer: 3, why: "Un recordatorio que se repite vuelve cada día; te ayuda a acordarte, pero no te dice qué tomar." },
            { objective: "O4", q: "No sabes si tomar una pastilla antes o después del desayuno. ¿A quién le preguntas?", options: ["A la aplicación de recordatorios", "A tu farmacéutico", "A un amigo", "A un sitio web que vende vitaminas"], answer: 1, why: "Sigue las instrucciones de tu médico y tu farmacéutico, y pregúntale a tu farmacéutico por el horario." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "preparar con IA, y de forma segura, una lista clara de preguntas para tu médico.",
          quickCheck: [
            { objective: "O5", q: "¿Para qué sirve la IA antes de una consulta médica?", options: ["Para diagnosticar tu enfermedad", "Para cambiar tu medicina", "Para ordenar tus preocupaciones en preguntas claras", "Para programar una cirugía"], answer: 2, why: "La IA sirve para preparar tus preguntas, no para diagnosticar." },
            { objective: "O5", q: "Estás escribiendo tus preocupaciones para la IA. ¿Qué dejas fuera?", options: ["Cómo te has sentido", "Tu nombre, tu fecha de nacimiento y tus números del seguro", "Que tienes un chequeo la semana que viene", "Que te duelen las rodillas"], answer: 1, why: "Describe tus preocupaciones con palabras generales, sin números privados." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "hacer que tu aparato sea más fácil de usar, mantener tus hábitos diarios de salud, prepararte para tus citas y encontrar información de salud confiable.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es MedlinePlus?", options: ["Una tienda que vende medicinas", "Una aplicación de salud de pago", "Un asistente de IA", "Un sitio gratuito de información de salud, sin anuncios, de la National Library of Medicine"], answer: 3, why: "MedlinePlus explica enfermedades, pruebas y medicinas con palabras sencillas, sin anuncios." },
            { objective: "O6", q: "Un sitio web dice que un té curará tu presión alta y que puedes dejar tu medicina. ¿Qué haces?", options: ["Tomarlo como una señal de alerta, anotarlo y preguntarle a tu médico", "Dejar tu medicina y probar el té", "Comprar lo de un año", "Compartirlo con tus amigos"], answer: 0, why: "Los sitios que prometen curas o dicen que dejes una medicina son señales de alerta; pregúntale a tu médico o farmacéutico." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Tecnología para tu salud",
        questions: [
          { objective: "O4", q: "¿Cómo haces que un recordatorio vuelva todos los días?", options: ["Borras la aplicación", "Lo pones una vez y esperas", "Apagas el teléfono", "Eliges que se repita todos los días"], answer: 3, why: "Un recordatorio repetido vuelve cada día." },
          { objective: "O4", q: "¿Un recordatorio del teléfono te dice qué medicina tomar?", options: ["No, sigue a tu médico y a tu farmacéutico", "Sí, siempre", "Solo los fines de semana", "Sí, si suena fuerte"], answer: 0, why: "Solo te ayuda a acordarte." },
          { objective: "O5", q: "¿Qué debes dejar fuera cuando le pides a la IA que te ayude a preparar una cita?", options: ["Tus preocupaciones", "La palabra “médico”", "Tu nombre, tu fecha de nacimiento y tus números de seguro", "La fecha de la cita"], answer: 2, why: "Los números privados nunca deben ir a la IA." },
          { objective: "O5", q: "La IA sugiere que tal vez no necesitas una medicina. ¿Qué haces?", options: ["Dejas de tomarla", "Le preguntas a un desconocido", "Tomas el doble", "Le preguntas a tu médico; nunca cambies una medicina por la IA"], answer: 3, why: "Solo tu médico debe cambiar tu medicina." },
          { objective: "O6", q: "¿Cuál es un sitio de información de salud gratuito y sin publicidad del gobierno de Estados Unidos?", options: ["Un anuncio emergente", "Un sitio que vende una cura milagrosa", "MedlinePlus", "Una publicación de redes sociales"], answer: 2, why: "MedlinePlus es de la National Library of Medicine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Salud, bienestar y accesibilidad con tecnología",
    questions: [
      { objective: "O1", q: "La aplicación Ajustes por lo general se muestra como:", options: ["Una cámara", "Un engranaje", "Un teléfono", "Un reloj"], answer: 1, why: "Ajustes suele usar un dibujo de engranaje." },
      { objective: "O1", q: "Para encontrar rápido el ajuste del tamaño del texto, tú:", options: ["Buscas “tamaño del texto” en Ajustes", "Reinicias el teléfono", "Abres la cámara", "Llamas a tu banco"], answer: 0, why: "Buscar funciona en cualquier teléfono." },
      { objective: "O1", q: "Deslizar hacia la derecha la barra del tamaño del texto hace que el texto sea:", options: ["Más grande", "Más pequeño", "Invisible", "Rojo"], answer: 0, why: "Hacia la derecha es más grande." },
      { objective: "O1", q: "Juntar dos dedos sobre la pantalla:", options: ["Acerca la imagen", "Aleja la imagen", "Apaga el teléfono", "Toma una foto"], answer: 1, why: "Juntar los dedos aleja; separarlos acerca." },
      { objective: "O2", q: "La aplicación del iPhone que convierte la cámara en una lupa es:", options: ["Tiempo", "Calculadora", "Lupa", "Música"], answer: 2, why: "Lupa agranda la letra pequeña." },
      { objective: "O2", q: "En un lugar con poca luz, la lupa funciona mejor si:", options: ["Sacudes el teléfono", "Tapas la cámara", "Alejas mucho el teléfono", "Enciendes la luz"], answer: 3, why: "La luz ayuda a la cámara a ver con claridad." },
      { objective: "O2", q: "Para que el teléfono lea textos en voz alta, buscas en Ajustes:", options: ["“tono de llamada”", "“fondo de pantalla”", "“contenido leído” o “seleccionar para pronunciar”", "“batería”"], answer: 2, why: "Esos son los nombres habituales del ajuste de lectura en voz alta." },
      { objective: "O3", q: "Los subtítulos son:", options: ["Palabras en pantalla mientras la gente habla", "Dibujos", "Números de teléfono", "Contraseñas"], answer: 0, why: "Los subtítulos muestran lo que se habla." },
      { objective: "O3", q: "Los subtítulos en tiempo real se encuentran buscando en Ajustes:", options: ["“contactos”", "“cámara”", "“reloj”", "“subtítulo”"], answer: 3, why: "Buscar “subtítulo” encuentra los ajustes de subtítulos." },
      { objective: "O3", q: "Muchos audífonos modernos se conectan al teléfono usando:", options: ["Un clip", "Bluetooth", "Un teléfono fijo", "Un cargador"], answer: 1, why: "Bluetooth es una conexión inalámbrica." },
      { objective: "O3", q: "¿Quién debe ayudarte a elegir los ajustes de tus audífonos?", options: ["Un anuncio emergente", "Tu especialista en audición", "Un desconocido en internet", "Nadie"], answer: 1, why: "Conoce tus audífonos y tu audición." },
      { objective: "O4", q: "¿Qué pedido en voz alta pone un recordatorio diario para una medicina?", options: ["“¿Medicina?”", "“Pastilla.”", "“Hola.”", "“Recuérdame tomar mi pastilla todos los días a las 8.”"], answer: 3, why: "Dice qué, cuándo y cada cuánto." },
      { objective: "O4", q: "Si no sabes bien cuándo tomar una medicina, pregúntale a:", options: ["Tu farmacéutico", "Solo a una IA", "Un vecino", "Un anuncio emergente"], answer: 0, why: "Los farmacéuticos son expertos en medicinas." },
      { objective: "O5", q: "Antes de una cita médica, la IA es útil para:", options: ["Cambiar tu medicina", "Diagnosticarte", "Ordenar tus preguntas", "Escribir recetas"], answer: 2, why: "La IA te ayuda a prepararte, no a diagnosticar." },
      { objective: "O5", q: "“Diagnosticar” significa:", options: ["Agrandar el texto", "Escribir una lista", "Poner un recordatorio", "Decidir qué enfermedad tiene alguien"], answer: 3, why: "Solo un profesional de la salud puede diagnosticar." },
      { objective: "O5", q: "¿Qué NO debe ir en tu instrucción a la IA sobre salud?", options: ["“Me duelen las rodillas”", "“Me siento cansado”", "Tu número de seguro", "“Tengo un chequeo la semana que viene”"], answer: 2, why: "Los números de seguro son privados." },
      { objective: "O5", q: "En la cita, una buena costumbre es:", options: ["Dejar tu lista en casa", "Anotar las respuestas del médico", "No preguntar nada", "Confiar solo en la memoria"], answer: 1, why: "Anotar las respuestas te ayuda a recordarlas." },
      { objective: "O6", q: "MedlinePlus lo administra:", options: ["La National Library of Medicine", "Una empresa de suplementos", "Una red social", "Una compañía de teléfonos"], answer: 0, why: "Es un servicio de la NLM, parte de los NIH." },
      { objective: "O6", q: "Un sitio web que promete una cura milagrosa es:", options: ["Una señal de alerta", "Siempre confiable", "Administrado por tu médico", "Atención médica gratuita"], answer: 0, why: "Las promesas de milagros son señales de alerta." },
      { objective: "O6", q: "Algo que leíste sobre tu salud te preocupa. ¿Cuál es el mejor paso?", options: ["Dejar todas las medicinas", "Anotarlo y preguntarle a tu médico o farmacéutico", "No hacerle caso a tu médico", "Comprar el producto"], answer: 1, why: "Tu médico o farmacéutico pueden explicártelo de forma segura." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      7,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Más fácil de ver u oír",
        objective: "O1",
        notYet: "No cambió ningún ajuste.",
        meets: "Cambió un ajuste para ver u oír mejor, como agrandar el texto o activar los subtítulos.",
        exceeds: "Cambió dos o más ajustes y puede mostrarle a otra persona cómo hacerlo."
      },
      {
        name: "Recordatorio diario",
        objective: "O4",
        notYet: "No hay recordatorio, o no se repite.",
        meets: "Un recordatorio diario que se repite, para una medicina o una caminata, revisado para ver que quedó puesto.",
        exceeds: "La hora coincide con lo que dijo el médico o el farmacéutico."
      },
      {
        name: "Preguntas claras",
        objective: "O5",
        notYet: "No hay lista, o las preguntas son vagas.",
        meets: "Una lista corta de preguntas claras hecha con ayuda de la IA, con la más importante primero.",
        exceeds: "Tiene espacio para anotar las respuestas del médico."
      },
      {
        name: "Números privados fuera",
        objective: "O5",
        notYet: "La instrucción o la lista tiene un nombre, una fecha de nacimiento o un número del seguro.",
        meets: "No hay números privados en la instrucción ni en la lista.",
        exceeds: "Las preocupaciones están descritas con palabras generales que igual le dan al médico una idea clara."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que, en el seguimiento a los 30 días, siguen usando su recordatorio de medicinas o de bienestar",
      "Personas que llevan una lista escrita de preguntas a una consulta médica dentro de 30 días (encuesta de seguimiento)",
      "Personas que empiezan otro curso de tecnología para personas mayores dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una tableta con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Algo con letra pequeña para practicar, como un menú o una caja vacía de medicina",
      "Unos 60 minutos en total, en sesiones cortas y sin prisa: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Agrupa a las personas por tipo de teléfono para que los ajustes en pantalla coincidan, y ayuda a cada una a buscar en Ajustes.",
      "Nunca des consejos médicos; manda las preguntas de medicinas y salud al médico o al farmacéutico de cada persona.",
      "Recuerda que los nombres, las fechas de nacimiento y los números del seguro no van en las instrucciones a la IA.",
      "Algunas personas pueden sentir vergüenza por su vista o su oído; mantén un tono práctico y respeta su privacidad.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

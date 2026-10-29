"use strict";

// Koach Learn course (Spanish translation of youth-ai-music). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-music-es",
  lang: "es",
  translationOf: "youth-ai-music",
  category: "Youth",
  name: "Producción musical con IA",
  skills: "Hacer un beat en un estudio en línea gratuito, Generar ideas de letras con IA, Armar la estructura de una canción, Respetar los derechos de autor y las voces, Exportar y compartir de forma segura",
  outcome: "hacer una pista original corta (de unos 60 segundos) en un estudio de música en línea gratuito, usando la IA para generar ideas y letras, con una estructura de canción clara, sin canciones copiadas ni voces clonadas, y con créditos que digan cómo usaste la IA.",
  about: [
    "Este curso es para adolescentes que aman la música y quieren hacer la suya, aunque todavía no sepan tocar un instrumento. Puedes hacerlo en un teléfono o en una computadora de la escuela o de la biblioteca.",
    "Vas a hacer un beat en BandLab, un estudio de música en línea gratuito, usar un asistente de IA como compañero para generar ideas y letras, armar las partes de una canción y aprender las reglas sobre los derechos de autor y el uso de las voces de otras personas. Terminarás exportando una pista corta y compartiéndola de forma segura.",
    "Los términos de BandLab dicen que los usuarios deben tener al menos 13 años y que los menores de 18 necesitan el permiso de su madre, padre o tutor. Revisa las reglas de edad de cada herramienta que uses, revisa las reglas de tu escuela sobre la IA y pide a tu madre, padre o tutor que participe cuando te registres. Cada lección termina con una tarea \"Pruébalo ahora\", con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz una pista original de unos 60 segundos en un estudio en línea gratuito: un beat, una intro, una estrofa y un coro. Usa un asistente de IA para generar un tema y al menos cuatro líneas de letra, y luego reescríbelas con tus propias palabras. No uses canciones copiadas ni copias con IA de la voz de una persona real. Expórtala y escribe una nota de créditos corta que diga lo que hiciste y cómo usaste la IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes a quienes les encanta la música y quieren hacer la suya, incluidos los que todavía no saben tocar un instrumento.",
    startingPoint: "Escuchan música todos los días y conocen canciones que les encantan. La mayoría nunca ha hecho un beat, armado una canción ni aprendido las reglas sobre derechos de autor, samples y voces hechas con IA.",
    gap: "Las herramientas de música con IA hacen fácil copiar canciones o voces sin saber que está mal, y escribir instrucciones no basta para que alguien sea el autor. Los jóvenes necesitan hacer música original por su cuenta, usar la IA solo como compañera para buscar ideas y compartir su trabajo con honestidad y seguridad.",
    constraints: [
      "Límites de edad: BandLab y otras herramientas tienen edad mínima y necesitan el permiso de la madre, el padre o el tutor para los menores de 18",
      "Reglas de IA de la escuela para la clase de música",
      "Dispositivos: un teléfono o una computadora de la escuela o de la biblioteca con navegador web; solo herramientas gratuitas",
      "Derechos de autor y derechos sobre la voz: nada de canciones copiadas, samples sin permiso ni copias con IA de voces reales",
      "Privacidad al compartir: nada de nombre completo, escuela ni ubicación en publicaciones públicas"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pensando en la música que escuchas y que haces", action: "explicar cómo se usa la IA en la música y las reglas básicas que vas a seguir", standard: "nombrando tres usos y las reglas sobre copiar, voces, límites de edad y honestidad" },
    { id: "O2", condition: "Usando un estudio en línea gratuito como BandLab, con el visto bueno de tu madre, padre o tutor", action: "hacer un beat de 4 compases con batería y otro sonido, a un tempo que vaya con el ánimo", standard: "que se reproduzca sin huecos" },
    { id: "O3", condition: "Con un tema de tu propia vida", action: "usar la IA para buscar imágenes y rimas, y luego escribir cuatro líneas de letra con tus propias palabras", standard: "para que las líneas encajen con el beat al decirlas en voz alta" },
    { id: "O4", condition: "Con tu beat y tu letra", action: "ordenar la pista en una intro, una estrofa y un coro", standard: "de unos 60 segundos, con cada parte sonando un poco distinta" },
    { id: "O5", condition: "Para cada sonido y cada voz de tu pista", action: "decidir si cada sonido o voz se puede usar, y quitar todo lo que no puedas demostrar que está permitido", standard: "sin canciones copiadas, samples sin licencia ni copias con IA de voces reales" },
    { id: "O6", condition: "Cuando la pista está terminada", action: "equilibrar la mezcla, exportar la pista y escribir una nota de créditos honesta", standard: "compartiéndola solo donde tu familia esté de acuerdo y manteniendo privados tus datos personales" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Hacer música con IA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cómo se usa la IA en la música y las reglas básicas",
          minutes: 4,
          goal: "Explicar tres formas en que se usa la IA en la música y las reglas que vas a seguir.",
          text: [
            "La IA se usa en la música de muchas formas: apps que sugieren acordes o patrones de batería, herramientas que limpian grabaciones, asistentes como ChatGPT, Microsoft Copilot o Google Gemini que ayudan a generar ideas de letras, y generadores que crean canciones completas a partir de una instrucción escrita.",
            "En este curso, la IA es tu compañera para generar ideas. Tú tomas las decisiones creativas principales. Eso importa para aprender y también importa legalmente: la Oficina de Derechos de Autor de EE. UU. (U.S. Copyright Office) ha dicho que escribir instrucciones no basta por sí solo para que seas el autor de lo que produce una IA. Lo que cuenta son tus propias palabras, sonidos y arreglos.",
            "Reglas básicas: no copies canciones de otras personas, no uses una copia con IA de la voz de un cantante real o de un compañero de clase, revisa las reglas de edad de cada herramienta, sigue las reglas de IA de tu escuela para la clase de música y sé honesto sobre cómo usaste la IA."
          ],
          words: [["Generador de música con IA", "una herramienta que crea música a partir de una descripción escrita."], ["Autor", "la persona que crea una obra y puede ser dueña de sus derechos de autor."], ["Instrucción (prompt)", "lo que escribes para pedirle algo a una IA."]],
          slides: [
            { title: "La IA en la música", bullets: ["Sugiere acordes y patrones de batería", "Limpia grabaciones", "Genera ideas de letras", "Crea canciones a partir de una instrucción"] },
            { title: "La IA es tu compañera", bullets: ["Tú tomas las decisiones creativas principales", "Las instrucciones solas no te hacen autor", "Cuentan tus propias palabras y sonidos"] },
            { title: "Reglas básicas", bullets: ["Nada de canciones copiadas", "Nada de copias con IA de voces de personas reales", "Revisa las reglas de edad y de la escuela", "Sé honesto sobre el uso de la IA"] }
          ],
          sources: [{ name: "Oficina de Derechos de Autor de EE. UU.: derechos de autor e inteligencia artificial, parte 2 (protección por derechos de autor)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "Oficina de Derechos de Autor de EE. UU.: derechos de autor e IA", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Escribe el nombre de una canción que te encanta y tres cosas que te gustan de ella (el beat, el ambiente, la letra). Son ideas de las que puedes aprender sin copiar la canción.",
          youCanNow: "nombrar formas en que se usa la IA en la música y explicar las reglas para usarla de forma justa.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una forma en que se usa la IA en la música?", options: ["Herramientas que limpian las grabaciones", "Afinar una guitarra a mano", "Imprimir boletos para conciertos", "Construir bocinas"], answer: 0, why: "La IA sugiere acordes, limpia grabaciones, ayuda con las letras y puede generar canciones." },
            { objective: "O1", q: "Un generador de canciones hace una pista completa a partir de tu instrucción de una línea. ¿Puedes decir que es totalmente tu obra?", options: ["Sí, la instrucción te hace el autor", "Sí, si le cambias el nombre", "No; las instrucciones solas no bastan, así que toma tú las decisiones creativas principales", "Solo si nadie pregunta"], answer: 2, why: "La Oficina de Derechos de Autor de Estados Unidos (U.S. Copyright Office) dijo que escribir instrucciones no basta para hacerte el autor." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hacer tu primer beat en un estudio en línea gratuito",
          minutes: 6,
          goal: "Abrir un estudio en línea gratuito y hacer un beat de 4 compases con batería y otro sonido.",
          text: [
            "BandLab es una app y un sitio web de música gratuitos con un estudio en línea para hacer música. Puedes usarlo en un navegador web en bandlab.com o en su app desde la tienda de apps oficial. Necesitas una cuenta, así que pide a tu madre, padre o tutor que participe cuando te registres.",
            "La música se cuenta en tiempos y compases. La mayoría de las canciones de pop y hip-hop tienen 4 tiempos por compás. Un loop es un fragmento corto de música que se repite. Muchos beats empiezan con un loop de batería, luego agregan el bajo y después un sonido más, como teclado o guitarra.",
            "Los menús cambian con el tiempo, así que busca estas acciones: empezar un proyecto nuevo, agregar una pista, elegir un instrumento o buscar loops, arrastrar un loop a la pista y presionar reproducir. Cambia el tempo (la velocidad) para que encaje con el ambiente: más lento para algo tranquilo, más rápido para algo con energía."
          ],
          steps: ["Con tu madre, padre o tutor, regístrate en BandLab o en otro estudio en línea gratuito.", "Empieza un proyecto nuevo.", "Agrega una pista de batería, con un loop o tocando un patrón sencillo.", "Agrega una pista de bajo o de teclado que encaje con la batería.", "Ajusta el tempo, hazlo de 4 compases y presiona reproducir."],
          words: [["Beat", "el pulso constante de la música; también una pista instrumental corta."], ["Compás", "un grupo de tiempos, normalmente 4."], ["Loop", "un fragmento corto de música que se repite."], ["Tempo", "qué tan rápido va la música, contado en pulsos por minuto (BPM)."]],
          slides: [
            { title: "Un estudio en línea gratuito", bullets: ["BandLab: navegador web o app oficial", "Regístrate con tu madre, padre o tutor", "Según los términos de BandLab, 13 años o más"] },
            { title: "Tiempos, compases y loops", bullets: ["La mayoría de las canciones: 4 tiempos por compás", "Un loop es un fragmento corto que se repite", "Empieza con batería, luego bajo y uno más"] },
            { title: "Arma tu beat", bullets: ["Proyecto nuevo, agrega una pista", "Elige un loop o un instrumento", "Ajusta el tempo y presiona reproducir"] }
          ],
          sources: [{ name: "Términos de uso de BandLab (edad y permiso de los padres)", url: "https://bandlabtechnologies.com/policies/bandlab-terms-of-use/" }],
          tryIt: "Haz un beat de 4 compases con batería y otro sonido. Prueba dos tempos distintos y quédate con el que encaje con el ambiente que buscas.",
          youCanNow: "abrir un estudio en línea gratuito y armar un beat corto con pistas y loops.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es un compás en la música?", options: ["Un sonido fuerte", "Un tipo de tambor", "Una aplicación para grabar", "Un grupo de tiempos, por lo general 4 en el pop y el hip-hop"], answer: 3, why: "La música se cuenta en tiempos y compases, y la mayoría de las canciones de pop y hip-hop tienen 4 tiempos por compás." },
            { objective: "O2", q: "Tu beat debería sentirse con mucha energía, pero suena dormido. ¿Qué cambias?", options: ["Lo haces más bajito", "Subes el tempo", "Borras la batería", "Agregas más compases de silencio"], answer: 1, why: "El tempo es la velocidad: más rápido para la energía, más lento para algo tranquilo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Generar ideas de letras con IA",
          minutes: 5,
          goal: "Usar la IA para generar un tema y rimas, y luego escribir la letra con tus propias palabras.",
          text: [
            "Empieza con un tema de tu vida: el primer día en una escuela nueva, un trabajo de verano, un amigo que se muda, entrar al equipo. Los sentimientos reales hacen mejores canciones que los generales.",
            "Pídele ideas a la IA, no una canción terminada: \"Dame 10 imágenes y frases sobre el último día del verano antes de la preparatoria\" o \"Dame palabras que rimen con 'tarde' y 'arde'.\" Luego elige lo que te guste y escribe tú las líneas.",
            "Cuenta las sílabas para que las palabras encajen con el beat. Lee tus líneas en voz alta sobre el beat. Si una línea se siente apretada, quita palabras. Tu letra debe sonar como tú."
          ],
          steps: ["Elige un tema de tu propia vida.", "Pídele a la IA imágenes, frases o rimas, no una canción completa.", "Escribe cuatro líneas con tus propias palabras.", "Dilas en voz alta sobre tu beat.", "Quita o cambia palabras hasta que encajen."],
          words: [["Letra", "las palabras de una canción."], ["Tema", "de lo que trata una canción."], ["Sílaba", "un golpe de sonido en una palabra; \"mú-si-ca\" tiene tres."]],
          slides: [
            { title: "Empieza con tu vida", bullets: ["Un momento o sentimiento real", "Lo específico gana a lo general"] },
            { title: "Pide ideas, no una canción", bullets: ["\"10 imágenes sobre...\"", "\"Rimas con 'tarde'\"", "Tú eliges y escribes"] },
            { title: "Haz que encaje", bullets: ["Cuenta las sílabas", "Léela sobre el beat", "Recorta las líneas apretadas"] }
          ],
          tryIt: "Elige un tema, pídele a un asistente de IA 10 imágenes o frases sobre él y escribe cuatro líneas de letra con tus propias palabras que encajen con tu beat.",
          youCanNow: "generar ideas con IA y escribir una letra original que encaje con un beat.",
          quickCheck: [
            { objective: "O3", q: "¿Qué le debes pedir a la IA cuando escribes una letra?", options: ["Una canción terminada para copiar", "La letra de tu amigo", "La letra de una canción famosa", "Ideas como imágenes, frases o rimas"], answer: 3, why: "La IA da ideas; tú escribes las líneas para que suenen como tú." },
            { objective: "O3", q: "Una línea se siente apretada cuando la dices sobre el beat. ¿Qué haces?", options: ["Quitas o cambias palabras hasta que encaje", "Aceleras toda la canción", "Agregas más palabras", "La dejas y rapeas más rápido"], answer: 0, why: "Contar sílabas y quitar palabras ayuda a que las líneas encajen con el beat." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Hacer música con IA",
        questions: [
          { objective: "O1", q: "Según la Oficina de Derechos de Autor de EE. UU., ¿escribir instrucciones basta por sí solo para que seas el autor de lo que produce la IA?", options: ["Sí, siempre", "No, las instrucciones solas no bastan", "Solo para canciones", "Solo si pagas"], answer: 1, why: "La Oficina dijo que dar instrucciones por sí solo no es suficiente." },
          { objective: "O1", q: "Un amigo quiere usar en tu pista una copia con IA de la voz de un cantante famoso. ¿Qué haces?", options: ["Usarla", "Usarla pero ocultarlo", "Decir que no y usar tu voz o la de alguien que esté de acuerdo", "Copiar también toda la canción"], answer: 2, why: "No uses la voz de una persona real sin su permiso." },
          { objective: "O2", q: "¿Qué es un loop?", options: ["Un fragmento corto de música que se repite", "La letra de una canción", "Un botón de volumen", "Un tipo de micrófono"], answer: 0, why: "Los loops se repiten y son una forma común de armar beats." },
          { objective: "O2", q: "¿Qué significa tempo?", options: ["Qué tan fuerte suena la canción", "El título de la canción", "Cuántas pistas tienes", "Qué tan rápido va la música"], answer: 3, why: "El tempo es la velocidad, contada en pulsos por minuto." },
          { objective: "O3", q: "¿Qué petición a la IA encaja mejor con este curso?", options: ["\"Escribe toda mi canción\"", "\"Dame 10 imágenes sobre mi primer trabajo de verano\"", "\"Copia un éxito\"", "\"Canta con la voz de mi maestro\""], answer: 1, why: "Pídele ideas a la IA y luego escribe tú la canción." }
        ]
      }
    },
    {
      name: "Capítulo 2: Armar, proteger y compartir tu pista",
      lessons: [
        {
          objectives: ["O4"],
          title: "Armar la estructura de una canción",
          minutes: 5,
          goal: "Ordenar tu pista en una intro, una estrofa y un coro.",
          text: [
            "La mayoría de las canciones se arman por partes. La intro abre la canción. La estrofa cuenta la historia y cambia de palabras cada vez. El coro es la parte pegajosa que se repite. Una canción corta podría ir así: intro, estrofa, coro.",
            "Haz que cada parte se sienta un poco diferente. Por ejemplo, la intro tiene solo teclado, la estrofa agrega batería y el coro agrega bajo y una melodía. Copia y pega secciones en el estudio para armar la canción a lo largo de la línea de tiempo.",
            "Puedes preguntarle a la IA: \"Tengo un beat de 4 compases a 90 BPM. ¿Cómo podría ordenar una canción de 60 segundos con intro, estrofa y coro?\" Luego prueba sus ideas y confía en tus oídos."
          ],
          steps: ["Planea el orden: intro, estrofa, coro.", "Copia tu beat para hacer cada sección.", "Quita o agrega sonidos para que cada parte se sienta diferente.", "Pon tu letra en la estrofa y el coro.", "Reproduce todo y ajusta."],
          words: [["Intro", "el inicio de una canción."], ["Estrofa", "la parte que cuenta la historia; las palabras cambian cada vez."], ["Coro", "la parte pegajosa que se repite."], ["Arreglo", "cómo se ordenan y se combinan las partes de una canción."]],
          slides: [
            { title: "Partes de una canción", bullets: ["Intro: abre la canción", "Estrofa: cuenta la historia", "Coro: la parte pegajosa que se repite"] },
            { title: "Haz cada parte diferente", bullets: ["Intro: menos sonidos", "Estrofa: agrega batería", "Coro: agrega bajo y melodía"] },
            { title: "Pregúntale a la IA, confía en tus oídos", bullets: ["Pide ideas de arreglo", "Pruébalas", "Quédate con lo que te suene bien"] }
          ],
          tryIt: "Ordena tu beat en una intro, una estrofa y un coro de unos 60 segundos. Agrega tus cuatro líneas de letra como notas de texto o grábalas si quieres.",
          youCanNow: "ordenar una pista en partes claras de canción que se sientan diferentes.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace la intro de una canción?", options: ["Repite la parte pegajosa", "Termina la canción", "Abre la canción", "Cuenta toda la historia"], answer: 2, why: "La intro abre la canción antes de la estrofa y el coro." },
            { objective: "O4", q: "Tu intro, tu estrofa y tu coro suenan igual. ¿Qué haces?", options: ["Quitas o agregas sonidos para que cada parte se sienta distinta", "Subes el volumen de todas las partes", "Borras el coro", "Usas otra canción"], answer: 0, why: "Cambiar qué sonidos suenan en cada parte deja clara la estructura." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Derechos de autor, samples y voces",
          minutes: 5,
          goal: "Decidir si un sonido o una voz se puede usar en tu pista.",
          text: [
            "Los derechos de autor protegen obras originales como canciones y grabaciones. Según la Oficina de Derechos de Autor de EE. UU., una obra está protegida desde que se crea y se fija en una forma que la gente puede oír o ver, y el registro en general es voluntario. Así que la mayoría de las canciones que oyes están protegidas, y la canción que tú haces es tuya.",
            "Usar un fragmento de la grabación de otra persona se llama samplear. No sampleés canciones a menos que tengas permiso o que el sonido venga de una biblioteca que diga que lo puedes usar, como los loops de tu estudio. Lee las reglas de la herramienta.",
            "Las voces son personales. No hagas ni uses una copia con IA de la voz de una persona real, ya sea una estrella, un maestro o un compañero de clase, sin su permiso claro. Si no estás seguro de que algo esté bien, déjalo fuera o pregúntale a un maestro o a tu madre o padre."
          ],
          steps: ["Pregúntate: ¿hice yo este sonido o la herramienta dice que lo puedo usar?", "Si viene de la canción de otra persona, déjalo fuera a menos que tengas permiso.", "Nunca uses una copia con IA de la voz de una persona real sin permiso.", "Si no estás seguro, déjalo fuera o pregúntale a un adulto de confianza."],
          words: [["Derechos de autor", "el derecho legal de un creador a controlar las copias de su obra."], ["Sample", "un fragmento de la grabación de otra persona usado en una pista nueva."], ["Clon de voz", "una copia con IA de la voz de una persona real."]],
          slides: [
            { title: "Lo básico de los derechos de autor", bullets: ["Protegen canciones y grabaciones", "Empiezan cuando la obra se crea y se fija", "El registro en general es voluntario"] },
            { title: "Samples", bullets: ["No sampleés canciones sin permiso", "Loops del estudio: revisa las reglas de la herramienta"] },
            { title: "Voces", bullets: ["Nada de copias con IA de personas reales sin permiso", "Incluye estrellas, maestros y compañeros", "¿No estás seguro? Déjalo fuera o pregunta"] }
          ],
          sources: [{ name: "Oficina de Derechos de Autor de EE. UU.: preguntas frecuentes básicas", url: "https://www.copyright.gov/help/faq/faq-general.html" }, { name: "Oficina de Derechos de Autor de EE. UU.: derechos de autor e inteligencia artificial", url: "https://www.copyright.gov/ai/" }],
          tryIt: "Haz una lista de cada sonido de tu pista y de dónde salió: hecho por ti, un loop del estudio u otra cosa. Quita todo lo que no puedas asegurar que se puede usar.",
          youCanNow: "revisar cada sonido y cada voz de tu pista y quedarte solo con lo que tienes permitido usar.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es samplear?", options: ["Grabar tu propia voz", "Usar un pedazo de la grabación de otra persona en una pista nueva", "Cambiar el tempo", "Exportar una canción"], answer: 1, why: "Samplear significa usar parte de la grabación de otra persona." },
            { objective: "O5", q: "Encontraste un sonido genial en internet, pero no sabes quién lo hizo ni si lo puedes usar. ¿Qué haces?", options: ["Lo usas; nadie se va a dar cuenta", "Lo aceleras para que suene distinto", "Te das el crédito a ti", "Lo dejas fuera o le preguntas a un adulto de confianza"], answer: 3, why: "Si no puedes decir que un sonido se puede usar, déjalo fuera o pregunta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mezclar, exportar y compartir de forma segura",
          minutes: 5,
          goal: "Equilibrar tu pista, exportarla y compartirla con créditos honestos.",
          text: [
            "Mezclar significa ajustar qué tan fuerte suena cada pista para que nada tape al resto. Baja lo que esté demasiado fuerte y escucha tanto con audífonos como con la bocina de un teléfono.",
            "Luego exporta o guarda la pista como archivo de audio con la opción de exportar o descargar del estudio. Escribe una nota de créditos corta: tu nombre o nombre artístico, el título y cómo usaste la IA, por ejemplo \"La IA me ayudó a generar ideas de letra; toda la música y la letra las escribí y arreglé yo.\"",
            "Comparte de forma segura: publica solo donde tu familia esté de acuerdo, mantén privados tu nombre completo, tu escuela y tu ubicación si publicas en abierto, y piénsalo antes de activar los comentarios. Si tu pista es para la escuela, sigue las reglas de tu maestro sobre la IA."
          ],
          steps: ["Equilibra el volumen de cada pista.", "Escucha con audífonos y con la bocina de un teléfono.", "Exporta o guarda la pista como archivo de audio.", "Escribe una nota de créditos que diga cómo usaste la IA.", "Comparte solo donde tu familia esté de acuerdo, manteniendo privados tus datos personales."],
          words: [["Mezcla", "equilibrar el volumen de cada pista."], ["Exportar", "guardar tu proyecto como un archivo que otros pueden reproducir."], ["Nota de créditos", "una nota corta que dice quién hizo qué."]],
          slides: [
            { title: "Mézclala", bullets: ["Equilibra el volumen de cada pista", "Revisa con audífonos y con la bocina de un teléfono"] },
            { title: "Exporta y da créditos", bullets: ["Guárdala como archivo de audio", "Título y nombre artístico", "Di cómo usaste la IA"] },
            { title: "Comparte de forma segura", bullets: ["Donde tu familia esté de acuerdo", "Mantén privados tu nombre, escuela y ubicación", "Sigue las reglas de IA de la escuela"] }
          ],
          tryIt: "Tarea final: termina tu pista original de 60 segundos con beat, intro, estrofa y coro y tu propia letra. Revisa que cada sonido se pueda usar, expórtala y escribe una nota de créditos que diga cómo usaste la IA.",
          youCanNow: "hacer, mezclar, exportar y compartir una pista original de forma justa y segura, con créditos honestos.",
          quickCheck: [
            { objective: "O6", q: "¿Qué significa mezclar?", options: ["Ajustar el volumen de cada pista para que ninguna tape a las demás", "Agregar más letra", "Escoger el título de la canción", "Subir la canción"], answer: 0, why: "Mezclar equilibra el volumen de cada pista." },
            { objective: "O6", q: "Quieres publicar tu pista en internet. ¿Qué mantienes privado?", options: ["El título de la canción", "Tu nombre artístico", "Tu nombre completo, tu escuela y tu ubicación", "Cómo usaste la IA"], answer: 2, why: "Comparte con seguridad manteniendo privados tus datos personales y publicando solo donde tu familia esté de acuerdo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Armar, proteger y compartir tu pista",
        questions: [
          { objective: "O4", q: "¿Qué parte de una canción es la parte pegajosa que se repite?", options: ["La intro", "La estrofa", "La exportación", "El coro"], answer: 3, why: "El coro es el gancho que se repite." },
          { objective: "O5", q: "¿Cuándo empieza la protección de los derechos de autor, según la Oficina de Derechos de Autor de EE. UU.?", options: ["Cuando una obra se crea y se fija en una forma que la gente puede oír o ver", "Solo después del registro", "Después de 10 años", "Solo para artistas famosos"], answer: 0, why: "La protección empieza cuando la obra se crea y se fija." },
          { objective: "O5", q: "Quieres usar 5 segundos de un éxito en tu beat. ¿Qué haces?", options: ["Usarlo; es corto", "Dejarlo fuera a menos que tengas permiso", "Cambiar la velocidad para que nadie se dé cuenta", "Darle crédito al cantante y usarlo"], answer: 1, why: "Samplear una canción protegida necesita permiso." },
          { objective: "O6", q: "¿Qué es mezclar?", options: ["Escribir la letra", "Registrarte en una app", "Equilibrar el volumen de cada pista", "Elegir un tema"], answer: 2, why: "Mezclar equilibra qué tan fuerte suena cada parte." },
          { objective: "O6", q: "¿Qué nota de créditos es honesta?", options: ["\"No se usó IA\" cuando sí se usó", "\"La IA me ayudó a generar ideas de letra; música y letra mías\"", "Ninguna nota en un trabajo escolar", "\"Hecha por un productor famoso\""], answer: 1, why: "Dice con claridad cómo se usó la IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Producción musical con IA",
    questions: [
      { objective: "O1", q: "¿Cuál es una forma en que se usa la IA en la música?", options: ["Sugerir acordes o patrones de batería", "Reemplazar tus oídos", "Firmar contratos discográficos por ti", "Ser dueña de tus canciones"], answer: 0, why: "Las herramientas de IA pueden sugerir ideas musicales." },
      { objective: "O1", q: "En este curso, el trabajo de la IA es ser tu:", options: ["Escritora fantasma", "Compañera para generar ideas", "Jefa", "Abogada"], answer: 1, why: "Tú tomas las decisiones creativas principales." },
      { objective: "O1", q: "¿Qué dijo la Oficina de Derechos de Autor de EE. UU. sobre las instrucciones solas?", options: ["Te hacen el autor", "Son ilegales", "No bastan para hacerte el autor", "Son solo para adultos"], answer: 2, why: "Dar instrucciones por sí solo no basta para ser autor." },
      { objective: "O2", q: "Según los términos de BandLab, los usuarios deben tener al menos:", options: ["8 años", "10 años", "21 años", "13 años, con permiso de los padres si son menores de 18"], answer: 3, why: "Los términos dicen 13 años o más, con permiso de la madre, padre o tutor para los menores." },
      { objective: "O2", q: "¿Cuántos tiempos por compás tienen la mayoría de las canciones de pop y hip-hop?", options: ["1", "4", "12", "100"], answer: 1, why: "Cuatro tiempos por compás es lo más común." },
      { objective: "O2", q: "Un buen orden para armar un beat es:", options: ["Solo voces", "Batería, luego bajo y luego un sonido más", "Exportar primero", "Diez sonidos a la vez"], answer: 1, why: "Empezar con batería y bajo da una base sólida." },
      { objective: "O2", q: "Quieres un ambiente tranquilo y relajado. Probablemente deberías:", options: ["Hacer el tempo muy rápido", "Agregar alarmas fuertes", "Usar un tempo más lento", "Borrar la batería"], answer: 2, why: "Los tempos más lentos normalmente se sienten más tranquilos." },
      { objective: "O3", q: "¿Qué tema probablemente hará una canción más fuerte?", options: ["\"Cosas\"", "\"La vida en general\"", "\"Pasan cosas\"", "\"Vaciar mi casillero el último día de octavo grado\""], answer: 3, why: "Los momentos específicos y reales hacen letras más fuertes." },
      { objective: "O3", q: "Una buena petición a la IA para la letra es:", options: ["\"Dame palabras que rimen con 'tarde'\"", "\"Escribe toda la canción y yo la firmo\"", "\"Copia la letra de una canción famosa\"", "\"Usa el diario de mi amigo\""], answer: 0, why: "Pedir ideas sueltas mantiene la escritura como tuya." },
      { objective: "O3", q: "Una línea está demasiado apretada para el beat. ¿Qué haces?", options: ["Acelerar toda la canción", "Quitar palabras hasta que encaje", "Agregar más palabras", "Borrar el coro"], answer: 1, why: "Quitar palabras ayuda a que las líneas encajen con el ritmo." },
      { objective: "O4", q: "La estrofa de una canción:", options: ["Nunca tiene palabras", "Es igual cada vez", "Cuenta la historia, con palabras que cambian", "Es el archivo exportado"], answer: 2, why: "Las estrofas llevan la historia y cambian de palabras." },
      { objective: "O4", q: "¿Cómo puedes hacer que el coro resalte?", options: ["Dejarlo en silencio", "Borrar el beat", "Usar los mismos sonidos que la intro", "Agregar más sonidos, como bajo y una melodía"], answer: 3, why: "Agregar capas hace que el coro se sienta más grande." },
      { objective: "O4", q: "La IA te da ideas de arreglo. Luego tú:", options: ["Las pruebas y confías en tus oídos", "Debes usarlas todas", "Debes ignorarlas todas", "Las publicas como tu canción"], answer: 0, why: "Tú eres quien toma las decisiones creativas." },
      { objective: "O5", q: "¿Hace falta registrar tu canción para que tenga protección de derechos de autor?", options: ["Sí, siempre", "No, el registro en general es voluntario", "Solo los fines de semana", "Solo para canciones de la escuela"], answer: 1, why: "La Oficina de Derechos de Autor dice que el registro en general es voluntario." },
      { objective: "O5", q: "Un sample es:", options: ["Una prueba gratis", "Un tipo de micrófono", "Un fragmento de la grabación de otra persona usado en una pista nueva", "Una idea de letra"], answer: 2, why: "Samplear usa parte de una grabación existente." },
      { objective: "O5", q: "La IA podría clonar la voz de un compañero de clase para tu coro. ¿Cuál es la regla?", options: ["Hacerlo como sorpresa", "Hacerlo si suena bien", "Hacerlo solo en computadoras de la escuela", "Solo con su permiso claro"], answer: 3, why: "Las voces son personales; consigue un permiso claro o no las uses." },
      { objective: "O5", q: "No estás seguro de si un sonido se puede usar. La opción más segura es:", options: ["Dejarlo fuera o preguntarle a un adulto de confianza", "Usarlo y esperar que no pase nada", "Esconderlo en la mezcla", "Cambiarle el nombre al archivo"], answer: 0, why: "Si no estás seguro, déjalo fuera o pregunta." },
      { objective: "O6", q: "¿Por qué escuchar con audífonos y con la bocina de un teléfono?", options: ["Lo exige la ley", "Para revisar que la mezcla suene bien en distintos aparatos", "Para que suene más fuerte", "Para exportarla"], answer: 1, why: "Las mezclas suenan distinto en distintos aparatos." },
      { objective: "O6", q: "Al publicar tu pista en abierto, debes mantener privados:", options: ["El título de la canción", "Tu nombre artístico", "Tu nombre completo, tu escuela y tu ubicación", "El género"], answer: 2, why: "Los datos personales se quedan privados en internet." },
      { objective: "O6", q: "Tu pista es para la clase de música. Sobre la IA, deberías:", options: ["Ocultar que la usaste", "Pedirle a la IA una nota que diga que no hubo IA", "No poner nota de créditos", "Seguir las reglas de tu maestro y decir cómo la usaste"], answer: 3, why: "Ser honesto sobre el uso de la IA es parte de las reglas de la escuela." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      6,
      8,
      10,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Beat",
        objective: "O2",
        notYet: "No hay batería, o solo hay un sonido.",
        meets: "Un beat con batería y al menos otro sonido, a un tempo que va con el ánimo.",
        exceeds: "La persona puede explicar por qué escogió ese tempo."
      },
      {
        name: "Estructura de la canción",
        objective: "O4",
        notYet: "No hay una intro, una estrofa ni un coro claros.",
        meets: "Unos 60 segundos con una intro, una estrofa y un coro que suenan un poco distintos.",
        exceeds: "El coro resalta claramente, por ejemplo con bajo o melodía agregados."
      },
      {
        name: "Letra propia",
        objective: "O3",
        notYet: "Falta la letra o está copiada de la IA.",
        meets: "Al menos cuatro líneas con palabras propias que encajan con el beat.",
        exceeds: "La letra usa un tema real de la vida de la persona y muestra ideas de la IA que se cambiaron."
      },
      {
        name: "Original y permitido",
        objective: "O5",
        notYet: "Usa una canción copiada, un sample sin licencia o una copia con IA de una voz real.",
        meets: "Cada sonido lo hizo la persona o lo permite el estudio, y no se copia ninguna voz real.",
        exceeds: "Incluye una lista de cada sonido y de dónde salió."
      },
      {
        name: "Exportación y créditos",
        objective: "O6",
        notYet: "No se exportó, o no hay nota de créditos.",
        meets: "Exportada como archivo de audio con una nota de créditos que dice cómo se usó la IA.",
        exceeds: "La mezcla se revisó con audífonos y con la bocina de un teléfono, y se ajustó."
      }
    ]
  },
  evaluation: {
    results: [
      "Jóvenes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Jóvenes que hacen una segunda pista original dentro de 30 días (encuesta de seguimiento)",
      "Jóvenes que comparten una pista con seguridad con su familia, una clase o una muestra de un programa juvenil",
      "Jóvenes que se unen a una clase, un club o un programa de música dentro de 90 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora de la escuela o de la biblioteca con internet",
      "Audífonos",
      "BandLab u otro estudio en línea gratuito, con permiso de la madre, el padre o el tutor para los menores de 18",
      "Un asistente de IA gratuito que la persona tenga permiso de usar",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Revisa las reglas de edad de cada herramienta antes de la clase y junta los permisos de las madres, los padres o los tutores para los registros; ten lista una cuenta de demostración si hace falta.",
      "Ten audífonos disponibles para que puedan trabajar uno junto a otro en un laboratorio.",
      "Revisa la lista de sonidos de cada persona antes de exportar para detectar canciones copiadas, samples sin licencia o voces clonadas.",
      "Organiza una sesión para escuchar las pistas solo dentro del grupo, con el acuerdo de las familias antes de publicar algo.",
      "Califica la pista con la rúbrica y da retroalimentación sobre una fila en Todavía no a la vez."
    ]
  }
};

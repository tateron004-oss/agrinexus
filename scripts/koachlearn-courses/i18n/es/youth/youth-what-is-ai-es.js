"use strict";

// Koach Learn course (Spanish translation of youth/youth-what-is-ai.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-what-is-ai-es",
  lang: "es",
  translationOf: "youth-what-is-ai",
  category: "Youth",
  name: "¿Qué es la IA? (para jóvenes)",
  skills: "Explicar qué es la IA, Encontrar la IA en las aplicaciones de todos los días, Respetar los límites de edad y las reglas de la escuela, Hacer una pregunta clara a un asistente de IA, Comprobar una respuesta de la IA",
  outcome: "explicar con tus propias palabras qué es la IA, encontrarla en las aplicaciones que ya usas y usar un asistente de IA gratis de la forma correcta: respetando su límite de edad y las reglas de tu escuela, con una pregunta clara y comprobando la respuesta antes de confiar en ella.",
  about: [
    "La IA ya está en tu teléfono, en tus juegos, en tu aplicación de música y en tus herramientas de la escuela. Este curso es para jóvenes de unos 13 a 18 años que quieren entender qué es de verdad y cómo usarla bien.",
    "Vas a aprender qué es la IA y qué no es, dónde se esconde en las aplicaciones que usas todos los días, cómo respetar los límites de edad y las reglas de IA de tu escuela, cómo hacer una pregunta clara y cómo comprobar una respuesta antes de creerla.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz una \"explicación de la IA\" de una página para un estudiante más chico o para un amigo: di qué es la IA en dos frases, nombra tres aplicaciones que usas que tienen IA e incluye una pregunta que le hiciste a un asistente de IA, la respuesta y cómo la comprobaste.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes de unos 13 a 18 años, que estudian o no, que ya usan teléfonos, juegos y aplicaciones y quieren entender qué es de verdad la IA y cómo usarla bien.",
    startingPoint: "Usan todos los días aplicaciones de música, video, juegos y mensajes, y quizás han probado un asistente de chat. La mayoría no puede explicar cómo funciona la IA, dónde se esconde en sus aplicaciones ni cómo comprobar lo que dice.",
    gap: "La IA está en las herramientas que los jóvenes usan para la escuela y para divertirse, pero muchos la usan sin conocer sus límites de edad, las reglas de su escuela o que puede equivocarse. Aprender a preguntar con claridad, comprobar las respuestas y cuidarse les ayuda a aprender mejor, evitar problemas por hacer trampa y protegerse a sí mismos y a los demás.",
    constraints: [
      "Límites de edad: muchas herramientas de IA piden tener 13 años o más, y algunas piden permiso de la madre, el padre o el tutor a los menores de 18",
      "Las reglas sobre la IA cambian según la escuela y el maestro",
      "Dispositivos: un teléfono o una computadora de la escuela; algunos tienen poco internet en casa",
      "Privacidad y seguridad: nada de datos privados ni fotos de personas reales en herramientas de IA",
      "Palabras sencillas y lecciones cortas para distintos niveles de lectura"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tus propias palabras", action: "explicar qué es la IA, cómo aprende de ejemplos y por qué puede equivocarse", standard: "en dos frases que un estudiante más pequeño pueda entender" },
    { id: "O2", condition: "Usando las aplicaciones de tu teléfono o de una computadora de la escuela", action: "identificar dónde la IA sugiere, ordena, adivina o crea algo, incluida la IA generativa", standard: "nombrando por lo menos tres aplicaciones y lo que hace la IA en cada una" },
    { id: "O3", condition: "Antes de usar una herramienta de IA nueva en casa o en la escuela", action: "revisar la regla de edad de la herramienta y las reglas de IA de tu escuela, y mostrarle la aplicación a tu madre, padre o tutor", standard: "usando la página oficial de ayuda o de términos de la herramienta" },
    { id: "O4", condition: "Con algo que quieres aprender", action: "escribir una instrucción que diga lo que quieres, un poco de contexto y cómo quieres la respuesta", standard: "para que la primera respuesta sea útil" },
    { id: "O5", condition: "Con una respuesta de la IA que tiene datos", action: "comprobar nombres, fechas y números en una fuente confiable", standard: "anotando dónde comprobaste cada dato" },
    { id: "O6", condition: "Cuando escribes una instrucción o ves contenido hecho con IA", action: "dejar fuera la información privada, negarte a hacer imágenes falsas de personas reales y cuestionar las respuestas injustas", standard: "sin compartir datos privados y contándole a un adulto de confianza sobre las imágenes falsas que lastiman" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Qué es la IA y dónde te la encuentras",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la IA, con palabras sencillas",
          minutes: 4,
          goal: "Explicar en dos frases qué es la IA y qué no es.",
          text: [
            "IA quiere decir inteligencia artificial. Son programas de computadora que hacen cosas que normalmente necesitan que una persona piense, como reconocer una cara, entender lo que alguien dice, sugerir una canción o escribir una respuesta.",
            "La mayoría de la IA aprende de cantidades enormes de ejemplos. Un programa que ha visto millones de fotos de gatos puede adivinar si una foto nueva tiene un gato. Un programa que ha leído muchísimos textos puede escribir frases que suenan como las de una persona.",
            "La IA no está viva, no tiene sentimientos y no entiende de verdad el mundo como tú. Encuentra patrones y hace su mejor intento de adivinar. Por eso puede ser muy útil y aun así equivocarse."
          ],
          words: [["IA", "inteligencia artificial: programas de computadora que hacen tareas que normalmente necesitan el pensamiento humano."], ["Patrón", "algo que se repite de una forma que un programa puede aprender y usar para adivinar."]],
          slides: [
            { title: "IA = inteligencia artificial", bullets: ["Programas que hacen tareas de pensar", "Reconocen caras, entienden lo que dices, escriben respuestas"] },
            { title: "Cómo aprende", bullets: ["Estudia muchísimos ejemplos", "Encuentra patrones", "Hace su mejor intento de adivinar"] },
            { title: "Lo que la IA NO es", bullets: ["No está viva, no tiene sentimientos", "No entiende como tú", "Se puede equivocar aunque suene segura"] }
          ],
          tryIt: "Escribe dos frases que le expliquen la IA a un niño de diez años. No uses ninguna palabra que no conozca. Léeselas a alguien y pregúntale si se entendió.",
          youCanNow: "explicar en dos frases sencillas qué es la IA y qué no es.",
          quickCheck: [
            { objective: "O1", q: "¿Qué significa que la IA \"encuentra patrones\"?", options: ["Siente lo que tú sientes", "Sabe todo sobre el mundo", "Aprende de muchos ejemplos y da su mejor suposición", "Te lee la mente"], answer: 2, why: "La IA aprende de enormes cantidades de ejemplos y adivina según los patrones que encontró." },
            { objective: "O1", q: "Tu amigo dice: \"La IA está viva y me entiende\". ¿Qué le dices?", options: ["La IA no está viva ni tiene sentimientos; adivina a partir de patrones", "Sí, tiene sentimientos como una persona", "Solo la IA de pago está viva", "La IA solo funciona en teléfonos"], answer: 0, why: "La IA es un programa que encuentra patrones; no está viva y no entiende de verdad." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar la IA en las aplicaciones que ya usas",
          minutes: 5,
          goal: "Nombrar por lo menos tres lugares donde aparece la IA en tus aplicaciones de todos los días.",
          text: [
            "Seguramente usas IA todos los días sin llamarla así. Las aplicaciones de música y de videos sugieren qué poner después según lo que te gustó antes. Eso es la IA buscando patrones en lo que eliges.",
            "Las cámaras de los teléfonos usan IA para que las fotos se vean más nítidas y para desenfocar el fondo. Los teclados adivinan tu siguiente palabra. Los mapas calculan el tráfico. Los juegos usan IA para controlar a los personajes contra los que juegas. Las aplicaciones de correo y de mensajes filtran el correo basura.",
            "Los asistentes de chat, como ChatGPT, Microsoft Copilot y Google Gemini, son un tipo más nuevo llamado IA generativa. En vez de solo ordenar o sugerir, crean textos, imágenes o sonidos nuevos."
          ],
          steps: ["Abre una aplicación que uses mucho.", "Pregúntate: ¿me está sugiriendo, ordenando, adivinando o creando algo?", "Si es así, probablemente es la IA trabajando.", "Escribe el nombre de la aplicación y lo que hace la IA."],
          words: [["Recomendación", "una sugerencia que hace una aplicación según lo que hiciste antes."], ["IA generativa", "IA que crea cosas nuevas, como textos, imágenes o música."]],
          slides: [
            { title: "IA que ya usas", bullets: ["Sugerencias de música y videos", "Arreglos de fotos de la cámara del teléfono", "El teclado que adivina tu siguiente palabra", "Personajes de juegos y filtros de correo basura"] },
            { title: "Pregúntate", bullets: ["¿La aplicación sugiere, ordena, adivina o crea?", "Si es así, probablemente es IA"] },
            { title: "IA generativa", bullets: ["Crea textos, imágenes o sonidos nuevos", "Ejemplos: ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Revisa las aplicaciones de tu teléfono o de una computadora de la escuela. Haz una lista de tres que usen IA y escribe una línea para cada una diciendo qué hace la IA, por ejemplo \"Aplicación de música: me sugiere canciones que me podrían gustar\".",
          youCanNow: "encontrar la IA en las aplicaciones de todos los días y decir qué está haciendo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace diferente a la IA generativa de las canciones que te sugiere una aplicación de música?", options: ["Solo ordena correos", "Crea texto, imágenes o sonidos nuevos", "Solo funciona sin internet", "Nunca usa patrones"], answer: 1, why: "La IA generativa crea contenido nuevo en lugar de solo ordenar o sugerir." },
            { objective: "O2", q: "Quieres saber si una aplicación usa IA. ¿Qué pregunta ayuda más?", options: ["¿La aplicación es gratis?", "¿El ícono es azul?", "¿Qué tan vieja es la aplicación?", "¿Me está sugiriendo, ordenando, adivinando o creando algo?"], answer: 3, why: "Si una aplicación te sugiere, ordena, adivina o crea algo, probablemente hay IA trabajando." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Límites de edad, reglas de la escuela y tu madre, padre o tutor",
          minutes: 5,
          goal: "Revisar si puedes usar una herramienta de IA, en casa y en la escuela, antes de registrarte.",
          text: [
            "Cada herramienta de IA tiene reglas sobre quién la puede usar. Muchas piden que tengas por lo menos 13 años, y algunas piden el permiso de tu madre, padre o tutor si tienes menos de 18. Google, por ejemplo, dice que debes tener 13 años o más (o la edad que aplique en tu país) para usar Gemini con una cuenta personal o de la escuela. Las reglas cambian, así que lee los términos o la página de ayuda de la propia herramienta.",
            "Tu escuela también tiene reglas. Algunas clases permiten la IA para buscar ideas pero no para escribir tus trabajos. Algunas la prohíben en los exámenes. Usarla en contra de las reglas puede contar como hacer trampa, aunque no haya sido tu intención. Si tienes dudas, pregunta a tu maestro antes de usarla.",
            "Antes de crear una cuenta en cualquier aplicación nueva, habla con tu madre, padre o tutor. Muéstrale la aplicación, su regla de edad y qué información te pide. Muchas escuelas también te dan una cuenta escolar para herramientas aprobadas; usa esa para las tareas de la escuela."
          ],
          steps: ["Busca la regla de edad de la herramienta en su página oficial de ayuda o de términos.", "Revisa las reglas de IA de tu escuela y de tu maestro.", "Muéstrale la aplicación a tu madre, padre o tutor antes de registrarte.", "Usa tu cuenta escolar para las herramientas aprobadas de la escuela."],
          words: [["Términos de uso", "las reglas que pone una empresa para usar su aplicación o sitio web."], ["Integridad académica", "ser honesto con tus trabajos de la escuela: lo que entregas muestra lo que tú hiciste."]],
          sources: [{ name: "Ayuda de las aplicaciones de Google Gemini: lo que necesitas para iniciar sesión (requisito de edad)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Primero revisa la regla de edad", bullets: ["Muchas herramientas de IA piden que tengas 13 años o más", "Algunas piden el permiso de tus padres si tienes menos de 18", "Lee la página de ayuda o de términos de la herramienta"] },
            { title: "Conoce las reglas de tu escuela", bullets: ["Algunas clases permiten la IA solo para ideas", "Algunas la prohíben en los exámenes", "¿No estás seguro? Pregunta primero a tu maestro"] },
            { title: "Incluye a tu madre, padre o tutor", bullets: ["Muéstrale la aplicación antes de registrarte", "Miren qué información pide", "Usa tu cuenta escolar para las herramientas de la escuela"] }
          ],
          tryIt: "Escoge un asistente de IA. Busca su regla de edad en la página propia de ayuda o de términos de la empresa. Luego escribe la regla sobre IA de tu escuela o de un maestro. Muéstrale las dos a tu madre, padre o tutor.",
          youCanNow: "revisar la regla de edad de una herramienta de IA y las reglas de IA de tu escuela, e incluir a tu madre, padre o tutor antes de registrarte.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es el mejor lugar para encontrar la regla de edad de una herramienta de IA?", options: ["La propia página de ayuda o de términos de la herramienta", "Lo que cree un amigo", "Un comentario cualquiera en un video", "La calificación con estrellas de la aplicación"], answer: 0, why: "Las reglas cambian, así que léelas en la propia página de ayuda o de términos de la empresa." },
            { objective: "O3", q: "No sabes si se permite usar IA en un proyecto de clase. ¿Qué haces?", options: ["La usas y esperas que no pase nada", "Le preguntas a un amigo de otra escuela", "La usas pero no le dices a nadie", "Le preguntas a tu maestro antes de usarla"], answer: 3, why: "Las reglas de cada escuela son distintas, y usar IA cuando no se permite puede contar como trampa, así que pregunta primero." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué es la IA y dónde te la encuentras",
        questions: [
          { objective: "O1", q: "¿Qué frase describe mejor la IA?", options: ["Un robot que tiene sentimientos", "Programas de computadora que hacen tareas que normalmente necesitan el pensamiento humano", "Un tipo de cargador de teléfono", "Un sitio web que siempre tiene razón"], answer: 1, why: "La IA son programas que hacen tareas de pensar, como reconocer, sugerir y escribir." },
          { objective: "O1", q: "¿Cómo aprende la mayoría de la IA?", options: ["Yendo a la escuela", "Leyendo tu mente", "Nunca aprende", "Estudiando muchísimos ejemplos y encontrando patrones"], answer: 3, why: "La IA encuentra patrones en grandes conjuntos de ejemplos y los usa para adivinar." },
          { objective: "O2", q: "Tu aplicación de música te sugiere una canción nueva que te podría gustar. Esto es:", options: ["La IA haciendo una recomendación", "Un virus", "Una regla del maestro", "Una llamada telefónica"], answer: 0, why: "Las sugerencias basadas en lo que elegiste antes son un uso común de la IA." },
          { objective: "O3", q: "Quieres probar una aplicación de IA nueva. ¿Qué debes hacer primero?", options: ["Registrarte con cualquier fecha de nacimiento", "Darle tu contraseña de la escuela", "Revisar su regla de edad y mostrársela a tu madre, padre o tutor", "Descargarla desde un anuncio emergente"], answer: 2, why: "Las reglas de edad y el permiso de tu madre, padre o tutor van antes de registrarte." },
          { objective: "O3", q: "Tu maestro dice que la IA está bien para buscar ideas pero no para escribir tu ensayo. Tú:", options: ["Haces que la IA escriba el ensayo de todos modos", "No haces caso a la regla", "Usas la IA solo para ideas y luego escribes tú el ensayo", "Copias el ensayo de un amigo"], answer: 2, why: "Seguir la regla de tu maestro mantiene honesto tu trabajo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar un asistente de IA de forma inteligente",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hacer una pregunta clara",
          minutes: 5,
          goal: "Escribir una instrucción clara que consiga una respuesta útil a la primera.",
          text: [
            "Lo que le escribes a un asistente de IA se llama instrucción (en inglés, prompt). Las instrucciones claras consiguen mejores respuestas.",
            "Una buena instrucción tiene tres partes: lo que quieres, un poco de contexto y cómo quieres la respuesta. Por ejemplo: \"Estoy en noveno grado y vamos a empezar un tema sobre el ciclo del agua. Explícalo en 5 pasos cortos con un ejemplo de la vida diaria.\"",
            "Una instrucción débil como \"ciclo del agua\" hace que el asistente adivine lo que necesitas. Normalmente te dará una respuesta larga y general."
          ],
          steps: ["Di lo que quieres.", "Agrega un poco de contexto (tu grado, el tema, lo que ya sabes).", "Di cómo lo quieres: pasos, una lista, corto, palabras sencillas o un ejemplo."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA."]],
          slides: [
            { title: "Una instrucción es tu pedido", bullets: ["Instrucción clara = mejor respuesta", "Instrucción vaga = respuesta general"] },
            { title: "Tres partes", bullets: ["1. Lo que quieres", "2. Un poco de contexto", "3. Cómo quieres la respuesta"] },
            { title: "Débil o clara", bullets: ["Débil: \"ciclo del agua\"", "Clara: \"Estoy en noveno grado. Explica el ciclo del agua en 5 pasos cortos con un ejemplo.\""] }
          ],
          tryIt: "Escoge algo que te dé curiosidad, como cómo funciona el motor de un videojuego o por qué el cielo es azul. Escribe una instrucción con las tres partes, mándala a un asistente de IA que tengas permiso de usar y lee la respuesta.",
          youCanNow: "escribir una instrucción clara de tres partes.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es la parte de \"contexto\" de una instrucción?", options: ["El color de la pantalla", "Un poco sobre ti y el tema, como tu grado o lo que ya sabes", "Tu contraseña", "La configuración de la aplicación"], answer: 1, why: "El contexto, como tu grado y el tema, ayuda al asistente a ajustar la respuesta para ti." },
            { objective: "O4", q: "Escribiste \"volcanes\" y recibiste una respuesta larga y general. ¿Qué envías después?", options: ["\"volcanes\" otra vez", "Nada; te rindes", "\"Estoy en 8.º grado. Explica cómo hacen erupción los volcanes en 4 pasos cortos.\"", "Tu dirección de casa"], answer: 2, why: "Agregar lo que quieres, el contexto y el formato hace clara la instrucción." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Comprobar la respuesta antes de confiar en ella",
          minutes: 5,
          goal: "Comprobar una respuesta de la IA con por lo menos una fuente confiable.",
          text: [
            "Los asistentes de IA a veces inventan cosas. Pueden inventar una fecha, una cita, un libro que no existe o un dato que suena bien pero está mal. A esto se le llama alucinación.",
            "Comprueba todo lo importante, sobre todo los datos para la escuela, la salud, el dinero y las noticias. Busca en tu libro de texto, pregunta a tu maestro o al bibliotecario, o busca un sitio confiable, como un museo, una agencia de ciencia, una enciclopedia que use tu escuela o un sitio que termine en .gov o .edu.",
            "Un buen hábito: compara dos fuentes. Si la IA y una fuente confiable no coinciden, confía en la fuente, y quizá dile a tu maestro en qué se equivocó la IA."
          ],
          steps: ["Encuentra los datos de la respuesta: nombres, fechas, números.", "Busca cada uno en una fuente confiable.", "Si no coinciden, quédate con la fuente confiable.", "Anota dónde lo comprobaste."],
          words: [["Alucinación", "cuando una IA escribe algo que suena cierto pero es inventado."], ["Fuente", "de dónde viene la información."]],
          slides: [
            { title: "La IA puede inventar cosas", bullets: ["Fechas y números equivocados", "Citas o libros falsos", "Datos que suenan bien pero no lo están"] },
            { title: "Comprueba con fuentes confiables", bullets: ["Tu libro de texto, tu maestro o el bibliotecario", "Museos, agencias de ciencia, sitios .gov o .edu"] },
            { title: "Si no coinciden", bullets: ["Confía en la fuente confiable", "Anota dónde lo comprobaste"] }
          ],
          tryIt: "Toma la respuesta de tu última instrucción. Escoge dos datos y comprueba cada uno en una fuente confiable. Anota si cada uno estaba bien y dónde lo comprobaste.",
          youCanNow: "encontrar los datos que hay que comprobar y comprobarlos en una fuente confiable.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es una fuente confiable para comprobar un dato de la escuela?", options: ["Un comentario cualquiera en internet", "La misma IA preguntada otra vez", "Un meme", "Tu libro de texto o un sitio que termina en .edu o .gov"], answer: 3, why: "Los libros de texto, los maestros, los bibliotecarios y los sitios confiables son buenos lugares para comprobar datos." },
            { objective: "O5", q: "La IA te recomienda un libro para tu informe, pero no lo encuentras en ningún lado. ¿Qué haces?", options: ["Lo tratas como una posible invención de la IA y usas una fuente que sí puedas encontrar", "Lo pones en tu informe de todas formas", "Inventas un número de página", "Le pides a la IA que prometa que es real"], answer: 0, why: "La IA puede inventar libros y datos; confía en fuentes que puedas comprobar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cuidarte y ser justo con la IA",
          minutes: 5,
          goal: "Usar la IA sin compartir información privada y sin lastimar a nadie.",
          text: [
            "No escribas información privada en una herramienta de IA: tu nombre completo con tu dirección, tu escuela y tus horarios, números de teléfono, contraseñas, ni fotos de tus amigos sin preguntarles. Lo que escribes se puede guardar.",
            "La IA puede hacer fotos, voces y videos falsos, a veces llamados deepfakes. Nunca uses la IA para hacer fotos falsas o vergonzosas de personas reales. Puede lastimarlas, romper las reglas de la escuela y hasta ir contra la ley. Si alguien te lo hace a ti o a un amigo, díselo a un adulto de confianza.",
            "La IA también puede ser injusta. Aprendió de lo que escribieron las personas, así que puede repetir estereotipos. Si una respuesta parece injusta con un grupo de personas, cuestiónala."
          ],
          steps: ["Lee tu instrucción antes de mandarla y quita los datos privados.", "Nunca hagas fotos o voces falsas de personas reales.", "Si ves un deepfake que lastima a alguien, díselo a un adulto de confianza.", "Cuestiona las respuestas que parezcan injustas."],
          words: [["Deepfake", "una foto, voz o video falso hecho con IA para que parezca real."], ["Sesgo", "cuando un resultado es injusto con algunas personas, muchas veces por lo que aprendió la IA."]],
          slides: [
            { title: "Mantenlo privado", bullets: ["Nada de dirección, horarios ni teléfono", "Nada de contraseñas", "Nada de fotos de amigos sin preguntarles"] },
            { title: "Los deepfakes lastiman", bullets: ["Nunca hagas falsificaciones de personas reales", "Puede romper reglas de la escuela y leyes", "Si ves uno, díselo a un adulto de confianza"] },
            { title: "Cuidado con el sesgo", bullets: ["La IA puede repetir estereotipos", "Cuestiona las respuestas que parezcan injustas"] }
          ],
          tryIt: "Tarea final: haz tu \"explicación de la IA\" de una página: qué es la IA en dos frases, tres aplicaciones que usas que tienen IA y una pregunta que le hiciste a un asistente de IA con la respuesta y cómo la comprobaste. Asegúrate de que no tenga información privada.",
          youCanNow: "usar la IA de forma segura y justa, y explicarle la IA a otra persona.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué hay que dejar fuera la información privada de las herramientas de IA?", options: ["Las herramientas de IA son lentas", "Lo que escribes puede quedar guardado", "Hace que las respuestas sean más cortas", "Los datos privados hacen más lista a la IA"], answer: 1, why: "Lo que escribes puede quedar guardado, así que los datos privados como tu dirección y tus horarios se quedan fuera." },
            { objective: "O6", q: "Un amigo quiere usar IA para hacer una imagen falsa y chistosa de un compañero de clase. ¿Qué haces?", options: ["Ayudas a hacerla pero no la compartes", "La publicas, porque es una broma", "Dices que no, porque las imágenes falsas de personas reales pueden lastimarlas y romper las reglas", "La envías solo a amigos cercanos"], answer: 2, why: "Las imágenes falsas de personas reales pueden lastimarlas, romper las reglas de la escuela e incluso la ley." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar un asistente de IA de forma inteligente",
        questions: [
          { objective: "O4", q: "¿Qué instrucción es la más clara?", options: ["\"Estoy en noveno grado. Explica el ciclo del agua en 5 pasos cortos con un ejemplo.\"", "\"ciencias\"", "\"ayuda\"", "\"dime cosas\""], answer: 0, why: "Dice lo que quieres, da contexto y dice cómo quieres la respuesta." },
          { objective: "O5", q: "¿Qué es una \"alucinación\" de la IA?", options: ["Un nivel de un videojuego", "Un tipo de pantalla de teléfono", "Una regla de la escuela", "Cuando la IA inventa algo que suena cierto"], answer: 3, why: "Una alucinación es una respuesta inventada que suena real." },
          { objective: "O5", q: "La IA te da una fecha para un proyecto de historia. Debes:", options: ["Copiarla de inmediato", "Comprobarla en tu libro de texto u otra fuente confiable", "Preguntarle otra vez a la IA y creer la segunda respuesta", "No poner la fecha"], answer: 1, why: "Los datos importantes se comprueban en una fuente confiable." },
          { objective: "O6", q: "¿Qué NO debes escribir en un asistente de IA?", options: ["Tu dirección y tu horario de la escuela", "\"Explica la fotosíntesis de forma sencilla\"", "\"Dame 3 ideas para un cartel del club\"", "\"Hazlo más corto\""], answer: 0, why: "La dirección y el horario son información privada." },
          { objective: "O6", q: "Un compañero hizo con IA una foto falsa de otro estudiante. ¿Qué debes hacer?", options: ["Compartirla", "Hacer otra", "Decírselo a un adulto de confianza", "Escribir un comentario"], answer: 2, why: "Los deepfakes de personas reales las pueden lastimar; un adulto de confianza puede ayudar a detenerlo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: ¿Qué es la IA? (para jóvenes)",
    questions: [
      { objective: "O1", q: "IA quiere decir:", options: ["Internet automático", "Inteligencia artificial", "Información avanzada", "Instalador de aplicaciones"], answer: 1, why: "IA es la abreviatura de inteligencia artificial." },
      { objective: "O1", q: "¿Qué es cierto sobre la IA?", options: ["Tiene sentimientos", "Siempre tiene razón", "Está viva", "Encuentra patrones y hace su mejor intento de adivinar"], answer: 3, why: "La IA adivina a partir de patrones; no está viva y se puede equivocar." },
      { objective: "O1", q: "¿Por qué la IA se puede equivocar aunque suene segura?", options: ["Es floja", "Te quiere engañar", "Los teléfonos son lentos", "Adivina a partir de patrones, sin entender de verdad"], answer: 3, why: "Predice a partir de patrones, así que una respuesta segura puede estar mal." },
      { objective: "O2", q: "El teclado de tu teléfono adivina tu siguiente palabra. Eso es:", options: ["Un virus", "La IA trabajando", "Un maestro", "Una contraseña"], answer: 1, why: "Adivinar la siguiente palabra es una función común de la IA." },
      { objective: "O2", q: "¿Cuál es un ejemplo de IA generativa?", options: ["Una calculadora", "Un apagador de luz", "Un asistente de chat que escribe una historia", "Un mapa de papel"], answer: 2, why: "La IA generativa crea textos, imágenes o sonidos nuevos." },
      { objective: "O2", q: "Una aplicación de videos muestra \"Porque viste...\". Eso es:", options: ["Una recomendación hecha por IA", "Un mensaje de texto", "Una regla de la escuela", "Un control de videojuego"], answer: 0, why: "Sugiere videos a partir de lo que elegiste antes." },
      { objective: "O3", q: "¿Dónde debes buscar la regla de edad de una herramienta de IA?", options: ["En lo que adivine un amigo", "En la página propia de ayuda o de términos de la herramienta", "En un anuncio emergente", "En ningún lado, no hay"], answer: 1, why: "Las páginas de la propia empresa dan la regla actual." },
      { objective: "O3", q: "¿Qué dice la página de ayuda de Google sobre usar Gemini con una cuenta personal o de la escuela?", options: ["Cualquier edad está bien", "Debes tener 21 años", "Solo los maestros la pueden usar", "Debes tener 13 años o más, o la edad que aplique en tu país"], answer: 3, why: "La página de ayuda de Google pide 13 años o más, o la edad local." },
      { objective: "O3", q: "Antes de registrarte en una aplicación nueva debes:", options: ["Hablar con tu madre, padre o tutor", "Usar una fecha de nacimiento falsa", "Compartir tu contraseña con un amigo", "Hacer clic en todos los anuncios"], answer: 0, why: "Tu madre, padre o tutor debe saber de las cuentas nuevas." },
      { objective: "O3", q: "Usar la IA para escribir un trabajo que tu maestro dijo que escribieras tú es:", options: ["Está bien si nadie se da cuenta", "Obligatorio", "Romper las reglas, y puede contar como hacer trampa", "Un buen hábito de estudio"], answer: 2, why: "Las reglas de la escuela deciden cómo se puede usar la IA; romperlas es deshonesto." },
      { objective: "O4", q: "¿Qué es una instrucción?", options: ["Un control de videojuego", "Un tipo de contraseña", "Lo que escribes o dices a un asistente de IA", "Una tienda de aplicaciones"], answer: 2, why: "Una instrucción es tu pedido a la IA." },
      { objective: "O4", q: "¿Qué parte hace más clara una instrucción?", options: ["Decir cómo quieres la respuesta, como en 5 pasos cortos", "Escribir una sola palabra", "Agregar tu dirección", "Escribir todo en mayúsculas"], answer: 0, why: "Decir el formato ayuda a la IA a dar una respuesta útil." },
      { objective: "O4", q: "Una instrucción débil como \"ciclo del agua\" normalmente consigue:", options: ["Una respuesta perfecta", "Nunca una respuesta", "Un virus", "Una respuesta larga y general"], answer: 3, why: "La IA tiene que adivinar, así que la respuesta es general." },
      { objective: "O5", q: "¿Qué fuente es la más confiable para comprobar un dato de ciencias?", options: ["Un comentario cualquiera en internet", "Una agencia de ciencia o tu libro de texto", "Un meme", "Un anuncio emergente"], answer: 1, why: "Los libros de texto y los sitios oficiales de ciencia son confiables." },
      { objective: "O5", q: "La IA y tu libro de texto no coinciden. Debes:", options: ["Confiar en el libro de texto o en la fuente confiable", "Confiar en la IA", "Echar una moneda al aire", "Usar las dos respuestas"], answer: 0, why: "Una fuente confiable vale más que una respuesta de la IA sin comprobar." },
      { objective: "O5", q: "¿Qué datos necesitan más comprobación?", options: ["Tu propia opinión", "Un chiste que pediste", "Fechas, números y nombres", "Un poema que pediste"], answer: 2, why: "En datos como fechas y números es donde la IA suele fallar." },
      { objective: "O6", q: "¿Cuál es información privada que debes dejar fuera de la IA?", options: ["\"Explica las fracciones\"", "Tu contraseña", "\"Hazlo más corto\"", "Un color favorito"], answer: 1, why: "Las contraseñas nunca se deben compartir." },
      { objective: "O6", q: "Un deepfake es:", options: ["Una alberca muy honda", "Un tipo de juego", "Una guía de estudio", "Una foto, voz o video falso hecho con IA"], answer: 3, why: "Los deepfakes son falsificaciones hechas con IA que parecen reales." },
      { objective: "O6", q: "La IA da una respuesta que suena injusta con un grupo de personas. Debes:", options: ["Compartirla", "Creerla", "No volver a usar nunca la IA", "Cuestionarla, porque la IA puede repetir estereotipos"], answer: 3, why: "La IA puede tener sesgos por lo que aprendió." },
      { objective: "O6", q: "Si alguien hace con IA una falsificación tuya que te lastima, el mejor paso es:", options: ["Guardarlo en secreto", "Decírselo a un adulto de confianza", "Hacerle una a esa persona", "Compartirla más"], answer: 1, why: "Un adulto de confianza puede ayudar a denunciarlo y detenerlo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Qué es la IA",
        objective: "O1",
        notYet: "Falta la explicación, está mal o es demasiado difícil para un estudiante más pequeño.",
        meets: "Dos frases claras que dicen qué es la IA y que puede equivocarse.",
        exceeds: "Además dice cómo aprende la IA de ejemplos, con palabras que entendería un niño de diez años."
      },
      {
        name: "La IA en mis aplicaciones",
        objective: "O2",
        notYet: "Menos de tres aplicaciones, o ninguna línea sobre lo que hace la IA.",
        meets: "Tres aplicaciones, cada una con una línea sobre lo que hace la IA.",
        exceeds: "Además señala cuál es IA generativa."
      },
      {
        name: "Pregunta clara",
        objective: "O4",
        notYet: "La instrucción tiene una o dos palabras.",
        meets: "La instrucción dice lo que quieres, un poco de contexto y cómo quieres la respuesta.",
        exceeds: "La respuesta fue útil a la primera, o una pregunta de seguimiento la mejoró."
      },
      {
        name: "Respuesta comprobada",
        objective: "O5",
        notYet: "Se usó la respuesta sin comprobarla.",
        meets: "Por lo menos un dato comprobado en una fuente confiable, y se nombra la fuente.",
        exceeds: "Dos datos comprobados en dos fuentes, con una nota sobre lo que la IA dijo mal."
      },
      {
        name: "Seguro y permitido",
        objective: "O6",
        notYet: "La explicación tiene datos privados, o la herramienta se usó contra su regla de edad o las reglas de la escuela.",
        meets: "Nada de información privada, y la herramienta usada cumple su regla de edad y las reglas de la escuela.",
        exceeds: "Agrega un consejo para el lector más pequeño sobre cómo cuidarse con la IA."
      }
    ]
  },
  evaluation: {
    results: [
      "Jóvenes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Jóvenes que empiezan otro curso juvenil de Koach Learn dentro de 30 días",
      "Jóvenes que dicen en la encuesta de seguimiento a los 30 días que comprueban las respuestas de la IA para sus tareas escolares",
      "Maestros o programas juveniles que informan menos problemas con las reglas de IA entre sus estudiantes"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora de la escuela con internet",
      "Un asistente de IA gratuito que la persona tenga edad y permiso para usar, como una herramienta aprobada por la escuela",
      "Papel o un documento para la explicación de una página",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Revisa las reglas de edad de cualquier herramienta de IA antes de la clase, y usa cuentas aprobadas por la escuela donde las haya.",
      "Comparte al inicio las reglas de IA de tu escuela o programa para que los jóvenes sepan qué se permite.",
      "Nunca pidas a los jóvenes escribir datos privados ni subir fotos de personas reales.",
      "Quienes no tengan la edad mínima pueden hacer las tareas en papel o con un maestro que muestre la herramienta.",
      "Pide que compartan su explicación con un estudiante más pequeño o un compañero y califícala con la rúbrica."
    ]
  }
};

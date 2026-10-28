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
  chapters: [
    {
      name: "Capítulo 1: Qué es la IA y dónde te la encuentras",
      lessons: [
        {
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
          youCanNow: "explicar en dos frases sencillas qué es la IA y qué no es."
        },
        {
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
          youCanNow: "encontrar la IA en las aplicaciones de todos los días y decir qué está haciendo."
        },
        {
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
          youCanNow: "revisar la regla de edad de una herramienta de IA y las reglas de IA de tu escuela, e incluir a tu madre, padre o tutor antes de registrarte."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué es la IA y dónde te la encuentras",
        questions: [
          { q: "¿Qué frase describe mejor la IA?", options: ["Un robot que tiene sentimientos", "Programas de computadora que hacen tareas que normalmente necesitan el pensamiento humano", "Un tipo de cargador de teléfono", "Un sitio web que siempre tiene razón"], answer: 1, why: "La IA son programas que hacen tareas de pensar, como reconocer, sugerir y escribir." },
          { q: "¿Cómo aprende la mayoría de la IA?", options: ["Yendo a la escuela", "Leyendo tu mente", "Nunca aprende", "Estudiando muchísimos ejemplos y encontrando patrones"], answer: 3, why: "La IA encuentra patrones en grandes conjuntos de ejemplos y los usa para adivinar." },
          { q: "Tu aplicación de música te sugiere una canción nueva que te podría gustar. Esto es:", options: ["La IA haciendo una recomendación", "Un virus", "Una regla del maestro", "Una llamada telefónica"], answer: 0, why: "Las sugerencias basadas en lo que elegiste antes son un uso común de la IA." },
          { q: "Quieres probar una aplicación de IA nueva. ¿Qué debes hacer primero?", options: ["Registrarte con cualquier fecha de nacimiento", "Darle tu contraseña de la escuela", "Revisar su regla de edad y mostrársela a tu madre, padre o tutor", "Descargarla desde un anuncio emergente"], answer: 2, why: "Las reglas de edad y el permiso de tu madre, padre o tutor van antes de registrarte." },
          { q: "Tu maestro dice que la IA está bien para buscar ideas pero no para escribir tu ensayo. Tú:", options: ["Haces que la IA escriba el ensayo de todos modos", "No haces caso a la regla", "Usas la IA solo para ideas y luego escribes tú el ensayo", "Copias el ensayo de un amigo"], answer: 2, why: "Seguir la regla de tu maestro mantiene honesto tu trabajo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar un asistente de IA de forma inteligente",
      lessons: [
        {
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
          youCanNow: "escribir una instrucción clara de tres partes."
        },
        {
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
          youCanNow: "encontrar los datos que hay que comprobar y comprobarlos en una fuente confiable."
        },
        {
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
          youCanNow: "usar la IA de forma segura y justa, y explicarle la IA a otra persona."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar un asistente de IA de forma inteligente",
        questions: [
          { q: "¿Qué instrucción es la más clara?", options: ["\"Estoy en noveno grado. Explica el ciclo del agua en 5 pasos cortos con un ejemplo.\"", "\"ciencias\"", "\"ayuda\"", "\"dime cosas\""], answer: 0, why: "Dice lo que quieres, da contexto y dice cómo quieres la respuesta." },
          { q: "¿Qué es una \"alucinación\" de la IA?", options: ["Un nivel de un videojuego", "Un tipo de pantalla de teléfono", "Una regla de la escuela", "Cuando la IA inventa algo que suena cierto"], answer: 3, why: "Una alucinación es una respuesta inventada que suena real." },
          { q: "La IA te da una fecha para un proyecto de historia. Debes:", options: ["Copiarla de inmediato", "Comprobarla en tu libro de texto u otra fuente confiable", "Preguntarle otra vez a la IA y creer la segunda respuesta", "No poner la fecha"], answer: 1, why: "Los datos importantes se comprueban en una fuente confiable." },
          { q: "¿Qué NO debes escribir en un asistente de IA?", options: ["Tu dirección y tu horario de la escuela", "\"Explica la fotosíntesis de forma sencilla\"", "\"Dame 3 ideas para un cartel del club\"", "\"Hazlo más corto\""], answer: 0, why: "La dirección y el horario son información privada." },
          { q: "Un compañero hizo con IA una foto falsa de otro estudiante. ¿Qué debes hacer?", options: ["Compartirla", "Hacer otra", "Decírselo a un adulto de confianza", "Escribir un comentario"], answer: 2, why: "Los deepfakes de personas reales las pueden lastimar; un adulto de confianza puede ayudar a detenerlo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: ¿Qué es la IA? (para jóvenes)",
    questions: [
      { q: "IA quiere decir:", options: ["Internet automático", "Inteligencia artificial", "Información avanzada", "Instalador de aplicaciones"], answer: 1, why: "IA es la abreviatura de inteligencia artificial." },
      { q: "¿Qué es cierto sobre la IA?", options: ["Tiene sentimientos", "Siempre tiene razón", "Está viva", "Encuentra patrones y hace su mejor intento de adivinar"], answer: 3, why: "La IA adivina a partir de patrones; no está viva y se puede equivocar." },
      { q: "¿Por qué la IA se puede equivocar aunque suene segura?", options: ["Es floja", "Te quiere engañar", "Los teléfonos son lentos", "Adivina a partir de patrones, sin entender de verdad"], answer: 3, why: "Predice a partir de patrones, así que una respuesta segura puede estar mal." },
      { q: "El teclado de tu teléfono adivina tu siguiente palabra. Eso es:", options: ["Un virus", "La IA trabajando", "Un maestro", "Una contraseña"], answer: 1, why: "Adivinar la siguiente palabra es una función común de la IA." },
      { q: "¿Cuál es un ejemplo de IA generativa?", options: ["Una calculadora", "Un apagador de luz", "Un asistente de chat que escribe una historia", "Un mapa de papel"], answer: 2, why: "La IA generativa crea textos, imágenes o sonidos nuevos." },
      { q: "Una aplicación de videos muestra \"Porque viste...\". Eso es:", options: ["Una recomendación hecha por IA", "Un mensaje de texto", "Una regla de la escuela", "Un control de videojuego"], answer: 0, why: "Sugiere videos a partir de lo que elegiste antes." },
      { q: "¿Dónde debes buscar la regla de edad de una herramienta de IA?", options: ["En lo que adivine un amigo", "En la página propia de ayuda o de términos de la herramienta", "En un anuncio emergente", "En ningún lado, no hay"], answer: 1, why: "Las páginas de la propia empresa dan la regla actual." },
      { q: "¿Qué dice la página de ayuda de Google sobre usar Gemini con una cuenta personal o de la escuela?", options: ["Cualquier edad está bien", "Debes tener 21 años", "Solo los maestros la pueden usar", "Debes tener 13 años o más, o la edad que aplique en tu país"], answer: 3, why: "La página de ayuda de Google pide 13 años o más, o la edad local." },
      { q: "Antes de registrarte en una aplicación nueva debes:", options: ["Hablar con tu madre, padre o tutor", "Usar una fecha de nacimiento falsa", "Compartir tu contraseña con un amigo", "Hacer clic en todos los anuncios"], answer: 0, why: "Tu madre, padre o tutor debe saber de las cuentas nuevas." },
      { q: "Usar la IA para escribir un trabajo que tu maestro dijo que escribieras tú es:", options: ["Está bien si nadie se da cuenta", "Obligatorio", "Romper las reglas, y puede contar como hacer trampa", "Un buen hábito de estudio"], answer: 2, why: "Las reglas de la escuela deciden cómo se puede usar la IA; romperlas es deshonesto." },
      { q: "¿Qué es una instrucción?", options: ["Un control de videojuego", "Un tipo de contraseña", "Lo que escribes o dices a un asistente de IA", "Una tienda de aplicaciones"], answer: 2, why: "Una instrucción es tu pedido a la IA." },
      { q: "¿Qué parte hace más clara una instrucción?", options: ["Decir cómo quieres la respuesta, como en 5 pasos cortos", "Escribir una sola palabra", "Agregar tu dirección", "Escribir todo en mayúsculas"], answer: 0, why: "Decir el formato ayuda a la IA a dar una respuesta útil." },
      { q: "Una instrucción débil como \"ciclo del agua\" normalmente consigue:", options: ["Una respuesta perfecta", "Nunca una respuesta", "Un virus", "Una respuesta larga y general"], answer: 3, why: "La IA tiene que adivinar, así que la respuesta es general." },
      { q: "¿Qué fuente es la más confiable para comprobar un dato de ciencias?", options: ["Un comentario cualquiera en internet", "Una agencia de ciencia o tu libro de texto", "Un meme", "Un anuncio emergente"], answer: 1, why: "Los libros de texto y los sitios oficiales de ciencia son confiables." },
      { q: "La IA y tu libro de texto no coinciden. Debes:", options: ["Confiar en el libro de texto o en la fuente confiable", "Confiar en la IA", "Echar una moneda al aire", "Usar las dos respuestas"], answer: 0, why: "Una fuente confiable vale más que una respuesta de la IA sin comprobar." },
      { q: "¿Qué datos necesitan más comprobación?", options: ["Tu propia opinión", "Un chiste que pediste", "Fechas, números y nombres", "Un poema que pediste"], answer: 2, why: "En datos como fechas y números es donde la IA suele fallar." },
      { q: "¿Cuál es información privada que debes dejar fuera de la IA?", options: ["\"Explica las fracciones\"", "Tu contraseña", "\"Hazlo más corto\"", "Un color favorito"], answer: 1, why: "Las contraseñas nunca se deben compartir." },
      { q: "Un deepfake es:", options: ["Una alberca muy honda", "Un tipo de juego", "Una guía de estudio", "Una foto, voz o video falso hecho con IA"], answer: 3, why: "Los deepfakes son falsificaciones hechas con IA que parecen reales." },
      { q: "La IA da una respuesta que suena injusta con un grupo de personas. Debes:", options: ["Compartirla", "Creerla", "No volver a usar nunca la IA", "Cuestionarla, porque la IA puede repetir estereotipos"], answer: 3, why: "La IA puede tener sesgos por lo que aprendió." },
      { q: "Si alguien hace con IA una falsificación tuya que te lastima, el mejor paso es:", options: ["Guardarlo en secreto", "Decírselo a un adulto de confianza", "Hacerle una a esa persona", "Compartirla más"], answer: 1, why: "Un adulto de confianza puede ayudar a denunciarlo y detenerlo." }
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-seo-website-ai.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "athletes-seo-website-ai-es",
  lang: "es",
  translationOf: "athletes-seo-website-ai",
  category: "Athletes",
  name: "SEO y cómo crear tu sitio web con IA",
  skills: "Planear un sitio web de una página para deportistas, Escribir el texto de la página con IA, Crear un sitio gratis en Google Sites, SEO básico: títulos, encabezados, descripciones y texto alternativo, Revisar tu sitio en Google",
  outcome: "crear y publicar gratis un sitio web de una página para deportistas con Google Sites, escrito con ayuda de la IA, con un título claro, encabezados, texto alternativo en las imágenes y una forma de contacto, para que los entrenadores y las marcas puedan encontrarte y entenderte.",
  about: [
    "Este curso es para deportistas que quieren un lugar en internet que ellos controlen, donde los entrenadores, los reclutadores, las marcas y los aficionados puedan ver quiénes son, y para los entrenadores que los ayudan.",
    "Las redes sociales cambian y pueden ser ruidosas. Un sitio web sencillo te da una página limpia con tu historia, tus estadísticas, tus jugadas destacadas y cómo contactarte. El SEO (siglas en inglés de optimización para motores de búsqueda) ayuda a que la gente lo encuentre en Google.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Vas a planear, escribir, crear y publicar gratis un sitio de una página. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Publica en Google Sites un sitio web de una página para deportistas con: un título de página que incluya tu nombre y tu deporte, una sección Sobre mí escrita con IA y editada por ti, una sección de estadísticas y jugadas destacadas, una forma de contacto que no muestre tus datos privados, texto alternativo en las imágenes y un enlace al sitio desde uno de tus perfiles de redes sociales. Luego busca en Google tu nombre y tu deporte y anota lo que aparece.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria, universidad y de los primeros años de carrera que quieren un lugar en internet que ellos controlen, donde entrenadores, reclutadores, marcas y aficionados vean quiénes son, y entrenadores que los ayudan.",
    startingPoint: "Usan redes sociales y un teléfono todos los días y quizá tienen un perfil de reclutamiento o un video de jugadas destacadas. Pocos han hecho un sitio web, y la mayoría nunca ha oído hablar del título de la página, el texto alternativo u otras bases del SEO.",
    gap: "A los entrenadores y las marcas les cuesta leer los perfiles de redes sociales, y esos perfiles pueden cambiar o desaparecer. Un sitio sencillo y seguro que los buscadores entienden les da a los deportistas una página clara que ayuda a las personas correctas a encontrarlos y contactarlos.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Una computadora o un teléfono, una cuenta gratuita de Google, Google Sites y un asistente de IA gratuito",
      "Unos 60 minutos en total",
      "Ningún dato privado en la página; los deportistas menores de 18 años ponen como contacto a su madre, padre o entrenador",
      "Las reglas de permiso de fotos y de logotipos de la escuela; los resultados de búsqueda pueden tardar en aparecer"
    ],
    prerequisites: "Ninguno. \"Marca personal en redes sociales para deportistas\" te ayuda a escribir primero tu frase de marca."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Antes de crear tu sitio", action: "elegir tu público principal y anotar lo que necesita en cuatro secciones", standard: "con Sobre mí, Estadísticas o Servicios, Jugadas destacadas y Contacto pensados para ese público" },
    { id: "O2", condition: "Usando tus datos verdaderos y un asistente de IA", action: "escribir una sección Sobre mí y elegir una forma de contacto segura", standard: "con cada dato revisado, nada falso, tu propia voz y sin tu dirección, tu número de teléfono, tu fecha de nacimiento completa ni tu horario" },
    { id: "O3", condition: "Para tu sitio de una página", action: "escribir un título de página, encabezados de sección, una descripción corta y texto alternativo para las imágenes que ayuden en las búsquedas", standard: "con tu nombre y tu deporte en el título, texto alternativo en cada imagen y sin llenar la página de palabras clave" },
    { id: "O4", condition: "Usando Google Sites", action: "crear un sitio de una página con cuatro secciones, fotos, un video de jugadas destacadas insertado y un botón de contacto", standard: "usando solo fotos que tienes permiso para usar y siguiendo las reglas de logotipos de tu escuela" },
    { id: "O5", condition: "Cuando tu sitio esté listo", action: "publicarlo, probarlo en un teléfono y compartir el enlace en tus biografías", standard: "con cada enlace, botón y video funcionando y el sitio revisado por un entrenador, tu madre o tu padre" },
    { id: "O6", condition: "Después de publicar", action: "planear una rutina de actualización y revisar cómo aparece tu sitio en las búsquedas", standard: "con un recordatorio para actualizar después de cada temporada y una nota de lo que aparece cuando buscas tu nombre y tu deporte" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear y escribir tu sitio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Por qué un deportista necesita un sitio web sencillo",
          minutes: 4,
          goal: "Decidir para quién es tu sitio y qué debe mostrar.",
          text: [
            "Un sitio web es una página que tú controlas. Las redes sociales pueden cambiar sus reglas o hacerte perder tu cuenta; tu sitio sigue igual. Además, a un entrenador o a una marca le resulta más fácil leerlo que desplazarse por un perfil.",
            "Decide para quién es. Un sitio para el reclutamiento necesita estadísticas, información académica, jugadas destacadas y referencias de entrenadores. Un sitio pensado para marcas necesita tu público, tus colaboraciones anteriores y tu kit de prensa. Un sitio de entrenamiento o de campamentos necesita tus servicios, tu horario y la inscripción.",
            "Al principio mantenlo en una sola página, con secciones: Sobre mí, Estadísticas o Servicios, Jugadas destacadas y Contacto."
          ],
          steps: ["Elige tu público principal: entrenadores, marcas o clientes.", "Haz una lista de lo que necesitan ver.", "Agrúpalo en cuatro secciones: Sobre mí, Estadísticas o Servicios, Jugadas destacadas, Contacto."],
          words: [["Sitio web", "páginas en internet en una dirección que compartes, como un enlace."], ["Sección", "una parte de una página, con su propio encabezado."]],
          slides: [
            { title: "Por qué un sitio web", bullets: ["Una página que tú controlas", "Más fácil de leer que un perfil de redes"] },
            { title: "¿Para quién es?", bullets: ["Entrenadores: estadísticas, estudios, jugadas destacadas", "Marcas: público, colaboraciones", "Clientes: servicios e inscripción"] },
            { title: "Empieza con una página", bullets: ["Sobre mí", "Estadísticas o Servicios", "Jugadas destacadas", "Contacto"] }
          ],
          tryIt: "Escribe el público principal de tu sitio y haz la lista de lo que necesita ver debajo de los cuatro encabezados de sección.",
          youCanNow: "planear un sitio de una página para deportistas pensado para un público claro.",
          quickCheck: [
            { objective: "O1", q: "¿Qué debe mostrar el sitio de un deportista enfocado en las marcas?", options: ["Solo tu horario de clases", "Tu público, tus colaboraciones anteriores y tu kit de prensa", "Tu dirección", "Todos los marcadores desde que eras niño"], answer: 1, why: "Las marcas quieren ver tu público, tus colaboraciones y tu kit de prensa." },
            { objective: "O1", q: "Diriges un campamento de habilidades para jóvenes y quieres un sitio para él. ¿Qué secciones encajan?", options: ["Sobre mí, Servicios, Jugadas destacadas y Contacto con inscripción", "Solo una galería de fotos", "Solo tus estadísticas", "Una lista de rivales"], answer: 0, why: "El sitio de un entrenador o de un campamento necesita servicios, horario e inscripción." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir tu página con IA",
          minutes: 5,
          goal: "Usar un asistente de IA para hacer el borrador de tu sección Sobre mí y del texto de las secciones, y luego editarlo.",
          text: [
            "Dale a un asistente de IA tus datos y pídele un borrador: “Me gradúo en 2027, juego de atacante externa en voleibol, mido 1.85 m (6'1\"), tengo un promedio de 3.6 (GPA, el promedio de calificaciones en Estados Unidos), soy capitana del equipo y quiero estudiar ingeniería. Escribe una sección Sobre mí de 100 palabras para mi sitio de reclutamiento, en primera persona, amable y segura.”",
            "Revisa cada dato. La IA puede agregar cosas que no son ciertas, como premios que no ganaste. Quita todo lo que no puedas demostrar y escríbelo con tus propias palabras.",
            "Deja los datos privados fuera de la página: nada de dirección, número de teléfono, fecha de nacimiento completa ni horario de clases. Para el contacto, usa un correo aparte que hayas creado para el deporte, o un formulario de contacto, y si eres menor de edad, pon también a un padre, una madre o un entrenador como contacto."
          ],
          steps: ["Haz una lista de tus datos reales.", "Pídele a la IA el borrador de una sección Sobre mí corta.", "Revisa cada dato y quita todo lo que no sea cierto.", "Reescríbelo con tu propia voz.", "Decide una forma de contacto segura."],
          words: [["Primera persona", "escribir con “yo” y “mi”."], ["Formulario de contacto", "un cuadro en un sitio donde los visitantes te envían un mensaje sin ver tu correo."]],
          slides: [
            { title: "Dale a la IA tus datos", bullets: ["Año de graduación, posición, estatura", "Calificaciones, liderazgo, metas", "Pide 100 palabras, en primera persona"] },
            { title: "Revisa cada dato", bullets: ["La IA puede inventar premios", "Quita lo que no puedas demostrar", "Usa tu propia voz"] },
            { title: "Contacto seguro", bullets: ["Correo aparte para el deporte o un formulario", "Nada de dirección, teléfono ni fecha de nacimiento", "Menores: pon también a un padre o un entrenador"] }
          ],
          tryIt: "Usa un asistente de IA para hacer el borrador de tu sección Sobre mí. Revisa cada dato, edítalo con tu voz y crea un correo aparte para el deporte si no tienes uno.",
          youCanNow: "escribir con ayuda de la IA un texto exacto para tu sitio web y elegir una forma de contacto segura.",
          quickCheck: [
            { objective: "O2", q: "¿Qué dato no debe estar en tu sitio?", options: ["Tu deporte y tu posición", "Tu año de graduación", "Tu dirección", "El enlace a tus jugadas destacadas"], answer: 2, why: "No pongas en la página tu dirección, tu número de teléfono, tu fecha de nacimiento completa ni tu horario." },
            { objective: "O2", q: "El borrador de la IA dice que estuviste en el equipo ideal del estado, pero no es cierto. ¿Qué haces?", options: ["Dejarlo; nadie lo revisa", "Cambiarlo a \"casi en el equipo ideal del estado\"", "Pedirle a la IA que agregue más premios", "Quitarlo y escribir solo datos verdaderos"], answer: 3, why: "Revisa cada dato y quita todo lo que no puedas demostrar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "SEO básico: ayudar a Google a entender tu página",
          minutes: 5,
          goal: "Escribir un título de página, encabezados, una descripción corta y texto alternativo para las imágenes que ayuden en las búsquedas.",
          text: [
            "El SEO, u optimización para motores de búsqueda, significa hacer que tu página sea fácil de entender para buscadores como Google, para que la encuentren las personas indicadas.",
            "La propia Guía de introducción al SEO de Google recomienda algunas cosas básicas: un título de página claro y único (por ejemplo “Jordan Lee | Atacante externa de voleibol, promoción 2027”), encabezados que organicen la página, texto útil y actualizado escrito para personas, una descripción corta de la página y un texto alternativo corto y descriptivo en las imágenes.",
            "Escribe primero para las personas. No llenes la página de palabras clave; usa las palabras que escribiría un entrenador o una marca, como tu nombre, tu deporte, tu posición, tu año de graduación y tu ciudad o región."
          ],
          steps: ["Escribe un título de página con tu nombre, tu deporte y tu posición o servicio.", "Usa encabezados para cada sección.", "Escribe una descripción de la página de una o dos frases.", "Agrega un texto alternativo corto a cada imagen.", "Usa las palabras que buscaría tu público."],
          words: [["SEO", "siglas en inglés de optimización para motores de búsqueda: ayudar a los buscadores a entender tu página para que la gente la encuentre."], ["Texto alternativo", "una descripción escrita y corta de una imagen, que usan los buscadores y los lectores de pantalla."], ["Palabra clave", "una palabra o frase que la gente escribe en un buscador."]],
          slides: [
            { title: "El SEO en una línea", bullets: ["Ayudar a Google a entender tu página", "Para que la encuentren las personas indicadas"] },
            { title: "Lo básico según Google", bullets: ["Título de página claro y único", "Encabezados para cada sección", "Descripción corta y texto útil", "Texto alternativo en las imágenes"] },
            { title: "Escribe para personas", bullets: ["Nombre, deporte, posición, año de graduación, región", "Sin llenar la página de palabras clave"] }
          ],
          sources: [{ name: "Google Search Central: Guía de introducción al SEO", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Escribe tu título de página, los cuatro encabezados de sección, una descripción de la página de una frase y el texto alternativo de dos fotos que piensas usar.",
          youCanNow: "escribir un título de página, encabezados, una descripción y texto alternativo que ayuden a la gente a encontrar tu página.",
          quickCheck: [
            { objective: "O3", q: "¿Para qué sirve el SEO?", options: ["Para que los buscadores entiendan tu página y la encuentren las personas correctas", "Para que tu página cargue las fotos más rápido", "Para esconder tu página de Google", "Para pagar anuncios"], answer: 0, why: "SEO significa hacer que los buscadores entiendan fácilmente tu página." },
            { objective: "O3", q: "Vas a agregar una foto tuya en una carrera de vallas. ¿Qué texto alternativo escribes?", options: ["\"IMG_4432\"", "\"foto\"", "\"Sam Ortiz pasando una valla en la competencia del condado\"", "\"vallas vallas vallas atletismo atletismo\""], answer: 2, why: "El texto alternativo es una línea corta que describe la imagen, sin amontonar palabras clave." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear y escribir tu sitio",
        questions: [
          { objective: "O1", q: "¿Por qué tener tu propio sitio web?", options: ["Las redes sociales son ilegales", "Los entrenadores solo leen papel", "Es una página que tú controlas y que es fácil de leer", "Reemplaza el entrenamiento"], answer: 2, why: "Tu sitio sigue igual y es fácil de recorrer para entrenadores y marcas." },
          { objective: "O2", q: "La IA agrega a tu sección Sobre mí un premio que no ganaste. ¿Qué haces?", options: ["Lo quitas", "Lo dejas", "Agregas más premios", "Lo escondes en letra pequeña"], answer: 0, why: "Incluye solo datos ciertos que puedas demostrar." },
          { objective: "O2", q: "¿Cuál es una forma de contacto segura para un menor de edad?", options: ["El teléfono de su casa", "La dirección de su casa", "Su horario de clases", "Un correo para el deporte o un formulario, más el contacto de un padre o un entrenador"], answer: 3, why: "Deja que la gente te contacte sin mostrar datos privados." },
          { objective: "O3", q: "¿Cuál es un buen título de página?", options: ["“Inicio”", "“Jordan Lee | Atacante externa de voleibol, promoción 2027”", "“¡¡¡Bienvenidos!!!”", "“Página 1”"], answer: 1, why: "Les dice a las personas y a Google exactamente qué es la página." },
          { objective: "O3", q: "¿Qué es el texto alternativo?", options: ["Una contraseña secreta", "Una descripción corta de una imagen", "Un segundo sitio web", "Un hashtag"], answer: 1, why: "El texto alternativo describe las imágenes para los buscadores y los lectores de pantalla." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crear y publicar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Crear tu página en Google Sites",
          minutes: 6,
          goal: "Crear tu sitio de una página en Google Sites.",
          text: [
            "Google Sites es una herramienta gratuita de Google para crear sitios web. Necesitas una cuenta de Google. Abre sites.google.com, empieza un sitio en blanco o una plantilla y agrega tus secciones.",
            "Usa la herramienta para agregar cuadros de texto, imágenes, encabezados y botones, y para insertar un video de jugadas destacadas de YouTube. Elige un tema sencillo con los colores de tu equipo y texto fácil de leer. Usa solo fotos que tomaste tú o que tienes permiso para usar, y respeta las reglas de tu escuela sobre los logotipos.",
            "Mantenlo limpio: una página, cuatro secciones, texto grande y fácil de leer, y un botón claro para contactarte o ver tus jugadas destacadas."
          ],
          steps: ["Entra a sites.google.com e inicia sesión.", "Empieza un sitio en blanco o una plantilla.", "Agrega el título de tu página y las cuatro secciones con encabezados.", "Pega tu texto editado.", "Agrega fotos con texto alternativo e inserta tu video de jugadas destacadas.", "Agrega un botón de contacto o un enlace a un formulario."],
          words: [["Plantilla", "un diseño ya hecho que completas."], ["Insertar", "mostrar dentro de tu página un video o un elemento de otro sitio."]],
          slides: [
            { title: "Google Sites", bullets: ["Herramienta gratuita para crear sitios web", "Necesitas una cuenta de Google", "sites.google.com"] },
            { title: "Agrega tu contenido", bullets: ["Título y cuatro secciones", "Fotos con texto alternativo", "Video de jugadas destacadas insertado"] },
            { title: "Mantenlo limpio", bullets: ["Texto fácil de leer, colores del equipo", "Un botón claro", "Tus fotos; respeta las reglas de logotipos"] }
          ],
          tryIt: "Crea tu página en Google Sites con tu título, las cuatro secciones, al menos una foto con texto alternativo y tu video de jugadas destacadas o un espacio reservado para él.",
          youCanNow: "crear en Google Sites un sitio web limpio de una página para deportistas.",
          quickCheck: [
            { objective: "O4", q: "¿Adónde vas para empezar una página de Google Sites?", options: ["sites.google.com", "El sitio web de tu escuela", "Una aplicación de redes sociales", "Search Console"], answer: 0, why: "Abre sites.google.com e inicia sesión con una cuenta de Google." },
            { objective: "O4", q: "Quieres tu video de jugadas destacadas en tu sitio. ¿Qué haces?", options: ["Pegar una captura de pantalla del video", "Describirlo solo con palabras", "Enviarlo por correo a los visitantes", "Insertar tu video de YouTube en la página"], answer: 3, why: "Google Sites puede insertar un video de jugadas destacadas de YouTube." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Publicar y revisar tu sitio",
          minutes: 5,
          goal: "Publicar tu sitio, probarlo en un teléfono y compartir el enlace.",
          text: [
            "Cuando tu página esté lista, usa el botón de publicar y elige la dirección web de tu sitio. Elige una dirección corta con tu nombre y tu deporte.",
            "Pruébalo en un teléfono, porque la mayoría de los entrenadores y aficionados lo van a abrir ahí. Comprueba que todos los enlaces y botones funcionen, que el video se reproduzca y que el texto sea fácil de leer. Pídele también a un entrenador o a tu padre o madre que lo mire.",
            "Comparte el enlace en las biografías de tus redes sociales, en la firma de tu correo y en tus perfiles de reclutamiento. Si cambias tus datos de contacto, actualiza el sitio de inmediato."
          ],
          steps: ["Haz clic en publicar y elige una dirección web corta.", "Ábrelo en un teléfono.", "Prueba cada enlace, botón y video.", "Pídele a un entrenador o a tu padre o madre que lo revise.", "Agrega el enlace a tus biografías y a la firma de tu correo."],
          words: [["Publicar", "poner tu sitio en línea en internet."], ["URL", "una dirección web, como el enlace que compartes."]],
          slides: [
            { title: "Publica", bullets: ["Elige una dirección corta con tu nombre y tu deporte"] },
            { title: "Pruébalo en un teléfono", bullets: ["¿Funcionan los enlaces y botones?", "¿Se reproduce el video?", "¿El texto es fácil de leer?"] },
            { title: "Compártelo", bullets: ["Biografías de redes sociales", "Firma del correo", "Perfiles de reclutamiento"] }
          ],
          tryIt: "Publica tu sitio, pruébalo en un teléfono, pídele a un adulto que lo revise y agrega el enlace a uno de tus perfiles de redes sociales.",
          youCanNow: "publicar, probar y compartir tu sitio web de deportista.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace que una dirección web sea buena para tu sitio?", options: ["Una serie larga de números", "Que sea corta, con tu nombre y tu deporte", "Tu número de teléfono", "Solo el nombre de tu escuela"], answer: 1, why: "Elige una dirección corta con tu nombre y tu deporte." },
            { objective: "O5", q: "Cambiaste tu correo deportivo. ¿Qué haces con tu sitio?", options: ["Dejarlo así; nadie lo lee", "Borrar el sitio", "Actualizar de inmediato los datos de contacto", "Esperar hasta la próxima temporada"], answer: 2, why: "Si cambian tus datos de contacto, actualiza el sitio de inmediato." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mantenerlo actualizado y revisar las búsquedas",
          minutes: 5,
          goal: "Fijar una rutina de actualización y ver cómo aparece tu sitio en las búsquedas.",
          text: [
            "A los buscadores y a los visitantes les gustan las páginas actualizadas. Actualiza tus estadísticas, tus jugadas destacadas y tu calendario después de cada temporada o evento importante, y cambia la fecha en tu sección Sobre mí.",
            "Los sitios nuevos pueden tardar en aparecer en los resultados de búsqueda. Busca en Google tu nombre más tu deporte y mira lo que aparece. Google ofrece una herramienta gratuita llamada Search Console que los dueños de sitios pueden usar para ver cómo le va a su sitio en las búsquedas; la Guía de introducción al SEO la explica.",
            "Cada pocos meses, pregúntale a un asistente de IA: “Este es el texto de mi sitio web. Sugiere tres formas de hacerlo más claro para entrenadores universitarios.” Luego decide qué cambiar."
          ],
          steps: ["Pon un recordatorio para actualizarlo después de cada temporada.", "Busca tu nombre más tu deporte y anota lo que aparece.", "Lee sobre Search Console en la guía de Google.", "Pídele a la IA tres sugerencias de claridad y elige cuáles usar."],
          words: [["Search Console", "la herramienta gratuita de Google que les muestra a los dueños de sitios cómo aparece su sitio en la Búsqueda de Google."], ["Resultados de búsqueda", "la lista de páginas que muestra un buscador para una búsqueda."]],
          slides: [
            { title: "Mantente al día", bullets: ["Actualiza estadísticas y jugadas cada temporada", "Cambia las fechas en tu sección Sobre mí"] },
            { title: "Revisa las búsquedas", bullets: ["Los sitios nuevos pueden tardar en aparecer", "Busca tu nombre más tu deporte", "Search Console para dueños de sitios"] },
            { title: "Mejóralo con IA", bullets: ["Pide tres consejos de claridad", "Tú decides qué cambiar"] }
          ],
          sources: [{ name: "Google Search Central: Guía de introducción al SEO", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Tarea final: asegúrate de que tu sitio publicado tenga un título claro, una sección Sobre mí hecha con IA y editada por ti, estadísticas y jugadas destacadas, una forma de contacto segura, texto alternativo en las imágenes y un enlace a él desde una red social. Busca en Google tu nombre y tu deporte y anota lo que aparece.",
          youCanNow: "mantener tu sitio actualizado y revisar cómo aparece en las búsquedas.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es Google Search Console?", options: ["Una herramienta gratuita de Google que muestra cómo le va a tu sitio en las búsquedas", "Un servicio de anuncios pagados", "Un creador de sitios web", "Una aplicación de redes sociales"], answer: 0, why: "Search Console les deja a los dueños de sitios ver cómo le va a su sitio en las búsquedas." },
            { objective: "O6", q: "Tu temporada acaba de terminar. ¿Qué dice tu rutina de actualización?", options: ["Nada hasta que te gradúes", "Borrar solo las jugadas destacadas viejas", "Cambiar la dirección de tu sitio", "Actualizar tus estadísticas, tus jugadas destacadas y la fecha en tu sección Sobre mí"], answer: 3, why: "Actualiza después de cada temporada o evento importante para que la página siga al día." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crear y publicar",
        questions: [
          { objective: "O4", q: "¿Qué necesitas para usar Google Sites?", options: ["Un plan pago", "Un título en programación", "Un servidor", "Una cuenta de Google"], answer: 3, why: "Google Sites es gratis con una cuenta de Google." },
          { objective: "O4", q: "¿Qué fotos puedes poner en tu sitio?", options: ["Fotos que tomaste tú o que tienes permiso para usar", "Cualquier foto que encuentres en internet", "Fotos de otros deportistas", "Logotipos de la escuela sin preguntar"], answer: 0, why: "Usa solo fotos tuyas o que puedes usar." },
          { objective: "O5", q: "¿Por qué probar tu sitio en un teléfono?", options: ["Los teléfonos están prohibidos", "Se ve peor en las computadoras", "La mayoría de los visitantes lo van a abrir en un teléfono", "Por nada"], answer: 2, why: "Los entrenadores y los aficionados suelen abrir los enlaces en el teléfono." },
          { objective: "O6", q: "Tu sitio no aparece en Google el día que lo publicas. ¿Por qué puede ser?", options: ["Está roto para siempre", "Google prohíbe a los deportistas", "Tienes que pagar", "Los sitios nuevos pueden tardar en aparecer"], answer: 3, why: "Los buscadores necesitan tiempo para encontrar páginas nuevas." },
          { objective: "O6", q: "¿Cuándo debes actualizar tus estadísticas y jugadas destacadas?", options: ["Nunca", "Después de cada temporada o evento importante", "Una vez cada diez años", "Solo cuando un entrenador se queja"], answer: 1, why: "El contenido actualizado ayuda a los visitantes y a las búsquedas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: SEO y cómo crear tu sitio web con IA",
    questions: [
      { objective: "O3", q: "¿Qué significa SEO?", options: ["Social everyday output (producción social diaria)", "Sports event organizer (organizador de eventos deportivos)", "Search engine optimization (optimización para motores de búsqueda)", "Site editing online (edición de sitios en línea)"], answer: 2, why: "Significa ayudar a los buscadores a entender tu página." },
      { objective: "O1", q: "Un sitio para el reclutamiento debe mostrar:", options: ["Estadísticas, información académica, jugadas destacadas", "Tu dirección", "Tu contraseña", "Chismes de los rivales"], answer: 0, why: "Eso es lo que necesitan los entrenadores." },
      { objective: "O1", q: "¿Con cuántas páginas debes empezar?", options: ["Una", "Veinte", "Ninguna", "Cien"], answer: 0, why: "Una página clara alcanza para empezar." },
      { objective: "O1", q: "¿Qué sección ayuda a la gente a comunicarse contigo?", options: ["El dibujo del pie de página", "Los colores del tema", "Contacto", "Los tipos de letra"], answer: 2, why: "Contacto le dice a la gente cómo comunicarse contigo." },
      { objective: "O2", q: "Cuando la IA hace el borrador de tu sección Sobre mí, debes:", options: ["Publicarlo sin leerlo", "Revisar cada dato", "Agregar premios de más", "Hacerlo más largo"], answer: 1, why: "La IA puede inventar datos." },
      { objective: "O2", q: "¿Qué NO debe estar en tu sitio?", options: ["Tu posición", "Tu video de jugadas destacadas", "Tu año de graduación", "Tu fecha de nacimiento completa y tu dirección"], answer: 3, why: "Esos son datos privados." },
      { objective: "O2", q: "Un formulario de contacto le permite a la gente:", options: ["Ver tu contraseña", "Editar tu sitio", "Enviarte un mensaje sin ver tu correo", "Pagarte"], answer: 2, why: "Protege tu dirección de correo." },
      { objective: "O3", q: "¿Qué ayuda a Google a entender tu página?", options: ["Todo en mayúsculas", "Texto oculto", "Ninguna palabra", "Un título de página claro y encabezados"], answer: 3, why: "La guía de Google recomienda títulos y encabezados claros." },
      { objective: "O3", q: "Llenar la página de palabras clave significa:", options: ["Repetir palabras de búsqueda de forma poco natural", "Escribir para personas", "Agregar texto alternativo", "Usar encabezados"], answer: 0, why: "Escribe para personas, no amontones palabras clave." },
      { objective: "O3", q: "Un buen texto alternativo para una foto en acción es:", options: ["“IMG_2034”", "“Jordan Lee rematando en la semifinal estatal”", "“foto”", "Vacío"], answer: 1, why: "Corto y descriptivo." },
      { objective: "O3", q: "La descripción de una página debe ser:", options: ["Un ensayo completo", "Una lista de contraseñas", "Una o dos frases sobre la página", "Vacía"], answer: 2, why: "Las descripciones cortas pueden aparecer en los resultados de búsqueda." },
      { objective: "O4", q: "Google Sites es:", options: ["Una herramienta gratuita para crear sitios web", "Solo una aplicación paga", "Una red social", "Un videojuego"], answer: 0, why: "Es la herramienta gratuita de Google." },
      { objective: "O4", q: "Para mostrar tu video de jugadas destacadas en tu sitio, tú:", options: ["Solo lo describes", "Se lo envías por correo a los visitantes", "Lo imprimes", "Lo insertas"], answer: 3, why: "Insertarlo hace que se reproduzca en tu página." },
      { objective: "O4", q: "Antes de usar el logotipo de tu escuela, debes:", options: ["Redibujarlo", "Respetar las reglas de tu escuela sobre logotipos", "No hacer caso a las reglas", "Venderlo"], answer: 1, why: "Las escuelas controlan sus logotipos." },
      { objective: "O5", q: "Una buena dirección para tu sitio es:", options: ["Números al azar", "Corta, con tu nombre y tu deporte", "Muy larga", "Tu contraseña"], answer: 1, why: "Fácil de recordar y de compartir." },
      { objective: "O5", q: "Después de publicarlo, ¿quién debe revisar tu sitio?", options: ["Nadie", "Un desconocido en internet", "Un rival", "Un entrenador o tu padre o madre"], answer: 3, why: "Una segunda mirada encuentra los errores." },
      { objective: "O5", q: "¿Dónde debes compartir el enlace de tu sitio?", options: ["En tus biografías, la firma de tu correo y tus perfiles de reclutamiento", "En ningún lado", "Solo en papel", "En mensajes de spam"], answer: 0, why: "Ahí es donde miran los entrenadores y las marcas." },
      { objective: "O6", q: "Search Console es:", options: ["Una consola de videojuegos", "Un anuncio pago", "La herramienta gratuita de Google que muestra cómo aparece tu sitio en las búsquedas", "Una red social"], answer: 2, why: "Los dueños de sitios la usan para revisar cómo les va en las búsquedas." },
      { objective: "O6", q: "¿Cómo revisas cómo aparece tu sitio en las búsquedas?", options: ["Le pides a la IA que adivine", "Miras el clima", "Reinicias tu teléfono", "Buscas tu nombre más tu deporte"], answer: 3, why: "Buscar te muestra lo que ven los demás." },
      { objective: "O6", q: "La IA sugiere tres cambios para tu sitio. Tú:", options: ["Debes usarlos todos", "Decides cuáles usar", "No debes usar ninguno", "Borras tu sitio"], answer: 1, why: "La IA sugiere; tú decides." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      7,
      9,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Título de la página y bases del SEO",
        objective: "O3",
        notYet: "Al título le falta tu nombre o tu deporte, o las imágenes no tienen texto alternativo.",
        meets: "Un título con nombre y deporte, encabezados para cada sección, una descripción corta y texto alternativo en cada imagen.",
        exceeds: "Usa las palabras que buscaría el público, como la posición, el año de graduación y la región, sin llenar la página de palabras clave."
      },
      {
        name: "Sección Sobre mí",
        objective: "O2",
        notYet: "Tiene datos falsos o parece texto copiado de la IA.",
        meets: "Cada dato es verdadero y está revisado, escrito con la propia voz del deportista.",
        exceeds: "Está pensada para el público principal, por ejemplo con lo académico y el carácter para los entrenadores universitarios."
      },
      {
        name: "Estadísticas y jugadas destacadas",
        objective: "O4",
        notYet: "Faltan, están desactualizadas o usan fotos sin permiso.",
        meets: "Estadísticas al día y un video de jugadas destacadas insertado, solo con fotos permitidas y siguiendo las reglas de logotipos de la escuela.",
        exceeds: "Incluye la fecha de la última actualización de las estadísticas y una descripción corta de cada jugada destacada."
      },
      {
        name: "Contacto seguro",
        objective: "O2",
        notYet: "Muestra una dirección, un número de teléfono personal o la fecha de nacimiento completa.",
        meets: "Un correo deportivo o un formulario de contacto, más el contacto de la madre, el padre o el entrenador en el caso de menores de edad.",
        exceeds: "El botón de contacto está probado y las respuestas llegan a una cuenta que se revisa con regularidad."
      },
      {
        name: "Publicado, enlazado y revisado",
        objective: "O5",
        notYet: "No está publicado, tiene enlaces rotos o no está enlazado desde ningún perfil.",
        meets: "Publicado en una dirección corta, probado en un teléfono, revisado por un entrenador, la madre o el padre y enlazado desde un perfil de redes sociales.",
        exceeds: "Se anotaron los resultados de búsqueda del nombre y el deporte, y hay un recordatorio de actualización."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que publican su sitio y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes cuyo sitio aparece al buscar su nombre y su deporte en el seguimiento de 30 días",
      "Participantes que dicen haber recibido el contacto de un entrenador, un reclutador o una marca a través de su sitio",
      "Participantes que actualizan su sitio después de su siguiente temporada o evento importante"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora (lo más fácil) o un teléfono con internet",
      "Una cuenta gratuita de Google para usar Google Sites",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Tus estadísticas, el enlace a un video de jugadas destacadas y fotos que tienes permiso para usar",
      "Unos 60 minutos"
    ],
    facilitatorNotes: [
      "Ayuda a los deportistas a crear un correo deportivo aparte o un formulario de contacto para que sus datos personales sigan privados.",
      "Con menores de edad, pide que su madre, padre o tutor revise el sitio antes de publicarlo y de aparecer como contacto.",
      "Revisa las reglas de la escuela sobre logotipos y fotos antes de la lección de creación del sitio.",
      "Pide a los deportistas que intercambien teléfonos y prueben los sitios de los demás para encontrar enlaces rotos y revisar que se lean bien.",
      "Recuerda a los participantes que los sitios nuevos pueden tardar en aparecer en las búsquedas; vuelvan a revisar en el seguimiento de 30 días."
    ]
  }
};

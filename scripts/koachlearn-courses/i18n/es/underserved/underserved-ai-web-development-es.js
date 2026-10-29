"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-web-development.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-web-development-es",
  lang: "es",
  translationOf: "underserved-ai-web-development",
  category: "Undeserved Community",
  name: "Desarrollo web con IA",
  skills: "Planear un sitio web de una página, Hacer un sitio gratis con Google Sites, Escribir el texto del sitio con IA, Leer y editar HTML sencillo, Agregar con seguridad código escrito por IA, Publicar y revisar un sitio",
  outcome: "planear, hacer y publicar con Google Sites un sitio web gratuito de una página para un negocio familiar, un club o un grupo de la comunidad, usando un asistente de IA gratuito para escribir las palabras y un pequeño fragmento de HTML que tú lees, pruebas y corriges.",
  about: [
    "Un sitio web ayuda a la gente a encontrar un grupo de la iglesia, una asociación de vecinos, un programa de tutorías o un pequeño negocio familiar. No necesitas dinero ni un título en computación para hacer uno.",
    "En este curso vas a planear un sitio de una página, hacerlo con Google Sites (gratis con una cuenta de Google), usar un asistente de IA gratuito para ayudarte a escribir las palabras y aprender lo suficiente de HTML, el lenguaje de las páginas web, para leer, probar y corregir un pequeño fragmento de código que la IA escriba por ti.",
    "Puedes trabajar en una computadora de tu casa o de la biblioteca. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" que va armando tu sitio real. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Publica un sitio de Google Sites de una página para un grupo de la comunidad o un pequeño negocio, real o de práctica. Debe tener un título claro, una sección corta de \"Quiénes somos\" hecha con ayuda de la IA y editada con tus propias palabras, un pequeño recuadro en HTML con el horario y los datos de contacto que probaste y corregiste, nada de direcciones de casa ni teléfonos personales, y debe verse bien en un teléfono.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos y jóvenes adultos de comunidades desatendidas que quieren un sitio web para un grupo de la iglesia, una asociación de vecinos, un programa de tutorías, un club o un pequeño negocio familiar, y personas con curiosidad por dar un primer paso en el trabajo web.",
    startingPoint: "Usan el teléfono y navegan por internet. Nunca han hecho un sitio web ni leído HTML, y quizás tienen una cuenta de Google pero no han usado Google Sites. Algunos han usado un poco un asistente de IA.",
    gap: "Los grupos y los pequeños negocios que no aparecen en internet pierden miembros y clientes, y pagar por un sitio web está fuera de su alcance. Necesitan planear y publicar un sitio gratis, usar la IA para el texto y el código revisando cada dato, y proteger la información privada.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto o séptimo grado)",
      "Dispositivos: hace falta una computadora para construir en Google Sites, y un teléfono para revisar el sitio publicado",
      "Costo: solo una cuenta gratuita de Google, Google Sites y un editor de HTML en línea gratuito",
      "Seguridad: probar todo el código de la IA, solo HTML sencillo y ningún script que no pediste",
      "Privacidad: nada de la dirección de tu casa, tu teléfono personal ni fotos de niños sin permiso por escrito"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un grupo o un negocio real o de práctica", action: "planear un sitio web de una página con su público, una acción principal para los visitantes, sus secciones y sus fotos", standard: "con cuatro o cinco secciones y solo fotos que puedes usar" },
    { id: "O2", condition: "Con una cuenta gratuita de Google", action: "crear un sitio de Google Sites con un título, un cuadro de texto para cada sección planeada y un tema fácil de leer", standard: "sin ayuda" },
    { id: "O3", condition: "Con los datos reales de tu grupo", action: "escribir la sección Quiénes somos con un asistente de IA y editarla con tus propias palabras", standard: "quitando cada dato equivocado o inventado" },
    { id: "O4", condition: "Con un fragmento corto de HTML en un editor en línea", action: "identificar sus etiquetas y cambiar las palabras que van entre ellas", standard: "para que la página siga funcionando bien" },
    { id: "O5", condition: "Con un asistente de IA gratuito", action: "pedir un recuadro sencillo en HTML, probarlo, corregir un problema e incorporarlo a tu sitio de Google Sites", standard: "con cada dato correcto y sin ningún script que no pediste" },
    { id: "O6", condition: "Cuando tu sitio esté listo", action: "publicarlo, revisarlo en un teléfono y quitar la información privada", standard: "con enlaces que funcionan, texto fácil de leer y sin dirección privada, teléfono personal ni fotos sin permiso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear y hacer tu sitio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cómo funcionan los sitios web y cómo planear tu página",
          minutes: 4,
          goal: "Escribir un plan sencillo para un sitio web de una página.",
          text: [
            "Un sitio web es un conjunto de páginas guardadas en una computadora llamada servidor. Cuando escribes una dirección, tu navegador le pide la página a ese servidor y te la muestra.",
            "Antes de hacerlo, planea. Responde cuatro preguntas: ¿Para quién es el sitio? ¿Qué es lo único que deben hacer los visitantes (llamar, visitar, inscribirse, donar)? ¿Qué secciones necesitas? ¿Qué fotos puedes usar con permiso?",
            "La mayoría de los sitios pequeños de la comunidad solo necesitan unas pocas secciones: un título, \"Quiénes somos\", lo que ofrecen, el horario y cómo contactarlos."
          ],
          steps: ["Escribe para quién es el sitio.", "Escribe la única acción que quieres que hagan los visitantes.", "Haz una lista de cuatro o cinco secciones.", "Haz una lista de fotos que son tuyas o que tienes permiso de usar."],
          words: [["Sitio web", "una o más páginas que la gente puede visitar en internet."], ["Servidor", "una computadora que guarda sitios web y envía las páginas a los visitantes."], ["Navegador", "el programa que usas para visitar sitios web, como Chrome, Edge o Safari."]],
          slides: [
            { title: "Cómo funciona un sitio web", bullets: ["Las páginas se guardan en un servidor", "Tu navegador pide la página", "El servidor la envía de vuelta"] },
            { title: "Planea con cuatro preguntas", bullets: ["¿Para quién es?", "¿Qué deben hacer los visitantes?", "¿Qué secciones necesitas?", "¿Qué fotos puedes usar?"] },
            { title: "Un sitio sencillo de una página", bullets: ["Título", "Quiénes somos y qué ofrecen", "Horario y cómo contactarlos"] }
          ],
          tryIt: "Elige un grupo real o de práctica (por ejemplo, un club de tutorías para jóvenes o un camión de comida de tu familia). Escribe tu plan: para quién es, la acción principal, cinco secciones y dos fotos que puedes usar.",
          youCanNow: "explicar cómo te llega un sitio web y planear un sitio de una página.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un servidor?", options: ["Una computadora que guarda sitios web y envía las páginas", "La pantalla que miras", "Una dirección web", "Un tipo de teléfono"], answer: 0, why: "Un servidor guarda las páginas web y las envía cuando un navegador las pide." },
            { objective: "O1", q: "El sitio de tu camión de comida debe hacer que la gente venga a comer. ¿Cuál es la acción principal?", options: ["Leer la historia de los tacos", "Encontrar dónde y cuándo va a estar el camión", "Dejar un comentario largo", "Descargar un archivo"], answer: 1, why: "La acción principal es lo que más quieres que hagan los visitantes, como ir al camión." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hacer un sitio gratis con Google Sites",
          minutes: 5,
          goal: "Crear un sitio de Google Sites con un título y las secciones que planeaste.",
          text: [
            "Google Sites es una herramienta gratuita para hacer sitios web que viene con una cuenta de Google. Lo haces haciendo clic y escribiendo, no programando.",
            "Abre sites.google.com en una computadora y empieza un sitio nuevo, en blanco o con una plantilla. Ponle un nombre al sitio y escribe el título de la página. Del lado derecho vas a encontrar Insertar (para agregar cuadros de texto, imágenes y más), Páginas y Temas.",
            "Agrega un cuadro de texto para cada sección de tu plan. Elige un tema con colores fáciles de leer. Google Sites guarda tu trabajo mientras avanzas."
          ],
          steps: ["Entra a sites.google.com con tu cuenta de Google.", "Empieza un sitio nuevo en blanco o con una plantilla.", "Escribe el nombre del sitio y el título de la página.", "Usa Insertar, a la derecha, para agregar un cuadro de texto por sección.", "Elige un tema fácil de leer."],
          words: [["Plantilla", "un diseño ya hecho que llenas con tus propias palabras."], ["Tema", "los colores y tipos de letra que se usan en todo tu sitio."]],
          sources: [{ name: "Ayuda de Google Sites: crear, nombrar o copiar un sitio", url: "https://support.google.com/sites/answer/6372878" }],
          slides: [
            { title: "Google Sites", bullets: ["Gratis con una cuenta de Google", "Se hace con clics y escribiendo", "Guarda mientras avanzas"] },
            { title: "Empieza tu sitio", bullets: ["Abre sites.google.com", "Empieza en blanco o con una plantilla", "Escribe el nombre del sitio y el título"] },
            { title: "Agrega tus secciones", bullets: ["Insertar, a la derecha: cuadros de texto, imágenes", "Un cuadro de texto por sección", "Elige un tema fácil de leer"] }
          ],
          tryIt: "Empieza un sitio nuevo de Google Sites para tu grupo. Agrega el título y un cuadro de texto vacío para cada sección de tu plan, y elige un tema.",
          youCanNow: "hacer la estructura de un sitio web gratuito con Google Sites.",
          quickCheck: [
            { objective: "O2", q: "¿Qué cambia un tema en Google Sites?", options: ["Tu dirección web", "Quién puede ver el sitio", "Los colores y la letra", "Los datos del sitio"], answer: 2, why: "Un tema define los colores y la letra de tu sitio." },
            { objective: "O2", q: "Quieres agregar una sección de \"Horario\" a tu sitio de Google Sites. ¿Dónde haces clic?", options: ["En Publicar", "En Temas", "En Páginas", "En Insertar y luego en un cuadro de texto"], answer: 3, why: "Insertar, del lado derecho, agrega cuadros de texto, imágenes y más." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir el texto de tu sitio con IA",
          minutes: 5,
          goal: "Usar un asistente de IA gratuito para hacer un borrador de la sección Quiénes somos y luego hacerla tuya.",
          text: [
            "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini puede escribir un primer borrador del texto de tu sitio. Dale los datos y el tono que quieres.",
            "Ejemplo de instrucción: \"Escribe un Quiénes somos amable de 60 palabras para un club gratuito de tutorías después de la escuela en un centro comunitario. Ayudamos a niños de 3.º a 8.º grado con lectura y matemáticas. Usa palabras sencillas.\"",
            "Luego edítalo. Corrige cualquier dato que la IA haya puesto mal o inventado, quita las palabras que no suenan a ti y nunca dejes que invente precios, premios o promesas que no puedes cumplir. Tu sitio habla por tu grupo, así que tú eres responsable de cada palabra."
          ],
          steps: ["Dale a la IA los datos reales de tu grupo y el tono que quieres.", "Pide un borrador corto con un límite de palabras.", "Corrige los datos equivocados o inventados.", "Reescribe partes para que suenen a ti y pégalo en tu sitio."],
          words: [["Borrador", "una primera versión que vas a mejorar."], ["Tono", "cómo suena un texto: amable, serio, alegre."]],
          slides: [
            { title: "La IA escribe el primer borrador", bullets: ["Dale datos reales", "Di el tono y el límite de palabras"] },
            { title: "Ejemplo de instrucción", bullets: ["\"Escribe un Quiénes somos amable de 60 palabras", "para un club gratuito de tutorías de 3.º a 8.º grado.", "Usa palabras sencillas.\""] },
            { title: "Tú lo editas", bullets: ["Corrige datos equivocados o inventados", "Nada de precios, premios o promesas inventados", "Haz que suene a ti"] }
          ],
          tryIt: "Pide a un asistente de IA un Quiénes somos de 60 palabras para tu grupo. Corrige un dato o una frase y pega la versión editada en tu sitio de Google Sites.",
          youCanNow: "usar la IA para hacer un borrador del texto del sitio y editarlo para que sea verdad y suene a ti.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué darle a la IA un límite de palabras para tu sección Quiénes somos?", options: ["Para que el borrador sea corto y quepa en tu página", "Para que cueste menos", "Para que use palabras más difíciles", "Para que agregue más datos"], answer: 0, why: "Un límite de palabras mantiene el borrador lo bastante corto para un sitio web pequeño." },
            { objective: "O3", q: "El borrador de la IA dice que tus tutorías \"garantizan subir las calificaciones\". ¿Qué haces?", options: ["Lo dejas; suena bien", "Quitas la promesa que no puedes cumplir", "Lo pones más grande y en negritas", "Agregas una segunda garantía"], answer: 1, why: "Nunca dejes que la IA agregue promesas que no puedes cumplir; tú respondes por cada palabra." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear y hacer tu sitio",
        questions: [
          { objective: "O1", q: "¿Qué hace un servidor?", options: ["Guarda sitios web y envía páginas a los visitantes", "Imprime páginas", "Carga tu teléfono", "Escribe tu texto"], answer: 0, why: "Un servidor es la computadora que guarda el sitio y envía las páginas." },
          { objective: "O1", q: "¿Qué pregunta va en el plan de tu sitio?", options: ["¿Cuál es mi contraseña?", "¿Qué es lo único que deben hacer los visitantes?", "¿Cuál es mi número de banco?", "¿Qué comí hoy?"], answer: 1, why: "Saber la acción principal te ayuda a diseñar la página." },
          { objective: "O2", q: "¿Qué necesitas para usar Google Sites gratis?", options: ["Un servicio de alojamiento de paga", "Un título en computación", "Una cuenta de Google", "Una tarjeta de crédito"], answer: 2, why: "Google Sites viene gratis con una cuenta de Google." },
          { objective: "O2", q: "En Google Sites, ¿dónde agregas cuadros de texto e imágenes?", options: ["En la papelera", "En la barra de direcciones", "En la impresora", "En Insertar, del lado derecho"], answer: 3, why: "El panel Insertar de la derecha agrega contenido." },
          { objective: "O3", q: "El borrador de la IA dice que tu club \"ganó un premio nacional\", pero no es cierto. ¿Qué haces?", options: ["Lo quitas antes de publicar", "Lo dejas, suena bien", "Lo haces más grande", "Pides a la IA más premios"], answer: 0, why: "Tú eres responsable de cada palabra; quita los datos inventados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Código, publicar y revisar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Leer HTML sencillo",
          minutes: 5,
          goal: "Leer un fragmento corto de HTML y cambiar sus palabras sin romperlo.",
          text: [
            "HTML es el lenguaje en el que se escriben las páginas web. Usa etiquetas entre signos de menor y mayor. La mayoría de las etiquetas van en pares: una etiqueta de apertura como <h2> y una de cierre como </h2>, con palabras en medio.",
            "Etiquetas comunes: <h2> para un título, <p> para un párrafo, <ul> y <li> para una lista con viñetas, <strong> para negritas y <a href=\"...\"> para un enlace.",
            "Puedes practicar gratis, sin cuenta, en un editor en línea como el W3Schools Tryit Editor: pega HTML a la izquierda, haz clic en Run (ejecutar) y ve la página a la derecha. Al principio cambia solo las palabras entre las etiquetas y vuelve a ejecutarlo."
          ],
          steps: ["Abre un editor de HTML gratuito en línea.", "Pega un fragmento corto de HTML.", "Haz clic en Run para ver el resultado.", "Cambia las palabras entre dos etiquetas y vuelve a ejecutarlo."],
          words: [["HTML", "el lenguaje que se usa para escribir páginas web."], ["Etiqueta", "una marca entre signos de menor y mayor, como <p>, que le dice al navegador qué es cada cosa."], ["Etiqueta de cierre", "la etiqueta final con una diagonal, como </p>."]],
          slides: [
            { title: "El HTML arma las páginas web", bullets: ["Etiquetas entre < y >", "Apertura <p> ... cierre </p>"] },
            { title: "Etiquetas que debes conocer", bullets: ["<h2> título, <p> párrafo", "<ul> y <li> lista con viñetas", "<strong> negritas, <a> enlace"] },
            { title: "Practica gratis", bullets: ["Editor en línea como W3Schools Tryit", "Pega, ejecuta, mira", "Cambia las palabras entre etiquetas"] }
          ],
          tryIt: "En un editor de HTML gratuito en línea, escribe <h2>Nuestro horario</h2><p>Lunes de 3 a 6 pm</p>. Haz clic en Run, cambia el horario y vuelve a ejecutarlo.",
          youCanNow: "leer etiquetas de HTML sencillas y cambiar con seguridad las palabras de adentro.",
          quickCheck: [
            { objective: "O4", q: "¿Qué etiqueta crea un elemento de una lista con viñetas?", options: ["<p>", "<h2>", "<li>", "<strong>"], answer: 2, why: "<li> marca cada elemento de una lista con viñetas, dentro de <ul>." },
            { objective: "O4", q: "Quieres cambiar \"Lunes\" por \"Martes\" en <p>Lunes de 3 a 6 pm</p>. ¿Qué cambias?", options: ["La etiqueta <p>", "La etiqueta </p>", "Borras las etiquetas", "Solo la palabra que está entre las etiquetas"], answer: 3, why: "Al principio, cambia solo las palabras entre las etiquetas para que el HTML siga funcionando." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Pedirle código a la IA, y luego probarlo y corregirlo",
          minutes: 6,
          goal: "Pedirle a la IA un pequeño recuadro en HTML, probarlo, corregir un problema y agregarlo a tu sitio.",
          text: [
            "Los asistentes de IA pueden escribir HTML. Sé específico: \"Escribe solo HTML sencillo, sin JavaScript, para un recuadro con el título Horario y contacto, una lista con nuestro horario (lunes a jueves de 3 a 6 pm) y un enlace a nuestro correo. Usa un fondo claro y letra grande.\"",
            "Prueba siempre el código de la IA antes de usarlo. Pégalo en el editor en línea, haz clic en Run y revisa: ¿Cada dato está bien? ¿Funciona el enlace? ¿Se lee fácil el texto? Si algo está mal, dile a la IA exactamente qué corregir, o corrige tú las palabras.",
            "No pegues código que no entiendes de desconocidos, ni código de la IA que traiga programas (scripts) que no pediste. Para agregar tu recuadro a Google Sites: haz clic en Insertar, luego en Incorporar (Embed), elige Incorporar código, pega tu HTML y haz clic en Siguiente e Insertar."
          ],
          steps: ["Pide a la IA solo HTML sencillo, con tu horario y contacto reales.", "Pruébalo en el editor en línea.", "Corrige una cosa: un dato, un enlace o el tamaño de la letra.", "En Google Sites: Insertar, Incorporar, Incorporar código, pegar, Siguiente, Insertar."],
          words: [["Código", "instrucciones escritas para una computadora, como el HTML."], ["Incorporar (embed)", "poner un fragmento de código o de contenido dentro de una página."], ["Error (bug)", "una falla en el código que hace que funcione mal."]],
          sources: [{ name: "Ayuda de Google Sites: incorporar HTML o JavaScript en tu sitio", url: "https://support.google.com/sites/answer/90569" }],
          slides: [
            { title: "Pídele código a la IA con claridad", bullets: ["Solo HTML sencillo, sin JavaScript", "Tu horario y contacto reales", "Letra grande y fácil de leer"] },
            { title: "Prueba antes de usar", bullets: ["Pega y ejecuta en el editor", "¿Datos bien? ¿Enlace funciona? ¿Se lee fácil?", "Corrígelo o pide a la IA que corrija una cosa"] },
            { title: "Agrégalo a Google Sites", bullets: ["Insertar y luego Incorporar", "Elige Incorporar código y pega", "Siguiente y luego Insertar"] }
          ],
          tryIt: "Pide a la IA un recuadro sencillo en HTML de Horario y contacto para tu grupo. Pruébalo, corrige un problema e incorpóralo en tu sitio de Google Sites.",
          youCanNow: "conseguir HTML que funcione con la IA, probarlo, corregirlo y agregarlo a un sitio.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué pedirle a la IA \"solo HTML sencillo, sin JavaScript\"?", options: ["El HTML sencillo es más seguro y más fácil de revisar para un principiante", "JavaScript no está permitido en internet", "El HTML cuesta menos", "La IA no sabe escribir JavaScript"], answer: 0, why: "El HTML sencillo es fácil de leer y de probar, sin scripts que no pediste." },
            { objective: "O5", q: "Probaste el recuadro de la IA y el enlace del correo no funciona. ¿Qué haces?", options: ["Lo incorporas de todos modos", "Le dices a la IA exactamente qué corregir, o lo corriges tú, y vuelves a probar", "Borras todo tu sitio", "Quitas el correo del plan"], answer: 1, why: "Corrige ese problema y vuelve a probar antes de usar el código." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Publicar y revisar tu sitio",
          minutes: 5,
          goal: "Publicar tu sitio, revisarlo en un teléfono y proteger la información privada.",
          text: [
            "Cuando tu página esté lista, haz clic en Publicar, arriba a la derecha de Google Sites. Elige una dirección web y publica. Puedes hacer cambios después y volver a publicar.",
            "Revisa tu sitio publicado en un teléfono, porque la mayoría de los visitantes van a usar uno. ¿La letra es lo bastante grande? ¿Funcionan los enlaces? ¿Cargan las imágenes? Pide también a un amigo que lo pruebe.",
            "Protege la privacidad. No publiques la dirección de una casa, un número de celular personal ni fotos de niños sin permiso por escrito de su madre, padre o tutor. Usa mejor un correo del grupo o un lugar público de reunión."
          ],
          steps: ["Haz clic en Publicar, elige la dirección web y publica.", "Abre la dirección publicada en un teléfono.", "Revisa el tamaño de la letra, los enlaces y las imágenes.", "Quita cualquier dirección privada, número personal o foto sin permiso."],
          words: [["Publicar", "poner tu sitio en línea para que cualquiera con la dirección lo pueda ver."], ["Dirección web", "el texto que escribes para visitar un sitio, también llamado URL."]],
          slides: [
            { title: "Publica", bullets: ["Haz clic en Publicar, arriba a la derecha", "Elige una dirección web", "Puedes actualizar y volver a publicar"] },
            { title: "Revisa en un teléfono", bullets: ["¿Letra lo bastante grande?", "¿Funcionan los enlaces?", "¿Cargan las imágenes? Pide a un amigo que pruebe"] },
            { title: "Protege la privacidad", bullets: ["Sin dirección de casa ni celular personal", "Sin fotos de niños sin permiso", "Usa un correo del grupo o un lugar público"] }
          ],
          tryIt: "Tarea final: publica tu sitio de Google Sites de una página con tu sección Quiénes somos editada y tu recuadro de Horario y contacto probado. Revísalo en un teléfono y quita cualquier cosa privada.",
          youCanNow: "publicar un sitio web que funciona, revisarlo en un teléfono y dejar fuera la información privada.",
          quickCheck: [
            { objective: "O6", q: "¿Qué pasa cuando haces clic en Publicar en Google Sites?", options: ["El sitio se borra", "Solo tú lo puedes ver", "El sitio queda en línea en la dirección web que elegiste", "Se imprime el sitio"], answer: 2, why: "Publicar pone el sitio en línea en su dirección web." },
            { objective: "O6", q: "Tu sitio muestra el celular personal de un miembro. ¿Qué haces?", options: ["Lo dejas; ayuda a que la gente llame", "Lo haces más pequeño", "Pides a los visitantes que no llamen", "Lo cambias por un correo del grupo y vuelves a publicar"], answer: 3, why: "Los números personales no van en sitios públicos; usa un correo del grupo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Código, publicar y revisar",
        questions: [
          { objective: "O4", q: "¿Qué es HTML?", options: ["Un tipo de teléfono", "El lenguaje que se usa para escribir páginas web", "Una contraseña", "Una aplicación de correo"], answer: 1, why: "Las páginas web se escriben en HTML." },
          { objective: "O4", q: "¿Cuál es una etiqueta de cierre?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "Las etiquetas de cierre llevan una diagonal." },
          { objective: "O5", q: "La IA te dio HTML para tu sitio. ¿Qué haces primero?", options: ["Lo publicas sin verlo", "Se lo mandas a desconocidos", "Borras tu sitio", "Lo pruebas en un editor en línea y revisas los datos"], answer: 3, why: "Probar detecta errores y datos equivocados antes de que los vean los visitantes." },
          { objective: "O5", q: "¿Cómo agregas código HTML a un sitio de Google Sites?", options: ["Insertar, Incorporar, Incorporar código, pegar, Siguiente, Insertar", "Lo imprimes", "Se lo mandas por correo a Google", "Lo escribes en el título de la página"], answer: 0, why: "Ese es el camino para incorporar código en Google Sites." },
          { objective: "O6", q: "¿Qué es seguro poner en el sitio público de un grupo de la comunidad?", options: ["La dirección de tu casa", "Un correo del grupo", "La foto de un niño sin permiso", "Tu número de celular personal"], answer: 1, why: "Un correo del grupo permite que te contacten sin mostrar datos privados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Desarrollo web con IA",
    questions: [
      { objective: "O1", q: "Cuando escribes una dirección web, ¿qué pasa?", options: ["Tu navegador le pide la página a un servidor", "La página se imprime", "Tu teléfono escribe la página", "Nada"], answer: 0, why: "El servidor envía la página a tu navegador." },
      { objective: "O1", q: "¿Cuál es un navegador web?", options: ["Una hoja de cálculo", "Chrome", "Una impresora", "Un mensaje de texto"], answer: 1, why: "Chrome, Edge y Safari son navegadores." },
      { objective: "O1", q: "El primer paso para hacer un sitio es:", options: ["Pagar anuncios", "Elegir solo los colores", "Hacer un plan sencillo", "Publicar una página vacía"], answer: 2, why: "Un plan te dice lo que necesita el sitio." },
      { objective: "O1", q: "¿Qué sección suele necesitar un sitio pequeño de la comunidad?", options: ["Las direcciones de los miembros", "Números de banco", "Contraseñas", "Cómo contactarlos"], answer: 3, why: "Los visitantes necesitan una forma de contactarte." },
      { objective: "O2", q: "Google Sites es:", options: ["Una herramienta gratuita para hacer sitios web con una cuenta de Google", "Solo una aplicación de paga", "Una compañía de teléfonos", "Un muro de redes sociales"], answer: 0, why: "Viene gratis con una cuenta de Google." },
      { objective: "O2", q: "Una plantilla es:", options: ["Una contraseña", "Un diseño ya hecho que llenas", "Un tipo de servidor", "Un error"], answer: 1, why: "Las plantillas te dan un diseño para empezar." },
      { objective: "O2", q: "Un tema controla:", options: ["Quién puede visitar", "La dirección web", "Los colores y tipos de letra", "Tu cuenta"], answer: 2, why: "Los temas definen cómo se ve el sitio." },
      { objective: "O3", q: "¿Qué instrucción dará el mejor borrador de Quiénes somos?", options: ["\"sitio web\"", "\"escribe cosas\"", "\"ayuda\"", "\"Escribe un Quiénes somos amable de 60 palabras para un club gratuito de tutorías de 3.º a 8.º grado. Usa palabras sencillas.\""], answer: 3, why: "Da los datos, el largo y el tono." },
      { objective: "O3", q: "¿Quién es responsable de cada palabra de tu sitio?", options: ["Tú y tu grupo", "La IA", "Google", "Nadie"], answer: 0, why: "La IA hace el borrador, pero tú publicas y eres dueño de las palabras." },
      { objective: "O4", q: "¿Qué es una etiqueta en HTML?", options: ["Una etiqueta de precio", "Una marca entre < y >, como <p>", "Una foto", "Una dirección web"], answer: 1, why: "Las etiquetas le dicen al navegador qué es cada parte." },
      { objective: "O4", q: "¿Qué etiqueta hace un párrafo?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> quiere decir párrafo." },
      { objective: "O4", q: "En un editor de HTML en línea, ¿cómo ves tu página?", options: ["La imprimes", "La envías por correo", "Reinicias la computadora", "Haces clic en Run"], answer: 3, why: "Run muestra el resultado de tu HTML." },
      { objective: "O5", q: "Al pedirle código a la IA para un sitio de principiante, una petición segura es:", options: ["\"Solo HTML sencillo, sin JavaScript\"", "\"Agrega los scripts que quieras\"", "\"Copia código de un sitio cualquiera\"", "\"Incluye mi contraseña\""], answer: 0, why: "El HTML sencillo es más fácil de leer, probar y confiar." },
      { objective: "O5", q: "Un error (bug) es:", options: ["Un tema del sitio web", "Una falla en el código que hace que funcione mal", "Una dirección web", "Un tipo de plantilla"], answer: 1, why: "Los errores son fallas que hay que encontrar y corregir." },
      { objective: "O5", q: "El código de la IA muestra la hora de cierre equivocada. Debes:", options: ["Publicarlo igual", "Borrar todo el sitio", "Corregir las palabras o pedir a la IA que corrija esa cosa", "Ignorarlo"], answer: 2, why: "Corrige el problema concreto y vuelve a probar." },
      { objective: "O5", q: "¿Qué quiere decir \"incorporar\"?", options: ["Borrar una página", "Imprimir una página", "Cambiar tu contraseña", "Poner código o contenido dentro de una página"], answer: 3, why: "Incorporar pone tu recuadro de HTML dentro del sitio." },
      { objective: "O6", q: "Para poner en línea tu sitio de Google Sites, haces clic en:", options: ["Publicar", "Borrar", "Imprimir", "Deshacer"], answer: 0, why: "Publicar hace visible el sitio en su dirección." },
      { objective: "O6", q: "¿Por qué revisar tu sitio en un teléfono?", options: ["Los teléfonos no pueden mostrar sitios web", "La mayoría de los visitantes usan un teléfono", "Cambia la dirección", "Lo exige la ley"], answer: 1, why: "Muchos visitantes van a ver tu sitio en un teléfono." },
      { objective: "O6", q: "¿Qué NO debe ir en tu sitio público?", options: ["El horario del grupo", "Un correo del grupo", "La foto de un niño sin permiso por escrito de su madre o padre", "Lo que ofrecen"], answer: 2, why: "Las fotos de niños necesitan permiso de su madre, padre o tutor." },
      { objective: "O6", q: "Después de publicar, ¿puedes cambiar tu sitio de Google Sites?", options: ["No, nunca", "Solo pagando", "Solo empezando de cero", "Sí, lo editas y vuelves a publicar"], answer: 3, why: "Puedes actualizarlo y volver a publicarlo cuando quieras." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      7,
      9,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Sitio construido",
        objective: "O2",
        notYet: "No tiene un título claro o faltan secciones.",
        meets: "Un sitio de Google Sites con un título claro y las secciones planeadas, con un tema fácil de leer.",
        exceeds: "La acción principal para los visitantes es fácil de encontrar."
      },
      {
        name: "Quiénes somos",
        objective: "O3",
        notYet: "El texto de la IA está pegado tal cual, o tiene datos equivocados o inventados.",
        meets: "Una sección Quiénes somos corta con datos verdaderos, editada con las propias palabras de la persona.",
        exceeds: "Puede señalar qué cambió y por qué."
      },
      {
        name: "Recuadro de Horario y contacto",
        objective: "O5",
        notYet: "No hay recuadro en HTML, o no se probó.",
        meets: "Un recuadro sencillo en HTML probado en un editor, con un problema corregido, e incorporado.",
        exceeds: "Puede explicar qué hace cada etiqueta del recuadro."
      },
      {
        name: "Publicado y listo para el teléfono",
        objective: "O6",
        notYet: "No está publicado, o no se revisó en un teléfono.",
        meets: "Publicado y revisado en un teléfono: el texto se lee, los enlaces funcionan y las imágenes cargan.",
        exceeds: "Un amigo también lo probó y se corrigió cualquier problema."
      },
      {
        name: "Privacidad",
        objective: "O6",
        notYet: "El sitio tiene una dirección de casa, un número personal o la foto de un niño sin permiso.",
        meets: "Solo un correo del grupo o un lugar público, y ningún dato privado.",
        exceeds: "Todas las fotos son propias o se usan con permiso por escrito."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Grupos de la comunidad o pequeños negocios con un sitio en línea hecho por un participante dentro de 30 días (encuesta de seguimiento)",
      "Personas que toman otro curso de web o de programación dentro de 60 días",
      "Grupos que reportan nuevos miembros, clientes o llamadas gracias a su sitio"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet (de la biblioteca o de la casa) para construir el sitio, y un teléfono para revisarlo",
      "Una cuenta gratuita de Google para usar Google Sites",
      "Un asistente de IA gratuito y un editor de HTML en línea gratuito, como el W3Schools Tryit Editor",
      "Datos reales del grupo: nombre, qué ofrece, horario y un correo del grupo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Ayuda primero a entrar a la cuenta de Google; es lo que más tiempo les toma a los principiantes.",
      "Cuando se pueda, pide que construyan el sitio para un grupo real al que pertenecen, con el permiso del grupo.",
      "Revisa cada sitio publicado para que no tenga direcciones de casa, números personales ni fotos de niños sin permiso.",
      "Recuerda que deben probar todo el código de la IA y pedir solo HTML sencillo.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

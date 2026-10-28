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
  chapters: [
    {
      name: "Capítulo 1: Planear y hacer tu sitio",
      lessons: [
        {
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
          youCanNow: "explicar cómo te llega un sitio web y planear un sitio de una página."
        },
        {
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
          youCanNow: "hacer la estructura de un sitio web gratuito con Google Sites."
        },
        {
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
          youCanNow: "usar la IA para hacer un borrador del texto del sitio y editarlo para que sea verdad y suene a ti."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear y hacer tu sitio",
        questions: [
          { q: "¿Qué hace un servidor?", options: ["Guarda sitios web y envía páginas a los visitantes", "Imprime páginas", "Carga tu teléfono", "Escribe tu texto"], answer: 0, why: "Un servidor es la computadora que guarda el sitio y envía las páginas." },
          { q: "¿Qué pregunta va en el plan de tu sitio?", options: ["¿Cuál es mi contraseña?", "¿Qué es lo único que deben hacer los visitantes?", "¿Cuál es mi número de banco?", "¿Qué comí hoy?"], answer: 1, why: "Saber la acción principal te ayuda a diseñar la página." },
          { q: "¿Qué necesitas para usar Google Sites gratis?", options: ["Un servicio de alojamiento de paga", "Un título en computación", "Una cuenta de Google", "Una tarjeta de crédito"], answer: 2, why: "Google Sites viene gratis con una cuenta de Google." },
          { q: "En Google Sites, ¿dónde agregas cuadros de texto e imágenes?", options: ["En la papelera", "En la barra de direcciones", "En la impresora", "En Insertar, del lado derecho"], answer: 3, why: "El panel Insertar de la derecha agrega contenido." },
          { q: "El borrador de la IA dice que tu club \"ganó un premio nacional\", pero no es cierto. ¿Qué haces?", options: ["Lo quitas antes de publicar", "Lo dejas, suena bien", "Lo haces más grande", "Pides a la IA más premios"], answer: 0, why: "Tú eres responsable de cada palabra; quita los datos inventados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Código, publicar y revisar",
      lessons: [
        {
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
          youCanNow: "leer etiquetas de HTML sencillas y cambiar con seguridad las palabras de adentro."
        },
        {
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
          youCanNow: "conseguir HTML que funcione con la IA, probarlo, corregirlo y agregarlo a un sitio."
        },
        {
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
          youCanNow: "publicar un sitio web que funciona, revisarlo en un teléfono y dejar fuera la información privada."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Código, publicar y revisar",
        questions: [
          { q: "¿Qué es HTML?", options: ["Un tipo de teléfono", "El lenguaje que se usa para escribir páginas web", "Una contraseña", "Una aplicación de correo"], answer: 1, why: "Las páginas web se escriben en HTML." },
          { q: "¿Cuál es una etiqueta de cierre?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "Las etiquetas de cierre llevan una diagonal." },
          { q: "La IA te dio HTML para tu sitio. ¿Qué haces primero?", options: ["Lo publicas sin verlo", "Se lo mandas a desconocidos", "Borras tu sitio", "Lo pruebas en un editor en línea y revisas los datos"], answer: 3, why: "Probar detecta errores y datos equivocados antes de que los vean los visitantes." },
          { q: "¿Cómo agregas código HTML a un sitio de Google Sites?", options: ["Insertar, Incorporar, Incorporar código, pegar, Siguiente, Insertar", "Lo imprimes", "Se lo mandas por correo a Google", "Lo escribes en el título de la página"], answer: 0, why: "Ese es el camino para incorporar código en Google Sites." },
          { q: "¿Qué es seguro poner en el sitio público de un grupo de la comunidad?", options: ["La dirección de tu casa", "Un correo del grupo", "La foto de un niño sin permiso", "Tu número de celular personal"], answer: 1, why: "Un correo del grupo permite que te contacten sin mostrar datos privados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Desarrollo web con IA",
    questions: [
      { q: "Cuando escribes una dirección web, ¿qué pasa?", options: ["Tu navegador le pide la página a un servidor", "La página se imprime", "Tu teléfono escribe la página", "Nada"], answer: 0, why: "El servidor envía la página a tu navegador." },
      { q: "¿Cuál es un navegador web?", options: ["Una hoja de cálculo", "Chrome", "Una impresora", "Un mensaje de texto"], answer: 1, why: "Chrome, Edge y Safari son navegadores." },
      { q: "El primer paso para hacer un sitio es:", options: ["Pagar anuncios", "Elegir solo los colores", "Hacer un plan sencillo", "Publicar una página vacía"], answer: 2, why: "Un plan te dice lo que necesita el sitio." },
      { q: "¿Qué sección suele necesitar un sitio pequeño de la comunidad?", options: ["Las direcciones de los miembros", "Números de banco", "Contraseñas", "Cómo contactarlos"], answer: 3, why: "Los visitantes necesitan una forma de contactarte." },
      { q: "Google Sites es:", options: ["Una herramienta gratuita para hacer sitios web con una cuenta de Google", "Solo una aplicación de paga", "Una compañía de teléfonos", "Un muro de redes sociales"], answer: 0, why: "Viene gratis con una cuenta de Google." },
      { q: "Una plantilla es:", options: ["Una contraseña", "Un diseño ya hecho que llenas", "Un tipo de servidor", "Un error"], answer: 1, why: "Las plantillas te dan un diseño para empezar." },
      { q: "Un tema controla:", options: ["Quién puede visitar", "La dirección web", "Los colores y tipos de letra", "Tu cuenta"], answer: 2, why: "Los temas definen cómo se ve el sitio." },
      { q: "¿Qué instrucción dará el mejor borrador de Quiénes somos?", options: ["\"sitio web\"", "\"escribe cosas\"", "\"ayuda\"", "\"Escribe un Quiénes somos amable de 60 palabras para un club gratuito de tutorías de 3.º a 8.º grado. Usa palabras sencillas.\""], answer: 3, why: "Da los datos, el largo y el tono." },
      { q: "¿Quién es responsable de cada palabra de tu sitio?", options: ["Tú y tu grupo", "La IA", "Google", "Nadie"], answer: 0, why: "La IA hace el borrador, pero tú publicas y eres dueño de las palabras." },
      { q: "¿Qué es una etiqueta en HTML?", options: ["Una etiqueta de precio", "Una marca entre < y >, como <p>", "Una foto", "Una dirección web"], answer: 1, why: "Las etiquetas le dicen al navegador qué es cada parte." },
      { q: "¿Qué etiqueta hace un párrafo?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> quiere decir párrafo." },
      { q: "En un editor de HTML en línea, ¿cómo ves tu página?", options: ["La imprimes", "La envías por correo", "Reinicias la computadora", "Haces clic en Run"], answer: 3, why: "Run muestra el resultado de tu HTML." },
      { q: "Al pedirle código a la IA para un sitio de principiante, una petición segura es:", options: ["\"Solo HTML sencillo, sin JavaScript\"", "\"Agrega los scripts que quieras\"", "\"Copia código de un sitio cualquiera\"", "\"Incluye mi contraseña\""], answer: 0, why: "El HTML sencillo es más fácil de leer, probar y confiar." },
      { q: "Un error (bug) es:", options: ["Un tema del sitio web", "Una falla en el código que hace que funcione mal", "Una dirección web", "Un tipo de plantilla"], answer: 1, why: "Los errores son fallas que hay que encontrar y corregir." },
      { q: "El código de la IA muestra la hora de cierre equivocada. Debes:", options: ["Publicarlo igual", "Borrar todo el sitio", "Corregir las palabras o pedir a la IA que corrija esa cosa", "Ignorarlo"], answer: 2, why: "Corrige el problema concreto y vuelve a probar." },
      { q: "¿Qué quiere decir \"incorporar\"?", options: ["Borrar una página", "Imprimir una página", "Cambiar tu contraseña", "Poner código o contenido dentro de una página"], answer: 3, why: "Incorporar pone tu recuadro de HTML dentro del sitio." },
      { q: "Para poner en línea tu sitio de Google Sites, haces clic en:", options: ["Publicar", "Borrar", "Imprimir", "Deshacer"], answer: 0, why: "Publicar hace visible el sitio en su dirección." },
      { q: "¿Por qué revisar tu sitio en un teléfono?", options: ["Los teléfonos no pueden mostrar sitios web", "La mayoría de los visitantes usan un teléfono", "Cambia la dirección", "Lo exige la ley"], answer: 1, why: "Muchos visitantes van a ver tu sitio en un teléfono." },
      { q: "¿Qué NO debe ir en tu sitio público?", options: ["El horario del grupo", "Un correo del grupo", "La foto de un niño sin permiso por escrito de su madre o padre", "Lo que ofrecen"], answer: 2, why: "Las fotos de niños necesitan permiso de su madre, padre o tutor." },
      { q: "Después de publicar, ¿puedes cambiar tu sitio de Google Sites?", options: ["No, nunca", "Solo pagando", "Solo empezando de cero", "Sí, lo editas y vuelves a publicar"], answer: 3, why: "Puedes actualizarlo y volver a publicarlo cuando quieras." }
    ]
  }
};

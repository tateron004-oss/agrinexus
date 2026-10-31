"use strict";

// Koach Learn course (Spanish translation of shared/canva-graphic-design.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "canva-graphic-design-es",
  lang: "es",
  translationOf: "canva-graphic-design",
  category: "Workforce Development",
  name: "Diseño gráfico con Canva",
  skills: "Escribir un brief de diseño, Usar principios de composición, Elegir colores y fuentes, Crear diseños en Canva, Revisar derechos y legibilidad, Exportar una pieza de portafolio",
  outcome: "escribir un brief de diseño corto y luego hacer en el plan gratuito de Canva un volante claro y fácil de leer y una publicación para redes sociales que combine con él, revisarlos en cuanto a derechos y legibilidad, y guardarlos como una pieza de portafolio que puedas mostrar a un empleador o a un cliente.",
  about: [
    "Este curso es para jóvenes que buscan su primer trabajo creativo, adultos que quieren sumar una habilidad a su currículum, dueños de pequeños negocios y emprendedores que hacen su propio marketing, y personal y voluntarios de organizaciones sin fines de lucro que hacen volantes para eventos y donantes.",
    "Vas a aprender qué hacen los diseñadores gráficos, las reglas básicas que hacen que un diseño sea fácil de leer, cómo elegir colores y fuentes, cómo crear un diseño en el plan gratuito de Canva, cómo asegurarte de que tienes derecho a usar cada imagen, y cómo exportar tu trabajo y agregarlo a un portafolio.",
    "Canva es una herramienta de diseño gratuita en internet que funciona en un navegador web o como aplicación en el teléfono. No necesitas comprar nada. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Hay una comprobación rápida después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final.",
    "Este curso enseña lo básico y te ayuda a crear tu primera pieza de portafolio. No otorga un certificado ni un título. Si más adelante quieres una credencial formal, las lecciones te dicen dónde buscar."
  ],
  finalTask: "Para un cliente real o de práctica (una tienda local, un evento de una organización sin fines de lucro, un equipo deportivo, una iglesia o tu propio negocio), escribe un brief de diseño de un párrafo. Luego haz en el plan gratuito de Canva un volante tamaño carta (o A4) y una publicación cuadrada para redes sociales que combine con él, con los mismos colores y fuentes. Revisa los dos con la lista de revisión de diseño (jerarquía, contraste, ortografía, derechos de cada imagen), exporta el volante como PDF y la publicación como PNG, y escribe una descripción de portafolio de 3 a 4 oraciones sobre el objetivo, tus decisiones y el resultado.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Participantes variados en Estados Unidos y en otros países: jóvenes que buscan su primer trabajo o un ingreso creativo extra, adultos que cambian de carrera, dueños de pequeños negocios y emprendedores, y personal y voluntarios de organizaciones sin fines de lucro que hacen sus propios volantes y publicaciones.",
    startingPoint: "Saben usar un teléfono o una computadora y las redes sociales. A la mayoría nunca le han enseñado reglas de diseño; muchos han probado Canva u otras herramientas parecidas copiando una plantilla sin saber por qué funciona.",
    gap: "Los empleadores, los clientes y las organizaciones quieren gráficos claros y fieles a su marca, y rápido. Los participantes necesitan planear un diseño a partir de un brief, aplicar reglas básicas de composición, color y tipografía, evitar problemas de derechos de autor y mostrar su trabajo terminado en un portafolio. Muchas veces, una pieza de portafolio es lo que consigue el primer encargo o el primer trabajo de diseño.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Costo: solo el plan gratuito de Canva; no se necesitan elementos pagados ni suscripciones",
      "Dispositivos: una computadora es más fácil; un teléfono sirve para la mayoría de las tareas",
      "Tiempo: lecciones de 4 a 6 minutos; la tarea final toma unos 60 a 90 minutos",
      "Derechos: solo imágenes que el participante tiene o que tiene licencia para usar; nada de logotipos o fotos copiados de otros negocios"
    ],
    prerequisites: "Uso básico de una computadora o un teléfono y una dirección de correo electrónico para crear una cuenta gratuita de Canva. Quien sea nuevo con las computadoras puede tomar primero \"Habilidades básicas de computación\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un pedido de diseño de un cliente, un empleador o tu propio proyecto", action: "escribir un brief de diseño que indique el público, el mensaje principal, el formato y el tamaño", standard: "con las cuatro partes en un párrafo corto" },
    { id: "O2", condition: "Con un borrador de diseño", action: "organizar el texto y las imágenes usando jerarquía, alineación, contraste, repetición y espacio en blanco", standard: "para que quien lo vea entienda el mensaje principal en 3 segundos" },
    { id: "O3", condition: "Con el plan gratuito de Canva", action: "crear un diseño del tamaño correcto a partir de una plantilla o de una página en blanco, cambiando el texto, los colores, las fuentes y las imágenes", standard: "con no más de 2 fuentes y 3 colores principales, y sin elementos pagados" },
    { id: "O4", condition: "Antes de compartir o imprimir un diseño", action: "revisar el diseño para comprobar que el contraste se lee bien, que la ortografía y los datos son correctos y que tienes derecho a usar cada imagen", standard: "corrigiendo cada problema que encuentres" },
    { id: "O5", condition: "Cuando un diseño está terminado", action: "exportar el diseño en el tipo de archivo correcto y agregarlo a un portafolio con una descripción corta", standard: "PDF para imprimir y PNG o JPG para pantallas, con un nombre de archivo claro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Bases del diseño",
      lessons: [
        {
          title: "Qué hacen los diseñadores gráficos, y el brief de diseño",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escribir un brief de diseño que indique el público, el mensaje, el formato y el tamaño.",
          text: [
            "Los diseñadores gráficos usan imágenes, palabras, colores y composición para transmitir un mensaje. Hacen volantes, publicaciones para redes sociales, menús, letreros, logotipos, presentaciones e informes. La Oficina de Estadísticas Laborales de EE. UU. (BLS, por sus siglas en inglés) dice que los empleadores miran con atención el portafolio: una colección de tus mejores trabajos.",
            "El trabajo de diseño viene en muchas formas: un puesto interno en una empresa u organización sin fines de lucro, un puesto de asistente de redes sociales o de marketing, una imprenta, o trabajo independiente para negocios locales. Muchos trabajos de diseño piden un título o formación técnica, pero un buen portafolio ayuda en todos los niveles. Las certificaciones de software, como Adobe Certified Professional (exámenes que ofrece Certiport, una empresa de exámenes de certificación), pueden darte ventaja más adelante. Este curso te prepara para hacer tu primera pieza de portafolio; no otorga un certificado.",
            "Todo buen diseño empieza con un brief: un plan corto que responde cuatro preguntas. ¿Para quién es (el público)? ¿Cuál es el único mensaje principal? ¿Qué formato tiene (volante, publicación en redes, póster, menú)? ¿De qué tamaño es? Si no puedes responder estas preguntas, pregúntale al cliente antes de empezar."
          ],
          steps: ["Pregunta para quién es el diseño.", "Pide el único mensaje principal y los datos que no pueden faltar (fecha, lugar, precio, contacto).", "Pregunta qué formato tiene y dónde se va a usar.", "Anota el tamaño, como tamaño carta para un volante o cuadrado para una publicación en redes.", "Léele el brief al cliente y consigue un sí antes de diseñar."],
          words: [["Diseño gráfico", "usar palabras, imágenes, colores y composición para compartir un mensaje."], ["Brief de diseño", "un plan corto y por escrito para un diseño: público, mensaje, formato y tamaño."], ["Portafolio", "una colección de tus mejores trabajos que muestras a empleadores o clientes."], ["Independiente (freelance)", "trabajar por tu cuenta y hacer proyectos pagados para distintos clientes."]],
          slides: [
            { title: "Qué hacen los diseñadores gráficos", bullets: ["Volantes, publicaciones en redes, menús, letreros", "Logotipos, presentaciones e informes", "Los empleadores miran con atención tu portafolio"] },
            { title: "Dónde hay trabajo de diseño", bullets: ["Puesto interno en una empresa u organización sin fines de lucro", "Asistente de redes sociales o de marketing", "Imprentas y trabajo independiente"] },
            { title: "El brief de diseño: 4 partes", bullets: ["Público: ¿para quién es?", "Mensaje: ¿cuál es la única idea principal?", "Formato: ¿volante, publicación, póster?", "Tamaño: ¿carta, A4, cuadrado?"] },
            { title: "Antes de diseñar", bullets: ["Consigue los datos que no pueden faltar", "Léele el brief al cliente", "Consigue un sí y luego empieza"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Diseñadores gráficos", url: "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm" },
            { name: "Certiport: Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Overview" }
          ],
          tryIt: "Elige un cliente real o de práctica, como una recaudación de fondos con lavado de autos, una barbería o tu propio negocio. Escribe un brief de un párrafo que indique el público, el mensaje principal, el formato y el tamaño. Guárdalo para la tarea final.",
          youCanNow: "decir qué hacen los diseñadores gráficos y escribir un brief de diseño de cuatro partes.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál de estas cosas va en un brief de diseño?", options: ["El público, el mensaje principal, el formato y el tamaño", "Solo tu color favorito", "El precio del software de diseño", "Una lista de todas las fuentes que conoces"], answer: 0, why: "Un brief responde para quién es, qué dice, qué es y qué tamaño tiene." },
            { objective: "O1", q: "Un cliente te dice: \"Hazme un volante\". ¿Qué haces primero?", options: ["Empezar a diseñar de inmediato", "Copiar el volante de otro negocio", "Preguntar por el público, el mensaje y el tamaño, y escribir un brief", "Elegir cinco fuentes"], answer: 2, why: "Preguntar primero y escribir un brief evita trabajo perdido y tener que rehacer el diseño." }
          ]
        },
        {
          title: "Reglas de composición que hacen un diseño fácil de leer",
          objectives: ["O2"],
          minutes: 5,
          goal: "Organizar un diseño para que el mensaje principal se vea primero.",
          text: [
            "La gente mira un volante o una publicación solo unos segundos. Cinco reglas sencillas le ayudan a entender el mensaje rápido.",
            "Jerarquía: haz que lo más importante sea lo más grande o lo más llamativo, luego lo siguiente en importancia y después los detalles. Alineación: alinea los elementos en el mismo borde o en la misma línea central para que el diseño se vea ordenado. Contraste: haz que lo importante se vea distinto, por ejemplo texto oscuro sobre un fondo claro o un título grande junto a detalles pequeños.",
            "Repetición: usa otra vez los mismos colores, fuentes y formas para que el diseño se sienta como una sola pieza. Espacio en blanco: deja espacio vacío alrededor de los elementos. El espacio vacío no es espacio perdido; deja descansar la vista y hace que el mensaje principal resalte.",
            "Una prueba rápida: muéstrale tu diseño a alguien durante 3 segundos y luego escóndelo. Pregúntale de qué se trataba. Si no puede decir el mensaje principal, haz el título más grande y quita palabras de sobra."
          ],
          steps: ["Elige el único mensaje principal y hazlo el texto más grande.", "Pon los detalles (fecha, lugar, contacto) en texto más pequeño.", "Alinea el texto y las imágenes en los mismos bordes.", "Usa otra vez los mismos colores y fuentes.", "Quita todo lo que no ayude al mensaje.", "Haz la prueba de los 3 segundos con otra persona."],
          words: [["Jerarquía", "mostrar primero lo más importante haciéndolo más grande, más llamativo o poniéndolo más arriba en la página."], ["Alineación", "poner los elementos en línea en el mismo borde o en la misma línea central."], ["Contraste", "una diferencia clara, como oscuro sobre claro o grande junto a pequeño."], ["Espacio en blanco", "espacio vacío alrededor y entre los elementos de un diseño."]],
          slides: [
            { title: "Cinco reglas de composición", bullets: ["Jerarquía: lo más importante = lo más grande", "Alineación: pon los elementos en línea", "Contraste: haz que lo clave resalte", "Repetición y espacio en blanco"] },
            { title: "El espacio en blanco no es espacio perdido", bullets: ["Deja descansar la vista", "Hace que el mensaje principal resalte", "Quita palabras e imágenes de sobra"] },
            { title: "La prueba de los 3 segundos", bullets: ["Muestra el diseño 3 segundos y luego escóndelo", "Pregunta: ¿de qué se trataba?", "Si no pueden decirlo, haz el título más grande"] }
          ],
          tryIt: "Busca un volante o un anuncio cerca de ti (en una pared, en el correo o en internet). En papel, escribe las cinco reglas y marca cuáles usa bien y cuáles rompe. Luego dibuja una mejor composición para tu propio brief: título, imagen y detalles en recuadros.",
          youCanNow: "usar jerarquía, alineación, contraste, repetición y espacio en blanco para planear una composición, y probarla en 3 segundos.",
          quickCheck: [
            { objective: "O2", q: "En el volante de un evento, ¿qué debe ser normalmente el texto más grande?", options: ["El número de teléfono", "La letra pequeña", "La dirección del sitio web", "El mensaje principal, como el nombre del evento"], answer: 3, why: "La jerarquía pone primero el mensaje principal para que la gente lo entienda en segundos." },
            { objective: "O2", q: "Tu diseño se ve amontonado. ¿Qué arreglo sigue las reglas de composición?", options: ["Agregar más imágenes", "Quitar palabras de sobra y dejar más espacio en blanco", "Usar cinco fuentes distintas", "Poner todo el texto del mismo tamaño"], answer: 1, why: "El espacio en blanco y menos palabras hacen que el mensaje principal resalte." }
          ]
        },
        {
          title: "Elegir colores y fuentes",
          objectives: ["O2", "O4"],
          minutes: 5,
          goal: "Elegir una paleta de colores sencilla y un par de fuentes que se lean fácilmente.",
          text: [
            "Mantenlo sencillo: elige 2 o 3 colores principales más un neutro, como blanco, negro o gris. Si el cliente tiene colores de marca, usa esos. Usar los mismos colores en cada pieza hace que un negocio sea fácil de reconocer.",
            "Usa no más de 2 fuentes: una para los títulos y otra para el texto. Una fuente gruesa y sencilla funciona para los títulos. Una fuente simple y fácil de leer funciona para los detalles. Las fuentes de estilo manuscrito o decorativo son difíciles de leer en tamaño pequeño, así que guárdalas para una o dos palabras.",
            "El texto tiene que resaltar sobre su fondo. Las pautas de accesibilidad web (WCAG, del W3C, el grupo que fija los estándares de la web) piden una relación de contraste de al menos 4.5 a 1 para el texto normal y de 3 a 1 para el texto grande. Un verificador de contraste gratuito, como el de WebAIM, te da la relación cuando escribes los dos colores. El texto gris claro sobre blanco, o rojo sobre verde, muchas veces no pasa."
          ],
          steps: ["Anota 2 o 3 colores principales y un neutro.", "Elige una fuente para títulos y una fuente para el texto.", "Revisa cada color de texto contra su fondo en un verificador de contraste.", "Cambia cualquier par que esté por debajo de 4.5 a 1 para el texto normal."],
          words: [["Paleta de colores", "el pequeño grupo de colores que usas en un diseño."], ["Fuente", "un estilo de letra, como letras de molde gruesas o estilo manuscrito."], ["Relación de contraste", "un número que muestra qué tan distintos son dos colores en brillo; cuanto más alto, más fácil de leer."], ["Colores de marca", "los colores fijos que un negocio o grupo usa siempre para que la gente lo reconozca."]],
          slides: [
            { title: "Color", bullets: ["2 o 3 colores principales más un neutro", "Usa los colores de marca del cliente si los tiene", "Los mismos colores en cada pieza"] },
            { title: "Fuentes", bullets: ["No más de 2 fuentes", "Fuente gruesa y sencilla para los títulos", "Fuente simple para los detalles; manuscrita solo para una o dos palabras"] },
            { title: "Contraste que se lee bien", bullets: ["Al menos 4.5 a 1 para el texto normal", "Al menos 3 a 1 para el texto grande", "Revísalo con un verificador de contraste gratuito"] }
          ],
          sources: [
            { name: "W3C: Comprender el contraste (mínimo)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" },
            { name: "Verificador de contraste de WebAIM", url: "https://webaim.org/resources/contrastchecker/" }
          ],
          tryIt: "Para tu brief, anota 2 o 3 colores y un neutro, y elige una fuente para títulos y una para el texto. Abre un verificador de contraste gratuito, escribe el color de tu texto y el color de fondo, y anota la relación. Cambia cualquier par que esté por debajo de 4.5 a 1.",
          youCanNow: "elegir una paleta de colores sencilla y un par de fuentes, y comprobar que el texto se lee bien.",
          quickCheck: [
            { objective: "O2", q: "¿Cuántas fuentes debe usar normalmente un volante sencillo?", options: ["Cinco o más", "Una fuente distinta para cada línea", "No más de dos", "Solo fuentes manuscritas"], answer: 2, why: "Una fuente para títulos y una para el texto mantienen el diseño limpio y fácil de leer." },
            { objective: "O4", q: "Un verificador de contraste muestra que tu texto de tamaño normal tiene 2.8 a 1. ¿Qué haces?", options: ["Oscurecer el texto o aclarar el fondo hasta llegar al menos a 4.5 a 1", "Dejarlo así; cualquier relación sirve", "Hacer el texto más pequeño", "Poner un segundo color de fondo detrás"], answer: 0, why: "Las WCAG piden al menos 4.5 a 1 para el texto normal para que la mayoría de las personas pueda leerlo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Bases del diseño",
        questions: [
          { objective: "O1", q: "¿Qué es un brief de diseño?", options: ["Un volante terminado", "Un plan corto que indica el público, el mensaje, el formato y el tamaño", "Una factura que le mandas a un cliente", "Una lista de plantillas de Canva"], answer: 1, why: "El brief es el plan que acuerdan antes de diseñar." },
          { objective: "O1", q: "El dueño de un camión de comida quiere una publicación para un plato nuevo del menú. ¿Qué brief es más completo?", options: ["\"Que se vea bonito\".", "\"Publicación de comida\".", "\"Usa rojo\".", "\"Publicación cuadrada de Instagram para clientes locales a la hora del almuerzo: nuevo taco de pollo picante, $5, solo el viernes\"."], answer: 3, why: "Indica el formato y el tamaño, el público y el único mensaje principal." },
          { objective: "O2", q: "Poner el título, la imagen y los detalles en línea sobre el mismo borde izquierdo es un ejemplo de:", options: ["Alineación", "Repetición", "Contraste", "Jerarquía"], answer: 0, why: "Alineación significa poner los elementos en línea sobre el mismo borde o la misma línea central." },
          { objective: "O2", q: "Le muestras tu volante a un amigo durante 3 segundos y no puede decir de qué se trata. ¿Cuál es el mejor arreglo?", options: ["Agregar más detalles", "Usar más colores", "Hacer más grande el mensaje principal y quitar palabras de sobra", "Hacer la imagen más pequeña"], answer: 2, why: "Una jerarquía más fuerte y menos palabras hacen claro el mensaje principal." },
          { objective: "O2", q: "¿Por qué usar los mismos colores y fuentes en cada pieza para un cliente?", options: ["Lo exige la ley", "Canva solo permite un color", "Gasta menos tinta", "La repetición hace que el negocio sea fácil de reconocer"], answer: 3, why: "La repetición une las piezas y hace que la gente reconozca la marca." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacerlo en Canva",
      lessons: [
        {
          title: "Crear un diseño en el plan gratuito de Canva",
          objectives: ["O3"],
          minutes: 6,
          goal: "Crear un diseño del tamaño correcto a partir de una plantilla y hacerlo tuyo.",
          text: [
            "Canva funciona en un navegador web en canva.com o en la aplicación de Canva. Crea una cuenta gratuita con tu correo electrónico. El plan gratuito incluye muchas plantillas, fuentes, fotos y gráficos. Algunos elementos son solo para planes pagados y están marcados como Pro o premium; déjalos fuera para que tu diseño siga siendo gratis.",
            "Empieza por el tamaño. Usa la búsqueda o el botón de crear y escribe el formato que necesitas, como \"Flyer\" (volante) o \"Publicación de Instagram\". Canva abre una página de ese tamaño. También puedes poner un tamaño personalizado. Las escuelas, los estudiantes y las organizaciones sin fines de lucro pueden calificar para planes mejorados gratis; revisa las páginas de Canva para Educación y para Organizaciones sin fines de lucro.",
            "Una plantilla es un diseño ya hecho. Es un punto de partida, no el trabajo terminado. Cambia las palabras según tu brief, cambia los colores a tu paleta, usa tus dos fuentes, pon tus propias fotos y borra todo lo que no ayude al mensaje. Los empleadores notan cuando una plantilla no se cambió.",
            "Usa el panel lateral para agregar texto, formas y gráficos, y para subir tus propias fotos. Canva guarda tu trabajo mientras avanzas. Ponle a tu diseño un nombre claro para que puedas encontrarlo otra vez."
          ],
          steps: ["Inicia sesión en Canva en una computadora o en la aplicación.", "Busca el formato que necesitas, como Flyer (volante), o pon un tamaño personalizado.", "Elige una plantilla que se parezca a tu boceto de composición, o empieza en blanco.", "Cambia el texto por el mensaje y los detalles de tu brief.", "Cambia los colores y las fuentes a tu paleta y tu par de fuentes.", "Sube tus propias fotos o usa imágenes gratuitas que tienes permiso de usar.", "Borra todo lo que no ayude al mensaje y luego ponle nombre al diseño."],
          words: [["Plantilla", "un diseño ya hecho que cambias para hacerlo tuyo."], ["Plan gratuito", "la versión de Canva que puedes usar sin pagar."], ["Elemento Pro o premium", "una plantilla, foto o gráfico que necesita un plan pagado."], ["Tamaño personalizado", "un tamaño de página que escribes tú, en pulgadas, píxeles o milímetros."]],
          slides: [
            { title: "Para empezar", bullets: ["canva.com en un navegador o la aplicación de Canva", "Cuenta gratuita con tu correo electrónico", "Deja fuera los elementos marcados como Pro o premium"] },
            { title: "Empieza por el tamaño", bullets: ["Busca el formato: Flyer, publicación de Instagram", "O pon un tamaño personalizado", "Revisa las páginas de Canva para Educación y sin fines de lucro"] },
            { title: "Haz tuya la plantilla", bullets: ["Tus palabras, tus colores y tus dos fuentes", "Tus propias fotos", "Borra lo que no ayude al mensaje"] },
            { title: "Termina el borrador", bullets: ["Sube fotos desde el panel lateral", "Canva guarda mientras avanzas", "Ponle al diseño un nombre claro"] }
          ],
          sources: [
            { name: "Canva", url: "https://www.canva.com/" },
            { name: "Canva para Educación (revisa quién califica)", url: "https://www.canva.com/education/" },
            { name: "Canva para Organizaciones sin fines de lucro (revisa quién califica)", url: "https://www.canva.com/canva-for-nonprofits/" }
          ],
          tryIt: "Abre Canva, busca Flyer y elige una plantilla que se parezca a tu boceto de la Lección 2. Cambia el texto, los colores y las fuentes según tu brief y tu paleta, agrega una foto que tomaste tú y borra lo que sobre. Ponle al diseño el nombre del cliente y la fecha.",
          youCanNow: "crear un diseño del tamaño correcto en el plan gratuito de Canva y cambiar una plantilla para que se ajuste a tu brief.",
          quickCheck: [
            { objective: "O3", q: "Necesitas un volante en Canva. ¿Qué haces primero?", options: ["Descargar una imagen cualquiera", "Buscar el formato Flyer o poner el tamaño correcto", "Elegir cinco fuentes", "Pagar un plan"], answer: 1, why: "Empezar en el tamaño correcto te evita rehacer la composición después." },
            { objective: "O3", q: "Quieres que tu diseño siga siendo gratis. Un gráfico está marcado como Pro. ¿Qué haces?", options: ["Usarlo y esperar que nadie lo note", "Tomarle una captura de pantalla", "Copiarlo de otro sitio", "Elegir un gráfico gratuito en su lugar"], answer: 3, why: "Los elementos Pro necesitan un plan pagado; elegir elementos gratuitos mantiene el diseño gratis y con la licencia correcta." }
          ]
        },
        {
          title: "Imágenes, derechos y la revisión final",
          objectives: ["O4"],
          minutes: 5,
          goal: "Revisar un diseño en cuanto a derechos, legibilidad, ortografía y datos antes de compartirlo.",
          text: [
            "No todas las imágenes de internet se pueden usar gratis. En Estados Unidos, una obra está protegida por derechos de autor desde que se crea, aunque no tenga la marca ©. Eso significa que no puedes copiar una foto, un logotipo o un dibujo de un sitio web o de otro negocio solo porque lo encontraste.",
            "Las imágenes seguras son las que tomaste o hiciste tú, las imágenes dentro de Canva que tu plan te permite usar (lee los términos de licencia de Canva en su sitio) y las imágenes de fuentes gratuitas cuya licencia permite claramente tu uso. Nunca uses el logotipo de otra empresa, la foto de una celebridad o el emblema de un equipo deportivo sin permiso por escrito. Si usas IA para hacer una imagen, revisa las reglas de la herramienta y revisa la imagen por errores, como manos extrañas o texto equivocado.",
            "Antes de compartir o imprimir, haz la revisión final: ¿Se entiende el mensaje principal en 3 segundos? ¿Se lee bien cada color de texto (contraste)? ¿Está bien escrita cada palabra, y son correctos la fecha, la hora, el lugar, el precio y el contacto? ¿Tienes derecho a usar cada imagen y cada fuente? Pide al cliente o a otra persona que lo lea también. Cuando publiques en internet, agrega texto alternativo (una descripción corta de la imagen) si el sitio lo permite, para que las personas que usan lectores de pantalla sepan qué muestra."
          ],
          steps: ["Haz otra vez la prueba de los 3 segundos.", "Revisa cada color de texto contra su fondo.", "Lee cada palabra despacio y en voz alta para revisar la ortografía.", "Compara la fecha, la hora, el lugar, el precio y el contacto con el brief.", "Anota de dónde salió cada imagen y por qué puedes usarla.", "Pide a otra persona que lo lea y luego corrige lo que encuentre."],
          words: [["Derechos de autor", "el derecho legal de quien hizo una obra a controlar las copias de esa obra."], ["Licencia", "permiso, con reglas, para usar el trabajo de otra persona."], ["Texto alternativo", "una descripción corta y escrita de una imagen para las personas que no pueden verla."], ["Corregir el texto", "leer despacio para encontrar y arreglar errores."]],
          slides: [
            { title: "No todas las imágenes son gratis", bullets: ["Una obra tiene derechos de autor desde que se crea", "Que no tenga la marca © no significa que sea gratis", "Nunca copies logotipos ni fotos de otros negocios"] },
            { title: "Imágenes seguras", bullets: ["Fotos que tomaste tú", "Imágenes de Canva que tu plan te permite usar", "Fuentes gratuitas cuya licencia permite tu uso"] },
            { title: "La revisión final", bullets: ["¿Se entiende en 3 segundos?", "¿El contraste se lee bien?", "¿Ortografía y datos correctos?", "¿Derechos de cada imagen?"] },
            { title: "Antes de publicar", bullets: ["Pide a otra persona que lo lea", "Agrega texto alternativo donde el sitio lo permita"] }
          ],
          sources: [
            { name: "Oficina de Derechos de Autor de EE. UU.: Preguntas frecuentes básicas", url: "https://www.copyright.gov/help/faq/faq-general.html" },
            { name: "W3C: Comprender el contraste (mínimo)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" }
          ],
          tryIt: "Haz la revisión final de tu volante de Canva. Escribe una lista de cada imagen y de dónde salió. Lee cada palabra en voz alta, compara los detalles con tu brief y revisa un color de texto en un verificador de contraste. Corrige cada problema que encuentres.",
          youCanNow: "revisar un diseño en cuanto a derechos, legibilidad, ortografía y datos, y corregirlo antes de compartirlo.",
          quickCheck: [
            { objective: "O4", q: "Encuentras una foto excelente en el sitio web de otra panadería y no tiene la marca ©. ¿Puedes usarla en el volante de tu cliente?", options: ["No; sigue protegida, así que usa una tuya o una imagen con licencia", "Sí, porque no tiene la marca ©", "Sí, si la haces más pequeña", "Sí, si le cambias el color"], answer: 0, why: "Los derechos de autor protegen una obra desde que se crea, tenga la marca o no." },
            { objective: "O4", q: "¿Qué paso es parte de la revisión final antes de imprimir?", options: ["Agregar una tercera fuente", "Hacer el título más pequeño", "Comparar la fecha, el lugar y el precio con el brief", "Quitar todo el espacio en blanco"], answer: 2, why: "Un dato equivocado en un volante impreso le cuesta al cliente dinero y confianza." }
          ]
        },
        {
          title: "Exportar, recibir comentarios y armar un portafolio",
          objectives: ["O5", "O3"],
          minutes: 5,
          goal: "Exportar un diseño en el tipo de archivo correcto y agregarlo a un portafolio con una descripción.",
          text: [
            "Cuando el diseño pase la revisión final, compártelo para recibir comentarios antes de la exportación final. Canva tiene un botón Compartir con el que puedes enviar un enlace para ver el diseño. Haz una sola pregunta clara, como \"¿Hay algo confuso o equivocado?\", y luego haz los cambios que acuerdes con el cliente.",
            "Exporta en el tipo de archivo correcto. Abre Compartir y elige Descargar. Usa PDF para todo lo que se va a imprimir, como un volante. Usa PNG para publicaciones en redes sociales y gráficos con texto, porque mantiene el texto nítido. JPG sirve para fotos cuando importa que el archivo sea más pequeño. Ponle al archivo un nombre claro, por ejemplo: carwash-flyer-2026-11.pdf.",
            "Haz una pieza que combine. Empieza un diseño nuevo del tamaño de una publicación en redes y usa los mismos colores, fuentes y foto, para que el conjunto se vea como una sola campaña. Los clientes muchas veces quieren un volante y una publicación juntos.",
            "Agrega el trabajo a tu portafolio. Un portafolio puede ser una carpeta, un sitio web gratuito o un PDF sencillo. Para cada pieza, escribe 3 a 4 oraciones: el objetivo, para quién era, las decisiones de diseño que tomaste y el resultado. Muestra trabajos de clientes solo si el cliente dice que sí, y nunca incluyas datos privados."
          ],
          steps: ["Comparte un enlace para ver el diseño y haz una pregunta clara para recibir comentarios.", "Haz los cambios acordados.", "Abre Compartir, luego Descargar, y elige PDF para imprimir o PNG para pantallas.", "Ponle al archivo el nombre del proyecto y la fecha.", "Haz una publicación para redes que combine, con los mismos colores y fuentes.", "Escribe una descripción de portafolio de 3 a 4 oraciones y agrega los dos archivos."],
          words: [["Exportar", "guardar un diseño como un archivo que puedes imprimir, publicar o enviar."], ["PDF", "un tipo de archivo que mantiene la composición igual en todas partes; el mejor para imprimir."], ["PNG", "un tipo de archivo de imagen que mantiene nítidos el texto y los bordes; bueno para pantallas."], ["JPG", "un tipo de archivo de imagen que hace más pequeñas las fotos; el texto puede verse un poco borroso."]],
          slides: [
            { title: "Primero recibe comentarios", bullets: ["Comparte un enlace para ver el diseño", "Haz una sola pregunta clara", "Haz los cambios que acuerdes con el cliente"] },
            { title: "Elige el tipo de archivo correcto", bullets: ["PDF para imprimir, como los volantes", "PNG para publicaciones en redes y texto", "JPG para fotos cuando importa el tamaño"] },
            { title: "Haz un conjunto", bullets: ["Diseño nuevo del tamaño de una publicación en redes", "Los mismos colores, fuentes y foto"] },
            { title: "Descripción para el portafolio", bullets: ["El objetivo y para quién era", "Tus decisiones de diseño", "El resultado; pregúntale al cliente antes de mostrarlo"] }
          ],
          tryIt: "Comparte tu volante con una persona y pregúntale: \"¿Hay algo confuso o equivocado?\". Corrige lo que encuentre. Descarga el volante como PDF, haz una publicación cuadrada que combine y descárgala como PNG, ponles nombres claros a los dos archivos y escribe tu descripción de portafolio de 3 a 4 oraciones.",
          youCanNow: "recibir comentarios, exportar un diseño en el tipo de archivo correcto, hacer una pieza que combine y agregarla a un portafolio con una descripción.",
          quickCheck: [
            { objective: "O5", q: "Tu volante va a una imprenta. ¿Qué tipo de archivo es mejor?", options: ["Una captura de pantalla", "Un JPG de una foto", "Un PNG hecho para un teléfono", "Un PDF"], answer: 3, why: "El PDF mantiene la composición igual y es la opción habitual para imprimir." },
            { objective: "O5", q: "¿Qué va en una descripción de portafolio?", options: ["La dirección de la casa del cliente", "El objetivo, para quién era, tus decisiones de diseño y el resultado", "Solo el nombre del archivo", "Tu contraseña de Canva"], answer: 1, why: "Una historia corta del objetivo, las decisiones y el resultado muestra a los empleadores cómo piensas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacerlo en Canva",
        questions: [
          { objective: "O3", q: "¿Qué es una plantilla en Canva?", options: ["Una suscripción pagada", "Un tipo de archivo para imprimir", "Un diseño ya hecho que cambias para hacerlo tuyo", "Una licencia de derechos de autor"], answer: 2, why: "Las plantillas son puntos de partida; tú cambias las palabras, los colores, las fuentes y las imágenes." },
          { objective: "O3", q: "Un empleador mira tu diseño y nota que es una plantilla sin cambios. ¿Qué debiste hacer?", options: ["Cambiar el texto, los colores, las fuentes y las imágenes para que se ajusten al brief", "Usar más elementos Pro", "Agregar una tercera fuente", "Exportarlo como JPG"], answer: 0, why: "Hacer tuya la plantilla demuestra una habilidad real de diseño." },
          { objective: "O4", q: "¿Qué imagen es segura para usar en el volante de un cliente?", options: ["El logotipo de un equipo deportivo sacado de su sitio web", "Una foto que tomaste tú", "La foto de una celebridad de un sitio de noticias", "La foto del producto de un competidor"], answer: 1, why: "Tus propias fotos son tuyas; las demás necesitan permiso por escrito." },
          { objective: "O4", q: "El texto gris claro sobre un fondo blanco es difícil de leer. ¿Qué pauta rompe?", options: ["Jerarquía", "Repetición", "Nombres de archivo", "Contraste que se lee bien"], answer: 3, why: "El texto necesita suficiente contraste con su fondo para poder leerse." },
          { objective: "O5", q: "¿Qué tipo de archivo es mejor para una publicación en redes sociales con palabras?", options: ["PNG", "PDF para imprimir", "Un documento de Word", "Una captura de tu pantalla"], answer: 0, why: "El PNG mantiene nítidos el texto y los bordes en las pantallas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Diseño gráfico con Canva",
    questions: [
      { objective: "O1", q: "¿Qué hacen los diseñadores gráficos?", options: ["Arreglan computadoras", "Escriben leyes sobre imágenes", "Usan palabras, imágenes, colores y composición para compartir un mensaje", "Venden impresoras"], answer: 2, why: "El diseño gráfico es comunicación visual." },
      { objective: "O1", q: "¿Qué miran con atención los empleadores cuando contratan diseñadores?", options: ["Un portafolio con tus mejores trabajos", "Cuántos seguidores tienes en redes sociales", "Cuántas fuentes tienes", "Qué tan rápido escribes a máquina"], answer: 0, why: "La BLS señala que el portafolio es clave para los trabajos de diseño." },
      { objective: "O1", q: "¿Cuál NO es una de las cuatro partes de un brief de diseño?", options: ["Público", "Mensaje principal", "Tamaño", "Tu color favorito"], answer: 3, why: "El brief trata del público, el mensaje, el formato y el tamaño que necesita el cliente." },
      { objective: "O1", q: "Una organización sin fines de lucro pide \"algo para la colecta de alimentos\". ¿Cuál es tu mejor siguiente paso?", options: ["Diseñar un logotipo", "Preguntar para quién es, el mensaje principal, el formato y el tamaño, y luego escribir un brief", "Copiar el volante del año pasado de otro grupo", "Elegir una plantilla al azar"], answer: 1, why: "Un brief convierte un pedido vago en un plan claro." },
      { objective: "O2", q: "¿Qué regla usas al hacer que el nombre del evento sea el texto más grande de la página?", options: ["Repetición", "Jerarquía", "Espacio en blanco", "Alineación"], answer: 1, why: "La jerarquía muestra primero lo que más importa." },
      { objective: "O2", q: "¿Qué es el espacio en blanco?", options: ["Cualquier color blanco", "Una función pagada de Canva", "Un error de impresión", "Espacio vacío alrededor y entre los elementos"], answer: 3, why: "El espacio en blanco deja descansar la vista y hace que el mensaje resalte." },
      { objective: "O2", q: "¿Qué es la prueba de los 3 segundos?", options: ["Mostrar el diseño 3 segundos y preguntar de qué se trataba", "Exportar el diseño en 3 segundos", "Usar 3 fuentes", "Publicar el diseño 3 veces"], answer: 0, why: "Si la gente no puede decir el mensaje después de 3 segundos, hay que mejorar la jerarquía." },
      { objective: "O2", q: "Una paleta de colores sencilla para un volante normalmente es:", options: ["Todos los colores del arcoíris", "Un color para cada línea de texto", "2 o 3 colores principales más un neutro", "Solo rojo y verde"], answer: 2, why: "Una paleta pequeña se ve limpia y es fácil de repetir." },
      { objective: "O3", q: "En Canva, ¿cómo empiezas un volante del tamaño correcto?", options: ["Buscas el formato Flyer o pones un tamaño personalizado", "Empiezas con cualquier página y la estiras", "Lo haces como publicación en redes y lo imprimes", "Dibujas los bordes a mano"], answer: 0, why: "Empezar en el tamaño correcto evita rehacer la composición." },
      { objective: "O3", q: "¿Qué es cierto sobre el plan gratuito de Canva?", options: ["Todas las plantillas y fotos son gratis", "Tienes que pagar antes de hacer cualquier diseño", "Algunos elementos están marcados como Pro o premium y necesitan un plan pagado", "Solo funciona en teléfonos"], answer: 2, why: "El plan gratuito tiene muchos elementos gratis, pero algunos necesitan un plan pagado." },
      { objective: "O3", q: "¿Cuántas fuentes deben usar la mayoría de los diseños sencillos?", options: ["Una para cada oración", "No más de dos", "Al menos cinco", "Solo fuentes manuscritas"], answer: 1, why: "Una fuente para títulos y una para el texto lo mantienen fácil de leer." },
      { objective: "O3", q: "¿Dónde agregas tus propias fotos en Canva?", options: ["En el menú Descargar", "En el nombre del archivo", "En el verificador de contraste", "Subiéndolas desde el panel lateral"], answer: 3, why: "El panel lateral es donde agregas texto, gráficos y lo que subes." },
      { objective: "O4", q: "Una foto de un sitio web no tiene la marca ©. ¿Qué es cierto?", options: ["Es gratis para cualquiera", "Es de Canva", "Es gratis si la recortas", "Todavía puede estar protegida por derechos de autor"], answer: 3, why: "En Estados Unidos, una obra está protegida desde que se crea, con o sin la marca." },
      { objective: "O4", q: "¿Qué relación de contraste piden las WCAG para el texto de tamaño normal?", options: ["1 a 1", "Al menos 4.5 a 1", "Al menos 2 a 1", "Exactamente 10 a 1"], answer: 1, why: "4.5 a 1 es el mínimo para el texto normal; el texto grande necesita 3 a 1." },
      { objective: "O4", q: "¿Qué es el texto alternativo?", options: ["Una segunda fuente", "Un tipo de archivo", "Una descripción corta de una imagen para las personas que no pueden verla", "Una plantilla de Canva"], answer: 2, why: "El texto alternativo permite que los lectores de pantalla describan la imagen." },
      { objective: "O4", q: "Antes de imprimir 500 volantes, ¿cuál es la revisión más importante?", options: ["Que la ortografía, la fecha, el lugar, el precio y el contacto coincidan con el brief", "Que usaste todos los colores", "Que el archivo sea lo más grande posible", "Que la plantilla no se haya cambiado"], answer: 0, why: "Los errores en volantes impresos cuestan caro y son difíciles de arreglar." },
      { objective: "O5", q: "¿Qué tipo de archivo es mejor para un volante impreso?", options: ["JPG", "Una captura de pantalla", "PDF", "Un archivo de texto"], answer: 2, why: "El PDF mantiene la composición igual y es el estándar para imprimir." },
      { objective: "O5", q: "¿Cuál es el nombre de archivo más claro?", options: ["carwash-flyer-2026-11.pdf", "final-final-2.pdf", "untitled.pdf", "aaa.pdf"], answer: 0, why: "Dice el proyecto y la fecha, para que tú y el cliente puedan encontrarlo." },
      { objective: "O5", q: "Antes de poner el volante de un cliente en tu portafolio, debes:", options: ["Agregar su número de teléfono privado", "Quitar tu nombre", "Convertirlo en JPG", "Preguntarle al cliente si puedes mostrarlo"], answer: 3, why: "Mostrar el trabajo de un cliente necesita su permiso." },
      { objective: "O5", q: "¿Por qué hacer una publicación para redes que combine con el volante?", options: ["Canva lo exige", "Los clientes muchas veces quieren un conjunto que se vea como una sola campaña", "Cambia el tipo de archivo", "Quita los derechos de autor"], answer: 1, why: "Un conjunto con los mismos colores y fuentes ayuda a que la gente reconozca la marca." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [2, 4, 5, 9, 12, 13, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Brief de diseño", objective: "O1", notYet: "Al brief le falta el público, el mensaje, el formato o el tamaño.", meets: "Un párrafo corto indica las cuatro partes.", exceeds: "También anota los datos que no pueden faltar y se le leyó al cliente." },
      { name: "Composición", objective: "O2", notYet: "Quien lo ve no puede decir el mensaje principal después de 3 segundos, o la composición se ve amontonada.", meets: "El mensaje principal se ve claramente primero, los elementos están alineados y hay espacio en blanco.", exceeds: "El volante y la publicación usan las mismas ideas de composición, así que se ven como un conjunto." },
      { name: "Hecho en Canva", objective: "O3", notYet: "Tamaño equivocado, más de 2 fuentes, un elemento pagado o una plantilla sin cambios.", meets: "Tamaño correcto, no más de 2 fuentes y 3 colores principales, solo elementos gratuitos, y la plantilla se hizo propia.", exceeds: "Empezó desde una página en blanco o cambió tanto la plantilla que es claramente un diseño propio." },
      { name: "Revisado", objective: "O4", notYet: "Un error de ortografía o de datos, texto que no se lee bien, o una imagen sin un derecho claro de uso.", meets: "Sin errores, el texto pasa 4.5 a 1 y cada imagen está anotada con su origen.", exceeds: "Otra persona lo corrigió y hay texto alternativo escrito para la publicación." },
      { name: "Exportado y descrito", objective: "O5", notYet: "Tipo de archivo equivocado, nombre de archivo poco claro o sin descripción.", meets: "Volante en PDF, publicación en PNG, nombres de archivo claros y una descripción de 3 a 4 oraciones.", exceeds: "La descripción explica por qué cada decisión de diseño le sirve al público, y el cliente aceptó que se muestre." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que agregan la pieza a un portafolio y la usan en una solicitud de empleo, de prácticas o de trabajo independiente dentro de 30 días (encuesta de seguimiento)",
      "Participantes que dicen haber hecho un diseño pagado o voluntario para un negocio, un equipo o una organización sin fines de lucro dentro de 30 días",
      "Organizaciones aliadas y pequeños negocios que dicen usar volantes y publicaciones hechos por los participantes"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Una computadora con internet (lo más fácil) o un teléfono inteligente con la aplicación de Canva",
      "Una cuenta gratuita de Canva (se necesita una dirección de correo electrónico para registrarse)",
      "Un verificador de contraste gratuito, como el de WebAIM",
      "Papel y bolígrafo para los bocetos de composición y el brief",
      "La cámara de un teléfono para tomar tus propias fotos",
      "Unas 2 a 3 horas en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; muestre la prueba de los 3 segundos y la transformación de una plantilla en una pantalla compartida.",
      "Cuando se pueda, junte a los participantes con un cliente local real (una organización sin fines de lucro, un club escolar o un pequeño negocio); eso hace que el brief y el portafolio sean reales.",
      "No deje que los participantes copien logotipos ni fotos de internet; pídales que anoten el origen de cada imagen.",
      "Si su escuela u organización sin fines de lucro puede calificar para los planes de Canva para Educación o para Organizaciones sin fines de lucro, revise los requisitos en el sitio de Canva antes del curso, pero planee cada tarea para que funcione con el plan gratuito.",
      "Califique la tarea final con la rúbrica y haga una breve galería en la que los participantes den un comentario amable y uno útil sobre cada pieza."
    ]
  }
};

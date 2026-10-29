"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-essential-ai-tools-es",
  lang: "es",
  translationOf: "nonprofit-essential-ai-tools",
  category: "Non Profits",
  name: "Herramientas de IA esenciales para organizaciones sin fines de lucro y cómo usarlas",
  skills: "Elegir la herramienta de IA correcta para una tarea, Encontrar programas de tecnología para organizaciones sin fines de lucro, Resumir reuniones y documentos, Hacer volantes y gráficos con IA, Armar un kit sencillo de herramientas para tu equipo",
  outcome: "elegir la herramienta de IA gratis o con descuento para organizaciones sin fines de lucro adecuada para una tarea, usar un asistente de chat para convertir notas sueltas de una reunión en un resumen claro con tareas pendientes, usar una herramienta de diseño para hacer un volante para voluntarios y escribir una tarjeta de herramientas de una página que tu equipo pueda seguir.",
  about: [
    "Este curso es para personal y voluntarios de organizaciones sin fines de lucro y comunidades de fe que quieren una lista corta y práctica de herramientas de IA y saber cómo usar cada una.",
    "Vas a aprender los cuatro tipos de herramientas de IA que más necesitan las organizaciones, dónde encontrar los programas para organizaciones sin fines de lucro de Google y Microsoft, y cómo hacer dos trabajos reales con IA: un resumen de reunión y un volante para voluntarios.",
    "Cada lección dura unos cinco minutos y termina con una tarea práctica. Los precios y los programas cambian, así que el curso te manda a las páginas oficiales para revisar antes de registrarte. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz una \"tarjeta de herramientas de IA\" de una página para tu equipo que nombre un asistente de chat, un paquete de oficina y una herramienta de diseño, diga para qué sirve cada uno y qué nunca debe entrar en ellos, y adjunta dos cosas que hiciste con ellos: un resumen de reunión con tareas pendientes (a partir de notas sin datos privados) y un volante para reclutar voluntarios.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personal y voluntarios de organizaciones sin fines de lucro y de fe que quieren una lista corta y práctica de herramientas de IA y saber usar cada una, muchas veces en organizaciones pequeñas sin personal de tecnología.",
    startingPoint: "Usan el correo, documentos y el teléfono todos los días, y quizás han probado un asistente de chat. La mayoría no sabe para qué programas de tecnología para organizaciones sin fines de lucro califica ni cómo configurar herramientas de forma segura para un equipo.",
    gap: "Los equipos pequeños muchas veces pagan por herramientas que podrían tener gratis o con descuento, usan cuentas personales que se van con los voluntarios y pasan horas en notas de reuniones y volantes. Necesitan un grupo pequeño y seguro de herramientas y una tarjeta del equipo que muestre a todos cómo usarlas.",
    constraints: [
      "Presupuesto: solo herramientas gratis o con descuento para organizaciones sin fines de lucro",
      "Los precios y las reglas de los programas cambian; cada quien revisa las páginas oficiales antes de solicitar",
      "Privacidad: nada de información privada de donantes, voluntarios o personas atendidas en ninguna herramienta, a menos que los líderes lo hayan aprobado",
      "Grabar reuniones necesita el acuerdo de todos; las fotos de niños necesitan permiso por escrito de su madre, padre o tutor",
      "Tiempo: unos 60 minutos en total, en lecciones de 5 minutos"
    ],
    prerequisites: "\"Introducción a la IA para organizaciones sin fines de lucro\", o algo de experiencia usando un asistente de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una tarea de una organización sin fines de lucro", action: "elegir el tipo de herramienta de IA correcto para ella: asistente de chat, paquete de oficina, herramienta de diseño o herramienta de reuniones y notas", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Usando las páginas oficiales de los programas", action: "identificar para qué programas de tecnología para organizaciones sin fines de lucro podría calificar tu organización y qué necesitas para solicitar", standard: "con las condiciones actuales revisadas en la página oficial" },
    { id: "O3", condition: "Cuando tu equipo empieza a usar una herramienta", action: "configurarla con una cuenta de la organización, inicio de sesión en dos pasos y sus controles de privacidad revisados", standard: "sin que entre información privada a menos que los líderes lo hayan aprobado" },
    { id: "O4", condition: "Con notas sueltas de una reunión", action: "quitar los datos privados y usar un asistente de chat para escribir un resumen con una tabla de tareas pendientes", standard: "con cada decisión y cada fecha revisadas con tus notas" },
    { id: "O5", condition: "Con un evento de voluntarios", action: "crear un volante para reclutar con texto escrito por la IA y una plantilla de una herramienta de diseño", standard: "con la fecha, la hora, el lugar y el contacto revisados y solo fotos con permiso" },
    { id: "O6", condition: "Para tu equipo", action: "escribir una tarjeta de herramientas de una página que nombre cada herramienta aprobada, para qué sirve y qué nunca debe entrar en ella", standard: "con tus mejores instrucciones agregadas y una fecha de revisión fijada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conocer tus herramientas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Los cuatro tipos de herramientas de IA que usa una organización",
          minutes: 4,
          goal: "Relacionar una tarea de la organización con el tipo correcto de herramienta de IA.",
          text: [
            "La mayor parte del trabajo con IA de una organización cabe en cuatro tipos de herramientas. Los asistentes de chat (ChatGPT, Microsoft Copilot, Google Gemini) escriben, explican y resumen. Los paquetes de oficina (Microsoft 365, Google Workspace) traen IA dentro del correo, los documentos y las hojas de cálculo.",
            "Las herramientas de diseño (como Canva o Adobe Express) ayudan a hacer volantes, publicaciones para redes sociales y diapositivas, muchas veces con funciones de IA. Las herramientas de reuniones y notas pueden grabar o transcribir una reunión y escribir un borrador de resumen, pero úsalas solo cuando todas las personas de la reunión estén de acuerdo.",
            "Empieza con una herramienta de cada tipo que tu organización ya tenga. Pocas herramientas bien usadas son mejores que muchas usadas una sola vez."
          ],
          words: [["Asistente de chat", "una IA a la que le escribes o hablas y que responde por escrito."], ["Paquete de oficina", "un conjunto de programas de trabajo: correo, documentos, hojas de cálculo, diapositivas."], ["Transcribir", "convertir palabras habladas en texto escrito."]],
          slides: [
            { title: "Cuatro tipos de herramientas de IA", bullets: ["Asistentes de chat: escriben, explican, resumen", "Paquetes de oficina: IA en el correo y los documentos", "Herramientas de diseño: volantes, publicaciones, diapositivas", "Herramientas de reuniones: transcripciones y resúmenes"] },
            { title: "Ejemplos", bullets: ["ChatGPT, Microsoft Copilot, Google Gemini", "Microsoft 365, Google Workspace", "Canva, Adobe Express"] },
            { title: "Hazlo sencillo", bullets: ["Empieza con lo que ya tienes", "Una herramienta por tipo", "Grabar reuniones solo con el permiso de todos"] }
          ],
          tryIt: "Anota las herramientas que tu organización ya usa (correo, documentos, diseño). Para cada una, escribe de cuál de los cuatro tipos es.",
          youCanNow: "nombrar los cuatro tipos de herramientas de IA y relacionar una tarea con la correcta.",
          quickCheck: [
            { objective: "O1", q: "¿Qué tipo de herramienta tiene IA dentro del correo, los documentos y las hojas de cálculo?", options: ["Un paquete de oficina", "Una herramienta de diseño", "Una grabadora de reuniones", "Un anuncio de búsqueda"], answer: 0, why: "Los paquetes de oficina como Microsoft 365 y Google Workspace tienen IA dentro de los programas de trabajo diario." },
            { objective: "O1", q: "Tu equipo ha probado ocho herramientas de IA una vez cada una. ¿Qué sugiere esta lección?", options: ["Probar ocho más", "Elegir una herramienta de cada tipo que ya tengas y usarla bien", "Dejar de usar la IA", "Usar solo herramientas de diseño"], answer: 1, why: "Pocas herramientas bien usadas valen más que muchas usadas una sola vez." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar programas gratis y con descuento para organizaciones sin fines de lucro",
          minutes: 5,
          goal: "Averiguar para qué programas de tecnología podría calificar tu organización y dónde solicitarlos.",
          text: [
            "Las grandes empresas de tecnología tienen programas para organizaciones sin fines de lucro. Google for Nonprofits da a las organizaciones benéficas registradas que califican productos de Google sin costo o con descuento, incluidos descuentos en Google Workspace y Google Ad Grants, que da a las organizaciones que califican hasta $10,000 al mes en anuncios de búsqueda de Google. Google usa un socio llamado Goodstack para verificar que eres una organización sin fines de lucro.",
            "Las ofertas de Microsoft para organizaciones sin fines de lucro incluyen Microsoft 365 Business Basic gratis para hasta 300 usuarios, planes de pago con descuento y Copilot Chat incluido con una suscripción de Microsoft 365. Te registras y Microsoft confirma si calificas.",
            "No todos los grupos califican. Por ejemplo, el programa de Google deja fuera a entidades del gobierno, hospitales y escuelas. Las herramientas de diseño como Canva también tienen programas para organizaciones sin fines de lucro; revisa su página oficial para conocer las condiciones actuales. Los precios y las reglas cambian, así que revisa siempre la página oficial antes de solicitar."
          ],
          steps: ["Ten a la mano el nombre legal de tu organización, la dirección y el comprobante de exención de impuestos.", "Abre las páginas oficiales de Google for Nonprofits y de Microsoft para organizaciones sin fines de lucro.", "Lee las reglas para calificar.", "Solicita con un correo de la organización, no uno personal.", "Activa cada producto por separado después de que te aprueben."],
          words: [["Calificar", "poder entrar porque cumples las reglas."], ["Exento de impuestos", "reconocido por el gobierno como una organización que no paga ciertos impuestos, como una 501(c)(3) en Estados Unidos."], ["Ad Grants", "el programa de Google que da anuncios de búsqueda gratis a las organizaciones sin fines de lucro que califican."]],
          slides: [
            { title: "Google for Nonprofits", bullets: ["Productos de Google sin costo o con descuento", "Descuentos en Workspace y Ad Grants", "Ad Grants: hasta $10,000 al mes en anuncios de búsqueda", "Verificación con Goodstack"] },
            { title: "Ofertas de Microsoft para organizaciones", bullets: ["Microsoft 365 Business Basic gratis para hasta 300 usuarios", "Planes de pago con descuento", "Copilot Chat incluido con Microsoft 365"] },
            { title: "Antes de solicitar", bullets: ["Revisa en la página oficial si calificas", "Ten listo el comprobante de exención de impuestos", "Los precios y las reglas cambian: revisa primero"] }
          ],
          sources: [
            { name: "Google for Nonprofits (Google para organizaciones sin fines de lucro)", url: "https://www.google.com/nonprofits/" },
            { name: "Google Ad Grants", url: "https://www.google.com/grants/" },
            { name: "Ofertas de Microsoft para organizaciones sin fines de lucro", url: "https://www.microsoft.com/en-us/nonprofits/offers-for-nonprofits" }
          ],
          tryIt: "Abre las páginas de Google for Nonprofits y de las ofertas de Microsoft para organizaciones sin fines de lucro. Anota si tu organización parece calificar para cada una y qué comprobantes necesitarías.",
          youCanNow: "encontrar programas de tecnología para organizaciones sin fines de lucro, revisar si calificas y saber qué tener listo para solicitar.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace Microsoft después de que te registras para sus ofertas para organizaciones sin fines de lucro?", options: ["Te manda una factura", "Te pide listas de donantes", "Confirma si calificas", "Te da una subvención en efectivo"], answer: 2, why: "Te registras y Microsoft confirma si calificas." },
            { objective: "O2", q: "Una escuela pública te pregunta si puede entrar a Google for Nonprofits. ¿Qué le dices?", options: ["Sí, todos los grupos califican", "Sí, si paga una cuota", "Solo los fines de semana", "La página de Google dice que las escuelas quedan excluidas, así que revisen la página oficial"], answer: 3, why: "El programa de Google excluye a entidades del gobierno, hospitales y escuelas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Crear hábitos seguros para cada herramienta",
          minutes: 4,
          goal: "Configurar una herramienta de IA de forma segura para que la use tu equipo.",
          text: [
            "Usa cuentas de la organización, no personales, para que el trabajo se quede en la organización cuando un voluntario se vaya. Activa el inicio de sesión en dos pasos en todas las cuentas.",
            "Averigua dónde guarda cada herramienta tu historial de conversaciones y si se puede apagar o borrar. Busca en la configuración de la herramienta los controles de privacidad o de datos.",
            "La regla de oro es la misma en todas las herramientas: ninguna información privada de donantes, voluntarios o personas atendidas entra a menos que tus líderes hayan aprobado esa herramienta para eso. Usa espacios en blanco como [nombre] en su lugar."
          ],
          steps: ["Inicia sesión con una cuenta de la organización.", "Activa el inicio de sesión en dos pasos.", "Abre la configuración y busca los controles de privacidad o de datos.", "Pónganse de acuerdo como equipo: nada de información privada, usen espacios en blanco."],
          words: [["Inicio de sesión en dos pasos", "una segunda revisión, como un código en tu teléfono, cuando entras a tu cuenta."], ["Historial de conversaciones", "el registro que guarda una herramienta de tus conversaciones anteriores."]],
          slides: [
            { title: "Cuentas", bullets: ["Cuentas de la organización, no personales", "El trabajo se queda cuando los voluntarios se van"] },
            { title: "Seguridad", bullets: ["Activa el inicio de sesión en dos pasos", "Busca en la configuración los controles de privacidad o datos"] },
            { title: "La regla de oro", bullets: ["Nada de información privada de donantes, voluntarios o personas atendidas", "Usa espacios en blanco como [nombre]"] }
          ],
          tryIt: "Abre la configuración de la herramienta de IA que más usas. Busca dónde guarda tu historial de conversaciones y los controles de privacidad. Escribe una frase sobre lo que encontraste.",
          youCanNow: "configurar una herramienta de IA con hábitos seguros para tu equipo.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde encuentras el historial de chat y los controles de datos de una herramienta?", options: ["En la configuración de la herramienta", "En tu bandeja de entrada", "En una página de redes sociales", "En ningún lado; no se pueden cambiar"], answer: 0, why: "Busca en la configuración de la herramienta los controles de privacidad o de datos." },
            { objective: "O3", q: "Una voluntaria configuró la herramienta de diseño del equipo en su cuenta personal y se va a mudar. ¿Qué debieron haber hecho?", options: ["Nada; las cuentas personales son las mejores", "Usar una cuenta de la organización para que el trabajo se quede con la organización", "Compartir su contraseña con todos", "Apagar el inicio de sesión en dos pasos"], answer: 1, why: "Las cuentas de la organización hacen que el trabajo se quede con la organización cuando un voluntario se va." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocer tus herramientas",
        questions: [
          { objective: "O1", q: "Necesitas un volante para voluntarios. ¿Qué tipo de herramienta va mejor?", options: ["Una herramienta de diseño", "Una hoja de cálculo", "Una grabadora de reuniones", "Una calculadora"], answer: 0, why: "Las herramientas de diseño hacen volantes y gráficos." },
          { objective: "O2", q: "¿Qué da Google Ad Grants a las organizaciones que califican?", options: ["Laptops gratis", "Hasta $10,000 al mes en anuncios de búsqueda de Google", "Donaciones en efectivo", "Personal gratis"], answer: 1, why: "La página oficial de Google dice hasta $10,000 al mes en anuncios de búsqueda." },
          { objective: "O3", q: "Antes de grabar una reunión con una herramienta de notas con IA, debes:", options: ["Esconder la grabadora", "Preguntar solo a quien dirige", "Tener el acuerdo de todos", "Nada"], answer: 2, why: "Las personas deben estar de acuerdo antes de que las graben." },
          { objective: "O3", q: "¿Por qué usar una cuenta de la organización en vez de una personal?", options: ["Es más rápido escribir", "Las cuentas personales son ilegales", "Por nada", "El trabajo se queda en la organización"], answer: 3, why: "El trabajo no se pierde cuando un voluntario se va." },
          { objective: "O2", q: "Los precios y las reglas de los programas cambian. ¿Qué haces?", options: ["Revisas la página oficial antes de solicitar", "Confías en una publicación vieja de un blog", "Le preguntas a una IA y lo aceptas", "Adivinas"], answer: 0, why: "Las páginas oficiales tienen las reglas actuales." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer trabajo real con herramientas de IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Convertir notas de una reunión en un resumen claro",
          minutes: 5,
          goal: "Usar un asistente de chat para convertir notas sueltas de una reunión en un resumen con tareas pendientes.",
          text: [
            "Las reuniones de la junta, del equipo del ministerio y de voluntarios dejan notas desordenadas. Un asistente de chat puede convertirlas en un resumen limpio en segundos.",
            "Primero quita los datos privados: nada de nombres de personas atendidas, problemas de salud ni montos de donantes. Usa cargos en su lugar: \"el tesorero\", \"la encargada de jóvenes\". Luego pega las notas con esta instrucción: \"Resume estas notas de reunión en 5 puntos. Luego haz una tabla de tareas pendientes con: tarea, quién (por cargo) y fecha límite.\"",
            "Compara el resumen con tus notas. La IA puede olvidar una decisión o inventar una fecha límite. Corrígelo y luego agrega tú los nombres reales antes de compartirlo."
          ],
          steps: ["Quita los datos privados; usa cargos en vez de nombres.", "Pega las notas en el asistente de chat.", "Pide un resumen de 5 puntos y una tabla de tareas pendientes.", "Compara cada decisión y fecha con tus notas.", "Agrega tú los nombres reales y luego compártelo."],
          words: [["Tarea pendiente", "algo que alguien aceptó hacer después de una reunión."], ["Resumen", "una versión corta que conserva lo principal."]],
          slides: [
            { title: "Prepara las notas", bullets: ["Quita datos de personas atendidas, de salud y de donantes", "Usa cargos: tesorero, encargada de jóvenes"] },
            { title: "La instrucción", bullets: ["Resume en 5 puntos", "Tabla de tareas pendientes: tarea, quién, fecha límite"] },
            { title: "Revisa y termina", bullets: ["Compara con tus notas", "Corrige decisiones olvidadas y fechas inventadas", "Agrega tú los nombres reales"] }
          ],
          tryIt: "Toma las notas de una reunión reciente (o escribe cinco líneas de notas de práctica). Quita los datos privados, pide un resumen y una tabla de tareas pendientes, y compáralo con las notas.",
          youCanNow: "convertir notas de una reunión en un resumen revisado con tareas pendientes usando la IA.",
          quickCheck: [
            { objective: "O4", q: "En la instrucción del resumen, ¿cómo aparece \"quién\" en la tabla de tareas pendientes?", options: ["Con nombre completo y teléfono", "Con la dirección de su casa", "Por su puesto", "Por el monto de su donativo"], answer: 2, why: "La instrucción pide la tarea, quién (por su puesto) y la fecha límite; los nombres los agregas después." },
            { objective: "O4", q: "El resumen de la IA deja fuera una decisión que tomó la junta. ¿Qué haces?", options: ["Lo compartes así", "Borras las notas", "Le pides a la IA que adivine qué se decidió", "Agregas la decisión con tus notas antes de compartirlo"], answer: 3, why: "Revisa el resumen con tus notas y corrige lo que falte." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer un volante para voluntarios con IA",
          minutes: 5,
          goal: "Usar la IA para escribir el texto del volante y una herramienta de diseño para acomodarlo.",
          text: [
            "Empieza por las palabras. Pide a un asistente de chat: \"Escribe el texto de un volante para reclutar voluntarios para nuestro programa de tutorías de los sábados para estudiantes de secundaria. Incluye un título corto, tres razones para unirse, el tiempo que se pide y cómo inscribirse. Menos de 60 palabras.\"",
            "Luego abre una herramienta de diseño, busca en sus plantillas \"voluntarios\" o \"volante\" y pega tu texto. Muchas herramientas de diseño tienen funciones de IA que sugieren diseños o imágenes; describe lo que quieres y escoge uno.",
            "Revisa tú los datos: fecha, hora, lugar, contacto y enlace de inscripción. Usa fotos que tengas permiso de usar y nunca muestres la cara de niños sin permiso por escrito de su madre, padre o tutor."
          ],
          steps: ["Pide a un asistente de chat un texto corto para el volante.", "Abre una herramienta de diseño y busca una plantilla de volante.", "Pega tu texto y ajusta el diseño.", "Revisa fecha, hora, lugar y contacto.", "Usa solo imágenes que tengas permiso de usar."],
          words: [["Plantilla", "un diseño ya hecho que llenas con tus propias palabras."], ["Permiso", "un acuerdo, muchas veces por escrito, para usar la foto o el trabajo de alguien."]],
          slides: [
            { title: "Primero las palabras", bullets: ["Título, tres razones, tiempo que se pide", "Cómo inscribirse", "Menos de 60 palabras"] },
            { title: "Luego el diseño", bullets: ["Abre una herramienta de diseño", "Busca plantillas de \"volante para voluntarios\"", "Pega y ajusta"] },
            { title: "Revisa antes de imprimir", bullets: ["Fecha, hora, lugar, contacto", "Solo fotos con permiso", "Nada de caras de niños sin permiso de sus padres"] }
          ],
          tryIt: "Haz un volante para reclutar voluntarios para un programa real o de práctica: texto escrito con IA de menos de 60 palabras, acomodado en una plantilla de una herramienta de diseño. Revisa cada dato.",
          youCanNow: "hacer un volante para voluntarios usando la IA para las palabras y una herramienta de diseño para el acomodo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué buscas en las plantillas de una herramienta de diseño?", options: ["Palabras como \"voluntario\" o \"volante\"", "Los nombres de tus donantes", "Tu contraseña", "La dirección de una persona atendida"], answer: 0, why: "Busca en las plantillas \"voluntario\" o \"volante\" y pega tu texto." },
            { objective: "O5", q: "El texto del volante hecho con IA tiene el enlace de inscripción equivocado. ¿Qué haces?", options: ["Lo imprimes de todos modos", "Corriges tú el enlace antes de imprimir", "Quitas la parte de la inscripción", "Le pides a la herramienta de diseño que adivine el enlace"], answer: 1, why: "Revisa tú la fecha, la hora, el lugar, el contacto y el enlace de inscripción." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Armar la tarjeta de herramientas de IA de tu equipo",
          minutes: 5,
          goal: "Escribir una tarjeta de herramientas de una página que le diga a tu equipo qué herramientas usar y cómo.",
          text: [
            "Una tarjeta de herramientas es una página que tu equipo puede tener junto a la computadora. Nombra cada herramienta aprobada, para qué sirve, cómo entrar y qué nunca debe entrar en ella.",
            "Que sea corta: una fila por herramienta. Agrega las dos o tres instrucciones que mejor le funcionaron a tu equipo, como la del resumen de reuniones, para que los voluntarios nuevos las puedan copiar.",
            "Revisa la tarjeta cada seis meses. Las herramientas, los precios y los programas para organizaciones cambian, y tu equipo va a descubrir mejores instrucciones."
          ],
          steps: ["Anota un asistente de chat, un paquete de oficina y una herramienta de diseño.", "Para cada uno: para qué sirve y cómo entrar.", "Agrega la regla de privacidad de cada uno.", "Agrega tus dos o tres mejores instrucciones.", "Pon una fecha para revisarla en seis meses."],
          words: [["Tarjeta de herramientas", "una guía de una página de las herramientas que usa tu equipo y cómo usarlas con seguridad."]],
          slides: [
            { title: "Una fila por herramienta", bullets: ["Nombre y para qué sirve", "Cómo entrar", "Qué nunca debe entrar"] },
            { title: "Agrega tus mejores instrucciones", bullets: ["Instrucción para resumir reuniones", "Instrucción para el texto de volantes", "Los voluntarios nuevos las pueden copiar"] },
            { title: "Mantenla al día", bullets: ["Revísala cada seis meses", "Las herramientas y los programas cambian"] }
          ],
          tryIt: "Tarea final: escribe la tarjeta de herramientas de IA de una página de tu equipo con tres herramientas, sus usos y reglas de privacidad, y adjunta el resumen de reunión y el volante que hiciste.",
          youCanNow: "elegir, usar y documentar un pequeño grupo de herramientas de IA para el equipo de tu organización.",
          quickCheck: [
            { objective: "O6", q: "¿Cómo se organiza una tarjeta de herramientas?", options: ["Un manual largo", "Un video", "Una fila por herramienta en una página", "Una lista de contraseñas"], answer: 2, why: "Mantenla corta: una página, una fila por herramienta." },
            { objective: "O6", q: "Tu equipo encontró una instrucción para reuniones que funciona muy bien. ¿Qué haces con ella?", options: ["Te la guardas", "La borras después de usarla", "Se la mandas a los donantes", "La agregas a la tarjeta de herramientas para que los voluntarios nuevos la copien"], answer: 3, why: "Agrega las mejores instrucciones para que los voluntarios nuevos copien lo que funciona." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer trabajo real con herramientas de IA",
        questions: [
          { objective: "O4", q: "Antes de pegar notas de una reunión en la IA, debes:", options: ["Agregar los datos bancarios de los donantes", "Quitar los datos privados y usar cargos en vez de nombres", "Pegarlas tal como están", "Mandarlas primero por correo a todos"], answer: 1, why: "Los cargos dejan fuera de la herramienta de IA los datos privados." },
          { objective: "O4", q: "El resumen de la IA tiene una fecha límite que nadie acordó. ¿Qué haces?", options: ["La dejas", "Le pides a la IA que la deje", "La corriges con tus notas", "Lo compartes así"], answer: 2, why: "La IA puede inventar datos; tus notas son el registro." },
          { objective: "O5", q: "¿Cuál es un buen uso de una plantilla de una herramienta de diseño?", options: ["Guardar listas de donantes", "Escribir un presupuesto", "Grabar una reunión", "Pegar el texto de tu volante en un diseño ya hecho"], answer: 3, why: "Las plantillas te dan un diseño listo." },
          { objective: "O5", q: "Quieres poner en el volante una foto de niños en tu programa. ¿Qué necesitas?", options: ["Permiso por escrito de su madre, padre o tutor", "Nada", "Una foto más grande", "Una IA que la difumine"], answer: 0, why: "Las imágenes de niños necesitan permiso de su madre, padre o tutor." },
          { objective: "O6", q: "¿Cada cuánto debes revisar tu tarjeta de herramientas?", options: ["Nunca", "Más o menos cada seis meses", "Todos los días", "Solo cuando un donante lo pida"], answer: 1, why: "Las herramientas y los programas cambian." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Herramientas de IA esenciales para organizaciones sin fines de lucro y cómo usarlas",
    questions: [
      { objective: "O1", q: "¿Cuál es un asistente de chat?", options: ["Una impresora", "Una celda de hoja de cálculo", "Microsoft Copilot", "Una engrapadora"], answer: 2, why: "Copilot, ChatGPT y Gemini son asistentes de chat." },
      { objective: "O1", q: "Un paquete de oficina es:", options: ["Una sala de reuniones", "Solo una base de datos de donantes", "Un teléfono", "Un conjunto de programas de trabajo como correo, documentos y hojas de cálculo"], answer: 3, why: "Microsoft 365 y Google Workspace son paquetes de oficina." },
      { objective: "O1", q: "¿Qué tipo de herramienta hace gráficos para redes sociales?", options: ["Una herramienta de diseño", "Una calculadora", "Una aplicación del banco", "Un termostato"], answer: 0, why: "Las herramientas de diseño hacen gráficos y volantes." },
      { objective: "O1", q: "¿Qué significa \"transcribir\"?", options: ["Traducir al inglés", "Convertir palabras habladas en texto escrito", "Borrar un archivo", "Mandar una donación"], answer: 1, why: "Las herramientas de reuniones pueden transcribir lo que dice la gente." },
      { objective: "O1", q: "La mejor forma de empezar a elegir herramientas es:", options: ["Comprar cada herramienta nueva", "No usar ninguna", "Usar lo que ya tienes, una por tipo", "Preguntarle a un desconocido"], answer: 2, why: "Pocas herramientas, bien usadas." },
      { objective: "O2", q: "Google for Nonprofits verifica a las organizaciones con:", options: ["La oficina de correos", "Tu banco", "Un donante", "Goodstack"], answer: 3, why: "Google nombra a Goodstack como su socio de verificación." },
      { objective: "O2", q: "Según su página, ¿qué grupo NO califica para Google for Nonprofits?", options: ["Una entidad del gobierno", "Una organización benéfica registrada", "Un banco de alimentos benéfico", "Una organización comunitaria sin fines de lucro"], answer: 0, why: "Las entidades del gobierno, los hospitales y las escuelas quedan fuera." },
      { objective: "O2", q: "Las ofertas de Microsoft para organizaciones sin fines de lucro incluyen:", options: ["Carros gratis", "Microsoft 365 Business Basic gratis para hasta 300 usuarios", "Dinero para pagar la renta", "Edificios de oficinas gratis"], answer: 1, why: "La página de Microsoft menciona Business Basic gratis para hasta 300 usuarios." },
      { objective: "O2", q: "¿Qué debes tener listo antes de solicitar un programa de tecnología para organizaciones?", options: ["Los números de tarjeta de los donantes", "Expedientes de personas atendidas", "Tu nombre legal, dirección y comprobante de exención de impuestos", "Nada"], answer: 2, why: "Los programas revisan que seas una organización sin fines de lucro real." },
      { objective: "O3", q: "El inicio de sesión en dos pasos significa:", options: ["Entrar dos veces al día", "Compartir tu contraseña", "Dos personas comparten una cuenta", "Una segunda revisión, como un código en el teléfono, cuando entras"], answer: 3, why: "Protege las cuentas si se filtra una contraseña." },
      { objective: "O3", q: "¿Dónde buscas los controles de privacidad de una herramienta?", options: ["En su configuración", "En la papelera", "En el correo de un donante", "En la impresora"], answer: 0, why: "La configuración suele tener los controles de datos y privacidad." },
      { objective: "O3", q: "La regla de oro en toda herramienta de IA es:", options: ["Pegar todo para tener mejores resultados", "Nada de información privada de donantes, voluntarios o personas atendidas a menos que esté aprobado", "Usar solo cuentas personales", "Nunca revisar las respuestas"], answer: 1, why: "Proteger la información privada mantiene la confianza." },
      { objective: "O4", q: "En una instrucción para resumir una reunión, debes pedir:", options: ["Un poema", "Los datos bancarios de los donantes", "Puntos clave y una tabla de tareas pendientes", "Una historia cualquiera"], answer: 2, why: "Así obtienes un resumen claro y útil." },
      { objective: "O4", q: "¿Por qué usar cargos como \"el tesorero\" en las notas que pegas?", options: ["Es más corto", "La IA no puede leer nombres", "Los tesoreros lo prefieren", "Para dejar fuera nombres y datos privados"], answer: 3, why: "Los cargos protegen la privacidad." },
      { objective: "O4", q: "¿Qué revisas en un resumen de reunión hecho con IA?", options: ["Cada decisión y fecha comparada con tus notas", "Solo el tipo de letra", "Nada", "Solo lo largo que es"], answer: 0, why: "La IA puede olvidar o inventar datos." },
      { objective: "O5", q: "Un buen texto de volante para voluntarios incluye:", options: ["Solo un logo", "Título, razones para unirse, tiempo que se pide y cómo inscribirse", "Nombres de donantes", "Una historia larga de la organización"], answer: 1, why: "Les dice a los lectores por qué y cómo unirse." },
      { objective: "O5", q: "Antes de imprimir un volante, revisa:", options: ["Solo los colores", "El clima", "Fecha, hora, lugar y contacto", "Nada"], answer: 2, why: "Los datos equivocados hacen que la gente no llegue." },
      { objective: "O6", q: "Una tarjeta de herramientas es:", options: ["Una tarjeta de regalo", "Un gafete de voluntario", "Un recibo de donación", "Una guía de una página de las herramientas aprobadas de tu equipo"], answer: 3, why: "Muestra qué herramientas usar y cómo." },
      { objective: "O6", q: "¿Por qué agregar tus mejores instrucciones a la tarjeta de herramientas?", options: ["Los voluntarios nuevos pueden copiar lo que funciona", "Para llenar espacio", "Las instrucciones son secretas", "Los donantes las quieren"], answer: 0, why: "Las instrucciones compartidas ahorran tiempo y mantienen la calidad." },
      { objective: "O2", q: "Las condiciones de Canva para organizaciones sin fines de lucro pueden haber cambiado. Debes:", options: ["Suponer que es gratis para siempre", "Revisar la página oficial de Canva para organizaciones sin fines de lucro", "Preguntarle a un asistente de chat y confiar en él", "No usar herramientas de diseño"], answer: 1, why: "Las páginas oficiales tienen las condiciones actuales." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      5,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Herramientas correctas",
        objective: "O1",
        notYet: "Falta uno de los tres tipos de herramienta, o una herramienta se usa para el trabajo equivocado.",
        meets: "Nombra un asistente de chat, un paquete de oficina y una herramienta de diseño, cada uno con para qué sirve.",
        exceeds: "Anota qué herramientas son gratis o con descuento por un programa para organizaciones sin fines de lucro."
      },
      {
        name: "Reglas de seguridad en la tarjeta",
        objective: "O3",
        notYet: "La tarjeta no dice qué nunca debe entrar en cada herramienta.",
        meets: "Cada herramienta dice qué nunca debe entrar en ella, con cuentas de la organización e inicio de sesión en dos pasos.",
        exceeds: "También dice dónde encontrar los controles de privacidad de cada herramienta."
      },
      {
        name: "Resumen de la reunión",
        objective: "O4",
        notYet: "El resumen tiene nombres o datos privados, o una decisión o fecha equivocada.",
        meets: "Resumen y tabla de tareas pendientes por puesto, revisados con las notas.",
        exceeds: "Los nombres reales se agregaron solo después de copiar el texto fuera de la herramienta de IA."
      },
      {
        name: "Volante para voluntarios",
        objective: "O5",
        notYet: "Fecha, hora, lugar o contacto equivocados o faltantes, o una foto sin permiso.",
        meets: "Título, razones para participar, tiempo que se pide e inscripción, con todos los datos revisados.",
        exceeds: "Usa solo fotos con permiso y se lee fácil de un vistazo."
      },
      {
        name: "Tarjeta de herramientas útil",
        objective: "O6",
        notYet: "Más de una página, o falta cómo iniciar sesión.",
        meets: "Una página, una fila por herramienta, con las mejores instrucciones.",
        exceeds: "Tiene una fecha de revisión a unos seis meses y un responsable."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones que solicitan al menos un programa de tecnología para organizaciones sin fines de lucro en 60 días (encuesta de seguimiento)",
      "Equipos que usan su tarjeta de herramientas para resúmenes de reuniones o volantes en 30 días",
      "Estudiantes que empiezan otro curso de Koach Learn para organizaciones sin fines de lucro en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Un asistente de chat gratis, tu paquete de oficina y una cuenta gratis en una herramienta de diseño",
      "Notas de reunión de ejemplo sin datos privados",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Antes de la sesión, revisa qué paquete de oficina y qué herramienta de diseño ya tiene la organización.",
      "Ten a mano el nombre legal de la organización, su dirección y el comprobante de exención de impuestos si los estudiantes van a solicitar programas durante la sesión.",
      "Da notas de reunión de ejemplo con puestos en lugar de nombres para que no se pegue ningún dato privado real.",
      "Recuerda a los estudiantes que las fotos de niños necesitan permiso por escrito de su madre, padre o tutor.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

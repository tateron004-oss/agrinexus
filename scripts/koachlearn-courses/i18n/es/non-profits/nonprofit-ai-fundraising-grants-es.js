"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-fundraising-grants.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-fundraising-grants-es",
  lang: "es",
  translationOf: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "IA para recaudar fondos y escribir solicitudes de subvenciones",
  skills: "Encontrar oportunidades de subvenciones, Leer las guías del financiador, Escribir con IA una declaración de necesidad, Escribir con IA llamados a donantes, Revisar y personalizar cada borrador",
  outcome: "encontrar una subvención que vaya con tu programa, usar la IA para escribir el borrador de una declaración de necesidad y una descripción del programa que sigan las guías del financiador, y escribir un correo de llamado a donantes, revisando cada dato y manteniendo privada la información de los donantes.",
  about: [
    "Este curso es para líderes, personal de desarrollo y voluntarios de organizaciones sin fines de lucro y comunidades de fe que recaudan dinero y escriben solicitudes de subvenciones, muchas veces con poco tiempo y un equipo pequeño.",
    "Vas a aprender dónde encontrar subvenciones, cómo leer las guías de un financiador, cómo usar la IA para escribir borradores de las secciones más comunes de una solicitud y de los llamados a donantes, y cómo revisar y personalizar cada borrador para que sea honesto y suene a ti.",
    "Cada lección dura unos cinco minutos y termina con una tarea práctica. La IA escribe borradores; tú decides, revisas y firmas. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escoge una oportunidad de subvención real que vaya con un programa que manejas. Con la IA, escribe el borrador de una declaración de necesidad (unas 250 palabras) y una descripción del programa que sigan las guías del financiador, usando solo datos de tus registros y fuentes que revisaste. Luego escribe el borrador de un correo de llamado a donantes de 150 palabras para el mismo programa, con espacios en blanco en lugar de datos de donantes, y edita los dos para que suenen a tu organización.",
  chapters: [
    {
      name: "Capítulo 1: Subvenciones con IA",
      lessons: [
        {
          title: "Encontrar subvenciones que van con tu misión",
          minutes: 5,
          goal: "Encontrar al menos dos oportunidades de subvención que vayan con uno de tus programas.",
          text: [
            "Las subvenciones vienen de tres lugares principales: el gobierno (federal, estatal y local), las fundaciones privadas y familiares, y las empresas. Las subvenciones federales de EE. UU. están en Grants.gov. Cada una tiene un aviso de oportunidad de financiamiento, o NOFO, con una sección que dice quién puede solicitar.",
            "Para solicitar subvenciones federales, tu organización primero debe registrarse como entidad en SAM.gov, que le da un Identificador Único de Entidad (UEI). Grants.gov dice que el registro es gratis. Puede tardar, así que empieza con tiempo, y nunca le pagues a una empresa que dice que te registra a cambio de un cobro.",
            "Para fundaciones, Candid (candid.org) te deja buscar organizaciones y financiadores; algunas funciones necesitan un plan de pago, y muchas bibliotecas públicas dan acceso. Revisa también tu fundación comunitaria, los negocios locales y tu denominación o red de fe."
          ],
          steps: ["Escoge un programa que necesite fondos.", "Busca en Grants.gov oportunidades federales de ese tema.", "Busca en Candid y en tu fundación comunitaria financiadores locales.", "Lee la sección de quién puede solicitar de cada oportunidad.", "Anota dos que te queden, con sus fechas límite."],
          words: [["Subvención", "dinero que se da para un fin y que no hay que devolver."], ["NOFO", "aviso de oportunidad de financiamiento: la descripción oficial de una subvención federal y sus reglas."], ["UEI", "Identificador Único de Entidad: el número que SAM.gov da a tu organización para fondos federales."]],
          slides: [
            { title: "De dónde vienen las subvenciones", bullets: ["Gobierno: federal, estatal, local", "Fundaciones", "Empresas y redes de fe"] },
            { title: "Subvenciones federales", bullets: ["Están en Grants.gov", "Lee la sección de quién puede solicitar del NOFO", "Regístrate primero en SAM.gov: es gratis"] },
            { title: "Fundaciones", bullets: ["Busca en Candid (candid.org)", "Pregunta en tu biblioteca por el acceso", "Revisa tu fundación comunitaria"] }
          ],
          sources: [
            { name: "Grants.gov: quién puede solicitar subvenciones", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov: registro de solicitantes", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Escoge uno de tus programas. Encuentra dos oportunidades de subvención que le queden, una federal o estatal y una de fundación o local. Escribe en una línea el nombre de cada financiador, la fecha límite y quién puede solicitar.",
          youCanNow: "encontrar oportunidades de subvención que van con tu misión y saber qué registro piden las subvenciones federales."
        },
        {
          title: "Leer las guías del financiador con ayuda de la IA",
          minutes: 5,
          goal: "Convertir las guías de un financiador en una lista de control de lo que debes entregar.",
          text: [
            "Cada financiador dice lo que quiere: secciones, límites de palabras, formato del presupuesto, documentos adjuntos y fechas límite. Si falta algo, te pueden descalificar antes de que alguien lea tu trabajo.",
            "Las guías son públicas, así que puedes pegarlas en un asistente de IA y pedir: \"Convierte estas guías de subvención en una lista de control: cada sección, su límite de palabras o páginas, cada documento adjunto y cada fecha límite.\"",
            "Luego compara la lista con el original. La IA puede dejar fuera algo o cambiar una fecha. El documento del propio financiador siempre manda."
          ],
          steps: ["Copia las guías públicas del financiador.", "Pide a la IA una lista de control de secciones, límites, adjuntos y fechas límite.", "Compara la lista línea por línea con el original.", "Corrige lo que falte o esté mal."],
          words: [["Guías", "las reglas del financiador sobre qué entregar y cómo."], ["Documento adjunto", "un documento extra que mandas con la solicitud, como un presupuesto o una carta del IRS."]],
          slides: [
            { title: "Los financiadores dicen lo que quieren", bullets: ["Secciones y límites de palabras", "Formato del presupuesto y adjuntos", "Fechas límite"] },
            { title: "Pide a la IA una lista de control", bullets: ["Pega las guías públicas", "Secciones, límites, adjuntos, fechas límite"] },
            { title: "Revísala", bullets: ["Compara línea por línea", "El documento del financiador siempre manda"] }
          ],
          tryIt: "Toma las guías de una de tus dos oportunidades. Pide a un asistente de IA una lista de control, luego compárala con el original y corrige los errores.",
          youCanNow: "convertir las guías de un financiador en una lista de control correcta para la entrega."
        },
        {
          title: "Escribir la declaración de necesidad y la descripción del programa",
          minutes: 6,
          goal: "Usar la IA para escribir el borrador de una declaración de necesidad y una descripción del programa con tus propios datos.",
          text: [
            "La declaración de necesidad dice qué problema atiendes, a quién afecta y por qué ahora. La descripción del programa dice qué vas a hacer, para quién y qué va a cambiar.",
            "Dale a la IA tus datos, no una hoja en blanco: \"Usando solo estos datos, escribe una declaración de necesidad de 250 palabras para una subvención de [tipo de financiador]: [tus datos y estadísticas con fuente]. No agregues ninguna estadística que no te di.\"",
            "Luego edita a fondo. Agrega una historia real (con permiso y sin datos que identifiquen), usa las palabras y prioridades del financiador, y asegúrate de que cada número salga de tus registros o de una fuente que revisaste. Muchos financiadores preguntan si se usó IA; responde con honestidad."
          ],
          steps: ["Reúne tus datos: a quién atiendes, números, resultados, estadísticas con fuente.", "Pide a la IA un borrador usando solo esos datos, dentro del límite de palabras.", "Agrega una historia real con permiso y sin datos que identifiquen.", "Usa las prioridades y las palabras del financiador.", "Comprueba de dónde sale cada número: un registro o una fuente."],
          words: [["Declaración de necesidad", "la sección de la solicitud que explica el problema y por qué importa ahora."], ["Descripción del programa", "la sección que explica qué harás y qué va a cambiar."], ["Resultado", "el cambio en la vida de las personas que busca tu programa."]],
          slides: [
            { title: "Dos secciones clave", bullets: ["Necesidad: el problema, a quién afecta, por qué ahora", "Programa: qué haces, para quién, qué cambia"] },
            { title: "Dale a la IA tus datos", bullets: ["\"Usando solo estos datos...\"", "\"No agregues estadísticas que no te di\"", "Respeta el límite de palabras"] },
            { title: "Edita a fondo", bullets: ["Agrega una historia real con permiso", "Usa las prioridades del financiador", "Comprueba de dónde sale cada número"] },
            { title: "Sé honesto", bullets: ["Responde con la verdad si te preguntan si usaste IA"] }
          ],
          tryIt: "Reúne cinco datos sobre un programa. Pide a la IA una declaración de necesidad de 250 palabras usando solo esos datos. Marca cada número y confirma de dónde salió.",
          youCanNow: "escribir con IA el borrador de una declaración de necesidad a partir de tus propios datos revisados."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Subvenciones con IA",
        questions: [
          { q: "¿Dónde están las oportunidades de subvenciones federales?", options: ["En Grants.gov", "En un grupo de redes sociales", "En tu carpeta de correo no deseado", "En el directorio telefónico"], answer: 0, why: "Grants.gov tiene la lista de oportunidades de financiamiento federal." },
          { q: "Una empresa ofrece registrarte en SAM.gov a cambio de un cobro. ¿Qué sabes?", options: ["Tienes que pagarlo", "El registro en SAM.gov es gratis, así que regístrate tú", "SAM.gov es opcional", "Solo las empresas pueden registrarte"], answer: 1, why: "Grants.gov dice que registrarse es gratis." },
          { q: "La lista de control de la IA olvida un documento adjunto de las guías. ¿Qué es lo correcto?", options: ["La lista de control", "Ninguno", "Las guías del financiador", "Lo que sea más corto"], answer: 2, why: "El documento del propio financiador siempre manda." },
          { q: "¿Qué instrucción te protege de estadísticas inventadas?", options: ["\"Escribe una declaración de necesidad.\"", "\"Hazla impresionante.\"", "\"Agrega números fuertes.\"", "\"Usando solo estos datos, escribe... No agregues estadísticas que no te di.\""], answer: 3, why: "Limitar a la IA a tus datos evita números inventados." },
          { q: "¿Qué explica una declaración de necesidad?", options: ["El problema, a quién afecta y por qué ahora", "Los nombres de tu junta", "Tu horario de oficina", "La lista de donantes"], answer: 0, why: "Ese es el propósito de la sección de necesidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Donantes con IA",
      lessons: [
        {
          title: "Escribir un llamado a donantes con IA",
          minutes: 5,
          goal: "Escribir el borrador de un correo corto de llamado a donantes para un programa.",
          text: [
            "Un buen llamado es corto y concreto: una persona o una necesidad, lo que hace un donativo y un solo pedido claro. \"$50 dan una semana de tutorías después de clases\" funciona mejor que \"por favor apoye nuestro trabajo\", pero solo si el número es cierto.",
            "Instrucción: \"Escribe un correo de llamado a donantes de 150 palabras para nuestro programa de tutorías después de clases. Cuenta una historia corta sobre [un estudiante, sin nombre], di qué logra [monto] y termina con un pedido claro y un enlace: [enlace para donar]. Tono cálido y esperanzador.\"",
            "Deja fuera de la herramienta de IA las listas de donantes, los nombres y los historiales de donación. Usa tu base de datos de donantes o tu programa de correo para agregar los nombres cuando el borrador esté terminado."
          ],
          steps: ["Escoge un programa y un dato cierto de \"lo que hace un donativo\".", "Pide a la IA un llamado corto con una historia, el dato del donativo y un pedido.", "Compara cada monto con tu presupuesto.", "Agrega los nombres con tu base de datos de donantes, no con la herramienta de IA."],
          words: [["Llamado", "un pedido para que la gente done."], ["Llamado a la acción", "lo único y claro que le pides al lector que haga, como \"Dona hoy\"."]],
          slides: [
            { title: "Un llamado fuerte", bullets: ["Una historia o necesidad", "Lo que hace un donativo: solo números ciertos", "Un pedido claro"] },
            { title: "La instrucción", bullets: ["150 palabras, cálido y esperanzador", "Historia sin nombres", "Espacios [monto] y [enlace para donar]"] },
            { title: "Protege a los donantes", bullets: ["Nada de listas de donantes en la IA", "Agrega los nombres en tu base de datos de donantes"] }
          ],
          tryIt: "Escribe con la IA el borrador de un correo de llamado de 150 palabras para un programa. Revisa en tu presupuesto que el monto de \"lo que hace un donativo\" sea cierto.",
          youCanNow: "escribir con IA un llamado a donantes corto y honesto."
        },
        {
          title: "Personalizar agradecimientos y actualizaciones",
          minutes: 4,
          goal: "Usar la IA para hacer plantillas de agradecimiento y actualización que personalizas tú.",
          text: [
            "Los donantes a quienes se les agradece rápido y se les dice qué logró su donativo tienen más probabilidad de volver a dar. La IA puede ayudarte a escribir plantillas para distintos donantes: los que dan por primera vez, los que dan cada mes, los voluntarios que también donan y los miembros de la iglesia que dieron a una ofrenda especial.",
            "Pide: \"Escribe tres plantillas cortas de agradecimiento: donante por primera vez, donante mensual y donante principal. Cada una con menos de 100 palabras, cálida, con espacios [nombre], [monto] y [programa] y una frase de impacto.\"",
            "Llena nombres y montos en tu base de datos de donantes o con combinación de correspondencia. Agrega una línea escrita a mano cuando puedas. La gente nota cuando ninguna persona participó."
          ],
          steps: ["Haz una lista de los tipos de donantes a quienes agradeces.", "Pide a la IA una plantilla para cada uno, con espacios en blanco.", "Agrega a cada una una frase de impacto que sea cierta.", "Personalízala en tu base de datos de donantes y agrega una línea personal."],
          words: [["Plantilla", "un borrador que se vuelve a usar, con espacios para llenar."], ["Combinación de correspondencia", "una herramienta que pone nombres y datos en una carta para muchas personas."], ["Retención de donantes", "lograr que los donantes sigan dando año tras año."]],
          slides: [
            { title: "Agradece rápido, muestra el impacto", bullets: ["Los donantes agradecidos vuelven a dar", "Di qué logró el donativo"] },
            { title: "Plantillas por tipo de donante", bullets: ["Primera vez, mensual, principal", "Menos de 100 palabras con espacios en blanco"] },
            { title: "Hazlo personal", bullets: ["Llénala en tu base de datos de donantes", "Agrega una línea escrita a mano"] }
          ],
          tryIt: "Pide a la IA tres plantillas de agradecimiento para tres tipos de donantes. Agrega a cada una una frase de impacto que sea cierta.",
          youCanNow: "crear plantillas de agradecimiento con IA y personalizarlas con seguridad."
        },
        {
          title: "Revisar, editar y mantenerse honesto",
          minutes: 5,
          goal: "Hacer una revisión final de cualquier borrador de solicitud o de llamado antes de que salga.",
          text: [
            "Antes de que algo llegue a un financiador o a un donante, haz una revisión final. Cada número sale de un registro. Cada afirmación es cierta. Cada historia tiene permiso. Se respetan los límites de palabras. Suena a tu organización, no a un robot.",
            "Nunca dejes que la IA invente resultados, socios o respaldos. Un financiador que encuentra una sola afirmación falsa puede no volver a confiar en ti nunca.",
            "Léelo en voz alta y pide a un colega que conozca el programa que lo lea. Para afirmaciones legales o de impuestos, como qué es deducible de impuestos, consulta a tu contador o la guía oficial del IRS (la agencia de impuestos de EE. UU.)."
          ],
          steps: ["Comprueba que cada número salga de un registro o una fuente.", "Confirma que cada historia tenga permiso y no tenga datos que identifiquen.", "Revisa los límites de palabras y las secciones obligatorias.", "Léelo en voz alta.", "Pide a un colega que conozca el programa que lo revise."],
          words: [["Respaldo", "una declaración pública de apoyo de una persona o un grupo."], ["Deducible de impuestos", "un donativo que el donante puede restar de su ingreso gravable según las reglas de impuestos."]],
          slides: [
            { title: "Revisión final", bullets: ["Cada número sale de un registro", "Cada historia tiene permiso", "Se respetan los límites de palabras"] },
            { title: "Nunca inventes", bullets: ["Resultados", "Socios", "Respaldos"] },
            { title: "Últimos pasos", bullets: ["Léelo en voz alta", "Un colega lo revisa", "Afirmaciones de impuestos: consulta a un contador o al IRS"] }
          ],
          sources: [
            { name: "IRS: contribuciones caritativas", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Tarea final: para una oportunidad de subvención real, termina tu declaración de necesidad y una descripción del programa que sigan las guías, y termina un llamado a donantes de 150 palabras para el mismo programa. Haz la revisión final de los dos.",
          youCanNow: "producir con ayuda de la IA secciones de solicitudes y llamados a donantes honestos y revisados."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Donantes con IA",
        questions: [
          { q: "¿Qué frase de un llamado es la más fuerte, si es cierta?", options: ["\"Por favor apoye nuestro trabajo.\"", "\"$50 dan una semana de tutorías después de clases.\"", "\"Necesitamos dinero.\"", "\"Done si puede.\""], answer: 1, why: "Un impacto concreto y cierto ayuda a los donantes a ver lo que logra su donativo." },
          { q: "¿Dónde agregas los nombres de los donantes a las cartas de agradecimiento?", options: ["Pegando la lista de donantes en la IA", "En redes sociales", "En tu base de datos de donantes o con combinación de correspondencia", "En ningún lado"], answer: 2, why: "Mantener los datos de donantes en tu propio sistema protege su privacidad." },
          { q: "La IA agrega un socio con el que no trabajas. ¿Qué haces?", options: ["Lo dejas, suena bien", "Le preguntas al socio después", "Lo haces más pequeño", "Lo quitas"], answer: 3, why: "Nunca dejes que la IA invente socios o respaldos." },
          { q: "Un borrador dice que los donativos son deducibles de impuestos. ¿Dónde lo revisas?", options: ["Con un contador o en la guía oficial del IRS", "En otro chat de IA", "Con un donante", "En ningún lado"], answer: 0, why: "Las afirmaciones de impuestos necesitan una fuente oficial o un profesional." },
          { q: "¿Por qué pedir a un colega que conoce el programa que lea el borrador?", options: ["Para compartir la culpa", "Puede encontrar datos falsos o que faltan", "Para que sea más largo", "No sirve de nada"], answer: 1, why: "Alguien que conoce el programa encuentra errores." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para recaudar fondos y escribir solicitudes de subvenciones",
    questions: [
      { q: "Una subvención es:", options: ["Un préstamo", "Una cuenta de impuestos", "Dinero para un fin que no hay que devolver", "Una lista de donantes"], answer: 2, why: "Las subvenciones no se devuelven." },
      { q: "NOFO significa:", options: ["Nueva oficina de operaciones", "Foro abierto sin fines de lucro", "Aviso de obligación financiera", "Aviso de oportunidad de financiamiento"], answer: 3, why: "Un NOFO describe una subvención federal y sus reglas." },
      { q: "Antes de solicitar una subvención federal, tu organización debe:", options: ["Registrarse como entidad en SAM.gov", "Comprar una licencia especial", "Contratar a un cabildero", "Pagarle un cargo a Grants.gov"], answer: 0, why: "Grants.gov pide primero el registro en SAM.gov." },
      { q: "SAM.gov le da a tu organización:", options: ["Una laptop gratis", "Un Identificador Único de Entidad (UEI)", "Una subvención", "Un reembolso de impuestos"], answer: 1, why: "El UEI identifica a tu organización para fondos federales." },
      { q: "¿Cuál es un buen lugar para buscar fundaciones que financian?", options: ["Una aplicación del clima", "Un sitio de compras", "Candid", "Un juego"], answer: 2, why: "Candid tiene listas de organizaciones y financiadores." },
      { q: "¿En qué parte de un NOFO encuentras quién puede solicitar?", options: ["En el logo", "En el pie de página", "En el color de la portada", "En la sección de quién puede solicitar"], answer: 3, why: "Cada NOFO tiene una sección sobre quién puede solicitar." },
      { q: "¿Por qué convertir las guías en una lista de control?", options: ["Si falta una cosa te pueden descalificar", "A los financiadores les gustan las listas", "Hace más larga la solicitud", "Lo exige la ley"], answer: 0, why: "Una lista de control te ayuda a entregar todo." },
      { q: "La lista de control de la IA y las guías del financiador no coinciden. Confía en:", options: ["La IA", "Las guías del financiador", "Lo que sea más fácil", "Ninguna, adivina"], answer: 1, why: "El documento del propio financiador manda." },
      { q: "La mejor forma de empezar una declaración de necesidad con IA es:", options: ["Pedirle que invente números fuertes", "No darle nada", "Darle tus datos y decirle que no agregue estadísticas", "Pegar expedientes de personas atendidas"], answer: 2, why: "Tus datos mantienen cierto el borrador." },
      { q: "Una descripción del programa explica:", options: ["Solo tu número de identificación fiscal", "El clima", "Quién está en la junta", "Qué vas a hacer, para quién y qué va a cambiar"], answer: 3, why: "Esa es su función en una solicitud." },
      { q: "Quieres incluir la historia de una persona atendida. Necesitas:", options: ["Permiso y nada de datos que la identifiquen", "Su nombre completo y su dirección", "Nada", "Una foto de su identificación"], answer: 0, why: "Las historias necesitan consentimiento y privacidad." },
      { q: "Un financiador pregunta si se usó IA. Debes:", options: ["Decir que no", "Responder con honestidad", "No hacer caso a la pregunta", "Pedirle a la IA que responda"], answer: 1, why: "La honestidad protege la confianza." },
      { q: "Un llamado fuerte tiene:", options: ["Diez pedidos", "Ningún pedido", "Una historia, lo que hace un donativo y un pedido claro", "Un informe anual largo"], answer: 2, why: "Lo corto y concreto funciona mejor." },
      { q: "¿Qué es un llamado a la acción?", options: ["Una llamada telefónica", "Un aviso legal", "Una votación de la junta", "Lo único y claro que le pides al lector que haga"], answer: 3, why: "Como \"Dona hoy\"." },
      { q: "¿Qué NUNCA debe entrar en una herramienta de IA?", options: ["Tu lista de donantes con historiales de donación", "\"Hazlo más cálido\"", "El nombre público del programa", "Un límite de palabras"], answer: 0, why: "Los datos de donantes son privados." },
      { q: "¿Por qué hacer plantillas de agradecimiento por tipo de donante?", options: ["Para ahorrar papel", "Los distintos donantes necesitan distintos mensajes", "Los donantes lo exigen", "La IA no puede escribir una"], answer: 1, why: "Los donantes por primera vez y los mensuales tienen una relación distinta con la organización." },
      { q: "La combinación de correspondencia es:", options: ["La unión de dos organizaciones", "Un cobro del correo", "Una herramienta que pone nombres en cartas para muchas personas", "Un modelo de IA"], answer: 2, why: "Personaliza las cartas fuera de la herramienta de IA." },
      { q: "¿Qué hace que un agradecimiento se sienta humano?", options: ["Más espacios en blanco", "Una plantilla más larga", "Mandarlo tarde", "Una línea personal escrita a mano"], answer: 3, why: "La gente nota un toque humano real." },
      { q: "En una revisión final, cada número debe:", options: ["Salir de un registro o una fuente", "Redondearse hacia arriba", "Ser grande", "Venir de la IA"], answer: 0, why: "Los números ciertos mantienen la confianza." },
      { q: "Si un financiador encuentra una afirmación falsa:", options: ["No pasa nada", "Puede no volver a confiar en ti nunca", "Da más dinero", "Es de esperarse"], answer: 1, why: "La confianza es difícil de recuperar." }
    ]
  }
};

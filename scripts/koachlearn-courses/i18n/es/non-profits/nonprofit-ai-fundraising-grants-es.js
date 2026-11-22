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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Líderes, personal de desarrollo de fondos y voluntarios de organizaciones sin fines de lucro y de fe que recaudan dinero y escriben solicitudes de subvenciones, muchas veces con poco tiempo y un equipo pequeño.",
    startingPoint: "Conocen bien sus programas y su comunidad y han escrito algunas cartas de petición o solicitudes de subvenciones pequeñas. Muchos tienen poco tiempo para investigar y escribir, y pocos han usado la IA para subvenciones.",
    gap: "Las fechas límite de subvenciones y las cartas de petición toman horas que un equipo pequeño no tiene, y un solo anexo olvidado o una afirmación falsa puede costar el dinero y la confianza del financiador. Necesitan usar la IA para encontrar oportunidades que les queden, leer las bases y escribir más rápido, manteniendo cada dato verdadero y los datos de los donantes en privado.",
    constraints: [
      "Honestidad: cada número sale de un registro o de una fuente revisada; la IA nunca inventa resultados, socios ni respaldos",
      "Privacidad: las listas de donantes, los nombres y el historial de donativos no entran en herramientas de IA",
      "Las subvenciones federales piden registro en SAM.gov, que es gratis y toma tiempo",
      "Las afirmaciones fiscales y legales se revisan con un contador o con las guías oficiales del IRS",
      "Tiempo: personal y voluntarios con mucho trabajo, así que cada lección dura unos 5 minutos"
    ],
    prerequisites: "\"Introducción a la IA para organizaciones sin fines de lucro\", o algo de experiencia usando un asistente de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con uno de tus programas", action: "encontrar al menos dos oportunidades de subvención que le queden, usando Grants.gov, Candid o financiadores locales", standard: "con los requisitos revisados en cada convocatoria" },
    { id: "O2", condition: "Con las bases públicas de un financiador", action: "crear con ayuda de la IA una lista de verificación de cada sección, límite, anexo y fecha límite", standard: "revisada línea por línea con el documento del propio financiador" },
    { id: "O3", condition: "Con tus propios datos y fuentes revisadas", action: "preparar con la IA una declaración de necesidad y una descripción del programa", standard: "con cada número saliendo de tus registros o de una fuente que revisaste" },
    { id: "O4", condition: "Para un programa", action: "escribir un correo corto de petición a donantes con una historia, lo que logra un donativo y una petición clara", standard: "con espacios en blanco en lugar de datos de donantes" },
    { id: "O5", condition: "Con distintos tipos de donantes", action: "crear plantillas de agradecimiento con espacios en blanco que personalizas tú", standard: "con los nombres y montos agregados solo en tu base de datos de donantes o en la combinación de correspondencia" },
    { id: "O6", condition: "Antes de enviar una solicitud de subvención o una carta de petición", action: "revisar cada número, cada afirmación, el permiso de cada historia y el límite de palabras", standard: "sin resultados, socios ni respaldos inventados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Subvenciones con IA",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "encontrar oportunidades de subvención que van con tu misión y saber qué registro piden las subvenciones federales.",
          quickCheck: [
            { objective: "O1", q: "¿Cuáles son las tres fuentes principales de subvenciones?", options: ["El gobierno, las fundaciones y las empresas", "Los bancos, las tarjetas de crédito y los préstamos", "Los donantes, los voluntarios y los miembros de la junta", "Las escuelas, los hospitales y los tribunales"], answer: 0, why: "Las subvenciones vienen del gobierno, de fundaciones privadas y familiares, y de empresas." },
            { objective: "O1", q: "Quieres buscar fundaciones en Candid, pero no puedes pagar un plan. ¿Qué puedes intentar?", options: ["Olvidarte de las fundaciones", "Preguntar en tu biblioteca pública, porque muchas dan acceso", "Pagarle a un desconocido por una lista", "Pedirle a la IA que enumere todas las fundaciones"], answer: 1, why: "Muchas bibliotecas públicas dan acceso a las funciones pagadas de Candid." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "convertir las guías de un financiador en una lista de control correcta para la entrega.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué puedes pegar las bases de un financiador en un asistente de IA?", options: ["Porque las herramientas de IA siempre son privadas", "Porque el financiador lo dijo", "Porque las bases son públicas", "Porque la IA va a enviar la solicitud por ti"], answer: 2, why: "Las bases son públicas, así que pegarlas no comparte nada privado." },
            { objective: "O2", q: "La lista de la IA dice que la fecha límite es el 15 de marzo, pero las bases dicen el 1 de marzo. ¿Qué haces?", options: ["Usas el 15 de marzo", "Escoges una fecha intermedia", "Le vuelves a preguntar a la IA hasta que esté de acuerdo", "Usas el 1 de marzo, del documento del financiador"], answer: 3, why: "La IA puede cambiar una fecha; el documento del propio financiador siempre manda." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "escribir con IA el borrador de una declaración de necesidad a partir de tus propios datos revisados.",
          quickCheck: [
            { objective: "O3", q: "¿Qué dice la descripción de un programa?", options: ["Qué vas a hacer, para quién y qué va a cambiar", "Las direcciones de casa de los miembros de tu junta", "Tu lista de donantes", "Solo el total del presupuesto"], answer: 0, why: "La descripción de un programa dice qué vas a hacer, para quién y qué va a cambiar." },
            { objective: "O3", q: "Quieres agregar la historia de una familia a tu declaración de necesidad. ¿Qué haces?", options: ["Usas su nombre completo para que se vea real", "Pides permiso y quitas los datos que la identifiquen", "Dejas que la IA invente una historia", "Copias una historia de otro grupo"], answer: 1, why: "Una historia real necesita permiso y no debe tener datos que identifiquen a nadie." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Subvenciones con IA",
        questions: [
          { objective: "O1", q: "¿Dónde están las oportunidades de subvenciones federales?", options: ["En Grants.gov", "En un grupo de redes sociales", "En tu carpeta de correo no deseado", "En el directorio telefónico"], answer: 0, why: "Grants.gov tiene la lista de oportunidades de financiamiento federal." },
          { objective: "O1", q: "Una empresa ofrece registrarte en SAM.gov a cambio de un cobro. ¿Qué sabes?", options: ["Tienes que pagarlo", "El registro en SAM.gov es gratis, así que regístrate tú", "SAM.gov es opcional", "Solo las empresas pueden registrarte"], answer: 1, why: "Grants.gov dice que registrarse es gratis." },
          { objective: "O2", q: "La lista de control de la IA olvida un documento adjunto de las guías. ¿Qué es lo correcto?", options: ["La lista de control", "Ninguno", "Las guías del financiador", "Lo que sea más corto"], answer: 2, why: "El documento del propio financiador siempre manda." },
          { objective: "O3", q: "¿Qué instrucción te protege de estadísticas inventadas?", options: ["\"Escribe una declaración de necesidad.\"", "\"Hazla impresionante.\"", "\"Agrega números fuertes.\"", "\"Usando solo estos datos, escribe... No agregues estadísticas que no te di.\""], answer: 3, why: "Limitar a la IA a tus datos evita números inventados." },
          { objective: "O3", q: "¿Qué explica una declaración de necesidad?", options: ["El problema, a quién afecta y por qué ahora", "Los nombres de tu junta", "Tu horario de oficina", "La lista de donantes"], answer: 0, why: "Ese es el propósito de la sección de necesidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Donantes con IA",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "escribir con IA un llamado a donantes corto y honesto.",
          quickCheck: [
            { objective: "O4", q: "¿Cuántas peticiones debe tener una buena carta de petición?", options: ["Cinco", "Ninguna", "Una petición clara", "Una por cada programa"], answer: 2, why: "Una buena carta de petición tiene una persona o necesidad, lo que logra un donativo y una petición clara." },
            { objective: "O4", q: "Quieres que la IA escriba una carta de petición a tus principales donantes por su nombre. ¿Qué haces?", options: ["Pegas tu lista de donantes en la IA", "Pegas los nombres y el historial de donativos", "No haces la carta", "Escribes el borrador con espacios en blanco y luego agregas los nombres en tu base de datos de donantes"], answer: 3, why: "Las listas de donantes no entran en la IA; agrega los nombres en tu base de datos cuando el borrador esté terminado." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "crear plantillas de agradecimiento con IA y personalizarlas con seguridad.",
          quickCheck: [
            { objective: "O5", q: "¿Qué donantes tienen más probabilidad de volver a donar?", options: ["Los donantes a quienes se les agradece rápido y se les cuenta lo que logró su donativo", "Los donantes que nunca reciben respuesta", "Los donantes que reciben la misma carta que todos", "Los donantes a quienes se les agradece un año después"], answer: 0, why: "Agradecer rápido y contar lo que logró el donativo hace más probable que los donantes vuelvan a dar." },
            { objective: "O5", q: "Tienes lista una plantilla de agradecimiento para un donante mensual. ¿Qué la hace sentir humana?", options: ["Mandarla dos veces", "Agregar una línea escrita a mano cuando puedas", "Usar una letra más grande", "Quitar la oración sobre el impacto"], answer: 1, why: "La gente nota cuando ninguna persona participó; una línea escrita a mano ayuda." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "producir con ayuda de la IA secciones de solicitudes y llamados a donantes honestos y revisados.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una buena forma de detectar un borrador que suena a robot?", options: ["Hacerlo más largo", "Agregar más estadísticas", "Leerlo en voz alta", "Mandarlo de inmediato"], answer: 2, why: "Léelo en voz alta y pide a un colega que conozca el programa que lo lea." },
            { objective: "O6", q: "Tu borrador de subvención dice que atendieron a 300 jóvenes, pero ningún registro lo muestra. ¿Qué haces?", options: ["Lo dejas; suena bien", "Lo redondeas a 250", "Le preguntas a la IA de dónde sacó el número", "Lo quitas o usas el número de tus registros"], answer: 3, why: "Cada número debe salir de un registro o de una fuente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Donantes con IA",
        questions: [
          { objective: "O4", q: "¿Qué frase de un llamado es la más fuerte, si es cierta?", options: ["\"Por favor apoye nuestro trabajo.\"", "\"$50 dan una semana de tutorías después de clases.\"", "\"Necesitamos dinero.\"", "\"Done si puede.\""], answer: 1, why: "Un impacto concreto y cierto ayuda a los donantes a ver lo que logra su donativo." },
          { objective: "O5", q: "¿Dónde agregas los nombres de los donantes a las cartas de agradecimiento?", options: ["Pegando la lista de donantes en la IA", "En redes sociales", "En tu base de datos de donantes o con combinación de correspondencia", "En ningún lado"], answer: 2, why: "Mantener los datos de donantes en tu propio sistema protege su privacidad." },
          { objective: "O6", q: "La IA agrega un socio con el que no trabajas. ¿Qué haces?", options: ["Lo dejas, suena bien", "Le preguntas al socio después", "Lo haces más pequeño", "Lo quitas"], answer: 3, why: "Nunca dejes que la IA invente socios o respaldos." },
          { objective: "O6", q: "Un borrador dice que los donativos son deducibles de impuestos. ¿Dónde lo revisas?", options: ["Con un contador o en la guía oficial del IRS", "En otro chat de IA", "Con un donante", "En ningún lado"], answer: 0, why: "Las afirmaciones de impuestos necesitan una fuente oficial o un profesional." },
          { objective: "O6", q: "¿Por qué pedir a un colega que conoce el programa que lea el borrador?", options: ["Para compartir la culpa", "Puede encontrar datos falsos o que faltan", "Para que sea más largo", "No sirve de nada"], answer: 1, why: "Alguien que conoce el programa encuentra errores." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para recaudar fondos y escribir solicitudes de subvenciones",
    questions: [
      { objective: "O1", q: "Una subvención es:", options: ["Un préstamo", "Una cuenta de impuestos", "Dinero para un fin que no hay que devolver", "Una lista de donantes"], answer: 2, why: "Las subvenciones no se devuelven." },
      { objective: "O1", q: "NOFO significa:", options: ["Nueva oficina de operaciones", "Foro abierto sin fines de lucro", "Aviso de obligación financiera", "Aviso de oportunidad de financiamiento"], answer: 3, why: "Un NOFO describe una subvención federal y sus reglas." },
      { objective: "O1", q: "Antes de solicitar una subvención federal, tu organización debe:", options: ["Registrarse como entidad en SAM.gov", "Comprar una licencia especial", "Contratar a un cabildero", "Pagarle un cargo a Grants.gov"], answer: 0, why: "Grants.gov pide primero el registro en SAM.gov." },
      { objective: "O1", q: "SAM.gov le da a tu organización:", options: ["Una laptop gratis", "Un Identificador Único de Entidad (UEI)", "Una subvención", "Un reembolso de impuestos"], answer: 1, why: "El UEI identifica a tu organización para fondos federales." },
      { objective: "O1", q: "¿Cuál es un buen lugar para buscar fundaciones que financian?", options: ["Una aplicación del clima", "Un sitio de compras", "Candid", "Un juego"], answer: 2, why: "Candid tiene listas de organizaciones y financiadores." },
      { objective: "O1", q: "¿En qué parte de un NOFO encuentras quién puede solicitar?", options: ["En el logo", "En el pie de página", "En el color de la portada", "En la sección de quién puede solicitar"], answer: 3, why: "Cada NOFO tiene una sección sobre quién puede solicitar." },
      { objective: "O2", q: "¿Por qué convertir las guías en una lista de control?", options: ["Si falta una cosa te pueden descalificar", "A los financiadores les gustan las listas", "Hace más larga la solicitud", "Lo exige la ley"], answer: 0, why: "Una lista de control te ayuda a entregar todo." },
      { objective: "O2", q: "La lista de control de la IA y las guías del financiador no coinciden. Confía en:", options: ["La IA", "Las guías del financiador", "Lo que sea más fácil", "Ninguna, adivina"], answer: 1, why: "El documento del propio financiador manda." },
      { objective: "O3", q: "La mejor forma de empezar una declaración de necesidad con IA es:", options: ["Pedirle que invente números fuertes", "No darle nada", "Darle tus datos y decirle que no agregue estadísticas", "Pegar expedientes de personas atendidas"], answer: 2, why: "Tus datos mantienen cierto el borrador." },
      { objective: "O3", q: "Una descripción del programa explica:", options: ["Solo tu número de identificación fiscal", "El clima", "Quién está en la junta", "Qué vas a hacer, para quién y qué va a cambiar"], answer: 3, why: "Esa es su función en una solicitud." },
      { objective: "O3", q: "Quieres incluir la historia de una persona atendida. Necesitas:", options: ["Permiso y nada de datos que la identifiquen", "Su nombre completo y su dirección", "Nada", "Una foto de su identificación"], answer: 0, why: "Las historias necesitan consentimiento y privacidad." },
      { objective: "O3", q: "Un financiador pregunta si se usó IA. Debes:", options: ["Decir que no", "Responder con honestidad", "No hacer caso a la pregunta", "Pedirle a la IA que responda"], answer: 1, why: "La honestidad protege la confianza." },
      { objective: "O4", q: "Un llamado fuerte tiene:", options: ["Diez pedidos", "Ningún pedido", "Una historia, lo que hace un donativo y un pedido claro", "Un informe anual largo"], answer: 2, why: "Lo corto y concreto funciona mejor." },
      { objective: "O4", q: "¿Qué es un llamado a la acción?", options: ["Una llamada telefónica", "Un aviso legal", "Una votación de la junta", "Lo único y claro que le pides al lector que haga"], answer: 3, why: "Como \"Dona hoy\"." },
      { objective: "O4", q: "¿Qué NUNCA debe entrar en una herramienta de IA?", options: ["Tu lista de donantes con historiales de donación", "\"Hazlo más cálido\"", "El nombre público del programa", "Un límite de palabras"], answer: 0, why: "Los datos de donantes son privados." },
      { objective: "O5", q: "¿Por qué hacer plantillas de agradecimiento por tipo de donante?", options: ["Para ahorrar papel", "Los distintos donantes necesitan distintos mensajes", "Los donantes lo exigen", "La IA no puede escribir una"], answer: 1, why: "Los donantes por primera vez y los mensuales tienen una relación distinta con la organización." },
      { objective: "O5", q: "La combinación de correspondencia es:", options: ["La unión de dos organizaciones", "Un cobro del correo", "Una herramienta que pone nombres en cartas para muchas personas", "Un modelo de IA"], answer: 2, why: "Personaliza las cartas fuera de la herramienta de IA." },
      { objective: "O5", q: "¿Qué hace que un agradecimiento se sienta humano?", options: ["Más espacios en blanco", "Una plantilla más larga", "Mandarlo tarde", "Una línea personal escrita a mano"], answer: 3, why: "La gente nota un toque humano real." },
      { objective: "O6", q: "En una revisión final, cada número debe:", options: ["Salir de un registro o una fuente", "Redondearse hacia arriba", "Ser grande", "Venir de la IA"], answer: 0, why: "Los números ciertos mantienen la confianza." },
      { objective: "O6", q: "Si un financiador encuentra una afirmación falsa:", options: ["No pasa nada", "Puede no volver a confiar en ti nunca", "Da más dinero", "Es de esperarse"], answer: 1, why: "La confianza es difícil de recuperar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      2,
      6,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Subvención adecuada",
        objective: "O1",
        notYet: "La subvención no le queda al programa, o no se revisaron los requisitos.",
        meets: "Una oportunidad real que le queda al programa, con los requisitos revisados.",
        exceeds: "Anota una segunda oportunidad y la fecha límite de cada una."
      },
      {
        name: "Sigue las bases",
        objective: "O2",
        notYet: "Falta una sección, un límite o un anexo que se pide.",
        meets: "Los borradores siguen la lista de verificación, las secciones y los límites de palabras del financiador.",
        exceeds: "La lista de verificación se revisó línea por línea con el documento del financiador."
      },
      {
        name: "Necesidad y programa con datos reales",
        objective: "O3",
        notYet: "Una estadística o un resultado no sale de ningún registro o fuente.",
        meets: "Una declaración de necesidad de unas 250 palabras y una descripción del programa que usan solo datos revisados.",
        exceeds: "Usa las palabras y las prioridades del financiador e incluye una historia con permiso."
      },
      {
        name: "Carta de petición a donantes",
        objective: "O4",
        notYet: "No hay una petición clara, o hay datos de donantes en la instrucción.",
        meets: "Unas 150 palabras con una historia, lo que logra un donativo y una petición clara, usando espacios en blanco.",
        exceeds: "El monto y lo que logra salen de los costos reales del programa."
      },
      {
        name: "Honesto y con nuestra voz",
        objective: "O6",
        notYet: "Queda un resultado, un socio o un respaldo inventado.",
        meets: "Cada afirmación es cierta y las dos piezas suenan a la organización.",
        exceeds: "Un colega que conoce el programa lo leyó y lo aprobó."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Solicitudes de subvención enviadas en 90 días (encuesta de seguimiento)",
      "Subvenciones ganadas y dinero recaudado con cartas de petición, según informen las organizaciones",
      "Estudiantes que empiezan otro curso de Koach Learn para organizaciones sin fines de lucro en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Un asistente de IA gratis",
      "Los datos y registros de tu programa, y las bases públicas de un financiador",
      "Unos 60 minutos en total, más tiempo para editar los borradores"
    ],
    facilitatorNotes: [
      "Pide a los estudiantes que lleven a la sesión una oportunidad de subvención real y los números de su programa.",
      "Recuerda a los estudiantes que nunca peguen listas de donantes, nombres ni historiales de donativos en herramientas de IA.",
      "Advierte a los estudiantes sobre las empresas que cobran por registrarlos en SAM.gov; es gratis.",
      "Forma parejas para que lean en voz alta el borrador del otro y busquen la fuente de cada número.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

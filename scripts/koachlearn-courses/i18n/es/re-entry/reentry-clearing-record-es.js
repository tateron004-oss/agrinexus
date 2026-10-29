"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-clearing-record.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-clearing-record-es",
  lang: "es",
  translationOf: "reentry-clearing-record",
  category: "Re-Entry",
  name: "Limpiar tus antecedentes: borrado y alivio de antecedentes penales",
  skills: "Conseguir una copia de tus antecedentes, Entender las palabras del alivio de antecedentes, Encontrar ayuda legal gratis, Preparar un expediente para el alivio de antecedentes, Usar tus derechos de contratación justa",
  outcome: "conseguir una copia de tus antecedentes penales, nombrar los tipos de alivio de antecedentes que podrían servir para tus casos, encontrar ayuda legal gratis y reunir los papeles que necesitas para pedir el alivio con esa ayuda.",
  about: [
    "Los antecedentes penales pueden seguirte a entrevistas de trabajo, solicitudes de vivienda y a la escuela. En muchos estados, incluido California, la ley da maneras de limpiar los antecedentes o de limitar quién puede verlos. Mucha gente que califica nunca lo pide, porque nadie le enseñó cómo.",
    "Este curso te enseña cómo conseguir una copia de tus propios antecedentes; qué significan palabras como borrado (expungement), anulación (dismissal), sellado (sealing) y certificado de rehabilitación; en qué se diferencian los antecedentes federales y estatales; dónde encontrar ayuda legal gratis; cómo preparar tus papeles, y qué dice la Fair Chance Act de California sobre las ofertas de trabajo. Los ejemplos son de California, y cada lección te dice dónde revisar las reglas de tu propio estado.",
    "Esto no es asesoría legal. Las leyes son distintas en cada estado y cambian. Usa este curso para prepararte y luego busca ayuda de un abogado, una oficina de asistencia legal o un centro de autoayuda del tribunal antes de presentar cualquier cosa.",
    "Cada lección dura unos cinco minutos y termina con una tarea que haces enseguida. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un plan de acción de una página para limpiar tus antecedentes: dónde vas a conseguir tus antecedentes, cada caso que conoces (condado, año, cargo) y el tipo de alivio que podría servirle, la ayuda legal gratis a la que vas a contactar primero, los papeles que vas a reunir y una declaración de rehabilitación corta y honesta que podrías darle a un empleador después de una oferta de trabajo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas adultas con antecedentes penales, muchas de ellas de regreso a casa después de estar en prisión, a quienes sus antecedentes les cierran puertas para conseguir empleo, vivienda o estudios. Los ejemplos usan California, con indicaciones para revisar las reglas de otros estados.",
    startingPoint: "Recuerdan algunos de sus casos de memoria. La mayoría nunca ha visto sus propios antecedentes oficiales, no conoce las palabras del alivio de antecedentes y no sabe dónde hay ayuda legal gratis.",
    gap: "Muchas personas que califican para el alivio de antecedentes nunca lo piden porque nadie les enseñó cómo. Necesitan conseguir sus antecedentes, nombrar el alivio que podría aplicarles, encontrar ayuda legal gratis y preparar sus papeles, para que un abogado o una clínica presente la solicitud por ellas y puedan defender sus derechos al buscar empleo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca con internet",
      "Tiempo: lecciones de unos 5 minutos que caben entre el trabajo y las citas",
      "No es asesoría legal: las leyes cambian según el estado y con el tiempo; antes de presentar cualquier cosa, se busca ayuda de un abogado, de asistencia legal o de un centro de autoayuda del tribunal",
      "Privacidad: los detalles de los casos no se ponen en herramientas de IA ni en computadoras compartidas"
    ],
    prerequisites: "Ninguno. \"Introducción a la IA y a la confianza digital\" ayuda a quienes no tienen experiencia buscando sitios web oficiales."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando el sitio web oficial de tu estado", action: "pedir una copia de tus propios antecedentes penales y encontrar dónde conseguir tus antecedentes federales y los del tribunal", standard: "anotando el nombre del formulario, el costo, la exención de pago y el lugar más cercano para tomar las huellas" },
    { id: "O2", condition: "Con las palabras del alivio de antecedentes", action: "explicar la diferencia entre borrado, sellado, anulación de la condena o desestimación, certificado de rehabilitación e indulto", standard: "con una oración sencilla y correcta para cada una" },
    { id: "O3", condition: "Con tu lista de casos", action: "identificar si cada caso es federal o estatal y revisar si podría aplicarse el alivio automático", standard: "con cada caso marcado y un plan para revisar tus antecedentes más recientes" },
    { id: "O4", condition: "Usando fuentes oficiales y organizaciones sin fines de lucro", action: "encontrar dos lugares gratis que ayuden con el alivio de antecedentes y preparar preguntas para la primera llamada", standard: "con nombre, teléfono, horario y tres preguntas para cada uno, y ningún servicio pagado que garantice resultados" },
    { id: "O5", condition: "Con tus casos y pruebas de tu vida actual", action: "armar una carpeta de alivio de antecedentes que un abogado o una clínica pueda usar", standard: "con el condado, el año y el cargo de cada caso y una lista de las pruebas que todavía faltan" },
    { id: "O6", condition: "Usando la Fair Chance Act de California", action: "explicar cuándo un empleador puede revisar tus antecedentes y escribir una declaración de rehabilitación corta", standard: "con una declaración honesta y corta que diga lo que has hecho desde entonces" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conoce tus antecedentes y tus opciones",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conseguir una copia de tus propios antecedentes",
          minutes: 5,
          goal: "Pedir una copia de tus antecedentes penales estatales y saber dónde encontrar tus antecedentes federales y los del tribunal.",
          text: [
            "No puedes arreglar lo que no puedes ver. Antes de pedir cualquier alivio de antecedentes, consigue una copia de tus propios antecedentes. Muestran cada arresto y cada caso, el condado, las fechas y cómo terminó cada caso. Los antecedentes muchas veces tienen errores o resultados que faltan.",
            "En California, el Departamento de Justicia (DOJ, por sus siglas en inglés) tiene un servicio llamado Record Review (revisión de antecedentes). Si vives en California, llenas el formulario BCIA 8016RR, marcas Record Review como tipo de solicitud y lo llevas a un sitio de Live Scan (toma digital de huellas) para que te tomen las huellas. El DOJ cobra $25 por el trámite (puedes pedir que no te lo cobren) y el sitio de Live Scan cobra su propia tarifa. Si vives fuera de California, envías por correo el formulario BCIA 8705 con una tarjeta de huellas. Revisa oag.ca.gov para ver el formulario y la tarifa actuales.",
            "Tus antecedentes pueden estar en más de un lugar. Los antecedentes estatales cubren los casos del estado. El FBI guarda unos antecedentes nacionales llamados Identity History Summary (resumen de historial de identidad); revisa fbi.gov para saber cómo pedirlo y cuánto cuesta ahora. Cada tribunal de condado también guarda sus propios expedientes, que puedes pedir en la oficina del secretario del tribunal.",
            "Si encuentras un error en tus antecedentes de California, el DOJ te manda con ellos un formulario llamado BCIA 8706, Claim of Alleged Inaccuracy or Incompleteness (reclamo por datos incorrectos o incompletos). Lo devuelves por correo con pruebas."
          ],
          steps: ["Elige qué antecedentes necesitas primero: normalmente los estatales.", "En California, llena el BCIA 8016RR y marca Record Review.", "Ve a un sitio de Live Scan para que te tomen las huellas y paga las tarifas, o pregunta por la exención de pago.", "Cuando lleguen tus antecedentes, haz una lista de cada caso: condado, número de caso si aparece, fecha, cargo y resultado.", "Marca todo lo que parezca incorrecto o incompleto, y guarda tus antecedentes en una carpeta segura."],
          words: [["Antecedentes penales", "la lista oficial de tus arrestos y casos judiciales que guarda el estado o el FBI."], ["Live Scan", "una máquina que toma tus huellas de forma digital y las envía al estado."], ["Record Review", "el servicio del DOJ de California que te deja ver tus propios antecedentes estatales."], ["Resultado del caso", "cómo terminó un caso; por ejemplo, desestimado, con condena o con absolución. En inglés se dice disposition."]],
          slides: [
            { title: "Primero mira tus antecedentes", bullets: ["No puedes arreglar lo que no puedes ver", "Los antecedentes muchas veces tienen errores o resultados que faltan"] },
            { title: "Record Review en California", bullets: ["Formulario BCIA 8016RR, marca Record Review", "Huellas en un sitio de Live Scan", "Tarifa del DOJ de $25, hay exención de pago; revisa oag.ca.gov"] },
            { title: "Otros lugares donde están tus antecedentes", bullets: ["Identity History Summary del FBI: revisa fbi.gov", "Expedientes del tribunal del condado: pídelos al secretario"] },
            { title: "¿Encontraste un error?", bullets: ["California manda el formulario BCIA 8706 con tus antecedentes", "Devuélvelo por correo con pruebas"] }
          ],
          sources: [
            { name: "DOJ de California: Record Review (pide tus propios antecedentes)", url: "https://oag.ca.gov/fingerprints/record-review" },
            { name: "DOJ de California: Pide una exención de pago", url: "https://oag.ca.gov/fingerprints/record-review/fee-waiver" },
            { name: "FBI: Identity History Summary (resumen de historial de identidad)", url: "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks" }
          ],
          tryIt: "Busca la página oficial donde tu estado te deja pedir tus propios antecedentes (en California, Record Review en oag.ca.gov). Anota el nombre del formulario, la tarifa, si hay exención de pago y el lugar más cercano para tomarte las huellas.",
          youCanNow: "pedir una copia de tus antecedentes estatales, decir dónde se guardan tus antecedentes del FBI y del tribunal, y encontrar errores para reclamarlos.",
          quickCheck: [
            { objective: "O1", q: "En California, ¿qué necesitas hacer para ver tus propios antecedentes estatales?", options: ["Llamar a la estación de policía", "Llenar el formulario Record Review del DOJ y tomarte las huellas en un sitio de Live Scan", "Pedirle a un asistente de IA que los busque", "Pagarle a un sitio web de verificación de antecedentes"], answer: 1, why: "El Record Review del DOJ de California usa un formulario y huellas tomadas con Live Scan." },
            { objective: "O1", q: "Recibes tus antecedentes y ves un caso que no es tuyo. ¿Qué harías?", options: ["Ignorarlo", "Pedirle a la IA que lo borre", "Esperar a que un empleador pregunte", "Reclamarlo con el formulario oficial para errores"], answer: 3, why: "Conseguir tus antecedentes te permite encontrar errores y reclamarlos de forma oficial." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Qué significan las palabras del alivio de antecedentes",
          minutes: 5,
          goal: "Explicar la diferencia entre borrado, anulación, sellado, anulación de la condena (set-aside), certificado de rehabilitación e indulto.",
          text: [
            "La gente dice expungement (borrado) para casi cualquier forma de limpiar los antecedentes, pero las palabras reales y lo que hacen cambian en cada estado. Conocer las palabras te ayuda a hacer las preguntas correctas.",
            "Expungement (borrado) normalmente significa que los antecedentes se borran o se destruyen. Sealing (sellado) significa que los antecedentes siguen existiendo, pero la mayoría de la gente, como muchos empleadores y arrendadores, no puede verlos. Un set-aside o dismissal (anulación) significa que el tribunal vuelve a abrir una condena y la anula, así que en la mayoría de los casos ya no tienes que decir que te condenaron. Los tribunales de California dicen que el borrado real no existe en California; lo que allí la gente llama borrado normalmente es una anulación.",
            "Un certificado de rehabilitación es una orden del tribunal que dice que has vivido respetando la ley desde tu sentencia. En algunos estados puede ayudar con licencias o ser un paso hacia un indulto. Un indulto (pardon) es el perdón de un gobernador (por delitos estatales) o del Presidente (por delitos federales).",
            "Ninguna de estas opciones limpia siempre los antecedentes para todo. Algunos empleos del gobierno, licencias, reglas sobre armas de fuego y trámites de inmigración siguen viendo casos viejos. Un abogado puede decirte qué hace cada opción en tu caso."
          ],
          words: [["Borrado (expungement)", "borrar o destruir los antecedentes; en muchos lugares la palabra se usa para cualquier limpieza de antecedentes."], ["Sellado (sealing)", "los antecedentes siguen existiendo, pero la mayoría del público no puede verlos."], ["Anulación (set-aside o dismissal)", "un tribunal vuelve a abrir una condena y la anula."], ["Certificado de rehabilitación", "una orden del tribunal que dice que has vivido respetando la ley desde tu sentencia."], ["Indulto (pardon)", "el perdón oficial de un gobernador o del Presidente."]],
          slides: [
            { title: "La misma meta, palabras distintas", bullets: ["Cada estado usa sus propias palabras", "Conocerlas te ayuda a hacer las preguntas correctas"] },
            { title: "Borrar, ocultar o anular", bullets: ["Borrado (expungement): se borran los antecedentes", "Sellado (sealing): ocultos para la mayoría de la gente", "Anulación (set-aside o dismissal): el tribunal anula la condena"] },
            { title: "Otros tipos de alivio", bullets: ["Certificado de rehabilitación: el tribunal dice que cambiaste", "Indulto: perdón de un gobernador o del Presidente"] },
            { title: "Límites", bullets: ["California: el borrado real no existe", "Algunos empleos, licencias e inmigración siguen viendo casos viejos", "Pregúntale a un abogado qué hace cada opción en tu caso"] }
          ],
          sources: [
            { name: "Guía de autoayuda de los tribunales de California: Limpia tus antecedentes", url: "https://selfhelp.courts.ca.gov/clean-your-record" }
          ],
          tryIt: "Haz una tabla pequeña con cinco filas: borrado, sellado, anulación (set-aside o dismissal), certificado de rehabilitación e indulto. Al lado de cada una, escribe una oración sencilla sobre lo que hace. Luego escribe una pregunta sobre tu propio caso para hacerle a un abogado.",
          youCanNow: "explicar con palabras sencillas los principales tipos de alivio de antecedentes y decir por qué igual le preguntas a un abogado qué hace cada uno en tu caso.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace por lo general el sellado de antecedentes?", options: ["Guarda los antecedentes pero los oculta a la mayoría de la gente", "Destruye todas las copias para siempre", "Convierte un delito grave en una multa", "Te da un indulto"], answer: 0, why: "Unos antecedentes sellados siguen existiendo, pero la mayoría de la gente no los puede ver." },
            { objective: "O2", q: "No sabes qué alivio le sirve a tu caso. ¿Qué harías?", options: ["Elegir el que tenga el nombre más bonito", "Pedirlos todos a la vez", "Anotar tu pregunta y consultarla con un abogado o con asistencia legal", "Preguntarle a un amigo que tuvo un caso distinto"], answer: 2, why: "Un abogado o la asistencia legal pueden decirte qué alivio le sirve a tu propio caso." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Casos federales, estatales y Clean Slate de California",
          minutes: 5,
          goal: "Saber si cada uno de tus casos es federal o estatal y revisar si el alivio automático de California ya podría aplicarse.",
          text: [
            "Cada caso pertenece al sistema que presentó los cargos. Un caso estatal pasó por un tribunal de condado y se maneja con las leyes de ese estado. Un caso federal pasó por un Tribunal de Distrito de Estados Unidos (US District Court). El alivio estatal no puede limpiar una condena federal, y el alivio federal no limpia condenas estatales.",
            "El alivio para condenas federales es muy limitado. El camino principal es un indulto presidencial. La Oficina del Abogado de Indultos (Office of the Pardon Attorney) del Departamento de Justicia de Estados Unidos recibe solicitudes de indulto de personas con condenas federales que ya terminaron su sentencia.",
            "California tiene leyes llamadas Clean Slate (borrón y cuenta nueva). Cada mes, el DOJ de California revisa sus registros, marca los arrestos y condenas que califican como que reciben alivio y avisa a los tribunales. No tienes que presentar nada para este alivio automático, y el DOJ no te avisa cuando pasa. Una ley de 2022, SB 731, agregó muchos más delitos graves (felonies) a partir de 2024.",
            "El alivio automático limita quién puede ver un caso, pero no lo anula, no lo sella ni lo borra. Algunos empleadores que revisan huellas, como la policía y las escuelas, todavía pueden verlo. Para saber si lo recibiste, pide tus propios antecedentes. Para una anulación, un sellado o una reducción del cargo, igual tienes que presentar una petición en el tribunal."
          ],
          steps: ["Para cada caso de tus antecedentes, escribe el tribunal: un tribunal de condado significa estatal; un US District Court significa federal.", "Para casos federales, mira la página de la Office of the Pardon Attorney.", "En California, revisa en tus nuevos antecedentes del DOJ si hay una nota que diga que se dio el alivio.", "Haz una lista de los casos que todavía necesitan una petición en el tribunal."],
          words: [["Caso federal", "un caso presentado por el gobierno de Estados Unidos y visto en un US District Court."], ["Caso estatal", "un caso presentado según la ley estatal y visto en un tribunal de condado."], ["Clean Slate", "leyes que dan algo de alivio de antecedentes de forma automática, sin petición."], ["Petición", "una solicitud por escrito que presentas para pedirle algo a un tribunal."]],
          slides: [
            { title: "¿Federal o estatal?", bullets: ["Tribunal de condado = caso estatal", "US District Court = caso federal", "Cada sistema limpia solo sus propios casos"] },
            { title: "Condenas federales", bullets: ["El alivio es muy limitado", "Camino principal: indulto presidencial", "Office of the Pardon Attorney, justice.gov/pardon"] },
            { title: "Clean Slate de California", bullets: ["El DOJ revisa los registros cada mes", "No necesitas petición; el DOJ no te avisa", "SB 731 agregó más delitos graves a partir de 2024"] },
            { title: "Lo que el alivio automático no hace", bullets: ["No anula, no sella ni borra", "Algunas revisiones de huellas todavía pueden verlo", "La anulación o el sellado siguen necesitando una petición"] }
          ],
          sources: [
            { name: "DOJ de California: Alivio automático de antecedentes (Código Penal 851.93 y 1203.425)", url: "https://oag.ca.gov/fingerprints/automatic-record-relief-penal-code-sections-851.93-and-1203.425" },
            { name: "Office of the Pardon Attorney del DOJ de EE. UU.: Solicita clemencia", url: "https://www.justice.gov/pardon/apply-clemency" }
          ],
          tryIt: "Con tus antecedentes o con lo que recuerdes, haz una lista de cada caso y escribe al lado estatal o federal. Si vives en California, anota si tus antecedentes más recientes del DOJ muestran alivio automático en algún caso, o planea pedirlos para averiguarlo.",
          youCanNow: "separar tus casos en federales y estatales, explicar qué hace y qué no hace el alivio automático de California y hacer una lista de los casos que todavía necesitan una petición.",
          quickCheck: [
            { objective: "O3", q: "Tu caso se vio en un tribunal superior de un condado. ¿Qué tipo de caso es?", options: ["Un caso federal", "Un caso estatal", "Un caso militar", "Solo un caso civil"], answer: 1, why: "Los tribunales superiores de los condados ven casos estatales." },
            { objective: "O3", q: "Vives en California y crees que el alivio automático podría aplicarse a un caso viejo. ¿Qué harías?", options: ["Dar por hecho que ya se borró", "Presentar una petición federal", "Pedirle a un empleador que lo revise", "Pedir tus antecedentes más recientes al DOJ y buscar la nota del alivio"], answer: 3, why: "Tus antecedentes más recientes del DOJ muestran si se aplicó el alivio automático." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conoce tus antecedentes y tus opciones",
        questions: [
          { objective: "O1", q: "¿Cuál es el mejor primer paso antes de pedir alivio de antecedentes?", options: ["Decirle a cada empleador que no tienes antecedentes", "Conseguir una copia de tus propios antecedentes", "Pagarle a un sitio web para que borre tus antecedentes", "Esperar a que el tribunal te llame"], answer: 1, why: "Tus antecedentes muestran cada caso y su resultado, así sabes qué arreglar y puedes encontrar errores." },
          { objective: "O1", q: "En California, ¿cómo ves tus propios antecedentes estatales?", options: ["Le preguntas a un amigo en el tribunal", "Buscas tu nombre en redes sociales", "Llamas al 911", "Llenas el formulario de Record Review del DOJ y te tomas las huellas en un sitio de Live Scan"], answer: 3, why: "El Record Review del DOJ de California usa el formulario BCIA 8016RR y huellas de Live Scan." },
          { objective: "O2", q: "¿Qué opción conserva los antecedentes pero los oculta para la mayoría de la gente?", options: ["El sellado", "Una multa de tránsito", "La libertad a prueba", "Una orden de arresto"], answer: 0, why: "Sellado significa que los antecedentes siguen existiendo, pero la mayoría del público no puede verlos." },
          { objective: "O3", q: "Tu única condena es de un US District Court. ¿Qué camino es el más probable?", options: ["Una anulación de California", "Un programa Clean Slate del condado", "Un indulto presidencial", "Un cambio en tu certificado de estudios"], answer: 2, why: "Un caso de un US District Court es federal y el alivio estatal no puede limpiarlo; el camino principal es un indulto presidencial." },
          { objective: "O3", q: "¿Qué es cierto sobre el alivio automático de antecedentes de California?", options: ["Borra el caso por completo", "Tienes que presentar una petición para recibirlo", "El DOJ te llama cuando está listo", "Limita quién puede ver un caso, pero no lo anula"], answer: 3, why: "El alivio automático agrega una nota que limita quién puede verlo; el caso no se anula ni se borra." }
        ]
      }
    },
    {
      name: "Capítulo 2: Busca ayuda, prepárate y usa tus derechos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar ayuda legal gratis",
          minutes: 5,
          goal: "Encontrar dos lugares gratis que puedan ayudarte con el alivio de antecedentes y prepararte para la primera llamada.",
          text: [
            "Las leyes de alivio de antecedentes son complicadas, y un error te puede costar meses. La buena noticia: mucha ayuda es gratis. La guía de autoayuda de los tribunales de California tiene un formulario Get started (empieza aquí) que te hace algunas preguntas y te da instrucciones para tu situación, además de una página de ayuda legal.",
            "Lugares que muchas veces ayudan gratis: centros de autoayuda de los tribunales, oficinas de asistencia legal, oficinas de defensores públicos (unos 19 condados de California tienen programas para limpiar antecedentes), clínicas de facultades de derecho, organizaciones para personas que regresan a la comunidad y clínicas de un día para limpiar antecedentes. En California, el servicio Clear My Record conecta a la gente con ayuda legal en algunos condados.",
            "Si no eres ciudadano de Estados Unidos, habla con un abogado de inmigración antes de presentar cualquier cosa. Los trámites en el tribunal pueden afectar tu situación migratoria, y algunos tipos de alivio no cuentan para inmigración.",
            "Ten cuidado con quien promete borrar tus antecedentes por mucho dinero, garantiza un resultado o te pide pagar antes de decirte qué va a hacer. La ayuda real primero te explica tus opciones."
          ],
          steps: ["Entra al sitio web de autoayuda del tribunal de tu estado (en California, selfhelp.courts.ca.gov, Clean your record).", "Encuentra dos lugares de ayuda gratis: un centro de autoayuda, asistencia legal, un programa del defensor público o una clínica para limpiar antecedentes.", "Anota su teléfono, su horario y lo que te piden llevar.", "Prepara tres preguntas antes de llamar.", "Si no eres ciudadano, contacta primero a un abogado de inmigración."],
          words: [["Asistencia legal", "ayuda legal gratis para personas con pocos ingresos. En inglés se dice legal aid."], ["Defensor público", "un abogado del gobierno para personas que no pueden pagar; muchos también tienen programas para limpiar antecedentes."], ["Clínica para limpiar antecedentes", "un evento donde abogados voluntarios ayudan a la gente a llenar los papeles del alivio de antecedentes, normalmente gratis. En inglés se dice clean slate clinic."]],
          slides: [
            { title: "No tienes que hacerlo solo", bullets: ["Las leyes son complicadas; los errores cuestan tiempo", "Mucha ayuda es gratis"] },
            { title: "Lugares gratis donde preguntar", bullets: ["Centros de autoayuda de los tribunales y asistencia legal", "Programas del defensor público para limpiar antecedentes", "Clínicas de facultades de derecho y clínicas de un día"] },
            { title: "¿No eres ciudadano de EE. UU.?", bullets: ["Habla primero con un abogado de inmigración", "Algunos tipos de alivio no cuentan para inmigración"] },
            { title: "Señales de alerta", bullets: ["Cobros grandes por borrar tus antecedentes", "Resultados garantizados", "Primero pagas, después te explican"] }
          ],
          sources: [
            { name: "Guía de autoayuda de los tribunales de California: Limpia tus antecedentes", url: "https://selfhelp.courts.ca.gov/clean-your-record" },
            { name: "Guía de autoayuda de los tribunales de California: Ayuda legal para limpiar tus antecedentes", url: "https://selfhelp.courts.ca.gov/clean-your-record/legal-help" }
          ],
          tryIt: "Encuentra cerca de ti dos lugares de ayuda legal gratis para el alivio de antecedentes. Para cada uno, escribe el nombre, el teléfono, el horario y qué llevar. Luego escribe tres preguntas que vas a hacer, como: ¿Cuáles de mis casos se pueden limpiar? ¿Qué tipo de alivio me sirve? ¿Cuánto tiempo va a tomar?",
          youCanNow: "encontrar ayuda legal gratis para el alivio de antecedentes, prepararte para la primera llamada y reconocer ofertas pagadas que son señales de alerta.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es un lugar gratis para buscar ayuda con el alivio de antecedentes?", options: ["Un sitio web que garantiza resultados a cambio de un pago alto", "Un centro de autoayuda del tribunal", "Un desconocido en las redes sociales", "Una oficina de fianzas"], answer: 1, why: "Los centros de autoayuda de los tribunales dan ayuda gratis con los formularios del tribunal." },
            { objective: "O4", q: "Alguien te promete limpiar tus antecedentes seguro si le pagas $1,000 hoy. ¿Qué harías?", options: ["Irte y buscar ayuda legal gratis", "Pagar la mitad ahora", "Pagar con una tarjeta de regalo", "Darle los detalles de tu caso para que los revise"], answer: 0, why: "Las garantías y los pagos altos por adelantado son señales de alerta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Prepararte y presentar con ayuda",
          minutes: 6,
          goal: "Armar una carpeta de alivio de antecedentes que un abogado o una clínica pueda usar para presentar por ti.",
          text: [
            "Los abogados y las clínicas pueden ayudarte mucho más rápido si llegas organizado. Arma una sola carpeta, en papel o digital, con todo lo de tus casos.",
            "Pon en ella: una copia de tus antecedentes; una lista de cada caso con el condado, el número de caso, el año y el cargo; pruebas de que terminaste la libertad a prueba (probation) o la libertad condicional (parole) o tus programas; pruebas de que pagaste multas, cargos y la restitución, o lo que todavía debes; y pruebas de tu vida de ahora, como cartas de trabajo, certificados, clases, tratamiento, trabajo voluntario y cartas de apoyo.",
            "Quien te ayude va a elegir los formularios correctos, presentarlos en el tribunal correcto y decirte si hay una audiencia. Pídele que te explique cada formulario antes de firmar. Guarda copias de todo lo que presentes y anota cada fecha.",
            "Cuando el tribunal te dé el alivio, pide una copia de la orden. Unos meses después, vuelve a pedir tus antecedentes para asegurarte de que se actualizaron. Si no, contacta a quien te ayudó o al secretario del tribunal."
          ],
          steps: ["Empieza una carpeta para tu alivio de antecedentes.", "Agrega tus antecedentes y una lista de cada caso: condado, número de caso, año y cargo.", "Agrega pruebas de que terminaste la libertad a prueba o condicional y los programas, y de las multas pagadas o que debes.", "Agrega pruebas de tu vida de ahora: trabajo, estudios, tratamiento, voluntariado y cartas de apoyo.", "Lleva la carpeta a quien te ayuda; guarda copias de todo lo presentado y todas las fechas.", "Cuando te den el alivio, guarda la orden y vuelve a revisar tus antecedentes más adelante."],
          words: [["Número de caso", "el número que un tribunal le da a cada caso; ayuda a encontrar el expediente rápido."], ["Restitución", "dinero que un tribunal te ordena pagarle a la víctima de un delito."], ["Audiencia", "una reunión en el tribunal donde un juez escucha y decide."], ["Orden", "la decisión del juez por escrito."]],
          slides: [
            { title: "Llega organizado", bullets: ["Una sola carpeta, en papel o digital", "Quien te ayuda trabaja más rápido con tus papeles listos"] },
            { title: "Qué va en la carpeta", bullets: ["Tus antecedentes y una lista de cada caso", "Pruebas de que terminaste la libertad a prueba o condicional y programas", "Multas y restitución: pagadas o lo que todavía debes"] },
            { title: "Pruebas de tu vida de ahora", bullets: ["Cartas de trabajo y talones de pago", "Certificados, clases, tratamiento", "Trabajo voluntario y cartas de apoyo"] },
            { title: "Después de presentar", bullets: ["Guarda copias y anota cada fecha", "Consigue una copia de la orden del juez", "Revisa tus antecedentes otra vez unos meses después"] }
          ],
          tryIt: "Empieza hoy tu carpeta de alivio de antecedentes. Escribe la lista de los casos que conoces (condado, año, cargo) y una lista de las pruebas que todavía tienes que reunir. Pon una estrella al lado de los dos primeros papeles que vas a conseguir esta semana.",
          youCanNow: "armar una carpeta de alivio de antecedentes, trabajar con alguien que te ayude a presentarla y revisar después que tus antecedentes se actualizaron.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un número de caso?", options: ["Tu número de Seguro Social", "Tu número de identificación de la prisión", "El número que un tribunal le da a cada caso", "Tu número de teléfono"], answer: 2, why: "Cada caso en un tribunal tiene su propio número de caso." },
            { objective: "O5", q: "El tribunal te concedió el alivio. ¿Qué harías después?", options: ["No volver a pensar en eso", "Pedir otra vez tus antecedentes para confirmar que se actualizaron", "Decirles a los empleadores que no tienes antecedentes sin revisar", "Tirar tu carpeta"], answer: 1, why: "Revisar otra vez tus antecedentes confirma que el alivio aparece." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contratación justa y tus derechos",
          minutes: 6,
          goal: "Explicar la Fair Chance Act de California y preparar una declaración de rehabilitación corta para un empleador.",
          text: [
            "La Fair Chance Act (ley de oportunidad justa) de California cubre a los empleadores públicos y a los empleadores privados con cinco o más empleados, con algunas excepciones, como los empleos donde una ley exige revisar antecedentes. La mayoría de los empleadores cubiertos no pueden preguntar por tus condenas en la solicitud, revisar tus antecedentes ni publicar anuncios que digan No Felons (no se aceptan personas con delitos graves) antes de ofrecerte el trabajo.",
            "Después de una oferta de trabajo condicional, pueden revisar tus antecedentes, pero nunca pueden usar arrestos que no terminaron en condena (con pocas excepciones), condenas que se sellaron, se anularon o se borraron, casos cerrados después de un programa de desvío (diversion) ni, en la mayoría de los casos, condenas de hace más de siete años. No pueden rechazarte solo por tener antecedentes. Tienen que mirar tu situación y el trabajo.",
            "Si quieren retirar la oferta, tienen que avisarte por escrito, darte una copia del informe con la lista de condenas y darte al menos cinco días hábiles para responder con pruebas de rehabilitación o para mostrar un error en el informe. Si crees que un empleador violó la ley, puedes contactar al Departamento de Derechos Civiles de California (California Civil Rights Department). Otros estados y ciudades tienen sus propias reglas, muchas veces llamadas ban the box (quitar la casilla); revisa las tuyas.",
            "Prepara ahora una declaración corta y honesta: qué pasó, en una oración; qué has hecho desde entonces, y por qué estás listo para este trabajo. Reúne pruebas, como certificados, programas terminados, cartas de apoyo y una carta de fianza laboral (bonding letter) si tienes una."
          ],
          steps: ["Revisa si tu estado o tu ciudad tiene una ley de contratación justa o de ban the box.", "Escribe una oración sobre lo que pasó, sin excusas.", "Escribe dos o tres oraciones sobre lo que has hecho desde entonces.", "Termina con por qué estás listo para este trabajo.", "Reúne pruebas y guárdalas con tu declaración."],
          words: [["Fair Chance Act", "la ley de California que limita cuándo y cómo los empleadores pueden mirar tus condenas."], ["Oferta de trabajo condicional", "una oferta de trabajo que depende de algo, como una revisión de antecedentes."], ["Ban the box", "leyes que quitan de las solicitudes de empleo la pregunta sobre antecedentes penales."], ["Pruebas de rehabilitación", "pruebas de cómo ha cambiado tu vida, como programas terminados y cartas de apoyo."]],
          slides: [
            { title: "Antes de una oferta de trabajo (California)", bullets: ["Se aplica a empleadores con 5 o más empleados", "No hay preguntas sobre condenas en la solicitud", "No hay revisión de antecedentes antes de una oferta"] },
            { title: "Después de una oferta condicional", bullets: ["Arrestos sin condena: no se pueden usar (pocas excepciones)", "Casos sellados, anulados o borrados: no se pueden usar", "La mayoría de las condenas de más de 7 años: no se pueden usar"] },
            { title: "Si quieren retirar la oferta", bullets: ["Aviso por escrito con el informe y la lista de condenas", "Al menos 5 días hábiles para que respondas", "Preguntas: California Civil Rights Department"] },
            { title: "Tu declaración de rehabilitación", bullets: ["Una oración: qué pasó", "Dos o tres: qué has hecho desde entonces", "Cierre: por qué estás listo para este trabajo"] }
          ],
          sources: [
            { name: "California Civil Rights Department: Fair Chance Act", url: "https://calcivilrights.ca.gov/fair-chance-act/" },
            { name: "California Civil Rights Department: Hoja informativa sobre antecedentes penales y empleo (junio de 2025)", url: "https://calcivilrights.ca.gov/wp-content/uploads/sites/32/2025/07/Fair-Chance-Act-Factsheet_English.pdf" }
          ],
          tryIt: "Tarea final: haz tu plan de acción de una página para limpiar tus antecedentes. Incluye dónde vas a conseguir tus antecedentes, cada caso y el alivio que podría servirle, la ayuda legal gratis a la que vas a contactar primero, los papeles que vas a reunir y tu declaración de rehabilitación corta para empleadores.",
          youCanNow: "explicar tus derechos de contratación justa en California, averiguar las reglas de tu estado y responderle a un empleador sobre tus antecedentes con una declaración corta y honesta y con pruebas.",
          quickCheck: [
            { objective: "O6", q: "Según la Fair Chance Act de California, ¿cuándo puede la mayoría de los empleadores cubiertos revisar tus antecedentes?", options: ["Antes de la entrevista", "En la solicitud de empleo", "Nunca", "Después de una oferta de trabajo condicional"], answer: 3, why: "Los empleadores cubiertos esperan a después de una oferta condicional para revisar tus antecedentes." },
            { objective: "O6", q: "Un empleador te pregunta por tu pasado después de hacerte una oferta. ¿Qué harías?", options: ["Dar una declaración corta y honesta sobre lo que has hecho desde entonces", "Contar una historia larga sobre el caso", "Negarte a decir nada e irte", "Decir que no tienes antecedentes"], answer: 0, why: "Una declaración de rehabilitación corta y honesta muestra que estás listo para el trabajo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Busca ayuda, prepárate y usa tus derechos",
        questions: [
          { objective: "O4", q: "¿Cuál es una señal de alerta cuando alguien ofrece limpiar tus antecedentes?", options: ["Te explica tus opciones primero", "Trabaja en un centro de autoayuda del tribunal", "Garantiza resultados y quiere un pago grande por adelantado", "Te pide que lleves tus antecedentes"], answer: 2, why: "Las garantías y los pagos grandes por adelantado son señales de estafa; la ayuda real primero explica las opciones." },
          { objective: "O4", q: "No eres ciudadano de Estados Unidos y quieres alivio de antecedentes. ¿Qué debes hacer primero?", options: ["Hablar con un abogado de inmigración", "Presentar los formularios solo enseguida", "No buscar ayuda legal", "Pedirle a un amigo que presente por ti"], answer: 0, why: "Los trámites en el tribunal pueden afectar tu situación migratoria, así que primero debe aconsejarte un abogado de inmigración." },
          { objective: "O5", q: "¿Qué va en tu carpeta de alivio de antecedentes?", options: ["La contraseña de tu banco", "Pruebas de que terminaste la libertad a prueba", "El acceso a tus redes sociales", "Una hoja en blanco"], answer: 1, why: "Las pruebas de que terminaste la libertad a prueba ayudan a mostrar que calificas y que hiciste lo que pidió el tribunal." },
          { objective: "O6", q: "Según la Fair Chance Act de California, ¿cuándo pueden revisar tus antecedentes la mayoría de los empleadores cubiertos?", options: ["Antes de que presentes la solicitud", "Durante la primera llamada", "En el anuncio de trabajo", "Después de una oferta de trabajo condicional"], answer: 3, why: "La mayoría de los empleadores cubiertos tienen que esperar hasta después de una oferta de trabajo condicional." },
          { objective: "O6", q: "Un empleador piensa retirar tu oferta por tus antecedentes. ¿Cuánto tiempo tienes para responder en California?", options: ["Nada de tiempo", "Una hora", "Al menos cinco días hábiles", "Un año"], answer: 2, why: "El empleador tiene que darte al menos cinco días hábiles para responder con pruebas o mostrar un error." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Limpiar tus antecedentes: borrado y alivio de antecedentes penales",
    questions: [
      { objective: "O1", q: "¿Por qué conseguir primero una copia de tus propios antecedentes?", options: ["Para publicarla en internet", "Para ver cada caso y encontrar errores", "Porque los empleadores te exigen mostrarla", "No sirve de nada"], answer: 1, why: "Tus antecedentes muestran qué necesita alivio y pueden tener errores que arreglar." },
      { objective: "O1", q: "En California, el lugar donde te toman las huellas para el Record Review es:", options: ["Un sitio de Live Scan", "Un banco", "Un apartado postal", "Una agencia de carros"], answer: 0, why: "El Record Review usa huellas de Live Scan tomadas en sitios de Live Scan." },
      { objective: "O1", q: "Encuentras un error en tus antecedentes del DOJ de California. ¿Qué formulario sirve para reclamarlo?", options: ["Una solicitud de empleo", "Una FAFSA (solicitud de ayuda federal para estudiar)", "El BCIA 8706, Claim of Alleged Inaccuracy or Incompleteness", "Un formulario de licencia de manejo"], answer: 2, why: "El DOJ manda el BCIA 8706 con tus antecedentes para que puedas reclamar los errores." },
      { objective: "O1", q: "¿Dónde puedes pedir tus antecedentes nacionales del FBI?", options: ["En la biblioteca de tu condado", "En una red social", "A tu arrendador", "Al FBI, por medio de fbi.gov"], answer: 3, why: "El FBI guarda el Identity History Summary nacional; fbi.gov explica cómo pedirlo." },
      { objective: "O2", q: "¿Qué significa normalmente sellar los antecedentes?", options: ["Los antecedentes siguen existiendo, pero la mayoría de la gente no puede verlos", "Vuelves al tribunal para un juicio nuevo", "Pagas una multa otra vez", "El caso se hace más largo"], answer: 0, why: "Los antecedentes sellados existen, pero están ocultos para la mayoría del público." },
      { objective: "O2", q: "Una anulación (set-aside o dismissal) significa:", options: ["Te vuelven a arrestar", "El tribunal vuelve a abrir una condena y la anula", "Se borran tus huellas", "Tienes que mudarte a otro estado"], answer: 1, why: "Una anulación es cuando un tribunal anula una condena del pasado." },
      { objective: "O2", q: "¿Qué es un certificado de rehabilitación?", options: ["Un diploma de la preparatoria", "Un permiso de estacionamiento", "Una orden del tribunal que dice que has vivido respetando la ley desde tu sentencia", "Un contrato de trabajo"], answer: 2, why: "Es la declaración oficial de un tribunal de que te has rehabilitado." },
      { objective: "O2", q: "¿Qué es cierto sobre la palabra expungement (borrado) en California?", options: ["Siempre borra todos los antecedentes", "Solo la usa el FBI", "Es un programa federal", "Los tribunales dicen que el borrado real no existe allí"], answer: 3, why: "Los tribunales de California dicen que el borrado real no existe; el alivio común es una anulación." },
      { objective: "O3", q: "Tu caso se vio en un tribunal superior de condado. Es un:", options: ["Caso estatal", "Caso federal", "Caso militar", "Caso tribal"], answer: 0, why: "Los tribunales de condado ven casos estatales." },
      { objective: "O3", q: "¿Una anulación estatal puede limpiar una condena federal?", options: ["Sí, siempre", "Sí, si pagas más", "No, cada sistema limpia solo sus propios casos", "Solo los fines de semana"], answer: 2, why: "El alivio estatal no puede limpiar una condena federal." },
      { objective: "O3", q: "¿Cómo recibes el alivio automático Clean Slate de California?", options: ["Tienes que presentar una petición", "El DOJ lo aplica a los casos que califican sin petición", "Llamas al 911", "Se lo pides a tu empleador"], answer: 1, why: "El DOJ revisa los registros cada mes y da el alivio que corresponde de forma automática." },
      { objective: "O3", q: "¿Cómo puedes saber si recibiste alivio automático en California?", options: ["Esperas una carta del DOJ", "Le preguntas a un vecino", "Buscas en las noticias", "Pides tus propios antecedentes del DOJ y buscas la nota de alivio"], answer: 3, why: "El DOJ no avisa a la gente, así que tú revisas tus propios antecedentes." },
      { objective: "O4", q: "¿Cuál es un lugar gratis para buscar ayuda con el alivio de antecedentes?", options: ["Un centro de autoayuda del tribunal", "Un sitio web que garantiza resultados por mucho dinero", "Un desconocido en redes sociales", "Una casa de empeño"], answer: 0, why: "Los centros de autoayuda de los tribunales, la asistencia legal y los programas del defensor público muchas veces ayudan gratis." },
      { objective: "O4", q: "Antes de llamar a alguien para ayuda legal, un paso inteligente es:", options: ["Tirar tus papeles", "Escribir tres preguntas y reunir tus antecedentes", "Adivinar tus números de caso", "Firmar formularios en blanco"], answer: 1, why: "Estar preparado ayuda a que quien te ayuda trabaje más rápido y responda tus preguntas reales." },
      { objective: "O5", q: "¿Qué es un número de caso?", options: ["Tu número de teléfono", "Una cuenta de banco", "El número que un tribunal le da a cada caso", "Tu talla de zapato"], answer: 2, why: "Los números de caso ayudan a quien te ayuda o al secretario a encontrar el expediente correcto." },
      { objective: "O5", q: "Después de que el tribunal te da el alivio, ¿qué debes hacer más adelante?", options: ["Nada nunca más", "Tirar la orden", "No decirle a nadie", "Volver a pedir tus antecedentes para asegurarte de que se actualizaron"], answer: 3, why: "Los antecedentes no siempre se actualizan, así que los revisas y arreglas cualquier problema." },
      { objective: "O5", q: "¿Cuál es una buena prueba de tu vida de ahora?", options: ["Certificados de clases y cartas de apoyo", "Una identificación vieja de la cárcel", "Un cheque en blanco", "Tu lista de contraseñas"], answer: 0, why: "Los certificados y las cartas de apoyo son pruebas de rehabilitación." },
      { objective: "O6", q: "¿A qué empleadores cubre la Fair Chance Act de California?", options: ["Solo al gobierno del estado", "A los empleadores públicos y a los privados con cinco o más empleados", "Solo a empleadores con 500 trabajadores o más", "Solo a restaurantes"], answer: 1, why: "La ley cubre a los empleadores públicos y a los privados con cinco o más empleados, con algunas excepciones." },
      { objective: "O6", q: "Después de una oferta condicional, ¿qué NUNCA puede usar un empleador de California?", options: ["Tu prueba de habilidades", "Tus referencias de trabajo", "Una condena que se anuló", "Tu fecha de inicio"], answer: 2, why: "Las condenas selladas, anuladas o borradas no se pueden usar." },
      { objective: "O6", q: "Una buena declaración de rehabilitación para un empleador:", options: ["Les echa la culpa a todos los demás", "Tiene tres páginas", "Dice en una oración qué pasó, qué has hecho desde entonces y por qué estás listo", "Miente sobre los antecedentes"], answer: 2, why: "Lo que mejor funciona es algo corto, honesto y centrado en el cambio y en que estás listo." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      4,
      7,
      8,
      10,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Conseguir los antecedentes",
        objective: "O1",
        notYet: "No hay plan, o planea usar un sitio privado de verificación de antecedentes.",
        meets: "Nombra el lugar oficial para pedir los antecedentes y el sitio para tomar las huellas.",
        exceeds: "También anota el costo, la exención de pago y dónde conseguir los antecedentes federales si hace falta."
      },
      {
        name: "Casos y posible alivio",
        objective: "O3",
        notYet: "Faltan casos, o ninguno está marcado como estatal o federal.",
        meets: "Cada caso conocido tiene condado, año, cargo, si es estatal o federal y un posible tipo de alivio.",
        exceeds: "Anota qué casos revisar para el alivio automático y una pregunta para un abogado."
      },
      {
        name: "Ayuda legal gratis",
        objective: "O4",
        notYet: "No nombra a nadie que ayude, o nombra un servicio pagado que garantiza resultados.",
        meets: "Un lugar de ayuda legal gratis para contactar primero, con teléfono y horario.",
        exceeds: "También anota un segundo lugar de ayuda y tres preguntas para hacer."
      },
      {
        name: "Papeles por reunir",
        objective: "O5",
        notYet: "No hay lista de papeles.",
        meets: "Una lista de los registros y las pruebas de la vida actual que hay que reunir.",
        exceeds: "Los dos primeros papeles que conseguirá esta semana están marcados con una estrella."
      },
      {
        name: "Declaración de rehabilitación",
        objective: "O6",
        notYet: "Falta, es muy larga o no es honesta.",
        meets: "Una declaración corta y honesta: qué pasó en una oración, lo que has hecho desde entonces y por qué estás listo.",
        exceeds: "La practicó en voz alta y menciona pruebas como certificados o cartas de apoyo."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que piden una copia de sus propios antecedentes en 30 días (encuesta de seguimiento)",
      "Personas que contactan ayuda legal gratis o piden el alivio de antecedentes en 90 días",
      "Personas que reportan una oferta de empleo o de vivienda después de usar su declaración de rehabilitación"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con internet",
      "Papel y lápiz, o una carpeta, para el plan de acción y los papeles del alivio de antecedentes",
      "Los datos de contacto de una oficina local de asistencia legal o de un centro de autoayuda del tribunal",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Este curso no es asesoría legal; trabaja junto con una oficina de asistencia legal o una clínica e invítala a una sesión si es posible.",
      "Quienes viven fuera de California deben buscar las páginas oficiales de su propio estado; ten esos enlaces listos.",
      "Los participantes no deben compartir en voz alta en el grupo los detalles de sus casos ni escribirlos en la IA; déjalos trabajar sus listas de casos en privado.",
      "Dile a quienes no son ciudadanos de Estados Unidos que hablen con un abogado de inmigración antes de pedir cualquier alivio de antecedentes.",
      "Califica el plan de acción con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-register-small-business.js). See scripts/koachlearn-courses/README.md, "Translations".

const BRS = { name: "Servicio de Registro de Empresas (BRS), Kenia: registra tu negocio en línea a través de eCitizen", url: "https://brs.go.ke/" };
const CAC = { name: "Comisión de Asuntos Corporativos (CAC), Nigeria: registro de sociedades, nombres comerciales y fideicomisarios constituidos (portal icrp.cac.gov.ng)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Oficina del Registrador de Empresas (ORC), Ghana: nombres comerciales, sociedades, renovaciones (también por *222#) y declaraciones anuales", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Senegal: agencia de promoción de inversiones y ventanilla única para crear empresas", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Costa de Marfil: centro de promoción de inversiones y ventanilla única para crear empresas", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA: Organización para la Armonización del Derecho Mercantil en África (17 países miembros)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Marruecos: portal del estatus de autoemprendedor (auto-entrepreneur)", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Autoridad Tributaria de Kenia (KRA): sobre el KRA PIN (se obtiene en iTax)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Servicio de Ingresos de Nigeria (NRS): la autoridad tributaria federal de Nigeria", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Autoridad Tributaria de Ghana (GRA): registro con un TIN o el PIN de la Ghana Card; Régimen Tributario Modificado para pequeñas empresas", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Nigeria: apoyo a nano, micro, pequeñas y medianas empresas (registro gratuito, SME Digital Academy)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business-es",
  lang: "es",
  translationOf: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Registrar y llevar un pequeño negocio en África",
  skills: "Elegir una forma de negocio, Encontrar el registro oficial, Preparar una lista para el registro, Obtener un número fiscal y permisos locales, Llevar un libro de caja sencillo, Planificar renovaciones y declaraciones",
  outcome: "hacer oficial tu pequeño negocio y mantenerlo en regla: elegir la forma de negocio adecuada, encontrar el registro oficial de tu país, preparar todo lo necesario para registrarte, averiguar qué número fiscal y qué permisos te corresponden, llevar un libro de caja sencillo y planificar tus renovaciones y declaraciones de cada año.",
  about: [
    "Muchos pequeños negocios en África funcionan sin estar registrados. Eso puede servir un tiempo, pero registrarse puede abrir puertas: cuentas bancarias a nombre del negocio, contratos con empresas y con el gobierno, cuentas en plataformas de venta, préstamos y algunos programas de apoyo. Este curso es para comerciantes, artesanos, dueños de peluquerías, cocineros por encargo, sastres y cualquier persona con un negocio propio en Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Camerún, Marruecos y toda África.",
    "Elegirás una forma de negocio que te convenga, encontrarás el registro oficial de tu país y evitarás a los agentes falsos, prepararás una lista para el registro, averiguarás qué número fiscal y qué permisos locales te corresponden, abrirás un libro de caja sencillo y harás un calendario de renovaciones y declaraciones de cada año.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" para tu propio negocio. Las reglas, los formularios y las tarifas cambian y son distintos en cada país, así que el curso nombra las oficinas y te enseña a consultarlas. No da tarifas ni asesoría legal; para una decisión importante, pregunta al registro, a un centro de apoyo a empresas o a un contador o abogado calificado."
  ],
  finalTask: "Haz una lista de registro para tu propio negocio: la forma de negocio que elegiste y por qué, el registro oficial y su sitio web, tres opciones de nombre, los documentos y datos que necesitas, el número fiscal y los permisos locales que te corresponden (y dónde lo consultaste), cómo llevarás tu libro de caja y un calendario anual de renovaciones y declaraciones.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Dueños de negocios pequeños e informales en toda África: comerciantes de mercado, artesanos, sastres, peluqueros, cocineros por encargo, mecánicos, vendedores en línea y jóvenes que empiezan, en Kenia, Nigeria, Ghana, África occidental y central francófona y el norte de África.",
    startingPoint: "Llevan un negocio día a día y manejan efectivo y dinero móvil. La mayoría no se ha registrado, no sabe qué oficina usar, mezcla el dinero del negocio con el de la casa y tiene pocos registros escritos. Algunos han pagado a agentes falsos o han oído consejos confusos.",
    gap: "Sin registro y sin registros sencillos, muchos pequeños negocios no pueden abrir una cuenta bancaria de empresa, ganar contratos, vender en algunas plataformas ni pedir apoyo. Otros se registran una vez y luego se atrasan con las renovaciones o las declaraciones y pagan multas. Los alumnos necesitan elegir una forma, registrarse por el canal oficial, saber qué número fiscal y qué permisos les corresponden, y mantener en orden sus registros y fechas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; muchos alumnos tienen el inglés como segunda lengua (el curso también se ofrece en francés y árabe)",
      "Dispositivos: un teléfono básico, a veces una computadora de un cibercafé; los datos móviles son caros",
      "Reglas: las formas de negocio, las tarifas, los impuestos y los permisos son distintos en cada país y cambian; el curso nunca da tarifas ni plazos y siempre remite a la oficina oficial",
      "Seguridad: existen agentes y sitios web de registro falsos; los alumnos usan solo sitios oficiales y nunca comparten contraseñas ni PIN",
      "No es asesoría legal ni fiscal: los alumnos consultan su caso con el registro, la autoridad tributaria o un profesional calificado"
    ],
    prerequisites: "Tener o planear un pequeño negocio. Saber sumar y restar."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Según el tamaño, los dueños y los riesgos de tu negocio", action: "elegir una forma de negocio, como un nombre comercial de propietario único o una sociedad limitada, y escribir por qué te conviene", standard: "nombrando un beneficio y una obligación de la forma elegida" },
    { id: "O2", condition: "Según el país donde comercias", action: "identificar el registro oficial de empresas y abrir su sitio web oficial o ir a su oficina", standard: "sin usar un agente no oficial ni un sitio web imitador" },
    { id: "O3", condition: "Antes de empezar un registro", action: "preparar una lista para el registro con tres opciones de nombre, los datos de los dueños, la actividad, la dirección y los documentos", standard: "para poder llenar la solicitud de una sola vez" },
    { id: "O4", condition: "Para tu negocio y tu ciudad", action: "anotar el número fiscal, el permiso comercial local y cualquier permiso del sector que te correspondan, y dónde obtener cada uno", standard: "habiendo consultado la oficina oficial de cada uno" },
    { id: "O5", condition: "Durante una semana de ventas", action: "anotar cada venta y cada gasto en un libro de caja sencillo, separado del dinero de la casa", standard: "con las entradas y salidas de la semana bien sumadas" },
    { id: "O6", condition: "Una vez registrado tu negocio", action: "hacer un calendario anual de renovaciones, declaraciones y fechas de permisos", standard: "con cada fecha consultada en el sitio oficial y un recordatorio puesto antes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir y registrar",
      lessons: [
        {
          title: "Por qué registrarse, y qué forma de negocio te conviene",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir una forma de negocio que convenga a tu negocio y escribir por qué.",
          text: [
            "Registrarse le dice al gobierno que tu negocio existe y le da un nombre oficial. Los beneficios pueden incluir una cuenta bancaria de empresa, contratos con empresas y con el gobierno, vender en algunas plataformas, la confianza de los clientes y poder pedir préstamos y programas de apoyo. Las obligaciones pueden incluir llevar registros, renovar, presentar declaraciones y pagar impuestos.",
            "Las formas más comunes: el propietario único (un solo dueño, muchas veces registrado como nombre comercial); la sociedad colectiva o asociación (dos o más dueños que comparten ganancias y deudas); y la sociedad limitada (una persona jurídica aparte, así que la casa y los ahorros de los dueños están mejor protegidos de las deudas del negocio, pero con más trámites). Los nombres cambian según el país: Nigeria y Ghana registran nombres comerciales y sociedades; en Kenia, el Servicio de Registro de Empresas se encarga de los nombres comerciales y las sociedades.",
            "En los 17 países de la OHADA (una organización que unifica el derecho mercantil), entre ellos Senegal, Costa de Marfil, Camerún, Malí, Burkina Faso y RD Congo, el derecho mercantil es común. Un pequeño comerciante puede registrarse como empresa individual (entreprise individuelle) o crear una sociedad como una SARL (sociedad de responsabilidad limitada). En Marruecos, muchos pequeños vendedores usan el estatus de autoemprendedor.",
            "La mayoría de los comerciantes de mercado y artesanos empiezan como propietario único o con un nombre comercial. Una sociedad puede convenir si tienes socios, contratos más grandes o riesgos más grandes. Para una decisión importante, pregunta al registro o a un contador o abogado calificado."
          ],
          steps: ["Escribe quién es dueño del negocio: tú solo o con otros.", "Escribe el mayor riesgo: deudas, lesiones, contratos grandes.", "Compara un nombre comercial (propietario único), una asociación y una sociedad.", "Elige una y escribe un beneficio y una obligación."],
          words: [["Propietario único", "un negocio que pertenece a una sola persona y que ella dirige, y que responde personalmente por sus deudas."], ["Sociedad limitada", "un negocio que es su propia persona jurídica, así que los bienes personales de los dueños están mejor protegidos de sus deudas."], ["OHADA", "una organización de 17 países africanos que comparten las mismas leyes mercantiles, sobre todo en África occidental y central."]],
          slides: [
            { title: "¿Por qué registrarse?", bullets: ["Cuenta bancaria de empresa y contratos", "Plataformas de venta, préstamos y programas de apoyo", "Confianza de los clientes", "Obligaciones: registros, renovaciones, declaraciones, impuestos"] },
            { title: "Tres formas comunes", bullets: ["Propietario único / nombre comercial: un dueño", "Asociación: dos o más dueños", "Sociedad limitada: persona jurídica aparte, más trámites"] },
            { title: "África francófona y del norte", bullets: ["17 países de la OHADA comparten el derecho mercantil", "Empresa individual o una sociedad como una SARL", "Marruecos: estatus de autoemprendedor"] },
            { title: "Cómo elegir", bullets: ["La mayoría de los pequeños comerciantes empieza con un nombre comercial", "Sociedad: socios, contratos grandes, riesgos grandes", "¿Decisión importante? Pregunta al registro o a un profesional"] }
          ],
          tryIt: "Escribe quiénes son los dueños de tu negocio y su mayor riesgo. Luego elige una forma de negocio y escribe un beneficio y una obligación de esa forma.",
          youCanNow: "comparar las formas de negocio más comunes y elegir la que conviene a tu negocio.",
          quickCheck: [
            { objective: "O1", q: "Fatima vende telas sola en un mercado de Kano. ¿Con qué forma empiezan la mayoría de los comerciantes como ella?", options: ["Una gran empresa pública", "Un nombre comercial como propietario único", "Una agencia del gobierno", "Una organización benéfica"], answer: 1, why: "Un solo dueño con un negocio pequeño suele empezar con un nombre comercial." },
            { objective: "O1", q: "¿Cuál es una razón principal para elegir una sociedad limitada?", options: ["No tiene trámites", "Nunca paga impuestos", "Protege mejor los bienes personales de los dueños de las deudas del negocio", "No puede abrir una cuenta bancaria"], answer: 2, why: "Una sociedad es una persona jurídica aparte, lo que limita el riesgo personal de los dueños." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Encontrar el registro oficial y evitar a los agentes falsos",
          objectives: ["O2"],
          minutes: 5,
          goal: "Encontrar el registro oficial de empresas de tu país y abrir su sitio web oficial.",
          text: [
            "Cada país tiene una oficina oficial que registra los negocios. Kenia: el Servicio de Registro de Empresas (BRS), en línea a través de eCitizen. Nigeria: la Comisión de Asuntos Corporativos (CAC). Ghana: la Oficina del Registrador de Empresas (ORC). Senegal: APIX, la ventanilla única para crear empresas. Costa de Marfil: CEPICI. En Marruecos, el estatus de autoemprendedor tiene su propio portal nacional.",
            "Usa solo el sitio web o la oficina oficial. Los sitios oficiales del gobierno suelen terminar con la terminación del gobierno del país, como .go.ke, .gov.ng o .gov.gh. Existen sitios web imitadores y personas que ofrecen registros \"rápidos\" o \"gratis\"; el propio sitio del BRS de Kenia advierte sobre ofertas falsas de registro \"gratis\".",
            "Puedes pagar a un agente acreditado o a un abogado para que te ayude, pero comprueba que sea real, pide un recibo oficial y asegúrate de que el negocio quede registrado a tu nombre. Nunca le des a nadie la contraseña de tu cuenta de eCitizen, de la CAC o de otra cuenta, ni un código de un solo uso enviado a tu teléfono.",
            "Si un sitio web no abre, vuelve a intentarlo más tarde o ve a la oficina del registro o a un centro de servicios del gobierno. No le pagues a un desconocido en su lugar."
          ],
          steps: ["Escribe el registro de tu país según la lista de esta lección.", "Escribe tú mismo la dirección; no hagas clic en enlaces de mensajes desconocidos.", "Revisa la terminación de la dirección, como .go.ke, .gov.ng o .gov.gh.", "Si usas un agente, comprueba que sea real y pide un recibo oficial.", "Nunca compartas tu contraseña ni tu código de un solo uso."],
          words: [["Registro", "la oficina del gobierno que inscribe los negocios y las sociedades."], ["Sitio web imitador", "un sitio falso hecho para parecer oficial, muchas veces para quitarte dinero."], ["Código de un solo uso", "un código corto enviado a tu teléfono para confirmar que eres tú; nunca lo compartas."]],
          slides: [
            { title: "Registros oficiales", bullets: ["Kenia: BRS a través de eCitizen", "Nigeria: Comisión de Asuntos Corporativos (CAC)", "Ghana: Registrador de Empresas (ORC)", "Senegal: APIX; Costa de Marfil: CEPICI"] },
            { title: "Usa solo el sitio oficial", bullets: ["Escribe tú mismo la dirección", "Revisa terminaciones como .go.ke, .gov.ng, .gov.gh", "Cuidado con ofertas de registro \"rápido\" o \"gratis\""] },
            { title: "Si usas un agente", bullets: ["Comprueba que sea real", "Pide un recibo oficial", "El negocio debe estar a TU nombre"] },
            { title: "Nunca compartas", bullets: ["La contraseña de tu cuenta", "Un código de un solo uso enviado a tu teléfono"] }
          ],
          tryIt: "Busca el registro de empresas de tu país. Escribe tú mismo la dirección de su sitio web, revisa la terminación y anota la dirección y un servicio que ofrece.",
          youCanNow: "encontrar el registro oficial de empresas de tu país y distinguir un sitio real de uno falso.",
          quickCheck: [
            { objective: "O2", q: "¿Dónde se registra un nombre comercial en Nigeria?", options: ["En la Comisión de Asuntos Corporativos (CAC)", "En un grupo de WhatsApp", "En cualquier banco", "En la comisaría de policía"], answer: 0, why: "La CAC registra nombres comerciales, sociedades y fideicomisarios constituidos en Nigeria." },
            { objective: "O2", q: "Un mensaje ofrece \"registro de empresa gratis en 1 hora\" mediante un enlace. ¿Qué haces?", options: ["Hago clic y pago rápido", "Envío mi contraseña", "Lo reenvío a mis amigos", "Ignoro el enlace y escribo yo mismo la dirección del registro oficial"], answer: 3, why: "Las ofertas falsas usan enlaces; el sitio oficial que escribes tú mismo es seguro." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Preparar tu lista para el registro",
          objectives: ["O3"],
          minutes: 5,
          goal: "Preparar una lista para el registro y así poder hacer la solicitud de una sola vez.",
          text: [
            "Los formularios en línea pueden caducar, y los datos móviles cuestan dinero. Prepara todo primero y luego haz la solicitud de una sola vez.",
            "La mayoría de los registros piden cosas parecidas: tres posibles nombres para el negocio (por si tu primera opción ya está tomada; el BRS de Kenia pide tres opciones), los nombres completos de los dueños y los datos de su documento de identidad o pasaporte, teléfono y correo electrónico, la dirección o ubicación del negocio, una breve descripción de la actividad y, a veces, una foto tipo pasaporte o una firma. Una sociedad también necesita directores, accionistas y sus estatutos. La lista exacta está en el sitio del registro.",
            "Elige nombres claros, que nadie más use ya y que no copien una marca famosa. Ejemplo: Kofi, en Takoradi, anota \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" y \"Sea Gold Fish Supplies\".",
            "Anota la tarifa que aparece en el sitio oficial cuando haces la solicitud, y cómo pagarla. Guarda cada recibo y el certificado de registro, en papel y como foto en un lugar seguro."
          ],
          steps: ["Escribe tres opciones de nombre.", "Anota los nombres de los dueños, sus datos de identidad, teléfono y correo.", "Escribe la dirección o ubicación y la actividad del negocio.", "Lee la lista del propio registro para ver si piden más documentos.", "Anota la tarifa actual y la forma de pago según el sitio oficial.", "Haz la solicitud de una sola vez y guarda cada recibo y el certificado."],
          words: [["Búsqueda / reserva de nombre", "comprobar que un nombre comercial está libre y reservarlo para ti mientras te registras."], ["Certificado de registro", "el documento oficial que demuestra que tu negocio está registrado."], ["Director", "una persona que dirige una sociedad y tiene obligaciones legales con ella."]],
          slides: [
            { title: "Prepara primero, solicita una vez", bullets: ["Los formularios pueden caducar", "Los datos cuestan dinero", "Ten todo listo"] },
            { title: "Lo que suelen pedir", bullets: ["Tres opciones de nombre", "Nombres, identificación, teléfono y correo de los dueños", "Dirección y actividad del negocio", "Sociedad: directores y accionistas"] },
            { title: "Buenos nombres", bullets: ["Claros y que nadie use ya", "No copies una marca famosa", "Revisa la lista del propio registro"] },
            { title: "Después de solicitar", bullets: ["Anota la tarifa del sitio oficial", "Guarda cada recibo", "Guarda el certificado, en papel y en foto"] }
          ],
          tryIt: "Escribe tu lista para el registro: tres opciones de nombre, los datos de los dueños (sin escribir tu número de identidad en ningún lugar compartido), la dirección, la actividad, los documentos y el sitio web del registro.",
          youCanNow: "preparar una lista para el registro y hacer la solicitud de una sola vez.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué preparar tres opciones de nombre para el negocio?", options: ["La ley exige tres negocios", "Por si tu primera opción ya está tomada", "Para confundir a los agentes falsos", "Para pagar menos impuestos"], answer: 1, why: "Si tu primer nombre ya está tomado, la siguiente opción te ahorra una segunda solicitud." },
            { objective: "O3", q: "¿Dónde encuentras los documentos exactos que pide tu registro?", options: ["En la memoria de un vecino", "En un comentario de redes sociales", "En el sitio web oficial o la oficina del registro", "En un anuncio de un agente desconocido"], answer: 2, why: "Los requisitos cambian, y solo el registro lo sabe con seguridad." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir y registrar",
        questions: [
          { objective: "O1", q: "Dos amigos abren juntos un negocio de comida por encargo y comparten las ganancias. ¿A qué forma se parece más?", options: ["Propietario único", "Agencia del gobierno", "Una asociación o una sociedad", "Una organización benéfica"], answer: 2, why: "Dos o más dueños que comparten ganancias forman una asociación, o pueden crear una sociedad." },
          { objective: "O1", q: "En Senegal y Costa de Marfil, el derecho mercantil viene de:", options: ["Solo las reglas propias de cada ciudad", "La OHADA, común a 17 países", "La plataforma donde vendes", "Tu banco"], answer: 1, why: "Las leyes mercantiles uniformes de la OHADA se aplican en sus países miembros." },
          { objective: "O2", q: "¿Qué terminación de dirección web es señal de un sitio del gobierno de Kenia?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Los sitios del gobierno de Kenia suelen terminar en .go.ke." },
          { objective: "O2", q: "Un agente se ofrece a registrar tu negocio. ¿Qué debes comprobar?", options: ["Que tenga una oficina bonita", "Que sea rápido", "Que solo acepte efectivo", "Que sea real, te dé un recibo oficial y lo registre a tu nombre"], answer: 3, why: "Un agente real, un recibo oficial y tu propio nombre en el negocio te protegen." },
          { objective: "O3", q: "¿Qué debes guardar después de registrarte?", options: ["Nada", "Solo un mensaje de texto", "El certificado de registro y cada recibo, en papel y en foto", "La palabra del agente"], answer: 2, why: "Necesitarás el certificado y los recibos para bancos, renovaciones y contratos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llevarlo en regla",
      lessons: [
        {
          title: "Número fiscal y permisos locales",
          objectives: ["O4"],
          minutes: 6,
          goal: "Anotar el número fiscal y los permisos que necesita tu negocio y dónde obtener cada uno.",
          text: [
            "Registrar el nombre muchas veces es solo el primer paso. La mayoría de los negocios también necesitan un número de identificación fiscal, un permiso comercial local y, para algunos tipos de trabajo, un permiso del sector.",
            "Número fiscal: en Kenia, el KRA PIN de la Autoridad Tributaria de Kenia (KRA), que obtienes en iTax; se pide para registrar un negocio y para muchos otros trámites. En Nigeria, la autoridad tributaria federal es el Servicio de Ingresos de Nigeria (NRS), y cada estado tiene su propio servicio de ingresos internos. En Ghana, la Autoridad Tributaria de Ghana (GRA) usa tu TIN o el PIN de tu Ghana Card, y ofrece un Régimen Tributario Modificado para pequeñas empresas. Pregunta en la oficina de impuestos qué impuesto para pequeños negocios te corresponde.",
            "Permiso local: muchas ciudades y condados exigen un permiso comercial o de negocio, que se renueva con regularidad. En Kenia lo da el gobierno de tu condado; en Nigeria, el gobierno estatal o local; en Ghana, la asamblea de distrito o municipal. Permisos del sector: quienes venden comida, las peluquerías, las clínicas, el transporte y otros pueden necesitar un certificado sanitario o una licencia de un organismo del sector.",
            "Pregunta en la oficina del gobierno local o en un centro de apoyo a empresas como SMEDAN en Nigeria. Anota cada requisito, la oficina y la fecha en que lo consultaste. Tu número de identidad o tu número fiscal es privado: no lo publiques ni se lo envíes a desconocidos."
          ],
          steps: ["Busca tu autoridad tributaria y pregunta cómo obtiene un pequeño negocio su número fiscal.", "Pregunta a tu condado, estado, gobierno local o asamblea por el permiso comercial.", "Pregunta si tu tipo de trabajo necesita un certificado sanitario o una licencia del sector.", "Anota cada uno, la oficina y la fecha en que lo consultaste."],
          words: [["Número de identificación fiscal (TIN)", "el número que te da la oficina de impuestos para declarar y pagar impuestos; en Kenia es el KRA PIN."], ["Permiso comercial", "la autorización de tu gobierno local para llevar un negocio en esa zona."], ["Permiso del sector", "una licencia para ciertos tipos de trabajo, como comida, salud o transporte."]],
          slides: [
            { title: "Después del nombre: tres revisiones más", bullets: ["Número fiscal", "Permiso comercial local", "Permiso del sector para algunos trabajos"] },
            { title: "Números fiscales", bullets: ["Kenia: KRA PIN en iTax", "Nigeria: Servicio de Ingresos de Nigeria y servicio estatal de ingresos", "Ghana: GRA, TIN o PIN de la Ghana Card"] },
            { title: "Permisos locales y del sector", bullets: ["Condado, estado, gobierno local o asamblea", "Comida, peluquerías, transporte pueden necesitar más", "Pregunta en un centro de apoyo a empresas"] },
            { title: "Anótalo", bullets: ["Cada requisito y su oficina", "La fecha en que lo consultaste", "Mantén privados tus números de identidad y fiscal"] }
          ],
          tryIt: "Haz una tabla de tres filas: número fiscal, permiso local, permiso del sector. Para cada una, escribe la oficina, su sitio web o dirección y si te corresponde. Consulta al menos uno con la oficina esta semana.",
          youCanNow: "anotar el número fiscal y los permisos que necesita tu negocio y la oficina de cada uno.",
          quickCheck: [
            { objective: "O4", q: "En Kenia, ¿cómo se obtiene un KRA PIN?", options: ["En un comité del mercado", "En iTax, de la Autoridad Tributaria de Kenia", "Con el gerente de tu banco", "Con un agente de WhatsApp"], answer: 1, why: "La KRA emite el PIN a través de su sistema iTax." },
            { objective: "O4", q: "Grace abre un puesto de comida en Accra. Además del registro, ¿por qué debe preguntar?", options: ["Por nada más", "Por una licencia de conducir", "Por un permiso comercial y cualquier certificado sanitario o de alimentos", "Por un pasaporte"], answer: 2, why: "A quienes venden comida suelen aplicarse permisos locales y requisitos de seguridad alimentaria." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "Un libro de caja sencillo: separar el dinero del negocio",
          objectives: ["O5"],
          minutes: 5,
          goal: "Anotar cada venta y cada gasto en un libro de caja sencillo durante una semana.",
          text: [
            "Los registros muestran si de verdad estás ganando dinero. También ayudan con los impuestos, los préstamos y las renovaciones. Empieza simple: un cuaderno o una página de notas en el teléfono.",
            "Un libro de caja tiene cuatro columnas: fecha, qué pasó, entradas de dinero, salidas de dinero. Anota cada venta y cada gasto el mismo día, también el dinero móvil. Al final del día o de la semana, suma las entradas, suma las salidas y resta una de la otra. Ejemplo de Duala: el lunes, Paul vende 12 fundas de teléfono por 24,000 XAF y compra mercancía por 15,000 XAF; las entradas menos las salidas dan 9,000 XAF (cifras de ejemplo).",
            "Separa el dinero del negocio del dinero de la casa. Si tomas dinero para comida o para la escuela, anótalo como \"retiro del dueño\" para poder verlo. Una línea o cuenta de dinero móvil aparte para el negocio lo hace más fácil. Guarda los recibos en un sobre o tómales foto."
          ],
          steps: ["Dibuja cuatro columnas: fecha, qué pasó, entradas, salidas.", "Anota cada venta y cada gasto el mismo día.", "Anota el dinero que tomas para la casa como \"retiro del dueño\".", "Al final de la semana, suma cada columna y calcula la diferencia.", "Guarda los recibos en un sobre o en fotos."],
          words: [["Libro de caja", "un registro sencillo del dinero que entra y sale del negocio."], ["Retiro del dueño", "dinero que el dueño saca del negocio para uso personal."]],
          slides: [
            { title: "Por qué llevar registros", bullets: ["Ver si de verdad ganas dinero", "Se necesitan para impuestos, préstamos y renovaciones"] },
            { title: "Cuatro columnas", bullets: ["Fecha", "Qué pasó", "Entradas", "Salidas"] },
            { title: "Separa el dinero del negocio", bullets: ["Anota el gasto de la casa como \"retiro del dueño\"", "Una línea de dinero móvil aparte ayuda", "Guarda los recibos o fotos de ellos"] }
          ],
          tryIt: "Empieza hoy un libro de caja. Anota cada venta y cada gasto durante una semana, también el dinero que tomas para la casa. El último día, suma cada columna y escribe la diferencia.",
          youCanNow: "llevar un libro de caja sencillo y separar el dinero del negocio del dinero de la casa.",
          quickCheck: [
            { objective: "O5", q: "¿Cuáles son las cuatro columnas de un libro de caja sencillo?", options: ["Fecha, qué pasó, entradas, salidas", "Nombre, edad, ciudad, teléfono", "Precio, color, talla, marca", "De lunes a jueves"], answer: 0, why: "Estas cuatro columnas muestran cada movimiento de dinero." },
            { objective: "O5", q: "Tomas 2,000 NGN del negocio para comida en casa. ¿Qué anotas?", options: ["Nada", "Una venta", "Un cliente nuevo", "\"Retiro del dueño 2,000 NGN\" en salidas"], answer: 3, why: "Anotar lo que toma el dueño mantiene los registros verdaderos." }
          ]
        },
        {
          title: "Seguir registrado: renovaciones, declaraciones y un calendario anual",
          objectives: ["O6"],
          minutes: 5,
          goal: "Hacer un calendario anual de renovaciones, declaraciones y fechas de permisos.",
          text: [
            "Registrarse una vez no es el final. Muchos negocios deben renovar, presentar declaraciones anuales o declaraciones de impuestos, y renovar los permisos locales. Perder una fecha puede traer multas o la pérdida del registro.",
            "Ejemplos: la ORC de Ghana dice que todas las sociedades constituidas deben presentar declaraciones anuales, y que los nombres comerciales se pueden renovar en línea, también marcando *222#. La CAC de Nigeria supervisa las declaraciones anuales. La KRA de Kenia espera declaraciones de las personas con obligaciones fiscales. Los permisos locales suelen durar un año. Las fechas y tarifas exactas cambian, así que consulta cada una en el sitio oficial o en la oficina.",
            "Haz un calendario anual: escribe cada obligación, la oficina, el mes en que vence y la fecha en que lo consultaste. Pon un recordatorio en tu teléfono un mes antes. Mantén al día tu libro de caja, porque las declaraciones usan esas cifras.",
            "Si no sabes qué te corresponde, pregunta al registro, a la oficina de impuestos, a un centro de apoyo a empresas o a un contador calificado. Si alguien llama diciendo que tu registro se cancelará hoy si no le pagas ya, consulta tú mismo con el registro primero."
          ],
          steps: ["Haz una lista de cada obligación: renovación, declaración anual, declaración de impuestos, renovación de permisos.", "Consulta cada fecha y oficina en el sitio oficial.", "Escríbelas en un calendario de 12 meses.", "Pon un recordatorio en el teléfono un mes antes de cada fecha.", "Consulta tú mismo con el registro cualquier exigencia de pago urgente."],
          words: [["Declaración anual", "un informe anual al registro que dice que tu negocio sigue existiendo y que sus datos son correctos."], ["Renovación", "pagar o presentar de nuevo para que un registro o un permiso siga vigente."], ["Multa", "una sanción en dinero por llegar tarde o romper una regla."]],
          slides: [
            { title: "Registrarse no es el final", bullets: ["Renovaciones y declaraciones anuales", "Declaraciones de impuestos", "Renovación de permisos locales"] },
            { title: "Ejemplos", bullets: ["ORC de Ghana: declaraciones anuales de sociedades; renueva nombres por *222#", "CAC de Nigeria: declaraciones anuales", "KRA de Kenia: declaraciones si tienes obligaciones fiscales"] },
            { title: "Tu calendario anual", bullets: ["Obligación, oficina, mes de vencimiento", "Fecha en que lo consultaste", "Recordatorio en el teléfono un mes antes"] },
            { title: "Protégete", bullets: ["¿Dudas? Pregunta a la oficina o a un contador", "Llamadas de \"paga ya\": consulta tú mismo con el registro"] }
          ],
          tryIt: "Tarea final: reúne tu lista de registro con la forma de negocio, el registro, las opciones de nombre, los documentos, el número fiscal y los permisos, tu plan de libro de caja y un calendario de 12 meses de renovaciones y declaraciones con recordatorios puestos.",
          youCanNow: "planificar tus renovaciones y declaraciones de cada año para que tu negocio siga registrado y en regla.",
          quickCheck: [
            { objective: "O6", q: "¿Cuándo debes poner un recordatorio para una renovación?", options: ["Después de que pase la fecha", "Nunca", "Más o menos un mes antes del vencimiento", "Solo si alguien te llama"], answer: 2, why: "Un recordatorio un mes antes te da tiempo para prepararte y pagar." },
            { objective: "O6", q: "Alguien llama y dice que tu negocio se cancelará hoy si no le pagas ya. ¿Qué haces?", options: ["Consulto yo mismo con el registro antes de pagar a nadie", "Le pago rápido", "Le envío mi contraseña", "Cierro el negocio"], answer: 0, why: "Las exigencias de pago urgentes son señal de estafa; el propio registro puede decirte tu situación." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llevarlo en regla",
        questions: [
          { objective: "O4", q: "Además de registrar el nombre, muchos negocios también necesitan:", options: ["Un número fiscal y un permiso comercial local", "Nada más", "Un teléfono nuevo", "Una cuenta en una plataforma de venta"], answer: 0, why: "Los números fiscales y los permisos locales son aparte del registro del nombre." },
          { objective: "O4", q: "¿Dónde preguntas por un permiso comercial en Kenia?", options: ["A un agente de dinero móvil", "Al gobierno de tu condado", "En una escuela", "En una emisora de radio"], answer: 1, why: "Los condados de Kenia emiten los permisos de negocio de su zona." },
          { objective: "O5", q: "¿Por qué separar el dinero del negocio del dinero de la casa?", options: ["Es más divertido", "Para que el banco te pague", "Para ver si el negocio de verdad gana dinero", "Para no pagar impuestos"], answer: 2, why: "Mezclar el dinero oculta si el negocio está ganando." },
          { objective: "O5", q: "Tu semana muestra entradas de 40,000 KES y salidas de 31,000 KES. La diferencia es:", options: ["71,000 KES", "31,000 KES", "40,000 KES", "9,000 KES"], answer: 3, why: "40,000 menos 31,000 es 9,000." },
          { objective: "O6", q: "¿Qué es una declaración anual?", options: ["Un informe anual al registro que dice que el negocio y sus datos están al día", "Un reembolso de los clientes", "Unas vacaciones", "Un préstamo bancario"], answer: 0, why: "Las declaraciones anuales mantienen al día el registro de tu negocio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Registrar y llevar un pequeño negocio en África",
    questions: [
      { objective: "O1", q: "¿Cuál es un beneficio de registrar un negocio?", options: ["No pagar nunca impuestos", "Abrir una cuenta bancaria de empresa y ganar contratos", "No necesitar registros", "No tener ninguna obligación"], answer: 1, why: "El registro abre cuentas bancarias, contratos y programas, y también trae obligaciones." },
      { objective: "O1", q: "Un propietario único es:", options: ["Un negocio que pertenece a una sola persona", "Una oficina del gobierno", "Una sociedad con muchos accionistas", "Un grupo de ahorro"], answer: 0, why: "Un solo dueño, que responde personalmente por el negocio." },
      { objective: "O1", q: "Muchos pequeños vendedores en Marruecos usan:", options: ["Una empresa pública", "Solo la SARL de la OHADA", "El estatus de autoemprendedor", "Ningún registro nunca"], answer: 2, why: "Marruecos tiene un estatus de autoemprendedor para actividades pequeñas." },
      { objective: "O1", q: "¿A quién debes preguntar antes de una decisión importante sobre la forma de tu negocio?", options: ["A un desconocido en internet", "A nadie", "A un vendedor del mercado", "Al registro o a un contador o abogado calificado"], answer: 3, why: "El registro o un profesional pueden aconsejarte sobre tu propio caso." },
      { objective: "O2", q: "En Ghana, los nombres comerciales los registra:", options: ["La Oficina del Registrador de Empresas (ORC)", "Solo la Autoridad Tributaria de Ghana", "Un agente de dinero móvil", "Una iglesia"], answer: 0, why: "La ORC registra nombres comerciales y sociedades en Ghana." },
      { objective: "O2", q: "En Kenia, registras un negocio en línea a través de:", options: ["Una página de Facebook", "eCitizen, con el Servicio de Registro de Empresas", "Un grupo privado de WhatsApp", "La aplicación de tu banco"], answer: 1, why: "El registro en el BRS se hace en línea a través de eCitizen." },
      { objective: "O2", q: "¿Cuál es la forma más segura de llegar al sitio web del registro?", options: ["Hacer clic en un enlace de un mensaje desconocido", "Usar un anuncio emergente", "Escribir tú mismo la dirección oficial y revisar la terminación", "Pedir a un desconocido que lo haga con tu contraseña"], answer: 2, why: "Escribir tú mismo la dirección evita los sitios imitadores." },
      { objective: "O3", q: "Antes de empezar un registro en línea, debes:", options: ["Preparar primero todos los nombres, datos y documentos", "Empezar y esperar lo mejor", "Compartir tu contraseña con un agente", "Pagar a un desconocido"], answer: 0, why: "Estar listo te permite terminar de una sola vez y ahorra datos." },
      { objective: "O3", q: "Un buen nombre de negocio es:", options: ["Una copia de una marca famosa", "Claro y que ningún otro negocio use ya", "Muy largo y difícil de escribir", "El mismo que el de tu vecino"], answer: 1, why: "Un nombre claro y libre tiene más probabilidades de ser aceptado." },
      { objective: "O3", q: "¿Dónde encuentras la tarifa de registro actual?", options: ["En un cartel viejo", "En un rumor", "En lo que tú calcules", "En el sitio oficial o la oficina del registro"], answer: 3, why: "Las tarifas cambian, así que la fuente oficial es la única segura." },
      { objective: "O4", q: "El KRA PIN es:", options: ["Un PIN de dinero móvil", "Una contraseña para compartir", "El número de identificación fiscal de Kenia", "Un permiso de negocio"], answer: 2, why: "El KRA PIN es tu número fiscal ante la Autoridad Tributaria de Kenia." },
      { objective: "O4", q: "La autoridad tributaria federal de Nigeria es:", options: ["El Servicio de Ingresos de Nigeria (NRS)", "La Comisión de Asuntos Corporativos", "SMEDAN", "El sindicato de tu mercado local"], answer: 0, why: "El NRS es la autoridad tributaria federal de Nigeria; los estados tienen sus propios servicios de ingresos." },
      { objective: "O4", q: "Una peluquería o un puesto de comida también puede necesitar:", options: ["Una licencia de piloto", "Nada más", "Un título universitario", "Un certificado sanitario o una licencia del sector"], answer: 3, why: "Algunos trabajos necesitan permisos del sector por salud y seguridad." },
      { objective: "O5", q: "Un libro de caja registra:", options: ["Los cumpleaños de los clientes", "Las entradas y salidas de dinero, con fechas", "Solo las ventas grandes", "Solo los préstamos bancarios"], answer: 1, why: "Registra cada movimiento de dinero, con la fecha y lo que pasó." },
      { objective: "O5", q: "¿Cuándo debes anotar una venta en el libro de caja?", options: ["Una vez al año", "Solo cuando te acuerdes", "El mismo día", "Nunca si es dinero móvil"], answer: 2, why: "Anotar el mismo día mantiene el registro completo y verdadero." },
      { objective: "O5", q: "El dinero que tomas del negocio para la escuela se anota como:", options: ["\"Retiro del dueño\" en salidas", "Una venta", "Nada", "Un regalo de un cliente"], answer: 0, why: "Anotar lo que toma el dueño mantiene claro el dinero del negocio y el de la casa." },
      { objective: "O6", q: "La ORC de Ghana permite renovar los nombres comerciales:", options: ["Solo en persona en el extranjero", "Nunca", "En línea, también marcando *222#", "A través de un agente de WhatsApp"], answer: 2, why: "La ORC dice que las renovaciones se pueden hacer en línea y por *222#." },
      { objective: "O6", q: "Un calendario anual de cumplimiento incluye:", options: ["Solo los días festivos", "Las direcciones de los clientes", "Partidos de fútbol", "Cada renovación, declaración y permiso, su oficina y el mes en que vence"], answer: 3, why: "Un solo calendario mantiene a la vista cada obligación y cada fecha." },
      { objective: "O6", q: "No hacer una renovación o una declaración anual puede traer:", options: ["Un regalo", "Multas o la pérdida del registro", "Precios más bajos", "Nada, nunca"], answer: 1, why: "Las presentaciones tardías pueden traer multas o la baja del registro." },
      { objective: "O6", q: "Antes de cada fecha de vencimiento debes:", options: ["Consultar la fecha en el sitio oficial y poner un recordatorio", "Esperar a que alguien te llame para recordártelo", "Pagar a quien te lo pida", "Ignorarla"], answer: 0, why: "Consultar en la fuente oficial y poner un recordatorio te mantiene a tiempo y a salvo de estafas." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Forma de negocio", objective: "O1", notYet: "No eligió una forma, o no dio una razón.", meets: "Una forma elegida con un beneficio y una obligación, adecuada a los dueños y los riesgos.", exceeds: "Compara dos formas y dice cuándo el negocio podría cambiar de forma." },
      { name: "Registro oficial", objective: "O2", notYet: "No nombra un registro, o usa un sitio o agente no oficial.", meets: "El registro oficial correcto y su sitio web oficial o la dirección de su oficina.", exceeds: "También explica cómo reconocer un sitio o agente falso." },
      { name: "Lista para el registro", objective: "O3", notYet: "Faltan las opciones de nombre, los datos de los dueños o la actividad.", meets: "Tres nombres, datos de los dueños, dirección, actividad, documentos y la tarifa del sitio oficial.", exceeds: "También nombra los documentos que necesitaría una sociedad, o dónde guardar el certificado de forma segura." },
      { name: "Número fiscal y permisos", objective: "O4", notYet: "No anota número fiscal ni permiso, o no nombra la oficina.", meets: "Número fiscal, permiso local y cualquier permiso del sector, cada uno con su oficina y la fecha de consulta.", exceeds: "Confirmó al menos uno con la oficina en persona o por teléfono." },
      { name: "Libro de caja", objective: "O5", notYet: "No hay libro de caja, o mezcla el dinero del negocio y el de la casa.", meets: "Una semana de registros con cuatro columnas, anotaciones de \"retiro del dueño\" y totales semanales correctos.", exceeds: "Una línea o cuenta de dinero aparte para el negocio y los recibos guardados." },
      { name: "Calendario anual", objective: "O6", notYet: "No hay calendario, o las fechas son adivinadas.", meets: "Un calendario de 12 meses de renovaciones, declaraciones y permisos, con oficinas, fechas consultadas y recordatorios puestos.", exceeds: "Indica a quién preguntar (registro, oficina de impuestos o contador) para cada obligación." }
    ]
  },
  evaluation: {
    results: [
      "Alumnos que terminan el curso y aprueban la tarea final (rúbrica)",
      "Alumnos que registran su negocio o un permiso en un plazo de 60 días (encuesta de seguimiento)",
      "Alumnos que llevan un libro de caja durante al menos cuatro semanas después del curso",
      "Alumnos que abren una cuenta bancaria o de dinero móvil para el negocio, ganan un contrato o entran en un programa de apoyo en un plazo de seis meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora de cibercafé con internet",
      "Un cuaderno para la lista, el libro de caja y el calendario",
      "Las direcciones de los sitios web oficiales de tu registro, tu autoridad tributaria y tu gobierno local",
      "Unos 60 minutos en total, en sesiones cortas, más una semana de práctica con el libro de caja"
    ],
    facilitatorNotes: [
      "Antes del curso, busca en sus sitios oficiales el registro, la autoridad tributaria y la oficina de permisos locales de tu país y tu ciudad, e imprime las direcciones.",
      "Nunca recojas los números de identidad, contraseñas o números fiscales de los alumnos; las listas dicen qué se necesita, no los números en sí.",
      "Invita a alguien del registro, de un centro de apoyo a empresas (por ejemplo, SMEDAN en Nigeria) o a un contador local para responder preguntas.",
      "No cites tarifas ni plazos de memoria; enseña a los alumnos a consultarlos en el sitio oficial.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una sola fila Todavía no a la vez."
    ]
  }
};

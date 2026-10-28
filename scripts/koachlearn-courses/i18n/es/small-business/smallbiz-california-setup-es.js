"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations".

const SOS_LLC = { name: "Secretaría de Estado de California: Compañías de responsabilidad limitada (formularios y cuotas, en inglés)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "Secretaría de Estado de California: Corporaciones (formularios y cuotas, en inglés)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "Secretaría de Estado de California: bizfile Online", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board: Compañía de responsabilidad limitada (en inglés)", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board: Corporaciones (en inglés)", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board: Guía de las formas comunes de propiedad (FTB 1123)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA: Permisos y licencias (en inglés)", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA: Cómo obtener un permiso de vendedor (preguntas frecuentes, en inglés)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS: Obtén un Número de Identificación del Empleador (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold: ayuda con permisos en California (en inglés)", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD: Paso 1, regístrate como empleador", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "Secretario del Condado de Los Ángeles: requisitos del Nombre Comercial Ficticio (condado de ejemplo, en inglés)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "Oficina del Defensor de Pequeños Negocios de California: monta tu negocio (en inglés)", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup-es",
  lang: "es",
  translationOf: "smallbiz-california-setup",
  category: "Small Business",
  name: "Cómo montar un pequeño negocio en California, con sus costos",
  skills: "Elegir una estructura de negocio, Registrarte con el estado y el condado, Obtener un EIN y un permiso de vendedor, Encontrar los permisos locales, Hacer una hoja de costos iniciales y fechas límite",
  outcome: "hacer un plan de preparación de una página para tu propio negocio en California: la estructura que vas a usar, cada registro y permiso que necesitas en el orden correcto, la oficina oficial de cada uno, cuánto cuesta cada uno (o dónde buscar el costo) y las fechas límite que no puedes dejar pasar.",
  about: [
    "Este curso es para personas que están empezando un pequeño negocio en California: un food truck, un salón de belleza, un servicio de limpieza, una tiendita de barrio, una tienda en línea o una panadería en casa. Muchos de nuestros estudiantes tienen su primer negocio, son de comunidades minoritarias y lo hacen sin un abogado.",
    "Vas a aprender los pasos de preparación en orden: elegir una estructura, registrar el nombre, obtener un número federal de impuestos gratis, sacar un permiso de vendedor si vendes productos, encontrar los permisos de tu ciudad y tu condado, y planear el impuesto estatal anual y los trámites. Cada cuota estatal de este curso se revisó en la página oficial del gobierno, y cada lección enumera esas páginas.",
    "Las cuotas y las reglas cambian. Antes de pagar cualquier cosa, abre la página oficial que aparece en la lección y revisa la cantidad actual. Las cuotas de la ciudad y del condado son distintas en cada lugar, así que este curso te muestra dónde buscarlas en lugar de adivinar. Para tu caso, un mentor gratis de SCORE, un Centro de Desarrollo de Pequeños Negocios (SBDC) o un profesional de impuestos te pueden ayudar.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final. Las tareas se van sumando en tu propio plan de preparación."
  ],
  finalTask: "Haz un plan de preparación de una página para tu negocio con cinco columnas: Paso, Oficina (con el sitio web oficial), Costo (o \"buscar en ...\"), Fecha límite, Hecho. Incluye tu estructura, el registro del nombre, el EIN, el permiso de vendedor (o por qué no lo necesitas), la licencia de negocio de la ciudad, cualquier permiso especial que CalGold mencione para tu tipo de negocio, y el impuesto anual de $800 y la Declaración de Información si formas una LLC o una corporación.",
  chapters: [
    {
      name: "Capítulo 1: Elegir y registrar tu negocio",
      lessons: [
        {
          title: "Elegir una estructura de negocio",
          minutes: 6,
          goal: "Elegir la estructura de negocio que le queda hoy a tu negocio y saber cuánto cuesta formarla.",
          text: [
            "La estructura de tu negocio es su forma legal. Las opciones más comunes para los pequeños negocios son el negocio de un solo dueño (sole proprietorship), la sociedad general, la compañía de responsabilidad limitada (LLC) y la corporación.",
            "Un negocio de un solo dueño es una persona haciendo negocios. No presentas documentos de formación ante la Secretaría de Estado de California, así que no hay cuota estatal de formación. Pero tú y el negocio son lo mismo ante la ley: si el negocio debe dinero o lo demandan, tus bienes personales pueden estar en riesgo. Una sociedad es la misma idea con dos o más dueños.",
            "Una LLC o una corporación es una entidad legal aparte. La formas presentando documentos ante la Secretaría de Estado de California. La Secretaría de Estado indica que la cuota de los Artículos de Organización de una LLC (Formulario LLC-1) es de $70 y la de los Artículos de Incorporación de una corporación general por acciones (Formulario ARTS-GS) es de $100. Una LLC o una corporación puede ayudar a proteger tus bienes personales de las deudas del negocio, pero cuesta más cada año (Lección 6).",
            "No hay una sola respuesta correcta. Un servicio de limpieza de una persona que apenas empieza puede arrancar como negocio de un solo dueño; un restaurante con contrato de renta, personal y más riesgo muchas veces forma una LLC o una corporación. Platícalo con un asesor gratis del SBDC, un mentor de SCORE o un profesional de impuestos antes de decidir."
          ],
          steps: ["Escribe quién es dueño del negocio y cuánto riesgo tiene (renta, personal, clientes en el local, préstamos).", "Lee la Guía de las formas comunes de propiedad del FTB.", "Compara los costos anuales, no solo la cuota inicial.", "Elige una estructura y pregúntale a un asesor si tienes dudas."],
          words: [["Estructura de negocio", "la forma legal de un negocio, como negocio de un solo dueño, LLC o corporación."], ["Negocio de un solo dueño", "un negocio de una persona que no está separado de su dueño ante la ley."], ["LLC", "compañía de responsabilidad limitada: un negocio registrado en el estado que está separado de sus dueños."], ["Responsabilidad", "ser legalmente responsable de una deuda o de un daño."]],
          slides: [
            { title: "Cuatro estructuras comunes", bullets: ["Negocio de un solo dueño", "Sociedad general (dos o más dueños)", "Compañía de responsabilidad limitada (LLC)", "Corporación"] },
            { title: "Un solo dueño o sociedad", bullets: ["Sin trámite de formación ante la Secretaría de Estado", "Tú y el negocio son lo mismo ante la ley", "Tus bienes personales pueden estar en riesgo"] },
            { title: "LLC o corporación", bullets: ["Se forma con un trámite ante la Secretaría de Estado", "LLC-1: $70. Corporación por acciones ARTS-GS: $100", "Separada de ti, pero cuesta más cada año"] },
            { title: "Cómo elegir", bullets: ["Piensa en el riesgo: renta, personal, clientes, préstamos", "Compara costos anuales, no solo las cuotas iniciales", "Pregunta a un asesor gratis del SBDC o de SCORE"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Empieza tu plan de preparación. Arriba escribe tu idea de negocio, quién es el dueño y sus mayores riesgos. Luego escribe la estructura que elegirías hoy y una razón.",
          youCanNow: "nombrar las estructuras de negocio comunes, decir cuánto cuesta en el estado formar una LLC o una corporación y elegir una para tu negocio."
        },
        {
          title: "Nombrar y registrar tu negocio",
          minutes: 5,
          goal: "Registrar el nombre de tu negocio de la forma correcta según tu estructura.",
          text: [
            "Una LLC o una corporación registra su nombre cuando presenta sus documentos de formación ante la Secretaría de Estado. Puedes hacerlo en línea en bizfile Online (bizfileonline.sos.ca.gov). Busca primero el nombre ahí para ver si otro negocio ya lo usa.",
            "Si haces negocios con un nombre que no es tu nombre legal, presentas una declaración de Nombre Comercial Ficticio (FBN), también llamada DBA (\"doing business as\", es decir, \"haciendo negocios como\"), ante el secretario del condado donde está tu negocio. Por ejemplo, si María López tiene \"Tamales Amanecer\", presenta un FBN. Una LLC que usa un nombre distinto al registrado también presenta un FBN.",
            "La cuota del FBN la fija cada condado, así que búscala en el sitio web del secretario de tu condado. Los condados también te piden publicar el FBN en un periódico local una vez por semana durante cuatro semanas, por lo general empezando dentro de los 30 días después de presentarlo, y luego presentar la prueba de la publicación. Revisa las reglas exactas de tu condado."
          ],
          steps: ["Busca tu idea de nombre en bizfile Online.", "LLC o corporación: presenta los documentos de formación en bizfile Online.", "Si usas un nombre que no es tu nombre legal: presenta un FBN ante el secretario de tu condado.", "Publica el FBN en un periódico como lo pide tu condado y presenta la prueba.", "Escribe en tu plan cada paso, su oficina y su costo."],
          words: [["Nombre Comercial Ficticio (FBN)", "un nombre de negocio que no es el nombre legal del dueño; también se llama DBA."], ["DBA", "\"doing business as\": el nombre que un negocio usa con el público."], ["Secretario del condado", "la oficina del condado que recibe las declaraciones de FBN y otros registros públicos."]],
          slides: [
            { title: "LLC o corporación", bullets: ["El nombre se registra cuando la formas", "Trámite en línea en bizfileonline.sos.ca.gov", "Busca primero el nombre"] },
            { title: "Nombre Comercial Ficticio (DBA)", bullets: ["Para un nombre que no es tu nombre legal", "Se presenta ante el secretario de tu condado", "Ejemplo: María López haciendo negocios como Tamales Amanecer"] },
            { title: "Costos y publicación del FBN", bullets: ["La cuota la fija cada condado: revisa su sitio web", "Publícalo en un periódico local una vez por semana, 4 semanas", "Luego presenta la prueba; revisa los plazos de tu condado"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Busca el nombre de tu negocio en bizfile Online. Luego encuentra la página del FBN del secretario de tu condado y anota en tu plan la cuota y la regla de publicación.",
          youCanNow: "revisar si un nombre de negocio está libre y decir cuándo necesitas un Nombre Comercial Ficticio y dónde presentarlo."
        },
        {
          title: "Obtener tu EIN gratis y un permiso de vendedor",
          minutes: 5,
          goal: "Solicitar un EIN al IRS y decidir si necesitas un permiso de vendedor de California.",
          text: [
            "Un EIN (Número de Identificación del Empleador) es el número federal de impuestos de tu negocio. Lo necesitan las LLC, las corporaciones, las sociedades y cualquier negocio con empleados; un dueño único sin empleados puede usar su propio número, pero muchas veces saca un EIN para mantener separado lo del negocio y lo personal. El IRS (la agencia de impuestos de Estados Unidos) dice que nunca tienes que pagar por un EIN. Solicítalo en irs.gov y ten cuidado con los sitios web que cobran por él.",
            "El permiso de vendedor lo da el Departamento de Administración de Impuestos y Cuotas de California (CDTFA). Si vendes o rentas productos que normalmente pagan impuesto en California, necesitas uno, y debes exhibirlo en tu lugar de negocio. Una tienda, una boutique, un food truck y un restaurante por lo general lo necesitan. Un servicio puro, como limpieza de casas o clases particulares, muchas veces no, pero revísalo.",
            "El CDTFA dice que el permiso de vendedor no tiene cuota, pero que puede pedir un depósito de garantía, y decide la cantidad cuando lo solicitas. Si vendes en un lugar durante 90 días o menos, como un puesto de temporada, tal vez necesites un permiso de vendedor temporal. Regístrate en línea con el CDTFA."
          ],
          steps: ["Entra a irs.gov y busca \"apply for an EIN\".", "Solicítalo en línea de una sola vez y guarda la carta de confirmación.", "Decide si vendes productos que pagan impuesto.", "Si es así, regístrate para un permiso de vendedor en cdtfa.ca.gov.", "Exhibe el permiso donde haces negocios."],
          words: [["EIN", "Número de Identificación del Empleador: un número federal de impuestos gratis para un negocio, que da el IRS."], ["Permiso de vendedor", "un permiso de California, del CDTFA, para vender productos que pagan impuesto y cobrar el impuesto sobre las ventas."], ["CDTFA", "Departamento de Administración de Impuestos y Cuotas de California."], ["Depósito de garantía", "dinero que el CDTFA puede guardar por si más adelante no se paga el impuesto sobre las ventas."]],
          slides: [
            { title: "EIN: el número de impuestos de tu negocio", bullets: ["Del IRS, en irs.gov", "Siempre gratis: el IRS nunca cobra por un EIN", "Cuidado con los sitios que cobran"] },
            { title: "Permiso de vendedor: quién lo necesita", bullets: ["Quien vende o renta productos que pagan impuesto en California", "Tiendas, food trucks, restaurantes por lo general sí", "Los servicios puros muchas veces no: revísalo"] },
            { title: "Permiso de vendedor: costo", bullets: ["Sin cuota para solicitarlo (CDTFA)", "El CDTFA puede pedir un depósito de garantía", "¿Vendes 90 días o menos? Pregunta por un permiso temporal"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Agrega dos filas a tu plan: EIN (IRS, gratis, se solicita en irs.gov) y permiso de vendedor (CDTFA, sin cuota, posible depósito) o una nota de por qué no lo necesitas. No escribas tu número de Seguro Social en ningún lado salvo en el formulario oficial del IRS.",
          youCanNow: "solicitar un EIN gratis en el sitio oficial del IRS y decidir si tu negocio necesita un permiso de vendedor."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir y registrar tu negocio",
        questions: [
          { q: "¿Qué cuota indica la Secretaría de Estado para los Artículos de Organización de una LLC (Formulario LLC-1)?", options: ["$800", "$70", "$20", "Gratis"], answer: 1, why: "La página de formularios de LLC de la Secretaría de Estado indica $70 para el Formulario LLC-1." },
          { q: "Kevin tiene un negocio de cuidado de jardines como dueño único. ¿Qué es cierto?", options: ["Debe pagar $100 a la Secretaría de Estado para formarlo", "No puede usar un nombre de negocio", "Primero debe formar una corporación", "No presenta documentos de formación ante la Secretaría de Estado"], answer: 3, why: "Los dueños únicos no presentan documentos de formación ante la Secretaría de Estado." },
          { q: "María López vende comida como \"Tamales Amanecer\". ¿Dónde presenta su Nombre Comercial Ficticio?", options: ["Ante el secretario de su condado", "Ante el CDTFA", "Ante el IRS", "Ante el Franchise Tax Board"], answer: 0, why: "Las declaraciones de FBN se presentan ante el secretario del condado donde está el negocio." },
          { q: "Un sitio web te pide $150 para conseguirte un EIN. ¿Qué haces?", options: ["Pagarlo; es más rápido", "Usar el EIN de un amigo", "Solicitarlo gratis en irs.gov", "No sacar nunca el EIN"], answer: 2, why: "El IRS dice que nunca tienes que pagar por un EIN." },
          { q: "¿Qué negocio probablemente necesita un permiso de vendedor de California?", options: ["Un servicio de limpieza de casas", "Un servicio de clases particulares", "Una boutique que vende ropa", "Un servicio de contabilidad"], answer: 2, why: "Vender productos que pagan impuesto, como ropa, requiere un permiso de vendedor." }
        ]
      }
    },
    {
      name: "Capítulo 2: Permisos locales, costos anuales y tu plan",
      lessons: [
        {
          title: "Encontrar los permisos de tu ciudad y tu condado",
          minutes: 5,
          goal: "Usar CalGold y el sitio web de tu ciudad para hacer una lista de los permisos locales que necesita tu negocio.",
          text: [
            "La mayoría de las ciudades exigen una licencia de negocio o un certificado de impuesto de negocio, incluso para un negocio en casa. El costo lo fija cada ciudad (o el condado, si estás fuera de una ciudad) y muchas veces depende de tu tipo de negocio o de tus ingresos. Búscalo en el sitio web de tu ciudad o llama al ayuntamiento.",
            "Algunos negocios necesitan permisos especiales. Un restaurante o un food truck necesita un permiso de salud del departamento de salud ambiental del condado. Una panadería en casa puede necesitar un registro o un permiso de alimentos caseros (cottage food) del condado. Un salón necesita licencias de la junta estatal para quienes trabajan ahí. En muchos lugares también se necesita una revisión de zonificación, una inspección de bomberos o un permiso para letreros.",
            "CalGold (calgold.ca.gov) es una herramienta estatal gratis que te ayuda a encontrar información sobre permisos. Eliges tu ciudad o tu condado y tu tipo de negocio, y te muestra las agencias y cómo contactarlas. CalGold no da permisos y dice que todavía está en construcción, así que llama a la agencia para confirmar."
          ],
          steps: ["Abre calgold.ca.gov.", "Elige tu ciudad o tu condado.", "Elige tu tipo de negocio (o \"General Business Information\").", "Anota cada permiso y la agencia que lo da.", "Visita o llama a cada agencia para confirmar la cuota y cómo solicitarlo."],
          words: [["Licencia de negocio", "el permiso de una ciudad o un condado para tener un negocio ahí; a veces se llama certificado de impuesto de negocio."], ["Zonificación", "las reglas locales sobre qué tipo de negocio puede funcionar en una dirección."], ["CalGold", "un sitio web gratis de California que muestra información de permisos según el lugar y el tipo de negocio."]],
          slides: [
            { title: "Licencia de negocio de la ciudad", bullets: ["La mayoría de las ciudades la exigen, incluso en casa", "La cuota la fija cada ciudad o condado", "Revisa el sitio web de tu ciudad o llama al ayuntamiento"] },
            { title: "Permisos especiales", bullets: ["Comida: permiso de salud ambiental del condado", "Panadería en casa: reglas de alimentos caseros del condado", "Zonificación, inspección de bomberos y permisos de letreros"] },
            { title: "Usa CalGold", bullets: ["calgold.ca.gov: elige ciudad y tipo de negocio", "Muestra las agencias; no da permisos", "Llama a cada agencia para confirmar la cuota"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Usa CalGold para tu ciudad y tu tipo de negocio. Agrega a tu plan cada permiso que muestre, con el sitio web de la agencia. Para cada uno, escribe la cuota o \"buscar en\" y dónde.",
          youCanNow: "encontrar los permisos de la ciudad y del condado que necesita tu negocio y la oficina que da cada uno."
        },
        {
          title: "Los costos anuales: el impuesto de $800, los trámites y la nómina",
          minutes: 6,
          goal: "Hacer una lista de los costos y las fechas límite estatales de cada año que vienen con tu estructura.",
          text: [
            "LLC: el Franchise Tax Board (FTB) dice que toda LLC que hace negocios o está organizada en California debe pagar un impuesto anual de $800, cada año, hasta que la LLC se cancele, aunque no haga ningún negocio. El primer pago vence el día 15 del cuarto mes después de que presentas los documentos ante la Secretaría de Estado. Las LLC que ganan más de $250,000 también pagan una cuota de LLC. Una exención del primer año que existió de 2021 a 2023 ya no se aplica.",
            "Corporaciones: el FTB dice que las corporaciones pagan un impuesto mínimo de franquicia de $800, pero que las corporaciones recién formadas no tienen que pagar el mínimo en su primer año fiscal. Aun así, pueden deber impuestos sobre sus ingresos y deben hacer pagos estimados.",
            "Declaración de Información: las LLC y las corporaciones presentan una ante la Secretaría de Estado. La Declaración de Información de una LLC (LLC-12) cuesta $20, vence dentro de los 90 días después de formarla y luego cada dos años. La de una corporación por acciones (SI-550) cuesta $25. No presentarla puede traer multas.",
            "Contratar trabajadores: regístrate con el Departamento de Desarrollo del Empleo (EDD) dentro de los 15 días después de pagar más de $100 en salarios en un trimestre. Las reglas de nómina son detalladas, así que muchos dueños usan un servicio de nómina o un profesional de impuestos."
          ],
          words: [["Franchise Tax Board (FTB)", "la agencia estatal de impuestos de California para el impuesto sobre la renta y el impuesto de franquicia."], ["Impuesto anual", "el impuesto de $800 que paga cada año toda LLC de California."], ["Declaración de Información", "un formulario corto que las LLC y las corporaciones presentan ante la Secretaría de Estado para mantener al día sus datos."], ["EDD", "Departamento de Desarrollo del Empleo: la oficina estatal de los impuestos de nómina y los empleadores."]],
          slides: [
            { title: "LLC: $800 cada año", bullets: ["Vence el día 15 del cuarto mes después de formarla", "Se debe aunque no haya ventas, hasta que la canceles", "Ingresos de más de $250,000: también una cuota de LLC"] },
            { title: "Corporación: mínimo de $800", bullets: ["Impuesto mínimo de franquicia: $800", "No se exige en el primer año fiscal", "Aun así pueden vencer pagos estimados"] },
            { title: "Declaración de Información", bullets: ["LLC (LLC-12): $20, dentro de 90 días, luego cada 2 años", "Corporación por acciones (SI-550): $25", "No presentarla puede traer multas"] },
            { title: "Contratar trabajadores", bullets: ["Regístrate con el EDD dentro de 15 días", "Después de pagar más de $100 en salarios en un trimestre", "Considera un servicio de nómina o un profesional de impuestos"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Agrega a tu plan las filas anuales que corresponden a tu estructura: el impuesto de $800 y su fecha límite, la Declaración de Información y su cuota, y el registro con el EDD si vas a contratar. Abre cada página oficial y revisa la cantidad antes de escribirla.",
          youCanNow: "hacer una lista de los costos y las fechas límite estatales de cada año para tu estructura y decir qué oficina cobra cada uno."
        },
        {
          title: "Juntarlo todo: tu plan de preparación y tu presupuesto",
          minutes: 5,
          goal: "Hacer un plan de preparación de una página con los pasos en orden, las oficinas, los costos y las fechas límite.",
          text: [
            "Ahora pon todo en una página. El orden importa: elige una estructura, forma la LLC o la corporación (si aplica), saca el EIN, presenta el FBN (si hace falta), saca el permiso de vendedor (si hace falta) y luego saca los permisos de la ciudad y del condado. Muchos permisos te piden tu EIN o tu número de entidad, así que haz eso primero.",
            "Suma los costos que conoces y marca los que todavía tienes que buscar. Ejemplo para un food truck que es LLC: LLC-1 $70, Declaración de Información $20, EIN gratis, permiso de vendedor sin cuota (posible depósito), impuesto anual de $800, más las cuotas del permiso de salud del condado, la licencia de la ciudad y el FBN, que buscas en tu zona.",
            "Un asistente de IA te puede ayudar a darle formato a la tabla y hacer una lista de control, pero puede equivocarse con las cuotas y las fechas. Usa siempre la página oficial para la cantidad. No escribas en una herramienta de IA tu número de Seguro Social, tus datos bancarios ni tus contraseñas. Cuando termines, muéstrale el plan a un asesor gratis del SBDC o a un profesional de impuestos."
          ],
          steps: ["Haz una lista de los pasos en orden.", "Agrega la oficina y el sitio web oficial de cada uno.", "Agrega el costo de la página oficial, o \"buscar en ...\".", "Agrega la fecha límite de cada cosa anual.", "Suma los costos conocidos y muéstrale el plan a un asesor."],
          words: [["Costos iniciales", "el dinero que gastas una sola vez para abrir el negocio."], ["Costos recurrentes", "los costos que vuelves a pagar cada año, como el impuesto de $800."]],
          slides: [
            { title: "El orden", bullets: ["1. Estructura  2. Forma la LLC o la corporación", "3. EIN  4. FBN si hace falta  5. Permiso de vendedor", "6. Permisos de la ciudad y del condado"] },
            { title: "Ejemplo: food truck que es LLC", bullets: ["LLC-1 $70; Declaración de Información $20", "EIN gratis; permiso de vendedor sin cuota", "Impuesto anual de $800; cuotas locales: búscalas"] },
            { title: "Usar la IA de forma segura aquí", bullets: ["La IA puede dar formato a tu tabla y tu lista", "Saca cada cuota y fecha de la página oficial", "Nunca escribas tu SSN, datos bancarios ni contraseñas"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Tarea final: termina tu plan de una página con cinco columnas: Paso, Oficina (sitio web), Costo, Fecha límite, Hecho. Llena cada fila con lo de este curso, suma los costos conocidos y marca cada cuota local que todavía tienes que buscar.",
          youCanNow: "hacer y usar un plan de preparación completo para empezar un negocio en California."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Permisos locales, costos anuales y tu plan",
        questions: [
          { q: "¿Qué hace CalGold?", options: ["Muestra información de permisos y agencias para tu ciudad y tu tipo de negocio", "Da tu licencia de negocio", "Cobra el impuesto de $800", "Te da un EIN"], answer: 0, why: "CalGold encuentra información de permisos; no da permisos." },
          { q: "¿Quién fija la cuota de la licencia de negocio de una ciudad?", options: ["El IRS", "La Secretaría de Estado", "El CDTFA", "Cada ciudad o condado"], answer: 3, why: "Las cuotas de las licencias locales las fija cada ciudad o condado." },
          { q: "Una LLC no hizo ningún negocio este año. ¿Debe el impuesto anual de $800?", options: ["No, solo si ganó dinero", "Sí, hasta que se cancele la LLC", "Solo el primer año", "Solo si tiene trabajadores"], answer: 1, why: "El FTB dice que el impuesto anual se debe aunque la LLC no haga negocios, hasta que se cancele." },
          { q: "¿Cuándo vence la primera Declaración de Información de una LLC?", options: ["Dentro de los 90 días después de formarla", "Cada mes", "Solo cuando cierra", "Dentro de 10 años"], answer: 0, why: "La Secretaría de Estado dice que vence dentro de los 90 días después de registrarla y luego cada dos años." },
          { q: "Vas a contratar a tu primer trabajador. ¿Con qué oficina te registras?", options: ["CalGold", "El secretario del condado", "El EDD", "El DMV"], answer: 2, why: "Los empleadores se registran con el EDD dentro de los 15 días después de pagar más de $100 en salarios en un trimestre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo montar un pequeño negocio en California, con sus costos",
    questions: [
      { q: "¿Qué estructura no necesita trámite de formación ante la Secretaría de Estado de California?", options: ["LLC", "Negocio de un solo dueño", "Corporación", "Corporación sin fines de lucro"], answer: 1, why: "Los dueños únicos no presentan documentos de formación ante la Secretaría de Estado." },
      { q: "¿Cuál es una razón principal por la que los dueños forman una LLC?", options: ["Siempre es gratis", "Reemplaza todos los permisos", "Quita todos los impuestos", "Puede ayudar a separar los bienes personales de las deudas del negocio"], answer: 3, why: "Una LLC es una entidad legal aparte que puede ayudar a proteger al dueño." },
      { q: "La cuota de la Secretaría de Estado por los Artículos de Incorporación de una corporación general por acciones (ARTS-GS) es de:", options: ["$20", "$70", "$100", "$800"], answer: 2, why: "La Secretaría de Estado indica $100 para el ARTS-GS." },
      { q: "¿Dónde presentas en línea los documentos de formación de una LLC?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "bizfile Online es el sitio de trámites de la Secretaría de Estado." },
      { q: "¿Qué es un DBA?", options: ["Un formulario de impuestos", "Un tipo de permiso para comida", "El nombre que un negocio usa con el público, si no es el nombre legal del dueño", "Una cuenta de banco"], answer: 2, why: "DBA significa \"doing business as\"; se presenta como Nombre Comercial Ficticio." },
      { q: "Después de presentar un FBN, la mayoría de los condados de California también te piden:", options: ["Publicarlo en un periódico local durante cuatro semanas", "Pagarle al IRS", "Sacar un permiso de vendedor", "Formar una LLC"], answer: 0, why: "Los condados exigen publicar el FBN una vez por semana durante cuatro semanas." },
      { q: "¿Dónde deberías buscar la cuota del FBN de tu condado?", options: ["En un asistente de IA", "En el IRS", "En el sitio web del secretario de tu condado", "En una publicación de redes sociales"], answer: 2, why: "Cada condado fija su propia cuota de FBN." },
      { q: "¿Cuánto cobra el IRS por un EIN?", options: ["Nada", "$70", "$50", "$800"], answer: 0, why: "El IRS dice que nunca tienes que pagar por un EIN." },
      { q: "¿Qué agencia da los permisos de vendedor de California?", options: ["El FTB", "El CDTFA", "El EDD", "El secretario del condado"], answer: 1, why: "El Departamento de Administración de Impuestos y Cuotas de California da los permisos de vendedor." },
      { q: "¿Qué te podría pedir el CDTFA al sacar un permiso de vendedor, aunque no tenga cuota?", options: ["Un trámite de corporación", "La contraseña de tu banco", "Un aviso en el periódico", "Un depósito de garantía"], answer: 3, why: "El CDTFA dice que puede pedir un depósito de garantía." },
      { q: "Un puesto de calabazas de temporada vende en un lugar durante seis semanas. ¿Por qué debería preguntar el dueño al CDTFA?", options: ["Por un permiso de vendedor temporal", "Por un EIN", "Por un FBN", "Por una Declaración de Información"], answer: 0, why: "Las ventas en un lugar durante 90 días o menos pueden necesitar un permiso de vendedor temporal." },
      { q: "Un food truck por lo general necesita un permiso de salud de:", options: ["El IRS", "El EDD", "La Secretaría de Estado", "El departamento de salud ambiental del condado"], answer: 3, why: "Los negocios de comida sacan los permisos de salud con la salud ambiental del condado." },
      { q: "CalGold dice que no da permisos. Así que, después de usarlo, deberías:", options: ["Ignorar la lista", "Pagarle a CalGold", "Contactar a cada agencia de la lista para confirmar la cuota y solicitar", "Pedirle a una IA que lo solicite por ti"], answer: 2, why: "CalGold muestra las agencias; tú solicitas con cada una." },
      { q: "Un negocio de clases particulares en casa probablemente igual necesita:", options: ["Un permiso de vendedor", "Una licencia de negocio o un certificado de impuesto de la ciudad", "Un permiso de salud", "Una licencia de bebidas alcohólicas"], answer: 1, why: "La mayoría de las ciudades exigen una licencia de negocio, incluso para negocios en casa." },
      { q: "¿Cuánto es el impuesto anual de una LLC en California?", options: ["$20", "$70", "$250", "$800"], answer: 3, why: "El FTB dice que toda LLC debe pagar un impuesto anual de $800." },
      { q: "¿Cuándo vence el primer impuesto anual de $800 de una LLC?", options: ["Solo cuando gana $250,000", "Nunca en el primer año", "El día 15 del cuarto mes después de presentar los documentos ante la Secretaría de Estado", "El 31 de diciembre"], answer: 2, why: "El FTB indica el día 15 del cuarto mes después de presentarlos." },
      { q: "Una corporación nueva, en su primer año fiscal:", options: ["No tiene que pagar el impuesto mínimo de franquicia de $800", "Paga $1,600", "Nunca paga impuestos", "Debe pagar la cuota de LLC"], answer: 0, why: "El FTB dice que las corporaciones recién formadas no tienen que pagar el mínimo en su primer año fiscal." },
      { q: "¿Cada cuánto presenta una LLC la Declaración de Información después de la primera?", options: ["Cada mes", "Cada dos años", "Cada diez años", "Nunca"], answer: 1, why: "La Secretaría de Estado dice que cada dos años después de la primera." },
      { q: "¿En qué orden se suelen hacer estas cosas?", options: ["Licencia de la ciudad, luego formar la LLC, luego elegir la estructura", "Elegir la estructura, formarla, sacar el EIN y luego los permisos locales", "Permiso de vendedor, luego EIN, luego estructura", "Cualquier orden está bien"], answer: 1, why: "Muchos permisos piden tu EIN y tu número de entidad, así que primero forma el negocio y saca el EIN." },
      { q: "Un asistente de IA te dice la cuota del FBN en tu condado. ¿Qué haces?", options: ["Revisarla primero en la página oficial del secretario de tu condado", "Ponerla en el plan sin revisarla", "Pagarle a la herramienta de IA", "Escribir tu SSN para obtener una mejor respuesta"], answer: 0, why: "La IA puede equivocarse; las cuotas salen de la página oficial." }
    ]
  }
};

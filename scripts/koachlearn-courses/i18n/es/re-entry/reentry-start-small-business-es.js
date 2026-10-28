"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-start-small-business.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-start-small-business-es",
  lang: "es",
  translationOf: "reentry-start-small-business",
  category: "Re-Entry",
  name: "Cómo montar y empezar un pequeño negocio",
  skills: "Elegir un negocio que puedas empezar ya, Encontrar clientes y fijar un precio, Escribir un plan de negocio de una página con IA, Elegir la estructura y el nombre del negocio, Obtener un EIN gratis y las licencias correctas, Llevar registros y planear los impuestos",
  outcome: "escribir con ayuda de la IA un plan de negocio de una página para un negocio de servicios sencillo, y hacer una lista de preparación con los pasos oficiales de Estados Unidos: estructura y nombre del negocio, un EIN gratis del IRS, las licencias que exigen tu ciudad, tu condado y tu estado, una cuenta de banco aparte y registros para los impuestos.",
  about: [
    "Muchas personas que regresan a casa deciden trabajar por su cuenta: limpieza, cuidado de jardines, ayuda con mudanzas, lavado y detallado de autos, barbería, cocina, pintura, reparaciones y más. Tener un negocio te puede dar ingresos, independencia y un futuro, aunque algunos empleadores tarden en contratar.",
    "En el Capítulo 1 vas a elegir una idea de negocio que encaje con tus habilidades, definir quiénes son tus clientes y cuánto cobrar, y escribir un plan de una página con un asistente de IA. En el Capítulo 2 vas a aprender los pasos oficiales para montarlo en Estados Unidos: estructura del negocio, nombre, un EIN gratis del IRS (la agencia de impuestos de Estados Unidos), licencias, una cuenta de banco, registros e impuestos, y dónde conseguir ayuda gratis.",
    "Las reglas cambian según el estado, el condado y la ciudad, y cambian con el tiempo. Este curso te da los pasos y los lugares oficiales donde revisar, como sba.gov (el sitio de la SBA, la agencia federal que apoya a los pequeños negocios) e irs.gov; no es asesoría legal ni fiscal. Nunca escribas en la IA tu número de Seguro Social, detalles de tu caso ni datos bancarios. Cada lección dura unos cinco minutos. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe con ayuda de la IA un plan de negocio de una página para un negocio de servicios sencillo (servicio, clientes, precio, cómo te van a encontrar, costos iniciales). Luego haz tu lista de preparación: la estructura de tu negocio, el nombre de tu negocio y si necesita un DBA, cómo obtener un EIN gratis en irs.gov, las licencias que debes revisar con tu ciudad, tu condado y tu estado, abrir una cuenta de banco aparte, y cómo vas a llevar registros y apartar dinero para los impuestos. Incluye el sitio web oficial de cada paso.",
  chapters: [
    {
      name: "Capítulo 1: Planear tu negocio",
      lessons: [
        {
          title: "Elegir un negocio que puedas empezar ya",
          minutes: 5,
          goal: "Elegir una idea de negocio que encaje con tus habilidades, tu dinero y tu situación.",
          text: [
            "El mejor primer negocio muchas veces es sencillo: un servicio que ya sabes hacer, que necesita poco dinero para empezar y por el que la gente de tu zona paga. Ejemplos: limpieza de casas u oficinas, cuidado de jardines, lavado a presión, retiro de cosas que ya no se usan, ayuda con mudanzas, detallado de autos, pintura, cocina, cortes de cabello, costura o reparaciones.",
            "Pídele a un asistente de IA que te ayude a pensar: \"Aprendí a cocinar y a limpiar y tengo unos $300 para empezar. Todavía no tengo auto. Sugiere cinco pequeños negocios de servicios que podría empezar en mi ciudad, con lo que necesita cada uno para arrancar.\"",
            "Algunos trabajos necesitan una licencia estatal, como barbería, cosmetología, electricidad o contratista de obras, y algunas juntas de licencias tienen reglas sobre personas con antecedentes. Antes de elegir uno de estos, revisa el sitio web oficial de la junta de licencias de tu estado o pregunta en un programa de reinserción. Muchos estados han cambiado estas reglas, así que no des por hecho que no puedes."
          ],
          steps: ["Haz una lista de tus habilidades y de lo que te gusta.", "Anota el dinero y las herramientas que tienes para empezar, como un auto.", "Pídele a la IA algunas ideas de negocio que encajen.", "Revisa si una idea necesita licencia estatal.", "Elige una idea para planear."],
          words: [["Negocio de servicios", "un negocio que hace trabajos para la gente, como limpieza o reparaciones, en lugar de vender productos."], ["Costos iniciales", "el dinero que necesitas para empezar, como herramientas y materiales."], ["Junta de licencias", "la oficina del estado que da licencias para algunos trabajos."]],
          slides: [
            { title: "Empieza sencillo", bullets: ["Un servicio que ya conoces", "Poco dinero para empezar", "La gente de tu zona paga por él"] },
            { title: "Pídele ideas a la IA", bullets: ["Tus habilidades", "Tu presupuesto y tus herramientas", "\"Sugiere cinco negocios que podría empezar.\""] },
            { title: "¿Trabajo con licencia?", bullets: ["Barbería, electricidad, contratista y más", "Revisa la junta de licencias de tu estado", "Las reglas han cambiado en muchos estados"] }
          ],
          tryIt: "Escribe tus tres mejores habilidades y con cuánto dinero podrías empezar. Pídele a un asistente de IA cinco ideas de pequeños negocios que encajen y luego elige una.",
          youCanNow: "elegir una idea de pequeño negocio que encaje con tus habilidades y tu dinero."
        },
        {
          title: "Clientes y precios",
          minutes: 5,
          goal: "Describir a tus clientes y fijar un precio inicial que cubra tus costos.",
          text: [
            "Un negocio necesita clientes que paguen. Sé específico sobre quiénes son: \"familias ocupadas de mi barrio\", \"oficinas pequeñas del centro\", \"dueños de casa mayores que no pueden cortar el pasto\". Conocerlos te dice dónde encontrarlos.",
            "Para fijar un precio, suma tus costos de un trabajo (materiales, gasolina o pasaje de autobús, y tu tiempo) y luego mira cuánto cobran otros en tu zona. Pregúntale a la IA: \"Quiero ofrecer limpieza básica de casas en Atlanta. Mis materiales cuestan unos $10 por trabajo y un trabajo me toma 3 horas. ¿Cómo podría calcular un precio inicial justo? ¿Qué debo revisar sobre los precios locales?\" Luego revisa precios locales reales mirando anuncios locales o llamando a algunos negocios.",
            "No pongas un precio tan bajo que pierdas dinero. Un precio debe pagar tus costos, tu tiempo y un poco más para impuestos y ahorro."
          ],
          steps: ["Describe a tus clientes en una oración.", "Suma tus costos de un trabajo.", "Decide cuánto vale tu tiempo por hora.", "Revisa cuánto cobran otros en tu zona.", "Fija un precio que cubra costos, tiempo e impuestos."],
          words: [["Cliente", "una persona o un negocio que paga por tu servicio."], ["Ganancia", "el dinero que queda después de pagar tus costos."]],
          slides: [
            { title: "Conoce a tus clientes", bullets: ["Sé específico", "\"Familias ocupadas de mi barrio\"", "Te dice dónde encontrarlos"] },
            { title: "Calcula tu precio", bullets: ["Costos de un trabajo", "Tu tiempo", "Lo que cobran otros en tu zona"] },
            { title: "No cobres muy poco", bullets: ["Cubre costos y tiempo", "Deja espacio para impuestos y ahorro"] }
          ],
          tryIt: "Para tu idea, escribe una oración que describa a tus clientes. Pídele a la IA que te ayude a calcular un precio inicial con tus costos y tu tiempo, y luego revisa dos precios locales reales.",
          youCanNow: "describir a tus clientes y fijar un precio inicial que cubra tus costos."
        },
        {
          title: "Un plan de negocio de una página con IA",
          minutes: 6,
          goal: "Escribir un plan de negocio de una página con un asistente de IA.",
          text: [
            "Un plan de negocio es tu mapa. La SBA describe un plan corto de \"startup ágil\" que cabe en una página y cubre cosas como tus clientes, el valor que ofreces, cómo llegas a los clientes, tus costos y cómo ganas dinero.",
            "Pregúntale a la IA: \"Ayúdame a escribir un plan de negocio de una página para un negocio de cuidado de jardines en mi pueblo. Usa estos títulos: qué ofrezco, quiénes son mis clientes, por qué me elegirían, cómo me van a encontrar, costos iniciales, precio y mi meta del primer mes. Hazme preguntas una por una para llenarlo.\" Responde con tus propias palabras.",
            "Lee con cuidado el plan terminado. Cambia todo lo que no sea cierto o realista. Puedes mostrárselo a un mentor; SCORE ofrece mentoría gratis (mira la Lección 6)."
          ],
          steps: ["Pídele a la IA que te entreviste con una pregunta a la vez.", "Usa títulos sencillos: oferta, clientes, por qué tú, cómo te encuentran, costos, precio, primera meta.", "Responde con tus propias palabras.", "Corrige lo que no sea realista.", "Guárdalo y compártelo con un mentor."],
          words: [["Plan de negocio", "un plan escrito de cómo va a funcionar tu negocio y cómo va a ganar dinero."], ["Plan de startup ágil", "un plan de negocio corto, de una página."]],
          slides: [
            { title: "Tu mapa de una página", bullets: ["El plan de startup ágil de la SBA cabe en una página", "Clientes, valor, alcance, costos, dinero"] },
            { title: "Deja que la IA te entreviste", bullets: ["\"Hazme una pregunta a la vez.\"", "Responde con tus propias palabras"] },
            { title: "Hazlo realista", bullets: ["Corrige lo que no sea realista", "Muéstraselo a un mentor"] }
          ],
          sources: [{ name: "SBA: Escribe tu plan de negocio (en inglés)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Pídele a un asistente de IA que te entreviste con una pregunta a la vez y escriba un plan de una página para tu idea de negocio. Guarda el plan.",
          youCanNow: "escribir un plan de negocio de una página con ayuda de la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear tu negocio",
        questions: [
          { q: "¿Cuál suele ser el mejor primer negocio?", options: ["Uno del que no sabes nada", "Un negocio que necesita $100,000 para empezar", "Un servicio sencillo que ya conoces, con costos iniciales bajos", "Uno sin clientes cerca"], answer: 2, why: "El bajo costo y las habilidades que ya tienes reducen el riesgo." },
          { q: "Quieres ser barbero. ¿Qué deberías revisar primero?", options: ["Las reglas de la junta de licencias de tu estado", "Nada", "Un rumor en redes sociales", "Solo la IA"], answer: 0, why: "La barbería necesita una licencia estatal y las juntas fijan las reglas." },
          { q: "¿Qué descripción de clientes es la más útil?", options: ["\"Cualquiera con dinero\"", "\"Todo el mundo\"", "\"La gente\"", "\"Dueños de casa mayores de mi barrio que no pueden cortar el pasto\""], answer: 3, why: "Los clientes específicos te dicen dónde encontrarlos." },
          { q: "Un buen precio cubre:", options: ["Solo los materiales", "Tus costos, tu tiempo y algo para impuestos", "Nada; trabajar gratis", "Lo que cobre el competidor más barato, aunque pierdas"], answer: 1, why: "Los precios deben cubrir los costos y pagarte a ti." },
          { q: "¿Cómo puede ayudarte mejor la IA a escribir un plan de negocio?", options: ["Inventando datos sobre tu negocio", "Entrevistándote con una pregunta a la vez", "Firmando papeles legales", "Sacando tu EIN por ti"], answer: 1, why: "Tú pones los datos; la IA los organiza." }
        ]
      }
    },
    {
      name: "Capítulo 2: Montarlo de la forma oficial",
      lessons: [
        {
          title: "Estructura y nombre del negocio",
          minutes: 6,
          goal: "Elegir una estructura de negocio y averiguar si el nombre de tu negocio se debe registrar.",
          text: [
            "La SBA explica que si empiezas a hacer negocios sin registrarte como otro tipo, automáticamente eres un negocio de un solo dueño (sole proprietorship). Es lo más sencillo: tú y el negocio son lo mismo para los impuestos y las deudas, así que eres personalmente responsable de las deudas del negocio.",
            "Una compañía de responsabilidad limitada (LLC, por sus siglas en inglés) se registra en tu estado, por lo general con la Secretaría de Estado, y en general protege tus bienes personales si demandan al negocio o si se endeuda, aunque esa protección tiene límites. Formarla cuesta dinero y puede tener cuotas anuales, que cambian según el estado; revisa el costo actual en el sitio web de la Secretaría de Estado de tu estado.",
            "Si usas un nombre de negocio que no es tu nombre legal, como \"Limpieza Nuevo Comienzo\", la mayoría de los estados te piden registrarlo como DBA (\"doing business as\", es decir, \"haciendo negocios como\") con el estado, el condado o la ciudad. Si haces negocios con tu propio nombre legal, la SBA dice que puede que no necesites registrarte en ningún lado. Pregúntale a un profesional de impuestos o a un socio de la SBA qué estructura te conviene."
          ],
          steps: ["Decide: negocio de un solo dueño (automático) o LLC (registrada en el estado).", "Para una LLC, revisa los costos en el sitio web de la Secretaría de Estado.", "Elige un nombre para el negocio.", "Si no es tu nombre legal, averigua dónde registrar un DBA en tu estado, condado o ciudad.", "Pregúntale a un profesional de impuestos o a un socio de la SBA si tienes dudas."],
          words: [["Negocio de un solo dueño", "un negocio de una sola persona, sin separación entre el dueño y el negocio."], ["LLC", "compañía de responsabilidad limitada: un negocio registrado que en general protege los bienes personales del dueño."], ["DBA", "\"doing business as\": un nombre de negocio registrado que no es tu nombre legal."]],
          slides: [
            { title: "Negocio de un solo dueño", bullets: ["Es automático cuando empiezas a hacer negocios", "Lo más sencillo", "Eres personalmente responsable de las deudas"] },
            { title: "LLC", bullets: ["Se registra en tu estado", "En general protege tus bienes personales", "El costo cambia según el estado: revisa la Secretaría de Estado"] },
            { title: "El nombre de tu negocio", bullets: ["¿No es tu nombre legal? Por lo general registra un DBA", "Con tu estado, condado o ciudad", "Las reglas cambian: revisa en tu zona"] }
          ],
          sources: [{ name: "SBA: Elige una estructura de negocio (en inglés)", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }, { name: "SBA: Registra tu negocio (en inglés)", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" }],
          tryIt: "Decide si empezarías como negocio de un solo dueño o como LLC, y escribe por qué. Elige un nombre de negocio, luego busca \"register DBA\" más tu condado o estado y encuentra la página oficial del gobierno (muchas veces termina en .gov).",
          youCanNow: "elegir una estructura de negocio y averiguar cómo registrar el nombre de tu negocio."
        },
        {
          title: "Tu EIN gratis y las licencias correctas",
          minutes: 6,
          goal: "Saber cómo obtener un EIN gratis del IRS y encontrar las licencias y los permisos que necesita tu negocio.",
          text: [
            "Un EIN (Número de Identificación del Empleador) es un número de identificación fiscal para tu negocio. El IRS dice que \"nunca tienes que pagar por un EIN\" y advierte sobre sitios web que cobran por él. Solicítalo directamente en irs.gov. Si te lo aprueban, el número se da de inmediato en línea. Tienes que terminar en una sola sesión, así que aparta tiempo; la herramienta en línea solo está abierta en ciertos horarios, que aparecen en irs.gov. Los dueños únicos sin empleados muchas veces pueden usar su número de Seguro Social en su lugar, pero muchos sacan un EIN para mantener separado lo del negocio y lo personal.",
            "Las licencias y los permisos vienen de distintos niveles de gobierno. La SBA explica que las licencias federales son solo para ciertas actividades (como alcohol o aviación); los estados dan licencias para muchos oficios; y las ciudades y los condados muchas veces exigen una licencia general de negocio y permisos para cosas como comida, construcción o venta ambulante.",
            "Para encontrar las tuyas: revisa los sitios web de tu ciudad y tu condado para la licencia de negocio, el sitio web de tu estado para las licencias de oficio y el registro del impuesto sobre las ventas si vendes productos, y pregunta en tu Centro de Desarrollo de Pequeños Negocios (SBDC) local. Escribe tus números reales solo en los sitios oficiales .gov, nunca en la IA."
          ],
          steps: ["Entra a irs.gov y busca \"apply for an EIN\"; nunca le pagues a un sitio web por uno.", "Revisa el horario en línea y termina en una sola sesión.", "Imprime o guarda la confirmación de tu EIN.", "Revisa con tu ciudad y tu condado la licencia de negocio y los permisos.", "Revisa con tu estado las licencias de oficio y el registro del impuesto sobre las ventas."],
          words: [["EIN", "Número de Identificación del Empleador: un número de identificación fiscal gratis para un negocio, que da el IRS."], ["Licencia", "permiso oficial del gobierno para tener un negocio o hacer cierto trabajo."], ["Permiso", "autorización oficial para una actividad específica, como vender comida."]],
          slides: [
            { title: "EIN: gratis del IRS", bullets: ["\"Nunca tienes que pagar por un EIN\"", "Solicítalo en irs.gov; se da de inmediato en línea", "Termina en una sesión, en el horario abierto"] },
            { title: "Las licencias vienen de 3 niveles", bullets: ["Federal: solo ciertas actividades", "Estatal: muchos oficios, impuesto sobre las ventas", "Ciudad y condado: licencia de negocio, permisos"] },
            { title: "Encuentra las tuyas", bullets: ["Sitios web de la ciudad y el condado", "Sitio web del estado", "Pregunta en tu SBDC local"] }
          ],
          sources: [{ name: "IRS: Obtén un número de identificación del empleador (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Solicita licencias y permisos (en inglés)", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" }],
          tryIt: "Abre la página del EIN en irs.gov y anota el horario en línea y lo que necesitas para solicitarlo (no lo solicites todavía si no estás listo). Luego encuentra la página de licencias de negocio de tu ciudad o condado y anota su dirección web.",
          youCanNow: "obtener un EIN gratis del IRS y encontrar las licencias y los permisos que necesita tu negocio."
        },
        {
          title: "Cuenta de banco, registros, impuestos y ayuda gratis",
          minutes: 6,
          goal: "Llevar registros sencillos del dinero, planear los impuestos y encontrar ayuda gratis para tu negocio.",
          text: [
            "Mantén aparte el dinero del negocio. La SBA recomienda abrir una cuenta de banco del negocio en cuanto empieces a recibir o gastar dinero del negocio. Los bancos suelen pedir un EIN (o tu número de Seguro Social si eres dueño único), los documentos de formación y una licencia de negocio; pregúntale a tu banco qué necesita.",
            "Lleva un registro de cada dólar que entra y sale: una hoja de cálculo o un cuaderno sencillo con la fecha, quién, qué y cuánto, más los recibos. La IA puede diseñarte una hoja de registro sencilla: \"Hazme un registro sencillo de ingresos y gastos para un negocio de limpieza.\" No pegues datos bancarios reales en ella.",
            "Impuestos: el IRS dice que las personas que trabajan por cuenta propia deben presentar una declaración de impuestos si sus ganancias netas son de $400 o más, y que por lo general pagan el impuesto sobre el trabajo por cuenta propia (Seguro Social y Medicare) además del impuesto sobre la renta, muchas veces con pagos estimados cada trimestre. Los formularios incluyen el Anexo C (Schedule C), el Anexo SE (Schedule SE) y el Formulario 1040-ES. Muchos dueños apartan una parte de cada pago para los impuestos; un profesional de impuestos o la ayuda gratuita con impuestos te puede decir cuánto. Ayuda gratis para negocios: SCORE ofrece mentores voluntarios sin costo, y los Centros de Desarrollo de Pequeños Negocios y los Centros de Negocios para Mujeres ofrecen asesoría; encuéntralos en sba.gov."
          ],
          steps: ["Abre una cuenta de banco aparte para el negocio; pregúntale al banco qué necesita.", "Lleva un registro de cada dólar que entra y sale, con recibos.", "Aparta una parte de cada pago para los impuestos.", "Conoce los formularios en irs.gov: Anexo C, Anexo SE, 1040-ES.", "Consigue ayuda gratis con SCORE, un SBDC o un Centro de Negocios para Mujeres."],
          words: [["Impuesto sobre el trabajo por cuenta propia", "el impuesto de Seguro Social y Medicare que pagan las personas que trabajan por su cuenta."], ["Impuesto estimado", "impuesto que se paga durante el año, por lo general cada trimestre, cuando ningún empleador lo retiene."], ["Gasto", "dinero que gastas para hacer funcionar el negocio."]],
          slides: [
            { title: "Mantén aparte el dinero del negocio", bullets: ["Abre una cuenta de banco del negocio", "Los bancos piden EIN o SSN, documentos, licencia"] },
            { title: "Lleva registros", bullets: ["Cada dólar que entra y sale", "Fecha, quién, qué, cuánto, recibos", "La IA puede diseñar el registro; sin datos bancarios"] },
            { title: "Planea los impuestos", bullets: ["Declara si tus ganancias netas son de $400 o más", "Impuesto por cuenta propia más impuesto sobre la renta", "Anexo C, Anexo SE, 1040-ES"] },
            { title: "Ayuda gratis", bullets: ["Mentores de SCORE sin costo", "Centros de Desarrollo de Pequeños Negocios", "Encuéntralos en sba.gov"] }
          ],
          sources: [{ name: "SBA: Abre una cuenta de banco del negocio (en inglés)", url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account" }, { name: "IRS: Centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "SBA: Socios de recursos (en inglés)", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          tryIt: "Tarea final: termina tu plan de una página y haz tu lista de preparación con un sitio web oficial para cada paso: estructura, nombre y DBA, EIN gratis en irs.gov, licencias de la ciudad, el condado y el estado, una cuenta de banco aparte, un registro hecho con la IA, dinero apartado para los impuestos y tu SCORE o SBDC más cercano.",
          youCanNow: "planear un pequeño negocio y montarlo de la forma oficial, con registros, un plan de impuestos y ayuda gratis."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Montarlo de la forma oficial",
        questions: [
          { q: "Empiezas a limpiar casas sin registrar ningún tipo de negocio. Eres:", options: ["Una organización sin fines de lucro", "Una LLC", "Una corporación", "Un negocio de un solo dueño"], answer: 3, why: "La SBA dice que el negocio de un solo dueño se forma automáticamente." },
          { q: "El nombre de tu negocio es \"Limpieza Nuevo Comienzo\", no tu nombre legal. La mayoría de los estados exigen:", options: ["Registrarlo como DBA", "Nada nunca", "Una licencia federal", "Primero una marca registrada"], answer: 0, why: "Un nombre comercial por lo general se debe registrar como DBA." },
          { q: "¿Cuánto cobra el IRS por un EIN?", options: ["$250", "$50", "Nada; es gratis", "Depende del sitio web"], answer: 2, why: "El IRS dice que nunca tienes que pagar por un EIN." },
          { q: "¿De dónde suele venir una licencia general de negocio?", options: ["De un sitio web privado", "Del IRS", "De la FAA", "De tu ciudad o tu condado"], answer: 3, why: "Las ciudades y los condados dan las licencias generales de negocio." },
          { q: "Las personas que trabajan por cuenta propia deben presentar una declaración de impuestos si sus ganancias netas son de:", options: ["Nunca", "$40,000 o más", "$400 o más", "Solo más de $1 millón"], answer: 2, why: "El IRS fija el límite en $400 de ganancias netas por trabajo por cuenta propia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo montar y empezar un pequeño negocio",
    questions: [
      { q: "Un negocio de servicios:", options: ["Solo vende productos", "Hace trabajos para la gente, como limpieza o reparaciones", "Siempre es en línea", "Necesita una fábrica"], answer: 1, why: "Los servicios son trabajos que se hacen para los clientes." },
      { q: "Los costos iniciales son:", options: ["El dinero que necesitas para empezar, como herramientas y materiales", "Tu ganancia", "Tus impuestos", "Tus clientes"], answer: 0, why: "Son lo que gastas para empezar." },
      { q: "Si un trabajo necesita una licencia estatal, deberías revisar:", options: ["El sitio web oficial de la junta de licencias de tu estado", "Solo la IA", "Un rumor", "Nada"], answer: 0, why: "Las juntas de licencias fijan las reglas, que han cambiado en muchos estados." },
      { q: "¿Por qué describir a los clientes de forma específica?", options: ["Sube los precios", "Te dice dónde encontrarlos", "Lo exige el IRS", "Reemplaza una licencia"], answer: 1, why: "A los clientes específicos es más fácil llegar." },
      { q: "Para fijar un precio, empieza por:", options: ["El precio más bajo del pueblo, aunque pierdas", "Un número al azar", "Tus costos de un trabajo y tu tiempo", "Lo que diga un amigo"], answer: 2, why: "Los precios deben cubrir costos y tiempo." },
      { q: "La ganancia es:", options: ["Un préstamo", "Todo el dinero que entra", "Lo que debes de impuestos", "El dinero que queda después de los costos"], answer: 3, why: "Ganancia = ingresos menos costos." },
      { q: "Un plan de negocio de startup ágil es:", options: ["Un formulario de impuestos", "Un informe de 100 páginas", "Un plan corto, de una página", "Una licencia"], answer: 2, why: "La SBA lo describe como un plan de una página." },
      { q: "Cuando la IA te ayuda a escribir tu plan, ¿quién pone los datos?", options: ["Tú", "La IA", "Un desconocido", "El IRS"], answer: 0, why: "La IA organiza; tú conoces tu negocio." },
      { q: "En un negocio de un solo dueño, ¿quién es responsable de las deudas del negocio?", options: ["Tus clientes", "Nadie", "El gobierno", "Tú personalmente"], answer: 3, why: "No hay separación entre el dueño y el negocio." },
      { q: "Una LLC por lo general se registra con:", options: ["Solo el IRS", "Tu estado, muchas veces la Secretaría de Estado", "Tu banco", "Una red social"], answer: 1, why: "Los estados forman las LLC." },
      { q: "¿Dónde revisas el costo actual de formar una LLC?", options: ["Solo con la IA", "En el sitio web de la Secretaría de Estado de tu estado", "En un anuncio emergente", "Con un amigo"], answer: 1, why: "Los costos cambian según el estado y con el tiempo." },
      { q: "DBA significa:", options: ["Deuda antes de bienes", "Departamento de Asuntos de Negocios", "Cuenta bancaria diaria", "Doing business as (haciendo negocios como)"], answer: 3, why: "Un DBA es un nombre comercial registrado." },
      { q: "Un sitio web cobra $200 por conseguirte un EIN. Deberías:", options: ["Solicitarlo gratis en irs.gov", "Pagarlo", "Darle tu número de Seguro Social", "Pedirle a la IA que lo pague"], answer: 0, why: "El IRS advierte sobre los sitios que cobran por los EIN." },
      { q: "La solicitud de EIN en línea del IRS:", options: ["Está abierta las 24 horas todos los días", "Se puede guardar y terminar la próxima semana", "Se debe terminar en una sola sesión durante su horario abierto", "Cobra una cuota"], answer: 2, why: "El IRS dice que no se puede guardar y publica un horario fijo." },
      { q: "¿Qué nivel de gobierno da licencias para muchos oficios, como el trabajo eléctrico?", options: ["La oficina de correos", "Solo el gobierno federal", "Tu banco", "El estado"], answer: 3, why: "Los estados dan licencias para muchos oficios." },
      { q: "¿Dónde deberías escribir tu número de Seguro Social real al solicitar un EIN?", options: ["En un mensaje a un desconocido", "En un asistente de IA", "Solo en el sitio oficial irs.gov", "En cualquier sitio web"], answer: 2, why: "Los números privados van solo en sitios oficiales." },
      { q: "¿Por qué abrir una cuenta de banco aparte para el negocio?", options: ["Para no pagar ningún impuesto", "Para mantener separado el dinero del negocio y el personal", "Reemplaza una licencia", "Para esconder dinero"], answer: 1, why: "La SBA dice que separarlo te protege y facilita los registros." },
      { q: "Los buenos registros del negocio incluyen:", options: ["Fecha, quién, qué y cuánto, con recibos", "Solo las ventas grandes", "Nada", "Tus contraseñas"], answer: 0, why: "Los registros completos facilitan los impuestos." },
      { q: "¿Qué formulario reporta las ganancias o pérdidas de un negocio de un solo dueño?", options: ["El Anexo C (Schedule C)", "El Formulario W-2", "El Formulario I-9", "El Formulario DS-11"], answer: 0, why: "El IRS usa el Anexo C para los dueños únicos." },
      { q: "¿Qué socio de la SBA ofrece mentores voluntarios para negocios sin costo?", options: ["El IRS", "SCORE", "Un prestamista de día de pago", "Una agencia de crédito"], answer: 1, why: "Los mentores de SCORE dan consejos sin costo." }
    ]
  }
};

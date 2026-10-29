"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-farm-finance.js). See scripts/koachlearn-courses/README.md, "Translations".

const VSLA = { name: "VSL Associates: la metodología VSLA (acciones, fondo de préstamos, fondo social, ciclo de un año, reparto)", url: "https://www.vsla.net/the-vsla-methodology/" };
const SASRA = { name: "SASRA, Kenia: lista de SACCO de captación de depósitos con licencia", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };
const BCEAO_SFD = { name: "BCEAO: normas para las instituciones de microfinanzas (systèmes financiers décentralisés) en los países del XOF", url: "https://www.bceao.int/fr/reglementations/reglementation-des-systemes-financiers-decentralises" };
const CBN_MFB = { name: "Banco Central de Nigeria: bancos de microfinanzas", url: "https://www.cbn.gov.ng/Supervision/Inst-MF.html" };
const NIRSAL = { name: "NIRSAL Plc, Nigeria: presentación (garantías de riesgo de crédito para préstamos agrícolas)", url: "https://nirsal.com/who-we-are/overview/" };
const GIRSAL = { name: "Graphic Online, Ghana: GIRSAL premia a instituciones financieras por sus préstamos agrícolas", url: "https://www.graphic.com.gh/news/general-news/increasing-lending-support-for-agriculture-sector-girsal-honours-11-financial-institutions-individuals.html" };
const WRSC = { name: "Consejo del Sistema de Recibos de Almacén de Kenia (Warehouse Receipt System Council): bodegas certificadas y recibos de almacén", url: "https://www.wrsc.go.ke" };
const GCX_EWR = { name: "MyJoyOnline (31 de octubre de 2019): la GCX y ARB Apex Bank lanzan el financiamiento con recibos de almacén electrónicos", url: "https://www.myjoyonline.com/gcx-arb-apex-bank-launch-gha%C2%A250m-support-for-ghanaian-smallholder-farmers/" };
const GCX_ADEHYEMAN = { name: "Ghana News Agency (junio de 2023): Adehyeman Savings and Loans y la Bolsa de Productos Básicos de Ghana se unen para apoyar a los agricultores", url: "https://gna.org.gh/2023/06/adehyeman-ghana-commodity-exchange-partner-to-support-farmers/" };
const OAF = { name: "One Acre Fund: quiénes somos (financiamiento, insumos agrícolas y capacitación; países)", url: "https://oneacrefund.org/about-us" };
const ENABLE = { name: "IITA: Sudán lanza el programa ENABLE Youth (programa del Banco Africano de Desarrollo para jóvenes agroemprendedores)", url: "https://iita.org/news-item/sudan-launches-enable-youth-program/" };
const YEDF = { name: "Fondo de Desarrollo de Empresas Juveniles de Kenia (Youth Enterprise Development Fund): préstamos para empresas de jóvenes, incluido un préstamo Agri-Biz", url: "https://www.youthfund.go.ke" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entrepreneuriat rapide des Femmes et des Jeunes", url: "https://der.sn" };
const FCCPC = { name: "FCCPC, Nigeria: estado de registro de los prestamistas digitales (aplicaciones de préstamo aprobadas)", url: "https://fccpc.gov.ng/registration-status-for-digital-money-lenders-apps/" };
const CBK_DCP = { name: "Banco Central de Kenia: supervisión bancaria, incluido el directorio de proveedores de crédito digital con licencia", url: "https://www.centralbank.go.ke/bank-supervision/" };

module.exports = {
  id: "agri-farm-finance-es",
  lang: "es",
  translationOf: "agri-farm-finance",
  category: "Agriculture (Africa)",
  name: "Financiar tu finca: préstamos, subvenciones e inversionistas",
  skills: "Calcular cuánto dinero necesitas, Usar grupos de ahorro, VSLA y SACCO, Comparar préstamos agrícolas y planes de pago, Usar recibos de almacén y crédito en insumos, Encontrar subvenciones reales y evitar estafas, Escribir una solicitud de financiamiento de una página",
  outcome: "calcular exactamente cuánto dinero necesita tu finca y cuándo, comparar grupos de ahorro, SACCO, préstamos, recibos de almacén, crédito en insumos y subvenciones, reconocer una estafa de préstamo o de subvención, y escribir una solicitud de financiamiento de una página que un prestamista, un programa o un inversionista pueda aprobar.",
  about: [
    "Este curso es para pequeños productores y agricultores comerciales en crecimiento, jóvenes agroemprendedores, grupos de mujeres y de jóvenes, líderes de cooperativas y extensionistas de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil y de toda África que necesitan dinero para empezar, seguir adelante o crecer.",
    "El capítulo 1 cubre el dinero que tienes más cerca: calcular cuánto necesitas y para qué, los grupos de ahorro, las VSLA (asociaciones de ahorro y préstamo de la comunidad) y las SACCO (cooperativas de ahorro y crédito), y los préstamos agrícolas de microfinancieras y bancos. El capítulo 2 cubre otras puertas: el financiamiento con recibos de almacén y el crédito en insumos de compradores y esquemas por contrato, las subvenciones y los programas para jóvenes y cómo evitar estafas, y cómo escribir una solicitud de financiamiento de una página. Se basa en \"Agronegocios y administración de la finca\", que enseña a calcular el costo total de un préstamo.",
    "Todas las cifras de dinero son ejemplos inventados; las tasas de interés, las comisiones y los programas cambian, así que revisa la oferta actual. Este curso explica cómo funciona cada tipo de financiamiento y sus riesgos. No da consejos de préstamo ni de inversión. Pide prestado solo lo que tu plan necesita, lee completo cada contrato, revisa que el prestamista tenga licencia y consulta a un asesor de confianza, como tu cooperativa, tu SACCO, tu extensionista o un abogado, antes de firmar."
  ],
  finalTask: "Escribe una solicitud de financiamiento de una página para tu finca (o una finca de ejemplo): quién eres y cómo es tu finca; para qué es exactamente el dinero, cuánto es en total, cuánto pones tú y la brecha que pides; cómo va a producir el dinero (costo por unidad, margen bruto o periodo de recuperación); el tipo de financiamiento que pides y por qué encaja; un plan de pagos que coincida con cuándo te entra el dinero; tus garantías o avales; tus riesgos principales y cómo los manejas; y tus registros o tu historial.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, jóvenes agroemprendedores, grupos de mujeres y de jóvenes, líderes de cooperativas y extensionistas de Kenia, Nigeria, Ghana y África Occidental francófona, que cultivan o crían animales y peces, y que quieren dinero para empezar, crecer o pasar la temporada.",
    startingPoint: "Muchos han pedido prestado a la familia, a una chama o grupo de ahorro, a una tienda o a una aplicación de préstamos en el teléfono. Pocos han preparado un presupuesto escrito para un préstamo, han comparado ofertas por costo total y fechas de pago, han usado un recibo de almacén o han revisado si un prestamista o un programa es real. A algunos les han llegado ofertas falsas de subvenciones y de préstamos.",
    gap: "Los agricultores a menudo piden prestada una cantidad equivocada, en el momento equivocado y al prestamista equivocado, con pagos que vencen antes de la cosecha, o pierden dinero con subvenciones falsas y aplicaciones de préstamo sin licencia. Conocer su verdadera brecha de financiamiento y las opciones que les sirven les permite pedir menos y mejor, usar el ahorro en grupo y el crédito ligado a la cosecha, y presentar una solicitud clara que los prestamistas y los programas tomen en serio.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra de finanzas",
      "Dispositivos: un teléfono básico y una calculadora; un cuaderno para los presupuestos y la solicitud",
      "Tiempo: lecciones de 5 a 6 minutos que caben entre las tareas de la finca",
      "Las tasas, las comisiones y los programas cambian y varían según el país: no se dan tasas ni fechas límite; los participantes revisan la oferta actual y al ente regulador",
      "Sin consejos de préstamo ni de inversión; nunca escribir PIN, contraseñas ni datos bancarios en aplicaciones ni en herramientas de IA para practicar"
    ],
    prerequisites: "Ninguno. \"Agronegocios y administración de la finca\" (registros, flujo de caja, costo de un préstamo) y \"Contabilidad agrícola y gestión de inversiones\" (costo por unidad, periodo de recuperación) ayudan con los números."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un plan de la finca y sus costos", action: "calcular el dinero total que necesitas, tu aporte propio y la brecha de financiamiento, separados en capital de trabajo y equipo, con el mes en que se necesita cada uno", standard: "con las cuentas correctas y sin mezclar gastos del hogar" },
    { id: "O2", condition: "Con un grupo de ahorro, una VSLA o una SACCO a la que podrías unirte", action: "explicar cómo funcionan en ella el ahorro, los préstamos, las garantías y el reparto, y hacer la lista de sus riesgos", standard: "nombrando al menos tres reglas que hay que revisar antes de unirse" },
    { id: "O3", condition: "Con dos ofertas de préstamo", action: "comparar su costo total, sus garantías y sus fechas de pago, y elegir la que encaja con tu cosecha", standard: "con el total a pagar calculado para cada una y los meses de pago revisados en tu flujo de caja" },
    { id: "O4", condition: "Con una oferta de recibo de almacén o de crédito en insumos", action: "hacer la lista de sus costos, de lo que debes hacer y de lo que pasa si los precios o la cosecha bajan", standard: "nombrando al menos cuatro términos y dos riesgos" },
    { id: "O5", condition: "Con una oferta de subvención, de programa para jóvenes o de préstamo", action: "revisarla en el sitio web oficial o en la lista del regulador y reconocer las señales de alerta de una estafa", standard: "antes de pagar, compartir datos o postularte" },
    { id: "O6", condition: "Usando las cifras de tu propia finca", action: "escribir una solicitud de financiamiento de una página que un prestamista, un programa o un inversionista pueda evaluar", standard: "que cubra el propósito, el monto, el aporte propio, cómo produce, el pago, las garantías y los riesgos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Lo que necesitas y el dinero que tienes más cerca",
      lessons: [
        {
          title: "Cuánto dinero necesitas y para qué",
          objectives: ["O1"],
          minutes: 5,
          goal: "Calcular tu necesidad total de dinero, tu aporte propio y la brecha de financiamiento, mes a mes.",
          text: [
            "Antes de buscar dinero, escribe exactamente para qué es. El capital de trabajo paga un ciclo de producción: semilla, fertilizante, alimento, pollitos o alevines, mano de obra, servicios veterinarios y transporte. Regresa cuando vendes. El equipo y las construcciones (una bomba, un corral, una bodega) duran muchos años y se pagan solos despacio. Los prestamistas muchas veces los tratan de forma distinta, con plazos de préstamo distintos, así que anótalos por separado.",
            "Ejemplo (cifras inventadas en nairas), un lote de pollos de engorde en Nigeria: pollitos, alimento, servicios veterinarios y mano de obra 1,200,000 (capital de trabajo); bebederos, comederos y reparaciones del galpón 300,000 (equipo). Total 1,500,000. Has ahorrado 500,000. Brecha de financiamiento = 1,500,000 - 500,000 = 1,000,000. Esa brecha, no el total, es lo que pides.",
            "Luego pon cada costo en el mes en que se necesita, usando tu plan de flujo de caja, para pedir el dinero cuando lo necesitas y no pagar intereses por dinero parado. Deja un pequeño colchón para las subidas de precio. No mezcles gastos del hogar como la escuela: pide para la finca solo lo que la finca puede pagar."
          ],
          steps: ["Haz la lista de todos los costos de tu plan.", "Marca cada uno como capital de trabajo o equipo.", "Súmalos para obtener la necesidad total.", "Resta el dinero que vas a poner tú.", "La diferencia es tu brecha de financiamiento.", "Pon cada costo en el mes en que se necesita y agrega un pequeño colchón."],
          words: [["Capital de trabajo", "dinero que paga un ciclo de producción y regresa cuando vendes."], ["Brecha de financiamiento", "el dinero que todavía necesitas después de tu aporte propio: necesidad total - dinero propio."], ["Aporte propio", "el dinero o los bienes que tú mismo pones en el plan."]],
          slides: [
            { title: "Dos tipos de necesidad", bullets: ["Capital de trabajo: un ciclo, regresa al vender", "Equipo y construcciones: duran años, se pagan despacio", "Anótalos por separado"] },
            { title: "Ejemplo de pollos de engorde (NGN, inventado)", bullets: ["Capital de trabajo 1,200,000 + equipo 300,000 = 1,500,000", "Dinero propio 500,000", "Brecha de financiamiento 1,000,000: pide esto"] },
            { title: "Momento y disciplina", bullets: ["Pon cada costo en su mes", "Un pequeño colchón para subidas de precio", "Nada de gastos del hogar en un préstamo de la finca"] }
          ],
          tryIt: "Para un plan de tu finca, haz la lista de todos los costos, marca cada uno como capital de trabajo o equipo, súmalos, resta tu dinero propio, y escribe la brecha de financiamiento y el mes en que se necesita cada parte.",
          youCanNow: "calcular exactamente cuánto dinero necesita tu plan de finca, para qué y cuándo, y la brecha que necesitas financiar.",
          quickCheck: [
            { objective: "O1", q: "Un plan cuesta 800,000 y tienes 300,000 propios. ¿Cuál es la brecha de financiamiento?", options: ["1,100,000", "800,000", "500,000", "300,000"], answer: 2, why: "800,000 - 300,000 = 500,000." },
            { objective: "O1", q: "¿Qué es capital de trabajo en un estanque de peces?", options: ["Los alevines y el alimento de un ciclo", "Excavar el estanque", "Una bomba de agua", "Una cerca"], answer: 0, why: "Los alevines y el alimento se gastan en un ciclo y regresan cuando se venden los peces." }
          ]
        },
        {
          title: "Grupos de ahorro, VSLA y SACCO",
          objectives: ["O2"],
          minutes: 6,
          goal: "Explicar cómo funcionan una VSLA y una SACCO y hacer la lista de las reglas que hay que revisar antes de unirse.",
          text: [
            "Una asociación de ahorro y préstamo de la comunidad (VSLA, por sus siglas en inglés) es un grupo, muchas veces de 10 a 25 miembros, que se reúne cada semana. En cada reunión los miembros compran de 1 a 5 acciones a un precio por acción que el grupo fija para el año. Los ahorros van a un fondo de préstamos. Normalmente los miembros pueden pedir prestado hasta tres veces lo que han ahorrado, por un máximo de tres meses, pagando un cargo por servicio que fija el grupo. Muchos grupos también tienen un pequeño fondo social para emergencias. Después de más o menos un año, se pagan todos los préstamos y el dinero, incluidos los cargos por servicio, se reparte en proporción a lo que ahorró cada miembro.",
            "Una SACCO (cooperativa de ahorro y crédito; en África Occidental francófona, una mutuelle o caisse) es una cooperativa financiera que pertenece a sus socios, muchas veces más grande y más formal. Ahorras con regularidad, y los préstamos suelen depender de cuánto has ahorrado y necesitan avales: socios que prometen pagar si tú no pagas. En Kenia, SASRA da licencia a las SACCO de captación de depósitos y publica la lista. En los países del franco CFA, las instituciones de microfinanzas y las cooperativas de crédito siguen las normas del BCEAO.",
            "Antes de unirte, revisa: la constitución o los estatutos escritos, el precio por acción o el monto de ahorro, las reglas y los cargos de los préstamos, cómo se guarda el dinero con seguridad (una caja con candados o una cuenta con licencia), cómo se llevan y se leen en voz alta los registros, y qué significa ser aval. Si avalas el préstamo de un amigo y no lo paga, puede que tengas que pagarlo tú."
          ],
          steps: ["Pide ver las reglas escritas del grupo.", "Revisa el precio por acción o el monto de ahorro y los días de reunión.", "Revisa el tamaño, el plazo y el cargo de los préstamos.", "Revisa cómo se guardan con seguridad el dinero y los registros.", "Pregunta qué significa para ti ser aval.", "En una SACCO, revisa que esté registrada o tenga licencia."],
          words: [["VSLA", "asociación de ahorro y préstamo de la comunidad: un grupo que ahorra cada semana, presta a sus miembros y reparte al final de un ciclo."], ["Reparto", "el día en que el grupo entrega todos los ahorros y ganancias a los miembros en proporción a sus ahorros."], ["SACCO", "cooperativa de ahorro y crédito: un grupo que pertenece a sus socios, recibe ahorros y hace préstamos."], ["Aval", "una persona que promete pagar un préstamo si quien lo pidió no lo paga."]],
          slides: [
            { title: "VSLA: cómo funciona", bullets: ["10-25 miembros se reúnen cada semana; compran 1-5 acciones", "Préstamos de hasta 3 veces el ahorro por hasta 3 meses", "Reparto después de más o menos un año"] },
            { title: "SACCO", bullets: ["Cooperativa de ahorro y crédito de sus socios", "Préstamos ligados al ahorro; avales", "Kenia: revisa la lista de SASRA de SACCO con licencia"] },
            { title: "Revisa antes de unirte", bullets: ["Reglas escritas; monto de ahorro", "Tamaño, plazo y cargo del préstamo", "Dinero y registros seguros; deberes del aval"] }
          ],
          sources: [VSLA, SASRA, BCEAO_SFD],
          tryIt: "Pide sus reglas a un grupo de ahorro, una VSLA o una SACCO cerca de ti (o usa el ejemplo). Escribe el monto de ahorro, el tamaño del préstamo, el plazo, el cargo, cómo se guarda el dinero con seguridad y qué debe hacer un aval.",
          youCanNow: "explicar cómo funcionan los grupos de ahorro, las VSLA y las SACCO y revisar sus reglas antes de unirte o de avalar un préstamo.",
          quickCheck: [
            { objective: "O2", q: "En una VSLA, ¿cómo se reparte el dinero al final del ciclo?", options: ["En partes iguales, ahorre lo que ahorre cada uno", "Al presidente", "A quien pidió más prestado", "En proporción a los ahorros de cada miembro"], answer: 3, why: "Los miembros que compraron más acciones reciben una parte mayor del total." },
            { objective: "O2", q: "Avalas el préstamo de un amigo en una SACCO y deja de pagar. ¿Qué puede pasar?", options: ["Nada; los avales son solo un trámite", "Puede que tengas que pagar una parte o todo", "La SACCO cancela el préstamo", "La familia de tu amigo paga automáticamente"], answer: 1, why: "Un aval promete pagar si quien pidió el préstamo no paga." }
          ]
        },
        {
          title: "Préstamos agrícolas de microfinancieras y bancos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Comparar dos ofertas de préstamo por su costo total, sus garantías y qué tan bien encajan los pagos con tu cosecha.",
          text: [
            "Los bancos e instituciones de microfinanzas prestan montos más pequeños, muchas veces a grupos; los bancos comerciales y agrícolas prestan montos más grandes, muchas veces con más garantías. Pregunta si la tasa es mensual o anual, y si es fija sobre el monto total (tasa plana) o sobre saldo decreciente. Una tasa plana cobra interés sobre el monto completo durante todo el préstamo; una tasa sobre saldo decreciente cobra solo sobre lo que todavía debes, así que el mismo número cuesta menos. Suma cada comisión y cada cargo de seguro para saber el total que vas a pagar.",
            "La garantía (colateral) es lo que el prestamista se puede llevar si no pagas: un título de tierra, un vehículo, equipo, ahorros que guarda el prestamista, una garantía del grupo o un recibo de almacén. Algunos gobiernos respaldan a los prestamistas con garantías de crédito, como NIRSAL en Nigeria (cobertura de hasta el 75% para los prestamistas) y GIRSAL en Ghana. Estas protegen al prestamista y pueden hacer que los bancos estén más dispuestos a prestar a los agricultores, pero tú sigues debiendo el préstamo completo.",
            "Haz que los pagos coincidan con tu cosecha. Ejemplo (cifras inventadas en chelines kenianos), un préstamo de 100,000 para una temporada de maíz: la Oferta A es 10,000 al mes durante 12 meses desde el mes próximo, un total de 120,000. La Oferta B es un solo pago de 112,000 en el mes 6, después de la cosecha. B cuesta menos y se paga cuando te entra el dinero; A pide pagos antes de que hayas vendido nada. Pide un periodo de gracia o el pago en la cosecha, y revisa que el prestamista tenga licencia del banco central."
          ],
          steps: ["Pregunta: ¿tasa mensual o anual? ¿Plana o sobre saldo decreciente?", "Suma interés, comisiones y seguro para obtener el total a pagar.", "Pregunta qué garantía o aval se necesita.", "Pon las fechas de pago en tu plan de flujo de caja.", "Pide un periodo de gracia o el pago en la cosecha si hace falta.", "Revisa que el prestamista tenga licencia; lee todo el contrato."],
          words: [["Tasa plana", "interés que se cobra sobre el monto completo prestado durante todo el préstamo, aunque vayas pagando."], ["Saldo decreciente", "interés que se cobra solo sobre lo que todavía debes."], ["Garantía", "algo que el prestamista se puede llevar si no pagas (también se llama colateral)."], ["Periodo de gracia", "un tiempo al comienzo del préstamo en que no tienes que pagar."], ["Garantía de crédito", "la promesa de un tercero de cubrir parte de la pérdida del prestamista si quien pidió el préstamo no paga."]],
          slides: [
            { title: "Conoce la tasa", bullets: ["¿Mensual o anual?", "Plana: interés sobre el monto completo todo el tiempo", "Saldo decreciente: solo sobre lo que todavía debes"] },
            { title: "Garantías y avales", bullets: ["Título de tierra, equipo, ahorros, garantía del grupo", "NIRSAL (Nigeria) y GIRSAL (Ghana) respaldan a los prestamistas", "Sigues debiendo el préstamo completo"] },
            { title: "Pagos que encajan con la cosecha (ejemplo en KES)", bullets: ["A: 10,000 x 12 desde el mes próximo = 120,000", "B: 112,000 una sola vez en el mes 6, después de la cosecha", "B cuesta menos y encaja con cuándo entra el dinero"] }
          ],
          sources: [CBN_MFB, NIRSAL, GIRSAL],
          tryIt: "Toma dos ofertas de préstamo reales o de ejemplo. Para cada una, escribe el monto, la tasa (mensual o anual, plana o sobre saldo decreciente), las comisiones, el total a pagar, la garantía y los meses de pago. Marca los meses de pago en tu plan de flujo de caja y elige la que encaja mejor.",
          youCanNow: "comparar ofertas de préstamo por costo total, garantía y momento de pago, y elegir la que encaja con tu cosecha.",
          quickCheck: [
            { objective: "O3", q: "Dos préstamos muestran el mismo número, 2% al mes. Uno es tasa plana y el otro sobre saldo decreciente. ¿Cuál suele costar menos?", options: ["El préstamo con tasa plana", "Siempre cuestan lo mismo", "El préstamo sobre saldo decreciente", "Depende del color del formulario"], answer: 2, why: "El saldo decreciente cobra solo sobre lo que todavía debes, así que el interés total es menor." },
            { objective: "O3", q: "Tu maíz se vende en el mes 6. ¿Qué plan de pagos encaja mejor?", options: ["Pagos semanales desde la semana 1", "Pagos mensuales desde el mes próximo", "Pagos diarios", "Un periodo de gracia con el pago después de la cosecha"], answer: 3, why: "Pagar cuando entra el dinero de la cosecha evita pagos atrasados y ventas forzadas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo que necesitas y el dinero que tienes más cerca",
        questions: [
          { objective: "O1", q: "¿Por qué anotar por separado el capital de trabajo y el equipo?", options: ["Los prestamistas pueden tratarlos de forma distinta porque se pagan solos en tiempos distintos", "Para que la lista sea más larga", "El equipo nunca necesita financiamiento", "No hay ninguna razón"], answer: 0, why: "El capital de trabajo regresa en un ciclo; el equipo se paga en años." },
          { objective: "O1", q: "¿Debes sumar la escuela de los hijos a una solicitud de préstamo para la finca?", options: ["Sí, siempre", "Sí, si el prestamista no pregunta", "No, pide para la finca solo lo que la finca puede pagar", "Solo en la época seca"], answer: 2, why: "Los gastos del hogar no producen ingresos, así que hacen más difícil pagar un préstamo de la finca." },
          { objective: "O2", q: "En una VSLA típica, ¿cuánto puede pedir prestado normalmente un miembro?", options: ["Cualquier monto", "Hasta unas tres veces sus ahorros", "Solo sus propios ahorros", "Diez veces sus ahorros"], answer: 1, why: "Los préstamos de una VSLA suelen limitarse a unas tres veces lo que el miembro ha ahorrado." },
          { objective: "O2", q: "¿Qué organismo de Kenia da licencia a las SACCO de captación de depósitos?", options: ["KALRO", "KAMIS", "El Departamento Meteorológico de Kenia", "SASRA"], answer: 3, why: "SASRA da licencia y supervisa a las SACCO de captación de depósitos y publica su lista." },
          { objective: "O3", q: "Pides 50,000 y pagas 5,000 al mes durante 12 meses más una comisión de 2,000. ¿Cuál es el costo total del préstamo?", options: ["12,000", "60,000", "10,000", "2,000"], answer: 0, why: "Pagas 60,000 + 2,000 = 62,000, que son 12,000 más de lo que pediste." }
        ]
      }
    },
    {
      name: "Capítulo 2: Otras puertas al dinero y cómo pedirlo",
      lessons: [
        {
          title: "Recibos de almacén y crédito en insumos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hacer la lista de los costos, deberes y riesgos de un préstamo con recibo de almacén y de una oferta de crédito en insumos.",
          text: [
            "Financiamiento con recibo de almacén: entregas producto limpio, seco y clasificado a una bodega certificada. Se pesa y se prueba, y recibes un recibo que prueba que eres dueño de esa cantidad y calidad. Un banco aliado puede prestarte con ese recibo como garantía, así recibes dinero ahora y puedes vender después, cuando quizá los precios sean mejores; el préstamo se paga con la venta. En Kenia, el Warehouse Receipt System Council (consejo del sistema de recibos de almacén) certifica las bodegas. En Ghana, la Bolsa de Productos Básicos de Ghana y ARB Apex Bank lanzaron en 2019 préstamos con recibos de almacén electrónicos, y en 2023 una empresa de ahorro y préstamo se sumó para ofrecer préstamos respaldados por productos que los agricultores pagan después de vender. Pregunta al prestamista qué parte del valor del producto te presta y por cuánto tiempo.",
            "Costos y riesgos: cargos de almacenamiento y manejo, seguro, interés y transporte. Si los precios bajan en lugar de subir, la venta puede no cubrir el préstamo y los cargos. El producto debe cumplir la calidad, así que un mal secado o una mala selección bajan su valor. Calcula el precio que necesitas con el método del equilibrio del almacenamiento del curso de gestión de riesgos.",
            "Crédito en insumos: un comprador, un procesador, un esquema de agricultura por contrato o una organización te da semilla, fertilizante o pollitos a crédito, muchas veces con capacitación, y pagas en cuotas o el costo se descuenta de lo que te pagan por la cosecha. One Acre Fund trabaja así con agricultores de Kenia, Nigeria y otros países. Revisa: los precios de los insumos comparados con los precios al contado, todos los cargos, cuánto se descuenta en la cosecha, si tienes que venderles solo a ellos, qué pasa si la cosecha falla, y la multa por venta paralela."
          ],
          steps: ["Recibo de almacén: busca una bodega certificada y sus prestamistas aliados.", "Pregunta los cargos de almacenamiento, manejo, seguro y préstamo.", "Pregunta cuánto puedes pedir con el producto como garantía y por cuánto tiempo.", "Calcula el precio de venta que necesitas para pagarlo todo.", "Crédito en insumos: compara los precios de los insumos con los precios al contado y anota cada cargo.", "Pregunta qué pasa si la cosecha falla y si tienes que venderles solo a ellos."],
          words: [["Recibo de almacén", "un documento de una bodega certificada que prueba que eres dueño de un producto almacenado de cierta cantidad y calidad."], ["Bodega certificada", "un almacén revisado y aprobado para guardar el producto con seguridad y emitir recibos."], ["Crédito en insumos", "semilla, fertilizante u otros insumos que recibes ahora y pagas después, muchas veces con la cosecha."], ["Agricultura por contrato", "un acuerdo en que una empresa da a los agricultores insumos y asesoría y les compra la cosecha."]],
          slides: [
            { title: "Préstamos con recibo de almacén", bullets: ["Entrega producto clasificado; recibe un recibo", "Pide prestado con él; vende después", "Kenia: WRS Council; Ghana: bodegas de la GCX"] },
            { title: "Costos y riesgos", bullets: ["Almacenamiento, manejo, seguro, interés", "Los precios pueden bajar en lugar de subir", "El producto debe cumplir la calidad"] },
            { title: "Crédito en insumos", bullets: ["Insumos ahora, pagados en cuotas o en la cosecha", "Compradores, procesadores, agricultura por contrato, One Acre Fund", "Compara con precios al contado; anota todos los cargos"] },
            { title: "Pregunta antes de firmar", bullets: ["¿Qué se descuenta en la cosecha?", "¿Tienes que venderles solo a ellos?", "¿Y si la cosecha falla?"] }
          ],
          sources: [WRSC, GCX_EWR, GCX_ADEHYEMAN, OAF],
          tryIt: "Elige un préstamo con recibo de almacén o una oferta de crédito en insumos cerca de ti (o un ejemplo). Escribe al menos cuatro términos (costos, monto, plazo, descuentos o reglas de venta) y dos riesgos, y di si encaja con tu finca.",
          youCanNow: "explicar cómo funcionan los préstamos con recibo de almacén y el crédito en insumos y revisar sus costos y riesgos antes de firmar.",
          quickCheck: [
            { objective: "O4", q: "¿Qué prueba un recibo de almacén?", options: ["Que eres dueño de cierta cantidad y calidad de producto almacenado", "Que pagaste tus impuestos", "Que el precio va a subir", "Que el banco aprobó un préstamo"], answer: 0, why: "El recibo prueba que eres dueño de un producto clasificado y almacenado, y un prestamista lo puede aceptar." },
            { objective: "O4", q: "Un esquema de crédito en insumos descuenta el costo de los insumos de lo que te pagan por la cosecha. ¿Qué debes revisar?", options: ["Solo la variedad de semilla", "Nada; la empresa decide", "Los precios de los insumos frente a los precios al contado, todos los cargos y qué pasa si la cosecha falla", "Solo la fecha de la capacitación"], answer: 2, why: "Estos términos deciden cuánto pagas de verdad y quién carga con una cosecha perdida." }
          ]
        },
        {
          title: "Subvenciones, programas para jóvenes y cómo evitar estafas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Revisar una subvención, un programa para jóvenes o una oferta de préstamo en una fuente oficial y reconocer las señales de una estafa.",
          text: [
            "Las subvenciones no hay que devolverlas, pero son competidas, tienen reglas sobre cómo gastas el dinero y piden informes. Muchos \"fondos para jóvenes\" son en realidad préstamos o capacitación. Ejemplos que puedes revisar: el programa ENABLE Youth del Banco Africano de Desarrollo capacita y apoya a jóvenes agroemprendedores en varios países africanos, con aliados como el IITA (Instituto Internacional de Agricultura Tropical); el Youth Enterprise Development Fund (fondo de desarrollo de empresas juveniles) de Kenia ofrece préstamos a empresas de jóvenes, incluido un préstamo Agri-Biz; la DER/FJ de Senegal financia proyectos de mujeres y jóvenes, también en agricultura, sobre todo con crédito. Los programas abren y cierran y cambian sus reglas: revisa siempre en el sitio web o la oficina oficial que la convocatoria esté abierta ahora antes de postularte.",
            "Las estafas copian los nombres y los logotipos de programas reales en las redes sociales y en WhatsApp. Señales de alerta: tienes que pagar un cargo de \"trámite\" o de \"inscripción\" antes de recibir una subvención o un préstamo; la aprobación está \"garantizada\"; te apuran; te piden tu PIN, un código de un solo uso o fotos de tu documento por chat; el contacto usa un número o un correo personal; o una aplicación de préstamos quiere acceso a todos tus contactos. Los programas reales no cobran por postularse y nunca piden tu PIN.",
            "Revisa cada prestamista y cada aplicación de préstamos: en Kenia, el Banco Central de Kenia publica el directorio de proveedores de crédito digital con licencia y SASRA publica la lista de SACCO con licencia; en Nigeria, la FCCPC (comisión de competencia y protección del consumidor) publica el registro de prestamistas digitales aprobados y el Banco Central de Nigeria da licencia a los bancos de microfinanzas; en los países del franco CFA, consulta al BCEAO o a la oficina nacional de microfinanzas. Si tienes dudas, pregunta a tu cooperativa o a tu extensionista."
          ],
          steps: ["Busca el programa en su sitio web o su oficina oficial, no en una publicación de redes sociales.", "Revisa que la convocatoria esté abierta ahora y lee las reglas.", "Nunca pagues para postularte ni para recibir una subvención.", "Nunca compartas tu PIN, un código de un solo uso ni tus contraseñas.", "Revisa a los prestamistas y las aplicaciones de préstamo en la lista del regulador.", "Pregunta a tu cooperativa o a tu extensionista si tienes dudas."],
          words: [["Subvención", "dinero que se da para un propósito y que no hay que devolver, normalmente con reglas e informes."], ["Convocatoria", "un aviso de que un programa está recibiendo solicitudes, con una fecha de inicio y una de cierre."], ["Estafa", "un engaño para robar dinero o información."], ["Regulador", "el organismo oficial que da licencia y supervisa a los prestamistas, las SACCO o las aseguradoras."]],
          slides: [
            { title: "Subvenciones y programas para jóvenes", bullets: ["Subvenciones: no se devuelven, pero son competidas y tienen reglas", "Muchos fondos para jóvenes son préstamos o capacitación", "Revisa en el sitio oficial que la convocatoria esté abierta ahora"] },
            { title: "Ejemplos para revisar", bullets: ["ENABLE Youth del BAfD (con el IITA)", "Kenia: préstamos del Youth Enterprise Development Fund", "Senegal: DER/FJ para mujeres y jóvenes"] },
            { title: "Señales de estafa", bullets: ["Un cargo para postularte o para recibir dinero", "Aprobación \"garantizada\"; te apuran", "Te piden PIN, código o fotos de tu documento por chat"] },
            { title: "Revisa al regulador", bullets: ["Kenia: prestamistas digitales del CBK; SACCO en SASRA", "Nigeria: aplicaciones de préstamo en la FCCPC; microfinanzas en el CBN", "Países CFA: BCEAO u oficina nacional"] }
          ],
          sources: [ENABLE, YEDF, DERFJ, CBK_DCP, FCCPC],
          tryIt: "Busca una subvención, un programa para jóvenes o una aplicación de préstamos de la que hayas oído hablar. Revísala en el sitio web oficial o en la lista del regulador y escribe: ¿es real?, ¿está abierta ahora?, ¿es una subvención o un préstamo?, y cualquier señal de alerta que veas.",
          youCanNow: "revisar si una subvención, un programa o un prestamista es real y está abierto, y reconocer las señales de alerta de una estafa.",
          quickCheck: [
            { objective: "O5", q: "Un mensaje de WhatsApp dice que ganaste una subvención agrícola y que debes pagar un cargo de trámite de 5,000. ¿Qué es esto?", options: ["Un paso normal de una subvención", "Una señal de alerta de estafa", "Una norma del gobierno", "El pago de un préstamo"], answer: 1, why: "Las subvenciones reales no te cobran por recibir dinero." },
            { objective: "O5", q: "En Nigeria, ¿dónde puedes revisar si una aplicación de préstamos está aprobada?", options: ["En el propio anuncio de la aplicación", "En la opinión de un amigo", "En el número de descargas", "En el registro de prestamistas digitales de la FCCPC"], answer: 3, why: "La FCCPC publica la lista de prestamistas digitales aprobados." }
          ]
        },
        {
          title: "Escribir una solicitud de financiamiento de una página",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir una solicitud de financiamiento de una página para tu finca.",
          text: [
            "Una solicitud de financiamiento le dice a un prestamista, un programa o un inversionista qué necesitas, por qué, y cómo se va a pagar o a dar resultado. Que sea de una página con títulos claros: quién eres y cómo es tu finca (lugar, tierra, actividades, años de experiencia); el propósito y el monto (necesidad total, tu aporte propio, la brecha que pides, separada en capital de trabajo y equipo); cómo va a producir (costo por unidad, margen bruto o periodo de recuperación según tus registros); el financiamiento que pides y por qué encaja; el plan de pagos mes a mes, de acuerdo con tu flujo de caja; las garantías o avales; los riesgos y cómo los manejas (seguro, contratos, diversificación, almacenamiento); y tu historial (registros que llevas, préstamos pagados, grupos a los que perteneces).",
            "Los inversionistas son distintos de los prestamistas. Un inversionista pone dinero a cambio de una parte del negocio y de sus ganancias futuras (participación o capital propio), en lugar de recibir el pago con intereses. Los inversionistas de capital suelen buscar negocios que crecen, como procesadores o fincas más grandes con registros y un equipo. Cedes parte de la propiedad y algo de control, así que busca asesoría legal y nunca firmes lo que no entiendes.",
            "Antes de enviarla, revisa los números dos veces, pide a un líder de cooperativa, a un extensionista o a un asesor que la lea, y adjunta tus registros. Nunca pongas contraseñas, PIN ni datos bancarios completos en la solicitud; dalos solo por el proceso oficial del prestamista."
          ],
          steps: ["Quién eres y cómo es tu finca.", "Propósito, necesidad total, aporte propio y la brecha.", "Cómo va a producir: costo por unidad, margen o periodo de recuperación.", "Tipo de financiamiento y plan de pagos mes a mes.", "Garantías o avales; riesgos y cómo los manejas.", "Historial; revisa los números y pide a un asesor que la lea."],
          words: [["Solicitud de financiamiento", "un documento corto que pide dinero a un prestamista, un programa o un inversionista, y muestra el propósito, el monto y el pago."], ["Participación (capital propio)", "una parte de la propiedad de un negocio que recibe un inversionista a cambio de su dinero."], ["Historial", "la prueba de lo que has hecho antes, como registros que llevas y préstamos que pagaste."]],
          slides: [
            { title: "Una página, títulos claros", bullets: ["Quién eres y cómo es tu finca", "Propósito, necesidad total, dinero propio, la brecha", "Cómo produce: costo por unidad, margen, recuperación"] },
            { title: "Pago y garantías", bullets: ["Pagos mes a mes, de acuerdo con el flujo de caja", "Garantías o avales", "Riesgos y cómo los manejas"] },
            { title: "Los inversionistas son distintos", bullets: ["Dinero a cambio de una parte del negocio (participación)", "Cedes parte de la propiedad y del control", "Busca asesoría legal primero"] },
            { title: "Antes de enviarla", bullets: ["Revisa los números dos veces; adjunta registros", "Pide a un asesor que la lea", "Nada de PIN ni contraseñas en la solicitud"] }
          ],
          tryIt: "Tarea final: escribe tu solicitud de financiamiento de una página con el propósito, la necesidad total, el aporte propio y la brecha, cómo va a producir, el tipo de financiamiento y por qué, un plan de pagos mensual, las garantías, los riesgos y tu historial. Pide a una persona de confianza que la lea.",
          youCanNow: "escribir una solicitud de financiamiento clara, de una página y con tus propios números, que un prestamista, un programa o un inversionista pueda evaluar.",
          quickCheck: [
            { objective: "O6", q: "¿Qué monto debe pedir tu solicitud?", options: ["La brecha de financiamiento después de tu aporte propio", "El costo total, sin contar tu dinero propio", "Todo lo que el prestamista quiera dar", "El doble del costo total por si acaso"], answer: 0, why: "Pedir la brecha muestra tu compromiso y mantiene el préstamo lo más pequeño posible." },
            { objective: "O6", q: "¿Qué recibe un inversionista de capital a cambio de su dinero?", options: ["Solo un interés mensual fijo", "Nada", "Una parte del negocio y de sus ganancias futuras", "Tu título de tierra"], answer: 2, why: "Participación significa ser dueño de una parte del negocio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Otras puertas al dinero y cómo pedirlo",
        questions: [
          { objective: "O4", q: "Con un préstamo con recibo de almacén, ¿qué pasa si los precios bajan en lugar de subir?", options: ["El banco cancela el préstamo", "La venta puede no cubrir el préstamo y los cargos", "La bodega paga la diferencia", "No cambia nada"], answer: 1, why: "Sigues debiendo el préstamo y los cargos, sea cual sea el precio." },
          { objective: "O4", q: "¿Cuál es una regla típica de un esquema de agricultura por contrato o de crédito en insumos?", options: ["Nunca pagas", "Tienes que venderle a cualquiera menos a ellos", "Los insumos siempre son gratis", "El costo de los insumos se descuenta de lo que te pagan por la cosecha"], answer: 3, why: "Muchos esquemas recuperan el costo de los insumos cuando compran tu cosecha." },
          { objective: "O5", q: "Antes de postularte a un programa para jóvenes agroemprendedores, primero debes:", options: ["Revisar en el sitio web oficial que la convocatoria esté abierta ahora", "Pagar el cargo de inscripción", "Enviar tu PIN a los organizadores", "Compartirlo en las redes sociales"], answer: 0, why: "Los programas abren y cierran; el sitio oficial muestra lo que es real y vigente." },
          { objective: "O5", q: "Una aplicación de préstamos pide acceso a todos los contactos de tu teléfono. Esto es:", options: ["Una norma bancaria normal", "Algo que exige la ley", "Una señal de alerta; revisa primero que la aplicación tenga licencia", "Una señal de un buen prestamista"], answer: 2, why: "Las aplicaciones sin licencia usan las listas de contactos para avergonzar a quienes deben; revisa la lista del regulador." },
          { objective: "O6", q: "¿Qué va en una solicitud de financiamiento de una página?", options: ["Tu PIN de dinero móvil", "Un plan de pagos mensual de acuerdo con tu flujo de caja", "Solo diez páginas de fotos", "Las deudas de tus vecinos"], answer: 1, why: "Los prestamistas necesitan ver cómo y cuándo vas a pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Financiar tu finca: préstamos, subvenciones e inversionistas",
    questions: [
      { objective: "O1", q: "Necesidad total 2,000,000; dinero propio 600,000. La brecha de financiamiento es:", options: ["2,600,000", "600,000", "1,400,000", "2,000,000"], answer: 2, why: "2,000,000 - 600,000 = 1,400,000." },
      { objective: "O1", q: "El capital de trabajo es dinero que:", options: ["Paga un ciclo de producción y regresa cuando vendes", "Compra tierra", "Paga la escuela", "Nunca se devuelve"], answer: 0, why: "Financia los insumos y la mano de obra de un ciclo." },
      { objective: "O1", q: "¿Por qué poner cada costo en el mes en que se necesita?", options: ["A los prestamistas les gustan las listas largas", "Para pedir más de lo que necesitas", "No hace ninguna diferencia", "Para recibir el dinero cuando lo necesitas y no pagar intereses por dinero parado"], answer: 3, why: "Un buen momento mantiene el préstamo y los intereses lo más bajos posible." },
      { objective: "O2", q: "¿Cada cuánto se reúne una VSLA típica?", options: ["Una vez al año", "Cada semana", "Solo en el reparto", "Nunca"], answer: 1, why: "En las reuniones semanales los miembros compran acciones y pagan préstamos." },
      { objective: "O2", q: "¿Para qué es el fondo social de una VSLA?", options: ["Para pagar al presidente", "Para comprar tierra", "Para emergencias de los miembros", "Solo para fiestas"], answer: 2, why: "El fondo social ayuda a los miembros en emergencias." },
      { objective: "O2", q: "Antes de unirte a un grupo de ahorro, ¿qué debes revisar?", options: ["Sus reglas escritas, los cargos de los préstamos y cómo se guarda el dinero con seguridad", "Solo quién es el presidente", "Solo el lugar de reunión", "Nada"], answer: 0, why: "Las reglas claras y el dinero seguro protegen tus ahorros." },
      { objective: "O3", q: "Una tasa sobre saldo decreciente cobra interés sobre:", options: ["El monto completo durante todo el préstamo", "Nada", "Solo las comisiones", "Solo lo que todavía debes"], answer: 3, why: "A medida que pagas, el interés baja." },
      { objective: "O3", q: "¿Qué hace un esquema de garantía de crédito como NIRSAL?", options: ["Cancela los préstamos de los agricultores", "Cubre parte de la pérdida del prestamista si quien pidió el préstamo no paga", "Paga los intereses de los agricultores", "Da subvenciones gratis"], answer: 1, why: "Protege a los prestamistas para que presten más; tú sigues debiendo el préstamo completo." },
      { objective: "O3", q: "¿Qué es una garantía?", options: ["Tu cultivo favorito", "Un título de tierra o un equipo que el prestamista se puede llevar si no pagas", "Tu número de teléfono", "Un precio de mercado"], answer: 1, why: "La garantía es la seguridad del prestamista." },
      { objective: "O3", q: "Oferta A: pagar 120,000 en cuotas mensuales desde el mes próximo. Oferta B: pagar 112,000 una sola vez después de la cosecha. Para un agricultor, B:", options: ["Cuesta más y encaja peor", "Siempre es ilegal", "Cuesta menos y se paga cuando entra el dinero de la cosecha", "Es igual que A"], answer: 2, why: "El total de B es menor y vence cuando el agricultor tiene dinero." },
      { objective: "O4", q: "¿Dónde entregas el producto para recibir un recibo de almacén?", options: ["En cualquier tienda", "En tu casa", "A un comerciante que acabas de conocer", "En una bodega certificada"], answer: 3, why: "Solo las bodegas certificadas emiten recibos que aceptan los prestamistas." },
      { objective: "O4", q: "En Kenia, ¿qué organismo certifica las bodegas para los recibos de almacén?", options: ["El Warehouse Receipt System Council", "KAMIS", "NAFDAC", "El Departamento Meteorológico de Kenia"], answer: 0, why: "El WRS Council certifica y regula las bodegas." },
      { objective: "O4", q: "¿Qué es la venta paralela?", options: ["Vender a la orilla del camino", "Vender a otra persona un producto prometido a un comprador", "Venderle a una cooperativa", "Vender por etapas"], answer: 1, why: "Rompe un acuerdo de crédito en insumos o un contrato y puede traer multas." },
      { objective: "O5", q: "Un programa de subvenciones real:", options: ["Pide un cargo antes de pagarte", "Pide tu PIN", "No te cobra por postularte", "Garantiza la aprobación a todos"], answer: 2, why: "Los cargos, los pedidos de PIN y las garantías son señales de estafa." },
      { objective: "O5", q: "El Youth Enterprise Development Fund de Kenia ofrece sobre todo:", options: ["Tierra gratis", "Préstamos a empresas de jóvenes", "Seguro agrícola", "Pronósticos del tiempo"], answer: 1, why: "Da préstamos, incluido un préstamo Agri-Biz, y apoyo a negocios." },
      { objective: "O5", q: "¿Dónde debes revisar una aplicación de préstamos digital de Kenia?", options: ["En su página de redes sociales", "En su número de estrellas", "En el chat de grupo de un amigo", "En el directorio de proveedores de crédito digital con licencia del Banco Central de Kenia"], answer: 3, why: "El CBK da licencia a los proveedores de crédito digital y publica la lista." },
      { objective: "O6", q: "¿Qué título muestra a un prestamista cómo va a producir el dinero?", options: ["Costo por unidad, margen bruto o periodo de recuperación", "Tu color favorito", "Los nombres de tus vecinos", "Tu PIN"], answer: 0, why: "Estas cifras muestran que el dinero va a generar ingresos para pagar." },
      { objective: "O6", q: "Tu historial en una solicitud de financiamiento significa:", options: ["Qué tan rápido corres", "La prueba de lo que has hecho, como registros que llevas y préstamos que pagaste", "Los contactos de tu teléfono", "Una lista de deseos"], answer: 1, why: "Los resultados pasados ayudan a los prestamistas a confiar en tu plan." },
      { objective: "O6", q: "Antes de enviar una solicitud de financiamiento, debes:", options: ["Agregar tu PIN para que sea más rápido", "Agrandar los números", "Revisar los números dos veces y pedir a un asesor que la lea", "Enviarla a cada número que encuentres en internet"], answer: 2, why: "Los números revisados y un segundo lector hacen la solicitud más fuerte y más segura." },
      { objective: "O6", q: "¿Qué cedes cuando aceptas capital de un inversionista?", options: ["Nada", "Tu lugar en el grupo de ahorro", "Toda tu tierra automáticamente", "Parte de la propiedad y algo del control del negocio"], answer: 3, why: "Participación significa que el inversionista es dueño de una parte del negocio." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 3, 5, 6, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte de la solicitud y vuelve a revisarla.",
    criteria: [
      { name: "Necesidad y brecha de financiamiento", objective: "O1", notYet: "El monto es una suposición, o hay gastos del hogar mezclados.", meets: "La necesidad total, el aporte propio y la brecha son correctos, separados en capital de trabajo y equipo, con meses.", exceeds: "Incluye un pequeño colchón y muestra de dónde salió cada cifra de costo." },
      { name: "El tipo de financiamiento correcto", objective: "O2", notYet: "No se da ninguna razón para el tipo de financiamiento elegido.", meets: "Nombra el tipo de financiamiento (grupo, SACCO, préstamo, recibo de almacén, crédito en insumos, subvención o participación) y por qué encaja.", exceeds: "Compara al menos dos opciones, incluido el ahorro en grupo, y explica la elección." },
      { name: "Plan de pagos", objective: "O3", notYet: "No hay plan de pagos, o los pagos caen antes de cualquier ingreso.", meets: "Pagos mensuales con el costo total, de acuerdo con el plan de flujo de caja y la cosecha.", exceeds: "Muestra qué pasa en una mala temporada y cómo se seguirían haciendo los pagos." },
      { name: "Garantías y términos", objective: "O4", notYet: "Faltan las garantías, los avales o los términos principales.", meets: "Se nombran las garantías o los avales, con los términos principales y dos riesgos.", exceeds: "Explica cómo un recibo de almacén, un contrato o un seguro baja el riesgo del prestamista." },
      { name: "Revisado y seguro", objective: "O5", notYet: "El prestamista o el programa no se revisó, o se incluyen datos privados como un PIN.", meets: "El prestamista o el programa se revisó en un sitio oficial o en la lista del regulador, y no se incluyen códigos privados.", exceeds: "Anota la fecha de la revisión y que la convocatoria o la oferta está abierta ahora." },
      { name: "Solicitud clara de una página", objective: "O6", notYet: "Más de una página, o falta el propósito, el monto o cómo va a producir.", meets: "Una página que cubre el propósito, el monto, el aporte propio, cómo produce, el pago, las garantías, los riesgos y el historial.", exceeds: "La leyó un asesor, con los registros adjuntos y sus comentarios atendidos." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en todas las filas de la rúbrica de la solicitud de financiamiento",
      "Participantes que dicen haberse unido a un grupo de ahorro o a una SACCO, o haber pedido financiamiento con una solicitud escrita, en 30 días (encuesta de seguimiento)",
      "Participantes que dicen haber elegido un préstamo con pagos después de la cosecha, o haber pedido menos de lo que pensaban al principio",
      "Participantes que dicen haber revisado a un prestamista, una aplicación de préstamos o una oferta de subvención en una lista oficial, o haber rechazado una estafa de subvención con cobro",
      "Cooperativas o prestamistas aliados informan solicitudes más completas y menos pagos atrasados de quienes terminaron el curso"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno y un lápiz, y un teléfono básico con calculadora",
      "El plan de la finca, los registros y el plan de flujo de caja del participante, o las cifras de ejemplo del curso",
      "Ofertas de préstamo, reglas de grupos de ahorro y un folleto de crédito en insumos o de recibo de almacén de la zona, reales o de ejemplo, si los hay",
      "Unos 80 minutos en total, en sesiones cortas, más tiempo para escribir la solicitud de financiamiento"
    ],
    facilitatorNotes: [
      "En un grupo de agricultores o una sesión de extensión: hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" en parejas.",
      "Invite a una SACCO, una VSLA o un prestamista con licencia a explicar sus reglas, pero no respalde a ningún prestamista; deje que los participantes hagan las preguntas de la lección.",
      "Antes de mencionar cualquier subvención o programa para jóvenes, revise en su sitio oficial que esté abierto; nunca pase enlaces de redes sociales.",
      "Nunca pida a los participantes que compartan PIN, contraseñas, números de identificación o datos bancarios en la práctica; use datos de ejemplo.",
      "Califique la solicitud de financiamiento con la rúbrica y dé comentarios sobre una fila Todavía no a la vez; anime a los participantes a mostrarla a su cooperativa o a su prestamista."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-export-gap-certification.js). See scripts/koachlearn-courses/README.md, "Translations".

const GGAP_IFA = { name: "GLOBALG.A.P.: Aseguramiento Integrado de Fincas (IFA) para frutas y hortalizas (temas, opción para grupos de productores, elementos de costo, pasos hacia la certificación)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P.: Supply Chain Portal (verificar un certificado con el número GLOBALG.A.P.)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "Comisión Europea: base de datos de plaguicidas de la UE (límites máximos de residuos por alimento y plaguicida)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/OMS): normas alimentarias internacionales, incluidos los límites de residuos de plaguicidas", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (datos de la KNBS, informe de la AFA): bajan los ingresos de Kenia por exportación de hortalizas por las reglas de plaguicidas de la UE; las intercepciones por LMR subieron de 25 (2023) a 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "Kit de herramientas de registro de plaguicidas de la FAO: registros nacionales de plaguicidas en África", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Autoridad de Agricultura y Alimentos de Kenia (AFA), Dirección de Cultivos Hortícolas: licencias de exportación y registro (consulta las reglas vigentes)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Kenia): servicios fitosanitarios y certificación de exportaciones", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Consejo de Promoción de Exportaciones de Nigeria (NEPC): registro electrónico de exportadores", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Autoridad de Promoción de Exportaciones de Ghana (GEPA): registrarse como exportador", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification-es",
  lang: "es",
  translationOf: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Vender a supermercados, procesadoras y compradores de exportación: normas y certificación",
  skills: "Leer los requisitos de un comprador, Aplicar Buenas Prácticas Agrícolas, Llevar registros de trazabilidad, Evaluar la certificación, Cumplir los límites de residuos y las reglas de exportación, Hacer una oferta de suministro",
  outcome: "revisar si tu finca o tu grupo está listo para abastecer a un supermercado, una procesadora o un comprador de exportación, cerrar las principales brechas en prácticas, registros y certificación, y hacer una oferta de suministro por escrito que puedas cumplir.",
  about: [
    "Los supermercados, las procesadoras y los compradores de exportación pueden comprar mucho más que un mercado local, y a menudo pagan más por una calidad constante. Pero piden cosas que la mayoría de las fincas pequeñas todavía no hacen: volumen constante, la misma calidad cada vez, registros que rastreen cada caja, inocuidad de los alimentos y, a veces, un certificado como GLOBALG.A.P. Este curso es para agricultores comerciales en crecimiento, grupos de productores, jóvenes agroemprendedores y extensionistas de Kenia, Nigeria, Ghana, Senegal y toda África.",
    "Vas a aprender qué quieren los grandes compradores, las Buenas Prácticas Agrícolas que hay detrás, cómo llevar registros que rastreen el producto hasta la parcela, cuánto cuesta y qué aporta una certificación, por qué se rechazan envíos de exportación por residuos de plaguicidas, qué organismos nacionales controlan las exportaciones, y cómo reunirte con un comprador, negociar un contrato de suministro y evaluar un esquema de agricultura por contrato.",
    "Se basa en el curso Cooperativas agrícolas y acceso al mercado, que trata la venta en grupo y la lectura de un contrato. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Las reglas, las tarifas y los límites cambian, así que cada lección te dice dónde consultarlos. Las cifras de dinero son solo ejemplos."
  ],
  finalTask: "Haz una lista de preparación para compradores de tu finca o grupo, para un cultivo y un tipo de comprador (supermercado, procesadora o exportador), marcando lo que ya cumples y lo que debes corregir; luego escribe una oferta de suministro de una página para ese comprador: cultivo y calidad, volumen y calendario, cómo mantienes el producto seguro y rastreable, cualquier certificación, la base del precio y las condiciones que quieres en el contrato.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Agricultores comerciales en crecimiento, grupos de productores y cooperativas, administradores de fincas, jóvenes agroemprendedores y extensionistas de Kenia, Nigeria, Ghana, África occidental francófona y toda África, que venden hortalizas y frutas (ejotes, aguacate, mango, piña, tomate) o cultivos básicos (yuca, maíz, sorgo, arroz) a compradores más grandes.",
    startingPoint: "Saben producir una buena cosecha y venderla en mercados locales o a través de un grupo. Algunos llevan registros básicos de la finca. Pocos saben qué audita un supermercado o un exportador, cómo funciona la certificación o qué es un límite de residuos.",
    gap: "Los grandes compradores rechazan a los agricultores que no pueden demostrar un volumen y una calidad constantes, registros rastreables y un uso seguro de plaguicidas. El propio regulador de Kenia relacionó una fuerte caída de los ingresos por exportación de hortalizas sobre todo con las intercepciones de la UE por residuos de plaguicidas. Los agricultores necesitan ver sus brechas, corregir prácticas y registros, evaluar la certificación y hacer una oferta que puedan cumplir.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes hablan el idioma del curso como segunda lengua",
      "Dispositivos: un teléfono básico o inteligente; cuadernos de registro en papel",
      "Dinero: la certificación y los análisis cuestan dinero; las opciones en grupo importan para las fincas pequeñas",
      "Reglas: las licencias de exportación, los límites de residuos y las reglas de certificación cambian y varían según el país y el mercado; los participantes consultan fuentes oficiales",
      "Seguridad: solo plaguicidas registrados, usados como dice la etiqueta y con equipo de protección; el curso no da cifras de dosis"
    ],
    prerequisites: "Útil: Cooperativas agrícolas y acceso al mercado, y Registros de la finca y bases del negocio (Agronegocios y administración de fincas). Saber leer y sumar."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con los requisitos de un supermercado, una procesadora o un comprador de exportación", action: "hacer una lista de lo que pide el comprador y compararla con lo que tu finca o grupo entrega hoy", standard: "cubriendo volumen, constancia, calidad, trazabilidad e inocuidad, con cada brecha marcada" },
    { id: "O2", condition: "Para un cultivo de tu finca", action: "escribir las Buenas Prácticas Agrícolas que vas a seguir", standard: "cubriendo plaguicidas registrados usados como dice la etiqueta, equipo de protección, el intervalo antes de la cosecha que indica la etiqueta, agua limpia, higiene en la cosecha y seguridad de los trabajadores" },
    { id: "O3", condition: "Con una certificación como GLOBALG.A.P.", action: "comparar sus costos y beneficios para tu finca o grupo y nombrar la vía que tomarías", standard: "nombrando los tres elementos de costo, los pasos hasta una auditoría y si encaja una opción de grupo" },
    { id: "O4", condition: "Para una temporada de un cultivo", action: "organizar registros de trazabilidad que unan cada lote con su parcela, sus insumos y su fecha de cosecha", standard: "de modo que cualquier caja pueda rastrearse hasta la parcela y cada aplicación en pocos minutos" },
    { id: "O5", condition: "Con un mercado de exportación como meta", action: "consultar los límites de residuos y los organismos nacionales de exportación que aplican", standard: "nombrando dónde encontrar los límites (por ejemplo la base de datos de plaguicidas de la UE o el Codex) y los organismos de exportación y de sanidad vegetal de tu país" },
    { id: "O6", condition: "Ante una reunión con un comprador o una oferta de agricultura por contrato", action: "escribir una oferta de suministro y las condiciones de contrato que necesitas", standard: "indicando calidad, volumen, calendario, base del precio, reglas de rechazo, condiciones de pago y qué pasa si alguna de las partes no cumple" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Qué quieren los grandes compradores y cómo preparar tu finca",
      lessons: [
        {
          title: "Qué quieren los supermercados, las procesadoras y los exportadores",
          objectives: ["O1"],
          minutes: 5,
          goal: "Hacer una lista de los requisitos de un gran comprador y marcar dónde tu finca se queda corta.",
          text: [
            "Los grandes compradores venden a clientes que esperan el mismo producto, seguro y en el estante, cada semana. Por eso te piden cinco cosas: volumen (suficiente para llenar sus pedidos), constancia (entregar semana tras semana, no solo en la cosecha), calidad (tamaño, color, madurez y defectos según su especificación), trazabilidad (poder saber de qué finca y parcela vino una caja) e inocuidad (sin residuos dañinos, gérmenes ni suciedad).",
            "Cada comprador es distinto. Un supermercado en Nairobi o Acra puede querer tomates de un tamaño y en una caja fijos, entregados dos veces por semana. Una procesadora en Nigeria que compra yuca para almidón o tomate para pasta quiere grandes volúmenes con una calidad fija, y quizá le importe menos el aspecto. Un exportador que envía ejotes desde Kenia o mangos desde Senegal a Europa debe cumplir las reglas del país importador y a menudo pide un certificado.",
            "Pide al comprador su especificación por escrito. Luego compárala, punto por punto, con lo que entregas hoy. Las brechas que encuentres son tu plan de trabajo. Muchas fincas pequeñas cierran las brechas de volumen y de constancia trabajando en grupo y escalonando las fechas de siembra."
          ],
          steps: ["Pide a un comprador su especificación escrita y el tamaño de sus pedidos.", "Haz una lista de lo que necesita en volumen, constancia, calidad, trazabilidad e inocuidad.", "Junto a cada punto, escribe lo que tu finca o grupo entrega hoy.", "Marca cada brecha y cómo podrías cerrarla (por ejemplo en grupo o con siembras escalonadas)."],
          words: [["Especificación", "la descripción escrita del comprador del producto que quiere: tamaño, color, madurez, empaque y defectos permitidos."], ["Trazabilidad", "poder seguir el producto hasta la finca, la parcela y los insumos de donde vino."], ["Constancia", "entregar la misma calidad y cantidad, a tiempo, una y otra vez."]],
          slides: [
            { title: "Cinco cosas que quieren los grandes compradores", bullets: ["Volumen y constancia", "Calidad según su especificación", "Trazabilidad e inocuidad"] },
            { title: "Cada comprador es distinto", bullets: ["Supermercado: tamaño y caja fijos, dos veces por semana", "Procesadora: gran volumen, calidad fija", "Exportador: reglas del país importador, a menudo un certificado"] },
            { title: "Encuentra tus brechas", bullets: ["Pide la especificación por escrito", "Compárala punto por punto con lo que entregas", "Brechas = tu plan de trabajo; un grupo cierra brechas de volumen"] }
          ],
          tryIt: "Elige un gran comprador cercano (un supermercado, una procesadora o un exportador). Escribe lo que necesita bajo los cinco títulos, lo que entregas hoy junto a cada uno, y marca las brechas. Este es el comienzo de tu lista de preparación para compradores.",
          youCanNow: "hacer una lista de lo que quiere un gran comprador y marcar dónde tu finca o grupo se queda corto.",
          quickCheck: [
            { objective: "O1", q: "Un supermercado quiere tomates cada semana todo el año. Tú cosechas una vez por temporada. ¿Qué necesidad no cumples?", options: ["Calidad", "Constancia en el suministro", "Trazabilidad", "Inocuidad"], answer: 1, why: "Entregar cada semana, y no solo en la cosecha, es constancia." },
            { objective: "O1", q: "¿Cuál es la mejor forma de saber exactamente qué quiere un comprador?", options: ["Adivinarlo por lo que hay en su tienda", "Preguntar a un vecino que le vendió una vez", "Enviar producto y ver si lo acepta", "Pedir su especificación por escrito"], answer: 3, why: "Una especificación escrita muestra el tamaño, la calidad y el empaque exactos que el comprador aceptará." }
          ]
        },
        {
          title: "Buenas Prácticas Agrícolas en tu finca",
          objectives: ["O2"],
          minutes: 6,
          goal: "Escribir las Buenas Prácticas Agrícolas que seguirás para un cultivo.",
          text: [
            "Las Buenas Prácticas Agrícolas (GAP, por sus siglas en inglés; también llamadas BPA) son los hábitos de la finca que mantienen el producto seguro, protegen a los trabajadores y al ambiente, y hacen que la calidad sea constante. Los esquemas de certificación y los compradores las auditan. Puedes empezar la mayoría con poco dinero.",
            "Plaguicidas: usa solo productos registrados por tu organismo nacional (por ejemplo la Pest Control Products Board de Kenia, la NAFDAC de Nigeria o la EPA de Ghana), consulta su lista vigente y úsalos exactamente como dice la etiqueta. Usa el equipo de protección que pide la etiqueta, guarda los químicos bajo llave y lejos de los alimentos, y respeta el intervalo antes de la cosecha que indica la etiqueta, es decir, el tiempo de espera entre la última aplicación y la cosecha. Aplicar demasiado cerca de la cosecha es una de las causas principales de rechazo por residuos. Usa el manejo integrado de plagas para aplicar menos.",
            "Además: agua limpia para aplicar, lavar y regar; cajas de cosecha limpias y separadas del suelo; baños y lavado de manos para los trabajadores; nada de animales ni estiércol cerca del producto justo antes de la cosecha; primeros auxilios y capacitación para los trabajadores; y eliminación segura de los envases vacíos como diga la etiqueta o tu organismo nacional. Escribe todo esto como las reglas GAP de tu finca."
          ],
          steps: ["Comprueba que cada plaguicida que usas está en el registro de tu organismo nacional.", "Escribe junto a cada producto el equipo de protección y el intervalo antes de la cosecha que indica la etiqueta.", "Organiza el lavado de manos, los baños y las cajas limpias para la cosecha.", "Escribe tus reglas GAP y capacita a cada trabajador en ellas."],
          words: [["Buenas Prácticas Agrícolas (GAP)", "hábitos de la finca que mantienen el producto seguro y protegen a los trabajadores y al ambiente."], ["Intervalo antes de la cosecha", "el tiempo de espera que indica la etiqueta entre la última aplicación y la cosecha."], ["Plaguicida registrado", "un producto que tu organismo nacional aprobó para ese cultivo y ese uso."], ["Manejo integrado de plagas", "controlar las plagas con varios métodos para aplicar solo cuando hace falta."]],
          slides: [
            { title: "Qué cubren las GAP", bullets: ["Producto seguro", "Seguridad y bienestar de los trabajadores", "Ambiente y calidad constante"] },
            { title: "Plaguicidas de la forma correcta", bullets: ["Solo productos registrados: consulta las listas de PCPB, NAFDAC y EPA de Ghana", "Exactamente como dice la etiqueta, con equipo de protección", "Respeta el intervalo antes de la cosecha de la etiqueta"] },
            { title: "Cosecha limpia", bullets: ["Agua limpia; cajas separadas del suelo", "Baños y lavado de manos para los trabajadores", "Nada de animales ni estiércol cerca del producto en la cosecha"] },
            { title: "Escríbelo y capacita", bullets: ["Las reglas GAP de tu finca en una página", "Capacita a cada trabajador", "Químicos bajo llave, lejos de los alimentos"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Escribe en una página las reglas GAP de tu finca para un cultivo: los plaguicidas registrados que usas con el equipo de protección y el intervalo antes de la cosecha de la etiqueta, tu higiene del agua y de la cosecha, y la seguridad de los trabajadores. Agrega las brechas a tu lista de preparación para compradores.",
          youCanNow: "escribir reglas de Buenas Prácticas Agrícolas para un cultivo, incluido el uso seguro de plaguicidas registrados.",
          quickCheck: [
            { objective: "O2", q: "¿Dónde encuentras cuánto esperar entre la última aplicación y la cosecha?", options: ["En la etiqueta del producto (el intervalo antes de la cosecha)", "Con el chofer del comprador", "En la memoria de un vecino", "No importa para la exportación"], answer: 0, why: "La etiqueta da el intervalo antes de la cosecha; respetarlo mantiene los residuos dentro de los límites." },
            { objective: "O2", q: "Un comerciante te ofrece un plaguicida barato sin número de registro. ¿Qué haces?", options: ["Lo compras si es barato", "Lo mezclas con uno registrado", "No lo usas; solo usas productos de tu registro nacional", "Usas la mitad de la cantidad"], answer: 2, why: "Los productos sin registro pueden ser falsos o estar prohibidos, y pueden causar rechazos y daños." }
          ]
        },
        {
          title: "Registros que rastrean cada caja",
          objectives: ["O4"],
          minutes: 5,
          goal: "Organizar registros que rastreen una caja hasta su parcela, sus insumos y su fecha de cosecha.",
          text: [
            "Si un comprador encuentra un residuo o un problema, preguntará: ¿qué finca, qué parcela, qué se aplicó y cuándo? Los registros de trazabilidad responden en minutos. Sin ellos, un comprador puede dejar a todo el grupo.",
            "Dale un código a cada parcela, por ejemplo KB-F2 para la finca de Kiambu, parcela 2. Lleva un registro de aplicaciones e insumos por parcela: fecha, nombre del producto y número de registro, cantidad, quién aplicó y el intervalo antes de la cosecha de la etiqueta. Lleva un registro de cosecha: fecha, código de parcela, cajas o kilos y un número de lote. Escribe el número de lote en cada caja o nota de entrega.",
            "Guarda los registros en un cuaderno o en una hoja de cálculo sencilla en el teléfono, y guarda los recibos de los insumos. Los grupos de productores llevan un registro de socios y los registros de cada socio. Kenia está poniendo en marcha el mapeo y el registro digital de las fincas de exportación, así que consulta con la AFA lo que necesita tu cultivo."
          ],
          steps: ["Dale a cada parcela un código corto.", "Lleva un registro de aplicaciones e insumos por parcela: fecha, producto, número de registro, cantidad, quién aplicó, intervalo antes de la cosecha.", "Lleva un registro de cosecha con un número de lote para cada cosecha.", "Escribe el número de lote en cada caja o nota de entrega.", "Practica: elige una caja y rastréala en minutos."],
          words: [["Número de lote", "un código para una cosecha de una parcela en un día, escrito en las cajas."], ["Registro de aplicaciones", "una lista escrita de cada plaguicida usado: cuándo, cuál, cuánto y quién lo aplicó."], ["Auditoría", "una revisión de un comprador o certificador para ver que haces lo que dices."]],
          slides: [
            { title: "¿Por qué rastrear?", bullets: ["El comprador halla un problema: ¿qué parcela, qué aplicación, cuándo?", "Buenos registros responden en minutos", "Sin registros: pueden dejar a todo el grupo"] },
            { title: "Tres registros", bullets: ["Códigos de parcela (por ejemplo KB-F2)", "Registro de aplicaciones e insumos por parcela", "Registro de cosecha con número de lote"] },
            { title: "Que funcione", bullets: ["Número de lote en cada caja", "Cuaderno u hoja de cálculo en el teléfono; guarda recibos", "Practica rastrear una caja"] }
          ],
          sources: [KE_AFA],
          tryIt: "Prepara los tres registros para un cultivo: códigos de parcela, un registro de aplicaciones e insumos, y un registro de cosecha con números de lote. Llena una línea real o de práctica en cada uno, y luego rastrea esa caja hasta la parcela y la última aplicación.",
          youCanNow: "llevar registros de parcela, de aplicaciones y de cosecha que rastreen cualquier caja hasta su parcela y sus insumos.",
          quickCheck: [
            { objective: "O4", q: "¿Qué une una caja en el estante del comprador con tu parcela?", options: ["El color de la caja", "El nombre del chofer", "El precio del mercado", "Un número de lote escrito en la caja y en tu registro de cosecha"], answer: 3, why: "Un número de lote en la caja y en tus registros la rastrea hasta la parcela y la fecha." },
            { objective: "O4", q: "¿Qué dato va en un registro de aplicaciones?", options: ["El teléfono del comprador", "Fecha, producto, número de registro, cantidad y quién aplicó", "El pronóstico del tiempo del mes que viene", "El precio del cultivo"], answer: 1, why: "Estos datos muestran qué se aplicó y cuándo, y eso es lo que revisan compradores y certificadores." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué quieren los grandes compradores y cómo preparar tu finca",
        questions: [
          { objective: "O1", q: "¿Cuál NO es una de las cinco cosas que suelen querer los grandes compradores?", options: ["Volumen", "Trazabilidad", "Un regalo para el comprador", "Inocuidad"], answer: 2, why: "Los compradores quieren volumen, constancia, calidad, trazabilidad e inocuidad; los regalos no son un requisito." },
          { objective: "O1", q: "Tu grupo solo puede llenar la mitad del pedido semanal de un comprador. ¿Qué podría cerrar la brecha?", options: ["Más socios y fechas de siembra escalonadas", "Enviar producto de menor calidad", "Prometer más de lo que tienes", "Ignorar el tamaño del pedido"], answer: 0, why: "Más productores y siembras escalonadas suben el volumen y mantienen el suministro constante." },
          { objective: "O2", q: "¿Qué práctica forma parte de las GAP?", options: ["Guardar los plaguicidas junto a los alimentos", "Aplicar el día antes de la cosecha diga lo que diga la etiqueta", "Dejar que las cabras pasten cerca del producto en la cosecha", "Usar el equipo de protección que pide la etiqueta"], answer: 3, why: "Seguir la etiqueta, incluido el equipo de protección, protege a los trabajadores y al producto." },
          { objective: "O4", q: "¿Qué es un número de lote?", options: ["El precio por caja", "Un código para una cosecha de una parcela en un día", "El número de trabajadores", "El tamaño de la finca"], answer: 1, why: "Un número de lote identifica una cosecha para poder rastrearla." },
          { objective: "O4", q: "Un comprador reporta un residuo en una entrega. Los buenos registros te permiten:", options: ["Culpar al comprador", "Cambiar los registros", "Rastrearlo hasta la parcela y la aplicación, y corregir la causa", "Dejar de venderle a todos"], answer: 2, why: "La trazabilidad muestra dónde empezó el problema para que lo corrijas y conserves al comprador." }
        ]
      }
    },
    {
      name: "Capítulo 2: Certificación, reglas de exportación y contratos de suministro",
      lessons: [
        {
          title: "GLOBALG.A.P. y la certificación: costo y beneficio",
          objectives: ["O3"],
          minutes: 6,
          goal: "Comparar los costos y beneficios de la certificación para tu finca y elegir una vía.",
          text: [
            "Certificarse significa que un organismo independiente revisa tu finca según una norma y te da un certificado si pasas. GLOBALG.A.P. es la norma agrícola más conocida, que piden muchos supermercados y exportadores europeos. Su norma de Aseguramiento Integrado de Fincas (IFA) para frutas y hortalizas cubre la inocuidad y la trazabilidad, la salud, la seguridad y el bienestar de los trabajadores, y el ambiente (agua, fertilizantes, manejo de plagas y productos fitosanitarios). Algunos compradores piden otras normas, como la orgánica o los esquemas de comercio justo.",
            "GLOBALG.A.P. dice que hay tres elementos de costo: tus propios costos para prepararte (capacitación, baños, bodega de químicos, registros); las tarifas del organismo de certificación por la auditoría y el viaje; y las tarifas de registro y licencia de GLOBALG.A.P., que dependen de tu superficie y de la opción. Las auditorías son anuales y un certificado dura un año. Hay una opción para grupos de productores, incluidos los pequeños agricultores, en la que un solo certificado de grupo cubre a los socios que siguen un sistema de calidad común con inspecciones internas.",
            "Los pasos: descarga las reglas y la lista de verificación gratis, pon en marcha los requisitos, haz una autoevaluación, pide una auditoría a un organismo de certificación aprobado que trabaje en tu país, corrige los problemas en el plazo que te den y recibe el certificado. Los compradores pueden verificar los certificados en el Supply Chain Portal de GLOBALG.A.P. Antes de pagar, pregunta a tu comprador: ¿necesitas este certificado, y me comprarás más o me pagarás más si lo tengo? Pide cotizaciones a más de un organismo de certificación."
          ],
          steps: ["Pregunta a tu comprador qué certificado exige, si exige alguno.", "Descarga gratis las reglas y la lista de verificación de la norma y haz una autoevaluación.", "Anota los tres elementos de costo y pide cotizaciones a organismos de certificación aprobados.", "Compara los costos con el beneficio: nuevos compradores, más volumen o un mejor precio.", "Decide: certificarte solo, certificarte en grupo o todavía no."],
          words: [["Certificación", "una revisión independiente de que una finca cumple una norma, demostrada con un certificado."], ["Organismo de certificación", "la empresa aprobada que audita tu finca y emite el certificado."], ["Certificación de grupo", "un solo certificado para un grupo de productores cuyos socios siguen un sistema de calidad común."], ["Autoevaluación", "revisar tu propia finca con la lista de verificación de la norma antes de la auditoría real."]],
          slides: [
            { title: "Qué cubre GLOBALG.A.P. IFA", bullets: ["Inocuidad y trazabilidad", "Salud, seguridad y bienestar de los trabajadores", "Ambiente: agua, fertilizantes, manejo de plagas"] },
            { title: "Tres elementos de costo", bullets: ["Tus costos para prepararte", "Tarifas de auditoría y viaje del organismo de certificación", "Tarifas de registro y licencia de GLOBALG.A.P."] },
            { title: "Pasos hacia un certificado", bullets: ["Reglas y lista de verificación gratis; autoevaluación", "Auditoría de un organismo de certificación aprobado", "Corrige problemas; certificado por un año"] },
            { title: "¿Vale la pena?", bullets: ["Pregunta al comprador si lo necesita", "¿Comprará más o pagará más?", "Opción de grupo para pequeños agricultores; pide varias cotizaciones"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "Para tu cultivo y tu comprador, escribe una nota de costo y beneficio sobre la certificación: si el comprador la necesita, los tres elementos de costo (con cotizaciones si puedes conseguirlas), el beneficio que esperas y tu decisión: solo, en grupo o todavía no.",
          youCanNow: "comparar los costos y beneficios de una certificación como GLOBALG.A.P. y elegir una vía para tu finca o grupo.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es uno de los tres elementos de costo de GLOBALG.A.P.?", options: ["Los costos de transporte del comprador", "Tu propia matrícula escolar", "Las tarifas de auditoría y viaje del organismo de certificación", "El precio del cultivo"], answer: 2, why: "GLOBALG.A.P. menciona tus costos de preparación, las tarifas del organismo de certificación y sus propias tarifas de registro y licencia." },
            { objective: "O3", q: "Veinte pequeños agricultores quieren certificarse pero no pueden pagar cada uno una auditoría. ¿Qué puede encajar?", options: ["La certificación de grupo con un sistema de calidad común", "Que cada uno copie el certificado de un vecino", "Saltarse la auditoría", "Comprar un certificado por internet"], answer: 0, why: "La opción para grupos de productores permite que un certificado cubra a los socios que siguen un sistema común con inspecciones internas." }
          ]
        },
        {
          title: "Límites de residuos, reglas de exportación y por qué se rechazan los envíos",
          objectives: ["O5"],
          minutes: 6,
          goal: "Consultar los límites de residuos y los organismos de exportación que aplican a tu cultivo y tu mercado.",
          text: [
            "Un límite máximo de residuos (LMR; en inglés, MRL) es la cantidad más alta de un plaguicida que se permite que quede en un alimento. Cada mercado importador fija los suyos. La Unión Europea publica sus límites en la base de datos de plaguicidas de la UE; el Codex Alimentarius fija límites internacionales que usan muchos países. Un producto puede ser legal en tu país y aun así pasar el límite en Europa, o un plaguicida puede no estar aprobado allí en absoluto.",
            "No es un riesgo pequeño. La Autoridad de Agricultura y Alimentos de Kenia (AFA) relacionó una fuerte caída de los ingresos por exportación de hortalizas sobre todo con las intercepciones de la UE por residuos de plaguicidas, que subieron de 25 casos en 2023 a 57 en 2024, y la UE aumentó los controles a los frijoles y arvejas de Kenia. Causas comunes: aplicar demasiado cerca de la cosecha, usar un producto no permitido en ese mercado, mezclar mal, la deriva de la aplicación de un vecino y mezclar producto de fincas sin trazabilidad.",
            "Las exportaciones también necesitan aprobaciones nacionales. En Kenia, la Dirección de Cultivos Hortícolas de la AFA da licencias a los exportadores y registra a los agentes, y la KEPHIS (el servicio de inspección sanitaria vegetal) emite los certificados fitosanitarios. En Nigeria, los exportadores se registran en el Consejo de Promoción de Exportaciones de Nigeria (NEPC). En Ghana, los exportadores se registran en la Autoridad de Promoción de Exportaciones de Ghana (GEPA). La inspección de sanidad vegetal la hace el organismo de protección vegetal de cada país. Las reglas cambian, así que consulta a cada organismo antes de la temporada."
          ],
          steps: ["Nombra tu mercado meta (por ejemplo la UE, el Reino Unido o un mercado regional).", "Busca los límites de residuos de tu cultivo en la base de datos de ese mercado o en el Codex.", "Comprueba que cada plaguicida que usas está permitido allí, y sigue el intervalo antes de la cosecha de la etiqueta.", "Pregunta a tu comprador si hacen falta análisis de residuos antes de enviar.", "Haz una lista de los organismos de exportación y de sanidad vegetal de tu país y de lo que exigen."],
          words: [["Límite máximo de residuos (LMR)", "la cantidad más alta de un plaguicida que se permite que quede en un alimento en un mercado."], ["Intercepción", "cuando un país importador detiene un envío en la frontera porque no cumple una regla."], ["Certificado fitosanitario", "un documento oficial que dice que un producto vegetal está libre de las plagas y enfermedades de una lista."]],
          slides: [
            { title: "Qué es un LMR", bullets: ["La cantidad más alta de plaguicida permitida en un alimento", "Cada mercado fija los suyos", "Base de datos de plaguicidas de la UE; límites del Codex"] },
            { title: "Por qué se rechazan los envíos", bullets: ["Aplicación demasiado cerca de la cosecha", "Producto no permitido en ese mercado", "Mala mezcla, deriva, producto sin trazabilidad"] },
            { title: "La advertencia de Kenia", bullets: ["AFA: intercepciones de la UE por residuos de 25 (2023) a 57 (2024)", "Los ingresos por exportación de hortalizas cayeron mucho", "Más controles de la UE a frijoles y arvejas"] },
            { title: "Organismos de exportación (consulta las reglas vigentes)", bullets: ["Kenia: Dirección de Cultivos Hortícolas de la AFA; KEPHIS", "Nigeria: registro en el NEPC", "Ghana: registro en la GEPA; organismos de protección vegetal"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "Para tu cultivo y tu mercado meta, encuentra dónde se publican los límites de residuos y revisa dos plaguicidas que usas. Luego haz una lista de los organismos de exportación y de sanidad vegetal de tu país, con una pregunta para cada uno. Agrega los resultados a tu lista.",
          youCanNow: "encontrar los límites de residuos de tu mercado y nombrar los organismos de exportación y de sanidad vegetal con los que debes tratar.",
          quickCheck: [
            { objective: "O5", q: "Tu plaguicida está registrado en tu país. ¿Pueden rechazar igual tu producto en Europa?", options: ["No, el registro nacional basta", "Sí, si los residuos pasan el límite de la UE o el producto no está permitido allí", "Solo si las cajas están sucias", "Solo en el caso de las flores"], answer: 1, why: "Cada mercado fija sus propios límites, así que un producto legal en tu país puede incumplir las reglas de la UE." },
            { objective: "O5", q: "En Kenia, ¿quién emite los certificados fitosanitarios para las exportaciones?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "La KEPHIS se encarga de la inspección de sanidad vegetal y de los certificados fitosanitarios de las exportaciones de Kenia." }
          ]
        },
        {
          title: "Reunirte con compradores, contratos de suministro y agricultura por contrato",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir una oferta de suministro y hacer una lista de las condiciones de contrato que necesitas de un comprador.",
          text: [
            "Cuando te reúnas con un comprador, ve preparado: tu cultivo, la calidad, cuánto puedes entregar y cuándo, cómo mantienes el producto seguro y rastreado, cualquier certificado, y muestras. Promete solo lo que puedes cumplir. Una entrega fallida daña más la confianza que una oferta más pequeña.",
            "Negocia las condiciones, no solo el precio. Acuerda la calidad y cómo se revisa, el volumen y el calendario, el precio o cómo se fija (fijo, o ligado a un precio de mercado), quién paga el transporte y el empaque, las reglas de rechazo (quién revisa, cuándo y qué pasa con el producto rechazado), la fecha y la forma de pago, y qué pasa si tu cosecha falla o el comprador no recoge. Vender por fuera a otro comprador rompe la confianza y a menudo rompe el contrato.",
            "En un esquema de agricultura por contrato, una empresa como una procesadora o un exportador contrata a muchos pequeños agricultores, a menudo les da semilla, insumos, capacitación o crédito, y les compra la cosecha. Puede abrir un mercado estable, pero revisa: ¿te descuentan los insumos de tu pago y a qué precio?, ¿quién fija la calidad?, ¿qué pasa si suben los precios?, ¿puedes salirte? Lee todo el contrato, guarda una copia y consulta a un asesor de confianza, a un extensionista o a un responsable de la cooperativa antes de firmar."
          ],
          steps: ["Prepara tu oferta: cultivo, calidad, volumen, calendario, inocuidad y trazabilidad, certificado, muestras.", "Haz una lista de las condiciones que necesitas: revisión de calidad, base del precio, transporte, reglas de rechazo, fecha de pago, cláusulas en caso de incumplimiento.", "En la agricultura por contrato, pregunta cómo se cobran los insumos, quién clasifica la calidad y cómo puedes salirte.", "Lee el contrato completo y consulta a un asesor de confianza antes de firmar.", "Guarda una copia y entrega exactamente lo que prometiste."],
          words: [["Oferta de suministro", "una oferta escrita a un comprador de lo que puedes entregar, cuándo y en qué condiciones."], ["Agricultura por contrato", "un acuerdo en el que una empresa contrata a muchos pequeños agricultores para que cultiven para ella, a menudo dándoles insumos y comprándoles la cosecha."], ["Venta por fuera", "vender a otro comprador un producto que ya estaba comprometido por contrato."], ["Reglas de rechazo", "las reglas acordadas para revisar el producto y qué pasa con el que el comprador no acepta."]],
          slides: [
            { title: "Ve preparado", bullets: ["Cultivo, calidad, volumen y calendario", "Cómo mantienes el producto seguro y rastreado", "Certificado y muestras; promete solo lo que puedes cumplir"] },
            { title: "Negocia las condiciones", bullets: ["Revisión de calidad, base del precio, transporte", "Reglas de rechazo y fecha de pago", "¿Y si la cosecha falla o el comprador no recoge?"] },
            { title: "Agricultura por contrato", bullets: ["Mercado estable; insumos, capacitación o crédito", "Revisa: cobro de insumos, quién clasifica, ¿puedes salirte?", "Vender por fuera rompe la confianza y los contratos"] },
            { title: "Antes de firmar", bullets: ["Lee cada línea; guarda una copia", "Consulta a un extensionista, a la cooperativa o a un asesor", "Entrega exactamente lo que prometiste"] }
          ],
          tryIt: "Tarea final: termina tu lista de preparación para compradores, marcando lo que cumples y lo que vas a corregir. Luego escribe una oferta de suministro de una página para ese comprador: cultivo y calidad, volumen y calendario, inocuidad y trazabilidad, certificación, base del precio y las condiciones de contrato que quieres.",
          youCanNow: "hacer una oferta de suministro a un gran comprador y hacer una lista de las condiciones de contrato que te protegen, también en la agricultura por contrato.",
          quickCheck: [
            { objective: "O6", q: "¿Qué condición te protege si el comprador rechaza parte de una entrega?", options: ["Reglas de rechazo claras: quién revisa, cuándo y qué pasa con el producto rechazado", "El logo del comprador", "Un precio bajo", "Una entrega más grande"], answer: 0, why: "Las reglas de rechazo evitan rechazos injustos y dicen quién carga con la pérdida." },
            { objective: "O6", q: "Una empresa de agricultura por contrato te da semilla y fertilizante a crédito. ¿Qué debes preguntar primero?", options: ["De qué color son los costales", "Si los vecinos ya entraron", "Qué precio tienen los insumos y cómo se descuentan de tu pago", "Si puedes vender por fuera"], answer: 2, why: "El cobro de los insumos puede llevarse gran parte de tu pago, así que conoce el precio y cómo se descuenta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Certificación, reglas de exportación y contratos de suministro",
        questions: [
          { objective: "O3", q: "¿Cuánto tiempo es válido un certificado GLOBALG.A.P. IFA?", options: ["Un año, con auditorías anuales", "Para siempre", "Diez años", "Hasta que cambie el comprador"], answer: 0, why: "GLOBALG.A.P. dice que las auditorías son anuales y que un certificado es válido por un año." },
          { objective: "O3", q: "Antes de pagar una certificación, ¿qué debes preguntar a tu comprador?", options: ["Su dirección", "Su cultivo favorito", "Nada, solo certificarte", "¿La necesitas, y me comprarás más o me pagarás más si la tengo?"], answer: 3, why: "La certificación cuesta dinero, así que comprueba que te traiga un mercado o un mejor precio." },
          { objective: "O5", q: "¿Dónde puedes consultar los límites de residuos de la UE para un cultivo?", options: ["En una radio local", "En la base de datos de plaguicidas de la UE", "En tu sobre de semillas", "En el estado de WhatsApp de un comprador"], answer: 1, why: "La base de datos de plaguicidas de la Comisión Europea publica los LMR por alimento y plaguicida." },
          { objective: "O6", q: "¿Qué es vender por fuera?", options: ["Vender a un lado de la carretera", "Vender a dos mercados a la vez con permiso", "Vender a otro comprador un producto comprometido por contrato", "Vender al por mayor"], answer: 2, why: "Vender por fuera rompe un contrato y daña la confianza con el comprador." },
          { objective: "O6", q: "Puedes entregar 2 toneladas por semana. El comprador pide 4. ¿Qué haces?", options: ["Prometes 4 y esperas que salga bien", "Envías producto sin seleccionar para completar el peso", "No dices nada y entregas 2", "Ofreces 2 toneladas, o trabajas con un grupo para entregar más"], answer: 3, why: "Promete solo lo que puedes cumplir; un grupo puede ayudar a llegar a un volumen mayor." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Vender a supermercados, procesadoras y compradores de exportación: normas y certificación",
    questions: [
      { objective: "O1", q: "¿Qué conjunto resume lo que suelen querer los grandes compradores?", options: ["Precio bajo, finca grande, tractor nuevo", "Solo orgánico, nada más", "Regalos, crédito, transporte gratis", "Volumen, constancia, calidad, trazabilidad, inocuidad"], answer: 3, why: "Estas cinco son las necesidades comunes de supermercados, procesadoras y exportadores." },
      { objective: "O1", q: "A una procesadora que compra yuca para almidón le importa sobre todo:", options: ["Grandes volúmenes con una calidad fija", "Un color y una forma bonitos", "Paquetes pequeños para los clientes", "Etiquetas elegantes"], answer: 0, why: "Las procesadoras necesitan volumen y calidad constantes para su fábrica; el aspecto importa menos." },
      { objective: "O1", q: "Comparaste la especificación de un comprador con lo que entregas. ¿En qué se convierten las brechas?", options: ["En razones para rendirte", "En secretos para el grupo", "En tu plan de trabajo", "En el problema del comprador"], answer: 2, why: "Cada brecha es una tarea que debes resolver antes de poder abastecer a ese comprador." },
      { objective: "O2", q: "¿Qué significa GAP en este curso?", options: ["Pago Agrícola de Grupo", "Buenas Prácticas Agrícolas (Good Agricultural Practices)", "Granos y Productos", "Permiso de Aprobación del Gobierno"], answer: 1, why: "Las Buenas Prácticas Agrícolas son los hábitos de la finca que revisan compradores y certificadores." },
      { objective: "O2", q: "¿Qué plaguicidas debes usar?", options: ["Cualquier producto barato del mercado", "Los que recomiende un vecino", "Productos sin etiqueta en botellas viejas", "Productos registrados por tu organismo nacional, usados como dice la etiqueta"], answer: 3, why: "Los productos registrados usados según la etiqueta protegen a las personas y mantienen los residuos dentro de los límites." },
      { objective: "O2", q: "¿Por qué dar baños y lavado de manos a los trabajadores de la cosecha?", options: ["Para evitar que los gérmenes lleguen al producto", "Para agradar a los vecinos", "Porque a los compradores les gustan los edificios", "Para guardar químicos"], answer: 0, why: "La higiene en la cosecha mantiene el producto libre de gérmenes, y los compradores lo auditan." },
      { objective: "O4", q: "¿Para qué sirve un código de parcela?", options: ["Para pagar a los trabajadores", "Para rastrear el producto hasta la parcela exacta", "Para elegir un comprador", "Para fijar el precio"], answer: 1, why: "Un código de parcela une los registros de cosecha y de aplicaciones con una sola parcela." },
      { objective: "O4", q: "¿Dónde debe aparecer el número de lote?", options: ["Solo en tu cabeza", "En el carro del comprador", "En cada caja o nota de entrega, y en tu registro de cosecha", "En el sobre de semillas"], answer: 2, why: "Escribirlo en las cajas y en los registros permite que cualquiera rastree el producto." },
      { objective: "O4", q: "¿Qué registro muestra qué se aplicó en una parcela y cuándo?", options: ["El registro de socios", "El libro de ventas", "La nota de entrega", "El registro de aplicaciones e insumos"], answer: 3, why: "El registro de aplicaciones e insumos anota la fecha, el producto, la cantidad y quién aplicó." },
      { objective: "O3", q: "¿Qué cubre GLOBALG.A.P. IFA para frutas y hortalizas?", options: ["La inocuidad, el bienestar de los trabajadores y el ambiente", "Solo el color del producto", "Solo el precio", "Solo el tamaño de la finca"], answer: 0, why: "IFA cubre la inocuidad y la trazabilidad, la salud y el bienestar de los trabajadores, y el ambiente." },
      { objective: "O3", q: "¿Quién hace una auditoría GLOBALG.A.P.?", options: ["El chofer de tu comprador", "Un organismo de certificación aprobado", "Un vecino", "El banco"], answer: 1, why: "Solo un organismo de certificación aprobado que trabaje en tu país puede auditar y certificar." },
      { objective: "O3", q: "¿Cómo puede un comprador comprobar que tu certificado es real?", options: ["Pidiéndote que lo jures", "Mirando el letrero de tu finca", "En el Supply Chain Portal de GLOBALG.A.P.", "No puede comprobarlo"], answer: 2, why: "El estado del certificado se ve en la plataforma de GLOBALG.A.P. con tu número." },
      { objective: "O3", q: "¿Cuál es el primer paso hacia la certificación?", options: ["Pagar las tarifas de inmediato", "Imprimir un certificado", "Decirle al comprador que estás certificado", "Descargar gratis las reglas y la lista de verificación y hacer una autoevaluación"], answer: 3, why: "Una autoevaluación muestra tus brechas antes de pagar una auditoría." },
      { objective: "O5", q: "¿Qué es un LMR?", options: ["Un tipo de fertilizante", "Una variedad de semilla", "La cantidad más alta de un plaguicida que se permite que quede en un alimento", "Un permiso de transporte"], answer: 2, why: "Un límite máximo de residuos es el límite legal de residuo de un plaguicida en un alimento." },
      { objective: "O5", q: "¿Qué dijo el regulador de Kenia sobre las intercepciones de la UE por residuos?", options: ["Bajaron a cero", "Subieron de 25 en 2023 a 57 en 2024", "Nunca ocurren", "Solo afectan a las flores"], answer: 1, why: "La AFA informó que las intercepciones se duplicaron con creces y las relacionó con una fuerte caída de los ingresos por exportación de hortalizas." },
      { objective: "O5", q: "¿Cuál es una causa común de rechazo por residuos?", options: ["Aplicar demasiado cerca de la cosecha", "Llevar buenos registros", "Usar cajas limpias", "Capacitar a los trabajadores"], answer: 0, why: "No respetar el intervalo antes de la cosecha deja residuos por encima del límite." },
      { objective: "O5", q: "Un grupo nigeriano quiere exportar flor de Jamaica (hibisco) seca. ¿Dónde se registran como exportadores?", options: ["KEPHIS", "GEPA", "AFA", "El Consejo de Promoción de Exportaciones de Nigeria (NEPC)"], answer: 3, why: "Los exportadores nigerianos se registran en el NEPC y deben consultar sus requisitos vigentes." },
      { objective: "O6", q: "¿Qué debe incluir una oferta de suministro?", options: ["Cultivo, calidad, volumen, calendario, inocuidad, certificado y base del precio", "Solo un precio bajo", "Tu PIN bancario", "La promesa de cualquier volumen que pidan"], answer: 0, why: "Una oferta clara muestra al comprador exactamente qué puedes entregar y cómo." },
      { objective: "O6", q: "Antes de firmar un contrato de agricultura por contrato debes:", options: ["Firmar rápido antes que otros", "Leer solo la primera página", "Leerlo completo, guardar una copia y consultar a un asesor de confianza", "Dejar que la empresa se quede con la única copia"], answer: 2, why: "Leer todo y pedir consejo te protege de condiciones que no esperabas." },
      { objective: "O6", q: "Tu cosecha falla tras una sequía. ¿Qué condición del contrato importa ahora?", options: ["El logo del comprador", "Qué pasa si alguna de las partes no puede cumplir", "El color de las cajas", "El horario de la oficina del comprador"], answer: 1, why: "Una cláusula de incumplimiento dice qué pasa cuando falla una cosecha, para que no te castiguen injustamente." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte de la lista o de la oferta y vuelve a intentarlo.",
    criteria: [
      { name: "Requisitos del comprador y brechas", objective: "O1", notYet: "Las necesidades del comprador son vagas, o las brechas no están marcadas.", meets: "Se anotan volumen, constancia, calidad, trazabilidad e inocuidad, con lo que entregas hoy y cada brecha marcada.", exceeds: "Se basa en la especificación escrita del comprador, con un plan y una fecha para cerrar cada brecha." },
      { name: "Buenas Prácticas Agrícolas", objective: "O2", notYet: "No hay reglas GAP escritas, o hay plaguicidas sin registro o falta el equipo de protección.", meets: "Reglas escritas: plaguicidas registrados usados según la etiqueta, equipo de protección, intervalo antes de la cosecha, agua, higiene en la cosecha y seguridad de los trabajadores.", exceeds: "Los trabajadores fueron capacitados y las reglas están colgadas donde trabajan." },
      { name: "Registros de trazabilidad", objective: "O4", notYet: "No hay códigos de parcela, registro de aplicaciones ni números de lote.", meets: "Códigos de parcela, un registro de aplicaciones e insumos y un registro de cosecha con números de lote; se puede rastrear una caja.", exceeds: "Los registros se llevan para todo el grupo y se hizo una prueba de rastreo en pocos minutos." },
      { name: "Certificación y reglas de exportación", objective: "O3", notYet: "Se da la certificación por hecha o se ignora, o no se nombran organismos de exportación.", meets: "Una nota de costo y beneficio nombra los tres elementos de costo y una vía (solo, en grupo o todavía no).", exceeds: "Incluye cotizaciones reales de organismos de certificación y la respuesta del comprador sobre si la necesita." },
      { name: "Límites de residuos", objective: "O5", notYet: "No se revisan los límites de residuos del mercado.", meets: "Nombra dónde se publican los límites y revisa con ellos los plaguicidas usados, además de los organismos de exportación y de sanidad vegetal.", exceeds: "Preguntó al comprador o a un laboratorio por los análisis de residuos antes de enviar." },
      { name: "Oferta de suministro y condiciones", objective: "O6", notYet: "No hay oferta, o promete más de lo que la finca o el grupo puede entregar.", meets: "Una oferta de una página con calidad, volumen, calendario, inocuidad, certificado, base del precio y las condiciones de contrato deseadas.", exceeds: "Incluye reglas de rechazo, cláusulas de incumplimiento y condiciones de pago, y se la mostró a un asesor." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes o grupos que envían una oferta de suministro a un supermercado, una procesadora o un exportador en 90 días (encuesta de seguimiento)",
      "Participantes o grupos que consiguen un contrato de suministro o un acuerdo de agricultura por contrato en seis meses",
      "Participantes que llevan registros de aplicaciones y de cosecha con números de lote durante una temporada completa",
      "Participantes o grupos que empiezan o terminan una autoevaluación de certificación, o logran la certificación"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono (mejor si es inteligente) y un cuaderno para los registros",
      "Una especificación real de un comprador si es posible (pídela a un supermercado, una procesadora o un exportador local)",
      "Las etiquetas de los plaguicidas que usan los participantes, para leer el equipo de protección y el intervalo antes de la cosecha",
      "Opcional: la lista de verificación gratis de GLOBALG.A.P. de globalgap.org",
      "Unos 90 minutos en total, en sesiones cortas, más tiempo para contactar a compradores y organismos"
    ],
    facilitatorNotes: [
      "Dé este curso con grupos de productores cuando sea posible: el volumen, los registros y la certificación de grupo funcionan mejor juntos.",
      "Lleve etiquetas reales de plaguicidas y practiquen encontrar el equipo de protección y el intervalo antes de la cosecha; nunca dé usted cifras de dosis ni de intervalos.",
      "Invite a un comprador, un exportador o un organismo de certificación a contar qué auditan; pídales una especificación de ejemplo.",
      "Antes de la sesión, consulte las reglas vigentes con la AFA y la KEPHIS (Kenia), el NEPC (Nigeria), la GEPA (Ghana) y el organismo de protección vegetal de su país; las reglas y las tarifas cambian.",
      "Califique la tarea final con la rúbrica; practiquen una reunión con un comprador en la que el 'comprador' presiona para obtener más volumen del que el grupo puede entregar."
    ]
  }
};

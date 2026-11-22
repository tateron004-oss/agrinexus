"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-risk-management.js). See scripts/koachlearn-courses/README.md, "Translations".

const KAMIS = { name: "Sistema de Información de Mercados Agrícolas de Kenia (KAMIS), Ministerio de Agricultura: precios de mercado", url: "https://kamis.kilimo.go.ke" };
const NBS = { name: "Oficina Nacional de Estadística de Nigeria (NBS): informe mensual Selected Food Prices Watch e inflación", url: "https://nigerianstat.gov.ng" };
const CI_COCOA = { name: "Financial Afrik (5 de marzo de 2026): Costa de Marfil fija el precio del cacao en finca de la campaña intermedia en 1,200 FCFA/kg", url: "https://www.financialafrik.com/2026/03/05/cote-divoire-le-prix-de-la-campagne-intermediaire-de-cacao-fixe-a-1-200-fcfa-kg/" };
const PICS = { name: "Universidad de Purdue: bolsas herméticas Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const NCX = { name: "Bolsa de Productos Básicos de Nigeria (NCX): quiénes somos (con licencia de la Securities and Exchange Commission)", url: "https://ncx.com.ng/about-us/" };
const GCX = { name: "Bolsa de Productos Básicos de Ghana (GCX), sitio oficial", url: "https://www.gcx.com.gh" };
const GCX_FIRST = { name: "MyJoyOnline: la Bolsa de Productos Básicos de Ghana realiza su primera operación electrónica (contratos al contado de maíz, 2018)", url: "https://www.myjoyonline.com/ghana-commodity-exchange-executes-first-electronic-trade/" };
const ACRE = { name: "ACRE Africa: seguro de índice climático (intermediario de seguros autorizado)", url: "https://acreafrica.com/crop-insurance/weather-index-insurance/" };
const IBLI = { name: "ILRI: Seguro Ganadero Basado en Índices (IBLI) y el Programa de Seguro Ganadero de Kenia (KLIP)", url: "https://ibli.ilri.org/" };
const ILRI_KLIP = { name: "ILRI: Ojos en el cielo: el gobierno de Kenia da seguro ganadero a los pastores mediante imágenes satelitales", url: "https://www.ilri.org/news/eyes-sky-kenyas-government-provides-pastoralists-livestock-insurance-through-satellite-imagery" };
const CNAAS = { name: "CNAAS, Compagnie Nationale d'Assurance Agricole du Sénégal (aseguradora agrícola nacional de Senegal)", url: "https://www.cnaas.sn" };
const BCEAO = { name: "BCEAO, Banco Central de los Estados de África Occidental: indicadores principales, incluida la inflación", url: "https://www.bceao.int/fr/content/principaux-indicateurs-et-taux-directeurs" };
const CBK = { name: "Banco Central de Kenia (inflación e instituciones con licencia)", url: "https://www.centralbank.go.ke" };
const SASRA = { name: "SASRA, Kenia: lista de SACCO de captación de depósitos con licencia", url: "https://www.sasra.go.ke/licensed-dt-saccos/" };

module.exports = {
  id: "agri-risk-management-es",
  lang: "es",
  translationOf: "agri-risk-management",
  category: "Agriculture (Africa)",
  name: "Gestión de riesgos agrícolas: precios, clima y seguros",
  skills: "Clasificar los riesgos de la finca en un registro de riesgos, Seguir los precios y leer las tendencias del mercado, Repartir el riesgo con diversificación, venta por etapas y almacenamiento, Juzgar contratos a plazo y la cobertura, Revisar una oferta de seguro de índice, Proteger los ahorros de la inflación",
  outcome: "hacer la lista de los riesgos de tu finca y ordenarlos, seguir los precios y leer su tendencia, decidir cuándo conviene almacenar y vender por etapas, revisar un contrato de precio fijo y una oferta de seguro de índice antes de firmar, y proteger mejor tus ahorros de la inflación, todo escrito en un plan de riesgos de una página.",
  about: [
    "Este curso es para pequeños productores y agricultores comerciales en crecimiento, pastores, jóvenes agroemprendedores, líderes de cooperativas y extensionistas de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil y de toda África. El mal tiempo, la caída de precios, los animales enfermos y el aumento de costos pueden acabar con el trabajo de un año. No puedes eliminar el riesgo, pero sí puedes verlo venir, repartirlo y pasar una parte a otros.",
    "El capítulo 1 trata de ver y repartir el riesgo: los tipos de riesgo de la finca y un registro de riesgos, las subidas y bajadas de precios y las tendencias del mercado, y cómo repartir el riesgo con diversificación, venta por etapas y almacenamiento. El capítulo 2 trata de pasar el riesgo a otros y proteger tu dinero: contratos a plazo y de precio fijo y qué significa la cobertura en una bolsa de productos básicos, el seguro agrícola y ganadero basado en índices, y la inflación y los ahorros.",
    "Este curso explica cómo funcionan los contratos, las bolsas, los seguros y los ahorros, y sus riesgos. No da consejos de inversión y no recomienda operar en ninguna bolsa. Lee completos cada contrato y cada póliza, revisa que la empresa tenga licencia y consulta a un asesor de confianza, como tu cooperativa, tu extensionista o un abogado, antes de firmar. Las cifras de dinero son ejemplos, salvo cuando se da una fuente."
  ],
  finalTask: "Escribe un plan de riesgos de una página para tu finca (o una finca de ejemplo): tus cinco riesgos principales ordenados por probabilidad e impacto, con una acción para cada uno; un registro de precios de cuatro semanas de tu cultivo o animal principal, de al menos dos fuentes, con la tendencia que ves; un plan de venta que diga cuánto venderás en la cosecha y cuánto almacenarás, con el precio de equilibrio del almacenamiento; las preguntas que harás antes de firmar un contrato de precio fijo o comprar un seguro de índice; y cómo protegerás mejor tus ahorros de la inflación.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, pastores, jóvenes agroemprendedores, líderes de cooperativas y extensionistas de Kenia, Nigeria, Ghana y África Occidental francófona, que cultivan maíz, arroz, sorgo, frijol, maní, tomate, café y cacao, o crían ganado vacuno, cabras, cerdos, aves o peces.",
    startingPoint: "Saben por experiencia que el clima, los precios y las enfermedades pueden arruinar una temporada. La mayoría vende en la cosecha al primer comprador, guarda sus ahorros en efectivo, animales o grano, y nunca ha leído una póliza de seguro ni un contrato de precio fijo. Algunos han oído hablar de bolsas de productos básicos o del seguro de índice, pero no saben cómo funcionan.",
    gap: "Sin un plan, una sequía, un desplome de precios o un brote de enfermedad puede obligar a los agricultores a vender animales y tierras, pedir prestado a un costo alto o dejar la agricultura. Los agricultores que siguen los precios, reparten el riesgo, leen los términos de contratos y seguros, y protegen sus ahorros se recuperan más rápido y ganan más confianza de compradores y prestamistas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra de finanzas",
      "Dispositivos: un teléfono básico para precios por SMS, radio o llamadas; un cuaderno para el registro de precios",
      "Tiempo: lecciones de 5 a 6 minutos que caben entre las tareas de la finca",
      "Los seguros, las bolsas y los programas varían según el país y cambian; los participantes revisan la oferta actual y al ente regulador",
      "Sin consejos de inversión ni recomendación de operar; los participantes consultan a un asesor de confianza antes de firmar cualquier cosa"
    ],
    prerequisites: "Ninguno. \"Agronegocios y administración de la finca\" y \"Contabilidad agrícola y gestión de inversiones\" (precio de equilibrio) ayudan con los números."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Pensando en tu propia finca y tu hogar", action: "hacer la lista de los principales riesgos que enfrentas y ordenarlos en un registro de riesgos según su probabilidad y el daño que harían", standard: "con al menos un riesgo de cada tipo (producción, mercado, dinero, normas y personas) y una acción para cada uno de los cinco principales" },
    { id: "O2", condition: "Para tu cultivo o animal principal, durante cuatro semanas", action: "anotar los precios cada semana de al menos dos fuentes, incluido un servicio oficial de información de mercados donde exista, y describir la tendencia", standard: "con el mismo producto, calidad y unidad cada semana" },
    { id: "O3", condition: "Con una cosecha, el precio de hoy, un precio esperado más adelante y los costos de almacenamiento", action: "calcular el precio de equilibrio del almacenamiento y escribir un plan para vender por etapas y repartir el riesgo", standard: "con cifras correctas y las necesidades de dinero de la cosecha cubiertas" },
    { id: "O4", condition: "Con una oferta de contrato a plazo o de precio fijo", action: "hacer la lista de los términos que hay que revisar y explicar qué ganas y qué cedes, incluido cómo funciona la cobertura en una bolsa de productos básicos", standard: "nombrando al menos cinco términos y una ganancia y un riesgo" },
    { id: "O5", condition: "Con una oferta de seguro agrícola o ganadero basado en índices", action: "revisar el índice, el disparador, la prima, el riesgo de base y la licencia de la aseguradora", standard: "antes de pagar, escribiendo la respuesta a cada punto" },
    { id: "O6", condition: "Con tus ahorros y la tasa de inflación actual", action: "comparar al menos tres formas de guardar los ahorros y elegir una combinación que los proteja de la inflación y del robo", standard: "nombrando un riesgo de cada forma y revisando que cualquier SACCO, banco o institución de microfinanzas tenga licencia" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ver y repartir el riesgo",
      lessons: [
        {
          title: "Los tipos de riesgo de la finca y un registro de riesgos",
          objectives: ["O1"],
          minutes: 5,
          goal: "Hacer la lista de los principales riesgos de tu finca y ordenarlos en un registro de riesgos sencillo.",
          text: [
            "Los riesgos de la finca son de cinco tipos. Riesgos de producción: sequía, inundaciones, plagas como el gusano cogollero, enfermedades de cultivos y animales, robo. Riesgos de mercado: caída de precios, compradores que no pagan o no recogen, subida del precio de los insumos. Riesgos de dinero: deudas que no puedes pagar, pérdida de ahorros, inflación, tipos de cambio en exportaciones como el café y el cacao. Riesgos de normas: impuestos nuevos, prohibiciones de exportar, cambios en las normas de tierras o de mercados. Riesgos de personas: enfermedad, lesión o muerte en la familia, o perder a un trabajador clave.",
            "Un registro de riesgos es una tabla con una línea por riesgo. Para cada uno, califica qué tan probable es (1 baja, 2 media, 3 alta) y cuánto daño haría (1 poco, 2 medio, 3 mucho). Multiplica los dos para obtener un puntaje de 1 a 9. Los puntajes más altos van primero.",
            "Para cada riesgo principal, elige una acción: evitarlo (no sembrar tomate en el mes más lluvioso), reducirlo (semilla tolerante a la sequía, vacunas según indique el veterinario, almacenamiento), compartirlo o pasarlo a otros (seguro, un contrato, una cooperativa), o aceptarlo y guardar ahorros para él. Revisa el registro antes de cada temporada."
          ],
          steps: ["Haz la lista de riesgos de cada tipo: producción, mercado, dinero, normas, personas.", "Califica qué tan probable es cada uno: 1, 2 o 3.", "Califica el daño que haría cada uno: 1, 2 o 3.", "Multiplica los puntajes y ordena los riesgos.", "Para los cinco principales, elige evitar, reducir, compartir o aceptar, y una acción.", "Revísalo antes de cada temporada."],
          words: [["Riesgo", "algo que puede pasar y que dañaría tu finca o tus ingresos."], ["Registro de riesgos", "una tabla con tus riesgos, qué tan probable y qué tan dañino es cada uno, y qué vas a hacer."], ["Probabilidad", "qué tan posible es que algo pase."], ["Impacto", "cuánto daño haría si pasara."]],
          slides: [
            { title: "Cinco tipos de riesgo de la finca", bullets: ["Producción: clima, plagas, enfermedades, robo", "Mercado: precios, compradores, costo de insumos", "Riesgos de dinero, de normas y de personas"] },
            { title: "Califica cada riesgo", bullets: ["Probabilidad 1-3 x impacto 1-3 = puntaje 1-9", "Los puntajes más altos primero"] },
            { title: "Cuatro formas de responder", bullets: ["Evitarlo", "Reducirlo", "Compartirlo o pasarlo: seguros, contratos, grupos", "Aceptarlo y guardar ahorros para él"] }
          ],
          tryIt: "Escribe un registro de riesgos de tu finca con al menos ocho riesgos que cubran los cinco tipos. Califica cada uno, ordénalos y escribe una acción de evitar, reducir, compartir o aceptar para los cinco principales.",
          youCanNow: "hacer la lista de los riesgos de tu finca, ordenarlos y elegir una acción para los más graves.",
          quickCheck: [
            { objective: "O1", q: "El precio del maíz cae a la mitad en la cosecha. ¿Qué tipo de riesgo es?", options: ["Un riesgo de producción", "Un riesgo de personas", "Un riesgo de mercado", "Un riesgo de normas"], answer: 2, why: "Los cambios de precio son riesgos de mercado." },
            { objective: "O1", q: "Un riesgo tiene probabilidad 3 e impacto 2. ¿Cuál es su puntaje?", options: ["6", "5", "1", "9"], answer: 0, why: "3 x 2 = 6." }
          ]
        },
        {
          title: "Las subidas y bajadas de precios y cómo leer las tendencias del mercado",
          objectives: ["O2"],
          minutes: 6,
          goal: "Llevar un registro semanal de precios de al menos dos fuentes y describir la tendencia.",
          text: [
            "Los precios de cultivos y animales suben y bajan con la temporada, el clima, las importaciones y exportaciones, el costo del combustible y la demanda. Muchos alimentos básicos tienen su precio más bajo en la cosecha, cuando todos venden, y más alto en los meses antes de la siguiente cosecha. Incluso un precio fijado por el gobierno puede cambiar mucho entre temporadas: en Costa de Marfil, el precio garantizado del cacao en finca fue de 2,800 francos CFA por kg en la campaña principal 2025-2026, y el gobierno lo fijó en 1,200 por kg para la campaña intermedia desde marzo de 2026, después de que bajaran los precios mundiales del cacao.",
            "Usa los servicios oficiales de información de mercados donde existan. En Kenia, KAMIS, del Ministerio de Agricultura, publica precios de mercado. En Nigeria, la Oficina Nacional de Estadística (NBS) publica un informe mensual de precios de alimentos por estado. En Ghana, la Bolsa de Productos Básicos de Ghana publica los precios de sus operaciones. Agrega los informes de mercado de la radio, tu cooperativa y al menos dos compradores.",
            "Lleva un registro de precios: cada semana, la fecha, el mercado o la fuente, el producto, la calidad y la unidad (por ejemplo, un saco de 90 kg de maíz seco) y el precio. Después de cuatro semanas o más, mira la dirección: sube, baja o se mantiene. Compara con los mismos meses del año pasado si puedes. Una tendencia es una guía, no una promesa: los precios pueden cambiar rápido."
          ],
          steps: ["Elige tu producto principal, su calidad y su unidad.", "Escoge al menos dos fuentes, incluido un servicio oficial donde exista.", "Cada semana anota: fecha, fuente, producto, calidad, unidad, precio.", "Después de cuatro semanas, marca la dirección: sube, baja o se mantiene.", "Compara con los mismos meses del año pasado.", "Comparte el registro con tu grupo."],
          words: [["Servicio de información de mercados", "un servicio que reúne y comparte los precios de los mercados por internet, SMS o radio."], ["Tendencia", "la dirección general en que se mueven los precios durante varias semanas o meses."], ["Precio en finca", "el precio que recibe el agricultor en la finca, antes del transporte al mercado."]],
          slides: [
            { title: "Por qué cambian los precios", bullets: ["Temporada, clima, importaciones y exportaciones", "Costo del combustible y demanda", "Muchas veces más bajos en la cosecha"] },
            { title: "Hasta los precios fijados cambian", bullets: ["Cacao en Costa de Marfil: 2,800 CFA/kg, campaña principal 2025-26", "Fijado en 1,200 CFA/kg desde marzo de 2026", "Después de que bajaran los precios mundiales"] },
            { title: "Dónde encontrar precios", bullets: ["Kenia: KAMIS", "Nigeria: precios mensuales de alimentos de la NBS", "Ghana: operaciones de la Bolsa de Productos Básicos; radio; compradores"] },
            { title: "Tu registro semanal de precios", bullets: ["Fecha, fuente, producto, calidad, unidad, precio", "Después de 4 semanas: ¿sube, baja o se mantiene?", "Una tendencia es una guía, no una promesa"] }
          ],
          sources: [KAMIS, NBS, GCX, CI_COCOA],
          tryIt: "Empieza hoy un registro de precios de tu cultivo o animal principal. Anota el precio de esta semana de dos fuentes, con producto, calidad y unidad, y pon un recordatorio en tu teléfono para el mismo día cada semana.",
          youCanNow: "llevar un registro semanal de precios de fuentes oficiales y locales y describir la tendencia de los precios.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué anotar la calidad y la unidad con cada precio de tu registro?", options: ["Para que el registro parezca oficial", "Porque los compradores necesitan verlo", "No hace falta", "Para comparar lo mismo cada semana"], answer: 3, why: "El precio de un saco de 50 kg de maíz húmedo no se puede comparar con el de un saco de 90 kg de maíz seco." },
            { objective: "O2", q: "En cinco semanas, el precio del tomate en un mercado fue 400, 420, 450, 470 y 500 por caja. ¿Cuál es la tendencia?", options: ["Baja", "Sube", "Se mantiene", "No se puede saber"], answer: 1, why: "Cada semana el precio es más alto que la semana anterior." }
          ]
        },
        {
          title: "Repartir el riesgo: diversificación, venta por etapas y almacenamiento",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular si conviene almacenar y escribir un plan para vender por etapas.",
          text: [
            "Diversificar significa no poner todos los huevos en la misma canasta: dos o más cultivos con temporadas o mercados distintos, unas cuantas cabras o gallinas, peces, árboles o ingresos fuera de la finca. Cuando uno falla, otro todavía puede dar dinero. No te repartas tanto que no puedas manejar bien ninguno.",
            "Vender por etapas significa vender parte de la cosecha en momentos distintos en lugar de todo de una vez. Por ejemplo, vende un tercio en la cosecha para cubrir la escuela y las deudas, un tercio dos meses después y un tercio cuatro meses después. Así evitas venderlo todo al precio más bajo y evitas apostarlo todo a un precio alto que quizá no llegue.",
            "Almacenar solo conviene si el precio de más adelante cubre los costos y las pérdidas del almacenamiento. Precio de equilibrio del almacenamiento = (precio en la cosecha x sacos + costos de almacenamiento) / sacos que venderás después. Ejemplo (cifras inventadas en chelines kenianos): 10 sacos de maíz, precio en la cosecha 3,000 por saco, costos de almacenamiento 3,000 durante cuatro meses (bolsas herméticas, bodega, revisiones). Equilibrio = (30,000 + 3,000) / 10 = 3,300 por saco. Si el precio llega a 4,200, ganas; si solo llega a 3,200, pierdes. Almacena solo grano limpio y seco en bolsas herméticas o en una bodega certificada, y revísalo para ver si hay plagas o moho."
          ],
          steps: ["Haz la lista de lo demás que podrías cultivar, criar o ganar para que un solo fracaso no te arruine.", "Calcula cuánto dinero necesitas en la cosecha.", "Planea vender en la cosecha lo suficiente para ese dinero y almacenar el resto para vender por etapas.", "Equilibrio del almacenamiento = (precio en la cosecha x sacos + costos de almacenamiento) / sacos.", "Compáralo con la tendencia de precios de tu registro.", "Almacena solo producto limpio y seco, de forma segura, y revísalo."],
          words: [["Diversificación", "repartir tu producción y tus ingresos entre varias actividades para que un solo fracaso no te arruine."], ["Venta por etapas", "vender una cosecha por partes en momentos distintos en lugar de todo de una vez."], ["Precio de equilibrio del almacenamiento", "el precio de más adelante que necesitas para cubrir el precio de cosecha al que renunciaste más los costos de almacenamiento."], ["Bolsa hermética", "una bolsa de almacenamiento cerrada al aire que no deja respirar a los insectos, así el grano guardado se conserva sin químicos."]],
          slides: [
            { title: "Diversifica", bullets: ["Cultivos con temporadas o mercados distintos", "Animales pequeños, peces, árboles, ingresos fuera de la finca", "No tantos que no puedas manejarlos"] },
            { title: "Vende por etapas", bullets: ["Un tercio en la cosecha para lo que necesitas pagar", "Un tercio a los 2 meses y un tercio a los 4", "Sin apostarlo todo a un precio"] },
            { title: "¿Conviene almacenar? (ejemplo en KES)", bullets: ["(3,000 x 10 + 3,000) / 10 = 3,300 por saco", "Precio de 4,200: ganas; precio de 3,200: pierdes", "Compáralo con tu registro de precios"] },
            { title: "Almacena con seguridad", bullets: ["Solo grano limpio y seco", "Bolsas herméticas o una bodega certificada", "Revisa si hay plagas y moho"] }
          ],
          sources: [PICS],
          tryIt: "Para tu cultivo principal, escribe cuántos sacos o kg esperas, cuánto dinero necesitas en la cosecha, y cuánto venderás en la cosecha, a los dos meses y a los cuatro meses. Calcula el precio de equilibrio del almacenamiento para la parte que vas a guardar.",
          youCanNow: "calcular si conviene almacenar, planear la venta por etapas y repartir el riesgo entre más de una actividad.",
          quickCheck: [
            { objective: "O3", q: "Precio en la cosecha 5,000 por saco, 20 sacos, costos de almacenamiento 10,000. ¿Cuál es el precio de equilibrio del almacenamiento?", options: ["5,000", "10,500", "5,500", "500"], answer: 2, why: "(5,000 x 20 + 10,000) / 20 = 110,000 / 20 = 5,500 por saco." },
            { objective: "O3", q: "¿Cuál es la principal ventaja de vender por etapas?", options: ["Evitas venderlo todo al precio más bajo o apostarlo todo a un precio alto", "Los compradores siempre pagan más por cantidades pequeñas", "Nunca necesitas almacenar", "Elimina todo el riesgo de precio"], answer: 0, why: "Vender por partes reparte el riesgo de precio entre varias fechas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Ver y repartir el riesgo",
        questions: [
          { objective: "O1", q: "¿Cuál es un riesgo de producción?", options: ["Un impuesto nuevo a la exportación", "Un comprador que paga tarde", "La inflación", "El gusano cogollero en tu maíz"], answer: 3, why: "Las plagas y el clima afectan lo que produces, así que son riesgos de producción." },
          { objective: "O1", q: "Comprar un seguro de índice contra la sequía es ¿qué respuesta a un riesgo?", options: ["Evitarlo", "Compartirlo o pasarlo", "Aceptarlo", "Ignorarlo"], answer: 1, why: "El seguro pasa parte de la pérdida a la aseguradora." },
          { objective: "O2", q: "¿Cuál es un servicio oficial de precios de mercado en Kenia?", options: ["KAMIS, del Ministerio de Agricultura", "El estado de WhatsApp de un comerciante", "Lo que adivina un vecino", "El recibo del año pasado"], answer: 0, why: "KAMIS es el sistema de información de mercados del Ministerio de Agricultura." },
          { objective: "O3", q: "Precio en la cosecha 2,000 por saco, 10 sacos, costos de almacenamiento 4,000. El precio de más adelante es 2,300. ¿Conviene almacenar?", options: ["Sí, porque 2,300 es más que 2,000", "Sí, almacenar siempre conviene", "No, el equilibrio es 2,400, así que pierdes", "No se puede calcular"], answer: 2, why: "(2,000 x 10 + 4,000) / 10 = 2,400; 2,300 está por debajo." },
          { objective: "O3", q: "Un agricultor cultiva solo tomate para un solo comprador. ¿Qué repartiría el riesgo?", options: ["Sembrar más tomate para el mismo comprador", "Agregar un cultivo de otra temporada y buscar un segundo comprador", "Venderlo todo el día de la cosecha", "Dejar de llevar registros"], answer: 1, why: "Un segundo cultivo y un segundo comprador hacen que un solo fracaso no se lleve todo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pasar el riesgo a otros y proteger tu dinero",
      lessons: [
        {
          title: "Contratos de precio fijo, cobertura y bolsas de productos básicos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hacer la lista de los términos que hay que revisar en un contrato de precio fijo y explicar qué significa la cobertura.",
          text: [
            "Un contrato a plazo o de precio fijo es un acuerdo hecho hoy para vender una cantidad y una calidad fijas a un precio fijo en una fecha futura. Ganas certeza: conoces tu precio antes de la cosecha, lo que te ayuda a planificar y a pedir prestado. Cedes algo: si el precio del mercado sube, igual recibes el precio acordado. Si tu cosecha falla o vendes a otro (venta paralela), puedes romper el contrato y deber una multa. Antes de firmar, revisa: producto y calidad, cantidad, precio o cómo se fija, fecha y lugar de entrega, quién paga el transporte, pruebas de calidad y rechazo, fecha y forma de pago, y qué pasa si la cosecha falla o el comprador no recoge.",
            "Cubrirse (hacer cobertura) significa tomar una posición que gana cuando tu cultivo pierde valor, para que las dos cosas se compensen. En una bolsa de productos básicos, los grandes comerciantes y procesadores lo hacen con futuros: contratos estándar para comprar o vender más adelante a un precio acordado hoy. Si los precios bajan, la posición en futuros gana mientras el cultivo deja menos; si los precios suben, la posición en futuros pierde mientras el cultivo deja más. Necesita un corredor, depósitos llamados margen que te pueden pedir con poco aviso, y habilidad. Puede perder dinero y no es algo para probar sin capacitación y asesoría.",
            "En África, la Bolsa de Productos Básicos de Nigeria (NCX) tiene licencia de la Securities and Exchange Commission (comisión de valores) de Nigeria y ofrece comercio, formación de precios, almacenamiento y clasificación de productos. La Bolsa de Productos Básicos de Ghana (GCX), regulada por la Securities and Exchange Commission de Ghana, empezó a operar maíz al contado de forma electrónica en 2018 y conecta a los agricultores con bodegas certificadas. La mayoría de los pequeños productores llega a las bolsas por medio de una cooperativa, un acopiador o una bodega certificada, no operando por su cuenta. Este curso no recomienda operar. Quien te prometa ganancias con el comercio de productos básicos puede ser un estafador: consulta al regulador de valores."
          ],
          steps: ["Lee todo el contrato, en voz alta con tu grupo si es posible.", "Revisa producto, calidad, cantidad, precio, fecha y lugar de entrega, y transporte.", "Revisa las pruebas de calidad, el rechazo, la fecha y la forma de pago.", "Pregunta qué pasa si la cosecha falla o el comprador no recoge.", "Compara el precio fijo con tu precio de equilibrio y tu registro de precios.", "Consulta a tu cooperativa, a tu extensionista o a un abogado antes de firmar."],
          words: [["Contrato a plazo", "un acuerdo hecho hoy para vender una cantidad fija a un precio fijo en una fecha futura."], ["Cobertura", "tomar una posición que gana cuando tu cultivo pierde valor, para que las pérdidas se compensen."], ["Futuros", "contratos estándar que se negocian en una bolsa para comprar o vender un producto más adelante a un precio acordado hoy."], ["Bolsa de productos básicos", "un mercado regulado donde compradores y vendedores negocian cultivos y otros bienes con calidades y reglas acordadas."], ["Venta paralela", "vender a otra persona un producto que ya prometiste a un comprador."]],
          slides: [
            { title: "Contrato de precio fijo", bullets: ["Cantidad, calidad y precio fijos para más adelante", "Ganas: un precio conocido para planificar y pedir prestado", "Cedes: lo extra si los precios suben"] },
            { title: "Revisa cada término", bullets: ["Producto, calidad, cantidad, precio", "Fecha y lugar de entrega, transporte", "Pruebas de calidad, rechazo, pago", "Cosecha fallida; el comprador no recoge"] },
            { title: "Qué significa la cobertura", bullets: ["Una posición que gana cuando tu cultivo pierde valor", "Los futuros necesitan un corredor, margen y habilidad", "Puede perder dinero: no es para principiantes"] },
            { title: "Bolsas en África", bullets: ["Nigeria: NCX, con licencia de la SEC", "Ghana: GCX, maíz al contado desde 2018", "La mayoría de los agricultores entra por cooperativas o bodegas"] }
          ],
          sources: [NCX, GCX, GCX_FIRST],
          tryIt: "Toma un contrato de comprador real o de ejemplo. Escribe cada uno de los ocho términos de los pasos y lo que dice el contrato (o \"falta\"). Luego escribe una cosa que ganas y un riesgo que corres si lo firmas.",
          youCanNow: "revisar un contrato de precio fijo término por término y explicar qué significa la cobertura en una bolsa de productos básicos y por qué tiene riesgo.",
          quickCheck: [
            { objective: "O4", q: "Firmas un precio fijo de 30,000 por saco. Al entregar, el precio del mercado es 36,000. ¿Cuánto recibes?", options: ["36,000 por saco", "33,000 por saco", "Nada", "30,000 por saco, el precio acordado"], answer: 3, why: "Un contrato de precio fijo paga el precio acordado aunque el mercado suba." },
            { objective: "O4", q: "Un desconocido ofrece operar futuros de productos básicos por ti con \"ganancias garantizadas\". ¿Qué debes hacer?", options: ["Negarte y consultar la empresa con el regulador de valores", "Enviar un depósito pequeño para probar", "Darle tu PIN de dinero móvil para que opere", "Firmar rápido antes de que se acabe la oferta"], answer: 0, why: "Nadie puede garantizar ganancias al operar; es señal de estafa." }
          ]
        },
        {
          title: "Seguro agrícola y ganadero basado en índices",
          objectives: ["O5"],
          minutes: 6,
          goal: "Revisar una oferta de seguro de índice: su índice, disparador, prima, riesgo de base y licencia.",
          text: [
            "El seguro común manda a alguien a medir la pérdida en tu finca. El seguro de índice paga cuando un índice pasa un nivel fijado, llamado disparador: por ejemplo, la lluvia medida por satélite o por una estación meteorológica cae por debajo de lo normal, el rendimiento promedio de tu zona baja, o las imágenes satelitales muestran que los pastos se están secando. Nadie visita tu terreno, así que puede ser más barato y pagar más rápido.",
            "Ejemplos: ACRE Africa, un intermediario de seguros autorizado con sede en Kenia, trabaja con aseguradoras locales para ofrecer seguros de índice climático, de índice de rendimiento por zona y ganadero basado en índices, muchas veces vendidos por medio de grupos de agricultores y pagados por dinero móvil. El gobierno de Kenia maneja el Programa de Seguro Ganadero de Kenia (KLIP), lanzado en 2015 con el seguro ganadero basado en índices desarrollado con el ILRI (Instituto Internacional de Investigación en Ganadería): el gobierno paga la prima de los pastores vulnerables registrados, y los pagos se activan cuando las imágenes satelitales muestran que fallan los pastos, para que los pastores reciban dinero y mantengan vivos a sus animales. En Senegal, la aseguradora agrícola nacional CNAAS asegura cultivos y ganado y ofrece seguro de índice.",
            "La gran debilidad es el riesgo de base: el índice puede no coincidir con tu propio terreno. Tu cultivo puede perderse por una granizada local mientras la lluvia de la zona parece normal, y entonces no llega ningún pago; o el índice puede activarse cuando a tu terreno le fue bien. Antes de pagar, pregunta: qué riesgo cubre, qué índice es y dónde se mide, cuál es el disparador, cuánto es el pago, cuánto es la prima y la fecha límite para comprar, cómo y cuándo paga, y si la aseguradora tiene licencia (Kenia: Insurance Regulatory Authority; Nigeria: NAICOM; Ghana: National Insurance Commission; países del franco CFA: la CIMA y la dirección nacional de seguros)."
          ],
          steps: ["Pregunta qué riesgo cubre: sequía, exceso de lluvia, pérdida de rendimiento de la zona o falla de pastos.", "Pregunta qué índice es y dónde se mide.", "Pregunta el disparador y el monto del pago.", "Pregunta la prima, la fecha límite para comprar y cómo te llegan los pagos.", "Piensa en el riesgo de base: ¿coincidiría el índice con tu terreno?", "Revisa que la aseguradora o el agente tenga licencia del regulador de seguros."],
          words: [["Seguro de índice", "un seguro que paga cuando un índice medido, como la lluvia o los pastos, pasa un nivel fijado, no después de visitar tu finca."], ["Disparador", "el nivel del índice que hace que la aseguradora pague."], ["Prima", "el precio que pagas por la cobertura del seguro."], ["Riesgo de base", "la posibilidad de que el índice no coincida con lo que de verdad pasó en tu finca."]],
          slides: [
            { title: "Cómo funciona el seguro de índice", bullets: ["Paga cuando un índice pasa el disparador", "Lluvia, rendimiento de la zona o pastos por satélite", "Sin visita al terreno: más barato y más rápido"] },
            { title: "Ejemplos", bullets: ["ACRE Africa: índice climático, de rendimiento por zona y ganadero", "KLIP en Kenia: el gobierno paga la prima de los pastores", "Senegal: seguro agrícola y ganadero de la CNAAS"] },
            { title: "Riesgo de base", bullets: ["El índice puede no coincidir con tu terreno", "Granizada local: pérdida pero sin pago", "Pregunta qué tan cerca está el punto de medición"] },
            { title: "Pregunta antes de pagar", bullets: ["Riesgo, índice, disparador, pago", "Prima, fecha límite, cómo paga", "¿Tiene licencia? IRA, NAICOM, NIC, CIMA"] }
          ],
          sources: [ACRE, IBLI, ILRI_KLIP, CNAAS],
          tryIt: "Pregunta a tu cooperativa, a tu proveedor de insumos o a tu extensionista por un producto de seguro de índice cerca de ti (o usa un ejemplo). Escribe las respuestas a las ocho preguntas de los pasos y una forma en que el riesgo de base podría afectar tu finca.",
          youCanNow: "revisar una oferta de seguro de índice, su índice, disparador, prima, riesgo de base y licencia, antes de pagar.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace que una póliza de seguro de índice pague?", options: ["Que una aseguradora visite tu terreno", "Que el índice pase el nivel del disparador", "Que tú pidas un pago", "Cualquier pérdida que informes"], answer: 1, why: "El seguro de índice paga según el índice medido, no según una visita al terreno." },
            { objective: "O5", q: "Una granizada local destruyó tu maíz, pero el índice de lluvia de la zona se mantuvo normal. ¿Cómo se llama esto?", options: ["Una prima", "Un disparador", "Riesgo de base", "Cobertura"], answer: 2, why: "El riesgo de base es cuando el índice no coincide con lo que pasó en tu finca." }
          ]
        },
        {
          title: "La inflación y cómo guardar tus ahorros",
          objectives: ["O6"],
          minutes: 5,
          goal: "Comparar formas de guardar los ahorros y elegir una combinación que los proteja de la inflación y del robo.",
          text: [
            "Inflación significa que los precios en general suben, así que el mismo dinero compra menos. Ejemplo: si los precios suben un 10% en un año, 10,000 guardados en una lata en casa solo comprarán lo que hoy compran unos 9,100. Busca la tasa de inflación actual en tu banco central o tu oficina de estadística (Kenia: Banco Central de Kenia; Nigeria: Oficina Nacional de Estadística; países del franco CFA de África Occidental: BCEAO).",
            "Cada forma de ahorrar tiene un riesgo. Efectivo en casa: fácil de usar, pero pierde valor con la inflación y se lo pueden robar. Un grupo de ahorro o una VSLA: crea el hábito y puede repartir ganancias, pero depende de registros honestos. Una cuenta en una SACCO, un banco o una institución de microfinanzas con licencia: más segura y puede pagar interés, pero compara el interés con la inflación y revisa las comisiones. Animales: pueden ganar valor, pero pueden morir por sequía o enfermedad. Grano almacenado: puede subir de precio, pero puede dañarse o bajar de precio. Comprar los insumos clave antes: evita las subidas de precio, pero necesita un almacenamiento seguro.",
            "Reparte tus ahorros en más de una forma. Ten un fondo de emergencia que puedas usar rápido. Revisa que cualquier SACCO, banco o institución de microfinanzas tenga licencia (en Kenia, SASRA publica la lista de SACCO de captación de depósitos con licencia). Ten mucho cuidado con cualquier esquema que prometa ganancias altas y rápidas: muchas veces es un fraude. Esta lección explica cómo funciona el ahorro; no es un consejo de inversión. Consulta a un asesor de confianza sobre tu propia situación."
          ],
          steps: ["Busca la tasa de inflación actual en tu banco central o tu oficina de estadística.", "Haz la lista de dónde están tus ahorros ahora: efectivo, grupo, SACCO, banco, animales, grano.", "Escribe un riesgo de cada uno.", "Elige una combinación de al menos tres, con un fondo de emergencia que puedas usar rápido.", "Revisa que cada SACCO, banco o institución de microfinanzas tenga licencia.", "Rechaza los esquemas que prometen ganancias altas y rápidas."],
          words: [["Inflación", "una subida general de los precios, así que el mismo dinero compra menos."], ["Interés", "el dinero que un banco o una SACCO te paga por guardar tus ahorros, o el que tú pagas por pedir prestado."], ["Fondo de emergencia", "ahorros guardados para problemas repentinos, como una enfermedad o una cosecha perdida, que puedes usar rápido."], ["VSLA", "asociación de ahorro y préstamo de la comunidad (village savings and loan association): un grupo que ahorra junto, presta a sus miembros y reparte los ahorros y las ganancias."]],
          slides: [
            { title: "La inflación se come el efectivo", bullets: ["Precios un 10% más altos: 10,000 compran lo que hoy compran unos 9,100", "Busca la tasa: banco central u oficina de estadística"] },
            { title: "Cada forma de ahorrar tiene un riesgo", bullets: ["Efectivo: inflación y robo", "Grupo, SACCO, banco: registros, comisiones, interés frente a inflación", "Animales y grano: enfermedad, daño, precios"] },
            { title: "Protege tus ahorros", bullets: ["Repártelos en al menos tres formas", "Ten un fondo de emergencia a mano", "Revisa las licencias (Kenia: lista de SASRA)", "¿Ganancias altas y rápidas? Muchas veces es fraude"] }
          ],
          sources: [CBK, NBS, BCEAO, SASRA],
          tryIt: "Tarea final: escribe tu plan de riesgos de una página: los cinco riesgos principales con sus acciones, un registro de precios de cuatro semanas y su tendencia, tu plan de venta y almacenamiento con el precio de equilibrio del almacenamiento, tus preguntas para un contrato y para un seguro de índice, y tu combinación de ahorros frente a la inflación.",
          youCanNow: "proteger tus ahorros de la inflación con una combinación repartida y con licencia, y reunir todas tus herramientas de riesgo en un solo plan.",
          quickCheck: [
            { objective: "O6", q: "Los precios subieron un 10% este año. ¿Qué pasó con 10,000 guardados en una lata en casa?", options: ["Compran menos que hace un año", "Compran más que antes", "Crecieron a 11,000", "Nada cambió"], answer: 0, why: "El mismo dinero compra menos cuando los precios suben." },
            { objective: "O6", q: "Un grupo promete duplicar tus ahorros en tres meses. ¿Qué es lo más probable?", options: ["Una buena SACCO", "Una oferta normal de un banco", "Un apoyo del gobierno", "Un probable fraude: las ganancias altas y rápidas son una señal de alerta"], answer: 3, why: "Las promesas de ganancias altas y rápidas son una señal común de fraude." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Pasar el riesgo a otros y proteger tu dinero",
        questions: [
          { objective: "O4", q: "¿Qué cedes cuando firmas un contrato de precio fijo?", options: ["El dinero extra si los precios del mercado suben", "Tu tierra", "Todos tus otros cultivos", "Nada"], answer: 0, why: "El precio es fijo, así que no ganas si el mercado sube." },
          { objective: "O4", q: "¿Qué organismo da licencia a la Bolsa de Productos Básicos de Nigeria?", options: ["La Agencia Meteorológica de Nigeria", "La Securities and Exchange Commission (comisión de valores)", "NAFDAC", "El Banco Central de Kenia"], answer: 1, why: "La NCX dice que tiene licencia de la Securities and Exchange Commission." },
          { objective: "O5", q: "¿Qué usa el KLIP de Kenia para decidir cuándo pagar a los pastores?", options: ["La visita de un veterinario a cada rebaño", "El precio del ganado en el mercado", "Imágenes satelitales que muestran que fallan los pastos", "El número de animales vendidos"], answer: 2, why: "El KLIP se basa en un índice: las mediciones satelitales de los pastos activan el pago." },
          { objective: "O5", q: "¿Qué pregunta revisa el riesgo de base?", options: ["¿De qué color es la póliza?", "¿Qué tan rápido es el agente?", "¿Quién más lo compró?", "¿Dónde se mide el índice y qué tan cerca está de mi terreno?"], answer: 3, why: "Cuanto más lejos esté el punto de medición, más puede diferir el índice de tu terreno." },
          { objective: "O6", q: "¿Cuál es una forma sensata de guardar los ahorros con más seguridad?", options: ["Repartirlos entre cuentas con licencia, un grupo y otras formas, con un fondo de emergencia", "Guardar todo el efectivo en una sola lata", "Ponerlo todo en el esquema que promete la ganancia más alta", "Prestárselo todo a un desconocido"], answer: 0, why: "Repartir los ahorros entre lugares revisados limita el daño de cualquier pérdida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Gestión de riesgos agrícolas: precios, clima y seguros",
    questions: [
      { objective: "O1", q: "Una enfermedad en la familia que impide trabajar en la finca es ¿qué tipo de riesgo?", options: ["Riesgo de mercado", "Riesgo de normas", "Riesgo de personas", "Riesgo de producción"], answer: 2, why: "Los riesgos para las personas que manejan la finca son riesgos de personas." },
      { objective: "O1", q: "Probabilidad 2 e impacto 3 dan un puntaje de riesgo de:", options: ["6", "5", "1", "9"], answer: 0, why: "2 x 3 = 6." },
      { objective: "O1", q: "Decidir no sembrar tomate en el mes más lluvioso es ¿qué respuesta?", options: ["Compartirlo", "Aceptarlo", "Ignorarlo", "Evitarlo"], answer: 3, why: "Evitas el riesgo al no asumirlo." },
      { objective: "O1", q: "¿Cuándo debes revisar tu registro de riesgos?", options: ["Nunca", "Antes de cada temporada", "Solo después de un desastre", "Cada diez años"], answer: 1, why: "Los riesgos cambian, así que revísalos antes de las decisiones de cada temporada." },
      { objective: "O2", q: "Los precios de muchos alimentos básicos suelen estar más bajos:", options: ["Justo antes de sembrar", "En los meses de escasez", "Justo después de la cosecha", "Nunca cambian"], answer: 2, why: "En la cosecha muchos agricultores venden a la vez, lo que empuja los precios hacia abajo." },
      { objective: "O2", q: "En Nigeria, ¿qué organismo publica un informe mensual de precios de alimentos por estado?", options: ["La Oficina Nacional de Estadística", "La Agencia Meteorológica de Nigeria", "NAFDAC", "La Securities and Exchange Commission"], answer: 0, why: "La NBS publica cada mes el informe Selected Food Prices Watch." },
      { objective: "O2", q: "¿Qué muestra el cambio del precio del cacao en Costa de Marfil de 2,800 a 1,200 francos CFA por kg?", options: ["Los precios fijos nunca cambian", "El cacao no tiene riesgo", "Solo los comerciantes enfrentan riesgo de precio", "Incluso los precios fijados por el gobierno pueden cambiar mucho entre temporadas"], answer: 3, why: "El precio en finca se redujo después de que bajaran los precios mundiales del cacao." },
      { objective: "O2", q: "Una tendencia de precios se describe mejor como:", options: ["Una promesa del precio del próximo mes", "La dirección general en que se mueven los precios durante semanas o meses", "La oferta de un comprador", "El precio del gobierno"], answer: 1, why: "Una tendencia es una guía basada en precios pasados, no una promesa." },
      { objective: "O3", q: "Diversificar significa:", options: ["Cultivar solo tu mejor cultivo", "Venderlo todo en la cosecha", "Repartir la producción y los ingresos entre varias actividades", "Pedir más prestado"], answer: 2, why: "Varias actividades hacen que un solo fracaso no te arruine." },
      { objective: "O3", q: "Precio en la cosecha 4,000 por saco, 10 sacos, costos de almacenamiento 2,000. ¿Cuál es el precio de equilibrio del almacenamiento?", options: ["4,200", "4,000", "2,000", "6,000"], answer: 0, why: "(4,000 x 10 + 2,000) / 10 = 4,200 por saco." },
      { objective: "O3", q: "Antes de almacenar grano para venderlo después, primero debes:", options: ["Guardarlo húmedo para que pese más", "Mezclarlo con el grano del año pasado", "Vender en la cosecha lo que necesitas de dinero y almacenar solo grano limpio y seco, de forma segura", "Guardarlo todo, aunque necesites dinero ahora"], answer: 2, why: "Cubrir las necesidades de dinero y guardar solo grano limpio y seco evita ventas forzadas y pérdidas." },
      { objective: "O4", q: "Un contrato a plazo es:", options: ["Un préstamo de un banco", "Un acuerdo hecho hoy para vender una cantidad fija a un precio fijo más adelante", "Una póliza de seguro", "Una cuenta de ahorro"], answer: 1, why: "Fija hoy la cantidad y el precio de una venta futura." },
      { objective: "O4", q: "¿Qué término debe cubrir un contrato de precio fijo?", options: ["El cultivo favorito del comprador", "Solo el color de los sacos", "El tamaño de tu familia", "Qué pasa si la cosecha falla o el comprador no recoge"], answer: 3, why: "Estos casos deciden quién carga con la pérdida cuando algo sale mal." },
      { objective: "O4", q: "¿Por qué la cobertura con futuros no es para principiantes?", options: ["Necesita un corredor, depósitos de margen y habilidad, y puede perder dinero", "Es ilegal en África", "Solo funciona con el cacao", "Siempre gana dinero"], answer: 0, why: "Las posiciones en futuros pueden perder dinero y pedir depósitos con poco aviso." },
      { objective: "O4", q: "¿Cómo llega la mayoría de los pequeños productores a una bolsa como la GCX?", options: ["Operando futuros en su teléfono", "Por medio de una cooperativa, un acopiador o una bodega certificada", "Visitando la bolsa todos los días", "No la pueden usar"], answer: 1, why: "Los grupos y las bodegas llevan la producción de los agricultores a la bolsa." },
      { objective: "O5", q: "El seguro de índice paga cuando:", options: ["Informas una pérdida", "Un agente visita tu finca", "El índice medido pasa el disparador", "Se paga la prima"], answer: 2, why: "Los pagos siguen al índice, no a una visita al terreno." },
      { objective: "O5", q: "En el KLIP de Kenia, ¿quién paga la prima de los pastores vulnerables registrados?", options: ["Los propios pastores", "El comprador de ganado", "El banco", "El gobierno"], answer: 3, why: "El KLIP es un programa del gobierno que compra la cobertura para ellos." },
      { objective: "O5", q: "Antes de comprar un seguro de índice debes revisar que la aseguradora tenga licencia. En Nigeria, el regulador es:", options: ["NAICOM", "NAFDAC", "NiMet", "NBS"], answer: 0, why: "NAICOM, la Comisión Nacional de Seguros, regula a las aseguradoras en Nigeria." },
      { objective: "O6", q: "¿Dónde encuentras la tasa de inflación actual?", options: ["Con un comerciante del mercado", "En tu banco central o en la oficina nacional de estadística", "En una publicación de redes sociales", "Con el agente de seguros"], answer: 1, why: "Los bancos centrales y las oficinas de estadística publican las cifras oficiales de inflación." },
      { objective: "O6", q: "¿Cuál es un riesgo de guardar los ahorros en animales?", options: ["Los animales nunca cambian de valor", "Los bancos no los aceptan", "Pueden morir por sequía o enfermedad", "No hay ningún riesgo"], answer: 2, why: "La sequía y las enfermedades pueden acabar con los ahorros guardados en animales." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 5, 7, 9, 11, 13, 15, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y vuelve a revisarla.",
    criteria: [
      { name: "Registro de riesgos", objective: "O1", notYet: "Menos de cinco riesgos, o riesgos sin calificar o sin acciones.", meets: "Al menos ocho riesgos que cubren los cinco tipos, calificados y ordenados, con una acción para cada uno de los cinco principales.", exceeds: "Las acciones tienen fechas y costos, y el plan dice cuándo se revisará el registro." },
      { name: "Registro de precios y tendencia", objective: "O2", notYet: "Menos de cuatro semanas, una sola fuente, o unidades y calidades mezcladas.", meets: "Cuatro semanas de al menos dos fuentes, mismo producto, calidad y unidad, con la tendencia descrita.", exceeds: "Incluye un servicio oficial y los mismos meses del año pasado, y dice qué significa la tendencia para vender." },
      { name: "Plan de venta y almacenamiento", objective: "O3", notYet: "No hay precio de equilibrio del almacenamiento, o se ignoran las necesidades de dinero en la cosecha.", meets: "Precio de equilibrio del almacenamiento correcto, necesidades de dinero cubiertas en la cosecha y ventas planeadas por etapas.", exceeds: "También agrega una segunda actividad o un segundo mercado para repartir el riesgo, y pasos para almacenar con seguridad." },
      { name: "Preguntas sobre contrato y seguro", objective: "O4", notYet: "Menos de cinco términos del contrato, o no hay preguntas sobre el seguro.", meets: "Al menos ocho términos del contrato con una ganancia y un riesgo, y qué significa la cobertura en una oración.", exceeds: "Compara el precio fijo con el precio de equilibrio y el registro de precios." },
      { name: "Revisión del seguro de índice", objective: "O5", notYet: "Falta el índice, el disparador, la prima o el riesgo de base.", meets: "Se responden el índice, el disparador, el pago, la prima, la fecha límite, el riesgo de base y la revisión de la licencia.", exceeds: "Las respuestas vienen de una oferta real cerca de la finca, con el regulador nombrado." },
      { name: "Ahorros frente a la inflación", objective: "O6", notYet: "Una sola forma de ahorrar, o no se nombran riesgos.", meets: "Al menos tres formas comparadas, cada una con un riesgo, la tasa de inflación anotada y las licencias revisadas.", exceeds: "Incluye el monto del fondo de emergencia y una fecha para revisar la combinación." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en todas las filas de la rúbrica del plan de riesgos",
      "Participantes que siguen llevando un registro semanal de precios 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber vendido por etapas o almacenado con seguridad en lugar de venderlo todo en la cosecha",
      "Participantes que dicen haber leído un contrato o una oferta de seguro término por término, o haber rechazado a un prestamista, una aseguradora o un esquema de inversión sin licencia",
      "Cooperativas aliadas informan que menos socios se ven obligados a vender animales o tierras después de una mala temporada"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno y un lápiz, y un teléfono básico para precios por SMS, llamadas o radio",
      "La calculadora del teléfono",
      "Un contrato de comprador y un folleto de seguro de índice de la zona, reales o de ejemplo, si los hay",
      "Unos 80 minutos en total, en sesiones cortas, más cuatro semanas de registro de precios para la tarea final"
    ],
    facilitatorNotes: [
      "En un grupo de agricultores o una sesión de extensión: hagan juntos la prueba inicial y luego un capítulo por sesión; hagan primero el registro de riesgos en grupos pequeños.",
      "Pida a los participantes que empiecen el registro de precios después de la Lección 2 para tener cuatro semanas para la tarea final; recojan los precios en grupo y compártanlos.",
      "Invite a una aseguradora con licencia, a una cooperativa o a un operador de bodega a explicar un producto real, pero no respalde a ninguna empresa; deje que los participantes hagan las preguntas de la lección.",
      "No recomiende operar en ninguna bolsa ni comprar ningún producto financiero; diga con claridad que el curso explica cómo funcionan las cosas y sus riesgos.",
      "Califique el plan de riesgos con la rúbrica y dé comentarios sobre una fila Todavía no a la vez."
    ]
  }
};

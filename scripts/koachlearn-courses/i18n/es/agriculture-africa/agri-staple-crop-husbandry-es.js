"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-staple-crop-husbandry.js). See scripts/koachlearn-courses/README.md, "Translations".

const KEPHIS = { name: "Servicio de Inspección Sanitaria de Plantas de Kenia (KEPHIS): certificación de semillas y Lista Nacional de Variedades", url: "https://www.kephis.go.ke" };
const NASC = { name: "Consejo Nacional de Semillas Agrícolas (NASC, Nigeria): certificación de semillas", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Organización de Investigación Agrícola y Ganadera de Kenia (KALRO)", url: "https://www.kalro.org" };
const IITA = { name: "Instituto Internacional de Agricultura Tropical (IITA)", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (sede en Abiyán, Costa de Marfil)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA: El esfuerzo de un equipo del IITA para manejar los virus que destruyen la yuca en África (2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT: Entender y prevenir la transmisión por semilla de la necrosis letal del maíz (MLN) en África", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS con AfricaRice: Variación genética de la resistencia al añublo en arroz de África Occidental (2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Junta de Productos para el Control de Plagas (PCPB, Kenia): productos registrados", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Nigeria): agroquímicos registrados", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "Manejo de nutrientes 4R en la agricultura africana: manual de extensión para el manejo de fertilizantes", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry-es",
  lang: "es",
  translationOf: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Manejo moderno de cultivos: maíz, arroz, yuca y leguminosas",
  skills: "Elegir variedades y semilla certificada, Calcular la población de plantas y la semilla necesaria a partir de la distancia de siembra, Programar la preparación del terreno, la fertilización y el deshierbe, Reconocer la necrosis letal del maíz, los virus de la yuca y el añublo del arroz, Decidir cuándo cosechar y calcular el rendimiento por hectárea y por acre",
  outcome: "escribir un plan de producción de temporada para un cultivo básico (maíz, arroz, yuca o una leguminosa) en tu propio campo: la variedad y la semilla, la población de plantas y la semilla necesaria, un calendario con fechas para preparar el terreno, sembrar, fertilizar y deshierbar, las enfermedades principales que vigilar y qué hacer, y una meta de rendimiento por hectárea y por acre.",
  about: [
    "Este curso es para pequeños agricultores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes agroemprendedores y extensionistas que cultivan los alimentos básicos que dan de comer a África: maíz, arroz, yuca, frijol, caupí, maní y soya. Los ejemplos vienen de Kenia, Nigeria, Ghana y Costa de Marfil.",
    "El capítulo 1 trata de empezar bien el cultivo: elegir una variedad de tu instituto nacional de investigación y comprar semilla certificada o estacas sanas, preparar el terreno, calcular cuántas plantas necesitas y cuánta semilla comprar, y programar la fertilización y el deshierbe. El capítulo 2 trata de proteger y medir el cultivo: reconocer la necrosis letal del maíz, el mosaico y la estría parda de la yuca y el añublo del arroz, saber cuándo cosechar y calcular tu rendimiento por hectárea y por acre.",
    "El análisis de suelo y los fertilizantes se enseñan en \"Salud y fertilidad del suelo\", y el almacenamiento en \"Manejo y almacenamiento después de la cosecha\", así que este curso te remite a ellos en vez de repetirlos. Las variedades, las distancias y las dosis cambian según la zona, así que usa este curso junto con tu extensionista y tu instituto de investigación. Después de cada lección hay una prueba rápida, una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de producción para un cultivo básico en tu propio campo: el tamaño del campo en hectáreas y en acres, la variedad que elegiste y dónde comprarás semilla certificada o estacas sanas, la distancia de siembra con tu cálculo de la población de plantas y de la semilla o las estacas necesarias, un calendario con fechas (preparación del terreno, siembra, fertilizante según tu análisis de suelo o el extensionista, cada deshierbe), las dos enfermedades principales que vigilar con tu primera respuesta para cada una, cómo decidirás el momento de la cosecha y una meta de rendimiento por hectárea y por acre con tus cálculos.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños agricultores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes agroemprendedores y extensionistas de toda África que cultivan maíz, arroz, yuca y leguminosas (frijol, caupí, maní, soya), desde media acre hasta unas pocas hectáreas.",
    startingPoint: "Llevan años sembrando el cultivo, muchas veces con semilla reciclada o estacas compartidas, siembra al voleo o distancias desiguales, deshierbe tardío y casi ningún registro del rendimiento. Muchos no saben su población de plantas, qué variedad tienen ni cómo calcular el rendimiento por hectárea o por acre.",
    gap: "En muchas fincas africanas, los rendimientos de los cultivos básicos están muy por debajo de lo que pueden dar las variedades mejoradas y un buen manejo. Los participantes necesitan elegir una variedad adecuada y semilla sana, sembrar la población correcta, fertilizar y deshierbar a tiempo, detectar las enfermedades que acaban con los cultivos, cosechar en el momento justo y medir su rendimiento para ver qué funciona.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes tienen el inglés como segunda lengua y el curso también está disponible en inglés, francés y árabe",
      "Matemáticas: multiplicaciones y divisiones sencillas con la calculadora del teléfono; cada cálculo se muestra paso a paso",
      "Dispositivos: un teléfono básico con calculadora; ayudan una cinta métrica o una cuerda marcada y una balanza",
      "Las variedades, las distancias y las dosis de fertilizante cambian según la zona y con la llegada de variedades nuevas; los participantes revisan la lista nacional de variedades y consultan a su extensionista",
      "La fertilidad se enseña en \"Salud y fertilidad del suelo\"; este curso solo cubre lo que cambia en cada cultivo"
    ],
    prerequisites: "Ninguno, pero se recomienda mucho hacer \"Salud y fertilidad del suelo\" antes o al mismo tiempo que este curso."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Para un cultivo básico que sembrarás la próxima temporada", action: "elegir una variedad de tu instituto nacional de investigación o de la lista de variedades y nombrar una fuente registrada de semilla certificada o estacas sanas", standard: "revisando la etiqueta, el sello o la fuente antes de pagar" },
    { id: "O2", condition: "Con una distancia de siembra y el tamaño de tu campo", action: "calcular la población de plantas por hectárea y por acre y la semilla o las estacas que necesitas", standard: "mostrando cada paso del cálculo" },
    { id: "O3", condition: "Para el cultivo y la fecha de siembra que elegiste", action: "programar la preparación del terreno, la siembra, la fertilización y el deshierbe en un calendario con fechas", standard: "con el deshierbe dentro de las semanas críticas del inicio del cultivo" },
    { id: "O4", condition: "Ante las señales de una planta o un campo enfermo", action: "identificar la necrosis letal del maíz, el mosaico de la yuca, la estría parda de la yuca o el añublo del arroz y elegir la primera respuesta", standard: "asociando cada enfermedad con el primer paso correcto" },
    { id: "O5", condition: "Al final de la temporada", action: "decidir cuándo está listo el cultivo y calcular el rendimiento por hectárea y por acre a partir de una cosecha pesada", standard: "usando el área correcta y mostrando tus cálculos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Empezar bien el cultivo",
      lessons: [
        {
          title: "Elegir una variedad y comprar semilla certificada",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir una variedad adecuada para tu zona y nombrar una fuente registrada de semilla certificada o estacas sanas.",
          text: [
            "Una variedad es un tipo del cultivo mejorado para ciertas características: madurez temprana o tardía, tolerancia a la sequía, resistencia a enfermedades, color del grano o calidad para cocinar. Los institutos nacionales de investigación prueban y liberan variedades para cada zona: KALRO en Kenia, los institutos de investigación de Nigeria que trabajan con el IITA (Instituto Internacional de Agricultura Tropical), el CSIR-Crops Research Institute en Ghana y el CNRA en Costa de Marfil. El IITA trabaja en yuca, maíz, caupí y soya, y AfricaRice, con sede en Abiyán, en arroz. Pregunta a tu extensionista qué variedades se recomiendan para tu zona, tu lluvia y tu mercado.",
            "Elige según tus condiciones: variedades precoces para lluvias cortas o zonas secas, variedades tolerantes o resistentes donde una enfermedad es común (por ejemplo la necrosis letal del maíz o la estría parda de la yuca), y lo que quieren los compradores (maíz blanco o amarillo, arroz para sancochar, yuca dulce o amarga).",
            "La semilla certificada es semilla revisada por la autoridad nacional de semillas por su pureza y su germinación. En Kenia, KEPHIS certifica la semilla y publica la Lista Nacional de Variedades, y los paquetes certificados llevan una etiqueta de KEPHIS que puedes verificar. En Nigeria, el Consejo Nacional de Semillas Agrícolas (NASC) certifica la semilla. Compra paquetes sellados y etiquetados en un distribuidor registrado. La semilla de maíz híbrido hay que comprarla nueva cada temporada, porque el rendimiento baja si vuelves a sembrar su grano. Las variedades de polinización libre (OPV) y las leguminosas se pueden guardar unas pocas temporadas si escoges semilla limpia de plantas sanas. Para la yuca, consigue estacas sanas de un multiplicador inspeccionado o de un campo sano, nunca de un campo con mosaico o estría parda. Para la soya, pregunta por un inoculante (rizobio) donde el extensionista lo recomiende."
          ],
          steps: ["Pregunta al extensionista qué variedades se recomiendan para tu zona y tu lluvia.", "Elige según la madurez, la resistencia a enfermedades y lo que quieren los compradores.", "Busca la variedad en la lista nacional donde exista una (por ejemplo la de KEPHIS en Kenia).", "Compra semilla certificada, sellada y etiquetada, en un distribuidor registrado; revisa la fecha y la etiqueta.", "Para la yuca, consigue estacas sanas de un multiplicador inspeccionado o de un campo sano."],
          words: [["Variedad", "un tipo de un cultivo mejorado para ciertas características, como madurez temprana o resistencia a enfermedades."], ["Semilla certificada", "semilla revisada por la autoridad nacional de semillas por su pureza y su germinación."], ["Híbrido", "semilla que viene del cruce de dos líneas madre; rinde bien, pero hay que comprarla nueva cada temporada."], ["OPV", "variedad de polinización libre: semilla que se puede guardar y volver a sembrar unas pocas temporadas si se mantiene limpia."], ["Inoculante", "un producto con bacterias útiles que ayudan a leguminosas como la soya a fijar nitrógeno."]],
          slides: [
            { title: "Las variedades vienen de los institutos de investigación", bullets: ["Kenia: KALRO; Ghana: CSIR-Crops Research Institute", "Costa de Marfil: CNRA; arroz: AfricaRice", "Yuca, caupí, soya, maíz: IITA"] },
            { title: "Elige según tus condiciones", bullets: ["Madurez temprana para temporadas cortas o secas", "Resistencia a las enfermedades locales", "Lo que quieren tus compradores"] },
            { title: "Semilla certificada", bullets: ["Kenia: etiqueta de KEPHIS que puedes verificar", "Nigeria: certificación del NASC", "Sellada, etiquetada, distribuidor registrado"] },
            { title: "Híbridos, OPV y estacas", bullets: ["Maíz híbrido: compra semilla nueva cada temporada", "OPV y leguminosas: guarda semilla limpia unas pocas temporadas", "Yuca: estacas sanas, nunca de campos enfermos"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "Para un cultivo básico que sembrarás la próxima temporada, pide a tu extensionista o a tu tienda agrícola dos variedades recomendadas. Anota su madurez, su resistencia a enfermedades y dónde puedes comprar semilla certificada o estacas sanas. Si estás en Kenia, revisa la variedad y el distribuidor en las listas de KEPHIS.",
          youCanNow: "elegir una variedad adecuada para tu zona y comprar semilla certificada o estacas sanas de una fuente registrada.",
          quickCheck: [
            { objective: "O1", q: "La temporada pasada sembraste maíz híbrido. ¿Puedes volver a sembrar el grano que cosechaste?", options: ["Sí, rendirá lo mismo", "Sí, si lo siembras más junto", "No, el rendimiento baja; compra semilla híbrida certificada nueva", "Solo si lo remojas en agua"], answer: 2, why: "La semilla híbrida pierde vigor en la siguiente generación, así que hace falta semilla nueva cada temporada." },
            { objective: "O1", q: "La yuca de tu vecino tiene hojas con mosaico amarillo. Te ofrece estacas. ¿Qué haces?", options: ["Aceptarlas; las estacas son gratis", "Rechazarlas y conseguir estacas sanas de un multiplicador inspeccionado o de un campo sano", "Aceptarlas y sembrarlas cerca del camino", "Aceptar solo las estacas de arriba"], answer: 1, why: "Los virus de la yuca viajan en las estacas, así que los campos enfermos llevan la enfermedad al tuyo." }
          ]
        },
        {
          title: "Preparación del terreno y población de plantas",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular las plantas por hectárea y por acre a partir de una distancia de siembra, y la semilla o las estacas que necesitas.",
          text: [
            "Prepara el terreno según el cultivo. Limpia sin quemar y deja los rastrojos como cobertura donde puedas. El maíz, el frijol y el maní necesitan una cama de siembra firme con tierra fina alrededor de la semilla; la labranza mínima o los hoyos de siembra funcionan en muchas zonas. En Nigeria y Ghana, la yuca se siembra a menudo en camellones o montículos que drenan bien. El arroz de bajío necesita bordos, un campo nivelado y un buen control del agua; el arroz trasplantado suele ir en terreno fangueado.",
            "La población de plantas es el número de plantas por hectárea. Pocas plantas desperdician tierra; demasiadas compiten por luz, agua y nutrientes. Usa la distancia que da tu guía de extensión para tu variedad y tu zona. Para calcular: área de una planta = distancia entre surcos x distancia entre plantas (en metros). Plantas por hectárea = 10,000 m2 / área por planta. Plantas por acre = 4,047 m2 / área por planta (un acre tiene unos 4,047 m2, y una hectárea equivale a unos 2.47 acres).",
            "Ejemplos resueltos, si tu guía da estas distancias: maíz a 75 cm x 25 cm, una semilla por hoyo: 0.75 x 0.25 = 0.1875 m2, así que 10,000 / 0.1875 = unas 53,300 plantas por hectárea, o 4,047 / 0.1875 = unas 21,600 por acre. Yuca a 1 m x 1 m: 10,000 plantas por hectárea, unas 4,000 por acre. Arroz trasplantado a 20 cm x 20 cm: 0.04 m2, así que 250,000 golpes por hectárea. Frijol a 50 cm x 10 cm: 0.05 m2, así que 200,000 plantas por hectárea.",
            "Semilla necesaria: número de semillas / semillas por kg (cuenta y pesa 100 semillas, o lee el paquete) = kg, más un 10% para fallas. Para la yuca, cuenta las estacas (a menudo de unos 20 a 25 cm de largo, de tallos maduros), más unas cuantas de reserva. Luego resiembra las fallas una o dos semanas después de la emergencia."
          ],
          steps: ["Mide tu campo en metros; área = largo x ancho.", "Consigue la distancia recomendada para tu variedad y tu zona.", "Área por planta = distancia entre surcos x distancia entre plantas (en metros).", "Plantas por hectárea = 10,000 / área por planta; por acre = 4,047 / área por planta.", "Plantas en tu campo = área del campo / área por planta.", "Semilla: plantas / semillas por kg, más un 10%."],
          words: [["Población de plantas", "el número de plantas por hectárea o por acre."], ["Hectárea (ha)", "un área de 10,000 metros cuadrados, unos 2.47 acres."], ["Acre", "un área de unos 4,047 metros cuadrados, unas 0.4 hectáreas."], ["Bordo", "un muro bajo de tierra alrededor de un campo de arroz que retiene el agua."], ["Fangueo", "trabajar el suelo mojado de un campo de arroz para hacer un lodo suave que retiene el agua y controla las malezas."]],
          slides: [
            { title: "Prepara el terreno según el cultivo", bullets: ["No quemes; deja los rastrojos como cobertura", "Cama de siembra fina para maíz, frijol, maní", "Camellones o montículos para yuca; bordos y nivelación para arroz"] },
            { title: "La fórmula de la población de plantas", bullets: ["Área por planta = surco x planta (m)", "Por hectárea = 10,000 / área por planta", "Por acre = 4,047 / área por planta"] },
            { title: "Ejemplos resueltos", bullets: ["Maíz 75 x 25 cm: unas 53,300/ha, 21,600/acre", "Yuca 1 x 1 m: 10,000/ha", "Arroz 20 x 20 cm: 250,000 golpes/ha"] },
            { title: "¿Cuánta semilla?", bullets: ["Plantas / semillas por kg, más un 10%", "Cuenta y pesa 100 semillas si el paquete no lo dice", "Resiembra las fallas en una o dos semanas"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Mide uno de tus campos (o multiplica su tamaño en acres por 4,047 para tener metros cuadrados). Pide al extensionista la distancia para tu cultivo y luego calcula las plantas por hectárea, por acre y en tu campo, y cuánta semilla o cuántas estacas comprar.",
          youCanNow: "calcular la población de plantas por hectárea y por acre a partir de una distancia de siembra, y cuánta semilla o cuántas estacas necesitas.",
          quickCheck: [
            { objective: "O2", q: "La yuca se siembra a 1 m x 1 m. ¿Cuántas plantas hay por hectárea?", options: ["1,000", "4,047", "100,000", "10,000"], answer: 3, why: "Cada planta ocupa 1 m2, y una hectárea tiene 10,000 m2." },
            { objective: "O2", q: "Un campo mide 0.5 hectáreas y el maíz necesita unas 53,300 plantas por hectárea. ¿Cuántas plantas necesitas, más o menos?", options: ["26,650", "53,300", "106,600", "5,330"], answer: 0, why: "0.5 x 53,300 = 26,650 plantas." }
          ]
        },
        {
          title: "Fertilizar y deshierbar a tiempo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Programar la siembra, la fertilización y el deshierbe de tu cultivo en un calendario con fechas.",
          text: [
            "El análisis de suelo, el estiércol, la composta y los fertilizantes se enseñan en \"Salud y fertilidad del suelo\"; usa tu análisis de suelo o el consejo de tu extensionista para saber qué aplicar y cuánto. Lo que cambia según el cultivo es cuándo y qué necesita más cada uno. El maíz tiene mucha hambre de nitrógeno y lo necesita temprano y otra vez cuando crece rápido. Las leguminosas (frijol, caupí, maní, soya) producen buena parte de su propio nitrógeno con los nódulos de sus raíces, así que necesitan más fósforo que nitrógeno. La yuca crece en suelos más pobres, pero con el tiempo saca mucho potasio del suelo. El arroz suele recibir el nitrógeno en dosis divididas; demasiado nitrógeno empeora el añublo del arroz.",
            "Las malezas roban agua, luz y nutrientes sobre todo en las primeras semanas después de que nace el cultivo. Es el periodo crítico: ahí las malezas quitan más rendimiento, y deshierbar después no lo recupera. Muchas guías dan un primer deshierbe unas dos o tres semanas después de que nace el cultivo y un segundo unas semanas después; revisa tu guía local. La yuca crece despacio al principio y hay que mantenerla limpia más o menos sus primeros tres meses, hasta que sus hojas cubren el suelo. En el arroz de bajío, una buena nivelación y mantener agua en el campo ayudan a frenar las malezas.",
            "Los herbicidas pueden ahorrar mano de obra, pero deben estar registrados para tu cultivo (PCPB en Kenia, NAFDAC en Nigeria) y usarse como dice la etiqueta, con equipo de protección. Pon todo en un calendario contado desde la fecha de siembra, para que el trabajo y el dinero estén listos a tiempo."
          ],
          steps: ["Escribe tu fecha de siembra.", "Agrega la preparación del terreno en las semanas anteriores.", "Agrega la fertilización según tu análisis de suelo o el extensionista, en la etapa correcta del cultivo.", "Agrega el primer deshierbe dentro de las semanas críticas del inicio, y los siguientes.", "Anota cuándo necesitas mano de obra, insumos y dinero para cada labor."],
          words: [["Periodo crítico", "las primeras semanas, cuando las malezas causan la mayor pérdida de rendimiento; hay que deshierbar entonces."], ["Nódulos de la raíz", "pequeños bultos en las raíces de las leguminosas donde unas bacterias convierten el nitrógeno del aire en alimento para la planta."], ["Dosis dividida", "dar el fertilizante en dos o más partes en distintas etapas del cultivo en vez de todo de una vez."], ["Herbicida", "un químico que mata malezas; debe estar registrado y usarse como dice su etiqueta."]],
          slides: [
            { title: "Fertilidad: ver Salud y fertilidad del suelo", bullets: ["Usa tu análisis de suelo o el consejo del extensionista", "Esta lección: lo que cambia según el cultivo"] },
            { title: "Lo que más necesita cada cultivo", bullets: ["Maíz: nitrógeno, temprano y mientras crece", "Leguminosas: fósforo; producen su propio nitrógeno", "Yuca: potasio con el tiempo; arroz: nitrógeno en dosis divididas"] },
            { title: "Deshierba en el periodo crítico", bullets: ["Las primeras semanas tras la emergencia son las que más cuentan", "A menudo, primer deshierbe a las 2 o 3 semanas; revisa tu guía local", "Yuca: limpia más o menos los primeros 3 meses"] },
            { title: "Ponlo en un calendario", bullets: ["Cuenta desde la fecha de siembra", "Mano de obra, insumos y dinero listos a tiempo", "Herbicidas: registrados, etiqueta, EPP"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Escribe un calendario para tu cultivo a partir de la fecha de siembra que planeas: preparación del terreno, siembra, cada fertilización que aconsejen tu análisis de suelo o tu extensionista, y cada deshierbe. Marca el periodo crítico de deshierbe con otro color.",
          youCanNow: "planear la fertilización y el deshierbe en un calendario con fechas para controlar las malezas en las semanas críticas del inicio.",
          quickCheck: [
            { objective: "O3", q: "¿Cuándo causan las malezas la mayor pérdida de rendimiento?", options: ["Justo antes de la cosecha", "En las primeras semanas después de que nace el cultivo", "Después de la cosecha", "Solo en la temporada seca"], answer: 1, why: "El periodo crítico son las primeras semanas; deshierbar después no recupera ese rendimiento." },
            { objective: "O3", q: "¿Qué cultivo produce buena parte de su propio nitrógeno con los nódulos de sus raíces?", options: ["El maíz", "El arroz", "La yuca", "El frijol"], answer: 3, why: "Las leguminosas como el frijol fijan nitrógeno con ayuda de las bacterias de sus nódulos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Empezar bien el cultivo",
        questions: [
          { objective: "O1", q: "En Kenia, ¿qué entidad certifica la semilla y publica la Lista Nacional de Variedades?", options: ["KEPHIS", "La oficina de caminos del condado", "El mercado local", "El banco"], answer: 0, why: "KEPHIS certifica la semilla y registra las variedades liberadas en Kenia." },
          { objective: "O1", q: "En tu zona las lluvias suelen ser cortas. ¿Qué característica de la variedad importa más?", options: ["Madurez tardía", "Madurez temprana", "Tallos altos", "Grano rojo"], answer: 1, why: "Una variedad precoz termina antes de que se acaben las lluvias." },
          { objective: "O2", q: "¿Cuánta área por planta ocupa el maíz a 75 cm x 25 cm?", options: ["1 m2", "0.25 m2", "0.1875 m2", "0.75 m2"], answer: 2, why: "0.75 m x 0.25 m = 0.1875 m2." },
          { objective: "O2", q: "¿Cuántos metros cuadrados tiene un acre, más o menos?", options: ["10,000", "1,000", "2,470", "4,047"], answer: 3, why: "Un acre tiene unos 4,047 m2; una hectárea tiene 10,000 m2." },
          { objective: "O3", q: "¿A dónde te manda este curso para las dosis de fertilizante?", options: ["A tu análisis de suelo y a tu extensionista, como en Salud y fertilidad del suelo", "Al bulto más grande de la tienda", "A lo que usó un vecino", "A una cantidad fija para cada cultivo"], answer: 0, why: "Las dosis dependen de tu suelo y tu cultivo, así que vienen de un análisis de suelo o del extensionista." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger y medir el cultivo",
      lessons: [
        {
          title: "Enfermedades clave: necrosis letal del maíz, virus de la yuca y añublo del arroz",
          objectives: ["O4"],
          minutes: 6,
          goal: "Identificar la necrosis letal del maíz, el mosaico de la yuca, la estría parda de la yuca y el añublo del arroz y elegir una primera respuesta.",
          text: [
            "La necrosis letal del maíz (MLN) golpeó fuerte a Kenia desde 2011 y se extendió por África Oriental. El CIMMYT (Centro Internacional de Mejoramiento de Maíz y Trigo) explica que aparece cuando el maíz se infecta con dos virus a la vez: el maize chlorotic mottle virus y un potyvirus como el sugarcane mosaic virus. Las hojas muestran un moteado amarillo y luego se secan desde los bordes hacia adentro; el centro de la planta puede morir, y las mazorcas salen pequeñas, vacías o podridas. Insectos como los trips y los pulgones la contagian en el campo, y la semilla infectada puede llevarla a grandes distancias. Respuesta: siembra semilla certificada de variedades tolerantes a la MLN, deja de sembrar maíz una temporada junto con tus vecinos, saca el maíz espontáneo, controla las malezas, arranca y destruye pronto las plantas enfermas y avisa al extensionista.",
            "La enfermedad del mosaico de la yuca (CMD) deja las hojas con manchas amarillas y verdes (mosaico), torcidas y pequeñas, y frena el crecimiento de la planta. La enfermedad de la estría parda de la yuca (CBSD) muestra manchas amarillas a lo largo de las venas de las hojas viejas y rayas pardas en los tallos, pero el peor daño está escondido: las raíces sufren una pudrición dura, parda y seca, a veces cuando las hojas se ven casi sanas. El IITA calcula que estas dos enfermedades le cuestan a África unos 1,000 millones de dólares estadounidenses (US$1 billion) al año. La mosca blanca contagia las dos, pero la principal forma de llevarlas lejos es que los agricultores compartan estacas infectadas. Respuesta: siembra estacas sanas de variedades tolerantes, arranca y destruye pronto las plantas enfermas, nunca tomes estacas de campos enfermos y, en África Oriental, saca unas cuantas raíces antes de la cosecha para revisar si hay pudrición parda.",
            "El añublo del arroz es una enfermedad causada por un hongo y un gran problema en África Occidental. En las hojas hace manchas en forma de rombo o de ojo, con el centro gris y el borde pardo. Cuando ataca el cuello debajo de la panícula, la panícula se pone blanca y vacía. Investigaciones con AfricaRice encontraron que las variedades resistentes son el control más barato para los pequeños agricultores, pero el hongo puede vencer la resistencia unos años después de que una variedad se siembra mucho, así que las variedades nuevas importan. Respuesta: siembra una variedad recomendada como resistente, evita el exceso de nitrógeno, evita el estrés por sequía en el arroz de secano, usa semilla limpia y retira los rastrojos infectados. Usa un fungicida solo si el extensionista lo aconseja y si está registrado para el arroz."
          ],
          steps: ["Monitorea cada semana; compara lo que ves con las señales de esta lección.", "Fotografía las plantas enfermas y pide al extensionista o a una clínica de plantas que lo confirme.", "Arranca y destruye pronto las plantas enfermas (MLN y virus de la yuca).", "La próxima temporada: semilla certificada o estacas sanas de una variedad tolerante o resistente.", "Coordina con tus vecinos la rotación y el material de siembra sano."],
          words: [["MLN", "necrosis letal del maíz: una enfermedad causada por dos virus juntos que puede matar las plantas de maíz."], ["CMD", "enfermedad del mosaico de la yuca: una enfermedad viral que deja las hojas de la yuca manchadas, torcidas y pequeñas."], ["CBSD", "enfermedad de la estría parda de la yuca: una enfermedad viral que causa una pudrición parda y seca en las raíces de la yuca."], ["Añublo del arroz", "una enfermedad del arroz causada por un hongo que hace manchas en forma de ojo en las hojas y puede dejar las panículas blancas y vacías."], ["Arrancar (depurar)", "sacar y destruir las plantas enfermas para que no contagien la enfermedad."]],
          slides: [
            { title: "Necrosis letal del maíz (MLN)", bullets: ["Dos virus juntos (CIMMYT)", "Moteado amarillo, hojas que se secan desde los bordes", "La contagian insectos y semilla infectada"] },
            { title: "Mosaico y estría parda de la yuca", bullets: ["CMD: hojas manchadas, torcidas, pequeñas", "CBSD: venas amarillas, rayas en el tallo, pudrición parda de la raíz", "La contagian la mosca blanca y las estacas compartidas"] },
            { title: "Añublo del arroz", bullets: ["Manchas en forma de ojo, centro gris, borde pardo", "Añublo del cuello: panículas blancas y vacías", "La resistencia puede caer después de unos años"] },
            { title: "Primeras respuestas", bullets: ["Confirma con el extensionista o una clínica de plantas", "Arranca pronto las plantas enfermas", "Próxima temporada: semilla sana, variedades tolerantes, rotación"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Recorre tu campo (o el de un vecino) y busca las señales de la enfermedad que más importa para tu cultivo. Anota lo que viste, toma una foto de cualquier cosa dudosa y escribe la primera respuesta que darías a esa enfermedad.",
          youCanNow: "reconocer la necrosis letal del maíz, el mosaico de la yuca, la estría parda de la yuca y el añublo del arroz y elegir una primera respuesta.",
          quickCheck: [
            { objective: "O4", q: "Las hojas de tu yuca se ven casi sanas, pero las raíces que sacas tienen una pudrición dura, parda y seca. La causa más probable es:", options: ["La enfermedad de la estría parda de la yuca", "Demasiada lluvia en la siembra", "El gusano cogollero", "El añublo del arroz"], answer: 0, why: "La CBSD pudre las raíces, a veces con señales leves en las hojas." },
            { objective: "O4", q: "Las hojas del arroz tienen manchas en forma de ojo con el centro gris y el borde pardo. ¿Qué es una buena respuesta?", options: ["Agregar más fertilizante nitrogenado", "Volver a sembrar la misma semilla la próxima temporada", "Pedir al extensionista que confirme el añublo y sembrar una variedad resistente la próxima temporada", "Inundar la casa"], answer: 2, why: "Son manchas de añublo; las variedades resistentes y un nitrógeno equilibrado son los controles principales." }
          ]
        },
        {
          title: "Saber cuándo cosechar",
          objectives: ["O5"],
          minutes: 4,
          goal: "Decidir cuándo tu maíz, arroz, yuca o leguminosa está listo para cosechar.",
          text: [
            "Si cosechas muy temprano, el grano sale liviano y húmedo; si cosechas muy tarde, pierdes cosecha por los pájaros, las ratas, la lluvia, el desgrane y la pudrición, y el grano tiene más riesgo de aflatoxinas. El secado y el almacenamiento se enseñan en \"Manejo y almacenamiento después de la cosecha\".",
            "El maíz está maduro cuando se forma una capa negra donde el grano se une a la mazorca y las hojas que la cubren están secas; abre unas cuantas mazorcas y parte unos granos para revisar. Luego sécalo bien antes de guardarlo. El arroz está listo cuando la mayoría de los granos de las panículas se han puesto dorados y duros; esperar demasiado trae desgrane y pérdidas por pájaros. El frijol y el caupí están listos cuando la mayoría de las vainas están secas y suenan; cosecha antes de que se abran. El maní está listo cuando las hojas se ponen amarillas y el interior de la mayoría de las cáscaras se ha oscurecido; saca unas cuantas plantas para revisar.",
            "La yuca no tiene un solo día de cosecha: cada variedad tiene su periodo de madurez, y las raíces pueden quedarse un tiempo en la tierra. Pero las raíces que se dejan demasiado tiempo pueden volverse leñosas, y donde la estría parda es común la pudrición empeora. Una vez arrancada, la yuca se echa a perder en pocos días, así que cosecha solo lo que puedas vender o procesar rápido. En Ghana y Nigeria, muchos agricultores programan la cosecha según la capacidad del procesador de gari o de fufú."
          ],
          steps: ["Averigua el periodo de madurez de tu variedad en el paquete de semilla o con el extensionista.", "Revisa unas cuantas plantas por todo el campo, no solo una.", "Maíz: capa negra y hojas de la mazorca secas; arroz: la mayoría de los granos dorados y duros.", "Leguminosas: vainas secas que suenan; maní: interior de la cáscara oscuro.", "Yuca: cosecha solo lo que puedas vender o procesar en pocos días."],
          words: [["Capa negra", "una mancha oscura donde el grano de maíz se une a la mazorca; muestra que el grano dejó de llenarse."], ["Desgrane", "granos o vainas que se caen o se abren en el campo antes de la cosecha."], ["Periodo de madurez", "el tiempo que tarda una variedad desde la siembra hasta la cosecha."]],
          slides: [
            { title: "Muy temprano o muy tarde: los dos pierden", bullets: ["Temprano: grano liviano y húmedo", "Tarde: pájaros, ratas, lluvia, desgrane, pudrición", "Secado y almacenamiento: ver el curso de poscosecha"] },
            { title: "Cultivos de grano", bullets: ["Maíz: capa negra, hojas de la mazorca secas", "Arroz: la mayoría de los granos dorados y duros", "Revisa varias plantas por todo el campo"] },
            { title: "Leguminosas y yuca", bullets: ["Frijol, caupí: vainas secas que suenan", "Maní: el interior de la cáscara se oscurece", "Yuca: se echa a perder en días una vez arrancada"] }
          ],
          tryIt: "Para tu cultivo, escribe el periodo de madurez de la variedad, las señales que vas a revisar y la fecha en que esperas empezar a revisar. Si tu cultivo está ahora en el campo, revisa cinco plantas por todo el campo y anota lo que ves.",
          youCanNow: "decidir cuándo tu cultivo básico está listo para cosechar.",
          quickCheck: [
            { objective: "O5", q: "¿Cómo sabes que el grano de maíz dejó de llenarse?", options: ["Las hojas siguen verdes", "Se forma una capa negra donde el grano se une a la mazorca", "Aparece la espiga", "Ha llovido dos veces"], answer: 1, why: "La capa negra muestra la madurez fisiológica." },
            { objective: "O5", q: "¿Por qué cosechar solo la yuca que puedas vender o procesar en pocos días?", options: ["Las raíces de yuca se echan a perder rápido una vez arrancadas", "Las raíces de yuca vuelven a crecer después de arrancarlas", "Los compradores prefieren raíces secas", "Las hojas son el producto principal"], answer: 0, why: "Las raíces frescas de yuca se dañan en pocos días después de la cosecha." }
          ]
        },
        {
          title: "Calcular el rendimiento y escribir tu plan de producción",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Calcular el rendimiento por hectárea y por acre y escribir un plan de producción para un cultivo básico en tu campo.",
          text: [
            "El rendimiento es el peso de cosecha que obtienes por área. Para saberlo, pesa tu cosecha después de secarla y conoce el área exacta de donde salió. Rendimiento por hectárea = kg cosechados / área en m2 x 10,000. Rendimiento por acre = kg cosechados / área en m2 x 4,047. O de por hectárea a por acre: divide entre 2.47.",
            "Ejemplo, maíz en Kenia: cosechas 1,350 kg de grano seco de un campo de 3,000 m2. Por hectárea: 1,350 / 3,000 x 10,000 = 4,500 kg, o 4.5 toneladas. Por acre: 4,500 / 2.47 = unos 1,820 kg, que son unos 20 costales de 90 kg. Una estimación rápida antes de la cosecha: marca un cuadro de 10 m x 10 m (100 m2) en una parte típica del campo, cosecha y seca lo que hay, pésalo y multiplica por 100 para tener kg por hectárea. Hazlo en dos o tres lugares y saca el promedio.",
            "Ahora junta todo el curso en un plan de producción para un cultivo básico en tu propio campo: el tamaño del campo, la variedad y la fuente de semilla, la distancia de siembra con tu población de plantas y la semilla necesaria, un calendario con fechas para preparar el terreno, sembrar, fertilizar y deshierbar, las enfermedades principales y tu primera respuesta, cómo decidirás la cosecha y una meta de rendimiento por hectárea y por acre. Después de la cosecha, compara el rendimiento real con tu meta y escribe qué vas a cambiar. Una agricultora de Costa de Marfil que anota el rendimiento de su arroz cada temporada puede mostrarle a un comprador, a una cooperativa o a un prestamista lo que produce su campo."
          ],
          steps: ["Mide en m2 el área cosechada.", "Pesa en kg la cosecha seca.", "Por hectárea = kg / m2 x 10,000; por acre = kg / m2 x 4,047.", "O muestrea 100 m2 en 2 o 3 lugares, pesa y multiplica por 100 para tener kg/ha.", "Escribe el plan: variedad, semilla, población, calendario, enfermedades, cosecha, meta de rendimiento.", "Después de la cosecha, compara el rendimiento real con la meta."],
          words: [["Rendimiento", "la cantidad de cosecha por área, como kg por hectárea o costales por acre."], ["Tonelada", "1,000 kilogramos."], ["Parcela de muestra", "un área pequeña marcada que se cosecha y se pesa para estimar el rendimiento de todo el campo."]],
          slides: [
            { title: "Fórmulas de rendimiento", bullets: ["Por ha = kg / área (m2) x 10,000", "Por acre = kg / área (m2) x 4,047", "De por ha a por acre: divide entre 2.47"] },
            { title: "Ejemplo resuelto: maíz", bullets: ["1,350 kg de 3,000 m2", "= 4,500 kg/ha (4.5 t/ha)", "= unos 1,820 kg/acre, unos 20 costales de 90 kg"] },
            { title: "Estimación con parcela de muestra", bullets: ["Marca 10 m x 10 m (100 m2)", "Cosecha, seca, pesa; x 100 = kg/ha", "Hazlo en 2 o 3 lugares y saca el promedio"] },
            { title: "Tu plan de producción", bullets: ["Variedad, semilla, población, calendario", "Enfermedades y primeras respuestas", "Señales de cosecha y meta de rendimiento por ha y por acre"] }
          ],
          tryIt: "Tarea final: escribe tu plan de producción para un cultivo básico en tu propio campo: tamaño del campo en hectáreas y en acres, variedad y fuente de semilla, distancia de siembra con la población de plantas y la semilla necesaria calculadas, un calendario con fechas (preparación del terreno, siembra, fertilización, deshierbe), las dos enfermedades principales y tu primera respuesta a cada una, las señales de cosecha y una meta de rendimiento por hectárea y por acre con tus cálculos.",
          youCanNow: "calcular el rendimiento por hectárea y por acre y escribir un plan de producción para un cultivo básico en tu propio campo.",
          quickCheck: [
            { objective: "O5", q: "Cosechaste 900 kg de frijol seco de 4,047 m2. ¿Cuál es el rendimiento por acre?", options: ["Unos 450 kg", "Unos 2,224 kg", "900 kg", "Unos 4,047 kg"], answer: 2, why: "4,047 m2 es un acre, así que el rendimiento es de 900 kg por acre." },
            { objective: "O5", q: "Una parcela de muestra de 100 m2 da 40 kg de maíz seco. ¿Cuál es el rendimiento estimado por hectárea?", options: ["40 kg", "400 kg", "40,000 kg", "4,000 kg"], answer: 3, why: "Una hectárea es 100 veces 100 m2, así que 40 x 100 = 4,000 kg por hectárea." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Proteger y medir el cultivo",
        questions: [
          { objective: "O4", q: "La necrosis letal del maíz la causan:", options: ["Demasiado sol", "Dos virus que infectan la planta al mismo tiempo", "La falta de potasio", "Solo el gusano cogollero"], answer: 1, why: "El CIMMYT explica la MLN como una infección conjunta de dos virus." },
          { objective: "O4", q: "¿Cuál es la principal forma en que los virus de la yuca llegan lejos?", options: ["El viento que lleva las hojas", "Las salpicaduras de lluvia", "Compartir estacas infectadas", "Los excrementos de los pájaros"], answer: 2, why: "La mosca blanca los contagia cerca; las estacas infectadas los llevan lejos." },
          { objective: "O4", q: "¿Qué costumbre empeora el añublo del arroz?", options: ["Demasiado fertilizante nitrogenado", "Usar semilla limpia", "Sembrar una variedad resistente", "Retirar los rastrojos infectados"], answer: 0, why: "Mucho nitrógeno deja al arroz más expuesto al añublo." },
          { objective: "O5", q: "El arroz está listo para cosechar cuando:", options: ["Se abren las primeras flores", "Las hojas están verde oscuro", "Lleva un mes en el campo", "La mayoría de los granos de las panículas están dorados y duros"], answer: 3, why: "Los granos dorados y duros muestran que el cultivo está maduro; cosechar tarde causa desgrane y pérdidas por pájaros." },
          { objective: "O5", q: "Obtienes 4,940 kg por hectárea. ¿Cuánto es eso por acre, más o menos?", options: ["2,000 kg", "12,200 kg", "4,940 kg", "494 kg"], answer: 0, why: "4,940 / 2.47 = 2,000 kg por acre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Manejo moderno de cultivos: maíz, arroz, yuca y leguminosas",
    questions: [
      { objective: "O1", q: "¿Dónde debes buscar primero variedades adecuadas para tu zona?", options: ["En un anuncio de redes sociales", "En tu instituto nacional de investigación y con tu extensionista", "En la semilla más barata del mercado", "En el granero de la temporada pasada"], answer: 1, why: "Los institutos de investigación prueban y liberan variedades para cada zona." },
      { objective: "O1", q: "¿Qué entidad certifica la semilla en Nigeria?", options: ["NAFDAC", "El banco central", "KEPHIS", "El Consejo Nacional de Semillas Agrícolas (NASC)"], answer: 3, why: "El NASC certifica la semilla en Nigeria." },
      { objective: "O1", q: "¿Qué debes revisar antes de pagar un paquete de semilla certificada?", options: ["El sello, la etiqueta y la fecha", "Solo el color del costal", "Solo el precio", "Nada"], answer: 0, why: "Un paquete sellado, etiquetado y fechado de un distribuidor registrado te protege de la semilla falsa." },
      { objective: "O1", q: "¿Qué centro del CGIAR trabaja en arroz en África?", options: ["IITA", "ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "AfricaRice, con sede en Abiyán, trabaja en arroz." },
      { objective: "O2", q: "¿Cuántos metros cuadrados tiene una hectárea?", options: ["4,047", "1,000", "100", "10,000"], answer: 3, why: "Una hectárea es 100 m x 100 m = 10,000 m2." },
      { objective: "O2", q: "¿Cuántos golpes por hectárea da el arroz trasplantado a 20 cm x 20 cm?", options: ["25,000", "250,000", "2,500", "40,000"], answer: 1, why: "0.2 x 0.2 = 0.04 m2; 10,000 / 0.04 = 250,000." },
      { objective: "O2", q: "¿Más o menos cuántas plantas por acre necesita el frijol a 50 cm x 10 cm?", options: ["Unas 80,900", "Unas 200,000", "Unas 8,090", "Unas 40,470"], answer: 0, why: "0.5 x 0.1 = 0.05 m2; 4,047 / 0.05 = unas 80,900." },
      { objective: "O2", q: "¿Por qué agregar un 10% más de semilla?", options: ["Para alimentar a los pájaros", "Para que el costal pese más", "Para cubrir las semillas que fallan y resembrar las fallas", "Porque lo dice la ley"], answer: 2, why: "Algunas semillas no nacen; la semilla extra te permite resembrar las fallas." },
      { objective: "O3", q: "¿Qué necesitan las leguminosas más que el nitrógeno?", options: ["Sal", "Fósforo", "Azúcar", "Cal cada semana"], answer: 1, why: "Las leguminosas fijan buena parte de su propio nitrógeno, pero aun así necesitan fósforo." },
      { objective: "O3", q: "¿Cuándo debe hacerse por lo general el primer deshierbe?", options: ["Justo antes de la cosecha", "Solo si las malezas florecen", "Cuando el cultivo pasa la rodilla y está espigando", "En las semanas críticas del inicio, a menudo unas 2 o 3 semanas después de que nace el cultivo"], answer: 3, why: "Las malezas quitan más rendimiento en las primeras semanas." },
      { objective: "O3", q: "¿Por qué poner tu temporada en un calendario contado desde la siembra?", options: ["Para que la mano de obra, los insumos y el dinero estén listos a tiempo", "Para impresionar a las visitas", "Porque las semillas leen calendarios", "No sirve de nada"], answer: 0, why: "Un calendario con fechas asegura que cada labor se haga en la etapa correcta del cultivo." },
      { objective: "O3", q: "¿Más o menos cuánto tiempo hay que mantener la yuca libre de malezas?", options: ["Una semana", "Solo después de la cosecha", "Más o menos sus primeros tres meses, hasta que sus hojas cubren el suelo", "Nunca"], answer: 2, why: "La yuca crece despacio al principio y necesita control temprano de malezas hasta que se cierra el follaje." },
      { objective: "O4", q: "Un moteado amarillo en las hojas del maíz que luego se secan desde los bordes, con mazorcas pequeñas o podridas, indica:", options: ["Necrosis letal del maíz", "Añublo del arroz", "Buena salud", "Demasiado potasio"], answer: 0, why: "Son señales típicas de la MLN." },
      { objective: "O4", q: "Hojas de yuca con manchas amarillas y verdes, torcidas y pequeñas, indican:", options: ["Solo estría parda de la yuca", "Falta de sol", "Enfermedad del mosaico de la yuca", "Gusano cogollero"], answer: 2, why: "El dibujo de mosaico en las hojas y la torcedura son las señales de la CMD." },
      { objective: "O4", q: "¿Qué debes hacer primero con unas cuantas plantas que muestran señales de MLN o de virus de la yuca?", options: ["Sacar estacas de ellas", "Confirmar con el extensionista y arrancarlas y destruirlas pronto", "Echarles fertilizante", "Dejar que se recuperen"], answer: 1, why: "Arrancarlas pronto elimina la fuente del virus." },
      { objective: "O4", q: "¿Por qué se siguen liberando variedades nuevas de arroz resistentes al añublo?", options: ["La semilla vieja cambia de color", "Los agricultores se aburren", "El arroz necesita más agua cada año", "El hongo puede vencer la resistencia unos años después de que una variedad se siembra mucho"], answer: 3, why: "La resistencia al añublo puede caer, así que los fitomejoradores siguen desarrollando variedades nuevas." },
      { objective: "O5", q: "El maní está listo cuando:", options: ["Florece por primera vez", "Las hojas se ponen amarillas y el interior de la mayoría de las cáscaras se ha oscurecido", "Ha llovido una vez", "Las vainas están blandas y blancas por dentro"], answer: 1, why: "El interior oscuro de la cáscara y las hojas amarillas muestran la madurez." },
      { objective: "O5", q: "Cosechaste 600 kg de maíz seco de 1,500 m2. ¿Cuál es el rendimiento por hectárea?", options: ["600 kg", "9,000 kg", "1,500 kg", "4,000 kg"], answer: 3, why: "600 / 1,500 x 10,000 = 4,000 kg por hectárea." },
      { objective: "O5", q: "Para pasar un rendimiento por hectárea a rendimiento por acre:", options: ["Divides entre 2.47", "Multiplicas por 2.47", "Sumas 4,047", "Divides entre 10"], answer: 0, why: "Una hectárea son unos 2.47 acres, así que el rendimiento por acre es menor." },
      { objective: "O5", q: "¿Por qué comparar tu rendimiento real con la meta de tu plan después de la cosecha?", options: ["Lo exige la empresa de semillas", "Para ver qué funcionó y qué cambiar la próxima temporada", "Para recibir un costal de fertilizante gratis", "No sirve de nada"], answer: 1, why: "Comparar los resultados con el plan muestra dónde mejorar." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y revísala otra vez con tu extensionista.",
    criteria: [
      { name: "Variedad y semilla", objective: "O1", notYet: "No nombra ninguna variedad, o la semilla es grano de híbrido reciclado o estacas de un campo enfermo.", meets: "Nombra una variedad recomendada para la zona, con una fuente registrada de semilla certificada o estacas sanas.", exceeds: "Compara dos variedades por madurez, resistencia a enfermedades y mercado, y explica su elección." },
      { name: "Población de plantas y semilla necesaria", objective: "O2", notYet: "No hay distancia ni cálculo, o las cuentas están mal.", meets: "La distancia, las plantas por hectárea, por acre y en el campo, y la semilla o las estacas necesarias están bien calculadas, con los pasos a la vista.", exceeds: "También planea la resiembra de fallas y un conteo de plantas después de la emergencia para revisar la población real." },
      { name: "Calendario con fechas", objective: "O3", notYet: "Las labores están en lista sin fechas, o el deshierbe es tardío.", meets: "La preparación del terreno, la siembra, la fertilización (según un análisis de suelo o el extensionista) y cada deshierbe tienen fecha contada desde la siembra, con el primer deshierbe dentro del periodo crítico.", exceeds: "La mano de obra, los insumos y el dinero necesarios para cada labor están en el calendario." },
      { name: "Vigilancia de enfermedades", objective: "O4", notYet: "No nombra enfermedades, o las respuestas no corresponden.", meets: "Nombra las dos enfermedades principales del cultivo con sus señales y una primera respuesta correcta para cada una.", exceeds: "Incluye prevención para la próxima temporada acordada con los vecinos, como la rotación o el material de siembra sano." },
      { name: "Cosecha y meta de rendimiento", objective: "O5", notYet: "No hay señales de cosecha ni meta de rendimiento, o el cálculo del rendimiento está mal.", meets: "Señales de cosecha del cultivo y una meta de rendimiento por hectárea y por acre con los cálculos correctos.", exceeds: "Incluye el método de la parcela de muestra para estimar el rendimiento antes de la cosecha y un plan para comparar el resultado con la meta." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que siembran la temporada siguiente semilla certificada o estacas sanas de una variedad recomendada (encuesta de seguimiento)",
      "Participantes que pesan su cosecha e informan un rendimiento por hectárea o por acre al final de la temporada",
      "Cambio en el rendimiento por hectárea informado para el cultivo elegido de una temporada a la siguiente",
      "Menos campos perdidos por la necrosis letal del maíz o los virus de la yuca en los grupos de participantes (informes de extensión)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono con calculadora, o papel, lápiz y una calculadora sencilla",
      "Una cinta métrica o una cuerda marcada cada metro, y una balanza para pesar la cosecha",
      "Acceso a un campo de maíz, arroz, yuca o leguminosas",
      "La lista nacional de variedades o las variedades que recomienda el servicio de extensión para la zona",
      "Unos 60 a 90 minutos en total para las lecciones, las pruebas rápidas y los exámenes, más la práctica en el campo"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego hagan los cálculos de población de plantas y de rendimiento en el campo, con una cinta métrica y plantas reales.",
      "Consigue las variedades y distancias recomendadas para tu zona con el instituto de investigación o el servicio de extensión antes de la sesión; no las inventes.",
      "Lleva fotos o muestras reales de MLN, mosaico de la yuca, estría parda de la yuca (con una raíz cortada) y añublo del arroz si se presentan en tu zona.",
      "Los grupos de agricultores que se ponen de acuerdo en la rotación y el material de siembra sano controlan mejor la MLN y los virus de la yuca; usa la sesión para empezar esa conversación.",
      "Califica el plan de producción con la rúbrica y revisa cada cálculo con el participante.",
      "Vuelve después de la cosecha para comparar el rendimiento real de cada participante con la meta de su plan."
    ]
  }
};

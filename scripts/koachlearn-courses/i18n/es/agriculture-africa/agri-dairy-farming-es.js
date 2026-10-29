"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-dairy-farming.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety rule kept from the English: no drug, vaccine or hormone doses or withdrawal periods as numbers; follow the vet and the label.

const ILRI_MANUAL = { name: "ILRI: Manual de capacitación para pequeños productores de leche (Goopy y Gakige, ILRI Manual 24, 2.ª edición, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO, Producción y productos lácteos: conservación de la leche (enfriar a 4 °C dentro de 3 a 4 horas después del ordeño)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO, Producción y productos lácteos: calidad y análisis de la leche", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO, Producción y productos lácteos: sanidad animal (la mastitis baja el rendimiento y la calidad de la leche)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "Extensión de la Universidad de Missouri: cómo usar la Prueba de California para Mastitis (procedimiento e interpretación)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (regula la industria lechera; permisos para quienes manejan leche)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board: requisitos de licencia", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming-es",
  lang: "es",
  translationOf: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Producción lechera: leche e higiene",
  skills: "Elegir vacas y cabras lecheras, Montar un establo de cero pastoreo, Ordeñar con limpieza, Detectar y analizar la mastitis, Enfriar y vender leche de calidad, Criar terneros y calcular el costo por litro",
  outcome: "manejar una pequeña lechería que produce leche limpia que el comprador acepta: elegir y alojar tus vacas o cabras, ordeñarlas con una rutina limpia, detectar la mastitis a tiempo con la Prueba de California para Mastitis, enfriar y vender leche que pasa las pruebas de calidad, criar terneros sanos y calcular cuánto te cuesta cada litro.",
  about: [
    "Este curso es para pequeños y medianos productores de leche, trabajadores agrícolas, jóvenes emprendedores del campo y extensionistas de Kenia, Nigeria, Ghana, Burkina Faso y de toda África que tienen, o piensan tener, vacas o cabras lecheras. La leche limpia se vende mejor, se rechaza menos y protege la salud de las familias; la leche sucia y la mastitis escondida se comen tus ganancias sin que te des cuenta.",
    "El Capítulo 1 prepara la lechería: elegir los animales, el establo de cero pastoreo y la alimentación para producir leche, y una rutina de ordeño limpia. El Capítulo 2 protege y vende la leche: la mastitis y la Prueba de California para Mastitis, el enfriamiento y la venta a una cooperativa o procesadora, y la crianza de terneros, los registros y el costo por litro. La alimentación se enseña a fondo en el curso \"Nutrición del ganado y formulación de raciones con ingredientes locales\"; aquí aprendes cómo se relaciona el alimento con la leche y con el costo.",
    "Este curso nunca da dosis de medicamentos, vacunas u hormonas ni periodos de retiro. Sigue siempre a tu veterinario o técnico de sanidad animal y la etiqueta del producto. Las cifras de dinero son solo ejemplos; usa tus propios precios. Cada lección dura unos cinco minutos y termina con una tarea en tu propia finca. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz dos páginas para tu propia lechería (o para un ejemplo como 3 vacas en Kiambu o 10 cabras lecheras cerca de Kumasi). Página 1, una rutina de higiene del ordeño para colgar en el lugar de ordeño: los pasos desde preparar al ordeñador y los utensilios hasta enfriar la leche, las señales de mastitis que hay que buscar, cuándo haces una CMT y qué pasa con la leche de animales enfermos o tratados. Página 2, una hoja de costo por litro de un mes: cada costo (alimento y forraje, mano de obra, veterinario y reproducción, otros), los litros producidos, el costo por litro, el precio que paga tu comprador y un cambio que harás para bajar el costo por litro.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños y medianos productores de leche, trabajadores agrícolas, jóvenes emprendedores del campo y extensionistas de Kenia, Nigeria, Ghana, África occidental francófona y otras partes de África, con 1 a 20 vacas o un pequeño rebaño de cabras lecheras, muchas veces en cero pastoreo o semi cero pastoreo.",
    startingPoint: "Saben alimentar, dar agua y ordeñar a mano, y venden leche en su zona. Muchos ordeñan sin una rutina fija de higiene, usan recipientes de plástico, notan la mastitis solo cuando la leche se ve mal y no saben cuánto les cuesta producir un litro.",
    gap: "Los compradores y las cooperativas analizan la leche y rechazan o pagan menos por leche agria, aguada o con residuos de medicamentos. La mastitis escondida (subclínica) baja la producción sin señales visibles. Los productores necesitan una rutina que dé leche limpia y fría, una forma de detectar la mastitis a tiempo y registros que muestren si cada litro deja ganancia.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono básico o inteligente y una calculadora; los registros en papel sirven",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre los ordeños",
      "Muchas fincas no tienen electricidad ni tanque de enfriamiento",
      "Sanidad animal: ninguna dosis de medicamentos, vacunas u hormonas ni cifras de retiro; seguir al veterinario y la etiqueta",
      "Las cifras de dinero son ejemplos; los precios, permisos y reglas de los compradores cambian según el país y el comprador"
    ],
    prerequisites: "Ninguno. \"Salud y manejo del ganado\" (revisiones diarias de salud) y \"Nutrición del ganado y formulación de raciones con ingredientes locales\" (raciones) son buenos complementos."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Según tu terreno, tu dinero, tu forraje y tu mercado", action: "elegir vacas o cabras lecheras y planear un establo de cero pastoreo con corral, comedero, agua y drenaje", standard: "nombrando al menos cuatro revisiones que hiciste antes de comprar" },
    { id: "O2", condition: "En cada ordeño", action: "seguir una rutina de ordeño limpia, desde preparar al ordeñador y los utensilios hasta filtrar y tapar la leche", standard: "haciendo cada paso en orden, sin saltarte ninguno" },
    { id: "O3", condition: "Con una vaca o cabra en producción", action: "revisar las señales de mastitis y hacer la Prueba de California para Mastitis en cada pezón", standard: "anotando el resultado de cada cuarto o mitad y llamando al veterinario por cualquier animal positivo o enfermo" },
    { id: "O4", condition: "Después del ordeño, con o sin tanque de enfriamiento", action: "enfriar, guardar y entregar la leche para que pase las pruebas de calidad del comprador", standard: "llegando al tanque o al comprador dentro del tiempo que él fija, sin agregar nada a la leche" },
    { id: "O5", condition: "Con los registros de un mes de la finca", action: "calcular el costo por litro de leche y compararlo con el precio que paga tu comprador", standard: "con todos los costos incluidos y las cuentas correctas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar una lechería limpia",
      lessons: [
        {
          title: "Elegir vacas y cabras lecheras",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir animales lecheros que se ajusten a tu alimento, tu dinero y tu mercado.",
          text: [
            "Un animal lechero rinde según el alimento y el cuidado que le puedas dar. Una vaca Friesian (Holstein) de alta producción necesita mucho alimento bueno y agua todos los días; si no puedes dárselo, un cruce con una raza local, o una raza más pequeña como la Jersey o la Ayrshire, puede dejarte más ganancia. En zonas más secas, las razas locales resistentes y sus cruces, como los cruces de cebú en el norte de Nigeria o el cebú Azawak en Níger y Burkina Faso, aguantan mejor el calor y el forraje pobre.",
            "Las cabras lecheras se adaptan a parcelas pequeñas y presupuestos más bajos. Comen menos, cuestan menos y la leche de cabra tiene sus propios compradores. En Kenia se crían para leche cabras Saanen, Toggenburg y Alpina, y sus cruces con cabras locales.",
            "Antes de comprar, revisa: ¿Tienes forraje y agua todo el año, también en la época seca? ¿Quién te comprará la leche y a qué precio? ¿Tienes cerca un veterinario y un servicio de inseminación artificial (IA)? Luego revisa el animal: compra a un productor conocido que tenga registros, busca un animal sano y alerta, con una ubre bien formada y cuatro (vaca) o dos (cabra) pezones que funcionen, pregunta por su producción de leche, sus partos y sus enfermedades anteriores, y pide a un veterinario o técnico de sanidad animal que la revise antes de pagar."
          ],
          steps: ["Anota tu forraje y tu agua para la época de lluvias y la época seca.", "Busca tu comprador y el precio por litro.", "Busca el veterinario y el servicio de IA más cercanos.", "Elige la raza o el cruce que tu alimento puede mantener.", "Compra a un vendedor conocido con registros; revisa ubre, pezones y salud.", "Pide a un veterinario que examine al animal antes de pagar."],
          words: [["Raza lechera", "una raza criada sobre todo para leche, como las vacas Friesian, Jersey o Ayrshire, o las cabras Saanen y Toggenburg."], ["Cruce", "un animal cuyos padres son de dos razas distintas, muchas veces una raza lechera extranjera y una raza local."], ["Inseminación artificial (IA)", "colocar semen de un toro o macho cabrío elegido en la hembra; lo hace un técnico capacitado."]],
          slides: [
            { title: "El alimento decide la raza", bullets: ["Las de alta producción necesitan mucho alimento bueno y agua", "Los cruces y las razas pequeñas se ajustan a menos alimento", "Las razas locales resistentes aguantan el calor y la época seca"] },
            { title: "Cabras lecheras", bullets: ["Menos alimento, menos dinero, menos espacio", "Saanen, Toggenburg, Alpina y sus cruces", "Busca primero compradores de leche de cabra"] },
            { title: "Antes de comprar", bullets: ["¿Forraje y agua todo el año?", "¿Un comprador y un precio por litro?", "¿Un veterinario y un servicio de IA cerca?"] },
            { title: "Revisa al animal", bullets: ["Vendedor conocido con registros", "Sano y alerta; buena ubre; todos los pezones funcionan", "El veterinario la examina antes de pagar"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Escribe tu propia lista para comprar: tu forraje y agua para la época seca, tu comprador y el precio, el veterinario y el servicio de IA más cercanos, la raza o el cruce que puedes alimentar, y cinco cosas que revisarás en el animal antes de pagar.",
          youCanNow: "elegir una raza lechera según tu alimento y tu mercado, y revisar bien a un animal antes de comprarlo.",
          quickCheck: [
            { objective: "O1", q: "Tienes poco forraje en la época seca. ¿Qué es lo más sensato?", options: ["Comprar la Friesian de más alta producción que encuentres", "Comprar un cruce o una raza más pequeña que tu alimento pueda mantener", "Comprar más vacas para que algunas sobrevivan", "Comprar ahora y pensar en el forraje después"], answer: 1, why: "Una vaca solo da lo que su alimento le permite; un cruce o una raza más pequeña se ajusta a poco forraje." },
            { objective: "O1", q: "¿Qué revisión debes hacer antes de pagar por una vaca?", options: ["Pedir a un veterinario que la examine y ver sus registros", "Contar sus manchas", "Revisar solo su color", "Preguntar al vendedor si es buena"], answer: 0, why: "La revisión del veterinario y los registros muestran la salud, la producción anterior y los partos." }
          ]
        },
        {
          title: "Establo de cero pastoreo y alimentación para la leche",
          objectives: ["O1"],
          minutes: 6,
          goal: "Planear un establo de cero pastoreo y el alimento y el agua para producir leche.",
          text: [
            "En el cero pastoreo, los animales se quedan en un establo y tú les llevas el alimento, como pasto Napier cortado, otros forrajes y restos de cosecha. Ahorra terreno y te deja controlar el alimento, pero exige trabajo diario y buena higiene.",
            "Un buen establo tiene: un techo para la sombra y la lluvia; un corral o cubículo para cada vaca con cama seca y suave para que pueda echarse; un piso con pendiente para que la orina y el agua se escurran; un comedero y un bebedero fáciles de limpiar; un lugar limpio y aparte para ordeñar; un corral para terneros; una fosa de estiércol lejos del lugar de ordeño; y una bodega para el alimento. Para las cabras, un piso elevado de tablillas las mantiene secas. Saca el estiércol todos los días, porque la cama sucia es una causa principal de mastitis.",
            "La leche se hace con alimento y agua. Una vaca en producción necesita mucha agua limpia todo el día, buen forraje voluminoso y energía, proteína y minerales extra en equilibrio; la leche baja rápido cuando falta agua o alimento. Cómo armar una ración con alimentos locales se enseña en \"Nutrición del ganado y formulación de raciones con ingredientes locales\". Aquí recuerda dos cosas: anota cuánto cuesta cada alimento, porque el alimento suele ser tu costo más grande, y cambia los alimentos poco a poco."
          ],
          steps: ["Marca un establo techado en un terreno con buen drenaje.", "Da a cada animal un corral con cama seca y piso con pendiente.", "Pon el comedero y el bebedero donde sea fácil llenarlos y limpiarlos.", "Agrega un lugar limpio para ordeñar, un corral para terneros y una bodega de alimento.", "Pon la fosa de estiércol lejos del ordeño y del agua.", "Saca el estiércol todos los días; anota el alimento comprado y su costo."],
          words: [["Cero pastoreo", "tener a los animales en un establo y llevarles todo el alimento en vez de dejarlos pastar."], ["Cama", "material seco y suave en el piso donde se echan los animales, como viruta de madera, pasto seco o arena."], ["Forraje voluminoso", "alimento que ocupa mucho, como pasto, forraje, heno y restos de cosecha."]],
          slides: [
            { title: "Cero pastoreo", bullets: ["Los animales se quedan en el establo; tú llevas el alimento", "Ahorra terreno; tú controlas el alimento", "Exige trabajo diario e higiene"] },
            { title: "Un buen establo", bullets: ["Techo; un corral por vaca; cama seca", "Piso con pendiente que escurre", "Comedero y bebedero fáciles de limpiar"] },
            { title: "Mantenlo limpio", bullets: ["Lugar de ordeño limpio y aparte", "Corral para terneros; bodega de alimento", "Fosa de estiércol lejos del ordeño; limpiar a diario"] },
            { title: "El alimento hace la leche", bullets: ["Mucha agua limpia todo el día", "Forraje más energía, proteína y minerales en equilibrio", "Anota el costo del alimento; cámbialo poco a poco"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Dibuja un plano sencillo de tu establo de cero pastoreo (o del que vas a construir): corrales, cama, pendiente del piso, comedero, bebedero, lugar de ordeño, corral de terneros, bodega de alimento y fosa de estiércol. Marca lo primero que vas a arreglar.",
          youCanNow: "planear un establo de cero pastoreo que mantenga a los animales secos y limpios, y explicar cómo el alimento y el agua se convierten en leche.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué el piso de un corral de cero pastoreo debe tener pendiente?", options: ["Para que la vaca pueda resbalar hacia afuera", "Para que la orina y el agua se escurran y la cama se mantenga seca", "Para ahorrar cemento", "Para que el alimento ruede hacia la vaca"], answer: 1, why: "Un piso y una cama secos mantienen limpias las ubres y reducen la mastitis." },
            { objective: "O1", q: "¿Dónde debe estar la fosa de estiércol?", options: ["Junto al bebedero", "Dentro del lugar de ordeño", "Lejos del lugar de ordeño y del agua", "Debajo de la bodega de alimento"], answer: 2, why: "El estiércol cerca del ordeño o del agua lleva suciedad y gérmenes a la leche." }
          ]
        },
        {
          title: "Una rutina de ordeño limpia",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ordeñar una vaca o una cabra con una rutina limpia, paso a paso.",
          text: [
            "Los gérmenes entran a la leche por manos sucias, ubres sucias, recipientes sucios y el aire de un establo sucio. Una rutina fija, hecha igual en cada ordeño, los mantiene fuera. Ordeña a las mismas horas todos los días, en un lugar limpio y con calma: un animal asustado suelta menos leche.",
            "Usa recipientes de metal lisos (aluminio o acero inoxidable), fáciles de limpiar. Los bidones de plástico se rayan y guardan suciedad, y muchos compradores rechazan la leche que llega en ellos. Lava los recipientes después de cada uso con agua limpia y detergente, enjuágalos y sécalos boca abajo en una repisa al sol.",
            "Ordeña primero a los animales sanos y al final a cualquier animal enfermo o tratado. Guarda aparte la leche de un animal tratado con un medicamento y no la vendas hasta que haya pasado el periodo de retiro que indica la etiqueta del producto o tu veterinario."
          ],
          steps: ["Usa ropa limpia; ten las uñas cortas; lávate las manos con jabón.", "Lleva recipientes de metal limpios y secos, una taza de despunte y un filtro o colador limpio.", "Amarra o acomoda al animal con calma en el lugar de ordeño limpio.", "Lava los pezones (y la ubre solo si está sucia) con agua tibia limpia y sécalos con un paño o papel limpio distinto para cada animal.", "Saca los primeros chorros de cada pezón en la taza de despunte y busca grumos, copos o leche aguada.", "Ordeña rápido y por completo con toda la mano, no jalando con los dedos.", "Sumerge o rocía los pezones después del ordeño si tu veterinario lo aconseja, y da alimento para que el animal se quede de pie un rato.", "Filtra la leche, tápala y empieza a enfriarla de inmediato."],
          words: [["Taza de despunte", "una taza con una placa o tela oscura encima; los primeros chorros de leche muestran en ella grumos o copos."], ["Sellador de pezones", "un líquido desinfectante en el que se sumergen los pezones después del ordeño para matar gérmenes; usa uno que recomiende tu veterinario, como dice la etiqueta."], ["Periodo de retiro", "el tiempo después de dar un medicamento en que no se puede vender ni comer la leche o la carne; está escrito en la etiqueta o lo da el veterinario."]],
          slides: [
            { title: "De dónde vienen los gérmenes", bullets: ["Manos y ubres sucias", "Recipientes sucios", "Un establo sucio y polvoriento"] },
            { title: "Antes del ordeño", bullets: ["Ropa limpia, uñas cortas, manos lavadas", "Recipientes de metal limpios y secos", "Lava y seca los pezones: un paño por animal"] },
            { title: "Durante el ordeño", bullets: ["Taza de despunte: revisa los primeros chorros", "Ordeña rápido y por completo, con toda la mano", "Sanos primero; enfermos o tratados al final"] },
            { title: "Después del ordeño", bullets: ["Sellador de pezones si tu veterinario lo aconseja", "Filtra, tapa y enfría la leche de inmediato", "Animales tratados: no vender hasta que lo diga la etiqueta"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Mira o haz un ordeño en tu finca y marca cada paso de esta lección. Anota cada paso que se saltó y un cambio para mañana, como un paño de secado por animal o un tarro de metal en vez de un bidón.",
          youCanNow: "ordeñar una vaca o una cabra con una rutina limpia que mantiene los gérmenes fuera de la leche.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué se sacan los primeros chorros en una taza de despunte?", options: ["Para darle de comer al gato", "Es la leche más rica", "Para ver grumos o copos que indican mastitis", "Para calmar a la vaca"], answer: 2, why: "La taza de despunte muestra la leche anormal a tiempo, antes de que se mezcle con la leche buena." },
            { objective: "O2", q: "El veterinario trató a una vaca hace dos días. ¿Qué haces con su leche?", options: ["La mezclas con el resto; un poco no importa", "La vendes a otro comprador", "Se la das a su propio ternero sin preguntar", "La guardas aparte y no la vendes hasta que pase el periodo de retiro de la etiqueta o del veterinario"], answer: 3, why: "Los residuos de medicamentos hacen que la leche no sea segura y los compradores los analizan; la etiqueta o el veterinario dan el tiempo de espera." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Preparar una lechería limpia",
        questions: [
          { objective: "O1", q: "¿Qué debe decidir la raza lechera que compras?", options: ["El alimento, el agua y el cuidado que le puedas dar todo el año", "El color que más te gusta", "Lo que compró tu vecino", "El animal más barato del mercado"], answer: 0, why: "Un animal lechero solo produce lo que su alimento y su cuidado le permiten." },
          { objective: "O1", q: "¿Qué cosa NO forma parte de un buen establo de cero pastoreo?", options: ["Cama seca en cada corral", "Un piso que escurre", "Una fosa de estiércol junto al lugar de ordeño", "Comedero y bebedero fáciles de limpiar"], answer: 2, why: "El estiércol debe estar lejos del ordeño para mantener los gérmenes fuera de la leche." },
          { objective: "O2", q: "¿Qué recipiente es el mejor para la leche?", options: ["Un bidón de plástico", "Un tarro limpio y liso de aluminio o acero inoxidable", "Un balde viejo de pintura", "Cualquier recipiente con tapa"], answer: 1, why: "El metal liso es fácil de limpiar; el plástico se raya y guarda suciedad." },
          { objective: "O2", q: "¿Cómo debes secar los pezones antes del ordeño?", options: ["Con una sola toalla para todos los animales", "Dejarlos mojados", "Con tu ropa", "Con un paño o papel limpio distinto para cada animal"], answer: 3, why: "Una toalla compartida lleva los gérmenes de la mastitis de un animal a otro." },
          { objective: "O2", q: "¿En qué orden debes ordeñar a tus animales?", options: ["Los sanos primero, los enfermos o tratados al final", "Los enfermos primero", "En cualquier orden", "Los más jóvenes primero"], answer: 0, why: "Ordeñar al final a los enfermos evita que los gérmenes pasen a las ubres sanas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ubres sanas, leche segura y ganancias",
      lessons: [
        {
          title: "Mastitis: señales, prevención y la CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Revisar a un animal en busca de mastitis y hacer una Prueba de California para Mastitis.",
          text: [
            "La mastitis es una infección e hinchazón de la ubre. Baja la producción y la calidad de la leche y es una de las enfermedades más caras de la lechería. La mastitis clínica se ve: un cuarto caliente, hinchado o adolorido; leche con grumos, copos, aguada o con sangre; y a veces fiebre y falta de apetito. La mastitis subclínica no muestra nada que puedas ver, pero el animal da menos leche. Por eso se hace la prueba.",
            "La Prueba de California para Mastitis (CMT, por sus siglas en inglés) detecta la mastitis escondida en la finca. Necesitas una paleta de cuatro copas y líquido CMT (reactivo). Ordeña un poco de cada pezón en su propia copa, agrega la misma cantidad de reactivo, mueve en círculos y lee el resultado en pocos segundos. La leche que sigue líquida es normal. Un gel, una baba o grumos indican un conteo alto de células, lo que señala mastitis en ese cuarto. Mientras más espeso el gel, más fuerte la reacción. No hagas la prueba en los primeros días después del parto, cuando los resultados salen altos de forma natural. La leche de cabra puede reaccionar más fuerte aunque esté sana, así que pregunta a tu veterinario cómo leer los resultados en cabras.",
            "Previene la mastitis con cama limpia y seca, la rutina de ordeño limpia, un sellador de pezones si tu veterinario lo aconseja, ordeñando al final a los animales infectados y tratando solo con el consejo de tu veterinario. Nunca des antibióticos por tu cuenta: sigue al veterinario y la etiqueta. Anota cada caso y cada tratamiento."
          ],
          steps: ["Mira y palpa cada cuarto para ver si hay calor, hinchazón o dolor.", "Revisa los primeros chorros en la taza de despunte para ver grumos, copos o sangre.", "Para la CMT: descarta los primeros chorros y luego ordeña un poco de cada pezón en su propia copa.", "Inclina la paleta para que quede la cantidad correcta; agrega la misma cantidad de reactivo.", "Mueve en círculos con suavidad y lee en pocos segundos: líquido es normal, gel indica una reacción.", "Anota el resultado de cada cuarto o mitad.", "Llama a tu veterinario ante cualquier caso clínico o resultado positivo; sigue al veterinario y la etiqueta."],
          words: [["Mastitis", "infección e hinchazón de la ubre que baja la producción y la calidad de la leche."], ["Mastitis subclínica", "mastitis sin señales visibles; solo una prueba como la CMT la muestra."], ["Cuarto", "una de las cuatro partes de la ubre de la vaca, cada una con su propio pezón."], ["Reactivo", "el líquido que se usa en una prueba y que reacciona con la leche."]],
          slides: [
            { title: "La mastitis cuesta dinero", bullets: ["Infección e hinchazón de la ubre", "Menos leche, menor calidad", "Clínica: se ve. Subclínica: no se ve"] },
            { title: "Señales clínicas", bullets: ["Cuarto caliente, hinchado o adolorido", "Leche con grumos, copos, aguada o con sangre", "A veces fiebre y sin ganas de comer"] },
            { title: "La CMT", bullets: ["Una copa por pezón; la misma cantidad de reactivo", "Mueve en círculos y lee en segundos", "Líquido = normal; gel o baba = reacción"] },
            { title: "Prevenir y actuar", bullets: ["Cama seca, rutina limpia, sellador si se aconseja", "Animales infectados se ordeñan al final", "El veterinario decide el tratamiento; sigue la etiqueta"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Haz una CMT a una vaca o cabra (pide prestada una paleta y reactivo a tu cooperativa, veterinario o extensionista si no tienes). Anota en tu cuaderno el resultado de cada cuarto o mitad y escribe qué harás con cualquier reacción.",
          youCanNow: "reconocer las señales de mastitis, hacer una CMT en cada pezón, anotar el resultado y saber cuándo llamar al veterinario.",
          quickCheck: [
            { objective: "O3", q: "La leche de tu vaca se ve normal, pero su producción bajó. ¿Qué podría detectar una mastitis escondida?", options: ["Esperar a que la leche muestre grumos", "Una Prueba de California para Mastitis", "Darle más sal", "Oler la leche"], answer: 1, why: "La mastitis subclínica no tiene señales visibles; la CMT la muestra." },
            { objective: "O3", q: "En una CMT, una copa se vuelve un gel espeso. ¿Qué significa?", options: ["La prueba se hizo bien y el cuarto está sano", "Pusiste muy poca leche", "La leche es muy rica", "Una reacción fuerte en ese cuarto; anótala y llama al veterinario"], answer: 3, why: "Un gel indica un conteo alto de células, una señal de mastitis en ese cuarto." }
          ]
        },
        {
          title: "Enfriar, manejar y vender la leche",
          objectives: ["O4"],
          minutes: 6,
          goal: "Enfriar y entregar leche que pase las pruebas de calidad del comprador.",
          text: [
            "La leche fresca tiene defensas naturales que frenan a los gérmenes solo durante unas tres a cuatro horas después del ordeño. La FAO aconseja enfriarla a 4 °C dentro de ese tiempo para conservar su calidad. Si no tienes tanque de enfriamiento, pon el tarro de metal tapado en agua fresca y limpia, corriente o almacenada, a la sombra, y lleva la leche rápido al tanque del centro de acopio. Nunca dejes la leche al sol.",
            "La mayoría de los pequeños productores vende a una cooperativa lechera, a un centro de acopio, a una procesadora o a una pequeña lechería (por ejemplo, en Burkina Faso las minilecherías compran leche a pastores y productores). En la entrega, el comprador analiza tu leche. Las pruebas comunes son: mirar y oler; la prueba del alcohol y la prueba de cuajado al hervir, que muestran la leche que se está agriando; el lactómetro, que muestra la leche con agua agregada; y, en algunas procesadoras, una prueba de residuos de medicamentos. La leche que no pasa se rechaza o se paga menos.",
            "Nunca agregues agua, harina, conservantes ni nada más a la leche: es hacer trampa, muchas veces es ilegal y las pruebas lo detectan. Pregunta a tu comprador cómo paga (por litro, a veces con un premio por calidad o grasa), cuándo paga (muchas veces cada mes por banco o dinero móvil) y qué descuentos hace. Lee todo contrato completo antes de firmarlo. Vender leche cruda al público puede requerir un permiso: en Kenia, la Kenya Dairy Board (la junta lechera de Kenia) da licencias a quienes manejan leche, así que revisa sus reglas o las de la autoridad lechera de tu país."
          ],
          steps: ["Filtra y tapa la leche justo después del ordeño.", "Enfríala de inmediato: en un tanque, o con el tarro en agua fresca a la sombra.", "Entrega al centro de acopio o al comprador dentro del tiempo que fijen.", "Mira las pruebas y pide los resultados.", "Anota los litros entregados, cualquier rechazo y el motivo.", "Compara cada pago con tus registros de entrega."],
          words: [["Lactómetro", "un medidor que flota y mide qué tan pesada (densa) es la leche; el agua agregada hace la leche más liviana."], ["Prueba del alcohol", "mezclar leche con alcohol; la leche que se está agriando forma grumos."], ["Centro de acopio", "un lugar donde los productores entregan la leche para que la analicen, la enfríen y la envíen a una procesadora."]],
          slides: [
            { title: "Enfríala rápido", bullets: ["Las defensas naturales duran unas 3 a 4 horas", "FAO: enfriar a 4 °C dentro de ese tiempo", "Sin tanque: tarro en agua fresca, a la sombra"] },
            { title: "Las pruebas del comprador", bullets: ["Mirar y oler", "Alcohol y cuajado al hervir: leche que se agria", "Lactómetro: agua agregada; algunos buscan medicamentos"] },
            { title: "Nunca agregues nada", bullets: ["Ni agua, ni harina, ni conservantes", "Es trampa, muchas veces ilegal, y las pruebas lo detectan"] },
            { title: "Cómo te pagan", bullets: ["Por litro; pregunta por premios de calidad", "Cuándo y cómo pagan; descuentos", "Lee los contratos; revisa permisos (Kenia: KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Visita o llama al centro de acopio, cooperativa o comprador más cercano. Pregunta: qué pruebas hacen, la hora límite para recibir leche, cómo y cuándo pagan y qué descuentos hacen. Anota las respuestas y compáralas con cómo manejas la leche ahora.",
          youCanNow: "enfriar y manejar la leche para que conserve su calidad, explicar las pruebas del comprador y revisar cómo te pagan.",
          quickCheck: [
            { objective: "O4", q: "No tienes tanque de enfriamiento. ¿Qué es lo mejor después del ordeño?", options: ["Poner el tarro de metal tapado en agua fresca a la sombra y entregar rápido", "Dejar la leche al sol para que se mantenga tibia", "Agregar un poco de agua para que se mantenga fresca", "Guardarla hasta mañana y entregar los dos ordeños juntos"], answer: 0, why: "Enfriar y entregar rápido evita que los gérmenes se multipliquen." },
            { objective: "O4", q: "¿Qué detecta el lactómetro en el centro de acopio?", options: ["Mastitis en un cuarto", "Leche con agua agregada", "La raza de la vaca", "Leche demasiado fría"], answer: 1, why: "El agua agregada hace la leche menos densa, y el lactómetro lo muestra." }
          ]
        },
        {
          title: "Crianza de terneros, registros y costo por litro",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular tu costo por litro y llevar los registros que lo alimentan.",
          text: [
            "Tus terneros y cabritos son tu rebaño del futuro. Asegúrate de que el recién nacido tome calostro, la primera leche espesa, lo antes posible después de nacer, de preferencia en las primeras horas, porque lleva la protección de la madre contra las enfermedades. Ten a los terneros en un corral limpio, seco y aparte, dales agua limpia, ofréceles buen heno o forraje tierno y un alimento para terneros desde temprano para que se desarrolle el estómago, y destétalos cuando tu extensionista o veterinario diga que el ternero ya come suficiente alimento sólido. Sigue el plan de tu veterinario para el cuidado del ombligo, la desparasitación y la vacunación.",
            "Lleva registros sencillos cada día: litros por animal en cada ordeño, alimento comprado y su costo, señales de celo y fechas de IA o monta, fechas de parto, tratamientos con la fecha en que la leche se puede vender otra vez, leche entregada, rechazos y pagos. Un cuaderno sirve; una hoja de cálculo en el teléfono facilita las cuentas.",
            "Costo por litro = todos los costos del mes divididos entre los litros producidos. Ejemplo (las cifras son solo un ejemplo): 3 vacas en Kenia producen 1,050 litros en un mes. Costos: alimento y forraje KES 27,000, mano de obra KES 9,000, veterinario e IA KES 3,000, otros KES 3,000; total KES 42,000. Costo por litro = 42,000 / 1,050 = KES 40. Si tu comprador paga menos que tu costo por litro, pierdes dinero en cada litro; revisa primero el desperdicio de alimento, las pérdidas por mastitis y la leche rechazada."
          ],
          steps: ["Da calostro lo antes posible después del nacimiento.", "Ten al ternero en un corral limpio y seco con agua, heno y alimento para terneros.", "Anota litros, alimento, reproducción, partos, tratamientos, entregas y pagos.", "A fin de mes, suma todos los costos.", "Divide los costos totales entre los litros producidos: ese es tu costo por litro.", "Compáralo con el precio pagado y elige un cambio para bajar el costo."],
          words: [["Calostro", "la primera leche espesa y amarilla después del parto; protege al recién nacido contra las enfermedades."], ["Destete", "pasar a un animal joven de la leche al alimento sólido."], ["Costo por litro", "todos tus costos de la lechería en un periodo divididos entre los litros que produjiste."]],
          slides: [
            { title: "Los terneros son tu rebaño futuro", bullets: ["Calostro lo antes posible después de nacer", "Corral limpio y seco; agua, heno y alimento desde temprano", "Plan del veterinario para ombligo, parásitos y vacunas"] },
            { title: "Registros diarios", bullets: ["Litros por animal; alimento y su costo", "Celo, IA, partos, tratamientos", "Entregas, rechazos, pagos"] },
            { title: "Costo por litro", bullets: ["Todos los costos del mes / litros producidos", "Ejemplo: KES 42,000 / 1,050 L = KES 40 por litro", "Las cifras son ejemplos: usa las tuyas"] },
            { title: "Si no conviene", bullets: ["Precio por debajo del costo: pierdes en cada litro", "Revisa desperdicio de alimento, mastitis, leche rechazada", "Elige un cambio y dale seguimiento"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Tarea final: escribe tu rutina de higiene del ordeño para colgar en el lugar de ordeño y luego llena una hoja de costo por litro del mes pasado (o de un mes de ejemplo): cada costo, los litros producidos, el costo por litro, el precio de tu comprador y un cambio que harás.",
          youCanNow: "criar terneros sanos, llevar los registros de la lechería y calcular el costo de cada litro de leche.",
          quickCheck: [
            { objective: "O5", q: "¿Cuándo debe tomar calostro un ternero recién nacido?", options: ["Después de una semana", "Solo si se ve débil", "Lo antes posible después de nacer, de preferencia en las primeras horas", "Nunca; solo agua"], answer: 2, why: "El calostro lleva la protección de la madre, y el ternero lo aprovecha mejor en las primeras horas." },
            { objective: "O5", q: "Los costos del mes son KES 36,000 y las vacas produjeron 900 litros. ¿Cuál es el costo por litro?", options: ["KES 25", "KES 32", "KES 36", "KES 40"], answer: 3, why: "36,000 dividido entre 900 es 40." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Ubres sanas, leche segura y ganancias",
        questions: [
          { objective: "O3", q: "¿Cuál es una señal de mastitis clínica?", options: ["Un cuarto caliente e hinchado y grumos en la leche", "Un pelo brillante", "Rumiar", "Buen apetito"], answer: 0, why: "El calor, la hinchazón, el dolor y la leche anormal son señales de mastitis clínica." },
          { objective: "O3", q: "Una CMT muestra una reacción en un cuarto. ¿Qué haces?", options: ["Dar un antibiótico que tienes en casa", "Anotarlo y llamar a tu veterinario; seguir su consejo y la etiqueta", "Ignorarlo; la leche se ve bien", "Vender la vaca hoy"], answer: 1, why: "El veterinario decide el tratamiento; tratar en casa sin consejo arriesga residuos y resistencia." },
          { objective: "O4", q: "Según la FAO, ¿en cuánto tiempo hay que enfriar la leche a unos 4 °C?", options: ["En una semana", "Para el día siguiente", "Dentro de unas tres a cuatro horas después del ordeño", "Solo cuando hace calor"], answer: 2, why: "Las defensas naturales de la leche frenan a los gérmenes solo unas tres a cuatro horas." },
          { objective: "O4", q: "El centro de acopio hace una prueba del alcohol. ¿Qué muestra?", options: ["Agua agregada", "El contenido de grasa", "La raza de la vaca", "Leche que se está agriando"], answer: 3, why: "La leche que se está agriando forma grumos al mezclarla con alcohol." },
          { objective: "O5", q: "Tu costo por litro es KES 45 y el comprador paga KES 40. ¿Qué significa?", options: ["Pierdes unos KES 5 en cada litro", "Ganas KES 5 por litro", "Quedas sin ganar ni perder", "Nada; los precios no importan"], answer: 0, why: "Cuando el costo por litro es mayor que el precio, cada litro pierde dinero." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Producción lechera: leche e higiene",
    questions: [
      { objective: "O1", q: "Antes de comprar vacas lecheras, lo primero que debes revisar es:", options: ["El color de las vacas", "Si tienes forraje y agua todo el año, también en la época seca", "Qué raza es la más famosa", "Cuántas vacas tiene tu vecino"], answer: 1, why: "El alimento y el agua deciden cuánta leche puede dar cualquier vaca." },
      { objective: "O1", q: "¿Por qué un productor podría elegir cabras lecheras en vez de vacas?", options: ["Las cabras no necesitan agua", "Las cabras nunca se enferman", "Las cabras comen menos y se ajustan a parcelas y presupuestos pequeños", "La leche de cabra no necesita higiene"], answer: 2, why: "Las cabras necesitan menos alimento, espacio y dinero, lo que conviene a muchos pequeños productores." },
      { objective: "O1", q: "En el cero pastoreo, ¿por qué hay que sacar el estiércol todos los días?", options: ["La cama sucia es una causa principal de mastitis", "Para venderlo a diario", "A las vacas no les gusta el olor", "No es necesario"], answer: 0, why: "Las ubres descansan sobre la cama; la suciedad allí reparte los gérmenes de la mastitis." },
      { objective: "O1", q: "¿Qué característica ayuda a mantener seco un corral de cero pastoreo?", options: ["Un piso plano sin desagüe", "No tener techo", "Paja mojada", "Un piso con pendiente hacia un desagüe"], answer: 3, why: "Un piso con pendiente hace escurrir la orina y el agua." },
      { objective: "O2", q: "¿Cuál es el primer paso de una rutina de ordeño limpia?", options: ["Empezar a ordeñar de inmediato", "Ordeñador con ropa limpia, uñas cortas y manos lavadas con jabón", "Vaciar la leche en un bidón", "Dar de comer al ternero"], answer: 1, why: "Manos y ropa limpias evitan desde el inicio que los gérmenes entren a la leche." },
      { objective: "O2", q: "¿Por qué se ordeña con toda la mano y no jalando con los dedos?", options: ["Es más rápido de aprender", "Gasta menos leche", "Es más suave con el pezón y ayuda a sacar toda la leche", "Los dedos están más sucios"], answer: 2, why: "Ordeñar con toda la mano evita lastimar el pezón y vacía la ubre." },
      { objective: "O2", q: "Después del ordeño, ¿qué debes hacer primero con la leche?", options: ["Filtrarla, taparla y empezar a enfriarla de inmediato", "Dejarla destapada para que se enfríe en el establo", "Agregarle agua para que rinda más", "Mezclarla con la leche de ayer"], answer: 0, why: "Filtrar, tapar y enfriar rápido mantienen fuera la suciedad y los gérmenes." },
      { objective: "O2", q: "¿Por qué se da alimento a la vaca justo después del ordeño?", options: ["Para que se duerma", "Para aumentar la grasa", "Para que se quede de pie mientras el pezón se cierra", "No tiene ningún propósito"], answer: 2, why: "Si se queda de pie mientras el canal del pezón se cierra, la suciedad de la cama no entra." },
      { objective: "O3", q: "La mastitis subclínica es:", options: ["Mastitis con un cuarto hinchado y caliente", "Una enfermedad solo de las cabras", "Un problema del alimento", "Mastitis sin señales visibles, que se detecta con una prueba"], answer: 3, why: "Solo una prueba como la CMT muestra la mastitis subclínica." },
      { objective: "O3", q: "En una CMT, ¿cómo se lee el resultado?", options: ["Esperar una hora y luego olerla", "Mover en círculos y leer en pocos segundos: líquido es normal, gel es una reacción", "Probarla", "Hervirla primero"], answer: 1, why: "La reacción se lee en pocos segundos; el gel indica un conteo alto de células." },
      { objective: "O3", q: "¿Cuándo NO debes confiar en una CMT en una vaca?", options: ["En los primeros días después del parto", "En la mañana", "Cuando está tranquila", "Después de comer"], answer: 0, why: "El conteo de células es alto de forma natural justo después del parto, así que los resultados engañan." },
      { objective: "O3", q: "¿Quién decide cómo tratar la mastitis?", options: ["El vecino", "El comprador de leche", "Tu veterinario, siguiendo la etiqueta del producto", "Un video de internet"], answer: 2, why: "El tratamiento y el tiempo de espera antes de vender la leche los dan el veterinario y la etiqueta." },
      { objective: "O4", q: "¿Con qué recipiente es más probable que rechacen la leche?", options: ["Un tarro de aluminio limpio", "Un tarro de acero inoxidable", "Una cántara de metal limpia", "Un bidón de plástico rayado"], answer: 3, why: "Las rayas del plástico guardan suciedad y gérmenes, y muchos compradores rechazan la leche en ellos." },
      { objective: "O4", q: "Un comerciante te sugiere agregar un poco de agua a cada tarro. Tú:", options: ["Te niegas: es trampa, muchas veces ilegal, y el lactómetro lo detecta", "Aceptas si los precios están bajos", "Agregas harina en su lugar", "Agregas agua solo en la época seca"], answer: 0, why: "Agregar cualquier cosa a la leche es trampa y las pruebas del comprador lo detectan." },
      { objective: "O4", q: "La prueba de cuajado al hervir revisa:", options: ["Agua agregada", "Leche agria o anormal", "La edad del animal", "El contenido de grasa"], answer: 1, why: "La leche agria o anormal se cuaja al hervirla." },
      { objective: "O4", q: "En Kenia, ¿qué organismo da licencias a quienes manejan leche?", options: ["El Kenya Wildlife Service", "La oficina de agua del condado", "La Kenya Dairy Board", "La Pest Control Products Board"], answer: 2, why: "La Kenya Dairy Board regula la industria lechera y da permisos a quienes manejan leche." },
      { objective: "O5", q: "El costo por litro es:", options: ["El precio que paga el comprador", "Solo el costo del alimento", "Los litros divididos entre las vacas", "Todos los costos del periodo divididos entre los litros producidos"], answer: 3, why: "Incluye todos los costos, no solo el alimento." },
      { objective: "O5", q: "Los costos del mes son KES 50,000 y produjiste 1,250 litros. ¿Costo por litro?", options: ["KES 25", "KES 40", "KES 50", "KES 62"], answer: 1, why: "50,000 dividido entre 1,250 es 40." },
      { objective: "O5", q: "¿Qué registro necesitas para saber cuándo se puede vender otra vez la leche de una vaca tratada?", options: ["La fecha del tratamiento y el periodo de retiro de la etiqueta o del veterinario", "Su color", "El clima", "El precio del alimento"], answer: 0, why: "Anotar el tratamiento y su tiempo de retiro evita que los residuos de medicamentos lleguen a los compradores." },
      { objective: "O5", q: "Tu costo por litro es mayor que el precio. Un buen primer lugar para revisar es:", options: ["Comprar más vacas de una vez", "Vender leche sin análisis", "El desperdicio de alimento, las pérdidas por mastitis y la leche rechazada", "Dejar de llevar registros"], answer: 2, why: "El alimento suele ser el costo más grande, y la mastitis y los rechazos desperdician leche que ya pagaste por producir." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Animales y establo", objective: "O1", notYet: "No hay relación entre los animales, el establo y el alimento que tiene la finca.", meets: "La rutina se ajusta a los animales y al establo de la finca: un lugar de ordeño limpio, cama seca y el estiércol lejos.", exceeds: "Anota un arreglo del establo con fecha, como mejor drenaje o un lugar de ordeño aparte." },
      { name: "Rutina de ordeño", objective: "O2", notYet: "Faltan pasos o están en desorden, por ejemplo no hay lavado de manos o secado de pezones.", meets: "Todos los pasos, desde el ordeñador y los utensilios hasta filtrar, tapar y enfriar, en orden.", exceeds: "Dice quién hace cada paso y cómo se revisa la rutina cada semana." },
      { name: "Revisión de mastitis", objective: "O3", notYet: "La rutina no incluye señales de mastitis ni CMT, o hay tratamiento en casa sin el veterinario.", meets: "Enumera las señales, cuándo se hace una CMT, cómo se anotan los resultados y la llamada al veterinario en los positivos; la leche de animales tratados se aparta hasta que la etiqueta o el veterinario lo permitan.", exceeds: "Incluye una tabla sencilla de registro de CMT por animal y por cuarto." },
      { name: "Enfriamiento y entrega", objective: "O4", notYet: "La leche se deja tibia o se entrega tarde; se usan recipientes de plástico.", meets: "La leche se enfría de inmediato y se entrega dentro del tiempo del comprador, en recipientes de metal, sin agregar nada.", exceeds: "Anota las horas de entrega, los resultados de las pruebas y cualquier rechazo con su causa." },
      { name: "Costo por litro", objective: "O5", notYet: "Faltan costos o la cuenta está mal.", meets: "Todos los costos anotados, costo por litro correcto, comparado con el precio del comprador.", exceeds: "Nombra un cambio para bajar el costo por litro y cómo medirá su efecto el próximo mes." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Menos rechazos de leche en el centro de acopio o con el comprador en 3 meses (registros de entrega)",
      "Participantes que hacen una CMT a sus animales al menos una vez al mes (encuesta de seguimiento)",
      "Participantes que conocen y siguen su costo por litro después de 30 días (encuesta de seguimiento)",
      "Cambio en la leche promedio entregada por animal en 3 meses, cuando los registros lo permiten"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un cuaderno y un lápiz, o un teléfono con una hoja de cálculo o una aplicación de notas",
      "Una calculadora (la del teléfono sirve)",
      "Acceso a un animal en ordeño para las tareas de práctica, o a una finca demostrativa",
      "Una paleta CMT y reactivo, prestados por una cooperativa, un veterinario o la oficina de extensión si hace falta",
      "Unos 75 minutos en total, en sesiones cortas, más práctica en las horas de ordeño"
    ],
    facilitatorNotes: [
      "Haz la rutina de ordeño y la CMT como demostraciones en vivo en la finca de un miembro o en una cooperativa; deja que cada participante haga la CMT por sí mismo.",
      "Invita al centro de acopio o la cooperativa de la zona a mostrar sus pruebas de leche (alcohol, cuajado al hervir, lactómetro).",
      "Nunca des dosis de medicamentos, vacunas u hormonas ni periodos de retiro; envía a los participantes a su veterinario y a la etiqueta del producto.",
      "Pide a los participantes que traigan los recibos de alimento y las boletas de entrega de leche del mes pasado para la tarea de costo por litro; usa cifras de ejemplo para quienes no tengan registros.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Combina este curso con \"Nutrición del ganado y formulación de raciones con ingredientes locales\" para quienes tienen un costo por litro alto por el alimento."
    ]
  }
};

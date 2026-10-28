"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-post-harvest.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_LOSS = { name: "FAO: Reducción de la pérdida y el desperdicio de alimentos (cerca del 14 por ciento de los alimentos se pierde entre la cosecha y la venta al por menor, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO: Prevención y control de micotoxinas en granos: control de la aflatoxina en el maíz", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "Portal FAO TECA/STI: El maíz bien seco beneficia a todos: el secador solar de maíz", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA: Productos de biocontrol de aflatoxina Aflasafe para los agricultores de África", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Universidad Purdue: costales herméticos Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "Portal FAO TECA/STI: Cámara de enfriamiento sin energía (Zero Energy Cooling Chamber) para hortalizas", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest-es",
  lang: "es",
  translationOf: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Manejo y almacenamiento después de la cosecha",
  skills: "Encontrar dónde se pierde tu cosecha, Cosechar en el momento correcto, Secar el grano hasta una humedad segura, Prevenir la aflatoxina, Guardar el grano en costales herméticos, Enfriar, clasificar y empacar productos frescos",
  outcome: "manejar un plan poscosecha para un cultivo: cosecharlo en el momento correcto, secar el grano hasta una humedad segura, mantener fuera la aflatoxina, guardarlo en costales herméticos y mantener los productos frescos fríos, clasificados y bien empacados para el comprador.",
  about: [
    "Este curso es para pequeños agricultores y agricultores en crecimiento, trabajadores del campo, comerciantes y jóvenes que trabajan en agronegocios en Kenia, Nigeria, Ghana y en toda África. Una buena cosecha puede perder mucho de su valor después de salir del campo: el grano se enmohece o se lo comen los gorgojos, los tomates se aplastan, y los compradores pagan menos o lo rechazan.",
    "El capítulo 1 trata de levantar bien la cosecha: dónde y por qué ocurren las pérdidas, cosechar en el momento correcto y secar el grano hasta una humedad segura. El capítulo 2 trata de conservarla: prevenir la aflatoxina, guardar el grano en costales herméticos y mantener los productos frescos fríos, clasificados y bien empacados.",
    "Los compradores y las normas nacionales tienen sus propias reglas de calidad, así que siempre pregunta a tu comprador, tu cooperativa o tu extensionista qué piden. Cada lección dura unos cinco minutos y termina con una tarea en tu propia finca o bodega. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan poscosecha de una página para un cultivo (el tuyo, o un ejemplo como 2 acres de maíz en Trans Nzoia, 1 acre de tomate en Kaduna o caupí en Tamale): cuándo y cómo vas a cosechar, cómo lo vas a secar y a revisar la humedad (si es grano), cómo vas a mantener fuera la aflatoxina, cómo y dónde lo vas a guardar, y cómo lo vas a enfriar, clasificar y empacar para tu comprador, con las reglas de calidad del comprador escritas arriba.",
  chapters: [
    {
      name: "Capítulo 1: Levantar bien la cosecha",
      lessons: [
        {
          title: "Dónde se pierden las cosechas y por qué",
          minutes: 4,
          goal: "Seguir tu cultivo del campo al comprador y marcar dónde pierde cantidad o valor.",
          text: [
            "La FAO calculó en 2019 que cerca del 14 por ciento de los alimentos del mundo se pierde entre la cosecha y la tienda, antes de llegar a un puesto del mercado. En muchas fincas de África, las pérdidas de algunos cultivos son más altas. Cada costal perdido es semilla, fertilizante y trabajo tirados a la basura.",
            "Las pérdidas ocurren en cada paso: cosechar demasiado pronto o demasiado tarde, dejar el cultivo bajo la lluvia, manejarlo con brusquedad y golpearlo, el calor, secarlo muy despacio, insectos como los gorgojos y el barrenador mayor de los granos, las ratas, el moho y un mal empaque en caminos con baches. Algunas pérdidas se ven (menos costales); otras no (una calidad más baja, un precio más bajo o un grano que no es seguro comer).",
            "El primer paso es encontrar tus propias pérdidas más grandes. Sigue tu cultivo del campo al comprador y pregunta en cada paso: ¿qué sale mal aquí, cuánto se pierde y cuánto costaría arreglarlo?"
          ],
          steps: ["Haz una lista de cada paso por el que pasa tu cultivo: cosecha, acarreo, secado, trilla o desgrane, almacenamiento, empaque, transporte, venta.", "En cada paso, escribe qué sale mal (lluvia, golpes, insectos, ratas, moho).", "Calcula cuánto se pierde o cuánto baja el precio.", "Encierra en un círculo las dos pérdidas más grandes; por ahí empiezas."],
          words: [["Pérdida poscosecha", "comida o valor que se pierde entre la cosecha y la venta."], ["Barrenador mayor de los granos", "un escarabajo que perfora el maíz y la yuca guardados y los vuelve polvo."], ["Calidad (grado)", "una clase de calidad, como primera o segunda, que fija el precio."]],
          slides: [
            { title: "El tamaño de la pérdida (FAO)", bullets: ["Cerca del 14 por ciento se pierde entre la cosecha y la tienda", "Muchas veces más en algunos cultivos de fincas africanas", "Cada costal perdido desperdicia semilla, fertilizante y trabajo"] },
            { title: "Por qué pasa", bullets: ["Cosecha a destiempo, lluvia, secado lento", "Golpes, calor, transporte brusco", "Gorgojos, barrenadores, ratas, moho"] },
            { title: "Encuentra tus pérdidas más grandes", bullets: ["Sigue el cultivo del campo al comprador", "Pregunta qué sale mal en cada paso", "Empieza por las dos más grandes"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "Dibuja el camino de tu cultivo del campo al comprador como una fila de cajas. Debajo de cada caja, escribe qué sale mal ahí y más o menos cuánto se pierde. Encierra en un círculo las dos pérdidas más grandes.",
          youCanNow: "hacer el mapa de dónde pierde cantidad o valor tu cosecha y elegir qué pérdidas arreglar primero."
        },
        {
          title: "Cosechar en el momento correcto",
          minutes: 5,
          goal: "Conocer las señales de que cada uno de tus cultivos está listo y planear los días de cosecha.",
          text: [
            "Cosechar demasiado pronto da grano chico y ligero, o productos que no maduran bien; demasiado tarde invita al daño por lluvia, los insectos, los pájaros, los robos y la pudrición. Aprende las señales de cada cultivo.",
            "El maíz está maduro cuando las hojas de la mazorca están secas y el grano está duro, con una capa negra en la base; después puede secarse un poco más en la planta si el tiempo está seco, pero no lo dejes afuera durante las lluvias. El frijol y el caupí están listos cuando la mayoría de las vainas están secas y suenan. El sorgo está listo cuando el grano está duro y no se marca con la uña. Los tomates se cortan en la etapa de color que quiere tu comprador (muchas veces cuando apenas empiezan a cambiar de color, si van a mercados lejanos). Café: corta solo las cerezas rojas y maduras. Té: corta el brote tierno, casi siempre dos hojas y una yema. Las raíces de yuca se echan a perder a los pocos días de cosecharlas, así que saca solo lo que puedas vender o procesar pronto.",
            "Planea los días de cosecha con el pronóstico del tiempo. Cosecha los productos frescos temprano en la mañana, cuando hace fresco, mantenlos en la sombra y ten listos los costales, las cajas, las lonas y la mano de obra antes de empezar."
          ],
          steps: ["Escribe las señales de madurez de cada cultivo que siembras.", "Recorre el terreno y revisa las señales cada semana cuando se acerca la cosecha.", "Revisa el pronóstico y elige días secos para el grano.", "Ten listos las lonas, los costales o las cajas y la mano de obra.", "Cosecha los productos frescos en la mañana fresca y mantenlos en la sombra."],
          words: [["Madurez", "la etapa en que un cultivo terminó de crecer y está listo para cosechar."], ["Capa negra", "una mancha oscura en la base del grano de maíz que muestra que está maduro."], ["Dos hojas y una yema", "el brote tierno de té que cortan los recolectores para un té de buena calidad."]],
          slides: [
            { title: "Muy pronto o muy tarde, los dos cuestan", bullets: ["Muy pronto: chico, ligero, madura mal", "Muy tarde: lluvia, insectos, pájaros, robos, pudrición"] },
            { title: "Señales de que está listo", bullets: ["Maíz: hojas de mazorca secas, grano duro, capa negra", "Frijol: la mayoría de las vainas secas y suenan", "Café: solo cerezas rojas maduras; té: dos hojas y una yema"] },
            { title: "Cultivos frescos", bullets: ["Tomate: la etapa de color que pide el comprador", "Yuca: saca solo lo que puedas vender pronto", "Cosecha en la mañana fresca; guarda en la sombra"] },
            { title: "Prepárate", bullets: ["Revisa el pronóstico; elige días secos", "Primero lonas, costales, cajas y mano de obra"] }
          ],
          tryIt: "Para dos cultivos que siembras, escribe las señales de que están listos y la fecha en que esperas cosechar. Pregunta a tu comprador qué etapa o calidad quiere y anótalo. Pon un recordatorio en el teléfono para revisar el pronóstico una semana antes.",
          youCanNow: "saber cuándo están listos tus cultivos y planear días de cosecha que protejan la calidad."
        },
        {
          title: "Secar el grano hasta una humedad segura",
          minutes: 6,
          goal: "Secar el grano rápido y revisar que haya llegado a una humedad segura para guardarlo.",
          text: [
            "El grano recién cosechado tiene mucha agua. El grano húmedo se calienta, se enmohece y atrae insectos. La guía de la FAO sobre el maíz dice que secarlo hasta una humedad segura de cerca del 13 al 14 por ciento antes de que crezca el moho es la forma más segura de prevenir la aflatoxina, y que el secado debe ser rápido: el grano que se queda húmedo más de unos dos días corre mucho más riesgo. Tu comprador, tu cooperativa o la norma nacional pueden fijar su propio máximo, así que pregunta.",
            "Seca sobre una lona limpia, una tarima elevada, un petate o un piso de cemento, nunca sobre la tierra. Extiende el grano en una capa delgada, voltéalo varias veces al día y tápalo o mételo antes de la lluvia y en la noche. El grano desgranado se seca más rápido que el grano en la mazorca. Los secadores solares, unos marcos sencillos con una cubierta de plástico transparente, secan más rápido y protegen de la lluvia, el polvo y los animales.",
            "Revisa la humedad antes de guardarlo. La mejor herramienta es un medidor de humedad; las cooperativas, los compradores, las oficinas de extensión y las bodegas muchas veces tienen uno. Una revisión casera aproximada es la prueba de la sal: pon un puñado de sal seca y un poco de grano en una botella de vidrio limpia y seca, agítala dos o tres minutos, y si la sal se pega al vidrio, el grano todavía está muy húmedo. El grano que pasa la prueba puede estar todavía un poco húmedo, así que confirma con un medidor cuando puedas."
          ],
          steps: ["Cosecha con tiempo seco.", "Extiende el grano en capa delgada sobre una lona, un petate, una tarima o cemento, nunca sobre la tierra.", "Voltéalo varias veces al día; tápalo de la lluvia y en la noche.", "Seca rápido: busca llegar a una humedad segura en unos dos días después de desgranar.", "Haz la prueba de la sal; confirma con un medidor de humedad en tu cooperativa o con tu comprador.", "Guárdalo solo cuando esté seco."],
          words: [["Contenido de humedad", "cuánta agua hay en el grano, como porcentaje de su peso."], ["Medidor de humedad", "una herramienta que mide la humedad del grano."], ["Prueba de la sal", "una revisión casera aproximada: la sal seca se pega a la botella si el grano está muy húmedo."], ["Secador solar", "un marco con cubierta transparente que usa el sol para secar los cultivos más rápido y más limpio."]],
          slides: [
            { title: "Por qué secar", bullets: ["El grano húmedo se calienta, se enmohece y atrae insectos", "FAO: secar el maíz a cerca del 13 al 14 por ciento", "Rápido: en unos dos días"] },
            { title: "Cómo secar", bullets: ["Lona, petate, tarima o cemento, nunca sobre la tierra", "Capa delgada, voltéalo seguido", "Tápalo antes de la lluvia y en la noche"] },
            { title: "Revisa antes de guardar", bullets: ["Lo mejor: medidor de humedad (cooperativa, comprador, extensión)", "Revisión aproximada: prueba de la sal en botella seca", "La sal se pega = muy húmedo; sigue secando"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Haz la prueba de la sal con un puñado de tu grano (o el de un vecino): botella seca, sal seca, agita dos o tres minutos, mira el vidrio. Luego averigua quién tiene un medidor de humedad cerca de ti y cuál es la humedad máxima que acepta el comprador.",
          youCanNow: "secar el grano rápido sobre una superficie limpia y revisar que llegó a una humedad segura antes de guardarlo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Levantar bien la cosecha",
        questions: [
          { q: "¿Qué parte de los alimentos calculó la FAO que se pierde entre la cosecha y la tienda (2019)?", options: ["1 por ciento", "50 por ciento", "Cerca del 14 por ciento", "Nada"], answer: 2, why: "El cálculo de la FAO de 2019 fue de cerca del 14 por ciento perdido entre la cosecha y la venta al por menor." },
          { q: "¿Cuál es una señal de que el grano de maíz está maduro?", options: ["Hojas de la mazorca verdes y mojadas", "Grano blando y lechoso", "Los pelos apenas están saliendo", "Una capa negra en la base del grano"], answer: 3, why: "La capa negra muestra que el grano llegó a la madurez." },
          { q: "Tienes 2 acres de yuca y esta semana solo puedes vender una cuarta parte. ¿Qué haces?", options: ["Sacas solo lo que puedas vender o procesar pronto", "La sacas toda de una vez", "La sacas toda y la dejas al sol", "Nunca cosechas yuca"], answer: 0, why: "Las raíces de yuca se echan a perder a los pocos días de cosecharlas." },
          { q: "¿Dónde debes secar el maíz?", options: ["Sobre la tierra", "Sobre una lona limpia, un petate, una tarima o un piso de cemento", "En un costal cerrado bajo la lluvia", "En un montón en el campo"], answer: 1, why: "Una superficie limpia, elevada o cubierta mantiene limpio el grano y lo seca más rápido." },
          { q: "En la prueba de la sal, la sal se pega al vidrio. ¿Qué quiere decir?", options: ["El grano está bastante seco para guardarlo", "El grano tiene aflatoxina", "El grano todavía está muy húmedo; sigue secando", "La sal está mala"], answer: 2, why: "La sal pegada al vidrio muestra que el grano todavía tiene demasiada humedad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantener la cosecha segura y lista para vender",
      lessons: [
        {
          title: "Aflatoxina: qué es y cómo prevenirla",
          minutes: 6,
          goal: "Usar los pasos principales que mantienen la aflatoxina fuera de tu maíz y tu cacahuate.",
          text: [
            "La aflatoxina es un veneno que producen ciertos mohos (Aspergillus) que crecen en el maíz, el cacahuate, el sorgo y otros cultivos, en el campo y en el almacén. Muchas veces no se puede ver, oler ni saborear. Comerla con el tiempo daña el hígado y se relaciona con el cáncer de hígado y con el retraso del crecimiento en los niños; en grandes cantidades puede matar. También pasa del alimento de los animales a la leche y los huevos. Los compradores y los organismos nacionales de normas de alimentos la analizan y rechazan el grano que pasa del límite legal.",
            "La prevención empieza en el campo: cultivos sanos, siembra a tiempo y control de los insectos que dañan las mazorcas y las vainas. Cosecha a tiempo, no dejes el cultivo tirado en el suelo y sécalo rápido hasta una humedad segura. La FAO señala que la aflatoxina en el maíz guardado sube con el daño de los gorgojos, así que mantén limpio el almacén y fuera los insectos.",
            "Separa antes de guardar: quita los granos y las mazorcas con moho, rotos, descoloridos, dañados por insectos y arrugados. Nunca comas, vendas ni des a los animales grano con moho. Los productos de biocontrol como Aflasafe, creado por el IITA y registrado en países como Kenia, Nigeria y Ghana, se aplican en el campo antes de la floración para desplazar a los mohos tóxicos; pregunta a tu extensionista o a tu distribuidor de insumos si hay uno aprobado para tu cultivo y tu zona, y sigue la etiqueta."
          ],
          steps: ["Controla en el campo los insectos que dañan las mazorcas y las vainas.", "Cosecha a tiempo; no dejes el cultivo en el suelo.", "Seca rápido hasta una humedad segura.", "Separa el grano con moho, roto, descolorido y dañado por insectos.", "Guárdalo en un almacén limpio, seco y a prueba de insectos.", "Pregunta a la extensión por un producto de biocontrol aprobado para tu zona."],
          words: [["Aflatoxina", "un veneno que producen algunos mohos en cultivos como el maíz y el cacahuate."], ["Aspergillus", "el grupo de mohos que pueden producir aflatoxina."], ["Biocontrol", "usar un organismo vivo inofensivo para desplazar a uno dañino."], ["Selección", "sacar a mano o a máquina los granos o productos malos."]],
          slides: [
            { title: "Qué es la aflatoxina", bullets: ["Un veneno que producen algunos mohos", "Muchas veces invisible: sin olor ni sabor", "Daña el hígado; se liga al cáncer y al retraso del crecimiento"] },
            { title: "Frénala en cada paso", bullets: ["Cultivo sano; controla plagas de mazorcas y vainas", "Cosecha a tiempo; seca rápido a humedad segura", "Almacén limpio, seco y a prueba de insectos"] },
            { title: "Separa y nunca uses grano con moho", bullets: ["Quita granos con moho, rotos o descoloridos", "Nunca comas, vendas ni des a animales grano con moho", "Pasa a la leche y los huevos"] },
            { title: "Biocontrol", bullets: ["Aflasafe (IITA): registrado en Kenia, Nigeria, Ghana", "Se aplica en el campo antes de la floración", "Pregunta a la extensión; sigue la etiqueta"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Toma una muestra de grano o de cacahuate guardado y sepáralo en una charola: aparta los granos con moho, rotos, descoloridos y dañados por insectos. Pésalos o cuéntalos y escribe qué parte quitaste. Escribe dos pasos que vas a cambiar la próxima temporada para que sea menos.",
          youCanNow: "explicar por qué la aflatoxina es peligrosa y usar pasos en el campo, el secado, la selección y el almacenamiento para mantenerla fuera."
        },
        {
          title: "Guardar el grano en costales herméticos",
          minutes: 5,
          goal: "Llenar, cerrar y guardar un costal hermético para que los insectos mueran sin químicos.",
          text: [
            "Hermético quiere decir que no deja pasar el aire. Un costal hermético, como el costal PICS creado en la Universidad Purdue, tiene dos bolsas de plástico por dentro de un costal tejido exterior. Una vez cerrado, los insectos y el grano gastan el oxígeno de adentro y los insectos mueren o dejan de reproducirse, sin insecticida. Purdue menciona el maíz, el sorgo, el frijol, el caupí, el cacahuate, el arroz y otros cultivos como adecuados para estos costales.",
            "El costal solo funciona si el grano está seco y el costal no deja pasar el aire. Guarda solo grano seco, limpio y seleccionado. Llena la bolsa de adentro, saca todo el aire que puedas, tuerce la boca y amárrala bien; luego haz lo mismo con la segunda bolsa y al final con el costal de afuera. Revisa que no tenga agujeros antes de usarlo; un agujero pequeño deja entrar aire y el costal deja de funcionar.",
            "Pon los costales sobre tarimas o tablas, sin tocar el suelo, lejos de las paredes, en un almacén limpio, seco y con sombra, y protégelos de las ratas, que hacen agujeros. No los abras seguido: cada vez que los abres entra aire fresco. Los costales que siguen enteros se pueden volver a usar la próxima temporada. Otras buenas opciones son los silos metálicos y los graneros (trojes) limpios, elevados y bien ventilados para las mazorcas."
          ],
          steps: ["Revisa que el grano esté seco, limpio y seleccionado.", "Revisa que las bolsas de adentro no tengan agujeros.", "Llena la bolsa de adentro, saca el aire, tuerce y amarra bien.", "Amarra igual la segunda bolsa y luego el costal de afuera.", "Guárdalo sobre tarimas, lejos de las paredes, en un almacén seco, con sombra y a prueba de ratas.", "Ábrelo solo cuando haga falta; vuelve a usar los costales que sigan enteros."],
          words: [["Hermético", "que no deja pasar el aire: no puede entrar ni salir."], ["Bolsa interior", "una bolsa de plástico dentro del costal de afuera."], ["Tarima", "una plataforma de madera que mantiene los costales sin tocar el suelo."], ["Silo metálico", "un depósito de metal cerrado para guardar grano."]],
          slides: [
            { title: "Cómo funcionan los costales herméticos", bullets: ["Dos bolsas de plástico dentro de un costal tejido (PICS)", "Cerrado: se acaba el oxígeno y los insectos mueren", "No necesita insecticida"] },
            { title: "Ciérralo bien", bullets: ["Solo grano seco, limpio y seleccionado", "Saca el aire; tuerce y amarra cada capa", "Primero revisa que las bolsas no tengan agujeros"] },
            { title: "Guárdalo bien", bullets: ["Sobre tarimas, lejos de las paredes", "Almacén seco, con sombra y a prueba de ratas", "Ábrelo poco; vuelve a usar los costales enteros"] }
          ],
          sources: [PICS],
          tryIt: "Mira tu almacén. Escribe tres cambios que protegerían los costales (tarimas, espacio con las paredes, protección contra ratas, sombra). Si puedes, compra un costal hermético con un distribuidor de insumos y practica amarrar cada capa con grano seco.",
          youCanNow: "cerrar y guardar grano en costales herméticos para que se conserve sin químicos."
        },
        {
          title: "Mantener frescos los productos, clasificarlos y empacarlos",
          minutes: 5,
          goal: "Mantener fríos los productos frescos, clasificarlos según la norma del comprador y empacarlos para que lleguen sin golpes.",
          text: [
            "Los productos frescos como el tomate, la col rizada (kale), el mango y el aguacate siguen vivos y respirando después de la cosecha. El calor acelera esto, así que maduran, se marchitan y se pudren más rápido. Cosecha en la mañana fresca, mantén los productos siempre en la sombra y llévalos rápido al comprador.",
            "Sin electricidad, un enfriador por evaporación ayuda. La cámara de enfriamiento sin energía (Zero Energy Cooling Chamber) que presenta la FAO es una doble pared de ladrillo con arena mojada entre las paredes y una tapa mojada arriba; al evaporarse el agua, enfría el interior y mantiene el aire húmedo para que los productos no se marchiten. Funciona mejor en lugares secos y calurosos. Los enfriadores de ollas de barro funcionan igual en tamaño más pequeño.",
            "Clasificar es separar los productos en clases según el tamaño, la madurez y la calidad, y quitar los dañados para que no echen a perder a los demás. Los compradores pagan más por productos parejos, limpios y clasificados. Empaca en cajas limpias, fuertes y con ventilación en lugar de costales para los productos blandos, no las llenes de más y ponle a cada caja una etiqueta con la clase, la fecha y tu nombre. Una foto con el teléfono de cada lote clasificado ayuda a resolver desacuerdos con los compradores."
          ],
          steps: ["Pregunta al comprador cuáles son sus clases: tamaño, madurez, calidad.", "Cosecha en la mañana fresca y mantén los productos en la sombra.", "Sepáralos por clases; quita los dañados.", "Usa un enfriador por evaporación si tienes que guardar productos.", "Empaca en cajas limpias y con ventilación; no las llenes de más.", "Etiqueta las cajas con la clase, la fecha y tu nombre; toma una foto."],
          words: [["Enfriador por evaporación", "un almacén que se enfría con el agua que se evapora de paredes, arena o tela mojadas."], ["Clasificación", "separar los productos en clases de calidad."], ["Caja con ventilación", "una caja con agujeros que deja pasar el aire alrededor de los productos."]],
          slides: [
            { title: "El calor es el enemigo", bullets: ["Los productos siguen respirando después de la cosecha", "Cosecha en la mañana fresca", "Siempre a la sombra; vende rápido"] },
            { title: "Enfriar sin electricidad (FAO)", bullets: ["Cámara sin energía: arena mojada entre paredes de ladrillo", "Fresco y húmedo por dentro", "Mejor en lugares secos y calurosos"] },
            { title: "Clasifica y empaca", bullets: ["Separa por tamaño, madurez y calidad", "Cajas limpias y con ventilación, no costales", "Etiqueta clase, fecha y nombre; toma una foto"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Tarea final: escribe tu plan poscosecha de una página para un cultivo. Pon arriba las reglas de calidad del comprador, y luego cuándo vas a cosechar, el secado y la revisión de humedad (si es grano), los pasos contra la aflatoxina, el almacenamiento y cómo vas a enfriar, clasificar y empacar.",
          youCanNow: "mantener frescos los productos, clasificarlos y empacarlos según la norma del comprador, y manejar un plan poscosecha completo para un cultivo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantener la cosecha segura y lista para vender",
        questions: [
          { q: "¿Qué es la aflatoxina?", options: ["Un fertilizante", "Un veneno que producen algunos mohos en los cultivos", "Un tipo de gorgojo", "Un costal para guardar grano"], answer: 1, why: "La aflatoxina es un veneno que producen ciertos mohos Aspergillus." },
          { q: "Tu maíz tiene algunas mazorcas con moho. ¿Qué debes hacer con ellas?", options: ["Dárselas a las gallinas", "Mezclarlas con el grano bueno", "Venderlas baratas", "Quitarlas; no comerlas, venderlas ni darlas a los animales"], answer: 3, why: "La aflatoxina hace daño a las personas y pasa del alimento de los animales a la leche y los huevos." },
          { q: "¿Cómo mata un costal hermético a los insectos del almacén?", options: ["Al cerrarlo, se acaba el oxígeno de adentro", "Tiene veneno", "Se calienta", "Deja entrar aire fresco"], answer: 0, why: "Bien cerrado, el oxígeno se gasta y los insectos mueren sin químicos." },
          { q: "¿Por qué poner los costales de grano sobre tarimas y lejos de las paredes?", options: ["Solo para que se vea ordenado", "Para que pesen más", "Para que no les llegue la humedad y sea más fácil ver ratas y plagas", "Para que les dé el sol"], answer: 2, why: "Las tarimas y el espacio con las paredes mantienen secos los costales y más fáciles de revisar." },
          { q: "¿Cuál es la mejor forma de empacar tomates maduros para el mercado?", options: ["Apretados en un costal", "Sueltos en el piso de un camión", "En una bolsa de plástico cerrada al sol", "En cajas limpias y con ventilación, sin llenarlas de más"], answer: 3, why: "Las cajas protegen a los productos blandos de aplastarse y dejan pasar el aire." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Manejo y almacenamiento después de la cosecha",
    questions: [
      { q: "¿Cuál es una causa común de pérdida poscosecha?", options: ["Secar rápido", "Gorgojos, ratas y moho en el almacén", "Cajas limpias", "Clasificar"], answer: 1, why: "Las plagas y el moho en el almacén son causas importantes de pérdida." },
      { q: "¿Por qué hacer el mapa del camino de tu cultivo del campo al comprador?", options: ["Para encontrar dónde ocurren las pérdidas más grandes", "Para que el camino sea más largo", "Para evitar al comprador", "No sirve"], answer: 0, why: "Saber dónde ocurren las pérdidas te dice dónde actuar primero." },
      { q: "Un precio más bajo por mala calidad es:", options: ["No es una pérdida", "Una ganancia", "Una pérdida poscosecha escondida", "Un impuesto"], answer: 2, why: "Perder calidad o precio es perder valor aunque no se pierda ningún costal." },
      { q: "El frijol está listo para cosechar cuando:", options: ["Se abren las flores", "Las hojas están verde oscuro", "Las vainas todavía están blandas", "La mayoría de las vainas están secas y suenan"], answer: 3, why: "Las vainas secas que suenan muestran que el frijol está maduro." },
      { q: "Al cortar café, debes cortar:", options: ["Solo las cerezas rojas y maduras", "Cerezas verdes", "Hojas y cerezas juntas", "Cerezas del suelo"], answer: 0, why: "Las cerezas rojas y maduras dan el café de mejor calidad." },
      { q: "La norma usual para cortar el té es:", options: ["Hojas viejas y duras", "Dos hojas y una yema", "Ramas enteras", "Raíces"], answer: 1, why: "Los brotes tiernos de dos hojas y una yema dan un buen té." },
      { q: "¿Por qué cosechar los productos frescos en la mañana fresca?", options: ["Los compradores se levantan más tarde", "Es más barato", "El calor acelera la maduración, el marchitamiento y la pudrición", "El rocío de la mañana agrega peso"], answer: 2, why: "Los productos frescos duran más." },
      { q: "La guía de la FAO da como humedad segura para guardar maíz cerca del:", options: ["13 al 14 por ciento", "25 por ciento", "40 por ciento", "2 por ciento"], answer: 0, why: "La FAO dice que secar a cerca del 13 al 14 por ciento antes de que crezca el moho es la forma más segura de prevenir la aflatoxina." },
      { q: "¿Qué tan rápido se debe secar el maíz recién desgranado?", options: ["En unas dos semanas", "No hay prisa", "Después de la próxima temporada de lluvias", "En unos dos días"], answer: 3, why: "La FAO señala que la aflatoxina sube rápido si el maíz se queda húmedo más de unos dos días." },
      { q: "La forma más exacta de revisar la humedad del grano es:", options: ["Morder un grano", "Un medidor de humedad", "Ver el color", "Pesar el costal"], answer: 1, why: "Un medidor de humedad la mide; la prueba de la sal es solo una revisión aproximada." },
      { q: "¿Por qué no secar el grano sobre la tierra?", options: ["Se seca demasiado rápido", "Lo prohíben todas las leyes", "La tierra, la humedad y las esporas de moho se meten en el grano", "La tierra hace el grano más pesado y más valioso"], answer: 2, why: "La tierra desnuda ensucia el grano y lo mantiene húmedo." },
      { q: "La aflatoxina es peligrosa en parte porque:", options: ["Huele fuerte y la gente la evita", "Muchas veces no se puede ver, oler ni saborear", "Solo afecta a las plantas", "Desaparece cuando se cocina el grano"], answer: 1, why: "Casi siempre es invisible, así que la prevención y los análisis importan." },
      { q: "La aflatoxina en el alimento de los animales puede:", options: ["Pasar a la leche y los huevos", "Hacer que los animales crezcan más rápido", "No hacerles nada a los animales", "Convertirse en fertilizante"], answer: 0, why: "La aflatoxina del alimento puede aparecer en la leche y los huevos." },
      { q: "Aflasafe es:", options: ["Un costal para guardar grano", "Un medidor de humedad", "Una marca de semilla de maíz", "Un producto de biocontrol que desplaza a los mohos tóxicos"], answer: 3, why: "Aflasafe, del IITA, usa mohos inofensivos para desplazar a los tóxicos." },
      { q: "Antes de usar un producto de biocontrol, debes:", options: ["Mezclarlo con el grano guardado", "Confirmar con la extensión que está aprobado para tu cultivo y tu zona, y seguir la etiqueta", "Usar el doble", "Usarlo solo después de la cosecha"], answer: 1, why: "Usa solo productos aprobados, como dice la etiqueta." },
      { q: "¿Qué tiene que cumplirse antes de meter el grano en un costal hermético?", options: ["Que esté seco, limpio y seleccionado", "Que todavía esté húmedo", "Que esté mezclado con insecticida", "Que esté caliente por el sol"], answer: 0, why: "Los costales herméticos no secan el grano; el grano húmedo igual se enmohece." },
      { q: "Una bolsa interior de un costal hermético tiene un agujero pequeño. ¿Qué pasa?", options: ["Nada", "Funciona mejor", "Entra aire y el costal deja de funcionar", "El grano se seca más rápido"], answer: 2, why: "El costal tiene que ser hermético para dejar sin oxígeno a los insectos." },
      { q: "¿Por qué no debes abrir seguido los costales herméticos?", options: ["Se ponen más pesados", "Cada vez que los abres entra aire fresco", "Abrirlos es ilegal", "A los insectos les gusta la luz"], answer: 1, why: "El aire fresco les devuelve el oxígeno a los insectos." },
      { q: "Una cámara de enfriamiento sin energía enfría los productos con:", options: ["Electricidad", "Hielo de la tienda", "Gas", "El agua que se evapora de la arena mojada entre paredes de ladrillo"], answer: 3, why: "La evaporación enfría la cámara y mantiene el aire húmedo." },
      { q: "¿Por qué clasificar los productos antes de venderlos?", options: ["Los compradores pagan más por productos parejos, limpios y separados", "Hace que se pudran más rápido", "Esconde los dañados", "Es solo para exportar"], answer: 0, why: "Clasificar cumple con las normas del comprador y quita los productos dañados." }
    ]
  }
};

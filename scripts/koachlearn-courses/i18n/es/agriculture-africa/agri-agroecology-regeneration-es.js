"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-agroecology-regeneration.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_AE = { name: "FAO: Plataforma de conocimientos sobre agroecología", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO: Los 10 elementos de la agroecología (adoptados por los miembros de la FAO en 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110: Regeneración natural gestionada por el agricultor (FMNR), pasos para el éxito (con World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Uganda: guía de uso de la FMNR", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO: Agroforestería", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi et al.: ¿Puede la integración de árboles leguminosos aumentar la estabilidad del rendimiento en sistemas de maíz de temporal en el sur de África? (ensayos en Malaui y Zambia)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia: variaciones en la concentración de nutrientes de las hojas e implicaciones para la transferencia de biomasa (oeste de Kenia)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO: La importancia de la materia orgánica del suelo", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "Manejo de nutrientes 4R en la agricultura africana: manual de extensión", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration-es",
  lang: "es",
  translationOf: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Agroecología y regeneración del suelo",
  skills: "Aplicar los principios de la agroecología, Recuperar la tierra con cultivos de cobertura y abono verde, Regenerar árboles con FMNR, Unir cultivos y ganado, Reducir el gasto en fertilizante, Medir la mejora del suelo temporada tras temporada",
  outcome: "escribir y empezar un plan de tres temporadas para devolverle la vida a un campo degradado con agroecología: cultivos de cobertura o abonos verdes, árboles, lazos entre cultivos y ganado y nutrientes de la propia finca, con menos gasto en fertilizante comprado y medidas sencillas para ver cómo mejora el suelo.",
  about: [
    "Este curso es para pequeños productores y agricultores comerciales en crecimiento, jóvenes emprendedores agrícolas, trabajadores agrícolas y extensionistas de Kenia, Nigeria, Ghana, Níger, Senegal y toda África cuya tierra está cansada: los rendimientos bajan, el suelo está duro o se lo lleva el agua, la striga (una maleza parásita) se extiende y el fertilizante cuesta más cada año.",
    "El capítulo 1 trata de los principios de la agroecología y de cómo recuperar la tierra degradada: cultivos de cobertura y abonos verdes, árboles fertilizantes y la regeneración natural gestionada por el agricultor (FMNR, por sus siglas en inglés), que ha ayudado a los agricultores de Níger a hacer volver los árboles en millones de hectáreas. El capítulo 2 une cultivos y ganado, aprovecha la biodiversidad a tu favor, reduce el costo del fertilizante importado y te muestra cómo medir la mejora temporada tras temporada.",
    "El curso \"Salud y fertilidad del suelo\" trata del análisis de suelo, el compost, la rotación y el acolchado; este curso parte de ahí y no lo repite. La regeneración toma varias temporadas, así que empieza en un solo campo y compara. Las cifras de dinero son ejemplos inventados. Cada lección dura unos cinco minutos y termina con una tarea en tu propia tierra."
  ],
  finalTask: "Escribe un plan de regeneración de tres temporadas para un campo degradado de tu finca (o un ejemplo: 1 acre de tierra de maíz cansada en Kakamega, 2 hectáreas de sorgo y maní en Zinder, Níger, o 1 hectárea de yuca en el estado de Oyo): cómo está el campo ahora; qué cultivos de cobertura, abonos verdes o árboles usarás y cuándo; cómo se alimentarán mutuamente los cultivos y los animales; cuántos costales de fertilizante comprado quieres reemplazar y el dinero ahorrado; y las cuatro o más medidas que anotarás cada temporada, con un dibujo del campo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes emprendedores agrícolas y extensionistas de toda África (Kenia, Nigeria, Ghana y África Occidental francófona, incluido el Sahel), que cultivan maíz, yuca, sorgo, mijo, frijol, maní, arroz, cacao y café, a menudo con cabras, ganado vacuno, cerdos o aves.",
    startingPoint: "Conocen lo básico del compost, el estiércol, la rotación y el acolchado, y ven que su suelo está degradado. Pocos usan a propósito cultivos de cobertura, abonos verdes, árboles fertilizantes o la FMNR, unen cultivos y animales como un sistema o miden cómo cambia el suelo con el tiempo.",
    gap: "Los suelos degradados y el precio creciente del fertilizante aprietan los rendimientos y los ingresos. Los participantes necesitan formas prácticas y baratas de reconstruir el suelo y reducir los insumos comprados, y una manera de ver si funciona, para seguir adelante durante las primeras temporadas, que son lentas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Tierra y mano de obra: parcelas pequeñas, mano de obra familiar, usos que compiten por los residuos (alimento para animales, combustible)",
      "Tiempo: la regeneración toma varias temporadas; las lecciones duran de 4 a 6 minutos",
      "Dinero: las cifras son ejemplos; no se dan precios ni subsidios como hechos",
      "Derechos sobre la tierra: las reglas sobre árboles y pastoreo cambian según la comunidad y el país; los participantes consultan las reglas y los reglamentos locales"
    ],
    prerequisites: "Se recomienda tomar primero \"Salud y fertilidad del suelo\" (análisis, compost, rotación, acolchado)."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una lista de prácticas de tu finca", action: "relacionar cada práctica con el principio de la agroecología que usa, como el reciclaje, la diversidad o las sinergias", standard: "relacionando bien al menos cinco prácticas" },
    { id: "O2", condition: "Para un campo degradado", action: "elegir un cultivo de cobertura o un abono verde y planear cuándo sembrarlo y cuándo cortarlo", standard: "con una especie que se ajuste a tu lluvia y una fecha de siembra y de corte" },
    { id: "O3", condition: "En una parcela con tocones de árboles vivos o espacio para árboles", action: "planear paso a paso la regeneración natural gestionada por el agricultor o los árboles fertilizantes", standard: "cubriendo qué tocones o árboles, cuántos tallos, la poda y la protección contra los animales y el fuego" },
    { id: "O4", condition: "Con los cultivos y los animales de tu finca", action: "dibujar los flujos de alimento, estiércol y residuos entre tus cultivos y tus animales", standard: "mostrando al menos tres lazos y un lugar por donde los nutrientes salen de la finca" },
    { id: "O5", condition: "Con el uso de fertilizante de la temporada pasada", action: "estimar cuántos costales de fertilizante comprado pueden reemplazar los nutrientes de la finca y el dinero ahorrado", standard: "en moneda local, marcado como una estimación que hay que revisar con el extensionista" },
    { id: "O6", condition: "En el campo que estás recuperando", action: "anotar medidas sencillas del suelo y de la finca en la misma época de cada temporada", standard: "usando al menos cuatro medidas, escritas y comparadas con la temporada anterior" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Principios y recuperación de la tierra",
      lessons: [
        {
          title: "Agroecología: principios que puedes usar en tu finca",
          objectives: ["O1"],
          minutes: 5,
          goal: "Relacionar las prácticas de tu finca con los principios de la agroecología.",
          text: [
            "La agroecología quiere decir cultivar siguiendo cómo funciona la naturaleza: usar plantas, animales, la vida del suelo, árboles y el saber de la gente para que la finca se alimente más a sí misma y compre menos de fuera. La FAO, la organización de las Naciones Unidas para la alimentación y la agricultura, describe 10 elementos de la agroecología, adoptados por sus países miembros en 2019.",
            "Cinco tratan de cómo funciona la finca: el reciclaje (los nutrientes y los desechos vuelven a la finca), la eficiencia (más de la misma agua, tierra e insumos), la diversidad (muchos cultivos, animales y árboles), las sinergias (partes que se ayudan entre sí, como las leguminosas que alimentan al maíz) y la resiliencia (aguantar los golpes). Cinco tratan de las personas: la creación conjunta de conocimiento (agricultores e investigadores que aprenden juntos), los valores humanos y sociales, la cultura y las tradiciones alimentarias, la gobernanza responsable, y la economía circular y solidaria (vender y comprar en lo local y de forma justa).",
            "Seguramente ya usas algunos. Darles el rastrojo de maíz a las cabras y devolver su estiércol al campo es reciclaje y sinergia. Intercalar yuca con maní es diversidad. Una escuela de campo para agricultores es creación conjunta de conocimiento. La agroecología te pide usarlos a propósito y agregar más, paso a paso."
          ],
          words: [["Agroecología", "una forma de cultivar que usa procesos naturales y el saber local para que la finca necesite menos insumos comprados y aguante mejor los golpes."], ["Sinergia", "cuando dos partes de la finca se ayudan, de modo que juntas dan más que por separado."], ["Reciclaje (en una finca)", "devolver al suelo los residuos de cosecha, el estiércol y los desechos en lugar de perderlos."]],
          slides: [
            { title: "La agroecología es...", bullets: ["Cultivar con los procesos de la naturaleza", "La finca se alimenta más y compra menos", "FAO: 10 elementos, adoptados en 2019"] },
            { title: "Cómo funciona la finca", bullets: ["Reciclaje y eficiencia", "Diversidad y sinergias", "Resiliencia"] },
            { title: "Personas y justicia", bullets: ["Crear conocimiento juntos", "Valores sociales, cultura alimentaria", "Buena gobernanza; economía circular y justa"] },
            { title: "Puede que ya lo hagas", bullets: ["Rastrojo a las cabras, estiércol al campo", "Yuca intercalada con maní", "Escuelas de campo para agricultores"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "Anota seis prácticas de tu finca o de tu comunidad. Al lado de cada una, escribe el principio de la agroecología que usa (reciclaje, eficiencia, diversidad, sinergias, resiliencia o uno de los elementos de las personas). Encierra en un círculo un principio que casi no usas.",
          youCanNow: "relacionar las prácticas de la finca con los principios de la agroecología y ver cuáles podrías usar más.",
          quickCheck: [
            { objective: "O1", q: "Una agricultora les da a sus cabras la paja del frijol y esparce el estiércol de las cabras en su maíz. ¿Qué principios usa?", options: ["Reciclaje y sinergia", "Solo gobernanza", "Eficiencia del tractor", "Ninguno"], answer: 0, why: "Los residuos alimentan a los animales y el estiércol alimenta el suelo: los nutrientes se reciclan y las partes se ayudan." },
            { objective: "O1", q: "¿Cuál es un ejemplo de diversidad en una finca?", options: ["Solo maíz, cada temporada, en todos los campos", "Quemar todos los residuos", "Yuca, maní, árboles y cabras en la misma finca", "Comprar todo el alimento en el pueblo"], answer: 2, why: "Muchos cultivos, animales y árboles juntos es diversidad, uno de los 10 elementos de la FAO." }
          ]
        },
        {
          title: "Recuperar la tierra degradada: cultivos de cobertura y abono verde",
          objectives: ["O2"],
          minutes: 6,
          goal: "Elegir un cultivo de cobertura o un abono verde para un campo degradado y planear cuándo sembrarlo y cortarlo.",
          text: [
            "La tierra degradada ha perdido materia orgánica y estructura: la lluvia escurre, los cultivos se quedan pequeños y malezas como la striga se apoderan del campo. El acolchado y el compost ayudan, pero casi nunca tienes suficiente. Los cultivos de cobertura y los abonos verdes producen la materia orgánica en el mismo campo.",
            "Un cultivo de cobertura se siembra sobre todo para cubrir y proteger el suelo, a menudo entre temporadas. Un abono verde se siembra y luego se corta y se deja sobre el suelo o se incorpora para alimentarlo. Las leguminosas hacen las dos cosas y además agregan nitrógeno: lablab, mucuna (frijol terciopelo), canavalia (frijol de puerco), crotalaria, caupí y gandul se usan en distintas partes de África. Algunas, como el lablab y el caupí, también dan comida o forraje; la semilla de mucuna necesita un procesamiento especial antes de que la gente pueda comerla, así que trátala como un cultivo para el suelo y el forraje y pregunta al extensionista.",
            "Los arbustos de muchas hojas también sirven como abono de hoja verde. En el oeste de Kenia, los agricultores cortan hojas de tithonia (girasol mexicano) de los cercos y las esparcen en los campos; la investigación encontró que las hojas son ricas en nutrientes, pero cortarlas y cargarlas es trabajo pesado, así que conviene más en hortalizas y otros cultivos de alto valor.",
            "El momento importa. Siembra el cultivo de cobertura con tiempo para que crezca bien antes de la temporada seca, o siémbralo en relevo dentro del cultivo principal unas semanas después de la siembra. Córtalo antes de que compita con tu siguiente cultivo o de que forme semilla dura, y deja lo cortado sobre la superficie como acolchado. Pregunta a tu extensionista o a un instituto de investigación qué especies y fechas se ajustan a tu lluvia."
          ],
          steps: ["Recorre el campo: ¿dónde está pelado, duro o lleno de striga?", "Elige una o dos especies de cobertura o abono verde que se ajusten a tu lluvia.", "Decide: sembrarla entre temporadas, en relevo dentro del cultivo principal, o como barbecho.", "Escribe la fecha de siembra y la fecha de corte.", "Córtala antes de que compita con tu cultivo; déjala sobre la superficie.", "Mantén a los animales fuera hasta que haya cumplido su función, o planea una parte para forraje."],
          words: [["Tierra degradada", "tierra que ha perdido suelo, materia orgánica o cobertura vegetal, así que produce mucho menos."], ["Cultivo de cobertura", "un cultivo que se siembra sobre todo para cubrir y proteger el suelo."], ["Abono verde", "un cultivo que se siembra y luego se corta y se deja sobre el suelo o dentro de él para alimentarlo."], ["Cultivo en relevo", "sembrar un segundo cultivo dentro de un cultivo en pie antes de cosechar el primero."]],
          slides: [
            { title: "Produce materia orgánica en el campo", bullets: ["Tierra degradada: escurrimiento, plantas pequeñas, striga", "No alcanza el acolchado ni el compost que traes", "Coberturas y abonos verdes la producen ahí mismo"] },
            { title: "Opciones de leguminosas", bullets: ["Lablab, caupí, gandul: también comida o forraje", "Mucuna, canavalia, crotalaria: suelo y forraje", "Agregan nitrógeno del aire"] },
            { title: "Abono de hoja verde", bullets: ["Hojas de tithonia en el oeste de Kenia", "Ricas en nutrientes; cortarlas es trabajo pesado", "Mejor en cultivos de alto valor"] },
            { title: "Acierta con el momento", bullets: ["Siembra temprano o en relevo en el cultivo principal", "Corta antes de que compita o forme semilla dura", "Pregunta al extensionista qué se ajusta a tu lluvia"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Elige tu campo más degradado. Escoge un cultivo de cobertura o abono verde para él y escribe: por qué lo elegiste, la fecha de siembra, cómo lo sembrarás (entre temporadas, en relevo o como barbecho) y la fecha de corte. Anota una pregunta para tu extensionista.",
          youCanNow: "elegir un cultivo de cobertura o un abono verde para un campo degradado y planear cuándo sembrarlo y cortarlo.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la diferencia principal entre un cultivo de cobertura y un abono verde?", options: ["Los cultivos de cobertura siempre son árboles", "Los abonos verdes se compran en costales", "No hay diferencia", "Un abono verde se siembra para cortarlo y dejarlo alimentar el suelo"], answer: 3, why: "Los cultivos de cobertura protegen el suelo; los abonos verdes se siembran sobre todo para cortarlos y alimentarlo (muchos cultivos hacen las dos cosas)." },
            { objective: "O2", q: "¿Cuándo debes cortar un cultivo de cobertura sembrado antes del maíz?", options: ["Antes de que compita con el maíz o forme semilla dura", "Nunca", "Después de cosechar el maíz", "Solo si da flores moradas"], answer: 0, why: "Cortar a tiempo evita la competencia y deja acolchado para el siguiente cultivo." }
          ]
        },
        {
          title: "Árboles que vuelven: FMNR y árboles fertilizantes",
          objectives: ["O3"],
          minutes: 6,
          goal: "Planear la regeneración natural gestionada por el agricultor o árboles fertilizantes para una parcela.",
          text: [
            "Muchos campos que parecen sin árboles todavía tienen tocones y raíces vivos bajo el suelo. La regeneración natural gestionada por el agricultor (FMNR) deja que vuelvan a crecer en lugar de cortarlos cada temporada. En Níger, la FMNR se extendió de agricultor a agricultor y ha devuelto los árboles a más de cinco millones de hectáreas de tierras de cultivo, dando forraje, leña, sombra y mejores cosechas.",
            "Los pasos, según las guías de World Vision y sus socios: recorre el campo buscando tocones que rebrotan y elige las especies útiles; en cada tocón, deja de tres a cinco de los tallos más altos y rectos y corta los demás; poda las ramas laterales hasta más o menos la mitad de la altura de cada tallo, con una herramienta afilada, cortando hacia arriba; vuelve cada pocos meses para quitar los brotes nuevos; protege los tallos de los animales y del fuego; cuando cosechas un tallo, deja que uno más joven lo reemplace. Marca los tallos elegidos y acuerda reglas con tus vecinos y tu comunidad para que los animales y los leñadores los respeten.",
            "Donde no hay tocones, puedes plantar árboles fertilizantes: árboles leguminosos como gliricidia, faidherbia (común en los parques agroforestales del Sahel, incluida la cuenca del maní de Senegal) o calliandra, cuyas hojas alimentan el suelo o a los animales. Ensayos largos en Malaui y Zambia encontraron que el maíz sembrado con gliricidia dio rendimientos más estables a lo largo de los años que el maíz solo con fertilizante, aunque podar los árboles dos o tres veces al año es trabajo de verdad.",
            "Antes de cortar o vender árboles, consulta las reglas forestales de tu país y los reglamentos de tu comunidad."
          ],
          steps: ["Recorre la parcela y marca los tocones vivos y los árboles jóvenes.", "Elige especies útiles: forraje, leña, fruta, suelo.", "Deja de 3 a 5 tallos rectos por tocón; corta los demás.", "Poda las ramas laterales hasta la mitad; herramienta afilada, corte hacia arriba.", "Protege de los animales y del fuego; acuerda reglas con los vecinos.", "¿No hay tocones? Planea árboles fertilizantes con consejo del extensionista."],
          words: [["FMNR", "regeneración natural gestionada por el agricultor: dejar que los tocones y raíces de árboles de tu tierra vuelvan a crecer, y luego elegir y podar los mejores tallos."], ["Árbol fertilizante", "un árbol, casi siempre leguminoso, cuyas hojas alimentan el suelo."], ["Parque agroforestal", "tierra de cultivo con árboles dispersos por los campos."], ["Reglamento local", "una regla acordada por una comunidad o un consejo local."]],
          slides: [
            { title: "Un bosque bajo tierra", bullets: ["Tocones y raíces vivos en campos pelados", "La FMNR los deja volver a crecer", "Níger: árboles de vuelta en más de 5 millones de hectáreas"] },
            { title: "Pasos de la FMNR", bullets: ["Elige los tocones y las especies útiles", "Deja de 3 a 5 tallos rectos", "Poda hasta la mitad; herramienta afilada, corte hacia arriba"] },
            { title: "Proteger y manejar", bullets: ["Quita los brotes nuevos cada pocos meses", "Aleja a los animales y el fuego", "Acuerda reglas con la comunidad"] },
            { title: "¿Sin tocones? Árboles fertilizantes", bullets: ["Gliricidia, faidherbia, calliandra", "Maíz más estable en ensayos de Malaui y Zambia", "Podar cuesta trabajo; consulta las reglas forestales"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Recorre una parcela y cuenta los tocones vivos o los árboles jóvenes. Haz un dibujo rápido marcando los que dejarías. Escribe de qué especies son (o pregunta a alguien), qué quieres de ellos y cómo los protegerás de los animales y del fuego.",
          youCanNow: "planear paso a paso la regeneración natural gestionada por el agricultor o los árboles fertilizantes para una parcela.",
          quickCheck: [
            { objective: "O3", q: "En la FMNR, ¿qué haces con los muchos brotes de un tocón vivo?", options: ["Cortarlos todos cada temporada", "Quemar el tocón", "Dejar de tres a cinco de los tallos más altos y rectos y cortar los demás", "Dejar crecer todos los brotes"], answer: 2, why: "Dejar unos pocos tallos buenos hace que crezcan rápido y se vuelvan árboles útiles." },
            { objective: "O3", q: "¿Por qué un agricultor debe acordar reglas de FMNR con sus vecinos?", options: ["Para que los animales y los leñadores respeten los tallos elegidos", "Para vender los tocones", "Porque los árboles crecen más rápido después de una reunión", "Nunca hace falta"], answer: 0, why: "El acuerdo de la comunidad protege los tallos del pastoreo y de la tala mientras crecen." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Principios y recuperación de la tierra",
        questions: [
          { objective: "O1", q: "Una escuela de campo donde agricultores e investigadores prueban prácticas juntos es un ejemplo de ¿qué elemento de la agroecología?", options: ["Creación conjunta de conocimiento", "Eficiencia del fertilizante", "Monocultivo", "Insumos importados"], answer: 0, why: "Agricultores e investigadores que aprenden juntos es creación conjunta de conocimiento." },
          { objective: "O1", q: "¿Qué práctica muestra sinergia?", options: ["Vender todos los residuos", "Leguminosas que agregan nitrógeno que usa el siguiente maíz", "Barbecho pelado", "Quemar el rastrojo"], answer: 1, why: "La leguminosa ayuda al maíz: dos partes de la finca trabajando juntas." },
          { objective: "O2", q: "Un campo en Ghana queda pelado y duro después de la cosecha. ¿Qué podrías sembrar para protegerlo y alimentarlo antes de la siguiente temporada?", options: ["Nada; déjalo pelado", "El mismo cultivo otra vez con más fertilizante", "Una leguminosa de cobertura como caupí o lablab", "Solo malezas"], answer: 2, why: "Una leguminosa de cobertura protege el suelo y agrega nitrógeno y materia orgánica." },
          { objective: "O2", q: "Las hojas de tithonia son ricas en nutrientes, pero cortarlas y cargarlas requiere mucha mano de obra. ¿Dónde conviene más usarlas?", options: ["Esparcidas en capa fina sobre grandes campos de maíz", "En cultivos de alto valor como las hortalizas", "Quemadas para obtener ceniza", "Solo como alimento para cerdos"], answer: 1, why: "La investigación en el oeste de Kenia encontró que el trabajo rinde más en cultivos de alto valor." },
          { objective: "O3", q: "¿Hasta qué altura debes podar las ramas laterales de los tallos jóvenes de FMNR?", options: ["No se podan", "Cortar todo el tallo al ras del suelo", "Hasta la punta", "Hasta más o menos la mitad del tallo"], answer: 3, why: "Podar demasiado alto deja los tallos débiles frente al viento y los animales." }
        ]
      }
    },
    {
      name: "Capítulo 2: Una finca que se alimenta a sí misma",
      lessons: [
        {
          title: "Cultivos, ganado y biodiversidad trabajando juntos",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dibujar los flujos de alimento, estiércol y residuos entre tus cultivos y tus animales.",
          text: [
            "En una finca mixta, los cultivos y los animales pueden alimentarse mutuamente. Los residuos de cosecha, los cultivos de cobertura, las hojas de los árboles y los subproductos del grano alimentan a los animales; los animales los convierten en leche, carne, huevos, fuerza de tiro y estiércol; el estiércol y la orina vuelven a alimentar el suelo. Cuando esos lazos son fuertes, sale menos dinero de la finca.",
            "Dibújalo. Pon en un papel tus campos, tus animales, tu casa y tu compostera o montón de estiércol, y luego dibuja flechas: rastrojo a las cabras, estiércol a la huerta, cama de gallinero al compost, agua del estanque a las hortalizas en una finca piscícola. Luego marca las fugas: residuos quemados, estiércol dejado al sol y a la lluvia, orina perdida, productos vendidos sin que nada regrese. Cada fuga es un lugar donde ganar.",
            "La biodiversidad también es parte del sistema. Los árboles, los cercos, las franjas de pasto y las plantas con flores dan casa a los insectos y aves que comen plagas y a las abejas que polinizan el frijol, el tomate y el café. Distintos cultivos y variedades reparten el riesgo. Guarda algunos rincones silvestres, no fumigues cuando no hace falta y siembra más de un cultivo.",
            "Cuida el equilibrio: los animales necesitan alimento durante la temporada seca, y los residuos que se usan como alimento no quedan sobre el suelo como acolchado. Decide qué parte va a cada lado y siembra forraje extra (franjas de pasto, árboles forrajeros, lablab) para no tener que elegir."
          ],
          steps: ["Dibuja tus campos, tus animales, tu casa y tu montón de estiércol.", "Dibuja flechas para cada flujo: alimento, residuos, estiércol, agua.", "Marca las fugas: quema, estiércol y orina perdidos, nada que regrese.", "Marca lugares para la biodiversidad: cercos, árboles, flores, rincones silvestres.", "Elige una fuga para cerrar esta temporada."],
          words: [["Finca mixta", "cultivar y criar animales en la misma finca para que se apoyen mutuamente."], ["Flujo de nutrientes", "cómo se mueven los nutrientes por la finca, por ejemplo del alimento al estiércol y al suelo."], ["Biodiversidad", "la variedad de plantas, animales, insectos y vida del suelo en la finca y alrededor."], ["Enemigos naturales", "insectos, aves y otros animales que comen las plagas de los cultivos."]],
          slides: [
            { title: "Cultivos alimentan animales, animales el suelo", bullets: ["Residuos, forraje y hojas de árbol a los animales", "Vuelven leche, carne, huevos, fuerza y estiércol", "Lazos fuertes = sale menos dinero"] },
            { title: "Dibuja los flujos de tu finca", bullets: ["Flechas: alimento, estiércol, residuos, agua", "Marca las fugas: quema, estiércol y orina perdidos", "Cada fuga es una ganancia esperando"] },
            { title: "La biodiversidad trabaja para ti", bullets: ["Cercos y flores dan casa a comeplagas y abejas", "Varios cultivos reparten el riesgo", "Fumiga solo cuando haga falta"] },
            { title: "Equilibra alimento y acolchado", bullets: ["Los residuos no pueden ser alimento y acolchado a la vez", "Siembra forraje extra: pasto, lablab, árboles"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "Dibuja el mapa de flujos de tu finca con al menos tres flechas entre cultivos y animales. Marca al menos una fuga y un lugar donde podrías agregar biodiversidad. Escribe la fuga que cerrarás esta temporada.",
          youCanNow: "dibujar los flujos de alimento, estiércol y residuos de tu finca y encontrar las fugas que hay que cerrar.",
          quickCheck: [
            { objective: "O4", q: "En un mapa de flujos, ¿cuál de estas es una fuga?", options: ["Rastrojo dado a las cabras", "Estiércol esparcido en la huerta", "Estiércol dejado al sol y a la lluvia hasta que se lava", "Cama de gallinero agregada al compost"], answer: 2, why: "El estiércol expuesto al sol y a la lluvia pierde nutrientes que deberían volver al suelo." },
            { objective: "O4", q: "¿Por qué conservar cercos, árboles y plantas con flores alrededor de los campos?", options: ["Dan casa a los enemigos naturales de las plagas y a los polinizadores", "Siempre bajan los rendimientos", "Son solo de adorno", "Detienen la lluvia"], answer: 0, why: "Dar casa a los comeplagas y a las abejas es un servicio gratis para tus cultivos." }
          ]
        },
        {
          title: "Reducir el costo del fertilizante importado",
          objectives: ["O5"],
          minutes: 5,
          goal: "Estimar cuántos costales de fertilizante comprado pueden reemplazar los nutrientes de la finca, y el dinero ahorrado.",
          text: [
            "La mayor parte del fertilizante mineral que se usa en África es importado, así que su precio sigue a los mercados mundiales y a los tipos de cambio. La agroecología busca necesitar menos, no siempre nada. Empieza por lo que usaste la temporada pasada: cuántos costales, de qué tipo, en qué campo y cuánto costaron.",
            "Luego anota los nutrientes de la finca que puedes agregar: leguminosas de cobertura e intercaladas (nitrógeno), árboles fertilizantes y abono de hoja verde, más estiércol y orina y mejor guardados, bioabono líquido si tienes biodigestor, y residuos de cosecha dejados en el campo. Combinar una cantidad menor de fertilizante mineral con todo esto suele funcionar mejor que cada cosa por separado. En los ensayos de Malaui, el maíz con gliricidia más la mitad del fertilizante recomendado rindió más o menos igual que el maíz con la dosis completa.",
            "Estima y luego prueba. Por ejemplo (cifras inventadas): una agricultora de Kakamega usó 4 costales en un acre a KES 3,500 el costal. Con un lablab en relevo y más estiércol, piensa probar 2 costales en medio campo y 4 en la otra mitad, y comparar los rendimientos. Si los rendimientos son iguales, ahorra 2 costales, KES 7,000, en ese acre. No reduzcas el fertilizante de golpe en toda tu tierra.",
            "Pide a tu extensionista o a un laboratorio de suelos que revise tu plan con tus resultados de suelo, y compra el fertilizante mineral solo en tiendas agropecuarias registradas, en costales sellados."
          ],
          steps: ["Escribe el fertilizante de la temporada pasada: costales, tipo, campo, costo.", "Anota los nutrientes de la finca que puedes agregar.", "Planea una dosis menor en parte de un campo, con nutrientes de la finca.", "Deja una franja con la dosis completa para comparar.", "Estima los costales y el dinero ahorrados si el rendimiento se mantiene.", "Revisa el plan con el extensionista; amplía solo lo que funciona."],
          words: [["Fertilizante mineral", "fertilizante fabricado, como urea, DAP o NPK, que suele venderse en costales."], ["Manejo integrado de la fertilidad del suelo", "combinar nutrientes orgánicos (estiércol, leguminosas, residuos) con una cantidad menor de fertilizante mineral."], ["Franja de comparación", "una parte del campo que se trabaja como antes para comparar los resultados de forma justa."]],
          slides: [
            { title: "Por qué reducir el fertilizante importado", bullets: ["El precio sigue a los mercados mundiales y al tipo de cambio", "La meta es necesitar menos, no siempre nada", "Empieza por los costales y costos de la temporada pasada"] },
            { title: "Nutrientes de la finca", bullets: ["Leguminosas de cobertura, intercaladas, árboles fertilizantes", "Estiércol, orina, bioabono, residuos", "Combínalos con menos fertilizante mineral"] },
            { title: "Prueba antes de reducir", bullets: ["Ejemplo: 2 costales vs 4 costales en medios campos", "Mismo rendimiento = 2 costales, KES 7,000 ahorrados (inventado)", "Nunca reduzcas todo de golpe"] },
            { title: "Revisa y compra seguro", bullets: ["El extensionista o el laboratorio revisa tu plan", "Tiendas agropecuarias registradas, costales sellados"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Escribe el uso de fertilizante de la temporada pasada en un campo. Anota dos fuentes de nutrientes de la finca que agregarás. Planea una prueba en medio campo con una dosis menor, y estima en tu moneda los costales y el dinero que ahorrarías si el rendimiento se mantiene.",
          youCanNow: "estimar cuánto fertilizante comprado podrían reemplazar los nutrientes de la finca, y planear una prueba justa antes de reducir.",
          quickCheck: [
            { objective: "O5", q: "Quieres usar menos fertilizante. ¿Cuál es el primer paso más seguro?", options: ["Dejar todo el fertilizante en todos los campos de una vez", "Duplicar el fertilizante", "Comprar fertilizante sin etiqueta porque es más barato", "Probar una dosis menor más nutrientes de la finca en parte de un campo, junto a una franja con la dosis completa"], answer: 3, why: "Una prueba lado a lado muestra si la dosis menor funciona antes de arriesgar toda la cosecha." },
            { objective: "O5", q: "Un agricultor de Nigeria usó 6 costales a NGN 40,000 cada uno y baja a 4 con el mismo rendimiento. ¿Cuánto ahorró?", options: ["NGN 40,000", "NGN 80,000", "NGN 240,000", "Nada"], answer: 1, why: "2 costales × NGN 40,000 = NGN 80,000 (cifras de ejemplo)." }
          ]
        },
        {
          title: "Medir la mejora temporada tras temporada",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Anotar medidas sencillas del suelo y de la finca en la misma época de cada temporada.",
          text: [
            "La regeneración es lenta. Puede que el rendimiento no salte en la primera temporada, así que necesitas otras señales para ver si el suelo se está recuperando. Mide en los mismos puntos, en el mismo mes, cada temporada, y anótalo.",
            "Medidas sencillas: la cobertura del suelo (cuánto suelo está cubierto por plantas o acolchado; estímalo a ojo o cuenta dentro de un cuadrado); las lombrices (saca un bloque del tamaño de una pala y cuéntalas); la infiltración (entierra una lata sin fondo ni tapa, échale agua y mide cuánto tarda en absorberse); el olor y la textura del suelo (¿se deshace en grumos pequeños o en terrones grandes y duros?); una foto del suelo desde el mismo punto; el rendimiento de una parcela marcada; y los costales de fertilizante y el dinero que gastaste.",
            "Cada pocos años, un análisis de suelo en laboratorio puede mostrar la materia orgánica y los nutrientes (mira \"Salud y fertilidad del suelo\" para el muestreo). Si puedes, compara tu campo recuperado con uno que no cambiaste.",
            "El teléfono ayuda: toma fotos desde el mismo punto, guarda tus números en una aplicación de notas o una hoja de cálculo, y pide a un asistente de IA que los convierta en una tabla o un gráfico sencillo. Los números salen de tu campo."
          ],
          steps: ["Marca tres puntos en el campo con palos o piedras.", "Elige al menos cuatro medidas: cobertura, lombrices, infiltración, grumos, foto, rendimiento, costo.", "Anótalas en el mismo mes cada temporada.", "Compara con la temporada pasada y con un campo sin cambios.", "Revisa tu plan: sigue con lo que funciona, cambia lo que no."],
          words: [["Indicador", "una señal sencilla que mides para ver si las cosas mejoran o empeoran."], ["Infiltración", "qué tan rápido se absorbe el agua en el suelo."], ["Cobertura del suelo", "la parte de la superficie del suelo cubierta por plantas o acolchado."], ["Línea de base", "tu primera medición, con la que se comparan las siguientes."]],
          slides: [
            { title: "El cambio lento hay que medirlo", bullets: ["Puede que el rendimiento no salte en la primera temporada", "Mismos puntos, mismo mes, cada temporada", "Anótalo"] },
            { title: "Medidas sencillas", bullets: ["Cobertura del suelo y conteo de lombrices", "Infiltración: mide cuánto tarda el agua en absorberse", "Grumos, foto, rendimiento, costo del fertilizante"] },
            { title: "Compara", bullets: ["Con la temporada pasada (tu línea de base)", "Con un campo sin cambios", "Análisis de laboratorio cada pocos años"] },
            { title: "Tu teléfono ayuda", bullets: ["Fotos desde el mismo punto", "Números en notas o en una hoja de cálculo", "La IA puede ordenarlos en una tabla"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Tarea final: escribe tu plan de regeneración de tres temporadas para un campo, con un dibujo. Luego toma hoy tu línea de base: marca tres puntos y anota al menos cuatro medidas (por ejemplo cobertura, conteo de lombrices, tiempo de infiltración y una foto).",
          youCanNow: "medir tu suelo y tu finca con indicadores sencillos cada temporada y usarlos para juzgar tu plan de regeneración.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué medir en los mismos puntos y el mismo mes cada temporada?", options: ["Se ve ordenado", "Para que la comparación sea justa y muestre el cambio real", "Porque las lombrices solo salen un mes", "Para usar más papel"], answer: 1, why: "El mismo lugar y el mismo momento quitan otras causas, así que los cambios reflejan el suelo." },
            { objective: "O6", q: "El agua de tu lata de infiltración se absorbe más rápido que el año pasado. ¿Qué indica?", options: ["El suelo está empeorando", "La lata está rota", "Nada", "La estructura del suelo mejora y retiene más lluvia"], answer: 3, why: "Una infiltración más rápida quiere decir que más lluvia entra al suelo en lugar de escurrir." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Una finca que se alimenta a sí misma",
        questions: [
          { objective: "O4", q: "¿Qué flecha va en un mapa de flujos entre cultivos y ganado?", options: ["Rastrojo de maíz a las cabras, y estiércol de cabra al campo de maíz", "Fertilizante del pueblo a la tienda", "Lluvia del cielo al río", "Saldo del teléfono al agricultor"], answer: 0, why: "El alimento para los animales y el estiércol que vuelve a los campos son los flujos de nutrientes propios de la finca." },
          { objective: "O4", q: "Los residuos se necesitan como alimento en la temporada seca y como acolchado. ¿Qué ayuda más?", options: ["Quemar la mitad", "Sembrar forraje extra como franjas de pasto, lablab o árboles forrajeros", "Vender los animales", "Dejar el campo pelado"], answer: 1, why: "El forraje extra reduce la competencia entre alimentar a los animales y cubrir el suelo." },
          { objective: "O5", q: "¿Qué encontraron los ensayos largos de Malaui para el maíz con gliricidia más la mitad del fertilizante?", options: ["Siempre fracasó", "Necesitó el doble de fertilizante", "Rindió más o menos igual que el maíz con la dosis completa", "Los árboles mataron el maíz"], answer: 2, why: "La gliricidia más media dosis de fertilizante dio rendimientos comparables a la dosis completa en Makoka." },
          { objective: "O5", q: "¿Dónde debes comprar el fertilizante mineral que sigues usando?", options: ["A cualquier vendedor de la carretera con costales abiertos", "En un anuncio en internet sin dirección", "De los costales que le sobraron a un vecino", "En una tienda agropecuaria registrada, en costales sellados"], answer: 3, why: "Las tiendas registradas y los costales sellados reducen el riesgo de fertilizante falso o mezclado." },
          { objective: "O6", q: "¿Qué es una línea de base?", options: ["La orilla de abajo del campo", "Un tipo de fertilizante", "La primera medición, con la que se comparan las siguientes", "La última cosecha que levantas"], answer: 2, why: "Sin línea de base no puedes saber si las cosas mejoraron." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agroecología y regeneración del suelo",
    questions: [
      { objective: "O1", q: "¿Qué organismo describe los 10 elementos de la agroecología?", options: ["La FIFA", "La FAO", "Una empresa de semillas", "Solo el Banco Mundial"], answer: 1, why: "Los 10 elementos de la agroecología de la FAO fueron adoptados por sus países miembros en 2019." },
      { objective: "O1", q: "Devolver al suelo los residuos de cosecha y el estiércol usa ¿qué principio?", options: ["Monocultivo", "Gobernanza", "Importaciones", "Reciclaje"], answer: 3, why: "Devolver los residuos y el estiércol recicla los nutrientes." },
      { objective: "O1", q: "Vender hortalizas a una escuela local y comprar semilla a una cooperativa local es un ejemplo de:", options: ["Eficiencia de los tractores", "Sinergia de plagas", "Economía circular y solidaria", "Erosión del suelo"], answer: 2, why: "Comprar y vender en lo local y de forma justa es el elemento de economía circular y solidaria." },
      { objective: "O2", q: "¿Qué cultivo es una leguminosa que se usa a menudo como cobertura o abono verde?", options: ["Maíz", "Sorgo", "Arroz", "Lablab"], answer: 3, why: "El lablab es una leguminosa que cubre el suelo, agrega nitrógeno y da forraje." },
      { objective: "O2", q: "¿Qué es el cultivo en relevo?", options: ["Sembrar un segundo cultivo dentro de un cultivo en pie antes de cosechar el primero", "Quemar residuos en hileras", "Sembrar solo una vez cada dos años", "Llevar cultivos en camión"], answer: 0, why: "El cultivo en relevo deja que una cobertura empiece a crecer antes de cosechar el cultivo principal." },
      { objective: "O2", q: "¿Por qué cortar un abono verde antes de que forme semilla dura?", options: ["La semilla es venenosa para el suelo", "Evita que se vuelva maleza y compita con el siguiente cultivo", "La semilla dura hace llover", "Lo exige la ley"], answer: 1, why: "Cortar a tiempo evita la competencia y las plantas que nacen solas sin querer." },
      { objective: "O2", q: "¿Qué es la tierra degradada?", options: ["Tierra con demasiados árboles", "Tierra bajo el agua", "Tierra que ha perdido suelo, materia orgánica o cobertura y produce mucho menos", "Tierra con título de propiedad"], answer: 2, why: "La tierra degradada ha perdido lo que la hace productiva." },
      { objective: "O3", q: "¿Qué usa la FMNR para que vuelvan los árboles?", options: ["Solo plantones comprados", "Tocones, raíces y semillas vivos que ya están en el suelo", "Árboles de plástico", "Inyecciones de fertilizante"], answer: 1, why: "La FMNR protege y poda lo que ya está rebrotando del suelo." },
      { objective: "O3", q: "¿Más o menos cuánta tierra de cultivo de Níger ha recuperado árboles con la FMNR?", options: ["Unas 10 hectáreas", "Unas 500 hectáreas", "Ninguna", "Más de cinco millones de hectáreas"], answer: 3, why: "La FMNR se extendió de agricultor a agricultor hasta más de cinco millones de hectáreas en Níger." },
      { objective: "O3", q: "Al podar los tallos de FMNR, debes:", options: ["Usar una herramienta afilada y cortar hacia arriba", "Usar una herramienta sin filo y cortar hacia abajo", "Quitar la corteza", "Podar hasta la punta"], answer: 0, why: "Los cortes limpios hacia arriba sanan más rápido y hacen menos daño." },
      { objective: "O3", q: "¿Qué árbol fertilizante es común en los parques agroforestales del Sahel, como la cuenca del maní de Senegal?", options: ["Eucalipto", "Faidherbia", "Mango", "Pino"], answer: 1, why: "La faidherbia es un árbol leguminoso que se conserva mucho en los parques agroforestales del Sahel." },
      { objective: "O4", q: "¿Cuál es una fuga en el mapa de flujos de nutrientes de una finca?", options: ["Estiércol esparcido en el campo", "Residuos dados a las cabras", "Quemar los residuos de cosecha", "Cama de gallinero en el compost"], answer: 2, why: "Al quemar, los nutrientes y la materia orgánica se van en humo." },
      { objective: "O4", q: "¿Cómo ayudan los cercos y las plantas con flores a los cultivos?", options: ["Dan casa a los comeplagas y a los polinizadores", "Siempre atraen más plagas", "Vuelven ácido el suelo", "Impiden que la lluvia llegue a los cultivos"], answer: 0, why: "Dar casa a los enemigos naturales y a las abejas es un servicio gratis para los cultivos." },
      { objective: "O4", q: "En una finca de tilapia y hortalizas, ¿cuál es un lazo útil?", options: ["Tirar los desechos del pescado al río", "Usar el agua del estanque para regar las hortalizas", "Vaciar el estanque en el camino", "Quemar las hortalizas"], answer: 1, why: "El agua del estanque, rica en nutrientes, alimenta las hortalizas: un lazo entre cultivo y animal." },
      { objective: "O5", q: "¿Por qué cambia tanto el precio del fertilizante mineral en muchos países africanos?", options: ["Se cultiva en las fincas", "Depende de la lluvia", "Nunca cambia", "La mayor parte es importado, así que sigue los precios mundiales y los tipos de cambio"], answer: 3, why: "Los insumos importados siguen a los mercados mundiales y a los cambios de moneda." },
      { objective: "O5", q: "Una agricultora de Ghana usó 5 costales a GHS 400 cada uno y baja a 3 con el mismo rendimiento. ¿Cuánto ahorró?", options: ["GHS 800", "GHS 400", "GHS 2,000", "GHS 1,200"], answer: 0, why: "2 costales × GHS 400 = GHS 800 (cifras de ejemplo)." },
      { objective: "O5", q: "¿Qué es el manejo integrado de la fertilidad del suelo?", options: ["Usar solo fertilizante mineral", "No usar ningún nutriente", "Combinar nutrientes orgánicos con una cantidad menor de fertilizante mineral", "Analizar el suelo cada semana"], answer: 2, why: "Mezcla fuentes orgánicas y minerales para que cada una funcione mejor." },
      { objective: "O6", q: "¿Cuál es una medida sencilla de la mejora del suelo?", options: ["El color de tu teléfono", "Qué tan rápido se absorbe el agua en el suelo", "El precio del maíz en el pueblo", "El número de visitas"], answer: 1, why: "Una infiltración más rápida muestra una mejor estructura del suelo." },
      { objective: "O6", q: "¿Por qué comparar tu campo recuperado con un campo sin cambios?", options: ["Para ver si el cambio vino de tus prácticas y no solo del clima", "Para usar más semilla", "Porque los vecinos lo piden", "No hace ninguna diferencia"], answer: 0, why: "Un campo de comparación muestra lo que habría pasado de todos modos." },
      { objective: "O6", q: "¿Cuántas medidas debes anotar cada temporada en el campo que recuperas?", options: ["Ninguna", "Una, solo el rendimiento", "Solo la lluvia", "Al menos cuatro, como cobertura, lombrices, infiltración y rendimiento"], answer: 3, why: "Varias medidas muestran el cambio incluso antes de que suba el rendimiento." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y vuelve a intentarlo.",
    criteria: [
      { name: "Principios nombrados", objective: "O1", notYet: "El plan no dice qué principios de la agroecología usa.", meets: "Cada práctica del plan está relacionada con un principio de la agroecología.", exceeds: "Usa al menos cuatro principios distintos, incluido uno de los elementos de las personas." },
      { name: "Cultivo de cobertura o abono verde", objective: "O2", notYet: "No hay cultivo de cobertura ni abono verde, o no hay fechas.", meets: "Una especie que se ajusta a la lluvia, con fechas de siembra y de corte.", exceeds: "También explica cómo encaja con el alimento de los animales y el cultivo principal, y se revisó con el extensionista." },
      { name: "Árboles", objective: "O3", notYet: "No hay plan de árboles, o hay árboles sin protección.", meets: "FMNR o árboles fertilizantes con tallos o especies, poda y protección contra los animales y el fuego.", exceeds: "Incluye un acuerdo comunitario o reglamento local, y cómo se cosecharán y reemplazarán los tallos." },
      { name: "Lazos entre cultivos y ganado", objective: "O4", notYet: "No hay mapa de flujos, o solo un lazo.", meets: "Un mapa de flujos con al menos tres lazos y una fuga que cerrar.", exceeds: "Muestra cómo se reparten los residuos entre alimento y acolchado y dónde se agrega biodiversidad." },
      { name: "Ahorro de fertilizante", objective: "O5", notYet: "No hay estimación, o planea dejar el fertilizante en toda la tierra de una vez.", meets: "Estima los costales y el dinero ahorrados en moneda local, con una prueba justa frente a una franja de dosis completa.", exceeds: "El plan se revisó con el extensionista o con los resultados de suelo, con una regla para saber cuándo ampliar." },
      { name: "Medidas a lo largo de las temporadas", objective: "O6", notYet: "No hay medidas o no hay línea de base.", meets: "Al menos cuatro medidas, una línea de base tomada y una fecha para cada temporada.", exceeds: "Incluye un campo de comparación sin cambios y fotos desde puntos fijos." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que siembran un cultivo de cobertura o abono verde, o empiezan la FMNR, en la próxima temporada (encuesta de seguimiento)",
      "Cambio en el fertilizante comprado por acre en el campo recuperado a lo largo de dos temporadas (registros del participante)",
      "Cambio en las medidas del suelo (cobertura, infiltración, conteo de lombrices) y en el rendimiento del campo recuperado a lo largo de tres temporadas",
      "Número de vecinos o miembros del grupo que copian una práctica (reportes de extensión)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y marcadores de colores para el mapa de flujos y el dibujo del campo",
      "Una pala, una lata vacía sin fondo ni tapa, agua y un reloj para las medidas del suelo",
      "Palos o piedras para marcar los puntos de medición",
      "Los registros y precios del fertilizante de la temporada pasada (o cifras de ejemplo)",
      "Un teléfono para fotos y notas (opcional)",
      "Unos 90 minutos en total, más tiempo en el campo para las medidas"
    ],
    facilitatorNotes: [
      "Dé las lecciones 3 y 6 en el campo: busquen juntos tocones para la FMNR y hagan en grupo la infiltración y el conteo de lombrices.",
      "Invite a un extensionista o a un instituto de investigación (por ejemplo KALRO, IITA, CSIR o ISRA, institutos nacionales e internacionales de investigación agrícola) a confirmar qué coberturas y árboles fertilizantes se ajustan a la lluvia local.",
      "Hablen abiertamente de las reglas locales de pastoreo y tala; la FMNR a menudo necesita un acuerdo comunitario.",
      "Nunca presente los precios de ejemplo como hechos; reúna los precios locales del fertilizante antes de la sesión.",
      "Fomente las franjas de prueba lado a lado en lugar de recortes repentinos del fertilizante en toda la tierra.",
      "Califique el plan final con la rúbrica y haga seguimiento después de una y dos temporadas para comparar las medidas."
    ]
  }
};

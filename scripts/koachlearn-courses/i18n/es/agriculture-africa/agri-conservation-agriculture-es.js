"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-conservation-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_CA = { name: "FAO: Agricultura de conservación (definición y los tres principios)", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT: Hoyos de siembra zai o tassa (Níger)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Efecto de la agricultura de conservación en el rendimiento del maíz en las zonas semiáridas de Zimbabue (Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT: Ensayos en fincas de agricultura de conservación en Zambia (cuencas, subsolado, siembra directa frente a arado, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Kenia: junta de productos para el control de plagas (productos registrados)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Nigeria: agencia nacional de control de alimentos y medicamentos (agroquímicos registrados)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Ghana: agencia de protección ambiental (registro de pesticidas)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO: La importancia de la materia orgánica del suelo", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture-es",
  lang: "es",
  translationOf: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Agricultura de conservación para temporadas secas",
  skills: "Aplicar los tres principios de la agricultura de conservación, Hacer cuencas de siembra y hoyos zai, Elegir entre subsolado y siembra directa, Manejar el acolchado, Controlar las malezas sin arar, Planear la temporada y la transición",
  outcome: "planear y empezar una temporada de agricultura de conservación en un campo: cómo prepararás la tierra sin arar, cómo la mantendrás cubierta, cómo rotarás los cultivos, cómo controlarás las malezas y qué herramientas y fechas usarás, con una parcela de comparación para seguir los resultados durante los años de transición.",
  about: [
    "Este curso es para pequeños productores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes emprendedores agrícolas y extensionistas de las zonas más secas de Kenia, Nigeria, Ghana, Burkina Faso, Senegal y toda África, donde las lluvias son cortas, los periodos secos son comunes y el arado deja el suelo pelado, duro y sediento.",
    "El capítulo 1 explica los tres principios de la agricultura de conservación tal como los define la FAO y muestra cómo preparar la tierra sin arar: cuencas de siembra, hoyos zai, subsolado y siembra directa. El capítulo 2 trata de mantener el suelo cubierto con acolchado, controlar las malezas sin arar, las herramientas y los tiempos de la temporada, qué esperar en los años de sequía y cómo pasar las primeras temporadas.",
    "El riego y la cosecha de agua de lluvia se tratan en \"Riego y manejo del agua\", y lo básico del compost y el acolchado en \"Salud y fertilidad del suelo\"; este curso no los repite. Empieza en un campo y deja una parcela arada al lado para comparar. Cada lección dura unos cinco minutos y termina con una tarea en tu propia tierra."
  ],
  finalTask: "Escribe un plan de una temporada de agricultura de conservación para un campo (o un ejemplo: 1 acre de maíz y caupí en Machakos, 2 hectáreas de sorgo en el norte de Ghana, o 1 hectárea de mijo y maní en la Meseta Central de Burkina Faso): un dibujo del campo; cómo lo prepararás sin arar (cuencas, hoyos zai, subsolado o siembra directa) y por qué; cómo mantendrás cubierto al menos el 30 por ciento del suelo; el cultivo y la rotación o el cultivo intercalado; tu plan contra las malezas; un calendario mes a mes de tareas, herramientas y costos; y cómo lo compararás con una parcela arada.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, trabajadores agrícolas, jóvenes emprendedores agrícolas y extensionistas de las zonas agrícolas más secas de África (Kenia, Nigeria, Ghana y el Sahel francófono), que cultivan maíz, sorgo, mijo, caupí, frijol y maní, a menudo con ganado vacuno o cabras que pastorean los residuos de cosecha.",
    startingPoint: "Preparan la tierra arando con bueyes, tractor o azadón, y a menudo queman o hacen pastorear los residuos. Muchos han oído hablar de los hoyos zai o de las cuencas, pero no han hecho una temporada completa de agricultura de conservación ni han planeado las malezas y la competencia por los residuos que vienen con ella.",
    gap: "El arado y el suelo pelado desperdician la poca lluvia y causan erosión, y arar tarde retrasa la siembra. Los participantes necesitan una forma práctica de cultivar moviendo menos el suelo, con más cobertura y rotación, de planear las herramientas, la mano de obra y los tiempos, y de seguir adelante durante las primeras temporadas, cuando hay muchas malezas y los resultados son variados.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Mano de obra y herramientas: azadones, bueyes o un tractor alquilado; las cuencas y los hoyos son trabajo pesado",
      "Residuos: por costumbre local, los animales pastorean los campos después de la cosecha",
      "Seguridad con pesticidas: herbicidas solo si están registrados en el país, usados como dice la etiqueta, con equipo de protección",
      "Tiempo: lecciones de 4 a 6 minutos; los resultados crecen a lo largo de varias temporadas"
    ],
    prerequisites: "Ninguno. \"Salud y fertilidad del suelo\" y \"Agricultura climáticamente inteligente\" son una base útil."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Mirando un campo o su descripción", action: "identificar si cumple cada uno de los tres principios de la agricultura de conservación", standard: "nombrando los tres como los describe la FAO, incluida una cobertura del suelo de al menos el 30 por ciento" },
    { id: "O2", condition: "En un campo, antes de las lluvias", action: "marcar y cavar cuencas de siembra o hoyos zai con estiércol o compost en cada uno", standard: "en hileras a través de la pendiente, cavados en la temporada seca" },
    { id: "O3", condition: "Según tu suelo, tu mano de obra, tu fuerza de tiro y tu lluvia", action: "elegir entre cuencas, subsolado y siembra directa para un campo", standard: "dando al menos dos razones para la elección" },
    { id: "O4", condition: "Para un campo con agricultura de conservación", action: "planear cómo mantener el suelo cubierto y controlar las malezas sin arar", standard: "manteniendo al menos el 30 por ciento de cobertura y usando, si acaso, solo herbicidas registrados como dice la etiqueta" },
    { id: "O5", condition: "Para una temporada en un campo", action: "escribir un calendario de todas las tareas de agricultura de conservación con su mes, su herramienta y su costo", standard: "desde la preparación en la temporada seca hasta la cosecha y el cuidado de los residuos" },
    { id: "O6", condition: "Durante las primeras temporadas de agricultura de conservación", action: "comparar una parcela con agricultura de conservación con una parcela arada", standard: "anotando para las dos el rendimiento, los días de trabajo y los costos de cada temporada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Principios y preparación de la tierra sin arar",
      lessons: [
        {
          title: "Los tres principios de la agricultura de conservación",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar si un campo cumple cada uno de los tres principios de la agricultura de conservación.",
          text: [
            "La agricultura de conservación (AC) es una forma de cultivar que protege el suelo para que retenga más de la poca lluvia que cae. La FAO, la organización de las Naciones Unidas para la alimentación y la agricultura, describe tres principios que funcionan juntos.",
            "1. Mínima alteración del suelo: no arar. La semilla y el fertilizante entran al suelo por agujeros pequeños, cuencas o surcos angostos de subsolado, y el resto del suelo se deja en paz. 2. Cobertura permanente del suelo: mantener los residuos de cosecha o cultivos de cobertura sobre la superficie, cubriendo al menos el 30 por ciento del suelo, todo el año. 3. Diversificación de cultivos: rotar o intercalar al menos tres cultivos distintos con el tiempo, por ejemplo maíz, caupí y sorgo, no maíz todos los años.",
            "Hacer uno solo ayuda un poco; hacer los tres juntos da los beneficios reales. Arar sin cobertura seca el suelo; cubrir sin rotar deja que se acumulen las plagas; no arar con el suelo pelado deja que se forme la costra y que la lluvia escurra. En las zonas secas la gran ganancia es el agua: un suelo cubierto y sin remover deja que la lluvia se infiltre y pierde menos con el sol."
          ],
          words: [["Agricultura de conservación (AC)", "cultivar con mínima alteración del suelo, cobertura permanente del suelo y diversificación de cultivos."], ["Labranza", "voltear o romper el suelo, por ejemplo al arar o cavar."], ["Residuos de cosecha", "los tallos, las hojas y las cáscaras que quedan después de la cosecha."], ["Costra", "una capa dura que se forma sobre el suelo pelado después de la lluvia e impide que el agua se infiltre."]],
          slides: [
            { title: "Tres principios (FAO)", bullets: ["1. Mínima alteración del suelo: no arar", "2. Cobertura permanente del suelo: al menos 30 por ciento", "3. Diversificación de cultivos: al menos tres cultivos"] },
            { title: "Mueve el suelo solo donde siembras", bullets: ["Agujeros pequeños, cuencas o surcos de subsolado", "Deja el resto del suelo en paz"] },
            { title: "Cubre y rota", bullets: ["Residuos o cultivos de cobertura encima, todo el año", "P. ej. maíz, luego caupí, luego sorgo"] },
            { title: "Los tres juntos", bullets: ["Uno solo ayuda un poco", "Juntos: más lluvia se infiltra y se queda", "En zonas secas la gran ganancia es el agua"] }
          ],
          sources: [FAO_CA],
          tryIt: "Recorre uno de tus campos. Para cada principio, escribe sí, en parte o no: ¿está arado? ¿Cuánto suelo está cubierto (estímalo en porcentaje)? ¿Cuántos cultivos distintos crecieron ahí en las últimas tres temporadas? Encierra en un círculo el principio más débil.",
          youCanNow: "nombrar los tres principios de la agricultura de conservación y revisar un campo con cada uno.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es uno de los tres principios de la agricultura de conservación de la FAO?", options: ["Arar hondo cada temporada", "Quemar los residuos para limpiar el campo", "Cobertura permanente del suelo de al menos el 30 por ciento", "Sembrar el mismo cultivo todos los años"], answer: 2, why: "La FAO nombra la mínima alteración, la cobertura permanente del suelo (al menos 30 por ciento) y la diversificación de cultivos." },
            { objective: "O1", q: "Un agricultor dejó de arar, pero deja el suelo pelado y siembra maíz todos los años. ¿Qué falta?", options: ["Cobertura del suelo y diversificación de cultivos", "Nada; es AC completa", "Arar más", "Quemar más"], answer: 0, why: "Sin cobertura ni rotación, no arar da pocos de los beneficios." }
          ]
        },
        {
          title: "Cuencas de siembra y hoyos zai",
          objectives: ["O2"],
          minutes: 6,
          goal: "Marcar y cavar cuencas de siembra u hoyos zai con estiércol en cada uno, antes de las lluvias.",
          text: [
            "Las cuencas de siembra y los hoyos zai son agujeros pequeños cavados a mano donde se siembra el cultivo. Solo se remueve la cuenca; el suelo de en medio se deja cubierto. Cada cuenca atrapa la lluvia y guarda el estiércol o el compost justo donde están las raíces.",
            "Los hoyos zai vienen de los agricultores de Burkina Faso y Níger, que los usaron para devolver al mijo y al sorgo tierras duras y encostradas. WOCAT, una red internacional que documenta prácticas de manejo de la tierra, describe hoyos de unos 30 a 40 cm de ancho y 10 a 15 cm de hondo, en hileras alternadas a través de la pendiente, unos 10,000 por hectárea, con estiércol o compost en cada uno. Las cuencas de siembra que se usan en el sur y el este de África son parecidas: agujeros pequeños y regulares en hileras, cavados con el mismo espaciamiento cada año para volver a los mismos puntos.",
            "Cávalos en la temporada seca después de la cosecha, cuando hay menos trabajo, para sembrar con las primeras buenas lluvias en lugar de esperar a arar. Pon la tierra del hoyo del lado de abajo de la pendiente para atrapar más agua. Agrega uno o dos puñados de estiércol o compost en cada cuenca y cúbrelo ligeramente. Pide a tu extensionista el espaciamiento que se usa para tu cultivo en tu zona.",
            "Es trabajo pesado, sobre todo el primer año. Cava una parte del campo cada semana, comparte el trabajo en grupo y vuelve a usar las mismas cuencas en las temporadas siguientes, lo que es mucho más rápido."
          ],
          steps: ["Elige el campo y marca hileras a través de la pendiente con cuerda o palos.", "Marca los puntos de las cuencas con el espaciamiento que recomienda el extensionista para tu cultivo.", "Cava en la temporada seca; amontona la tierra del lado de abajo.", "Agrega estiércol o compost en cada cuenca y cubre ligeramente.", "Deja cubierto el suelo entre las cuencas.", "Siembra en las cuencas con las primeras buenas lluvias."],
          words: [["Cuenca de siembra", "un agujero pequeño cavado a mano donde van la semilla y el estiércol, dejando el resto del suelo sin remover."], ["Hoyo zai", "un hoyo de siembra lleno de estiércol o compost, usado primero por agricultores de Burkina Faso y Níger para recuperar tierras encostradas."], ["A través de la pendiente", "siguiendo la curva de nivel, para que las hileras atrapen el agua en lugar de llevarla cuesta abajo."]],
          slides: [
            { title: "Agujeros pequeños, gran ganancia", bullets: ["Solo se remueve la cuenca", "Atrapa la lluvia donde están las raíces", "Guarda el estiércol cerca del cultivo"] },
            { title: "Hoyos zai (Burkina Faso, Níger)", bullets: ["Unos 30-40 cm de ancho, 10-15 cm de hondo (WOCAT)", "Hileras alternadas a través de la pendiente", "Estiércol o compost en cada uno"] },
            { title: "Momento", bullets: ["Cava en la temporada seca después de la cosecha", "Siembra con las primeras buenas lluvias", "Sin esperar a arar"] },
            { title: "Aligera el trabajo", bullets: ["Una parte del campo cada semana", "Comparte el trabajo en grupo", "Vuelve a usar las mismas cuencas la próxima temporada"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "En una parte pequeña de un campo (por ejemplo 10 m por 10 m), marca hileras a través de la pendiente y cava cinco cuencas u hoyos zai. Mide cuánto tardas en cada uno, agrega estiércol y calcula cuántos días tomaría todo el campo.",
          youCanNow: "marcar y cavar cuencas de siembra u hoyos zai con estiércol, a través de la pendiente, antes de las lluvias.",
          quickCheck: [
            { objective: "O2", q: "¿Cuándo debes cavar las cuencas de siembra o los hoyos zai?", options: ["Después de que el cultivo ha nacido", "Solo cuando llueve fuerte", "En la cosecha, encima del cultivo", "En la temporada seca, antes de las lluvias"], answer: 3, why: "Cavar temprano te deja sembrar con las primeras buenas lluvias y reparte el trabajo." },
            { objective: "O2", q: "¿A dónde va la tierra que sacas de un hoyo zai?", options: ["Lejos, tirada", "Del lado de abajo del hoyo, para atrapar más agua", "De vuelta al hoyo enseguida", "Al camino"], answer: 1, why: "Un pequeño bordo del lado de abajo ayuda a cada hoyo a atrapar y guardar el agua que escurre." }
          ]
        },
        {
          title: "Subsolado y siembra directa",
          objectives: ["O3"],
          minutes: 5,
          goal: "Elegir entre cuencas, subsolado y siembra directa para uno de tus campos.",
          text: [
            "Las cuencas convienen a quienes trabajan con azadón en parcelas pequeñas. Si tienes bueyes o puedes alquilar un tractor, un subsolador o una sembradora directa pueden cubrir más tierra con menos mano de obra.",
            "Un subsolador es una púa angosta, a menudo montada en la viga de un arado de bueyes en lugar de la vertedera, que abre una ranura angosta (un surco de subsolado) para la semilla y el fertilizante, dejando cubierto el suelo entre las hileras. Subsolar en la temporada seca también puede romper una capa dura bajo la superficie (el pie de arado) para que las raíces y el agua bajen más. La siembra directa pone la semilla a través de los residuos con una sembradora manual de golpe (una herramienta de mano) o una sembradora tirada por animales o por tractor, sin abrir surcos.",
            "¿Cuál elegir? Piensa en tu mano de obra (las cuencas necesitan más), tu fuerza de tiro (el subsolado necesita bueyes o tractor), tu suelo (los suelos duros y encostrados se benefician de las cuencas o del subsolado) y el tamaño del campo. Ensayos en toda Zambia de 2006 a 2015 compararon cuencas, subsolado y siembra directa con el arado de vertedera en fincas reales. Pregunta a tu extensionista o a un proyecto de AC dónde puedes ver estas herramientas funcionando y si se pueden alquilar."
          ],
          steps: ["Escribe el tamaño del campo, tu mano de obra y si tienes bueyes o tractor.", "Revisa el suelo: ¿hay una capa dura o una costra?", "Parcela pequeña y trabajo a mano: cuencas.", "Bueyes o tractor y suelo duro: subsolado.", "Buenos residuos y una sembradora disponible: siembra directa.", "Pregunta al extensionista dónde ver y alquilar las herramientas."],
          words: [["Subsolador", "una púa angosta tirada por bueyes o tractor que abre una ranura para la semilla sin voltear el suelo."], ["Pie de arado", "una capa dura justo debajo de la profundidad de arado que frena las raíces y el agua."], ["Sembradora de golpe", "una herramienta de mano que se clava en el suelo para poner la semilla (y a veces el fertilizante) a través de los residuos."], ["Siembra directa", "sembrar directamente en suelo sin remover y con residuos."]],
          slides: [
            { title: "Tres formas de entrar sin arar", bullets: ["Cuencas: azadón, parcelas pequeñas", "Subsolado: bueyes o tractor abren surcos", "Siembra directa: sembradora de golpe o sembradora"] },
            { title: "Subsolado", bullets: ["Púa angosta en la viga del arado", "Puede romper un pie de arado duro", "El suelo entre hileras sigue cubierto"] },
            { title: "Cómo elegir", bullets: ["Mano de obra: las cuencas necesitan más", "Fuerza de tiro: ¿bueyes o tractor?", "Dureza del suelo y tamaño del campo"] },
            { title: "Míralo primero", bullets: ["Ensayos en Zambia: cuencas, subsolado, siembra directa", "Pregunta al extensionista dónde ver las herramientas", "¿Se pueden alquilar?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "Para el campo que elegiste, escribe su tamaño, tu mano de obra, si tienes acceso a bueyes o tractor y qué tan duro es el suelo. Elige cuencas, subsolado o siembra directa y escribe dos razones para tu elección.",
          youCanNow: "elegir entre cuencas, subsolado y siembra directa para un campo, con razones.",
          quickCheck: [
            { objective: "O3", q: "Un agricultor tiene 3 hectáreas, una yunta de bueyes y suelo duro. ¿Qué método le conviene más?", options: ["Subsolado con un subsolador tirado por bueyes", "Cuencas cavadas a mano en las 3 hectáreas en una semana", "Arar hondo dos veces", "No sembrar"], answer: 0, why: "Los bueyes y el suelo duro se prestan al subsolado, que cubre más tierra que las cuencas a mano." },
            { objective: "O3", q: "¿Qué es una sembradora de golpe?", options: ["Un arado de tractor", "Una herramienta de mano que pone la semilla a través de los residuos", "Una bomba de agua", "Un tipo de fertilizante"], answer: 1, why: "La sembradora de golpe te deja sembrar directamente en suelo cubierto y sin remover." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Principios y preparación de la tierra sin arar",
        questions: [
          { objective: "O1", q: "Según la FAO, ¿cuántos cultivos distintos debe incluir una rotación o asociación de AC?", options: ["Uno", "Dos como máximo", "Al menos tres", "Ninguno"], answer: 2, why: "El principio de diversificación de la FAO habla de al menos tres cultivos distintos." },
          { objective: "O1", q: "¿Por qué un suelo cubierto y sin remover es especialmente útil en las zonas secas?", options: ["Enfría el suelo en invierno", "Más lluvia se infiltra y se pierde menos con el sol", "Detiene todas las malezas para siempre", "No necesita semilla"], answer: 1, why: "La cobertura y no arar mejoran la infiltración y reducen la evaporación." },
          { objective: "O2", q: "¿En qué países se extendieron primero los hoyos zai entre los agricultores?", options: ["Burkina Faso y Níger", "Egipto y Libia", "Sudáfrica y Namibia", "Solo Kenia y Uganda"], answer: 0, why: "Los hoyos zai vienen de agricultores del Sahel, sobre todo de Burkina Faso y Níger." },
          { objective: "O2", q: "¿Qué va en cada hoyo zai o cuenca antes de sembrar?", options: ["Nada", "Plástico", "Solo ceniza de residuos quemados", "Estiércol o compost"], answer: 3, why: "El estiércol o el compost en el hoyo alimenta el cultivo justo en las raíces." },
          { objective: "O3", q: "¿Qué más puede hacer el subsolado en la temporada seca además de abrir surcos?", options: ["Regar el cultivo", "Romper un pie de arado duro para que las raíces y el agua bajen más", "Matar todas las plagas", "Reemplazar el fertilizante"], answer: 1, why: "Un subsolador puede romper la capa dura que el arado suele dejar." }
        ]
      }
    },
    {
      name: "Capítulo 2: La temporada y la transición",
      lessons: [
        {
          title: "Manejar el acolchado y los residuos",
          objectives: ["O4"],
          minutes: 5,
          goal: "Planear cómo mantener cubierto al menos el 30 por ciento de un campo todo el año.",
          text: [
            "La cobertura es el principio que a los agricultores les resulta más difícil, porque los residuos tienen otros usos: los animales pastorean los campos después de la cosecha, y los tallos se usan como combustible, para cercas y para construir. En las zonas secas, las termitas también pueden comerse los residuos de la superficie.",
            "Planéalo. Decide cuántos residuos se quedan en el campo y cuántos van a los animales. Corta y guarda algo de rastrojo como alimento para la temporada seca, para no dejar entrar a los animales al campo de AC. Habla con los vecinos y los pastores sobre el campo: algunas comunidades acuerdan que los campos de AC marcados no se pastorean, o el agricultor cerca un campo pequeño con cercas vivas o ramas espinosas. Busca cobertura de otras fuentes: un intercalado de caupí o lablab, pasto de las orillas del campo o ramas de la poda de árboles.",
            "Para revisar la cobertura, mira directo hacia abajo a un metro cuadrado en varios lugares y estima cuánto suelo no puedes ver. Quieres al menos el 30 por ciento cubierto (FAO); más es mejor. Reparte los residuos de forma pareja, no en montones, y déjalos encima en lugar de enterrarlos.",
            "Nunca quemes los residuos en un campo de AC. Quemar quita la cobertura y la materia orgánica que estás construyendo."
          ],
          steps: ["Decide qué parte de los residuos va a cobertura y qué parte a alimento.", "Corta y guarda alimento para que los animales no entren al campo de AC.", "Llega a un acuerdo con los vecinos y los pastores, o cerca el campo.", "Agrega cobertura de intercalados, pasto de las orillas o ramas de poda.", "Revisa la cobertura: mira hacia abajo a un metro cuadrado en varios lugares.", "Reparte parejo; nunca quemes."],
          words: [["Acolchado", "material que se extiende sobre la superficie del suelo para cubrirlo y protegerlo."], ["Rastrojo", "los tallos y hojas secos del maíz o del sorgo después de la cosecha."], ["Cerca viva", "una hilera de arbustos o árboles sembrados muy juntos para que no entren los animales."]],
          slides: [
            { title: "La cobertura compite con otros usos", bullets: ["Pastoreo después de la cosecha", "Combustible, cercas, construcción", "Termitas en las zonas secas"] },
            { title: "Planea los residuos", bullets: ["Parte para cobertura y parte para alimento", "Guarda alimento; deja fuera a los animales", "Acuerda con los pastores o cerca el campo"] },
            { title: "Busca más cobertura", bullets: ["Intercalado de caupí o lablab", "Pasto de las orillas del campo", "Ramas de poda de árboles"] },
            { title: "Revisa: al menos 30 por ciento", bullets: ["Mira hacia abajo a un metro cuadrado", "Reparte parejo, déjalo encima", "Nunca quemes en un campo de AC"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Estima hoy la cobertura del campo que elegiste en tres puntos. Escribe de dónde vendrá la cobertura extra, cuánto rastrojo va a los animales y cómo mantendrás a los animales fuera del campo (acuerdo, cerca o alimento guardado).",
          youCanNow: "planear cómo mantener cubierto al menos el 30 por ciento de un campo de AC sin dejar de alimentar a tus animales.",
          quickCheck: [
            { objective: "O4", q: "El ganado de los vecinos se come todos los residuos de tu campo de AC cada temporada seca. ¿Qué puede ayudar?", options: ["Quemar primero los residuos", "Arar el campo", "Llegar a un acuerdo con los pastores, cercar el campo o guardar alimento para que los animales no entren", "Renunciar a la cobertura"], answer: 2, why: "Los acuerdos comunitarios, las cercas y el alimento guardado protegen la cobertura." },
            { objective: "O4", q: "¿Cómo revisas si un campo tiene suficiente cobertura?", options: ["Contando el ganado", "Mirando hacia abajo a un metro cuadrado en varios lugares y estimando qué parte del suelo está oculta", "Pesando la cosecha", "Midiendo la lluvia"], answer: 1, why: "Una estimación rápida a ojo en varios puntos muestra si la cobertura llega al 30 por ciento." }
          ]
        },
        {
          title: "Controlar las malezas sin arar",
          objectives: ["O4"],
          minutes: 5,
          goal: "Planear el control de malezas en un campo de AC sin arar.",
          text: [
            "El arado entierra las malezas; sin él, las malezas pueden ser muchas en las primeras temporadas. Esta es la razón principal por la que los agricultores abandonan la AC, así que planea el deshierbe desde el principio.",
            "Deshierba temprano y seguido: las primeras semanas después de que nace el cultivo son las que más importan. Usa el azadón con suavidad, raspando justo debajo de la superficie en lugar de voltear el suelo, o arranca a mano. Nunca dejes que las malezas den semilla; cada maleza que semilla agrega miles para el año siguiente. El acolchado y un cultivo de cobertura dan sombra al suelo y frenan muchas malezas, y un intercalado denso deja menos espacio. Tras varias temporadas de deshierbar antes de que semillen, las semillas de maleza del suelo se agotan y deshierbar se vuelve más fácil.",
            "Algunos agricultores de AC también usan un herbicida. Si lo haces, usa solo productos registrados en tu país (en Kenia, revisa la lista de la Pest Control Products Board, la junta de productos para el control de plagas; en Nigeria, de NAFDAC, la agencia nacional de control de alimentos y medicamentos; en Ghana, de la Environmental Protection Agency, la agencia de protección ambiental), cómpralos a vendedores con licencia y sigue la etiqueta al pie de la letra en cuanto al cultivo, el momento y la cantidad. Usa ropa de protección, guantes y botas, mantén lejos a los niños y a los animales, y nunca fumigues cerca del agua. Pregunta a tu extensionista antes de empezar."
          ],
          steps: ["Deshierba temprano: las primeras semanas después de la emergencia.", "Azadón suave o a mano; no voltees el suelo.", "Nunca dejes que las malezas den semilla.", "Usa acolchado, cultivos de cobertura e intercalados densos para dar sombra a las malezas.", "Si usas herbicida: producto registrado, etiqueta, equipo de protección.", "Planea la mano de obra para deshierbar antes de que empiece la temporada."],
          words: [["Banco de semillas de malezas", "las semillas de malezas guardadas en el suelo, esperando para crecer."], ["Herbicida", "un producto químico que mata las malezas."], ["Producto registrado", "un pesticida o herbicida aprobado para su uso por la autoridad nacional."]],
          slides: [
            { title: "Las malezas son la gran prueba", bullets: ["Más fuertes en las primeras temporadas", "Razón principal por la que se abandona", "Planea el deshierbe desde el principio"] },
            { title: "Deshierbar sin arar", bullets: ["Temprano y seguido después de la emergencia", "Azadón suave o a mano", "Nunca dejes que semillen"] },
            { title: "Deja que la cobertura trabaje", bullets: ["Acolchado y coberturas dan sombra a las malezas", "Los intercalados densos dejan menos espacio", "El banco de semillas se agota con las temporadas"] },
            { title: "¿Herbicida? Solo de forma segura", bullets: ["Registrado: PCPB (KE), NAFDAC (NG), EPA (GH)", "Sigue la etiqueta al pie de la letra", "Equipo de protección; lejos del agua y de los niños"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Escribe un plan contra las malezas para tu campo: cuándo deshierbarás (semanas después de la siembra), con qué herramienta, quién lo hará y cuántos días tomará, y cómo ayudará la cobertura o un intercalado. Si piensas en un herbicida, escribe dónde comprobarás que está registrado.",
          youCanNow: "planear el control de malezas en un campo de AC sin arar, usando herbicidas, si acaso, solo de forma segura y legal.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué nunca debes dejar que las malezas den semilla en un campo de AC?", options: ["Las semillas le dan mal sabor al cultivo", "Las semillas de maleza son buen fertilizante", "Es ilegal", "Cada maleza que semilla agrega miles de semillas para el año siguiente"], answer: 3, why: "Impedir que las malezas semillen agota el banco de semillas a lo largo de las temporadas." },
            { objective: "O4", q: "Una agricultora de Kenia quiere usar un herbicida en su maíz de AC. ¿Qué debe revisar primero?", options: ["Que esté registrado por la Pest Control Products Board y cómo dice la etiqueta que se usa", "Que sea la botella más barata", "Que a un vecino le gustó", "Que no tenga etiqueta"], answer: 0, why: "Solo los productos registrados, usados como dice la etiqueta y con equipo de protección, son seguros y legales." }
          ]
        },
        {
          title: "Herramientas, tiempos, años de sequía y la transición",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Escribir un calendario de temporada con las tareas, herramientas y costos de la AC, y preparar una parcela de comparación.",
          text: [
            "Una temporada de AC empieza en la temporada seca, no con las lluvias. Un calendario típico: después de la cosecha, guarda los residuos y acuerda el pastoreo; en la temporada seca, cava o vuelve a usar las cuencas, o subsuela, y pon el estiércol; con las primeras buenas lluvias, siembra enseguida (sin esperar a arar); en las primeras semanas, deshierba temprano y seguido; durante la temporada, agrega el intercalado o el cultivo de cobertura; en la cosecha, deja los residuos en el campo y planea la rotación de la próxima temporada. Junto a cada tarea, escribe la herramienta (azadón, subsolador, sembradora de golpe, fumigadora y equipo de protección) y el costo, sea propia, alquilada o prestada.",
            "En los años de sequía se ve la principal ventaja de la AC. Las cuencas y el acolchado atrapan y guardan más agua, y sembrar a tiempo aprovecha la lluvia temprana. Una revisión de muchos ensayos en el Zimbabue semiárido encontró que las cuencas de siembra dieron más maíz que el arado en más de la mitad de los ensayos. Pero la AC no le gana al arado todos los años, y no puede reemplazar la falta total de lluvia.",
            "Espera una transición. Puede que los rendimientos sigan igual o incluso bajen en las primeras una o dos temporadas, mientras hay muchas malezas y el suelo se ajusta; los beneficios suelen crecer a lo largo de varias temporadas, a medida que aumentan la cobertura y la materia orgánica. Empieza en un campo, deja una parcela arada al lado y anota el rendimiento, los días de trabajo y los costos de las dos cada temporada. Juzga la AC después de tres temporadas, no de una."
          ],
          steps: ["Anota cada tarea, de cosecha a cosecha.", "Pon cada una en un mes.", "Agrega la herramienta y si es propia, alquilada o prestada.", "Agrega el costo y los días de trabajo.", "Marca una parcela arada de comparación del mismo tamaño.", "Anota rendimiento, trabajo y costo de las dos cada temporada; juzga después de tres temporadas."],
          words: [["Periodo de transición", "las primeras temporadas después de pasar a la AC, cuando hay muchas malezas y los beneficios todavía están creciendo."], ["Parcela de comparación", "una parcela trabajada como antes junto a la parcela de AC, para comparar los resultados de forma justa."], ["Día de trabajo", "una persona trabajando un día; sirve para medir cuánto trabajo lleva una tarea."]],
          slides: [
            { title: "La temporada empieza en seco", bullets: ["Después de la cosecha: guarda residuos, acuerda el pastoreo", "Temporada seca: cuencas o subsolado, estiércol", "Primeras buenas lluvias: siembra enseguida"] },
            { title: "Calendario con herramientas y costos", bullets: ["Azadón, subsolador, sembradora de golpe, equipo de protección", "¿Propia, alquilada o prestada?", "Costo y días de trabajo de cada tarea"] },
            { title: "Años de sequía", bullets: ["Las cuencas y el acolchado guardan más agua", "Zimbabue: cuencas superaron al arado en más de la mitad de ensayos", "No todos los años; sin lluvia no hay cosecha"] },
            { title: "Pasar la transición", bullets: ["Los rendimientos pueden bajar en las temporadas 1 a 2", "Deja una parcela arada para comparar", "Anota rendimiento, trabajo y costo; juzga tras 3 temporadas"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Tarea final: escribe tu plan de una temporada de AC para un campo, con un dibujo, el método de preparación de la tierra y sus razones, los planes de cobertura y de malezas, el cultivo y la rotación, un calendario mes a mes de tareas, herramientas y costos, y dónde estará tu parcela arada de comparación.",
          youCanNow: "planear una temporada completa de AC con herramientas, tiempos y costos, y compararla de forma justa con el arado durante los años de transición.",
          quickCheck: [
            { objective: "O5", q: "¿Cuándo empieza el trabajo de una temporada de AC?", options: ["Cuando el cultivo florece", "En la temporada seca, después de la última cosecha", "Con la primera lluvia, arando", "En la cosecha del siguiente cultivo"], answer: 1, why: "Las cuencas, el subsolado, el estiércol y el plan de residuos se hacen en la temporada seca para sembrar con las primeras lluvias." },
            { objective: "O6", q: "Tu parcela de AC da el mismo rendimiento que la parcela arada en la primera temporada. ¿Qué debes hacer?", options: ["Abandonar la AC", "Arar la parcela de AC", "Quemar los residuos", "Seguir anotando al menos tres temporadas antes de juzgar"], answer: 3, why: "Los beneficios crecen a lo largo de varias temporadas; una sola es muy pronto para juzgar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La temporada y la transición",
        questions: [
          { objective: "O4", q: "¿Qué nunca debes hacer con los residuos en un campo de AC?", options: ["Repartirlos parejo", "Dejarlos sobre la superficie", "Quemarlos", "Agregar más de las orillas del campo"], answer: 2, why: "Quemar quita la cobertura y la materia orgánica de las que depende la AC." },
          { objective: "O4", q: "¿Qué forma de deshierbar va con la AC?", options: ["Enterrar las malezas con el arado", "Quemar todo el campo", "Deshierbar solo en la cosecha", "Azadón suave o arrancar a mano, temprano y seguido"], answer: 3, why: "Deshierbar en la superficie sin voltear el suelo mantiene la alteración al mínimo." },
          { objective: "O5", q: "¿Qué punto va en un calendario de temporada de AC?", options: ["Cavar o volver a usar las cuencas en la temporada seca, con la herramienta y el costo", "Arar dos veces antes de sembrar", "Quemar los residuos después de la cosecha", "Sembrar un mes después de que empiezan las lluvias"], answer: 0, why: "Un calendario de AC anota cada tarea con su mes, su herramienta y su costo." },
          { objective: "O5", q: "¿Por qué la AC a menudo te deja sembrar antes?", options: ["La semilla crece más rápido", "Llueve más en los campos de AC", "La tierra se prepara en la temporada seca, así que siembras con las primeras buenas lluvias", "La semilla es más barata"], answer: 2, why: "No esperar a arar quiere decir sembrar a tiempo." },
          { objective: "O6", q: "¿Qué tres cosas debes anotar para la parcela de AC y para la parcela arada?", options: ["Color, olor y sabor", "Solo la lluvia", "Rendimiento, días de trabajo y costos", "El número de visitas"], answer: 2, why: "El rendimiento, el trabajo y los costos muestran si la AC está dando resultado en tu finca." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agricultura de conservación para temporadas secas",
    questions: [
      { objective: "O1", q: "¿Qué lista da los tres principios de la agricultura de conservación de la FAO?", options: ["Arar, quemar, monocultivo", "Mínima alteración del suelo, cobertura permanente del suelo, diversificación de cultivos", "Riego, fertilizante, pesticidas", "Labranza profunda, suelo pelado, un solo cultivo"], answer: 1, why: "Estos son los tres principios que describe la FAO." },
      { objective: "O1", q: "Según la FAO, ¿qué parte del suelo, como mínimo, debe estar cubierta en la AC?", options: ["5 por ciento", "10 por ciento", "30 por ciento", "100 por ciento en todo momento"], answer: 2, why: "La FAO habla de una cobertura orgánica permanente de al menos el 30 por ciento." },
      { objective: "O1", q: "¿Qué quiere decir mínima alteración del suelo?", options: ["Remover el suelo solo donde van la semilla y el fertilizante", "Arar una vez en lugar de dos", "No sembrar nunca", "Cavar todo el campo a mano"], answer: 0, why: "Solo se remueve el punto de siembra, la cuenca o el surco de subsolado." },
      { objective: "O1", q: "¿Qué rotación muestra diversificación de cultivos?", options: ["Maíz, maíz, maíz", "Barbecho pelado todos los años", "Solo sorgo", "Maíz, luego caupí, luego sorgo"], answer: 3, why: "Tres cultivos distintos con el tiempo es diversificación." },
      { objective: "O2", q: "¿Qué son los hoyos zai?", options: ["Estanques para peces", "Hoyos de siembra con estiércol o compost que atrapan la lluvia", "Graneros", "Pozos para riego"], answer: 1, why: "Los hoyos zai concentran el agua y los nutrientes en la planta." },
      { objective: "O2", q: "Las hileras de cuencas deben ir:", options: ["Cuesta arriba y cuesta abajo", "En círculos", "A través de la pendiente, siguiendo la curva de nivel", "En cualquier dirección"], answer: 2, why: "Las hileras a través de la pendiente atrapan el agua en lugar de llevarla cuesta abajo." },
      { objective: "O2", q: "¿Por qué volver a usar las mismas cuencas en las temporadas siguientes?", options: ["Ahorra mucho trabajo y mejora el suelo en los mismos puntos", "Las cuencas no se pueden cavar dos veces", "Lo exige la ley", "Las cuencas nuevas atraen plagas"], answer: 0, why: "Volver a usar las cuencas es mucho más rápido y concentra las mejoras." },
      { objective: "O3", q: "¿Qué agricultor es el más indicado para las cuencas cavadas a mano?", options: ["Uno con 20 hectáreas y un tractor", "Uno sin nada de mano de obra", "Uno que quiere arar", "Uno que trabaja con azadón en una parcela pequeña"], answer: 3, why: "Las cuencas convienen a las parcelas pequeñas trabajadas a mano." },
      { objective: "O3", q: "¿Qué es el pie de arado?", options: ["Una olla de cocina", "Un tipo de semilla", "Un estanque poco hondo", "Una capa dura debajo de la profundidad de arado que frena las raíces y el agua"], answer: 3, why: "Arar una y otra vez puede formar una capa dura que un subsolador puede romper." },
      { objective: "O3", q: "¿Qué quiere decir siembra directa?", options: ["Sembrar directamente en suelo sin remover y con residuos", "Tirar la semilla a mano sobre suelo arado", "Trasplantar plántulas de un vivero", "Comprar la semilla directo a una empresa"], answer: 0, why: "La siembra directa pone la semilla sin abrir el suelo más allá del punto de siembra." },
      { objective: "O4", q: "¿De dónde puede venir cobertura extra si los animales se comen casi todos los residuos?", options: ["De quemar", "De arar", "De un intercalado de caupí o lablab, del pasto de las orillas o de ramas de poda", "De láminas de plástico"], answer: 2, why: "Los intercalados, el pasto y las ramas de poda agregan cobertura sin quitar todo el alimento." },
      { objective: "O4", q: "En Nigeria, ¿qué organismo registra los agroquímicos como los herbicidas?", options: ["NAFDAC", "El servicio meteorológico", "El banco central", "La federación de fútbol"], answer: 0, why: "NAFDAC registra los agroquímicos en Nigeria; revisa su lista." },
      { objective: "O4", q: "¿Cuándo es más importante controlar las malezas en un cultivo de AC?", options: ["Solo en la cosecha", "Nunca", "Solo después de la floración", "En las primeras semanas después de que nace el cultivo"], answer: 3, why: "Las malezas tempranas compiten más con el cultivo joven." },
      { objective: "O4", q: "Si usas un herbicida, ¿qué debes hacer?", options: ["Mezclar tu propia dosis extrafuerte", "Usar un producto registrado, seguir la etiqueta al pie de la letra y usar equipo de protección", "Fumigar cerca del pozo", "Dejar que los niños ayuden a fumigar"], answer: 1, why: "Solo los productos registrados, usados como dice la etiqueta y con protección, son seguros y legales." },
      { objective: "O5", q: "¿Qué herramienta pone la semilla a mano a través de los residuos?", options: ["Un arado de vertedera", "Una regadera", "Una sembradora de golpe", "Una rastra"], answer: 2, why: "La sembradora de golpe es una herramienta de mano para la siembra directa." },
      { objective: "O5", q: "¿Qué debe incluir cada línea de tu calendario de AC?", options: ["La tarea, el mes, la herramienta y el costo", "Solo el nombre del cultivo", "Solo la lluvia", "El nombre del vecino"], answer: 0, why: "La tarea, el mes, la herramienta y el costo hacen útil el calendario." },
      { objective: "O5", q: "¿Cuándo se cavan o se vuelven a usar las cuencas y se pone el estiércol?", options: ["En la floración", "En la temporada seca, antes de las lluvias", "Durante la cosecha", "Cuando terminan las lluvias"], answer: 1, why: "Preparar en la temporada seca te deja sembrar con las primeras buenas lluvias." },
      { objective: "O6", q: "En los años de sequía, ¿por qué la AC suele dar mejores resultados que el arado?", options: ["Hace llover", "No necesita semilla", "Detiene todas las plagas", "Las cuencas y el acolchado atrapan y guardan más agua"], answer: 3, why: "Más agua se infiltra y menos se evapora bajo la cobertura." },
      { objective: "O6", q: "¿Qué puede pasar con los rendimientos en las primeras una o dos temporadas de AC?", options: ["Siempre se duplican", "Pueden seguir igual o bajar mientras hay muchas malezas y el suelo se ajusta", "Siempre caen a cero", "No se puede saber nada"], answer: 1, why: "La transición puede ser dura; los beneficios crecen a lo largo de varias temporadas." },
      { objective: "O6", q: "¿Por qué dejar una parcela arada al lado de tu parcela de AC?", options: ["Para comparar de forma justa el rendimiento, el trabajo y el costo", "Para alimentar al ganado", "Porque la AC lo exige por ley", "Para cultivar malezas"], answer: 0, why: "Una parcela de comparación muestra lo que la AC está haciendo de verdad en tu finca." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y vuelve a intentarlo.",
    criteria: [
      { name: "Tres principios", objective: "O1", notYet: "El plan sigue arando, deja el suelo pelado o siembra un solo cultivo.", meets: "El plan muestra mínima alteración, cobertura y una rotación o intercalado con al menos tres cultivos a lo largo del tiempo.", exceeds: "Explica cómo los tres principios se apoyan entre sí en este campo." },
      { name: "Preparación de la tierra", objective: "O3", notYet: "No se eligió método, o no hay razones.", meets: "Cuencas, hoyos zai, subsolado o siembra directa elegidos con al menos dos razones (mano de obra, fuerza de tiro, suelo, tamaño).", exceeds: "Dice de dónde vienen las herramientas y ha visto o probado el método." },
      { name: "Cuencas u hoyos trazados", objective: "O2", notYet: "Las cuencas no van a través de la pendiente o no tienen plan de estiércol.", meets: "Hileras a través de la pendiente, fechas de cavado en la temporada seca y estiércol o compost en cada cuenca (si se usan cuencas u hoyos).", exceeds: "Ha cavado un área de prueba, medido el tiempo y calculado la mano de obra para todo el campo." },
      { name: "Cobertura y malezas", objective: "O4", notYet: "No hay plan para residuos, pastoreo o malezas.", meets: "Mantiene al menos el 30 por ciento de cobertura, resuelve el pastoreo y tiene un calendario de deshierbe; cualquier herbicida está registrado y se usa como dice la etiqueta, con equipo de protección.", exceeds: "Agrega un cultivo de cobertura o intercalado y un plan para impedir que las malezas semillen." },
      { name: "Calendario de temporada", objective: "O5", notYet: "Faltan tareas o no tienen fechas.", meets: "Todas las tareas, desde la preparación en la temporada seca hasta la cosecha, con mes, herramienta y costo.", exceeds: "Incluye los días de trabajo y quién hace cada tarea." },
      { name: "Comparación durante la transición", objective: "O6", notYet: "No hay parcela de comparación ni registros.", meets: "Una parcela arada de comparación, con rendimiento, días de trabajo y costos para anotar cada temporada.", exceeds: "Se compromete a juzgar después de tres temporadas y anota qué le haría cambiar el plan." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que hacen una temporada de AC en al menos un campo con una parcela de comparación (encuesta de seguimiento)",
      "Rendimiento, días de trabajo y costo en parcelas de AC frente a parcelas aradas a lo largo de tres temporadas, sobre todo en años secos (registros del participante)",
      "Participantes que siguen practicando la AC después de tres temporadas, y la superficie que trabajan con AC",
      "Vecinos o miembros del grupo que adoptan la AC (reportes de extensión)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel y lápiz para el dibujo del campo y el calendario",
      "Un azadón, cuerda o palos y una cinta métrica o un palo medido para trazar las cuencas",
      "Estiércol o compost para las cuencas de prueba",
      "Precios locales o tarifas de alquiler de subsoladores, sembradoras de golpe y mano de obra (o cifras de ejemplo)",
      "Unos 90 minutos en total, más tiempo en el campo para la prueba de las cuencas"
    ],
    facilitatorNotes: [
      "Dé la lección 2 en el campo: tracen y caven juntos algunas cuencas u hoyos zai, y midan el tiempo del trabajo.",
      "Invite a un agricultor que ya practique la AC, o organice una visita a una parcela demostrativa, para que los participantes vean funcionar el subsolado o la siembra directa.",
      "Hablen abiertamente de las costumbres de pastoreo; si es posible, incluya en la conversación a los pastores o a los líderes de la comunidad.",
      "No recomiende herbicidas concretos; envíe a los participantes a la lista nacional de registro y al extensionista, e insista en la etiqueta y el equipo de protección.",
      "Dé expectativas honestas sobre la transición: puede que los rendimientos no suban en las primeras temporadas.",
      "Califique el plan final con la rúbrica y haga seguimiento después de cada temporada para comparar las parcelas."
    ]
  }
};

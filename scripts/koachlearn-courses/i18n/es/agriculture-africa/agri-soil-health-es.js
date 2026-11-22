"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-soil-health.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_SOM = { name: "FAO: La importancia de la materia orgánica del suelo (clave para un suelo resistente a la sequía)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO: Técnicas de manejo de la escorrentía para controlar la erosión", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "Portal FAO TECA/STI: Estrategias mecánicas de conservación del suelo para reducir la erosión", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Organización de Investigación Agrícola y Ganadera de Kenia (KALRO): contacto para análisis de suelo", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO: Guía de muestreo y preparación de suelos para evaluar la fertilidad", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Soil Research Institute, Kwadaso, Kumasi (Ghana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "Manejo de nutrientes 4R en la agricultura africana: manual de extensión para el manejo de fertilizantes", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health-es",
  lang: "es",
  translationOf: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Salud y fertilidad del suelo",
  skills: "Leer tu suelo en el campo, Tomar una muestra de suelo para análisis, Aumentar la materia orgánica con composta y estiércol, Planear rotaciones y asociaciones con leguminosas, Frenar la erosión con cobertura y curvas de nivel, Usar el fertilizante según las 4R",
  outcome: "revisar la salud de tu propio suelo, tomar una buena muestra para un análisis de laboratorio y escribir un plan de suelo para una temporada que aumente la materia orgánica, rote con leguminosas, evite que el suelo se lave y use el fertilizante con la fuente, la dosis, el momento y el lugar correctos.",
  about: [
    "Este curso es para pequeños agricultores y agricultores en crecimiento, trabajadores del campo y agricultores jóvenes en Kenia, Nigeria, Ghana y en toda África que quieren sacar más de la misma tierra. Un suelo sano guarda más agua, alimenta mejor al cultivo y devuelve cada chelín, naira o cedi que pones en semilla y fertilizante.",
    "El capítulo 1 trata de conocer tu suelo: leerlo con los ojos y las manos, conseguir un buen análisis de suelo y aumentar la materia orgánica con composta y estiércol. El capítulo 2 trata de mantenerlo sano temporada tras temporada: rotaciones y asociaciones con leguminosas, cobertura y control de la erosión, y buen uso del fertilizante.",
    "Los suelos cambian de un terreno a otro. Usa este curso junto con los resultados de tu análisis de suelo y los consejos de tu extensionista, tu instituto de investigación o tu agroveterinaria, y prueba las prácticas nuevas primero en una parcela pequeña. Cada lección dura unos cinco minutos y termina con una tarea en tu propia finca. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de suelo de una página para un terreno de tu finca (o para un terreno de ejemplo, como 1 acre de maíz y frijol en Kakamega, 2 acres de yuca en Oyo o 1 acre de tomate cerca de Kumasi): lo que encontraste al revisar el terreno, cuándo y dónde vas a hacer un análisis de suelo (o lo que dijo el análisis), cómo vas a agregar materia orgánica, tu rotación o asociación con leguminosas, cómo vas a mantener el suelo cubierto y frenar la erosión, y tu plan de fertilizante escrito como fuente, dosis, momento y lugar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Pequeños agricultores y agricultores que están creciendo, trabajadores agrícolas y jóvenes agricultores en Kenia, Nigeria, Ghana y en toda África que quieren sacar más de la misma tierra, con cultivos como maíz, frijol, yuca y tomate.",
    startingPoint: "La mayoría siembra cada temporada y usa algo de estiércol o fertilizante, muchas veces por costumbre o por consejo de un vecino. Pocos han hecho una revisión de su suelo en el campo, un análisis de suelo, composta, una rotación planeada, controles de erosión en curvas de nivel o han usado el fertilizante con las 4R.",
    gap: "Un suelo cansado, ácido o erosionado desperdicia el dinero gastado en semilla y fertilizante y deja los cultivos débiles en las temporadas secas. Conocer su suelo y mejorarlo cada temporada ayuda a guardar más agua, alimentar mejor los cultivos y sacar más cosecha de cada costal de fertilizante.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; cada término de suelos se explica",
      "Dispositivos: una pala, una cubeta y un teléfono básico; la mayor parte de la práctica se hace en el campo",
      "Tiempo: lecciones de unos 5 minutos que caben entre las tareas de la finca",
      "Los suelos cambian de un terreno a otro: las dosis salen de un análisis de suelo, del extensionista o de la investigación, y las prácticas nuevas se prueban primero en una parcela pequeña",
      "Las tarifas, los lugares y los tiempos de espera de los laboratorios cambian: hay que llamar o revisar antes de ir"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En uno de tus propios terrenos", action: "hacer una revisión en el campo del color, la textura, las lombrices, las raíces, el agua y las señales de las plantas, y anotar lo que muestra", standard: "tratando las señales de las plantas como pistas que se confirman con un análisis de suelo" },
    { id: "O2", condition: "Para un terreno", action: "tomar una muestra de suelo de la forma correcta y decir a dónde mandarla para analizarla", standard: "con muchas muestras pequeñas mezcladas en una muestra limpia por cada parte del terreno" },
    { id: "O3", condition: "Con rastrojos, material verde y estiércol", action: "hacer una compostera y planear cómo agregar materia orgánica", standard: "sin quemar rastrojos y sin poner estiércol fresco en las plántulas" },
    { id: "O4", condition: "Para un terreno", action: "planear una rotación de tres temporadas y una asociación con leguminosas", standard: "con una leguminosa en el plan y una distancia que deje que los dos cultivos reciban luz" },
    { id: "O5", condition: "Para un terreno con pendiente o desnudo", action: "elegir cobertura y controles de erosión y ponerlos en curvas de nivel", standard: "con la curva de nivel marcada con ayuda del extensionista cuando haga falta" },
    { id: "O6", condition: "Para un cultivo", action: "escribir un plan de fertilizante con la fuente, la dosis, el momento y el lugar correctos", standard: "con las dosis tomadas de un análisis de suelo o de la recomendación local" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conocer y alimentar tu suelo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Leer tu suelo con los ojos y las manos",
          minutes: 5,
          goal: "Hacer una revisión sencilla de tu suelo en el campo y anotar lo que te dice.",
          text: [
            "Puedes aprender mucho del suelo con una pala, tus manos y tus ojos. Un suelo sano es oscuro, se desmorona fácil y huele a tierra. Tiene lombrices y otros animalitos, las raíces bajan hondo y la lluvia se filtra en lugar de escurrirse. Un suelo pobre es pálido o duro, forma una costra después de la lluvia, se agrieta mucho cuando está seco o se queda mojado y con mal olor.",
            "Siente la textura: moja una bolita de tierra y frótala entre los dedos. El suelo arenoso se siente áspero y se deshace; drena rápido y pierde nutrientes. El suelo arcilloso se siente pegajoso y se puede enrollar en una tira larga y delgada; guarda agua y nutrientes, pero se puede encharcar y endurecer. El suelo franco está en medio y es el más fácil de trabajar.",
            "Mira también las plantas. Las hojas de abajo amarillas en el maíz pueden indicar poco nitrógeno. Las hojas moradas en el maíz joven pueden indicar poco fósforo. Malezas como la striga (hierba bruja) muchas veces muestran un suelo cansado y poco fértil. Son pistas, no pruebas: un análisis de suelo te lo dice con seguridad."
          ],
          steps: ["Cava un hoyo de una pala de hondo en tres lugares del terreno.", "Mira el color, las capas, las raíces y si hay una capa dura.", "Cuenta las lombrices en una palada.", "Moja una bolita de tierra y siéntela: áspera (arenosa), pegajosa (arcillosa) o en medio (franca).", "Después de la lluvia, anota dónde se escurre o se encharca el agua.", "Escribe lo que encontraste en cada parte del terreno."],
          words: [["Textura del suelo", "qué tan arenoso, limoso o arcilloso es un suelo; decide qué tan rápido drena el agua."], ["Suelo franco", "un suelo con una buena mezcla de arena, limo y arcilla."], ["Capa dura (piso de arado)", "una capa dura bajo la superficie por la que no pueden pasar las raíces ni el agua."], ["Striga", "una maleza parásita (hierba bruja) que ataca al maíz, el sorgo y el mijo, común en suelos pobres."]],
          slides: [
            { title: "Suelo sano", bullets: ["Oscuro, se desmorona, huele a tierra", "Lombrices y raíces hondas", "La lluvia se filtra, no se escurre"] },
            { title: "Siente la textura", bullets: ["Áspero y se deshace: arenoso, drena rápido", "Pegajoso, forma una tira: arcilloso, guarda agua", "En medio: franco, el más fácil de trabajar"] },
            { title: "Pistas de las plantas (no pruebas)", bullets: ["Hojas bajas de maíz amarillas: quizá poco nitrógeno", "Hojas de maíz joven moradas: quizá poco fósforo", "Mucha striga: suelo muchas veces cansado y pobre"] },
            { title: "Revisión en el campo", bullets: ["Cava en tres lugares", "Mira, huele, cuenta lombrices, siente la textura", "Observa el agua después de la lluvia; anótalo"] }
          ],
          tryIt: "Haz la revisión en uno de tus terrenos: cava en tres lugares, siente la textura, cuenta las lombrices y escribe una línea para cada lugar. Toma una foto con el teléfono de cada hoyo para comparar la próxima temporada.",
          youCanNow: "revisar tu suelo en el campo y describir su textura, su vida, su drenaje y sus señales de alerta.",
          quickCheck: [
            { objective: "O1", q: "¿A qué pueden apuntar las hojas de abajo amarillas en el maíz?", options: ["A demasiada agua en las hojas", "A demasiado sol", "A un crecimiento sano", "A poco nitrógeno"], answer: 3, why: "Las hojas de abajo amarillas en el maíz pueden indicar poco nitrógeno; un análisis de suelo lo confirma." },
            { objective: "O1", q: "Después de la lluvia, tu terreno forma una costra dura y el agua escurre. ¿Qué anotas en tu revisión?", options: ["Suelo sano; no hace falta cambiar nada", "Una señal de suelo pobre, que hay que confirmar con un análisis de suelo", "Demasiadas lombrices", "Un suelo franco perfecto"], answer: 1, why: "La costra y el escurrimiento son señales de un suelo pobre; un análisis de suelo te dice con seguridad lo que necesita." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Conseguir un análisis de suelo y tomar una buena muestra",
          minutes: 5,
          goal: "Tomar una muestra de suelo de la forma correcta y saber a dónde mandarla para analizarla.",
          text: [
            "Un análisis de suelo te dice lo que tus ojos no ven: qué tan ácido es el suelo (pH) y cuánto tiene de los nutrientes principales. Muchos suelos de las zonas más lluviosas de Kenia, Nigeria y Ghana son ácidos, y eso le esconde los nutrientes al cultivo; el análisis te dice si la cal ayudaría. Sin análisis, puedes gastar dinero en el fertilizante equivocado.",
            "Dónde hacer el análisis: en Kenia, la KALRO tiene laboratorios de suelo (por ejemplo, su laboratorio de fertilidad del suelo en Kabete, Nairobi) y algunos condados tienen sus propios laboratorios. En Ghana, el CSIR-Soil Research Institute en Kwadaso, Kumasi, ofrece análisis de laboratorio. En Nigeria y en otros lugares, pregunta en la oficina de extensión de tu estado o condado, en una universidad agrícola o en un instituto de investigación. Los precios, los lugares y los tiempos de espera cambian, así que llama o pregunta antes de ir.",
            "La propia guía de la KALRO dice que el muestreo es la mayor fuente de error en un análisis de suelo. Un puñado de un solo lugar no representa un terreno. Toma muchas muestras pequeñas en todo el terreno, mézclalas y manda una sola muestra mezclada y limpia por cada terreno o por cada parte que se vea distinta."
          ],
          steps: ["Elige un terreno (o una parte que se vea igual).", "Camina en zigzag y toma de 10 a 20 muestras pequeñas, de los primeros 15 a 20 cm, con una pala o barrena limpia.", "Evita lugares raros: montones viejos de estiércol, ceniza, caminos, hormigueros, franjas de fertilizante.", "Mezcla bien todas las muestras en una cubeta limpia (no en un costal de fertilizante).", "Toma como medio kilo de la mezcla, sécala al aire en la sombra y ponle etiqueta: nombre, terreno, fecha, cultivo que piensas sembrar.", "Llévala al laboratorio antes de sembrar para que los resultados lleguen a tiempo."],
          words: [["pH", "un número que muestra qué tan ácido o alcalino es el suelo; a la mayoría de los cultivos les gusta cerca de neutro."], ["Suelo ácido", "un suelo con pH bajo que bloquea nutrientes como el fósforo."], ["Cal", "un producto de roca molida que hace que un suelo ácido sea menos ácido."], ["Muestra compuesta", "muchas muestras pequeñas de un terreno mezcladas en una sola."]],
          slides: [
            { title: "¿Para qué analizar?", bullets: ["Muestra el pH y los nutrientes principales", "Te dice si la cal ayudaría", "Evita gastar en el fertilizante equivocado"] },
            { title: "Dónde analizar", bullets: ["Kenia: laboratorios de la KALRO (p. ej., Kabete) y de algunos condados", "Ghana: CSIR-Soil Research Institute, Kumasi", "En otros lugares: extensión, universidad, instituto de investigación"] },
            { title: "Toma una buena muestra", bullets: ["Zigzag, de 10 a 20 puntos, primeros 15 a 20 cm", "Evita estiércol, ceniza, caminos, hormigueros", "Mezcla en cubeta limpia; manda como medio kilo"] },
            { title: "Etiqueta y calcula el tiempo", bullets: ["Nombre, terreno, fecha, cultivo planeado", "Seca al aire en la sombra", "Manda antes de sembrar; pregunta precio y laboratorio"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Busca el lugar más cercano que analice suelos: llama a tu extensionista o consulta la KALRO, el CSIR-SRI o el instituto de investigación de tu estado. Escribe su nombre, el precio y el tiempo de espera. Luego marca en un dibujo de tu terreno el camino en zigzag que vas a recorrer para tomar la muestra.",
          youCanNow: "tomar una buena muestra de suelo mezclada y saber dónde mandarla a analizar.",
          quickCheck: [
            { objective: "O2", q: "¿Qué te dice el pH del suelo?", options: ["Qué tan ácido es el suelo", "Cuántas lombrices tiene", "Qué tan hondo llegan las raíces", "Cuánta lluvia cayó"], answer: 0, why: "El pH muestra qué tan ácido es el suelo; un suelo ácido encierra los nutrientes y puede necesitar cal." },
            { objective: "O2", q: "Una parte de tu terreno está encharcada y el resto está seco y arenoso. ¿Cómo tomas la muestra?", options: ["Un puño de tierra del centro", "Mezclar las partes húmeda y seca en una sola muestra", "Mandar una muestra mezclada aparte por cada parte que se ve diferente", "Tomar la muestra solo cerca del montón de estiércol"], answer: 2, why: "Cada terreno, o cada parte que se ve diferente, lleva su propia muestra limpia y mezclada." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Aumentar la materia orgánica con composta y estiércol",
          minutes: 5,
          goal: "Hacer una compostera y usar el estiércol con seguridad para aumentar la materia orgánica del suelo.",
          text: [
            "La materia orgánica son los restos oscuros y descompuestos de plantas y animales en el suelo. La FAO la llama la clave de un suelo resistente a la sequía: guarda agua como una esponja, alimenta a las lombrices y a la vida del suelo, sostiene los nutrientes para que la lluvia no se los lleve y hace que el suelo se desmorone para que las raíces crezcan.",
            "Agregas materia orgánica cuando dejas el rastrojo en el terreno en lugar de quemarlo, cuando pones estiércol y composta, y cuando siembras leguminosas y cultivos de cobertura. Quemar el rastrojo y arar una y otra vez gastan la materia orgánica.",
            "La composta es fácil de hacer: arma un montón o una fosa con capas de material seco (cañas de maíz, pasto seco), material verde (maleza fresca, hojas, restos de cocina) y estiércol, con un poco de tierra entre capas. Mantenla húmeda como una esponja exprimida y voltéala cada dos o tres semanas. Está lista en unos dos o tres meses, cuando está oscura, se desmorona y huele a tierra. Deja que el estiércol fresco se pudra antes de usarlo; el estiércol fresco y caliente puede quemar las plántulas."
          ],
          steps: ["Elige un lugar con sombra cerca del terreno y del agua.", "Pon una base de cañas gruesas para que entre aire.", "Agrega capas: material seco, material verde, estiércol, un poco de tierra; repite.", "Riega cada capa para que quede húmeda, no empapada.", "Mete un palo en el montón; si sale tibio, está funcionando.", "Voltea el montón cada dos o tres semanas.", "Úsala cuando esté oscura y se desmorone, en los hoyos de siembra o en los surcos."],
          words: [["Materia orgánica", "material de plantas y animales descompuesto en el suelo que guarda agua y nutrientes."], ["Composta", "restos de plantas y animales podridos que se usan para alimentar el suelo."], ["Rastrojo", "las cañas, hojas y cáscaras que quedan después de la cosecha."], ["Cultivo de cobertura", "un cultivo que se siembra sobre todo para cubrir y alimentar el suelo."]],
          slides: [
            { title: "Por qué importa la materia orgánica", bullets: ["Guarda agua como una esponja (FAO)", "Alimenta la vida del suelo y sostiene nutrientes", "Hace que el suelo se desmorone para las raíces"] },
            { title: "Agrégala, no la quemes", bullets: ["Deja el rastrojo; no lo quemes", "Pon estiércol y composta", "Siembra leguminosas y cultivos de cobertura"] },
            { title: "Haz composta", bullets: ["Capas: seco, verde, estiércol, un poco de tierra", "Húmeda como una esponja exprimida", "Voltéala cada 2 o 3 semanas; lista en 2 a 3 meses"] },
            { title: "Estiércol con seguridad", bullets: ["Deja que el estiércol fresco se pudra primero", "El estiércol fresco y caliente puede quemar plántulas", "Lávate las manos después de tocarlo"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Empieza esta semana una compostera (montón o fosa) con lo que tengas: cañas, maleza, restos de cocina y estiércol. Escribe la fecha y las capas que usaste, y pon un recordatorio en el teléfono para voltearla en dos semanas.",
          youCanNow: "hacer composta, usar el estiércol con seguridad y explicar cómo la materia orgánica ayuda a tu suelo.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en una compostera?", options: ["Solo plástico y latas", "Solo estiércol fresco", "Capas de material seco, material verde y estiércol, con un poco de tierra entre ellas", "Solo ceniza de rastrojos quemados"], answer: 2, why: "La composta se arma en capas de material seco, material verde y estiércol, se mantiene húmeda y se voltea." },
            { objective: "O3", q: "Después de unos tres meses, tu composta está oscura, se desmorona y huele a tierra. ¿Qué haces?", options: ["Usarla; ya está lista", "Quemarla", "Tirarla", "Dejarla dos años más"], answer: 0, why: "La composta está lista cuando está oscura, se desmorona y huele a tierra, después de unos dos a tres meses." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocer y alimentar tu suelo",
        questions: [
          { objective: "O1", q: "Mojas una bolita de tierra y se siente áspera y se deshace. ¿Qué tipo de suelo es lo más probable?", options: ["Arcilloso", "Arenoso", "Franco", "Turba"], answer: 1, why: "El suelo áspero que se deshace es arenoso; drena rápido y pierde nutrientes." },
          { objective: "O1", q: "El maíz joven tiene hojas moradas. ¿Cuál es el mejor siguiente paso?", options: ["Comprar cualquier fertilizante de inmediato", "Quemar el terreno", "Tomarlo como una pista y confirmar con un análisis de suelo", "Arrancar el cultivo"], answer: 2, why: "El color de la hoja es una pista, no una prueba; el análisis de suelo te lo dice con seguridad." },
          { objective: "O2", q: "¿Cómo debes tomar una muestra de suelo de un terreno?", options: ["Un puñado del mejor lugar", "Tierra del montón viejo de estiércol", "Tierra del camino, donde es fácil cavar", "De 10 a 20 muestras pequeñas en zigzag, mezcladas en una"], answer: 3, why: "Una muestra mezclada de muchos puntos representa todo el terreno; la KALRO dice que el muestreo es la mayor fuente de error." },
          { objective: "O2", q: "En Ghana, ¿qué instituto ofrece análisis de suelo en laboratorio?", options: ["El CSIR-Soil Research Institute, Kumasi", "La asociación nacional de fútbol", "La agencia meteorológica", "La oficina de correos"], answer: 0, why: "El CSIR-Soil Research Institute en Kwadaso, Kumasi, ofrece análisis de laboratorio." },
          { objective: "O3", q: "¿Qué debes hacer con las cañas de maíz después de la cosecha para mejorar la salud del suelo?", options: ["Quemarlas", "Dejarlas en el terreno o hacer composta con ellas", "Tirarlas al río", "Venderlas todas cada temporada"], answer: 1, why: "El rastrojo que se deja en el terreno o se composta agrega materia orgánica; quemarlo la gasta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantener el suelo sano temporada tras temporada",
      lessons: [
        {
          objectives: ["O4"],
          title: "Rotación de cultivos y asociación con leguminosas",
          minutes: 5,
          goal: "Planear una rotación de tres temporadas y una asociación con leguminosas para un terreno.",
          text: [
            "Sembrar el mismo cultivo en el mismo terreno cada temporada saca siempre los mismos nutrientes y acumula sus plagas, enfermedades y malezas. La rotación de cultivos es cambiar el cultivo de un terreno de una temporada a otra; por ejemplo, maíz, luego frijol o cacahuate, luego sorgo o yuca.",
            "Las leguminosas como el frijol, el caupí, el cacahuate, la soya y el gandul trabajan con bacterias que viven en bolitas (nódulos) de sus raíces para tomar nitrógeno del aire. Parte de ese nitrógeno se queda en las raíces y las hojas para el siguiente cultivo, sobre todo si dejas el rastrojo en el terreno.",
            "Asociar cultivos es sembrar dos cultivos juntos, como maíz con frijol, sorgo con caupí o yuca con cacahuate. Cubre el suelo, reparte el riesgo y puede dar más comida en total de la misma tierra. Deja un espacio que permita que los dos cultivos reciban luz, y siembra la leguminosa a tiempo para que se establezca."
          ],
          steps: ["Haz una lista de los terrenos que trabajas y de lo que creció en cada uno la temporada pasada.", "Planea las próximas tres temporadas para que ningún terreno tenga el mismo cultivo dos veces seguidas.", "Pon una leguminosa en cada terreno al menos una vez cada tres temporadas.", "Elige una pareja para asociar, como maíz y frijol.", "Deja el rastrojo de la leguminosa en el terreno después de la cosecha."],
          words: [["Rotación de cultivos", "cambiar el cultivo de un terreno de una temporada a la siguiente."], ["Leguminosa", "una planta como el frijol, el caupí o el cacahuate que puede agregar nitrógeno al suelo."], ["Nódulos", "bolitas en las raíces de las leguminosas donde las bacterias fijan nitrógeno del aire."], ["Asociación de cultivos", "sembrar dos o más cultivos juntos en el mismo terreno."]],
          slides: [
            { title: "Por qué rotar", bullets: ["El mismo cultivo cada temporada saca los mismos nutrientes", "Se acumulan plagas, enfermedades y malezas", "Ejemplo: maíz, luego frijol, luego sorgo"] },
            { title: "Las leguminosas alimentan el suelo", bullets: ["Frijol, caupí, cacahuate, soya, gandul", "Los nódulos de la raíz toman nitrógeno del aire", "Deja el rastrojo para que gane el siguiente cultivo"] },
            { title: "Asocia", bullets: ["Maíz + frijol, sorgo + caupí, yuca + cacahuate", "Cubre el suelo y reparte el riesgo", "Deja espacio para que los dos reciban luz"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Dibuja una tabla sencilla: tus terrenos hacia abajo y las próximas tres temporadas arriba. Pon un cultivo en cada casilla para que cada terreno tenga una leguminosa una vez y ningún terreno repita cultivo. Arranca una planta de frijol o de cacahuate y busca los nódulos en las raíces.",
          youCanNow: "planear una rotación de cultivos y una asociación con leguminosas que alimenten tu suelo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué son los nódulos en las raíces de las leguminosas?", options: ["Señales de enfermedad", "Bolitas donde unas bacterias toman nitrógeno del aire", "Huevos de insectos", "Piedras en el suelo"], answer: 1, why: "Las leguminosas trabajan con bacterias en los nódulos de sus raíces para tomar nitrógeno del aire." },
            { objective: "O4", q: "Siembras maíz y frijol juntos, pero el frijol no recibe luz. ¿Qué cambias?", options: ["Dejar de sembrar frijol", "Quemar el maíz", "Echar más semilla", "Usar una distancia que deje que los dos cultivos reciban luz, y sembrar el frijol a tiempo"], answer: 3, why: "Las asociaciones necesitan una distancia que deje que los dos cultivos reciban luz, con la leguminosa sembrada a tiempo para establecerse." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Cobertura del suelo y control de la erosión",
          minutes: 5,
          goal: "Elegir y poner cobertura y controles sencillos de erosión en un terreno con pendiente.",
          text: [
            "Suelo desnudo es suelo perdido. La lluvia fuerte suelta la tierra y la escorrentía se lleva la capa de arriba, que es la más rica. La cobertura (una capa de rastrojo, pasto seco u hojas sobre el suelo) suaviza la lluvia, mantiene el suelo húmedo y fresco, y lo alimenta al pudrirse. La FAO señala que en las pendientes se necesita cubrir con rastrojo mucho más terreno que en el plano para frenar la erosión.",
            "En las pendientes, trabaja a lo ancho de la pendiente, nunca hacia arriba y abajo. Siembra y haz camellones siguiendo la curva de nivel (una línea a la misma altura a lo ancho de la pendiente). La FAO describe los camellones en curvas de nivel como un buen método para pequeños agricultores con herramientas de mano o bueyes, y las franjas de pasto (por ejemplo, pasto Napier) en curvas de nivel como una opción barata en lugar de terrazas; el pasto también puede alimentar al ganado.",
            "En terrenos más inclinados, las barreras de piedra, los bordos en curvas de nivel y las terrazas de banco (como las terrazas fanya juu de Kenia) sostienen el suelo y el agua. Construirlas y mantenerlas da trabajo, y las líneas mal trazadas pueden empeorar la erosión, así que pide a tu extensionista que te ayude a marcar la curva de nivel."
          ],
          steps: ["Recorre el terreno después de la lluvia y marca dónde corre el agua y dónde se lava el suelo.", "Marca las curvas de nivel a lo ancho de la pendiente con un nivel en A o de manguera con agua, o con ayuda de la extensión.", "Siembra, haz camellones y deshierba siguiendo las curvas de nivel.", "Siembra franjas de pasto o haz barreras de piedra o bordos en algunas curvas.", "Cubre el suelo entre surcos con rastrojo.", "Revisa y repara después de cada lluvia fuerte."],
          words: [["Cobertura (mulch)", "una capa de rastrojo, pasto u hojas extendida sobre el suelo."], ["Erosión", "el suelo que se lava con el agua o se lo lleva el viento."], ["Curva de nivel", "una línea a lo ancho de una pendiente donde todos los puntos están a la misma altura."], ["Terraza", "un escalón plano cortado en una pendiente para sostener el suelo y el agua."]],
          slides: [
            { title: "Suelo desnudo es suelo perdido", bullets: ["La lluvia suelta la tierra; la escorrentía se la lleva", "La cobertura suaviza la lluvia y guarda humedad", "Las pendientes necesitan más cobertura"] },
            { title: "Trabaja a lo ancho de la pendiente", bullets: ["Nunca ares hacia arriba y abajo", "Camellones y siembra en curvas de nivel", "Franjas de pasto: baratas y dan forraje"] },
            { title: "Terrenos más inclinados", bullets: ["Barreras de piedra, bordos en curvas de nivel, terrazas", "Traza las líneas con cuidado; pide ayuda a la extensión", "Repara después de lluvias fuertes"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "Después de la próxima lluvia, recorre tu terreno y marca en un dibujo dónde corre el agua y dónde se lava el suelo. Elige un control (cobertura, camellones en curvas de nivel, franja de pasto o barrera de piedra) para el peor lugar y escribe cuándo lo vas a poner.",
          youCanNow: "detectar la erosión en tu finca y elegir cobertura y controles en curvas de nivel para frenarla.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una curva de nivel?", options: ["Una línea derecha hacia arriba de la pendiente", "Una cerca", "Un camino", "Una línea a la misma altura a lo ancho de una pendiente"], answer: 3, why: "Una curva de nivel es una línea a la misma altura a lo ancho de la pendiente; los bordos y las franjas de pasto la siguen." },
            { objective: "O5", q: "Quieres hacer terrazas fanya juu en un terreno muy inclinado. ¿Qué haces primero?", options: ["Pedir a tu extensionista que te ayude a marcar la curva de nivel", "Cavar derecho hacia arriba y hacia abajo de la pendiente", "Empezar en cualquier lugar y ajustar después", "Quitar primero todo el pasto"], answer: 0, why: "Las líneas mal trazadas pueden empeorar la erosión, así que pide ayuda para marcar la curva de nivel." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Lo básico del fertilizante: fuente, dosis, momento y lugar correctos",
          minutes: 6,
          goal: "Escribir un plan de fertilizante para un cultivo usando las 4R.",
          text: [
            "Los cultivos necesitan nitrógeno (N), fósforo (P) y potasio (K), además de cantidades más pequeñas de otros nutrientes. El fertilizante mineral los da rápido y en cantidades conocidas. La idea de las 4R, que usa la extensión en toda África, te ayuda a sacar el máximo de cada costal: la fuente correcta, en la dosis correcta, en el momento correcto y en el lugar correcto.",
            "Fuente correcta: el producto que da lo que tu análisis de suelo dice que falta (por ejemplo, un fertilizante con fósforo al sembrar, un fertilizante con nitrógeno para el abonado de cobertura y cal si el suelo es ácido). Dosis correcta: la cantidad que dan tu análisis y la recomendación local para tu cultivo y el rendimiento que buscas; más no siempre es mejor y desperdicia dinero. Momento correcto: cuando el cultivo lo necesita; por ejemplo, el abonado de cobertura con nitrógeno en el maíz cuando llega más o menos a la rodilla y el suelo está húmedo. Lugar correcto: cerca de las raíces, como en el hoyo de siembra o en una franja al lado del surco, sin tocar la semilla y tapado para que la lluvia no se lo lleve.",
            "Usa el fertilizante junto con materia orgánica; los dos funcionan mejor juntos que cada uno solo. Compra costales sellados con distribuidores de insumos registrados y revisa la etiqueta. Un asistente de IA en el teléfono te puede ayudar a entender un informe de análisis de suelo con palabras sencillas, pero las dosis vienen del laboratorio, de tu extensionista o de la recomendación oficial para tu zona."
          ],
          steps: ["Lee tu análisis de suelo o la recomendación local para el cultivo.", "Fuente: escribe qué producto da cada nutriente que falta (y cal si hace falta).", "Dosis: escribe la cantidad por acre o por hectárea que da la recomendación.", "Momento: marca en tu calendario las fechas de siembra y de abonado de cobertura.", "Lugar: planea ponerlo en el hoyo o en franja, sin tocar la semilla, y taparlo.", "Compra costales sellados con un distribuidor de insumos registrado; guarda el recibo."],
          words: [["NPK", "nitrógeno (N), fósforo (P) y potasio (K), los tres nutrientes principales de los cultivos."], ["4R", "fuente correcta, dosis correcta, momento correcto y lugar correcto para el fertilizante."], ["Abonado de cobertura", "agregar fertilizante, casi siempre nitrógeno, a un cultivo que ya está creciendo."], ["Distribuidor de insumos", "una tienda que vende semilla, fertilizante y otros insumos agrícolas."]],
          slides: [
            { title: "Las 4R", bullets: ["Fuente correcta: lo que le falta a tu suelo", "Dosis correcta: la cantidad recomendada", "Momento correcto: cuando el cultivo lo necesita", "Lugar correcto: cerca de las raíces, tapado"] },
            { title: "Ejemplo: maíz", bullets: ["Fertilizante con fósforo en el hoyo, sin tocar la semilla", "Nitrógeno de cobertura a la altura de la rodilla, suelo húmedo", "Cal si el análisis dice que el suelo es ácido"] },
            { title: "Que tu dinero rinda", bullets: ["Más no siempre es mejor", "Combínalo con composta y estiércol", "Costales sellados de distribuidores registrados"] },
            { title: "La IA explica, no receta", bullets: ["Pide a una IA del teléfono que te explique tu informe", "Las dosis vienen del laboratorio o del extensionista"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Tarea final: escribe tu plan de suelo de una página para un terreno. Incluye lo que encontraste al revisar el terreno, tu plan de análisis de suelo o sus resultados, cómo vas a agregar materia orgánica, tu rotación o asociación, cómo vas a frenar la erosión y una línea de fertilizante para cada nutriente: fuente, dosis, momento y lugar.",
          youCanNow: "usar el fertilizante según las 4R y armar un plan de suelo completo de una temporada para tu terreno.",
          quickCheck: [
            { objective: "O6", q: "En las 4R, ¿qué significa \"fuente correcta\"?", options: ["El costal más barato de la tienda", "El costal con la etiqueta más llamativa", "El producto que da lo que tu análisis de suelo dice que falta", "Cualquier fertilizante que usó un vecino"], answer: 2, why: "La fuente correcta da los nutrientes que tu análisis de suelo dice que faltan." },
            { objective: "O6", q: "Un vendedor te ofrece fertilizante barato de un costal abierto y sin etiqueta. ¿Qué haces?", options: ["Comprarlo porque es barato", "Comprar mejor costales sellados y con etiqueta a un distribuidor de insumos registrado", "Mezclarlo con tu propio fertilizante", "Comprar el doble"], answer: 1, why: "Compra costales sellados a distribuidores de insumos registrados y revisa la etiqueta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantener el suelo sano temporada tras temporada",
        questions: [
          { objective: "O4", q: "¿Por qué las leguminosas como el frijol ayudan al siguiente cultivo?", options: ["Matan todas las malezas", "Sus raíces trabajan con bacterias para agregar nitrógeno", "Hacen el suelo más ácido", "No necesitan lluvia"], answer: 1, why: "Los nódulos de la raíz fijan nitrógeno del aire; parte se queda en el suelo para el siguiente cultivo." },
          { objective: "O4", q: "¿Cuál plan es una buena rotación de cultivos?", options: ["Maíz, luego frijol, luego sorgo", "Maíz, luego maíz, luego maíz", "Tomate después de tomate cada temporada", "Dejar el terreno desnudo una temporada sí y otra no"], answer: 0, why: "Cambiar de cultivo e incluir una leguminosa corta el ciclo de las plagas y alimenta el suelo." },
          { objective: "O5", q: "En un terreno con pendiente, ¿cómo debes arar y sembrar?", options: ["Derecho hacia arriba y abajo de la pendiente", "En círculos", "A lo ancho de la pendiente, siguiendo la curva de nivel", "Solo en la parte de arriba"], answer: 2, why: "Trabajar en curvas de nivel frena la escorrentía y mantiene el suelo en su lugar." },
          { objective: "O6", q: "¿Qué quiere decir \"momento correcto\" para el abonado de cobertura con nitrógeno en el maíz?", options: ["Cuando te sobre dinero", "Antes de comprar la semilla", "Después de la cosecha", "Cuando el cultivo lo necesita, a la altura de la rodilla, con el suelo húmedo"], answer: 3, why: "El nitrógeno se aprovecha mejor cuando el cultivo en crecimiento lo necesita y el suelo está húmedo." },
          { objective: "O6", q: "¿Cuál es el lugar correcto para el fertilizante de siembra?", options: ["Encima de la semilla", "Cerca de las raíces, sin tocar la semilla y tapado", "Regado en el camino", "En la compostera"], answer: 1, why: "Ponerlo cerca de las raíces, tapado y sin tocar la semilla lo aprovecha mejor y evita quemar la semilla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Salud y fertilidad del suelo",
    questions: [
      { objective: "O1", q: "¿Cuál es una señal de un suelo sano?", options: ["Pálido y duro, con costra", "Oscuro, se desmorona, con lombrices", "Siempre encharcado", "La lluvia se escurre de inmediato"], answer: 1, why: "Un suelo oscuro que se desmorona y tiene lombrices está sano." },
      { objective: "O1", q: "Un suelo pegajoso que se enrolla en una tira larga es sobre todo:", options: ["Arena", "Grava", "Arcilla", "Ceniza"], answer: 2, why: "El suelo pegajoso que forma una tira tiene mucha arcilla." },
      { objective: "O1", q: "Un terreno tiene mucha striga (hierba bruja). Esto muchas veces es señal de:", options: ["Un suelo cansado y poco fértil", "Demasiada composta", "Un suelo perfecto", "Demasiada sombra"], answer: 0, why: "La striga es común en suelos pobres y cansados." },
      { objective: "O2", q: "¿Qué te dice un análisis de suelo de laboratorio que tus ojos no ven?", options: ["El color del suelo", "Cuántas lombrices hay", "Por dónde corre el agua", "El pH y los niveles de nutrientes"], answer: 3, why: "Un análisis de suelo mide la acidez y los nutrientes." },
      { objective: "O2", q: "En Kenia, ¿qué instituto nacional tiene laboratorios de análisis de suelo?", options: ["La KALRO", "Kenya Power", "Kenya Airways", "El Kenya Wildlife Service"], answer: 0, why: "La KALRO, la Organización de Investigación Agrícola y Ganadera de Kenia, tiene laboratorios de suelo como el de Kabete." },
      { objective: "O2", q: "Al tomar una muestra de suelo, ¿qué lugar debes evitar?", options: ["El centro del terreno", "Un punto del zigzag", "La orilla de un surco de siembra", "Un montón viejo de estiércol o de ceniza"], answer: 3, why: "Los lugares raros dan una imagen falsa del terreno." },
      { objective: "O2", q: "¿En qué debes mezclar las muestras de suelo?", options: ["En un costal viejo de fertilizante", "En una cubeta limpia", "En un envase usado de químicos", "En tu bolsillo"], answer: 1, why: "Una cubeta limpia mantiene la muestra libre de fertilizante o químicos que arruinarían el resultado." },
      { objective: "O3", q: "Según la FAO, la materia orgánica del suelo es clave porque:", options: ["Hace el suelo más duro", "Quita todos los nutrientes", "Guarda agua y nutrientes como una esponja", "Impide que crezcan las raíces"], answer: 2, why: "La materia orgánica guarda agua y nutrientes y alimenta la vida del suelo." },
      { objective: "O3", q: "¿Qué tan húmeda debe estar una compostera?", options: ["Completamente seca", "Inundada de agua", "Húmeda como una esponja exprimida", "No importa"], answer: 2, why: "La composta necesita humedad sin estar empapada." },
      { objective: "O3", q: "¿Por qué debes dejar que el estiércol fresco se pudra antes de usarlo cerca de las plántulas?", options: ["El estiércol fresco y caliente puede quemar las plántulas", "El estiércol podrido pesa más", "El estiércol fresco no tiene nutrientes", "Es ley en todas partes"], answer: 0, why: "El estiércol fresco puede ser demasiado fuerte y caliente para las plantas jóvenes." },
      { objective: "O3", q: "¿Qué práctica gasta la materia orgánica del suelo?", options: ["Agregar composta", "Quemar el rastrojo", "Sembrar leguminosas", "Cubrir el suelo con rastrojo"], answer: 1, why: "Quemar destruye el rastrojo que habría alimentado el suelo." },
      { objective: "O4", q: "¿Cuál es una leguminosa?", options: ["El maíz", "El sorgo", "La yuca", "El caupí"], answer: 3, why: "El caupí es una leguminosa que puede agregar nitrógeno al suelo." },
      { objective: "O4", q: "Sembrar maíz y frijol juntos en el mismo terreno se llama:", options: ["Asociación de cultivos", "Encalado", "Terraceo", "Abonado de cobertura"], answer: 0, why: "Sembrar dos cultivos juntos es asociar cultivos." },
      { objective: "O4", q: "¿Por qué rotar cultivos en lugar de sembrar el mismo cada temporada?", options: ["Para usar más fertilizante", "Para que deshierbar sea más difícil", "Para cortar la acumulación de plagas y enfermedades y equilibrar los nutrientes", "Porque lo exige la ley"], answer: 2, why: "La rotación corta el ciclo de las plagas y evita que un solo cultivo saque siempre los mismos nutrientes." },
      { objective: "O5", q: "¿Qué hace la cobertura del suelo?", options: ["Hace el suelo más caliente y seco", "Mata las lombrices", "Reemplaza todo el fertilizante", "Suaviza la lluvia, mantiene el suelo húmedo y lo alimenta"], answer: 3, why: "La cobertura protege y alimenta el suelo." },
      { objective: "O5", q: "Una forma barata de frenar la erosión en una pendiente suave, que además puede alimentar al ganado, es:", options: ["Franjas de pasto en curvas de nivel", "Arar hacia arriba y abajo de la pendiente", "Quemar el terreno", "Quitar todas las plantas"], answer: 0, why: "La FAO describe las franjas de pasto como una opción barata en lugar de terrazas." },
      { objective: "O5", q: "¿Por qué pedir a un extensionista que ayude a marcar las curvas de nivel?", options: ["No hace ninguna falta", "Las curvas de nivel se tienen que pintar", "Las líneas mal trazadas pueden empeorar la erosión", "Los extensionistas son dueños de la tierra"], answer: 2, why: "Las líneas que no están realmente a nivel pueden encauzar el agua y aumentar la erosión." },
      { objective: "O6", q: "¿Cuál NO es una de las 4R del uso del fertilizante?", options: ["Fuente correcta", "Dosis correcta", "Lugar correcto", "Color correcto"], answer: 3, why: "Las 4R son fuente, dosis, momento y lugar." },
      { objective: "O6", q: "¿De dónde debe venir la dosis de fertilizante para tu cultivo?", options: ["De una adivinanza", "De tu análisis de suelo y la recomendación local", "De lo que usó tu vecino", "Del costal más grande de la tienda"], answer: 1, why: "Las dosis deben ir de acuerdo con tu suelo y la recomendación oficial." },
      { objective: "O6", q: "Le preguntas a un asistente de IA del teléfono sobre tu análisis de suelo. ¿Cuál es la forma correcta de usarlo?", options: ["Para que te explique el informe con palabras sencillas y luego confirmar las dosis con el laboratorio o la extensión", "Para elegir las dosis de fertilizante en lugar del laboratorio", "Para mandarle tus datos bancarios", "Para reemplazar el análisis de suelo"], answer: 0, why: "La IA puede explicar, pero las dosis vienen del laboratorio, del extensionista o de la recomendación oficial." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      5,
      7,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte del plan y revísala de nuevo.",
    criteria: [
      {
        name: "Revisión en el campo y análisis de suelo",
        objective: "O2",
        notYet: "No hay revisión en el campo ni plan para un análisis de suelo.",
        meets: "Anota los resultados de la revisión en el campo, con cuándo y dónde se hará un análisis de suelo, o lo que dijo.",
        exceeds: "Usa los resultados del análisis de suelo para dar forma al resto del plan."
      },
      {
        name: "Materia orgánica",
        objective: "O3",
        notYet: "No agrega materia orgánica, o quema los rastrojos.",
        meets: "Un plan para dejar los rastrojos y agregar composta o estiércol podrido, con fechas.",
        exceeds: "Incluye una compostera ya empezada en la finca."
      },
      {
        name: "Rotación y leguminosas",
        objective: "O4",
        notYet: "El mismo cultivo cada temporada, sin leguminosa.",
        meets: "Una rotación de tres temporadas o una asociación con leguminosas con una distancia sensata.",
        exceeds: "Tiene rotación y asociación, con los rastrojos dejados en el terreno."
      },
      {
        name: "Cobertura y erosión",
        objective: "O5",
        notYet: "Deja el suelo desnudo, o trabaja hacia arriba y hacia abajo de la pendiente.",
        meets: "Cobertura del suelo, y controles de erosión en curvas de nivel donde el terreno tiene pendiente.",
        exceeds: "Dice quién ayudará a marcar la curva de nivel y cómo se mantendrán los controles."
      },
      {
        name: "Fertilizante con las 4R",
        objective: "O6",
        notYet: "Menciona fertilizante sin fuente de la dosis, sin momento ni lugar.",
        meets: "Fuente, dosis, momento y lugar escritos para cada producto, con dosis de un análisis de suelo o de la recomendación local.",
        exceeds: "Combina el fertilizante con materia orgánica y anota de dónde salió la dosis."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del plan de suelo",
      "Participantes que dicen haber hecho un análisis de suelo, empezado una composta o sembrado una leguminosa dentro de una temporada (encuesta de seguimiento)",
      "Cambio en la cosecha o en el gasto en fertilizante que reportan los participantes o su grupo después de una temporada",
      "Participantes que empiezan otro curso de agricultura de Koach Learn en un plazo de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una pala, una cubeta limpia y un cuaderno",
      "Un terreno para revisar, de preferencia el propio",
      "Un teléfono básico para llamar a un laboratorio de suelos o a la oficina de extensión",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo en el campo y para escribir el plan de suelo"
    ],
    facilitatorNotes: [
      "En un grupo de agricultores o una escuela de campo: hagan juntos la prueba inicial y luego la revisión en el campo y la prueba de textura en un terreno real.",
      "Practiquen juntos cómo tomar una muestra de suelo mezclada, y busca antes de la sesión el laboratorio más cercano y su tarifa vigente.",
      "Armen en grupo una compostera pequeña para mostrar las capas.",
      "No des tú dosis de fertilizante; invita a un extensionista o usa la recomendación local.",
      "Califica el plan de suelo con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

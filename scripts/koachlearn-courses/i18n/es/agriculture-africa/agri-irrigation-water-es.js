"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-irrigation-water.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_WATERNEEDS = { name: "FAO, Manual de capacitación en manejo del agua de riego n.º 3: Necesidades de agua de riego", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO: Cosecha de agua, manual para diseñar y construir sistemas de cosecha de agua para la producción de plantas", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO: Manual técnico de técnicas de riego presurizado (incluye sistemas de goteo familiar de bajo costo)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO: Perspectivas positivas para los sistemas de riego con energía solar", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO: Calidad del agua para la agricultura (salinidad, lavado y drenaje)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Water Resources Authority, Kenia (permisos de uso de agua)", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water-es",
  lang: "es",
  translationOf: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Riego y manejo del agua",
  skills: "Saber cuándo un cultivo necesita agua, Cosechar agua de lluvia, Guardar el agua con seguridad, Instalar un kit de goteo de bajo costo, Programar el riego sin encharcar ni acumular sal, Elegir una bomba, incluso solar",
  outcome: "planear el riego de una parcela pequeña: calcular cuándo tu cultivo necesita más agua, juntar y guardar agua de lluvia, instalar y manejar un kit de goteo de bajo costo con un horario, evitar el encharcamiento y la acumulación de sal, y elegir una bomba adecuada.",
  about: [
    "Este curso es para pequeños agricultores y agricultores en crecimiento, trabajadores del campo y agricultores jóvenes en Kenia, Nigeria, Ghana y en toda África que quieren seguir produciendo en los periodos secos, sacar un segundo cultivo en la temporada seca o usar mejor el agua que tienen. Se enfoca en métodos de bajo costo que puedes empezar en una parcela pequeña, como un huerto familiar de tomate y col rizada (kale) o un vivero de plántulas de café.",
    "El capítulo 1 trata de dónde sale el agua: cuánta agua necesitan los cultivos y cuándo, cómo cosechar agua de lluvia de los techos y del campo, y cómo guardarla con seguridad. El capítulo 2 trata de llevarla al cultivo: riego por goteo de bajo costo, cómo programar el riego sin encharcar ni acumular sal, y cómo elegir una bomba, incluso una bomba solar.",
    "Las reglas y los permisos de agua cambian según el país, así que consulta a tu autoridad del agua y a tu extensionista antes de perforar un pozo, bombear de un río o hacer un estanque grande. Cada lección dura unos cinco minutos y termina con una tarea en tu propia finca. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de riego de una página para una parcela pequeña (la tuya, o un ejemplo como 200 metros cuadrados de tomate cerca de Nakuru o 500 metros cuadrados de cebolla y chile cerca de Kano): el cultivo y sus etapas de más sed, de dónde va a salir el agua y cuánta puedes guardar, el sistema de goteo u otro que vas a usar, un horario semanal de riego y cómo vas a revisar el suelo, cómo vas a evitar el encharcamiento y la acumulación de sal, y la bomba que elegirías y por qué.",
  chapters: [
    {
      name: "Capítulo 1: Conseguir y guardar el agua",
      lessons: [
        {
          title: "¿Cuánta agua necesita tu cultivo y cuándo?",
          minutes: 5,
          goal: "Nombrar las etapas de más sed de tu cultivo y revisar la humedad del suelo con la mano.",
          text: [
            "El manual de capacitación de la FAO sobre necesidades de agua de riego explica que el agua que necesita un cultivo depende de tres cosas: el clima, el tipo de cultivo y su etapa de crecimiento. Los días calurosos, soleados, secos y con viento hacen que los cultivos usen más agua; los días frescos, nublados y sin viento, menos. Los cultivos altos y con mucha hoja usan más que los pequeños.",
            "Para planear, lo que más importa es la etapa de crecimiento. Un cultivo necesita poca agua cuando es pequeño, la mayor cantidad durante la floración y cuando se forman el grano o el fruto, y menos cuando madura. Al maíz la sequía le hace más daño en la salida de la espiga y los pelos (jilote); al tomate, en la floración y el cuajado del fruto; al frijol, en la floración y el llenado de la vaina. Un periodo seco en esas etapas es el que más cosecha cuesta.",
            "Revisa el suelo, no solo la superficie. Mete un dedo o un palito en la tierra cerca de las raíces, a unos 10 a 15 cm de hondo, o cava un hoyito y aprieta un puñado. Si se mantiene unido y se siente húmedo, espera. Si se desmorona y se siente seco a la altura de las raíces, es hora de regar. Parte de la lluvia que cae se pierde por escorrentía o se va muy hondo; la parte que el cultivo puede usar se llama lluvia efectiva."
          ],
          steps: ["Escribe tu cultivo y cuántos días pasan de la siembra a la cosecha.", "Marca sus etapas de más sed (por ejemplo, maíz: salida de espiga y de pelos).", "Cada semana, revisa el suelo a la altura de las raíces con un dedo, un palito o un hoyo.", "Anota el clima: los días calurosos, con viento y secos gastan más agua.", "Riega antes de que se seque el suelo a la altura de las raíces, sobre todo en las etapas de más sed."],
          words: [["Necesidad de agua del cultivo", "la cantidad de agua que usa un cultivo para crecer bien."], ["Etapa de crecimiento", "un periodo en la vida de un cultivo, como plántula, floración o maduración."], ["Lluvia efectiva", "la parte de la lluvia que se queda en la zona de raíces y que el cultivo puede usar."], ["Zona de raíces", "la capa de suelo donde están la mayoría de las raíces del cultivo."]],
          slides: [
            { title: "Tres cosas fijan el agua que se necesita (FAO)", bullets: ["Clima: calor, sol, aire seco, viento = más agua", "Tipo de cultivo: alto y con mucha hoja = más agua", "Etapa: más en la floración y el llenado de fruto o grano"] },
            { title: "Etapas de más sed", bullets: ["Maíz: salida de espiga y de pelos", "Tomate: floración y cuajado del fruto", "Frijol: floración y llenado de la vaina"] },
            { title: "Revisa el suelo, no la superficie", bullets: ["Dedo o palito de 10 a 15 cm cerca de las raíces", "Se mantiene unido y húmedo: espera", "Se desmorona y está seco: hora de regar"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "Para un cultivo que siembres, escribe en qué semanas después de la siembra llega a sus etapas de más sed. Luego revisa hoy tu suelo a la altura de las raíces con un dedo, un palito o un hoyito y escribe: húmedo o seco.",
          youCanNow: "decir cuándo tu cultivo necesita más agua y revisar la humedad del suelo a la altura de las raíces."
        },
        {
          title: "Cosechar agua de lluvia de los techos y del campo",
          minutes: 5,
          goal: "Calcular cuánta lluvia puede juntar tu techo y elegir un método de campo para que la lluvia se quede en tu tierra.",
          text: [
            "Cosechar agua es atrapar la lluvia donde cae o por donde corre, y guardarla para los cultivos, los animales o la casa. El manual de la FAO sobre cosecha de agua describe muchos métodos de campo que se usan en zonas secas: hoyos de siembra (como los hoyos zai), bordos en media luna, camellones en curvas de nivel, pequeñas captaciones en forma de rombo alrededor de los árboles (negarim) y bordos de piedra.",
            "Juntar agua del techo es la forma más sencilla de empezar. Cada 1 milímetro de lluvia sobre 1 metro cuadrado de techo da más o menos 1 litro de agua. Un techo de 50 metros cuadrados en un lugar con 600 mm de lluvia al año puede dar hasta 30,000 litros al año, aunque siempre se pierde algo, así que calcula menos. Pon canaletas, un tubo de primer lavado que tira la primera agua sucia y un tanque tapado.",
            "La escorrentía de caminos, veredas y pendientes se puede llevar a una olla de agua o estanque con forro. Los hoyos de siembra llenos de composta o estiércol atrapan la lluvia justo en las raíces del maíz, el sorgo o los árboles frutales jóvenes. Empieza en pequeño y observa por dónde corre el agua en tu tierra en la próxima tormenta."
          ],
          steps: ["Mide tu techo: largo por ancho en metros.", "Averigua la lluvia de tu zona al año con tu servicio meteorológico o tu extensionista.", "Multiplica el área del techo por la lluvia en mm para obtener litros, y calcula menos por las pérdidas.", "Pon canaletas, un tubo de primer lavado y un tanque tapado.", "Elige un método de campo (hoyos, bordos o camellones en curvas de nivel) para una parcela."],
          words: [["Cosecha de agua", "atrapar y guardar agua de lluvia o de escorrentía para usarla después."], ["Captación del techo", "juntar la lluvia de un techo por canaletas hacia un tanque."], ["Primer lavado", "un tubo que tira la primera lluvia del techo, que es la más sucia."], ["Hoyo zai", "un hoyo de siembra pequeño lleno de estiércol que atrapa la lluvia en las raíces."]],
          slides: [
            { title: "Atrapa la lluvia donde cae", bullets: ["Hoyos de siembra (zai), bordos en media luna", "Camellones en curvas de nivel, bordos de piedra", "Captaciones negarim alrededor de árboles (FAO)"] },
            { title: "Las cuentas del techo", bullets: ["1 mm de lluvia en 1 metro cuadrado = como 1 litro", "Techo de 50 m2 x 600 mm = hasta 30,000 litros al año", "Calcula menos: siempre se pierde algo"] },
            { title: "Instálalo", bullets: ["Canaletas y tubo de primer lavado", "Tanque tapado", "Lleva la escorrentía del camino a una olla con forro"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Mide el techo de tu casa o de tu bodega y averigua la lluvia de tu zona al año. Calcula cuántos litros podría juntar en un año. Usa la calculadora del teléfono o pide a un asistente de IA del teléfono que revise tu cuenta.",
          youCanNow: "calcular cuánta agua de lluvia puedes cosechar y elegir un método de campo para que la lluvia se quede en tu tierra."
        },
        {
          title: "Guardar el agua con seguridad",
          minutes: 4,
          goal: "Elegir dónde guardar el agua y mantenerla limpia, tapada y dentro de la ley.",
          text: [
            "Las formas comunes de guardar agua son los tanques de plástico o de ferrocemento, los tanques subterráneos y las ollas de agua o estanques de la finca. Los estanques pierden mucha agua hacia el suelo si no tienen forro (por ejemplo, una geomembrana) y mucha por el sol si no tienen sombra o tapa.",
            "Mantén el agua guardada limpia y segura. Tapa los tanques y los estanques para que no entren tierra, animales ni niños, y para que no se críen mosquitos. Pon cerca a los estanques. Limpia las canaletas y los tanques antes de las lluvias. El agua para tomar necesita más cuidado que el agua para los cultivos; pregunta en tu oficina de salud cómo tratarla.",
            "Para usar más agua puedes necesitar un permiso. En Kenia, la Water Resources Authority (WRA, la autoridad de recursos hídricos) regula el uso del agua y da permisos, por ejemplo para pozos y para bombear de los ríos. Otros países tienen sus propias autoridades del agua. Pregunta antes de perforar, hacer una presa o bombear."
          ],
          steps: ["Decide para qué es el agua: cultivos, animales o casa.", "Elige dónde guardarla: tanque, tanque subterráneo o estanque con forro.", "Tápalo y pon cerca a los estanques.", "Limpia las canaletas y los tanques antes de cada temporada de lluvias.", "Antes de perforar o bombear de un río, consulta a tu autoridad del agua."],
          words: [["Olla de agua", "un estanque excavado que junta la escorrentía."], ["Geomembrana", "una lámina de plástico fuerte que evita que un estanque se filtre al suelo."], ["Permiso", "la autorización oficial para usar o sacar agua."]],
          slides: [
            { title: "Dónde guardarla", bullets: ["Tanques de plástico o de ferrocemento", "Tanques subterráneos", "Ollas de agua y estanques con forro"] },
            { title: "Mantenla segura", bullets: ["Tapa: tierra, animales, mosquitos", "Cerca los estanques; los niños se ahogan en ellos", "Limpia canaletas y tanques antes de las lluvias"] },
            { title: "Revisa las reglas", bullets: ["Kenia: Water Resources Authority (WRA)", "Otros países: tu autoridad del agua", "Pregunta antes de perforar, represar o bombear"] }
          ],
          sources: [WRA],
          tryIt: "Escribe qué forma de guardar agua le queda a tu finca y a tu presupuesto, cómo la vas a tapar y cercar, y el nombre de la oficina de tu país a la que preguntarías antes de perforar o bombear.",
          youCanNow: "elegir dónde guardar el agua, mantenerla segura y saber cuándo necesitas un permiso."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conseguir y guardar el agua",
        questions: [
          { q: "¿Cuándo sufre más el maíz por la sequía?", options: ["En la salida de la espiga y de los pelos", "Justo después de la cosecha", "Antes de sembrar", "Cuando las mazorcas están secas"], answer: 0, why: "Las etapas de floración son las más sensibles; un periodo seco en ese momento es el que más cosecha cuesta." },
          { q: "¿Cómo debes revisar si un cultivo necesita agua?", options: ["Mirar solo la parte de arriba del suelo", "Esperar a que se mueran las hojas", "Revisar la humedad a la altura de las raíces con un dedo, un palito o un hoyito", "Regar cada hora"], answer: 2, why: "Las raíces sienten el suelo debajo de la superficie, así que revisa ahí." },
          { q: "Un techo mide 40 metros cuadrados y recibe 500 mm de lluvia al año. ¿Cuánto podría juntar como máximo, más o menos?", options: ["200 litros", "2,000 litros", "540 litros", "20,000 litros"], answer: 3, why: "40 x 500 = 20,000 litros; lo que de verdad se junta será un poco menos." },
          { q: "¿Qué hace un tubo de primer lavado?", options: ["Sube el agua cuesta arriba", "Tira la primera lluvia del techo, que es la más sucia", "Calienta el agua", "Mide la lluvia"], answer: 1, why: "Evita que el polvo y el excremento de los pájaros entren al tanque." },
          { q: "¿Por qué tapar un tanque o un estanque?", options: ["Para que no entren tierra ni animales y no se críen mosquitos", "Para que el agua esté más caliente", "Para que pese más", "Las tapas no sirven"], answer: 0, why: "Taparlo mantiene el agua limpia y segura." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llevar el agua al cultivo",
      lessons: [
        {
          title: "Riego por goteo de bajo costo",
          minutes: 6,
          goal: "Instalar y cuidar un kit de goteo con cubeta o tambo para una parcela pequeña.",
          text: [
            "El riego por goteo pone el agua despacio en la base de cada planta por medio de tubos delgados con agujeritos (goteros). Se pierde menos agua por el sol y el viento, las hojas se quedan secas y hay menos enfermedades, y la maleza entre los surcos recibe menos agua.",
            "El manual de la FAO sobre riego presurizado describe sistemas de goteo familiar de bajo costo para parcelas de unos 100 a 500 metros cuadrados: una cubeta o un tambo, elevado al menos 1 metro sobre las camas, alimenta un filtro, un tubo principal y cintas de goteo a lo largo de cada surco. La gravedad da la presión, así que no se necesita bomba para que funcione. Los distribuidores de insumos y los proveedores de riego venden kits; compara precios y pregunta por repuestos.",
            "El problema principal es que se tapen. Usa agua limpia, deja el filtro puesto y límpialo seguido, y lava los extremos de las cintas con frecuencia. Cubre el suelo con rastrojo encima de las cintas para que se evapore todavía menos agua. Revisa que cada gotero gotee; una planta seca casi siempre quiere decir un agujero tapado."
          ],
          steps: ["Empareja las camas y pon las cintas de goteo a lo largo de cada surco de plantas.", "Sube la cubeta o el tambo en una base, al menos 1 metro por encima de las camas.", "Conecta el tambo, la llave, el filtro, el tubo principal y las cintas; cierra los extremos de las cintas.", "Llénalo de agua limpia, abre la llave y revisa que todos los goteros goteen.", "Cubre las cintas con rastrojo.", "Limpia el filtro y lava los extremos de las cintas cada una o dos semanas."],
          words: [["Riego por goteo", "regar las plantas gota a gota en las raíces por medio de tubos delgados."], ["Gotero", "el agujerito o la pieza que deja salir el agua junto a cada planta."], ["Filtro", "una malla que evita que la tierra tape los goteros."], ["Por gravedad", "empujado por la altura del tanque de agua, no por una bomba."]],
          slides: [
            { title: "Por qué goteo", bullets: ["El agua va a las raíces", "Se pierde menos por el sol y el viento", "Hojas secas, menos enfermedades y menos maleza"] },
            { title: "Kit de goteo familiar (FAO)", bullets: ["Para parcelas de unos 100 a 500 metros cuadrados", "Cubeta o tambo al menos 1 m por encima de las camas", "Filtro, tubo principal, cintas a lo largo de los surcos"] },
            { title: "Que siga funcionando", bullets: ["Agua limpia y filtro limpio", "Lava seguido los extremos de las cintas", "Revisa cada gotero; cubre las cintas con rastrojo"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "Dibuja un plano de goteo para una parcela pequeña: dónde va el tambo (al menos a 1 m de altura), el filtro, el tubo principal y cada cinta. Luego pregunta a dos proveedores o distribuidores de insumos el precio de un kit de ese tamaño y anota los dos.",
          youCanNow: "instalar, manejar y cuidar un kit de goteo por gravedad de bajo costo."
        },
        {
          title: "Programar el riego sin encharcar ni acumular sal",
          minutes: 5,
          goal: "Hacer un horario semanal de riego y detectar a tiempo el encharcamiento y la acumulación de sal.",
          text: [
            "Un horario responde dos preguntas: cuándo regar y cuánto. Riega temprano en la mañana o al final de la tarde, cuando se pierde menos por el sol. Riega más seguido cuando hace calor y viento y en las etapas de más sed, y no riegues después de una buena lluvia. Sigue revisando el suelo a la altura de las raíces; el horario es una guía, pero el suelo tiene la última palabra.",
            "El exceso de agua hace tanto daño como la falta. Un suelo encharcado no tiene aire para las raíces: las plantas se ponen amarillas y se marchitan aunque el suelo esté mojado, y las raíces se pudren. Las señales son agua estancada, olor agrio y hojas amarillas. Riega menos, abre zanjas de drenaje y usa camas elevadas o camellones en las arcillas pesadas.",
            "La FAO explica que la sal se acumula cuando el agua de riego trae más sal de la que se va con el drenaje, y que regar de más y drenar mal son causas comunes. Fíjate si hay una costra blanca en el suelo, bordes de las hojas quemados y poco crecimiento. Ayudan un buen drenaje, la cobertura y regar lo suficiente (sin pasarse). Si ves estas señales, o usas agua de pozo en una zona seca, pide a tu extensionista o a un laboratorio de suelos que analicen el agua y el suelo."
          ],
          steps: ["Escribe un plan semanal: qué días, mañana o tarde, cuánto tiempo.", "Riega más en las etapas de más sed y en las semanas de calor y viento.", "No riegues después de una buena lluvia.", "Revisa el suelo a la altura de las raíces antes de cada riego.", "Busca agua estancada, olor agrio y hojas amarillas (encharcamiento).", "Busca costra blanca y bordes de hoja quemados (sal); pide un análisis del agua y del suelo."],
          words: [["Horario de riego", "un plan de cuándo y cuánto regar."], ["Encharcamiento", "un suelo tan lleno de agua que las raíces no reciben aire."], ["Salinidad", "demasiada sal en el suelo o en el agua, que daña los cultivos."], ["Drenaje", "la forma en que el agua de más sale del suelo."]],
          slides: [
            { title: "Cuándo y cuánto", bullets: ["Riega temprano en la mañana o al final de la tarde", "Más en las etapas de sed y en semanas de calor y viento", "No riegues tras una buena lluvia; el suelo decide"] },
            { title: "Encharcamiento", bullets: ["Agua estancada, olor agrio, plantas amarillas y marchitas", "Riega menos y abre zanjas de drenaje", "Camas elevadas o camellones en arcillas pesadas"] },
            { title: "Acumulación de sal (FAO)", bullets: ["La causan regar de más y drenar mal", "Costra blanca, bordes de hoja quemados, poco crecimiento", "Drena bien, cubre el suelo, analiza agua y suelo"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Escribe un horario de riego de una semana para un cultivo: días, hora del día y cuánto tiempo. Al lado, escribe las dos señales de alerta de encharcamiento y las dos de acumulación de sal que vas a buscar cada vez que riegues.",
          youCanNow: "programar el riego y detectar el encharcamiento y la acumulación de sal antes de que arruinen un cultivo."
        },
        {
          title: "Elegir una bomba, incluidas las bombas solares",
          minutes: 5,
          goal: "Comparar las bombas de pedal, de combustible y solares, y hacer la lista de lo que hay que preguntar a un proveedor.",
          text: [
            "Si el agua está más abajo o lejos de tu parcela, necesitas una bomba. Las bombas de pedal y de mano son baratas y funcionan con tu propio esfuerzo; sirven para parcelas pequeñas cerca de agua poco profunda. Las bombas de gasolina y de diésel son baratas de comprar y fáciles de mover, pero el combustible y las reparaciones cuestan dinero cada semana. Las bombas solares cuestan más al comprarlas, pero usan la luz del sol, que es gratis, así que cuesta muy poco hacerlas funcionar.",
            "Para elegir, debes saber tres cosas: cuánta agua necesitas al día, a qué altura hay que subir el agua (desde el nivel del agua hasta el tanque o el terreno) y qué distancia tiene que recorrer. El proveedor necesita estos datos para calcular el tamaño de la bomba. Una bomba demasiado pequeña no dará suficiente agua; una demasiado grande desperdicia dinero.",
            "La FAO señala un riesgo de las bombas solares: como cada hora extra de bombeo es gratis, los agricultores pueden bombear más de lo que el río o el agua subterránea pueden aguantar. Bombea solo lo que tu cultivo necesita, comparte el agua de forma justa con tus vecinos y sigue las reglas de tu autoridad del agua. Mantén los paneles limpios y seguros, y pide por escrito la garantía, los repuestos y el servicio después de la venta. Algunos proveedores ofrecen planes de pago por uso; lee primero el precio completo y las condiciones."
          ],
          steps: ["Calcula el agua que necesita tu parcela al día.", "Mide la altura: desde el nivel del agua hasta el tanque o el terreno.", "Mide la distancia de la fuente a la parcela.", "Compara pedal, combustible y solar en precio de compra, costo de uso y trabajo.", "Pide al proveedor por escrito el cálculo del tamaño, la garantía, los repuestos y el servicio.", "Revisa los permisos de agua antes de bombear de un río o de un pozo."],
          words: [["Bomba de pedal", "una bomba que se mueve con los pies para subir agua de fuentes poco profundas."], ["Bomba solar", "una bomba que funciona con paneles solares."], ["Altura de bombeo (carga)", "qué tan alto tiene que subir el agua la bomba."], ["Sobreexplotación", "sacar más agua de un río o del subsuelo de la que la naturaleza repone."]],
          slides: [
            { title: "Tipos de bomba", bullets: ["De pedal o de mano: barata, con tu propio esfuerzo", "Gasolina o diésel: barata de comprar, cara de usar", "Solar: cara de comprar, muy barata de usar"] },
            { title: "Del tamaño correcto", bullets: ["Agua que necesitas al día", "Altura: qué tan alto", "Distancia: qué tan lejos"] },
            { title: "Solar: úsala con cuidado (FAO)", bullets: ["Bombear gratis puede llevar a bombear de más", "Bombea solo lo que necesita el cultivo", "Sigue las reglas de tu autoridad del agua"] },
            { title: "Pregunta al proveedor", bullets: ["Cálculo del tamaño para tu altura y distancia", "Garantía, repuestos y servicio por escrito", "Precio completo y condiciones de cualquier plan de pago por uso"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Tarea final: escribe tu plan de riego de una página. Incluye las etapas de más sed de tu cultivo, tu fuente de agua y cómo la guardas, tu sistema de goteo u otro, un horario semanal, cómo vas a evitar el encharcamiento y la sal, y la bomba que elegirías con tu altura, tu distancia y el agua que necesitas al día.",
          youCanNow: "elegir el tipo de bomba correcto y armar un plan de riego completo para una parcela pequeña."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llevar el agua al cultivo",
        questions: [
          { q: "¿Cuál es el principal problema que hay que evitar con los kits de goteo?", options: ["Demasiada presión", "Goteros tapados", "Demasiadas plantas", "Hojas mojadas"], answer: 1, why: "La tierra tapa los goteros; un filtro limpio y lavar las cintas lo evitan." },
          { q: "¿A qué altura se debe subir el tambo de un kit de goteo por gravedad?", options: ["En el suelo", "Enterrado debajo de las camas", "Al menos 1 metro por encima de las camas", "No importa"], answer: 2, why: "La FAO dice que los tambos deben estar al menos a 1 metro de altura para dar suficiente presión." },
          { q: "Las plantas están amarillas y marchitas, el suelo huele agrio y hay agua estancada. ¿Qué pasa?", options: ["Muy poca agua", "Demasiado sol", "Sal en el aire", "Encharcamiento"], answer: 3, why: "El agua estancada y el olor agrio quieren decir que las raíces no tienen aire." },
          { q: "Ves una costra blanca en el suelo y bordes de hoja quemados. ¿Qué debes hacer?", options: ["Pedir un análisis del agua y del suelo y mejorar el drenaje", "Regar mucho más cada día", "Agregar más sal", "Ignorarlo"], answer: 0, why: "Son señales de acumulación de sal; la FAO la relaciona con regar de más y drenar mal." },
          { q: "¿Por qué advierte la FAO sobre las bombas solares?", options: ["Nunca funcionan", "Hacen mucho ruido", "Bombear gratis puede llevar a sacar demasiada agua", "Necesitan gasolina"], answer: 2, why: "Como casi no cuesta usarlas, los agricultores pueden bombear de más de los ríos y del agua subterránea." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Riego y manejo del agua",
    questions: [
      { q: "Según la FAO, el agua que necesita un cultivo depende de:", options: ["Solo del precio del agua", "El clima, el tipo de cultivo y la etapa de crecimiento", "El color del cultivo", "El día de la semana"], answer: 1, why: "La FAO menciona el clima, el tipo de cultivo y la etapa de crecimiento." },
      { q: "¿Qué clima hace que los cultivos usen más agua?", options: ["Fresco y nublado", "Sin viento y con neblina", "Caluroso, soleado, seco y con viento", "Frío y húmedo"], answer: 2, why: "El calor, el sol, el aire seco y el viento aumentan el uso de agua." },
      { q: "El tomate es más sensible a la falta de agua en:", options: ["La floración y el cuajado del fruto", "La compra de semilla", "Después de la última cosecha", "Cuando el terreno está desnudo"], answer: 0, why: "La floración y el cuajado del fruto son las etapas de más sed." },
      { q: "La lluvia efectiva es:", options: ["Toda la lluvia que cae", "La lluvia que cae de noche", "La lluvia que mide la radio", "La parte de la lluvia que el cultivo de verdad puede usar"], answer: 3, why: "Parte de la lluvia se escurre o se va muy hondo; el resto es efectiva." },
      { q: "¿Más o menos cuánta agua da 1 mm de lluvia en 1 metro cuadrado de techo?", options: ["1 litro", "10 litros", "100 litros", "1,000 litros"], answer: 0, why: "1 mm en 1 metro cuadrado es más o menos 1 litro." },
      { q: "Un hoyo zai es:", options: ["Un pozo perforado", "Un hoyo de siembra pequeño con estiércol que atrapa la lluvia en las raíces", "Un tipo de bomba", "Un tanque de agua"], answer: 1, why: "Los hoyos zai juntan la lluvia y los nutrientes en la planta." },
      { q: "¿Por qué ponerle forro a un estanque de la finca?", options: ["Para que el agua sea salada", "Para atraer animales", "Para que el agua no se filtre al suelo", "Nunca hace falta el forro"], answer: 2, why: "Los estanques sin forro pierden mucha agua hacia el suelo." },
      { q: "¿Por qué hay que cercar los estanques de la finca?", options: ["Para proteger a los niños y a los animales", "Para que sean más hondos", "Para parar la lluvia", "Para calentar el agua"], answer: 0, why: "Los estanques abiertos son un riesgo de ahogarse." },
      { q: "En Kenia, ¿qué organismo da permisos de uso de agua, por ejemplo para pozos?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Water Resources Authority (WRA)"], answer: 3, why: "La WRA regula el uso del agua y da permisos." },
      { q: "Una ventaja clave del riego por goteo es:", options: ["Moja las hojas", "El agua va a las raíces y se pierde menos", "No necesita agua", "Hace que la maleza crezca más rápido"], answer: 1, why: "El goteo lleva el agua a las raíces con poco desperdicio." },
      { q: "La FAO describe los kits de goteo familiar como adecuados para parcelas de unos:", options: ["1 a 5 metros cuadrados", "100 hectáreas", "Cualquier tamaño, hasta un condado entero", "100 a 500 metros cuadrados"], answer: 3, why: "El manual de la FAO trata el goteo familiar sencillo para unos 100 a 500 metros cuadrados." },
      { q: "Una planta de tu cinta de goteo está seca. La causa más probable es:", options: ["Un gotero tapado", "Demasiado sol sobre el tambo", "La planta está demasiado verde", "El filtro está demasiado limpio"], answer: 0, why: "Una planta seca casi siempre quiere decir que su gotero está tapado." },
      { q: "¿Por qué cubrir las cintas de goteo con rastrojo?", options: ["Solo para esconderlas del sol", "Para que el agua esté más caliente", "Para tapar los goteros", "Para que se evapore menos agua del suelo"], answer: 3, why: "La cobertura evita que la humedad del suelo se evapore." },
      { q: "La mejor hora del día para regar suele ser:", options: ["Al mediodía, a pleno sol", "Temprano en la mañana o al final de la tarde", "Solo a medianoche", "Cualquier hora; no hay diferencia"], answer: 1, why: "En las horas frescas del día se pierde menos agua por el sol." },
      { q: "Anoche llovió bien. Tu horario dice que hoy toca regar. ¿Qué haces?", options: ["Riegas el doble", "Riegas de todos modos como estaba planeado", "Revisas el suelo; no riegas si está húmedo a la altura de las raíces", "Drenas el terreno"], answer: 2, why: "El suelo tiene la última palabra; no riegues después de una buena lluvia." },
      { q: "En una arcilla pesada que se encharca fácil, una buena práctica es:", options: ["Inundar el terreno", "Agregar más agua", "Sembrar en un hueco", "Camas elevadas o camellones y zanjas de drenaje"], answer: 3, why: "Las camas elevadas y el drenaje dejan salir el agua de más." },
      { q: "Según la FAO, una causa común de acumulación de sal en suelos regados es:", options: ["Cubrir el suelo con rastrojo", "Sembrar leguminosas", "Regar de más y drenar mal", "Usar un filtro"], answer: 2, why: "Entra más sal de la que sale cuando hay demasiada agua y mal drenaje." },
      { q: "Para calcular el tamaño de una bomba, el proveedor necesita saber:", options: ["Tu color favorito", "El agua que necesitas al día, la altura y la distancia", "Solo tu presupuesto", "El PIN de tu banco"], answer: 1, why: "El agua que necesitas, la altura y la distancia deciden la bomba correcta." },
      { q: "Comparada con una bomba de gasolina, una bomba solar normalmente:", options: ["Cuesta más al comprarla pero muy poco al usarla", "Cuesta menos al comprarla y más al usarla", "Necesita diésel", "Solo funciona de noche"], answer: 0, why: "Las bombas solares tienen un precio de compra más alto, pero usan la luz del sol, que es gratis." },
      { q: "Un proveedor te ofrece una bomba solar con pago por uso. ¿Qué debes hacer primero?", options: ["Firmar de inmediato", "Darle tu PIN", "Leer por escrito el precio completo, las condiciones, la garantía y el servicio", "Comprar dos"], answer: 2, why: "Conoce el costo total y el apoyo que recibes antes de firmar." }
    ]
  }
};

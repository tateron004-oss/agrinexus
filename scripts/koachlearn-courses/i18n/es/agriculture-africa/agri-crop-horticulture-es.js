"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-crop-horticulture.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_IPM = { name: "FAO: Manejo integrado de plagas", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO: aplicación móvil para apoyar la lucha contra el gusano cogollero en África (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe: La tecnología push-pull frena al gusano cogollero", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Junta de Productos para el Control de Plagas (PCPB, Kenia)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Agencia Nacional de Administración y Control de Alimentos y Medicamentos (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Organización de Investigación Agrícola y Ganadera de Kenia (KALRO)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO: Libro de consulta sobre agricultura climáticamente inteligente (manejo del suelo y el agua)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture-es",
  lang: "es",
  translationOf: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Producción sostenible de cultivos y hortalizas",
  skills: "Revisar y mejorar la salud del suelo, Sembrar con buena semilla, distancia y fecha, Alimentar los cultivos con estiércol, composta y fertilizante, Monitorear y hacer manejo integrado de plagas, Usar plaguicidas de forma segura y legal, Regar las hortalizas y manejar la cosecha",
  outcome: "planear y llevar una temporada de un cultivo de campo y una parcela de hortalizas: preparar y alimentar el suelo, sembrar bien, monitorear y controlar las plagas con manejo integrado de plagas, regar con eficiencia, y cosechar y manejar la producción para que conserve su valor.",
  about: [
    "Este curso es para pequeños agricultores, jóvenes que empiezan en la horticultura, grupos de mujeres y de jóvenes, y extensionistas en Kenia, Nigeria y en toda África. Los ejemplos son maíz, frijol, yuca y sorgo en el campo, y tomate, col rizada (sukuma wiki) y cebolla en la parcela de hortalizas.",
    "El capítulo 1 trata de producir un cultivo fuerte: entender y analizar tu suelo, sembrar con buena semilla a la distancia y en la fecha correctas, y alimentar el cultivo con una mezcla de estiércol, composta y fertilizante. El capítulo 2 trata de proteger y terminar el cultivo: el monitoreo y el manejo integrado de plagas, el uso seguro y legal de plaguicidas, el riego eficiente de las hortalizas, y la cosecha y el manejo después de la cosecha.",
    "Los cultivos, los suelos y las plagas cambian según la zona. Usa este curso con tu extensionista, tu instituto de investigación (como KALRO en Kenia, o el programa de desarrollo agrícola de tu estado en Nigeria) y tu agroveterinaria. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de producción de la temporada para un cultivo de campo (por ejemplo, medio acre de maíz y frijol) y una parcela de hortalizas (por ejemplo, un octavo de acre de tomate o col rizada): las revisiones del suelo y cualquier análisis de suelo, cómo vas a preparar y alimentar el suelo, la semilla y la distancia de siembra, las fechas de siembra, una rutina semanal de monitoreo con las principales plagas y enfermedades que hay que vigilar y tus pasos de manejo integrado, un plan de riego para las hortalizas, y cómo vas a cosechar, seleccionar, guardar y vender.",
  chapters: [
    {
      name: "Capítulo 1: Producir un cultivo fuerte",
      lessons: [
        {
          title: "Conoce tu suelo",
          minutes: 5,
          goal: "Revisar en el campo la salud de tu suelo y saber cuándo y cómo hacer un análisis de suelo.",
          text: [
            "Un suelo sano es oscuro, se desmorona, huele a tierra, tiene lombrices y raíces que llegan hondo, y absorbe la lluvia en lugar de dejar que se escurra. Un suelo pobre es duro, pálido, se encostra después de la lluvia o se queda encharcado. Haz una revisión sencilla en el campo: cava un hoyo de la profundidad de una pala, mira el color y las capas, aprieta un puñado, cuenta las lombrices y observa dónde se escurre o se encharca el agua después de la lluvia.",
            "Un análisis de suelo te dice lo que tus ojos no pueden ver: la acidez (pH) y los nutrientes principales. Muchos suelos de las zonas muy lluviosas de Kenia y Nigeria son ácidos, lo que bloquea los nutrientes; puede que te recomienden encalar. Pregunta a tu extensionista, a tu instituto de investigación o a tu agroveterinaria dónde hacer un análisis de suelo y cómo tomar una buena muestra: muchas muestras pequeñas de toda la parcela, mezcladas, no de montones de estiércol ni de lugares quemados.",
            "Mejora la salud del suelo cada temporada: agrega materia orgánica (estiércol, composta, rastrojos), mantén el suelo cubierto, rota los cultivos y evita quemar y arar sin necesidad."
          ],
          steps: ["Cava un hoyo de una pala de profundidad y mira el color, las capas y las raíces.", "Aprieta un puñado; cuenta las lombrices.", "Observa dónde se escurre o se encharca el agua.", "Pregunta a la extensión o a una agroveterinaria dónde hacer un análisis de suelo.", "Toma muchas muestras pequeñas de toda la parcela y mézclalas."],
          words: [["Salud del suelo", "la capacidad del suelo de producir plantas fuertes, guardar agua y sostener la vida."], ["pH", "una medida de qué tan ácido o alcalino es el suelo; muchos cultivos prefieren un suelo de ligeramente ácido a neutro."], ["Materia orgánica", "restos descompuestos de plantas y animales en el suelo, como el estiércol y la composta."], ["Encalado", "agregar cal para bajar la acidez del suelo."]],
          slides: [
            { title: "Suelo sano", bullets: ["Oscuro, se desmorona, huele a tierra", "Lombrices, raíces hondas", "Absorbe la lluvia"] },
            { title: "Revisión en el campo", bullets: ["Hoyo de una pala: color, capas, raíces", "Aprieta, cuenta lombrices", "Dónde se escurre o encharca el agua"] },
            { title: "Análisis de suelo", bullets: ["Muestra el pH y los nutrientes", "Los suelos ácidos pueden necesitar cal", "Muchas muestras pequeñas, mezcladas"] },
            { title: "Mejóralo cada temporada", bullets: ["Estiércol, composta, rastrojos", "Mantenlo cubierto, rota cultivos", "No quemes"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Haz la revisión en el campo en una parcela: cava, mira, aprieta, cuenta lombrices y escribe lo que encontraste. Luego averigua dónde puedes hacer un análisis de suelo cerca de ti y cuánto cuesta.",
          youCanNow: "revisar en el campo la salud de tu suelo y saber cómo tomar una muestra para un análisis de suelo."
        },
        {
          title: "Sembrar bien: semilla, distancia y fecha",
          minutes: 5,
          goal: "Sembrar un cultivo de campo y producir plántulas de hortalizas con buena semilla, distancia y fecha.",
          text: [
            "La buena semilla es la forma más barata de subir el rendimiento. Compra semilla certificada de una variedad adecuada para tu zona con un distribuidor registrado, y revisa la fecha y el sello del paquete. Para la yuca, usa estacas limpias de plantas sanas, porque las enfermedades por virus se pasan por las estacas infectadas.",
            "La distancia de siembra decide cuántas plantas comparten la luz, el agua y los nutrientes. Usa la distancia recomendada para tu variedad y tu zona, por ejemplo entre surcos y entre plantas para el maíz, y más separación en zonas más secas. Tanto los huecos como el amontonamiento quitan rendimiento. Siembra a tiempo una vez que las lluvias de verdad hayan empezado y el suelo esté húmedo en lo hondo.",
            "Las hortalizas como el tomate, la col rizada y la cebolla casi siempre se producen primero en un semillero: una cama elevada y con buen drenaje o charolas de germinación, con tierra limpia, sombra al principio, riego cuidadoso y protección contra plagas. Endurece las plántulas dándoles poco a poco más sol y menos agua antes de trasplantarlas, de preferencia en la tarde fresca."
          ],
          steps: ["Compra semilla certificada (o estacas limpias) de una variedad adecuada.", "Usa la distancia recomendada para tu variedad y tu zona.", "Siembra cuando las lluvias de verdad hayan empezado y el suelo esté húmedo.", "Produce las plántulas de hortalizas en un semillero limpio y con buen drenaje.", "Endurece las plántulas y luego trasplántalas en la tarde fresca."],
          words: [["Semilla certificada", "semilla revisada por la autoridad oficial de semillas en calidad y variedad."], ["Distancia de siembra", "la distancia entre surcos y entre plantas."], ["Semillero", "un área pequeña y protegida donde se producen las plántulas antes de trasplantarlas."], ["Endurecimiento", "acostumbrar poco a poco a las plántulas a las condiciones del campo antes de trasplantarlas."]],
          slides: [
            { title: "Buena semilla", bullets: ["Certificada, adecuada para tu zona", "Distribuidor registrado; revisa fecha y sello", "Yuca: estacas limpias de plantas sanas"] },
            { title: "Distancia y fecha", bullets: ["Distancia recomendada para tu variedad", "Huecos y amontonamiento quitan rendimiento", "Siembra cuando de verdad empiecen las lluvias"] },
            { title: "Semillero de hortalizas", bullets: ["Elevado, con buen drenaje, tierra limpia", "Sombra al principio, riego cuidadoso", "Endurece y trasplanta en la tarde"] }
          ],
          sources: [KALRO],
          tryIt: "Para tu cultivo de campo principal y una hortaliza, escribe: la variedad, dónde vas a comprar semilla certificada, la distancia de siembra recomendada (pregunta en una agroveterinaria o a un extensionista) y la fecha en que planeas sembrar o trasplantar.",
          youCanNow: "sembrar un cultivo de campo y producir plántulas de hortalizas con buena semilla, distancia y fecha."
        },
        {
          title: "Alimentar el cultivo: estiércol, composta y fertilizante",
          minutes: 6,
          goal: "Planear cómo alimentar un cultivo con nutrientes orgánicos y minerales, bien colocados y a tiempo.",
          text: [
            "Los cultivos necesitan nitrógeno (N), fósforo (P) y potasio (K), además de cantidades más pequeñas de otros nutrientes. El estiércol y la composta agregan algunos nutrientes y, igual de importante, materia orgánica que guarda agua y alimenta la vida del suelo. Las leguminosas como el frijol, el caupí y el cacahuate agregan nitrógeno al suelo por medio de sus raíces.",
            "Los fertilizantes minerales dan nutrientes rápido y en cantidades conocidas. Una forma común para el maíz es un fertilizante de siembra con fósforo y luego una aplicación de nitrógeno cuando el cultivo llega a la rodilla, pero los productos y las dosis correctas dependen de tu análisis de suelo y de las recomendaciones locales. Poner cantidades pequeñas cerca de la planta (en el hoyo de siembra) aprovecha mejor el fertilizante que regarlo por todos lados.",
            "Combina los dos: la materia orgánica más un fertilizante bien colocado casi siempre da rendimientos mejores y más estables que cualquiera de los dos solo. Haz composta con rastrojos, estiércol y restos de cocina, volteada y mantenida húmeda. Nunca pongas estiércol fresco y caliente ni fertilizante directo sobre la semilla."
          ],
          steps: ["Agrega estiércol o composta antes de sembrar o al sembrar.", "Incluye leguminosas en la rotación o asociadas.", "Usa los productos y las dosis de fertilizante de tu análisis de suelo y de las recomendaciones locales.", "Pon el fertilizante cerca de la planta, sin tocar la semilla.", "Aplica el nitrógeno en la etapa correcta, con el suelo húmedo."],
          words: [["N, P, K", "nitrógeno, fósforo y potasio: los nutrientes principales de las plantas."], ["Fertilización de cobertura", "agregar fertilizante, casi siempre nitrógeno, a un cultivo que ya está creciendo."], ["Composta", "restos de plantas y animales descompuestos que se usan para alimentar el suelo."]],
          slides: [
            { title: "Lo que necesitan los cultivos", bullets: ["Nitrógeno, fósforo, potasio", "Más otros nutrientes en menor cantidad", "Las leguminosas agregan nitrógeno"] },
            { title: "Materia orgánica", bullets: ["Estiércol y composta", "Guardan agua, alimentan la vida del suelo"] },
            { title: "Fertilizante bien usado", bullets: ["Productos y dosis del análisis y la asesoría local", "Cerca de la planta, no sobre la semilla", "Nitrógeno en la etapa correcta"] },
            { title: "Combina los dos", bullets: ["Orgánico + mineral = rendimientos más estables", "Haz composta con rastrojos y estiércol"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Escribe un plan para alimentar tu cultivo de campo: qué materia orgánica vas a agregar y cuándo, cualquier leguminosa, y los productos y fechas del fertilizante (marcados como \"dosis según análisis o extensión\" si todavía no la sabes). Empieza un montón de composta si no tienes uno.",
          youCanNow: "planear cómo alimentar un cultivo con estiércol, composta y fertilizante bien colocado."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Producir un cultivo fuerte",
        questions: [
          { q: "¿Cuál es una señal de un suelo sano?", options: ["Duro y pálido, se encostra después de la lluvia", "Oscuro, se desmorona, con lombrices", "El agua siempre se escurre", "Huele a químicos"], answer: 1, why: "El suelo sano se desmorona, es oscuro y está lleno de vida." },
          { q: "¿Cómo debes tomar una muestra de suelo?", options: ["Una cucharada de un montón de estiércol", "De un lugar quemado", "Muchas muestras pequeñas de toda la parcela, mezcladas", "Del camino"], answer: 2, why: "Una muestra mezclada representa toda la parcela." },
          { q: "¿Por qué usar estacas limpias de yuca?", options: ["Las enfermedades por virus se pasan por estacas infectadas", "Son más baratas", "Crecen más rápido en cualquier suelo", "Los compradores las piden"], answer: 0, why: "El material de siembra limpio evita que se propaguen las enfermedades." },
          { q: "¿Qué es el endurecimiento de las plántulas?", options: ["Regar más", "Agregar fertilizante", "Sembrar en suelo duro", "Darles poco a poco más sol y menos agua antes de trasplantar"], answer: 3, why: "Prepara a las plántulas para las condiciones del campo." },
          { q: "¿De dónde salen las dosis correctas de fertilizante?", options: ["De lo que adivine un vecino", "De tu análisis de suelo y las recomendaciones locales", "Del color del costal", "De usar lo más posible"], answer: 1, why: "El suelo y la zona deciden lo que necesita el cultivo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger y terminar el cultivo",
      lessons: [
        {
          title: "Monitoreo y manejo integrado de plagas",
          minutes: 6,
          goal: "Monitorear un cultivo cada semana y elegir acciones de manejo integrado antes de usar químicos.",
          text: [
            "La FAO describe el manejo integrado de plagas (MIP) como tomar en cuenta todos los métodos de control disponibles y combinar los adecuados, usando plaguicidas solo cuando se justifica. Empieza con la prevención: suelo sano, variedades resistentes, semilla limpia, rotación, siembra a tiempo, higiene del terreno (sacar las plantas y los restos infectados) y favorecer a los enemigos naturales como las catarinas y las avispas parasitoides.",
            "Monitorea cada semana. Recorre el terreno en forma de W o en zigzag, revisa un número fijo de plantas (por ejemplo 10 plantas en 5 puntos) y anota lo que ves: daño del gusano cogollero en el cogollo del maíz, pulgones, mosca blanca, manchas en las hojas, plantas marchitas, minador de la hoja del tomate. Compáralo con el nivel que la extensión dice que justifica actuar.",
            "Usa primero los controles sin químicos donde funcionen: recoger a mano, push-pull para el maíz y el sorgo, trampas, productos a base de neem o biológicos aprobados para ese uso, y sacar las plantas infectadas. Donde se usa, los avistamientos del gusano cogollero se pueden registrar en la aplicación FAMEWS de la FAO. Pide un diagnóstico a un extensionista o a una clínica de plantas cuando tengas dudas."
          ],
          steps: ["Prevén: variedades resistentes, semilla limpia, rotación, higiene del terreno.", "Monitorea cada semana en forma de W; revisa un número fijo de plantas.", "Anota plagas, enfermedades y daños.", "Compara con los niveles de acción de la extensión.", "Usa primero controles sin químicos; pide un diagnóstico cuando dudes."],
          words: [["MIP", "manejo integrado de plagas: combinar prevención, monitoreo y muchos métodos de control, con plaguicidas solo cuando se justifica."], ["Monitoreo", "recorrer el terreno con regularidad para revisar si hay plagas y enfermedades."], ["Enemigos naturales", "insectos y otros animales que se comen o atacan a las plagas."], ["Nivel de acción", "la cantidad de plaga o de daño a partir de la cual el control vale lo que cuesta."]],
          slides: [
            { title: "MIP (FAO)", bullets: ["Considera todos los métodos, combina los adecuados", "Plaguicidas solo cuando se justifica"] },
            { title: "Primero prevenir", bullets: ["Variedades resistentes, semilla limpia, rotación", "Higiene del terreno", "Favorece a los enemigos naturales"] },
            { title: "Monitorea cada semana", bullets: ["Forma de W, número fijo de plantas", "Anota lo que ves", "Compara con los niveles de acción"] },
            { title: "Controla con cabeza", bullets: ["Recoger a mano, push-pull, trampas", "Productos biológicos aprobados", "Diagnóstico cuando dudes"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Haz una hoja de monitoreo semanal (fecha, punto, plantas revisadas, plagas, enfermedades, daño, acción) y monitorea esta semana un terreno o una cama de hortalizas.",
          youCanNow: "monitorear un cultivo cada semana y elegir acciones de manejo integrado empezando por la prevención y los controles sin químicos."
        },
        {
          title: "Uso seguro y legal de plaguicidas y riego de hortalizas",
          minutes: 6,
          goal: "Usar un plaguicida con seguridad cuando se justifica y planear un riego eficiente para una parcela de hortalizas.",
          text: [
            "Si hace falta un plaguicida, usa solo productos registrados para ese cultivo y esa plaga en tu país (en Kenia, por la Junta de Productos para el Control de Plagas, PCPB; en Nigeria, por la NAFDAC), comprados con un distribuidor con licencia, nunca reenvasados en botellas sin etiqueta. Lee la etiqueta y síguela al pie de la letra: dosis, mezcla, ropa de protección, tiempo de reingreso y el intervalo de seguridad antes de la cosecha, es decir, los días que hay que esperar entre la aplicación y la cosecha. Mantén lejos a los niños y a los animales, nunca comas ni fumes mientras aplicas, y deshazte de los envases de forma segura, nunca como recipientes de agua o comida.",
            "Las hortalizas necesitan mucha agua y son delicadas. El riego por goteo pone el agua en las raíces, ahorra agua y mantiene secas las hojas, lo que reduce las enfermedades del tomate. Los kits de goteo baratos y las regaderas sirven para parcelas pequeñas. Riega temprano en la mañana o en la tarde, y riega a fondo y menos seguido en lugar de un poquito cada día.",
            "Pon cobertura alrededor de las hortalizas para conservar la humedad y que la tierra no salpique las hojas. Revisa la humedad del suelo con el dedo unos centímetros abajo antes de regar. Donde el agua escasea, junta agua de lluvia de los techos y usa estanques."
          ],
          steps: ["Usa solo productos registrados para ese cultivo y esa plaga, de distribuidores con licencia.", "Lee y sigue la etiqueta: dosis, ropa de protección, reingreso, intervalo antes de la cosecha.", "Deshazte de los envases de forma segura.", "Riega las hortalizas en las raíces (goteo o regadera), en la mañana o en la tarde.", "Pon cobertura y revisa la humedad del suelo antes de regar."],
          words: [["Intervalo de seguridad antes de la cosecha", "los días que hay que esperar después de aplicar antes de cosechar."], ["Plaguicida registrado", "un producto aprobado por el regulador nacional para un uso indicado."], ["Riego por goteo", "regar con mangueras con hoyitos que gotean agua en las raíces."]],
          slides: [
            { title: "Solo productos registrados", bullets: ["Kenia: PCPB. Nigeria: NAFDAC", "Distribuidor con licencia, envase original con etiqueta", "Para ese cultivo y esa plaga"] },
            { title: "Sigue la etiqueta", bullets: ["Dosis y mezcla, ropa de protección", "Tiempo de reingreso", "Intervalo de seguridad antes de cosechar"] },
            { title: "Seguridad", bullets: ["Sin niños ni animales cerca", "No comer ni fumar mientras aplicas", "Nunca reusar envases para comida o agua"] },
            { title: "Riega bien las hortalizas", bullets: ["Goteo o regadera en las raíces", "Mañana o tarde, a fondo y menos seguido", "Cobertura; revisa la humedad primero"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Toma la etiqueta de cualquier plaguicida (de una tienda, de internet o de tu bodega). Anota: los cultivos y plagas para los que está registrado, la dosis, la ropa de protección y el intervalo de seguridad antes de la cosecha. Luego escribe un plan de riego para tu parcela de hortalizas.",
          youCanNow: "usar un plaguicida de forma segura y legal cuando se justifica, y regar las hortalizas con eficiencia."
        },
        {
          title: "Cosecha y manejo después de la cosecha",
          minutes: 5,
          goal: "Cosechar en el momento correcto y manejar, seleccionar y guardar la producción para que conserve su valor.",
          text: [
            "Mucha comida se pierde después de la cosecha. Cosecha en la madurez correcta: el tomate en la etapa que quiere tu comprador (muchas veces cuando empieza a cambiar de color para mercados lejanos), las hojas de col rizada jóvenes y tiernas, el maíz cuando el grano está maduro y lo bastante seco, y la yuca cuando las raíces están listas y solo la cantidad que puedas vender o procesar rápido, porque las raíces se echan a perder en pocos días.",
            "Maneja con cuidado: usa cajas limpias, no costales, para el tomate y la producción blanda; mantén la producción a la sombra; y cosecha en la mañana fresca. Selecciona y clasifica por tamaño y calidad, y saca lo dañado para que no eche a perder lo demás. Respeta el intervalo de seguridad antes de la cosecha después de cualquier aplicación.",
            "Seca bien el grano antes de guardarlo: el maíz y el cacahuate húmedos pueden criar mohos que producen aflatoxina, un veneno. Pregunta a tu comprador o a tu extensionista cuál es la humedad meta y mídela si puedes. Guarda el grano en bodegas limpias, secas y elevadas o en costales herméticos (que no dejan pasar el aire) para controlar el gorgojo sin químicos."
          ],
          steps: ["Cosecha en la madurez correcta para tu comprador.", "Cosecha en la mañana fresca; mantén la producción a la sombra.", "Usa cajas limpias para la producción blanda.", "Selecciona y clasifica; saca lo dañado.", "Seca bien el grano; guárdalo en bodegas limpias, secas y elevadas o en costales herméticos."],
          words: [["Pérdida poscosecha", "comida que se pierde o se echa a perder entre la cosecha y la venta o el uso."], ["Clasificación", "separar la producción por tamaño y calidad."], ["Aflatoxina", "un veneno que producen los mohos en granos y cacahuates húmedos."], ["Costal hermético", "un costal que no deja pasar el aire y detiene a los insectos porque les quita el aire."]],
          slides: [
            { title: "Cosecha a tiempo", bullets: ["Tomate en la etapa que quiere tu comprador", "Col rizada joven y tierna", "Yuca: solo lo que puedas vender rápido"] },
            { title: "Maneja con cuidado", bullets: ["Mañana fresca, sombra", "Cajas limpias, no costales", "Selecciona, clasifica, saca lo dañado"] },
            { title: "Guarda el grano con seguridad", bullets: ["Sécalo bien: el grano húmedo arriesga aflatoxina", "Bodegas limpias, secas y elevadas", "Costales herméticos contra el gorgojo"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Tarea final: escribe tu plan de producción de la temporada para un cultivo de campo y una parcela de hortalizas: revisiones y análisis del suelo, preparación y alimentación del suelo, semilla y distancia, fechas de siembra, monitoreo semanal y pasos de manejo integrado, riego de las hortalizas, y cosecha, selección, almacenamiento y venta.",
          youCanNow: "cosechar, manejar, seleccionar y guardar la producción para reducir pérdidas y conservar su valor."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Proteger y terminar el cultivo",
        questions: [
          { q: "En el MIP, los plaguicidas se usan:", options: ["Cada semana pase lo que pase", "Nunca, en ninguna situación", "Solo cuando se justifica, después de considerar otros métodos", "Solo en hortalizas"], answer: 2, why: "El MIP de la FAO limita el uso de plaguicidas a lo que se justifica." },
          { q: "¿Cómo debes monitorear un terreno?", options: ["Mirar solo la orilla", "Recorrerlo en forma de W y revisar un número fijo de plantas", "Mirar desde la casa", "Solo después de la cosecha"], answer: 1, why: "La forma de W toma una muestra justa de todo el terreno." },
          { q: "El intervalo de seguridad antes de la cosecha es:", options: ["Los días que hay que esperar entre la aplicación y la cosecha", "El momento de sembrar", "El precio del plaguicida", "El tamaño de la bomba"], answer: 0, why: "Mantiene los residuos en la comida en niveles seguros." },
          { q: "¿Por qué usar riego por goteo en el tomate?", options: ["Moja las hojas", "Usa más agua", "Lo exige la ley", "Pone el agua en las raíces y mantiene secas las hojas, lo que reduce las enfermedades"], answer: 3, why: "Hojas secas quieren decir menos enfermedad y menos agua desperdiciada." },
          { q: "¿Por qué secar bien el maíz antes de guardarlo?", options: ["Para que pese más", "El grano húmedo puede criar mohos que producen aflatoxina", "Los compradores prefieren el grano húmedo", "Para cambiarle el color"], answer: 1, why: "La aflatoxina es un veneno peligroso de los mohos en grano húmedo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Producción sostenible de cultivos y hortalizas",
    questions: [
      { q: "Un análisis de suelo te dice:", options: ["El clima", "El pH y los niveles de nutrientes", "Los precios de los cultivos", "Los nombres de las plagas"], answer: 1, why: "Los análisis de suelo miden la acidez y los nutrientes." },
      { q: "Los suelos ácidos pueden necesitar:", options: ["Más quemas", "Sal", "Cal, si lo recomienda un análisis de suelo", "Nada nunca"], answer: 2, why: "El encalado baja la acidez y libera los nutrientes." },
      { q: "¿Qué mejora la salud del suelo?", options: ["Agregar estiércol y composta y mantener el suelo cubierto", "Quemar los rastrojos", "Arar muchas veces", "Dejar el suelo desnudo"], answer: 0, why: "La materia orgánica y la cobertura alimentan y protegen el suelo." },
      { q: "La semilla certificada es:", options: ["Cualquier grano del mercado", "Semilla sin paquete", "Semilla guardada diez años", "Semilla revisada por la autoridad oficial de semillas"], answer: 3, why: "La certificación revisa la variedad y la calidad." },
      { q: "Las plantas amontonadas casi siempre:", options: ["Rinden más", "Compiten por luz, agua y nutrientes y pierden rendimiento", "No necesitan fertilizante", "Resisten todas las plagas"], answer: 1, why: "La distancia correcta equilibra el número de plantas y los recursos." },
      { q: "¿Cuándo se deben trasplantar las plántulas?", options: ["A mediodía a pleno sol", "Durante una tormenta", "Después de endurecerlas, de preferencia en la tarde fresca", "Antes de que tengan hojas"], answer: 2, why: "Las condiciones frescas reducen el estrés del trasplante." },
      { q: "¿Qué cultivos agregan nitrógeno al suelo?", options: ["El frijol, el caupí y el cacahuate", "Solo el maíz", "El tomate", "La cebolla"], answer: 0, why: "Las leguminosas fijan nitrógeno por medio de sus raíces." },
      { q: "La fertilización de cobertura del maíz casi siempre quiere decir agregar:", options: ["Cal al sembrar", "Semilla", "Solo agua", "Nitrógeno al cultivo que está creciendo"], answer: 3, why: "El nitrógeno de cobertura apoya el crecimiento en la etapa correcta." },
      { q: "El fertilizante se debe poner:", options: ["Directo sobre la semilla", "Cerca de la planta, sin tocar la semilla", "En el camino", "Solo en las hojas"], answer: 1, why: "Ponerlo cerca de las raíces lo aprovecha sin quemar la semilla." },
      { q: "Los enemigos naturales son:", options: ["Malezas", "Plaguicidas", "Insectos que se comen o atacan a las plagas", "Ladrones"], answer: 2, why: "Las catarinas y las avispas parasitoides ayudan a controlar plagas." },
      { q: "Un nivel de acción es:", options: ["La cantidad de plaga a partir de la cual el control vale lo que cuesta", "Un tipo de bomba de aspersión", "El momento de la cosecha", "Un resultado del análisis de suelo"], answer: 0, why: "Ayuda a evitar aplicaciones innecesarias." },
      { q: "El push-pull se usa sobre todo en:", options: ["El tomate", "La col rizada", "La cebolla", "El maíz y el sorgo"], answer: 3, why: "El icipe lo creó para plagas de cereales como el barrenador del tallo y el gusano cogollero." },
      { q: "En Kenia, los plaguicidas los registra:", options: ["La KCAA", "La Junta de Productos para el Control de Plagas (PCPB)", "El KMD", "La ODPC"], answer: 1, why: "La PCPB regula los productos para el control de plagas en Kenia." },
      { q: "Un plaguicida vendido en una botella reenvasada y sin etiqueta:", options: ["Es una ganga", "Está bien si es barato", "No se debe comprar ni usar", "Es más seguro"], answer: 2, why: "Sin etiqueta no puedes saber qué producto es ni usarlo con seguridad." },
      { q: "Los envases vacíos de plaguicida se deben:", options: ["Desechar de forma segura, nunca reusar para comida o agua", "Usar para guardar agua de beber", "Dar a los niños", "Tirar al río"], answer: 0, why: "Los residuos pueden envenenar a las personas y el agua." },
      { q: "El mejor momento para regar las hortalizas es:", options: ["A mediodía", "Solo en la noche cuando llueve", "Nunca", "Temprano en la mañana o en la tarde"], answer: 3, why: "Se pierde menos agua por el calor y la evaporación." },
      { q: "La cobertura alrededor de las hortalizas:", options: ["Seca el suelo", "Conserva la humedad y evita que la tierra salpique las hojas", "Atrae a todas las plagas", "Reemplaza por completo el agua"], answer: 1, why: "La cobertura ahorra agua y reduce las enfermedades por salpicadura." },
      { q: "La producción blanda como el tomate se debe llevar en:", options: ["Costales apretados", "Solo en las manos", "Cajas limpias", "Bolsas de plástico al sol"], answer: 2, why: "Las cajas protegen la producción blanda de aplastarse." },
      { q: "¿Por qué cosechar solo la yuca que puedas vender o procesar rápido?", options: ["Las raíces se echan a perder en pocos días después de la cosecha", "A los compradores no les gusta la yuca", "La yuca vuelve a crecer en una noche", "Es la ley"], answer: 0, why: "Las raíces frescas de yuca se deterioran rápido." },
      { q: "Los costales herméticos controlan el gorgojo:", options: ["Agregando veneno", "Haciendo ruido", "Dejando pasar la luz", "Quitándole el aire"], answer: 3, why: "Los costales que no dejan pasar el aire dejan a los insectos sin oxígeno." }
    ]
  }
};

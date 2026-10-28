"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-climate-smart.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_CSA = { name: "FAO: Libro de consulta sobre agricultura climáticamente inteligente", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Departamento Meteorológico de Kenia (pronósticos estacionales, boletines agrometeorológicos)", url: "https://meteo.go.ke" };
const NIMET = { name: "Agencia Meteorológica de Nigeria (NiMet)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR: Maíz climáticamente inteligente (tolerante a la sequía)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe: La tecnología push-pull frena al gusano cogollero", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO GIEWS Observación de la Tierra (indicadores de sequía y vegetación)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart-es",
  lang: "es",
  translationOf: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Agricultura climáticamente inteligente",
  skills: "Explicar la agricultura climáticamente inteligente, Leer los pronósticos estacionales oficiales, Hacer el mapa de los riesgos climáticos de tu finca, Elegir prácticas para el suelo y el agua, Elegir cultivos y variedades resistentes, Usar árboles, ganado y seguros para repartir el riesgo",
  outcome: "escribir y poner en marcha un plan climáticamente inteligente para tu propia finca: los riesgos climáticos que enfrenta durante el año, lo que dice el pronóstico estacional oficial y las prácticas de suelo, agua, cultivos, árboles, ganado y seguros que vas a usar esta temporada.",
  about: [
    "Este curso es para pequeños agricultores, agricultores jóvenes, extensionistas y líderes de grupos de productores en Kenia, Nigeria y en toda África que están viendo periodos secos más largos, lluvias más fuertes, más calor y plagas nuevas, y quieren formas prácticas de mantener estables sus cosechas y sus ingresos.",
    "El capítulo 1 te ayuda a entender el riesgo climático en tu propia finca: qué significa la agricultura climáticamente inteligente, cómo leer el pronóstico estacional oficial de tu servicio meteorológico nacional y cómo dibujar un calendario sencillo de riesgos climáticos. El capítulo 2 trata de las prácticas: conservar el suelo y el agua en la finca, elegir cultivos y variedades que aguanten, y usar árboles, ganado y seguros para repartir el riesgo.",
    "Cada finca es distinta. Usa este curso junto con los consejos de tu extensionista, tu agroveterinaria o tu instituto de investigación, y prueba las prácticas nuevas primero en una parcela pequeña. Cada lección dura unos cinco minutos y termina con una tarea en tu propia finca. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan climáticamente inteligente de una página para tu finca (o para una finca de ejemplo, como 2 acres de maíz y frijol en Machakos, o 3 acres de sorgo y caupí en Kano): un calendario de riesgos climáticos mes por mes, lo que dice el pronóstico oficial de esta temporada y la fecha en que lo leíste, y al menos cinco prácticas que vas a usar (al menos una de suelo y agua, una de cultivos y variedades, y una para repartir el riesgo), con cuándo vas a empezar cada una y cómo vas a saber si funcionó.",
  chapters: [
    {
      name: "Capítulo 1: Entender el riesgo climático en tu finca",
      lessons: [
        {
          title: "Qué significa la agricultura climáticamente inteligente",
          minutes: 5,
          goal: "Explicar los tres objetivos de la agricultura climáticamente inteligente y juzgar si una práctica lo es.",
          text: [
            "La agricultura climáticamente inteligente (ACI) es una forma de elegir prácticas agrícolas pensando en el cambio climático. La FAO (la Organización de las Naciones Unidas para la Alimentación y la Agricultura) describe tres objetivos: aumentar la productividad y los ingresos de forma sostenible; ayudar a las fincas y las familias a adaptarse y a ser más resilientes ante los golpes del clima; y reducir o eliminar las emisiones de gases de efecto invernadero cuando sea posible.",
            "La FAO insiste en que una práctica no tiene que lograr los tres. Para la mayoría de los pequeños agricultores, la comida y los ingresos van primero; bajar las emisiones es un beneficio extra. Una práctica es climáticamente inteligente si le queda a tu finca y la hace más productiva y más resiliente.",
            "Ejemplos que los agricultores de África ya usan: cubrir el suelo con rastrojo y labrar lo mínimo para conservar la humedad, hoyos de siembra y estanques de agua, variedades tolerantes a la sequía y de ciclo corto, asociar el maíz con frijol o caupí, el sistema push-pull contra el barrenador del tallo y el gusano cogollero, árboles en la finca, mejores forrajes y seguros para cultivos o ganado."
          ],
          words: [["Agricultura climáticamente inteligente (ACI)", "una agricultura que aumenta la productividad, ayuda a las fincas a adaptarse al cambio climático y reduce las emisiones cuando es posible."], ["Resiliencia", "la capacidad de una finca y una familia de aguantar un golpe, como una sequía, y recuperarse rápido."], ["Adaptación", "cambiar la forma de cultivar para aguantar un clima que cambia."]],
          slides: [
            { title: "Tres objetivos (FAO)", bullets: ["Aumentar la productividad y los ingresos", "Adaptarse y ser más resiliente", "Reducir emisiones cuando sea posible"] },
            { title: "No los tres a la vez", bullets: ["La comida y los ingresos van primero", "Bajar emisiones es un beneficio extra", "Le queda a tu finca + más resiliencia = inteligente"] },
            { title: "Ejemplos en África", bullets: ["Rastrojo, labranza mínima, hoyos de siembra, estanques", "Variedades tolerantes a la sequía, asociaciones, push-pull", "Árboles en la finca, forraje, seguros"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Haz una lista de tres prácticas que ya se usan en tu finca o en tu pueblo. Para cada una, escribe a cuál de los tres objetivos de la ACI ayuda (productividad, resiliencia, emisiones).",
          youCanNow: "explicar los tres objetivos de la agricultura climáticamente inteligente y juzgar si una práctica lo es."
        },
        {
          title: "Leer el pronóstico estacional oficial",
          minutes: 5,
          goal: "Encontrar y usar el pronóstico estacional de tu servicio meteorológico nacional para planear la temporada.",
          text: [
            "Antes de cada temporada de lluvias, los servicios meteorológicos nacionales publican un pronóstico estacional: si se espera que las lluvias estén por encima, cerca o por debajo de lo normal, y cuándo podrían empezar y terminar. En Kenia, el Departamento Meteorológico de Kenia (KMD) publica pronósticos estacionales y boletines agrometeorológicos. En Nigeria, la Agencia Meteorológica de Nigeria (NiMet) publica predicciones climáticas estacionales. Otros países tienen sus propios servicios; muchos pronósticos también se comparten por la radio y por medio de los extensionistas.",
            "Un pronóstico estacional da probabilidades, no promesas. \"Por debajo de lo normal\" quiere decir que hay más probabilidad de que llueva menos de lo usual en tu zona, no que seguro va a estar seco. Úsalo para ajustar, no para apostarlo todo: por ejemplo, elegir una variedad de ciclo más corto, sembrar en la fecha correcta, planear la cosecha de agua o sembrar menos área de un cultivo que necesita mucha agua.",
            "Usa los pronósticos de corto plazo (los próximos días) para las decisiones diarias, como cuándo sembrar después de que empiezan las lluvias, cuándo fumigar o abonar, y cuándo cosechar y secar."
          ],
          steps: ["Busca el sitio web, el programa de radio o el boletín de extensión de tu servicio meteorológico nacional.", "Lee el pronóstico estacional para tu condado o estado.", "Anota: por encima, cerca o por debajo de lo normal; inicio y final esperados de las lluvias.", "Escribe dos cambios que vas a hacer por eso.", "Revisa los pronósticos de corto plazo para los días de siembra, abonado y cosecha."],
          words: [["Pronóstico estacional", "una perspectiva de lluvia y temperatura para la próxima temporada, dada como probabilidades."], ["Inicio de lluvias", "el comienzo de la temporada de lluvias."], ["Boletín agrometeorológico", "un informe del tiempo escrito para agricultores, que relaciona el tiempo con los cultivos."]],
          slides: [
            { title: "Pronósticos estacionales oficiales", bullets: ["Kenia: Departamento Meteorológico de Kenia (KMD)", "Nigeria: NiMet", "También en la radio y con los extensionistas"] },
            { title: "Probabilidades, no promesas", bullets: ["Por encima, cerca o por debajo de lo normal", "Inicio y final esperados de las lluvias", "Ajusta; no lo apuestes todo"] },
            { title: "Úsalo", bullets: ["Variedad de ciclo corto si las lluvias serán pobres", "Planea la cosecha de agua", "Pronósticos de corto plazo para las tareas diarias"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Busca el pronóstico estacional más reciente para tu zona del KMD, de NiMet o del servicio meteorológico de tu país. Escribe lo que dice, la fecha en que lo leíste y dos cambios que vas a hacer a tu plan.",
          youCanNow: "encontrar el pronóstico estacional oficial y usarlo para ajustar tu plan de temporada."
        },
        {
          title: "Dibujar el calendario de riesgos climáticos de tu finca",
          minutes: 5,
          goal: "Dibujar un calendario mes por mes de los riesgos climáticos que enfrenta tu finca.",
          text: [
            "Un calendario de riesgos climáticos pone tus cultivos y animales junto a los riesgos de cada mes. Dibuja 12 columnas para los meses. En la primera fila, escribe tus temporadas (lluvias largas, lluvias cortas, temporada seca, o temporada de lluvias y seca en gran parte de Nigeria). Debajo, escribe lo que haces cada mes: preparar la tierra, sembrar, deshierbar, abonar, cosechar, secar, vender, y cuándo los animales necesitan más alimento y agua.",
            "Luego marca los riesgos: lluvias que empiezan tarde o terminan temprano, periodos secos a mitad de la temporada, tormentas fuertes e inundaciones, calor durante la floración, plagas y enfermedades que siguen al clima (gusano cogollero, pulgones, enfermedades por hongos en épocas húmedas) y pérdidas después de la cosecha cuando el grano se guarda húmedo.",
            "Busca los puntos de peligro: los meses en que una tarea importante coincide con un riesgo grande, como la floración del maíz en un mes que suele tener un periodo seco. Ahí es donde más ayudan las prácticas climáticamente inteligentes. Pregunta a los agricultores mayores cómo ha cambiado el patrón con los años."
          ],
          steps: ["Dibuja 12 columnas de meses; escribe tus temporadas.", "Escribe las tareas de tu finca y las necesidades de tus animales por mes.", "Marca los riesgos climáticos y las plagas ligadas al clima.", "Encierra en un círculo los puntos de peligro donde una tarea clave coincide con un riesgo grande.", "Pregunta a los agricultores mayores qué ha cambiado."],
          words: [["Periodo seco", "días o semanas sin lluvia útil durante la temporada de lluvias."], ["Punto de peligro", "un momento en que una tarea importante de la finca coincide con un riesgo climático alto."]],
          slides: [
            { title: "Doce columnas", bullets: ["Temporadas arriba", "Tareas de la finca y necesidades de los animales por mes"] },
            { title: "Marca los riesgos", bullets: ["Inicio tardío, final temprano, periodos secos", "Tormentas, inundaciones, calor en la floración", "Plagas ligadas al clima, grano guardado húmedo"] },
            { title: "Encuentra los puntos de peligro", bullets: ["Tarea clave coincide con riesgo grande", "Donde más ayudan las prácticas de ACI", "Pregunta a los mayores qué cambió"] }
          ],
          sources: [FAO_EO],
          tryIt: "Dibuja el calendario de riesgos climáticos de tu finca en papel o en una hoja de cálculo del teléfono. Encierra en un círculo al menos dos puntos de peligro.",
          youCanNow: "dibujar un calendario de riesgos climáticos para tu finca y encontrar sus puntos de peligro."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Entender el riesgo climático en tu finca",
        questions: [
          { q: "¿Cuál es uno de los tres objetivos de la FAO para la agricultura climáticamente inteligente?", options: ["Usar la mayor cantidad posible de químicos", "Ayudar a las fincas a adaptarse y ser más resilientes", "Sembrar un solo cultivo", "Cortar todos los árboles"], answer: 1, why: "La ACI busca productividad, adaptación y resiliencia, y menos emisiones cuando sea posible." },
          { q: "¿Una práctica climáticamente inteligente tiene que lograr los tres objetivos a la vez?", options: ["Sí, siempre", "Solo en Kenia", "No; debe quedarle a la finca y mejorar la productividad y la resiliencia", "Solo en fincas grandes"], answer: 2, why: "La FAO dice que las prácticas no tienen que lograr cada objetivo; la comida y los ingresos van primero." },
          { q: "El pronóstico estacional dice \"lluvia por debajo de lo normal\". Esto quiere decir:", options: ["Más probabilidad de que llueva menos de lo usual", "Seguro que no va a llover", "Seguro que habrá inundaciones", "Nada útil"], answer: 0, why: "Los pronósticos estacionales dan probabilidades, no certezas." },
          { q: "¿Dónde debe buscar un agricultor de Nigeria el pronóstico estacional oficial?", options: ["En un rumor del mercado", "En el calendario del año pasado", "Con un desconocido en redes sociales", "Con NiMet o sus pronósticos compartidos por la extensión y la radio"], answer: 3, why: "NiMet es el servicio meteorológico oficial de Nigeria." },
          { q: "Un punto de peligro en un calendario de riesgos climáticos es:", options: ["Cuando una tarea importante de la finca coincide con un riesgo climático alto", "Un lugar para vender la cosecha", "Un tipo de plaga", "Un mes sin trabajo en la finca"], answer: 0, why: "Los puntos de peligro muestran dónde más ayudan las prácticas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Prácticas climáticamente inteligentes",
      lessons: [
        {
          title: "Conservar el suelo y el agua en la finca",
          minutes: 6,
          goal: "Elegir prácticas de suelo y agua que le queden a tu finca y a tu pendiente.",
          text: [
            "Un suelo sano guarda más agua y alimenta a los cultivos durante los periodos secos. Tres principios de la agricultura de conservación ayudan: mover el suelo lo menos posible (labranza mínima), mantenerlo cubierto (con rastrojo o cobertura en lugar de quemar) y rotar o asociar cultivos (por ejemplo, maíz con frijol, caupí o gandul). Agrega estiércol o composta para aumentar la materia orgánica.",
            "Atrapa la lluvia donde cae. Los hoyos o cuencas de siembra (llamados zai en el Sahel) juntan agua y estiércol alrededor de cada planta. Los camellones amarrados y los bordos en curvas de nivel evitan que el agua se escurra. En las pendientes, las terrazas como el fanya juu de Kenia, las franjas de pasto y los árboles en curvas de nivel detienen la erosión. Los estanques de agua y la captación de agua de los techos guardan agua para los animales, los viveros y los huertos de la casa.",
            "Empieza en pequeño: prueba una práctica en una parte del terreno, compárala con tu forma de siempre y quédate con lo que funcione. Pide a tu extensionista diseños locales y cuánta mano de obra se necesita."
          ],
          steps: ["Deja de quemar el rastrojo; déjalo como cobertura.", "Ara menos donde puedas controlar la maleza.", "Rota o asocia con una leguminosa.", "Atrapa la lluvia: hoyos de siembra, camellones amarrados, bordos en curvas de nivel.", "En pendientes: terrazas, franjas de pasto, árboles en curvas de nivel.", "Prueba primero en un área pequeña y compara."],
          words: [["Agricultura de conservación", "cultivar moviendo lo mínimo el suelo, con cobertura permanente y rotación de cultivos."], ["Cobertura (mulch)", "una capa de rastrojo, pasto u hojas sobre el suelo para mantenerlo húmedo y fresco."], ["Hoyos zai / cuencas de siembra", "hoyos pequeños que juntan agua de lluvia y estiércol alrededor de las plantas."], ["Fanya juu", "una terraza de Kenia que se hace echando la tierra cuesta arriba desde una zanja para formar un bordo."]],
          slides: [
            { title: "El suelo sano guarda agua", bullets: ["Labranza mínima", "Suelo cubierto: rastrojo, sin quemar", "Rota o asocia con leguminosas"] },
            { title: "Atrapa la lluvia donde cae", bullets: ["Hoyos y cuencas de siembra (zai)", "Camellones amarrados y bordos en curvas de nivel", "Estanques y captación de agua de techos"] },
            { title: "Protege las pendientes", bullets: ["Terrazas como el fanya juu", "Franjas de pasto y árboles en curvas de nivel"] },
            { title: "Empieza en pequeño", bullets: ["Prueba en una parte del terreno", "Compara con tu forma de siempre", "Pide a la extensión diseños locales"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Recorre tu finca después de una lluvia o mírala ahora. Marca dónde se escurre el agua, dónde se está lavando el suelo y dónde se encharca. Elige una práctica de suelo o agua para un lugar y escribe cómo la vas a probar.",
          youCanNow: "elegir y probar prácticas de suelo y agua que conserven la humedad y el suelo en tu finca."
        },
        {
          title: "Elegir cultivos y variedades que aguanten",
          minutes: 5,
          goal: "Elegir cultivos, variedades y formas de siembra que reduzcan el riesgo climático.",
          text: [
            "Las variedades importan. El centro de investigación de maíz del CGIAR, el CIMMYT, y sus socios han mejorado variedades de maíz tolerantes a la sequía que se han liberado en muchos países de África subsahariana; el CGIAR informa que pueden rendir claramente más que las variedades comunes en sequía. El frijol y el maíz de ciclo corto escapan de la sequía de final de temporada. Pregunta a tu agroveterinaria o a tu extensionista qué variedades certificadas le quedan a tu zona, y compra semilla certificada con distribuidores registrados.",
            "Los cultivos también importan. El sorgo, el mijo, la yuca, el caupí y el gandul aguantan mejor la sequía que el maíz en muchas zonas. Sembrar más de un cultivo, y asociarlos, reparte el riesgo: si uno falla, otro puede salir bien.",
            "Las plagas cambian con el clima. El sistema push-pull, creado por el icipe (Centro Internacional de Fisiología y Ecología de Insectos) con sus socios, asocia el maíz o el sorgo con desmodium y lo rodea con pasto Napier o Brachiaria; el icipe informa que reduce mucho el daño del barrenador del tallo, la striga y el gusano cogollero. Escalona las fechas de siembra en bloques pequeños, y siembra a tiempo cuando de verdad empiezan las lluvias."
          ],
          steps: ["Pide a la extensión o a una agroveterinaria variedades certificadas tolerantes a la sequía o de ciclo corto para tu zona.", "Compra semilla certificada con un distribuidor registrado.", "Agrega un cultivo resistente a la sequía (sorgo, yuca, caupí, gandul).", "Asocia cultivos para repartir el riesgo; considera el push-pull para el maíz o el sorgo.", "Siembra a tiempo cuando de verdad empiecen las lluvias; escalona bloques pequeños."],
          words: [["Variedad tolerante a la sequía", "una variedad mejorada para rendir más que otras cuando falta agua."], ["De ciclo corto", "que se puede cosechar antes, así que puede escapar de la sequía de final de temporada."], ["Semilla certificada", "semilla revisada por la autoridad oficial de semillas en pureza y calidad."], ["Push-pull", "un sistema en el que el desmodium aleja las plagas del maíz o el sorgo y el pasto del borde las atrae hacia afuera."]],
          slides: [
            { title: "Variedades", bullets: ["Maíz tolerante a la sequía (CGIAR/CIMMYT)", "Maíz y frijol de ciclo corto", "Semilla certificada de distribuidores registrados"] },
            { title: "Cultivos", bullets: ["Sorgo, mijo, yuca, caupí, gandul", "Más de un cultivo reparte el riesgo"] },
            { title: "Plagas y fechas", bullets: ["Push-pull: desmodium + pasto en el borde (icipe)", "Siembra a tiempo con el inicio real de lluvias", "Escalona bloques pequeños"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "Para tu cultivo principal, busca una variedad certificada tolerante a la sequía o de ciclo corto que se venda cerca de ti (pregunta en una agroveterinaria o a un extensionista), y elige un cultivo resistente a la sequía para agregar. Escribe dónde vas a sembrar cada uno.",
          youCanNow: "elegir cultivos, variedades y formas de siembra que bajen el riesgo climático de tu finca."
        },
        {
          title: "Árboles, ganado y seguros: repartir el riesgo",
          minutes: 6,
          goal: "Agregar al menos una forma de repartir el riesgo más allá de tu cultivo principal y luego escribir tu plan.",
          text: [
            "Los árboles en la finca (agroforestería) dan sombra, barreras contra el viento, forraje, fruta, leña y madera, protegen el suelo y guardan carbono. Los árboles frutales como el mango y el aguacate, los árboles que fijan nitrógeno y los árboles en los linderos pueden sumar ingresos que no dependen de las lluvias de una sola temporada.",
            "El ganado puede servir de respaldo, pero también sufre en la sequía. Siembra y guarda forraje (Napier, Brachiaria, rastrojos, heno), protege las fuentes de agua, elige razas resistentes y mantén el número de animales de acuerdo con el alimento que puedes producir o comprar. Los animales pequeños como las cabras y las gallinas pueden ser más fáciles de mantener en los años secos.",
            "El seguro pasa parte del riesgo a una aseguradora. Los seguros por índice climático y por rendimiento de zona pagan cuando la lluvia o los rendimientos de la zona bajan de un nivel fijado, y en algunas zonas se venden por medio de cooperativas, distribuidores de insumos o dinero móvil. Pregunta en tu cooperativa o a tu extensionista, lee qué hace que se pague y revisa que la aseguradora tenga licencia del regulador de seguros (en Kenia, la Insurance Regulatory Authority; en Nigeria, NAICOM). Los grupos de ahorro y tener varias fuentes de ingreso también reparten el riesgo."
          ],
          steps: ["Elige árboles que le queden a tu finca: frutales, forrajeros, de lindero o que fijan nitrógeno.", "Planea el forraje y el agua de los animales para toda la temporada seca.", "Ajusta el número de animales al alimento que puedes producir o comprar.", "Pregunta por seguros por índice climático o por rendimiento de zona; lee qué activa el pago; revisa que la aseguradora tenga licencia.", "Escribe tu plan climáticamente inteligente."],
          words: [["Agroforestería", "cultivar árboles junto con cultivos o ganado en el mismo terreno."], ["Forraje", "plantas que se siembran o se guardan para alimentar a los animales."], ["Seguro por índice climático", "un seguro que paga cuando una medida del clima, como la lluvia, baja de un nivel fijado."], ["Condición de pago", "lo que tiene que pasar para que la aseguradora pague."]],
          slides: [
            { title: "Árboles en la finca", bullets: ["Sombra, barreras contra el viento, forraje, fruta, leña", "Protegen el suelo, guardan carbono", "Ingresos más allá de una temporada"] },
            { title: "El ganado como respaldo", bullets: ["Siembra y guarda forraje", "Protege el agua, razas resistentes", "Número de animales según el alimento"] },
            { title: "Seguros y ahorro", bullets: ["Seguros por índice climático y por rendimiento de zona", "Lee la condición de pago", "Revisa que la aseguradora tenga licencia"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tarea final: escribe tu plan climáticamente inteligente de una página: calendario de riesgos, pronóstico de esta temporada y la fecha en que lo leíste, y al menos cinco prácticas (suelo y agua, cultivos y variedades, repartir el riesgo), con fechas de inicio y cómo vas a juzgar si funcionaron.",
          youCanNow: "usar árboles, ganado, seguros y ahorros para repartir el riesgo climático, y escribir un plan climáticamente inteligente completo para tu finca."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Prácticas climáticamente inteligentes",
        questions: [
          { q: "¿Cuál es un principio de la agricultura de conservación?", options: ["Quemar el rastrojo después de la cosecha", "Arar profundo cada temporada", "Mantener el suelo cubierto con rastrojo o cobertura", "Sembrar el mismo cultivo para siempre"], answer: 2, why: "La cobertura del suelo conserva la humedad y protege contra la erosión." },
          { q: "Los hoyos de siembra (zai) ayudan porque:", options: ["Juntan lluvia y estiércol alrededor de cada planta", "Alejan a los pájaros", "Hacen más rápida la cosecha", "Reemplazan la semilla"], answer: 0, why: "Concentran el agua y los nutrientes donde están las raíces." },
          { q: "¿Dónde debes comprar semilla de una variedad tolerante a la sequía?", options: ["Con cualquier vendedor del camino", "En la bodega de grano de un vecino", "De grano comprado en el mercado", "Con un distribuidor registrado que venda semilla certificada"], answer: 3, why: "La semilla certificada está revisada en pureza y calidad." },
          { q: "En el push-pull, ¿qué hace el desmodium?", options: ["Atrae las plagas hacia el maíz", "Aleja las plagas del maíz o el sorgo", "Reemplaza por completo al fertilizante", "Alimenta a los pájaros"], answer: 1, why: "El desmodium empuja las plagas lejos; el pasto del borde las jala hacia afuera." },
          { q: "Antes de comprar un seguro por índice climático debes:", options: ["Leer la condición de pago y revisar que la aseguradora tenga licencia", "Pagarle al primero que te lo pida", "Dar tu PIN de dinero móvil", "Comprarlo para los vecinos"], answer: 0, why: "Debes saber cuándo paga y asegurarte de que la aseguradora es legítima." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agricultura climáticamente inteligente",
    questions: [
      { q: "La agricultura climáticamente inteligente es:", options: ["Cultivar solo con máquinas", "Elegir prácticas que aumentan la productividad, dan resiliencia y reducen emisiones cuando es posible", "Cultivar solo en las ciudades", "Un tipo de fertilizante"], answer: 1, why: "Esa es la descripción de la ACI según la FAO." },
      { q: "Para la mayoría de los pequeños agricultores, ¿qué objetivo de la ACI suele ir primero?", options: ["Reducir emisiones", "Comprar drones", "La seguridad alimentaria y los ingresos", "Exportar"], answer: 2, why: "La FAO señala que la comida y los ingresos van primero; las emisiones suelen ser un beneficio extra." },
      { q: "Resiliencia quiere decir:", options: ["La capacidad de aguantar un golpe y recuperarse", "Sembrar tarde", "Usar más agua", "Un tipo de suelo"], answer: 0, why: "Las fincas resilientes se recuperan después de una sequía o una inundación." },
      { q: "Los pronósticos estacionales oficiales de Kenia vienen de:", options: ["La KCAA", "NiMet", "Una empresa de semillas", "El Departamento Meteorológico de Kenia (KMD)"], answer: 3, why: "El KMD publica pronósticos estacionales y boletines agrometeorológicos." },
      { q: "Un pronóstico estacional se debe usar para:", options: ["Apostarlo todo a un cultivo", "Ajustar los planes, como elegir una variedad de ciclo más corto", "Ignorar las fechas de siembra", "Dejar de cultivar"], answer: 1, why: "Los pronósticos dan probabilidades; ajusta con sensatez." },
      { q: "El inicio de lluvias quiere decir:", options: ["El final de la cosecha", "Una plaga", "El comienzo de la temporada de lluvias", "Un fertilizante"], answer: 2, why: "El inicio es cuando empiezan las lluvias." },
      { q: "Un periodo seco es:", options: ["Días o semanas sin lluvia útil durante la temporada de lluvias", "Una inundación", "Una noche fría", "Un día de mercado"], answer: 0, why: "Los periodos secos a mitad de temporada pueden dañar los cultivos en etapas clave." },
      { q: "La floración del maíz en un mes que suele tener un periodo seco es:", options: ["Una oportunidad de mercado", "Una buena señal", "Un método de siembra", "Un punto de peligro"], answer: 3, why: "Una etapa clave que coincide con un riesgo alto es un punto de peligro." },
      { q: "Quemar el rastrojo:", options: ["Es un principio de la agricultura de conservación", "Deja el suelo desnudo y pierde materia orgánica", "Guarda más agua en el suelo", "Es climáticamente inteligente"], answer: 1, why: "El rastrojo dejado como cobertura protege y alimenta el suelo." },
      { q: "Labranza mínima quiere decir:", options: ["Arar dos veces", "No deshierbar", "Mover el suelo lo menos posible", "Sembrar solo árboles"], answer: 2, why: "Moverlo menos protege la estructura y la humedad del suelo." },
      { q: "¿Qué práctica detiene la erosión en una pendiente?", options: ["Terrazas como el fanya juu y franjas de pasto en curvas de nivel", "Arar en línea recta cuesta abajo", "Quitar todo el pasto", "Quemar la ladera"], answer: 0, why: "Las terrazas y las franjas en curvas de nivel frenan el agua y sostienen el suelo." },
      { q: "Un estanque de agua es:", options: ["Una olla para cocinar", "Una trampa para plagas", "Un sobre de semillas", "Un hoyo excavado que guarda agua de lluvia"], answer: 3, why: "Los estanques guardan agua para los animales y el riego pequeño." },
      { q: "El CGIAR informa que las variedades de maíz tolerantes a la sequía:", options: ["Necesitan más agua", "Pueden rendir claramente más que las variedades comunes en sequía", "No se pueden sembrar en África", "Son iguales al maíz común"], answer: 1, why: "Se mejoraron para rendir más cuando falta agua." },
      { q: "¿Qué cultivo suele aguantar la sequía mejor que el maíz?", options: ["El arroz inundado", "La caña de azúcar", "El sorgo", "El té"], answer: 2, why: "El sorgo es un cereal resistente a la sequía." },
      { q: "Asociar el maíz con frijol o caupí:", options: ["Reparte el riesgo y agrega una leguminosa", "Siempre baja los ingresos", "No está permitido", "Necesita un dron"], answer: 0, why: "Dos cultivos reparten el riesgo; las leguminosas agregan nitrógeno." },
      { q: "En el push-pull, el pasto del borde:", options: ["Aleja las plagas", "Se cosecha para exportar", "Se fumiga", "Atrae las plagas lejos del cultivo"], answer: 3, why: "Los bordes de Napier o Brachiaria jalan las plagas hacia afuera." },
      { q: "Agroforestería quiere decir:", options: ["Talar el bosque para sembrar", "Cultivar árboles junto con cultivos o ganado", "Sembrar solo flores", "Comprar madera"], answer: 1, why: "Los árboles en la finca suman ingresos, sombra y protección del suelo." },
      { q: "En la sequía, quienes crían ganado deben:", options: ["Seguir agregando animales", "Vender todo el forraje", "Planear el forraje y el agua, y ajustar el número de animales al alimento", "Dejar de dar agua a los animales"], answer: 2, why: "Planear alimento y agua mantiene vivos a los animales en la temporada seca." },
      { q: "En un seguro por índice climático, la condición de pago es:", options: ["Lo que tiene que pasar para que la aseguradora pague", "El precio de la semilla", "Un tipo de arma", "La dirección de la aseguradora"], answer: 0, why: "Define cuándo paga la póliza." },
      { q: "Antes de usar una práctica nueva en toda tu finca, debes:", options: ["Usarla en todos lados a la vez", "Ignorar los consejos de la extensión", "Esperar diez años", "Probarla en un área pequeña y comparar"], answer: 3, why: "Las pruebas pequeñas muestran si funciona en tu finca." }
    ]
  }
};

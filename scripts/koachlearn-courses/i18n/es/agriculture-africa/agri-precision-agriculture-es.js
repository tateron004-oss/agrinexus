"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-precision-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations".

const COPERNICUS = { name: "Copernicus Data Space Ecosystem y Copernicus Browser (datos Sentinel gratuitos y abiertos)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "Agencia Espacial Europea: Sentinel-2 (resolución de 10 m, nueva imagen cada 5 días)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (servicios satelitales gratuitos, como anomalías de NDVI y mapas de tierras de cultivo)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov: precisión del GPS (teléfonos inteligentes, unos 4.9 m a cielo abierto)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC: Evaluación de kits portátiles de análisis de suelo, lecciones aprendidas", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Evaluación del desempeño de sensores proximales para analizar el suelo en fincas pequeñas del condado de Embu, Kenia", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil: mapas de propiedades del suelo de toda África a 30 m (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO, Organización de Investigación Agrícola y Ganadera de Kenia)", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture-es",
  lang: "es",
  translationOf: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Agricultura de precisión: monitoreo por satélite y sensores de suelo",
  skills: "Ver las diferencias dentro de una parcela, Leer con cuidado mapas satelitales gratuitos de NDVI, Mapear parcelas con el GPS del teléfono, Elegir análisis y sensores de suelo y saber cuánto confiar en ellos, Comparar costos y beneficios, Hacer un mapa de zonas de la parcela con un plan para cada zona",
  outcome: "dividir una de tus parcelas en zonas usando mapas satelitales gratuitos, el GPS del teléfono, análisis de suelo y tus propios ojos y registros, y escribir para cada zona un plan de bajo costo que puedas pagar y comprobar.",
  about: [
    "Este curso es para pequeños productores y agricultores comerciales en crecimiento, encargados de finca, jóvenes emprendedores agrícolas y extensionistas que quieren cultivar \"con precisión\" sin máquinas grandes. Agricultura de precisión significa darle a cada parte de una parcela lo que necesita, en vez de tratar toda la parcela igual.",
    "Vas a aprender a ver las diferencias dentro de una parcela, leer mapas satelitales gratuitos de los cultivos (y conocer sus límites), mapear una parcela y sus zonas con un teléfono, elegir análisis y sensores de suelo y juzgar cuánto confiar en ellos, y decidir si una herramienta vale lo que cuesta. Terminas con un mapa de zonas de tu propia parcela y un plan para cada zona.",
    "No hace falta un dron. Si quieres mapear con dron, los cursos \"Drones para el monitoreo agrícola\" lo enseñan. Las cifras de dinero son solo ejemplos. Cada lección termina con una tarea en tu propia parcela; una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Haz un mapa de zonas de una de tus parcelas: recorre y registra el límite con una aplicación de GPS del teléfono, divide la parcela en 2 a 4 zonas usando al menos dos tipos de evidencia (NDVI satelital en dos fechas, resultados de un análisis o de un kit de suelo, rendimientos anteriores, lo que ves), marca cada zona con su tamaño y su evidencia, y escribe un plan para cada zona (qué harás distinto, su costo en moneda local como ejemplo y cómo comprobarás la próxima temporada si funcionó).",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Pequeños productores y agricultores comerciales en crecimiento, encargados de finca, jóvenes emprendedores agrícolas y extensionistas en Kenia, Nigeria, Ghana, Costa de Marfil, Senegal y toda África, que cultivan maíz, arroz, sorgo, yuca, frijol, maní, tomate, café y cacao en parcelas de menos de una hasta unas pocas decenas de hectáreas.",
    startingPoint: "Conocen bien sus parcelas a simple vista y usan un teléfono inteligente. La mayoría trata cada parcela igual: una sola dosis de fertilizante, una sola densidad de siembra. Pocos han usado un mapa satelital, una herramienta de área con GPS en el teléfono o un análisis de suelo, y muchos han oído grandes promesas sobre sensores y aplicaciones.",
    gap: "Dentro de una misma parcela, el suelo, el agua y el rendimiento pueden variar mucho, así que una sola dosis desperdicia insumos en algunas partes y deja con hambre a otras. Los participantes necesitan ver estas diferencias con herramientas gratuitas y de bajo costo, saber en qué herramientas se puede confiar y para qué, y convertirlas en planes de zonas sencillos que den ganancia en una finca pequeña.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el curso también está disponible en inglés, francés y árabe",
      "Dispositivos: un teléfono inteligente; una computadora ayuda para los visores satelitales, pero es opcional",
      "Parcelas pequeñas y mixtas: las imágenes satelitales gratuitas (píxeles de unos 10 m) son gruesas para parcelas de menos de media hectárea más o menos",
      "Las nubes de la temporada de lluvias limitan las imágenes satelitales",
      "Dinero: primero herramientas de bajo costo; todas las cifras son ejemplos; no se respalda ningún producto",
      "Plaguicidas y fertilizantes: solo productos registrados, usados como dice la etiqueta"
    ],
    prerequisites: "Manejar con soltura un teléfono inteligente. Ayuda tomar antes \"Salud y fertilidad del suelo\" y \"Datos y tecnología agrícola\"."
  },
  // ---- ADDIE: Diseño (objetivos) ----
  objectives: [
    { id: "O1", condition: "Recorriendo una de tus propias parcelas", action: "hacer una lista de las diferencias dentro de la parcela sobre las que la agricultura de precisión podría actuar", standard: "nombrando al menos tres diferencias y cómo viste cada una" },
    { id: "O2", condition: "Usando un visor satelital gratuito como el Copernicus Browser", action: "encontrar tu parcela y comparar su NDVI en dos fechas", standard: "y decir una cosa que el mapa muestra y una que no puede mostrar" },
    { id: "O3", condition: "Usando una aplicación de GPS del teléfono", action: "registrar el límite de una parcela y los bordes de sus zonas y leer sus áreas", standard: "teniendo en cuenta un error de unos 5 metros" },
    { id: "O4", condition: "Pudiendo elegir entre un análisis de laboratorio, un kit de análisis o un sensor de mano", action: "elegir un método de análisis de suelo, tomar una muestra de cada zona y decir cuánto confiar en cada resultado", standard: "confiando más en el pH que en las lecturas de nitrógeno, fósforo y potasio de los kits" },
    { id: "O5", condition: "Con una herramienta o práctica de precisión y los números de tu parcela", action: "comparar su costo con el beneficio esperado y decidir si usarla", standard: "con un presupuesto parcial sencillo en moneda local" },
    { id: "O6", condition: "Con evidencia de al menos dos fuentes", action: "dividir una parcela en 2 a 4 zonas de manejo y escribir un plan para cada zona", standard: "con cada plan al alcance de tu bolsillo y comprobable la próxima temporada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ver tu parcela por partes",
      lessons: [
        {
          title: "Qué es la agricultura de precisión en una finca pequeña",
          objectives: ["O1"],
          minutes: 5,
          goal: "Hacer una lista de las diferencias dentro de una de tus parcelas que podrías manejar por separado.",
          text: [
            "Agricultura de precisión significa manejar de forma distinta las partes de una parcela, porque son distintas. Una esquina de un maizal puede ser arenosa y seca, la parte baja encharcada y el centro rico porque ahí se guardaba el ganado. Tratar toda la parcela igual desperdicia fertilizante y semilla en algunas partes y deja con hambre a otras.",
            "En las fincas grandes esto se hace con tractores que cambian la dosis solos. En una finca pequeña puedes hacer lo mismo a mano: más estiércol donde el suelo es pobre, drenaje en la parte húmeda, otra variedad en la loma seca, o nada de fertilizante donde el cultivo nunca da ganancia. La idea es la misma: observar, medir, decidir por zona y comprobar el resultado.",
            "Tú ya sabes mucho a simple vista. Recorre la parcela y anota dónde el cultivo está bajo, amarillo o disparejo, dónde se estanca el agua, dónde aparecen malezas como Striga y dónde los rendimientos fueron buenos o malos. Pregunta a los trabajadores que deshierban y cosechan: ellos ven cada rincón. Los mapas satelitales, el GPS y los análisis de suelo, en las próximas lecciones, te ayudan a confirmar y medir lo que ves."
          ],
          steps: ["Recorre toda la parcela, el borde y el centro.", "Anota dónde el cultivo está débil, dónde se estanca el agua, dónde hay más malezas o plagas.", "Pregunta a los trabajadores dónde los rendimientos son buenos o malos.", "Escribe cada diferencia y cómo la viste.", "Márcalas en un dibujo sencillo de la parcela."],
          words: [["Agricultura de precisión", "manejar de forma distinta las distintas partes de una parcela, según lo que se observa y se mide."], ["Variabilidad", "cuánto cambian el suelo, el agua o el crecimiento del cultivo de una parte de la parcela a otra."], ["Zona de manejo", "una parte de la parcela que se maneja como una unidad porque se comporta de forma parecida."]],
          slides: [
            { title: "Una parcela, muchas partes", bullets: ["Loma arenosa, parte baja húmeda, antiguo corral rico", "Tratar todo igual desperdicia insumos"] },
            { title: "Precisión a mano", bullets: ["Más estiércol donde el suelo es pobre", "Drenaje en la parte húmeda", "La variedad correcta para cada parte"] },
            { title: "Observar, medir, decidir, comprobar", bullets: ["Primero tus ojos y tus registros", "Las herramientas confirman y miden"] },
            { title: "Recorre y pregunta", bullets: ["Cultivo débil, amarillo o disparejo", "Agua estancada, malezas, plagas", "Pregunta a los trabajadores"] }
          ],
          tryIt: "Recorre una de tus parcelas. Haz un dibujo sencillo y marca al menos tres diferencias (por ejemplo una mancha débil, una parte húmeda, una parte con malezas). Junto a cada una, escribe cómo la viste: a simple vista, por los rendimientos o por los trabajadores.",
          youCanNow: "ver una parcela como partes que son distintas y hacer la lista de las diferencias que podrías manejar por separado.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es la idea principal de la agricultura de precisión?", options: ["Comprar las máquinas más caras", "Usar la misma dosis en todas partes", "Manejar de forma distinta las distintas partes de una parcela", "Cultivar solo con drones"], answer: 2, why: "Le da a cada parte de la parcela lo que necesita." },
            { objective: "O1", q: "¿Quién puede decirte rápido dónde son bajos los rendimientos en una parcela?", options: ["Los trabajadores que la deshierban y la cosechan", "Un anuncio de un sensor", "Un comprador en la ciudad", "Nadie"], answer: 0, why: "Los trabajadores ven cada rincón de la parcela durante la temporada." }
          ]
        },
        {
          title: "Mapas satelitales gratuitos y lo que muestra el NDVI",
          objectives: ["O2"],
          minutes: 6,
          goal: "Comparar el NDVI de tu parcela en dos fechas en un visor satelital gratuito.",
          text: [
            "Los satélites europeos Sentinel-2 fotografían toda África más o menos cada 5 días, con píxeles de 10 metros (un píxel es un cuadrado de 10 m x 10 m). Las imágenes son gratuitas y abiertas. El Copernicus Browser te deja verlas sin pagar; puedes empezar sin cuenta, y una cuenta gratuita da más opciones. Digital Earth Africa también ofrece servicios satelitales gratuitos hechos para África, como mapas de anomalías de NDVI y de tierras de cultivo.",
            "El NDVI (Índice de Vegetación de Diferencia Normalizada) es un número que sale de los colores que reflejan las plantas. Las hojas verdes, sanas y tupidas dan un NDVI alto; el suelo desnudo o un cultivo seco o ralo dan un NDVI bajo. En el visor, encuentra tu parcela, elige una vista de NDVI y compara dos fechas, por ejemplo cuatro y ocho semanas después de la siembra. Vale la pena ir a ver una mancha que sigue baja cuando el resto está alto.",
            "Lo que el NDVI NO muestra: la causa. Un NDVI bajo puede ser sequía, encharcamiento, falta de nitrógeno, plagas, enfermedades, malezas o una siembra tardía. Tampoco ve debajo de las nubes, y en la temporada de lluvias puedes esperar semanas por una imagen despejada. En parcelas de menos de media hectárea más o menos, o en parcelas largas y angostas, los píxeles de 10 m son gruesos y mezclan el cultivo o los árboles del vecino. Las malezas también pueden verse verdes y sanas. Así que el NDVI te dice dónde mirar, y tus pies te dicen por qué."
          ],
          steps: ["Abre el Copernicus Browser en una computadora o en el navegador del teléfono.", "Busca tu zona y acércate a tu parcela.", "Elige una imagen con pocas nubes y una vista de NDVI.", "Compara dos fechas de la misma temporada.", "Marca las manchas bajas en tu dibujo y recórrelas para encontrar la causa."],
          words: [["Sentinel-2", "un par de satélites europeos que toman imágenes gratuitas de la Tierra más o menos cada 5 días con un detalle de 10 m."], ["NDVI", "un número que sale de los colores del satélite y muestra qué tan verdes y tupidas están las plantas."], ["Píxel", "un cuadrito de una imagen satelital; en Sentinel-2, de 10 m x 10 m."]],
          slides: [
            { title: "Imágenes satelitales gratuitas", bullets: ["Sentinel-2: más o menos cada 5 días, píxeles de 10 m", "Copernicus Browser: se ve gratis", "Digital Earth Africa: servicios gratuitos para África"] },
            { title: "Lo que muestra el NDVI", bullets: ["Alto: plantas verdes y tupidas", "Bajo: suelo desnudo, cultivo seco o ralo", "Compara dos fechas"] },
            { title: "Lo que el NDVI NO muestra", bullets: ["La causa de una mancha baja", "Nada debajo de las nubes", "Detalle en parcelas de menos de media hectárea más o menos"] },
            { title: "El mapa dice dónde, los pies dicen por qué", bullets: ["Marca las manchas bajas", "Recórrelas y encuentra la causa"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Abre el Copernicus Browser, encuentra una de tus parcelas (o una parcela cerca de ti) y mira el NDVI en dos fechas despejadas de esta temporada. Marca cualquier mancha baja en tu dibujo, luego recórrela y escribe cuál crees que es la causa.",
          youCanNow: "leer un mapa satelital gratuito de NDVI de tu parcela y usarlo para decidir dónde mirar, no cuál es la causa.",
          quickCheck: [
            { objective: "O2", q: "Una mancha de tu maizal tiene el NDVI bajo. ¿Qué te dice eso?", options: ["Que le falta nitrógeno", "Que tiene gusano cogollero", "Que necesita riego", "Que ahí las plantas están menos verdes o ralas, así que hay que recorrerla y ver por qué"], answer: 3, why: "El NDVI muestra dónde el crecimiento es débil, no la causa." },
            { objective: "O2", q: "¿Por qué puede ser difícil usar un mapa gratuito de Sentinel-2 en una parcela de 0.2 hectáreas?", options: ["Los píxeles de 10 m son gruesos y mezclan la tierra vecina", "Las imágenes son solo para Europa", "Cuesta demasiado", "El NDVI no funciona en el maíz"], answer: 0, why: "Una parcela de 0.2 ha tiene apenas un par de decenas de píxeles, muchos mezclados con sus bordes." }
          ]
        },
        {
          title: "Mapear una parcela con el GPS de tu teléfono",
          objectives: ["O3"],
          minutes: 5,
          goal: "Registrar el límite de una parcela y sus zonas con una aplicación de GPS del teléfono y leer sus áreas.",
          text: [
            "El GPS de un teléfono puede mapear tu parcela. Muchas aplicaciones gratuitas pueden registrar un límite mientras lo caminas, o dejarte poner puntos alrededor de la parcela y luego mostrar el área. También puedes poner un marcador en una aplicación de mapas y compartir sus coordenadas. Saber el tamaño real de una parcela y de cada zona importa: el fertilizante, la semilla, la mano de obra y el rendimiento por acre o por hectárea dependen de eso, y muchos agricultores descubren que su parcela es más grande o más chica de lo que pensaban.",
            "El GPS no es exacto. A cielo abierto, los teléfonos inteligentes suelen tener una precisión de unos 5 metros, y peor cerca de árboles, edificios y en valles. En una parcela pequeña ese error importa: camina despacio, quédate quieto unos segundos en cada esquina, mantén el teléfono a cielo abierto y recorre el límite dos veces para comparar. Si las dos áreas son muy distintas, recórrelo otra vez.",
            "Mapea también las zonas. Camina el borde de la parte húmeda o de la loma arenosa y guárdalo como una figura aparte, o pon marcadores en sus esquinas. Nombra cada figura con la parcela y la zona (\"P2 Zona A húmeda\") y guarda el archivo o una captura de pantalla con el área. Estas figuras serán la base de tu mapa de zonas en la Lección 6."
          ],
          steps: ["Abre al aire libre, a cielo abierto, una aplicación de GPS para medir áreas o hacer mapas.", "Camina despacio el límite de la parcela, parando en cada esquina.", "Lee y anota el área; recórrela otra vez para comprobar.", "Camina o marca los bordes de cada zona y guarda cada una con un nombre.", "Guarda el archivo o una captura de pantalla con las áreas."],
          words: [["GPS", "Sistema de Posicionamiento Global: satélites que le permiten a un teléfono saber dónde está en la Tierra."], ["Límite", "el borde de una parcela."], ["Hectárea", "un área de 100 m x 100 m, unos 2.5 acres."]],
          slides: [
            { title: "Tu teléfono puede mapear una parcela", bullets: ["Camina el límite o pon puntos en las esquinas", "Lee el área", "El tamaño de la parcela manda en cada número por acre"] },
            { title: "El GPS no es exacto", bullets: ["Unos 5 m a cielo abierto", "Peor cerca de árboles, edificios y en valles"] },
            { title: "Mejores lecturas", bullets: ["Camina despacio, para en las esquinas", "Recorre dos veces y compara"] },
            { title: "Mapea las zonas", bullets: ["Una figura guardada por zona", "Nombre: P2 Zona A húmeda", "Guarda el área"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Usa una aplicación de GPS del teléfono para recorrer dos veces el límite de una parcela y escribe las dos áreas. Luego mapea el borde de una zona que encontraste en la Lección 1, ponle nombre y escribe su área.",
          youCanNow: "mapear una parcela y sus zonas con el GPS del teléfono y anotar sus áreas, teniendo en cuenta el error del GPS.",
          quickCheck: [
            { objective: "O3", q: "Recorriste dos veces el límite de una parcela y te dio 0.9 acres y 1.4 acres. ¿Qué haces?", options: ["Sacar el promedio y terminar", "Recorrerla otra vez despacio, parando en las esquinas, a cielo abierto", "Usar el número más grande", "Dejar de usar el GPS"], answer: 1, why: "Una diferencia grande significa lecturas malas; recórrela otra vez con cuidado." },
            { objective: "O3", q: "¿Dónde suele ser menos preciso el GPS del teléfono?", options: ["En un campo abierto", "En un día soleado", "En una llanura", "Debajo de árboles y cerca de edificios"], answer: 3, why: "Los árboles y los edificios tapan y rebotan las señales de los satélites." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Ver tu parcela por partes",
        questions: [
          { objective: "O1", q: "Un pequeño productor pone estiércol extra solo en el extremo arenoso y pobre de la parcela. Esto es:", options: ["Un desperdicio", "Agricultura de precisión a mano", "Contra las reglas", "Posible solo con un tractor"], answer: 1, why: "Manejar de forma distinta las partes de una parcela es el centro de la agricultura de precisión." },
          { objective: "O2", q: "¿Más o menos cada cuánto toman los satélites Sentinel-2 una imagen del mismo lugar?", options: ["Más o menos cada 5 días", "Una vez al año", "Cada hora", "Solo si se pide"], answer: 0, why: "Los dos satélites pasan más o menos cada 5 días; las nubes pueden tapar algunas imágenes." },
          { objective: "O2", q: "¿Qué es algo que el NDVI NO puede decirte?", options: ["Dónde el cultivo está más verde", "Dónde el crecimiento es débil", "Por qué una mancha está débil", "Cómo se comparan dos fechas"], answer: 2, why: "Muchas causas dan un NDVI bajo; recorres la mancha para saber cuál es." },
          { objective: "O3", q: "La precisión típica del GPS de un teléfono a cielo abierto es de unos:", options: ["1 centímetro", "500 metros", "5 kilómetros", "5 metros"], answer: 3, why: "Unos 4.9 m a cielo abierto, peor cerca de árboles y edificios." },
          { objective: "O3", q: "¿Por qué importa saber el área real de la parcela?", options: ["La semilla, el fertilizante, la mano de obra y el rendimiento por acre dependen de ella", "Los compradores pagan por área", "Las aplicaciones de GPS la necesitan", "No importa"], answer: 0, why: "Un área equivocada hace que cada número por acre esté mal." }
        ]
      }
    },
    {
      name: "Capítulo 2: Medir el suelo y planificar por zonas",
      lessons: [
        {
          title: "Kits y sensores de suelo: cuánto confiar en ellos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Elegir un método de análisis de suelo para cada zona y decir cuánto confiar en sus resultados.",
          text: [
            "Hay tres formas principales de analizar el suelo. Un análisis de laboratorio (de un instituto nacional de investigación como KALRO, de una universidad o de un laboratorio privado acreditado) es el más preciso, tarda de días a semanas y cuesta más. Un kit de campo (tiras de colores o químicos en tubos) da resultados rápidos ahí mismo. Un sensor o medidor electrónico de mano da una lectura en minutos y muchas veces se vende con una aplicación.",
            "Pruebas independientes de kits portátiles, como una evaluación del IFDC (un centro internacional de fertilizantes), encontraron buena coincidencia con los laboratorios para el pH del suelo, pero resultados poco constantes para nitrógeno, fósforo y potasio. Una investigación en el condado de Embu, Kenia, encontró que algunos sensores de mano avanzados pueden predecir bien varias propiedades del suelo, pero esos instrumentos son caros y hay que calibrarlos con muestras de laboratorio. Ten cuidado con las sondas baratas que dicen leer el NPK al instante: las cifras de precisión que da el propio vendedor no son una prueba independiente.",
            "Un plan práctico: manda al laboratorio una buena muestra compuesta por zona cada pocos años, y usa un kit o un medidor para revisar rápido el pH entre un análisis de laboratorio y otro. Toma cada muestra de la misma forma (muchos piquetes pequeños, mezclados, a la misma profundidad, evitando caminos y montones de estiércol). Los mapas gratuitos de iSDAsoil estiman las propiedades del suelo de toda África a 30 m y sirven para ver el panorama general, pero son estimaciones de modelos, no un análisis de tu parcela."
          ],
          steps: ["Decide: laboratorio, kit o sensor, para cada pregunta que tengas.", "Toma una muestra compuesta por zona: muchos piquetes, a la misma profundidad, mezclados.", "Manda las muestras a un laboratorio acreditado cada pocos años.", "Usa un kit o un medidor para revisar rápido el pH entre análisis.", "Escribe cada resultado junto a su zona, con su método."],
          words: [["Muestra compuesta", "muchos piquetes pequeños de suelo de una zona mezclados en una sola muestra."], ["Calibración", "revisar y ajustar un sensor comparándolo con un resultado de laboratorio confiable."], ["pH", "una medida de qué tan ácido o alcalino es el suelo."]],
          slides: [
            { title: "Tres formas de analizar", bullets: ["Laboratorio: el más preciso, más lento, cuesta más", "Kit de campo: rápido, ahí mismo", "Sensor de mano: minutos, muchas veces con una aplicación"] },
            { title: "Cuánto confiar en ellos", bullets: ["Kits: buenos para el pH", "Kits: poco constantes para N, P y K", "Los sensores avanzados necesitan calibración"] },
            { title: "Un plan práctico", bullets: ["Una muestra de laboratorio por zona cada pocos años", "Kit o medidor para revisar rápido el pH", "El mismo método de muestreo cada vez"] },
            { title: "Mapas de suelo gratuitos", bullets: ["iSDAsoil: estimaciones a 30 m", "Un panorama general, no el análisis de tu parcela"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "Para cada zona de tu dibujo, escribe qué análisis usarás (laboratorio, kit o sensor) y por qué. Toma, o planea, una muestra compuesta por zona, y escribe cuánto confiarías en el resultado de un kit para el pH y para el nitrógeno.",
          youCanNow: "elegir un método de análisis de suelo para cada zona y juzgar cuánto confiar en sus resultados.",
          quickCheck: [
            { objective: "O4", q: "¿Para qué resultado son más confiables los kits portátiles de suelo, comparados con un laboratorio?", options: ["Nitrógeno", "Potasio", "pH del suelo", "Fósforo"], answer: 2, why: "Las pruebas independientes encontraron buena coincidencia en el pH, pero N, P y K poco constantes." },
            { objective: "O4", q: "Un vendedor dice que su sonda barata lee el NPK al instante con 95 por ciento de precisión. Deberías:", options: ["Pedir resultados de pruebas independientes y comparar algunas lecturas con un laboratorio", "Comprarla de inmediato", "Usarla en lugar de todos los análisis de laboratorio", "Creerle porque tiene una aplicación"], answer: 0, why: "Las cifras del propio vendedor no son una prueba independiente; compáralas con un laboratorio." }
          ]
        },
        {
          title: "Costos frente a beneficios, y cuándo ayudan los drones",
          objectives: ["O5"],
          minutes: 5,
          goal: "Comparar el costo de una herramienta o práctica de precisión con su beneficio esperado.",
          text: [
            "Una herramienta de precisión solo tiene sentido si el beneficio es mayor que el costo. Usa un presupuesto parcial sencillo: ¿cuánto más voy a ganar o ahorrar (más rendimiento, menos fertilizante o semilla desperdiciados), y cuánto más me va a costar (el análisis, el sensor, la aplicación, tu tiempo, la mano de obra)? Solo como ejemplo: si dividir en zonas ahorra 2 sacos de fertilizante en una zona débil que nunca dio ganancia (2 x GHS 400 = GHS 800 ahorrados) y el análisis de laboratorio costó GHS 300, vale la pena.",
            "En las fincas pequeñas, empieza por lo que es gratis o barato: tus ojos, tus registros, el GPS del teléfono y los mapas satelitales gratuitos. Después gasta en un análisis de laboratorio por zona. Compra un sensor de mano solo si lo vas a usar seguido y puedes compararlo con un laboratorio. Los grupos pueden repartir los costos: una cooperativa en Costa de Marfil o un grupo de agricultores en Nigeria puede comprar un solo medidor o pagar juntos los análisis de laboratorio.",
            "Los drones dan imágenes de unos pocos centímetros en vez de 10 metros, vuelan debajo de las nubes y pueden volar el día que los necesitas. Ayudan en cultivos de alto valor, en parcelas más grandes o cuando un grupo contrata juntos un servicio. Cuestan mucho más, y volarlos requiere una licencia de la autoridad de aviación civil. Si crees que necesitas uno, toma los cursos \"Drones para el monitoreo agrícola\" y \"Drones agrícolas: análisis de datos y agricultura de precisión\"; este curso no los repite."
          ],
          steps: ["Escribe cuánto cuesta la herramienta o práctica: dinero, tiempo, mano de obra.", "Escribe el ingreso o ahorro extra que esperas, con números de ejemplo.", "Compara: beneficio menos costo.", "Empieza con herramientas gratuitas; luego un análisis de laboratorio por zona; luego un sensor o un servicio de dron solo si da ganancia.", "Piensa en repartir los costos con un grupo."],
          words: [["Presupuesto parcial", "una cuenta sencilla solo de los costos extra y los beneficios extra de un cambio."], ["Servicio de dron", "un negocio que vuela un dron sobre tu parcela a cambio de un pago."], ["Rendimiento económico", "lo que recibes de vuelta por lo que gastas."]],
          slides: [
            { title: "El beneficio debe ganarle al costo", bullets: ["Ingreso o ahorro extra", "Menos el costo extra", "Solo como ejemplo: GHS 800 ahorrados frente a GHS 300 de análisis"] },
            { title: "Gasta en este orden", bullets: ["Gratis: ojos, registros, GPS, satélite", "Análisis de laboratorio por zona", "Sensor solo si se usa seguido y se revisa"] },
            { title: "Reparte los costos", bullets: ["Grupos y cooperativas", "Un medidor o muchos análisis de laboratorio juntos"] },
            { title: "Cuándo ayudan los drones", bullets: ["Detalle de centímetros, debajo de las nubes", "Cultivos de alto valor, parcelas grandes, servicios en grupo", "Mira los cursos de drones; se necesita licencia"] }
          ],
          tryIt: "Escoge una herramienta o práctica de precisión para tu finca (un análisis de laboratorio por zona, un medidor de suelo, un servicio de dron o fertilizante por zonas). Escribe un presupuesto parcial con números de ejemplo en moneda local: costo extra, beneficio extra y tu decisión.",
          youCanNow: "decidir con un presupuesto parcial sencillo si una herramienta de precisión vale la pena para tu finca.",
          quickCheck: [
            { objective: "O5", q: "En una finca pequeña, ¿qué deberías probar primero, por lo general?", options: ["Un dron", "Una gran red de sensores", "Una suscripción cara a una aplicación", "Tus ojos, tus registros, el GPS del teléfono y los mapas satelitales gratuitos"], answer: 3, why: "Empieza con herramientas gratuitas y gasta solo donde da ganancia." },
            { objective: "O5", q: "Un medidor de suelo cuesta más de lo que ahorrarías en cinco temporadas. ¿Qué es lo sensato?", options: ["Comprarlo de todos modos", "Repartir el costo con un grupo o usar análisis de laboratorio en su lugar", "Pedir un préstamo para comprar dos", "Dejar de fertilizar"], answer: 1, why: "Si el beneficio no le gana al costo por tu cuenta, compártelo o elige un método más barato." }
          ]
        },
        {
          title: "Hacer un mapa de zonas de la parcela y un plan para cada zona",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Dividir una parcela en 2 a 4 zonas y escribir un plan para cada zona.",
          text: [
            "Ahora junta la evidencia. Pon tus figuras de GPS sobre tu dibujo. Para cada parte de la parcela, haz la lista de lo que sabes: NDVI en dos fechas, resultados de un análisis o de un kit de suelo, rendimientos anteriores, lo que tú y los trabajadores ven. Una zona necesita al menos dos tipos de evidencia que coincidan, por ejemplo un NDVI bajo y un resultado de pH bajo, o una parte húmeda vista cada temporada y rendimientos bajos registrados.",
            "Hazlo sencillo: en una finca pequeña bastan 2 a 4 zonas. Nómbralas por lo que son: \"Zona A suelo bueno\", \"Zona B ácida y débil\", \"Zona C encharcada\". Escribe el área de cada zona a partir de tu mapa de GPS.",
            "Luego escribe un plan para cada zona: qué harás distinto (más composta y cal donde el pH es bajo, como indique el laboratorio; drenajes o un cultivo de arroz u hortalizas en la zona húmeda; una dosis menor de fertilizante donde el cultivo nunca da ganancia), cuánto costará como ejemplo en tu moneda y cómo lo comprobarás: registra el rendimiento por zona en la cosecha y compara el NDVI la próxima temporada. Usa solo fertilizantes y plaguicidas registrados, como dice la etiqueta. Un plan de precisión solo es correcto si los registros de la próxima temporada muestran que funcionó."
          ],
          steps: ["Pon en un solo mapa las figuras de GPS, las notas de NDVI, los resultados de suelo y los rendimientos.", "Dibuja 2 a 4 zonas donde coincidan dos tipos de evidencia.", "Nombra cada zona y escribe su área.", "Escribe un plan, un costo y una comprobación para cada zona.", "Registra el rendimiento por zona en la cosecha y compara la próxima temporada."],
          words: [["Mapa de zonas", "un mapa de una parcela dividida en zonas de manejo."], ["Evidencia", "datos que puedes mostrar, como el resultado de un análisis, una imagen de NDVI o un registro de rendimiento."], ["Cal", "un tratamiento del suelo que hace que un suelo ácido sea menos ácido."]],
          slides: [
            { title: "Junta la evidencia", bullets: ["Figuras de GPS y dibujo", "NDVI en dos fechas, resultados de suelo", "Rendimientos y lo que ves"] },
            { title: "Dibuja de 2 a 4 zonas", bullets: ["Deben coincidir dos tipos de evidencia", "Nómbralas por lo que son", "Escribe cada área"] },
            { title: "Un plan para cada zona", bullets: ["Qué cambia", "Costo de ejemplo", "Cómo lo comprobarás"] },
            { title: "Comprueba la próxima temporada", bullets: ["Rendimiento por zona en la cosecha", "Compara el NDVI", "Insumos registrados, como dice la etiqueta"] }
          ],
          tryIt: "Tarea final: haz el mapa de zonas de tu parcela con 2 a 4 zonas, cada una marcada con su área y al menos dos tipos de evidencia. Escribe un plan para cada zona: el cambio, el costo de ejemplo en tu moneda y cómo comprobarás la próxima temporada si funcionó.",
          youCanNow: "hacer un mapa de zonas de una parcela a partir de varios tipos de evidencia y escribir un plan comprobable para cada zona.",
          quickCheck: [
            { objective: "O6", q: "¿Qué evidencia basta para dibujar una zona?", options: ["Un NDVI bajo en una fecha nublada", "Lo que adivina un vecino", "Un NDVI bajo en dos fechas y un resultado de pH bajo", "Un anuncio"], answer: 2, why: "Dos tipos de evidencia que coinciden hacen confiable una zona." },
            { objective: "O6", q: "¿Cómo sabrás si el plan de una zona funcionó?", options: ["Registrando el rendimiento por zona en la cosecha y comparando la próxima temporada", "Suponiendo que funcionó", "Preguntándole al vendedor de insumos", "Mirando otra vez el plan"], answer: 0, why: "Solo los registros por zona muestran si el cambio dio ganancia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Medir el suelo y planificar por zonas",
        questions: [
          { objective: "O4", q: "¿Qué es una muestra compuesta de suelo?", options: ["Una palada del centro", "Muchos piquetes pequeños de una zona mezclados", "Tierra del montón de estiércol", "Una muestra del camino"], answer: 1, why: "Mezclar muchos piquetes da una imagen justa de la zona." },
          { objective: "O4", q: "Los mapas gratuitos de iSDAsoil sirven sobre todo para:", options: ["Reemplazar todos los análisis de suelo", "Decidir las dosis de plaguicida", "Ver el panorama general del suelo antes de analizar tu parcela", "Medir la humedad del suelo de hoy"], answer: 2, why: "Son estimaciones de modelos, no un análisis de tu parcela." },
          { objective: "O5", q: "Un presupuesto parcial compara:", options: ["El costo extra y el beneficio extra de un cambio", "Todos los costos de la finca en diez años", "Solo el precio del cultivo", "El saldo de tu banco"], answer: 0, why: "Solo mira lo que cambia." },
          { objective: "O5", q: "¿Cuándo puede tener sentido un servicio de dron?", options: ["Siempre, en cada parcela", "Nunca en África", "Solo sin licencia", "En cultivos de alto valor o parcelas más grandes, o compartido por un grupo, cuando da ganancia"], answer: 3, why: "Los drones cuestan más; ayudan donde el valor es alto o los costos se reparten." },
          { objective: "O6", q: "¿Cuántas zonas sugiere este curso para una finca pequeña?", options: ["De 2 a 4", "De 20 a 40", "Una", "Una por planta"], answer: 0, why: "Unas pocas zonas bastan para manejarlas y comprobarlas a mano." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agricultura de precisión: monitoreo por satélite y sensores de suelo",
    questions: [
      { objective: "O1", q: "La agricultura de precisión en una finca pequeña significa:", options: ["Comprar un tractor con sensores", "Manejar de forma distinta las distintas partes de la parcela", "Usar una sola dosis de fertilizante en todas partes", "Cultivar sin registros"], answer: 1, why: "Cada parte recibe lo que necesita." },
      { objective: "O1", q: "¿Cuál es una diferencia dentro de una parcela sobre la que podrías actuar?", options: ["El color de tu teléfono", "El precio del mercado", "Una parte húmeda en el extremo bajo", "El cultivo de tu vecino"], answer: 2, why: "Una parte húmeda se puede drenar o sembrar de otra forma." },
      { objective: "O1", q: "¿Qué va primero en la agricultura de precisión en una finca pequeña?", options: ["Recorrer la parcela y anotar las diferencias", "Comprar un sensor", "Contratar un dron", "Cambiar todos los insumos"], answer: 0, why: "Observar es gratis y guía todo lo demás." },
      { objective: "O2", q: "¿Qué ofrece gratis Sentinel-2?", options: ["Imágenes con detalle de 1 cm", "Pronósticos del tiempo", "Análisis de suelo", "Imágenes más o menos cada 5 días con píxeles de 10 m"], answer: 3, why: "Los datos de Sentinel-2 son gratuitos y abiertos, a 10 m." },
      { objective: "O2", q: "Un NDVI alto suele significar:", options: ["Suelo desnudo", "Plantas verdes y tupidas", "Agua estancada", "Una nube"], answer: 1, why: "Las hojas sanas reflejan la luz de una forma que da un NDVI alto." },
      { objective: "O2", q: "¿Por qué comparar el NDVI en dos fechas?", options: ["Para ver qué manchas siguen débiles mientras otras crecen", "Porque una imagen siempre está mal", "Para que el mapa tenga colores", "Para contar plantas"], answer: 0, why: "Vale la pena recorrer una mancha que sigue baja en varias fechas." },
      { objective: "O2", q: "En la temporada de lluvias puede que no consigas una imagen satelital despejada porque:", options: ["Los satélites se detienen", "El NDVI solo funciona en la temporada seca", "Las nubes tapan el suelo", "Los cultivos están demasiado altos"], answer: 2, why: "Sentinel-2 no puede ver a través de las nubes." },
      { objective: "O3", q: "Una hectárea es:", options: ["10 m x 10 m", "1 km x 1 km", "Medio acre", "100 m x 100 m, unos 2.5 acres"], answer: 3, why: "Una hectárea = 10,000 metros cuadrados." },
      { objective: "O3", q: "¿Cómo consigues una mejor lectura de área con el GPS?", options: ["Corriendo rápido alrededor de la parcela", "Caminando despacio a cielo abierto, parando en las esquinas y recorriendo dos veces", "Con el teléfono en el bolsillo", "Parándote debajo de un árbol"], answer: 1, why: "Caminar despacio, hacer pausas y estar a cielo abierto mejoran la precisión." },
      { objective: "O3", q: "¿Por qué mapear cada zona como una figura aparte con nombre?", options: ["Para saber el área de cada zona para planificar y registrar", "Porque el GPS lo exige", "Para compartirla en redes sociales", "No sirve de nada"], answer: 0, why: "El área de cada zona define sus insumos y su rendimiento por acre." },
      { objective: "O4", q: "¿Qué método de análisis de suelo es el más preciso?", options: ["Una sonda barata", "Adivinar por el color", "Un análisis en un laboratorio acreditado", "Una foto por WhatsApp"], answer: 2, why: "Los laboratorios son la referencia con la que se comparan los kits y los sensores." },
      { objective: "O4", q: "Los kits portátiles dieron resultados poco constantes para:", options: ["El color del suelo", "Nitrógeno, fósforo y potasio", "El tamaño de la parcela", "La lluvia"], answer: 1, why: "Las pruebas independientes encontraron buen pH, pero N, P y K poco constantes." },
      { objective: "O4", q: "Para confiar más en un sensor de mano, deberías:", options: ["Usarlo solo de noche", "No compararlo nunca con nada", "Comprar otro", "Comparar algunas de sus lecturas con resultados de laboratorio"], answer: 3, why: "Calibrarlo con un laboratorio muestra cuánto confiar en él." },
      { objective: "O5", q: "Solo como ejemplo: dividir en zonas ahorra GHS 800 de fertilizante y el análisis de laboratorio costó GHS 300. El resultado es:", options: ["Una pérdida de GHS 500", "Ningún cambio", "Una ganancia de GHS 500", "Una ganancia de GHS 1,100"], answer: 2, why: "800 ahorrados menos 300 de costo = 500 ganados." },
      { objective: "O5", q: "Un grupo de agricultores puede bajar el costo de las herramientas de precisión:", options: ["Compartiendo un medidor o pagando juntos los análisis de laboratorio", "Comprando cada uno un dron", "Saltándose todos los análisis", "Usando fertilizante no registrado"], answer: 0, why: "Compartir reparte el costo entre muchas fincas." },
      { objective: "O5", q: "Para aprender a mapear con drones, deberías:", options: ["Volar sin licencia", "Tomar los cursos de drones que ya existen y seguir las reglas de aviación civil", "Usar solo este curso", "Copiar un video de internet"], answer: 1, why: "Los cursos de drones lo cubren; se necesita una licencia." },
      { objective: "O6", q: "Una zona debe basarse en:", options: ["Una imagen nublada", "El consejo de un vendedor", "Tu estado de ánimo", "Al menos dos tipos de evidencia que coincidan"], answer: 3, why: "Dos fuentes que coinciden hacen confiable una zona." },
      { objective: "O6", q: "¿Cuál es un buen plan para una zona encharcada?", options: ["Poner más fertilizante y esperar", "Ignorarla", "Cavar drenajes o sembrar un cultivo que aguante el suelo húmedo, y registrar el resultado", "Sembrar lo mismo que en la loma seca"], answer: 2, why: "El plan se ajusta a la causa y se comprueba con registros." },
      { objective: "O6", q: "El plan de cada zona debe incluir:", options: ["Qué cambia, su costo de ejemplo y cómo lo comprobarás", "Solo el color de la zona", "Solo el precio del cultivo", "Nada; las zonas son solo para los mapas"], answer: 0, why: "Un plan al que no le puedes calcular el costo ni comprobar no es un plan." },
      { objective: "O6", q: "Los fertilizantes y plaguicidas de un plan de zonas deben ser:", options: ["Los más baratos que encuentres", "Productos registrados usados como dice la etiqueta", "Mezclados a ojo", "El doble en las zonas débiles"], answer: 1, why: "Solo los productos registrados, usados según la etiqueta, son seguros y legales." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Parcela y zonas mapeadas", objective: "O3", notYet: "No hay límite, o las áreas se adivinaron.", meets: "El límite se recorrió con GPS y cada zona tiene una figura con nombre y su área.", exceeds: "El límite se recorrió dos veces y las áreas coinciden de cerca." },
      { name: "Evidencia satelital usada con cuidado", objective: "O2", notYet: "No hay vista satelital, o el NDVI se tomó como la causa.", meets: "Se comparó el NDVI en dos fechas y se recorrieron las manchas bajas para encontrar la causa.", exceeds: "Anota lo que el mapa no pudo mostrar en esta parcela (nubes, parcelas pequeñas, malezas)." },
      { name: "Evidencia del suelo", objective: "O4", notYet: "No hay información del suelo, o las lecturas de NPK del kit se tomaron como exactas.", meets: "Se eligió un método de análisis para cada zona, diciendo cuánto se puede confiar en él.", exceeds: "Al menos un resultado de laboratorio por zona, o lecturas del kit comparadas con un laboratorio." },
      { name: "Zonas y planes", objective: "O6", notYet: "Zonas dibujadas con una sola fuente, o sin plan por zona.", meets: "De 2 a 4 zonas, cada una con dos tipos de evidencia y un plan, un costo y una comprobación.", exceeds: "Cada plan nombra el registro que mostrará la próxima temporada si funcionó." },
      { name: "Vale lo que cuesta", objective: "O5", notYet: "Herramientas elegidas sin contar el costo.", meets: "Un presupuesto parcial con números de ejemplo en moneda local respalda el plan.", exceeds: "Considera repartir los costos con un grupo, o un método más barato que dé la misma respuesta." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que aplican al menos un plan de zona en la temporada siguiente (seguimiento a los 30 días y al final de la temporada)",
      "Participantes que registran el rendimiento por zona en la cosecha",
      "Ahorros de insumos o cambios de rendimiento por zona reportados después de una temporada",
      "Grupos de agricultores que comparten análisis de suelo o herramientas después del curso"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono inteligente con una aplicación gratuita de GPS para medir áreas o hacer mapas",
      "Acceso a internet para el Copernicus Browser (en una computadora o en el navegador del teléfono)",
      "Una parcela para recorrer, papel, lápiz y un dibujo sencillo de la parcela",
      "Un barreno o una pala y cubetas limpias para las muestras compuestas; un laboratorio o un kit si los hay",
      "Unos 90 minutos en total más el tiempo en el campo"
    ],
    facilitatorNotes: [
      "Haga las Lecciones 1 y 3 en el campo: recorran juntos el límite y las zonas, y comparen las áreas que da el GPS de cada teléfono.",
      "Prepare de antemano una imagen despejada del Copernicus Browser de una parcela local; las nubes de la temporada de lluvias pueden impedir las demostraciones en vivo.",
      "No venda ni respalde ningún sensor de suelo ni aplicación; si asiste un vendedor, pídale resultados de pruebas independientes.",
      "Recuerde a los participantes que el NDVI muestra dónde, no por qué, y que las lecturas de NPK de los kits necesitan revisión de laboratorio.",
      "Mande las preguntas sobre drones a los cursos de drones; este curso no enseña a volar.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

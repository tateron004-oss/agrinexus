"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-data-precision.js. See scripts/koachlearn-courses/README.md, "Translations".
// Index formulas use Spanish band names (Rojo, Verde, Azul); NIR and the index names (NDVI, NDRE, VARI) stay as they appear in QGIS and in the literature.

const FAO_EO = { name: "FAO GIEWS Observación de la Tierra (NDVI e indicadores de vegetación)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (SIG libre y de código abierto)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (software libre y de código abierto para mapas con drones)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO y UIT: E-agriculture in Action: drones para la agricultura (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO y OMS: Guía para la aplicación aérea de plaguicidas (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision-es",
  lang: "es",
  translationOf: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Drones agrícolas: análisis de datos y agricultura de precisión",
  skills: "Comprobar la precisión de un mapa hecho con dron, Elegir el índice de vegetación correcto, Hacer estadísticas por zona y conteos de plantas en QGIS, Armar un mapa de prescripción, Calcular si la precisión es rentable, Comunicar los resultados a los agricultores",
  outcome: "convertir un conjunto de datos de dron en un análisis revisado y preciso con estadísticas por zona y un mapa de prescripción, calcular si actuar sobre él es rentable y entregar el resultado de forma que un agricultor o el administrador de una plantación pueda actuar.",
  about: [
    "Este curso es para analistas de datos de drones, agrónomos, especialistas de extensión, administradores de agronegocios y plantaciones, y negocios de servicios con drones de Kenia, Nigeria y toda África. Ya debes saber unir un mapa de dron y hacer un mapa NDVI básico (consulta el itinerario de monitoreo, Curso 3).",
    "El Capítulo 1 es el análisis: asegurarte de que un mapa es lo bastante preciso para actuar, elegir entre índices de vegetación, y medir zonas y contar plantas o árboles en QGIS (un programa gratuito de mapas). El Capítulo 2 es la agricultura de precisión: armar un mapa de prescripción a partir de tu análisis, revisar la economía con un presupuesto parcial sencillo y presentar los resultados para que los agricultores actúen.",
    "Los ejemplos usan maíz y frijol, té, café, aguacate y yuca. Las dosis de fertilizante y de semilla de este curso son solo ejemplos: las dosis reales salen de análisis de suelo, investigación local y recomendaciones de extensión. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Con un conjunto de datos de dron de un campo real o una muestra gratuita: indica la precisión del mapa y cómo la comprobaste; elige y justifica un índice de vegetación; divide el campo en zonas e informa las estadísticas por zona (área e índice promedio) y un conteo de plantas o árboles; arma un mapa de prescripción con una dosis o tarea por zona (usando las dosis recomendadas localmente); calcula un presupuesto parcial sencillo que muestre si es rentable; y escribe un resultado de una página para el agricultor en lenguaje sencillo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Analistas de datos de drones, agrónomos, especialistas de extensión, administradores de agronegocios y plantaciones, y negocios de servicios con drones en Kenia, Nigeria y en toda África que trabajan con cultivos como maíz y frijol, té, café, aguacate y yuca.",
    startingPoint: "Ya saben unir un mapa de dron y hacer un mapa NDVI básico. Pocos comprueban la precisión de posición de un mapa, eligen un índice para el cultivo y su etapa, convierten los mapas en estadísticas por zona, arman un mapa de prescripción, prueban si es rentable o presentan los resultados para que un agricultor actúe.",
    gap: "Los mapas de colores por sí solos casi nunca cambian lo que pasa en el campo, y un mapa impreciso o el índice equivocado pueden mandar a los trabajadores y los insumos al lugar equivocado. Convertir los datos del dron en números revisados, una prescripción práctica y un presupuesto parcial honesto permite que los agricultores y las plantaciones gasten los insumos donde rinden y confíen en el servicio de drones.",
    constraints: [
      "Nivel de lectura: palabras sencillas; cada término de índices y de mapas se explica",
      "Dispositivos: una laptop con QGIS gratuito y un conjunto de datos de dron o datos de muestra gratuitos",
      "Las dosis son solo ejemplos: las dosis reales de fertilizante y semilla salen de análisis de suelo, investigación local y extensión",
      "Fumigar o esparcir con dron necesita aprobaciones de aviación y de plaguicidas",
      "Los datos de los agricultores son privados y solo se comparten con su permiso"
    ],
    prerequisites: "\"Drones para el monitoreo agrícola 3: salud de los cultivos, plagas y procesamiento de datos\" (unir un mapa y hacer un mapa NDVI)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un mapa de dron unido y su informe de procesamiento", action: "comprobar la precisión de posición y la calidad de imagen del mapa e informar el error", standard: "usando puntos de comprobación o un método declarado, antes de cualquier análisis" },
    { id: "O2", condition: "Con un cultivo, su etapa de crecimiento y la cámara usada", action: "elegir un índice de vegetación y explicar por qué se ajusta", standard: "y confirmarlo con el mapa en color real y en el terreno" },
    { id: "O3", condition: "Con QGIS y un mapa de índice", action: "crear zonas e informar el área y el índice promedio de cada zona, y contar plantas o árboles", standard: "con los conteos comprobados en una muestra en el terreno y el error informado" },
    { id: "O4", condition: "Con zonas y sus causas confirmadas en el terreno", action: "armar un mapa de prescripción con una dosis o tarea para cada zona", standard: "usando de dos a cuatro dosis tomadas de análisis de suelo o de recomendaciones locales" },
    { id: "O5", condition: "Para una acción de precisión propuesta", action: "calcular un presupuesto parcial con un caso prudente y un caso probable", standard: "contando solo lo que cambia, y diciendo con honestidad si no es rentable" },
    { id: "O6", condition: "Para un agricultor o el administrador de una plantación", action: "escribir un resultado corto que empiece por la acción, en su idioma y sus unidades", standard: "mostrando qué tan seguro estás y qué se comprobó en el terreno" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Análisis de datos",
      lessons: [
        {
          objectives: ["O1"],
          title: "¿El mapa es lo bastante preciso para actuar?",
          minutes: 6,
          goal: "Comprobar la precisión de posición y la calidad de imagen de un mapa de dron antes de analizarlo.",
          text: [
            "Antes de mandar trabajadores a una zona, necesitas confiar en que el mapa pone las cosas en el lugar correcto. El GNSS normal de un dron puede ubicar un mapa con unos metros de error. Eso basta para encontrar una esquina húmeda, pero no para guiar el trabajo en surcos individuales ni para hacer coincidir mapas de distintas fechas.",
            "Tres formas de mejorar y comprobar la precisión: puntos de control en tierra (GCP), blancos marcados en el suelo cuyas coordenadas mides con un receptor GNSS preciso y usas en el procesamiento; drones con posicionamiento RTK o PPK, que corrigen la posición durante o después del vuelo; y puntos de comprobación, blancos medidos extra que no se usan en el procesamiento y sirven para probar el mapa final. Informa el error que mediste.",
            "Revisa también la calidad: el informe de procesamiento (cuántas imágenes se usaron, si hubo advertencias), el detalle real de la imagen (GSD), el desenfoque, los huecos y los errores de unión. En los mapas que vas a comparar en el tiempo, usa siempre el mismo método y asegúrate de que encajen uno sobre otro."
          ],
          steps: ["Lee el informe de procesamiento: imágenes usadas, advertencias, GSD.", "Busca desenfoque, huecos y errores de unión.", "Mide el error de posición en los puntos de comprobación (o compara con elementos conocidos).", "Decide si la precisión sirve para la decisión.", "Para series de tiempo, comprueba que los mapas encajen."],
          words: [["Punto de control en tierra (GCP)", "un blanco marcado en el suelo con coordenadas medidas con precisión, que se usa para fijar la posición de un mapa."], ["RTK / PPK", "métodos que corrigen las posiciones del dron durante (RTK) o después (PPK) del vuelo para lograr alta precisión."], ["Punto de comprobación", "un blanco medido que se usa solo para probar la precisión de un mapa."], ["Informe de procesamiento", "el resumen que produce el software de unión sobre la calidad de un mapa."]],
          slides: [
            { title: "Confiar antes de actuar", bullets: ["GNSS normal: unos metros de error", "Sirve para zonas, no para surcos", "Las series de tiempo deben encajar"] },
            { title: "Mejorar la precisión", bullets: ["Puntos de control en tierra (GCP)", "Drones con RTK o PPK", "Puntos de comprobación para probar el resultado"] },
            { title: "Revisar la calidad", bullets: ["Informe de procesamiento y advertencias", "GSD real, desenfoque, huecos", "El mismo método en cada fecha"] }
          ],
          sources: [ODM],
          tryIt: "Abre el informe de procesamiento de un mapa que hayas hecho (o el de un conjunto de datos de muestra). Anota el número de imágenes usadas, el GSD y las advertencias, y decide si el mapa es lo bastante preciso para (a) encontrar zonas húmedas, (b) guiar la resiembra de surcos individuales.",
          youCanNow: "comprobar la precisión y la calidad de un mapa de dron y decidir si sirve para la decisión.",
          quickCheck: [
            { objective: "O1", q: "¿Para qué sirven los puntos de comprobación?", options: ["Para probar la precisión del mapa final, porque no se usan en el procesamiento", "Para aterrizar el dron con seguridad", "Para cargar baterías en el campo", "Para marcar dónde empiezan los trabajadores"], answer: 0, why: "Los puntos de comprobación son blancos medidos extra que se dejan fuera del procesamiento, así puedes medir el error real del mapa." },
            { objective: "O1", q: "Vas a comparar el mapa de este mes con el del mes pasado para guiar trabajo en surcos individuales. ¿Qué revisas primero?", options: ["Solo los colores", "La salud de la batería del dron", "Que los dos mapas sean precisos y encajen uno sobre otro", "Nada; el GNSS normal siempre basta"], answer: 2, why: "El GNSS normal puede tener unos metros de error, así que los mapas para surcos o para comparar en el tiempo deben ser precisos y encajar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Elegir el índice de vegetación correcto",
          minutes: 6,
          goal: "Elegir un índice de vegetación que se ajuste al cultivo, su etapa y la cámara.",
          text: [
            "NDVI = (NIR - Rojo) / (NIR + Rojo) es el índice más conocido (NIR es el infrarrojo cercano); la FAO lo usa desde satélites para seguir la vegetación en toda África. Pero el NDVI tiende a saturarse en follajes densos y sanos, como el maíz maduro, el té o el café: los valores se amontonan cerca del máximo y las pequeñas diferencias desaparecen.",
            "El NDRE usa la banda del borde rojo en lugar del rojo: (NIR - BordeRojo) / (NIR + BordeRojo). Sigue siendo sensible en follajes densos y a menudo muestra diferencias de nitrógeno y clorofila más avanzada la temporada. Con solo una cámara de color, índices como el VARI, (Verde - Rojo) / (Verde + Rojo - Azul), o el Exceso de Verde, 2 x Verde - Rojo - Azul, separan las plantas verdes del suelo y muestran un vigor aproximado; sirven para conteo de plantas y malezas, pero son menos confiables para el estrés.",
            "Elige según la pregunta: población y malezas al inicio de la temporada, un índice RGB o el NDVI; vigor a mitad de temporada en cultivos abiertos, el NDVI; follajes densos y nitrógeno, el NDRE. Elijas lo que elijas, mira también el mapa en color real y confírmalo en el terreno."
          ],
          words: [["Saturación", "cuando un índice deja de cambiar aunque las plantas sigan siendo distintas, como pasa con el NDVI en follajes densos."], ["Borde rojo", "una banda estrecha de luz entre el rojo y el infrarrojo cercano, sensible a la clorofila."], ["NDRE", "índice de diferencia normalizada del borde rojo, más sensible que el NDVI en follajes densos."], ["VARI", "índice de vegetación resistente a la atmósfera en el visible, calculado solo con las bandas RGB."]],
          slides: [
            { title: "El NDVI y su límite", bullets: ["(NIR - Rojo) / (NIR + Rojo)", "Muy usado, también por la FAO", "Se satura en follajes densos"] },
            { title: "Otros índices", bullets: ["NDRE: (NIR - BordeRojo) / (NIR + BordeRojo)", "VARI: (Verde - Rojo) / (Verde + Rojo - Azul)", "Exceso de Verde: 2 x Verde - Rojo - Azul"] },
            { title: "Elige según la pregunta", bullets: ["Población y malezas: índice RGB o NDVI", "Cultivos abiertos a mitad de temporada: NDVI", "Follaje denso y nitrógeno: NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "Para cada caso elige un índice y escribe por qué: (a) conteo de plantas en maíz de 3 semanas con un dron RGB, (b) diferencias de nitrógeno en un follaje cerrado de té con un dron multiespectral, (c) vigor a mitad de temporada en yuca con un dron multiespectral.",
          youCanNow: "elegir un índice de vegetación que se ajuste al cultivo, su etapa y la cámara.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué el NDVI puede no mostrar diferencias pequeñas en maíz maduro, té o café?", options: ["Solo funciona de noche", "Se satura en follajes densos y sanos", "Necesita una cámara térmica", "No usa la banda del infrarrojo cercano"], answer: 1, why: "En follajes densos y sanos, los valores del NDVI se amontonan cerca del máximo, así que las diferencias pequeñas desaparecen." },
            { objective: "O2", q: "Solo tienes una cámara RGB y quieres ver cómo nació el cultivo al inicio de la temporada. ¿Qué índice eliges?", options: ["NDRE", "Un índice térmico", "Ninguno; la RGB no sirve", "Un índice RGB como el VARI o el Exceso de Verde"], answer: 3, why: "Los índices RGB separan las plantas verdes del suelo y sirven para ver la población de plantas y las malezas al inicio de la temporada." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Estadísticas por zona y conteos en QGIS",
          minutes: 6,
          goal: "Medir el área y el índice promedio de cada zona, y contar plantas o árboles.",
          text: [
            "El análisis convierte un mapa de colores en números con los que la gente puede actuar. Primero, crea las zonas: clasifica el mapa del índice en clases (por ejemplo, bajo, medio, alto), conviértelas en polígonos y elimina los fragmentos diminutos; o dibuja las zonas a mano con lo que sabe el agricultor. Calcula el área de cada zona.",
            "Luego usa la herramienta Estadísticas zonales de QGIS para calcular, en cada zona, el promedio, el mínimo, el máximo y la dispersión del índice. Compara las zonas, y compara las mismas zonas en distintas fechas. Una tabla como Zona A: 3.2 ha, NDVI promedio 0.71; Zona C: 0.8 ha, NDVI promedio 0.48 es mucho más fácil de usar que una imagen.",
            "Conteos: en cultivos de árboles (aguacate, mango, café), las copas suelen verse claras en mapas RGB de alto detalle y se pueden contar a mano con puntos, o con complementos y scripts. En cultivos en surcos, cuenta en parcelas de muestra y multiplica. Comprueba siempre una muestra de los conteos en el terreno e informa el error."
          ],
          steps: ["Clasifica el mapa del índice en unas pocas clases, o dibuja las zonas con el agricultor.", "Convierte las clases en polígonos; elimina fragmentos diminutos; calcula el área.", "Ejecuta Estadísticas zonales para el promedio, mínimo, máximo y dispersión de cada zona.", "Cuenta árboles o plantas (puntos, complemento o parcelas de muestra).", "Comprueba los conteos en el terreno e informa el error."],
          words: [["Estadísticas zonales", "números (como el promedio) calculados con los píxeles que hay dentro de cada zona."], ["Polígono", "una figura cerrada en un mapa, como una zona o el límite de un campo."], ["Clasificar", "agrupar los valores de los píxeles en unas pocas clases, como bajo, medio y alto."]],
          slides: [
            { title: "De colores a números", bullets: ["Clasifica el mapa del índice", "Conviértelo en polígonos de zona, quita fragmentos", "Calcula el área de cada zona"] },
            { title: "Estadísticas zonales", bullets: ["Promedio, mínimo, máximo, dispersión por zona", "Compara zonas y fechas", "Zona A: 3.2 ha, NDVI promedio 0.71"] },
            { title: "Conteos", bullets: ["Copas de árboles en mapas RGB de alto detalle", "Cultivos en surcos: parcelas de muestra, multiplica", "Comprueba en el terreno e informa el error"] }
          ],
          sources: [QGIS],
          tryIt: "En QGIS, con tu mapa o una muestra: dibuja o clasifica tres zonas, calcula sus áreas, ejecuta Estadísticas zonales sobre el índice y haz una tabla de zona, área y valor promedio. Si es un cultivo de árboles, cuenta los árboles de una zona.",
          youCanNow: "medir zonas y contar plantas o árboles en QGIS y presentar los resultados en una tabla.",
          quickCheck: [
            { objective: "O3", q: "¿Qué te da una tabla de estadísticas por zona?", options: ["Una imagen más bonita", "El tiempo de vuelo del dron", "La factura del cliente", "Números como el área y el índice promedio de cada zona"], answer: 3, why: "Las estadísticas por zona convierten un mapa de colores en números con los que la gente puede actuar." },
            { objective: "O3", q: "Tu programa contó 1,240 árboles de aguacate. ¿Qué haces antes de informarlo?", options: ["Redondearlo a 1,000", "Comprobar una muestra de los conteos en el terreno e informar el error", "Sumarle un 10% para ir a la segura", "Informarlo sin comprobar"], answer: 1, why: "Los conteos se comprueban con una muestra en el terreno y se informa el error." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Análisis de datos",
        questions: [
          { objective: "O1", q: "¿Para qué sirve un punto de comprobación?", options: ["Para fijar el mapa durante el procesamiento", "Para probar la precisión del mapa final", "Para cargar baterías", "Para aterrizar el dron"], answer: 1, why: "Los puntos de comprobación se miden pero no se usan en el procesamiento, así que prueban el resultado." },
          { objective: "O1", q: "Un mapa tiene unos 3 m de error. Es lo bastante preciso para:", options: ["Guiar la resiembra de surcos individuales", "Medir plantas individuales", "Encontrar una esquina húmeda de un campo", "Nada en absoluto"], answer: 2, why: "Unos metros de error bastan para elementos grandes, no para surcos." },
          { objective: "O2", q: "¿Por qué el NDVI podría mostrar poca diferencia en un follaje de té denso y maduro?", options: ["El NDVI se satura en follajes densos", "El té no tiene hojas", "El dron voló demasiado bajo", "El NDVI solo funciona en el suelo"], answer: 0, why: "En la vegetación densa los valores se amontonan cerca del máximo." },
          { objective: "O2", q: "¿Qué índice se puede calcular solo con una cámara RGB?", options: ["NDRE", "NDVI", "Ninguno", "VARI"], answer: 3, why: "El VARI usa solo las bandas verde, roja y azul." },
          { objective: "O3", q: "Las Estadísticas zonales de QGIS te dan:", options: ["Pronósticos del clima", "Números como el índice promedio de cada zona", "Una licencia de piloto", "Precios de semillas"], answer: 1, why: "Resumen los valores de los píxeles dentro de cada zona." }
        ]
      }
    },
    {
      name: "Capítulo 2: Agricultura de precisión",
      lessons: [
        {
          objectives: ["O4"],
          title: "Armar un mapa de prescripción",
          minutes: 6,
          goal: "Convertir las zonas en un mapa de prescripción con una dosis o tarea para cada zona.",
          text: [
            "Un mapa de prescripción le dice a una máquina o a un trabajador qué hacer en cada zona. Empieza por la causa, no por el color: usa la verificación en campo y, cuando se pueda, análisis de suelo para saber por qué cada zona es distinta. Luego elige una acción por zona: más o menos fertilizante, otra densidad de siembra, resembrar, drenar, deshierbar o no cambiar nada.",
            "Las dosis salen de la agronomía, no del dron. Usa los resultados del análisis de suelo y las recomendaciones locales de tu instituto nacional de investigación o del servicio de extensión para el cultivo y la zona. El mapa solo dice dónde va cada dosis. Mantén pocas dosis (de dos a cuatro) para que sea práctico.",
            "Para las máquinas, exporta las zonas como shapefile o en el formato que acepte el controlador. Para la aplicación a mano, imprime o comparte un mapa de zonas sencillo con la instrucción de cada zona en gramos por hoyo o bultos por zona, y marca las zonas en el campo. Las prescripciones de fumigación o esparcido aplicadas con dron necesitan las aprobaciones de aviación y de plaguicidas que exige tu país."
          ],
          steps: ["Confirma la causa en cada zona (verificación en campo, análisis de suelo).", "Elige una acción por zona.", "Toma las dosis del análisis de suelo y de las recomendaciones locales.", "Mantén de dos a cuatro dosis.", "Exporta para las máquinas, o haz un mapa de zonas impreso con instrucciones para los trabajadores."],
          words: [["Mapa de prescripción", "un mapa que le dice a una máquina o a un trabajador cuánto aplicar, o qué hacer, en cada zona."], ["Shapefile", "un formato de archivo SIG común para zonas y límites."], ["Análisis de suelo", "un estudio de laboratorio de los nutrientes y la acidez del suelo."]],
          slides: [
            { title: "Empieza por la causa", bullets: ["Verifica cada zona en campo", "Análisis de suelo cuando se pueda", "Luego elige una acción"] },
            { title: "Las dosis salen de la agronomía", bullets: ["Análisis de suelo y recomendaciones locales", "El mapa dice dónde, no cuánto", "De dos a cuatro dosis"] },
            { title: "Entrégalo", bullets: ["Máquinas: shapefile o formato del controlador", "Trabajo a mano: mapa impreso, gramos por hoyo", "Fumigar o esparcir con dron: se necesitan aprobaciones"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Con tus tres zonas de la Lección 3, escribe una tabla de prescripción: zona, área, causa probable, acción, dosis (marcada \"según recomendación local\" si no la tienes) y cómo encontrarán la zona los trabajadores.",
          youCanNow: "armar un mapa de prescripción práctico con una dosis o tarea para cada zona.",
          quickCheck: [
            { objective: "O4", q: "¿Qué muestra un mapa de prescripción?", options: ["Solo los colores del NDVI", "El límite de la finca", "Qué aplicar o hacer en cada zona", "Las líneas de vuelo del dron"], answer: 2, why: "Un mapa de prescripción le dice a una máquina o a un trabajador qué hacer en cada zona." },
            { objective: "O4", q: "Una zona se ve débil en el mapa. ¿Qué haces antes de elegir una acción?", options: ["Encontrar la causa con verificación en campo y, si se puede, un análisis de suelo", "Echarle el doble de fertilizante", "Volver a sembrarla de inmediato", "No hacerle caso"], answer: 0, why: "Empieza por la causa, no por el color; la acción depende de por qué la zona es diferente." }
          ]
        },
        {
          objectives: ["O5"],
          title: "¿Es rentable? Un presupuesto parcial sencillo",
          minutes: 6,
          goal: "Calcular con un presupuesto parcial si una acción de precisión es rentable.",
          text: [
            "Un presupuesto parcial compara solo lo que cambia. De un lado: el ingreso extra (más cosecha vendida) y el dinero ahorrado (menos fertilizante donde se desperdiciaba). Del otro: los costos extra (servicio de dron, más insumo en algunas zonas, mano de obra) y el ingreso perdido. Si el primer lado es mayor, el cambio es rentable.",
            "Ejemplo con números de muestra en chelines kenianos (KSh): una finca de maíz de 4 hectáreas paga KSh 6,000 por el mapeo. La prescripción pasa 2 bultos de fertilizante de una zona encharcada de 1 hectárea, donde se desperdiciaban, a una zona promedio de 2 hectáreas, así que no se compra fertilizante extra, y el agricultor espera 5 bultos de maíz extra en esa zona. Beneficio: 5 bultos x el precio local por bulto. Costos: KSh 6,000 del mapeo + la mano de obra para cavar un drenaje a mano. Usa precios locales reales y una estimación de cosecha prudente.",
            "Muestra un rango, porque la cosecha y el precio varían: un caso prudente y un caso probable. Cuenta también los beneficios difíciles de poner en dinero, como el aviso temprano del gusano cogollero. Sé honesto si los números no dan en una finca pequeña; una cooperativa o un servicio compartido puede cambiar la respuesta."
          ],
          steps: ["Haz una lista del ingreso extra y del dinero ahorrado.", "Haz una lista de los costos extra y del ingreso perdido.", "Usa precios locales y estimaciones de cosecha prudentes.", "Calcula un caso prudente y un caso probable.", "Escribe la respuesta con honestidad, con lo que podría cambiarla."],
          words: [["Presupuesto parcial", "una comparación sencilla solo de los costos y beneficios que cambian cuando cambias una cosa."], ["Punto de equilibrio", "el punto en que los beneficios extra igualan justo a los costos extra."]],
          slides: [
            { title: "Solo lo que cambia", bullets: ["Más: ingreso extra, dinero ahorrado", "Menos: costos extra, ingreso perdido", "Si el más es mayor que el menos, es rentable"] },
            { title: "Usa números reales", bullets: ["Precios locales por bulto o kg", "Estimaciones de cosecha prudentes", "Servicio, insumos, mano de obra"] },
            { title: "Sé honesto", bullets: ["Caso prudente y caso probable", "Cuenta los beneficios difíciles de poner en dinero", "¿Finca pequeña? Un servicio compartido puede ayudar"] }
          ],
          tryIt: "Haz el presupuesto parcial del ejemplo con precios reales de tu mercado local (precio del maíz por bulto, precio del fertilizante por bulto, jornal por día). Calcula un caso prudente (3 bultos extra) y un caso probable (5 bultos extra). ¿Es rentable?",
          youCanNow: "usar un presupuesto parcial para mostrar si una acción de precisión es rentable.",
          quickCheck: [
            { objective: "O5", q: "En un presupuesto parcial, ¿qué cuenta como costo?", options: ["El pago por el servicio de mapeo con dron", "La cosecha extra vendida", "El dinero ahorrado en fertilizante", "Un mejor precio por la cosecha"], answer: 0, why: "Los costos extra, como el servicio de drones y la mano de obra, van del lado de los costos." },
            { objective: "O5", q: "Tu caso probable es rentable, pero tu caso prudente pierde dinero. ¿Qué le dices al agricultor?", options: ["Solo el caso probable", "Que siempre es rentable", "Los dos casos, con honestidad, y qué causa la diferencia", "Nada sobre dinero"], answer: 2, why: "La cosecha y los precios varían, así que muestras un rango y eres honesto cuando los números están cerca." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Comunicar los resultados para que los agricultores actúen",
          minutes: 5,
          goal: "Presentar los resultados del análisis de forma corta y clara para que un agricultor actúe.",
          text: [
            "El mejor análisis se desperdicia si el agricultor no lo entiende o no confía en él. Empieza con la respuesta y la acción: \"La Zona C (la esquina baja junto al camino, unos 2 acres) está encharcada. Cava un drenaje antes de abonar. No pongas fertilizante allí esta temporada.\" Luego muestra el mapa con las zonas en colores sencillos y puntos de referencia conocidos.",
            "Usa el medio y el idioma que usa el agricultor: una hoja impresa, una imagen y un mensaje corto por WhatsApp o SMS, o una nota de voz en suajili, hausa, yoruba, igbo u otro idioma local. Usa las unidades locales (acres, bultos, debes, una lata de unos 20 litros) además de hectáreas y kilogramos. Usa pocos números.",
            "Di qué tan seguro estás y qué se confirmó en el terreno. Ofrece recorrer el campo juntos. Acuerden qué se revisará la próxima vez y anota lo que hizo el agricultor, para que el siguiente análisis muestre si funcionó. Mantén privados los datos de los agricultores y compártelos solo con su permiso."
          ],
          steps: ["Escribe primero la respuesta y la acción, zona por zona.", "Muestra un mapa sencillo con puntos de referencia.", "Usa el medio, el idioma y las unidades del agricultor.", "Di qué tan seguro estás y qué se confirmó.", "Acuerda un seguimiento y anota lo que hizo el agricultor."],
          words: [["Punto de referencia", "algo que la gente conoce, como un camino, un árbol, una bodega o un río, que sirve para ubicar lugares."], ["Seguimiento", "una revisión posterior para ver si la acción funcionó."]],
          slides: [
            { title: "Primero la respuesta y la acción", bullets: ["Zona C, esquina baja junto al camino", "Cava un drenaje antes de abonar", "Luego el mapa"] },
            { title: "Su medio, su idioma", bullets: ["Hoja impresa, WhatsApp, SMS, nota de voz", "Suajili, hausa, yoruba, igbo y más", "Acres, bultos, debes además de hectáreas"] },
            { title: "Gana su confianza", bullets: ["Di qué tan seguro estás", "Recorran el campo juntos", "Acuerda el seguimiento; datos privados"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Tarea final: completa tu análisis y escribe el resultado de una página para el agricultor: la precisión y cómo la comprobaste, el índice y por qué, la tabla de zonas y el conteo, el mapa de prescripción, el presupuesto parcial y las acciones en lenguaje sencillo con una fecha de seguimiento.",
          youCanNow: "entregar el análisis del dron como acciones claras y confiables que un agricultor puede seguir.",
          quickCheck: [
            { objective: "O6", q: "¿Cómo debe empezar el resultado para un agricultor?", options: ["Con la fórmula del índice", "Con la respuesta y la acción que debe tomar", "Con el modelo del dron", "Con una tabla larga"], answer: 1, why: "Empezar con la respuesta y la acción ayuda al agricultor a actuar." },
            { objective: "O6", q: "El agricultor lee suajili y usa WhatsApp. ¿Cómo le mandas el resultado?", options: ["Un PDF largo en inglés por correo", "Un archivo de datos sin procesar", "Nada; solo le avisas a la oficina de la plantación", "Una imagen del mapa de zonas con un mensaje corto o una nota de voz en suajili"], answer: 3, why: "Usa el canal y el idioma que usa el agricultor, con pocos números y unidades locales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Agricultura de precisión",
        questions: [
          { objective: "O4", q: "¿De dónde deben salir las dosis de fertilizante de un mapa de prescripción?", options: ["Solo del color del mapa del dron", "Del análisis de suelo y de las recomendaciones agronómicas locales", "De una suposición", "Del fabricante del dron"], answer: 1, why: "El mapa muestra dónde; la agronomía fija cuánto." },
          { objective: "O4", q: "¿Cuántas dosis son prácticas en la mayoría de los mapas de prescripción?", options: ["De dos a cuatro", "Cincuenta", "Una por planta", "Ninguna"], answer: 0, why: "Pocas dosis son fáciles de aplicar para trabajadores y máquinas." },
          { objective: "O5", q: "Un presupuesto parcial compara:", options: ["Todos los costos de la finca en diez años", "Solo los costos y beneficios que cambian", "Solo el precio del dron", "Solo los precios de los cultivos"], answer: 1, why: "Se centra en lo que el cambio añade o quita." },
          { objective: "O6", q: "¿Cuál es la mejor primera frase para el resultado de un agricultor?", options: ["El NDRE promedio del polígono 3 fue 0.31", "El informe de procesamiento tenía 412 imágenes", "Usamos QGIS 3", "La Zona C junto al camino está encharcada: cava un drenaje antes de abonar"], answer: 3, why: "Empieza con la respuesta y la acción en términos conocidos." },
          { objective: "O5", q: "Un presupuesto parcial muestra que el cambio no es rentable en una finca de 1 acre. Debes:", options: ["Cambiar los números", "Ocultar el resultado", "Decirlo con honestidad y considerar un servicio compartido o cooperativo", "Duplicar el precio"], answer: 2, why: "Los resultados honestos generan confianza; compartir puede cambiar la economía." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones agrícolas: análisis de datos y agricultura de precisión",
    questions: [
      { objective: "O1", q: "El GNSS normal de un dron suele ubicar un mapa:", options: ["Perfectamente", "Con unos metros de error", "Con kilómetros de error", "De cabeza"], answer: 1, why: "Sin correcciones, el error de posición es de unos metros." },
      { objective: "O1", q: "Los puntos de control en tierra son:", options: ["Baterías del dron", "Trabajadores del campo", "Blancos marcados en el suelo con coordenadas medidas con precisión", "Un tipo de índice"], answer: 2, why: "Los GCP fijan la posición del mapa durante el procesamiento." },
      { objective: "O1", q: "RTK y PPK son:", options: ["Métodos que corrigen las posiciones del dron para lograr alta precisión", "Enfermedades de cultivos", "Tipos de fertilizante", "Marcas de cámaras"], answer: 0, why: "Corrigen las posiciones GNSS durante o después del vuelo." },
      { objective: "O1", q: "¿Por qué deben encajar los mapas de distintas fechas?", options: ["Por el color", "Para ahorrar almacenamiento", "El software lo exige", "Para comparar los mismos lugares en el tiempo"], answer: 3, why: "Los mapas que no encajan muestran cambios falsos." },
      { objective: "O1", q: "Un informe de procesamiento te dice:", options: ["Precios de los cultivos", "Imágenes usadas, advertencias y GSD", "El nombre del agricultor", "El clima"], answer: 1, why: "Resume la calidad del mapa unido." },
      { objective: "O2", q: "La saturación del NDVI significa que:", options: ["El índice deja de mostrar diferencias en follajes densos", "La cámara está mojada", "La batería está llena", "El mapa tiene huecos"], answer: 0, why: "En la vegetación densa los valores se amontonan cerca del máximo." },
      { objective: "O2", q: "¿Qué banda usa el NDRE en lugar del rojo?", options: ["Azul", "Térmica", "Borde rojo", "Verde"], answer: 2, why: "NDRE = (NIR - BordeRojo) / (NIR + BordeRojo)." },
      { objective: "O2", q: "El Exceso de Verde (2 x Verde - Rojo - Azul) sirve para:", options: ["Medir el pH del suelo", "Pronosticar el clima", "Contar dinero", "Separar las plantas verdes del suelo en imágenes RGB"], answer: 3, why: "Resalta la vegetación verde frente al suelo." },
      { objective: "O2", q: "Para diferencias de nitrógeno en un follaje denso de café, elige:", options: ["Exceso de Verde", "NDRE", "Ningún índice", "Solo térmica"], answer: 1, why: "El NDRE sigue siendo sensible donde el NDVI se satura." },
      { objective: "O2", q: "Uses el índice que uses, también debes:", options: ["Mirar el mapa en color real y confirmar en el terreno", "Borrar las imágenes originales", "Ignorar al agricultor", "Usar una sola fecha para siempre"], answer: 0, why: "Los índices son pistas; la revisión en el terreno confirma." },
      { objective: "O3", q: "Convertir píxeles clasificados en zonas crea:", options: ["Baterías", "Solo puntos", "Polígonos", "Videos"], answer: 2, why: "Las zonas son figuras de polígono con área." },
      { objective: "O3", q: "¿Por qué eliminar los fragmentos diminutos de las zonas?", options: ["Para cambiar el cultivo", "Por el color", "Para usar más almacenamiento", "Los trabajadores no pueden manejar parches diminutos"], answer: 3, why: "Las zonas prácticas son lo bastante grandes para tratarlas." },
      { objective: "O3", q: "Los conteos de árboles hechos con un mapa de dron deben:", options: ["Comprobarse con una muestra en el terreno, informando el error", "Creerse sin revisar", "Duplicarse", "Guardarse en secreto"], answer: 0, why: "La revisión en el terreno muestra qué tan preciso es el conteo." },
      { objective: "O4", q: "Un mapa de prescripción dice:", options: ["Qué dron comprar", "Qué aplicar o hacer en cada zona", "El clima", "El ingreso del agricultor"], answer: 1, why: "Guía a trabajadores o máquinas zona por zona." },
      { objective: "O4", q: "Antes de elegir una acción para una zona débil, debes:", options: ["Fumigarla", "Ponerle el máximo de fertilizante", "Confirmar la causa con verificación en campo y análisis de suelo", "Quitarla del mapa"], answer: 2, why: "La acción debe resolver la causa real." },
      { objective: "O4", q: "Para la aplicación a mano, la mejor forma de dar una prescripción es:", options: ["Solo un shapefile", "Una lista de valores de píxeles", "Solo una hoja de cálculo de coordenadas", "Un mapa de zonas sencillo con gramos por hoyo o bultos por zona"], answer: 3, why: "Los trabajadores necesitan instrucciones sencillas y prácticas." },
      { objective: "O5", q: "En un presupuesto parcial, el dinero ahorrado en fertilizante cuenta como:", options: ["Un beneficio", "Un costo", "Nada", "Ingreso perdido"], answer: 0, why: "Los ahorros van del lado de los beneficios." },
      { objective: "O5", q: "¿Por qué calcular un caso prudente y un caso probable?", options: ["Para confundir al agricultor", "Porque la cosecha y los precios varían", "Lo exige la ley", "Para usar más papel"], answer: 1, why: "Un rango muestra el riesgo con honestidad." },
      { objective: "O6", q: "¿Qué unidades ayudan a muchos pequeños agricultores a entender los resultados?", options: ["Solo kilómetros cuadrados", "Solo píxeles", "Acres, bultos y debes además de hectáreas", "Solo notación científica"], answer: 2, why: "Las unidades conocidas hacen útiles los resultados." },
      { objective: "O6", q: "¿Por qué anotar lo que hizo el agricultor después de tu consejo?", options: ["Para vender sus datos", "Para llenar un formulario", "No sirve", "Para que el siguiente análisis muestre si funcionó"], answer: 3, why: "El seguimiento cierra el ciclo y mejora los consejos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      5,
      8,
      10,
      12,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte del análisis y revísala de nuevo.",
    criteria: [
      {
        name: "Precisión del mapa",
        objective: "O1",
        notYet: "No dice la precisión, o no hay revisión de calidad.",
        meets: "Dice la precisión del mapa y cómo se comprobó, con la calidad de imagen revisada en el informe de procesamiento.",
        exceeds: "Usa puntos de comprobación e informa el error medido."
      },
      {
        name: "Elección del índice",
        objective: "O2",
        notYet: "El índice no está justificado, o no se ajusta al cultivo o a la cámara.",
        meets: "El índice se ajusta al cultivo, la etapa y la cámara, con una razón corta.",
        exceeds: "Compara dos índices y muestra por qué eligió uno."
      },
      {
        name: "Zonas y conteos",
        objective: "O3",
        notYet: "No hay estadísticas por zona, o los conteos no están comprobados.",
        meets: "El área y el índice promedio de cada zona, y un conteo de plantas o árboles comprobado con una muestra en el terreno.",
        exceeds: "Compara las mismas zonas en dos fechas."
      },
      {
        name: "Mapa de prescripción",
        objective: "O4",
        notYet: "Las dosis son adivinadas o hay demasiadas dosis.",
        meets: "De dos a cuatro dosis o tareas por zona, de recomendaciones locales, ligadas a causas confirmadas en el terreno.",
        exceeds: "Exportado en un formato que pueden usar la máquina o los trabajadores."
      },
      {
        name: "Presupuesto parcial",
        objective: "O5",
        notYet: "No hay presupuesto, o cuenta cosas que no cambian.",
        meets: "Un presupuesto parcial con un caso prudente y un caso probable, con precios locales.",
        exceeds: "Anota los beneficios difíciles de poner en dinero y cuándo ayudaría un servicio compartido."
      },
      {
        name: "Resultado para el agricultor",
        objective: "O6",
        notYet: "Tiene más de una página o empieza con detalles técnicos.",
        meets: "Una página que empieza por la acción, en lenguaje sencillo y unidades locales, con qué tan seguro estás.",
        exceeds: "Preparado en el idioma y el canal del propio agricultor, con una revisión de seguimiento acordada."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del análisis",
      "Participantes que dicen haber entregado un mapa de prescripción o un informe por zonas a un agricultor o una plantación en un plazo de 60 días (encuesta de seguimiento)",
      "Agricultores o plantaciones que dicen haber actuado según un resultado del dron y haber anotado lo que pasó",
      "Participantes que toman otro curso de drones o de agricultura de precisión"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una laptop con QGIS gratuito instalado",
      "Un conjunto de datos de dron de un campo real, o un conjunto de datos de muestra gratuito",
      "Las dosis recomendadas locales de extensión o de investigación, y los precios locales de insumos y cosechas",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo para completar el análisis y el resultado para el agricultor"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego hagan en vivo en QGIS el paso de estadísticas por zona con un conjunto de datos de muestra compartido.",
      "No des tú las dosis de fertilizante ni de semilla; trae las dosis de extensión o de investigación para el cultivo local.",
      "Recuerda que aplicar prescripciones de fumigación o de esparcido con dron necesita aprobaciones de aviación y de plaguicidas.",
      "Usa solo datos de fincas que el agricultor aceptó compartir, y quita los nombres de los ejemplos de clase.",
      "Califica el análisis con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

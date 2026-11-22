"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-data-technology.js. See scripts/koachlearn-courses/README.md, "Translations".

const KMD = { name: "Departamento Meteorológico de Kenia (KMD): pronósticos y boletines agrometeorológicos", url: "https://meteo.go.ke" };
const NIMET = { name: "Agencia Meteorológica de Nigeria (NiMet)", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (imágenes satelitales Sentinel gratuitas)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS Observación de la Tierra (mapas de lluvia, NDVI y estrés agrícola)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Organización de Investigación Agrícola y Ganadera de Kenia (KALRO)", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (formularios gratuitos para recolectar datos)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Oficina del Comisionado de Protección de Datos (Kenia)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Comisión de Protección de Datos de Nigeria (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology-es",
  lang: "es",
  translationOf: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Datos y tecnología agrícola",
  skills: "Encontrar y comprobar información agrícola confiable, Recolectar datos de la finca en el teléfono, Usar información gratuita del clima y de satélites, Analizar los registros de la finca en una hoja de cálculo, Usar asistentes de IA con responsabilidad para preguntas agrícolas, Proteger los datos de tu finca",
  outcome: "usar un teléfono inteligente económico para recolectar los datos de tu finca, añadir información gratuita del clima y de satélites, analizarla en una hoja de cálculo para tomar una mejor decisión, comprobar los consejos de apps y herramientas de IA con fuentes confiables y mantener tus datos seguros.",
  about: [
    "Este curso es para agricultores, jóvenes emprendedores agrícolas, líderes de grupos de productores y cooperativas, y extensionistas de Kenia, Nigeria y toda África que tienen un teléfono inteligente (aunque sea económico) y quieren usarlo para trabajar mejor la tierra. No necesitas computadora, aunque una te ayuda en el Capítulo 2.",
    "El Capítulo 1 trata de recolectar información: encontrar consejos agrícolas confiables y evitar estafas, registrar los datos de tu propia finca en el teléfono y usar pronósticos del clima y mapas satelitales gratuitos. El Capítulo 2 trata de usar la información: analizar tus registros en una hoja de cálculo gratuita, hacer buenas preguntas agrícolas a asistentes de IA y comprobar sus respuestas, y proteger tus datos.",
    "En todo el curso se usan herramientas gratuitas: Google Sheets o la versión web gratuita de Microsoft Excel, herramientas gratuitas de formularios, los servicios meteorológicos nacionales, los mapas de observación de la Tierra de la FAO (la agencia de las Naciones Unidas para la agricultura) y asistentes de IA gratuitos. Cada lección termina con una tarea. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Prepara una hoja de datos de la finca para una temporada (parcelas, cultivos, variedades, fechas de siembra, insumos y costos, notas de lluvia o pronóstico, notas de monitoreo, cosecha y ventas), llénala con datos reales o de ejemplo de al menos tres parcelas, haz un gráfico que compare las parcelas, escribe una decisión que tomarás para la próxima temporada gracias a ese gráfico y anota qué fuentes consultaste y cómo mantienes los datos seguros.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Agricultores, jóvenes emprendedores agrícolas, líderes de grupos de agricultores y de cooperativas, y extensionistas en Kenia, Nigeria y en toda África que tienen un teléfono inteligente, aunque sea económico, y quieren usarlo para producir mejor.",
    startingPoint: "La mayoría usa el teléfono para llamar, para el dinero móvil, WhatsApp y Facebook, y recibe consejos agrícolas de vecinos, agroveterinarias, la radio y grupos en redes sociales. Pocos llevan registros escritos de la finca, usan una hoja de cálculo, leen pronósticos oficiales o mapas satelitales, o comprueban los consejos de la IA y de las apps con una fuente confiable.",
    gap: "Sin registros propios, los agricultores no pueden ver qué parcela, variedad o práctica de verdad deja ganancia, y los consejos equivocados, los insumos falsos y las estafas con datos les cuestan dinero. Registrar, analizar y comprobar información en el teléfono que ya tienen les ayuda a tomar mejores decisiones, mostrar su historial a prestamistas y compradores, y mantener seguros sus datos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; cada término de tecnología se explica",
      "Dispositivos: un teléfono inteligente económico con pocos datos móviles; una computadora solo ayuda en el capítulo 2",
      "Red: la cobertura es irregular en las zonas rurales, así que importan los formularios sin conexión y las hojas guardadas",
      "Tiempo: lecciones cortas que caben entre las tareas de la finca",
      "Privacidad y estafas: nunca escribas PIN, números de identificación ni datos bancarios en apps, hojas o herramientas de IA"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los teléfonos inteligentes debe saber antes abrir una app y escribir un mensaje."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante un consejo agrícola que llega por un mensaje, una app o un vecino", action: "comprobar quién lo dice, si sirve para tu zona y tu cultivo, si es reciente y si te quieren vender algo", standard: "antes de gastar dinero, y detectando cualquier señal de estafa" },
    { id: "O2", condition: "Con una hoja de cálculo o una app de formularios gratuita en tu teléfono", action: "armar una hoja de datos de la finca con una fila por evento y un nombre fijo para cada parcela", standard: "con al menos las columnas de fecha, parcela, actividad, cantidad y costo" },
    { id: "O3", condition: "Para tu zona y tu temporada", action: "encontrar el pronóstico oficial del clima y un mapa gratuito de satélite o de lluvia, y anotar en tu hoja de la finca lo que muestran", standard: "con la fuente y la fecha" },
    { id: "O4", condition: "Con registros de al menos tres parcelas", action: "calcular con fórmulas el rendimiento y la ganancia por acre, hacer un gráfico de barras y escribir una decisión para la próxima temporada", standard: "con sumas correctas y la decisión basada en los números" },
    { id: "O5", condition: "Con un asistente de IA gratuito", action: "escribir una pregunta agrícola clara y comprobar la respuesta con el extensionista, una agroveterinaria o la etiqueta", standard: "antes de actuar, y sin escribir información privada" },
    { id: "O6", condition: "Cuando una app, un comprador o un grupo te pide datos de la finca", action: "decidir qué compartir, con quién y por qué, y proteger el resto", standard: "respetando tus derechos de protección de datos en tu país y pidiendo permiso a los demás" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Recolectar buena información",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar información agrícola confiable",
          minutes: 5,
          goal: "Juzgar si un consejo agrícola es confiable antes de seguirlo.",
          text: [
            "Los agricultores reciben consejos de muchos lugares: extensionistas, institutos de investigación como KALRO en Kenia, los programas de desarrollo agrícola de los estados de Nigeria, la FAO y los centros del CGIAR, agroveterinarias, programas de radio y televisión, servicios por SMS y apps, grupos de WhatsApp y Facebook, y vecinos. Algunos consejos son excelentes; otros son falsos, viejos o quieren venderte algo.",
            "Haz cuatro preguntas sobre cualquier consejo: ¿Quién lo dice y sabe del tema (un instituto de investigación o un técnico capacitado, o una cuenta desconocida)? ¿Sirve para mi zona y mi cultivo? ¿Es reciente? ¿Me quieren vender algo? Comprueba los consejos importantes con una segunda fuente confiable antes de gastar dinero.",
            "Cuidado con las estafas: semillas y fertilizantes falsos, productos \"milagrosos\", empleos o subsidios falsos que piden una cuota, y mensajes que se hacen pasar por un programa del gobierno y piden el PIN de tu dinero móvil. Compra insumos a distribuidores registrados y denuncia los productos falsos ante la autoridad correspondiente."
          ],
          steps: ["Pregunta: ¿quién lo dice y sabe del tema?", "Pregunta: ¿sirve para mi zona y mi cultivo, y es reciente?", "Pregunta: ¿me quieren vender algo?", "Compruébalo con una segunda fuente confiable antes de gastar dinero.", "Compra insumos a distribuidores registrados; nunca compartas tu PIN."],
          words: [["Extensionista", "un asesor capacitado del gobierno o de un proyecto que ayuda a los agricultores."], ["Instituto de investigación", "una organización que prueba y desarrolla métodos de cultivo y variedades, como KALRO."], ["Estafa", "un engaño para quitarte dinero o información."]],
          slides: [
            { title: "Muchas fuentes", bullets: ["Extensión, institutos de investigación, FAO, CGIAR", "Agroveterinarias, radio, SMS y apps", "Grupos en redes sociales y vecinos"] },
            { title: "Cuatro preguntas", bullets: ["¿Quién lo dice y sabe del tema?", "¿Para mi zona y mi cultivo?", "¿Es reciente?", "¿Me quieren vender algo?"] },
            { title: "Cuidado con las estafas", bullets: ["Semillas y fertilizantes falsos, productos milagrosos", "Subsidios o empleos que piden una cuota", "Nunca compartas tu PIN"] }
          ],
          sources: [KALRO],
          tryIt: "Busca un consejo agrícola que viste hace poco (en la radio, en WhatsApp o de un vendedor). Responde las cuatro preguntas sobre él y compruébalo con una segunda fuente confiable. Escribe si lo vas a seguir.",
          youCanNow: "juzgar si un consejo agrícola es confiable y reconocer las estafas comunes.",
          quickCheck: [
            { objective: "O1", q: "¿Qué pregunta te ayuda a juzgar un consejo agrícola?", options: ["¿A cuántas personas les gustó la publicación?", "¿Sirve para mi zona y mi cultivo, y es reciente?", "¿El mensaje es largo?", "¿Tiene muchas fotos?"], answer: 1, why: "Revisar quién lo dice, si sirve para tu zona y tu cultivo, y si es reciente muestra si el consejo es confiable." },
            { objective: "O1", q: "Un mensaje dice que ganaste un apoyo agrícola y te pide el PIN de tu dinero móvil. ¿Qué haces?", options: ["Mandar el PIN rápido", "Pagar primero una pequeña cuota", "Tratarlo como estafa y no compartir el PIN", "Reenviarlo a tu grupo para que todos se inscriban"], answer: 2, why: "Los programas reales nunca te piden el PIN ni una cuota para entregar un apoyo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Registrar los datos de tu finca en el teléfono",
          minutes: 6,
          goal: "Armar un sistema sencillo en el teléfono para registrar parcelas, insumos, monitoreo y cosecha.",
          text: [
            "Tus propios registros son los datos más valiosos que tienes, porque hablan de tu finca. Una app de hojas de cálculo (Google Sheets o Microsoft Excel, las dos gratis en el teléfono) funciona bien: una fila por evento, con columnas como fecha, parcela, cultivo, actividad, cantidad, costo y notas.",
            "Ponle a cada parcela un nombre corto o un número y no lo cambies. Guarda un punto GPS o un límite aproximado de cada parcela (muchas apps de mapas te dejan marcar un punto y compartir sus coordenadas). Toma fotos de los problemas y nómbralas con la fecha y la parcela. Para grupos y cooperativas, herramientas gratuitas de formularios como KoboToolbox permiten que muchos miembros llenen el mismo formulario en su teléfono, incluso sin conexión, y lo envíen cuando tengan señal.",
            "Hazlo tan sencillo que puedas repetirlo siempre. Cinco columnas llenas cada semana valen más que veinte columnas llenas una sola vez. Haz copias de seguridad de la hoja (la mayoría de las hojas en la nube se guardan solas) y no pongas en ella números privados como PIN o números de identificación."
          ],
          steps: ["Abre una app gratuita de hojas de cálculo y crea columnas: fecha, parcela, cultivo, actividad, cantidad, costo, notas.", "Ponle nombre a cada parcela y guarda un punto GPS de ella.", "Añade una fila cada vez que siembres, apliques insumos, monitorees, coseches o vendas.", "Nombra las fotos con la fecha y la parcela.", "Para grupos: considera un formulario compartido que funcione sin conexión."],
          words: [["Hoja de cálculo", "una tabla de filas y columnas en el teléfono o la computadora para registrar y calcular."], ["Punto GPS", "un lugar guardado en un mapa con sus coordenadas."], ["Sin conexión", "que funciona sin internet."]],
          slides: [
            { title: "Tus propios datos valen oro", bullets: ["Hablan de TU finca", "Una fila por evento"] },
            { title: "Columnas para empezar", bullets: ["Fecha, parcela, cultivo, actividad", "Cantidad, costo, notas"] },
            { title: "Buenos hábitos", bullets: ["Siempre los mismos nombres de parcela", "Un punto GPS por parcela, fotos con fecha", "Tan sencillo que lo hagas cada semana"] },
            { title: "Grupos y seguridad", bullets: ["Formularios compartidos sin conexión, como KoboToolbox", "Copias de seguridad; nada de PIN ni números de identificación"] }
          ],
          sources: [KOBO],
          tryIt: "Crea la hoja de tu finca en el teléfono con las siete columnas. Añade tus parcelas y al menos cinco filas con actividades reales de esta temporada. Marca un punto GPS de una parcela y guarda sus coordenadas en las notas.",
          youCanNow: "registrar en el teléfono, de forma constante, las actividades, los insumos y la cosecha de tu finca.",
          quickCheck: [
            { objective: "O2", q: "En una hoja de datos de la finca, ¿qué es una fila?", options: ["Un evento, como una siembra o una venta", "Una temporada completa", "Un cultivo para todos los años", "Un número de teléfono"], answer: 0, why: "Una fila por evento, con fecha, parcela, actividad, cantidad y costo, hace que los registros sean fáciles de sumar." },
            { objective: "O2", q: "Tu grupo de agricultores quiere que los socios manden reportes de monitoreo desde zonas con mala señal. ¿Qué podrían usar?", options: ["Una llamada larga cada semana", "Notas en papel que se quedan en casa", "Una app diferente para cada socio", "Una herramienta de formularios compartidos como KoboToolbox, que funciona sin conexión"], answer: 3, why: "Herramientas de formularios como KoboToolbox permiten que muchos socios llenen el mismo formulario sin conexión y lo manden cuando tengan señal." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar información gratuita del clima y de satélites",
          minutes: 6,
          goal: "Usar pronósticos oficiales y mapas satelitales gratuitos para tomar decisiones en la finca.",
          text: [
            "Los servicios meteorológicos nacionales publican pronósticos para agricultores: en Kenia, el Departamento Meteorológico de Kenia (KMD) publica pronósticos de temporada y boletines agrometeorológicos; en Nigeria, NiMet publica predicciones climáticas de temporada y pronósticos. Anota en la hoja de tu finca lo que dicen para tu zona, con la fecha, para ver después cómo se cumplió en tu temporada.",
            "La información satelital gratuita también ayuda. Las páginas de observación de la Tierra de la FAO muestran mapas de lluvia, vegetación (NDVI) y estrés agrícola por país y región, útiles para saber si una sequía es local o extendida. El Copernicus Browser muestra imágenes satelitales gratuitas de Sentinel-2 cada pocos días, con unos 10 metros por píxel: suficiente para ver la forma de los campos y si un campo grande está más verde o más café que el mes pasado.",
            "Si puedes, mide la lluvia tú mismo con un pluviómetro sencillo y anótala todos los días. Tu propio registro de lluvia, junto a tus fechas de siembra y rendimientos, muestra pronto qué funciona en tu finca."
          ],
          steps: ["Busca el pronóstico del servicio meteorológico nacional para tu zona.", "Escríbelo en la hoja de tu finca con la fecha.", "Mira los mapas de observación de la Tierra de la FAO para tu país.", "Busca tu finca en el Copernicus Browser y compara dos fechas.", "Si puedes, anota la lluvia diaria con un pluviómetro sencillo."],
          words: [["Boletín agrometeorológico", "un informe del clima escrito para agricultores."], ["Imagen satelital", "una foto de la Tierra tomada desde el espacio."], ["Pluviómetro", "un recipiente sencillo con una escala que mide la lluvia."]],
          slides: [
            { title: "Pronósticos oficiales", bullets: ["Kenia: pronósticos de temporada y boletines del KMD", "Nigeria: NiMet", "Anótalos en tu hoja con la fecha"] },
            { title: "Información satelital gratuita", bullets: ["FAO: mapas de lluvia, NDVI y estrés", "Copernicus Browser: Sentinel-2, unos 10 m", "¿La sequía es local o extendida?"] },
            { title: "Tu propio pluviómetro", bullets: ["Anota la lluvia todos los días", "Compárala con fechas de siembra y rendimientos"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Busca el pronóstico de esta temporada para tu zona y escríbelo en la hoja de tu finca. Luego busca tu zona en los mapas de observación de la Tierra de la FAO o en el Copernicus Browser y escribe algo que notes.",
          youCanNow: "usar pronósticos oficiales y mapas satelitales gratuitos junto con los registros de tu finca.",
          quickCheck: [
            { objective: "O3", q: "¿De dónde vienen los pronósticos estacionales oficiales para los agricultores de Nigeria?", options: ["De una página de Facebook", "De una empresa de semillas", "De un vecino", "De NiMet"], answer: 3, why: "NiMet publica las predicciones climáticas estacionales y los pronósticos de Nigeria." },
            { objective: "O3", q: "Quieres saber si una temporada sin lluvia afecta solo a tu finca o a toda la región. ¿Qué revisas?", options: ["La batería de tu teléfono", "Los mapas de lluvia y vegetación de observación de la Tierra de la FAO", "Un anuncio de radio", "El sobre de semilla del año pasado"], answer: 1, why: "Los mapas de observación de la Tierra de la FAO muestran la lluvia, la vegetación y el estrés de países y regiones." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Recolectar buena información",
        questions: [
          { objective: "O1", q: "Un mensaje de WhatsApp promueve un \"fertilizante milagroso\" de un vendedor desconocido. Debes:", options: ["Comprarlo rápido antes de que se acabe", "Consultar a una fuente confiable, como un extensionista, antes de gastar", "Reenviarlo a todos", "Mandar tu PIN para pedirlo"], answer: 1, why: "Los vendedores desconocidos y las promesas milagrosas son señales de alerta." },
          { objective: "O2", q: "¿Qué columna es útil en una hoja de datos de la finca?", options: ["El PIN de tu dinero móvil", "Tu número de identificación", "Fecha, parcela y actividad", "Tu contraseña"], answer: 2, why: "Los registros necesitan eventos, no números privados." },
          { objective: "O2", q: "¿Por qué ponerle a cada parcela un nombre fijo?", options: ["Para poder comparar los registros con el tiempo", "Se ve bonito", "El teléfono lo exige", "No sirve de nada"], answer: 0, why: "Los nombres constantes te permiten sumar y comparar parcelas." },
          { objective: "O3", q: "¿Qué muestran las imágenes gratuitas de Sentinel-2 en el Copernicus Browser?", options: ["Insectos uno por uno", "El saldo de tu banco", "El clima del próximo año", "Campos a unos 10 metros por píxel cada pocos días"], answer: 3, why: "Son gratuitas, frecuentes y de detalle bastante grueso." },
          { objective: "O3", q: "¿Por qué anotar el pronóstico en la hoja de tu finca con la fecha?", options: ["Para compararlo después con lo que pasó de verdad en tu finca", "El servicio meteorológico lo exige", "Para compartirlo con compradores", "Para llenar espacio"], answer: 0, why: "Con las temporadas aprendes cómo se ajustan los pronósticos a tu finca." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la información para decidir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Analizar tus registros en una hoja de cálculo",
          minutes: 6,
          goal: "Calcular el rendimiento y la ganancia por parcela y hacer un gráfico para compararlas.",
          text: [
            "Los registros se vuelven útiles cuando los sumas. En tu hoja de cálculo, haz una tabla resumen: una fila por parcela con su tamaño, costo total, cosecha e ingreso, y luego el rendimiento por acre y la ganancia por acre (un acre es unas 0.4 hectáreas). Las hojas de cálculo hacen las cuentas con fórmulas sencillas, por ejemplo =SUM para sumar los costos y una división para obtener el rendimiento por acre.",
            "Después haz un gráfico. Selecciona los nombres de las parcelas y el rendimiento por acre (o la ganancia por acre) e inserta un gráfico de barras. Un gráfico hace fácil ver las diferencias y explicarlas a la familia, a un grupo o a quien te presta dinero.",
            "Busca las razones: ¿la mejor parcela recibió estiércol, se sembró antes, tenía otra variedad o más lluvia? ¿La parcela más débil tuvo plagas o encharcamiento? Escribe una decisión para la próxima temporada y sigue registrando para poder ponerla a prueba."
          ],
          steps: ["Haz una tabla resumen: parcela, tamaño, costo total, cosecha, ingreso.", "Usa =SUM para los totales y divide para obtener rendimiento y ganancia por acre.", "Selecciona los nombres de las parcelas y el rendimiento por acre; inserta un gráfico de barras.", "Busca las razones en tus notas.", "Escribe una decisión para la próxima temporada."],
          words: [["Fórmula", "una instrucción en una celda de la hoja de cálculo que calcula, como =SUM(B2:B10)."], ["Rendimiento por acre", "lo que produjo una parcela dividido entre su tamaño."], ["Gráfico de barras", "un gráfico con barras que comparan cantidades."]],
          slides: [
            { title: "Súmalo todo", bullets: ["Una fila por parcela", "Tamaño, costo, cosecha, ingreso", "Rendimiento y ganancia por acre"] },
            { title: "Deja que la hoja haga las cuentas", bullets: ["=SUM para los totales", "Divide para las cifras por acre"] },
            { title: "Haz un gráfico", bullets: ["Nombres de parcela + rendimiento por acre", "Inserta un gráfico de barras", "Fácil de explicar a otros"] },
            { title: "Busca razones, decide", bullets: ["¿Estiércol, fecha, variedad, lluvia, plagas?", "Una decisión para la próxima temporada"] }
          ],
          tryIt: "Haz la tabla resumen de al menos tres parcelas (con números reales o de ejemplo), calcula con fórmulas el rendimiento y la ganancia por acre, inserta un gráfico de barras y escribe una decisión para la próxima temporada.",
          youCanNow: "analizar los registros de la finca en una hoja de cálculo y usar un gráfico para comparar parcelas y decidir.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es la ganancia por acre?", options: ["Solo la cosecha total", "Solo el costo total", "El ingreso menos el costo, dividido entre el tamaño de la parcela en acres", "El precio por costal"], answer: 2, why: "La ganancia por acre toma el ingreso menos el costo y lo divide entre el tamaño de la parcela, para poder comparar parcelas de distinto tamaño." },
            { objective: "O4", q: "Tu tabla de resumen muestra que una parcela dio mucho más maíz. ¿Qué haces ahora?", options: ["Buscar las razones, como el estiércol o la fecha de siembra, y escribir una decisión", "Borrar las otras parcelas de la hoja", "Dejar de llevar registros", "Sembrar solo esa parcela para siempre sin comprobar nada"], answer: 0, why: "Encontrar las razones y escribir una decisión que puedas poner a prueba la próxima temporada convierte los registros en mejores cosechas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar asistentes de IA para preguntas agrícolas, con responsabilidad",
          minutes: 5,
          goal: "Hacerle a un asistente de IA una pregunta agrícola clara y comprobar la respuesta antes de actuar.",
          text: [
            "Los asistentes de IA gratuitos como ChatGPT, Microsoft Copilot y Google Gemini pueden explicar ideas de cultivo, ayudar a planear una temporada, redactar un mensaje para un comprador, traducir o ayudar a armar una fórmula de hoja de cálculo. Pregunta con claridad: di tu cultivo, zona, temporada, tamaño de la finca y lo que quieres, por ejemplo: \"Siembro 2 acres de maíz en Bungoma. Las lluvias cortas empiezan en octubre. Hazme una lista semanal sencilla desde la preparación del terreno hasta la cosecha. Usa frases cortas.\"",
            "La IA puede equivocarse, estar desactualizada o dar consejos para otro país. Puede nombrar productos que no están registrados en tu país o dosis equivocadas. Nunca sigas un consejo de la IA sobre plaguicidas, dosis de fertilizante, medicinas para animales o dinero sin comprobarlo con tu extensionista, tu agroveterinaria, la etiqueta del producto u otra fuente confiable.",
            "No escribas información privada en un asistente de IA: tu número de identificación, el PIN de tu dinero móvil, tus datos bancarios ni datos personales de otras personas. Usa la IA como un punto de partida útil, no como la última palabra."
          ],
          steps: ["Di tu cultivo, zona, temporada, tamaño de la finca y lo que quieres.", "Pide frases cortas o una lista de pasos.", "Haz preguntas de seguimiento para mejorar la respuesta.", "Comprueba con una fuente confiable los consejos sobre plaguicidas, fertilizantes, medicinas y dinero.", "Nunca escribas tu PIN, tu número de identificación ni tus datos bancarios."],
          words: [["Asistente de IA", "un programa de computadora con el que conversas con palabras de todos los días y que escribe respuestas."], ["Prompt", "lo que escribes o dices a un asistente de IA."]],
          slides: [
            { title: "En qué puede ayudar la IA", bullets: ["Explicar ideas, planear una temporada", "Redactar mensajes, traducir", "Armar fórmulas de hoja de cálculo"] },
            { title: "Pregunta con claridad", bullets: ["Cultivo, zona, temporada, tamaño de la finca", "Qué quieres y cómo", "Frases cortas, lista de pasos"] },
            { title: "Comprueba antes de actuar", bullets: ["Plaguicidas, dosis, medicinas, dinero", "Extensionista, agroveterinaria, etiqueta", "La IA puede equivocarse o hablar de otro país"] },
            { title: "Deja fuera los datos privados", bullets: ["Nada de PIN, identificación ni números bancarios", "Nada de datos de otras personas"] }
          ],
          tryIt: "Pídele a un asistente de IA gratuito una lista semanal para tu cultivo principal de esta temporada, usando el modelo de prompt de esta lección. Marca cada punto que haya que comprobar con una fuente confiable y comprueba uno de ellos.",
          youCanNow: "hacerle a un asistente de IA una pregunta agrícola clara y comprobar su respuesta antes de actuar.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es una pregunta agrícola clara para un asistente de IA?", options: ["\"Siembro 1 acre de frijol en Kakamega. Las lluvias largas empiezan en marzo. Dame una lista corta para la siembra.\"", "\"agricultura\"", "\"Dime todo sobre los cultivos.\"", "\"¿frijol?\""], answer: 0, why: "Da el cultivo, la zona, la temporada, el tamaño de la finca y lo que quieres." },
            { objective: "O5", q: "Un asistente de IA te da una dosis de fertilizante para tu cultivo. ¿Qué haces?", options: ["Usarla hoy", "Duplicarla para ir a la segura", "Comprobarla con tu extensionista, una agroveterinaria o la etiqueta", "Publicarla en tu grupo como un hecho"], answer: 2, why: "La IA puede dar dosis equivocadas o consejos de otro país, así que primero hay que comprobar las dosis." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger y compartir los datos de tu finca",
          minutes: 5,
          goal: "Decidir qué datos de la finca compartir y con quién, y mantener seguro el resto.",
          text: [
            "Los datos de tu finca tienen valor: compradores, prestamistas, aseguradoras, empresas de insumos y apps pueden quererlos. Compartirlos puede ayudarte a conseguir un préstamo, un seguro o un contrato, pero debes saber qué compartes, por qué y con quién. Lee lo que una app o un programa dice que hará con tus datos y di que no si no te sientes cómodo.",
            "Las leyes de protección de datos te dan derechos sobre tus datos personales. En Kenia, la Ley de Protección de Datos de 2019 está a cargo de la Oficina del Comisionado de Protección de Datos (ODPC); en Nigeria, la Ley de Protección de Datos de Nigeria de 2023 está a cargo de la Comisión de Protección de Datos de Nigeria (NDPC). Si recolectas datos de otros agricultores, por ejemplo como líder de un grupo, también debes respetar sus derechos: pide su consentimiento y mantén los datos seguros.",
            "Mantén seguros tu teléfono y tus hojas: bloqueo de pantalla, contraseñas fuertes en tus cuentas, copias de seguridad y cuidado con los teléfonos compartidos. Comparte resúmenes (como el rendimiento por acre) en lugar de todo cuando eso sea suficiente."
          ],
          steps: ["Antes de compartir, pregunta: ¿qué, por qué, con quién y qué gano yo?", "Lee las condiciones de datos de la app o del programa.", "Pide el consentimiento de otros agricultores antes de recolectar sus datos.", "Bloquea tu teléfono; usa contraseñas fuertes; haz copias de seguridad.", "Cuando puedas, comparte resúmenes en lugar de todos los detalles."],
          words: [["Datos personales", "información sobre una persona que se puede identificar."], ["Consentimiento", "un sí claro después de entender qué pasará con los datos."], ["Ley de protección de datos", "una ley que controla cómo se pueden recolectar y usar los datos personales."]],
          slides: [
            { title: "Tus datos tienen valor", bullets: ["Compradores, prestamistas, aseguradoras y apps los quieren", "Compartir puede ayudar: préstamos, seguros, contratos", "Sabe qué, por qué y con quién"] },
            { title: "Tus derechos", bullets: ["Kenia: Ley de Protección de Datos 2019, ODPC", "Nigeria: Ley de Protección de Datos 2023, NDPC", "Respeta también los datos de otros agricultores"] },
            { title: "Mantenlos seguros", bullets: ["Bloqueo de pantalla, contraseñas fuertes, copias", "Cuidado con los teléfonos compartidos", "Comparte resúmenes cuando basten"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Tarea final: completa la hoja de datos de la temporada para al menos tres parcelas, haz un gráfico de comparación, escribe una decisión para la próxima temporada, haz una lista de las fuentes que consultaste y escribe tres pasos que sigues para mantener los datos seguros.",
          youCanNow: "recolectar, analizar, compartir y proteger los datos de tu finca para tomar mejores decisiones.",
          quickCheck: [
            { objective: "O6", q: "¿Qué organismo supervisa la protección de datos en Kenia?", options: ["El Departamento Meteorológico de Kenia", "La Oficina del Comisionado de Protección de Datos (ODPC)", "KALRO", "Tu compañía de telefonía móvil"], answer: 1, why: "La Ley de Protección de Datos de 2019 de Kenia está supervisada por la ODPC." },
            { objective: "O6", q: "Un prestamista quiere ver cómo le va a tu finca. ¿Qué compartes?", options: ["La contraseña de tu teléfono", "El PIN de tu dinero móvil", "Todos los datos personales de los socios", "Un resumen, como el rendimiento por acre, después de leer cómo lo van a usar"], answer: 3, why: "Muchas veces basta con un resumen, y debes saber qué compartes, por qué y con quién." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la información para decidir",
        questions: [
          { objective: "O4", q: "¿Qué fórmula de hoja de cálculo suma una columna de costos?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM suma un rango de celdas." },
          { objective: "O4", q: "La parcela A dio 900 kg en medio acre. Su rendimiento por acre es:", options: ["90 kg", "450 kg", "900 kg", "1,800 kg"], answer: 3, why: "900 dividido entre 0.5 acres son 1,800 kg por acre." },
          { objective: "O5", q: "Un asistente de IA sugiere un plaguicida y una dosis. Debes:", options: ["Fumigar de inmediato", "Duplicar la dosis para estar seguro", "Compartirle tu PIN", "Comprobar el registro y la dosis con el extensionista, una agroveterinaria o la etiqueta"], answer: 3, why: "La IA puede nombrar productos y dosis equivocados o no registrados." },
          { objective: "O5", q: "¿Qué NO es seguro escribir en un asistente de IA?", options: ["Tu cultivo y tu zona", "El PIN de tu dinero móvil", "Las fechas de tu temporada", "El tamaño de tu finca"], answer: 1, why: "El PIN y los números de identificación deben quedar en privado." },
          { objective: "O6", q: "Como líder de grupo que recolecta datos de la finca de los miembros, debes:", options: ["Pedir su consentimiento y mantener los datos seguros", "Vendérselos a compradores", "Publicarlos en internet", "Recolectar todo lo posible"], answer: 0, why: "Las leyes de protección de datos protegen los datos personales de otras personas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Datos y tecnología agrícola",
    questions: [
      { objective: "O1", q: "¿Cuál suele ser una fuente confiable de consejos agrícolas?", options: ["Una cuenta desconocida que vende productos milagrosos", "Un instituto de investigación como KALRO o un extensionista capacitado", "Una cadena de mensajes", "Un anuncio emergente"], answer: 1, why: "Las fuentes capacitadas y que rinden cuentas son más confiables." },
      { objective: "O1", q: "Antes de gastar dinero en un consejo nuevo, debes:", options: ["Actuar de inmediato", "Preguntarle a un desconocido", "Comprobarlo con una segunda fuente confiable", "Ignorar todos los consejos"], answer: 2, why: "Una segunda fuente detecta errores y estafas." },
      { objective: "O1", q: "Un mensaje dice que un subsidio del gobierno requiere una cuota y tu PIN. Es:", options: ["Probablemente una estafa", "Normal", "Obligatorio por ley", "Un préstamo"], answer: 0, why: "Los programas reales no piden tu PIN." },
      { objective: "O2", q: "Tus datos agrícolas más valiosos suelen ser:", options: ["Datos sobre otros países", "La publicidad", "Noticias de famosos", "Los registros de tu propia finca"], answer: 3, why: "Hablan de tus propias parcelas, insumos y resultados." },
      { objective: "O2", q: "Una buena hoja de la finca tiene:", options: ["Una sola columna", "Una fila por evento con fecha, parcela, actividad, cantidad, costo y notas", "Solo fotos", "Contraseñas"], answer: 1, why: "Filas y columnas constantes permiten el análisis." },
      { objective: "O2", q: "Un punto GPS guarda:", options: ["La lluvia", "El precio del cultivo", "Las coordenadas de un lugar", "El pH del suelo"], answer: 2, why: "Los puntos guardan un lugar en un mapa." },
      { objective: "O2", q: "KoboToolbox ayuda a los grupos a:", options: ["Llenar el mismo formulario en el teléfono, incluso sin conexión", "Volar drones", "Pagar préstamos", "Cultivar semillas"], answer: 0, why: "Los formularios compartidos sin conexión facilitan la recolección de datos en grupo." },
      { objective: "O2", q: "Cinco columnas llenas cada semana:", options: ["Son peores que veinte llenas una vez", "No sirven", "Van contra la ley", "Valen más que veinte columnas llenas una vez"], answer: 3, why: "Los registros sencillos y regulares son los útiles." },
      { objective: "O3", q: "Los boletines agrometeorológicos oficiales de Kenia vienen de:", options: ["La KCAA", "El Departamento Meteorológico de Kenia", "Una empresa de semillas", "La ODPC"], answer: 1, why: "El KMD publica pronósticos y boletines agrometeorológicos." },
      { objective: "O3", q: "Los mapas de observación de la Tierra de la FAO pueden mostrar:", options: ["El saldo de tu banco", "Solo precios de mercado", "Lluvia, vegetación y estrés agrícola", "Nombres de plagas"], answer: 2, why: "FAO GIEWS hace mapas de lluvia, NDVI e indicadores de estrés." },
      { objective: "O3", q: "Un pluviómetro sencillo te permite:", options: ["Registrar tu propia lluvia diaria", "Pronosticar el próximo año", "Medir el pH del suelo", "Contar plantas"], answer: 0, why: "Tu propio registro de lluvia conecta el clima con tus rendimientos." },
      { objective: "O4", q: "El rendimiento por acre es:", options: ["La cosecha por el precio", "El costo dividido entre el ingreso", "El tamaño de la parcela por la lluvia", "La cosecha dividida entre el tamaño de la parcela"], answer: 3, why: "Permite comparar parcelas de distinto tamaño." },
      { objective: "O4", q: "Un gráfico de barras te ayuda a:", options: ["Ocultar números", "Ver y explicar diferencias entre parcelas", "Guardar fotos", "Enviar dinero"], answer: 1, why: "Las barras hacen fáciles de ver las comparaciones." },
      { objective: "O4", q: "Después de encontrar tu mejor parcela, el siguiente paso es:", options: ["Borrar los registros", "Dejar de registrar", "Buscar las razones y escribir una decisión para la próxima temporada", "Vender el teléfono"], answer: 2, why: "El análisis debe llevar a una decisión que puedas poner a prueba." },
      { objective: "O5", q: "Un prompt claro de IA para la agricultura incluye:", options: ["Cultivo, zona, temporada, tamaño de la finca y lo que quieres", "Tu número de identificación", "Una sola palabra", "Tus datos bancarios"], answer: 0, why: "El contexto ayuda al asistente a dar respuestas útiles." },
      { objective: "O5", q: "Los consejos de la IA sobre medicinas para animales deben:", options: ["Seguirse al pie de la letra", "Ignorarse por completo", "Compartirse con todos", "Comprobarse con un veterinario o una fuente confiable antes de actuar"], answer: 3, why: "La IA puede equivocarse; las medicinas necesitan el consejo de un experto." },
      { objective: "O6", q: "En Nigeria, la protección de datos está a cargo de:", options: ["La NCAA", "La Comisión de Protección de Datos de Nigeria (NDPC)", "NiMet", "NAFDAC"], answer: 1, why: "La NDPC supervisa la Ley de Protección de Datos de Nigeria de 2023." },
      { objective: "O6", q: "Antes de que una app recolecte los datos de tu finca, debes:", options: ["No leer nada", "Darle todos los datos", "Leer qué hará con los datos y decidir", "Compartir tu PIN"], answer: 2, why: "Sabe qué compartes, por qué y con quién." },
      { objective: "O6", q: "Compartir un resumen, como el rendimiento por acre, en lugar de todos los detalles:", options: ["Puede bastar y protege tu privacidad", "Nunca está permitido", "Es una estafa", "No sirve"], answer: 0, why: "Comparte solo lo necesario." },
      { objective: "O6", q: "¿Qué mantiene más seguros los datos de tu teléfono?", options: ["No tener bloqueo de pantalla", "Compartir contraseñas", "No hacer nunca copias de seguridad", "Bloqueo de pantalla, contraseñas fuertes y copias de seguridad"], answer: 3, why: "Estos pasos básicos protegen tus registros." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      8,
      9,
      11,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte de la hoja y revísala de nuevo.",
    criteria: [
      {
        name: "Hoja de datos de la finca",
        objective: "O2",
        notYet: "Faltan columnas, o las parcelas tienen nombres distintos en distintas filas.",
        meets: "Una fila por evento con fecha, parcela, actividad, cantidad y costo, y nombres fijos de parcela, para al menos tres parcelas.",
        exceeds: "También tiene notas de monitoreo, fotos o puntos GPS ligados a las parcelas."
      },
      {
        name: "Notas del clima y de satélite",
        objective: "O3",
        notYet: "No hay pronóstico ni información de lluvia.",
        meets: "Anota el pronóstico oficial o un mapa de satélite o de lluvia, con su fuente y su fecha.",
        exceeds: "Incluye el registro del propio pluviómetro junto al pronóstico."
      },
      {
        name: "Análisis y gráfico",
        objective: "O4",
        notYet: "No hay tabla de resumen, o las sumas están mal.",
        meets: "El rendimiento y la ganancia por acre están bien calculados para cada parcela y se muestran en un gráfico de barras.",
        exceeds: "Explica el gráfico en una o dos frases a un grupo o a un prestamista."
      },
      {
        name: "Decisión para la próxima temporada",
        objective: "O4",
        notYet: "No hay decisión, o no sale de los números.",
        meets: "Una decisión clara ligada a lo que muestra la hoja.",
        exceeds: "Dice cómo los registros de la próxima temporada pondrán a prueba la decisión."
      },
      {
        name: "Fuentes comprobadas",
        objective: "O1",
        notYet: "Usa consejos de apps, de la IA o de redes sociales sin comprobarlos.",
        meets: "Anota qué fuentes confiables usó para comprobar los consejos, incluida cualquier respuesta de la IA.",
        exceeds: "Nombra una segunda fuente para cada consejo importante."
      },
      {
        name: "Datos seguros",
        objective: "O6",
        notYet: "La hoja tiene PIN, números de identificación o datos de otras personas sin su permiso.",
        meets: "No hay números privados; hay una nota sobre las copias de seguridad, el bloqueo de pantalla y qué se comparte con quién.",
        exceeds: "Muestra un resumen corto preparado para compartir en lugar de la hoja completa."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la hoja de datos de la finca",
      "Participantes que siguen registrando datos de la finca en el teléfono 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber tomado una decisión de la finca con sus propios registros o haber comprobado un consejo antes de comprar insumos",
      "Participantes que dicen haber evitado una estafa con insumos falsos, apoyos o el PIN"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, aunque sea económico; una computadora ayuda en el capítulo 2",
      "Herramientas gratuitas: Google Sheets o la versión web gratuita de Microsoft Excel, una app de mapas y un asistente de IA gratuito",
      "Registros reales o de ejemplo de al menos tres parcelas; un pluviómetro sencillo si lo hay",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo para llenar la hoja de datos de la finca"
    ],
    facilitatorNotes: [
      "En un grupo de agricultores o una sesión de extensión: hagan juntos la prueba inicial y luego armen en un teléfono una hoja de ejemplo compartida para que todos vean las columnas.",
      "Prepara datos de ejemplo para quienes todavía no tienen registros, así todos pueden practicar las fórmulas y el gráfico.",
      "Nunca pidas que escriban PIN, números de identificación ni datos bancarios en hojas, formularios o herramientas de IA; usen datos de ejemplo en su lugar.",
      "Cuando un grupo recolecta datos de sus socios, explica el permiso y acuerden quién puede ver la hoja.",
      "Califica la hoja final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

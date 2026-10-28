"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-crop-health.js. See scripts/koachlearn-courses/README.md, "Translations".
// QGIS tool names are given as they appear in QGIS in Spanish (Calculadora ráster), with the English name the first time.

const FAO_EO = { name: "FAO GIEWS Observación de la Tierra (NDVI e indicadores de vegetación)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO: aplicación móvil para apoyar la lucha contra el gusano cogollero en África (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (software libre y de código abierto para mapas con drones)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (SIG libre y de código abierto)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health-es",
  lang: "es",
  translationOf: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Drones para el monitoreo agrícola 3: salud de los cultivos, plagas y procesamiento de datos",
  skills: "Leer un mapa NDVI de salud de los cultivos, Detectar patrones tempranos de plagas, enfermedades y estrés, Verificar en campo las zonas con problemas, Unir fotos de dron en un mapa, Hacer un mapa de índice en QGIS, Escribir un informe de acciones para el campo",
  outcome: "convertir un juego de fotos de dron de un campo en un mapa de salud del cultivo, encontrar las zonas con problemas, revisarlas en el terreno y escribir un informe corto de acciones que el agricultor pueda usar.",
  about: [
    "Este es el Curso 3 del itinerario de monitoreo con drones, para extensionistas, agrónomos, administradores de fincas y jóvenes que dan servicios con drones en Kenia, Nigeria y toda África. Debes saber capturar un juego de imágenes de dron traslapadas (Curso 2) o tener uno para trabajar; en internet hay conjuntos de datos de muestra gratuitos.",
    "El Capítulo 1 te enseña a leer mapas de salud de los cultivos y a reconocer los patrones que dejan los problemas tempranos de plagas, enfermedades, agua y nutrientes en el maíz, la yuca, el frijol, el té y el café, y cómo confirmarlos en el terreno. El Capítulo 2 te enseña a unir fotos en un mapa con software gratuito, a hacer un mapa NDVI en QGIS (un programa gratuito de mapas) y a escribir un informe que lleve a la acción.",
    "Un mapa de dron nunca reemplaza los ojos del agricultor ni el diagnóstico del extensionista. Muestra dónde mirar primero, para que el poco tiempo y dinero vayan al lugar correcto. Cada lección dura unos cinco minutos más una tarea de práctica; cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Con un mapa de dron de un campo real o un conjunto de datos de muestra gratuito: haz un mapa NDVI o en color, marca al menos tres zonas con problemas, escribe un plan de verificación en campo (qué buscar en cada zona) y escribe un informe de acciones de una página para el agricultor con una imagen del mapa, lo que se encontró o se sospecha, el siguiente paso recomendado para cada zona y a quién contactar para confirmarlo.",
  chapters: [
    {
      name: "Capítulo 1: Leer la salud de los cultivos",
      lessons: [
        {
          title: "Leer un mapa NDVI de salud de los cultivos",
          minutes: 5,
          goal: "Leer un mapa NDVI con su escala de colores y encontrar las zonas débiles y fuertes.",
          text: [
            "El NDVI (índice de vegetación de diferencia normalizada) compara la luz del infrarrojo cercano y la luz roja que reflejan las plantas. Los valores van de -1 a +1. La FAO explica que los valores positivos altos indican vegetación densa y sana, mientras que los valores bajos o negativos indican poca cobertura, suelo desnudo o agua.",
            "En un mapa NDVI de dron, cada píxel recibe un color de una escala, a menudo del rojo para los valores bajos al verde para los altos. Lee siempre la leyenda: los colores son relativos a ese mapa. Un campo todo rojo al principio de la temporada puede ser solo plantas pequeñas y suelo desnudo.",
            "Busca diferencias dentro del campo, no solo el color. Una mancha baja en un campo de maíz que por lo demás es parejo merece una visita. Compara con mapas anteriores del mismo campo: una mancha que crece semana tras semana importa más que una que se queda igual."
          ],
          steps: ["Lee la leyenda: ¿qué color es bajo y cuál es alto?", "Anota el cultivo y la etapa de crecimiento: los cultivos jóvenes muestran más suelo.", "Busca manchas distintas al resto del campo.", "Compara con un mapa anterior: ¿la mancha es nueva o está creciendo?", "Marca las zonas que vas a visitar."],
          words: [["NDVI", "un índice de vegetación de -1 a +1; un valor más alto suele significar plantas verdes más densas y sanas."], ["Leyenda", "la clave que muestra qué significa cada color de un mapa."], ["Etapa de crecimiento", "qué tanto se ha desarrollado el cultivo, de plántula a cosecha."]],
          slides: [
            { title: "El NDVI en una línea", bullets: ["Compara la luz del infrarrojo cercano y la roja", "De -1 a +1", "Alto = verde denso y sano; bajo = poca planta, suelo o agua"] },
            { title: "Lee primero la leyenda", bullets: ["Los colores son relativos al mapa", "Los cultivos jóvenes muestran más suelo"] },
            { title: "Busca diferencias", bullets: ["Manchas distintas al resto", "Las manchas nuevas o que crecen importan más", "Marca las zonas que vas a visitar"] }
          ],
          sources: [FAO_EO],
          tryIt: "Busca en internet un mapa NDVI de muestra (busca un mapa NDVI de un campo de maíz) o usa uno tuyo. Lee la leyenda, marca dos zonas débiles y una zona fuerte, y escribe en qué etapa de crecimiento podría estar el cultivo.",
          youCanNow: "leer la leyenda de un mapa NDVI y encontrar las zonas débiles y fuertes que vale la pena visitar."
        },
        {
          title: "Detectar patrones tempranos de plagas, enfermedades y estrés",
          minutes: 6,
          goal: "Reconocer los patrones del mapa que apuntan a problemas de plagas, enfermedades, agua o nutrientes.",
          text: [
            "Cada problema deja una forma distinta en el mapa. Las manchas que empiezan pequeñas y se extienden hacia afuera con las semanas pueden indicar plagas o enfermedades, como el gusano cogollero en el maíz o los virus en la yuca. Los problemas a lo largo de una orilla pueden venir del campo de un vecino, de un camino o del viento. Las franjas rectas suelen seguir a las personas o a las máquinas: un surco sin fertilizante, una línea de riego tapada, una falla de la sembradora.",
            "Las esquinas y hondonadas bajas y húmedas apuntan al encharcamiento; los terrenos altos, arenosos o en pendiente, al estrés hídrico, sobre todo en imágenes térmicas por la tarde. Un amarillamiento parejo en todo el campo puede indicar falta de un nutriente como el nitrógeno, pero también sequía.",
            "Un patrón es una pista, no un diagnóstico. Desde el aire, las enfermedades y las plagas se parecen, y los tratamientos son muy distintos. Los avistamientos de gusano cogollero se pueden registrar con la app FAMEWS de la FAO donde se usa; confirma cualquier sospecha de plaga o enfermedad con un extensionista o una clínica de plantas antes de actuar."
          ],
          words: [["Patrón", "la forma y la extensión de un problema en un mapa: mancha, orilla, franja, zona baja."], ["Gusano cogollero", "una oruga que es plaga del maíz y otros cultivos; se extendió por África desde 2016."], ["Clínica de plantas", "un lugar donde personal capacitado diagnostica los problemas de las plantas que llevan los agricultores."]],
          slides: [
            { title: "Las formas cuentan una historia", bullets: ["Manchas que se extienden: ¿plagas o enfermedad?", "Una orilla: ¿vecino, camino o viento?", "Franjas rectas: máquinas, fertilizante o riego"] },
            { title: "Agua y nutrientes", bullets: ["Hondonadas bajas y húmedas: encharcamiento", "Pendientes altas y arenosas: estrés hídrico", "Amarillamiento parejo: nutrientes o sequía"] },
            { title: "Una pista, no un diagnóstico", bullets: ["Desde el aire, plagas y enfermedades se parecen", "Los tratamientos son muy distintos", "Confirma con extensión o una clínica de plantas"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "Dibuja cuatro croquis pequeños de un campo: uno con una mancha que se extiende, uno con un problema a lo largo de una orilla, uno con franjas y uno con una esquina baja y húmeda. Debajo de cada uno, escribe dos posibles causas.",
          youCanNow: "reconocer los patrones comunes de problemas en un mapa de cultivo y hacer una lista de las causas probables que hay que revisar."
        },
        {
          title: "Verificación en campo: revisar las zonas a pie",
          minutes: 5,
          goal: "Visitar cada zona con problemas con un plan y anotar lo que encuentres.",
          text: [
            "La verificación en campo significa ir al lugar exacto del mapa y revisar qué hay de verdad. Carga el mapa en tu teléfono con GPS (muchas apps gratuitas de mapas y SIG pueden mostrar tu posición sobre un mapa de dron), o anota las coordenadas de cada zona.",
            "En cada zona, mira las plantas, las hojas (por arriba y por abajo), los tallos y las raíces, el suelo y la humedad, y los insectos. Compara con plantas sanas a unos metros, en una zona fuerte. Toma fotos claras y notas cortas.",
            "Anota los hallazgos siempre de la misma forma: número de zona, coordenadas, cultivo y etapa, lo que viste, causa probable, qué tan seguro estás y números de las fotos. Los buenos registros facilitan leer el siguiente mapa y ayudan al experto que confirme la causa."
          ],
          steps: ["Numera cada zona y anota sus coordenadas.", "Camina hasta ella con un mapa con GPS en tu teléfono.", "Revisa plantas, hojas, tallos, raíces, suelo, humedad e insectos.", "Compara con un lugar sano cercano.", "Anota zona, coordenadas, lo que viste, causa probable, qué tan seguro y números de las fotos."],
          words: [["Verificación en campo", "revisar en el terreno lo que muestra un mapa o una imagen."], ["Coordenadas", "los números de latitud y longitud que dan un lugar exacto."]],
          slides: [
            { title: "Ve al lugar exacto", bullets: ["Mapa con GPS en tu teléfono", "O anota las coordenadas de cada zona"] },
            { title: "Mira de cerca", bullets: ["Hojas por arriba y por abajo, tallos, raíces", "Suelo y humedad, insectos", "Compara con un lugar sano cercano"] },
            { title: "Anota igual cada vez", bullets: ["Zona, coordenadas, cultivo y etapa", "Lo que viste, causa probable, qué tan seguro", "Números de las fotos"] }
          ],
          tryIt: "Haz un formulario de verificación en campo (en papel o en una hoja de cálculo del teléfono) con estas columnas: zona, coordenadas, cultivo y etapa, lo que vi, causa probable, qué tan seguro, fotos. Llena una fila con una zona real o de ejemplo.",
          youCanNow: "planear y hacer una visita de verificación en campo y anotar los hallazgos en un formulario claro."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Leer la salud de los cultivos",
        questions: [
          { q: "El mapa NDVI de un campo sale casi todo rojo al principio de la temporada. La razón más probable es:", options: ["El dron estaba roto", "Plantas pequeñas y mucho suelo desnudo", "Todo está muerto", "Llovió"], answer: 1, why: "Los cultivos jóvenes cubren poco terreno, así que el suelo baja los valores." },
          { q: "¿Qué mancha debes visitar primero?", options: ["Una mancha igual que el mes pasado", "La zona verde más fuerte", "Una mancha baja que creció desde el último mapa", "La orilla del campo con pasto"], answer: 2, why: "Una mancha que crece indica un problema activo que se extiende." },
          { q: "Las franjas rectas de cultivo débil en un campo suelen apuntar a:", options: ["Máquinas, fertilizante o líneas de riego", "Un virus que se extiende desde una planta", "Viento de un lado", "Nada"], answer: 0, why: "Las líneas rectas siguen la forma en que las personas y las máquinas trabajan el campo." },
          { q: "Un mapa de dron sugiere con fuerza una enfermedad. Antes de fumigar, debes:", options: ["Fumigar con el químico más fuerte", "Publicar el mapa en internet", "Fumigar toda la finca", "Confirmar la causa con un extensionista o una clínica de plantas"], answer: 3, why: "Desde el aire, las plagas y las enfermedades se parecen y necesitan tratamientos distintos." },
          { q: "¿Por qué comparar una zona débil con plantas sanas a unos metros?", options: ["Para ver qué es distinto", "Para ahorrar batería", "Porque lo dice la ley", "Para tener mejor señal en el teléfono"], answer: 0, why: "Comparar lado a lado muestra qué les pasa a las plantas débiles." }
        ]
      }
    },
    {
      name: "Capítulo 2: Procesar los datos del dron",
      lessons: [
        {
          title: "Unir fotos en un mapa",
          minutes: 6,
          goal: "Convertir un juego de fotos de dron traslapadas en un solo mapa ortomosaico.",
          text: [
            "El software de unión empareja los detalles que comparten las fotos traslapadas, calcula dónde se tomó cada una y arma una sola imagen con la precisión de un mapa llamada ortomosaico. También puede hacer un modelo de elevación (la altura del suelo y del cultivo).",
            "Hay opciones gratuitas. OpenDroneMap es software libre y de código abierto, y su interfaz WebODM te deja subir las fotos en un navegador web en tu propia computadora. También hay servicios de pago en la nube y las apps del propio fabricante del dron; revisa sus precios vigentes y dónde guardan tus datos.",
            "El procesamiento necesita una computadora bastante potente y tiempo: unos cientos de fotos pueden tardar una hora o más. Copia las fotos del dron a una carpeta con el nombre de la finca, el campo y la fecha, haz una copia de seguridad y luego procesa. Revisa el resultado: huecos, zonas borrosas o surcos torcidos significan que el traslape o las fotos fueron malos."
          ],
          steps: ["Copia las fotos a una carpeta llamada finca_campo_fecha (por ejemplo Kitale_Lote3_2026-11-04).", "Haz una copia de seguridad de la carpeta.", "Abre el software de unión y crea una tarea nueva.", "Añade las fotos y empieza el procesamiento.", "Revisa el ortomosaico en busca de huecos, desenfoque y surcos torcidos.", "Expórtalo como GeoTIFF (una imagen de mapa con la ubicación incluida)."],
          words: [["Ortomosaico", "una imagen grande, con la precisión de un mapa, unida a partir de muchas fotos traslapadas."], ["GeoTIFF", "un archivo de imagen que lleva su ubicación en la Tierra, para que el software de mapas lo coloque bien."], ["Modelo de elevación", "un mapa de la altura del suelo o de la superficie del cultivo."]],
          slides: [
            { title: "De fotos a mapa", bullets: ["El software empareja fotos traslapadas", "Arma un ortomosaico", "También puede armar un modelo de elevación"] },
            { title: "Herramientas gratuitas y de pago", bullets: ["OpenDroneMap / WebODM: gratis, código abierto", "Servicios de pago en la nube y apps del fabricante", "Revisa precios y dónde se guardan tus datos"] },
            { title: "Buenos hábitos", bullets: ["Carpeta llamada finca_campo_fecha", "Copia de seguridad antes de procesar", "Revisa huecos, desenfoque, surcos torcidos", "Exporta como GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Descarga un conjunto de datos de dron de muestra gratuito (OpenDroneMap enlaza a conjuntos de muestra) o usa tus propias fotos. Ponle nombre a la carpeta, haz una copia y, si tu computadora lo permite, procésalo en un ortomosaico. Si no, escribe cada paso que seguirías.",
          youCanNow: "organizar fotos de dron y unirlas en un mapa ortomosaico con software gratuito."
        },
        {
          title: "Hacer un mapa NDVI en QGIS",
          minutes: 6,
          goal: "Calcular y colorear un mapa NDVI a partir de un ortomosaico multiespectral en QGIS.",
          text: [
            "QGIS es un software SIG libre y de código abierto que usan gobiernos, universidades y ONG en toda África. Puede abrir tu GeoTIFF y hacer cuentas con sus bandas.",
            "Si tu ortomosaico tiene bandas roja y de infrarrojo cercano, usa la Calculadora ráster (Raster Calculator) para calcular NDVI = (NIR - Rojo) / (NIR + Rojo). Luego dale estilo al resultado con una rampa de color (por ejemplo, de rojo a verde) y ajusta el rango para que resalten las diferencias dentro del campo.",
            "¿Solo tienes cámaras de color? Igual puedes hacer un índice de verdor aproximado con las bandas roja, verde y azul, pero es menos confiable que el NDVI; tómalo solo como guía. Añade el límite del campo y tus puntos de verificación como capas para que el mapa muestre exactamente dónde están las zonas."
          ],
          steps: ["Abre QGIS y añade tu ortomosaico GeoTIFF.", "Revisa qué banda es la roja y cuál la de infrarrojo cercano.", "Abre la Calculadora ráster y escribe (NIR - Rojo) / (NIR + Rojo) con esas bandas.", "Dale estilo a la capa nueva con una rampa de color de rojo a verde.", "Añade el límite del campo y los puntos de verificación.", "Exporta una imagen del mapa para tu informe."],
          words: [["SIG", "sistema de información geográfica: software para hacer y analizar mapas."], ["Banda", "una capa de luz de una imagen, como la roja, verde, azul o de infrarrojo cercano."], ["Ráster", "una imagen hecha de píxeles, cada uno con un valor, como un mapa de dron."], ["Capa", "un conjunto de datos de un mapa, como el límite de un campo o unos puntos, que se muestra encima de otros."]],
          slides: [
            { title: "QGIS", bullets: ["SIG libre y de código abierto", "Abre tu GeoTIFF", "Hace cuentas con las bandas de la imagen"] },
            { title: "Fórmula del NDVI", bullets: ["NDVI = (NIR - Rojo) / (NIR + Rojo)", "Usa la Calculadora ráster", "Estilo de rojo a verde"] },
            { title: "¿Solo cámara de color?", bullets: ["Índice de verdor aproximado con las bandas RGB", "Menos confiable que el NDVI: solo una guía"] },
            { title: "Termina el mapa", bullets: ["Añade el límite del campo y los puntos de zona", "Exporta una imagen para el informe"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Instala QGIS (gratis) y abre tu ortomosaico o una imagen multiespectral de muestra. Calcula el NDVI con la Calculadora ráster, coloréalo y marca tres zonas como puntos.",
          youCanNow: "hacer un mapa NDVI coloreado en QGIS y añadirle zonas y límites de campo."
        },
        {
          title: "Escribir un informe de acciones para el campo",
          minutes: 5,
          goal: "Escribir un informe de una página que le diga al agricultor qué se encontró y qué hacer después.",
          text: [
            "Un mapa solo no ayuda a un agricultor ocupado. Un informe corto lo convierte en acción. Que sea de una página, con palabras sencillas, en el idioma que prefiera el agricultor. Muchos agricultores lo leerán en un teléfono inteligente básico, así que una imagen y unas pocas líneas funcionan mejor que un documento largo.",
            "Incluye: finca, campo, fecha y etapa del cultivo; la imagen del mapa con las zonas numeradas; para cada zona, lo que viste en el terreno, la causa probable y qué tan seguro estás; el siguiente paso (por ejemplo: resembrar los huecos, limpiar un drenaje, pedir a la clínica de plantas que confirme una enfermedad, revisar la línea de riego); y a quién contactar.",
            "Nunca recomiendes un plaguicida ni una dosis a partir de un mapa de dron. Manda al agricultor con un extensionista, una agroveterinaria o una clínica de plantas para cualquier consejo sobre químicos, y a la etiqueta para usarlo con seguridad. Acuerden cuándo volar otra vez para ver si la acción funcionó."
          ],
          steps: ["Encabezado: finca, campo, fecha, cultivo y etapa.", "Imagen del mapa con las zonas numeradas.", "Para cada zona: lo que viste, causa probable, qué tan seguro.", "Siguiente paso para cada zona y a quién contactar.", "Fecha del próximo vuelo para revisar los resultados."],
          words: [["Informe de acciones", "un informe corto que dice qué se encontró y qué hacer."], ["Agroveterinaria", "una tienda que vende insumos agrícolas como semillas, fertilizantes y medicinas para animales, a menudo con consejos."]],
          slides: [
            { title: "Un mapa no basta", bullets: ["Una página, palabras sencillas", "El idioma que prefiera el agricultor", "Imagen y unas pocas líneas"] },
            { title: "Qué incluye", bullets: ["Finca, campo, fecha, etapa del cultivo", "Mapa con zonas numeradas", "Hallazgo, causa probable, qué tan seguro, siguiente paso"] },
            { title: "Seguro y honesto", bullets: ["Nada de plaguicida ni dosis a partir de un mapa", "Manda a extensión, agroveterinaria o clínica de plantas", "Acuerden cuándo volar otra vez"] }
          ],
          tryIt: "Tarea final: con tu mapa y tu formulario de verificación, escribe el informe de acciones de una página para el agricultor: encabezado, imagen del mapa con al menos tres zonas numeradas, hallazgo y causa probable de cada una, siguiente paso, contactos y fecha del próximo vuelo.",
          youCanNow: "convertir los datos del dron en un informe de acciones claro, de una página, que un agricultor pueda usar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Procesar los datos del dron",
        questions: [
          { q: "¿Qué es un ortomosaico?", options: ["Una sola foto", "Un tipo de dron", "Una imagen con la precisión de un mapa unida a partir de muchas fotos", "Una plaga"], answer: 2, why: "El software de unión arma un mapa a partir de fotos traslapadas." },
          { q: "Tu mapa unido tiene huecos y surcos torcidos. La causa más probable es:", options: ["Poco traslape o fotos malas", "Demasiada batería", "El teléfono del agricultor", "Demasiado sol en la pantalla"], answer: 0, why: "La unión necesita muchas fotos nítidas y traslapadas." },
          { q: "¿Cuál es la fórmula del NDVI?", options: ["(Rojo + Azul) / 2", "NIR x Rojo", "Verde - Azul", "(NIR - Rojo) / (NIR + Rojo)"], answer: 3, why: "El NDVI compara la luz del infrarrojo cercano y la roja." },
          { q: "¿Qué es QGIS?", options: ["Un dron de pago", "Software SIG libre y de código abierto para mapas", "Un plaguicida", "Una red de telefonía"], answer: 1, why: "QGIS es software gratuito para hacer y analizar mapas." },
          { q: "Al ver tu informe, un agricultor pregunta qué plaguicida fumigar en la zona 2. Debes:", options: ["Adivinar uno a partir del mapa", "Mandarlo con un extensionista, una agroveterinaria o una clínica de plantas, y a la etiqueta", "Decirle que fumigue el doble", "No decir nada"], answer: 1, why: "Los consejos sobre químicos necesitan un diagnóstico confirmado y una asesoría calificada." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones para el monitoreo agrícola 3: salud de los cultivos, plagas y procesamiento de datos",
    questions: [
      { q: "Los valores del NDVI van de:", options: ["-100 a 0", "-1 a +1", "0 a 100", "1 a 10"], answer: 1, why: "El NDVI es una razón entre -1 y +1." },
      { q: "En un mapa NDVI, lo primero que hay que leer es:", options: ["El tamaño del archivo", "La leyenda", "El nombre del dron", "El clima"], answer: 1, why: "La leyenda dice qué colores significan valores bajos y altos." },
      { q: "Una mancha se ha quedado igual en tres mapas. Una mancha nueva se está extendiendo. ¿Cuál importa más?", options: ["La mancha vieja", "Ninguna", "La mancha que se extiende", "Las dos son igual de urgentes"], answer: 2, why: "Una mancha que se extiende indica un problema activo." },
      { q: "Un cultivo débil a lo largo de una orilla junto al campo de un vecino puede venir de:", options: ["Demasiado traslape", "La leyenda", "La batería del dron", "Plagas o deriva de fumigación de ese lado"], answer: 3, why: "Los patrones de orilla a menudo indican algo que viene de fuera del campo." },
      { q: "Las hondonadas bajas y húmedas con cultivo débil muestran muy probablemente:", options: ["Encharcamiento", "Demasiado sol", "Una buena cosecha", "Una cámara rota"], answer: 0, why: "El agua se junta en las hondonadas y daña las raíces." },
      { q: "Un patrón en un mapa de dron es:", options: ["Un diagnóstico final", "Una pista que hay que revisar en el terreno", "Siempre una plaga", "Siempre una enfermedad"], answer: 1, why: "Los patrones muestran dónde mirar; la revisión en el terreno encuentra la causa." },
      { q: "La app FAMEWS de la FAO se hizo para registrar:", options: ["La lluvia", "Los precios del mercado", "Los avistamientos de gusano cogollero", "Los vuelos de drones"], answer: 2, why: "FAMEWS es el sistema de la FAO de monitoreo y alerta temprana del gusano cogollero." },
      { q: "La verificación en campo significa:", options: ["Volar más bajo", "Comprar software nuevo", "Limpiar el lente", "Revisar en el terreno lo que muestra el mapa"], answer: 3, why: "Visitas el lugar para ver qué hay de verdad." },
      { q: "Durante una revisión en el terreno debes mirar:", options: ["Hojas por arriba y por abajo, tallos, raíces, suelo e insectos", "Solo la parte de arriba de una hoja", "Solo el cielo", "Solo el dron"], answer: 0, why: "Una revisión completa encuentra plagas, enfermedades y problemas del suelo." },
      { q: "¿Por qué anotar los hallazgos siempre de la misma forma?", options: ["El dron lo exige", "Hace comparables los registros y ayuda a los expertos", "Para pasar el tiempo", "Hace más nítidas las fotos"], answer: 1, why: "Los registros constantes ayudan a comparar y confirmar las causas." },
      { q: "Las coordenadas son:", options: ["Colores de un mapa", "La velocidad del dron", "Números de latitud y longitud de un lugar exacto", "Un tipo de cultivo"], answer: 2, why: "Te permiten volver a encontrar la zona exacta." },
      { q: "OpenDroneMap es:", options: ["Una marca de drones", "Un plaguicida", "Un satélite", "Software libre y de código abierto para unir fotos de dron"], answer: 3, why: "OpenDroneMap y WebODM convierten fotos en mapas gratis." },
      { q: "Antes de procesar las fotos debes:", options: ["Ponerle nombre a la carpeta y hacer una copia de seguridad", "Borrar la mitad de las fotos", "Renombrar cada foto a mano", "Apagar la computadora"], answer: 0, why: "Un buen nombre y una copia evitan perder datos." },
      { q: "Un GeoTIFF es:", options: ["Un formato de video", "Una imagen que lleva su ubicación en la Tierra", "Una pieza del dron", "Un mensaje de texto"], answer: 1, why: "El software de mapas usa la ubicación incluida para colocarlo." },
      { q: "En QGIS, el NDVI se calcula con:", options: ["La herramienta de imprimir", "El botón de correo", "La Calculadora ráster", "El control de volumen"], answer: 2, why: "La Calculadora ráster hace cuentas con las bandas de la imagen." },
      { q: "Con solo una cámara de color, un índice de verdor es:", options: ["Exactamente igual al NDVI", "Imposible", "Mejor que el NDVI", "Una guía aproximada, menos confiable que el NDVI"], answer: 3, why: "A los índices RGB les falta el infrarrojo cercano, así que son una guía aproximada." },
      { q: "Una capa en un SIG es:", options: ["Un conjunto de datos del mapa que se muestra encima de otros", "Una batería del dron", "Una enfermedad del cultivo", "Un documento legal"], answer: 0, why: "Los límites, los puntos y las imágenes son cada uno una capa." },
      { q: "Un buen informe de acciones para el campo es:", options: ["Veinte páginas de números", "Una página, palabras sencillas, con un mapa y los siguientes pasos", "Solo las fotos originales", "Solo la fórmula del NDVI"], answer: 1, why: "Los agricultores ocupados necesitan un plan corto y claro." },
      { q: "¿Qué NO debe ir en tu informe?", options: ["La fecha y la etapa del cultivo", "Zonas numeradas", "Un plaguicida y una dosis elegidos solo a partir del mapa", "A quién contactar"], answer: 2, why: "Los consejos sobre químicos necesitan un diagnóstico confirmado por una fuente calificada." },
      { q: "¿Por qué acordar una fecha para el próximo vuelo?", options: ["Para gastar las baterías", "Porque la ley dice que cada semana", "Para vender más vuelos", "Para ver si la acción funcionó"], answer: 3, why: "Un mapa de seguimiento muestra si el problema se resolvió." }
    ]
  }
};

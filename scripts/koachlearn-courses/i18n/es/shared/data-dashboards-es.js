"use strict";

// Koach Learn course (Spanish translation of shared/data-dashboards.js). See scripts/koachlearn-courses/README.md, "Translations".
// Product names (Power BI, Power BI Desktop, Power Query, Looker Studio, Data Studio, Google Sheets) stay as written. The practice
// data (columns Date, Product, Category, Units, Price, Total; values such as Muffin and Pastry) stays in English, as in the sibling
// data-analytics course, so every total matches. Menu names are given in Spanish, with the English name the first time.

const PL300 = { name: "Microsoft Learn: Power BI Data Analyst Associate (examen PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (examen DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft: Power BI Desktop (descarga gratuita)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud: ayuda de Data Studio (antes Looker Studio)", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud: conectar Data Studio a Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards-es",
  lang: "es",
  translationOf: "data-dashboards",
  category: "Workforce Development",
  name: "Crear tableros de datos (Power BI y Data Studio)",
  skills: "Planear un tablero y sus números clave, Limpiar datos en una tabla ordenada, Elegir el gráfico correcto, Crear un tablero de una página con filtros, Revisar y compartir un tablero con seguridad",
  outcome: "planear, crear, revisar y compartir un tablero de una página en Power BI Desktop o Looker Studio (Data Studio) que responda una pregunta clara del negocio con 3 a 5 números clave, los gráficos correctos y filtros sencillos.",
  about: [
    "Empresas, organizaciones sin fines de lucro, hospitales y las fuerzas armadas usan tableros (en inglés, dashboards): una sola pantalla con los números que la gente necesita para tomar una decisión. Crearlos es una habilidad básica en trabajos de análisis de datos, informes y operaciones. Este curso es para personas que buscan trabajo, veteranos, dueños de pequeños negocios y cualquiera que ya usó una hoja de cálculo y quiere dar el siguiente paso.",
    "Vas a planear un tablero, limpiar un pequeño conjunto de datos de práctica en Google Sheets, cargarlo en una herramienta gratuita, elegir los gráficos correctos, agregar tarjetas de números clave y filtros, revisar cada número y compartirlo con seguridad. Puedes usar Power BI Desktop (un programa gratuito de Microsoft para Windows) o Looker Studio, que Google ahora llama Data Studio (gratis en cualquier navegador web).",
    "Este curso te prepara para el trabajo con tableros y para la parte de informes de dos exámenes reales: el PL-300 de Microsoft (Power BI Data Analyst Associate) y CompTIA Data+ (DA0-002). CompTIA es una organización que certifica habilidades de tecnología. El curso no te da ninguno de los dos certificados. Revisa las páginas oficiales en las fuentes para saber qué cubre cada examen, cómo programarlo y cuánto cuesta hoy.",
    "Cada lección dura unos cinco minutos y luego tiene una tarea \"Pruébalo ahora\". Después de cada lección hay una comprobación rápida de 2 preguntas, cada capítulo termina con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas. Todos los datos de práctica son inventados."
  ],
  finalTask: "Crea un tablero de una página para tu propio camino: usa los datos de práctica de ventas de la panadería de este curso o un pequeño conjunto de datos inventado de un trabajo que quieras (por ejemplo, pedidos de un almacén o visitas a una clínica). Escribe la pregunta del tablero y 3 a 5 números clave, limpia los datos en una tabla ordenada, crea al menos 3 tarjetas de números clave y 2 gráficos que respondan la pregunta, agrega un filtro de fecha y otro filtro más, revisa 3 totales contra los datos de origen y luego compártelo o expórtalo con un resumen de 3 oraciones de lo que muestra. Guárdalo como pieza de portafolio para mostrar en una entrevista de trabajo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos de perfiles variados: personas que buscan trabajo en datos, informes u operaciones, veteranos que pasan a empleos civiles, dueños de pequeños negocios, jóvenes adultos y personas que regresan de prisión y están reconstruyendo sus habilidades laborales. Muchos han usado una hoja de cálculo; pocos han creado un tablero.",
    startingPoint: "Saben escribir datos en una hoja de cálculo, sacar un total con SUM (SUMA) y hacer un gráfico sencillo (o tomaron \"Excel y hojas de cálculo para el trabajo\"). No han usado Power BI ni Looker Studio. Algunos no saben qué gráfico usar o por qué los números de un informe pueden estar mal.",
    gap: "Los empleadores buscan personas que puedan convertir datos sin procesar en una página clara que responda una pregunta del negocio y en la que se pueda confiar. Los participantes necesitan planear, limpiar, crear, revisar y compartir un tablero, y poder mostrarlo en una entrevista. Es también la habilidad de informes que evalúan el PL-300 y CompTIA Data+.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra de datos",
      "Equipos: Power BI Desktop necesita una computadora con Windows; en una Mac, una Chromebook o una computadora de biblioteca, se usa Data Studio en el navegador",
      "Solo herramientas gratuitas: Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Tiempo: lecciones de 5 a 6 minutos que se acomodan al trabajo y a la búsqueda de empleo",
      "Privacidad: los datos de práctica son inventados; nunca se cargan datos reales de clientes, pacientes o empleados para practicar"
    ],
    prerequisites: "Uso básico de hojas de cálculo: escribir datos, SUM (SUMA), ordenar y hacer un gráfico sencillo. Si esto es nuevo para ti, toma primero \"Excel y hojas de cálculo para el trabajo\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Ante una necesidad del negocio como \"¿Qué productos se venden más?\"", action: "escribir en una oración la pregunta del tablero, nombrar a su público y elegir 3 a 5 números clave (KPI)", standard: "con el nombre de cada número clave, cómo se calcula y su periodo de tiempo" },
    { id: "O2", condition: "Ante una hoja de ventas de práctica desordenada", action: "limpiar los datos en una tabla ordenada con una fila por registro y una columna por campo", standard: "sin encabezados vacíos, sin filas duplicadas y con un solo formato en cada columna" },
    { id: "O3", condition: "Ante una pregunta sobre una tendencia, una comparación o una parte de un total", action: "elegir y crear el tipo de gráfico que responde la pregunta en Power BI Desktop o Data Studio", standard: "acertando al menos 4 de 5 elecciones de gráfico" },
    { id: "O4", condition: "Con tus datos limpios en Power BI Desktop o Data Studio", action: "crear un tablero de una página con tarjetas de números clave, al menos 2 gráficos, un filtro de fecha y otro filtro más", standard: "para que alguien pueda responder la pregunta del tablero en menos de un minuto" },
    { id: "O5", condition: "Ante un tablero terminado y sus datos de origen", action: "revisar al menos 3 totales del tablero contra los datos de origen y corregir los que no coincidan", standard: "antes de que otra persona lo vea" },
    { id: "O6", condition: "Cuando tu tablero esté listo", action: "compartir o exportar el tablero con acceso de solo lectura y escribir un resumen de 3 oraciones de lo que muestra", standard: "sin compartir ningún dato privado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear el tablero y preparar los datos",
      lessons: [
        {
          title: "Empezar por la pregunta y los números clave",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escribir la pregunta de un tablero, nombrar a su público y elegir 3 a 5 números clave.",
          text: [
            "Un tablero es una sola pantalla de números y gráficos que ayuda a alguien a tomar una decisión. Uno bueno empieza con una pregunta, no con un gráfico. Pregúntate: ¿quién lo va a mirar y qué necesita decidir?",
            "Ejemplo: la dueña de una pequeña panadería pregunta: \"¿Qué productos y qué días dejan más dinero cada mes?\". El público es la dueña. La decisión es qué hornear más y cuándo programar al personal.",
            "Después, elige 3 a 5 números clave, llamados KPI (indicadores clave de desempeño). Para la panadería: ventas totales en dólares, cantidad de artículos vendidos, venta promedio por pedido y el producto más vendido. Escribe cómo se calcula cada uno y para qué periodo, por ejemplo \"Ventas totales = suma de la columna Total, este mes\".",
            "Demasiados números esconden los importantes. Si un número no ayuda a responder la pregunta, déjalo fuera."
          ],
          steps: ["Nombra al público: ¿quién va a usar el tablero?", "Escribe la pregunta en una oración.", "Nombra la decisión que les ayuda a tomar.", "Elige 3 a 5 números clave que la respondan.", "Para cada uno, escribe su nombre, cómo se calcula y su periodo de tiempo."],
          words: [["Tablero (dashboard)", "una sola pantalla con números clave y gráficos que ayuda a alguien a tomar una decisión."], ["KPI (indicador clave de desempeño)", "uno de los pocos números que muestran si las cosas van bien, como las ventas totales de este mes."], ["Público", "las personas que van a mirar el tablero."], ["Métrica", "cualquier número que mides, como artículos vendidos o venta promedio."]],
          slides: [
            { title: "Empieza por la pregunta, no por el gráfico", bullets: ["¿Quién lo va a mirar?", "¿Qué necesita decidir?", "Escribe la pregunta en una oración"] },
            { title: "Ejemplo: una pequeña panadería", bullets: ["Pregunta: ¿qué productos y días dejan más dinero?", "Público: la dueña", "Decisión: qué hornear y cuándo poner personal"] },
            { title: "Elige 3 a 5 números clave (KPI)", bullets: ["Ventas totales, artículos vendidos, venta promedio, más vendido", "Escribe cómo se calcula cada uno", "Escribe el periodo: este mes, esta semana"] },
            { title: "Menos es más", bullets: ["Demasiados números esconden los importantes", "Si no responde la pregunta, déjalo fuera"] }
          ],
          tryIt: "Elige un trabajo que quieras (por ejemplo almacén, recepción de una clínica, gerente de tienda o el ejemplo de la panadería). En papel, escribe el público, la pregunta en una oración, la decisión y 3 a 5 números clave con cómo se calcula cada uno y su periodo. Guarda esta hoja: es el plan de tu tablero final.",
          youCanNow: "escribir la pregunta de un tablero para un público real y elegir 3 a 5 números clave que la respondan.",
          quickCheck: [
            { objective: "O1", q: "¿Qué debes hacer PRIMERO al crear un tablero?", options: ["Escribir la pregunta y para quién es", "Elegir los colores de los gráficos", "Agregar todos los gráficos que ofrece la herramienta", "Elegir una fuente de letra"], answer: 0, why: "La pregunta y el público deciden qué números y gráficos van en la página." },
            { objective: "O1", q: "¿Cuál es el mejor número clave para \"¿Qué productos dejan más dinero cada mes?\"?", options: ["La cantidad de empleados", "La dirección de la panadería", "Ventas totales en dólares por producto, este mes", "El clima de cada día"], answer: 2, why: "Las ventas por producto del mes responden directamente la pregunta." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Limpiar los datos en una tabla ordenada",
          objectives: ["O2"],
          minutes: 6,
          goal: "Limpiar una hoja desordenada para obtener una tabla ordenada con una fila por registro y una columna por campo.",
          text: [
            "Las herramientas de tableros funcionan mejor con una tabla ordenada: una fila de encabezados, una fila por cada registro (cada venta, cada pedido) y una columna por cada campo (Date, Product, Units). Sin celdas combinadas, sin filas vacías y sin totales escritos dentro de los datos.",
            "Los datos desordenados dan números equivocados. Problemas comunes: la misma venta escrita dos veces (un duplicado), celdas vacías, fechas escritas de formas distintas (10/3/26 y Oct 3), números guardados como texto (\"$4.50\" escrito con un espacio) y diferencias de escritura (\"Muffin\" y \"muffins\").",
            "En Google Sheets puedes arreglar casi todo: Datos > Limpieza de datos > Quitar duplicados (en inglés, Data > Data cleanup > Remove duplicates), Formato > Número para fechas y moneda, y Editar > Buscar y reemplazar para corregir la escritura. Guarda la hoja original y limpia una copia, así siempre puedes volver atrás.",
            "Datos de práctica de este curso (inventados), con los nombres de columna en inglés: Date (fecha), Product (producto), Category (categoría), Units (unidades), Price (precio), Total. Por ejemplo 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Haz una copia de la hoja y trabaja en la copia.", "Asegúrate de que haya exactamente una fila de encabezados con un nombre claro en cada columna.", "Quita las filas vacías, las celdas combinadas y cualquier fila de totales dentro de los datos.", "Quita las filas duplicadas.", "Dale a cada columna un solo formato: fechas como fechas, dinero como moneda, texto escrito siempre igual.", "Revisa una fila a mano: Units por Price debe ser igual a Total."],
          words: [["Tabla ordenada", "datos con una fila de encabezados, una fila por registro y una columna por campo."], ["Registro", "una fila de datos, como una venta."], ["Campo", "una columna de datos, como Date o Product."], ["Duplicado", "el mismo registro escrito dos veces."], ["Tipo de dato", "la clase de valor que guarda una columna: número, fecha, moneda o texto."]],
          slides: [
            { title: "Una tabla ordenada", bullets: ["Una fila de encabezados", "Una fila por registro, una columna por campo", "Sin celdas combinadas, filas vacías ni totales escritos"] },
            { title: "Desórdenes comunes", bullets: ["Filas duplicadas", "Fechas escritas de formas distintas", "Números guardados como texto", "Lo mismo escrito de formas distintas"] },
            { title: "Arreglos en Google Sheets", bullets: ["Datos > Limpieza de datos > Quitar duplicados", "Formato > Número para fechas y moneda", "Editar > Buscar y reemplazar para la escritura"] },
            { title: "Trabaja con seguridad", bullets: ["Limpia una copia, guarda el original", "Revisa una fila a mano: Units x Price = Total"] }
          ],
          tryIt: "En Google Sheets, escribe 15 filas de ventas inventadas de la panadería (Date, Product, Category, Units, Price, Total) durante dos semanas. A propósito, agrega 1 fila duplicada, 1 fila vacía, 1 fecha escrita como texto (Oct 5) y 1 diferencia de escritura (\"muffins\"). Luego haz una copia y límpiala con los pasos. Cuenta cuántos problemas arreglaste.",
          youCanNow: "encontrar y arreglar duplicados, celdas vacías, formatos mezclados y diferencias de escritura para lograr una tabla ordenada.",
          quickCheck: [
            { objective: "O2", q: "Tu hoja muestra \"Muffin\" y \"muffins\" como dos productos. ¿Qué haces?", options: ["Lo dejas; la herramienta adivinará", "Borras todas las filas de muffins", "Agregas una tercera forma de escribirlo", "Usas Buscar y reemplazar para que todas las filas digan \"Muffin\""], answer: 3, why: "Una sola forma de escribir cada artículo hace que la herramienta los sume bien." },
            { objective: "O2", q: "¿Qué describe una tabla ordenada?", options: ["Celdas de título combinadas sobre los datos", "Una fila de encabezados, una fila por registro, una columna por campo", "Una fila de totales en medio de los datos", "Dos filas de encabezados con celdas vacías"], answer: 1, why: "Las herramientas de tableros leen bien las tablas ordenadas; las celdas combinadas y los totales escritos las confunden." }
          ],
          sources: [{ name: "Ayuda de los Editores de Google Docs: dividir texto, quitar duplicados o recortar espacios", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Cargar los datos en Power BI Desktop o Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Cargar una tabla ordenada en Power BI Desktop o Data Studio y revisar el tipo de dato de cada columna.",
          text: [
            "Elige tu herramienta. Power BI Desktop es gratis, es de Microsoft y funciona en una computadora con Windows. Looker Studio, que Google ahora llama Data Studio, es gratis y funciona en un navegador web, así que sirve en una Mac, una Chromebook o una computadora de biblioteca. Las dos se usan en trabajos reales; lo que aprendes en una te sirve en la otra.",
            "Power BI Desktop: descárgalo solo del sitio oficial de Microsoft. Guarda tu hoja limpia como archivo de Excel o CSV. Elige Obtener datos (Get data), selecciona el archivo y mira la vista previa. Elige Transformar datos (Transform data) si una columna necesita arreglo; así se abre el Editor de Power Query, donde puedes cambiar el tipo de dato de una columna.",
            "Data Studio: inicia sesión con una cuenta de Google, elige Crear y luego Fuente de datos, elige el conector de Google Sheets, selecciona tu hoja de cálculo y la pestaña, y elige Conectar. Verás tus campos en una lista con sus tipos.",
            "En las dos herramientas, revisa cada columna: Date debe ser fecha, Units y Total deben ser números, Product debe ser texto. Un número guardado como texto no se puede sumar. Los campos que cuentas o sumas (Units, Total) se suelen llamar medidas o métricas; los campos por los que agrupas (Product, Date) se llaman dimensiones."
          ],
          steps: ["Elige Power BI Desktop (Windows) o Data Studio (cualquier navegador).", "Power BI: Obtener datos, elige tu archivo de Excel o CSV, mira la vista previa, elige Cargar o Transformar datos.", "Data Studio: Crear, Fuente de datos, conector de Google Sheets, elige la hoja, Conectar.", "Revisa el tipo de cada columna: fechas, números, texto.", "Corrige cualquier tipo equivocado antes de crear gráficos."],
          words: [["Power BI Desktop", "un programa gratuito de Microsoft para Windows que crea informes y tableros."], ["Data Studio (Looker Studio)", "la herramienta gratuita de Google para informes y tableros en el navegador; Google le cambió el nombre de Looker Studio a Data Studio."], ["Fuente de datos", "el archivo o la hoja de donde un tablero lee sus datos."], ["Editor de Power Query", "la parte de Power BI donde limpias y das forma a los datos antes de crear objetos visuales."], ["Dimensión", "un campo por el que agrupas, como Product o Date."], ["Medida (métrica)", "un número que sumas, cuentas o promedias, como las ventas totales."], ["Archivo CSV", "un archivo de texto simple con datos cuyos valores están separados por comas."]],
          slides: [
            { title: "Dos herramientas gratuitas", bullets: ["Power BI Desktop: gratis, Windows", "Data Studio (antes Looker Studio): gratis, cualquier navegador", "Lo que aprendes en una sirve en la otra"] },
            { title: "Power BI Desktop", bullets: ["Obtener datos, elige tu archivo de Excel o CSV", "Revisa la vista previa", "Transformar datos abre el Editor de Power Query"] },
            { title: "Data Studio", bullets: ["Crear, luego Fuente de datos", "Conector de Google Sheets, elige la hoja", "Conectar, luego revisa la lista de campos"] },
            { title: "Revisa cada tipo de dato", bullets: ["Fechas como fechas, números como números", "Medidas: lo que sumas, como Total", "Dimensiones: lo que agrupas, como Product"] }
          ],
          tryIt: "Carga tu hoja limpia de la panadería en Power BI Desktop o Data Studio. Anota cada columna y su tipo de dato. Si algún número aparece como texto, corrígelo en la herramienta o en la hoja y vuelve a cargarla. Luego di qué campos son dimensiones y cuáles son medidas.",
          youCanNow: "cargar una tabla ordenada en Power BI Desktop o Data Studio y asegurarte de que cada columna tenga el tipo de dato correcto.",
          quickCheck: [
            { objective: "O2", q: "Tu columna Total se cargó como texto. ¿Qué pasa si la dejas así?", options: ["La herramienta no puede sumar bien los totales", "Nada; el texto y los números funcionan igual", "El tablero tiene más colores", "El archivo se hace más pequeño"], answer: 0, why: "Solo las columnas de números se pueden sumar o promediar." },
            { objective: "O2", q: "Solo tienes una Chromebook. ¿Qué herramienta puedes usar en este curso?", options: ["Power BI Desktop", "Ninguna herramienta funciona", "Data Studio en el navegador web", "Solo papel"], answer: 2, why: "Data Studio funciona en el navegador; Power BI Desktop necesita Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear el tablero y preparar los datos",
        questions: [
          { objective: "O1", q: "El gerente de una tienda quiere saber qué día de la semana necesita más personal. ¿Qué número clave ayuda más?", options: ["El teléfono de la tienda", "La cantidad de productos del catálogo", "La cantidad de clientes por día de la semana", "La fecha en que empezó el gerente"], answer: 2, why: "Los clientes por día muestran directamente qué días tienen más trabajo." },
          { objective: "O1", q: "¿Cuántos números clave suele mostrar un tablero de una página?", options: ["De 3 a 5", "Solo 1", "Todos los posibles", "Al menos 20"], answer: 0, why: "Pocos números clave hacen que los importantes se vean fácilmente." },
          { objective: "O2", q: "¿Qué problema haría que un total de ventas salga demasiado alto?", options: ["Una fila de encabezados clara", "Fechas con formato de fecha", "Una sola forma de escribir cada producto", "La misma venta escrita dos veces"], answer: 3, why: "Una fila duplicada cuenta la misma venta dos veces." },
          { objective: "O2", q: "Antes de limpiar una hoja, ¿qué debes hacer?", options: ["Borrar la fila de encabezados", "Hacer una copia y limpiar la copia", "Combinar todas las celdas", "Escribir totales dentro de los datos"], answer: 1, why: "Guardar el original te permite volver atrás si un arreglo sale mal." },
          { objective: "O2", q: "Product y Date son campos por los que agrupas. ¿Cómo se llaman?", options: ["Medidas", "Contraseñas", "Dimensiones", "Filtros"], answer: 2, why: "Las dimensiones son campos por los que agrupas o divides; las medidas son números que sumas o promedias." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crear, revisar y compartir",
      lessons: [
        {
          title: "Elegir el gráfico correcto",
          objectives: ["O3"],
          minutes: 6,
          goal: "Elegir y crear el gráfico que corresponde a cada tipo de pregunta.",
          text: [
            "Elige el gráfico según la pregunta. Un cambio en el tiempo (ventas por día o por mes) va en un gráfico de líneas. Una comparación entre grupos (ventas por producto) va en un gráfico de barras o de columnas, ordenado de mayor a menor. Las partes de un todo (parte de las ventas por categoría) pueden ir en un gráfico circular o de anillo, pero solo con pocas porciones; muchas veces un gráfico de barras es más claro.",
            "Un número clave solo va en una tarjeta en Power BI o en un cuadro de resultados (scorecard) en Data Studio. Los valores exactos que la gente necesita consultar van en una tabla. Un mapa solo ayuda cuando el lugar importa.",
            "Para crearlo: en Power BI Desktop, haz clic en un objeto visual en el panel Visualizaciones y luego arrastra una dimensión (Product) y una medida (Total) a sus campos. En Data Studio, elige Añadir un gráfico, elige el tipo y luego define la dimensión y la métrica.",
            "Mantén los gráficos honestos: las barras empiezan en cero, cada gráfico tiene un título claro que dice lo que muestra (\"Ventas por producto, octubre\") y usas un solo color, salvo que el color signifique algo."
          ],
          steps: ["Lee la pregunta: ¿es sobre el tiempo, sobre comparar grupos, sobre partes de un todo o sobre un solo número?", "Tiempo: gráfico de líneas. Comparar: barras, ordenadas. Partes: circular con pocas porciones, o barras. Un número: tarjeta.", "Agrega el gráfico y define la dimensión y la medida.", "Ponle un título que diga lo que muestra y el periodo de tiempo.", "Revisa que las barras empiecen en cero."],
          words: [["Gráfico de líneas", "un gráfico que muestra cómo cambia un número con el tiempo."], ["Gráfico de barras", "un gráfico de barras que compara grupos; los gráficos de columnas son barras de pie."], ["Gráfico circular", "un círculo dividido en porciones que muestra las partes de un todo."], ["Tarjeta / cuadro de resultados", "un recuadro que muestra un solo número grande, como las ventas totales."], ["Objeto visual", "la palabra de Power BI para un gráfico, una tarjeta, una tabla o un mapa."]],
          slides: [
            { title: "El gráfico según la pregunta", bullets: ["En el tiempo: gráfico de líneas", "Comparar grupos: gráfico de barras, ordenado", "Partes de un todo: pocas porciones, o barras", "Un número: tarjeta o cuadro de resultados"] },
            { title: "Créalo", bullets: ["Power BI: elige un objeto visual, arrastra los campos", "Data Studio: Añadir un gráfico, define dimensión y métrica"] },
            { title: "Mantenlo honesto", bullets: ["Las barras empiezan en cero", "El título dice qué muestra y cuándo", "Un solo color, salvo que el color signifique algo"] }
          ],
          tryIt: "Con tus datos de la panadería, crea tres gráficos: (1) ventas totales por fecha como gráfico de líneas, (2) ventas totales por producto como gráfico de barras ordenado de mayor a menor, (3) ventas totales en una tarjeta o cuadro de resultados. Ponle a cada uno un título claro. Luego escribe una oración sobre lo que te dice cada gráfico.",
          youCanNow: "elegir un gráfico de líneas, de barras, circular, una tarjeta o una tabla según la pregunta y crearlo con un título claro.",
          quickCheck: [
            { objective: "O3", q: "¿Qué gráfico muestra mejor cómo cambiaron las ventas cada día de este mes?", options: ["Un gráfico circular", "Un mapa", "Una sola tarjeta", "Un gráfico de líneas"], answer: 3, why: "Los gráficos de líneas muestran el cambio en el tiempo." },
            { objective: "O3", q: "Quieres comparar las ventas de 8 productos. ¿Qué es más claro?", options: ["Un gráfico circular con 8 porciones", "Un gráfico de barras ordenado de mayor a menor", "Un mapa", "Una tabla de fechas"], answer: 1, why: "Un gráfico de barras ordenado facilita comparar; 8 porciones de un círculo son difíciles de leer." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Organizar el tablero con tarjetas y filtros",
          objectives: ["O4"],
          minutes: 6,
          goal: "Crear un tablero de una página con tarjetas de números clave, gráficos, un filtro de fecha y otro filtro más.",
          text: [
            "La gente lee una pantalla empezando por la esquina superior izquierda. Pon las tarjetas de números clave en una fila en la parte de arriba, el gráfico más importante debajo y los detalles más abajo. Agrega un título para toda la página y el rango de fechas que cubre.",
            "Los filtros dejan que quien mira cambie lo que ve. En Power BI se llaman segmentaciones (slicers): agrega un objeto visual de segmentación y pon Date en él, luego agrega otro para Category. En Data Studio se llaman controles: elige Añadir un control, elige Control de periodo y luego agrega un control de Lista desplegable para Category.",
            "Prueba los filtros: elige una categoría y asegúrate de que cambien todas las tarjetas y todos los gráficos. Si uno no cambia, no está conectado a los mismos datos.",
            "Deja espacio en blanco, alinea los elementos y quita todo lo que no ayude a responder la pregunta. Luego haz la prueba del minuto: muéstrale la página a un amigo y hazle la pregunta del tablero. ¿Puede responderla en menos de un minuto?"
          ],
          steps: ["Agrega un título de página y el rango de fechas.", "Pon 3 a 5 tarjetas de números clave en una fila arriba.", "Pon el gráfico principal debajo de las tarjetas y los demás gráficos más abajo.", "Agrega un filtro de fecha (segmentación o control de periodo).", "Agrega un filtro más, como Category.", "Prueba: cambia cada filtro y mira que cambien todas las tarjetas y gráficos.", "Haz la prueba del minuto con otra persona."],
          words: [["Diseño de página", "el lugar donde va cada tarjeta y cada gráfico en la página."], ["Filtro", "un control que deja que quien mira vea solo una parte de los datos, como un mes."], ["Segmentación (slicer)", "el nombre que Power BI le da a un filtro en la página."], ["Control", "el nombre que Data Studio le da a un filtro en la página, como un control de periodo."]],
          slides: [
            { title: "Diseño de página", bullets: ["Tarjetas de números clave arriba, en una fila", "Gráfico principal debajo, detalles más abajo", "Título de la página con el rango de fechas"] },
            { title: "Filtros", bullets: ["Power BI: segmentación para Date y Category", "Data Studio: Control de periodo y Lista desplegable"] },
            { title: "Pruébalo", bullets: ["Cambia un filtro: ¿se actualiza todo?", "Quita lo que no ayude", "Prueba del minuto con un amigo"] }
          ],
          tryIt: "Pon tus tres gráficos de la Lección 4 en una página. Agrega al menos una tarjeta más de número clave (por ejemplo artículos vendidos o venta promedio), un filtro de fecha y un filtro de Category. Alinea todo. Luego hazle a alguien la pregunta del tablero y mide cuánto tarda en responder usando la página.",
          youCanNow: "organizar un tablero de una página con tarjetas de números clave, gráficos y filtros que funcionan, y que alguien puede leer en menos de un minuto.",
          quickCheck: [
            { objective: "O4", q: "¿Dónde suelen ir las tarjetas de números clave?", options: ["En una fila en la parte de arriba", "Escondidas en una segunda página", "Hasta abajo", "Dentro del gráfico circular"], answer: 0, why: "La gente lee desde la esquina superior izquierda, así que los números clave van primero." },
            { objective: "O4", q: "Eliges una categoría en el filtro, pero un gráfico no cambia. ¿Qué significa?", options: ["El tablero está terminado", "Ese gráfico no está conectado a los mismos datos o al mismo filtro", "Los filtros nunca cambian los gráficos", "Necesitas una pantalla más grande"], answer: 1, why: "Todas las tarjetas y gráficos deben responder; el que no responde hay que arreglarlo." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Revisar los números y compartir con seguridad",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Revisar 3 totales del tablero contra los datos de origen y luego compartirlo en solo lectura con un resumen corto.",
          text: [
            "Un tablero solo sirve si se puede confiar en él. Antes de que alguien lo vea, revisa al menos 3 números. Ejemplo: la tarjeta dice que las ventas totales fueron $1,240. En tu hoja, usa SUM en la columna Total para las mismas fechas. ¿Coinciden? Luego revisa un producto y un día de la misma forma.",
            "Si un número no coincide, busca las causas de siempre: un filtro sigue puesto, volvieron los duplicados, una columna es texto en vez de número, el rango de fechas es otro, o la tarjeta usa Recuento (Count) en vez de Suma (Sum).",
            "Comparte con seguridad. En Data Studio, usa el botón Compartir y da acceso de lectura, no de edición. Con Power BI Desktop, exporta la página a PDF o guarda el archivo y envíalo solo a la persona correcta; publicarlo en línea puede requerir una cuenta del trabajo o de la escuela. Nunca pongas datos reales de clientes, pacientes o empleados en un tablero de práctica.",
            "Agrega un resumen de 3 oraciones: qué muestra el tablero, el hallazgo más importante y una acción sugerida. Ejemplo: \"Esto muestra las ventas de la panadería en octubre. Los muffins dejaron más dinero y los sábados fueron el día con más trabajo. Podríamos hornear más muffins y agregar una persona al personal los sábados.\""
          ],
          steps: ["Quita todos los filtros.", "Revisa 3 números contra la hoja de origen: el total, un producto y un día.", "Si uno está mal, revisa filtros, duplicados, tipos de dato, fechas, y Suma o Recuento.", "Comparte con acceso de solo lectura, o exporta a PDF.", "Escribe un resumen de 3 oraciones: qué muestra, el hallazgo principal, una acción."],
          words: [["Validar", "comprobar que un número es correcto comparándolo con el origen."], ["Acceso de solo lectura", "las personas pueden ver el tablero, pero no pueden cambiarlo."], ["Exportar", "guardar una copia en otro formato, como PDF."], ["Hallazgo", "algo útil que descubres y que ayuda a alguien a decidir qué hacer."]],
          slides: [
            { title: "Revisa antes de compartir", bullets: ["Quita los filtros", "Revisa 3 números contra la hoja de origen", "El total, un producto, un día"] },
            { title: "Si un número está mal", bullets: ["Un filtro sigue puesto", "Duplicados o números como texto", "Otras fechas, o Recuento en vez de Suma"] },
            { title: "Comparte con seguridad", bullets: ["Acceso de solo lectura, no de edición", "O exporta a PDF", "Nada de datos privados reales en la práctica"] },
            { title: "Escribe un resumen de 3 oraciones", bullets: ["Qué muestra", "El hallazgo principal", "Una acción sugerida"] }
          ],
          tryIt: "Termina tu tarea final: revisa 3 números de tu tablero contra tu hoja y anota cada par. Corrige lo que no coincida. Luego compártelo en solo lectura (Data Studio) o exporta un PDF (Power BI), y escribe tu resumen de 3 oraciones. Califícate con la rúbrica antes de darlo por terminado.",
          youCanNow: "revisar los números de un tablero contra su origen, compartirlo con seguridad y explicar en tres oraciones lo que muestra.",
          quickCheck: [
            { objective: "O5", q: "Tu tarjeta dice 340 artículos vendidos, pero SUM de Units en la hoja da 310. ¿Qué revisas primero?", options: ["Los colores del gráfico", "La fuente del título de la página", "Si hay un filtro puesto o si volvieron los duplicados", "El brillo de la pantalla"], answer: 2, why: "Los filtros y los duplicados son causas comunes de totales que no coinciden." },
            { objective: "O6", q: "Tu gerente solo necesita ver el tablero. ¿Qué acceso le das?", options: ["Tu contraseña", "Acceso de edición", "Acceso de propietario", "Acceso de solo lectura"], answer: 3, why: "La solo lectura le permite verlo sin cambiarlo por accidente." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crear, revisar y compartir",
        questions: [
          { objective: "O3", q: "¿Qué gráfico muestra UN solo número grande, como las ventas totales de este mes?", options: ["Un gráfico de líneas", "Una tarjeta o cuadro de resultados", "Un mapa", "Una tabla de 100 filas"], answer: 1, why: "Una tarjeta (Power BI) o un cuadro de resultados (Data Studio) muestra un número clave." },
          { objective: "O3", q: "Las barras de un gráfico empiezan en 900 en vez de 0. ¿Cuál es el problema?", options: ["Las diferencias pequeñas parecen mucho más grandes de lo que son", "Ninguno; se ve mejor", "Los colores están mal", "El título es muy largo"], answer: 0, why: "Las barras que no empiezan en cero exageran las diferencias." },
          { objective: "O4", q: "En Power BI, ¿cómo se llama un filtro en la página?", options: ["Una tarjeta", "Una fuente", "Una métrica", "Una segmentación (slicer)"], answer: 3, why: "Power BI llama segmentaciones a los filtros de la página; Data Studio los llama controles." },
          { objective: "O5", q: "¿Cuántos números debes revisar contra el origen antes de compartir?", options: ["Ninguno; la herramienta siempre tiene razón", "Solo el título de la página", "Al menos 3, como el total, un producto y un día", "Solo los números que pida tu gerente"], answer: 2, why: "Revisar varios números detecta errores de filtros, duplicados y tipos de dato." },
          { objective: "O6", q: "¿Cuál es la mejor oración de resumen para compartir con un tablero?", options: ["\"Aquí hay unos gráficos.\"", "\"Los muffins dejaron más dinero en octubre, así que podríamos hornear más los sábados.\"", "\"Usé muchos colores.\"", "\"Míralo tú mismo.\""], answer: 1, why: "Un buen resumen dice el hallazgo y una acción sugerida." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear tableros de datos (Power BI y Data Studio)",
    questions: [
      { objective: "O1", q: "¿Qué es un tablero?", options: ["Una lista de contraseñas", "Una pantalla con números clave y gráficos que ayuda a alguien a decidir", "Un tipo de fórmula de hoja de cálculo", "Una configuración de la impresora"], answer: 1, why: "Un tablero pone en una sola pantalla los números clave para una decisión." },
      { objective: "O1", q: "¿Cuál es una pregunta clara para un tablero?", options: ["\"Muéstrame datos.\"", "\"Que se vea bonito.\"", "\"Todo sobre el negocio.\"", "\"¿Qué productos dejan más dinero cada mes?\""], answer: 3, why: "Es una pregunta concreta que un tablero puede responder." },
      { objective: "O1", q: "Para cada número clave escribes su nombre, cómo se calcula y:", options: ["Su periodo de tiempo", "Su color favorito", "El precio de la herramienta", "Tu contraseña"], answer: 0, why: "Un número clave necesita un periodo, como este mes, para tener sentido." },
      { objective: "O2", q: "En una tabla ordenada, cada fila es:", options: ["Un gráfico", "Un total", "Un registro, como una venta", "Un título"], answer: 2, why: "Una fila por registro y una columna por campo es una tabla ordenada." },
      { objective: "O2", q: "Las fechas de tu hoja están escritas como \"10/3/26\" y \"Oct 3\". ¿Qué haces?", options: ["Dejas las dos", "Borras la columna de fechas", "Agregas un tercer estilo", "Das formato a la columna para que cada fecha sea una fecha real con un solo estilo"], answer: 3, why: "Un solo formato de fecha permite que la herramienta agrupe y filtre bien por fecha." },
      { objective: "O2", q: "¿De dónde obtienes Power BI Desktop?", options: ["Del sitio web oficial de Microsoft", "De un enlace en un mensaje de un desconocido", "De cualquier sitio de descargas gratis", "De un anuncio emergente"], answer: 0, why: "Descarga programas solo del sitio oficial de la empresa." },
      { objective: "O2", q: "En Data Studio, ¿cómo conectas una hoja de Google Sheets?", options: ["Le mandas la hoja por correo a Google", "Creas una fuente de datos con el conector de Google Sheets", "La imprimes y la escaneas", "Vuelves a escribir cada número"], answer: 1, why: "El conector de Google Sheets enlaza la hoja como fuente de datos." },
      { objective: "O3", q: "¿Qué pregunta corresponde a un gráfico de líneas?", options: ["¿Qué parte de las ventas es pan?", "¿Cuál es nuestro número de teléfono?", "¿Cómo cambiaron las ventas semanales en 3 meses?", "¿Qué tienda está en qué ciudad?"], answer: 2, why: "Los gráficos de líneas muestran el cambio en el tiempo." },
      { objective: "O3", q: "¿Qué pregunta corresponde a un gráfico de barras ordenado?", options: ["¿Cuál de nuestros 6 productos se vendió más?", "¿Cuánto vendimos en total hoy?", "¿A qué hora abre la tienda?", "¿Cómo cambiaron las ventas cada hora?"], answer: 0, why: "Los gráficos de barras comparan grupos; al ordenarlos se ve fácil el mayor." },
      { objective: "O3", q: "¿Cuándo es razonable usar un gráfico circular?", options: ["Para mostrar un cambio a lo largo de 12 meses", "Para mostrar una parte de un total con pocas porciones", "Para comparar 15 productos", "Para mostrar un solo número"], answer: 1, why: "Los gráficos circulares muestran partes de un todo y solo se leen bien con pocas porciones." },
      { objective: "O3", q: "Un buen título de gráfico:", options: ["Dice \"Gráfico 1\"", "Se deja en blanco", "Está en letra muy pequeña", "Dice qué muestra y el periodo de tiempo"], answer: 3, why: "\"Ventas por producto, octubre\" le dice a quien mira exactamente qué está viendo." },
      { objective: "O4", q: "En Data Studio, un filtro en la página se llama:", options: ["Segmentación", "Tipo de dato", "Control", "Medida"], answer: 2, why: "Data Studio llama controles a los filtros de la página, como el control de periodo." },
      { objective: "O4", q: "¿Qué es la prueba del minuto?", options: ["Hacerle a alguien la pregunta del tablero y ver si puede responderla con la página en menos de un minuto", "Crear el tablero en un minuto", "Mostrar la página un segundo", "Reiniciar la computadora"], answer: 0, why: "Si quien mira puede responder rápido, el diseño funciona." },
      { objective: "O4", q: "Cambias el filtro de Category y se actualizan todas las tarjetas y gráficos. Esto muestra que:", options: ["Los datos están mal", "Los filtros funcionan en toda la página", "El tablero necesita más páginas", "Los colores están dañados"], answer: 1, why: "Que todo cambie a la vez significa que el filtro está conectado a todos los objetos visuales." },
      { objective: "O5", q: "El total del tablero es $1,240 y SUM en la hoja para las mismas fechas da $1,240. Esto significa que:", options: ["El total está revisado y coincide", "El tablero está mal", "Debes borrar la hoja", "Necesitas otra herramienta"], answer: 0, why: "Comparar con el origen es la forma de validar un número." },
      { objective: "O5", q: "Una tarjeta muestra 52 cuando esperabas ventas totales de $1,240. Una causa probable es:", options: ["El título de la página", "Los colores de las barras", "La tarjeta usa Recuento en vez de Suma", "El tamaño de la letra"], answer: 2, why: "Recuento da la cantidad de filas, no el total de los valores." },
      { objective: "O5", q: "¿Cuándo debes revisar los números?", options: ["Nunca", "Solo después de que el jefe encuentre un error", "Solo una vez al año", "Antes de que otra persona vea el tablero"], answer: 3, why: "Revisar primero evita que números equivocados lleven a decisiones equivocadas." },
      { objective: "O6", q: "¿Qué NUNCA debe ir en un tablero de práctica?", options: ["Ventas inventadas de una panadería", "Nombres y teléfonos de clientes reales", "Categorías de productos", "Fechas"], answer: 1, why: "Los datos de práctica son inventados; los datos privados reales se deben proteger." },
      { objective: "O6", q: "¿Qué te da este curso?", options: ["El certificado PL-300", "El certificado CompTIA Data+", "Una licencia de conducir", "Preparación y un tablero para tu portafolio; los exámenes se presentan aparte"], answer: 3, why: "El curso te prepara; Microsoft y CompTIA dan sus certificaciones después de sus propios exámenes." },
      { objective: "O6", q: "Un buen resumen de 3 oraciones incluye qué muestra el tablero, el hallazgo principal y:", options: ["Una acción sugerida", "Tu dirección", "La historia de la herramienta", "Una lista de todas las filas"], answer: 0, why: "Una acción convierte el hallazgo en una decisión." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a revisarla.",
    criteria: [
      { name: "Pregunta y números clave", objective: "O1", notYet: "No hay una pregunta clara, o hay más de 5 números sin periodo de tiempo.", meets: "Pregunta en una oración, público nombrado, 3 a 5 números clave, cada uno con cómo se calcula y su periodo.", exceeds: "Además nombra la decisión que apoya el tablero y por qué cada número importa para ella." },
      { name: "Datos ordenados", objective: "O2", notYet: "Quedan duplicados, filas vacías, formatos de fecha mezclados o números guardados como texto.", meets: "Una fila de encabezados, una fila por registro, tipos de dato correctos, sin duplicados.", exceeds: "Guarda la hoja original y una nota corta de cada arreglo hecho." },
      { name: "Gráficos correctos", objective: "O3", notYet: "Los tipos de gráfico no corresponden a las preguntas, o faltan títulos.", meets: "Al menos 2 gráficos que corresponden a sus preguntas, con títulos claros; las barras empiezan en cero.", exceeds: "Puede explicar por qué eligió cada tipo de gráfico en vez de otro." },
      { name: "Diseño y filtros", objective: "O4", notYet: "Faltan tarjetas, o los filtros no actualizan todos los objetos visuales.", meets: "3 o más tarjetas de números clave arriba, un filtro de fecha y otro filtro que actualizan todo; pasa la prueba del minuto.", exceeds: "Diseño limpio y alineado, sin nada de más; quien mira responde en mucho menos de un minuto." },
      { name: "Números revisados", objective: "O5", notYet: "No se revisó ningún número contra el origen.", meets: "3 números revisados y anotados; cualquier diferencia corregida.", exceeds: "Explica la causa de una diferencia que encontró y cómo la corrigió." },
      { name: "Compartido con seguridad y con resumen", objective: "O6", notYet: "Compartido con acceso de edición, contiene datos privados o no tiene resumen.", meets: "Compartido en solo lectura o exportado a PDF, sin datos privados, con un resumen de 3 oraciones que tiene un hallazgo y una acción.", exceeds: "El resumen está listo para leerlo en voz alta en una entrevista de trabajo como pieza de portafolio." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y crean un tablero que cumple la rúbrica",
      "Participantes que agregan el tablero a su currículum, portafolio o perfil de LinkedIn en un plazo de 30 días",
      "Participantes que programan o aprueban el PL-300 o CompTIA Data+, o empiezan un trabajo de datos o informes, en un plazo de 6 meses (encuesta de seguimiento)",
      "Participantes con pequeños negocios que usan un tablero para decidir sobre inventario, personal o precios"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Una computadora con internet: Windows para Power BI Desktop, o cualquier computadora con navegador para Data Studio",
      "Una cuenta gratuita de Google (Google Sheets y Data Studio), y Power BI Desktop del sitio oficial de Microsoft si se usa Windows",
      "Los datos inventados de ventas de la panadería (cada participante escribe 15 filas o más) u otro conjunto de datos inventado de su propio campo",
      "Papel y lápiz para el plan del tablero",
      "Unas 2 a 3 horas en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Revise primero los equipos: quienes tengan Mac, Chromebook o computadoras de biblioteca usan Data Studio; quienes usen Windows pueden elegir cualquiera de las dos herramientas.",
      "Aplique la prueba inicial antes de la Lección 1 y compárela con el examen final.",
      "Pida a los participantes que guarden la hoja del plan de la Lección 1; guía toda la tarea final.",
      "Nunca use datos reales de clientes, pacientes o empleados en clase. Recuerde a veteranos y personas que buscan trabajo que usen números inventados también en sus piezas de portafolio.",
      "Califique el tablero final con la rúbrica y pida a cada participante que lo presente en 60 segundos, como práctica para una entrevista.",
      "Remita a los participantes a las páginas oficiales del PL-300 y de CompTIA Data+ para ver el contenido actual del examen, cómo programarlo y su costo; no cite precios de memoria."
    ]
  }
};

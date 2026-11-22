"use strict";

// Koach Learn course (shared), Spanish translation of shared/data-science-beginners.js. See scripts/koachlearn-courses/README.md, "Translations".
// pandas code, and the column names and values of the tips dataset (total_bill, tip, day, time, "Dinner"), stay in English because they are what the data contains.

const COLAB = { name: "Google Colab: Preguntas frecuentes", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas: 10 minutos con pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn: load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners-es",
  lang: "es",
  translationOf: "data-science-beginners",
  category: "Youth",
  name: "Introducción a la ciencia de datos y el análisis de datos",
  skills: "Hacer una pregunta que los datos puedan responder, Calcular promedios y detectar valores atípicos, Cargar datos con pandas, Limpiar y agrupar datos, Hacer un gráfico y compartir hallazgos",
  outcome: "tomar un conjunto de datos real en Google Colab, cargarlo con pandas, limpiarlo, responder una pregunta clara con promedios y grupos, hacer un gráfico y escribir tres hallazgos honestos.",
  about: [
    "Los analistas de datos convierten filas de números en respuestas con las que la gente puede actuar: qué día está más llena una tienda, qué ejercicio del equipo ayuda más, adónde va el dinero de un programa. Es una de las habilidades laborales más útiles hoy, y puedes empezar gratis.",
    "El Capítulo 1 enseña la forma de pensar sin código: hacer una buena pregunta, conocer tus datos y usar promedios sin dejarte engañar. El Capítulo 2 pasa a Google Colab, un sitio web gratuito que ejecuta Python, donde usas pandas, la herramienta de datos más popular de Python, con un conjunto de datos real de un restaurante.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "En Google Colab, carga con pandas el conjunto de datos de propinas de un restaurante, revisa si faltan valores, agrega una columna con la propina como porcentaje de la cuenta, encuentra el porcentaje de propina promedio para cada día y para el almuerzo frente a la cena, haz un gráfico de barras de uno de ellos y escribe tres hallazgos en oraciones sencillas, incluida una cosa que los datos no te pueden decir.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes y adultos que empiezan con los datos: estudiantes de secundaria y de universidad, miembros de programas juveniles, entrenadores, personal de pequeños negocios y de organizaciones sin fines de lucro, y personas que cambian de carrera y miran puestos de analista de datos.",
    startingPoint: "Pueden usar una computadora y un navegador web y han escrito un poco de Python. Muchos usan hojas de cálculo, pero nunca han cargado datos en pandas, revisado si faltan valores, comparado grupos ni escrito hallazgos que digan sus límites.",
    gap: "Los equipos, las escuelas, los negocios y las organizaciones sin fines de lucro toman decisiones con datos, y el análisis de datos es una puerta de entrada común a los empleos de tecnología. Sin los pasos básicos, las personas responden la pregunta equivocada, se dejan engañar por los valores atípicos o la correlación, o comparten gráficos y afirmaciones que los datos no pueden respaldar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican términos como DataFrame, mediana, valor atípico y correlación",
      "Dispositivos: una computadora de escritorio o portátil con navegador web",
      "Cuentas y costo: una cuenta gratuita de Google para Google Colab; pandas y seaborn ya vienen instalados",
      "Tiempo: unos 5 a 6 minutos por lección más práctica, unos 60 a 75 minutos en total",
      "Matemáticas: solo promedios y porcentajes"
    ],
    prerequisites: "Introducción a la programación con Python."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una pregunta real, como la de un entrenador o una tienda", action: "nombrar en orden los cinco pasos de un proyecto de datos y relacionar cada uno con el ejemplo", standard: "con los cinco pasos (Preguntar, Conseguir, Limpiar, Explorar, Compartir) en el orden correcto" },
    { id: "O2", condition: "Con una tabla de datos y una pregunta", action: "describir qué guarda cada columna y de qué tipo es, y comprobar si los datos pueden responder la pregunta", standard: "nombrando bien las columnas numéricas y categóricas y diciéndolo cuando una pregunta no se puede responder" },
    { id: "O3", condition: "Con una lista corta de números o una afirmación sobre dos cosas", action: "calcular la media y la mediana, identificar cualquier valor atípico y comprobar si una afirmación confunde correlación con causalidad", standard: "con la media y la mediana correctas y cada confusión entre correlación y causalidad nombrada" },
    { id: "O4", condition: "En Google Colab con pandas", action: "cargar un conjunto de datos en un DataFrame y describir sus filas, columnas y tipos", standard: "usando head(), shape, info() y describe() e informando bien los resultados" },
    { id: "O5", condition: "Con un DataFrame cargado", action: "revisar si faltan valores, agregar una columna calculada, filtrar filas y comparar grupos", standard: "con el código de cada paso funcionando y cualquier limpieza anotada" },
    { id: "O6", condition: "Con los resultados de tus grupos", action: "hacer un gráfico de barras con título y escribir hallazgos que digan sus límites", standard: "con números de tus propios resultados y al menos un límite honesto" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pensar como un analista de datos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es la ciencia de datos y los cinco pasos",
          minutes: 4,
          goal: "Nombrar los cinco pasos de un proyecto de datos y relacionarlos con un ejemplo real.",
          text: [
            "Ciencia de datos significa usar datos para responder preguntas y tomar mejores decisiones. El análisis de datos es la parte práctica: limpiar, contar, comparar y hacer gráficos.",
            "Casi todos los proyectos siguen cinco pasos. Preguntar: ¿qué quieres saber? Conseguir: encontrar los datos. Limpiar: arreglar errores y huecos. Explorar: contar, sacar promedios, comparar y hacer gráficos. Compartir: decirle a la gente lo que encontraste con palabras sencillas.",
            "Ejemplo: una entrenadora de fútbol juvenil pregunta \"¿Anotamos más en el segundo tiempo?\" Consigue los marcadores de cada partido, quita un partido que se canceló, suma los goles del primer y del segundo tiempo y comparte un gráfico sencillo con el equipo."
          ],
          steps: ["Haz una pregunta clara.", "Consigue los datos.", "Límpialos.", "Explóralos con conteos, promedios y gráficos.", "Comparte lo que encontraste."],
          words: [["Datos", "hechos y números reunidos sobre algo."], ["Ciencia de datos", "usar datos para responder preguntas y guiar decisiones."], ["Análisis de datos", "limpiar, resumir y graficar datos para encontrar respuestas."], ["Conjunto de datos", "una colección de datos, normalmente una tabla."]],
          slides: [
            { title: "La ciencia de datos es", bullets: ["Usar datos para responder preguntas", "Y para tomar mejores decisiones"] },
            { title: "Los cinco pasos", bullets: ["Preguntar, Conseguir, Limpiar", "Explorar, Compartir"] },
            { title: "Ejemplo: la entrenadora de fútbol", bullets: ["Preguntar: ¿más goles en el segundo tiempo?", "Conseguir y limpiar los marcadores", "Explorar y compartir un gráfico sencillo"] }
          ],
          tryIt: "Piensa en una pregunta de tu vida, tu trabajo o tu comunidad que los datos podrían responder (por ejemplo \"¿Qué día gasto más?\"). Escribe lo que harías en cada uno de los cinco pasos.",
          youCanNow: "describir los cinco pasos de un proyecto de datos y planear uno.",
          quickCheck: [
            { objective: "O1", q: "¿Qué pasa en el paso Limpiar de un proyecto de datos?", options: ["Haces la pregunta", "Arreglas los errores y los huecos de los datos", "Compartes el gráfico", "Juntas más datos"], answer: 1, why: "Limpiar significa arreglar los errores y los huecos antes de explorar." },
            { objective: "O1", q: "El dueño de una tienda pregunta: \"¿Qué día vendemos más?\". ¿Qué harías justo después de este paso Preguntar?", options: ["Hacer un gráfico", "Escribir los hallazgos", "Sacar el promedio de los días de la semana", "Conseguir los datos de ventas con sus fechas"], answer: 3, why: "Después de Preguntar viene Conseguir: encontrar los datos que pueden responder la pregunta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Conocer tus datos: filas, columnas y tipos",
          minutes: 5,
          goal: "Leer una tabla de datos y decir qué guarda cada columna y de qué tipo es.",
          text: [
            "La mayoría de los datos vienen en una tabla. Datos ordenados significa que cada fila es una cosa que mediste (un partido, una venta, una persona) y cada columna es un dato sobre ella (fecha, cantidad, equipo).",
            "Las columnas tienen tipos. Los números son aquellos con los que puedes hacer cuentas, como el precio o los minutos. Las categorías son grupos, como el día de la semana o el nombre del equipo: las cuentas, pero no les sacas promedio. Las fechas son su propio tipo.",
            "Las buenas preguntas van con los datos que tienes. \"¿Cuál es la venta promedio de los sábados?\" necesita una columna con el monto de la venta y una columna con el día. Si los datos no lo tienen, no puedes responderla, y decirlo es parte del trabajo."
          ],
          steps: ["Di qué representa una fila.", "Haz una lista de cada columna y lo que significa.", "Marca cada columna como número, categoría o fecha.", "Revisa que tu pregunta se pueda responder con estas columnas."],
          words: [["Fila", "un registro: una cosa que mediste."], ["Columna", "un dato que se anota para cada fila."], ["Datos ordenados", "una fila por cosa, una columna por dato."], ["Numérica", "una columna de números con los que puedes hacer cuentas."], ["Categórica", "una columna de grupos o etiquetas, como el día o el equipo."]],
          slides: [
            { title: "Datos ordenados", bullets: ["Cada fila: una cosa medida", "Cada columna: un dato sobre ella"] },
            { title: "Tipos de columna", bullets: ["Números: precio, minutos", "Categorías: día, equipo", "Fechas"] },
            { title: "Relaciona la pregunta con los datos", bullets: ["La pregunta necesita las columnas correctas", "Falta una columna = no puedes responderla", "Dilo con honestidad"] }
          ],
          tryIt: "Haz una pequeña tabla de tus últimos 7 días: fecha, día de la semana, horas de sueño y ánimo del 1 al 5. Marca cada columna como número, categoría o fecha, y escribe una pregunta que la tabla puede responder y una que no.",
          youCanNow: "leer una tabla, nombrar el tipo de cada columna y revisar si una pregunta va con los datos.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es una columna categórica?", options: ["Una columna de precios", "Una columna solo de fechas", "Una columna de grupos, como el nombre del equipo o el día de la semana", "Una columna de promedios"], answer: 2, why: "Las categorías son grupos que cuentas, no que promedias." },
            { objective: "O2", q: "Tu tabla de ventas tiene columnas de monto y de día, pero no de hora. Alguien pregunta si las mañanas venden más. ¿Qué dirías?", options: ["Los datos no pueden responder eso, porque no hay columna de hora", "Las mañanas venden más", "Sacar el promedio de la columna del día", "Adivinar a partir de los montos"], answer: 0, why: "Si los datos no lo tienen, no lo puedes responder, y decirlo es parte del trabajo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Promedios, valores atípicos y no dejarse engañar",
          minutes: 6,
          goal: "Calcular la media y la mediana, detectar un valor atípico y evitar un error común.",
          text: [
            "La media (promedio) es el total dividido entre la cantidad de valores. La mediana es el valor del medio cuando los ordenas. Para 3, 4, 4, 5 y 34, la media es 50 / 5 = 10, pero la mediana es 4.",
            "Ese 34 es un valor atípico: un valor muy lejos de los demás. Puede ser un error al escribir, o puede ser real e importante. Los valores atípicos jalan mucho la media pero casi no mueven la mediana, así que cuando hay valores atípicos, la mediana suele describir mejor un valor típico.",
            "Que dos cosas se muevan juntas se llama correlación, pero eso no prueba que una cause la otra. Las ventas de helado y las quemaduras de sol suben las dos en verano: el sol causa ambas. Antes de afirmar una causa, busca otra explicación."
          ],
          steps: ["Ordena los números.", "Media: súmalos y divide entre la cantidad.", "Mediana: toma el del medio (o el promedio de los dos del medio).", "Busca valores muy lejos de los demás y revisa si son errores.", "Antes de decir \"X causa Y\", busca otra explicación."],
          words: [["Media", "el promedio: total dividido entre la cantidad."], ["Mediana", "el valor del medio cuando los números están ordenados."], ["Valor atípico", "un valor muy lejos de los demás."], ["Correlación", "dos cosas que tienden a moverse juntas."], ["Causalidad", "que una cosa de verdad haga que pase otra."]],
          slides: [
            { title: "Media y mediana", bullets: ["Media: total / cantidad", "Mediana: el valor del medio ya ordenado", "3, 4, 4, 5, 34: media 10, mediana 4"] },
            { title: "Valores atípicos", bullets: ["Muy lejos de los otros valores", "Un error, o algo real e importante", "Jalan la media, no la mediana"] },
            { title: "Correlación no es causalidad", bullets: ["El helado y las quemaduras de sol suben juntos", "El sol causa ambos", "Busca primero otra explicación"] }
          ],
          tryIt: "Aquí hay 7 tiempos de entrega en minutos: 22, 25, 19, 24, 95, 21, 23. Calcula a mano la media y la mediana, nombra el valor atípico y escribe qué número describe mejor una entrega típica y por qué. (Media cerca de 32.7, mediana 23.)",
          youCanNow: "calcular una media y una mediana, detectar valores atípicos y no confundir correlación con causalidad.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es la media de 2, 4, 6 y 8?", options: ["5", "4", "6", "20"], answer: 0, why: "2 + 4 + 6 + 8 = 20, y 20 / 4 = 5." },
            { objective: "O3", q: "Esta semana, las esperas del autobús fueron de 5, 6, 5, 7 y 60 minutos. ¿Qué número informarías como espera típica?", options: ["La media, 16.6", "La más alta, 60", "La mediana, 6", "El total, 83"], answer: 2, why: "El 60 es un valor atípico que sube la media; la mediana muestra una espera típica." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Pensar como un analista de datos",
        questions: [
          { objective: "O1", q: "¿Cuál es el primer paso de un proyecto de datos?", options: ["Hacer un gráfico", "Borrar los valores atípicos", "Hacer una pregunta clara", "Compartir los resultados"], answer: 2, why: "Una pregunta clara guía todos los demás pasos." },
          { objective: "O2", q: "En una tabla de partidos, ¿de qué tipo es la columna \"nombre del equipo\"?", options: ["Categórica", "Numérica", "Fecha", "Valor atípico"], answer: 0, why: "Los nombres de los equipos son grupos, no números." },
          { objective: "O3", q: "¿Cuál es la mediana de 2, 9, 3, 7, 5?", options: ["3", "5", "5.2", "7"], answer: 1, why: "Ordenados: 2, 3, 5, 7, 9. El valor del medio es 5." },
          { objective: "O3", q: "Una casa de una lista cuesta diez veces más que las demás. ¿Qué describe mejor una casa típica?", options: ["La media", "La mediana", "El precio más alto", "El total"], answer: 1, why: "Un solo valor atípico grande casi no jala la mediana." },
          { objective: "O3", q: "Los niños que hacen más deporte sacan mejores notas. ¿Qué NO debes concluir enseguida?", options: ["Que las dos cosas se mueven juntas", "Que el deporte causa las mejores notas", "Que más datos podrían ayudar", "Que puede haber otras razones"], answer: 1, why: "La correlación sola no prueba la causalidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Analizar datos con Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Cargar y mirar datos con pandas",
          minutes: 5,
          goal: "Cargar un conjunto de datos en un DataFrame de pandas en Colab y describirlo.",
          text: [
            "pandas es una biblioteca gratuita de Python para trabajar con tablas, y ya está en Google Colab. Una tabla en pandas se llama DataFrame, y normalmente se llama df.",
            "Para practicar usamos un conjunto de datos real de un restaurante con 244 comidas que viene con seaborn, una biblioteca de gráficos: df = sns.load_dataset(\"tips\"). Necesita internet, y Colab lo tiene. Sus columnas están en inglés e incluyen total_bill (total de la cuenta), tip (propina), day (día), time (Lunch, almuerzo, o Dinner, cena) y size (personas en la mesa). Para tus propios datos, pd.read_csv(\"archivo.csv\") carga un archivo CSV que subas.",
            "Cuatro órdenes te muestran lo que tienes: df.head() muestra las primeras cinco filas, df.shape da las filas y las columnas, df.info() da el tipo de cada columna y df.describe() da la cantidad, la media, el mínimo, el máximo y más para las columnas de números."
          ],
          steps: ["En un cuaderno nuevo de Colab ejecuta: import pandas as pd e import seaborn as sns", "Carga: df = sns.load_dataset(\"tips\")", "Mira: df.head()", "Tamaño y tipos: df.shape y df.info()", "Resumen: df.describe()"],
          words: [["pandas", "una biblioteca gratuita de Python para trabajar con tablas de datos."], ["DataFrame", "una tabla en pandas, con filas y columnas con nombre."], ["CSV", "un archivo de texto simple con una tabla, con comas entre los valores."], ["head()", "muestra las primeras filas de un DataFrame."], ["describe()", "da números de resumen para cada columna de números."]],
          slides: [
            { title: "pandas y los DataFrames", bullets: ["pandas: la herramienta de tablas de Python", "Una tabla es un DataFrame, a menudo llamado df", "Ya está en Google Colab"] },
            { title: "Carga los datos", bullets: ["df = sns.load_dataset(\"tips\")", "Tu propio archivo: pd.read_csv(\"archivo.csv\")"] },
            { title: "Mira antes de analizar", bullets: ["df.head(): primeras filas", "df.shape y df.info(): tamaño y tipos", "df.describe(): números de resumen"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Carga el conjunto de propinas en Colab. Anota cuántas filas y columnas tiene, qué columnas son números y cuáles son categorías, y la media y el máximo de total_bill que da df.describe().",
          youCanNow: "cargar un conjunto de datos con pandas y describir su tamaño, sus columnas y sus números de resumen.",
          quickCheck: [
            { objective: "O4", q: "¿Qué muestra df.info()?", options: ["Un gráfico de barras", "Solo la primera fila", "Los valores que faltaban ya completados", "El tipo de cada columna"], answer: 3, why: "df.info() muestra cada columna y su tipo." },
            { objective: "O4", q: "Subiste a Colab el archivo attendance.csv de tu club. ¿Qué línea usarías para cargarlo?", options: ["sns.load_dataset(\"attendance\")", "df = pd.read_csv(\"attendance.csv\")", "df.head(\"attendance.csv\")", "df.describe(\"attendance.csv\")"], answer: 1, why: "pd.read_csv carga un archivo CSV que subes." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Limpiar, filtrar y agrupar",
          minutes: 6,
          goal: "Revisar si faltan valores, agregar una columna, filtrar filas y comparar grupos.",
          text: [
            "Primero limpia. df.isna().sum() cuenta los valores que faltan en cada columna. Si faltan algunos, puedes quitar esas filas con df.dropna() o decidir cómo llenarlos; anota lo que hiciste. Revisa también si hay valores imposibles, como una cuenta negativa.",
            "Crea la columna que necesitas. Una propina de $5 no significa lo mismo en una cuenta de $20 que en una de $100, así que agrega una medida justa: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Filtra filas con una condición: df[df[\"time\"] == \"Dinner\"] deja solo las cenas. Agrupa para comparar: df.groupby(\"day\")[\"tip_pct\"].mean() da el porcentaje de propina promedio de cada día. Si pandas imprime una advertencia amarilla, léela, pero no es un error. .round(1) deja los números más ordenados."
          ],
          steps: ["Cuenta los valores que faltan: df.isna().sum()", "Agrega una columna: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Filtra: cenas = df[df[\"time\"] == \"Dinner\"]", "Agrupa: df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Prueba con otro grupo, como time o size."],
          words: [["Valor faltante", "una celda vacía; pandas la muestra como NaN."], ["Limpieza", "encontrar y arreglar valores que faltan, que están mal o que son imposibles."], ["Filtrar", "dejar solo las filas que cumplen una condición."], ["groupby", "dividir las filas en grupos y resumir cada grupo."]],
          slides: [
            { title: "Primero limpia", bullets: ["df.isna().sum() cuenta los valores que faltan", "Quítalos o llénalos, y anota lo que hiciste", "Busca valores imposibles"] },
            { title: "Crea una medida justa", bullets: ["tip_pct = tip / total_bill * 100", "Compara de forma justa cuentas grandes y pequeñas"] },
            { title: "Filtra y agrupa", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "Una advertencia no es un error"] }
          ],
          sources: [PANDAS],
          tryIt: "Revisa si faltan valores en los datos de propinas. Agrega la columna tip_pct. Encuentra el porcentaje de propina promedio de cada día y del almuerzo (Lunch) frente a la cena (Dinner). Anota qué día tuvo el promedio más alto.",
          youCanNow: "revisar si faltan valores en los datos, crear una columna nueva, filtrar filas y comparar grupos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace df.dropna()?", options: ["Agrega una columna nueva", "Cuenta las filas", "Quita las filas que tienen valores faltantes", "Hace un gráfico"], answer: 2, why: "dropna() quita las filas con valores faltantes; anota que lo hiciste." },
            { objective: "O5", q: "Ves en los datos una cuenta de -12.00. ¿Qué harías?", options: ["Tratarla como un valor imposible, corregirla o quitarla, y anotar lo que hiciste", "Dejarla; las cuentas negativas son normales", "Sacarle el promedio con las demás de todos modos", "Esconderla en el gráfico"], answer: 0, why: "Buscar valores imposibles, como una cuenta negativa, es parte de limpiar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hacer un gráfico y compartir hallazgos honestos",
          minutes: 6,
          goal: "Hacer un gráfico de barras claro y escribir hallazgos en los que la gente pueda confiar.",
          text: [
            "Un gráfico muestra un patrón más rápido que una tabla. Un gráfico de barras es el mejor para comparar grupos: propina_por_dia = df.groupby(\"day\")[\"tip_pct\"].mean() y luego propina_por_dia.plot(kind=\"bar\", title=\"Propina promedio (%) por día\"). Ponle un título a cada gráfico y di qué significan los números.",
            "Escribe los hallazgos en oraciones sencillas con el número: \"En promedio, las propinas del [día] fueron las más altas, cerca del X por ciento de la cuenta.\" Usa el número que imprimió tu propio código.",
            "Sé honesto con los límites. Di cuántas filas tiene un grupo: df[\"day\"].value_counts() muestra si un día tiene pocas comidas, y entonces su promedio es menos confiable. Estos datos vienen de un solo restaurante, así que puede que no valgan para otros. Y muestran lo que pasó, no por qué."
          ],
          steps: ["Calcula los números agrupados.", "Grafícalos: .plot(kind=\"bar\", title=\"...\")", "Revisa el tamaño de los grupos con value_counts().", "Escribe tres hallazgos con números reales.", "Agrega un límite: lo que los datos no te pueden decir."],
          words: [["Gráfico de barras", "un gráfico de barras que se usa para comparar grupos."], ["value_counts()", "cuenta cuántas filas tiene cada grupo."], ["Hallazgo", "una afirmación clara de lo que muestran los datos, con un número."], ["Limitación", "algo que tus datos o tu análisis no pueden decirte."]],
          slides: [
            { title: "Los gráficos de barras comparan grupos", bullets: ["groupby, y luego .plot(kind=\"bar\")", "Ponle siempre un título"] },
            { title: "Escribe hallazgos claros", bullets: ["Oración sencilla más el número", "Usa el número que imprimió tu código"] },
            { title: "Sé honesto con los límites", bullets: ["Los grupos pequeños son menos confiables", "Un restaurante, no todos los restaurantes", "Muestra lo que pasó, no por qué"] }
          ],
          sources: [PANDAS],
          tryIt: "Tarea final: en un solo cuaderno, carga los datos de propinas, revisa si faltan valores, agrega tip_pct, encuentra el porcentaje de propina promedio por día y por horario (time), haz un gráfico de barras de uno de ellos con título y escribe tres hallazgos con números, incluida una cosa que estos datos no te pueden decir.",
          youCanNow: "convertir un conjunto de datos en un gráfico y en hallazgos honestos con lenguaje sencillo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué tipo de gráfico es el mejor para comparar grupos, como los días?", options: ["Un gráfico circular de un solo número", "Un gráfico de barras", "Una tabla sin etiquetas", "Un gráfico sin título"], answer: 1, why: "Un gráfico de barras es el mejor para comparar grupos." },
            { objective: "O6", q: "Tu gráfico muestra que los sábados las propinas fueron más altas. ¿Qué agregarías antes de compartirlo?", options: ["Una afirmación de que los sábados causan propinas más grandes en todas partes", "Nada; los gráficos hablan solos", "Un número inventado para que quede más claro", "Un título y un límite honesto, como cuántas comidas hubo cada día"], answer: 3, why: "Un título y un límite honesto ayudan a que la gente confíe en el hallazgo y lo entienda." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Analizar datos con Python",
        questions: [
          { objective: "O4", q: "En pandas, ¿qué es un DataFrame?", options: ["Un marco de fotos", "Un gráfico", "Un error de Python", "Una tabla con filas y columnas con nombre"], answer: 3, why: "Los DataFrames son las tablas de pandas." },
          { objective: "O5", q: "¿Qué orden cuenta los valores que faltan en cada columna?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna marca las celdas vacías y sum las cuenta." },
          { objective: "O5", q: "¿Por qué agregar una columna de porcentaje de propina en lugar de comparar dólares de propina?", options: ["Los dólares no son números", "pandas no puede usar dólares", "Un porcentaje compara de forma justa cuentas grandes y pequeñas", "Hace la tabla más pequeña"], answer: 2, why: "El porcentaje de la cuenta es una comparación justa." },
          { objective: "O5", q: "¿Qué línea da el porcentaje de propina promedio de cada día?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby divide por día; mean saca el promedio de cada grupo." },
          { objective: "O6", q: "Un día tiene solo 19 comidas. ¿Qué debe decir tu informe?", options: ["Nada", "Que los datos están mal", "Que su promedio es menos confiable porque el grupo es pequeño", "Que es el mejor día"], answer: 2, why: "Los grupos pequeños hacen menos seguros los promedios." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la ciencia de datos y el análisis de datos",
    questions: [
      { objective: "O1", q: "La ciencia de datos trata sobre todo de:", options: ["Arreglar computadoras", "Usar datos para responder preguntas y tomar decisiones", "Escribir más rápido", "Construir sitios web"], answer: 1, why: "Convierte los datos en respuestas." },
      { objective: "O1", q: "¿Qué orden es el correcto para un proyecto de datos?", options: ["Preguntar, Conseguir, Limpiar, Explorar, Compartir", "Compartir, Preguntar, Limpiar, Conseguir, Explorar", "Explorar, Compartir, Preguntar, Conseguir, Limpiar", "Limpiar, Compartir, Conseguir, Preguntar, Explorar"], answer: 0, why: "Empieza con la pregunta y termina compartiendo." },
      { objective: "O2", q: "En datos ordenados, cada fila es:", options: ["Una columna", "Un gráfico", "Una cosa que mediste", "Un total"], answer: 2, why: "Una fila por registro." },
      { objective: "O2", q: "¿Qué columna es numérica?", options: ["Minutos jugados", "Nombre del equipo", "Día de la semana", "Ciudad"], answer: 0, why: "Puedes hacer cuentas con los minutos." },
      { objective: "O2", q: "Tus datos no tienen ninguna columna sobre el clima. ¿Puedes responder \"¿La gente deja más propina cuando llueve?\"", options: ["Sí, solo adivina", "Sí, usa la media", "Sí, usa un gráfico", "No, y debes decirlo"], answer: 3, why: "Una pregunta necesita datos que la cubran." },
      { objective: "O3", q: "¿Cuál es la media de 4, 6 y 8?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { objective: "O3", q: "¿Cuál es la mediana de 1, 3, 3, 9, 50?", options: ["3", "9", "13.2", "50"], answer: 0, why: "El valor del medio, ya ordenado, es 3." },
      { objective: "O3", q: "Un valor atípico es:", options: ["La mediana", "Una columna que falta", "El título de un gráfico", "Un valor muy lejos de los demás"], answer: 3, why: "Los valores atípicos se separan del resto." },
      { objective: "O3", q: "¿Qué número jalan más los valores atípicos?", options: ["La media", "La mediana", "La cantidad de filas", "Ninguno"], answer: 0, why: "La media usa todos los valores, así que los extremos la mueven." },
      { objective: "O3", q: "Las ventas de paraguas y los choques de autos suben los dos en los días de lluvia. Esto muestra:", options: ["Que los paraguas causan choques", "Que los choques causan ventas de paraguas", "Una correlación, probablemente causada por la lluvia", "Nada en absoluto"], answer: 2, why: "Un tercer factor, la lluvia, impulsa ambos." },
      { objective: "O4", q: "pandas es:", options: ["Una aplicación de hoja de cálculo de pago", "Un tipo de gráfico", "Un sitio web", "Una biblioteca gratuita de Python para tablas de datos"], answer: 3, why: "pandas maneja los DataFrames en Python." },
      { objective: "O4", q: "¿Qué orden muestra las primeras cinco filas?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head muestra las filas de arriba." },
      { objective: "O4", q: "df.shape devuelve (244, 7). ¿Qué significa?", options: ["244 columnas y 7 filas", "244 filas y 7 columnas", "244 valores que faltan", "7 gráficos"], answer: 1, why: "shape da primero las filas y luego las columnas." },
      { objective: "O4", q: "¿Qué carga tu propio archivo CSV?", options: ["pd.read_csv(\"archivo.csv\")", "df.head(\"archivo.csv\")", "sns.plot(\"archivo.csv\")", "print(\"archivo.csv\")"], answer: 0, why: "read_csv lee un CSV y lo convierte en un DataFrame." },
      { objective: "O4", q: "df.describe() da:", options: ["Un gráfico de barras", "El nombre del archivo", "Números de resumen como la media, el mínimo y el máximo", "Arreglos para los valores que faltan"], answer: 2, why: "describe resume las columnas de números." },
      { objective: "O5", q: "¿Qué deja solo las filas de cena?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "Una condición dentro de df[ ] filtra las filas." },
      { objective: "O5", q: "Encuentras valores que faltan y quitas esas filas. ¿Qué más debes hacer?", options: ["Esconderlo", "Borrar todo el conjunto de datos", "Nada", "Anotar lo que hiciste"], answer: 3, why: "Anotar los pasos de limpieza mantiene honesto el análisis." },
      { objective: "O6", q: "¿Qué gráfico es mejor para comparar promedios entre días?", options: ["Una foto", "Un gráfico de barras", "Un solo número", "Una nube de palabras"], answer: 1, why: "Las barras comparan grupos con claridad." },
      { objective: "O6", q: "¿Cuál es un hallazgo bien escrito?", options: ["\"Las propinas son buenas.\"", "\"Las ventas del fin de semana promediaron $420 al día, cerca de un 30% más que entre semana.\"", "\"Los datos muestran cosas.\"", "\"Los fines de semana son mejores porque la gente está feliz.\""], answer: 1, why: "Es específico, usa un número y no afirma una causa que no puede mostrar." },
      { objective: "O6", q: "Estos datos de propinas vienen de un solo restaurante. ¿Qué límite es correcto decir?", options: ["Los resultados valen en todas partes", "Los datos son falsos", "No hay límites", "Puede que los resultados no valgan para otros restaurantes"], answer: 3, why: "Una sola fuente no puede hablar por todos los restaurantes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      4,
      6,
      8,
      9,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Cargar y revisar los datos",
        objective: "O4",
        notYet: "Los datos no cargan, o no se revisó si faltan valores.",
        meets: "Los datos de propinas están cargados, descritos y revisados para ver si faltan valores.",
        exceeds: "Además, anota el número de filas y el tipo de cada columna que se usa."
      },
      {
        name: "Columna de porcentaje de propina",
        objective: "O5",
        notYet: "No hay columna de porcentaje de propina, o está mal calculada.",
        meets: "Una columna tip_pct igual a la propina dividida entre total_bill por 100.",
        exceeds: "Además, busca valores imposibles, como una cuenta negativa."
      },
      {
        name: "Promedios por grupo",
        objective: "O5",
        notYet: "Solo hay una comparación, o los promedios están mal.",
        meets: "El porcentaje de propina promedio de cada día y del almuerzo frente a la cena, redondeado.",
        exceeds: "Además, muestra cuántas comidas hay en cada grupo."
      },
      {
        name: "Gráfico de barras",
        objective: "O6",
        notYet: "No hay gráfico, o el gráfico no tiene título.",
        meets: "Un gráfico de barras de una comparación con un título claro.",
        exceeds: "Etiquetas en los ejes o una nota dicen qué significan los números."
      },
      {
        name: "Hallazgos honestos",
        objective: "O6",
        notYet: "Hay menos de tres hallazgos, o no se dice ningún límite.",
        meets: "Tres hallazgos sencillos con números de los resultados, incluida una cosa que los datos no pueden decir.",
        exceeds: "Además, evita afirmar una causa y menciona los grupos pequeños cuando importan."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del análisis de propinas",
      "Participantes que dicen haber analizado un conjunto de datos propio, por ejemplo de un equipo, un club, una clase o un trabajo, en los 30 días después del curso (encuesta de seguimiento)",
      "Participantes que toman un siguiente curso, como Introducción al aprendizaje automático",
      "Participantes que agregan el cuaderno a un portafolio o lo usan en una solicitud para un puesto o un programa de datos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora de escritorio o portátil con navegador web e internet",
      "Una cuenta gratuita de Google para usar Google Colab",
      "Papel y lápiz para escribir la pregunta y los hallazgos",
      "Unos 60 a 75 minutos en total, más tiempo de práctica"
    ],
    facilitatorNotes: [
      "Empiece con una pregunta que les importe, como los puntajes de un equipo o la asistencia a un club, antes de abrir el código.",
      "Calculen juntos a mano la media y la mediana de una lista pequeña antes de usar pandas.",
      "Los datos de propinas se cargan desde internet; pruébelos en su red antes de la clase y tenga lista una copia en CSV.",
      "Pida que lean los hallazgos de otra persona y marquen cualquier afirmación de causa o cualquier límite que falte.",
      "Si traen sus propios datos, compruebe que no tengan información privada de personas reales antes de que los suban."
    ]
  }
};

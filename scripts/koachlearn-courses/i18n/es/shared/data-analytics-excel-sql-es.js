"use strict";

// Koach Learn course (Spanish translation of shared/data-analytics-excel-sql.js). See scripts/koachlearn-courses/README.md, "Translations".
// SQL code, formulas and the practice data (North, South, East, Coffee, Bagel, Juice) stay exactly as in the English, so every
// query and total matches. Function names are given in English with the Spanish Excel name the first time
// (SUMIFS / SUMAR.SI.CONJUNTO, COUNTIFS / CONTAR.SI.CONJUNTO). Menu names are given in English with the Spanish version.

const DATAPLUS = { name: "CompTIA Data+ (DA0-002): página oficial", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (editor de SQL en el navegador)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (herramienta de escritorio de código abierto)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql-es",
  lang: "es",
  translationOf: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Análisis de datos con hojas de cálculo y SQL",
  skills: "Plantear una pregunta de datos, Limpiar datos, Tablas dinámicas y COUNTIFS/SUMIFS, Escribir consultas SQL, Agrupar y unir tablas, Presentar hallazgos",
  outcome: "trabajar como analista de datos de nivel inicial: convertir una necesidad del negocio en una pregunta clara, limpiar una hoja de cálculo desordenada, resumirla con una tabla dinámica y SUMIFS, responder preguntas con SQL (SELECT, WHERE, ORDER BY, GROUP BY y JOIN) y escribir hallazgos cortos y honestos que puedas mostrar a un empleador.",
  about: [
    "Los analistas de datos convierten filas de números en respuestas que la gente puede usar: qué tienda vende más, qué programa ayuda a más personas, en qué se va el dinero. Casi todo tipo de empleador necesita esto, desde tiendas y hospitales hasta oficinas municipales y organizaciones sin fines de lucro.",
    "Vas a usar dos herramientas que los analistas usan todos los días: una hoja de cálculo (Google Sheets, gratis, o Excel) y SQL, el lenguaje para hacerle preguntas a una base de datos. Vas a practicar SQL gratis en tu navegador. Todos los datos de práctica son inventados y pequeños, así que puedes revisar cada respuesta a mano.",
    "Si quieres una credencial, CompTIA Data+ es una para analistas de datos de nivel inicial (CompTIA es una organización que certifica habilidades de tecnología). Este curso te ayuda a prepararte y desarrolla habilidades que cubre, pero no otorga Data+ ni ningún certificado; revisa la página oficial para conocer el examen, el precio y las opciones actuales.",
    "Ayuda saber lo básico de hojas de cálculo primero (\"Excel y hojas de cálculo para el trabajo\"). Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un proyecto de análisis de una página para tu portafolio: (1) una pregunta clara sobre los datos de ventas de práctica (o un conjunto de datos públicos pequeño que elijas); (2) los datos limpios en Google Sheets o Excel, con una columna Revenue (ingresos) y una tabla dinámica que responda la pregunta; (3) al menos dos consultas SQL que hayas ejecutado, una con WHERE y ORDER BY y otra con GROUP BY, con sus resultados; (4) tres hallazgos en oraciones sencillas con números, un límite de los datos y un siguiente paso sugerido; y (5) una línea para tu currículum que describa el proyecto.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas que buscan trabajo, adultos jóvenes, veteranos y personas que cambian de carrera y quieren un primer puesto en datos (analista de datos, asistente de informes, analista de operaciones o de negocio) o quieren habilidades de datos en su trabajo actual. Experiencias variadas; muchos han usado hojas de cálculo pero nunca SQL.",
    startingPoint: "Pueden escribir datos, usar SUM y AVERAGE y ordenar en una hoja de cálculo. No han limpiado datos desordenados, ni hecho una tabla dinámica, ni escrito una consulta. Pocos saben cómo presentan sus hallazgos los analistas.",
    gap: "Los empleos de datos de nivel inicial piden análisis en hojas de cálculo, SQL básico y comunicar los resultados con claridad. Los participantes necesitan práctica real con datos realistas y desordenados, usando herramientas gratis, y un proyecto pequeño que puedan mostrar a un empleador.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada término",
      "Dispositivos: una computadora con navegador web; el teléfono es muy pequeño para practicar SQL",
      "Solo herramientas gratis: Google Sheets (o Excel si lo tienen) y un editor de SQL gratis en el navegador",
      "Los datos de práctica son inventados; nunca pongas datos reales de clientes, pacientes o del empleador en herramientas en línea",
      "Tiempo: lecciones de 4 a 6 minutos; el proyecto toma una o dos horas más"
    ],
    prerequisites: "Saber lo básico de hojas de cálculo. El curso \"Excel y hojas de cálculo para el trabajo\" lo cubre."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una necesidad del negocio que te plantea un gerente", action: "escribir una pregunta de datos clara y medible y hacer la lista de los datos necesarios para responderla", standard: "con un quién o qué, una medida y un periodo de tiempo" },
    { id: "O2", condition: "Con una hoja de cálculo desordenada", action: "limpiar los datos quitando duplicados, recortando espacios de más y unificando etiquetas y formatos", standard: "sin dejar duplicados ni etiquetas que no coincidan" },
    { id: "O3", condition: "Con datos limpios en Google Sheets o Excel", action: "crear una tabla dinámica y una fórmula SUMIFS o COUNTIFS que respondan la pregunta", standard: "con totales que coincidan con una revisión a mano" },
    { id: "O4", condition: "Usando un editor de SQL gratis y una tabla de práctica", action: "escribir consultas SELECT con WHERE y ORDER BY que devuelvan las filas pedidas", standard: "devolviendo exactamente las filas correctas en el orden correcto" },
    { id: "O5", condition: "Usando dos tablas de práctica", action: "escribir consultas que usen GROUP BY con SUM, COUNT o AVG, y un JOIN entre las tablas", standard: "con resultados que coincidan con una revisión a mano" },
    { id: "O6", condition: "Con los resultados de tu análisis", action: "escribir tres hallazgos con números, un límite de los datos y un siguiente paso", standard: "en oraciones sencillas con las que un gerente pueda actuar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Análisis con hojas de cálculo",
      lessons: [
        {
          title: "El trabajo del analista: de una necesidad a una pregunta clara",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escribir una pregunta de datos clara y medible a partir de lo que pide un gerente.",
          text: [
            "Los analistas siguen un camino sencillo: hacer una pregunta clara, conseguir los datos, limpiarlos, analizarlos y compartir lo que significan. Casi todo el trabajo empieza con la pregunta. Una petición vaga recibe una respuesta vaga.",
            "Un gerente dice: \"¿Cómo van las ventas?\". Eso es una necesidad, no una pregunta. Una pregunta clara dice quién o qué, una medida y un periodo de tiempo: \"¿Cuál de nuestras tres tiendas tuvo más ingresos del 1 al 4 de octubre?\". Ahora sabes qué datos necesitas: fechas, tiendas, cantidades y precios.",
            "Las buenas preguntas son medibles (se pueden responder con un número), específicas y útiles (la respuesta ayuda a alguien a decidir algo). Anota los datos que necesitas antes de abrir cualquier archivo.",
            "Algunos empleos que usan estas habilidades son analista de datos, analista de informes, analista de operaciones y analista de negocio. Si quieres una credencial, CompTIA Data+ (examen DA0-002 cuando lo revisamos en octubre de 2026) cubre conceptos de datos, preparación de datos, análisis, visualización e informes, y gobierno de datos. Revisa la página oficial para ver los detalles actuales."
          ],
          steps: ["Anota la necesidad del gerente con sus propias palabras.", "Conviértela en una pregunta con quién o qué, una medida y un periodo de tiempo.", "Revisa: ¿se puede responder con un número?", "Haz la lista de las columnas de datos que necesitas."],
          words: [["Analista de datos", "persona que convierte datos en respuestas que la gente puede usar."], ["Medible", "que se puede responder con un número o un conteo."], ["Conjunto de datos", "un grupo de datos, muchas veces una tabla con filas y columnas."], ["Ingresos", "el dinero que entra por las ventas: cantidad por precio (en los datos de práctica, la columna Revenue)."]],
          slides: [
            { title: "El camino del analista", bullets: ["Preguntar, conseguir datos, limpiar, analizar, compartir", "Todo empieza con una pregunta clara"] },
            { title: "Necesidad vs. pregunta", bullets: ["Necesidad: \"¿Cómo van las ventas?\"", "Pregunta: \"¿Qué tienda tuvo más ingresos del 1 al 4 de octubre?\""] },
            { title: "Una pregunta clara tiene", bullets: ["Quién o qué", "Una medida", "Un periodo de tiempo"] },
            { title: "Una credencial para prepararte", bullets: ["CompTIA Data+ (DA0-002, revisado en oct. de 2026)", "Este curso te prepara; CompTIA la otorga", "Revisa comptia.org para ver los detalles actuales"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Convierte cada necesidad en una pregunta clara y haz la lista de los datos necesarios: (a) \"¿El banco de alimentos tiene más gente últimamente?\" (b) \"¿De qué producto deberíamos pedir más?\" Escribe cada una con quién o qué, una medida y un periodo de tiempo.",
          youCanNow: "convertir una petición vaga en una pregunta clara y medible, y hacer la lista de los datos que necesita.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es la pregunta de datos más clara?", options: ["\"¿Cómo va el negocio?\"", "\"Cuéntame de las ventas.\"", "\"¿Van bien las cosas?\"", "\"¿Qué artículo vendió más unidades en septiembre en la tienda North?\""], answer: 3, why: "Dice qué (artículo), la medida (unidades), el lugar y el periodo de tiempo." },
            { objective: "O1", q: "Tu pregunta es \"¿Qué tienda tuvo más ingresos la semana pasada?\". ¿Qué datos necesitas?", options: ["Tienda, fecha, cantidad y precio de cada venta", "Solo los nombres de las tiendas", "Las direcciones de casa de los empleados", "El clima"], answer: 0, why: "Los ingresos necesitan cantidad y precio; la tienda y la fecha los ordenan por lugar y tiempo." }
          ]
        },
        {
          title: "Limpiar datos desordenados en una hoja de cálculo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Limpiar una tabla desordenada quitando duplicados, recortando espacios y corrigiendo etiquetas.",
          text: [
            "Los datos reales son desordenados. La misma tienda puede estar escrita \"North\", \"north\" y \" North\" (con un espacio). Una venta puede estar anotada dos veces. Las fechas pueden tener formatos distintos. Si no los limpias, tus totales saldrán mal, porque la hoja de cálculo trata \"North\" y \"north \" como tiendas distintas.",
            "En Google Sheets, selecciona tus datos y usa Data > Data cleanup > Remove duplicates (en español: Datos > Limpieza de datos > Quitar duplicados) y Data > Data cleanup > Trim whitespace (Recortar espacios en blanco). En Excel, usa Data > Remove Duplicates (Datos > Quitar duplicados) y la función TRIM (en Excel en español: ESPACIOS) para quitar espacios de más. Usa Buscar y reemplazar para corregir etiquetas, por ejemplo cambiar \"north\" por \"North\".",
            "Haz que cada columna tenga un solo tipo: fechas como fechas, números como números (sin escribir el signo \"$\"), y el texto escrito igual siempre. Luego agrega las columnas que necesites, como Revenue (ingresos) = Qty (cantidad) por Price (precio), por ejemplo =D2*E2.",
            "Guarda siempre una copia de los datos sin procesar en su propia pestaña y limpia una copia. Anota cada cambio que hiciste, para que otra persona pueda confiar en tu trabajo y repetirlo."
          ],
          steps: ["Copia los datos sin procesar a una pestaña nueva llamada Clean (limpio).", "Quita las filas duplicadas.", "Recorta los espacios de más.", "Corrige las etiquetas con Buscar y reemplazar para que cada nombre se escriba de una sola forma.", "Haz que cada columna tenga un solo tipo: fechas, números o texto.", "Agrega columnas calculadas, como Revenue = Qty * Price.", "Escribe una lista corta de los cambios que hiciste."],
          words: [["Limpieza de datos", "corregir errores, duplicados y entradas que no coinciden para que los resultados sean correctos."], ["Duplicado", "una fila que aparece más de una vez por error."], ["Espacios en blanco", "espacios de más antes o después del texto que no se ven fácilmente."], ["Datos sin procesar", "los datos tal como los recibiste, antes de cualquier cambio."]],
          slides: [
            { title: "¿Por qué limpiar?", bullets: ["\"North\", \"north\" y \" North\" cuentan como distintas", "Las filas duplicadas cuentan dos veces una venta", "Datos desordenados dan totales equivocados"] },
            { title: "Herramientas de limpieza", bullets: ["Sheets: Datos > Limpieza de datos > Quitar duplicados", "Sheets: Datos > Limpieza de datos > Recortar espacios en blanco", "Excel: Quitar duplicados y TRIM (ESPACIOS)", "Buscar y reemplazar para corregir etiquetas"] },
            { title: "Un tipo por columna", bullets: ["Fechas como fechas, números como números", "Agrega Revenue = Qty * Price"] },
            { title: "Buenos hábitos", bullets: ["Guarda los datos sin procesar en su propia pestaña", "Anota cada cambio"] }
          ],
          tryIt: "En Google Sheets, escribe esta tabla de práctica con los encabezados Date, Store, Item, Qty, Price (fecha, tienda, artículo, cantidad, precio): 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Cópiala a una pestaña Clean, quita la fila East duplicada, cambia \"north \" por \"North\" y agrega una columna Revenue. Deberías tener 8 filas.",
          youCanNow: "limpiar una tabla desordenada para que cada total que hagas con ella sea correcto.",
          quickCheck: [
            { objective: "O2", q: "Un total de \"North\" se ve demasiado bajo. Algunas filas dicen \"north \" con un espacio. ¿Qué haces?", options: ["Borras esas filas", "Recortas los espacios y escribes la etiqueta \"North\" en todas partes", "Lo ignoras", "Haces la letra más grande"], answer: 1, why: "Recortar espacios y corregir las etiquetas hace que todas las filas de North se cuenten juntas." },
            { objective: "O2", q: "Antes de limpiar, ¿qué debes hacer con los datos sin procesar?", options: ["Borrarlos", "Enviarlos por correo a todos", "Guardar una copia en su propia pestaña y limpiar una copia", "Imprimirlos"], answer: 2, why: "Guardar los datos sin procesar te deja revisar o rehacer tu trabajo." }
          ]
        },
        {
          title: "Resumir con tablas dinámicas, SUMIFS y COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Crear una tabla dinámica y una fórmula SUMIFS que respondan tu pregunta.",
          text: [
            "Una tabla dinámica resume una tabla grande en segundos: por ejemplo, los ingresos totales de cada tienda. En Google Sheets, selecciona tus datos limpios y elige Insert > Pivot table (Insertar > Tabla dinámica). En Excel, elige Insert > PivotTable (Insertar > Tabla dinámica). Pon Store en Rows (Filas) y Revenue en Values (Valores), resumido con SUM.",
            "Con los datos de práctica limpios, la tabla dinámica debe mostrar East 29.00, South 24.75 y North 14.00. Así que East tuvo más ingresos del 1 al 4 de octubre.",
            "Las fórmulas responden una pregunta a la vez. SUMIFS (en Excel en español: SUMAR.SI.CONJUNTO) suma los números que cumplen una regla: =SUMIFS(F:F, B:B, \"South\") suma la columna Revenue (F) donde la columna Store (B) dice South, y da 24.75. COUNTIFS (CONTAR.SI.CONJUNTO) cuenta las filas que cumplen: =COUNTIFS(C:C, \"Coffee\") cuenta las ventas de Coffee y da 3. AVERAGEIFS (PROMEDIO.SI.CONJUNTO) funciona igual para promedios.",
            "Revisa siempre un número a mano. Si la tabla dinámica y tu revisión a mano no coinciden, lo más probable es que los datos todavía necesiten limpieza."
          ],
          steps: ["Selecciona los datos limpios, con los encabezados.", "Inserta una tabla dinámica en una hoja nueva.", "Pon la categoría (Store) en Filas.", "Pon la medida (Revenue) en Valores, resumida con SUM.", "Ordénala de mayor a menor.", "Revisa un total a mano o con SUMIFS."],
          words: [["Tabla dinámica", "herramienta que agrupa y resume una tabla, por ejemplo totales por tienda."], ["SUMIFS", "fórmula que suma los números que cumplen una o más reglas (en Excel en español: SUMAR.SI.CONJUNTO)."], ["COUNTIFS", "fórmula que cuenta las filas que cumplen una o más reglas (en Excel en español: CONTAR.SI.CONJUNTO)."], ["Medida", "el número que sumas o promedias, como los ingresos."]],
          slides: [
            { title: "Tablas dinámicas", bullets: ["Sheets: Insertar > Tabla dinámica", "Excel: Insertar > Tabla dinámica", "Filas: Store; Valores: SUM de Revenue"] },
            { title: "La respuesta de práctica", bullets: ["East 29.00, South 24.75, North 14.00", "East tuvo más ingresos del 1 al 4 de octubre"] },
            { title: "Fórmulas con reglas", bullets: ["=SUMIFS(F:F, B:B, \"South\") da 24.75", "=COUNTIFS(C:C, \"Coffee\") da 3", "AVERAGEIFS para promedios"] },
            { title: "Revisa a mano", bullets: ["Suma tú mismo un grupo", "¿No coincide? Vuelve a limpiar los datos"] }
          ],
          tryIt: "Con tus datos de práctica limpios, crea una tabla dinámica de ingresos por tienda y ordénala. Luego escribe un SUMIFS para East y un COUNTIFS para Bagel. Revisa: East debe dar 29.00 y Bagel debe contar 3 filas. Haz una segunda tabla dinámica de Qty por Item.",
          youCanNow: "resumir una tabla con una tabla dinámica y revisarla con SUMIFS y COUNTIFS.",
          quickCheck: [
            { objective: "O3", q: "En una tabla dinámica de ingresos por tienda, ¿dónde va Store?", options: ["Filas", "Valores", "Solo en Filtros", "No se usa"], answer: 0, why: "La categoría por la que agrupas va en Filas; el número que sumas va en Valores." },
            { objective: "O3", q: "¿Qué fórmula suma Revenue (columna F) solo para la tienda North (columna B)?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS suma el rango de suma (F) donde el rango de la regla (B) coincide con North." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Análisis con hojas de cálculo",
        questions: [
          { objective: "O1", q: "¿Cuál es una necesidad y todavía no una pregunta clara?", options: ["\"¿Cómo nos va?\"", "\"¿Qué tienda tuvo los ingresos más altos en octubre?\"", "\"¿Cuántas ventas de Coffee hubo el 2 de octubre?\"", "\"¿Cuál fue el tamaño promedio de los pedidos la semana pasada?\""], answer: 0, why: "No tiene medida ni periodo de tiempo, así que todavía no se puede responder con un número." },
          { objective: "O2", q: "Una venta se anotó dos veces. ¿Qué pasa si no quitas el duplicado?", options: ["No cambia nada", "El total cuenta esa venta dos veces", "La hoja de cálculo lo arregla sola", "La venta desaparece"], answer: 1, why: "Los duplicados cuentan dos veces, así que los totales salen demasiado altos." },
          { objective: "O2", q: "¿Qué menú de Google Sheets quita los espacios de más?", options: ["Insertar > Gráfico", "Formato > Tema", "Datos > Limpieza de datos > Recortar espacios en blanco", "Archivo > Imprimir"], answer: 2, why: "Recortar espacios en blanco quita los espacios antes y después del texto." },
          { objective: "O3", q: "¿Qué devuelve =COUNTIFS(C:C, \"Juice\") con los datos de práctica limpios?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice aparece en dos filas (North el 3 de octubre y South el 4 de octubre)." },
          { objective: "O3", q: "El total de South en tu tabla dinámica no coincide con tu revisión a mano. ¿Cuál es la razón más probable?", options: ["Los datos todavía tienen un duplicado o una etiqueta que no coincide", "Las tablas dinámicas no saben sumar", "Necesitas una pantalla más grande", "Las revisiones a mano siempre están mal"], answer: 0, why: "Cuando no coinciden, casi siempre es porque los datos todavía necesitan limpieza." }
        ]
      }
    },
    {
      name: "Capítulo 2: SQL y cómo compartir resultados",
      lessons: [
        {
          title: "Tus primeras consultas SQL: SELECT, WHERE y ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escribir consultas SELECT con WHERE y ORDER BY en un editor de SQL gratis.",
          text: [
            "Las organizaciones grandes guardan los datos en bases de datos, no en hojas de cálculo. SQL (en inglés se dice muchas veces \"sícuel\") es el lenguaje para hacerle preguntas a una base de datos. Una consulta es una pregunta. SQL se parece al inglés sencillo y se usa en casi todos los empleos de datos.",
            "Puedes practicar gratis en tu navegador en SQLite Online (sqliteonline.com): escribe SQL en el editor y presiona Run (ejecutar). Puede ofrecer extras de pago; no los necesitas. DB Browser for SQLite es una opción gratis y de código abierto para tu computadora. En herramientas en línea usa solo datos de práctica, nunca datos reales de clientes.",
            "Crea la tabla de práctica ejecutando: CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); y luego INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Ahora pregunta. SELECT * FROM sales; muestra todas las filas. SELECT item, qty FROM sales WHERE store = 'North'; muestra solo los artículos de North. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; muestra las cuatro ventas más grandes, de mayor a menor (8, 6, 5, 4). El texto va entre comillas simples; los números no."
          ],
          steps: ["Abre un editor de SQL gratis en tu navegador.", "Ejecuta la línea CREATE TABLE y luego la línea INSERT.", "Ejecuta SELECT * FROM sales; para ver las 8 filas.", "Agrega WHERE para quedarte solo con las filas que quieres.", "Agrega ORDER BY para ordenar; agrega DESC para ver primero lo más grande.", "Revisa el resultado mirando tú mismo las filas."],
          words: [["Base de datos", "un lugar organizado donde se guardan datos, en tablas."], ["SQL", "Structured Query Language (lenguaje de consulta estructurado): el lenguaje para hacerle preguntas a una base de datos."], ["Consulta", "una pregunta escrita en SQL."], ["SELECT / FROM", "SELECT nombra las columnas que quieres; FROM nombra la tabla."], ["WHERE", "deja solo las filas que cumplen una regla."], ["ORDER BY", "ordena los resultados; DESC significa de mayor a menor."]],
          slides: [
            { title: "SQL en palabras sencillas", bullets: ["El lenguaje para hacerle preguntas a una base de datos", "Una pregunta = una consulta", "Se usa en casi todos los empleos de datos"] },
            { title: "Practica gratis", bullets: ["SQLite Online en tu navegador: escribe y luego Run", "DB Browser for SQLite en tu computadora", "Solo datos de práctica"] },
            { title: "Tres consultas", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Reglas para recordar", bullets: ["El texto entre comillas simples: 'North'", "Los números sin comillas", "Termina cada consulta con ;"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Crea la tabla sales y ejecuta las tres consultas. Luego escribe la tuya: todas las ventas de Coffee, ordenadas por qty de mayor a menor. Deberías obtener 3 filas: qty 6, 4 y 3. Guarda cada consulta y su resultado para tu tarea final.",
          youCanNow: "crear una tabla de práctica y escribir consultas SQL que filtren y ordenen filas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué consulta muestra solo las ventas de la tienda South?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' deja solo las filas de esa tienda." },
            { objective: "O4", q: "¿Qué hace DESC en ORDER BY qty DESC?", options: ["Borra la columna", "Describe la tabla", "Ordena de mayor a menor", "Deja solo una fila"], answer: 2, why: "DESC significa descendente: primero lo más grande." }
          ]
        },
        {
          title: "Totales con GROUP BY y unir dos tablas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir una consulta GROUP BY con SUM y un JOIN entre dos tablas.",
          text: [
            "GROUP BY hace en SQL lo que hace una tabla dinámica en una hoja de cálculo. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; da East 29.0, South 24.75, North 14.0, igual que tu tabla dinámica. AS le pone nombre a la nueva columna.",
            "Otras funciones de resumen: COUNT(*) cuenta filas, AVG(qty) da el promedio, MIN y MAX dan el más pequeño y el más grande. SELECT item, SUM(qty) FROM sales GROUP BY item; da Bagel 15, Coffee 13, Juice 3.",
            "Muchas veces los datos están repartidos en varias tablas. Una segunda tabla puede guardar la ciudad de cada tienda: CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); Un JOIN une las filas donde una columna es igual en las dos tablas.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; muestra cada venta con su ciudad. Si el nombre de una tienda está escrito distinto en las dos tablas, el JOIN no la encontrará; es otra razón para limpiar los datos primero."
          ],
          steps: ["Elige la columna por la que vas a agrupar (store, item, date).", "Elige el resumen: SUM, COUNT, AVG, MIN o MAX.", "Escribe SELECT columna, SUM(...) AS nombre FROM tabla GROUP BY columna;", "Agrega ORDER BY para clasificar los grupos.", "Para un JOIN, nombra las dos tablas y la columna que coincide después de ON.", "Compara los resultados con tu tabla dinámica."],
          words: [["GROUP BY", "agrupa las filas que comparten un valor para que puedas sumar o contar cada grupo."], ["Función de agregación", "un resumen como SUM, COUNT, AVG, MIN o MAX."], ["AS", "le pone nombre a una columna del resultado."], ["JOIN", "combina filas de dos tablas que comparten una columna que coincide."], ["Clave", "la columna que se usa para hacer coincidir las filas entre tablas."]],
          slides: [
            { title: "GROUP BY = una tabla dinámica en SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Funciones de resumen", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Unidades por artículo: Bagel 15, Coffee 13, Juice 3"] },
            { title: "Unir dos tablas", bullets: ["Tabla stores: tienda y ciudad", "JOIN stores ON sales.store = stores.store", "Ahora cada venta muestra su ciudad"] },
            { title: "Las claves limpias importan", bullets: ["Si se escriben distinto, el JOIN pierde filas", "Primero limpia, luego une"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Ejecuta la consulta GROUP BY de ingresos y revisa que coincida con tu tabla dinámica. Escribe una consulta que cuente las ventas de cada tienda (COUNT(*)); deberías obtener 3, 3 y 2. Luego crea la tabla stores y ejecuta el JOIN. Guarda cada consulta y su resultado.",
          youCanNow: "sumar y contar grupos con GROUP BY y combinar dos tablas con un JOIN.",
          quickCheck: [
            { objective: "O5", q: "¿Qué consulta da el total de unidades vendidas de cada artículo?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item hace un grupo por artículo, y SUM(qty) suma cada uno." },
            { objective: "O5", q: "Un JOIN entre sales y stores pierde las filas de North. ¿Cuál es la razón más probable?", options: ["SQL no puede unir texto", "Hay demasiadas filas", "El nombre de la tienda está escrito distinto en las dos tablas", "JOIN solo funciona los lunes"], answer: 2, why: "Un JOIN hace coincidir valores exactos; si se escriben distinto, no coinciden." }
          ]
        },
        {
          title: "Convertir resultados en hallazgos, y tu proyecto",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir tres hallazgos con números, un límite y un siguiente paso.",
          text: [
            "Los números solos no ayudan a un gerente. Un hallazgo es una oración que dice lo que muestran los datos, con el número: \"East tuvo más ingresos del 1 al 4 de octubre: $29.00, más del doble de los $14.00 de North\".",
            "Sé honesto con los límites. Los datos de práctica cubren solo 4 días y 8 ventas, así que no pueden decirte nada de un año entero. Correlación no es causa: si se vendió más Coffee un día frío, los datos por sí solos no prueban que el clima fuera la causa. Di lo que los datos no pueden decirte.",
            "Termina con un siguiente paso con el que alguien pueda actuar: \"Reunir un mes completo de ventas antes de decidir a dónde mandar más mercancía\". Que quepa en una página, con un gráfico o una tabla clara de tu tabla dinámica.",
            "Por último, convierte el proyecto en una línea para tu currículum: \"Limpié y analicé datos de ventas en Google Sheets y SQL (GROUP BY, JOIN); encontré la tienda con más ingresos y presenté los hallazgos\". Esto le muestra a un empleador lo que sabes hacer. En un portafolio usa solo datos inventados o públicos, nunca datos privados de un empleador."
          ],
          steps: ["Escribe la pregunta arriba.", "Agrega una tabla o un gráfico de tu tabla dinámica.", "Escribe tres hallazgos, cada uno con un número.", "Escribe un límite: lo que los datos no pueden decirte.", "Escribe un siguiente paso.", "Agrega tus consultas SQL y sus resultados.", "Escribe una línea para tu currículum sobre el proyecto."],
          words: [["Hallazgo", "una oración que dice lo que muestran los datos, con un número."], ["Limitación", "algo que los datos no pueden decirte, o una razón para tener cuidado con ellos."], ["Correlación", "dos cosas que cambian juntas; no prueba que una cause la otra."], ["Portafolio", "un conjunto de muestras de tu trabajo que enseñas a los empleadores."]],
          slides: [
            { title: "Un buen hallazgo", bullets: ["Una oración, un número", "\"East tuvo más ingresos: $29.00, el doble de los $14.00 de North.\""] },
            { title: "Sé honesto con los límites", bullets: ["Solo 4 días y 8 ventas", "Correlación no es causa"] },
            { title: "Una página", bullets: ["La pregunta, un gráfico o una tabla", "Tres hallazgos, un límite, un siguiente paso", "Tus consultas SQL y sus resultados"] },
            { title: "Muéstralo", bullets: ["Escribe una línea para tu currículum", "Usa solo datos inventados o públicos"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Tarea final: arma tu proyecto de una página con la pregunta, los datos limpios y la tabla dinámica, al menos dos consultas SQL con sus resultados, tres hallazgos con números, un límite, un siguiente paso y una línea para tu currículum. Léelo en voz alta: ¿un gerente ocupado podría actuar con esto en un minuto?",
          youCanNow: "convertir un análisis en hallazgos claros y honestos, y en un proyecto que puedes mostrar a un empleador.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es el mejor hallazgo?", options: ["\"Hubo ventas.\"", "\"Los datos son interesantes.\"", "\"South vendió 11 unidades de comida y bebida y ganó $24.75, segunda de tres tiendas.\"", "\"Los números subieron y bajaron.\""], answer: 2, why: "Dice lo que pasó, con números y una comparación." },
            { objective: "O6", q: "Se vendió más Juice el día más cálido de tus datos. ¿Qué puedes decir con honestidad?", options: ["El clima cálido causa las ventas de jugo", "Aquí el jugo y los días cálidos fueron juntos, pero esto no prueba la causa", "El jugo siempre se venderá más en verano", "Los datos están mal"], answer: 1, why: "Correlación no es causa; un conjunto de datos pequeño no puede probar el porqué." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: SQL y cómo compartir resultados",
        questions: [
          { objective: "O4", q: "¿Qué hace SELECT * FROM sales;?", options: ["Borra la tabla sales", "Muestra todas las columnas y filas de la tabla sales", "Cuenta las filas", "Ordena la tabla"], answer: 1, why: "* significa todas las columnas, y sin WHERE se devuelven todas las filas." },
          { objective: "O4", q: "¿Cuál está bien escrita?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Los valores de texto van entre comillas simples, y el orden es SELECT, FROM, WHERE." },
          { objective: "O5", q: "¿Qué cláusula de SQL hace el mismo trabajo que las Filas de una tabla dinámica?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY hace un grupo por cada valor, como las filas de una tabla dinámica." },
          { objective: "O5", q: "¿Qué devuelve COUNT(*) para cada tienda en los datos de práctica?", options: ["Los ingresos totales", "El precio promedio", "El número de filas de ventas", "La ciudad"], answer: 2, why: "COUNT(*) cuenta las filas de cada grupo." },
          { objective: "O6", q: "¿Qué va en la parte de límites de tu informe?", options: ["\"Los datos cubren solo 4 días, así que no pueden mostrar un patrón anual.\"", "\"East es la mejor tienda para siempre.\"", "\"SQL es difícil.\"", "\"Me gusta el café.\""], answer: 0, why: "Un límite le dice al lector lo que los datos no pueden mostrar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Análisis de datos con hojas de cálculo y SQL",
    questions: [
      { objective: "O1", q: "Una pregunta de datos clara incluye:", options: ["Solo un tema", "Quién o qué, una medida y un periodo de tiempo", "Un gráfico", "Una contraseña"], answer: 1, why: "Esas tres partes hacen que se pueda responder con un número." },
      { objective: "O1", q: "¿Cuál es el primer paso en el camino del analista?", options: ["Hacer un gráfico", "Escribir SQL", "Hacer una pregunta clara", "Compartir los hallazgos"], answer: 2, why: "La pregunta decide qué datos necesitas y cómo analizarlos." },
      { objective: "O1", q: "¿Qué credencial de CompTIA está pensada para analistas de datos de nivel inicial?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "CompTIA Data+ cubre conceptos de datos, preparación, análisis, visualización y gobierno de datos." },
      { objective: "O2", q: "¿Por qué \"North\" y \"north \" causan un problema?", options: ["Hacen el archivo más grande", "Las hojas de cálculo no leen minúsculas", "Cambian la letra", "Se cuentan como dos tiendas distintas"], answer: 3, why: "Escribirlo distinto parte un grupo en dos, así que los totales salen mal." },
      { objective: "O2", q: "¿Qué herramienta de Excel quita las filas repetidas?", options: ["Insertar > Gráfico", "Datos > Quitar duplicados", "Vista > Zoom", "Archivo > Guardar como"], answer: 1, why: "Quitar duplicados borra las filas que aparecen más de una vez." },
      { objective: "O2", q: "¿Cuál es un buen hábito de limpieza?", options: ["Limpiar la única copia de los datos", "Guardar los datos sin procesar y anotar cada cambio", "Borrar cualquier fila que se vea rara", "Escribir el signo $ en las celdas de números"], answer: 1, why: "Guardar los datos sin procesar y una lista de cambios hace que tu trabajo se pueda revisar." },
      { objective: "O3", q: "En una tabla dinámica, ¿dónde va el número que sumas?", options: ["Valores", "Filas", "El título", "Solo en Filtros"], answer: 0, why: "Valores guarda la medida, resumida con SUM, COUNT o AVERAGE." },
      { objective: "O3", q: "¿Qué hace COUNTIFS?", options: ["Suma números", "Saca el promedio", "Cuenta las filas que cumplen una o más reglas", "Ordena una columna"], answer: 2, why: "COUNTIFS cuenta las filas que cumplen las reglas que le das." },
      { objective: "O3", q: "En los datos de práctica limpios, ¿qué tienda tuvo más ingresos?", options: ["North", "South", "Todas iguales", "East"], answer: 3, why: "East tuvo 29.00, South 24.75 y North 14.00." },
      { objective: "O4", q: "¿Para qué se usa SQL?", options: ["Para dibujar", "Para hacerle preguntas a una base de datos", "Para mandar correos", "Para hacer diapositivas"], answer: 1, why: "SQL es el lenguaje para consultar bases de datos." },
      { objective: "O4", q: "¿Qué deja solo las filas donde qty es 4 o más?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE filtra las filas con una regla." },
      { objective: "O4", q: "Para ordenar los resultados con lo más grande primero, escribes:", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC ordena de mayor a menor." },
      { objective: "O4", q: "¿Qué datos es seguro poner en una herramienta de práctica de SQL en línea?", options: ["La lista de clientes de tu empleador", "Expedientes de pacientes", "Datos de práctica inventados", "Tus estados de cuenta del banco"], answer: 2, why: "En herramientas en línea usa solo datos de práctica o públicos." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; devuelve:", options: ["Cada venta", "Los ingresos totales de cada tienda", "El número de tiendas", "La ciudad de cada tienda"], answer: 1, why: "GROUP BY store con SUM da un total de ingresos por tienda." },
      { objective: "O5", q: "¿Qué función da un promedio?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG devuelve el promedio de una columna." },
      { objective: "O5", q: "Un JOIN une las filas de dos tablas por:", options: ["Una columna con los mismos valores en las dos", "El color de la fila", "El tamaño de la tabla", "Solo el orden alfabético"], answer: 0, why: "JOIN ... ON une las filas donde la columna clave es igual." },
      { objective: "O6", q: "Un hallazgo debe incluir:", options: ["Solo un gráfico sin palabras", "Un número y lo que significa", "Todas las filas de datos", "Tu opinión sin datos"], answer: 1, why: "Un hallazgo claro dice lo que pasó, con un número." },
      { objective: "O6", q: "Tus datos cubren una semana. ¿Qué es lo honesto?", options: ["\"Esto prueba la tendencia del año.\"", "\"Esto nunca va a cambiar.\"", "\"Los datos son perfectos.\"", "\"Es solo esta semana; necesitamos más datos para ver un patrón.\""], answer: 3, why: "Decir el límite evita que los lectores saquen conclusiones equivocadas." },
      { objective: "O6", q: "¿Qué línea de currículum muestra mejor este proyecto?", options: ["\"Bueno con las computadoras.\"", "\"Limpié y analicé datos de ventas en Google Sheets y SQL (GROUP BY, JOIN) y presenté los hallazgos.\"", "\"Sé algo de datos.\"", "\"Usé internet.\""], answer: 1, why: "Nombra las herramientas, las habilidades y el resultado." },
      { objective: "O6", q: "¿Con qué debe terminar tu informe de una página?", options: ["Con un siguiente paso claro con el que alguien pueda actuar", "Con una lista larga de datos sin procesar", "Con tu contraseña", "Con nada"], answer: 0, why: "Un siguiente paso convierte los hallazgos en acción." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Pregunta clara", objective: "O1", notYet: "La pregunta es vaga o no se puede responder con un número.", meets: "La pregunta dice quién o qué, una medida y un periodo de tiempo.", exceeds: "También dice quién usará la respuesta y qué decisión ayuda a tomar." },
      { name: "Datos limpios", objective: "O2", notYet: "Quedan duplicados o etiquetas que no coinciden, o se perdieron los datos sin procesar.", meets: "Sin duplicados, etiquetas y tipos uniformes, datos sin procesar guardados y cambios anotados.", exceeds: "La lista de cambios es tan clara que otra persona podría repetir la limpieza." },
      { name: "Tabla dinámica y fórmulas", objective: "O3", notYet: "No hay tabla dinámica, o los totales no coinciden con una revisión a mano.", meets: "Una tabla dinámica responde la pregunta y un SUMIFS o COUNTIFS coincide con ella.", exceeds: "Una segunda tabla dinámica o fórmula agrega una comparación útil." },
      { name: "Consultas que filtran", objective: "O4", notYet: "No hay una consulta que funcione, o devuelve filas equivocadas.", meets: "Una consulta con WHERE y ORDER BY devuelve exactamente las filas correctas.", exceeds: "Las consultas están bien escritas y cada una tiene una nota de una línea sobre lo que responde." },
      { name: "Agrupar y unir", objective: "O5", notYet: "No hay consulta GROUP BY, o sus totales están mal.", meets: "Una consulta GROUP BY con SUM, COUNT o AVG coincide con la tabla dinámica.", exceeds: "También incluye un JOIN que funciona y explica la columna que coincide." },
      { name: "Hallazgos y línea de currículum", objective: "O6", notYet: "Los hallazgos no tienen números, o falta el límite o el siguiente paso.", meets: "Tres hallazgos con números, un límite, un siguiente paso y una línea de currículum.", exceeds: "Un gerente podría actuar con esto en un minuto, y el gráfico o la tabla tiene etiquetas claras." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que agregan el proyecto a su currículum o portafolio en 30 días (encuesta de seguimiento)",
      "Participantes que solicitan o empiezan un puesto de datos, informes o analista, o usan estas habilidades en el trabajo, en 6 meses",
      "Participantes que reservan o aprueban CompTIA Data+ u otra credencial de datos en 6 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Una computadora con navegador web (la pantalla de un teléfono es muy pequeña para practicar SQL)",
      "Una cuenta gratis de Google para Google Sheets, o Excel si lo tienen",
      "Un editor de SQL gratis: SQLite Online en el navegador, o DB Browser for SQLite instalado",
      "Unos 90 minutos para las lecciones, más 1 a 2 horas para el proyecto final"
    ],
    facilitatorNotes: [
      "Antes de la sesión, abre el editor de SQL en las computadoras del laboratorio y revisa que cargue; algunas redes bloquean sitios.",
      "Da a los participantes la tabla de práctica en un archivo o impresa para ahorrar tiempo al escribir; escribirla también es buena práctica.",
      "Forma parejas para las lecciones 4 y 5: uno escribe la consulta, el otro revisa el resultado a mano, y luego cambian.",
      "Insiste en la regla de privacidad: solo datos inventados o públicos en herramientas en línea y portafolios.",
      "Si los participantes quieren una credencial, indícales la página oficial de CompTIA Data+; este curso prepara, pero no la otorga.",
      "Califica el proyecto final con la rúbrica y da comentarios sobre una fila Todavía no a la vez."
    ]
  }
};

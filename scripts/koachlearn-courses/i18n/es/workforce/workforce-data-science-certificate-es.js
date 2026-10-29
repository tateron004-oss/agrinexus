"use strict";

// Koach Learn course (Spanish translation of workforce/workforce-data-science-certificate.js). See scripts/koachlearn-courses/README.md, "Translations".

const GOOGLE_DA = { name: "Coursera: Google Data Analytics Professional Certificate (certificado profesional de análisis de datos de Google)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera: IBM Data Science Professional Certificate (certificado profesional de ciencia de datos de IBM)", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn: Microsoft Certified: Power BI Data Analyst Associate (examen PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate-es",
  lang: "es",
  translationOf: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Preparación para un certificado profesional de ciencia de datos",
  skills: "Elegir el certificado de datos correcto, Hacer un plan de estudio semanal, Limpiar y resumir un conjunto de datos, Hacer una pregunta sobre datos y responderla con un gráfico, Armar un proyecto de portafolio",
  outcome: "elegir el certificado de datos que se ajusta a tu meta, hacer un plan de estudio que puedas cumplir y completar un pequeño proyecto de práctica como los que piden estos certificados: tomar un conjunto de datos real, limpiarlo, resumirlo, hacer un gráfico claro y escribir lo que significa.",
  about: [
    "Este curso es para personas que buscan empleo o que ya trabajan y quieren pasar a trabajar con datos, o usar datos en el trabajo que ya tienen, y están pensando en un certificado de datos en línea muy conocido, como el Google Data Analytics Professional Certificate, el IBM Data Science Professional Certificate o el Power BI Data Analyst Associate de Microsoft.",
    "No reemplaza esos programas. Te prepara para ellos: vas a aprender qué cubre cada uno, elegir el que se ajusta a tu meta y a tu semana, y practicar las habilidades básicas que todos usan, en un proyecto pequeño que puedes mostrar a los empleadores.",
    "Un certificado es una forma de aprender y de mostrar lo que aprendiste. No promete un empleo ni un aumento de sueldo. Lo que más ayuda es terminar, practicar y poder explicar tus propios proyectos. Antes de inscribirte, revisa en la página actual de cada programa el costo, el tiempo y el contenido.",
    "Cada lección dura unos cinco minutos e incluye una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Completa un mini proyecto de portafolio: elige un conjunto de datos público y gratuito (o la tabla de ventas de práctica de la lección 4), escribe una pregunta clara, limpia los datos (arregla celdas vacías, duplicados y formatos), haz una tabla de resumen, haz un gráfico que responda la pregunta y escribe un hallazgo de tres frases con un límite de tus datos. Guárdalo en Google Sheets, Excel o Google Colab con un título y una descripción corta.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que buscan empleo y personas que trabajan y quieren pasar al trabajo con datos, o usar datos en el empleo que ya tienen, y que están pensando en un certificado de datos en línea muy conocido (Google Data Analytics, IBM Data Science o Microsoft Power BI Data Analyst).",
    startingPoint: "Saben usar una computadora y hojas de cálculo básicas. La mayoría no ha comparado certificados de datos, no ha mantenido un plan largo de estudio en línea ni ha limpiado, resumido y graficado un conjunto de datos real.",
    gap: "Las habilidades de datos abren muchos empleos, pero la gente a menudo elige el certificado equivocado, lo deja a medias o lo termina sin un trabajo que mostrar. Necesitan elegir un certificado que se ajuste a su meta, planear un estudio que puedan cumplir y completar un pequeño proyecto de portafolio como los que piden estos certificados.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; se explican los términos de datos",
      "Dispositivos: se necesita una computadora para las hojas de cálculo y Google Colab; un teléfono basta para planear",
      "Los costos y los detalles de los cursos cambian, así que se revisa hoy la página oficial de cada programa",
      "Privacidad: ningún dato privado de clientes en un portafolio público sin permiso; solo conjuntos de datos públicos o de práctica",
      "Tiempo: lecciones de unos 5 minutos más práctica; los certificados toman meses después de este curso"
    ],
    prerequisites: "Ninguno. Algo de práctica básica con hojas de cálculo ayuda."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un lugar de trabajo que conoces", action: "describir el proceso de trabajo con datos y escribir tres preguntas que los datos podrían responder allí", standard: "marcando cada una como trabajo de analista o de científico de datos" },
    { id: "O2", condition: "Con tres certificados de datos muy conocidos", action: "comparar su nivel, sus herramientas principales, su tiempo y su costo, y elegir el que se ajusta a tu meta", standard: "con el costo tomado hoy de la página oficial" },
    { id: "O3", condition: "Para el certificado que elegiste", action: "crear un plan de estudio semanal con bloques de estudio fijos y una meta semanal", standard: "que se acomode a tu trabajo y a tu familia" },
    { id: "O4", condition: "Con un conjunto de datos pequeño que tiene problemas", action: "encontrar y arreglar celdas vacías, duplicados y problemas de formato y escribir un registro de limpieza", standard: "guardando primero una copia del original" },
    { id: "O5", condition: "Con un conjunto de datos limpio y una pregunta", action: "hacer una tabla de resumen y un gráfico que responda la pregunta", standard: "con el tipo de gráfico correcto y un título que diga la respuesta" },
    { id: "O6", condition: "Con tu gráfico y tu resumen", action: "escribir un hallazgo de tres frases con un límite y guardarlo como proyecto de portafolio", standard: "con un título y una descripción cortos y sin datos privados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir tu certificado y planear para terminarlo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué hacen los analistas y los científicos de datos",
          minutes: 5,
          goal: "Describir el proceso de trabajo con datos y decir qué parte te interesa más.",
          text: [
            "El trabajo con datos sigue un camino sencillo: hacer una pregunta, reunir los datos, limpiarlos, explorarlos y analizarlos, mostrarlos con gráficos y compartir lo que significan. El programa de Google describe la misma idea con sus propios pasos.",
            "Un analista de datos trabaja sobre todo con lo que ya pasó: \"¿Qué producto se vendió más el mes pasado?\" Usa hojas de cálculo, SQL (un lenguaje para hacerle preguntas a las bases de datos) y herramientas de tableros como Tableau o Power BI.",
            "Un científico de datos hace eso también y además construye modelos que predicen o clasifican cosas: \"¿Qué clientes podrían dejar de comprar?\" Por lo general programa en Python y usa más matemáticas. Muchas personas empiezan como analistas y luego pasan a la ciencia de datos."
          ],
          words: [["Conjunto de datos", "una colección de datos, por lo general una tabla con filas y columnas."], ["SQL", "Structured Query Language (lenguaje de consulta estructurado): un lenguaje para sacar datos de bases de datos."], ["Modelo", "un programa que aprende patrones de los datos para predecir o clasificar cosas."], ["Tablero (dashboard)", "una página de gráficos que se actualiza cuando cambian los datos."]],
          slides: [
            { title: "El proceso de trabajo con datos", bullets: ["Hacer una pregunta", "Reunir y limpiar los datos", "Analizar y graficar", "Compartir lo que significa"] },
            { title: "Analista de datos", bullets: ["Explica lo que pasó", "Hojas de cálculo, SQL, Tableau o Power BI", "\"¿Qué producto se vendió más el mes pasado?\""] },
            { title: "Científico de datos", bullets: ["También predice y clasifica con modelos", "Por lo general Python y más matemáticas", "\"¿Qué clientes podrían dejar de comprar?\""] }
          ],
          tryIt: "Piensa en tu trabajo actual o anterior (una tienda, un almacén, una clínica, un restaurante). Escribe tres preguntas que los datos podrían responder ahí, como \"¿Qué horas tienen más movimiento?\" Marca cada una como \"analista\" o \"científico de datos\".",
          youCanNow: "describir el proceso de trabajo con datos y la diferencia entre un analista de datos y un científico de datos.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál suele ser el primer paso del proceso de trabajo con datos?", options: ["Hacer un gráfico", "Limpiar los datos", "Construir un modelo", "Hacer una pregunta"], answer: 3, why: "El trabajo con datos empieza con una pregunta clara, que guía todos los pasos que siguen." },
            { objective: "O1", q: "En tu tienda quieres saber cuáles son las horas con más clientes. ¿De quién es ese tipo de trabajo?", options: ["Solo de un científico de datos", "De un analista de datos", "De nadie; no se puede responder", "Solo de un programador"], answer: 1, why: "Describir lo que pasó, como las horas con más clientes, es trabajo típico de un analista." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Comparar los certificados de datos más conocidos",
          minutes: 6,
          goal: "Comparar tres certificados de datos muy conocidos y elegir el que se ajusta a tu meta.",
          text: [
            "Google Data Analytics Professional Certificate (en Coursera): una serie de 9 cursos para principiantes, sin experiencia previa. Su página menciona hojas de cálculo, SQL, Tableau y presentaciones, y sus preguntas frecuentes dicen que enseña Python. Sugiere unos 6 meses a 10 horas por semana.",
            "IBM Data Science Professional Certificate (en Coursera): una serie de 12 cursos para principiantes. Su página menciona Python, SQL, Jupyter y bibliotecas como Pandas, NumPy, Matplotlib y Scikit-learn, y cubre análisis de datos, visualización y modelos de aprendizaje automático. Sugiere unos 4 meses a 10 horas por semana.",
            "Microsoft Certified: Power BI Data Analyst Associate: una certificación de nivel intermedio que se obtiene al aprobar el examen PL-300, un examen supervisado. Evalúa preparar, modelar, visualizar y analizar datos en Power BI, y se renueva gratis cada 12 meses en Microsoft Learn.",
            "Los costos, los tiempos y las listas de cursos cambian, y algunos programas vienen incluidos en suscripciones o se ofrecen gratis por medio de bibliotecas, centros de empleo o ayuda financiera. Abre cada página oficial y revisa antes de inscribirte. Ningún certificado garantiza un empleo."
          ],
          steps: ["Escribe tu meta: analista, científico de datos o usar datos en tu trabajo actual.", "Abre la página oficial de cada certificado.", "Anota su nivel, herramientas, duración y costo actual.", "Pregunta en tu centro de empleo local o en la biblioteca por acceso gratuito.", "Elige uno y escribe por qué."],
          words: [["Certificado profesional", "una serie de cursos en línea de una empresa o escuela que termina con un certificado."], ["Examen supervisado", "una prueba vigilada por un encargado, en persona o en línea, para evitar trampas."], ["Python", "un lenguaje de programación popular que se usa en ciencia de datos."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["9 cursos en Coursera, nivel principiante", "Hojas de cálculo, SQL, Tableau; también Python", "Unos 6 meses a 10 horas por semana (según su página)"] },
            { title: "IBM Data Science", bullets: ["12 cursos en Coursera, nivel principiante", "Python, SQL, Jupyter, Pandas, Scikit-learn", "Unos 4 meses a 10 horas por semana (según su página)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Intermedio: aprobar el examen PL-300", "Preparar, modelar, visualizar y analizar en Power BI", "Se renueva gratis cada 12 meses en Microsoft Learn"] },
            { title: "Antes de inscribirte", bullets: ["Revisa costo y tiempo en la página oficial", "Pregunta por acceso gratis: biblioteca, centro de empleo, ayuda", "Ningún certificado garantiza un empleo"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Haz una tabla de comparación de tres filas: certificado, nivel, herramientas principales, tiempo y costo de hoy (según la página oficial). Encierra en un círculo el que se ajusta a tu meta y escribe una frase que diga por qué.",
          youCanNow: "comparar los certificados de datos de Google, IBM y Microsoft y elegir el que se ajusta a tu meta.",
          quickCheck: [
            { objective: "O2", q: "¿Qué garantiza obtener un certificado de datos?", options: ["Nada; muestra lo que aprendiste", "Una oferta de empleo", "Un aumento", "Un título universitario"], answer: 0, why: "Un certificado muestra habilidades; no garantiza un empleo." },
            { objective: "O2", q: "Un amigo dice que un certificado cuesta cierta cantidad al mes. ¿Qué haces antes de inscribirte?", options: ["Creerle a tu amigo", "Preguntarle el precio a una IA", "Revisar hoy el costo en la página oficial del programa", "Inscribirte y averiguarlo después"], answer: 2, why: "Los costos cambian, así que revisas la página oficial en el momento de inscribirte." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer un plan de estudio que vas a cumplir",
          minutes: 5,
          goal: "Armar un plan de estudio semanal que se acomode al trabajo y a la familia.",
          text: [
            "La mayoría de las personas que no terminan un certificado lo dejan porque la vida se complica, no porque fuera demasiado difícil. Un plan por escrito, con horarios fijos, hace mucho más probable que termines.",
            "Empieza con tu semana real. Si trabajas por turnos, elige bloques de estudio que encajen: por ejemplo, tres bloques de 45 minutos entre semana y un bloque de 2 horas el fin de semana. Estudiar poco y seguido es mejor que una sola sesión larga el fin de semana.",
            "Cada semana, ponte una meta pequeña que puedas marcar como hecha: \"terminar el módulo 2 y su cuestionario\". Toma notas con tus propias palabras y haz cada práctica: ahí es donde se construye la habilidad. Un asistente de IA te puede explicar una idea confusa con palabras más sencillas o hacerte preguntas, pero haz tú el trabajo calificado y sigue las reglas de honestidad del programa."
          ],
          steps: ["Anota tus horas fijas: trabajo, familia, sueño.", "Elige de 3 a 5 bloques de estudio por semana y ponlos en tu calendario.", "Ponte una meta semanal que puedas marcar como hecha.", "Pide a un amigo o a un asistente de IA que te haga preguntas sobre tus notas.", "Revisa cada domingo y ajusta."],
          words: [["Bloque de estudio", "un horario fijo en tu calendario para aprender."], ["Práctica (laboratorio)", "un ejercicio práctico en el que usas una habilidad con datos o código reales."]],
          slides: [
            { title: "Por qué importan los planes", bullets: ["La gente lo deja cuando la vida se complica", "Un plan escrito con horarios te ayuda a terminar"] },
            { title: "Acomódalo a tu semana", bullets: ["3 a 5 bloques cortos ganan a una sesión larga", "Ejemplo: tres bloques de 45 minutos entre semana", "Más un bloque de 2 horas el fin de semana"] },
            { title: "Cada semana", bullets: ["Una meta pequeña que puedas marcar", "Haz cada práctica", "La IA te puede preguntar; el trabajo calificado es tuyo"] }
          ],
          tryIt: "Pon cuatro bloques de estudio para la próxima semana en tu teléfono o en un calendario de papel. Escribe una meta semanal del certificado que elegiste, por ejemplo \"terminar el primer módulo\".",
          youCanNow: "hacer un plan de estudio semanal con horarios fijos y una meta que puedas marcar como hecha.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde se construye de verdad la habilidad en un curso en línea?", options: ["Viendo los videos al doble de velocidad", "Leyendo los anuncios del curso", "Haciendo las prácticas", "Saltando al examen final"], answer: 2, why: "La práctica construye la habilidad que los empleadores quieren ver." },
            { objective: "O3", q: "Trabajas en turnos de noche. ¿Qué plan de estudio escribes?", options: ["Bloques de estudio fijos en tu calendario que encajen con tus turnos, con una meta semanal", "Estudiar cuando tengas un día libre", "Estudiar ocho horas en una noche cada mes", "Esperar a que cambie tu horario"], answer: 0, why: "Bloques regulares en tu calendario con una meta son el plan con más probabilidad de funcionar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir tu certificado y planear para terminarlo",
        questions: [
          { objective: "O1", q: "¿Qué pregunta se parece más al trabajo de un analista de datos?", options: ["¿Cómo arreglo el motor de un auto?", "¿Qué producto se vendió más el mes pasado?", "¿Qué cocino esta noche?", "¿Quién va a ganar el partido?"], answer: 1, why: "Los analistas explican lo que pasó con datos que ya existen." },
          { objective: "O2", q: "¿Qué certificado se obtiene al aprobar el examen PL-300?", options: ["Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "Un diploma de preparatoria", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "El Power BI Data Analyst Associate de Microsoft se obtiene al aprobar el PL-300." },
          { objective: "O2", q: "Tu meta es construir modelos de predicción en Python. ¿Los temas de qué programa se ajustan mejor?", options: ["IBM Data Science Professional Certificate", "Un curso de mecanografía", "Una licencia de montacargas", "Una tarjeta de manipulador de alimentos"], answer: 0, why: "El programa de IBM cubre Python, Scikit-learn y modelos de aprendizaje automático." },
          { objective: "O2", q: "El costo de un programa era de $49 al mes el año pasado. ¿Qué haces ahora?", options: ["Supones que es igual", "Le preguntas a un desconocido en internet", "Revisas hoy la página oficial", "No lo revisas"], answer: 2, why: "Los costos cambian; la página oficial tiene el actual." },
          { objective: "O3", q: "¿Qué plan de estudio tiene más probabilidad de funcionar para alguien que trabaja por turnos?", options: ["Estudiar 10 horas una vez al mes", "Estudiar solo cuando tengas ganas", "Tres bloques de 45 minutos entre semana y uno el fin de semana", "Saltarse las prácticas para ahorrar tiempo"], answer: 2, why: "Los bloques cortos y regulares en tu calendario son más fáciles de cumplir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Practicar las habilidades básicas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Limpiar un conjunto de datos",
          minutes: 6,
          goal: "Encontrar y arreglar celdas vacías, duplicados y problemas de formato en un conjunto de datos pequeño.",
          text: [
            "Los datos reales vienen desordenados. Antes de analizarlos, se limpian. Todos los certificados de arriba dedican tiempo a esto, porque datos equivocados dan respuestas equivocadas.",
            "Problemas comunes: celdas vacías, la misma fila dos veces (duplicados), la misma cosa escrita de distintas formas (\"CA\", \"Calif.\", \"California\"), números guardados como texto y fechas en formatos mezclados.",
            "En Google Sheets o Excel puedes ordenar y filtrar para encontrar problemas, usar Quitar duplicados, usar Buscar y reemplazar para que los nombres coincidan y cambiar el formato de una columna a número o fecha. Guarda una copia del original y anota cada cambio que hiciste, para que otros puedan confiar en tu trabajo."
          ],
          steps: ["Guarda una copia de los datos originales.", "Ordena y filtra cada columna para ver celdas vacías y valores raros.", "Quita las filas duplicadas.", "Haz que coincidan las formas de escribir con Buscar y reemplazar.", "Pon los formatos de número y fecha.", "Escribe un registro corto de cada cambio."],
          words: [["Limpieza de datos", "arreglar errores en los datos antes de analizarlos."], ["Duplicado", "una fila que aparece más de una vez."], ["Registro de limpieza", "una lista de cada cambio que hiciste a los datos."]],
          slides: [
            { title: "Por qué limpiar primero", bullets: ["Datos desordenados dan respuestas equivocadas", "Todos los certificados de datos lo enseñan"] },
            { title: "Problemas comunes", bullets: ["Celdas vacías y filas duplicadas", "\"CA\", \"Calif.\", \"California\"", "Números como texto; fechas en formatos mezclados"] },
            { title: "Cómo arreglarlos", bullets: ["Ordena y filtra para encontrar problemas", "Quitar duplicados; Buscar y reemplazar", "Pon formatos de número y fecha"] },
            { title: "Sé confiable", bullets: ["Guarda la copia original", "Escribe un registro de cada cambio"] }
          ],
          tryIt: "Haz una tabla pequeña de 15 ventas: Fecha, Artículo, Tienda, Monto. Pon 2 filas duplicadas, un monto vacío y dos formas de escribir una tienda. Luego límpiala y escribe tu registro de limpieza.",
          youCanNow: "encontrar y arreglar problemas comunes en los datos y llevar un registro de limpieza.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un duplicado en un conjunto de datos?", options: ["Una celda vacía", "Una fila que aparece más de una vez", "Un gráfico", "El título de una columna"], answer: 1, why: "Los duplicados cuentan lo mismo dos veces y hacen que los totales salgan mal." },
            { objective: "O4", q: "Vas a limpiar una tabla de ventas. ¿Qué haces primero?", options: ["Borrar las filas que se ven raras", "Hacer un gráfico", "Ordenar solo por fecha", "Guardar una copia del original"], answer: 3, why: "Guardar el original te permite revisar o deshacer tu limpieza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Resumir datos y hacer un gráfico claro",
          minutes: 5,
          goal: "Responder una pregunta con una tabla de resumen y un gráfico.",
          text: [
            "Empieza con una pregunta clara, como \"¿Qué tienda vendió más el mes pasado?\" Una buena pregunta decide qué columnas necesitas.",
            "Una tabla de resumen agrupa y suma los datos. En Sheets o Excel, una tabla dinámica hace esto: pon Tienda en las filas y la suma de Monto en los valores. En Python, la biblioteca Pandas hace lo mismo con groupby. Puedes probar Python gratis en Google Colab, que se parece a las herramientas del programa de IBM.",
            "Luego elige el gráfico que encaja: de barras para comparar grupos, de líneas para cambios en el tiempo, y evita los gráficos de pastel con muchas rebanadas. Ponle un título que diga la respuesta, como \"Eastside vendió más en marzo\", y nombra los ejes."
          ],
          steps: ["Escribe una pregunta.", "Haz una tabla dinámica (o un groupby de Pandas).", "Elige el gráfico: barras para comparar, líneas para el tiempo.", "Escribe un título que diga la respuesta.", "Nombra los ejes."],
          words: [["Tabla dinámica", "una herramienta de hoja de cálculo que agrupa y suma datos."], ["Pandas", "una biblioteca de Python para trabajar con tablas de datos."], ["Gráfico de barras", "un gráfico que compara grupos con barras de distinto largo."]],
          slides: [
            { title: "Empieza con una pregunta", bullets: ["\"¿Qué tienda vendió más el mes pasado?\"", "La pregunta elige tus columnas"] },
            { title: "Resume", bullets: ["Hoja de cálculo: tabla dinámica", "Python: groupby de Pandas (pruébalo en Google Colab)", "Filas: Tienda. Valores: suma de Monto"] },
            { title: "Grafica con claridad", bullets: ["Barras para comparar, líneas para el tiempo", "El título dice la respuesta", "Nombra los ejes"] }
          ],
          sources: [COLAB],
          tryIt: "Usa tu tabla limpia de la lección 4. Haz una tabla dinámica del Monto total por Tienda y luego un gráfico de barras con un título que diga la respuesta.",
          youCanNow: "convertir una pregunta en una tabla de resumen y un gráfico claro.",
          quickCheck: [
            { objective: "O5", q: "¿Qué hace una tabla dinámica?", options: ["Dibuja un mapa", "Borra duplicados", "Corrige la ortografía", "Agrupa y suma datos"], answer: 3, why: "Una tabla dinámica agrupa filas, por ejemplo por tienda, y las suma." },
            { objective: "O5", q: "Quieres comparar las ventas totales de 5 tiendas. ¿Qué gráfico haces?", options: ["Un gráfico de líneas", "Un gráfico de barras con un título que diga la respuesta", "Un gráfico circular con 50 partes", "Ningún gráfico"], answer: 1, why: "Los gráficos de barras comparan categorías, y un título que dice la respuesta lo deja claro." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contar la historia y armar un proyecto de portafolio",
          minutes: 5,
          goal: "Escribir un hallazgo corto y presentar tu trabajo como un proyecto de portafolio.",
          text: [
            "Los empleadores quieren ver que sabes explicar los datos, no solo hacer gráficos. Un buen hallazgo tiene tres frases: qué encontraste, por qué importa y un límite de los datos. Ejemplo: \"Eastside hizo el 40% de las ventas de marzo. Puede necesitar más personal los sábados. Los datos cubren solo un mes.\"",
            "La mayoría de estos certificados terminan con un proyecto final o de portafolio. Puedes empezar uno ahora: un título, la pregunta, de dónde salieron los datos, tu registro de limpieza, el gráfico y tu hallazgo. Usa datos públicos y gratuitos, como el sitio de datos abiertos de una ciudad, o tu tabla de práctica. Nunca uses datos privados de clientes o de una empresa sin permiso.",
            "Un asistente de IA te puede ayudar a revisar que tu texto sea claro, pero asegúrate de que cada número de tu hallazgo salga de tu propia tabla."
          ],
          steps: ["Escribe tu hallazgo en tres frases: resultado, por qué importa, un límite.", "Junta título, pregunta, fuente de datos, registro de limpieza y gráfico.", "Revisa cada número con tu tabla.", "Guárdalo en un lugar que puedas compartir, como una carpeta de Google Drive o GitHub."],
          words: [["Proyecto final", "un proyecto al final de un programa."], ["Portafolio", "una colección de tu trabajo que muestras a los empleadores."], ["Limitación", "algo de los datos que hace que la respuesta pueda no estar completa."]],
          slides: [
            { title: "Un hallazgo de tres frases", bullets: ["Qué encontraste", "Por qué importa", "Un límite de los datos"] },
            { title: "Tu proyecto de portafolio", bullets: ["Título, pregunta y fuente de datos", "Registro de limpieza, gráfico y hallazgo", "Solo datos públicos o de práctica"] },
            { title: "Antes de compartir", bullets: ["Revisa cada número con tu tabla", "La IA revisa la claridad, no tus datos", "Guárdalo donde puedas compartir un enlace"] }
          ],
          tryIt: "Tarea final: termina tu mini proyecto de portafolio. Pregunta, datos limpios, registro de limpieza, tabla de resumen, un gráfico y un hallazgo de tres frases con un límite. Guárdalo con un título y una descripción corta.",
          youCanNow: "completar y explicar un proyecto de datos pequeño como los que piden los certificados de datos.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué incluir un límite en tu hallazgo?", options: ["Muestra honestidad sobre lo que los datos pueden y no pueden decir", "Hace más largo el hallazgo", "Lo exige la ley", "Esconde los errores"], answer: 0, why: "Decir un límite, como que solo cubre un mes, genera confianza en tu trabajo." },
            { objective: "O6", q: "Quieres usar la lista de clientes de tu empleador en tu portafolio público. ¿Qué haces?", options: ["Publicarla tal como está", "Quitar solo los nombres", "Usar en su lugar un conjunto de datos público o de práctica, a menos que tengas permiso", "Publicarla y preguntar después"], answer: 2, why: "Los datos privados de clientes no van en un portafolio público sin permiso." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Practicar las habilidades básicas",
        questions: [
          { objective: "O4", q: "Tus datos tienen \"CA\", \"Calif.\" y \"California\". ¿Qué haces?", options: ["Los haces coincidir con Buscar y reemplazar", "Lo dejas así", "Borras la columna", "Adivinas los totales"], answer: 0, why: "Escribirlos igual evita que un lugar se cuente como tres." },
          { objective: "O4", q: "¿Por qué llevar un registro de limpieza?", options: ["No sirve", "Para que el archivo sea más grande", "Porque los gráficos lo necesitan", "Para que otros puedan confiar en tus cambios y repetirlos"], answer: 3, why: "Un registro muestra exactamente lo que cambiaste." },
          { objective: "O5", q: "¿Qué herramienta agrupa y suma datos en una hoja de cálculo?", options: ["El corrector ortográfico", "Una tabla dinámica", "La vista previa de impresión", "Los comentarios"], answer: 1, why: "Las tablas dinámicas agrupan y resumen." },
          { objective: "O5", q: "Quieres mostrar cómo cambian las ventas en 12 meses. ¿Qué gráfico usas?", options: ["Gráfico de líneas", "Gráfico de pastel", "Ningún gráfico", "Una foto"], answer: 0, why: "Los gráficos de líneas muestran cambios en el tiempo." },
          { objective: "O6", q: "¿Cuál es un buen hallazgo de tres frases?", options: ["\"Aquí hay un gráfico.\"", "\"Los datos son interesantes.\"", "\"Eastside vendió más en marzo. Puede necesitar más personal los sábados. Los datos cubren un mes.\"", "\"Usé Excel.\""], answer: 2, why: "Da el resultado, por qué importa y un límite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para un certificado profesional de ciencia de datos",
    questions: [
      { objective: "O1", q: "¿Cuál suele ser el primer paso del proceso de trabajo con datos?", options: ["Hacer un gráfico", "Hacer una pregunta", "Comprar software", "Compartir resultados"], answer: 1, why: "Una pregunta clara guía todo lo demás." },
      { objective: "O1", q: "Un científico de datos, más que un analista, por lo general:", options: ["Solo usa papel", "Solo captura datos", "Nunca usa datos", "Construye modelos que predicen"], answer: 3, why: "Los científicos de datos construyen modelos de predicción, muchas veces en Python." },
      { objective: "O1", q: "¿Para qué se usa SQL?", options: ["Para hacer dibujos", "Para editar video", "Para enviar correos", "Para sacar datos de bases de datos"], answer: 3, why: "SQL es un lenguaje para hacerle preguntas a las bases de datos." },
      { objective: "O2", q: "El Google Data Analytics Professional Certificate se ofrece en:", options: ["Solo Microsoft Learn", "Coursera", "La oficina de licencias de manejo", "Una tienda de aplicaciones"], answer: 1, why: "Su página oficial está en Coursera." },
      { objective: "O2", q: "Según su página, ¿cuántos cursos tiene el IBM Data Science Professional Certificate?", options: ["3", "9", "12", "20"], answer: 2, why: "La página de IBM en Coursera indica una serie de 12 cursos." },
      { objective: "O2", q: "¿En qué herramienta se centra la certificación de Microsoft?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "Es el Power BI Data Analyst Associate." },
      { objective: "O2", q: "¿Qué garantiza obtener un certificado de datos?", options: ["Un empleo", "Un aumento de sueldo", "Nada; muestra lo que aprendiste", "Un título universitario"], answer: 2, why: "Los certificados muestran aprendizaje; no garantizan resultados." },
      { objective: "O2", q: "Antes de inscribirte, debes revisar el costo en:", options: ["La página oficial del programa", "Un anuncio en redes sociales", "Tus notas del año pasado", "La memoria de una IA"], answer: 0, why: "La página oficial tiene el costo y el contenido actuales." },
      { objective: "O3", q: "¿Qué plan es mejor para terminar un certificado?", options: ["Estudiar cuando haya tiempo", "Poner bloques de estudio en tu calendario con una meta semanal", "Saltarse las prácticas", "Estudiar un día al mes"], answer: 1, why: "Los bloques regulares y agendados con metas te ayudan a terminar." },
      { objective: "O3", q: "Al usar un asistente de IA durante un certificado, debes:", options: ["Pedirle que haga el trabajo calificado", "Evitarlo siempre por completo", "Pegar tu examen", "Usarlo para que te explique ideas y te haga preguntas, y seguir las reglas de honestidad"], answer: 3, why: "La IA te puede ayudar a aprender, pero el trabajo calificado debe ser tuyo." },
      { objective: "O3", q: "¿Dónde se construye de verdad la habilidad en un curso en línea?", options: ["Haciendo las prácticas", "Solo viendo videos", "Leyendo el título", "Saltando los cuestionarios"], answer: 0, why: "Las prácticas son trabajo con las manos." },
      { objective: "O4", q: "¿Qué es un duplicado en un conjunto de datos?", options: ["Una celda vacía", "El nombre de una columna", "Un gráfico", "Una fila que aparece más de una vez"], answer: 3, why: "Los duplicados son filas repetidas." },
      { objective: "O4", q: "Antes de limpiar, debes:", options: ["Borrar el original", "Hacer un gráfico", "Guardar una copia del original", "Enviarlo por correo a todos"], answer: 2, why: "Una copia te deja empezar de nuevo o revisar tu trabajo." },
      { objective: "O4", q: "Los números guardados como texto pueden causar:", options: ["Trabajo más rápido", "Totales equivocados", "Mejores gráficos", "Nada"], answer: 1, why: "Los números como texto pueden no sumarse bien." },
      { objective: "O4", q: "En Python, ¿qué biblioteca trabaja con tablas como una hoja de cálculo?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "Pandas sirve para trabajar con tablas de datos." },
      { objective: "O5", q: "¿Qué herramienta gratuita te deja usar Python en un navegador web?", options: ["Una calculadora", "Bloc de notas", "Google Colab", "Paint"], answer: 2, why: "Google Colab ejecuta cuadernos de Python en línea." },
      { objective: "O5", q: "Para comparar las ventas de 5 tiendas, el mejor gráfico suele ser:", options: ["Un gráfico de barras", "Un pastel con 20 rebanadas", "Un mapa", "Ningún gráfico"], answer: 0, why: "Los gráficos de barras comparan grupos con claridad." },
      { objective: "O5", q: "Un buen título de gráfico:", options: ["\"Gráfico 1\"", "Dice la respuesta, como \"Eastside vendió más en marzo\"", "Se deja en blanco", "Es muy largo"], answer: 1, why: "Un título que dice la respuesta ayuda a quien lo lee." },
      { objective: "O6", q: "¿Qué datos NO debes usar en un portafolio público?", options: ["Datos abiertos de una ciudad", "Datos privados de clientes sin permiso", "Tu tabla de práctica", "Conjuntos de datos públicos y gratuitos"], answer: 1, why: "Los datos privados necesitan permiso y no se deben compartir." },
      { objective: "O6", q: "Tu hallazgo debe incluir un límite porque:", options: ["Muestra honestidad sobre lo que los datos pueden y no pueden decir", "Lo hace más largo", "A los empleadores no les gusta", "Lo exige la ley"], answer: 0, why: "Decir un límite muestra un análisis cuidadoso y confiable." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      6,
      8,
      10,
      11,
      12,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Pregunta clara",
        objective: "O1",
        notYet: "No hay pregunta, o los datos no pueden responderla.",
        meets: "Una pregunta clara que el conjunto de datos puede responder.",
        exceeds: "La pregunta importa en un lugar de trabajo real y dice por qué."
      },
      {
        name: "Datos limpios y registro",
        objective: "O4",
        notYet: "Quedan celdas vacías, duplicados o problemas de formato, o no hay registro.",
        meets: "Celdas vacías, duplicados y formatos arreglados, con un registro de limpieza y el original guardado.",
        exceeds: "El registro dice cuántas filas cambió cada arreglo."
      },
      {
        name: "Resumen y gráfico",
        objective: "O5",
        notYet: "No hay tabla de resumen, o el gráfico no responde la pregunta.",
        meets: "Una tabla de resumen y un gráfico del tipo correcto con un título que dice la respuesta.",
        exceeds: "Los ejes tienen etiquetas y el gráfico se entiende de un vistazo."
      },
      {
        name: "Hallazgo y límite",
        objective: "O6",
        notYet: "No hay hallazgo, o no se dice ningún límite.",
        meets: "Un hallazgo de tres frases con un límite de los datos.",
        exceeds: "El hallazgo sugiere un siguiente paso práctico."
      },
      {
        name: "Listo para el portafolio",
        objective: "O6",
        notYet: "No está guardado, o tiene datos privados.",
        meets: "Guardado en Google Sheets, Excel o Google Colab con un título y una descripción cortos, y sin datos privados.",
        exceeds: "Compartido como un enlace que la persona puede agregar a su currículum o perfil."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se inscriben en un certificado de datos dentro de 30 días (encuesta de seguimiento)",
      "Personas que terminan un certificado de datos dentro de 6 meses",
      "Personas que usan su proyecto de portafolio en una solicitud de empleo o consiguen un puesto relacionado con datos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet",
      "Una hoja de cálculo gratuita (Google Sheets o Microsoft Excel en línea) y, si se quiere, Google Colab",
      "Un conjunto de datos público y gratuito, o la tabla de ventas de práctica de la lección 4",
      "Un calendario en el teléfono o en papel para el plan de estudio",
      "Unos 60 minutos para las lecciones y las comprobaciones, más tiempo de práctica para el proyecto"
    ],
    facilitatorNotes: [
      "Prepara la tabla de ventas de práctica con problemas a propósito para que todos practiquen la limpieza con los mismos datos.",
      "Pide que revisen en vivo en clase los costos de los certificados en las páginas oficiales en vez de usar números viejos.",
      "Muestra paso a paso una tabla dinámica y un gráfico antes de que cada persona haga los suyos.",
      "Recuerda usar solo datos públicos o de práctica en los portafolios.",
      "Califica el proyecto de portafolio con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

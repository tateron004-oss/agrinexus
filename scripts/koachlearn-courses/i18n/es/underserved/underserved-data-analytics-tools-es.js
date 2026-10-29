"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-data-analytics-tools.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-data-analytics-tools-es",
  lang: "es",
  translationOf: "underserved-data-analytics-tools",
  category: "Undeserved Community",
  name: "Introducción a las herramientas y técnicas de análisis de datos",
  skills: "Armar una hoja de cálculo ordenada, Ordenar y filtrar datos, Usar SUM y AVERAGE, Hacer un gráfico, Usar la IA para que te explique fórmulas, Compartir un hallazgo con palabras sencillas",
  outcome: "poner información real en una hoja de cálculo gratuita (Google Sheets o Excel para la web), ordenarla y filtrarla, sacar el total y el promedio con fórmulas, hacer un gráfico y explicar lo que muestra en dos frases sencillas.",
  about: [
    "Analizar datos significa usar información para responder una pregunta. Un banco de alimentos quiere saber cuál es su día con más visitas. Una familia quiere saber en qué se le va el dinero. Una liga juvenil quiere saber cuántos niños vinieron cada semana. Puedes responder preguntas como estas con herramientas gratuitas.",
    "En este curso vas a usar una hoja de cálculo gratuita, Google Sheets o Excel para la web, en un teléfono, en la computadora de tu casa o en una de la biblioteca. Vas a capturar datos, ordenarlos y filtrarlos, usar fórmulas sencillas, hacer un gráfico y usar un asistente de IA gratuito para que te ayude cuando te atores.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" que va armando la misma hoja de cálculo, paso a paso. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma una hoja de cálculo con un mes de datos reales o de práctica (por ejemplo, visitas diarias a un banco de alimentos o gastos de la familia por categoría). Ordénala, fíltrala, agrega un total con SUM y un promedio con AVERAGE, haz un gráfico y escribe dos frases sencillas que digan lo que muestran los datos.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos y jóvenes adultos de comunidades desatendidas que quieren una habilidad de computación para el trabajo o que necesitan llevar las cuentas de su familia, un banco de alimentos, una iglesia, una liga juvenil o una pequeña organización sin fines de lucro.",
    startingPoint: "Saben usar el teléfono y quizás una computadora para navegar. Muchos nunca han usado una hoja de cálculo, escrito una fórmula ni hecho un gráfico, y algunos no se sienten seguros con las matemáticas.",
    gap: "Muchos empleos de oficina, de tiendas y de organizaciones sin fines de lucro piden saber usar hojas de cálculo, y los grupos de la comunidad necesitan mostrar qué significan sus números. Necesitan capturar datos limpios, ordenar, filtrar, sacar totales, hacer gráficos y explicarlos, usando herramientas gratuitas y cuidando la información de las personas.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto grado)",
      "Dispositivos: lo mejor es una computadora de la biblioteca o de la casa; una aplicación del teléfono sirve para hojas pequeñas",
      "Costo: Google Sheets o Excel para la web gratis, con una cuenta gratuita",
      "Privacidad: nada de nombres, teléfonos ni números de cuenta de personas reales pegados en la IA",
      "Nivel de matemáticas: solo sumar y sacar promedios; la hoja de cálculo hace las cuentas"
    ],
    prerequisites: "Ninguno. Quien nunca ha usado el ratón o el teclado de una computadora puede tomar primero un curso básico de computación."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con algo que te importa en casa, en el trabajo o en tu comunidad", action: "escribir una pregunta clara que los datos puedan responder y hacer una lista de los datos que necesitas", standard: "empezando con cuál, cuántos o cuánto" },
    { id: "O2", condition: "Con Google Sheets o Excel para la web", action: "crear una hoja de cálculo con encabezados claros y capturar datos limpios", standard: "con un encabezado por columna en la fila 1 y un registro por fila, al menos diez filas" },
    { id: "O3", condition: "Con una hoja de cálculo con datos", action: "ordenar una columna de mayor a menor y filtrar para mostrar solo algunas filas", standard: "y luego quitar el filtro para que vuelvan todas las filas" },
    { id: "O4", condition: "Con una columna de números", action: "calcular un total con SUM y un promedio con AVERAGE", standard: "usando el rango correcto para que los dos se actualicen cuando cambia un número" },
    { id: "O5", condition: "Con tus datos y un asistente de IA gratuito", action: "crear un gráfico con un título claro y pedirle a la IA que te explique una fórmula o un error", standard: "eligiendo el tipo de gráfico correcto y sin pegar datos privados" },
    { id: "O6", condition: "Cuando tu hoja esté terminada", action: "escribir dos frases sencillas que respondan tu pregunta, revisar tu trabajo y compartirlo de forma segura", standard: "con un número que respalde la respuesta y compartiéndola solo con quien la necesita" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar tus datos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es el análisis de datos y cómo hacer una buena pregunta",
          minutes: 4,
          goal: "Escribir una pregunta clara que los datos puedan responder.",
          text: [
            "Los datos son información que puedes contar o poner en una lista: fechas, cantidades, nombres de lugares, número de visitantes. Analizar es mirar esos datos para responder una pregunta.",
            "Todo buen proyecto empieza con una pregunta clara. \"¿Qué día de la semana recibe más visitantes nuestro banco de alimentos?\" es clara. \"Háblame del banco de alimentos\" no lo es.",
            "Una pregunta clara te dice qué datos juntar. Para encontrar el día con más visitas, necesitas la fecha y el número de visitantes de cada día."
          ],
          steps: ["Elige algo que te importe: familia, trabajo, escuela o comunidad.", "Escribe una pregunta que empiece con cuál, cuántos o cuánto.", "Haz una lista de los datos que necesitas para responderla."],
          words: [["Datos", "información que puedes contar o poner en una lista, como fechas, cantidades o nombres."], ["Análisis", "mirar los datos para responder una pregunta."]],
          slides: [
            { title: "Datos y análisis", bullets: ["Datos: información que puedes contar o listar", "Análisis: usar datos para responder una pregunta"] },
            { title: "Empieza con una pregunta clara", bullets: ["Clara: \"¿Qué día recibe más visitantes?\"", "No clara: \"Háblame del banco de alimentos\""] },
            { title: "La pregunta te dice qué juntar", bullets: ["¿Día con más visitas? Necesitas fechas y conteos", "¿Gasto más grande? Necesitas categorías y cantidades"] }
          ],
          tryIt: "Escribe una pregunta clara sobre tu familia, tu trabajo, tu escuela o tu comunidad que los números puedan responder. Debajo, haz una lista de los dos o tres tipos de datos que necesitarías.",
          youCanNow: "escribir una pregunta clara y decir qué datos se necesitan para responderla.",
          quickCheck: [
            { objective: "O1", q: "¿Qué son los datos?", options: ["Información que puedes contar o poner en una lista", "Solo los números de un estado de cuenta del banco", "Un tipo de computadora", "Un sitio web"], answer: 0, why: "Los datos son información como fechas, cantidades, lugares y número de visitantes." },
            { objective: "O1", q: "Tu iglesia quiere saber si va más gente en invierno. ¿Qué datos necesitas?", options: ["El teléfono del pastor", "La fecha y el número de personas en cada servicio", "El color del edificio", "Nada; solo adivinar"], answer: 1, why: "Una pregunta clara te dice que juntes la fecha y el número de personas de cada servicio." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Abrir una hoja de cálculo gratuita y capturar datos",
          minutes: 5,
          goal: "Crear una hoja de cálculo con encabezados claros en las columnas y tus datos.",
          text: [
            "Una hoja de cálculo es una cuadrícula de recuadros llamados celdas. Las columnas van de arriba abajo y tienen letras (A, B, C). Las filas van de lado a lado y tienen números (1, 2, 3). La celda B2 está en la columna B, fila 2.",
            "Opciones gratuitas: Google Sheets en sheets.google.com con una cuenta gratuita de Google, o Excel para la web en office.com con una cuenta gratuita de Microsoft. Las dos funcionan en un navegador web y como aplicaciones del teléfono.",
            "Mantén los datos ordenados: un encabezado por columna en la fila 1 (como Fecha, Día, Visitantes), una fila por cada registro, y los números escritos como números simples, sin palabras extra. Los datos ordenados hacen más fácil cada paso que sigue."
          ],
          steps: ["Abre sheets.google.com u office.com y empieza una hoja de cálculo en blanco.", "Ponle al archivo un nombre claro.", "Escribe un encabezado en cada columna de la fila 1.", "Captura un registro por fila debajo de los encabezados."],
          words: [["Hoja de cálculo", "una cuadrícula de filas y columnas para trabajar con números y listas."], ["Celda", "un recuadro de una hoja de cálculo, nombrado por la letra de su columna y el número de su fila, como B2."], ["Encabezado", "la etiqueta de arriba de una columna."]],
          slides: [
            { title: "Una hoja de cálculo es una cuadrícula", bullets: ["Las columnas tienen letras: A, B, C", "Las filas tienen números: 1, 2, 3", "Celda B2 = columna B, fila 2"] },
            { title: "Hojas de cálculo gratuitas", bullets: ["Google Sheets: sheets.google.com", "Excel para la web: office.com", "Las dos funcionan en la biblioteca o en el teléfono"] },
            { title: "Datos ordenados", bullets: ["Un encabezado por columna en la fila 1", "Un registro por fila", "Números como números simples"] }
          ],
          tryIt: "Abre una hoja de cálculo gratuita. Pon tres encabezados para tu pregunta (por ejemplo Fecha, Día, Visitantes) y captura al menos diez filas de datos reales o de práctica.",
          youCanNow: "empezar una hoja de cálculo gratuita y capturar datos ordenados bajo encabezados claros.",
          quickCheck: [
            { objective: "O2", q: "En una hoja de cálculo, ¿con qué se nombran las filas?", options: ["Con letras", "Con colores", "Con números", "Con nombres"], answer: 2, why: "Las filas van de lado a lado y tienen números; las columnas tienen letras." },
            { objective: "O2", q: "Escribiste \"como 40 personas\" en la columna de Visitantes. ¿Qué cambias?", options: ["Nada", "Agregas más palabras", "Lo pones en negritas", "Escribes solo 40, como un número simple"], answer: 3, why: "Los datos limpios usan números simples para que la hoja de cálculo pueda hacer cuentas con ellos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ordenar y filtrar",
          minutes: 5,
          goal: "Ordenar tus datos de mayor a menor y filtrarlos para mostrar solo algunas filas.",
          text: [
            "Ordenar pone las filas en un orden, como de mayor a menor. Ordenar la columna Visitantes de mayor a menor pone hasta arriba el día con más visitas.",
            "Filtrar esconde las filas que no necesitas en ese momento. Podrías filtrar la columna Día para mostrar solo los sábados. Filtrar no borra nada; puedes quitar el filtro y regresan todas las filas.",
            "Tanto en Google Sheets como en Excel para la web, ordenar y filtrar están en el menú Datos o en la pestaña Datos. Si no los encuentras, pregunta a un asistente de IA gratuito: \"¿Cómo ordeno una columna de mayor a menor en Google Sheets?\""
          ],
          steps: ["Haz clic en cualquier celda de tus datos.", "Abre el menú Datos o la pestaña Datos y activa un filtro.", "Usa la flechita de un encabezado para ordenar de mayor a menor.", "Usa la flecha de otro encabezado para mostrar solo algunos valores y luego quita el filtro."],
          words: [["Ordenar", "poner las filas en un orden, como de mayor a menor o de la A a la Z."], ["Filtrar", "mostrar solo las filas que coinciden con lo que eliges, sin borrar las demás."]],
          slides: [
            { title: "Ordenar: poner filas en orden", bullets: ["De mayor a menor pone primero el valor más alto", "De la A a la Z pone los nombres en orden"] },
            { title: "Filtrar: mostrar solo lo que necesitas", bullets: ["Ejemplo: solo los sábados", "No se borra nada", "Quita el filtro y regresan todas las filas"] },
            { title: "Dónde encontrarlos", bullets: ["El menú Datos o la pestaña Datos", "¿Te atoraste? Pregunta a la IA cómo hacerlo en tu herramienta"] }
          ],
          tryIt: "Ordena tu columna principal de números de mayor a menor y anota la fila de arriba. Luego filtra para mostrar solo un tipo de fila y quita el filtro.",
          youCanNow: "ordenar y filtrar una hoja de cálculo para encontrar lo que buscas.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace ordenar?", options: ["Pone las filas en orden, por ejemplo de mayor a menor", "Borra las filas que no necesitas", "Suma una columna", "Hace un gráfico"], answer: 0, why: "Ordenar pone las filas en un orden, como el número más grande primero." },
            { objective: "O3", q: "Solo quieres ver las filas de los lunes. ¿Qué usas?", options: ["SUM", "Un filtro en la columna del Día", "Un gráfico circular", "Borras las otras filas"], answer: 1, why: "Un filtro esconde las filas que no necesitas sin borrarlas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Preparar tus datos",
        questions: [
          { objective: "O1", q: "¿Cuál es la pregunta de datos más clara?", options: ["\"Háblame del banco de alimentos\"", "\"¿Cosas?\"", "\"¿Qué día de la semana recibe más visitantes el banco de alimentos?\"", "\"Datos, por favor\""], answer: 2, why: "Dice exactamente qué encontrar, así que sabes qué datos juntar." },
          { objective: "O2", q: "¿Qué es la celda C4?", options: ["El recuadro de la columna C, fila 4", "El cuarto archivo", "La fila C, columna 4", "Un número de teléfono"], answer: 0, why: "Las celdas se nombran con la letra de la columna y luego el número de la fila." },
          { objective: "O2", q: "¿Dónde deben ir los encabezados de las columnas?", options: ["Hasta abajo", "En la fila 1, un encabezado por columna", "En otro archivo", "En ningún lado"], answer: 1, why: "Los encabezados en la fila 1 mantienen los datos ordenados y fáciles de ordenar." },
          { objective: "O3", q: "Filtras para mostrar solo los sábados. ¿Qué pasa con las demás filas?", options: ["Se borran para siempre", "Se pasan a otro archivo", "Se convierten en un gráfico", "Se esconden y regresan cuando quitas el filtro"], answer: 3, why: "Filtrar esconde filas; no las borra." },
          { objective: "O3", q: "Quieres el día con más visitas hasta arriba. ¿Qué haces?", options: ["Ordenas la columna de visitantes de mayor a menor", "Borras las demás filas", "Cambias el nombre del archivo", "Pones el texto en negritas"], answer: 0, why: "Ordenar de mayor a menor pone primero el número más alto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar y compartir respuestas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Fórmulas: SUM y AVERAGE",
          minutes: 5,
          goal: "Usar SUM para sacar el total de una columna y AVERAGE para sacar su promedio.",
          text: [
            "Una fórmula es una instrucción corta que hace las cuentas por ti. Toda fórmula empieza con un signo de igual (=).",
            "=SUM(C2:C31) suma todos los números de la celda C2 a la C31. =AVERAGE(C2:C31) saca el promedio de esos números. Si tu hoja está en español, estas fórmulas se llaman SUMA y PROMEDIO. C2:C31 se llama rango: todas las celdas de la C2 a la C31.",
            "Si cambias un número de la columna, el total y el promedio se actualizan solos. Ese es el poder de una hoja de cálculo: no hay que volver a contar a mano."
          ],
          steps: ["Haz clic en una celda vacía debajo de tu columna de números.", "Escribe =SUM( luego la primera celda, dos puntos, la última celda y luego ).", "Presiona Enter para ver el total.", "En otra celda vacía, haz lo mismo con =AVERAGE( ... )."],
          words: [["Fórmula", "una instrucción que empieza con = y hace cuentas en una hoja de cálculo."], ["Rango", "un grupo de celdas, escrito como C2:C31."], ["Promedio", "el total dividido entre cuántos números hay."]],
          slides: [
            { title: "Las fórmulas empiezan con =", bullets: ["Hacen las cuentas por ti", "Se actualizan cuando cambian los números"] },
            { title: "Dos fórmulas que debes conocer", bullets: ["=SUM(C2:C31) los suma todos (SUMA)", "=AVERAGE(C2:C31) saca el promedio (PROMEDIO)"] },
            { title: "¿Qué es un rango?", bullets: ["C2:C31 quiere decir de C2 a C31", "Primera celda, dos puntos, última celda"] }
          ],
          tryIt: "Debajo de tu columna de números, agrega un total con =SUM y un promedio con =AVERAGE. Cambia un número y mira cómo se actualizan los dos.",
          youCanNow: "sacar el total y el promedio de una columna con SUM y AVERAGE.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un rango como B2:B20?", options: ["Una sola celda", "Un tipo de gráfico", "Todas las celdas desde B2 hasta B20", "El nombre de un archivo"], answer: 2, why: "Un rango es cada celda desde la primera hasta la última, unidas con dos puntos." },
            { objective: "O4", q: "Quieres el total de los gastos de D2 a D15. ¿Qué escribes?", options: ["SUM D2 D15", "=AVERAGE(D2:D15)", "=D2+D15", "=SUM(D2:D15)"], answer: 3, why: "=SUM(D2:D15) suma cada número desde D2 hasta D15." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hacer un gráfico, con la IA como ayudante",
          minutes: 5,
          goal: "Hacer un gráfico sencillo y usar la IA para que te explique una fórmula o arregle un error.",
          text: [
            "Un gráfico convierte los números en una imagen. Un gráfico de barras compara cantidades, como visitantes por día. Un gráfico de líneas muestra cambios en el tiempo. Un gráfico de pastel muestra las partes de un todo, como los gastos por categoría.",
            "Para hacer uno, selecciona tus encabezados y datos, y luego inserta un gráfico desde el menú Insertar o la pestaña Insertar. Cambia el título para que diga lo que muestra el gráfico.",
            "Un asistente de IA gratuito puede explicar fórmulas y errores. Escribe la fórmula o el error y pregunta: \"Explica esto con palabras sencillas y cómo arreglarlo.\" No pegues datos privados como nombres, direcciones o números de cuenta; mejor describe las columnas."
          ],
          steps: ["Selecciona los encabezados y los datos que quieres mostrar.", "Abre el menú Insertar o la pestaña Insertar y elige Gráfico.", "Elige barras, líneas o pastel.", "Ponle al gráfico un título claro."],
          words: [["Gráfico de barras", "un gráfico que compara cantidades con barras."], ["Gráfico de líneas", "un gráfico que muestra cambios en el tiempo."], ["Gráfico de pastel", "un círculo que muestra las partes de un todo."]],
          slides: [
            { title: "Elige el gráfico correcto", bullets: ["Barras: comparar cantidades", "Líneas: cambios en el tiempo", "Pastel: partes de un todo"] },
            { title: "Haz un gráfico", bullets: ["Selecciona encabezados y datos", "Insertar y luego Gráfico", "Ponle un título claro"] },
            { title: "La IA como ayudante", bullets: ["Pídele que explique una fórmula o un error", "Describe las columnas; no pegues datos privados"] }
          ],
          tryIt: "Haz un gráfico de barras o de líneas con tus datos y ponle un título claro. Luego pide a un asistente de IA que explique con palabras sencillas qué hace =AVERAGE(C2:C31).",
          youCanNow: "hacer un gráfico y usar la IA para entender fórmulas sin compartir datos privados.",
          quickCheck: [
            { objective: "O5", q: "¿Qué gráfico compara cantidades, como los visitantes por día?", options: ["Un gráfico de barras", "Un gráfico de líneas", "Un gráfico circular", "Ningún gráfico"], answer: 0, why: "Un gráfico de barras compara cantidades una al lado de la otra." },
            { objective: "O5", q: "Tu fórmula muestra un error y la hoja tiene los nombres de los clientes. ¿Qué pegas en la IA?", options: ["Toda la hoja", "La fórmula y una descripción de las columnas", "Los teléfonos de los clientes", "La contraseña de tu cuenta"], answer: 1, why: "Describe las columnas y pega la fórmula, no los datos privados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Decir lo que muestran los datos",
          minutes: 5,
          goal: "Escribir dos frases sencillas que respondan tu pregunta y compartir la hoja de forma segura.",
          text: [
            "Tu trabajo no está terminado hasta que alguien lo entiende. Escribe dos frases: una con la respuesta y otra con un número que la respalde. Por ejemplo: \"El sábado es nuestro día con más visitas. Tuvimos un promedio de 64 visitantes los sábados, contra 38 los demás días.\"",
            "Revisa tu trabajo antes de compartirlo. Busca números mal escritos, filas vacías y totales que se vean demasiado grandes o demasiado pequeños. Si algo se ve mal, probablemente lo está.",
            "Para compartir, usa el botón Compartir y elige quién lo puede ver. Si los datos son sobre personas, compártelos solo con quienes los necesitan y quita los nombres o teléfonos si no hacen falta."
          ],
          steps: ["Escribe una frase con la respuesta a tu pregunta.", "Escribe una frase con un número que la respalde.", "Revisa números mal escritos, filas vacías y totales raros.", "Compártela solo con las personas que la necesitan."],
          words: [["Hallazgo", "lo que muestran los datos, dicho con palabras sencillas."]],
          slides: [
            { title: "Di lo que muestra", bullets: ["Frase 1: la respuesta", "Frase 2: un número que la respalde"] },
            { title: "Revisa antes de compartir", bullets: ["Números mal escritos", "Filas vacías", "Totales demasiado grandes o pequeños"] },
            { title: "Comparte de forma segura", bullets: ["Usa el botón Compartir", "Solo con quien lo necesita", "Quita nombres o teléfonos si no hacen falta"] }
          ],
          tryIt: "Tarea final: termina tu hoja de cálculo con ordenar, un filtro, SUM, AVERAGE y un gráfico. Escribe dos frases sencillas que respondan tu pregunta, revisa tu trabajo y compártela con una persona.",
          youCanNow: "convertir datos en un hallazgo claro y revisado, y compartirlo de forma segura.",
          quickCheck: [
            { objective: "O6", q: "¿Qué dos partes tiene un buen hallazgo?", options: ["Un título y un color", "Un gráfico y una fórmula", "Una respuesta y un número que la respalda", "Un nombre y un teléfono"], answer: 2, why: "Una frase da la respuesta y otra da un número que la respalda." },
            { objective: "O6", q: "Tu promedio de visitantes por día dice 4,200, pero el banco de alimentos es pequeño. ¿Qué haces?", options: ["Lo compartes de inmediato", "Borras la hoja", "Lo redondeas a 4,000", "Buscas errores de captura, filas vacías y el rango de la fórmula"], answer: 3, why: "Un número que parece equivocado probablemente lo está, así que primero revisas tu trabajo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar y compartir respuestas",
        questions: [
          { objective: "O4", q: "Toda fórmula de hoja de cálculo empieza con:", options: ["Un signo de pesos", "Un signo de interrogación", "Una letra", "Un signo de igual (=)"], answer: 3, why: "Las fórmulas empiezan con =." },
          { objective: "O4", q: "¿Qué hace =SUM(B2:B10)?", options: ["Suma los números de B2 a B10", "Saca el promedio", "Ordena la columna", "Hace un gráfico"], answer: 0, why: "SUM suma cada número del rango." },
          { objective: "O5", q: "¿Qué gráfico muestra mejor los cambios en el tiempo?", options: ["Gráfico de pastel", "Gráfico de líneas", "Ningún gráfico", "Una foto"], answer: 1, why: "Los gráficos de líneas muestran cómo algo cambia con el tiempo." },
          { objective: "O5", q: "Quieres que la IA te explique un error en una hoja con nombres y teléfonos de clientes. ¿Qué debes hacer?", options: ["Pegar todo", "Pegar solo los teléfonos", "Describir las columnas y pegar la fórmula, no los datos privados", "Rendirte"], answer: 2, why: "Puedes recibir ayuda sin compartir información privada." },
          { objective: "O6", q: "¿Cuál es el mejor hallazgo para compartir?", options: ["\"El sábado tiene más visitas. Tuvimos un promedio de 64 visitantes los sábados y 38 los demás días.\"", "\"Números.\"", "\"Es un gráfico.\"", "\"Mira la hoja.\""], answer: 0, why: "Da la respuesta y un número que la respalda." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a las herramientas y técnicas de análisis de datos",
    questions: [
      { objective: "O1", q: "Analizar datos significa:", options: ["Borrar archivos viejos", "Usar datos para responder una pregunta", "Comprar una computadora", "Escribir rápido"], answer: 1, why: "Analizar es mirar los datos para encontrar una respuesta." },
      { objective: "O1", q: "¿Por qué empezar con una pregunta clara?", options: ["Te dice qué datos juntar", "Hace más grande el archivo", "No hace falta", "Esconde los datos"], answer: 0, why: "La pregunta define los datos que necesitas." },
      { objective: "O1", q: "Para saber qué categoría de gastos cuesta más, necesitas:", options: ["Solo fechas", "Tu contraseña", "Categorías y cantidades", "Números de teléfono"], answer: 2, why: "Las categorías y cantidades te dejan comparar los costos." },
      { objective: "O2", q: "¿Cuál es una hoja de cálculo gratuita?", options: ["Un reloj calculadora", "Un cuaderno de papel", "Un anuncio emergente", "Google Sheets"], answer: 3, why: "Google Sheets es gratis con una cuenta de Google; Excel para la web es gratis con una cuenta de Microsoft." },
      { objective: "O2", q: "En una hoja de cálculo, las columnas se nombran con:", options: ["Letras", "Números", "Colores", "Emojis"], answer: 0, why: "Las columnas son A, B, C; las filas son 1, 2, 3." },
      { objective: "O2", q: "¿Cuáles son datos ordenados?", options: ["Muchos encabezados en una celda", "\"como 20 y algo\" en una celda de números", "Un encabezado por columna y números simples", "Filas vacías entre cada registro"], answer: 2, why: "Los datos ordenados tienen encabezados claros y números simples." },
      { objective: "O3", q: "Ordenar de mayor a menor pone:", options: ["Primero el número más pequeño", "Primero el número más grande", "Las filas en desorden", "Todo en un gráfico"], answer: 1, why: "De mayor a menor empieza con el valor más grande." },
      { objective: "O3", q: "Filtrar una columna:", options: ["Borra filas para siempre", "Envía la hoja por correo", "Cambia los números", "Esconde las filas que no coinciden, sin borrarlas"], answer: 3, why: "Los filtros solo esconden filas hasta que los quitas." },
      { objective: "O3", q: "¿Dónde suelen estar ordenar y filtrar?", options: ["En el menú Datos o la pestaña Datos", "En el botón Imprimir", "En la papelera", "En el nombre del archivo"], answer: 0, why: "Las dos herramientas los tienen en Datos." },
      { objective: "O4", q: "¿Qué saca =AVERAGE(C2:C31)?", options: ["El número más grande", "El promedio de C2 a C31", "El número de filas", "El primer valor"], answer: 1, why: "AVERAGE divide el total entre cuántos números hay." },
      { objective: "O4", q: "En C2:C31, los dos puntos quieren decir:", options: ["Dividir", "Alto", "Desde C2 hasta C31", "Multiplicar"], answer: 2, why: "Los dos puntos forman un rango de celdas." },
      { objective: "O4", q: "Cambias un número de la columna. El total de SUM:", options: ["Se queda igual para siempre", "Desaparece", "Se convierte en texto", "Se actualiza solo"], answer: 3, why: "Las fórmulas se vuelven a calcular cuando cambian los datos." },
      { objective: "O5", q: "¿Qué gráfico compara cantidades, como visitantes por día?", options: ["Gráfico de barras", "Gráfico de pastel de un solo elemento", "Ningún gráfico", "Un mapa"], answer: 0, why: "Los gráficos de barras comparan cantidades lado a lado." },
      { objective: "O5", q: "¿Qué gráfico muestra las partes de un todo, como los gastos por categoría?", options: ["Gráfico de líneas", "Gráfico de pastel", "Una tabla de fechas", "Un encabezado"], answer: 1, why: "Los gráficos de pastel muestran cómo se divide un todo." },
      { objective: "O5", q: "Para hacer un gráfico, primero:", options: ["Borras los encabezados", "Cierras el archivo", "Seleccionas los encabezados y los datos", "Cambias el tipo de letra"], answer: 2, why: "El gráfico necesita saber qué datos mostrar." },
      { objective: "O5", q: "¿Qué NO debes pegar en un asistente de IA?", options: ["Una fórmula", "Un mensaje de error", "Una descripción de tus columnas", "Nombres y teléfonos de las personas que atiendes"], answer: 3, why: "La información personal debe quedarse en privado." },
      { objective: "O6", q: "Un buen hallazgo tiene:", options: ["Una respuesta y un número que la respalda", "Solo un gráfico", "Ningún número", "Tu contraseña"], answer: 0, why: "Dos frases: la respuesta y la prueba." },
      { objective: "O6", q: "Tu total se ve demasiado grande. ¿Qué haces?", options: ["Lo compartes igual", "Revisas números mal escritos, filas vacías y el rango de la fórmula", "Borras el archivo", "Haces más pequeña la letra"], answer: 1, why: "Los totales raros casi siempre esconden un error." },
      { objective: "O6", q: "Al compartir una hoja con datos de personas, debes:", options: ["Publicarla para todos", "Compartirla con todos tus conocidos", "Compartirla solo con quien la necesita y quitar los datos que no hacen falta", "Imprimirla y dejarla por ahí"], answer: 2, why: "Compartir menos protege la información de las personas." },
      { objective: "O2", q: "¿Qué herramienta gratuita te deja usar Excel en un navegador web?", options: ["Excel para la web en office.com", "Una máquina de fax", "Un mensaje de texto", "Una tarjeta de regalo"], answer: 0, why: "Excel para la web es gratis con una cuenta de Microsoft." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      4,
      6,
      9,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Datos limpios",
        objective: "O2",
        notYet: "Faltan encabezados, hay palabras mezcladas con números o hay menos de diez filas.",
        meets: "Un encabezado por columna, un registro por fila y números simples para un mes de datos.",
        exceeds: "El archivo tiene un nombre claro y los datos no necesitan arreglos."
      },
      {
        name: "Ordenar y filtrar",
        objective: "O3",
        notYet: "Los datos no se ordenaron ni se filtraron.",
        meets: "La columna principal de números ordenada de mayor a menor, y un filtro usado y quitado.",
        exceeds: "Puede decir qué mostraron el orden y el filtro."
      },
      {
        name: "SUM y AVERAGE",
        objective: "O4",
        notYet: "Faltan las fórmulas o usan el rango equivocado.",
        meets: "SUM y AVERAGE correctos en la columna de números.",
        exceeds: "Muestra que los dos se actualizan cuando se cambia un número."
      },
      {
        name: "Gráfico",
        objective: "O5",
        notYet: "No hay gráfico, o es del tipo equivocado y sin título.",
        meets: "Un gráfico del tipo correcto con un título claro.",
        exceeds: "El gráfico hace fácil ver la respuesta a la pregunta."
      },
      {
        name: "Hallazgo en dos frases",
        objective: "O6",
        notYet: "No hay respuesta, o no hay un número que la respalde.",
        meets: "Una frase con la respuesta y otra con un número que la respalda.",
        exceeds: "El trabajo se revisó y se compartió solo con quien lo necesita."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que usan una hoja de cálculo para su familia, su trabajo o su grupo de la comunidad dentro de 30 días (encuesta de seguimiento)",
      "Personas que ponen en su currículum que saben usar hojas de cálculo o consiguen un empleo de oficina dentro de 90 días",
      "Los socios de la comunidad reportan que usan las hojas y los gráficos hechos por los participantes en informes o reuniones"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con internet (de la biblioteca o de la casa); una aplicación del teléfono sirve para hojas pequeñas",
      "Una cuenta gratuita de Google o de Microsoft para usar Google Sheets o Excel para la web",
      "Un mes de datos reales o de práctica, como las visitas a un banco de alimentos o los gastos por categoría",
      "Un asistente de IA gratuito para que explique fórmulas y errores",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Ten un conjunto de datos de práctica para quienes no tengan los suyos.",
      "Muestra en vivo en un proyector cómo ordenar, filtrar y usar SUM antes de que lo intenten.",
      "Recuerda que nunca deben pegar nombres, teléfonos ni números de cuenta en la IA; mejor que describan las columnas.",
      "Forma parejas entre quienes son nuevos con la computadora y alguien con más experiencia.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

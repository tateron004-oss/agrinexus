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
  chapters: [
    {
      name: "Capítulo 1: Preparar tus datos",
      lessons: [
        {
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
          youCanNow: "escribir una pregunta clara y decir qué datos se necesitan para responderla."
        },
        {
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
          youCanNow: "empezar una hoja de cálculo gratuita y capturar datos ordenados bajo encabezados claros."
        },
        {
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
          youCanNow: "ordenar y filtrar una hoja de cálculo para encontrar lo que buscas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Preparar tus datos",
        questions: [
          { q: "¿Cuál es la pregunta de datos más clara?", options: ["\"Háblame del banco de alimentos\"", "\"¿Cosas?\"", "\"¿Qué día de la semana recibe más visitantes el banco de alimentos?\"", "\"Datos, por favor\""], answer: 2, why: "Dice exactamente qué encontrar, así que sabes qué datos juntar." },
          { q: "¿Qué es la celda C4?", options: ["El recuadro de la columna C, fila 4", "El cuarto archivo", "La fila C, columna 4", "Un número de teléfono"], answer: 0, why: "Las celdas se nombran con la letra de la columna y luego el número de la fila." },
          { q: "¿Dónde deben ir los encabezados de las columnas?", options: ["Hasta abajo", "En la fila 1, un encabezado por columna", "En otro archivo", "En ningún lado"], answer: 1, why: "Los encabezados en la fila 1 mantienen los datos ordenados y fáciles de ordenar." },
          { q: "Filtras para mostrar solo los sábados. ¿Qué pasa con las demás filas?", options: ["Se borran para siempre", "Se pasan a otro archivo", "Se convierten en un gráfico", "Se esconden y regresan cuando quitas el filtro"], answer: 3, why: "Filtrar esconde filas; no las borra." },
          { q: "Quieres el día con más visitas hasta arriba. ¿Qué haces?", options: ["Ordenas la columna de visitantes de mayor a menor", "Borras las demás filas", "Cambias el nombre del archivo", "Pones el texto en negritas"], answer: 0, why: "Ordenar de mayor a menor pone primero el número más alto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar y compartir respuestas",
      lessons: [
        {
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
          youCanNow: "sacar el total y el promedio de una columna con SUM y AVERAGE."
        },
        {
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
          youCanNow: "hacer un gráfico y usar la IA para entender fórmulas sin compartir datos privados."
        },
        {
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
          youCanNow: "convertir datos en un hallazgo claro y revisado, y compartirlo de forma segura."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar y compartir respuestas",
        questions: [
          { q: "Toda fórmula de hoja de cálculo empieza con:", options: ["Un signo de pesos", "Un signo de interrogación", "Una letra", "Un signo de igual (=)"], answer: 3, why: "Las fórmulas empiezan con =." },
          { q: "¿Qué hace =SUM(B2:B10)?", options: ["Suma los números de B2 a B10", "Saca el promedio", "Ordena la columna", "Hace un gráfico"], answer: 0, why: "SUM suma cada número del rango." },
          { q: "¿Qué gráfico muestra mejor los cambios en el tiempo?", options: ["Gráfico de pastel", "Gráfico de líneas", "Ningún gráfico", "Una foto"], answer: 1, why: "Los gráficos de líneas muestran cómo algo cambia con el tiempo." },
          { q: "Quieres que la IA te explique un error en una hoja con nombres y teléfonos de clientes. ¿Qué debes hacer?", options: ["Pegar todo", "Pegar solo los teléfonos", "Describir las columnas y pegar la fórmula, no los datos privados", "Rendirte"], answer: 2, why: "Puedes recibir ayuda sin compartir información privada." },
          { q: "¿Cuál es el mejor hallazgo para compartir?", options: ["\"El sábado tiene más visitas. Tuvimos un promedio de 64 visitantes los sábados y 38 los demás días.\"", "\"Números.\"", "\"Es un gráfico.\"", "\"Mira la hoja.\""], answer: 0, why: "Da la respuesta y un número que la respalda." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a las herramientas y técnicas de análisis de datos",
    questions: [
      { q: "Analizar datos significa:", options: ["Borrar archivos viejos", "Usar datos para responder una pregunta", "Comprar una computadora", "Escribir rápido"], answer: 1, why: "Analizar es mirar los datos para encontrar una respuesta." },
      { q: "¿Por qué empezar con una pregunta clara?", options: ["Te dice qué datos juntar", "Hace más grande el archivo", "No hace falta", "Esconde los datos"], answer: 0, why: "La pregunta define los datos que necesitas." },
      { q: "Para saber qué categoría de gastos cuesta más, necesitas:", options: ["Solo fechas", "Tu contraseña", "Categorías y cantidades", "Números de teléfono"], answer: 2, why: "Las categorías y cantidades te dejan comparar los costos." },
      { q: "¿Cuál es una hoja de cálculo gratuita?", options: ["Un reloj calculadora", "Un cuaderno de papel", "Un anuncio emergente", "Google Sheets"], answer: 3, why: "Google Sheets es gratis con una cuenta de Google; Excel para la web es gratis con una cuenta de Microsoft." },
      { q: "En una hoja de cálculo, las columnas se nombran con:", options: ["Letras", "Números", "Colores", "Emojis"], answer: 0, why: "Las columnas son A, B, C; las filas son 1, 2, 3." },
      { q: "¿Cuáles son datos ordenados?", options: ["Muchos encabezados en una celda", "\"como 20 y algo\" en una celda de números", "Un encabezado por columna y números simples", "Filas vacías entre cada registro"], answer: 2, why: "Los datos ordenados tienen encabezados claros y números simples." },
      { q: "Ordenar de mayor a menor pone:", options: ["Primero el número más pequeño", "Primero el número más grande", "Las filas en desorden", "Todo en un gráfico"], answer: 1, why: "De mayor a menor empieza con el valor más grande." },
      { q: "Filtrar una columna:", options: ["Borra filas para siempre", "Envía la hoja por correo", "Cambia los números", "Esconde las filas que no coinciden, sin borrarlas"], answer: 3, why: "Los filtros solo esconden filas hasta que los quitas." },
      { q: "¿Dónde suelen estar ordenar y filtrar?", options: ["En el menú Datos o la pestaña Datos", "En el botón Imprimir", "En la papelera", "En el nombre del archivo"], answer: 0, why: "Las dos herramientas los tienen en Datos." },
      { q: "¿Qué saca =AVERAGE(C2:C31)?", options: ["El número más grande", "El promedio de C2 a C31", "El número de filas", "El primer valor"], answer: 1, why: "AVERAGE divide el total entre cuántos números hay." },
      { q: "En C2:C31, los dos puntos quieren decir:", options: ["Dividir", "Alto", "Desde C2 hasta C31", "Multiplicar"], answer: 2, why: "Los dos puntos forman un rango de celdas." },
      { q: "Cambias un número de la columna. El total de SUM:", options: ["Se queda igual para siempre", "Desaparece", "Se convierte en texto", "Se actualiza solo"], answer: 3, why: "Las fórmulas se vuelven a calcular cuando cambian los datos." },
      { q: "¿Qué gráfico compara cantidades, como visitantes por día?", options: ["Gráfico de barras", "Gráfico de pastel de un solo elemento", "Ningún gráfico", "Un mapa"], answer: 0, why: "Los gráficos de barras comparan cantidades lado a lado." },
      { q: "¿Qué gráfico muestra las partes de un todo, como los gastos por categoría?", options: ["Gráfico de líneas", "Gráfico de pastel", "Una tabla de fechas", "Un encabezado"], answer: 1, why: "Los gráficos de pastel muestran cómo se divide un todo." },
      { q: "Para hacer un gráfico, primero:", options: ["Borras los encabezados", "Cierras el archivo", "Seleccionas los encabezados y los datos", "Cambias el tipo de letra"], answer: 2, why: "El gráfico necesita saber qué datos mostrar." },
      { q: "¿Qué NO debes pegar en un asistente de IA?", options: ["Una fórmula", "Un mensaje de error", "Una descripción de tus columnas", "Nombres y teléfonos de las personas que atiendes"], answer: 3, why: "La información personal debe quedarse en privado." },
      { q: "Un buen hallazgo tiene:", options: ["Una respuesta y un número que la respalda", "Solo un gráfico", "Ningún número", "Tu contraseña"], answer: 0, why: "Dos frases: la respuesta y la prueba." },
      { q: "Tu total se ve demasiado grande. ¿Qué haces?", options: ["Lo compartes igual", "Revisas números mal escritos, filas vacías y el rango de la fórmula", "Borras el archivo", "Haces más pequeña la letra"], answer: 1, why: "Los totales raros casi siempre esconden un error." },
      { q: "Al compartir una hoja con datos de personas, debes:", options: ["Publicarla para todos", "Compartirla con todos tus conocidos", "Compartirla solo con quien la necesita y quitar los datos que no hacen falta", "Imprimirla y dejarla por ahí"], answer: 2, why: "Compartir menos protege la información de las personas." },
      { q: "¿Qué herramienta gratuita te deja usar Excel en un navegador web?", options: ["Excel para la web en office.com", "Una máquina de fax", "Un mensaje de texto", "Una tarjeta de regalo"], answer: 0, why: "Excel para la web es gratis con una cuenta de Microsoft." }
    ]
  }
};

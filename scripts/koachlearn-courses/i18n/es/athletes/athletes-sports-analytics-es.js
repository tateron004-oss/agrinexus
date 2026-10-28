"use strict";

// Koach Learn course (Spanish translation of athletes-sports-analytics). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-sports-analytics-es",
  lang: "es",
  translationOf: "athletes-sports-analytics",
  category: "Athletes",
  name: "Fundamentos de análisis de datos deportivos",
  skills: "Hacer una pregunta de análisis, Limpiar una tabla de datos deportivos, Calcular promedios, porcentajes y tasas, Hacer una gráfica clara, Explicar un hallazgo con honestidad",
  outcome: "responder con datos una pregunta real sobre un jugador o un equipo: reunir y limpiar una tabla pequeña, calcular promedios, porcentajes y tasas por partido en Google Sheets, hacer una gráfica clara y explicar el hallazgo y sus límites en tres oraciones.",
  about: [
    "Este curso es para atletas, entrenadores, encargados de equipo y fans que quieren entender los números detrás del deporte y usarlos bien. No hace falta saber más matemáticas que la aritmética básica.",
    "El análisis no se trata de tener la mayor cantidad de números. Se trata de hacer una buena pregunta, usar datos limpios, hacer bien las cuentas sencillas, mostrarlo con claridad y ser honesto sobre lo que no demuestra. Vas a usar Google Sheets y un asistente de IA como ayudante.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Responde con datos una pregunta sobre tu equipo o un equipo favorito: escribe la pregunta, reúne datos de al menos 10 partidos de una hoja de estadísticas o una página oficial, límpialos, calcula al menos un promedio, un porcentaje y una tasa por partido, haz una gráfica y escribe un hallazgo de tres oraciones que incluya un límite de tus datos.",
  chapters: [
    {
      name: "Capítulo 1: Preguntas y datos",
      lessons: [
        {
          title: "Empezar con una buena pregunta",
          minutes: 4,
          goal: "Escribir una pregunta de análisis clara que puedas responder con datos.",
          text: [
            "El análisis empieza con una pregunta, no con una hoja de cálculo. Una buena pregunta es específica y se puede responder: \"¿Nuestro equipo tiene mejor porcentaje de triples en casa o de visitante?\" \"¿Mi saque es más preciso en el primer set o en el tercero?\"",
            "Evita las preguntas demasiado grandes (\"¿Quién es el mejor jugador de la historia?\") o las que los datos no pueden responder (\"¿Quién se esfuerza más?\").",
            "Escribe qué datos necesitas para responderla: qué estadísticas, cuántos partidos y de dónde los vas a sacar."
          ],
          steps: ["Escribe una pregunta sobre tu equipo o un jugador.", "Hazla específica: quién, qué estadística, qué comparación.", "Revisa que los datos puedan responderla.", "Haz la lista de los datos que necesitas y de dónde sacarlos."],
          words: [["Análisis de datos", "usar datos para responder preguntas y tomar mejores decisiones."], ["Datos", "hechos y números, como puntos, intentos y aciertos."]],
          slides: [
            { title: "Primero la pregunta", bullets: ["No la hoja de cálculo", "Específica y que se pueda responder"] },
            { title: "Buena vs. demasiado grande", bullets: ["Buena: % de triples en casa vs. de visitante", "Demasiado grande: \"¿el mejor de la historia?\"", "No son datos: \"¿quién se esfuerza más?\""] },
            { title: "Planea los datos", bullets: ["Qué estadísticas", "Cuántos partidos", "De dónde los vas a sacar"] }
          ],
          tryIt: "Escribe tres preguntas de análisis sobre tu equipo o un equipo favorito. Pregunta a un asistente de IA cuál se puede responder mejor con hojas de estadísticas. Elige una y haz la lista de los datos que necesitas.",
          youCanNow: "escribir una pregunta de análisis específica y planear los datos para responderla."
        },
        {
          title: "Reunir y limpiar los datos",
          minutes: 6,
          goal: "Reunir datos de al menos 10 partidos y limpiarlos para que estén listos para usar.",
          text: [
            "Saca los datos de fuentes confiables: las estadísticas oficiales de tu equipo, los sitios web de la liga o de deportes de la escuela, o las hojas de estadísticas oficiales. Anota de dónde salió cada número.",
            "Ponlos en Google Sheets: una fila por partido, una columna por estadística, con una fila de encabezados (Fecha, Rival, Casa/Visitante, 3PA, 3PM). En baloncesto, 3PA son los intentos de triple y 3PM los triples anotados. Limpiar significa arreglar problemas: errores de escritura, valores que faltan, el mismo equipo escrito de dos formas, números guardados como texto o filas repetidas.",
            "Un asistente de IA te puede ayudar a ver los problemas: pega la tabla y pídele: \"Encuentra errores de escritura, filas repetidas, valores que faltan o nombres que no coinciden. No cambies los números, solo haz la lista de los problemas.\" Luego arréglalos tú, usando la fuente original."
          ],
          steps: ["Busca una fuente oficial para tus estadísticas.", "Arma una fila por partido y una columna por estadística.", "Anota al menos 10 partidos.", "Revisa errores de escritura, filas repetidas, valores que faltan y nombres que no coinciden.", "Arréglalos con la fuente, no con suposiciones."],
          words: [["Hoja de estadísticas", "una tabla con las estadísticas de un partido (box score)."], ["Limpieza de datos", "arreglar errores y huecos en los datos antes de usarlos."], ["Valor que falta", "un espacio en blanco donde debería haber un número."]],
          slides: [
            { title: "Fuentes confiables", bullets: ["Estadísticas oficiales del equipo", "Sitios de la liga o de deportes de la escuela", "Anota la fuente"] },
            { title: "Diseño de la tabla", bullets: ["Una fila por partido", "Una columna por estadística", "Fila de encabezados con nombres claros"] },
            { title: "Límpialos", bullets: ["Errores, filas repetidas, espacios en blanco", "El mismo nombre escrito de dos formas", "La IA hace la lista; tú arreglas con la fuente"] }
          ],
          tryIt: "Anota en Google Sheets datos de al menos 10 partidos de una fuente oficial. Pide a la IA la lista de problemas y luego arregla cada uno con la fuente.",
          youCanNow: "reunir datos deportivos de fuentes confiables y limpiarlos."
        },
        {
          title: "Promedios, porcentajes y tasas",
          minutes: 6,
          goal: "Calcular un promedio, un porcentaje y una tasa por partido en Google Sheets.",
          text: [
            "Promedio: suma los valores y divide entre cuántos hay. En Sheets, =AVERAGE(B2:B11) da el promedio de esas celdas (si tu Sheets está en español, la función se llama =PROMEDIO).",
            "Porcentaje: aciertos divididos entre intentos. Porcentaje de triples = 3PM / 3PA. Primero suma los totales y luego divide: =SUM(E2:E11)/SUM(D2:D11). Promediar el porcentaje de cada partido puede dar una respuesta equivocada cuando los intentos cambian mucho de un partido a otro.",
            "Tasa: una estadística por partido, por minuto o por intento permite comparar con justicia cuando el tiempo de juego es distinto. Puntos por partido = puntos totales / partidos jugados. Un asistente de IA te puede explicar cualquier fórmula; revisa los resultados con una calculadora en una fila."
          ],
          steps: ["Usa =AVERAGE() para un promedio.", "Para un porcentaje, divide el total de aciertos entre el total de intentos.", "Para una tasa, divide un total entre los partidos o los minutos.", "Da formato de porcentaje a los porcentajes.", "Revisa un resultado con una calculadora."],
          words: [["Promedio (media)", "el total dividido entre cuántos valores hay."], ["Porcentaje", "una parte de cada 100, como aciertos de cada intento."], ["Tasa", "una estadística por unidad, como por partido o por minuto."]],
          slides: [
            { title: "Promedio", bullets: ["Total / cuántos hay", "=AVERAGE(B2:B11)"] },
            { title: "Porcentaje", bullets: ["Total de aciertos / total de intentos", "=SUM(aciertos)/SUM(intentos)", "No promedies los porcentajes de cada partido"] },
            { title: "Tasa", bullets: ["Por partido, por minuto, por intento", "Justa cuando el tiempo de juego es distinto", "Revisa una con calculadora"] }
          ],
          tryIt: "En tu hoja, calcula un promedio, un porcentaje (con el método de totales) y una tasa por partido. Revisa uno con una calculadora.",
          youCanNow: "calcular bien promedios, porcentajes y tasas en una hoja de cálculo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Preguntas y datos",
        questions: [
          { q: "¿Cuál es una buena pregunta de análisis?", options: ["\"¿Quién es el mejor de la historia?\"", "\"¿Quién se esfuerza más?\"", "\"¿Tiramos mejor de triple en casa o de visitante?\"", "\"¿El deporte es divertido?\""], answer: 2, why: "Es específica y los datos la pueden responder." },
          { q: "¿De dónde deben salir tus datos?", options: ["De estadísticas oficiales del equipo, la liga o la escuela", "Solo de la memoria", "De un comentario cualquiera", "De suposiciones"], answer: 0, why: "Las fuentes confiables dan respuestas confiables." },
          { q: "Limpiar datos significa:", options: ["Borrar todos los datos", "Hacer los números más grandes", "Cambiar la fuente", "Arreglar errores y huecos antes de usar los datos"], answer: 3, why: "Los datos limpios dan resultados correctos." },
          { q: "La mejor forma de sacar el porcentaje de triples del equipo en 10 partidos es:", options: ["Promediar el porcentaje de cada partido", "Total de aciertos dividido entre total de intentos", "Sumar los porcentajes", "Adivinar"], answer: 1, why: "Los totales manejan bien los partidos con distinta cantidad de intentos." },
          { q: "¿Por qué usar tasas por partido o por minuto?", options: ["Para hacer los números más grandes", "Para comparar con justicia cuando el tiempo de juego es distinto", "Porque está de moda", "Para esconder datos"], answer: 1, why: "Las tasas toman en cuenta las oportunidades." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mostrar y explicar",
      lessons: [
        {
          title: "Hacer una gráfica clara",
          minutes: 5,
          goal: "Hacer una gráfica que responda tu pregunta de un vistazo.",
          text: [
            "Elige la gráfica que va con la pregunta. Comparar grupos (casa vs. visitante): una gráfica de barras. Cambio en el tiempo (puntos partido por partido): una gráfica de líneas. Partes de un todo: normalmente una gráfica de barras es más clara que una de pastel.",
            "Que sea clara: un título que diga el hallazgo (\"Tiramos 6 puntos mejor de triple en casa\"), ejes con nombre, el eje vertical empezando en cero en las gráficas de barras y nada de decoración de más.",
            "En Google Sheets, selecciona tus datos e inserta una gráfica; luego elige el tipo de gráfica y edita los nombres. Puedes preguntar a un asistente de IA qué tipo de gráfica va con tu pregunta."
          ],
          steps: ["Decide: ¿comparas grupos o ves un cambio en el tiempo?", "Elige barras o líneas.", "Inserta la gráfica en Sheets.", "Escribe un título que diga el hallazgo.", "Ponle nombre a los ejes; las barras empiezan en cero."],
          words: [["Gráfica de barras", "una gráfica con barras para comparar grupos."], ["Gráfica de líneas", "una gráfica con una línea para mostrar un cambio en el tiempo."], ["Eje", "la línea al costado o abajo de una gráfica, con sus nombres."]],
          slides: [
            { title: "Elige la gráfica", bullets: ["Comparar grupos: barras", "Cambio en el tiempo: líneas", "Las barras suelen ser más claras que el pastel"] },
            { title: "Que sea clara", bullets: ["El título dice el hallazgo", "Ejes con nombre", "Las barras empiezan en cero"] },
            { title: "En Sheets", bullets: ["Selecciona los datos, inserta la gráfica", "Elige el tipo, edita los nombres"] }
          ],
          tryIt: "Haz una gráfica que responda tu pregunta. Ponle un título que diga el hallazgo y nombre a los dos ejes.",
          youCanNow: "hacer una gráfica clara que responda una pregunta de un vistazo."
        },
        {
          title: "Correlación, tamaño de la muestra y otras trampas",
          minutes: 5,
          goal: "Detectar tres trampas comunes que hacen que los números engañen.",
          text: [
            "Muestras pequeñas: tres partidos no bastan para demostrar mucho. Un jugador que mete 4 de 5 no es seguro un tirador del 80 por ciento. Más partidos te dan más seguridad.",
            "Correlación no es causalidad: si un equipo gana más cuando usa azul, lo más probable es que la camiseta no sea la razón. Que dos cosas se muevan juntas no significa que una cause la otra; busca otras explicaciones, como la fuerza del rival o los partidos en casa.",
            "El contexto importa: las estadísticas no captan todo, como el esfuerzo en defensa, las lesiones o el nivel de los rivales. Un asistente de IA te puede ayudar a hacer la lista de otras explicaciones: \"¿Qué más podría explicar este patrón?\""
          ],
          steps: ["Revisa el tamaño de la muestra.", "Pregunta: ¿algo más podría explicarlo?", "Mira el contexto: rivales, lesiones, casa o visitante.", "Pide a la IA otras explicaciones.", "Escribe qué tan seguro estás."],
          words: [["Tamaño de la muestra", "cuántos partidos o intentos incluyen tus datos."], ["Correlación", "dos cosas que suelen moverse juntas."], ["Causalidad", "cuando una cosa de verdad causa otra."]],
          slides: [
            { title: "Muestras pequeñas", bullets: ["4 de 5 no demuestra un 80%", "Más partidos, más seguridad"] },
            { title: "Correlación no es causalidad", bullets: ["Las camisetas azules no ganan partidos", "Busca otras explicaciones"] },
            { title: "Contexto", bullets: ["Rivales, lesiones, casa o visitante", "El esfuerzo y la defensa no siempre se cuentan"] }
          ],
          tryIt: "Mira tu hallazgo. Escribe el tamaño de la muestra, dos cosas más que podrían explicarlo y qué tan seguro estás (poco, medio, mucho).",
          youCanNow: "detectar muestras pequeñas, confusiones entre correlación y causalidad, y contexto que falta."
        },
        {
          title: "Explicar tu hallazgo",
          minutes: 5,
          goal: "Escribir y compartir un hallazgo de tres oraciones con sus límites.",
          text: [
            "Un buen hallazgo tiene tres oraciones: 1. Lo que encontraste, con un número. 2. Por qué podría importarle al equipo. 3. Un límite de los datos. Ejemplo: \"En 12 partidos tiramos 38% de triple en casa y 31% de visitante. Si esto se mantiene, practicar rutinas para los partidos fuera podría ayudar. Con solo 6 partidos de visitante, esto podría ser casualidad.\"",
            "Pide a un asistente de IA que haga más claras tus oraciones y luego revisa tú los números. Muéstralo junto con la gráfica.",
            "Compártelo con tu entrenador como información, no como una exigencia. Los entrenadores combinan los números con lo que ven. Nunca compartas en público los datos individuales de los jugadores sin permiso."
          ],
          steps: ["Oración 1: lo que encontraste, con un número.", "Oración 2: por qué podría importar.", "Oración 3: un límite.", "Agrega tu gráfica.", "Compártelo con tu entrenador, no en público."],
          words: [["Hallazgo", "lo que muestra tu análisis."], ["Límite", "una razón por la que el hallazgo quizá no sea del todo confiable."]],
          slides: [
            { title: "Tres oraciones", bullets: ["1. Lo que encontraste, con un número", "2. Por qué podría importar", "3. Un límite"] },
            { title: "Púlelo", bullets: ["La IA lo hace más claro", "Tú revisas los números", "Agrega tu gráfica"] },
            { title: "Compártelo bien", bullets: ["Información, no una exigencia", "El entrenador combina datos y lo que ve", "Nada de datos de jugadores en público sin permiso"] }
          ],
          tryIt: "Tarea final: escribe tu hallazgo de tres oraciones con tu gráfica, el tamaño de la muestra y la fuente, y compártelo con tu entrenador o un compañero.",
          youCanNow: "explicar un hallazgo de datos con honestidad, incluidos sus límites."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mostrar y explicar",
        questions: [
          { q: "¿Qué gráfica va con \"puntos partido por partido durante la temporada\"?", options: ["Una gráfica de pastel", "Ninguna gráfica", "Un mapa", "Una gráfica de líneas"], answer: 3, why: "Las gráficas de líneas muestran el cambio en el tiempo." },
          { q: "Un buen título de gráfica:", options: ["Dice el hallazgo", "Dice \"Gráfica 1\"", "Está en blanco", "Es un chiste"], answer: 0, why: "Le dice al lector qué mirar." },
          { q: "Un jugador mete 4 de 5 en un partido. Esto demuestra:", options: ["Que es un tirador del 80%", "Que debe tirar siempre", "No mucho; la muestra es pequeña", "Nada de nada, nunca"], answer: 2, why: "Las muestras pequeñas pueden engañar." },
          { q: "Un equipo gana más con camisetas azules. Lo más probable:", options: ["El azul causa las victorias", "Nunca usar rojo", "Los datos son falsos", "Algo más lo explica"], answer: 3, why: "Correlación no es causalidad." },
          { q: "La oración 3 de un hallazgo es:", options: ["Una exigencia al entrenador", "Un límite de los datos", "Un chiste", "Tu contraseña"], answer: 1, why: "Los hallazgos honestos incluyen límites." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de análisis de datos deportivos",
    questions: [
      { q: "El análisis empieza con:", options: ["Una hoja de cálculo", "Una gráfica", "Una pregunta", "Una suposición"], answer: 2, why: "La pregunta guía todo lo demás." },
      { q: "¿Qué pregunta NO pueden responder bien los datos?", options: ["\"¿Quién se esfuerza más?\"", "\"¿Anotamos más en casa?\"", "\"¿Mi saque es mejor en el set 1?\"", "\"¿Perdemos más balones en el 4.º cuarto?\""], answer: 0, why: "El esfuerzo no se mide en las hojas de estadísticas." },
      { q: "Una hoja de estadísticas (box score) es:", options: ["Una tabla con las estadísticas de un partido", "Una caja de regalo", "Un tipo de gráfica", "La banca del equipo"], answer: 0, why: "Muestra las estadísticas de un partido." },
      { q: "En tu tabla, cada fila debe ser:", options: ["Una temporada", "Un número al azar", "Un partido", "Una gráfica"], answer: 2, why: "Una fila por partido la mantiene ordenada." },
      { q: "\"Lincoln HS\" y \"Lincoln High\" en la misma columna es:", options: ["Está bien", "Nombres que no coinciden y hay que limpiar", "Una gráfica", "Una fórmula"], answer: 1, why: "El mismo equipo escrito de dos formas arruina los conteos." },
      { q: "La IA encuentra un valor que falta. Lo arreglas:", options: ["Adivinando", "Dejando que la IA lo invente", "Borrando la columna", "Revisando la fuente original"], answer: 3, why: "Arregla con la fuente, no con suposiciones." },
      { q: "=AVERAGE(B2:B11) da:", options: ["El total", "El valor más grande", "El promedio de esas celdas", "La gráfica"], answer: 2, why: "AVERAGE calcula la media." },
      { q: "El porcentaje de triples es igual a:", options: ["3PA dividido entre 3PM", "3PM más 3PA", "Puntos divididos entre partidos", "3PM dividido entre 3PA"], answer: 3, why: "Aciertos entre intentos." },
      { q: "¿Por qué no promediar el porcentaje de cada partido?", options: ["Los partidos con distinta cantidad de intentos pesan mal", "Es ilegal", "Siempre es correcto", "Sheets no puede hacerlo"], answer: 0, why: "Usa totales para un porcentaje real." },
      { q: "Los puntos por partido son una:", options: ["Porcentaje", "Tasa", "Gráfica", "Hoja de estadísticas"], answer: 1, why: "Es una estadística por partido." },
      { q: "Revisa una fórmula:", options: ["Confiando en ella", "Borrándola", "Haciendo una fila con calculadora", "Preguntándole a un fan"], answer: 2, why: "Una revisión a mano encuentra errores." },
      { q: "Para comparar casa y visitante, usa:", options: ["Una gráfica de barras", "Solo una gráfica de líneas en el tiempo", "Ninguna gráfica", "Una foto"], answer: 0, why: "Las barras comparan grupos." },
      { q: "En las gráficas de barras, el eje vertical normalmente debe empezar en:", options: ["El valor más pequeño", "100", "Cualquier lado", "Cero"], answer: 3, why: "Si no, las diferencias parecen más grandes de lo que son." },
      { q: "Normalmente es más clara que una gráfica de pastel:", options: ["Un pastel en 3D", "Una gráfica de barras", "Una nube de palabras", "Una página en blanco"], answer: 1, why: "Las barras son más fáciles de comparar." },
      { q: "Tamaño de la muestra significa:", options: ["Tu talla de zapato", "Cuántos partidos o intentos hay en tus datos", "El tamaño de la gráfica", "El tamaño del equipo"], answer: 1, why: "Más datos dan más seguridad." },
      { q: "Correlación significa:", options: ["Que una causa la otra", "Un tipo de gráfica", "Un paso de limpieza", "Que dos cosas suelen moverse juntas"], answer: 3, why: "Moverse juntas no es causar." },
      { q: "¿Qué contexto pueden pasar por alto las estadísticas?", options: ["La fuerza del rival y las lesiones", "Los puntos", "Los rebotes", "El marcador final"], answer: 0, why: "El contexto explica los números." },
      { q: "Un buen hallazgo incluye:", options: ["Solo opiniones", "Todas las estadísticas", "Un número, por qué importa y un límite", "Ningún número"], answer: 2, why: "Ese es el formato de tres oraciones." },
      { q: "Compartes un hallazgo con tu entrenador como:", options: ["Una orden", "Una publicación en redes", "Un secreto", "Información, no una exigencia"], answer: 3, why: "Los entrenadores combinan los datos con lo que ven." },
      { q: "Los datos individuales de los jugadores se deben compartir en público:", options: ["Siempre", "Solo con permiso", "Con los equipos rivales", "En comentarios"], answer: 1, why: "Los datos de los jugadores son personales." }
    ]
  }
};

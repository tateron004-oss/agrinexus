"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-donor-analytics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-donor-analytics-es",
  lang: "es",
  translationOf: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "Análisis de donantes con IA",
  skills: "Preparar una hoja de cálculo de donantes segura, Medir la retención y el donativo promedio, Agrupar donantes en segmentos, Usar la IA para explicar números, Convertir los hallazgos en un plan de recaudación",
  outcome: "tomar una hoja de cálculo de donantes sin nombres, calcular tu tasa de retención, tu donativo promedio y tus grupos de donantes, usar un asistente de IA para explicar qué significan los números y escribir un plan de una página para tu próximo llamado a donar.",
  about: [
    "Este curso es para personal, encargados de desarrollo, miembros de juntas directivas y voluntarios de organizaciones sin fines de lucro y comunidades de fe que llevan una lista de donantes y quieren recaudar más entendiéndola.",
    "Vas a aprender unos cuantos números sencillos sobre donantes, cómo calcularlos en una hoja de cálculo como Google Sheets o Microsoft Excel, cómo usar la IA para explicarlos y hacer gráficas sin compartir información privada de nadie, y cómo convertir lo que encuentras en acciones.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz una copia segura de tu lista de donantes (o de la lista de práctica de la Lección 1) con los nombres y los datos de contacto cambiados por identificadores de donante. Calcula tu tasa de retención y tu donativo promedio, separa a los donantes en al menos tres grupos, pide a un asistente de IA que explique los resultados y sugiera una acción por grupo, y escribe un plan de llamado de una página que revises tú.",
  chapters: [
    {
      name: "Capítulo 1: Conoce los números de tus donantes",
      lessons: [
        {
          title: "Preparar los datos de tus donantes con seguridad",
          minutes: 5,
          goal: "Hacer una copia limpia y anónima de una lista de donantes que sea segura para analizar.",
          text: [
            "El análisis de donantes es mirar tus registros de donaciones para saber quién da, cuánto, cada cuánto y si vuelve a dar. Solo necesitas una hoja de cálculo.",
            "Los nombres, direcciones, correos y montos de los donantes son privados y se deben proteger. Antes de analizar algo con IA, haz una copia y cambia cada nombre por un identificador como D001. Borra direcciones, teléfonos, correos y notas. Quédate solo con el identificador, la fecha del donativo, el monto y, si lo tienes, la campaña o el fondo.",
            "Guarda la lista real en tu sistema de donantes o en un archivo protegido. Trabajas con la copia anónima. Sigue la política de privacidad de tu organización y cualquier promesa que hayas hecho a los donantes."
          ],
          steps: ["Exporta o copia tu lista de donantes a una hoja de cálculo.", "Guarda una copia aparte llamada \"donantes-anonimos\".", "Cambia cada nombre por un identificador como D001, D002.", "Borra direcciones, teléfonos, correos y notas.", "Quédate solo con identificador, fecha del donativo, monto y campaña."],
          words: [["Análisis de donantes", "estudiar los registros de donaciones para saber quién da, cuánto, cada cuánto y si vuelve."], ["Anónimo", "sin nombres ni datos de contacto, para que nadie sepa quién es quién."], ["Hoja de cálculo", "una tabla de filas y columnas, como Google Sheets o Microsoft Excel."]],
          slides: [
            { title: "Qué es el análisis de donantes", bullets: ["Quién da, cuánto, cada cuánto", "Si los donantes vuelven", "Solo necesitas una hoja de cálculo"] },
            { title: "Primero protege a los donantes", bullets: ["Haz una copia aparte", "Cambia los nombres por identificadores como D001", "Borra direcciones, teléfonos, correos, notas"] },
            { title: "Quédate solo con", bullets: ["Identificador del donante", "Fecha y monto del donativo", "Campaña o fondo"] }
          ],
          tryIt: "Haz una lista de práctica en una hoja de cálculo con 12 filas: identificador (D001 a D010, algunos repetidos), fecha del donativo (el año pasado y este año) y monto. O haz una copia anónima de tu lista real siguiendo los pasos.",
          youCanNow: "preparar una lista de donantes segura para analizar, sin nombres ni datos de contacto."
        },
        {
          title: "Tres números que toda organización debe conocer",
          minutes: 6,
          goal: "Calcular el total recaudado, el donativo promedio y la tasa de retención de donantes.",
          text: [
            "El total recaudado es la suma de todos los donativos. El donativo promedio es el total recaudado dividido entre el número de donativos. En una hoja de cálculo, =SUM() suma una columna y =AVERAGE() da el promedio (en una hoja en español pueden llamarse SUMA y PROMEDIO).",
            "La tasa de retención de donantes te dice cuántos donantes del año pasado volvieron a dar este año. Cuenta los donantes que dieron el año pasado. Cuenta cuántos de ellos también dieron este año. Divide el segundo número entre el primero y multiplica por 100. Si 40 donantes dieron el año pasado y 18 de ellos volvieron a dar, la retención es 18 / 40 = 45 por ciento.",
            "La retención importa porque conservar a un donante normalmente cuesta menos que encontrar uno nuevo. Una tasa baja es señal de que hay que agradecer y mantener mejor informados a los donantes."
          ],
          steps: ["Total recaudado: =SUM() de la columna de montos.", "Donativo promedio: =AVERAGE() de la columna de montos.", "Cuenta los donantes distintos que dieron el año pasado.", "Cuenta cuántos de ellos también dieron este año.", "Retención = donantes que repitieron este año / donantes del año pasado x 100."],
          words: [["Donativo promedio", "el total recaudado dividido entre el número de donativos."], ["Tasa de retención", "el porcentaje de donantes del año pasado que volvieron a dar este año."], ["Fórmula", "un cálculo que se escribe en una celda de la hoja de cálculo, empezando con =."]],
          slides: [
            { title: "Total y promedio", bullets: ["Total recaudado: =SUM(montos)", "Donativo promedio: =AVERAGE(montos)"] },
            { title: "Tasa de retención", bullets: ["Donantes del año pasado que volvieron a dar", "Dividido entre todos los donantes del año pasado", "Por 100 = porcentaje"] },
            { title: "Ejemplo", bullets: ["40 donantes el año pasado", "18 de ellos volvieron a dar", "18 / 40 = 45 por ciento de retención"] },
            { title: "Por qué importa", bullets: ["Conservar donantes cuesta menos que encontrar nuevos", "Retención baja = agradecer e informar mejor"] }
          ],
          tryIt: "Con tu lista de práctica o anónima, calcula el total recaudado, el donativo promedio y la tasa de retención. Anota los tres números.",
          youCanNow: "calcular en una hoja de cálculo el total recaudado, el donativo promedio y la tasa de retención de donantes."
        },
        {
          title: "Agrupar donantes en segmentos",
          minutes: 5,
          goal: "Separar a los donantes en grupos sencillos para que cada grupo reciba el mensaje correcto.",
          text: [
            "Un segmento es un grupo de donantes que se parecen en algo que importa. Los distintos grupos necesitan mensajes distintos.",
            "Segmentos sencillos para empezar: Nuevos (primer donativo este año), Repetidos (dieron el año pasado y este año), Inactivos (dieron el año pasado pero no este año) y Mayores (donativos por encima de un monto que tú eliges, como tu 10 por ciento más alto).",
            "Agrega una columna llamada Segmento y llénala para cada identificador de donante. Puedes usar el filtro o el orden de la hoja de cálculo para agruparlos. Cuenta cuántos donantes hay en cada grupo."
          ],
          steps: ["Agrega una columna llamada Segmento.", "Marca cada identificador de donante como Nuevo, Repetido, Inactivo o Mayor.", "Usa ordenar o filtrar para agruparlos.", "Cuenta los donantes de cada grupo."],
          words: [["Segmento", "un grupo de donantes que se parecen en algo que importa, como nuevos o inactivos."], ["Donante inactivo", "alguien que dio antes pero no ha dado este año."]],
          slides: [
            { title: "Qué es un segmento", bullets: ["Un grupo de donantes parecidos", "Cada grupo recibe el mensaje correcto"] },
            { title: "Cuatro segmentos para empezar", bullets: ["Nuevos: primer donativo este año", "Repetidos: dieron el año pasado y este año", "Inactivos: dieron el año pasado, no este año", "Mayores: por encima de un monto que tú eliges"] },
            { title: "En la hoja de cálculo", bullets: ["Agrega una columna de Segmento", "Ordena o filtra para agrupar", "Cuenta cada grupo"] }
          ],
          tryIt: "Agrega una columna de Segmento a tu lista. Marca cada identificador de donante y cuenta cuántos son Nuevos, Repetidos, Inactivos y Mayores.",
          youCanNow: "separar a los donantes en segmentos y contar cada grupo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conoce los números de tus donantes",
        questions: [
          { q: "Antes de analizar datos de donantes con IA, ¿qué debes hacer?", options: ["Pegar la lista completa con nombres", "Mandarla por correo a los voluntarios", "Hacer una copia con los nombres cambiados por identificadores y sin datos de contacto", "Publicarla en internet"], answer: 2, why: "Una copia anónima protege la información privada de los donantes." },
          { q: "40 donantes dieron el año pasado y 18 de ellos volvieron a dar este año. ¿Cuál es la tasa de retención?", options: ["18 por ciento", "40 por ciento", "45 por ciento", "58 por ciento"], answer: 2, why: "18 dividido entre 40 es 0.45, o sea 45 por ciento." },
          { q: "¿Qué fórmula de la hoja de cálculo da el donativo promedio?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() divide el total entre el número de donativos." },
          { q: "Un donante dio el año pasado pero no este año. ¿En qué segmento está?", options: ["Nuevo", "Inactivo", "Repetido", "Mayor"], answer: 1, why: "Los donantes inactivos dieron antes pero no este año." },
          { q: "¿Por qué importa la retención?", options: ["La exige la IA", "Conservar donantes normalmente cuesta menos que encontrar nuevos", "Hace más grande la hoja de cálculo", "Fija la tasa de impuestos"], answer: 1, why: "Una buena retención mantiene constantes los donativos a menor costo." }
        ]
      }
    },
    {
      name: "Capítulo 2: De los números a la acción",
      lessons: [
        {
          title: "Usar la IA para explicar tus números",
          minutes: 5,
          goal: "Pedir a un asistente de IA que explique con palabras sencillas números anónimos de donantes.",
          text: [
            "Puedes pegar tus números de resumen, no tu lista de donantes, en un asistente de IA como ChatGPT, Microsoft Copilot o Google Gemini y preguntar qué significan.",
            "Por ejemplo: \"Dirijo un pequeño banco de alimentos. El año pasado, 40 donantes; este año, 35. Retención de 45 por ciento. Donativo promedio de $85. Segmentos: 17 nuevos, 18 repetidos, 22 inactivos, 4 mayores. Explica con palabras sencillas qué me dicen estos números y qué preguntas debería hacerme después.\"",
            "La IA también puede sugerir fórmulas o tipos de gráfica si te atoras. Revisa tú cualquier cuenta que haga; la IA puede equivocarse en la aritmética e inventar números de referencia que suenan reales."
          ],
          steps: ["Escribe tus números de resumen, no donantes individuales.", "Di qué tipo de organización eres.", "Pide a la IA que explique los números con palabras sencillas.", "Pregunta qué preguntas deberías hacerte después.", "Vuelve a revisar tú cualquier cuenta."],
          words: [["Números de resumen", "totales, promedios y conteos, no información sobre una persona en particular."], ["Número de referencia", "un número típico que se usa para comparar; la IA puede inventarlos, así que revisa la fuente."]],
          slides: [
            { title: "Comparte resúmenes, no personas", bullets: ["Totales, promedios, conteos", "Nunca nombres ni donativos con nombres"] },
            { title: "Una buena instrucción", bullets: ["Qué hace tu organización", "Tus números de resumen", "\"Explica con palabras sencillas; ¿qué debería preguntar después?\""] },
            { title: "Revisa a la IA", bullets: ["Vuelve a hacer tú sus cuentas", "Cuidado con los números de referencia", "Pregunta de dónde sale un número"] }
          ],
          tryIt: "Pega solo tus números de resumen (totales, retención, donativo promedio, conteo por segmento) en un asistente de IA y pídele que los explique y sugiera tres preguntas para hacerte después.",
          youCanNow: "usar un asistente de IA para explicar números de donantes sin compartir información privada de ningún donante."
        },
        {
          title: "Hacer una gráfica sencilla",
          minutes: 4,
          goal: "Hacer una gráfica que muestre con claridad tus segmentos de donantes.",
          text: [
            "Una gráfica ayuda a tu junta y a tu equipo a ver la historia rápido. Una gráfica de barras funciona bien para los segmentos: una barra para Nuevos, Repetidos, Inactivos y Mayores.",
            "En Google Sheets o Excel, pon los nombres de los segmentos en una columna y los conteos en la siguiente. Selecciona las dos columnas y luego usa el menú Insertar para agregar una gráfica y elige una gráfica de barras o de columnas.",
            "Ponle a la gráfica un título claro como \"Nuestros donantes de este año por grupo\". Que sea sencilla: un mensaje por gráfica."
          ],
          steps: ["Haz una tabla pequeña: nombre del segmento y conteo.", "Selecciona las dos columnas.", "Inserta una gráfica y elige barras o columnas.", "Ponle un título claro.", "Revisa que los números coincidan con tu tabla."],
          words: [["Gráfica de barras", "una gráfica que compara cantidades con barras de distintos largos."]],
          slides: [
            { title: "Por qué una gráfica", bullets: ["Tu junta ve la historia rápido", "Un mensaje por gráfica"] },
            { title: "Hazla", bullets: ["Tabla: segmento y conteo", "Selecciona las dos columnas", "Insertar y luego elige una gráfica de barras"] },
            { title: "Termínala", bullets: ["Agrega un título claro", "Revisa que los números coincidan"] }
          ],
          tryIt: "Haz una gráfica de barras de los conteos de tus cuatro segmentos con un título claro.",
          youCanNow: "hacer una gráfica de barras clara de los segmentos de donantes para tu equipo o tu junta."
        },
        {
          title: "Convertir los hallazgos en un plan de llamado",
          minutes: 6,
          goal: "Escribir un plan de una página con una acción para cada segmento de donantes.",
          text: [
            "Los números solo importan si cambian lo que haces. Para cada segmento, elige una acción. Donantes nuevos: una bienvenida cálida y una historia sobre lo que logró su donativo. Donantes repetidos: un agradecimiento y una invitación a donar cada mes. Donantes inactivos: una nota de \"te extrañamos\" con noticias. Donantes mayores: una llamada o visita personal de un líder.",
            "La IA puede escribir el borrador de cada mensaje. Usa espacios en blanco como [nombre del donante] y [resultado del programa], y luego llénalos tú en tu sistema de donantes o con combinación de correspondencia.",
            "Escribe un plan de una página: tus tres números clave, la gráfica, una acción por segmento, quién la hace y para cuándo. Revísalo con tu director antes de mandar cualquier cosa. Sigue las reglas que tenga tu organización sobre el contacto con donantes y las bajas."
          ],
          steps: ["Escribe tus tres números clave arriba.", "Agrega tu gráfica.", "Elige una acción por segmento.", "Pide a la IA el borrador de cada mensaje con espacios en blanco.", "Agrega quién hace qué y para cuándo, y consigue la aprobación."],
          words: [["Llamado", "un pedido a quienes apoyan para que donen."], ["Combinación de correspondencia", "una herramienta que llena cada carta o correo con los datos de una persona de una lista."]],
          slides: [
            { title: "Una acción por segmento", bullets: ["Nuevos: bienvenida más una historia", "Repetidos: gracias más invitación a donar cada mes", "Inactivos: \"te extrañamos\" más noticias", "Mayores: llamada personal de un líder"] },
            { title: "Borradores con IA", bullets: ["Usa [nombre del donante] y [resultado del programa]", "Llena tú los datos reales"] },
            { title: "Tu plan de una página", bullets: ["Tres números clave y la gráfica", "Acción por segmento", "Quién la hace y para cuándo", "Aprobado antes de enviar"] }
          ],
          tryIt: "Tarea final: escribe tu plan de llamado de una página con tus tres números, la gráfica, una acción por segmento y los responsables. Pide a la IA el borrador de la nota de \"te extrañamos\" con espacios en blanco y luego edítala con tus propias palabras.",
          youCanNow: "convertir los números de donantes en un plan de llamado práctico que respeta la privacidad de los donantes."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: De los números a la acción",
        questions: [
          { q: "¿Qué es seguro pegar en un asistente de IA?", options: ["Tu lista completa de donantes", "Los correos de los donantes", "Las direcciones de casa de los donantes", "Números de resumen como la retención y el conteo por segmento"], answer: 3, why: "Los resúmenes no revelan a ninguna persona." },
          { q: "La IA dice que \"la mayoría de los bancos de alimentos conservan el 70 por ciento de sus donantes\". ¿Qué haces?", options: ["Pides la fuente y la revisas antes de usarlo", "Lo pones de inmediato en el informe a la junta", "Supones que es cierto", "Borras tus propios números"], answer: 0, why: "La IA puede inventar números de referencia; revisa la fuente." },
          { q: "¿Qué gráfica funciona bien para comparar el conteo por segmento?", options: ["Un mapa", "Una foto", "Una gráfica de barras", "Un calendario"], answer: 2, why: "Las barras facilitan comparar el tamaño de los grupos." },
          { q: "¿Cuál es una buena acción para los donantes inactivos?", options: ["Quitarlos para siempre", "Pedirles su número de banco", "No mandarles nada", "Una nota de \"te extrañamos\" con noticias"], answer: 3, why: "Unas noticias cálidas los invitan a volver." },
          { q: "Cuando la IA escribe borradores de cartas a donantes, ¿cómo aparecen los nombres?", options: ["Nombres reales escritos en la instrucción", "Nunca hay nombres, ni en la carta final", "Espacios en blanco como [nombre del donante] que se llenan después", "Solo apellidos"], answer: 2, why: "Los espacios en blanco dejan los nombres fuera de la herramienta de IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Análisis de donantes con IA",
    questions: [
      { q: "El análisis de donantes es:", options: ["Vender listas de donantes", "Estudiar los registros de donaciones para saber quién da, cuánto y cada cuánto", "Adivinar quién podría dar", "Un tipo de aplicación de IA"], answer: 1, why: "Usa tus propios registros para guiar la recaudación." },
      { q: "¿Qué pones en lugar de los nombres de los donantes en tu copia de trabajo?", options: ["Identificadores como D001", "Apodos", "Números de teléfono", "Nada"], answer: 0, why: "Los identificadores te dejan analizar sin mostrar quién es quién." },
      { q: "¿Qué columnas debe conservar la copia anónima?", options: ["Dirección de casa y correo", "Teléfono y notas", "Identificador, fecha del donativo, monto y campaña", "Datos bancarios"], answer: 2, why: "Es todo lo que necesitas para los números." },
      { q: "¿Dónde debe quedarse la lista real de donantes?", options: ["En tu sistema de donantes o en un archivo protegido", "En una carpeta pública", "En un chat de IA", "En un grupo de mensajes"], answer: 0, why: "Los registros privados se quedan protegidos." },
      { q: "El total recaudado se encuentra con:", options: ["=TODAY()", "=COUNT() de las fechas", "Una suposición", "=SUM() de los montos"], answer: 3, why: "=SUM() suma todos los donativos." },
      { q: "El donativo promedio es igual a:", options: ["El donativo más grande", "El total recaudado dividido entre el número de donativos", "El número de donantes", "El donativo más pequeño por dos"], answer: 1, why: "Esa es la definición de promedio." },
      { q: "50 donantes dieron el año pasado; 30 de ellos volvieron a dar. La retención es:", options: ["30 por ciento", "50 por ciento", "60 por ciento", "80 por ciento"], answer: 2, why: "30 / 50 = 0.6, o sea 60 por ciento." },
      { q: "Una tasa de retención baja sugiere que debes:", options: ["Dejar de recaudar", "Subir los precios", "Borrar a los donantes viejos", "Agradecer y mantener mejor informados a los donantes"], answer: 3, why: "Un mejor cuidado hace que los donantes vuelvan." },
      { q: "El primer donativo de un donante fue este año. Su segmento es:", options: ["Nuevo", "Inactivo", "Repetido", "Mayor"], answer: 0, why: "Los donantes nuevos dieron por primera vez este año." },
      { q: "Un segmento es:", options: ["Un solo donante", "Un tipo de gráfica", "Un grupo de donantes que se parecen en algo que importa", "Un formulario de impuestos"], answer: 2, why: "Los segmentos te dejan mandar el mensaje correcto a cada grupo." },
      { q: "Para agrupar donantes en una hoja de cálculo, puedes:", options: ["Imprimir y recortar el papel", "Pedir a los donantes que se ordenen solos", "Borrar filas", "Agregar una columna de Segmento y ordenar o filtrar"], answer: 3, why: "Ordenar y filtrar agrupa las filas por segmento." },
      { q: "¿Qué instrucción es segura y útil?", options: ["\"Aquí están los nombres y donativos de todos nuestros donantes...\"", "\"Aquí está el acceso a nuestro banco.\"", "\"Retención 45 por ciento, donativo promedio $85, 22 inactivos. Explícalo con palabras sencillas.\"", "\"Adivina quiénes son nuestros donantes.\""], answer: 2, why: "Solo comparte números de resumen y hace una pregunta clara." },
      { q: "La IA hizo cuentas con tus números. Debes:", options: ["Confiar del todo", "Volver a revisarlas tú", "Mandarlas a la junta sin revisar", "No hacer caso a ningún número"], answer: 1, why: "La IA puede equivocarse en la aritmética." },
      { q: "Un número de referencia de la IA sin fuente debe:", options: ["Revisarse antes de usarlo", "Usarse en tu informe de subvención", "Publicarse en tu sitio web", "Compartirse con los donantes"], answer: 0, why: "La IA puede inventar números que suenan reales." },
      { q: "Para hacer una gráfica en Sheets o Excel, primero:", options: ["Cierras el archivo", "Escribes una contraseña", "Seleccionas la tabla de nombres de segmentos y conteos", "Borras los datos"], answer: 2, why: "La gráfica se hace con los datos seleccionados." },
      { q: "Un buen título de gráfica es:", options: ["\"Nuestros donantes de este año por grupo\"", "\"Gráfica 1\"", "Sin título", "\"Datos\""], answer: 0, why: "Un título claro le dice al lector el mensaje." },
      { q: "Una buena acción para los donantes repetidos es:", options: ["No hacerles caso", "Pedirles sus contraseñas", "Quitarlos de la lista", "Un agradecimiento y una invitación a donar cada mes"], answer: 3, why: "Los donantes fieles son los mejores candidatos para donar cada mes." },
      { q: "Para los donantes mayores, una buena acción es:", options: ["Solo una carta de formato", "Una llamada o visita personal de un líder", "Ningún contacto", "Un mensaje pidiendo números de tarjeta"], answer: 1, why: "El contacto personal honra los compromisos más grandes." },
      { q: "Tu plan de una página debe incluir:", options: ["La dirección de cada donante", "Números clave, gráfica, acciones, responsables y fechas", "Solo la gráfica", "Solo las opiniones de la IA"], answer: 1, why: "Un plan dice qué se hará, quién y cuándo." },
      { q: "Antes de mandar cualquier llamado, debes:", options: ["Mandarlo a todos de una vez sin revisar", "Dejar que la IA lo mande", "No revisarlo", "Conseguir la aprobación y seguir tus reglas de contacto con donantes y de bajas"], answer: 3, why: "La aprobación y el respeto a las bajas protegen la confianza de los donantes." }
    ]
  }
};

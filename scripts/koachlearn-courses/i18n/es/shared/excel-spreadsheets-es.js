"use strict";

// Koach Learn course (Spanish translation of shared/excel-spreadsheets.js). See scripts/koachlearn-courses/README.md, "Translations".
// Function names are given in English with the Spanish Excel name, e.g. SUM (en Excel en español: SUMA). Menu names are the Spanish versions of Excel and Google Sheets.

module.exports = {
  id: "excel-spreadsheets-es",
  lang: "es",
  translationOf: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel y hojas de cálculo para el trabajo",
  skills: "Escribir datos y darles formato, Sacar totales y promedios con SUM y AVERAGE, Tomar decisiones con IF, Ordenar y filtrar, Hacer un gráfico sencillo, Inmovilizar los encabezados y compartir una hoja",
  outcome: "crear una hoja de cálculo de trabajo limpia en Excel o Google Sheets: escribir datos y darles formato, sacar totales y promedios con fórmulas, etiquetar filas con IF (SI), ordenar y filtrar, hacer un gráfico sencillo, inmovilizar la fila de encabezados y compartirla de forma segura con un compañero.",
  about: [
    "Las hojas de cálculo se usan en casi todos los trabajos: una tienda lleva sus ventas, una organización sin fines de lucro lleva sus donaciones y las horas de sus voluntarios, un jefe de cuadrilla lleva los turnos y una familia lleva su presupuesto. Saber usarlas bien es una habilidad que piden los empleadores.",
    "Este curso funciona en Microsoft Excel (en una computadora, o gratis en la web en office.com con una cuenta de Microsoft) y en Google Sheets (gratis con una cuenta de Google en sheets.google.com). Las fórmulas son las mismas en los dos. Cuando los menús tienen nombres distintos, la lección te da los dos o describe la acción.",
    "Los nombres de las funciones se dan en inglés. Si tu Excel está en español, la función tiene un nombre traducido, por ejemplo SUM (en Excel en español: SUMA); la lección te da los dos. Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\" en una hoja de cálculo real. Vas a armar una sola hoja de práctica durante todo el curso. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Crea una hoja de \"Ventas de la semana\" (u \"Horas de voluntariado\" u \"Horas por turno\") con al menos 8 filas: encabezados en negrita, el dinero en formato de moneda, un total con SUM (SUMA) y un promedio con AVERAGE (PROMEDIO), una columna con IF (SI) que etiquete cada fila (por ejemplo \"Meta cumplida\" o \"Debajo de la meta\"), los datos ordenados de mayor a menor, un filtro en la fila de encabezados, un gráfico de columnas, la fila superior inmovilizada y el archivo compartido con una persona como lector.",
  chapters: [
    {
      name: "Capítulo 1: Armar tu hoja",
      lessons: [
        {
          title: "Celdas, filas, columnas y cómo escribir datos",
          minutes: 5,
          goal: "Abrir una hoja de cálculo nueva y escribir una tabla pequeña de datos con encabezados.",
          text: [
            "Una hoja de cálculo es una cuadrícula. Las columnas van de arriba abajo y tienen letras (A, B, C). Las filas van de lado a lado y tienen números (1, 2, 3). Cada cuadro es una celda, y su nombre es su columna y su fila: la celda de arriba a la izquierda es A1. Un archivo puede tener varias hojas, que se ven como pestañas en la parte de abajo.",
            "Para escribir datos, haz clic en una celda, escribe y presiona Enter para bajar o Tab para ir a la derecha. Pon los encabezados en la fila 1, como Fecha, Artículo, Cantidad y Precio, y un registro en cada fila de abajo. Usa un solo tipo de dato por columna: solo fechas en la columna Fecha, solo números en Precio.",
            "Para corregir una celda, haz clic en ella y escribe encima, o haz doble clic para editar una parte. Deshacer (Ctrl+Z en Windows, Cmd+Z en una Mac) quita tu último cambio. Excel en la web y Google Sheets guardan mientras trabajas; en Excel de escritorio, guarda seguido.",
            "Para empezar: en Google Sheets, entra a sheets.google.com y elige una hoja de cálculo en blanco. En Excel, abre Excel (o Excel en la web en office.com) y elige un libro en blanco."
          ],
          steps: ["Abre una hoja de cálculo en blanco en Google Sheets o Excel.", "Haz clic en la celda A1 y escribe tu primer encabezado. Presiona Tab para ir a la derecha.", "Escribe los demás encabezados en la fila 1.", "Escribe un registro por fila empezando en la fila 2.", "Ponle al archivo un nombre claro, como \"Ventas de la semana - Marzo\"."],
          words: [["Celda", "un cuadro de la cuadrícula, que se nombra con la letra de la columna y el número de la fila, como B3."], ["Encabezado", "la etiqueta en la parte de arriba de una columna que dice qué hay en ella."], ["Libro", "un archivo de Excel; puede tener varias hojas."]],
          slides: [
            { title: "La cuadrícula", bullets: ["Las columnas tienen letras; las filas tienen números", "Una celda se llama, por ejemplo, A1 o B3", "Las pestañas de abajo son hojas separadas"] },
            { title: "Escribir datos", bullets: ["Clic, escribe y luego Enter (abajo) o Tab (a la derecha)", "Encabezados en la fila 1", "Un registro por fila, un tipo de dato por columna"] },
            { title: "Corregir y guardar", bullets: ["Escribe encima de una celda o haz doble clic para editar", "Deshacer: Ctrl+Z (Windows) o Cmd+Z (Mac)", "Las versiones web guardan solas"] }
          ],
          tryIt: "Abre una hoja de cálculo en blanco. En la fila 1 escribe los encabezados Día, Artículo, Cantidad, Precio. Escribe 8 filas de ventas de práctica (por ejemplo Lun, Café, 12, 3.50). Ponle al archivo el nombre \"Ventas de práctica\".",
          youCanNow: "abrir una hoja de cálculo, encontrar cualquier celda por su nombre y escribir una tabla limpia con encabezados."
        },
        {
          title: "Dar formato para que se lea fácil",
          minutes: 4,
          goal: "Dar formato a los encabezados, al dinero y al ancho de las columnas para que la hoja sea clara.",
          text: [
            "El formato cambia cómo se ven los datos, no lo que son. Un buen formato hace que una hoja se entienda de un vistazo.",
            "Pon los encabezados en negrita: selecciona la fila 1 y haz clic en el botón de negrita de la barra de herramientas (en Excel en español es una N; en inglés es una B), o usa el atajo de teclado (en Excel en español suele ser Ctrl+N; en inglés y en Google Sheets, Ctrl+B; en una Mac, Cmd+B). También puedes ponerle un color de relleno a la fila de encabezados.",
            "Muestra el dinero como moneda: selecciona la columna Precio, abre el menú de formato de número y elige Moneda. En Excel está en la pestaña Inicio; en Google Sheets está en Formato, luego Número, y también hay un botón de $ en la barra de herramientas.",
            "Ajusta las columnas: haz doble clic en la línea entre dos letras de columna, en la parte de arriba, y la columna de la izquierda cambia de ancho para que quepa su dato más largo. Esto funciona en Excel y en Google Sheets."
          ],
          steps: ["Selecciona la fila 1 haciendo clic en el número 1, al lado de la fila.", "Haz clic en el botón de negrita o usa el atajo de teclado.", "Selecciona la columna Precio haciendo clic en su letra.", "Elige Moneda en el menú de formato de número (Excel: pestaña Inicio; Sheets: Formato > Número, o el botón de $).", "Haz doble clic en el borde entre las letras de columna para ajustar el ancho."],
          words: [["Formato", "cambiar cómo se ven los datos (negrita, color, moneda) sin cambiar el valor."], ["Seleccionar", "hacer clic o arrastrar sobre las celdas para elegirlas antes de hacer algo con ellas."]],
          slides: [
            { title: "El formato cambia el aspecto", bullets: ["No el valor que hay dentro", "Hace que la hoja se lea fácil"] },
            { title: "Encabezados en negrita", bullets: ["Selecciona la fila 1", "Botón de negrita (N en Excel en español, B en inglés)", "Agrega un color de relleno si quieres"] },
            { title: "El dinero como moneda", bullets: ["Selecciona la columna", "Excel: menú de formato de número en la pestaña Inicio", "Sheets: Formato > Número, o el botón de $"] },
            { title: "Ajusta las columnas", bullets: ["Doble clic en la línea entre las letras de columna", "Funciona en Excel y en Google Sheets"] }
          ],
          tryIt: "En tu hoja Ventas de práctica, pon la fila 1 en negrita con un color de relleno claro, muestra la columna Precio como moneda y ajusta el ancho de todas las columnas.",
          youCanNow: "dar formato a los encabezados, al dinero y al ancho de las columnas para que una hoja se vea clara y profesional."
        },
        {
          title: "Totales y promedios con SUM y AVERAGE",
          minutes: 5,
          goal: "Escribir fórmulas con SUM y AVERAGE y copiar una fórmula hacia abajo en una columna.",
          text: [
            "Una fórmula siempre empieza con un signo igual (=). Puede hacer cuentas con los nombres de las celdas: =C2*D2 multiplica la cantidad de C2 por el precio de D2. Si cambias C2, la respuesta se actualiza sola.",
            "SUM (en Excel en español: SUMA) suma un rango de celdas. Un rango se escribe así: primera celda, dos puntos, última celda: =SUM(E2:E9) suma de E2 a E9. AVERAGE (en Excel en español: PROMEDIO) saca el promedio: =AVERAGE(E2:E9). Las dos funcionan igual en Excel y en Google Sheets. En un Excel en español escribes =SUMA(E2:E9) y =PROMEDIO(E2:E9).",
            "Para copiar una fórmula hacia abajo en una columna, haz clic en la celda con la fórmula y arrastra hacia abajo el cuadrito de la esquina inferior derecha (el controlador de relleno). Los nombres de las celdas cambian en cada fila: E2 se vuelve E3, E4 y así.",
            "Revisa tu trabajo: si una fórmula muestra un error como #NAME? (en español: #¿NOMBRE?) o #VALUE! (en español: #¡VALOR!), busca un error al escribir el nombre de la función o texto en una columna de números."
          ],
          steps: ["En E1 escribe el encabezado Total.", "En E2 escribe =C2*D2 y presiona Enter.", "Arrastra el controlador de relleno de E2 hasta la última fila.", "Debajo de la última fila, escribe =SUM(E2:E9) (en español: =SUMA(E2:E9)) para el total general.", "Debajo, escribe =AVERAGE(E2:E9) (en español: =PROMEDIO(E2:E9)) para la venta promedio."],
          words: [["Fórmula", "un cálculo en una celda que empieza con = y se actualiza cuando cambian los datos."], ["Rango", "un bloque de celdas que se escribe primera:última, como E2:E9."], ["Controlador de relleno", "el cuadrito en la esquina inferior derecha de una celda seleccionada que arrastras para copiar."]],
          slides: [
            { title: "Las fórmulas empiezan con =", bullets: ["=C2*D2 multiplica dos celdas", "Cambia los datos y la respuesta se actualiza"] },
            { title: "SUM y AVERAGE", bullets: ["=SUM(E2:E9) suma un rango (en español: SUMA)", "=AVERAGE(E2:E9) saca el promedio (en español: PROMEDIO)", "Igual en Excel y en Google Sheets"] },
            { title: "Copiar una fórmula hacia abajo", bullets: ["Arrastra el controlador de relleno de la esquina de la celda", "Los nombres de las celdas se ajustan en cada fila"] },
            { title: "Errores", bullets: ["#NAME? (#¿NOMBRE?): revisa cómo está escrito", "#VALUE! (#¡VALOR!): hay texto donde debería ir un número"] }
          ],
          tryIt: "En tu hoja, agrega una columna Total con =C2*D2 copiada hacia abajo, y luego agrega debajo de la columna un total general con SUM (SUMA) y la venta promedio con AVERAGE (PROMEDIO). Cambia una cantidad y mira cómo se actualizan los totales.",
          youCanNow: "escribir fórmulas con SUM y AVERAGE (SUMA y PROMEDIO), multiplicar celdas y copiar una fórmula hacia abajo en una columna."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Armar tu hoja",
        questions: [
          { q: "¿Cómo se llama la celda de la columna C, fila 4?", options: ["4C", "C4", "Fila C", "Celda 34"], answer: 1, why: "Una celda se nombra con la letra de su columna y luego el número de su fila." },
          { q: "¿Dónde deben ir tus encabezados?", options: ["En la fila 1, uno por columna", "Abajo de todo", "En celdas al azar", "En otro archivo"], answer: 0, why: "Los encabezados en la fila 1 dan nombre a cada columna de datos de abajo." },
          { q: "Quieres que los precios se vean con el signo de pesos o de dólar. ¿Qué haces?", options: ["Escribir $ antes de cada número", "Poner la columna en negrita", "Borrar los precios", "Elegir Moneda en el menú de formato de número"], answer: 3, why: "El formato de moneda agrega el símbolo y los decimales en cada celda." },
          { q: "¿Qué fórmula suma las celdas de B2 a B10?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Las fórmulas empiezan con = y un rango usa dos puntos. En Excel en español es =SUMA(B2:B10)." },
          { q: "¿Qué pasa cuando arrastras hacia abajo el controlador de relleno desde una celda con =C2*D2?", options: ["La fórmula se copia y se ajusta a cada fila", "La celda se borra", "Todas las filas quedan exactamente con =C2*D2", "La hoja se comparte"], answer: 0, why: "Los nombres de las celdas cambian fila por fila: C3*D3, C4*D4 y así." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabajar con tus datos",
      lessons: [
        {
          title: "Tomar decisiones con IF",
          minutes: 5,
          goal: "Escribir una fórmula con IF que etiquete cada fila según una regla.",
          text: [
            "IF (en Excel en español: SI) revisa una condición y muestra un resultado si es verdadera y otro si es falsa. El modelo es =IF(prueba, valor si es verdadero, valor si es falso).",
            "Ejemplos: =IF(E2>=50,\"Meta cumplida\",\"Debajo de la meta\") etiqueta una venta. =IF(C2>40,\"Horas extra\",\"Normal\") etiqueta una semana de horas. =IF(D2=\"\",\"Falta\",\"OK\") marca una celda vacía. Las respuestas de texto van entre comillas dobles; los números no.",
            "Signos de comparación: > mayor que, < menor que, >= mayor o igual que, <= menor o igual que, = igual a, <> distinto de.",
            "IF funciona igual en Excel y en Google Sheets. En un Excel en español escribes SI en lugar de IF. Si la configuración regional de tu hoja usa coma para los decimales (como en muchos países de habla hispana), el separador es punto y coma (;) en vez de coma: =SI(E2>=50;\"Meta cumplida\";\"Debajo de la meta\"). La aplicación te muestra el modelo mientras escribes."
          ],
          steps: ["Agrega un encabezado, como Estado, en la siguiente columna vacía.", "En la fila 2 escribe =IF( (en español: =SI().", "Escribe la prueba, como E2>=50, y luego una coma (o punto y coma).", "Escribe el resultado verdadero entre comillas, una coma, el resultado falso entre comillas y ).", "Presiona Enter y copia la fórmula hacia abajo con el controlador de relleno."],
          words: [["IF (SI)", "una función que muestra un resultado cuando una prueba es verdadera y otro cuando es falsa."], ["Condición", "la prueba de una fórmula con IF, como E2>=50."]],
          slides: [
            { title: "El modelo de IF (SI)", bullets: ["=IF(prueba, si es verdadero, si es falso)", "Igual en Excel y en Google Sheets", "Excel en español: =SI(...), a veces con punto y coma"] },
            { title: "Ejemplos", bullets: ["=IF(E2>=50,\"Meta cumplida\",\"Debajo de la meta\")", "=IF(C2>40,\"Horas extra\",\"Normal\")", "Texto entre comillas dobles; números sin comillas"] },
            { title: "Signos de comparación", bullets: ["> mayor, < menor", ">= por lo menos, <= como máximo", "= igual, <> distinto"] }
          ],
          tryIt: "Agrega a tu hoja una columna Estado con =IF(E2>=50,\"Meta cumplida\",\"Debajo de la meta\") (en Excel en español: =SI(...)) y cópiala hacia abajo. Cambia un total para que pase de 50 y mira cómo cambia la etiqueta.",
          youCanNow: "escribir una fórmula con IF (SI) que etiquete filas automáticamente según una regla."
        },
        {
          title: "Ordenar, filtrar e inmovilizar la fila de encabezados",
          minutes: 5,
          goal: "Ordenar tus datos, filtrarlos para ver solo algunas filas e inmovilizar la fila de encabezados.",
          text: [
            "Ordenar pone las filas en orden, por ejemplo la venta más alta primero o los nombres de la A a la Z. Filtrar oculta las filas que no necesitas ahora, por ejemplo para ver solo las filas \"Debajo de la meta\". Ninguna de las dos cosas borra datos.",
            "Excel: haz clic en cualquier celda de tu tabla, ve a la pestaña Datos y elige Ordenar para escoger una columna y un orden, o elige Filtro para agregar flechas desplegables a la fila de encabezados. Google Sheets: selecciona tus datos, abre el menú Datos y elige Ordenar intervalo (marca que los datos tienen una fila de encabezado), o elige Crear un filtro para agregar las flechas. Haz clic en la flecha de un encabezado para ordenar o para marcar solo los valores que quieres ver.",
            "Ordena siempre toda la tabla, nunca una sola columna, o las filas se revuelven. En Excel, si seleccionas una celda dentro de la tabla, o en Sheets el rango completo, las filas se mantienen juntas.",
            "Inmovilizar mantiene la fila de encabezados en la pantalla cuando bajas por una lista larga. Excel: pestaña Vista, Inmovilizar paneles y luego Inmovilizar fila superior. Google Sheets: menú Ver, Inmovilizar y luego 1 fila."
          ],
          steps: ["Haz clic dentro de tu tabla (Excel) o selecciona toda la tabla (Sheets).", "Ordenar: Excel, pestaña Datos > Ordenar; Sheets, Datos > Ordenar intervalo, con fila de encabezado.", "Filtrar: Excel, pestaña Datos > Filtro; Sheets, Datos > Crear un filtro.", "Usa la flecha de un encabezado para ver solo las filas que quieres.", "Inmovilizar: Excel, Vista > Inmovilizar paneles > Inmovilizar fila superior; Sheets, Ver > Inmovilizar > 1 fila."],
          words: [["Ordenar", "poner las filas en orden según una columna, manteniendo junta cada fila."], ["Filtrar", "ocultar las filas que no coinciden con lo que eliges, sin borrarlas."], ["Inmovilizar", "mantener filas o columnas en la pantalla mientras te desplazas."]],
          slides: [
            { title: "Ordenar y filtrar", bullets: ["Ordenar: poner las filas en orden", "Filtrar: ver solo las filas que quieres", "Ninguna de las dos borra datos"] },
            { title: "En Excel", bullets: ["Pestaña Datos > Ordenar", "Pestaña Datos > Filtro agrega flechas a los encabezados", "Vista > Inmovilizar paneles > Inmovilizar fila superior"] },
            { title: "En Google Sheets", bullets: ["Datos > Ordenar intervalo (los datos tienen encabezado)", "Datos > Crear un filtro", "Ver > Inmovilizar > 1 fila"] },
            { title: "Mantén juntas las filas", bullets: ["Ordena toda la tabla, nunca una sola columna"] }
          ],
          tryIt: "Ordena tu hoja por Total de mayor a menor. Agrega un filtro y muestra solo las filas \"Debajo de la meta\"; luego quita el filtro. Inmoviliza la fila superior y baja por la hoja para comprobar que los encabezados se quedan.",
          youCanNow: "ordenar y filtrar datos de forma segura e inmovilizar la fila de encabezados."
        },
        {
          title: "Hacer un gráfico y compartir tu hoja",
          minutes: 5,
          goal: "Hacer un gráfico de columnas sencillo y compartir la hoja con el permiso correcto.",
          text: [
            "Un gráfico convierte los números en una imagen. Un gráfico de columnas sirve para comparar cantidades, como las ventas por día o las horas de voluntariado por persona.",
            "Selecciona dos columnas: las etiquetas (como Día) y los números (como Total), con sus encabezados. Para seleccionar dos columnas que no están juntas, mantén presionada la tecla Ctrl (Cmd en una Mac) mientras seleccionas la segunda. Excel: ve a la pestaña Insertar y elige un gráfico de columnas (o Gráficos recomendados). Google Sheets: abre el menú Insertar y elige Gráfico; se abre el editor de gráficos a un lado de la pantalla, donde puedes elegir Gráfico de columnas. Haz clic en el título del gráfico para cambiarle el nombre.",
            "Para compartir: en Google Sheets, haz clic en el botón Compartir arriba a la derecha, escribe el correo de la persona y elige Lector, Comentador o Editor. En Excel, el archivo tiene que estar guardado en OneDrive o SharePoint; luego haz clic en Compartir, agrega el correo y elige si puede editar o solo ver.",
            "Comparte de forma segura: da el acceso más bajo que la persona necesite (solo lectura si solo tiene que leerlo), y nunca pongas contraseñas, números de Seguro Social ni datos del banco en una hoja compartida."
          ],
          steps: ["Selecciona la columna de etiquetas y la columna de números, con encabezados.", "Excel: pestaña Insertar > un gráfico de columnas. Sheets: Insertar > Gráfico, y luego elige Gráfico de columnas.", "Cámbiale el nombre al título del gráfico.", "Haz clic en Compartir y agrega el correo de la persona.", "Elige solo lectura a menos que necesite editar, y luego envía."],
          words: [["Gráfico de columnas", "un gráfico con barras paradas, bueno para comparar cantidades."], ["Lector", "alguien que puede ver un archivo compartido pero no cambiarlo."], ["Editor", "alguien que puede cambiar un archivo compartido."]],
          slides: [
            { title: "Elige el gráfico correcto", bullets: ["Gráfico de columnas: comparar cantidades", "Ejemplo: ventas por día, horas por persona"] },
            { title: "Haz el gráfico", bullets: ["Selecciona etiquetas y números con encabezados", "Excel: pestaña Insertar > gráfico de columnas", "Sheets: Insertar > Gráfico > Gráfico de columnas"] },
            { title: "Compártelo", bullets: ["Haz clic en Compartir y agrega un correo", "Elige ver o editar", "Los archivos de Excel deben estar en OneDrive o SharePoint"] },
            { title: "Comparte de forma segura", bullets: ["Da el acceso más bajo que haga falta", "Sin contraseñas, identificaciones ni números de banco en hojas compartidas"] }
          ],
          tryIt: "Tarea final: termina tu hoja con al menos 8 filas, encabezados en negrita, moneda, SUM y AVERAGE (SUMA y PROMEDIO), una columna Estado con IF (SI), ordenada de mayor a menor, un filtro, un gráfico de columnas de Día y Total y la fila superior inmovilizada. Luego compártela con una persona como lector.",
          youCanNow: "hacer un gráfico de columnas con tus datos y compartir una hoja de cálculo con el permiso correcto."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Trabajar con tus datos",
        questions: [
          { q: "¿Qué muestra =IF(C2>40,\"Overtime\",\"Regular\") cuando C2 es 45? (Overtime = horas extra; Regular = normal)", options: ["Regular", "45", "Overtime", "Un error"], answer: 2, why: "45 es mayor que 40, así que se muestra el resultado verdadero." },
          { q: "En una fórmula con IF (SI), ¿dónde van los resultados de texto?", options: ["Entre comillas dobles", "Entre corchetes", "Después de un signo #", "En ningún lado"], answer: 0, why: "Los resultados de texto deben ir entre comillas dobles." },
          { q: "¿Qué hace un filtro?", options: ["Borra filas", "Cambia los números", "Comparte el archivo", "Oculta las filas que no coinciden, sin borrarlas"], answer: 3, why: "Filtrar solo oculta filas; al quitar el filtro se vuelven a ver." },
          { q: "¿Cómo mantienes la fila de encabezados en la pantalla en Google Sheets?", options: ["Formato > Negrita", "Ver > Inmovilizar > 1 fila", "Insertar > Gráfico", "Datos > Ordenar intervalo"], answer: 1, why: "Inmovilizar la fila 1 la mantiene a la vista mientras te desplazas." },
          { q: "Un voluntario solo necesita leer tu hoja. ¿Qué acceso le das?", options: ["Editor", "Propietario", "Lector", "Ninguno; le mandas tu contraseña"], answer: 2, why: "Da el acceso más bajo que la persona necesite." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Excel y hojas de cálculo para el trabajo",
    questions: [
      { q: "En una hoja de cálculo, las columnas se nombran con:", options: ["Números", "Letras", "Colores", "Fechas"], answer: 1, why: "Las columnas usan letras; las filas usan números." },
      { q: "¿Qué tecla te lleva una celda a la derecha después de escribir?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab va a la derecha; Enter va hacia abajo." },
      { q: "¿Cuál es la mejor forma de organizar una lista de donaciones?", options: ["Cada donación en un archivo distinto", "Todos los datos en una sola celda", "Celdas al azar por toda la hoja", "Encabezados en la fila 1 y una donación por fila"], answer: 3, why: "Un registro por fila bajo encabezados claros hace que los datos se puedan usar." },
      { q: "Escribiste un número equivocado. La forma más rápida de quitar tu último cambio es:", options: ["Cerrar el archivo", "Deshacer: Ctrl+Z (Cmd+Z en Mac)", "Borrar la columna", "Empezar un archivo nuevo"], answer: 1, why: "Deshacer revierte tu última acción." },
      { q: "Dar formato de moneda a un número:", options: ["Cambia cómo se ve, no su valor", "Duplica el valor", "Borra el número", "Lo convierte en texto que no se puede sumar"], answer: 0, why: "El formato solo cambia el aspecto." },
      { q: "¿Cómo haces que una columna se ajuste a su dato más largo?", options: ["Escribiendo espacios", "Borrando el encabezado", "Haciendo doble clic en la línea entre las letras de columna", "Presionando Enter dos veces"], answer: 2, why: "Hacer doble clic en el borde ajusta la columna automáticamente." },
      { q: "Toda fórmula empieza con:", options: ["Solo un signo de más", "Un signo de dólar", "Una letra", "Un signo igual"], answer: 3, why: "El = le dice a la aplicación que es una fórmula." },
      { q: "¿Cuál saca el promedio de D2 a D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE con un rango escrito primera:última. En Excel en español es =PROMEDIO(D2:D20)." },
      { q: "Cambias una cantidad que usa una fórmula con SUM. ¿Qué le pasa al total?", options: ["Nada", "Se actualiza solo", "Muestra un error", "Se borra"], answer: 1, why: "Las fórmulas se recalculan cuando cambian sus datos." },
      { q: "Una celda muestra #NAME? (en español: #¿NOMBRE?). ¿Cuál es la causa probable?", options: ["El archivo está compartido", "La columna está en negrita", "El nombre de la función está mal escrito", "La hoja está inmovilizada"], answer: 2, why: "#NAME? normalmente significa que la aplicación no reconoce el nombre de la función." },
      { q: "¿Qué es el controlador de relleno?", options: ["Un menú", "El cuadrito de la esquina inferior derecha de una celda que se usa para copiar", "El botón Compartir", "Un tipo de gráfico"], answer: 1, why: "Al arrastrarlo copias la fórmula y se ajustan los nombres de las celdas." },
      { q: "¿Qué fórmula muestra \"Missing\" (falta) cuando D2 está vacía y \"OK\" cuando no lo está?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "La prueba D2=\"\" revisa si la celda está vacía." },
      { q: "¿Qué significa <> en una fórmula?", options: ["Mayor que", "Igual a", "Menor que", "Distinto de"], answer: 3, why: "<> significa distinto de." },
      { q: "En Excel, ¿dónde están Ordenar y Filtro?", options: ["Pestaña Archivo", "Pestaña Datos", "Pestaña Ayuda", "Pestaña Dibujar"], answer: 1, why: "Ordenar y Filtro están en la pestaña Datos de Excel." },
      { q: "En Google Sheets, ¿cómo agregas flechas de filtro a la fila de encabezados?", options: ["Datos > Crear un filtro", "Insertar > Gráfico", "Formato > Número", "Archivo > Compartir"], answer: 0, why: "Crear un filtro agrega flechas a cada encabezado." },
      { q: "¿Por qué nunca debes ordenar solo una columna de una tabla?", options: ["Es demasiado lento", "Borra la hoja", "Las filas se revuelven", "Comparte el archivo"], answer: 2, why: "Ordenar una sola columna separa los valores del resto de su fila." },
      { q: "En Excel, ¿cómo mantienes la fila 1 a la vista mientras te desplazas?", options: ["Insertar > Gráfico", "Inicio > Negrita", "Datos > Filtro", "Vista > Inmovilizar paneles > Inmovilizar fila superior"], answer: 3, why: "Inmovilizar fila superior mantiene el encabezado en la pantalla." },
      { q: "¿Qué gráfico es mejor para comparar las ventas por día?", options: ["Un gráfico de columnas", "Ningún gráfico", "Un gráfico sin etiquetas", "Un dibujo de un pastel que hiciste tú"], answer: 0, why: "Los gráficos de columnas comparan cantidades una al lado de otra." },
      { q: "En Google Sheets, ¿cómo empiezas un gráfico?", options: ["Datos > Ordenar intervalo", "Insertar > Gráfico", "Ver > Inmovilizar", "Formato > Negrita"], answer: 1, why: "Insertar > Gráfico abre el editor de gráficos." },
      { q: "¿Qué NUNCA debe ir en una hoja que compartes?", options: ["Totales de ventas", "Nombres de productos", "Contraseñas y números de Seguro Social", "Fechas"], answer: 2, why: "Los números privados se pueden usar mal si el archivo se comparte." }
    ]
  }
};

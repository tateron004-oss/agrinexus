"use strict";

// Koach Learn course (shared), Spanish translation of shared/microsoft-365-google-docs.js. See scripts/koachlearn-courses/README.md, "Translations".
// Note: with Spanish menus, spreadsheet functions are SUMA and PROMEDIO; the English names SUM and AVERAGE are given too.

module.exports = {
  id: "microsoft-365-google-docs-es",
  lang: "es",
  translationOf: "microsoft-365-google-docs",
  category: "Seniors and Technology",
  name: "Fundamentos de Microsoft 365 y Google Docs",
  skills: "Crear y guardar un documento, Dar formato al texto, Compartir y comentar, Hacer una hoja de cálculo sencilla, Sumar con una fórmula, Descargar en PDF",
  outcome: "hacer un documento ordenado de una página y una hoja de cálculo sencilla con un total, en Google Docs y Sheets o en Microsoft Word y Excel para la web, y luego compartirlos de forma segura y guardar una copia en PDF.",
  about: [
    "Hoy en día, la mayoría de los trabajos, escuelas, iglesias, clubes y familias escriben y comparten documentos en línea. Las dos opciones gratuitas más comunes son Google Docs y Sheets (con una cuenta de Google) y Microsoft Word y Excel para la web (con una cuenta de Microsoft). Los botones tienen nombres un poco distintos, pero las habilidades son las mismas.",
    "En el Capítulo 1 creas, das formato y compartes un documento. En el Capítulo 2 haces una pequeña hoja de cálculo, sumas una columna con una fórmula y guardas tu trabajo en PDF para enviarlo o imprimirlo.",
    "Cada lección dura unos cinco minutos. Ten la aplicación abierta mientras lees para hacer enseguida la tarea \"Pruébalo ahora\". Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Haz un volante o una carta de una página (por ejemplo, una venta de garaje, un día de voluntariado o una nota para el dueño de tu vivienda) con un título en negrita, una lista con viñetas y una línea de contacto, y una pequeña hoja de cálculo con al menos cinco gastos sumados con una fórmula SUMA. Comparte el documento con una persona como \"solo lectura\" y descarga los dos archivos en PDF.",
  chapters: [
    {
      name: "Capítulo 1: Escribir y compartir un documento",
      lessons: [
        {
          title: "Abrir Google Docs o Word para la web",
          minutes: 5,
          goal: "Abrir un documento en blanco nuevo, ponerle nombre y saber dónde se guarda.",
          text: [
            "Google Docs es gratis con una cuenta de Google (la misma cuenta de Gmail). Ve a docs.google.com y elige Documento en blanco. Microsoft Word para la web es gratis con una cuenta de Microsoft (la misma cuenta de Outlook.com). Ve a microsoft365.com, elige Word y luego Documento en blanco.",
            "Los dos guardan tu trabajo solos mientras escribes. Google lo guarda en Google Drive; Microsoft lo guarda en OneDrive. Los dos son almacenamiento en línea, también llamado la nube, así que puedes volver a abrir el archivo desde cualquier computadora o teléfono después de iniciar sesión.",
            "Ponle a cada archivo un nombre claro arriba a la izquierda, como \"Volante día de voluntariado - mayo\". Los nombres claros facilitan encontrar los archivos después."
          ],
          steps: ["Ve a docs.google.com (Google) o microsoft365.com (Microsoft) e inicia sesión.", "Elige un documento en blanco.", "Haz clic en el nombre arriba a la izquierda y escribe un nombre claro.", "Escribe una oración y fíjate en el mensaje de guardado cerca de la parte de arriba."],
          words: [["Nube", "almacenamiento en internet, para que llegues a tus archivos desde cualquier aparato después de iniciar sesión."], ["Google Drive / OneDrive", "el almacenamiento en línea de Google y de Microsoft, donde se guardan tus archivos."], ["Cuenta", "tu nombre de usuario y contraseña para un servicio."]],
          sources: [{ name: "Microsoft: Word, Excel y PowerPoint gratis para la web", url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web" }, { name: "Google Docs", url: "https://docs.google.com" }],
          slides: [
            { title: "Dos opciones gratuitas", bullets: ["Google Docs: docs.google.com con una cuenta de Google", "Word para la web: microsoft365.com con una cuenta de Microsoft"] },
            { title: "Se guarda solo", bullets: ["Google guarda en Google Drive", "Microsoft guarda en OneDrive", "Vuelve a abrirlo desde cualquier aparato después de iniciar sesión"] },
            { title: "Ponle nombre a cada archivo", bullets: ["Haz clic en el nombre arriba a la izquierda", "Usa nombres claros: \"Volante día de voluntariado - mayo\""] }
          ],
          tryIt: "Abre un documento en blanco en Google Docs o Word para la web. Llámalo \"Mi documento de práctica\" y escribe una oración sobre tu semana.",
          youCanNow: "abrir un documento nuevo, ponerle nombre y saber que se guarda solo en la nube."
        },
        {
          title: "Hacer que un documento se vea ordenado",
          minutes: 5,
          goal: "Dar formato a un título, una lista y el texto para que la página sea fácil de leer.",
          text: [
            "Dar formato significa cambiar cómo se ve el texto. Primero selecciona el texto: mantén presionado el botón del ratón y arrastra sobre él, o haz doble clic en una palabra. Luego usa la barra de herramientas de arriba: el botón de negrita, el de cursiva, la casilla de tamaño para agrandar el texto y los botones de lista para viñetas o números.",
            "Usa un estilo de título para los títulos. En la barra de herramientas busca la casilla que dice \"Texto normal\" (Google) o \"Normal\" (Word) y elige Título 1. Los títulos se ven ordenados y ayudan a los lectores de pantalla.",
            "Hazlo sencillo: una letra fácil de leer, tamaño 11 a 14 para el texto, un título en negrita, párrafos cortos y listas con viñetas. Si te equivocas, presiona Ctrl+Z (Command+Z en una Mac) para deshacer."
          ],
          steps: ["Selecciona el texto que quieres cambiar.", "Elige Título 1 para el título.", "Selecciona unas líneas y haz clic en el botón de lista con viñetas.", "Usa el botón de negrita para resaltar una palabra clave.", "Presiona Ctrl+Z (Command+Z en Mac) para deshacer un error."],
          words: [["Formato", "cómo se ve el texto: tamaño, negrita, listas, títulos."], ["Seleccionar", "marcar el texto arrastrando sobre él para poder cambiarlo."], ["Barra de herramientas", "la fila de botones en la parte de arriba de la aplicación."]],
          slides: [
            { title: "Selecciona y luego cambia", bullets: ["Arrastra sobre el texto o haz doble clic en una palabra", "Luego usa la barra de herramientas"] },
            { title: "Lo básico de la barra de herramientas", bullets: ["Negrita y cursiva", "La casilla de tamaño agranda o achica el texto", "Los botones de lista hacen viñetas o números"] },
            { title: "Usa estilos de título", bullets: ["Cambia \"Texto normal\" a Título 1", "Se ve ordenado y ayuda a los lectores de pantalla"] },
            { title: "Hazlo sencillo", bullets: ["Una letra, tamaño 11 a 14", "Párrafos cortos y viñetas", "Ctrl+Z (Command+Z en Mac) deshace un error"] }
          ],
          tryIt: "En tu documento de práctica, escribe un título y tres cosas, como tres cosas para llevar a un picnic familiar. Pon el título en Título 1, convierte las tres cosas en una lista con viñetas y pon una palabra en negrita.",
          youCanNow: "dar formato a una página con un título, una lista con viñetas y texto en negrita."
        },
        {
          title: "Compartir de forma segura y usar comentarios",
          minutes: 5,
          goal: "Compartir un documento con una persona con el nivel de acceso correcto y dejar un comentario.",
          text: [
            "Las dos aplicaciones tienen un botón Compartir arriba a la derecha. Escribe el correo de la persona y elige lo que puede hacer: solo ver (leer), comentar (sugerir) o editar (cambiar el archivo). Da el nivel más bajo que la persona necesite.",
            "Ten cuidado con \"Cualquier persona con el enlace\". Cualquiera que reciba el enlace, incluso reenviado, puede abrir el archivo. No lo uses para archivos con datos privados como direcciones, números de identificación o información de salud.",
            "Los comentarios permiten dar opiniones sin cambiar tus palabras. Selecciona un texto y elige el botón de comentario (una burbuja de diálogo) o haz clic derecho y elige Comentar. Cuando el problema esté resuelto, elige Resolver."
          ],
          steps: ["Haz clic en Compartir arriba a la derecha.", "Escribe el correo de la persona.", "Elige Ver, Comentar o Editar; escoge el nivel más bajo que necesite.", "Envía.", "Para comentar: selecciona texto, elige Comentar, escribe y publícalo."],
          words: [["Compartir", "dejar que otra persona abra tu archivo."], ["Nivel de acceso", "lo que una persona puede hacer con tu archivo: ver, comentar o editar."], ["Comentario", "una nota al lado del archivo que no cambia el texto."]],
          slides: [
            { title: "Botón Compartir, arriba a la derecha", bullets: ["Escribe su correo", "Elige Ver, Comentar o Editar", "Da el nivel más bajo que necesite"] },
            { title: "Cuidado con \"Cualquier persona con el enlace\"", bullets: ["Cualquiera que reciba el enlace puede abrirlo", "Nunca para datos privados"] },
            { title: "Comentarios", bullets: ["Opiniones sin cambiar tus palabras", "Selecciona texto y elige Comentar", "Resuélvelo cuando esté arreglado"] }
          ],
          tryIt: "Comparte tu documento de práctica con un amigo o familiar como solo lectura. Luego agrega un comentario a tu título que diga \"¿Este título es claro?\"",
          youCanNow: "compartir un documento con el nivel de acceso correcto y usar comentarios para recibir opiniones."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Escribir y compartir un documento",
        questions: [
          { q: "¿Dónde guarda Google Docs tu trabajo?", options: ["Solo en una memoria USB", "No lo guarda", "En Google Drive, en línea", "En una impresora"], answer: 2, why: "Google Docs guarda en Google Drive automáticamente." },
          { q: "¿Cuál nombre de archivo es mejor?", options: ["\"Documento sin título\"", "\"asdf\"", "\"doc1\"", "\"Volante día de voluntariado - mayo\""], answer: 3, why: "Un nombre claro hace que el archivo sea fácil de encontrar después." },
          { q: "Antes de poner un texto en negrita, primero:", options: ["Cierras la aplicación", "Imprimes la página", "Seleccionas el texto", "Compartes el archivo"], answer: 2, why: "Seleccionas el texto y luego lo cambias con la barra de herramientas." },
          { q: "Tu vecino solo necesita leer tu volante. ¿Qué nivel de acceso le das?", options: ["Editar", "Propietario", "Solo ver", "Cualquier persona con el enlace"], answer: 2, why: "Da el nivel más bajo que la persona necesite." },
          { q: "Un documento tiene tu dirección y tu teléfono. ¿Qué opción de compartir debes evitar?", options: ["Compartir con una persona por correo", "Solo ver", "Solo comentar", "Cualquier persona con el enlace"], answer: 3, why: "Cualquiera que reciba el enlace podría abrir un archivo con datos privados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hojas de cálculo y terminar el trabajo",
      lessons: [
        {
          title: "Tu primera hoja de cálculo",
          minutes: 5,
          goal: "Hacer una hoja de cálculo con encabezados y cinco filas de datos.",
          text: [
            "Una hoja de cálculo es una cuadrícula de casillas para listas y números. La de Google es Sheets (sheets.google.com); la de Microsoft es Excel (elige Excel en microsoft365.com). Es muy útil para presupuestos, listas de inscripción, horarios e inventarios.",
            "Las columnas van de arriba abajo y tienen letras (A, B, C). Las filas van de lado a lado y tienen números (1, 2, 3). Cada casilla es una celda y se nombra por su columna y su fila, así que B2 es la columna B, fila 2.",
            "Pon los encabezados en la fila 1, como \"Artículo\" en A1 y \"Costo\" en B1. Luego escribe una cosa por fila debajo. Escribe los números sin palabras (12.50, no \"12.50 dólares\") para que la hoja pueda hacer cuentas con ellos. Según tu país, el decimal puede llevar coma: 12,50."
          ],
          steps: ["Abre Google Sheets o Excel para la web y elige una hoja en blanco.", "Ponle nombre al archivo.", "Escribe los encabezados en la fila 1 (A1: Artículo, B1: Costo).", "Escribe cinco artículos en la columna A y sus costos en la columna B.", "Pon la fila 1 en negrita."],
          words: [["Hoja de cálculo", "una cuadrícula de celdas para listas y números, como Google Sheets o Excel."], ["Celda", "una casilla de la hoja, nombrada por la letra de la columna y el número de la fila, como B2."], ["Columna / fila", "las columnas van de arriba abajo (letras); las filas van de lado a lado (números)."]],
          slides: [
            { title: "Para qué sirve una hoja de cálculo", bullets: ["Presupuestos y gastos", "Listas de inscripción y horarios", "Inventarios"] },
            { title: "Columnas, filas, celdas", bullets: ["Columnas: letras A, B, C", "Filas: números 1, 2, 3", "Celda B2 = columna B, fila 2"] },
            { title: "Prepárala", bullets: ["Encabezados en la fila 1", "Una cosa por fila", "Números sin palabras: 12.50"] }
          ],
          tryIt: "Haz una hoja de cálculo llamada \"Presupuesto de práctica\". Pon Artículo y Costo en la fila 1 y luego cinco gastos reales de una semana o de un evento, como comida, pasaje de autobús o decoraciones.",
          youCanNow: "preparar una hoja de cálculo con encabezados y filas de datos."
        },
        {
          title: "Sumar con una fórmula",
          minutes: 5,
          goal: "Usar SUMA para sacar el total de una columna y que se actualice sola.",
          text: [
            "Una fórmula le dice a la hoja de cálculo que haga una cuenta. Toda fórmula empieza con el signo igual (=). Para sumar las celdas B2 a B6, haz clic en una celda vacía debajo de ellas, escribe =SUMA(B2:B6) y presiona Enter. Si tu programa está en inglés, la fórmula se llama SUM: =SUM(B2:B6).",
            "Los dos puntos significan \"hasta\", así que B2:B6 es B2, B3, B4, B5 y B6. Si cambias un número, el total cambia solo. Esa es la gran ventaja frente a una calculadora.",
            "Otras fórmulas sencillas: =PROMEDIO(B2:B6) (AVERAGE en inglés) da el promedio, y =B2*2 duplica una celda. Si ves un error como #NAME? o #¿NOMBRE?, revisa la ortografía y el signo igual."
          ],
          steps: ["Haz clic en la celda vacía debajo de tus números.", "Escribe =SUMA(B2:B6) con tu propio rango de celdas.", "Presiona Enter.", "Cambia un número y mira cómo se actualiza el total.", "Escribe la palabra Total en la celda de la izquierda."],
          words: [["Fórmula", "una instrucción que empieza con = y le dice a la hoja que calcule."], ["SUMA (SUM)", "una fórmula que suma un grupo de celdas."], ["Rango", "un grupo de celdas, escrito como B2:B6 (de B2 hasta B6)."]],
          slides: [
            { title: "Las fórmulas empiezan con =", bullets: ["=SUMA(B2:B6) suma de B2 hasta B6 (en inglés: =SUM)", "Presiona Enter para ver el resultado"] },
            { title: "Se actualiza sola", bullets: ["Cambia un número", "El total también cambia"] },
            { title: "Más fórmulas sencillas", bullets: ["=PROMEDIO(B2:B6) da el promedio (en inglés: AVERAGE)", "=B2*2 duplica una celda", "#NAME? o #¿NOMBRE? significa revisar la ortografía"] }
          ],
          tryIt: "En tu Presupuesto de práctica, escribe Total en A7 y =SUMA(B2:B6) en B7 (o =SUM(B2:B6) si está en inglés). Luego cambia un costo y comprueba que el total cambie.",
          youCanNow: "sacar el total de una columna con SUMA y saber que se actualiza cuando cambian los números."
        },
        {
          title: "Guardar en PDF e imprimir",
          minutes: 4,
          goal: "Descargar un documento o una hoja de cálculo en PDF e imprimirlo.",
          text: [
            "Un PDF es un archivo que se ve igual en cualquier teléfono y computadora, y que la gente no puede cambiar fácilmente. Muchas solicitudes de empleo, oficinas y escuelas piden archivos PDF.",
            "En Google Docs o Sheets: abre el menú Archivo, elige Descargar y luego PDF. En Word o Excel para la web: abre el menú Archivo y busca Guardar como o Descargar, y luego elige PDF. El archivo va a tu carpeta de Descargas.",
            "Para imprimir, abre el menú Archivo y elige Imprimir, o presiona Ctrl+P (Command+P en una Mac). Revisa primero la vista previa para que no se corte nada. En una biblioteca, pregunta al personal cómo se paga la impresión."
          ],
          steps: ["Abre el menú Archivo.", "Elige Descargar (Google) o Guardar como / Descargar (Microsoft).", "Elige PDF.", "Busca el archivo en tu carpeta de Descargas.", "Para imprimir: Ctrl+P (Command+P en Mac), revisa la vista previa y luego imprime."],
          words: [["PDF", "un tipo de archivo que se ve igual en todas partes y es difícil de cambiar."], ["Carpeta de Descargas", "el lugar de la computadora adonde van los archivos descargados."]],
          slides: [
            { title: "¿Por qué PDF?", bullets: ["Se ve igual en todas partes", "Es difícil cambiarlo por error", "Lo piden a menudo los trabajos y las oficinas"] },
            { title: "Hacer un PDF", bullets: ["Menú Archivo y luego Descargar (Google)", "Menú Archivo y luego Guardar como o Descargar (Microsoft)", "Elige PDF; búscalo en Descargas"] },
            { title: "Imprimirlo", bullets: ["Ctrl+P (Command+P en Mac)", "Revisa primero la vista previa"] }
          ],
          tryIt: "Tarea final: haz un volante o una carta de una página con un título, una lista con viñetas y una línea de contacto, y una hoja de cálculo con cinco gastos y un total con SUMA. Comparte el documento como solo lectura y luego descarga los dos en PDF.",
          youCanNow: "terminar un documento y una hoja de cálculo, compartirlos de forma segura y guardarlos en PDF."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hojas de cálculo y terminar el trabajo",
        questions: [
          { q: "¿Qué es la celda C4?", options: ["Fila C, columna 4", "Una fórmula", "El cuarto archivo", "Columna C, fila 4"], answer: 3, why: "Las celdas se nombran por la letra de la columna y luego el número de la fila." },
          { q: "¿Cómo debes escribir un costo de doce dólares con cincuenta?", options: ["\"doce con cincuenta\"", "\"12.50 dólares\"", "12.50", "\"como 12\""], answer: 2, why: "Los números sin palabras permiten que la hoja haga cuentas." },
          { q: "¿Qué fórmula suma las celdas B2 hasta B6?", options: ["sumar(B2-B6)", "SUMA B2 B6", "=SUMA(B2:B6)", "B2+B6"], answer: 2, why: "Las fórmulas empiezan con =, y B2:B6 significa de B2 hasta B6." },
          { q: "Cambias un costo de tu presupuesto. ¿Qué pasa con el total de SUMA?", options: ["Nada", "Se convierte en un error", "Tienes que volver a escribirlo", "Se actualiza solo"], answer: 3, why: "Las fórmulas se recalculan cuando cambian los números." },
          { q: "Una oficina pide tu carta en un archivo que se vea igual en todas partes. Envías:", options: ["Una captura de tu teléfono", "Una foto de la pantalla", "Un enlace para cualquiera", "Un PDF"], answer: 3, why: "Un PDF se ve igual en cualquier aparato." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de Microsoft 365 y Google Docs",
    questions: [
      { q: "¿Qué necesitas para usar Google Docs gratis?", options: ["Una cuenta de Google", "Una licencia pagada", "Una impresora", "Una cuenta de Microsoft"], answer: 0, why: "Google Docs es gratis con una cuenta de Google." },
      { q: "¿Dónde guarda tus archivos Word para la web?", options: ["Google Drive", "Un disquete", "OneDrive", "En ningún lugar"], answer: 2, why: "Microsoft guarda en OneDrive." },
      { q: "La nube significa:", options: ["El clima", "Un virus", "Un tipo de impresora", "Almacenamiento en internet al que llegas desde cualquier aparato"], answer: 3, why: "El almacenamiento en la nube te deja abrir archivos en cualquier lugar después de iniciar sesión." },
      { q: "¿Dónde le cambias el nombre a un Google Doc?", options: ["Haciendo clic en el nombre arriba a la izquierda", "Reiniciando la computadora", "Imprimiéndolo primero", "Enviándotelo por correo"], answer: 0, why: "El nombre del archivo está arriba a la izquierda." },
      { q: "Para cambiar cómo se ve una palabra, primero:", options: ["Compartes el archivo", "Descargas un PDF", "Seleccionas la palabra", "Cierras la pestaña"], answer: 2, why: "Primero seleccionas y luego das formato." },
      { q: "¿Cuál es la mejor forma de hacer un título?", options: ["Escribirlo todo en mayúsculas con espacios", "Ponerlo al final", "Hacerlo muy pequeño", "Elegir el estilo Título 1"], answer: 3, why: "Los estilos de título se ven ordenados y ayudan a los lectores de pantalla." },
      { q: "Cometiste un error de formato. ¿Qué lo deshace?", options: ["Ctrl+P", "Ctrl+Z (Command+Z en Mac)", "Cerrar el navegador", "El botón Compartir"], answer: 1, why: "Ctrl+Z o Command+Z deshace el último cambio." },
      { q: "¿Dónde está el botón Compartir en las dos aplicaciones?", options: ["Arriba a la derecha", "Al final de la página", "En la vista previa de impresión", "En una celda de la hoja"], answer: 0, why: "Las dos aplicaciones ponen Compartir arriba a la derecha." },
      { q: "Tu compañero de trabajo debe sugerir cambios pero no cambiar tus palabras. Le das:", options: ["Editar", "Comentar", "Propietario", "Sin acceso"], answer: 1, why: "El acceso para comentar le deja sugerir sin editar." },
      { q: "¿Por qué tener cuidado con \"Cualquier persona con el enlace\"?", options: ["Borra el archivo", "Cualquiera que reciba el enlace puede abrirlo", "Cuesta dinero", "Convierte el archivo en PDF"], answer: 1, why: "Los enlaces reenviados pueden llegar a desconocidos." },
      { q: "Un comentario es:", options: ["Un cambio en tu texto", "Una nota al lado que no cambia el texto", "Un PDF", "Una fórmula"], answer: 1, why: "Los comentarios dan opiniones sin editar." },
      { q: "¿Cuál es un buen uso de una hoja de cálculo?", options: ["Un presupuesto familiar", "Una carta de amor", "Un álbum de fotos", "Una llamada telefónica"], answer: 0, why: "Las hojas de cálculo son para listas y números." },
      { q: "Las columnas de una hoja de cálculo se nombran con:", options: ["Números", "Letras", "Colores", "Emojis"], answer: 1, why: "Las columnas usan letras; las filas usan números." },
      { q: "¿Dónde van normalmente encabezados como \"Artículo\" y \"Costo\"?", options: ["En la fila 1", "En la última fila", "En un comentario", "En el nombre del archivo"], answer: 0, why: "Los encabezados van en la fila de arriba." },
      { q: "Toda fórmula empieza con:", options: ["Un signo de dólar", "Un signo igual (=)", "La palabra Total", "Un espacio"], answer: 1, why: "El = le dice a la hoja que es una fórmula." },
      { q: "En =SUMA(B2:B6), los dos puntos significan:", options: ["Dividir", "Hasta", "Menos", "Parar"], answer: 1, why: "B2:B6 significa de B2 hasta B6." },
      { q: "Ves #NAME? o #¿NOMBRE? en una celda. ¿Qué debes revisar?", options: ["La impresora", "La ortografía de la fórmula", "Tu contraseña", "El color del archivo"], answer: 1, why: "Ese error casi siempre significa una fórmula mal escrita." },
      { q: "¿Qué fórmula da el promedio de B2 a B6?", options: ["=PROMEDIO(B2:B6)", "=SUMA(B2)", "PROM B2-B6", "=B2"], answer: 0, why: "PROMEDIO (AVERAGE en inglés) calcula el promedio de un rango." },
      { q: "En Google Docs, ¿cómo haces un PDF?", options: ["Menú Archivo, Descargar, PDF", "Compartir, Cualquier persona con el enlace", "Presionar Ctrl+Z", "Clic derecho y Comentar"], answer: 0, why: "Archivo, Descargar, PDF guarda un PDF." },
      { q: "Antes de imprimir, debes:", options: ["Revisar la vista previa de impresión", "Borrar el archivo", "Compartirlo con todos", "Cambiar todas las letras"], answer: 0, why: "La vista previa muestra si algo se corta." }
    ]
  }
};

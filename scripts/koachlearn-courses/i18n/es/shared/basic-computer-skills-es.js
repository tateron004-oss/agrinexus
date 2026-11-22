"use strict";

// Koach Learn course (shared), Spanish translation of shared/basic-computer-skills.js. See scripts/koachlearn-courses/README.md, "Translations".
// Menu and key names are given as they appear on Spanish Windows and Mac, with the English key name where keyboards differ (Shift / Mayús).

module.exports = {
  id: "basic-computer-skills-es",
  lang: "es",
  translationOf: "basic-computer-skills",
  category: "Seniors and Technology",
  name: "Habilidades básicas de computación",
  skills: "Encender y apagar una computadora, Usar el ratón o el panel táctil, Escribir con el teclado, Abrir y cerrar aplicaciones y ventanas, Guardar y encontrar archivos en carpetas, Mantener la computadora actualizada",
  outcome: "encender una computadora con Windows o Mac e iniciar sesión, usar el ratón y el teclado con confianza, abrir una aplicación, escribir y guardar una nota corta en una carpeta que hiciste, encontrarla de nuevo después y apagar la computadora de la forma correcta.",
  about: [
    "Este curso es para cualquiera que se sienta inseguro frente a una computadora: personas que nunca han usado una, personas que aprendieron hace años y personas que usan sobre todo el teléfono. Vamos un pequeño paso a la vez, y nada de lo que hagas en estas lecciones va a romper la computadora.",
    "En el Capítulo 1 aprendes las partes de una computadora, cómo encenderla e iniciar sesión y cómo usar el ratón y el teclado. En el Capítulo 2 abres aplicaciones y ventanas, guardas un archivo en una carpeta, lo encuentras de nuevo y mantienes la computadora en buen estado.",
    "Los pasos se dan para computadoras con Windows y computadoras Mac. Cada lección dura unos cinco minutos. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Enciende la computadora e inicia sesión. Crea una carpeta nueva llamada \"Práctica\" dentro de tu carpeta Documentos. Abre el Bloc de notas (Windows) o TextEdit (Mac) y escribe una nota corta, como una lista de preguntas para tu próxima cita médica o una nota para un nieto, con mayúscula al comienzo de cada oración. Guárdala en la carpeta Práctica con un nombre claro, cierra la aplicación, encuentra el archivo de nuevo y ábrelo, y luego apaga la computadora de la forma correcta.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos con poca o ninguna experiencia con una computadora: personas mayores, personas que vuelven al trabajo o a la comunidad, personas que buscan trabajo y cuidadores que quieren usar solos una computadora en casa, en la biblioteca o en un centro de empleo.",
    startingPoint: "Quizás usan un teléfono celular para llamar o enviar mensajes de texto. Muchos nunca han usado un ratón, escrito en un teclado completo, abierto una aplicación en una computadora, guardado un archivo en una carpeta ni apagado bien una computadora.",
    gap: "Las solicitudes de empleo, los servicios de la biblioteca, la escuela y muchos formularios necesitan una computadora. Sin estas bases, las personas tienen que pedir ayuda a otros, pierden su trabajo porque no lo guardaron o evitan las computadoras por completo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada parte y cada botón se nombra y se describe",
      "Dispositivos: una computadora de escritorio o portátil con Windows o Mac, en casa, en una biblioteca o en un centro de empleo",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total, con tiempo extra para practicar con el ratón",
      "Costo: solo las aplicaciones gratuitas que ya trae la computadora (Bloc de notas o TextEdit)",
      "Computadoras compartidas: se siguen las reglas del personal para iniciar sesión y no se guardan archivos privados en las computadoras de la biblioteca"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una computadora de escritorio o portátil", action: "nombrar sus partes principales, encenderla e iniciar sesión", standard: "sin ayuda, nombrando la pantalla, el teclado, el ratón o el panel táctil y el botón de encendido" },
    { id: "O2", condition: "Con un ratón o un panel táctil", action: "señalar, hacer clic, doble clic, clic derecho y desplazarte", standard: "haciendo bien cada acción cuando se pide" },
    { id: "O3", condition: "Con el teclado", action: "escribir una oración con mayúsculas, espacios y puntuación y corregir los errores", standard: "con mayúscula al comienzo de cada oración y cada error corregido con Retroceso o con deshacer" },
    { id: "O4", condition: "En una computadora con Windows o Mac", action: "abrir una aplicación por su nombre, cambiar el tamaño de su ventana o minimizarla, traerla de vuelta y cerrarla", standard: "sin ayuda" },
    { id: "O5", condition: "Con una nota corta para guardar", action: "crear una carpeta, guardar la nota en ella con un nombre claro y encontrarla de nuevo", standard: "con el archivo en la carpeta correcta y abierto de nuevo más tarde" },
    { id: "O6", condition: "Cuando una computadora necesita cuidado o tiene un problema", action: "instalar actualizaciones, reiniciar, apagar de la forma correcta y elegir un lugar seguro para pedir ayuda", standard: "usando el menú para apagar y sin llamar nunca a un número de una ventana emergente" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Sentirse cómodo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Las partes de una computadora y cómo encenderla",
          minutes: 5,
          goal: "Nombrar las partes principales de una computadora, encenderla e iniciar sesión.",
          text: [
            "Una computadora de escritorio tiene una pantalla (monitor), un teclado, un ratón (\"mouse\") y una caja o pantalla que contiene la computadora en sí. Una computadora portátil tiene todo esto en una sola pieza que se abre; en lugar de ratón tiene una superficie táctil plana llamada panel táctil.",
            "Para encenderla, presiona una vez el botón de encendido. Normalmente tiene un círculo con una línea arriba. En una portátil suele estar arriba a la derecha del teclado o en un costado. Espera a que se encienda la pantalla.",
            "La mayoría de las computadoras luego te piden iniciar sesión con una contraseña o un PIN. Escríbelo y presiona Enter. En una computadora compartida, como la de una biblioteca, el personal te dirá cómo iniciar sesión."
          ],
          steps: ["Busca el botón de encendido (un círculo con una línea arriba).", "Presiónalo una vez y suéltalo.", "Espera la pantalla de inicio de sesión.", "Escribe tu contraseña o PIN y presiona Enter."],
          words: [["Monitor", "la pantalla de una computadora de escritorio."], ["Computadora portátil", "una computadora que se abre, con la pantalla y el teclado en una sola pieza."], ["Panel táctil", "la superficie táctil plana de una portátil que funciona como un ratón."], ["Iniciar sesión", "escribir tu contraseña o PIN para que la computadora sepa que eres tú."]],
          slides: [
            { title: "Partes de una computadora", bullets: ["Pantalla (monitor)", "Teclado", "Ratón, o un panel táctil en una portátil"] },
            { title: "Enciéndela", bullets: ["Botón de encendido: un círculo con una línea arriba", "Presiona una vez y espera"] },
            { title: "Inicia sesión", bullets: ["Escribe tu contraseña o PIN", "Presiona Enter", "En una computadora compartida, pregunta al personal"] }
          ],
          tryIt: "Señala la pantalla, el teclado y el ratón (o el panel táctil) de una computadora cerca de ti. Busca el botón de encendido, enciende la computadora e inicia sesión.",
          youCanNow: "nombrar las partes de una computadora, encenderla e iniciar sesión.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un monitor?", options: ["El ratón", "La pantalla", "El cable de corriente", "El teclado"], answer: 1, why: "El monitor es la pantalla donde ves tu trabajo." },
            { objective: "O1", q: "Quieres usar una computadora en la biblioteca y te pide iniciar sesión. ¿Qué harías?", options: ["Mantener presionado el botón de encendido hasta que se apague", "Desconectarla", "Escribir letras al azar hasta que se abra", "Preguntar al personal cómo iniciar sesión"], answer: 3, why: "En una computadora compartida, el personal te dirá cómo iniciar sesión." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Usar el ratón o el panel táctil",
          minutes: 5,
          goal: "Señalar, hacer clic, doble clic, clic derecho y desplazarte.",
          text: [
            "El ratón mueve el puntero, la pequeña flecha de la pantalla. Apoya la mano sobre el ratón y deslízalo suavemente sobre la mesa; la flecha lo sigue. Si te quedas sin espacio, levanta el ratón y vuelve a ponerlo en el centro.",
            "Clic: presiona una vez el botón izquierdo para elegir algo. Doble clic: presiona el botón izquierdo dos veces rápido para abrir algo, como una carpeta. Clic derecho: presiona una vez el botón derecho para ver un menú corto de opciones. Desplazarse: gira la pequeña rueda entre los botones para mover una página hacia arriba o hacia abajo.",
            "En el panel táctil de una portátil, desliza un dedo para mover la flecha, toca o presiona una vez para hacer clic y desliza dos dedos hacia arriba o abajo para desplazarte. Para hacer clic derecho, toca con dos dedos."
          ],
          steps: ["Desliza el ratón para mover la flecha.", "Clic: presiona una vez el botón izquierdo.", "Doble clic: presiona el botón izquierdo dos veces rápido.", "Clic derecho: presiona una vez el botón derecho para ver un menú.", "Desplazarse: gira la rueda, o desliza dos dedos en un panel táctil."],
          words: [["Puntero", "la pequeña flecha de la pantalla que se mueve con el ratón."], ["Clic", "presionar una vez el botón izquierdo del ratón."], ["Doble clic", "presionar el botón izquierdo dos veces rápido para abrir algo."], ["Clic derecho", "presionar el botón derecho para ver un menú de opciones."], ["Desplazarse", "mover una página hacia arriba o hacia abajo."]],
          slides: [
            { title: "Mueve el puntero", bullets: ["Desliza el ratón suavemente", "¿Sin espacio? Levántalo y ponlo de nuevo en el centro"] },
            { title: "Clics", bullets: ["Clic: botón izquierdo una vez, para elegir", "Doble clic: dos veces rápido, para abrir", "Clic derecho: botón derecho, para un menú"] },
            { title: "Desplazarse", bullets: ["Gira la rueda del ratón", "Panel táctil: desliza dos dedos arriba o abajo"] },
            { title: "Panel táctil", bullets: ["Un dedo mueve la flecha", "Toca para hacer clic", "Toque con dos dedos para clic derecho"] }
          ],
          tryIt: "Abre cualquier página web o documento. Desplázate hacia abajo y de vuelta hacia arriba. Haz clic derecho en un lugar vacío y lee el menú; luego presiona la tecla Esc para cerrarlo. Haz doble clic en una palabra para seleccionarla.",
          youCanNow: "señalar, hacer clic, doble clic, clic derecho y desplazarte con un ratón o un panel táctil.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace desplazarse?", options: ["Mueve una página hacia arriba o hacia abajo", "Abre una carpeta", "Apaga la computadora", "Escribe una letra mayúscula"], answer: 0, why: "Girar la rueda del ratón, o deslizar dos dedos en un panel táctil, mueve la página." },
            { objective: "O2", q: "En el panel táctil de una portátil quieres ver el menú corto de opciones. ¿Qué harías?", options: ["Deslizar un dedo", "Presionar el botón de encendido", "Tocar con dos dedos", "Presionar Bloq Mayús"], answer: 2, why: "En un panel táctil, tocar con dos dedos es un clic derecho." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir con el teclado",
          minutes: 5,
          goal: "Escribir una oración con mayúsculas, espacios y puntuación, y corregir errores.",
          text: [
            "El teclado tiene letras, números y teclas especiales. La barra larga de abajo es la barra espaciadora. Enter (Intro; Return en una Mac) empieza una línea nueva o dice \"adelante\". Retroceso (Backspace; Delete en una Mac) borra la letra a la izquierda de la línea que parpadea, llamada cursor.",
            "Para una sola mayúscula, mantén presionada la tecla Shift (Mayús) y presiona la letra. Bloq Mayús (Caps Lock) pone todas las letras en mayúscula hasta que la presionas otra vez. Shift también escribe el símbolo de arriba de una tecla, como ? o !.",
            "Los atajos ahorran tiempo. En Windows usa Ctrl; en una Mac usa Command. Ctrl+Z deshace un error, Ctrl+C copia, Ctrl+V pega y Ctrl+S guarda (en algunos programas en español es Ctrl+G; también puedes usar el menú Archivo y luego Guardar)."
          ],
          steps: ["Haz clic donde quieres escribir; ahí parpadea el cursor.", "Mantén presionada Shift (Mayús) y presiona una letra para una mayúscula.", "Presiona la barra espaciadora entre las palabras.", "Presiona Retroceso (Delete en Mac) para corregir un error.", "Presiona Enter (Return en Mac) para una línea nueva."],
          words: [["Cursor", "la línea que parpadea y muestra dónde irá lo que escribas."], ["Shift (Mayús)", "la tecla que mantienes presionada para una mayúscula o un símbolo de arriba."], ["Retroceso (Backspace)", "la tecla que borra la letra de la izquierda (Delete en una Mac)."], ["Atajo", "una combinación de teclas que hace algo rápido, como Ctrl+S para guardar."]],
          slides: [
            { title: "Teclas clave", bullets: ["Barra espaciadora: un espacio", "Enter (Return en Mac): línea nueva", "Retroceso (Delete en Mac): borra una letra"] },
            { title: "Mayúsculas y símbolos", bullets: ["Shift (Mayús) + letra = una mayúscula", "Bloq Mayús = todo en mayúsculas hasta presionarla otra vez", "Shift también escribe ? y !"] },
            { title: "Atajos útiles", bullets: ["Windows: Ctrl. Mac: Command", "Z deshacer, C copiar, V pegar, S guardar"] }
          ],
          tryIt: "Abre una casilla de búsqueda o un documento en blanco y escribe: ¡Me llamo ___ y estoy aprendiendo computación! Usa mayúscula al comienzo, luego borra una palabra con Retroceso y vuelve a escribirla.",
          youCanNow: "escribir oraciones con mayúsculas y puntuación, corregir errores y usar atajos comunes.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace Ctrl+C en Windows?", options: ["Guarda tu trabajo", "Deshace un error", "Copia", "Cierra la aplicación"], answer: 2, why: "Ctrl+C copia; Ctrl+V pega." },
            { objective: "O3", q: "Todo lo que escribes sale en mayúsculas. ¿Qué harías?", options: ["Reiniciar la computadora", "Presionar Bloq Mayús otra vez para desactivarlo", "Mantener presionada Mayús para cada letra", "Comprar un teclado nuevo"], answer: 1, why: "Bloq Mayús pone cada letra en mayúscula hasta que lo presionas otra vez." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Sentirse cómodo",
        questions: [
          { objective: "O1", q: "¿Qué es un panel táctil?", options: ["La pantalla", "Un tipo de impresora", "La superficie táctil plana de una portátil que funciona como un ratón", "Un cable"], answer: 2, why: "Un panel táctil hace el trabajo del ratón en una portátil." },
          { objective: "O1", q: "¿Cómo se ve normalmente el botón de encendido?", options: ["Una estrella", "Un círculo con una línea arriba", "Un corazón", "Un signo de pregunta"], answer: 1, why: "Ese es el símbolo común de encendido." },
          { objective: "O2", q: "¿Cómo abres una carpeta con el ratón?", options: ["Un clic derecho", "Girando la rueda", "Con doble clic", "Sacudiendo el ratón"], answer: 2, why: "El doble clic abre las cosas." },
          { objective: "O3", q: "¿Cómo escribes una sola mayúscula?", options: ["Presionando Enter", "Manteniendo Shift (Mayús) y presionando la letra", "Presionando Retroceso", "Presionando dos veces la barra espaciadora"], answer: 1, why: "Shift más una letra hace una mayúscula." },
          { objective: "O3", q: "Escribiste una letra equivocada. ¿Qué tecla la borra?", options: ["La barra espaciadora", "Shift", "Bloq Mayús", "Retroceso (Delete en Mac)"], answer: 3, why: "Retroceso borra la letra a la izquierda del cursor." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aplicaciones, archivos y cuidado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Abrir aplicaciones y manejar ventanas",
          minutes: 5,
          goal: "Abrir una aplicación, cambiar el tamaño de su ventana y cerrarla.",
          text: [
            "Las aplicaciones (programas) hacen trabajos: un navegador web para internet, una aplicación de escritura para notas, una aplicación de fotos para las imágenes. En Windows, haz clic en el botón Inicio (el logotipo de Windows abajo en la pantalla) y escribe el nombre de la aplicación. En una Mac, haz clic en la lupa arriba a la derecha (Spotlight), escribe el nombre y presiona Return.",
            "Cada aplicación se abre en una ventana. En la esquina de arriba hay botones pequeños. En Windows, arriba a la derecha: un guion (minimizar, esconderla por ahora), un cuadrado (maximizar, llenar la pantalla) y una X (cerrar). En una Mac, arriba a la izquierda: rojo (cerrar), amarillo (minimizar) y verde (pantalla completa).",
            "Las aplicaciones minimizadas esperan en la barra de tareas (Windows, abajo) o en el Dock (Mac). Haz clic en el ícono de la aplicación ahí para traerla de vuelta."
          ],
          steps: ["Windows: haz clic en Inicio y escribe el nombre de la aplicación. Mac: haz clic en la lupa y escribe el nombre.", "Presiona Enter o Return para abrirla.", "Usa el botón de minimizar para esconderla.", "Haz clic en su ícono en la barra de tareas o el Dock para traerla de vuelta.", "Ciérrala con la X (Windows) o el botón rojo (Mac)."],
          words: [["Aplicación / programa", "software que hace un trabajo, como escribir o navegar."], ["Ventana", "el recuadro en el que se abre una aplicación."], ["Minimizar", "esconder una ventana por ahora sin cerrarla."], ["Barra de tareas / Dock", "la fila de íconos de aplicaciones abajo en la pantalla (barra de tareas en Windows, Dock en Mac)."]],
          slides: [
            { title: "Abrir una aplicación", bullets: ["Windows: botón Inicio, escribe el nombre", "Mac: lupa (Spotlight), escribe el nombre"] },
            { title: "Botones de ventana en Windows", bullets: ["Arriba a la derecha", "Guion = minimizar, cuadrado = maximizar, X = cerrar"] },
            { title: "Botones de ventana en una Mac", bullets: ["Arriba a la izquierda", "Rojo = cerrar, amarillo = minimizar, verde = pantalla completa"] },
            { title: "Traerla de vuelta", bullets: ["Haz clic en su ícono en la barra de tareas (Windows)", "O en el Dock (Mac)"] }
          ],
          tryIt: "Abre el Bloc de notas (Windows) o TextEdit (Mac) escribiendo su nombre en Inicio o en Spotlight. Minimízalo, tráelo de vuelta desde la barra de tareas o el Dock y luego haz que llene la pantalla.",
          youCanNow: "abrir cualquier aplicación por su nombre, moverte entre ventanas y cerrarlas.",
          quickCheck: [
            { objective: "O4", q: "En Windows, ¿qué hace el botón cuadrado arriba a la derecha de una ventana?", options: ["Cierra la ventana", "Esconde la ventana", "Abre Spotlight", "Hace que la ventana llene la pantalla"], answer: 3, why: "El cuadrado es maximizar; el guion esconde la ventana y la X la cierra." },
            { objective: "O4", q: "Minimizaste tu aplicación para escribir y ahora la quieres de vuelta. ¿Qué harías?", options: ["Hacer clic en su ícono en la barra de tareas (Windows) o en el Dock (Mac)", "Apagar la computadora", "Abrir una carpeta nueva", "Presionar Retroceso"], answer: 0, why: "Las aplicaciones minimizadas esperan en la barra de tareas o en el Dock hasta que haces clic en ellas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guardar y encontrar archivos en carpetas",
          minutes: 5,
          goal: "Guardar una nota en una carpeta que hiciste y encontrarla de nuevo.",
          text: [
            "Un archivo es una cosa guardada: una carta, una foto, una lista. Una carpeta guarda archivos, como un cajón de un archivero. La carpeta Documentos es un buen lugar para tus archivos.",
            "Para crear una carpeta: en Windows abre el Explorador de archivos (el ícono de la carpeta amarilla), haz clic en Documentos y elige Nuevo y luego Carpeta. En una Mac abre Finder (el ícono de la cara azul), haz clic en Documentos, abre el menú Archivo y elige Nueva carpeta. Escribe un nombre y presiona Enter o Return.",
            "Para guardar: presiona Ctrl+S (Command+S en una Mac), o abre el menú Archivo y elige Guardar. Se abre un cuadro; elige la carpeta, escribe un nombre de archivo claro como \"Preguntas para la Dra. Lee\" y haz clic en Guardar. Para encontrar un archivo después, abre el Explorador de archivos o Finder y busca en la carpeta, o escribe parte del nombre en la casilla de búsqueda."
          ],
          steps: ["Abre el Explorador de archivos (Windows) o Finder (Mac).", "Ve a Documentos y crea una carpeta nueva.", "En tu aplicación, presiona Ctrl+S (Command+S en Mac) o usa Archivo y luego Guardar.", "Elige la carpeta, escribe un nombre claro y haz clic en Guardar.", "Para encontrarlo: abre la carpeta, o busca parte del nombre."],
          words: [["Archivo", "una cosa guardada, como una carta o una foto."], ["Carpeta", "un lugar que guarda archivos, como un cajón."], ["Explorador de archivos / Finder", "la aplicación para ver archivos y carpetas (Windows / Mac)."]],
          slides: [
            { title: "Archivos y carpetas", bullets: ["Archivo = una cosa guardada", "Carpeta = un cajón que guarda archivos", "Documentos es un buen lugar"] },
            { title: "Crear una carpeta", bullets: ["Windows: Explorador de archivos, Documentos, Nuevo, Carpeta", "Mac: Finder, Documentos, Archivo, Nueva carpeta"] },
            { title: "Guarda con un nombre claro", bullets: ["Ctrl+S (Command+S en Mac) o Archivo, Guardar", "Elige la carpeta, ponle nombre, haz clic en Guardar"] },
            { title: "Encuéntralo de nuevo", bullets: ["Abre la carpeta", "O busca parte del nombre"] }
          ],
          tryIt: "Crea una carpeta llamada \"Práctica\" en Documentos. Escribe una lista corta en el Bloc de notas o TextEdit, guárdala en Práctica como \"Mi primera nota\", cierra la aplicación y luego encuentra y abre el archivo otra vez.",
          youCanNow: "crear carpetas, guardar archivos con nombres claros y encontrarlos de nuevo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un archivo?", options: ["Una cosa guardada, como una carta, una foto o una lista", "Un cajón que guarda carpetas", "La aplicación que abre internet", "El botón de encendido"], answer: 0, why: "Un archivo es una cosa guardada; una carpeta guarda archivos." },
            { objective: "O5", q: "Terminaste una nota y la quieres conservar. ¿Qué harías?", options: ["Cerrar la aplicación sin guardar", "Apagar la computadora", "Desconectar el teclado", "Presionar Ctrl+S (Comando+S en Mac), elegir la carpeta, escribir un nombre claro y hacer clic en Guardar"], answer: 3, why: "Guardar pone la nota en una carpeta con un nombre para que la encuentres después." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mantener tu computadora en buen estado",
          minutes: 4,
          goal: "Instalar actualizaciones, reiniciar y apagar de la forma correcta, y saber dónde pedir ayuda.",
          text: [
            "Las actualizaciones arreglan problemas y cierran agujeros de seguridad. En Windows, abre Configuración y elige Windows Update. En una Mac, abre Configuración del Sistema y elige General y luego Actualización de software. Instala las actualizaciones cuando te lo pida y deja que la computadora se reinicie.",
            "Si la computadora va lenta o algo se congela, guarda tu trabajo y reiníciala. Eso arregla muchos problemas. Para apagar en Windows: Inicio, luego el ícono de encendido, luego Apagar. En una Mac: el menú Apple arriba a la izquierda, luego Apagar. No la desconectes ni mantengas presionado el botón de encendido a menos que esté totalmente trabada.",
            "Si una ventana emergente dice que tu computadora tiene un virus y da un número de teléfono, no llames; ciérrala. Pide ayuda a alguien de confianza, a una sesión de ayuda técnica de la biblioteca o a la tienda donde compraste la computadora."
          ],
          steps: ["Busca actualizaciones: Windows Update (Windows) o Actualización de software (Mac).", "Instálalas y deja que la computadora se reinicie.", "¿Lenta o congelada? Guarda y reinicia.", "Apagar: Inicio, ícono de encendido, Apagar (Windows) o menú Apple, Apagar (Mac).", "¿Necesitas ayuda? Una persona de confianza, la ayuda técnica de la biblioteca o la tienda."],
          words: [["Actualización", "un arreglo gratuito del fabricante que mejora la seguridad y las funciones."], ["Reiniciar", "apagar y volver a encender la computadora en un solo paso."], ["Apagar", "apagar del todo la computadora de la forma correcta."]],
          sources: [{ name: "FTC: Cómo detectar, evitar y denunciar las estafas de soporte técnico", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" }],
          slides: [
            { title: "Instala las actualizaciones", bullets: ["Windows: Configuración, Windows Update", "Mac: Configuración del Sistema, General, Actualización de software"] },
            { title: "Reiniciar arregla mucho", bullets: ["¿Lenta o congelada? Guarda y luego reinicia"] },
            { title: "Apaga de la forma correcta", bullets: ["Windows: Inicio, ícono de encendido, Apagar", "Mac: menú Apple, Apagar", "No la desconectes sin más"] },
            { title: "Pedir ayuda", bullets: ["Nunca llames a números de ventanas de virus", "Pregunta a alguien de confianza o a la ayuda técnica de la biblioteca"] }
          ],
          tryIt: "Tarea final: enciende e inicia sesión, crea una carpeta Práctica, escribe y guarda una nota corta con mayúsculas en el Bloc de notas o TextEdit, ciérrala, encuéntrala y ábrela de nuevo, busca actualizaciones y luego apaga de la forma correcta.",
          youCanNow: "usar una computadora de principio a fin: iniciar sesión, trabajar, guardar, encontrar tus archivos y apagar con seguridad.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde encuentras las actualizaciones en una computadora con Windows?", options: ["En la Papelera de reciclaje", "En Configuración, en Windows Update", "En el reloj de la barra de tareas", "En el Bloc de notas"], answer: 1, why: "Las actualizaciones de Windows están en Configuración, en Windows Update." },
            { objective: "O6", q: "Terminaste por hoy en una computadora con Windows. ¿Qué harías?", options: ["Desconectar el enchufe", "Mantener presionado el botón de encendido", "Hacer clic en Inicio, luego en el ícono de encendido y luego en Apagar", "Cerrar la tapa mientras una aplicación está guardando"], answer: 2, why: "Apagar desde el menú es la forma correcta; desconectar puede causar problemas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Aplicaciones, archivos y cuidado",
        questions: [
          { objective: "O4", q: "En Windows, ¿cómo abres una aplicación que no ves?", options: ["Apagando la pantalla", "Desconectando la computadora", "Presionando Retroceso", "Haciendo clic en Inicio y escribiendo su nombre"], answer: 3, why: "La búsqueda de Inicio encuentra cualquier aplicación por su nombre." },
          { objective: "O4", q: "En una Mac, el botón rojo arriba a la izquierda de una ventana:", options: ["La pone en pantalla completa", "La esconde", "La cierra", "La imprime"], answer: 2, why: "Rojo cierra, amarillo minimiza, verde llena la pantalla." },
          { objective: "O5", q: "¿Qué es una carpeta?", options: ["Un tipo de teclado", "Un lugar que guarda archivos, como un cajón", "Una actualización", "Una página web"], answer: 1, why: "Las carpetas mantienen los archivos ordenados." },
          { objective: "O5", q: "¿Qué teclas guardan tu trabajo en Windows?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S guarda (Command+S en una Mac)." },
          { objective: "O6", q: "La computadora va lenta y un programa se congeló. Un buen primer paso es:", options: ["Llamar a un número de una ventana emergente", "Guardar tu trabajo y reiniciar", "Echarle agua", "Comprar una computadora nueva"], answer: 1, why: "Reiniciar arregla muchos problemas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades básicas de computación",
    questions: [
      { objective: "O1", q: "¿Qué parte miras para ver tu trabajo?", options: ["El cable de corriente", "El ratón", "La pantalla (monitor)", "El teclado"], answer: 2, why: "La pantalla muestra lo que hace la computadora." },
      { objective: "O1", q: "Una computadora portátil es:", options: ["Un cargador de teléfono", "Un tipo de ratón", "Una impresora", "Una computadora que se abre, con pantalla y teclado juntos"], answer: 3, why: "Las portátiles son todo en uno y se pueden llevar." },
      { objective: "O1", q: "Después de que la computadora se enciende, normalmente:", options: ["La desconectas", "Inicias sesión con una contraseña o PIN", "Presionas Bloq Mayús", "Cierras la tapa"], answer: 1, why: "Iniciar sesión le dice a la computadora que eres tú." },
      { objective: "O2", q: "El puntero es:", options: ["Una carpeta", "El botón de encendido", "La pequeña flecha que se mueve con el ratón", "Una tecla"], answer: 2, why: "El puntero sigue al ratón." },
      { objective: "O2", q: "Tu ratón llega al borde de la mesa. ¿Qué haces?", options: ["Lo volteas", "Lo presionas más fuerte", "Reinicias la computadora", "Lo levantas y lo pones de nuevo en el centro"], answer: 3, why: "Levantar el ratón no mueve el puntero." },
      { objective: "O2", q: "Un clic derecho muestra:", options: ["Solo las opciones de encendido", "Un menú corto de opciones", "Una computadora nueva", "Nunca nada"], answer: 1, why: "El clic derecho abre un menú." },
      { objective: "O2", q: "En un panel táctil, ¿cómo te desplazas?", options: ["Presionando Shift", "Tocando el botón de encendido", "Deslizando dos dedos hacia arriba o abajo", "Cerrando la tapa"], answer: 2, why: "Dos dedos desplazan en un panel táctil." },
      { objective: "O3", q: "La línea que parpadea donde va lo que escribes es el:", options: ["Monitor", "Carpeta", "Dock", "Cursor"], answer: 3, why: "El cursor muestra dónde aparecerán las letras." },
      { objective: "O3", q: "Bloq Mayús (Caps Lock):", options: ["Borra una palabra", "Pone todas las letras en mayúscula hasta que la presionas otra vez", "Guarda el archivo", "Apaga la computadora"], answer: 1, why: "Deja fijas las mayúsculas." },
      { objective: "O3", q: "¿Qué atajo deshace un error en Windows?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z es deshacer (Command+Z en Mac)." },
      { objective: "O3", q: "Enter (Return en Mac) se usa para:", options: ["Apagar la pantalla", "Borrar una letra", "Hacer una mayúscula", "Empezar una línea nueva"], answer: 3, why: "Enter empieza una línea nueva o dice adelante." },
      { objective: "O4", q: "En una Mac, ¿cómo puedes abrir una aplicación por su nombre?", options: ["Presionando el botón de encendido", "Haciendo clic en la lupa (Spotlight) y escribiéndolo", "Haciendo clic derecho en la pantalla", "Manteniendo Shift"], answer: 1, why: "Spotlight encuentra aplicaciones por su nombre." },
      { objective: "O4", q: "En Windows, la X arriba a la derecha de una ventana:", options: ["La cierra", "La agranda", "La guarda", "La esconde"], answer: 0, why: "La X cierra la ventana." },
      { objective: "O4", q: "Una ventana minimizada va a:", options: ["La barra de tareas (Windows) o el Dock (Mac)", "La papelera para siempre", "La impresora", "Internet"], answer: 0, why: "Haz clic en su ícono ahí para traerla de vuelta." },
      { objective: "O5", q: "¿Cuál es el mejor nombre de archivo?", options: ["Preguntas para la Dra. Lee", "asdf", "Sin título", "1"], answer: 0, why: "Un nombre claro te ayuda a encontrarlo después." },
      { objective: "O5", q: "La aplicación para ver archivos en Windows es:", options: ["El Explorador de archivos", "Spotlight", "El Dock", "Safari"], answer: 0, why: "El Explorador de archivos muestra archivos y carpetas." },
      { objective: "O5", q: "No recuerdas dónde guardaste un archivo. Puedes:", options: ["Buscar parte de su nombre", "Reiniciar hasta que aparezca", "Comprar una computadora nueva", "Desconectar el ratón"], answer: 0, why: "La búsqueda encuentra archivos por su nombre." },
      { objective: "O6", q: "¿Por qué instalar las actualizaciones?", options: ["Arreglan problemas y cierran agujeros de seguridad", "Borran tus archivos", "Cuestan dinero cada vez", "Hacen lenta la computadora para siempre"], answer: 0, why: "Las actualizaciones mejoran la seguridad y arreglan problemas." },
      { objective: "O6", q: "¿Cómo apagas una Mac de la forma correcta?", options: ["Menú Apple y luego Apagar", "Sacando el enchufe", "Cerrando la ventana", "Presionando Bloq Mayús"], answer: 0, why: "Usa el menú Apple para apagar con seguridad." },
      { objective: "O6", q: "Una ventana emergente dice que tienes un virus y que llames a un número. Debes:", options: ["No llamar; cerrarla y preguntar a alguien de confianza", "Llamar enseguida", "Darles tu contraseña", "Pagar con una tarjeta de regalo"], answer: 0, why: "Las advertencias reales nunca piden llamar a un número." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Encender e iniciar sesión",
        objective: "O1",
        notYet: "Necesita ayuda para encender la computadora o iniciar sesión.",
        meets: "Enciende la computadora e inicia sesión sin ayuda.",
        exceeds: "Además, nombra las partes principales de la computadora."
      },
      {
        name: "Carpeta y nota guardada",
        objective: "O5",
        notYet: "Falta la carpeta Práctica o la nota guardada, o la nota tiene un nombre como Sin título.",
        meets: "Una carpeta Práctica en Documentos guarda la nota, con un nombre claro.",
        exceeds: "Encuentra el archivo de nuevo con la casilla de búsqueda además de con la carpeta."
      },
      {
        name: "Escribir la nota",
        objective: "O3",
        notYet: "Falta la nota, o las oraciones no tienen mayúsculas.",
        meets: "Una nota corta con mayúscula al comienzo de cada oración y los errores corregidos.",
        exceeds: "Además, usa bien signos como ¿? o ¡! y usa Ctrl+Z (Comando+Z) para deshacer."
      },
      {
        name: "Abrir y cerrar la aplicación",
        objective: "O4",
        notYet: "No puede abrir el Bloc de notas o TextEdit, o no puede cerrarlo.",
        meets: "Abre la aplicación por su nombre, la cierra y luego encuentra y abre el archivo guardado.",
        exceeds: "Además, minimiza la ventana y la trae de vuelta desde la barra de tareas o el Dock."
      },
      {
        name: "Apagar",
        objective: "O6",
        notYet: "La computadora se desconecta o se mantiene presionado el botón de encendido.",
        meets: "Apaga de la forma correcta desde el menú Inicio o el menú Apple.",
        exceeds: "Además, busca actualizaciones antes de apagar."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la tarea final",
      "Participantes que dicen haber usado una computadora por su cuenta, por ejemplo en una biblioteca o un centro de empleo, en los 30 días después del curso (encuesta de seguimiento)",
      "Participantes que toman un siguiente curso, como Fundamentos de internet o Fundamentos de Microsoft 365 y Google Docs",
      "Participantes que dicen haber terminado una tarea real en una computadora, como una carta o una solicitud de empleo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora de escritorio o portátil con Windows o Mac, con ratón o panel táctil",
      "Un usuario para iniciar sesión en la computadora (de casa, o del personal de la biblioteca o del laboratorio)",
      "Bloc de notas (Windows) o TextEdit (Mac), que ya vienen en la computadora",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo extra para practicar con el ratón"
    ],
    facilitatorNotes: [
      "Prepare los inicios de sesión antes de la clase para que la primera lección no se vaya en las cuentas.",
      "Dé tiempo extra con el ratón a quienes empiezan; deje que practiquen el clic y el doble clic en los íconos del escritorio antes de seguir.",
      "Agrupe por separado a quienes usan Windows y Mac, o muestre en la pantalla los dos conjuntos de pasos.",
      "En las computadoras compartidas, pida que borren sus archivos de práctica y cierren sesión al final, y recuerde que no deben guardar información privada allí.",
      "Deje que cada persona presione cada tecla y haga clic en cada botón por sí misma; evite quitarle el ratón."
    ]
  }
};

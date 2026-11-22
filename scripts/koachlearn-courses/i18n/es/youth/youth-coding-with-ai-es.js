"use strict";

// Koach Learn course (Spanish translation of youth-coding-with-ai). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Python keywords and syntax stay in English; only the text inside quotes and comments is translated.

module.exports = {
  id: "youth-coding-with-ai-es",
  lang: "es",
  translationOf: "youth-coding-with-ai",
  category: "Youth",
  name: "Introducción a la programación con IA",
  skills: "Ejecutar Python en un cuaderno en línea gratuito, Usar variables e input, Tomar decisiones con if, Repetir con bucles, Pedirle a la IA que explique y arregle código",
  outcome: "escribir y ejecutar un pequeño juego de preguntas en Python en un cuaderno en línea gratuito, usar un asistente de IA para que te explique el código y te ayude a arreglar errores, y explicar qué hace cada línea de tu programa.",
  about: [
    "Este curso es para adolescentes que nunca han programado, o que lo intentaron una vez y se atoraron. No necesitas ser bueno en matemáticas. Necesitas curiosidad y unos cinco minutos por lección.",
    "Vas a escribir código Python de verdad en Google Colab, un cuaderno gratuito que funciona en el navegador web, así que puedes usar una computadora de la escuela o de la biblioteca. Vas a aprender las piezas básicas del código y luego a usar un asistente de IA como un tutor paciente: para que te explique código, encuentre errores y sugiera ideas, mientras tú sigues siendo quien entiende y escribe el programa.",
    "Antes de registrarte en cualquier herramienta, revisa las reglas de tu escuela sobre el uso de la IA y la edad mínima de la herramienta, y habla con tu madre, padre o tutor. Cada lección termina con una tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Crea un juego de preguntas en Python en Google Colab con al menos 5 preguntas sobre un tema que te guste (un juego, un deporte, una banda, una materia escolar). Debe preguntar el nombre del jugador, hacer las preguntas, llevar el puntaje e imprimir un mensaje final. Usa un asistente de IA para que te explique o te ayude a arreglar al menos una parte, y luego escribe un comentario arriba de cada parte que diga con tus propias palabras lo que hace.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes que nunca han programado, o que lo intentaron una vez y se atoraron, incluidos los que no se consideran buenos para las matemáticas.",
    startingPoint: "Usan teléfonos, aplicaciones y juegos todos los días y saben usar un navegador web. No han escrito ni ejecutado un programa, y quizás han visto a la IA escribir código sin saber cómo funciona.",
    gap: "Programar abre puertas a empleos de tecnología y hace que la IA sea menos misteriosa, pero copiar código de la IA no enseña nada y rompe las reglas de la escuela en muchas clases. Los jóvenes necesitan escribir y ejecutar Python de verdad por su cuenta, usando la IA como tutor que explica el código y ayuda a arreglar errores.",
    constraints: [
      "Límites de edad: Colab necesita una cuenta de Google y las herramientas de IA tienen edad mínima; la madre, el padre o el tutor participa con los menores de 18",
      "Las reglas de IA cambian según la escuela; en los trabajos con calificación quizás no se permita la IA",
      "Dispositivos: una computadora de la escuela, de la biblioteca o de casa con navegador web; no hay que instalar nada",
      "Privacidad: nada de contraseñas, direcciones, identificaciones ni números de teléfono pegados en herramientas de IA",
      "Principiantes: palabras sencillas, cada término explicado, unos cinco minutos por lección"
    ],
    prerequisites: "Ninguno. \"¿Qué es la IA? (para jóvenes)\" es un buen primer curso."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tus propias palabras", action: "explicar qué son el código y un programa, y cómo usar la IA como tutor y no para que haga el trabajo por ti, dentro de las reglas de tu escuela", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Usando una cuenta de Google que tengas permiso de usar", action: "abrir un cuaderno de Google Colab y ejecutar código Python que muestre texto", standard: "sin ayuda, con el resultado apareciendo debajo de la celda" },
    { id: "O3", condition: "Con un juego de una pregunta por construir", action: "escribir código Python que use una variable, input, if y else, y un bucle", standard: "para que funcione bien tanto con una respuesta correcta como con una incorrecta" },
    { id: "O4", condition: "Con unas pocas líneas de código", action: "pedirle a un asistente de IA que explique el código línea por línea, y luego cambiar una cosa, predecir el resultado y ejecutarlo", standard: "sin pegar información privada" },
    { id: "O5", condition: "Con un mensaje de error de Python", action: "encontrar la línea del problema, arreglar el bug con ayuda de la IA si hace falta y ejecutar tú mismo la corrección", standard: "hasta que el programa funcione sin errores" },
    { id: "O6", condition: "Partiendo de un plan escrito como comentarios", action: "crear un juego de 5 preguntas una parte a la vez y decir cómo usaste la IA", standard: "con el nombre del jugador, el puntaje, un mensaje final y un comentario arriba de cada parte con tus propias palabras" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tus primeras líneas de código",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es el código y dónde entra la IA",
          minutes: 4,
          goal: "Explicar qué es un programa y cómo un asistente de IA te puede ayudar a aprender a programar.",
          text: [
            "El código es una lista de instrucciones que una computadora sigue exactamente y en orden. Un programa es un conjunto de esas instrucciones que hace un trabajo, como un juego, una app o una calculadora. Python es un lenguaje de programación popular porque sus palabras se parecen mucho al inglés.",
            "Los asistentes de IA como ChatGPT, Microsoft Copilot y Google Gemini pueden escribir y explicar código. Eso es útil, pero si copias código que no entiendes, no aprendes nada y no puedes arreglarlo cuando falla. En este curso, la IA es tu tutor, no alguien que hace el trabajo por ti.",
            "Las escuelas tienen reglas distintas sobre la IA. Algunas clases la permiten para practicar pero no para trabajos con calificación. Revisa siempre las reglas de tu maestro y di cuándo usaste IA. Muchas herramientas de IA también tienen una edad mínima, así que lee los términos de la herramienta y pregúntale a tu madre, padre o tutor antes de registrarte."
          ],
          words: [["Código", "instrucciones escritas para que una computadora las siga."], ["Programa", "un conjunto de instrucciones que hace un trabajo."], ["Python", "un lenguaje de programación popular y fácil de leer."]],
          slides: [
            { title: "El código son instrucciones", bullets: ["La computadora las sigue exactamente y en orden", "Un programa es código que hace un trabajo", "Python se parece mucho al inglés"] },
            { title: "La IA es tu tutor", bullets: ["Puede explicar el código línea por línea", "Puede ayudar a encontrar errores", "No copies código que no entiendes"] },
            { title: "Antes de empezar", bullets: ["Revisa las reglas de IA de tu escuela", "Revisa la edad mínima de la herramienta", "Pregunta a tu madre, padre o tutor antes de registrarte"] }
          ],
          tryIt: "Escribe un programa pequeño que te gustaría crear algún día, como un juego de preguntas sobre tu videojuego favorito o una calculadora de propinas para tu primer trabajo. Luego escribe una oración sobre cómo la IA te podría ayudar a aprenderlo sin hacerlo por ti.",
          youCanNow: "decir qué son el código y un programa, y explicar cómo usar la IA como tutor en vez de como atajo.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué Python es un primer lenguaje de programación popular?", options: ["Solo funciona en teléfonos", "No necesita computadora", "Sus palabras se parecen mucho al inglés", "Se escribe solo"], answer: 2, why: "Las palabras de Python se parecen mucho al inglés, y eso lo hace más fácil de leer." },
            { objective: "O1", q: "Un amigo dice: \"Haz que la IA escriba todo tu programa y entrégalo\". ¿Qué le dices?", options: ["Voy a usar la IA como tutor y escribir yo el código, siguiendo las reglas de mi maestro", "Buena idea; nadie se va a dar cuenta", "Solo si se ve difícil", "Lo voy a copiar pero cambiando los nombres"], answer: 0, why: "Copiar código que no entiendes no te enseña nada y puede romper las reglas de la escuela." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ejecutar tu primer código Python en Google Colab",
          minutes: 5,
          goal: "Abrir un cuaderno gratuito de Colab y ejecutar una línea de Python.",
          text: [
            "Google Colab es un cuaderno gratuito que ejecuta Python en tu navegador web. No necesitas instalar nada. Necesitas una cuenta de Google. Revisa sus reglas de edad y, si tienes menos de 18 años, pregúntale primero a tu madre, padre o tutor; una cuenta de Google de la escuela puede servir si tu escuela permite Colab.",
            "Un cuaderno está hecho de celdas. Una celda de código es un cuadro donde escribes Python. Presionas el botón de reproducir junto a la celda (o Shift y Enter) para ejecutarla, y el resultado aparece debajo.",
            "El primer comando que aprenden la mayoría de los programadores es print. Muestra palabras en la pantalla. El texto va entre comillas, así: print(\"Hola, estoy aprendiendo Python\")."
          ],
          steps: ["Abre un navegador web y entra a colab.research.google.com.", "Inicia sesión con una cuenta de Google que tengas permiso de usar.", "Crea un cuaderno nuevo.", "Haz clic en la primera celda de código y escribe: print(\"Hola, estoy aprendiendo Python\")", "Presiona el botón de reproducir o Shift y Enter. Lee el resultado debajo de la celda."],
          words: [["Cuaderno", "una página donde escribes y ejecutas código en cuadros pequeños llamados celdas."], ["Celda", "un cuadro de un cuaderno donde escribes código."], ["Resultado", "lo que muestra el programa después de ejecutarse."]],
          slides: [
            { title: "Google Colab", bullets: ["Python gratis en tu navegador web", "Nada que instalar", "Necesita una cuenta de Google que puedas usar"] },
            { title: "Cuadernos y celdas", bullets: ["Escribe código en una celda", "Presiona reproducir o Shift + Enter", "El resultado aparece abajo"] },
            { title: "Tu primer comando", bullets: ["print(\"Hola, estoy aprendiendo Python\")", "El texto va entre comillas", "print lo muestra en la pantalla"] }
          ],
          tryIt: "En un cuaderno nuevo de Colab, imprime tres líneas: tu nombre, tu canción o juego favorito y una meta para este curso. Ejecuta la celda y revisa que aparezcan las tres líneas.",
          youCanNow: "abrir un cuaderno de Colab, escribir Python en una celda, ejecutarla y leer el resultado.",
          quickCheck: [
            { objective: "O2", q: "En Python, ¿qué hace print?", options: ["Envía tu código a una impresora", "Muestra palabras o valores en la pantalla", "Borra una celda", "Guarda el cuaderno"], answer: 1, why: "print muestra texto o valores debajo de la celda cuando se ejecuta." },
            { objective: "O2", q: "Tienes 14 años y quieres usar Colab en casa. ¿Qué haces primero?", options: ["Crear una cuenta con una edad falsa", "Usar la cuenta de un desconocido", "No usar Colab", "Revisar las reglas de edad y preguntarle a tu madre, padre o tutor, o usar una cuenta de la escuela permitida"], answer: 3, why: "Colab necesita una cuenta de Google; revisa sus reglas y pide ayuda a tu madre, padre o tutor si tienes menos de 18 años." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Variables, input, if y bucles",
          minutes: 6,
          goal: "Usar una variable, pedir datos con input, tomar una decisión con if y repetir con un bucle.",
          text: [
            "Una variable es una caja con nombre que guarda un valor. score = 0 crea una caja llamada score y pone 0 adentro. Después, score = score + 1 suma un punto.",
            "input le pide al jugador que escriba algo: name = input(\"¿Cómo te llamas? \"). Una instrucción if toma una decisión: if answer == \"París\": print(\"¡Correcto!\") else: print(\"No exactamente\"). Dos signos de igual significan \"es lo mismo que\". Las líneas debajo de if y else van hacia adentro con espacios; esto se llama sangría, y Python la necesita.",
            "Un bucle repite código. for i in range(3): print(\"¡Vamos, equipo!\") imprime el grito tres veces. Estas cuatro ideas, variables, input, if y bucles, alcanzan para crear un juego de preguntas."
          ],
          steps: ["Crea una variable: score = 0", "Pide datos: name = input(\"¿Cómo te llamas? \")", "Toma una decisión con if y else, con sangría en las líneas debajo de cada uno.", "Repite algo con: for i in range(3):"],
          words: [["Variable", "una caja con nombre que guarda un valor."], ["Input", "algo que el usuario escribe mientras el programa se ejecuta."], ["Instrucción if", "código que se ejecuta solo cuando algo es verdadero."], ["Bucle", "código que se repite."], ["Sangría", "espacios al inicio de una línea que muestran qué líneas van juntas."]],
          slides: [
            { title: "Las variables guardan valores", bullets: ["score = 0", "score = score + 1 suma un punto"] },
            { title: "Input e if", bullets: ["name = input(\"¿Cómo te llamas? \")", "if answer == \"París\": entonces imprime Correcto", "== significa \"es lo mismo que\""] },
            { title: "Los bucles repiten", bullets: ["for i in range(3): repite 3 veces", "Pon sangría en las líneas dentro del bucle"] },
            { title: "Cuatro piezas básicas", bullets: ["Variables, input, if, bucles", "Alcanzan para un juego de preguntas"] }
          ],
          tryIt: "Escribe un juego de una pregunta: pide el nombre del jugador, haz una pregunta sobre tu materia o juego favorito y usa if y else para imprimir \"Correcto\" o \"No exactamente\". Ejecútalo dos veces, una con la respuesta correcta y otra con una incorrecta.",
          youCanNow: "usar una variable, input, una instrucción if y un bucle en un programa pequeño de Python.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es la sangría en Python?", options: ["Un tipo de error", "Los espacios que meten las líneas hacia adentro debajo de un if, un else o un bucle", "Una línea de comentario", "El botón de ejecutar"], answer: 1, why: "La sangría muestra qué líneas van debajo de un if, un else o un bucle, y Python la necesita." },
            { objective: "O3", q: "Quieres que el juego sume un punto por cada respuesta correcta. ¿Qué línea escribes debajo del if?", options: ["score = score + 1", "print(score)", "score == 1", "input(score)"], answer: 0, why: "score = score + 1 suma un punto al valor guardado en score." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tus primeras líneas de código",
        questions: [
          { objective: "O1", q: "¿Qué es un programa?", options: ["Un conjunto de instrucciones que hace un trabajo", "Un tipo de teclado", "La dirección de un sitio web", "Una consola de videojuegos"], answer: 0, why: "Un programa es código, un conjunto de instrucciones, que hace un trabajo." },
          { objective: "O1", q: "Tu clase permite la IA para practicar pero no para la tarea con calificación. ¿Qué haces?", options: ["Usar la IA para la tarea de todos modos", "Usar la IA para practicar y hacer tú el trabajo con calificación", "No volver a programar nunca", "Pedirle a un amigo que use la IA por ti"], answer: 1, why: "Seguir las reglas de tu maestro es parte de usar la IA con honestidad." },
          { objective: "O2", q: "En Colab, ¿cómo ejecutas una celda de código?", options: ["Cerrando el navegador", "Imprimiendo la página", "Presionando el botón de reproducir o Shift y Enter", "Reiniciando la computadora"], answer: 2, why: "El botón de reproducir o Shift y Enter ejecuta la celda." },
          { objective: "O3", q: "¿Qué hace score = score + 1?", options: ["Borra el puntaje", "Imprime la palabra score", "Le pide un puntaje al jugador", "Suma uno al valor guardado en score"], answer: 3, why: "Toma el puntaje actual y le suma uno." },
          { objective: "O3", q: "¿Qué hace for i in range(3):?", options: ["Repite 3 veces el código con sangría", "Hace 3 preguntas", "Crea 3 variables", "Detiene el programa"], answer: 0, why: "Un bucle for con range(3) repite tres veces el código que tiene adentro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Programar con un ayudante de IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedirle a la IA que explique código",
          minutes: 5,
          goal: "Pedirle a un asistente de IA que explique un fragmento de código línea por línea y comprobar que lo entiendes.",
          text: [
            "Pega unas líneas de código en un asistente de IA y pregunta: \"Explica este código Python línea por línea para un principiante. Usa palabras sencillas.\" Una buena explicación te dice qué hace cada línea y por qué.",
            "Luego pon a prueba lo que entendiste. Cambia una cosa en el código, adivina qué va a pasar y ejecútalo. Si acertaste, lo entiendes. Si no, pregúntale a la IA: \"Cambié esto y esperaba aquello. ¿Por qué hizo otra cosa?\"",
            "No pegues información privada en una herramienta de IA: nada de contraseñas, la dirección de tu casa, números de identificación escolar ni números de teléfono. El código de un proyecto de clase no necesita nada de eso."
          ],
          steps: ["Copia de 3 a 10 líneas de código.", "Pregunta: \"Explica este código Python línea por línea para un principiante.\"", "Cambia una cosa y adivina qué va a pasar.", "Ejecútalo y compara. Haz otra pregunta si no acertaste."],
          words: [["Explicar línea por línea", "recorrer el código una línea a la vez y decir qué hace cada una."]],
          slides: [
            { title: "Pide una explicación", bullets: ["Pega unas líneas", "\"Explica esto línea por línea para un principiante\"", "Pide palabras sencillas"] },
            { title: "Pon a prueba lo que entiendes", bullets: ["Cambia una cosa", "Adivina qué va a pasar", "Ejecútalo y compara"] },
            { title: "Deja fuera la información privada", bullets: ["Nada de contraseñas ni números de identificación escolar", "Nada de tu dirección ni tu número de teléfono"] }
          ],
          tryIt: "Pega tu juego de una pregunta de la lección 3 en un asistente de IA y pídele que explique cada línea. Luego cambia la respuesta correcta por otra, adivina qué va a pasar y ejecútalo.",
          youCanNow: "obtener de la IA una explicación clara del código línea por línea y comprobar que de verdad lo entiendes.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace buena la explicación de código que da la IA?", options: ["Que sea lo más larga posible", "Que solo dé la respuesta", "Que diga qué hace cada línea y por qué", "Que lo reescriba todo"], answer: 2, why: "Una buena explicación dice qué hace cada línea y por qué, con palabras sencillas." },
            { objective: "O4", q: "Cambiaste una línea, adivinaste el resultado y el programa hizo otra cosa. ¿Qué sigue?", options: ["Borrar el programa", "Preguntarle a la IA: \"Cambié esto y esperaba aquello. ¿Por qué hizo otra cosa?\"", "Volver a adivinar sin ejecutarlo", "Pegar tu contraseña para que la IA lo revise"], answer: 1, why: "Una pregunta de seguimiento que explica lo que esperabas te ayuda a entender el código." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Encontrar y arreglar errores con IA",
          minutes: 5,
          goal: "Leer un mensaje de error y usar la IA para ayudarte a arreglar un bug.",
          text: [
            "Un bug es un error en el código. Cuando Python no puede ejecutar una línea, muestra un mensaje de error. La última línea del mensaje normalmente nombra el problema, como SyntaxError (algo está mal escrito) o IndentationError (los espacios al inicio de una línea están mal). También muestra el número de línea.",
            "Primero inténtalo tú: revisa esa línea buscando una comilla, un paréntesis, dos puntos o un espacio que falte. Si te atoras, pega el código y el error completo en un asistente de IA y pregunta: \"¿Qué significa este error y cómo lo arreglo? Explica por qué.\"",
            "La IA también puede equivocarse con el código. Ejecuta tú mismo la versión arreglada. Si el error cambia o sigue igual, dile a la IA exactamente qué pasó."
          ],
          steps: ["Lee la última línea del mensaje de error y el número de línea.", "Revisa esa línea buscando comillas, paréntesis, dos puntos o espacios que falten.", "Si te atoras, pega el código y el error completo en un asistente de IA.", "Pregunta qué significa y por qué funciona el arreglo.", "Ejecuta tú mismo el arreglo y revisa que funcione."],
          words: [["Bug", "un error en el código."], ["Mensaje de error", "la nota de Python que dice qué salió mal y en qué línea."], ["Depuración", "encontrar y arreglar bugs."]],
          slides: [
            { title: "A todos les pasan los bugs", bullets: ["Los mensajes de error son pistas, no fracasos", "Lee la última línea y el número de línea"] },
            { title: "Primero inténtalo tú", bullets: ["¿Falta una comilla o un paréntesis?", "¿Faltan los dos puntos después de if o for?", "¿Espacios incorrectos al inicio de una línea?"] },
            { title: "Luego pregúntale a la IA", bullets: ["Pega el código y el error completo", "Pregunta qué significa y por qué funciona el arreglo", "Ejecuta tú mismo el arreglo"] }
          ],
          tryIt: "En tu juego, borra a propósito los dos puntos después de la línea del if y ejecútalo. Lee el error. Pídele a un asistente de IA que te lo explique, arréglalo y vuelve a ejecutar el programa.",
          youCanNow: "leer un mensaje de error de Python, buscar el problema y usar la IA para entender y arreglar un bug.",
          quickCheck: [
            { objective: "O5", q: "¿Qué suele significar un SyntaxError?", options: ["La computadora está descompuesta", "No hay internet", "Tu respuesta estaba mal", "Algo está mal escrito, como unas comillas o dos puntos que faltan"], answer: 3, why: "Un SyntaxError significa que Python no puede leer algo que escribiste." },
            { objective: "O5", q: "Python muestra un error en la línea 4. ¿Qué revisas primero?", options: ["La línea 4, por si faltan comillas, un paréntesis, dos puntos o un espacio", "Solo la línea 1", "La velocidad de tu internet", "Nada; reinicias la computadora"], answer: 0, why: "El mensaje muestra el número de línea; revisa tú primero esa línea." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Crear tu juego de preguntas",
          minutes: 6,
          goal: "Planear y crear un juego de 5 preguntas con la IA como ayudante.",
          text: [
            "Los programas grandes se construyen con piezas pequeñas. Planea primero: qué dice el programa al inicio, qué pregunta, cómo lleva el puntaje y qué dice al final. Escribe el plan como comentarios cortos. Un comentario empieza con # y Python lo ignora.",
            "Construye una pieza a la vez y ejecuta el programa después de cada pieza. Si quieres una idea, pregúntale a la IA: \"¿Cómo podría hacer que mi juego le diga al jugador su puntaje sobre 5?\" Luego escríbelo tú y pídele a la IA que lo revise.",
            "Cuando funcione, pídele a un amigo o a alguien de tu familia que lo juegue. Observa dónde se confunde y mejóralo. Si lo entregas en la escuela, di cómo usaste la IA."
          ],
          steps: ["Escribe un plan como comentarios #: bienvenida, preguntas, puntaje, final.", "Programa la bienvenida y pregunta el nombre del jugador. Ejecútalo.", "Agrega una pregunta con if y else que cambie el puntaje. Ejecútalo.", "Agrega cuatro preguntas más. Ejecútalo.", "Imprime el puntaje final y un mensaje. Deja que alguien lo juegue."],
          words: [["Comentario", "una nota en el código que empieza con # y que Python ignora."], ["Plan", "una lista corta de lo que hará tu programa, en orden."]],
          slides: [
            { title: "Planea con comentarios", bullets: ["# bienvenida", "# hacer 5 preguntas", "# llevar el puntaje", "# mensaje final"] },
            { title: "Construye en piezas pequeñas", bullets: ["Agrega una pieza", "Ejecútalo", "Arréglalo y luego agrega la siguiente"] },
            { title: "La IA como ayudante", bullets: ["Pide ideas y luego escríbelo tú", "Pídele a la IA que revise tu código", "Di cómo usaste la IA en trabajos escolares"] },
            { title: "Pruébalo con un jugador real", bullets: ["Deja que un amigo lo juegue", "Observa dónde se confunde", "Mejóralo"] }
          ],
          tryIt: "Tarea final: crea un juego de preguntas en Python en Colab con al menos 5 preguntas sobre un tema que te guste. Pregunta el nombre del jugador, lleva el puntaje, imprime un mensaje final, usa la IA para explicar o arreglar una parte y escribe un comentario arriba de cada parte con tus propias palabras.",
          youCanNow: "planear, crear, probar y explicar un programa pequeño de Python, usando la IA como ayudante y no como reemplazo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un comentario en Python?", options: ["Una línea que muestra texto", "Un tipo de bucle", "Una línea que empieza con # y que Python ignora", "Un mensaje de error"], answer: 2, why: "Los comentarios empiezan con # y son notas para las personas, no instrucciones para Python." },
            { objective: "O6", q: "Terminaste el juego de preguntas. ¿Cuál es un buen siguiente paso?", options: ["No ejecutarlo nunca", "Borrar los comentarios", "Pedirle a la IA que lo reescriba todo", "Pedirle a un amigo que lo juegue y fijarte dónde se confunde"], answer: 3, why: "Ver a alguien jugar te muestra qué mejorar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Programar con un ayudante de IA",
        questions: [
          { objective: "O4", q: "¿Cuál es una buena forma de preguntarle a la IA sobre código que no entiendes?", options: ["\"Haz mi tarea\"", "\"Explica este código Python línea por línea para un principiante\"", "\"Código\"", "\"Hazlo más largo\""], answer: 1, why: "Una petición clara de explicación línea por línea te ayuda a aprender." },
          { objective: "O4", q: "¿Cómo puedes comprobar que de verdad entiendes un código?", options: ["Cambiar una cosa, adivinar el resultado y luego ejecutarlo", "Leerlo una vez rápido", "Borrarlo", "Pedirle a la IA que diga que lo entiendes"], answer: 0, why: "Predecir y probar muestra si de verdad lo entiendes." },
          { objective: "O5", q: "Python muestra un mensaje de error. ¿Dónde miras primero?", options: ["La primera palabra de la pantalla", "La barra de direcciones del navegador", "La última línea del mensaje y el número de línea", "El teclado"], answer: 2, why: "La última línea nombra el problema y el número de línea muestra dónde está." },
          { objective: "O5", q: "La IA te da un arreglo para tu bug. ¿Qué sigue?", options: ["Suponer que funciona", "Entregarlo sin ejecutarlo", "Borrar tu programa", "Ejecutarlo tú mismo y revisar que funcione"], answer: 3, why: "La IA puede equivocarse, así que tú pruebas el arreglo." },
          { objective: "O6", q: "En Python, ¿qué hace una línea que empieza con #?", options: ["Es un comentario que Python ignora", "Imprime un numeral", "Detiene el programa", "Crea un bucle"], answer: 0, why: "Las líneas que empiezan con # son comentarios para las personas, no instrucciones." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la programación con IA",
    questions: [
      { objective: "O1", q: "La mejor descripción del código es:", options: ["Instrucciones que una computadora sigue exactamente", "Una contraseña secreta", "Un tipo de música", "Una calificación escolar"], answer: 0, why: "El código es una lista de instrucciones para una computadora." },
      { objective: "O1", q: "¿Por qué es un problema copiar código de la IA que no entiendes?", options: ["Siempre es demasiado corto", "No aprendes nada y no puedes arreglarlo cuando falla", "Las computadoras no pueden ejecutar código de IA", "Cuesta dinero"], answer: 1, why: "Entender es la habilidad; el código copiado te deja atorado." },
      { objective: "O1", q: "Antes de registrarte en una herramienta de IA siendo adolescente, deberías:", options: ["Usar una fecha de nacimiento falsa", "Compartir tu contraseña con tus amigos", "Revisar la edad mínima de la herramienta y preguntarle a tu madre, padre o tutor", "No leer nada"], answer: 2, why: "Los límites de edad y la participación de tu madre o padre te mantienen seguro y dentro de las reglas." },
      { objective: "O2", q: "Google Colab te permite:", options: ["Solo ver videos", "Comprar juegos", "Enviar mensajes de texto", "Ejecutar Python en un navegador web sin instalar nada"], answer: 3, why: "Colab es un cuaderno en línea gratuito para ejecutar Python." },
      { objective: "O2", q: "En un cuaderno, una celda es:", options: ["Un cuadro donde escribes y ejecutas código", "La batería de un teléfono", "Un tipo de error", "Un bucle"], answer: 0, why: "Los cuadernos están hechos de celdas que contienen código." },
      { objective: "O2", q: "¿Qué línea muestra palabras en la pantalla en Python?", options: ["show Hola", "print(\"Hola\")", "say = Hola", "run Hola"], answer: 1, why: "print con texto entre comillas muestra el texto." },
      { objective: "O3", q: "Una variable es:", options: ["Un mensaje de error", "Un tipo de sitio web", "Una caja con nombre que guarda un valor", "Un bucle que nunca termina"], answer: 2, why: "Las variables guardan valores con un nombre, como score." },
      { objective: "O3", q: "¿Qué línea le pide al jugador que escriba su nombre?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"¿Cómo te llamas? \")"], answer: 3, why: "input le pide al usuario que escriba algo." },
      { objective: "O3", q: "En Python, == significa:", options: ["Es lo mismo que", "Sumar", "Guardar un valor", "Empezar un comentario"], answer: 0, why: "Dos signos de igual comparan dos valores." },
      { objective: "O3", q: "¿Por qué a Python le importa la sangría?", options: ["Hace el código colorido", "Muestra qué líneas van debajo de un if o un bucle", "Ahorra batería", "Es solo decoración"], answer: 1, why: "Las líneas con sangría pertenecen al if, else o bucle que tienen arriba." },
      { objective: "O3", q: "Quieres gritar \"¡Vamos, equipo!\" 5 veces. ¿Qué es lo mejor?", options: ["Una instrucción if", "Un comentario", "Un bucle for con range(5)", "Una variable llamada team"], answer: 2, why: "Un bucle repite código un número fijo de veces." },
      { objective: "O4", q: "¿Qué es seguro pegar en un asistente de IA?", options: ["La contraseña de tu escuela", "La dirección de tu casa", "Tu número de teléfono", "Diez líneas de código de tu juego de preguntas"], answer: 3, why: "El código de un proyecto no tiene información privada." },
      { objective: "O4", q: "Después de que la IA explica tu código, una buena forma de poner a prueba lo que entendiste es:", options: ["Cambiar una cosa, predecir y ejecutarlo", "Cerrar el cuaderno", "Solo pedir una explicación más larga", "Copiarlo sin cambios a otro cuaderno"], answer: 0, why: "Predecir y probar demuestra que lo entiendes." },
      { objective: "O5", q: "Un bug es:", options: ["Una buena función", "Un error en el código", "Un tipo de bucle", "Un cuaderno"], answer: 1, why: "Los bugs son errores; la depuración los arregla." },
      { objective: "O5", q: "IndentationError normalmente significa:", options: ["Se cayó tu internet", "Necesitas una computadora nueva", "Los espacios al inicio de una línea están mal", "El programa funcionó"], answer: 2, why: "Señala espacios incorrectos al inicio de una línea." },
      { objective: "O5", q: "Te atoraste con un error. ¿Qué deberías pegar en el asistente de IA?", options: ["Solo la palabra error", "Tu contraseña", "Nada; rendirte", "El código y el mensaje de error completo"], answer: 3, why: "El código y el error completo le dan a la IA lo que necesita para explicar el problema." },
      { objective: "O5", q: "La IA sugiere un arreglo pero el error cambia. Deberías:", options: ["Decirle a la IA exactamente qué pasó ahora", "Rendirte", "Entregarlo de todos modos", "Borrar Python"], answer: 0, why: "Las preguntas de seguimiento claras te ayudan a ti y a la IA a encontrar el problema real." },
      { objective: "O6", q: "¿Cuál es el mejor primer paso al crear un programa más grande?", options: ["Escribir todo de una vez", "Escribir un plan corto como comentarios", "Pedirle a la IA que lo escriba todo", "No hacer pruebas"], answer: 1, why: "Un plan divide el programa en piezas pequeñas." },
      { objective: "O6", q: "¿Por qué ejecutar tu programa después de agregar cada pieza pequeña?", options: ["Hace el código más largo", "Python lo exige", "Encuentras los errores temprano, cuando son fáciles de arreglar", "Guarda el archivo"], answer: 2, why: "Los pasos pequeños hacen fácil encontrar los bugs." },
      { objective: "O6", q: "Usaste la IA para ayudarte en un proyecto de programación de la escuela. ¿Qué deberías hacer?", options: ["Ocultarlo", "Decir que todo fue trabajo tuyo", "Borrar el proyecto", "Decir cómo usaste la IA, siguiendo las reglas de tu maestro"], answer: 3, why: "Ser honesto sobre el uso de la IA es parte de seguir las reglas de la escuela." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "El programa funciona",
        objective: "O2",
        notYet: "El programa no se ejecuta en Colab, o se detiene con un error.",
        meets: "El programa se ejecuta de principio a fin en Colab.",
        exceeds: "Además funciona si el jugador escribe la respuesta de otra forma, por ejemplo con mayúsculas."
      },
      {
        name: "Bloques básicos",
        objective: "O3",
        notYet: "Faltan input, if y else, o una variable de puntaje.",
        meets: "Pide el nombre del jugador, usa if y else en al menos 5 preguntas y guarda el puntaje en una variable.",
        exceeds: "Además usa un bucle para repetir una parte del juego."
      },
      {
        name: "Construido por partes",
        objective: "O6",
        notYet: "No hay plan ni mensaje final.",
        meets: "Un plan en comentarios, cinco preguntas y un mensaje final con el puntaje.",
        exceeds: "Un amigo lo jugó, y la persona mejoró una parte según lo que vio."
      },
      {
        name: "La IA como tutor",
        objective: "O4",
        notYet: "La IA escribió el programa, o no se dice cómo se usó la IA.",
        meets: "La IA explicó o ayudó a arreglar al menos una parte, y la persona dice cómo la usó.",
        exceeds: "La persona puede mostrar un cambio que predijo y probó después de la explicación de la IA."
      },
      {
        name: "Comentarios con palabras propias",
        objective: "O5",
        notYet: "Faltan comentarios o están copiados de la IA.",
        meets: "Un comentario arriba de cada parte dice con palabras propias lo que hace.",
        exceeds: "Además anota un bug que arregló y cómo."
      }
    ]
  },
  evaluation: {
    results: [
      "Jóvenes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Jóvenes que crean un segundo programa por su cuenta dentro de 30 días (encuesta de seguimiento)",
      "Jóvenes que se unen a un club, una clase o un campamento de programación dentro de 90 días",
      "Jóvenes que empiezan otro curso de programación o IA de Koach Learn dentro de 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con navegador web e internet (de la escuela, la biblioteca o la casa)",
      "Google Colab, con una cuenta de Google que la persona tenga permiso de usar",
      "Un asistente de IA gratuito que la persona tenga permiso de usar",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Revisa antes de la clase las reglas de edad de Colab y de las herramientas de IA y la configuración de las cuentas de la escuela; ten lista una cuenta de demostración para quienes no puedan registrarse.",
      "Programa en vivo con un proyector en las Lecciones 2 y 3 para que los principiantes copien cada paso.",
      "Quita a propósito unos dos puntos o unas comillas para que todos practiquen leer un mensaje de error.",
      "Recuérdales que nunca peguen información privada en herramientas de IA; el código del juego no necesita ninguna.",
      "Haz un intercambio de juegos en el que se jueguen los juegos de los demás, y luego califícalos con la rúbrica."
    ]
  }
};

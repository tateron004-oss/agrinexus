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
  chapters: [
    {
      name: "Capítulo 1: Tus primeras líneas de código",
      lessons: [
        {
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
          youCanNow: "decir qué son el código y un programa, y explicar cómo usar la IA como tutor en vez de como atajo."
        },
        {
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
          youCanNow: "abrir un cuaderno de Colab, escribir Python en una celda, ejecutarla y leer el resultado."
        },
        {
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
          youCanNow: "usar una variable, input, una instrucción if y un bucle en un programa pequeño de Python."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tus primeras líneas de código",
        questions: [
          { q: "¿Qué es un programa?", options: ["Un conjunto de instrucciones que hace un trabajo", "Un tipo de teclado", "La dirección de un sitio web", "Una consola de videojuegos"], answer: 0, why: "Un programa es código, un conjunto de instrucciones, que hace un trabajo." },
          { q: "Tu clase permite la IA para practicar pero no para la tarea con calificación. ¿Qué haces?", options: ["Usar la IA para la tarea de todos modos", "Usar la IA para practicar y hacer tú el trabajo con calificación", "No volver a programar nunca", "Pedirle a un amigo que use la IA por ti"], answer: 1, why: "Seguir las reglas de tu maestro es parte de usar la IA con honestidad." },
          { q: "En Colab, ¿cómo ejecutas una celda de código?", options: ["Cerrando el navegador", "Imprimiendo la página", "Presionando el botón de reproducir o Shift y Enter", "Reiniciando la computadora"], answer: 2, why: "El botón de reproducir o Shift y Enter ejecuta la celda." },
          { q: "¿Qué hace score = score + 1?", options: ["Borra el puntaje", "Imprime la palabra score", "Le pide un puntaje al jugador", "Suma uno al valor guardado en score"], answer: 3, why: "Toma el puntaje actual y le suma uno." },
          { q: "¿Qué hace for i in range(3):?", options: ["Repite 3 veces el código con sangría", "Hace 3 preguntas", "Crea 3 variables", "Detiene el programa"], answer: 0, why: "Un bucle for con range(3) repite tres veces el código que tiene adentro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Programar con un ayudante de IA",
      lessons: [
        {
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
          youCanNow: "obtener de la IA una explicación clara del código línea por línea y comprobar que de verdad lo entiendes."
        },
        {
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
          youCanNow: "leer un mensaje de error de Python, buscar el problema y usar la IA para entender y arreglar un bug."
        },
        {
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
          youCanNow: "planear, crear, probar y explicar un programa pequeño de Python, usando la IA como ayudante y no como reemplazo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Programar con un ayudante de IA",
        questions: [
          { q: "¿Cuál es una buena forma de preguntarle a la IA sobre código que no entiendes?", options: ["\"Haz mi tarea\"", "\"Explica este código Python línea por línea para un principiante\"", "\"Código\"", "\"Hazlo más largo\""], answer: 1, why: "Una petición clara de explicación línea por línea te ayuda a aprender." },
          { q: "¿Cómo puedes comprobar que de verdad entiendes un código?", options: ["Cambiar una cosa, adivinar el resultado y luego ejecutarlo", "Leerlo una vez rápido", "Borrarlo", "Pedirle a la IA que diga que lo entiendes"], answer: 0, why: "Predecir y probar muestra si de verdad lo entiendes." },
          { q: "Python muestra un mensaje de error. ¿Dónde miras primero?", options: ["La primera palabra de la pantalla", "La barra de direcciones del navegador", "La última línea del mensaje y el número de línea", "El teclado"], answer: 2, why: "La última línea nombra el problema y el número de línea muestra dónde está." },
          { q: "La IA te da un arreglo para tu bug. ¿Qué sigue?", options: ["Suponer que funciona", "Entregarlo sin ejecutarlo", "Borrar tu programa", "Ejecutarlo tú mismo y revisar que funcione"], answer: 3, why: "La IA puede equivocarse, así que tú pruebas el arreglo." },
          { q: "En Python, ¿qué hace una línea que empieza con #?", options: ["Es un comentario que Python ignora", "Imprime un numeral", "Detiene el programa", "Crea un bucle"], answer: 0, why: "Las líneas que empiezan con # son comentarios para las personas, no instrucciones." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la programación con IA",
    questions: [
      { q: "La mejor descripción del código es:", options: ["Instrucciones que una computadora sigue exactamente", "Una contraseña secreta", "Un tipo de música", "Una calificación escolar"], answer: 0, why: "El código es una lista de instrucciones para una computadora." },
      { q: "¿Por qué es un problema copiar código de la IA que no entiendes?", options: ["Siempre es demasiado corto", "No aprendes nada y no puedes arreglarlo cuando falla", "Las computadoras no pueden ejecutar código de IA", "Cuesta dinero"], answer: 1, why: "Entender es la habilidad; el código copiado te deja atorado." },
      { q: "Antes de registrarte en una herramienta de IA siendo adolescente, deberías:", options: ["Usar una fecha de nacimiento falsa", "Compartir tu contraseña con tus amigos", "Revisar la edad mínima de la herramienta y preguntarle a tu madre, padre o tutor", "No leer nada"], answer: 2, why: "Los límites de edad y la participación de tu madre o padre te mantienen seguro y dentro de las reglas." },
      { q: "Google Colab te permite:", options: ["Solo ver videos", "Comprar juegos", "Enviar mensajes de texto", "Ejecutar Python en un navegador web sin instalar nada"], answer: 3, why: "Colab es un cuaderno en línea gratuito para ejecutar Python." },
      { q: "En un cuaderno, una celda es:", options: ["Un cuadro donde escribes y ejecutas código", "La batería de un teléfono", "Un tipo de error", "Un bucle"], answer: 0, why: "Los cuadernos están hechos de celdas que contienen código." },
      { q: "¿Qué línea muestra palabras en la pantalla en Python?", options: ["show Hola", "print(\"Hola\")", "say = Hola", "run Hola"], answer: 1, why: "print con texto entre comillas muestra el texto." },
      { q: "Una variable es:", options: ["Un mensaje de error", "Un tipo de sitio web", "Una caja con nombre que guarda un valor", "Un bucle que nunca termina"], answer: 2, why: "Las variables guardan valores con un nombre, como score." },
      { q: "¿Qué línea le pide al jugador que escriba su nombre?", options: ["name = 0", "print(name)", "for name in range(3):", "name = input(\"¿Cómo te llamas? \")"], answer: 3, why: "input le pide al usuario que escriba algo." },
      { q: "En Python, == significa:", options: ["Es lo mismo que", "Sumar", "Guardar un valor", "Empezar un comentario"], answer: 0, why: "Dos signos de igual comparan dos valores." },
      { q: "¿Por qué a Python le importa la sangría?", options: ["Hace el código colorido", "Muestra qué líneas van debajo de un if o un bucle", "Ahorra batería", "Es solo decoración"], answer: 1, why: "Las líneas con sangría pertenecen al if, else o bucle que tienen arriba." },
      { q: "Quieres gritar \"¡Vamos, equipo!\" 5 veces. ¿Qué es lo mejor?", options: ["Una instrucción if", "Un comentario", "Un bucle for con range(5)", "Una variable llamada team"], answer: 2, why: "Un bucle repite código un número fijo de veces." },
      { q: "¿Qué es seguro pegar en un asistente de IA?", options: ["La contraseña de tu escuela", "La dirección de tu casa", "Tu número de teléfono", "Diez líneas de código de tu juego de preguntas"], answer: 3, why: "El código de un proyecto no tiene información privada." },
      { q: "Después de que la IA explica tu código, una buena forma de poner a prueba lo que entendiste es:", options: ["Cambiar una cosa, predecir y ejecutarlo", "Cerrar el cuaderno", "Solo pedir una explicación más larga", "Copiarlo sin cambios a otro cuaderno"], answer: 0, why: "Predecir y probar demuestra que lo entiendes." },
      { q: "Un bug es:", options: ["Una buena función", "Un error en el código", "Un tipo de bucle", "Un cuaderno"], answer: 1, why: "Los bugs son errores; la depuración los arregla." },
      { q: "IndentationError normalmente significa:", options: ["Se cayó tu internet", "Necesitas una computadora nueva", "Los espacios al inicio de una línea están mal", "El programa funcionó"], answer: 2, why: "Señala espacios incorrectos al inicio de una línea." },
      { q: "Te atoraste con un error. ¿Qué deberías pegar en el asistente de IA?", options: ["Solo la palabra error", "Tu contraseña", "Nada; rendirte", "El código y el mensaje de error completo"], answer: 3, why: "El código y el error completo le dan a la IA lo que necesita para explicar el problema." },
      { q: "La IA sugiere un arreglo pero el error cambia. Deberías:", options: ["Decirle a la IA exactamente qué pasó ahora", "Rendirte", "Entregarlo de todos modos", "Borrar Python"], answer: 0, why: "Las preguntas de seguimiento claras te ayudan a ti y a la IA a encontrar el problema real." },
      { q: "¿Cuál es el mejor primer paso al crear un programa más grande?", options: ["Escribir todo de una vez", "Escribir un plan corto como comentarios", "Pedirle a la IA que lo escriba todo", "No hacer pruebas"], answer: 1, why: "Un plan divide el programa en piezas pequeñas." },
      { q: "¿Por qué ejecutar tu programa después de agregar cada pieza pequeña?", options: ["Hace el código más largo", "Python lo exige", "Encuentras los errores temprano, cuando son fáciles de arreglar", "Guarda el archivo"], answer: 2, why: "Los pasos pequeños hacen fácil encontrar los bugs." },
      { q: "Usaste la IA para ayudarte en un proyecto de programación de la escuela. ¿Qué deberías hacer?", options: ["Ocultarlo", "Decir que todo fue trabajo tuyo", "Borrar el proyecto", "Decir cómo usaste la IA, siguiendo las reglas de tu maestro"], answer: 3, why: "Ser honesto sobre el uso de la IA es parte de seguir las reglas de la escuela." }
    ]
  }
};

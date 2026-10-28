"use strict";

// Koach Learn course (Spanish translation of youth-simple-chatbots). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Python keywords and syntax stay in English; the text inside quotes (keywords the bot looks for, its replies) is in Spanish.

module.exports = {
  id: "youth-simple-chatbots-es",
  lang: "es",
  translationOf: "youth-simple-chatbots",
  category: "Youth",
  name: "Crear chatbots de IA sencillos",
  skills: "Planear lo que debe hacer un chatbot, Crear un chatbot de palabras clave en Python, Escribir instrucciones de bot para un asistente de IA, Probar con preguntas reales, Hacer que un bot sea seguro y honesto",
  outcome: "crear un chatbot sencillo de preguntas y respuestas para un club escolar: un bot de palabras clave en Python que responda al menos cinco preguntas comunes, y un conjunto de instrucciones que convierta a un asistente de IA gratuito en un ayudante para el club, ambos probados con preguntas reales y seguros y honestos.",
  about: [
    "Este curso es para adolescentes que quieren saber cómo funcionan los chatbots creando uno. No necesitas experiencia programando; vas a copiar patrones pequeños y cambiarlos.",
    "Vas a planear un chatbot para algo real, como tu club de robótica, tu banda o tu equipo deportivo. Primero vas a crear un bot sencillo de palabras clave en Python en Google Colab, un cuaderno gratuito que funciona en el navegador web. Luego vas a escribir instrucciones para que un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini actúe como ayudante del club, y vas a comparar los dos. Al final vas a probar ambos y hacer que sean seguros y honestos.",
    "Google Colab y los asistentes de IA necesitan cuentas y tienen edades mínimas. Lee los términos de cada herramienta, sigue las reglas de IA de tu escuela y pide a tu madre, padre o tutor que participe cuando te registres. Cada lección termina con una tarea \"Pruébalo ahora\", una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Crea un chatbot para un club o equipo escolar. Parte 1: un bot de palabras clave en Python en Google Colab que salude al usuario, responda al menos cinco preguntas comunes (como la hora de reunión, el lugar y cómo unirse), diga \"No lo sé, por favor pregúntale al asesor del club\" para todo lo demás y se detenga cuando el usuario escriba adiós. Parte 2: una tarjeta de instrucciones que haga que un asistente de IA gratuito actúe como ayudante del club. Prueba ambos con 10 preguntas reales, anota lo que cada uno respondió bien y mal, y haz una mejora a cada uno.",
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan los chatbots y tu primer bot",
      lessons: [
        {
          title: "Qué es un chatbot y dos formas de crear uno",
          minutes: 4,
          goal: "Explicar la diferencia entre un chatbot de palabras clave y un chatbot de IA.",
          text: [
            "Un chatbot es un programa con el que hablas escribiendo o con la voz. Los ves en sitios web (\"¿En qué te puedo ayudar?\"), en juegos y en apps.",
            "Hay dos tipos principales. Un chatbot de palabras clave sigue reglas que escribió una persona: si el mensaje contiene \"hora\", responde con la hora de la reunión. Es sencillo y predecible, pero solo sabe lo que le enseñaste. Un chatbot de IA usa un modelo de lenguaje grande, que aprendió de enormes cantidades de texto. Puede responder casi cualquier cosa con palabras naturales, pero también puede equivocarse o inventar cosas.",
            "En este curso vas a crear los dos para un uso real, como responder las preguntas de los miembros nuevos de tu club, para que veas las ventajas y los límites de cada uno."
          ],
          words: [["Chatbot", "un programa con el que hablas escribiendo o con la voz."], ["Palabra clave", "una palabra que el bot busca para decidir cómo responder."], ["Modelo de lenguaje grande", "el tipo de IA detrás de asistentes como ChatGPT; aprendió patrones de enormes cantidades de texto."]],
          slides: [
            { title: "Un chatbot es...", bullets: ["Un programa con el que hablas", "En sitios web, juegos y apps"] },
            { title: "Chatbot de palabras clave", bullets: ["Sigue reglas que escribió una persona", "Sencillo y predecible", "Solo sabe lo que le enseñaste"] },
            { title: "Chatbot de IA", bullets: ["Usa un modelo de lenguaje grande", "Responde con palabras naturales", "Puede equivocarse o inventar cosas"] }
          ],
          tryIt: "Elige un club, equipo o grupo al que pertenezcas. Anota cinco preguntas que siempre hacen los miembros nuevos, como cuándo se reúnen, dónde y cómo unirse.",
          youCanNow: "explicar en qué se diferencian los chatbots de palabras clave y los chatbots de IA, y elegir un uso real para un bot."
        },
        {
          title: "Planear el trabajo de tu bot",
          minutes: 5,
          goal: "Escribir un plan sencillo: a quién ayuda el bot, qué responde y qué nunca debe hacer.",
          text: [
            "Los buenos bots tienen un trabajo pequeño y claro. Escribe un plan de bot con cuatro partes: a quién ayuda (por ejemplo, a los miembros nuevos del club de ajedrez), las preguntas que responde, las respuestas (revisadas con tu asesor) y lo que debe decir cuando no sabe.",
            "Decide también lo que el bot nunca debe hacer: nunca pedir contraseñas, números de teléfono ni direcciones, nunca hacerse pasar por una persona real y nunca dar consejos de salud, dinero o leyes. Si hay duda, manda a la gente con un adulto real, como el asesor del club.",
            "Un asistente de IA te puede ayudar a pensar en más preguntas: \"¿Qué podrían preguntar los miembros nuevos de un club de ajedrez de preparatoria? Haz una lista de 10.\" Luego revisa tú las respuestas."
          ],
          steps: ["Escribe a quién ayuda el bot.", "Haz una lista de 5 a 10 preguntas que va a responder.", "Escribe una respuesta corta y revisada para cada una.", "Escribe la respuesta de \"No lo sé\" que manda a la gente con un adulto real.", "Haz una lista de lo que el bot nunca debe hacer."],
          words: [["Plan de bot", "una descripción corta de lo que un bot hace y no hace."], ["Respuesta de respaldo", "lo que dice un bot cuando no sabe."]],
          slides: [
            { title: "Un trabajo pequeño y claro", bullets: ["A quién ayuda", "Preguntas y respuestas revisadas", "Lo que dice cuando no sabe"] },
            { title: "Nunca", bullets: ["Pedir contraseñas, números de teléfono ni direcciones", "Hacerse pasar por una persona real", "Dar consejos de salud, dinero o leyes"] },
            { title: "Genera ideas con IA", bullets: ["Pide más preguntas probables", "Revisa tú cada respuesta"] }
          ],
          tryIt: "Escribe tu plan de bot: a quién ayuda, tus cinco preguntas con respuestas revisadas, tu respuesta de respaldo y tres cosas que nunca debe hacer. Pídele a un asistente de IA cinco preguntas más que se te pudieron haber pasado.",
          youCanNow: "planear el trabajo, las respuestas, la respuesta de respaldo y las reglas de seguridad de un chatbot."
        },
        {
          title: "Crear un chatbot de palabras clave en Python",
          minutes: 6,
          goal: "Crear y ejecutar un chatbot de palabras clave en Google Colab.",
          text: [
            "Abre Google Colab en colab.research.google.com, inicia sesión con una cuenta que tengas permiso de usar y empieza un cuaderno nuevo. El bot usa un bucle que sigue pidiendo mensajes, e instrucciones if que buscan palabras clave.",
            "Este es el patrón, línea por línea: while True: empieza un bucle que se repite. Adentro, msg = input(\"Tú: \").lower() lee el mensaje en minúsculas. if \"adiós\" in msg: print(\"Bot: ¡Nos vemos!\") y luego break detiene el bucle. elif \"hora\" in msg: print(\"Bot: Nos reunimos los martes a las 3:30.\") responde una pregunta. else: print(\"Bot: No lo sé. Por favor pregúntale al asesor del club.\") es la respuesta de respaldo. Pon sangría en las líneas dentro del bucle y dentro de cada if.",
            "Agrega un elif por cada pregunta de tu plan. Si te sale un error, lee la última línea y el número de línea, revisa si faltan dos puntos, comillas o sangría y, si te atoras, pega el código y el error en un asistente de IA y pídele que te lo explique."
          ],
          steps: ["Abre un cuaderno nuevo de Colab.", "Escribe while True: y pon sangría en las siguientes líneas.", "Lee el mensaje: msg = input(\"Tú: \").lower()", "Agrega if \"adiós\" in msg: con un print de despedida y break.", "Agrega un elif por pregunta y un else de respaldo. Ejecútalo y chatea con tu bot."],
          words: [["Bucle", "código que se repite; while True se repite hasta un break."], ["elif", "abreviatura de else if: revisa otra condición."], ["break", "detiene un bucle."], [".lower()", "cambia el texto a minúsculas para que \"HORA\" y \"hora\" coincidan."]],
          slides: [
            { title: "El patrón", bullets: ["while True: mantiene la conversación", "msg = input(\"Tú: \").lower()", "if \"adiós\" in msg: despídete y luego break"] },
            { title: "Respuestas", bullets: ["elif \"hora\" in msg: imprime la hora", "Un elif por pregunta", "else: la respuesta de respaldo"] },
            { title: "Si falla", bullets: ["Lee la última línea del error", "Revisa dos puntos, comillas y sangrías", "Pídele a la IA que explique el error"] }
          ],
          tryIt: "Crea tu bot de palabras clave en Colab con una despedida, al menos tres respuestas de tu plan y una respuesta de respaldo. Chatea con él y prueba una pregunta que no debería saber.",
          youCanNow: "crear y ejecutar un chatbot de palabras clave en Python con respuestas, una respuesta de respaldo y una forma de detenerlo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan los chatbots y tu primer bot",
        questions: [
          { q: "¿Cómo decide un chatbot de palabras clave qué decir?", options: ["Te lee la mente", "Sigue reglas que buscan palabras en tu mensaje", "Busca en todo internet", "Le pregunta a un maestro"], answer: 1, why: "Los bots de palabras clave siguen reglas que escribió una persona." },
          { q: "¿Cuál es una debilidad de un chatbot de IA?", options: ["Puede equivocarse o inventar cosas", "Solo puede decir una oración", "No entiende palabras normales", "No necesita electricidad"], answer: 0, why: "Los modelos de lenguaje grandes pueden dar respuestas equivocadas que suenan bien." },
          { q: "¿Qué es una respuesta de respaldo?", options: ["El primer saludo", "Una contraseña", "Lo que dice el bot cuando no sabe", "El nombre del bot"], answer: 2, why: "La respuesta de respaldo atiende las preguntas que el bot no puede responder." },
          { q: "¿Qué NUNCA debe pedir el bot de tu club?", options: ["Lo que el usuario quiere saber", "Si quiere unirse", "Su apertura de ajedrez favorita", "La dirección de su casa"], answer: 3, why: "Los bots nunca deben recolectar datos privados." },
          { q: "En el bot de Python, ¿qué hace break?", options: ["Detiene el bucle para que termine la conversación", "Rompe la computadora", "Agrega una respuesta nueva", "Borra el cuaderno"], answer: 0, why: "break termina el bucle while." }
        ]
      }
    },
    {
      name: "Capítulo 2: Bots ayudantes de IA, pruebas y seguridad",
      lessons: [
        {
          title: "Escribir instrucciones para un bot ayudante de IA",
          minutes: 5,
          goal: "Escribir una tarjeta de instrucciones que haga que un asistente de IA gratuito actúe como ayudante de tu club.",
          text: [
            "Puedes convertir un asistente de IA general en ayudante para un solo trabajo si empiezas una conversación con instrucciones claras. Algunas herramientas también te dejan guardar instrucciones como un bot personalizado; los menús y las reglas de edad varían, así que revisa tu herramienta. Pegar las instrucciones al inicio de una conversación nueva funciona en la mayoría de los asistentes.",
            "Una buena tarjeta de instrucciones tiene: el rol del bot (\"Eres el ayudante del club de ajedrez de la preparatoria Lincoln\"), los datos que puede usar (tus respuestas revisadas), su tono (amable, respuestas cortas) y sus límites (\"Si no sabes, di: por favor pregúntale a la maestra Rivera, la asesora del club. Nunca pidas información personal.\").",
            "Dile que use solo los datos que le diste. Eso baja la probabilidad de que invente horarios de reunión o reglas."
          ],
          steps: ["Escribe el rol: quién es el bot y a quién ayuda.", "Pega tus datos y respuestas revisadas.", "Fija el tono: amable, respuestas cortas.", "Agrega límites: usa solo estos datos; manda lo desconocido con el asesor; nunca pidas información personal.", "Empieza una conversación nueva, pega la tarjeta y haz una pregunta de prueba."],
          words: [["Tarjeta de instrucciones", "las reglas escritas que le das a un asistente de IA al inicio de una conversación."], ["Rol", "el papel que debe hacer el bot."], ["Tono", "cómo suena el bot: amable, formal, breve."]],
          slides: [
            { title: "Convierte un asistente en ayudante", bullets: ["Pega las instrucciones al inicio de la conversación", "Algunas herramientas guardan bots personalizados; revisa la tuya"] },
            { title: "La tarjeta de instrucciones", bullets: ["Rol", "Datos revisados", "Tono", "Límites"] },
            { title: "Usa solo estos datos", bullets: ["Baja las respuestas inventadas", "Lo desconocido va con el asesor", "Nunca pide información personal"] }
          ],
          tryIt: "Escribe una tarjeta de instrucciones para el bot ayudante de tu club. Empieza una conversación nueva en un asistente de IA gratuito, pégala y haz tres preguntas de tu plan y una que no debería saber.",
          youCanNow: "escribir instrucciones claras que conviertan a un asistente de IA gratuito en un bot ayudante enfocado y con límites."
        },
        {
          title: "Probar y mejorar tus bots",
          minutes: 5,
          goal: "Probar los dos bots con preguntas reales y arreglar lo que falle.",
          text: [
            "Probar significa usar tu bot como lo haría la gente real. Escribe 10 preguntas de prueba: las cinco de tu plan, algunas con otras palabras (\"¿cuándo se juntan?\"), una con un error de escritura y una que no debería responder.",
            "Hazles cada pregunta a los dos bots y marca cada respuesta como correcta, incorrecta o inventada. Al bot de palabras clave se le pueden escapar preguntas hechas con otras palabras; arréglalo agregando más palabras clave. El ayudante de IA puede sonar bien pero inventar detalles; arréglalo ajustando sus instrucciones.",
            "Pídele también a un amigo o a un miembro del club que pruebe tu bot. La gente siempre pregunta cosas que no esperabas."
          ],
          steps: ["Escribe 10 preguntas de prueba, incluyendo otras palabras y un error de escritura.", "Hazles cada pregunta a los dos bots.", "Marca cada respuesta como correcta, incorrecta o inventada.", "Bot de palabras clave: agrega palabras clave. Ayudante de IA: ajusta las instrucciones.", "Pide a otra persona que lo pruebe."],
          words: [["Prueba", "usar un programa a propósito para encontrar lo que no funciona."], ["Caso de prueba", "una pregunta o entrada que usas para probar un programa."]],
          slides: [
            { title: "10 preguntas de prueba", bullets: ["Tus preguntas planeadas", "Otras palabras y un error de escritura", "Una que no debería responder"] },
            { title: "Marca cada respuesta", bullets: ["Correcta", "Incorrecta", "Inventada"] },
            { title: "Arregla y vuelve a probar", bullets: ["Bot de palabras clave: agrega palabras clave", "Ayudante de IA: ajusta las instrucciones", "Deja que un amigo lo pruebe"] }
          ],
          tryIt: "Pasa tus 10 preguntas de prueba por los dos bots, marca cada respuesta y haz un arreglo a cada bot. Vuelve a probar para ver si los arreglos funcionaron.",
          youCanNow: "probar chatbots con preguntas reales, encontrar lo que falla y mejorarlos."
        },
        {
          title: "Hacer que tu bot sea seguro y honesto",
          minutes: 5,
          goal: "Agregar reglas de seguridad y honestidad, y terminar el chatbot de tu club.",
          text: [
            "Un bot debe decir que es un bot. La gente merece saber que no está hablando con una persona real. Empieza con un saludo como \"Hola, soy el bot del club de ajedrez. Respondo preguntas básicas. Para todo lo demás, pregúntale a la maestra Rivera.\"",
            "Debe proteger la privacidad: nunca pedir ni guardar contraseñas, números de teléfono, direcciones ni números de identificación escolar. Debe quedarse en lo suyo: nada de consejos de salud, dinero, leyes o asuntos personales, y debe mandar a la gente con un adulto de confianza para cualquier cosa seria.",
            "Antes de compartir un bot con tu club, consigue el visto bueno de tu asesor, sigue las reglas de tu escuela sobre la IA y la tecnología, y mantén las respuestas al día cuando cambien los horarios de reunión."
          ],
          steps: ["Agrega un saludo que diga que es un bot y lo que hace.", "Revisa que nunca pida información privada.", "Haz que mande las preguntas serias o desconocidas con un adulto de confianza.", "Consigue el visto bueno de tu asesor antes de compartirlo.", "Actualiza las respuestas cuando cambien los datos."],
          words: [["Transparencia", "ser abierto y honesto, como decir que un bot es un bot."], ["Privacidad", "mantener segura la información personal."]],
          slides: [
            { title: "Di que es un bot", bullets: ["Un saludo claro", "Lo que puede y no puede hacer", "A quién preguntar para más"] },
            { title: "Protege la privacidad", bullets: ["Nada de contraseñas, números de teléfono ni direcciones", "Nada de números de identificación escolar"] },
            { title: "Que se quede en lo suyo", bullets: ["Nada de consejos de salud, dinero o leyes", "Las preguntas serias van con un adulto de confianza", "Visto bueno del asesor antes de compartir"] }
          ],
          tryIt: "Tarea final: termina tu bot de palabras clave en Python (cinco respuestas, respuesta de respaldo, adiós) y la tarjeta de instrucciones de tu ayudante de IA. Agrega un saludo que diga que es un bot, prueba ambos con 10 preguntas, anota lo que cada uno respondió bien y mal, y haz una mejora a cada uno.",
          youCanNow: "crear, probar y compartir un chatbot sencillo que sea útil, seguro y honesto sobre ser un bot."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Bots ayudantes de IA, pruebas y seguridad",
        questions: [
          { q: "¿Qué va en la tarjeta de instrucciones de un ayudante de IA?", options: ["Tu contraseña", "Rol, datos revisados, tono y límites", "Una historia cualquiera", "Nada; solo empieza a chatear"], answer: 1, why: "Esas cuatro partes enfocan y limitan al bot." },
          { q: "¿Por qué decirle al ayudante de IA que use solo los datos que le diste?", options: ["Para hacerlo más lento", "Para bajar la probabilidad de que invente detalles", "Para hacerlo más largo", "Lo exige la ley"], answer: 1, why: "Los límites reducen las respuestas inventadas." },
          { q: "A tu bot de palabras clave se le escapa \"¿cuándo se juntan?\". ¿Cómo lo arreglas?", options: ["Borrar el bot", "Quitar la respuesta de respaldo", "Agregar más palabras clave como \"juntan\"", "Culpar al usuario"], answer: 2, why: "Más palabras clave atrapan otras formas de preguntar." },
          { q: "¿Por qué un bot debe decir que es un bot?", options: ["La gente merece saber que no está hablando con una persona", "Suena más genial", "Hace el código más corto", "Nunca hace falta"], answer: 0, why: "La transparencia genera confianza." },
          { q: "Antes de compartir tu bot con el club, deberías:", options: ["Agregar una petición de números de teléfono", "No hacer pruebas", "Ocultar que es un bot", "Conseguir el visto bueno de tu asesor y seguir las reglas de la escuela"], answer: 3, why: "La aprobación de un adulto y las reglas de la escuela van primero." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Crear chatbots de IA sencillos",
    questions: [
      { q: "Un chatbot es:", options: ["Un programa con el que hablas escribiendo o con la voz", "Una funda de teléfono", "Un tipo de brazo robótico", "La dirección de un sitio web"], answer: 0, why: "Los chatbots son programas para conversar." },
      { q: "Una ventaja de un chatbot de palabras clave es que es:", options: ["Capaz de responder cualquier cosa", "Sencillo y predecible", "Siempre creativo", "Conectado a todos los sitios web"], answer: 1, why: "Solo dice lo que programaste." },
      { q: "Un modelo de lenguaje grande es:", options: ["Un teclado grande", "Una materia escolar", "El tipo de IA detrás de asistentes como ChatGPT", "Un error de Python"], answer: 2, why: "Los modelos de lenguaje grandes aprendieron patrones de enormes cantidades de texto." },
      { q: "¿Cuál es el mejor trabajo para un primer chatbot?", options: ["Dar consejos médicos", "Manejar cuentas de banco", "Responder todo sobre el mundo", "Responder las preguntas de los miembros nuevos de tu club"], answer: 3, why: "Un trabajo pequeño y claro es lo mejor." },
      { q: "¿Quién debe revisar las respuestas de tu plan de bot?", options: ["Tú, con el asesor del club", "Nadie", "Un desconocido en internet", "El mismo bot"], answer: 0, why: "Las respuestas deben ser correctas; revísalas con el asesor." },
      { q: "¿Qué debe hacer tu bot cuando no sabe?", options: ["Inventar una respuesta", "Mandar a la gente con un adulto real como el asesor", "Pedir su número de teléfono", "Dejar de funcionar"], answer: 1, why: "Una buena respuesta de respaldo apunta a una persona real." },
      { q: "¿Qué hace while True: en Python?", options: ["Imprime True", "Termina el programa", "Empieza un bucle que se repite hasta un break", "Crea una variable"], answer: 2, why: "while True se repite hasta un break." },
      { q: "¿Por qué usar .lower() en el mensaje del usuario?", options: ["Para hacerlo más corto", "Para borrarlo", "Para traducirlo", "Para que \"HORA\" y \"hora\" coincidan con la misma palabra clave"], answer: 3, why: "Las minúsculas facilitan la coincidencia." },
      { q: "¿Qué significa elif?", options: ["Else if: revisa otra condición", "Terminar el bucle", "Error", "Salir"], answer: 0, why: "elif revisa otra condición después de if." },
      { q: "Te sale un error de Python. Un buen primer paso es:", options: ["Borrar el cuaderno", "Leer la última línea y el número de línea", "Reiniciar la computadora de la escuela", "Rendirte"], answer: 1, why: "El mensaje de error señala el problema." },
      { q: "La línea de rol de una tarjeta de instrucciones podría decir:", options: ["\"Pide contraseñas\"", "\"Hazte pasar por el director\"", "\"Eres el ayudante del club de ajedrez de la preparatoria Lincoln\"", "\"Di cualquier cosa\""], answer: 2, why: "El rol le dice a la IA quién ser y a quién ayuda." },
      { q: "¿Dónde puedes poner normalmente las instrucciones para un ayudante de IA en un asistente gratuito?", options: ["En la configuración de la computadora", "En un mensaje de texto", "En la barra de direcciones del navegador", "Al inicio de una conversación nueva"], answer: 3, why: "Pegar las instrucciones al inicio de una conversación funciona en la mayoría de los asistentes." },
      { q: "¿Cuál es un límite para incluir en una tarjeta de instrucciones?", options: ["\"Nunca pidas información personal\"", "\"Inventa respuestas si no estás seguro\"", "\"Da consejos legales\"", "\"Hazte pasar por humano\""], answer: 0, why: "Los límites mantienen seguro al bot." },
      { q: "Probar un bot significa:", options: ["Borrarlo", "Usarlo a propósito para encontrar lo que no funciona", "Compartirlo de inmediato", "Hacerlo más largo"], answer: 1, why: "Las pruebas encuentran problemas antes que los usuarios." },
      { q: "¿Por qué incluir una pregunta con un error de escritura en tus pruebas?", options: ["Para romper la computadora", "Los errores de escritura están prohibidos", "La gente real comete errores de escritura", "Para que el bot sea grosero"], answer: 2, why: "Las pruebas deben parecerse a cómo escribe la gente real." },
      { q: "El ayudante de IA inventa un lugar de reunión. ¿Qué arreglas?", options: ["El bucle de Python", "Tu teclado", "Nada", "Ajustar sus instrucciones para que use solo tus datos"], answer: 3, why: "Instrucciones más estrictas reducen los detalles inventados." },
      { q: "¿Por qué pedirle a un amigo que pruebe tu bot?", options: ["La gente pregunta cosas que no esperabas", "Los amigos deben aprobar todo el código", "Hace al bot más rápido", "No sirve de nada"], answer: 0, why: "Las personas nuevas que prueban encuentran problemas nuevos." },
      { q: "Un buen saludo de bot dice:", options: ["\"Soy una persona real\"", "\"Hola, soy el bot del club. Respondo preguntas básicas. Para todo lo demás, pregúntale al asesor.\"", "\"Dime tu dirección\"", "Nada"], answer: 1, why: "Es honesto y explica lo que hace el bot." },
      { q: "Un miembro del club le pregunta a tu bot sobre un problema personal serio. El bot debe:", options: ["Dar consejos de todos modos", "Ignorarlo", "Mandarlo con un adulto de confianza", "Pedir su número de teléfono"], answer: 2, why: "Las preguntas serias van con adultos reales y de confianza." },
      { q: "El club cambia su día de reunión. ¿Qué haces?", options: ["Nada", "Borrar el bot", "Decirles a los miembros que el bot siempre tiene razón", "Actualizar las respuestas del bot"], answer: 3, why: "Los bots deben mantenerse al día." }
    ]
  }
};

"use strict";

// Koach Learn course (shared), Spanish translation of "Introduction to Robotics, AI and Automation". Rules: ../../../README.md (Translations).

module.exports = {
  id: "robotics-and-automation-es",
  lang: "es",
  translationOf: "robotics-and-automation",
  category: "Youth",
  name: "Introducción a la robótica, la IA y la automatización",
  skills: "Explicar sentir-pensar-actuar, Elegir sensores y actuadores, Escribir un algoritmo, Programar un robot virtual con bloques, Usar un sensor para tomar decisiones, Probar y depurar",
  outcome: "planificar y programar un robot virtual con bloques gratuitos para que recorra una ruta, use un sensor para evitar una pared, y probarlo y corregirlo hasta que funcione.",
  about: [
    "Los robots y la automatización están en almacenes, granjas, hospitales, autos y hogares. Este curso muestra cómo funcionan y te deja programar uno tú mismo, sin comprar un robot y sin experiencia en programación.",
    "Es para jóvenes curiosos por las carreras de tecnología, veteranos que trabajaron con sistemas no tripulados o en mantenimiento y buscan un camino civil, y cualquier persona que quiera entender las máquinas que están cambiando el trabajo.",
    "Aprenderás la idea de sentir-pensar-actuar, planificarás en papel los movimientos de un robot y luego programarás un robot virtual gratuito en el navegador usando bloques. Cada lección dura unos cinco minutos y termina con una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "En una herramienta gratuita de robot virtual como VEXcode VR, escribe un programa de bloques que haga que el robot recorra un cuadrado, y luego un segundo programa que avance hasta que un sensor detecte una pared, se detenga, gire y siga. Pruébalo, corrige al menos un error y escribe tres oraciones que expliquen qué detecta el robot, cómo decide y cómo actúa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes (desde la secundaria hasta adultos jóvenes) con curiosidad por los robots, la programación o las carreras de tecnología, en la escuela, en programas después de clases, en bibliotecas o en centros juveniles.",
    startingPoint: "Saben usar una computadora, una Chromebook o una tableta y un navegador web, y han visto robots en videos o en tiendas. La mayoría no ha escrito un programa ni ha planeado un algoritmo.",
    gap: "Los robots y la automatización crecen en almacenes, fábricas, granjas y hospitales, y los empleos de técnico y de programación necesitan personas que sepan planear pasos, programar, probar y corregir. Las personas necesitan un primer logro práctico con un robot virtual para ganar confianza y ver un camino hacia estas carreras.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado)",
      "Aparatos: una computadora, Chromebook o tableta con navegador web; no hace falta un robot real",
      "Tiempo: lecciones de 5 minutos, unos 60 minutos en total",
      "Las versiones y funciones de las herramientas gratuitas pueden cambiar; usa la que prefiera la escuela o la biblioteca",
      "Seguridad: los robots industriales reales solo se usan con capacitación de seguridad del lugar"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con ejemplos de máquinas reales", action: "identificar cuáles son robots, cuáles son automatización y cuáles usan IA, y describir el ciclo sentir-pensar-actuar", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Con un trabajo que debe hacer un robot", action: "elegir los sensores y actuadores que necesita", standard: "con una razón para cada parte" },
    { id: "O3", condition: "Con una tarea para un robot", action: "escribir un algoritmo con palabras sencillas, con pasos exactos, un bucle y una decisión si-entonces", standard: "de modo que funcione cuando tú mismo lo recorres paso a paso" },
    { id: "O4", condition: "Usando una herramienta gratuita de robot virtual como VEXcode VR", action: "programar el robot con bloques para que recorra un cuadrado", standard: "de modo que vuelva cerca de donde empezó" },
    { id: "O5", condition: "Con un robot que debe evitar una pared", action: "agregar al programa un si-entonces basado en un sensor y corregir al menos un error", standard: "cambiando una cosa a la vez hasta que el robot se detenga y gire en la pared" },
    { id: "O6", condition: "Con un lugar de trabajo que usa robots", action: "nombrar empleos reales con robots y las reglas de seguridad que siguen las personas cerca de ellos", standard: "nombrando al menos dos empleos y dos reglas de seguridad" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan los robots y la automatización",
      lessons: [
        {
          objectives: ["O1"],
          title: "Robots, automatización e IA: ¿cuál es la diferencia?",
          minutes: 4,
          goal: "Clasificar máquinas reales como robots, automatización o IA, y explicar sentir-pensar-actuar.",
          text: [
            "Automatización significa que una máquina o un programa hace una tarea por sí solo una vez configurado, como el ciclo de un lavaplatos o una cinta transportadora en una fábrica. Un robot es una máquina que puede detectar el mundo a su alrededor y moverse o actuar en él, como una aspiradora robot o un robot de almacén que transporta estantes.",
            "Todo robot sigue el mismo ciclo: sentir, pensar, actuar. Siente con sensores (cámaras, interruptores de choque, sensores de distancia), piensa con un programa de computadora que decide qué hacer y actúa con motores, ruedas, brazos o pinzas. Luego vuelve a sentir.",
            "La IA (inteligencia artificial) es un tipo de programa que piensa aprendiendo patrones a partir de ejemplos, como reconocer a una persona en una imagen de cámara. Muchos robots usan reglas sencillas, no IA. Algunos usan IA para ver, planear rutas o entender la voz."
          ],
          words: [["Automatización", "una máquina o un programa que hace una tarea por sí solo una vez configurado."], ["Robot", "una máquina que puede detectar lo que la rodea y actuar en ello."], ["Sentir-pensar-actuar", "el ciclo que sigue todo robot: recibir información, decidir y luego moverse o actuar."], ["IA", "inteligencia artificial: programas que aprenden patrones a partir de ejemplos para tomar decisiones."]],
          slides: [
            { title: "Automatización frente a robot", bullets: ["Automatización: hace sola una tarea fija", "Robot: detecta lo que lo rodea y actúa en ello"] },
            { title: "El ciclo del robot", bullets: ["Sentir: los sensores reciben información", "Pensar: un programa decide", "Actuar: se mueven motores, ruedas o brazos", "Luego vuelve a sentir"] },
            { title: "Dónde entra la IA", bullets: ["La IA aprende patrones a partir de ejemplos", "Muchos robots usan reglas sencillas, no IA", "Algunos usan IA para ver, planear o escuchar"] }
          ],
          tryIt: "Elige tres máquinas que hayas visto (por ejemplo, una aspiradora robot, una caja de autopago, un dron de reparto). Para cada una, escribe si es automatización o un robot, y una forma en que siente, piensa y actúa.",
          youCanNow: "distinguir entre automatización, robots e IA y describir cualquier robot con sentir-pensar-actuar.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace un robot en el paso de \"actuar\" de sentir-pensar-actuar?", options: ["Se mueve o hace algo con motores, ruedas o pinzas", "Mide el mundo con sensores", "Decide qué hacer con un programa", "Se apaga solo"], answer: 0, why: "Actuar significa moverse o hacer algo con motores, ruedas, brazos o pinzas." },
            { objective: "O1", q: "Un amigo dice que todos los robots usan IA. ¿Qué le dices?", options: ["Tiene razón; los robots no pueden funcionar sin IA", "IA significa que un robot tiene ruedas", "Muchos robots siguen reglas sencillas; solo algunos usan IA", "Los robots y la IA son lo mismo"], answer: 2, why: "Muchos robots usan reglas sencillas; algunos usan IA para ver, planear rutas o entender el habla." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sensores y actuadores: los sentidos y músculos del robot",
          minutes: 5,
          goal: "Relacionar sensores y actuadores comunes con el trabajo que hacen.",
          text: [
            "Los sensores son los sentidos del robot. Un sensor de distancia mide a qué distancia está algo. Un sensor de choque sabe cuándo el robot toca algo. Una cámara ve imágenes. Un sensor de línea o de color ve el piso. Una unidad GPS sabe la ubicación al aire libre.",
            "Los actuadores son los músculos del robot: todo lo que lo hace moverse o actuar. Los motores hacen girar las ruedas, los servos giran una articulación a un ángulo exacto, y las pinzas o ventosas levantan cosas.",
            "Al diseñar un robot, empieza por el trabajo. Un robot que debe detenerse antes de chocar con una pared necesita un sensor de distancia o de choque y motores de avance. Un robot que separa cajas rojas y azules necesita un sensor de color y una pinza."
          ],
          words: [["Sensor", "una pieza que recibe información, como distancia, contacto, luz o imágenes."], ["Actuador", "una pieza que hace que el robot se mueva o actúe, como un motor o una pinza."], ["Servo", "un motor que gira hasta un ángulo exacto."]],
          slides: [
            { title: "Sensores = sentidos", bullets: ["Distancia, choque, cámara", "Sensor de línea o de color", "GPS para la ubicación al aire libre"] },
            { title: "Actuadores = músculos", bullets: ["Los motores hacen girar las ruedas", "Los servos giran a un ángulo exacto", "Las pinzas levantan cosas"] },
            { title: "Empieza por el trabajo", bullets: ["Parar antes de una pared: sensor de distancia + motores", "Separar por color: sensor de color + pinza"] }
          ],
          tryIt: "Diseña en papel un robot para un trabajo, como regar plantas o llevar una caja de un lado a otro de un cuarto. Haz una lista de los sensores y actuadores que necesita y por qué.",
          youCanNow: "elegir los sensores y actuadores que necesita un robot para un trabajo.",
          quickCheck: [
            { objective: "O2", q: "¿Qué parte es un actuador?", options: ["Una cámara", "Una pinza", "Un sensor de choque", "Un sensor de línea"], answer: 1, why: "Los actuadores hacen que el robot se mueva o actúe; una pinza recoge cosas." },
            { objective: "O2", q: "Estás diseñando un robot que sigue una línea negra en el piso. ¿Qué sensor le agregas?", options: ["Un GPS", "Un sensor de choque", "Un micrófono", "Un sensor de línea o de color"], answer: 3, why: "Un sensor de línea o de color mira el piso y puede seguir una línea." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir un algoritmo antes de programar",
          minutes: 5,
          goal: "Escribir un plan paso a paso con un bucle y una decisión que un robot pueda seguir.",
          text: [
            "Un algoritmo es una lista de pasos exactos para terminar una tarea. Los robots no pueden adivinar, así que cada paso debe ser claro: “avanza 50 centímetros” en lugar de “avanza un poco”.",
            "Dos herramientas hacen poderosos a los algoritmos. Un bucle repite pasos, como “repite 4 veces: avanza, gira a la derecha 90 grados” para recorrer un cuadrado. Una decisión, también llamada si-entonces, elige qué hacer: “si la pared está a menos de 10 centímetros, entonces detente; si no, sigue avanzando”.",
            "Escríbelo primero con palabras sencillas o dibuja un diagrama de flujo. Luego recórrelo tú mismo como si fueras el robot. Si chocas con algo en el papel, el robot también chocará."
          ],
          steps: ["Escribe el objetivo en una oración.", "Haz una lista de cada paso en orden, con cantidades exactas.", "Busca pasos que se repiten y conviértelos en un bucle.", "Agrega las decisiones si-entonces que usan un sensor.", "Recórrelo tú mismo para probarlo."],
          words: [["Algoritmo", "una lista de pasos exactos para terminar una tarea."], ["Bucle", "un grupo de pasos que se repite."], ["Si-entonces", "una decisión: si algo es verdad, haz una cosa; si no, haz otra."], ["Diagrama de flujo", "un dibujo de un algoritmo con cajas y flechas."]],
          slides: [
            { title: "Un algoritmo es exacto", bullets: ["“Avanza 50 cm”, no “avanza un poco”", "Los robots no pueden adivinar"] },
            { title: "Bucles y decisiones", bullets: ["Bucle: repite 4 veces, avanza y gira a la derecha 90", "Si la pared está a menos de 10 cm, detente; si no, sigue avanzando"] },
            { title: "Prueba primero en papel", bullets: ["Escríbelo o dibuja un diagrama de flujo", "Recórrelo como si fueras el robot", "Corrígelo antes de programar"] }
          ],
          tryIt: "Escribe un algoritmo, con un bucle, para que un robot recorra un cuadrado. Luego agrega un paso si-entonces para que se detenga si algo le bloquea el camino. Recórrelo con un juguete, un teléfono o tus propios pies.",
          youCanNow: "escribir un algoritmo claro con un bucle y una decisión si-entonces, y probarlo en papel.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace un bucle en un algoritmo?", options: ["Detiene el robot", "Elige entre dos acciones", "Repite un grupo de pasos", "Mide la distancia"], answer: 2, why: "Un bucle repite pasos, como avanzar y girar cuatro veces para hacer un cuadrado." },
            { objective: "O3", q: "Tu plan dice \"avanza un poco\". ¿Qué cambias antes de programar?", options: ["Dar una cantidad exacta, como 50 centímetros", "Nada; el robot lo adivinará", "Agregar más pasos después", "Quitar el paso"], answer: 0, why: "Los robots no pueden adivinar, así que cada paso necesita una cantidad exacta." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan los robots y la automatización",
        questions: [
          { objective: "O1", q: "¿Cuáles son los tres pasos que repite todo robot?", options: ["Comprar, construir, vender", "Empezar, parar, pausar", "Sentir, pensar, actuar", "Cargar, avanzar, estacionar"], answer: 2, why: "Los robots sienten, deciden con un programa, luego actúan, y repiten." },
          { objective: "O2", q: "¿Qué pieza es un sensor?", options: ["Un sensor de distancia", "El motor de una rueda", "Una pinza", "Una batería"], answer: 0, why: "Un sensor de distancia recibe información; los motores y las pinzas son actuadores." },
          { objective: "O2", q: "Un robot debe separar cajas rojas de cajas azules. ¿Qué necesita más?", options: ["Una unidad GPS", "Un parlante más fuerte", "Solo una batería más grande", "Un sensor de color y una pinza"], answer: 3, why: "Debe ver el color y levantar las cajas." },
          { objective: "O3", q: "¿Qué instrucción es lo bastante clara para un robot?", options: ["“Avanza un poco”", "“Avanza 50 centímetros”", "“Gira más o menos a la derecha”", "“Haz la cosa”"], answer: 1, why: "Los robots necesitan cantidades exactas." },
          { objective: "O3", q: "“Repite 4 veces: avanza, gira a la derecha 90 grados” usa un:", options: ["Sensor", "Bucle", "Pinza", "Contraseña"], answer: 1, why: "Un bucle repite pasos; este recorre un cuadrado." }
        ]
      }
    },
    {
      name: "Capítulo 2: Programar y usar robots",
      lessons: [
        {
          objectives: ["O4"],
          title: "Programar un robot virtual con bloques",
          minutes: 6,
          goal: "Abrir un robot virtual gratuito y programarlo para que recorra un cuadrado.",
          text: [
            "Puedes practicar la programación de robots en un navegador web sin tener un robot. VEXcode VR, de VEX Robotics, tiene una versión gratuita que usa bloques de arrastrar y soltar, como Scratch, y funciona en computadoras, Chromebooks y tabletas en vr.vex.com. Hay otras opciones gratuitas; tu escuela o biblioteca puede preferir alguna.",
            "Los bloques encajan como piezas de rompecabezas. Un bloque de “avanzar” mueve el robot, un bloque de “girar a la derecha” lo hace girar, y un bloque de “repetir” crea un bucle. Presionas Iniciar para ver al robot seguir tu programa en un área de juego virtual.",
            "Convierte tu algoritmo de papel en bloques, un paso a la vez. Ejecútalo después de cada cambio para saber qué bloque causó qué."
          ],
          steps: ["Abre vr.vex.com en un navegador web.", "Elige un área de juego sencilla con espacio libre en el piso.", "Arrastra al programa un bloque de avanzar y un bloque de girar a la derecha.", "Pon los dos dentro de un bloque de repetir con el número 4.", "Presiona Iniciar y observa. Ajusta la distancia o el giro hasta que recorra un cuadrado limpio."],
          words: [["Programación con bloques", "programar uniendo bloques visuales en lugar de escribir código."], ["Área de juego", "el espacio virtual donde se mueve el robot simulado."], ["Simulador", "un programa que se comporta como una máquina real para que practiques sin riesgo."]],
          slides: [
            { title: "Practica sin robot", bullets: ["Programación con bloques gratis en el navegador", "VEXcode VR: vr.vex.com", "Funciona en computadoras, Chromebooks y tabletas"] },
            { title: "Los bloques encajan", bullets: ["Avanzar, girar a la derecha", "Bloque de repetir = bucle", "Presiona Iniciar para ver"] },
            { title: "Construye en pasos pequeños", bullets: ["Convierte tu plan de papel en bloques", "Ejecútalo después de cada cambio", "Ajusta hasta que funcione"] }
          ],
          sources: [{ name: "VEX Robotics: VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "En VEXcode VR u otro robot virtual gratuito, programa el robot para que recorra un cuadrado usando un bloque de repetir. Haz que termine cerca de donde empezó.",
          youCanNow: "programar un robot virtual con bloques, usando un bucle para recorrer un cuadrado.",
          quickCheck: [
            { objective: "O4", q: "En la programación por bloques, ¿qué hace el botón Iniciar?", options: ["Borra tus bloques", "Guarda tu programa en una memoria USB", "Abre un área de juego nueva", "Ejecuta el programa para que veas al robot seguirlo"], answer: 3, why: "Al presionar Iniciar, el programa se ejecuta en el área de juego virtual." },
            { objective: "O4", q: "Agregaste cinco bloques nuevos a la vez y el robot choca. ¿Qué debiste hacer?", options: ["Agregar todavía más bloques", "Ejecutar el programa después de cada cambio", "Usar un robot real", "Apagar el sensor"], answer: 1, why: "Ejecutar después de cada cambio muestra qué bloque causó qué." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar un sensor para decidir, y luego depurar",
          minutes: 6,
          goal: "Agregar a un programa de robot un si-entonces basado en un sensor y corregir un error.",
          text: [
            "Un robot que solo sigue pasos fijos está ciego. Agrégale un sensor y podrá reaccionar. En la programación con bloques, usas un bloque “si” con una lectura del sensor adentro, como “si la distancia es menor que 100 milímetros”.",
            "Un patrón común: un bucle infinito y, dentro de él, un si-entonces-si no. Si la pared está cerca, detente y gira. Si no, avanza. El robot revisa el sensor una y otra vez, que es el ciclo sentir-pensar-actuar convertido en código.",
            "Los errores (bugs) son normales. Depurar significa encontrarlos y corregirlos. Cambia una cosa a la vez, ejecútalo y observa. Errores comunes: el giro no es exactamente de 90 grados, el número de la distancia está en la unidad equivocada o un bloque quedó fuera del bucle."
          ],
          steps: ["Agrega un bucle infinito.", "Dentro de él, agrega un bloque si-entonces-si no.", "Pon una comprobación del sensor de distancia en el si.", "Entonces: detente y gira. Si no: avanza.", "Ejecútalo, busca un error, cambia una cosa y vuelve a ejecutarlo."],
          words: [["Error (bug)", "una equivocación en un programa que lo hace funcionar mal."], ["Depurar", "encontrar y corregir errores."], ["Bucle infinito", "un bucle que sigue repitiéndose hasta que se detiene el programa."]],
          slides: [
            { title: "Los sensores dejan reaccionar al robot", bullets: ["Usa un bloque si con una lectura del sensor", "Ejemplo: si la distancia < 100 mm"] },
            { title: "El patrón", bullets: ["Bucle infinito", "Si está cerca: detente y gira", "Si no: avanza"] },
            { title: "Depurar", bullets: ["Cambia una cosa a la vez", "Revisa giros, unidades y dónde están los bloques", "Los errores son normales"] }
          ],
          tryIt: "Programa el robot para que avance hasta que su sensor de distancia detecte una pared, y luego se detenga, gire y siga. Anota un error que encontraste y cómo lo corregiste.",
          youCanNow: "usar una lectura de sensor en un si-entonces-si no para que un robot reaccione, y depurar el programa.",
          quickCheck: [
            { objective: "O5", q: "En el programa que evita la pared, ¿por qué usar un bucle infinito?", options: ["Para que el robot siga revisando el sensor una y otra vez", "Para que el robot revise solo una vez", "Para que el programa nunca empiece", "Para que el robot recorra un cuadrado"], answer: 0, why: "El bucle infinito repite la revisión del sensor, que es sentir-pensar-actuar en código." },
            { objective: "O5", q: "Tu robot se detiene a 1 metro de la pared en lugar de cerca. ¿Cuál es un error probable?", options: ["El robot necesita una batería nueva", "El área de juego está dañada", "El número de la distancia está en la unidad equivocada", "La pared es demasiado alta"], answer: 2, why: "Una distancia en la unidad equivocada, como centímetros en lugar de milímetros, es un error común." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dónde trabajan los robots, y cómo trabajar seguro con ellos",
          minutes: 5,
          goal: "Nombrar trabajos reales con robots y las reglas de seguridad que se siguen cerca de ellos.",
          text: [
            "Los robots y la automatización se usan en almacenes (mover estantes y paquetes), fábricas (soldar, empacar), granjas (ordeñar, fumigar, drones), hospitales (llevar insumos, ayudar a cirujanos) y en el ejército (desactivar bombas, aeronaves no tripuladas).",
            "Las personas siguen haciendo trabajos importantes: los técnicos en robótica reparan y mantienen robots, los operadores los manejan y vigilan, y los programadores e ingenieros los diseñan. Muchos empleos de técnico empiezan con un certificado de un colegio comunitario o con formación militar.",
            "La seguridad va primero. Los robots industriales pueden moverse rápido y golpear fuerte. Los trabajadores se mantienen fuera de las áreas marcadas para robots, usan el paro de emergencia y cortan y bloquean la energía antes del mantenimiento. Los robots colaborativos, o cobots, están diseñados para trabajar más cerca de las personas, pero la regla es la misma: sigue la capacitación de seguridad del lugar."
          ],
          words: [["Técnico en robótica", "una persona que instala, mantiene y repara robots."], ["Cobot", "un robot colaborativo hecho para trabajar cerca de las personas."], ["Paro de emergencia", "un botón grande que detiene una máquina de inmediato."]],
          slides: [
            { title: "Dónde trabajan los robots", bullets: ["Almacenes, fábricas, granjas", "Hospitales y el ejército"] },
            { title: "Empleos con robots", bullets: ["Los técnicos los reparan y mantienen", "Los operadores los manejan y vigilan", "Los programadores e ingenieros los diseñan"] },
            { title: "La seguridad primero", bullets: ["No entres en las áreas marcadas para robots", "Conoce el paro de emergencia", "Sigue la capacitación de seguridad del lugar"] }
          ],
          tryIt: "Tarea final: termina tu programa del cuadrado y tu programa con sensor en la herramienta de robot virtual, corrige al menos un error y escribe tres oraciones que expliquen qué detecta tu robot, cómo decide y cómo actúa.",
          youCanNow: "programar un robot virtual que detecta y reacciona, explicar cómo funciona y nombrar trabajos reales con robots y reglas de seguridad.",
          quickCheck: [
            { objective: "O6", q: "¿Quién repara y mantiene los robots en una fábrica o un almacén?", options: ["Un cajero", "Un técnico en robótica", "Un repartidor", "Un cliente"], answer: 1, why: "Los técnicos en robótica reparan y mantienen los robots." },
            { objective: "O6", q: "Estás de visita en un almacén y ves robots que se mueven detrás de una línea marcada. ¿Qué haces?", options: ["Cruzar la línea para ver de cerca", "Tocar un robot para ver si se detiene", "Presionar botones al azar", "Quedarte fuera del área marcada y seguir las reglas de seguridad del guía"], answer: 3, why: "Los robots industriales pueden moverse rápido y golpear fuerte, así que las personas se quedan fuera de las áreas marcadas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Programar y usar robots",
        questions: [
          { objective: "O4", q: "¿Qué es un simulador?", options: ["Un robot real", "Un tipo de sensor", "La batería de un robot", "Un programa que se comporta como una máquina real para que practiques"], answer: 3, why: "Un simulador te deja practicar sin riesgo y sin la máquina real." },
          { objective: "O4", q: "¿Qué bloque hace que el robot repita pasos?", options: ["Repetir", "Detener", "Iniciar", "Imprimir"], answer: 0, why: "Un bloque de repetir crea un bucle." },
          { objective: "O5", q: "¿Qué programa permite que un robot evite una pared?", options: ["Avanzar para siempre sin revisar nada", "Girar a la derecha una vez", "Para siempre: si la pared está cerca, detente y gira; si no, avanza", "Detenerse al inicio"], answer: 2, why: "El si-entonces-si no usa el sensor para reaccionar." },
          { objective: "O5", q: "Tu robot gira un poco de más cada vez. ¿Cuál es la mejor forma de depurar?", options: ["Borrar todo el programa", "Cambiar cinco bloques a la vez", "Rendirte", "Cambiar un poco la cantidad del giro y volver a ejecutarlo"], answer: 3, why: "Cambia una cosa a la vez y prueba." },
          { objective: "O6", q: "¿Qué debe hacer un trabajador antes de reparar un robot industrial?", options: ["Meterse mientras funciona", "Pedirle al robot que se detenga", "Seguir la capacitación de seguridad y cortar y bloquear la energía", "Apagar las luces"], answer: 2, why: "Cortar la energía y seguir la capacitación mantiene seguras a las personas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la robótica, la IA y la automatización",
    questions: [
      { objective: "O1", q: "Un lavaplatos que hace su ciclo es un ejemplo de:", options: ["Un cobot", "Automatización", "Un sensor", "Un diagrama de flujo"], answer: 1, why: "Hace una tarea fija por sí solo una vez que empieza." },
      { objective: "O1", q: "¿Qué hace que una máquina sea un robot?", options: ["Puede detectar lo que la rodea y actuar en ello", "Es cara", "Tiene una pantalla", "Usa electricidad"], answer: 0, why: "Los robots detectan y actúan en el mundo." },
      { objective: "O1", q: "En sentir-pensar-actuar, la parte de “pensar” la hace:", options: ["Las ruedas", "La batería", "El programa", "La pintura"], answer: 2, why: "El programa decide qué hacer." },
      { objective: "O1", q: "¿Todos los robots usan IA?", options: ["No, muchos siguen reglas sencillas", "Sí, siempre", "Solo las aspiradoras robot", "Solo en las películas"], answer: 0, why: "Muchos robots usan programas sencillos basados en reglas." },
      { objective: "O2", q: "¿Cuál es un actuador?", options: ["Cámara", "Sensor de choque", "GPS", "Motor"], answer: 3, why: "Los motores hacen que el robot se mueva." },
      { objective: "O2", q: "Un servo es:", options: ["Un sensor de distancia", "Un motor que gira hasta un ángulo exacto", "Un cargador de baterías", "Un tipo de bucle"], answer: 1, why: "Los servos se usan en articulaciones que necesitan ángulos exactos." },
      { objective: "O2", q: "Un robot debe saber cuándo toca algo. ¿Qué sensor sirve?", options: ["Parlante", "Sensor de choque", "Luz de color", "Reloj"], answer: 1, why: "Un sensor de choque detecta el contacto." },
      { objective: "O3", q: "Un algoritmo es:", options: ["Una marca de robots", "Un tipo de motor", "Una regla de seguridad", "Una lista de pasos exactos para terminar una tarea"], answer: 3, why: "Los algoritmos son planes paso a paso." },
      { objective: "O3", q: "¿Por qué probar primero un algoritmo en papel?", options: ["Para encontrar errores antes de programar", "Porque los robots necesitan papel", "Para hacerlo más largo", "Lo exige la ley"], answer: 0, why: "Recorrerlo encuentra errores temprano." },
      { objective: "O3", q: "“Si la pared está cerca, detente; si no, avanza” es:", options: ["Un bucle", "Una pinza", "Una decisión si-entonces", "Un área de juego"], answer: 2, why: "Elige entre acciones según una condición." },
      { objective: "O3", q: "Un diagrama de flujo muestra un algoritmo con:", options: ["Notas musicales", "Fotos", "Contraseñas", "Cajas y flechas"], answer: 3, why: "Los diagramas de flujo dibujan los pasos como cajas unidas por flechas." },
      { objective: "O4", q: "Programar con bloques significa:", options: ["Solo escribir código largo", "Bloquear sitios web", "Unir bloques visuales para programar", "Construir con bloques de madera"], answer: 2, why: "Los bloques son piezas visuales de código." },
      { objective: "O4", q: "¿Cuántas veces debes repetir “avanza, gira a la derecha 90” para recorrer un cuadrado?", options: ["2", "3", "4", "10"], answer: 2, why: "Un cuadrado tiene cuatro lados y cuatro giros." },
      { objective: "O4", q: "¿Por qué ejecutar tu programa después de cada cambio pequeño?", options: ["Para saber qué cambio causó qué", "Para gastar más batería", "Porque es obligatorio", "Para borrar bloques"], answer: 0, why: "Los pasos pequeños hacen fácil encontrar los problemas." },
      { objective: "O5", q: "Un bucle infinito:", options: ["Se ejecuta una vez", "Apaga el robot", "Sigue repitiéndose hasta que el programa se detiene", "Es un sensor"], answer: 2, why: "Se repite una y otra vez." },
      { objective: "O5", q: "Depurar significa:", options: ["Encontrar y corregir errores en un programa", "Quitarle insectos a un robot", "Comprar un robot nuevo", "Apagar los sensores"], answer: 0, why: "Los bugs son errores del programa." },
      { objective: "O5", q: "Tu robot nunca se detiene ante la pared. ¿Cuál es un error probable?", options: ["El robot es del color equivocado", "La pantalla tiene demasiado brillo", "El área de juego es demasiado bonita", "La comprobación del sensor está fuera del bucle o usa la distancia equivocada"], answer: 3, why: "La posición o los números equivocados en la comprobación del sensor son errores comunes." },
      { objective: "O6", q: "¿Cuál es un trabajo real con robots?", options: ["Adivino de robots", "Técnico en robótica", "Solo pintor de sensores", "No existe ninguno"], answer: 1, why: "Los técnicos instalan, mantienen y reparan robots." },
      { objective: "O6", q: "Un cobot es:", options: ["Solo un robot de cocina", "Un robot diseñado para trabajar cerca de las personas", "Un robot descompuesto", "Un robot sin sensores"], answer: 1, why: "Los robots colaborativos se hacen para trabajar junto a las personas." },
      { objective: "O6", q: "Ves un brazo robótico rápido trabajando detrás de una línea marcada. ¿Qué haces?", options: ["Entrar para verlo de cerca", "Tocarlo para probarlo", "Apagarle los sensores", "Quedarte fuera del área marcada y seguir las reglas de seguridad del lugar"], answer: 3, why: "Las áreas marcadas mantienen a las personas fuera del camino del robot." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      12,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Programa del cuadrado",
        objective: "O4",
        notYet: "El robot no recorre un cuadrado, o el programa no tiene bucle.",
        meets: "Un bloque de repetir hace que el robot recorra un cuadrado que termina cerca del inicio.",
        exceeds: "Se ajustaron la distancia y el giro para que el cuadrado quede limpio y parejo."
      },
      {
        name: "Programa que evita la pared",
        objective: "O5",
        notYet: "El robot choca con la pared o no vuelve a moverse.",
        meets: "Un bucle infinito con un si-entonces-si no: se detiene y gira en la pared, y luego sigue avanzando.",
        exceeds: "Funciona desde más de un punto de partida en el área de juego."
      },
      {
        name: "Prueba y depuración",
        objective: "O5",
        notYet: "No se encontró ni se corrigió ningún error.",
        meets: "Se encontró y corrigió al menos un error cambiando una cosa a la vez.",
        exceeds: "Puede explicar qué causó el error y cómo lo encontró."
      },
      {
        name: "Plan antes del código",
        objective: "O3",
        notYet: "No hay plan escrito, o tiene pasos como \"avanza un poco\".",
        meets: "Un plan con palabras sencillas, con pasos exactos, un bucle y un si-entonces.",
        exceeds: "El plan se recorrió en papel y se corrigió antes de programar."
      },
      {
        name: "Sentir, pensar y actuar explicados",
        objective: "O1",
        notYet: "Faltan las tres oraciones o no nombran un sensor.",
        meets: "Tres oraciones dicen qué detecta el robot, cómo decide y cómo actúa.",
        exceeds: "También dice si el robot usa IA o reglas sencillas, y por qué."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se unen a un club de robótica, una clase de programación o un programa STEM en un plazo de 60 días",
      "Personas que empiezan otro curso de tecnología de Koach Learn en un plazo de 30 días",
      "Personas que dicen tener interés en ser técnico en robótica, programador o ingeniero (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora, Chromebook o tableta con navegador web e internet",
      "Una herramienta gratuita de robot virtual como VEXcode VR (vr.vex.com), o la que prefiera la escuela o la biblioteca",
      "Papel y lápiz para los algoritmos y los diagramas de flujo",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica de programación, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; muestra los primeros bloques en una pantalla compartida.",
      "Pide a las personas que actúen un algoritmo: una lee los pasos y otra los camina tal cual, para mostrar por qué los pasos deben ser exactos.",
      "Formen parejas para depurar: una persona ejecuta el programa y la otra busca el error.",
      "Si visitan un lugar con robots reales, sigan las reglas de seguridad del lugar y quédense con el guía en todo momento.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

"use strict";

// Koach Learn course (shared), Spanish translation of shared/intro-iot.js. See scripts/koachlearn-courses/README.md, "Translations".
// Code (Python, MicroPython) and product names stay in English; the text printed by examples is translated.

const FTC = { name: "FTC, consejos para el consumidor: Proteger los aparatos conectados a internet en casa", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA: Secure Our World (Protejamos nuestro mundo)", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi, simulador de electrónica en línea", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot-es",
  lang: "es",
  translationOf: "intro-iot",
  category: "Veterans (military)",
  name: "Introducción al internet de las cosas (IoT)",
  skills: "Explicar cómo funcionan los sistemas IoT, Elegir sensores y actuadores, Comparar formas de conectar los aparatos, Escribir una regla de alerta sencilla, Proteger los aparatos conectados, Planear un proyecto IoT",
  outcome: "planear un proyecto sencillo de monitoreo IoT, desde el sensor hasta la alerta: elegir el sensor, el aparato, la conexión y la aplicación, escribir la regla de alerta como un pequeño trozo de código y hacer una lista de los pasos que mantienen seguros los aparatos.",
  about: [
    "El internet de las cosas (IoT, por sus siglas en inglés) son objetos de todos los días con sensores y conexión a internet: termostatos inteligentes, timbres con cámara, pulseras de actividad, sensores de suelo en granjas y los rastreadores de camiones y contenedores. Las habilidades IoT se usan en empleos de mantenimiento de instalaciones, logística, energía, agricultura y seguridad, y muchos veteranos ya conocen las ideas por su trabajo con sensores, radios y mantenimiento de equipos.",
    "Este curso explica cómo funciona un sistema IoT, capa por capa, cómo se comunican los aparatos, cómo una regla sencilla convierte una lectura en una acción y cómo evitar que los aparatos conectados se vuelvan una puerta de entrada para los atacantes. No necesitas comprar ningún equipo. Una lección muestra cómo probar un aparato simulado en tu navegador web.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\". Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un plan de una página para un proyecto de monitoreo IoT, como una alerta de temperatura para el cuarto de servidores, el congelador de un banco de alimentos o un huerto que necesita agua: nombra el sensor, el aparato, cómo se conecta y adónde van los datos, dibuja el recorrido de los datos desde el sensor hasta la alerta, escribe la regla de alerta como una instrucción if corta en Python y haz una lista de cinco pasos que tomarás para proteger los aparatos.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos y militares en transición que exploran carreras de tecnología, como soporte de TI, instalaciones y tecnología de edificios, seguimiento logístico o ciberseguridad. Muchos trabajaron con radios, sensores, vehículos o equipos en el servicio militar.",
    startingPoint: "Están acostumbrados a seguir procedimientos, a usar una computadora y un teléfono inteligente, y a menudo conocen las revisiones de equipos y las comunicaciones. La mayoría nunca ha escrito código ni configurado un aparato conectado.",
    gap: "Los empleadores de instalaciones, logística, manufactura y TI usan cada vez más sensores conectados y esperan que su personal sepa cómo funcionan, cómo poner alertas sencillas y cómo mantenerlos seguros. Las personas necesitan planear de principio a fin un pequeño proyecto de monitoreo para mostrar esta habilidad y llevar su experiencia militar a puestos civiles de tecnología.",
    constraints: [
      "Nivel de lectura: palabras sencillas; los términos técnicos se explican la primera vez",
      "Aparatos: una computadora con navegador web para el simulador; no hace falta comprar equipos",
      "Tiempo: lecciones de 5 minutos, unos 60 minutos en total",
      "Las funciones y cuentas del simulador pueden cambiar; las personas revisan las condiciones actuales del sitio",
      "Redes del trabajo: nunca conectes un aparato sin la aprobación del equipo de TI o de seguridad"
    ],
    prerequisites: "Ninguno. Un primer curso de Python ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con ejemplos de la casa, el trabajo y el terreno", action: "identificar aparatos IoT y explicar el valor y el riesgo de cada uno", standard: "nombrando correctamente al menos tres aparatos" },
    { id: "O2", condition: "Con un proyecto IoT, como una alarma para un congelador", action: "seguir los datos desde el sensor, pasando por el aparato y la conexión, hasta la nube y la acción", standard: "nombrando las cuatro capas en el orden correcto" },
    { id: "O3", condition: "Sabiendo dónde está un aparato, su energía y cuántos datos envía", action: "elegir una conexión adecuada y explicar cómo un protocolo como MQTT lleva sus mensajes", standard: "con una razón que encaje con el alcance, la energía y los datos" },
    { id: "O4", condition: "Con la lectura de un sensor y un rango seguro", action: "escribir una regla de alerta como una instrucción if en Python que evite falsas alarmas", standard: "de modo que la regla dé el resultado correcto con lecturas de prueba" },
    { id: "O5", condition: "Usando un simulador gratuito en internet", action: "ejecutar un microcontrolador simulado con un sensor de temperatura y probar tu regla de alerta", standard: "viendo cómo se activa la alerta cuando cambias la lectura" },
    { id: "O6", condition: "Para cada aparato conectado de tu plan", action: "hacer una lista de los pasos que mantienen seguros los aparatos", standard: "con al menos cinco pasos correctos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan los sistemas IoT",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es el internet de las cosas",
          minutes: 4,
          goal: "Explicar qué es el IoT y reconocer aparatos IoT a tu alrededor.",
          text: [
            "El internet de las cosas (IoT) son cosas físicas que perciben el mundo, se conectan a una red y comparten datos, a menudo sin que ninguna persona escriba nada. Un termostato inteligente mide la habitación y prende la calefacción. Una pulsera de actividad cuenta los pasos y los envía a tu teléfono.",
            "El IoT se usa en casa (timbres con cámara, enchufes inteligentes, bocinas con asistente de voz), en el trabajo (máquinas que avisan cuando necesitan reparación, lo que se llama mantenimiento predictivo), en logística (rastreadores GPS en camiones y contenedores), en la agricultura (sensores de humedad del suelo), en la salud (monitores del ritmo cardíaco) y en las ciudades (semáforos inteligentes).",
            "El valor está en lo que los datos te permiten hacer: detectar un problema a tiempo, ahorrar energía o actuar desde lejos. El riesgo es que cada aparato conectado es una cosa más que se puede hackear o que puede filtrar datos privados, así que la seguridad es parte de todo trabajo IoT."
          ],
          words: [["Internet de las cosas (IoT)", "objetos físicos con sensores y conexión a una red que comparten datos."], ["Aparato inteligente", "un objeto de todos los días que se puede conectar y actuar según los datos."], ["Mantenimiento predictivo", "usar datos de sensores para arreglar una máquina antes de que se rompa."]],
          slides: [
            { title: "El IoT son", bullets: ["Cosas físicas que perciben el mundo", "Conectadas a una red", "Que comparten datos, a menudo solas"] },
            { title: "Dónde lo encuentras", bullets: ["Casa: timbres, enchufes inteligentes, bocinas", "Trabajo: máquinas que avisan de problemas", "Logística, agricultura, salud, ciudades"] },
            { title: "Valor y riesgo", bullets: ["Detectar problemas a tiempo, ahorrar energía", "Actuar desde lejos", "Cada aparato es una posible puerta de entrada"] }
          ],
          tryIt: "Recorre tu casa, tu trabajo o una tienda y haz una lista de cinco aparatos conectados que veas o uses. Para cada uno, escribe qué percibe y qué hace con los datos.",
          youCanNow: "explicar qué es el IoT y nombrar aparatos IoT de la vida diaria y del trabajo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace que un aparato sea parte del internet de las cosas?", options: ["Tiene una pantalla grande", "Cuesta más que un aparato normal", "Detecta algo, se conecta a una red y comparte datos", "Solo funciona con un teclado"], answer: 2, why: "Los aparatos IoT detectan el mundo, se conectan y comparten datos, a menudo sin que nadie escriba nada." },
            { objective: "O1", q: "El taller de vehículos de tu unidad quiere que los camiones avisen de los problemas antes de averiarse. ¿Cómo se llama este uso del IoT?", options: ["Mantenimiento predictivo", "Computación en el borde", "Una red de invitados", "Firmware"], answer: 0, why: "Que las máquinas avisen cuando necesitan reparación antes de fallar es mantenimiento predictivo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Las cuatro capas: sensores, aparatos, conexión y nube",
          minutes: 5,
          goal: "Seguir los datos de un sistema IoT desde el sensor hasta la acción.",
          text: [
            "La mayoría de los sistemas IoT tienen cuatro capas. 1) Los sensores miden algo: temperatura, movimiento, luz, ubicación, humedad. 2) Un aparato (a menudo una computadora pequeña y barata llamada microcontrolador, como un ESP32 o un Arduino) lee el sensor y envía los datos. 3) Una conexión lleva los datos: Wi-Fi, Bluetooth, red celular o una radio de largo alcance. 4) Un servicio en la nube o una aplicación guarda los datos, los muestra en un tablero y envía alertas.",
            "Algunos aparatos también tienen actuadores: partes que hacen algo en el mundo real, como un motor que abre una válvula, un relé que prende un ventilador o un zumbador.",
            "A veces el aparato toma la decisión él mismo en lugar de esperar a la nube. Esto es la computación en el borde (edge computing). Es más rápida, sigue funcionando cuando no hay internet y envía menos datos."
          ],
          steps: ["Nombra lo que se mide (el sensor).", "Nombra el aparato que lo lee.", "Nombra cómo viajan los datos (la conexión).", "Nombra adónde van y quién los ve (nube, aplicación, tablero).", "Nombra la acción, de una persona o de un actuador."],
          words: [["Sensor", "una parte que mide algo del mundo real."], ["Microcontrolador", "una computadora diminuta y barata en un chip que ejecuta un solo programa."], ["Actuador", "una parte que actúa en el mundo real, como un motor, un relé o un zumbador."], ["Tablero", "una pantalla que muestra datos en vivo con gráficos y números."], ["Computación en el borde", "procesar los datos en el aparato o cerca de él en lugar de en la nube."]],
          slides: [
            { title: "Las cuatro capas", bullets: ["1. El sensor mide", "2. El aparato lee y envía", "3. La conexión lleva", "4. La nube o la aplicación guarda, muestra y alerta"] },
            { title: "Los actuadores actúan", bullets: ["Un motor abre una válvula", "Un relé prende un ventilador", "Un zumbador hace sonar una alarma"] },
            { title: "Computación en el borde", bullets: ["Decidir en el propio aparato", "Más rápida, funciona sin conexión", "Envía menos datos"] }
          ],
          tryIt: "Elige un aparato de tu lista de la Lección 1. Dibuja cuadros para sus cuatro capas (sensor, aparato, conexión, nube o aplicación) con flechas entre ellos, y agrega la acción al final.",
          youCanNow: "seguir los datos por las cuatro capas de un sistema IoT y nombrar sensores y actuadores.",
          quickCheck: [
            { objective: "O2", q: "En un sistema IoT, ¿cuál es el trabajo de un microcontrolador?", options: ["Medir la temperatura él mismo", "Guardar los datos en la nube", "Encender un ventilador", "Leer el sensor y enviar los datos"], answer: 3, why: "El aparato, a menudo un microcontrolador, lee el sensor y envía los datos." },
            { objective: "O2", q: "El sensor de un portón lejano debe seguir funcionando cuando se cae el internet. ¿Qué diseño ayuda?", options: ["Enviar primero cada lectura a la nube", "Dejar que el aparato tome la decisión él mismo (computación en el borde)", "Usar una pantalla más grande", "Quitar el sensor"], answer: 1, why: "La computación en el borde deja que el aparato decida solo, así que sigue funcionando sin internet." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Cómo se conectan y se comunican los aparatos",
          minutes: 5,
          goal: "Elegir una conexión adecuada para un aparato IoT.",
          text: [
            "No hay una conexión mejor que todas; cada una equilibra alcance, energía y datos. El Wi-Fi es rápido y común en la casa y el trabajo, pero gasta mucha energía. Bluetooth Low Energy (BLE) gasta muy poca energía y tiene poco alcance, bueno para aparatos que se llevan puestos y teléfonos. La red celular (4G, 5G y versiones de bajo consumo) funciona casi en cualquier lugar con señal, buena para vehículos y lugares lejanos, pero necesita un plan de datos. LoRaWAN es una radio de bajo consumo y largo alcance para pocas cantidades de datos, que se usa en sensores del campo y de las ciudades.",
            "Los aparatos también necesitan un idioma común, llamado protocolo, para enviar mensajes. MQTT es un protocolo liviano y popular: un aparato publica una lectura en un tema, como despensa/congelador/temp, y cualquier aplicación suscrita a ese tema la recibe. HTTP, el mismo protocolo que usan los sitios web, también es común.",
            "Los aparatos con batería ahorran energía durmiendo la mayor parte del tiempo y despertando solo para leer y enviar."
          ],
          steps: ["¿Qué tan lejos deben viajar los datos?", "¿Hay corriente eléctrica o solo una batería?", "¿Cuántos datos y cada cuánto?", "¿Hay Wi-Fi o señal celular donde estará?", "Elige la conexión que va con las cuatro respuestas."],
          words: [["Wi-Fi", "red inalámbrica rápida para casas y oficinas; gasta más energía."], ["Bluetooth Low Energy (BLE)", "conexión inalámbrica de muy bajo consumo y poco alcance."], ["Red celular", "conexión por las redes de telefonía móvil."], ["LoRaWAN", "una red de radio de largo alcance y bajo consumo para pocas cantidades de datos."], ["Protocolo", "un conjunto de reglas acordadas para enviar mensajes."], ["MQTT", "un protocolo de mensajes liviano en el que los aparatos publican en temas y las aplicaciones se suscriben."]],
          slides: [
            { title: "Elige por alcance, energía y datos", bullets: ["Wi-Fi: rápido, más energía", "BLE: muy poca energía, poco alcance", "Celular: casi en cualquier lugar, necesita un plan", "LoRaWAN: largo alcance, pocos datos"] },
            { title: "Protocolos", bullets: ["MQTT: publicar en un tema, las aplicaciones se suscriben", "Tema de ejemplo: despensa/congelador/temp", "HTTP: el idioma de los sitios web"] },
            { title: "Ahorra batería", bullets: ["Dormir la mayor parte del tiempo", "Despertar, leer, enviar y volver a dormir"] }
          ],
          tryIt: "Elige la mejor conexión para cada caso y escribe una razón: un contador de pasos en tu muñeca, un sensor de suelo en un campo a 5 km de cualquier edificio, un rastreador GPS en un camión de reparto y un enchufe inteligente en una sala.",
          youCanNow: "elegir una conexión adecuada y explicar cómo envían mensajes los aparatos IoT.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es MQTT?", options: ["Un protocolo ligero en el que los aparatos publican lecturas en temas", "Un tipo de batería", "Una radio de largo alcance", "Una marca de sensor"], answer: 0, why: "MQTT es un protocolo ligero: los aparatos publican en un tema y las aplicaciones suscritas lo reciben." },
            { objective: "O3", q: "Un sensor a batería en un patio de almacenamiento sin Wi-Fi envía una lectura pequeña cada hora. ¿Qué eliges?", options: ["Wi-Fi", "Bluetooth Low Energy", "LoRaWAN", "Un teclado con cable"], answer: 2, why: "LoRaWAN usa poca energía y tiene largo alcance para cantidades pequeñas de datos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan los sistemas IoT",
        questions: [
          { objective: "O1", q: "¿Cuál es un aparato IoT?", options: ["Un calendario de papel", "Un mapa impreso", "Un termostato inteligente que ajusta la calefacción solo", "Una silla de madera"], answer: 2, why: "Percibe, se conecta y actúa según los datos." },
          { objective: "O2", q: "En un sistema IoT, ¿qué hace un sensor?", options: ["Mide algo del mundo real", "Guarda datos en la nube", "Paga la cuenta de internet", "Muestra el tablero"], answer: 0, why: "Los sensores miden cosas como la temperatura o el movimiento." },
          { objective: "O2", q: "Un relé que prende un ventilador es un:", options: ["Sensor", "Protocolo", "Tablero", "Actuador"], answer: 3, why: "Los actuadores hacen algo en el mundo físico." },
          { objective: "O3", q: "Un sensor de suelo está en un campo lejos del Wi-Fi y funciona con batería. ¿Qué conexión va mejor?", options: ["Wi-Fi", "LoRaWAN", "Un cable USB", "Bluetooth a un teléfono en tu bolsillo"], answer: 1, why: "LoRaWAN es de largo alcance y bajo consumo para pocos datos." },
          { objective: "O3", q: "En MQTT, ¿cómo recibe una aplicación las lecturas de un congelador?", options: ["Llama al congelador por teléfono", "Se suscribe al tema en el que publica el congelador", "Las imprime", "Las adivina"], answer: 1, why: "Las aplicaciones MQTT se suscriben a los temas en los que publican los aparatos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir y proteger un proyecto IoT",
      lessons: [
        {
          objectives: ["O4"],
          title: "De la lectura a la acción: escribir una regla de alerta",
          minutes: 6,
          goal: "Escribir en Python una regla sencilla que convierta una lectura de un sensor en una alerta.",
          text: [
            "El corazón de la mayoría de los proyectos IoT es una regla: si una lectura pasa un límite, haz algo. Si el congelador de la despensa está a más de -15 grados C durante 10 minutos, envía un mensaje al encargado. Si la humedad del suelo baja del 30 por ciento, abre la válvula del agua.",
            "En Python, una regla es una instrucción if. Por ejemplo: temp = 28.5, y luego if temp > 27: print(\"ALERTA: el cuarto de servidores está muy caliente\") else: print(\"OK\"). En un aparato real la lectura viene del sensor, y la acción podría prender un LED, activar un relé o enviar un mensaje.",
            "Las buenas reglas evitan las falsas alarmas. Un pico puede ser una puerta que se abrió un momento, así que muchos sistemas esperan varias lecturas seguidas antes de alertar. Elige el límite con las personas que conocen el equipo, y decide quién recibe la alerta y qué debe hacer."
          ],
          steps: ["Decide qué mides y cuál es su rango seguro.", "Elige el límite que significa un problema.", "Escríbelo como if lectura > limite: (o < limite).", "Decide la acción: un mensaje, una luz o un relé.", "Agrega una regla para evitar falsas alarmas, como varias lecturas seguidas."],
          words: [["Regla", "una instrucción si-entonces: si pasa esto, haz aquello."], ["Umbral", "el límite que activa una acción."], ["Falsa alarma", "una alerta cuando en realidad no pasa nada."], ["Lectura", "una medición de un sensor."]],
          slides: [
            { title: "El IoT funciona con reglas", bullets: ["Si una lectura pasa un límite", "Entonces haz algo", "Congelador muy caliente: mensaje al encargado"] },
            { title: "Una regla en Python", bullets: ["if temp > 27:", "    print(\"ALERTA: muy caliente\")", "else: print(\"OK\")"] },
            { title: "Evita las falsas alarmas", bullets: ["Espera varias lecturas seguidas", "Fija los límites con los expertos", "Decide quién actúa y cómo"] }
          ],
          tryIt: "Abre Google Colab (colab.research.google.com) o cualquier editor de Python. Haz una lista de seis lecturas de temperatura, como [22, 23, 29, 30, 31, 24]. Recórrelas con un bucle e imprime \"ALERTA\" para cualquier lectura mayor que 27 y \"OK\" para las demás. Extra: alerta solo cuando dos lecturas seguidas sean mayores que 27.",
          youCanNow: "escribir en Python una regla de alerta sencilla que convierte lecturas de sensores en una acción.",
          quickCheck: [
            { objective: "O4", q: "La regla es: if temp > 27: print(\"ALERT\"). La lectura es 25. ¿Qué se imprime?", options: ["ALERT", "Nada", "Un error", "27"], answer: 1, why: "25 no es mayor que 27, así que la instrucción if no se ejecuta." },
            { objective: "O4", q: "La alarma de un cuarto de servidores se activa cada vez que la puerta se abre un segundo. ¿Qué cambias?", options: ["Apagar la alarma para siempre", "Subir el límite a 100 grados", "Quitar el sensor", "Alertar solo después de varias lecturas altas seguidas"], answer: 3, why: "Esperar varias lecturas seguidas evita falsas alarmas por subidas cortas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Probar un aparato simulado en tu navegador",
          minutes: 6,
          goal: "Ejecutar un microcontrolador simulado con un sensor y ver cómo cambian las lecturas.",
          text: [
            "Puedes practicar IoT sin comprar piezas. Un simulador en línea como Wokwi te deja colocar una placa virtual como un ESP32, agregar un sensor como el DHT22 de temperatura y humedad, y ejecutar código en tu navegador web. Revisa en el sitio qué funciones son gratuitas y si necesitas una cuenta.",
            "La forma más fácil de empezar es abrir uno de los proyectos de ejemplo ya hechos del simulador para el ESP32 con un DHT22, y luego leer el código y ejecutarlo. En MicroPython, una versión de Python para aparatos pequeños, las líneas clave se ven así: sensor = dht.DHT22(machine.Pin(15)), luego sensor.measure() y t = sensor.temperature(). El número del pin debe coincidir con el pin al que está conectado el sensor en el diagrama.",
            "Mientras corre la simulación, puedes hacer clic en el sensor virtual y cambiar su temperatura, y luego mirar cómo responden las lecturas que imprimes y tu regla de alerta. Así es exactamente como se prueba un aparato real antes de instalarlo."
          ],
          steps: ["Abre el sitio web del simulador en tu navegador.", "Busca un proyecto de ejemplo para un ESP32 con un sensor DHT22.", "Lee el código: encuentra dónde lee el sensor y dónde imprime.", "Empieza la simulación y mira las lecturas.", "Cambia la temperatura del sensor virtual y agrega tu regla de alerta de la Lección 4."],
          words: [["Simulador", "un programa que se comporta como un equipo real para que pruebes sin comprarlo."], ["ESP32", "un microcontrolador barato con Wi-Fi y Bluetooth incorporados."], ["DHT22", "un sensor de temperatura y humedad común y barato."], ["MicroPython", "una versión pequeña de Python que funciona en microcontroladores."], ["Pin", "un punto de conexión de metal en una placa donde se conectan las piezas."]],
          slides: [
            { title: "Practica sin piezas", bullets: ["Los simuladores en línea funcionan en el navegador", "Placa ESP32 virtual más un sensor DHT22", "Revisa qué funciones son gratuitas"] },
            { title: "Las líneas clave de MicroPython", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Prueba como si fuera real", bullets: ["Cambia la temperatura virtual", "Mira cómo responde tu regla de alerta", "El pin del código debe coincidir con la conexión"] }
          ],
          sources: [WOKWI],
          tryIt: "Abre un ejemplo de ESP32 con DHT22 en un simulador en línea y ejecútalo. Cambia la temperatura del sensor virtual al menos dos veces y anota las lecturas. Si puedes, agrega una instrucción if que imprima \"ALERTA\" por encima de 27 grados C. Si no puedes usar el simulador, sigue el código de ejemplo en papel: marca la línea que lee el sensor y la línea que imprime.",
          youCanNow: "ejecutar y probar un aparato IoT simulado y conectar sus lecturas con una regla de alerta.",
          quickCheck: [
            { objective: "O5", q: "En MicroPython, ¿qué línea lee la temperatura después de sensor.measure()?", options: ["print(15)", "if temp > 27:", "t = sensor.temperature()", "machine.Pin()"], answer: 2, why: "sensor.temperature() devuelve la lectura después de sensor.measure()." },
            { objective: "O5", q: "Tu regla de alerta simulada nunca se activa. ¿Cómo la pruebas?", options: ["Haces clic en el sensor virtual y subes su temperatura por encima del límite", "Compras primero un sensor real", "Borras el código y empiezas de nuevo", "Cambias el número de pin al azar"], answer: 0, why: "Cambiar la lectura del sensor virtual te deja ver cómo responde la regla." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger los aparatos IoT y planear tu proyecto",
          minutes: 6,
          goal: "Aplicar los pasos clave de seguridad a los aparatos conectados y terminar el plan de tu proyecto.",
          text: [
            "Los aparatos conectados son uno de los blancos favoritos de los atacantes porque muchos vienen con contraseñas de fábrica débiles y nunca se actualizan. Una cámara o un enchufe inteligente hackeado puede espiar a las personas o usarse para atacar a otros.",
            "Los consejos de la Comisión Federal de Comercio de EE. UU. (FTC) para los aparatos de la casa: cambia el usuario y la contraseña de fábrica y no repitas contraseñas; activa la autenticación de dos factores donde se ofrezca; mantén actualizados el firmware y la aplicación del aparato; apaga las funciones que no usas, como la administración remota; y desconecta los aparatos viejos. Para el enrutador: cambia su configuración de fábrica, activa el cifrado y busca actualizaciones. Una red de invitados mantiene los aparatos inteligentes separados de las computadoras con archivos privados.",
            "En el trabajo, además, mantén una lista de todos los aparatos conectados, pon los aparatos IoT en su propia red y junta solo los datos que necesitas, sobre todo cuando hay cámaras o micrófonos. Pregunta al equipo de informática o de seguridad de la organización antes de conectar cualquier cosa a una red de trabajo."
          ],
          steps: ["Cambia todas las contraseñas de fábrica; usa una única y segura.", "Activa la autenticación de dos factores donde se ofrezca.", "Actualiza el firmware y las aplicaciones de los aparatos.", "Apaga las funciones que no usas; desconecta los aparatos viejos.", "Pon los aparatos inteligentes en una red separada o de invitados, y mantén una lista de aparatos."],
          words: [["Contraseña de fábrica", "la contraseña con la que viene un aparato; los atacantes conocen esas listas."], ["Firmware", "el software incorporado que hace funcionar un aparato."], ["Autenticación de dos factores", "iniciar sesión con una contraseña más una segunda prueba, como un código."], ["Red de invitados", "una red Wi-Fi aparte que mantiene los aparatos lejos de tus computadoras principales."], ["Inventario de aparatos", "una lista de todos los aparatos conectados de los que eres responsable."]],
          slides: [
            { title: "Por qué atacan el IoT", bullets: ["Contraseñas de fábrica débiles", "Aparatos que nunca se actualizan", "Las cámaras y micrófonos pueden filtrar datos privados"] },
            { title: "Protege cada aparato", bullets: ["Cambia las contraseñas de fábrica; no las repitas", "Dos factores donde se ofrezca", "Actualiza el firmware y las aplicaciones", "Apaga las funciones que no usas"] },
            { title: "Protege la red", bullets: ["Cambia la configuración de fábrica del enrutador, activa el cifrado", "Aparatos inteligentes en una red de invitados", "Mantén una lista de aparatos; pregunta a informática en el trabajo"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Tarea final: escribe tu plan IoT de una página (por ejemplo, un cuarto de servidores, el congelador de un banco de alimentos o un huerto). Nombra el sensor, el aparato, la conexión y adónde van los datos, dibuja el recorrido del sensor a la alerta, escribe la regla de alerta como una instrucción if de Python y haz una lista de cinco pasos de seguridad que tomarás.",
          youCanNow: "proteger los aparatos conectados y planear un proyecto completo de monitoreo IoT.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué los aparatos IoT son un blanco común de los atacantes?", options: ["Siempre están apagados", "Usan demasiada energía", "No tienen conexión a la red", "Muchos vienen con contraseñas predeterminadas débiles y nunca se actualizan"], answer: 3, why: "Las contraseñas predeterminadas débiles y la falta de actualizaciones hacen que sea fácil entrar en muchos aparatos." },
            { objective: "O6", q: "Una cámara nueva para la puerta tiene una función de administración remota que no vas a usar. ¿Qué haces?", options: ["La dejas activada por si acaso", "La desactivas", "Compartes su contraseña con el equipo", "Usas en ella la misma contraseña de tu correo"], answer: 1, why: "Desactivar las funciones que no usas cierra puertas de entrada a los atacantes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construir y proteger un proyecto IoT",
        questions: [
          { objective: "O4", q: "¿Qué línea es una regla de alerta correcta en Python?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERTA\")"], answer: 3, why: "Python usa if, una condición y dos puntos." },
          { objective: "O4", q: "¿Por qué esperar varias lecturas altas seguidas antes de alertar?", options: ["Para evitar falsas alarmas por un pico corto", "Para ahorrar papel", "Porque los sensores siempre se equivocan", "Para hacer más lento el aparato"], answer: 0, why: "Un pico, como una puerta abierta, puede no ser un problema real." },
          { objective: "O5", q: "En el simulador, tu código lee el pin 15 pero el sensor está conectado al pin 4. ¿Qué pasa?", options: ["Funciona de todos modos", "La placa se incendia", "El código no recibirá lecturas del sensor", "La temperatura se duplica"], answer: 2, why: "El pin del código debe coincidir con la conexión." },
          { objective: "O6", q: "¿Qué es lo PRIMERO que debes hacer con una cámara inteligente nueva?", options: ["Dejar la contraseña de fábrica", "Compartir su acceso con tus amigos", "Desactivar las actualizaciones", "Cambiar la contraseña de fábrica por una única y segura"], answer: 3, why: "Los atacantes conocen bien las contraseñas de fábrica." },
          { objective: "O6", q: "¿Por qué poner los aparatos inteligentes en una red de invitados?", options: ["Para que sean más rápidos", "Porque no necesitan contraseña", "Para mantenerlos separados de las computadoras con archivos privados", "Para desactivar el cifrado"], answer: 2, why: "La separación limita lo que puede alcanzar un aparato hackeado." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción al internet de las cosas (IoT)",
    questions: [
      { objective: "O1", q: "El internet de las cosas es:", options: ["Solo las redes sociales", "Objetos físicos con sensores que se conectan y comparten datos", "Un tipo de papel para impresora", "Un videojuego"], answer: 1, why: "El IoT son cosas conectadas que perciben y comparten." },
      { objective: "O1", q: "Usar datos de sensores para arreglar una máquina antes de que se rompa se llama:", options: ["Mantenimiento predictivo", "Phishing", "Almacenamiento en el borde", "Firmware"], answer: 0, why: "El mantenimiento predictivo detecta los problemas a tiempo." },
      { objective: "O1", q: "¿Por qué la seguridad es parte de todo trabajo IoT?", options: ["Los aparatos IoT no se pueden hackear", "Solo se necesita en los teléfonos", "Cada aparato conectado puede ser una puerta de entrada para los atacantes", "Hace más baratos los aparatos"], answer: 2, why: "Más aparatos significan más puertas de entrada." },
      { objective: "O2", q: "¿Cuáles son las cuatro capas de un sistema IoT?", options: ["Sensor, aparato, conexión, nube o aplicación", "Teclado, ratón, pantalla, impresora", "Correo, mensaje, llamada, publicación", "Frecuente, esporádico, poco frecuente, archivo"], answer: 0, why: "Los datos van del sensor al aparato, a la conexión y a la nube o aplicación." },
      { objective: "O2", q: "Una computadora pequeña y barata en un chip que ejecuta un solo programa es un:", options: ["Centro de servidores", "Enrutador", "Tablero", "Microcontrolador"], answer: 3, why: "Placas como el ESP32 y el Arduino son microcontroladores." },
      { objective: "O2", q: "Un motor que abre una válvula de agua es un:", options: ["Sensor", "Actuador", "Protocolo", "Tema"], answer: 1, why: "Los actuadores actúan sobre el mundo físico." },
      { objective: "O2", q: "Tomar decisiones en el aparato en lugar de en la nube es:", options: ["Facturación en la nube", "Computación en el borde", "Bluetooth", "Una falsa alarma"], answer: 1, why: "La computación en el borde procesa los datos cerca de donde se juntan." },
      { objective: "O3", q: "¿Qué conexión es la mejor para una pulsera de actividad que se comunica con tu teléfono?", options: ["LoRaWAN", "Un cable", "Televisión satelital", "Bluetooth Low Energy"], answer: 3, why: "BLE es de bajo consumo y poco alcance." },
      { objective: "O3", q: "¿Qué conexión va bien para un rastreador GPS en un camión de reparto?", options: ["Red celular", "El Wi-Fi de casa", "Un cable USB", "Solo Bluetooth"], answer: 0, why: "La red celular funciona casi en cualquier lugar con señal." },
      { objective: "O3", q: "En MQTT, un congelador envía su lectura:", options: ["Imprimiéndola", "Llamando al encargado", "Publicándola en un tema", "Guardándola en una memoria USB"], answer: 2, why: "Los aparatos publican; las aplicaciones se suscriben." },
      { objective: "O3", q: "¿Cómo duran mucho tiempo los aparatos IoT con batería?", options: ["Nunca se encienden", "Usan el Wi-Fi más rápido", "Envían video todo el día", "Duermen la mayor parte del tiempo y despiertan para leer y enviar"], answer: 3, why: "Dormir ahorra energía." },
      { objective: "O4", q: "Una regla en el IoT suele significar:", options: ["Una regla para medir", "Una regla de contraseñas", "Si una lectura pasa un límite, hacer algo", "Un cable"], answer: 2, why: "Las reglas convierten las lecturas en acciones." },
      { objective: "O4", q: "lecturas = [20, 28, 22]. Con la regla \"alertar por encima de 27\", ¿cuántas alertas hay?", options: ["0", "1", "2", "3"], answer: 1, why: "Solo 28 es mayor que 27." },
      { objective: "O4", q: "Se activa una alerta cuando alguien abre la puerta del congelador un segundo. Esto es:", options: ["Una falsa alarma", "Computación en el borde", "Una actualización de firmware", "Cifrado"], answer: 0, why: "Un pico corto que no es un problema real es una falsa alarma." },
      { objective: "O5", q: "¿Por qué usar un simulador antes de comprar piezas?", options: ["Porque los aparatos reales nunca funcionan", "Para no aprender código", "Para probar primero el diseño y el código gratis o barato", "Los simuladores son obligatorios por ley"], answer: 2, why: "Los simuladores te dejan probar sin equipo." },
      { objective: "O5", q: "MicroPython es:", options: ["Una versión pequeña de Python para microcontroladores", "Una serpiente", "Un tipo de sensor", "Una marca de Wi-Fi"], answer: 0, why: "Ejecuta código de Python en placas pequeñas." },
      { objective: "O5", q: "Un DHT22 mide:", options: ["La ubicación GPS", "El ritmo cardíaco", "Video", "La temperatura y la humedad"], answer: 3, why: "Es un sensor de temperatura y humedad." },
      { objective: "O6", q: "¿Cuál es la opción más segura para la contraseña de un enchufe inteligente nuevo?", options: ["Dejar la de fábrica", "Una contraseña única y segura", "Usar la misma contraseña que tu correo", "\"password123\""], answer: 1, why: "Las contraseñas únicas y seguras evitan las entradas fáciles." },
      { objective: "O6", q: "¿Qué debes hacer con el firmware de los aparatos IoT?", options: ["No actualizarlo nunca", "Mantenerlo actualizado", "Borrarlo", "Compartirlo en internet"], answer: 1, why: "Las actualizaciones arreglan agujeros de seguridad." },
      { objective: "O6", q: "Quieres conectar un sensor a la red de tu trabajo. ¿Qué haces primero?", options: ["Lo conectas sin decir nada", "Desactivas el cortafuegos", "Compartes la contraseña del Wi-Fi en internet", "Preguntas al equipo de informática o de seguridad"], answer: 3, why: "Las redes de trabajo tienen reglas; informática debe aprobar los aparatos nuevos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      6,
      7,
      9,
      11,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Partes del sistema",
        objective: "O2",
        notYet: "Falta el sensor, el aparato o el destino.",
        meets: "Nombra el sensor, el aparato, la conexión y adónde van los datos.",
        exceeds: "También nombra un actuador o una decisión en el borde y dice por qué ayuda."
      },
      {
        name: "Dibujo del recorrido de los datos",
        objective: "O2",
        notYet: "No hay dibujo, o los pasos están desordenados.",
        meets: "El dibujo muestra en orden el sensor, el aparato, la conexión, la nube o la aplicación, y la alerta.",
        exceeds: "El dibujo también muestra quién recibe la alerta y qué hace."
      },
      {
        name: "Elección de la conexión",
        objective: "O3",
        notYet: "La conexión no sirve para el lugar o la energía, como Wi-Fi en un campo sin Wi-Fi.",
        meets: "La conexión encaja con el alcance, la energía y los datos del proyecto.",
        exceeds: "Explica por qué otra conexión no serviría igual de bien."
      },
      {
        name: "Regla de alerta",
        objective: "O4",
        notYet: "Falta la regla o no funcionaría, por ejemplo por una comparación equivocada.",
        meets: "Una instrucción if correcta en Python con un límite y una acción sensatos.",
        exceeds: "También evita falsas alarmas, por ejemplo esperando varias lecturas, y se probó en el simulador."
      },
      {
        name: "Pasos de seguridad",
        objective: "O6",
        notYet: "Menos de cinco pasos, o pasos que no protegen los aparatos.",
        meets: "Cinco pasos correctos, como contraseñas únicas, actualizaciones y una red separada.",
        exceeds: "También incluye una lista de aparatos y pedir permiso a TI antes de conectar algo en el trabajo."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que añaden habilidades de IoT o sensores a su currículum o se postulan a un puesto de instalaciones, logística o TI en un plazo de 60 días",
      "Personas que dicen haber cambiado contraseñas predeterminadas o actualizado aparatos inteligentes en casa en un plazo de 30 días (encuesta de seguimiento)",
      "Personas que empiezan después un curso de Python, redes o ciberseguridad"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con navegador web e internet",
      "Un simulador IoT gratuito en internet, como Wokwi (revisa sus funciones gratuitas actuales)",
      "Papel y lápiz, o un documento, para el plan de una página y el dibujo del recorrido de los datos",
      "Unos 60 minutos en total: lecciones, práctica con el simulador, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión; muestra el simulador en una pantalla compartida antes de que las personas lo prueben.",
      "Invita a los veteranos a comparar el IoT con las revisiones de equipos, los enlaces de radio y los procedimientos de alerta que ya conocen.",
      "Da a cada persona o pareja un proyecto distinto (cuarto de servidores, congelador de la despensa, huerto) para poder comparar los planes.",
      "No conecten ningún aparato real a la red de un programa o del trabajo sin la aprobación del equipo de TI o de seguridad.",
      "Califica el plan final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

"use strict";

// Koach Learn course (shared), Spanish translation of shared/it-support-fundamentals.js. See scripts/koachlearn-courses/README.md, "Translations".

const A_PLUS = { name: "Certificación CompTIA A+ (página oficial)", url: "https://www.comptia.org/en-us/certifications/a/" };
const CORE1 = { name: "Detalles del examen CompTIA A+ Core 1 (220-1201)", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" };
const CORE2 = { name: "Detalles del examen CompTIA A+ Core 2 (220-1202)", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" };
const BLS = { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Especialistas en soporte informático", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm" };

module.exports = {
  id: "it-support-fundamentals-es",
  lang: "es",
  translationOf: "it-support-fundamentals",
  category: "Workforce Development",
  name: "Fundamentos de soporte técnico de TI (preparación para CompTIA A+)",
  skills: "Nombrar el hardware de una computadora, Revisar una conexión de red, Usar las herramientas del sistema operativo, Resolver problemas paso a paso, Escribir tickets de mesa de ayuda, Planificar los exámenes A+",
  outcome: "trabajar como técnico de mesa de ayuda de nivel inicial: nombrar las partes de una computadora, revisar una conexión de red con ipconfig y ping, usar las herramientas del sistema, resolver un problema con el método de seis pasos, escribir un ticket claro y seguir tu propio plan de estudio con fechas para los dos exámenes CompTIA A+.",
  about: [
    "El soporte técnico de TI (también llamado mesa de ayuda o soporte de escritorio) es un primer trabajo común en tecnología. Los técnicos de soporte ayudan a las personas cuando una computadora, una impresora, un teléfono o una red deja de funcionar. La certificación de inicio más conocida para este trabajo es CompTIA A+ (CompTIA es una organización de la industria tecnológica que crea exámenes de certificación).",
    "Este curso te prepara para A+. No te da la certificación. Para obtener A+ debes aprobar dos exámenes, Core 1 y Core 2, en un centro de exámenes o en línea. Antes de reservar, revisa la página oficial de CompTIA para ver los exámenes, los precios y las opciones actuales.",
    "Vas a practicar en tu propia computadora con herramientas gratis que ya vienen incluidas. No necesitas abrir una computadora ni comprar nada. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final.",
    "Este curso es para cualquier persona que empieza: quienes buscan trabajo, veteranos, jóvenes adultos, personas que regresan a casa después de estar en prisión, inmigrantes y adultos que cambian de carrera."
  ],
  finalTask: "Arma tu kit de inicio en soporte de TI: (1) un ticket de práctica de mesa de ayuda para un problema real o inventado, escrito con los seis pasos de resolución de problemas y los campos del ticket de la Lección 6; (2) una nota de una página sobre tu propia computadora: su sistema operativo y versión, el almacenamiento libre, la dirección IP, la puerta de enlace predeterminada y si ping funcionó; y (3) tu plan de estudio y de exámenes A+ con una fecha objetivo para Core 1 y otra para Core 2, los dominios de cada examen con su peso y las horas que estudiarás cada semana.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que buscan un primer trabajo en tecnología: personas que buscan empleo, veteranos, personas que regresan a casa después de estar en prisión, inmigrantes y personas que cambian de carrera. La mayoría usa un teléfono y una computadora todos los días, pero nunca ha reparado uno ni ha trabajado en TI.",
    startingPoint: "Saben usar un navegador web, el correo electrónico y aplicaciones comunes. La mayoría no ha usado una línea de comandos, no ha revisado la configuración del sistema ni ha escrito un ticket de soporte. Pocos saben qué cubren los exámenes A+.",
    gap: "Los trabajos de mesa de ayuda piden conocimientos básicos de hardware, redes, sistemas operativos y resolución de problemas, y muchas veces piden CompTIA A+. Los participantes necesitan una idea clara del trabajo, práctica con herramientas reales y un plan con fechas para que de verdad presenten los dos exámenes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada palabra técnica explicada",
      "Dispositivos: una computadora con Windows o Mac (una computadora de la biblioteca sirve para casi todas las tareas, pero algunos comandos pueden estar bloqueados)",
      "No se abren computadoras ni fuentes de alimentación; el hardware se aprende con imágenes o solo con un equipo viejo apagado y desconectado",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo y las citas",
      "Las reglas, los precios y las versiones de los exámenes cambian: los participantes revisan comptia.org antes de reservar"
    ],
    prerequisites: "Sentirse cómodo con una computadora, el mouse y el teclado. Si eso es nuevo para ti, toma primero \"Habilidades básicas de computación\". \"Introducción a la ciberseguridad\" es un buen complemento."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con imágenes o una lista de partes de una computadora", action: "identificar cada parte principal del hardware y decir para qué sirve", standard: "acertando al menos 8 de 10" },
    { id: "O2", condition: "Usando tu propia computadora con Windows o Mac", action: "usar ipconfig (o la configuración de red) y ping para anotar la dirección IP y la puerta de enlace predeterminada y probar la conexión", standard: "sin ayuda, y decir qué significa una dirección 169.254" },
    { id: "O3", condition: "Usando tu propia computadora", action: "encontrar la versión del sistema operativo, el almacenamiento libre, los programas abiertos y el estado de las actualizaciones con herramientas del sistema", standard: "en menos de 10 minutos" },
    { id: "O4", condition: "Con un problema de computadora que trae un usuario", action: "aplicar el método de resolución de problemas de seis pasos de CompTIA y anotar cada paso", standard: "con los seis pasos en el orden correcto" },
    { id: "O5", condition: "Con una llamada o un mensaje de un usuario que tiene un problema", action: "escribir un ticket de mesa de ayuda y una respuesta corta y amable para el usuario", standard: "con todos los campos del ticket completos y sin culpar al usuario ni usar jerga en la respuesta" },
    { id: "O6", condition: "Usando las páginas oficiales de los exámenes CompTIA A+", action: "escribir un plan de estudio y de exámenes con fechas objetivo para Core 1 y Core 2", standard: "que cubra cada dominio del examen con su peso y un tiempo de estudio semanal" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo, el hardware y la red",
      lessons: [
        {
          title: "El trabajo en mesa de ayuda y los dos exámenes A+",
          objectives: ["O6"],
          minutes: 5,
          goal: "Nombrar los dos exámenes A+, sus códigos y los temas principales que cubre cada uno.",
          text: [
            "Un técnico de soporte responde llamadas, chats y tickets, prepara computadoras y cuentas, arregla problemas comunes y sabe cuándo pasar un problema difícil a un técnico con más experiencia. Algunos nombres del puesto son técnico de mesa de ayuda, especialista en soporte de TI, soporte de escritorio y técnico de campo.",
            "CompTIA A+ es una certificación de inicio muy conocida para este trabajo. La otorga CompTIA, no este curso. Debes aprobar dos exámenes. Core 1 (220-1201) cubre dispositivos móviles, redes, hardware, virtualización y nube, y la resolución de problemas de hardware y de red. Core 2 (220-1202) cubre sistemas operativos, seguridad, resolución de problemas de software y procedimientos de trabajo. Puedes presentarlos en cualquier orden.",
            "Cuando lo revisamos en octubre de 2026, cada examen tenía hasta 90 preguntas en 90 minutos, con preguntas de opción múltiple, de arrastrar y soltar, y basadas en desempeño (pequeñas tareas prácticas). CompTIA recomienda unos 12 meses de experiencia práctica, pero es solo una recomendación. Los exámenes, los precios y las versiones cambian, así que siempre revisa las páginas oficiales antes de reservar.",
            "Cada examen tiene dominios (áreas de temas) con un peso, que es la parte del examen que ocupa ese tema. Tu tiempo de estudio debe seguir esos pesos."
          ],
          steps: ["Abre la página oficial de CompTIA A+.", "Abre las páginas de los exámenes Core 1 y Core 2.", "Anota el código de cada examen y sus dominios con sus pesos.", "Busca en el sitio oficial el precio actual y las opciones para presentar el examen (centro de exámenes o en línea)."],
          words: [["Mesa de ayuda", "el equipo al que la gente contacta cuando su tecnología no funciona."], ["Certificación", "un título que obtienes al aprobar un examen y que muestra que tienes ciertas habilidades."], ["Dominio", "un área de temas de un examen. Su peso es la parte de las preguntas que trata de ese tema."], ["Pregunta basada en desempeño", "una tarea del examen en la que haces algo, como relacionar configuraciones o arreglar una instalación, en vez de elegir una respuesta."]],
          slides: [
            { title: "Qué hace un técnico de soporte", bullets: ["Responde llamadas, chats y tickets", "Prepara computadoras, impresoras y cuentas", "Arregla problemas comunes; pasa los difíciles a otros"] },
            { title: "CompTIA A+ = dos exámenes", bullets: ["Core 1 (220-1201): hardware, redes, móviles, nube, resolución de problemas", "Core 2 (220-1202): sistemas operativos, seguridad, software, procedimientos", "Aprueba los dos, en cualquier orden"] },
            { title: "Formato del examen (revisado en oct. de 2026)", bullets: ["Hasta 90 preguntas y 90 minutos cada uno", "Opción múltiple, arrastrar y soltar, basadas en desempeño", "Revisa comptia.org para ver los detalles y el precio actuales"] },
            { title: "Este curso te prepara", bullets: ["No otorga A+", "CompTIA la otorga cuando apruebas los dos exámenes"] }
          ],
          sources: [A_PLUS, CORE1, CORE2, BLS],
          tryIt: "Abre las páginas oficiales de Core 1 y Core 2. En un papel, haz dos columnas, una por examen. Escribe el código del examen y luego cada dominio con su peso. Encierra en un círculo el dominio más grande de cada examen: ahí pasarás más tiempo estudiando.",
          youCanNow: "nombrar los dos exámenes A+, sus códigos y sus dominios principales, y encontrar los detalles actuales en la página oficial.",
          quickCheck: [
            { objective: "O6", q: "¿Cuántos exámenes debes aprobar para obtener CompTIA A+?", options: ["Uno", "Dos: Core 1 y Core 2", "Tres", "Ninguno; este curso la otorga"], answer: 1, why: "A+ requiere Core 1 y Core 2; el curso solo te prepara." },
            { objective: "O6", q: "¿Dónde debes revisar el precio y la versión actual del examen A+?", options: ["En una publicación de un foro del año pasado", "Con un amigo que aprobó en 2019", "En el sitio web oficial de CompTIA", "En cualquier video sobre A+"], answer: 2, why: "Los precios y las versiones del examen cambian; la página oficial es la única fuente confiable." }
          ]
        },
        {
          title: "Dentro de la computadora: las partes principales del hardware",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identificar las partes principales del hardware de una computadora y decir para qué sirve cada una.",
          text: [
            "El hardware son las partes físicas que puedes tocar. La tarjeta madre es la placa principal donde se conecta todo. La CPU (procesador) es la que piensa. La RAM (memoria) guarda lo que estás usando en este momento y se borra cuando se apaga la computadora. El almacenamiento guarda tus archivos cuando la computadora está apagada: un SSD (unidad de estado sólido, rápida y sin piezas que se mueven) o un HDD (disco duro, más lento, con discos que giran).",
            "La fuente de alimentación (PSU) convierte la corriente del enchufe en la energía que usan las partes. La tarjeta gráfica (GPU) dibuja la imagen en la pantalla; muchas computadoras tienen los gráficos dentro de la CPU. Los puertos de afuera incluyen USB (USB-A y el USB-C, más pequeño y reversible), HDMI y DisplayPort para pantallas, y Ethernet para una red con cable.",
            "Una pista común en la mesa de ayuda: una computadora lenta con muchos programas abiertos puede necesitar más RAM; una computadora que tarda mucho en encender puede tener un disco casi lleno o viejo.",
            "La seguridad primero: en este curso no necesitas abrir una computadora. Un técnico siempre apaga y desconecta la computadora antes de abrirla, usa una pulsera antiestática y nunca abre una fuente de alimentación ni una batería hinchada."
          ],
          words: [["Hardware", "las partes físicas de una computadora."], ["CPU", "el procesador; la parte que ejecuta los programas y hace los cálculos."], ["RAM", "memoria de corto plazo que guarda los programas y archivos abiertos; se vacía cuando se apaga la computadora."], ["SSD / HDD", "unidades de almacenamiento que guardan los archivos cuando la computadora está apagada. Un SSD es más rápido y no tiene piezas que se mueven."], ["Tarjeta madre", "la placa de circuitos principal que conecta todas las partes."], ["ESD", "descarga electrostática: una pequeña descarga de electricidad estática que puede dañar las partes de la computadora."]],
          slides: [
            { title: "Las partes principales", bullets: ["Tarjeta madre: conecta todo", "CPU: es la que piensa", "RAM: memoria de corto plazo, se vacía al apagar", "SSD o HDD: guarda tus archivos"] },
            { title: "Más partes y puertos", bullets: ["Fuente de alimentación (PSU) y gráficos (GPU)", "USB-A, USB-C, HDMI, DisplayPort, Ethernet"] },
            { title: "Pistas en el trabajo", bullets: ["Lenta con muchos programas abiertos: quizá poca RAM", "Tarda en encender: disco lleno o viejo"] },
            { title: "Seguridad", bullets: ["Apaga y desconecta antes de abrir", "Pulsera antiestática", "Nunca abras una fuente de alimentación ni una batería hinchada"] }
          ],
          tryIt: "Mira tu propia computadora solo por fuera. Haz una lista de cada puerto que veas y ponle nombre (USB-A, USB-C, HDMI, Ethernet, audífonos). Luego, en Windows abre Configuración > Sistema > Información, o en una Mac abre el menú Apple > Acerca de esta Mac, y anota tu procesador y cuánta RAM (memoria) tiene la computadora.",
          youCanNow: "nombrar las partes principales de una computadora, decir para qué sirve cada una y encontrar el procesador y la memoria de tu propia computadora.",
          quickCheck: [
            { objective: "O1", q: "¿Qué parte guarda tus archivos cuando la computadora está apagada?", options: ["La RAM", "La CPU", "La fuente de alimentación", "El SSD o el disco duro"], answer: 3, why: "El almacenamiento (SSD o HDD) guarda los archivos; la RAM se vacía cuando se apaga la computadora." },
            { objective: "O1", q: "Antes de abrir una computadora de escritorio, ¿qué hace primero un técnico?", options: ["La apaga y la desconecta", "Abre la fuente de alimentación", "Quita la batería mientras está encendida", "Le echa agua para enfriarla"], answer: 0, why: "Primero se apaga y se desconecta; así te proteges a ti y a las partes." }
          ]
        },
        {
          title: "Redes básicas: direcciones IP, ipconfig y ping",
          objectives: ["O2"],
          minutes: 6,
          goal: "Revisar la conexión de red de una computadora con ipconfig y ping y anotar los resultados.",
          text: [
            "Cada dispositivo en una red recibe una dirección IP, que es como la dirección de una calle para los datos. En casa normalmente se parece a 192.168.x.x o 10.x.x.x. Tu router reparte estas direcciones automáticamente con un servicio llamado DHCP. La puerta de enlace predeterminada es la dirección del router: la puerta de salida de tu red de casa hacia internet.",
            "Si una computadora con Windows muestra una dirección que empieza con 169.254, no pudo obtener una dirección del DHCP. Esa es una pista importante: revisa el cable o el Wi-Fi, y luego el router.",
            "Dos herramientas que usa todo técnico: ipconfig muestra tu dirección IP y tu puerta de enlace predeterminada (en Windows, abre el Símbolo del sistema y escribe ipconfig). ping envía un pequeño mensaje de prueba a otro dispositivo y muestra si responde. Primero haz ping a la puerta de enlace; si funciona, haz ping a un sitio web como comptia.org.",
            "Practica esto solo en tu propia computadora y en tu propia red. Algunas computadoras de bibliotecas o de trabajos bloquean la línea de comandos; si es así, usa la configuración de red para encontrar tu dirección IP."
          ],
          steps: ["Windows: presiona la tecla de Windows, escribe cmd y abre el Símbolo del sistema. Mac: abre Terminal.", "Windows: escribe ipconfig y presiona Enter. Anota la dirección IPv4 y la puerta de enlace predeterminada. Mac: busca la dirección IP y el router en Configuración del Sistema > Red.", "Escribe ping seguido de la dirección de tu puerta de enlace, por ejemplo ping 192.168.1.1, y presiona Enter.", "En una Mac, presiona Control y C para detener ping.", "Lee el resultado: si hay respuestas, la conexión funciona; \"tiempo de espera agotado\" o \"inaccesible\" significa que no funciona."],
          words: [["Dirección IP", "un número que identifica a un dispositivo en una red."], ["DHCP", "el servicio, normalmente en el router, que da a los dispositivos su dirección IP automáticamente."], ["Puerta de enlace predeterminada", "la dirección del router; la salida de tu red hacia internet."], ["ipconfig", "un comando de Windows que muestra tu configuración de red."], ["ping", "un comando que prueba si otro dispositivo responde a través de la red."], ["Router", "el aparato que conecta tu red de casa a internet."]],
          slides: [
            { title: "Direcciones en una red", bullets: ["Cada dispositivo recibe una dirección IP", "En casa: a menudo 192.168.x.x o 10.x.x.x", "DHCP las reparte; el router es la puerta de enlace"] },
            { title: "La pista del 169.254", bullets: ["Windows muestra 169.254.x.x", "No pudo obtener una dirección del DHCP", "Revisa el cable o el Wi-Fi, luego el router"] },
            { title: "Dos herramientas", bullets: ["ipconfig: muestra tu dirección y tu puerta de enlace", "ping: prueba si otro dispositivo responde", "Haz ping primero a la puerta de enlace, luego a un sitio web"] },
            { title: "Practica de forma segura", bullets: ["Solo en tu propia computadora y tu propia red", "¿Comando bloqueado? Usa la configuración de red"] }
          ],
          sources: [CORE1],
          tryIt: "En tu propia computadora, sigue los pasos. Anota tu dirección IP y tu puerta de enlace predeterminada, y luego haz ping a la puerta de enlace y a comptia.org. Escribe \"funciona\" o \"no funciona\" para cada uno. Guarda esta nota para tu tarea final.",
          youCanNow: "encontrar tu dirección IP y tu puerta de enlace predeterminada, probar una conexión con ping y decir qué significa una dirección 169.254.",
          quickCheck: [
            { objective: "O2", q: "Una laptop con Windows muestra la dirección IP 169.254.20.5. ¿Qué te dice esto?", options: ["El internet es muy rápido", "No obtuvo una dirección del DHCP", "La laptop tiene un virus", "Hay que cambiar la pantalla"], answer: 1, why: "Una dirección 169.254 significa que el dispositivo no pudo llegar al DHCP; revisa la conexión y el router." },
            { objective: "O2", q: "¿Qué comando muestra la dirección IP y la puerta de enlace predeterminada de una computadora con Windows?", options: ["ping", "print", "ipconfig", "shutdown"], answer: 2, why: "ipconfig muestra tu configuración de red; ping prueba una conexión." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo, el hardware y la red",
        questions: [
          { objective: "O6", q: "¿Qué examen cubre los sistemas operativos y la seguridad?", options: ["Core 1 (220-1201)", "Core 2 (220-1202)", "Los dos cubren solo hardware", "Ninguno"], answer: 1, why: "Core 2 cubre sistemas operativos, seguridad, resolución de problemas de software y procedimientos de trabajo." },
          { objective: "O1", q: "Un usuario dice que la computadora se pone lenta cuando hay muchos programas abiertos. ¿Qué parte es una causa probable?", options: ["No tiene suficiente RAM", "El puerto HDMI", "El teclado", "El cable del monitor"], answer: 0, why: "La RAM guarda los programas abiertos; si hay muy poca, la computadora se pone lenta cuando hay muchos abiertos." },
          { objective: "O1", q: "¿Qué parte es la que piensa y ejecuta los programas?", options: ["La fuente de alimentación", "El puerto Ethernet", "El disco duro", "La CPU"], answer: 3, why: "La CPU (procesador) ejecuta los programas y hace los cálculos." },
          { objective: "O2", q: "¿Qué es la puerta de enlace predeterminada?", options: ["El sitio web más rápido", "Un tipo de cable", "La dirección del router, la salida hacia internet", "La contraseña de la computadora"], answer: 2, why: "La puerta de enlace predeterminada es el router que conecta tu red a internet." },
          { objective: "O2", q: "Haces ping a tu puerta de enlace y recibes respuestas, pero el ping a un sitio web falla. ¿Dónde es más probable que esté el problema?", options: ["Entre el router e internet", "En la RAM de la computadora", "En el teclado", "En la pantalla"], answer: 0, why: "La computadora llega al router, así que la falla está después del router: en la conexión a internet." }
        ]
      }
    },
    {
      name: "Capítulo 2: Sistemas, resolución de problemas y tu plan",
      lessons: [
        {
          title: "Herramientas del sistema operativo que usas todos los días",
          objectives: ["O3"],
          minutes: 5,
          goal: "Encontrar la versión del sistema, el almacenamiento libre, los programas abiertos y el estado de las actualizaciones en tu propia computadora.",
          text: [
            "El sistema operativo (SO) es el programa principal que hace funcionar la computadora: Windows, macOS, Linux o, en los teléfonos, Android e iOS. El examen A+ Core 2 espera que sepas moverte en ellos.",
            "En Windows: Configuración > Sistema > Información muestra la versión. Configuración > Sistema > Almacenamiento muestra el espacio libre. El Administrador de tareas (presiona Ctrl + Mayús + Esc) muestra los programas abiertos y cuánto están trabajando la CPU y la memoria; ahí puedes cerrar un programa congelado. Configuración > Windows Update muestra si hay actualizaciones pendientes.",
            "En una Mac: el menú Apple > Acerca de esta Mac muestra la versión. El Monitor de Actividad (búscalo con Spotlight) muestra los programas abiertos. Configuración del Sistema > General > Actualización de software muestra las actualizaciones. El almacenamiento está en Configuración del Sistema > General > Almacenamiento.",
            "Los buenos hábitos de seguridad son parte del trabajo: instala las actualizaciones, mantén encendido el antivirus incluido (Microsoft Defender en Windows), usa una cuenta estándar (no de administrador) para el trabajo diario y bloquea la pantalla cuando te alejes (tecla de Windows + L en Windows)."
          ],
          steps: ["Encuentra el nombre y la versión del SO.", "Encuentra cuánto almacenamiento libre hay.", "Abre el Administrador de tareas o el Monitor de Actividad y encuentra el programa que usa más memoria.", "Busca actualizaciones.", "Bloquea la pantalla y luego desbloquéala."],
          words: [["Sistema operativo (SO)", "el software principal que hace funcionar una computadora o un teléfono, como Windows o macOS."], ["Administrador de tareas", "una herramienta de Windows que muestra los programas abiertos y te deja cerrar uno que se congeló."], ["Monitor de Actividad", "la herramienta de Mac que muestra los programas abiertos."], ["Cuenta de administrador", "una cuenta que puede instalar software y cambiar la configuración. Para el trabajo diario se usa una cuenta estándar."]],
          slides: [
            { title: "Conoce el sistema operativo", bullets: ["Windows, macOS, Linux; Android e iOS en teléfonos", "Core 2 evalúa todos estos"] },
            { title: "Herramientas de Windows", bullets: ["Configuración > Sistema > Información: versión", "Configuración > Sistema > Almacenamiento: espacio libre", "Ctrl + Mayús + Esc: Administrador de tareas", "Configuración > Windows Update"] },
            { title: "Herramientas de Mac", bullets: ["Menú Apple > Acerca de esta Mac", "Monitor de Actividad", "Configuración del Sistema > General > Actualización de software"] },
            { title: "Hábitos de seguridad", bullets: ["Instala actualizaciones; mantén el antivirus encendido", "Trabajo diario con una cuenta estándar", "Bloquea la pantalla cuando te alejes"] }
          ],
          sources: [CORE2],
          tryIt: "En tu propia computadora, anota: el nombre y la versión del SO, el almacenamiento libre, el programa que usa más memoria en este momento y si hay actualizaciones pendientes. Agrega esto a tu nota de red de la Lección 3. Ya tienes casi toda la parte 2 de tu tarea final.",
          youCanNow: "usar herramientas del sistema para revisar la versión, el almacenamiento, los programas abiertos y las actualizaciones de una computadora.",
          quickCheck: [
            { objective: "O3", q: "Un programa se congeló en Windows. ¿Qué herramienta te deja cerrarlo?", options: ["El Administrador de tareas", "Paint", "La Papelera de reciclaje", "La calculadora"], answer: 0, why: "El Administrador de tareas muestra los programas abiertos y puede cerrar uno que se congeló." },
            { objective: "O3", q: "¿Cuál es el hábito más seguro para el trabajo de todos los días?", options: ["Usar siempre la cuenta de administrador", "Desactivar las actualizaciones", "Usar una cuenta estándar y mantener las actualizaciones activadas", "Apagar el antivirus para ganar velocidad"], answer: 2, why: "Una cuenta estándar y las actualizaciones al día limitan el daño si algo sale mal." }
          ]
        },
        {
          title: "El método de resolución de problemas de seis pasos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Aplicar en orden los seis pasos de resolución de problemas de CompTIA a un problema.",
          text: [
            "Los buenos técnicos no adivinan. Siguen un método. Los objetivos de A+ usan seis pasos: 1. Identificar el problema. 2. Plantear una teoría de la causa probable (cuestiona lo obvio). 3. Probar la teoría para encontrar la causa. 4. Hacer un plan de acción y aplicar la solución. 5. Verificar que todo el sistema funcione y, si ayuda, tomar medidas para que no vuelva a pasar. 6. Documentar lo que encontraste, lo que hiciste y el resultado.",
            "El paso 1 significa hacerle preguntas al usuario: ¿Qué pasó? ¿Cuándo empezó? ¿Cambió algo? ¿Hay un mensaje de error? Haz una copia de seguridad de los datos importantes antes de cambiar algo.",
            "El paso 2 significa empezar por las causas sencillas: ¿Está conectado? ¿Está encendido el Wi-Fi? ¿Lo reiniciaron? Si tu primera teoría está equivocada, plantea otra y vuelve a probar, o escala el problema (pásalo a un técnico con más experiencia).",
            "Ejemplo: una impresora no imprime. Teoría: está desconectada. Prueba: la pantalla de la impresora muestra un atasco de papel. Solución: quita el atasco con cuidado. Verificación: imprime una página de prueba. Documentación: \"Atasco de papel en la bandeja 2, se quitó, se imprimió la página de prueba.\""
          ],
          steps: ["Identifica el problema: haz preguntas, haz una copia de seguridad de los datos.", "Plantea una teoría de la causa probable: empieza por lo obvio.", "Prueba la teoría. ¿Estaba equivocada? Plantea otra o escala el problema.", "Haz un plan y aplica la solución.", "Verifica que funcione y evita que se repita si puedes.", "Documenta lo que encontraste, lo que hiciste y el resultado."],
          words: [["Resolución de problemas", "encontrar y arreglar la causa de un problema paso a paso."], ["Teoría de la causa probable", "tu mejor idea de qué está causando el problema."], ["Escalar", "pasar un problema a alguien con más conocimientos o más permisos."], ["Documentar", "anotar lo que encontraste e hiciste, normalmente en el ticket."]],
          slides: [
            { title: "Los seis pasos", bullets: ["1 Identificar  2 Teoría  3 Probar", "4 Planear y arreglar  5 Verificar  6 Documentar"] },
            { title: "Paso 1: identificar", bullets: ["¿Qué pasó? ¿Cuándo? ¿Qué cambió?", "¿Hay algún mensaje de error?", "Copia de seguridad de los datos antes de cambiar algo"] },
            { title: "Pasos 2 y 3", bullets: ["Cuestiona lo obvio: corriente, cables, reiniciar", "¿Teoría equivocada? Prueba otra o escala el problema"] },
            { title: "Pasos 4 a 6", bullets: ["Arréglalo y revisa todo el sistema", "Evita que se repita si puedes", "Anótalo todo"] }
          ],
          sources: [CORE1],
          tryIt: "Elige un problema real que hayas tenido (laptop lenta, sin Wi-Fi, un teléfono que no carga) o usa este: \"Un usuario no puede conectarse al Wi-Fi después de cambiarse de escritorio.\" Escribe en papel los seis pasos para ese problema, con lo que preguntarías, revisarías y anotarías en cada paso.",
          youCanNow: "resolver un problema con los seis pasos de resolución de problemas y anotar cada uno.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es el PRIMER paso para resolver un problema?", options: ["Cambiar el disco duro", "Documentar la solución", "Identificar el problema", "Verificar que todo el sistema funcione"], answer: 2, why: "Debes entender el problema antes de pensar en una causa." },
            { objective: "O4", q: "Ya arreglaste el problema. ¿Qué viene antes de documentarlo?", options: ["Verificar que todo el sistema funcione", "Cerrar el ticket sin avisar al usuario", "Plantear una teoría nueva", "Hacer la primera copia de seguridad de los datos"], answer: 0, why: "El paso 5 es verificar que todo funcione; el paso 6 es documentar." }
          ]
        },
        {
          title: "Tickets, cómo hablar con los usuarios y tu plan de estudio A+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Escribir un ticket completo de mesa de ayuda y un plan de estudio y de exámenes A+ con fechas.",
          text: [
            "Un ticket es el registro de un problema. Un buen ticket tiene: el nombre del usuario y cómo contactarlo (en un trabajo real, sale del sistema de la empresa), el equipo, un resumen corto, los detalles y cualquier mensaje de error, la prioridad (qué tan urgente es), los pasos que se tomaron y el resultado. Escríbelo de modo que otro técnico pueda tomarlo y entenderlo.",
            "Cómo hablas importa tanto como la solución. Escucha sin interrumpir, repite el problema con tus palabras, usa palabras sencillas, nunca culpes al usuario, dile cuándo le darás noticias y confirma con él que quedó arreglado antes de cerrar el ticket. Mantén su información en privado.",
            "Ahora planifica tus exámenes. Usa los pesos de los dominios que anotaste en la Lección 1. Elige una fecha objetivo para cada examen. Dedica más semanas a los dominios más grandes. Usa práctica gratis: el documento gratuito de objetivos del examen de CompTIA, tu propia computadora y las comprobaciones de conocimientos de este curso. Mucha gente estudia de 5 a 10 horas por semana; elige lo que se ajuste a tu vida y escríbelo.",
            "Antes de reservar, revisa en la página oficial el precio actual, los programas de descuento y las opciones para presentar el examen. Los centros de empleo, los programas para veteranos y los programas de reinserción a veces ayudan con el costo del examen, así que pregunta en el tuyo."
          ],
          steps: ["Ticket: completa usuario, equipo, resumen, detalles, prioridad, pasos tomados y resultado.", "Respuesta: da las gracias, explica lo que encontraste con palabras sencillas, di qué sigue y cuándo.", "Plan: escribe una fecha objetivo para Core 1 y para Core 2.", "Haz una lista de cada dominio con su peso y las semanas que le darás.", "Escribe tus horas de estudio por semana y dónde vas a estudiar.", "Revisa en la página oficial el precio y las opciones del examen; pregunta en un programa local si ayudan con los costos."],
          words: [["Ticket", "el registro escrito de una solicitud de soporte, de principio a fin."], ["Prioridad", "qué tan urgente es un ticket; a menudo baja, media, alta o crítica."], ["Plan de estudio", "un horario escrito de lo que vas a estudiar, cuándo, y la fecha de tu examen."]],
          slides: [
            { title: "Un ticket completo", bullets: ["Usuario, equipo, resumen, detalles, mensaje de error", "Prioridad, pasos tomados, resultado", "Otro técnico podría continuarlo"] },
            { title: "Cómo hablar con los usuarios", bullets: ["Escucha y repite el problema con tus palabras", "Palabras sencillas, sin culpar", "Di cuándo darás noticias; confirma la solución"] },
            { title: "Tu plan A+", bullets: ["Fecha objetivo para Core 1 y para Core 2", "Más semanas para los dominios más grandes", "Horas por semana por escrito"] },
            { title: "Antes de reservar", bullets: ["Revisa comptia.org para ver el precio y las opciones del examen", "Pide ayuda en programas de empleo, para veteranos o de reinserción"] }
          ],
          sources: [A_PLUS, CORE1, CORE2],
          tryIt: "Tarea final: escribe el ticket del problema de tu Lección 5 con todos los campos y los seis pasos, más una respuesta de dos oraciones para el usuario. Pon en una página tu nota sobre la computadora de las Lecciones 3 y 4. Luego escribe tu plan de estudio y de exámenes A+: fechas objetivo para Core 1 y Core 2, cada dominio con su peso y tus horas por semana.",
          youCanNow: "escribir un ticket de soporte claro, responder a un usuario con amabilidad y seguir tu propio plan con fechas hacia los dos exámenes A+.",
          quickCheck: [
            { objective: "O5", q: "¿Qué resumen de ticket es más útil?", options: ["\"No sirve.\"", "\"El usuario no sabe usar computadoras.\"", "\"¡¡Ayuda!!\"", "\"La laptop no se conecta al Wi-Fi de la oficina desde que se cambió al escritorio 14; error: sin internet.\""], answer: 3, why: "Dice el equipo, el problema, cuándo empezó y el error, sin culpar a nadie." },
            { objective: "O6", q: "Core 1 tiene un dominio que vale 28% y otro que vale 11%. ¿Cómo deberías planificar?", options: ["Darles el mismo tiempo a los dos", "Darle más tiempo de estudio al dominio de 28%", "Saltarte el dominio de 28%", "Estudiar solo el dominio de 11%"], answer: 1, why: "Un peso mayor significa más preguntas, así que merece más tiempo de estudio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Sistemas, resolución de problemas y tu plan",
        questions: [
          { objective: "O3", q: "¿Dónde encuentras la versión de Windows?", options: ["Administrador de tareas > Inicio", "La Papelera de reciclaje", "Configuración > Sistema > Información", "El menú de la impresora"], answer: 2, why: "Configuración > Sistema > Información muestra la edición y la versión de Windows." },
          { objective: "O4", q: "Un monitor está en negro. ¿Qué teoría deberías probar primero?", options: ["Falló la tarjeta madre", "El cable de corriente o de video está suelto", "Hay que reinstalar el sistema operativo", "La CPU es demasiado lenta"], answer: 1, why: "Cuestiona lo obvio: los cables y la corriente son lo más común y lo más fácil de revisar." },
          { objective: "O4", q: "Tu primera teoría resulta equivocada. ¿Qué haces?", options: ["Plantear una teoría nueva y probarla, o escalar el problema", "Cerrar el ticket", "Decirle al usuario que no tiene arreglo", "Cambiar la computadora"], answer: 0, why: "El método vuelve atrás: una teoría nueva, o escalar el problema si te quedas atascado." },
          { objective: "O5", q: "Un usuario está molesto porque su laptop se descompuso antes de una fecha de entrega. ¿Cuál es la mejor primera respuesta?", options: ["\"Seguro que tú la rompiste.\"", "\"Ese no es mi problema.\"", "Usar palabras técnicas para que confíe en ti", "Escuchar, repetir el problema con tus palabras y decir qué harás después"], answer: 3, why: "Escuchar, confirmar y dar un siguiente paso claro calma al usuario y te da los datos." },
          { objective: "O6", q: "¿Qué es parte de un plan de estudio A+ completo?", options: ["Fechas objetivo para los dos exámenes y horas de estudio por semana", "Solo el nombre de la certificación", "Una lista de computadoras que te gustan", "Tu número de Seguro Social"], answer: 0, why: "Las fechas, los dominios y las horas por semana convierten una meta en un plan que puedes seguir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de soporte técnico de TI (preparación para CompTIA A+)",
    questions: [
      { objective: "O6", q: "¿Quién otorga la certificación A+?", options: ["Este curso", "CompTIA, cuando apruebas los dos exámenes", "Tu compañía de internet", "Cualquier empleador"], answer: 1, why: "CompTIA otorga A+; el curso te prepara." },
      { objective: "O6", q: "El código de examen 220-1201 corresponde a:", options: ["Security+", "A+ Core 2", "A+ Core 1", "Network+"], answer: 2, why: "220-1201 es Core 1; 220-1202 es Core 2." },
      { objective: "O6", q: "Una pregunta basada en desempeño te pide:", options: ["Hacer una pequeña tarea práctica", "Escribir un ensayo", "Hablar con una persona", "Llevar tu propia computadora"], answer: 0, why: "Las preguntas basadas en desempeño te piden hacer algo, como preparar o arreglar una configuración." },
      { objective: "O1", q: "¿Qué parte es la memoria de corto plazo que se vacía cuando se apaga la computadora?", options: ["SSD", "HDD", "Fuente de alimentación", "RAM"], answer: 3, why: "La RAM guarda el trabajo abierto solo mientras la computadora está encendida." },
      { objective: "O1", q: "¿Qué es cierto sobre un SSD comparado con un HDD?", options: ["Tiene discos que giran", "Suele ser más rápido y no tiene piezas que se mueven", "Solo guarda música", "Es un tipo de pantalla"], answer: 1, why: "Los SSD usan chips sin piezas que se mueven, por eso son más rápidos." },
      { objective: "O1", q: "¿Qué puerto conecta una computadora a una red con cable?", options: ["Ethernet", "HDMI", "Conector de audífonos", "USB-C solo para cargar"], answer: 0, why: "Ethernet es el puerto de red con cable; HDMI es para pantallas." },
      { objective: "O1", q: "¿Qué NUNCA debe abrir un técnico?", options: ["La caja de una computadora de escritorio, después de desconectarla", "El menú de configuración de una laptop", "Una fuente de alimentación", "Un ticket"], answer: 2, why: "Las fuentes de alimentación guardan una carga eléctrica peligrosa; se cambian, no se abren." },
      { objective: "O2", q: "¿Qué hace el DHCP?", options: ["Imprime documentos", "Reparte direcciones IP automáticamente", "Bloquea virus", "Carga la batería"], answer: 1, why: "El DHCP, normalmente en el router, da a los dispositivos su dirección IP." },
      { objective: "O2", q: "¿Qué comando prueba si otro dispositivo responde a través de la red?", options: ["ipconfig", "dir", "cls", "ping"], answer: 3, why: "ping envía un mensaje de prueba y muestra si llegan respuestas." },
      { objective: "O2", q: "¿Qué dirección es más probablemente una dirección normal de una red de casa?", options: ["192.168.1.25", "169.254.10.3", "999.1.1.1", "www.home"], answer: 0, why: "192.168.x.x es un rango común en casa; 169.254 significa que el DHCP falló, y 999 no es válido." },
      { objective: "O3", q: "¿Qué teclas abren el Administrador de tareas en Windows?", options: ["Ctrl + P", "Ctrl + Mayús + Esc", "Alt + Tab", "Windows + L"], answer: 1, why: "Ctrl + Mayús + Esc abre el Administrador de tareas; Windows + L bloquea la pantalla." },
      { objective: "O3", q: "En una Mac, ¿qué herramienta muestra los programas que están abiertos?", options: ["Monitor de Actividad", "Notas", "Fotos", "Calendario"], answer: 0, why: "El Monitor de Actividad es la versión de Mac del Administrador de tareas." },
      { objective: "O3", q: "Te alejas de tu escritorio en el trabajo. ¿Qué haces?", options: ["Dejar la pantalla abierta", "Apagar el antivirus", "Bloquear la pantalla", "Iniciar sesión como administrador"], answer: 2, why: "Bloquear la pantalla impide que otras personas usen tu cuenta." },
      { objective: "O4", q: "Ordena estos pasos: Probar la teoría, Identificar el problema, Plantear una teoría.", options: ["Teoría, Identificar, Probar", "Probar, Teoría, Identificar", "Identificar, Probar, Teoría", "Identificar, Teoría, Probar"], answer: 3, why: "Identifica el problema, plantea una teoría y luego pruébala." },
      { objective: "O4", q: "¿Qué debes hacer antes de hacer cambios en la computadora de un usuario?", options: ["Hacer una copia de seguridad de los datos importantes", "Borrar los archivos viejos", "Cambiar su contraseña", "Reinstalar el sistema"], answer: 0, why: "Hacer primero una copia de seguridad protege los datos del usuario si una solución sale mal." },
      { objective: "O4", q: "¿Cuál es el ÚLTIMO paso del método de resolución de problemas?", options: ["Probar la teoría", "Documentar lo que encontraste, lo que hiciste y el resultado", "Identificar el problema", "Reiniciar la computadora"], answer: 1, why: "El paso 6 es documentar, para que otros puedan aprender y el registro quede completo." },
      { objective: "O5", q: "¿Qué debe ir en un ticket de mesa de ayuda?", options: ["Tu opinión sobre el usuario", "Chistes sobre el problema", "Los pasos tomados y el resultado", "Los datos bancarios del usuario"], answer: 2, why: "Los pasos y los resultados permiten que cualquier técnico siga lo que pasó." },
      { objective: "O5", q: "¿Cuándo debes cerrar un ticket?", options: ["En cuanto empiezas a trabajar", "Después de que el usuario confirma que quedó arreglado", "Cuando el usuario deja de responder por una hora", "Antes de probar la solución"], answer: 1, why: "Confirmar con el usuario asegura que el problema de verdad se resolvió." },
      { objective: "O5", q: "¿Qué respuesta es la mejor para un usuario?", options: ["\"Obviamente falló tu concesión de DHCP.\"", "\"Lo hiciste mal otra vez.\"", "\"Pregúntale a otra persona.\"", "\"Tu laptop no pudo obtener una dirección de red. La restablecí y ya funciona. Por favor llama si vuelve a pasar.\""], answer: 3, why: "Usa palabras sencillas, no culpa a nadie y le dice al usuario qué hacer después." },
      { objective: "O6", q: "¿Dónde debes revisar los precios y las opciones actuales del examen A+ antes de reservar?", options: ["En el sitio web oficial de CompTIA", "En un comentario de redes sociales", "En un libro de texto viejo", "En un anuncio emergente"], answer: 0, why: "Solo el sitio oficial tiene los precios, las versiones y las opciones actuales." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 5, 8, 9, 10, 13, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Nota sobre la computadora", objective: "O3", notYet: "Falta la versión del SO, el almacenamiento libre o las actualizaciones.", meets: "Incluye el SO y su versión, el almacenamiento libre, el programa que más memoria usa y el estado de las actualizaciones.", exceeds: "También incluye el procesador y la RAM y dice qué significan para la velocidad." },
      { name: "Revisión de red", objective: "O2", notYet: "No hay dirección IP ni puerta de enlace, o no se intentó el ping.", meets: "Anota la dirección IP y la puerta de enlace y el resultado del ping a la puerta de enlace y a un sitio web.", exceeds: "Explica qué significarían los resultados si un ping fallara, incluida una dirección 169.254." },
      { name: "Pasos de resolución de problemas", objective: "O4", notYet: "Faltan pasos o están fuera de orden, o la solución es una adivinanza.", meets: "Los seis pasos en orden, con lo que se preguntó, se probó y se hizo.", exceeds: "Incluye una segunda teoría o un momento para escalar el problema, y una forma de evitar que se repita." },
      { name: "Ticket y respuesta", objective: "O5", notYet: "El ticket es vago o la respuesta culpa al usuario o usa jerga.", meets: "Todos los campos del ticket están completos; la respuesta es amable, sencilla y dice qué sigue.", exceeds: "Otra persona podría seguir el ticket sin hacer ninguna pregunta." },
      { name: "Plan de estudio y de exámenes", objective: "O6", notYet: "No hay fechas o faltan dominios.", meets: "Fechas objetivo para Core 1 y Core 2, cada dominio con su peso, horas por semana.", exceeds: "El plan da más semanas a los dominios con más peso y dice dónde revisar el precio y conseguir ayuda con los costos." },
      { name: "Palabras de hardware", objective: "O1", notYet: "Las partes del hardware tienen nombres equivocados en la nota o en el ticket.", meets: "Las partes y los puertos tienen el nombre correcto.", exceeds: "Relaciona un síntoma con una parte probable, por ejemplo lenta con muchos programas abiertos y poca RAM." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que reservan o aprueban A+ Core 1 o Core 2 en un plazo de 6 meses (encuesta de seguimiento)",
      "Participantes que solicitan o empiezan un trabajo de soporte de TI, mesa de ayuda o técnico en un plazo de 6 meses",
      "Los programas aliados (centros de empleo, servicios para veteranos y de reinserción) informan sobre participantes que entran a capacitación o trabajos de TI"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Una computadora con Windows o Mac con internet (propia o de la biblioteca; la línea de comandos puede estar bloqueada en algunas computadoras compartidas)",
      "Papel y lápiz, o un documento, para las notas, el ticket y el plan",
      "Las páginas oficiales de CompTIA A+ Core 1 y Core 2",
      "Unos 90 minutos en total, en sesiones cortas, más tiempo de estudio continuo para los exámenes"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial; usen los resultados para decidir qué lecciones necesitan más tiempo.",
      "Si tiene una computadora vieja y desconectada, muestre las partes con la caja abierta; los participantes no abren equipos ellos mismos a menos que tengan capacitación y supervisión.",
      "En un laboratorio, revise que la línea de comandos funcione antes de la Lección 3, o muestre la página de configuración de red.",
      "Forme parejas para que actúen como usuario y técnico en la Lección 6, y luego cambien de papel.",
      "Recuerde a los participantes que este curso los prepara y no otorga A+; ayúdelos a encontrar programas locales que ayuden con el costo de los exámenes.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of shared/electrical-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "electrical-basics-es",
  lang: "es",
  translationOf: "electrical-basics",
  category: "Workforce Development",
  name: "Fundamentos del oficio de electricista",
  skills: "Usar la ley de Ohm y la fórmula de potencia, Leer un diagrama de circuito sencillo, Seguir el bloqueo y etiquetado y probar antes de tocar, Leer una cinta métrica y un multímetro, Planear tu camino hacia un aprendizaje de electricista",
  outcome: "hacer las cuentas básicas de electricidad, leer un circuito sencillo, explicar los pasos de seguridad que mantienen con vida a los electricistas, tomar medidas exactas y seguir un plan con fechas para solicitar un aprendizaje de electricista y avanzar hacia una licencia.",
  about: [
    "Los electricistas instalan el cableado de casas, oficinas, fábricas, sistemas solares y cargadores de autos. La mayoría aprende el oficio en un aprendizaje pagado (apprenticeship), y la mayoría de los estados de EE. UU. exige licencia a los electricistas. Este curso es el primer paso: es para personas que buscan trabajo, veteranos, jóvenes adultos, personas que regresan a casa después de estar en prisión, inmigrantes y adultos que vuelven a estudiar y que quieren llegar preparados a un aprendizaje.",
    "Vas a aprender qué son los voltios, los amperios, los ohmios y los vatios, y a hacer cuentas con la ley de Ohm. Vas a leer el dibujo de un circuito sencillo y entender por qué las casas se cablean como se cablean. Después vas a aprender los pasos de seguridad que sigue todo electricista, las herramientas y las medidas que los aprendices usan desde el primer día, y cómo solicitar un aprendizaje.",
    "Este curso te prepara. No te da una licencia ni un certificado, y nunca te pide trabajar con electricidad en vivo. El trabajo eléctrico es peligroso y puede matar. El cableado real solo se aprende en un programa supervisado, con el equipo de protección correcto. Las licencias las da tu estado o tu ciudad.",
    "Cada lección dura unos cinco minutos, con una tarea de \"Pruébalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tu producto final es tu propio paquete inicial de electricista con un plan con fechas."
  ],
  finalTask: "Haz tu paquete inicial de electricista: (1) cinco problemas de ley de Ohm o de potencia escritos por ti, resueltos y con el procedimiento a la vista; (2) un dibujo de un circuito en paralelo sencillo con la fuente de energía, el interruptor automático (breaker), el interruptor, dos cargas, la fase, el neutro y la tierra marcados; (3) los seis pasos de bloqueo y etiquetado escritos en orden en una tarjeta; (4) cinco medidas con cinta métrica de objetos de tu casa, con precisión de 1/16 de pulgada; y (5) un plan con fechas para solicitar dos programas de aprendizaje de electricista, con las reglas de licencia de tu estado tomadas de la página oficial.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que quieren un oficio calificado sin un título universitario de cuatro años: personas que buscan trabajo, veteranos, jóvenes adultos, personas que regresan a casa después de estar en prisión, inmigrantes y adultos que vuelven a estudiar. Algunas han hecho trabajo manual o militar; la mayoría no tiene formación formal en electricidad.",
    startingPoint: "Saben hacer cuentas con números enteros y algunas fracciones, y saben que la electricidad puede ser peligrosa. La mayoría todavía no puede definir voltios, amperios u ohmios, usar la ley de Ohm, leer el dibujo de un circuito ni describir el bloqueo y etiquetado.",
    gap: "Los programas de aprendizaje suelen evaluar matemáticas y lectura, y buscan solicitantes que conozcan los términos básicos y tomen en serio la seguridad. Los participantes necesitan las matemáticas básicas, el vocabulario, los hábitos de seguridad y un plan claro para presentar su solicitud, para poder entrar y mantenerse a salvo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado); se explica cada palabra del oficio",
      "Nada de trabajo eléctrico en vivo: la única práctica con medidor es con una pila común de casa",
      "Dispositivos: un teléfono o una computadora de la biblioteca para las páginas oficiales; papel, bolígrafo, calculadora y cinta métrica",
      "Tiempo: lecciones de 5 a 6 minutos que se acomodan al trabajo y a las citas",
      "Las licencias cambian según el estado y la ciudad: cada participante revisa la página oficial del lugar donde vive"
    ],
    prerequisites: "Cuentas con números enteros y fracciones sencillas. El curso \"Empezar una carrera en los oficios calificados\" ayuda a elegir un oficio; este curso profundiza en el oficio de electricista."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con valores inventados para un circuito", action: "calcular voltios, amperios, ohmios o vatios con la ley de Ohm y la fórmula de potencia", standard: "acertando al menos 4 de 5 problemas de práctica, con el procedimiento a la vista" },
    { id: "O2", condition: "Con el dibujo de un circuito sencillo", action: "nombrar cada parte del circuito y decir si las cargas están en serie o en paralelo", standard: "con todas las partes bien nombradas" },
    { id: "O3", condition: "Ante un trabajo en el que hay que intervenir un equipo", action: "enumerar en orden los pasos de bloqueo y etiquetado y nombrar los principales peligros eléctricos y su protección", standard: "con los seis pasos en el orden correcto y al menos tres peligros unidos a su protección" },
    { id: "O4", condition: "Usando una cinta métrica y, si tienes uno, un multímetro con una pila de casa", action: "leer medidas con precisión de 1/16 de pulgada y leer el voltaje de una pila", standard: "acertando al menos 4 de 5 lecturas" },
    { id: "O5", condition: "Usando los sitios web oficiales de tu estado", action: "escribir un plan con fechas para solicitar un aprendizaje de electricista y avanzar hacia una licencia", standard: "con dos programas reales, sus requisitos y una fecha para cada paso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona la electricidad",
      lessons: [
        {
          title: "Voltios, amperios, ohmios y vatios",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explicar con tus propias palabras qué son los voltios, los amperios, los ohmios y los vatios, con un ejemplo de cada uno.",
          text: [
            "La electricidad es el paso de partículas diminutas con carga (electrones) por un cable. Hay cuatro palabras que la describen, y las vas a usar todos los días en el oficio.",
            "El voltaje (voltios, V) es el empuje. La corriente (amperios, A) es cuánta electricidad pasa. La resistencia (ohmios, Ω) es cuánto le cuesta pasar por el material. La potencia (vatios, W) es cuánto trabajo hace la electricidad, por ejemplo calentar, iluminar o mover un motor.",
            "Una manguera de jardín ayuda a entenderlo: la presión del agua es como los voltios, la cantidad de agua que pasa es como los amperios, y un doblez o una boquilla estrecha es como la resistencia. Más empuje o menos resistencia significa más flujo.",
            "En las casas de EE. UU., la mayoría de los enchufes funcionan a unos 120 voltios, y los aparatos grandes, como las secadoras y las estufas, usan unos 240 voltios. Las pilas dan una corriente pequeña y constante, llamada corriente continua (CC, en inglés DC); las casas usan corriente alterna (CA, en inglés AC), que cambia de dirección muchas veces por segundo."
          ],
          words: [
            ["Voltios (V)", "el empuje eléctrico, también llamado voltaje."],
            ["Amperios (A)", "la cantidad de corriente eléctrica que pasa, también llamada corriente."],
            ["Ohmios (Ω)", "la resistencia: cuánto frena un material el paso de la corriente."],
            ["Vatios (W)", "la potencia: cuánto trabajo está haciendo la electricidad."],
            ["CA y CC (AC y DC)", "la corriente alterna (casas y edificios) cambia de dirección; la corriente continua (pilas) va en un solo sentido."],
            ["Conductor", "un material que deja pasar la electricidad con facilidad, como el cable de cobre."]
          ],
          slides: [
            { title: "Cuatro palabras que usas todos los días", bullets: ["Voltios: el empuje", "Amperios: el flujo", "Ohmios: la resistencia", "Vatios: el trabajo que se hace"] },
            { title: "La imagen de la manguera", bullets: ["Presión del agua = voltios", "Agua que pasa = amperios", "Un doblez o una boquilla estrecha = resistencia"] },
            { title: "En los edificios de EE. UU.", bullets: ["La mayoría de los enchufes: unos 120 voltios", "Secadoras y estufas: unos 240 voltios", "Las casas usan CA; las pilas dan CC"] }
          ],
          tryIt: "En una hoja, escribe las cuatro palabras (voltios, amperios, ohmios, vatios). Al lado de cada una, escribe qué significa con tus propias palabras y un ejemplo de tu casa. Por ejemplo: vatios, \"mi microondas dice 1,000 vatios en la etiqueta\". Revisa la etiqueta de una lámpara, un cargador de teléfono o un aparato (desenchufado, y solo la etiqueta) y copia los voltios, amperios o vatios que indica.",
          youCanNow: "explicar qué son los voltios, los amperios, los ohmios y los vatios, y encontrarlos en la etiqueta de un aparato.",
          quickCheck: [
            { objective: "O1", q: "¿Qué palabra significa la cantidad de corriente eléctrica que pasa?", options: ["Voltios", "Ohmios", "Amperios", "Vatios"], answer: 2, why: "Los amperios (la corriente) miden cuánta electricidad pasa." },
            { objective: "O1", q: "En la imagen de la manguera de jardín, ¿qué se parece a la resistencia?", options: ["Un doblez o una boquilla estrecha", "La presión del agua", "La cantidad de agua", "El color de la manguera"], answer: 0, why: "Un doblez frena el flujo, igual que la resistencia frena la corriente." }
          ]
        },
        {
          title: "La ley de Ohm y las cuentas de potencia",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calcular voltios, amperios, ohmios o vatios con la ley de Ohm y la fórmula de potencia.",
          text: [
            "La ley de Ohm une el empuje, el flujo y la resistencia: voltios = amperios × ohmios, que se escribe V = I × R (la I representa la corriente). Si conoces dos de ellos, puedes encontrar el tercero: I = V ÷ R y R = V ÷ I.",
            "La fórmula de potencia: vatios = voltios × amperios, que se escribe P = V × I. También puedes encontrar los amperios a partir de los vatios: I = P ÷ V.",
            "Ejemplos resueltos (solo práctica, números inventados): Una batería de 12 voltios está conectada a una carga de 4 ohmios. Amperios = 12 ÷ 4 = 3 amperios. Un circuito de 120 voltios lleva 15 amperios. Vatios = 120 × 15 = 1,800 vatios. Un calentador de 1,500 vatios en 120 voltios consume 1,500 ÷ 120 = 12.5 amperios.",
            "Por qué importa: cada circuito tiene un interruptor automático (breaker) de cierto número de amperios. Si se usan demasiadas cosas a la vez y piden más amperios de los que el circuito aguanta, se sobrecarga y el breaker se dispara. Los electricistas hacen estas cuentas para elegir cables y breakers seguros, siguiendo el código eléctrico."
          ],
          steps: [
            "Escribe lo que sabes y lo que necesitas encontrar.",
            "Elige la fórmula: V = I × R, I = V ÷ R, R = V ÷ I, o P = V × I.",
            "Pon los números y haz la cuenta.",
            "Escribe la unidad (V, A, Ω o W) y pregúntate: ¿tiene sentido la respuesta?"
          ],
          words: [
            ["Ley de Ohm", "la regla que dice que voltios = amperios × ohmios (V = I × R)."],
            ["Fórmula de potencia", "vatios = voltios × amperios (P = V × I)."],
            ["Carga", "cualquier cosa que usa electricidad, como una luz, un calentador o un motor."],
            ["Breaker (interruptor automático)", "un interruptor de seguridad en el panel que apaga un circuito cuando pasa demasiada corriente."],
            ["Sobrecarga", "cuando un circuito lleva más corriente de la que debe."]
          ],
          slides: [
            { title: "La ley de Ohm", bullets: ["V = I × R", "I = V ÷ R", "R = V ÷ I"] },
            { title: "Potencia", bullets: ["P = V × I (vatios = voltios × amperios)", "I = P ÷ V"] },
            { title: "Ejemplos resueltos (solo práctica)", bullets: ["12 V ÷ 4 Ω = 3 A", "120 V × 15 A = 1,800 W", "1,500 W ÷ 120 V = 12.5 A"] },
            { title: "Por qué los electricistas hacen estas cuentas", bullets: ["Los breakers se miden en amperios", "Demasiados amperios = sobrecarga, el breaker se dispara", "Las cuentas ayudan a elegir cable y breakers según el código"] }
          ],
          tryIt: "Solo práctica. Resuelve y muestra el procedimiento: (1) 9 voltios y 3 ohmios: ¿cuántos amperios? (2) 2 amperios y 6 ohmios: ¿cuántos voltios? (3) 120 voltios y 10 amperios: ¿cuántos vatios? (4) Un microondas de 600 vatios en 120 voltios: ¿cuántos amperios? (5) 24 voltios y 4 amperios: ¿cuántos ohmios? Respuestas: 3 A; 12 V; 1,200 W; 5 A; 6 Ω. Luego escribe un problema tuyo y resuélvelo: es el comienzo de la parte 1 de tu tarea final.",
          youCanNow: "usar la ley de Ohm y la fórmula de potencia para encontrar voltios, amperios, ohmios o vatios.",
          quickCheck: [
            { objective: "O1", q: "Solo práctica: 12 voltios en una carga de 3 ohmios. ¿Cuántos amperios pasan?", options: ["36 amperios", "9 amperios", "15 amperios", "4 amperios"], answer: 3, why: "I = V ÷ R, así que 12 ÷ 3 = 4 amperios." },
            { objective: "O1", q: "Solo práctica: un circuito de 120 voltios lleva 5 amperios. ¿Cuántos vatios son?", options: ["24 vatios", "600 vatios", "125 vatios", "115 vatios"], answer: 1, why: "P = V × I, así que 120 × 5 = 600 vatios." }
          ]
        },
        {
          title: "Los circuitos y cómo leer un diagrama sencillo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nombrar las partes de un circuito sencillo y distinguir en un diagrama si está en serie o en paralelo.",
          text: [
            "Un circuito es un recorrido cerrado. Tiene una fuente de energía, conductores (cables), una carga, algo para controlarlo (un interruptor) y una protección (un breaker o un fusible). Si el recorrido se corta, no pasa nada de corriente.",
            "En un circuito en serie, las cargas están en una sola línea, así que la corriente pasa por cada una, una tras otra; si una se apaga, se apagan todas. En un circuito en paralelo, cada carga tiene su propio camino, así que cada una recibe el voltaje completo y una puede apagarse mientras las demás siguen encendidas. Los enchufes y las luces de una casa están conectados en paralelo.",
            "La mayoría del cableado de edificios en EE. UU. tiene tres tipos de cable. La fase (en inglés, hot) lleva la corriente a la carga (a menudo es negra o roja). El neutro la trae de vuelta (casi siempre es blanco). La tierra (cobre desnudo o verde) da un camino seguro si algo sale mal. Aun así, los electricistas prueban cada cable, porque los colores pueden estar mal en instalaciones viejas o mal hechas.",
            "Dos protecciones especiales: un GFCI (interruptor de circuito por falla a tierra) corta la energía muy rápido si la corriente se escapa, por ejemplo a través de una persona, y se usa cerca del agua, como en cocinas, baños y exteriores. Un AFCI (interruptor de circuito por falla de arco) corta la energía cuando detecta chispas de arco que podrían causar un incendio. Un cortocircuito ocurre cuando la corriente toma un camino fácil que no estaba previsto; puede causar chispas e incendios, y el breaker debería dispararse."
          ],
          steps: [
            "Encuentra la fuente de energía (batería o panel).",
            "Sigue el cable desde la fuente, pasando por el breaker o el fusible y el interruptor.",
            "Encuentra cada carga y fíjate si está en una sola línea (serie) o en su propia rama (paralelo).",
            "Sigue el camino de regreso a la fuente."
          ],
          words: [
            ["Circuito", "un recorrido cerrado por el que pasa la electricidad."],
            ["Circuito en serie", "cargas en una sola línea; la corriente pasa por cada una, una tras otra."],
            ["Circuito en paralelo", "cada carga en su propia rama; cada una recibe el voltaje completo."],
            ["Fase, neutro y tierra", "la fase lleva la corriente a la carga, el neutro la trae de vuelta y la tierra es un camino de seguridad."],
            ["GFCI", "interruptor de circuito por falla a tierra: corta la energía muy rápido si la corriente se escapa, para proteger a las personas de descargas."],
            ["AFCI", "interruptor de circuito por falla de arco: corta la energía cuando detecta arcos que podrían causar un incendio."],
            ["Cortocircuito", "corriente que toma un camino fácil no previsto; puede causar chispas e incendios."]
          ],
          slides: [
            { title: "Las partes de todo circuito", bullets: ["Fuente, cables, carga", "Control: un interruptor", "Protección: un breaker o un fusible"] },
            { title: "Serie o paralelo", bullets: ["Serie: una línea, si una se apaga, todas se apagan", "Paralelo: rama propia, voltaje completo para cada una", "Casas: en paralelo"] },
            { title: "Fase, neutro y tierra", bullets: ["Fase: a menudo negra o roja", "Neutro: casi siempre blanco", "Tierra: desnuda o verde", "Prueba siempre; los colores pueden estar mal"] },
            { title: "Protección extra", bullets: ["GFCI: protege a las personas cerca del agua", "AFCI: ayuda a evitar incendios por arcos", "Cortocircuito: el breaker debería dispararse"] }
          ],
          tryIt: "En una hoja, dibuja una pila, un interruptor y dos focos en serie. Luego dibuja las mismas partes en paralelo. Marca la fuente, el interruptor y las cargas en los dos dibujos, y escribe qué pasa en cada uno si un foco se funde. Después, dibuja un circuito de casa: panel, breaker, interruptor y dos luces en paralelo, con la fase, el neutro y la tierra marcados. Guárdalo: es la parte 2 de tu tarea final.",
          youCanNow: "nombrar las partes de un circuito sencillo y distinguir en un dibujo si está en serie o en paralelo.",
          quickCheck: [
            { objective: "O2", q: "Dos focos están conectados de modo que, cuando uno se funde, el otro sigue encendido. ¿Cómo están conectados?", options: ["En serie", "En paralelo", "Sin interruptor", "Al revés"], answer: 1, why: "En paralelo cada foco tiene su propio camino, así que uno puede apagarse y el otro seguir encendido." },
            { objective: "O2", q: "¿Qué dispositivo protege a las personas de descargas cerca del fregadero de la cocina?", options: ["Un AFCI", "Un interruptor de luz", "Un regulador de luz (dimmer)", "Un GFCI"], answer: 3, why: "Un GFCI corta la energía muy rápido cuando la corriente se escapa, por ejemplo a través de una persona cerca del agua." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona la electricidad",
        questions: [
          { objective: "O1", q: "¿Qué palabra significa el empuje eléctrico?", options: ["Voltios", "Amperios", "Ohmios", "Vatios"], answer: 0, why: "El voltaje es el empuje que mueve la corriente por un circuito." },
          { objective: "O1", q: "Solo práctica: pasan 2 amperios por una carga de 10 ohmios. ¿Cuál es el voltaje?", options: ["5 voltios", "12 voltios", "20 voltios", "8 voltios"], answer: 2, why: "V = I × R, así que 2 × 10 = 20 voltios." },
          { objective: "O1", q: "Solo práctica: una secadora de pelo de 1,200 vatios funciona con 120 voltios. ¿Cuántos amperios consume?", options: ["10 amperios", "100 amperios", "1,320 amperios", "12 amperios"], answer: 0, why: "I = P ÷ V, así que 1,200 ÷ 120 = 10 amperios." },
          { objective: "O2", q: "¿Qué parte de un circuito lo apaga si pasa demasiada corriente?", options: ["La carga", "El cable neutro", "La tapa del interruptor", "El breaker o el fusible"], answer: 3, why: "Los breakers y los fusibles protegen el circuito cortando la corriente cuando es demasiado alta." },
          { objective: "O2", q: "En la mayoría del cableado de edificios en EE. UU., ¿qué cable suele ser blanco?", options: ["La fase", "El neutro", "La tierra", "Ninguno; nunca se usan colores"], answer: 1, why: "El neutro suele ser blanco, pero los electricistas igual lo prueban, porque los colores pueden estar mal." }
        ]
      }
    },
    {
      name: "Capítulo 2: Seguridad, herramientas y tu camino",
      lessons: [
        {
          title: "Seguridad eléctrica: bloqueo y etiquetado, y probar antes de tocar",
          objectives: ["O3"],
          minutes: 6,
          goal: "Enumerar en orden los seis pasos de bloqueo y etiquetado y nombrar los principales peligros eléctricos.",
          text: [
            "La electricidad puede matar. Los peligros eléctricos incluyen descargas, electrocución, quemaduras, arco eléctrico (arc flash: una explosión repentina de calor y luz causada por una falla eléctrica), incendios y caídas después de una descarga. OSHA (la agencia federal de seguridad laboral de EE. UU.) menciona causas comunes de lesiones eléctricas, como el contacto con líneas eléctricas, la falta de protección contra fallas a tierra, un camino a tierra roto, el mal uso de los equipos y el mal uso de las extensiones.",
            "La forma más segura de trabajar es con la energía apagada y bloqueada. La regla de bloqueo y etiquetado (lockout/tagout) de OSHA (29 CFR 1910.147) fija el orden para los trabajadores autorizados y capacitados: 1. Preparar: saber qué energía hay y cómo controlarla. 2. Apagar el equipo. 3. Aislarlo: abrir el desconectador o el breaker. 4. Poner tu propio candado y tu etiqueta. 5. Liberar o bloquear la energía almacenada (como capacitores cargados o resortes). 6. Verificar: probar que de verdad está apagado antes de empezar.",
            "Probar antes de tocar: usa un probador o medidor que primero compruebas en una fuente que sabes que tiene energía, luego prueba el circuito y luego vuelve a comprobar el probador. Solo los trabajadores capacitados y calificados hacen esto, como parte del programa de su empleador.",
            "Otros hábitos: usa escaleras que no conducen la electricidad (de fibra de vidrio) cerca de la electricidad, mantente muy lejos de las líneas eléctricas aéreas, usa protección GFCI para las herramientas eléctricas, nunca trabajes en equipos eléctricos en lugares mojados, y usa los lentes de seguridad, los guantes y el resto del equipo de protección personal (EPP) que exige tu empleador."
          ],
          steps: [
            "Preparar: conocer la energía y cómo controlarla.",
            "Apagar el equipo.",
            "Aislarlo de la fuente de energía.",
            "Poner tu propio candado y tu etiqueta.",
            "Liberar o bloquear la energía almacenada.",
            "Verificar que está apagado: probar antes de tocar."
          ],
          words: [
            ["Electrocución", "muerte causada por una descarga eléctrica."],
            ["Arco eléctrico (arc flash)", "una explosión repentina de calor, luz y presión causada por una falla eléctrica."],
            ["Bloqueo y etiquetado (lockout/tagout)", "apagar y cerrar con candado la fuente de energía, con una etiqueta, para que nadie la encienda durante el trabajo."],
            ["Energía almacenada", "energía que queda después de apagar la corriente, como en un capacitor o un resorte."],
            ["Trabajador calificado", "alguien capacitado para conocer los peligros y hacer de forma segura una tarea eléctrica específica."],
            ["OSHA", "la Administración de Seguridad y Salud Ocupacional de EE. UU., que fija las reglas de seguridad en el trabajo."]
          ],
          slides: [
            { title: "La electricidad puede matar", bullets: ["Descargas, electrocución, quemaduras", "Arco eléctrico e incendios", "Caídas después de una descarga"] },
            { title: "Bloqueo y etiquetado: seis pasos", bullets: ["1. Preparar  2. Apagar  3. Aislar", "4. Candado y etiqueta  5. Liberar energía almacenada", "6. Verificar: probar antes de tocar"] },
            { title: "Probar antes de tocar", bullets: ["Comprueba el probador en una fuente con energía conocida", "Prueba el circuito", "Vuelve a comprobar el probador"] },
            { title: "Hábitos de todos los días", bullets: ["Escaleras de fibra de vidrio cerca de la electricidad", "Lejos de las líneas eléctricas aéreas", "GFCI para herramientas; nunca trabajes mojado"] }
          ],
          sources: [
            { name: "OSHA: Seguridad eléctrica (en inglés)", url: "https://www.osha.gov/electrical" },
            { name: "OSHA: Control de energía peligrosa (bloqueo y etiquetado), 29 CFR 1910.147 (en inglés)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "En una tarjeta, escribe de memoria y en orden los seis pasos de bloqueo y etiquetado. Compáralos con la lección y corrige los errores. Al reverso, escribe tres peligros eléctricos y la protección para cada uno (por ejemplo: línea eléctrica aérea, mantente muy lejos y llama a la compañía de luz). Guarda la tarjeta: es la parte 3 de tu tarea final.",
          youCanNow: "enumerar en orden los seis pasos de bloqueo y etiquetado y unir cada peligro eléctrico con la protección correcta.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es el último paso de bloqueo y etiquetado antes de empezar a trabajar?", options: ["Verificar con una prueba que el equipo está apagado", "Poner tu candado", "Avisar al cliente", "Apagar el equipo"], answer: 0, why: "Después de bloquear y liberar la energía almacenada, verificas que de verdad está apagado antes de tocar nada." },
            { objective: "O3", q: "¿Qué escalera es la correcta cerca de equipos eléctricos?", options: ["De aluminio", "Cualquier escalera", "De fibra de vidrio", "Una escalera de madera mojada"], answer: 2, why: "La fibra de vidrio no conduce la electricidad como el metal." }
          ]
        },
        {
          title: "Herramientas, medidas y el código eléctrico",
          objectives: ["O4"],
          minutes: 6,
          goal: "Leer una cinta métrica con precisión de 1/16 de pulgada y leer el voltaje de una pila con un multímetro.",
          text: [
            "Los aprendices usan herramientas de mano como pinzas de electricista, peladores de cable, destornilladores aislados, un nivel y una cinta métrica, y herramientas de prueba como un probador de voltaje y un multímetro. Tu empleador o tu programa te enseña qué herramientas comprar y cómo usar cada una de forma segura.",
            "Cómo leer una cinta métrica: en EE. UU. se mide en pulgadas, y cada pulgada está dividida en 16 marcas pequeñas. Las marcas más largas son la media pulgada, luego los cuartos, luego los octavos y luego los dieciseisavos. Cuenta las marcas pequeñas después de la última pulgada completa y simplifica la fracción: 5 pulgadas y 6 marcas es 5 6/16, que es 5 3/8 pulgadas. Mide dos veces, corta una.",
            "Un multímetro mide voltios, amperios y ohmios. Practica solo con una pila AA común: pon el selector en voltios de CC (DC), toca el extremo + con la punta roja y el extremo - con la punta negra, y lee la pantalla. Una pila AA nueva marca unos 1.5 voltios. Nunca practiques en un enchufe ni en ningún cableado de la casa.",
            "Los electricistas siguen el Código Eléctrico Nacional (NEC, por sus siglas en inglés), también llamado NFPA 70, que fija normas seguras para el cableado y los equipos. Los estados y las ciudades adoptan el código, a veces con cambios propios, y los exámenes de licencia cubren el código y las reglas locales. Vas a aprender a usar el libro del código en tu aprendizaje."
          ],
          steps: [
            "Cinta: encuentra la última pulgada completa.",
            "Cuenta las marcas de 1/16 que hay después.",
            "Simplifica la fracción: 8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8.",
            "Medidor (solo pila): ponlo en voltios de CC, rojo al +, negro al -, lee la pantalla."
          ],
          words: [
            ["Multímetro", "un medidor que mide voltios, amperios y ohmios."],
            ["Probador de voltaje", "una herramienta que muestra si hay voltaje."],
            ["Puntas de prueba", "los cables rojo y negro con puntas que conectan el medidor con lo que pruebas."],
            ["NEC (NFPA 70)", "el Código Eléctrico Nacional de EE. UU.: normas seguras para el cableado, adoptadas por los estados y las ciudades."],
            ["Simplificar una fracción", "escribirla con los números más pequeños posibles, como 6/16 = 3/8."]
          ],
          slides: [
            { title: "Herramientas para empezar", bullets: ["Pinzas de electricista, peladores de cable", "Destornilladores aislados, nivel, cinta", "Probador de voltaje y multímetro"] },
            { title: "Cómo leer una cinta métrica", bullets: ["16 marcas por pulgada", "Cuenta las marcas después de la pulgada completa", "5 6/16 = 5 3/8 pulgadas"] },
            { title: "Práctica con multímetro: solo pila", bullets: ["Selector en voltios de CC", "Rojo al +, negro al -", "Una AA nueva marca unos 1.5 voltios", "Nunca practiques en enchufes ni cableado"] },
            { title: "El código eléctrico", bullets: ["NEC, también llamado NFPA 70", "Los estados y las ciudades lo adoptan", "Los exámenes de licencia cubren el código"] }
          ],
          sources: [
            { name: "NFPA: NFPA 70, Código Eléctrico Nacional (en inglés)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Electricistas (en inglés)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Mide cinco cosas de tu casa con una cinta métrica (una puerta, un libro, una mesa, una ventana, una caja) con precisión de 1/16 de pulgada, y escribe cada medida simplificada. Luego practica: 3 y 12/16 = ? 7 y 2/16 = ? 10 y 8/16 = ? (Respuestas: 3 3/4, 7 1/8, 10 1/2.) Si tienes un multímetro, lee el voltaje de una pila AA y anótalo. Guarda tus medidas: son la parte 4 de tu tarea final.",
          youCanNow: "leer una cinta métrica con precisión de 1/16 de pulgada y leer el voltaje de una pila con un multímetro.",
          quickCheck: [
            { objective: "O4", q: "Una tabla mide 4 pulgadas y 12 marcas de dieciseisavo. ¿Cuánto es simplificado?", options: ["4 1/2 pulgadas", "4 3/4 pulgadas", "4 12 pulgadas", "4 1/4 pulgadas"], answer: 1, why: "12/16 se simplifica a 3/4, así que son 4 3/4 pulgadas." },
            { objective: "O4", q: "En este curso, ¿dónde es seguro practicar con un multímetro?", options: ["En un enchufe de pared", "En un panel de breakers", "En un interruptor de luz", "En una pila AA"], answer: 3, why: "Una pila de casa es de bajo voltaje y segura; los enchufes y el cableado son para trabajo capacitado y supervisado." }
          ]
        },
        {
          title: "Aprendizaje, licencia y tu plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir un plan con fechas para solicitar un aprendizaje de electricista y avanzar hacia una licencia.",
          text: [
            "La Oficina de Estadísticas Laborales de EE. UU. (BLS) dice que la mayoría de los electricistas aprende con un aprendizaje de 4 o 5 años. Cada año suele incluir unas 2,000 horas de capacitación pagada en el trabajo, más clases de teoría eléctrica, lectura de planos y seguridad. Se exige un diploma de preparatoria o su equivalente (como el GED, el examen de equivalencia de la preparatoria en EE. UU.), y algunas personas estudian antes en una escuela técnica.",
            "La mayoría de los estados exige que los electricistas aprueben un examen y tengan licencia. El examen cubre el Código Eléctrico Nacional y los códigos estatales y locales. En algunos lugares también se exige educación continua para mantener la licencia. Los títulos como aprendiz (apprentice), oficial (journeyman) y maestro (master) cambian según el estado, así que revisa la junta de licencias eléctricas de tu estado o de tu localidad.",
            "Los programas de aprendizaje los manejan sindicatos, grupos de contratistas y empleadores. Muchos piden un diploma o GED, una identificación, a veces una licencia de conducir, un examen de matemáticas y lectura y una entrevista, y algunos solo reciben solicitudes en ciertas fechas. Busca programas en apprenticeship.gov y en los American Job Centers y los colegios comunitarios. Los veteranos pueden preguntar al VA (Departamento de Asuntos de Veteranos) por el GI Bill; si tienes antecedentes, pregunta al programa y a la junta de licencias cómo los revisan.",
            "Tu plan convierte todo esto en pasos con fechas: qué estudiar, a qué programas presentarte, cuándo abren y qué exige la junta de licencias."
          ],
          steps: [
            "Escribe tu meta, por ejemplo \"empezar un aprendizaje de electricista para el próximo otoño\".",
            "Encuentra dos programas cerca de ti; escribe qué pide cada uno y cuándo abren las solicitudes.",
            "Encuentra la junta de licencias de tu estado o tu ciudad y escribe qué exige (con la dirección web).",
            "Reúne tus documentos: diploma o GED, identificación, licencia de conducir si hace falta.",
            "Agrega fechas para estudiar matemáticas y lectura, y una fecha para cada solicitud."
          ],
          words: [
            ["Aprendizaje (apprenticeship)", "un trabajo pagado en el que aprendes de electricistas con experiencia, más clases."],
            ["Oficial (journeyman)", "en muchos estados, un electricista que terminó un aprendizaje y aprobó el examen de licencia; los títulos cambian."],
            ["Junta de licencias", "la oficina del estado o de la ciudad que da las licencias de electricista."],
            ["Educación continua", "cursos cortos que algunas licencias exigen para estar al día con el código y la seguridad."],
            ["American Job Center", "un centro local gratuito de ayuda para buscar trabajo y capacitación, financiado por el Departamento de Trabajo de EE. UU."]
          ],
          slides: [
            { title: "Cómo aprende la mayoría de los electricistas", bullets: ["Aprendizaje de 4 o 5 años (BLS)", "Unas 2,000 horas pagadas al año, más clases", "Se exige diploma o GED"] },
            { title: "Licencias", bullets: ["La mayoría de los estados exige examen y licencia", "El examen cubre el NEC y los códigos locales", "Revisa la junta de tu estado o tu ciudad"] },
            { title: "Cómo entrar", bullets: ["Programas de sindicatos, contratistas y empleadores", "A menudo: examen de matemáticas y lectura, entrevista", "Algunos solo reciben solicitudes en ciertas fechas"] },
            { title: "Tu plan", bullets: ["Dos programas y sus requisitos", "Reglas de licencia de la junta oficial", "Una fecha para cada paso"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Electricistas, cómo llegar a serlo (en inglés)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm#tab-4" },
            { name: "Apprenticeship.gov: buscador de aprendizajes (en inglés)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: buscador de licencias (en inglés)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Tarea final: haz tu paquete inicial de electricista. Junta tus cinco problemas de ley de Ohm (Lección 2), tu dibujo de circuito con las partes marcadas (Lección 3), tu tarjeta de bloqueo y etiquetado (Lección 4) y tus cinco medidas con cinta (Lección 5). Luego escribe tu plan con fechas: tu meta, dos programas de aprendizaje cerca de ti con lo que pide cada uno y cuándo recibe solicitudes, lo que exige tu estado o tu ciudad para la licencia (con la dirección web) y una fecha para cada paso.",
          youCanNow: "seguir tu propio plan con fechas para solicitar un aprendizaje de electricista y avanzar hacia una licencia.",
          quickCheck: [
            { objective: "O5", q: "Según la BLS, ¿cómo aprende el oficio la mayoría de los electricistas?", options: ["Con una clase en línea de una semana", "Viendo videos en casa", "Con un aprendizaje pagado de 4 o 5 años", "Solo con un título universitario de cuatro años"], answer: 2, why: "La mayoría de los electricistas aprende en un aprendizaje de 4 o 5 años que combina trabajo pagado y clases." },
            { objective: "O5", q: "¿Dónde averiguas lo que exige tu estado para una licencia de electricista?", options: ["En la junta de licencias eléctricas de tu estado o tu localidad", "En un grupo de redes sociales", "En una tienda de herramientas", "En este curso"], answer: 0, why: "Las reglas de licencia cambian según el estado y la ciudad, así que la fuente es la junta oficial." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Seguridad, herramientas y tu camino",
        questions: [
          { objective: "O3", q: "¿Qué paso de bloqueo y etiquetado va justo después de aislar el equipo?", options: ["Verificar con una prueba", "Poner tu propio candado y tu etiqueta", "Liberar la energía almacenada", "Preparar"], answer: 1, why: "El orden es preparar, apagar, aislar, poner candado y etiqueta, liberar la energía almacenada y verificar." },
          { objective: "O3", q: "¿Por qué los trabajadores liberan o bloquean la energía almacenada después de bloquear?", options: ["Para ahorrar electricidad", "Para que entre el candado", "Para terminar más rápido", "Porque piezas como los capacitores todavía pueden dar descargas con la corriente apagada"], answer: 3, why: "La energía almacenada todavía puede lastimarte después de apagar la corriente." },
          { objective: "O3", q: "OSHA menciona una causa común de lesiones eléctricas. ¿Cuál es?", options: ["El contacto con líneas eléctricas", "Usar lentes de seguridad", "Usar una escalera de fibra de vidrio", "Leer el libro del código"], answer: 0, why: "El contacto con líneas eléctricas es una de las causas comunes que menciona OSHA." },
          { objective: "O4", q: "¿Cuánto es 9/16 de pulgada más 7/16 de pulgada?", options: ["1/2 pulgada", "16 pulgadas", "1 pulgada", "2 pulgadas"], answer: 2, why: "9/16 + 7/16 = 16/16, que es 1 pulgada." },
          { objective: "O5", q: "¿Qué paso del plan está completo?", options: ["\"Ser electricista\"", "\"Presentar la solicitud algún día\"", "\"Ver programas\"", "\"Solicitar el programa de aprendizaje del condado antes de su fecha límite del 1 de marzo, con mi GED y mi identificación\""], answer: 3, why: "Nombra el programa, la fecha límite y lo que hay que llevar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos del oficio de electricista",
    questions: [
      { objective: "O1", q: "¿Qué palabra significa cuánto trabajo está haciendo la electricidad?", options: ["Vatios", "Ohmios", "Amperios", "Voltios"], answer: 0, why: "Los vatios miden la potencia: el trabajo que se hace, como calor o luz." },
      { objective: "O1", q: "La ley de Ohm dice:", options: ["P = V + I", "V = I × R", "R = V × I", "I = V × R"], answer: 1, why: "Los voltios son iguales a los amperios por los ohmios." },
      { objective: "O1", q: "Solo práctica: 120 voltios y 20 amperios. ¿Cuántos vatios?", options: ["140 vatios", "6 vatios", "2,400 vatios", "100 vatios"], answer: 2, why: "P = V × I, así que 120 × 20 = 2,400 vatios." },
      { objective: "O1", q: "Solo práctica: 24 voltios en una carga de 6 ohmios. ¿Cuántos amperios?", options: ["144 amperios", "18 amperios", "30 amperios", "4 amperios"], answer: 3, why: "I = V ÷ R, así que 24 ÷ 6 = 4 amperios." },
      { objective: "O1", q: "¿Qué pasa cuando un circuito consume más amperios de los que debe?", options: ["El voltaje se duplica", "Se sobrecarga y el breaker debería dispararse", "Los cables se enfrían", "Nada"], answer: 1, why: "Demasiada corriente es una sobrecarga; el breaker se dispara para proteger los cables." },
      { objective: "O2", q: "En un circuito en serie con tres focos, uno se funde. ¿Qué pasa?", options: ["Se apagan todos", "Solo se apaga ese", "Los demás brillan más", "El breaker se hace más grande"], answer: 0, why: "En serie hay un solo camino, así que un corte detiene la corriente para todos." },
      { objective: "O2", q: "¿Cómo suelen estar conectados los enchufes de una casa?", options: ["En serie", "Sin breaker", "En paralelo", "Sin neutro"], answer: 2, why: "El cableado en paralelo da a cada enchufe el voltaje completo y su propio camino." },
      { objective: "O2", q: "¿Qué cable da un camino seguro si algo sale mal?", options: ["La fase", "El neutro", "El retorno del interruptor", "La tierra"], answer: 3, why: "La tierra (desnuda o verde) es el camino de seguridad." },
      { objective: "O2", q: "¿Qué dispositivo corta la energía cuando detecta arcos que podrían causar un incendio?", options: ["Un GFCI", "Un AFCI", "Un regulador de luz (dimmer)", "Una clavija"], answer: 1, why: "Un interruptor de circuito por falla de arco (AFCI) ayuda a evitar incendios por arcos." },
      { objective: "O3", q: "¿Cuál es el primer paso de bloqueo y etiquetado?", options: ["Preparar: conocer la energía y cómo controlarla", "Poner tu candado", "Verificar con una prueba", "Apagar"], answer: 0, why: "Empiezas sabiendo qué energía hay y cómo controlarla." },
      { objective: "O3", q: "Cuando pruebas antes de tocar, ¿por qué compruebas primero el probador en una fuente con energía conocida?", options: ["Para calentarlo", "Para cargar su batería", "Para demostrar que el probador funciona, y así poder confiar en una lectura de \"sin voltaje\"", "No hace falta"], answer: 2, why: "Un probador dañado podría mostrar por error que no hay voltaje." },
      { objective: "O3", q: "¿Cómo se llama la explosión repentina de calor y luz causada por una falla eléctrica?", options: ["Una tierra", "Una carga", "Un breaker", "Un arco eléctrico (arc flash)"], answer: 3, why: "El arco eléctrico es una explosión peligrosa causada por una falla eléctrica." },
      { objective: "O3", q: "En este curso, ¿cuándo puedes trabajar con cableado con energía?", options: ["Nunca; el cableado real se aprende en una capacitación supervisada", "Después de la Lección 2", "Cuando el breaker está encendido", "Los fines de semana"], answer: 0, why: "Este curso no incluye trabajo con energía; eso corresponde a un programa supervisado con EPP." },
      { objective: "O4", q: "Una cinta métrica marca 6 pulgadas y 4 marcas de dieciseisavo. ¿Cuánto es simplificado?", options: ["6 1/2 pulgadas", "6 1/4 pulgadas", "6 4 pulgadas", "6 1/8 pulgadas"], answer: 1, why: "4/16 se simplifica a 1/4." },
      { objective: "O4", q: "¿Cuánto marca normalmente una pila AA nueva en un multímetro puesto en voltios de CC?", options: ["Unos 120 voltios", "Unos 12 voltios", "Unos 1.5 voltios", "Unos 240 voltios"], answer: 2, why: "Una pila AA nueva tiene unos 1.5 voltios." },
      { objective: "O4", q: "¿Cómo se llama también el Código Eléctrico Nacional?", options: ["OSHA 10", "EPA 608", "NFPA 70", "El GFCI"], answer: 2, why: "El NEC se publica como NFPA 70." },
      { objective: "O5", q: "Este curso:", options: ["Te da una licencia de electricista", "Te prepara para presentar tu solicitud; no te da licencia ni certificado", "Cuenta como horas de tu aprendizaje", "Te permite cablear casas"], answer: 1, why: "Las licencias las da tu estado o tu ciudad, y la capacitación real viene de un aprendizaje." },
      { objective: "O5", q: "¿Qué sitio gratuito te ayuda a encontrar programas de aprendizaje cerca de ti?", options: ["Un anuncio emergente", "Una sección de comentarios", "Un volante de una tienda de herramientas", "apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov tiene el buscador de aprendizajes del Departamento de Trabajo de EE. UU." },
      { objective: "O5", q: "¿Qué suelen cubrir los exámenes de licencia para electricistas?", options: ["El Código Eléctrico Nacional y los códigos estatales y locales", "Reparación de autos", "Solo plomería", "Velocidad de escritura"], answer: 0, why: "La BLS dice que los exámenes de licencia cubren el NEC y los códigos estatales y locales." },
      { objective: "O5", q: "Algunos programas solo reciben solicitudes en ciertas fechas. ¿Qué debe incluir tu plan?", options: ["Nada; solo preséntate", "Una suposición", "Solo el logotipo del programa", "Las fechas en que abren y cierran las solicitudes"], answer: 3, why: "Escribir las fechas de solicitud evita que te pierdas el plazo." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 2, 5, 7, 9, 11, 13, 15, 16, 19] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Problemas de ley de Ohm y de potencia", objective: "O1", notYet: "Menos de 4 de 5 problemas bien, o sin procedimiento.", meets: "Al menos 4 de 5 bien, cada uno con la fórmula, el procedimiento y la unidad.", exceeds: "Los 5 bien, usando las cuatro fórmulas, y revisando que cada respuesta tenga sentido." },
      { name: "Dibujo del circuito", objective: "O2", notYet: "Faltan partes o las cargas no están en paralelo.", meets: "Están marcados la fuente, el breaker, el interruptor, dos cargas en paralelo, la fase, el neutro y la tierra.", exceeds: "También muestra dónde iría un GFCI y explica por qué." },
      { name: "Tarjeta de bloqueo y etiquetado", objective: "O3", notYet: "Faltan pasos o están en desorden.", meets: "Los seis pasos en orden, más tres peligros unidos a su protección.", exceeds: "También explica cómo probar antes de tocar con la comprobación con energía, sin energía, con energía." },
      { name: "Medidas", objective: "O4", notYet: "Las lecturas están mal o las fracciones no están simplificadas.", meets: "Al menos 4 de 5 lecturas bien con precisión de 1/16 de pulgada, simplificadas.", exceeds: "Las cinco bien, más una lectura de pila con el medidor bien configurado." },
      { name: "Plan con fechas a partir de fuentes oficiales", objective: "O5", notYet: "Los pasos no tienen fechas, o las reglas vienen de anuncios o publicaciones.", meets: "Dos programas reales con requisitos y fechas de solicitud, reglas de licencia con la dirección web oficial y una fecha para cada paso.", exceeds: "También tiene un horario de estudio para el examen de ingreso y un plan de respaldo, como un trabajo de ayudante." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que solicitan un aprendizaje o preaprendizaje de electricista en un plazo de 90 días",
      "Participantes aceptados en un aprendizaje o contratados como ayudantes de electricista en un plazo de 6 meses",
      "Los programas aliados informan que los solicitantes aprueban el examen de matemáticas de ingreso y llegan conociendo los pasos básicos de seguridad"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para las páginas de la BLS, OSHA, apprenticeship.gov y las licencias del estado",
      "Papel, bolígrafo, tarjetas, una calculadora y una cinta métrica",
      "Opcional: un multímetro básico y una pila AA (práctica solo con la pila)",
      "Unos 60 a 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Nada de trabajo eléctrico con energía de ningún tipo. La única práctica con medidor es con una pila de casa; nunca dejes que los participantes prueben enchufes ni paneles.",
      "Hagan juntos las cuentas en el pizarrón primero; luego pide a los participantes que escriban sus propios problemas de práctica y los intercambien.",
      "Invita a un coordinador de aprendizaje o a un electricista con licencia a explicar el proceso de solicitud y el examen de ingreso.",
      "Ayuda a cada participante a encontrar la página de licencias de su estado o su ciudad; las reglas cambian, así que no des una sola respuesta para todo el grupo.",
      "A los participantes con antecedentes o que son veteranos, conéctalos con servicios de reinserción o para veteranos; no prometas ningún resultado de un programa ni de una junta de licencias.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

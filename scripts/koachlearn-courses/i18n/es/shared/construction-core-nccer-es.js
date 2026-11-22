"use strict";

// Koach Learn course (Spanish translation of shared/construction-core-nccer.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "construction-core-nccer-es",
  lang: "es",
  translationOf: "construction-core-nccer",
  category: "Workforce Development",
  name: "Habilidades básicas de construcción (preparación para NCCER Core)",
  skills: "Reconocer los peligros de la obra y sus controles, Leer una cinta métrica y hacer matemáticas de construcción, Elegir y revisar herramientas manuales y eléctricas, Leer planos de construcción básicos, Manejar materiales con seguridad, Planear la capacitación y los exámenes de NCCER Core",
  outcome: "prepararte para la capacitación NCCER Core: nombrar los principales peligros de la obra y cómo controlarlos, leer una cinta métrica hasta el dieciseisavo de pulgada, convertir un plano sencillo en una lista de cortes, revisar una herramienta antes de usarla, planear un levantamiento seguro y escribir un plan con fechas para capacitarte y presentar los exámenes en un centro acreditado por NCCER.",
  about: [
    "NCCER Core es el plan de estudios inicial de la mayoría de los oficios de la construcción en Estados Unidos, como carpintería, electricidad, plomería, HVAC (calefacción, ventilación y aire acondicionado) y soldadura. NCCER es el Centro Nacional para la Educación e Investigación en Construcción. Muchas escuelas secundarias, colegios comunitarios, programas de reinserción, programas para veteranos y preaprendizajes lo enseñan. Este curso es para quien quiera adelantarse: jóvenes, personas que cambian de carrera, veteranos y personas que regresan a casa después de estar en prisión.",
    "Vas a practicar los conocimientos básicos: seguridad en la obra, matemáticas de construcción con cinta métrica, herramientas manuales y eléctricas, lectura de planos, manejo de materiales y cómo ser un buen miembro del equipo. Al final preparas un paquete real: una lista de cortes de práctica y un plan con fechas para capacitarte y presentar los exámenes.",
    "Este curso te PREPARA. No otorga una credencial de NCCER. Las credenciales de NCCER se obtienen en centros de capacitación acreditados por NCCER, con exámenes escritos y tareas prácticas que haces frente a un evaluador calificado. Las herramientas, las escaleras y el levantamiento de cargas se aprenden en persona con un instructor, nunca solo con un video.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\" con papel, un lápiz y, si tienes una, una cinta métrica. Después de cada lección y de cada capítulo hay una comprobación corta, y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Prepara tu paquete de preparación para Core. Parte 1: a partir de un plano sencillo de un marco de madera de 36 pulgadas de ancho y 24 pulgadas de alto hecho con tablas de 3/4 de pulgada de grosor, escribe una lista de cortes (pieza, cuántas, largo hasta el dieciseisavo de pulgada), nombra la sierra que usarías y tres revisiones que haces antes de usarla, planea cómo cargarías y apilarías las tablas, y nombra los peligros de los Cuatro Principales (Focus Four) que podrían darse en una obra real, con un control para cada uno. Parte 2: escribe un plan de capacitación y exámenes: el centro o programa acreditado por NCCER más cercano (de la página Find a Center), los módulos de Core que vas a estudiar, una fecha de inicio, un tiempo de estudio semanal y una fecha objetivo para tus exámenes de Core.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas que buscan trabajo y quieren empezar en la construcción: jóvenes que terminan la secundaria, personas que cambian de carrera, veteranos y personas que regresan a casa después de estar en prisión. Algunas entrarán a un preaprendizaje, un aprendizaje o un programa de empleo que enseña NCCER Core; otras quieren mostrarle a un empleador que están listas para aprender.",
    startingPoint: "Pueden leer instrucciones cortas y hacer cuentas con números enteros. Muchas nunca han leído una cinta métrica más allá de las marcas de las pulgadas, no trabajan con fracciones desde la escuela, nunca han leído un plano de construcción ni han usado herramientas eléctricas siguiendo una regla de seguridad.",
    gap: "Los empleadores de la construcción y los programas de aprendizaje esperan que los trabajadores nuevos sepan lo básico de seguridad, medición, herramientas y planos desde el primer día. Quienes llegan con ese conocimiento aprenden más rápido en la capacitación práctica, están más seguros en la obra y tienen más probabilidades de terminar Core y pasar a un oficio.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado); se explica cada palabra del oficio",
      "Dispositivos: un teléfono o una computadora de la biblioteca; la práctica se hace en papel, con una cinta métrica si el participante tiene una",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo y las citas",
      "Seguridad: nada de práctica a solas con herramientas eléctricas, escaleras o levantamiento de cargas; eso se aprende con un instructor",
      "El curso solo prepara; las credenciales de NCCER vienen de programas acreditados, y los requisitos pueden cambiar"
    ],
    prerequisites: "Cuentas con números enteros y lectura de instrucciones cortas. \"Matemáticas para la vida diaria\" y \"Seguridad básica en el trabajo (OSHA)\" ayudan, pero no son obligatorios."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con una escena de obra o una lista de tareas", action: "identificar los peligros de los Cuatro Principales (Focus Four) y nombrar un control para cada uno", standard: "con al menos 4 de 5 respuestas correctas, incluida la regla de protección contra caídas a 6 pies y las reglas de las escaleras" },
    { id: "O2", condition: "Con una cinta métrica o un dibujo de una, y papel", action: "leer medidas hasta el 1/16 de pulgada más cercano y sumar, restar y convertir pies y pulgadas", standard: "con al menos 4 de 5 respuestas exactas" },
    { id: "O3", condition: "Ante una tarea de cortar, taladrar o fijar", action: "elegir una herramienta manual o eléctrica adecuada y enumerar las revisiones de seguridad antes de usarla", standard: "nombrando al menos tres revisiones correctas, entre ellas las guardas, el cable y desconectar la corriente al cambiar una hoja o una broca" },
    { id: "O4", condition: "Con un plano de construcción sencillo", action: "encontrar el cuadro de títulos, la escala, las vistas y las medidas, y convertirlos en una lista de cortes", standard: "con cada largo correcto hasta el 1/16 de pulgada más cercano" },
    { id: "O5", condition: "Ante una carga de materiales que hay que mover o guardar", action: "planear cómo levantar, cargar y apilar con seguridad, incluido cuándo pedir ayuda o equipo", standard: "cubriendo la revisión del peso, el camino, la postura para levantar y el apilado" },
    { id: "O6", condition: "Con el sitio web de NCCER y tu propio calendario", action: "escribir un plan de capacitación y exámenes de NCCER Core con un centro, los módulos y las fechas", standard: "con un centro o programa real, todos los módulos de Core y una fecha objetivo para el examen" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Seguridad, matemáticas y medición",
      lessons: [
        {
          title: "Qué es NCCER Core y cómo se obtienen las credenciales",
          objectives: ["O6"],
          minutes: 5,
          goal: "Explicar qué cubre NCCER Core y cómo se obtiene una credencial de NCCER.",
          text: [
            "NCCER es el Centro Nacional para la Educación e Investigación en Construcción (National Center for Construction Education and Research). Escribe la capacitación para los oficios de la construcción y lleva un registro de las credenciales que la gente obtiene. Core es el plan de estudios inicial sobre el que se construye la mayoría de los oficios.",
            "En la 6.ª edición de Core, los módulos son: Basic Safety (orientación sobre seguridad en la obra), Introducción a las matemáticas de construcción, Introducción a las herramientas manuales, Introducción a las herramientas eléctricas, Introducción a los planos de construcción, Habilidades básicas de comunicación, Habilidades básicas de empleabilidad e Introducción al manejo de materiales. Build Your Future in Construction e Introducción al aparejo básico (Basic Rigging) son optativos. Revisa la página de Core, porque las ediciones cambian.",
            "Las credenciales de NCCER se obtienen en centros de capacitación acreditados. Presentas exámenes escritos sobre lo que sabes y haces tareas con seguridad mientras un evaluador te observa. Tus resultados quedan registrados con tu propio número de NCCER para que los empleadores puedan revisarlos en internet.",
            "Core se enseña a menudo en escuelas secundarias, colegios comunitarios, programas de empleo y de reinserción, y preaprendizajes. Usa la página Find a Center (Buscar un centro) de NCCER para encontrar uno cerca de ti. Este curso te prepara; no te da la credencial."
          ],
          steps: ["Abre nccer.org y busca la página de Core en el catálogo de oficios.", "Anota los módulos de Core de la edición actual.", "Abre la página Find a Center y busca cerca de ti.", "Anota dos lugares cerca de ti y cómo contactarlos."],
          words: [["NCCER", "Centro Nacional para la Educación e Investigación en Construcción: el grupo que escribe esta capacitación de construcción y registra las credenciales."], ["Core", "el primer plan de estudios de NCCER; la mayoría de los oficios de la construcción empiezan con él."], ["Módulo", "una unidad de un plan de estudios, como un capítulo de un libro, con su propio examen."], ["Credencial", "prueba de que aprobaste la capacitación y los exámenes, que un empleador puede verificar."], ["Acreditado", "aprobado por NCCER para capacitar y examinar a personas para las credenciales de NCCER."], ["Preaprendizaje", "un programa corto que te prepara para entrar a un aprendizaje."]],
          slides: [
            { title: "NCCER Core", bullets: ["El plan de estudios inicial de la mayoría de los oficios de la construcción", "Carpintería, electricidad, plomería, HVAC y soldadura se basan en él"] },
            { title: "Módulos de la 6.ª edición de Core", bullets: ["Seguridad, matemáticas, herramientas manuales y eléctricas, planos", "Comunicación, empleabilidad, manejo de materiales", "Optativos: Build Your Future, aparejo básico"] },
            { title: "Cómo se obtiene", bullets: ["Capacítate en un centro acreditado por NCCER", "Aprueba los exámenes escritos", "Haz las tareas con seguridad frente a un evaluador", "Resultados registrados con tu número de NCCER"] },
            { title: "Este curso", bullets: ["Te prepara", "No otorga la credencial", "Usa Find a Center para encontrar un programa"] }
          ],
          sources: [
            { name: "NCCER: plan de estudios Core (catálogo de oficios)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "NCCER: credenciales reconocidas por la industria", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "NCCER: Find a Center (Buscar un centro)", url: "https://www.nccer.org/find-a-center/" },
            { name: "Apprenticeship.gov: ¿Qué es un preaprendizaje?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" }
          ],
          tryIt: "Abre la página de Core de NCCER y la página Find a Center. En papel, escribe los módulos de Core y los nombres de dos lugares cerca de ti que enseñen o examinen NCCER. Si no puedes conectarte a internet, escribe los módulos de esta lección y pregunta en tu American Job Center local (centro público de empleo) qué programas enseñan NCCER Core.",
          youCanNow: "decir qué cubre NCCER Core, cómo se obtienen sus credenciales y dónde buscar un programa cerca de ti.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde se obtienen las credenciales de NCCER?", options: ["En cualquier curso de video en línea", "En un centro de capacitación acreditado por NCCER", "Comprando un certificado en internet", "En el DMV (oficina de licencias de conducir) de tu estado"], answer: 1, why: "Las credenciales de NCCER vienen de centros acreditados, con exámenes escritos y tareas prácticas." },
            { objective: "O6", q: "¿Qué hace este curso de Koach Learn?", options: ["Te otorga la credencial de NCCER Core", "Reemplaza los exámenes prácticos", "Te prepara para la capacitación y los exámenes de Core", "Te convierte en contratista con licencia"], answer: 2, why: "Te prepara; la credencial viene de un programa acreditado." }
          ]
        },
        {
          title: "Seguridad en la obra: los Cuatro Principales y sus controles",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identificar los peligros de los Cuatro Principales en una obra y nombrar un control para cada uno.",
          text: [
            "OSHA (la agencia federal de seguridad y salud en el trabajo de Estados Unidos) llama Focus Four, o los Cuatro Principales, a las cuatro causas que más muertes provocan en la construcción: caídas, golpes por objetos, quedar atrapado en o entre algo, y electrocución. El módulo Basic Safety de Core empieza aquí.",
            "Caídas: OSHA exige protección contra caídas a partir de seis pies (unos 1.8 metros) en la construcción, como barandas, redes de seguridad o un sistema personal de detención de caídas. Cubre o protege los huecos. En una escalera portátil que se usa para subir a otro nivel, los largueros deben sobresalir al menos 3 pies por encima del descanso, y el pie de la escalera va más o menos a un pie de la pared por cada cuatro pies de altura (la regla de 4 a 1).",
            "Golpes por objetos: usa casco y chaleco de alta visibilidad, no te quedes debajo de las cargas y nunca te pares detrás de un vehículo que va en reversa. Atrapado en o entre: no entres a zanjas sin protección y aléjate de las piezas en movimiento y del equipo que gira. Electrocución: mira hacia arriba por si hay cables eléctricos, conecta las herramientas en tomacorrientes con GFCI y nunca trabajes en circuitos con corriente a menos que tengas capacitación y autorización.",
            "El EPP es la última línea de defensa. Los lentes de seguridad, el casco, los guantes, la protección auditiva y las botas te protegen, pero primero hay que eliminar o proteger el peligro. Si algo parece inseguro, detente y avísale a tu supervisor."
          ],
          steps: ["Mira la tarea y el área que la rodea.", "Pregúntate: ¿alguien puede caerse, recibir un golpe, quedar atrapado o tocar electricidad?", "Nombra el control: guarda, cubierta, distancia, protección o cortar la corriente.", "Ponte el EPP adecuado.", "Si no puedes controlarlo, detente y avísale a tu supervisor."],
          words: [["Cuatro Principales (Focus Four)", "el nombre que OSHA da a las cuatro causas principales de muerte en la construcción: caídas, golpes por objetos, quedar atrapado en o entre algo, y electrocución."], ["Protección contra caídas", "barandas, redes de seguridad o un sistema de arnés que detienen o evitan una caída."], ["GFCI", "interruptor de circuito por falla a tierra: un aparato que corta la corriente rápido cuando hay una fuga, para evitar descargas."], ["EPP", "equipo de protección personal: casco, lentes de seguridad, guantes, botas, protección auditiva, chaleco."], ["Control", "una forma de eliminar o reducir un peligro."]],
          slides: [
            { title: "Los Cuatro Principales", bullets: ["Caídas", "Golpes por objetos", "Atrapado en o entre algo", "Electrocución"] },
            { title: "Caídas", bullets: ["Protección contra caídas a partir de 6 pies en la construcción", "Cubre o protege los huecos", "Largueros 3 pies sobre el descanso; ángulo de 4 a 1"] },
            { title: "Golpes, atrapamientos, electrocución", bullets: ["Casco, chaleco, no te quedes debajo de las cargas", "Nada de zanjas sin protección; lejos de piezas en movimiento", "Mira si hay cables arriba; usa GFCI; nada de trabajo con corriente sin capacitación"] },
            { title: "El EPP es la última línea", bullets: ["Primero elimina o protege el peligro", "Luego usa el EPP adecuado", "¿Inseguro? Detente y avísale a tu supervisor"] }
          ],
          sources: [
            { name: "OSHA: capacitación Focus Four para la construcción", url: "https://www.osha.gov/training/outreach/construction/focus-four" },
            { name: "OSHA: protección contra caídas", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.1053, escaleras", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" }
          ],
          tryIt: "Dibuja en papel una obra sencilla: la estructura de una casa de dos pisos, una escalera, una zanja, un cable eléctrico y un camión. Marca un peligro de los Cuatro Principales para cada uno y escribe el control al lado. Luego calcula a qué distancia de la pared debe ir el pie de una escalera que llega a 16 pies de altura (respuesta: unos 4 pies).",
          youCanNow: "nombrar los peligros de los Cuatro Principales, dar un control para cada uno y usar la regla de los 6 pies y las reglas de las escaleras.",
          quickCheck: [
            { objective: "O1", q: "Un trabajador está en el borde de un techo a 10 pies de altura, sin baranda. ¿Qué se aplica?", options: ["Nada, está a menos de 20 pies", "Solo hace falta un casco", "Los guantes resuelven el problema", "Se necesita protección contra caídas a partir de 6 pies"], answer: 3, why: "OSHA exige protección contra caídas a partir de seis pies en la construcción." },
            { objective: "O1", q: "Una escalera llega a 12 pies de altura en una pared. ¿Más o menos a qué distancia debe ir su pie?", options: ["3 pies", "6 pies", "1 pie", "12 pies"], answer: 0, why: "La regla de 4 a 1: 1 pie hacia afuera por cada 4 pies de altura, así que 12 / 4 = 3 pies." }
          ]
        },
        {
          title: "Matemáticas de construcción: la cinta métrica y las fracciones",
          objectives: ["O2"],
          minutes: 6,
          goal: "Leer una cinta métrica hasta el 1/16 de pulgada más cercano y sumar y convertir pies y pulgadas.",
          text: [
            "La mayoría de las cintas métricas que se usan en la construcción en Estados Unidos dividen cada pulgada en dieciseisavos. La línea más larga en medio de una pulgada es 1/2. Las siguientes más cortas son 1/4 y 3/4, luego los octavos, y las más cortas de todas son los dieciseisavos. Cuenta las líneas pequeñas después de la última pulgada entera: 6 líneas pequeñas después de 5 pulgadas es 5 6/16, que se simplifica a 5 3/8.",
            "Para simplificar, divide el número de arriba y el de abajo entre 2 hasta que el de arriba sea impar: 12/16 = 6/8 = 3/4. Para sumar fracciones, dales el mismo número de abajo: 2 3/4 + 1 5/8 = 2 6/8 + 1 5/8 = 3 11/8 = 4 3/8.",
            "Un pie tiene 12 pulgadas. Para pasar de pies a pulgadas, multiplica por 12 y suma las pulgadas que sobran: 7 pies 4 pulgadas = 84 + 4 = 88 pulgadas. Para pasar de pulgadas a pies, divide entre 12; lo que sobra son pulgadas: 100 pulgadas = 8 pies 4 pulgadas.",
            "Revisa la escuadra con la regla 3-4-5: mide 3 pies en un lado y 4 pies en el otro; si la diagonal entre esas marcas mide 5 pies, la esquina está a escuadra. Mide dos veces, corta una."
          ],
          steps: ["Busca la última pulgada entera antes del final de lo que mides.", "Cuenta las líneas de dieciseisavos que hay después.", "Escribe el número en dieciseisavos y luego simplifícalo.", "Para pies y pulgadas, multiplica los pies por 12 y suma las pulgadas.", "Revisa tu respuesta midiendo otra vez."],
          words: [["Dieciseisavo", "1/16 de pulgada, la marca más pequeña en la mayoría de las cintas métricas de construcción."], ["Simplificar", "escribir una fracción con números más pequeños que valen lo mismo, como 8/16 = 1/2."], ["A escuadra", "una esquina de exactamente 90 grados."], ["Regla 3-4-5", "una forma de revisar que una esquina esté a escuadra: 3 y 4 en los lados dan 5 en la diagonal."]],
          slides: [
            { title: "Leer la cinta", bullets: ["Cada pulgada se divide en 16", "La línea del medio más larga: 1/2", "Luego 1/4 y 3/4, después los octavos, después los dieciseisavos"] },
            { title: "Fracciones en el trabajo", bullets: ["Simplifica: 12/16 = 6/8 = 3/4", "Mismo número de abajo para sumar: 2 3/4 + 1 5/8 = 4 3/8"] },
            { title: "Pies y pulgadas", bullets: ["1 pie = 12 pulgadas", "7 pies 4 pulg = 88 pulg", "100 pulg = 8 pies 4 pulg"] },
            { title: "Revisar la escuadra", bullets: ["3 pies en un sentido, 4 pies en el otro", "Diagonal de 5 pies = a escuadra", "Mide dos veces, corta una"] }
          ],
          tryIt: "En papel, resuelve: (1) 9 pies 7 pulgadas en pulgadas; (2) 3 7/16 + 2 5/8; (3) 50 pulgadas en pies y pulgadas; (4) 10/16 simplificado. Respuestas: 115 pulgadas; 6 1/16; 4 pies 2 pulgadas; 5/8. Si tienes una cinta métrica, mide una mesa, una puerta y un libro hasta el 1/16 de pulgada más cercano.",
          youCanNow: "leer una cinta métrica hasta 1/16 de pulgada, simplificar y sumar fracciones, convertir pies y pulgadas, y revisar si una esquina está a escuadra.",
          quickCheck: [
            { objective: "O2", q: "¿Cuántas pulgadas son 6 pies 3 pulgadas?", options: ["63 pulgadas", "75 pulgadas", "72 pulgadas", "93 pulgadas"], answer: 1, why: "6 x 12 = 72, más 3 = 75 pulgadas." },
            { objective: "O2", q: "¿Cuánto es 2 1/2 + 1 3/8?", options: ["3 4/10", "3 1/2", "3 7/8", "4 1/8"], answer: 2, why: "2 4/8 + 1 3/8 = 3 7/8." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Seguridad, matemáticas y medición",
        questions: [
          { objective: "O6", q: "¿Cuál de estos es un módulo obligatorio de NCCER Core, 6.ª edición?", options: ["Introducción a las matemáticas de construcción", "Soldadura avanzada de tuberías", "Manejo comercial", "Derecho inmobiliario"], answer: 0, why: "Introducción a las matemáticas de construcción es uno de los módulos de Core." },
          { objective: "O1", q: "¿Cuál NO es uno de los peligros de los Cuatro Principales de OSHA?", options: ["Caídas", "Electrocución", "Errores de papeleo", "Golpes por objetos"], answer: 2, why: "Los Cuatro Principales son caídas, golpes por objetos, quedar atrapado en o entre algo, y electrocución." },
          { objective: "O1", q: "Conectas una sierra en una obra. ¿Qué te protege de una descarga si hay una fuga de corriente?", options: ["Un cable más largo", "Guantes mojados", "Ponerle cinta al enchufe", "Un GFCI"], answer: 3, why: "Un GFCI corta la corriente rápido cuando hay una fuga." },
          { objective: "O2", q: "Cuentas 10 marcas de dieciseisavos después de 4 pulgadas. ¿Cuál es la medida?", options: ["4 1/10", "4 5/8", "4 3/4", "4 1/2"], answer: 1, why: "10/16 se simplifica a 5/8, así que son 4 5/8 pulgadas." },
          { objective: "O2", q: "Mides 3 pies y 4 pies en los dos lados de una esquina. La diagonal mide 5 pies 2 pulgadas. ¿Qué significa?", options: ["La esquina está a escuadra", "La cinta está rota", "La esquina todavía no está a escuadra", "Debes usar 6 pies en su lugar"], answer: 2, why: "Una esquina a escuadra da exactamente 5 pies en la diagonal." }
        ]
      }
    },
    {
      name: "Capítulo 2: Herramientas, planos y tu plan",
      lessons: [
        {
          title: "Herramientas manuales y eléctricas: elegir, revisar y usar con seguridad",
          objectives: ["O3"],
          minutes: 6,
          goal: "Elegir una herramienta adecuada para una tarea y enumerar las revisiones de seguridad antes de usarla.",
          text: [
            "Elige la herramienta hecha para el trabajo. Un martillo de uña clava y saca clavos; una cinta métrica, una escuadra rápida y un nivel sirven para marcar y revisar; un serrucho o una sierra circular cortan tablas; un taladro atornilla y hace agujeros; una navaja multiuso marca el panel de yeso. Usar la herramienta equivocada, como un destornillador en lugar de un cincel, causa lesiones y daños.",
            "Antes de usar cualquier herramienta, revísala. Herramientas manuales: sin cabezas flojas, mangos rajados ni caras de golpe deformadas en forma de hongo. Herramientas eléctricas: guardas en su lugar y funcionando, cable y enchufe sin cortes ni sin la clavija de tierra, interruptor que funciona, hoja o broca afilada y del tipo correcto.",
            "Cuando cambies una hoja o una broca, desconecta la herramienta o quítale la batería. Nunca cargues una herramienta por el cable ni lo jales para desconectarla. Mantén los cables fuera de los pasillos. Usa lentes de seguridad siempre, y protección auditiva con las herramientas ruidosas.",
            "Usar herramientas es una habilidad práctica. Aprende y practica cada herramienta eléctrica con un instructor antes de usarla por tu cuenta, y sigue el manual del fabricante y las reglas de tu obra."
          ],
          steps: ["Elige la herramienta hecha para la tarea.", "Revísala: mango, cabeza, guarda, cable, enchufe, interruptor, hoja o broca.", "Ponte los lentes de seguridad y el resto del EPP.", "Desconecta o quita la batería antes de cambiar una hoja o una broca.", "Marca y reporta una herramienta dañada; no la uses."],
          words: [["Guarda", "una cubierta en una herramienta eléctrica que mantiene tus manos lejos de la hoja o de las piezas en movimiento."], ["Clavija de tierra", "la tercera pata redonda de un enchufe, que ayuda a evitar descargas."], ["Escuadra rápida", "una herramienta en forma de triángulo para marcar líneas rectas y en ángulo."], ["Deformada en forma de hongo", "cuando la punta de golpe de un cincel o un punzón se ensancha por los golpes; pueden saltar pedazos."]],
          slides: [
            { title: "La herramienta correcta para cada trabajo", bullets: ["Martillo: clavar y sacar clavos", "Sierra: cortar; taladro: agujeros y tornillos", "Escuadra y nivel: marcar y revisar"] },
            { title: "Revisa antes de usar", bullets: ["Manuales: sin cabezas flojas ni mangos rajados", "Eléctricas: guarda, cable, enchufe, interruptor, hoja"] },
            { title: "Hábitos seguros", bullets: ["Desconecta antes de cambiar una hoja o una broca", "Nunca la cargues por el cable", "Lentes de seguridad siempre"] },
            { title: "Práctica con un instructor", bullets: ["Practica primero cada herramienta eléctrica con un instructor", "Sigue el manual y las reglas de la obra", "Marca y reporta las herramientas dañadas"] }
          ],
          sources: [
            { name: "OSHA: herramientas manuales y eléctricas", url: "https://www.osha.gov/hand-power-tools" }
          ],
          tryIt: "Para cada tarea, escribe la herramienta y tres revisiones que harías: (1) cortar un 2x4 a la medida; (2) atornillar en una tabla de terraza; (3) sacar un clavo doblado. Ejemplo para (1): sierra circular; la guarda se cierra sola, el cable y el enchufe están sin daños, la hoja está afilada y bien apretada.",
          youCanNow: "elegir una herramienta para una tarea, revisarla y seguir los hábitos seguros con herramientas manuales y eléctricas.",
          quickCheck: [
            { objective: "O3", q: "Necesitas cambiar la hoja de una sierra circular. ¿Qué haces primero?", options: ["Desconectar la sierra", "Mantener apretado el gatillo", "Quitar la guarda para siempre", "Pedirle a un compañero que la sostenga encendida"], answer: 0, why: "Desconectarla, o quitarle la batería, evita que la sierra arranque mientras tienes las manos en la hoja." },
            { objective: "O3", q: "Al enchufe de una extensión le falta la clavija de tierra. ¿Qué haces?", options: ["Usarla si te apuras", "Tapar el hueco con cinta", "Sacarla de uso y reportarla", "Cortar el enchufe"], answer: 2, why: "Un enchufe dañado es un peligro de descarga; márcalo como fuera de servicio y repórtalo." }
          ]
        },
        {
          title: "Leer planos de construcción y hacer una lista de cortes",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Encontrar el cuadro de títulos, la escala, las vistas y las medidas de un plano y escribir con ellos una lista de cortes.",
          text: [
            "Los planos de construcción muestran qué hay que construir. Empieza por el cuadro de títulos: el nombre del proyecto, el número de hoja, la fecha, quién lo dibujó y la escala. La leyenda explica los símbolos y las abreviaturas.",
            "Los planos muestran distintas vistas. Una vista en planta mira desde arriba. Un alzado (elevación) mira de frente un lado. Un corte es una rebanada del edificio que muestra el interior. Un detalle es un acercamiento de una parte.",
            "La escala te dice cómo se relaciona el dibujo con el tamaño real. A 1/4 de pulgada = 1 pie, una línea de 2 1/2 pulgadas de largo son 10 pies. Usa siempre las medidas escritas; si falta una medida escrita o no cuadra, pregúntale a tu supervisor en lugar de medir el papel.",
            "Una lista de cortes convierte un plano en piezas para cortar: nombre, cuántas, largo. Para un marco de 36 pulgadas de ancho y 24 pulgadas de alto hecho con tablas de 3/4 de pulgada, con las piezas de los lados metidas entre la de arriba y la de abajo: arriba y abajo son 2 de 36 pulgadas; los lados son 2 de 24 - 3/4 - 3/4 = 22 1/2 pulgadas."
          ],
          steps: ["Lee el cuadro de títulos: proyecto, hoja, fecha y escala.", "Lee la leyenda para entender los símbolos.", "Busca la vista que necesitas: planta, alzado, corte o detalle.", "Escribe las medidas de cada parte.", "Resta donde las partes se traslapan y luego escribe la lista de cortes: pieza, cuántas, largo."],
          words: [["Cuadro de títulos", "el recuadro de un plano con el nombre del proyecto, el número de hoja, la fecha y la escala."], ["Escala", "cómo se relaciona el tamaño del dibujo con el tamaño real, como 1/4 de pulgada = 1 pie."], ["Vista en planta", "un dibujo que mira desde arriba."], ["Alzado", "un dibujo que mira de frente un lado; también se llama elevación."], ["Lista de cortes", "una lista de piezas para cortar, con cuántas y de qué largo."]],
          slides: [
            { title: "Empieza por el cuadro de títulos", bullets: ["Proyecto, número de hoja, fecha", "La escala", "Luego la leyenda de símbolos"] },
            { title: "Cuatro vistas", bullets: ["Planta: desde arriba", "Alzado: un lado", "Corte: una rebanada; detalle: un acercamiento"] },
            { title: "Escala y medidas", bullets: ["1/4 de pulgada = 1 pie: 2 1/2 pulgadas en el papel = 10 pies", "Usa las medidas escritas; no midas el papel", "¿Falta o está mal? Pregúntale a tu supervisor"] },
            { title: "Hacer una lista de cortes", bullets: ["Pieza, cuántas, largo", "Resta donde las partes se traslapan", "Marco de 36 x 24: 2 de 36 pulg, 2 de 22 1/2 pulg"] }
          ],
          tryIt: "Dibuja una caja en papel y márcala con 48 pulgadas de ancho y 30 pulgadas de alto, hecha con tablas de 3/4 de pulgada, con los lados metidos entre la tabla de arriba y la de abajo. Escribe la lista de cortes. Respuesta: 2 de 48 pulgadas y 2 de 28 1/2 pulgadas. Luego: a 1/4 de pulgada = 1 pie, ¿cuánto mide una pared dibujada de 3 3/4 pulgadas de largo? (Respuesta: 15 pies.)",
          youCanNow: "leer el cuadro de títulos, la escala y las vistas de un plano sencillo y convertir sus medidas en una lista de cortes.",
          quickCheck: [
            { objective: "O4", q: "¿Dónde encuentras la escala y el número de hoja en un plano?", options: ["En la vista de corte", "En el cuadro de títulos", "En la parte de atrás de la hoja", "Solo en la leyenda de símbolos"], answer: 1, why: "El cuadro de títulos tiene el nombre del proyecto, el número de hoja, la fecha y la escala." },
            { objective: "O4", q: "La escala es 1/4 de pulgada = 1 pie. Una pared está dibujada de 2 pulgadas de largo. ¿Cuánto mide?", options: ["2 pies", "4 pies", "6 pies", "8 pies"], answer: 3, why: "2 pulgadas son ocho cuartos de pulgada, así que son 8 pies." }
          ]
        },
        {
          title: "Manejo de materiales, trabajo en equipo y tu plan de Core",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Planear cómo levantar y cargar materiales con seguridad y escribir un plan de capacitación y exámenes de NCCER Core con fechas.",
          text: [
            "Antes de levantar, evalúa la carga: cuánto pesa, qué tan grande es, si tiene bordes filosos. Revisa tu camino por si hay cosas con las que tropezar o puertas. Si es pesada o incómoda, pide ayuda a un compañero o usa un carrito, una carretilla u otro equipo para el que tengas capacitación. Levanta con las piernas: pies separados, dobla las rodillas, mantén la carga cerca, no gires el cuerpo. Gira con los pies.",
            "Apila los materiales en suelo plano y firme, con lo pesado abajo, y usa calzas o apilado cruzado para que las pilas no se deslicen ni rueden. Mantén libres los pasillos y las salidas. Carga las tablas largas con la punta de adelante en alto y fíjate en la punta de atrás cuando gires.",
            "Los buenos miembros del equipo llegan a tiempo, listos y con su EPP. Escuchan, repiten las instrucciones (\"Cortar cuatro de 22 y media, entendido\"), preguntan cuando no están seguros y reportan los peligros de inmediato. Core enseña esto en los módulos de Habilidades básicas de comunicación y de empleabilidad.",
            "Ahora haz tu plan. Elige un centro o programa, anota los módulos de Core, escoge una fecha de inicio y un tiempo de estudio semanal, y pon una fecha objetivo para tus exámenes. Anota las fechas en tu calendario y cuéntaselo a alguien que te pregunte cómo vas."
          ],
          steps: ["Evalúa la carga y el camino.", "Pide ayuda o usa equipo para cargas pesadas o incómodas.", "Levanta con las piernas, mantén la carga cerca, no gires el cuerpo.", "Apila en suelo firme, lo pesado abajo, pasillos libres.", "Escribe tu plan: centro, módulos, fecha de inicio, tiempo semanal, fecha del examen."],
          words: [["Calzas", "pedazos de madera que se ponen para que una pila no ruede ni se deslice."], ["Apilado cruzado", "poner cada capa atravesada sobre la de abajo para que la pila se mantenga firme."], ["Repetir la instrucción", "decirle una instrucción de vuelta a la persona que la dio, para que los dos sepan que se escuchó bien."]],
          slides: [
            { title: "Antes de levantar", bullets: ["Evalúa el peso, el tamaño y los bordes", "Revisa el camino", "¿Pesada o incómoda? Pide ayuda o usa equipo"] },
            { title: "Levantar y apilar", bullets: ["Dobla las rodillas, carga cerca, sin girar el cuerpo", "Lo pesado abajo, con calzas o apilado cruzado", "Pasillos y salidas libres"] },
            { title: "Sé un buen miembro del equipo", bullets: ["A tiempo, listo y con EPP", "Repite las instrucciones", "Pregunta si tienes dudas; reporta los peligros"] },
            { title: "Tu plan de Core", bullets: ["Un centro o programa cerca de ti", "Módulos de Core y tiempo de estudio semanal", "Fecha de inicio y fecha objetivo del examen"] }
          ],
          sources: [
            { name: "NCCER: Find a Center (Buscar un centro)", url: "https://www.nccer.org/find-a-center/" },
            { name: "NCCER: plan de estudios Core (catálogo de oficios)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "Apprenticeship.gov: buscador de aprendizajes", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Escribe un plan para mover diez tablas 2x6 de 12 pies desde un camión hasta un área de trabajo a 50 pies de distancia: la revisión del peso, el camino, quién ayuda, cómo las cargas y cómo las apilas. Luego empieza tu plan de Core: escribe el centro que encontraste en la lección 1, los módulos de Core, una fecha de inicio, tu tiempo de estudio semanal y una fecha objetivo para el examen.",
          youCanNow: "planear cómo levantar, cargar y apilar con seguridad, actuar como un buen miembro del equipo y escribir un plan con fechas para capacitarte y presentar los exámenes de NCCER Core.",
          quickCheck: [
            { objective: "O5", q: "Una caja pesa más de lo que puedes levantar con comodidad. ¿Qué haces?", options: ["Levantarla rápido para terminar pronto", "Girar el cuerpo para subirla de un impulso", "Pedir ayuda a un compañero o usar un carrito", "Arrastrarla de una esquina"], answer: 2, why: "Las cargas pesadas o incómodas necesitan ayuda o equipo." },
            { objective: "O6", q: "¿Qué plan de capacitación está completo?", options: ["\"Estudiar en algún momento.\"", "\"Buscar un centro más tarde.\"", "\"Presentar el examen algún día.\"", "\"Centro: programa de empleo del condado; módulos de Core; inicio 3 de nov.; martes y jueves de 6 a 8 pm; examen objetivo 15 de feb.\""], answer: 3, why: "Nombra un centro, los módulos, una fecha de inicio, el tiempo semanal y una fecha objetivo para el examen." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Herramientas, planos y tu plan",
        questions: [
          { objective: "O3", q: "Antes de usar una sierra eléctrica, ¿qué revisión importa más?", options: ["Que la guarda funcione y el cable no esté dañado", "Que la sierra sea de un color bonito", "Que el cable alcance hasta tu carro", "Que la hoja esté desafilada para que corte despacio"], answer: 0, why: "Una guarda que funciona y un cable seguro evitan cortes y descargas." },
          { objective: "O4", q: "¿Qué vista mira de frente un lado de un edificio?", options: ["Vista en planta", "Alzado", "Detalle", "Cuadro de títulos"], answer: 1, why: "Un alzado muestra un lado de frente." },
          { objective: "O4", q: "Un marco mide 40 pulgadas de alto. Los lados van entre las tablas de arriba y de abajo, de 3/4 de pulgada de grosor. ¿Cuánto miden los lados?", options: ["40 pulgadas", "39 1/4 pulgadas", "38 1/2 pulgadas", "41 1/2 pulgadas"], answer: 2, why: "40 - 3/4 - 3/4 = 38 1/2 pulgadas." },
          { objective: "O5", q: "¿Cómo debes apilar la madera en la obra?", options: ["Sobre lodo blando", "Atravesada en la puerta de salida", "Lo liviano abajo", "En suelo firme, con calzas o apilado cruzado, pasillos libres"], answer: 3, why: "El suelo firme, las calzas o el apilado cruzado y los pasillos libres mantienen las pilas firmes y a la gente segura." },
          { objective: "O5", q: "Tu jefe de cuadrilla dice: \"Corta cuatro de 22 y media.\" ¿Qué es una buena respuesta?", options: ["\"Cuatro de 22 y media, entendido.\"", "Nada; empiezo a cortar", "\"Lo que sea.\"", "\"Lo demás lo adivino.\""], answer: 0, why: "Repetir la instrucción muestra que se escuchó bien." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades básicas de construcción (preparación para NCCER Core)",
    questions: [
      { objective: "O6", q: "¿Qué significa NCCER?", options: ["Consejo Nacional de Reglas de Empleo para Contratistas", "Centro Nacional para la Educación e Investigación en Construcción", "Nuevos Códigos de Construcción y Reglamentos Eléctricos", "Comité Nacional de Carpintería y Reparación Eléctrica"], answer: 1, why: "NCCER es el Centro Nacional para la Educación e Investigación en Construcción (National Center for Construction Education and Research)." },
      { objective: "O6", q: "¿Cómo se obtiene una credencial de NCCER?", options: ["Viendo videos e imprimiendo un certificado", "Pagando una cuota en internet sin examen", "Aprobando exámenes escritos y haciendo tareas frente a un evaluador en un centro acreditado", "Trabajando un día en cualquier obra"], answer: 2, why: "Las credenciales requieren exámenes escritos y tareas prácticas en un centro acreditado." },
      { objective: "O6", q: "¿Qué página de NCCER te ayuda a encontrar un lugar para capacitarte o examinarte?", options: ["Find a Center", "La leyenda", "Una hoja de datos de seguridad", "Tu talón de pago"], answer: 0, why: "La página Find a Center de NCCER muestra los lugares de capacitación y de examen." },
      { objective: "O1", q: "¿Qué lista corresponde a los Cuatro Principales de OSHA?", options: ["Ruido, calor, polvo y frío", "Caídas, golpes por objetos, atrapado en o entre algo, electrocución", "Fuego, inundación, viento y nieve", "Papeleo, horas extra, descansos y pago"], answer: 1, why: "Estas cuatro causan la mayoría de las muertes en la construcción." },
      { objective: "O1", q: "¿A partir de qué altura exige OSHA protección contra caídas en la construcción?", options: ["2 pies", "20 pies", "10 pies", "6 pies"], answer: 3, why: "OSHA exige protección contra caídas a partir de seis pies en la construcción." },
      { objective: "O1", q: "Una escalera llega a un descanso superior. ¿Cuánto deben sobresalir sus largueros por encima del descanso?", options: ["Al menos 3 pies", "Justo al mismo nivel", "6 pulgadas", "Al menos 10 pies"], answer: 0, why: "La regla de OSHA para escaleras: largueros al menos 3 pies por encima del descanso superior." },
      { objective: "O1", q: "Ves un cable eléctrico arriba de donde un equipo quiere levantar una escalera. ¿Qué haces?", options: ["Levantarla rápido", "Usar una escalera de metal", "Detenerte y avisarle al supervisor antes de seguir", "Tocar el cable para probarlo"], answer: 2, why: "La electrocución es uno de los Cuatro Principales; detente y repórtalo." },
      { objective: "O2", q: "¿Cuántas pulgadas son 8 pies 5 pulgadas?", options: ["85", "96", "105", "101"], answer: 3, why: "8 x 12 = 96, más 5 = 101 pulgadas." },
      { objective: "O2", q: "¿Cuánto es 14/16 simplificado?", options: ["7/8", "3/4", "1/2", "14/8"], answer: 0, why: "Divide arriba y abajo entre 2: 7/8." },
      { objective: "O2", q: "¿Cuánto es 1 3/4 + 2 3/8?", options: ["3 6/12", "4 1/8", "3 3/8", "4 3/4"], answer: 1, why: "1 6/8 + 2 3/8 = 3 9/8 = 4 1/8." },
      { objective: "O3", q: "¿Qué herramienta está hecha para clavar y sacar clavos?", options: ["Escuadra rápida", "Navaja multiuso", "Martillo de uña", "Nivel"], answer: 2, why: "Un martillo de uña clava los clavos y los saca." },
      { objective: "O3", q: "La cabeza de un martillo está floja en el mango. ¿Qué haces?", options: ["Usarlo con cuidado", "Marcarlo como fuera de servicio y reportarlo", "Envolverlo con cinta", "Prestárselo a un compañero"], answer: 1, why: "Una cabeza floja puede salir volando; saca la herramienta de uso y repórtala." },
      { objective: "O3", q: "¿Cuál es un hábito seguro con herramientas eléctricas de cable?", options: ["Cargar la herramienta por el cable", "Quitar la guarda para ver mejor", "Desconectar el enchufe jalando el cable", "Mantener los cables fuera de los pasillos y usar lentes de seguridad"], answer: 3, why: "Los pasillos libres evitan tropiezos, y los lentes de seguridad protegen tus ojos." },
      { objective: "O4", q: "¿Qué vista de un plano mira desde arriba?", options: ["Vista en planta", "Alzado", "Corte", "Detalle"], answer: 0, why: "Una vista en planta mira desde arriba." },
      { objective: "O4", q: "Una medida escrita en un plano no coincide con lo que mides en el papel. ¿Qué haces?", options: ["Usar tu medida del papel", "Usar la medida escrita, o preguntarle a tu supervisor si parece estar mal", "Sacar el promedio de las dos", "Saltarte esa parte"], answer: 1, why: "Mandan las medidas escritas; pregunta cuando algo no cuadra." },
      { objective: "O4", q: "A 1/4 de pulgada = 1 pie, ¿cuánto mide una pared dibujada de 5 pulgadas de largo?", options: ["5 pies", "10 pies", "20 pies", "25 pies"], answer: 2, why: "5 pulgadas son veinte cuartos de pulgada, así que son 20 pies." },
      { objective: "O5", q: "¿Cuál es la forma correcta de levantar?", options: ["Doblarte por la cintura con las piernas rectas", "Girar el cuerpo para bajar la carga", "Sostener la carga lejos del cuerpo", "Doblar las rodillas, mantener la carga cerca, girar con los pies"], answer: 3, why: "Usar las piernas y mantener la carga cerca protege tu espalda." },
      { objective: "O5", q: "Llevas una tabla larga por una puerta. ¿En qué te fijas?", options: ["En la punta de atrás de la tabla cuando giras", "Solo en tu teléfono", "En nada; las tablas son livianas", "En las luces del techo"], answer: 0, why: "La punta de atrás se mueve cuando giras y puede golpear a personas o cosas." },
      { objective: "O5", q: "Antes de mover una carga, ¿qué evalúas primero?", options: ["Quién está mirando", "El peso, el tamaño y los bordes de la carga, y el camino", "El color de la carga", "Qué tan rápido puedes correr con ella"], answer: 1, why: "Conocer la carga y el camino te dice si necesitas ayuda o equipo." },
      { objective: "O6", q: "¿Qué va en un plan de capacitación y exámenes?", options: ["Solo la palabra \"algún día\"", "El PIN de tu banco", "Un centro, los módulos, una fecha de inicio, el tiempo de estudio semanal y una fecha objetivo para el examen", "Una lista de herramientas para comprar antes de empezar"], answer: 2, why: "Un plan con un lugar, los módulos y fechas es un plan que puedes seguir." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 4, 5, 7, 9, 11, 13, 15, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Lista de cortes", objective: "O4", notYet: "Faltan largos o no se toman en cuenta las tablas de 3/4 de pulgada.", meets: "Dos piezas de 36 pulgadas y dos de 22 1/2 pulgadas, con nombres de las piezas y cantidades.", exceeds: "Además toma en cuenta el corte de la sierra (la ranura que deja la hoja) y marca desde qué cara se mide." },
      { name: "Medición y matemáticas", objective: "O2", notYet: "Las fracciones están mal o no están simplificadas.", meets: "Cada largo es correcto hasta el 1/16 de pulgada más cercano y está simplificado.", exceeds: "Muestra las cuentas y revisa la escuadra del marco con la regla 3-4-5." },
      { name: "Elección y revisión de la herramienta", objective: "O3", notYet: "No nombra ninguna herramienta, o da menos de tres revisiones.", meets: "Nombra una sierra adecuada y tres revisiones correctas, entre ellas la guarda, el cable y desconectar para cambiar la hoja.", exceeds: "Además enumera el EPP y dice que usará la herramienta solo después de capacitarse con un instructor." },
      { name: "Manejo seguro", objective: "O5", notYet: "No hay plan para el peso, el camino ni el apilado.", meets: "Cubre la revisión del peso, el camino, la postura para levantar y el apilado.", exceeds: "Además dice cuándo pedir un ayudante o equipo y cómo llevar las tablas largas en las vueltas." },
      { name: "Peligros de la obra", objective: "O1", notYet: "No nombra ningún peligro.", meets: "Nombra al menos dos peligros de los Cuatro Principales que podrían darse y un control para cada uno.", exceeds: "Cubre los cuatro, con sus controles." },
      { name: "Plan de capacitación y exámenes", objective: "O6", notYet: "No hay centro o no hay fechas.", meets: "Un centro o programa real, los módulos de Core, una fecha de inicio, el tiempo de estudio semanal y una fecha objetivo para el examen.", exceeds: "Las fechas están en un calendario y se nombra a una persona de apoyo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se inscriben en un programa de NCCER Core o en un preaprendizaje dentro de 60 días (encuesta de seguimiento)",
      "Participantes que obtienen credenciales de NCCER Core, según lo que informa el participante o el programa asociado",
      "Participantes contratados en un trabajo de construcción o en un aprendizaje dentro de 6 meses",
      "Los programas asociados informan menos vacíos de seguridad y de matemáticas entre los nuevos estudiantes de Core"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel, lápiz y una regla; una cinta métrica si hay",
      "Un teléfono o una computadora para abrir nccer.org y osha.gov",
      "Copias impresas del plano del marco de práctica para las sesiones en grupo",
      "Unos 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego enseñe un capítulo por sesión, con las tareas de \"Pruébalo ahora\" hechas en vivo.",
      "Lleve varias cintas métricas; pida a los participantes que lean marcas en las cintas de los demás y revisen las respuestas en parejas.",
      "No deje que los participantes usen herramientas eléctricas, escaleras ni equipo de levantamiento en este curso; eso lo enseña en persona un instructor calificado de NCCER.",
      "Ayude a los participantes a usar la página Find a Center de NCCER y póngalos en contacto con programas locales de Core, preaprendizajes o el American Job Center.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez.",
      "Para participantes en reinserción, señale empleadores y programas de segunda oportunidad; para veteranos, consulte con el VA (Departamento de Asuntos de Veteranos) sobre el uso de los beneficios educativos para aprendizajes o capacitación."
    ]
  }
};

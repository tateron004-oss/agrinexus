"use strict";

// Koach Learn course (Spanish translation of shared/carpentry-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "carpentry-basics-es",
  lang: "es",
  translationOf: "carpentry-basics",
  category: "Workforce Development",
  name: "Carpintería básica",
  skills: "Leer una cinta métrica al 1/16 de pulgada, Elegir madera y fijaciones, Seguir las reglas de seguridad con herramientas y escaleras, Trazar una pared de montantes a partir de un plano, Escribir una lista de cortes, Planificar tu camino hacia un aprendizaje de carpintería",
  outcome: "medir y sumar longitudes con precisión de 1/16 de pulgada, elegir la madera y las fijaciones correctas, explicar los pasos de seguridad para sierras y escaleras, trazar una pared sencilla de montantes a partir de un plano, escribir una lista de cortes con poco desperdicio y seguir un plan con fechas para entrar en un aprendizaje o programa de formación en carpintería.",
  about: [
    "Los carpinteros construyen y reparan la estructura de casas y edificios, instalan pisos, escaleras, puertas, ventanas y molduras, y construyen los moldes de madera que sostienen el concreto. La mayoría aprende en el trabajo o en un aprendizaje pagado. Este curso es para personas que buscan empleo, jóvenes, veteranos, personas que salen de prisión y adultos que cambian de carrera y quieren llegar preparados a un programa o a su primera obra.",
    "Aprenderás a leer una cinta métrica y a hacer las cuentas con fracciones que los carpinteros usan cada día, a distinguir la madera, los tableros y las fijaciones, y los hábitos de seguridad con sierras, pistolas de clavos y escaleras. Después leerás un plano sencillo, trazarás una pared de montantes en papel, escribirás una lista de cortes para un proyecto pequeño y planificarás cómo entrar en una formación.",
    "Este curso te prepara. No te da una licencia ni una certificación. El uso de una sierra o de cualquier herramienta eléctrica se aprende en persona, con un instructor calificado, lentes de seguridad y protección auditiva. Nada en este curso te pide cortar con una herramienta eléctrica en casa.",
    "Cada lección dura unos cinco minutos, con una tarea \"Pruébalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tu producto final es tu propio paquete inicial de carpintería."
  ],
  finalTask: "Prepara tu paquete inicial de carpintería: (1) cinco medidas con cinta métrica de objetos de tu casa, con precisión de 1/16 de pulgada, y dos de ellas sumadas y restadas mostrando el procedimiento; (2) una lista de revisión de seguridad antes de usar una sierra circular y una escalera extensible; (3) un trazado en papel de una pared de montantes de 8 pies a 16 pulgadas entre centros, con las soleras, cada marca de montante y el número de montantes; (4) una lista de cortes para un estante pequeño o una jardinera, con las medidas reales de las tablas, el margen para el corte de la sierra y cuántas tablas comprar; y (5) un plan con fechas para solicitar entrada en dos programas de aprendizaje o formación en carpintería cerca de ti, tomados de sitios web oficiales.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos y jóvenes que quieren un oficio de la construcción sin un título universitario de cuatro años: personas que buscan empleo, jóvenes en programas de empleo, veteranos, personas que salen de prisión y adultos que cambian de carrera. Algunos han hecho trabajo manual, militar o en talleres de prisión; la mayoría no tiene formación formal en carpintería.",
    startingPoint: "Saben hacer cuentas con números enteros y algunas fracciones, y han usado un martillo o un destornillador. La mayoría todavía no sabe leer una cinta métrica al 1/16 de pulgada, sumar longitudes con fracciones, distinguir la medida nominal de la real de la madera, leer un plano ni trazar una pared.",
    gap: "Los programas de aprendizaje y los contratistas esperan que los nuevos trabajadores midan con precisión, conozcan los materiales y herramientas básicos y trabajen con seguridad desde el primer día. Las medidas equivocadas desperdician madera y dinero; los malos hábitos con sierras y escaleras causan lesiones graves. Los participantes necesitan las cuentas básicas, el vocabulario, los hábitos de seguridad y un plan claro para presentar su solicitud.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas (aproximadamente de 6.º a 8.º grado); cada palabra del oficio se explica",
      "Nada de cortar con herramientas eléctricas en casa: la práctica usa una cinta métrica, papel, lápiz, una regla y cartón o madera sobrante",
      "Dispositivos: un teléfono o una computadora de biblioteca para las páginas oficiales; una calculadora ayuda, pero no es obligatoria",
      "Tiempo: lecciones de 5 a 6 minutos que caben entre el trabajo y las citas",
      "Jóvenes menores de 18 años: las reglas federales de trabajo infantil limitan el trabajo con sierras eléctricas y máquinas de carpintería; las licencias y las reglas de los programas cambian según el estado"
    ],
    prerequisites: "Cuentas con números enteros. \"Empezar una carrera en los oficios calificados\" ayuda a elegir un oficio; \"Seguridad básica en el trabajo (OSHA)\" cubre la seguridad general en la obra. Este curso profundiza en la carpintería."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una cinta métrica y objetos de tu casa", action: "leer medidas con precisión de 1/16 de pulgada y sumar o restar longitudes con fracciones", standard: "acertando al menos 4 de 5, mostrando el procedimiento" },
    { id: "O2", condition: "Ante un trabajo de construcción sencillo", action: "elegir la madera, los tableros y las fijaciones para ese trabajo y dar sus medidas reales", standard: "con el material correcto y la medida real en al menos 4 de 5 elementos" },
    { id: "O3", condition: "Antes de usar una sierra, una pistola de clavos o una escalera", action: "enumerar las revisiones de seguridad y el equipo de protección para esa herramienta", standard: "nombrando el equipo de protección y al menos cuatro revisiones para cada herramienta" },
    { id: "O4", condition: "Con el plano de una pared sencilla", action: "trazar una pared de montantes a 16 pulgadas entre centros y contar los montantes y las soleras", standard: "con cada marca de montante a menos de 1/16 de pulgada y el conteo correcto" },
    { id: "O5", condition: "Con el dibujo de un proyecto pequeño", action: "escribir una lista de cortes con medidas reales, margen para el corte de la sierra y el número de tablas que hay que comprar", standard: "de modo que todas las piezas quepan en las tablas indicadas" },
    { id: "O6", condition: "Usando sitios web oficiales de tu zona", action: "escribir un plan con fechas para solicitar entrada en dos programas de aprendizaje o formación en carpintería", standard: "con programas reales, sus requisitos y una fecha para cada paso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Medir, materiales y seguridad",
      lessons: [
        {
          title: "Leer una cinta métrica y sumar fracciones",
          objectives: ["O1"],
          minutes: 6,
          goal: "Leer una cinta métrica con precisión de 1/16 de pulgada y sumar o restar dos longitudes.",
          text: [
            "La carpintería funciona con la cinta métrica. Cada pulgada se divide en 16 espacios pequeños. La línea más larga en el medio de la pulgada es 1/2. Las siguientes más largas son 1/4 y 3/4. Después vienen los octavos, y las líneas más cortas son los dieciseisavos.",
            "Para leer una longitud, busca la última pulgada entera y cuenta las líneas pequeñas que hay después. Diez dieciseisavos después de 5 pulgadas es 5-10/16, que se simplifica a 5-5/8. Muchas cintas también marcan cada 16 pulgadas con otro color, porque es una separación común entre montantes.",
            "El gancho de metal del extremo se desliza un poco a propósito. Sale cuando enganchas el extremo de una tabla y entra cuando empujas contra una pared, así las dos lecturas son correctas. Nunca lo enderces ni lo limes.",
            "Para sumar fracciones, haz que los números de abajo sean iguales. 5-3/8 + 2-7/16 es 5-6/16 + 2-7/16 = 7-13/16. Para restar de un número entero, toma prestada una pulgada: 10 - 3-5/8 es 9-8/8 - 3-5/8 = 6-3/8. Mide dos veces, corta una."
          ],
          steps: ["Engancha la cinta en el extremo de la tabla o apóyala plana contra la pared.", "Busca la última pulgada entera antes del final.", "Cuenta las líneas de dieciseisavos después de esa pulgada.", "Simplifica la fracción (8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8).", "Anótala enseguida y vuelve a medir antes de marcar."],
          words: [
            ["Fracción", "una parte de una pulgada entera, como 1/2, 3/8 o 5/16."],
            ["Dieciseisavo", "1/16 de pulgada, la marca más pequeña en la mayoría de las cintas de carpintero."],
            ["Gancho", "la pestaña de metal en el extremo de la cinta; se desliza para que las medidas por dentro y por fuera sean correctas."],
            ["Simplificar", "escribir una fracción con números más pequeños que valen lo mismo, como 10/16 = 5/8."]
          ],
          slides: [
            { title: "Dentro de una pulgada", bullets: ["16 espacios pequeños", "Línea central más larga: 1/2", "Luego 1/4 y 3/4, después octavos y dieciseisavos"] },
            { title: "Leer una longitud", bullets: ["Busca la última pulgada entera", "Cuenta los dieciseisavos que siguen", "Simplifica: 10/16 = 5/8"] },
            { title: "El gancho se mueve a propósito", bullets: ["Sale al enganchar el extremo de una tabla", "Entra al empujar contra una pared", "Nunca lo enderces ni lo limes"] },
            { title: "Sumar y restar", bullets: ["Iguala los números de abajo", "5-3/8 + 2-7/16 = 7-13/16", "10 - 3-5/8 = 6-3/8", "Mide dos veces, corta una"] }
          ],
          tryIt: "Mide cinco cosas de tu casa (el ancho de una puerta, un libro, un estante, una caja, el borde de una mesa) con precisión de 1/16 de pulgada y anota cada medida. Luego suma dos de ellas y resta la más corta de la más larga, mostrando el procedimiento. Guarda esta hoja para tu paquete inicial.",
          youCanNow: "leer una cinta métrica con precisión de 1/16 de pulgada y sumar o restar longitudes con fracciones.",
          quickCheck: [
            { objective: "O1", q: "La cinta marca 6 pulgadas enteras y 12 dieciseisavos más. ¿Cuál es la longitud?", options: ["6-1/2 pulgadas", "6-12 pulgadas", "6-3/4 pulgadas", "7-1/4 pulgadas"], answer: 2, why: "12/16 se simplifica a 3/4, así que la longitud es 6-3/4 pulgadas." },
            { objective: "O1", q: "¿Cuánto es 4-1/2 + 3-3/16?", options: ["7-4/18", "7-11/16", "8-1/16", "7-1/2"], answer: 1, why: "1/2 es 8/16, y 8/16 + 3/16 = 11/16, así que el total es 7-11/16." }
          ]
        },
        {
          title: "Madera, tableros y fijaciones",
          objectives: ["O2"],
          minutes: 5,
          goal: "Elegir la tabla, el tablero o la fijación correcta para un trabajo y dar su medida real.",
          text: [
            "La madera se vende por una medida nominal, el nombre, que es mayor que la medida real. Un 2x4 mide en realidad unas 1-1/2 por 3-1/2 pulgadas. Un 2x6 mide unas 1-1/2 por 5-1/2. Un 1x10 mide unas 3/4 por 9-1/4. Planifica siempre con la medida real, o tu proyecto no encajará.",
            "Los tableros vienen en hojas de 4 por 8 pies. El contrachapado (plywood) son capas finas de madera pegadas en cruz; el OSB son virutas de madera prensadas. Los dos cubren pisos, paredes y techos. La madera tratada a presión tiene químicos que resisten la pudrición y los insectos, por eso se usa al aire libre y en contacto con el concreto o el suelo. Usa guantes y mascarilla contra el polvo al cortarla, y nunca quemes los sobrantes.",
            "Los clavos se miden en \"penny\" (se escribe d). Un clavo común 16d, de unas 3-1/2 pulgadas de largo, es un clavo estándar para estructura. Los tornillos sujetan mejor y se sacan más fácilmente; taladra un pequeño agujero guía cerca del extremo de una tabla para que no se raje. Al aire libre, usa fijaciones con recubrimiento o de acero inoxidable para que no se oxiden.",
            "Mira a lo largo de cada tabla antes de usarla. La mayoría tiene una ligera curva en el canto, llamada corona. En las vigas de piso y los cabios del techo la corona va hacia arriba, para que el peso la empuje y la deje plana."
          ],
          words: [
            ["Medida nominal", "la medida de nombre de la madera, como 2x4, que es mayor que su medida real."],
            ["Medida real", "la medida que se obtiene al medir, como 1-1/2 por 3-1/2 pulgadas para un 2x4."],
            ["Contrachapado y OSB", "hojas de 4 por 8 pies para pisos, paredes y techos; el contrachapado son capas pegadas y el OSB son virutas de madera prensadas."],
            ["Tratada a presión", "madera con químicos que resisten la pudrición y los insectos, usada al aire libre y cerca del suelo."],
            ["Penny (d)", "el sistema de medida de los clavos; un clavo común 16d mide unas 3-1/2 pulgadas."],
            ["Corona", "la ligera curva hacia arriba a lo largo del canto de una tabla."]
          ],
          slides: [
            { title: "La medida nominal no es la real", bullets: ["2x4 mide unas 1-1/2 x 3-1/2 pulg.", "2x6 mide unas 1-1/2 x 5-1/2 pulg.", "1x10 mide unas 3/4 x 9-1/4 pulg.", "Planifica con la medida real"] },
            { title: "Tableros y madera tratada", bullets: ["Contrachapado y OSB: hojas de 4 x 8 pies", "Tratada a presión: al aire libre, cerca del suelo o del concreto", "Guantes y mascarilla al cortarla; nunca quemes los sobrantes"] },
            { title: "Fijaciones", bullets: ["Clavo común 16d: unas 3-1/2 pulg., para estructura", "Los tornillos sujetan mejor; agujero guía cerca de los extremos", "Al aire libre: con recubrimiento o inoxidables"] },
            { title: "Mira a lo largo de cada tabla", bullets: ["Encuentra la corona", "Corona hacia arriba en vigas y cabios"] }
          ],
          tryIt: "En una tienda, en una página de madera en línea o en tu casa, busca una tabla y un tablero. Escribe la medida nominal y luego la medida real. Después elige una fijación para cada uno de estos trabajos y escribe por qué: armar la estructura de una pared, una terraza al aire libre, un estante cerca del extremo de una tabla.",
          youCanNow: "distinguir la medida nominal de la real en la madera y elegir tablas, tableros y fijaciones adecuados para el trabajo.",
          quickCheck: [
            { objective: "O2", q: "Apilas tres 2x4 acostados. ¿Qué grosor tiene aproximadamente la pila?", options: ["4-1/2 pulgadas", "6 pulgadas", "3 pulgadas", "10-1/2 pulgadas"], answer: 0, why: "Un 2x4 mide en realidad unas 1-1/2 pulgadas de grosor, y 3 x 1-1/2 = 4-1/2 pulgadas." },
            { objective: "O2", q: "¿Qué madera usas para un poste que toca el suelo al aire libre?", options: ["Contrachapado para interiores", "Cualquier 2x4 sin tratar", "OSB", "Madera tratada a presión"], answer: 3, why: "La madera tratada a presión resiste la pudrición y los insectos que trae el contacto con el suelo." }
          ]
        },
        {
          title: "Seguridad con herramientas y escaleras",
          objectives: ["O3"],
          minutes: 6,
          goal: "Enumerar el equipo de protección y las revisiones previas para una sierra circular, una pistola de clavos y una escalera.",
          text: [
            "Las lesiones en carpintería suelen venir de sierras, pistolas de clavos, caídas y levantamiento de peso. Siempre usa lentes de seguridad, protección auditiva cerca de herramientas ruidosas, botas de trabajo y, en una obra, casco. Usa mascarilla contra el polvo cuando el corte levante polvo. Nada de mangas sueltas, joyas o pelo largo suelto cerca de una hoja de sierra. Si tienes menos de 18 años, las reglas federales prohíben la mayor parte del trabajo con sierras eléctricas y máquinas de carpintería; los aprendices y estudiantes en práctica de 16 años o más en programas aprobados tienen una excepción limitada.",
            "Antes de usar una sierra circular: revisa el cable y el enchufe o la batería, comprueba que la guarda de la hoja vuelva sola a su lugar, usa una hoja afilada hecha para ese material y sujeta la pieza con prensas para que no se mueva. Desenchufa la sierra o saca la batería antes de cambiar la hoja. Párate a un lado de la línea de corte, mantén las dos manos lejos de ella y deja que la hoja se detenga antes de levantar la sierra. Una hoja que se atasca puede lanzar la sierra hacia ti (rebote).",
            "Pistolas de clavos: mantén el dedo fuera del gatillo hasta que estés listo, nunca apuntes a nadie y desconecta el aire o la batería para destrabarla. Una herramienta con gatillo de disparo único (secuencial) es más segura para principiantes.",
            "Escaleras (según la tarjeta de seguridad de escaleras de OSHA, la agencia federal de seguridad en el trabajo): revísala primero, mantén tres puntos de contacto, ponte de frente a la escalera, separa la base unos 1 pie por cada 4 pies de altura hasta el apoyo superior, haz que sobresalga al menos 3 pies por encima del lugar donde vas a subir, y no te pares en el último peldaño a menos que esté hecho para eso. Cuidado con los cables eléctricos, sobre todo con una escalera de metal."
          ],
          steps: ["Ponte lentes de seguridad, protección auditiva y botas.", "Revisa el cable, el enchufe o la batería, y la guarda.", "Sujeta la pieza con prensas.", "Desenchufa o saca la batería antes de cambiar la hoja o destrabar.", "Coloca y revisa la escalera antes de subir."],
          words: [
            ["EPP", "equipo de protección personal: lentes de seguridad, protección auditiva, guantes, botas, casco."],
            ["Guarda de la hoja", "la cubierta que vuelve sola sobre la hoja de la sierra cuando termina el corte."],
            ["Rebote", "cuando la hoja se atasca y la sierra salta hacia atrás, hacia quien la usa."],
            ["Tres puntos de contacto", "dos manos y un pie, o dos pies y una mano, sobre la escalera en todo momento."]
          ],
          slides: [
            { title: "Úsalo siempre", bullets: ["Lentes de seguridad y protección auditiva", "Botas de trabajo; casco en la obra", "Mascarilla cuando el corte levanta polvo"] },
            { title: "Revisión de la sierra circular", bullets: ["Cable, enchufe o batería en buen estado", "La guarda vuelve sola", "Hoja afilada; pieza sujeta", "Desenchufa antes de cambiar la hoja"] },
            { title: "Mientras cortas", bullets: ["Párate a un lado de la línea de corte", "Manos lejos de la hoja", "Deja que la hoja se detenga antes de levantar"] },
            { title: "Escaleras (OSHA)", bullets: ["Revisa primero; tres puntos de contacto", "1 pie hacia afuera por cada 4 pies de altura", "3 pies sobre el punto de apoyo; nada de último peldaño", "Busca cables eléctricos"] }
          ],
          sources: [
            { name: "OSHA QuickCard: Seguridad con escaleras portátiles (en inglés)", url: "https://www.osha.gov/sites/default/files/publications/portable_ladder_qc.pdf" },
            { name: "Departamento de Trabajo de EE. UU.: Reglas de trabajo infantil en empleos no agrícolas (Hoja informativa 43)", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }
          ],
          tryIt: "Escribe en una tarjeta una lista de revisión de seguridad para una sierra circular (al menos cuatro revisiones y el equipo que usas) y otra para una escalera extensible (al menos cuatro revisiones). Si tienes una escalera en casa, haz solo la inspección y la revisión de la colocación de 1 por cada 4; no uses una sierra eléctrica en casa sin formación. Guarda la tarjeta para tu paquete inicial.",
          youCanNow: "enumerar el equipo y las revisiones antes de usar una sierra, una pistola de clavos o una escalera, y sabes que cortar se aprende en persona con un instructor calificado.",
          quickCheck: [
            { objective: "O3", q: "Necesitas cambiar la hoja de una sierra circular con cable. ¿Qué haces primero?", options: ["Mantener desactivado el seguro del gatillo", "Desenchufar la sierra", "Ponerte solo guantes", "Pedir a alguien que sostenga la guarda abierta"], answer: 1, why: "Desenchufarla (o sacar la batería) hace que la sierra no pueda arrancar mientras tus manos están cerca de la hoja." },
            { objective: "O3", q: "El apoyo superior está a 12 pies de altura en una pared. ¿A qué distancia aproximada va la base de la escalera?", options: ["1 pie", "6 pies", "12 pies", "3 pies"], answer: 3, why: "La regla de OSHA es aproximadamente 1 pie hacia afuera por cada 4 pies de altura: 12 / 4 = 3 pies." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Medir, materiales y seguridad",
        questions: [
          { objective: "O1", q: "¿Cuánto es 10 - 4-3/8?", options: ["6-3/8", "5-5/8", "6-5/8", "5-3/8"], answer: 1, why: "Toma prestada una pulgada: 9-8/8 - 4-3/8 = 5-5/8." },
          { objective: "O2", q: "Tu plano dice que un estante es un 1x10. ¿Qué ancho tiene en realidad la tabla, aproximadamente?", options: ["10 pulgadas", "9-1/2 pulgadas", "1 pulgada", "9-1/4 pulgadas"], answer: 3, why: "Un 1x10 mide unas 3/4 por 9-1/4 pulgadas; planifica con la medida real." },
          { objective: "O2", q: "Atornillas en una tabla a 1 pulgada de su extremo. ¿Qué evita que se raje?", options: ["Taladrar primero un agujero guía", "Usar un tornillo más largo", "Golpear el tornillo con un martillo", "Usar OSB en su lugar"], answer: 0, why: "Un agujero guía da espacio al tornillo para que la madera cerca del extremo no se raje." },
          { objective: "O3", q: "¿Dónde te paras cuando haces un corte con una sierra circular?", options: ["Justo detrás de la hoja", "Delante de la sierra", "A un lado de la línea de corte", "Sobre la tabla que estás cortando"], answer: 2, why: "Si la sierra rebota, vuelve en línea recta por la línea de corte; pararte a un lado te deja fuera de su camino." },
          { objective: "O3", q: "¿Cuál es una regla correcta de OSHA sobre escaleras?", options: ["Pararte en el último peldaño para llegar más alto", "Usar una escalera de metal cerca de cables eléctricos", "Mantener una mano en la escalera", "Mantener tres puntos de contacto al subir"], answer: 3, why: "Tres puntos de contacto (dos manos y un pie, o dos pies y una mano) evitan que te caigas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planos, trazado y tu camino de entrada",
      lessons: [
        {
          title: "Leer un plano y trazar una pared de montantes",
          objectives: ["O4"],
          minutes: 6,
          goal: "Trazar una pared de montantes de 8 pies a 16 pulgadas entre centros y contar los montantes y las soleras.",
          text: [
            "Un plano es un dibujo a escala. En muchos planos de casas, 1/4 de pulgada en el papel equivale a 1 pie en la realidad. Una planta mira desde arriba; un alzado muestra una pared de lado. Las longitudes se escriben en pies y pulgadas, como 12'-6\" (12 pies 6 pulgadas). Nunca midas un plano impreso con una regla para sacar una medida; usa las medidas escritas o pregunta.",
            "La estructura básica de una pared tiene una solera inferior, una solera superior (a menudo doble) y montantes de pie entre ellas. Los montantes suelen ir a 16 pulgadas entre centros (o.c., \"on center\" en inglés), es decir, 16 pulgadas desde el centro de un montante hasta el centro del siguiente. Algunas paredes usan 24 pulgadas entre centros; sigue el plano.",
            "Para trazar: pon las soleras inferior y superior una al lado de la otra, mide desde un extremo y marca las dos a la vez. Marca el primer montante en el extremo y luego marcas a 16, 32, 48, 64 y 80 pulgadas. Muchos carpinteros marcan 3/4 de pulgada antes de cada línea (15-1/4, 31-1/4 y así) y ponen una X del lado donde va el montante, para que los bordes de las hojas de 4 pies caigan en el centro de los montantes. Pon un último montante en el otro extremo.",
            "Contar montantes: largo de la pared en pulgadas dividido por la separación, más uno. Una pared de 8 pies mide 96 pulgadas; 96 / 16 = 6 espacios, así que son 7 montantes. Las esquinas, puertas y ventanas necesitan montantes extra; el plano o tu supervisor te los indica."
          ],
          steps: ["Lee en el plano el largo de la pared y la separación de los montantes.", "Pon las soleras superior e inferior una al lado de la otra, con los extremos parejos.", "Marca las dos soleras juntas desde el mismo extremo.", "Marca una X donde va cada montante, y un montante en cada extremo.", "Cuenta: largo / separación + 1, más los extra que muestre el plano."],
          words: [
            ["Escala", "la relación entre el tamaño del dibujo y el tamaño real, como 1/4 de pulgada = 1 pie."],
            ["Planta y alzado", "la planta mira desde arriba; el alzado muestra un lado de una pared o un edificio."],
            ["Solera", "la tabla plana abajo o arriba de una pared, sobre la que se apoyan los montantes y que estos sostienen."],
            ["Montante", "una tabla vertical en la estructura de una pared, a menudo un 2x4 o un 2x6."],
            ["Entre centros (o.c.)", "medido desde el centro de un montante hasta el centro del siguiente."]
          ],
          slides: [
            { title: "Leer un plano", bullets: ["Dibujado a escala, a menudo 1/4 pulg. = 1 pie", "Planta: desde arriba; alzado: de lado", "Usa las medidas escritas, no una regla"] },
            { title: "Partes de una pared", bullets: ["Solera inferior y solera superior", "Montantes entre ellas", "Normalmente a 16 pulg. entre centros"] },
            { title: "Trazar", bullets: ["Soleras una al lado de la otra; marca las dos a la vez", "Marcas a 16, 32, 48, 64, 80 pulg.", "Marca una X donde va cada montante"] },
            { title: "Contar los montantes", bullets: ["Largo en pulgadas / separación + 1", "Pared de 8 pies: 96 / 16 = 6, o sea 7 montantes", "Suma extras para esquinas, puertas y ventanas"] }
          ],
          tryIt: "En papel (o en una tira larga de cartón marcada hasta 96 pulgadas si tienes espacio), dibuja una pared de 8 pies. Marca la solera inferior a 16 pulgadas entre centros desde el extremo izquierdo, pon una X donde va cada montante y escribe cuántos montantes y soleras necesitas. Revisa cada marca con tu cinta. Guárdalo para tu paquete inicial.",
          youCanNow: "leer el plano de una pared sencilla y trazar montantes a 16 pulgadas entre centros con el conteo correcto.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa 16 pulgadas entre centros?", options: ["16 pulgadas entre los bordes de dos montantes", "16 pulgadas desde el centro de un montante hasta el centro del siguiente", "16 montantes en la pared", "Una pared de 16 pulgadas de ancho"], answer: 1, why: "Entre centros se mide de centro a centro, así cada montante queda a la misma separación." },
            { objective: "O4", q: "¿Cuántos montantes necesita una pared de 12 pies a 16 pulgadas entre centros, sin puertas ni ventanas?", options: ["10", "9", "12", "8"], answer: 0, why: "12 pies son 144 pulgadas; 144 / 16 = 9 espacios, más 1 = 10 montantes." }
          ]
        },
        {
          title: "Hacer una lista de cortes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir una lista de cortes para un proyecto pequeño con medidas reales, margen de corte y tablas que hay que comprar.",
          text: [
            "Una lista de cortes es una tabla con cada pieza que necesitas: el nombre de la pieza, cuántas, el material y el largo y ancho exactos. Ahorra madera, dinero y viajes a la tienda, y en la obra permite que un ayudante corte mientras el carpintero principal construye.",
            "Usa medidas reales. Ejemplo: un estante de 24 pulgadas de ancho total, hecho con 1x10. Los dos lados miden 3/4 de pulgada de grosor cada uno, así que la tabla del estante entre ellos mide 24 - 3/4 - 3/4 = 22-1/2 pulgadas de largo.",
            "Cada corte de sierra convierte una franja de madera en aserrín. Esa franja es el corte de la sierra (en inglés \"kerf\"), de unos 1/8 de pulgada en muchas hojas. Suma un corte de sierra por cada corte cuando planifiques cuántas piezas caben en una tabla.",
            "Después planifica las tablas. De un 1x10 de 8 pies (96 pulgadas): dos lados de 30 pulgadas y un estante de 22-1/2 pulgadas usan 82-1/2 pulgadas, más 3 cortes de sierra (3/8 de pulgada) son 82-7/8 pulgadas, y sobran unas 13 pulgadas. Las tablas no siempre vienen perfectamente a escuadra ni miden exactamente 96 pulgadas, así que recorta primero el extremo de fábrica y compra un poco de más."
          ],
          steps: ["Anota cada pieza con su nombre y cuántas.", "Calcula cada largo y ancho con medidas reales.", "Ordena las piezas por material.", "Acomoda las piezas en tablas de largo estándar, sumando un corte de sierra por corte.", "Escribe cuántas tablas comprar, más un poco de más."],
          words: [
            ["Lista de cortes", "una tabla con cada pieza que hay que cortar, con cuántas, el material y las medidas."],
            ["Corte de sierra (kerf)", "el ancho de madera que quita la hoja de la sierra en un corte, a menudo unos 1/8 de pulgada."],
            ["Sobrante", "la madera que queda después de cortar todas tus piezas."]
          ],
          slides: [
            { title: "Qué lleva una lista de cortes", bullets: ["Nombre de la pieza y cuántas", "Material", "Largo y ancho exactos"] },
            { title: "Usa medidas reales", bullets: ["Estante de 24 pulg. con lados de 3/4 pulg.", "24 - 3/4 - 3/4 = tabla de estante de 22-1/2 pulg."] },
            { title: "Cuenta el corte de la sierra", bullets: ["Cada corte quita unos 1/8 pulg.", "Suma un corte de sierra por cada corte"] },
            { title: "Acomoda las piezas en las tablas", bullets: ["Tabla de 96 pulg.: 30 + 30 + 22-1/2 + 3/8", "= 82-7/8 pulg., sobran unas 13 pulg.", "Recorta el extremo de fábrica; compra un poco de más"] }
          ],
          tryIt: "Dibuja un estante pequeño o una jardinera con sus medidas totales. Escribe una lista de cortes (pieza, cuántas, material, largo, ancho) con medidas reales de las tablas. Luego acomoda las piezas en tablas de 8 pies con 1/8 de pulgada por corte y escribe cuántas tablas comprar. Guárdala para tu paquete inicial.",
          youCanNow: "escribir una lista de cortes a partir de un dibujo pequeño y calcular cuántas tablas comprar.",
          quickCheck: [
            { objective: "O5", q: "Una caja mide 18 pulgadas de ancho total con lados de 3/4 de pulgada. ¿Qué largo tiene la tabla del fondo que va entre los lados?", options: ["18 pulgadas", "17-1/4 pulgadas", "16-1/2 pulgadas", "18-3/4 pulgadas"], answer: 2, why: "Resta el grosor de los dos lados: 18 - 3/4 - 3/4 = 16-1/2 pulgadas." },
            { objective: "O5", q: "¿Por qué sumas unos 1/8 de pulgada por cada corte?", options: ["La cinta métrica está mal", "La madera crece después de cortarla", "Las tablas siempre son más largas de lo que se venden", "La hoja de la sierra convierte esa madera en aserrín"], answer: 3, why: "El corte de la sierra es la madera que quita la hoja, así que las piezas necesitan ese espacio en la tabla." }
          ]
        },
        {
          title: "Tu camino: aprendizaje, NCCER y tu primer empleo",
          objectives: ["O6"],
          minutes: 5,
          goal: "Encontrar dos programas de aprendizaje o formación en carpintería y escribir un plan con fechas para solicitar entrada.",
          text: [
            "La Oficina de Estadísticas Laborales de EE. UU. (BLS) dice que los carpinteros suelen aprender en el trabajo o en un aprendizaje, a menudo patrocinado por sindicatos y asociaciones de contratistas. Cada año de aprendizaje combina clases técnicas con trabajo pagado. Normalmente se pide un diploma de secundaria o su equivalente. Consulta el salario y las perspectivas en la página de la BLS, no en anuncios.",
            "Busca programas en apprenticeship.gov: el Apprenticeship Finder (buscador de aprendizajes) muestra vacantes por profesión y lugar, y el Partner Finder (buscador de socios) muestra patrocinadores que aceptan nuevos aprendices. Pregunta también en los American Job Centers (centros de empleo públicos), los colegios comunitarios, los centros de formación sindicales, Helmets to Hardhats (para veteranos) y los programas de preaprendizaje para personas que salen de prisión.",
            "NCCER es una organización nacional de formación en construcción. Su plan de estudios de carpintería empieza con Carpintería General (con temas como materiales de construcción y fijaciones, planos de construcción, trazado de terreno y edificio, pisos, paredes, estructura de techos y escaleras). La certificación de NCCER exige aprobar una evaluación escrita y una verificación práctica de desempeño. Consulta nccer.org para saber dónde formarte y presentar las pruebas cerca de ti.",
            "Muchos empleadores también piden la tarjeta OSHA de 10 horas para construcción. Tener tu propio negocio de carpintería o de contratista puede requerir una licencia estatal o local; los empleados suelen trabajar bajo la licencia del contratista. Consulta la junta de licencias de contratistas de tu estado. ¿Tienes menos de 18 años? Las reglas federales limitan el trabajo con sierras eléctricas y en techos; consulta dol.gov/youthrules."
          ],
          steps: ["Lee la página de carpinteros de la BLS sobre formación y perspectivas.", "Busca carpintería cerca de ti en apprenticeship.gov; elige dos programas.", "Anota los requisitos y las fechas de solicitud de cada programa.", "Reúne los documentos: identificación, diploma o GED y cualquier otra cosa que pidan.", "Pon una fecha a cada paso y un recordatorio en tu teléfono."],
          words: [
            ["Aprendizaje", "un trabajo pagado con clases, donde aprendes un oficio de trabajadores con experiencia."],
            ["Preaprendizaje", "un programa corto que enseña cuentas, herramientas, seguridad y habilidades laborales para ayudarte a entrar en un aprendizaje."],
            ["NCCER", "el Centro Nacional de Educación e Investigación en Construcción, que crea formación en construcción y otorga credenciales."],
            ["Verificación de desempeño", "una prueba práctica en la que un evaluador te observa hacer tareas reales."]
          ],
          slides: [
            { title: "Cómo aprenden los carpinteros", bullets: ["En el trabajo o en un aprendizaje", "Clases más trabajo pagado cada año", "Normalmente se pide diploma o equivalente"] },
            { title: "Encuentra programas", bullets: ["apprenticeship.gov: Apprenticeship Finder y Partner Finder", "American Job Centers, colegios, centros sindicales", "Helmets to Hardhats; preaprendizajes de reinserción"] },
            { title: "Carpintería NCCER", bullets: ["Carpintería General: materiales, planos, trazado, estructura", "Evaluación escrita más verificación práctica", "Consulta nccer.org para formación y pruebas"] },
            { title: "Otros pasos", bullets: ["Tarjeta OSHA 10: muchos empleadores la piden", "Negocio propio: consulta la junta de licencias de tu estado", "Menos de 18 años: consulta dol.gov/youthrules"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU.: Carpinteros (Occupational Outlook Handbook, en inglés)", url: "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm" },
            { name: "Apprenticeship.gov: Apprenticeship Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "NCCER: Carpintería", url: "https://www.nccer.org/craft-catalog/carpentry/" },
            { name: "NCCER: Credenciales reconocidas por la industria", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "Departamento de Trabajo de EE. UU.: YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Usa apprenticeship.gov y los otros lugares de esta lección para encontrar dos programas de carpintería cerca de ti. Para cada uno, escribe el nombre, los requisitos, cómo solicitar y la fecha límite. Luego escribe tu plan con una fecha para cada paso: documentos, práctica de cuentas, OSHA 10, solicitud y seguimiento. Guárdalo para tu paquete inicial.",
          youCanNow: "encontrar programas de carpintería en sitios web oficiales y seguir un plan con fechas para solicitar entrada.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde consultas el salario y las perspectivas de empleo de los carpinteros?", options: ["En un anuncio de redes sociales", "En el Occupational Outlook Handbook de la BLS", "En la página de ventas de una escuela de formación", "En un comentario de un video"], answer: 1, why: "La BLS es la fuente oficial de EE. UU. sobre salarios y perspectivas, y se actualiza con regularidad." },
            { objective: "O6", q: "¿Qué necesitas aprobar para obtener una certificación de NCCER en un oficio?", options: ["Una evaluación escrita y una verificación práctica de desempeño", "Solo un video en línea", "Un pago y nada más", "Un examen estatal de manejo"], answer: 0, why: "NCCER dice que la certificación exige aprobar una evaluación escrita y una verificación de desempeño." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planos, trazado y tu camino de entrada",
        questions: [
          { objective: "O4", q: "En un plano dibujado a 1/4 de pulgada = 1 pie, una pared mide 3 pulgadas en el papel. ¿Cuánto mide la pared real?", options: ["3 pies", "6 pies", "12 pies", "16 pies"], answer: 2, why: "3 pulgadas tienen doce cuartos de pulgada, y cada uno es 1 pie, así que la pared mide 12 pies." },
          { objective: "O4", q: "¿Por qué marcas las soleras superior e inferior una al lado de la otra al mismo tiempo?", options: ["Para que los montantes queden derechos y alineados", "Para ahorrar lápiz", "Porque el plano lo dice en todos los trabajos", "Para necesitar menos montantes"], answer: 0, why: "Marcar las dos juntas pone la parte de arriba y de abajo de cada montante en el mismo lugar, así los montantes quedan a plomo y con la misma separación." },
          { objective: "O5", q: "¿Qué va en una lista de cortes?", options: ["El teléfono de la tienda", "Tu pago por hora", "El nombre de cada pieza, cuántas, el material y la medida", "El color de la cinta métrica"], answer: 2, why: "Una lista de cortes tiene cada pieza con su cantidad, material y medida exacta." },
          { objective: "O5", q: "Necesitas cuatro piezas de 23-3/4 pulgadas de una tabla de 96 pulgadas, con 1/8 de pulgada por corte. ¿Caben?", options: ["No, necesitan 100 pulgadas", "No, no queda espacio para ningún corte de sierra", "Solo caben tres", "Sí: 95 + 1/2 = 95-1/2 pulgadas, y sobra 1/2 pulgada"], answer: 3, why: "4 x 23-3/4 = 95 pulgadas, más 4 cortes de 1/8 = 1/2 pulgada, son 95-1/2 pulgadas, así que caben y sobra 1/2 pulgada." },
          { objective: "O6", q: "Un sitio web promete una licencia de carpintería garantizada si pagas hoy. ¿Qué haces?", options: ["Pagar antes de que suba el precio", "Dar tus datos bancarios para reservar un lugar", "Inscribirte porque parece oficial", "Consultar primero la junta de licencias de tu estado y apprenticeship.gov"], answer: 3, why: "Las licencias las da tu estado o tu ciudad, no un sitio web de pago; consulta primero las fuentes oficiales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Carpintería básica",
    questions: [
      { objective: "O1", q: "La cinta marca 9 pulgadas enteras y 6 dieciseisavos más. ¿Cuál es la longitud?", options: ["9-1/4 pulgadas", "9-3/8 pulgadas", "9-6 pulgadas", "9-1/2 pulgadas"], answer: 1, why: "6/16 se simplifica a 3/8, así que la longitud es 9-3/8 pulgadas." },
      { objective: "O1", q: "¿Por qué el gancho del extremo de la cinta métrica se desliza un poco?", options: ["Está roto y hay que enderezarlo", "Para que la cinta pese menos", "Para poder limarlo", "Para que al enganchar una tabla y al empujar contra una pared las dos lecturas sean correctas"], answer: 3, why: "El gancho se mueve lo mismo que su propio grosor, así las medidas por dentro y por fuera son correctas." },
      { objective: "O1", q: "¿Cuánto es 2-5/8 + 1-3/4?", options: ["4-3/8", "3-8/12", "4-1/8", "3-7/8"], answer: 0, why: "3/4 es 6/8; 5/8 + 6/8 = 11/8 = 1-3/8, y 2 + 1 + 1-3/8 = 4-3/8." },
      { objective: "O2", q: "¿Cuál es aproximadamente la medida real de un 2x6?", options: ["2 por 6 pulgadas", "1-3/4 por 6 pulgadas", "1-1/2 por 5-1/2 pulgadas", "1 por 5 pulgadas"], answer: 2, why: "Un 2x6 mide unas 1-1/2 por 5-1/2 pulgadas; las medidas nominales son mayores que las reales." },
      { objective: "O2", q: "Construyes una terraza al aire libre. ¿Qué fijaciones eliges?", options: ["Fijaciones con recubrimiento o inoxidables hechas para exteriores", "Clavos comunes para interiores", "Cualquier tornillo del cajón de cosas viejas", "Solo pegamento para madera"], answer: 0, why: "Las fijaciones para exteriores tienen recubrimiento o son inoxidables para que no se oxiden ni fallen." },
      { objective: "O2", q: "Miras a lo largo de una viga de piso y ves una ligera curva. ¿Hacia dónde va?", options: ["Curva hacia abajo, hacia el suelo", "No importa", "Primero cortas la curva", "Corona hacia arriba, para que el peso la deje plana"], answer: 3, why: "Las vigas y los cabios van con la corona hacia arriba, para que la carga deje la curva plana." },
      { objective: "O3", q: "¿Qué equipo usas siempre que usas una sierra circular?", options: ["Solo guantes", "Lentes de seguridad y protección auditiva", "Una camisa suelta de manga larga", "Nada si el corte es corto"], answer: 1, why: "Las sierras lanzan astillas y hacen mucho ruido, así que en cada corte se protegen los ojos y los oídos." },
      { objective: "O3", q: "La guarda de la hoja de la sierra se queda abierta y no vuelve. ¿Qué haces?", options: ["Sujetarla abierta con cinta y seguir trabajando", "Usarla con cuidado solo esta vez", "Parar, desenchufarla y reportarlo para que la arreglen", "Quitar la guarda"], answer: 2, why: "Una guarda que no se cierra deja la hoja descubierta; la sierra no es segura hasta que la arreglen." },
      { objective: "O3", q: "Una escalera extensible llega al borde de un techo. ¿Cuánto debe sobresalir por encima del borde?", options: ["Al menos 3 pies", "6 pulgadas", "Debe quedar justo debajo del borde", "Al menos 10 pies"], answer: 0, why: "La tarjeta de escaleras de OSHA dice que una escalera usada para subir a una superficie más alta sobresale al menos 3 pies por encima del apoyo." },
      { objective: "O3", q: "Una pistola de clavos se atasca. ¿Cuál es el primer paso seguro?", options: ["Mirar dentro de la punta y apretar el gatillo", "Golpearla contra el piso", "Apuntar a un compañero para probarla", "Desconectar el aire o sacar la batería"], answer: 3, why: "Cortar la energía hace que la herramienta no pueda disparar mientras tus manos están cerca." },
      { objective: "O4", q: "En una planta, una medida dice 10'-6\". ¿Qué significa?", options: ["10.6 pies", "10 pies 6 pulgadas", "106 pulgadas", "10 pulgadas 6 pies"], answer: 1, why: "El ' significa pies y el \" significa pulgadas: 10 pies 6 pulgadas." },
      { objective: "O4", q: "¿Cuántos montantes necesita una pared de 16 pies a 16 pulgadas entre centros, sin aberturas?", options: ["16", "12", "13", "11"], answer: 2, why: "16 pies son 192 pulgadas; 192 / 16 = 12 espacios, más 1 = 13 montantes." },
      { objective: "O4", q: "¿Qué marcas van en una solera trazada a 16 pulgadas entre centros desde un extremo?", options: ["16, 32, 48, 64, 80 pulgadas", "12, 24, 36, 48 pulgadas", "10, 20, 30, 40 pulgadas", "16, 30, 46, 60 pulgadas"], answer: 0, why: "16 pulgadas entre centros significa cada 16 pulgadas: 16, 32, 48, 64, 80." },
      { objective: "O5", q: "¿Qué es el corte de la sierra (kerf)?", options: ["Un tipo de clavo", "La curva a lo largo de una tabla", "El sobrante que queda", "La madera que quita la hoja de la sierra en un corte"], answer: 3, why: "El corte de la sierra es la franja de madera que la hoja convierte en aserrín, a menudo unos 1/8 de pulgada." },
      { objective: "O5", q: "Un librero mide 30 pulgadas de ancho total con lados de 3/4 de pulgada. ¿Qué largo tiene cada estante entre los lados?", options: ["30 pulgadas", "28-1/2 pulgadas", "29-1/4 pulgadas", "29-1/2 pulgadas"], answer: 1, why: "30 - 3/4 - 3/4 = 28-1/2 pulgadas." },
      { objective: "O5", q: "¿Por qué hacer una lista de cortes antes de ir a la tienda?", options: ["La tienda la exige", "Hace más fuerte la madera", "Compras las tablas correctas y desperdicias menos", "Reemplaza el plano"], answer: 2, why: "Una lista de cortes muestra cada pieza, así compras el número correcto de tablas y desperdicias menos madera y dinero." },
      { objective: "O5", q: "Tus piezas suman exactamente 96 pulgadas con los cortes de sierra, y tienes una tabla de 96 pulgadas. ¿Qué haces?", options: ["Comprar una tabla extra, porque hay que recortar el extremo y las tablas varían", "Cortar sin medir", "No contar el corte de la sierra", "Hacer cada pieza 1 pulgada más corta sin revisar el plano"], answer: 0, why: "Los extremos de fábrica muchas veces no están a escuadra y los largos varían, así que un plan sin margen necesita una tabla extra." },
      { objective: "O6", q: "¿Dónde puedes buscar vacantes de aprendizaje en carpintería por profesión y lugar?", options: ["En un anuncio emergente", "En un grupo cualquiera de redes sociales", "En un mensaje de texto de un desconocido", "En el Apprenticeship Finder de apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov es el sitio oficial del Departamento de Trabajo de EE. UU. para los aprendizajes." },
      { objective: "O6", q: "¿Qué es un aprendizaje?", options: ["Una clase gratis sin trabajo", "Un trabajo pagado con clases, donde aprendes de trabajadores con experiencia", "Una licencia que compras en línea", "Un video de seguridad de un día"], answer: 1, why: "Un aprendizaje combina trabajo pagado en el empleo con clases técnicas." },
      { objective: "O6", q: "Algún día quieres abrir tu propio negocio de carpintería. ¿Dónde consultas las reglas de licencias?", options: ["Lo que adivine un amigo", "Cualquier foro en línea", "La junta de licencias de contratistas de tu estado", "La maderería"], answer: 2, why: "Las licencias de contratista las fija tu estado o tu ciudad, así que la junta oficial tiene las reglas vigentes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Prueba inicial: ¿qué sabes ya?", from: [0, 2, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila dice Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Medición precisa", objective: "O1", notYet: "Menos de 4 de 5 medidas son correctas al 1/16 de pulgada, o las cuentas con fracciones no muestran el procedimiento.", meets: "Al menos 4 de 5 medidas son correctas al 1/16 de pulgada, y la suma y la resta son correctas con el procedimiento.", exceeds: "Las cinco medidas son correctas, cada fracción está simplificada y la persona puede explicar el gancho deslizante." },
      { name: "Lista de revisión de seguridad", objective: "O3", notYet: "Falta el equipo de protección, o hay menos de cuatro revisiones para la sierra o la escalera.", meets: "Nombra el equipo y al menos cuatro revisiones para la sierra circular y para la escalera extensible, incluidos desenchufar y la colocación de 1 por cada 4.", exceeds: "También incluye el rebote, los cables eléctricos y los tres puntos de contacto, y dice que la sierra se aprende con un instructor." },
      { name: "Trazado de la pared", objective: "O4", notYet: "Las marcas de los montantes se desvían más de 1/16 de pulgada, o el conteo de montantes está mal.", meets: "Soleras marcadas a 16 pulgadas entre centros desde un extremo, una X en cada montante y el conteo correcto (7 montantes para 8 pies).", exceeds: "También muestra el desfase de 3/4 de pulgada para los bordes de las hojas e indica montantes extra para esquinas o aberturas." },
      { name: "Lista de cortes", objective: "O5", notYet: "Usa medidas nominales, no incluye el corte de la sierra o las piezas no caben en las tablas indicadas.", meets: "Cada pieza con cantidad, material y medida real; corte de sierra incluido; todas las piezas caben en las tablas que hay que comprar.", exceeds: "También muestra el sobrante de cada tabla y un poco de más para recortar." },
      { name: "Materiales elegidos", objective: "O2", notYet: "La tabla o la fijación no sirve para el trabajo (por ejemplo, madera sin tratar en contacto con el suelo).", meets: "La madera y las fijaciones sirven para el proyecto, con las medidas reales escritas.", exceeds: "Explica por qué sirve cada elección, como fijaciones para exteriores o la dirección de la corona." },
      { name: "Plan con fechas de fuentes oficiales", objective: "O6", notYet: "Los pasos no tienen fechas, o los programas y las reglas salen de anuncios o publicaciones.", meets: "Dos programas reales con requisitos y fechas límite de sitios oficiales, y una fecha para cada paso.", exceeds: "También nombra un programa de respaldo y una persona u oficina a la que llamar con preguntas." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que solicitan entrada en un aprendizaje, preaprendizaje o programa de formación NCCER de carpintería en 30 días (encuesta de seguimiento)",
      "Participantes aceptados en un programa o contratados como ayudante o aprendiz de carpintero en 90 días",
      "Participantes que obtienen una tarjeta OSHA 10 de construcción o una credencial de NCCER después del curso",
      "Los programas aliados informan que menos aprendices nuevos reprueban las pruebas de entrada de cuentas o de seguridad"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una cinta métrica (de 16 o 25 pies), un lápiz, papel y una regla; una calculadora ayuda",
      "Un teléfono o una computadora de biblioteca para los sitios web oficiales (bls.gov, apprenticeship.gov, nccer.org, dol.gov)",
      "Opcional: una tira larga de cartón o una tabla sobrante para practicar el trazado de la pared",
      "Unos 60 a 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "En un salón de clases o un programa de empleo: hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas \"Pruébalo ahora\" hechas en vivo.",
      "Hagan en grupo ejercicios de cinta métrica y fracciones; muchos participantes necesitan práctica extra con los dieciseisavos.",
      "No permitas que los participantes usen sierras ni pistolas de clavos como parte de este curso. El uso práctico de herramientas lo enseña en persona un instructor calificado, con el equipo de protección adecuado.",
      "Con jóvenes menores de 18 años, sigue las reglas federales y estatales de trabajo infantil; la mayor parte del trabajo con sierras eléctricas y en techos está prohibida fuera de programas aprobados de aprendices o estudiantes en práctica.",
      "Califica la tarea final con la rúbrica e invita a un centro de formación sindical, un contratista o un programa de preaprendizaje de la zona a revisar los paquetes iniciales."
    ]
  }
};

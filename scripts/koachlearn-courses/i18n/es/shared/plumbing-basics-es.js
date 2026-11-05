"use strict";

// Koach Learn course (Spanish translation of shared/plumbing-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

const BLS = "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm";

module.exports = {
  id: "plumbing-basics-es",
  lang: "es",
  translationOf: "plumbing-basics",
  category: "Workforce Development",
  name: "Fundamentos de plomería",
  skills: "Seguir los sistemas de suministro de agua y de desagüe, Explicar sifones y ventilaciones, Medir tubería y calcular la pendiente del desagüe, Detectar los peligros del trabajo de plomería, Ordenar reparaciones sencillas de forma segura, Planear tu camino hacia un aprendizaje de plomería",
  outcome: "explicar cómo entra el agua a un edificio y cómo salen las aguas residuales, medir tubería y calcular la pendiente de un desagüe, nombrar los peligros del trabajo de plomería y cómo protegerte, poner una reparación sencilla en orden seguro y seguir un plan con fechas hacia un aprendizaje y una licencia de plomería.",
  about: [
    "Los plomeros llevan agua limpia a casas, escuelas, hospitales y fábricas, y sacan las aguas residuales de forma segura. Todos los edificios los necesitan, y la mayoría de los plomeros aprenden el oficio en un aprendizaje pagado (apprenticeship) en vez de ir a la universidad. Este curso es para cualquiera que piense en ese camino: jóvenes, veteranos, personas que salen de prisión, personas que buscan trabajo y adultos que vuelven a estudiar.",
    "Aprenderás los dos sistemas de todo edificio (el suministro de agua, y el desagüe, residuos y ventilación), por qué los sifones y las ventilaciones impiden que entre el gas de alcantarilla, los materiales y conexiones de tubería más comunes, y las matemáticas que los plomeros usan cada día: largos de corte y pendiente del desagüe. Después aprenderás los peligros del trabajo, el orden seguro para reparaciones sencillas y cómo funcionan los aprendizajes y las licencias.",
    "Este curso te prepara. No te da una licencia ni un certificado. La mayoría de los estados y algunas ciudades de EE. UU. dan licencias a los plomeros, y ellos fijan las reglas de experiencia y de examen. Las habilidades prácticas, como cortar y unir tubería, soldar con soplete, trabajar con líneas de gas y trabajar en zanjas, se aprenden en persona con un instructor calificado, nunca solo con un video.",
    "Cada lección dura unos cinco minutos, con una tarea corta de \"Inténtalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tu producto final es tu propio plan inicial de plomería con fechas reales."
  ],
  finalTask: "Haz tu plan inicial de plomería: (1) un dibujo a mano de un baño o una cocina que muestre las líneas de suministro caliente y fría, las válvulas de cierre, el sifón, el desagüe y la ventilación, con flechas que indiquen hacia dónde va el agua; (2) una hoja de cálculos con dos largos de corte de tubería y una pendiente de desagüe, mostrando el procedimiento; (3) una lista de peligros de un trabajo de plomería con la protección para cada peligro; y (4) un plan con fechas que nombre dos aprendizajes o programas de formación cerca de ti, lo que tu estado o ciudad exige para una licencia de plomería (según la página oficial, con su dirección web) y una fecha para cada paso.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes y adultos que buscan un oficio calificado que no exija un título universitario de cuatro años: personas que buscan trabajo, veteranos, personas que salen de prisión, inmigrantes y adultos que vuelven a estudiar. Algunos han hecho trabajo manual (mantenimiento, construcción, el ejército); muchos nunca han trabajado con tuberías.",
    startingPoint: "Pueden leer instrucciones cortas, usar una cinta métrica o una regla y hacer cuentas con números enteros. La mayoría sabe dónde están el lavabo y el inodoro, pero no puede explicar de dónde viene el agua, por qué un desagüe tiene sifón, cómo se mide la tubería ni cómo alguien llega a ser plomero con licencia.",
    gap: "Los contratistas y los programas de aprendizaje buscan ayudantes que conozcan las partes y palabras básicas, sepan medir y hacer cuentas sencillas, y tomen en serio la seguridad. Los participantes necesitan esa base, más un plan honesto con fechas, para presentarse con confianza y no pagar por una formación que no lleva a un empleo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (de 6.º a 8.º grado aproximadamente); se explica cada palabra del oficio",
      "En este curso no se trabaja con soplete, líneas de gas, zanjas ni alcantarillas: eso se aprende en persona con un instructor calificado y el equipo de protección adecuado",
      "Dispositivos: un teléfono o una computadora de biblioteca para leer páginas oficiales; papel, lápiz y una cinta métrica o regla para practicar",
      "Tiempo: lecciones de 5 a 6 minutos que caben entre el trabajo, la escuela y las citas",
      "Las licencias cambian según el estado y la ciudad: cada participante revisa las reglas en la página oficial del lugar donde vive"
    ],
    prerequisites: "Ninguno. \"Empezar una carrera en los oficios calificados\" es un buen primer paso para elegir un oficio; este curso profundiza en la plomería."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "A partir de un dibujo o una foto de una cocina o un baño", action: "seguir el suministro de agua y el sistema de desagüe, residuos y ventilación, y nombrar cada parte", standard: "con las válvulas de cierre, el sifón, el desagüe y la ventilación marcados y las flechas del flujo en la dirección correcta" },
    { id: "O2", condition: "A partir de la descripción de un trabajo de plomería", action: "enumerar los peligros del trabajo y la protección para cada uno", standard: "nombrando al menos cinco peligros, cada uno con un paso seguro o un equipo de protección" },
    { id: "O3", condition: "A partir de medidas de tubería y un tramo de desagüe", action: "calcular los largos de corte de la tubería y la caída que necesita un desagüe", standard: "con al menos 4 de 5 ejercicios correctos y el procedimiento a la vista" },
    { id: "O4", condition: "Ante un problema sencillo de plomería en casa", action: "ordenar los pasos de la reparación de forma segura", standard: "empezando por cerrar el agua y terminando con una revisión de fugas, sin ningún paso peligroso" },
    { id: "O5", condition: "Usando sitios web oficiales de tu estado", action: "escribir un plan con fechas para entrar a un aprendizaje de plomería y avanzar hacia una licencia", standard: "con al menos cinco pasos con fecha y una fuente oficial para cada requisito" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona la plomería",
      lessons: [
        {
          title: "Los dos sistemas: entra el agua, salen los residuos",
          objectives: ["O1"],
          minutes: 5,
          goal: "Seguir cómo entra el agua limpia a un edificio y cómo sale el agua usada.",
          text: [
            "Todo edificio tiene dos sistemas de plomería separados. El sistema de suministro de agua trae agua limpia con presión. El sistema de desagüe, residuos y ventilación (DWV, por sus siglas en inglés) saca el agua usada y los residuos usando la gravedad. Los dos nunca se mezclan: así el agua potable sigue siendo segura.",
            "Suministro: el agua viene de la tubería principal de la ciudad o de un pozo, pasa por el medidor de agua (si es agua de la ciudad) y por la válvula de cierre principal, y entra al edificio. Un ramal va al calentador de agua, así que desde ahí hay una línea fría y una línea caliente que llegan a cada aparato. La mayoría de los aparatos también tienen sus propias válvulas de cierre pequeñas debajo del lavabo o detrás del inodoro.",
            "Desagüe, residuos y ventilación: cuando el agua sale de un lavabo, baja por un sifón y entra a un tubo de desagüe. Los desagües se unen a tubos más grandes y llegan al drenaje del edificio, y luego al alcantarillado de la ciudad o a una fosa séptica. Los tubos de ventilación suben y salen por el techo para dejar entrar aire a los desagües.",
            "Los plomeros también instalan y reparan aparatos sanitarios (lavabos, inodoros, tinas, regaderas) y equipos que usan agua, como calentadores y lavavajillas. Los tuberos y los instaladores de vapor (pipefitters y steamfitters) hacen un trabajo parecido en sistemas más grandes de fábricas y edificios grandes."
          ],
          steps: [
            "Empieza en el medidor de agua o en el pozo y busca la válvula de cierre principal.",
            "Sigue la línea fría hasta el calentador de agua; desde ahí, una línea caliente y una fría van a los aparatos.",
            "En cada aparato, busca las válvulas de cierre pequeñas.",
            "Sigue el agua usada hacia abajo por el sifón, al desagüe y hasta el alcantarillado o la fosa séptica."
          ],
          words: [
            ["Sistema de suministro de agua", "los tubos que traen agua limpia a un edificio con presión."],
            ["DWV (desagüe, residuos y ventilación)", "los tubos que sacan el agua usada y los residuos por gravedad, más las ventilaciones que dejan entrar aire."],
            ["Válvula de cierre principal", "la válvula que corta el agua de todo el edificio."],
            ["Aparato sanitario", "todo lo que usa o contiene agua y la desagua: un lavabo, un inodoro, una tina o una regadera."],
            ["Tubería principal de agua", "el tubo público grande bajo la calle que trae el agua de la ciudad."],
            ["Fosa séptica", "un tanque bajo tierra que trata los residuos de la casa donde no hay alcantarillado de la ciudad."]
          ],
          slides: [
            { title: "Dos sistemas que nunca se mezclan", bullets: ["Suministro: entra agua limpia, con presión", "DWV: sale el agua usada, por gravedad"] },
            { title: "Siguiendo el suministro", bullets: ["Medidor o pozo, luego la válvula de cierre principal", "El calentador crea la línea caliente", "Válvulas de cierre pequeñas en cada aparato"] },
            { title: "Siguiendo el desagüe", bullets: ["Aparato, luego sifón, luego tubo de desagüe", "Drenaje del edificio al alcantarillado o a la fosa séptica", "Las ventilaciones suben por el techo"] },
            { title: "En qué trabajan los plomeros", bullets: ["Tubos, aparatos sanitarios y calentadores", "Tuberos: sistemas más grandes en edificios grandes"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Plomeros, tuberos e instaladores de vapor", url: BLS }
          ],
          tryIt: "Ve a la cocina o al baño de donde vives. Sin desarmar nada, mira debajo del lavabo. En papel, dibuja lo que ves: las dos líneas de suministro (caliente y fría), las válvulas de cierre pequeñas, el sifón curvo y el desagüe que entra a la pared. Agrega flechas que indiquen hacia dónde va el agua. Luego averigua dónde está la válvula de cierre principal del edificio (pregunta al propietario o al administrador si no estás seguro). Guarda el dibujo: es el inicio de la parte 1 de tu tarea final.",
          youCanNow: "seguir cómo entra el agua limpia a un edificio y cómo sale el agua usada.",
          quickCheck: [
            { objective: "O1", q: "¿Qué mueve el agua por el sistema de desagüe?", options: ["La presión del agua de la ciudad", "La gravedad", "El calentador de agua", "Las válvulas de cierre"], answer: 1, why: "Los desagües sacan el agua usada por gravedad, por eso los tubos de desagüe deben ir en bajada." },
            { objective: "O1", q: "Un tubo se revienta y el agua sale por todas partes. ¿Qué válvula corta el agua de todo el edificio?", options: ["La válvula pequeña debajo de un lavabo", "La válvula de vaciado del calentador", "El capuchón de ventilación del techo", "La válvula de cierre principal"], answer: 3, why: "La válvula de cierre principal corta el suministro de agua de todo el edificio." }
          ]
        },
        {
          title: "Sifones, ventilaciones y pendiente: que no entre el gas de alcantarilla",
          objectives: ["O1", "O3"],
          minutes: 5,
          goal: "Explicar qué hacen un sifón y una ventilación, y calcular la caída que necesita un tubo de desagüe.",
          text: [
            "Mira debajo de un lavabo y verás un tubo curvo, muchas veces con forma de P. Es el sifón. Siempre guarda un poco de agua. Ese sello de agua impide que el gas de alcantarilla, que huele mal y puede enfermar a la gente, suba por el desagüe hasta la habitación. Los inodoros tienen un sifón incorporado.",
            "Las ventilaciones son tubos que se conectan a los desagües y suben por el techo. Dejan entrar aire al sistema de desagüe para que el agua corra bien y no chupe el agua de los sifones. Si un lavabo hace gorgoteos, o un sifón se seca y la habitación huele a alcantarilla, la causa puede ser una ventilación que falta o está tapada.",
            "Los tubos de desagüe deben ir en bajada para que corran los residuos. Si están muy planos, los residuos se quedan y tapan el tubo. Los códigos de plomería fijan la pendiente. Para tubos de desagüe pequeños, los códigos suelen pedir unos 1/4 de pulgada de caída por cada pie de tubo; tu código local fija el número exacto. Para hallar la caída total, multiplica la pendiente por el largo: un desagüe de 12 pies a 1/4 de pulgada por pie necesita 3 pulgadas de caída.",
            "Un código de plomería es el conjunto de reglas para una plomería segura. Muchos lugares usan el International Plumbing Code (IPC) o el Uniform Plumbing Code (UPC), a menudo con cambios locales. El departamento de construcción local te dice qué código se aplica y revisa el trabajo con una inspección."
          ],
          steps: [
            "Busca la pendiente que da tu código o tu instructor (práctica: 1/4 de pulgada por pie).",
            "Mide el largo del tramo de desagüe en pies.",
            "Multiplica: largo x pendiente = caída total en pulgadas.",
            "Revisa: el extremo final debe quedar más bajo que el inicio en esa cantidad."
          ],
          words: [
            ["Sifón", "el tubo curvo debajo de un aparato que guarda agua para bloquear el gas de alcantarilla."],
            ["Gas de alcantarilla", "el gas dañino y de mal olor que se forma en alcantarillas y desagües."],
            ["Ventilación", "un tubo que deja entrar aire a los desagües y sale por el techo, para que los sifones conserven su agua."],
            ["Pendiente (o inclinación)", "cuánto baja un tubo de desagüe por cada pie de largo, para que los residuos corran hacia abajo."],
            ["Código de plomería", "las reglas para una plomería segura que adopta un estado o una ciudad y que revisan los inspectores."],
            ["Inspección", "una visita del departamento de construcción para comprobar que el trabajo cumple el código."]
          ],
          slides: [
            { title: "El sifón: un sello de agua", bullets: ["Tubo curvo que siempre guarda agua", "Impide que el gas de alcantarilla entre a la habitación", "Los inodoros tienen uno incorporado"] },
            { title: "Las ventilaciones dejan respirar a los desagües", bullets: ["Suben por el techo", "Mantienen el agua en los sifones", "Gorgoteo u olor a alcantarilla: revisa la ventilación"] },
            { title: "Los desagües van en bajada", bullets: ["Muy planos: los residuos se quedan y tapan", "Caída total = largo x pendiente", "Práctica: 12 pies x 1/4 pulg = 3 pulg"] },
            { title: "El código y el inspector", bullets: ["Muchos lugares usan el IPC o el UPC, con cambios locales", "El departamento de construcción inspecciona el trabajo"] }
          ],
          tryIt: "Solo práctica: en papel, calcula la caída total de tres desagües a 1/4 de pulgada por pie: 8 pies, 10 pies y 16 pies. Muestra el procedimiento (por ejemplo, 8 x 1/4 = 2 pulgadas). Luego mira otra vez debajo de un lavabo y señala el sifón. Escribe una oración sobre por qué siempre debe guardar agua. Respuestas: 2 pulgadas, 2 1/2 pulgadas, 4 pulgadas.",
          youCanNow: "explicar qué hacen un sifón y una ventilación y calcular la caída que necesita un tubo de desagüe.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué un sifón siempre guarda un poco de agua?", options: ["Para impedir que el gas de alcantarilla entre a la habitación", "Para mantener fresco el tubo", "Para calentar más el agua", "Para medir cuánta agua se usó"], answer: 0, why: "El agua del sifón es un sello que mantiene fuera el gas de alcantarilla." },
            { objective: "O3", q: "Solo práctica: un desagüe mide 20 pies y debe bajar 1/4 de pulgada por pie. ¿Cuánta caída total necesita?", options: ["4 pulgadas", "20 pulgadas", "5 pulgadas", "1/4 de pulgada"], answer: 2, why: "20 x 1/4 = 5, así que el desagüe necesita 5 pulgadas de caída." }
          ]
        },
        {
          title: "Tubería, conexiones y cómo medir un corte",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nombrar los materiales de tubería más comunes y calcular el largo de corte a partir de una medida de centro a centro.",
          text: [
            "Los plomeros usan varios materiales de tubería. El cobre se usa para las líneas de suministro de agua; se une soldando con soplete, o con conexiones a presión o de empuje. El PEX es un tubo de plástico flexible para líneas de suministro, que se une con conexiones de anillo engargolado o de expansión. El PVC y el ABS son tubos de plástico rígido que se usan sobre todo para desagües y ventilaciones. Las casas antiguas pueden tener acero galvanizado o hierro fundido. Según la ley federal de EE. UU., los tubos y conexiones para agua potable deben ser libres de plomo.",
            "Las conexiones cambian la dirección o unen tubos: un codo da vuelta a una esquina, una te hace un ramal, un cople une dos piezas rectas y un adaptador une dos materiales diferentes. Los tamaños de tubería son nominales: un tubo de 1/2 pulgada es un tamaño comercial, no una medida exacta del interior ni del exterior.",
            "Los plomeros suelen medir de centro a centro: desde el centro de una conexión hasta el centro de la siguiente. Pero el tubo no llega al centro de la conexión. Cada conexión tiene un descuento de conexión (también llamado take-off): la distancia desde su centro hasta donde el tubo se detiene dentro de ella. Para hallar el largo de corte, resta el descuento de cada extremo.",
            "Ejemplo (solo práctica, números inventados): de centro a centro hay 24 pulgadas, y cada codo tiene un descuento de 1/2 pulgada. Largo de corte = 24 - 1/2 - 1/2 = 23 pulgadas. Los descuentos reales vienen de la tabla del fabricante o de tu instructor, y siempre se mide dos veces y se corta una."
          ],
          steps: [
            "Mide de centro a centro entre las dos conexiones.",
            "Busca el descuento de cada conexión (tabla del fabricante o instructor).",
            "Resta el descuento de cada extremo: largo de corte = centro a centro - descuento 1 - descuento 2.",
            "Mide dos veces, marca el tubo y luego corta."
          ],
          words: [
            ["Cobre", "tubo de metal que se usa para líneas de agua, muchas veces unido con soldadura."],
            ["PEX", "tubo de plástico flexible que se usa para líneas de agua caliente y fría."],
            ["PVC y ABS", "tubos de plástico rígido que se usan sobre todo para desagües y ventilaciones."],
            ["Conexión", "una pieza que une tubos o cambia su dirección: codo, te, cople, adaptador."],
            ["Tamaño nominal", "el nombre comercial del tamaño de un tubo, no una medida exacta."],
            ["Centro a centro", "una medida desde el centro de una conexión hasta el centro de la siguiente."],
            ["Descuento de conexión (take-off)", "la distancia desde el centro de una conexión hasta donde el tubo se detiene dentro de ella."],
            ["Libre de plomo", "según la ley federal de EE. UU., tubos y conexiones con no más de un promedio ponderado de 0.25% de plomo en las superficies que tocan el agua, y soldadura y fundente con no más de 0.2% de plomo."]
          ],
          slides: [
            { title: "Materiales de tubería comunes", bullets: ["Cobre y PEX: suministro de agua", "PVC y ABS: desagües y ventilaciones", "Casas antiguas: acero galvanizado, hierro fundido"] },
            { title: "Conexiones", bullets: ["El codo da vuelta, la te hace un ramal", "El cople une, el adaptador cambia de material", "Las piezas para agua potable deben ser libres de plomo"] },
            { title: "Medir un corte", bullets: ["Mide de centro a centro", "Resta el descuento de cada extremo", "Ejemplo: 24 - 1/2 - 1/2 = 23 pulgadas"] },
            { title: "Mide dos veces, corta una", bullets: ["Los descuentos vienen de la tabla del fabricante", "Los tamaños son nominales (comerciales)"] }
          ],
          sources: [
            { name: "EPA (Agencia de Protección Ambiental de EE. UU.): Uso de tubos, conexiones, aparatos, soldadura y fundente libres de plomo para agua potable", url: "https://www.epa.gov/sdwa/use-lead-free-pipes-fittings-fixtures-solder-and-flux-drinking-water" }
          ],
          tryIt: "Solo práctica, con números inventados: calcula el largo de corte de dos tubos. Tubo A: de centro a centro 36 pulgadas, cada descuento 3/4 de pulgada. Tubo B: de centro a centro 18 1/2 pulgadas, descuentos de 1/2 pulgada y 1 pulgada. Muestra el procedimiento. Luego usa una cinta métrica para marcar el largo de corte del tubo A en una tira de papel o cartón. Respuestas: 34 1/2 pulgadas y 17 pulgadas. Guarda esta hoja para la parte 2 de tu tarea final.",
          youCanNow: "nombrar los materiales de tubería más comunes y calcular el largo de corte a partir de una medida de centro a centro.",
          quickCheck: [
            { objective: "O3", q: "Solo práctica: de centro a centro hay 30 pulgadas y cada descuento es de 1/2 pulgada. ¿Cuál es el largo de corte?", options: ["30 pulgadas", "31 pulgadas", "29 1/2 pulgadas", "29 pulgadas"], answer: 3, why: "30 - 1/2 - 1/2 = 29 pulgadas." },
            { objective: "O3", q: "¿Qué tubo se usa más para desagües y ventilaciones en casas nuevas?", options: ["Cobre", "PVC", "Manguera de jardín", "PEX"], answer: 1, why: "El tubo de plástico rígido como el PVC (o el ABS) se usa sobre todo para desagües y ventilaciones." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona la plomería",
        questions: [
          { objective: "O1", q: "¿Qué afirmación sobre los dos sistemas de plomería es verdadera?", options: ["El agua de suministro y la de desagüe se mezclan en el calentador", "El sistema de suministro funciona por gravedad", "El suministro trae agua limpia con presión; el desagüe saca los residuos por gravedad", "Las ventilaciones llevan agua limpia al techo"], answer: 2, why: "El suministro va con presión, los desagües funcionan por gravedad y los dos nunca se mezclan." },
          { objective: "O1", q: "Un baño huele a alcantarilla y el lavabo hace gorgoteos. ¿Cuál es una causa probable?", options: ["El calentador está demasiado caliente", "Una ventilación tapada o un sifón seco", "La válvula de cierre principal está abierta", "Los tubos de suministro son de cobre"], answer: 1, why: "Las ventilaciones mantienen el agua en los sifones; si una ventilación se tapa o un sifón se seca, puede entrar el gas de alcantarilla." },
          { objective: "O1", q: "¿Dónde empieza la línea de agua caliente?", options: ["En el calentador de agua", "En la ventilación del techo", "En el sifón", "En el alcantarillado"], answer: 0, why: "El agua fría entra al calentador, y la línea caliente sale de ahí hacia los aparatos." },
          { objective: "O3", q: "Solo práctica: un desagüe de 16 pies debe bajar 1/4 de pulgada por pie. ¿Cuál es la caída total?", options: ["2 pulgadas", "16 pulgadas", "8 pulgadas", "4 pulgadas"], answer: 3, why: "16 x 1/4 = 4 pulgadas." },
          { objective: "O3", q: "¿Por qué se resta el descuento de conexión a una medida de centro a centro?", options: ["Para ahorrar dinero en tubo", "Porque el tubo se detiene dentro de la conexión antes de su centro", "Porque los tubos se encogen con el frío", "Solo se necesita para el PEX"], answer: 1, why: "El tubo termina donde se asienta en la conexión, no en el centro de la conexión." }
        ]
      }
    },
    {
      name: "Capítulo 2: Seguridad, reparaciones sencillas y tu camino",
      lessons: [
        {
          title: "Los peligros de la plomería y cómo protegerte",
          objectives: ["O2"],
          minutes: 6,
          goal: "Enumerar los peligros de un trabajo de plomería y la protección para cada uno.",
          text: [
            "La Oficina de Estadísticas Laborales de EE. UU. (BLS) menciona lesiones comunes de los plomeros: cortes con herramientas filosas, quemaduras con tubos calientes y equipo de soldar, y caídas de escaleras. Los plomeros también cargan materiales pesados, trabajan en espacios estrechos y muchas veces trabajan al aire libre con cualquier clima.",
            "Las aguas negras llevan gérmenes. Usa guantes y protección para los ojos cuando abras un desagüe, lávate las manos antes de comer o de tocarte la cara, y mantén cubiertas las heridas. El agua caliente y el vapor queman, así que deja que se enfríe la línea de un calentador y ábrela solo como te enseñe tu instructor. El trabajo con soplete (soldar) puede provocar incendios dentro de las paredes: los plomeros capacitados usan un protector térmico, tienen un extintor cerca y vigilan el área después de terminar.",
            "Gas: si hueles a gas, no enciendas nada ni muevas interruptores. Sal del edificio y llama a la compañía de gas o al 911 desde afuera. El trabajo en líneas de gas exige capacitación y, en algunos estados, una licencia especial. La electricidad y el agua son una mezcla mortal: nunca te pares en agua cerca de cables, y mantén los cables y herramientas lejos de las zonas mojadas.",
            "Zanjas y espacios confinados: OSHA (la agencia de seguridad laboral de EE. UU.) dice que los derrumbes de zanjas son el mayor riesgo para la vida de los trabajadores en las excavaciones. Nunca entres a una zanja si no ha sido inspeccionada y protegida con taludes, apuntalamiento o una caja de zanja, con una forma segura de entrar y salir. Los espacios bajo el piso y las zonas estrechas exigen un compañero y buen aire."
          ],
          steps: [
            "Lee el trabajo: ¿qué vas a abrir, cortar, calentar o cargar?",
            "Escribe cada peligro: gérmenes, quemaduras, incendio, cortes, caídas, gas, electricidad, zanja, cargas pesadas.",
            "Une cada peligro con su protección: guantes, lentes, protector térmico, extintor, revisión de la escalera, salir y llamar, zona seca, zanja inspeccionada, cargar con ayuda.",
            "Si algo no es seguro, detente y pregunta a tu supervisor."
          ],
          words: [
            ["Peligro", "todo lo que en el trabajo podría lastimarte."],
            ["EPP", "equipo de protección personal: guantes, lentes de seguridad, botas, protección auditiva."],
            ["Soldar (sweating)", "unir tubos y conexiones de cobre con soldadura derretida calentada con un soplete."],
            ["Protector térmico", "una almohadilla resistente al fuego que se pone detrás de una unión para proteger la pared del soplete."],
            ["Caja de zanja", "una caja fuerte de acero que se pone en una zanja para proteger a los trabajadores si se derrumban las paredes."],
            ["Espacio confinado", "una zona estrecha con pocas formas de entrar y salir, como el espacio bajo el piso o una bóveda."]
          ],
          slides: [
            { title: "Lesiones comunes en plomería", bullets: ["Cortes con herramientas filosas", "Quemaduras con tubos calientes y sopletes", "Caídas de escaleras"] },
            { title: "Gérmenes, calor y fuego", bullets: ["Aguas negras: guantes, lentes, lavarse las manos", "El agua caliente y el vapor queman", "Soplete: protector térmico y extintor"] },
            { title: "Gas y electricidad", bullets: ["Hueles a gas: sal y llama desde afuera", "Nunca te pares en agua cerca de cables"] },
            { title: "Zanjas y espacios estrechos", bullets: ["Nunca entres a una zanja sin protección", "Taludes, apuntalamiento o caja de zanja", "Espacio bajo el piso: un compañero y buen aire"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Plomeros, entorno de trabajo", url: BLS + "#tab-3" },
            { name: "OSHA: Zanjas y excavaciones", url: "https://www.osha.gov/trenching-excavation" }
          ],
          tryIt: "Elige un trabajo: \"destapar el desagüe de una cocina\", \"cambiar un calentador de agua\" o \"arreglar una fuga debajo de una casa, en el espacio bajo el piso\". En papel, haz dos columnas: Peligro y Protección. Escribe al menos cinco peligros de ese trabajo y la protección para cada uno. Guárdalo: es la parte 3 de tu tarea final.",
          youCanNow: "enumerar los peligros de un trabajo de plomería y la protección para cada uno.",
          quickCheck: [
            { objective: "O2", q: "Hueles a gas en un sótano donde estás trabajando. ¿Qué haces primero?", options: ["Encender un cerillo para encontrar la fuga", "Prender las luces para ver mejor", "Seguir trabajando y avisar después", "Salir del edificio y llamar a la compañía de gas o al 911 desde afuera"], answer: 3, why: "Una chispa o una llama puede encender el gas, así que primero sal y llama desde afuera." },
            { objective: "O2", q: "¿Qué protección importa más cuando abres un desagüe de aguas negras?", options: ["Guantes y protección para los ojos, y después lavarse las manos", "Un protector térmico", "Solo protección auditiva", "Una caja de zanja"], answer: 0, why: "Las aguas negras llevan gérmenes, así que proteges la piel y los ojos y te lavas las manos." }
          ]
        },
        {
          title: "Reparaciones sencillas en orden seguro",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ordenar de forma segura los pasos de una reparación sencilla de plomería, desde cerrar el agua hasta revisar las fugas.",
          text: [
            "Los ayudantes y los aprendices nuevos muchas veces empiezan con trabajos sencillos. Todos siguen el mismo patrón seguro: cerrar el agua, liberar la presión, proteger el área, hacer la reparación, abrir el agua despacio y revisar si hay fugas.",
            "Inodoro que no deja de correr: el agua sigue cayendo a la taza. Una causa común es un sapo gastado (el sello de hule en el fondo del tanque). Cierra la válvula del inodoro, jala la palanca para vaciar el tanque, cambia el sapo por uno que le quede a ese inodoro, abre el agua y mira cómo se llena el tanque. Si una gota de colorante de comida en el tanque aparece en la taza sin jalar la palanca, todavía hay fuga.",
            "Lavabo que desagua lento: primero prueba con un destapacaños. Si no funciona, pon una cubeta debajo del sifón, ponte guantes, afloja las tuercas a mano o con pinzas, quita el sifón y límpialo. Vuelve a ponerlo con las arandelas en la posición correcta, abre el agua y revisa si gotea.",
            "Conoce tu límite. Las líneas de gas, los quemadores de calentadores, las líneas principales de drenaje y todo lo que necesite permiso son trabajo de plomeros con licencia. En casa ajena, haz solo lo que te asigne tu supervisor. Aquí practicas estos pasos en papel; la parte práctica la aprendes con un instructor."
          ],
          steps: [
            "Cierra el agua en la válvula del aparato (o la principal si no hay).",
            "Libera la presión: abre la llave o jala la palanca para que salga el agua.",
            "Protege el área: cubeta, toallas, guantes y protección para los ojos.",
            "Haz la reparación (cambia la pieza o limpia el sifón).",
            "Abre el agua despacio.",
            "Revisa si hay fugas y prueba el aparato."
          ],
          words: [
            ["Sapo (flapper)", "el sello de hule en el fondo del tanque del inodoro que deja pasar el agua a la taza cuando jalas la palanca."],
            ["Tuerca de compresión (slip nut)", "la tuerca grande que mantiene armado el sifón de un lavabo; muchas veces se afloja a mano."],
            ["Destapacaños", "una copa de hule con mango que empuja y jala el agua para destapar un tubo."],
            ["Liberar la presión", "abrir una llave o jalar la palanca después de cerrar el agua, para que no salga a chorro al abrir la línea."],
            ["Permiso", "autorización oficial del departamento de construcción para hacer ciertos trabajos de plomería, seguida de una inspección."]
          ],
          slides: [
            { title: "El patrón seguro para toda reparación", bullets: ["Cerrar, liberar la presión, proteger el área", "Reparar, abrir despacio, revisar fugas"] },
            { title: "Inodoro que no deja de correr", bullets: ["Cierra y jala la palanca para vaciar el tanque", "Cambia el sapo gastado por uno que le quede", "Prueba de fugas con colorante de comida"] },
            { title: "Lavabo que desagua lento", bullets: ["Primero prueba con un destapacaños", "Cubeta y guantes, luego quita el sifón", "Vuelve a armarlo y revisa si gotea"] },
            { title: "Conoce tu límite", bullets: ["Gas, quemadores, drenaje principal y trabajos con permiso: plomeros con licencia", "Haz solo lo que te asigne tu supervisor"] }
          ],
          tryIt: "Escribe cada uno de estos pasos en un papelito, revuélvelos y luego ponlos en orden seguro para un inodoro que no deja de correr: \"Mirar cómo se llena el tanque\", \"Cerrar la válvula del inodoro\", \"Cambiar el sapo\", \"Jalar la palanca para vaciar el tanque\", \"Hacer la prueba del colorante\", \"Abrir el agua despacio\". Luego escribe con tus propias palabras el orden seguro para limpiar el sifón de un lavabo, empezando por la cubeta.",
          youCanNow: "ordenar de forma segura los pasos de una reparación sencilla de plomería, desde cerrar el agua hasta revisar las fugas.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es el primer paso antes de quitar la línea de suministro de un lavabo?", options: ["Aflojar la tuerca rápido", "Abrir la llave", "Cerrar la válvula de ese lavabo", "Llamar a la ciudad"], answer: 2, why: "Cerrar primero el agua evita que la línea salga a chorro cuando la abres." },
            { objective: "O4", q: "Terminaste de volver a poner el sifón de un lavabo. ¿Qué sigue?", options: ["Irte enseguida", "Abrir el agua y revisar si gotea", "Pintar el tubo", "Cerrar la válvula principal"], answer: 1, why: "Toda reparación termina con una prueba y una revisión de fugas." }
          ]
        },
        {
          title: "Tu camino: aprendizaje, licencia y un plan con fechas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir un plan con fechas para entrar a un aprendizaje de plomería y avanzar hacia una licencia, usando fuentes oficiales.",
          text: [
            "La BLS dice que la mayoría de los plomeros, tuberos e instaladores de vapor aprenden el oficio en un aprendizaje (apprenticeship) de 4 o 5 años, con unas 2,000 horas al año de formación pagada en el trabajo más clases. Los sindicatos, las asociaciones del oficio y las empresas patrocinan los aprendizajes. Algunas personas empiezan primero como ayudantes. Normalmente se pide un diploma de preparatoria o su equivalente.",
            "La BLS también dice que la mayoría de los estados y algunas localidades exigen que los plomeros tengan licencia, muchas veces después de 2 a 5 años de experiencia y un examen. Algunos estados exigen una licencia especial para trabajar con líneas de gas. Las reglas cambian, así que revisa la página oficial de licencias de tu estado o ciudad. El buscador de licencias (License Finder) de CareerOneStop puede ayudarte a encontrarla. Si tienes antecedentes penales, pregunta a la junta cómo revisa los antecedentes antes de pagar una formación.",
            "Para encontrar aprendizajes, usa el Apprenticeship Job Finder en apprenticeship.gov, llama al sindicato local de plomeros y tuberos, pregunta a contratistas de plomería si contratan ayudantes y pregunta en tu centro de empleo local (American Job Center). Los veteranos pueden preguntar si pueden usar los beneficios del GI Bill en un aprendizaje aprobado.",
            "Los salarios y el número de empleos cambian cada año. Lee los números actuales y su año en la página de la BLS en vez de creer en anuncios o videos. Antes de pagarle a una escuela, pregunta: ¿lleva a un aprendizaje o a un empleo, y cuenta para las horas de licencia en mi estado?"
          ],
          steps: [
            "Abre la página de licencias de plomería de tu estado (prueba el License Finder de CareerOneStop). Anota los niveles de licencia, las horas y el examen que menciona, con la dirección web.",
            "Busca en apprenticeship.gov aprendizajes de plomería cerca de ti. Anota dos, con cómo y cuándo presentarte.",
            "Anota un empleo de ayudante o un contratista al que podrías contactar mientras esperas.",
            "Haz una lista de lo que necesitas primero: diploma o GED, licencia de manejo, práctica de matemáticas básicas.",
            "Pon una fecha a cada paso y comparte el plan con alguien que te dé seguimiento."
          ],
          words: [
            ["Aprendizaje (apprenticeship)", "un empleo pagado donde aprendes el oficio con trabajadores con experiencia, más clases."],
            ["Oficial (journeyworker o journeyman)", "un plomero que terminó su formación y aprobó el nivel de licencia que le permite trabajar sin supervisión directa."],
            ["Ayudante", "un trabajador de nivel inicial que asiste a los plomeros y aprende en el trabajo."],
            ["Licencia", "permiso oficial de un estado o una ciudad para hacer trabajos de plomería."],
            ["American Job Center", "una oficina pública y gratuita de EE. UU. que ayuda a las personas a encontrar formación y empleo."]
          ],
          slides: [
            { title: "Cómo aprende la mayoría de los plomeros", bullets: ["Aprendizaje pagado de 4 o 5 años", "Unas 2,000 horas pagadas en el trabajo al año", "Más clases"] },
            { title: "Licencias", bullets: ["La mayoría de los estados y algunas ciudades dan licencia a los plomeros", "Muchas veces de 2 a 5 años de experiencia y un examen", "Revisa la página oficial de tu estado"] },
            { title: "Dónde buscar", bullets: ["Job Finder de apprenticeship.gov", "Sindicato local, contratistas, American Job Center"] },
            { title: "Tu plan", bullets: ["Reglas oficiales de licencia con la dirección web", "Dos aprendizajes, un empleo de ayudante", "Una fecha en cada paso"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Plomeros, cómo llegar a serlo", url: BLS + "#tab-4" },
            { name: "Apprenticeship.gov: Buscador de aprendizajes (Apprenticeship Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Buscador de licencias", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Sigue los pasos para escribir tu plan en papel o en un documento gratuito. Escribe al menos cinco pasos, cada uno con una fecha, y la dirección web de cada página oficial que usaste. Júntalo con tu dibujo, tu hoja de cálculos y tu lista de peligros: juntos son tu plan inicial de plomería.",
          youCanNow: "escribir un plan con fechas para entrar a un aprendizaje de plomería y avanzar hacia una licencia, usando fuentes oficiales.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde debes revisar lo que exige tu estado para una licencia de plomería?", options: ["En un comentario de un video", "En un anuncio de una escuela de formación", "En la opinión de un amigo", "En la página oficial de la junta de licencias del estado o la ciudad"], answer: 3, why: "Las reglas de licencia cambian según el lugar, y la que cuenta es la página oficial." },
            { objective: "O5", q: "¿Qué paso del plan está escrito de la forma más útil?", options: ["\"Presentarme a dos aprendizajes de plomería de apprenticeship.gov antes del 1 de marzo\"", "\"Investigar sobre plomería\"", "\"Sacar una licencia algún día\"", "\"Aprender mucho\""], answer: 0, why: "Un paso útil dice la acción exacta, dónde y una fecha." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Seguridad, reparaciones sencillas y tu camino",
        questions: [
          { objective: "O2", q: "Un plomero va a soldar un tubo de cobre cerca de una pared de madera. ¿Qué protege la pared?", options: ["Una caja de zanja", "Un protector térmico, con un extintor cerca", "Protección auditiva", "Un destapacaños"], answer: 1, why: "El protector térmico bloquea la llama, y el extintor está listo por si hay fuego." },
          { objective: "O2", q: "Tu equipo debe trabajar en una zanja profunda con paredes de tierra rectas y sin soporte. ¿Qué haces?", options: ["Entrar rápido y salir rápido", "Entrar si la tierra se ve seca", "No entrar hasta que esté inspeccionada y protegida con taludes, apuntalamiento o una caja de zanja", "Mandar primero al trabajador más nuevo"], answer: 2, why: "OSHA dice que nunca se entra a una zanja si no ha sido inspeccionada y protegida." },
          { objective: "O4", q: "Ordena estos pasos para un inodoro que no deja de correr: (a) cambiar el sapo, (b) cerrar la válvula, (c) revisar si hay fugas, (d) jalar la palanca para vaciar el tanque.", options: ["b, d, a, c", "a, b, c, d", "d, a, b, c", "c, b, a, d"], answer: 0, why: "Cerrar, vaciar el tanque, hacer la reparación y luego revisar si hay fugas." },
          { objective: "O4", q: "¿Qué trabajo debe dejar un ayudante nuevo a un plomero con licencia?", options: ["Destapar un lavabo lento con el destapacaños", "Cambiar el sapo de un inodoro", "Mover una línea de gas a una estufa nueva", "Poner una cubeta debajo de un sifón"], answer: 2, why: "El trabajo con líneas de gas exige capacitación y, en algunos estados, una licencia especial." },
          { objective: "O5", q: "Según la BLS, ¿cómo aprende el oficio la mayoría de los plomeros?", options: ["Con una clase en línea de dos semanas", "Con un título universitario de cuatro años", "Viendo videos en casa", "Con un aprendizaje pagado de 4 o 5 años"], answer: 3, why: "La BLS dice que la mayoría aprende en un aprendizaje de 4 o 5 años con formación pagada en el trabajo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de plomería",
    questions: [
      { objective: "O1", q: "¿Qué sistema saca de un edificio el agua usada y los residuos?", options: ["El sistema de suministro de agua", "El sistema de desagüe, residuos y ventilación", "El medidor de agua", "El calentador de agua"], answer: 1, why: "El sistema DWV saca los residuos por gravedad y deja entrar aire por las ventilaciones." },
      { objective: "O1", q: "¿Dónde suelen estar las válvulas de cierre pequeñas de un lavabo?", options: ["Debajo del lavabo", "En el techo", "Dentro del sifón", "En el alcantarillado"], answer: 0, why: "Las válvulas de los aparatos suelen estar debajo del lavabo o detrás del inodoro." },
      { objective: "O1", q: "¿Qué hace un tubo de ventilación?", options: ["Lleva agua caliente a la regadera", "Guarda agua para bloquear el gas de alcantarilla", "Mide el uso de agua", "Deja entrar aire a los desagües para que los sifones conserven su agua"], answer: 3, why: "Las ventilaciones dejan entrar aire para que el agua corra bien y no se vacíen los sifones por succión." },
      { objective: "O1", q: "¿Qué impide que el gas de alcantarilla suba por el desagüe de un lavabo?", options: ["La válvula de cierre", "El medidor de agua", "El sello de agua del sifón", "La llave"], answer: 2, why: "El agua que guarda el sifón es un sello contra el gas de alcantarilla." },
      { objective: "O3", q: "Solo práctica: un desagüe de 10 pies debe bajar 1/4 de pulgada por pie. ¿Cuál es la caída total?", options: ["2 1/2 pulgadas", "10 pulgadas", "1/4 de pulgada", "4 pulgadas"], answer: 0, why: "10 x 1/4 = 2 1/2 pulgadas." },
      { objective: "O3", q: "Solo práctica: de centro a centro hay 40 pulgadas y cada descuento es de 1 pulgada. ¿Cuál es el largo de corte?", options: ["40 pulgadas", "39 pulgadas", "42 pulgadas", "38 pulgadas"], answer: 3, why: "40 - 1 - 1 = 38 pulgadas." },
      { objective: "O3", q: "¿Qué tubo es de plástico flexible y se usa para líneas de suministro de agua?", options: ["Hierro fundido", "PEX", "ABS", "Acero galvanizado"], answer: 1, why: "El PEX es un tubo flexible para líneas de agua caliente y fría." },
      { objective: "O3", q: "¿Qué significa \"tamaño nominal\" en una tubería?", options: ["Su medida exacta por fuera", "Su peso", "Un tamaño comercial, no una medida exacta", "Su precio"], answer: 2, why: "Los tamaños de tubería son nombres comerciales; las medidas reales por dentro y por fuera son distintas." },
      { objective: "O2", q: "Según la BLS, ¿cuál es una lesión común en plomería?", options: ["Quemaduras con tubos calientes y equipo de soldar", "Quemaduras de sol por las pantallas", "Cansancio de la vista por leer", "Pérdida auditiva por la música"], answer: 0, why: "La BLS menciona cortes, quemaduras con tubos calientes y equipo de soldar, y caídas de escaleras." },
      { objective: "O2", q: "Estás arreglando una fuga en un sótano mojado cerca de un enchufe. ¿Cuál es la opción segura?", options: ["Pararte en el agua para llegar más rápido", "Alejarte de los cables mientras estás en el agua y preguntar a tu supervisor sobre cortar la electricidad", "Usar un taladro con cable dentro del agua", "Tocar el enchufe para ver si funciona"], answer: 1, why: "La electricidad y el agua son una mezcla mortal, así que te alejas y primero se resuelve la electricidad." },
      { objective: "O2", q: "¿Por qué lavarte las manos después de destapar un desagüe, aunque hayas usado guantes?", options: ["Para que brille el tubo", "Es solo una costumbre", "Los guantes no están permitidos", "Las aguas negras llevan gérmenes que pueden enfermarte"], answer: 3, why: "Los guantes ayudan, pero lavarte quita los gérmenes antes de comer o tocarte la cara." },
      { objective: "O4", q: "¿Cuál es el patrón seguro para una reparación sencilla?", options: ["Reparar primero y luego cerrar el agua", "Cerrar, liberar la presión, proteger el área, reparar, abrir despacio, revisar fugas", "Abrir el agua al máximo y luego reparar", "Revisar fugas antes de empezar y luego irse"], answer: 1, why: "Toda reparación sencilla empieza cerrando el agua y termina con una revisión de fugas." },
      { objective: "O4", q: "Después de cerrar el agua de un lavabo, ¿por qué abrir la llave antes de quitar una línea?", options: ["Para liberar la presión y que el agua no salga a chorro", "Para calentar el tubo", "Para probar la ventilación", "Para llenar el sifón"], answer: 0, why: "Abrir la llave saca la presión que queda en la línea." },
      { objective: "O4", q: "Un lavabo desagua lento. ¿Qué pruebas primero?", options: ["Cortar el tubo de desagüe", "Pedir un permiso", "Un destapacaños", "Cerrar la llave principal del gas"], answer: 2, why: "El destapacaños es el primer paso sencillo antes de desarmar el sifón." },
      { objective: "O4", q: "Una gota de colorante de comida en el tanque del inodoro aparece en la taza sin jalar la palanca. ¿Qué te dice eso?", options: ["La ventilación está tapada", "El calentador está descompuesto", "El sifón está seco", "El sapo todavía tiene fuga"], answer: 3, why: "Si el color llega a la taza sin jalar la palanca, el agua se está escapando por el sapo." },
      { objective: "O5", q: "Este curso:", options: ["Te da una licencia de plomería", "Cuenta como tu aprendizaje", "Te prepara para formarte y presentarte; no te da una licencia", "Reemplaza el examen de tu estado"], answer: 2, why: "Las licencias las da el estado o la ciudad después de la experiencia y el examen que exigen." },
      { objective: "O5", q: "¿Qué sitio gratuito puede ayudarte a encontrar aprendizajes de plomería cerca de ti?", options: ["Un anuncio emergente", "apprenticeship.gov", "Un foro de empleo cualquiera", "La sección de comentarios de un video"], answer: 1, why: "Apprenticeship.gov es el sitio del Departamento de Trabajo de EE. UU., con un buscador de aprendizajes (Apprenticeship Job Finder)." },
      { objective: "O5", q: "¿Qué dice la BLS sobre las licencias de plomería?", options: ["La mayoría de los estados y algunas localidades las exigen, muchas veces después de 2 a 5 años de experiencia y un examen", "Ningún estado las exige", "Solo las necesitan los plomeros de ciudades grandes", "Te dan una cuando compras herramientas"], answer: 0, why: "La BLS dice que la mayoría de los estados y algunas localidades dan licencia a los plomeros, muchas veces con experiencia y un examen." },
      { objective: "O5", q: "Una escuela promete un curso rápido de plomería. ¿Qué pregunta te ayuda más antes de pagar?", options: ["¿El edificio es nuevo?", "¿De qué color son las camisetas?", "¿Puedo empezar un lunes?", "¿Lleva a un aprendizaje o a un empleo, y sus horas cuentan para la licencia de mi estado?"], answer: 3, why: "Una buena formación lleva a un empleo y cuenta para las reglas de licencia del lugar donde vives." },
      { objective: "O5", q: "¿Qué paso del plan está completo?", options: ["\"Llamar al sindicato local de plomeros sobre el aprendizaje de plomería antes del 10 de abril, después de leer la página de licencias del estado\"", "\"Aprender plomería\"", "\"Presentarme en algún lado pronto\"", "\"Pensar en una licencia\""], answer: 0, why: "Dice la acción, a quién, cuándo y la fuente oficial que hay que revisar primero." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 5, 8, 10, 11, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Dibujo del suministro y del desagüe", objective: "O1", notYet: "Faltan partes, o las flechas apuntan en la dirección equivocada.", meets: "El suministro caliente y frío, las válvulas de cierre, el sifón, el desagüe y la ventilación están marcados, con las flechas en la dirección correcta.", exceeds: "También muestra dónde está la válvula de cierre principal y explica en una oración por qué importan el sifón y la ventilación." },
      { name: "Matemáticas de plomería", objective: "O3", notYet: "Los largos de corte o la pendiente tienen errores, o no se muestra el procedimiento.", meets: "Dos largos de corte y una pendiente de desagüe, al menos 4 de 5 ejercicios correctos, con el procedimiento a la vista.", exceeds: "Todo correcto, y el participante explica de dónde vienen los descuentos de conexión y las pendientes reales." },
      { name: "Lista de peligros", objective: "O2", notYet: "Menos de cinco peligros, o la protección no corresponde al peligro.", meets: "Al menos cinco peligros, cada uno con un paso seguro o el equipo correcto.", exceeds: "También incluye qué hacer si hueles a gas y cuándo detenerse y preguntar a un supervisor." },
      { name: "Orden seguro de la reparación", objective: "O4", notYet: "Una reparación empieza sin cerrar el agua o termina sin revisar las fugas.", meets: "Las dos reparaciones están en orden seguro, desde cerrar el agua hasta revisar las fugas.", exceeds: "También nombra qué trabajos son de un plomero con licencia y por qué." },
      { name: "Plan con fechas y fuentes oficiales", objective: "O5", notYet: "Los pasos no tienen fecha, o las reglas de licencia vienen de anuncios o publicaciones.", meets: "Al menos cinco pasos con fecha, dos aprendizajes o programas reales, y las reglas de licencia de la página oficial con su dirección web.", exceeds: "También incluye un empleo de ayudante para solicitar mientras espera y preguntas para hacer a cada programa." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se presentan a un aprendizaje o programa de formación en plomería en un plazo de 90 días",
      "Participantes aceptados en un aprendizaje o contratados como ayudantes de plomero en un plazo de 6 meses",
      "Participantes que siguen en su aprendizaje o empleo de ayudante al menos 6 meses (según lo que informan en el seguimiento)",
      "Los programas aliados informan que los candidatos llegan conociendo las partes, palabras, matemáticas y pasos de seguridad básicos"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para leer las páginas de la BLS, OSHA, la EPA, apprenticeship.gov y las licencias del estado",
      "Papel, lápiz, una cinta métrica o regla y una calculadora (sirve la del teléfono)",
      "Opcional: un lavabo o un inodoro para observar (nunca desarmes nada para este curso), o fotos del sifón de un lavabo y de conexiones de tubería",
      "Opcional, para programas: muestras de tubo y conexiones (PVC, PEX, cobre) para pasar de mano en mano, sin herramientas ni sopletes"
    ],
    facilitatorNotes: [
      "Este curso enseña conocimientos, pasos y seguridad. No hagas que los participantes suelden, corten tubo ni trabajen con agua, gas o desagües activos como parte del curso; las habilidades prácticas se aprenden en un taller supervisado con un instructor calificado.",
      "Busca antes de la sesión la página de licencias de plomería de tu estado y los aprendizajes cercanos, para que los participantes los revisen juntos.",
      "Practica en un pizarrón las cuentas de largo de corte y de pendiente con varios ejemplos inventados; muchos participantes necesitan ayuda con las fracciones.",
      "Invita a un plomero local, a un coordinador de formación del sindicato o a un patrocinador de aprendizajes a hablar de un día típico y de cómo presentarse.",
      "Pide a los participantes con antecedentes penales que pregunten a la junta de licencias cómo revisa los antecedentes antes de pagar una formación.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

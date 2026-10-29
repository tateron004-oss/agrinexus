"use strict";

// Koach Learn course (Agriculture (Africa)), Spanish translation of agriculture-africa/agri-drones-uas-technology.js. See scripts/koachlearn-courses/README.md, "Translations".

const KCAA_UAS = { name: "Autoridad de Aviación Civil de Kenia (KCAA): Sistemas de aeronaves no tripuladas", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Autoridad de Aviación Civil de Nigeria (NCAA): Nig.CARs 2023, Parte 21, sistemas de aeronaves pilotadas a distancia", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO y UIT: E-agriculture in Action: drones para la agricultura (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-es",
  lang: "es",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Drones agrícolas: tecnología UAS y mantenimiento",
  skills: "Nombrar las partes de un sistema de dron y lo que hace cada una, Cuidar con seguridad las baterías de polímero de litio, Elegir y manejar cargas útiles, Hacer inspecciones antes y después del vuelo, Llevar un calendario y registros de mantenimiento, Resolver fallas comunes",
  outcome: "explicar cómo funciona cada parte de un sistema de dron agrícola, cuidar con seguridad sus baterías y cargas útiles, y llevar un programa de mantenimiento con inspecciones, un calendario, pasos para resolver fallas y registros completos de un dron.",
  about: [
    "Este curso es para pilotos de drones, técnicos, negocios de servicios con drones, personal de agronegocios y plantaciones, y jóvenes que quieren mantener los drones agrícolas volando con seguridad en Kenia, Nigeria y toda África.",
    "El Capítulo 1 abre el sistema del dron: estructura, motores y hélices, controlador de vuelo y sensores, enlace de radio y estación en tierra, baterías y cargas útiles como cámaras y sistemas de fumigación. El Capítulo 2 es el mantenimiento: inspecciones diarias, mantenimiento programado, cómo arreglar fallas comunes, actualizaciones de firmware, registros, y cómo mantener los drones funcionando con polvo, calor, lluvia y en lugares donde la electricidad falla.",
    "Sigue siempre primero el manual del fabricante y tu manual de operaciones; este curso enseña las habilidades generales que están detrás de ellos. Las autoridades de aviación esperan que los operadores den mantenimiento a sus aeronaves y lleven registros, así que un buen mantenimiento es seguridad y también cumplimiento. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Escribe un programa de mantenimiento para un dron agrícola (real o de ejemplo, como un multirrotor de mapeo que usa una cooperativa): una lista de partes con lo que hace cada una, un procedimiento de cuidado y carga de baterías, una lista de inspección antes y después del vuelo, un calendario de mantenimiento por horas de vuelo y por fechas, una tabla para resolver al menos cinco fallas comunes y una plantilla de registro de mantenimiento con dos anotaciones de ejemplo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Pilotos de drones, técnicos, negocios de servicios con drones, personal de agronegocios y de fincas grandes, y jóvenes en Kenia, Nigeria y en toda África que quieren mantener los drones agrícolas volando con seguridad.",
    startingPoint: "La mayoría ha visto o volado un dron agrícola y sabe cargar una batería y despegar con la app. Pocos pueden nombrar cada parte del sistema y lo que hace, seguir una lista escrita de inspección, planear el mantenimiento por horas de vuelo o llevar un registro de mantenimiento.",
    gap: "Los drones son caros y se dañan fácilmente con el polvo, el calor y la lluvia, y las baterías de litio mal manejadas pueden incendiarse. Un dron que se estrella o se queda en tierra hace perder clientes y dinero, y las autoridades, los clientes y las aseguradoras esperan ver registros de mantenimiento. Conocer el sistema y llevar un programa de mantenimiento mantiene los drones seguros, trabajando y en regla.",
    constraints: [
      "Nivel de lectura: palabras sencillas; cada término técnico se explica",
      "Dispositivos: un teléfono o una computadora para el curso; un dron real ayuda, pero no es obligatorio",
      "Seguridad: las baterías de litio pueden incendiarse; no se hacen reparaciones dentro de las baterías ni de la electrónica",
      "Primero van el manual del fabricante y el manual de operaciones; el curso enseña las habilidades generales que hay detrás",
      "Condiciones del campo: polvo, calor, lluvia y electricidad poco confiable en muchas zonas"
    ],
    prerequisites: "Se recomienda tomar antes \"Drones para el monitoreo agrícola 1: introducción, normas y seguridad\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante un sistema de dron agrícola", action: "nombrar cada parte principal de la aeronave y de la estación en tierra y explicar lo que hace", standard: "incluyendo el controlador de vuelo, los sensores, el enlace C2 y la carga útil" },
    { id: "O2", condition: "Con un juego de baterías de dron", action: "describir cómo cargarlas, guardarlas, transportarlas y retirarlas con seguridad", standard: "siguiendo cada paso de seguridad y sin usar ninguna batería hinchada o dañada" },
    { id: "O3", condition: "Ante una cámara, un sensor o un sistema de fumigación", action: "describir cómo montarlo, limpiarlo y revisarlo", standard: "con la carga útil bien sujeta, los lentes limpios y las piezas de fumigación revisadas por desgaste" },
    { id: "O4", condition: "Antes y después de cada vuelo", action: "hacer una inspección antes y después del vuelo y anotar lo que encuentres", standard: "revisando cada punto de la lista" },
    { id: "O5", condition: "Para un dron", action: "escribir un calendario de mantenimiento por horas de vuelo y por fechas, una rutina para actualizar el firmware y un registro de mantenimiento", standard: "con intervalos de lo que ocurra primero y cada campo del registro lleno" },
    { id: "O6", condition: "Ante una falla o condiciones duras en el campo", action: "resolver la falla paso a paso y proteger el dron del polvo, el calor, la lluvia y los cortes de luz", standard: "dejando el dron en tierra cuando una falla de seguridad se repite" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona un sistema de dron agrícola",
      lessons: [
        {
          objectives: ["O1"],
          title: "Las partes de un sistema de dron",
          minutes: 6,
          goal: "Nombrar las partes principales de un sistema de dron y explicar lo que hace cada una.",
          text: [
            "Las autoridades llaman sistema (UAS o RPAS) a un dron porque la aeronave es solo una parte. El sistema incluye la aeronave, la estación en tierra (control remoto, teléfono o tableta, software), el enlace de radio entre ellos (a menudo llamado enlace de mando y control, o C2), las baterías y cargadores, y la carga útil (cámara, sensor o sistema de fumigación).",
            "En la aeronave: la estructura (cuerpo y brazos, o alas); los motores y las hélices que crean la sustentación; los controladores electrónicos de velocidad (ESC), que le dicen a cada motor qué tan rápido girar; el controlador de vuelo, el cerebro del dron; y los sensores: GNSS (posicionamiento por satélite, como el GPS), brújula, una unidad de medición inercial (IMU) que detecta inclinación y movimiento, un barómetro para la altura y, a menudo, sensores de obstáculos.",
            "El controlador de vuelo lee los sensores cientos de veces por segundo y ajusta cada motor para mantener el dron estable y en su ruta. Si un sensor da datos malos, como una brújula cerca de metal, todo el dron puede comportarse de forma extraña. Por eso importan la calibración y elegir con cuidado el lugar de despegue."
          ],
          words: [["Estructura", "el cuerpo, los brazos o las alas del dron."], ["ESC", "controlador electrónico de velocidad: controla qué tan rápido gira cada motor."], ["Controlador de vuelo", "la computadora a bordo del dron que lo mantiene estable y en su ruta."], ["GNSS", "sistemas mundiales de navegación por satélite, como el GPS, que dan la posición."], ["IMU", "unidad de medición inercial: detecta inclinación, giros y movimiento."], ["Enlace C2", "enlace de mando y control: la conexión de radio entre el control remoto y el dron."]],
          slides: [
            { title: "Un sistema, no solo una aeronave", bullets: ["Aeronave", "Estación en tierra: control, teléfono, software", "Enlace de radio C2", "Baterías y carga útil"] },
            { title: "En la aeronave", bullets: ["Estructura, motores, hélices", "Los ESC controlan cada motor", "Controlador de vuelo: el cerebro"] },
            { title: "Sensores", bullets: ["GNSS para la posición, brújula para la dirección", "IMU para inclinación y movimiento", "Barómetro para la altura, sensores de obstáculos"] },
            { title: "Por qué importa", bullets: ["Datos malos de un sensor = comportamiento extraño", "Calibra y elige con cuidado dónde despegar"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Toma un dron (o una foto clara o un diagrama de uno) y señala al menos ocho partes: estructura, motores, hélices, ubicación del controlador de vuelo, módulo GNSS, cámara o carga útil, batería y control remoto. Junto a cada una, escribe su función en una línea.",
          youCanNow: "nombrar las partes de un sistema de dron y decir lo que hace cada una.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es el controlador de vuelo?", options: ["El control remoto del piloto", "El cerebro del dron, que lee los sensores y ajusta los motores", "El cargador de baterías", "El soporte de la cámara"], answer: 1, why: "El controlador de vuelo lee los sensores muchas veces por segundo y ajusta cada motor para mantener estable el dron." },
            { objective: "O1", q: "Vas a despegar junto a un tanque de agua de metal y el dron se desvía de forma extraña. ¿Cuál es una causa probable?", options: ["Las hélices son demasiado nuevas", "La carga útil está demasiado limpia", "La batería está demasiado llena", "Datos malos de la brújula por el metal cercano"], answer: 3, why: "Una brújula cerca de metal da datos malos, y todo el dron puede comportarse de forma extraña." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Las baterías: la parte que más cuidado necesita",
          minutes: 6,
          goal: "Cargar, guardar, transportar y retirar las baterías del dron con seguridad.",
          text: [
            "La mayoría de los drones usan baterías de polímero de litio (LiPo) u otras baterías de litio parecidas. Guardan mucha energía para su peso, y por eso también pueden incendiarse si se dañan, se sobrecargan, se descargan de más o se calientan demasiado. El cuidado de las baterías es la tarea de mantenimiento más importante.",
            "Carga solo con el cargador correcto, sobre una superficie que no se queme, nunca sin vigilancia, y nunca una batería hinchada, perforada o caliente. Deja que la batería se enfríe después de volar antes de cargarla, y deja que se enfríe o se caliente hasta la temperatura normal antes de volar. No dejes baterías en un carro caliente ni al sol directo en el campo.",
            "Para guardarlas más de unos días, mantén las baterías con carga de almacenamiento (cargadas a medias, ni llenas ni vacías; muchas baterías inteligentes lo hacen solas), en un lugar fresco y seco, de preferencia en una bolsa o caja resistente al fuego. Lleva la cuenta de los ciclos de carga y del estado de cada batería. Retira las baterías hinchadas o dañadas y deséchalas en un punto de recolección de residuos electrónicos o de baterías, nunca en el fuego ni en la basura común. Llevar baterías en avión tiene sus propias reglas de cada aerolínea."
          ],
          steps: ["Numera cada batería y registra sus ciclos.", "Carga con el cargador correcto, sobre una superficie que no se queme, con vigilancia.", "Nunca cargues ni vueles con una batería hinchada, perforada o caliente.", "Mantén las baterías lejos de carros calientes y del sol directo.", "Guárdalas con carga de almacenamiento en un recipiente fresco, seco y resistente al fuego.", "Lleva las baterías dañadas a un punto de recolección adecuado."],
          words: [["LiPo", "batería de polímero de litio: ligera y potente, pero puede incendiarse si se maltrata."], ["Ciclo de carga", "un uso completo de la capacidad de una batería, de cargada a usada y de vuelta."], ["Carga de almacenamiento", "un nivel de carga parcial que mantiene sanas las baterías de litio cuando no se usan."], ["Residuos electrónicos", "basura electrónica, que necesita recolección y reciclaje especiales."]],
          slides: [
            { title: "Energía con riesgo", bullets: ["LiPo: mucha energía para su peso", "Puede incendiarse si se daña o se maltrata", "Cuidar las baterías es la tarea número uno"] },
            { title: "Reglas para cargar", bullets: ["Cargador correcto, superficie que no se queme", "Nunca sin vigilancia", "Nunca hinchada, perforada o caliente"] },
            { title: "Calor y almacenamiento", bullets: ["Nada de carros calientes ni sol directo", "Carga de almacenamiento, lugar fresco y seco", "Bolsa o caja resistente al fuego"] },
            { title: "Registrar y retirar", bullets: ["Numera las baterías, registra los ciclos", "Retira las hinchadas o dañadas", "Deséchalas en un punto de recolección adecuado"] }
          ],
          tryIt: "Escribe un procedimiento de una página sobre baterías para un equipo de drones: numeración, carga, manejo en el campo con calor, almacenamiento, registro de ciclos y retiro. Añade una tabla de registro con columnas para número de batería, fecha, ciclos, estado y notas.",
          youCanNow: "cargar, guardar, transportar y retirar con seguridad las baterías del dron y llevar un registro de baterías.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es la carga de almacenamiento?", options: ["Una carga parcial, ni llena ni vacía, para guardar la batería más de unos días", "Una carga completa", "Una batería totalmente vacía", "Una carga hecha dentro de un carro caliente"], answer: 0, why: "Las baterías que se guardan más de unos días se dejan con carga parcial en un lugar fresco y seco." },
            { objective: "O2", q: "Acabas de aterrizar y quieres volar pronto otra vez. La batería está caliente. ¿Qué haces?", options: ["Cargarla de inmediato al sol", "Cargarla en el carro y alejarte", "Dejar que se enfríe antes de cargarla, y cargarla con vigilancia sobre una superficie que no se queme", "Meterla al congelador"], answer: 2, why: "Cargar una batería caliente o cargarla sin vigilancia aumenta el riesgo de incendio." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Cargas útiles: cámaras, sensores y sistemas de fumigación",
          minutes: 5,
          goal: "Manejar, montar y cuidar las principales cargas útiles de los drones agrícolas.",
          text: [
            "La carga útil es lo que lleva el dron para hacer el trabajo. Los drones de mapeo llevan una cámara RGB (de color normal), a menudo en un gimbal que la mantiene estable. Los drones para la salud de los cultivos pueden llevar una cámara multiespectral con un sensor de luz solar y un panel de calibración. Las cámaras térmicas miden el calor. Los drones de fumigación llevan un tanque, una bomba, mangueras y boquillas, y algunos esparcen gránulos o semillas.",
            "Cuida la óptica: mantén limpios los lentes y el sensor de luz solar con un paño suave para lentes, protégelos con sus tapas y mantén las cámaras lejos del polvo y la humedad. Revisa que el gimbal se mueva libremente y que la carga útil esté bien sujeta; una carga suelta desequilibra el dron y confunde al controlador de vuelo.",
            "Los sistemas de fumigación necesitan cuidado extra: después de cada uso se enjuagan y se limpian como lo piden el fabricante y la etiqueta del plaguicida, se revisan las boquillas por desgaste y obstrucciones, y todo el sistema se calibra para que aplique la cantidad correcta. Recuerda que fumigar con dron necesita aprobaciones de aviación y de plaguicidas; el mantenimiento no las reemplaza."
          ],
          words: [["Carga útil", "el equipo que lleva el dron para hacer el trabajo, como una cámara o un tanque de fumigación."], ["Gimbal", "un soporte con motores que mantiene estable la cámara."], ["Sensor de luz solar", "un pequeño sensor en la parte de arriba de algunos drones multiespectrales que mide la luz que llega para corregir las lecturas."], ["Boquilla", "la punta que convierte el líquido en gotas de rocío."]],
          slides: [
            { title: "Cargas útiles comunes", bullets: ["Cámara RGB en un gimbal", "Multiespectral con sensor de luz solar", "Cámara térmica", "Tanque, bomba, boquillas; esparcidores"] },
            { title: "Cuida la óptica", bullets: ["Limpia lentes y sensores con un paño suave", "Con tapas, lejos del polvo y la humedad", "Gimbal libre, soporte firme"] },
            { title: "Sistemas de fumigación", bullets: ["Enjuaga y limpia como piden fabricante y etiqueta", "Revisa desgaste y obstrucciones de las boquillas", "Calibra la dosis; igual se necesitan aprobaciones"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Elige una carga útil (cámara RGB, cámara multiespectral o sistema de fumigación). Escribe una lista de cuidados con al menos seis puntos para antes y después de cada uso.",
          youCanNow: "montar, limpiar y revisar las principales cargas útiles de los drones agrícolas.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es la carga útil de un dron agrícola?", options: ["La batería", "La estación en tierra", "Lo que lleva el dron para hacer el trabajo, como una cámara o un sistema de fumigación", "El enlace de radio"], answer: 2, why: "La carga útil es la cámara, el sensor o el sistema de fumigación o de esparcido que hace el trabajo." },
            { objective: "O3", q: "Después de un trabajo de fumigación, ¿qué haces con el sistema de fumigación?", options: ["Enjuagarlo y limpiarlo como piden el fabricante y la etiqueta, y revisar las boquillas", "Dejar en el tanque la mezcla que sobró", "Lavar todo el dron con un chorro de agua", "Guardarlo mojado al sol"], answer: 0, why: "Los sistemas de fumigación se enjuagan y se limpian después de cada uso, y las boquillas se revisan por desgaste y obstrucciones." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona un sistema de dron agrícola",
        questions: [
          { objective: "O1", q: "¿Por qué a un dron se le llama sistema (UAS o RPAS)?", options: ["Suena mejor", "Incluye aeronave, estación en tierra, enlace de radio, baterías y carga útil", "Tiene muchas hélices", "Se fabrica en una fábrica"], answer: 1, why: "Todas las partes juntas hacen funcionar el dron." },
          { objective: "O1", q: "¿Qué detecta la IMU?", options: ["Inclinación, giros y movimiento", "La humedad del suelo", "Los precios de los cultivos", "El color de la batería"], answer: 0, why: "La IMU detecta el movimiento del dron para que el controlador de vuelo lo estabilice." },
          { objective: "O2", q: "Una batería está un poco hinchada después de un vuelo. Debes:", options: ["Cargarla rápido", "Aplastarla", "Volar con ella una vez más", "Dejar de usarla y retirarla con seguridad"], answer: 3, why: "La hinchazón es señal de daño y riesgo de incendio." },
          { objective: "O2", q: "¿Dónde se deben guardar las baterías del dron durante una pausa larga?", options: ["Llenas en un carro caliente", "Vacías al sol directo", "Con carga de almacenamiento en un recipiente fresco, seco y resistente al fuego", "En el fogón de la cocina"], answer: 2, why: "La carga de almacenamiento y un lugar fresco mantienen las baterías de litio seguras y sanas." },
          { objective: "O3", q: "¿Qué hace un gimbal?", options: ["Mantiene estable la cámara", "Carga la batería", "Fumiga plaguicida", "Mide la altura"], answer: 0, why: "Un gimbal estabiliza la cámara para tener imágenes nítidas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mantenimiento en el campo y en el taller",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inspecciones antes y después de cada vuelo",
          minutes: 5,
          goal: "Hacer una inspección antes y después del vuelo y anotar lo que encuentres.",
          text: [
            "Las inspecciones detectan problemas pequeños antes de que causen un accidente. La inspección antes del vuelo revisa que el dron esté en condiciones de volar ahora; la inspección después del vuelo encuentra daños o desgaste del vuelo que acabas de hacer y deja todo listo para el día siguiente.",
            "Antes del vuelo: estructura y brazos sin grietas, brazos asegurados; hélices limpias, firmes y sin muescas ni grietas; motores que giran libres sin rechinar; carga útil sujeta y lente limpio; batería bien colocada y trabada; sensores y ventanas de visión limpios; control y app listos; estado del firmware revisado antes de salir de la base.",
            "Después del vuelo: deja que se enfríen motores y baterías; revisa si algún motor está caliente (un motor mucho más caliente de lo normal puede estar fallando); busca daños nuevos, polvo o pasto en motores y rejillas; limpia el dron con un cepillo suave o un paño seco (nada de chorros de agua sobre la electrónica); anota en el registro el tiempo de vuelo, los problemas y cualquier mensaje de advertencia."
          ],
          steps: ["Antes del vuelo: estructura, brazos, hélices, motores, carga útil, batería, sensores, control.", "Vuela solo si todos los puntos pasan.", "Después del vuelo: deja enfriar, revisa el calor de los motores, busca daños y suciedad.", "Limpia con un cepillo suave o un paño seco.", "Registra el tiempo de vuelo, los problemas y las advertencias."],
          words: [["Inspección", "una revisión cuidadosa en busca de daños, desgaste o fallas."], ["Firmware", "el software que viene dentro del dron, del control y de las baterías."]],
          slides: [
            { title: "Dos inspecciones", bullets: ["Antes del vuelo: ¿listo para volar ahora?", "Después del vuelo: ¿daño o desgaste de hoy?"] },
            { title: "Antes del vuelo", bullets: ["Estructura, brazos asegurados, hélices sin daño", "Motores libres, carga útil sujeta", "Batería trabada, sensores limpios, app lista"] },
            { title: "Después del vuelo", bullets: ["Enfría; revisa el calor de los motores", "Daño, polvo o pasto en motores y rejillas", "Limpia en seco, registra tiempo, problemas, avisos"] }
          ],
          tryIt: "Escribe una lista de inspección antes del vuelo y otra después del vuelo, con al menos ocho puntos cada una, para un dron de mapeo. Si tienes un dron, úsalas una vez y registra los resultados.",
          youCanNow: "inspeccionar un dron antes y después de cada vuelo y anotar lo que encuentres.",
          quickCheck: [
            { objective: "O4", q: "¿Para qué sirve la inspección antes del vuelo?", options: ["Solo para encontrar daños del vuelo anterior", "Para cargar la batería", "Para actualizar el firmware en el campo", "Para comprobar que el dron está en condiciones de volar ahora"], answer: 3, why: "La inspección antes del vuelo comprueba que el dron está en condiciones de volar antes de despegar." },
            { objective: "O4", q: "Durante la revisión antes del vuelo, un motor raspa cuando lo giras. ¿Qué haces?", options: ["Volar con cuidado", "No volar; revisar si el motor tiene arena, pasto o daños", "Ponerle aceite a la hélice", "Hacer una misión más corta"], answer: 1, why: "Los motores deben girar libres; si raspan, hay un problema que se arregla antes de volar." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mantenimiento programado, firmware y registros",
          minutes: 5,
          goal: "Fijar un calendario de mantenimiento por horas de vuelo y por fechas, y llevar registros de mantenimiento.",
          text: [
            "Algunas partes se desgastan con el uso. Las hélices, los motores, los rodamientos, los gimbals, el tren de aterrizaje y las bombas y boquillas de fumigación se deben cambiar según un calendario. El manual del fabricante da los intervalos; tu manual de operaciones fija tu propio calendario. Planea por horas de vuelo (por ejemplo, cada 50 horas) y por fechas (por ejemplo, cada tres meses), lo que ocurra primero.",
            "Las actualizaciones de firmware corrigen errores y añaden funciones de seguridad, pero una actualización también puede cambiar el comportamiento. Lee las notas de la versión, actualiza antes de salir de la base (no en el campo), actualiza juntos el dron, el control y las baterías, y prueba con un vuelo corto antes del trabajo real.",
            "Lleva un registro de mantenimiento para cada dron: fecha, horas de vuelo, qué se inspeccionó, cambió o reparó, piezas usadas, versión del firmware, quién lo hizo y el resultado. Las autoridades esperan que los operadores den mantenimiento a sus aeronaves y lleven registros; los clientes y las aseguradoras también pueden pedirlos."
          ],
          steps: ["Lee los intervalos de mantenimiento del fabricante.", "Escribe tu calendario por horas de vuelo y por fechas.", "Planea las actualizaciones de firmware en la base, con las notas de la versión leídas y un vuelo de prueba.", "Lleva un registro de mantenimiento para cada dron.", "Ten en existencia hélices de repuesto y piezas comunes."],
          words: [["Mantenimiento programado", "revisiones y cambios de piezas planeados a intervalos fijos."], ["Registro de mantenimiento", "el registro de todo el mantenimiento hecho a un dron."], ["Notas de la versión", "la descripción del fabricante de lo que cambia una actualización de software."]],
          slides: [
            { title: "Las piezas se desgastan", bullets: ["Hélices, motores, rodamientos, gimbal", "Tren de aterrizaje, bombas, boquillas", "Cámbialas según un calendario"] },
            { title: "Horas y fechas", bullets: ["Por ejemplo, cada 50 horas o 3 meses", "Lo que ocurra primero", "Sigue el manual del fabricante"] },
            { title: "Firmware con seguridad", bullets: ["Lee las notas de la versión", "Actualiza en la base, todo junto", "Vuelo de prueba antes del trabajo real"] },
            { title: "Registro de mantenimiento", bullets: ["Fecha, horas, trabajo, piezas, firmware", "Quién lo hizo y resultado", "Para seguridad, autoridades, clientes, aseguradoras"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Haz una tabla de calendario de mantenimiento para un dron con al menos seis puntos (hélices, motores, gimbal, tren de aterrizaje, baterías, firmware), cada uno con un intervalo en horas y en meses, y empieza un registro de mantenimiento con una anotación de ejemplo.",
          youCanNow: "planear el mantenimiento programado y las actualizaciones de firmware y llevar un registro de mantenimiento adecuado.",
          quickCheck: [
            { objective: "O5", q: "En un calendario de mantenimiento, ¿qué quiere decir \"lo que ocurra primero\"?", options: ["Hacer el trabajo solo cada tres meses", "Hacer el trabajo al llegar al límite de horas de vuelo o a la fecha, lo que se alcance primero", "Saltarse el trabajo si el dron vuela bien", "Hacer el trabajo solo después de un choque"], answer: 1, why: "Planear por horas de vuelo y por fechas, lo que ocurra primero, evita que las piezas se gasten." },
            { objective: "O5", q: "Aparece una actualización de firmware mientras estás en la finca de un cliente. ¿Qué haces?", options: ["Instalarla de inmediato en el campo", "Actualizar solo el dron y no el control", "Apagar todas las actualizaciones para siempre", "Esperar, y actualizar en la base después de leer las notas de la versión, y probar con un vuelo corto"], answer: 3, why: "Las actualizaciones pueden cambiar el comportamiento, así que se hacen en la base, todas juntas, y se prueban antes del trabajo real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Resolver fallas y condiciones del campo africano",
          minutes: 6,
          goal: "Diagnosticar fallas comunes paso a paso y proteger los drones del polvo, el calor, la lluvia y los cortes de luz.",
          text: [
            "Resuelve las fallas paso a paso: lee el mensaje de advertencia en la app, revisa primero las causas más simples, cambia una sola cosa y prueba. Fallas comunes: error de brújula (aléjate de metal, vehículos y cables eléctricos, y vuelve a calibrar si te lo pide); GNSS débil (espera a tener más satélites, aléjate de árboles altos); vibración o bamboleo (busca una hélice dañada o floja o un brazo doblado); error de motor (busca pasto, arena o un motor dañado); vuelos cortos (batería vieja, calor o una carga útil pesada).",
            "El polvo y la arena se meten en motores y gimbals: despega desde una alfombra o una lona, limpia después de volar y guarda el dron en un estuche cerrado. El calor acorta la vida de las baterías y puede sobrecalentar la electrónica: pon a la sombra las baterías y el control, vuela en las horas más frescas y deja descansar el dron entre vuelos. La lluvia y la humedad dañan la electrónica a menos que el dron esté hecho para resistirlas: no vueles con lluvia, seca el equipo y guárdalo con sobres que absorben la humedad.",
            "Donde la electricidad falla, planea la carga: un inversor del vehículo o un kit de carga solar, suficientes baterías para el día y carga durante la noche en la base. Sabe cuándo parar: si una falla se repite o afecta la seguridad, deja el dron en tierra y envíalo al centro de servicio del fabricante o a un técnico calificado."
          ],
          steps: ["Lee el mensaje de advertencia exacto.", "Revisa primero las causas más simples.", "Cambia una cosa a la vez y luego prueba.", "Usa una alfombra de aterrizaje; limpia y guarda el dron en su estuche después de trabajar con polvo.", "Pon las baterías a la sombra; vuela en horas frescas; no vueles con lluvia salvo que esté hecho para eso.", "Deja el dron en tierra si una falla de seguridad se repite."],
          words: [["Resolver fallas", "encontrar paso a paso la causa de una falla."], ["Calibración", "un procedimiento que reajusta un sensor, como la brújula, para que mida bien."], ["En tierra", "sin permiso para volar hasta que se repare."]],
          slides: [
            { title: "Resuelve paso a paso", bullets: ["Lee la advertencia", "Primero las causas más simples", "Cambia una cosa y prueba"] },
            { title: "Fallas comunes", bullets: ["Error de brújula: lejos del metal, recalibra", "Bamboleo: hélices o brazos", "Vuelos cortos: batería vieja, calor, carga pesada"] },
            { title: "Polvo, calor y lluvia", bullets: ["Alfombra de aterrizaje, limpieza, estuche cerrado", "Baterías a la sombra, vuela en horas frescas", "Sin lluvia salvo que lo resista; seca y guarda bien"] },
            { title: "Electricidad y límites", bullets: ["Carga en vehículo o solar, baterías de repuesto", "Deja el dron en tierra si una falla de seguridad se repite"] }
          ],
          tryIt: "Tarea final: escribe el programa de mantenimiento de un dron: lista de partes con sus funciones, procedimiento de baterías, listas de inspección antes y después del vuelo, calendario por horas y fechas, una tabla para resolver al menos cinco fallas y una plantilla de registro de mantenimiento con dos anotaciones de ejemplo.",
          youCanNow: "resolver fallas comunes de los drones, protegerlos en las condiciones del campo africano y llevar un programa completo de mantenimiento.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es el primer paso para resolver una falla?", options: ["Leer el mensaje de advertencia y revisar primero las causas más sencillas", "Cambiar varias piezas a la vez", "Abrir la batería", "Volar más alto para probar"], answer: 0, why: "Lee el mensaje, revisa primero las causas sencillas, cambia una sola cosa y prueba." },
            { objective: "O6", q: "Vas a volar todo el día en una finca caliente y polvosa, sin electricidad. ¿Qué planeas?", options: ["Una sola batería y despegar desde la arena", "Dejar las baterías al sol para que no se enfríen", "Una lona para despegar, sombra para las baterías, las horas más frescas y suficientes baterías cargadas o un cargador solar o del vehículo", "Volar sin dejar descansar el dron"], answer: 2, why: "Las lonas evitan el polvo, la sombra y las horas frescas protegen las baterías, y donde la electricidad no es confiable hay que planear la carga." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Mantenimiento en el campo y en el taller",
        questions: [
          { objective: "O4", q: "Una hélice tiene una pequeña muesca en el borde. Debes:", options: ["Volar con cuidado", "Ponerle cinta", "Cambiarla antes de volar", "Lijarla y volar"], answer: 2, why: "Las hélices dañadas causan vibración y pueden fallar en pleno vuelo." },
          { objective: "O4", q: "Después de un vuelo, un motor está mucho más caliente que los otros. Esto puede significar:", options: ["Que el motor está fallando o bloqueado", "Que el dron voló bien", "Que la cámara está sucia", "Que la batería es nueva"], answer: 0, why: "Un calor fuera de lo normal puede indicar un rodamiento malo, basura o un motor que falla." },
          { objective: "O5", q: "¿Cuándo debes instalar una actualización de firmware?", options: ["En medio del campo de un cliente", "Durante un vuelo", "Nunca", "En la base, después de leer las notas de la versión, y luego con un vuelo de prueba"], answer: 3, why: "Las actualizaciones pueden cambiar el comportamiento; prueba antes del trabajo real." },
          { objective: "O6", q: "La app muestra un error de brújula al despegar. Un buen primer paso es:", options: ["Despegar de todas formas", "Alejarte de metal, vehículos y cables eléctricos y recalibrar si te lo pide", "Quitar la brújula", "Volar en modo deportivo"], answer: 1, why: "El metal y las fuentes magnéticas alteran la brújula." },
          { objective: "O6", q: "¿Cómo proteges un dron del polvo en una finca seca?", options: ["Despegas desde una alfombra, limpias después de volar y lo guardas en un estuche cerrado", "Lo lavas con una manguera", "Vuelas más cerca del suelo", "Lo dejas destapado"], answer: 0, why: "El polvo daña motores y gimbals; las alfombras, la limpieza y los estuches ayudan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Drones agrícolas: tecnología UAS y mantenimiento",
    questions: [
      { objective: "O1", q: "El enlace C2 es:", options: ["Un tipo de batería", "La conexión de radio entre el control remoto y el dron", "Un tamaño de hélice", "Un lente de cámara"], answer: 1, why: "El enlace de mando y control lleva las órdenes y los datos." },
      { objective: "O1", q: "Los ESC controlan:", options: ["El zoom de la cámara", "El almacenamiento de las baterías", "Qué tan rápido gira cada motor", "Los satélites GPS"], answer: 2, why: "Los controladores electrónicos de velocidad manejan los motores." },
      { objective: "O1", q: "El controlador de vuelo es:", options: ["El cerebro a bordo del dron que lo mantiene estable", "La persona que vuela", "La caja del control remoto", "La plataforma de aterrizaje"], answer: 0, why: "Lee los sensores y ajusta los motores muchas veces por segundo." },
      { objective: "O1", q: "El GNSS le da al dron su:", options: ["Color", "Temperatura", "Nivel de batería", "Posición a partir de satélites"], answer: 3, why: "El GNSS, como el GPS, da la posición." },
      { objective: "O1", q: "El barómetro de un dron mide:", options: ["La dirección del viento", "La presión del aire, que se usa para la altura", "La salud del cultivo", "Los ciclos de la batería"], answer: 1, why: "La presión del aire cambia con la altura." },
      { objective: "O2", q: "¿Por qué pueden ser peligrosas las baterías LiPo?", options: ["Son pesadas", "Hacen ruido", "Pueden incendiarse si se dañan, se sobrecargan o se calientan demasiado", "Nunca se cargan"], answer: 2, why: "Mucha energía en poco espacio significa mucho riesgo si se maltratan." },
      { objective: "O2", q: "Las baterías se deben cargar:", options: ["Con el cargador correcto, con vigilancia, sobre una superficie que no se queme", "Durante la noche sobre una cama", "Dentro de un carro caliente", "Con cualquier cargador que entre"], answer: 0, why: "Estos pasos reducen el riesgo de incendio." },
      { objective: "O2", q: "Un ciclo de carga es:", options: ["Una pieza de bicicleta", "Un plan de vuelo", "Un patrón del clima", "Un uso completo de la capacidad de una batería"], answer: 3, why: "Registrar los ciclos muestra el envejecimiento de la batería." },
      { objective: "O2", q: "Una batería de dron dañada y retirada debe ir a:", options: ["El fogón para cocinar", "Un punto de recolección de residuos electrónicos o de baterías", "La basura común", "Un río"], answer: 1, why: "Las baterías de litio necesitan recolección y reciclaje seguros." },
      { objective: "O3", q: "El sensor de luz solar de un dron multiespectral:", options: ["Carga la batería", "Mide el viento", "Mide la luz que llega para corregir las lecturas", "Rocía agua"], answer: 2, why: "Ayuda a corregir los cambios de luz." },
      { objective: "O3", q: "Una carga útil suelta puede:", options: ["Desequilibrar el dron y afectar su control", "Mejorar las fotos", "Hacer más ligero el dron", "Cargar más rápido"], answer: 0, why: "El controlador de vuelo espera una carga firme y equilibrada." },
      { objective: "O3", q: "Las boquillas de fumigación se deben revisar por:", options: ["Su color", "Las calcomanías de la marca", "La música", "Desgaste y obstrucciones"], answer: 3, why: "Las boquillas gastadas u obstruidas aplican una cantidad equivocada." },
      { objective: "O3", q: "¿Un buen mantenimiento del sistema de fumigación reemplaza las aprobaciones para fumigar?", options: ["Sí", "No; igual se necesitan las aprobaciones de aviación y de plaguicidas", "Solo en fincas pequeñas", "Solo de noche"], answer: 1, why: "El mantenimiento y la aprobación legal son requisitos separados." },
      { objective: "O4", q: "La inspección después del vuelo se hace para:", options: ["Cargar el control", "Planear el próximo cliente", "Encontrar daños o desgaste del vuelo que acabas de hacer", "Editar fotos"], answer: 2, why: "Detecta problemas antes del siguiente vuelo." },
      { objective: "O4", q: "¿Cómo debes limpiar un dron después de un vuelo con polvo?", options: ["Con un cepillo suave o un paño seco", "Con agua a presión", "Con lija", "Con gasolina"], answer: 0, why: "El agua y los químicos pueden dañar la electrónica." },
      { objective: "O5", q: "El mantenimiento programado se planea por:", options: ["Solo el color", "Solo el clima", "Solo el cliente", "Horas de vuelo y fechas, lo que ocurra primero"], answer: 3, why: "Las piezas se desgastan con el uso y con el tiempo." },
      { objective: "O5", q: "Un registro de mantenimiento anota:", options: ["Solo el precio del dron", "Fecha, horas, trabajo hecho, piezas, firmware, quién lo hizo y el resultado", "Números de teléfono de agricultores", "Precios de los cultivos"], answer: 1, why: "Los registros completos apoyan la seguridad y el cumplimiento." },
      { objective: "O6", q: "El dron se bambolea en el vuelo. Revisa primero:", options: ["El mapa del cliente", "El pronóstico del clima del próximo mes", "Las hélices y los brazos por daños o piezas flojas", "La tarjeta de memoria"], answer: 2, why: "Las hélices dañadas y los brazos doblados causan vibración." },
      { objective: "O6", q: "Con mucho calor debes:", options: ["Poner las baterías a la sombra y volar en las horas más frescas", "Dejar las baterías al sol", "Volar sin parar ni descansar", "Cargar las baterías mientras están calientes"], answer: 0, why: "El calor acorta la vida de las baterías y castiga la electrónica." },
      { objective: "O6", q: "Una falla de seguridad sigue volviendo después de tus arreglos. Debes:", options: ["Seguir volando", "Ocultársela a los clientes", "Tapar la advertencia", "Dejar el dron en tierra y enviarlo a un técnico calificado"], answer: 3, why: "Las fallas de seguridad repetidas necesitan una reparación experta antes de volar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte del programa y revísala de nuevo.",
    criteria: [
      {
        name: "Lista de partes",
        objective: "O1",
        notYet: "Faltan partes principales, o no explica lo que hacen.",
        meets: "Cada parte principal de la aeronave y de la estación en tierra está en la lista con lo que hace.",
        exceeds: "Anota qué partes se gastan y cuáles necesitan calibración."
      },
      {
        name: "Cuidado de las baterías",
        objective: "O2",
        notYet: "Faltan pasos de carga, almacenamiento o retiro, o no son seguros.",
        meets: "Pasos seguros de carga, enfriamiento, carga de almacenamiento, transporte y retiro, con conteo de ciclos.",
        exceeds: "Incluye un plan contra incendios para la zona de carga."
      },
      {
        name: "Listas de inspección",
        objective: "O4",
        notYet: "No hay lista, o faltan puntos clave como las hélices y el seguro de la batería.",
        meets: "Las listas de antes y después del vuelo cubren la estructura, las hélices, los motores, la carga útil, la batería, los sensores y las notas del registro.",
        exceeds: "Las revisiones de la carga útil corresponden al trabajo real del dron, como mapeo o fumigación."
      },
      {
        name: "Calendario y registro",
        objective: "O5",
        notYet: "No hay intervalos, o faltan campos en el registro.",
        meets: "Un calendario por horas de vuelo y por fechas, una rutina de firmware y una plantilla de registro con dos ejemplos llenos.",
        exceeds: "Los intervalos salen del manual del fabricante y se anota la fuente."
      },
      {
        name: "Tabla para resolver fallas",
        objective: "O6",
        notYet: "Menos de cinco fallas, o no hay pasos.",
        meets: "Al menos cinco fallas comunes, cada una con revisiones iniciales sencillas y cuándo dejar el dron en tierra.",
        exceeds: "Agrega pasos contra el polvo, el calor, la lluvia y los cortes de luz en las fincas donde trabaja."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del programa de mantenimiento",
      "Participantes que dicen usar una lista escrita de inspección y un registro de mantenimiento 30 días después (encuesta de seguimiento)",
      "Negocios de drones o cooperativas que reportan menos choques, incidentes con baterías o días con el dron en tierra después de la formación",
      "Participantes que toman el siguiente curso de drones o una formación de técnico del fabricante"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para las lecciones; un dron agrícola real, o fotos claras de uno, para practicar",
      "El manual del fabricante del dron, si lo hay",
      "Un cuaderno o una hoja de cálculo para las listas, el calendario y el registro",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo para escribir el programa de mantenimiento"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego rodeen un dron real (apagado y sin hélices) para nombrar cada parte.",
      "Manejen las baterías solo sobre una superficie que no se queme, y nunca carguen, perforen ni abran una batería hinchada en clase.",
      "Usa el manual del propio dron para los intervalos y los procedimientos; el curso solo da el método general.",
      "No hagan funcionar sistemas de fumigación con plaguicida en clase; practiquen las inspecciones con agua limpia o sin líquido.",
      "Califica el programa de mantenimiento con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

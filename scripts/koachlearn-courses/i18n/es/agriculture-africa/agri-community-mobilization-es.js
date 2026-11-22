"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-community-mobilization.js). See scripts/koachlearn-courses/README.md, "Translations".

const FAO_MECH = { name: "FAO: mecanización agrícola sostenible: lo que hace la FAO (servicios de alquiler, apoyo a pequeños agricultores)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Kenia): servicios de certificación de semillas y protección de variedades vegetales", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Voice of Nigeria: el Consejo Nacional de Semillas Agrícolas (NASC) advierte a los agricultores sobre las semillas falsas (comprar a agrodistribuidores registrados; etiqueta de certificación)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP: Ley de Plantas y Fertilizantes de Ghana, 2010 (Ley 803): registro de semillas y fertilizantes (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "Kit de herramientas de registro de plaguicidas de la FAO: registros nacionales de plaguicidas en África", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "Alianza Cooperativa Internacional: la identidad, los valores y los principios cooperativos", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization-es",
  lang: "es",
  translationOf: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Movilización comunitaria: compartir maquinaria y negociar insumos",
  skills: "Mapear las necesidades de la comunidad, Convocar y dirigir una primera reunión, Acordar metas y reglas, Juntar recursos para maquinaria y alquiler de tractores, Comprar al por mayor y negociar insumos auténticos, Mantener la confianza con registros abiertos",
  outcome: "reunir a los agricultores de tu comunidad en torno a una necesidad común, acordar metas y reglas justas, y hacer un plan escrito para comprar semilla y fertilizante al por mayor o compartir un tractor o una máquina, con registros abiertos que mantengan la confianza de todos.",
  about: [
    "Un agricultor solo paga el precio más alto por un saco de fertilizante y espera semanas por un tractor. Veinte agricultores juntos pueden negociar un mejor precio, comprobar que los insumos son auténticos y reservar o compartir una máquina en el momento justo. Este curso es para agricultores líderes, dirigentes de grupos de agricultores, extensionistas, grupos de jóvenes y de mujeres, y cualquier persona lista para organizar a sus vecinos en Kenia, Nigeria, Ghana, Burkina Faso y toda África.",
    "Vas a mapear lo que necesita tu comunidad, convocar y dirigir una primera reunión, acordar una meta común y reglas sencillas, planear un fondo común para una máquina o para alquilar un servicio de tractor, comprar insumos al por mayor y negociar con proveedores, evitar semillas y fertilizantes falsos, manejar los conflictos, llevar registros abiertos y asegurarte de que las mujeres y los jóvenes tengan voz de verdad.",
    "Se basa en el curso Cooperativas agrícolas y acceso al mercado, que trata el registro formal, los estatutos y la venta en grupo, así que no los repite. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en tu propia comunidad. Las cifras de dinero son solo ejemplos."
  ],
  finalTask: "Haz un plan escrito para tu comunidad: un plan de compra de insumos al por mayor (socios, cantidades, anticipos, tres cotizaciones de proveedores, cómo comprobarás que los insumos son auténticos, entrega y reparto) o un acuerdo para compartir maquinaria (la máquina o el servicio de alquiler, el calendario de reservas, las tarifas, el fondo de mantenimiento, el operador y qué pasa si se descompone), con los registros que mostrarás a los socios y cómo participan las mujeres y los jóvenes.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Agricultores líderes, dirigentes de grupos de agricultores y de aldeas, extensionistas, y socios de grupos de mujeres y de jóvenes de Kenia, Nigeria, Ghana, África occidental francófona y toda África. La mayoría cultiva parcelas pequeñas de maíz, yuca, arroz, sorgo, frijol, maní u hortalizas.",
    startingPoint: "Conocen a sus vecinos y los problemas que comparten, como el arado tardío, el fertilizante caro y la semilla falsa. Algunos son parte de grupos informales o grupos de ahorro. Pocos han dirigido una reunión de planificación, han juntado dinero para una compra común o han negociado con un proveedor.",
    gap: "Los agricultores pierden cosecha y dinero cuando el arado llega tarde, los insumos cuestan demasiado o resultan falsos, y los grupos se deshacen por problemas de dinero. Los líderes necesitan mapear las necesidades, organizar una reunión justa, acordar reglas, llevar a cabo una compra en común o un plan para compartir máquinas, y mantener los registros abiertos para que dure la confianza, incluyendo a las mujeres y los jóvenes, que a menudo quedan fuera.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; muchos participantes hablan el idioma del curso como segunda lengua, y las reuniones pueden ser en lenguas locales",
      "Dispositivos: un teléfono básico para llamadas, SMS y dinero móvil; registros en papel",
      "Dinero: pequeñas cantidades reunidas de muchos socios; no se puede esconder ninguna pérdida",
      "Reglas: las normas y los registros de semillas, fertilizantes y plaguicidas varían según el país y cambian; los participantes consultan a sus organismos nacionales",
      "Tiempo: las reuniones deben caber entre el trabajo de la finca, los mercados y las tareas del hogar, sobre todo para las mujeres"
    ],
    prerequisites: "Ninguno. Útil: Cooperativas agrícolas y acceso al mercado, para un registro formal más adelante."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "En tu aldea o grupo de agricultores", action: "mapear las necesidades agrícolas que comparte la comunidad y ordenar las tres principales", standard: "después de preguntar al menos a diez hogares, incluidas mujeres y jóvenes agricultores" },
    { id: "O2", condition: "Con la principal necesidad común", action: "convocar y dirigir una primera reunión que acuerde una meta común y reglas escritas", standard: "con un orden del día, un acta, un responsable con nombre para cada tarea y reglas sobre el dinero, las decisiones y la salida del grupo" },
    { id: "O3", condition: "Ante la necesidad de arar, trillar o usar otra máquina", action: "escribir un plan para compartir maquinaria o alquilar un tractor", standard: "que cubra alquilar o comprar, un calendario de reservas justo, las tarifas, un fondo de mantenimiento, el operador y qué pasa si se descompone" },
    { id: "O4", condition: "Con los pedidos de semilla y fertilizante de los socios", action: "planear una compra al por mayor, comparar al menos tres cotizaciones de proveedores y negociar", standard: "con los anticipos anotados, los insumos comprobados como auténticos y registrados, y los recibos a nombre del grupo" },
    { id: "O5", condition: "Mientras el grupo maneja dinero y toma decisiones", action: "llevar registros abiertos, resolver los desacuerdos con los pasos acordados y dar a las mujeres y los jóvenes un papel real", standard: "de modo que cada socio pueda ver a dónde fue cada pago, y que las mujeres y los jóvenes tengan tareas o cargos de liderazgo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Reunir a la comunidad",
      lessons: [
        {
          title: "Mapear las necesidades de tu comunidad",
          objectives: ["O1"],
          minutes: 5,
          goal: "Preguntar al menos a diez hogares por sus problemas agrícolas y ordenar las tres principales necesidades comunes.",
          text: [
            "La gente se une a un grupo cuando este resuelve un problema que siente. Así que antes de convocar una reunión, averigua qué necesitan de verdad tus vecinos. No supongas: el líder puede pensar que es un tractor mientras la mayoría de los agricultores dice que es la semilla falsa o el precio del fertilizante.",
            "Visita o llama al menos a diez hogares. Haz las mismas pocas preguntas: ¿Cuáles son tus cultivos o animales principales? ¿Qué frenó tu última cosecha? ¿Cuánto pagas por el arado, la semilla y el fertilizante, y cuándo los consigues? ¿Qué harías junto con tus vecinos? Pregunta también a las mujeres y a los jóvenes agricultores, no solo al jefe del hogar; sus problemas pueden ser distintos, como no tener título de la tierra para conseguir crédito o ser los últimos a los que llega el tractor.",
            "Escribe las respuestas en una hoja: una fila por hogar, una columna por problema. Cuenta cuántos hogares nombraron cada problema. Los tres primeros son las necesidades comunes de tu comunidad. También puedes dibujar un mapa sencillo de la aldea con las fincas, los caminos, las tiendas de insumos y dónde hay un tractor o un molino. Un teléfono puede ayudarte a contar y ordenar las respuestas."
          ],
          steps: ["Escribe cuatro o cinco preguntas sencillas.", "Pregunta al menos a diez hogares, incluidas mujeres y jóvenes agricultores.", "Anota las respuestas en una tabla: una fila por hogar.", "Cuenta cuántos nombraron cada problema.", "Ordena las tres principales necesidades comunes."],
          words: [["Movilización", "reunir a la gente para actuar sobre una necesidad común."], ["Mapa de necesidades", "un registro sencillo de los problemas que comparten los hogares y de dónde están los recursos."], ["Hogar", "las personas que viven y cultivan juntas y comparten la comida y el dinero."]],
          slides: [
            { title: "Empieza por la necesidad", bullets: ["La gente se une para resolver un problema que siente", "No supongas: pregunta primero", "La idea del líder puede no ser la principal necesidad"] },
            { title: "Pregunta a diez hogares o más", bullets: ["¿Qué frenó tu última cosecha?", "¿Cuánto pagas por arado, semilla y fertilizante?", "Pregunta también a mujeres y jóvenes agricultores"] },
            { title: "Cuenta y ordena", bullets: ["Una fila por hogar", "Cuenta cada problema", "Los tres primeros = necesidades comunes"] }
          ],
          tryIt: "Haz tus preguntas al menos a diez hogares de tu comunidad. Pon las respuestas en una tabla, cuenta cada problema y escribe las tres principales necesidades comunes.",
          youCanNow: "mapear las necesidades agrícolas de tu comunidad y ordenar los tres principales problemas comunes.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué preguntar a los hogares antes de convocar una reunión?", options: ["Para juntar dinero pronto", "Para elegir al líder", "Para venderles insumos", "Para saber qué problemas comparte de verdad la gente"], answer: 3, why: "Un grupo dura cuando resuelve una necesidad que siente la mayoría de sus socios, no solo la idea del líder." },
            { objective: "O1", q: "¿A quién debes incluir al preguntar por las necesidades?", options: ["A mujeres y jóvenes agricultores además de los jefes de hogar", "Solo a los hombres mayores", "Solo a quienes tienen tractor", "Solo a quienes saben leer"], answer: 0, why: "Las mujeres y los jóvenes pueden tener problemas distintos, así que dejarlos fuera da una imagen equivocada." }
          ]
        },
        {
          title: "Convocar y dirigir una primera reunión",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dirigir una primera reunión con un orden del día que termine con tareas claras y un acta.",
          text: [
            "Elige una hora y un lugar que convengan a la mayoría: después del trabajo en la finca, no en día de mercado, en un lugar al que las mujeres y los jóvenes puedan llegar fácilmente, como una escuela, una iglesia, una mezquita o debajo de un árbol conocido. Invita a la gente en persona, por teléfono, por SMS o de boca en boca, y a través de personas respetadas como el jefe, un líder religioso o el extensionista. Di el propósito en una frase: 'Hablemos de cómo conseguir fertilizante más barato esta temporada'.",
            "Ten un orden del día de cuatro o cinco puntos y haz una reunión corta: bienvenida y propósito; lo que encontró el mapa de necesidades; ideas de qué hacer juntos; acordar un primer paso; quién hace qué y para cuándo. Elige a alguien que dirija y a alguien que escriba el acta. Deja hablar a todos, y pregunta directamente a las personas calladas.",
            "Termina con decisiones, no solo con palabras. Escribe cada tarea, la persona responsable y la fecha. Lee el acta en voz alta y acuerden la próxima reunión. Ejemplo: un grupo de productores de sorgo de Burkina Faso acordó en su primera reunión juntar los pedidos de fertilizante en dos semanas, con dos socios, uno de ellos una mujer joven, encargados de reunir la lista."
          ],
          steps: ["Elige una hora y un lugar que convengan a la mayoría, incluidas mujeres y jóvenes.", "Invita en persona y a través de personas respetadas, con un propósito de una frase.", "Prepara un orden del día corto: propósito, necesidades encontradas, ideas, primer paso, tareas.", "Elige a quien dirige y a quien escribe el acta; deja hablar a todos.", "Termina con tareas, nombres y fechas; lee el acta en voz alta."],
          words: [["Orden del día", "la lista de temas que tratará una reunión, en orden."], ["Acta", "el registro escrito de lo que decidió una reunión y de quién hará qué."], ["Quien preside", "la persona que dirige la reunión y cuida el tiempo."]],
          slides: [
            { title: "Hora, lugar e invitación", bullets: ["Después del trabajo en la finca, no en día de mercado", "Un lugar al que lleguen mujeres y jóvenes", "Invita en persona; propósito en una frase"] },
            { title: "Un orden del día corto", bullets: ["Propósito; lo que encontró el mapa de necesidades", "Ideas; acordar un primer paso", "Quién hace qué y para cuándo"] },
            { title: "Termina con decisiones", bullets: ["Tareas, nombres y fechas en el acta", "Lee el acta en voz alta", "Fija la próxima reunión"] }
          ],
          tryIt: "Escribe la invitación (una frase de propósito, hora y lugar) y un orden del día de cinco puntos para tu primera reunión. Si puedes, hazla, y escribe un acta con al menos dos tareas, nombres y fechas.",
          youCanNow: "convocar y dirigir una primera reunión corta que termine con tareas, nombres, fechas y un acta.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hora de reunión suele ser mejor para los agricultores?", options: ["El día de mercado al mediodía", "Después del trabajo en la finca, en un lugar al que la mayoría pueda llegar", "Muy temprano, lejos de la aldea", "Cuando el líder esté libre"], answer: 1, why: "Una hora y un lugar convenientes permiten que asista la mayoría de los socios, incluidas mujeres y jóvenes." },
            { objective: "O2", q: "¿Cómo debe terminar una primera reunión?", options: ["Con un discurso largo", "Con todos pagando dinero de inmediato", "Con tareas, nombres y fechas escritos en el acta", "Sin ninguna decisión"], answer: 2, why: "Las tareas claras con nombres y fechas convierten la conversación en acción." }
          ]
        },
        {
          title: "Metas comunes, reglas justas e inclusión de todos",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Escribir una meta común y cinco reglas sencillas que tu grupo acuerde.",
          text: [
            "Una meta común es concreta y tiene fecha: 'Para el 1 de marzo, comprar juntos 200 sacos de fertilizante a un precio más bajo que el que pagan los socios por separado', o 'Esta temporada, la parcela de cada socio se ara en las dos semanas siguientes a las primeras lluvias'. Una meta clara dice a los socios cómo se ve el éxito.",
            "Acuerden reglas sencillas antes de mover dinero: quién puede entrar y cuánto paga; cómo se toman las decisiones (por ejemplo un socio, un voto, como hacen las cooperativas); quién guarda el dinero y cómo (una cuenta del grupo en el banco o de dinero móvil con dos personas que aprueben los pagos); qué pasa si alguien no paga o no entrega; y cómo puede salir un socio y recuperar su dinero. Escriban las reglas y léanlas en voz alta para que también estén de acuerdo los socios que no saben leer.",
            "Hagan lugar a las mujeres y los jóvenes a propósito. Hagan las reuniones a horas en que puedan asistir, dejen que los socios entren a su propio nombre aunque no tengan título de la tierra, y denles cargos reales como tesorera, encargado de reservas o revisora de insumos. Los grupos que los incluyen suelen tener más socios, más confianza y más habilidades, como los socios jóvenes que manejan bien el teléfono y el dinero móvil. Cuando tu grupo esté listo para registrarse formalmente, mira Cooperativas agrícolas y acceso al mercado."
          ],
          steps: ["Escribe una meta con un número y una fecha.", "Acuerden reglas sobre la entrada, las decisiones, el dinero, no pagar o no entregar, y la salida.", "Lean las reglas en voz alta y anoten el acuerdo en el acta.", "Den a las mujeres y los jóvenes cargos reales y horarios de reunión que les convengan."],
          words: [["Meta común", "un resultado claro que quiere todo el grupo, con un número y una fecha."], ["Firmante autorizado", "una persona que puede aprobar los pagos de la cuenta del grupo."], ["Inclusión", "asegurarse de que todos, también las mujeres y los jóvenes, puedan entrar, hablar y dirigir."]],
          slides: [
            { title: "Una meta con número y fecha", bullets: ["'Para el 1 de marzo, comprar juntos 200 sacos'", "'Cada parcela arada a dos semanas de las lluvias'", "Muestra cómo se ve el éxito"] },
            { title: "Reglas antes de mover dinero", bullets: ["Entrada y cuotas; un socio, un voto", "Cuenta del grupo; dos personas aprueban los pagos", "No pagar o no entregar; salida y devoluciones"] },
            { title: "Incluye a mujeres y jóvenes", bullets: ["Horas y lugares a los que puedan asistir", "Entrar a su nombre, sin título de la tierra", "Cargos reales: tesorería, reservas, revisión de insumos"] }
          ],
          sources: [ICA],
          tryIt: "Escribe la meta común de tu grupo con un número y una fecha, y cinco reglas sobre la entrada, las decisiones, el dinero, no pagar o no entregar, y la salida. Nombra un cargo que ocupará una mujer o un socio joven.",
          youCanNow: "escribir una meta común clara y reglas justas, y dar a las mujeres y los jóvenes un papel real en el grupo.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la meta común más clara?", options: ["Para el 1 de marzo, comprar juntos 200 sacos de fertilizante a un precio más bajo", "Ayudar a los agricultores", "Mejorar las cosas", "Conseguir fertilizante algún día"], answer: 0, why: "Una meta con un número y una fecha muestra exactamente cómo se ve el éxito." },
            { objective: "O5", q: "Una mujer joven no tiene título de la tierra pero cultiva su propia parcela. ¿Qué deben permitir las reglas del grupo?", options: ["Que no pueda entrar", "Que entre solo a través de su esposo", "Que asista pero no vote", "Que entre a su propio nombre y pueda tener un cargo"], answer: 3, why: "Dejar que las mujeres y los jóvenes entren y dirijan a su propio nombre forma un grupo más grande y más fuerte." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Reunir a la comunidad",
        questions: [
          { objective: "O1", q: "Preguntaste a doce hogares. Ocho nombraron la semilla falsa y tres los tractores. ¿Cuál es la principal necesidad común?", options: ["Los tractores", "Un camino nuevo", "La semilla falsa", "Una escuela"], answer: 2, why: "El problema que nombran más hogares es la principal necesidad común." },
          { objective: "O1", q: "¿Qué es un mapa de necesidades?", options: ["Un registro sencillo de los problemas que comparten los hogares y de dónde están los recursos", "Un mapa de carreteras a la ciudad", "Una lista de precios de cultivos", "Un estado de cuenta del banco"], answer: 0, why: "Un mapa de necesidades muestra los problemas comunes y los recursos locales, como tiendas de insumos y máquinas." },
          { objective: "O2", q: "¿Quién escribe lo que decide la reunión?", options: ["El jefe", "El proveedor", "Nadie", "Quien escribe el acta"], answer: 3, why: "Quien escribe el acta anota las decisiones, las tareas, los nombres y las fechas." },
          { objective: "O2", q: "¿Cuándo debe acordar un grupo sus reglas sobre el dinero?", options: ["Después de que haya un problema", "Antes de juntar cualquier dinero", "Solo cuando el grupo se registre", "Nunca; basta con la confianza"], answer: 1, why: "Acordar las reglas primero evita disputas una vez que se junta el dinero." },
          { objective: "O5", q: "¿Qué ayuda a las mujeres a asistir a las reuniones del grupo?", options: ["Reuniones a horas y en lugares que les convengan", "Reuniones solo en día de mercado", "Reuniones tarde en la noche y lejos", "Reuniones solo para jefes de hogar"], answer: 0, why: "Una hora y un lugar adecuados quitan un obstáculo común para las mujeres." }
        ]
      }
    },
    {
      name: "Capítulo 2: Juntar recursos, comprar juntos y mantener la confianza",
      lessons: [
        {
          title: "Juntar recursos para maquinaria y alquiler de tractores",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escribir un plan para compartir una máquina o alquilar un servicio de tractor en grupo.",
          text: [
            "Primero decidan: ¿alquilar o comprar? Comprar un tractor cuesta mucho y necesita combustible, reparaciones, un operador capacitado y suficiente trabajo para mantenerlo ocupado. Para la mayoría de los grupos pequeños, alquilar en grupo un servicio de tractor es el primer paso: un proveedor de alquiler suele dar mejor fecha o mejor precio por muchas parcelas cercanas entre sí. La FAO apoya los servicios de alquiler como una forma de que los pequeños agricultores accedan a la maquinaria. Las aplicaciones y los agentes de reservas, como Hello Tractor en partes de Nigeria y Kenia, conectan a los agricultores con los dueños de tractores; averigua qué funciona en tu zona. Las máquinas compartidas más pequeñas, como una trilladora, una desgranadora o un molino, las puede comprar un grupo.",
            "Planeen el calendario de forma justa. Arar o sembrar tarde cuesta cosecha, y todos quieren la máquina los mismos días. Acuerden el orden por adelantado: por zona y ruta para ahorrar combustible y viajes, por sorteo o según las necesidades de siembra, y roten quién va primero cada temporada. Escriban el calendario y compártanlo. Acuerden qué pasa si la lluvia o una avería detienen el trabajo.",
            "Acuerden las tarifas y los costos: cuánto pagan los socios por acre o por hora (cifras solo de ejemplo: XOF, KES, NGN o GHS por acre), si se paga antes o el mismo día, y un fondo de mantenimiento aparte para una máquina del grupo, para que las reparaciones no detengan la temporada. Nombren a un operador capacitado, lleven una bitácora de horas, combustible, parcelas atendidas y reparaciones, y guarden la máquina en un lugar seguro."
          ],
          steps: ["Decidan alquilar o comprar, según el costo, las habilidades y cuánto trabajo hay.", "Hagan una lista de las parcelas de los socios, su tamaño y las fechas en que necesitan la máquina.", "Acuerden un calendario justo (por ruta, sorteo o necesidad de siembra) y roten el primer lugar.", "Fijen las tarifas, cuándo se paga y un fondo de mantenimiento.", "Nombren al operador y lleven una bitácora; acuerden qué pasa si se descompone."],
          words: [["Servicio de alquiler", "un proveedor que trae un tractor o una máquina y hace el trabajo a cambio de una tarifa."], ["Fondo de mantenimiento", "dinero apartado de las tarifas para pagar reparaciones y revisiones."], ["Bitácora", "un registro de las horas, el combustible, las parcelas atendidas y las reparaciones de una máquina."]],
          slides: [
            { title: "¿Alquilar o comprar?", bullets: ["Comprar: gran costo, combustible, reparaciones, operador", "La mayoría de los grupos pequeños empieza alquilando juntos", "Máquinas pequeñas compartidas: trilladora, desgranadora, molino"] },
            { title: "Un calendario justo", bullets: ["Lista de parcelas, tamaños y fechas necesarias", "Orden por ruta, sorteo o necesidad de siembra", "Rotar quién va primero cada temporada"] },
            { title: "Tarifas y cuidado", bullets: ["Tarifa por acre u hora (cifras solo de ejemplo)", "Fondo de mantenimiento para reparaciones", "Operador capacitado; bitácora de horas y combustible"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Elige la máquina o el servicio de alquiler que necesita tu grupo. Haz una lista de las parcelas, los tamaños y las fechas de cinco socios, y luego escribe un calendario de reservas, la tarifa por acre, una regla de fondo de mantenimiento si la máquina es del grupo y qué pasa si se descompone.",
          youCanNow: "escribir un plan justo para alquilar o compartir un tractor o una máquina, con calendario, tarifas y mantenimiento.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué muchos grupos pequeños alquilan un servicio de tractor en vez de comprar uno?", options: ["Alquilar siempre es gratis", "En África no se pueden comprar tractores", "Comprar necesita mucho dinero, reparaciones, un operador y suficiente trabajo", "Los servicios de alquiler nunca llegan a tiempo"], answer: 2, why: "Tener un tractor trae grandes costos y necesidades; el alquiler en grupo puede dar acceso sin ellos." },
            { objective: "O3", q: "¿Para qué sirve un fondo de mantenimiento?", options: ["Para pagar un sueldo a quien preside", "Para pagar reparaciones y que la máquina siga funcionando", "Para comprar semilla", "Para pagar las reuniones"], answer: 1, why: "Apartar dinero para reparaciones evita que una avería acabe con la temporada." }
          ]
        },
        {
          title: "Comprar al por mayor, negociar y evitar insumos falsos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Planear una compra al por mayor de semilla o fertilizante, comparar tres cotizaciones y comprobar que los insumos son auténticos.",
          text: [
            "Primero junten los pedidos: el nombre de cada socio, el insumo, la cantidad y el anticipo pagado, todo escrito en un libro de pedidos y leído en voz alta. Sumen el total. Un pedido grande y seguro les da poder para negociar. Pidan a por lo menos tres proveedores registrados (agrodistribuidores, distribuidores o empresas) una cotización por escrito: precio por saco, entrega en su aldea, la fecha, la marca y la variedad, y cualquier descuento por el cargamento completo.",
            "Negocien más que el precio: entrega gratis o más barata, una fecha de entrega antes de la siembra, una demostración o capacitación gratis, pagar una parte al recibir, y un recibo a nombre del grupo. Comparen las cotizaciones por el costo total puesto en la aldea, no solo por el precio del saco. Nunca entreguen todo el dinero en efectivo a una sola persona; paguen desde la cuenta del grupo contra un recibo.",
            "La semilla, el fertilizante y el plaguicida falsos son un riesgo real. Compren solo a distribuidores registrados. Revisen los sellos, las etiquetas, los números de lote y las fechas, y que los sacos no estén rotos ni vueltos a coser. En Kenia, la semilla certificada la controla la KEPHIS (el servicio de inspección sanitaria vegetal); en Nigeria, el Consejo Nacional de Semillas Agrícolas (NASC) pide a los agricultores comprar a agrodistribuidores registrados y buscar su etiqueta de certificación; en Ghana, la Dirección de Servicios de Protección y Regulación Vegetal (PPRSD) regula la semilla y el fertilizante según la Ley de Plantas y Fertilizantes. Los plaguicidas deben estar en tu registro nacional. Guarden los recibos y una pequeña muestra, y denuncien los productos falsos ante el organismo nacional."
          ],
          steps: ["Junten el pedido y el anticipo de cada socio en un libro de pedidos; léanlo en voz alta.", "Consigan cotizaciones escritas de al menos tres proveedores registrados.", "Negocien precio, entrega, fecha, capacitación y condiciones de pago.", "Comparen el costo total puesto en la aldea y elijan; paguen desde la cuenta del grupo contra un recibo.", "Al recibir, revisen sellos, etiquetas, números de lote y etiquetas de certificación; repartan con un recibo por socio."],
          words: [["Compra al por mayor", "comprar juntos una gran cantidad para conseguir un precio más bajo o mejores condiciones."], ["Cotización", "el precio y las condiciones por escrito de un proveedor antes de comprar."], ["Agrodistribuidor", "una tienda o comerciante que vende semilla, fertilizante y otros insumos agrícolas."], ["Semilla certificada", "semilla revisada por el organismo nacional de semillas para confirmar que es de la variedad y la calidad correctas."]],
          slides: [
            { title: "Primero junten los pedidos", bullets: ["Nombre, insumo, cantidad, anticipo", "Escrito en un libro de pedidos y leído en voz alta", "Un pedido grande y seguro da poder para negociar"] },
            { title: "Tres cotizaciones, luego a negociar", bullets: ["Al menos tres proveedores registrados, por escrito", "Precio, entrega, fecha, capacitación, condiciones de pago", "Comparen el costo total puesto; recibo a nombre del grupo"] },
            { title: "Eviten los insumos falsos", bullets: ["Solo distribuidores registrados; revisen sellos, etiquetas, fechas", "Kenia: KEPHIS; Nigeria: etiqueta del NASC; Ghana: PPRSD", "Plaguicidas en el registro nacional; denuncien los falsos"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Haz una hoja de pedidos para al menos cinco socios (nombre, insumo, cantidad, anticipo). Escribe las preguntas que harás a tres proveedores registrados y una lista de revisión para el día de entrega que ayude a detectar semilla o fertilizante falsos.",
          youCanNow: "planear una compra de insumos al por mayor, negociar con tres proveedores y comprobar que la semilla y el fertilizante son auténticos.",
          quickCheck: [
            { objective: "O4", q: "¿Cómo debes comparar las cotizaciones de los proveedores?", options: ["Solo por el precio del saco", "Por cuál proveedor es tu amigo", "Por cuál tiene la tienda más grande", "Por el costo total puesto en la aldea, más la fecha, la calidad y las condiciones"], answer: 3, why: "Un precio bajo por saco puede esconder un transporte caro o una entrega tardía; compara el trato completo." },
            { objective: "O4", q: "Al recibir, algunos sacos de semilla parecen vueltos a coser y no tienen etiqueta de certificación. ¿Qué haces?", options: ["Los rechazas, guardas pruebas y lo denuncias ante el organismo de semillas", "Los aceptas para ahorrar tiempo", "Los repartes sin decir nada", "Los mezclas con semilla buena"], answer: 0, why: "Los sacos vueltos a coser y sin etiqueta son señales de semilla falsa; recházalos, guarda pruebas y denúncialo." }
          ]
        },
        {
          title: "Mantener la confianza: registros abiertos y manejo de conflictos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Llevar registros abiertos del dinero en común y resolver un desacuerdo con los pasos acordados.",
          text: [
            "Los grupos rara vez fracasan por falta de ideas; fracasan cuando los socios dejan de confiar en a dónde fue el dinero. Hagan que cada chelín, naira, cedi o franco sea fácil de seguir: un libro de pedidos para los anticipos, un recibo por cada pago que entra y sale, pagos desde una cuenta del grupo que aprueban dos personas, y una bitácora de la máquina si comparten una.",
            "Hagan abiertos los registros. Lean en voz alta el resumen del dinero en cada reunión: lo que entró, lo que salió, el saldo y qué se compró para quién. Pongan la lista de pedidos y el calendario donde los socios puedan verlos, o compartan una foto en el chat del grupo. Dejen que cualquier socio mire los libros. Cambien de vez en cuando a quién maneja el dinero.",
            "Habrá desacuerdos: alguien recibe el tractor tarde, falta un saco, un socio no paga. Usen los pasos de sus reglas: primero hablar directamente; luego el comité escucha a las dos partes y revisa los registros; luego decide todo el grupo; y si hace falta, pidan ayuda a una persona respetada de fuera, como el extensionista, el jefe o un funcionario de cooperativas. Decidan según los hechos de los registros, no según quién grita más. Asegúrense de que las mujeres y los jóvenes también puedan plantear problemas y de que sus quejas se escuchen."
          ],
          steps: ["Lleven un libro de pedidos, recibos, una cuenta del grupo con dos aprobadores y una bitácora.", "Lean en voz alta el resumen del dinero en cada reunión.", "Pongan las listas y los calendarios donde los socios puedan verlos.", "Resuelvan los desacuerdos con los pasos acordados, usando los registros.", "Roten los cargos de dinero y asegúrense de que todos puedan plantear un problema."],
          words: [["Transparencia", "mantener abiertos el dinero y las decisiones para que cada socio pueda verlos."], ["Mediador", "una persona respetada y neutral que ayuda a dos partes a resolver un desacuerdo."], ["Saldo", "el dinero que queda después de restar lo que salió de lo que entró."]],
          slides: [
            { title: "La confianza sigue al dinero", bullets: ["Libro de pedidos y recibos para todo", "Cuenta del grupo; dos aprobadores", "Bitácora de la máquina si comparten una"] },
            { title: "Registros abiertos", bullets: ["Lean en voz alta entradas, salidas y saldo", "Pongan listas y calendarios a la vista; compartan una foto", "Cualquier socio puede ver los libros"] },
            { title: "Resolver desacuerdos", bullets: ["Hablar directamente; el comité escucha a las dos partes", "Decide todo el grupo; mediador externo si hace falta", "Decidir según los registros; escuchar a mujeres y jóvenes"] }
          ],
          tryIt: "Tarea final: escribe tu plan de compra de insumos al por mayor o tu acuerdo para compartir maquinaria. Incluye a los socios, los registros que llevarás y leerás en voz alta, los pasos para resolver desacuerdos y los cargos que tendrán las mujeres y los jóvenes.",
          youCanNow: "mantener el dinero en común abierto y rastreable, resolver los desacuerdos con justicia y conservar la confianza de todos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué genera más confianza en un grupo que junta dinero?", options: ["Que el tesorero guarde los libros en su casa", "Leer en voz alta lo que entró, lo que salió y el saldo en cada reunión", "Pagar a los proveedores en efectivo sin recibo", "Que solo quien preside conozca el saldo"], answer: 1, why: "Los registros abiertos permiten que cada socio vea a dónde fue el dinero." },
            { objective: "O5", q: "Una socia dice que otra vez le llegó el tractor de última. ¿Cuál es el primer paso?", options: ["Sacarla del grupo", "Ignorarlo", "Hablar directamente y luego revisar el calendario y los registros", "Devolverle su dinero y cerrar el grupo"], answer: 2, why: "Seguir los pasos acordados y revisar los registros lo resuelve con justicia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Juntar recursos, comprar juntos y mantener la confianza",
        questions: [
          { objective: "O3", q: "¿Qué es un servicio de alquiler?", options: ["Una cuenta de ahorro del grupo", "Un proveedor que trae una máquina y hace el trabajo a cambio de una tarifa", "Una empresa de semillas", "Un préstamo del banco"], answer: 1, why: "Un servicio de alquiler permite a los agricultores usar un tractor o una máquina sin ser sus dueños." },
          { objective: "O3", q: "Todos quieren el tractor los mismos tres días. ¿Qué es lo justo?", options: ["Los amigos de quien preside van primero", "Quien grite más fuerte", "Quien pague más en secreto", "Un orden acordado por ruta, sorteo o necesidad de siembra, que rote cada temporada"], answer: 3, why: "Un orden acordado y rotativo es justo y ahorra combustible y viajes." },
          { objective: "O4", q: "¿Por qué juntar pedidos y anticipos antes de hablar con los proveedores?", options: ["Para gastar el dinero pronto", "Para no tener que escribir nada", "Un pedido grande y seguro da poder para negociar", "Los proveedores piden los PIN de los socios"], answer: 2, why: "Los proveedores dan mejores condiciones cuando saben que el pedido es real y grande." },
          { objective: "O4", q: "¿Cuál es una señal de fertilizante o semilla falsos?", options: ["Sacos rotos o vueltos a coser, sin etiqueta ni sello de certificación", "Un saco sellado con número de lote", "Un recibo de un distribuidor registrado", "Una etiqueta de certificación"], answer: 0, why: "Los sellos rotos y la falta de etiqueta o de sello de certificación son señales de alerta de insumos falsos." },
          { objective: "O5", q: "¿Quién debe aprobar los pagos de la cuenta del grupo?", options: ["Cualquiera que lo pida", "El proveedor", "Una sola persona", "Dos firmantes acordados"], answer: 3, why: "Dos aprobadores hacen más difícil que el dinero se use mal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Movilización comunitaria: compartir maquinaria y negociar insumos",
    questions: [
      { objective: "O1", q: "¿Qué es la movilización comunitaria?", options: ["Mudarse a la ciudad", "Reunir a la gente para actuar sobre una necesidad común", "Comprar un teléfono", "Vender los cultivos cada uno por su lado"], answer: 1, why: "Movilizar significa organizar a la gente en torno a una necesidad que comparte." },
      { objective: "O1", q: "¿A cuántos hogares debes preguntar como mínimo al mapear las necesidades?", options: ["A uno", "A dos", "Solo a los líderes", "A diez"], answer: 3, why: "Preguntar al menos a diez hogares da una imagen justa de las necesidades comunes." },
      { objective: "O1", q: "¿Por qué incluir a los jóvenes agricultores en el mapa de necesidades?", options: ["Sus problemas pueden ser distintos, como no tener título de la tierra o ser atendidos de últimos", "Tienen más dinero", "Son dueños de todos los tractores", "No hace falta"], answer: 0, why: "Los jóvenes y las mujeres pueden enfrentar obstáculos distintos que el grupo también debe resolver." },
      { objective: "O1", q: "Después de contar las respuestas, ¿qué haces?", options: ["Tiras la hoja", "Eliges la favorita del líder", "Ordenas las tres principales necesidades comunes", "Empiezas a juntar dinero"], answer: 2, why: "Ordenar muestra qué necesidades comparten más hogares." },
      { objective: "O2", q: "¿Qué debe incluir la invitación a la primera reunión?", options: ["Una lista de las deudas de los socios", "Nada, solo la hora", "Una exigencia de dinero", "Un propósito de una frase, la hora y el lugar"], answer: 3, why: "Un propósito claro le dice a la gente por qué vale la pena ir." },
      { objective: "O2", q: "¿Qué es un orden del día?", options: ["La lista de temas que tratará una reunión, en orden", "Una reserva de tractor", "Una cotización de un proveedor", "Un estado de cuenta del banco"], answer: 0, why: "Un orden del día mantiene la reunión corta y enfocada." },
      { objective: "O2", q: "¿Qué meta es más clara?", options: ["Hacerlo mejor este año", "Ayudar a todos", "La parcela de cada socio arada en las dos semanas siguientes a las primeras lluvias", "Conseguir máquinas algún día"], answer: 2, why: "Nombra un resultado y un plazo, así el grupo puede ver si lo logró." },
      { objective: "O2", q: "¿Qué regla debe acordarse antes de juntar dinero?", options: ["El color de las camisetas del grupo", "Cómo puede salir un socio y recuperar su dinero", "Dónde vive quien preside", "Qué emisora de radio escuchar"], answer: 1, why: "Las reglas sobre la salida y las devoluciones evitan disputas cuando se junta el dinero." },
      { objective: "O3", q: "¿Cuál suele ser el primer paso hacia la maquinaria para un grupo pequeño?", options: ["Comprar un tractor grande a crédito", "Construir una fábrica", "Que cada socio compre un tractor", "Alquilar juntos un servicio de tractor"], answer: 3, why: "El alquiler en grupo da acceso sin los grandes costos de ser dueño." },
      { objective: "O3", q: "¿Qué anota la bitácora de una máquina?", options: ["Los cumpleaños de los socios", "Horas, combustible, parcelas atendidas y reparaciones", "Los precios de los cultivos", "La asistencia a las reuniones"], answer: 1, why: "Una bitácora muestra cómo se usa y se mantiene la máquina." },
      { objective: "O3", q: "Arar tarde suele llevar a:", options: ["Cosechas más altas", "Ningún cambio", "Cosechas más bajas", "Fertilizante gratis"], answer: 2, why: "Arar y sembrar tarde cuesta cosecha, y por eso importa un calendario justo." },
      { objective: "O3", q: "Un grupo es dueño de una desgranadora de maíz. ¿De dónde sale el dinero para repararla?", options: ["De un fondo de mantenimiento apartado de las tarifas", "Del bolsillo de quien preside", "Del proveedor", "De ningún lado; se deja de usar"], answer: 0, why: "Un fondo de mantenimiento hecho con las tarifas mantiene la máquina funcionando." },
      { objective: "O4", q: "¿Cuántas cotizaciones escritas de proveedores debes comparar como mínimo?", options: ["Tres", "Una", "Ninguna", "Veinte"], answer: 0, why: "Tres cotizaciones muestran un precio justo y te dan margen para negociar." },
      { objective: "O4", q: "Además del precio, ¿qué puedes negociar?", options: ["El apellido del proveedor", "Los PIN de los socios", "La entrega en la aldea antes de la siembra", "Un precio más alto"], answer: 2, why: "La entrega, la fecha, la capacitación y las condiciones de pago valen tanto como el precio del saco." },
      { objective: "O4", q: "En Nigeria, ¿qué organismo advierte sobre la semilla falsa y usa una etiqueta de certificación?", options: ["KEPHIS", "El Consejo Nacional de Semillas Agrícolas (NASC)", "PPRSD", "KEBS"], answer: 1, why: "El NASC pide a los agricultores comprar a agrodistribuidores registrados y buscar su etiqueta de certificación." },
      { objective: "O4", q: "¿Cómo debe pagar el grupo al proveedor?", options: ["En efectivo entregado a un socio", "En la cuenta de un desconocido", "Sin ningún recibo", "Desde la cuenta del grupo, contra un recibo a nombre del grupo"], answer: 3, why: "Los pagos del grupo con recibo mantienen el dinero rastreable." },
      { objective: "O5", q: "¿Por qué leer en voz alta el resumen del dinero en las reuniones?", options: ["Para llenar el tiempo", "Para avergonzar a los socios", "Porque la ley exige cantar", "Para que los socios que no saben leer también vean a dónde fue el dinero"], answer: 3, why: "Leer en voz alta hace que los registros estén abiertos a todos los socios." },
      { objective: "O5", q: "¿Quién puede ayudar si el comité no logra resolver una disputa?", options: ["Una persona respetada de fuera, como un extensionista o un funcionario de cooperativas", "El proveedor", "Nadie", "El socio que grite más"], answer: 0, why: "Un mediador neutral puede ayudar a las dos partes a ponerse de acuerdo." },
      { objective: "O5", q: "¿En qué deben basarse las decisiones en una disputa?", options: ["En quién es mayor", "En quién grita más", "En los hechos de los registros", "En los rumores"], answer: 2, why: "Los registros muestran lo que de verdad pasó, así las decisiones son justas." },
      { objective: "O5", q: "¿Qué ayuda a que participen las mujeres y los jóvenes?", options: ["Cargos solo para jefes de hogar", "Cargos reales como tesorería o encargado de reservas", "Reuniones de noche y lejos", "Membresía solo con título de la tierra"], answer: 1, why: "Dar papeles reales a las mujeres y los jóvenes genera confianza y un grupo más fuerte." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte del plan y vuelve a intentarlo.",
    criteria: [
      { name: "Mapa de necesidades", objective: "O1", notYet: "La necesidad es una suposición del líder, o se preguntó a menos de diez hogares.", meets: "Se preguntó al menos a diez hogares, incluidas mujeres y jóvenes, con las tres principales necesidades ordenadas.", exceeds: "Incluye un mapa sencillo de la aldea con fincas, caminos, tiendas de insumos y máquinas." },
      { name: "Meta y reglas", objective: "O2", notYet: "No hay una meta clara, o no hay reglas escritas sobre el dinero y la salida.", meets: "Una meta con un número y una fecha, y reglas escritas sobre la entrada, las decisiones, el dinero, no pagar y la salida, acordadas en el acta.", exceeds: "Las reglas se leyeron en voz alta y el acuerdo de los socios está anotado con sus nombres." },
      { name: "Plan de maquinaria", objective: "O3", notYet: "No hay calendario ni tarifas, o no hay plan si la máquina se descompone.", meets: "Se decidió alquilar o comprar, con un calendario justo, tarifas, un fondo de mantenimiento o condiciones de alquiler, un operador y una regla para averías.", exceeds: "Un proveedor de alquiler o el dueño de la máquina confirmó el plan, y el primer lugar rota cada temporada." },
      { name: "Plan de compra al por mayor", objective: "O4", notYet: "No hay libro de pedidos, hay menos de tres cotizaciones o no se revisa si los insumos son falsos.", meets: "Pedidos y anticipos anotados, tres cotizaciones escritas comparadas por costo total puesto, pago desde la cuenta del grupo y una revisión el día de entrega para comprobar que los insumos son auténticos.", exceeds: "Muestra lo que se ganó al negociar (precio, entrega, capacitación) y nombra el organismo ante el que se denuncian los productos falsos." },
      { name: "Confianza e inclusión", objective: "O5", notYet: "Los registros los lleva una sola persona, o las mujeres y los jóvenes no tienen ningún papel.", meets: "Registros abiertos leídos en voz alta, pasos acordados para los desacuerdos y cargos con nombre para mujeres y jóvenes.", exceeds: "Los cargos de dinero rotan, y las mujeres y los jóvenes tienen al menos un cargo de liderazgo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Grupos que completan una compra de insumos al por mayor o una temporada de maquinaria compartida en 6 meses (encuesta de seguimiento)",
      "Socios que reportan pagar menos por saco o recibir el arado antes que cuando estaban solos",
      "Grupos sin disputas de dinero sin resolver después de una temporada, con los registros leídos en voz alta en las reuniones",
      "Proporción de cargos del grupo que ocupan mujeres y socios jóvenes"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono básico para llamadas, SMS y dinero móvil; un teléfono inteligente ayuda a tomar fotos de las listas",
      "Un cuaderno para el mapa de necesidades, las actas, el libro de pedidos y la bitácora",
      "Plantillas sencillas de reglas y de hoja de pedidos (el facilitador puede copiarlas de las lecciones)",
      "Sacos o etiquetas de muestra de semilla y fertilizante para practicar cómo detectar productos falsos",
      "Unos 90 minutos en total, en sesiones cortas, más tiempo para visitar hogares y proveedores"
    ],
    facilitatorNotes: [
      "Dé el curso con una aldea o un grupo real: hagan el mapa de necesidades y la primera reunión de verdad, entre una sesión y otra.",
      "Haga las sesiones a horas en que puedan asistir las mujeres y los jóvenes, e invítelos a presidir o a escribir el acta.",
      "Lleve sacos o etiquetas reales de insumos y pregunte al organismo nacional de semillas o de protección vegetal (KEPHIS, NASC, PPRSD o el organismo de su país) cómo revisarlos; no dé tarifas ni precios de memoria.",
      "Practiquen con un juego de roles una negociación con un proveedor y una disputa por una reserva de tractor tardía, usando registros de muestra.",
      "Califique la tarea final con la rúbrica; cuando el grupo esté listo para registrarse formalmente, recomiéndeles Cooperativas agrícolas y acceso al mercado."
    ]
  }
};

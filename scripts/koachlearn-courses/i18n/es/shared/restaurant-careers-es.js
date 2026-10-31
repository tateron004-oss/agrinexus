"use strict";

// Koach Learn course (Spanish translation of shared/restaurant-careers.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "restaurant-careers-es",
  lang: "es",
  translationOf: "restaurant-careers",
  category: "Workforce Development",
  name: "Carreras en restaurantes: mesero, cocinero y lo básico de la cocina",
  skills: "Trabajos y carreras en restaurantes, Tomar y repetir un pedido, Salario con propinas y sus reglas, Seguridad en la cocina, Preparar la estación y las comandas, Un plan para conseguir empleo",
  outcome: "elegir un trabajo de nivel inicial en un restaurante que vaya contigo, hacer bien sus tareas básicas (tomar un pedido, preparar una estación, trabajar con seguridad), revisar que tu pago con propinas sea correcto y seguir un plan de 30 días para conseguir empleo.",
  about: [
    "Los restaurantes contratan todo el año, y muchos contratan a personas sin experiencia: jóvenes que buscan su primer trabajo, adultos que cambian de carrera y personas que salen de prisión. Muchos cocineros, gerentes y dueños empezaron lavando platos, recogiendo mesas o recibiendo clientes.",
    "En este curso conocerás los trabajos del frente del restaurante (anfitrión, ayudante de mesero, mesero, bartender) y de la parte de atrás (lavaplatos, cocinero de preparación, cocinero de línea), cómo tomar un pedido sin errores, cómo funciona el pago con propinas según la ley federal de Estados Unidos, cómo cuidarte de los cuchillos, el calor y los pisos mojados, y cómo preparar una estación antes de la hora pico.",
    "Este curso te prepara; no te da una licencia ni un certificado. Te indica credenciales reales: una tarjeta de manipulador de alimentos (de tu estado o condado, o con un curso como ServSafe Food Handler de la National Restaurant Association, la asociación nacional de restaurantes), la capacitación para servir alcohol donde tu estado la exija, ProStart para estudiantes de preparatoria y, más adelante, la certificación de la American Culinary Federation (ACF) para cocineros.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" que puedes hacer en casa con papel y lápiz. Hay una revisión rápida después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu Plan de Empleo en Restaurantes en una página: el trabajo que quieres y dos lugares reales donde postularte, la credencial que obtendrás primero y su página oficial, tu disponibilidad semanal, una lista de tareas del turno para ese trabajo (preparación, durante el turno, cierre) y una presentación de 30 segundos de \"por qué contratarme\", con una fecha para cada paso en los próximos 30 días.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Grupo mixto: adolescentes y jóvenes que buscan su primer trabajo, adultos que cambian de carrera, personas que salen de prisión, inmigrantes y personas que hablan otro idioma. La mayoría ha comido en restaurantes pero no ha trabajado en uno. Algunos trabajarán en comida rápida, otros en restaurantes con servicio a la mesa y otros en cafeterías u hoteles.",
    startingPoint: "Pueden seguir instrucciones habladas, hacer cuentas sencillas de dinero y leer un menú corto. La mayoría no conoce las palabras del restaurante (frente, comanda, 86, \"detrás\"), cómo funciona el pago con propinas, qué tareas de cocina son peligrosas o prohibidas para adolescentes, ni cómo preparar una estación.",
    gap: "Los restaurantes contratan rápido, pero los trabajadores nuevos que no saben lo básico se equivocan en los pedidos, se lastiman con cuchillos, quemaduras y caídas, o renuncian en las primeras semanas. Conocer los trabajos, los hábitos de seguridad y las reglas de pago ayuda a conseguir empleo, conservarlo y subir de puesto, y protege de recibir menos pago del debido.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas (alrededor de 6.º grado)",
      "Dispositivos: un teléfono o una computadora de biblioteca; toda práctica se puede hacer en papel",
      "Tiempo: lecciones de 4 a 6 minutos entre la escuela, el trabajo o las citas",
      "Las habilidades prácticas con cuchillos, freidoras y equipos se aprenden en el trabajo o en una clase con un instructor calificado, no en este curso",
      "Las reglas de pago y de trabajo para adolescentes cambian según el estado; cada estudiante revisa la oficina laboral de su estado",
      "Algunos estudiantes tienen antecedentes; el curso indica empleadores de segunda oportunidad y no promete ningún empleo"
    ],
    prerequisites: "Ninguno. Quienes vayan a manipular alimentos deben tomar también \"Manipulador de alimentos y preparación para el examen ServSafe\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Dada una lista de trabajos de restaurante", action: "relacionar cada trabajo de nivel inicial con sus tareas principales y con la primera credencial o capacitación que ayuda a conseguirlo", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Dada una mesa de clientes en un juego de roles", action: "tomar un pedido en el orden correcto del servicio, preguntar por alergias y repetir el pedido", standard: "sin olvidar ningún plato ni cambio" },
    { id: "O3", condition: "Dada una semana de ejemplo con horas y propinas", action: "revisar que el pago con propinas llegue al mínimo federal y que ningún gerente se quedó con parte de las propinas", standard: "usando las reglas federales y diciendo dónde revisar la regla de tu estado" },
    { id: "O4", condition: "Dada una escena de cocina con un peligro", action: "nombrar el peligro y la acción segura para cuchillos, superficies calientes, pisos mojados, cargas pesadas o equipos que un adolescente no puede usar", standard: "para cada peligro de la escena" },
    { id: "O5", condition: "Dada una lista de preparación y un grupo de comandas", action: "preparar una estación con mise en place y anunciar con claridad las comandas y los movimientos en la cocina", standard: "con todo listo antes del servicio y sin anuncios perdidos" },
    { id: "O6", condition: "Usando tus propias metas y horario", action: "escribir un plan de 30 días para conseguir trabajo en un restaurante, con un puesto meta, una credencial, tu disponibilidad y una presentación", standard: "con una fecha y un enlace oficial para cada paso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El frente del restaurante",
      lessons: [
        {
          title: "Los trabajos en un restaurante y cómo subir",
          objectives: ["O1"],
          minutes: 5,
          goal: "Relacionar los trabajos de nivel inicial con sus tareas y con las credenciales que ayudan a conseguirlos.",
          text: [
            "Un restaurante tiene dos partes. El frente (FOH, por sus siglas en inglés) es donde están los clientes: el anfitrión los recibe y los sienta, el ayudante de mesero recoge y vuelve a poner las mesas, el mesero toma los pedidos y lleva la comida, el corredor lleva los platos y el bartender prepara las bebidas. La parte de atrás (BOH) es la cocina: el lavaplatos mantiene limpios los platos y utensilios, el cocinero de preparación corta y porciona la comida antes del servicio, y el cocinero de línea cocina los pedidos durante el servicio.",
            "Muchas personas empiezan como lavaplatos, ayudante de mesero o anfitrión y van subiendo: de lavaplatos a cocinero de preparación, a cocinero de línea y a subchef; de ayudante o anfitrión a mesero, a líder de turno y a gerente. Llegar a tiempo y aprender cada estación es la forma de subir.",
            "Las credenciales ayudan. Muchos estados o condados exigen una tarjeta de manipulador de alimentos; un curso como ServSafe Food Handler de la National Restaurant Association es una forma común de prepararse. Los meseros que sirven alcohol pueden necesitar la capacitación estatal para servir alcohol, como ServSafe Alcohol. Los estudiantes de preparatoria pueden unirse a ProStart, un programa de dos años de cocina y gestión de restaurantes. Más adelante, los cocineros pueden obtener certificaciones de la American Culinary Federation (ACF), como Certified Fundamentals Cook. El programa Restaurant Ready, que funciona con grupos comunitarios, capacita a personas que no están estudiando ni trabajando.",
            "Este curso te prepara; no te da ninguna tarjeta ni certificado. Revisa siempre lo que exigen tu estado, tu condado y tu empleador."
          ],
          words: [["Frente del restaurante (FOH)", "la parte del restaurante donde están los clientes: la entrada, el comedor y la barra."], ["Parte de atrás (BOH)", "la cocina, el área de lavado y el almacén."], ["Tarjeta de manipulador de alimentos", "una tarjeta que muestra que terminaste una capacitación aprobada en seguridad de alimentos; obligatoria en algunos estados y condados."], ["ProStart", "un programa de dos años en la preparatoria sobre cocina y gestión de restaurantes."], ["ACF", "la American Culinary Federation, que certifica a cocineros y chefs en Estados Unidos."]],
          slides: [
            { title: "El frente del restaurante", bullets: ["Anfitrión: recibe y sienta a los clientes", "Ayudante de mesero: recoge y vuelve a poner las mesas", "Mesero y corredor: pedidos y platos", "Bartender: bebidas"] },
            { title: "La parte de atrás", bullets: ["Lavaplatos: platos y utensilios limpios", "Cocinero de preparación: corta y porciona antes del servicio", "Cocinero de línea: cocina los pedidos durante el servicio"] },
            { title: "Cómo subir", bullets: ["De lavaplatos a cocinero de preparación, a cocinero de línea y a subchef", "De ayudante o anfitrión a mesero, a líder de turno y a gerente"] },
            { title: "Credenciales que ayudan", bullets: ["Tarjeta de manipulador de alimentos (regla del estado o condado)", "Capacitación para servir alcohol donde se exija", "ProStart (preparatoria) y más adelante ACF para cocineros"] }
          ],
          sources: [
            { name: "National Restaurant Association: ServSafe Alcohol y ServSafe Food Handler", url: "https://www.servsafe.com/ServSafe-Alcohol" },
            { name: "National Restaurant Association Educational Foundation: ProStart", url: "https://chooserestaurants.org/prostart" },
            { name: "National Restaurant Association Educational Foundation: Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "American Culinary Federation: certificación", url: "https://www.acfchefs.org/ACF/Certify/ACF/Certify/" }
          ],
          tryIt: "Dobla una hoja por la mitad. Escribe FOH de un lado y BOH del otro. Anota cada trabajo de esta lección en el lado correcto, con una tarea para cada uno. Encierra en un círculo el trabajo con el que te gustaría empezar y escribe la credencial que te ayudaría a conseguirlo.",
          youCanNow: "nombrar los trabajos del frente y de la parte de atrás de un restaurante, decir qué hace cada uno y nombrar una credencial que te ayuda a conseguir empleo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué trabajo está en la parte de atrás del restaurante?", options: ["Anfitrión", "Mesero", "Cocinero de preparación", "Bartender"], answer: 2, why: "El cocinero de preparación trabaja en la cocina; los demás trabajan donde están los clientes." },
            { objective: "O1", q: "Quieres servir bebidas con alcohol. ¿Qué capacitación podría exigir tu estado?", options: ["Capacitación para servir alcohol, como ServSafe Alcohol", "Una licencia de conducir comercial", "Una tarjeta de montacargas", "Nunca se exige ninguna capacitación"], answer: 0, why: "Muchos estados tienen reglas de capacitación para servir alcohol; revisa la página de tu estado." }
          ]
        },
        {
          title: "Cómo tomar bien un pedido",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tomar el pedido de una mesa, preguntar por alergias y repetir el pedido.",
          text: [
            "La mayoría de los errores ocurren al tomar el pedido. Un mesero que sigue los mismos pasos cada vez se equivoca menos y recibe mejores propinas.",
            "Saluda a la mesa en uno o dos minutos, di tu nombre y ofrece bebidas. Cuando estén listos, pregunta: \"¿Alguien tiene alguna alergia a alimentos que yo deba saber?\" Escribe el pedido por número de asiento, para que el corredor sepa a quién le toca cada plato. Escribe cada cambio, como sin cebolla o el aderezo aparte.",
            "Repite el pedido a la mesa antes de irte. Luego ingrésalo en el sistema de punto de venta (POS) o escribe la comanda con claridad. Si un cliente tiene una alergia, márcala en la comanda y avisa también en persona a la cocina o al gerente. Nunca adivines si un plato es seguro; pregunta en la cocina. Si un cliente tiene problemas para respirar o una reacción fuerte, llama al 911 (o al número de emergencias de tu país) y busca al gerente.",
            "Pasa a preguntar unos minutos después de que llegue la comida, recoge los platos cuando todos hayan terminado y lleva la cuenta cuando la mesa la pida o haya terminado claramente."
          ],
          steps: ["Saluda a la mesa, di tu nombre y ofrece bebidas.", "Pregunta por alergias a alimentos.", "Escribe el pedido por número de asiento, con cada cambio.", "Repite el pedido.", "Ingrésalo en el POS o escribe una comanda clara; marca cualquier alergia y avisa a la cocina en persona.", "Pasa a preguntar cuando llegue la comida; recoge y lleva la cuenta."],
          words: [["Pasos del servicio", "el orden de tareas que sigue un mesero con cada mesa."], ["Número de asiento", "un número para cada silla, para que cada plato llegue al cliente correcto."], ["POS", "sistema de punto de venta: la pantalla donde se ingresan y se cobran los pedidos."], ["Comanda", "el pedido impreso o en pantalla con el que cocina la cocina."], ["Modificador", "un cambio en un plato, como sin cebolla o salsa extra."]],
          slides: [
            { title: "Saluda y pregunta", bullets: ["Saluda en uno o dos minutos; di tu nombre", "Ofrece bebidas", "Pregunta: \"¿Alguien tiene alguna alergia a alimentos?\""] },
            { title: "Escríbelo bien", bullets: ["Escribe por número de asiento", "Escribe cada cambio (modificador)", "Repite el pedido a la mesa"] },
            { title: "Alergias", bullets: ["Márcala en la comanda", "Avisa en persona a la cocina o al gerente", "Nunca adivines; una reacción fuerte es llamar al 911"] },
            { title: "Termina la mesa", bullets: ["Pasa a preguntar cuando llegue la comida", "Recoge cuando todos hayan terminado", "Lleva la cuenta"] }
          ],
          tryIt: "Haz un juego de roles con un amigo o un familiar (o haz los dos papeles en voz alta). Toma un pedido para tres personas con cualquier menú, por número de asiento, con al menos un cambio y una alergia. Repítelo. Luego revisa tu hoja: ¿están todos los platos y cambios?",
          youCanNow: "tomar un pedido paso a paso, preguntar por alergias, escribirlo por número de asiento y repetirlo.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué se escribe un pedido por número de asiento?", options: ["Para que la cuenta sea más alta", "Para que cada plato llegue al cliente correcto", "Porque el POS necesita un número de teléfono", "Para no tener que repetirlo"], answer: 1, why: "Con los números de asiento, cualquiera que lleve la comida pone cada plato frente a la persona correcta." },
            { objective: "O2", q: "Una clienta dice que es alérgica al cacahuate (maní). ¿Qué haces?", options: ["Le dices que la comida seguramente está bien", "Lo anotas y esperas que el cocinero lo vea", "Eliges tú un plato por ella", "Lo marcas en la comanda y avisas a la cocina en persona"], answer: 3, why: "Una alergia se marca y se dice en voz alta a la cocina; nunca adivinas si un plato es seguro." }
          ]
        },
        {
          title: "Tu pago: salario por hora, propinas y crédito de propinas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Revisar que una semana de pago con propinas llegue al mínimo federal y que las propinas se manejaron según la ley.",
          text: [
            "Según la ley federal (la Fair Labor Standards Act, ley de normas laborales justas), un empleador puede pagar a un empleado que recibe propinas un salario en efectivo de solo $2.13 por hora y contar las propinas para completar el resto del salario mínimo federal de $7.25. Esto se llama crédito de propinas. Un empleado con propinas es quien recibe normalmente más de $30 al mes en propinas.",
            "La regla: tu salario en efectivo más tus propinas deben llegar al menos a $7.25 por cada hora que trabajas en la semana. Si no llegan, tu empleador debe pagar la diferencia. Muchos estados fijan un salario mínimo más alto, y algunos, como California, Minnesota y Washington, exigen el salario mínimo estatal completo antes de las propinas. Revisa tu estado en la página de salarios con propinas del Departamento de Trabajo de Estados Unidos.",
            "Tus propinas son tuyas. Un empleador no puede quedarse con ninguna parte. Un fondo común de propinas, donde las propinas se reparten entre los trabajadores, está permitido, pero los gerentes y supervisores no pueden tomar propinas del fondo.",
            "El IRS (la agencia federal de impuestos) dice que lleves un registro diario de tus propinas y que informes a tu empleador las propinas en efectivo de $20 o más en un mes, a más tardar el día 10 del mes siguiente. Las propinas son ingresos que pagan impuestos, así que informarlas te protege."
          ],
          steps: ["Suma las horas que trabajaste esta semana.", "Multiplica las horas por $7.25 (o por el mínimo de tu estado, si es más alto).", "Suma tu salario en efectivo y tus propinas de la semana.", "Si el total es menor que el mínimo, el empleador debe la diferencia.", "Revisa la regla de tu estado en la página de salarios con propinas del Departamento de Trabajo de Estados Unidos."],
          words: [["Crédito de propinas", "la parte del salario mínimo que un empleador puede cubrir con propinas (federal: hasta $5.12 por hora)."], ["Salario en efectivo", "el pago por hora que te da directamente tu empleador, antes de las propinas."], ["Fondo común de propinas", "un sistema en el que las propinas se juntan y se reparten entre los trabajadores."], ["FLSA", "la Fair Labor Standards Act, la ley federal sobre salario mínimo, horas extra y trabajo infantil."]],
          slides: [
            { title: "El crédito federal de propinas", bullets: ["El salario en efectivo puede ser de solo $2.13 por hora", "Las propinas pueden contar para el mínimo de $7.25", "Tu estado puede exigir más"] },
            { title: "Haz la cuenta", bullets: ["Horas x $7.25 = lo mínimo que debes recibir", "Salario en efectivo + propinas deben llegar a eso", "Si no, el empleador paga la diferencia"] },
            { title: "Tus propinas son tuyas", bullets: ["El empleador no puede quedarse con ninguna parte", "Los fondos comunes de propinas están permitidos", "Los gerentes no pueden tomar del fondo"] },
            { title: "Lleva un registro", bullets: ["Anota tus propinas cada día", "Informa a tu empleador $20 o más al mes", "A más tardar el día 10 del mes siguiente (IRS)"] }
          ],
          sources: [
            { name: "Departamento de Trabajo de EE. UU.: Hoja informativa 15, empleados con propinas bajo la FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" },
            { name: "Departamento de Trabajo de EE. UU.: salarios mínimos para empleados con propinas por estado", url: "https://www.dol.gov/agencies/whd/state/minimum-wage/tipped" },
            { name: "IRS: registro e informe de propinas", url: "https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting" }
          ],
          tryIt: "Solo práctica, con números inventados. Sam trabajó 20 horas, le pagaron un salario en efectivo de $2.13 y recibió $70 en propinas. Haz la cuenta: 20 x $7.25 = $145. Salario en efectivo 20 x $2.13 = $42.60. $42.60 + $70 = $112.60. ¿Alcanza? ¿Cuánto debe el empleador? (Respuesta: $32.40.) Luego busca tu propio estado en la página de salarios con propinas del Departamento de Trabajo y escribe su regla.",
          youCanNow: "revisar que una semana de pago con propinas llegue al salario mínimo, detectar una práctica ilegal con las propinas y llevar un registro de tus propinas.",
          quickCheck: [
            { objective: "O3", q: "Según la ley federal, ¿a cuánto deben llegar el salario en efectivo más las propinas por cada hora?", options: ["Al menos $7.25", "Al menos $2.13", "Al menos $30", "Lo que decida el gerente"], answer: 0, why: "El salario en efectivo más las propinas deben llegar al mínimo federal de $7.25, o el empleador paga la diferencia." },
            { objective: "O3", q: "Tu gerente toma una parte del fondo de propinas cada noche. ¿Qué es cierto?", options: ["Es normal y legal", "Solo es legal los fines de semana", "Los gerentes y supervisores no pueden tomar propinas de un fondo común", "Es legal si el gerente también recoge mesas"], answer: 2, why: "La FLSA prohíbe que los gerentes y supervisores reciban propinas de un fondo común." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El frente del restaurante",
        questions: [
          { objective: "O1", q: "¿Qué trabajo suele cocinar los pedidos de los clientes durante el servicio?", options: ["Anfitrión", "Cocinero de línea", "Ayudante de mesero", "Corredor de comida"], answer: 1, why: "Los cocineros de línea cocinan los pedidos en la línea durante el servicio." },
          { objective: "O1", q: "Una estudiante de preparatoria quiere capacitarse en restaurantes con mentores y competencias. ¿Qué programa le sirve?", options: ["Un curso de CDL (licencia comercial)", "El GED", "Capacitación de montacargas", "ProStart"], answer: 3, why: "ProStart es un programa de dos años en la preparatoria sobre cocina y gestión de restaurantes." },
          { objective: "O2", q: "¿Qué haces justo después de escribir el pedido de una mesa?", options: ["Repetir el pedido a la mesa", "Llevar la cuenta", "Recoger los platos", "Sentar a los siguientes clientes"], answer: 0, why: "Repetirlo detecta errores antes de que la cocina empiece a cocinar." },
          { objective: "O2", q: "Un cliente tiene problemas para respirar después de comer. ¿Qué haces primero?", options: ["Llevarle agua y esperar", "Preguntar al cocinero qué tenía el plato", "Llamar al 911 (o al número de emergencias de tu país) y buscar al gerente", "Ofrecerle un postre gratis"], answer: 2, why: "Una reacción alérgica fuerte es una emergencia; pide ayuda de inmediato." },
          { objective: "O3", q: "Trabajaste 10 horas con un salario en efectivo de $2.13 y recibiste $20 en propinas. Según las reglas federales, ¿el empleador debe pagar más?", options: ["No, $20 en propinas alcanzan", "Sí; $21.30 + $20 = $41.30, que es menos de $72.50", "No, las propinas nunca cuentan", "Sí, pero solo si lo pides por escrito"], answer: 1, why: "10 horas x $7.25 = $72.50, así que el empleador debe cubrir la diferencia de $31.20." }
        ]
      }
    },
    {
      name: "Capítulo 2: Lo básico de la cocina y cómo conseguir empleo",
      lessons: [
        {
          title: "Seguridad en la cocina: cuchillos, calor, pisos y reglas para adolescentes",
          objectives: ["O4"],
          minutes: 6,
          goal: "Nombrar los peligros comunes de la cocina y la acción segura para cada uno.",
          text: [
            "La guía de OSHA (la agencia federal de seguridad en el trabajo) para jóvenes en restaurantes nombra los peligros principales de la cocina: cortes con cuchillos y máquinas, quemaduras con freidoras, planchas y líquidos calientes, resbalones y caídas en pisos mojados, lesiones por cargar cosas pesadas y peligros eléctricos. Tu empleador debe darte un lugar de trabajo seguro y capacitarte.",
            "Cuchillos: usa un cuchillo afilado sobre una tabla con un paño húmedo debajo para que no se deslice. Dobla los dedos de la mano guía. Nunca intentes atrapar un cuchillo que se cae. Llévalo con la punta hacia abajo, a tu costado, y di \"cuchillo\" mientras caminas. Nunca dejes un cuchillo en un fregadero con agua. Quemaduras: di \"caliente\" o \"caliente, detrás\" cuando lleves algo caliente, usa paños secos o guantes de cocina (un paño mojado deja pasar el calor) y deja los mangos de las sartenes hacia adentro. Pisos: usa zapatos cerrados y antideslizantes, y limpia los derrames enseguida o pon un letrero de piso mojado. Cargar: dobla las rodillas, mantén la carga cerca del cuerpo y pide ayuda con las cajas pesadas.",
            "Adolescentes: las reglas federales de trabajo infantil limitan el trabajo en la cocina. A los 14 y 15 años no puedes hornear, cocinar con fuego directo, usar la mayoría de las freidoras (solo las que suben y bajan las canastas solas) ni usar rebanadoras, molinos, procesadoras o batidoras eléctricas. A los 16 y 17 años todavía no puedes usar, limpiar ni armar rebanadoras de carne, molinos de carne ni batidoras industriales. A los 14 y 15 años también hay límites de horario. Tu estado puede tener reglas más estrictas.",
            "Las técnicas con cuchillo, el uso de la freidora y los equipos se aprenden en persona con un cocinero o instructor capacitado. Si te lastimas o ves un peligro, avisa a tu gerente de inmediato."
          ],
          steps: ["Busca el peligro: filo, calor, agua en el piso, carga pesada, máquina.", "Usa el hábito seguro: mano guía, paño seco, avisar en voz alta, limpiar el derrame, cargar con las piernas.", "Si tienes menos de 18 años, revisa si la tarea o la máquina está permitida para tu edad.", "Avisa a un gerente de cualquier peligro o lesión."],
          words: [["OSHA", "la Occupational Safety and Health Administration, la agencia federal de seguridad y salud en el trabajo."], ["Mano guía", "la mano que sostiene la comida mientras la otra corta; con las puntas de los dedos dobladas hacia adentro."], ["Zapatos antideslizantes", "zapatos de trabajo cerrados con suelas que se agarran a pisos mojados o grasosos."], ["Reglas de trabajo infantil", "leyes sobre qué trabajos y horarios se permiten a los trabajadores menores de 18 años."]],
          slides: [
            { title: "Peligros principales en la cocina (OSHA)", bullets: ["Cortes con cuchillos y máquinas", "Quemaduras con freidoras, planchas y líquidos calientes", "Resbalones, caídas y lesiones al cargar"] },
            { title: "Hábitos con cuchillos y calor", bullets: ["Dobla la mano guía; nunca atrapes un cuchillo que cae", "Di \"cuchillo\", \"caliente\", \"detrás\" al moverte", "Paños secos o guantes; mangos hacia adentro"] },
            { title: "Pisos y cargas", bullets: ["Zapatos cerrados y antideslizantes", "Limpia los derrames ya o pon un letrero", "Dobla las rodillas; pide ayuda con cargas pesadas"] },
            { title: "Reglas para adolescentes (federales)", bullets: ["14-15: no hornear, fuego directo, la mayoría de las freidoras ni rebanadoras o batidoras eléctricas", "16-17: no rebanadoras de carne, molinos ni batidoras industriales", "Tu estado puede ser más estricto"] }
          ],
          sources: [
            { name: "OSHA: eTool de seguridad para jóvenes trabajadores en restaurantes", url: "https://www.osha.gov/etools/young-workers-restaurant-safety" },
            { name: "Departamento de Trabajo de EE. UU.: Hoja informativa 2A, reglas de trabajo infantil en restaurantes", url: "https://www.dol.gov/agencies/whd/fact-sheets/2a-child-labor-restaurants" },
            { name: "Departamento de Trabajo de EE. UU.: YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Dibuja una cocina sencilla en papel: una estufa, una freidora, una tabla de cortar, un fregadero y una cámara fría. Marca tres peligros con una X (por ejemplo, un derrame cerca de la freidora, un cuchillo en el fregadero, el mango de una sartén hacia afuera). Junto a cada X, escribe la acción segura. Luego escribe qué tareas de tu dibujo no podría hacer alguien de 15 años.",
          youCanNow: "detectar peligros en la cocina, usar el hábito seguro para cada uno y decir qué tareas de cocina están prohibidas para adolescentes.",
          quickCheck: [
            { objective: "O4", q: "Un cuchillo se resbala del mostrador. ¿Qué haces?", options: ["Lo atrapas por el mango", "Lo pateas lejos", "Lo agarras con un paño", "Te haces hacia atrás y lo dejas caer"], answer: 3, why: "Nunca intentes atrapar un cuchillo que cae; hazte hacia atrás y recógelo cuando esté en el piso." },
            { objective: "O4", q: "Le piden a alguien de 15 años que rebane carne en una rebanadora eléctrica. ¿Qué es cierto?", options: ["Está bien si usa guantes", "Las reglas federales no lo permiten a los 15 años", "Está bien los fines de semana", "Está bien si un amigo lo vigila"], answer: 1, why: "Las reglas federales de trabajo infantil prohíben a los jóvenes de 14 y 15 años (y de 16 y 17) usar rebanadoras de carne eléctricas." }
          ]
        },
        {
          title: "Preparar la estación, las comandas y los avisos en la cocina",
          objectives: ["O5"],
          minutes: 5,
          goal: "Preparar una estación a partir de una lista de preparación y anunciar con claridad las comandas y los movimientos.",
          text: [
            "Mise en place (se dice \"mis an plas\") es francés y significa \"todo en su lugar\". Antes del servicio, un cocinero lee la lista de preparación, alista cada ingrediente, utensilio y recipiente, y los pone en el mismo lugar todos los días, para que no falte nada cuando empiece la hora pico.",
            "Durante el servicio, los pedidos llegan como comandas, impresas o en una pantalla de cocina. El expedidor (expo) o el chef anuncia cada comanda. Tú respondes \"oído\" o \"sí, chef\" para que sepan que la recibiste. Cocina primero las comandas más antiguas y avisa al chef enseguida si se te está acabando algo; cuando un producto se acaba, está \"86\".",
            "Las cocinas son estrechas y movidas, así que la gente anuncia sus movimientos: \"detrás\" cuando pasas detrás de alguien, \"esquina\" cuando das vuelta en una esquina sin visibilidad, \"caliente\" o \"cuchillo\" cuando llevas algo peligroso. Limpia sobre la marcha: limpia tu tabla, guarda los utensilios y mantén tu estación ordenada."
          ],
          steps: ["Lee la lista de preparación de tu estación.", "Junta cada ingrediente, utensilio y recipiente de la lista.", "Ponlos en el mismo lugar cada vez; etiqueta y pon fecha a los recipientes.", "Revisa la lista otra vez antes del servicio: que no falte nada.", "Durante el servicio: responde \"oído\" a cada anuncio, cocina primero las comandas más antiguas, anuncia tus movimientos y limpia sobre la marcha."],
          words: [["Mise en place", "en francés, todo en su lugar: todos los ingredientes y utensilios listos antes de cocinar."], ["Lista de preparación", "la lista de lo que hay que cortar, porcionar o hacer antes del servicio."], ["Expo (expedidor)", "la persona que anuncia las comandas y revisa cada plato antes de que salga."], ["Oído", "lo que dice un cocinero para mostrar que escuchó un anuncio."], ["86", "palabra de cocina para un producto que se acabó."]],
          slides: [
            { title: "Mise en place", bullets: ["Todo en su lugar, antes del servicio", "Lee la lista de preparación; júntalo todo", "Mismo lugar cada día; etiqueta y pon fecha"] },
            { title: "Comandas", bullets: ["El expo anuncia la comanda", "Responde \"oído\"", "Primero las más antiguas", "¿Se te acaba algo? Avisa al chef: puede estar 86"] },
            { title: "Anuncia tus movimientos", bullets: ["\"Detrás\" cuando pasas detrás de alguien", "\"Esquina\" en una esquina sin visibilidad", "\"Caliente\" y \"cuchillo\" cuando llevas algo peligroso"] },
            { title: "Limpia sobre la marcha", bullets: ["Limpia tu tabla", "Guarda los utensilios", "Una estación ordenada es una estación rápida"] }
          ],
          tryIt: "Elige un plato sencillo que puedas hacer en casa, como un sándwich o una ensalada. Escribe una lista de preparación para hacerlo para 10 personas. Luego arma tu mise en place en una mesa: cada ingrediente y utensilio que necesitas, en su lugar antes de empezar. Escribe una cosa que habrías olvidado sin la lista.",
          youCanNow: "preparar una estación con mise en place, responder y trabajar las comandas en orden y anunciar tus movimientos en una cocina llena de trabajo.",
          quickCheck: [
            { objective: "O5", q: "¿Qué significa mise en place?", options: ["Cocinar primero la comanda más nueva", "Limpiar solo al cerrar", "Todo en su lugar, listo antes del servicio", "Un tipo de salsa francesa"], answer: 2, why: "Mise en place significa que cada ingrediente y utensilio está listo antes de empezar a cocinar." },
            { objective: "O5", q: "Pasas detrás de un cocinero con una sartén caliente. ¿Qué dices?", options: ["\"Caliente, detrás\"", "\"Oído\"", "\"86\"", "Nada, para no hacer ruido"], answer: 0, why: "Decir \"caliente, detrás\" avisa al cocinero para que no dé un paso hacia atrás y choque contigo." }
          ]
        },
        {
          title: "Conseguir empleo: tu plan de trabajo en restaurantes",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Escribir un plan de 30 días para conseguir tu primer trabajo en un restaurante.",
          text: [
            "Los restaurantes suelen contratar rápido, a veces la misma semana. Muchos te piden postularte en línea o en persona y pueden invitarte a una entrevista corta o a una entrevista de trabajo práctica (un stage, se dice \"stash\"), en la que trabajas parte de un turno para que te vean. Pregunta si la entrevista práctica es pagada; según la ley federal, el tiempo que pasas haciendo trabajo productivo para el negocio suele ser tiempo de trabajo que se debe pagar.",
            "A los gerentes les importan sobre todo tres cosas: cuándo puedes trabajar, si llegas a tiempo y si eres amable y tienes ganas de aprender. Los fines de semana, las noches y los días festivos son los momentos de más trabajo, así que estar disponible entonces ayuda. Ve a postularte en persona entre las horas de comida (por ejemplo, a media tarde), no durante el almuerzo ni la cena.",
            "Si tienes antecedentes, muchos restaurantes contratan a personas con antecedentes. Sé honesto cuando te pregunten, sé breve y habla de lo que has hecho desde entonces, como capacitaciones, trabajo y tu tarjeta de manipulador de alimentos. Programas como Restaurant Ready y los centros locales de reinserción y de empleo pueden ponerte en contacto con empleadores.",
            "Tu plan lo une todo: el trabajo que quieres, la credencial que obtendrás primero, tu disponibilidad, una lista de tareas del turno y una presentación de 30 segundos."
          ],
          steps: ["Elige un trabajo para empezar y dos lugares reales donde postularte.", "Elige una credencial para obtener primero (por ejemplo, una tarjeta de manipulador de alimentos) y busca su página oficial.", "Escribe tu disponibilidad semanal.", "Escribe una lista de tareas del turno para el trabajo: preparación, durante el turno, cierre.", "Escribe una presentación de 30 segundos: quién eres, cuándo puedes trabajar y por qué serás confiable.", "Pon una fecha a cada paso en los próximos 30 días."],
          words: [["Entrevista práctica (stage)", "un turno corto de prueba para que el restaurante vea cómo trabajas."], ["Disponibilidad", "los días y horas en que puedes trabajar cada semana."], ["Presentación", "una introducción hablada y corta que dice por qué deberían contratarte."], ["Empleador de segunda oportunidad", "un empleador dispuesto a contratar a personas con antecedentes penales."]],
          slides: [
            { title: "Cómo contratan los restaurantes", bullets: ["Postúlate en línea o en persona", "Entrevista corta o entrevista práctica (stage)", "Pregunta si la entrevista práctica es pagada"] },
            { title: "Lo que buscan los gerentes", bullets: ["Tu disponibilidad, sobre todo noches y fines de semana", "Puntual, siempre", "Amable y con ganas de aprender"] },
            { title: "Si tienes antecedentes", bullets: ["Muchos restaurantes contratan a personas con antecedentes", "Sé honesto y breve", "Habla de tu capacitación y trabajo desde entonces"] },
            { title: "Tu plan de 30 días", bullets: ["Trabajo y dos lugares donde postularte", "Primera credencial y su página oficial", "Disponibilidad, lista del turno, presentación, fechas"] }
          ],
          sources: [
            { name: "National Restaurant Association Educational Foundation: Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "Departamento de Trabajo de EE. UU.: YouthRules (permisos de trabajo y horarios para adolescentes)", url: "https://www.dol.gov/agencies/whd/youthrules" },
            { name: "Departamento de Trabajo de EE. UU.: Hoja informativa 15, empleados con propinas bajo la FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" }
          ],
          tryIt: "Tarea final: haz tu Plan de Empleo en Restaurantes en una página. Escribe el trabajo que quieres y dos lugares reales donde postularte, la credencial que obtendrás primero y su página oficial, tu disponibilidad semanal, una lista de tareas del turno (preparación, durante, cierre) y una presentación de 30 segundos. Pon una fecha a cada paso en los próximos 30 días. Lee la presentación en voz alta dos veces.",
          youCanNow: "escribir un plan de 30 días para conseguir trabajo en un restaurante y dar una presentación corta a un gerente de contratación.",
          quickCheck: [
            { objective: "O6", q: "¿Cuándo es un buen momento para entrar a postularte en un restaurante?", options: ["En plena hora pico del almuerzo", "Entre las horas de comida, por ejemplo a media tarde", "Justo a la hora de cerrar", "Durante la cena del viernes"], answer: 1, why: "Los gerentes tienen tiempo para hablar entre las horas pico, no cuando hay clientes esperando." },
            { objective: "O6", q: "¿Qué presentación es la más fuerte?", options: ["\"Necesito cualquier trabajo.\"", "\"La verdad no me gustan las mañanas.\"", "\"Puedo trabajar a cualquier hora, creo.\"", "\"Soy Jordan. Puedo trabajar noches y fines de semana, tengo mi tarjeta de manipulador de alimentos y siempre llego a tiempo.\""], answer: 3, why: "Dice quién eres, tu disponibilidad, una credencial y por qué serás confiable." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Lo básico de la cocina y cómo conseguir empleo",
        questions: [
          { objective: "O4", q: "¿Qué debes usar para agarrar el mango de una sartén caliente?", options: ["Un paño mojado", "Una servilleta de papel", "Un paño seco o un guante de horno", "Tu delantal"], answer: 2, why: "Un paño mojado deja pasar el calor y te puede quemar; un paño seco o un guante te protege." },
          { objective: "O4", q: "Ves un charco de aceite cerca de la freidora. ¿Qué haces?", options: ["Lo limpias ya o pones un letrero de piso mojado y avisas a alguien", "Pasas por encima", "Esperas a la hora de cerrar", "Lo cubres con un paño y lo dejas"], answer: 0, why: "Los derrames causan resbalones y caídas; límpialos de inmediato o avisa a los demás." },
          { objective: "O5", q: "El expo anuncia una comanda para tu estación. ¿Qué respondes?", options: ["\"Detrás\"", "\"86\"", "\"Esquina\"", "\"Oído\""], answer: 3, why: "\"Oído\" le dice al expo que recibiste el pedido." },
          { objective: "O5", q: "Casi no te queda pollo en medio del servicio. ¿Qué haces?", options: ["No dices nada y esperas que alcance", "Avisas al chef enseguida para que lo marquen 86 o preparen más", "Usas otra carne sin preguntar", "Dejas tu estación para cocinar más"], answer: 1, why: "El chef necesita saberlo a tiempo para que los meseros dejen de venderlo o se prepare más." },
          { objective: "O6", q: "Un restaurante te pide trabajar tres horas como entrevista práctica. ¿Qué es inteligente preguntar?", options: ["Si ese tiempo es pagado", "Si puedes saltarte la entrevista", "Si puedes empezar como gerente", "Nada; nunca hagas preguntas"], answer: 0, why: "Según la ley federal, el trabajo productivo para el negocio suele ser tiempo de trabajo pagado, así que es justo preguntar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Carreras en restaurantes: mesero, cocinero y lo básico de la cocina",
    questions: [
      { objective: "O1", q: "¿Qué trabajo recoge y vuelve a poner las mesas?", options: ["Cocinero de línea", "Ayudante de mesero", "Cocinero de preparación", "Lavaplatos"], answer: 1, why: "El ayudante de mesero recoge y vuelve a poner las mesas en el comedor." },
      { objective: "O1", q: "¿Cuál es una forma común de subir en la cocina?", options: ["De anfitrión a bartender y a chef", "De cocinero de línea a lavaplatos y a ayudante de mesero", "De lavaplatos a cocinero de preparación y a cocinero de línea", "De mesero a lavaplatos y a anfitrión"], answer: 2, why: "Muchos cocineros empiezan lavando platos y luego pasan a la preparación y a la línea." },
      { objective: "O1", q: "¿Qué organización certifica a cocineros y chefs, con niveles como Certified Fundamentals Cook?", options: ["La American Culinary Federation", "OSHA", "El IRS", "El DMV"], answer: 0, why: "La American Culinary Federation (ACF) otorga certificaciones para cocineros y chefs." },
      { objective: "O1", q: "¿Terminar este curso te da una tarjeta de manipulador de alimentos?", options: ["Sí, automáticamente", "Sí, si apruebas el examen", "Solo en California", "No; te prepara, y la tarjeta viene de un curso aprobado o de tu estado o condado"], answer: 3, why: "El curso te prepara; la tarjeta viene de una capacitación aprobada que acepta tu estado o condado." },
      { objective: "O2", q: "¿Qué debe preguntar un mesero a cada mesa antes de tomar el pedido de comida?", options: ["Cuánto piensan dejar de propina", "Si alguien tiene alguna alergia a alimentos", "Dónde trabajan", "Si quieren la cuenta ya"], answer: 1, why: "Preguntar temprano por alergias mantiene seguros a los clientes." },
      { objective: "O2", q: "Un cliente pide una hamburguesa sin cebolla. ¿Dónde va \"sin cebolla\"?", options: ["En la comanda como un cambio, junto a ese número de asiento", "En ningún lado; te vas a acordar", "Solo en la cuenta", "En una nota adhesiva para el anfitrión"], answer: 0, why: "Cada cambio se escribe junto al asiento y se ingresa en la comanda para que la cocina lo vea." },
      { objective: "O2", q: "¿Por qué se repite el pedido a la mesa?", options: ["Para que la mesa espere más", "Porque es una ley", "Para detectar errores antes de que la cocina cocine", "Para recibir más propina"], answer: 2, why: "Repetirlo detecta a tiempo platos que faltan y cambios equivocados." },
      { objective: "O3", q: "¿Cuál es el salario mínimo federal en efectivo para un empleado con propinas?", options: ["$7.25", "$5.12", "$30.00", "$2.13"], answer: 3, why: "La ley federal permite un salario en efectivo de solo $2.13 por hora si las propinas llevan el pago hasta $7.25." },
      { objective: "O3", q: "¿Quién NO puede tomar propinas de un fondo común?", options: ["Los meseros", "Los ayudantes de mesero", "Los gerentes y supervisores", "Los corredores de comida"], answer: 2, why: "La FLSA prohíbe a los gerentes y supervisores tomar dinero del fondo de propinas." },
      { objective: "O3", q: "¿Dónde puedes revisar la regla de salario con propinas de tu estado?", options: ["En la página de salarios con propinas del Departamento de Trabajo de EE. UU. o en la oficina laboral de tu estado", "En una publicación de redes sociales", "En el menú del restaurante", "Con un cliente de tu mesa"], answer: 0, why: "El Departamento de Trabajo publica la regla de cada estado, y la oficina laboral del estado tiene los detalles." },
      { objective: "O3", q: "Según el IRS, ¿qué tipo de registro de propinas debes llevar?", options: ["Un cálculo aproximado al año", "Un registro diario de propinas", "Ningún registro", "Solo un registro de las propinas con tarjeta"], answer: 1, why: "El IRS dice que lleves un registro diario de propinas e informes a tu empleador $20 o más al mes." },
      { objective: "O4", q: "¿Cómo debes llevar un cuchillo por la cocina?", options: ["Con la punta hacia arriba, sobre la cabeza", "En el bolsillo del delantal", "Detrás de la espalda, sin decir nada", "Con la punta hacia abajo a tu costado, diciendo \"cuchillo\""], answer: 3, why: "La punta hacia abajo a tu costado y el aviso en voz alta te protegen a ti y a quienes te rodean." },
      { objective: "O4", q: "¿Qué tipo de zapatos es el más seguro en una cocina?", options: ["Sandalias", "Zapatos cerrados y antideslizantes", "Los zapatos que quieras", "Solo calcetines"], answer: 1, why: "Los zapatos cerrados y antideslizantes protegen los pies y se agarran a pisos mojados o grasosos." },
      { objective: "O4", q: "¿Qué tarea NO puede hacer alguien de 14 o 15 años según las reglas federales?", options: ["Usar el lavavajillas", "Recoger mesas", "Hornear", "Usar una tostadora"], answer: 2, why: "Las reglas federales dicen que los jóvenes de 14 y 15 años no pueden hornear." },
      { objective: "O4", q: "Te lastimas la mano con una rebanadora. ¿Qué haces?", options: ["Avisas a tu gerente de inmediato", "Lo escondes para que no te manden a casa", "Sigues trabajando y no le dices a nadie", "Esperas a la próxima semana"], answer: 0, why: "Avisar de inmediato te da atención y ayuda a evitar el peligro para los demás." },
      { objective: "O5", q: "¿Cuándo debe estar terminada la mise en place?", options: ["Después de la hora pico", "Al cerrar", "A mitad del servicio", "Antes de que empiece el servicio"], answer: 3, why: "Todo se prepara antes del servicio para que no falte nada en la hora pico." },
      { objective: "O5", q: "En una cocina, ¿qué significa \"86\"?", options: ["La mesa tiene 86 clientes", "El producto se acabó", "Poner el horno a 86 grados", "El cocinero está en su descanso"], answer: 1, why: "86 significa que un producto se acabó y no se puede vender." },
      { objective: "O5", q: "¿Qué comandas debes cocinar primero?", options: ["Las más antiguas", "Las más nuevas", "Las más fáciles", "Las más grandes"], answer: 0, why: "Trabajar en orden mantiene justos los tiempos de espera para todas las mesas." },
      { objective: "O6", q: "¿Qué parte va en tu plan de 30 días para trabajar en restaurantes?", options: ["La contraseña de tu banco", "Una lista de restaurantes que no te gustan", "Tu disponibilidad semanal", "Tu número de Seguro Social"], answer: 2, why: "La disponibilidad es de lo primero que pregunta un gerente; los números privados nunca van en un plan." },
      { objective: "O6", q: "Un gerente te pregunta por tus antecedentes. ¿Cuál es una buena forma de responder?", options: ["Inventar una historia", "Enojarte e irte", "Hablar diez minutos sobre el caso", "Ser honesto y breve, y luego hablar de tu capacitación y trabajo desde entonces"], answer: 3, why: "Una respuesta corta y honesta que pasa a lo que has hecho desde entonces muestra que estás listo para trabajar." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 7, 8, 11, 13, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila dice Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Trabajo y lugares donde postularte", objective: "O1", notYet: "No hay un trabajo claro o no nombra lugares reales.", meets: "Nombra un trabajo para empezar con sus tareas principales y dos lugares reales donde postularse.", exceeds: "También nombra el siguiente puesto y lo que se necesita para llegar a él." },
      { name: "Credencial con página oficial", objective: "O1", notYet: "No hay credencial, o el enlace no es oficial.", meets: "Nombra una credencial (por ejemplo, una tarjeta de manipulador de alimentos) y su página oficial del estado, del condado o del programa.", exceeds: "También indica si el trabajo exige capacitación para servir alcohol o, para un adolescente, algún permiso de trabajo estatal." },
      { name: "Lista de tareas del turno", objective: "O5", notYet: "Faltan tareas de preparación, durante el turno o de cierre.", meets: "Enumera tareas de preparación, durante el turno y de cierre para el trabajo, incluida la mise en place o el montaje de las mesas.", exceeds: "Agrega los avisos en voz alta y los pasos sobre alergias que usa el trabajo." },
      { name: "Seguridad y pago", objective: "O4", notYet: "El plan no tiene hábitos de seguridad ni revisión del pago.", meets: "Enumera dos hábitos de seguridad para el trabajo y cómo comparar el pago con propinas o por hora con el mínimo.", exceeds: "Para un adolescente, nombra las tareas que no puede hacer a su edad; para un trabajo con propinas, nombra la regla del estado." },
      { name: "Presentación y fechas", objective: "O6", notYet: "No hay presentación, o los pasos no tienen fechas.", meets: "Una presentación de 30 segundos con disponibilidad y confiabilidad, y una fecha para cada paso en los próximos 30 días.", exceeds: "La presentación se practicó en voz alta con otra persona y se mejoró." }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Estudiantes que obtienen una tarjeta de manipulador de alimentos o la capacitación para servir alcohol en 30 días (encuesta de seguimiento)",
      "Estudiantes que se postulan al menos en dos restaurantes en 30 días, y quienes son contratados",
      "Estudiantes que siguen trabajando en servicio de comidas después de 90 días, e informes de los socios sobre menos lesiones y errores en los pedidos en el primer mes"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Papel y lápiz; un menú impreso o en línea de cualquier restaurante local para el juego de roles del pedido",
      "Un teléfono o una computadora de biblioteca para buscar las páginas oficiales",
      "Para la Lección 5: algunos objetos de cocina o imágenes para armar una mise en place",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Haz la Lección 2 como un juego de roles en vivo en parejas, un cliente y un mesero, y luego cambien; califícalo con la lista de pasos del pedido.",
      "No des cuchillos reales a los estudiantes ni uses equipos en este curso; las técnicas con cuchillo y freidora las enseña en persona un cocinero o instructor capacitado.",
      "Con grupos de jóvenes, repasa antes de la Lección 4 las reglas federales de trabajo infantil, las reglas más estrictas de tu estado y el trámite del permiso de trabajo.",
      "Con grupos de reinserción, invita a la Lección 6 a un empleador local de segunda oportunidad o al socio de Restaurant Ready de la asociación de restaurantes de tu estado.",
      "Las cuentas de propinas de la Lección 3 usan solo números inventados; revisa las cifras federales y estatales actuales en las páginas del Departamento de Trabajo antes de enseñar."
    ]
  }
};

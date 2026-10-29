"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-cooperatives-markets.js). See scripts/koachlearn-courses/README.md, "Translations".

const ICA = { name: "Alianza Cooperativa Internacional: la identidad, los valores y los principios cooperativos", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law: Co-operative Societies Act (registro por medio del Commissioner for Co-operative Development)", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Nigerian Co-operative Societies Act (directores federal y estatales de cooperativas; estatutos; auditoría anual)", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Servicio de Información de Ghana: el gobierno empieza la reforma del sector cooperativo (Department of Co-operatives)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Sistema de Información de Mercados Agrícolas de Kenia (KAMIS), Ministerio de Agricultura", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets-es",
  lang: "es",
  translationOf: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Cooperativas agrícolas y acceso al mercado",
  skills: "Explicar por qué los agricultores se agrupan, Escribir los estatutos y registrar un grupo, Dirigir reuniones y llevar los registros del grupo, Juntar la producción y vender en conjunto, Consultar los precios del mercado por teléfono, Leer un contrato con un comprador",
  outcome: "ayudar a crear o fortalecer un grupo de agricultores: acordar sus estatutos, saber dónde registrarlo, dirigir reuniones y llevar registros claros, juntar la producción de los socios y venderla en conjunto a un precio revisado, y leer un contrato con un comprador antes de que alguien lo firme.",
  about: [
    "Este curso es para pequeños agricultores y agricultores en crecimiento, líderes de grupos de productores y de cooperativas, y jóvenes que trabajan en agronegocios en Kenia, Nigeria, Ghana y en toda África. Solo, un agricultor con cinco costales de maíz o unas cuantas cajas de tomate acepta el precio que le ofrezca el comerciante. Juntos, un grupo puede comprar insumos más baratos, cumplir el pedido de un comprador grande y negociar un mejor precio.",
    "El capítulo 1 trata de construir el grupo: por qué los agricultores se agrupan, cómo formar un grupo de productores o una cooperativa (estatutos y registro) y cómo dirigirlo bien con reuniones y registros. El capítulo 2 trata de llegar al mercado: juntar la producción y vender en conjunto, consultar los precios por teléfono y hacer contratos con los compradores.",
    "Las leyes de cooperativas, las oficinas de registro y los costos cambian según el país y con el tiempo. Este curso nombra las oficinas a las que hay que acudir; siempre confirma con ellas las reglas vigentes antes de registrarte. Cada lección dura unos cinco minutos y termina con una tarea que puedes hacer con tu grupo. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de venta en grupo de una página para un cultivo (el de tu grupo, o un ejemplo como 25 productores de maíz en Bungoma, un grupo de mujeres que siembran tomate en Kaduna o un grupo de cacao o de caupí cerca de Tamale): el nombre y el propósito del grupo, cinco reglas clave de los estatutos, dónde lo registrarías y qué tienes que revisar, los registros que vas a llevar, cómo van a entregar los socios, cómo se va a clasificar su producto y cómo se les va a pagar, los precios que encontraste en al menos tres fuentes, y las seis condiciones del contrato que vas a revisar antes de firmar con un comprador.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Pequeños agricultores y agricultores que están creciendo, líderes de grupos de agricultores y de cooperativas, y jóvenes que trabajan en agronegocios en Kenia, Nigeria, Ghana y en toda África que quieren comprar y vender en conjunto.",
    startingPoint: "La mayoría vende poco y por su cuenta en la puerta de la finca y acepta el precio del intermediario. Algunos están en un grupo informal o una chama. Pocos tienen estatutos escritos, llevan registros del grupo, han organizado un día de acopio, han revisado precios en varias fuentes o han leído un contrato con un comprador antes de firmarlo.",
    gap: "Solos, los agricultores tienen poco poder para negociar, y muchos grupos fracasan por poca confianza, malos registros, la venta por fuera y los pagos tardíos. Un grupo bien llevado, con reglas claras, registros, precios revisados y contratos por escrito, puede cumplir los pedidos de los compradores grandes, comprar insumos más baratos y ganar más para sus socios.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; cada término de grupos y de mercados se explica",
      "Dispositivos: un teléfono básico para SMS, WhatsApp, consultar precios y la calculadora; libros de registro en papel",
      "Las leyes, las oficinas y las tarifas de cooperativas cambian según el país y con el tiempo: hay que revisarlas con la oficina de cooperativas",
      "Dinero y privacidad: dos personas aprueban los pagos; nunca compartas el PIN ni datos bancarios con herramientas de IA ni con quien llame",
      "No es asesoría legal: los contratos grandes los revisa la oficina de cooperativas, el extensionista o un abogado"
    ],
    prerequisites: "Ninguno. \"Manejo y almacenamiento después de la cosecha\" ayuda con la clasificación y la calidad."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para tu finca y tus vecinos", action: "hacer la lista de lo que un grupo podría hacer y un agricultor solo no puede, y de los riesgos que hay que manejar", standard: "nombrando al menos tres ventajas y tres razones comunes por las que fracasan los grupos" },
    { id: "O2", condition: "Para un grupo de agricultores nuevo o que ya existe", action: "redactar las reglas principales de los estatutos y nombrar la oficina donde se registraría el grupo", standard: "con al menos cinco reglas clave y los pasos vigentes revisados con la oficina" },
    { id: "O3", condition: "Para una reunión del grupo y su dinero", action: "dirigir una reunión con orden del día y acta, y armar los registros básicos del grupo", standard: "con un padrón de socios, un libro de caja, un libro de entregas y un registro de pagos, y dos personas que aprueban los pagos" },
    { id: "O4", condition: "En un día de acopio", action: "revisar, clasificar, pesar, registrar y pagar la producción de cada socio", standard: "pesando frente al socio, dándole un recibo y pagando según los registros" },
    { id: "O5", condition: "Antes de vender", action: "comparar precios de al menos tres fuentes y calcular el precio de una oferta en tu finca", standard: "restando el transporte, las cuotas y las pérdidas, y detectando las ofertas que son estafas" },
    { id: "O6", condition: "Ante un contrato con un comprador", action: "revisar las condiciones clave antes de que el grupo firme", standard: "cubriendo el producto, la clase, la cantidad, el precio, la entrega, las revisiones de calidad, el pago, el incumplimiento y los desacuerdos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Construir un grupo de agricultores fuerte",
      lessons: [
        {
          objectives: ["O1"],
          title: "Por qué los agricultores se agrupan",
          minutes: 4,
          goal: "Hacer la lista de lo que un grupo podría hacer por tu finca y tú solo no puedes, y de los riesgos que hay que manejar.",
          text: [
            "La Alianza Cooperativa Internacional define una cooperativa como una asociación de personas que se unen de forma voluntaria para atender necesidades económicas, sociales y culturales comunes por medio de una empresa que es de todos y que controlan de forma democrática. Los socios son a la vez los dueños y los usuarios.",
            "Los grupos ayudan a los agricultores a: comprar semilla, fertilizante y alimento para animales al mayoreo a precios más bajos; juntar la producción en cargas de camión como las que quieren los compradores grandes; negociar mejores precios; compartir bodegas, secadores, transporte y equipo; conseguir capacitación, certificación y crédito, que los prestamistas dan más fácil a un grupo con registros; y hablar con una sola voz ante el gobierno y los compradores.",
            "Los grupos también fracasan. Las razones comunes son la poca confianza, los líderes que se adueñan del control, los malos registros, los socios que le venden a otros compradores después de que el grupo cerró un trato, y los pagos tardíos. El resto de este curso trata de cómo evitar estos problemas. Hay desde grupos informales de autoayuda o de productores hasta sociedades cooperativas registradas; un grupo puede empezar de manera informal y registrarse después."
          ],
          words: [["Cooperativa", "una empresa que es de sus socios y que ellos controlan, y cuyos servicios ellos mismos usan."], ["Grupo de productores", "agricultores que siembran el mismo cultivo y trabajan juntos, estén registrados o no."], ["Compra al mayoreo", "comprar en conjunto grandes cantidades para conseguir un precio más bajo."], ["Venta por fuera", "cuando un socio le vende a otro comprador después de que el grupo acordó vender en conjunto."]],
          slides: [
            { title: "Qué es una cooperativa (ACI)", bullets: ["Personas que se unen de forma voluntaria", "Una empresa que es de todos", "Control democrático: los socios son dueños y usuarios"] },
            { title: "Lo que pueden hacer los grupos", bullets: ["Comprar insumos al mayoreo, más baratos", "Llenar camiones para compradores grandes; negociar", "Compartir bodegas y transporte; capacitación y crédito"] },
            { title: "Por qué fracasan los grupos", bullets: ["Poca confianza; líderes que se adueñan del control", "Malos registros; pagos tardíos", "Venta por fuera después de un trato del grupo"] }
          ],
          sources: [ICA],
          tryIt: "Escribe tres cosas que un grupo podría hacer por tu finca y tú solo no puedes, y el riesgo que más te preocupa. Pregunta a dos vecinos qué querrían de un grupo y anota sus respuestas.",
          youCanNow: "explicar qué es una cooperativa, qué puede hacer un grupo por los agricultores y las principales razones por las que los grupos fracasan.",
          quickCheck: [
            { objective: "O1", q: "¿Qué tipos de grupos de agricultores hay?", options: ["Desde grupos informales de autoayuda o de productores hasta sociedades cooperativas registradas", "Solo empresas registradas", "Solo oficinas del gobierno", "Solo grupos de más de 1,000 agricultores"], answer: 0, why: "Hay desde grupos informales de autoayuda o de productores hasta cooperativas registradas." },
            { objective: "O1", q: "Tus vecinos quieren vender maíz juntos, pero todavía no están listos para registrarse. ¿Qué pueden hacer?", options: ["Esperar a poder registrarse antes de hacer cualquier cosa", "Que cada quien venda solo para siempre", "Pedirle a un intermediario que sea su líder", "Empezar como grupo informal y registrarse después"], answer: 3, why: "Un grupo puede empezar de manera informal y registrarse después." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Formar el grupo: estatutos y registro",
          minutes: 6,
          goal: "Redactar las reglas principales de los estatutos de un grupo y averiguar dónde registrarlo.",
          text: [
            "Empieza con personas que siembran el mismo cultivo o necesitan el mismo servicio, que viven bastante cerca para reunirse y que se tienen confianza. Acuerden un propósito claro, como \"vender juntos nuestro maíz y comprar insumos al mayoreo\". Hagan una primera reunión, escriban el acta y elijan un comité provisional.",
            "Los estatutos son las reglas escritas del grupo. Normalmente incluyen: nombre, dirección y propósito; quién puede entrar y cómo; cuotas de ingreso y aportaciones; reuniones, quórum y votación (las cooperativas usan un socio, un voto); el comité, sus poderes y cuánto dura en el cargo; cómo se guarda y se revisa el dinero; cómo se reparte cualquier excedente; y cómo se sanciona a los socios que rompen las reglas. Tu oficina de cooperativas muchas veces tiene estatutos modelo que puedes adaptar.",
            "El registro le da al grupo personalidad jurídica para tener bienes, abrir una cuenta de banco a su nombre, firmar contratos y pedir préstamos. Las reglas cambian según el país. En Kenia, las sociedades se registran bajo la Co-operative Societies Act (ley de sociedades cooperativas) por medio del Commissioner for Co-operative Development (comisionado de desarrollo cooperativo), empezando en la oficina de cooperativas del condado. En Nigeria, la Co-operative Societies Act dice que una sociedad primaria necesita al menos diez socios que cumplan los requisitos y presenta su solicitud, con sus estatutos, al State Director of Co-operatives (director estatal de cooperativas). En Ghana, los grupos se registran en el Department of Co-operatives (departamento de cooperativas) por medio de su oficina de distrito. Los costos, los formularios y los pasos cambian, así que visita o llama a la oficina antes de presentar la solicitud."
          ],
          steps: ["Acuerden el propósito del grupo en una sola oración.", "Hagan una primera reunión; escriban el acta y los nombres de los socios.", "Elijan un comité provisional: presidente, secretario, tesorero.", "Consigan estatutos modelo en su oficina de cooperativas y adáptenlos.", "Acuerden las reglas clave en una reunión de socios y anoten la votación.", "Visiten la oficina de cooperativas: pidan los formularios, costos y pasos vigentes."],
          words: [["Estatutos", "las reglas escritas que un grupo acuerda seguir."], ["Quórum", "el número mínimo de socios que deben estar presentes para que cuenten las decisiones de una reunión."], ["Un socio, un voto", "cada socio tiene un voto, sin importar cuántas aportaciones tenga."], ["Registro", "el reconocimiento oficial que le da al grupo personalidad jurídica."]],
          slides: [
            { title: "Empieza bien", bullets: ["Mismo cultivo o necesidad; cerca; confianza", "Propósito en una oración", "Primera reunión, acta, comité provisional"] },
            { title: "Qué incluyen los estatutos", bullets: ["Propósito, membresía, cuotas y aportaciones", "Reuniones, quórum, un socio un voto", "Comité, dinero, excedente, sanciones"] },
            { title: "Dónde registrarlo", bullets: ["Kenia: oficina del condado / Commissioner for Co-operative Development", "Nigeria: State Director of Co-operatives", "Ghana: oficina de distrito del Department of Co-operatives"] },
            { title: "Antes de presentar la solicitud", bullets: ["Las reglas, formularios y costos cambian", "Visita o llama primero a la oficina", "Pide estatutos modelo"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Escribe cinco reglas de los estatutos de tu grupo: quién puede entrar, la cuota de ingreso o la aportación, cada cuánto se reúnen y el quórum, cómo se vota, y qué pasa si un socio vende por fuera. Luego busca la dirección o el teléfono de la oficina de cooperativas más cercana.",
          youCanNow: "redactar las reglas principales de los estatutos de un grupo de agricultores y saber dónde registrarlo en tu país.",
          quickCheck: [
            { objective: "O2", q: "¿Qué le da el registro a un grupo de agricultores?", options: ["Un precio garantizado", "Insumos gratis", "Personalidad legal para tener bienes, abrir una cuenta de banco, firmar contratos y pedir préstamos", "Un sueldo del gobierno"], answer: 2, why: "El registro le da al grupo personalidad legal para tener bienes, usar el banco, firmar contratos y pedir préstamos." },
            { objective: "O2", q: "Tu grupo está escribiendo sus estatutos y no sabe por dónde empezar. ¿Qué haces?", options: ["Copiar de internet las reglas de una empresa", "Pedir a la oficina de cooperativas estatutos modelo para adaptarlos", "Dejar que el presidente los escriba solo", "Saltarse los estatutos"], answer: 1, why: "Las oficinas de cooperativas muchas veces tienen estatutos modelo que los grupos pueden adaptar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dirigir el grupo: reuniones y registros",
          minutes: 5,
          goal: "Dirigir una reunión corta con orden del día y acta, y armar los registros básicos del grupo.",
          text: [
            "Las buenas reuniones crean confianza. Manda antes la fecha y el orden del día (sirve un SMS o un mensaje de WhatsApp), empieza a tiempo, revisa que haya quórum, sigue el orden del día, deja hablar a cada socio, voten las decisiones y escribe el acta: quién vino, qué se decidió y quién va a hacer qué y para cuándo. Lee el acta anterior al empezar cada reunión. Hagan una asamblea general anual donde los socios escuchen las cuentas y elijan al comité.",
            "Los registros son la memoria del grupo y su prueba ante los compradores, los bancos y la oficina de cooperativas. Lleva por lo menos: un padrón de socios (nombres, contactos, aportaciones pagadas), un libro de caja con todo el dinero que entra y sale y sus recibos, un libro de entregas que muestre lo que entregó cada socio, su calidad y su peso, y un registro de pagos que muestre cuánto se le pagó a cada socio. La Co-operative Societies Act de Nigeria, por ejemplo, exige que las cuentas de una sociedad registrada se auditen cada año.",
            "Protege el dinero: usa una cuenta de banco o de dinero móvil del grupo, haz que dos personas firmen o aprueben cada pago, da recibo por cada chelín, naira o cedi, y lee las cuentas en voz alta en las reuniones. Una hoja de cálculo en el teléfono o una aplicación gratuita pueden guardar los registros, pero ten también una copia en papel, y nunca compartas PIN ni contraseñas."
          ],
          steps: ["Manda antes la fecha y el orden del día.", "Revisa el quórum; sigue el orden del día; voten las decisiones.", "Escribe el acta: quién vino, qué se decidió, quién hace qué y para cuándo.", "Arma cuatro registros: socios, libro de caja, entregas, pagos.", "Usa una cuenta del grupo con dos firmantes; da recibos.", "Lee las cuentas en voz alta en cada reunión; audítenlas una vez al año."],
          words: [["Orden del día", "la lista de temas de una reunión."], ["Acta", "el registro escrito de lo que decidió una reunión."], ["Asamblea general anual", "la reunión de cada año de todos los socios para escuchar las cuentas y elegir a los líderes."], ["Auditoría", "una revisión independiente de las cuentas del grupo."], ["Firmante", "una persona autorizada para aprobar pagos de una cuenta."]],
          slides: [
            { title: "Buenas reuniones", bullets: ["Orden del día enviado antes; empezar a tiempo", "Revisar quórum; todos hablan; se vota", "Acta: decisiones, quién hace qué y para cuándo"] },
            { title: "Cuatro registros básicos", bullets: ["Padrón de socios", "Libro de caja con recibos", "Libro de entregas y registro de pagos"] },
            { title: "Protege el dinero", bullets: ["Cuenta del grupo; dos firmantes", "Recibo por cada pago", "Cuentas en voz alta; auditoría cada año"] }
          ],
          sources: [NG_ACT],
          tryIt: "Escribe un orden del día con cuatro temas para la próxima reunión de tu grupo. Luego dibuja las columnas de un libro de entregas: fecha, nombre del socio, cultivo, calidad, peso, quién lo recibió.",
          youCanNow: "dirigir una reunión del grupo con orden del día y acta, y llevar los registros que crean confianza.",
          quickCheck: [
            { objective: "O3", q: "¿Qué pasa en una asamblea general anual?", options: ["El comprador fija el precio", "Los socios escuchan las cuentas y eligen al comité", "El grupo vende su almacén", "Solo habla el presidente"], answer: 1, why: "En la asamblea general anual, los socios escuchan las cuentas y eligen al comité." },
            { objective: "O3", q: "Hoy diriges la reunión y hay quórum. ¿Qué haces primero?", options: ["Leer el acta de la reunión anterior", "Pedir dinero", "Saltarse el orden del día", "Terminar la reunión temprano"], answer: 0, why: "Leer el acta anterior al empezar mantiene a todos al día y genera confianza." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Construir un grupo de agricultores fuerte",
        questions: [
          { objective: "O1", q: "En una cooperativa, ¿quién es dueño de la empresa y la controla?", options: ["El comprador", "El gobierno", "Los socios", "Solo el presidente"], answer: 2, why: "Los socios son dueños de la cooperativa, la controlan y la usan." },
          { objective: "O1", q: "Un socio le vende a otro comerciante después de que el grupo cerró un trato. Esto se llama:", options: ["Compra al mayoreo", "Venta por fuera", "Acopio", "Auditoría"], answer: 1, why: "La venta por fuera rompe los tratos del grupo y es una razón común de que los grupos fracasen." },
          { objective: "O2", q: "En Nigeria, ¿dónde solicita su registro una sociedad cooperativa primaria?", options: ["Con el State Director of Co-operatives", "En la policía", "En la federación de fútbol", "En cualquier banco"], answer: 0, why: "La Co-operative Societies Act manda las solicitudes, con los estatutos, al director de cooperativas." },
          { objective: "O3", q: "¿Qué es el quórum?", options: ["La cuenta de banco del grupo", "Un tipo de cultivo", "El descanso para el té de la reunión", "El número mínimo de socios que se necesita para que cuenten las decisiones"], answer: 3, why: "Sin quórum, las decisiones de una reunión no son válidas." },
          { objective: "O3", q: "¿Qué práctica protege mejor el dinero del grupo?", options: ["Una persona guarda todo el efectivo en su casa", "Nada de recibos, para ahorrar papel", "Dos firmantes, recibos y cuentas leídas en voz alta", "Compartir el PIN con todos los socios"], answer: 2, why: "Dos personas que aprueban, recibos y cuentas abiertas hacen más difíciles los robos y los errores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Llegar juntos al mercado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Acopio y venta en conjunto",
          minutes: 5,
          goal: "Organizar un día de acopio en el que la producción de los socios se revise, se pese, se registre y se pague de forma justa.",
          text: [
            "Acopiar es juntar las cantidades pequeñas de muchos socios en un solo lote grande y parejo. Los compradores grandes, como las procesadoras, los molinos, las escuelas, los supermercados y los exportadores, quieren volúmenes constantes de una misma calidad, entregados a tiempo. Un grupo que puede llenar un camión con producto limpio, seco y clasificado puede venderles a ellos y ganar más que vendiendo en la finca.",
            "Organiza un punto o un día de acopio con reglas claras: la calidad que quiere el comprador (por ejemplo, maíz seco, limpio y seleccionado con la humedad máxima del comprador), una báscula de confianza y un registro de cada entrega. Revisa y clasifica el producto de cada socio, pésalo frente a él, anótalo en el libro de entregas y dale un recibo. Guarda el lote de forma segura hasta que el comprador lo recoja.",
            "Paga a los socios según los registros: el peso por el precio acordado para su calidad, menos cualquier cuota del grupo acordada para transporte, almacenamiento o costales, todo decidido de antemano y escrito en los estatutos o en el acta. Paga a tiempo, por dinero móvil o por el banco cuando se pueda. Un pago rápido, justo y abierto es la mejor defensa contra la venta por fuera."
          ],
          steps: ["Acuerden las reglas de calidad del comprador y avisen a todos los socios de antemano.", "Fijen el día y el lugar de acopio, y una báscula de confianza.", "Revisen, clasifiquen y pesen cada entrega frente al socio.", "Anótenla en el libro de entregas; den un recibo.", "Guarden el lote de forma segura; entréguenlo juntos al comprador.", "Paguen a cada socio a tiempo según los registros, menos las cuotas acordadas."],
          words: [["Acopio", "juntar muchas cantidades pequeñas en un solo lote grande."], ["Punto de acopio", "un lugar al que los socios llevan su producto para que lo revisen y lo registren."], ["Lote", "un conjunto de producto del mismo tipo y la misma calidad."]],
          slides: [
            { title: "Por qué acopiar", bullets: ["Los compradores grandes quieren volumen, calidad y puntualidad", "Llenar un camión con una sola calidad", "Mejor precio que en la finca"] },
            { title: "Día de acopio", bullets: ["Las reglas de calidad del comprador, conocidas antes", "Clasificar y pesar frente al socio", "Anotarlo y dar un recibo"] },
            { title: "Paga justo y rápido", bullets: ["Peso x precio de su calidad", "Menos las cuotas acordadas antes", "A tiempo, por dinero móvil o banco"] }
          ],
          tryIt: "Planea un día de acopio para tu grupo: fecha, lugar, báscula, las reglas de calidad del comprador, quién registra y la cuota del grupo por costal o por kilo acordada de antemano. Escribe cómo y cuándo se les va a pagar a los socios.",
          youCanNow: "organizar un día de acopio justo y pagar a los socios según registros claros.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un punto o un día de acopio?", options: ["Una fiesta para los socios", "Una sucursal del banco", "La oficina de un comprador", "Un lugar y un día en que los socios traen su producción para revisarla, pesarla y registrarla"], answer: 3, why: "En un punto de acopio, la producción se revisa, se clasifica, se pesa, se registra y se guarda hasta que el comprador la recoge." },
            { objective: "O4", q: "El maíz de un socio está más húmedo de lo que permite el comprador. ¿Qué haces en el punto de acopio?", options: ["Mezclarlo con maíz seco para que nadie se dé cuenta", "Pagarle el doble al socio", "No agregarlo al lote hasta que se seque según la norma del comprador", "Esconderlo en el fondo del camión"], answer: 2, why: "El lote tiene que cumplir la calidad del comprador, así que la producción se revisa y se clasifica antes de aceptarla." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Consultar los precios del mercado por teléfono",
          minutes: 5,
          goal: "Encontrar precios en al menos tres fuentes y calcular cuánto vale de verdad una oferta en tu finca.",
          text: [
            "Nunca vendas sin saber el precio. Pregunta a por lo menos tres compradores, escucha los reportes de mercado en la radio y consulta los servicios oficiales de información de mercados. En Kenia, el sistema KAMIS del Ministerio de Agricultura publica precios al mayoreo, al menudeo y en la finca de muchos cultivos y animales, de mercados de todos los condados. En Nigeria y Ghana, pregunta en tu oficina de extensión, en la asociación de tu producto o en la unión de cooperativas qué servicio de precios cubre tu cultivo.",
            "Compara cosas iguales: el precio por kilo o por costal de la misma calidad, en el mismo lugar. Un precio más alto en un mercado lejano puede valer menos después del transporte, la carga, las cuotas del mercado y las pérdidas. Calcula el precio en tu finca: el precio del mercado menos todos los costos de llevarlo hasta allá.",
            "El teléfono ayuda. Lleva un registro sencillo de precios cada semana, compártelo en el WhatsApp del grupo y usa una calculadora o un asistente de IA para comparar ofertas. Cuidado con las estafas: quien te pida pagar una cuota para recibir un precio alto \"garantizado\", o te pida el PIN de tu dinero móvil, no es un comprador de verdad."
          ],
          steps: ["Consigue precios de al menos tres fuentes: compradores, radio, servicio oficial.", "Revisa que cada uno sea del mismo cultivo, la misma calidad y la misma unidad.", "Resta el transporte, la carga, las cuotas y las pérdidas para obtener el precio en la finca.", "Registra los precios cada semana y compártelos con el grupo.", "No hagas caso a quien te pida una cuota o un PIN para conseguirte un precio."],
          words: [["Precio en la finca", "el precio que un comprador te paga en tu finca."], ["Precio al mayoreo", "el precio de grandes cantidades que se venden a comerciantes o tiendas."], ["Servicio de información de mercados", "un servicio que publica los precios actuales del mercado."]],
          slides: [
            { title: "Por lo menos tres fuentes", bullets: ["Varios compradores", "Reportes de mercado en la radio", "Servicios oficiales (Kenia: KAMIS)"] },
            { title: "Compara cosas iguales", bullets: ["Mismo cultivo, calidad y unidad", "Precio del mercado menos transporte y cuotas", "= lo que vale en tu finca"] },
            { title: "Usa bien el teléfono", bullets: ["Registro semanal de precios; compártelo con el grupo", "Calculadora o IA para comparar ofertas", "Los compradores reales no piden cuotas ni PIN"] }
          ],
          sources: [KAMIS],
          tryIt: "Esta semana, consigue el precio de un cultivo en tres fuentes y escríbelos en una tabla: fuente, precio, calidad, unidad, lugar. Calcula el precio en tu finca de los dos mejores después del transporte. ¿Qué oferta paga más de verdad?",
          youCanNow: "consultar precios en varias fuentes y calcular qué oferta paga más de verdad.",
          quickCheck: [
            { objective: "O5", q: "En los precios, ¿qué quiere decir \"comparar lo mismo con lo mismo\"?", options: ["Comparar el precio por kilo o por costal de la misma clase en el mismo lugar", "Comparar solo los precios más altos", "Comparar este año con hace diez años", "Comparar el maíz con el tomate"], answer: 0, why: "Los precios solo se comparan de forma justa con la misma clase, la misma unidad y el mismo lugar." },
            { objective: "O5", q: "Tu grupo quiere seguir los precios cada semana. ¿Qué haces?", options: ["Preguntarle a un intermediario una vez por temporada", "Llevar un registro semanal de precios sencillo y compartirlo en el WhatsApp del grupo", "Adivinar con los del año pasado", "Esperar a que el comprador te diga"], answer: 1, why: "Un registro semanal de precios compartido en el grupo ayuda a los socios a saber el precio antes de vender." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Contratos con los compradores",
          minutes: 6,
          goal: "Leer un contrato con un comprador y revisar las condiciones clave antes de que el grupo firme.",
          text: [
            "Un contrato es un acuerdo por escrito entre el grupo y un comprador. Un buen contrato da un mercado seguro y un precio conocido; uno malo puede dejar al grupo con producto que nadie recoge, o con dinero que nunca llega. Pon cada trato por escrito, aunque sea con un comprador que conoces.",
            "Revisa estas condiciones: qué producto y qué calidad; cuánto y cuándo; el precio, o exactamente cómo se va a fijar (por ejemplo, el precio del mercado el día de la entrega más o menos una cantidad); dónde se entrega y quién paga el transporte; cómo se revisa la calidad y qué pasa con el producto rechazado; cuándo y cómo se paga; qué pasa si se pierde la cosecha o el comprador no recoge; y cómo se resuelven los desacuerdos.",
            "Si alguna parte no está clara, pide al comprador que la explique por escrito. Léelo en voz alta en una reunión de socios para que todos entiendan sus obligaciones, incluida la de no vender por fuera. Pide a tu oficina de cooperativas, a tu extensionista o a un abogado que revisen los contratos grandes. Un asistente de IA te puede explicar las palabras difíciles con lenguaje sencillo, pero nunca escribas ahí los datos bancarios ni los PIN del grupo, y no reemplaza la asesoría legal."
          ],
          steps: ["Pide la oferta por escrito.", "Revisa el producto, la calidad, la cantidad y las fechas.", "Revisa el precio o cómo se fija, el lugar de entrega y quién paga el transporte.", "Revisa la revisión de calidad, las reglas de rechazo, la fecha y la forma de pago.", "Revisa qué pasa si se pierde la cosecha o el comprador no recoge, y cómo se resuelven los desacuerdos.", "Léelo a los socios; haz que revisen los contratos grandes antes de firmar."],
          words: [["Contrato", "un acuerdo por escrito que las dos partes tienen que cumplir."], ["Rechazo", "cuando un comprador no acepta un producto que no cumple la calidad acordada."], ["Desacuerdo", "un conflicto entre el grupo y el comprador."]],
          slides: [
            { title: "Siempre por escrito", bullets: ["Aunque sea con un comprador que conoces", "Mercado seguro y precio conocido", "Unas malas condiciones le pueden costar a todo el grupo"] },
            { title: "Revisa las condiciones", bullets: ["Producto, calidad, cantidad, fechas", "Precio o cómo se fija; entrega y transporte", "Revisión de calidad, rechazo, fecha y forma de pago"] },
            { title: "Cuando algo sale mal", bullets: ["Se pierde la cosecha o el comprador no recoge", "Cómo se resuelven los desacuerdos", "Pide al comprador que lo explique por escrito"] },
            { title: "Antes de firmar", bullets: ["Léelo en voz alta a los socios", "Contratos grandes: oficina de cooperativas, extensión o abogado", "La IA explica palabras; nada de datos bancarios ni PIN"] }
          ],
          tryIt: "Tarea final: escribe tu plan de venta en grupo de una página para un cultivo. Incluye el propósito del grupo, cinco reglas de los estatutos, dónde lo registrarías, tus registros, cómo entregan los socios y cómo se les paga, precios de tres fuentes y las condiciones del contrato que vas a revisar antes de firmar.",
          youCanNow: "leer un contrato con un comprador, revisar sus condiciones clave y planear cómo va a vender tu grupo en conjunto.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un contrato con un comprador?", options: ["El recibo de un costal", "Un mensaje de WhatsApp para saludar", "Un acuerdo por escrito entre el grupo y un comprador", "Un préstamo de un banco"], answer: 2, why: "Un contrato es un acuerdo por escrito que dice lo que va a hacer cada parte." },
            { objective: "O6", q: "Los socios no entienden las condiciones de calidad del contrato. ¿Qué haces antes de firmar?", options: ["Firmar rápido antes de que se vaya el comprador", "Dejar que el presidente firme solo", "No hacer caso de las condiciones de calidad", "Pedir al comprador que lo explique por escrito y leerlo en voz alta en una reunión de socios"], answer: 3, why: "Las partes que no están claras se explican por escrito y se leen en voz alta para que cada socio entienda lo que le toca." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Llegar juntos al mercado",
        questions: [
          { objective: "O4", q: "¿Por qué los compradores grandes prefieren comprarles a los grupos?", options: ["Los grupos siempre venden más barato", "Los grupos pueden entregar lotes grandes y parejos a tiempo", "Los grupos no necesitan calidad", "Los compradores están obligados por ley"], answer: 1, why: "El acopio da el volumen y la calidad constante que necesitan los compradores grandes." },
          { objective: "O4", q: "En un punto de acopio, ¿cuándo se debe pesar el producto de un socio?", options: ["Frente al socio, y luego se anota y se da un recibo", "En secreto, de noche", "Solo después de que pague el comprador", "Nunca; se calcula a ojo"], answer: 0, why: "Pesar a la vista y dar recibos crea confianza y prueba lo que le toca a cada socio." },
          { objective: "O5", q: "Un mercado lejano paga 10 por ciento más, pero el transporte y las cuotas cuestan 15 por ciento. ¿Qué es cierto?", options: ["El mercado lejano paga más", "Los dos pagan lo mismo", "Los costos de transporte no importan", "El mercado lejano paga menos en tu finca"], answer: 3, why: "Después de los costos, el precio en la finca del mercado lejano es más bajo." },
          { objective: "O5", q: "En Kenia, ¿qué servicio oficial publica los precios de mercado de cultivos y animales?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "El KAMIS, a cargo del Ministerio de Agricultura, publica los precios de mercado." },
          { objective: "O6", q: "¿Qué condición del contrato te dice qué pasa si el comprador no recoge?", options: ["El nombre del grupo", "La fecha de la reunión", "Las condiciones por no recoger o no entregar", "El color de los costales"], answer: 2, why: "Los contratos deben decir qué pasa si alguna de las partes no puede cumplir el trato." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cooperativas agrícolas y acceso al mercado",
    questions: [
      { objective: "O1", q: "¿Cuál es una ventaja de un grupo de agricultores?", options: ["Pagar más por los insumos", "Comprar insumos al mayoreo a precios más bajos", "Vender solo en la finca", "No llevar registros"], answer: 1, why: "Comprar al mayoreo baja el costo de los insumos." },
      { objective: "O1", q: "Según la Alianza Cooperativa Internacional, los socios de una cooperativa:", options: ["Son sus dueños y la controlan de forma democrática", "Trabajan para un dueño privado", "No tienen voto", "Tienen que ser todos empleados del gobierno"], answer: 0, why: "Una cooperativa es de todos sus socios y se controla de forma democrática." },
      { objective: "O1", q: "¿Cuál es una razón común de que fracasen los grupos de agricultores?", options: ["Registros claros", "Pagos a tiempo", "Poca confianza y malos registros", "Reuniones abiertas"], answer: 2, why: "La poca confianza y los malos registros rompen los grupos." },
      { objective: "O2", q: "¿Qué son los estatutos?", options: ["Préstamos del banco", "Precios del mercado", "Contratos con compradores", "Las reglas escritas del grupo"], answer: 3, why: "Los estatutos dicen cómo funciona el grupo." },
      { objective: "O2", q: "\"Un socio, un voto\" quiere decir:", options: ["Los socios con más aportaciones tienen más votos", "Solo votan los líderes", "Cada socio tiene un voto", "Los votos se compran"], answer: 2, why: "Las cooperativas le dan un voto a cada socio." },
      { objective: "O2", q: "En Kenia, las sociedades cooperativas se registran bajo la Co-operative Societies Act por medio de:", options: ["El Commissioner for Co-operative Development", "El Kenya Wildlife Service", "Un comprador privado", "El departamento del clima"], answer: 0, why: "El comisionado registra las sociedades, empezando en la oficina de cooperativas del condado." },
      { objective: "O2", q: "En Ghana, ¿dónde se registran los grupos cooperativos?", options: ["En la agencia meteorológica", "En una estación de radio", "En cualquier tienda", "En el Department of Co-operatives (oficina de distrito)"], answer: 3, why: "El Department of Co-operatives de Ghana registra y supervisa las sociedades." },
      { objective: "O2", q: "Antes de solicitar el registro, debes:", options: ["Adivinar el costo", "Revisar con la oficina de cooperativas los formularios, costos y pasos vigentes", "Copiar las reglas de otro país", "Saltarte los estatutos"], answer: 1, why: "Las reglas y los costos cambian, así que confírmalos con la oficina." },
      { objective: "O3", q: "El acta de una reunión registra:", options: ["Solo la hora en que llegó cada persona", "Los precios del mercado", "Los PIN de los socios", "Quién vino, qué se decidió y quién hace qué y para cuándo"], answer: 3, why: "El acta es el registro de las decisiones y las tareas." },
      { objective: "O3", q: "¿Cuál es uno de los cuatro registros básicos del grupo?", options: ["Un libro de entregas", "Un diario del clima", "Una lista de los PIN de los compradores", "Un álbum de fotos"], answer: 0, why: "El libro de entregas muestra lo que entregó cada socio." },
      { objective: "O3", q: "¿Por qué tener dos firmantes en la cuenta del grupo?", options: ["Para hacer más lentos todos los pagos", "Para que nadie pueda mover el dinero solo", "Porque los bancos cobran menos", "Para que los socios nunca vean las cuentas"], answer: 1, why: "Dos personas que aprueban protegen el dinero del grupo." },
      { objective: "O3", q: "La Co-operative Societies Act de Nigeria exige que las cuentas de una sociedad registrada se:", options: ["Mantengan en secreto", "Quemen cada año", "Auditen cada año", "Guarden solo en la memoria"], answer: 2, why: "La ley exige una auditoría al final de cada año fiscal." },
      { objective: "O4", q: "Acopiar quiere decir:", options: ["Vender un costal a la vez", "Dividir al grupo", "Subir el precio por tu cuenta", "Juntar la producción de muchos socios en un solo lote grande"], answer: 3, why: "El acopio junta cantidades pequeñas para compradores más grandes." },
      { objective: "O4", q: "¿Cómo se les debe pagar a los socios después de una venta en grupo?", options: ["Según los registros: peso x precio de su calidad, menos las cuotas acordadas", "Lo mismo a todos, sin importar lo que entregaron", "Solo se les paga a los líderes", "Cuando el tesorero quiera"], answer: 0, why: "Un pago justo y registrado mantiene la confianza y reduce la venta por fuera." },
      { objective: "O4", q: "La mejor defensa contra la venta por fuera es:", options: ["Precios secretos", "Pagos tardíos", "Un pago rápido, justo y abierto", "No tener contratos"], answer: 2, why: "Los socios se quedan cuando el grupo paga bien y a tiempo." },
      { objective: "O5", q: "¿Cuántas fuentes de precios debes revisar antes de vender?", options: ["Ninguna", "Solo un comprador", "Solo la radio", "Por lo menos tres"], answer: 3, why: "Varias fuentes muestran el precio real del mercado." },
      { objective: "O5", q: "Alguien te promete un precio alto garantizado si primero pagas una cuota y le das el PIN de tu dinero móvil. Esto es:", options: ["Un comprador normal", "Probablemente una estafa", "Una regla de la cooperativa", "Un servicio del gobierno"], answer: 1, why: "Los compradores reales no piden cuotas ni PIN." },
      { objective: "O5", q: "El precio en la finca de una oferta es:", options: ["El precio del mercado menos el transporte, las cuotas y las pérdidas", "El precio más alto que escuchaste", "El precio en la capital", "El precio al menudeo"], answer: 0, why: "Lo que cuenta es lo que de verdad recibes en la finca." },
      { objective: "O6", q: "¿Qué debe quedar escrito en un contrato con un comprador?", options: ["Solo el nombre del comprador", "El precio o cómo se fija, la cantidad, la calidad, la entrega y las condiciones de pago", "Los PIN del banco de los socios", "Nada; basta con un apretón de manos"], answer: 1, why: "Estas condiciones protegen al grupo si algo sale mal." },
      { objective: "O6", q: "Usas un asistente de IA para entender un contrato. ¿Qué es seguro?", options: ["Escribir los datos bancarios y los PIN del grupo", "Firmar lo que te diga que está bien", "Pedirle que explique las palabras difíciles y luego hacer que un asesor revise los contratos grandes", "Dejar que firme por ti"], answer: 2, why: "La IA puede explicar palabras, pero no reemplaza la asesoría legal, y los datos privados se quedan privados." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      7,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte del plan y revísala de nuevo.",
    criteria: [
      {
        name: "Propósito y estatutos",
        objective: "O2",
        notYet: "No hay un propósito claro, o hay menos de cinco reglas.",
        meets: "El nombre y el propósito del grupo y cinco reglas clave de los estatutos, como la membresía, las votaciones, el dinero y las sanciones.",
        exceeds: "Las reglas también cubren la venta por fuera y cómo se reparte cualquier excedente."
      },
      {
        name: "Registro",
        objective: "O2",
        notYet: "No nombra la oficina de registro.",
        meets: "Nombra la oficina donde se registraría el grupo y lo que hay que revisar ahí.",
        exceeds: "Ya llamó o visitó la oficina y anotó los pasos vigentes y la fecha."
      },
      {
        name: "Registros y dinero",
        objective: "O3",
        notYet: "Faltan registros, o una sola persona controla el dinero.",
        meets: "Padrón de socios, libro de caja, libro de entregas y registro de pagos, con dos personas que aprueban los pagos.",
        exceeds: "Dice cómo se leerán las cuentas a los socios y cómo se revisarán cada año."
      },
      {
        name: "Entrega, clasificación y pago",
        objective: "O4",
        notYet: "No hay reglas de acopio ni de pago.",
        meets: "Cómo entregan los socios, cómo se clasifica y se pesa la producción frente a ellos, y cómo y cuándo se les paga.",
        exceeds: "Las cuotas del grupo y las fechas de pago acordadas están escritas de antemano."
      },
      {
        name: "Precios",
        objective: "O5",
        notYet: "Menos de tres fuentes de precios, o no calcula el precio en la finca.",
        meets: "Precios de al menos tres fuentes, comparando lo mismo con lo mismo, con el precio en la finca calculado.",
        exceeds: "Incluye un registro semanal de precios de varias semanas."
      },
      {
        name: "Condiciones del contrato",
        objective: "O6",
        notYet: "Menos de seis condiciones, o faltan condiciones clave como el pago.",
        meets: "Seis condiciones del contrato que hay que revisar, incluidos el precio, la calidad, la entrega, el pago y qué pasa si no se recoge.",
        exceeds: "Nombra quién revisará los contratos grandes, como la oficina de cooperativas o un abogado."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica del plan de venta en grupo",
      "Grupos que dicen haber escrito estatutos, llevado registros o haberse registrado en un plazo de 90 días (encuesta de seguimiento)",
      "Grupos que reportan una venta en grupo con contrato por escrito, y el precio comparado con vender solos",
      "Participantes que dicen haber evitado una estafa de cuota a cambio de precio o de PIN"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un cuaderno y una pluma, o libros de registro para el grupo",
      "Un teléfono básico para los precios, SMS o WhatsApp y la calculadora",
      "Estatutos modelo de la oficina de cooperativas y un contrato de comprador de ejemplo, si los hay",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo con el grupo para escribir el plan de venta"
    ],
    facilitatorNotes: [
      "Den el curso con un grupo real o que se está formando: hagan juntos la prueba inicial y luego una reunión corta de práctica con orden del día y acta.",
      "Invita a un funcionario de cooperativas a explicar el registro; revisa las tarifas y los pasos vigentes antes de la sesión.",
      "Practiquen un día de acopio de prueba con una báscula, la clasificación y un libro de entregas.",
      "Nunca pidas a los socios que compartan el PIN ni datos bancarios; usen datos de ejemplo en los registros.",
      "Califica el plan de venta con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

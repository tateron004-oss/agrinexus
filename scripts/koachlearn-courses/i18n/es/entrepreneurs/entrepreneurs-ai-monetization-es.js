"use strict";

// Koach Learn course (Spanish translation of entrepreneurs/entrepreneurs-ai-monetization.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-monetization-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-monetization",
  category: "Entrepreneurs",
  name: "Estrategias para ganar dinero con IA",
  skills: "Comparar formas de ganar con IA, Elegir un modelo según tus fortalezas, Poner precio según el valor, Crear un producto digital con IA, Crear ingresos recurrentes, Detectar estafas para ganar dinero con IA",
  outcome: "comparar las principales formas en que los negocios ganan dinero con IA, elegir la que encaja con tus habilidades y tus clientes, ponerle precio a una oferta según su valor, crear un primer producto digital u oferta recurrente y probarlo con un lanzamiento pequeño, evitando los esquemas de IA para hacerse rico rápido.",
  about: [
    "\"¿Cómo gano dinero con IA?\" es una de las preguntas más buscadas en internet, y muchas de las respuestas son estafas. Este curso te da un mapa honesto y práctico: formas reales en que los pequeños negocios ganan con IA, cómo elegir una, cómo ponerle precio y cómo probarla antes de gastar mucho.",
    "Vas a comparar seis modelos para ganar dinero (servicios con ayuda de IA, servicios en paquete, productos digitales, suscripciones, contenido con patrocinadores o afiliados, y ahorros en un negocio que ya existe), elegir uno que te quede, ponerle precio según su valor, crear con IA un primer producto u oferta recurrente y hacer una prueba pequeña. También vas a aprender las señales de alerta de los esquemas para ganar dinero con IA, usando la guía de la FTC (la Comisión Federal de Comercio de Estados Unidos).",
    "Cada lección dura unos cinco minutos e incluye una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Ningún ingreso está garantizado; este curso enseña a probar ideas con honestidad. No da consejos de inversión."
  ],
  finalTask: "Crea un plan para ganar dinero y una primera prueba: el modelo que elegiste y por qué, tu oferta con un precio según su valor, una primera versión del producto u oferta recurrente hecha con ayuda de la IA y revisada por ti, un plan de lanzamiento pequeño con una meta (por ejemplo, 5 ventas o 3 suscriptores en 30 días) y una lista de señales de alerta que usarás antes de pagar por cualquier programa para ganar dinero con IA.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas y dueños de pequeños negocios en EE. UU. que quieren ganar dinero con la IA, desde quienes tienen un negocio extra hasta dueños que agregan una nueva fuente de ingresos.",
    startingPoint: "Usan asistentes de IA y tienen habilidades, un negocio o un público sobre el cual construir. Muchos han visto en internet promesas de ingresos fáciles con IA y no saben qué formas de ganar dinero son reales.",
    gap: "Los esquemas de IA para hacerse rico rápido le cuestan dinero a la gente, y quienes prueban modelos reales muchas veces se reparten entre demasiados, cobran poco o lanzan sin probar. Necesitan elegir un modelo honesto, ponerle precio según el valor, hacer una primera oferta y probarla en pequeño, mientras detectan las estafas antes de pagar.",
    constraints: [
      "Palabras sencillas; no se garantiza ningún ingreso y el curso no da asesoría de inversión",
      "Dispositivos: un teléfono o una computadora con un asistente de IA gratuito y una hoja de cálculo",
      "Tiempo: unos cinco minutos por lección más hacer una primera oferta y una prueba de 30 días",
      "Lo que se diga sobre ganancias debe poder probarse, el contenido patrocinado debe decirlo (FTC), y el material hecho solo por IA puede no estar protegido por derechos de autor",
      "Las preguntas de impuestos van a fuentes oficiales o a un contador"
    ],
    prerequisites: "\"Introducción a la IA para emprendedores\", o el uso frecuente de un asistente de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con los seis modelos para ganar con IA", action: "describir cada modelo y dar un ejemplo que encaje con tus habilidades o tu negocio", standard: "para los seis modelos" },
    { id: "O2", condition: "Con tus habilidades, tus horas, tu red de contactos y tu público", action: "elegir un modelo para ganar dinero en el que te vas a enfocar durante 90 días", standard: "con una razón escrita de por qué encaja con lo que ya tienes" },
    { id: "O3", condition: "Para el modelo que elegiste", action: "fijar un precio entre tu piso de costos y el valor para el cliente", standard: "comparando dos precios de la competencia y con las cuentas revisadas en una hoja de cálculo" },
    { id: "O4", condition: "Con ayuda de la IA y tu propia experiencia", action: "crear una primera versión de un producto digital o un paquete de servicios para un problema y un comprador", standard: "con cada dato revisado y sin afirmaciones que no puedas probar" },
    { id: "O5", condition: "Con tu primer producto o servicio", action: "diseñar una oferta recurrente o un combo y una prueba de lanzamiento de 30 días", standard: "con una meta clara, una forma de seguirla y cualquier patrocinio dicho claramente" },
    { id: "O6", condition: "Antes de pagar por cualquier programa o asesoría de ingresos con IA", action: "revisarlo contra una lista escrita de señales de alerta", standard: "pidiendo el documento de divulgación y sabiendo dónde denunciar una estafa" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elige cómo vas a ganar",
      lessons: [
        {
          objectives: ["O1"],
          title: "Seis formas en que los negocios ganan con IA",
          minutes: 5,
          goal: "Describir seis modelos reales para ganar con IA y un ejemplo de cada uno.",
          text: [
            "1) Servicios con ayuda de IA: haces trabajos para clientes más rápido con IA, como publicaciones para redes, currículums u ordenar la contabilidad. 2) Servicios en paquete: un paquete fijo a un precio fijo, como \"10 descripciones de productos por $X\". 3) Productos digitales: plantillas, guías, agendas o cursos que haces una vez y vendes muchas veces.",
            "4) Suscripciones: un producto o servicio mensual, como un paquete semanal de contenido o una pequeña herramienta de software con IA. 5) Contenido con patrocinadores o afiliados: enseñas o entretienes con ayuda de la IA y ganas con patrocinadores o enlaces de afiliado, avisándolo con claridad. 6) Ahorros: en un negocio que ya existe, la IA que ahorra horas o baja costos también es dinero.",
            "Ninguno de estos es un ingreso automático. Cada uno necesita clientes reales, valor real y trabajo real. La IA sobre todo reduce el tiempo que toma hacer y entregar."
          ],
          words: [["Monetizar", "encontrar una forma de ganar dinero con algo."], ["Servicio en paquete", "un servicio que se vende como un paquete fijo a un precio fijo."], ["Enlace de afiliado", "un enlace que te paga una comisión cuando alguien compra a través de él."]],
          slides: [
            { title: "Servicios", bullets: ["Servicios con ayuda de IA para clientes", "En paquete: paquete fijo, precio fijo"] },
            { title: "Productos", bullets: ["Productos digitales: se hacen una vez, se venden muchas", "Suscripciones: producto o servicio mensual"] },
            { title: "Contenido y ahorros", bullets: ["Contenido con patrocinadores o afiliados, avisado", "Ahorros en un negocio que ya existe"] },
            { title: "No hay ingresos automáticos", bullets: ["Clientes reales, valor real, trabajo real", "La IA reduce el tiempo para hacer y entregar"] }
          ],
          tryIt: "Escribe los seis modelos con un ejemplo de cada uno que podría encajar con tus habilidades o tu negocio.",
          youCanNow: "nombrar seis formas reales de ganar con IA y dar un ejemplo de cada una.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un producto digital?", options: ["Algo que se hace una vez y se vende muchas veces en internet", "Un servicio que haces a mano para cada cliente", "Un préstamo bancario", "El contrato de renta de un local"], answer: 0, why: "Los productos digitales se hacen una vez y se pueden vender una y otra vez." },
            { objective: "O1", q: "Tienes una panadería y usas la IA para ahorrarte dos horas de papeleo cada semana. ¿Qué modelo es este?", options: ["Una suscripción", "Ahorro de costos en un negocio que ya existe", "Un enlace de afiliado", "Un patrocinio"], answer: 1, why: "El dinero que se ahorra en un negocio cuenta como dinero ganado." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Elegir un modelo según tus fortalezas",
          minutes: 5,
          goal: "Elegir el modelo para ganar dinero que encaja con tus habilidades, tu público y tu tiempo.",
          text: [
            "El mejor modelo depende de lo que ya tienes. Habilidades y tiempo pero sin público: los servicios o los servicios en paquete suelen dar dinero más rápido. Un público (seguidores, una lista de correos, una comunidad): pueden encajar los productos digitales, las suscripciones o el contenido patrocinado. Un negocio que ya existe: empieza por los ahorros y por un servicio adicional para tus clientes actuales.",
            "Pídele a la IA que te ayude a pensarlo: \"Estas son mis habilidades, mi tiempo cada semana, la gente que conozco y el público que tengo. Compárame los seis modelos para ganar con IA: rapidez para la primera venta, costo inicial, riesgo y esfuerzo.\" Luego decide tú.",
            "Elige UN modelo para los próximos 90 días. Intentar los seis a la vez es la razón más común por la que la gente no gana nada."
          ],
          steps: ["Escribe tus habilidades, tus horas por semana, tus contactos y tu público.", "Pídele a la IA que compare los seis modelos para ti.", "Califica cada uno: rapidez, costo, riesgo, esfuerzo.", "Elige un modelo para 90 días."],
          words: [["Público", "las personas que ya te siguen, te leen o te escuchan."], ["Costo inicial", "el dinero que necesitas antes de poder hacer la primera venta."]],
          slides: [
            { title: "Habilidades y tiempo, sin público", bullets: ["Servicios o servicios en paquete", "Muchas veces lo más rápido para la primera venta"] },
            { title: "Si tienes público", bullets: ["Productos digitales", "Suscripciones o contenido patrocinado"] },
            { title: "Si tienes un negocio", bullets: ["Primero, los ahorros", "Servicio adicional para tus clientes actuales"] },
            { title: "Elige UNO por 90 días", bullets: ["Hacer los seis no deja nada"] }
          ],
          tryIt: "Haz una lista de tus habilidades, horas, contactos y público, pídele a la IA que compare los seis modelos para ti y elige un modelo para los próximos 90 días.",
          youCanNow: "elegir un modelo para ganar con IA que encaje con lo que ya tienes.",
          quickCheck: [
            { objective: "O2", q: "¿En cuántos modelos para ganar dinero debes enfocarte durante 90 días?", options: ["En los seis", "En tres", "En uno", "En ninguno"], answer: 2, why: "Intentar todo a la vez es una razón común por la que la gente no gana nada." },
            { objective: "O2", q: "Escribes muy bien y tienes tiempo, pero no tienes público. ¿Qué eliges?", options: ["Patrocinios", "Un gran producto por suscripción", "Contenido de afiliados", "Un servicio o un servicio en paquete"], answer: 3, why: "Los servicios suelen dar dinero más rápido cuando tienes habilidades pero todavía no tienes público." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Poner precio según el valor",
          minutes: 5,
          goal: "Fijar un precio basado en el valor para el cliente, revisado contra tus costos.",
          text: [
            "La IA hace el trabajo más rápido, y eso tienta a cobrar menos. Los clientes pagan por el resultado, no por tus minutos. Pregúntate: ¿qué le ahorra o le hace ganar esto al cliente? Si tu paquete de anuncios ayuda a una tienda a vender más, o tu plantilla le ahorra dos horas a la semana a una gerente, el precio puede reflejar ese valor.",
            "Luego revisa tu piso: tus costos (herramientas, comisiones, tiempo incluyendo la revisión) más la ganancia. Mira lo que cobran ofertas parecidas. Tu precio debe estar entre tu piso y el valor para el cliente.",
            "Pídele a la IA estructuras de precios (tres niveles, combos, precio de lanzamiento), pero fija y revisa tú los números. Guarda registros para los impuestos; las personas que trabajan por cuenta propia por lo general pagan el impuesto sobre el trabajo por cuenta propia; consulta irs.gov (el sitio del IRS, la agencia de impuestos de Estados Unidos) o pregúntale a un contador."
          ],
          steps: ["Calcula el valor para el cliente.", "Calcula tu piso: costos más ganancia.", "Revisa lo que cobran ofertas parecidas.", "Fija un precio entre el piso y el valor.", "Pídele estructuras a la IA y luego revisa los números."],
          words: [["Precio según el valor", "un precio basado en lo que el resultado vale para el cliente."], ["Precio piso", "el precio más bajo que todavía cubre tus costos y tu ganancia."], ["Nivel", "una versión de un producto a un precio fijo, como básico o premium."]],
          slides: [
            { title: "Los clientes pagan por resultados", bullets: ["No por tus minutos", "¿Qué les ahorra o les hace ganar?"] },
            { title: "Piso y valor", bullets: ["Piso: costos + ganancia", "Valor: lo que vale para el cliente", "El precio va en medio"] },
            { title: "Estructuras", bullets: ["Niveles, combos, precio de lanzamiento", "La IA sugiere; tú revisas los números", "Guarda registros para los impuestos"] }
          ],
          sources: [{ name: "IRS: Centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Para el modelo que elegiste, escribe el valor para el cliente, tu piso, dos precios de la competencia y tu precio. Revisa los cálculos en una hoja de cálculo.",
          youCanNow: "ponerle precio a una oferta con ayuda de IA según su valor y por encima de tus costos.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es tu precio piso?", options: ["Tus costos más la ganancia", "El precio más bajo que cobra la competencia", "Lo que sugiera la IA", "Cero"], answer: 0, why: "Por debajo del piso, cada venta pierde dinero." },
            { objective: "O3", q: "La IA dice que tu tarea toma solo cinco minutos, así que deberías cobrar muy poco. ¿Qué haces?", options: ["Cobrar casi nada", "Poner el precio según el valor del resultado, arriba de tu piso", "Regalarla", "Copiar a la competencia más barata"], answer: 1, why: "Los clientes pagan por el resultado, no por lo que tardó la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elige cómo vas a ganar",
        questions: [
          { objective: "O1", q: "¿Cuál es un servicio en paquete?", options: ["Un trabajo por hora sin alcance definido", "\"10 descripciones de productos por un precio fijo\"", "Un pasatiempo gratis", "Una compra de acciones"], answer: 1, why: "Es un paquete fijo a un precio fijo." },
          { objective: "O1", q: "¿Qué afirmación sobre los ingresos con IA es verdadera?", options: ["Solo necesitas una instrucción", "La IA gana dinero mientras duermes sin ningún trabajo", "Todo negocio de IA gana rápido", "Ningún modelo es automático; cada uno necesita clientes y valor"], answer: 3, why: "Los ingresos reales necesitan valor real y trabajo." },
          { objective: "O2", q: "Tienes habilidades y tiempo pero no tienes público. ¿Qué modelo suele dar dinero más rápido?", options: ["Servicios o servicios en paquete", "Contenido patrocinado", "Suscripciones para un público", "Enlaces de afiliado"], answer: 0, why: "Los servicios se pueden vender sin tener público." },
          { objective: "O2", q: "¿Por qué elegir un solo modelo por 90 días?", options: ["La IA solo permite uno", "Lo exige la ley", "Intentar todos a la vez es una razón común por la que la gente no gana nada", "Para evitar clientes"], answer: 2, why: "Enfocarte da resultados." },
          { objective: "O3", q: "Tu precio debe estar:", options: ["Por encima de cualquier valor", "Por debajo de tus costos", "Entre tu piso de costos y el valor para el cliente", "En cero"], answer: 2, why: "Así cubre los costos y refleja el valor." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crea, prueba y mantente seguro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Crear un producto digital con IA",
          minutes: 6,
          goal: "Crear una primera versión de un producto digital con ayuda de la IA y tu propia experiencia.",
          text: [
            "Los buenos productos digitales resuelven un problema para un tipo de comprador: \"Una agenda semanal para preparar comidas para quienes trabajan por turnos\", \"20 plantillas de correo para personas que limpian casas\", \"Una lista de control para abrir un food truck en tu ciudad\". Tu experiencia es lo que hace que valga la pena comprarlo; la IA acelera la redacción y el diseño.",
            "Pasos: haz el esquema con la IA, escribe las partes clave con lo que tú sabes, revisa cada dato, diséñalo en Canva o en un documento y pruébalo con dos o tres compradores antes de un lanzamiento más grande.",
            "Los derechos de autor importan: la Oficina de Derechos de Autor de Estados Unidos dice que el material generado solo por IA no está protegido, mientras que tu propio trabajo creativo y tus ediciones sí pueden estarlo. Pon trabajo humano real en todo lo que quieras que sea tuyo y nunca copies el producto de otra persona. Si haces afirmaciones sobre resultados (\"baja de peso\", \"gana 1,000 dólares\"), tienes que poder demostrarlas."
          ],
          steps: ["Elige un problema y un comprador.", "Haz el esquema del producto con la IA.", "Escribe las partes clave con tu propia experiencia.", "Revisa los datos y diséñalo.", "Pruébalo con dos o tres compradores y mejóralo."],
          words: [["Producto digital", "algo que se hace una vez y se vende muchas veces en línea, como una plantilla o una guía."], ["Derechos de autor", "el derecho legal de controlar las copias de una obra creativa original."]],
          slides: [
            { title: "Un problema, un comprador", bullets: ["Agenda de comidas para quienes trabajan por turnos", "Plantillas de correo para quienes limpian casas", "Tu experiencia hace que valga la pena comprarlo"] },
            { title: "Hazlo", bullets: ["Esquema con la IA", "Escribe las partes clave con lo que sabes", "Revisa datos, diseña, prueba"] },
            { title: "Derechos de autor y afirmaciones", bullets: ["Lo hecho solo por IA no está protegido", "Agrega trabajo humano real; nunca copies", "Demuestra cualquier afirmación de resultados"] }
          ],
          sources: [{ name: "Oficina de Derechos de Autor de EE. UU.: anuncio del informe Parte 2 sobre registrabilidad (en inglés)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }, { name: "FTC: Conceptos básicos de publicidad y marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Haz la primera versión de un pequeño producto digital (o el primer paquete de tu servicio) con ayuda de la IA y tu propia experiencia. Revisa cada dato.",
          youCanNow: "crear un producto digital que une tu experiencia con la rapidez de la IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué hace que valga la pena comprar un producto digital?", options: ["Que sea muy largo", "Que lo haya hecho todo la IA", "Que resuelva un problema para un comprador usando experiencia real", "Que cubra todos los temas"], answer: 2, why: "Los productos enfocados y basados en experiencia real les dan valor a los compradores." },
            { objective: "O4", q: "La IA agrega \"los compradores ganan $1,000 al mes\" a la página de tu producto. No tienes pruebas. ¿Qué haces?", options: ["Dejarlo", "Cambiarlo a $500", "Ponerlo en letra pequeña", "Quitarlo"], answer: 3, why: "Lo que se diga sobre ganancias debe poder probarse." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ingresos recurrentes y un lanzamiento pequeño",
          minutes: 5,
          goal: "Diseñar una oferta recurrente o un combo y hacer una prueba de lanzamiento de 30 días.",
          text: [
            "Los ingresos recurrentes (dinero que entra cada mes) son más estables que las ventas de una sola vez. Opciones: un paquete mensual de contenido o plantillas, un plan de soporte para clientes de servicios, una membresía o una pequeña herramienta por suscripción. Los combos (un producto más una llamada corta, o tres productos juntos) suben el valor de cada venta.",
            "Haz un lanzamiento pequeño: cuéntaselo a la gente que ya te conoce, a una comunidad a la que perteneces o a clientes anteriores. Usa la IA para redactar el anuncio, pero hazlo personal y honesto. Si usas afiliados o patrocinadores, avísalo con claridad (por ejemplo, \"#publicidad\" al principio).",
            "Fija una meta para 30 días (por ejemplo, 5 ventas o 3 suscriptores), lleva la cuenta y pregunta a los compradores qué los hizo comprar y qué lo haría mejor."
          ],
          steps: ["Diseña una oferta recurrente o un combo.", "Redacta con la IA un mensaje de lanzamiento honesto y hazlo personal.", "Compártelo con personas y grupos que ya te conocen.", "Avisa con claridad de cualquier patrocinador o afiliado.", "Lleva la cuenta de tu meta de 30 días y pide opiniones a los compradores."],
          words: [["Ingresos recurrentes", "ingresos que se repiten con regularidad, como las suscripciones mensuales."], ["Combo", "varios productos o servicios que se venden juntos."], ["Aviso", "decirle claramente a la gente que existe una relación pagada."]],
          slides: [
            { title: "Lo recurrente le gana a lo de una vez", bullets: ["Paquetes mensuales o planes de soporte", "Membresías o herramientas pequeñas", "Los combos suben el valor de cada venta"] },
            { title: "Lanza en pequeño y con honestidad", bullets: ["Gente y grupos que te conocen", "La IA redacta; tú lo haces personal", "Avisa de patrocinadores y afiliados"] },
            { title: "Meta de 30 días", bullets: ["5 ventas o 3 suscriptores", "Lleva la cuenta", "Pregunta a los compradores por qué compraron"] }
          ],
          sources: [{ name: "FTC: Guías sobre recomendaciones, lo que la gente pregunta (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Diseña una oferta recurrente o un combo, escribe tu mensaje de lanzamiento y fija una meta de 30 días con la forma en que vas a llevar la cuenta.",
          youCanNow: "diseñar ingresos recurrentes y lanzar una oferta con una prueba clara y medible.",
          quickCheck: [
            { objective: "O5", q: "¿Qué son los ingresos recurrentes?", options: ["Ingresos que se repiten, como una suscripción mensual", "Una venta de una sola vez", "Una devolución de impuestos", "Un préstamo"], answer: 0, why: "Las ofertas recurrentes traen ingresos cada mes." },
            { objective: "O5", q: "Una marca te paga por mencionar su herramienta de IA en tu boletín. ¿Qué haces?", options: ["Ocultar el pago", "Decirlo con claridad, por ejemplo con \"#ad\" al principio", "Mencionarlo solo al final y en letra pequeña", "No llevar registro"], answer: 1, why: "El contenido patrocinado debe decirlo con claridad." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Detectar estafas para ganar dinero con IA",
          minutes: 5,
          goal: "Usar una lista de señales de alerta antes de pagar por cualquier programa o asesoría de ingresos con IA.",
          text: [
            "Muchos programas venden \"ingresos con IA\": tiendas en línea hechas por ti, robots de trading con IA, cursos de \"ingresos pasivos\". La FTC ha actuado contra varios. En un caso que describió, una empresa prometía usar la IA para elegir los productos más vendidos para tiendas en línea, pero la FTC la acusó de que sus promesas de ganancias no tenían base y de que la mayoría de los clientes no recuperó lo que pagó.",
            "Consejos de la FTC antes de comprar una oportunidad de negocio o de asesoría: pide el documento de divulgación de una página que exige la ley; revisa que diga el nombre del vendedor y cualquier demanda; lee las condiciones de cancelación y reembolso; pide referencias; si dicen que puedes ganar dinero, pide la declaración de promesas de ganancias; y aléjate si lo que dicen no coincide con sus documentos.",
            "Otras señales de alerta: ingresos garantizados, presión para comprar hoy, cuotas grandes por adelantado, una \"IA secreta\" sin explicación y contratos que te prohíben dejar reseñas honestas. Denuncia las posibles estafas en ReportFraud.ftc.gov. Este curso no recomienda ningún producto de inversión ni de trading."
          ],
          steps: ["Pide el documento de divulgación de una página.", "Revisa el nombre del vendedor y si tiene demandas.", "Lee las condiciones de reembolso y cancelación.", "Pide referencias y la declaración de promesas de ganancias.", "Aléjate si algo no coincide; denuncia las estafas en ReportFraud.ftc.gov."],
          words: [["Oportunidad de negocio", "un programa que se vende como una forma lista para empezar a ganar."], ["Promesa de ganancias", "una afirmación sobre cuánto dinero podrías ganar."], ["Señal de alerta", "una señal de advertencia de una estafa."]],
          slides: [
            { title: "Programas de \"ingresos con IA\"", bullets: ["Tiendas hechas por ti, robots de trading, ingresos pasivos", "La FTC actuó por promesas de ganancias sin base"] },
            { title: "FTC: antes de comprar", bullets: ["Documento de divulgación de una página", "Nombre del vendedor y demandas", "Reembolsos, referencias, declaración de ganancias"] },
            { title: "Señales de alerta", bullets: ["Ingresos garantizados, presión para comprar hoy", "Cuotas grandes por adelantado, \"IA secreta\"", "Prohibir reseñas honestas"] },
            { title: "Si tienes dudas", bullets: ["Aléjate", "Denuncia en ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "Alerta de la FTC: cómo revisar una oportunidad de negocio o de asesoría antes de invertir (en inglés)", url: "https://www.consumer.ftc.gov/consumer-alerts/2023/08/vetting-business-or-coaching-opportunity-you-buy" }],
          tryIt: "Tarea final: escribe tu lista de señales de alerta y luego arma tu plan para ganar dinero: el modelo y por qué, la oferta con precio, el primer producto u oferta recurrente y la prueba de lanzamiento de 30 días.",
          youCanNow: "ganar con IA mediante ofertas honestas y probadas, y evitar las estafas para ganar dinero con IA.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una señal de alerta en un programa de ingresos con IA?", options: ["Una prueba gratis sin promesas", "Precios claros y una política de reembolsos", "Ganancias garantizadas y presión para pagar hoy", "Un contrato por escrito"], answer: 2, why: "Los ingresos garantizados y la presión para comprar ya son señales de alerta." },
            { objective: "O6", q: "Un asesor quiere un pago grande por adelantado por una oportunidad de negocio de \"tienda con IA\". ¿Qué haces primero?", options: ["Pagar rápido antes de que suba el precio", "Pedir el dinero prestado", "Firmar sin leer", "Pedir el documento de divulgación de una página y revisar tu lista de señales de alerta"], answer: 3, why: "Pide el documento de divulgación y revisa las señales de alerta antes de pagar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crea, prueba y mantente seguro",
        questions: [
          { objective: "O4", q: "¿Qué hace que valga la pena comprar un producto digital?", options: ["Resuelve un problema para un comprador, usando tu experiencia real", "Lo hizo la IA sola", "Es muy largo", "Copia a un éxito de ventas"], answer: 0, why: "La experiencia más un problema claro crean valor." },
          { objective: "O4", q: "¿El material generado solo por IA está protegido por derechos de autor en Estados Unidos?", options: ["Solo si se vende", "Sí, siempre", "Solo las imágenes", "No, según la Oficina de Derechos de Autor"], answer: 3, why: "Los derechos de autor exigen un autor humano." },
          { objective: "O5", q: "¿Cuál es un ingreso recurrente?", options: ["Una venta de una sola vez", "Una suscripción mensual de plantillas", "Un regalo", "Un reembolso"], answer: 1, why: "Se repite cada mes." },
          { objective: "O6", q: "Un programa promete \"10,000 dólares garantizados al mes con nuestras tiendas con IA\". ¿Qué es esto?", options: ["Una señal de alerta", "Una inversión segura", "Un programa del gobierno", "Una oferta de trabajo normal"], answer: 0, why: "Los ingresos garantizados son una señal clásica de estafa." },
          { objective: "O6", q: "¿Qué documento deberías pedir antes de comprar una oportunidad de negocio?", options: ["Tu propio estado de cuenta del banco", "El archivo de su logotipo", "El documento de divulgación de una página", "Una foto de una celebridad"], answer: 2, why: "La FTC dice que pidas este documento obligatorio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Estrategias para ganar dinero con IA",
    questions: [
      { objective: "O1", q: "Monetizar significa:", options: ["Gastar dinero", "Encontrar una forma de ganar dinero con algo", "Regalar algo", "Pedir dinero prestado"], answer: 1, why: "Esa es la definición." },
      { objective: "O1", q: "¿Cuál es un servicio con ayuda de IA?", options: ["Pagar anuncios", "Comprar criptomonedas", "Ver videos", "Escribir publicaciones para redes de clientes más rápido con IA"], answer: 3, why: "Haces trabajo para clientes con ayuda de la IA." },
      { objective: "O1", q: "Un producto digital es:", options: ["Un préstamo", "Un envío físico", "Una consulta de una sola vez", "Algo que se hace una vez y se vende muchas veces en línea"], answer: 3, why: "Las plantillas y las guías son ejemplos." },
      { objective: "O1", q: "Un enlace de afiliado:", options: ["Es un regalo gratis", "Te paga una comisión cuando alguien compra a través de él", "Es un formulario de impuestos", "Es una contraseña"], answer: 1, why: "Así funcionan los ingresos de afiliado." },
      { objective: "O1", q: "Los ahorros cuentan como forma de ganar dinero porque:", options: ["Evitan a los clientes", "Son gratis", "El dinero ahorrado en un negocio es dinero ganado", "La IA te paga"], answer: 2, why: "Costos más bajos suben la ganancia." },
      { objective: "O1", q: "La IA ayuda sobre todo:", options: ["Reduciendo el tiempo para hacer y entregar", "Garantizando ingresos", "Encontrando clientes de forma automática", "Quitando todo el trabajo"], answer: 0, why: "La IA acelera el trabajo; los clientes siguen necesitando valor." },
      { objective: "O2", q: "Si ya tienes un negocio, un buen comienzo es:", options: ["Empezar seis modelos nuevos", "Cerrarlo", "Los ahorros y un servicio adicional para tus clientes actuales", "Comprar un curso de ingresos con IA"], answer: 2, why: "Construye sobre lo que ya tienes." },
      { objective: "O2", q: "¿En cuántos modelos deberías enfocarte durante 90 días?", options: ["Uno", "Seis", "Ninguno", "En todos los posibles"], answer: 0, why: "Enfocarte da resultados." },
      { objective: "O3", q: "Los clientes pagan sobre todo por:", options: ["Tus minutos", "El resultado", "Tus herramientas", "Tu logotipo"], answer: 1, why: "Pon precio según el valor." },
      { objective: "O3", q: "Tu precio piso es:", options: ["El precio de un competidor", "El precio más alto", "Cero", "Los costos más la ganancia"], answer: 3, why: "Por debajo de él pierdes dinero." },
      { objective: "O3", q: "¿Quién fija y revisa tus precios finales?", options: ["Tú", "La IA", "Tu competidor", "Nadie"], answer: 0, why: "La IA puede sugerir; tú decides y revisas." },
      { objective: "O3", q: "Los ingresos por cuenta propia por lo general significan pagar:", options: ["Solo una cuota a la empresa de IA", "Ningún impuesto", "Solo impuesto sobre las ventas", "El impuesto sobre el trabajo por cuenta propia además del impuesto sobre la renta"], answer: 3, why: "Consulta el centro de impuestos para trabajadores por cuenta propia del IRS." },
      { objective: "O4", q: "Un buen producto digital se enfoca en:", options: ["Copiar un producto popular", "Todo para todos", "Un problema para un tipo de comprador", "Lo que sugiera la IA"], answer: 2, why: "El enfoque le da valor." },
      { objective: "O4", q: "Si tu producto dice \"gana 1,000 dólares al mes\", debes:", options: ["Agregar \"garantizado\"", "Poder demostrarlo", "Esconderlo en letra pequeña", "Nada"], answer: 1, why: "Las afirmaciones publicitarias deben ser verdaderas y estar respaldadas por evidencia." },
      { objective: "O5", q: "Un combo es:", options: ["Una prueba gratis", "Un solo artículo", "Un reembolso", "Varios productos o servicios que se venden juntos"], answer: 3, why: "Los combos suben el valor de cada venta." },
      { objective: "O5", q: "Si ganas dinero de un patrocinador, debes:", options: ["Mencionarlo una vez al año", "Esconderlo", "Avisarlo con claridad, como \"#publicidad\" al principio", "Decírselo solo a tus amigos"], answer: 2, why: "La guía de la FTC sobre recomendaciones exige un aviso claro." },
      { objective: "O5", q: "Una buena meta de lanzamiento de 30 días es:", options: ["5 ventas o 3 suscriptores", "Ninguna meta", "Un millón de usuarios", "Lo que pase"], answer: 0, why: "Las metas claras y pequeñas se pueden medir." },
      { objective: "O6", q: "En un caso de la FTC, una empresa prometía que la IA elegiría los mejores productos para tiendas en línea. La FTC dijo:", options: ["Que funcionaba perfecto", "Que sus promesas de ganancias no tenían base y la mayoría de los clientes no recuperó su dinero", "Que era un programa del gobierno", "Que todos se hicieron ricos"], answer: 1, why: "Esto viene de la alerta al consumidor de la FTC." },
      { objective: "O6", q: "¿Cuál es una señal de alerta?", options: ["Condiciones de reembolso claras", "Presión para comprar hoy con una cuota grande por adelantado", "Referencias a las que puedes llamar", "Un documento de divulgación por escrito"], answer: 1, why: "La presión y las cuotas grandes por adelantado son señales de estafa." },
      { objective: "O6", q: "¿Dónde puedes denunciar una posible estafa de oportunidad de negocio?", options: ["En ReportFraud.ftc.gov", "En el sitio web del estafador", "En un foro cualquiera", "En ningún lado"], answer: 0, why: "La FTC recibe las denuncias ahí." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      6,
      7,
      8,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Modelo y razón",
        objective: "O2",
        notYet: "No eligió un modelo, o eligió varios a la vez.",
        meets: "Un modelo con una razón escrita de por qué encaja con sus habilidades, su tiempo y su público.",
        exceeds: "También dice qué modelos descartó y por qué."
      },
      {
        name: "Precio según el valor",
        objective: "O3",
        notYet: "Precio por debajo del piso de costos, o sin cuentas.",
        meets: "Precio entre el piso y el valor, con dos precios de la competencia y las cuentas revisadas.",
        exceeds: "Explica el valor con las palabras del cliente."
      },
      {
        name: "Primer producto u oferta",
        objective: "O4",
        notYet: "Contenido de la IA sin revisar, o afirmaciones que no se pueden probar.",
        meets: "Una primera versión para un problema y un comprador, con los datos revisados y la experiencia propia del participante.",
        exceeds: "Se le mostró al menos a un posible comprador para recibir comentarios."
      },
      {
        name: "Prueba de lanzamiento",
        objective: "O5",
        notYet: "Sin meta o sin forma de seguirla.",
        meets: "Una prueba de 30 días con una meta clara, un mensaje de lanzamiento y seguimiento.",
        exceeds: "Incluye una oferta recurrente o un combo y dice claramente cualquier patrocinio."
      },
      {
        name: "Lista de señales de alerta",
        objective: "O6",
        notYet: "No hay lista, o le faltan los ingresos garantizados o las tácticas de presión.",
        meets: "Una lista que cubre las garantías, la presión, los pagos por adelantado y el documento de divulgación.",
        exceeds: "Anota dónde denunciar una posible estafa."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que alcanzan la meta de su prueba de lanzamiento de 30 días (encuesta de seguimiento)",
      "Participantes que reportan haber evitado un programa para ganar dinero con IA gracias a la lista de señales de alerta",
      "Participantes que empiezan otro curso de Koach Learn para emprendedores en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con un asistente de IA gratuito",
      "Una hoja de cálculo para las cuentas de precios y el seguimiento del lanzamiento",
      "Una lista de tus habilidades, tus horas, tu red de contactos y tu público",
      "Unos 60 minutos para las lecciones y las comprobaciones, más una prueba de lanzamiento de 30 días"
    ],
    facilitatorNotes: [
      "Di al principio que no se garantiza ningún ingreso y que el curso no da asesoría de inversión.",
      "Pide a los participantes que compartan en parejas el modelo y el precio que eligieron para revisar si son realistas.",
      "Revisen juntos ejemplos reales (públicos) de la FTC sobre esquemas para ganar dinero con IA y armen en grupo la lista de señales de alerta.",
      "Envía las preguntas de impuestos a fuentes oficiales o a un contador.",
      "Califica el plan para ganar dinero con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};

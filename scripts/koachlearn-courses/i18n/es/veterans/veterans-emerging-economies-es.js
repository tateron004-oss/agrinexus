"use strict";

// Koach Learn course (Spanish translation of veterans-emerging-economies). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Not legal, tax or investment advice. US agency names (SBA, FCPA, VBOC) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-emerging-economies-es",
  lang: "es",
  translationOf: "veterans-emerging-economies",
  category: "Veterans (military)",
  name: "Emprender en economías emergentes",
  skills: "Explicar qué es una economía emergente, Convertir tus habilidades militares en una idea de negocio, Investigar un mercado con IA y guías oficiales, Escribir un modelo de negocio de una página, Planear los costos y los riesgos, Encontrar ayuda oficial para negocios",
  outcome: "escribir un modelo de negocio de una página para un negocio pequeño en una economía emergente, o que venda a ella, basado en tus habilidades militares, con un plan de investigación que revise el mercado y las reglas en fuentes oficiales.",
  about: [
    "Este curso es para veteranos que tienen curiosidad por empezar un negocio en una economía de crecimiento rápido, como países de África, del sur y el sureste de Asia o de América Latina, o por venderles a clientes de esos lugares desde Estados Unidos. Muchos veteranos ya conocen estos lugares por sus despliegues y entienden de logística, seguridad, capacitación y trabajo entre culturas.",
    "Vas a aprender qué hace diferentes a las economías emergentes, convertir tus habilidades militares en una idea de negocio que resuelva un problema real, investigar el mercado con un asistente de IA gratuito y guías oficiales del gobierno, y escribir un modelo de negocio de una página. Vas a planear el dinero, los riesgos y la ley, y encontrar ayuda oficial gratuita como Boots to Business de la SBA (la Administración de Pequeñas Empresas de EE. UU.).",
    "Este curso te enseña a planear y probar una idea; no es asesoría legal, fiscal ni de inversión. Revisa las reglas con fuentes oficiales y profesionales locales calificados. Cada lección toma unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe un modelo de negocio de una página para una idea de negocio en una economía emergente con nombre: el cliente, el problema, tu solución y cómo encajan tus habilidades militares, cómo vas a llegar a los clientes, cómo vas a ganar dinero, tus costos principales y tus tres riesgos más grandes. Agrega un plan de investigación que nombre las fuentes oficiales que vas a revisar (la Country Commercial Guide del país y su agencia de registro de empresas) y un programa oficial de ayuda gratuita que vas a contactar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veteranos interesados en empezar un negocio en una economía de crecimiento rápido (África, el sur y el sudeste de Asia, América Latina) o en venderles a clientes de allí desde Estados Unidos. Muchos conocen estas regiones por sus despliegues.",
    startingPoint: "Traen experiencia en logística, seguridad, formación y trabajo con otras culturas, y saben usar una computadora o un teléfono inteligente. La mayoría no ha escrito un modelo de negocio ni ha investigado un mercado extranjero y sus reglas.",
    gap: "Las ideas de negocio basadas en suposiciones pueden hacer perder los ahorros rápido, y los mercados extranjeros tienen sus propias reglas, riesgos y leyes contra la corrupción. Necesitan convertir una habilidad militar en una idea de negocio clara, escribir un modelo de una página y planear cómo revisar el mercado y las reglas en fuentes oficiales antes de gastar dinero.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; no se supone experiencia en negocios",
      "Dispositivos: una computadora o un teléfono inteligente con internet y un asistente de IA gratuito",
      "Los datos que cambian (pasos de registro, impuestos, licencias, moneda) se revisan en fuentes oficiales, como las Country Commercial Guides de trade.gov y el registro de negocios del país",
      "Límites legales: ningún soborno de ningún tipo (FCPA de EE. UU.); las preguntas de contratos, impuestos y registro van a un abogado o contador local calificado",
      "Tiempo: lecciones de unos 5 minutos; este curso planea un negocio, no lo pone en marcha"
    ],
    prerequisites: "Ninguno. Quien sea nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y la fuerza laboral del futuro\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para una economía emergente que elijas", action: "explicar qué es una economía emergente y nombrar dos oportunidades y dos retos allí", standard: "marcando cada dato que hay que revisar" },
    { id: "O2", condition: "Con tus habilidades militares", action: "escribir una idea de negocio de una oración que relacione una habilidad con un problema local real", standard: "nombrando el servicio, el cliente, el lugar y cómo pagan" },
    { id: "O3", condition: "Para tu idea de negocio", action: "planear la investigación de mercado con la IA y revisar los datos clave en la Country Commercial Guide oficial y en el registro de negocios", standard: "respondiendo al menos dos preguntas de investigación con fuentes oficiales" },
    { id: "O4", condition: "Con tu idea de una oración", action: "escribir un modelo de negocio de una página con ayuda de la IA", standard: "con las siete partes y cada suposición marcada \"por probar\"" },
    { id: "O5", condition: "Para tu modelo de negocio", action: "hacer una lista de tus costos de arranque y de tus tres riesgos más grandes, con una forma de reducir cada uno", standard: "con precios de cotizaciones reales y sin ningún plan que dependa de un soborno" },
    { id: "O6", condition: "Antes de gastar dinero de verdad", action: "planear un piloto pequeño y barato de tu idea y elegir un programa oficial de ayuda para contactar", standard: "con el programa nombrado y una fecha para contactarlo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar la oportunidad",
      lessons: [
        {
          objectives: ["O1"],
          title: "Qué es una economía emergente",
          minutes: 5,
          goal: "Explicar qué es una economía emergente y nombrar dos oportunidades y dos retos.",
          text: [
            "Una economía emergente es un país cuya economía crece y cambia rápido, pasando de depender sobre todo de la agricultura o las materias primas a tener más industria, servicios y tecnología. Algunos ejemplos que se mencionan a menudo son Kenia, Nigeria, Ghana, India, Vietnam, Indonesia y Brasil.",
            "Oportunidades: poblaciones jóvenes y en crecimiento; crecimiento rápido de los teléfonos e internet; el dinero móvil, como M-Pesa en Kenia, que permite pagar con el teléfono; y faltas reales de servicios como electricidad, transporte, almacenamiento en frío, capacitación y seguridad.",
            "Retos: reglas que cambian, trámites más lentos, variaciones de la moneda, caminos o electricidad más débiles en algunas zonas y riesgo de corrupción. El éxito depende de socios locales, de la paciencia y de revisar los datos en fuentes oficiales."
          ],
          words: [["Economía emergente", "un país cuya economía crece y cambia rápido."], ["Dinero móvil", "una forma de enviar, recibir y guardar dinero en el teléfono, muchas veces sin cuenta de banco."], ["Variación de la moneda", "cuando el valor del dinero de un país sube o baja frente a otras monedas."]],
          slides: [
            { title: "Economía emergente", bullets: ["Crece y cambia rápido", "Ejemplos: Kenia, Nigeria, Ghana, India, Vietnam, Brasil"] },
            { title: "Oportunidades", bullets: ["Poblaciones jóvenes y en crecimiento", "Crecimiento rápido de teléfonos y dinero móvil", "Faltas de electricidad, transporte, almacenamiento, capacitación"] },
            { title: "Retos", bullets: ["Reglas que cambian y trámites más lentos", "Variaciones de la moneda", "Riesgo de corrupción: importan los socios locales y los datos"] }
          ],
          tryIt: "Elige una economía emergente que conozcas o que te dé curiosidad. Pregúntale a un asistente de IA: \"Con palabras sencillas, nombra tres necesidades en crecimiento y tres retos para los negocios en [país].\" Marca cada dato que vas a tener que revisar.",
          youCanNow: "explicar qué es una economía emergente y nombrar sus oportunidades y retos.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace que un país sea una economía emergente?", options: ["Todavía no tiene negocios", "Su economía crece y cambia rápido", "Solo vende petróleo", "Tiene las mismas reglas que Estados Unidos"], answer: 1, why: "Las economías emergentes crecen y cambian rápido, lo que trae oportunidades y también retos." },
            { objective: "O1", q: "Una IA te da tres retos para hacer negocios en un país que elegiste. ¿Qué haces?", options: ["Tomarlos como hechos comprobados", "Borrar la respuesta", "Elegir otro país de inmediato", "Marcar cada dato que tendrás que revisar en una fuente oficial"], answer: 3, why: "Las respuestas de la IA sobre otros países pueden estar mal o desactualizadas, así que marcas los datos por revisar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Convertir tus habilidades militares en una idea de negocio",
          minutes: 5,
          goal: "Relacionar una de tus habilidades militares con un problema local real y escribir una idea de negocio en una oración.",
          text: [
            "Las mejores ideas resuelven un problema real que la gente pagaría por resolver. Empieza con lo que sabes hacer. Las habilidades militares que encajan bien en los mercados emergentes incluyen la logística y el abastecimiento (mover y guardar mercancía), el mantenimiento de equipos eléctricos y generadores, la reparación de vehículos y equipo, la planeación de seguridad, las comunicaciones y la TI, la capacitación en apoyo médico, y enseñar y capacitar a personas.",
            "Luego relaciona una habilidad con un problema. Ejemplo: un exsuboficial de logística del Ejército ve que los pequeños agricultores pierden sus productos antes de llegar al mercado. Idea: \"Un servicio compartido de almacenamiento en frío y recolección para pequeños agricultores cerca de Nakuru, pagado por caja con dinero móvil.\"",
            "Pídele ideas a la IA, pero tú eliges. Instrucción: \"Fui electricista de la Armada durante 8 años. Haz una lista de 10 ideas de negocios pequeños en Ghana que usen estas habilidades para resolver un problema local. Una línea cada una.\" Elige la que puedas probar con poco dinero."
          ],
          steps: ["Haz una lista de tres habilidades militares en las que eres bueno.", "Haz una lista de tres problemas reales en el país que elegiste.", "Pídele a la IA ideas que las relacionen.", "Elige una idea que puedas probar con poco dinero.", "Escríbela en una oración: servicio, cliente, lugar y cómo pagan."],
          words: [["Idea de negocio", "un producto o servicio que resuelve un problema para un cliente que va a pagar."], ["Pequeño agricultor", "un agricultor con un terreno pequeño, algo común en muchas economías emergentes."]],
          slides: [
            { title: "Habilidades militares que encajan", bullets: ["Logística, abastecimiento y almacenamiento", "Electricidad, generadores, vehículos", "Seguridad, comunicaciones, capacitación"] },
            { title: "Habilidad + problema real = idea", bullets: ["Suboficial de logística ve agricultores perdiendo productos", "Idea: almacenamiento en frío compartido, pagado por caja"] },
            { title: "Escríbela en una oración", bullets: ["Servicio", "Cliente", "Lugar", "Cómo pagan"] }
          ],
          tryIt: "Pídele a un asistente de IA diez ideas de negocio que usen tus habilidades militares en el país que elegiste. Elige una y escríbela en una oración: servicio, cliente, lugar y cómo pagan.",
          youCanNow: "convertir una habilidad militar en una idea de negocio de una oración que resuelva un problema local.",
          quickCheck: [
            { objective: "O2", q: "¿Qué hace fuerte a una idea de negocio?", options: ["Resuelve un problema real que la gente pagaría por resolver", "Copia a la empresa más grande", "No necesita clientes", "Te suena emocionante"], answer: 0, why: "Un negocio dura cuando resuelve un problema real por el que los clientes pagan." },
            { objective: "O2", q: "La IA te da diez ideas de negocio. ¿Qué haces?", options: ["Empezar las diez", "Dejar que la IA elija una", "Elegir una que use tus habilidades y escribirla en una oración", "Elegir la de números más grandes"], answer: 2, why: "Tú eliges la idea que encaja con tus habilidades y la escribes con claridad: servicio, cliente, lugar y cómo pagan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Investigar el mercado con IA y guías oficiales",
          minutes: 6,
          goal: "Usar la IA para planear la investigación de mercado y revisar los datos clave en la Country Commercial Guide oficial.",
          text: [
            "La IA te puede ayudar a planear la investigación y hacer una lista de preguntas, pero puede equivocarse o estar desactualizada sobre mercados y leyes de otros países. Úsala para hacer borradores; usa fuentes oficiales para revisar.",
            "La International Trade Administration (Administración de Comercio Internacional) del Departamento de Comercio de EE. UU. publica las Country Commercial Guides (guías comerciales por país), preparadas por personal de las embajadas de EE. UU., que cubren cómo funciona un mercado, las oportunidades, las reglas y las costumbres de negocios. Su U.S. Commercial Service también ayuda a las empresas de EE. UU. que venden en el extranjero con investigación de mercado y contactos.",
            "Para abrir una empresa en el país mismo, busca su registro oficial de empresas. En Kenia es el Business Registration Service (brs.go.ke); en Nigeria es la Corporate Affairs Commission (cac.gov.ng). Lee tú mismo sus pasos y costos actuales, y habla con cinco posibles clientes antes de gastar dinero de verdad."
          ],
          steps: ["Pregúntale a la IA: \"¿Qué 10 preguntas debo responder antes de empezar [idea] en [país]?\"", "Lee la Country Commercial Guide del país en trade.gov.", "Encuentra el registro oficial de empresas del país y lee sus pasos actuales.", "Habla con cinco posibles clientes sobre el problema.", "Anota lo que confirmaste y lo que todavía no sabes."],
          words: [["Country Commercial Guide", "un informe del gobierno de EE. UU. sobre cómo funcionan los negocios en un país extranjero."], ["Registro de empresas", "la oficina oficial del gobierno donde se registran las empresas y los nombres comerciales."], ["Investigación de mercado", "averiguar quiénes son tus clientes, qué necesitan y cuánto van a pagar."]],
          slides: [
            { title: "La IA hace borradores, las fuentes oficiales revisan", bullets: ["IA: planear preguntas e investigación", "Guías oficiales: confirmar los datos"] },
            { title: "Country Commercial Guides", bullets: ["De la International Trade Administration", "Preparadas por personal de las embajadas de EE. UU.", "Mercado, reglas, oportunidades, costumbres"] },
            { title: "Empezar en el país", bullets: ["Kenia: Business Registration Service", "Nigeria: Corporate Affairs Commission", "Lee tú mismo los pasos y costos actuales"] },
            { title: "Habla con clientes", bullets: ["Primero cinco conversaciones reales", "Antes de gastar dinero de verdad"] }
          ],
          sources: [
            { name: "International Trade Administration: Country Commercial Guides", url: "https://www.trade.gov/country-commercial-guides" },
            { name: "International Trade Administration: soluciones para exportar (U.S. Commercial Service)", url: "https://www.trade.gov/export-solutions" },
            { name: "Kenia: Business Registration Service", url: "https://brs.go.ke/" },
            { name: "Nigeria: Corporate Affairs Commission", url: "https://www.cac.gov.ng/" }
          ],
          tryIt: "Pídele a un asistente de IA las diez preguntas que debes responder antes de empezar tu idea. Luego abre la Country Commercial Guide de tu país en trade.gov y responde dos de ellas con lo que dice.",
          youCanNow: "planear la investigación de mercado con IA y revisar los datos clave en guías y registros oficiales.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una Country Commercial Guide?", options: ["Una guía de viaje para turistas", "Una guía escrita por una IA", "Una lista de hoteles", "Una guía oficial para hacer negocios en un país, de la International Trade Administration"], answer: 3, why: "Las Country Commercial Guides son guías oficiales de mercado que prepara el personal de las embajadas de EE. UU. y que publica la ITA." },
            { objective: "O3", q: "La IA te dice los pasos para registrar una empresa en Kenia. ¿Qué haces?", options: ["Seguirlos tal como están", "Revisarlos con el Business Registration Service de Kenia", "Preguntarle a un amigo en internet", "Saltarte el registro"], answer: 1, why: "Los pasos de registro salen del registro oficial del propio país." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar la oportunidad",
        questions: [
          { objective: "O1", q: "La mejor descripción de una economía emergente es:", options: ["Un país cuya economía crece y cambia rápido", "Un país sin negocios", "Cualquier país isla", "Un país sin teléfonos"], answer: 0, why: "Las economías emergentes crecen y cambian rápido." },
          { objective: "O1", q: "¿Qué es el dinero móvil?", options: ["Efectivo guardado en un auto", "Enviar, recibir y guardar dinero en un teléfono", "Un tipo de tarjeta de crédito", "Un programa del gobierno de EE. UU."], answer: 1, why: "Servicios como M-Pesa permiten pagar con el teléfono, muchas veces sin cuenta de banco." },
          { objective: "O2", q: "Un exsuboficial de logística quiere una idea de negocio. El mejor punto de partida es:", options: ["Lo que esté de moda en internet", "La idea con el precio más alto", "Una habilidad que tiene relacionada con un problema local real", "Copiar la idea de un amigo"], answer: 2, why: "Las buenas ideas resuelven problemas reales que la gente pagaría por resolver." },
          { objective: "O3", q: "¿Quién prepara las Country Commercial Guides?", options: ["Una empresa de IA", "Un grupo de redes sociales", "Los periódicos locales", "Personal de las embajadas de EE. UU., publicadas por la International Trade Administration"], answer: 3, why: "La International Trade Administration las publica, preparadas por personal de las embajadas de EE. UU." },
          { objective: "O3", q: "¿Dónde revisas los pasos para registrar una empresa en Nigeria?", options: ["En la Corporate Affairs Commission (CAC)", "En un anuncio emergente", "Solo en un chatbot de IA", "En el sitio web de un estado de EE. UU."], answer: 0, why: "La CAC es el registro oficial de empresas de Nigeria." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear el negocio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir un modelo de negocio de una página",
          minutes: 6,
          goal: "Escribir un modelo de negocio de una página con ayuda de la IA.",
          text: [
            "Un modelo de negocio de una página responde las preguntas clave en una sola hoja: ¿Quién es el cliente? ¿Qué problema tiene? ¿Cuál es tu solución? ¿Por qué tú (tus habilidades y tu ventaja)? ¿Cómo vas a llegar a los clientes? ¿Cómo vas a ganar dinero? ¿Cuáles son tus costos principales?",
            "Dale a la IA tu idea de una oración y tus notas, y luego pide: \"Convierte esto en un modelo de negocio de una página con estos títulos: cliente, problema, solución, por qué yo, canales, ingresos, costos. Que cada uno tenga dos o tres líneas.\"",
            "Léelo con ojo crítico. Si la IA dice \"los agricultores pagarán con gusto\", pregúntate: ¿me lo dijo un agricultor? Cambia las suposiciones por lo que aprendiste de clientes reales y marca lo demás como \"por probar\"."
          ],
          steps: ["Dale a la IA tu idea de una oración y tus notas de investigación.", "Pide un modelo de una página con cliente, problema, solución, por qué yo, canales, ingresos y costos.", "Cambia las suposiciones por lo que te dijeron clientes reales.", "Marca todo lo que no esté probado como \"por probar\"."],
          words: [["Modelo de negocio", "cómo un negocio crea valor para los clientes y gana dinero."], ["Ingresos", "el dinero que entra de los clientes."], ["Canal", "la forma en que llegas a los clientes y les vendes."]],
          slides: [
            { title: "Una página, siete preguntas", bullets: ["Cliente y problema", "Solución y por qué tú", "Canales e ingresos", "Costos"] },
            { title: "Deja que la IA haga el borrador", bullets: ["Dale tu idea y tus notas", "Pide dos o tres líneas por título"] },
            { title: "Luego cuestiónalo", bullets: ["¿Lo dijo un cliente real?", "Cambia suposiciones por datos", "Marca lo demás como \"por probar\""] }
          ],
          tryIt: "Pídele a un asistente de IA que convierta tu idea de una oración en un modelo de negocio de una página con los siete títulos. Marca cada línea que sea una suposición como \"por probar\".",
          youCanNow: "escribir un modelo de negocio de una página y separar los datos de las suposiciones.",
          quickCheck: [
            { objective: "O4", q: "En un modelo de negocio, ¿qué son los ingresos?", options: ["El dinero que gastas en equipo", "Tus ahorros totales", "El dinero que entra de los clientes", "El número de empleados"], answer: 2, why: "Los ingresos son el dinero que entra de los clientes." },
            { objective: "O4", q: "Tu modelo dice que los clientes pagarán $20 al mes, pero nadie te lo ha dicho. ¿Qué haces?", options: ["Marcarlo \"por probar\" y preguntarles a clientes reales", "Subirlo a $40", "Dejarlo como un hecho", "Borrar la sección de ingresos"], answer: 0, why: "Las suposiciones quedan marcadas \"por probar\" hasta que clientes reales las confirmen." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planear el dinero, los riesgos y la ley",
          minutes: 5,
          goal: "Hacer una lista de tus costos de arranque, tus tres riesgos más grandes y cómo vas a reducir cada uno.",
          text: [
            "Haz una lista de lo que necesitas para empezar: equipo, transporte, espacio, registro y licencias, un socio local o personal, y suficiente dinero para operar varios meses antes de que las ventas cubran los costos. Pídele a la IA una lista de verificación y luego consigue precios reales en el lugar. No confíes en los precios que adivina la IA.",
            "Riesgos comunes: variaciones de la moneda (tus costos y tus precios en monedas distintas), electricidad o transporte poco confiables, pagos atrasados, socios que no cumplen, robos y reglas que cambian. Para cada uno, escribe cómo lo vas a reducir: por ejemplo, poner precios en moneda local y revisarlos cada trimestre, tener un generador de respaldo o hacer un acuerdo por escrito.",
            "Nunca pagues un soborno. Además de las leyes locales, la Foreign Corrupt Practices Act (FCPA, Ley de Prácticas Corruptas en el Extranjero) de EE. UU. hace que sea un delito que personas de EE. UU. ofrezcan o paguen algo de valor a un funcionario extranjero para ganar o mantener un negocio. Para contratos, impuestos y registro, usa un abogado o contador local calificado."
          ],
          steps: ["Pídele a la IA una lista de verificación de costos de arranque para tu idea.", "Consigue precios locales reales para cada cosa.", "Haz una lista de tus tres riesgos más grandes.", "Escribe una forma de reducir cada riesgo.", "Anota qué preguntas necesitan a un abogado o contador local."],
          words: [["Costos de arranque", "el dinero que necesitas antes de que el negocio gane lo suficiente para pagarse solo."], ["Soborno", "algo de valor que se le da a un funcionario para obtener una ventaja injusta; es ilegal."], ["Foreign Corrupt Practices Act", "una ley de EE. UU. que hace delito sobornar a funcionarios extranjeros para conseguir negocios."]],
          slides: [
            { title: "Costos de arranque", bullets: ["Equipo, transporte, espacio", "Registro, licencias, personal", "Meses de operación antes de que las ventas los cubran"] },
            { title: "Riesgos principales y soluciones", bullets: ["Variaciones de la moneda: revisa los precios seguido", "Electricidad o transporte: ten un respaldo", "Socios: acuerdos por escrito"] },
            { title: "Mantente dentro de la ley", bullets: ["Nunca pagues un soborno", "La FCPA de EE. UU. hace delito el soborno en el extranjero", "Usa un abogado o contador local calificado"] }
          ],
          sources: [{ name: "Departamento de Justicia de EE. UU.: Foreign Corrupt Practices Act", url: "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act" }],
          tryIt: "Pídele a un asistente de IA una lista de verificación de costos de arranque para tu idea. Luego escribe tus tres riesgos más grandes y una forma de reducir cada uno.",
          youCanNow: "planear los costos de arranque, nombrar tus riesgos principales con soluciones y conocer los límites legales que no debes cruzar.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un costo de arranque?", options: ["El dinero que te pagan los clientes", "Los cargos de registro y el equipo", "El número de teléfono de un cliente", "La oración de tu idea de negocio"], answer: 1, why: "Los costos de arranque incluyen equipo, registro, personal y meses de costos de operación." },
            { objective: "O5", q: "Un empleado de una oficina te dice que un pequeño pago en efectivo acelerará tu licencia. ¿Qué haces?", options: ["Pagarlo sin decir nada", "Pagarlo a través de un amigo", "Prometer pagarlo después", "Negarte, porque el soborno es ilegal, también según la FCPA de EE. UU."], answer: 3, why: "Pagarle a un funcionario extranjero para hacer negocios es delito según la Foreign Corrupt Practices Act de EE. UU." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Probar la idea y conseguir ayuda oficial",
          minutes: 5,
          goal: "Planear una prueba pequeña y barata de tu idea y elegir un programa oficial de ayuda para contactar.",
          text: [
            "Antes de mudarte al extranjero o gastar tus ahorros, prueba en pequeño. Haz un piloto: atiende a diez clientes, vende un lote pequeño o asóciate con un negocio local durante un mes. Lleva la cuenta de lo que pagan los clientes, lo que te cuesta y lo que sale mal. La IA te puede ayudar a diseñar una hoja de registro sencilla.",
            "Ayuda oficial gratuita: Boots to Business de la SBA es un curso de emprendimiento que se ofrece a través del Transition Assistance Program para militares, Guardia Nacional, Reserva y cónyuges de militares; Boots to Business Reboot lo extiende a veteranos de todas las épocas. Los Veterans Business Outreach Centers (centros de apoyo a negocios de veteranos) ofrecen talleres, mentoría y ayuda con el plan de negocio. El U.S. Commercial Service ayuda a las empresas de EE. UU. que venden en el extranjero.",
            "Llévales tu modelo de una página. Un mentor que ya hizo negocios en el extranjero te puede salvar de errores caros."
          ],
          steps: ["Diseña un piloto pequeño: cuántos clientes, cuánto tiempo, qué medir.", "Pídele a la IA una hoja de registro sencilla: ventas, costos, problemas.", "Elige un programa oficial de ayuda.", "Contáctalo y lleva tu modelo de una página."],
          words: [["Piloto", "una prueba pequeña y corta de una idea de negocio antes de entrar de lleno."], ["Boots to Business", "un curso gratuito de emprendimiento de la SBA para militares, veteranos y cónyuges de militares."], ["Veterans Business Outreach Center", "un centro apoyado por la SBA que da capacitación y mentoría de negocios a veteranos."]],
          slides: [
            { title: "Primero prueba en pequeño", bullets: ["Diez clientes, un lote o un mes", "Lleva la cuenta de ventas, costos y problemas", "La IA puede armar la hoja de registro"] },
            { title: "Ayuda oficial gratuita", bullets: ["SBA: Boots to Business y Reboot", "Veterans Business Outreach Centers", "U.S. Commercial Service para vender en el extranjero"] },
            { title: "Lleva tu modelo de una página", bullets: ["Pide un mentor que ya lo haya hecho", "Aprende antes de gastar mucho"] }
          ],
          sources: [
            { name: "SBA: Boots to Business", url: "https://www.sba.gov/sba-learning-platform/boots-business" },
            { name: "SBA: negocios de veteranos (VBOC, Boots to Business Reboot)", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "International Trade Administration: soluciones para exportar", url: "https://www.trade.gov/export-solutions" }
          ],
          tryIt: "Tarea final: termina tu modelo de negocio de una página con cliente, problema, solución y cómo encajan tus habilidades militares, canales, ingresos, costos y tus tres riesgos más grandes. Agrega un plan de investigación que nombre la Country Commercial Guide, el registro de empresas del país y un programa oficial de ayuda que vas a contactar.",
          youCanNow: "planear una prueba pequeña de tu idea de negocio y conseguir ayuda oficial gratuita para construirla.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un piloto?", options: ["Una prueba pequeña y corta de tu idea", "Un lanzamiento completo en todas las ciudades", "Un préstamo para negocios", "Un tipo de licencia"], answer: 0, why: "Un piloto prueba tu idea con poco dinero antes de gastar dinero de verdad." },
            { objective: "O6", q: "Terminaste tu modelo de una página. ¿Qué ayuda oficial agregas a tu plan?", options: ["Un seminario de pago de un anuncio en internet", "Ninguna ayuda, solo empezar", "Boots to Business u otro programa oficial gratuito", "Un desconocido que promete ganancias rápidas"], answer: 2, why: "Los programas oficiales gratuitos, como Boots to Business de la SBA, enseñan a los veteranos a empezar negocios." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear el negocio",
        questions: [
          { objective: "O4", q: "¿Qué es parte de un modelo de negocio de una página?", options: ["Tu color favorito", "El cliente, el problema y cómo ganas dinero", "Tu lista de condecoraciones militares", "Tu contraseña del banco"], answer: 1, why: "El modelo responde quién, qué problema, qué solución y cómo ganas dinero." },
          { objective: "O4", q: "El modelo de la IA dice que los clientes \"pagarán con gusto\". Ningún cliente te lo dijo. Tú:", options: ["Lo dejas como un hecho", "Borras todo el modelo", "Lo marcas como \"por probar\" y les preguntas a clientes reales", "Duplicas el precio"], answer: 2, why: "Las suposiciones se deben probar con clientes reales." },
          { objective: "O5", q: "¿De dónde deben salir tus precios de arranque?", options: ["De lo que adivina la IA", "De lo que adivina un amigo", "De las noticias del año pasado", "De cotizaciones reales de proveedores locales"], answer: 3, why: "Los precios que adivina la IA pueden estar muy lejos; consigue precios locales reales." },
          { objective: "O5", q: "Un funcionario insinúa que un pago aceleraría tu licencia. Tú:", options: ["Te niegas; el soborno es ilegal, incluso según la FCPA de EE. UU.", "Pagas una cantidad pequeña", "Pagas a través de un amigo", "Le preguntas a la IA cómo ocultarlo"], answer: 0, why: "La FCPA hace delito que personas de EE. UU. paguen a funcionarios extranjeros para conseguir negocios." },
          { objective: "O6", q: "¿Qué programa gratuito de la SBA enseña emprendimiento a los militares en transición?", options: ["VET TEC 2.0", "Boots to Business", "TRICARE", "El Military Crosswalk"], answer: 1, why: "Boots to Business es el curso de emprendimiento de la SBA dentro de TAP." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Emprender en economías emergentes",
    questions: [
      { objective: "O1", q: "¿Cuál es una oportunidad común en las economías emergentes?", options: ["Poblaciones que se reducen", "Crecimiento rápido de los teléfonos y el dinero móvil", "Ninguna necesidad de servicios", "Reglas fijas que nunca cambian"], answer: 1, why: "El crecimiento de los teléfonos y el dinero móvil abre nuevas formas de llegar a los clientes." },
      { objective: "O1", q: "¿Cuál es un reto común en las economías emergentes?", options: ["Muy pocos clientes en todas partes", "Ningún teléfono", "Variaciones de la moneda y reglas que cambian", "Ninguna persona joven"], answer: 2, why: "Las variaciones de la moneda y las reglas que cambian son riesgos comunes." },
      { objective: "O1", q: "M-Pesa en Kenia es un ejemplo de:", options: ["Un asalto a un banco", "Un registro del gobierno", "Una unidad militar", "Dinero móvil"], answer: 3, why: "M-Pesa permite pagar y guardar dinero con el teléfono." },
      { objective: "O2", q: "Una idea de negocio fuerte:", options: ["Resuelve un problema real que la gente pagaría por resolver", "Copia lo que esté de moda", "No tiene clientes", "No necesita pruebas"], answer: 0, why: "Los clientes pagan por resolver problemas reales." },
      { objective: "O2", q: "¿Qué habilidad militar suele encajar en los mercados emergentes?", options: ["Ninguna", "Logística, abastecimiento y almacenamiento", "Solo marchar", "Solo el papeleo"], answer: 1, why: "Mover y guardar mercancía es una falta común." },
      { objective: "O2", q: "Una idea de negocio de una oración debe incluir:", options: ["Tu rango", "Tu número de Seguro Social", "Servicio, cliente, lugar y cómo pagan", "Solo el precio"], answer: 2, why: "Esas cuatro partes aclaran la idea." },
      { objective: "O2", q: "Cuando la IA te da ideas de negocio, ¿quién elige?", options: ["La IA", "Un desconocido en internet", "La primera idea de la lista", "Tú"], answer: 3, why: "La IA sugiere; tú decides según tus habilidades y el mercado." },
      { objective: "O3", q: "¿Para qué debes usar la IA en la investigación de mercado?", options: ["Para planear preguntas y hacer borradores, y luego revisar los datos en fuentes oficiales", "Para respuestas legales finales", "Para precios locales exactos", "Para registrar tu empresa"], answer: 0, why: "La IA hace borradores; las fuentes oficiales y los clientes reales confirman." },
      { objective: "O3", q: "Las Country Commercial Guides las publica:", options: ["Un blog privado", "La International Trade Administration", "El VA", "Una empresa de IA"], answer: 1, why: "Vienen de la International Trade Administration del Departamento de Comercio de EE. UU." },
      { objective: "O3", q: "La oficina oficial de Kenia para registrar un negocio es:", options: ["El VA", "La SBA", "El Business Registration Service", "La Corporate Affairs Commission"], answer: 2, why: "El Business Registration Service de Kenia se encarga del registro de empresas." },
      { objective: "O3", q: "Antes de gastar dinero de verdad, deberías hablar con:", options: ["Nadie", "Solo tu familia", "Solo la IA", "Al menos cinco posibles clientes"], answer: 3, why: "Los clientes reales te dicen si el problema y el precio son reales." },
      { objective: "O4", q: "Los ingresos son:", options: ["El dinero que entra de los clientes", "El dinero que gastas en renta", "Un tipo de préstamo", "Un formulario de impuestos"], answer: 0, why: "Los ingresos son el dinero de las ventas." },
      { objective: "O4", q: "Un \"canal\" en un modelo de negocio es:", options: ["Una estación de televisión", "La forma en que llegas a los clientes y les vendes", "Un río", "Una cuenta de banco"], answer: 1, why: "Los canales son cómo los clientes te encuentran y te compran." },
      { objective: "O4", q: "Las líneas de tu modelo que ningún cliente ha confirmado deben:", options: ["Borrarse", "Hacerse más grandes", "Marcarse como \"por probar\"", "Tratarse como hechos"], answer: 2, why: "Las suposiciones sin probar necesitan pruebas." },
      { objective: "O5", q: "Los costos de arranque incluyen:", options: ["Solo la primera venta", "Solo tu cuenta de teléfono", "Nada; los negocios son gratis", "Equipo, registro, personal y meses de costos de operación"], answer: 3, why: "Necesitas dinero para operar hasta que las ventas cubran los costos." },
      { objective: "O5", q: "Una forma de reducir el riesgo de la moneda es:", options: ["Revisar tus precios seguido", "Ignorar los tipos de cambio", "Mantener todos los precios fijos para siempre", "Cobrar con tarjetas de regalo"], answer: 0, why: "Revisar los precios con regularidad te ayuda a seguir las variaciones de la moneda." },
      { objective: "O5", q: "La Foreign Corrupt Practices Act de EE. UU. hace delito:", options: ["Empezar un negocio en el extranjero", "Pagarle a un funcionario extranjero para ganar o mantener un negocio", "Usar dinero móvil", "Contratar personal local"], answer: 1, why: "La FCPA prohíbe sobornar a funcionarios extranjeros para conseguir negocios." },
      { objective: "O5", q: "Para preguntas de contratos, impuestos y registro deberías usar:", options: ["Solo la IA", "Una encuesta en redes sociales", "Un abogado o contador local calificado", "Suposiciones"], answer: 2, why: "Las reglas legales y fiscales necesitan a un profesional calificado." },
      { objective: "O6", q: "Un piloto es:", options: ["Mudarte al extranjero con tus ahorros", "Un préstamo", "Un formulario del gobierno", "Una prueba pequeña y corta de tu idea"], answer: 3, why: "Un piloto prueba la idea antes de entrar de lleno." },
      { objective: "O6", q: "Boots to Business Reboot extiende el curso de la SBA a:", options: ["Veteranos de todas las épocas", "Solo oficiales en servicio activo", "Solo ciudadanos extranjeros", "Nadie"], answer: 0, why: "La SBA dice que Reboot extiende Boots to Business a veteranos de todas las épocas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Cliente, problema y encaje",
        objective: "O2",
        notYet: "El cliente o el problema es vago, o no se relaciona la habilidad militar.",
        meets: "Un cliente nombrado, un problema real, una solución y cómo encaja una habilidad militar.",
        exceeds: "Puede decir cómo sabe que el problema es real."
      },
      {
        name: "Modelo de negocio completo",
        objective: "O4",
        notYet: "Faltan los canales, los ingresos o los costos.",
        meets: "Las siete partes en una página, con las suposiciones marcadas \"por probar\".",
        exceeds: "Cada línea \"por probar\" tiene una forma de probarla."
      },
      {
        name: "Riesgos",
        objective: "O5",
        notYet: "Menos de tres riesgos, o ninguna forma de reducirlos.",
        meets: "Los tres riesgos más grandes, cada uno con una forma de reducirlo, y ningún plan que dependa de un soborno.",
        exceeds: "Los riesgos incluyen la moneda y las reglas, con un profesional nombrado a quien preguntar."
      },
      {
        name: "Plan de investigación",
        objective: "O3",
        notYet: "No se nombra ninguna fuente oficial.",
        meets: "Nombra la Country Commercial Guide y la agencia de registro de negocios del país.",
        exceeds: "Muestra dos preguntas de investigación ya respondidas con esas fuentes."
      },
      {
        name: "Ayuda oficial",
        objective: "O6",
        notYet: "No se nombra ningún programa de ayuda.",
        meets: "Un programa oficial y gratuito de ayuda que va a contactar.",
        exceeds: "Incluye una fecha para contactarlo y un piloto pequeño para hacer primero."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que hablan con al menos cinco posibles clientes dentro de 30 días (encuesta de seguimiento)",
      "Personas que se inscriben en Boots to Business u otro programa oficial dentro de 90 días",
      "Personas que hacen un piloto pequeño o registran un negocio dentro de 6 meses"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono inteligente con internet",
      "Un asistente de IA gratuito: ChatGPT, Microsoft Copilot o Google Gemini",
      "Las Country Commercial Guides gratuitas de trade.gov y el sitio web del registro de negocios del país elegido",
      "Papel o un documento para el modelo de negocio de una página",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Deja que cada persona elija un país que conozca; agrupa a quienes eligieron la misma región para que compartan fuentes.",
      "Insiste en que cada dato sobre registro, impuestos o licencias salga de una fuente oficial, no de la IA.",
      "Deja claro que los sobornos nunca forman parte de un plan, y que las preguntas de contratos e impuestos van a un abogado o contador local calificado.",
      "Califica el modelo de negocio final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez.",
      "Dirige a las personas a Boots to Business de la SBA y a los Veterans Business Outreach Centers para los siguientes pasos."
    ]
  }
};

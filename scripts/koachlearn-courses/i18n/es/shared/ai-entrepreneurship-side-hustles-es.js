"use strict";

// Koach Learn course (shared), Spanish translation of "Entrepreneurship and Side Hustles with AI". Rules: ../../../README.md (Translations).
// Quick-start course: earn a first dollar from a small side hustle. The longer business-building path is ai-entrepreneurship-pathways.

module.exports = {
  id: "ai-entrepreneurship-side-hustles-es",
  lang: "es",
  translationOf: "ai-entrepreneurship-side-hustles",
  category: "Re-Entry",
  name: "Emprendimiento y trabajos extra con IA",
  skills: "Elegir un trabajo extra según tus habilidades, Revisar reglas y licencias, Probar la demanda sin gastar mucho, Ponerle precio a tu servicio, Escribir una oferta y un volante con IA, Llevar el control del dinero y los impuestos",
  outcome: "elegir un trabajo extra que encaje con tus habilidades y tus reglas, probar si la gente pagará, fijar un precio, usar la IA para escribir tu oferta y un volante o una publicación, y anotar cada dólar que entra y sale para estar listo en la temporada de impuestos.",
  about: [
    "Un trabajo extra es una forma pequeña de ganar dinero por tu cuenta: cortar el pelo, limpiar, cuidar jardines, ayudar con mudanzas, cocinar, lavar y detallar autos, dar clases, vender artesanías o hacer reparaciones pequeñas. Muchas personas que vuelven a casa usan uno para tener ingresos y confianza mientras buscan empleo, o como un paso hacia su propio negocio.",
    "Los asistentes de IA como ChatGPT, Microsoft Copilot y Google Gemini te pueden ayudar gratis a elegir una idea, calcular un precio, escribir tu oferta y hacer marketing sencillo.",
    "Este curso es corto y práctico: la meta es tu primer cliente que paga. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas. Revisa tus condiciones de libertad condicional o vigilada antes de empezar cualquier negocio, y pregúntale a tu oficial si no estás seguro."
  ],
  finalTask: "Elige un trabajo extra y crea una hoja de lanzamiento de una página: el servicio y para quién es, las reglas o licencias que revisaste (y dónde), tu precio y cómo lo calculaste, una oferta corta escrita con ayuda de la IA, un volante o una publicación, una lista de cinco personas o lugares a quienes contarles, y un registro de dinero sencillo listo para tu primera venta.",
  chapters: [
    {
      name: "Capítulo 1: Elegir y probar tu trabajo extra",
      lessons: [
        {
          title: "Elegir un trabajo extra según tus habilidades",
          minutes: 5,
          goal: "Hacer una lista de ideas de trabajo extra que encajen con tus habilidades, tu tiempo y tu dinero.",
          text: [
            "El mejor primer trabajo extra usa habilidades que ya tienes, necesita poco dinero para empezar y encaja en tu horario. Si cocinabas dentro, piensa en preparar comidas o ayudar en eventos. Si hacías mantenimiento, piensa en reparaciones pequeñas o trabajo de jardín. Si la gente siempre te pide que le arregles el pelo, empieza por ahí.",
            "Pide ideas a la IA: “Soy bueno para cocinar y limpiar, tengo unas 10 horas por semana, no tengo auto y tengo menos de $100 para empezar. Sugiere 10 trabajos extra que podría empezar en mi barrio”. Luego tacha los que no encajan contigo.",
            "Revisa primero tus reglas. Las condiciones de libertad condicional o vigilada pueden limitar algunos trabajos, los viajes o el manejo de efectivo. Algunos oficios, como barbería, cosmetología, electricidad o contratista, necesitan una licencia del estado. Algunas licencias toman en cuenta los antecedentes penales; el sitio web de la junta de licencias de tu estado explica sus reglas."
          ],
          steps: ["Haz una lista de tus habilidades, tus horas por semana y el dinero para empezar.", "Pide a la IA diez ideas que encajen.", "Tacha las ideas que no encajan con tu vida.", "Revisa tus condiciones de libertad condicional o vigilada.", "Revisa si el trabajo necesita una licencia del estado."],
          words: [["Trabajo extra", "una forma pequeña de ganar dinero por tu cuenta, muchas veces a tiempo parcial."], ["Licencia", "un permiso oficial del estado o la ciudad para hacer cierto trabajo."]],
          slides: [
            { title: "Un buen primer trabajo extra", bullets: ["Usa habilidades que ya tienes", "Poco dinero para empezar", "Encaja en tu horario"] },
            { title: "Pide ideas a la IA", bullets: ["Cuéntale tus habilidades, tiempo, dinero y transporte", "Pide diez ideas", "Tacha lo que no encaja"] },
            { title: "Revisa primero las reglas", bullets: ["Condiciones de libertad condicional o vigilada", "Licencias del estado para algunos oficios", "El sitio web de la junta de licencias de tu estado"] }
          ],
          tryIt: "Pide a la IA diez ideas de trabajo extra con tus habilidades, tu tiempo y tu presupuesto reales. Elige tus dos favoritas y escribe qué reglas o licencias tienes que revisar para cada una.",
          youCanNow: "elegir ideas de trabajo extra que encajen con tus habilidades y saber qué reglas revisar."
        },
        {
          title: "Probar si la gente pagará",
          minutes: 5,
          goal: "Probar en una semana, sin gastar dinero, si hay demanda para tu idea.",
          text: [
            "Antes de comprar materiales, averigua si la gente lo quiere. Habla con diez personas que podrían ser clientes: vecinos, gente de la iglesia, amigos de la familia, personas de tu centro de reinserción. Pregunta: “¿Le pagarías a alguien por [servicio]? ¿Cada cuánto? ¿Cuánto esperarías pagar?”.",
            "Mira a tu alrededor: ¿hay otros que ya lo hacen cerca? Es una buena noticia; quiere decir que la gente paga por eso. Pregunta a la IA: “¿De qué se suelen quejar los clientes de [servicio]?”. Resolver esas quejas puede ser tu ventaja.",
            "Ofrece uno o dos trabajos a un precio justo de inicio a personas que conoces, y pídeles comentarios honestos y, si quedan contentas, una reseña corta o que te recomienden."
          ],
          steps: ["Habla con diez posibles clientes.", "Pregunta si pagarían, cada cuánto y cuánto.", "Busca a otros que lo hagan cerca.", "Pregunta a la IA de qué se suelen quejar los clientes.", "Haz uno o dos trabajos de inicio y pide comentarios."],
          words: [["Demanda", "cuántas personas quieren algo y pagarán por ello."], ["Recomendación", "cuando un cliente contento te manda un cliente nuevo."]],
          slides: [
            { title: "Pregunta antes de comprar", bullets: ["Habla con diez posibles clientes", "¿Pagarían? ¿Cada cuánto? ¿Cuánto?"] },
            { title: "Mira a tu alrededor", bullets: ["Si otros lo hacen, la gente paga por eso", "Pregunta a la IA por las quejas comunes", "Resuélvelas para destacar"] },
            { title: "Trabajos de inicio", bullets: ["Uno o dos trabajos a un precio justo", "Pide comentarios", "Pide a los clientes contentos que te recomienden"] }
          ],
          tryIt: "Escribe las tres preguntas que vas a hacer y luego habla con al menos cinco posibles clientes esta semana. Anota lo que te dijeron.",
          youCanNow: "probar si la gente pagará antes de gastar dinero."
        },
        {
          title: "Fijar tu precio",
          minutes: 5,
          goal: "Fijar un precio que cubra los costos, te pague de forma justa y encaje con el mercado.",
          text: [
            "Un precio tiene que cubrir tres cosas: tus costos (materiales, pasaje de autobús o gasolina, teléfono), tu tiempo y un poco extra para ahorrar o crecer. Cobrar de menos parece seguro, pero te puede dejar trabajando casi gratis.",
            "Ejemplo: limpiar un apartamento toma 3 horas y $10 de materiales. Si quieres $20 por hora de tu tiempo, son $60 más $10, o sea unos $70. Luego revisa: ¿cuánto cobran otros cerca? Ajusta hacia arriba o hacia abajo.",
            "Pide a la IA que revise tus cuentas y sugiera paquetes: “Limpio apartamentos. Mis costos son $10 por trabajo, quiero $20 por hora y un trabajo toma 3 horas. Sugiere un precio básico, un precio de limpieza profunda y un descuento semanal”. Revisa tú mismo sus cuentas."
          ],
          steps: ["Suma los costos por trabajo.", "Decide cuánto vale tu hora y multiplícalo por las horas.", "Suma costos más tiempo.", "Compara con otros cerca.", "Pide a la IA que sugiera paquetes y revisa las cuentas."],
          words: [["Costo", "el dinero que gastas para hacer el trabajo."], ["Paquete", "un grupo de servicios que se venden juntos a un solo precio."]],
          slides: [
            { title: "Un precio cubre", bullets: ["Costos: materiales, transporte, teléfono", "Tu tiempo", "Un poco extra para ahorrar"] },
            { title: "Haz las cuentas", bullets: ["3 horas x $20 = $60", "+ $10 de materiales = unos $70", "Compara con otros cerca"] },
            { title: "Usa la IA para los paquetes", bullets: ["Básico, completo, descuento por cliente fijo", "Revisa las cuentas de la IA"] }
          ],
          tryIt: "Calcula el precio de un trabajo de tu trabajo extra: costos, tiempo y revisión del mercado. Pide a la IA que sugiera dos paquetes y revisa las cuentas.",
          youCanNow: "fijar un precio justo según los costos, el tiempo y el mercado."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir y probar tu trabajo extra",
        questions: [
          { q: "¿Qué hace bueno un primer trabajo extra?", options: ["Cuesta miles empezarlo", "Necesita una habilidad que no tienes", "Usa tus habilidades, necesita poco dinero y encaja en tu tiempo", "Requiere una oficina grande"], answer: 2, why: "El bajo costo y tus habilidades lo hacen más fácil de empezar." },
          { q: "Antes de empezar, una persona en libertad condicional debe:", options: ["Revisar sus condiciones y preguntar a su oficial si no está segura", "Ignorar sus condiciones", "Empezar cualquier cosa de inmediato", "Preguntarle solo a un amigo"], answer: 0, why: "Las condiciones pueden limitar algunos trabajos." },
          { q: "¿Dónde revisas si un oficio como la barbería necesita licencia?", options: ["En un video cualquiera", "En lo que adivine la IA", "Con un vecino", "En el sitio web de la junta de licencias de tu estado"], answer: 3, why: "Las juntas estatales fijan las reglas de las licencias." },
          { q: "Otros en tu zona ya ofrecen tu servicio. Esto quiere decir que:", options: ["Debes renunciar", "La gente paga por eso, así que hay demanda", "Es ilegal", "Nadie lo quiere"], answer: 1, why: "Los negocios que ya existen muestran que los clientes pagan." },
          { q: "Un trabajo toma 2 horas, quieres $25 por hora y los materiales cuestan $5. Un precio base justo es de unos:", options: ["$5", "$27", "$55", "$250"], answer: 2, why: "2 x $25 + $5 = $55." }
        ]
      }
    },
    {
      name: "Capítulo 2: Lanzarlo y llevarlo adelante",
      lessons: [
        {
          title: "Escribir tu oferta y un volante con IA",
          minutes: 5,
          goal: "Escribir una oferta clara y hacer un volante o una publicación con ayuda de la IA.",
          text: [
            "Una oferta dice qué haces, para quién es, el precio y cómo reservar. Ejemplo: “Limpieza de apartamentos en el Eastside. Limpieza básica $70, limpieza profunda $110. Responsable, cuidadoso, con referencias. Escribe al [teléfono] para reservar”.",
            "Pide a la IA: “Escribe tres versiones cortas de una oferta para mi [servicio] en [zona] a [precio]. Amable y confiable. Menos de 40 palabras”. Elige la que más suene como tú, y quita todo lo que no sea cierto, como “con licencia y seguro” si no los tienes.",
            "Haz un volante o una publicación con el plan gratuito de Canva o con Google Docs. Usa un titular claro, dos o tres beneficios, el precio y cómo contactarte. Si puedes, usa un número de teléfono aparte para el negocio o un número gratuito para mensajes, y nunca publiques la dirección de tu casa."
          ],
          steps: ["Escribe qué, para quién, el precio y cómo reservar.", "Pide a la IA tres versiones cortas.", "Elige una y quita todo lo que no sea cierto.", "Haz un volante o una publicación con titular, beneficios, precio y contacto.", "Mantén privada la dirección de tu casa."],
          words: [["Oferta", "una explicación clara de qué vendes, para quién y a qué precio."], ["Volante", "un anuncio de una página, impreso o digital."]],
          slides: [
            { title: "Una oferta clara", bullets: ["Qué haces y para quién es", "Precio", "Cómo reservar"] },
            { title: "Deja que la IA ayude", bullets: ["Pide tres versiones cortas", "Elige la que suene como tú", "Quita todo lo que no sea cierto"] },
            { title: "Volante o publicación", bullets: ["Titular, beneficios, precio, contacto", "Canva o Google Docs", "Nunca publiques la dirección de tu casa"] }
          ],
          tryIt: "Usa la IA para escribir tres versiones de tu oferta, elige una y haz con ella un volante o una publicación para redes.",
          youCanNow: "escribir una oferta honesta y hacer un volante o una publicación sencilla con ayuda de la IA."
        },
        {
          title: "Conseguir tus primeros clientes de forma segura",
          minutes: 5,
          goal: "Encontrar los primeros clientes a través de personas y lugares de confianza, y trabajar con seguridad.",
          text: [
            "Tus primeros clientes suelen venir de personas que te conocen: familia, amigos, la iglesia, tu programa de reinserción, antiguos compañeros de trabajo. Cuéntales a cinco personas al día lo que haces y dales un volante o envíales tu publicación.",
            "Publica en tableros comunitarios: bibliotecas, lavanderías, centros comunitarios y grupos locales en internet, siguiendo las reglas de cada lugar. Pide a cada cliente contento una reseña o que le cuente a un amigo.",
            "Cuídate. Reúnete primero en un lugar público con los clientes nuevos o lleva a alguien contigo. Cobra de la forma que acordaron y ten cuidado con las apps: nunca aceptes un pago de más para devolver la diferencia, que es una estafa común. Escribe qué incluye cada trabajo antes de empezar para que no haya confusiones."
          ],
          steps: ["Cuéntales a cinco personas al día sobre tu servicio.", "Publica en tableros comunitarios y grupos locales.", "Pide a los clientes contentos reseñas y recomendaciones.", "Acuerden por escrito qué incluye cada trabajo y el precio.", "Cuidado con las estafas de pago de más."],
          words: [["Boca a boca", "los clientes que les hablan de ti a otras personas."], ["Estafa de pago de más", "un engaño en el que alguien paga de más, te pide que devuelvas la diferencia y luego su pago rebota."]],
          slides: [
            { title: "Los primeros clientes", bullets: ["Familia, amigos, iglesia, programas", "Cuéntales a cinco personas al día"] },
            { title: "Corre la voz", bullets: ["Biblioteca, lavandería, tableros comunitarios", "Grupos locales en internet", "Reseñas y recomendaciones"] },
            { title: "Cuídate", bullets: ["Reúnete en público o lleva a alguien", "Acuerden el trabajo y el precio por escrito", "Nunca devuelvas un pago de más"] }
          ],
          sources: [{ name: "FTC: Estafas de cheques falsos", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams" }],
          tryIt: "Escribe una lista de 15 personas o lugares a quienes contarles sobre tu trabajo extra. Comunícate hoy con cinco de ellos con tu volante o tu publicación.",
          youCanNow: "encontrar los primeros clientes a través de personas y lugares de confianza, con seguridad."
        },
        {
          title: "Llevar el control del dinero y prepararte para los impuestos",
          minutes: 6,
          goal: "Llevar un registro de dinero sencillo y conocer lo básico de los impuestos de un trabajo extra.",
          text: [
            "Anota cada dólar desde el primer día. Un registro de dinero sencillo en Google Sheets o en un cuaderno: fecha, cliente (nombre de pila o una etiqueta), trabajo, dinero que entra, dinero que sale y en qué se gastó. Guarda los recibos de los materiales en una carpeta o como fotos en el teléfono.",
            "En EE. UU., los ingresos de un trabajo extra pagan impuestos, aunque sean en efectivo y aunque sean poco dinero. Las personas que trabajan por su cuenta pueden deber el impuesto sobre el trabajo por cuenta propia y tener que pagar impuestos estimados durante el año. Las reglas y los montos cambian, así que revisa irs.gov (el sitio del IRS, la agencia de impuestos de EE. UU.) o un programa gratuito de ayuda con impuestos como VITA antes de la temporada de impuestos.",
            "Si creces, quizá quieras una cuenta bancaria para el negocio, registrar el nombre del negocio en tu ciudad o estado, o un EIN. El IRS dice que el EIN es gratis en el IRS; cuidado con los sitios web que cobran por él. La IA te puede ayudar a hacer el registro de dinero y explicarte palabras de impuestos, pero para tus impuestos reales usa irs.gov o consulta a un profesional de impuestos."
          ],
          steps: ["Haz un registro de dinero: fecha, etiqueta del cliente, trabajo, entra, sale, en qué.", "Guarda todos los recibos.", "Suma tus ingresos y costos cada mes.", "Aparta una parte de cada pago para los impuestos.", "Revisa irs.gov o un programa gratuito de ayuda con impuestos antes de la temporada de impuestos."],
          words: [["Impuesto sobre el trabajo por cuenta propia", "el impuesto del Seguro Social y Medicare de EE. UU. para las personas que trabajan por su cuenta."], ["EIN", "Número de Identificación del Empleador: un número de identificación fiscal federal para un negocio."], ["VITA", "Asistencia Voluntaria al Contribuyente: ayuda gratuita con los impuestos, apoyada por el IRS, para quienes califican."]],
          slides: [
            { title: "Anota cada dólar", bullets: ["Fecha, etiqueta del cliente, trabajo", "Dinero que entra y que sale", "Guarda todos los recibos"] },
            { title: "Impuestos (EE. UU.)", bullets: ["Los ingresos extra pagan impuestos, también en efectivo", "Puede aplicar el impuesto por cuenta propia y los estimados", "Revisa irs.gov o la ayuda gratuita de VITA"] },
            { title: "A medida que creces", bullets: ["Cuenta bancaria para el negocio", "Registro del nombre en la ciudad o el estado", "El EIN es gratis en el IRS"] }
          ],
          sources: [{ name: "IRS: Obtener un Número de Identificación del Empleador", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Maneja los impuestos de tu trabajo por encargo", url: "https://www.irs.gov/businesses/gig-economy-tax-center" }, { name: "IRS: Preparación gratuita de declaraciones (VITA)", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }],
          tryIt: "Tarea final: haz tu registro de dinero y termina tu hoja de lanzamiento de una página: servicio, reglas revisadas, precio, oferta, volante o publicación, cinco personas o lugares a quienes contarles, y el registro de dinero listo para tu primera venta.",
          youCanNow: "empezar un trabajo extra con ayuda de la IA, conseguir clientes de forma segura y llevar el control de tu dinero para los impuestos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Lanzarlo y llevarlo adelante",
        questions: [
          { q: "¿Qué va en una oferta clara?", options: ["La dirección de tu casa", "Tu número del Seguro Social", "Una licencia falsa", "Qué haces, para quién, el precio y cómo reservar"], answer: 3, why: "Esas cuatro partes hacen clara una oferta." },
          { q: "La IA escribe “con licencia y seguro”, pero no los tienes. ¿Qué haces?", options: ["Quitarlo", "Dejarlo", "Ponerlo más grande", "Agregar “premiado”"], answer: 0, why: "Nunca afirmes algo que no es cierto." },
          { q: "Un cliente te paga $200 por un trabajo de $70 y te pide que le devuelvas $130. Lo más probable es que sea:", options: ["Una propina generosa", "Algo normal del banco", "Una estafa de pago de más", "Un reembolso de impuestos"], answer: 2, why: "Los pedidos de devolver un pago de más son una estafa común." },
          { q: "¿Los ingresos en efectivo de un trabajo extra pagan impuestos en EE. UU.?", options: ["No, el efectivo nunca paga impuestos", "Solo si pasan de $1 millón", "Solo algunos meses", "Sí"], answer: 3, why: "Todos los ingresos, también en efectivo, pagan impuestos." },
          { q: "¿Cuánto cobra el IRS por un EIN?", options: ["$500", "$50 al mes", "Nada; es gratis en el IRS", "Depende del sitio web"], answer: 2, why: "El IRS dice que el EIN es gratis; cuidado con los sitios que cobran." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Emprendimiento y trabajos extra con IA",
    questions: [
      { q: "Un trabajo extra es:", options: ["Un empleo de tiempo completo en el gobierno", "Una forma pequeña de ganar dinero por tu cuenta, muchas veces a tiempo parcial", "Un préstamo", "Una estafa"], answer: 1, why: "Es un trabajo pequeño que llevas tú mismo." },
      { q: "¿Cuál es un buen trabajo extra para alguien que cocinó en una cocina grande?", options: ["Preparar comidas para los vecinos", "Trabajos eléctricos sin licencia", "Comprar y vender acciones en el día", "Vender medicinas"], answer: 0, why: "Usa habilidades que ya tiene y necesita poco dinero." },
      { q: "Cuando le pidas a la IA ideas de trabajo extra, dile:", options: ["Tu número de caso", "Tu usuario del banco", "Tus habilidades, tu tiempo, tu dinero y tu transporte", "Nada"], answer: 2, why: "Los límites reales dan ideas realistas." },
      { q: "Algunas licencias del estado toman en cuenta los antecedentes penales. ¿Dónde están las reglas?", options: ["En el sitio web de la junta de licencias del estado", "En un grupo de redes sociales", "En un volante", "Solo en un chat de IA"], answer: 0, why: "Las juntas de licencias publican sus reglas." },
      { q: "¿Con cuántos posibles clientes sugiere hablar el curso?", options: ["Uno", "Ninguno", "Mil", "Diez"], answer: 3, why: "Diez conversaciones muestran la demanda real." },
      { q: "Demanda significa:", options: ["Cuánto quieres ganar", "Cuántas personas quieren algo y pagarán por ello", "Una orden legal", "Un precio"], answer: 1, why: "La demanda trata de los clientes dispuestos a pagar." },
      { q: "Preguntar a la IA de qué se quejan los clientes te ayuda a:", options: ["Copiar los precios de la competencia", "Encontrar formas de destacar", "Evitar a los clientes", "Saltarte la prueba"], answer: 1, why: "Resolver las quejas comunes es una ventaja." },
      { q: "Un precio debe cubrir:", options: ["Solo los materiales", "Solo lo que los amigos quieren pagar", "Nada", "Los costos, tu tiempo y un poco extra"], answer: 3, why: "Las tres cosas te mantienen en el negocio." },
      { q: "3 horas a $20 más $10 de materiales son:", options: ["$33", "$60", "$70", "$200"], answer: 2, why: "3 x 20 = 60, más 10 = 70." },
      { q: "Un paquete es:", options: ["Una caja por correo", "Un formulario de impuestos", "Un grupo de servicios que se venden juntos a un solo precio", "Un préstamo"], answer: 2, why: "Los paquetes facilitan elegir." },
      { q: "Después de que la IA sugiere precios, debes:", options: ["Aceptarlos a ciegas", "Triplicar todos los precios", "Ignorar el mercado", "Revisar tú mismo las cuentas"], answer: 3, why: "La IA puede equivocarse en las cuentas." },
      { q: "¿Qué nunca debes poner en un volante?", options: ["Tu precio", "Tu servicio", "La dirección de tu casa", "Cómo reservar"], answer: 2, why: "Mantén privada la dirección de tu casa." },
      { q: "¿Qué herramienta gratuita puedes usar para hacer un volante?", options: ["Solo una imprenta de pago", "El plan gratuito de Canva o Google Docs", "Un formulario de impuestos", "Una app del banco"], answer: 1, why: "Las dos son gratis y fáciles." },
      { q: "Tus primeros clientes suelen venir de:", options: ["Personas que te conocen", "Anuncios pagados en la televisión", "Desconocidos al azar en otro país", "Ningún lado"], answer: 0, why: "La confianza empieza con tu red de contactos." },
      { q: "Cuando te reúnes por primera vez con un cliente nuevo, es más seguro:", options: ["Ir solo a un lugar desconocido de noche", "Darle primero tu dirección", "Reunirse en un lugar público o llevar a alguien", "No acordar el trabajo"], answer: 2, why: "Con personas nuevas, la seguridad va primero." },
      { q: "Escribir qué incluye cada trabajo ayuda a:", options: ["Evitar confusiones sobre el trabajo y el precio", "Hacer más largos los trabajos", "No pagar impuestos", "Nada"], answer: 0, why: "Los acuerdos claros evitan los conflictos." },
      { q: "Un registro de dinero incluye:", options: ["Las contraseñas de los clientes", "Tu número del Seguro Social", "Solo el dinero que entra", "Fecha, etiqueta del cliente, trabajo, dinero que entra, dinero que sale"], answer: 3, why: "Hace falta anotar lo que entra y lo que sale." },
      { q: "¿Por qué guardar los recibos de los materiales?", options: ["Para tirarlos después", "Para llevar el control de los costos y respaldar los registros de impuestos", "Para decorar", "No sirven"], answer: 1, why: "Los recibos respaldan tus costos." },
      { q: "¿Dónde puedes recibir ayuda gratuita con los impuestos si calificas?", options: ["En un sitio web cualquiera que cobra por los EIN", "En VITA, a través del IRS", "Con un estafador", "En ningún lado"], answer: 1, why: "VITA ofrece ayuda gratuita con los impuestos a quienes califican." },
      { q: "La IA te explica el impuesto sobre el trabajo por cuenta propia. Para tus impuestos reales debes:", options: ["Confiar del todo en la IA", "No declarar", "Preguntarle a un desconocido en internet", "Revisar irs.gov o consultar a un profesional de impuestos"], answer: 3, why: "Las reglas de impuestos cambian y dependen de tu situación." }
    ]
  }
};

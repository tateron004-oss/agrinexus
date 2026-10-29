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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que vuelven a casa después de estar en prisión (reinserción) y que quieren ganar dinero extra por su cuenta, a menudo mientras buscan empleo o trabajan medio tiempo. Muchos tienen habilidades prácticas de empleos en prisión, oficios, cocina, limpieza o el cuidado de otras personas.",
    startingPoint: "Tienen habilidades reales y puede que hayan hecho trabajos informales para familiares o vecinos. La mayoría no ha puesto precio a un servicio, hecho un volante, llevado el control del dinero de un negocio ni pensado en los impuestos, y algunos tienen poco dinero, no tienen carro y usan un teléfono sencillo.",
    gap: "Un trabajo extra puede traer ingresos rápido y crear un historial de trabajo, pero mucha gente cobra de menos, se salta reglas o licencias, cae en estafas de pago o recibe una factura de impuestos sorpresa. Las personas necesitan elegir un trabajo extra que encaje con sus habilidades y sus condiciones, probar la demanda, cobrar un precio justo, promocionarse con honestidad con ayuda de la IA y llevar el control de cada dólar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Aparatos: puede que solo tengan un teléfono sencillo o una computadora de biblioteca con tiempo limitado",
      "Dinero: menos de unos $100 para empezar; no hacen falta herramientas de pago",
      "Reglas: se aplican las condiciones de libertad condicional o probatoria y las licencias del estado; las personas revisan sus propias condiciones y la junta de licencias de su estado",
      "Sin consejos de impuestos ni legales: las personas revisan irs.gov, un programa gratuito de ayuda con impuestos como VITA, o a un profesional"
    ],
    prerequisites: "Ninguno. \"Introducción a la IA y a la confianza digital\" es un buen primer curso para quienes son nuevos en la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tus habilidades, tu tiempo, tu dinero para empezar y las reglas", action: "elegir un trabajo extra y revisar si necesita una licencia o si tus condiciones lo limitan", standard: "nombrando dónde lo revisaste" },
    { id: "O2", condition: "Antes de gastar dinero en materiales", action: "probar si la gente pagará hablando con diez posibles clientes y revisando a otros que lo ofrecen cerca", standard: "en una semana, sin gastar nada" },
    { id: "O3", condition: "Con tus costos por trabajo, las horas que toma y los precios de la zona", action: "calcular un precio que cubra los costos, tu tiempo y un poco extra", standard: "con las cuentas revisadas a mano" },
    { id: "O4", condition: "Usando un asistente de IA y una herramienta de diseño gratuita", action: "escribir una oferta clara y hacer un volante o una publicación para redes", standard: "que diga qué, para quién, el precio y cómo reservar, sin nada falso y sin la dirección de tu casa" },
    { id: "O5", condition: "Cuando buscas tus primeros clientes", action: "planear a quién y dónde contarle y cómo vas a trabajar con seguridad", standard: "con una lista de cinco personas o lugares y el trabajo acordado por escrito" },
    { id: "O6", condition: "Desde tu primera venta", action: "llevar un registro de dinero, guardar los recibos y nombrar dónde conseguir ayuda con los impuestos", standard: "anotando cada dólar que entra y sale" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir y probar tu trabajo extra",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "elegir ideas de trabajo extra que encajen con tus habilidades y saber qué reglas revisar.",
          quickCheck: [
            { objective: "O1", q: "¿Con qué tres cosas debe encajar un buen primer trabajo extra?", options: ["Tu carro, tu casa y tu puntaje de crédito", "La moda más nueva, un préstamo grande y un sitio web", "Tus habilidades, tu tiempo y el dinero que tienes para empezar", "Los empleos de tus amigos, una licencia y una oficina"], answer: 2, why: "Un primer trabajo extra usa habilidades que ya tienes, necesita poco dinero y encaja con tu horario." },
            { objective: "O1", q: "Quieres cortar el pelo para ganar dinero. ¿Qué revisas primero?", options: ["Si tu estado exige una licencia de barbería o cosmetología, y tus condiciones", "Nada; es solo un trabajo extra", "Solo lo que piensan tus amigos", "Qué máquinas de cortar pelo son las más caras"], answer: 0, why: "Algunos oficios, como la barbería, necesitan una licencia del estado, y pueden aplicar las condiciones de libertad condicional o probatoria." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "probar si la gente pagará antes de gastar dinero.",
          quickCheck: [
            { objective: "O2", q: "¿Qué significa demanda?", options: ["El precio de tus materiales", "El número de horas que trabajas", "Tu número de licencia", "Cuántas personas quieren algo y pagarán por ello"], answer: 3, why: "La demanda es cuántas personas quieren tu servicio y pagarán por él." },
            { objective: "O2", q: "Quieres empezar un trabajo extra de jardinería. ¿Cuál es el mejor primer paso?", options: ["Comprar una podadora nueva", "Preguntarles a diez vecinos si pagarían, cada cuánto y cuánto", "Imprimir 500 volantes", "Crear un sitio web"], answer: 1, why: "Prueba la demanda hablando con posibles clientes antes de gastar dinero." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "fijar un precio justo según los costos, el tiempo y el mercado.",
          quickCheck: [
            { objective: "O3", q: "Un trabajo toma 4 horas, quieres $15 por hora y los materiales cuestan $8. ¿Cuál es el precio base?", options: ["$68", "$60", "$23", "$15"], answer: 0, why: "4 horas por $15 son $60, más $8 de materiales, que da $68." },
            { objective: "O3", q: "Tu precio base es $70, pero todos cerca cobran unos $90 por el mismo trabajo. ¿Qué haces?", options: ["Bajar a $30 para ganar todos los trabajos", "Quedarte con $70 pase lo que pase", "Ajustar tu precio después de comparar, porque quizá estás cobrando de menos", "Negarte a fijar un precio"], answer: 2, why: "Compara con otros cerca y ajusta; cobrar de menos puede dejarte trabajando casi gratis." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir y probar tu trabajo extra",
        questions: [
          { objective: "O1", q: "¿Qué hace bueno un primer trabajo extra?", options: ["Cuesta miles empezarlo", "Necesita una habilidad que no tienes", "Usa tus habilidades, necesita poco dinero y encaja en tu tiempo", "Requiere una oficina grande"], answer: 2, why: "El bajo costo y tus habilidades lo hacen más fácil de empezar." },
          { objective: "O1", q: "Antes de empezar, una persona en libertad condicional debe:", options: ["Revisar sus condiciones y preguntar a su oficial si no está segura", "Ignorar sus condiciones", "Empezar cualquier cosa de inmediato", "Preguntarle solo a un amigo"], answer: 0, why: "Las condiciones pueden limitar algunos trabajos." },
          { objective: "O1", q: "¿Dónde revisas si un oficio como la barbería necesita licencia?", options: ["En un video cualquiera", "En lo que adivine la IA", "Con un vecino", "En el sitio web de la junta de licencias de tu estado"], answer: 3, why: "Las juntas estatales fijan las reglas de las licencias." },
          { objective: "O2", q: "Otros en tu zona ya ofrecen tu servicio. Esto quiere decir que:", options: ["Debes renunciar", "La gente paga por eso, así que hay demanda", "Es ilegal", "Nadie lo quiere"], answer: 1, why: "Los negocios que ya existen muestran que los clientes pagan." },
          { objective: "O3", q: "Un trabajo toma 2 horas, quieres $25 por hora y los materiales cuestan $5. Un precio base justo es de unos:", options: ["$5", "$27", "$55", "$250"], answer: 2, why: "2 x $25 + $5 = $55." }
        ]
      }
    },
    {
      name: "Capítulo 2: Lanzarlo y llevarlo adelante",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "escribir una oferta honesta y hacer un volante o una publicación sencilla con ayuda de la IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué cuatro cosas dice una oferta clara?", options: ["Tu nombre, edad, dirección e historia", "Qué haces, para quién es, el precio y cómo reservar", "Tus habilidades, escuela, pasatiempos y metas", "Solo el precio"], answer: 1, why: "Una oferta clara dice qué, para quién, el precio y cómo reservar." },
            { objective: "O4", q: "Estás haciendo un volante para tu servicio de limpieza. ¿Qué dato de contacto dejas fuera?", options: ["El número de teléfono de tu negocio", "Un número gratuito para mensajes de texto", "Tu nombre de pila", "La dirección de tu casa"], answer: 3, why: "Nunca publiques la dirección de tu casa; usa un número del negocio o un número gratuito para mensajes." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "encontrar los primeros clientes a través de personas y lugares de confianza, con seguridad.",
          quickCheck: [
            { objective: "O5", q: "¿De dónde vienen la mayoría de los primeros clientes?", options: ["De anuncios pagados en internet", "De desconocidos en otras ciudades", "De personas que te conocen, como la familia, los amigos y la iglesia", "De empresas grandes"], answer: 2, why: "Los primeros clientes suelen venir de personas que ya te conocen y confían en ti." },
            { objective: "O5", q: "Un cliente nuevo que nunca has visto quiere que vayas a su casa. ¿Qué es más seguro?", options: ["Verse primero en un lugar público o llevar a alguien contigo", "Ir solo sin avisarle a nadie", "Pedir todo el pago en tarjetas de regalo", "Compartir la dirección de tu casa"], answer: 0, why: "Primero véanse en un lugar público o lleva a alguien, y acuerden el trabajo por escrito." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "empezar un trabajo extra con ayuda de la IA, conseguir clientes de forma segura y llevar el control de tu dinero para los impuestos.",
          quickCheck: [
            { objective: "O6", q: "¿Qué va en el registro de dinero de un trabajo extra?", options: ["Los nombres completos y teléfonos de los clientes", "Solo el dinero que ganaste", "La contraseña de tu banco", "Fecha, etiqueta del cliente, trabajo, dinero que entra, dinero que sale y para qué fue"], answer: 3, why: "Un registro de dinero anota cada dólar que entra y sale desde el primer día." },
            { objective: "O6", q: "Este mes ganaste $300 en efectivo con trabajos pequeños. ¿Qué haces con los impuestos?", options: ["Nada; el efectivo no paga impuestos", "Anotarlo, apartar una parte y revisar irs.gov o VITA antes de la temporada de impuestos", "Gastarlo antes de que alguien se entere", "Pedirle a un cliente que declare por ti"], answer: 1, why: "Los ingresos de un trabajo extra pagan impuestos aunque sean en efectivo, así que anótalos y busca ayuda de confianza con los impuestos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Lanzarlo y llevarlo adelante",
        questions: [
          { objective: "O4", q: "¿Qué va en una oferta clara?", options: ["La dirección de tu casa", "Tu número del Seguro Social", "Una licencia falsa", "Qué haces, para quién, el precio y cómo reservar"], answer: 3, why: "Esas cuatro partes hacen clara una oferta." },
          { objective: "O4", q: "La IA escribe “con licencia y seguro”, pero no los tienes. ¿Qué haces?", options: ["Quitarlo", "Dejarlo", "Ponerlo más grande", "Agregar “premiado”"], answer: 0, why: "Nunca afirmes algo que no es cierto." },
          { objective: "O5", q: "Un cliente te paga $200 por un trabajo de $70 y te pide que le devuelvas $130. Lo más probable es que sea:", options: ["Una propina generosa", "Algo normal del banco", "Una estafa de pago de más", "Un reembolso de impuestos"], answer: 2, why: "Los pedidos de devolver un pago de más son una estafa común." },
          { objective: "O6", q: "¿Los ingresos en efectivo de un trabajo extra pagan impuestos en EE. UU.?", options: ["No, el efectivo nunca paga impuestos", "Solo si pasan de $1 millón", "Solo algunos meses", "Sí"], answer: 3, why: "Todos los ingresos, también en efectivo, pagan impuestos." },
          { objective: "O6", q: "¿Cuánto cobra el IRS por un EIN?", options: ["$500", "$50 al mes", "Nada; es gratis en el IRS", "Depende del sitio web"], answer: 2, why: "El IRS dice que el EIN es gratis; cuidado con los sitios que cobran." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Emprendimiento y trabajos extra con IA",
    questions: [
      { objective: "O1", q: "Un trabajo extra es:", options: ["Un empleo de tiempo completo en el gobierno", "Una forma pequeña de ganar dinero por tu cuenta, muchas veces a tiempo parcial", "Un préstamo", "Una estafa"], answer: 1, why: "Es un trabajo pequeño que llevas tú mismo." },
      { objective: "O1", q: "¿Cuál es un buen trabajo extra para alguien que cocinó en una cocina grande?", options: ["Preparar comidas para los vecinos", "Trabajos eléctricos sin licencia", "Comprar y vender acciones en el día", "Vender medicinas"], answer: 0, why: "Usa habilidades que ya tiene y necesita poco dinero." },
      { objective: "O1", q: "Cuando le pidas a la IA ideas de trabajo extra, dile:", options: ["Tu número de caso", "Tu usuario del banco", "Tus habilidades, tu tiempo, tu dinero y tu transporte", "Nada"], answer: 2, why: "Los límites reales dan ideas realistas." },
      { objective: "O1", q: "Algunas licencias del estado toman en cuenta los antecedentes penales. ¿Dónde están las reglas?", options: ["En el sitio web de la junta de licencias del estado", "En un grupo de redes sociales", "En un volante", "Solo en un chat de IA"], answer: 0, why: "Las juntas de licencias publican sus reglas." },
      { objective: "O2", q: "¿Con cuántos posibles clientes sugiere hablar el curso?", options: ["Uno", "Ninguno", "Mil", "Diez"], answer: 3, why: "Diez conversaciones muestran la demanda real." },
      { objective: "O2", q: "Demanda significa:", options: ["Cuánto quieres ganar", "Cuántas personas quieren algo y pagarán por ello", "Una orden legal", "Un precio"], answer: 1, why: "La demanda trata de los clientes dispuestos a pagar." },
      { objective: "O2", q: "Preguntar a la IA de qué se quejan los clientes te ayuda a:", options: ["Copiar los precios de la competencia", "Encontrar formas de destacar", "Evitar a los clientes", "Saltarte la prueba"], answer: 1, why: "Resolver las quejas comunes es una ventaja." },
      { objective: "O3", q: "Un precio debe cubrir:", options: ["Solo los materiales", "Solo lo que los amigos quieren pagar", "Nada", "Los costos, tu tiempo y un poco extra"], answer: 3, why: "Las tres cosas te mantienen en el negocio." },
      { objective: "O3", q: "3 horas a $20 más $10 de materiales son:", options: ["$33", "$60", "$70", "$200"], answer: 2, why: "3 x 20 = 60, más 10 = 70." },
      { objective: "O3", q: "Un paquete es:", options: ["Una caja por correo", "Un formulario de impuestos", "Un grupo de servicios que se venden juntos a un solo precio", "Un préstamo"], answer: 2, why: "Los paquetes facilitan elegir." },
      { objective: "O3", q: "Después de que la IA sugiere precios, debes:", options: ["Aceptarlos a ciegas", "Triplicar todos los precios", "Ignorar el mercado", "Revisar tú mismo las cuentas"], answer: 3, why: "La IA puede equivocarse en las cuentas." },
      { objective: "O4", q: "¿Qué nunca debes poner en un volante?", options: ["Tu precio", "Tu servicio", "La dirección de tu casa", "Cómo reservar"], answer: 2, why: "Mantén privada la dirección de tu casa." },
      { objective: "O4", q: "¿Qué herramienta gratuita puedes usar para hacer un volante?", options: ["Solo una imprenta de pago", "El plan gratuito de Canva o Google Docs", "Un formulario de impuestos", "Una app del banco"], answer: 1, why: "Las dos son gratis y fáciles." },
      { objective: "O5", q: "Tus primeros clientes suelen venir de:", options: ["Personas que te conocen", "Anuncios pagados en la televisión", "Desconocidos al azar en otro país", "Ningún lado"], answer: 0, why: "La confianza empieza con tu red de contactos." },
      { objective: "O5", q: "Cuando te reúnes por primera vez con un cliente nuevo, es más seguro:", options: ["Ir solo a un lugar desconocido de noche", "Darle primero tu dirección", "Reunirse en un lugar público o llevar a alguien", "No acordar el trabajo"], answer: 2, why: "Con personas nuevas, la seguridad va primero." },
      { objective: "O5", q: "Escribir qué incluye cada trabajo ayuda a:", options: ["Evitar confusiones sobre el trabajo y el precio", "Hacer más largos los trabajos", "No pagar impuestos", "Nada"], answer: 0, why: "Los acuerdos claros evitan los conflictos." },
      { objective: "O6", q: "Un registro de dinero incluye:", options: ["Las contraseñas de los clientes", "Tu número del Seguro Social", "Solo el dinero que entra", "Fecha, etiqueta del cliente, trabajo, dinero que entra, dinero que sale"], answer: 3, why: "Hace falta anotar lo que entra y lo que sale." },
      { objective: "O6", q: "¿Por qué guardar los recibos de los materiales?", options: ["Para tirarlos después", "Para llevar el control de los costos y respaldar los registros de impuestos", "Para decorar", "No sirven"], answer: 1, why: "Los recibos respaldan tus costos." },
      { objective: "O6", q: "¿Dónde puedes recibir ayuda gratuita con los impuestos si calificas?", options: ["En un sitio web cualquiera que cobra por los EIN", "En VITA, a través del IRS", "Con un estafador", "En ningún lado"], answer: 1, why: "VITA ofrece ayuda gratuita con los impuestos a quienes califican." },
      { objective: "O6", q: "La IA te explica el impuesto sobre el trabajo por cuenta propia. Para tus impuestos reales debes:", options: ["Confiar del todo en la IA", "No declarar", "Preguntarle a un desconocido en internet", "Revisar irs.gov o consultar a un profesional de impuestos"], answer: 3, why: "Las reglas de impuestos cambian y dependen de tu situación." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      5,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Servicio y reglas",
        objective: "O1",
        notYet: "El servicio no está claro, o no se revisaron las reglas ni las licencias.",
        meets: "Nombra el servicio y para quién es, y dice qué reglas o licencias se revisaron y dónde.",
        exceeds: "También anota cómo la persona confirmó que encaja con sus condiciones de libertad condicional o probatoria, si aplican."
      },
      {
        name: "Precio",
        objective: "O3",
        notYet: "No hay precio, o el precio no cubre los costos.",
        meets: "Un precio que cubre los costos, el tiempo y un poco extra, con las cuentas a la vista.",
        exceeds: "Lo comparó con otros cerca y ofrece uno o dos paquetes."
      },
      {
        name: "Oferta y volante",
        objective: "O4",
        notYet: "Falta el precio o el contacto, tiene afirmaciones falsas o muestra la dirección de la casa.",
        meets: "Dice qué, para quién, el precio y cómo reservar, sin nada falso y sin la dirección de la casa.",
        exceeds: "El volante tiene un título claro y dos o tres beneficios, y suena como la persona."
      },
      {
        name: "Primeros clientes",
        objective: "O5",
        notYet: "Hay menos de cinco personas o lugares en la lista.",
        meets: "Cinco personas o lugares a quienes contarles, y un plan para acordar cada trabajo por escrito.",
        exceeds: "Incluye un plan de seguridad para conocer a clientes nuevos y evitar las estafas de pago de más."
      },
      {
        name: "Registro de dinero",
        objective: "O6",
        notYet: "No hay registro de dinero.",
        meets: "Un registro de dinero listo con fecha, etiqueta del cliente, trabajo, entradas, salidas y para qué.",
        exceeds: "Incluye una carpeta de recibos y dónde conseguir ayuda gratuita con los impuestos."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que hacen su primera venta en un plazo de 30 días (encuesta de seguimiento)",
      "Personas que siguen ganando dinero con un trabajo extra y llevando un registro de dinero después de 90 días",
      "Personas que dicen haber declarado impuestos sobre los ingresos de su trabajo extra con ayuda de irs.gov, VITA o un profesional"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o del programa",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini) y el plan gratuito de Canva o Google Docs",
      "Google Sheets o un cuaderno para el registro de dinero",
      "Papel y lápiz para la hoja de lanzamiento",
      "Unos 60 minutos en total, en sesiones cortas, más una semana para probar la demanda"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" hechas en vivo.",
      "Recuerda a quienes estén en libertad condicional o probatoria que revisen sus condiciones, y que le pregunten a su oficial si tienen dudas, antes de empezar cualquier trabajo.",
      "Resuelvan juntos en el pizarrón un ejemplo de precio para que las personas vean las cuentas.",
      "No des consejos de impuestos ni legales; envía a las personas a irs.gov, a VITA o a un profesional de impuestos.",
      "Califica la hoja de lanzamiento con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

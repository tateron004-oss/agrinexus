"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-online-freelancing.js). See scripts/koachlearn-courses/README.md, "Translations".

const THREE_MTT = { name: "3MTT (3 Million Technical Talent), Nigeria: Ministerio Federal de Comunicaciones, Innovación y Economía Digital, con NITDA", url: "https://3mtt.nitda.gov.ng/" };
const AJIRA = { name: "Agencia de Noticias de Kenia: llaman a los jóvenes a aprovechar el programa Ajira Digital (programa del gobierno para el trabajo en línea)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };
const KRA = { name: "Autoridad Tributaria de Kenia (KRA): impuesto sobre la renta, incluidos los ingresos obtenidos en línea", url: "https://www.kra.go.ke" };
const GRA = { name: "Autoridad Tributaria de Ghana (GRA)", url: "https://gra.gov.gh" };
const SEC_NG = { name: "Nairametrics (14 de mayo de 2026): la SEC de Nigeria advierte sobre esquemas promovidos en WhatsApp, TikTok e Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-online-freelancing-es",
  lang: "es",
  translationOf: "afr-online-freelancing",
  category: "Africa: Life and Work",
  name: "Trabajo freelance y trabajo remoto desde África",
  skills: "Elegir un servicio que puedes vender en línea, Escribir un perfil y armar un pequeño portafolio, Escribir una propuesta para una oferta de trabajo, Acordar el trabajo y entregar a tiempo, Cobrar y llevar registros, Detectar trabajos falsos y estafas de pago",
  outcome: "convertir una habilidad que ya tienes en un servicio en línea: escribir un perfil con muestras de trabajo, escribir una propuesta para una oferta real, acordar el trabajo por escrito, cobrar de forma segura, llevar registros y rechazar los trabajos falsos.",
  about: [
    "Jóvenes y adultos de toda África ganan dinero en línea escribiendo, traduciendo, diseñando, haciendo captura de datos, atención al cliente, transcripción, contabilidad, redes sociales y asistencia virtual para clientes de su propio país y del extranjero. Algunos trabajan en plataformas como Upwork, Fiverr y LinkedIn; otros encuentran clientes por WhatsApp, Facebook y personas que conocen.",
    "Este curso es para personas que buscan empleo, estudiantes, recién graduados, madres y padres en casa, y cualquiera que tenga un teléfono o una computadora y una habilidad. Vas a elegir un servicio, escribir un perfil, reunir pequeñas muestras de trabajo, escribir una propuesta, acordar el trabajo, cobrar y detectar los muchos trabajos falsos dirigidos a quienes empiezan. Los gobiernos también ofrecen formación gratuita, como Ajira Digital en Kenia y 3MTT en Nigeria.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\" que puedes hacer en el teléfono. Hay una comprobación corta después de cada lección y de cada capítulo, y un examen de 20 preguntas al final. Las comisiones de las plataformas y los métodos de pago cambian y son distintos en cada país, así que aprenderás a leerlos en las páginas de ayuda de cada plataforma."
  ],
  finalTask: "Arma tu kit de inicio como freelancer: una oferta de servicio en una línea, un perfil (título y un resumen corto), dos o tres muestras pequeñas de trabajo, una propuesta escrita para una oferta real o de ejemplo, y una lista de seguridad y pagos (cómo te van a pagar, qué registros llevarás, dónde preguntar sobre impuestos y las señales de alerta de los trabajos falsos).",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes y adultos de toda África, en ciudades y pueblos: graduados y jóvenes que dejaron la escuela y buscan trabajo, personas con empleo que quieren un ingreso extra, madres y padres que trabajan desde casa, y artesanos y dueños de pequeños negocios con habilidades para vender. Ejemplos de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Camerún, Egipto y Marruecos; muchos hablan inglés, francés o árabe, lo cual ya es una habilidad que se puede vender.",
    startingPoint: "Saben usar un teléfono inteligente, WhatsApp y las redes sociales; algunos tienen una computadora portátil o usan un cibercafé. La mayoría tiene una habilidad (escribir, idiomas, diseño, mecanografía, contabilidad, ventas), pero nunca la ha descrito como un servicio, nunca ha escrito una propuesta ni ha cobrado de un cliente extranjero. Muchos han visto anuncios de \"trabajo desde casa\" que resultaron ser estafas.",
    gap: "Los participantes necesitan presentar un servicio claro, escribir propuestas que consigan trabajo, acordar las condiciones por escrito, cobrar de forma segura y evitar los trabajos falsos que piden pagos, para que el trabajo en línea se convierta en un ingreso real y no en datos y dinero perdidos.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; traducido al francés y al árabe",
      "Dispositivos: a menudo solo un teléfono inteligente; los datos móviles son caros; la electricidad puede fallar",
      "Tiempo: lecciones de 4 a 6 minutos",
      "Las comisiones, reglas y métodos de pago de las plataformas cambian y son distintos en cada país; las reglas de impuestos también",
      "Nunca compartas contraseñas, PIN, códigos de un solo uso ni documentos de identidad con un cliente o un reclutador"
    ],
    prerequisites: "Saber usar el teléfono y tener una habilidad que puedas hacer para otros. Una dirección de correo electrónico."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una lista de tus propias habilidades", action: "elegir un servicio que puedas vender en línea y escribirlo como una oferta de una línea", standard: "diciendo qué haces, para quién y qué recibe el cliente" },
    { id: "O2", condition: "En una plataforma o una página sencilla en línea", action: "escribir el título y el resumen de un perfil y agregar dos o tres muestras pequeñas de trabajo", standard: "sin datos privados y con muestras hechas por ti" },
    { id: "O3", condition: "Ante una oferta de trabajo", action: "escribir una propuesta corta que responda a la necesidad del cliente, muestre una muestra relacionada y haga una pregunta", standard: "en menos de 150 palabras, escrita para esa oferta, no copiada" },
    { id: "O4", condition: "Antes de empezar un trabajo", action: "acordar por escrito el alcance, el precio, la fecha de entrega y el número de cambios, y entregar a tiempo", standard: "con un plan B para los cortes de luz o de datos" },
    { id: "O5", condition: "Después de acordar un trabajo", action: "elegir una forma segura de cobrar y registrar cada pago", standard: "manteniendo el trabajo y el pago dentro de la plataforma cuando usas una, y registrando cada pago en menos de una semana" },
    { id: "O6", condition: "Ante cinco ofertas o mensajes de trabajo", action: "identificar los falsos y nombrar la señal de alerta de cada uno", standard: "acertando al menos 4 de 5, antes de pagar o compartir cualquier dato" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararte para trabajar en línea",
      lessons: [
        {
          title: "Elegir un servicio que puedes vender",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir un servicio y escribirlo como una oferta de una línea.",
          text: [
            "Ser freelancer (trabajador independiente) significa hacer trabajos pagados para clientes, un trabajo a la vez, en lugar de trabajar para un solo empleador. El trabajo remoto es un empleo, de tiempo completo o parcial, que se hace desde casa o desde cualquier lugar en línea. Los dos empiezan con una habilidad que los clientes necesitan.",
            "Haz una lista de lo que ya sabes hacer: escribir, traducir entre inglés, francés, árabe o una lengua local, mecanografía y captura de datos, usar Excel o Google Sheets, diseño gráfico en Canva, redes sociales, atención al cliente, contabilidad, transcripción, clases particulares. Elige UNO para empezar; los clientes contratan especialistas.",
            "Escribe una oferta de una línea: qué haces, para quién y qué recibe el cliente. Ejemplo: \"Traduzco documentos de negocios del inglés al francés para pequeñas empresas, con precisión y en 48 horas.\" Ejemplo: Kofi, en Acra: \"Diseño volantes sencillos en Canva y publicaciones para redes sociales para tiendas e iglesias.\"",
            "Si necesitas más habilidades, usa la formación gratuita. El gobierno de Kenia ofrece Ajira Digital para el trabajo en línea, y el programa 3MTT de Nigeria forma a jóvenes en habilidades como datos, diseño y software."
          ],
          steps: ["Haz una lista de cinco cosas que puedes hacer para otros.", "Marca la que haces mejor y te gusta.", "Pregúntate: ¿quién paga por esto?", "Escribe: hago [qué] para [quién] y así obtienen [resultado].", "Si te falta habilidad, busca formación gratuita."],
          words: [["Freelancer", "persona que hace trabajos pagados para clientes, un trabajo a la vez."], ["Trabajo remoto", "un empleo que se hace en línea desde casa o desde cualquier lugar."], ["Oferta de servicio", "una frase que dice qué haces, para quién y qué recibe el cliente."]],
          slides: [
            { title: "Empieza con lo que sabes hacer", bullets: ["Escribir, traducir, mecanografiar, hojas de cálculo", "Diseño, redes sociales, atención al cliente", "Contabilidad, transcripción, clases particulares"] },
            { title: "Elige UN servicio", bullets: ["Los clientes contratan especialistas", "Elige el que haces mejor y te gusta"] },
            { title: "Tu oferta de una línea", bullets: ["Hago [qué] para [quién] y así obtienen [resultado]", "\"Traduzco del inglés al francés para pequeñas empresas, en 48 horas\""] },
            { title: "Formación gratuita", bullets: ["Kenia: Ajira Digital", "Nigeria: 3MTT", "Revisa las inscripciones abiertas en los sitios oficiales"] }
          ],
          sources: [AJIRA, THREE_MTT],
          tryIt: "Haz una lista de cinco cosas que puedes hacer para otros. Elige una y escribe tu oferta de una línea: hago [qué] para [quién] y así obtienen [resultado].",
          youCanNow: "elegir un servicio y describirlo en una oferta clara de una línea.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es la oferta de una línea más clara?", options: ["\"Puedo hacer cualquier cosa en línea\"", "\"Contrátame, por favor\"", "\"Paso formularios escritos a mano a Excel para clínicas, con precisión y rapidez\"", "\"Freelancer, todas las habilidades\""], answer: 2, why: "Dice qué, para quién y qué recibe el cliente." },
            { objective: "O1", q: "¿Por qué elegir UN solo servicio para empezar?", options: ["Los clientes buscan especialistas", "Las plataformas solo permiten una palabra", "Es la ley", "Gasta menos datos"], answer: 0, why: "Una especialidad clara hace que el cliente confíe y te contrate más fácilmente." }
          ]
        },
        {
          title: "Tu perfil y un pequeño portafolio",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escribir el título y el resumen de un perfil y agregar dos o tres muestras de trabajo.",
          text: [
            "Tu perfil es tu vitrina. El título dice tu servicio en pocas palabras: \"Traductora inglés-francés de documentos de negocios\". El resumen, de unos pocos párrafos cortos, dice a quién ayudas, qué haces, cómo trabajas y una prueba, como un trabajo anterior o una formación.",
            "Los clientes quieren pruebas. Un portafolio es un conjunto de muestras de tu trabajo. Si todavía no tienes clientes, haz tú mismo las muestras: traduce un aviso público corto, diseña un volante para una tienda imaginaria, ordena una pequeña hoja de cálculo de ejemplo. Nunca uses el trabajo de otra persona ni compartas información real de un cliente sin permiso.",
            "No pongas datos privados en tu perfil: ni tu dirección, ni tu número de identificación, ni tus datos bancarios. Usa una foto clara y amable si la plataforma la pide.",
            "Ahorra datos: escribe primero tu perfil en una aplicación de notas y luego pégalo una sola vez. Comprime las imágenes antes de subirlas. Ejemplo: Mariam, en Casablanca, escribe su perfil en árabe y francés sin conexión y luego lo sube en diez minutos en un cibercafé."
          ],
          steps: ["Escribe un título: tu servicio en pocas palabras.", "Escribe el resumen: a quién ayudas, qué haces, cómo trabajas y una prueba.", "Haz tú mismo dos o tres muestras pequeñas.", "Revisa: sin datos privados y sin trabajo ajeno.", "Escríbelo primero sin conexión y luego pégalo."],
          words: [["Perfil", "tu página en una plataforma que dice a los clientes quién eres y qué haces."], ["Portafolio", "unas pocas muestras de tu trabajo que demuestran tu habilidad."], ["Título", "una línea corta debajo de tu nombre que dice tu servicio."]],
          slides: [
            { title: "Título y resumen", bullets: ["Título: tu servicio en pocas palabras", "Resumen: a quién ayudas, qué haces, cómo, una prueba"] },
            { title: "Portafolio: muestra pruebas", bullets: ["Dos o tres muestras pequeñas", "¿Aún sin clientes? Haz tú mismo las muestras", "Nunca uses el trabajo de otras personas"] },
            { title: "Seguro y ligero", bullets: ["Sin dirección, identificación ni datos bancarios", "Escribe sin conexión y pega una vez", "Comprime las imágenes para ahorrar datos"] }
          ],
          tryIt: "Escribe tu título y un resumen corto en una aplicación de notas. Luego haz una muestra pequeña de trabajo para tu servicio, por ejemplo un párrafo traducido, un volante o una hoja de cálculo ordenada.",
          youCanNow: "escribir un perfil claro y mostrar tu habilidad con pequeñas muestras de trabajo.",
          quickCheck: [
            { objective: "O2", q: "Todavía no tienes clientes. ¿Cómo puedes armar un portafolio?", options: ["Copiar el trabajo de un diseñador famoso", "Hacer tú mismo muestras pequeñas", "Usar el trabajo de un amigo con tu nombre", "Esperar a que un cliente te contrate"], answer: 1, why: "Las muestras que haces tú mismo son una prueba honesta de tu habilidad." },
            { objective: "O2", q: "¿Qué NO debe ir en tu perfil?", options: ["Tu título", "Tu servicio", "Una muestra de tu trabajo", "Tu dirección y tu número de identificación"], answer: 3, why: "Los datos privados se pueden usar mal; tu perfil solo necesita tus habilidades y pruebas." }
          ]
        },
        {
          title: "Encontrar trabajos y escribir una propuesta",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escribir una propuesta corta que responda a la necesidad de un cliente.",
          text: [
            "Dónde encontrar trabajo: plataformas para freelancers (como Upwork y Fiverr), LinkedIn, bolsas de empleo y personas que conoces, como negocios locales, iglesias, ONG y escuelas que necesitan ayuda en línea. Tus primeros clientes suelen estar cerca de ti.",
            "Lee la oferta de trabajo dos veces. Busca la necesidad del cliente, la fecha de entrega y cualquier pregunta que haga. Descarta las ofertas vagas, las que no pagan o las que te piden pagar.",
            "Una propuesta es tu respuesta corta. Que tenga menos de 150 palabras: 1. Muestra en una frase que entendiste la necesidad. 2. Di cómo lo harás. 3. Señala una muestra relacionada. 4. Haz una pregunta útil. Escríbela para esa oferta; los clientes reconocen un mensaje copiado.",
            "Ejemplo: un cliente necesita pasar 200 nombres de productos a una hoja de cálculo. Ngozi, en Lagos, escribe: \"Necesita pasar 200 nombres de productos y sus precios a una hoja de cálculo antes del viernes. Voy a escribir y revisar cada fila dos veces. Aquí tiene una hoja de ejemplo que hice. ¿Los precios van en nairas o en dólares?\""
          ],
          steps: ["Lee la oferta dos veces; anota la necesidad, la fecha de entrega y cualquier pregunta.", "Descarta las ofertas vagas o las que te piden pagar.", "Frase 1: la necesidad del cliente con tus palabras.", "Frase 2: cómo lo harás.", "Agrega una muestra relacionada.", "Haz una pregunta útil.", "Que tenga menos de 150 palabras."],
          words: [["Oferta de trabajo", "la descripción que hace un cliente del trabajo que necesita."], ["Propuesta", "tu respuesta corta a una oferta de trabajo, en la que dices cómo harás el trabajo."]],
          slides: [
            { title: "Dónde encontrar trabajo", bullets: ["Plataformas como Upwork y Fiverr", "LinkedIn y bolsas de empleo", "Negocios locales, ONG, iglesias, escuelas"] },
            { title: "Lee la oferta dos veces", bullets: ["La necesidad, la fecha de entrega, las preguntas", "Descarta las ofertas vagas y las que te piden pagar"] },
            { title: "Propuesta en cuatro partes", bullets: ["1. La necesidad con tus palabras  2. Cómo lo harás", "3. Una muestra relacionada  4. Una pregunta útil", "Menos de 150 palabras, escrita para esta oferta"] }
          ],
          tryIt: "Busca una oferta real para tu servicio (o usa el ejemplo de la hoja de cálculo). Escribe una propuesta de menos de 150 palabras con las cuatro partes.",
          youCanNow: "escribir una propuesta corta que muestre al cliente que entendiste su necesidad.",
          quickCheck: [
            { objective: "O3", q: "¿Qué debe hacer la primera frase de una propuesta?", options: ["Mostrar que entendiste la necesidad del cliente", "Contar la historia de tu vida", "Pedir el pago primero", "Enumerar todas tus habilidades"], answer: 0, why: "Mostrar que entendiste la necesidad capta la atención del cliente." },
            { objective: "O3", q: "¿Por qué escribir cada propuesta para esa oferta en particular?", options: ["Las plataformas exigen propuestas largas", "Los clientes reconocen un mensaje copiado y lo descartan", "Gasta menos datos", "Las propuestas copiadas son ilegales"], answer: 1, why: "Una propuesta escrita para la oferta muestra interés y comprensión." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte para trabajar en línea",
        questions: [
          { objective: "O1", q: "¿Qué tres cosas dice una oferta de una línea?", options: ["Tu edad, tu ciudad y tu escuela", "Tu tarifa, tu teléfono y tu banco", "Qué haces, para quién y qué recibe el cliente", "Tus pasatiempos, tu familia y tus metas"], answer: 2, why: "El qué, el para quién y el resultado hacen clara una oferta." },
          { objective: "O1", q: "Hablas bien árabe y francés. ¿Qué servicio podrías ofrecer?", options: ["Traducción entre árabe y francés", "Reparar autos en línea", "Vender cuentas de otras personas", "Nada; los idiomas no son una habilidad"], answer: 0, why: "Los idiomas son una habilidad por la que muchos clientes pagan." },
          { objective: "O2", q: "¿Qué es un portafolio?", options: ["Tu estado de cuenta bancario", "Unas pocas muestras de tu trabajo que demuestran tu habilidad", "Tu documento de identidad", "Una lista de contraseñas de clientes"], answer: 1, why: "Un portafolio muestra a los clientes lo que sabes hacer." },
          { objective: "O3", q: "Una buena propuesta es:", options: ["Larga, con todas tus habilidades", "El mismo mensaje enviado a todas las ofertas", "Una petición de pago por adelantado", "Corta, escrita para la oferta, con una muestra y una pregunta"], answer: 3, why: "Las propuestas cortas, concretas y con pruebas consiguen más trabajo." },
          { objective: "O3", q: "Una oferta de trabajo te pide pagar una cuota para postularte. ¿Qué haces?", options: ["Pagar rápido", "Pagar la mitad", "Descartarla", "Enviar tu identificación en su lugar"], answer: 2, why: "Los clientes reales te pagan a ti; no te piden pagar para postularte." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer el trabajo y cobrar",
      lessons: [
        {
          title: "Acordar el trabajo y entregar a tiempo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Acordar por escrito el alcance, el precio, la fecha de entrega y los cambios antes de empezar.",
          text: [
            "Antes de empezar, acuerda por escrito (en los mensajes de la plataforma o en un correo corto) cuatro cosas: el alcance (exactamente lo que vas a entregar), el precio, la fecha de entrega (con la zona horaria) y cuántas rondas de cambios están incluidas.",
            "Ejemplo: \"Alcance: diseñar 3 publicaciones para redes sociales de su panadería. Precio: el acordado en el contrato. Entrega: jueves a las 5 p. m., hora de Londres. Cambios: hasta 2 rondas.\" Si después el cliente pide más, ofrécele con amabilidad un nuevo precio por el trabajo extra.",
            "Planea para los cortes de luz y de datos. Carga tu teléfono y una batería externa, guarda tu trabajo seguido en la nube, ten un lugar de respaldo para trabajar (cibercafé, centro tecnológico, biblioteca) y no dejes el trabajo para el último día. Si algo sale mal, avisa al cliente pronto y con honestidad; la mayoría acepta un retraso corto si se lo dices con anticipación.",
            "Ejemplo: Ibrahima, en Thiès, trabaja desde las 6 a. m., antes de que suelan empezar los cortes de luz, y guarda una copia de cada archivo en Google Drive."
          ],
          steps: ["Escribe el alcance: exactamente lo que vas a entregar.", "Escribe el precio y la fecha de entrega, con la zona horaria.", "Escribe cuántas rondas de cambios están incluidas.", "Consigue el sí del cliente por escrito.", "Guarda tu trabajo seguido; ten un respaldo de luz y de datos.", "Si vas a llegar tarde, avisa al cliente pronto."],
          words: [["Alcance", "exactamente el trabajo que vas a entregar."], ["Zona horaria", "la hora local de un lugar; entre Londres, Lagos y Nairobi puede haber horas de diferencia."], ["Revisión", "un cambio que pide el cliente después de ver tu trabajo."]],
          slides: [
            { title: "Acuerda cuatro cosas por escrito", bullets: ["Alcance: exactamente lo que entregas", "Precio", "Fecha de entrega, con zona horaria", "Rondas de cambios incluidas"] },
            { title: "Más trabajo = nuevo precio", bullets: ["Los pedidos extra son trabajo nuevo", "Ofrece un nuevo precio con amabilidad"] },
            { title: "Planea para los cortes", bullets: ["Batería externa; guarda seguido en la nube", "Un lugar de respaldo para trabajar", "¿Vas tarde? Avisa al cliente pronto"] }
          ],
          tryIt: "Escribe un mensaje corto de alcance para un trabajo de tu servicio: alcance, precio (como ejemplo), fecha de entrega con zona horaria y rondas de cambios. Luego escribe tu plan B para un corte de luz o de datos.",
          youCanNow: "acordar por escrito el alcance, el precio, la fecha de entrega y los cambios de un trabajo, y entregar a tiempo con un plan B.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál NO es una de las cuatro cosas que hay que acordar antes de empezar?", options: ["El alcance", "El precio", "La fecha de entrega", "Tu música favorita"], answer: 3, why: "Las cuatro son el alcance, el precio, la fecha de entrega y los cambios." },
            { objective: "O4", q: "Se fue la luz y quizás no llegues a la entrega de mañana. ¿Qué haces?", options: ["No decir nada y esperar", "Avisar al cliente pronto y darle una nueva hora", "Borrar el trabajo", "Pedirle más dinero al cliente"], answer: 1, why: "Un aviso pronto y honesto mantiene la confianza del cliente." }
          ]
        },
        {
          title: "Cobrar y llevar registros",
          objectives: ["O5"],
          minutes: 5,
          goal: "Elegir una forma segura de cobrar y registrar cada pago.",
          text: [
            "En una plataforma, mantén el trabajo, los mensajes y el pago dentro de la plataforma. Su protección de pagos solo funciona ahí. Los clientes que te piden salir de la plataforma para pagarte \"directamente\" a menudo son estafadores, y además puede ir contra las reglas de la plataforma.",
            "Las plataformas pagan de distintas formas: a una cuenta bancaria, a servicios como Payoneer o por otros medios. Lo que funciona depende de la plataforma y de tu país, y las comisiones cambian. Lee las páginas de pagos y comisiones en el centro de ayuda de la propia plataforma antes de aceptar tu primer trabajo.",
            "Con clientes directos que conoces, acuerda cómo te pagarán antes de empezar: transferencia bancaria o dinero móvil, y cuándo (por ejemplo, la mitad antes y la mitad al entregar). Si no estás seguro, entrega primero una muestra o una vista previa.",
            "Registra cada pago: fecha, cliente, trabajo, monto y moneda (USD, EUR, KES, NGN, GHS, XOF, MAD), comisiones y el monto que recibiste. Los ingresos en línea pueden pagar impuestos. Pregunta a la autoridad tributaria de tu país, por ejemplo la Autoridad Tributaria de Kenia (KRA) o la de Ghana (GRA), o a un asesor fiscal, qué debes registrar y pagar."
          ],
          steps: ["En una plataforma, mantén el trabajo y el pago dentro de ella.", "Lee las páginas de pagos y comisiones de la propia plataforma.", "Con clientes directos, acuerda cómo y cuándo pagan antes de empezar.", "Registra cada pago en menos de una semana: fecha, cliente, trabajo, monto, moneda, comisiones, recibido.", "Pregunta a la autoridad tributaria de tu país qué se aplica a tu caso."],
          words: [["Protección de pagos", "el sistema de una plataforma que retiene o garantiza el pago del trabajo hecho dentro de ella."], ["Moneda", "el tipo de dinero: dólares estadounidenses, euros, nairas, cedis, chelines, francos CFA, dírhams."], ["Autoridad tributaria", "la oficina del gobierno que cobra los impuestos, como la KRA en Kenia o la GRA en Ghana."]],
          slides: [
            { title: "Quédate en la plataforma", bullets: ["Trabajo, mensajes y pago dentro de ella", "La protección solo funciona ahí", "\"Te pago directo fuera de la plataforma\" = señal de alerta"] },
            { title: "Formas de cobro", bullets: ["Banco, Payoneer u otras: depende del país", "Lee las páginas de ayuda de la propia plataforma", "Las comisiones cambian: revisa antes del primer trabajo"] },
            { title: "Registros e impuestos", bullets: ["Fecha, cliente, trabajo, monto, moneda, comisiones", "Registra cada pago en menos de una semana", "Pregunta a la KRA, la GRA o tu autoridad tributaria"] }
          ],
          sources: [KRA, GRA],
          tryIt: "Haz una tabla de registro de pagos con estas columnas: fecha, cliente, trabajo, monto, moneda, comisiones, monto recibido. Agrega una fila de ejemplo. Luego busca la página de ayuda sobre pagos de una plataforma que podrías usar.",
          youCanNow: "elegir una forma segura de cobrar, registrar cada pago y saber dónde preguntar sobre impuestos.",
          quickCheck: [
            { objective: "O5", q: "Un cliente nuevo en una plataforma te pide pasar a WhatsApp y cobrar \"directamente\". ¿Cuál es el riesgo?", options: ["Pierdes la protección de pagos de la plataforma, y a menudo es una estafa", "Ninguno; es más rápido", "Te pagarán el doble", "La plataforma pagará la comisión"], answer: 0, why: "La protección de pagos solo funciona dentro de la plataforma; los pedidos de salir de ella son una señal común de estafa." },
            { objective: "O5", q: "¿Quién puede decirte qué impuestos debes pagar por tus ingresos en línea?", options: ["Tu cliente", "Un grupo de WhatsApp", "La autoridad tributaria de tu país o un asesor fiscal", "Nadie; los ingresos en línea nunca pagan impuestos"], answer: 2, why: "Las reglas de impuestos son distintas en cada país; la autoridad tributaria o un asesor te lo pueden decir." }
          ]
        },
        {
          title: "Trabajos falsos y estafas de pago",
          objectives: ["O6"],
          minutes: 6,
          goal: "Identificar las ofertas de trabajo falsas y nombrar la señal de alerta de cada una.",
          text: [
            "Los freelancers nuevos son un blanco fácil. Señales de alerta: 1. Te piden que TÚ pagues: inscripción, formación, un \"kit de inicio\" o un programa. 2. Un pago demasiado alto para un trabajo fácil, como \"gana USD 500 al día dando me gusta a videos\". 3. Te piden tus contraseñas, tu PIN, códigos de un solo uso o documentos de identidad. 4. Quieren sacarte de la plataforma de inmediato. 5. Te \"pagan de más\" con un cheque o una transferencia y te piden devolver la diferencia. 6. Trabajos de \"tareas\" o de \"inversión\" en los que depositas dinero para desbloquear tareas o ganancias, a menudo promovidos en WhatsApp, Telegram y TikTok.",
            "La SEC de Nigeria (la comisión que regula las inversiones) ha advertido sobre esquemas promovidos en redes sociales que prometen grandes ganancias. Los clientes reales te pagan por trabajar; nunca te piden pagar para trabajar.",
            "Protege tus cuentas: una contraseña fuerte y distinta para tu correo y para cada plataforma, la verificación en dos pasos activada, y nunca compartas códigos. No dejes que nadie \"alquile\" ni use tu cuenta verificada; se puede usar para cometer fraudes a tu nombre.",
            "Después arma tu kit de inicio: tu oferta, tu perfil, tus muestras, una propuesta y tu lista de seguridad y pagos."
          ],
          steps: ["Pregúntate: ¿quieren que yo pague?", "Pregúntate: ¿el pago es demasiado bueno para el trabajo?", "Pregúntate: ¿piden contraseñas, códigos o identificación?", "Pregúntate: ¿me apuran para salir de la plataforma?", "Si alguna respuesta es sí: detente, no pagues y repórtalo a la plataforma.", "Activa la verificación en dos pasos y nunca compartas códigos."],
          words: [["Estafa del pago de más", "un pago falso por demasiado dinero, seguido de un pedido de devolver la diferencia antes de que el pago falso sea rechazado."], ["Verificación en dos pasos", "un segundo control al iniciar sesión, como un código enviado a tu teléfono."], ["Estafa de tareas", "un trabajo falso en el que debes depositar dinero para desbloquear tareas o ganancias."]],
          slides: [
            { title: "Señales de alerta de un trabajo falso", bullets: ["Te piden pagar para trabajar", "Un pago demasiado alto para un trabajo fácil", "Quieren contraseñas, códigos o identificación"] },
            { title: "Más trucos", bullets: ["Te apuran para salir de la plataforma", "Te pagan de más y luego piden \"devuelve la diferencia\"", "Depositar para desbloquear tareas o ganancias"] },
            { title: "Protege tus cuentas", bullets: ["Contraseñas fuertes y distintas", "Verificación en dos pasos activada", "Nunca alquiles tu cuenta verificada"] },
            { title: "Tu kit de inicio", bullets: ["Oferta, perfil, muestras", "Una propuesta", "Lista de seguridad y pagos"] }
          ],
          sources: [SEC_NG],
          tryIt: "Tarea final: arma tu kit de inicio como freelancer: oferta de una línea, título y resumen del perfil, dos o tres muestras, una propuesta para una oferta real o de ejemplo, y una lista con tu forma de cobro, tu tabla de registros, dónde preguntarás sobre impuestos y las seis señales de alerta de los trabajos falsos.",
          youCanNow: "detectar trabajos falsos y estafas de pago, y presentarte como un freelancer listo para ser contratado.",
          quickCheck: [
            { objective: "O6", q: "Un \"reclutador\" ofrece un trabajo de captura de datos pero pide USD 20 por un kit de inicio. ¿Cuál es la señal de alerta?", options: ["El trabajo es de captura de datos", "El reclutador es amable", "El trabajo es de medio tiempo", "Te piden pagar para trabajar"], answer: 3, why: "Los clientes reales te pagan a ti; que te pidan pagar es la señal clásica de un trabajo falso." },
            { objective: "O6", q: "Un cliente envía más dinero del acordado y te pide devolver la diferencia rápido. ¿Qué es esto?", options: ["Un cliente generoso", "Una estafa del pago de más", "Un bono de la plataforma", "Una devolución de impuestos"], answer: 1, why: "El primer pago suele ser falso y se rechaza después de que devuelves tu propio dinero." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer el trabajo y cobrar",
        questions: [
          { objective: "O4", q: "¿Por qué acordar el número de cambios antes de empezar?", options: ["Para que los cambios sin fin no te quiten tiempo sin pago", "Para que el cliente pague menos", "Porque las plataformas exigen cinco cambios", "No es importante"], answer: 0, why: "Los cambios acordados protegen tu tiempo; el trabajo extra tiene un nuevo precio." },
          { objective: "O4", q: "Tu cliente está en Londres y tú en Nairobi. ¿Por qué escribir la zona horaria junto a la fecha de entrega?", options: ["Es de buena educación", "La hora es distinta, así los dos saben exactamente cuándo se entrega", "Hace que el trabajo cueste más", "Las plataformas prohíben fechas de entrega sin ella"], answer: 1, why: "La hora cambia entre países; la zona horaria evita confusiones." },
          { objective: "O5", q: "¿Qué va en tu registro de pagos?", options: ["Tu contraseña", "Tu PIN", "Fecha, cliente, trabajo, monto, moneda y comisiones", "La dirección privada del cliente"], answer: 2, why: "Estos datos permiten seguir tus ingresos y ayudan con los impuestos." },
          { objective: "O6", q: "¿Qué oferta es más probable que sea real?", options: ["\"Paga USD 30 para desbloquear tareas\"", "\"Envía tu código de acceso para configurar tu cuenta\"", "\"Gana USD 500 al día dando me gusta a videos\"", "Un cliente en la plataforma que acuerda alcance y precio y paga a través de la plataforma"], answer: 3, why: "El trabajo real tiene un alcance y un precio claros y se paga por medios seguros." },
          { objective: "O6", q: "Alguien quiere \"alquilar\" tu cuenta verificada de freelancer. ¿Qué haces?", options: ["Negarte; se puede usar para cometer fraudes a tu nombre", "Aceptar por un pago pequeño", "Compartir solo la contraseña", "Compartirla primero con un amigo"], answer: 0, why: "Tu cuenta está ligada a tu identidad; otras personas pueden usarla mal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Trabajo freelance y trabajo remoto desde África",
    questions: [
      { objective: "O1", q: "¿Qué es un freelancer?", options: ["Una persona que trabaja gratis", "Una persona que hace trabajos pagados para clientes, un trabajo a la vez", "Un empleado del gobierno", "El dueño de una plataforma"], answer: 1, why: "Los freelancers venden sus servicios trabajo por trabajo a distintos clientes." },
      { objective: "O1", q: "¿Cuál es una buena oferta de una línea?", options: ["\"Hago de todo\"", "\"Buen trabajador, contrátame\"", "\"Trabajos en línea\"", "\"Escribo descripciones de productos para tiendas en línea que les ayudan a vender\""], answer: 3, why: "Dice qué, para quién y el resultado." },
      { objective: "O1", q: "Necesitas más habilidades antes de empezar. ¿Qué buena opción gratuita hay en Nigeria?", options: ["El programa 3MTT", "Una \"academia\" de WhatsApp de pago que promete trabajos", "Comprar una cuenta verificada", "Una aplicación de tareas que pide un depósito"], answer: 0, why: "3MTT es un programa de formación del gobierno; las otras opciones son señales de alerta." },
      { objective: "O2", q: "El título de un perfil debe:", options: ["Mostrar tu número de teléfono", "Decir tu servicio en pocas palabras", "Contar toda la historia de tu vida", "Mostrar tu número de identificación"], answer: 1, why: "Un título corto dice a los clientes de un vistazo lo que haces." },
      { objective: "O2", q: "¿Cuál es una muestra de trabajo honesta?", options: ["Un volante que diseñaste para una tienda imaginaria", "El trabajo de un diseñador famoso", "El ensayo de un amigo", "El archivo privado de un cliente compartido sin permiso"], answer: 0, why: "Las muestras que haces tú mismo son una prueba honesta." },
      { objective: "O2", q: "¿Cómo puedes ahorrar datos al hacer tu perfil?", options: ["Subir fotos enormes", "Reescribirlo en línea muchas veces", "Escribirlo primero sin conexión y luego pegarlo una vez", "Usar solo videollamadas"], answer: 2, why: "Escribir sin conexión y comprimir las imágenes ahorra datos, que son caros." },
      { objective: "O3", q: "¿Qué tan larga suele ser una buena primera propuesta?", options: ["Dos páginas", "Una palabra", "Lo más larga posible", "Menos de unas 150 palabras"], answer: 3, why: "Las propuestas cortas se leen; las largas se descartan." },
      { objective: "O3", q: "¿Qué va en una propuesta?", options: ["Una muestra relacionada y una pregunta útil", "El PIN de tu banco", "Una petición de pago por adelantado", "Una copia de tu identificación"], answer: 0, why: "Una prueba y una buena pregunta muestran que puedes hacer el trabajo." },
      { objective: "O3", q: "¿Dónde se encuentran a menudo los primeros clientes?", options: ["Solo en el extranjero", "Solo en un sitio web", "En negocios locales, ONG, escuelas e iglesias, además de las plataformas", "En ningún lado sin pagarle a un reclutador"], answer: 2, why: "Muchos freelancers empiezan con personas y negocios cercanos." },
      { objective: "O4", q: "¿Qué significa \"alcance\"?", options: ["El país del cliente", "Exactamente lo que vas a entregar", "Tu precio", "La comisión de la plataforma"], answer: 1, why: "El alcance es el trabajo exacto que se acordó." },
      { objective: "O4", q: "El cliente pide un diseño nuevo que no estaba en el alcance acordado. ¿Qué haces?", options: ["Hacerlo gratis, muchas veces", "Ignorar el mensaje", "Cancelar el trabajo", "Ofrecer con amabilidad un nuevo precio por el trabajo extra"], answer: 3, why: "El trabajo extra fuera del alcance es trabajo nuevo con un nuevo precio." },
      { objective: "O4", q: "¿Cuál es un buen plan B para los cortes de luz?", options: ["Cargar una batería externa y guardar el trabajo seguido en la nube", "Esperar que no se vaya la luz", "Trabajar solo la noche anterior", "No decirle nada al cliente"], answer: 0, why: "Una batería externa, guardar en la nube y un lugar de respaldo te ayudan a entregar a tiempo." },
      { objective: "O5", q: "¿Por qué mantener el trabajo y el pago dentro de una plataforma?", options: ["Es más lento", "Su protección de pagos solo funciona ahí", "No tiene ninguna comisión", "El cliente lo prefiere"], answer: 1, why: "Salir de la plataforma quita su protección y es un camino común de estafa." },
      { objective: "O5", q: "¿Dónde conoces las formas de cobro y las comisiones actuales de una plataforma?", options: ["En un comentario de YouTube", "En lo que supone un amigo", "En el centro de ayuda de la propia plataforma", "Con el cliente"], answer: 2, why: "Las formas de cobro y las comisiones cambian según el país y con el tiempo; las páginas de la propia plataforma están al día." },
      { objective: "O5", q: "¿En cuánto tiempo debes registrar un pago?", options: ["En menos de una semana", "Al final del año", "Nunca", "Solo los pagos grandes"], answer: 0, why: "Registrar pronto mantiene tus registros completos para planear y para los impuestos." },
      { objective: "O5", q: "En Ghana, ¿quién puede informarte sobre los impuestos de tus ingresos en línea?", options: ["Tu cliente", "Un video de TikTok", "La Autoridad Tributaria de Ghana (GRA) o un asesor fiscal", "El chatbot de la plataforma"], answer: 2, why: "La autoridad tributaria del país fija y explica las reglas de impuestos." },
      { objective: "O6", q: "¿Cuál es una señal de alerta de un trabajo falso?", options: ["Un alcance y un precio claros", "Te piden pagar una inscripción o un kit de inicio", "El pago a través de la plataforma", "Una fecha de entrega con zona horaria"], answer: 1, why: "Los clientes reales nunca te piden pagar para trabajar." },
      { objective: "O6", q: "Un \"trabajo\" te pide depositar dinero para desbloquear tareas que pagan más. Esto es:", options: ["Un trabajo normal", "Una cuota de formación", "Un impuesto", "Una estafa de tareas"], answer: 3, why: "Depositar para desbloquear tareas o ganancias es una estafa común." },
      { objective: "O6", q: "¿Qué protege tus cuentas de freelancer y de correo?", options: ["Una sola contraseña para todo", "Compartir códigos con los clientes", "Contraseñas fuertes y distintas y la verificación en dos pasos", "Alquilar tu cuenta a otras personas"], answer: 2, why: "Contraseñas distintas y un segundo control al iniciar sesión evitan la mayoría de los robos de cuentas." },
      { objective: "O6", q: "Un reclutador te pide una foto de tu identificación y la contraseña de tu correo \"para verificarte\". ¿Qué haces?", options: ["Negarte y reportarlo", "Enviar las dos", "Enviar solo la contraseña", "Enviar solo la identificación"], answer: 0, why: "Los clientes reales nunca necesitan tu contraseña; los pedidos de identificación de desconocidos son un riesgo de fraude." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      { name: "Oferta clara", objective: "O1", notYet: "La oferta es vaga (\"Hago de todo en línea\").", meets: "Un servicio, que dice qué haces, para quién y qué recibe el cliente.", exceeds: "La oferta nombra un tipo de cliente concreto y un resultado o plazo de entrega claro." },
      { name: "Perfil y muestras", objective: "O2", notYet: "No hay título ni resumen, no hay muestras o se muestran datos privados.", meets: "Título, resumen corto y dos o tres muestras hechas por el participante, sin datos privados.", exceeds: "Las muestras coinciden bien con la oferta y el resumen incluye una prueba (formación o un trabajo anterior)." },
      { name: "Propuesta", objective: "O3", notYet: "Larga, copiada o no menciona la necesidad del cliente.", meets: "Menos de 150 palabras, escrita para la oferta: la necesidad, el cómo, una muestra, una pregunta.", exceeds: "La pregunta muestra que pensó de verdad en el trabajo, y la propuesta se ajusta al tono del cliente." },
      { name: "Acordar el trabajo", objective: "O4", notYet: "No hay alcance ni fecha de entrega por escrito.", meets: "Un mensaje con alcance, precio, fecha de entrega con zona horaria y cambios, más un plan B para cortes de luz o de datos.", exceeds: "También explica cómo se cobrará el trabajo extra." },
      { name: "Pagos y registros", objective: "O5", notYet: "No hay forma de cobro ni tabla de registros.", meets: "Una forma segura de cobro (dentro de la plataforma, o acordada antes con un cliente conocido), una tabla de registros y dónde preguntar sobre impuestos.", exceeds: "La forma de cobro se revisó en la página de ayuda de la propia plataforma." },
      { name: "Atención a las estafas", objective: "O6", notYet: "Menos de cuatro señales de alerta, o planea pagar una cuota para conseguir trabajo.", meets: "Enumera las seis señales de alerta de los trabajos falsos y dice que la verificación en dos pasos está activada.", exceeds: "Agrega una oferta falsa real que vio y cómo la detectó." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que envían al menos tres propuestas en 30 días",
      "Participantes que informan de un primer trabajo pagado en línea en 90 días",
      "Participantes que informan haber rechazado un trabajo falso o una estafa de pago en 30 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono inteligente o una computadora con algo de datos, y una dirección de correo electrónico",
      "Una aplicación de notas o papel para preparar el perfil y la propuesta",
      "Herramientas gratuitas para las muestras, como Google Docs o Sheets, Canva o Microsoft 365",
      "Unos 75 minutos en total, en sesiones cortas, más tiempo para hacer las muestras"
    ],
    facilitatorNotes: [
      "Funciona bien en centros juveniles, centros Ajira, grupos de 3MTT, bibliotecas y grupos juveniles de iglesias o mezquitas: hagan juntos la prueba inicial y luego un capítulo por sesión.",
      "Lleve ofertas de trabajo de ejemplo impresas para que los participantes practiquen propuestas sin usar datos.",
      "No recomiende \"academias de freelance\" de pago ni vendedores de cuentas; indique la formación gratuita y oficial.",
      "Nunca pida a los participantes que compartan contraseñas, códigos, documentos de identidad ni datos de cobro en clase.",
      "Forme parejas para que revisen las propuestas del otro con la rúbrica antes de enviarlas.",
      "Antes de la sesión, revise las páginas de ayuda actuales de cada plataforma sobre pagos en su país; cambian."
    ]
  }
};
